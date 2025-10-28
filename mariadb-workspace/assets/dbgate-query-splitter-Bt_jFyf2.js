var b = {}, g = {}, w = {}, k;
function W() {
  return k || (k = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.oracleSplitterOptions = t.redisSplitterOptions = t.noSplitSplitterOptions = t.mongoSplitterOptions = t.sqliteSplitterOptions = t.postgreSplitterOptions = t.mssqlSplitterOptions = t.mysqlSplitterOptions = t.defaultSplitterOptions = void 0, t.defaultSplitterOptions = {
      stringsBegins: ["'"],
      stringsEnds: { "'": "'" },
      stringEscapes: { "'": "'" },
      allowSemicolon: !0,
      allowCustomDelimiter: !1,
      allowCustomSqlTerminator: !1,
      allowGoDelimiter: !1,
      allowSlashDelimiter: !1,
      allowDollarDollarString: !1,
      noSplit: !1,
      skipSeparatorBeginEnd: !1,
      doubleDashComments: !0,
      multilineComments: !0,
      javaScriptComments: !1,
      returnRichInfo: !1,
      splitByLines: !1,
      splitByEmptyLine: !1,
      preventSingleLineSplit: !1,
      adaptiveGoSplit: !1,
      ignoreComments: !1,
      copyFromStdin: !1,
      queryParameterStyle: null
    }, t.mysqlSplitterOptions = Object.assign(Object.assign({}, t.defaultSplitterOptions), { allowCustomDelimiter: !0, stringsBegins: ["'", "`", '"'], stringsEnds: { "'": "'", "`": "`", '"': '"' }, stringEscapes: { "'": "\\", "`": "`", '"': "\\" } }), t.mssqlSplitterOptions = Object.assign(Object.assign({}, t.defaultSplitterOptions), { allowSemicolon: !1, allowGoDelimiter: !0, stringsBegins: ["'", "["], stringsEnds: { "'": "'", "[": "]" }, stringEscapes: { "'": "'" } }), t.postgreSplitterOptions = Object.assign(Object.assign({}, t.defaultSplitterOptions), { allowDollarDollarString: !0, stringsBegins: ["'", '"'], stringsEnds: { "'": "'", '"': '"' }, stringEscapes: { "'": "'", '"': '"' } }), t.sqliteSplitterOptions = Object.assign(Object.assign({}, t.defaultSplitterOptions), { skipSeparatorBeginEnd: !0, stringsBegins: ["'", '"'], stringsEnds: { "'": "'", '"': '"' }, stringEscapes: { "'": "'", '"': '"' } }), t.mongoSplitterOptions = Object.assign(Object.assign({}, t.defaultSplitterOptions), { stringsBegins: ["'", '"'], stringsEnds: { "'": "'", '"': '"' }, stringEscapes: { "'": "\\", '"': "\\" } }), t.noSplitSplitterOptions = Object.assign(Object.assign({}, t.defaultSplitterOptions), { noSplit: !0 }), t.redisSplitterOptions = Object.assign(Object.assign({}, t.defaultSplitterOptions), { splitByLines: !0 }), t.oracleSplitterOptions = Object.assign(Object.assign({}, t.defaultSplitterOptions), { allowCustomSqlTerminator: !0, allowSlashDelimiter: !0, stringsBegins: ["'", '"'], stringsEnds: { "'": "'", '"': '"' }, stringEscapes: { "'": "'", '"': '"' } });
  })(w)), w;
}
var j;
function F() {
  if (j) return g;
  j = 1, Object.defineProperty(g, "__esModule", { value: !0 }), g.splitQuery = g.finishSplitStream = g.getInitialDelimiter = g.splitQueryLine = g.scanToken = void 0;
  const t = W(), S = ";", D = ["DEFERRED", "IMMEDIATE", "EXCLUSIVE", "TRANSACTION"], _ = new RegExp(`^(?:${D.join("|")})`, "i"), p = ["TRANSACTION", "IF"], m = new RegExp(`^(?:${p.join("|")})`, "i");
  function s(i, r, e) {
    let { source: a, position: l, line: E, column: f, streamPosition: n } = i;
    for (; r > 0; )
      a[l] == `
` ? (E += 1, f = 0) : f += 1, l += 1, n += 1, r -= 1;
    i.position = l, i.streamPosition = n, i.line = E, i.column = f, i.wasDataInCommand || (e ? (i.trimCommandStartPosition = n, i.trimCommandStartLine = E, i.trimCommandStartColumn = f) : i.wasDataInCommand = !0), e || (i.noWhitePosition = n, i.noWhiteLine = E, i.noWhiteColumn = f);
  }
  const o = {
    type: "whitespace",
    length: 1
  }, u = {
    type: "eoln",
    length: 1
  }, h = {
    type: "data",
    length: 1
  };
  function y(i) {
    if (!i.options.allowDollarDollarString)
      return null;
    let r = i.position;
    const e = i.source, a = /^(\$[a-zA-Z0-9_]*\$)/.exec(e.slice(r));
    if (!a)
      return null;
    const l = a[1];
    for (r += l.length; r < i.end; ) {
      if (e.slice(r).startsWith(l))
        return {
          type: "string",
          length: r + l.length - i.position
        };
      r++;
    }
    return null;
  }
  function P(i) {
    var r;
    let e = i.position;
    const a = i.source, l = a[e];
    if (i.isCopyFromStdin) {
      if (a.slice(e).startsWith("\\.") && !i.wasDataOnLine)
        return {
          type: "copy_stdin_end",
          length: 2
        };
      let n = e;
      for (; n < i.end && a[n] != `
`; )
        n++;
      return n < i.end && a[n] == `
` && n++, {
        type: "copy_stdin_line",
        length: n - e
      };
    }
    if (i.options.stringsBegins.includes(l)) {
      e++;
      const n = i.options.stringsEnds[l], d = i.options.stringEscapes[l];
      for (; e < i.end && a[e] != n; )
        d && a[e] == d ? e += 2 : e++;
      return {
        type: "string",
        length: e - i.position + 1
      };
    }
    if (i.options.queryParameterStyle && ((r = i.options.queryParameterStyle) === null || r === void 0 ? void 0 : r.length) == 1 && l == i.options.queryParameterStyle && (i.options.queryParameterStyle == "?" || /[a-zA-Z0-9_]/.test(a[e + 1]))) {
      if (e++, i.options.queryParameterStyle != "?")
        for (; e < i.end && /[a-zA-Z0-9_]/.test(a[e]); )
          e++;
      return {
        type: "parameter",
        value: a.slice(i.position, e),
        length: e - i.position
      };
    }
    const E = i.options.skipSeparatorBeginEnd && i.beginEndIdentLevel > 0;
    if (i.currentDelimiter && a.slice(e).startsWith(i.currentDelimiter) && !E)
      return {
        type: "delimiter",
        length: i.currentDelimiter.length
      };
    if (l == " " || l == "	" || l == "\r")
      return o;
    if (l == `
`)
      return u;
    if (i.options.doubleDashComments && l == "-" && a[e + 1] == "-") {
      for (; e < i.end && a[e] != `
`; )
        e++;
      return {
        type: "comment",
        length: e - i.position
      };
    }
    if (i.options.multilineComments && l == "/" && a[e + 1] == "*") {
      for (e += 2; e < i.end && !(a[e] == "*" && a[e + 1] == "/"); )
        e++;
      return {
        type: "comment",
        length: e - i.position + 2
      };
    }
    if (i.options.allowCustomDelimiter && !i.wasDataOnLine) {
      const n = a.slice(e).match(/^DELIMITER[ \t]+([^\n]+)/i);
      if (n)
        return {
          type: "set_delimiter",
          value: n[1].trim(),
          length: n[0].length
        };
    }
    if (i.options.allowCustomSqlTerminator) {
      const n = a.slice(e).match(/^SET[ \t]+SQLT(ERMINATOR)?[ \t]+(ON|OFF|".")/i);
      if (n) {
        if (n[2].toUpperCase() == "OFF")
          return {
            type: "set_sqlterminator",
            value: null,
            length: n[0].length
          };
        if (n[2].toUpperCase() == "ON")
          return {
            type: "set_sqlterminator",
            value: S,
            length: n[0].length
          };
        if (n[2].startsWith('"'))
          return {
            type: "set_sqlterminator",
            value: n[2].slice(1, -1),
            length: n[0].length
          };
      }
    }
    if ((i.options.allowGoDelimiter || i.options.adaptiveGoSplit) && !i.wasDataOnLine) {
      const n = a.slice(e).match(/^GO[\t\r ]*(\n|$)/i);
      if (n)
        return {
          type: "go_delimiter",
          length: n[0].endsWith(`
`) ? n[0].length - 1 : n[0].length
        };
    }
    if (i.options.allowSlashDelimiter && !i.wasDataOnLine) {
      const n = a.slice(e).match(/^\/[\t\r ]*(\n|$)/i);
      if (n)
        return {
          type: "slash_delimiter",
          length: n[0].endsWith(`
`) ? n[0].length - 1 : n[0].length
        };
    }
    if (i.options.adaptiveGoSplit) {
      const n = a.slice(e).match(/^(CREATE|ALTER)\s*(PROCEDURE|FUNCTION|TRIGGER)/i);
      if (n)
        return {
          type: "create_routine",
          length: n[0].length
        };
    }
    if (i.options.copyFromStdin && !i.wasDataOnLine && a.slice(e).startsWith("COPY "))
      return {
        type: "copy",
        length: 5
      };
    if (i.isCopyFromStdinCandidate && a.slice(e).startsWith("FROM stdin;")) {
      let n = e + 11;
      const d = n - 1;
      for (; n < i.end && a[n] != `
`; )
        n++;
      return a[n] == `
` && n++, {
        type: "copy_stdin_start",
        length: n - e,
        lengthWithoutWhitespace: d - e
      };
    }
    if (i.options.skipSeparatorBeginEnd && a.slice(e).match(/^begin/i)) {
      let n = e + 5, d = n;
      for (; d < i.end && /[^a-zA-Z0-9]/.test(a[d]); )
        d++;
      if (!_.test(a.slice(d)))
        return {
          type: "begin",
          length: n - e,
          lengthWithoutWhitespace: d - e
        };
    }
    if (i.options.skipSeparatorBeginEnd && a.slice(e).match(/^end/i)) {
      let n = e + 3, d = n;
      for (; d < i.end && /[^a-zA-Z0-9]/.test(a[d]); )
        d++;
      if (!m.test(a.slice(d)))
        return {
          type: "end",
          length: n - e
        };
    }
    const f = y(i);
    return f || h;
  }
  g.scanToken = P;
  function B(i, r) {
    var e;
    const a = {
      options: i.options,
      source: i.source,
      position: i.position,
      currentDelimiter: i.currentDelimiter,
      end: i.end,
      wasDataOnLine: i.wasDataOnLine,
      isCopyFromStdinCandidate: i.isCopyFromStdinCandidate,
      isCopyFromStdin: i.isCopyFromStdin,
      beginEndIdentLevel: i.beginEndIdentLevel
    };
    for (a.position += r.length; a.position < a.end; ) {
      const l = P(a);
      if (!l) {
        a.position += 1;
        continue;
      }
      switch (l.type) {
        case "whitespace":
          a.position += l.length;
          continue;
        case "eoln":
          return !1;
        case "comment":
          if (!((e = l.value) === null || e === void 0) && e.includes(`
`))
            return !0;
          a.position += l.length;
          continue;
        default:
          return !0;
      }
    }
  }
  function O(i, r) {
    i.commandPart += i.source.slice(i.currentCommandStart, i.position), v(i, r);
  }
  function v(i, r) {
    const e = i.commandPart.substring(i.trimCommandStartPosition - i.commandStartPosition, i.noWhitePosition - i.commandStartPosition);
    e.trim() && (i.options.returnRichInfo ? i.pushOutput({
      text: e,
      start: {
        position: i.commandStartPosition,
        line: i.commandStartLine,
        column: i.commandStartColumn
      },
      end: {
        position: i.streamPosition,
        line: i.line,
        column: i.column
      },
      trimStart: {
        position: i.trimCommandStartPosition,
        line: i.trimCommandStartLine,
        column: i.trimCommandStartColumn
      },
      trimEnd: {
        position: i.noWhitePosition,
        line: i.noWhiteLine,
        column: i.noWhiteColumn
      },
      specialMarker: r
    }) : i.pushOutput(e));
  }
  function C(i) {
    i.commandStartPosition = i.streamPosition, i.commandStartLine = i.line, i.commandStartColumn = i.column, i.trimCommandStartPosition = i.streamPosition, i.trimCommandStartLine = i.line, i.trimCommandStartColumn = i.column, i.wasDataInCommand = !1;
  }
  function A(i) {
    for (; i.position < i.end; )
      i.source[i.position] == `
` ? (O(i), i.commandPart = "", s(i, 1, !0), i.currentCommandStart = i.position, C(i)) : s(i, 1, /\s/.test(i.source[i.position]));
    i.end > i.currentCommandStart && (i.commandPart += i.source.slice(i.currentCommandStart, i.position));
  }
  function L(i) {
    if (i.options.splitByLines) {
      A(i);
      return;
    }
    for (; i.position < i.end; ) {
      const r = P(i);
      if (!r) {
        s(i, 1, !1);
        continue;
      }
      switch (r.type) {
        case "string":
          s(i, r.length, !1), i.wasDataOnLine = !0;
          break;
        case "comment":
          s(i, r.length, !!i.options.ignoreComments), i.wasDataOnLine = !0;
          break;
        case "eoln":
          if (!i.wasDataOnLine && i.options.splitByEmptyLine) {
            O(i), i.commandPart = "", s(i, r.length, !1), i.currentCommandStart = i.position, i.wasDataOnLine = !1, C(i);
            break;
          }
          s(i, r.length, !0), i.wasDataOnLine = !1;
          break;
        case "data":
          s(i, r.length, !1), i.wasDataOnLine = !0;
          break;
        case "parameter":
          s(i, r.length, !1), i.wasDataOnLine = !0;
          break;
        case "whitespace":
          s(i, r.length, !0);
          break;
        case "set_delimiter":
        case "set_sqlterminator":
          O(i), i.commandPart = "", i.currentDelimiter = r.value, s(i, r.length, !1), i.currentCommandStart = i.position, C(i);
          break;
        case "go_delimiter":
          O(i), i.commandPart = "", s(i, r.length, !1), i.currentCommandStart = i.position, C(i), i.options.adaptiveGoSplit && (i.currentDelimiter = S);
          break;
        case "slash_delimiter":
          O(i), i.commandPart = "", s(i, r.length, !1), i.currentCommandStart = i.position, C(i);
          break;
        case "create_routine":
          s(i, r.length, !1), i.options.adaptiveGoSplit && (i.currentDelimiter = null);
          break;
        case "copy":
          s(i, r.length, !1), i.isCopyFromStdinCandidate = !0, i.wasDataOnLine = !0;
          break;
        case "copy_stdin_start":
          s(i, r.lengthWithoutWhitespace, !1), s(i, r.length - r.lengthWithoutWhitespace, !0), i.isCopyFromStdin = !0, i.isCopyFromStdinCandidate = !1, i.wasDataOnLine = !1, O(i, "copy_stdin_start"), i.commandPart = "", i.currentCommandStart = i.position, C(i);
          break;
        case "copy_stdin_line":
          s(i, r.length, !1), i.isCopyFromStdin = !0, i.isCopyFromStdinCandidate = !1, O(i, "copy_stdin_line"), i.commandPart = "", i.currentCommandStart = i.position, C(i);
          break;
        case "copy_stdin_end":
          s(i, r.length, !1), i.isCopyFromStdin = !1, i.wasDataOnLine = !0, O(i, "copy_stdin_end"), i.commandPart = "", i.currentCommandStart = i.position, C(i);
          break;
        case "delimiter":
          if (i.options.preventSingleLineSplit && B(i, r)) {
            s(i, r.length, !1), i.wasDataOnLine = !0;
            break;
          }
          O(i), i.commandPart = "", s(i, r.length, !1), i.currentCommandStart = i.position, C(i), i.isCopyFromStdinCandidate = !1;
          break;
        case "begin":
          i.options.skipSeparatorBeginEnd && i.beginEndIdentLevel++, s(i, r.length, !1);
          break;
        case "end":
          i.options.skipSeparatorBeginEnd && i.beginEndIdentLevel > 0 && i.beginEndIdentLevel--, s(i, r.length, !1);
          break;
      }
    }
    i.end > i.currentCommandStart && (i.commandPart += i.source.slice(i.currentCommandStart, i.position));
  }
  g.splitQueryLine = L;
  function I(i) {
    return i != null && i.adaptiveGoSplit ? S : (i == null ? void 0 : i.allowSemicolon) === !1 ? null : S;
  }
  g.getInitialDelimiter = I;
  function R(i) {
    v(i);
  }
  g.finishSplitStream = R;
  function N(i, r = null) {
    var e;
    const a = Object.assign(Object.assign({}, t.defaultSplitterOptions), r);
    if (a.noSplit) {
      if (a.returnRichInfo) {
        const f = i.split(`
`);
        return [
          {
            text: i,
            start: {
              position: 0,
              line: 0,
              column: 0
            },
            end: {
              position: i.length,
              line: f.length,
              column: ((e = f[f.length - 1]) === null || e === void 0 ? void 0 : e.length) || 0
            }
          }
        ];
      }
      return [i];
    }
    const l = [], E = {
      source: i,
      end: i.length,
      currentDelimiter: I(r),
      position: 0,
      column: 0,
      line: 0,
      currentCommandStart: 0,
      commandStartLine: 0,
      commandStartColumn: 0,
      commandStartPosition: 0,
      streamPosition: 0,
      noWhiteLine: 0,
      noWhiteColumn: 0,
      noWhitePosition: 0,
      trimCommandStartPosition: 0,
      trimCommandStartLine: 0,
      trimCommandStartColumn: 0,
      beginEndIdentLevel: 0,
      wasDataInCommand: !1,
      isCopyFromStdin: !1,
      isCopyFromStdinCandidate: !1,
      pushOutput: (f) => l.push(f),
      wasDataOnLine: !1,
      options: a,
      commandPart: ""
    };
    return L(E), R(E), l;
  }
  return g.splitQuery = N, g;
}
var c = {}, Q;
function q() {
  if (Q) return c;
  Q = 1, Object.defineProperty(c, "__esModule", { value: !0 }), c.replaceQueryParameters = c.extractQueryParameters = void 0;
  const t = F();
  function S(p, m) {
    return {
      options: m,
      source: p,
      position: 0,
      currentDelimiter: (0, t.getInitialDelimiter)(m),
      end: p.length,
      wasDataOnLine: !1,
      isCopyFromStdin: !1,
      isCopyFromStdinCandidate: !1,
      beginEndIdentLevel: 0
    };
  }
  function D(p, m) {
    if (!p || !m)
      return [];
    const s = S(p, m), o = /* @__PURE__ */ new Set();
    for (; s.position < s.end; ) {
      const u = (0, t.scanToken)(s);
      if (u === null)
        break;
      u.type === "parameter" && (u.value == "?" ? o.add(`?${o.size + 1}`) : o.add(u.value)), s.position += u.length;
    }
    return Array.from(o);
  }
  c.extractQueryParameters = D;
  function _(p, m, s) {
    if (!p || !s)
      return p;
    const o = S(p, s);
    let u = "", h = 0;
    for (; o.position < o.end; ) {
      const y = (0, t.scanToken)(o);
      if (y === null)
        break;
      if (y.type === "parameter") {
        const P = y.value == "?" ? `?${++h}` : y.value;
        m[P] ? u += m[P] : u += p.substring(o.position, o.position + y.length);
      } else
        u += p.substring(o.position, o.position + y.length);
      o.position += y.length;
    }
    return u;
  }
  return c.replaceQueryParameters = _, c;
}
var T;
function G() {
  return T || (T = 1, (function(t) {
    var S = b && b.__createBinding || (Object.create ? (function(m, s, o, u) {
      u === void 0 && (u = o);
      var h = Object.getOwnPropertyDescriptor(s, o);
      (!h || ("get" in h ? !s.__esModule : h.writable || h.configurable)) && (h = { enumerable: !0, get: function() {
        return s[o];
      } }), Object.defineProperty(m, u, h);
    }) : (function(m, s, o, u) {
      u === void 0 && (u = o), m[u] = s[o];
    })), D = b && b.__exportStar || function(m, s) {
      for (var o in m) o !== "default" && !Object.prototype.hasOwnProperty.call(s, o) && S(s, m, o);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.replaceQueryParameters = t.extractQueryParameters = t.splitQuery = void 0;
    var _ = F();
    Object.defineProperty(t, "splitQuery", { enumerable: !0, get: function() {
      return _.splitQuery;
    } });
    var p = q();
    Object.defineProperty(t, "extractQueryParameters", { enumerable: !0, get: function() {
      return p.extractQueryParameters;
    } }), Object.defineProperty(t, "replaceQueryParameters", { enumerable: !0, get: function() {
      return p.replaceQueryParameters;
    } }), D(W(), t);
  })(b)), b;
}
var M = G();
export {
  M as l
};
