"use strict";
(self.webpackChunkapp_dogeverse = self.webpackChunkapp_dogeverse || []).push([
    [592], {
        82016: p => {
            var l, a = "object" == typeof Reflect ? Reflect : null,
                h = a && "function" == typeof a.apply ? a.apply : function(e, n, r) {
                    return Function.prototype.apply.call(e, n, r)
                };
            l = a && "function" == typeof a.ownKeys ? a.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var d = Number.isNaN || function(e) {
                return e != e
            };

            function o() {
                o.init.call(this)
            }
            p.exports = o, p.exports.once = function N(t, e) {
                return new Promise(function(n, r) {
                    function i(s) {
                        t.removeListener(e, f), r(s)
                    }

                    function f() {
                        "function" == typeof t.removeListener && t.removeListener("error", i), n([].slice.call(arguments))
                    }
                    E(t, e, f, {
                        once: !0
                    }), "error" !== e && function M(t, e, n) {
                        "function" == typeof t.on && E(t, "error", e, n)
                    }(t, i, {
                        once: !0
                    })
                })
            }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
            var L = 10;

            function v(t) {
                if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }

            function m(t) {
                return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners
            }

            function y(t, e, n, r) {
                var i, f, s;
                if (v(n), void 0 === (f = t._events) ? (f = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== f.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), s = f[e]), void 0 === s) s = f[e] = n, ++t._eventsCount;
                else if ("function" == typeof s ? s = f[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (i = m(t)) > 0 && s.length > i && !s.warned) {
                    s.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = s.length,
                        function x(t) {
                            console && console.warn && console.warn(t)
                        }(u)
                }
                return t
            }

            function C() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function g(t, e, n) {
                var r = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: n
                    },
                    i = C.bind(r);
                return i.listener = n, r.wrapFn = i, i
            }

            function _(t, e, n) {
                var r = t._events;
                if (void 0 === r) return [];
                var i = r[e];
                return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function R(t) {
                    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                    return e
                }(i) : b(i, i.length)
            }

            function w(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var n = e[t];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function b(t, e) {
                for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
                return n
            }

            function E(t, e, n, r) {
                if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
                else {
                    if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                    t.addEventListener(e, function i(f) {
                        r.once && t.removeEventListener(e, i), n(f)
                    })
                }
            }
            Object.defineProperty(o, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return L
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || d(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    L = t
                }
            }), o.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, o.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || d(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, o.prototype.getMaxListeners = function() {
                return m(this)
            }, o.prototype.emit = function(e) {
                for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
                var i = "error" === e,
                    f = this._events;
                if (void 0 !== f) i = i && void 0 === f.error;
                else if (!i) return !1;
                if (i) {
                    var s;
                    if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
                    var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw u.context = s, u
                }
                var c = f[e];
                if (void 0 === c) return !1;
                if ("function" == typeof c) h(c, this, n);
                else {
                    var O = c.length,
                        A = b(c, O);
                    for (r = 0; r < O; ++r) h(A[r], this, n)
                }
                return !0
            }, o.prototype.on = o.prototype.addListener = function(e, n) {
                return y(this, e, n, !1)
            }, o.prototype.prependListener = function(e, n) {
                return y(this, e, n, !0)
            }, o.prototype.once = function(e, n) {
                return v(n), this.on(e, g(this, e, n)), this
            }, o.prototype.prependOnceListener = function(e, n) {
                return v(n), this.prependListener(e, g(this, e, n)), this
            }, o.prototype.off = o.prototype.removeListener = function(e, n) {
                var r, i, f, s, u;
                if (v(n), void 0 === (i = this._events)) return this;
                if (void 0 === (r = i[e])) return this;
                if (r === n || r.listener === n) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || n));
                else if ("function" != typeof r) {
                    for (f = -1, s = r.length - 1; s >= 0; s--)
                        if (r[s] === n || r[s].listener === n) {
                            u = r[s].listener, f = s;
                            break
                        }
                    if (f < 0) return this;
                    0 === f ? r.shift() : function j(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }(r, f), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, u || n)
                }
                return this
            }, o.prototype.removeAllListeners = function(e) {
                var n, r, i;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                if (0 === arguments.length) {
                    var s, f = Object.keys(r);
                    for (i = 0; i < f.length; ++i) "removeListener" !== (s = f[i]) && this.removeAllListeners(s);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(n = r[e])) this.removeListener(e, n);
                else if (void 0 !== n)
                    for (i = n.length - 1; i >= 0; i--) this.removeListener(e, n[i]);
                return this
            }, o.prototype.listeners = function(e) {
                return _(this, e, !0)
            }, o.prototype.rawListeners = function(e) {
                return _(this, e, !1)
            }, o.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : w.call(t, e)
            }, o.prototype.listenerCount = w, o.prototype.eventNames = function() {
                return this._eventsCount > 0 ? l(this._events) : []
            }
        }
    }
]);