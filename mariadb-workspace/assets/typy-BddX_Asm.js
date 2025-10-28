var a = {}, p = { exports: {} }, h, g;
function m() {
  if (g) return h;
  g = 1;
  var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, y = function(n, i) {
    if (i === void 0 || typeof i == "string") {
      if (typeof n < "u" && typeof i == "string") {
        var e = /[.\[\]'"]/g, t = i.split(e).filter(function(u) {
          return u !== "";
        });
        n = t.reduce(function(u, r) {
          return u && u[r] !== "undefined" ? u[r] : void 0;
        }, n);
      }
      return n;
    }
  }, o = function(n) {
    if (Object.prototype.toString.call(n) === "[object Array]") n.forEach(function(i) {
      return o(i);
    });
    else if (Object.prototype.toString.call(n) === "[object Object]") Object.keys(n).forEach(function(i) {
      return o(n[i]);
    });
    else return typeof n > "u" ? "undefined" : s(n);
    return n;
  }, c = function(n, i) {
    var e = !1;
    if (Object.prototype.toString.call(n) === "[object Array]")
      if (i.length) for (var t = 0; t < n.length; t += 1) {
        if (!c(n[t], i[t])) {
          e = !1;
          break;
        }
        e = !0;
      }
      else return !0;
    else if (Object.prototype.toString.call(n) === "[object Object]") for (var u in n) {
      if (!c(n[u], i[u])) {
        e = !1;
        break;
      }
      e = !0;
    }
    else return (typeof i > "u" ? "undefined" : s(i)) === (typeof n > "u" ? "undefined" : s(n));
    return e;
  }, f = function(n, i) {
    var e = o(i);
    return c(n, e) ? n : -1;
  };
  return h = { getNestedObject: y, buildSchema: o, getSchemaMatch: c, convertSchemaAndGetMatch: f }, h;
}
var d;
function k() {
  return d || (d = 1, (function(s, y) {
    Object.defineProperty(y, "__esModule", { value: !0 });
    var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, c = /* @__PURE__ */ (function() {
      function e(t, u) {
        for (var r, l = 0; l < u.length; l++) r = u[l], r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
      return function(t, u, r) {
        return u && e(t.prototype, u), r && e(t, r), t;
      };
    })(), f = m();
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    var i = (function() {
      function e() {
        var t = this;
        n(this, e), this.t = function(u, r) {
          if (t.input = u, t.schemaCheck = null, r) if (typeof r == "string") t.input = (0, f.getNestedObject)(t.input, r);
          else {
            var l = (0, f.convertSchemaAndGetMatch)(t.input, r);
            l === -1 ? (t.schemaCheck = !1, t.input = u) : (t.schemaCheck = !0, t.input = l);
          }
          return t;
        };
      }
      return c(e, [{ key: "isValid", get: function() {
        return this.schemaCheck !== null && this.schemaCheck === !0 && this.input !== null && this.input !== void 0;
      } }, { key: "isDefined", get: function() {
        return typeof this.input < "u";
      } }, { key: "isUndefined", get: function() {
        return typeof this.input > "u";
      } }, { key: "isNull", get: function() {
        return this.input === null && o(this.input) === "object";
      } }, { key: "isNullOrUndefined", get: function() {
        return !!(this.isNull || this.isUndefined);
      } }, { key: "isBoolean", get: function() {
        return o(this.input) === o(!0);
      } }, { key: "isTrue", get: function() {
        return this.input === !0;
      } }, { key: "isFalse", get: function() {
        return this.input === !1;
      } }, { key: "isTruthy", get: function() {
        return !!this.input;
      } }, { key: "isFalsy", get: function() {
        return !this.input;
      } }, { key: "isObject", get: function() {
        return o(this.input) === "object" && this.input === Object(this.input) && Object.prototype.toString.call(this.input) !== "[object Array]" && Object.prototype.toString.call(this.input) !== "[object Date]";
      } }, { key: "isEmptyObject", get: function() {
        return !!(this.isObject && Object.keys(this.input).length === 0);
      } }, { key: "isString", get: function() {
        return typeof this.input == "string";
      } }, { key: "isEmptyString", get: function() {
        return !!(this.isString && this.input.length === 0);
      } }, { key: "isNumber", get: function() {
        return !!Number.isFinite(this.input);
      } }, { key: "isArray", get: function() {
        return !!Array.isArray(this.input);
      } }, { key: "isEmptyArray", get: function() {
        return !!(this.isArray && this.input.length === 0);
      } }, { key: "isFunction", get: function() {
        return typeof this.input == "function";
      } }, { key: "isDate", get: function() {
        return this.input instanceof Date || Object.prototype.toString.call(this.input) === "[object Date]";
      } }, { key: "isSymbol", get: function() {
        return o(this.input) === "symbol" || o(this.input) === "object" && Object.prototype.toString.call(this.input) === "[object Symbol]";
      } }, { key: "safeObject", get: function() {
        return this.input;
      } }, { key: "safeObjectOrEmpty", get: function() {
        return this.input ? this.input : {};
      } }, { key: "safeString", get: function() {
        return this.isString ? this.input : "";
      } }, { key: "safeNumber", get: function() {
        return this.isNumber ? this.input : 0;
      } }, { key: "safeBoolean", get: function() {
        return !!this.isBoolean && this.input;
      } }, { key: "safeFunction", get: function() {
        return this.isFunction ? this.input : function() {
        };
      } }, { key: "safeArray", get: function() {
        return this.isArray ? this.input : this.isNullOrUndefined ? [] : [this.input];
      } }]), e;
    })();
    i.Schema = { Number: 1, String: "typy", Boolean: !0, Null: null, Undefined: void 0, Array: [], Function: function() {
    }, Date: /* @__PURE__ */ new Date(), Symbol: Symbol("") }, y.default = i, s.exports = y.default;
  })(p, p.exports)), p.exports;
}
var b;
function S() {
  return b || (b = 1, (function(s) {
    Object.defineProperty(s, "__esModule", { value: !0 }), s.addCustomTypes = s.Schema = s.t = void 0;
    var y = k(), o = c(y);
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var f = function(e, t) {
      return new o.default().t(e, t);
    }, n = o.default.Schema, i = function(e) {
      if (f(e).isObject) Object.keys(e).forEach(function(t) {
        if (f(e[t]).isFunction) o.default.prototype.__defineGetter__(t, function() {
          return e[t](this.input);
        });
        else throw new Error("validator " + t + " is not a function");
      });
      else throw new Error("validators must be key value pairs");
    };
    s.default = f, s.t = f, s.Schema = n, s.addCustomTypes = i;
  })(a)), a;
}
var j = S();
export {
  j as l
};
