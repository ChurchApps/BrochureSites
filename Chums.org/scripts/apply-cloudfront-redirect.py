#!/usr/bin/env python3
"""Publish a CloudFront Function that 301s chums.org (and www) to https://b1.church + path + query.

Hosting: CloudFront E3HSNKONYYRLKN in front of s3://chums-web via the S3 REST API
(not the S3 website endpoint). S3 website redirects and HTML/JS refreshes are not
HTTP 301s through this origin. A viewer-request CloudFront Function is.

This script does not touch app.chums.org, staging.chums.org, or
app.staging.chums.org. Those hosts are other CloudFront distributions:
- app.chums.org / admin.b1.church: ChurchApps/B1Admin -> s3://chums-app (E2OZ4STEUZXHZZ)
- app.staging.chums.org: ChurchApps/B1Admin -> s3://staging-chums-app
- staging.chums.org: leftover ChurchApps marketing CRA (cert is churchapps.org); not this repo
"""

from __future__ import annotations

import json
import subprocess
import sys
import tempfile
from pathlib import Path

DIST_ID = "E3HSNKONYYRLKN"
FUNCTION_NAME = "chums-org-to-b1"
BUCKET = "chums-web"
RUNTIME = "cloudfront-js-2.0"
COMMENT = "301 chums.org and www.chums.org to https://b1.church + path + query"
ROOT = Path(__file__).resolve().parent.parent
FUNCTION_FILE = ROOT / "cloudfront" / "redirect-to-b1.js"


def run_text(args: list[str]) -> str:
    result = subprocess.run(args, capture_output=True, text=True, check=False)
    if result.returncode != 0:
        raise RuntimeError(f"Command failed ({result.returncode}): {' '.join(args)}\n{result.stderr}")
    return result.stdout


def aws_json(args: list[str]) -> dict:
    return json.loads(run_text(args))


def upsert_function() -> str:
    config = json.dumps({"Comment": COMMENT, "Runtime": RUNTIME})
    code_arg = f"fileb://{FUNCTION_FILE}"
    existing = subprocess.run(
        ["aws", "cloudfront", "describe-function", "--name", FUNCTION_NAME],
        capture_output=True,
        text=True,
        check=False,
    )
    if existing.returncode == 0:
        etag = json.loads(existing.stdout)["ETag"]
        updated = subprocess.run(
            [
                "aws", "cloudfront", "update-function",
                "--name", FUNCTION_NAME,
                "--if-match", etag,
                "--function-config", config,
                "--function-code", code_arg,
            ],
            capture_output=True,
            text=True,
            check=False,
        )
        if updated.returncode != 0:
            raise RuntimeError(updated.stderr or "update-function failed")
        etag = json.loads(updated.stdout)["ETag"]
    else:
        created = subprocess.run(
            [
                "aws", "cloudfront", "create-function",
                "--name", FUNCTION_NAME,
                "--function-config", config,
                "--function-code", code_arg,
            ],
            capture_output=True,
            text=True,
            check=False,
        )
        if created.returncode != 0:
            raise RuntimeError(created.stderr or "create-function failed")
        etag = json.loads(created.stdout)["ETag"]

    published = aws_json(["aws", "cloudfront", "publish-function", "--name", FUNCTION_NAME, "--if-match", etag])
    arn = published["FunctionSummary"]["FunctionMetadata"]["FunctionARN"]
    print(f"Published {FUNCTION_NAME} -> {arn}")
    return arn


def associate_function(arn: str) -> None:
    dist = aws_json(["aws", "cloudfront", "get-distribution-config", "--id", DIST_ID])
    etag = dist["ETag"]
    config = dist["DistributionConfig"]
    config["DefaultCacheBehavior"]["FunctionAssociations"] = {
        "Quantity": 1,
        "Items": [{"FunctionARN": arn, "EventType": "viewer-request"}],
    }
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as handle:
        json.dump(config, handle)
        config_path = handle.name
    updated = subprocess.run(
        ["aws", "cloudfront", "update-distribution", "--id", DIST_ID, "--if-match", etag, "--distribution-config", f"file://{config_path}"],
        capture_output=True,
        text=True,
        check=False,
    )
    Path(config_path).unlink(missing_ok=True)
    if updated.returncode != 0:
        raise RuntimeError(updated.stderr or "update-distribution failed")
    print(f"Associated {FUNCTION_NAME} as viewer-request on {DIST_ID}")


def empty_bucket() -> None:
    run_text(["aws", "s3", "rm", f"s3://{BUCKET}", "--recursive"])
    print(f"Emptied s3://{BUCKET} so the retired Vite app is no longer served")


def invalidate() -> None:
    run_text(["aws", "cloudfront", "create-invalidation", "--distribution-id", DIST_ID, "--paths", "/*"])
    print(f"Invalidated CloudFront {DIST_ID}")


def main() -> int:
    if not FUNCTION_FILE.is_file():
        print(f"Missing {FUNCTION_FILE}", file=sys.stderr)
        return 1
    try:
        arn = upsert_function()
        associate_function(arn)
        empty_bucket()
        invalidate()
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
