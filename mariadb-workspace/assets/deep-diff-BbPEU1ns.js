import { g as V } from "./chartjs-plugin-trendline-BDw12kqS.js";
var E = { exports: {} }, W = E.exports, M;
function X() {
  return M || (M = 1, (function(B, Z) {
    (function(O, C) {
      var v = C(O);
      B.exports = v;
    })(W, function(O) {
      var C = ["N", "E", "A", "D"];
      function v(t, r) {
        t.super_ = r, t.prototype = Object.create(r.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
      }
      function A(t, r) {
        Object.defineProperty(this, "kind", {
          value: t,
          enumerable: !0
        }), r && r.length && Object.defineProperty(this, "path", {
          value: r,
          enumerable: !0
        });
      }
      function b(t, r, e) {
        b.super_.call(this, "E", t), Object.defineProperty(this, "lhs", {
          value: r,
          enumerable: !0
        }), Object.defineProperty(this, "rhs", {
          value: e,
          enumerable: !0
        });
      }
      v(b, A);
      function h(t, r) {
        h.super_.call(this, "N", t), Object.defineProperty(this, "rhs", {
          value: r,
          enumerable: !0
        });
      }
      v(h, A);
      function x(t, r) {
        x.super_.call(this, "D", t), Object.defineProperty(this, "lhs", {
          value: r,
          enumerable: !0
        });
      }
      v(x, A);
      function j(t, r, e) {
        j.super_.call(this, "A", t), Object.defineProperty(this, "index", {
          value: r,
          enumerable: !0
        }), Object.defineProperty(this, "item", {
          value: e,
          enumerable: !0
        });
      }
      v(j, A);
      function R(t, r, e) {
        var f = t.slice(r + 1 || t.length);
        return t.length = r < 0 ? t.length + r : r, t.push.apply(t, f), t;
      }
      function y(t) {
        var r = typeof t;
        return r !== "object" ? r : t === Math ? "math" : t === null ? "null" : Array.isArray(t) ? "array" : Object.prototype.toString.call(t) === "[object Date]" ? "date" : typeof t.toString == "function" && /^\/.*\//.test(t.toString()) ? "regexp" : "object";
      }
      function S(t) {
        var r = 0;
        if (t.length === 0)
          return r;
        for (var e = 0; e < t.length; e++) {
          var f = t.charCodeAt(e);
          r = (r << 5) - r + f, r = r & r;
        }
        return r;
      }
      function a(t) {
        var r = 0, e = y(t);
        if (e === "array") {
          t.forEach(function(d) {
            r += a(d);
          });
          var f = "[type: array, hash: " + r + "]";
          return r + S(f);
        }
        if (e === "object") {
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              var i = "[ type: object, key: " + n + ", value hash: " + a(t[n]) + "]";
              r += S(i);
            }
          return r;
        }
        var u = "[ type: " + e + " ; value: " + t + "]";
        return r + S(u);
      }
      function D(t, r, e, f, n, i, u, d) {
        e = e || [], n = n || [], u = u || [];
        var l = n.slice(0);
        if (typeof i < "u" && i !== null) {
          if (f) {
            if (typeof f == "function" && f(l, i))
              return;
            if (typeof f == "object") {
              if (f.prefilter && f.prefilter(l, i))
                return;
              if (f.normalize) {
                var T = f.normalize(l, i, t, r);
                T && (t = T[0], r = T[1]);
              }
            }
          }
          l.push(i);
        }
        y(t) === "regexp" && y(r) === "regexp" && (t = t.toString(), r = r.toString());
        var q = typeof t, U = typeof r, p, m, o, w, k = q !== "undefined" || u && u.length > 0 && u[u.length - 1].lhs && Object.getOwnPropertyDescriptor(u[u.length - 1].lhs, i), F = U !== "undefined" || u && u.length > 0 && u[u.length - 1].rhs && Object.getOwnPropertyDescriptor(u[u.length - 1].rhs, i);
        if (!k && F)
          e.push(new h(l, r));
        else if (!F && k)
          e.push(new x(l, t));
        else if (y(t) !== y(r))
          e.push(new b(l, t, r));
        else if (y(t) === "date" && t - r !== 0)
          e.push(new b(l, t, r));
        else if (q === "object" && t !== null && r !== null) {
          for (p = u.length - 1; p > -1; --p)
            if (u[p].lhs === t) {
              w = !0;
              break;
            }
          if (w)
            t !== r && e.push(new b(l, t, r));
          else {
            if (u.push({ lhs: t, rhs: r }), Array.isArray(t)) {
              for (d && (t.sort(function(z, I) {
                return a(z) - a(I);
              }), r.sort(function(z, I) {
                return a(z) - a(I);
              })), p = r.length - 1, m = t.length - 1; p > m; )
                e.push(new j(l, p, new h(void 0, r[p--])));
              for (; m > p; )
                e.push(new j(l, m, new x(void 0, t[m--])));
              for (; p >= 0; --p)
                D(t[p], r[p], e, f, l, p, u, d);
            } else {
              var K = Object.keys(t), P = Object.keys(r);
              for (p = 0; p < K.length; ++p)
                o = K[p], w = P.indexOf(o), w >= 0 ? (D(t[o], r[o], e, f, l, o, u, d), P[w] = null) : D(t[o], void 0, e, f, l, o, u, d);
              for (p = 0; p < P.length; ++p)
                o = P[p], o && D(void 0, r[o], e, f, l, o, u, d);
            }
            u.length = u.length - 1;
          }
        } else t !== r && (q === "number" && isNaN(t) && isNaN(r) || e.push(new b(l, t, r)));
      }
      function N(t, r, e, f, n) {
        var i = [];
        if (D(t, r, i, f, null, null, null, n), e)
          for (var u = 0; u < i.length; ++u)
            e(i[u]);
        return i;
      }
      function G(t, r, e, f, n, i, u) {
        return D(t, r, e, f, n, i, u, !0);
      }
      function s(t, r, e, f) {
        var n = f ? function(u) {
          u && f.push(u);
        } : void 0, i = N(t, r, n, e);
        return f || (i.length ? i : void 0);
      }
      function J(t, r, e, f) {
        var n = f ? function(u) {
          u && f.push(u);
        } : void 0, i = N(t, r, n, e, !0);
        return f || (i.length ? i : void 0);
      }
      function _(t, r, e) {
        if (e.path && e.path.length) {
          var f = t[r], n, i = e.path.length - 1;
          for (n = 0; n < i; n++)
            f = f[e.path[n]];
          switch (e.kind) {
            case "A":
              _(f[e.path[n]], e.index, e.item);
              break;
            case "D":
              delete f[e.path[n]];
              break;
            case "E":
            case "N":
              f[e.path[n]] = e.rhs;
              break;
          }
        } else
          switch (e.kind) {
            case "A":
              _(t[r], e.index, e.item);
              break;
            case "D":
              t = R(t, r);
              break;
            case "E":
            case "N":
              t[r] = e.rhs;
              break;
          }
        return t;
      }
      function $(t, r, e) {
        if (typeof e > "u" && r && ~C.indexOf(r.kind) && (e = r), t && e && e.kind) {
          for (var f = t, n = -1, i = e.path ? e.path.length - 1 : 0; ++n < i; )
            typeof f[e.path[n]] > "u" && (f[e.path[n]] = typeof e.path[n + 1] < "u" && typeof e.path[n + 1] == "number" ? [] : {}), f = f[e.path[n]];
          switch (e.kind) {
            case "A":
              e.path && typeof f[e.path[n]] > "u" && (f[e.path[n]] = []), _(e.path ? f[e.path[n]] : f, e.index, e.item);
              break;
            case "D":
              delete f[e.path[n]];
              break;
            case "E":
            case "N":
              f[e.path[n]] = e.rhs;
              break;
          }
        }
      }
      function H(t, r, e) {
        if (e.path && e.path.length) {
          var f = t[r], n, i = e.path.length - 1;
          for (n = 0; n < i; n++)
            f = f[e.path[n]];
          switch (e.kind) {
            case "A":
              H(f[e.path[n]], e.index, e.item);
              break;
            case "D":
              f[e.path[n]] = e.lhs;
              break;
            case "E":
              f[e.path[n]] = e.lhs;
              break;
            case "N":
              delete f[e.path[n]];
              break;
          }
        } else
          switch (e.kind) {
            case "A":
              H(t[r], e.index, e.item);
              break;
            case "D":
              t[r] = e.lhs;
              break;
            case "E":
              t[r] = e.lhs;
              break;
            case "N":
              t = R(t, r);
              break;
          }
        return t;
      }
      function L(t, r, e) {
        if (t && r && e && e.kind) {
          var f = t, n, i;
          for (i = e.path.length - 1, n = 0; n < i; n++)
            typeof f[e.path[n]] > "u" && (f[e.path[n]] = {}), f = f[e.path[n]];
          switch (e.kind) {
            case "A":
              H(f[e.path[n]], e.index, e.item);
              break;
            case "D":
              f[e.path[n]] = e.lhs;
              break;
            case "E":
              f[e.path[n]] = e.lhs;
              break;
            case "N":
              delete f[e.path[n]];
              break;
          }
        }
      }
      function Q(t, r, e) {
        if (t && r) {
          var f = function(n) {
            (!e || e(t, r, n)) && $(t, r, n);
          };
          N(t, r, f);
        }
      }
      return Object.defineProperties(s, {
        diff: {
          value: s,
          enumerable: !0
        },
        orderIndependentDiff: {
          value: J,
          enumerable: !0
        },
        observableDiff: {
          value: N,
          enumerable: !0
        },
        orderIndependentObservableDiff: {
          value: G,
          enumerable: !0
        },
        orderIndepHash: {
          value: a,
          enumerable: !0
        },
        applyDiff: {
          value: Q,
          enumerable: !0
        },
        applyChange: {
          value: $,
          enumerable: !0
        },
        revertChange: {
          value: L,
          enumerable: !0
        },
        isConflict: {
          value: function() {
            return typeof $conflict < "u";
          },
          enumerable: !0
        }
      }), s.DeepDiff = s, O && (O.DeepDiff = s), s;
    });
  })(E)), E.exports;
}
var Y = X();
const g = /* @__PURE__ */ V(Y);
export {
  g as d
};
