import { d as g } from "./deepmerge-D6v28eTa.js";
let c;
c = class {
  get length() {
    return Object.keys(this).length;
  }
  key(i) {
    return Object.keys(this)[i];
  }
  setItem(i, e) {
    this[i] = e.toString();
  }
  getItem(i) {
    return this[i];
  }
  removeItem(i) {
    delete this[i];
  }
  clear() {
    for (let i of Object.keys(this))
      delete this[i];
  }
};
class o {
  constructor() {
    this._queue = [], this._flushing = !1;
  }
  enqueue(e) {
    return this._queue.push(e), this._flushing ? Promise.resolve() : this.flushQueue();
  }
  flushQueue() {
    this._flushing = !0;
    const e = () => {
      const a = this._queue.shift();
      if (a)
        return a.then(e);
      this._flushing = !1;
    };
    return Promise.resolve(e());
  }
}
const f = {
  replaceArrays: {
    arrayMerge: (i, e, a) => e
  },
  concatArrays: {
    arrayMerge: (i, e, a) => i.concat(...e)
  }
};
function u(i, e, a) {
  return g(i, e, f[a]);
}
let l = JSON;
class m {
  /**
   * Create a {@link VuexPersistence} object.
   * Use the <code>plugin</code> function of this class as a
   * Vuex plugin.
   * @param {PersistOptions} options
   */
  constructor(e) {
    this._mutex = new o(), this.subscriber = (t) => (r) => t.subscribe(r), typeof e > "u" && (e = {}), this.key = e.key != null ? e.key : "vuex", this.subscribed = !1, this.supportCircular = e.supportCircular || !1, this.supportCircular && (l = require("flatted")), this.mergeOption = e.mergeOption || "replaceArrays";
    let a = !0;
    try {
      window.localStorage.getItem("");
    } catch {
      a = !1;
    }
    if (e.storage)
      this.storage = e.storage;
    else if (a)
      this.storage = window.localStorage;
    else if (c)
      this.storage = new c();
    else
      throw new Error("Neither 'window' is defined, nor 'MockStorage' is available");
    this.reducer = e.reducer != null ? e.reducer : e.modules == null ? ((t) => t) : ((t) => e.modules.reduce((r, s) => u(r, { [s]: t[s] }, this.mergeOption), {
      /* start empty accumulator*/
    })), this.filter = e.filter || ((t) => !0), this.strictMode = e.strictMode || !1, this.RESTORE_MUTATION = function(r, s) {
      const h = u(r, s || {}, this.mergeOption);
      for (const n of Object.keys(h))
        this._vm.$set(r, n, h[n]);
    }, this.asyncStorage = e.asyncStorage || !1, this.asyncStorage ? (this.restoreState = e.restoreState != null ? e.restoreState : ((t, r) => r.getItem(t).then((s) => typeof s == "string" ? this.supportCircular ? l.parse(s || "{}") : JSON.parse(s || "{}") : s || {})), this.saveState = e.saveState != null ? e.saveState : ((t, r, s) => s.setItem(
      t,
      // Second argument is state _object_ if asyc storage, stringified otherwise
      // do not stringify the state if the storage type is async
      this.asyncStorage ? u({}, r || {}, this.mergeOption) : this.supportCircular ? l.stringify(r) : JSON.stringify(r)
    )), this.plugin = (t) => {
      t.restored = this.restoreState(this.key, this.storage).then((r) => {
        this.strictMode ? t.commit("RESTORE_MUTATION", r) : t.replaceState(u(t.state, r || {}, this.mergeOption)), this.subscriber(t)((s, h) => {
          this.filter(s) && this._mutex.enqueue(this.saveState(this.key, this.reducer(h), this.storage));
        }), this.subscribed = !0;
      });
    }) : (this.restoreState = e.restoreState != null ? e.restoreState : ((t, r) => {
      const s = r.getItem(t);
      return typeof s == "string" ? this.supportCircular ? l.parse(s || "{}") : JSON.parse(s || "{}") : s || {};
    }), this.saveState = e.saveState != null ? e.saveState : ((t, r, s) => s.setItem(
      t,
      // Second argument is state _object_ if localforage, stringified otherwise
      this.supportCircular ? l.stringify(r) : JSON.stringify(r)
    )), this.plugin = (t) => {
      const r = this.restoreState(this.key, this.storage);
      this.strictMode ? t.commit("RESTORE_MUTATION", r) : t.replaceState(u(t.state, r || {}, this.mergeOption)), this.subscriber(t)((s, h) => {
        this.filter(s) && this.saveState(this.key, this.reducer(h), this.storage);
      }), this.subscribed = !0;
    });
  }
}
export {
  m as V
};
