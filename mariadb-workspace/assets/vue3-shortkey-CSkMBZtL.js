import { g as S } from "./chartjs-plugin-trendline-BDw12kqS.js";
var L = { exports: {} }, M = L.exports, C;
function j() {
  return C || (C = 1, (function(P, V) {
    (function(y, l) {
      P.exports = l();
    })(typeof self < "u" ? self : M, function() {
      return (function(y) {
        function l(i) {
          if (f[i]) return f[i].exports;
          var s = f[i] = { i, l: !1, exports: {} };
          return y[i].call(s.exports, s, s.exports, l), s.l = !0, s.exports;
        }
        var f = {};
        return l.m = y, l.c = f, l.d = function(i, s, b) {
          l.o(i, s) || Object.defineProperty(i, s, { configurable: !1, enumerable: !0, get: b });
        }, l.n = function(i) {
          var s = i && i.__esModule ? function() {
            return i.default;
          } : function() {
            return i;
          };
          return l.d(s, "a", s), s;
        }, l.o = function(i, s) {
          return Object.prototype.hasOwnProperty.call(i, s);
        }, l.p = "../dist/", l(l.s = 0);
      })([function(y, l, f) {
        (function(i) {
          function s(e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
              return r;
            }
            return Array.from(e);
          }
          var b;
          f(2), f(3);
          var a = {}, n = {}, g = [], v = [], p = !1, d = function(e) {
            return e = typeof e == "string" ? JSON.parse(e.replace(/\'/gi, '"')) : e, e instanceof Array ? { "": e } : e;
          }, c = function(e, t, r, u) {
            var m = r.modifiers.push === !0, x = r.modifiers.avoid === !0, K = !r.modifiers.focus, D = r.modifiers.once === !0, E = r.modifiers.propagte === !0;
            x ? (g = g.filter(function(A) {
              return !A === t;
            }), g.push(t)) : T({ b: e, push: m, once: D, focus: K, propagte: E, el: u.el });
          }, k = function(e, t) {
            for (var r in e) {
              var u = a.encodeKey(e[r]), m = n[u].el.indexOf(t);
              n[u].el.length > 1 && m > -1 ? n[u].el.splice(m, 1) : delete n[u];
            }
          };
          a.install = function(e, t) {
            v = [].concat(s(t && t.prevent ? t.prevent : [])), e.directive("shortkey", { beforeMount: function(r, u, m) {
              var x = d(u.value);
              c(x, r, u, m);
            }, updated: function(r, u, m) {
              var x = d(u.oldValue);
              k(x, r);
              var K = d(u.value);
              c(K, r, u, m);
            }, unmounted: function(r, u) {
              var m = d(u.value);
              k(m, r);
            } });
          }, a.decodeKey = function(e) {
            return h(e);
          }, a.encodeKey = function(e) {
            var t = {};
            t.shiftKey = e.includes("shift"), t.ctrlKey = e.includes("ctrl"), t.metaKey = e.includes("meta"), t.altKey = e.includes("alt");
            var r = h(t);
            return r += e.filter(function(u) {
              return !["shift", "ctrl", "meta", "alt"].includes(u);
            }).join("");
          };
          var h = function(e) {
            var t = "";
            return (e.key === "Shift" || e.shiftKey) && (t += "shift"), (e.key === "Control" || e.ctrlKey) && (t += "ctrl"), (e.key === "Meta" || e.metaKey) && (t += "meta"), (e.key === "Alt" || e.altKey) && (t += "alt"), e.key === "ArrowUp" && (t += "arrowup"), e.key === "ArrowLeft" && (t += "arrowleft"), e.key === "ArrowRight" && (t += "arrowright"), e.key === "ArrowDown" && (t += "arrowdown"), e.key === "AltGraph" && (t += "altgraph"), e.key === "Escape" && (t += "esc"), e.key === "Enter" && (t += "enter"), e.key === "Tab" && (t += "tab"), e.key === " " && (t += "space"), e.key === "PageUp" && (t += "pageup"), e.key === "PageDown" && (t += "pagedown"), e.key === "Home" && (t += "home"), e.key === "End" && (t += "end"), e.key === "Delete" && (t += "del"), e.key === "Backspace" && (t += "backspace"), e.key === "Insert" && (t += "insert"), e.key === "NumLock" && (t += "numlock"), e.key === "CapsLock" && (t += "capslock"), e.key === "Pause" && (t += "pause"), e.key === "ContextMenu" && (t += "contextmenu"), e.key === "ScrollLock" && (t += "scrolllock"), e.key === "BrowserHome" && (t += "browserhome"), e.key === "MediaSelect" && (t += "mediaselect"), (e.key && e.key !== " " && e.key.length === 1 || /F\d{1,2}|\//g.test(e.key)) && (t += e.key.toLowerCase()), t;
          }, w = function(e) {
            var t = new CustomEvent("shortkey", { bubbles: !1 });
            n[e].key && (t.srcKey = n[e].key);
            var r = n[e].el;
            n[e].propagte ? r.forEach(function(u) {
              return u.dispatchEvent(t);
            }) : r[r.length - 1].dispatchEvent(t);
          };
          a.keyDown = function(e) {
            (!n[e].once && !n[e].push || n[e].push && !p) && w(e);
          }, i && Object({ NODE_ENV: "production" }) && (function() {
            document.addEventListener("keydown", function(e) {
              var t = a.decodeKey(e);
              if (o(t)) {
                if (n[t].propagte || (e.preventDefault(), e.stopPropagation()), n[t].focus) a.keyDown(t), p = !0;
                else if (!p) {
                  var r = n[t].el;
                  r[r.length - 1].focus(), p = !0;
                }
              }
            }, !0), document.addEventListener("keyup", function(e) {
              var t = a.decodeKey(e);
              o(t) && (n[t].propagte || (e.preventDefault(), e.stopPropagation()), (n[t].once || n[t].push) && w(t)), p = !1;
            }, !0);
          })();
          var T = function(e) {
            var t = e.b, r = e.push, u = e.once, m = e.focus, x = e.propagte, K = e.el;
            for (var D in t) {
              var E = a.encodeKey(t[D]), A = n[E] && n[E].el ? n[E].el : [], O = n[E] && n[E].propagte;
              A.push(K), n[E] = { push: r, once: u, focus: m, key: D, propagte: O || x, el: A };
            }
          }, o = function(e) {
            var t = !!g.find(function(u) {
              return u === document.activeElement;
            }), r = !!v.find(function(u) {
              return document.activeElement && document.activeElement.matches(u);
            });
            return !!n[e] && !(t || r);
          };
          y !== void 0 && y.exports ? y.exports = a : (b = (function() {
            return a;
          }).call(l, f, l, y)) !== void 0 && (y.exports = b);
        }).call(l, f(1));
      }, function(y, l) {
        function f() {
          throw new Error("setTimeout has not been defined");
        }
        function i() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(o) {
          if (p === setTimeout) return setTimeout(o, 0);
          if ((p === f || !p) && setTimeout) return p = setTimeout, setTimeout(o, 0);
          try {
            return p(o, 0);
          } catch {
            try {
              return p.call(null, o, 0);
            } catch {
              return p.call(this, o, 0);
            }
          }
        }
        function b(o) {
          if (d === clearTimeout) return clearTimeout(o);
          if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(o);
          try {
            return d(o);
          } catch {
            try {
              return d.call(null, o);
            } catch {
              return d.call(this, o);
            }
          }
        }
        function a() {
          w && k && (w = !1, k.length ? h = k.concat(h) : T = -1, h.length && n());
        }
        function n() {
          if (!w) {
            var o = s(a);
            w = !0;
            for (var e = h.length; e; ) {
              for (k = h, h = []; ++T < e; ) k && k[T].run();
              T = -1, e = h.length;
            }
            k = null, w = !1, b(o);
          }
        }
        function g(o, e) {
          this.fun = o, this.array = e;
        }
        function v() {
        }
        var p, d, c = y.exports = {};
        (function() {
          try {
            p = typeof setTimeout == "function" ? setTimeout : f;
          } catch {
            p = f;
          }
          try {
            d = typeof clearTimeout == "function" ? clearTimeout : i;
          } catch {
            d = i;
          }
        })();
        var k, h = [], w = !1, T = -1;
        c.nextTick = function(o) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
          h.push(new g(o, e)), h.length !== 1 || w || s(n);
        }, g.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = v, c.addListener = v, c.once = v, c.off = v, c.removeListener = v, c.removeAllListeners = v, c.emit = v, c.prependListener = v, c.prependOnceListener = v, c.listeners = function(o) {
          return [];
        }, c.binding = function(o) {
          throw new Error("process.binding is not supported");
        }, c.cwd = function() {
          return "/";
        }, c.chdir = function(o) {
          throw new Error("process.chdir is not supported");
        }, c.umask = function() {
          return 0;
        };
      }, function(y, l) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      }, function(y, l) {
        (function() {
          if (typeof window < "u") try {
            var f = new window.CustomEvent("test", { cancelable: !0 });
            if (f.preventDefault(), f.defaultPrevented !== !0) throw new Error("Could not prevent default");
          } catch {
            var i = function(b, a) {
              var n, g;
              return a = a || {}, a.bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, n = document.createEvent("CustomEvent"), n.initCustomEvent(b, a.bubbles, a.cancelable, a.detail), g = n.preventDefault, n.preventDefault = function() {
                g.call(this);
                try {
                  Object.defineProperty(this, "defaultPrevented", { get: function() {
                    return !0;
                  } });
                } catch {
                  this.defaultPrevented = !0;
                }
              }, n;
            };
            i.prototype = window.Event.prototype, window.CustomEvent = i;
          }
        })();
      }]);
    });
  })(L)), L.exports;
}
var N = j();
const q = /* @__PURE__ */ S(N);
export {
  q as V
};
