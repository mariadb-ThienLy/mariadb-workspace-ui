import { i as L, m as G, w as S, f as Qt, a as p, c as Xe, b as Zt, d as Pt, e as N, D as Je, g as D, h as le, j as X, u as se, k as ve, l as ea, n as $, o as ne, p as U, q as ge, r as de, s as ta, t as V, v as lt, x as nt, C as aa, y as oe, A as la, z as na, B as ra, N as sa, E as oa, F as ia, G as Ft, H as ca, I as rt, J as st, K as ot, M as it, L as ct, O as ut, P as _t, Q as mt, R as ua, S as _a, T as ma, U as fa, V as ft, W as Ea, X as ga, Y as te, Z as va, _ as da, $ as ba, a0 as Na } from "./@intlify-6BZkeymZ.js";
import "./vue-DPbbFsnt.js";
import { e as Ta, r as ae, s as ht, c as H, w as $e, a as Ia, d as Ke, b as Oa, h as kt, F as Ct, g as ie, f as La, o as pa, j as Ra, k as Pa, l as Fa, T as ha } from "./@vue-r5UrhElT.js";
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ka = "9.14.5";
function Ca() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (te().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (te().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (te().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (te().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (te().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Dt = aa.__EXTEND_POINT__, B = Pt(Dt), O = {
  FALLBACK_TO_ROOT: Dt,
  // 9
  NOT_SUPPORTED_PRESERVE: B(),
  // 10
  NOT_SUPPORTED_FORMATTER: B(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: B(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: B(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: B(),
  // 14
  NOT_FOUND_PARENT_SCOPE: B(),
  // 15
  IGNORE_OBJ_FLATTEN: B(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: B(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: B()
  // 18
}, Da = {
  [O.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [O.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [O.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [O.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [O.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [O.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [O.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [O.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [O.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [O.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function M(e, ...l) {
  return Qt(Da[e], ...l);
}
const At = ca.__EXTEND_POINT__, A = Pt(At), b = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: At,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: A(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: A(),
  // 26
  NOT_INSTALLED: A(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: A(),
  // 28
  // directive module errors
  REQUIRED_VALUE: A(),
  // 29
  INVALID_VALUE: A(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: A(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: A(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: A(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: A(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: A(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: A(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: A(),
  // 37
  // for enhancement
  __EXTEND_POINT__: A()
  // 38
};
function h(e, ...l) {
  return ea(e, null, process.env.NODE_ENV !== "production" ? { messages: Aa, args: l } : void 0);
}
const Aa = {
  [b.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [b.INVALID_ARGUMENT]: "Invalid argument",
  [b.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [b.NOT_INSTALLED]: "Need to install with `app.use` function",
  [b.UNEXPECTED_ERROR]: "Unexpected error",
  [b.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [b.REQUIRED_VALUE]: "Required in value: {0}",
  [b.INVALID_VALUE]: "Invalid value",
  [b.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [b.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [b.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [b.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [b.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [b.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, xe = /* @__PURE__ */ G("__translateVNode"), He = /* @__PURE__ */ G("__datetimeParts"), Ge = /* @__PURE__ */ G("__numberParts"), Z = /* @__PURE__ */ G("__enableEmitter"), ce = /* @__PURE__ */ G("__disableEmitter"), Mt = G("__setPluralRules"), St = /* @__PURE__ */ G("__injectWithOption"), Ye = /* @__PURE__ */ G("__dispose");
function ue(e) {
  if (!V(e) || oe(e))
    return e;
  for (const l in e)
    if (de(e, l))
      if (!l.includes("."))
        V(e[l]) && ue(e[l]);
      else {
        const a = l.split("."), n = a.length - 1;
        let s = e, t = !1;
        for (let r = 0; r < n; r++) {
          if (a[r] === "__proto__")
            throw new Error(`unsafe key: ${a[r]}`);
          if (a[r] in s || (s[a[r]] = U()), !V(s[a[r]])) {
            process.env.NODE_ENV !== "production" && S(M(O.IGNORE_OBJ_FLATTEN, {
              key: a[r]
            })), t = !0;
            break;
          }
          s = s[a[r]];
        }
        if (t || (oe(s) ? la.includes(a[n]) || delete e[l] : (s[a[n]] = e[l], delete e[l])), !oe(s)) {
          const r = s[a[n]];
          V(r) && ue(r);
        }
      }
  return e;
}
function be(e, l) {
  const { messages: a, __i18n: n, messageResolver: s, flatJson: t } = l, r = p(a) ? a : D(n) ? U() : { [e]: U() };
  if (D(n) && n.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: _, resource: m } = i;
      _ ? (r[_] = r[_] || U(), ge(m, r[_])) : ge(m, r);
    } else
      N(i) && ge(JSON.parse(i), r);
  }), s == null && t)
    for (const i in r)
      de(r, i) && ue(r[i]);
  return r;
}
function Vt(e) {
  return e.type;
}
function yt(e, l, a) {
  let n = V(l.messages) ? l.messages : U();
  "__i18nGlobal" in a && (n = be(e.locale.value, {
    messages: n,
    __i18n: a.__i18nGlobal
  }));
  const s = Object.keys(n);
  s.length && s.forEach((t) => {
    e.mergeLocaleMessage(t, n[t]);
  });
  {
    if (V(l.datetimeFormats)) {
      const t = Object.keys(l.datetimeFormats);
      t.length && t.forEach((r) => {
        e.mergeDateTimeFormat(r, l.datetimeFormats[r]);
      });
    }
    if (V(l.numberFormats)) {
      const t = Object.keys(l.numberFormats);
      t.length && t.forEach((r) => {
        e.mergeNumberFormat(r, l.numberFormats[r]);
      });
    }
  }
}
function Et(e) {
  return Fa(ha, null, e, 0);
}
const gt = "__INTLIFY_META__", vt = () => [], Ma = () => !1;
let dt = 0;
function bt(e) {
  return ((l, a, n, s) => e(a, n, ie() || void 0, s));
}
const Sa = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = ie();
  let l = null;
  return e && (l = Vt(e)[gt]) ? { [gt]: l } : null;
};
function ze(e = {}, l) {
  const { __root: a, __injectWithOption: n } = e, s = a === void 0, t = e.flatJson, r = ve ? ae : ht, i = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && i && Zt(M(O.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let _ = L(e.inheritLocale) ? e.inheritLocale : !0;
  const m = r(
    // prettier-ignore
    a && _ ? a.locale.value : N(e.locale) ? e.locale : Je
  ), g = r(
    // prettier-ignore
    a && _ ? a.fallbackLocale.value : N(e.fallbackLocale) || D(e.fallbackLocale) || p(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : m.value
  ), v = r(be(m.value, e)), E = r(p(e.datetimeFormats) ? e.datetimeFormats : { [m.value]: {} }), d = r(p(e.numberFormats) ? e.numberFormats : { [m.value]: {} });
  let F = a ? a.missingWarn : L(e.missingWarn) || le(e.missingWarn) ? e.missingWarn : !0, k = a ? a.fallbackWarn : L(e.fallbackWarn) || le(e.fallbackWarn) ? e.fallbackWarn : !0, W = a ? a.fallbackRoot : L(e.fallbackRoot) ? e.fallbackRoot : !0, y = !!e.fallbackFormat, w = X(e.missing) ? e.missing : null, C = X(e.missing) ? bt(e.missing) : null, Y = X(e.postTranslation) ? e.postTranslation : null, q = a ? a.warnHtmlMessage : L(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, J = !!e.escapeParameter;
  const re = a ? a.modifiers : p(e.modifiers) ? e.modifiers : {};
  let x = e.pluralRules || a && a.pluralRules, f;
  f = (() => {
    s && rt(null);
    const o = {
      version: ka,
      locale: m.value,
      fallbackLocale: g.value,
      messages: v.value,
      modifiers: re,
      pluralRules: x,
      missing: C === null ? void 0 : C,
      missingWarn: F,
      fallbackWarn: k,
      fallbackFormat: y,
      unresolving: !0,
      postTranslation: Y === null ? void 0 : Y,
      warnHtmlMessage: q,
      escapeParameter: J,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    o.datetimeFormats = E.value, o.numberFormats = d.value, o.__datetimeFormatters = p(f) ? f.__datetimeFormatters : void 0, o.__numberFormatters = p(f) ? f.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (o.__v_emitter = p(f) ? f.__v_emitter : void 0);
    const c = ta(o);
    return s && rt(c), c;
  })(), se(f, m.value, g.value);
  function Ne() {
    return [
      m.value,
      g.value,
      v.value,
      E.value,
      d.value
    ];
  }
  const Te = H({
    get: () => m.value,
    set: (o) => {
      m.value = o, f.locale = m.value;
    }
  }), Ie = H({
    get: () => g.value,
    set: (o) => {
      g.value = o, f.fallbackLocale = g.value, se(f, m.value, o);
    }
  }), Oe = H(() => v.value), Le = /* @__PURE__ */ H(() => E.value), K = /* @__PURE__ */ H(() => d.value);
  function pe() {
    return X(Y) ? Y : null;
  }
  function Re(o) {
    Y = o, f.postTranslation = o;
  }
  function Pe() {
    return w;
  }
  function Fe(o) {
    o !== null && (C = bt(o)), w = o, f.missing = C;
  }
  function he(o, c) {
    return o !== "translate" || !c.resolvedMessage;
  }
  const j = (o, c, T, R, z, Ee) => {
    Ne();
    let ee;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && na(/* @__PURE__ */ Sa()), s || (f.fallbackContext = a ? ra() : void 0), ee = o(f);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (f.fallbackContext = void 0);
    }
    if (T !== "translate exists" && // for not `te` (e.g `t`)
    ne(ee) && ee === sa || T === "translate exists" && !ee) {
      const [Q, qt] = c();
      if (process.env.NODE_ENV !== "production" && a && N(Q) && he(T, qt) && (W && (oa(k, Q) || ia(F, Q)) && S(M(O.FALLBACK_TO_ROOT, {
        key: Q,
        type: T
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: at } = f;
        at && W && at.emit("fallback", {
          type: T,
          key: Q,
          to: "global",
          groupId: `${T}:${Q}`
        });
      }
      return a && W ? R(a) : z(Q);
    } else {
      if (Ee(ee))
        return ee;
      throw h(b.UNEXPECTED_RETURN_TYPE);
    }
  };
  function fe(...o) {
    return j((c) => Reflect.apply(ot, null, [c, ...o]), () => st(...o), "translate", (c) => Reflect.apply(c.t, c, [...o]), (c) => c, (c) => N(c));
  }
  function ke(...o) {
    const [c, T, R] = o;
    if (R && !V(R))
      throw h(b.INVALID_ARGUMENT);
    return fe(c, T, $({ resolvedMessage: !0 }, R || {}));
  }
  function Ce(...o) {
    return j((c) => Reflect.apply(ut, null, [c, ...o]), () => ct(...o), "datetime format", (c) => Reflect.apply(c.d, c, [...o]), () => it, (c) => N(c));
  }
  function De(...o) {
    return j((c) => Reflect.apply(mt, null, [c, ...o]), () => _t(...o), "number format", (c) => Reflect.apply(c.n, c, [...o]), () => it, (c) => N(c));
  }
  function Ae(o) {
    return o.map((c) => N(c) || ne(c) || L(c) ? Et(String(c)) : c);
  }
  const Me = {
    normalize: Ae,
    interpolate: (o) => o,
    type: "vnode"
  };
  function Se(...o) {
    return j(
      (c) => {
        let T;
        const R = c;
        try {
          R.processor = Me, T = Reflect.apply(ot, null, [R, ...o]);
        } finally {
          R.processor = null;
        }
        return T;
      },
      () => st(...o),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (c) => c[xe](...o),
      (c) => [Et(c)],
      (c) => D(c)
    );
  }
  function Ve(...o) {
    return j(
      (c) => Reflect.apply(mt, null, [c, ...o]),
      () => _t(...o),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (c) => c[Ge](...o),
      vt,
      (c) => N(c) || D(c)
    );
  }
  function ye(...o) {
    return j(
      (c) => Reflect.apply(ut, null, [c, ...o]),
      () => ct(...o),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (c) => c[He](...o),
      vt,
      (c) => N(c) || D(c)
    );
  }
  function Ue(o) {
    x = o, f.pluralRules = x;
  }
  function u(o, c) {
    return j(() => {
      if (!o)
        return !1;
      const T = N(c) ? c : m.value, R = tt(T), z = f.messageResolver(R, o);
      return i ? z != null : oe(z) || ua(z) || N(z);
    }, () => [o], "translate exists", (T) => Reflect.apply(T.te, T, [o, c]), Ma, (T) => L(T));
  }
  function I(o) {
    let c = null;
    const T = Ft(f, g.value, m.value);
    for (let R = 0; R < T.length; R++) {
      const z = v.value[T[R]] || {}, Ee = f.messageResolver(z, o);
      if (Ee != null) {
        c = Ee;
        break;
      }
    }
    return c;
  }
  function Ht(o) {
    const c = I(o);
    return c ?? (a ? a.tm(o) || {} : {});
  }
  function tt(o) {
    return v.value[o] || {};
  }
  function Gt(o, c) {
    if (t) {
      const T = { [o]: c };
      for (const R in T)
        de(T, R) && ue(T[R]);
      c = T[o];
    }
    v.value[o] = c, f.messages = v.value;
  }
  function Yt(o, c) {
    v.value[o] = v.value[o] || {};
    const T = { [o]: c };
    if (t)
      for (const R in T)
        de(T, R) && ue(T[R]);
    c = T[o], ge(c, v.value[o]), f.messages = v.value;
  }
  function jt(o) {
    return E.value[o] || {};
  }
  function Bt(o, c) {
    E.value[o] = c, f.datetimeFormats = E.value, lt(f, o, c);
  }
  function Xt(o, c) {
    E.value[o] = $(E.value[o] || {}, c), f.datetimeFormats = E.value, lt(f, o, c);
  }
  function Jt(o) {
    return d.value[o] || {};
  }
  function Kt(o, c) {
    d.value[o] = c, f.numberFormats = d.value, nt(f, o, c);
  }
  function zt(o, c) {
    d.value[o] = $(d.value[o] || {}, c), f.numberFormats = d.value, nt(f, o, c);
  }
  dt++, a && ve && ($e(a.locale, (o) => {
    _ && (m.value = o, f.locale = o, se(f, m.value, g.value));
  }), $e(a.fallbackLocale, (o) => {
    _ && (g.value = o, f.fallbackLocale = o, se(f, m.value, g.value));
  }));
  const P = {
    id: dt,
    locale: Te,
    fallbackLocale: Ie,
    get inheritLocale() {
      return _;
    },
    set inheritLocale(o) {
      _ = o, o && a && (m.value = a.locale.value, g.value = a.fallbackLocale.value, se(f, m.value, g.value));
    },
    get availableLocales() {
      return Object.keys(v.value).sort();
    },
    messages: Oe,
    get modifiers() {
      return re;
    },
    get pluralRules() {
      return x || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return F;
    },
    set missingWarn(o) {
      F = o, f.missingWarn = F;
    },
    get fallbackWarn() {
      return k;
    },
    set fallbackWarn(o) {
      k = o, f.fallbackWarn = k;
    },
    get fallbackRoot() {
      return W;
    },
    set fallbackRoot(o) {
      W = o;
    },
    get fallbackFormat() {
      return y;
    },
    set fallbackFormat(o) {
      y = o, f.fallbackFormat = y;
    },
    get warnHtmlMessage() {
      return q;
    },
    set warnHtmlMessage(o) {
      q = o, f.warnHtmlMessage = o;
    },
    get escapeParameter() {
      return J;
    },
    set escapeParameter(o) {
      J = o, f.escapeParameter = o;
    },
    t: fe,
    getLocaleMessage: tt,
    setLocaleMessage: Gt,
    mergeLocaleMessage: Yt,
    getPostTranslationHandler: pe,
    setPostTranslationHandler: Re,
    getMissingHandler: Pe,
    setMissingHandler: Fe,
    [Mt]: Ue
  };
  return P.datetimeFormats = Le, P.numberFormats = K, P.rt = ke, P.te = u, P.tm = Ht, P.d = Ce, P.n = De, P.getDateTimeFormat = jt, P.setDateTimeFormat = Bt, P.mergeDateTimeFormat = Xt, P.getNumberFormat = Jt, P.setNumberFormat = Kt, P.mergeNumberFormat = zt, P[St] = n, P[xe] = Se, P[He] = ye, P[Ge] = Ve, process.env.NODE_ENV !== "production" && (P[Z] = (o) => {
    f.__v_emitter = o;
  }, P[ce] = () => {
    f.__v_emitter = void 0;
  }), P;
}
function Va(e) {
  const l = N(e.locale) ? e.locale : Je, a = N(e.fallbackLocale) || D(e.fallbackLocale) || p(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, n = X(e.missing) ? e.missing : void 0, s = L(e.silentTranslationWarn) || le(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, t = L(e.silentFallbackWarn) || le(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, r = L(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, _ = p(e.modifiers) ? e.modifiers : {}, m = e.pluralizationRules, g = X(e.postTranslation) ? e.postTranslation : void 0, v = N(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, E = !!e.escapeParameterHtml, d = L(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && S(M(O.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && S(M(O.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let F = e.messages;
  if (p(e.sharedMessages)) {
    const J = e.sharedMessages;
    F = Object.keys(J).reduce((x, f) => {
      const me = x[f] || (x[f] = {});
      return $(me, J[f]), x;
    }, F || {});
  }
  const { __i18n: k, __root: W, __injectWithOption: y } = e, w = e.datetimeFormats, C = e.numberFormats, Y = e.flatJson, q = e.translateExistCompatible;
  return {
    locale: l,
    fallbackLocale: a,
    messages: F,
    flatJson: Y,
    datetimeFormats: w,
    numberFormats: C,
    missing: n,
    missingWarn: s,
    fallbackWarn: t,
    fallbackRoot: r,
    fallbackFormat: i,
    modifiers: _,
    pluralRules: m,
    postTranslation: g,
    warnHtmlMessage: v,
    escapeParameter: E,
    messageResolver: e.messageResolver,
    inheritLocale: d,
    translateExistCompatible: q,
    __i18n: k,
    __root: W,
    __injectWithOption: y
  };
}
function je(e = {}, l) {
  {
    const a = ze(Va(e)), { __extender: n } = e, s = {
      // id
      id: a.id,
      // locale
      get locale() {
        return a.locale.value;
      },
      set locale(t) {
        a.locale.value = t;
      },
      // fallbackLocale
      get fallbackLocale() {
        return a.fallbackLocale.value;
      },
      set fallbackLocale(t) {
        a.fallbackLocale.value = t;
      },
      // messages
      get messages() {
        return a.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return a.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return a.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return a.availableLocales;
      },
      // formatter
      get formatter() {
        return process.env.NODE_ENV !== "production" && S(M(O.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(t) {
        process.env.NODE_ENV !== "production" && S(M(O.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return a.getMissingHandler();
      },
      set missing(t) {
        a.setMissingHandler(t);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return L(a.missingWarn) ? !a.missingWarn : a.missingWarn;
      },
      set silentTranslationWarn(t) {
        a.missingWarn = L(t) ? !t : t;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return L(a.fallbackWarn) ? !a.fallbackWarn : a.fallbackWarn;
      },
      set silentFallbackWarn(t) {
        a.fallbackWarn = L(t) ? !t : t;
      },
      // modifiers
      get modifiers() {
        return a.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return a.fallbackFormat;
      },
      set formatFallbackMessages(t) {
        a.fallbackFormat = t;
      },
      // postTranslation
      get postTranslation() {
        return a.getPostTranslationHandler();
      },
      set postTranslation(t) {
        a.setPostTranslationHandler(t);
      },
      // sync
      get sync() {
        return a.inheritLocale;
      },
      set sync(t) {
        a.inheritLocale = t;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return a.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(t) {
        a.warnHtmlMessage = t !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return a.escapeParameter;
      },
      set escapeParameterHtml(t) {
        a.escapeParameter = t;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && S(M(O.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(t) {
        process.env.NODE_ENV !== "production" && S(M(O.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return a.pluralRules || {};
      },
      // for internal
      __composer: a,
      // t
      t(...t) {
        const [r, i, _] = t, m = {};
        let g = null, v = null;
        if (!N(r))
          throw h(b.INVALID_ARGUMENT);
        const E = r;
        return N(i) ? m.locale = i : D(i) ? g = i : p(i) && (v = i), D(_) ? g = _ : p(_) && (v = _), Reflect.apply(a.t, a, [
          E,
          g || v || {},
          m
        ]);
      },
      rt(...t) {
        return Reflect.apply(a.rt, a, [...t]);
      },
      // tc
      tc(...t) {
        const [r, i, _] = t, m = { plural: 1 };
        let g = null, v = null;
        if (!N(r))
          throw h(b.INVALID_ARGUMENT);
        const E = r;
        return N(i) ? m.locale = i : ne(i) ? m.plural = i : D(i) ? g = i : p(i) && (v = i), N(_) ? m.locale = _ : D(_) ? g = _ : p(_) && (v = _), Reflect.apply(a.t, a, [
          E,
          g || v || {},
          m
        ]);
      },
      // te
      te(t, r) {
        return a.te(t, r);
      },
      // tm
      tm(t) {
        return a.tm(t);
      },
      // getLocaleMessage
      getLocaleMessage(t) {
        return a.getLocaleMessage(t);
      },
      // setLocaleMessage
      setLocaleMessage(t, r) {
        a.setLocaleMessage(t, r);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(t, r) {
        a.mergeLocaleMessage(t, r);
      },
      // d
      d(...t) {
        return Reflect.apply(a.d, a, [...t]);
      },
      // getDateTimeFormat
      getDateTimeFormat(t) {
        return a.getDateTimeFormat(t);
      },
      // setDateTimeFormat
      setDateTimeFormat(t, r) {
        a.setDateTimeFormat(t, r);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(t, r) {
        a.mergeDateTimeFormat(t, r);
      },
      // n
      n(...t) {
        return Reflect.apply(a.n, a, [...t]);
      },
      // getNumberFormat
      getNumberFormat(t) {
        return a.getNumberFormat(t);
      },
      // setNumberFormat
      setNumberFormat(t, r) {
        a.setNumberFormat(t, r);
      },
      // mergeNumberFormat
      mergeNumberFormat(t, r) {
        a.mergeNumberFormat(t, r);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(t, r) {
        return process.env.NODE_ENV !== "production" && S(M(O.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return s.__extender = n, process.env.NODE_ENV !== "production" && (s.__enableEmitter = (t) => {
      const r = a;
      r[Z] && r[Z](t);
    }, s.__disableEmitter = () => {
      const t = a;
      t[ce] && t[ce]();
    }), s;
  }
}
const qe = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function ya({ slots: e }, l) {
  return l.length === 1 && l[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => [
    ...n,
    // prettier-ignore
    ...s.type === Ct ? s.children : [s]
  ], []) : l.reduce((a, n) => {
    const s = e[n];
    return s && (a[n] = s()), a;
  }, U());
}
function Ut(e) {
  return Ct;
}
const Ua = /* @__PURE__ */ Ke({
  /* eslint-disable */
  name: "i18n-t",
  props: $({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => ne(e) || !isNaN(e)
    }
  }, qe),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, l) {
    const { slots: a, attrs: n } = l, s = e.i18n || Ze({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const t = Object.keys(a).filter((v) => v !== "_"), r = U();
      e.locale && (r.locale = e.locale), e.plural !== void 0 && (r.plural = N(e.plural) ? +e.plural : e.plural);
      const i = ya(l, t), _ = s[xe](e.keypath, i, r), m = $(U(), n), g = N(e.tag) || V(e.tag) ? e.tag : Ut();
      return kt(g, m, _);
    };
  }
}), We = Ua;
function Wa(e) {
  return D(e) && !N(e[0]);
}
function Wt(e, l, a, n) {
  const { slots: s, attrs: t } = l;
  return () => {
    const r = { part: !0 };
    let i = U();
    e.locale && (r.locale = e.locale), N(e.format) ? r.key = e.format : V(e.format) && (N(e.format.key) && (r.key = e.format.key), i = Object.keys(e.format).reduce((E, d) => a.includes(d) ? $(U(), E, { [d]: e.format[d] }) : E, U()));
    const _ = n(e.value, r, i);
    let m = [r.key];
    D(_) ? m = _.map((E, d) => {
      const F = s[E.type], k = F ? F({ [E.type]: E.value, index: d, parts: _ }) : [E.value];
      return Wa(k) && (k[0].key = `${E.type}-${d}`), k;
    }) : N(_) && (m = [_]);
    const g = $(U(), t), v = N(e.tag) || V(e.tag) ? e.tag : Ut();
    return kt(v, g, m);
  };
}
const wa = /* @__PURE__ */ Ke({
  /* eslint-disable */
  name: "i18n-n",
  props: $({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, qe),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, l) {
    const a = e.i18n || Ze({
      useScope: e.scope,
      __useComponent: !0
    });
    return Wt(e, l, _a, (...n) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      a[Ge](...n)
    ));
  }
}), Nt = wa, $a = /* @__PURE__ */ Ke({
  /* eslint-disable */
  name: "i18n-d",
  props: $({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, qe),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, l) {
    const a = e.i18n || Ze({
      useScope: e.scope,
      __useComponent: !0
    });
    return Wt(e, l, ma, (...n) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      a[He](...n)
    ));
  }
}), Tt = $a;
function xa(e, l) {
  const a = e;
  if (e.mode === "composition")
    return a.__getInstance(l) || e.global;
  {
    const n = a.__getInstance(l);
    return n != null ? n.__composer : e.global.__composer;
  }
}
function Ha(e) {
  const l = (r) => {
    const { instance: i, modifiers: _, value: m } = r;
    if (!i || !i.$)
      throw h(b.UNEXPECTED_ERROR);
    const g = xa(e, i.$);
    process.env.NODE_ENV !== "production" && _.preserve && S(M(O.NOT_SUPPORTED_PRESERVE));
    const v = It(m);
    return [
      Reflect.apply(g.t, g, [...Ot(v)]),
      g
    ];
  };
  return {
    created: (r, i) => {
      const [_, m] = l(i);
      ve && e.global === m && (r.__i18nWatcher = $e(m.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), r.__composer = m, r.textContent = _;
    },
    unmounted: (r) => {
      ve && r.__i18nWatcher && (r.__i18nWatcher(), r.__i18nWatcher = void 0, delete r.__i18nWatcher), r.__composer && (r.__composer = void 0, delete r.__composer);
    },
    beforeUpdate: (r, { value: i }) => {
      if (r.__composer) {
        const _ = r.__composer, m = It(i);
        r.textContent = Reflect.apply(_.t, _, [
          ...Ot(m)
        ]);
      }
    },
    getSSRProps: (r) => {
      const [i] = l(r);
      return { textContent: i };
    }
  };
}
function It(e) {
  if (N(e))
    return { path: e };
  if (p(e)) {
    if (!("path" in e))
      throw h(b.REQUIRED_VALUE, "path");
    return e;
  } else
    throw h(b.INVALID_VALUE);
}
function Ot(e) {
  const { path: l, locale: a, args: n, choice: s, plural: t } = e, r = {}, i = n || {};
  return N(a) && (r.locale = a), ne(s) && (r.plural = s), ne(t) && (r.plural = t), [l, i, r];
}
function Ga(e, l, ...a) {
  const n = p(a[0]) ? a[0] : {}, s = !!n.useI18nComponentName, t = L(n.globalInstall) ? n.globalInstall : !0;
  process.env.NODE_ENV !== "production" && t && s && S(M(O.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: We.name
  })), t && ([s ? "i18n" : We.name, "I18nT"].forEach((r) => e.component(r, We)), [Nt.name, "I18nN"].forEach((r) => e.component(r, Nt)), [Tt.name, "I18nD"].forEach((r) => e.component(r, Tt))), e.directive("t", Ha(l));
}
const we = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, Ya = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, ja = {
  "vue-i18n-timeline": 16764185
}, wt = "vue-i18n: composer properties";
let Be;
async function Ba(e, l) {
  return new Promise((a, n) => {
    try {
      Oa({
        id: "vue-devtools-plugin-vue-i18n",
        label: we[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [wt],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (s) => {
        Be = s, s.on.visitComponentTree(({ componentInstance: r, treeNode: i }) => {
          Xa(r, i, l);
        }), s.on.inspectComponent(({ componentInstance: r, instanceData: i }) => {
          r.vnode.el && r.vnode.el.__VUE_I18N__ && i && (l.mode === "legacy" ? r.vnode.el.__VUE_I18N__ !== l.global.__composer && Lt(i, r.vnode.el.__VUE_I18N__) : Lt(i, r.vnode.el.__VUE_I18N__));
        }), s.addInspector({
          id: "vue-i18n-resource-inspector",
          label: we[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: Ya[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), s.on.getInspectorTree((r) => {
          r.app === e && r.inspectorId === "vue-i18n-resource-inspector" && Qa(r, l);
        });
        const t = /* @__PURE__ */ new Map();
        s.on.getInspectorState(async (r) => {
          if (r.app === e && r.inspectorId === "vue-i18n-resource-inspector")
            if (s.unhighlightElement(), el(r, l), r.nodeId === "global") {
              if (!t.has(r.app)) {
                const [i] = await s.getComponentInstances(r.app);
                t.set(r.app, i);
              }
              s.highlightElement(t.get(r.app));
            } else {
              const i = Za(r.nodeId, l);
              i && s.highlightElement(i);
            }
        }), s.on.editInspectorState((r) => {
          r.app === e && r.inspectorId === "vue-i18n-resource-inspector" && al(r, l);
        }), s.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: we[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: ja[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        }), a(!0);
      });
    } catch (s) {
      console.error(s), n(!1);
    }
  });
}
function $t(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Xa(e, l, a) {
  const n = a.mode === "composition" ? a.global : a.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== n) {
    const s = {
      label: `i18n (${$t(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    l.tags.push(s);
  }
}
function Lt(e, l) {
  const a = wt;
  e.state.push({
    type: a,
    key: "locale",
    editable: !0,
    value: l.locale.value
  }), e.state.push({
    type: a,
    key: "availableLocales",
    editable: !1,
    value: l.availableLocales
  }), e.state.push({
    type: a,
    key: "fallbackLocale",
    editable: !0,
    value: l.fallbackLocale.value
  }), e.state.push({
    type: a,
    key: "inheritLocale",
    editable: !0,
    value: l.inheritLocale
  }), e.state.push({
    type: a,
    key: "messages",
    editable: !1,
    value: Qe(l.messages.value)
  }), e.state.push({
    type: a,
    key: "datetimeFormats",
    editable: !1,
    value: l.datetimeFormats.value
  }), e.state.push({
    type: a,
    key: "numberFormats",
    editable: !1,
    value: l.numberFormats.value
  });
}
function Qe(e) {
  const l = {};
  return Object.keys(e).forEach((a) => {
    const n = e[a];
    X(n) && "source" in n ? l[a] = qa(n) : oe(n) && n.loc && n.loc.source ? l[a] = n.loc.source : V(n) ? l[a] = Qe(n) : l[a] = n;
  }), l;
}
const Ja = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function Ka(e) {
  return e.replace(/[<>"&]/g, za);
}
function za(e) {
  return Ja[e] || e;
}
function qa(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${Ka(e.source)}")` : "(?)"}`
    }
  };
}
function Qa(e, l) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const a = l.mode === "composition" ? l.global : l.global.__composer;
  for (const [n, s] of l.__instances) {
    const t = l.mode === "composition" ? s : s.__composer;
    a !== t && e.rootNodes.push({
      id: t.id.toString(),
      label: `${$t(n)} Scope`
    });
  }
}
function Za(e, l) {
  let a = null;
  if (e !== "global") {
    for (const [n, s] of l.__instances.entries())
      if (s.id.toString() === e) {
        a = n;
        break;
      }
  }
  return a;
}
function xt(e, l) {
  if (e === "global")
    return l.mode === "composition" ? l.global : l.global.__composer;
  {
    const a = Array.from(l.__instances.values()).find((n) => n.id.toString() === e);
    return a ? l.mode === "composition" ? a : a.__composer : null;
  }
}
function el(e, l) {
  const a = xt(e.nodeId, l);
  return a && (e.state = tl(a)), null;
}
function tl(e) {
  const l = {}, a = "Locale related info", n = [
    {
      type: a,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: a,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: a,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: a,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  l[a] = n;
  const s = "Locale messages info", t = [
    {
      type: s,
      key: "messages",
      editable: !1,
      value: Qe(e.messages.value)
    }
  ];
  l[s] = t;
  {
    const r = "Datetime formats info", i = [
      {
        type: r,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    l[r] = i;
    const _ = "Datetime formats info", m = [
      {
        type: _,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    l[_] = m;
  }
  return l;
}
function _e(e, l) {
  if (Be) {
    let a;
    l && "groupId" in l && (a = l.groupId, delete l.groupId), Be.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: a,
        time: Date.now(),
        meta: {},
        data: l || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function al(e, l) {
  const a = xt(e.nodeId, l);
  if (a) {
    const [n] = e.path;
    n === "locale" && N(e.state.value) ? a.locale.value = e.state.value : n === "fallbackLocale" && (N(e.state.value) || D(e.state.value) || V(e.state.value)) ? a.fallbackLocale.value = e.state.value : n === "inheritLocale" && L(e.state.value) && (a.inheritLocale = e.state.value);
  }
}
function ll(e, l, a) {
  return {
    beforeCreate() {
      const n = ie();
      if (!n)
        throw h(b.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const t = s.i18n;
        if (s.__i18n && (t.__i18n = s.__i18n), t.__root = l, this === this.$root)
          this.$i18n = pt(e, t);
        else {
          t.__injectWithOption = !0, t.__extender = a.__vueI18nExtend, this.$i18n = je(t);
          const r = this.$i18n;
          r.__extender && (r.__disposer = r.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = pt(e, s);
        else {
          this.$i18n = je({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: a.__vueI18nExtend,
            __root: l
          });
          const t = this.$i18n;
          t.__extender && (t.__disposer = t.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      s.__i18nGlobal && yt(l, s, s), this.$t = (...t) => this.$i18n.t(...t), this.$rt = (...t) => this.$i18n.rt(...t), this.$tc = (...t) => this.$i18n.tc(...t), this.$te = (t, r) => this.$i18n.te(t, r), this.$d = (...t) => this.$i18n.d(...t), this.$n = (...t) => this.$i18n.n(...t), this.$tm = (t) => this.$i18n.tm(t), a.__setInstance(n, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const n = this.$i18n;
        this.$el.__VUE_I18N__ = n.__composer;
        const s = this.__v_emitter = Xe();
        n.__enableEmitter && n.__enableEmitter(s), s.on("*", _e);
      }
    },
    unmounted() {
      const n = ie();
      if (!n)
        throw h(b.UNEXPECTED_ERROR);
      const s = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", _e), delete this.__v_emitter), this.$i18n && (s.__disableEmitter && s.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), a.__deleteInstance(n), delete this.$i18n;
    }
  };
}
function pt(e, l) {
  e.locale = l.locale || e.locale, e.fallbackLocale = l.fallbackLocale || e.fallbackLocale, e.missing = l.missing || e.missing, e.silentTranslationWarn = l.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = l.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = l.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = l.postTranslation || e.postTranslation, e.warnHtmlInMessage = l.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = l.escapeParameterHtml || e.escapeParameterHtml, e.sync = l.sync || e.sync, e.__composer[Mt](l.pluralizationRules || e.pluralizationRules);
  const a = be(e.locale, {
    messages: l.messages,
    __i18n: l.__i18n
  });
  return Object.keys(a).forEach((n) => e.mergeLocaleMessage(n, a[n])), l.datetimeFormats && Object.keys(l.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, l.datetimeFormats[n])), l.numberFormats && Object.keys(l.numberFormats).forEach((n) => e.mergeNumberFormat(n, l.numberFormats[n])), e;
}
const nl = /* @__PURE__ */ G("global-vue-i18n");
function bl(e = {}, l) {
  const a = __VUE_I18N_LEGACY_API__ && L(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = L(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && a ? !!e.allowComposition : !0, t = /* @__PURE__ */ new Map(), [r, i] = rl(e, a), _ = /* @__PURE__ */ G(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && a && s && S(M(O.NOTICE_DROP_ALLOW_COMPOSITION));
  function m(E) {
    return t.get(E) || null;
  }
  function g(E, d) {
    t.set(E, d);
  }
  function v(E) {
    t.delete(E);
  }
  {
    const E = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && a ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return s;
      },
      // install plugin
      async install(d, ...F) {
        if (process.env.NODE_ENV !== "production" && (d.__VUE_I18N__ = E), d.__VUE_I18N_SYMBOL__ = _, d.provide(d.__VUE_I18N_SYMBOL__, E), p(F[0])) {
          const y = F[0];
          E.__composerExtend = y.__composerExtend, E.__vueI18nExtend = y.__vueI18nExtend;
        }
        let k = null;
        !a && n && (k = El(d, E.global)), __VUE_I18N_FULL_INSTALL__ && Ga(d, E, ...F), __VUE_I18N_LEGACY_API__ && a && d.mixin(ll(i, i.__composer, E));
        const W = d.unmount;
        if (d.unmount = () => {
          k && k(), E.dispose(), W();
        }, process.env.NODE_ENV !== "production") {
          if (!await Ba(d, E))
            throw h(b.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const w = Xe();
          if (a) {
            const C = i;
            C.__enableEmitter && C.__enableEmitter(w);
          } else {
            const C = i;
            C[Z] && C[Z](w);
          }
          w.on("*", _e);
        }
      },
      // global accessor
      get global() {
        return i;
      },
      dispose() {
        r.stop();
      },
      // @internal
      __instances: t,
      // @internal
      __getInstance: m,
      // @internal
      __setInstance: g,
      // @internal
      __deleteInstance: v
    };
    return E;
  }
}
function Ze(e = {}) {
  const l = ie();
  if (l == null)
    throw h(b.MUST_BE_CALL_SETUP_TOP);
  if (!l.isCE && l.appContext.app != null && !l.appContext.app.__VUE_I18N_SYMBOL__)
    throw h(b.NOT_INSTALLED);
  const a = sl(l), n = il(a), s = Vt(l), t = ol(e, s);
  if (__VUE_I18N_LEGACY_API__ && a.mode === "legacy" && !e.__useComponent) {
    if (!a.allowComposition)
      throw h(b.NOT_AVAILABLE_IN_LEGACY_MODE);
    return ml(l, t, n, e);
  }
  if (t === "global")
    return yt(n, e, s), n;
  if (t === "parent") {
    let _ = cl(a, l, e.__useComponent);
    return _ == null && (process.env.NODE_ENV !== "production" && S(M(O.NOT_FOUND_PARENT_SCOPE)), _ = n), _;
  }
  const r = a;
  let i = r.__getInstance(l);
  if (i == null) {
    const _ = $({}, e);
    "__i18n" in s && (_.__i18n = s.__i18n), n && (_.__root = n), i = ze(_), r.__composerExtend && (i[Ye] = r.__composerExtend(i)), _l(r, l, i), r.__setInstance(l, i);
  }
  return i;
}
function rl(e, l, a) {
  const n = Ta();
  {
    const s = __VUE_I18N_LEGACY_API__ && l ? n.run(() => je(e)) : n.run(() => ze(e));
    if (s == null)
      throw h(b.UNEXPECTED_ERROR);
    return [n, s];
  }
}
function sl(e) {
  {
    const l = La(e.isCE ? nl : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!l)
      throw h(e.isCE ? b.NOT_INSTALLED_WITH_PROVIDE : b.UNEXPECTED_ERROR);
    return l;
  }
}
function ol(e, l) {
  return fa(e) ? "__i18n" in l ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function il(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function cl(e, l, a = !1) {
  let n = null;
  const s = l.root;
  let t = ul(l, a);
  for (; t != null; ) {
    const r = e;
    if (e.mode === "composition")
      n = r.__getInstance(t);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = r.__getInstance(t);
      i != null && (n = i.__composer, a && n && !n[St] && (n = null));
    }
    if (n != null || s === t)
      break;
    t = t.parent;
  }
  return n;
}
function ul(e, l = !1) {
  return e == null ? null : l && e.vnode.ctx || e.parent;
}
function _l(e, l, a) {
  let n = null;
  pa(() => {
    if (process.env.NODE_ENV !== "production" && l.vnode.el) {
      l.vnode.el.__VUE_I18N__ = a, n = Xe();
      const s = a;
      s[Z] && s[Z](n), n.on("*", _e);
    }
  }, l), Ra(() => {
    const s = a;
    process.env.NODE_ENV !== "production" && l.vnode.el && l.vnode.el.__VUE_I18N__ && (n && n.off("*", _e), s[ce] && s[ce](), delete l.vnode.el.__VUE_I18N__), e.__deleteInstance(l);
    const t = s[Ye];
    t && (t(), delete s[Ye]);
  }, l);
}
function ml(e, l, a, n = {}) {
  const s = l === "local", t = ht(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw h(b.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const r = L(n.inheritLocale) ? n.inheritLocale : !N(n.locale), i = ae(
    // prettier-ignore
    !s || r ? a.locale.value : N(n.locale) ? n.locale : Je
  ), _ = ae(
    // prettier-ignore
    !s || r ? a.fallbackLocale.value : N(n.fallbackLocale) || D(n.fallbackLocale) || p(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : i.value
  ), m = ae(be(i.value, n)), g = ae(p(n.datetimeFormats) ? n.datetimeFormats : { [i.value]: {} }), v = ae(p(n.numberFormats) ? n.numberFormats : { [i.value]: {} }), E = s ? a.missingWarn : L(n.missingWarn) || le(n.missingWarn) ? n.missingWarn : !0, d = s ? a.fallbackWarn : L(n.fallbackWarn) || le(n.fallbackWarn) ? n.fallbackWarn : !0, F = s ? a.fallbackRoot : L(n.fallbackRoot) ? n.fallbackRoot : !0, k = !!n.fallbackFormat, W = X(n.missing) ? n.missing : null, y = X(n.postTranslation) ? n.postTranslation : null, w = s ? a.warnHtmlMessage : L(n.warnHtmlMessage) ? n.warnHtmlMessage : !0, C = !!n.escapeParameter, Y = s ? a.modifiers : p(n.modifiers) ? n.modifiers : {}, q = n.pluralRules || s && a.pluralRules;
  function J() {
    return [
      i.value,
      _.value,
      m.value,
      g.value,
      v.value
    ];
  }
  const re = H({
    get: () => t.value ? t.value.locale.value : i.value,
    set: (u) => {
      t.value && (t.value.locale.value = u), i.value = u;
    }
  }), x = H({
    get: () => t.value ? t.value.fallbackLocale.value : _.value,
    set: (u) => {
      t.value && (t.value.fallbackLocale.value = u), _.value = u;
    }
  }), f = H(() => t.value ? t.value.messages.value : m.value), me = H(() => g.value), Ne = H(() => v.value);
  function Te() {
    return t.value ? t.value.getPostTranslationHandler() : y;
  }
  function Ie(u) {
    t.value && t.value.setPostTranslationHandler(u);
  }
  function Oe() {
    return t.value ? t.value.getMissingHandler() : W;
  }
  function Le(u) {
    t.value && t.value.setMissingHandler(u);
  }
  function K(u) {
    return J(), u();
  }
  function pe(...u) {
    return t.value ? K(() => Reflect.apply(t.value.t, null, [...u])) : K(() => "");
  }
  function Re(...u) {
    return t.value ? Reflect.apply(t.value.rt, null, [...u]) : "";
  }
  function Pe(...u) {
    return t.value ? K(() => Reflect.apply(t.value.d, null, [...u])) : K(() => "");
  }
  function Fe(...u) {
    return t.value ? K(() => Reflect.apply(t.value.n, null, [...u])) : K(() => "");
  }
  function he(u) {
    return t.value ? t.value.tm(u) : {};
  }
  function j(u, I) {
    return t.value ? t.value.te(u, I) : !1;
  }
  function fe(u) {
    return t.value ? t.value.getLocaleMessage(u) : {};
  }
  function ke(u, I) {
    t.value && (t.value.setLocaleMessage(u, I), m.value[u] = I);
  }
  function Ce(u, I) {
    t.value && t.value.mergeLocaleMessage(u, I);
  }
  function De(u) {
    return t.value ? t.value.getDateTimeFormat(u) : {};
  }
  function Ae(u, I) {
    t.value && (t.value.setDateTimeFormat(u, I), g.value[u] = I);
  }
  function et(u, I) {
    t.value && t.value.mergeDateTimeFormat(u, I);
  }
  function Me(u) {
    return t.value ? t.value.getNumberFormat(u) : {};
  }
  function Se(u, I) {
    t.value && (t.value.setNumberFormat(u, I), v.value[u] = I);
  }
  function Ve(u, I) {
    t.value && t.value.mergeNumberFormat(u, I);
  }
  const ye = {
    get id() {
      return t.value ? t.value.id : -1;
    },
    locale: re,
    fallbackLocale: x,
    messages: f,
    datetimeFormats: me,
    numberFormats: Ne,
    get inheritLocale() {
      return t.value ? t.value.inheritLocale : r;
    },
    set inheritLocale(u) {
      t.value && (t.value.inheritLocale = u);
    },
    get availableLocales() {
      return t.value ? t.value.availableLocales : Object.keys(m.value);
    },
    get modifiers() {
      return t.value ? t.value.modifiers : Y;
    },
    get pluralRules() {
      return t.value ? t.value.pluralRules : q;
    },
    get isGlobal() {
      return t.value ? t.value.isGlobal : !1;
    },
    get missingWarn() {
      return t.value ? t.value.missingWarn : E;
    },
    set missingWarn(u) {
      t.value && (t.value.missingWarn = u);
    },
    get fallbackWarn() {
      return t.value ? t.value.fallbackWarn : d;
    },
    set fallbackWarn(u) {
      t.value && (t.value.missingWarn = u);
    },
    get fallbackRoot() {
      return t.value ? t.value.fallbackRoot : F;
    },
    set fallbackRoot(u) {
      t.value && (t.value.fallbackRoot = u);
    },
    get fallbackFormat() {
      return t.value ? t.value.fallbackFormat : k;
    },
    set fallbackFormat(u) {
      t.value && (t.value.fallbackFormat = u);
    },
    get warnHtmlMessage() {
      return t.value ? t.value.warnHtmlMessage : w;
    },
    set warnHtmlMessage(u) {
      t.value && (t.value.warnHtmlMessage = u);
    },
    get escapeParameter() {
      return t.value ? t.value.escapeParameter : C;
    },
    set escapeParameter(u) {
      t.value && (t.value.escapeParameter = u);
    },
    t: pe,
    getPostTranslationHandler: Te,
    setPostTranslationHandler: Ie,
    getMissingHandler: Oe,
    setMissingHandler: Le,
    rt: Re,
    d: Pe,
    n: Fe,
    tm: he,
    te: j,
    getLocaleMessage: fe,
    setLocaleMessage: ke,
    mergeLocaleMessage: Ce,
    getDateTimeFormat: De,
    setDateTimeFormat: Ae,
    mergeDateTimeFormat: et,
    getNumberFormat: Me,
    setNumberFormat: Se,
    mergeNumberFormat: Ve
  };
  function Ue(u) {
    u.locale.value = i.value, u.fallbackLocale.value = _.value, Object.keys(m.value).forEach((I) => {
      u.mergeLocaleMessage(I, m.value[I]);
    }), Object.keys(g.value).forEach((I) => {
      u.mergeDateTimeFormat(I, g.value[I]);
    }), Object.keys(v.value).forEach((I) => {
      u.mergeNumberFormat(I, v.value[I]);
    }), u.escapeParameter = C, u.fallbackFormat = k, u.fallbackRoot = F, u.fallbackWarn = d, u.missingWarn = E, u.warnHtmlMessage = w;
  }
  return Pa(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw h(b.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const u = t.value = e.proxy.$i18n.__composer;
    l === "global" ? (i.value = u.locale.value, _.value = u.fallbackLocale.value, m.value = u.messages.value, g.value = u.datetimeFormats.value, v.value = u.numberFormats.value) : s && Ue(u);
  }), ye;
}
const fl = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Rt = ["t", "rt", "d", "n", "tm", "te"];
function El(e, l) {
  const a = /* @__PURE__ */ Object.create(null);
  return fl.forEach((s) => {
    const t = Object.getOwnPropertyDescriptor(l, s);
    if (!t)
      throw h(b.UNEXPECTED_ERROR);
    const r = Ia(t.value) ? {
      get() {
        return t.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(i) {
        t.value.value = i;
      }
    } : {
      get() {
        return t.get && t.get();
      }
    };
    Object.defineProperty(a, s, r);
  }), e.config.globalProperties.$i18n = a, Rt.forEach((s) => {
    const t = Object.getOwnPropertyDescriptor(l, s);
    if (!t || !t.value)
      throw h(b.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, t);
  }), () => {
    delete e.config.globalProperties.$i18n, Rt.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
Ca();
__INTLIFY_JIT_COMPILATION__ ? ft(da) : ft(ba);
Ea(Na);
ga(Ft);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = te();
  e.__INTLIFY__ = !0, va(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
export {
  bl as c
};
