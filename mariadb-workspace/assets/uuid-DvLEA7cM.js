var f = [];
for (var h = 0; h < 256; ++h)
  f.push((h + 256).toString(16).slice(1));
function R(n, u = 0) {
  return (f[n[u + 0]] + f[n[u + 1]] + f[n[u + 2]] + f[n[u + 3]] + "-" + f[n[u + 4]] + f[n[u + 5]] + "-" + f[n[u + 6]] + f[n[u + 7]] + "-" + f[n[u + 8]] + f[n[u + 9]] + "-" + f[n[u + 10]] + f[n[u + 11]] + f[n[u + 12]] + f[n[u + 13]] + f[n[u + 14]] + f[n[u + 15]]).toLowerCase();
}
var g, V = new Uint8Array(16);
function y() {
  if (!g && (g = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !g))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return g(V);
}
var _, w, t = 0, S = 0;
function b(n, u, q) {
  var r = u && q || 0, c = u || new Array(16);
  n = n || {};
  var e = n.node, a = n.clockseq;
  if (n._v6 || (e || (e = _), a == null && (a = w)), e == null || a == null) {
    var v = n.random || (n.rng || y)();
    e == null && (e = [v[0], v[1], v[2], v[3], v[4], v[5]], !_ && !n._v6 && (e[0] |= 1, _ = e)), a == null && (a = (v[6] << 8 | v[7]) & 16383, w === void 0 && !n._v6 && (w = a));
  }
  var d = n.msecs !== void 0 ? n.msecs : Date.now(), l = n.nsecs !== void 0 ? n.nsecs : S + 1, k = d - t + (l - S) / 1e4;
  if (k < 0 && n.clockseq === void 0 && (a = a + 1 & 16383), (k < 0 || d > t) && n.nsecs === void 0 && (l = 0), l >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  t = d, S = l, w = a, d += 122192928e5;
  var x = ((d & 268435455) * 1e4 + l) % 4294967296;
  c[r++] = x >>> 24 & 255, c[r++] = x >>> 16 & 255, c[r++] = x >>> 8 & 255, c[r++] = x & 255;
  var i = d / 4294967296 * 1e4 & 268435455;
  c[r++] = i >>> 8 & 255, c[r++] = i & 255, c[r++] = i >>> 24 & 15 | 16, c[r++] = i >>> 16 & 255, c[r++] = a >>> 8 | 128, c[r++] = a & 255;
  for (var m = 0; m < 6; ++m)
    c[r + m] = e[m];
  return u || R(c);
}
export {
  b as v
};
