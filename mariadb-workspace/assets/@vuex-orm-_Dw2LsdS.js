function B(i, t, e) {
  return e = {
    path: t,
    exports: {},
    require: function(r, n) {
      return ge(r, n ?? e.path);
    }
  }, i(e, e.exports), e.exports;
}
function ge() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var $ = B(function(i) {
  var t = i.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
  typeof __g == "number" && (__g = t);
}), b = B(function(i) {
  var t = i.exports = { version: "2.6.12" };
  typeof __e == "number" && (__e = t);
}), S = function(i) {
  return typeof i == "object" ? i !== null : typeof i == "function";
}, M = function(i) {
  if (!S(i)) throw TypeError(i + " is not an object!");
  return i;
}, gt = function(i) {
  try {
    return !!i();
  } catch {
    return !0;
  }
}, k = !gt(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
}), ht = $.document, ve = S(ht) && S(ht.createElement), te = function(i) {
  return ve ? ht.createElement(i) : {};
}, be = !k && !gt(function() {
  return Object.defineProperty(te("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), we = function(i, t) {
  if (!S(i)) return i;
  var e, r;
  if (typeof (e = i.toString) == "function" && !S(r = e.call(i)) || typeof (e = i.valueOf) == "function" && !S(r = e.call(i))) return r;
  throw TypeError("Can't convert object to primitive value");
}, $e = Object.defineProperty, _e = k ? Object.defineProperty : function(t, e, r) {
  if (M(t), e = we(e), M(r), be) try {
    return $e(t, e, r);
  } catch {
  }
  if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
  return "value" in r && (t[e] = r.value), t;
}, Y = {
  f: _e
}, vt = function(i, t) {
  return {
    enumerable: !(i & 1),
    configurable: !(i & 2),
    writable: !(i & 4),
    value: t
  };
}, K = k ? function(i, t, e) {
  return Y.f(i, t, vt(1, e));
} : function(i, t, e) {
  return i[t] = e, i;
}, Re = {}.hasOwnProperty, A = function(i, t) {
  return Re.call(i, t);
}, Ie = 0, Ke = Math.random(), bt = function(i) {
  return "Symbol(".concat(i === void 0 ? "" : i, ")_", (++Ie + Ke).toString(36));
}, wt = B(function(i) {
  var t = "__core-js_shared__", e = $[t] || ($[t] = {});
  (i.exports = function(r, n) {
    return e[r] || (e[r] = n !== void 0 ? n : {});
  })("versions", []).push({
    version: b.version,
    mode: "global",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
  });
}), nt = wt("native-function-to-string", Function.toString), Oe = B(function(i) {
  var t = bt("src"), e = "toString", r = ("" + nt).split(e);
  b.inspectSource = function(n) {
    return nt.call(n);
  }, (i.exports = function(n, s, a, o) {
    var h = typeof a == "function";
    h && (A(a, "name") || K(a, "name", s)), n[s] !== a && (h && (A(a, t) || K(a, t, n[s] ? "" + n[s] : r.join(String(s)))), n === $ ? n[s] = a : o ? n[s] ? n[s] = a : K(n, s, a) : (delete n[s], K(n, s, a)));
  })(Function.prototype, e, function() {
    return typeof this == "function" && this[t] || nt.call(this);
  });
}), Se = function(i) {
  if (typeof i != "function") throw TypeError(i + " is not a function!");
  return i;
}, D = function(i, t, e) {
  if (Se(i), t === void 0) return i;
  switch (e) {
    case 1:
      return function(r) {
        return i.call(t, r);
      };
    case 2:
      return function(r, n) {
        return i.call(t, r, n);
      };
    case 3:
      return function(r, n, s) {
        return i.call(t, r, n, s);
      };
  }
  return function() {
    return i.apply(t, arguments);
  };
}, it = "prototype", v = function(i, t, e) {
  var r = i & v.F, n = i & v.G, s = i & v.S, a = i & v.P, o = i & v.B, h = n ? $ : s ? $[t] || ($[t] = {}) : ($[t] || {})[it], c = n ? b : b[t] || (b[t] = {}), u = c[it] || (c[it] = {}), l, d, y, w;
  n && (e = t);
  for (l in e)
    d = !r && h && h[l] !== void 0, y = (d ? h : e)[l], w = o && d ? D(y, $) : a && typeof y == "function" ? D(Function.call, y) : y, h && Oe(h, l, y, i & v.U), c[l] != y && K(c, l, w), a && u[l] != y && (u[l] = y);
};
$.core = b;
v.F = 1;
v.G = 2;
v.S = 4;
v.P = 8;
v.B = 16;
v.W = 32;
v.U = 64;
v.R = 128;
var g = v, Fe = {}.toString, T = function(i) {
  return Fe.call(i).slice(8, -1);
}, $t = Object("z").propertyIsEnumerable(0) ? Object : function(i) {
  return T(i) == "String" ? i.split("") : Object(i);
}, X = function(i) {
  if (i == null) throw TypeError("Can't call method on  " + i);
  return i;
}, _t = function(i) {
  return $t(X(i));
}, xe = Math.ceil, Ee = Math.floor, Rt = function(i) {
  return isNaN(i = +i) ? 0 : (i > 0 ? Ee : xe)(i);
}, Me = Math.min, Z = function(i) {
  return i > 0 ? Me(Rt(i), 9007199254740991) : 0;
}, Ae = Math.max, ke = Math.min, Pe = function(i, t) {
  return i = Rt(i), i < 0 ? Ae(i + t, 0) : ke(i, t);
}, ee = function(i) {
  return function(t, e, r) {
    var n = _t(t), s = Z(n.length), a = Pe(r, s), o;
    if (i && e != e) {
      for (; s > a; )
        if (o = n[a++], o != o) return !0;
    } else for (; s > a; a++) if ((i || a in n) && n[a] === e)
      return i || a || 0;
    return !i && -1;
  };
}, I = B(function(i) {
  var t = wt("wks"), e = $.Symbol, r = typeof e == "function", n = i.exports = function(s) {
    return t[s] || (t[s] = r && e[s] || (r ? e : bt)("Symbol." + s));
  };
  n.store = t;
}), ct = I("unscopables"), ut = Array.prototype;
ut[ct] == null && K(ut, ct, {});
var re = function(i) {
  ut[ct][i] = !0;
}, je = ee(!0);
g(g.P, "Array", {
  includes: function(t) {
    return je(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
re("includes");
b.Array.includes;
var Lt = wt("keys"), It = function(i) {
  return Lt[i] || (Lt[i] = bt(i));
}, Ce = ee(!1), Te = It("IE_PROTO"), Be = function(i, t) {
  var e = _t(i), r = 0, n = [], s;
  for (s in e) s != Te && A(e, s) && n.push(s);
  for (; t.length > r; ) A(e, s = t[r++]) && (~Ce(n, s) || n.push(s));
  return n;
}, lt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), N = Object.keys || function(t) {
  return Be(t, lt);
}, He = Object.getOwnPropertySymbols, ze = {
  f: He
}, Ue = {}.propertyIsEnumerable, ne = {
  f: Ue
}, q = function(i) {
  return Object(X(i));
}, z = Object.assign, De = !z || gt(function() {
  var i = {}, t = {}, e = Symbol(), r = "abcdefghijklmnopqrst";
  return i[e] = 7, r.split("").forEach(function(n) {
    t[n] = n;
  }), z({}, i)[e] != 7 || Object.keys(z({}, t)).join("") != r;
}) ? function(t, e) {
  for (var r = q(t), n = arguments.length, s = 1, a = ze.f, o = ne.f; n > s; )
    for (var h = $t(arguments[s++]), c = a ? N(h).concat(a(h)) : N(h), u = c.length, l = 0, d; u > l; )
      d = c[l++], (!k || o.call(h, d)) && (r[d] = h[d]);
  return r;
} : z;
g(g.S + g.F, "Object", { assign: De });
b.Object.assign;
var Ne = ne.f, ie = function(i) {
  return function(t) {
    for (var e = _t(t), r = N(e), n = r.length, s = 0, a = [], o; n > s; )
      o = r[s++], (!k || Ne.call(e, o)) && a.push(i ? [o, e[o]] : e[o]);
    return a;
  };
}, Ve = ie(!0);
g(g.S, "Object", {
  entries: function(t) {
    return Ve(t);
  }
});
b.Object.entries;
var Le = ie(!1);
g(g.S, "Object", {
  values: function(t) {
    return Le(t);
  }
});
b.Object.values;
var Ge = I("match"), Qe = function(i) {
  var t;
  return S(i) && ((t = i[Ge]) !== void 0 ? !!t : T(i) == "RegExp");
}, We = function(i, t, e) {
  if (Qe(t)) throw TypeError("String#" + e + " doesn't accept regex!");
  return String(X(i));
}, Je = I("match"), Ye = function(i) {
  var t = /./;
  try {
    "/./"[i](t);
  } catch {
    try {
      return t[Je] = !1, !"/./"[i](t);
    } catch {
    }
  }
  return !0;
}, dt = "startsWith", Gt = ""[dt];
g(g.P + g.F * Ye(dt), "String", {
  startsWith: function(t) {
    var e = We(this, t, dt), r = Z(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)), n = String(t);
    return Gt ? Gt.call(e, n, r) : e.slice(r, r + n.length) === n;
  }
});
b.String.startsWith;
var Xe = function(i) {
  return function(t, e) {
    var r = String(X(t)), n = Rt(e), s = r.length, a, o;
    return n < 0 || n >= s ? "" : (a = r.charCodeAt(n), a < 55296 || a > 56319 || n + 1 === s || (o = r.charCodeAt(n + 1)) < 56320 || o > 57343 ? r.charAt(n) : r.slice(n, n + 2));
  };
}, V = {}, Ze = k ? Object.defineProperties : function(t, e) {
  M(t);
  for (var r = N(e), n = r.length, s = 0, a; n > s; ) Y.f(t, a = r[s++], e[a]);
  return t;
}, Qt = $.document, qe = Qt && Qt.documentElement, tr = It("IE_PROTO"), st = function() {
}, ft = "prototype", U = function() {
  var i = te("iframe"), t = lt.length, e = "<", r = ">", n;
  for (i.style.display = "none", qe.appendChild(i), i.src = "javascript:", n = i.contentWindow.document, n.open(), n.write(e + "script" + r + "document.F=Object" + e + "/script" + r), n.close(), U = n.F; t--; ) delete U[ft][lt[t]];
  return U();
}, er = Object.create || function(t, e) {
  var r;
  return t !== null ? (st[ft] = M(t), r = new st(), st[ft] = null, r[tr] = t) : r = U(), e === void 0 ? r : Ze(r, e);
}, rr = Y.f, Wt = I("toStringTag"), se = function(i, t, e) {
  i && !A(i = e ? i : i.prototype, Wt) && rr(i, Wt, { configurable: !0, value: t });
}, ae = {};
K(ae, I("iterator"), function() {
  return this;
});
var nr = function(i, t, e) {
  i.prototype = er(ae, { next: vt(1, e) }), se(i, t + " Iterator");
}, Jt = It("IE_PROTO"), ir = Object.prototype, sr = Object.getPrototypeOf || function(i) {
  return i = q(i), A(i, Jt) ? i[Jt] : typeof i.constructor == "function" && i instanceof i.constructor ? i.constructor.prototype : i instanceof Object ? ir : null;
}, P = I("iterator"), Yt = !([].keys && "next" in [].keys()), ar = "@@iterator", or = "keys", hr = "values", Xt = function() {
  return this;
}, cr = function(i, t, e, r, n, s, a) {
  nr(e, t, r);
  var o = function(x) {
    if (!Yt && x in u) return u[x];
    switch (x) {
      case or:
        return function() {
          return new e(this, x);
        };
      case hr:
        return function() {
          return new e(this, x);
        };
    }
    return function() {
      return new e(this, x);
    };
  }, h = t + " Iterator", c = !1, u = i.prototype, l = u[P] || u[ar] || n, d = l || o(n), y = l, w, R;
  return y && (R = sr(y.call(new i())), R !== Object.prototype && R.next && (se(R, h, !0), typeof R[P] != "function" && K(R, P, Xt))), (Yt || c || !u[P]) && K(u, P, d), V[t] = d, V[h] = Xt, w;
}, ur = Xe();
cr(String, "String", function(i) {
  this._t = String(i), this._i = 0;
}, function() {
  var i = this._t, t = this._i, e;
  return t >= i.length ? { value: void 0, done: !0 } : (e = ur(i, t), this._i += e.length, { value: e, done: !1 });
});
var lr = function(i, t, e, r) {
  try {
    return r ? t(M(e)[0], e[1]) : t(e);
  } catch (s) {
    var n = i.return;
    throw n !== void 0 && M(n.call(i)), s;
  }
}, dr = I("iterator"), fr = Array.prototype, yr = function(i) {
  return i !== void 0 && (V.Array === i || fr[dr] === i);
}, Zt = function(i, t, e) {
  t in i ? Y.f(i, t, vt(0, e)) : i[t] = e;
}, pr = I("toStringTag"), mr = T(/* @__PURE__ */ (function() {
  return arguments;
})()) == "Arguments", gr = function(i, t) {
  try {
    return i[t];
  } catch {
  }
}, vr = function(i) {
  var t, e, r;
  return i === void 0 ? "Undefined" : i === null ? "Null" : typeof (e = gr(t = Object(i), pr)) == "string" ? e : mr ? T(t) : (r = T(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : r;
}, br = I("iterator"), wr = b.getIteratorMethod = function(i) {
  if (i != null) return i[br] || i["@@iterator"] || V[vr(i)];
}, yt = I("iterator"), oe = !1;
try {
  var qt = [7][yt]();
  qt.return = function() {
    oe = !0;
  }, Array.from(qt, function() {
    throw 2;
  });
} catch {
}
var $r = function(i, t) {
  if (!oe) return !1;
  var e = !1;
  try {
    var r = [7], n = r[yt]();
    n.next = function() {
      return { done: e = !0 };
    }, r[yt] = function() {
      return n;
    }, i(r);
  } catch {
  }
  return e;
};
g(g.S + g.F * !$r(function(i) {
  Array.from(i);
}), "Array", {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function(t) {
    var e = q(t), r = typeof this == "function" ? this : Array, n = arguments.length, s = n > 1 ? arguments[1] : void 0, a = s !== void 0, o = 0, h = wr(e), c, u, l, d;
    if (a && (s = D(s, n > 2 ? arguments[2] : void 0, 2)), h != null && !(r == Array && yr(h)))
      for (d = h.call(e), u = new r(); !(l = d.next()).done; o++)
        Zt(u, o, a ? lr(d, s, [l.value, o], !0) : l.value);
    else
      for (c = Z(e.length), u = new r(c); c > o; o++)
        Zt(u, o, a ? s(e[o], o) : e[o]);
    return u.length = o, u;
  }
});
b.Array.from;
I("species");
var _r = function(i, t) {
  return function(e, r, n) {
    for (var s = q(e), a = $t(s), o = D(r, n, 3), h = Z(a.length), c = 0, u = void 0, l, d; h > c; c++)
      if (l = a[c], d = o(l, c, s), d) switch (i) {
        case 3:
          return !0;
        // some
        case 5:
          return l;
        // find
        case 6:
          return c;
        // findIndex
        case 2:
          u.push(l);
      }
    return u;
  };
}, Rr = _r(5), pt = "find", he = !0;
pt in [] && Array(1)[pt](function() {
  he = !1;
});
g(g.P + g.F * he, "Array", {
  find: function(t) {
    return Rr(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
re(pt);
b.Array.find;
class Kt {
  /**
   * Register the store instance.
   */
  static register(t) {
    this.store = t;
  }
}
var Ir = (i, t = {}) => {
  const e = t.namespace || "entities";
  return (r) => {
    i.start(r, e), Kt.register(r);
  };
};
function _(i) {
  return Array.isArray(i);
}
function ce(i) {
  return _(i) ? i.length : Object.keys(i).length;
}
function Kr(i) {
  return ce(i) === 0;
}
function Or(i, t) {
  Object.keys(i).forEach((e) => t(i[e], e, i));
}
function Sr(i, t) {
  const e = [];
  for (const r in i)
    e.push(t(i[r], r, i));
  return e;
}
function ue(i, t) {
  const e = Object.assign({}, i);
  return Object.keys(i).reduce((r, n) => (r[n] = t(i[n], n, i), r), e);
}
function Fr(i, t) {
  const e = {};
  return i.forEach((r) => {
    e[r[t]] = r;
  }), e;
}
function xr(i, t, e) {
  let r = -1;
  const n = i.map((s) => ({ criteria: t.map((o) => typeof o == "function" ? o(s) : s[o]), index: ++r, value: s }));
  return Er(n, (s, a) => Mr(s, a, e));
}
function Er(i, t) {
  let e = i.length;
  i.sort(t);
  const r = [];
  for (; e--; )
    r[e] = i[e].value;
  return r;
}
function Mr(i, t, e) {
  let r = -1;
  const n = i.criteria, s = t.criteria, a = n.length, o = e.length;
  for (; ++r < a; ) {
    const h = Ar(n[r], s[r]);
    if (h) {
      if (r >= o)
        return h;
      const c = e[r];
      return h * (c === "desc" ? -1 : 1);
    }
  }
  return i.index - t.index;
}
function Ar(i, t) {
  if (i !== t) {
    const e = i !== void 0, r = i === null, n = i === i, s = t !== void 0, a = t === null, o = t === t;
    if ((typeof i != "number" || typeof t != "number") && (i = String(i), t = String(t)), !a && i > t || r && s && o || !e && o || !n)
      return 1;
    if (!r && i < t || a && e && n || !s && n || !o)
      return -1;
  }
  return 0;
}
function kr(i, t) {
  return i.reduce((e, r) => {
    const n = t(r);
    return e[n] === void 0 && (e[n] = []), e[n].push(r), e;
  }, {});
}
function mt(i) {
  if (i === null)
    return i;
  if (_(i)) {
    const t = [];
    return i.forEach((e) => t.push(e)), t.map((e) => mt(e));
  }
  if (typeof i == "object" && i !== {}) {
    const t = { ...i };
    return Object.keys(t).forEach((e) => t[e] = mt(t[e])), t;
  }
  return i;
}
var f = {
  isArray: _,
  size: ce,
  isEmpty: Kr,
  forOwn: Or,
  map: Sr,
  mapValues: ue,
  keyBy: Fr,
  orderBy: xr,
  groupBy: kr,
  cloneDeep: mt
};
class H {
  /**
   * Generate an UUID.
   */
  static make() {
    return this.count++, `${this.prefix}${this.count}`;
  }
  /**
   * Reset the count to 0.
   */
  static reset() {
    this.count = 0;
  }
}
H.count = 0;
H.prefix = "$uid";
class tt {
  /**
   * Create a new attribute instance.
   */
  constructor(t) {
    this.model = t;
  }
}
class O extends tt {
  /**
   * Create a new type instance.
   */
  constructor(t, e, r) {
    super(t), this.isNullable = !1, this.value = e, this.mutator = r;
  }
  /**
   * Set `isNullable` to be `true`.
   */
  nullable() {
    return this.isNullable = !0, this;
  }
  /**
   * Mutate the given value by mutator.
   */
  mutate(t, e) {
    const r = this.mutator || this.model.mutators()[e];
    return r ? r(t) : t;
  }
}
class Ot extends O {
  /**
   * Create a new attr instance.
   */
  constructor(t, e, r) {
    super(t, e, r);
  }
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */
  make(t, e, r) {
    t = t !== void 0 ? t : this.value;
    let n = t;
    return typeof t == "function" && (n = t()), this.mutate(n, r);
  }
}
class St extends O {
  /**
   * Create a new string instance.
   */
  constructor(t, e, r) {
    super(t, e, r);
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.mutate(this.fix(t), r);
  }
  /**
   * Convert given value to the string.
   */
  fix(t) {
    return t === void 0 ? this.value : typeof t == "string" || t === null && this.isNullable ? t : t + "";
  }
}
class Ft extends O {
  /**
   * Create a new number instance.
   */
  constructor(t, e, r) {
    super(t, e, r);
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.mutate(this.fix(t), r);
  }
  /**
   * Transform given data to the number.
   */
  fix(t) {
    return t === void 0 ? this.value : typeof t == "number" ? t : typeof t == "string" ? parseFloat(t) : typeof t == "boolean" ? t ? 1 : 0 : t === null && this.isNullable ? t : 0;
  }
}
class xt extends O {
  /**
   * Create a new number instance.
   */
  constructor(t, e, r) {
    super(t, e, r);
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.mutate(this.fix(t), r);
  }
  /**
   * Transform given data to the boolean.
   */
  fix(t) {
    if (t === void 0)
      return this.value;
    if (typeof t == "boolean")
      return t;
    if (typeof t == "string") {
      if (t.length === 0)
        return !1;
      const e = parseInt(t, 0);
      return isNaN(e) ? !0 : !!e;
    }
    return typeof t == "number" ? !!t : t === null && this.isNullable ? t : !1;
  }
}
class et extends O {
  /**
   * Create a new uid instance.
   */
  constructor(t, e) {
    super(t, e);
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t) {
    return typeof t == "number" || typeof t == "string" ? t : typeof this.value == "function" ? this.value() : H.make();
  }
}
class p extends tt {
  /**
   * Get relation query instance with constraint attached.
   */
  getRelation(t, e, r) {
    const n = t.newQuery(e);
    return r.forEach((s) => {
      s(n);
    }), n;
  }
  /**
   * Get specified keys from the given collection.
   */
  getKeys(t, e) {
    return t.reduce((r, n) => (n[e] === null || n[e] === void 0 || r.push(n[e]), r), []);
  }
  /**
   * Create a new indexed map for the single relation by specified key.
   */
  mapSingleRelations(t, e) {
    const r = /* @__PURE__ */ new Map();
    return t.forEach((n) => {
      const s = n[e];
      !r.get(s) && r.set(s, n);
    }), r;
  }
  /**
   * Create a new indexed map for the many relation by specified key.
   */
  mapManyRelations(t, e) {
    const r = /* @__PURE__ */ new Map();
    return t.forEach((n) => {
      const s = n[e];
      let a = r.get(s);
      a || (a = [], r.set(s, a)), a.push(n);
    }), r;
  }
  /**
   * Create a new indexed map for relations with order constraints.
   */
  mapRelationsByOrders(t, e, r, n) {
    const s = {};
    return e.forEach((a, o) => {
      t.filter((h) => h[n] === o).forEach((h) => {
        const c = h[r];
        s[c] || (s[c] = []), s[c] = s[c].concat(a);
      });
    }), s;
  }
  /**
   * Check if the given record is a single relation, which is an object.
   */
  isOneRelation(t) {
    return !_(t) && t !== null && typeof t == "object";
  }
  /**
   * Check if the given records is a many relation, which is an array
   * of object.
   */
  isManyRelation(t) {
    return !(!_(t) || t.length < 1);
  }
  /**
   * Wrap the given object into a model instance.
   */
  makeOneRelation(t, e) {
    if (!this.isOneRelation(t))
      return null;
    const r = e.getModelFromRecord(t) || e;
    return new r(t);
  }
  /**
   * Wrap the given records into a collection of model instances.
   */
  makeManyRelation(t, e) {
    return this.isManyRelation(t) ? t.filter((r) => this.isOneRelation(r)).map((r) => {
      const n = e.getModelFromRecord(r) || e;
      return new n(r);
    }) : [];
  }
}
class Et extends p {
  /**
   * Create a new has one instance.
   */
  constructor(t, e, r, n) {
    super(t), this.related = this.model.relation(e), this.foreignKey = r, this.localKey = n;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.one(this.related);
  }
  /**
   * Attach the relational key to the related data. For example,
   * when User has one Phone, it will attach value to the
   * `user_id` field of Phone record.
   */
  attach(t, e, r) {
    e[this.localKey] || (e[this.localKey] = this.model.getIndexIdFromRecord(e));
    const n = r[this.related.entity] && r[this.related.entity][t];
    n && (n[this.foreignKey] = e[this.localKey]);
  }
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */
  make(t, e, r) {
    return this.makeOneRelation(t, this.related);
  }
  /**
   * Load the has one relationship for the collection.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.related.entity, n);
    this.addEagerConstraints(s, e), this.match(e, s.get(), r);
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(t, e) {
    t.whereFk(this.foreignKey, this.getKeys(e, this.localKey));
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(t, e, r) {
    const n = this.buildDictionary(e);
    t.forEach((s) => {
      const a = s[this.localKey], o = n[a];
      s[r] = o || null;
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(t) {
    return t.reduce((e, r) => {
      const n = r[this.foreignKey];
      return e[n] = r, e;
    }, {});
  }
}
class Mt extends p {
  /**
   * Create a new belongs to instance.
   */
  constructor(t, e, r, n) {
    super(t), this.parent = this.model.relation(e), this.foreignKey = r, this.ownerKey = n;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.one(this.parent);
  }
  /**
   * Attach the relational key to the given data. For example, when Post
   * belongs to User, it will attach value to the `user_id` field of
   * Post record.
   */
  attach(t, e, r) {
    e[this.foreignKey] === void 0 && (e[this.foreignKey] = r[this.parent.entity] && r[this.parent.entity][t] ? r[this.parent.entity][t][this.ownerKey] : t);
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.makeOneRelation(t, this.parent);
  }
  /**
   * Load the belongs to relationship for the collection.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.parent.entity, n);
    this.addEagerConstraints(s, e), this.match(e, s.get(), r);
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(t, e) {
    t.whereFk(this.ownerKey, this.getKeys(e, this.foreignKey));
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(t, e, r) {
    const n = this.buildDictionary(e);
    t.forEach((s) => {
      const a = s[this.foreignKey], o = a !== null ? n[a] : null;
      s[r] = o || null;
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(t) {
    return t.reduce((e, r) => {
      const n = r[this.ownerKey];
      return e[n] = r, e;
    }, {});
  }
}
class At extends p {
  /**
   * Create a new has many instance.
   */
  constructor(t, e, r, n) {
    super(t), this.related = this.model.relation(e), this.foreignKey = r, this.localKey = n;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.many(this.related);
  }
  /**
   * Attach the relational key to the given data.
   */
  attach(t, e, r) {
    t.forEach((n) => {
      const s = r[this.related.entity];
      !s || !s[n] || s[n][this.foreignKey] !== void 0 || (s[n][this.foreignKey] = e[this.localKey]);
    });
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.makeManyRelation(t, this.related);
  }
  /**
   * Load the has many relationship for the collection.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.related.entity, n);
    this.addEagerConstraints(s, e), this.match(e, s.get(), r);
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(t, e) {
    t.whereFk(this.foreignKey, this.getKeys(e, this.localKey));
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(t, e, r) {
    const n = this.buildDictionary(e);
    t.forEach((s) => {
      const a = s[this.localKey], o = n[a];
      s[r] = o || [];
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(t) {
    return t.reduce((e, r) => {
      const n = r[this.foreignKey];
      return e[n] || (e[n] = []), e[n].push(r), e;
    }, {});
  }
}
class kt extends p {
  /**
   * Create a new has many by instance.
   */
  constructor(t, e, r, n) {
    super(t), this.parent = this.model.relation(e), this.foreignKey = r, this.ownerKey = n;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.many(this.parent);
  }
  /**
   * Attach the relational key to the given data.
   */
  attach(t, e, r) {
    t.length !== 0 && (e[this.foreignKey] = t.map((n) => this.parent.getIdFromRecord(r[this.parent.entity][n])));
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.makeManyRelation(t, this.parent);
  }
  /**
   * Load the has many by relationship for the collection.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.parent.entity, n);
    this.addConstraintForHasManyBy(s, e);
    const a = this.mapSingleRelations(s.get(), this.ownerKey);
    e.forEach((o) => {
      const h = this.getRelatedRecords(a, o[this.foreignKey]);
      o[r] = h;
    });
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addConstraintForHasManyBy(t, e) {
    const r = e.reduce((n, s) => n.concat(s[this.foreignKey]), []);
    t.where(this.ownerKey, r);
  }
  /**
   * Get related records.
   */
  getRelatedRecords(t, e) {
    const r = [];
    return t.forEach((n, s) => {
      e.indexOf(s) !== -1 && r.push(n);
    }), r;
  }
}
class Pt extends p {
  /**
   * Create a new has many through instance.
   */
  constructor(t, e, r, n, s, a, o) {
    super(t), this.related = this.model.relation(e), this.through = this.model.relation(r), this.firstKey = n, this.secondKey = s, this.localKey = a, this.secondLocalKey = o;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.many(this.related);
  }
  /**
   * Attach the relational key to the given data. Since has many through
   * relationship doesn't have any foreign key, it would do nothing.
   */
  attach(t, e, r) {
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.makeManyRelation(t, this.related);
  }
  /**
   * Load the has many through relationship for the collection.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.related.entity, n), a = t.newQuery(this.through.entity);
    this.addEagerConstraintForThrough(a, e);
    const o = a.get();
    this.addEagerConstraintForRelated(s, o);
    const h = this.mapThroughRelations(o, s);
    e.forEach((c) => {
      const u = h[c[this.localKey]];
      c[r] = u || [];
    });
  }
  /**
   * Set the constraints for the through relation.
   */
  addEagerConstraintForThrough(t, e) {
    t.where(this.firstKey, this.getKeys(e, this.localKey));
  }
  /**
   * Set the constraints for the related relation.
   */
  addEagerConstraintForRelated(t, e) {
    t.where(this.secondKey, this.getKeys(e, this.secondLocalKey));
  }
  /**
   * Create a new indexed map for the through relation.
   */
  mapThroughRelations(t, e) {
    const r = this.mapManyRelations(e.get(), this.secondKey);
    return t.reduce((n, s) => {
      const a = s[this.firstKey];
      n[a] || (n[a] = []);
      const o = r.get(s[this.secondLocalKey]);
      return o === void 0 || (n[a] = n[a].concat(o)), n;
    }, {});
  }
}
class L extends p {
  /**
   * Create a new belongs to instance.
   */
  constructor(t, e, r, n, s, a, o) {
    super(t), this.pivotKey = "pivot", this.related = this.model.relation(e), this.pivot = this.model.relation(r), this.foreignPivotKey = n, this.relatedPivotKey = s, this.parentKey = a, this.relatedKey = o;
  }
  /**
   * Specify the custom pivot accessor to use for the relationship.
   */
  as(t) {
    return this.pivotKey = t, this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.many(this.related);
  }
  /**
   * Attach the relational key to the given data. Since belongs to many
   * relationship doesn't have any foreign key, it would do nothing.
   */
  attach(t, e, r) {
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.makeManyRelation(t, this.related);
  }
  /**
   * Load the belongs to relationship for the record.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.related.entity, n), a = t.newQuery(this.pivot.entity);
    this.addEagerConstraintForPivot(a, e);
    const o = a.get();
    this.addEagerConstraintForRelated(s, o);
    const h = this.mapPivotRelations(o, s);
    e.forEach((c) => {
      const u = h[c[this.parentKey]];
      c[r] = u || [];
    });
  }
  /**
   * Set the constraints for the pivot relation.
   */
  addEagerConstraintForPivot(t, e) {
    t.whereFk(this.foreignPivotKey, this.getKeys(e, this.parentKey));
  }
  /**
   * Set the constraints for the related relation.
   */
  addEagerConstraintForRelated(t, e) {
    t.whereFk(this.relatedKey, this.getKeys(e, this.relatedPivotKey));
  }
  /**
   * Create a new indexed map for the pivot relation.
   */
  mapPivotRelations(t, e) {
    const r = this.mapManyRelations(e.get(), this.relatedKey);
    return e.orders.length ? this.mapRelationsByOrders(t, r, this.foreignPivotKey, this.relatedPivotKey) : t.reduce((n, s) => {
      const a = s[this.foreignPivotKey];
      n[a] || (n[a] = []);
      const o = r.get(s[this.relatedPivotKey]);
      return o && (n[a] = n[a].concat(o.map((h) => (h[this.pivotKey] = s, h)))), n;
    }, {});
  }
  /**
   * Create pivot records for the given records if needed.
   */
  createPivots(t, e, r) {
    return f.isArray(this.pivot.primaryKey) && f.forOwn(e[t.entity], (n) => {
      const s = n[r];
      s === void 0 || s.length === 0 || this.createPivotRecord(e, n, s);
    }), e;
  }
  /**
   * Create a pivot record.
   */
  createPivotRecord(t, e, r) {
    r.forEach((n) => {
      const s = e[this.parentKey], a = t[this.related.entity][n][this.relatedKey], o = JSON.stringify([
        this.pivot.primaryKey[0] === this.foreignPivotKey ? s : a,
        this.pivot.primaryKey[1] === this.foreignPivotKey ? s : a
      ]), h = t[this.pivot.entity] ? t[this.pivot.entity][o] : {}, c = t[this.related.entity][n][this.pivotKey] || {};
      t[this.pivot.entity] = {
        ...t[this.pivot.entity],
        [o]: {
          ...h,
          ...c,
          $id: o,
          [this.foreignPivotKey]: s,
          [this.relatedPivotKey]: a
        }
      };
    });
  }
}
class jt extends p {
  /**
   * Create a new morph to instance.
   */
  constructor(t, e, r) {
    super(t), this.id = e, this.type = r;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.union((e, r) => r[this.type]);
  }
  /**
   * Attach the relational key to the given record. Since morph to
   * relationship doesn't have any foreign key, it would do nothing.
   */
  attach(t, e, r) {
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    const n = e[this.type];
    try {
      const s = this.model.relation(n);
      return this.makeOneRelation(t, s);
    } catch {
      return null;
    }
  }
  /**
   * Load the morph to relationship for the collection.
   */
  load(t, e, r, n) {
    const a = this.getTypes(e).reduce((o, h) => {
      const c = this.getRelation(t, h, n);
      return o[h] = this.mapSingleRelations(c.get(), "$id"), o;
    }, {});
    e.forEach((o) => {
      const h = o[this.id], c = o[this.type], u = a[c].get(String(h));
      o[r] = u || null;
    });
  }
  /**
   * Get all types from the collection.
   */
  getTypes(t) {
    return t.reduce((e, r) => {
      const n = r[this.type];
      return !e.includes(n) && e.push(n), e;
    }, []);
  }
}
class Ct extends p {
  /**
   * Create a new belongs to instance.
   */
  constructor(t, e, r, n, s) {
    super(t), this.related = this.model.relation(e), this.id = r, this.type = n, this.localKey = s;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.one(this.related);
  }
  /**
   * Attach the relational key to the given data.
   */
  attach(t, e, r) {
    const n = r[this.related.entity][t];
    n[this.id] = n[this.id] || this.related.getIdFromRecord(e), n[this.type] = n[this.type] || this.model.entity;
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.makeOneRelation(t, this.related);
  }
  /**
   * Load the morph many relationship for the record.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.related.entity, n);
    this.addEagerConstraintForMorphOne(s, e, t.entity);
    const a = this.mapSingleRelations(s.get(), this.id);
    e.forEach((o) => {
      const h = a.get(o[this.localKey]);
      o[r] = h || null;
    });
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraintForMorphOne(t, e, r) {
    t.whereFk(this.type, r).whereFk(this.id, this.getKeys(e, this.localKey));
  }
}
class Tt extends p {
  /**
   * Create a new belongs to instance.
   */
  constructor(t, e, r, n, s) {
    super(t), this.related = this.model.relation(e), this.id = r, this.type = n, this.localKey = s;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.many(this.related);
  }
  /**
   * Attach the relational key to the given data.
   */
  attach(t, e, r) {
    const n = r[this.related.entity];
    t.forEach((s) => {
      const a = n[s];
      a[this.id] = a[this.id] || this.related.getIdFromRecord(e), a[this.type] = a[this.type] || this.model.entity;
    });
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.makeManyRelation(t, this.related);
  }
  /**
   * Load the morph many relationship for the record.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.related.entity, n);
    this.addEagerConstraintForMorphMany(s, e, t.entity);
    const a = this.mapManyRelations(s.get(), this.id);
    e.forEach((o) => {
      const h = a.get(o[this.localKey]);
      o[r] = h || [];
    });
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraintForMorphMany(t, e, r) {
    t.whereFk(this.type, r).whereFk(this.id, this.getKeys(e, this.localKey));
  }
}
class G extends p {
  /**
   * Create a new belongs to instance.
   */
  constructor(t, e, r, n, s, a, o, h) {
    super(t), this.pivotKey = "pivot", this.related = this.model.relation(e), this.pivot = this.model.relation(r), this.relatedId = n, this.id = s, this.type = a, this.parentKey = o, this.relatedKey = h;
  }
  /**
   * Specify the custom pivot accessor to use for the relationship.
   */
  as(t) {
    return this.pivotKey = t, this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.many(this.related);
  }
  /**
   * Attach the relational key to the given record. Since morph to many
   * relationship doesn't have any foreign key, it would do nothing.
   */
  attach(t, e, r) {
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(t, e, r) {
    return this.makeManyRelation(t, this.related);
  }
  /**
   * Load the morph to many relationship for the collection.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.related.entity, n), a = t.newQuery(this.pivot.entity);
    this.addEagerConstraintForPivot(a, e, t.entity);
    const o = a.get();
    this.addEagerConstraintForRelated(s, o);
    const h = this.mapPivotRelations(o, s);
    e.forEach((c) => {
      const u = h[c[this.parentKey]];
      c[r] = u || [];
    });
  }
  /**
   * Set the constraints for the pivot relation.
   */
  addEagerConstraintForPivot(t, e, r) {
    t.whereFk(this.type, r).whereFk(this.id, this.getKeys(e, this.parentKey));
  }
  /**
   * Set the constraints for the related relation.
   */
  addEagerConstraintForRelated(t, e) {
    t.whereFk(this.relatedKey, this.getKeys(e, this.relatedId));
  }
  /**
   * Create a new indexed map for the pivot relation.
   */
  mapPivotRelations(t, e) {
    const r = this.mapManyRelations(e.get(), this.relatedKey);
    return e.orders.length ? this.mapRelationsByOrders(t, r, this.id, this.relatedId) : t.reduce((n, s) => {
      const a = s[this.id];
      n[a] || (n[a] = []);
      const o = r.get(s[this.relatedId]);
      return o === void 0 || o.length === 0 || (n[a] = n[a].concat(o.map((h) => (h[this.pivotKey] = s, h)))), n;
    }, {});
  }
  /**
   * Create pivot records for the given records if needed.
   */
  createPivots(t, e, r) {
    return f.forOwn(e[t.entity], (n) => {
      const s = t.query().newQuery(this.pivot.entity).where(this.id, n[this.parentKey]).where(this.type, t.entity).get(), a = (n[r] || []).filter((o) => !s.includes(o));
      !f.isArray(a) || a.length === 0 || this.createPivotRecord(t, e, n, a);
    }), e;
  }
  /**
   * Create a pivot record.
   */
  createPivotRecord(t, e, r, n) {
    n.forEach((s) => {
      const a = r[this.parentKey], o = e[this.related.entity][s][this.relatedKey], h = `${a}_${s}_${t.entity}`, c = e[this.related.entity][s][this.pivotKey] || {};
      e[this.pivot.entity] = {
        ...e[this.pivot.entity],
        [h]: {
          ...c,
          $id: h,
          [this.relatedId]: o,
          [this.id]: a,
          [this.type]: t.entity
        }
      };
    });
  }
}
class Q extends p {
  /**
   * Create a new belongs to instance.
   */
  constructor(t, e, r, n, s, a, o, h) {
    super(t), this.pivotKey = "pivot", this.related = this.model.relation(e), this.pivot = this.model.relation(r), this.relatedId = n, this.id = s, this.type = a, this.parentKey = o, this.relatedKey = h;
  }
  /**
   * Specify the custom pivot accessor to use for the relationship.
   */
  as(t) {
    return this.pivotKey = t, this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(t) {
    return t.many(this.related);
  }
  /**
   * Attach the relational key to the given data. Since morphed by many
   * relationship doesn't have any foreign key, it would do nothing.
   */
  attach(t, e, r) {
  }
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */
  make(t, e, r) {
    return this.makeManyRelation(t, this.related);
  }
  /**
   * Load the morph many relationship for the record.
   */
  load(t, e, r, n) {
    const s = this.getRelation(t, this.related.entity, n), a = t.newQuery(this.pivot.entity);
    this.addEagerConstraintForPivot(a, e, this.related.entity);
    const o = a.get();
    this.addEagerConstraintForRelated(s, o);
    const h = this.mapPivotRelations(o, s);
    e.forEach((c) => {
      const u = h[c[this.parentKey]];
      c[r] = u || [];
    });
  }
  /**
   * Set the constraints for the pivot relation.
   */
  addEagerConstraintForPivot(t, e, r) {
    t.whereFk(this.type, r).whereFk(this.relatedId, this.getKeys(e, this.parentKey));
  }
  /**
   * Set the constraints for the related relation.
   */
  addEagerConstraintForRelated(t, e) {
    t.whereFk(this.relatedKey, this.getKeys(e, this.id));
  }
  /**
   * Create a new indexed map for the pivot relation.
   */
  mapPivotRelations(t, e) {
    const r = this.mapManyRelations(e.get(), this.relatedKey);
    return e.orders.length ? this.mapRelationsByOrders(t, r, this.relatedId, this.id) : t.reduce((n, s) => {
      const a = s[this.relatedId];
      n[a] || (n[a] = []);
      const o = r.get(s[this.id]);
      return o === void 0 || o.length === 0 || (n[a] = n[a].concat(o.map((h) => (h[this.pivotKey] = s, h)))), n;
    }, {});
  }
  /**
   * Create pivot records for the given records if needed.
   */
  createPivots(t, e, r) {
    return f.forOwn(e[t.entity], (n) => {
      const s = n[r];
      f.isArray(s) && this.createPivotRecord(e, n, s);
    }), e;
  }
  /**
   * Create a pivot record.
   */
  createPivotRecord(t, e, r) {
    r.forEach((n) => {
      const s = e[this.parentKey], a = `${n}_${s}_${this.related.entity}`, o = t[this.related.entity][n][this.pivotKey] || {};
      t[this.pivot.entity] = {
        ...t[this.pivot.entity],
        [a]: {
          ...o,
          $id: a,
          [this.relatedId]: s,
          [this.id]: this.model.getIdFromRecord(t[this.related.entity][n]),
          [this.type]: this.related.entity
        }
      };
    });
  }
}
const Pr = {
  relations: !0
};
function jr(i) {
  const t = le(i, { relations: !1 });
  return t.$id = i.$id, t;
}
function le(i, t = {}) {
  t = { ...Pr, ...t };
  const e = {}, r = i.$fields();
  for (const n in r) {
    const s = r[n], a = i[n];
    if (s instanceof p) {
      e[n] = t.relations ? Br(a) : Hr(a);
      continue;
    }
    e[n] = Bt(i[n]);
  }
  return e;
}
function Bt(i) {
  return i === null ? null : _(i) ? Cr(i) : typeof i == "object" ? Tr(i) : i;
}
function Cr(i) {
  return i.map((t) => Bt(t));
}
function Tr(i) {
  const t = {};
  for (const e in i)
    t[e] = Bt(i[e]);
  return t;
}
function Br(i) {
  return i === null ? null : _(i) ? i.map((t) => t.$toJson()) : i.$toJson();
}
function Hr(i) {
  return _(i) ? [] : null;
}
class F {
  /**
   * Create a new model instance.
   */
  constructor(t) {
    this.$id = null, this.$fill(t);
  }
  /**
   * The definition of the fields of the model and its relations.
   */
  static fields() {
    return {};
  }
  /**
   * Create an attr attribute.
   */
  static attr(t, e) {
    return new Ot(this, t, e);
  }
  /**
   * Create a string attribute.
   */
  static string(t, e) {
    return new St(this, t, e);
  }
  /**
   * Create a number attribute.
   */
  static number(t, e) {
    return new Ft(this, t, e);
  }
  /**
   * Create a boolean attribute.
   */
  static boolean(t, e) {
    return new xt(this, t, e);
  }
  /**
   * Create an uid attribute.
   */
  static uid(t) {
    return new et(this, t);
  }
  /**
   * @deprecated Use `uid` attribute instead.
   */
  static increment() {
    return console.warn("[Vuex ORM] Attribute type `increment` has been deprecated and replaced with `uid`."), this.uid();
  }
  /**
   * Create a has one relationship.
   */
  static hasOne(t, e, r) {
    return new Et(this, t, e, this.localKey(r));
  }
  /**
   * Create a belongs to relationship.
   */
  static belongsTo(t, e, r) {
    return new Mt(this, t, e, this.relation(t).localKey(r));
  }
  /**
   * Create a has many relationship.
   */
  static hasMany(t, e, r) {
    return new At(this, t, e, this.localKey(r));
  }
  /**
   * Create a has many by relationship.
   */
  static hasManyBy(t, e, r) {
    return new kt(this, t, e, this.relation(t).localKey(r));
  }
  /**
   * Create a has many through relationship.
   */
  static hasManyThrough(t, e, r, n, s, a) {
    return new Pt(this, t, e, r, n, this.localKey(s), this.relation(e).localKey(a));
  }
  /**
   * Create a belongs to many relationship.
   */
  static belongsToMany(t, e, r, n, s, a) {
    return new L(this, t, e, r, n, this.localKey(s), this.relation(t).localKey(a));
  }
  /**
   * Create a morph to relationship.
   */
  static morphTo(t, e) {
    return new jt(this, t, e);
  }
  /**
   * Create a morph one relationship.
   */
  static morphOne(t, e, r, n) {
    return new Ct(this, t, e, r, this.localKey(n));
  }
  /**
   * Create a morph many relationship.
   */
  static morphMany(t, e, r, n) {
    return new Tt(this, t, e, r, this.localKey(n));
  }
  /**
   * Create a morph to many relationship.
   */
  static morphToMany(t, e, r, n, s, a, o) {
    return new G(this, t, e, r, n, s, this.localKey(a), this.relation(t).localKey(o));
  }
  /**
   * Create a morphed by many relationship.
   */
  static morphedByMany(t, e, r, n, s, a, o) {
    return new Q(this, t, e, r, n, s, this.localKey(a), this.relation(t).localKey(o));
  }
  /**
   * Mutators to mutate matching fields when instantiating the model.
   */
  static mutators() {
    return {};
  }
  /**
   * Types mapping used to dispatch entities based on their discriminator field
   */
  static types() {
    return {};
  }
  /**
   * Get the store instance from the container.
   */
  static store() {
    return Kt.store;
  }
  /**
   * Get the database instance from store.
   */
  static database() {
    return this.store().$db();
  }
  /**
   * Create a namespaced method name for Vuex Module from the given
   * method name.
   */
  static namespace(t) {
    return `${this.database().namespace}/${this.entity}/${t}`;
  }
  /**
   * Call Vuex Getters.
   */
  static getters(t) {
    return this.store().getters[this.namespace(t)];
  }
  /**
   * Dispatch Vuex Action.
   */
  static dispatch(t, e) {
    return this.store().dispatch(this.namespace(t), e);
  }
  /**
   * Commit Vuex Mutation.
   */
  static commit(t) {
    this.store().commit(`${this.database().namespace}/$mutate`, {
      entity: this.entity,
      callback: t
    });
  }
  /**
   * Get the Model schema definition from the cache.
   */
  static getFields() {
    return this.cachedFields || (this.cachedFields = {}), this.cachedFields[this.entity] ? this.cachedFields[this.entity] : (this.cachedFields[this.entity] = this.fields(), this.cachedFields[this.entity]);
  }
  /**
   * Get all records.
   */
  static all() {
    return this.getters("all")();
  }
  /**
   * Find a record.
   */
  static find(t) {
    return this.getters("find")(t);
  }
  /**
   * Get the record of the given array of ids.
   */
  static findIn(t) {
    return this.getters("findIn")(t);
  }
  /**
   * Get query instance.
   */
  static query() {
    return this.getters("query")();
  }
  /**
   * Check wether the associated database contains data.
   */
  static exists() {
    return this.query().exists();
  }
  /**
   * Create new data with all fields filled by default values.
   */
  static new() {
    return this.dispatch("new");
  }
  /**
   * Save given data to the store by replacing all existing records in the
   * store. If you want to save data without replacing existing records,
   * use the `insert` method instead.
   */
  static create(t) {
    return this.dispatch("create", t);
  }
  /**
   * Insert records.
   */
  static insert(t) {
    return this.dispatch("insert", t);
  }
  /**
   * Update records.
   */
  static update(t) {
    return this.dispatch("update", t);
  }
  /**
   * Insert or update records.
   */
  static insertOrUpdate(t) {
    return this.dispatch("insertOrUpdate", t);
  }
  static delete(t) {
    return this.dispatch("delete", t);
  }
  /**
   * Delete all records from the store.
   */
  static deleteAll() {
    return this.dispatch("deleteAll");
  }
  /**
   * Check if the given key is the primary key. If the model has composite
   * primary key, this method is going to check if the given key is included
   * in the composite key.
   */
  static isPrimaryKey(t) {
    return f.isArray(this.primaryKey) ? this.primaryKey.includes(t) : this.primaryKey === t;
  }
  /**
   * Check if the primary key is a composite key.
   */
  static isCompositePrimaryKey() {
    return f.isArray(this.primaryKey);
  }
  /**
   * Get the id (value of primary key) from teh given record. If primary key is
   * not present, or it is invalid primary key value, which is other than
   * `string` or `number`, it's going to return `null`.
   *
   * If the model has composite key, it's going to return array of ids. If any
   * composite key missing, it will return `null`.
   */
  static getIdFromRecord(t) {
    const e = this.primaryKey;
    if (typeof e == "string")
      return this.getIdFromValue(t[e]);
    const r = e.reduce((n, s) => {
      const a = this.getIdFromValue(t[s]);
      return a !== null && n.push(a), n;
    }, []);
    return r.length === e.length ? r : null;
  }
  /**
   * Get correct index id, which is `string` | `number`, from the given value.
   */
  static getIdFromValue(t) {
    return typeof t == "string" && t !== "" || typeof t == "number" ? t : null;
  }
  /**
   * Get the index ID value from the given record. An index ID is a value that
   * used as a key for records within the Vuex Store.
   *
   * Most of the time, it's same as the value for the Model's primary key but
   * it's always `string`, even if the primary key value is `number`.
   *
   * If the Model has a composite primary key, each value corresponding to
   * those primary key will be stringified and become a single string value
   * such as `'[1,2]'`.
   *
   * If the primary key is not present at the given record, it returns `null`.
   * For the composite primary key, every key must exist at a given record,
   * or it will return `null`.
   */
  static getIndexIdFromRecord(t) {
    const e = this.getIdFromRecord(t);
    return e === null ? null : f.isArray(e) ? JSON.stringify(e) : String(e);
  }
  /**
   * Get local key to pass to the attributes.
   */
  static localKey(t) {
    return t || (typeof this.primaryKey == "string" ? this.primaryKey : "id");
  }
  /**
   * Get the model object that matches the given record type. The method is for
   * getting the correct model object when the model has any inheritance
   * children model.
   *
   * For example, if a User Model have `static types()` declared, and if you
   * pass record with `{ type: 'admin' }`, then the method will likely to
   * return SuperUser class.
   */
  static getModelFromRecord(t) {
    return t instanceof this ? t.$self() : this.getTypeModel(t[this.typeKey]);
  }
  /**
   * Get a model from the container.
   */
  static relation(t) {
    return typeof t != "string" ? t : this.database().model(t);
  }
  /**
   * Get all `belongsToMany` fields from the schema.
   */
  static pivotFields() {
    const t = [];
    return f.forOwn(this.getFields(), (e, r) => {
      (e instanceof L || e instanceof G || e instanceof Q) && t.push({ [r]: e });
    }), t;
  }
  /**
   * Check if fields contains the `belongsToMany` field type.
   */
  static hasPivotFields() {
    return this.pivotFields().length > 0;
  }
  /**
   * Check if the current model has a type definition
   */
  static hasTypes() {
    return Object.keys(this.types()).length > 0;
  }
  /**
   * Get the model corresponding to the given type name. If it can't be found,
   * it'll return `null`.
   */
  static getTypeModel(t) {
    const e = this.types()[t];
    return e || null;
  }
  /**
   * Given a Model, this returns the corresponding key in the InheritanceTypes mapping
   */
  static getTypeKeyValueFromModel(t) {
    const e = t || this, r = this.types();
    for (const n in r)
      if (r[n].entity === e.entity)
        return n;
    return null;
  }
  /**
   * Tries to find a Relation field in all types defined in the InheritanceTypes mapping
   */
  static findRelationInSubTypes(t) {
    const e = this.types();
    for (const r in e) {
      const n = e[r].getFields();
      for (const s in n)
        if (s === t && n[s] instanceof p)
          return n[s];
    }
    return null;
  }
  /**
   * Fill any missing fields in the given record with the default value defined
   * in the model schema.
   */
  static hydrate(t) {
    return new this(t).$getAttributes();
  }
  /**
   * Get the constructor of this model.
   */
  $self() {
    return this.constructor;
  }
  /**
   * Get the primary key for the model.
   */
  $primaryKey() {
    return this.$self().primaryKey;
  }
  /**
   * The definition of the fields of the model and its relations.
   */
  $fields() {
    return this.$self().getFields();
  }
  /**
   * Set index id.
   */
  $setIndexId(t) {
    return this.$id = t, this;
  }
  /**
   * Get the store instance from the container.
   */
  $store() {
    return this.$self().store();
  }
  /**
   * Create a namespaced method name for Vuex Module from the given
   * method name.
   */
  $namespace(t) {
    return this.$self().namespace(t);
  }
  /**
   * Call Vuex Getetrs.
   */
  $getters(t) {
    return this.$self().getters(t);
  }
  /**
   * Dispatch Vuex Action.
   */
  async $dispatch(t, e) {
    return this.$self().dispatch(t, e);
  }
  /**
   * Get all records.
   */
  $all() {
    return this.$getters("all")();
  }
  /**
   * Find a record.
   */
  $find(t) {
    return this.$getters("find")(t);
  }
  /**
   * Find record of the given array of ids.
   */
  $findIn(t) {
    return this.$getters("findIn")(t);
  }
  /**
   * Get query instance.
   */
  $query() {
    return this.$getters("query")();
  }
  /**
   * Create records.
   */
  async $create(t) {
    return this.$dispatch("create", t);
  }
  /**
   * Create records.
   */
  async $insert(t) {
    return this.$dispatch("insert", t);
  }
  /**
   * Update records.
   */
  async $update(t) {
    return f.isArray(t) ? this.$dispatch("update", t) : t.where !== void 0 ? this.$dispatch("update", t) : this.$self().getIndexIdFromRecord(t) === null ? this.$dispatch("update", {
      where: this.$self().getIdFromRecord(this),
      data: t
    }) : this.$dispatch("update", t);
  }
  /**
   * Insert or update records.
   */
  async $insertOrUpdate(t) {
    return this.$dispatch("insertOrUpdate", t);
  }
  /**
   * Save record.
   */
  async $save() {
    const t = this.$self().getFields(), e = Object.keys(t).reduce((n, s) => (t[s] instanceof O && (n[s] = this[s]), n), {}), r = await this.$dispatch("insertOrUpdate", { data: e });
    return this.$fill(r[this.$self().entity][0]), this;
  }
  /**
   * Delete records that matches the given condition.
   */
  async $delete() {
    const t = this.$primaryKey();
    return f.isArray(t) ? this.$dispatch("delete", (e) => t.every((r) => e[r] === this[r])) : this.$dispatch("delete", this[t]);
  }
  /**
   * Delete all records.
   */
  async $deleteAll() {
    return this.$dispatch("deleteAll");
  }
  /**
   * Fill the model instance with the given record. If no record were passed,
   * or if the record has any missing fields, each value of the fields will
   * be filled with its default value defined at model fields definition.
   */
  $fill(t = {}) {
    const e = this.$fields();
    for (const r in e) {
      const n = e[r], s = t[r];
      this[r] = n.make(s, t, r);
    }
    t.$id !== void 0 && this.$setIndexId(t.$id);
  }
  /**
   * Generate missing primary ids and index id.
   */
  $generateId() {
    return this.$generatePrimaryId().$generateIndexId();
  }
  /**
   * Generate any missing primary ids.
   */
  $generatePrimaryId() {
    const t = this.$self().primaryKey;
    return (f.isArray(t) ? t : [t]).forEach((r) => {
      (this[r] === void 0 || this[r] === null) && (this[r] = H.make());
    }), this;
  }
  /**
   * Generate index id from current model attributes.
   */
  $generateIndexId() {
    return this.$setIndexId(this.$getIndexIdFromAttributes());
  }
  /**
   * Get index id based on current model attributes.
   */
  $getIndexIdFromAttributes() {
    return this.$self().getIndexIdFromRecord(this);
  }
  /**
   * Get all of the current attributes on the model. It includes index id
   * value as well. This method is mainly used when saving a model to
   * the store.
   */
  $getAttributes() {
    return jr(this);
  }
  /**
   * Serialize field values into json.
   */
  $toJson() {
    return le(this);
  }
}
F.primaryKey = "id";
F.typeKey = "type";
F.state = {};
const zr = (i, t, e, r) => () => r[`${i.$connection}/query`](i.$name), Ur = (i, t, e, r) => () => r[`${i.$connection}/all`](i.$name), Dr = (i, t, e, r) => (n) => r[`${i.$connection}/find`](i.$name, n), Nr = (i, t, e, r) => (n) => r[`${i.$connection}/findIn`](i.$name, n), Ht = {
  query: zr,
  all: Ur,
  find: Dr,
  findIn: Nr
};
async function Vr(i) {
  const t = i.state, e = t.$name;
  return i.dispatch(`${t.$connection}/new`, { entity: e }, { root: !0 });
}
async function Lr(i, t) {
  const e = i.state, r = e.$name;
  return i.dispatch(`${e.$connection}/create`, { ...t, entity: r }, { root: !0 });
}
async function Gr(i, t) {
  const e = i.state, r = e.$name;
  return i.dispatch(`${e.$connection}/insert`, { ...t, entity: r }, { root: !0 });
}
async function Qr(i, t) {
  const e = i.state, r = e.$name;
  return _(t) ? i.dispatch(`${e.$connection}/update`, { entity: r, data: t }, { root: !0 }) : t.data === void 0 ? i.dispatch(`${e.$connection}/update`, { entity: r, data: t }, { root: !0 }) : i.dispatch(`${e.$connection}/update`, { entity: r, ...t }, { root: !0 });
}
async function Wr(i, t) {
  const e = i.state, r = e.$name;
  return i.dispatch(`${e.$connection}/insertOrUpdate`, { entity: r, ...t }, { root: !0 });
}
async function Jr(i, t) {
  const e = i.state, r = e.$name, n = t;
  return i.dispatch(`${e.$connection}/delete`, { entity: r, where: n }, { root: !0 });
}
async function Yr(i) {
  const t = i.state, e = t.$name;
  return i.dispatch(`${t.$connection}/deleteAll`, { entity: e }, { root: !0 });
}
const zt = {
  new: Vr,
  create: Lr,
  insert: Gr,
  update: Qr,
  insertOrUpdate: Wr,
  delete: Jr,
  deleteAll: Yr
};
function Xr(i, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
  }
}
function de(i, t, e) {
  return t && Xr(i.prototype, t), i;
}
function E() {
  return E = Object.assign || function(i) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
    }
    return i;
  }, E.apply(this, arguments);
}
function fe(i, t) {
  i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i.__proto__ = t;
}
function W(i) {
  return !!(i && typeof i.hasOwnProperty == "function" && (i.hasOwnProperty("__ownerID") || // Immutable.Map
  i._map && i._map.hasOwnProperty("__ownerID")));
}
function Zr(i, t, e) {
  return Object.keys(i).reduce(function(r, n) {
    var s = "" + n;
    return r.has(s) ? r.set(s, e(r.get(s), i[s])) : r;
  }, t);
}
var qr = function(t) {
  return function(e) {
    return W(e) ? e.get(t) : e[t];
  };
}, tn = /* @__PURE__ */ (function() {
  function i(e, r, n) {
    if (r === void 0 && (r = {}), n === void 0 && (n = {}), !e || typeof e != "string")
      throw new Error("Expected a string key for Entity, but found " + e + ".");
    var s = n, a = s.idAttribute, o = a === void 0 ? "id" : a, h = s.mergeStrategy, c = h === void 0 ? function(w, R) {
      return E({}, w, R);
    } : h, u = s.processStrategy, l = u === void 0 ? function(w) {
      return E({}, w);
    } : u, d = s.fallbackStrategy, y = d === void 0 ? function(w, R) {
    } : d;
    this._key = e, this._getId = typeof o == "function" ? o : qr(o), this._idAttribute = o, this._mergeStrategy = c, this._processStrategy = l, this._fallbackStrategy = y, this.define(r);
  }
  var t = i.prototype;
  return t.define = function(r) {
    this.schema = Object.keys(r).reduce(function(n, s) {
      var a, o = r[s];
      return E({}, n, (a = {}, a[s] = o, a));
    }, this.schema || {});
  }, t.getId = function(r, n, s) {
    return this._getId(r, n, s);
  }, t.merge = function(r, n) {
    return this._mergeStrategy(r, n);
  }, t.fallback = function(r, n) {
    return this._fallbackStrategy(r, n);
  }, t.normalize = function(r, n, s, a, o, h) {
    var c = this, u = this.getId(r, n, s), l = this.key;
    if (l in h || (h[l] = {}), u in h[l] || (h[l][u] = []), h[l][u].some(function(y) {
      return y === r;
    }))
      return u;
    h[l][u].push(r);
    var d = this._processStrategy(r, n, s);
    return Object.keys(this.schema).forEach(function(y) {
      if (d.hasOwnProperty(y) && typeof d[y] == "object") {
        var w = c.schema[y], R = typeof w == "function" ? w(r) : w;
        d[y] = a(d[y], d, y, R, o, h);
      }
    }), o(this, d, r, n, s), u;
  }, t.denormalize = function(r, n) {
    var s = this;
    return W(r) ? Zr(this.schema, r, n) : (Object.keys(this.schema).forEach(function(a) {
      if (r.hasOwnProperty(a)) {
        var o = s.schema[a];
        r[a] = n(r[a], o);
      }
    }), r);
  }, de(i, [{
    key: "key",
    get: function() {
      return this._key;
    }
  }, {
    key: "idAttribute",
    get: function() {
      return this._idAttribute;
    }
  }]), i;
})(), ye = /* @__PURE__ */ (function() {
  function i(e, r) {
    r && (this._schemaAttribute = typeof r == "string" ? function(n) {
      return n[r];
    } : r), this.define(e);
  }
  var t = i.prototype;
  return t.define = function(r) {
    this.schema = r;
  }, t.getSchemaAttribute = function(r, n, s) {
    return !this.isSingleSchema && this._schemaAttribute(r, n, s);
  }, t.inferSchema = function(r, n, s) {
    if (this.isSingleSchema)
      return this.schema;
    var a = this.getSchemaAttribute(r, n, s);
    return this.schema[a];
  }, t.normalizeValue = function(r, n, s, a, o, h) {
    var c = this.inferSchema(r, n, s);
    if (!c)
      return r;
    var u = a(r, n, s, c, o, h);
    return this.isSingleSchema || u === void 0 || u === null ? u : {
      id: u,
      schema: this.getSchemaAttribute(r, n, s)
    };
  }, t.denormalizeValue = function(r, n) {
    var s = W(r) ? r.get("schema") : r.schema;
    if (!this.isSingleSchema && !s)
      return r;
    var a = this.isSingleSchema ? void 0 : W(r) ? r.get("id") : r.id, o = this.isSingleSchema ? this.schema : this.schema[s];
    return n(a || r, o);
  }, de(i, [{
    key: "isSingleSchema",
    get: function() {
      return !this._schemaAttribute;
    }
  }]), i;
})(), en = /* @__PURE__ */ (function(i) {
  fe(t, i);
  function t(r, n) {
    if (!n)
      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
    return i.call(this, r, n) || this;
  }
  var e = t.prototype;
  return e.normalize = function(n, s, a, o, h, c) {
    return this.normalizeValue(n, s, a, o, h, c);
  }, e.denormalize = function(n, s) {
    return this.denormalizeValue(n, s);
  }, t;
})(ye), rn = function(t) {
  var e = Array.isArray(t);
  if (e && t.length > 1)
    throw new Error("Expected schema definition to be a single schema, but found " + t.length + ".");
  return t[0];
}, pe = function(t) {
  return Array.isArray(t) ? t : Object.keys(t).map(function(e) {
    return t[e];
  });
}, nn = function(t, e, r, n, s, a, o) {
  t = rn(t);
  var h = pe(e);
  return h.map(function(c, u) {
    return s(c, r, n, t, a, o);
  });
}, sn = /* @__PURE__ */ (function(i) {
  fe(t, i);
  function t() {
    return i.apply(this, arguments) || this;
  }
  var e = t.prototype;
  return e.normalize = function(n, s, a, o, h, c) {
    var u = this, l = pe(n);
    return l.map(function(d, y) {
      return u.normalizeValue(d, s, a, o, h, c);
    }).filter(function(d) {
      return d != null;
    });
  }, e.denormalize = function(n, s) {
    var a = this;
    return n && n.map ? n.map(function(o) {
      return a.denormalizeValue(o, s);
    }) : n;
  }, t;
})(ye), an = function(t, e, r, n, s, a, o) {
  var h = E({}, e);
  return Object.keys(t).forEach(function(c) {
    var u = t[c], l = typeof u == "function" ? u(e) : u, d = s(e[c], e, c, l, a, o);
    d == null ? delete h[c] : h[c] = d;
  }), h;
}, on = function i(t, e, r, n, s, a) {
  if (typeof t != "object" || !t)
    return t;
  if (typeof n == "object" && (!n.normalize || typeof n.normalize != "function")) {
    var o = Array.isArray(n) ? nn : an;
    return o(n, t, e, r, i, s, a);
  }
  return n.normalize(t, e, r, i, s, a);
}, hn = function(t) {
  return function(e, r, n, s, a) {
    var o = e.key, h = e.getId(n, s, a);
    o in t || (t[o] = {});
    var c = t[o][h];
    c ? t[o][h] = e.merge(c, r) : t[o][h] = r;
  };
}, at = {
  Array: sn,
  Entity: tn,
  Union: en
}, cn = function(t, e) {
  if (!t || typeof t != "object")
    throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (t === null ? "null" : typeof t) + '".');
  var r = {}, n = hn(r), s = {}, a = on(t, t, null, e, n, s);
  return {
    entities: r,
    result: a
  };
};
class un {
  /**
   * Normalize the record.
   */
  static process(t, e) {
    if (f.isEmpty(e))
      return {};
    const r = t.database.schemas[t.model.entity], n = f.isArray(e) ? [r] : r;
    return cn(e, n).entities;
  }
}
class ln {
  /**
   * Create an intermediate entity if the data contains any entities that
   * require it for example `belongsTo` or `morphMany`.
   */
  static process(t, e) {
    return Object.keys(e).forEach((r) => {
      const n = t.getModel(r);
      n.hasPivotFields() && f.forOwn(n.pivotFields(), (s) => {
        f.forOwn(s, (a, o) => {
          a.createPivots(n, e, o);
        });
      });
    }), e;
  }
}
class dn {
  /**
   * Attach missing relational key to the records.
   */
  static process(t, e) {
    return f.forOwn(e, (r, n) => {
      const s = t.getModel(n).fields();
      f.forOwn(r, (a) => {
        f.forOwn(a, (o, h) => {
          const c = s[h];
          c instanceof p && o !== null && c.attach(o, a, e);
        });
      });
    }), e;
  }
}
class fn {
  /**
   * Normalize the given data.
   */
  static normalize(t, e) {
    let r = un.process(t, e);
    return r = dn.process(t, r), r = ln.process(t, r), r;
  }
}
class yn {
  /**
   * Filter the given data by registered where clause.
   */
  static filter(t, e) {
    return t.wheres.length === 0 ? e : e.filter((r) => this.check(t, r));
  }
  /**
   * Checks if given Record matches the registered where clause.
   */
  static check(t, e) {
    const r = f.groupBy(t.wheres, (a) => a.boolean), n = this.getComparator(t, e);
    let s = [];
    return r.and && s.push(r.and.every(n)), r.or && s.push(r.or.some(n)), s.indexOf(!0) !== -1;
  }
  /**
   * Get comparator for the where clause.
   */
  static getComparator(t, e) {
    return (r) => {
      if (typeof r.field == "function") {
        const n = new m(t.store, t.entity), s = this.executeWhereClosure(n, e, r.field);
        if (typeof s == "boolean")
          return s;
        const a = n.get();
        return !f.isEmpty(a.filter((o) => o.$id === e.$id));
      }
      return typeof r.value == "function" ? r.value(e[r.field]) : f.isArray(r.value) ? r.value.indexOf(e[r.field]) !== -1 : e[r.field] === r.value;
    };
  }
  /**
   * Execute where closure.
   */
  static executeWhereClosure(t, e, r) {
    if (r.length !== 3)
      return r(e, t);
    const n = new t.model(e);
    return r(e, t, n);
  }
}
class pn {
  /**
   * Sort the given data by registered orders.
   */
  static filter(t, e) {
    if (t.orders.length === 0)
      return e;
    const r = t.orders.map((s) => s.key), n = t.orders.map((s) => s.direction);
    return f.orderBy(e, r, n);
  }
}
class mn {
  /**
   * Limit the given records by the lmilt and offset.
   */
  static filter(t, e) {
    return e.slice(t.offsetNumber, t.offsetNumber + t.limitNumber);
  }
}
class ot {
  /**
   * Filter the given data by registered where clause.
   */
  static where(t, e) {
    return yn.filter(t, e);
  }
  /**
   * Sort the given data by registered orders.
   */
  static orderBy(t, e) {
    return pn.filter(t, e);
  }
  /**
   * Limit the given records by the lmilt and offset.
   */
  static limit(t, e) {
    return mn.filter(t, e);
  }
}
class j {
  /**
   * Set the relationships that should be eager loaded with the query.
   */
  static with(t, e, r) {
    if (e === "*") {
      this.withAll(t, r);
      return;
    }
    if (_(e)) {
      e.forEach((n) => this.with(t, n, r));
      return;
    }
    this.parseWithRelations(t, e.split("."), r);
  }
  /**
   * Set all relationships to be eager loaded with the query.
   */
  static withAll(t, e) {
    const r = t.model.getFields();
    for (const n in r)
      r[n] instanceof p && this.with(t, n, e);
  }
  /**
   * Set relationships to be recursively eager loaded with the query.
   */
  static withAllRecursive(t, e) {
    this.withAll(t, (r) => {
      e > 0 && r.withAllRecursive(e - 1);
    });
  }
  /**
   * Set eager load relation and constraint.
   */
  static setEagerLoad(t, e, r = null) {
    t.load[e] || (t.load[e] = []), r && t.load[e].push(r);
  }
  /**
   * Parse a list of relations into individuals.
   */
  static parseWithRelations(t, e, r) {
    const n = e[0];
    n.split("|").forEach((s) => {
      if (e.length === 1) {
        this.setEagerLoad(t, s, r);
        return;
      }
      this.setEagerLoad(t, s);
    }), e.length !== 1 && (e.shift(), this.addNestedWiths(t, n, e, r));
  }
  /**
   * Parse the nested relationships in a relation.
   */
  static addNestedWiths(t, e, r, n) {
    this.setEagerLoad(t, e, (s) => {
      s.with(r.join("."), n);
    });
  }
  /**
   * Eager load the relationships for the given collection.
   */
  static eagerLoadRelations(t, e) {
    const r = t.model.getFields();
    for (const n in t.load) {
      const s = t.load[n];
      let a = r[n];
      if (a instanceof p) {
        a.load(t, e, n, s);
        continue;
      }
      if (t.model.hasTypes()) {
        const o = t.model.findRelationInSubTypes(n);
        o !== null && o.load(t, e, n, s);
      }
    }
  }
}
class C {
  /**
   * Set where constraint based on relationship existence.
   */
  static has(t, e, r, n) {
    this.setHas(t, e, "exists", r, n);
  }
  /**
   * Set where constraint based on relationship absence.
   */
  static hasNot(t, e, r, n) {
    this.setHas(t, e, "doesntExist", r, n);
  }
  /**
   * Add where has condition.
   */
  static whereHas(t, e, r) {
    this.setHas(t, e, "exists", void 0, void 0, r);
  }
  /**
   * Add where has not condition.
   */
  static whereHasNot(t, e, r) {
    this.setHas(t, e, "doesntExist", void 0, void 0, r);
  }
  /**
   * Set `has` condition.
   */
  static setHas(t, e, r, n = ">=", s = 1, a = null) {
    if (typeof n == "number") {
      t.have.push({
        relation: e,
        type: r,
        operator: ">=",
        count: n,
        constraint: a
      });
      return;
    }
    t.have.push({ relation: e, type: r, operator: n, count: s, constraint: a });
  }
  /**
   * Convert `has` conditions to where clause. It will check any relationship
   * existence, or absence for the records then set ids of the records that
   * matched the condition to `where` clause.
   *
   * This way, when the query gets executed, only those records that matched
   * the `has` condition get retrieved. In the future, once relationship index
   * mapping is implemented, we can simply do all checks inside the where
   * filter since we can treat `has` condition as usual `where` condition.
   *
   * For now, since we must fetch any relationship by eager loading them, due
   * to performance concern, we'll apply `has` conditions this way to gain
   * maximum performance.
   */
  static applyConstraints(t) {
    if (t.have.length === 0)
      return;
    const e = t.newQuery();
    this.addHasWhereConstraints(t, e), this.addHasConstraints(t, e.get());
  }
  /**
   * Add has constraints to the given query. It's going to set all relationship
   * as `with` alongside with its closure constraints.
   */
  static addHasWhereConstraints(t, e) {
    t.have.forEach((r) => {
      e.with(r.relation, r.constraint);
    });
  }
  /**
   * Add has constraints as where clause.
   */
  static addHasConstraints(t, e) {
    const r = this.getComparators(t), n = [];
    e.forEach((s) => {
      r.every((a) => a(s)) && n.push(s.$self().getIdFromRecord(s));
    }), t.whereIdIn(n);
  }
  /**
   * Get comparators for the has clause.
   */
  static getComparators(t) {
    return t.have.map((e) => this.getComparator(e));
  }
  /**
   * Get a comparator for the has clause.
   */
  static getComparator(t) {
    const e = this.getCountComparator(t.operator);
    return (r) => {
      const n = this.getRelationshipCount(r[t.relation]), s = e(n, t.count);
      return t.type === "exists" ? s : !s;
    };
  }
  /**
   * Get count of the relationship.
   */
  static getRelationshipCount(t) {
    return _(t) ? t.length : t ? 1 : 0;
  }
  /**
   * Get comparator function for the `has` clause.
   */
  static getCountComparator(t) {
    switch (t) {
      case "=":
        return (e, r) => e === r;
      case ">":
        return (e, r) => e > r;
      case ">=":
        return (e, r) => e >= r;
      case "<":
        return (e, r) => e > 0 && e < r;
      case "<=":
        return (e, r) => e > 0 && e <= r;
      default:
        return (e, r) => e === r;
    }
  }
}
class m {
  /**
   * Create a new Query instance.
   */
  constructor(t, e) {
    this.appliedOnBase = !0, this.idFilter = null, this.cancelIdFilter = !1, this.joinedIdFilter = null, this.wheres = [], this.have = [], this.orders = [], this.offsetNumber = 0, this.limitNumber = Math.pow(2, 53) - 1, this.load = {}, this.store = t, this.database = t.$db(), this.model = this.getModel(e), this.baseModel = this.getBaseModel(e), this.entity = e, this.baseEntity = this.baseModel.entity, this.rootState = this.database.getState(), this.state = this.rootState[this.baseEntity], this.appliedOnBase = this.baseEntity === this.entity;
  }
  /**
   * Delete all records from the store.
   */
  static deleteAll(t) {
    const e = t.$db(), r = e.models();
    for (const n in r)
      e.getState()[n] && new this(t, n).deleteAll();
  }
  /**
   * Register a global hook. It will return ID for the hook that users may use
   * it to unregister hooks.
   */
  static on(t, e) {
    const r = ++this.lastHookId;
    return this.hooks[t] || (this.hooks[t] = []), this.hooks[t].push({ id: r, callback: e }), r;
  }
  /**
   * Unregister global hook with the given id.
   */
  static off(t) {
    return Object.keys(this.hooks).some((e) => {
      const r = this.hooks[e], n = r.findIndex((s) => s.id === t);
      return n === -1 ? !1 : (r.splice(n, 1), !0);
    });
  }
  /**
   * Get query class.
   */
  self() {
    return this.constructor;
  }
  /**
   * Create a new query instance.
   */
  newQuery(t) {
    return t = t || this.entity, new m(this.store, t);
  }
  /**
   * Get model of given name from the container.
   */
  getModel(t) {
    const e = t || this.entity;
    return this.database.model(e);
  }
  /**
   * Get all models from the container.
   */
  getModels() {
    return this.database.models();
  }
  /**
   * Get base model of given name from the container.
   */
  getBaseModel(t) {
    return this.database.baseModel(t);
  }
  /**
   * Returns all record of the query chain result. This method is alias
   * of the `get` method.
   */
  all() {
    return this.get();
  }
  /**
   * Find the record by the given id.
   */
  find(t) {
    const e = this.state.data[this.normalizeIndexId(t)];
    return e ? this.item(this.hydrate(e)) : null;
  }
  /**
   * Get the record of the given array of ids.
   */
  findIn(t) {
    if (!f.isArray(t))
      return [];
    const e = t.reduce((r, n) => {
      const s = this.state.data[this.normalizeIndexId(n)];
      return s && r.push(this.hydrate(s)), r;
    }, []);
    return this.collect(e);
  }
  /**
   * Returns all record of the query chain result.
   */
  get() {
    const t = this.select();
    return this.collect(t);
  }
  /**
   * Returns the first record of the query chain result.
   */
  first() {
    const t = this.select();
    return t.length === 0 ? null : this.item(this.hydrate(t[0]));
  }
  /**
   * Returns the last record of the query chain result.
   */
  last() {
    const t = this.select();
    return t.length === 0 ? null : this.item(this.hydrate(t[t.length - 1]));
  }
  /**
   * Checks whether a result of the query chain exists.
   */
  exists() {
    return this.select().length > 0;
  }
  /**
   * Add a and where clause to the query.
   */
  where(t, e) {
    return this.isIdfilterable(t) && this.setIdFilter(e), this.wheres.push({ field: t, value: e, boolean: "and" }), this;
  }
  /**
   * Add a or where clause to the query.
   */
  orWhere(t, e) {
    return this.cancelIdFilter = !0, this.wheres.push({ field: t, value: e, boolean: "or" }), this;
  }
  /**
   * Filter records by their primary key.
   */
  whereId(t) {
    return this.model.isCompositePrimaryKey() ? this.where("$id", this.normalizeIndexId(t)) : this.where(this.model.primaryKey, t);
  }
  /**
   * Filter records by their primary keys.
   */
  whereIdIn(t) {
    if (this.model.isCompositePrimaryKey()) {
      const e = t.reduce((r, n) => [...r, this.normalizeIndexId(n)], []);
      return this.where("$id", e);
    }
    return this.where(this.model.primaryKey, t);
  }
  /**
   * Fast comparison for foreign keys. If the foreign key is the primary key,
   * it uses object lookup, fallback normal where otherwise.
   *
   * Why separate `whereFk` instead of just `where`? Additional logic needed
   * for the distinction between where and orWhere in normal queries, but
   * Fk lookups are always "and" type.
   */
  whereFk(t, e) {
    const r = f.isArray(e) ? e : [e];
    return t === this.model.primaryKey ? (this.setJoinedIdFilter(r), this) : (this.where(t, r), this);
  }
  /**
   * Convert value to string for composite primary keys as it expects an array.
   * Otherwise return as is.
   *
   * Throws an error when malformed value is given:
   * - Composite primary key defined on model, expects value to be array.
   * - Normal primary key defined on model, expects a primitive value.
   */
  normalizeIndexId(t) {
    if (this.model.isCompositePrimaryKey()) {
      if (!f.isArray(t))
        throw new Error("[Vuex ORM] Entity `" + this.entity + "` is configured with a composite primary key and expects an array value but instead received: " + JSON.stringify(t));
      return JSON.stringify(t);
    }
    if (f.isArray(t))
      throw new Error("[Vuex ORM] Entity `" + this.entity + "` expects a single value but instead received: " + JSON.stringify(t));
    return t;
  }
  /**
   * Check whether the given field is filterable through primary key
   * direct look up.
   */
  isIdfilterable(t) {
    return (t === this.model.primaryKey || t === "$id") && !this.cancelIdFilter;
  }
  /**
   * Set id filter for the given where condition.
   */
  setIdFilter(t) {
    const e = f.isArray(t) ? t : [t];
    if (this.idFilter === null) {
      this.idFilter = new Set(e);
      return;
    }
    this.idFilter = new Set(e.filter((r) => this.idFilter.has(r)));
  }
  /**
   * Set joined id filter for the given where condition.
   */
  setJoinedIdFilter(t) {
    if (this.joinedIdFilter === null) {
      this.joinedIdFilter = new Set(t);
      return;
    }
    this.joinedIdFilter = new Set(t.filter((e) => this.joinedIdFilter.has(e)));
  }
  /**
   * Add an order to the query.
   */
  orderBy(t, e = "asc") {
    return this.orders.push({ key: t, direction: e }), this;
  }
  /**
   * Add an offset to the query.
   */
  offset(t) {
    return this.offsetNumber = t, this;
  }
  /**
   * Add limit to the query.
   */
  limit(t) {
    return this.limitNumber = t, this;
  }
  /**
   * Set the relationships that should be loaded.
   */
  with(t, e = null) {
    return j.with(this, t, e), this;
  }
  /**
   * Query all relations.
   */
  withAll(t = null) {
    return j.withAll(this, t), this;
  }
  /**
   * Query all relations recursively.
   */
  withAllRecursive(t = 3) {
    return j.withAllRecursive(this, t), this;
  }
  /**
   * Set where constraint based on relationship existence.
   */
  has(t, e, r) {
    return C.has(this, t, e, r), this;
  }
  /**
   * Set where constraint based on relationship absence.
   */
  hasNot(t, e, r) {
    return C.hasNot(this, t, e, r), this;
  }
  /**
   * Add where has condition.
   */
  whereHas(t, e) {
    return C.whereHas(this, t, e), this;
  }
  /**
   * Add where has not condition.
   */
  whereHasNot(t, e) {
    return C.whereHasNot(this, t, e), this;
  }
  /**
   * Get all records from the state and convert them into the array of
   * model instances.
   */
  records() {
    return this.finalizeIdFilter(), this.getIdsToLookup().reduce((t, e) => {
      const r = this.state.data[e];
      if (!r)
        return t;
      const n = this.hydrate(r);
      return !this.appliedOnBase && this.model.entity !== n.$self().entity || t.push(n), t;
    }, []);
  }
  /**
   * Check whether if id filters should on select. If not, clear out id filter.
   */
  finalizeIdFilter() {
    !this.cancelIdFilter || this.idFilter === null || (this.where(this.model.isCompositePrimaryKey() ? "$id" : this.model.primaryKey, Array.from(this.idFilter.values())), this.idFilter = null);
  }
  /**
   * Get a list of id that should be used to lookup when fetching records
   * from the state.
   */
  getIdsToLookup() {
    return this.idFilter && this.joinedIdFilter ? Array.from(this.idFilter.values()).filter((t) => this.joinedIdFilter.has(t)) : this.idFilter || this.joinedIdFilter ? Array.from((this.idFilter || this.joinedIdFilter).values()) : Object.keys(this.state.data);
  }
  /**
   * Process the query and filter data.
   */
  select() {
    C.applyConstraints(this);
    let t = this.records();
    return t = this.executeSelectHook("beforeSelect", t), t = this.filterWhere(t), t = this.executeSelectHook("afterWhere", t), t = this.filterOrderBy(t), t = this.executeSelectHook("afterOrderBy", t), t = this.filterLimit(t), t = this.executeSelectHook("afterLimit", t), t;
  }
  /**
   * Filter the given data by registered where clause.
   */
  filterWhere(t) {
    return ot.where(this, t);
  }
  /**
   * Sort the given data by registered orders.
   */
  filterOrderBy(t) {
    return ot.orderBy(this, t);
  }
  /**
   * Limit the given records by the limit and offset.
   */
  filterLimit(t) {
    return ot.limit(this, t);
  }
  /**
   * Get the count of the retrieved data.
   */
  count() {
    return this.get().length;
  }
  /**
   * Get the max value of the specified filed.
   */
  max(t) {
    const e = this.get().reduce((r, n) => (typeof n[t] == "number" && r.push(n[t]), r), []);
    return e.length === 0 ? 0 : Math.max(...e);
  }
  /**
   * Get the min value of the specified filed.
   */
  min(t) {
    const e = this.get().reduce((r, n) => (typeof n[t] == "number" && r.push(n[t]), r), []);
    return e.length === 0 ? 0 : Math.min(...e);
  }
  /**
   * Get the sum value of the specified filed.
   */
  sum(t) {
    return this.get().reduce((e, r) => (typeof r[t] == "number" && (e += r[t]), e), 0);
  }
  /**
   * Create a item from given record.
   */
  item(t) {
    return Object.keys(this.load).length > 0 && j.eagerLoadRelations(this, [t]), t;
  }
  /**
   * Create a collection (array) from given records.
   */
  collect(t) {
    return t.length < 1 ? [] : (Object.keys(this.load).length > 0 && (t = t.map((e) => {
      const r = this.model.getModelFromRecord(e);
      return new r(e);
    }), j.eagerLoadRelations(this, t)), t);
  }
  /**
   * Create new data with all fields filled by default values.
   */
  new() {
    const t = new this.model().$generateId();
    return this.commitInsert(t.$getAttributes()), t;
  }
  /**
   * Save given data to the store by replacing all existing records in the
   * store. If you want to save data without replacing existing records,
   * use the `insert` method instead.
   */
  create(t, e) {
    return this.persist("create", t, e);
  }
  /**
   * Create records to the state.
   */
  createRecords(t) {
    return this.deleteAll(), this.insertRecords(t);
  }
  /**
   * Insert given data to the store. Unlike `create`, this method will not
   * remove existing data within the store, but it will update the data
   * with the same primary key.
   */
  insert(t, e) {
    return this.persist("insert", t, e);
  }
  /**
   * Insert records to the store.
   */
  insertRecords(t) {
    let e = this.mapHydrateRecords(t);
    return e = this.executeMutationHooks("beforeCreate", e), this.commitInsertRecords(this.convertCollectionToRecords(e)), this.executeMutationHooks("afterCreate", e), e;
  }
  /**
   * Update data in the state.
   */
  update(t, e, r) {
    if (f.isArray(t))
      return this.persist("update", t, r);
    if (typeof t == "function") {
      if (!e)
        throw new Error("You must specify `where` to update records by specifying `data` as a closure.");
      return typeof e == "function" ? this.updateByCondition(t, e) : this.updateById(t, e);
    }
    if (typeof e == "function")
      return this.updateByCondition(t, e);
    if (!e)
      return this.persist("update", t, r);
    if (this.model.isCompositePrimaryKey() && !f.isArray(e))
      throw new Error("[Vuex ORM] You can't specify `where` value as `string` or `number` when you have a composite key defined in your model. Please include composite keys to the `data` fields.");
    return this.updateById(t, e);
  }
  /**
   * Update all records.
   */
  updateRecords(t) {
    const e = this.hydrateRecordsByMerging(t);
    return this.performUpdate(e);
  }
  /**
   * Update the state by id.
   */
  updateById(t, e) {
    e = typeof e == "number" ? e.toString() : this.normalizeIndexId(e);
    const r = this.state.data[e];
    if (!r)
      return null;
    const n = this.hydrate(r), s = {
      [e]: this.processUpdate(t, n)
    };
    return this.performUpdate(s), s[e];
  }
  /**
   * Update the state by condition.
   */
  updateByCondition(t, e) {
    const r = Object.keys(this.state.data).reduce((n, s) => {
      const a = this.hydrate(this.state.data[s]);
      return e(a) && (n[s] = this.processUpdate(t, a)), n;
    }, {});
    return this.performUpdate(r);
  }
  /**
   * Update the given record with given data.
   */
  processUpdate(t, e) {
    return typeof t == "function" ? (t(e), e) : e.constructor !== this.model && e instanceof F ? this.hydrate({ ...e, ...t }, e.constructor) : this.hydrate({ ...e, ...t });
  }
  /**
   * Commit `update` to the state.
   */
  performUpdate(t) {
    t = this.updateIndexes(t);
    const e = this.buildHooks("beforeUpdate"), r = this.buildHooks("afterUpdate"), n = [];
    for (const s in t) {
      const a = t[s];
      e.some((o) => o(a, null, this.entity) === !1) || (this.commitInsert(a.$getAttributes()), r.forEach((o) => {
        o(a, null, this.entity);
      }), n.push(a));
    }
    return n;
  }
  /**
   * Update the key of the instances. This is needed when a user updates
   * record's primary key. We must then update the index key to
   * correspond with new id value.
   */
  updateIndexes(t) {
    return Object.keys(t).reduce((e, r) => {
      const n = e[r], s = String(this.model.getIndexIdFromRecord(n));
      return r !== s && (n.$id = s, e[s] = n, delete e[r]), e;
    }, t);
  }
  /**
   * Insert or update given data to the state. Unlike `insert`, this method
   * will not replace existing data within the state, but it will update only
   * the submitted data with the same primary key.
   */
  insertOrUpdate(t, e) {
    return this.persist("insertOrUpdate", t, e);
  }
  /**
   * Insert or update the records.
   */
  insertOrUpdateRecords(t) {
    let e = {}, r = {};
    return Object.keys(t).forEach((n) => {
      const s = t[n];
      if (this.state.data[n]) {
        r[n] = s;
        return;
      }
      e[n] = s;
    }), [
      ...this.insertRecords(e),
      ...this.updateRecords(r)
    ];
  }
  /**
   * Persist data into the state while preserving it's original structure.
   */
  persist(t, e, r) {
    const n = f.cloneDeep(e), s = this.normalize(n);
    return f.isEmpty(s) ? (t === "create" && this.emptyState(), {}) : Object.entries(s).reduce((a, [o, h]) => {
      const c = this.newQuery(o), u = this.getPersistMethod(o, r, t), l = c.persistRecords(u, h);
      return l.length > 0 && (a[o] = l), a;
    }, {});
  }
  /**
   * Persist given records to the store by the given method.
   */
  persistRecords(t, e) {
    switch (t) {
      case "create":
        return this.createRecords(e);
      case "insert":
        return this.insertRecords(e);
      case "update":
        return this.updateRecords(e);
      case "insertOrUpdate":
        return this.insertOrUpdateRecords(e);
    }
  }
  /**
   * Get persist method from given information.
   */
  getPersistMethod(t, e, r) {
    return e.create && e.create.includes(t) ? "create" : e.insert && e.insert.includes(t) ? "insert" : e.update && e.update.includes(t) ? "update" : e.insertOrUpdate && e.insertOrUpdate.includes(t) ? "insertOrUpdate" : r;
  }
  delete(t) {
    return typeof t == "function" ? this.deleteByCondition(t) : this.deleteById(t);
  }
  /**
   * Delete all records from the store. Even when deleting all records, we'll
   * iterate over all records to ensure that before and after hook will be
   * called for each existing records.
   */
  deleteAll() {
    return this.appliedOnBase ? this.deleteByCondition(() => !0) : this.deleteByCondition((t) => t.$self().entity === this.model.entity);
  }
  /**
   * Delete a record from the store by given id.
   */
  deleteById(t) {
    const e = this.find(t);
    return e ? this.deleteByCondition((r) => r.$id === e.$id)[0] : null;
  }
  /**
   * Perform the actual delete query to the store.
   */
  deleteByCondition(t) {
    let e = this.mapHydrateAndFilterRecords(this.state.data, t);
    return e = this.executeMutationHooks("beforeDelete", e), e.length === 0 ? [] : (this.commitDelete(e.map((r) => r.$id)), this.executeMutationHooks("afterDelete", e), e);
  }
  /**
   * Commit mutation.
   */
  commit(t, e) {
    this.store.commit(`${this.database.namespace}/${t}`, {
      entity: this.baseEntity,
      ...e
    });
  }
  /**
   * Commit insert mutation.
   */
  commitInsert(t) {
    this.commit("insert", { record: t });
  }
  /**
   * Commit insert records mutation.
   */
  commitInsertRecords(t) {
    this.commit("insertRecords", { records: t });
  }
  /**
   * Commit delete mutation.
   */
  commitDelete(t) {
    this.commit("delete", { id: t });
  }
  /**
   * Normalize the given data.
   */
  normalize(t) {
    return fn.normalize(this, t);
  }
  /**
   * Convert given record to the model instance.
   */
  hydrate(t, e) {
    if (e)
      return new e(t);
    const r = this.model.getModelFromRecord(t);
    if (r !== null)
      return new r(t);
    if (!this.appliedOnBase && t[this.model.typeKey] === void 0) {
      const s = this.model.getTypeKeyValueFromModel();
      return t = { ...t, [this.model.typeKey]: s }, new this.model(t);
    }
    const n = this.getBaseModel(this.entity);
    return new n(t);
  }
  /**
   * Convert given records to instances by merging existing record. If there's
   * no existing record, that record will not be included in the result.
   */
  hydrateRecordsByMerging(t) {
    return Object.keys(t).reduce((e, r) => {
      const n = this.state.data[r];
      if (!n)
        return e;
      const s = t[r], a = this.model.getModelFromRecord(n);
      return a === null ? (e[r] = this.hydrate({ ...n, ...s }), e) : (e[r] = this.hydrate({ ...n, ...s }, a), e);
    }, {});
  }
  /**
   * Convert all given records and return it as a collection.
   */
  mapHydrateRecords(t) {
    return f.map(t, (e) => this.hydrate(e));
  }
  /**
   * Convert all given records and return it as a collection.
   */
  mapHydrateAndFilterRecords(t, e) {
    const r = [];
    for (const n in t) {
      const s = this.hydrate(t[n]);
      e(s) && r.push(s);
    }
    return r;
  }
  /**
   * Convert given collection to records by using index id as a key.
   */
  convertCollectionToRecords(t) {
    return t.reduce((e, r) => (e[r.$id] = r.$getAttributes(), e), {});
  }
  /**
   * Clears the current state from any data related to current model.
   *
   * - Everything if not in a inheritance scheme.
   * - Only derived instances if applied to a derived entity.
   */
  emptyState() {
    this.deleteAll();
  }
  /**
   * Build executable hook collection for the given hook.
   */
  buildHooks(t) {
    const e = this.getGlobalHookAsArray(t), r = this.model[t];
    return r && e.push(r.bind(this.model)), e;
  }
  /**
   * Get global hook of the given name as array by stripping id key and keep
   * only hook functions.
   */
  getGlobalHookAsArray(t) {
    const e = this.self().hooks[t];
    return e ? e.map((r) => r.callback.bind(this)) : [];
  }
  /**
   * Execute mutation hooks to the given collection.
   */
  executeMutationHooks(t, e) {
    const r = this.buildHooks(t);
    return r.length === 0 ? e : e.filter((n) => !r.some((s) => s(n, null, this.entity) === !1));
  }
  /**
   * Execute retrieve hook for the given method.
   */
  executeSelectHook(t, e) {
    return this.buildHooks(t).reduce((n, s) => (n = s(e, this.entity), n), e);
  }
}
m.hooks = {};
m.lastHookId = 0;
function gn(i) {
  return (t) => new m(this, t);
}
function vn(i) {
  return (t) => new m(this, t).all();
}
function bn(i) {
  return (t, e) => new m(this, t).find(e);
}
function wn(i) {
  return (t, e) => new m(this, t).findIn(e);
}
const J = {
  query: gn,
  all: vn,
  find: bn,
  findIn: wn
};
class rt {
  /**
   * Get persist options from the given payload.
   */
  static createPersistOptions(t) {
    return {
      create: t.create,
      insert: t.insert,
      update: t.update,
      insertOrUpdate: t.insertOrUpdate
    };
  }
}
async function $n(i, t) {
  return new m(this, t.entity).new();
}
async function _n(i, t) {
  const e = t.entity, r = t.data, n = rt.createPersistOptions(t);
  return new m(this, e).create(r, n);
}
async function Rn(i, t) {
  const e = t.entity, r = t.data, n = rt.createPersistOptions(t);
  return new m(this, e).insert(r, n);
}
async function In(i, t) {
  const e = t.entity, r = t.data, n = t.where || null, s = rt.createPersistOptions(t);
  return new m(this, e).update(r, n, s);
}
async function Kn(i, t) {
  const e = t.entity, r = t.data, n = rt.createPersistOptions(t);
  return new m(this, e).insertOrUpdate(r, n);
}
async function On(i, t) {
  const { entity: e, where: r } = t;
  return new m(this, e).delete(r);
}
async function Sn(i, t) {
  if (t && t.entity) {
    new m(this, t.entity).deleteAll();
    return;
  }
  m.deleteAll(this);
}
const Ut = {
  new: $n,
  create: _n,
  insert: Rn,
  update: In,
  insertOrUpdate: Kn,
  delete: On,
  deleteAll: Sn
};
class Dt {
  /**
   * Create a new connection instance.
   */
  constructor(t, e, r) {
    this.store = t, this.connection = e, this.entity = r, this.rootState = this.store.state[e], this.state = this.rootState[r];
  }
  /**
   * Insert the given record.
   */
  insert(t) {
    this.state.data = { ...this.state.data, [t.$id]: t };
  }
  /**
   * Insert the given records.
   */
  insertRecords(t) {
    this.state.data = { ...this.state.data, ...t };
  }
  /**
   * Delete records that matches the given id.
   */
  delete(t) {
    const e = {};
    for (const r in this.state.data)
      t.includes(r) || (e[r] = this.state.data[r]);
    this.state.data = e;
  }
}
function Fn(i, t) {
  t.callback(i[t.entity]);
}
function xn(i, t) {
  const { entity: e, record: r } = t;
  new Dt(this, i.$name, e).insert(r);
}
function En(i, t) {
  const { entity: e, records: r } = t;
  new Dt(this, i.$name, e).insertRecords(r);
}
function Mn(i, t) {
  const { entity: e, id: r } = t;
  new Dt(this, i.$name, e).delete(r);
}
const Nt = {
  $mutate: Fn,
  insert: xn,
  insertRecords: En,
  delete: Mn
};
class An {
  /**
   * Creates a closure that generates the required id's for an entity.
   */
  static create(t) {
    return (e, r, n) => (this.generateIds(e, t), this.generateIndexId(e, t));
  }
  /**
   * Generate a field that is defined as primary keys. For keys with a proper
   * value set, it will do nothing. If a key is missing, it will generate
   * UID for it.
   */
  static generateIds(t, e) {
    (_(e.primaryKey) ? e.primaryKey : [e.primaryKey]).forEach((n) => {
      if (t[n] !== void 0 && t[n] !== null)
        return;
      const s = e.getFields()[n];
      t[n] = s instanceof et ? s.make() : H.make();
    });
  }
  /**
   * Generate index id field (which is `$id`) and attach to the given record.
   */
  static generateIndexId(t, e) {
    return t.$id = e.getIndexIdFromRecord(t), t.$id;
  }
}
class kn {
  /**
   * Create a new schema instance.
   */
  constructor(t) {
    this.schemas = {}, this.model = t;
    const e = t.database().models();
    Object.keys(e).forEach((r) => {
      this.one(e[r]);
    });
  }
  /**
   * Create a schema for the given model.
   */
  static create(t) {
    return new this(t).one();
  }
  /**
   * Create a single schema for the given model.
   */
  one(t) {
    if (t = t || this.model, this.schemas[t.entity])
      return this.schemas[t.entity];
    const e = new at.Entity(t.entity, {}, {
      idAttribute: An.create(t)
    });
    this.schemas[t.entity] = e;
    const r = this.definition(t);
    return e.define(r), e;
  }
  /**
   * Create an array schema for the given model.
   */
  many(t) {
    return new at.Array(this.one(t));
  }
  /**
   * Create an union schema for the given model.
   */
  union(t) {
    return new at.Union(this.schemas, t);
  }
  /**
   * Create a dfinition for the given model.
   */
  definition(t) {
    const e = t.getFields();
    return Object.keys(e).reduce((r, n) => {
      const s = e[n];
      return s instanceof p && (r[n] = s.define(this)), r;
    }, {});
  }
}
class me {
  constructor() {
    this.entities = [], this.schemas = {}, this.isStarted = !1;
  }
  /**
   * Initialize the database before a user can start using it.
   */
  start(t, e) {
    this.store = t, this.namespace = e, this.connect(), this.registerModules(), this.createSchema(), this.isStarted = !0;
  }
  /**
   * Register a model and a module to Database.
   */
  register(t, e = {}) {
    this.checkModelTypeMappingCapability(t);
    const r = {
      name: t.entity,
      base: t.baseEntity || t.entity,
      model: this.createBindingModel(t),
      module: e
    };
    this.entities.push(r), this.isStarted && (this.registerModule(r), this.registerSchema(r));
  }
  model(t) {
    const e = typeof t == "string" ? t : t.entity, r = this.entities.find((s) => s.name === e), n = r ? r.model : null;
    if (!n)
      throw new Error(`[Vuex ORM] Could not find the model \`${e}\`. Please check if you have registered the model to the database.`);
    return n;
  }
  baseModel(t) {
    const e = typeof t == "string" ? t : t.entity, r = this.entities.find((s) => s.name === e), n = r ? this.model(r.base) : null;
    if (!n)
      throw new Error(`[Vuex ORM] Could not find the model \`${e}\`. Please check if you have registered the model to the database.`);
    return n;
  }
  /**
   * Get all models from the entities list.
   */
  models() {
    return this.entities.reduce((t, e) => (t[e.name] = e.model, t), {});
  }
  /**
   * Get all base models from the entities list.
   */
  baseModels() {
    return this.entities.reduce((t, e) => (t[e.name] = this.model(e.base), t), {});
  }
  /**
   * Get the module of the given name from the entities list.
   */
  module(t) {
    const e = this.modules()[t];
    if (!e)
      throw new Error(`[Vuex ORM] Could not find the module \`${t}\`. Please check if you have registered the module to the database.`);
    return e;
  }
  /**
   * Get all modules from the entities list.
   */
  modules() {
    return this.entities.reduce((t, e) => (t[e.name] = e.module, t), {});
  }
  /**
   * Get the root state from the store.
   */
  getState() {
    return this.store.state[this.namespace];
  }
  /**
   * Create a new model that binds the database.
   *
   * Transpiled classes cannot extend native classes. Implemented a workaround
   * until Babel releases a fix (https://github.com/babel/babel/issues/9367).
   */
  createBindingModel(t) {
    let e;
    try {
      e = new Function("model", `
        'use strict';
        return class ${t.name} extends model {}
      `)(t);
    } catch {
      e = class extends t {
      }, Object.defineProperty(e, "name", { get: () => t.name });
    }
    return Object.defineProperty(e, "store", {
      value: () => this.store
    }), e;
  }
  /**
   * Create Vuex Module from the registered entities, and register to
   * the store.
   */
  registerModules() {
    this.store.registerModule(this.namespace, this.createModule());
  }
  /**
   * Generate module from the given entity, and register to the store.
   */
  registerModule(t) {
    this.store.registerModule([this.namespace, t.name], this.createSubModule(t));
  }
  /**
   * Create Vuex Module from the registered entities.
   */
  createModule() {
    const t = this.createRootModule();
    return this.entities.forEach((e) => {
      t.modules[e.name] = this.createSubModule(e);
    }), t;
  }
  /**
   * Create root module.
   */
  createRootModule() {
    return {
      namespaced: !0,
      state: this.createRootState(),
      getters: this.createRootGetters(),
      actions: this.createRootActions(),
      mutations: this.createRootMutations(),
      modules: {}
    };
  }
  /**
   * Create root state.
   */
  createRootState() {
    return () => ({ $name: this.namespace });
  }
  /**
   * Create root getters. For the getters, we bind the store instance to each
   * function to retrieve database instances within getters. We only need this
   * for the getter since actions and mutations are already bound to store.
   */
  createRootGetters() {
    return ue(J, (t, e) => J[e].bind(this.store));
  }
  /**
   * Create root actions.
   */
  createRootActions() {
    return Ut;
  }
  /**
   * Create root mutations.
   */
  createRootMutations() {
    return Nt;
  }
  /**
   * Create sub module.
   */
  createSubModule(t) {
    return {
      namespaced: !0,
      state: this.createSubState(t),
      getters: this.createSubGetters(t),
      actions: this.createSubActions(t),
      mutations: this.createSubMutations(t)
    };
  }
  /**
   * Create sub state.
   */
  createSubState(t) {
    const { name: e, model: r, module: n } = t, s = typeof r.state == "function" ? r.state() : r.state, a = typeof n.state == "function" ? n.state() : n.state;
    return () => ({
      ...s,
      ...a,
      $connection: this.namespace,
      $name: e,
      data: {}
    });
  }
  /**
   * Create sub getters.
   */
  createSubGetters(t) {
    return { ...Ht, ...t.module.getters };
  }
  /**
   * Create sub actions.
   */
  createSubActions(t) {
    return { ...zt, ...t.module.actions };
  }
  /**
   * Create sub mutations.
   */
  createSubMutations(t) {
    var e;
    return (e = t.module.mutations) !== null && e !== void 0 ? e : {};
  }
  /**
   * Create the schema definition from registered entities list and set it to
   * the `schema` property. This schema will be used by the normalizer
   * to normalize data before persisting them to the Vuex Store.
   */
  createSchema() {
    this.entities.forEach((t) => {
      this.registerSchema(t);
    });
  }
  /**
   * Generate schema from the given entity.
   */
  registerSchema(t) {
    this.schemas[t.name] = kn.create(t.model);
  }
  /**
   * Inject database to the store instance.
   */
  connect() {
    this.store.$db = () => this;
  }
  /**
   * Warn user if the given model is a type of an inherited model that is being
   * defined without overwriting `Model.types()` because the user will not be
   * able to use the type mapping feature in this case.
   */
  checkModelTypeMappingCapability(t) {
    if (!t.baseEntity)
      return;
    const e = this.model(t.baseEntity);
    e && e.types === F.types && console.warn(`[Vuex ORM] Model \`${t.name}\` extends \`${e.name}\` which doesn't overwrite Model.types(). You will not be able to use type mapping.`);
  }
}
function Pn(i, t = {}) {
  const e = {
    Model: F,
    Attribute: tt,
    Type: O,
    Attr: Ot,
    String: St,
    Number: Ft,
    Boolean: xt,
    Uid: et,
    Relation: p,
    HasOne: Et,
    BelongsTo: Mt,
    HasMany: At,
    HasManyBy: kt,
    BelongsToMany: L,
    HasManyThrough: Pt,
    MorphTo: jt,
    MorphOne: Ct,
    MorphMany: Tt,
    MorphToMany: G,
    MorphedByMany: Q,
    Getters: Ht,
    Actions: zt,
    RootGetters: J,
    RootActions: Ut,
    RootMutations: Nt,
    Query: m,
    Database: me
  };
  i.install(e, t);
}
var jn = {
  install: Ir,
  use: Pn,
  Container: Kt,
  Database: me,
  Model: F,
  Attribute: tt,
  Type: O,
  Attr: Ot,
  String: St,
  Number: Ft,
  Boolean: xt,
  Uid: et,
  Relation: p,
  HasOne: Et,
  BelongsTo: Mt,
  HasMany: At,
  HasManyBy: kt,
  BelongsToMany: L,
  HasManyThrough: Pt,
  MorphTo: jt,
  MorphOne: Ct,
  MorphMany: Tt,
  MorphToMany: G,
  MorphedByMany: Q,
  Getters: Ht,
  Actions: zt,
  RootGetters: J,
  RootActions: Ut,
  RootMutations: Nt,
  Query: m
};
export {
  me as D,
  F as M,
  jn as i
};
