import { g as R } from "./chartjs-plugin-trendline-BDw12kqS.js";
var h = { exports: {} }, S;
function U() {
  return S || (S = 1, (function(M, p) {
    Object.defineProperty(p, "__esModule", { value: !0 });
    function f(t) {
      return typeof t == "object" && !("toString" in t) ? Object.prototype.toString.call(t).slice(8, -1) : t;
    }
    var q = typeof process == "object" && process.env.NODE_ENV === "production";
    function u(t, n) {
      if (!t)
        throw q ? new Error("Invariant failed") : new Error(n());
    }
    p.invariant = u;
    var m = Object.prototype.hasOwnProperty, P = Array.prototype.splice, C = Object.prototype.toString;
    function c(t) {
      return C.call(t).slice(8, -1);
    }
    var y = Object.assign || /* istanbul ignore next */
    (function(t, n) {
      return g(n).forEach(function(r) {
        m.call(n, r) && (t[r] = n[r]);
      }), t;
    }), g = typeof Object.getOwnPropertySymbols == "function" ? function(t) {
      return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
    } : function(t) {
      return Object.keys(t);
    };
    function s(t) {
      return Array.isArray(t) ? y(t.constructor(t.length), t) : c(t) === "Map" ? new Map(t) : c(t) === "Set" ? new Set(t) : t && typeof t == "object" ? y(Object.create(Object.getPrototypeOf(t)), t) : t;
    }
    var $ = (
      /** @class */
      (function() {
        function t() {
          this.commands = y({}, _), this.update = this.update.bind(this), this.update.extend = this.extend = this.extend.bind(this), this.update.isEquals = function(n, r) {
            return n === r;
          }, this.update.newContext = function() {
            return new t().update;
          };
        }
        return Object.defineProperty(t.prototype, "isEquals", {
          get: function() {
            return this.update.isEquals;
          },
          set: function(n) {
            this.update.isEquals = n;
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.extend = function(n, r) {
          this.commands[n] = r;
        }, t.prototype.update = function(n, r) {
          var i = this, a = typeof r == "function" ? { $apply: r } : r;
          Array.isArray(n) && Array.isArray(a) || u(!Array.isArray(a), function() {
            return "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.";
          }), u(typeof a == "object" && a !== null, function() {
            return "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the " + ("following commands: " + Object.keys(i.commands).join(", ") + ".");
          });
          var e = n;
          return g(a).forEach(function(o) {
            if (m.call(i.commands, o)) {
              var N = n === e;
              e = i.commands[o](a[o], e, a, n), N && i.isEquals(e, n) && (e = n);
            } else {
              var l = c(n) === "Map" ? i.update(n.get(o), a[o]) : i.update(n[o], a[o]), Y = c(e) === "Map" ? e.get(o) : e[o];
              (!i.isEquals(l, Y) || typeof l > "u" && !m.call(n, o)) && (e === n && (e = s(n)), c(e) === "Map" ? e.set(o, l) : e[o] = l);
            }
          }), e;
        }, t;
      })()
    );
    p.Context = $;
    var _ = {
      $push: function(t, n, r) {
        return E(n, r, "$push"), t.length ? n.concat(t) : n;
      },
      $unshift: function(t, n, r) {
        return E(n, r, "$unshift"), t.length ? t.concat(n) : n;
      },
      $splice: function(t, n, r, i) {
        return D(n, r), t.forEach(function(a) {
          A(a), n === i && a.length && (n = s(i)), P.apply(n, a);
        }), n;
      },
      $set: function(t, n, r) {
        return I(r), t;
      },
      $toggle: function(t, n) {
        d(t, "$toggle");
        var r = t.length ? s(n) : n;
        return t.forEach(function(i) {
          r[i] = !n[i];
        }), r;
      },
      $unset: function(t, n, r, i) {
        return d(t, "$unset"), t.forEach(function(a) {
          Object.hasOwnProperty.call(n, a) && (n === i && (n = s(i)), delete n[a]);
        }), n;
      },
      $add: function(t, n, r, i) {
        return w(n, "$add"), d(t, "$add"), c(n) === "Map" ? t.forEach(function(a) {
          var e = a[0], o = a[1];
          n === i && n.get(e) !== o && (n = s(i)), n.set(e, o);
        }) : t.forEach(function(a) {
          n === i && !n.has(a) && (n = s(i)), n.add(a);
        }), n;
      },
      $remove: function(t, n, r, i) {
        return w(n, "$remove"), d(t, "$remove"), t.forEach(function(a) {
          n === i && n.has(a) && (n = s(i)), n.delete(a);
        }), n;
      },
      $merge: function(t, n, r, i) {
        return T(n, t), g(t).forEach(function(a) {
          t[a] !== n[a] && (n === i && (n = s(i)), n[a] = t[a]);
        }), n;
      },
      $apply: function(t, n) {
        return H(t), t(n);
      }
    }, v = new $();
    p.isEquals = v.update.isEquals, p.extend = v.extend, p.default = v.update, p.default.default = M.exports = y(p.default, p);
    function E(t, n, r) {
      u(Array.isArray(t), function() {
        return "update(): expected target of " + f(r) + " to be an array; got " + f(t) + ".";
      }), d(n[r], r);
    }
    function d(t, n) {
      u(Array.isArray(t), function() {
        return "update(): expected spec of " + f(n) + " to be an array; got " + f(t) + ". Did you forget to wrap your parameter in an array?";
      });
    }
    function D(t, n) {
      u(Array.isArray(t), function() {
        return "Expected $splice target to be an array; got " + f(t);
      }), A(n.$splice);
    }
    function A(t) {
      u(Array.isArray(t), function() {
        return "update(): expected spec of $splice to be an array of arrays; got " + f(t) + ". Did you forget to wrap your parameters in an array?";
      });
    }
    function H(t) {
      u(typeof t == "function", function() {
        return "update(): expected spec of $apply to be a function; got " + f(t) + ".";
      });
    }
    function I(t) {
      u(Object.keys(t).length === 1, function() {
        return "Cannot have more than one key in an object with $set";
      });
    }
    function T(t, n) {
      u(n && typeof n == "object", function() {
        return "update(): $merge expects a spec of type 'object'; got " + f(n);
      }), u(t && typeof t == "object", function() {
        return "update(): $merge expects a target of type 'object'; got " + f(t);
      });
    }
    function w(t, n) {
      var r = c(t);
      u(r === "Map" || r === "Set", function() {
        return "update(): " + f(n) + " expects a target of type Set or Map; got " + f(r);
      });
    }
  })(h, h.exports)), h.exports;
}
var z = U();
const G = /* @__PURE__ */ R(z);
export {
  G as u
};
