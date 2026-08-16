// Brochure apex only (CloudFront E3HSNKONYYRLKN / s3://chums-web).
// app.chums.org and staging.chums.org are other distributions — do not add them here.
function handler(event) {
  var request = event.request;
  var host = ((request.headers.host && request.headers.host.value) || "").toLowerCase();
  if (host !== "chums.org" && host !== "www.chums.org") {
    return request;
  }

  var loc = 'https://b1.church' + request.uri;
  var qs = request.querystring;
  var parts = [];
  for (var key in qs) {
    if (!Object.prototype.hasOwnProperty.call(qs, key)) continue;
    var param = qs[key];
    if (param.multiValue) {
      for (var i = 0; i < param.multiValue.length; i++) {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(param.multiValue[i].value));
      }
    } else if (param.value) {
      parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(param.value));
    }
  }
  if (parts.length) loc += '?' + parts.join('&');

  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: {
      location: { value: loc },
      "cache-control": { value: "max-age=3600" }
    }
  };
}
