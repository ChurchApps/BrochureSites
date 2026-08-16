// Brochure apex only (CloudFront E3HSNKONYYRLKN / s3://chums-web).
// app.chums.org and staging.chums.org are other distributions — do not add them here.
function handler(event) {
  var host = ((event.request.headers.host && event.request.headers.host.value) || "").toLowerCase();
  if (host !== "chums.org" && host !== "www.chums.org") {
    return event.request;
  }

  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: {
      location: { value: "https://b1.church/" },
      "cache-control": { value: "max-age=3600" }
    }
  };
}
