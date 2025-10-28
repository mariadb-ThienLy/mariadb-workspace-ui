var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ne(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var F = { exports: {} };
/*!
 * chartjs-plugin-trendline.js
 * Version: 2.1.9
 *
 * Copyright 2025 Marcus Alsterfjord
 * Released under the MIT license
 * https://github.com/Makanz/chartjs-plugin-trendline/blob/master/README.md
 *
 * Modified by @vesal: accept xy-data from scatter,
 * Modified by @Megaemce: add label and basic legend to trendline, add JSDoc,
 */
var _;
function te() {
  return _ || (_ = 1, (function(c, $) {
    const x = {
      id: "chartjs-plugin-trendline",
      /**
       * Hook that is called after datasets are drawn.
       * Adds trendlines to the datasets that have `trendlineLinear` configured.
       * @param {Chart} chartInstance - The chart instance where datasets are drawn.
       */
      afterDatasetsDraw: (e) => {
        const i = e.ctx, { xScale: n, yScale: l } = H(e);
        e.data.datasets.map((r, o) => ({ dataset: r, index: o })).filter((r) => r.dataset.trendlineLinear).sort((r, o) => {
          const t = r.dataset.order ?? 0, f = o.dataset.order ?? 0;
          return t === 0 && f !== 0 ? 1 : f === 0 && t !== 0 ? -1 : t - f;
        }).forEach(({ dataset: r, index: o }) => {
          if ((r.alwaysShowTrendline || e.isDatasetVisible(o)) && r.data.length > 1) {
            const f = e.getDatasetMeta(o);
            U(f, i, r, n, l);
          }
        }), i.setLineDash([]);
      },
      beforeInit: (e) => {
        e.data.datasets.forEach((n) => {
          if (n.trendlineLinear && n.trendlineLinear.label) {
            const l = n.trendlineLinear.label, d = e.legend.options.labels.generateLabels;
            e.legend.options.labels.generateLabels = function(r) {
              const o = d(r), t = n.trendlineLinear.legend;
              return t && t.display !== !1 && o.push({
                text: t.text || l + " (Trendline)",
                strokeStyle: t.color || n.borderColor || "rgba(169,169,169, .6)",
                fillStyle: t.fillStyle || "transparent",
                lineCap: t.lineCap || "butt",
                lineDash: t.lineDash || [],
                lineWidth: t.width || 1
              }), o;
            };
          }
        });
      }
    }, H = (e) => {
      let i, n;
      for (const l of Object.values(e.scales))
        if (l.isHorizontal() ? i = l : n = l, i && n) break;
      return { xScale: i, yScale: n };
    }, U = (e, i, n, l, d) => {
      var k, E, K, W, G;
      const r = n.yAxisID || "y", o = e.controller.chart.scales[r] || d, t = n.borderColor || "rgba(169,169,169, .6)", {
        colorMin: f = t,
        colorMax: P = t,
        width: C = n.borderWidth || 3,
        lineStyle: D = "solid",
        fillColor: m = !1
      } = n.trendlineLinear || {}, {
        color: S = t,
        text: w = "Trendline",
        display: j = !0,
        displayValue: Y = !0,
        offset: I = 10,
        percentage: R = !1
      } = n.trendlineLinear.label || {}, {
        family: B = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: J = 12
      } = ((k = n.trendlineLinear.label) == null ? void 0 : k.font) || {}, A = e.controller.chart.options, y = typeof A.parsing == "object" ? A.parsing : void 0, L = ((E = n.trendlineLinear) == null ? void 0 : E.xAxisKey) || (y == null ? void 0 : y.xAxisKey) || "x", Q = ((K = n.trendlineLinear) == null ? void 0 : K.yAxisKey) || (y == null ? void 0 : y.yAxisKey) || "y";
      let a = new O(), v = n.data.findIndex(
        (s) => s != null
      ), Z = n.data.length - 1, N = (W = e.data[v]) == null ? void 0 : W[L], V = (G = e.data[Z]) == null ? void 0 : G[L], ee = typeof n.data[v] == "object";
      n.data.forEach((s, p) => {
        if (s != null)
          if (["time", "timeseries"].includes(l.options.type)) {
            let T = s[L] != null ? s[L] : s.t;
            T !== void 0 ? a.add(new Date(T).getTime(), s[Q]) : a.add(p, s);
          } else ee ? !isNaN(s.x) && !isNaN(s.y) ? a.add(s.x, s.y) : isNaN(s.x) ? isNaN(s.y) || a.add(p, s.y) : a.add(p, s.x) : a.add(p, s);
      });
      let b = isFinite(N) ? N : l.getPixelForValue(a.minx), g = o.getPixelForValue(a.f(a.minx)), u, h;
      if (n.trendlineLinear.projection && a.scale() < 0) {
        let s = a.fo();
        s < a.minx && (s = a.maxx), u = l.getPixelForValue(s), h = o.getPixelForValue(a.f(s));
      } else
        u = isFinite(V) ? V : l.getPixelForValue(a.maxx), h = o.getPixelForValue(a.f(a.maxx));
      const ie = e.controller.chart.chartArea.bottom;
      if (e.controller.chart.width, isFinite(b) && isFinite(g) && isFinite(u) && isFinite(h)) {
        i.lineWidth = C, q(i, D), z({ ctx: i, x1: b, y1: g, x2: u, y2: h, colorMin: f, colorMax: P }), m && M(i, b, g, u, h, ie, m);
        const s = Math.atan2(h - g, u - b), p = (g - h) / (u - b);
        if (n.trendlineLinear.label && j !== !1) {
          const T = Y ? `${w} (Slope: ${R ? (p * 100).toFixed(2) + "%" : p.toFixed(2)})` : w;
          X(
            i,
            T,
            b,
            g,
            u,
            h,
            s,
            S,
            B,
            J,
            I
          );
        }
      }
    }, X = (e, i, n, l, d, r, o, t, f, P, C) => {
      e.font = `${P}px ${f}`, e.fillStyle = t;
      const D = e.measureText(i).width, m = (n + d) / 2, S = (l + r) / 2;
      e.save(), e.translate(m, S), e.rotate(o);
      const w = -D / 2, j = C;
      e.fillText(i, w, j), e.restore();
    }, q = (e, i) => {
      switch (i) {
        case "dotted":
          e.setLineDash([2, 2]);
          break;
        case "dashed":
          e.setLineDash([8, 3]);
          break;
        case "dashdot":
          e.setLineDash([8, 3, 2, 3]);
          break;
        case "solid":
        default:
          e.setLineDash([]);
          break;
      }
    }, z = ({ ctx: e, x1: i, y1: n, x2: l, y2: d, colorMin: r, colorMax: o }) => {
      if (!isFinite(i) || !isFinite(n) || !isFinite(l) || !isFinite(d)) {
        console.warn(
          "Cannot draw trendline: coordinates contain non-finite values",
          { x1: i, y1: n, x2: l, y2: d }
        );
        return;
      }
      e.beginPath(), e.moveTo(i, n), e.lineTo(l, d);
      try {
        let t = e.createLinearGradient(i, n, l, d);
        t.addColorStop(0, r), t.addColorStop(1, o), e.strokeStyle = t;
      } catch (t) {
        console.warn("Gradient creation failed, using solid color:", t), e.strokeStyle = r;
      }
      e.stroke(), e.closePath();
    }, M = (e, i, n, l, d, r, o) => {
      if (!isFinite(i) || !isFinite(n) || !isFinite(l) || !isFinite(d) || !isFinite(r)) {
        console.warn(
          "Cannot fill below trendline: coordinates contain non-finite values",
          { x1: i, y1: n, x2: l, y2: d, drawBottom: r }
        );
        return;
      }
      e.beginPath(), e.moveTo(i, n), e.lineTo(l, d), e.lineTo(l, r), e.lineTo(i, r), e.lineTo(i, n), e.closePath(), e.fillStyle = o, e.fill();
    };
    class O {
      constructor() {
        this.count = 0, this.sumx = 0, this.sumy = 0, this.sumx2 = 0, this.sumxy = 0, this.minx = Number.MAX_VALUE, this.maxx = Number.MIN_VALUE;
      }
      /**
       * Adds a point to the line fitter.
       * @param {number} x - The x-coordinate of the point.
       * @param {number} y - The y-coordinate of the point.
       */
      add(i, n) {
        this.sumx += i, this.sumy += n, this.sumx2 += i * i, this.sumxy += i * n, i < this.minx && (this.minx = i), i > this.maxx && (this.maxx = i), this.count++;
      }
      /**
       * Calculates the slope of the fitted line.
       * @returns {number} - The slope of the line.
       */
      slope() {
        const i = this.count * this.sumx2 - this.sumx * this.sumx;
        return (this.count * this.sumxy - this.sumx * this.sumy) / i;
      }
      /**
       * Calculates the y-intercept of the fitted line.
       * @returns {number} - The y-intercept of the line.
       */
      intercept() {
        return (this.sumy - this.slope() * this.sumx) / this.count;
      }
      /**
       * Returns the fitted value (y) for a given x.
       * @param {number} x - The x-coordinate.
       * @returns {number} - The corresponding y-coordinate on the fitted line.
       */
      f(i) {
        return this.slope() * i + this.intercept();
      }
      /**
       * Calculates the projection of the line for the future value.
       * @returns {number} - The future value based on the fitted line.
       */
      fo() {
        return -this.intercept() / this.slope();
      }
      /**
       * Returns the scale (variance) of the fitted line.
       * @returns {number} - The scale of the fitted line.
       */
      scale() {
        return this.slope();
      }
    }
    typeof window < "u" && window.Chart && (window.Chart.hasOwnProperty("register") ? window.Chart.register(x) : window.Chart.plugins.register(x));
    try {
      c.exports = $ = x;
    } catch {
    }
  })(F, F.exports)), F.exports;
}
var se = te();
const re = /* @__PURE__ */ ne(se);
export {
  le as c,
  ne as g,
  re as t
};
