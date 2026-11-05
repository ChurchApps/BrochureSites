// CloudFront Function (cloudfront-js-2.0), viewer-request on the freeplay.church distribution.
// 301s www.freeplay.church and any .../index.html URL to the canonical https://freeplay.church/... URL,
// keeping the query string (freeplay.church/pair?code=... must survive the hop).
function handler(event) {
  var req = event.request;
  var host = ((req.headers.host && req.headers.host.value) || '').toLowerCase();
  var uri = req.uri;
  var isWww = host.indexOf('www.') === 0;
  var isIndex = /\/index\.html$/.test(uri);
  if (!isWww && !isIndex) return req;

  if (isIndex) uri = uri.replace(/index\.html$/, '');

  var parts = [];
  for (var key in req.querystring) {
    var p = req.querystring[key];
    var values = p.multiValue ? p.multiValue : [p];
    for (var i = 0; i < values.length; i++) {
      parts.push(values[i].value === '' ? key : key + '=' + values[i].value);
    }
  }

  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: 'https://freeplay.church' + uri + (parts.length ? '?' + parts.join('&') : '') },
      'cache-control': { value: 'public, max-age=86400' }
    }
  };
}
