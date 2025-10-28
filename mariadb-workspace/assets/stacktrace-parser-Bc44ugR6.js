var u = "<unknown>";
function h(r) {
  var e = r.split(`
`);
  return e.reduce(function(a, n) {
    var l = i(n) || c(n) || d(n) || N(n) || p(n);
    return l && a.push(l), a;
  }, []);
}
var t = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, s = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function i(r) {
  var e = t.exec(r);
  if (!e)
    return null;
  var a = e[2] && e[2].indexOf("native") === 0, n = e[2] && e[2].indexOf("eval") === 0, l = s.exec(e[2]);
  return n && l != null && (e[2] = l[1], e[3] = l[2], e[4] = l[3]), {
    file: a ? null : e[2],
    methodName: e[1] || u,
    arguments: a ? [e[2]] : [],
    lineNumber: e[3] ? +e[3] : null,
    column: e[4] ? +e[4] : null
  };
}
var o = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function c(r) {
  var e = o.exec(r);
  return e ? {
    file: e[2],
    methodName: e[1] || u,
    arguments: [],
    lineNumber: +e[3],
    column: e[4] ? +e[4] : null
  } : null;
}
var m = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, v = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function d(r) {
  var e = m.exec(r);
  if (!e)
    return null;
  var a = e[3] && e[3].indexOf(" > eval") > -1, n = v.exec(e[3]);
  return a && n != null && (e[3] = n[1], e[4] = n[2], e[5] = null), {
    file: e[3],
    methodName: e[1] || u,
    arguments: e[2] ? e[2].split(",") : [],
    lineNumber: e[4] ? +e[4] : null,
    column: e[5] ? +e[5] : null
  };
}
var f = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function p(r) {
  var e = f.exec(r);
  return e ? {
    file: e[3],
    methodName: e[1] || u,
    arguments: [],
    lineNumber: +e[4],
    column: e[5] ? +e[5] : null
  } : null;
}
var b = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function N(r) {
  var e = b.exec(r);
  return e ? {
    file: e[2],
    methodName: e[1] || u,
    arguments: [],
    lineNumber: +e[3],
    column: e[4] ? +e[4] : null
  } : null;
}
export {
  h as p
};
