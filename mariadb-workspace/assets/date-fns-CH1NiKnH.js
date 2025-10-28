var qe = Object.defineProperty;
var Fe = (r, n, e) => n in r ? qe(r, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[n] = e;
var o = (r, n, e) => Fe(r, typeof n != "symbol" ? n + "" : n, e);
function c(r) {
  const n = Object.prototype.toString.call(r);
  return r instanceof Date || typeof r == "object" && n === "[object Date]" ? new r.constructor(+r) : typeof r == "number" || n === "[object Number]" || typeof r == "string" || n === "[object String]" ? new Date(r) : /* @__PURE__ */ new Date(NaN);
}
function w(r, n) {
  return r instanceof Date ? new r.constructor(n) : new Date(n);
}
function ne(r, n) {
  const e = c(r);
  return isNaN(n) ? w(r, NaN) : (n && e.setDate(e.getDate() + n), e);
}
function xe(r, n) {
  const e = c(r);
  if (isNaN(n)) return w(r, NaN);
  if (!n)
    return e;
  const t = e.getDate(), a = w(r, e.getTime());
  a.setMonth(e.getMonth() + n + 1, 0);
  const s = a.getDate();
  return t >= s ? a : (e.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    t
  ), e);
}
function re(r, n) {
  const e = +c(r);
  return w(r, e + n);
}
const Me = 6048e5, Ie = 864e5, $ = 6e4, j = 36e5, Ce = 1e3;
function er(r, n) {
  return re(r, n * j);
}
let Le = {};
function q() {
  return Le;
}
function E(r, n) {
  var u, d, h, D;
  const e = q(), t = (n == null ? void 0 : n.weekStartsOn) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? e.weekStartsOn ?? ((D = (h = e.locale) == null ? void 0 : h.options) == null ? void 0 : D.weekStartsOn) ?? 0, a = c(r), s = a.getDay(), i = (s < t ? 7 : 0) + s - t;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function C(r) {
  return E(r, { weekStartsOn: 1 });
}
function De(r) {
  const n = c(r), e = n.getFullYear(), t = w(r, 0);
  t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0);
  const a = C(t), s = w(r, 0);
  s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0);
  const i = C(s);
  return n.getTime() >= a.getTime() ? e + 1 : n.getTime() >= i.getTime() ? e : e - 1;
}
function he(r) {
  const n = c(r);
  return n.setHours(0, 0, 0, 0), n;
}
function U(r) {
  const n = c(r), e = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return e.setUTCFullYear(n.getFullYear()), +r - +e;
}
function Te(r, n) {
  const e = he(r), t = he(n), a = +e - U(e), s = +t - U(t);
  return Math.round((a - s) / Ie);
}
function Qe(r) {
  const n = De(r), e = w(r, 0);
  return e.setFullYear(n, 0, 4), e.setHours(0, 0, 0, 0), C(e);
}
function tr(r, n) {
  return re(r, n * $);
}
function nr(r, n) {
  const e = n * 3;
  return xe(r, e);
}
function rr(r, n) {
  return re(r, n * 1e3);
}
function ar(r, n) {
  const e = n * 7;
  return ne(r, e);
}
function sr(r, n) {
  return xe(r, n * 12);
}
function B(r, n) {
  const e = c(r), t = c(n), a = e.getTime() - t.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Re(r) {
  return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function Xe(r) {
  if (!Re(r) && typeof r != "number")
    return !1;
  const n = c(r);
  return !isNaN(Number(n));
}
function Ge(r, n) {
  const e = c(r), t = c(n), a = e.getFullYear() - t.getFullYear(), s = e.getMonth() - t.getMonth();
  return a * 12 + s;
}
function Ae(r, n) {
  const e = c(r), t = c(n);
  return e.getFullYear() - t.getFullYear();
}
function Be(r, n) {
  const e = c(r), t = c(n), a = me(e, t), s = Math.abs(Te(e, t));
  e.setDate(e.getDate() - a * s);
  const i = +(me(e, t) === -a), u = a * (s - i);
  return u === 0 ? 0 : u;
}
function me(r, n) {
  const e = r.getFullYear() - n.getFullYear() || r.getMonth() - n.getMonth() || r.getDate() - n.getDate() || r.getHours() - n.getHours() || r.getMinutes() - n.getMinutes() || r.getSeconds() - n.getSeconds() || r.getMilliseconds() - n.getMilliseconds();
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function V(r) {
  return (n) => {
    const t = (r ? Math[r] : Math.trunc)(n);
    return t === 0 ? 0 : t;
  };
}
function ae(r, n) {
  return +c(r) - +c(n);
}
function ir(r, n, e) {
  const t = ae(r, n) / j;
  return V(e == null ? void 0 : e.roundingMethod)(t);
}
function or(r, n, e) {
  const t = ae(r, n) / $;
  return V(e == null ? void 0 : e.roundingMethod)(t);
}
function $e(r) {
  const n = c(r);
  return n.setHours(23, 59, 59, 999), n;
}
function je(r) {
  const n = c(r), e = n.getMonth();
  return n.setFullYear(n.getFullYear(), e + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Ve(r) {
  const n = c(r);
  return +$e(n) == +je(n);
}
function ze(r, n) {
  const e = c(r), t = c(n), a = B(e, t), s = Math.abs(
    Ge(e, t)
  );
  let i;
  if (s < 1)
    i = 0;
  else {
    e.getMonth() === 1 && e.getDate() > 27 && e.setDate(30), e.setMonth(e.getMonth() - a * s);
    let u = B(e, t) === -a;
    Ve(c(r)) && s === 1 && B(r, t) === 1 && (u = !1), i = a * (s - Number(u));
  }
  return i === 0 ? 0 : i;
}
function ur(r, n, e) {
  const t = ze(r, n) / 3;
  return V(e == null ? void 0 : e.roundingMethod)(t);
}
function cr(r, n, e) {
  const t = ae(r, n) / 1e3;
  return V(e == null ? void 0 : e.roundingMethod)(t);
}
function dr(r, n, e) {
  const t = Be(r, n) / 7;
  return V(e == null ? void 0 : e.roundingMethod)(t);
}
function lr(r, n) {
  const e = c(r), t = c(n), a = B(e, t), s = Math.abs(Ae(e, t));
  e.setFullYear(1584), t.setFullYear(1584);
  const i = B(e, t) === -a, u = a * (s - +i);
  return u === 0 ? 0 : u;
}
function fr(r) {
  const n = c(r);
  return n.setSeconds(0, 0), n;
}
function hr(r) {
  const n = c(r), e = n.getMonth(), t = e - e % 3;
  return n.setMonth(t, 1), n.setHours(0, 0, 0, 0), n;
}
function mr(r) {
  const n = c(r);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function wr(r) {
  const n = c(r), e = n.getFullYear();
  return n.setFullYear(e + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Ue(r) {
  const n = c(r), e = w(r, 0);
  return e.setFullYear(n.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
function gr(r) {
  const n = c(r);
  return n.setMinutes(59, 59, 999), n;
}
function yr(r, n) {
  var u, d;
  const e = q(), t = e.weekStartsOn ?? ((d = (u = e.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = c(r), s = a.getDay(), i = (s < t ? -7 : 0) + 6 - (s - t);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
function br(r) {
  const n = c(r);
  return n.setSeconds(59, 999), n;
}
function xr(r) {
  const n = c(r), e = n.getMonth(), t = e - e % 3 + 3;
  return n.setMonth(t, 0), n.setHours(23, 59, 59, 999), n;
}
function Mr(r) {
  const n = c(r);
  return n.setMilliseconds(999), n;
}
const Ze = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Je = (r, n, e) => {
  let t;
  const a = Ze[r];
  return typeof a == "string" ? t = a : n === 1 ? t = a.one : t = a.other.replace("{{count}}", n.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + t : t + " ago" : t;
};
function K(r) {
  return (n = {}) => {
    const e = n.width ? String(n.width) : r.defaultWidth;
    return r.formats[e] || r.formats[r.defaultWidth];
  };
}
const Ke = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Se = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, et = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tt = {
  date: K({
    formats: Ke,
    defaultWidth: "full"
  }),
  time: K({
    formats: Se,
    defaultWidth: "full"
  }),
  dateTime: K({
    formats: et,
    defaultWidth: "full"
  })
}, nt = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rt = (r, n, e, t) => nt[r];
function X(r) {
  return (n, e) => {
    const t = e != null && e.context ? String(e.context) : "standalone";
    let a;
    if (t === "formatting" && r.formattingValues) {
      const i = r.defaultFormattingWidth || r.defaultWidth, u = e != null && e.width ? String(e.width) : i;
      a = r.formattingValues[u] || r.formattingValues[i];
    } else {
      const i = r.defaultWidth, u = e != null && e.width ? String(e.width) : r.defaultWidth;
      a = r.values[u] || r.values[i];
    }
    const s = r.argumentCallback ? r.argumentCallback(n) : n;
    return a[s];
  };
}
const at = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, st = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, it = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ot = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, ut = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ct = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, dt = (r, n) => {
  const e = Number(r), t = e % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, lt = {
  ordinalNumber: dt,
  era: X({
    values: at,
    defaultWidth: "wide"
  }),
  quarter: X({
    values: st,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: X({
    values: it,
    defaultWidth: "wide"
  }),
  day: X({
    values: ot,
    defaultWidth: "wide"
  }),
  dayPeriod: X({
    values: ut,
    defaultWidth: "wide",
    formattingValues: ct,
    defaultFormattingWidth: "wide"
  })
};
function G(r) {
  return (n, e = {}) => {
    const t = e.width, a = t && r.matchPatterns[t] || r.matchPatterns[r.defaultMatchWidth], s = n.match(a);
    if (!s)
      return null;
    const i = s[0], u = t && r.parsePatterns[t] || r.parsePatterns[r.defaultParseWidth], d = Array.isArray(u) ? ht(u, (k) => k.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      ft(u, (k) => k.test(i))
    );
    let h;
    h = r.valueCallback ? r.valueCallback(d) : d, h = e.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e.valueCallback(h)
    ) : h;
    const D = n.slice(i.length);
    return { value: h, rest: D };
  };
}
function ft(r, n) {
  for (const e in r)
    if (Object.prototype.hasOwnProperty.call(r, e) && n(r[e]))
      return e;
}
function ht(r, n) {
  for (let e = 0; e < r.length; e++)
    if (n(r[e]))
      return e;
}
function mt(r) {
  return (n, e = {}) => {
    const t = n.match(r.matchPattern);
    if (!t) return null;
    const a = t[0], s = n.match(r.parsePattern);
    if (!s) return null;
    let i = r.valueCallback ? r.valueCallback(s[0]) : s[0];
    i = e.valueCallback ? e.valueCallback(i) : i;
    const u = n.slice(a.length);
    return { value: i, rest: u };
  };
}
const wt = /^(\d+)(th|st|nd|rd)?/i, gt = /\d+/i, yt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, bt = {
  any: [/^b/i, /^(a|c)/i]
}, xt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Mt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Dt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Tt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, kt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Pt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ot = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Yt = {
  ordinalNumber: mt({
    matchPattern: wt,
    parsePattern: gt,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: G({
    matchPatterns: yt,
    defaultMatchWidth: "wide",
    parsePatterns: bt,
    defaultParseWidth: "any"
  }),
  quarter: G({
    matchPatterns: xt,
    defaultMatchWidth: "wide",
    parsePatterns: Mt,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: G({
    matchPatterns: Dt,
    defaultMatchWidth: "wide",
    parsePatterns: Tt,
    defaultParseWidth: "any"
  }),
  day: G({
    matchPatterns: kt,
    defaultMatchWidth: "wide",
    parsePatterns: pt,
    defaultParseWidth: "any"
  }),
  dayPeriod: G({
    matchPatterns: Pt,
    defaultMatchWidth: "any",
    parsePatterns: Ot,
    defaultParseWidth: "any"
  })
}, ke = {
  code: "en-US",
  formatDistance: Je,
  formatLong: tt,
  formatRelative: rt,
  localize: lt,
  match: Yt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Nt(r) {
  const n = c(r);
  return Te(n, Ue(n)) + 1;
}
function pe(r) {
  const n = c(r), e = +C(n) - +Qe(n);
  return Math.round(e / Me) + 1;
}
function se(r, n) {
  var D, k, O, P;
  const e = c(r), t = e.getFullYear(), a = q(), s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((k = (D = n == null ? void 0 : n.locale) == null ? void 0 : D.options) == null ? void 0 : k.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((P = (O = a.locale) == null ? void 0 : O.options) == null ? void 0 : P.firstWeekContainsDate) ?? 1, i = w(r, 0);
  i.setFullYear(t + 1, 0, s), i.setHours(0, 0, 0, 0);
  const u = E(i, n), d = w(r, 0);
  d.setFullYear(t, 0, s), d.setHours(0, 0, 0, 0);
  const h = E(d, n);
  return e.getTime() >= u.getTime() ? t + 1 : e.getTime() >= h.getTime() ? t : t - 1;
}
function _t(r, n) {
  var u, d, h, D;
  const e = q(), t = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((D = (h = e.locale) == null ? void 0 : h.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, a = se(r, n), s = w(r, 0);
  return s.setFullYear(a, 0, t), s.setHours(0, 0, 0, 0), E(s, n);
}
function Pe(r, n) {
  const e = c(r), t = +E(e, n) - +_t(e, n);
  return Math.round(t / Me) + 1;
}
function m(r, n) {
  const e = r < 0 ? "-" : "", t = Math.abs(r).toString().padStart(n, "0");
  return e + t;
}
const W = {
  // Year
  y(r, n) {
    const e = r.getFullYear(), t = e > 0 ? e : 1 - e;
    return m(n === "yy" ? t % 100 : t, n.length);
  },
  // Month
  M(r, n) {
    const e = r.getMonth();
    return n === "M" ? String(e + 1) : m(e + 1, 2);
  },
  // Day of the month
  d(r, n) {
    return m(r.getDate(), n.length);
  },
  // AM or PM
  a(r, n) {
    const e = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(r, n) {
    return m(r.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(r, n) {
    return m(r.getHours(), n.length);
  },
  // Minute
  m(r, n) {
    return m(r.getMinutes(), n.length);
  },
  // Second
  s(r, n) {
    return m(r.getSeconds(), n.length);
  },
  // Fraction of second
  S(r, n) {
    const e = n.length, t = r.getMilliseconds(), a = Math.trunc(
      t * Math.pow(10, e - 3)
    );
    return m(a, n.length);
  }
}, I = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, we = {
  // Era
  G: function(r, n, e) {
    const t = r.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return e.era(t, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return e.era(t, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return e.era(t, { width: "wide" });
    }
  },
  // Year
  y: function(r, n, e) {
    if (n === "yo") {
      const t = r.getFullYear(), a = t > 0 ? t : 1 - t;
      return e.ordinalNumber(a, { unit: "year" });
    }
    return W.y(r, n);
  },
  // Local week-numbering year
  Y: function(r, n, e, t) {
    const a = se(r, t), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      const i = s % 100;
      return m(i, 2);
    }
    return n === "Yo" ? e.ordinalNumber(s, { unit: "year" }) : m(s, n.length);
  },
  // ISO week-numbering year
  R: function(r, n) {
    const e = De(r);
    return m(e, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(r, n) {
    const e = r.getFullYear();
    return m(e, n.length);
  },
  // Quarter
  Q: function(r, n, e) {
    const t = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      // 1, 2, 3, 4
      case "Q":
        return String(t);
      // 01, 02, 03, 04
      case "QQ":
        return m(t, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return e.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return e.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(r, n, e) {
    const t = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      // 1, 2, 3, 4
      case "q":
        return String(t);
      // 01, 02, 03, 04
      case "qq":
        return m(t, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return e.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return e.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(r, n, e) {
    const t = r.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return W.M(r, n);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return e.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return e.month(t, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return e.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(r, n, e) {
    const t = r.getMonth();
    switch (n) {
      // 1, 2, ..., 12
      case "L":
        return String(t + 1);
      // 01, 02, ..., 12
      case "LL":
        return m(t + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return e.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return e.month(t, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return e.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(r, n, e, t) {
    const a = Pe(r, t);
    return n === "wo" ? e.ordinalNumber(a, { unit: "week" }) : m(a, n.length);
  },
  // ISO week of year
  I: function(r, n, e) {
    const t = pe(r);
    return n === "Io" ? e.ordinalNumber(t, { unit: "week" }) : m(t, n.length);
  },
  // Day of the month
  d: function(r, n, e) {
    return n === "do" ? e.ordinalNumber(r.getDate(), { unit: "date" }) : W.d(r, n);
  },
  // Day of year
  D: function(r, n, e) {
    const t = Nt(r);
    return n === "Do" ? e.ordinalNumber(t, { unit: "dayOfYear" }) : m(t, n.length);
  },
  // Day of week
  E: function(r, n, e) {
    const t = r.getDay();
    switch (n) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(r, n, e, t) {
    const a = r.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return m(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return e.ordinalNumber(s, { unit: "day" });
      case "eee":
        return e.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return e.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return e.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return e.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(r, n, e, t) {
    const a = r.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return m(s, n.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return e.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return e.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return e.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return e.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return e.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(r, n, e) {
    const t = r.getDay(), a = t === 0 ? 7 : t;
    switch (n) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return m(a, n.length);
      // 2nd
      case "io":
        return e.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(r, n, e) {
    const a = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(r, n, e) {
    const t = r.getHours();
    let a;
    switch (t === 12 ? a = I.noon : t === 0 ? a = I.midnight : a = t / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(r, n, e) {
    const t = r.getHours();
    let a;
    switch (t >= 17 ? a = I.evening : t >= 12 ? a = I.afternoon : t >= 4 ? a = I.morning : a = I.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(r, n, e) {
    if (n === "ho") {
      let t = r.getHours() % 12;
      return t === 0 && (t = 12), e.ordinalNumber(t, { unit: "hour" });
    }
    return W.h(r, n);
  },
  // Hour [0-23]
  H: function(r, n, e) {
    return n === "Ho" ? e.ordinalNumber(r.getHours(), { unit: "hour" }) : W.H(r, n);
  },
  // Hour [0-11]
  K: function(r, n, e) {
    const t = r.getHours() % 12;
    return n === "Ko" ? e.ordinalNumber(t, { unit: "hour" }) : m(t, n.length);
  },
  // Hour [1-24]
  k: function(r, n, e) {
    let t = r.getHours();
    return t === 0 && (t = 24), n === "ko" ? e.ordinalNumber(t, { unit: "hour" }) : m(t, n.length);
  },
  // Minute
  m: function(r, n, e) {
    return n === "mo" ? e.ordinalNumber(r.getMinutes(), { unit: "minute" }) : W.m(r, n);
  },
  // Second
  s: function(r, n, e) {
    return n === "so" ? e.ordinalNumber(r.getSeconds(), { unit: "second" }) : W.s(r, n);
  },
  // Fraction of second
  S: function(r, n) {
    return W.S(r, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, n, e) {
    const t = r.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (n) {
      // Hours and optional minutes
      case "X":
        return ye(t);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return H(t);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return H(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      // Hours and optional minutes
      case "x":
        return ye(t);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return H(t);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return H(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ge(t, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + H(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ge(t, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + H(t, ":");
    }
  },
  // Seconds timestamp
  t: function(r, n, e) {
    const t = Math.trunc(r.getTime() / 1e3);
    return m(t, n.length);
  },
  // Milliseconds timestamp
  T: function(r, n, e) {
    const t = r.getTime();
    return m(t, n.length);
  }
};
function ge(r, n = "") {
  const e = r > 0 ? "-" : "+", t = Math.abs(r), a = Math.trunc(t / 60), s = t % 60;
  return s === 0 ? e + String(a) : e + String(a) + n + m(s, 2);
}
function ye(r, n) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + m(Math.abs(r) / 60, 2) : H(r, n);
}
function H(r, n = "") {
  const e = r > 0 ? "-" : "+", t = Math.abs(r), a = m(Math.trunc(t / 60), 2), s = m(t % 60, 2);
  return e + a + n + s;
}
const be = (r, n) => {
  switch (r) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, Oe = (r, n) => {
  switch (r) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, vt = (r, n) => {
  const e = r.match(/(P+)(p+)?/) || [], t = e[1], a = e[2];
  if (!a)
    return be(r, n);
  let s;
  switch (t) {
    case "P":
      s = n.dateTime({ width: "short" });
      break;
    case "PP":
      s = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = n.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", be(t, n)).replace("{{time}}", Oe(a, n));
}, ee = {
  p: Oe,
  P: vt
}, Wt = /^D+$/, Et = /^Y+$/, Ht = ["D", "DD", "YY", "YYYY"];
function Ye(r) {
  return Wt.test(r);
}
function Ne(r) {
  return Et.test(r);
}
function te(r, n, e) {
  const t = qt(r, n, e);
  if (console.warn(t), Ht.includes(r)) throw new RangeError(t);
}
function qt(r, n, e) {
  const t = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${n}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ft = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, It = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ct = /^'([^]*?)'?$/, Lt = /''/g, Qt = /[a-zA-Z]/;
function Dr(r, n, e) {
  var D, k, O, P, v, L, Q, R;
  const t = q(), a = (e == null ? void 0 : e.locale) ?? t.locale ?? ke, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((k = (D = e == null ? void 0 : e.locale) == null ? void 0 : D.options) == null ? void 0 : k.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((P = (O = t.locale) == null ? void 0 : O.options) == null ? void 0 : P.firstWeekContainsDate) ?? 1, i = (e == null ? void 0 : e.weekStartsOn) ?? ((L = (v = e == null ? void 0 : e.locale) == null ? void 0 : v.options) == null ? void 0 : L.weekStartsOn) ?? t.weekStartsOn ?? ((R = (Q = t.locale) == null ? void 0 : Q.options) == null ? void 0 : R.weekStartsOn) ?? 0, u = c(r);
  if (!Xe(u))
    throw new RangeError("Invalid time value");
  let d = n.match(It).map((p) => {
    const T = p[0];
    if (T === "p" || T === "P") {
      const F = ee[T];
      return F(p, a.formatLong);
    }
    return p;
  }).join("").match(Ft).map((p) => {
    if (p === "''")
      return { isToken: !1, value: "'" };
    const T = p[0];
    if (T === "'")
      return { isToken: !1, value: Rt(p) };
    if (we[T])
      return { isToken: !0, value: p };
    if (T.match(Qt))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + T + "`"
      );
    return { isToken: !1, value: p };
  });
  a.localize.preprocessor && (d = a.localize.preprocessor(u, d));
  const h = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: a
  };
  return d.map((p) => {
    if (!p.isToken) return p.value;
    const T = p.value;
    (!(e != null && e.useAdditionalWeekYearTokens) && Ne(T) || !(e != null && e.useAdditionalDayOfYearTokens) && Ye(T)) && te(T, n, String(r));
    const F = we[T[0]];
    return F(u, T, a.localize, h);
  }).join("");
}
function Rt(r) {
  const n = r.match(Ct);
  return n ? n[1].replace(Lt, "'") : r;
}
function Xt() {
  return Object.assign({}, q());
}
function Gt(r) {
  let e = c(r).getDay();
  return e === 0 && (e = 7), e;
}
function At(r, n) {
  const e = n instanceof Date ? w(n, 0) : new n(0);
  return e.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    r.getDate()
  ), e.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), e;
}
const Bt = 10;
class _e {
  constructor() {
    o(this, "subPriority", 0);
  }
  validate(n, e) {
    return !0;
  }
}
class $t extends _e {
  constructor(n, e, t, a, s) {
    super(), this.value = n, this.validateValue = e, this.setValue = t, this.priority = a, s && (this.subPriority = s);
  }
  validate(n, e) {
    return this.validateValue(n, this.value, e);
  }
  set(n, e, t) {
    return this.setValue(n, e, this.value, t);
  }
}
class jt extends _e {
  constructor() {
    super(...arguments);
    o(this, "priority", Bt);
    o(this, "subPriority", -1);
  }
  set(e, t) {
    return t.timestampIsSet ? e : w(e, At(e, Date));
  }
}
class f {
  run(n, e, t, a) {
    const s = this.parse(n, e, t, a);
    return s ? {
      setter: new $t(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(n, e, t) {
    return !0;
  }
}
class Vt extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 140);
    o(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
      // A, B
      case "GGGGG":
        return a.era(e, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return a.era(e, { width: "wide" }) || a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
    }
  }
  set(e, t, a) {
    return t.era = a, e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const x = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, N = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function M(r, n) {
  return r && {
    value: n(r.value),
    rest: r.rest
  };
}
function g(r, n) {
  const e = n.match(r);
  return e ? {
    value: parseInt(e[0], 10),
    rest: n.slice(e[0].length)
  } : null;
}
function _(r, n) {
  const e = n.match(r);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const t = e[1] === "+" ? 1 : -1, a = e[2] ? parseInt(e[2], 10) : 0, s = e[3] ? parseInt(e[3], 10) : 0, i = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: t * (a * j + s * $ + i * Ce),
    rest: n.slice(e[0].length)
  };
}
function ve(r) {
  return g(x.anyDigitsSigned, r);
}
function b(r, n) {
  switch (r) {
    case 1:
      return g(x.singleDigit, n);
    case 2:
      return g(x.twoDigits, n);
    case 3:
      return g(x.threeDigits, n);
    case 4:
      return g(x.fourDigits, n);
    default:
      return g(new RegExp("^\\d{1," + r + "}"), n);
  }
}
function Z(r, n) {
  switch (r) {
    case 1:
      return g(x.singleDigitSigned, n);
    case 2:
      return g(x.twoDigitsSigned, n);
    case 3:
      return g(x.threeDigitsSigned, n);
    case 4:
      return g(x.fourDigitsSigned, n);
    default:
      return g(new RegExp("^-?\\d{1," + r + "}"), n);
  }
}
function ie(r) {
  switch (r) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function We(r, n) {
  const e = n > 0, t = e ? n : 1 - n;
  let a;
  if (t <= 50)
    a = r || 100;
  else {
    const s = t + 50, i = Math.trunc(s / 100) * 100, u = r >= s % 100;
    a = r + i - (u ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function Ee(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class zt extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: t === "yy"
    });
    switch (t) {
      case "y":
        return M(b(4, e), s);
      case "yo":
        return M(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return M(b(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a) {
    const s = e.getFullYear();
    if (a.isTwoDigitYear) {
      const u = We(
        a.year,
        s
      );
      return e.setFullYear(u, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const i = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Ut extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: t === "YY"
    });
    switch (t) {
      case "Y":
        return M(b(4, e), s);
      case "Yo":
        return M(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return M(b(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a, s) {
    const i = se(e, s);
    if (a.isTwoDigitYear) {
      const d = We(
        a.year,
        i
      );
      return e.setFullYear(
        d,
        0,
        s.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), E(e, s);
    }
    const u = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(u, 0, s.firstWeekContainsDate), e.setHours(0, 0, 0, 0), E(e, s);
  }
}
class Zt extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t) {
    return Z(t === "R" ? 4 : t.length, e);
  }
  set(e, t, a) {
    const s = w(e, 0);
    return s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), C(s);
  }
}
class Jt extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t) {
    return Z(t === "u" ? 4 : t.length, e);
  }
  set(e, t, a) {
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Kt extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return b(t.length, e);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class St extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return b(t.length, e);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class en extends f {
  constructor() {
    super(...arguments);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    o(this, "priority", 110);
  }
  parse(e, t, a) {
    const s = (i) => i - 1;
    switch (t) {
      // 1, 2, ..., 12
      case "M":
        return M(
          g(x.month, e),
          s
        );
      // 01, 02, ..., 12
      case "MM":
        return M(b(2, e), s);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return M(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return a.month(e, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return a.month(e, { width: "wide", context: "formatting" }) || a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class tn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 110);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => i - 1;
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return M(
          g(x.month, e),
          s
        );
      // 01, 02, ..., 12
      case "LL":
        return M(b(2, e), s);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return M(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return a.month(e, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return a.month(e, { width: "wide", context: "standalone" }) || a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function nn(r, n, e) {
  const t = c(r), a = Pe(t, e) - n;
  return t.setDate(t.getDate() - a * 7), t;
}
class rn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "w":
        return g(x.week, e);
      case "wo":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a, s) {
    return E(nn(e, a, s), s);
  }
}
function an(r, n) {
  const e = c(r), t = pe(e) - n;
  return e.setDate(e.getDate() - t * 7), e;
}
class sn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "I":
        return g(x.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a) {
    return C(an(e, a));
  }
}
const on = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], un = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class cn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subPriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "d":
        return g(x.date, e);
      case "do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear(), s = Ee(a), i = e.getMonth();
    return s ? t >= 1 && t <= un[i] : t >= 1 && t <= on[i];
  }
  set(e, t, a) {
    return e.setDate(a), e.setHours(0, 0, 0, 0), e;
  }
}
class dn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subpriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "D":
      case "DD":
        return g(x.dayOfYear, e);
      case "Do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear();
    return Ee(a) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(e, t, a) {
    return e.setMonth(0, a), e.setHours(0, 0, 0, 0), e;
  }
}
function oe(r, n, e) {
  var k, O, P, v;
  const t = q(), a = (e == null ? void 0 : e.weekStartsOn) ?? ((O = (k = e == null ? void 0 : e.locale) == null ? void 0 : k.options) == null ? void 0 : O.weekStartsOn) ?? t.weekStartsOn ?? ((v = (P = t.locale) == null ? void 0 : P.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = c(r), i = s.getDay(), d = (n % 7 + 7) % 7, h = 7 - a, D = n < 0 || n > 6 ? n - (i + h) % 7 : (d + h) % 7 - (i + h) % 7;
  return ne(s, D);
}
class ln extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = oe(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class fn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const i = (u) => {
      const d = Math.floor((u - 1) / 7) * 7;
      return (u + s.weekStartsOn + 6) % 7 + d;
    };
    switch (t) {
      // 3
      case "e":
      case "ee":
        return M(b(t.length, e), i);
      // 3rd
      case "eo":
        return M(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      // Tue
      case "eee":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = oe(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class hn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const i = (u) => {
      const d = Math.floor((u - 1) / 7) * 7;
      return (u + s.weekStartsOn + 6) % 7 + d;
    };
    switch (t) {
      // 3
      case "c":
      case "cc":
        return M(b(t.length, e), i);
      // 3rd
      case "co":
        return M(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      // Tue
      case "ccc":
        return a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return a.day(e, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return a.day(e, { width: "wide", context: "standalone" }) || a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = oe(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
function mn(r, n) {
  const e = c(r), t = Gt(e), a = n - t;
  return ne(e, a);
}
class wn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => i === 0 ? 7 : i;
    switch (t) {
      // 2
      case "i":
      case "ii":
        return b(t.length, e);
      // 2nd
      case "io":
        return a.ordinalNumber(e, { unit: "day" });
      // Tue
      case "iii":
        return M(
          a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      // T
      case "iiiii":
        return M(
          a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      // Tu
      case "iiiiii":
        return M(
          a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      // Tuesday
      case "iiii":
      default:
        return M(
          a.day(e, {
            width: "wide",
            context: "formatting"
          }) || a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, a) {
    return e = mn(e, a), e.setHours(0, 0, 0, 0), e;
  }
}
class gn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(ie(a), 0, 0, 0), e;
  }
}
class yn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(ie(a), 0, 0, 0), e;
  }
}
class bn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(ie(a), 0, 0, 0), e;
  }
}
class xn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "h":
        return g(x.hour12h, e);
      case "ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, a) {
    const s = e.getHours() >= 12;
    return s && a < 12 ? e.setHours(a + 12, 0, 0, 0) : !s && a === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class Mn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "H":
        return g(x.hour23h, e);
      case "Ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, a) {
    return e.setHours(a, 0, 0, 0), e;
  }
}
class Dn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "K":
        return g(x.hour11h, e);
      case "Ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class Tn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "k":
        return g(x.hour24h, e);
      case "ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, a) {
    const s = a <= 24 ? a % 24 : a;
    return e.setHours(s, 0, 0, 0), e;
  }
}
class kn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 60);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "m":
        return g(x.minute, e);
      case "mo":
        return a.ordinalNumber(e, { unit: "minute" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setMinutes(a, 0, 0), e;
  }
}
class pn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 50);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "s":
        return g(x.second, e);
      case "so":
        return a.ordinalNumber(e, { unit: "second" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setSeconds(a, 0), e;
  }
}
class Pn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 30);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t) {
    const a = (s) => Math.trunc(s * Math.pow(10, -t.length + 3));
    return M(b(t.length, e), a);
  }
  set(e, t, a) {
    return e.setMilliseconds(a), e;
  }
}
class On extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, t) {
    switch (t) {
      case "X":
        return _(
          N.basicOptionalMinutes,
          e
        );
      case "XX":
        return _(N.basic, e);
      case "XXXX":
        return _(
          N.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return _(
          N.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return _(N.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : w(
      e,
      e.getTime() - U(e) - a
    );
  }
}
class Yn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, t) {
    switch (t) {
      case "x":
        return _(
          N.basicOptionalMinutes,
          e
        );
      case "xx":
        return _(N.basic, e);
      case "xxxx":
        return _(
          N.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return _(
          N.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return _(N.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : w(
      e,
      e.getTime() - U(e) - a
    );
  }
}
class Nn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 40);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return ve(e);
  }
  set(e, t, a) {
    return [w(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class _n extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 20);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return ve(e);
  }
  set(e, t, a) {
    return [w(e, a), { timestampIsSet: !0 }];
  }
}
const vn = {
  G: new Vt(),
  y: new zt(),
  Y: new Ut(),
  R: new Zt(),
  u: new Jt(),
  Q: new Kt(),
  q: new St(),
  M: new en(),
  L: new tn(),
  w: new rn(),
  I: new sn(),
  d: new cn(),
  D: new dn(),
  E: new ln(),
  e: new fn(),
  c: new hn(),
  i: new wn(),
  a: new gn(),
  b: new yn(),
  B: new bn(),
  h: new xn(),
  H: new Mn(),
  K: new Dn(),
  k: new Tn(),
  m: new kn(),
  s: new pn(),
  S: new Pn(),
  X: new On(),
  x: new Yn(),
  t: new Nn(),
  T: new _n()
}, Wn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, En = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Hn = /^'([^]*?)'?$/, qn = /''/g, Fn = /\S/, In = /[a-zA-Z]/;
function Tr(r, n, e, t) {
  var L, Q, R, p, T, F, ue, ce;
  const a = Xt(), s = (t == null ? void 0 : t.locale) ?? a.locale ?? ke, i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((Q = (L = t == null ? void 0 : t.locale) == null ? void 0 : L.options) == null ? void 0 : Q.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((p = (R = a.locale) == null ? void 0 : R.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, u = (t == null ? void 0 : t.weekStartsOn) ?? ((F = (T = t == null ? void 0 : t.locale) == null ? void 0 : T.options) == null ? void 0 : F.weekStartsOn) ?? a.weekStartsOn ?? ((ce = (ue = a.locale) == null ? void 0 : ue.options) == null ? void 0 : ce.weekStartsOn) ?? 0;
  if (n === "")
    return r === "" ? c(e) : w(e, NaN);
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: u,
    locale: s
  }, h = [new jt()], D = n.match(En).map((l) => {
    const y = l[0];
    if (y in ee) {
      const Y = ee[y];
      return Y(l, s.formatLong);
    }
    return l;
  }).join("").match(Wn), k = [];
  for (let l of D) {
    !(t != null && t.useAdditionalWeekYearTokens) && Ne(l) && te(l, n, r), !(t != null && t.useAdditionalDayOfYearTokens) && Ye(l) && te(l, n, r);
    const y = l[0], Y = vn[y];
    if (Y) {
      const { incompatibleTokens: de } = Y;
      if (Array.isArray(de)) {
        const le = k.find(
          (fe) => de.includes(fe.token) || fe.token === y
        );
        if (le)
          throw new RangeError(
            `The format string mustn't contain \`${le.fullToken}\` and \`${l}\` at the same time`
          );
      } else if (Y.incompatibleTokens === "*" && k.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${l}\` and any other token at the same time`
        );
      k.push({ token: y, fullToken: l });
      const J = Y.run(
        r,
        l,
        s.match,
        d
      );
      if (!J)
        return w(e, NaN);
      h.push(J.setter), r = J.rest;
    } else {
      if (y.match(In))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + y + "`"
        );
      if (l === "''" ? l = "'" : y === "'" && (l = Cn(l)), r.indexOf(l) === 0)
        r = r.slice(l.length);
      else
        return w(e, NaN);
    }
  }
  if (r.length > 0 && Fn.test(r))
    return w(e, NaN);
  const O = h.map((l) => l.priority).sort((l, y) => y - l).filter((l, y, Y) => Y.indexOf(l) === y).map(
    (l) => h.filter((y) => y.priority === l).sort((y, Y) => Y.subPriority - y.subPriority)
  ).map((l) => l[0]);
  let P = c(e);
  if (isNaN(P.getTime()))
    return w(e, NaN);
  const v = {};
  for (const l of O) {
    if (!l.validate(P, d))
      return w(e, NaN);
    const y = l.set(P, v, d);
    Array.isArray(y) ? (P = y[0], Object.assign(v, y[1])) : P = y;
  }
  return w(e, P);
}
function Cn(r) {
  return r.match(Hn)[1].replace(qn, "'");
}
function kr(r) {
  const n = c(r);
  return n.setMinutes(0, 0, 0), n;
}
function pr(r) {
  const n = c(r);
  return n.setMilliseconds(0), n;
}
function Pr(r, n) {
  const e = (n == null ? void 0 : n.additionalDigits) ?? 2, t = Xn(r);
  let a;
  if (t.date) {
    const d = Gn(t.date, e);
    a = An(d.restDateString, d.year);
  }
  if (!a || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const s = a.getTime();
  let i = 0, u;
  if (t.time && (i = Bn(t.time), isNaN(i)))
    return /* @__PURE__ */ new Date(NaN);
  if (t.timezone) {
    if (u = $n(t.timezone), isNaN(u))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const d = new Date(s + i), h = /* @__PURE__ */ new Date(0);
    return h.setFullYear(
      d.getUTCFullYear(),
      d.getUTCMonth(),
      d.getUTCDate()
    ), h.setHours(
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds(),
      d.getUTCMilliseconds()
    ), h;
  }
  return new Date(s + i + u);
}
const z = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Ln = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Qn = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Rn = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Xn(r) {
  const n = {}, e = r.split(z.dateTimeDelimiter);
  let t;
  if (e.length > 2)
    return n;
  if (/:/.test(e[0]) ? t = e[0] : (n.date = e[0], t = e[1], z.timeZoneDelimiter.test(n.date) && (n.date = r.split(z.timeZoneDelimiter)[0], t = r.substr(
    n.date.length,
    r.length
  ))), t) {
    const a = z.timezone.exec(t);
    a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t;
  }
  return n;
}
function Gn(r, n) {
  const e = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"
  ), t = r.match(e);
  if (!t) return { year: NaN, restDateString: "" };
  const a = t[1] ? parseInt(t[1]) : null, s = t[2] ? parseInt(t[2]) : null;
  return {
    year: s === null ? a : s * 100,
    restDateString: r.slice((t[1] || t[2]).length)
  };
}
function An(r, n) {
  if (n === null) return /* @__PURE__ */ new Date(NaN);
  const e = r.match(Ln);
  if (!e) return /* @__PURE__ */ new Date(NaN);
  const t = !!e[4], a = A(e[1]), s = A(e[2]) - 1, i = A(e[3]), u = A(e[4]), d = A(e[5]) - 1;
  if (t)
    return Zn(n, u, d) ? jn(n, u, d) : /* @__PURE__ */ new Date(NaN);
  {
    const h = /* @__PURE__ */ new Date(0);
    return !zn(n, s, i) || !Un(n, a) ? /* @__PURE__ */ new Date(NaN) : (h.setUTCFullYear(n, s, Math.max(a, i)), h);
  }
}
function A(r) {
  return r ? parseInt(r) : 1;
}
function Bn(r) {
  const n = r.match(Qn);
  if (!n) return NaN;
  const e = S(n[1]), t = S(n[2]), a = S(n[3]);
  return Jn(e, t, a) ? e * j + t * $ + a * 1e3 : NaN;
}
function S(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function $n(r) {
  if (r === "Z") return 0;
  const n = r.match(Rn);
  if (!n) return 0;
  const e = n[1] === "+" ? -1 : 1, t = parseInt(n[2]), a = n[3] && parseInt(n[3]) || 0;
  return Kn(t, a) ? e * (t * j + a * $) : NaN;
}
function jn(r, n, e) {
  const t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(r, 0, 4);
  const a = t.getUTCDay() || 7, s = (n - 1) * 7 + e + 1 - a;
  return t.setUTCDate(t.getUTCDate() + s), t;
}
const Vn = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function He(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function zn(r, n, e) {
  return n >= 0 && n <= 11 && e >= 1 && e <= (Vn[n] || (He(r) ? 29 : 28));
}
function Un(r, n) {
  return n >= 1 && n <= (He(r) ? 366 : 365);
}
function Zn(r, n, e) {
  return n >= 1 && n <= 53 && e >= 0 && e <= 6;
}
function Jn(r, n, e) {
  return r === 24 ? n === 0 && e === 0 : e >= 0 && e < 60 && n >= 0 && n < 60 && r >= 0 && r < 25;
}
function Kn(r, n) {
  return n >= 0 && n <= 59;
}
export {
  nr as A,
  xe as B,
  ar as C,
  ne as D,
  er as E,
  tr as F,
  rr as G,
  re as H,
  Dr as I,
  c as J,
  Tr as K,
  Pr as L,
  Xe as M,
  xr as a,
  je as b,
  yr as c,
  $e as d,
  wr as e,
  gr as f,
  br as g,
  Mr as h,
  hr as i,
  mr as j,
  E as k,
  he as l,
  kr as m,
  fr as n,
  pr as o,
  lr as p,
  ur as q,
  ze as r,
  Ue as s,
  dr as t,
  Be as u,
  ir as v,
  or as w,
  cr as x,
  ae as y,
  sr as z
};
