import "./vue-DPbbFsnt.js";
import { w as X, p as ke, e as Ht, q as pn, s as j, t as Pe, u as Oe, v as V, x as zl, F as fe, y as ra, z as Ar, C as Ir, A as ft, g as Pr, r as U, f as ge, c as x, B as Ee, d as Mr, h as Kt, n as ve, D as q, E as Ie, G as Wl, o as Et, H as Ce, I as Er, J as oa, K as Tr, L as sa, M as gt, N as Ge, O as L, l as k, P as De, Q as Tt, R as Or, S as Ze, U as Dr, a as Gn, V as K, W as ae, X as _r, T as Br, Y as Lt, k as kn, Z as Fr, _ as $r, $ as Hr } from "./@vue-r5UrhElT.js";
function rt(e, t) {
  let n;
  function a() {
    n = Ht(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), a();
    }) : t());
  }
  X(e, (l) => {
    l && !n ? a() : l || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), ke(() => {
    n == null || n.stop();
  });
}
function On(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Rr(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function _a(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return On({
      x: l,
      y: i
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, i = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return On({
      x: l,
      y: i
    }, t);
  }
  return On({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
function Fe(e) {
  pn(`Vuetify: ${e}`);
}
function Rt(e) {
  pn(`Vuetify error: ${e}`);
}
function jl(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, pn(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const oe = typeof window < "u", ua = oe && "IntersectionObserver" in window, Nr = oe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Gl = oe && "matchMedia" in window && typeof window.matchMedia == "function", At = () => Gl && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Ba(e, t, n) {
  zr(e, t), t.set(e, n);
}
function zr(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Fa(e, t, n) {
  return e.set(Zl(e, t), n), n;
}
function Ke(e, t) {
  return e.get(Zl(e, t));
}
function Zl(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Ul(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function Zn(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Ul(e, t.split("."), n));
}
function Re(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return Zn(e, t, n);
  if (Array.isArray(t)) return Ul(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Yl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function Q(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function Un(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function $a(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Kl(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function Dn(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function xn(e, t) {
  const n = {};
  for (const a of t)
    Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function Ha(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((r) => r instanceof RegExp ? r.test(i) : r === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Je(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
const ql = /^on[^a-z]/, Xl = (e) => ql.test(e), Wr = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Ql(e) {
  const [t, n] = Ha(e, [ql]), a = Je(t, Wr), [l, i] = Ha(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function Ne(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function jr(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), r = 0; r < l; r++)
      i[r] = arguments[r];
    clearTimeout(n), n = setTimeout(() => e(...i), ft(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function $e(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Ra(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Na(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function Ve() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const i = e[l], r = t[l];
    if ($a(i) && $a(r)) {
      a[l] = Ve(i, r, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(r)) {
      a[l] = n(i, r);
      continue;
    }
    a[l] = r;
  }
  return a;
}
function Jl(e) {
  return e.map((t) => t.type === fe ? Jl(t.children) : t).flat();
}
function vt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (vt.cache.has(e)) return vt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return vt.cache.set(e, t), t;
}
vt.cache = /* @__PURE__ */ new Map();
function xt(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => xt(e, n)).flat(1);
  if (t.suspense)
    return xt(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => xt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return xt(e, t.component.subTree).flat(1);
  }
  return [];
}
var wt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap();
class Zr {
  constructor(t) {
    Ba(this, wt, []), Ba(this, ct, 0), this.size = t;
  }
  get isFull() {
    return Ke(wt, this).length === this.size;
  }
  push(t) {
    Ke(wt, this)[Ke(ct, this)] = t, Fa(ct, this, (Ke(ct, this) + 1) % this.size);
  }
  values() {
    return Ke(wt, this).slice(Ke(ct, this)).concat(Ke(wt, this).slice(0, Ke(ct, this)));
  }
  clear() {
    Ke(wt, this).length = 0, Fa(ct, this, 0);
  }
}
function ca(e) {
  const t = Pe({});
  Oe(() => {
    const a = e();
    for (const l in a)
      t[l] = a[l];
  }, {
    flush: "sync"
  });
  const n = {};
  for (const a in t)
    n[a] = V(() => t[a]);
  return n;
}
function un(e, t) {
  return e.includes(t);
}
function ei(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Me = () => [Function, Array];
function za(e, t) {
  return t = "on" + zl(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function ti(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else typeof e == "function" && e(...n);
}
function It(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "details:not(:has(> summary))", "details > summary", "[tabindex]", '[contenteditable]:not([contenteditable="false"])', "audio[controls]", "video[controls]"].map((l) => `${l}${t ? ':not([tabindex="-1"])' : ""}:not([disabled], [inert])`).join(", ");
  let a;
  try {
    a = [...e.querySelectorAll(n)];
  } catch (l) {
    return Rt(String(l)), [];
  }
  return a.filter((l) => !l.closest("[inert]")).filter((l) => !!l.offsetParent || l.getClientRects().length > 0).filter((l) => {
    var i, r;
    return !((i = l.parentElement) != null && i.closest("details:not([open])")) || l.tagName === "SUMMARY" && ((r = l.parentElement) == null ? void 0 : r.tagName) === "DETAILS";
  });
}
function ni(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function $t(e, t) {
  var a, l, i, r;
  const n = It(e);
  if (t == null)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = n[0]) == null || a.focus());
  else if (t === "first")
    (l = n[0]) == null || l.focus();
  else if (t === "last")
    (i = n.at(-1)) == null || i.focus();
  else if (typeof t == "number")
    (r = n[t]) == null || r.focus();
  else {
    const o = ni(n, t);
    o ? o.focus() : $t(e, t === "next" ? "first" : "last");
  }
}
function cn(e, t) {
  if (!(oe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function ai(e) {
  return e.some((t) => Ar(t) ? t.type === Ir ? !1 : t.type !== fe || ai(t.children) : !0) ? e : null;
}
function Ur(e, t) {
  if (!oe || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Yr(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), i = l.left, r = l.top, o = l.right, s = l.bottom;
  return n >= i && n <= o && a >= r && a <= s;
}
function Yn() {
  const e = j(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Kl(e.value)
  }), t;
}
function Wa(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function ht(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Kr(e) {
  const t = {};
  for (const n in e)
    t[ra(n)] = e[n];
  return t;
}
function qr(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
const li = ["top", "bottom"], Xr = ["start", "end", "left", "right"];
function Kn(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = un(li, n) ? "start" : un(Xr, n) ? "top" : "center"), {
    side: ja(n, t),
    align: ja(a, t)
  };
}
function ja(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function _n(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Bn(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Ga(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Za(e) {
  return un(li, e.side) ? "y" : "x";
}
class Be {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, a = t instanceof DOMRect ? 1 + (1 - n) / n : 1, {
      x: l,
      y: i,
      width: r,
      height: o
    } = t;
    this.x = l * a, this.y = i * a, this.width = r * a, this.height = o * a;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Ua(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function ii(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new Be({
      x: e[0] * n,
      y: e[1] * n,
      width: 0 * n,
      height: 0 * n
    });
  } else
    return new Be(e.getBoundingClientRect());
}
function Qr(e) {
  if (e === document.documentElement)
    if (visualViewport) {
      const t = document.body.currentCSSZoom ?? 1;
      return new Be({
        x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
        y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
        width: visualViewport.width * visualViewport.scale / t,
        height: visualViewport.height * visualViewport.scale / t
      });
    } else
      return new Be({
        x: 0,
        y: 0,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
  else {
    const t = e.getBoundingClientRect();
    return new Be({
      x: t.x,
      y: t.y,
      width: e.clientWidth,
      height: e.clientHeight
    });
  }
}
function da(e) {
  const t = new Be(e.getBoundingClientRect()), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, i, r, o, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = Number(l[0]), r = Number(l[5]), o = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = Number(l[0]), r = Number(l[3]), o = Number(l[4]), s = Number(l[5]);
    else
      return new Be(t);
    const u = n.transformOrigin, c = t.x - o - (1 - i) * parseFloat(u), d = t.y - s - (1 - r) * parseFloat(u.slice(u.indexOf(" ") + 1)), v = i ? t.width / i : e.offsetWidth + 1, f = r ? t.height / r : e.offsetHeight + 1;
    return new Be({
      x: c,
      y: d,
      width: v,
      height: f
    });
  } else
    return new Be(t);
}
function lt(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const on = /* @__PURE__ */ new WeakMap();
function Jr(e, t) {
  Object.keys(t).forEach((n) => {
    if (Xl(n)) {
      const a = ei(n), l = on.get(e);
      if (t[n] == null)
        l == null || l.forEach((i) => {
          const [r, o] = i;
          r === a && (e.removeEventListener(a, o), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), on.has(e) || on.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function eo(e, t) {
  Object.keys(t).forEach((n) => {
    if (Xl(n)) {
      const a = ei(n), l = on.get(e);
      l == null || l.forEach((i) => {
        const [r, o] = i;
        r === a && (e.removeEventListener(a, o), l.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const pt = 2.4, Ya = 0.2126729, Ka = 0.7151522, qa = 0.072175, to = 0.55, no = 0.58, ao = 0.57, lo = 0.62, nn = 0.03, Xa = 1.45, io = 5e-4, ro = 1.25, oo = 1.25, Qa = 0.078, Ja = 12.82051282051282, an = 0.06, el = 1e-3;
function tl(e, t) {
  const n = (e.r / 255) ** pt, a = (e.g / 255) ** pt, l = (e.b / 255) ** pt, i = (t.r / 255) ** pt, r = (t.g / 255) ** pt, o = (t.b / 255) ** pt;
  let s = n * Ya + a * Ka + l * qa, u = i * Ya + r * Ka + o * qa;
  if (s <= nn && (s += (nn - s) ** Xa), u <= nn && (u += (nn - u) ** Xa), Math.abs(u - s) < io) return 0;
  let c;
  if (u > s) {
    const d = (u ** to - s ** no) * ro;
    c = d < el ? 0 : d < Qa ? d - d * Ja * an : d - an;
  } else {
    const d = (u ** lo - s ** ao) * oo;
    c = d > -el ? 0 : d > -Qa ? d - d * Ja * an : d + an;
  }
  return c * 100;
}
const dn = 0.20689655172413793, so = (e) => e > dn ** 3 ? Math.cbrt(e) : e / (3 * dn ** 2) + 4 / 29, uo = (e) => e > dn ? e ** 3 : 3 * dn ** 2 * (e - 4 / 29);
function ri(e) {
  const t = so, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function oi(e) {
  const t = uo, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const co = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], fo = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, vo = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], mo = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function si(e) {
  const t = Array(3), n = fo, a = co;
  for (let l = 0; l < 3; ++l)
    t[l] = Math.round($e(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function fa(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], i = mo, r = vo;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let o = 0; o < 3; ++o)
    l[o] = r[o][0] * t + r[o][1] * n + r[o][2] * a;
  return l;
}
function qn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function go(e) {
  return qn(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const nl = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, ho = {
  rgb: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  rgba: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  hsl: (e, t, n, a) => al({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => al({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => Nt({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => Nt({
    h: e,
    s: t,
    v: n,
    a
  })
};
function je(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Fe(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && nl.test(e)) {
    const {
      groups: t
    } = e.match(nl), {
      fn: n,
      values: a
    } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((i, r) => i.endsWith("%") || // unitless slv are %
    r > 0 && r < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return ho[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || Fe(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Fe(`'${e}' is not a valid hex(a) color`), bo(t);
  } else if (typeof e == "object") {
    if (Dn(e, ["r", "g", "b"]))
      return e;
    if (Dn(e, ["h", "s", "l"]))
      return Nt(ui(e));
    if (Dn(e, ["h", "s", "v"]))
      return Nt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Nt(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = (o) => {
    const s = (o + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, r = [i(5), i(3), i(1)].map((o) => Math.round(o * 255));
  return {
    r: r[0],
    g: r[1],
    b: r[2],
    a: l
  };
}
function al(e) {
  return Nt(ui(e));
}
function ui(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: l
  } = e, i = a + n * Math.min(a, 1 - a), r = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: t,
    s: r,
    v: i,
    a: l
  };
}
function ln(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function yo(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[ln(t), ln(n), ln(a), l !== void 0 ? ln(Math.round(l * 255)) : ""].join("")}`;
}
function bo(e) {
  e = So(e);
  let [t, n, a, l] = Gr(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function So(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Ra(Ra(e, 6), 8, "F")), e;
}
function Co(e, t) {
  const n = ri(fa(e));
  return n[0] = n[0] + t * 10, si(oi(n));
}
function wo(e, t) {
  const n = ri(fa(e));
  return n[0] = n[0] - t * 10, si(oi(n));
}
function po(e) {
  const t = je(e);
  return fa(t)[1];
}
function ci(e) {
  const t = Math.abs(tl(je(0), je(e)));
  return Math.abs(tl(je(16777215), je(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function E(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const r = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? a[l] = {
      ...r,
      default: n[l]
    } : a[l] = r, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const ne = E({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function he(e, t) {
  const n = Pr();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Ue() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = he(e).type;
  return vt((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function ko(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : he("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const Pt = Symbol.for("vuetify:defaults");
function xo(e) {
  return U(e);
}
function va() {
  const e = ge(Pt);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Ot(e, t) {
  const n = va(), a = U(e), l = x(() => {
    if (ft(t == null ? void 0 : t.disabled)) return n.value;
    const r = ft(t == null ? void 0 : t.scoped), o = ft(t == null ? void 0 : t.reset), s = ft(t == null ? void 0 : t.root);
    if (a.value == null && !(r || o || s)) return n.value;
    let u = Ve(a.value, {
      prev: n.value
    });
    if (r) return u;
    if (o || s) {
      const c = Number(o || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++)
        u = u.prev;
      return u && typeof s == "string" && s in u && (u = Ve(Ve(u, {
        prev: u
      }), u[s])), u;
    }
    return u.prev ? Ve(u.prev, u) : u;
  });
  return Ee(Pt, l), l;
}
function Vo(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[vt(t)] < "u");
}
function Lo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : va();
  const a = he("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = x(() => {
    var s;
    return (s = n.value) == null ? void 0 : s[e._as ?? t];
  }), i = new Proxy(e, {
    get(s, u) {
      var f, g, y, h;
      const c = Reflect.get(s, u);
      if (u === "class" || u === "style")
        return [(f = l.value) == null ? void 0 : f[u], c].filter((m) => m != null);
      if (Vo(a.vnode, u)) return c;
      const d = (g = l.value) == null ? void 0 : g[u];
      if (d !== void 0) return d;
      const v = (h = (y = n.value) == null ? void 0 : y.global) == null ? void 0 : h[u];
      return v !== void 0 ? v : c;
    }
  }), r = j();
  Oe(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      r.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      r.value = void 0;
  });
  function o() {
    const s = ko(Pt, a);
    Ee(Pt, x(() => r.value ? Ve((s == null ? void 0 : s.value) ?? {}, r.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: o
  };
}
function Dt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Fe("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return xn(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = va();
      if (!i.value) return e._setup(a, l);
      const {
        props: r,
        provideSubDefaults: o
      } = Lo(a, a._as ?? e.name, i), s = e._setup(r, l);
      return o(), s;
    };
  }
  return e;
}
function Y() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? Dt : Mr)(t);
}
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Y()({
    name: n ?? zl(ra(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...ne()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var r;
        return Kt(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (r = i.default) == null ? void 0 : r.call(i));
      };
    }
  });
}
function Ao(e, t, n, a) {
  if (!n || ht(e) || ht(t)) return;
  const l = n.get(e);
  if (l)
    l.set(t, a);
  else {
    const i = /* @__PURE__ */ new WeakMap();
    i.set(t, a), n.set(e, i);
  }
}
function Io(e, t, n) {
  var i, r;
  if (!n || ht(e) || ht(t)) return null;
  const a = (i = n.get(e)) == null ? void 0 : i.get(t);
  if (typeof a == "boolean") return a;
  const l = (r = n.get(t)) == null ? void 0 : r.get(e);
  return typeof l == "boolean" ? l : null;
}
function He(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length)
    return !1;
  const l = Io(e, t, n);
  return l || (Ao(e, t, n, !0), a.every((i) => He(e[i], t[i], n)));
}
function di(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const fn = "cubic-bezier(0.4, 0, 0.2, 1)", ll = "cubic-bezier(0.0, 0, 0.2, 1)", il = "cubic-bezier(0.4, 0, 1, 1)", Po = {
  linear: (e) => e,
  easeInQuad: (e) => e ** 2,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
  easeInCubic: (e) => e ** 3,
  easeOutCubic: (e) => --e ** 3 + 1,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e ** 4,
  easeOutQuart: (e) => 1 - --e ** 4,
  easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
  easeInQuint: (e) => e ** 5,
  easeOutQuint: (e) => 1 + --e ** 5,
  easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5,
  instant: (e) => 1
};
function fi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Mo(e) : ga(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function vn(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (ga(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function ga(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function Mo(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Eo(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function ee(e) {
  const t = he("useRender");
  t.render = e;
}
function To(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    leading: !0,
    trailing: !0
  }, a = 0, l = 0, i = !1, r = 0;
  function o() {
    clearTimeout(a), i = !1, r = 0;
  }
  const s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    clearTimeout(a);
    const v = Date.now();
    r || (r = v);
    const f = v - Math.max(r, l);
    function g() {
      l = Date.now(), a = window.setTimeout(o, t), e(...c);
    }
    i ? f >= t ? g() : n.trailing && (a = window.setTimeout(g, t - f)) : (i = !0, n.leading && g());
  };
  return s.clear = o, s.immediate = e, s;
}
const vi = {
  static: _o,
  // specific viewport position, usually centered
  connected: Fo
  // connected to a certain element
}, Oo = E({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in vi
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array],
  stickToTarget: Boolean
}, "VOverlay-location-strategies");
function Do(e, t) {
  const n = U({}), a = U();
  oe && rt(() => !!(t.isActive.value && e.locationStrategy), (o) => {
    var s, u;
    X(() => e.locationStrategy, o), ke(() => {
      window.removeEventListener("resize", l), visualViewport == null || visualViewport.removeEventListener("resize", i), visualViewport == null || visualViewport.removeEventListener("scroll", r), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("resize", i, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("scroll", r, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (s = e.locationStrategy(t, e, n)) == null ? void 0 : s.updateLocation : a.value = (u = vi[e.locationStrategy](t, e, n)) == null ? void 0 : u.updateLocation;
  });
  function l(o) {
    var s;
    (s = a.value) == null || s.call(a, o);
  }
  function i(o) {
    var s;
    (s = a.value) == null || s.call(a, o);
  }
  function r(o) {
    var s;
    (s = a.value) == null || s.call(a, o);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function _o() {
}
function Bo(e, t) {
  const n = da(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Fo(e, t, n) {
  (Array.isArray(e.target.value) || Eo(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = ca(() => {
    const m = Kn(t.location, e.isRtl.value), b = t.origin === "overlap" ? m : t.origin === "auto" ? _n(m) : Kn(t.origin, e.isRtl.value);
    return m.side === b.side && m.align === Bn(b).align ? {
      preferredAnchor: Ga(m),
      preferredOrigin: Ga(b)
    } : {
      preferredAnchor: m,
      preferredOrigin: b
    };
  }), [r, o, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => x(() => {
    const b = parseFloat(t[m]);
    return isNaN(b) ? 1 / 0 : b;
  })), c = x(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const m = t.offset.split(" ").map(parseFloat);
      return m.length < 2 && m.push(0), m;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = !1, v = -1;
  const f = new Zr(4), g = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((b) => {
      b !== v && f.clear(), requestAnimationFrame((S) => {
        v = S;
      });
    }), f.isFull) {
      const b = f.values();
      if (He(b.at(-1), b.at(-3)) && !He(b.at(-1), b.at(-2)))
        return;
    }
    const m = h();
    m && f.push(m.flipped);
  });
  let y = new Be({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  X(e.target, (m, b) => {
    b && !Array.isArray(b) && g.unobserve(b), Array.isArray(m) ? He(m, b) || h() : m && g.observe(m);
  }, {
    immediate: !0
  }), X(e.contentEl, (m, b) => {
    b && g.unobserve(b), m && g.observe(m);
  }, {
    immediate: !0
  }), ke(() => {
    g.disconnect();
  });
  function h() {
    if (d = !1, requestAnimationFrame(() => d = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (y = ii(e.target.value));
    const m = Bo(e.contentEl.value, e.isRtl.value), b = vn(e.contentEl.value), S = t.stickToTarget ? 0 : 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (m.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), m.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const w = b.reduce(($, T) => {
      const H = Qr(T);
      return $ ? new Be({
        x: Math.max($.left, H.left),
        y: Math.max($.top, H.top),
        width: Math.min($.right, H.right) - Math.max($.left, H.left),
        height: Math.min($.bottom, H.bottom) - Math.max($.top, H.top)
      }) : H;
    }, void 0);
    t.stickToTarget ? (w.x += Math.min(0, y.x), w.y += Math.min(0, y.y), w.width = Math.max(w.width, y.x + y.width), w.height = Math.max(w.height, y.y + y.height)) : (w.x += S, w.y += S, w.width -= S * 2, w.height -= S * 2);
    let A = {
      anchor: l.value,
      origin: i.value
    };
    function P($) {
      const T = new Be(m), H = _a($.anchor, y), W = _a($.origin, T);
      let {
        x: Z,
        y: J
      } = Rr(H, W);
      switch ($.anchor.side) {
        case "top":
          J -= c.value[0];
          break;
        case "bottom":
          J += c.value[0];
          break;
        case "left":
          Z -= c.value[0];
          break;
        case "right":
          Z += c.value[0];
          break;
      }
      switch ($.anchor.align) {
        case "top":
          J -= c.value[1];
          break;
        case "bottom":
          J += c.value[1];
          break;
        case "left":
          Z -= c.value[1];
          break;
        case "right":
          Z += c.value[1];
          break;
      }
      return T.x += Z, T.y += J, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, u.value), {
        overflows: Ua(T, w),
        x: Z,
        y: J
      };
    }
    let I = 0, C = 0;
    const F = {
      x: 0,
      y: 0
    }, R = {
      x: !1,
      y: !1
    };
    let N = -1;
    for (; ; ) {
      if (N++ > 10) {
        Rt("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: $,
        y: T,
        overflows: H
      } = P(A);
      I += $, C += T, m.x += $, m.y += T;
      {
        const W = Za(A.anchor), Z = H.x.before || H.x.after, J = H.y.before || H.y.after;
        let le = !1;
        if (["x", "y"].forEach((B) => {
          if (B === "x" && Z && !R.x || B === "y" && J && !R.y) {
            const G = {
              anchor: {
                ...A.anchor
              },
              origin: {
                ...A.origin
              }
            }, M = B === "x" ? W === "y" ? Bn : _n : W === "y" ? _n : Bn;
            G.anchor = M(G.anchor), G.origin = M(G.origin);
            const {
              overflows: p
            } = P(G);
            (p[B].before <= H[B].before && p[B].after <= H[B].after || p[B].before + p[B].after < (H[B].before + H[B].after) / 2) && (A = G, le = R[B] = !0);
          }
        }), le) continue;
      }
      H.x.before && (I += H.x.before, m.x += H.x.before), H.x.after && (I -= H.x.after, m.x -= H.x.after), H.y.before && (C += H.y.before, m.y += H.y.before), H.y.after && (C -= H.y.after, m.y -= H.y.after);
      {
        const W = Ua(m, w);
        F.x = w.width - W.x.before - W.x.after, F.y = w.height - W.y.before - W.y.after, I += W.x.before, m.x += W.x.before, C += W.y.before, m.y += W.y.before;
      }
      break;
    }
    const O = Za(A.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${A.anchor.side} ${A.anchor.align}`,
      transformOrigin: `${A.origin.side} ${A.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: Q(Fn(C)),
      left: e.isRtl.value ? void 0 : Q(Fn(I)),
      right: e.isRtl.value ? Q(Fn(-I)) : void 0,
      minWidth: Q(O === "y" ? Math.min(r.value, y.width) : r.value),
      maxWidth: Q(rl($e(F.x, r.value === 1 / 0 ? 0 : r.value, s.value))),
      maxHeight: Q(rl($e(F.y, o.value === 1 / 0 ? 0 : o.value, u.value)))
    }), {
      available: F,
      contentBox: m,
      flipped: R
    };
  }
  return X(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => h()), ve(() => {
    const m = h();
    if (!m) return;
    const {
      available: b,
      contentBox: S
    } = m;
    S.height > b.y && requestAnimationFrame(() => {
      h(), requestAnimationFrame(() => {
        h();
      });
    });
  }), {
    updateLocation: h
  };
}
function Fn(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function rl(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Xn = !0;
const mn = [];
function $o(e) {
  !Xn || mn.length ? (mn.push(e), Qn()) : (Xn = !1, e(), Qn());
}
let ol = -1;
function Qn() {
  cancelAnimationFrame(ol), ol = requestAnimationFrame(() => {
    const e = mn.shift();
    e && e(), mn.length ? Qn() : Xn = !0;
  });
}
const sn = {
  none: null,
  close: No,
  block: zo,
  reposition: Wo
}, Ho = E({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in sn
  }
}, "VOverlay-scroll-strategies");
function Ro(e, t) {
  if (!oe) return;
  let n;
  Oe(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = Ht(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = sn[e.scrollStrategy]) == null || a.call(sn, t, e, n);
    }));
  }), ke(() => {
    n == null || n.stop();
  });
}
function No(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  mi(ha(e.target.value, e.contentEl.value), t);
}
function zo(e, t) {
  var o;
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent, a = ha(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...vn(a, t.contained ? n : void 0), ...vn(e.contentEl.value, t.contained ? n : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), i = window.innerWidth - document.documentElement.offsetWidth, r = ((s) => ga(s) && s)(n || document.documentElement);
  r && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, u) => {
    s.style.setProperty("--v-body-scroll-x", Q(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", Q(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", Q(i)), s.classList.add("v-overlay-scroll-blocked");
  }), ke(() => {
    l.forEach((s, u) => {
      const c = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), v = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -c, s.scrollTop = -d, s.style.scrollBehavior = v;
    }), r && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Wo(e, t, n) {
  let a = !1, l = -1, i = -1;
  function r(o) {
    $o(() => {
      var c, d;
      const s = performance.now();
      (d = (c = e.updateLocation).value) == null || d.call(c, o), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (o) => o() : requestIdleCallback)(() => {
    n.run(() => {
      mi(ha(e.target.value, e.contentEl.value), (o) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            r(o);
          });
        })) : r(o);
      });
    });
  }), ke(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function ha(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t != null && t.contains(n))) : e ?? t;
}
function mi(e, t) {
  const n = [document, ...vn(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), ke(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const Jn = Symbol.for("vuetify:v-menu"), jo = E({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Go(e, t) {
  let n = () => {
  };
  function a(r, o) {
    n == null || n();
    const s = Math.max((o == null ? void 0 : o.minDelay) ?? 0, Number(r ? e.openDelay : e.closeDelay));
    return new Promise((u) => {
      n = Ur(s, () => {
        t == null || t(r), u(r);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i(r) {
    return a(!1, r);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const Zo = E({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...jo()
}, "VOverlay-activator");
function Uo(e, t) {
  let {
    isActive: n,
    isTop: a,
    contentEl: l
  } = t;
  const i = he("useActivator"), r = U();
  let o = !1, s = !1, u = !0;
  const c = x(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = x(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: v,
    runCloseDelay: f
  } = Go(e, (C) => {
    C === (e.openOnHover && o || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== C && (u = !0), n.value = C);
  }), g = U(), y = {
    onClick: (C) => {
      C.stopPropagation(), r.value = C.currentTarget || C.target, n.value || (g.value = [C.clientX, C.clientY]), n.value = !n.value;
    },
    onMouseenter: (C) => {
      o = !0, r.value = C.currentTarget || C.target, v();
    },
    onMouseleave: (C) => {
      o = !1, f();
    },
    onFocus: (C) => {
      cn(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), r.value = C.currentTarget || C.target, v());
    },
    onBlur: (C) => {
      s = !1, C.stopPropagation(), f({
        minDelay: 1
      });
    }
  }, h = x(() => {
    const C = {};
    return d.value && (C.onClick = y.onClick), e.openOnHover && (C.onMouseenter = y.onMouseenter, C.onMouseleave = y.onMouseleave), c.value && (C.onFocus = y.onFocus, C.onBlur = y.onBlur), C;
  }), m = x(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      o = !0, v();
    }, C.onMouseleave = () => {
      o = !1, f();
    }), c.value && (C.onFocusin = () => {
      s = !0, v();
    }, C.onFocusout = () => {
      s = !1, f({
        minDelay: 1
      });
    }), e.closeOnContentClick) {
      const F = ge(Jn, null);
      C.onClick = () => {
        n.value = !1, F == null || F.closeParents();
      };
    }
    return C;
  }), b = x(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      u && (o = !0, u = !1, v());
    }, C.onMouseleave = () => {
      o = !1, f();
    }), C;
  });
  X(a, (C) => {
    var F;
    C && (e.openOnHover && !o && (!c.value || !s) || c.value && !s && (!e.openOnHover || !o)) && !((F = l.value) != null && F.contains(document.activeElement)) && (n.value = !1);
  }), X(n, (C) => {
    C || setTimeout(() => {
      g.value = void 0;
    });
  }, {
    flush: "post"
  });
  const S = Yn();
  Oe(() => {
    S.value && ve(() => {
      r.value = S.el;
    });
  });
  const w = Yn(), A = x(() => e.target === "cursor" && g.value ? g.value : w.value ? w.el : gi(e.target, i) || r.value), P = x(() => Array.isArray(A.value) ? void 0 : A.value);
  let I;
  return X(() => !!e.activator, (C) => {
    C && oe ? (I = Ht(), I.run(() => {
      Yo(e, i, {
        activatorEl: r,
        activatorEvents: h
      });
    })) : I && I.stop();
  }, {
    flush: "post",
    immediate: !0
  }), ke(() => {
    I == null || I.stop();
  }), {
    activatorEl: r,
    activatorRef: S,
    target: A,
    targetEl: P,
    targetRef: w,
    activatorEvents: h,
    contentEvents: m,
    scrimEvents: b
  };
}
function Yo(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  X(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = o(u);
      c && r(c);
    }
    s && ve(() => i());
  }, {
    immediate: !0
  }), X(() => e.activatorProps, () => {
    i();
  }), ke(() => {
    r();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Jr(s, q(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && eo(s, q(l.value, u));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = gi(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function gi(e, t) {
  var a, l;
  if (!e) return;
  let n;
  if (e === "parent") {
    let i = (l = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function ya(e) {
  return ca(() => {
    const {
      class: t,
      style: n
    } = Ko(e);
    return {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function Xe(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = ya(() => ({
    text: Ie(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function qe(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = ya(() => ({
    background: Ie(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
function Ko(e) {
  const t = Ie(e), n = [], a = {};
  if (t.background)
    if (qn(t.background)) {
      if (a.backgroundColor = t.background, !t.text && go(t.background)) {
        const l = je(t.background);
        if (l.a == null || l.a === 1) {
          const i = ci(l);
          a.color = i, a.caretColor = i;
        }
      }
    } else
      n.push(`bg-${t.background}`);
  return t.text && (qn(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), {
    class: n,
    style: a
  };
}
const et = E({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function tt(e) {
  return {
    dimensionStyles: x(() => {
      const n = {}, a = Q(e.height), l = Q(e.maxHeight), i = Q(e.maxWidth), r = Q(e.minHeight), o = Q(e.minWidth), s = Q(e.width);
      return a != null && (n.height = a), l != null && (n.maxHeight = l), i != null && (n.maxWidth = i), r != null && (n.minHeight = r), o != null && (n.minWidth = o), s != null && (n.width = s), n;
    })
  };
}
const ea = Symbol.for("vuetify:display"), sl = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, qo = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sl;
  return Ve(sl, e);
};
function ul(e) {
  return oe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function cl(e) {
  return oe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function dl(e) {
  const t = oe && !e ? window.navigator.userAgent : "ssr";
  function n(g) {
    return !!t.match(g);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), i = n(/cordova/i), r = n(/electron/i), o = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), v = n(/mac/i), f = n(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: r,
    chrome: o,
    edge: s,
    firefox: u,
    opera: c,
    win: d,
    mac: v,
    linux: f,
    touch: Nr,
    ssr: t === "ssr"
  };
}
function Xo(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: a
  } = qo(e), l = j(cl(t)), i = j(dl(t)), r = Pe({}), o = j(ul(t));
  function s() {
    l.value = cl(), o.value = ul();
  }
  function u() {
    s(), i.value = dl();
  }
  return Oe(() => {
    const c = o.value < n.sm, d = o.value < n.md && !c, v = o.value < n.lg && !(d || c), f = o.value < n.xl && !(v || d || c), g = o.value < n.xxl && !(f || v || d || c), y = o.value >= n.xxl, h = c ? "xs" : d ? "sm" : v ? "md" : f ? "lg" : g ? "xl" : "xxl", m = typeof a == "number" ? a : n[a], b = o.value < m;
    r.xs = c, r.sm = d, r.md = v, r.lg = f, r.xl = g, r.xxl = y, r.smAndUp = !c, r.mdAndUp = !(c || d), r.lgAndUp = !(c || d || v), r.xlAndUp = !(c || d || v || f), r.smAndDown = !(v || f || g || y), r.mdAndDown = !(f || g || y), r.lgAndDown = !(g || y), r.xlAndDown = !y, r.name = h, r.height = l.value, r.width = o.value, r.mobile = b, r.mobileBreakpoint = a, r.platform = i.value, r.thresholds = n;
  }), oe && (window.addEventListener("resize", s, {
    passive: !0
  }), ke(() => {
    window.removeEventListener("resize", s);
  }, !0)), {
    ...Wl(r),
    update: u,
    ssr: !!t
  };
}
const Qo = E({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function ba() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  const n = ge(ea);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = x(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1), l = V(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: l,
    mobile: a
  };
}
function Jo() {
  if (!oe) return j(!1);
  const {
    ssr: e
  } = ba();
  if (e) {
    const t = j(!1);
    return Et(() => {
      t.value = !0;
    }), t;
  } else
    return j(!0);
}
const es = E({
  eager: Boolean
}, "lazy");
function ts(e, t) {
  const n = j(!1), a = V(() => n.value || e.eager || t.value);
  X(t, () => n.value = !0);
  function l() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: l
  };
}
function me(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const i = he("useProxiedModel"), r = U(e[t] !== void 0 ? e[t] : n), o = vt(t), u = o !== t ? x(() => {
    var d, v, f, g;
    return e[t], !!(((d = i.vnode.props) != null && d.hasOwnProperty(t) || (v = i.vnode.props) != null && v.hasOwnProperty(o)) && ((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`) || (g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${o}`)));
  }) : x(() => {
    var d, v;
    return e[t], !!((d = i.vnode.props) != null && d.hasOwnProperty(t) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${t}`)));
  });
  rt(() => !u.value, () => {
    X(() => e[t], (d) => {
      r.value = d;
    });
  });
  const c = x({
    get() {
      const d = e[t];
      return a(u.value ? d : r.value);
    },
    set(d) {
      const v = l(d), f = Ce(u.value ? e[t] : r.value);
      f === v || a(f) === d || (r.value = v, i == null || i.emit(`update:${t}`, v));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => u.value ? e[t] : r.value
  }), c;
}
const ns = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    },
    ariaLabel: {
      previousMonth: "Previous month",
      nextMonth: "Next month",
      selectYear: "Select year",
      selectDate: "{0}",
      // Full date format
      currentDate: "Today, {0}"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  },
  rules: {
    required: "This field is required",
    email: "Please enter a valid email",
    number: "This field can only contain numbers",
    integer: "This field can only contain integer values",
    capital: "This field can only contain uppercase letters",
    maxLength: "You must enter a maximum of {0} characters",
    minLength: "You must enter a minimum of {0} characters",
    strictLength: "The length of the entered field is invalid",
    exclude: "The {0} character is not allowed",
    notEmpty: "Please choose at least one value",
    pattern: "Invalid format"
  },
  hotkey: {
    then: "then",
    ctrl: "Ctrl",
    command: "Command",
    space: "Space",
    shift: "Shift",
    alt: "Alt",
    enter: "Enter",
    escape: "Escape",
    upArrow: "Up Arrow",
    downArrow: "Down Arrow",
    leftArrow: "Left Arrow",
    rightArrow: "Right Arrow",
    backspace: "Backspace",
    option: "Option",
    plus: "plus",
    shortcut: "Keyboard shortcut: {0}"
  },
  video: {
    play: "Play",
    pause: "Pause",
    seek: "Seek",
    volume: "Volume",
    showVolume: "Show volume control",
    mute: "Mute",
    unmute: "Unmute",
    enterFullscreen: "Full screen",
    exitFullscreen: "Exit full screen"
  },
  colorPicker: {
    ariaLabel: {
      eyedropper: "Select color with eyedropper",
      hueSlider: "Hue",
      alphaSlider: "Alpha",
      redInput: "Red value",
      greenInput: "Green value",
      blueInput: "Blue value",
      alphaInput: "Alpha value",
      hueInput: "Hue value",
      saturationInput: "Saturation value",
      lightnessInput: "Lightness value",
      hexInput: "HEX value",
      hexaInput: "HEX with alpha value",
      changeFormat: "Change color format"
    }
  }
}, fl = "$vuetify.", vl = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), hi = (e, t, n) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), r = 1; r < l; r++)
    i[r - 1] = arguments[r];
  if (!a.startsWith(fl))
    return vl(a, i);
  const o = a.replace(fl, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = Zn(s, o, null);
  return c || (Fe(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), c = Zn(u, o, null)), c || (Rt(`Translation key "${a}" not found in fallback`), c = a), typeof c != "string" && (Rt(`Translation key "${a}" has a non-string value`), c = a), vl(c, i);
};
function Sa(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function yi(e, t) {
  return Sa(e, t)(0.1).includes(",") ? "," : ".";
}
function $n(e, t, n) {
  const a = me(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, X(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function bi(e) {
  return (t) => {
    const n = $n(t, "locale", e.current), a = $n(t, "fallback", e.fallback), l = $n(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: a,
      messages: l,
      decimalSeparator: V(() => yi(n, a)),
      t: hi(n, a, l),
      n: Sa(n, a),
      provide: bi({
        current: n,
        fallback: a,
        messages: l
      })
    };
  };
}
function as(e) {
  const t = j((e == null ? void 0 : e.locale) ?? "en"), n = j((e == null ? void 0 : e.fallback) ?? "en"), a = U({
    en: ns,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: a,
    decimalSeparator: V(() => (e == null ? void 0 : e.decimalSeparator) ?? yi(t, n)),
    t: hi(t, n, a),
    n: Sa(t, n),
    provide: bi({
      current: t,
      fallback: n,
      messages: a
    })
  };
}
const gn = Symbol.for("vuetify:locale");
function ls(e) {
  return e.name != null;
}
function is(e) {
  const t = e != null && e.adapter && ls(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : as(e), n = os(t, e);
  return {
    ...t,
    ...n
  };
}
function Vn() {
  const e = ge(gn);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function rs() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function os(e, t) {
  const n = U((t == null ? void 0 : t.rtl) ?? rs()), a = x(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: V(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function nt() {
  const e = ge(gn);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
function ss() {
  const e = he("useRoute");
  return x(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function us() {
  var e, t;
  return (t = (e = he("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function Ln(e, t) {
  var d, v;
  const n = Er("RouterLink"), a = V(() => !!(e.href || e.to)), l = x(() => (a == null ? void 0 : a.value) || za(t, "click") || za(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = V(() => e.href);
    return {
      isLink: a,
      isRouterLink: V(() => !1),
      isClickable: l,
      href: f,
      linkProps: Pe({
        href: f
      })
    };
  }
  const i = n.useLink({
    to: V(() => e.to || ""),
    replace: V(() => e.replace)
  }), r = x(() => e.to ? i : void 0), o = ss(), s = x(() => {
    var f, g, y;
    return r.value ? e.exact ? o.value ? ((y = r.value.isExactActive) == null ? void 0 : y.value) && He(r.value.route.value.query, o.value.query) : ((g = r.value.isExactActive) == null ? void 0 : g.value) ?? !1 : ((f = r.value.isActive) == null ? void 0 : f.value) ?? !1 : !1;
  }), u = x(() => {
    var f;
    return e.to ? (f = r.value) == null ? void 0 : f.route.value.href : e.href;
  }), c = V(() => !!e.to);
  return {
    isLink: a,
    isRouterLink: c,
    isClickable: l,
    isActive: s,
    route: (d = r.value) == null ? void 0 : d.route,
    navigate: (v = r.value) == null ? void 0 : v.navigate,
    href: u,
    linkProps: Pe({
      href: u,
      "aria-current": V(() => s.value ? "page" : void 0),
      "aria-disabled": V(() => e.disabled && a.value ? "true" : void 0),
      tabindex: V(() => e.disabled && a.value ? "-1" : void 0)
    })
  };
}
const An = E({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Hn = !1;
function cs(e, t) {
  let n = !1, a, l;
  oe && (e != null && e.beforeEach) && (ve(() => {
    window.addEventListener("popstate", i), a = e.beforeEach((r, o, s) => {
      Hn ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Hn = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Hn = !1;
    });
  }), ke(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(r) {
    var o;
    (o = r.state) != null && o.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function In() {
  const t = he("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const ml = Symbol.for("vuetify:stack"), Ft = Pe([]);
function ds(e, t, n) {
  const a = he("useStack"), l = !n, i = ge(ml, void 0), r = Pe({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ee(ml, r);
  const o = j(Number(Ie(t)));
  rt(e, () => {
    var d;
    const c = (d = Ft.at(-1)) == null ? void 0 : d[1];
    o.value = c ? c + 10 : Number(Ie(t)), l && Ft.push([a.uid, o.value]), i == null || i.activeChildren.add(a.uid), ke(() => {
      if (l) {
        const v = Ce(Ft).findIndex((f) => f[0] === a.uid);
        Ft.splice(v, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = j(!0);
  l && Oe(() => {
    var d;
    const c = ((d = Ft.at(-1)) == null ? void 0 : d[0]) === a.uid;
    setTimeout(() => s.value = c);
  });
  const u = V(() => !r.activeChildren.size);
  return {
    globalTop: oa(s),
    localTop: u,
    stackStyles: V(() => ({
      zIndex: o.value
    }))
  };
}
function fs(e) {
  return {
    teleportTarget: x(() => {
      const n = e();
      if (n === !0 || !oe) return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        pn(`Unable to locate target ${n}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
const zt = Symbol.for("vuetify:theme"), Se = E({
  theme: String
}, "theme");
function gl() {
  return {
    defaultTheme: "light",
    prefix: "v-",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#EEEEEE",
          "theme-on-kbd": "#000000",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#c8c8c8",
          "on-surface-variant": "#000000",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#424242",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    },
    stylesheetId: "vuetify-theme-stylesheet",
    scoped: !1,
    unimportant: !1,
    utilities: !0
  };
}
function vs() {
  var a, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gl();
  const t = gl();
  if (!e) return {
    ...t,
    isDisabled: !0
  };
  const n = {};
  for (const [i, r] of Object.entries(e.themes ?? {})) {
    const o = r.dark || i === "dark" ? (a = t.themes) == null ? void 0 : a.dark : (l = t.themes) == null ? void 0 : l.light;
    n[i] = Ve(o, r);
  }
  return Ve(t, {
    ...e,
    themes: n
  });
}
function dt(e, t, n, a) {
  e.push(`${ys(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function hl(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [i, r] of Object.entries(e.colors)) {
    const o = je(r);
    l.push(`--${t}theme-${i}: ${o.r},${o.g},${o.b}`), i.startsWith("on-") || l.push(`--${t}theme-${i}-overlay-multiplier: ${po(r) > 0.18 ? n : a}`);
  }
  for (const [i, r] of Object.entries(e.variables)) {
    const o = typeof r == "string" && r.startsWith("#") ? je(r) : void 0, s = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
    l.push(`--${t}${i}: ${s ?? r}`);
  }
  return l;
}
function ms(e, t, n) {
  const a = {};
  if (n)
    for (const l of ["lighten", "darken"]) {
      const i = l === "lighten" ? Co : wo;
      for (const r of Yl(n[l], 1))
        a[`${e}-${l}-${r}`] = yo(i(je(t), r));
    }
  return a;
}
function gs(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = {
      ...n,
      ...ms(a, l, t)
    });
  }
  return n;
}
function hs(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = je(e[n]);
    t[a] = ci(l);
  }
  return t;
}
function ys(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function bs(e, t, n) {
  const a = Ss(e, t);
  a && (a.innerHTML = n);
}
function Ss(e, t) {
  if (!oe) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function Cs(e) {
  const t = vs(e), n = j(t.defaultTheme), a = U(t.themes), l = j("light"), i = x({
    get() {
      return n.value === "system" ? l.value : n.value;
    },
    set(m) {
      n.value = m;
    }
  }), r = x(() => {
    const m = {};
    for (const [b, S] of Object.entries(a.value)) {
      const w = {
        ...S.colors,
        ...gs(S.colors, t.variations)
      };
      m[b] = {
        ...S,
        colors: {
          ...w,
          ...hs(w)
        }
      };
    }
    return m;
  }), o = V(() => r.value[i.value]), s = V(() => n.value === "system"), u = x(() => {
    var w;
    const m = [], b = t.unimportant ? "" : " !important", S = t.scoped ? t.prefix : "";
    (w = o.value) != null && w.dark && dt(m, ":root", ["color-scheme: dark"], t.scope), dt(m, ":root", hl(o.value, t.prefix), t.scope);
    for (const [A, P] of Object.entries(r.value))
      dt(m, `.${t.prefix}theme--${A}`, [`color-scheme: ${P.dark ? "dark" : "normal"}`, ...hl(P, t.prefix)], t.scope);
    if (t.utilities) {
      const A = [], P = [], I = new Set(Object.values(r.value).flatMap((C) => Object.keys(C.colors)));
      for (const C of I)
        C.startsWith("on-") ? dt(P, `.${C}`, [`color: rgb(var(--${t.prefix}theme-${C}))${b}`], t.scope) : (dt(A, `.${S}bg-${C}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${C}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${C}))${b}`, `color: rgb(var(--${t.prefix}theme-on-${C}))${b}`], t.scope), dt(P, `.${S}text-${C}`, [`color: rgb(var(--${t.prefix}theme-${C}))${b}`], t.scope), dt(P, `.${S}border-${C}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${C})`], t.scope));
      m.push(...A, ...P);
    }
    return m.map((A, P) => P === 0 ? A : `    ${A}`).join("");
  }), c = V(() => t.isDisabled ? void 0 : `${t.prefix}theme--${i.value}`), d = V(() => Object.keys(r.value));
  if (Gl) {
    let b = function() {
      l.value = m.matches ? "dark" : "light";
    };
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    b(), m.addEventListener("change", b, {
      passive: !0
    }), Tr() && ke(() => {
      m.removeEventListener("change", b);
    });
  }
  function v(m) {
    if (t.isDisabled) return;
    const b = m._context.provides.usehead;
    if (b) {
      let S = function() {
        return {
          style: [{
            textContent: u.value,
            id: t.stylesheetId,
            nonce: t.cspNonce || !1
          }]
        };
      };
      if (b.push) {
        const w = b.push(S);
        oe && X(u, () => {
          w.patch(S);
        });
      } else
        oe ? (b.addHeadObjs(V(S)), Oe(() => b.updateDOM())) : b.addHeadObjs(S());
    } else {
      let S = function() {
        bs(t.stylesheetId, t.cspNonce, u.value);
      };
      oe ? X(u, S, {
        immediate: !0
      }) : S();
    }
  }
  function f(m) {
    if (m !== "system" && !d.value.includes(m)) {
      Fe(`Theme "${m}" not found on the Vuetify theme instance`);
      return;
    }
    i.value = m;
  }
  function g() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const b = m.indexOf(i.value), S = b === -1 ? 0 : (b + 1) % m.length;
    f(m[S]);
  }
  function y() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    g(m);
  }
  const h = new Proxy(i, {
    get(m, b) {
      return Reflect.get(m, b);
    },
    set(m, b, S) {
      return b === "value" && jl(`theme.global.name.value = ${S}`, `theme.change('${S}')`), Reflect.set(m, b, S);
    }
  });
  return {
    install: v,
    change: f,
    cycle: g,
    toggle: y,
    isDisabled: t.isDisabled,
    isSystem: s,
    name: i,
    themes: a,
    current: o,
    computedThemes: r,
    prefix: t.prefix,
    themeClasses: c,
    styles: u,
    global: {
      name: h,
      current: o
    }
  };
}
function Le(e) {
  he("provideTheme");
  const t = ge(zt, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = V(() => e.theme ?? t.name.value), a = V(() => t.themes.value[n.value]), l = V(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`), i = {
    ...t,
    name: n,
    current: a,
    themeClasses: l
  };
  return Ee(zt, i), i;
}
function ws() {
  he("useTheme");
  const e = ge(zt, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const qt = E({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), it = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...r
  } = e, {
    component: o = i ? sa : gt,
    ...s
  } = Un(a) ? a : {};
  let u;
  return Un(a) ? u = q(s, qr({
    disabled: l,
    group: i
  }), r) : u = q({
    name: l || !a ? "" : a
  }, r), Kt(o, u, n);
};
function ps() {
  return !0;
}
function Si(e, t, n) {
  if (!e || Ci(e, n) === !1) return !1;
  const a = di(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Ci(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || ps)(e);
}
function ks(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Si(e, t, n) && setTimeout(() => {
    Ci(e, n) && a && a(e);
  }, 0);
}
function yl(e, t) {
  const n = di(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const bl = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (l) => ks(l, e, t), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = Si(l, e, t);
    };
    yl(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (yl(e, (n) => {
      var i;
      if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function xs(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return k(gt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && L("div", q({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const Pn = E({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Zo(),
  ...ne(),
  ...et(),
  ...es(),
  ...Oo(),
  ...Ho(),
  ...Se(),
  ...qt()
}, "VOverlay"), Mt = Y()({
  name: "VOverlay",
  directives: {
    vClickOutside: bl
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Pn()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: l
    } = t;
    const i = he("VOverlay"), r = U(), o = U(), s = U(), u = me(e, "modelValue"), c = x({
      get: () => u.value,
      set: (_) => {
        _ && e.disabled || (u.value = _);
      }
    }), {
      themeClasses: d
    } = Le(e), {
      rtlClasses: v,
      isRtl: f
    } = nt(), {
      hasContent: g,
      onAfterLeave: y
    } = ts(e, c), h = qe(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: m,
      localTop: b,
      stackStyles: S
    } = ds(c, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: w,
      activatorRef: A,
      target: P,
      targetEl: I,
      targetRef: C,
      activatorEvents: F,
      contentEvents: R,
      scrimEvents: N
    } = Uo(e, {
      isActive: c,
      isTop: b,
      contentEl: s
    }), {
      teleportTarget: O
    } = fs(() => {
      var se, de, Ae;
      const _ = e.attach || e.contained;
      if (_) return _;
      const z = ((se = w == null ? void 0 : w.value) == null ? void 0 : se.getRootNode()) || ((Ae = (de = i.proxy) == null ? void 0 : de.$el) == null ? void 0 : Ae.getRootNode());
      return z instanceof ShadowRoot ? z : !1;
    }), {
      dimensionStyles: $
    } = tt(e), T = Jo(), {
      scopeId: H
    } = In();
    X(() => e.disabled, (_) => {
      _ && (c.value = !1);
    });
    const {
      contentStyles: W,
      updateLocation: Z
    } = Do(e, {
      isRtl: f,
      contentEl: s,
      target: P,
      isActive: c
    });
    Ro(e, {
      root: r,
      contentEl: s,
      targetEl: I,
      target: P,
      isActive: c,
      updateLocation: Z
    });
    function J(_) {
      l("click:outside", _), e.persistent ? D() : c.value = !1;
    }
    function le(_) {
      return c.value && m.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || _.target === o.value || _ instanceof MouseEvent && _.shadowTarget === o.value);
    }
    oe && X(c, (_) => {
      _ ? window.addEventListener("keydown", B) : window.removeEventListener("keydown", B);
    }, {
      immediate: !0
    }), Ge(() => {
      oe && window.removeEventListener("keydown", B);
    });
    function B(_) {
      var z, se, de;
      _.key === "Escape" && m.value && ((z = s.value) != null && z.contains(document.activeElement) || l("keydown", _), e.persistent ? D() : (c.value = !1, (se = s.value) != null && se.contains(document.activeElement) && ((de = w.value) == null || de.focus())));
    }
    function G(_) {
      _.key === "Escape" && !m.value || l("keydown", _);
    }
    const M = us();
    rt(() => e.closeOnBack, () => {
      cs(M, (_) => {
        m.value && c.value ? (_(!1), e.persistent ? D() : c.value = !1) : _();
      });
    });
    const p = U();
    X(() => c.value && (e.absolute || e.contained) && O.value == null, (_) => {
      if (_) {
        const z = fi(r.value);
        z && z !== document.scrollingElement && (p.value = z.scrollTop);
      }
    });
    function D() {
      e.noClickAnimation || s.value && lt(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: fn
      });
    }
    function te() {
      l("afterEnter");
    }
    function ue() {
      y(), l("afterLeave");
    }
    return ee(() => {
      var _;
      return L(fe, null, [(_ = n.activator) == null ? void 0 : _.call(n, {
        isActive: c.value,
        targetRef: C,
        props: q({
          ref: A
        }, F.value, e.activatorProps)
      }), T.value && g.value && k(Or, {
        disabled: !O.value,
        to: O.value
      }, {
        default: () => [L("div", q({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": c.value,
            "v-overlay--contained": e.contained
          }, d.value, v.value, e.class],
          style: [S.value, {
            "--v-overlay-opacity": e.opacity,
            top: Q(p.value)
          }, e.style],
          ref: r,
          onKeydown: G
        }, H, a), [k(xs, q({
          color: h,
          modelValue: c.value && !!e.scrim,
          ref: o
        }, N.value), null), k(it, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: P.value,
          onAfterEnter: te,
          onAfterLeave: ue
        }, {
          default: () => {
            var z;
            return [De(L("div", q({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [$.value, W.value]
            }, R.value, e.contentProps), [(z = n.default) == null ? void 0 : z.call(n, {
              isActive: c
            })]), [[Tt, c.value], [bl, {
              handler: J,
              closeConditional: le,
              include: () => [w.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: w,
      scrimEl: o,
      target: P,
      animateClick: D,
      contentEl: s,
      rootEl: r,
      globalTop: m,
      localTop: b,
      updateLocation: Z
    };
  }
}), Rn = Symbol("Forwarded refs");
function Nn(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function _t(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[Rn] = n, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const r of n)
          if (r.value && Reflect.has(r.value, i)) {
            const o = Reflect.get(r.value, i);
            return typeof o == "function" ? o.bind(r.value) : o;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, i))
          return !0;
      return !1;
    },
    set(l, i, r) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, r);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of n)
        if (o.value && Reflect.has(o.value, i))
          return Reflect.set(o.value, i, r);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var o;
      const r = Reflect.getOwnPropertyDescriptor(l, i);
      if (r) return r;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of n) {
          if (!s.value) continue;
          const u = Nn(s.value, i) ?? ("_" in s.value ? Nn((o = s.value._) == null ? void 0 : o.setupState, i) : void 0);
          if (u) return u;
        }
        for (const s of n) {
          const u = s.value && s.value[Rn];
          if (!u) continue;
          const c = u.slice();
          for (; c.length; ) {
            const d = c.shift(), v = Nn(d.value, i);
            if (v) return v;
            const f = d.value && d.value[Rn];
            f && c.push(...f);
          }
        }
      }
    }
  });
}
const Vs = E({
  id: String,
  interactive: Boolean,
  text: String,
  ...Je(Pn({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: null
  }), ["absolute", "persistent"])
}, "VTooltip"), Od = Y()({
  name: "VTooltip",
  props: Vs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "modelValue"), {
      scopeId: l
    } = In(), i = Ze(), r = V(() => e.id || `v-tooltip-${i}`), o = U(), s = x(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = x(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = V(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = x(() => q({
      "aria-describedby": r.value
    }, e.activatorProps));
    return ee(() => {
      const v = Mt.filterProps(e);
      return k(Mt, q({
        ref: o,
        class: ["v-tooltip", {
          "v-tooltip--interactive": e.interactive
        }, e.class],
        style: e.style,
        id: r.value
      }, v, {
        modelValue: a.value,
        "onUpdate:modelValue": (f) => a.value = f,
        transition: c.value,
        absolute: !0,
        location: s.value,
        origin: u.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: d.value,
        _disableGlobalStack: !0
      }, l), {
        activator: n.activator,
        default: function() {
          var h;
          for (var f = arguments.length, g = new Array(f), y = 0; y < f; y++)
            g[y] = arguments[y];
          return ((h = n.default) == null ? void 0 : h.call(n, ...g)) ?? e.text;
        }
      });
    }), _t({}, o);
  }
}), Ls = E({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function _e(e, t, n) {
  return Y()({
    name: e,
    props: Ls({
      mode: n,
      origin: t
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const r = {
        onBeforeEnter(o) {
          a.origin && (o.style.transformOrigin = a.origin);
        },
        onLeave(o) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: u,
              offsetWidth: c,
              offsetHeight: d
            } = o;
            o._transitionInitialStyles = {
              position: o.style.position,
              top: o.style.top,
              left: o.style.left,
              width: o.style.width,
              height: o.style.height
            }, o.style.position = "absolute", o.style.top = `${s}px`, o.style.left = `${u}px`, o.style.width = `${c}px`, o.style.height = `${d}px`;
          }
          a.hideOnLeave && o.style.setProperty("display", "none", "important");
        },
        onAfterLeave(o) {
          if (a.leaveAbsolute && (o != null && o._transitionInitialStyles)) {
            const {
              position: s,
              top: u,
              left: c,
              width: d,
              height: v
            } = o._transitionInitialStyles;
            delete o._transitionInitialStyles, o.style.position = s || "", o.style.top = u || "", o.style.left = c || "", o.style.width = d || "", o.style.height = v || "";
          }
        }
      };
      return () => {
        const o = a.group ? sa : gt;
        return Kt(o, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : r
        }, i.default);
      };
    }
  });
}
function wi(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Y()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: {
        type: Boolean,
        default: At()
      },
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const r = a.group ? sa : gt;
      return () => Kt(r, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, i.default);
    }
  });
}
function pi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = ra(`offset-${n}`);
  return {
    onBeforeEnter(r) {
      r._parent = r.parentNode, r._initialStyle = {
        transition: r.style.transition,
        overflow: r.style.overflow,
        [n]: r.style[n]
      };
    },
    onEnter(r) {
      const o = r._initialStyle;
      if (!o) return;
      r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
      const s = `${r[a]}px`;
      r.style[n] = "0", r.offsetHeight, r.style.transition = o.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
        r.style[n] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(r) {
      r._initialStyle = {
        transition: "",
        overflow: r.style.overflow,
        [n]: r.style[n]
      }, r.style.overflow = "hidden", r.style[n] = `${r[a]}px`, r.offsetHeight, requestAnimationFrame(() => r.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(r) {
    e && r._parent && r._parent.classList.remove(e), i(r);
  }
  function i(r) {
    if (!r._initialStyle) return;
    const o = r._initialStyle[n];
    r.style.overflow = r._initialStyle.overflow, o != null && (r.style[n] = o), delete r._initialStyle;
  }
}
const As = E({
  target: [Object, Array]
}, "v-dialog-transition"), zn = /* @__PURE__ */ new WeakMap(), Ca = Y()({
  name: "VDialogTransition",
  props: As(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var v;
        await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
        const r = Cl(e.target, l), {
          x: o,
          y: s,
          sx: u,
          sy: c,
          speed: d
        } = r;
        if (zn.set(l, r), At())
          lt(l, [{
            opacity: 0
          }, {}], {
            duration: 125 * d,
            easing: ll
          }).finished.then(() => i());
        else {
          const f = lt(l, [{
            transform: `translate(${o}px, ${s}px) scale(${u}, ${c})`,
            opacity: 0
          }, {}], {
            duration: 225 * d,
            easing: ll
          });
          (v = Sl(l)) == null || v.forEach((g) => {
            lt(g, [{
              opacity: 0
            }, {
              opacity: 0,
              offset: 0.33
            }, {}], {
              duration: 450 * d,
              easing: fn
            });
          }), f.finished.then(() => i());
        }
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var v;
        await new Promise((f) => requestAnimationFrame(f));
        let r;
        !zn.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? r = Cl(e.target, l) : r = zn.get(l);
        const {
          x: o,
          y: s,
          sx: u,
          sy: c,
          speed: d
        } = r;
        At() ? lt(l, [{}, {
          opacity: 0
        }], {
          duration: 85 * d,
          easing: il
        }).finished.then(() => i()) : (lt(l, [{}, {
          transform: `translate(${o}px, ${s}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: il
        }).finished.then(() => i()), (v = Sl(l)) == null || v.forEach((g) => {
          lt(g, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 250 * d,
            easing: fn
          });
        }));
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? k(gt, q({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : k(gt, {
      name: "dialog-transition"
    }, n);
  }
});
function Sl(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Cl(e, t) {
  const n = ii(e), a = da(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((m) => parseFloat(m)), [r, o] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  r === "left" || o === "left" ? s -= n.width / 2 : (r === "right" || o === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  r === "top" || o === "top" ? u -= n.height / 2 : (r === "bottom" || o === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, v = Math.max(1, c, d), f = c / v || 0, g = d / v || 0, y = a.width * a.height / (window.innerWidth * window.innerHeight), h = y > 0.12 ? Math.min(1.5, (y - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: u - (i + a.top),
    sx: f,
    sy: g,
    speed: h
  };
}
_e("fab-transition", "center center", "out-in");
_e("dialog-bottom-transition");
_e("dialog-top-transition");
const wl = _e("fade-transition");
_e("scale-transition");
_e("scroll-x-transition");
_e("scroll-x-reverse-transition");
_e("scroll-y-transition");
_e("scroll-y-reverse-transition");
_e("slide-x-transition");
_e("slide-x-reverse-transition");
const ki = _e("slide-y-transition");
_e("slide-y-reverse-transition");
const Is = wi("expand-transition", pi()), xi = wi("expand-x-transition", pi("", !0)), Ps = E({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), we = Y(!1)({
  name: "VDefaultsProvider",
  props: Ps(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: r,
      scoped: o
    } = Wl(e);
    return Ot(a, {
      reset: i,
      root: r,
      scoped: o,
      disabled: l
    }), () => {
      var s;
      return (s = n.default) == null ? void 0 : s.call(n);
    };
  }
}), Ms = E({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  disableInitialFocus: Boolean,
  ...Je(Pn({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Ca
    }
  }), ["absolute"])
}, "VMenu"), Es = Y()({
  name: "VMenu",
  props: Ms(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "modelValue"), {
      scopeId: l
    } = In(), {
      isRtl: i
    } = nt(), r = Ze(), o = V(() => e.id || `v-menu-${r}`), s = U(), u = ge(Jn, null), c = j(/* @__PURE__ */ new Set());
    Ee(Jn, {
      register() {
        c.value.add(r);
      },
      unregister() {
        c.value.delete(r);
      },
      closeParents(S) {
        setTimeout(() => {
          var w;
          !c.value.size && !e.persistent && (S == null || (w = s.value) != null && w.contentEl && !Yr(S, s.value.contentEl)) && (a.value = !1, u == null || u.closeParents());
        }, 40);
      }
    }), Ge(() => {
      u == null || u.unregister(), document.removeEventListener("focusin", g);
    }), Dr(() => a.value = !1);
    let d = !1, v = -1;
    async function f() {
      d = !0, v = window.setTimeout(() => {
        d = !1;
      }, 100);
    }
    async function g(S) {
      var P, I, C, F, R;
      const w = S.relatedTarget, A = S.target;
      await ve(), a.value && w !== A && ((P = s.value) != null && P.rootEl) && ((I = s.value) != null && I.contentEl) && // We're the menu without open submenus or overlays
      ((C = s.value) != null && C.localTop) && // It isn't the document or the menu body
      ![document, s.value.rootEl].includes(A) && // It isn't inside the menu body
      !s.value.rootEl.contains(A) && (d ? !e.openOnHover && !((F = s.value.activatorEl) != null && F.contains(A)) && (a.value = !1) : ((R = It(s.value.contentEl)[0]) == null || R.focus(), document.removeEventListener("pointerdown", f)));
    }
    X(a, (S) => {
      S ? (u == null || u.register(), oe && !e.disableInitialFocus && (document.addEventListener("pointerdown", f), document.addEventListener("focusin", g, {
        once: !0
      }))) : (u == null || u.unregister(), oe && (clearTimeout(v), document.removeEventListener("pointerdown", f), document.removeEventListener("focusin", g)));
    }, {
      immediate: !0
    });
    function y(S) {
      u == null || u.closeParents(S);
    }
    function h(S) {
      var w, A, P, I, C;
      if (!e.disabled)
        if (S.key === "Tab" || S.key === "Enter" && !e.closeOnContentClick) {
          if (S.key === "Enter" && (S.target instanceof HTMLTextAreaElement || S.target instanceof HTMLInputElement && S.target.closest("form"))) return;
          S.key === "Enter" && S.preventDefault(), ni(It((w = s.value) == null ? void 0 : w.contentEl, !1), S.shiftKey ? "prev" : "next", (R) => R.tabIndex >= 0) || (a.value = !1, (P = (A = s.value) == null ? void 0 : A.activatorEl) == null || P.focus());
        } else e.submenu && S.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (C = (I = s.value) == null ? void 0 : I.activatorEl) == null || C.focus());
    }
    function m(S) {
      var A;
      if (e.disabled) return;
      const w = (A = s.value) == null ? void 0 : A.contentEl;
      w && a.value ? S.key === "ArrowDown" ? (S.preventDefault(), S.stopImmediatePropagation(), $t(w, "next")) : S.key === "ArrowUp" ? (S.preventDefault(), S.stopImmediatePropagation(), $t(w, "prev")) : e.submenu && (S.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : S.key === (i.value ? "ArrowLeft" : "ArrowRight") && (S.preventDefault(), $t(w, "first"))) : (e.submenu ? S.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(S.key)) && (a.value = !0, S.preventDefault(), setTimeout(() => setTimeout(() => m(S))));
    }
    const b = x(() => q({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": o.value,
      "aria-owns": o.value,
      onKeydown: m
    }, e.activatorProps));
    return ee(() => {
      const S = Mt.filterProps(e);
      return k(Mt, q({
        ref: s,
        id: o.value,
        class: ["v-menu", e.class],
        style: e.style
      }, S, {
        modelValue: a.value,
        "onUpdate:modelValue": (w) => a.value = w,
        absolute: !0,
        activatorProps: b.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": y,
        onKeydown: h
      }, l), {
        activator: n.activator,
        default: function() {
          for (var w = arguments.length, A = new Array(w), P = 0; P < w; P++)
            A[P] = arguments[P];
          return k(we, {
            root: "VMenu"
          }, {
            default: () => {
              var I;
              return [(I = n.default) == null ? void 0 : I.call(n, ...A)];
            }
          });
        }
      });
    }), _t({
      id: o,
      ΨopenChildren: c
    }, s);
  }
}), ot = E({
  border: [Boolean, Number, String]
}, "border");
function st(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return {
    borderClasses: x(() => {
      const a = e.border;
      return a === !0 || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
    })
  };
}
const Ts = [null, "default", "comfortable", "compact"], Ye = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => Ts.includes(e)
  }
}, "density");
function at(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return {
    densityClasses: V(() => `${t}--density-${e.density}`)
  };
}
const St = E({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function Ct(e) {
  return {
    elevationClasses: V(() => {
      const n = Gn(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    })
  };
}
const ze = E({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function We(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return {
    roundedClasses: x(() => {
      const a = Gn(e) ? e.value : e.rounded, l = Gn(e) ? !1 : e.tile, i = [];
      if (l || a === !1)
        i.push("rounded-0");
      else if (a === !0 || a === "")
        i.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const r of String(a).split(" "))
          i.push(`rounded-${r}`);
      return i;
    })
  };
}
const ye = E({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag"), Os = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Xt(e, t) {
  return L(fe, null, [e && L("span", {
    key: "overlay",
    class: K(`${t}__overlay`)
  }, null), L("span", {
    key: "underlay",
    class: K(`${t}__underlay`)
  }, null)]);
}
const ut = E({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Os.includes(e)
  }
}, "variant");
function Qt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  const n = V(() => {
    const {
      variant: i
    } = Ie(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = ya(() => {
    const {
      variant: i,
      color: r
    } = Ie(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: r
    };
  });
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: n
  };
}
const Vi = E({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...ot(),
  ...ne(),
  ...Ye(),
  ...St(),
  ...ze(),
  ...ye(),
  ...Se(),
  ...ut()
}, "VBtnGroup"), pl = Y()({
  name: "VBtnGroup",
  props: Vi(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Le(e), {
      densityClasses: l
    } = at(e), {
      borderClasses: i
    } = st(e), {
      elevationClasses: r
    } = Ct(e), {
      roundedClasses: o
    } = We(e);
    Ot({
      VBtn: {
        height: V(() => e.direction === "horizontal" ? "auto" : null),
        baseColor: V(() => e.baseColor),
        color: V(() => e.color),
        density: V(() => e.density),
        flat: !0,
        variant: V(() => e.variant)
      }
    }), ee(() => k(e.tag, {
      class: K(["v-btn-group", `v-btn-group--${e.direction}`, {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, r.value, o.value, e.class]),
      style: ae(e.style)
    }, n));
  }
}), wa = E({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Li = E({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function ta(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = he("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ze();
  Ee(Symbol.for(`${t.description}:id`), l);
  const i = ge(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const r = V(() => e.value), o = x(() => !!(i.disabled.value || e.disabled));
  function s() {
    i == null || i.register({
      id: l,
      value: r,
      disabled: o
    }, a);
  }
  function u() {
    i == null || i.unregister(l);
  }
  s(), Ge(() => u());
  const c = x(() => i.isSelected(l)), d = x(() => i.items.value[0].id === l), v = x(() => i.items.value[i.items.value.length - 1].id === l), f = x(() => c.value && [i.selectedClass.value, e.selectedClass]);
  return X(c, (g) => {
    a.emit("group:selected", {
      value: g
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: c,
    isFirst: d,
    isLast: v,
    toggle: () => i.select(l, !c.value),
    select: (g) => i.select(l, g),
    selectedClass: f,
    value: r,
    disabled: o,
    group: i,
    register: s,
    unregister: u
  };
}
function pa(e, t) {
  let n = !1;
  const a = Pe([]), l = me(e, "modelValue", [], (v) => v === void 0 ? [] : Ai(a, v === null ? [null] : Ne(v)), (v) => {
    const f = _s(a, v);
    return e.multiple ? f : f[0];
  }), i = he("useGroup");
  function r(v, f) {
    const g = v, y = Symbol.for(`${t.description}:id`), m = xt(y, i == null ? void 0 : i.vnode).indexOf(f);
    ft(g.value) === void 0 && (g.value = m, g.useIndexAsValue = !0), m > -1 ? a.splice(m, 0, g) : a.push(g);
  }
  function o(v) {
    if (n) return;
    s();
    const f = a.findIndex((g) => g.id === v);
    a.splice(f, 1);
  }
  function s() {
    const v = a.find((f) => !f.disabled);
    v && e.mandatory === "force" && !l.value.length && (l.value = [v.id]);
  }
  Et(() => {
    s();
  }), Ge(() => {
    n = !0;
  }), _r(() => {
    for (let v = 0; v < a.length; v++)
      a[v].useIndexAsValue && (a[v].value = v);
  });
  function u(v, f) {
    const g = a.find((y) => y.id === v);
    if (!(f && (g != null && g.disabled)))
      if (e.multiple) {
        const y = l.value.slice(), h = y.findIndex((b) => b === v), m = ~h;
        if (f = f ?? !m, m && e.mandatory && y.length <= 1 || !m && e.max != null && y.length + 1 > e.max) return;
        h < 0 && f ? y.push(v) : h >= 0 && !f && y.splice(h, 1), l.value = y;
      } else {
        const y = l.value.includes(v);
        if (e.mandatory && y || !y && !f) return;
        l.value = f ?? !y ? [v] : [];
      }
  }
  function c(v) {
    if (e.multiple && Fe('This method is not supported when using "multiple" prop'), l.value.length) {
      const f = l.value[0], g = a.findIndex((m) => m.id === f);
      let y = (g + v) % a.length, h = a[y];
      for (; h.disabled && y !== g; )
        y = (y + v) % a.length, h = a[y];
      if (h.disabled) return;
      l.value = [a[y].id];
    } else {
      const f = a.find((g) => !g.disabled);
      f && (l.value = [f.id]);
    }
  }
  const d = {
    register: r,
    unregister: o,
    selected: l,
    select: u,
    disabled: V(() => e.disabled),
    prev: () => c(a.length - 1),
    next: () => c(1),
    isSelected: (v) => l.value.includes(v),
    selectedClass: V(() => e.selectedClass),
    items: V(() => a),
    getItemIndex: (v) => Ds(a, v)
  };
  return Ee(t, d), d;
}
function Ds(e, t) {
  const n = Ai(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function Ai(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((r) => He(a, r.value)), i = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : i != null && i.useIndexAsValue && n.push(i.id);
  }), n;
}
function _s(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value !== void 0 ? i.value : l);
    }
  }), n;
}
const Ii = Symbol.for("vuetify:v-btn-toggle"), Bs = E({
  ...Vi(),
  ...wa()
}, "VBtnToggle");
Y()({
  name: "VBtnToggle",
  props: Bs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: r,
      selected: o
    } = pa(e, Ii);
    return ee(() => {
      const s = pl.filterProps(e);
      return k(pl, q({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var u;
          return [(u = n.default) == null ? void 0 : u.call(n, {
            isSelected: a,
            next: l,
            prev: i,
            select: r,
            selected: o
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: r
    };
  }
});
const Fs = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  tableGroupCollapse: "mdi-chevron-down",
  tableGroupExpand: "mdi-chevron-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload",
  color: "mdi-palette",
  command: "mdi-apple-keyboard-command",
  ctrl: "mdi-apple-keyboard-control",
  space: "mdi-keyboard-space",
  shift: "mdi-apple-keyboard-shift",
  alt: "mdi-apple-keyboard-option",
  enter: "mdi-keyboard-return",
  arrowup: "mdi-arrow-up",
  arrowdown: "mdi-arrow-down",
  arrowleft: "mdi-arrow-left",
  arrowright: "mdi-arrow-right",
  backspace: "mdi-backspace",
  play: "mdi-play",
  pause: "mdi-pause",
  fullscreen: "mdi-fullscreen",
  fullscreenExit: "mdi-fullscreen-exit",
  volumeHigh: "mdi-volume-high",
  volumeMedium: "mdi-volume-medium",
  volumeLow: "mdi-volume-low",
  volumeOff: "mdi-volume-variant-off"
}, $s = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Kt(Pi, {
    ...e,
    class: "mdi"
  })
}, ie = [String, Function, Object, Array], na = Symbol.for("vuetify:icons"), Mn = E({
  icon: {
    type: ie
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), kl = Y()({
  name: "VComponentIcon",
  props: Mn(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const a = e.icon;
      return k(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? k(a, null, null) : (l = n.default) == null ? void 0 : l.call(n)];
        }
      });
    };
  }
}), ka = Dt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Mn(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => k(e.tag, q(n, {
      style: null
    }), {
      default: () => [L("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? L("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : L("path", {
        d: a
      }, null)) : L("path", {
        d: e.icon
      }, null)])]
    });
  }
});
Dt({
  name: "VLigatureIcon",
  props: Mn(),
  setup(e) {
    return () => k(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Pi = Dt({
  name: "VClassIcon",
  props: Mn(),
  setup(e) {
    return () => k(e.tag, {
      class: K(e.icon)
    }, null);
  }
});
function Hs() {
  return {
    svg: {
      component: ka
    },
    class: {
      component: Pi
    }
  };
}
function Rs(e) {
  const t = Hs(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = $s), Ve({
    defaultSet: n,
    sets: t,
    aliases: {
      ...Fs,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Ns = (e) => {
  const t = ge(na);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: x(() => {
      var s;
      const a = Ie(e);
      if (!a) return {
        component: kl
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = t.aliases) == null ? void 0 : s[l.slice(1)])), l || Fe(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: ka,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: kl,
          icon: l
        };
      const i = Object.keys(t.sets).find((u) => typeof l == "string" && l.startsWith(`${u}:`)), r = i ? l.slice(i.length + 1) : l;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: r
      };
    })
  };
}, zs = ["x-small", "small", "default", "large", "x-large"], Jt = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function en(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return ca(() => {
    const n = e.size;
    let a, l;
    return un(zs, n) ? a = `${t}--size-${n}` : n && (l = {
      width: Q(n),
      height: Q(n)
    }), {
      sizeClasses: a,
      sizeStyles: l
    };
  });
}
const Ws = E({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ie,
  opacity: [String, Number],
  ...ne(),
  ...Jt(),
  ...ye({
    tag: "i"
  }),
  ...Se()
}, "VIcon"), pe = Y()({
  name: "VIcon",
  props: Ws(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = j(), {
      themeClasses: i
    } = ws(), {
      iconData: r
    } = Ns(() => l.value || e.icon), {
      sizeClasses: o
    } = en(e), {
      textColorClasses: s,
      textColorStyles: u
    } = Xe(() => e.color);
    return ee(() => {
      var v, f;
      const c = (v = a.default) == null ? void 0 : v.call(a);
      c && (l.value = (f = Jl(c).filter((g) => g.type === Br && g.children && typeof g.children == "string")[0]) == null ? void 0 : f.children);
      const d = !!(n.onClick || n.onClickOnce);
      return k(r.value.component, {
        tag: e.tag,
        icon: r.value.icon,
        class: K(["v-icon", "notranslate", i.value, o.value, s.value, {
          "v-icon--clickable": d,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: ae([{
          "--v-icon-opacity": e.opacity
        }, o.value ? void 0 : {
          fontSize: Q(e.size),
          height: Q(e.size),
          width: Q(e.size)
        }, u.value, e.style]),
        role: d ? "button" : void 0,
        "aria-hidden": !d,
        tabindex: d ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [c]
      });
    }), {};
  }
});
function Mi(e, t) {
  const n = U(), a = j(!1);
  if (ua) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((r) => r.isIntersecting);
    }, t);
    ke(() => {
      l.disconnect();
    }), X(n, (i, r) => {
      r && (l.unobserve(r), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
function yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Yn(), a = U();
  if (oe) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Ge(() => {
      l.disconnect();
    }), X(() => n.el, (i, r) => {
      r && (l.unobserve(r), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: oa(a)
  };
}
const js = E({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...ne(),
  ...Jt(),
  ...ye({
    tag: "div"
  }),
  ...Se()
}, "VProgressCircular"), Gs = Y()({
  name: "VProgressCircular",
  props: js(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, i = U(), {
      themeClasses: r
    } = Le(e), {
      sizeClasses: o,
      sizeStyles: s
    } = en(e), {
      textColorClasses: u,
      textColorStyles: c
    } = Xe(() => e.color), {
      textColorClasses: d,
      textColorStyles: v
    } = Xe(() => e.bgColor), {
      intersectionRef: f,
      isIntersecting: g
    } = Mi(), {
      resizeRef: y,
      contentRect: h
    } = yt(), m = V(() => $e(parseFloat(e.modelValue), 0, 100)), b = V(() => Number(e.width)), S = V(() => s.value ? Number(e.size) : h.value ? h.value.width : Math.max(b.value, 32)), w = V(() => a / (1 - b.value / S.value) * 2), A = V(() => b.value / S.value * w.value), P = V(() => Q((100 - m.value) / 100 * l));
    return Oe(() => {
      f.value = i.value, y.value = i.value;
    }), ee(() => k(e.tag, {
      ref: i,
      class: K(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": g.value,
        "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || At())
      }, r.value, o.value, u.value, e.class]),
      style: ae([s.value, c.value, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : m.value
    }, {
      default: () => [L("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${w.value} ${w.value}`
      }, [L("circle", {
        class: K(["v-progress-circular__underlay", d.value]),
        style: ae(v.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": A.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), L("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": A.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": P.value
      }, null)]), n.default && L("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: m.value
      })])]
    })), {};
  }
}), xl = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, En = E({
  location: String
}, "location");
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = nt();
  return {
    locationStyles: x(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: r
      } = Kn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function o(u) {
        return n ? n(u) : 0;
      }
      const s = {};
      return i !== "center" && (t ? s[xl[i]] = `calc(100% - ${o(i)}px)` : s[i] = 0), r !== "center" ? t ? s[xl[r]] = `calc(100% - ${o(r)}px)` : s[r] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const Zs = E({
  chunkCount: {
    type: [Number, String],
    default: null
  },
  chunkWidth: {
    type: [Number, String],
    default: null
  },
  chunkGap: {
    type: [Number, String],
    default: 4
  }
}, "chunks");
function Us(e, t) {
  const n = V(() => !!e.chunkCount || !!e.chunkWidth), a = x(() => {
    const o = Ie(t);
    if (!o)
      return 0;
    if (!e.chunkCount)
      return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (o - Number(e.chunkGap) * (s - 1)) / s;
  }), l = V(() => Number(e.chunkGap)), i = x(() => {
    if (!n.value)
      return {};
    const o = Q(l.value), s = Q(a.value);
    return {
      maskRepeat: "repeat-x",
      maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`,
      maskSize: `calc(${s} + ${o}) 100%`
    };
  });
  function r(o) {
    const s = Ie(t);
    if (!s)
      return o;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((o + u) / c);
    return $e(0, d * c - u / 2, 100);
  }
  return {
    hasChunks: n,
    chunksMaskStyles: i,
    snapValueToChunk: r
  };
}
const Ys = E({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...Zs(),
  ...ne(),
  ...En({
    location: "top"
  }),
  ...ze(),
  ...ye(),
  ...Se()
}, "VProgressLinear"), Ks = Y()({
  name: "VProgressLinear",
  props: Ys(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = U(), l = me(e, "modelValue"), {
      isRtl: i,
      rtlClasses: r
    } = nt(), {
      themeClasses: o
    } = Le(e), {
      locationStyles: s
    } = Tn(e), {
      textColorClasses: u,
      textColorStyles: c
    } = Xe(() => e.color), {
      backgroundColorClasses: d,
      backgroundColorStyles: v
    } = qe(() => e.bgColor || e.color), {
      backgroundColorClasses: f,
      backgroundColorStyles: g
    } = qe(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: y,
      backgroundColorStyles: h
    } = qe(() => e.color), {
      roundedClasses: m
    } = We(e), {
      intersectionRef: b,
      isIntersecting: S
    } = Mi(), w = x(() => parseFloat(e.max)), A = x(() => parseFloat(e.height)), P = x(() => $e(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), I = x(() => $e(parseFloat(l.value) / w.value * 100, 0, 100)), C = x(() => i.value !== e.reverse), F = x(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), R = j(0), {
      hasChunks: N,
      chunksMaskStyles: O,
      snapValueToChunk: $
    } = Us(e, R);
    rt(N, () => {
      const {
        resizeRef: Z
      } = yt((J) => R.value = J[0].contentRect.width);
      Oe(() => Z.value = a.value);
    });
    const T = x(() => N.value ? $(P.value) : P.value), H = x(() => N.value ? $(I.value) : I.value);
    function W(Z) {
      if (!b.value) return;
      const {
        left: J,
        right: le,
        width: B
      } = b.value.getBoundingClientRect(), G = C.value ? B - Z.clientX + (le - B) : Z.clientX - J;
      l.value = Math.round(G / B * w.value);
    }
    return Oe(() => {
      b.value = a.value;
    }), ee(() => k(e.tag, {
      ref: a,
      class: K(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && S.value,
        "v-progress-linear--reverse": C.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped,
        "v-progress-linear--clickable": e.clickable
      }, m.value, o.value, r.value, e.class]),
      style: ae([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? Q(A.value) : 0,
        "--v-progress-linear-height": Q(A.value),
        ...e.absolute ? s.value : {}
      }, O.value, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), w.value),
      onClick: e.clickable && W
    }, {
      default: () => [e.stream && L("div", {
        key: "stream",
        class: K(["v-progress-linear__stream", u.value]),
        style: {
          ...c.value,
          [C.value ? "left" : "right"]: Q(-A.value),
          borderTop: `${Q(A.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${Q(A.value / 4)})`,
          width: Q(100 - P.value, "%"),
          "--v-progress-linear-stream-to": Q(A.value * (C.value ? 1 : -1))
        }
      }, null), L("div", {
        class: K(["v-progress-linear__background", d.value]),
        style: ae([v.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), L("div", {
        class: K(["v-progress-linear__buffer", f.value]),
        style: ae([g.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: Q(T.value, "%")
        }])
      }, null), k(gt, {
        name: F.value
      }, {
        default: () => [e.indeterminate ? L("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((Z) => L("div", {
          key: Z,
          class: K(["v-progress-linear__indeterminate", Z, y.value]),
          style: ae(h.value)
        }, null))]) : L("div", {
          class: K(["v-progress-linear__determinate", y.value]),
          style: ae([h.value, {
            width: Q(H.value, "%")
          }])
        }, null)]
      }), n.default && L("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: I.value,
        buffer: P.value
      })])]
    })), {};
  }
}), xa = E({
  loading: [Boolean, String]
}, "loader");
function Va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return {
    loaderClasses: V(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Ei(e, t) {
  var a;
  let {
    slots: n
  } = t;
  return L("div", {
    class: K(`${e.name}__loader`)
  }, [((a = n.default) == null ? void 0 : a.call(n, {
    color: e.color,
    isActive: e.active
  })) || k(Ks, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const qs = ["static", "relative", "fixed", "absolute", "sticky"], La = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => qs.includes(e)
    )
  }
}, "position");
function Aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  return {
    positionClasses: V(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function Xs(e, t) {
  X(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n != null && t && ve(() => {
      t(n);
    });
  }, {
    immediate: !0
  });
}
const aa = Symbol("rippleStop"), Qs = 80;
function Vl(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function la(e) {
  return e.constructor.name === "TouchEvent";
}
function Ti(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Js = function(e, t) {
  var d;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Ti(e)) {
    const v = t.getBoundingClientRect(), f = la(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - v.left, l = f.clientY - v.top;
  }
  let i = 0, r = 0.3;
  (d = t._ripple) != null && d.circle ? (r = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const o = `${(t.clientWidth - i * 2) / 2}px`, s = `${(t.clientHeight - i * 2) / 2}px`, u = n.center ? o : `${a - i}px`, c = n.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: r,
    x: u,
    y: c,
    centerX: o,
    centerY: s
  };
}, hn = {
  /* eslint-disable max-statements */
  show(e, t) {
    var f;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((f = t == null ? void 0 : t._ripple) != null && f.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: i,
      scale: r,
      x: o,
      y: s,
      centerX: u,
      centerY: c
    } = Js(e, t, n), d = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
    const v = window.getComputedStyle(t);
    v && v.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Vl(l, `translate(${o}, ${s}) scale3d(${r},${r},${r})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Vl(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = Array.from(t).findLast((r) => !r.dataset.isHiding);
    if (n) n.dataset.isHiding = "true";
    else return;
    const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var o;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((o = n.parentNode) == null ? void 0 : o.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, l);
  }
};
function Oi(e) {
  return typeof e > "u" || !!e;
}
function Wt(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[aa])) {
    if (e[aa] = !0, la(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Ti(e), n._ripple.class && (t.class = n._ripple.class), la(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        hn.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Qs);
    } else
      hn.show(e, n, t);
  }
}
function Ll(e) {
  e[aa] = !0;
}
function Te(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Te(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), hn.hide(t);
  }
}
function Di(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let jt = !1;
function Al(e, t) {
  !jt && t.includes(e.key) && (jt = !0, Wt(e));
}
function _i(e) {
  jt = !1, Te(e);
}
function Bi(e) {
  jt && (jt = !1, Te(e));
}
function Fi(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, i = Oi(a);
  i || hn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const r = Un(a) ? a : {};
  r.class && (e._ripple.class = r.class);
  const o = r.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => Al(s, o), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Ll, {
        passive: !0
      }), e.addEventListener("mousedown", Ll);
      return;
    }
    e.addEventListener("touchstart", Wt, {
      passive: !0
    }), e.addEventListener("touchend", Te, {
      passive: !0
    }), e.addEventListener("touchmove", Di, {
      passive: !0
    }), e.addEventListener("touchcancel", Te), e.addEventListener("mousedown", Wt), e.addEventListener("mouseup", Te), e.addEventListener("mouseleave", Te), e.addEventListener("keydown", (s) => Al(s, o)), e.addEventListener("keyup", _i), e.addEventListener("blur", Bi), e.addEventListener("dragstart", Te, {
      passive: !0
    });
  } else !i && n && $i(e);
}
function $i(e) {
  var t;
  e.removeEventListener("mousedown", Wt), e.removeEventListener("touchstart", Wt), e.removeEventListener("touchend", Te), e.removeEventListener("touchmove", Di), e.removeEventListener("touchcancel", Te), e.removeEventListener("mouseup", Te), e.removeEventListener("mouseleave", Te), (t = e._ripple) != null && t.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", _i), e.removeEventListener("dragstart", Te), e.removeEventListener("blur", Bi);
}
function eu(e, t) {
  Fi(e, t, !1);
}
function tu(e) {
  $i(e), delete e._ripple;
}
function nu(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Oi(t.oldValue);
  Fi(e, t, n);
}
const Qe = {
  mounted: eu,
  unmounted: tu,
  updated: nu
}, au = E({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Ii
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ie,
  appendIcon: ie,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  spaced: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...ot(),
  ...ne(),
  ...Ye(),
  ...et(),
  ...St(),
  ...Li(),
  ...xa(),
  ...En(),
  ...La(),
  ...ze(),
  ...An(),
  ...Jt(),
  ...ye({
    tag: "button"
  }),
  ...Se(),
  ...ut({
    variant: "elevated"
  })
}, "VBtn"), Dd = Y()({
  name: "VBtn",
  props: au(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Le(e), {
      borderClasses: i
    } = st(e), {
      densityClasses: r
    } = at(e), {
      dimensionStyles: o
    } = tt(e), {
      elevationClasses: s
    } = Ct(e), {
      loaderClasses: u
    } = Va(e), {
      locationStyles: c
    } = Tn(e), {
      positionClasses: d
    } = Aa(e), {
      roundedClasses: v
    } = We(e), {
      sizeClasses: f,
      sizeStyles: g
    } = en(e), y = ta(e, e.symbol, !1), h = Ln(e, n), m = x(() => {
      var N;
      return e.active !== void 0 ? e.active : h.isRouterLink.value ? (N = h.isActive) == null ? void 0 : N.value : y == null ? void 0 : y.isSelected.value;
    }), b = V(() => m.value ? e.activeColor ?? e.color : e.color), S = x(() => {
      var O, $;
      return {
        color: (y == null ? void 0 : y.isSelected.value) && (!h.isLink.value || ((O = h.isActive) == null ? void 0 : O.value)) || !y || (($ = h.isActive) == null ? void 0 : $.value) ? b.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: A,
      variantClasses: P
    } = Qt(S), I = x(() => (y == null ? void 0 : y.disabled.value) || e.disabled), C = V(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), F = x(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function R(N) {
      var O;
      I.value || h.isLink.value && (N.metaKey || N.ctrlKey || N.shiftKey || N.button !== 0 || n.target === "_blank") || (h.isRouterLink.value ? (O = h.navigate) == null || O.call(h, N) : y == null || y.toggle());
    }
    return Xs(h, y == null ? void 0 : y.select), ee(() => {
      const N = h.isLink.value ? "a" : e.tag, O = !!(e.prependIcon || a.prepend), $ = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== !0);
      return De(k(N, q(h.linkProps, {
        type: N === "a" ? void 0 : "button",
        class: ["v-btn", y == null ? void 0 : y.selectedClass.value, {
          "v-btn--active": m.value,
          "v-btn--block": e.block,
          "v-btn--disabled": I.value,
          "v-btn--elevated": C.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, i.value, w.value, r.value, s.value, u.value, d.value, v.value, f.value, P.value, e.class],
        style: [A.value, o.value, c.value, g.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: I.value && N !== "a" || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: R,
        value: F.value
      }), {
        default: () => {
          var H;
          return [Xt(!0, "v-btn"), !e.icon && O && L("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : k(pe, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), L("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && T ? k(pe, {
            key: "content-icon",
            icon: e.icon
          }, null) : k(we, {
            key: "content-defaults",
            disabled: !T,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var W;
              return [((W = a.default) == null ? void 0 : W.call(a)) ?? Lt(e.text)];
            }
          })]), !e.icon && $ && L("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? k(we, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : k(pe, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && L("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((H = a.loader) == null ? void 0 : H.call(a)) ?? k(Gs, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Qe, !I.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: y
    };
  }
}), lu = E({
  ...ne(),
  ...ye()
}, "VCardActions"), iu = Y()({
  name: "VCardActions",
  props: lu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ot({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), ee(() => k(e.tag, {
      class: K(["v-card-actions", e.class]),
      style: ae(e.style)
    }, n)), {};
  }
}), ru = E({
  opacity: [Number, String],
  ...ne(),
  ...ye()
}, "VCardSubtitle"), ou = Y()({
  name: "VCardSubtitle",
  props: ru(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => k(e.tag, {
      class: K(["v-card-subtitle", e.class]),
      style: ae([{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), su = ma("v-card-title");
function uu(e) {
  return {
    aspectStyles: x(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Hi = E({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...ne(),
  ...et()
}, "VResponsive"), Il = Y()({
  name: "VResponsive",
  props: Hi(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = uu(e), {
      dimensionStyles: l
    } = tt(e);
    return ee(() => {
      var i;
      return L("div", {
        class: K(["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class]),
        style: ae([l.value, e.style])
      }, [L("div", {
        class: "v-responsive__sizer",
        style: ae(a.value)
      }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && L("div", {
        class: K(["v-responsive__content", e.contentClass])
      }, [n.default()])]);
    }), {};
  }
});
function cu(e, t) {
  if (!ua) return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, r = new IntersectionObserver(function() {
    var d;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (d = e._observe) == null ? void 0 : d[t.instance.$.uid];
    if (!u) return;
    const c = o.some((v) => v.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, o, s), c && n.once ? Ri(e, t) : u.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: r
  }, r.observe(e);
}
function Ri(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const yn = {
  mounted: cu,
  unmounted: Ri
}, du = E({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Hi(),
  ...ne(),
  ...ze(),
  ...qt()
}, "VImg"), Ni = Y()({
  name: "VImg",
  directives: {
    vIntersect: yn
  },
  props: du(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = qe(() => e.color), {
      roundedClasses: r
    } = We(e), o = he("VImg"), s = j(""), u = U(), c = j(e.eager ? "loading" : "idle"), d = j(), v = j(), f = x(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), g = x(() => f.value.aspect || d.value / v.value || 0);
    X(() => e.src, () => {
      y(c.value !== "idle");
    }), X(g, (O, $) => {
      !O && $ && u.value && w(u.value);
    }), kn(() => y());
    function y(O) {
      if (!(e.eager && O) && !(ua && !O && !e.eager)) {
        if (c.value = "loading", f.value.lazySrc) {
          const $ = new Image();
          $.src = f.value.lazySrc, w($, null);
        }
        f.value.src && ve(() => {
          var $;
          n("loadstart", (($ = u.value) == null ? void 0 : $.currentSrc) || f.value.src), setTimeout(() => {
            var T;
            if (!o.isUnmounted)
              if ((T = u.value) != null && T.complete) {
                if (u.value.naturalWidth || m(), c.value === "error") return;
                g.value || w(u.value, null), c.value === "loading" && h();
              } else
                g.value || w(u.value), b();
          });
        });
      }
    }
    function h() {
      var O;
      o.isUnmounted || (b(), w(u.value), c.value = "loaded", n("load", ((O = u.value) == null ? void 0 : O.currentSrc) || f.value.src));
    }
    function m() {
      var O;
      o.isUnmounted || (c.value = "error", n("error", ((O = u.value) == null ? void 0 : O.currentSrc) || f.value.src));
    }
    function b() {
      const O = u.value;
      O && (s.value = O.currentSrc || O.src);
    }
    let S = -1;
    Ge(() => {
      clearTimeout(S);
    });
    function w(O) {
      let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const T = () => {
        if (clearTimeout(S), o.isUnmounted) return;
        const {
          naturalHeight: H,
          naturalWidth: W
        } = O;
        H || W ? (d.value = W, v.value = H) : !O.complete && c.value === "loading" && $ != null ? S = window.setTimeout(T, $) : (O.currentSrc.endsWith(".svg") || O.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, v.value = 1);
      };
      T();
    }
    const A = V(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), P = () => {
      var T;
      if (!f.value.src || c.value === "idle") return null;
      const O = L("img", {
        class: K(["v-img__img", A.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: f.value.src,
        srcset: f.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: u,
        onLoad: h,
        onError: m
      }, null), $ = (T = a.sources) == null ? void 0 : T.call(a);
      return k(it, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [De($ ? L("picture", {
          class: "v-img__picture"
        }, [$, O]) : O, [[Tt, c.value === "loaded"]])]
      });
    }, I = () => k(it, {
      transition: e.transition
    }, {
      default: () => [f.value.lazySrc && c.value !== "loaded" && L("img", {
        class: K(["v-img__img", "v-img__img--preload", A.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: f.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), C = () => a.placeholder ? k(it, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(c.value === "loading" || c.value === "error" && !a.error) && L("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, F = () => a.error ? k(it, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [c.value === "error" && L("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, R = () => e.gradient ? L("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, N = j(!1);
    {
      const O = X(g, ($) => {
        $ && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            N.value = !0;
          });
        }), O());
      });
    }
    return ee(() => {
      const O = Il.filterProps(e);
      return De(k(Il, q({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !N.value
        }, l.value, r.value, e.class],
        style: [{
          width: Q(e.width === "auto" ? d.value : e.width)
        }, i.value, e.style]
      }, O, {
        aspectRatio: g.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => L(fe, null, [k(P, null, null), k(I, null, null), k(R, null, null), k(C, null, null), k(F, null, null)]),
        default: a.default
      }), [[yn, {
        handler: y,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: u,
      state: c,
      naturalWidth: d,
      naturalHeight: v
    };
  }
}), fu = E({
  start: Boolean,
  end: Boolean,
  icon: ie,
  image: String,
  text: String,
  ...ot(),
  ...ne(),
  ...Ye(),
  ...ze(),
  ...Jt(),
  ...ye(),
  ...Se(),
  ...ut({
    variant: "flat"
  })
}, "VAvatar"), bt = Y()({
  name: "VAvatar",
  props: fu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Le(e), {
      borderClasses: l
    } = st(e), {
      colorClasses: i,
      colorStyles: r,
      variantClasses: o
    } = Qt(e), {
      densityClasses: s
    } = at(e), {
      roundedClasses: u
    } = We(e), {
      sizeClasses: c,
      sizeStyles: d
    } = en(e);
    return ee(() => k(e.tag, {
      class: K(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, u.value, c.value, o.value, e.class]),
      style: ae([r.value, d.value, e.style])
    }, {
      default: () => [n.default ? k(we, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? k(Ni, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? k(pe, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Xt(!1, "v-avatar")]
    })), {};
  }
}), vu = E({
  appendAvatar: String,
  appendIcon: ie,
  prependAvatar: String,
  prependIcon: ie,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...ne(),
  ...Ye(),
  ...ye()
}, "VCardItem"), mu = Y()({
  name: "VCardItem",
  props: vu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => {
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), i = !!(e.appendAvatar || e.appendIcon), r = !!(i || n.append), o = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
      return k(e.tag, {
        class: K(["v-card-item", e.class]),
        style: ae(e.style)
      }, {
        default: () => {
          var u;
          return [l && L("div", {
            key: "prepend",
            class: "v-card-item__prepend"
          }, [n.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !a,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              }
            }
          }, n.prepend) : L(fe, null, [e.prependAvatar && k(bt, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && k(pe, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)])]), L("div", {
            class: "v-card-item__content"
          }, [o && k(su, {
            key: "title"
          }, {
            default: () => {
              var c;
              return [((c = n.title) == null ? void 0 : c.call(n)) ?? Lt(e.title)];
            }
          }), s && k(ou, {
            key: "subtitle"
          }, {
            default: () => {
              var c;
              return [((c = n.subtitle) == null ? void 0 : c.call(n)) ?? Lt(e.subtitle)];
            }
          }), (u = n.default) == null ? void 0 : u.call(n)]), r && L("div", {
            key: "append",
            class: "v-card-item__append"
          }, [n.append ? k(we, {
            key: "append-defaults",
            disabled: !i,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              }
            }
          }, n.append) : L(fe, null, [e.appendIcon && k(pe, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && k(bt, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)])])];
        }
      });
    }), {};
  }
}), gu = E({
  opacity: [Number, String],
  ...ne(),
  ...ye()
}, "VCardText"), hu = Y()({
  name: "VCardText",
  props: gu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => k(e.tag, {
      class: K(["v-card-text", e.class]),
      style: ae([{
        "--v-card-text-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), yu = E({
  appendAvatar: String,
  appendIcon: ie,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ie,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...ot(),
  ...ne(),
  ...Ye(),
  ...et(),
  ...St(),
  ...xa(),
  ...En(),
  ...La(),
  ...ze(),
  ...An(),
  ...ye(),
  ...Se(),
  ...ut({
    variant: "elevated"
  })
}, "VCard"), _d = Y()({
  name: "VCard",
  directives: {
    vRipple: Qe
  },
  props: yu(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Le(e), {
      borderClasses: i
    } = st(e), {
      colorClasses: r,
      colorStyles: o,
      variantClasses: s
    } = Qt(e), {
      densityClasses: u
    } = at(e), {
      dimensionStyles: c
    } = tt(e), {
      elevationClasses: d
    } = Ct(e), {
      loaderClasses: v
    } = Va(e), {
      locationStyles: f
    } = Tn(e), {
      positionClasses: g
    } = Aa(e), {
      roundedClasses: y
    } = We(e), h = Ln(e, n);
    return ee(() => {
      const m = e.link !== !1 && h.isLink.value, b = !e.disabled && e.link !== !1 && (e.link || h.isClickable.value), S = m ? "a" : e.tag, w = !!(a.title || e.title != null), A = !!(a.subtitle || e.subtitle != null), P = w || A, I = !!(a.append || e.appendAvatar || e.appendIcon), C = !!(a.prepend || e.prependAvatar || e.prependIcon), F = !!(a.image || e.image), R = P || C || I, N = !!(a.text || e.text != null);
      return De(k(S, q(h.linkProps, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": b
        }, l.value, i.value, r.value, u.value, d.value, v.value, g.value, y.value, s.value, e.class],
        style: [o.value, c.value, f.value, e.style],
        onClick: b && h.navigate,
        tabindex: e.disabled ? -1 : void 0
      }), {
        default: () => {
          var O;
          return [F && L("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? k(we, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : k(Ni, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), k(Ei, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), R && k(mu, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), N && k(hu, {
            key: "text"
          }, {
            default: () => {
              var $;
              return [(($ = a.text) == null ? void 0 : $.call(a)) ?? e.text];
            }
          }), (O = a.default) == null ? void 0 : O.call(a), a.actions && k(iu, null, {
            default: a.actions
          }), Xt(b, "v-card")];
        }
      }), [[Qe, b && e.ripple]]);
    }), {};
  }
}), bu = E({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...Pn({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Ca
    },
    zIndex: 2400
  })
}, "VDialog"), Bd = Y()({
  name: "VDialog",
  props: bu(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = me(e, "modelValue"), {
      scopeId: i
    } = In(), r = U();
    async function o(d) {
      var g, y, h;
      const v = d.relatedTarget, f = d.target;
      await ve(), l.value && v !== f && ((g = r.value) != null && g.contentEl) && // We're the topmost dialog
      ((y = r.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, r.value.contentEl].includes(f) && // It isn't inside the dialog body
      !r.value.contentEl.contains(f) && ((h = It(r.value.contentEl)[0]) == null || h.focus());
    }
    function s(d) {
      var h;
      if (d.key !== "Tab" || !((h = r.value) != null && h.contentEl)) return;
      const v = It(r.value.contentEl);
      if (!v.length) return;
      const f = v[0], g = v[v.length - 1], y = document.activeElement;
      d.shiftKey && y === f ? (d.preventDefault(), g.focus()) : !d.shiftKey && y === g && (d.preventDefault(), f.focus());
    }
    Ge(() => {
      document.removeEventListener("focusin", o), document.removeEventListener("keydown", s);
    }), oe && X(() => l.value && e.retainFocus, (d) => {
      d ? (document.addEventListener("focusin", o, {
        once: !0
      }), document.addEventListener("keydown", s)) : (document.removeEventListener("focusin", o), document.removeEventListener("keydown", s));
    }, {
      immediate: !0
    });
    function u() {
      var d;
      n("afterEnter"), (e.scrim || e.retainFocus) && ((d = r.value) != null && d.contentEl) && !r.value.contentEl.contains(document.activeElement) && r.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      n("afterLeave");
    }
    return X(l, async (d) => {
      var v;
      d || (await ve(), (v = r.value.activatorEl) == null || v.focus({
        preventScroll: !0
      }));
    }), ee(() => {
      const d = Mt.filterProps(e), v = q({
        "aria-haspopup": "dialog"
      }, e.activatorProps), f = q({
        tabindex: -1
      }, e.contentProps);
      return k(Mt, q({
        ref: r,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, d, {
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        "aria-modal": "true",
        activatorProps: v,
        contentProps: f,
        height: e.fullscreen ? void 0 : e.height,
        width: e.fullscreen ? void 0 : e.width,
        maxHeight: e.fullscreen ? void 0 : e.maxHeight,
        maxWidth: e.fullscreen ? void 0 : e.maxWidth,
        role: "dialog",
        onAfterEnter: u,
        onAfterLeave: c
      }, i), {
        activator: a.activator,
        default: function() {
          for (var g = arguments.length, y = new Array(g), h = 0; h < g; h++)
            y[h] = arguments[h];
          return k(we, {
            root: "VDialog"
          }, {
            default: () => {
              var m;
              return [(m = a.default) == null ? void 0 : m.call(a, ...y)];
            }
          });
        }
      });
    }), _t({}, r);
  }
}), Su = E({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ne(),
  ...Se()
}, "VDivider"), zi = Y()({
  name: "VDivider",
  props: Su(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Le(e), {
      textColorClasses: i,
      textColorStyles: r
    } = Xe(() => e.color), o = x(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = Q(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Q(e.thickness)), s;
    });
    return ee(() => {
      const s = L("hr", {
        class: K([{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class]),
        style: ae([o.value, r.value, {
          "--v-border-opacity": e.opacity
        }, e.style]),
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return a.default ? L("div", {
        class: K(["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }])
      }, [s, L("div", {
        class: "v-divider__content"
      }, [a.default()]), s]) : s;
    }), {};
  }
}), Wi = Symbol.for("vuetify:form"), Cu = E({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function wu(e) {
  const t = me(e, "modelValue"), n = V(() => e.disabled), a = V(() => e.readonly), l = j(!1), i = U([]), r = U([]);
  async function o() {
    const c = [];
    let d = !0;
    r.value = [], l.value = !0;
    for (const v of i.value) {
      const f = await v.validate();
      if (f.length > 0 && (d = !1, c.push({
        id: v.id,
        errorMessages: f
      })), !d && e.fastFail) break;
    }
    return r.value = c, l.value = !1, {
      valid: d,
      errors: r.value
    };
  }
  function s() {
    i.value.forEach((c) => c.reset());
  }
  function u() {
    i.value.forEach((c) => c.resetValidation());
  }
  return X(i, () => {
    let c = 0, d = 0;
    const v = [];
    for (const f of i.value)
      f.isValid === !1 ? (d++, v.push({
        id: f.id,
        errorMessages: f.errorMessages
      })) : f.isValid === !0 && c++;
    r.value = v, t.value = d > 0 ? !1 : c === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Ee(Wi, {
    register: (c) => {
      let {
        id: d,
        vm: v,
        validate: f,
        reset: g,
        resetValidation: y
      } = c;
      i.value.some((h) => h.id === d) && Fe(`Duplicate input name "${d}"`), i.value.push({
        id: d,
        validate: f,
        reset: g,
        resetValidation: y,
        vm: Fr(v),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (c) => {
      i.value = i.value.filter((d) => d.id !== c);
    },
    update: (c, d, v) => {
      const f = i.value.find((g) => g.id === c);
      f && (f.isValid = d, f.errorMessages = v);
    },
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validateOn: V(() => e.validateOn)
  }), {
    errors: r,
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validate: o,
    reset: s,
    resetValidation: u
  };
}
function ji(e) {
  const t = ge(Wi, null);
  return {
    ...t,
    isReadonly: x(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: x(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const pu = E({
  ...ne(),
  ...Cu()
}, "VForm"), Fd = Y()({
  name: "VForm",
  props: pu(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = wu(e), i = U();
    function r(s) {
      s.preventDefault(), l.reset();
    }
    function o(s) {
      const u = s, c = l.validate();
      u.then = c.then.bind(c), u.catch = c.catch.bind(c), u.finally = c.finally.bind(c), a("submit", u), u.defaultPrevented || c.then((d) => {
        var f;
        let {
          valid: v
        } = d;
        v && ((f = i.value) == null || f.submit());
      }), u.preventDefault();
    }
    return ee(() => {
      var s;
      return L("form", {
        ref: i,
        class: K(["v-form", e.class]),
        style: ae(e.style),
        novalidate: !0,
        onReset: r,
        onSubmit: o
      }, [(s = n.default) == null ? void 0 : s.call(n, l)]);
    }), _t(l, i);
  }
}), $d = ma("v-spacer", "div", "VSpacer"), Pl = Symbol.for("vuetify:layout"), ku = Symbol.for("vuetify:layout-item"), Ml = 1e3, xu = E({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), Vu = (e, t, n, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const r of e) {
    const o = t.get(r), s = n.get(r), u = a.get(r);
    if (!o || !s || !u) continue;
    const c = {
      ...l,
      [o.value]: parseInt(l[o.value], 10) + (u.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: r,
      layer: c
    }), l = c;
  }
  return i;
};
function Lu(e) {
  const t = ge(Pl, null), n = x(() => t ? t.rootZIndex.value - 100 : Ml), a = U([]), l = Pe(/* @__PURE__ */ new Map()), i = Pe(/* @__PURE__ */ new Map()), r = Pe(/* @__PURE__ */ new Map()), o = Pe(/* @__PURE__ */ new Map()), s = Pe(/* @__PURE__ */ new Map()), {
    resizeRef: u,
    contentRect: c
  } = yt(), d = x(() => {
    const P = /* @__PURE__ */ new Map(), I = e.overlaps ?? [];
    for (const C of I.filter((F) => F.includes(":"))) {
      const [F, R] = C.split(":");
      if (!a.value.includes(F) || !a.value.includes(R)) continue;
      const N = l.get(F), O = l.get(R), $ = i.get(F), T = i.get(R);
      !N || !O || !$ || !T || (P.set(R, {
        position: N.value,
        amount: parseInt($.value, 10)
      }), P.set(F, {
        position: O.value,
        amount: -parseInt(T.value, 10)
      }));
    }
    return P;
  }), v = x(() => {
    const P = [...new Set([...r.values()].map((C) => C.value))].sort((C, F) => C - F), I = [];
    for (const C of P) {
      const F = a.value.filter((R) => {
        var N;
        return ((N = r.get(R)) == null ? void 0 : N.value) === C;
      });
      I.push(...F);
    }
    return Vu(I, l, i, o);
  }), f = x(() => !Array.from(s.values()).some((P) => P.value)), g = x(() => v.value[v.value.length - 1].layer), y = V(() => ({
    "--v-layout-left": Q(g.value.left),
    "--v-layout-right": Q(g.value.right),
    "--v-layout-top": Q(g.value.top),
    "--v-layout-bottom": Q(g.value.bottom),
    ...f.value ? void 0 : {
      transition: "none"
    }
  })), h = x(() => v.value.slice(1).map((P, I) => {
    let {
      id: C
    } = P;
    const {
      layer: F
    } = v.value[I], R = i.get(C), N = l.get(C);
    return {
      id: C,
      ...F,
      size: Number(R.value),
      position: N.value
    };
  })), m = (P) => h.value.find((I) => I.id === P), b = he("createLayout"), S = j(!1);
  Et(() => {
    S.value = !0;
  }), Ee(Pl, {
    register: (P, I) => {
      let {
        id: C,
        order: F,
        position: R,
        layoutSize: N,
        elementSize: O,
        active: $,
        disableTransitions: T,
        absolute: H
      } = I;
      r.set(C, F), l.set(C, R), i.set(C, N), o.set(C, $), T && s.set(C, T);
      const Z = xt(ku, b == null ? void 0 : b.vnode).indexOf(P);
      Z > -1 ? a.value.splice(Z, 0, C) : a.value.push(C);
      const J = x(() => h.value.findIndex((M) => M.id === C)), le = x(() => n.value + v.value.length * 2 - J.value * 2), B = x(() => {
        const M = R.value === "left" || R.value === "right", p = R.value === "right", D = R.value === "bottom", te = O.value ?? N.value, ue = te === 0 ? "%" : "px", _ = {
          [R.value]: 0,
          zIndex: le.value,
          transform: `translate${M ? "X" : "Y"}(${($.value ? 0 : -(te === 0 ? 100 : te)) * (p || D ? -1 : 1)}${ue})`,
          position: H.value || n.value !== Ml ? "absolute" : "fixed",
          ...f.value ? void 0 : {
            transition: "none"
          }
        };
        if (!S.value) return _;
        const z = h.value[J.value];
        z || Fe(`[Vuetify] Could not find layout item "${C}"`);
        const se = d.value.get(C);
        return se && (z[se.position] += se.amount), {
          ..._,
          height: M ? `calc(100% - ${z.top}px - ${z.bottom}px)` : O.value ? `${O.value}px` : void 0,
          left: p ? void 0 : `${z.left}px`,
          right: p ? `${z.right}px` : void 0,
          top: R.value !== "bottom" ? `${z.top}px` : void 0,
          bottom: R.value !== "top" ? `${z.bottom}px` : void 0,
          width: M ? O.value ? `${O.value}px` : void 0 : `calc(100% - ${z.left}px - ${z.right}px)`
        };
      }), G = x(() => ({
        zIndex: le.value - 1
      }));
      return {
        layoutItemStyles: B,
        layoutItemScrimStyles: G,
        zIndex: le
      };
    },
    unregister: (P) => {
      r.delete(P), l.delete(P), i.delete(P), o.delete(P), s.delete(P), a.value = a.value.filter((I) => I !== P);
    },
    mainRect: g,
    mainStyles: y,
    getLayoutItem: m,
    items: h,
    layoutRect: c,
    rootZIndex: n
  });
  const w = V(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), A = V(() => ({
    zIndex: t ? n.value : void 0,
    position: t ? "relative" : void 0,
    overflow: t ? "hidden" : void 0
  }));
  return {
    layoutClasses: w,
    layoutStyles: A,
    getLayoutItem: m,
    items: h,
    layoutRect: c,
    layoutRef: u
  };
}
const Au = E({
  ...ne(),
  ...Je(xu(), ["fullHeight"]),
  ...Se()
}, "VApp"), Hd = Y()({
  name: "VApp",
  props: Au(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Le(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: r,
      layoutRef: o
    } = Lu({
      ...e,
      fullHeight: !0
    }), {
      rtlClasses: s
    } = nt();
    return ee(() => {
      var u;
      return L("div", {
        ref: o,
        class: K(["v-application", a.themeClasses.value, l.value, s.value, e.class]),
        style: ae([e.style])
      }, [L("div", {
        class: "v-application__wrap"
      }, [(u = n.default) == null ? void 0 : u.call(n)])]);
    }), {
      getLayoutItem: i,
      items: r,
      theme: a
    };
  }
}), Iu = E({
  text: String,
  onClick: Me(),
  ...ne(),
  ...Se()
}, "VLabel"), Gi = Y()({
  name: "VLabel",
  props: Iu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => {
      var a;
      return L("label", {
        class: K(["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class]),
        style: ae(e.style),
        onClick: e.onClick
      }, [e.text, (a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), Zi = Symbol.for("vuetify:selection-control-group"), Ui = E({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ie,
  trueIcon: ie,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: He
  },
  ...ne(),
  ...Ye(),
  ...Se()
}, "SelectionControlGroup"), Pu = E({
  ...Ui({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
Y()({
  name: "VSelectionControlGroup",
  props: Pu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "modelValue"), l = Ze(), i = V(() => e.id || `v-selection-control-group-${l}`), r = V(() => e.name || i.value), o = /* @__PURE__ */ new Set();
    return Ee(Zi, {
      modelValue: a,
      forceUpdate: () => {
        o.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        o.add(s), ke(() => {
          o.delete(s);
        });
      }
    }), Ot({
      [e.defaultsTarget]: {
        color: V(() => e.color),
        disabled: V(() => e.disabled),
        density: V(() => e.density),
        error: V(() => e.error),
        inline: V(() => e.inline),
        modelValue: a,
        multiple: V(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: r,
        falseIcon: V(() => e.falseIcon),
        trueIcon: V(() => e.trueIcon),
        readonly: V(() => e.readonly),
        ripple: V(() => e.ripple),
        type: V(() => e.type),
        valueComparator: V(() => e.valueComparator)
      }
    }), ee(() => {
      var s;
      return L("div", {
        class: K(["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class]),
        style: ae(e.style),
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = n.default) == null ? void 0 : s.call(n)]);
    }), {};
  }
});
const Yi = E({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ne(),
  ...Ui()
}, "VSelectionControl");
function Mu(e) {
  const t = ge(Zi, void 0), {
    densityClasses: n
  } = at(e), a = me(e, "modelValue"), l = x(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = x(() => e.falseValue !== void 0 ? e.falseValue : !1), r = x(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), o = x({
    get() {
      const f = t ? t.modelValue.value : a.value;
      return r.value ? Ne(f).some((g) => e.valueComparator(g, l.value)) : e.valueComparator(f, l.value);
    },
    set(f) {
      if (e.readonly) return;
      const g = f ? l.value : i.value;
      let y = g;
      r.value && (y = f ? [...Ne(a.value), g] : Ne(a.value).filter((h) => !e.valueComparator(h, l.value))), t ? t.modelValue.value = y : a.value = y;
    }
  }), {
    textColorClasses: s,
    textColorStyles: u
  } = Xe(() => {
    if (!(e.error || e.disabled))
      return o.value ? e.color : e.baseColor;
  }), {
    backgroundColorClasses: c,
    backgroundColorStyles: d
  } = qe(() => o.value && !e.error && !e.disabled ? e.color : e.baseColor), v = x(() => o.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: i,
    model: o,
    textColorClasses: s,
    textColorStyles: u,
    backgroundColorClasses: c,
    backgroundColorStyles: d,
    icon: v
  };
}
const El = Y()({
  name: "VSelectionControl",
  directives: {
    vRipple: Qe
  },
  inheritAttrs: !1,
  props: Yi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: l,
      densityClasses: i,
      icon: r,
      model: o,
      textColorClasses: s,
      textColorStyles: u,
      backgroundColorClasses: c,
      backgroundColorStyles: d,
      trueValue: v
    } = Mu(e), f = Ze(), g = j(!1), y = j(!1), h = U(), m = V(() => e.id || `input-${f}`), b = V(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      h.value && (h.value.checked = o.value);
    });
    function S(I) {
      b.value && (g.value = !0, cn(I.target, ":focus-visible") !== !1 && (y.value = !0));
    }
    function w() {
      g.value = !1, y.value = !1;
    }
    function A(I) {
      I.stopPropagation();
    }
    function P(I) {
      if (!b.value) {
        h.value && (h.value.checked = o.value);
        return;
      }
      e.readonly && l && ve(() => l.forceUpdate()), o.value = I.target.checked;
    }
    return ee(() => {
      var N, O;
      const I = a.label ? a.label({
        label: e.label,
        props: {
          for: m.value
        }
      }) : e.label, [C, F] = Ql(n), R = L("input", q({
        ref: h,
        checked: o.value,
        disabled: !!e.disabled,
        id: m.value,
        onBlur: w,
        onFocus: S,
        onInput: P,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: v.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? o.value : void 0
      }, F), null);
      return L("div", q({
        class: ["v-selection-control", {
          "v-selection-control--dirty": o.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": g.value,
          "v-selection-control--focus-visible": y.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, C, {
        style: e.style
      }), [L("div", {
        class: K(["v-selection-control__wrapper", s.value]),
        style: ae(u.value)
      }, [(N = a.default) == null ? void 0 : N.call(a, {
        backgroundColorClasses: c,
        backgroundColorStyles: d
      }), De(L("div", {
        class: K(["v-selection-control__input"])
      }, [((O = a.input) == null ? void 0 : O.call(a, {
        model: o,
        textColorClasses: s,
        textColorStyles: u,
        backgroundColorClasses: c,
        backgroundColorStyles: d,
        inputNode: R,
        icon: r.value,
        props: {
          onFocus: S,
          onBlur: w,
          id: m.value
        }
      })) ?? L(fe, null, [r.value && k(pe, {
        key: "icon",
        icon: r.value
      }, null), R])]), [[Qe, !e.disabled && !e.readonly && e.ripple, null, {
        center: !0,
        circle: !0
      }]])]), I && k(Gi, {
        for: m.value,
        onClick: A
      }, {
        default: () => [I]
      })]);
    }), {
      isFocused: g,
      input: h
    };
  }
}), Eu = E({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ie,
    default: "$checkboxIndeterminate"
  },
  ...Yi({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Tu = Y()({
  name: "VCheckboxBtn",
  props: Eu(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "indeterminate"), l = me(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const r = V(() => a.value ? e.indeterminateIcon : e.falseIcon), o = V(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return ee(() => {
      const s = Je(El.filterProps(e), ["modelValue"]);
      return k(El, q(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(u) => l.value = u, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: r.value,
        trueIcon: o.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function Ki(e) {
  const {
    t
  } = Vn();
  function n(a) {
    let {
      name: l,
      color: i,
      ...r
    } = a;
    const o = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), ti(s, new PointerEvent("click", d)));
    }
    const c = s && o ? t(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return k(pe, q({
      icon: e[`${l}Icon`],
      "aria-label": c,
      onClick: s,
      onKeydown: u,
      color: i
    }, r), null);
  }
  return {
    InputIcon: n
  };
}
const Ou = E({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ne(),
  ...qt({
    transition: {
      component: ki,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Du = Y()({
  name: "VMessages",
  props: Ou(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = x(() => Ne(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = Xe(() => e.color);
    return ee(() => k(it, {
      transition: e.transition,
      tag: "div",
      class: K(["v-messages", l.value, e.class]),
      style: ae([i.value, e.style])
    }, {
      default: () => [e.active && a.value.map((r, o) => L("div", {
        class: "v-messages__message",
        key: `${o}-${a.value}`
      }, [n.message ? n.message({
        message: r
      }) : r]))]
    })), {};
  }
}), qi = E({
  focused: Boolean,
  "onUpdate:focused": Me()
}, "focus");
function Xi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue();
  const n = me(e, "focused"), a = V(() => ({
    [`${t}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: l,
    blur: i
  };
}
const _u = Symbol.for("vuetify:rules");
function Bu(e) {
  const t = ge(_u, null);
  if (!e) {
    if (!t)
      throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? V(e);
}
const Fu = E({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...qi()
}, "validation");
function $u(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ze();
  const a = me(e, "modelValue"), l = x(() => e.validationValue === void 0 ? a.value : e.validationValue), i = ji(e), r = Bu(() => e.rules), o = U([]), s = j(!0), u = x(() => !!(Ne(a.value === "" ? null : a.value).length || Ne(l.value === "" ? null : l.value).length)), c = x(() => {
    var w;
    return (w = e.errorMessages) != null && w.length ? Ne(e.errorMessages).concat(o.value).slice(0, Math.max(0, Number(e.maxErrors))) : o.value;
  }), d = x(() => {
    var P;
    let w = (e.validateOn ?? ((P = i.validateOn) == null ? void 0 : P.value)) || "input";
    w === "lazy" && (w = "input lazy"), w === "eager" && (w = "input eager");
    const A = new Set((w == null ? void 0 : w.split(" ")) ?? []);
    return {
      input: A.has("input"),
      blur: A.has("blur") || A.has("input") || A.has("invalid-input"),
      invalidInput: A.has("invalid-input"),
      lazy: A.has("lazy"),
      eager: A.has("eager")
    };
  }), v = x(() => {
    var w;
    return e.error || (w = e.errorMessages) != null && w.length ? !1 : e.rules.length ? s.value ? o.value.length || d.value.lazy ? null : !0 : !o.value.length : !0;
  }), f = j(!1), g = x(() => ({
    [`${t}--error`]: v.value === !1,
    [`${t}--dirty`]: u.value,
    [`${t}--disabled`]: i.isDisabled.value,
    [`${t}--readonly`]: i.isReadonly.value
  })), y = he("validation"), h = x(() => e.name ?? ft(n));
  kn(() => {
    var w;
    (w = i.register) == null || w.call(i, {
      id: h.value,
      vm: y,
      validate: S,
      reset: m,
      resetValidation: b
    });
  }), Ge(() => {
    var w;
    (w = i.unregister) == null || w.call(i, h.value);
  }), Et(async () => {
    var w;
    d.value.lazy || await S(!d.value.eager), (w = i.update) == null || w.call(i, h.value, v.value, c.value);
  }), rt(() => d.value.input || d.value.invalidInput && v.value === !1, () => {
    X(l, () => {
      if (l.value != null)
        S();
      else if (e.focused) {
        const w = X(() => e.focused, (A) => {
          A || S(), w();
        });
      }
    });
  }), rt(() => d.value.blur, () => {
    X(() => e.focused, (w) => {
      w || S();
    });
  }), X([v, c], () => {
    var w;
    (w = i.update) == null || w.call(i, h.value, v.value, c.value);
  });
  async function m() {
    a.value = null, await ve(), await b();
  }
  async function b() {
    s.value = !0, d.value.lazy ? o.value = [] : await S(!d.value.eager);
  }
  async function S() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const A = [];
    f.value = !0;
    for (const P of r.value) {
      if (A.length >= Number(e.maxErrors ?? 1))
        break;
      const C = await (typeof P == "function" ? P : () => P)(l.value);
      if (C !== !0) {
        if (C !== !1 && typeof C != "string") {
          console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        A.push(C || "");
      }
    }
    return o.value = A, f.value = !1, s.value = w, o.value;
  }
  return {
    errorMessages: c,
    isDirty: u,
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: s,
    isValid: v,
    isValidating: f,
    reset: m,
    resetValidation: b,
    validate: S,
    validationClasses: g
  };
}
const Qi = E({
  id: String,
  appendIcon: ie,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: ie,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Me(),
  "onClick:append": Me(),
  ...ne(),
  ...Ye(),
  ...xn(et(), ["maxWidth", "minWidth", "width"]),
  ...Se(),
  ...Fu()
}, "VInput"), Tl = Y()({
  name: "VInput",
  props: {
    ...Qi()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const {
      densityClasses: i
    } = at(e), {
      dimensionStyles: r
    } = tt(e), {
      themeClasses: o
    } = Le(e), {
      rtlClasses: s
    } = nt(), {
      InputIcon: u
    } = Ki(e), c = Ze(), d = x(() => e.id || `input-${c}`), {
      errorMessages: v,
      isDirty: f,
      isDisabled: g,
      isReadonly: y,
      isPristine: h,
      isValid: m,
      isValidating: b,
      reset: S,
      resetValidation: w,
      validate: A,
      validationClasses: P
    } = $u(e, "v-input", d), I = x(() => {
      var T;
      return (T = e.errorMessages) != null && T.length || !h.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    }), C = V(() => I.value.length > 0), F = V(() => !e.hideDetails || e.hideDetails === "auto" && (C.value || !!a.details)), R = x(() => F.value ? `${d.value}-messages` : void 0), N = x(() => ({
      id: d,
      messagesId: R,
      isDirty: f,
      isDisabled: g,
      isReadonly: y,
      isPristine: h,
      isValid: m,
      isValidating: b,
      hasDetails: F,
      reset: S,
      resetValidation: w,
      validate: A
    })), O = V(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), $ = V(() => {
      if (e.iconColor)
        return e.iconColor === !0 ? O.value : e.iconColor;
    });
    return ee(() => {
      var W, Z, J, le;
      const T = !!(a.prepend || e.prependIcon), H = !!(a.append || e.appendIcon);
      return L("div", {
        class: K(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, o.value, s.value, P.value, e.class]),
        style: ae([r.value, e.style])
      }, [T && L("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(W = a.prepend) == null ? void 0 : W.call(a, N.value), e.prependIcon && k(u, {
        key: "prepend-icon",
        name: "prepend",
        color: $.value
      }, null)]), a.default && L("div", {
        class: "v-input__control"
      }, [(Z = a.default) == null ? void 0 : Z.call(a, N.value)]), H && L("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && k(u, {
        key: "append-icon",
        name: "append",
        color: $.value
      }, null), (J = a.append) == null ? void 0 : J.call(a, N.value)]), F.value && L("div", {
        id: R.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [k(Du, {
        active: C.value,
        messages: I.value
      }, {
        message: a.message
      }), (le = a.details) == null ? void 0 : le.call(a, N.value)])]);
    }), {
      reset: S,
      resetValidation: w,
      validate: A,
      isValid: m,
      errorMessages: v
    };
  }
}), Ji = Symbol.for("vuetify:goto");
function er() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: Po
  };
}
function Hu(e) {
  return Ia(e) ?? (document.scrollingElement || document.body);
}
function Ia(e) {
  return typeof e == "string" ? document.querySelector(e) : Kl(e);
}
function Wn(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = Ia(e), l = 0;
  for (; a; )
    l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Ru(e, t) {
  return {
    rtl: t.isRtl,
    options: Ve(er(), e)
  };
}
async function Ol(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", i = Ve((a == null ? void 0 : a.options) ?? er(), t), r = a == null ? void 0 : a.rtl.value, o = (typeof e == "number" ? e : Ia(e)) ?? 0, s = i.container === "parent" && o instanceof HTMLElement ? o.parentElement : Hu(i.container), u = At() ? i.patterns.instant : typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!u) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let c;
  if (typeof o == "number")
    c = Wn(o, n, r);
  else if (c = Wn(o, n, r) - Wn(s, n, r), i.layout) {
    const g = window.getComputedStyle(o).getPropertyValue("--v-layout-top");
    g && (c -= parseInt(g, 10));
  }
  c += i.offset, c = zu(s, c, !!r, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const v = performance.now();
  return new Promise((f) => requestAnimationFrame(function g(y) {
    const m = (y - v) / i.duration, b = Math.floor(d + (c - d) * u($e(m, 0, 1)));
    if (s[l] = b, m >= 1 && Math.abs(b - s[l]) < 10)
      return f(c);
    if (m > 2)
      return Fe("Scroll target is not reachable"), f(s[l]);
    requestAnimationFrame(g);
  }));
}
function Nu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = ge(Ji), {
    isRtl: n
  } = nt();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...t,
    // can be set via VLocaleProvider
    rtl: V(() => t.rtl.value || n.value)
  };
  async function l(i, r) {
    return Ol(i, Ve(e, r), !1, a);
  }
  return l.horizontal = async (i, r) => Ol(i, Ve(e, r), !0, a), l;
}
function zu(e, t, n, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [r, o] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - r), u = 0) : (s = 0, u = l - r) : (s = 0, u = i + -o), $e(t, s, u);
}
function Wu(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = Gt(l, n), r = tr(l, a, n), o = Gt(l, t), s = nr(l, t), u = o * 0.4;
  return r > s ? s - u : r + i < s + o ? s - i + o + u : r;
}
function ju(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isHorizontal: a
  } = e;
  const l = Gt(a, n), i = nr(a, t), r = Gt(a, t);
  return i - l / 2 + r / 2;
}
function Dl(e, t) {
  const n = e ? "scrollWidth" : "scrollHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function Gu(e, t) {
  const n = e ? "clientWidth" : "clientHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function tr(e, t, n) {
  if (!n)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = n;
  return e ? t ? i - l + a : a : n.scrollTop;
}
function Gt(e, t) {
  const n = e ? "offsetWidth" : "offsetHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function nr(e, t) {
  const n = e ? "offsetLeft" : "offsetTop";
  return (t == null ? void 0 : t[n]) || 0;
}
const ar = Symbol.for("vuetify:v-slide-group"), lr = E({
  centerActive: Boolean,
  scrollToActive: {
    type: Boolean,
    default: !0
  },
  contentClass: null,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: ar
  },
  nextIcon: {
    type: ie,
    default: "$next"
  },
  prevIcon: {
    type: ie,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...ne(),
  ...Qo({
    mobile: null
  }),
  ...ye(),
  ...wa({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), _l = Y()({
  name: "VSlideGroup",
  props: lr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: a
    } = nt(), {
      displayClasses: l,
      mobile: i
    } = ba(e), r = pa(e, e.symbol), o = j(!1), s = j(0), u = j(0), c = j(0), d = x(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: f
    } = yt(), {
      resizeRef: g,
      contentRect: y
    } = yt(), h = Nu(), m = x(() => ({
      container: v.el,
      duration: 200,
      easing: "easeOutQuart"
    })), b = x(() => r.selected.value.length ? r.items.value.findIndex((M) => M.id === r.selected.value[0]) : -1), S = x(() => r.selected.value.length ? r.items.value.findIndex((M) => M.id === r.selected.value[r.selected.value.length - 1]) : -1);
    if (oe) {
      let M = -1;
      X(() => [r.selected.value, f.value, y.value, d.value], () => {
        cancelAnimationFrame(M), M = requestAnimationFrame(() => {
          if (f.value && y.value) {
            const p = d.value ? "width" : "height";
            u.value = f.value[p], c.value = y.value[p], o.value = u.value + 1 < c.value;
          }
          if (e.scrollToActive && b.value >= 0 && g.el) {
            const p = g.el.children[S.value];
            A(p, e.centerActive);
          }
        });
      });
    }
    const w = j(!1);
    function A(M, p) {
      let D = 0;
      p ? D = ju({
        containerElement: v.el,
        isHorizontal: d.value,
        selectedElement: M
      }) : D = Wu({
        containerElement: v.el,
        isHorizontal: d.value,
        isRtl: a.value,
        selectedElement: M
      }), P(D);
    }
    function P(M) {
      if (!oe || !v.el) return;
      const p = Gt(d.value, v.el), D = tr(d.value, a.value, v.el);
      if (!(Dl(d.value, v.el) <= p || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(M - D) < 16)) {
        if (d.value && a.value && v.el) {
          const {
            scrollWidth: ue,
            offsetWidth: _
          } = v.el;
          M = ue - _ - M;
        }
        d.value ? h.horizontal(M, m.value) : h(M, m.value);
      }
    }
    function I(M) {
      const {
        scrollTop: p,
        scrollLeft: D
      } = M.target;
      s.value = d.value ? D : p;
    }
    function C(M) {
      if (w.value = !0, !(!o.value || !g.el)) {
        for (const p of M.composedPath())
          for (const D of g.el.children)
            if (D === p) {
              A(D);
              return;
            }
      }
    }
    function F(M) {
      w.value = !1;
    }
    let R = !1;
    function N(M) {
      var p;
      !R && !w.value && !(M.relatedTarget && ((p = g.el) != null && p.contains(M.relatedTarget))) && H(), R = !1;
    }
    function O() {
      R = !0;
    }
    function $(M) {
      if (!g.el) return;
      function p(D) {
        M.preventDefault(), H(D);
      }
      d.value ? M.key === "ArrowRight" ? p(a.value ? "prev" : "next") : M.key === "ArrowLeft" && p(a.value ? "next" : "prev") : M.key === "ArrowDown" ? p("next") : M.key === "ArrowUp" && p("prev"), M.key === "Home" ? p("first") : M.key === "End" && p("last");
    }
    function T(M, p) {
      if (!M) return;
      let D = M;
      do
        D = D == null ? void 0 : D[p === "next" ? "nextElementSibling" : "previousElementSibling"];
      while (D != null && D.hasAttribute("disabled"));
      return D;
    }
    function H(M) {
      if (!g.el) return;
      let p;
      if (!M)
        p = It(g.el)[0];
      else if (M === "next") {
        if (p = T(g.el.querySelector(":focus"), M), !p) return H("first");
      } else if (M === "prev") {
        if (p = T(g.el.querySelector(":focus"), M), !p) return H("last");
      } else M === "first" ? (p = g.el.firstElementChild, p != null && p.hasAttribute("disabled") && (p = T(p, "next"))) : M === "last" && (p = g.el.lastElementChild, p != null && p.hasAttribute("disabled") && (p = T(p, "prev")));
      p && p.focus({
        preventScroll: !0
      });
    }
    function W(M) {
      const p = d.value && a.value ? -1 : 1, D = (M === "prev" ? -p : p) * u.value;
      let te = s.value + D;
      if (d.value && a.value && v.el) {
        const {
          scrollWidth: ue,
          offsetWidth: _
        } = v.el;
        te += ue - _;
      }
      P(te);
    }
    const Z = x(() => ({
      next: r.next,
      prev: r.prev,
      select: r.select,
      isSelected: r.isSelected
    })), J = x(() => o.value || Math.abs(s.value) > 0), le = x(() => {
      switch (e.showArrows) {
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !i.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return J.value;
        // Always show on mobile
        case "mobile":
          return i.value || J.value;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !i.value && J.value;
      }
    }), B = x(() => Math.abs(s.value) > 1), G = x(() => {
      if (!v.value || !J.value) return !1;
      const M = Dl(d.value, v.el), p = Gu(d.value, v.el);
      return M - p - Math.abs(s.value) > 1;
    });
    return ee(() => k(e.tag, {
      class: K(["v-slide-group", {
        "v-slide-group--vertical": !d.value,
        "v-slide-group--has-affixes": le.value,
        "v-slide-group--is-overflowing": o.value
      }, l.value, e.class]),
      style: ae(e.style),
      tabindex: w.value || r.selected.value.length ? -1 : 0,
      onFocus: N
    }, {
      default: () => {
        var M, p, D;
        return [le.value && L("div", {
          key: "prev",
          class: K(["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !B.value
          }]),
          onMousedown: O,
          onClick: () => B.value && W("prev")
        }, [((M = n.prev) == null ? void 0 : M.call(n, Z.value)) ?? k(wl, null, {
          default: () => [k(pe, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), L("div", {
          key: "container",
          ref: v,
          class: K(["v-slide-group__container", e.contentClass]),
          onScroll: I
        }, [L("div", {
          ref: g,
          class: "v-slide-group__content",
          onFocusin: C,
          onFocusout: F,
          onKeydown: $
        }, [(p = n.default) == null ? void 0 : p.call(n, Z.value)])]), le.value && L("div", {
          key: "next",
          class: K(["v-slide-group__next", {
            "v-slide-group__next--disabled": !G.value
          }]),
          onMousedown: O,
          onClick: () => G.value && W("next")
        }, [((D = n.next) == null ? void 0 : D.call(n, Z.value)) ?? k(wl, null, {
          default: () => [k(pe, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: r.selected,
      scrollTo: W,
      scrollOffset: s,
      focus: H,
      hasPrev: B,
      hasNext: G
    };
  }
}), ir = Symbol.for("vuetify:v-chip-group"), Zu = E({
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: He
  },
  ...lr({
    scrollToActive: !1
  }),
  ...ne(),
  ...wa({
    selectedClass: "v-chip--selected"
  }),
  ...ye(),
  ...Se(),
  ...ut({
    variant: "tonal"
  })
}, "VChipGroup");
Y()({
  name: "VChipGroup",
  props: Zu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Le(e), {
      isSelected: l,
      select: i,
      next: r,
      prev: o,
      selected: s
    } = pa(e, ir);
    return Ot({
      VChip: {
        baseColor: V(() => e.baseColor),
        color: V(() => e.color),
        disabled: V(() => e.disabled),
        filter: V(() => e.filter),
        variant: V(() => e.variant)
      }
    }), ee(() => {
      const u = _l.filterProps(e);
      return k(_l, q(u, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = n.default) == null ? void 0 : c.call(n, {
            isSelected: l,
            select: i,
            next: r,
            prev: o,
            selected: s.value
          })];
        }
      });
    }), {};
  }
});
const Uu = E({
  activeClass: String,
  appendAvatar: String,
  appendIcon: ie,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: ie,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: ie,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: ie,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: Me(),
  onClickOnce: Me(),
  ...ot(),
  ...ne(),
  ...Ye(),
  ...St(),
  ...Li(),
  ...ze(),
  ...An(),
  ...Jt(),
  ...ye({
    tag: "span"
  }),
  ...Se(),
  ...ut({
    variant: "tonal"
  })
}, "VChip"), Yu = Y()({
  name: "VChip",
  directives: {
    vRipple: Qe
  },
  props: Uu(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      t: i
    } = Vn(), {
      borderClasses: r
    } = st(e), {
      densityClasses: o
    } = at(e), {
      elevationClasses: s
    } = Ct(e), {
      roundedClasses: u
    } = We(e), {
      sizeClasses: c
    } = en(e), {
      themeClasses: d
    } = Le(e), v = me(e, "modelValue"), f = ta(e, ir, !1), g = ta(e, ar, !1), y = Ln(e, n), h = V(() => e.link !== !1 && y.isLink.value), m = x(() => !e.disabled && e.link !== !1 && (!!f || e.link || y.isClickable.value)), b = V(() => ({
      "aria-label": i(e.closeLabel),
      disabled: e.disabled,
      onClick(C) {
        C.preventDefault(), C.stopPropagation(), v.value = !1, a("click:close", C);
      }
    }));
    X(v, (C) => {
      C ? (f == null || f.register(), g == null || g.register()) : (f == null || f.unregister(), g == null || g.unregister());
    });
    const {
      colorClasses: S,
      colorStyles: w,
      variantClasses: A
    } = Qt(() => ({
      color: !f || f.isSelected.value ? e.color ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    function P(C) {
      var F;
      a("click", C), m.value && ((F = y.navigate) == null || F.call(y, C), f == null || f.toggle());
    }
    function I(C) {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), P(C));
    }
    return () => {
      var H;
      const C = y.isLink.value ? "a" : e.tag, F = !!(e.appendIcon || e.appendAvatar), R = !!(F || l.append), N = !!(l.close || e.closable), O = !!(l.filter || e.filter) && f, $ = !!(e.prependIcon || e.prependAvatar), T = !!($ || l.prepend);
      return v.value && De(k(C, q(y.linkProps, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": m.value,
          "v-chip--filter": O,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && ((H = y.isActive) == null ? void 0 : H.value)
        }, d.value, r.value, S.value, o.value, s.value, u.value, c.value, A.value, f == null ? void 0 : f.selectedClass.value, e.class],
        style: [w.value, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: m.value ? 0 : void 0,
        onClick: P,
        onKeydown: m.value && !h.value && I
      }), {
        default: () => {
          var W;
          return [Xt(m.value, "v-chip"), O && k(xi, {
            key: "filter"
          }, {
            default: () => [De(L("div", {
              class: "v-chip__filter"
            }, [l.filter ? k(we, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : k(pe, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[Tt, f.isSelected.value]])]
          }), T && L("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !$,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : L(fe, null, [e.prependIcon && k(pe, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && k(bt, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), L("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((W = l.default) == null ? void 0 : W.call(l, {
            isSelected: f == null ? void 0 : f.isSelected.value,
            selectedClass: f == null ? void 0 : f.selectedClass.value,
            select: f == null ? void 0 : f.select,
            toggle: f == null ? void 0 : f.toggle,
            value: f == null ? void 0 : f.value.value,
            disabled: e.disabled
          })) ?? Lt(e.text)]), R && L("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? k(we, {
            key: "append-defaults",
            disabled: !F,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : L(fe, null, [e.appendIcon && k(pe, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && k(bt, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), N && L("button", q({
            key: "close",
            class: "v-chip__close",
            type: "button",
            "data-testid": "close-chip"
          }, b.value), [l.close ? k(we, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : k(pe, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[Qe, m.value && e.ripple, null]]);
    };
  }
}), ia = Symbol.for("vuetify:list");
function rr() {
  let {
    filterable: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    filterable: !1
  };
  const t = ge(ia, {
    filterable: !1,
    hasPrepend: j(!1),
    updateHasPrepend: () => null
  }), n = {
    filterable: t.filterable || e,
    hasPrepend: j(!1),
    updateHasPrepend: (a) => {
      a && (n.hasPrepend.value = a);
    }
  };
  return Ee(ia, n), t;
}
function or() {
  return ge(ia, null);
}
const Pa = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: a,
        value: l,
        activated: i
      } = n;
      return a = Ce(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (n, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (n != null)
        for (const r of Ne(n))
          i = t.activate({
            id: r,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, sr = (e) => {
  const t = Pa(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...r
      } = a;
      i = Ce(i);
      const o = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...r,
        id: i,
        activated: o
      });
    },
    in: (a, l, i) => {
      let r = /* @__PURE__ */ new Set();
      if (a != null) {
        const o = Ne(a);
        o.length && (r = t.in(o.slice(0, 1), l, i));
      }
      return r;
    },
    out: (a, l, i) => t.out(a, l, i)
  };
}, Ku = (e) => {
  const t = Pa(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: r,
        ...o
      } = a;
      return l = Ce(l), r.has(l) ? i : t.activate({
        id: l,
        activated: i,
        children: r,
        ...o
      });
    },
    in: t.in,
    out: t.out
  };
}, qu = (e) => {
  const t = sr(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: r,
        ...o
      } = a;
      return l = Ce(l), r.has(l) ? i : t.activate({
        id: l,
        activated: i,
        children: r,
        ...o
      });
    },
    in: t.in,
    out: t.out
  };
}, Xu = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      const i = /* @__PURE__ */ new Set();
      i.add(t);
      let r = l.get(t);
      for (; r != null; )
        i.add(r), r = l.get(r);
      return i;
    } else
      return a.delete(t), a;
  },
  select: () => null
}, ur = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      let i = l.get(t);
      for (a.add(t); i != null && i !== t; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(t);
    return a;
  },
  select: () => null
}, Qu = {
  open: ur.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (!n) return a;
    const i = [];
    let r = l.get(t);
    for (; r != null; )
      i.push(r), r = l.get(r);
    return new Set(i);
  }
}, Ma = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i
      } = n;
      if (a = Ce(a), e && !l) {
        const r = Array.from(i.entries()).reduce((o, s) => {
          let [u, c] = s;
          return c === "on" && o.push(u), o;
        }, []);
        if (r.length === 1 && r[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (n, a, l, i) => {
      const r = /* @__PURE__ */ new Map();
      for (const o of n || [])
        t.select({
          id: o,
          value: !0,
          selected: r,
          children: a,
          parents: l,
          disabled: i
        });
      return r;
    },
    out: (n) => {
      const a = [];
      for (const [l, i] of n.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return t;
}, cr = (e) => {
  const t = Ma(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...r
      } = a;
      i = Ce(i);
      const o = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...r,
        id: i,
        selected: o
      });
    },
    in: (a, l, i, r) => a != null && a.length ? t.in(a.slice(0, 1), l, i, r) : /* @__PURE__ */ new Map(),
    out: (a, l, i) => t.out(a, l, i)
  };
}, Ju = (e) => {
  const t = Ma(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: r,
        ...o
      } = a;
      return l = Ce(l), r.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: r,
        ...o
      });
    },
    in: t.in,
    out: t.out
  };
}, ec = (e) => {
  const t = cr(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: r,
        ...o
      } = a;
      return l = Ce(l), r.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: r,
        ...o
      });
    },
    in: t.in,
    out: t.out
  };
}, dr = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: r,
        parents: o,
        disabled: s
      } = n;
      a = Ce(a);
      const u = new Map(i), c = [a];
      for (; c.length; ) {
        const v = c.shift();
        s.has(v) || i.set(Ce(v), l ? "on" : "off"), r.has(v) && c.push(...r.get(v));
      }
      let d = Ce(o.get(a));
      for (; d; ) {
        let v = !0, f = !0;
        for (const g of r.get(d)) {
          const y = Ce(g);
          if (!s.has(y) && (i.get(y) !== "on" && (v = !1), i.has(y) && i.get(y) !== "off" && (f = !1), !v && !f))
            break;
        }
        i.set(d, v ? "on" : f ? "off" : "indeterminate"), d = Ce(o.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((f, g) => {
        let [y, h] = g;
        return h === "on" && f.push(y), f;
      }, []).length === 0 ? u : i;
    },
    in: (n, a, l, i) => {
      let r = /* @__PURE__ */ new Map();
      for (const o of n || [])
        r = t.select({
          id: o,
          value: !0,
          selected: r,
          children: a,
          parents: l,
          disabled: i
        });
      return r;
    },
    out: (n, a) => {
      const l = [];
      for (const [i, r] of n.entries())
        r === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return t;
}, tc = (e) => {
  const t = dr(e);
  return {
    select: t.select,
    in: t.in,
    out: (a, l, i) => {
      const r = [];
      for (const [o, s] of a.entries())
        if (s === "on") {
          if (i.has(o)) {
            const u = i.get(o);
            if (a.get(u) === "on") continue;
          }
          r.push(o);
        }
      return r;
    }
  };
}, Zt = Symbol.for("vuetify:nested"), fr = {
  id: j(),
  root: {
    register: () => null,
    unregister: () => null,
    children: U(/* @__PURE__ */ new Map()),
    parents: U(/* @__PURE__ */ new Map()),
    disabled: U(/* @__PURE__ */ new Set()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: U(!1),
    selectable: U(!1),
    opened: U(/* @__PURE__ */ new Set()),
    activated: U(/* @__PURE__ */ new Set()),
    selected: U(/* @__PURE__ */ new Map()),
    selectedValues: U([]),
    getPath: () => []
  }
}, nc = E({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), ac = (e) => {
  let t = !1;
  const n = j(/* @__PURE__ */ new Map()), a = j(/* @__PURE__ */ new Map()), l = j(/* @__PURE__ */ new Set()), i = me(e, "opened", e.opened, (h) => new Set(Array.isArray(h) ? h.map((m) => Ce(m)) : h), (h) => [...h.values()]), r = x(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Ku(e.mandatory);
      case "single-leaf":
        return qu(e.mandatory);
      case "independent":
        return Pa(e.mandatory);
      case "single-independent":
      default:
        return sr(e.mandatory);
    }
  }), o = x(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return ec(e.mandatory);
      case "leaf":
        return Ju(e.mandatory);
      case "independent":
        return Ma(e.mandatory);
      case "single-independent":
        return cr(e.mandatory);
      case "trunk":
        return tc(e.mandatory);
      case "classic":
      default:
        return dr(e.mandatory);
    }
  }), s = x(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Qu;
      case "single":
        return Xu;
      case "multiple":
      default:
        return ur;
    }
  }), u = me(e, "activated", e.activated, (h) => r.value.in(h, n.value, a.value), (h) => r.value.out(h, n.value, a.value)), c = me(e, "selected", e.selected, (h) => o.value.in(h, n.value, a.value, l.value), (h) => o.value.out(h, n.value, a.value));
  Ge(() => {
    t = !0;
  });
  function d(h) {
    const m = [];
    let b = Ce(h);
    for (; b !== void 0; )
      m.unshift(b), b = a.value.get(b);
    return m;
  }
  const v = he("nested"), f = /* @__PURE__ */ new Set(), g = To(() => {
    ve(() => {
      n.value = new Map(n.value), a.value = new Map(a.value);
    });
  }, 100), y = {
    id: j(),
    root: {
      opened: i,
      activatable: V(() => e.activatable),
      selectable: V(() => e.selectable),
      activated: u,
      selected: c,
      selectedValues: x(() => {
        const h = [];
        for (const [m, b] of c.value.entries())
          b === "on" && h.push(m);
        return h;
      }),
      register: (h, m, b, S) => {
        if (f.has(h)) {
          const w = d(h).map(String).join(" -> "), A = d(m).concat(h).map(String).join(" -> ");
          Rt(`Multiple nodes with the same ID
	${w}
	${A}`);
          return;
        } else
          f.add(h);
        m && h !== m && a.value.set(h, m), b && l.value.add(h), S && n.value.set(h, []), m != null && n.value.set(m, [...n.value.get(m) || [], h]), g();
      },
      unregister: (h) => {
        if (t) return;
        f.delete(h), n.value.delete(h), l.value.delete(h);
        const m = a.value.get(h);
        if (m) {
          const b = n.value.get(m) ?? [];
          n.value.set(m, b.filter((S) => S !== h));
        }
        a.value.delete(h), g();
      },
      open: (h, m, b) => {
        v.emit("click:open", {
          id: h,
          value: m,
          path: d(h),
          event: b
        });
        const S = s.value.open({
          id: h,
          value: m,
          opened: new Set(i.value),
          children: n.value,
          parents: a.value,
          event: b
        });
        S && (i.value = S);
      },
      openOnSelect: (h, m, b) => {
        const S = s.value.select({
          id: h,
          value: m,
          selected: new Map(c.value),
          opened: new Set(i.value),
          children: n.value,
          parents: a.value,
          event: b
        });
        S && (i.value = S);
      },
      select: (h, m, b) => {
        v.emit("click:select", {
          id: h,
          value: m,
          path: d(h),
          event: b
        });
        const S = o.value.select({
          id: h,
          value: m,
          selected: new Map(c.value),
          children: n.value,
          parents: a.value,
          disabled: l.value,
          event: b
        });
        S && (c.value = S), y.root.openOnSelect(h, m, b);
      },
      activate: (h, m, b) => {
        if (!e.activatable)
          return y.root.select(h, !0, b);
        v.emit("click:activate", {
          id: h,
          value: m,
          path: d(h),
          event: b
        });
        const S = r.value.activate({
          id: h,
          value: m,
          activated: new Set(u.value),
          children: n.value,
          parents: a.value,
          event: b
        });
        if (S.size !== u.value.size)
          u.value = S;
        else {
          for (const w of S)
            if (!u.value.has(w)) {
              u.value = S;
              return;
            }
          for (const w of u.value)
            if (!S.has(w)) {
              u.value = S;
              return;
            }
        }
      },
      children: n,
      parents: a,
      disabled: l,
      getPath: d
    }
  };
  return Ee(Zt, y), y.root;
}, vr = (e, t, n) => {
  const a = ge(Zt, fr), l = Symbol("nested item"), i = x(() => {
    const o = Ce(Ie(e));
    return o !== void 0 ? o : l;
  }), r = {
    ...a,
    id: i,
    open: (o, s) => a.root.open(i.value, o, s),
    openOnSelect: (o, s) => a.root.openOnSelect(i.value, o, s),
    isOpen: x(() => a.root.opened.value.has(i.value)),
    parent: x(() => a.root.parents.value.get(i.value)),
    activate: (o, s) => a.root.activate(i.value, o, s),
    isActivated: x(() => a.root.activated.value.has(i.value)),
    select: (o, s) => a.root.select(i.value, o, s),
    isSelected: x(() => a.root.selected.value.get(i.value) === "on"),
    isIndeterminate: x(() => a.root.selected.value.get(i.value) === "indeterminate"),
    isLeaf: x(() => !a.root.children.value.get(i.value)),
    isGroupActivator: a.isGroupActivator
  };
  return kn(() => {
    a.isGroupActivator || ve(() => {
      a.root.register(i.value, a.id.value, Ie(t), n);
    });
  }), Ge(() => {
    a.isGroupActivator || a.root.unregister(i.value);
  }), X(i, (o, s) => {
    a.isGroupActivator || (a.root.unregister(s), ve(() => {
      a.root.register(o, a.id.value, Ie(t), n);
    }));
  }), n && Ee(Zt, r), r;
}, lc = () => {
  const e = ge(Zt, fr);
  Ee(Zt, {
    ...e,
    isGroupActivator: !0
  });
};
function ic() {
  const e = j(!1);
  return Et(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: V(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: oa(e)
  };
}
const rc = Dt({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return lc(), () => {
      var a;
      return (a = n.default) == null ? void 0 : a.call(n);
    };
  }
}), oc = E({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ie,
    default: "$collapse"
  },
  disabled: Boolean,
  expandIcon: {
    type: ie,
    default: "$expand"
  },
  rawId: [String, Number],
  prependIcon: ie,
  appendIcon: ie,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...ne(),
  ...ye()
}, "VListGroup"), Bl = Y()({
  name: "VListGroup",
  props: oc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: l,
      id: i
    } = vr(() => e.value, () => e.disabled, !0), r = x(() => `v-list-group--id-${String(e.rawId ?? i.value)}`), o = or(), {
      isBooted: s
    } = ic();
    function u(f) {
      var g;
      ["INPUT", "TEXTAREA"].includes((g = f.target) == null ? void 0 : g.tagName) || l(!a.value, f);
    }
    const c = x(() => ({
      onClick: u,
      class: "v-list-group__header",
      id: r.value
    })), d = x(() => a.value ? e.collapseIcon : e.expandIcon), v = x(() => ({
      VListItem: {
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && d.value,
        appendIcon: e.appendIcon || !e.subgroup && d.value,
        title: e.title,
        value: e.value
      }
    }));
    return ee(() => k(e.tag, {
      class: K(["v-list-group", {
        "v-list-group--prepend": o == null ? void 0 : o.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class]),
      style: ae(e.style)
    }, {
      default: () => [n.activator && k(we, {
        defaults: v.value
      }, {
        default: () => [k(rc, null, {
          default: () => [n.activator({
            props: c.value,
            isOpen: a.value
          })]
        })]
      }), k(it, {
        transition: {
          component: Is
        },
        disabled: !s.value
      }, {
        default: () => {
          var f;
          return [De(L("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": r.value
          }, [(f = n.default) == null ? void 0 : f.call(n)]), [[Tt, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), sc = E({
  opacity: [Number, String],
  ...ne(),
  ...ye()
}, "VListItemSubtitle"), uc = Y()({
  name: "VListItemSubtitle",
  props: sc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => k(e.tag, {
      class: K(["v-list-item-subtitle", e.class]),
      style: ae([{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), cc = ma("v-list-item-title"), dc = E({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ie,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ie,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: null,
  onClick: Me(),
  onClickOnce: Me(),
  ...ot(),
  ...ne(),
  ...Ye(),
  ...et(),
  ...St(),
  ...ze(),
  ...An(),
  ...ye(),
  ...Se(),
  ...ut({
    variant: "text"
  })
}, "VListItem"), bn = Y()({
  name: "VListItem",
  directives: {
    vRipple: Qe
  },
  props: dc(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const i = Ln(e, n), r = x(() => e.value === void 0 ? i.href.value : e.value), {
      activate: o,
      isActivated: s,
      select: u,
      isOpen: c,
      isSelected: d,
      isIndeterminate: v,
      isGroupActivator: f,
      root: g,
      parent: y,
      openOnSelect: h,
      id: m
    } = vr(r, () => e.disabled, !1), b = or(), S = x(() => {
      var _;
      return e.active !== !1 && (e.active || ((_ = i.isActive) == null ? void 0 : _.value) || (g.activatable.value ? s.value : d.value));
    }), w = V(() => e.link !== !1 && i.isLink.value), A = x(() => !!b && (g.selectable.value || g.activatable.value || e.value != null)), P = x(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || A.value)), I = x(() => b ? w.value ? "link" : A.value ? "option" : "listitem" : void 0), C = x(() => {
      if (A.value)
        return g.activatable.value ? s.value : g.selectable.value ? d.value : S.value;
    }), F = V(() => e.rounded || e.nav), R = V(() => e.color ?? e.activeColor), N = V(() => ({
      color: S.value ? R.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    X(() => {
      var _;
      return (_ = i.isActive) == null ? void 0 : _.value;
    }, (_) => {
      _ && O();
    }), kn(() => {
      var _;
      (_ = i.isActive) != null && _.value && ve(() => O());
    });
    function O() {
      y.value != null && g.open(y.value, !0), h(!0);
    }
    const {
      themeClasses: $
    } = Le(e), {
      borderClasses: T
    } = st(e), {
      colorClasses: H,
      colorStyles: W,
      variantClasses: Z
    } = Qt(N), {
      densityClasses: J
    } = at(e), {
      dimensionStyles: le
    } = tt(e), {
      elevationClasses: B
    } = Ct(e), {
      roundedClasses: G
    } = We(F), M = V(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), p = V(() => e.ripple !== void 0 && e.ripple && (b != null && b.filterable) ? {
      keys: ["Enter"]
    } : e.ripple), D = x(() => ({
      isActive: S.value,
      select: u,
      isOpen: c.value,
      isSelected: d.value,
      isIndeterminate: v.value
    }));
    function te(_) {
      var z, se;
      l("click", _), !["INPUT", "TEXTAREA"].includes((z = _.target) == null ? void 0 : z.tagName) && P.value && ((se = i.navigate) == null || se.call(i, _), !f && (g.activatable.value ? o(!s.value, _) : (g.selectable.value || e.value != null && !w.value) && u(!d.value, _)));
    }
    function ue(_) {
      const z = _.target;
      ["INPUT", "TEXTAREA"].includes(z.tagName) || (_.key === "Enter" || _.key === " " && !(b != null && b.filterable)) && (_.preventDefault(), _.stopPropagation(), _.target.dispatchEvent(new MouseEvent("click", _)));
    }
    return ee(() => {
      const _ = w.value ? "a" : e.tag, z = a.title || e.title != null, se = a.subtitle || e.subtitle != null, de = !!(e.appendAvatar || e.appendIcon), Ae = !!(de || a.append), ce = !!(e.prependAvatar || e.prependIcon), xe = !!(ce || a.prepend);
      return b == null || b.updateHasPrepend(xe), e.activeColor && jl("active-color", ["color", "base-color"]), De(k(_, q(i.linkProps, {
        class: ["v-list-item", {
          "v-list-item--active": S.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": P.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !xe && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && S.value
        }, $.value, T.value, H.value, J.value, B.value, M.value, G.value, Z.value, e.class],
        style: [W.value, le.value, e.style],
        tabindex: P.value ? b ? -2 : 0 : void 0,
        "aria-selected": C.value,
        role: I.value,
        onClick: te,
        onKeydown: P.value && !w.value && ue
      }), {
        default: () => {
          var be;
          return [Xt(P.value || S.value, "v-list-item"), xe && L("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !ce,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var re;
              return [(re = a.prepend) == null ? void 0 : re.call(a, D.value)];
            }
          }) : L(fe, null, [e.prependAvatar && k(bt, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && k(pe, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), L("div", {
            class: "v-list-item__spacer"
          }, null)]), L("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [z && k(cc, {
            key: "title"
          }, {
            default: () => {
              var re;
              return [((re = a.title) == null ? void 0 : re.call(a, {
                title: e.title
              })) ?? Lt(e.title)];
            }
          }), se && k(uc, {
            key: "subtitle"
          }, {
            default: () => {
              var re;
              return [((re = a.subtitle) == null ? void 0 : re.call(a, {
                subtitle: e.subtitle
              })) ?? Lt(e.subtitle)];
            }
          }), (be = a.default) == null ? void 0 : be.call(a, D.value)]), Ae && L("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? k(we, {
            key: "append-defaults",
            disabled: !de,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var re;
              return [(re = a.append) == null ? void 0 : re.call(a, D.value)];
            }
          }) : L(fe, null, [e.appendIcon && k(pe, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && k(bt, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), L("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[Qe, P.value && p.value]]);
    }), {
      activate: o,
      isActivated: s,
      isGroupActivator: f,
      isSelected: d,
      list: b,
      select: u,
      root: g,
      id: m,
      link: i
    };
  }
}), fc = E({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ne(),
  ...ye()
}, "VListSubheader"), mr = Y()({
  name: "VListSubheader",
  props: fc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Xe(() => e.color);
    return ee(() => {
      const i = !!(n.default || e.title);
      return k(e.tag, {
        class: K(["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class]),
        style: ae([{
          textColorStyles: l
        }, e.style])
      }, {
        default: () => {
          var r;
          return [i && L("div", {
            class: "v-list-subheader__text"
          }, [((r = n.default) == null ? void 0 : r.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
}), vc = E({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), gr = Y()({
  name: "VListChildren",
  props: vc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return rr(), () => {
      var a, l;
      return ((a = n.default) == null ? void 0 : a.call(n)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var v, f;
        let {
          children: r,
          props: o,
          type: s,
          raw: u
        } = i;
        if (s === "divider")
          return ((v = n.divider) == null ? void 0 : v.call(n, {
            props: o
          })) ?? k(zi, o, null);
        if (s === "subheader")
          return ((f = n.subheader) == null ? void 0 : f.call(n, {
            props: o
          })) ?? k(mr, o, null);
        const c = {
          subtitle: n.subtitle ? (g) => {
            var y;
            return (y = n.subtitle) == null ? void 0 : y.call(n, {
              ...g,
              item: u
            });
          } : void 0,
          prepend: n.prepend ? (g) => {
            var y;
            return (y = n.prepend) == null ? void 0 : y.call(n, {
              ...g,
              item: u
            });
          } : void 0,
          append: n.append ? (g) => {
            var y;
            return (y = n.append) == null ? void 0 : y.call(n, {
              ...g,
              item: u
            });
          } : void 0,
          title: n.title ? (g) => {
            var y;
            return (y = n.title) == null ? void 0 : y.call(n, {
              ...g,
              item: u
            });
          } : void 0
        }, d = Bl.filterProps(o);
        return r ? k(Bl, q(d, {
          value: e.returnObject ? u : o == null ? void 0 : o.value,
          rawId: o == null ? void 0 : o.value
        }), {
          activator: (g) => {
            let {
              props: y
            } = g;
            const h = q(o, y, {
              value: e.returnObject ? u : o.value
            });
            return n.header ? n.header({
              props: h
            }) : k(bn, h, c);
          },
          default: () => k(gr, {
            items: r,
            returnObject: e.returnObject
          }, n)
        }) : n.item ? n.item({
          props: o
        }) : k(bn, q(o, {
          value: e.returnObject ? u : o.value
        }), c);
      }));
    };
  }
}), hr = E({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  itemType: {
    type: [Boolean, String, Array, Function],
    default: "type"
  },
  returnObject: Boolean,
  valueComparator: Function
}, "list-items"), mc = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Vt(e, t) {
  const n = Re(t, e.itemTitle, t), a = Re(t, e.itemValue, n), l = Re(t, e.itemChildren), i = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Je(t, ["children"]) : t : void 0 : Re(t, e.itemProps);
  let r = Re(t, e.itemType, "item");
  mc.has(r) || (r = "item");
  const o = {
    title: n,
    value: a,
    ...i
  };
  return {
    type: r,
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: r === "item" && Array.isArray(l) ? yr(e, l) : void 0,
    raw: t
  };
}
Vt.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function yr(e, t) {
  const n = xn(e, Vt.neededProps), a = [];
  for (const l of t)
    a.push(Vt(n, l));
  return a;
}
function gc(e) {
  const t = x(() => yr(e, e.items)), n = x(() => t.value.some((o) => o.value === null)), a = j(/* @__PURE__ */ new Map()), l = j([]);
  Oe(() => {
    const o = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      if (ht(d.value) || d.value === null) {
        let v = s.get(d.value);
        v || (v = [], s.set(d.value, v)), v.push(d);
      } else
        u.push(d);
    }
    a.value = s, l.value = u;
  });
  function i(o) {
    const s = a.value, u = t.value, c = l.value, d = n.value, v = e.returnObject, f = !!e.valueComparator, g = e.valueComparator || He, y = xn(e, Vt.neededProps), h = [];
    e: for (const m of o) {
      if (!d && m === null) continue;
      if (v && typeof m == "string") {
        h.push(Vt(y, m));
        continue;
      }
      const b = s.get(m);
      if (f || !b) {
        for (const S of f ? u : c)
          if (g(m, S.value)) {
            h.push(S);
            continue e;
          }
        h.push(Vt(y, m));
        continue;
      }
      h.push(...b);
    }
    return h;
  }
  function r(o) {
    return e.returnObject ? o.map((s) => {
      let {
        raw: u
      } = s;
      return u;
    }) : o.map((s) => {
      let {
        value: u
      } = s;
      return u;
    });
  }
  return {
    items: t,
    transformIn: i,
    transformOut: r
  };
}
const hc = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function yc(e, t) {
  const n = ht(t) ? t : Re(t, e.itemTitle), a = ht(t) ? t : Re(t, e.itemValue, void 0), l = Re(t, e.itemChildren), i = e.itemProps === !0 ? Je(t, ["children"]) : Re(t, e.itemProps);
  let r = Re(t, e.itemType, "item");
  hc.has(r) || (r = "item");
  const o = {
    title: n,
    value: a,
    ...i
  };
  return {
    type: r,
    title: o.title,
    value: o.value,
    props: o,
    children: r === "item" && l ? br(e, l) : void 0,
    raw: t
  };
}
function br(e, t) {
  const n = [];
  for (const a of t)
    n.push(yc(e, a));
  return n;
}
function bc(e) {
  return {
    items: x(() => br(e, e.items))
  };
}
const Sc = E({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: ie,
  collapseIcon: ie,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Me(),
  "onClick:select": Me(),
  "onUpdate:opened": Me(),
  ...nc({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...ot(),
  ...ne(),
  ...Ye(),
  ...et(),
  ...St(),
  ...hr(),
  ...ze(),
  ...ye(),
  ...Se(),
  ...ut({
    variant: "text"
  })
}, "VList"), Cc = Y()({
  name: "VList",
  props: Sc(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a
    } = bc(e), {
      themeClasses: l
    } = Le(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: r
    } = qe(() => e.bgColor), {
      borderClasses: o
    } = st(e), {
      densityClasses: s
    } = at(e), {
      dimensionStyles: u
    } = tt(e), {
      elevationClasses: c
    } = Ct(e), {
      roundedClasses: d
    } = We(e), {
      children: v,
      open: f,
      parents: g,
      select: y,
      getPath: h
    } = ac(e), m = V(() => e.lines ? `v-list--${e.lines}-line` : void 0), b = V(() => e.activeColor), S = V(() => e.baseColor), w = V(() => e.color), A = V(() => e.selectable || e.activatable);
    rr({
      filterable: e.filterable
    }), Ot({
      VListGroup: {
        activeColor: b,
        baseColor: S,
        color: w,
        expandIcon: V(() => e.expandIcon),
        collapseIcon: V(() => e.collapseIcon)
      },
      VListItem: {
        activeClass: V(() => e.activeClass),
        activeColor: b,
        baseColor: S,
        color: w,
        density: V(() => e.density),
        disabled: V(() => e.disabled),
        lines: V(() => e.lines),
        nav: V(() => e.nav),
        slim: V(() => e.slim),
        variant: V(() => e.variant)
      }
    });
    const P = j(!1), I = U();
    function C(T) {
      P.value = !0;
    }
    function F(T) {
      P.value = !1;
    }
    function R(T) {
      var H;
      !P.value && !(T.relatedTarget && ((H = I.value) != null && H.contains(T.relatedTarget))) && $();
    }
    function N(T) {
      const H = T.target;
      if (!(!I.value || H.tagName === "INPUT" && ["Home", "End"].includes(T.key) || H.tagName === "TEXTAREA")) {
        if (T.key === "ArrowDown")
          $("next");
        else if (T.key === "ArrowUp")
          $("prev");
        else if (T.key === "Home")
          $("first");
        else if (T.key === "End")
          $("last");
        else
          return;
        T.preventDefault();
      }
    }
    function O(T) {
      P.value = !0;
    }
    function $(T) {
      if (I.value)
        return $t(I.value, T);
    }
    return ee(() => k(e.tag, {
      ref: I,
      class: K(["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, o.value, s.value, c.value, m.value, d.value, e.class]),
      style: ae([r.value, u.value, e.style]),
      tabindex: e.disabled ? -1 : 0,
      role: A.value ? "listbox" : "list",
      "aria-activedescendant": void 0,
      onFocusin: C,
      onFocusout: F,
      onFocus: R,
      onKeydown: N,
      onMousedown: O
    }, {
      default: () => [k(gr, {
        items: a.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: f,
      select: y,
      focus: $,
      children: v,
      parents: g,
      getPath: h
    };
  }
}), wc = E({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ne(),
  ...qt({
    transition: {
      component: ki
    }
  })
}, "VCounter"), pc = Y()({
  name: "VCounter",
  functional: !0,
  props: wc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = V(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return ee(() => k(it, {
      transition: e.transition
    }, {
      default: () => [De(L("div", {
        class: K(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: ae(e.style)
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Tt, e.active]])]
    })), {};
  }
}), kc = E({
  floating: Boolean,
  ...ne()
}, "VFieldLabel"), rn = Y()({
  name: "VFieldLabel",
  props: kc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => k(Gi, {
      class: K(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: ae(e.style)
    }, n)), {};
  }
}), xc = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Sr = E({
  appendInnerIcon: ie,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ie,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  details: Boolean,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: ie,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => xc.includes(e)
  },
  "onClick:clear": Me(),
  "onClick:appendInner": Me(),
  "onClick:prependInner": Me(),
  ...ne(),
  ...xa(),
  ...ze(),
  ...Se()
}, "VField"), Fl = Y()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...qi(),
    ...Sr()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      themeClasses: i
    } = Le(e), {
      loaderClasses: r
    } = Va(e), {
      focusClasses: o,
      isFocused: s,
      focus: u,
      blur: c
    } = Xi(e), {
      InputIcon: d
    } = Ki(e), {
      roundedClasses: v
    } = We(e), {
      rtlClasses: f
    } = nt(), g = V(() => e.dirty || e.active), y = V(() => !!(e.label || l.label)), h = V(() => !e.singleLine && y.value), m = Ze(), b = x(() => e.id || `input-${m}`), S = V(() => e.details ? `${b.value}-messages` : void 0), w = U(), A = U(), P = U(), I = x(() => ["plain", "underlined"].includes(e.variant)), C = x(() => e.error || e.disabled ? void 0 : g.value && s.value ? e.color : e.baseColor), F = x(() => {
      if (!(!e.iconColor || e.glow && !s.value))
        return e.iconColor === !0 ? C.value : e.iconColor;
    }), {
      backgroundColorClasses: R,
      backgroundColorStyles: N
    } = qe(() => e.bgColor), {
      textColorClasses: O,
      textColorStyles: $
    } = Xe(C);
    X(g, (W) => {
      if (h.value && !At()) {
        const Z = w.value.$el, J = A.value.$el;
        requestAnimationFrame(() => {
          const le = da(Z), B = J.getBoundingClientRect(), G = B.x - le.x, M = B.y - le.y - (le.height / 2 - B.height / 2), p = B.width / 0.75, D = Math.abs(p - le.width) > 1 ? {
            maxWidth: Q(p)
          } : void 0, te = getComputedStyle(Z), ue = getComputedStyle(J), _ = parseFloat(te.transitionDuration) * 1e3 || 150, z = parseFloat(ue.getPropertyValue("--v-field-label-scale")), se = ue.getPropertyValue("color");
          Z.style.visibility = "visible", J.style.visibility = "hidden", lt(Z, {
            transform: `translate(${G}px, ${M}px) scale(${z})`,
            color: se,
            ...D
          }, {
            duration: _,
            easing: fn,
            direction: W ? "normal" : "reverse"
          }).finished.then(() => {
            Z.style.removeProperty("visibility"), J.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const T = x(() => ({
      isActive: g,
      isFocused: s,
      controlRef: P,
      blur: c,
      focus: u
    }));
    function H(W) {
      W.target !== document.activeElement && W.preventDefault();
    }
    return ee(() => {
      var G, M, p;
      const W = e.variant === "outlined", Z = !!(l["prepend-inner"] || e.prependInnerIcon), J = !!(e.clearable || l.clear) && !e.disabled, le = !!(l["append-inner"] || e.appendInnerIcon || J), B = () => l.label ? l.label({
        ...T.value,
        label: e.label,
        props: {
          for: b.value
        }
      }) : e.label;
      return L("div", q({
        class: ["v-field", {
          "v-field--active": g.value,
          "v-field--appended": le,
          "v-field--center-affix": e.centerAffix ?? !I.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--glow": e.glow,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": Z,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !B(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, R.value, o.value, r.value, v.value, f.value, e.class],
        style: [N.value, e.style],
        onClick: H
      }, n), [L("div", {
        class: "v-field__overlay"
      }, null), k(Ei, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), Z && L("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && k(d, {
        key: "prepend-icon",
        name: "prependInner",
        color: F.value
      }, null), (G = l["prepend-inner"]) == null ? void 0 : G.call(l, T.value)]), L("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && k(rn, {
        key: "floating-label",
        ref: A,
        class: K([O.value]),
        floating: !0,
        for: b.value,
        "aria-hidden": !g.value,
        style: ae($.value)
      }, {
        default: () => [B()]
      }), y.value && k(rn, {
        key: "label",
        ref: w,
        for: b.value
      }, {
        default: () => [B()]
      }), ((M = l.default) == null ? void 0 : M.call(l, {
        ...T.value,
        props: {
          id: b.value,
          class: "v-field__input",
          "aria-describedby": S.value
        },
        focus: u,
        blur: c
      })) ?? L("div", {
        id: b.value,
        class: "v-field__input",
        "aria-describedby": S.value
      }, null)]), J && k(xi, {
        key: "clear"
      }, {
        default: () => [De(L("div", {
          class: "v-field__clearable",
          onMousedown: (D) => {
            D.preventDefault(), D.stopPropagation();
          }
        }, [k(we, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...T.value,
            props: {
              onFocus: u,
              onBlur: c,
              onClick: e["onClick:clear"],
              tabindex: -1
            }
          }) : k(d, {
            name: "clear",
            onFocus: u,
            onBlur: c,
            tabindex: -1
          }, null)]
        })]), [[Tt, e.dirty]])]
      }), le && L("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(p = l["append-inner"]) == null ? void 0 : p.call(l, T.value), e.appendInnerIcon && k(d, {
        key: "append-icon",
        name: "appendInner",
        color: F.value
      }, null)]), L("div", {
        class: K(["v-field__outline", O.value]),
        style: ae($.value)
      }, [W && L(fe, null, [L("div", {
        class: "v-field__outline__start"
      }, null), h.value && L("div", {
        class: "v-field__outline__notch"
      }, [k(rn, {
        ref: A,
        floating: !0,
        for: b.value,
        "aria-hidden": !g.value
      }, {
        default: () => [B()]
      })]), L("div", {
        class: "v-field__outline__end"
      }, null)]), I.value && h.value && k(rn, {
        ref: A,
        floating: !0,
        for: b.value,
        "aria-hidden": !g.value
      }, {
        default: () => [B()]
      })])]);
    }), {
      controlRef: P,
      fieldIconColor: F
    };
  }
}), Vc = E({
  autocomplete: String
}, "autocomplete");
function Lc(e) {
  const t = Ze(), n = j(0), a = V(() => e.autocomplete === "suppress"), l = V(() => a.value ? `${e.name}-${t}-${n.value}` : e.name), i = V(() => a.value ? "off" : e.autocomplete);
  return {
    isSuppressing: a,
    fieldAutocomplete: i,
    fieldName: l,
    update: () => n.value = (/* @__PURE__ */ new Date()).getTime()
  };
}
function Ac(e) {
  function t(n, a) {
    var l, i;
    !e.autofocus || !n || (i = (l = a[0].target) == null ? void 0 : l.focus) == null || i.call(l);
  }
  return {
    onIntersect: t
  };
}
const Ic = ["color", "file", "time", "date", "datetime-local", "week", "month"], Cr = E({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Vc(),
  ...Qi(),
  ...Sr()
}, "VTextField"), $l = Y()({
  name: "VTextField",
  directives: {
    vIntersect: yn
  },
  inheritAttrs: !1,
  props: Cr(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const i = me(e, "modelValue"), {
      isFocused: r,
      focus: o,
      blur: s
    } = Xi(e), {
      onIntersect: u
    } = Ac(e), c = x(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = x(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = x(() => ["plain", "underlined"].includes(e.variant)), f = U(), g = U(), y = U(), h = Lc(e), m = x(() => Ic.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
    function b() {
      h.isSuppressing.value && h.update(), r.value || o(), ve(() => {
        var I;
        y.value !== document.activeElement && ((I = y.value) == null || I.focus());
      });
    }
    function S(I) {
      a("mousedown:control", I), I.target !== y.value && (b(), I.preventDefault());
    }
    function w(I) {
      a("click:control", I);
    }
    function A(I, C) {
      I.stopPropagation(), b(), ve(() => {
        C(), ti(e["onClick:clear"], I);
      });
    }
    function P(I) {
      var F;
      const C = I.target;
      if (i.value = C.value, (F = e.modelModifiers) != null && F.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const R = [C.selectionStart, C.selectionEnd];
        ve(() => {
          C.selectionStart = R[0], C.selectionEnd = R[1];
        });
      }
    }
    return ee(() => {
      const I = !!(l.counter || e.counter !== !1 && e.counter != null), C = !!(I || l.details), [F, R] = Ql(n), {
        modelValue: N,
        ...O
      } = Tl.filterProps(e), $ = Fl.filterProps(e);
      return k(Tl, q({
        ref: f,
        modelValue: i.value,
        "onUpdate:modelValue": (T) => i.value = T,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": v.value
        }, e.class],
        style: e.style
      }, F, O, {
        centerAffix: !v.value,
        focused: r.value
      }), {
        ...l,
        default: (T) => {
          let {
            id: H,
            isDisabled: W,
            isDirty: Z,
            isReadonly: J,
            isValid: le,
            hasDetails: B,
            reset: G
          } = T;
          return k(Fl, q({
            ref: g,
            onMousedown: S,
            onClick: w,
            "onClick:clear": (M) => A(M, G),
            role: e.role
          }, Je($, ["onClick:clear"]), {
            id: H.value,
            active: m.value || Z.value,
            dirty: Z.value || e.dirty,
            disabled: W.value,
            focused: r.value,
            details: B.value,
            error: le.value === !1
          }), {
            ...l,
            default: (M) => {
              let {
                props: {
                  class: p,
                  ...D
                },
                controlRef: te
              } = M;
              const ue = De(L("input", q({
                ref: (_) => y.value = te.value = _,
                value: i.value,
                onInput: P,
                autofocus: e.autofocus,
                readonly: J.value,
                disabled: W.value,
                name: h.fieldName.value,
                autocomplete: h.fieldAutocomplete.value,
                placeholder: e.placeholder,
                size: 1,
                role: e.role,
                type: e.type,
                onFocus: o,
                onBlur: s
              }, D, R), null), [[yn, {
                handler: u
              }, null, {
                once: !0
              }]]);
              return L(fe, null, [e.prefix && L("span", {
                class: "v-text-field__prefix"
              }, [L("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? L("div", {
                class: K(p),
                "data-no-activator": ""
              }, [l.default(), ue]) : $r(ue, {
                class: p
              }), e.suffix && L("span", {
                class: "v-text-field__suffix"
              }, [L("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: C ? (T) => {
          var H;
          return L(fe, null, [(H = l.details) == null ? void 0 : H.call(l, T), I && L(fe, null, [L("span", null, null), k(pc, {
            active: e.persistentCounter || r.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), _t({}, f, g, y);
  }
}), Pc = E({
  renderless: Boolean,
  ...ne()
}, "VVirtualScrollItem"), Mc = Y()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Pc(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      resizeRef: i,
      contentRect: r
    } = yt(void 0, "border");
    X(() => {
      var o;
      return (o = r.value) == null ? void 0 : o.height;
    }, (o) => {
      o != null && a("update:height", o);
    }), ee(() => {
      var o, s;
      return e.renderless ? L(fe, null, [(o = l.default) == null ? void 0 : o.call(l, {
        itemRef: i
      })]) : L("div", q({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, n), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), Ec = -1, Tc = 1, jn = 100, Oc = E({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  itemKey: {
    type: [String, Array, Function],
    default: null
  },
  height: [Number, String]
}, "virtual");
function Dc(e, t) {
  const n = ba(), a = j(0);
  Oe(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = j(0), i = j(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (a.value || 16)
  ) || 1), r = j(0), o = j(0), s = U(), u = U();
  let c = 0;
  const {
    resizeRef: d,
    contentRect: v
  } = yt();
  Oe(() => {
    d.value = s.value;
  });
  const f = x(() => {
    var B;
    return s.value === document.documentElement ? n.height.value : ((B = v.value) == null ? void 0 : B.height) || parseInt(e.height) || 0;
  }), g = x(() => !!(s.value && u.value && f.value && a.value));
  let y = Array.from({
    length: t.value.length
  }), h = Array.from({
    length: t.value.length
  });
  const m = j(0);
  let b = -1;
  function S(B) {
    return y[B] || a.value;
  }
  const w = jr(() => {
    const B = performance.now();
    h[0] = 0;
    const G = t.value.length;
    for (let M = 1; M <= G; M++)
      h[M] = (h[M - 1] || 0) + S(M - 1);
    m.value = Math.max(m.value, performance.now() - B);
  }, m), A = X(g, (B) => {
    B && (A(), c = u.value.offsetTop, w.immediate(), W(), ~b && ve(() => {
      oe && window.requestAnimationFrame(() => {
        J(b), b = -1;
      });
    }));
  });
  ke(() => {
    w.clear();
  });
  function P(B, G) {
    const M = y[B], p = a.value;
    a.value = p ? Math.min(a.value, G) : G, (M !== G || p !== a.value) && (y[B] = G, w());
  }
  function I(B) {
    B = $e(B, 0, t.value.length);
    const G = Math.floor(B), M = B % 1, p = G + 1, D = h[G] || 0, te = h[p] || D;
    return D + (te - D) * M;
  }
  function C(B) {
    return _c(h, B);
  }
  let F = 0, R = 0, N = 0;
  X(f, (B, G) => {
    G && (W(), B < G && requestAnimationFrame(() => {
      R = 0, W();
    }));
  });
  let O = -1;
  function $() {
    if (!s.value || !u.value) return;
    const B = s.value.scrollTop, G = performance.now();
    G - N > 500 ? (R = Math.sign(B - F), c = u.value.offsetTop) : R = B - F, F = B, N = G, window.clearTimeout(O), O = window.setTimeout(T, 500), W();
  }
  function T() {
    !s.value || !u.value || (R = 0, N = 0, window.clearTimeout(O), W());
  }
  let H = -1;
  function W() {
    cancelAnimationFrame(H), H = requestAnimationFrame(Z);
  }
  function Z() {
    if (!s.value || !f.value || !a.value) return;
    const B = F - c, G = Math.sign(R), M = Math.max(0, B - jn), p = $e(C(M), 0, t.value.length), D = B + f.value + jn, te = $e(C(D) + 1, p + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (G !== Ec || p < l.value) && (G !== Tc || te > i.value)
    ) {
      const ue = I(l.value) - I(p), _ = I(te) - I(i.value);
      Math.max(ue, _) > jn ? (l.value = p, i.value = te) : (p <= 0 && (l.value = p), te >= t.value.length && (i.value = te));
    }
    r.value = I(l.value), o.value = I(t.value.length) - I(i.value);
  }
  function J(B) {
    const G = I(B);
    !s.value || B && !G ? b = B : s.value.scrollTop = G;
  }
  const le = x(() => t.value.slice(l.value, i.value).map((B, G) => {
    const M = G + l.value;
    return {
      raw: B,
      index: M,
      key: Re(B, e.itemKey, M)
    };
  }));
  return X(t, () => {
    y = Array.from({
      length: t.value.length
    }), h = Array.from({
      length: t.value.length
    }), w.immediate(), W();
  }, {
    deep: 1
  }), {
    calculateVisibleItems: W,
    containerRef: s,
    markerRef: u,
    computedItems: le,
    paddingTop: r,
    paddingBottom: o,
    scrollToIndex: J,
    handleScroll: $,
    handleScrollend: T,
    handleItemResize: P
  };
}
function _c(e, t) {
  let n = e.length - 1, a = 0, l = 0, i = null, r = -1;
  if (e[n] < t)
    return n;
  for (; a <= n; )
    if (l = a + n >> 1, i = e[l], i > t)
      n = l - 1;
    else if (i < t)
      r = l, a = l + 1;
    else return i === t ? l : a;
  return r;
}
const Bc = E({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...Oc(),
  ...ne(),
  ...et()
}, "VVirtualScroll"), Fc = Y()({
  name: "VVirtualScroll",
  props: Bc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = he("VVirtualScroll"), {
      dimensionStyles: l
    } = tt(e), {
      calculateVisibleItems: i,
      containerRef: r,
      markerRef: o,
      handleScroll: s,
      handleScrollend: u,
      handleItemResize: c,
      scrollToIndex: d,
      paddingTop: v,
      paddingBottom: f,
      computedItems: g
    } = Dc(e, V(() => e.items));
    return rt(() => e.renderless, () => {
      function y() {
        var b, S;
        const m = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        r.value === document.documentElement ? (document[m]("scroll", s, {
          passive: !0
        }), document[m]("scrollend", u)) : ((b = r.value) == null || b[m]("scroll", s, {
          passive: !0
        }), (S = r.value) == null || S[m]("scrollend", u));
      }
      Et(() => {
        r.value = fi(a.vnode.el, !0), y(!0);
      }), ke(y);
    }), ee(() => {
      const y = g.value.map((h) => k(Mc, {
        key: h.key,
        renderless: e.renderless,
        "onUpdate:height": (m) => c(h.index, m)
      }, {
        default: (m) => {
          var b;
          return (b = n.default) == null ? void 0 : b.call(n, {
            item: h.raw,
            index: h.index,
            ...m
          });
        }
      }));
      return e.renderless ? L(fe, null, [L("div", {
        ref: o,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: Q(v.value)
        }
      }, null), y, L("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: Q(f.value)
        }
      }, null)]) : L("div", {
        ref: r,
        class: K(["v-virtual-scroll", e.class]),
        onScrollPassive: s,
        onScrollend: u,
        style: ae([l.value, e.style])
      }, [L("div", {
        ref: o,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: Q(v.value),
          paddingBottom: Q(f.value)
        }
      }, [y])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: d
    };
  }
});
function $c(e, t) {
  const n = j(!1);
  let a;
  function l(o) {
    cancelAnimationFrame(a), n.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => {
      if (n.value) {
        const s = X(n, () => {
          s(), o();
        });
      } else o();
    });
  }
  async function r(o) {
    var c, d;
    if (o.key === "Tab" && ((c = t.value) == null || c.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o.key)) return;
    const s = (d = e.value) == null ? void 0 : d.$el;
    if (!s) return;
    (o.key === "Home" || o.key === "End") && s.scrollTo({
      top: o.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const u = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (o.key === "PageDown" || o.key === "Home") {
      const v = s.getBoundingClientRect().top;
      for (const f of u)
        if (f.getBoundingClientRect().top >= v) {
          f.focus();
          break;
        }
    } else {
      const v = s.getBoundingClientRect().bottom;
      for (const f of [...u].reverse())
        if (f.getBoundingClientRect().bottom <= v) {
          f.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: l,
    onKeydown: r
  };
}
const Hc = E({
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  }
}, "autocomplete");
function Rc(e, t) {
  const {
    t: n
  } = Vn(), a = Ze(), l = x(() => `menu-${a}`), i = V(() => Ie(t)), r = V(() => l.value), o = V(() => n(Ie(t) ? e.closeText : e.openText));
  return {
    menuId: l,
    ariaExpanded: i,
    ariaControls: r,
    ariaLabel: o
  };
}
const Nc = E({
  chips: Boolean,
  closableChips: Boolean,
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: ie,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  noAutoScroll: Boolean,
  ...Hc(),
  ...hr({
    itemChildren: !1
  })
}, "Select"), zc = E({
  ...Nc(),
  ...Je(Cr({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...qt({
    transition: {
      component: Ca
    }
  })
}, "VSelect"), Rd = Y()({
  name: "VSelect",
  props: zc(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Vn(), l = U(), i = U(), r = U(), {
      items: o,
      transformIn: s,
      transformOut: u
    } = gc(e), c = me(e, "modelValue", [], (p) => s(p === null ? [null] : Ne(p)), (p) => {
      const D = u(p);
      return e.multiple ? D : D[0] ?? null;
    }), d = x(() => typeof e.counterValue == "function" ? e.counterValue(c.value) : typeof e.counterValue == "number" ? e.counterValue : c.value.length), v = ji(e), f = x(() => c.value.map((p) => p.value)), g = j(!1);
    let y = "", h = -1, m;
    const b = x(() => e.hideSelected ? o.value.filter((p) => !c.value.some((D) => (e.valueComparator || He)(D, p))) : o.value), S = x(() => e.hideNoData && !b.value.length || v.isReadonly.value || v.isDisabled.value), w = me(e, "menu"), A = x({
      get: () => w.value,
      set: (p) => {
        var D;
        w.value && !p && ((D = i.value) != null && D.ΨopenChildren.size) || p && S.value || (w.value = p);
      }
    }), {
      menuId: P,
      ariaExpanded: I,
      ariaControls: C,
      ariaLabel: F
    } = Rc(e, A), R = x(() => {
      var p;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((p = e.menuProps) == null ? void 0 : p.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), N = U(), O = $c(N, l);
    function $(p) {
      e.openOnClear && (A.value = !0);
    }
    function T() {
      S.value || (A.value = !A.value);
    }
    function H(p) {
      Wa(p) && W(p);
    }
    function W(p) {
      var ce, xe, be;
      if (!p.key || v.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(p.key) && p.preventDefault(), ["Enter", "ArrowDown", " "].includes(p.key) && (A.value = !0), ["Escape", "Tab"].includes(p.key) && (A.value = !1), p.key === "Home" ? (ce = N.value) == null || ce.focus("first") : p.key === "End" && ((xe = N.value) == null || xe.focus("last"));
      const D = 1e3;
      if (!Wa(p)) return;
      const te = performance.now();
      te - m > D && (y = "", h = -1), y += p.key.toLowerCase(), m = te;
      const ue = b.value;
      function _() {
        let re = z();
        return re || y.at(-1) === y.at(-2) && (y = y.slice(0, -1), re = z(), re) || (h = -1, re = z(), re) ? re : (y = p.key.toLowerCase(), z());
      }
      function z() {
        for (let re = h + 1; re < ue.length; re++) {
          const Bt = ue[re];
          if (Bt.title.toLowerCase().startsWith(y))
            return [Bt, re];
        }
      }
      const se = _();
      if (!se) return;
      const [de, Ae] = se;
      h = Ae, (be = N.value) == null || be.focus(Ae), e.multiple || (c.value = [de]);
    }
    function Z(p) {
      let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!p.props.disabled)
        if (e.multiple) {
          const te = c.value.findIndex((_) => (e.valueComparator || He)(_.value, p.value)), ue = D ?? !~te;
          if (~te) {
            const _ = ue ? [...c.value, p] : [...c.value];
            _.splice(te, 1), c.value = _;
          } else ue && (c.value = [...c.value, p]);
        } else {
          const te = D !== !1;
          c.value = te ? [p] : [], ve(() => {
            A.value = !1;
          });
        }
    }
    function J(p) {
      var D;
      (D = N.value) != null && D.$el.contains(p.relatedTarget) || (A.value = !1);
    }
    function le() {
      var p;
      e.eager && ((p = r.value) == null || p.calculateVisibleItems());
    }
    function B() {
      var p;
      g.value && ((p = l.value) == null || p.focus());
    }
    function G(p) {
      g.value = !0;
    }
    function M(p) {
      if (p == null) c.value = [];
      else if (cn(l.value, ":autofill") || cn(l.value, ":-webkit-autofill")) {
        const D = o.value.find((te) => te.title === p);
        D && Z(D);
      } else l.value && (l.value.value = "");
    }
    return X(A, () => {
      if (!e.hideSelected && A.value && c.value.length) {
        const p = b.value.findIndex((D) => c.value.some((te) => (e.valueComparator || He)(te.value, D.value)));
        oe && !e.noAutoScroll && window.requestAnimationFrame(() => {
          var D;
          p >= 0 && ((D = r.value) == null || D.scrollToIndex(p));
        });
      }
    }), X(o, (p, D) => {
      A.value || g.value && e.hideNoData && !D.length && p.length && (A.value = !0);
    }), ee(() => {
      const p = !!(e.chips || n.chip), D = !!(!e.hideNoData || b.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), te = c.value.length > 0, ue = $l.filterProps(e), _ = te || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return k($l, q({
        ref: l
      }, ue, {
        modelValue: c.value.map((z) => z.props.value).join(", "),
        "onUpdate:modelValue": M,
        focused: g.value,
        "onUpdate:focused": (z) => g.value = z,
        validationValue: c.externalValue,
        counterValue: d.value,
        dirty: te,
        class: ["v-select", {
          "v-select--active-menu": A.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": c.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: _,
        "onClick:clear": $,
        "onMousedown:control": T,
        onBlur: J,
        onKeydown: W,
        "aria-expanded": I.value,
        "aria-controls": C.value,
        "aria-label": F.value,
        title: F.value
      }), {
        ...n,
        default: () => L(fe, null, [k(Es, q({
          id: P.value,
          ref: i,
          modelValue: A.value,
          "onUpdate:modelValue": (z) => A.value = z,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: S.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: le,
          onAfterLeave: B
        }, R.value), {
          default: () => [D && k(Cc, q({
            ref: N,
            selected: f.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (z) => z.preventDefault(),
            onKeydown: H,
            onFocusin: G,
            tabindex: "-1",
            selectable: !0,
            "aria-live": "polite",
            "aria-label": `${e.label}-list`,
            color: e.itemColor ?? e.color
          }, O, e.listProps), {
            default: () => {
              var z, se, de;
              return [(z = n["prepend-item"]) == null ? void 0 : z.call(n), !b.value.length && !e.hideNoData && (((se = n["no-data"]) == null ? void 0 : se.call(n)) ?? k(bn, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), k(Fc, {
                ref: r,
                renderless: !0,
                items: b.value,
                itemKey: "value"
              }, {
                default: (Ae) => {
                  var Ta, Oa, Da;
                  let {
                    item: ce,
                    index: xe,
                    itemRef: be
                  } = Ae;
                  const re = Kr(ce.props), Bt = q(ce.props, {
                    ref: be,
                    key: ce.value,
                    onClick: () => Z(ce, null)
                  });
                  return ce.type === "divider" ? ((Ta = n.divider) == null ? void 0 : Ta.call(n, {
                    props: ce.raw,
                    index: xe
                  })) ?? k(zi, q(ce.props, {
                    key: `divider-${xe}`
                  }), null) : ce.type === "subheader" ? ((Oa = n.subheader) == null ? void 0 : Oa.call(n, {
                    props: ce.raw,
                    index: xe
                  })) ?? k(mr, q(ce.props, {
                    key: `subheader-${xe}`
                  }), null) : ((Da = n.item) == null ? void 0 : Da.call(n, {
                    item: ce,
                    index: xe,
                    props: Bt
                  })) ?? k(bn, q(Bt, {
                    role: "option"
                  }), {
                    prepend: (xr) => {
                      let {
                        isSelected: Vr
                      } = xr;
                      return L(fe, null, [e.multiple && !e.hideSelected ? k(Tu, {
                        key: ce.value,
                        modelValue: Vr,
                        ripple: !1,
                        tabindex: "-1",
                        onClick: (Lr) => Lr.preventDefault()
                      }, null) : void 0, re.prependAvatar && k(bt, {
                        image: re.prependAvatar
                      }, null), re.prependIcon && k(pe, {
                        icon: re.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (de = n["append-item"]) == null ? void 0 : de.call(n)];
            }
          })]
        }), c.value.map((z, se) => {
          function de(be) {
            be.stopPropagation(), be.preventDefault(), Z(z, !1);
          }
          const Ae = {
            "onClick:close": de,
            onKeydown(be) {
              be.key !== "Enter" && be.key !== " " || (be.preventDefault(), be.stopPropagation(), de(be));
            },
            onMousedown(be) {
              be.preventDefault(), be.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, ce = p ? !!n.chip : !!n.selection, xe = ce ? ai(p ? n.chip({
            item: z,
            index: se,
            props: Ae
          }) : n.selection({
            item: z,
            index: se
          })) : void 0;
          if (!(ce && !xe))
            return L("div", {
              key: z.value,
              class: "v-select__selection"
            }, [p ? n.chip ? k(we, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: z.title
                }
              }
            }, {
              default: () => [xe]
            }) : k(Yu, q({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: z.title,
              disabled: z.props.disabled
            }, Ae), null) : xe ?? L("span", {
              class: "v-select__selection-text"
            }, [z.title, e.multiple && se < c.value.length - 1 && L("span", {
              class: "v-select__selection-comma"
            }, [Hr(",")])])]);
        })]),
        "append-inner": function() {
          var Ae, ce;
          for (var z = arguments.length, se = new Array(z), de = 0; de < z; de++)
            se[de] = arguments[de];
          return L(fe, null, [(Ae = n["append-inner"]) == null ? void 0 : Ae.call(n, ...se), e.menuIcon ? k(pe, {
            class: "v-select__menu-icon",
            color: (ce = l.value) == null ? void 0 : ce.fieldIconColor,
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), _t({
      isFocused: g,
      menu: A,
      select: Z
    }, l);
  }
}), Wc = E({
  color: String,
  ...ot(),
  ...ne(),
  ...et(),
  ...St(),
  ...En(),
  ...La(),
  ...ze(),
  ...ye(),
  ...Se()
}, "VSheet"), Nd = Y()({
  name: "VSheet",
  props: Wc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Le(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = qe(() => e.color), {
      borderClasses: r
    } = st(e), {
      dimensionStyles: o
    } = tt(e), {
      elevationClasses: s
    } = Ct(e), {
      locationStyles: u
    } = Tn(e), {
      positionClasses: c
    } = Aa(e), {
      roundedClasses: d
    } = We(e);
    return ee(() => k(e.tag, {
      class: K(["v-sheet", a.value, l.value, r.value, s.value, c.value, d.value, e.class]),
      style: ae([i.value, o.value, u.value, e.style])
    }, n)), {};
  }
});
function tn(e) {
  const t = e.slice(-2).toUpperCase();
  switch (!0) {
    case e === "GB-alt-variant":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    case e === "001":
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(t):
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(t):
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    case t === "MV":
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    case t === "PT":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    default:
      return null;
  }
}
function jc(e, t, n) {
  var c;
  const a = [];
  let l = [];
  const i = wr(e), r = pr(e), o = n ?? ((c = tn(t)) == null ? void 0 : c.firstDay) ?? 0, s = (i.getDay() - o + 7) % 7, u = (r.getDay() - o + 7) % 7;
  for (let d = 0; d < s; d++) {
    const v = new Date(i);
    v.setDate(v.getDate() - (s - d)), l.push(v);
  }
  for (let d = 1; d <= r.getDate(); d++) {
    const v = new Date(e.getFullYear(), e.getMonth(), d);
    l.push(v), l.length === 7 && (a.push(l), l = []);
  }
  for (let d = 1; d < 7 - u; d++) {
    const v = new Date(r);
    v.setDate(v.getDate() + d), l.push(v);
  }
  return l.length > 0 && a.push(l), a;
}
function Sn(e, t, n) {
  var i;
  let a = (n ?? ((i = tn(t)) == null ? void 0 : i.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (Fe("Invalid firstDayOfWeek, expected discrete number in range [0-6]"), a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function Gc(e, t) {
  var l;
  const n = new Date(e), a = ((((l = tn(t)) == null ? void 0 : l.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; )
    n.setDate(n.getDate() + 1);
  return n;
}
function wr(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function pr(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Zc(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Uc = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function kr(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (Uc.test(e))
      return Zc(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Hl = new Date(2e3, 0, 2);
function Yc(e, t, n) {
  var l;
  const a = t ?? ((l = tn(e)) == null ? void 0 : l.firstDay) ?? 0;
  return Yl(7).map((i) => {
    const r = new Date(Hl);
    return r.setDate(Hl.getDate() + a + i), new Intl.DateTimeFormat(e, {
      weekday: n ?? "narrow"
    }).format(r);
  });
}
function Kc(e, t, n, a) {
  const l = kr(e) ?? /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[t];
  if (typeof i == "function")
    return i(l, t, n);
  let r = {};
  switch (t) {
    case "fullDate":
      r = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      r = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const o = l.getDate(), s = new Intl.DateTimeFormat(n, {
        month: "long"
      }).format(l);
      return `${o} ${s}`;
    case "normalDateWithWeekday":
      r = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      r = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      r = {
        year: "numeric"
      };
      break;
    case "month":
      r = {
        month: "long"
      };
      break;
    case "monthShort":
      r = {
        month: "short"
      };
      break;
    case "monthAndYear":
      r = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      r = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      r = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      r = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(l.getDate());
    case "hours12h":
      r = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      r = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      r = {
        minute: "numeric"
      };
      break;
    case "seconds":
      r = {
        second: "numeric"
      };
      break;
    case "fullTime":
      r = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      r = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      r = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      r = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      r = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      r = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      r = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return r = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(n, r).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return r = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(n, r).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return r = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(n, r).format(l).replace(/, /g, " ");
    default:
      r = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, r).format(l);
}
function qc(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = Na(String(n.getMonth() + 1), 2, "0"), i = Na(String(n.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function Xc(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function Qc(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function Jc(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function mt(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function ed(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function td(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Ut(e) {
  return e.getFullYear();
}
function nd(e) {
  return e.getMonth();
}
function ad(e, t, n, a) {
  const l = tn(t), i = n ?? (l == null ? void 0 : l.firstDay) ?? 0, r = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? ld(e, t, i, a) : id(e, t, i, r);
}
function ld(e, t, n, a) {
  const l = (7 + a - n) % 7, i = Sn(e, t, n), r = mt(i, 6);
  function o(v) {
    return (7 + new Date(v, 0, 1).getDay() - n) % 7;
  }
  let s = Ut(e);
  s < Ut(r) && o(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = o(s), d = c <= l ? mt(u, -c) : mt(u, 7 - c);
  return 1 + wn(Ea(e), Yt(d), "weeks");
}
function id(e, t, n, a) {
  const l = mt(Sn(e, t, n), 6);
  function i(c) {
    const d = new Date(c, 0, 1);
    return 7 - wn(d, Sn(d, t, n), "days");
  }
  let r = Ut(e);
  r < Ut(l) && i(r + 1) >= a && r++;
  const o = new Date(r, 0, 1), s = i(r), u = s >= a ? mt(o, s - 7) : mt(o, s);
  return 1 + wn(Ea(e), Yt(u), "weeks");
}
function rd(e) {
  return e.getDate();
}
function od(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function sd(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function ud(e) {
  return e.getHours();
}
function cd(e) {
  return e.getMinutes();
}
function dd(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function fd(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function vd(e, t) {
  return Cn(e, t[0]) && hd(e, t[1]);
}
function md(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Cn(e, t) {
  return e.getTime() > t.getTime();
}
function gd(e, t) {
  return Cn(Yt(e), Yt(t));
}
function hd(e, t) {
  return e.getTime() < t.getTime();
}
function Rl(e, t) {
  return e.getTime() === t.getTime();
}
function yd(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function bd(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Sd(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function wn(e, t, n) {
  const a = new Date(e), l = new Date(t);
  switch (n) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function Cd(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function wd(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function pd(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function kd(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function xd(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Yt(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Ea(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Vd {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return kr(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return qc(this, t);
  }
  parseISO(t) {
    return Xc(t);
  }
  addMinutes(t, n) {
    return Qc(t, n);
  }
  addHours(t, n) {
    return Jc(t, n);
  }
  addDays(t, n) {
    return mt(t, n);
  }
  addWeeks(t, n) {
    return ed(t, n);
  }
  addMonths(t, n) {
    return td(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return jc(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Sn(t, this.locale, a);
  }
  endOfWeek(t) {
    return Gc(t, this.locale);
  }
  startOfMonth(t) {
    return wr(t);
  }
  endOfMonth(t) {
    return pr(t);
  }
  format(t, n) {
    return Kc(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Rl(t, n);
  }
  isValid(t) {
    return md(t);
  }
  isWithinRange(t, n) {
    return vd(t, n);
  }
  isAfter(t, n) {
    return Cn(t, n);
  }
  isAfterDay(t, n) {
    return gd(t, n);
  }
  isBefore(t, n) {
    return !Cn(t, n) && !Rl(t, n);
  }
  isSameDay(t, n) {
    return yd(t, n);
  }
  isSameMonth(t, n) {
    return bd(t, n);
  }
  isSameYear(t, n) {
    return Sd(t, n);
  }
  setMinutes(t, n) {
    return wd(t, n);
  }
  setHours(t, n) {
    return Cd(t, n);
  }
  setMonth(t, n) {
    return pd(t, n);
  }
  setDate(t, n) {
    return kd(t, n);
  }
  setYear(t, n) {
    return xd(t, n);
  }
  getDiff(t, n, a) {
    return wn(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return Yc(this.locale, a, n);
  }
  getYear(t) {
    return Ut(t);
  }
  getMonth(t) {
    return nd(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, i = a !== void 0 ? Number(a) : void 0;
    return ad(t, this.locale, l, i);
  }
  getDate(t) {
    return rd(t);
  }
  getNextMonth(t) {
    return od(t);
  }
  getPreviousMonth(t) {
    return sd(t);
  }
  getHours(t) {
    return ud(t);
  }
  getMinutes(t) {
    return cd(t);
  }
  startOfDay(t) {
    return Yt(t);
  }
  endOfDay(t) {
    return Ea(t);
  }
  startOfYear(t) {
    return dd(t);
  }
  endOfYear(t) {
    return fd(t);
  }
}
const Ld = Symbol.for("vuetify:date-options"), Nl = Symbol.for("vuetify:date-adapter");
function Ad(e, t) {
  const n = Ve({
    adapter: Vd,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: n,
    instance: Id(n, t)
  };
}
function Id(e, t) {
  const n = Pe(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return X(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function Pd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, a = Ve(t, n), {
    aliases: l = {},
    components: i = {},
    directives: r = {}
  } = a, o = Ht();
  return o.run(() => {
    const s = xo(a.defaults), u = Xo(a.display, a.ssr), c = Cs(a.theme), d = Rs(a.icons), v = is(a.locale), f = Ad(a.date, v), g = Ru(a.goTo, v);
    function y(m) {
      for (const S in r)
        m.directive(S, r[S]);
      for (const S in i)
        m.component(S, i[S]);
      for (const S in l)
        m.component(S, Dt({
          ...l[S],
          name: S,
          aliasName: l[S].name
        }));
      const b = Ht();
      if (b.run(() => {
        c.install(m);
      }), m.onUnmount(() => b.stop()), m.provide(Pt, s), m.provide(ea, u), m.provide(zt, c), m.provide(na, d), m.provide(gn, v), m.provide(Ld, f.options), m.provide(Nl, f.instance), m.provide(Ji, g), oe && a.ssr)
        if (m.$nuxt)
          m.$nuxt.hook("app:suspense:resolve", () => {
            u.update();
          });
        else {
          const {
            mount: S
          } = m;
          m.mount = function() {
            const w = S(...arguments);
            return ve(() => u.update()), m.mount = S, w;
          };
        }
      m.mixin({
        computed: {
          $vuetify() {
            return Pe({
              defaults: kt.call(this, Pt),
              display: kt.call(this, ea),
              theme: kt.call(this, zt),
              icons: kt.call(this, na),
              locale: kt.call(this, gn),
              date: kt.call(this, Nl)
            });
          }
        }
      });
    }
    function h() {
      o.stop();
    }
    return {
      install: y,
      unmount: h,
      defaults: s,
      display: u,
      theme: c,
      icons: d,
      locale: v,
      date: f,
      goTo: g
    };
  });
}
const Md = "3.10.8";
Pd.version = Md;
function kt(e) {
  var a, l;
  const t = this.$, n = ((a = t.parent) == null ? void 0 : a.provides) ?? ((l = t.vnode.appContext) == null ? void 0 : l.provides);
  if (n && e in n)
    return n[e];
}
const zd = {
  collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",
  complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
  cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  // delete (e.g. v-chip close)
  clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",
  info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
  checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  // for carousel
  sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
  sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",
  expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  subgroup: "svg:M7,10L12,15L17,10H7Z",
  dropdown: "svg:M7,10L12,15L17,10H7Z",
  radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
  radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
  ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
  first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
  last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
  unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
  file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
  plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  minus: "svg:M19,13H5V11H19V13Z",
  calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",
  treeviewCollapse: "svg:M7,10L12,15L17,10H7Z",
  treeviewExpand: "svg:M10,17L15,12L10,7V17Z",
  tableGroupExpand: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  tableGroupCollapse: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z",
  upload: "svg:M11 20H6.5q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55Z",
  color: "svg:M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8",
  command: "svg:M6,2A4,4 0 0,1 10,6V8H14V6A4,4 0 0,1 18,2A4,4 0 0,1 22,6A4,4 0 0,1 18,10H16V14H18A4,4 0 0,1 22,18A4,4 0 0,1 18,22A4,4 0 0,1 14,18V16H10V18A4,4 0 0,1 6,22A4,4 0 0,1 2,18A4,4 0 0,1 6,14H8V10H6A4,4 0 0,1 2,6A4,4 0 0,1 6,2M16,18A2,2 0 0,0 18,20A2,2 0 0,0 20,18A2,2 0 0,0 18,16H16V18M14,10H10V14H14V10M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18V16H6M8,6A2,2 0 0,0 6,4A2,2 0 0,0 4,6A2,2 0 0,0 6,8H8V6M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6V8H18Z",
  ctrl: "svg:M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z",
  space: "svg:M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z",
  shift: "svg:M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z",
  alt: "svg:M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z",
  enter: "svg:M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z",
  arrowup: "svg:M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z",
  arrowdown: "svg:M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16z",
  arrowleft: "svg:M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z",
  arrowright: "svg:M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z",
  backspace: "svg:M19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12zM22 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7c-.69 0-1.23-.36-1.59-.89L0 12l5.41-8.12C5.77 3.35 6.31 3 7 3zm0 2H7l-4.72 7L7 19h15z",
  play: "svg:M8,5.14V19.14L19,12.14L8,5.14Z",
  pause: "svg:M14,19H18V5H14M6,19H10V5H6V19Z",
  fullscreen: "svg:M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z",
  fullscreenExit: "svg:M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z",
  volumeHigh: "svg:M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z",
  volumeMedium: "svg:M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z",
  volumeLow: "svg:M7,9V15H11L16,20V4L11,9H7Z",
  volumeOff: "svg:M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z"
}, Wd = {
  component: ka
};
export {
  Es as V,
  Od as a,
  _d as b,
  su as c,
  Dd as d,
  pe as e,
  hu as f,
  zi as g,
  Fd as h,
  iu as i,
  $d as j,
  Bd as k,
  Ks as l,
  Nd as m,
  Rd as n,
  Hd as o,
  Pd as p,
  Wd as q,
  zd as r,
  ns as v
};
