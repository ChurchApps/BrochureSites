// Brochure apex only (CloudFront E3HSNKONYYRLKN / s3://chums-web).
// app.chums.org and staging.chums.org are other distributions — do not add them here.
function handler(event) {
  var request = event.request;
  var host = ((request.headers.host && request.headers.host.value) || "").toLowerCase();
  if (host !== "chums.org" && host !== "www.chums.org") {
    return request;
  }

  var location = "https://b1.church" + request.uri;
  if (request.querystring) location += "?" + request.querystring;

  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: {
      location: { value: location },
      "cache-control": { value: "max-age=3600" }
    }
  };
}
