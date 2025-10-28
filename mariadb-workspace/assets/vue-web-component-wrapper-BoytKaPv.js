import "./vue-DPbbFsnt.js";
import { d as z, n as B, m as D, l as G, h as L } from "./@vue-r5UrhElT.js";
var q = Object.defineProperty, K = (e, t, o) => t in e ? q(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, b = (e, t, o) => K(e, typeof t != "symbol" ? t + "" : t, o);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const W = Object.assign, j = Array.isArray, X = (e) => typeof e == "string", M = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (o) => t[o] || (t[o] = e(o));
}, Z = /-(\w)/g, C = M(
  (e) => e.replace(Z, (t, o) => o ? o.toUpperCase() : "")
), J = /\B([A-Z])/g, N = M(
  (e) => e.replace(J, "-$1").toLowerCase()
), k = (e) => {
  const t = X(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
/*!#__NO_SIDE_EFFECTS__*/
// @__NO_SIDE_EFFECTS__
function Q(e, t, o) {
  const s = z(e);
  class n extends S {
    constructor(i) {
      super(s, i, t, o);
    }
  }
  return b(n, "def", s), n;
}
const Y = typeof HTMLElement < "u" ? HTMLElement : class {
};
class S extends Y {
  constructor(t, o = {}, s = { shadowRoot: !0 }, n) {
    super(), b(this, "_instance", null), b(this, "_connected", !1), b(this, "_resolved", !1), b(this, "_numberProps", null), b(this, "_styles"), b(this, "_slots", {}), b(this, "_ob", null), this._def = t, this._props = o, this._config = s, this._root && n ? n(this._createVNode(), this._root) : (this._config.shadowRoot !== !1 && this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  get _root() {
    return this._config.shadowRoot ? this.shadowRoot : this;
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, B(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), D(null, this._root), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const n of s)
        this._setAttr(n.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, n = !1) => {
      var r;
      const { props: i } = s, y = this._collectNestedStyles(s);
      let v;
      if (i && !j(i))
        for (const p in i) {
          const a = i[p];
          (a === Number || a && a.type === Number) && (p in this._props && (this._props[p] = k(this._props[p])), (v || (v = /* @__PURE__ */ Object.create(null)))[C(p)] = !0);
        }
      if (this._numberProps = v, n && this._resolveProps(s), !this._config.shadowRoot) {
        this._slots = {};
        const p = (a) => Array.from(a).map((c) => {
          var u;
          if (c.nodeType === Node.ELEMENT_NODE) {
            const m = c, h = Object.fromEntries(
              Array.from(m.attributes).map((E) => [E.name, E.value])
            );
            return L(
              m.tagName.toLowerCase(),
              h,
              p(m.childNodes)
            );
          } else if (c.nodeType === Node.TEXT_NODE)
            return ((u = c.textContent) == null ? void 0 : u.trim()) || null;
          return null;
        }).filter((c) => c != null);
        for (const a of Array.from(this.childNodes)) {
          const c = a.nodeType === Node.ELEMENT_NODE && a.getAttribute("slot") || "default";
          if (this._slots[c] || (this._slots[c] = []), a.nodeType === Node.ELEMENT_NODE) {
            const u = a, m = Object.fromEntries(
              Array.from(u.attributes).map((h) => [h.name, h.value])
            );
            this._slots[c].push(
              L(
                u.tagName.toLowerCase(),
                m,
                p(u.childNodes)
              )
            );
          } else if (a.nodeType === Node.TEXT_NODE) {
            const u = (r = a.textContent) == null ? void 0 : r.trim();
            u && this._slots[c].push(u);
          }
        }
        this.replaceChildren();
      }
      this._applyStyles(y), this._update();
    }, o = this._def.__asyncLoader;
    o ? o().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: o } = t, s = j(o) ? o : Object.keys(o || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && s.includes(n) && this._setProp(n, this[n], !0, !1);
    for (const n of s.map(C))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(r) {
          this._setProp(n, r);
        }
      });
  }
  _setAttr(t) {
    let o = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
    const s = C(t);
    this._numberProps && this._numberProps[s] && (o = k(o)), this._setProp(s, o, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, o, s = !0, n = !0) {
    o !== this._props[t] && (this._props[t] = o, n && this._instance && this._update(), s && (o === !0 ? this.setAttribute(N(t), "") : typeof o == "string" || typeof o == "number" ? this.setAttribute(N(t), o + "") : o || this.removeAttribute(N(t))));
  }
  _update() {
    D(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = G(this._def, W({}, this._props), this._slots);
    return this._instance || (t.ce = (o) => {
      this._instance = o, o.isCE = !0;
      const s = (r, i) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: i
          })
        );
      };
      o.emit = (r, ...i) => {
        s(r, i), N(r) !== r && s(N(r), i);
      };
      let n = this;
      for (; n = n && (n.parentNode || n.host); )
        if (n instanceof S) {
          o.parent = n._instance, o.provides = n._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((o) => {
      const s = document.createElement("style");
      s.textContent = o, this._config.nonce && s.setAttribute("nonce", this._config.nonce), this._root.prepend(s);
    });
  }
  _collectNestedStyles(t) {
    let o = t.styles ?? [];
    return t.components && Object.values(t.components).forEach((s) => {
      o = o.concat(this._collectNestedStyles(s));
    }), o;
  }
}
const x = (e) => {
  for (; (e == null ? void 0 : e.nodeType) !== 1; ) {
    if (!e.parentElement)
      throw new Error(
        "No parent element found, the rootComponent must be wrapped in a HTML element (e.g. <template><div> app content </div></template>)"
      );
    e = e.parentElement;
  }
  return e;
};
function ee(e) {
  return "on" + e.charAt(0).toUpperCase() + e.slice(1);
}
function te(e) {
  return typeof e == "string" ? e.replace(/:root/g, ":host") : Array.isArray(e) ? e.map((t) => t.replace(/:root/g, ":host")) : e;
}
const oe = ({
  rootComponent: e,
  plugins: t,
  cssFrameworkStyles: o,
  VueDefineCustomElement: s,
  h: n,
  createApp: r,
  getCurrentInstance: i,
  elementName: y,
  disableRemoveStylesOnUnmount: v,
  disableShadowDOM: p,
  replaceRootWithHostInCssFramework: a,
  asyncInitialization: c,
  loaderAttribute: u,
  hideSlotContentUntilMounted: m,
  nonce: h
}) => {
  const E = p ? Q : s, R = a ? te(o) : o, $ = E({
    styles: [R],
    nonce: h,
    props: {
      ...e.props,
      modelValue: { type: [String, Number, Boolean, Array, Object] }
      // v-model support
    },
    emits: e == null ? void 0 : e.emits,
    setup(I, { slots: U }) {
      var P;
      const T = [...(e == null ? void 0 : e.emits) || [], "update:modelValue"], _ = r();
      if (_.component("app-root", e), e.provide) {
        const l = typeof e.provide == "function" ? e.provide() : e.provide;
        Object.keys(l).forEach((d) => {
          _.provide(d, l[d]);
        });
      }
      _.mixin({
        mounted() {
          var l, d, w, g;
          if (((d = (l = this.$) == null ? void 0 : l.type) == null ? void 0 : d.name) === "vue-custom-element-root-component")
            return;
          const V = (f) => {
            f != null && f.length && (this.__style = document.createElement("style"), this.__style.innerText = f.join().replace(/\n/g, ""), h && this.__style.setAttribute("nonce", h), x(this.$el).append(this.__style));
          };
          if (V((w = this.$) == null ? void 0 : w.type.styles), this.$options.components)
            for (const f of Object.values(this.$options.components))
              V(f.styles);
          const A = ((g = this.$el.getRootNode()) == null ? void 0 : g.host) || x(this.$el);
          A && (m && A.querySelectorAll("[hidden]").forEach((f) => {
            f.removeAttribute("hidden");
          }), A.querySelectorAll(`[${u}]`).forEach((f) => {
            f.remove();
          }));
        },
        unmounted() {
          var l;
          v || (l = this.__style) == null || l.remove();
        }
      }), _.use(t);
      const O = i();
      if (Object.assign(O.appContext, _._context), Object.assign(O.provides, _._context.provides), process.env.NODE_ENV === "development" && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
        const l = document.querySelector(y);
        _._container = l, _._instance = O;
        const d = {
          Comment: Symbol("v-cmt"),
          Fragment: Symbol("v-fgt"),
          Static: Symbol("v-stc"),
          Text: Symbol("v-txt")
        };
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("app:init", _, _.version, d), window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = _;
      }
      const H = T == null ? void 0 : T.reduce((l, d) => {
        const w = ee(d);
        return l[w] = (g) => {
          O.emit(d, g);
        }, l;
      }, {}), F = (P = e == null ? void 0 : e.namedSlots) == null ? void 0 : P.reduce((l, d) => (l[d] = () => n("slot", {
        name: d
      }), l), {});
      return () => n(
        e,
        {
          ...I,
          ...H
        },
        {
          default: () => n("slot"),
          ...F,
          ...U
        }
      );
    }
  }, { shadowRoot: !p, nonce: h });
  return c().then(() => $);
}, re = ({
  elementName: e,
  rootComponent: t,
  plugins: o,
  cssFrameworkStyles: s,
  VueDefineCustomElement: n,
  h: r,
  createApp: i,
  getCurrentInstance: y,
  disableRemoveStylesOnUnmount: v = !1,
  disableShadowDOM: p = !1,
  replaceRootWithHostInCssFramework: a = !1,
  asyncInitialization: c = () => Promise.resolve(),
  loaderAttribute: u = "data-web-component-loader",
  hideSlotContentUntilMounted: m = !1,
  nonce: h
  // Used for Content Security Policy (CSP) compliance - will be applied to inline styles
}) => {
  if (!t) {
    console.warn("No root component provided. Please provide a root component to create a web component.");
    return;
  }
  if (!n) {
    console.warn(
      "No VueDefineCustomElement provided. Please provide a VueDefineCustomElement to create a web component."
    );
    return;
  }
  if (!r) {
    console.warn("No h provided. Please provide an h to create a web component.");
    return;
  }
  if (!i) {
    console.warn("No createApp provided. Please provide a createApp to create a web component.");
    return;
  }
  if (!y) {
    console.warn("No getCurrentInstance provided. Please provide a getCurrentInstance to create a web component.");
    return;
  }
  oe({
    rootComponent: t,
    plugins: o,
    cssFrameworkStyles: s,
    VueDefineCustomElement: n,
    h: r,
    createApp: i,
    getCurrentInstance: y,
    elementName: e,
    disableRemoveStylesOnUnmount: v,
    disableShadowDOM: p,
    replaceRootWithHostInCssFramework: a,
    asyncInitialization: c,
    loaderAttribute: u,
    hideSlotContentUntilMounted: m,
    nonce: h
  }).then((E) => {
    customElements.define(
      e,
      E
    );
  });
};
export {
  re as c
};
