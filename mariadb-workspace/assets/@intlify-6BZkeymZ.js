/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function fe(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ge = {};
function sn(e) {
  Ge[e] || (Ge[e] = !0, fe(e));
}
const ie = typeof window < "u";
let H, ce;
if (process.env.NODE_ENV !== "production") {
  const e = ie && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (H = (t) => {
    e.mark(t);
  }, ce = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const an = /\{([0-9a-zA-Z]+)\}/g;
function ct(e, ...t) {
  return t.length === 1 && F(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(an, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Gr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), on = (e, t, n) => cn({ l: e, k: t, s: n }), cn = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Y = (e) => typeof e == "number" && isFinite(e), ln = (e) => ut(e) === "[object Date]", Xe = (e) => ut(e) === "[object RegExp]", Re = (e) => v(e) && Object.keys(e).length === 0, Ee = Object.assign, un = Object.create, W = (e = null) => un(e);
let He;
const De = () => He || (He = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : W());
function je(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function xe(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fn(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, i) => `${o}="${xe(i)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, i) => `${o}='${xe(i)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && fe("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const _n = Object.prototype.hasOwnProperty;
function oe(e, t) {
  return _n.call(e, t);
}
const J = Array.isArray, $ = (e) => typeof e == "function", S = (e) => typeof e == "string", G = (e) => typeof e == "boolean", F = (e) => e !== null && typeof e == "object", dn = (e) => F(e) && $(e.then) && $(e.catch), lt = Object.prototype.toString, ut = (e) => lt.call(e), v = (e) => {
  if (!F(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, mn = (e) => e == null ? "" : J(e) || v(e) && e.toString === lt ? JSON.stringify(e, null, 2) : String(e);
function En(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Be = 2;
function pn(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const i = [];
  for (let l = 0; l < r.length; l++)
    if (o += r[l].length + 1, o >= t) {
      for (let f = l - Be; f <= l + Be || n > o; f++) {
        if (f < 0 || f >= r.length)
          continue;
        const u = f + 1;
        i.push(`${u}${" ".repeat(3 - String(u).length)}|  ${r[f]}`);
        const T = r[f].length;
        if (f === l) {
          const O = t - (o - T) + 1, g = Math.max(1, n > o ? T - O : n - t);
          i.push("   |  " + " ".repeat(O) + "^".repeat(g));
        } else if (f > l) {
          if (n > o) {
            const O = Math.max(Math.min(n - o, T), 1);
            i.push("   |  " + "^".repeat(O));
          }
          o += T + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function ft(e) {
  let t = e;
  return () => ++t;
}
function Xr() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const o = e.get(n);
      o && o.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const o = e.get(n);
      o && o.splice(o.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((o) => o(r)), (e.get("*") || []).slice().map((o) => o(n, r));
    }
  };
}
const Oe = (e) => !F(e) || J(e);
function Hr(e, t) {
  if (Oe(e) || Oe(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((i) => {
      i !== "__proto__" && (F(r[i]) && !F(o[i]) && (o[i] = Array.isArray(r[i]) ? [] : W()), Oe(o[i]) || Oe(r[i]) ? o[i] = r[i] : n.push({ src: r[i], des: o[i] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Nn(e, t, n) {
  return { line: e, column: t, offset: n };
}
function he(e, t, n) {
  return { start: e, end: t };
}
const Tn = /\{([0-9a-zA-Z]+)\}/g;
function _t(e, ...t) {
  return t.length === 1 && Ln(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Tn, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const dt = Object.assign, Je = (e) => typeof e == "string", Ln = (e) => e !== null && typeof e == "object";
function mt(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Ae = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, On = {
  [Ae.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function gn(e, t, ...n) {
  const r = _t(On[e], ...n || []), o = { message: String(r), code: e };
  return t && (o.location = t), o;
}
const C = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, hn = {
  // tokenizer error messages
  [C.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [C.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [C.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [C.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [C.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [C.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [C.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [C.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [C.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [C.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [C.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [C.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [C.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [C.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [C.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [C.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Te(e, t, n = {}) {
  const { domain: r, messages: o, args: i } = n, l = _t((o || hn)[e] || "", ...i || []), f = new SyntaxError(String(l));
  return f.code = e, t && (f.location = t), f.domain = r, f;
}
function An(e) {
  throw e;
}
const In = /<\/?[\w\s="/.':;#-\/]+>/, Cn = (e) => In.test(e), Z = " ", Sn = "\r", K = `
`, Dn = "\u2028", Pn = "\u2029";
function yn(e) {
  const t = e;
  let n = 0, r = 1, o = 1, i = 0;
  const l = (p) => t[p] === Sn && t[p + 1] === K, f = (p) => t[p] === K, u = (p) => t[p] === Pn, T = (p) => t[p] === Dn, O = (p) => l(p) || f(p) || u(p) || T(p), g = () => n, N = () => r, P = () => o, b = () => i, A = (p) => l(p) || u(p) || T(p) ? K : t[p], I = () => A(n), y = () => A(n + i);
  function D() {
    return i = 0, O(n) && (r++, o = 0), l(n) && n++, n++, o++, t[n];
  }
  function c() {
    return l(n + i) && i++, i++, t[n + i];
  }
  function _() {
    n = 0, r = 1, o = 1, i = 0;
  }
  function E(p = 0) {
    i = p;
  }
  function m() {
    const p = n + i;
    for (; p !== n; )
      D();
    i = 0;
  }
  return {
    index: g,
    line: N,
    column: P,
    peekOffset: b,
    charAt: A,
    currentChar: I,
    currentPeek: y,
    next: D,
    peek: c,
    reset: _,
    resetPeek: E,
    skipToPeek: m
  };
}
const ee = void 0, bn = ".", Qe = "'", Mn = "tokenizer";
function kn(e, t = {}) {
  const n = t.location !== !1, r = yn(e), o = () => r.index(), i = () => Nn(r.line(), r.column(), r.index()), l = i(), f = o(), u = {
    currentType: 14,
    offset: f,
    startLoc: l,
    endLoc: l,
    lastType: 14,
    lastOffset: f,
    lastStartLoc: l,
    lastEndLoc: l,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, T = () => u, { onError: O } = t;
  function g(s, a, d, ...h) {
    const w = T();
    if (a.column += d, a.offset += d, O) {
      const R = n ? he(w.startLoc, a) : null, z = Te(s, R, {
        domain: Mn,
        args: h
      });
      O(z);
    }
  }
  function N(s, a, d) {
    s.endLoc = i(), s.currentType = a;
    const h = { type: a };
    return n && (h.loc = he(s.startLoc, s.endLoc)), d != null && (h.value = d), h;
  }
  const P = (s) => N(
    s,
    14
    /* TokenTypes.EOF */
  );
  function b(s, a) {
    return s.currentChar() === a ? (s.next(), a) : (g(C.EXPECTED_TOKEN, i(), 0, a), "");
  }
  function A(s) {
    let a = "";
    for (; s.currentPeek() === Z || s.currentPeek() === K; )
      a += s.currentPeek(), s.peek();
    return a;
  }
  function I(s) {
    const a = A(s);
    return s.skipToPeek(), a;
  }
  function y(s) {
    if (s === ee)
      return !1;
    const a = s.charCodeAt(0);
    return a >= 97 && a <= 122 || // a-z
    a >= 65 && a <= 90 || // A-Z
    a === 95;
  }
  function D(s) {
    if (s === ee)
      return !1;
    const a = s.charCodeAt(0);
    return a >= 48 && a <= 57;
  }
  function c(s, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    A(s);
    const h = y(s.currentPeek());
    return s.resetPeek(), h;
  }
  function _(s, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    A(s);
    const h = s.currentPeek() === "-" ? s.peek() : s.currentPeek(), w = D(h);
    return s.resetPeek(), w;
  }
  function E(s, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    A(s);
    const h = s.currentPeek() === Qe;
    return s.resetPeek(), h;
  }
  function m(s, a) {
    const { currentType: d } = a;
    if (d !== 8)
      return !1;
    A(s);
    const h = s.currentPeek() === ".";
    return s.resetPeek(), h;
  }
  function p(s, a) {
    const { currentType: d } = a;
    if (d !== 9)
      return !1;
    A(s);
    const h = y(s.currentPeek());
    return s.resetPeek(), h;
  }
  function L(s, a) {
    const { currentType: d } = a;
    if (!(d === 8 || d === 12))
      return !1;
    A(s);
    const h = s.currentPeek() === ":";
    return s.resetPeek(), h;
  }
  function M(s, a) {
    const { currentType: d } = a;
    if (d !== 10)
      return !1;
    const h = () => {
      const R = s.currentPeek();
      return R === "{" ? y(s.peek()) : R === "@" || R === "%" || R === "|" || R === ":" || R === "." || R === Z || !R ? !1 : R === K ? (s.peek(), h()) : k(s, !1);
    }, w = h();
    return s.resetPeek(), w;
  }
  function U(s) {
    A(s);
    const a = s.currentPeek() === "|";
    return s.resetPeek(), a;
  }
  function q(s) {
    const a = A(s), d = s.currentPeek() === "%" && s.peek() === "{";
    return s.resetPeek(), {
      isModulo: d,
      hasSpace: a.length > 0
    };
  }
  function k(s, a = !0) {
    const d = (w = !1, R = "", z = !1) => {
      const re = s.currentPeek();
      return re === "{" ? R === "%" ? !1 : w : re === "@" || !re ? R === "%" ? !0 : w : re === "%" ? (s.peek(), d(w, "%", !0)) : re === "|" ? R === "%" || z ? !0 : !(R === Z || R === K) : re === Z ? (s.peek(), d(!0, Z, z)) : re === K ? (s.peek(), d(!0, K, z)) : !0;
    }, h = d();
    return a && s.resetPeek(), h;
  }
  function j(s, a) {
    const d = s.currentChar();
    return d === ee ? ee : a(d) ? (s.next(), d) : null;
  }
  function Vt(s) {
    const a = s.charCodeAt(0);
    return a >= 97 && a <= 122 || // a-z
    a >= 65 && a <= 90 || // A-Z
    a >= 48 && a <= 57 || // 0-9
    a === 95 || // _
    a === 36;
  }
  function Wt(s) {
    return j(s, Vt);
  }
  function Kt(s) {
    const a = s.charCodeAt(0);
    return a >= 97 && a <= 122 || // a-z
    a >= 65 && a <= 90 || // A-Z
    a >= 48 && a <= 57 || // 0-9
    a === 95 || // _
    a === 36 || // $
    a === 45;
  }
  function Yt(s) {
    return j(s, Kt);
  }
  function Gt(s) {
    const a = s.charCodeAt(0);
    return a >= 48 && a <= 57;
  }
  function Xt(s) {
    return j(s, Gt);
  }
  function Ht(s) {
    const a = s.charCodeAt(0);
    return a >= 48 && a <= 57 || // 0-9
    a >= 65 && a <= 70 || // A-F
    a >= 97 && a <= 102;
  }
  function jt(s) {
    return j(s, Ht);
  }
  function We(s) {
    let a = "", d = "";
    for (; a = Xt(s); )
      d += a;
    return d;
  }
  function xt(s) {
    I(s);
    const a = s.currentChar();
    return a !== "%" && g(C.EXPECTED_TOKEN, i(), 0, a), s.next(), "%";
  }
  function Ke(s) {
    let a = "";
    for (; ; ) {
      const d = s.currentChar();
      if (d === "{" || d === "}" || d === "@" || d === "|" || !d)
        break;
      if (d === "%")
        if (k(s))
          a += d, s.next();
        else
          break;
      else if (d === Z || d === K)
        if (k(s))
          a += d, s.next();
        else {
          if (U(s))
            break;
          a += d, s.next();
        }
      else
        a += d, s.next();
    }
    return a;
  }
  function Bt(s) {
    I(s);
    let a = "", d = "";
    for (; a = Yt(s); )
      d += a;
    return s.currentChar() === ee && g(C.UNTERMINATED_CLOSING_BRACE, i(), 0), d;
  }
  function Jt(s) {
    I(s);
    let a = "";
    return s.currentChar() === "-" ? (s.next(), a += `-${We(s)}`) : a += We(s), s.currentChar() === ee && g(C.UNTERMINATED_CLOSING_BRACE, i(), 0), a;
  }
  function Qt(s) {
    return s !== Qe && s !== K;
  }
  function qt(s) {
    I(s), b(s, "'");
    let a = "", d = "";
    for (; a = j(s, Qt); )
      a === "\\" ? d += Zt(s) : d += a;
    const h = s.currentChar();
    return h === K || h === ee ? (g(C.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), h === K && (s.next(), b(s, "'")), d) : (b(s, "'"), d);
  }
  function Zt(s) {
    const a = s.currentChar();
    switch (a) {
      case "\\":
      case "'":
        return s.next(), `\\${a}`;
      case "u":
        return Ye(s, a, 4);
      case "U":
        return Ye(s, a, 6);
      default:
        return g(C.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, a), "";
    }
  }
  function Ye(s, a, d) {
    b(s, a);
    let h = "";
    for (let w = 0; w < d; w++) {
      const R = jt(s);
      if (!R) {
        g(C.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${a}${h}${s.currentChar()}`);
        break;
      }
      h += R;
    }
    return `\\${a}${h}`;
  }
  function zt(s) {
    return s !== "{" && s !== "}" && s !== Z && s !== K;
  }
  function en(s) {
    I(s);
    let a = "", d = "";
    for (; a = j(s, zt); )
      d += a;
    return d;
  }
  function tn(s) {
    let a = "", d = "";
    for (; a = Wt(s); )
      d += a;
    return d;
  }
  function nn(s) {
    const a = (d) => {
      const h = s.currentChar();
      return h === "{" || h === "%" || h === "@" || h === "|" || h === "(" || h === ")" || !h || h === Z ? d : (d += h, s.next(), a(d));
    };
    return a("");
  }
  function Ie(s) {
    I(s);
    const a = b(
      s,
      "|"
      /* TokenChars.Pipe */
    );
    return I(s), a;
  }
  function Ce(s, a) {
    let d = null;
    switch (s.currentChar()) {
      case "{":
        return a.braceNest >= 1 && g(C.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), s.next(), d = N(
          a,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), I(s), a.braceNest++, d;
      case "}":
        return a.braceNest > 0 && a.currentType === 2 && g(C.EMPTY_PLACEHOLDER, i(), 0), s.next(), d = N(
          a,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), a.braceNest--, a.braceNest > 0 && I(s), a.inLinked && a.braceNest === 0 && (a.inLinked = !1), d;
      case "@":
        return a.braceNest > 0 && g(C.UNTERMINATED_CLOSING_BRACE, i(), 0), d = Le(s, a) || P(a), a.braceNest = 0, d;
      default: {
        let w = !0, R = !0, z = !0;
        if (U(s))
          return a.braceNest > 0 && g(C.UNTERMINATED_CLOSING_BRACE, i(), 0), d = N(a, 1, Ie(s)), a.braceNest = 0, a.inLinked = !1, d;
        if (a.braceNest > 0 && (a.currentType === 5 || a.currentType === 6 || a.currentType === 7))
          return g(C.UNTERMINATED_CLOSING_BRACE, i(), 0), a.braceNest = 0, Se(s, a);
        if (w = c(s, a))
          return d = N(a, 5, Bt(s)), I(s), d;
        if (R = _(s, a))
          return d = N(a, 6, Jt(s)), I(s), d;
        if (z = E(s, a))
          return d = N(a, 7, qt(s)), I(s), d;
        if (!w && !R && !z)
          return d = N(a, 13, en(s)), g(C.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, d.value), I(s), d;
        break;
      }
    }
    return d;
  }
  function Le(s, a) {
    const { currentType: d } = a;
    let h = null;
    const w = s.currentChar();
    switch ((d === 8 || d === 9 || d === 12 || d === 10) && (w === K || w === Z) && g(C.INVALID_LINKED_FORMAT, i(), 0), w) {
      case "@":
        return s.next(), h = N(
          a,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), a.inLinked = !0, h;
      case ".":
        return I(s), s.next(), N(
          a,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return I(s), s.next(), N(
          a,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return U(s) ? (h = N(a, 1, Ie(s)), a.braceNest = 0, a.inLinked = !1, h) : m(s, a) || L(s, a) ? (I(s), Le(s, a)) : p(s, a) ? (I(s), N(a, 12, tn(s))) : M(s, a) ? (I(s), w === "{" ? Ce(s, a) || h : N(a, 11, nn(s))) : (d === 8 && g(C.INVALID_LINKED_FORMAT, i(), 0), a.braceNest = 0, a.inLinked = !1, Se(s, a));
    }
  }
  function Se(s, a) {
    let d = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (a.braceNest > 0)
      return Ce(s, a) || P(a);
    if (a.inLinked)
      return Le(s, a) || P(a);
    switch (s.currentChar()) {
      case "{":
        return Ce(s, a) || P(a);
      case "}":
        return g(C.UNBALANCED_CLOSING_BRACE, i(), 0), s.next(), N(
          a,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Le(s, a) || P(a);
      default: {
        if (U(s))
          return d = N(a, 1, Ie(s)), a.braceNest = 0, a.inLinked = !1, d;
        const { isModulo: w, hasSpace: R } = q(s);
        if (w)
          return R ? N(a, 0, Ke(s)) : N(a, 4, xt(s));
        if (k(s))
          return N(a, 0, Ke(s));
        break;
      }
    }
    return d;
  }
  function rn() {
    const { currentType: s, offset: a, startLoc: d, endLoc: h } = u;
    return u.lastType = s, u.lastOffset = a, u.lastStartLoc = d, u.lastEndLoc = h, u.offset = o(), u.startLoc = i(), r.currentChar() === ee ? N(
      u,
      14
      /* TokenTypes.EOF */
    ) : Se(r, u);
  }
  return {
    nextToken: rn,
    currentOffset: o,
    currentPosition: i,
    context: T
  };
}
const Rn = "parser", vn = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function wn(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function Fn(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(c, _, E, m, ...p) {
    const L = c.currentPosition();
    if (L.offset += m, L.column += m, n) {
      const M = t ? he(E, L) : null, U = Te(_, M, {
        domain: Rn,
        args: p
      });
      n(U);
    }
  }
  function i(c, _, E, m, ...p) {
    const L = c.currentPosition();
    if (L.offset += m, L.column += m, r) {
      const M = t ? he(E, L) : null;
      r(gn(_, M, p));
    }
  }
  function l(c, _, E) {
    const m = { type: c };
    return t && (m.start = _, m.end = _, m.loc = { start: E, end: E }), m;
  }
  function f(c, _, E, m) {
    t && (c.end = _, c.loc && (c.loc.end = E));
  }
  function u(c, _) {
    const E = c.context(), m = l(3, E.offset, E.startLoc);
    return m.value = _, f(m, c.currentOffset(), c.currentPosition()), m;
  }
  function T(c, _) {
    const E = c.context(), { lastOffset: m, lastStartLoc: p } = E, L = l(5, m, p);
    return L.index = parseInt(_, 10), c.nextToken(), f(L, c.currentOffset(), c.currentPosition()), L;
  }
  function O(c, _, E) {
    const m = c.context(), { lastOffset: p, lastStartLoc: L } = m, M = l(4, p, L);
    return M.key = _, E === !0 && (M.modulo = !0), c.nextToken(), f(M, c.currentOffset(), c.currentPosition()), M;
  }
  function g(c, _) {
    const E = c.context(), { lastOffset: m, lastStartLoc: p } = E, L = l(9, m, p);
    return L.value = _.replace(vn, wn), c.nextToken(), f(L, c.currentOffset(), c.currentPosition()), L;
  }
  function N(c) {
    const _ = c.nextToken(), E = c.context(), { lastOffset: m, lastStartLoc: p } = E, L = l(8, m, p);
    return _.type !== 12 ? (o(c, C.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), L.value = "", f(L, m, p), {
      nextConsumeToken: _,
      node: L
    }) : (_.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, x(_)), L.value = _.value || "", f(L, c.currentOffset(), c.currentPosition()), {
      node: L
    });
  }
  function P(c, _) {
    const E = c.context(), m = l(7, E.offset, E.startLoc);
    return m.value = _, f(m, c.currentOffset(), c.currentPosition()), m;
  }
  function b(c) {
    const _ = c.context(), E = l(6, _.offset, _.startLoc);
    let m = c.nextToken();
    if (m.type === 9) {
      const p = N(c);
      E.modifier = p.node, m = p.nextConsumeToken || c.nextToken();
    }
    switch (m.type !== 10 && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(m)), m = c.nextToken(), m.type === 2 && (m = c.nextToken()), m.type) {
      case 11:
        m.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(m)), E.key = P(c, m.value || "");
        break;
      case 5:
        m.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(m)), E.key = O(c, m.value || "");
        break;
      case 6:
        m.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(m)), E.key = T(c, m.value || "");
        break;
      case 7:
        m.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(m)), E.key = g(c, m.value || "");
        break;
      default: {
        o(c, C.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const p = c.context(), L = l(7, p.offset, p.startLoc);
        return L.value = "", f(L, p.offset, p.startLoc), E.key = L, f(E, p.offset, p.startLoc), {
          nextConsumeToken: m,
          node: E
        };
      }
    }
    return f(E, c.currentOffset(), c.currentPosition()), {
      node: E
    };
  }
  function A(c) {
    const _ = c.context(), E = _.currentType === 1 ? c.currentOffset() : _.offset, m = _.currentType === 1 ? _.endLoc : _.startLoc, p = l(2, E, m);
    p.items = [];
    let L = null, M = null;
    do {
      const k = L || c.nextToken();
      switch (L = null, k.type) {
        case 0:
          k.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(k)), p.items.push(u(c, k.value || ""));
          break;
        case 6:
          k.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(k)), p.items.push(T(c, k.value || ""));
          break;
        case 4:
          M = !0;
          break;
        case 5:
          k.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(k)), p.items.push(O(c, k.value || "", !!M)), M && (i(c, Ae.USE_MODULO_SYNTAX, _.lastStartLoc, 0, x(k)), M = null);
          break;
        case 7:
          k.value == null && o(c, C.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, x(k)), p.items.push(g(c, k.value || ""));
          break;
        case 8: {
          const j = b(c);
          p.items.push(j.node), L = j.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 14 && _.currentType !== 1);
    const U = _.currentType === 1 ? _.lastOffset : c.currentOffset(), q = _.currentType === 1 ? _.lastEndLoc : c.currentPosition();
    return f(p, U, q), p;
  }
  function I(c, _, E, m) {
    const p = c.context();
    let L = m.items.length === 0;
    const M = l(1, _, E);
    M.cases = [], M.cases.push(m);
    do {
      const U = A(c);
      L || (L = U.items.length === 0), M.cases.push(U);
    } while (p.currentType !== 14);
    return L && o(c, C.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), f(M, c.currentOffset(), c.currentPosition()), M;
  }
  function y(c) {
    const _ = c.context(), { offset: E, startLoc: m } = _, p = A(c);
    return _.currentType === 14 ? p : I(c, E, m, p);
  }
  function D(c) {
    const _ = kn(c, dt({}, e)), E = _.context(), m = l(0, E.offset, E.startLoc);
    return t && m.loc && (m.loc.source = c), m.body = y(_), e.onCacheKey && (m.cacheKey = e.onCacheKey(c)), E.currentType !== 14 && o(_, C.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, c[E.offset] || ""), f(m, _.currentOffset(), _.currentPosition()), m;
  }
  return { parse: D };
}
function x(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Un(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function qe(e, t) {
  for (let n = 0; n < e.length; n++)
    ve(e[n], t);
}
function ve(e, t) {
  switch (e.type) {
    case 1:
      qe(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      qe(e.items, t);
      break;
    case 6: {
      ve(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function $n(e, t = {}) {
  const n = Un(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ve(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Vn(e) {
  const t = e.body;
  return t.type === 2 ? Ze(t) : t.cases.forEach((n) => Ze(n)), e;
}
function Ze(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = mt(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Wn = "minifier";
function _e(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      _e(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        _e(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        _e(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      _e(t.key), t.k = t.key, delete t.key, t.modifier && (_e(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      throw Te(C.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Wn,
        args: [e.type]
      });
  }
  delete e.type;
}
const Kn = "parser";
function Yn(e, t) {
  const { filename: n, breakLineCode: r, needIndent: o } = t, i = t.location !== !1, l = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: o,
    indentLevel: 0
  };
  i && e.loc && (l.source = e.loc.source);
  const f = () => l;
  function u(A, I) {
    l.code += A;
  }
  function T(A, I = !0) {
    const y = I ? r : "";
    u(o ? y + "  ".repeat(A) : y);
  }
  function O(A = !0) {
    const I = ++l.indentLevel;
    A && T(I);
  }
  function g(A = !0) {
    const I = --l.indentLevel;
    A && T(I);
  }
  function N() {
    T(l.indentLevel);
  }
  return {
    context: f,
    push: u,
    indent: O,
    deindent: g,
    newline: N,
    helper: (A) => `_${A}`,
    needIndent: () => l.needIndent
  };
}
function Gn(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), me(e, t.key), t.modifier ? (e.push(", "), me(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Xn(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let i = 0; i < o && (me(e, t.items[i]), i !== o - 1); i++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Hn(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let i = 0; i < o && (me(e, t.cases[i]), i !== o - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function jn(e, t) {
  t.body ? me(e, t.body) : e.push("null");
}
function me(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      jn(e, t);
      break;
    case 1:
      Hn(e, t);
      break;
    case 2:
      Xn(e, t);
      break;
    case 6:
      Gn(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw Te(C.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Kn,
        args: [t.type]
      });
  }
}
const xn = (e, t = {}) => {
  const n = Je(t.mode) ? t.mode : "normal", r = Je(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", l = e.helpers || [], f = Yn(e, {
    filename: r,
    breakLineCode: o,
    needIndent: i
  });
  f.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(i), l.length > 0 && (f.push(`const { ${mt(l.map((O) => `${O}: _${O}`), ", ")} } = ctx`), f.newline()), f.push("return "), me(f, e), f.deindent(i), f.push("}"), delete e.helpers;
  const { code: u, map: T } = f.context();
  return {
    ast: e,
    code: u,
    map: T ? T.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Bn(e, t = {}) {
  const n = dt({}, t), r = !!n.jit, o = !!n.minify, i = n.optimize == null ? !0 : n.optimize, f = Fn(n).parse(e);
  return r ? (i && Vn(f), o && _e(f), { ast: f, code: "" }) : ($n(f, n), xn(f, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Jn() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (De().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (De().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (De().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function le(e) {
  return F(e) && we(e) === 0 && (oe(e, "b") || oe(e, "body"));
}
const Et = ["b", "body"];
function Qn(e) {
  return te(e, Et);
}
const pt = ["c", "cases"];
function qn(e) {
  return te(e, pt, []);
}
const Nt = ["s", "static"];
function Zn(e) {
  return te(e, Nt);
}
const Tt = ["i", "items"];
function zn(e) {
  return te(e, Tt, []);
}
const Lt = ["t", "type"];
function we(e) {
  return te(e, Lt);
}
const Ot = ["v", "value"];
function ge(e, t) {
  const n = te(e, Ot);
  if (n != null)
    return n;
  throw pe(t);
}
const gt = ["m", "modifier"];
function er(e) {
  return te(e, gt);
}
const ht = ["k", "key"];
function tr(e) {
  const t = te(e, ht);
  if (t)
    return t;
  throw pe(
    6
    /* NodeTypes.Linked */
  );
}
function te(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (oe(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const nr = [
  ...Et,
  ...pt,
  ...Nt,
  ...Tt,
  ...ht,
  ...gt,
  ...Ot,
  ...Lt
];
function pe(e) {
  return new Error(`unhandled node type: ${e}`);
}
const ne = [];
ne[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
ne[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
ne[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
ne[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
ne[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
ne[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
ne[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const rr = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function sr(e) {
  return rr.test(e);
}
function ar(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function or(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function ir(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : sr(t) ? ar(t) : "*" + t;
}
function cr(e) {
  const t = [];
  let n = -1, r = 0, o = 0, i, l, f, u, T, O, g;
  const N = [];
  N[
    0
    /* Actions.APPEND */
  ] = () => {
    l === void 0 ? l = f : l += f;
  }, N[
    1
    /* Actions.PUSH */
  ] = () => {
    l !== void 0 && (t.push(l), l = void 0);
  }, N[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    N[
      0
      /* Actions.APPEND */
    ](), o++;
  }, N[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, N[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, l === void 0 || (l = ir(l), l === !1))
        return !1;
      N[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function P() {
    const b = e[n + 1];
    if (r === 5 && b === "'" || r === 6 && b === '"')
      return n++, f = "\\" + b, N[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, i = e[n], !(i === "\\" && P())) {
      if (u = or(i), g = ne[r], T = g[u] || g.l || 8, T === 8 || (r = T[0], T[1] !== void 0 && (O = N[T[1]], O && (f = i, O() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const ze = /* @__PURE__ */ new Map();
function lr(e, t) {
  return F(e) ? e[t] : null;
}
function jr(e, t) {
  if (!F(e))
    return null;
  let n = ze.get(t);
  if (n || (n = cr(t), n && ze.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, i = 0;
  for (; i < r; ) {
    const l = n[i];
    if (nr.includes(l) && le(o))
      return null;
    const f = o[l];
    if (f === void 0 || $(o))
      return null;
    o = f, i++;
  }
  return o;
}
const ur = (e) => e, fr = (e) => "", _r = "text", dr = (e) => e.length === 0 ? "" : En(e), mr = mn;
function et(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Er(e) {
  const t = Y(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Y(e.named.count) || Y(e.named.n)) ? Y(e.named.count) ? e.named.count : Y(e.named.n) ? e.named.n : t : t;
}
function pr(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Nr(e = {}) {
  const t = e.locale, n = Er(e), r = F(e.pluralRules) && S(t) && $(e.pluralRules[t]) ? e.pluralRules[t] : et, o = F(e.pluralRules) && S(t) && $(e.pluralRules[t]) ? et : void 0, i = (y) => y[r(n, y.length, o)], l = e.list || [], f = (y) => l[y], u = e.named || W();
  Y(e.pluralIndex) && pr(n, u);
  const T = (y) => u[y];
  function O(y) {
    const D = $(e.messages) ? e.messages(y) : F(e.messages) ? e.messages[y] : !1;
    return D || (e.parent ? e.parent.message(y) : fr);
  }
  const g = (y) => e.modifiers ? e.modifiers[y] : ur, N = v(e.processor) && $(e.processor.normalize) ? e.processor.normalize : dr, P = v(e.processor) && $(e.processor.interpolate) ? e.processor.interpolate : mr, b = v(e.processor) && S(e.processor.type) ? e.processor.type : _r, I = {
    list: f,
    named: T,
    plural: i,
    linked: (y, ...D) => {
      const [c, _] = D;
      let E = "text", m = "";
      D.length === 1 ? F(c) ? (m = c.modifier || m, E = c.type || E) : S(c) && (m = c || m) : D.length === 2 && (S(c) && (m = c || m), S(_) && (E = _ || E));
      const p = O(y)(I), L = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        E === "vnode" && J(p) && m ? p[0] : p
      );
      return m ? g(m)(L, E) : L;
    },
    message: O,
    type: b,
    interpolate: P,
    normalize: N,
    values: Ee(W(), l, u)
  };
  return I;
}
let Ne = null;
function xr(e) {
  Ne = e;
}
function Tr(e, t, n) {
  Ne && Ne.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Lr = /* @__PURE__ */ Or(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Or(e) {
  return (t) => Ne && Ne.emit(e, t);
}
const At = Ae.__EXTEND_POINT__, se = ft(At), X = {
  NOT_FOUND_KEY: At,
  // 2
  FALLBACK_TO_TRANSLATE: se(),
  // 3
  CANNOT_FORMAT_NUMBER: se(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: se(),
  // 5
  CANNOT_FORMAT_DATE: se(),
  // 6
  FALLBACK_TO_DATE_FORMAT: se(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: se(),
  // 8
  __EXTEND_POINT__: se()
  // 9
}, gr = {
  [X.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [X.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [X.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [X.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [X.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [X.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function ue(e, ...t) {
  return ct(gr[e], ...t);
}
const It = C.__EXTEND_POINT__, ae = ft(It), V = {
  INVALID_ARGUMENT: It,
  // 17
  INVALID_DATE_ARGUMENT: ae(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: ae(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: ae(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: ae(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: ae(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: ae(),
  // 23
  __EXTEND_POINT__: ae()
  // 24
};
function Q(e) {
  return Te(e, null, process.env.NODE_ENV !== "production" ? { messages: hr } : void 0);
}
const hr = {
  [V.INVALID_ARGUMENT]: "Invalid arguments",
  [V.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [V.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [V.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [V.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [V.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [V.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Fe(e, t) {
  return t.locale != null ? tt(t.locale) : tt(e.locale);
}
let Pe;
function tt(e) {
  if (S(e))
    return e;
  if ($(e)) {
    if (e.resolvedOnce && Pe != null)
      return Pe;
    if (e.constructor.name === "Function") {
      const t = e();
      if (dn(t))
        throw Q(V.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Pe = t;
    } else
      throw Q(V.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Q(V.NOT_SUPPORT_LOCALE_TYPE);
}
function Ar(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...J(t) ? t : F(t) ? Object.keys(t) : S(t) ? [t] : [n]
  ])];
}
function Br(e, t, n) {
  const r = S(n) ? n : Me, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let i = o.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let l = [n];
    for (; J(l); )
      l = nt(i, l, t);
    const f = J(t) || !v(t) ? t : t.default ? t.default : null;
    l = S(f) ? [f] : f, J(l) && nt(i, l, !1), o.__localeChainCache.set(r, i);
  }
  return i;
}
function nt(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && G(r); o++) {
    const i = t[o];
    S(i) && (r = Ir(e, t[o], n));
  }
  return r;
}
function Ir(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const i = o.join("-");
    r = Cr(e, i, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Cr(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (J(n) || v(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Sr = "9.14.5", Ue = -1, Me = "en-US", Ct = "", rt = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Dr() {
  return {
    upper: (e, t) => t === "text" && S(e) ? e.toUpperCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && S(e) ? e.toLowerCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && S(e) ? rt(e) : t === "vnode" && F(e) && "__v_isVNode" in e ? rt(e.children) : e
  };
}
let St;
function Jr(e) {
  St = e;
}
let Dt;
function Qr(e) {
  Dt = e;
}
let Pt;
function qr(e) {
  Pt = e;
}
let yt = null;
const Zr = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  yt = e;
}, Pr = /* @__NO_SIDE_EFFECTS__ */ () => yt;
let bt = null;
const zr = (e) => {
  bt = e;
}, es = () => bt;
let st = 0;
function ts(e = {}) {
  const t = $(e.onWarn) ? e.onWarn : fe, n = S(e.version) ? e.version : Sr, r = S(e.locale) || $(e.locale) ? e.locale : Me, o = $(r) ? Me : r, i = J(e.fallbackLocale) || v(e.fallbackLocale) || S(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, l = v(e.messages) ? e.messages : ye(o), f = v(e.datetimeFormats) ? e.datetimeFormats : ye(o), u = v(e.numberFormats) ? e.numberFormats : ye(o), T = Ee(W(), e.modifiers, Dr()), O = e.pluralRules || W(), g = $(e.missing) ? e.missing : null, N = G(e.missingWarn) || Xe(e.missingWarn) ? e.missingWarn : !0, P = G(e.fallbackWarn) || Xe(e.fallbackWarn) ? e.fallbackWarn : !0, b = !!e.fallbackFormat, A = !!e.unresolving, I = $(e.postTranslation) ? e.postTranslation : null, y = v(e.processor) ? e.processor : null, D = G(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, c = !!e.escapeParameter, _ = $(e.messageCompiler) ? e.messageCompiler : St;
  process.env.NODE_ENV !== "production" && $(e.messageCompiler) && sn(ue(X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const E = $(e.messageResolver) ? e.messageResolver : Dt || lr, m = $(e.localeFallbacker) ? e.localeFallbacker : Pt || Ar, p = F(e.fallbackContext) ? e.fallbackContext : void 0, L = e, M = F(L.__datetimeFormatters) ? L.__datetimeFormatters : /* @__PURE__ */ new Map(), U = F(L.__numberFormatters) ? L.__numberFormatters : /* @__PURE__ */ new Map(), q = F(L.__meta) ? L.__meta : {};
  st++;
  const k = {
    version: n,
    cid: st,
    locale: r,
    fallbackLocale: i,
    messages: l,
    modifiers: T,
    pluralRules: O,
    missing: g,
    missingWarn: N,
    fallbackWarn: P,
    fallbackFormat: b,
    unresolving: A,
    postTranslation: I,
    processor: y,
    warnHtmlMessage: D,
    escapeParameter: c,
    messageCompiler: _,
    messageResolver: E,
    localeFallbacker: m,
    fallbackContext: p,
    onWarn: t,
    __meta: q
  };
  return k.datetimeFormats = f, k.numberFormats = u, k.__datetimeFormatters = M, k.__numberFormatters = U, process.env.NODE_ENV !== "production" && (k.__v_emitter = L.__v_emitter != null ? L.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Tr(k, n, q), k;
}
const ye = (e) => ({ [e]: W() });
function $e(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function yr(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ve(e, t, n, r, o) {
  const { missing: i, onWarn: l } = e;
  if (process.env.NODE_ENV !== "production") {
    const f = e.__v_emitter;
    f && f.emit("missing", {
      locale: n,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (i !== null) {
    const f = i(e, n, t, o);
    return S(f) ? f : t;
  } else
    return process.env.NODE_ENV !== "production" && yr(r, t) && l(ue(X.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function ns(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Mt(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function br(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Mt(e, t[r]))
      return !0;
  return !1;
}
function be(e) {
  return (n) => Mr(n, e);
}
function Mr(e, t) {
  const n = Qn(t);
  if (n == null)
    throw pe(
      0
      /* NodeTypes.Resource */
    );
  if (we(n) === 1) {
    const i = qn(n);
    return e.plural(i.reduce((l, f) => [
      ...l,
      at(e, f)
    ], []));
  } else
    return at(e, n);
}
function at(e, t) {
  const n = Zn(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = zn(t).reduce((o, i) => [...o, ke(e, i)], []);
    return e.normalize(r);
  }
}
function ke(e, t) {
  const n = we(t);
  switch (n) {
    case 3:
      return ge(t, n);
    case 9:
      return ge(t, n);
    case 4: {
      const r = t;
      if (oe(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (oe(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw pe(n);
    }
    case 5: {
      const r = t;
      if (oe(r, "i") && Y(r.i))
        return e.interpolate(e.list(r.i));
      if (oe(r, "index") && Y(r.index))
        return e.interpolate(e.list(r.index));
      throw pe(n);
    }
    case 6: {
      const r = t, o = er(r), i = tr(r);
      return e.linked(ke(e, i), o ? ke(e, o) : void 0, e.type);
    }
    case 7:
      return ge(t, n);
    case 8:
      return ge(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const kr = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function kt(e, t) {
  t && Cn(e) && fe(ct(kr, { source: e }));
}
const Rt = (e) => e;
let de = W();
function vt(e) {
  e.code === Ae.USE_MODULO_SYNTAX && fe(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function wt(e, t = {}) {
  let n = !1;
  const r = t.onError || An;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Bn(e, t), detectError: n };
}
const rs = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!S(e))
    throw Q(V.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = vt);
  {
    const n = G(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && kt(e, n);
    const o = (t.onCacheKey || Rt)(e), i = de[o];
    if (i)
      return i;
    const { code: l, detectError: f } = wt(e, t), u = new Function(`return ${l}`)();
    return f ? u : de[o] = u;
  }
};
function ss(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = vt), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && S(e)) {
    const n = G(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && kt(e, n);
    const o = (t.onCacheKey || Rt)(e), i = de[o];
    if (i)
      return i;
    const { ast: l, detectError: f } = wt(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = be(l);
    return f ? u : de[o] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !le(e))
      return fe(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const n = e.cacheKey;
    if (n) {
      const r = de[n];
      return r || (de[n] = be(e));
    } else
      return be(e);
  }
}
const ot = () => "", B = (e) => $(e);
function as(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: i, fallbackLocale: l, messages: f } = e, [u, T] = wr(...t), O = G(T.missingWarn) ? T.missingWarn : e.missingWarn, g = G(T.fallbackWarn) ? T.fallbackWarn : e.fallbackWarn, N = G(T.escapeParameter) ? T.escapeParameter : e.escapeParameter, P = !!T.resolvedMessage, b = S(T.default) || G(T.default) ? G(T.default) ? i ? u : () => u : T.default : n ? i ? u : () => u : "", A = n || b !== "", I = Fe(e, T);
  N && Rr(T);
  let [y, D, c] = P ? [
    u,
    I,
    f[I] || W()
  ] : Ft(e, u, I, l, g, O), _ = y, E = u;
  if (!P && !(S(_) || le(_) || B(_)) && A && (_ = b, E = _), !P && (!(S(_) || le(_) || B(_)) || !S(D)))
    return o ? Ue : u;
  if (process.env.NODE_ENV !== "production" && S(_) && e.messageCompiler == null)
    return fe(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let m = !1;
  const p = () => {
    m = !0;
  }, L = B(_) ? _ : Ut(e, u, D, _, E, p);
  if (m)
    return _;
  const M = $r(e, D, c, T), U = Nr(M), q = vr(e, L, U);
  let k = r ? r(q, u) : q;
  if (N && S(k) && (k = fn(k)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const j = {
      timestamp: Date.now(),
      key: S(u) ? u : B(_) ? _.key : "",
      locale: D || (B(_) ? _.locale : ""),
      format: S(_) ? _ : B(_) ? _.source : "",
      message: k
    };
    j.meta = Ee({}, e.__meta, /* @__PURE__ */ Pr() || {}), Lr(j);
  }
  return k;
}
function Rr(e) {
  J(e.list) ? e.list = e.list.map((t) => S(t) ? je(t) : t) : F(e.named) && Object.keys(e.named).forEach((t) => {
    S(e.named[t]) && (e.named[t] = je(e.named[t]));
  });
}
function Ft(e, t, n, r, o, i) {
  const { messages: l, onWarn: f, messageResolver: u, localeFallbacker: T } = e, O = T(e, r, n);
  let g = W(), N, P = null, b = n, A = null;
  const I = "translate";
  for (let y = 0; y < O.length; y++) {
    if (N = A = O[y], process.env.NODE_ENV !== "production" && n !== N && !Mt(n, N) && $e(o, t) && f(ue(X.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: N
    })), process.env.NODE_ENV !== "production" && n !== N) {
      const E = e.__v_emitter;
      E && E.emit("fallback", {
        type: I,
        key: t,
        from: b,
        to: A,
        groupId: `${I}:${t}`
      });
    }
    g = l[N] || W();
    let D = null, c, _;
    if (process.env.NODE_ENV !== "production" && ie && (D = window.performance.now(), c = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", H && H(c)), (P = u(g, t)) === null && (P = g[t]), process.env.NODE_ENV !== "production" && ie) {
      const E = window.performance.now(), m = e.__v_emitter;
      m && D && P && m.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: P,
        time: E - D,
        groupId: `${I}:${t}`
      }), c && _ && H && ce && (H(_), ce("intlify message resolve", c, _));
    }
    if (S(P) || le(P) || B(P))
      break;
    if (!br(N, O)) {
      const E = Ve(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        N,
        i,
        I
      );
      E !== t && (P = E);
    }
    b = A;
  }
  return [P, N, g];
}
function Ut(e, t, n, r, o, i) {
  const { messageCompiler: l, warnHtmlMessage: f } = e;
  if (B(r)) {
    const N = r;
    return N.locale = N.locale || n, N.key = N.key || t, N;
  }
  if (l == null) {
    const N = (() => r);
    return N.locale = n, N.key = t, N;
  }
  let u = null, T, O;
  process.env.NODE_ENV !== "production" && ie && (u = window.performance.now(), T = "intlify-message-compilation-start", O = "intlify-message-compilation-end", H && H(T));
  const g = l(r, Fr(e, n, o, r, f, i));
  if (process.env.NODE_ENV !== "production" && ie) {
    const N = window.performance.now(), P = e.__v_emitter;
    P && u && P.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: N - u,
      groupId: `translate:${t}`
    }), T && O && H && ce && (H(O), ce("intlify message compilation", T, O));
  }
  return g.locale = n, g.key = t, g.source = r, g;
}
function vr(e, t, n) {
  let r = null, o, i;
  process.env.NODE_ENV !== "production" && ie && (r = window.performance.now(), o = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", H && H(o));
  const l = t(n);
  if (process.env.NODE_ENV !== "production" && ie) {
    const f = window.performance.now(), u = e.__v_emitter;
    u && r && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: l,
      time: f - r,
      groupId: `translate:${t.key}`
    }), o && i && H && ce && (H(i), ce("intlify message evaluation", o, i));
  }
  return l;
}
function wr(...e) {
  const [t, n, r] = e, o = W();
  if (!S(t) && !Y(t) && !B(t) && !le(t))
    throw Q(V.INVALID_ARGUMENT);
  const i = Y(t) ? String(t) : (B(t), t);
  return Y(n) ? o.plural = n : S(n) ? o.default = n : v(n) && !Re(n) ? o.named = n : J(n) && (o.list = n), Y(r) ? o.plural = r : S(r) ? o.default = r : v(r) && Ee(o, r), [i, o];
}
function Fr(e, t, n, r, o, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (l) => {
      if (i && i(l), process.env.NODE_ENV !== "production") {
        const f = Ur(r), u = `Message compilation error: ${l.message}`, T = l.location && f && pn(f, l.location.start.offset, l.location.end.offset), O = e.__v_emitter;
        O && f && O.emit("compile-error", {
          message: f,
          error: l.message,
          start: l.location && l.location.start.offset,
          end: l.location && l.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(T ? `${u}
${T}` : u);
      } else
        throw l;
    },
    onCacheKey: (l) => on(t, n, l)
  };
}
function Ur(e) {
  if (S(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function $r(e, t, n, r) {
  const { modifiers: o, pluralRules: i, messageResolver: l, fallbackLocale: f, fallbackWarn: u, missingWarn: T, fallbackContext: O } = e, N = {
    locale: t,
    modifiers: o,
    pluralRules: i,
    messages: (P) => {
      let b = l(n, P);
      if (b == null && O) {
        const [, , A] = Ft(O, P, t, f, u, T);
        b = l(A, P);
      }
      if (S(b) || le(b)) {
        let A = !1;
        const y = Ut(e, P, t, b, P, () => {
          A = !0;
        });
        return A ? ot : y;
      } else return B(b) ? b : ot;
    }
  };
  return e.processor && (N.processor = e.processor), r.list && (N.list = r.list), r.named && (N.named = r.named), Y(r.plural) && (N.pluralIndex = r.plural), N;
}
const it = typeof Intl < "u", $t = {
  dateTimeFormat: it && typeof Intl.DateTimeFormat < "u",
  numberFormat: it && typeof Intl.NumberFormat < "u"
};
function os(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: l } = e, { __datetimeFormatters: f } = e;
  if (process.env.NODE_ENV !== "production" && !$t.dateTimeFormat)
    return i(ue(X.CANNOT_FORMAT_DATE)), Ct;
  const [u, T, O, g] = Wr(...t), N = G(O.missingWarn) ? O.missingWarn : e.missingWarn, P = G(O.fallbackWarn) ? O.fallbackWarn : e.fallbackWarn, b = !!O.part, A = Fe(e, O), I = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    A
  );
  if (!S(u) || u === "")
    return new Intl.DateTimeFormat(A, g).format(T);
  let y = {}, D, c = null, _ = A, E = null;
  const m = "datetime format";
  for (let M = 0; M < I.length; M++) {
    if (D = E = I[M], process.env.NODE_ENV !== "production" && A !== D && $e(P, u) && i(ue(X.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: D
    })), process.env.NODE_ENV !== "production" && A !== D) {
      const U = e.__v_emitter;
      U && U.emit("fallback", {
        type: m,
        key: u,
        from: _,
        to: E,
        groupId: `${m}:${u}`
      });
    }
    if (y = n[D] || {}, c = y[u], v(c))
      break;
    Ve(e, u, D, N, m), _ = E;
  }
  if (!v(c) || !S(D))
    return r ? Ue : u;
  let p = `${D}__${u}`;
  Re(g) || (p = `${p}__${JSON.stringify(g)}`);
  let L = f.get(p);
  return L || (L = new Intl.DateTimeFormat(D, Ee({}, c, g)), f.set(p, L)), b ? L.formatToParts(T) : L.format(T);
}
const Vr = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Wr(...e) {
  const [t, n, r, o] = e, i = W();
  let l = W(), f;
  if (S(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw Q(V.INVALID_ISO_DATE_ARGUMENT);
    const T = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    f = new Date(T);
    try {
      f.toISOString();
    } catch {
      throw Q(V.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ln(t)) {
    if (isNaN(t.getTime()))
      throw Q(V.INVALID_DATE_ARGUMENT);
    f = t;
  } else if (Y(t))
    f = t;
  else
    throw Q(V.INVALID_ARGUMENT);
  return S(n) ? i.key = n : v(n) && Object.keys(n).forEach((u) => {
    Vr.includes(u) ? l[u] = n[u] : i[u] = n[u];
  }), S(r) ? i.locale = r : v(r) && (l = r), v(o) && (l = o), [i.key || "", f, i, l];
}
function is(e, t, n) {
  const r = e;
  for (const o in n) {
    const i = `${t}__${o}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function cs(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: l } = e, { __numberFormatters: f } = e;
  if (process.env.NODE_ENV !== "production" && !$t.numberFormat)
    return i(ue(X.CANNOT_FORMAT_NUMBER)), Ct;
  const [u, T, O, g] = Yr(...t), N = G(O.missingWarn) ? O.missingWarn : e.missingWarn, P = G(O.fallbackWarn) ? O.fallbackWarn : e.fallbackWarn, b = !!O.part, A = Fe(e, O), I = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    A
  );
  if (!S(u) || u === "")
    return new Intl.NumberFormat(A, g).format(T);
  let y = {}, D, c = null, _ = A, E = null;
  const m = "number format";
  for (let M = 0; M < I.length; M++) {
    if (D = E = I[M], process.env.NODE_ENV !== "production" && A !== D && $e(P, u) && i(ue(X.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: D
    })), process.env.NODE_ENV !== "production" && A !== D) {
      const U = e.__v_emitter;
      U && U.emit("fallback", {
        type: m,
        key: u,
        from: _,
        to: E,
        groupId: `${m}:${u}`
      });
    }
    if (y = n[D] || {}, c = y[u], v(c))
      break;
    Ve(e, u, D, N, m), _ = E;
  }
  if (!v(c) || !S(D))
    return r ? Ue : u;
  let p = `${D}__${u}`;
  Re(g) || (p = `${p}__${JSON.stringify(g)}`);
  let L = f.get(p);
  return L || (L = new Intl.NumberFormat(D, Ee({}, c, g)), f.set(p, L)), b ? L.formatToParts(T) : L.format(T);
}
const Kr = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Yr(...e) {
  const [t, n, r, o] = e, i = W();
  let l = W();
  if (!Y(t))
    throw Q(V.INVALID_ARGUMENT);
  const f = t;
  return S(n) ? i.key = n : v(n) && Object.keys(n).forEach((u) => {
    Kr.includes(u) ? l[u] = n[u] : i[u] = n[u];
  }), S(r) ? i.locale = r : v(r) && (l = r), v(o) && (l = o), [i.key || "", f, i, l];
}
function ls(e, t, n) {
  const r = e;
  for (const o in n) {
    const i = `${t}__${o}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
Jn();
export {
  rs as $,
  nr as A,
  es as B,
  X as C,
  Me as D,
  $e as E,
  yr as F,
  Br as G,
  V as H,
  zr as I,
  wr as J,
  as as K,
  Wr as L,
  Ct as M,
  Ue as N,
  os as O,
  Yr as P,
  cs as Q,
  B as R,
  Kr as S,
  Vr as T,
  Re as U,
  Jr as V,
  Qr as W,
  qr as X,
  De as Y,
  xr as Z,
  ss as _,
  v as a,
  jr as a0,
  sn as b,
  Xr as c,
  ft as d,
  S as e,
  ct as f,
  J as g,
  Xe as h,
  G as i,
  $ as j,
  ie as k,
  Te as l,
  Gr as m,
  Ee as n,
  Y as o,
  W as p,
  Hr as q,
  oe as r,
  ts as s,
  F as t,
  ns as u,
  is as v,
  fe as w,
  ls as x,
  le as y,
  Zr as z
};
