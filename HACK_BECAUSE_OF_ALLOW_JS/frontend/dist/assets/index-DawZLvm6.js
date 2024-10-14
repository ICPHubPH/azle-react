"use strict";
function d_(e, t) { for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r)
            if (o !== "default" && !(o in e)) {
                const i = Object.getOwnPropertyDescriptor(r, o);
                i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
            }
    }
} return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })); }
(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    r(o); new MutationObserver(o => { for (const i of o)
    if (i.type === "childList")
        for (const a of i.addedNodes)
            a.tagName === "LINK" && a.rel === "modulepreload" && r(a); }).observe(document, { childList: !0, subtree: !0 }); function n(o) { const i = {}; return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i; } function r(o) { if (o.ep)
    return; o.ep = !0; const i = n(o); fetch(o.href, i); } })();
var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nd(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var og = { exports: {} }, Wl = {}, ig = { exports: {} }, ke = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La = Symbol.for("react.element"), h_ = Symbol.for("react.portal"), p_ = Symbol.for("react.fragment"), m_ = Symbol.for("react.strict_mode"), v_ = Symbol.for("react.profiler"), g_ = Symbol.for("react.provider"), y_ = Symbol.for("react.context"), x_ = Symbol.for("react.forward_ref"), w_ = Symbol.for("react.suspense"), b_ = Symbol.for("react.memo"), __ = Symbol.for("react.lazy"), Sp = Symbol.iterator;
function E_(e) { return e === null || typeof e != "object" ? null : (e = Sp && e[Sp] || e["@@iterator"], typeof e == "function" ? e : null); }
var ag = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, sg = Object.assign, lg = {};
function ci(e, t, n) { this.props = e, this.context = t, this.refs = lg, this.updater = n || ag; }
ci.prototype.isReactComponent = {};
ci.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
ci.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function ug() { }
ug.prototype = ci.prototype;
function Cd(e, t, n) { this.props = e, this.context = t, this.refs = lg, this.updater = n || ag; }
var Od = Cd.prototype = new ug;
Od.constructor = Cd;
sg(Od, ci.prototype);
Od.isPureReactComponent = !0;
var kp = Array.isArray, cg = Object.prototype.hasOwnProperty, Td = { current: null }, fg = { key: !0, ref: !0, __self: !0, __source: !0 };
function dg(e, t, n) { var r, o = {}, i = null, a = null; if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
        cg.call(t, r) && !fg.hasOwnProperty(r) && (o[r] = t[r]); var s = arguments.length - 2; if (s === 1)
    o.children = n;
else if (1 < s) {
    for (var l = Array(s), f = 0; f < s; f++)
        l[f] = arguments[f + 2];
    o.children = l;
} if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
        o[r] === void 0 && (o[r] = s[r]); return { $$typeof: La, type: e, key: i, ref: a, props: o, _owner: Td.current }; }
function S_(e, t) { return { $$typeof: La, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function Ad(e) { return typeof e == "object" && e !== null && e.$$typeof === La; }
function k_(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var Np = /\/+/g;
function nc(e, t) { return typeof e == "object" && e !== null && e.key != null ? k_("" + e.key) : t.toString(36); }
function ws(e, t, n, r, o) { var i = typeof e; (i === "undefined" || i === "boolean") && (e = null); var a = !1; if (e === null)
    a = !0;
else
    switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object": switch (e.$$typeof) {
            case La:
            case h_: a = !0;
        }
    } if (a)
    return a = e, o = o(a), e = r === "" ? "." + nc(a, 0) : r, kp(o) ? (n = "", e != null && (n = e.replace(Np, "$&/") + "/"), ws(o, t, n, "", function (f) { return f; })) : o != null && (Ad(o) && (o = S_(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Np, "$&/") + "/") + e)), t.push(o)), 1; if (a = 0, r = r === "" ? "." : r + ":", kp(e))
    for (var s = 0; s < e.length; s++) {
        i = e[s];
        var l = r + nc(i, s);
        a += ws(i, t, n, l, o);
    }
else if (l = E_(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done;)
        i = i.value, l = r + nc(i, s++), a += ws(i, t, n, l, o);
else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return a; }
function Ga(e, t, n) { if (e == null)
    return e; var r = [], o = 0; return ws(e, r, "", "", function (i) { return t.call(n, i, o++); }), r; }
function N_(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var xt = { current: null }, bs = { transition: null }, C_ = { ReactCurrentDispatcher: xt, ReactCurrentBatchConfig: bs, ReactCurrentOwner: Td };
function hg() { throw Error("act(...) is not supported in production builds of React."); }
ke.Children = { map: Ga, forEach: function (e, t, n) { Ga(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return Ga(e, function () { t++; }), t; }, toArray: function (e) { return Ga(e, function (t) { return t; }) || []; }, only: function (e) { if (!Ad(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
ke.Component = ci;
ke.Fragment = p_;
ke.Profiler = v_;
ke.PureComponent = Cd;
ke.StrictMode = m_;
ke.Suspense = w_;
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C_;
ke.act = hg;
ke.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = sg({}, e.props), o = e.key, i = e.ref, a = e._owner; if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Td.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var s = e.type.defaultProps;
    for (l in t)
        cg.call(t, l) && !fg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
} var l = arguments.length - 2; if (l === 1)
    r.children = n;
else if (1 < l) {
    s = Array(l);
    for (var f = 0; f < l; f++)
        s[f] = arguments[f + 2];
    r.children = s;
} return { $$typeof: La, type: e.type, key: o, ref: i, props: r, _owner: a }; };
ke.createContext = function (e) { return e = { $$typeof: y_, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: g_, _context: e }, e.Consumer = e; };
ke.createElement = dg;
ke.createFactory = function (e) { var t = dg.bind(null, e); return t.type = e, t; };
ke.createRef = function () { return { current: null }; };
ke.forwardRef = function (e) { return { $$typeof: x_, render: e }; };
ke.isValidElement = Ad;
ke.lazy = function (e) { return { $$typeof: __, _payload: { _status: -1, _result: e }, _init: N_ }; };
ke.memo = function (e, t) { return { $$typeof: b_, type: e, compare: t === void 0 ? null : t }; };
ke.startTransition = function (e) { var t = bs.transition; bs.transition = {}; try {
    e();
}
finally {
    bs.transition = t;
} };
ke.unstable_act = hg;
ke.useCallback = function (e, t) { return xt.current.useCallback(e, t); };
ke.useContext = function (e) { return xt.current.useContext(e); };
ke.useDebugValue = function () { };
ke.useDeferredValue = function (e) { return xt.current.useDeferredValue(e); };
ke.useEffect = function (e, t) { return xt.current.useEffect(e, t); };
ke.useId = function () { return xt.current.useId(); };
ke.useImperativeHandle = function (e, t, n) { return xt.current.useImperativeHandle(e, t, n); };
ke.useInsertionEffect = function (e, t) { return xt.current.useInsertionEffect(e, t); };
ke.useLayoutEffect = function (e, t) { return xt.current.useLayoutEffect(e, t); };
ke.useMemo = function (e, t) { return xt.current.useMemo(e, t); };
ke.useReducer = function (e, t, n) { return xt.current.useReducer(e, t, n); };
ke.useRef = function (e) { return xt.current.useRef(e); };
ke.useState = function (e) { return xt.current.useState(e); };
ke.useSyncExternalStore = function (e, t, n) { return xt.current.useSyncExternalStore(e, t, n); };
ke.useTransition = function () { return xt.current.useTransition(); };
ke.version = "18.3.1";
ig.exports = ke;
var E = ig.exports;
const te = Nd(E), pg = d_({ __proto__: null, default: te }, [E]); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var O_ = E, T_ = Symbol.for("react.element"), A_ = Symbol.for("react.fragment"), P_ = Object.prototype.hasOwnProperty, j_ = O_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function mg(e, t, n) { var r, o = {}, i = null, a = null; n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref); for (r in t)
    P_.call(t, r) && !R_.hasOwnProperty(r) && (o[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        o[r] === void 0 && (o[r] = t[r]); return { $$typeof: T_, type: e, key: i, ref: a, props: o, _owner: j_.current }; }
Wl.Fragment = A_;
Wl.jsx = mg;
Wl.jsxs = mg;
og.exports = Wl;
var b = og.exports, Qc = {}, vg = { exports: {} }, Ut = {}, gg = { exports: {} }, yg = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(V, F) { var D = V.length; V.push(F); e: for (; 0 < D;) {
    var A = D - 1 >>> 1, M = V[A];
    if (0 < o(M, F))
        V[A] = F, V[D] = M, D = A;
    else
        break e;
} } function n(V) { return V.length === 0 ? null : V[0]; } function r(V) { if (V.length === 0)
    return null; var F = V[0], D = V.pop(); if (D !== F) {
    V[0] = D;
    e: for (var A = 0, M = V.length, U = M >>> 1; A < U;) {
        var K = 2 * (A + 1) - 1, G = V[K], L = K + 1, z = V[L];
        if (0 > o(G, D))
            L < M && 0 > o(z, G) ? (V[A] = z, V[L] = D, A = L) : (V[A] = G, V[K] = D, A = K);
        else if (L < M && 0 > o(z, D))
            V[A] = z, V[L] = D, A = L;
        else
            break e;
    }
} return F; } function o(V, F) { var D = V.sortIndex - F.sortIndex; return D !== 0 ? D : V.id - F.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () { return i.now(); };
}
else {
    var a = Date, s = a.now();
    e.unstable_now = function () { return a.now() - s; };
} var l = [], f = [], h = 1, c = null, u = 3, p = !1, g = !1, v = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function w(V) { for (var F = n(f); F !== null;) {
    if (F.callback === null)
        r(f);
    else if (F.startTime <= V)
        r(f), F.sortIndex = F.expirationTime, t(l, F);
    else
        break;
    F = n(f);
} } function y(V) { if (v = !1, w(V), !g)
    if (n(l) !== null)
        g = !0, q(_);
    else {
        var F = n(f);
        F !== null && H(y, F.startTime - V);
    } } function _(V, F) { g = !1, v && (v = !1, m(N), N = -1), p = !0; var D = u; try {
    for (w(F), c = n(l); c !== null && (!(c.expirationTime > F) || V && !C());) {
        var A = c.callback;
        if (typeof A == "function") {
            c.callback = null, u = c.priorityLevel;
            var M = A(c.expirationTime <= F);
            F = e.unstable_now(), typeof M == "function" ? c.callback = M : c === n(l) && r(l), w(F);
        }
        else
            r(l);
        c = n(l);
    }
    if (c !== null)
        var U = !0;
    else {
        var K = n(f);
        K !== null && H(y, K.startTime - F), U = !1;
    }
    return U;
}
finally {
    c = null, u = D, p = !1;
} } var T = !1, S = null, N = -1, j = 5, O = -1; function C() { return !(e.unstable_now() - O < j); } function k() { if (S !== null) {
    var V = e.unstable_now();
    O = V;
    var F = !0;
    try {
        F = S(!0, V);
    }
    finally {
        F ? P() : (T = !1, S = null);
    }
}
else
    T = !1; } var P; if (typeof d == "function")
    P = function () { d(k); };
else if (typeof MessageChannel < "u") {
    var R = new MessageChannel, $ = R.port2;
    R.port1.onmessage = k, P = function () { $.postMessage(null); };
}
else
    P = function () { x(k, 0); }; function q(V) { S = V, T || (T = !0, P()); } function H(V, F) { N = x(function () { V(e.unstable_now()); }, F); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (V) { V.callback = null; }, e.unstable_continueExecution = function () { g || p || (g = !0, q(_)); }, e.unstable_forceFrameRate = function (V) { 0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < V ? Math.floor(1e3 / V) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return u; }, e.unstable_getFirstCallbackNode = function () { return n(l); }, e.unstable_next = function (V) { switch (u) {
    case 1:
    case 2:
    case 3:
        var F = 3;
        break;
    default: F = u;
} var D = u; u = F; try {
    return V();
}
finally {
    u = D;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (V, F) { switch (V) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: V = 3;
} var D = u; u = V; try {
    return F();
}
finally {
    u = D;
} }, e.unstable_scheduleCallback = function (V, F, D) { var A = e.unstable_now(); switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? A + D : A) : D = A, V) {
    case 1:
        var M = -1;
        break;
    case 2:
        M = 250;
        break;
    case 5:
        M = 1073741823;
        break;
    case 4:
        M = 1e4;
        break;
    default: M = 5e3;
} return M = D + M, V = { id: h++, callback: F, priorityLevel: V, startTime: D, expirationTime: M, sortIndex: -1 }, D > A ? (V.sortIndex = D, t(f, V), n(l) === null && V === n(f) && (v ? (m(N), N = -1) : v = !0, H(y, D - A))) : (V.sortIndex = M, t(l, V), g || p || (g = !0, q(_))), V; }, e.unstable_shouldYield = C, e.unstable_wrapCallback = function (V) { var F = u; return function () { var D = u; u = F; try {
    return V.apply(this, arguments);
}
finally {
    u = D;
} }; }; })(yg);
gg.exports = yg;
var I_ = gg.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var M_ = E, $t = I_;
function oe(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var xg = new Set, ua = {};
function co(e, t) { Qo(e, t), Qo(e + "Capture", t); }
function Qo(e, t) { for (ua[e] = t, e = 0; e < t.length; e++)
    xg.add(t[e]); }
var Bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xc = Object.prototype.hasOwnProperty, L_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Cp = {}, Op = {};
function D_(e) { return Xc.call(Op, e) ? !0 : Xc.call(Cp, e) ? !1 : L_.test(e) ? Op[e] = !0 : (Cp[e] = !0, !1); }
function F_(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function $_(e, t, n, r) { if (t === null || typeof t > "u" || F_(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function wt(e, t, n, r, o, i, a) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a; }
var ut = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { ut[e] = new wt(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; ut[t] = new wt(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { ut[e] = new wt(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { ut[e] = new wt(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { ut[e] = new wt(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { ut[e] = new wt(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { ut[e] = new wt(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { ut[e] = new wt(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { ut[e] = new wt(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var Pd = /[\-:]([a-z])/g;
function jd(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(Pd, jd); ut[t] = new wt(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(Pd, jd); ut[t] = new wt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(Pd, jd); ut[t] = new wt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { ut[e] = new wt(e, 1, !1, e.toLowerCase(), null, !1, !1); });
ut.xlinkHref = new wt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { ut[e] = new wt(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function Rd(e, t, n, r) { var o = ut.hasOwnProperty(t) ? ut[t] : null; (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($_(t, n, o, r) && (n = null), r || o === null ? D_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var Xn = M_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Za = Symbol.for("react.element"), So = Symbol.for("react.portal"), ko = Symbol.for("react.fragment"), Id = Symbol.for("react.strict_mode"), Jc = Symbol.for("react.profiler"), wg = Symbol.for("react.provider"), bg = Symbol.for("react.context"), Md = Symbol.for("react.forward_ref"), ef = Symbol.for("react.suspense"), tf = Symbol.for("react.suspense_list"), Ld = Symbol.for("react.memo"), ir = Symbol.for("react.lazy"), _g = Symbol.for("react.offscreen"), Tp = Symbol.iterator;
function Ci(e) { return e === null || typeof e != "object" ? null : (e = Tp && e[Tp] || e["@@iterator"], typeof e == "function" ? e : null); }
var Ge = Object.assign, rc;
function Bi(e) {
    if (rc === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            rc = t && t[1] || "";
        }
    return `
` + rc + e;
}
var oc = !1;
function ic(e, t) {
    if (!e || oc)
        return "";
    oc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (f) {
                    var r = f;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (f) {
                    r = f;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (f) {
                r = f;
            }
            e();
        }
    }
    catch (f) {
        if (f && r && typeof f.stack == "string") {
            for (var o = f.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s];)
                s--;
            for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== i[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--, s--, 0 > s || o[a] !== i[s]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                            }
                        while (1 <= a && 0 <= s);
                    break;
                }
        }
    }
    finally {
        oc = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Bi(e) : "";
}
function B_(e) { switch (e.tag) {
    case 5: return Bi(e.type);
    case 16: return Bi("Lazy");
    case 13: return Bi("Suspense");
    case 19: return Bi("SuspenseList");
    case 0:
    case 2:
    case 15: return e = ic(e.type, !1), e;
    case 11: return e = ic(e.type.render, !1), e;
    case 1: return e = ic(e.type, !0), e;
    default: return "";
} }
function nf(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case ko: return "Fragment";
    case So: return "Portal";
    case Jc: return "Profiler";
    case Id: return "StrictMode";
    case ef: return "Suspense";
    case tf: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case bg: return (e.displayName || "Context") + ".Consumer";
        case wg: return (e._context.displayName || "Context") + ".Provider";
        case Md:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ld: return t = e.displayName || null, t !== null ? t : nf(e.type) || "Memo";
        case ir:
            t = e._payload, e = e._init;
            try {
                return nf(e(t));
            }
            catch { }
    } return null; }
function U_(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return nf(t);
    case 8: return t === Id ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function kr(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function Eg(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function z_(e) { var t = Eg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return o.call(this); }, set: function (a) { r = "" + a, i.call(this, a); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (a) { r = "" + a; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function Ya(e) { e._valueTracker || (e._valueTracker = z_(e)); }
function Sg(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = Eg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function Fs(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch {
    return e.body;
} }
function rf(e, t) { var n = t.checked; return Ge({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked }); }
function Ap(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = kr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function kg(e, t) { t = t.checked, t != null && Rd(e, "checked", t, !1); }
function of(e, t) { kg(e, t); var n = kr(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? af(e, t.type, n) : t.hasOwnProperty("defaultValue") && af(e, t.type, kr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function Pp(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function af(e, t, n) { (t !== "number" || Fs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var Ui = Array.isArray;
function Do(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + kr(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
            e[o].selected = !0, r && (e[o].defaultSelected = !0);
            return;
        }
        t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
} }
function sf(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(oe(91)); return Ge({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function jp(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(oe(92));
        if (Ui(n)) {
            if (1 < n.length)
                throw Error(oe(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: kr(n) }; }
function Ng(e, t) { var n = kr(t.value), r = kr(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function Rp(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function Cg(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function lf(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Cg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var Qa, Og = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, o); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Qa.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function ca(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var Zi = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, V_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zi).forEach(function (e) { V_.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), Zi[t] = Zi[e]; }); });
function Tg(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zi.hasOwnProperty(e) && Zi[e] ? ("" + t).trim() : t + "px"; }
function Ag(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = Tg(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    } }
var q_ = Ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function uf(e, t) { if (t) {
    if (q_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(oe(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(oe(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(oe(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(oe(62));
} }
function cf(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var ff = null;
function Dd(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var df = null, Fo = null, $o = null;
function Ip(e) { if (e = $a(e)) {
    if (typeof df != "function")
        throw Error(oe(280));
    var t = e.stateNode;
    t && (t = Ql(t), df(e.stateNode, e.type, t));
} }
function Pg(e) { Fo ? $o ? $o.push(e) : $o = [e] : Fo = e; }
function jg() { if (Fo) {
    var e = Fo, t = $o;
    if ($o = Fo = null, Ip(e), t)
        for (e = 0; e < t.length; e++)
            Ip(t[e]);
} }
function Rg(e, t) { return e(t); }
function Ig() { }
var ac = !1;
function Mg(e, t, n) { if (ac)
    return e(t, n); ac = !0; try {
    return Rg(e, t, n);
}
finally {
    ac = !1, (Fo !== null || $o !== null) && (Ig(), jg());
} }
function fa(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = Ql(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(oe(231, t, typeof n)); return n; }
var hf = !1;
if (Bn)
    try {
        var Oi = {};
        Object.defineProperty(Oi, "passive", { get: function () { hf = !0; } }), window.addEventListener("test", Oi, Oi), window.removeEventListener("test", Oi, Oi);
    }
    catch {
        hf = !1;
    }
function H_(e, t, n, r, o, i, a, s, l) { var f = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, f);
}
catch (h) {
    this.onError(h);
} }
var Yi = !1, $s = null, Bs = !1, pf = null, W_ = { onError: function (e) { Yi = !0, $s = e; } };
function K_(e, t, n, r, o, i, a, s, l) { Yi = !1, $s = null, H_.apply(W_, arguments); }
function G_(e, t, n, r, o, i, a, s, l) { if (K_.apply(this, arguments), Yi) {
    if (Yi) {
        var f = $s;
        Yi = !1, $s = null;
    }
    else
        throw Error(oe(198));
    Bs || (Bs = !0, pf = f);
} }
function fo(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function Lg(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function Mp(e) { if (fo(e) !== e)
    throw Error(oe(188)); }
function Z_(e) { var t = e.alternate; if (!t) {
    if (t = fo(e), t === null)
        throw Error(oe(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null)
        break;
    var i = o.alternate;
    if (i === null) {
        if (r = o.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (o.child === i.child) {
        for (i = o.child; i;) {
            if (i === n)
                return Mp(o), e;
            if (i === r)
                return Mp(o), t;
            i = i.sibling;
        }
        throw Error(oe(188));
    }
    if (n.return !== r.return)
        n = o, r = i;
    else {
        for (var a = !1, s = o.child; s;) {
            if (s === n) {
                a = !0, n = o, r = i;
                break;
            }
            if (s === r) {
                a = !0, r = o, n = i;
                break;
            }
            s = s.sibling;
        }
        if (!a) {
            for (s = i.child; s;) {
                if (s === n) {
                    a = !0, n = i, r = o;
                    break;
                }
                if (s === r) {
                    a = !0, r = i, n = o;
                    break;
                }
                s = s.sibling;
            }
            if (!a)
                throw Error(oe(189));
        }
    }
    if (n.alternate !== r)
        throw Error(oe(190));
} if (n.tag !== 3)
    throw Error(oe(188)); return n.stateNode.current === n ? e : t; }
function Dg(e) { return e = Z_(e), e !== null ? Fg(e) : null; }
function Fg(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = Fg(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var $g = $t.unstable_scheduleCallback, Lp = $t.unstable_cancelCallback, Y_ = $t.unstable_shouldYield, Q_ = $t.unstable_requestPaint, Xe = $t.unstable_now, X_ = $t.unstable_getCurrentPriorityLevel, Fd = $t.unstable_ImmediatePriority, Bg = $t.unstable_UserBlockingPriority, Us = $t.unstable_NormalPriority, J_ = $t.unstable_LowPriority, Ug = $t.unstable_IdlePriority, Kl = null, _n = null;
function eE(e) { if (_n && typeof _n.onCommitFiberRoot == "function")
    try {
        _n.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128);
    }
    catch { } }
var on = Math.clz32 ? Math.clz32 : rE, tE = Math.log, nE = Math.LN2;
function rE(e) { return e >>>= 0, e === 0 ? 32 : 31 - (tE(e) / nE | 0) | 0; }
var Xa = 64, Ja = 4194304;
function zi(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function zs(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455; if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = zi(s) : (i &= a, i !== 0 && (r = zi(i)));
}
else
    a = n & ~o, a !== 0 ? r = zi(a) : i !== 0 && (r = zi(i)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - on(t), o = 1 << n, r |= e[n], t &= ~o; return r; }
function oE(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function iE(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var a = 31 - on(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = oE(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
} }
function mf(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function zg() { var e = Xa; return Xa <<= 1, !(Xa & 4194240) && (Xa = 64), e; }
function sc(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function Da(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - on(t), e[t] = n; }
function aE(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - on(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
} }
function $d(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - on(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
} }
var Ie = 0;
function Vg(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var qg, Bd, Hg, Wg, Kg, vf = !1, es = [], pr = null, mr = null, vr = null, da = new Map, ha = new Map, sr = [], sE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Dp(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        pr = null;
        break;
    case "dragenter":
    case "dragleave":
        mr = null;
        break;
    case "mouseover":
    case "mouseout":
        vr = null;
        break;
    case "pointerover":
    case "pointerout":
        da.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": ha.delete(t.pointerId);
} }
function Ti(e, t, n, r, o, i) { return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = $a(t), t !== null && Bd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e); }
function lE(e, t, n, r, o) { switch (t) {
    case "focusin": return pr = Ti(pr, e, t, n, r, o), !0;
    case "dragenter": return mr = Ti(mr, e, t, n, r, o), !0;
    case "mouseover": return vr = Ti(vr, e, t, n, r, o), !0;
    case "pointerover":
        var i = o.pointerId;
        return da.set(i, Ti(da.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture": return i = o.pointerId, ha.set(i, Ti(ha.get(i) || null, e, t, n, r, o)), !0;
} return !1; }
function Gg(e) { var t = Gr(e.target); if (t !== null) {
    var n = fo(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = Lg(n), t !== null) {
                e.blockedOn = t, Kg(e.priority, function () { Hg(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function _s(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = gf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ff = r, n.target.dispatchEvent(r), ff = null;
    }
    else
        return t = $a(n), t !== null && Bd(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function Fp(e, t, n) { _s(e) && n.delete(t); }
function uE() { vf = !1, pr !== null && _s(pr) && (pr = null), mr !== null && _s(mr) && (mr = null), vr !== null && _s(vr) && (vr = null), da.forEach(Fp), ha.forEach(Fp); }
function Ai(e, t) { e.blockedOn === t && (e.blockedOn = null, vf || (vf = !0, $t.unstable_scheduleCallback($t.unstable_NormalPriority, uE))); }
function pa(e) { function t(o) { return Ai(o, e); } if (0 < es.length) {
    Ai(es[0], e);
    for (var n = 1; n < es.length; n++) {
        var r = es[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (pr !== null && Ai(pr, e), mr !== null && Ai(mr, e), vr !== null && Ai(vr, e), da.forEach(t), ha.forEach(t), n = 0; n < sr.length; n++)
    r = sr[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < sr.length && (n = sr[0], n.blockedOn === null);)
    Gg(n), n.blockedOn === null && sr.shift(); }
var Bo = Xn.ReactCurrentBatchConfig, Vs = !0;
function cE(e, t, n, r) { var o = Ie, i = Bo.transition; Bo.transition = null; try {
    Ie = 1, Ud(e, t, n, r);
}
finally {
    Ie = o, Bo.transition = i;
} }
function fE(e, t, n, r) { var o = Ie, i = Bo.transition; Bo.transition = null; try {
    Ie = 4, Ud(e, t, n, r);
}
finally {
    Ie = o, Bo.transition = i;
} }
function Ud(e, t, n, r) { if (Vs) {
    var o = gf(e, t, n, r);
    if (o === null)
        gc(e, t, r, qs, n), Dp(e, r);
    else if (lE(o, e, t, n, r))
        r.stopPropagation();
    else if (Dp(e, r), t & 4 && -1 < sE.indexOf(e)) {
        for (; o !== null;) {
            var i = $a(o);
            if (i !== null && qg(i), i = gf(e, t, n, r), i === null && gc(e, t, r, qs, n), i === o)
                break;
            o = i;
        }
        o !== null && r.stopPropagation();
    }
    else
        gc(e, t, r, null, n);
} }
var qs = null;
function gf(e, t, n, r) { if (qs = null, e = Dd(r), e = Gr(e), e !== null)
    if (t = fo(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = Lg(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return qs = e, null; }
function Zg(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (X_()) {
        case Fd: return 1;
        case Bg: return 4;
        case Us:
        case J_: return 16;
        case Ug: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var fr = null, zd = null, Es = null;
function Yg() { if (Es)
    return Es; var e, t = zd, n = t.length, r, o = "value" in fr ? fr.value : fr.textContent, i = o.length; for (e = 0; e < n && t[e] === o[e]; e++)
    ; var a = n - e; for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ; return Es = o.slice(e, 1 < r ? 1 - r : void 0); }
function Ss(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function ts() { return !0; }
function $p() { return !1; }
function zt(e) { function t(n, r, o, i, a) { this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null; for (var s in e)
    e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]); return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ts : $p, this.isPropagationStopped = $p, this; } return Ge(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ts); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ts); }, persist: function () { }, isPersistent: ts }), t; }
var fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Vd = zt(fi), Fa = Ge({}, fi, { view: 0, detail: 0 }), dE = zt(Fa), lc, uc, Pi, Gl = Ge({}, Fa, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qd, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Pi && (Pi && e.type === "mousemove" ? (lc = e.screenX - Pi.screenX, uc = e.screenY - Pi.screenY) : uc = lc = 0, Pi = e), lc); }, movementY: function (e) { return "movementY" in e ? e.movementY : uc; } }), Bp = zt(Gl), hE = Ge({}, Gl, { dataTransfer: 0 }), pE = zt(hE), mE = Ge({}, Fa, { relatedTarget: 0 }), cc = zt(mE), vE = Ge({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gE = zt(vE), yE = Ge({}, fi, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), xE = zt(yE), wE = Ge({}, fi, { data: 0 }), Up = zt(wE), bE = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, _E = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, EE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function SE(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = EE[e]) ? !!t[e] : !1; }
function qd() { return SE; }
var kE = Ge({}, Fa, { key: function (e) { if (e.key) {
        var t = bE[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = Ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _E[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qd, charCode: function (e) { return e.type === "keypress" ? Ss(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? Ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), NE = zt(kE), CE = Ge({}, Gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zp = zt(CE), OE = Ge({}, Fa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qd }), TE = zt(OE), AE = Ge({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), PE = zt(AE), jE = Ge({}, Gl, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), RE = zt(jE), IE = [9, 13, 27, 32], Hd = Bn && "CompositionEvent" in window, Qi = null;
Bn && "documentMode" in document && (Qi = document.documentMode);
var ME = Bn && "TextEvent" in window && !Qi, Qg = Bn && (!Hd || Qi && 8 < Qi && 11 >= Qi), Vp = " ", qp = !1;
function Xg(e, t) { switch (e) {
    case "keyup": return IE.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Jg(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var No = !1;
function LE(e, t) { switch (e) {
    case "compositionend": return Jg(t);
    case "keypress": return t.which !== 32 ? null : (qp = !0, Vp);
    case "textInput": return e = t.data, e === Vp && qp ? null : e;
    default: return null;
} }
function DE(e, t) { if (No)
    return e === "compositionend" || !Hd && Xg(e, t) ? (e = Yg(), Es = zd = fr = null, No = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return Qg && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var FE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hp(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!FE[e.type] : t === "textarea"; }
function ey(e, t, n, r) { Pg(r), t = Hs(t, "onChange"), 0 < t.length && (n = new Vd("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var Xi = null, ma = null;
function $E(e) { fy(e, 0); }
function Zl(e) { var t = To(e); if (Sg(t))
    return e; }
function BE(e, t) { if (e === "change")
    return t; }
var ty = !1;
if (Bn) {
    var fc;
    if (Bn) {
        var dc = "oninput" in document;
        if (!dc) {
            var Wp = document.createElement("div");
            Wp.setAttribute("oninput", "return;"), dc = typeof Wp.oninput == "function";
        }
        fc = dc;
    }
    else
        fc = !1;
    ty = fc && (!document.documentMode || 9 < document.documentMode);
}
function Kp() { Xi && (Xi.detachEvent("onpropertychange", ny), ma = Xi = null); }
function ny(e) { if (e.propertyName === "value" && Zl(ma)) {
    var t = [];
    ey(t, ma, e, Dd(e)), Mg($E, t);
} }
function UE(e, t, n) { e === "focusin" ? (Kp(), Xi = t, ma = n, Xi.attachEvent("onpropertychange", ny)) : e === "focusout" && Kp(); }
function zE(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Zl(ma); }
function VE(e, t) { if (e === "click")
    return Zl(t); }
function qE(e, t) { if (e === "input" || e === "change")
    return Zl(t); }
function HE(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var ln = typeof Object.is == "function" ? Object.is : HE;
function va(e, t) { if (ln(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xc.call(t, o) || !ln(e[o], t[o]))
        return !1;
} return !0; }
function Gp(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function Zp(e, t) { var n = Gp(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = Gp(n);
} }
function ry(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ry(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function oy() { for (var e = window, t = Fs(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = Fs(e.document);
} return t; }
function Wd(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function WE(e) { var t = oy(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && ry(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wd(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var o = n.textContent.length, i = Math.min(r.start, o);
            r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Zp(n, i);
            var a = Zp(n, r);
            o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var KE = Bn && "documentMode" in document && 11 >= document.documentMode, Co = null, yf = null, Ji = null, xf = !1;
function Yp(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; xf || Co == null || Co !== Fs(r) || (r = Co, "selectionStart" in r && Wd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ji && va(Ji, r) || (Ji = r, r = Hs(yf, "onSelect"), 0 < r.length && (t = new Vd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Co))); }
function ns(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var Oo = { animationend: ns("Animation", "AnimationEnd"), animationiteration: ns("Animation", "AnimationIteration"), animationstart: ns("Animation", "AnimationStart"), transitionend: ns("Transition", "TransitionEnd") }, hc = {}, iy = {};
Bn && (iy = document.createElement("div").style, "AnimationEvent" in window || (delete Oo.animationend.animation, delete Oo.animationiteration.animation, delete Oo.animationstart.animation), "TransitionEvent" in window || delete Oo.transitionend.transition);
function Yl(e) { if (hc[e])
    return hc[e]; if (!Oo[e])
    return e; var t = Oo[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in iy)
        return hc[e] = t[n]; return e; }
var ay = Yl("animationend"), sy = Yl("animationiteration"), ly = Yl("animationstart"), uy = Yl("transitionend"), cy = new Map, Qp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Lr(e, t) { cy.set(e, t), co(t, [e]); }
for (var pc = 0; pc < Qp.length; pc++) {
    var mc = Qp[pc], GE = mc.toLowerCase(), ZE = mc[0].toUpperCase() + mc.slice(1);
    Lr(GE, "on" + ZE);
}
Lr(ay, "onAnimationEnd");
Lr(sy, "onAnimationIteration");
Lr(ly, "onAnimationStart");
Lr("dblclick", "onDoubleClick");
Lr("focusin", "onFocus");
Lr("focusout", "onBlur");
Lr(uy, "onTransitionEnd");
Qo("onMouseEnter", ["mouseout", "mouseover"]);
Qo("onMouseLeave", ["mouseout", "mouseover"]);
Qo("onPointerEnter", ["pointerout", "pointerover"]);
Qo("onPointerLeave", ["pointerout", "pointerover"]);
co("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
co("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
co("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
co("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
co("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
co("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), YE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));
function Xp(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, G_(r, t, void 0, e), e.currentTarget = null; }
function fy(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
        var i = void 0;
        if (t)
            for (var a = r.length - 1; 0 <= a; a--) {
                var s = r[a], l = s.instance, f = s.currentTarget;
                if (s = s.listener, l !== i && o.isPropagationStopped())
                    break e;
                Xp(o, s, f), i = l;
            }
        else
            for (a = 0; a < r.length; a++) {
                if (s = r[a], l = s.instance, f = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
                    break e;
                Xp(o, s, f), i = l;
            }
    }
} if (Bs)
    throw e = pf, Bs = !1, pf = null, e; }
function ze(e, t) { var n = t[Sf]; n === void 0 && (n = t[Sf] = new Set); var r = e + "__bubble"; n.has(r) || (dy(t, e, 2, !1), n.add(r)); }
function vc(e, t, n) { var r = 0; t && (r |= 4), dy(n, e, r, t); }
var rs = "_reactListening" + Math.random().toString(36).slice(2);
function ga(e) { if (!e[rs]) {
    e[rs] = !0, xg.forEach(function (n) { n !== "selectionchange" && (YE.has(n) || vc(n, !1, e), vc(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rs] || (t[rs] = !0, vc("selectionchange", !1, t));
} }
function dy(e, t, n, r) { switch (Zg(t)) {
    case 1:
        var o = cE;
        break;
    case 4:
        o = fE;
        break;
    default: o = Ud;
} n = o.bind(null, t, n, e), o = void 0, !hf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1); }
function gc(e, t, n, r, o) { var i = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var a = r.tag;
        if (a === 3 || a === 4) {
            var s = r.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o)
                break;
            if (a === 4)
                for (a = r.return; a !== null;) {
                    var l = a.tag;
                    if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                        return;
                    a = a.return;
                }
            for (; s !== null;) {
                if (a = Gr(s), a === null)
                    return;
                if (l = a.tag, l === 5 || l === 6) {
                    r = i = a;
                    continue e;
                }
                s = s.parentNode;
            }
        }
        r = r.return;
    } Mg(function () { var f = i, h = Dd(n), c = []; e: {
    var u = cy.get(e);
    if (u !== void 0) {
        var p = Vd, g = e;
        switch (e) {
            case "keypress": if (Ss(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                p = NE;
                break;
            case "focusin":
                g = "focus", p = cc;
                break;
            case "focusout":
                g = "blur", p = cc;
                break;
            case "beforeblur":
            case "afterblur":
                p = cc;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                p = Bp;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                p = pE;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                p = TE;
                break;
            case ay:
            case sy:
            case ly:
                p = gE;
                break;
            case uy:
                p = PE;
                break;
            case "scroll":
                p = dE;
                break;
            case "wheel":
                p = RE;
                break;
            case "copy":
            case "cut":
            case "paste":
                p = xE;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": p = zp;
        }
        var v = (t & 4) !== 0, x = !v && e === "scroll", m = v ? u !== null ? u + "Capture" : null : u;
        v = [];
        for (var d = f, w; d !== null;) {
            w = d;
            var y = w.stateNode;
            if (w.tag === 5 && y !== null && (w = y, m !== null && (y = fa(d, m), y != null && v.push(ya(d, y, w)))), x)
                break;
            d = d.return;
        }
        0 < v.length && (u = new p(u, g, null, n, h), c.push({ event: u, listeners: v }));
    }
} if (!(t & 7)) {
    e: {
        if (u = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", u && n !== ff && (g = n.relatedTarget || n.fromElement) && (Gr(g) || g[Un]))
            break e;
        if ((p || u) && (u = h.window === h ? h : (u = h.ownerDocument) ? u.defaultView || u.parentWindow : window, p ? (g = n.relatedTarget || n.toElement, p = f, g = g ? Gr(g) : null, g !== null && (x = fo(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = f), p !== g)) {
            if (v = Bp, y = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (v = zp, y = "onPointerLeave", m = "onPointerEnter", d = "pointer"), x = p == null ? u : To(p), w = g == null ? u : To(g), u = new v(y, d + "leave", p, n, h), u.target = x, u.relatedTarget = w, y = null, Gr(h) === f && (v = new v(m, d + "enter", g, n, h), v.target = w, v.relatedTarget = x, y = v), x = y, p && g)
                t: {
                    for (v = p, m = g, d = 0, w = v; w; w = yo(w))
                        d++;
                    for (w = 0, y = m; y; y = yo(y))
                        w++;
                    for (; 0 < d - w;)
                        v = yo(v), d--;
                    for (; 0 < w - d;)
                        m = yo(m), w--;
                    for (; d--;) {
                        if (v === m || m !== null && v === m.alternate)
                            break t;
                        v = yo(v), m = yo(m);
                    }
                    v = null;
                }
            else
                v = null;
            p !== null && Jp(c, u, p, v, !1), g !== null && x !== null && Jp(c, x, g, v, !0);
        }
    }
    e: {
        if (u = f ? To(f) : window, p = u.nodeName && u.nodeName.toLowerCase(), p === "select" || p === "input" && u.type === "file")
            var _ = BE;
        else if (Hp(u))
            if (ty)
                _ = qE;
            else {
                _ = zE;
                var T = UE;
            }
        else
            (p = u.nodeName) && p.toLowerCase() === "input" && (u.type === "checkbox" || u.type === "radio") && (_ = VE);
        if (_ && (_ = _(e, f))) {
            ey(c, _, n, h);
            break e;
        }
        T && T(e, u, f), e === "focusout" && (T = u._wrapperState) && T.controlled && u.type === "number" && af(u, "number", u.value);
    }
    switch (T = f ? To(f) : window, e) {
        case "focusin":
            (Hp(T) || T.contentEditable === "true") && (Co = T, yf = f, Ji = null);
            break;
        case "focusout":
            Ji = yf = Co = null;
            break;
        case "mousedown":
            xf = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            xf = !1, Yp(c, n, h);
            break;
        case "selectionchange": if (KE)
            break;
        case "keydown":
        case "keyup": Yp(c, n, h);
    }
    var S;
    if (Hd)
        e: {
            switch (e) {
                case "compositionstart":
                    var N = "onCompositionStart";
                    break e;
                case "compositionend":
                    N = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    N = "onCompositionUpdate";
                    break e;
            }
            N = void 0;
        }
    else
        No ? Xg(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
    N && (Qg && n.locale !== "ko" && (No || N !== "onCompositionStart" ? N === "onCompositionEnd" && No && (S = Yg()) : (fr = h, zd = "value" in fr ? fr.value : fr.textContent, No = !0)), T = Hs(f, N), 0 < T.length && (N = new Up(N, e, null, n, h), c.push({ event: N, listeners: T }), S ? N.data = S : (S = Jg(n), S !== null && (N.data = S)))), (S = ME ? LE(e, n) : DE(e, n)) && (f = Hs(f, "onBeforeInput"), 0 < f.length && (h = new Up("onBeforeInput", "beforeinput", null, n, h), c.push({ event: h, listeners: f }), h.data = S));
} fy(c, t); }); }
function ya(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function Hs(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = fa(e, n), i != null && r.unshift(ya(e, i, o)), i = fa(e, t), i != null && r.push(ya(e, i, o))), e = e.return;
} return r; }
function yo(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function Jp(e, t, n, r, o) { for (var i = t._reactName, a = []; n !== null && n !== r;) {
    var s = n, l = s.alternate, f = s.stateNode;
    if (l !== null && l === r)
        break;
    s.tag === 5 && f !== null && (s = f, o ? (l = fa(n, i), l != null && a.unshift(ya(n, l, s))) : o || (l = fa(n, i), l != null && a.push(ya(n, l, s)))), n = n.return;
} a.length !== 0 && e.push({ event: t, listeners: a }); }
var QE = /\r\n?/g, XE = /\u0000|\uFFFD/g;
function em(e) {
    return (typeof e == "string" ? e : "" + e).replace(QE, `
`).replace(XE, "");
}
function os(e, t, n) { if (t = em(t), em(e) !== t && n)
    throw Error(oe(425)); }
function Ws() { }
var wf = null, bf = null;
function _f(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var Ef = typeof setTimeout == "function" ? setTimeout : void 0, JE = typeof clearTimeout == "function" ? clearTimeout : void 0, tm = typeof Promise == "function" ? Promise : void 0, e2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof tm < "u" ? function (e) { return tm.resolve(null).then(e).catch(t2); } : Ef;
function t2(e) { setTimeout(function () { throw e; }); }
function yc(e, t) { var n = t, r = 0; do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$") {
            if (r === 0) {
                e.removeChild(o), pa(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
} while (n); pa(t); }
function gr(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function nm(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var di = Math.random().toString(36).slice(2), xn = "__reactFiber$" + di, xa = "__reactProps$" + di, Un = "__reactContainer$" + di, Sf = "__reactEvents$" + di, n2 = "__reactListeners$" + di, r2 = "__reactHandles$" + di;
function Gr(e) { var t = e[xn]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[Un] || n[xn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = nm(e); e !== null;) {
                if (n = e[xn])
                    return n;
                e = nm(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function $a(e) { return e = e[xn] || e[Un], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function To(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(oe(33)); }
function Ql(e) { return e[xa] || null; }
var kf = [], Ao = -1;
function Dr(e) { return { current: e }; }
function qe(e) { 0 > Ao || (e.current = kf[Ao], kf[Ao] = null, Ao--); }
function $e(e, t) { Ao++, kf[Ao] = e.current, e.current = t; }
var Nr = {}, pt = Dr(Nr), Ct = Dr(!1), eo = Nr;
function Xo(e, t) { var n = e.type.contextTypes; if (!n)
    return Nr; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var o = {}, i; for (i in n)
    o[i] = t[i]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o; }
function Ot(e) { return e = e.childContextTypes, e != null; }
function Ks() { qe(Ct), qe(pt); }
function rm(e, t, n) { if (pt.current !== Nr)
    throw Error(oe(168)); $e(pt, t), $e(Ct, n); }
function hy(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var o in r)
    if (!(o in t))
        throw Error(oe(108, U_(e) || "Unknown", o)); return Ge({}, n, r); }
function Gs(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nr, eo = pt.current, $e(pt, e), $e(Ct, Ct.current), !0; }
function om(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(oe(169)); n ? (e = hy(e, t, eo), r.__reactInternalMemoizedMergedChildContext = e, qe(Ct), qe(pt), $e(pt, e)) : qe(Ct), $e(Ct, n); }
var jn = null, Xl = !1, xc = !1;
function py(e) { jn === null ? jn = [e] : jn.push(e); }
function o2(e) { Xl = !0, py(e); }
function Fr() { if (!xc && jn !== null) {
    xc = !0;
    var e = 0, t = Ie;
    try {
        var n = jn;
        for (Ie = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        jn = null, Xl = !1;
    }
    catch (o) {
        throw jn !== null && (jn = jn.slice(e + 1)), $g(Fd, Fr), o;
    }
    finally {
        Ie = t, xc = !1;
    }
} return null; }
var Po = [], jo = 0, Zs = null, Ys = 0, qt = [], Ht = 0, to = null, Rn = 1, In = "";
function Vr(e, t) { Po[jo++] = Ys, Po[jo++] = Zs, Zs = e, Ys = t; }
function my(e, t, n) { qt[Ht++] = Rn, qt[Ht++] = In, qt[Ht++] = to, to = e; var r = Rn; e = In; var o = 32 - on(r) - 1; r &= ~(1 << o), n += 1; var i = 32 - on(t) + o; if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Rn = 1 << 32 - on(t) + o | n << o | r, In = i + e;
}
else
    Rn = 1 << i | n << o | r, In = e; }
function Kd(e) { e.return !== null && (Vr(e, 1), my(e, 1, 0)); }
function Gd(e) { for (; e === Zs;)
    Zs = Po[--jo], Po[jo] = null, Ys = Po[--jo], Po[jo] = null; for (; e === to;)
    to = qt[--Ht], qt[Ht] = null, In = qt[--Ht], qt[Ht] = null, Rn = qt[--Ht], qt[Ht] = null; }
var Dt = null, Lt = null, He = !1, nn = null;
function vy(e, t) { var n = Wt(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function im(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Dt = e, Lt = gr(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Dt = e, Lt = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = to !== null ? { id: Rn, overflow: In } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Dt = e, Lt = null, !0) : !1;
    default: return !1;
} }
function Nf(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function Cf(e) { if (He) {
    var t = Lt;
    if (t) {
        var n = t;
        if (!im(e, t)) {
            if (Nf(e))
                throw Error(oe(418));
            t = gr(n.nextSibling);
            var r = Dt;
            t && im(e, t) ? vy(r, n) : (e.flags = e.flags & -4097 | 2, He = !1, Dt = e);
        }
    }
    else {
        if (Nf(e))
            throw Error(oe(418));
        e.flags = e.flags & -4097 | 2, He = !1, Dt = e;
    }
} }
function am(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Dt = e; }
function is(e) { if (e !== Dt)
    return !1; if (!He)
    return am(e), He = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_f(e.type, e.memoizedProps)), t && (t = Lt)) {
    if (Nf(e))
        throw gy(), Error(oe(418));
    for (; t;)
        vy(e, t), t = gr(t.nextSibling);
} if (am(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(oe(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        Lt = gr(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        Lt = null;
    }
}
else
    Lt = Dt ? gr(e.stateNode.nextSibling) : null; return !0; }
function gy() { for (var e = Lt; e;)
    e = gr(e.nextSibling); }
function Jo() { Lt = Dt = null, He = !1; }
function Zd(e) { nn === null ? nn = [e] : nn.push(e); }
var i2 = Xn.ReactCurrentBatchConfig;
function ji(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(oe(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(oe(147, e));
        var o = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (a) { var s = o.refs; a === null ? delete s[i] : s[i] = a; }, t._stringRef = i, t);
    }
    if (typeof e != "string")
        throw Error(oe(284));
    if (!n._owner)
        throw Error(oe(290, e));
} return e; }
function as(e, t) { throw e = Object.prototype.toString.call(t), Error(oe(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function sm(e) { var t = e._init; return t(e._payload); }
function yy(e) { function t(m, d) { if (e) {
    var w = m.deletions;
    w === null ? (m.deletions = [d], m.flags |= 16) : w.push(d);
} } function n(m, d) { if (!e)
    return null; for (; d !== null;)
    t(m, d), d = d.sibling; return null; } function r(m, d) { for (m = new Map; d !== null;)
    d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling; return m; } function o(m, d) { return m = br(m, d), m.index = 0, m.sibling = null, m; } function i(m, d, w) { return m.index = w, e ? (w = m.alternate, w !== null ? (w = w.index, w < d ? (m.flags |= 2, d) : w) : (m.flags |= 2, d)) : (m.flags |= 1048576, d); } function a(m) { return e && m.alternate === null && (m.flags |= 2), m; } function s(m, d, w, y) { return d === null || d.tag !== 6 ? (d = Nc(w, m.mode, y), d.return = m, d) : (d = o(d, w), d.return = m, d); } function l(m, d, w, y) { var _ = w.type; return _ === ko ? h(m, d, w.props.children, y, w.key) : d !== null && (d.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === ir && sm(_) === d.type) ? (y = o(d, w.props), y.ref = ji(m, d, w), y.return = m, y) : (y = Ps(w.type, w.key, w.props, null, m.mode, y), y.ref = ji(m, d, w), y.return = m, y); } function f(m, d, w, y) { return d === null || d.tag !== 4 || d.stateNode.containerInfo !== w.containerInfo || d.stateNode.implementation !== w.implementation ? (d = Cc(w, m.mode, y), d.return = m, d) : (d = o(d, w.children || []), d.return = m, d); } function h(m, d, w, y, _) { return d === null || d.tag !== 7 ? (d = Xr(w, m.mode, y, _), d.return = m, d) : (d = o(d, w), d.return = m, d); } function c(m, d, w) { if (typeof d == "string" && d !== "" || typeof d == "number")
    return d = Nc("" + d, m.mode, w), d.return = m, d; if (typeof d == "object" && d !== null) {
    switch (d.$$typeof) {
        case Za: return w = Ps(d.type, d.key, d.props, null, m.mode, w), w.ref = ji(m, null, d), w.return = m, w;
        case So: return d = Cc(d, m.mode, w), d.return = m, d;
        case ir:
            var y = d._init;
            return c(m, y(d._payload), w);
    }
    if (Ui(d) || Ci(d))
        return d = Xr(d, m.mode, w, null), d.return = m, d;
    as(m, d);
} return null; } function u(m, d, w, y) { var _ = d !== null ? d.key : null; if (typeof w == "string" && w !== "" || typeof w == "number")
    return _ !== null ? null : s(m, d, "" + w, y); if (typeof w == "object" && w !== null) {
    switch (w.$$typeof) {
        case Za: return w.key === _ ? l(m, d, w, y) : null;
        case So: return w.key === _ ? f(m, d, w, y) : null;
        case ir: return _ = w._init, u(m, d, _(w._payload), y);
    }
    if (Ui(w) || Ci(w))
        return _ !== null ? null : h(m, d, w, y, null);
    as(m, w);
} return null; } function p(m, d, w, y, _) { if (typeof y == "string" && y !== "" || typeof y == "number")
    return m = m.get(w) || null, s(d, m, "" + y, _); if (typeof y == "object" && y !== null) {
    switch (y.$$typeof) {
        case Za: return m = m.get(y.key === null ? w : y.key) || null, l(d, m, y, _);
        case So: return m = m.get(y.key === null ? w : y.key) || null, f(d, m, y, _);
        case ir:
            var T = y._init;
            return p(m, d, w, T(y._payload), _);
    }
    if (Ui(y) || Ci(y))
        return m = m.get(w) || null, h(d, m, y, _, null);
    as(d, y);
} return null; } function g(m, d, w, y) { for (var _ = null, T = null, S = d, N = d = 0, j = null; S !== null && N < w.length; N++) {
    S.index > N ? (j = S, S = null) : j = S.sibling;
    var O = u(m, S, w[N], y);
    if (O === null) {
        S === null && (S = j);
        break;
    }
    e && S && O.alternate === null && t(m, S), d = i(O, d, N), T === null ? _ = O : T.sibling = O, T = O, S = j;
} if (N === w.length)
    return n(m, S), He && Vr(m, N), _; if (S === null) {
    for (; N < w.length; N++)
        S = c(m, w[N], y), S !== null && (d = i(S, d, N), T === null ? _ = S : T.sibling = S, T = S);
    return He && Vr(m, N), _;
} for (S = r(m, S); N < w.length; N++)
    j = p(S, m, N, w[N], y), j !== null && (e && j.alternate !== null && S.delete(j.key === null ? N : j.key), d = i(j, d, N), T === null ? _ = j : T.sibling = j, T = j); return e && S.forEach(function (C) { return t(m, C); }), He && Vr(m, N), _; } function v(m, d, w, y) { var _ = Ci(w); if (typeof _ != "function")
    throw Error(oe(150)); if (w = _.call(w), w == null)
    throw Error(oe(151)); for (var T = _ = null, S = d, N = d = 0, j = null, O = w.next(); S !== null && !O.done; N++, O = w.next()) {
    S.index > N ? (j = S, S = null) : j = S.sibling;
    var C = u(m, S, O.value, y);
    if (C === null) {
        S === null && (S = j);
        break;
    }
    e && S && C.alternate === null && t(m, S), d = i(C, d, N), T === null ? _ = C : T.sibling = C, T = C, S = j;
} if (O.done)
    return n(m, S), He && Vr(m, N), _; if (S === null) {
    for (; !O.done; N++, O = w.next())
        O = c(m, O.value, y), O !== null && (d = i(O, d, N), T === null ? _ = O : T.sibling = O, T = O);
    return He && Vr(m, N), _;
} for (S = r(m, S); !O.done; N++, O = w.next())
    O = p(S, m, N, O.value, y), O !== null && (e && O.alternate !== null && S.delete(O.key === null ? N : O.key), d = i(O, d, N), T === null ? _ = O : T.sibling = O, T = O); return e && S.forEach(function (k) { return t(m, k); }), He && Vr(m, N), _; } function x(m, d, w, y) { if (typeof w == "object" && w !== null && w.type === ko && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
    switch (w.$$typeof) {
        case Za:
            e: {
                for (var _ = w.key, T = d; T !== null;) {
                    if (T.key === _) {
                        if (_ = w.type, _ === ko) {
                            if (T.tag === 7) {
                                n(m, T.sibling), d = o(T, w.props.children), d.return = m, m = d;
                                break e;
                            }
                        }
                        else if (T.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === ir && sm(_) === T.type) {
                            n(m, T.sibling), d = o(T, w.props), d.ref = ji(m, T, w), d.return = m, m = d;
                            break e;
                        }
                        n(m, T);
                        break;
                    }
                    else
                        t(m, T);
                    T = T.sibling;
                }
                w.type === ko ? (d = Xr(w.props.children, m.mode, y, w.key), d.return = m, m = d) : (y = Ps(w.type, w.key, w.props, null, m.mode, y), y.ref = ji(m, d, w), y.return = m, m = y);
            }
            return a(m);
        case So:
            e: {
                for (T = w.key; d !== null;) {
                    if (d.key === T)
                        if (d.tag === 4 && d.stateNode.containerInfo === w.containerInfo && d.stateNode.implementation === w.implementation) {
                            n(m, d.sibling), d = o(d, w.children || []), d.return = m, m = d;
                            break e;
                        }
                        else {
                            n(m, d);
                            break;
                        }
                    else
                        t(m, d);
                    d = d.sibling;
                }
                d = Cc(w, m.mode, y), d.return = m, m = d;
            }
            return a(m);
        case ir: return T = w._init, x(m, d, T(w._payload), y);
    }
    if (Ui(w))
        return g(m, d, w, y);
    if (Ci(w))
        return v(m, d, w, y);
    as(m, w);
} return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, d !== null && d.tag === 6 ? (n(m, d.sibling), d = o(d, w), d.return = m, m = d) : (n(m, d), d = Nc(w, m.mode, y), d.return = m, m = d), a(m)) : n(m, d); } return x; }
var ei = yy(!0), xy = yy(!1), Qs = Dr(null), Xs = null, Ro = null, Yd = null;
function Qd() { Yd = Ro = Xs = null; }
function Xd(e) { var t = Qs.current; qe(Qs), e._currentValue = t; }
function Of(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function Uo(e, t) { Xs = e, Yd = Ro = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Nt = !0), e.firstContext = null); }
function Yt(e) { var t = e._currentValue; if (Yd !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Ro === null) {
        if (Xs === null)
            throw Error(oe(308));
        Ro = e, Xs.dependencies = { lanes: 0, firstContext: e };
    }
    else
        Ro = Ro.next = e; return t; }
var Zr = null;
function Jd(e) { Zr === null ? Zr = [e] : Zr.push(e); }
function wy(e, t, n, r) { var o = t.interleaved; return o === null ? (n.next = n, Jd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, zn(e, r); }
function zn(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var ar = !1;
function eh(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function by(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function Dn(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function yr(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, Ae & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, zn(e, n);
} return o = r.interleaved, o === null ? (t.next = t, Jd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, zn(e, n); }
function ks(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $d(e, n);
} }
function lm(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            i === null ? o = i = a : i = i.next = a, n = n.next;
        } while (n !== null);
        i === null ? o = i = t : i = i.next = t;
    }
    else
        o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function Js(e, t, n, r) { var o = e.updateQueue; ar = !1; var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending; if (s !== null) {
    o.shared.pending = null;
    var l = s, f = l.next;
    l.next = null, a === null ? i = f : a.next = f, a = l;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== a && (s === null ? h.firstBaseUpdate = f : s.next = f, h.lastBaseUpdate = l));
} if (i !== null) {
    var c = o.baseState;
    a = 0, h = f = l = null, s = i;
    do {
        var u = s.lane, p = s.eventTime;
        if ((r & u) === u) {
            h !== null && (h = h.next = { eventTime: p, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
            e: {
                var g = e, v = s;
                switch (u = t, p = n, v.tag) {
                    case 1:
                        if (g = v.payload, typeof g == "function") {
                            c = g.call(p, c, u);
                            break e;
                        }
                        c = g;
                        break e;
                    case 3: g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = v.payload, u = typeof g == "function" ? g.call(p, c, u) : g, u == null)
                            break e;
                        c = Ge({}, c, u);
                        break e;
                    case 2: ar = !0;
                }
            }
            s.callback !== null && s.lane !== 0 && (e.flags |= 64, u = o.effects, u === null ? o.effects = [s] : u.push(s));
        }
        else
            p = { eventTime: p, lane: u, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (f = h = p, l = c) : h = h.next = p, a |= u;
        if (s = s.next, s === null) {
            if (s = o.shared.pending, s === null)
                break;
            u = s, s = u.next, u.next = null, o.lastBaseUpdate = u, o.shared.pending = null;
        }
    } while (!0);
    if (h === null && (l = c), o.baseState = l, o.firstBaseUpdate = f, o.lastBaseUpdate = h, t = o.shared.interleaved, t !== null) {
        o = t;
        do
            a |= o.lane, o = o.next;
        while (o !== t);
    }
    else
        i === null && (o.shared.lanes = 0);
    ro |= a, e.lanes = a, e.memoizedState = c;
} }
function um(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function")
                throw Error(oe(191, o));
            o.call(r);
        }
    } }
var Ba = {}, En = Dr(Ba), wa = Dr(Ba), ba = Dr(Ba);
function Yr(e) { if (e === Ba)
    throw Error(oe(174)); return e; }
function th(e, t) { switch ($e(ba, t), $e(wa, e), $e(En, Ba), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lf(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lf(t, e);
} qe(En), $e(En, t); }
function ti() { qe(En), qe(wa), qe(ba); }
function _y(e) { Yr(ba.current); var t = Yr(En.current), n = lf(t, e.type); t !== n && ($e(wa, e), $e(En, n)); }
function nh(e) { wa.current === e && (qe(En), qe(wa)); }
var We = Dr(0);
function el(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var wc = [];
function rh() { for (var e = 0; e < wc.length; e++)
    wc[e]._workInProgressVersionPrimary = null; wc.length = 0; }
var Ns = Xn.ReactCurrentDispatcher, bc = Xn.ReactCurrentBatchConfig, no = 0, Ke = null, nt = null, it = null, tl = !1, ea = !1, _a = 0, a2 = 0;
function ft() { throw Error(oe(321)); }
function oh(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!ln(e[n], t[n]))
        return !1; return !0; }
function ih(e, t, n, r, o, i) { if (no = i, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ns.current = e === null || e.memoizedState === null ? c2 : f2, e = n(r, o), ea) {
    i = 0;
    do {
        if (ea = !1, _a = 0, 25 <= i)
            throw Error(oe(301));
        i += 1, it = nt = null, t.updateQueue = null, Ns.current = d2, e = n(r, o);
    } while (ea);
} if (Ns.current = nl, t = nt !== null && nt.next !== null, no = 0, it = nt = Ke = null, tl = !1, t)
    throw Error(oe(300)); return e; }
function ah() { var e = _a !== 0; return _a = 0, e; }
function yn() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return it === null ? Ke.memoizedState = it = e : it = it.next = e, it; }
function Qt() { if (nt === null) {
    var e = Ke.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = nt.next; var t = it === null ? Ke.memoizedState : it.next; if (t !== null)
    it = t, nt = e;
else {
    if (e === null)
        throw Error(oe(310));
    nt = e, e = { memoizedState: nt.memoizedState, baseState: nt.baseState, baseQueue: nt.baseQueue, queue: nt.queue, next: null }, it === null ? Ke.memoizedState = it = e : it = it.next = e;
} return it; }
function Ea(e, t) { return typeof t == "function" ? t(e) : t; }
function _c(e) { var t = Qt(), n = t.queue; if (n === null)
    throw Error(oe(311)); n.lastRenderedReducer = e; var r = nt, o = r.baseQueue, i = n.pending; if (i !== null) {
    if (o !== null) {
        var a = o.next;
        o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
} if (o !== null) {
    i = o.next, r = r.baseState;
    var s = a = null, l = null, f = i;
    do {
        var h = f.lane;
        if ((no & h) === h)
            l !== null && (l = l.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
        else {
            var c = { lane: h, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null };
            l === null ? (s = l = c, a = r) : l = l.next = c, Ke.lanes |= h, ro |= h;
        }
        f = f.next;
    } while (f !== null && f !== i);
    l === null ? a = r : l.next = s, ln(r, t.memoizedState) || (Nt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    o = e;
    do
        i = o.lane, Ke.lanes |= i, ro |= i, o = o.next;
    while (o !== e);
}
else
    o === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function Ec(e) { var t = Qt(), n = t.queue; if (n === null)
    throw Error(oe(311)); n.lastRenderedReducer = e; var r = n.dispatch, o = n.pending, i = t.memoizedState; if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
        i = e(i, a.action), a = a.next;
    while (a !== o);
    ln(i, t.memoizedState) || (Nt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
} return [i, r]; }
function Ey() { }
function Sy(e, t) { var n = Ke, r = Qt(), o = t(), i = !ln(r.memoizedState, o); if (i && (r.memoizedState = o, Nt = !0), r = r.queue, sh(Cy.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Sa(9, Ny.bind(null, n, r, o, t), void 0, null), at === null)
        throw Error(oe(349));
    no & 30 || ky(n, t, o);
} return o; }
function ky(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function Ny(e, t, n, r) { t.value = n, t.getSnapshot = r, Oy(t) && Ty(e); }
function Cy(e, t, n) { return n(function () { Oy(t) && Ty(e); }); }
function Oy(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !ln(e, n);
}
catch {
    return !0;
} }
function Ty(e) { var t = zn(e, 1); t !== null && an(t, e, 1, -1); }
function cm(e) { var t = yn(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ea, lastRenderedState: e }, t.queue = e, e = e.dispatch = u2.bind(null, Ke, e), [t.memoizedState, e]; }
function Sa(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function Ay() { return Qt().memoizedState; }
function Cs(e, t, n, r) { var o = yn(); Ke.flags |= e, o.memoizedState = Sa(1 | t, n, void 0, r === void 0 ? null : r); }
function Jl(e, t, n, r) { var o = Qt(); r = r === void 0 ? null : r; var i = void 0; if (nt !== null) {
    var a = nt.memoizedState;
    if (i = a.destroy, r !== null && oh(r, a.deps)) {
        o.memoizedState = Sa(t, n, i, r);
        return;
    }
} Ke.flags |= e, o.memoizedState = Sa(1 | t, n, i, r); }
function fm(e, t) { return Cs(8390656, 8, e, t); }
function sh(e, t) { return Jl(2048, 8, e, t); }
function Py(e, t) { return Jl(4, 2, e, t); }
function jy(e, t) { return Jl(4, 4, e, t); }
function Ry(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function Iy(e, t, n) { return n = n != null ? n.concat([e]) : null, Jl(4, 4, Ry.bind(null, t, e), n); }
function lh() { }
function My(e, t) { var n = Qt(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && oh(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function Ly(e, t) { var n = Qt(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && oh(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function Dy(e, t, n) { return no & 21 ? (ln(n, t) || (n = zg(), Ke.lanes |= n, ro |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Nt = !0), e.memoizedState = n); }
function s2(e, t) { var n = Ie; Ie = n !== 0 && 4 > n ? n : 4, e(!0); var r = bc.transition; bc.transition = {}; try {
    e(!1), t();
}
finally {
    Ie = n, bc.transition = r;
} }
function Fy() { return Qt().memoizedState; }
function l2(e, t, n) { var r = wr(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $y(e))
    By(t, n);
else if (n = wy(e, t, n, r), n !== null) {
    var o = gt();
    an(n, e, r, o), Uy(n, t, r);
} }
function u2(e, t, n) { var r = wr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if ($y(e))
    By(t, o);
else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
            var a = t.lastRenderedState, s = i(a, n);
            if (o.hasEagerState = !0, o.eagerState = s, ln(s, a)) {
                var l = t.interleaved;
                l === null ? (o.next = o, Jd(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return;
            }
        }
        catch { }
        finally { }
    n = wy(e, t, o, r), n !== null && (o = gt(), an(n, e, r, o), Uy(n, t, r));
} }
function $y(e) { var t = e.alternate; return e === Ke || t !== null && t === Ke; }
function By(e, t) { ea = tl = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function Uy(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $d(e, n);
} }
var nl = { readContext: Yt, useCallback: ft, useContext: ft, useEffect: ft, useImperativeHandle: ft, useInsertionEffect: ft, useLayoutEffect: ft, useMemo: ft, useReducer: ft, useRef: ft, useState: ft, useDebugValue: ft, useDeferredValue: ft, useTransition: ft, useMutableSource: ft, useSyncExternalStore: ft, useId: ft, unstable_isNewReconciler: !1 }, c2 = { readContext: Yt, useCallback: function (e, t) { return yn().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: Yt, useEffect: fm, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, Cs(4194308, 4, Ry.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Cs(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Cs(4, 2, e, t); }, useMemo: function (e, t) { var n = yn(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = yn(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = l2.bind(null, Ke, e), [r.memoizedState, e]; }, useRef: function (e) { var t = yn(); return e = { current: e }, t.memoizedState = e; }, useState: cm, useDebugValue: lh, useDeferredValue: function (e) { return yn().memoizedState = e; }, useTransition: function () { var e = cm(!1), t = e[0]; return e = s2.bind(null, e[1]), yn().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = Ke, o = yn(); if (He) {
        if (n === void 0)
            throw Error(oe(407));
        n = n();
    }
    else {
        if (n = t(), at === null)
            throw Error(oe(349));
        no & 30 || ky(r, t, n);
    } o.memoizedState = n; var i = { value: n, getSnapshot: t }; return o.queue = i, fm(Cy.bind(null, r, i, e), [e]), r.flags |= 2048, Sa(9, Ny.bind(null, r, i, n, t), void 0, null), n; }, useId: function () { var e = yn(), t = at.identifierPrefix; if (He) {
        var n = In, r = Rn;
        n = (r & ~(1 << 32 - on(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _a++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = a2++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, f2 = { readContext: Yt, useCallback: My, useContext: Yt, useEffect: sh, useImperativeHandle: Iy, useInsertionEffect: Py, useLayoutEffect: jy, useMemo: Ly, useReducer: _c, useRef: Ay, useState: function () { return _c(Ea); }, useDebugValue: lh, useDeferredValue: function (e) { var t = Qt(); return Dy(t, nt.memoizedState, e); }, useTransition: function () { var e = _c(Ea)[0], t = Qt().memoizedState; return [e, t]; }, useMutableSource: Ey, useSyncExternalStore: Sy, useId: Fy, unstable_isNewReconciler: !1 }, d2 = { readContext: Yt, useCallback: My, useContext: Yt, useEffect: sh, useImperativeHandle: Iy, useInsertionEffect: Py, useLayoutEffect: jy, useMemo: Ly, useReducer: Ec, useRef: Ay, useState: function () { return Ec(Ea); }, useDebugValue: lh, useDeferredValue: function (e) { var t = Qt(); return nt === null ? t.memoizedState = e : Dy(t, nt.memoizedState, e); }, useTransition: function () { var e = Ec(Ea)[0], t = Qt().memoizedState; return [e, t]; }, useMutableSource: Ey, useSyncExternalStore: Sy, useId: Fy, unstable_isNewReconciler: !1 };
function en(e, t) { if (e && e.defaultProps) {
    t = Ge({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
function Tf(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : Ge({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var eu = { isMounted: function (e) { return (e = e._reactInternals) ? fo(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = gt(), o = wr(e), i = Dn(r, o); i.payload = t, n != null && (i.callback = n), t = yr(e, i, o), t !== null && (an(t, e, o, r), ks(t, e, o)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = gt(), o = wr(e), i = Dn(r, o); i.tag = 1, i.payload = t, n != null && (i.callback = n), t = yr(e, i, o), t !== null && (an(t, e, o, r), ks(t, e, o)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = gt(), r = wr(e), o = Dn(n, r); o.tag = 2, t != null && (o.callback = t), t = yr(e, o, r), t !== null && (an(t, e, r, n), ks(t, e, r)); } };
function dm(e, t, n, r, o, i, a) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !va(n, r) || !va(o, i) : !0; }
function zy(e, t, n) { var r = !1, o = Nr, i = t.contextType; return typeof i == "object" && i !== null ? i = Yt(i) : (o = Ot(t) ? eo : pt.current, r = t.contextTypes, i = (r = r != null) ? Xo(e, o) : Nr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = eu, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t; }
function hm(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && eu.enqueueReplaceState(t, t.state, null); }
function Af(e, t, n, r) { var o = e.stateNode; o.props = n, o.state = e.memoizedState, o.refs = {}, eh(e); var i = t.contextType; typeof i == "object" && i !== null ? o.context = Yt(i) : (i = Ot(t) ? eo : pt.current, o.context = Xo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Tf(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && eu.enqueueReplaceState(o, o.state, null), Js(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308); }
function ni(e, t) {
    try {
        var n = "", r = t;
        do
            n += B_(r), r = r.return;
        while (r);
        var o = n;
    }
    catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Sc(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null }; }
function Pf(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var h2 = typeof WeakMap == "function" ? WeakMap : Map;
function Vy(e, t, n) { n = Dn(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { ol || (ol = !0, Uf = r), Pf(e, t); }, n; }
function qy(e, t, n) { n = Dn(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var o = t.value;
    n.payload = function () { return r(o); }, n.callback = function () { Pf(e, t); };
} var i = e.stateNode; return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () { Pf(e, t), typeof r != "function" && (xr === null ? xr = new Set([this]) : xr.add(this)); var a = t.stack; this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" }); }), n; }
function pm(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new h2;
    var o = new Set;
    r.set(t, o);
}
else
    o = r.get(t), o === void 0 && (o = new Set, r.set(t, o)); o.has(n) || (o.add(n), e = C2.bind(null, e, t, n), t.then(e, e)); }
function mm(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function vm(e, t, n, r, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dn(-1, 1), t.tag = 2, yr(n, t, 1))), n.lanes |= 1), e); }
var p2 = Xn.ReactCurrentOwner, Nt = !1;
function mt(e, t, n, r) { t.child = e === null ? xy(t, null, n, r) : ei(t, e.child, n, r); }
function gm(e, t, n, r, o) { n = n.render; var i = t.ref; return Uo(t, o), r = ih(e, t, n, r, i, o), n = ah(), e !== null && !Nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Vn(e, t, o)) : (He && n && Kd(t), t.flags |= 1, mt(e, t, r, o), t.child); }
function ym(e, t, n, r, o) { if (e === null) {
    var i = n.type;
    return typeof i == "function" && !vh(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Hy(e, t, i, r, o)) : (e = Ps(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
} if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : va, n(a, r) && e.ref === t.ref)
        return Vn(e, t, o);
} return t.flags |= 1, e = br(i, r), e.ref = t.ref, e.return = t, t.child = e; }
function Hy(e, t, n, r, o) { if (e !== null) {
    var i = e.memoizedProps;
    if (va(i, r) && e.ref === t.ref)
        if (Nt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
            e.flags & 131072 && (Nt = !0);
        else
            return t.lanes = e.lanes, Vn(e, t, o);
} return jf(e, t, n, r, o); }
function Wy(e, t, n) { var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(Mo, Rt), Rt |= n;
    else {
        if (!(n & 1073741824))
            return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $e(Mo, Rt), Rt |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, $e(Mo, Rt), Rt |= r;
    }
else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, $e(Mo, Rt), Rt |= r; return mt(e, t, o, n), t.child; }
function Ky(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function jf(e, t, n, r, o) { var i = Ot(n) ? eo : pt.current; return i = Xo(t, i), Uo(t, o), n = ih(e, t, n, r, i, o), r = ah(), e !== null && !Nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Vn(e, t, o)) : (He && r && Kd(t), t.flags |= 1, mt(e, t, n, o), t.child); }
function xm(e, t, n, r, o) { if (Ot(n)) {
    var i = !0;
    Gs(t);
}
else
    i = !1; if (Uo(t, o), t.stateNode === null)
    Os(e, t), zy(t, n, r), Af(t, n, r, o), r = !0;
else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Yt(f) : (f = Ot(n) ? eo : pt.current, f = Xo(t, f));
    var h = n.getDerivedStateFromProps, c = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== f) && hm(t, a, r, f), ar = !1;
    var u = t.memoizedState;
    a.state = u, Js(t, r, a, o), l = t.memoizedState, s !== r || u !== l || Ct.current || ar ? (typeof h == "function" && (Tf(t, n, h, r), l = t.memoizedState), (s = ar || dm(t, n, s, r, u, l, f)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = f, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    a = t.stateNode, by(e, t), s = t.memoizedProps, f = t.type === t.elementType ? s : en(t.type, s), a.props = f, c = t.pendingProps, u = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = Yt(l) : (l = Ot(n) ? eo : pt.current, l = Xo(t, l));
    var p = n.getDerivedStateFromProps;
    (h = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== c || u !== l) && hm(t, a, r, l), ar = !1, u = t.memoizedState, a.state = u, Js(t, r, a, o);
    var g = t.memoizedState;
    s !== c || u !== g || Ct.current || ar ? (typeof p == "function" && (Tf(t, n, p, r), g = t.memoizedState), (f = ar || dm(t, n, f, r, u, g, l) || !1) ? (h || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = l, r = f) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 1024), r = !1);
} return Rf(e, t, n, r, i, o); }
function Rf(e, t, n, r, o, i) { Ky(e, t); var a = (t.flags & 128) !== 0; if (!r && !a)
    return o && om(t, n, !1), Vn(e, t, i); r = t.stateNode, p2.current = t; var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && a ? (t.child = ei(t, e.child, null, i), t.child = ei(t, null, s, i)) : mt(e, t, s, i), t.memoizedState = r.state, o && om(t, n, !0), t.child; }
function Gy(e) { var t = e.stateNode; t.pendingContext ? rm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rm(e, t.context, !1), th(e, t.containerInfo); }
function wm(e, t, n, r, o) { return Jo(), Zd(o), t.flags |= 256, mt(e, t, n, r), t.child; }
var If = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mf(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function Zy(e, t, n) { var r = t.pendingProps, o = We.current, i = !1, a = (t.flags & 128) !== 0, s; if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), $e(We, o & 1), e === null)
    return Cf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = ru(a, r, 0, null), e = Xr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Mf(n), t.memoizedState = If, e) : uh(t, a)); if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return m2(e, t, a, r, s, o, n); if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = br(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = br(s, i) : (i = Xr(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Mf(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = If, r;
} return i = e.child, e = i.sibling, r = br(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function uh(e, t) { return t = ru({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function ss(e, t, n, r) { return r !== null && Zd(r), ei(t, e.child, null, n), e = uh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function m2(e, t, n, r, o, i, a) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Sc(Error(oe(422))), ss(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ru({ mode: "visible", children: r.children }, o, 0, null), i = Xr(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ei(t, e.child, null, a), t.child.memoizedState = Mf(a), t.memoizedState = If, i); if (!(t.mode & 1))
    return ss(e, t, a, null); if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
        var s = r.dgst;
    return r = s, i = Error(oe(419)), r = Sc(i, r, void 0), ss(e, t, a, r);
} if (s = (a & e.childLanes) !== 0, Nt || s) {
    if (r = at, r !== null) {
        switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default: o = 0;
        }
        o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, zn(e, o), an(r, e, o, -1));
    }
    return mh(), r = Sc(Error(oe(421))), ss(e, t, a, r);
} return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = O2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Lt = gr(o.nextSibling), Dt = t, He = !0, nn = null, e !== null && (qt[Ht++] = Rn, qt[Ht++] = In, qt[Ht++] = to, Rn = e.id, In = e.overflow, to = t), t = uh(t, r.children), t.flags |= 4096, t); }
function bm(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), Of(e.return, t, n); }
function kc(e, t, n, r, o) { var i = e.memoizedState; i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o); }
function Yy(e, t, n) { var r = t.pendingProps, o = r.revealOrder, i = r.tail; if (mt(e, t, r.children, n), r = We.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && bm(e, n, t);
            else if (e.tag === 19)
                bm(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if ($e(We, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;)
                e = n.alternate, e !== null && el(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), kc(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && el(e) === null) {
                    t.child = o;
                    break;
                }
                e = o.sibling, o.sibling = n, n = o, o = e;
            }
            kc(t, !0, n, null, i);
            break;
        case "together":
            kc(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function Os(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function Vn(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), ro |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(oe(153)); if (t.child !== null) {
    for (e = t.child, n = br(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = br(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function v2(e, t, n) { switch (t.tag) {
    case 3:
        Gy(t), Jo();
        break;
    case 5:
        _y(t);
        break;
    case 1:
        Ot(t.type) && Gs(t);
        break;
    case 4:
        th(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        $e(Qs, r._currentValue), r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? ($e(We, We.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Zy(e, t, n) : ($e(We, We.current & 1), e = Vn(e, t, n), e !== null ? e.sibling : null);
        $e(We, We.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return Yy(e, t, n);
            t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), $e(We, We.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, Wy(e, t, n);
} return Vn(e, t, n); }
var Qy, Lf, Xy, Jy;
Qy = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
Lf = function () { };
Xy = function (e, t, n, r) { var o = e.memoizedProps; if (o !== r) {
    e = t.stateNode, Yr(En.current);
    var i = null;
    switch (n) {
        case "input":
            o = rf(e, o), r = rf(e, r), i = [];
            break;
        case "select":
            o = Ge({}, o, { value: void 0 }), r = Ge({}, r, { value: void 0 }), i = [];
            break;
        case "textarea":
            o = sf(e, o), r = sf(e, r), i = [];
            break;
        default: typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ws);
    }
    uf(n, r);
    var a;
    n = null;
    for (f in o)
        if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && o[f] != null)
            if (f === "style") {
                var s = o[f];
                for (a in s)
                    s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
            }
            else
                f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ua.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
        var l = r[f];
        if (s = o != null ? o[f] : void 0, r.hasOwnProperty(f) && l !== s && (l != null || s != null))
            if (f === "style")
                if (s) {
                    for (a in s)
                        !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                    for (a in l)
                        l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
                }
                else
                    n || (i || (i = []), i.push(f, n)), n = l;
            else
                f === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(f, l)) : f === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(f, "" + l) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (ua.hasOwnProperty(f) ? (l != null && f === "onScroll" && ze("scroll", e), i || s === l || (i = [])) : (i = i || []).push(f, l));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
} };
Jy = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function Ri(e, t) { if (!He)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function dt(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
else
    for (o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function g2(e, t, n) { var r = t.pendingProps; switch (Gd(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return dt(t), null;
    case 1: return Ot(t.type) && Ks(), dt(t), null;
    case 3: return r = t.stateNode, ti(), qe(Ct), qe(pt), rh(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (is(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, nn !== null && (qf(nn), nn = null))), Lf(e, t), dt(t), null;
    case 5:
        nh(t);
        var o = Yr(ba.current);
        if (n = t.type, e !== null && t.stateNode != null)
            Xy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(oe(166));
                return dt(t), null;
            }
            if (e = Yr(En.current), is(t)) {
                r = t.stateNode, n = t.type;
                var i = t.memoizedProps;
                switch (r[xn] = t, r[xa] = i, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        ze("cancel", r), ze("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ze("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Vi.length; o++)
                            ze(Vi[o], r);
                        break;
                    case "source":
                        ze("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ze("error", r), ze("load", r);
                        break;
                    case "details":
                        ze("toggle", r);
                        break;
                    case "input":
                        Ap(r, i), ze("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!i.multiple }, ze("invalid", r);
                        break;
                    case "textarea": jp(r, i), ze("invalid", r);
                }
                uf(n, i), o = null;
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var s = i[a];
                        a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && os(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && os(r.textContent, s, e), o = ["children", "" + s]) : ua.hasOwnProperty(a) && s != null && a === "onScroll" && ze("scroll", r);
                    }
                switch (n) {
                    case "input":
                        Ya(r), Pp(r, i, !0);
                        break;
                    case "textarea":
                        Ya(r), Rp(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof i.onClick == "function" && (r.onclick = Ws);
                }
                r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Cg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[xn] = t, e[xa] = r, Qy(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (a = cf(n, r), n) {
                        case "dialog":
                            ze("cancel", e), ze("close", e), o = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ze("load", e), o = r;
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Vi.length; o++)
                                ze(Vi[o], e);
                            o = r;
                            break;
                        case "source":
                            ze("error", e), o = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ze("error", e), ze("load", e), o = r;
                            break;
                        case "details":
                            ze("toggle", e), o = r;
                            break;
                        case "input":
                            Ap(e, r), o = rf(e, r), ze("invalid", e);
                            break;
                        case "option":
                            o = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, o = Ge({}, r, { value: void 0 }), ze("invalid", e);
                            break;
                        case "textarea":
                            jp(e, r), o = sf(e, r), ze("invalid", e);
                            break;
                        default: o = r;
                    }
                    uf(n, o), s = o;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var l = s[i];
                            i === "style" ? Ag(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Og(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ca(e, l) : typeof l == "number" && ca(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ua.hasOwnProperty(i) ? l != null && i === "onScroll" && ze("scroll", e) : l != null && Rd(e, i, l, a));
                        }
                    switch (n) {
                        case "input":
                            Ya(e), Pp(e, r, !1);
                            break;
                        case "textarea":
                            Ya(e), Rp(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + kr(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, i = r.value, i != null ? Do(e, !!r.multiple, i, !1) : r.defaultValue != null && Do(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof o.onClick == "function" && (e.onclick = Ws);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return dt(t), null;
    case 6:
        if (e && t.stateNode != null)
            Jy(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(oe(166));
            if (n = Yr(ba.current), Yr(En.current), is(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[xn] = t, (i = r.nodeValue !== n) && (e = Dt, e !== null))
                    switch (e.tag) {
                        case 3:
                            os(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && os(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                i && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[xn] = t, t.stateNode = r;
        }
        return dt(t), null;
    case 13:
        if (qe(We), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (He && Lt !== null && t.mode & 1 && !(t.flags & 128))
                gy(), Jo(), t.flags |= 98560, i = !1;
            else if (i = is(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(oe(318));
                    if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                        throw Error(oe(317));
                    i[xn] = t;
                }
                else
                    Jo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                dt(t), i = !1;
            }
            else
                nn !== null && (qf(nn), nn = null), i = !0;
            if (!i)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || We.current & 1 ? rt === 0 && (rt = 3) : mh())), t.updateQueue !== null && (t.flags |= 4), dt(t), null);
    case 4: return ti(), Lf(e, t), e === null && ga(t.stateNode.containerInfo), dt(t), null;
    case 10: return Xd(t.type._context), dt(t), null;
    case 17: return Ot(t.type) && Ks(), dt(t), null;
    case 19:
        if (qe(We), i = t.memoizedState, i === null)
            return dt(t), null;
        if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
            if (r)
                Ri(i, !1);
            else {
                if (rt !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (a = el(e), a !== null) {
                            for (t.flags |= 128, Ri(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return $e(We, We.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                i.tail !== null && Xe() > ri && (t.flags |= 128, r = !0, Ri(i, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = el(a), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ri(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !He)
                        return dt(t), null;
                }
                else
                    2 * Xe() - i.renderingStartTime > ri && n !== 1073741824 && (t.flags |= 128, r = !0, Ri(i, !1), t.lanes = 4194304);
            i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Xe(), t.sibling = null, n = We.current, $e(We, r ? n & 1 | 2 : n & 1), t) : (dt(t), null);
    case 22:
    case 23: return ph(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Rt & 1073741824 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(oe(156, t.tag)); }
function y2(e, t) { switch (Gd(t), t.tag) {
    case 1: return Ot(t.type) && Ks(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return ti(), qe(Ct), qe(pt), rh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return nh(t), null;
    case 13:
        if (qe(We), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(oe(340));
            Jo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return qe(We), null;
    case 4: return ti(), null;
    case 10: return Xd(t.type._context), null;
    case 22:
    case 23: return ph(), null;
    case 24: return null;
    default: return null;
} }
var ls = !1, ht = !1, x2 = typeof WeakSet == "function" ? WeakSet : Set, de = null;
function Io(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            Ye(e, t, r);
        }
    else
        n.current = null; }
function Df(e, t, n) { try {
    n();
}
catch (r) {
    Ye(e, t, r);
} }
var _m = !1;
function w2(e, t) { if (wf = Vs, e = oy(), Wd(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset, i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType;
                }
                catch {
                    n = null;
                    break e;
                }
                var a = 0, s = -1, l = -1, f = 0, h = 0, c = e, u = null;
                t: for (;;) {
                    for (var p; c !== n || o !== 0 && c.nodeType !== 3 || (s = a + o), c !== i || r !== 0 && c.nodeType !== 3 || (l = a + r), c.nodeType === 3 && (a += c.nodeValue.length), (p = c.firstChild) !== null;)
                        u = c, c = p;
                    for (;;) {
                        if (c === e)
                            break t;
                        if (u === n && ++f === o && (s = a), u === i && ++h === r && (l = a), (p = c.nextSibling) !== null)
                            break;
                        c = u, u = c.parentNode;
                    }
                    c = p;
                }
                n = s === -1 || l === -1 ? null : { start: s, end: l };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (bf = { focusedElem: e, selectionRange: n }, Vs = !1, de = t; de !== null;)
    if (t = de, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, de = e;
    else
        for (; de !== null;) {
            t = de;
            try {
                var g = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (g !== null) {
                                var v = g.memoizedProps, x = g.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : en(t.type, v), x);
                                m.__reactInternalSnapshotBeforeUpdate = d;
                            }
                            break;
                        case 3:
                            var w = t.stateNode.containerInfo;
                            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(oe(163));
                    }
            }
            catch (y) {
                Ye(t, t.return, y);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, de = e;
                break;
            }
            de = t.return;
        } return g = _m, _m = !1, g; }
function ta(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
        if ((o.tag & e) === e) {
            var i = o.destroy;
            o.destroy = void 0, i !== void 0 && Df(t, n, i);
        }
        o = o.next;
    } while (o !== r);
} }
function tu(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function Ff(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function e0(e) { var t = e.alternate; t !== null && (e.alternate = null, e0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xn], delete t[xa], delete t[Sf], delete t[n2], delete t[r2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function t0(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function Em(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || t0(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function $f(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ws));
else if (r !== 4 && (e = e.child, e !== null))
    for ($f(e, t, n), e = e.sibling; e !== null;)
        $f(e, t, n), e = e.sibling; }
function Bf(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (Bf(e, t, n), e = e.sibling; e !== null;)
        Bf(e, t, n), e = e.sibling; }
var st = null, tn = !1;
function tr(e, t, n) { for (n = n.child; n !== null;)
    n0(e, t, n), n = n.sibling; }
function n0(e, t, n) { if (_n && typeof _n.onCommitFiberUnmount == "function")
    try {
        _n.onCommitFiberUnmount(Kl, n);
    }
    catch { } switch (n.tag) {
    case 5: ht || Io(n, t);
    case 6:
        var r = st, o = tn;
        st = null, tr(e, t, n), st = r, tn = o, st !== null && (tn ? (e = st, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : st.removeChild(n.stateNode));
        break;
    case 18:
        st !== null && (tn ? (e = st, n = n.stateNode, e.nodeType === 8 ? yc(e.parentNode, n) : e.nodeType === 1 && yc(e, n), pa(e)) : yc(st, n.stateNode));
        break;
    case 4:
        r = st, o = tn, st = n.stateNode.containerInfo, tn = !0, tr(e, t, n), st = r, tn = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ht && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            o = r = r.next;
            do {
                var i = o, a = i.destroy;
                i = i.tag, a !== void 0 && (i & 2 || i & 4) && Df(n, t, a), o = o.next;
            } while (o !== r);
        }
        tr(e, t, n);
        break;
    case 1:
        if (!ht && (Io(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (s) {
                Ye(n, t, s);
            }
        tr(e, t, n);
        break;
    case 21:
        tr(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ht = (r = ht) || n.memoizedState !== null, tr(e, t, n), ht = r) : tr(e, t, n);
        break;
    default: tr(e, t, n);
} }
function Sm(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new x2), t.forEach(function (r) { var o = T2.bind(null, e, r); n.has(r) || (n.add(r), r.then(o, o)); });
} }
function Xt(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var i = e, a = t, s = a;
            e: for (; s !== null;) {
                switch (s.tag) {
                    case 5:
                        st = s.stateNode, tn = !1;
                        break e;
                    case 3:
                        st = s.stateNode.containerInfo, tn = !0;
                        break e;
                    case 4:
                        st = s.stateNode.containerInfo, tn = !0;
                        break e;
                }
                s = s.return;
            }
            if (st === null)
                throw Error(oe(160));
            n0(i, a, o), st = null, tn = !1;
            var l = o.alternate;
            l !== null && (l.return = null), o.return = null;
        }
        catch (f) {
            Ye(o, t, f);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        r0(t, e), t = t.sibling; }
function r0(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Xt(t, e), vn(e), r & 4) {
            try {
                ta(3, e, e.return), tu(3, e);
            }
            catch (v) {
                Ye(e, e.return, v);
            }
            try {
                ta(5, e, e.return);
            }
            catch (v) {
                Ye(e, e.return, v);
            }
        }
        break;
    case 1:
        Xt(t, e), vn(e), r & 512 && n !== null && Io(n, n.return);
        break;
    case 5:
        if (Xt(t, e), vn(e), r & 512 && n !== null && Io(n, n.return), e.flags & 32) {
            var o = e.stateNode;
            try {
                ca(o, "");
            }
            catch (v) {
                Ye(e, e.return, v);
            }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
            var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
            if (e.updateQueue = null, l !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && kg(o, i), cf(s, a);
                    var f = cf(s, i);
                    for (a = 0; a < l.length; a += 2) {
                        var h = l[a], c = l[a + 1];
                        h === "style" ? Ag(o, c) : h === "dangerouslySetInnerHTML" ? Og(o, c) : h === "children" ? ca(o, c) : Rd(o, h, c, f);
                    }
                    switch (s) {
                        case "input":
                            of(o, i);
                            break;
                        case "textarea":
                            Ng(o, i);
                            break;
                        case "select":
                            var u = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var p = i.value;
                            p != null ? Do(o, !!i.multiple, p, !1) : u !== !!i.multiple && (i.defaultValue != null ? Do(o, !!i.multiple, i.defaultValue, !0) : Do(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[xa] = i;
                }
                catch (v) {
                    Ye(e, e.return, v);
                }
        }
        break;
    case 6:
        if (Xt(t, e), vn(e), r & 4) {
            if (e.stateNode === null)
                throw Error(oe(162));
            o = e.stateNode, i = e.memoizedProps;
            try {
                o.nodeValue = i;
            }
            catch (v) {
                Ye(e, e.return, v);
            }
        }
        break;
    case 3:
        if (Xt(t, e), vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                pa(t.containerInfo);
            }
            catch (v) {
                Ye(e, e.return, v);
            }
        break;
    case 4:
        Xt(t, e), vn(e);
        break;
    case 13:
        Xt(t, e), vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (dh = Xe())), r & 4 && Sm(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ht = (f = ht) || h, Xt(t, e), ht = f) : Xt(t, e), vn(e), r & 8192) {
            if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1)
                for (de = e, h = e.child; h !== null;) {
                    for (c = de = h; de !== null;) {
                        switch (u = de, p = u.child, u.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                ta(4, u, u.return);
                                break;
                            case 1:
                                Io(u, u.return);
                                var g = u.stateNode;
                                if (typeof g.componentWillUnmount == "function") {
                                    r = u, n = u.return;
                                    try {
                                        t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                                    }
                                    catch (v) {
                                        Ye(r, n, v);
                                    }
                                }
                                break;
                            case 5:
                                Io(u, u.return);
                                break;
                            case 22: if (u.memoizedState !== null) {
                                Nm(c);
                                continue;
                            }
                        }
                        p !== null ? (p.return = u, de = p) : Nm(c);
                    }
                    h = h.sibling;
                }
            e: for (h = null, c = e;;) {
                if (c.tag === 5) {
                    if (h === null) {
                        h = c;
                        try {
                            o = c.stateNode, f ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = c.stateNode, l = c.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Tg("display", a));
                        }
                        catch (v) {
                            Ye(e, e.return, v);
                        }
                    }
                }
                else if (c.tag === 6) {
                    if (h === null)
                        try {
                            c.stateNode.nodeValue = f ? "" : c.memoizedProps;
                        }
                        catch (v) {
                            Ye(e, e.return, v);
                        }
                }
                else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                    c.child.return = c, c = c.child;
                    continue;
                }
                if (c === e)
                    break e;
                for (; c.sibling === null;) {
                    if (c.return === null || c.return === e)
                        break e;
                    h === c && (h = null), c = c.return;
                }
                h === c && (h = null), c.sibling.return = c.return, c = c.sibling;
            }
        }
        break;
    case 19:
        Xt(t, e), vn(e), r & 4 && Sm(e);
        break;
    case 21: break;
    default: Xt(t, e), vn(e);
} }
function vn(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (t0(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(oe(160));
        }
        switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (ca(o, ""), r.flags &= -33);
                var i = Em(e);
                Bf(e, i, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo, s = Em(e);
                $f(e, s, a);
                break;
            default: throw Error(oe(161));
        }
    }
    catch (l) {
        Ye(e, e.return, l);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function b2(e, t, n) { de = e, o0(e); }
function o0(e, t, n) { for (var r = (e.mode & 1) !== 0; de !== null;) {
    var o = de, i = o.child;
    if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || ls;
        if (!a) {
            var s = o.alternate, l = s !== null && s.memoizedState !== null || ht;
            s = ls;
            var f = ht;
            if (ls = a, (ht = l) && !f)
                for (de = o; de !== null;)
                    a = de, l = a.child, a.tag === 22 && a.memoizedState !== null ? Cm(o) : l !== null ? (l.return = a, de = l) : Cm(o);
            for (; i !== null;)
                de = i, o0(i), i = i.sibling;
            de = o, ls = s, ht = f;
        }
        km(e);
    }
    else
        o.subtreeFlags & 8772 && i !== null ? (i.return = o, de = i) : km(e);
} }
function km(e) { for (; de !== null;) {
    var t = de;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ht || tu(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ht)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : en(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var i = t.updateQueue;
                        i !== null && um(t, i, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            um(t, a, n);
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img": l.src && (n.src = l.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var f = t.alternate;
                            if (f !== null) {
                                var h = f.memoizedState;
                                if (h !== null) {
                                    var c = h.dehydrated;
                                    c !== null && pa(c);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(oe(163));
                }
            ht || t.flags & 512 && Ff(t);
        }
        catch (u) {
            Ye(t, t.return, u);
        }
    }
    if (t === e) {
        de = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, de = n;
        break;
    }
    de = t.return;
} }
function Nm(e) { for (; de !== null;) {
    var t = de;
    if (t === e) {
        de = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, de = n;
        break;
    }
    de = t.return;
} }
function Cm(e) { for (; de !== null;) {
    var t = de;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    tu(4, t);
                }
                catch (l) {
                    Ye(t, n, l);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (l) {
                        Ye(t, o, l);
                    }
                }
                var i = t.return;
                try {
                    Ff(t);
                }
                catch (l) {
                    Ye(t, i, l);
                }
                break;
            case 5:
                var a = t.return;
                try {
                    Ff(t);
                }
                catch (l) {
                    Ye(t, a, l);
                }
        }
    }
    catch (l) {
        Ye(t, t.return, l);
    }
    if (t === e) {
        de = null;
        break;
    }
    var s = t.sibling;
    if (s !== null) {
        s.return = t.return, de = s;
        break;
    }
    de = t.return;
} }
var _2 = Math.ceil, rl = Xn.ReactCurrentDispatcher, ch = Xn.ReactCurrentOwner, Kt = Xn.ReactCurrentBatchConfig, Ae = 0, at = null, Je = null, lt = 0, Rt = 0, Mo = Dr(0), rt = 0, ka = null, ro = 0, nu = 0, fh = 0, na = null, kt = null, dh = 0, ri = 1 / 0, Pn = null, ol = !1, Uf = null, xr = null, us = !1, dr = null, il = 0, ra = 0, zf = null, Ts = -1, As = 0;
function gt() { return Ae & 6 ? Xe() : Ts !== -1 ? Ts : Ts = Xe(); }
function wr(e) { return e.mode & 1 ? Ae & 2 && lt !== 0 ? lt & -lt : i2.transition !== null ? (As === 0 && (As = zg()), As) : (e = Ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zg(e.type)), e) : 1; }
function an(e, t, n, r) { if (50 < ra)
    throw ra = 0, zf = null, Error(oe(185)); Da(e, n, r), (!(Ae & 2) || e !== at) && (e === at && (!(Ae & 2) && (nu |= n), rt === 4 && lr(e, lt)), Tt(e, r), n === 1 && Ae === 0 && !(t.mode & 1) && (ri = Xe() + 500, Xl && Fr())); }
function Tt(e, t) { var n = e.callbackNode; iE(e, t); var r = zs(e, e === at ? lt : 0); if (r === 0)
    n !== null && Lp(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Lp(n), t === 1)
        e.tag === 0 ? o2(Om.bind(null, e)) : py(Om.bind(null, e)), e2(function () { !(Ae & 6) && Fr(); }), n = null;
    else {
        switch (Vg(r)) {
            case 1:
                n = Fd;
                break;
            case 4:
                n = Bg;
                break;
            case 16:
                n = Us;
                break;
            case 536870912:
                n = Ug;
                break;
            default: n = Us;
        }
        n = d0(n, i0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function i0(e, t) { if (Ts = -1, As = 0, Ae & 6)
    throw Error(oe(327)); var n = e.callbackNode; if (zo() && e.callbackNode !== n)
    return null; var r = zs(e, e === at ? lt : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = al(e, r);
else {
    t = r;
    var o = Ae;
    Ae |= 2;
    var i = s0();
    (at !== e || lt !== t) && (Pn = null, ri = Xe() + 500, Qr(e, t));
    do
        try {
            k2();
            break;
        }
        catch (s) {
            a0(e, s);
        }
    while (!0);
    Qd(), rl.current = i, Ae = o, Je !== null ? t = 0 : (at = null, lt = 0, t = rt);
} if (t !== 0) {
    if (t === 2 && (o = mf(e), o !== 0 && (r = o, t = Vf(e, o))), t === 1)
        throw n = ka, Qr(e, 0), lr(e, r), Tt(e, Xe()), n;
    if (t === 6)
        lr(e, r);
    else {
        if (o = e.current.alternate, !(r & 30) && !E2(o) && (t = al(e, r), t === 2 && (i = mf(e), i !== 0 && (r = i, t = Vf(e, i))), t === 1))
            throw n = ka, Qr(e, 0), lr(e, r), Tt(e, Xe()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(oe(345));
            case 2:
                qr(e, kt, Pn);
                break;
            case 3:
                if (lr(e, r), (r & 130023424) === r && (t = dh + 500 - Xe(), 10 < t)) {
                    if (zs(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes, (o & r) !== r) {
                        gt(), e.pingedLanes |= e.suspendedLanes & o;
                        break;
                    }
                    e.timeoutHandle = Ef(qr.bind(null, e, kt, Pn), t);
                    break;
                }
                qr(e, kt, Pn);
                break;
            case 4:
                if (lr(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, o = -1; 0 < r;) {
                    var a = 31 - on(r);
                    i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
                }
                if (r = o, r = Xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _2(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = Ef(qr.bind(null, e, kt, Pn), r);
                    break;
                }
                qr(e, kt, Pn);
                break;
            case 5:
                qr(e, kt, Pn);
                break;
            default: throw Error(oe(329));
        }
    }
} return Tt(e, Xe()), e.callbackNode === n ? i0.bind(null, e) : null; }
function Vf(e, t) { var n = na; return e.current.memoizedState.isDehydrated && (Qr(e, t).flags |= 256), e = al(e, t), e !== 2 && (t = kt, kt = n, t !== null && qf(t)), e; }
function qf(e) { kt === null ? kt = e : kt.push.apply(kt, e); }
function E2(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var o = n[r], i = o.getSnapshot;
                o = o.value;
                try {
                    if (!ln(i(), o))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function lr(e, t) { for (t &= ~fh, t &= ~nu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - on(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function Om(e) { if (Ae & 6)
    throw Error(oe(327)); zo(); var t = zs(e, 0); if (!(t & 1))
    return Tt(e, Xe()), null; var n = al(e, t); if (e.tag !== 0 && n === 2) {
    var r = mf(e);
    r !== 0 && (t = r, n = Vf(e, r));
} if (n === 1)
    throw n = ka, Qr(e, 0), lr(e, t), Tt(e, Xe()), n; if (n === 6)
    throw Error(oe(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, qr(e, kt, Pn), Tt(e, Xe()), null; }
function hh(e, t) { var n = Ae; Ae |= 1; try {
    return e(t);
}
finally {
    Ae = n, Ae === 0 && (ri = Xe() + 500, Xl && Fr());
} }
function oo(e) { dr !== null && dr.tag === 0 && !(Ae & 6) && zo(); var t = Ae; Ae |= 1; var n = Kt.transition, r = Ie; try {
    if (Kt.transition = null, Ie = 1, e)
        return e();
}
finally {
    Ie = r, Kt.transition = n, Ae = t, !(Ae & 6) && Fr();
} }
function ph() { Rt = Mo.current, qe(Mo); }
function Qr(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, JE(n)), Je !== null)
    for (n = Je.return; n !== null;) {
        var r = n;
        switch (Gd(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Ks();
                break;
            case 3:
                ti(), qe(Ct), qe(pt), rh();
                break;
            case 5:
                nh(r);
                break;
            case 4:
                ti();
                break;
            case 13:
                qe(We);
                break;
            case 19:
                qe(We);
                break;
            case 10:
                Xd(r.type._context);
                break;
            case 22:
            case 23: ph();
        }
        n = n.return;
    } if (at = e, Je = e = br(e.current, null), lt = Rt = t, rt = 0, ka = null, fh = nu = ro = 0, kt = na = null, Zr !== null) {
    for (t = 0; t < Zr.length; t++)
        if (n = Zr[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, i = n.pending;
            if (i !== null) {
                var a = i.next;
                i.next = o, r.next = a;
            }
            n.pending = r;
        }
    Zr = null;
} return e; }
function a0(e, t) { do {
    var n = Je;
    try {
        if (Qd(), Ns.current = nl, tl) {
            for (var r = Ke.memoizedState; r !== null;) {
                var o = r.queue;
                o !== null && (o.pending = null), r = r.next;
            }
            tl = !1;
        }
        if (no = 0, it = nt = Ke = null, ea = !1, _a = 0, ch.current = null, n === null || n.return === null) {
            rt = 1, ka = t, Je = null;
            break;
        }
        e: {
            var i = e, a = n.return, s = n, l = t;
            if (t = lt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                var f = l, h = s, c = h.tag;
                if (!(h.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                    var u = h.alternate;
                    u ? (h.updateQueue = u.updateQueue, h.memoizedState = u.memoizedState, h.lanes = u.lanes) : (h.updateQueue = null, h.memoizedState = null);
                }
                var p = mm(a);
                if (p !== null) {
                    p.flags &= -257, vm(p, a, s, i, t), p.mode & 1 && pm(i, f, t), t = p, l = f;
                    var g = t.updateQueue;
                    if (g === null) {
                        var v = new Set;
                        v.add(l), t.updateQueue = v;
                    }
                    else
                        g.add(l);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        pm(i, f, t), mh();
                        break e;
                    }
                    l = Error(oe(426));
                }
            }
            else if (He && s.mode & 1) {
                var x = mm(a);
                if (x !== null) {
                    !(x.flags & 65536) && (x.flags |= 256), vm(x, a, s, i, t), Zd(ni(l, s));
                    break e;
                }
            }
            i = l = ni(l, s), rt !== 4 && (rt = 2), na === null ? na = [i] : na.push(i), i = a;
            do {
                switch (i.tag) {
                    case 3:
                        i.flags |= 65536, t &= -t, i.lanes |= t;
                        var m = Vy(i, l, t);
                        lm(i, m);
                        break e;
                    case 1:
                        s = l;
                        var d = i.type, w = i.stateNode;
                        if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (xr === null || !xr.has(w)))) {
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var y = qy(i, s, t);
                            lm(i, y);
                            break e;
                        }
                }
                i = i.return;
            } while (i !== null);
        }
        u0(n);
    }
    catch (_) {
        t = _, Je === n && n !== null && (Je = n = n.return);
        continue;
    }
    break;
} while (!0); }
function s0() { var e = rl.current; return rl.current = nl, e === null ? nl : e; }
function mh() { (rt === 0 || rt === 3 || rt === 2) && (rt = 4), at === null || !(ro & 268435455) && !(nu & 268435455) || lr(at, lt); }
function al(e, t) { var n = Ae; Ae |= 2; var r = s0(); (at !== e || lt !== t) && (Pn = null, Qr(e, t)); do
    try {
        S2();
        break;
    }
    catch (o) {
        a0(e, o);
    }
while (!0); if (Qd(), Ae = n, rl.current = r, Je !== null)
    throw Error(oe(261)); return at = null, lt = 0, rt; }
function S2() { for (; Je !== null;)
    l0(Je); }
function k2() { for (; Je !== null && !Y_();)
    l0(Je); }
function l0(e) { var t = f0(e.alternate, e, Rt); e.memoizedProps = e.pendingProps, t === null ? u0(e) : Je = t, ch.current = null; }
function u0(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = y2(n, t), n !== null) {
            n.flags &= 32767, Je = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            rt = 6, Je = null;
            return;
        }
    }
    else if (n = g2(n, t, Rt), n !== null) {
        Je = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        Je = t;
        return;
    }
    Je = t = e;
} while (t !== null); rt === 0 && (rt = 5); }
function qr(e, t, n) { var r = Ie, o = Kt.transition; try {
    Kt.transition = null, Ie = 1, N2(e, t, n, r);
}
finally {
    Kt.transition = o, Ie = r;
} return null; }
function N2(e, t, n, r) { do
    zo();
while (dr !== null); if (Ae & 6)
    throw Error(oe(327)); n = e.finishedWork; var o = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(oe(177)); e.callbackNode = null, e.callbackPriority = 0; var i = n.lanes | n.childLanes; if (aE(e, i), e === at && (Je = at = null, lt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || us || (us = !0, d0(Us, function () { return zo(), null; })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Kt.transition, Kt.transition = null;
    var a = Ie;
    Ie = 1;
    var s = Ae;
    Ae |= 4, ch.current = null, w2(e, n), r0(n, e), WE(bf), Vs = !!wf, bf = wf = null, e.current = n, b2(n), Q_(), Ae = s, Ie = a, Kt.transition = i;
}
else
    e.current = n; if (us && (us = !1, dr = e, il = o), i = e.pendingLanes, i === 0 && (xr = null), eE(n.stateNode), Tt(e, Xe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest }); if (ol)
    throw ol = !1, e = Uf, Uf = null, e; return il & 1 && e.tag !== 0 && zo(), i = e.pendingLanes, i & 1 ? e === zf ? ra++ : (ra = 0, zf = e) : ra = 0, Fr(), null; }
function zo() { if (dr !== null) {
    var e = Vg(il), t = Kt.transition, n = Ie;
    try {
        if (Kt.transition = null, Ie = 16 > e ? 16 : e, dr === null)
            var r = !1;
        else {
            if (e = dr, dr = null, il = 0, Ae & 6)
                throw Error(oe(331));
            var o = Ae;
            for (Ae |= 4, de = e.current; de !== null;) {
                var i = de, a = i.child;
                if (de.flags & 16) {
                    var s = i.deletions;
                    if (s !== null) {
                        for (var l = 0; l < s.length; l++) {
                            var f = s[l];
                            for (de = f; de !== null;) {
                                var h = de;
                                switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15: ta(8, h, i);
                                }
                                var c = h.child;
                                if (c !== null)
                                    c.return = h, de = c;
                                else
                                    for (; de !== null;) {
                                        h = de;
                                        var u = h.sibling, p = h.return;
                                        if (e0(h), h === f) {
                                            de = null;
                                            break;
                                        }
                                        if (u !== null) {
                                            u.return = p, de = u;
                                            break;
                                        }
                                        de = p;
                                    }
                            }
                        }
                        var g = i.alternate;
                        if (g !== null) {
                            var v = g.child;
                            if (v !== null) {
                                g.child = null;
                                do {
                                    var x = v.sibling;
                                    v.sibling = null, v = x;
                                } while (v !== null);
                            }
                        }
                        de = i;
                    }
                }
                if (i.subtreeFlags & 2064 && a !== null)
                    a.return = i, de = a;
                else
                    e: for (; de !== null;) {
                        if (i = de, i.flags & 2048)
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15: ta(9, i, i.return);
                            }
                        var m = i.sibling;
                        if (m !== null) {
                            m.return = i.return, de = m;
                            break e;
                        }
                        de = i.return;
                    }
            }
            var d = e.current;
            for (de = d; de !== null;) {
                a = de;
                var w = a.child;
                if (a.subtreeFlags & 2064 && w !== null)
                    w.return = a, de = w;
                else
                    e: for (a = d; de !== null;) {
                        if (s = de, s.flags & 2048)
                            try {
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15: tu(9, s);
                                }
                            }
                            catch (_) {
                                Ye(s, s.return, _);
                            }
                        if (s === a) {
                            de = null;
                            break e;
                        }
                        var y = s.sibling;
                        if (y !== null) {
                            y.return = s.return, de = y;
                            break e;
                        }
                        de = s.return;
                    }
            }
            if (Ae = o, Fr(), _n && typeof _n.onPostCommitFiberRoot == "function")
                try {
                    _n.onPostCommitFiberRoot(Kl, e);
                }
                catch { }
            r = !0;
        }
        return r;
    }
    finally {
        Ie = n, Kt.transition = t;
    }
} return !1; }
function Tm(e, t, n) { t = ni(n, t), t = Vy(e, t, 1), e = yr(e, t, 1), t = gt(), e !== null && (Da(e, 1, t), Tt(e, t)); }
function Ye(e, t, n) { if (e.tag === 3)
    Tm(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            Tm(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xr === null || !xr.has(r))) {
                e = ni(n, e), e = qy(t, e, 1), t = yr(t, e, 1), e = gt(), t !== null && (Da(t, 1, e), Tt(t, e));
                break;
            }
        }
        t = t.return;
    } }
function C2(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = gt(), e.pingedLanes |= e.suspendedLanes & n, at === e && (lt & n) === n && (rt === 4 || rt === 3 && (lt & 130023424) === lt && 500 > Xe() - dh ? Qr(e, 0) : fh |= n), Tt(e, t); }
function c0(e, t) { t === 0 && (e.mode & 1 ? (t = Ja, Ja <<= 1, !(Ja & 130023424) && (Ja = 4194304)) : t = 1); var n = gt(); e = zn(e, t), e !== null && (Da(e, t, n), Tt(e, n)); }
function O2(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), c0(e, n); }
function T2(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(oe(314));
} r !== null && r.delete(t), c0(e, n); }
var f0;
f0 = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ct.current)
        Nt = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return Nt = !1, v2(e, t, n);
        Nt = !!(e.flags & 131072);
    }
else
    Nt = !1, He && t.flags & 1048576 && my(t, Ys, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        Os(e, t), e = t.pendingProps;
        var o = Xo(t, pt.current);
        Uo(t, n), o = ih(null, t, r, e, o, n);
        var i = ah();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ot(r) ? (i = !0, Gs(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, eh(t), o.updater = eu, t.stateNode = o, o._reactInternals = t, Af(t, r, e, n), t = Rf(null, t, r, !0, i, n)) : (t.tag = 0, He && i && Kd(t), mt(null, t, o, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (Os(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = P2(r), e = en(r, e), o) {
                case 0:
                    t = jf(null, t, r, e, n);
                    break e;
                case 1:
                    t = xm(null, t, r, e, n);
                    break e;
                case 11:
                    t = gm(null, t, r, e, n);
                    break e;
                case 14:
                    t = ym(null, t, r, en(r.type, e), n);
                    break e;
            }
            throw Error(oe(306, r, ""));
        }
        return t;
    case 0: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), jf(e, t, r, o, n);
    case 1: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), xm(e, t, r, o, n);
    case 3:
        e: {
            if (Gy(t), e === null)
                throw Error(oe(387));
            r = t.pendingProps, i = t.memoizedState, o = i.element, by(e, t), Js(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element, i.isDehydrated)
                if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    o = ni(Error(oe(423)), t), t = wm(e, t, r, n, o);
                    break e;
                }
                else if (r !== o) {
                    o = ni(Error(oe(424)), t), t = wm(e, t, r, n, o);
                    break e;
                }
                else
                    for (Lt = gr(t.stateNode.containerInfo.firstChild), Dt = t, He = !0, nn = null, n = xy(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (Jo(), r === o) {
                    t = Vn(e, t, n);
                    break e;
                }
                mt(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return _y(t), e === null && Cf(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, _f(r, o) ? a = null : i !== null && _f(r, i) && (t.flags |= 32), Ky(e, t), mt(e, t, a, n), t.child;
    case 6: return e === null && Cf(t), null;
    case 13: return Zy(e, t, n);
    case 4: return th(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ei(t, null, r, n) : mt(e, t, r, n), t.child;
    case 11: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), gm(e, t, r, o, n);
    case 7: return mt(e, t, t.pendingProps, n), t.child;
    case 8: return mt(e, t, t.pendingProps.children, n), t.child;
    case 12: return mt(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, $e(Qs, r._currentValue), r._currentValue = a, i !== null)
                if (ln(i.value, a)) {
                    if (i.children === o.children && !Ct.current) {
                        t = Vn(e, t, n);
                        break e;
                    }
                }
                else
                    for (i = t.child, i !== null && (i.return = t); i !== null;) {
                        var s = i.dependencies;
                        if (s !== null) {
                            a = i.child;
                            for (var l = s.firstContext; l !== null;) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = Dn(-1, n & -n), l.tag = 2;
                                        var f = i.updateQueue;
                                        if (f !== null) {
                                            f = f.shared;
                                            var h = f.pending;
                                            h === null ? l.next = l : (l.next = h.next, h.next = l), f.pending = l;
                                        }
                                    }
                                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Of(i.return, n, t), s.lanes |= n;
                                    break;
                                }
                                l = l.next;
                            }
                        }
                        else if (i.tag === 10)
                            a = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (a = i.return, a === null)
                                throw Error(oe(341));
                            a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Of(a, n, t), a = i.sibling;
                        }
                        else
                            a = i.child;
                        if (a !== null)
                            a.return = i;
                        else
                            for (a = i; a !== null;) {
                                if (a === t) {
                                    a = null;
                                    break;
                                }
                                if (i = a.sibling, i !== null) {
                                    i.return = a.return, a = i;
                                    break;
                                }
                                a = a.return;
                            }
                        i = a;
                    }
            mt(e, t, o.children, n), t = t.child;
        }
        return t;
    case 9: return o = t.type, r = t.pendingProps.children, Uo(t, n), o = Yt(o), r = r(o), t.flags |= 1, mt(e, t, r, n), t.child;
    case 14: return r = t.type, o = en(r, t.pendingProps), o = en(r.type, o), ym(e, t, r, o, n);
    case 15: return Hy(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), Os(e, t), t.tag = 1, Ot(r) ? (e = !0, Gs(t)) : e = !1, Uo(t, n), zy(t, r, o), Af(t, r, o, n), Rf(null, t, r, !0, e, n);
    case 19: return Yy(e, t, n);
    case 22: return Wy(e, t, n);
} throw Error(oe(156, t.tag)); };
function d0(e, t) { return $g(e, t); }
function A2(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function Wt(e, t, n, r) { return new A2(e, t, n, r); }
function vh(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function P2(e) { if (typeof e == "function")
    return vh(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === Md)
        return 11;
    if (e === Ld)
        return 14;
} return 2; }
function br(e, t) { var n = e.alternate; return n === null ? (n = Wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function Ps(e, t, n, r, o, i) { var a = 2; if (r = e, typeof e == "function")
    vh(e) && (a = 1);
else if (typeof e == "string")
    a = 5;
else
    e: switch (e) {
        case ko: return Xr(n.children, o, i, t);
        case Id:
            a = 8, o |= 8;
            break;
        case Jc: return e = Wt(12, n, t, o | 2), e.elementType = Jc, e.lanes = i, e;
        case ef: return e = Wt(13, n, t, o), e.elementType = ef, e.lanes = i, e;
        case tf: return e = Wt(19, n, t, o), e.elementType = tf, e.lanes = i, e;
        case _g: return ru(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case wg:
                        a = 10;
                        break e;
                    case bg:
                        a = 9;
                        break e;
                    case Md:
                        a = 11;
                        break e;
                    case Ld:
                        a = 14;
                        break e;
                    case ir:
                        a = 16, r = null;
                        break e;
                }
            throw Error(oe(130, e == null ? e : typeof e, ""));
    } return t = Wt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t; }
function Xr(e, t, n, r) { return e = Wt(7, e, r, t), e.lanes = n, e; }
function ru(e, t, n, r) { return e = Wt(22, e, r, t), e.elementType = _g, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function Nc(e, t, n) { return e = Wt(6, e, null, t), e.lanes = n, e; }
function Cc(e, t, n) { return t = Wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function j2(e, t, n, r, o) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = sc(0), this.expirationTimes = sc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null; }
function gh(e, t, n, r, o, i, a, s, l) { return e = new j2(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Wt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, eh(i), e; }
function R2(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: So, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function h0(e) { if (!e)
    return Nr; e = e._reactInternals; e: {
    if (fo(e) !== e || e.tag !== 1)
        throw Error(oe(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (Ot(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(oe(171));
} if (e.tag === 1) {
    var n = e.type;
    if (Ot(n))
        return hy(e, n, t);
} return t; }
function p0(e, t, n, r, o, i, a, s, l) { return e = gh(n, r, !0, e, o, i, a, s, l), e.context = h0(null), n = e.current, r = gt(), o = wr(n), i = Dn(r, o), i.callback = t ?? null, yr(n, i, o), e.current.lanes = o, Da(e, o, r), Tt(e, r), e; }
function ou(e, t, n, r) { var o = t.current, i = gt(), a = wr(o); return n = h0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dn(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yr(o, t, a), e !== null && (an(e, o, a, i), ks(e, o, a)), a; }
function sl(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function Am(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function yh(e, t) { Am(e, t), (e = e.alternate) && Am(e, t); }
function I2() { return null; }
var m0 = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function xh(e) { this._internalRoot = e; }
iu.prototype.render = xh.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(oe(409)); ou(e, t, null, null); };
iu.prototype.unmount = xh.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    oo(function () { ou(null, e, null, null); }), t[Un] = null;
} };
function iu(e) { this._internalRoot = e; }
iu.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = Wg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < sr.length && t !== 0 && t < sr[n].priority; n++)
        ;
    sr.splice(n, 0, e), n === 0 && Gg(e);
} };
function wh(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function au(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function Pm() { }
function M2(e, t, n, r, o) { if (o) {
    if (typeof r == "function") {
        var i = r;
        r = function () { var f = sl(a); i.call(f); };
    }
    var a = p0(t, r, e, 0, null, !1, !1, "", Pm);
    return e._reactRootContainer = a, e[Un] = a.current, ga(e.nodeType === 8 ? e.parentNode : e), oo(), a;
} for (; o = e.lastChild;)
    e.removeChild(o); if (typeof r == "function") {
    var s = r;
    r = function () { var f = sl(l); s.call(f); };
} var l = gh(e, 0, !1, null, null, !1, !1, "", Pm); return e._reactRootContainer = l, e[Un] = l.current, ga(e.nodeType === 8 ? e.parentNode : e), oo(function () { ou(t, l, n, r); }), l; }
function su(e, t, n, r, o) { var i = n._reactRootContainer; if (i) {
    var a = i;
    if (typeof o == "function") {
        var s = o;
        o = function () { var l = sl(a); s.call(l); };
    }
    ou(t, a, e, o);
}
else
    a = M2(n, t, e, o, r); return sl(a); }
qg = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = zi(t.pendingLanes);
            n !== 0 && ($d(t, n | 1), Tt(t, Xe()), !(Ae & 6) && (ri = Xe() + 500, Fr()));
        }
        break;
    case 13: oo(function () { var r = zn(e, 1); if (r !== null) {
        var o = gt();
        an(r, e, 1, o);
    } }), yh(e, 1);
} };
Bd = function (e) { if (e.tag === 13) {
    var t = zn(e, 134217728);
    if (t !== null) {
        var n = gt();
        an(t, e, 134217728, n);
    }
    yh(e, 134217728);
} };
Hg = function (e) { if (e.tag === 13) {
    var t = wr(e), n = zn(e, t);
    if (n !== null) {
        var r = gt();
        an(n, e, t, r);
    }
    yh(e, t);
} };
Wg = function () { return Ie; };
Kg = function (e, t) { var n = Ie; try {
    return Ie = e, t();
}
finally {
    Ie = n;
} };
df = function (e, t, n) { switch (t) {
    case "input":
        if (of(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Ql(r);
                    if (!o)
                        throw Error(oe(90));
                    Sg(r), of(r, o);
                }
            }
        }
        break;
    case "textarea":
        Ng(e, n);
        break;
    case "select": t = n.value, t != null && Do(e, !!n.multiple, t, !1);
} };
Rg = hh;
Ig = oo;
var L2 = { usingClientEntryPoint: !1, Events: [$a, To, Ql, Pg, jg, hh] }, Ii = { findFiberByHostInstance: Gr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, D2 = { bundleType: Ii.bundleType, version: Ii.version, rendererPackageName: Ii.rendererPackageName, rendererConfig: Ii.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Xn.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = Dg(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Ii.findFiberByHostInstance || I2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cs.isDisabled && cs.supportsFiber)
        try {
            Kl = cs.inject(D2), _n = cs;
        }
        catch { }
}
Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L2;
Ut.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!wh(t))
    throw Error(oe(200)); return R2(e, t, null, n); };
Ut.createRoot = function (e, t) { if (!wh(e))
    throw Error(oe(299)); var n = !1, r = "", o = m0; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = gh(e, 1, !1, null, null, n, !1, r, o), e[Un] = t.current, ga(e.nodeType === 8 ? e.parentNode : e), new xh(t); };
Ut.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(oe(188)) : (e = Object.keys(e).join(","), Error(oe(268, e))); return e = Dg(t), e = e === null ? null : e.stateNode, e; };
Ut.flushSync = function (e) { return oo(e); };
Ut.hydrate = function (e, t, n) { if (!au(t))
    throw Error(oe(200)); return su(null, e, t, !0, n); };
Ut.hydrateRoot = function (e, t, n) { if (!wh(e))
    throw Error(oe(405)); var r = n != null && n.hydratedSources || null, o = !1, i = "", a = m0; if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = p0(t, null, e, 1, n ?? null, o, !1, i, a), e[Un] = t.current, ga(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o); return new iu(t); };
Ut.render = function (e, t, n) { if (!au(t))
    throw Error(oe(200)); return su(null, e, t, !1, n); };
Ut.unmountComponentAtNode = function (e) { if (!au(e))
    throw Error(oe(40)); return e._reactRootContainer ? (oo(function () { su(null, null, e, !1, function () { e._reactRootContainer = null, e[Un] = null; }); }), !0) : !1; };
Ut.unstable_batchedUpdates = hh;
Ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!au(n))
    throw Error(oe(200)); if (e == null || e._reactInternals === void 0)
    throw Error(oe(38)); return su(e, t, n, !1, r); };
Ut.version = "18.3.1-next-f1338f8080-20240426";
function v0() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0);
    }
    catch (e) {
        console.error(e);
    } }
v0(), vg.exports = Ut;
var ho = vg.exports;
const g0 = Nd(ho);
var jm = ho;
Qc.createRoot = jm.createRoot, Qc.hydrateRoot = jm.hydrateRoot;
const F2 = { theme: "system", setTheme: () => null }, y0 = E.createContext(F2);
function $2({ children: e, defaultTheme: t = "system", storageKey: n = "vite-ui-theme", ...r }) { const [o, i] = E.useState(() => localStorage.getItem(n) || t); E.useEffect(() => { const s = window.document.documentElement; if (s.classList.remove("light", "dark"), o === "system") {
    const l = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    s.classList.add(l);
    return;
} s.classList.add(o); }, [o]); const a = { theme: o, setTheme: s => { localStorage.setItem(n, s), i(s); } }; return b.jsx(y0.Provider, { ...r, value: a, children: e }); }
const B2 = () => { const e = E.useContext(y0); if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider"); return e; }; /**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Na() { return Na = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Na.apply(this, arguments); }
var hr;
(function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; })(hr || (hr = {}));
const Rm = "popstate";
function U2(e) { e === void 0 && (e = {}); function t(r, o) { let { pathname: i, search: a, hash: s } = r.location; return Hf("", { pathname: i, search: a, hash: s }, o.state && o.state.usr || null, o.state && o.state.key || "default"); } function n(r, o) { return typeof o == "string" ? o : w0(o); } return V2(t, n, null, e); }
function ot(e, t) { if (e === !1 || e === null || typeof e > "u")
    throw new Error(t); }
function x0(e, t) { if (!e) {
    typeof console < "u" && console.warn(t);
    try {
        throw new Error(t);
    }
    catch { }
} }
function z2() { return Math.random().toString(36).substr(2, 8); }
function Im(e, t) { return { usr: e.state, key: e.key, idx: t }; }
function Hf(e, t, n, r) { return n === void 0 && (n = null), Na({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? hi(t) : t, { state: n, key: t && t.key || r || z2() }); }
function w0(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t; }
function hi(e) { let t = {}; if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
} return t; }
function V2(e, t, n, r) { r === void 0 && (r = {}); let { window: o = document.defaultView, v5Compat: i = !1 } = r, a = o.history, s = hr.Pop, l = null, f = h(); f == null && (f = 0, a.replaceState(Na({}, a.state, { idx: f }), "")); function h() { return (a.state || { idx: null }).idx; } function c() { s = hr.Pop; let x = h(), m = x == null ? null : x - f; f = x, l && l({ action: s, location: v.location, delta: m }); } function u(x, m) { s = hr.Push; let d = Hf(v.location, x, m); f = h() + 1; let w = Im(d, f), y = v.createHref(d); try {
    a.pushState(w, "", y);
}
catch (_) {
    if (_ instanceof DOMException && _.name === "DataCloneError")
        throw _;
    o.location.assign(y);
} i && l && l({ action: s, location: v.location, delta: 1 }); } function p(x, m) { s = hr.Replace; let d = Hf(v.location, x, m); f = h(); let w = Im(d, f), y = v.createHref(d); a.replaceState(w, "", y), i && l && l({ action: s, location: v.location, delta: 0 }); } function g(x) { let m = o.location.origin !== "null" ? o.location.origin : o.location.href, d = typeof x == "string" ? x : w0(x); return d = d.replace(/ $/, "%20"), ot(m, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, m); } let v = { get action() { return s; }, get location() { return e(o, a); }, listen(x) { if (l)
        throw new Error("A history only accepts one active listener"); return o.addEventListener(Rm, c), l = x, () => { o.removeEventListener(Rm, c), l = null; }; }, createHref(x) { return t(o, x); }, createURL: g, encodeLocation(x) { let m = g(x); return { pathname: m.pathname, search: m.search, hash: m.hash }; }, push: u, replace: p, go(x) { return a.go(x); } }; return v; }
var Mm;
(function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; })(Mm || (Mm = {}));
function q2(e, t, n) { return n === void 0 && (n = "/"), H2(e, t, n, !1); }
function H2(e, t, n, r) { let o = typeof t == "string" ? hi(t) : t, i = E0(o.pathname || "/", n); if (i == null)
    return null; let a = b0(e); W2(a); let s = null; for (let l = 0; s == null && l < a.length; ++l) {
    let f = rS(i);
    s = tS(a[l], f, r);
} return s; }
function b0(e, t, n, r) { t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""); let o = (i, a, s) => { let l = { relativePath: s === void 0 ? i.path || "" : s, caseSensitive: i.caseSensitive === !0, childrenIndex: a, route: i }; l.relativePath.startsWith("/") && (ot(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length)); let f = Jr([r, l.relativePath]), h = n.concat(l); i.children && i.children.length > 0 && (ot(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + f + '".')), b0(i.children, t, h, f)), !(i.path == null && !i.index) && t.push({ path: f, score: J2(f, i.index), routesMeta: h }); }; return e.forEach((i, a) => { var s; if (i.path === "" || !((s = i.path) != null && s.includes("?")))
    o(i, a);
else
    for (let l of _0(i.path))
        o(i, a, l); }), t; }
function _0(e) { let t = e.split("/"); if (t.length === 0)
    return []; let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, ""); if (r.length === 0)
    return o ? [i, ""] : [i]; let a = _0(r.join("/")), s = []; return s.push(...a.map(l => l === "" ? i : [i, l].join("/"))), o && s.push(...a), s.map(l => e.startsWith("/") && l === "" ? "/" : l); }
function W2(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : eS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))); }
const K2 = /^:[\w-]+$/, G2 = 3, Z2 = 2, Y2 = 1, Q2 = 10, X2 = -2, Lm = e => e === "*";
function J2(e, t) { let n = e.split("/"), r = n.length; return n.some(Lm) && (r += X2), t && (r += Z2), n.filter(o => !Lm(o)).reduce((o, i) => o + (K2.test(i) ? G2 : i === "" ? Y2 : Q2), r); }
function eS(e, t) { return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0; }
function tS(e, t, n) { let { routesMeta: r } = e, o = {}, i = "/", a = []; for (let s = 0; s < r.length; ++s) {
    let l = r[s], f = s === r.length - 1, h = i === "/" ? t : t.slice(i.length) || "/", c = Dm({ path: l.relativePath, caseSensitive: l.caseSensitive, end: f }, h), u = l.route;
    if (!c && f && n && !r[r.length - 1].route.index && (c = Dm({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, h)), !c)
        return null;
    Object.assign(o, c.params), a.push({ params: o, pathname: Jr([i, c.pathname]), pathnameBase: uS(Jr([i, c.pathnameBase])), route: u }), c.pathnameBase !== "/" && (i = Jr([i, c.pathnameBase]));
} return a; }
function Dm(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = nS(e.path, e.caseSensitive, e.end), o = t.match(n); if (!o)
    return null; let i = o[0], a = i.replace(/(.)\/+$/, "$1"), s = o.slice(1); return { params: r.reduce((f, h, c) => { let { paramName: u, isOptional: p } = h; if (u === "*") {
        let v = s[c] || "";
        a = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
    } const g = s[c]; return p && !g ? f[u] = void 0 : f[u] = (g || "").replace(/%2F/g, "/"), f; }, {}), pathname: i, pathnameBase: a, pattern: e }; }
function nS(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !0), x0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, s, l) => (r.push({ paramName: s, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")); return e.endsWith("*") ? (r.push({ paramName: "*" }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]; }
function rS(e) { try {
    return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
}
catch (t) {
    return x0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
} }
function E0(e, t) { if (t === "/")
    return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null; let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/"; }
function oS(e, t) { t === void 0 && (t = "/"); let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? hi(e) : e; return { pathname: n ? n.startsWith("/") ? n : iS(n, t) : t, search: cS(r), hash: fS(o) }; }
function iS(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(o => { o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o); }), n.length > 1 ? n.join("/") : "/"; }
function Oc(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'; }
function aS(e) { return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0); }
function sS(e, t) { let n = aS(e); return t ? n.map((r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase); }
function lS(e, t, n, r) { r === void 0 && (r = !1); let o; typeof e == "string" ? o = hi(e) : (o = Na({}, e), ot(!o.pathname || !o.pathname.includes("?"), Oc("?", "pathname", "search", o)), ot(!o.pathname || !o.pathname.includes("#"), Oc("#", "pathname", "hash", o)), ot(!o.search || !o.search.includes("#"), Oc("#", "search", "hash", o))); let i = e === "" || o.pathname === "", a = i ? "/" : o.pathname, s; if (a == null)
    s = n;
else {
    let c = t.length - 1;
    if (!r && a.startsWith("..")) {
        let u = a.split("/");
        for (; u[0] === "..";)
            u.shift(), c -= 1;
        o.pathname = u.join("/");
    }
    s = c >= 0 ? t[c] : "/";
} let l = oS(o, s), f = a && a !== "/" && a.endsWith("/"), h = (i || a === ".") && n.endsWith("/"); return !l.pathname.endsWith("/") && (f || h) && (l.pathname += "/"), l; }
const Jr = e => e.join("/").replace(/\/\/+/g, "/"), uS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"), cS = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, fS = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function dS(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e; }
const S0 = ["post", "put", "patch", "delete"];
new Set(S0);
const hS = ["get", ...S0];
new Set(hS); /**
* React Router v6.27.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Ca() { return Ca = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Ca.apply(this, arguments); }
const bh = E.createContext(null), pS = E.createContext(null), lu = E.createContext(null), uu = E.createContext(null), pi = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }), k0 = E.createContext(null);
function cu() { return E.useContext(uu) != null; }
function N0() { return cu() || ot(!1), E.useContext(uu).location; }
function C0(e) { E.useContext(lu).static || E.useLayoutEffect(e); }
function _h() { let { isDataRoute: e } = E.useContext(pi); return e ? CS() : mS(); }
function mS() { cu() || ot(!1); let e = E.useContext(bh), { basename: t, future: n, navigator: r } = E.useContext(lu), { matches: o } = E.useContext(pi), { pathname: i } = N0(), a = JSON.stringify(sS(o, n.v7_relativeSplatPath)), s = E.useRef(!1); return C0(() => { s.current = !0; }), E.useCallback(function (f, h) { if (h === void 0 && (h = {}), !s.current)
    return; if (typeof f == "number") {
    r.go(f);
    return;
} let c = lS(f, JSON.parse(a), i, h.relative === "path"); e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Jr([t, c.pathname])), (h.replace ? r.replace : r.push)(c, h.state, h); }, [t, r, a, i, e]); }
function vS(e, t) { return gS(e, t); }
function gS(e, t, n, r) { cu() || ot(!1); let { navigator: o } = E.useContext(lu), { matches: i } = E.useContext(pi), a = i[i.length - 1], s = a ? a.params : {}; a && a.pathname; let l = a ? a.pathnameBase : "/"; a && a.route; let f = N0(), h; if (t) {
    var c;
    let x = typeof t == "string" ? hi(t) : t;
    l === "/" || (c = x.pathname) != null && c.startsWith(l) || ot(!1), h = x;
}
else
    h = f; let u = h.pathname || "/", p = u; if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    p = "/" + u.replace(/^\//, "").split("/").slice(x.length).join("/");
} let g = q2(e, { pathname: p }), v = _S(g && g.map(x => Object.assign({}, x, { params: Object.assign({}, s, x.params), pathname: Jr([l, o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname]), pathnameBase: x.pathnameBase === "/" ? l : Jr([l, o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase]) })), i, n, r); return t && v ? E.createElement(uu.Provider, { value: { location: Ca({ pathname: "/", search: "", hash: "", state: null, key: "default" }, h), navigationType: hr.Pop } }, v) : v; }
function yS() { let e = NS(), t = dS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? E.createElement("pre", { style: o }, n) : null, null); }
const xS = E.createElement(yS, null);
class wS extends E.Component {
    constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error }; }
    static getDerivedStateFromError(t) { return { error: t }; }
    static getDerivedStateFromProps(t, n) { return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation }; }
    componentDidCatch(t, n) { console.error("React Router caught the following error during render", t, n); }
    render() { return this.state.error !== void 0 ? E.createElement(pi.Provider, { value: this.props.routeContext }, E.createElement(k0.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
}
function bS(e) { let { routeContext: t, match: n, children: r } = e, o = E.useContext(bh); return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), E.createElement(pi.Provider, { value: t }, r); }
function _S(e, t, n, r) { var o; if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var i;
    if (!n)
        return null;
    if (n.errors)
        e = n.matches;
    else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
        e = n.matches;
    else
        return null;
} let a = e, s = (o = n) == null ? void 0 : o.errors; if (s != null) {
    let h = a.findIndex(c => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0);
    h >= 0 || ot(!1), a = a.slice(0, Math.min(a.length, h + 1));
} let l = !1, f = -1; if (n && r && r.v7_partialHydration)
    for (let h = 0; h < a.length; h++) {
        let c = a[h];
        if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (f = h), c.route.id) {
            let { loaderData: u, errors: p } = n, g = c.route.loader && u[c.route.id] === void 0 && (!p || p[c.route.id] === void 0);
            if (c.route.lazy || g) {
                l = !0, f >= 0 ? a = a.slice(0, f + 1) : a = [a[0]];
                break;
            }
        }
    } return a.reduceRight((h, c, u) => { let p, g = !1, v = null, x = null; n && (p = s && c.route.id ? s[c.route.id] : void 0, v = c.route.errorElement || xS, l && (f < 0 && u === 0 ? (g = !0, x = null) : f === u && (g = !0, x = c.route.hydrateFallbackElement || null))); let m = t.concat(a.slice(0, u + 1)), d = () => { let w; return p ? w = v : g ? w = x : c.route.Component ? w = E.createElement(c.route.Component, null) : c.route.element ? w = c.route.element : w = h, E.createElement(bS, { match: c, routeContext: { outlet: h, matches: m, isDataRoute: n != null }, children: w }); }; return n && (c.route.ErrorBoundary || c.route.errorElement || u === 0) ? E.createElement(wS, { location: n.location, revalidation: n.revalidation, component: v, error: p, children: d(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : d(); }, null); }
var O0 = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(O0 || {}), ll = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(ll || {});
function ES(e) { let t = E.useContext(bh); return t || ot(!1), t; }
function SS(e) { let t = E.useContext(pS); return t || ot(!1), t; }
function kS(e) { let t = E.useContext(pi); return t || ot(!1), t; }
function T0(e) { let t = kS(), n = t.matches[t.matches.length - 1]; return n.route.id || ot(!1), n.route.id; }
function NS() { var e; let t = E.useContext(k0), n = SS(ll.UseRouteError), r = T0(ll.UseRouteError); return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]; }
function CS() { let { router: e } = ES(O0.UseNavigateStable), t = T0(ll.UseNavigateStable), n = E.useRef(!1); return C0(() => { n.current = !0; }), E.useCallback(function (o, i) { i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ca({ fromRouteId: t }, i))); }, [e, t]); }
function Hr(e) { ot(!1); }
function OS(e) { let { basename: t = "/", children: n = null, location: r, navigationType: o = hr.Pop, navigator: i, static: a = !1, future: s } = e; cu() && ot(!1); let l = t.replace(/^\/*/, "/"), f = E.useMemo(() => ({ basename: l, navigator: i, static: a, future: Ca({ v7_relativeSplatPath: !1 }, s) }), [l, s, i, a]); typeof r == "string" && (r = hi(r)); let { pathname: h = "/", search: c = "", hash: u = "", state: p = null, key: g = "default" } = r, v = E.useMemo(() => { let x = E0(h, l); return x == null ? null : { location: { pathname: x, search: c, hash: u, state: p, key: g }, navigationType: o }; }, [l, h, c, u, p, g, o]); return v == null ? null : E.createElement(lu.Provider, { value: f }, E.createElement(uu.Provider, { children: n, value: v })); }
function TS(e) { let { children: t, location: n } = e; return vS(Wf(t), n); }
new Promise(() => { });
function Wf(e, t) { t === void 0 && (t = []); let n = []; return E.Children.forEach(e, (r, o) => { if (!E.isValidElement(r))
    return; let i = [...t, o]; if (r.type === E.Fragment) {
    n.push.apply(n, Wf(r.props.children, i));
    return;
} r.type !== Hr && ot(!1), !r.props.index || !r.props.children || ot(!1); let a = { id: r.props.id || i.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy }; r.props.children && (a.children = Wf(r.props.children, i)), n.push(a); }), n; } /**
* React Router DOM v6.27.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
const AS = "6";
try {
    window.__reactRouterVersion = AS;
}
catch { }
const PS = "startTransition", Fm = pg[PS];
function jS(e) { let { basename: t, children: n, future: r, window: o } = e, i = E.useRef(); i.current == null && (i.current = U2({ window: o, v5Compat: !0 })); let a = i.current, [s, l] = E.useState({ action: a.action, location: a.location }), { v7_startTransition: f } = r || {}, h = E.useCallback(c => { f && Fm ? Fm(() => l(c)) : l(c); }, [l, f]); return E.useLayoutEffect(() => a.listen(h), [a, h]), E.createElement(OS, { basename: t, children: n, location: s.location, navigationType: s.action, navigator: a, future: r }); }
var $m;
(function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"; })($m || ($m = {}));
var Bm;
(function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; })(Bm || (Bm = {}));
function le(e, t, { checkForDefaultPrevented: n = !0 } = {}) { return function (o) { if (e == null || e(o), n === !1 || !o.defaultPrevented)
    return t == null ? void 0 : t(o); }; }
function RS(e, t) { const n = E.createContext(t), r = i => { const { children: a, ...s } = i, l = E.useMemo(() => s, Object.values(s)); return b.jsx(n.Provider, { value: l, children: a }); }; r.displayName = e + "Provider"; function o(i) { const a = E.useContext(n); if (a)
    return a; if (t !== void 0)
    return t; throw new Error(`\`${i}\` must be used within \`${e}\``); } return [r, o]; }
function $r(e, t = []) { let n = []; function r(i, a) { const s = E.createContext(a), l = n.length; n = [...n, a]; const f = c => { var m; const { scope: u, children: p, ...g } = c, v = ((m = u == null ? void 0 : u[e]) == null ? void 0 : m[l]) || s, x = E.useMemo(() => g, Object.values(g)); return b.jsx(v.Provider, { value: x, children: p }); }; f.displayName = i + "Provider"; function h(c, u) { var v; const p = ((v = u == null ? void 0 : u[e]) == null ? void 0 : v[l]) || s, g = E.useContext(p); if (g)
    return g; if (a !== void 0)
    return a; throw new Error(`\`${c}\` must be used within \`${i}\``); } return [f, h]; } const o = () => { const i = n.map(a => E.createContext(a)); return function (s) { const l = (s == null ? void 0 : s[e]) || i; return E.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]); }; }; return o.scopeName = e, [r, IS(o, ...t)]; }
function IS(...e) { const t = e[0]; if (e.length === 1)
    return t; const n = () => { const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName })); return function (i) { const a = r.reduce((s, { useScope: l, scopeName: f }) => { const c = l(i)[`__scope${f}`]; return { ...s, ...c }; }, {}); return E.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]); }; }; return n.scopeName = t.scopeName, n; }
function MS(e, t = []) { let n = []; function r(i, a) { const s = E.createContext(a), l = n.length; n = [...n, a]; function f(c) { const { scope: u, children: p, ...g } = c, v = (u == null ? void 0 : u[e][l]) || s, x = E.useMemo(() => g, Object.values(g)); return b.jsx(v.Provider, { value: x, children: p }); } function h(c, u) { const p = (u == null ? void 0 : u[e][l]) || s, g = E.useContext(p); if (g)
    return g; if (a !== void 0)
    return a; throw new Error(`\`${c}\` must be used within \`${i}\``); } return f.displayName = i + "Provider", [f, h]; } const o = () => { const i = n.map(a => E.createContext(a)); return function (s) { const l = (s == null ? void 0 : s[e]) || i; return E.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]); }; }; return o.scopeName = e, [r, LS(o, ...t)]; }
function LS(...e) { const t = e[0]; if (e.length === 1)
    return t; const n = () => { const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName })); return function (i) { const a = r.reduce((s, { useScope: l, scopeName: f }) => { const c = l(i)[`__scope${f}`]; return { ...s, ...c }; }, {}); return E.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]); }; }; return n.scopeName = t.scopeName, n; }
function DS(e, t) { typeof e == "function" ? e(t) : e != null && (e.current = t); }
function fu(...e) { return t => e.forEach(n => DS(n, t)); }
function je(...e) { return E.useCallback(fu(...e), e); }
var qn = E.forwardRef((e, t) => { const { children: n, ...r } = e, o = E.Children.toArray(n), i = o.find(FS); if (i) {
    const a = i.props.children, s = o.map(l => l === i ? E.Children.count(a) > 1 ? E.Children.only(null) : E.isValidElement(a) ? a.props.children : null : l);
    return b.jsx(Kf, { ...r, ref: t, children: E.isValidElement(a) ? E.cloneElement(a, void 0, s) : null });
} return b.jsx(Kf, { ...r, ref: t, children: n }); });
qn.displayName = "Slot";
var Kf = E.forwardRef((e, t) => { const { children: n, ...r } = e; if (E.isValidElement(n)) {
    const o = BS(n);
    return E.cloneElement(n, { ...$S(r, n.props), ref: t ? fu(t, o) : o });
} return E.Children.count(n) > 1 ? E.Children.only(null) : null; });
Kf.displayName = "SlotClone";
var A0 = ({ children: e }) => b.jsx(b.Fragment, { children: e });
function FS(e) { return E.isValidElement(e) && e.type === A0; }
function $S(e, t) { const n = { ...t }; for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => { i(...s), o(...s); } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
} return { ...e, ...n }; }
function BS(e) { var r, o; let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning; return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref); }
function Eh(e) { const t = e + "CollectionProvider", [n, r] = MS(t), [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map }), a = p => { const { scope: g, children: v } = p, x = te.useRef(null), m = te.useRef(new Map).current; return b.jsx(o, { scope: g, itemMap: m, collectionRef: x, children: v }); }; a.displayName = t; const s = e + "CollectionSlot", l = te.forwardRef((p, g) => { const { scope: v, children: x } = p, m = i(s, v), d = je(g, m.collectionRef); return b.jsx(qn, { ref: d, children: x }); }); l.displayName = s; const f = e + "CollectionItemSlot", h = "data-radix-collection-item", c = te.forwardRef((p, g) => { const { scope: v, children: x, ...m } = p, d = te.useRef(null), w = je(g, d), y = i(f, v); return te.useEffect(() => (y.itemMap.set(d, { ref: d, ...m }), () => void y.itemMap.delete(d))), b.jsx(qn, { [h]: "", ref: w, children: x }); }); c.displayName = f; function u(p) { const g = i(e + "CollectionConsumer", p); return te.useCallback(() => { const x = g.collectionRef.current; if (!x)
    return []; const m = Array.from(x.querySelectorAll(`[${h}]`)); return Array.from(g.itemMap.values()).sort((y, _) => m.indexOf(y.ref.current) - m.indexOf(_.ref.current)); }, [g.collectionRef, g.itemMap]); } return [{ Provider: a, Slot: l, ItemSlot: c }, u, r]; }
function US(e, t = []) { let n = []; function r(i, a) { const s = E.createContext(a), l = n.length; n = [...n, a]; function f(c) { const { scope: u, children: p, ...g } = c, v = (u == null ? void 0 : u[e][l]) || s, x = E.useMemo(() => g, Object.values(g)); return b.jsx(v.Provider, { value: x, children: p }); } function h(c, u) { const p = (u == null ? void 0 : u[e][l]) || s, g = E.useContext(p); if (g)
    return g; if (a !== void 0)
    return a; throw new Error(`\`${c}\` must be used within \`${i}\``); } return f.displayName = i + "Provider", [f, h]; } const o = () => { const i = n.map(a => E.createContext(a)); return function (s) { const l = (s == null ? void 0 : s[e]) || i; return E.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]); }; }; return o.scopeName = e, [r, zS(o, ...t)]; }
function zS(...e) { const t = e[0]; if (e.length === 1)
    return t; const n = () => { const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName })); return function (i) { const a = r.reduce((s, { useScope: l, scopeName: f }) => { const c = l(i)[`__scope${f}`]; return { ...s, ...c }; }, {}); return E.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]); }; }; return n.scopeName = t.scopeName, n; }
var ct = globalThis != null && globalThis.document ? E.useLayoutEffect : () => { }, VS = pg.useId || (() => { }), qS = 0;
function sn(e) { const [t, n] = E.useState(VS()); return ct(() => { e || n(r => r ?? String(qS++)); }, [e]), e || (t ? `radix-${t}` : ""); }
var HS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], xe = HS.reduce((e, t) => { const n = E.forwardRef((r, o) => { const { asChild: i, ...a } = r, s = i ? qn : t; return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), b.jsx(s, { ...a, ref: o }); }); return n.displayName = `Primitive.${t}`, { ...e, [t]: n }; }, {});
function P0(e, t) { e && ho.flushSync(() => e.dispatchEvent(t)); }
function Bt(e) { const t = E.useRef(e); return E.useEffect(() => { t.current = e; }), E.useMemo(() => (...n) => { var r; return (r = t.current) == null ? void 0 : r.call(t, ...n); }, []); }
function Cr({ prop: e, defaultProp: t, onChange: n = () => { } }) { const [r, o] = WS({ defaultProp: t, onChange: n }), i = e !== void 0, a = i ? e : r, s = Bt(n), l = E.useCallback(f => { if (i) {
    const c = typeof f == "function" ? f(e) : f;
    c !== e && s(c);
}
else
    o(f); }, [i, e, o, s]); return [a, l]; }
function WS({ defaultProp: e, onChange: t }) { const n = E.useState(e), [r] = n, o = E.useRef(r), i = Bt(t); return E.useEffect(() => { o.current !== r && (i(r), o.current = r); }, [r, o, i]), n; }
var KS = E.createContext(void 0);
function du(e) { const t = E.useContext(KS); return e || t || "ltr"; }
var Tc = "rovingFocusGroup.onEntryFocus", GS = { bubbles: !1, cancelable: !0 }, hu = "RovingFocusGroup", [Gf, j0, ZS] = Eh(hu), [YS, pu] = US(hu, [ZS]), [QS, XS] = YS(hu), R0 = E.forwardRef((e, t) => b.jsx(Gf.Provider, { scope: e.__scopeRovingFocusGroup, children: b.jsx(Gf.Slot, { scope: e.__scopeRovingFocusGroup, children: b.jsx(JS, { ...e, ref: t }) }) }));
R0.displayName = hu;
var JS = E.forwardRef((e, t) => { const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: i, currentTabStopId: a, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: l, onEntryFocus: f, preventScrollOnEntryFocus: h = !1, ...c } = e, u = E.useRef(null), p = je(t, u), g = du(i), [v = null, x] = Cr({ prop: a, defaultProp: s, onChange: l }), [m, d] = E.useState(!1), w = Bt(f), y = j0(n), _ = E.useRef(!1), [T, S] = E.useState(0); return E.useEffect(() => { const N = u.current; if (N)
    return N.addEventListener(Tc, w), () => N.removeEventListener(Tc, w); }, [w]), b.jsx(QS, { scope: n, orientation: r, dir: g, loop: o, currentTabStopId: v, onItemFocus: E.useCallback(N => x(N), [x]), onItemShiftTab: E.useCallback(() => d(!0), []), onFocusableItemAdd: E.useCallback(() => S(N => N + 1), []), onFocusableItemRemove: E.useCallback(() => S(N => N - 1), []), children: b.jsx(xe.div, { tabIndex: m || T === 0 ? -1 : 0, "data-orientation": r, ...c, ref: p, style: { outline: "none", ...e.style }, onMouseDown: le(e.onMouseDown, () => { _.current = !0; }), onFocus: le(e.onFocus, N => { const j = !_.current; if (N.target === N.currentTarget && j && !m) {
            const O = new CustomEvent(Tc, GS);
            if (N.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const C = y().filter(q => q.focusable), k = C.find(q => q.active), P = C.find(q => q.id === v), $ = [k, P, ...C].filter(Boolean).map(q => q.ref.current);
                L0($, h);
            }
        } _.current = !1; }), onBlur: le(e.onBlur, () => d(!1)) }) }); }), I0 = "RovingFocusGroupItem", M0 = E.forwardRef((e, t) => { const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: i, ...a } = e, s = sn(), l = i || s, f = XS(I0, n), h = f.currentTabStopId === l, c = j0(n), { onFocusableItemAdd: u, onFocusableItemRemove: p } = f; return E.useEffect(() => { if (r)
    return u(), () => p(); }, [r, u, p]), b.jsx(Gf.ItemSlot, { scope: n, id: l, focusable: r, active: o, children: b.jsx(xe.span, { tabIndex: h ? 0 : -1, "data-orientation": f.orientation, ...a, ref: t, onMouseDown: le(e.onMouseDown, g => { r ? f.onItemFocus(l) : g.preventDefault(); }), onFocus: le(e.onFocus, () => f.onItemFocus(l)), onKeyDown: le(e.onKeyDown, g => { if (g.key === "Tab" && g.shiftKey) {
            f.onItemShiftTab();
            return;
        } if (g.target !== g.currentTarget)
            return; const v = nk(g, f.orientation, f.dir); if (v !== void 0) {
            if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey)
                return;
            g.preventDefault();
            let m = c().filter(d => d.focusable).map(d => d.ref.current);
            if (v === "last")
                m.reverse();
            else if (v === "prev" || v === "next") {
                v === "prev" && m.reverse();
                const d = m.indexOf(g.currentTarget);
                m = f.loop ? rk(m, d + 1) : m.slice(d + 1);
            }
            setTimeout(() => L0(m));
        } }) }) }); });
M0.displayName = I0;
var ek = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function tk(e, t) { return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e; }
function nk(e, t, n) { const r = tk(e.key, n); if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ek[r]; }
function L0(e, t = !1) { const n = document.activeElement; for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n))
        return; }
function rk(e, t) { return e.map((n, r) => e[(t + r) % e.length]); }
var D0 = R0, F0 = M0;
function ok(e, t) { return E.useReducer((n, r) => t[n][r] ?? n, e); }
var fn = e => { const { present: t, children: n } = e, r = ik(t), o = typeof n == "function" ? n({ present: r.isPresent }) : E.Children.only(n), i = je(r.ref, ak(o)); return typeof n == "function" || r.isPresent ? E.cloneElement(o, { ref: i }) : null; };
fn.displayName = "Presence";
function ik(e) { const [t, n] = E.useState(), r = E.useRef({}), o = E.useRef(e), i = E.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = ok(a, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }); return E.useEffect(() => { const f = fs(r.current); i.current = s === "mounted" ? f : "none"; }, [s]), ct(() => { const f = r.current, h = o.current; if (h !== e) {
    const u = i.current, p = fs(f);
    e ? l("MOUNT") : p === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(h && u !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
} }, [e, l]), ct(() => { if (t) {
    let f;
    const h = t.ownerDocument.defaultView ?? window, c = p => { const v = fs(r.current).includes(p.animationName); if (p.target === t && v && (l("ANIMATION_END"), !o.current)) {
        const x = t.style.animationFillMode;
        t.style.animationFillMode = "forwards", f = h.setTimeout(() => { t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x); });
    } }, u = p => { p.target === t && (i.current = fs(r.current)); };
    return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => { h.clearTimeout(f), t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c); };
}
else
    l("ANIMATION_END"); }, [t, l]), { isPresent: ["mounted", "unmountSuspended"].includes(s), ref: E.useCallback(f => { f && (r.current = getComputedStyle(f)), n(f); }, []) }; }
function fs(e) { return (e == null ? void 0 : e.animationName) || "none"; }
function ak(e) { var r, o; let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning; return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref); }
var Sh = "Tabs", [sk, RL] = $r(Sh, [pu]), $0 = pu(), [lk, kh] = sk(Sh), B0 = E.forwardRef((e, t) => { const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: i, orientation: a = "horizontal", dir: s, activationMode: l = "automatic", ...f } = e, h = du(s), [c, u] = Cr({ prop: r, onChange: o, defaultProp: i }); return b.jsx(lk, { scope: n, baseId: sn(), value: c, onValueChange: u, orientation: a, dir: h, activationMode: l, children: b.jsx(xe.div, { dir: h, "data-orientation": a, ...f, ref: t }) }); });
B0.displayName = Sh;
var U0 = "TabsList", z0 = E.forwardRef((e, t) => { const { __scopeTabs: n, loop: r = !0, ...o } = e, i = kh(U0, n), a = $0(n); return b.jsx(D0, { asChild: !0, ...a, orientation: i.orientation, dir: i.dir, loop: r, children: b.jsx(xe.div, { role: "tablist", "aria-orientation": i.orientation, ...o, ref: t }) }); });
z0.displayName = U0;
var V0 = "TabsTrigger", q0 = E.forwardRef((e, t) => { const { __scopeTabs: n, value: r, disabled: o = !1, ...i } = e, a = kh(V0, n), s = $0(n), l = K0(a.baseId, r), f = G0(a.baseId, r), h = r === a.value; return b.jsx(F0, { asChild: !0, ...s, focusable: !o, active: h, children: b.jsx(xe.button, { type: "button", role: "tab", "aria-selected": h, "aria-controls": f, "data-state": h ? "active" : "inactive", "data-disabled": o ? "" : void 0, disabled: o, id: l, ...i, ref: t, onMouseDown: le(e.onMouseDown, c => { !o && c.button === 0 && c.ctrlKey === !1 ? a.onValueChange(r) : c.preventDefault(); }), onKeyDown: le(e.onKeyDown, c => { [" ", "Enter"].includes(c.key) && a.onValueChange(r); }), onFocus: le(e.onFocus, () => { const c = a.activationMode !== "manual"; !h && !o && c && a.onValueChange(r); }) }) }); });
q0.displayName = V0;
var H0 = "TabsContent", W0 = E.forwardRef((e, t) => { const { __scopeTabs: n, value: r, forceMount: o, children: i, ...a } = e, s = kh(H0, n), l = K0(s.baseId, r), f = G0(s.baseId, r), h = r === s.value, c = E.useRef(h); return E.useEffect(() => { const u = requestAnimationFrame(() => c.current = !1); return () => cancelAnimationFrame(u); }, []), b.jsx(fn, { present: o || h, children: ({ present: u }) => b.jsx(xe.div, { "data-state": h ? "active" : "inactive", "data-orientation": s.orientation, role: "tabpanel", "aria-labelledby": l, hidden: !u, id: f, tabIndex: 0, ...a, ref: t, style: { ...e.style, animationDuration: c.current ? "0s" : void 0 }, children: u && i }) }); });
W0.displayName = H0;
function K0(e, t) { return `${e}-trigger-${t}`; }
function G0(e, t) { return `${e}-content-${t}`; }
var uk = B0, Z0 = z0, Y0 = q0, Q0 = W0;
function X0(e) { var t, n, r = ""; if (typeof e == "string" || typeof e == "number")
    r += e;
else if (typeof e == "object")
    if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
            e[t] && (n = X0(e[t])) && (r && (r += " "), r += n);
    }
    else
        for (n in e)
            e[n] && (r && (r += " "), r += n); return r; }
function ck() { for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = X0(e)) && (r && (r += " "), r += t); return r; }
const Nh = "-", fk = e => { const t = hk(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e; return { getClassGroupId: a => { const s = a.split(Nh); return s[0] === "" && s.length !== 1 && s.shift(), J0(s, t) || dk(a); }, getConflictingClassGroupIds: (a, s) => { const l = n[a] || []; return s && r[a] ? [...l, ...r[a]] : l; } }; }, J0 = (e, t) => { var a; if (e.length === 0)
    return t.classGroupId; const n = e[0], r = t.nextPart.get(n), o = r ? J0(e.slice(1), r) : void 0; if (o)
    return o; if (t.validators.length === 0)
    return; const i = e.join(Nh); return (a = t.validators.find(({ validator: s }) => s(i))) == null ? void 0 : a.classGroupId; }, Um = /^\[(.+)\]$/, dk = e => { if (Um.test(e)) {
    const t = Um.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
        return "arbitrary.." + n;
} }, hk = e => { const { theme: t, prefix: n } = e, r = { nextPart: new Map, validators: [] }; return mk(Object.entries(e.classGroups), n).forEach(([i, a]) => { Zf(a, r, i, t); }), r; }, Zf = (e, t, n, r) => { e.forEach(o => { if (typeof o == "string") {
    const i = o === "" ? t : zm(t, o);
    i.classGroupId = n;
    return;
} if (typeof o == "function") {
    if (pk(o)) {
        Zf(o(r), t, n, r);
        return;
    }
    t.validators.push({ validator: o, classGroupId: n });
    return;
} Object.entries(o).forEach(([i, a]) => { Zf(a, zm(t, i), n, r); }); }); }, zm = (e, t) => { let n = e; return t.split(Nh).forEach(r => { n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map, validators: [] }), n = n.nextPart.get(r); }), n; }, pk = e => e.isThemeGetter, mk = (e, t) => t ? e.map(([n, r]) => { const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i); return [n, o]; }) : e, vk = e => { if (e < 1)
    return { get: () => { }, set: () => { } }; let t = 0, n = new Map, r = new Map; const o = (i, a) => { n.set(i, a), t++, t > e && (t = 0, r = n, n = new Map); }; return { get(i) { let a = n.get(i); if (a !== void 0)
        return a; if ((a = r.get(i)) !== void 0)
        return o(i, a), a; }, set(i, a) { n.has(i) ? n.set(i, a) : o(i, a); } }; }, e1 = "!", gk = e => { const { separator: t, experimentalParseClassName: n } = e, r = t.length === 1, o = t[0], i = t.length, a = s => { const l = []; let f = 0, h = 0, c; for (let x = 0; x < s.length; x++) {
    let m = s[x];
    if (f === 0) {
        if (m === o && (r || s.slice(x, x + i) === t)) {
            l.push(s.slice(h, x)), h = x + i;
            continue;
        }
        if (m === "/") {
            c = x;
            continue;
        }
    }
    m === "[" ? f++ : m === "]" && f--;
} const u = l.length === 0 ? s : s.substring(h), p = u.startsWith(e1), g = p ? u.substring(1) : u, v = c && c > h ? c - h : void 0; return { modifiers: l, hasImportantModifier: p, baseClassName: g, maybePostfixModifierPosition: v }; }; return n ? s => n({ className: s, parseClassName: a }) : a; }, yk = e => { if (e.length <= 1)
    return e; const t = []; let n = []; return e.forEach(r => { r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r); }), t.push(...n.sort()), t; }, xk = e => ({ cache: vk(e.cacheSize), parseClassName: gk(e), ...fk(e) }), wk = /\s+/, bk = (e, t) => { const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t, i = [], a = e.trim().split(wk); let s = ""; for (let l = a.length - 1; l >= 0; l -= 1) {
    const f = a[l], { modifiers: h, hasImportantModifier: c, baseClassName: u, maybePostfixModifierPosition: p } = n(f);
    let g = !!p, v = r(g ? u.substring(0, p) : u);
    if (!v) {
        if (!g) {
            s = f + (s.length > 0 ? " " + s : s);
            continue;
        }
        if (v = r(u), !v) {
            s = f + (s.length > 0 ? " " + s : s);
            continue;
        }
        g = !1;
    }
    const x = yk(h).join(":"), m = c ? x + e1 : x, d = m + v;
    if (i.includes(d))
        continue;
    i.push(d);
    const w = o(v, g);
    for (let y = 0; y < w.length; ++y) {
        const _ = w[y];
        i.push(m + _);
    }
    s = f + (s.length > 0 ? " " + s : s);
} return s; };
function _k() { let e = 0, t, n, r = ""; for (; e < arguments.length;)
    (t = arguments[e++]) && (n = t1(t)) && (r && (r += " "), r += n); return r; }
const t1 = e => { if (typeof e == "string")
    return e; let t, n = ""; for (let r = 0; r < e.length; r++)
    e[r] && (t = t1(e[r])) && (n && (n += " "), n += t); return n; };
function Ek(e, ...t) { let n, r, o, i = a; function a(l) { const f = t.reduce((h, c) => c(h), e()); return n = xk(f), r = n.cache.get, o = n.cache.set, i = s, s(l); } function s(l) { const f = r(l); if (f)
    return f; const h = bk(l, n); return o(l, h), h; } return function () { return i(_k.apply(null, arguments)); }; }
const Ue = e => { const t = n => n[e] || []; return t.isThemeGetter = !0, t; }, n1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, Sk = /^\d+\/\d+$/, kk = new Set(["px", "full", "screen"]), Nk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ck = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ok = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Tk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ak = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, On = e => Vo(e) || kk.has(e) || Sk.test(e), nr = e => mi(e, "length", Fk), Vo = e => !!e && !Number.isNaN(Number(e)), Ac = e => mi(e, "number", Vo), Mi = e => !!e && Number.isInteger(Number(e)), Pk = e => e.endsWith("%") && Vo(e.slice(0, -1)), _e = e => n1.test(e), rr = e => Nk.test(e), jk = new Set(["length", "size", "percentage"]), Rk = e => mi(e, jk, r1), Ik = e => mi(e, "position", r1), Mk = new Set(["image", "url"]), Lk = e => mi(e, Mk, Bk), Dk = e => mi(e, "", $k), Li = () => !0, mi = (e, t, n) => { const r = n1.exec(e); return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1; }, Fk = e => Ck.test(e) && !Ok.test(e), r1 = () => !1, $k = e => Tk.test(e), Bk = e => Ak.test(e), Uk = () => { const e = Ue("colors"), t = Ue("spacing"), n = Ue("blur"), r = Ue("brightness"), o = Ue("borderColor"), i = Ue("borderRadius"), a = Ue("borderSpacing"), s = Ue("borderWidth"), l = Ue("contrast"), f = Ue("grayscale"), h = Ue("hueRotate"), c = Ue("invert"), u = Ue("gap"), p = Ue("gradientColorStops"), g = Ue("gradientColorStopPositions"), v = Ue("inset"), x = Ue("margin"), m = Ue("opacity"), d = Ue("padding"), w = Ue("saturate"), y = Ue("scale"), _ = Ue("sepia"), T = Ue("skew"), S = Ue("space"), N = Ue("translate"), j = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", _e, t], k = () => [_e, t], P = () => ["", On, nr], R = () => ["auto", Vo, _e], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", _e], D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [Vo, _e]; return { cacheSize: 500, separator: ":", theme: { colors: [Li], spacing: [On, nr], blur: ["none", "", rr, _e], brightness: A(), borderColor: [e], borderRadius: ["none", "", "full", rr, _e], borderSpacing: k(), borderWidth: P(), contrast: A(), grayscale: F(), hueRotate: A(), invert: F(), gap: k(), gradientColorStops: [e], gradientColorStopPositions: [Pk, nr], inset: C(), margin: C(), opacity: A(), padding: k(), saturate: A(), scale: A(), sepia: F(), skew: A(), space: k(), translate: k() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", _e] }], container: ["container"], columns: [{ columns: [rr] }], "break-after": [{ "break-after": D() }], "break-before": [{ "break-before": D() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...$(), _e] }], overflow: [{ overflow: O() }], "overflow-x": [{ "overflow-x": O() }], "overflow-y": [{ "overflow-y": O() }], overscroll: [{ overscroll: j() }], "overscroll-x": [{ "overscroll-x": j() }], "overscroll-y": [{ "overscroll-y": j() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [v] }], "inset-x": [{ "inset-x": [v] }], "inset-y": [{ "inset-y": [v] }], start: [{ start: [v] }], end: [{ end: [v] }], top: [{ top: [v] }], right: [{ right: [v] }], bottom: [{ bottom: [v] }], left: [{ left: [v] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", Mi, _e] }], basis: [{ basis: C() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", _e] }], grow: [{ grow: F() }], shrink: [{ shrink: F() }], order: [{ order: ["first", "last", "none", Mi, _e] }], "grid-cols": [{ "grid-cols": [Li] }], "col-start-end": [{ col: ["auto", { span: ["full", Mi, _e] }, _e] }], "col-start": [{ "col-start": R() }], "col-end": [{ "col-end": R() }], "grid-rows": [{ "grid-rows": [Li] }], "row-start-end": [{ row: ["auto", { span: [Mi, _e] }, _e] }], "row-start": [{ "row-start": R() }], "row-end": [{ "row-end": R() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", _e] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", _e] }], gap: [{ gap: [u] }], "gap-x": [{ "gap-x": [u] }], "gap-y": [{ "gap-y": [u] }], "justify-content": [{ justify: ["normal", ...V()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...V(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...V(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [d] }], px: [{ px: [d] }], py: [{ py: [d] }], ps: [{ ps: [d] }], pe: [{ pe: [d] }], pt: [{ pt: [d] }], pr: [{ pr: [d] }], pb: [{ pb: [d] }], pl: [{ pl: [d] }], m: [{ m: [x] }], mx: [{ mx: [x] }], my: [{ my: [x] }], ms: [{ ms: [x] }], me: [{ me: [x] }], mt: [{ mt: [x] }], mr: [{ mr: [x] }], mb: [{ mb: [x] }], ml: [{ ml: [x] }], "space-x": [{ "space-x": [S] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [S] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", _e, t] }], "min-w": [{ "min-w": [_e, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [_e, t, "none", "full", "min", "max", "fit", "prose", { screen: [rr] }, rr] }], h: [{ h: [_e, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [_e, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [_e, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [_e, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", rr, nr] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ac] }], "font-family": [{ font: [Li] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", _e] }], "line-clamp": [{ "line-clamp": ["none", Vo, Ac] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", On, _e] }], "list-image": [{ "list-image": ["none", _e] }], "list-style-type": [{ list: ["none", "disc", "decimal", _e] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e] }], "placeholder-opacity": [{ "placeholder-opacity": [m] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e] }], "text-opacity": [{ "text-opacity": [m] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...q(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", On, nr] }], "underline-offset": [{ "underline-offset": ["auto", On, _e] }], "text-decoration-color": [{ decoration: [e] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: k() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _e] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", _e] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [m] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...$(), Ik] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", Rk] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Lk] }], "bg-color": [{ bg: [e] }], "gradient-from-pos": [{ from: [g] }], "gradient-via-pos": [{ via: [g] }], "gradient-to-pos": [{ to: [g] }], "gradient-from": [{ from: [p] }], "gradient-via": [{ via: [p] }], "gradient-to": [{ to: [p] }], rounded: [{ rounded: [i] }], "rounded-s": [{ "rounded-s": [i] }], "rounded-e": [{ "rounded-e": [i] }], "rounded-t": [{ "rounded-t": [i] }], "rounded-r": [{ "rounded-r": [i] }], "rounded-b": [{ "rounded-b": [i] }], "rounded-l": [{ "rounded-l": [i] }], "rounded-ss": [{ "rounded-ss": [i] }], "rounded-se": [{ "rounded-se": [i] }], "rounded-ee": [{ "rounded-ee": [i] }], "rounded-es": [{ "rounded-es": [i] }], "rounded-tl": [{ "rounded-tl": [i] }], "rounded-tr": [{ "rounded-tr": [i] }], "rounded-br": [{ "rounded-br": [i] }], "rounded-bl": [{ "rounded-bl": [i] }], "border-w": [{ border: [s] }], "border-w-x": [{ "border-x": [s] }], "border-w-y": [{ "border-y": [s] }], "border-w-s": [{ "border-s": [s] }], "border-w-e": [{ "border-e": [s] }], "border-w-t": [{ "border-t": [s] }], "border-w-r": [{ "border-r": [s] }], "border-w-b": [{ "border-b": [s] }], "border-w-l": [{ "border-l": [s] }], "border-opacity": [{ "border-opacity": [m] }], "border-style": [{ border: [...q(), "hidden"] }], "divide-x": [{ "divide-x": [s] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [s] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [m] }], "divide-style": [{ divide: q() }], "border-color": [{ border: [o] }], "border-color-x": [{ "border-x": [o] }], "border-color-y": [{ "border-y": [o] }], "border-color-s": [{ "border-s": [o] }], "border-color-e": [{ "border-e": [o] }], "border-color-t": [{ "border-t": [o] }], "border-color-r": [{ "border-r": [o] }], "border-color-b": [{ "border-b": [o] }], "border-color-l": [{ "border-l": [o] }], "divide-color": [{ divide: [o] }], "outline-style": [{ outline: ["", ...q()] }], "outline-offset": [{ "outline-offset": [On, _e] }], "outline-w": [{ outline: [On, nr] }], "outline-color": [{ outline: [e] }], "ring-w": [{ ring: P() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e] }], "ring-opacity": [{ "ring-opacity": [m] }], "ring-offset-w": [{ "ring-offset": [On, nr] }], "ring-offset-color": [{ "ring-offset": [e] }], shadow: [{ shadow: ["", "inner", "none", rr, Dk] }], "shadow-color": [{ shadow: [Li] }], opacity: [{ opacity: [m] }], "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": H() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [n] }], brightness: [{ brightness: [r] }], contrast: [{ contrast: [l] }], "drop-shadow": [{ "drop-shadow": ["", "none", rr, _e] }], grayscale: [{ grayscale: [f] }], "hue-rotate": [{ "hue-rotate": [h] }], invert: [{ invert: [c] }], saturate: [{ saturate: [w] }], sepia: [{ sepia: [_] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [n] }], "backdrop-brightness": [{ "backdrop-brightness": [r] }], "backdrop-contrast": [{ "backdrop-contrast": [l] }], "backdrop-grayscale": [{ "backdrop-grayscale": [f] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }], "backdrop-invert": [{ "backdrop-invert": [c] }], "backdrop-opacity": [{ "backdrop-opacity": [m] }], "backdrop-saturate": [{ "backdrop-saturate": [w] }], "backdrop-sepia": [{ "backdrop-sepia": [_] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", _e] }], duration: [{ duration: A() }], ease: [{ ease: ["linear", "in", "out", "in-out", _e] }], delay: [{ delay: A() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", _e] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [y] }], "scale-x": [{ "scale-x": [y] }], "scale-y": [{ "scale-y": [y] }], rotate: [{ rotate: [Mi, _e] }], "translate-x": [{ "translate-x": [N] }], "translate-y": [{ "translate-y": [N] }], "skew-x": [{ "skew-x": [T] }], "skew-y": [{ "skew-y": [T] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _e] }], accent: [{ accent: ["auto", e] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _e] }], "caret-color": [{ caret: [e] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": k() }], "scroll-mx": [{ "scroll-mx": k() }], "scroll-my": [{ "scroll-my": k() }], "scroll-ms": [{ "scroll-ms": k() }], "scroll-me": [{ "scroll-me": k() }], "scroll-mt": [{ "scroll-mt": k() }], "scroll-mr": [{ "scroll-mr": k() }], "scroll-mb": [{ "scroll-mb": k() }], "scroll-ml": [{ "scroll-ml": k() }], "scroll-p": [{ "scroll-p": k() }], "scroll-px": [{ "scroll-px": k() }], "scroll-py": [{ "scroll-py": k() }], "scroll-ps": [{ "scroll-ps": k() }], "scroll-pe": [{ "scroll-pe": k() }], "scroll-pt": [{ "scroll-pt": k() }], "scroll-pr": [{ "scroll-pr": k() }], "scroll-pb": [{ "scroll-pb": k() }], "scroll-pl": [{ "scroll-pl": k() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", _e] }], fill: [{ fill: [e, "none"] }], "stroke-w": [{ stroke: [On, nr, Ac] }], stroke: [{ stroke: [e, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } }; }, zk = Ek(Uk);
function ge(...e) { return zk(ck(e)); }
const Ch = uk, mu = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Z0, { ref: n, className: ge("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", e), ...t }));
mu.displayName = Z0.displayName;
const _r = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Y0, { ref: n, className: ge("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", e), ...t }));
_r.displayName = Y0.displayName;
const Er = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Q0, { ref: n, className: ge("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e), ...t }));
Er.displayName = Q0.displayName;
function o1(e) { var t, n, r = ""; if (typeof e == "string" || typeof e == "number")
    r += e;
else if (typeof e == "object")
    if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
            e[t] && (n = o1(e[t])) && (r && (r += " "), r += n);
    else
        for (t in e)
            e[t] && (r && (r += " "), r += t); return r; }
function Vk() { for (var e, t, n = 0, r = ""; n < arguments.length;)
    (e = arguments[n++]) && (t = o1(e)) && (r && (r += " "), r += t); return r; }
const Vm = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, qm = Vk, Oh = (e, t) => n => { var r; if ((t == null ? void 0 : t.variants) == null)
    return qm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className); const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map(f => { const h = n == null ? void 0 : n[f], c = i == null ? void 0 : i[f]; if (h === null)
    return null; const u = Vm(h) || Vm(c); return o[f][u]; }), s = n && Object.entries(n).reduce((f, h) => { let [c, u] = h; return u === void 0 || (f[c] = u), f; }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((f, h) => { let { class: c, className: u, ...p } = h; return Object.entries(p).every(g => { let [v, x] = g; return Array.isArray(x) ? x.includes({ ...i, ...s }[v]) : { ...i, ...s }[v] === x; }) ? [...f, c, u] : f; }, []); return qm(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className); }, qk = Oh("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline", warning: "text-orange-500" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), Re = E.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => { const a = r ? qn : "button"; return b.jsx(a, { className: ge(qk({ variant: t, size: n, className: e })), ref: i, ...o }); });
Re.displayName = "Button";
const Or = E.forwardRef(({ className: e, ...t }, n) => b.jsx("div", { ref: n, className: ge("rounded-xl border bg-card text-card-foreground shadow", e), ...t }));
Or.displayName = "Card";
const Tr = E.forwardRef(({ className: e, ...t }, n) => b.jsx("div", { ref: n, className: ge("flex flex-col space-y-1.5 p-6", e), ...t }));
Tr.displayName = "CardHeader";
const oi = E.forwardRef(({ className: e, ...t }, n) => b.jsx("h3", { ref: n, className: ge("font-semibold leading-none tracking-tight", e), ...t }));
oi.displayName = "CardTitle";
const Oa = E.forwardRef(({ className: e, ...t }, n) => b.jsx("p", { ref: n, className: ge("text-sm text-muted-foreground", e), ...t }));
Oa.displayName = "CardDescription";
const Ar = E.forwardRef(({ className: e, ...t }, n) => b.jsx("div", { ref: n, className: ge("p-6 pt-0", e), ...t }));
Ar.displayName = "CardContent";
const vu = E.forwardRef(({ className: e, ...t }, n) => b.jsx("div", { ref: n, className: ge("flex items-center p-6 pt-0", e), ...t }));
vu.displayName = "CardFooter";
const Fn = E.forwardRef(({ className: e, type: t, ...n }, r) => b.jsx("input", { type: t, className: ge("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e), ref: r, ...n }));
Fn.displayName = "Input";
var Hk = "Label", i1 = E.forwardRef((e, t) => b.jsx(xe.label, { ...e, ref: t, onMouseDown: n => { var o; n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault()); } }));
i1.displayName = Hk;
var a1 = i1;
const Wk = Oh("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), Sr = E.forwardRef(({ className: e, ...t }, n) => b.jsx(a1, { ref: n, className: ge(Wk(), e), ...t }));
Sr.displayName = a1.displayName;
var Ua = e => e.type === "checkbox", Lo = e => e instanceof Date, vt = e => e == null;
const s1 = e => typeof e == "object";
var et = e => !vt(e) && !Array.isArray(e) && s1(e) && !Lo(e), l1 = e => et(e) && e.target ? Ua(e.target) ? e.target.checked : e.target.value : e, Kk = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, u1 = (e, t) => e.has(Kk(t)), Gk = e => { const t = e.constructor && e.constructor.prototype; return et(t) && t.hasOwnProperty("isPrototypeOf"); }, Th = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Et(e) { let t; const n = Array.isArray(e); if (e instanceof Date)
    t = new Date(e);
else if (e instanceof Set)
    t = new Set(e);
else if (!(Th && (e instanceof Blob || e instanceof FileList)) && (n || et(e)))
    if (t = n ? [] : {}, !n && !Gk(e))
        t = e;
    else
        for (const r in e)
            e.hasOwnProperty(r) && (t[r] = Et(e[r]));
else
    return e; return t; }
var gu = e => Array.isArray(e) ? e.filter(Boolean) : [], Qe = e => e === void 0, ae = (e, t, n) => { if (!t || !et(e))
    return n; const r = gu(t.split(/[,[\].]+?/)).reduce((o, i) => vt(o) ? o : o[i], e); return Qe(r) || r === e ? Qe(e[t]) ? n : e[t] : r; }, Vt = e => typeof e == "boolean", Ah = e => /^\w*$/.test(e), c1 = e => gu(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Pe = (e, t, n) => { let r = -1; const o = Ah(t) ? [t] : c1(t), i = o.length, a = i - 1; for (; ++r < i;) {
    const s = o[r];
    let l = n;
    if (r !== a) {
        const f = e[s];
        l = et(f) || Array.isArray(f) ? f : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__")
        return;
    e[s] = l, e = e[s];
} return e; };
const ul = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" }, rn = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" }, Tn = { max: "max", min: "min", maxLength: "maxLength", minLength: "minLength", pattern: "pattern", required: "required", validate: "validate" }, f1 = te.createContext(null), yu = () => te.useContext(f1), Zk = e => { const { children: t, ...n } = e; return te.createElement(f1.Provider, { value: n }, t); };
var d1 = (e, t, n, r = !0) => { const o = { defaultValues: t._defaultValues }; for (const i in e)
    Object.defineProperty(o, i, { get: () => { const a = i; return t._proxyFormState[a] !== rn.all && (t._proxyFormState[a] = !r || rn.all), n && (n[a] = !0), e[a]; } }); return o; }, St = e => et(e) && !Object.keys(e).length, h1 = (e, t, n, r) => { n(e); const { name: o, ...i } = e; return St(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find(a => t[a] === (!r || rn.all)); }, oa = e => Array.isArray(e) ? e : [e], p1 = (e, t, n) => !e || !t || e === t || oa(e).some(r => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Ph(e) { const t = te.useRef(e); t.current = e, te.useEffect(() => { const n = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next }); return () => { n && n.unsubscribe(); }; }, [e.disabled]); }
function Yk(e) { const t = yu(), { control: n = t.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = te.useState(n._formState), l = te.useRef(!0), f = te.useRef({ isDirty: !1, isLoading: !1, dirtyFields: !1, touchedFields: !1, validatingFields: !1, isValidating: !1, isValid: !1, errors: !1 }), h = te.useRef(o); return h.current = o, Ph({ disabled: r, next: c => l.current && p1(h.current, c.name, i) && h1(c, f.current, n._updateFormState) && s({ ...n._formState, ...c }), subject: n._subjects.state }), te.useEffect(() => (l.current = !0, f.current.isValid && n._updateValid(!0), () => { l.current = !1; }), [n]), d1(a, n, f.current, !1); }
var bn = e => typeof e == "string", m1 = (e, t, n, r, o) => bn(e) ? (r && t.watch.add(e), ae(n, e, o)) : Array.isArray(e) ? e.map(i => (r && t.watch.add(i), ae(n, i))) : (r && (t.watchAll = !0), n);
function Qk(e) { const t = yu(), { control: n = t.control, name: r, defaultValue: o, disabled: i, exact: a } = e || {}, s = te.useRef(r); s.current = r, Ph({ disabled: i, subject: n._subjects.values, next: h => { p1(s.current, h.name, a) && f(Et(m1(s.current, n._names, h.values || n._formValues, !1, o))); } }); const [l, f] = te.useState(n._getWatch(r, o)); return te.useEffect(() => n._removeUnmounted()), l; }
function Xk(e) { const t = yu(), { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e, a = u1(o._names.array, n), s = Qk({ control: o, name: n, defaultValue: ae(o._formValues, n, ae(o._defaultValues, n, e.defaultValue)), exact: !0 }), l = Yk({ control: o, name: n, exact: !0 }), f = te.useRef(o.register(n, { ...e.rules, value: s, ...Vt(e.disabled) ? { disabled: e.disabled } : {} })); return te.useEffect(() => { const h = o._options.shouldUnregister || i, c = (u, p) => { const g = ae(o._fields, u); g && g._f && (g._f.mount = p); }; if (c(n, !0), h) {
    const u = Et(ae(o._options.defaultValues, n));
    Pe(o._defaultValues, n, u), Qe(ae(o._formValues, n)) && Pe(o._formValues, n, u);
} return () => { (a ? h && !o._state.action : h) ? o.unregister(n) : c(n, !1); }; }, [n, o, a, i]), te.useEffect(() => { ae(o._fields, n) && o._updateDisabledField({ disabled: r, fields: o._fields, name: n, value: ae(o._fields, n)._f.value }); }, [r, n, o]), { field: { name: n, value: s, ...Vt(r) || l.disabled ? { disabled: l.disabled || r } : {}, onChange: te.useCallback(h => f.current.onChange({ target: { value: l1(h), name: n }, type: ul.CHANGE }), [n]), onBlur: te.useCallback(() => f.current.onBlur({ target: { value: ae(o._formValues, n), name: n }, type: ul.BLUR }), [n, o]), ref: te.useCallback(h => { const c = ae(o._fields, n); c && h && (c._f.ref = { focus: () => h.focus(), select: () => h.select(), setCustomValidity: u => h.setCustomValidity(u), reportValidity: () => h.reportValidity() }); }, [o._fields, n]) }, formState: l, fieldState: Object.defineProperties({}, { invalid: { enumerable: !0, get: () => !!ae(l.errors, n) }, isDirty: { enumerable: !0, get: () => !!ae(l.dirtyFields, n) }, isTouched: { enumerable: !0, get: () => !!ae(l.touchedFields, n) }, isValidating: { enumerable: !0, get: () => !!ae(l.validatingFields, n) }, error: { enumerable: !0, get: () => ae(l.errors, n) } }) }; }
const Jk = e => e.render(Xk(e));
var v1 = (e, t, n, r, o) => t ? { ...n[e], types: { ...n[e] && n[e].types ? n[e].types : {}, [r]: o || !0 } } : {}, Hm = e => ({ isOnSubmit: !e || e === rn.onSubmit, isOnBlur: e === rn.onBlur, isOnChange: e === rn.onChange, isOnAll: e === rn.all, isOnTouch: e === rn.onTouched }), Wm = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const ia = (e, t, n, r) => { for (const o of n || Object.keys(e)) {
    const i = ae(e, o);
    if (i) {
        const { _f: a, ...s } = i;
        if (a) {
            if (a.refs && a.refs[0] && t(a.refs[0], o) && !r)
                return !0;
            if (a.ref && t(a.ref, a.name) && !r)
                return !0;
            if (ia(s, t))
                break;
        }
        else if (et(s) && ia(s, t))
            break;
    }
} };
var eN = (e, t, n) => { const r = oa(ae(e, n)); return Pe(r, "root", t[n]), Pe(e, n, r), e; }, jh = e => e.type === "file", Mn = e => typeof e == "function", cl = e => { if (!Th)
    return !1; const t = e ? e.ownerDocument : 0; return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement); }, js = e => bn(e), Rh = e => e.type === "radio", fl = e => e instanceof RegExp;
const Km = { value: !1, isValid: !1 }, Gm = { value: !0, isValid: !0 };
var g1 = e => { if (Array.isArray(e)) {
    if (e.length > 1) {
        const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
        return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? e[0].attributes && !Qe(e[0].attributes.value) ? Qe(e[0].value) || e[0].value === "" ? Gm : { value: e[0].value, isValid: !0 } : Gm : Km;
} return Km; };
const Zm = { isValid: !1, value: null };
var y1 = e => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t, Zm) : Zm;
function Ym(e, t, n = "validate") { if (js(e) || Array.isArray(e) && e.every(js) || Vt(e) && !e)
    return { type: n, message: js(e) ? e : "", ref: t }; }
var xo = e => et(e) && !fl(e) ? e : { value: e, message: "" }, Qm = async (e, t, n, r, o) => { const { ref: i, refs: a, required: s, maxLength: l, minLength: f, min: h, max: c, pattern: u, validate: p, name: g, valueAsNumber: v, mount: x, disabled: m } = e._f, d = ae(t, g); if (!x || m)
    return {}; const w = a ? a[0] : i, y = k => { r && w.reportValidity && (w.setCustomValidity(Vt(k) ? "" : k || ""), w.reportValidity()); }, _ = {}, T = Rh(i), S = Ua(i), N = T || S, j = (v || jh(i)) && Qe(i.value) && Qe(d) || cl(i) && i.value === "" || d === "" || Array.isArray(d) && !d.length, O = v1.bind(null, g, n, _), C = (k, P, R, $ = Tn.maxLength, q = Tn.minLength) => { const H = k ? P : R; _[g] = { type: k ? $ : q, message: H, ref: i, ...O(k ? $ : q, H) }; }; if (o ? !Array.isArray(d) || !d.length : s && (!N && (j || vt(d)) || Vt(d) && !d || S && !g1(a).isValid || T && !y1(a).isValid)) {
    const { value: k, message: P } = js(s) ? { value: !!s, message: s } : xo(s);
    if (k && (_[g] = { type: Tn.required, message: P, ref: w, ...O(Tn.required, P) }, !n))
        return y(P), _;
} if (!j && (!vt(h) || !vt(c))) {
    let k, P;
    const R = xo(c), $ = xo(h);
    if (!vt(d) && !isNaN(d)) {
        const q = i.valueAsNumber || d && +d;
        vt(R.value) || (k = q > R.value), vt($.value) || (P = q < $.value);
    }
    else {
        const q = i.valueAsDate || new Date(d), H = D => new Date(new Date().toDateString() + " " + D), V = i.type == "time", F = i.type == "week";
        bn(R.value) && d && (k = V ? H(d) > H(R.value) : F ? d > R.value : q > new Date(R.value)), bn($.value) && d && (P = V ? H(d) < H($.value) : F ? d < $.value : q < new Date($.value));
    }
    if ((k || P) && (C(!!k, R.message, $.message, Tn.max, Tn.min), !n))
        return y(_[g].message), _;
} if ((l || f) && !j && (bn(d) || o && Array.isArray(d))) {
    const k = xo(l), P = xo(f), R = !vt(k.value) && d.length > +k.value, $ = !vt(P.value) && d.length < +P.value;
    if ((R || $) && (C(R, k.message, P.message), !n))
        return y(_[g].message), _;
} if (u && !j && bn(d)) {
    const { value: k, message: P } = xo(u);
    if (fl(k) && !d.match(k) && (_[g] = { type: Tn.pattern, message: P, ref: i, ...O(Tn.pattern, P) }, !n))
        return y(P), _;
} if (p) {
    if (Mn(p)) {
        const k = await p(d, t), P = Ym(k, w);
        if (P && (_[g] = { ...P, ...O(Tn.validate, P.message) }, !n))
            return y(P.message), _;
    }
    else if (et(p)) {
        let k = {};
        for (const P in p) {
            if (!St(k) && !n)
                break;
            const R = Ym(await p[P](d, t), w, P);
            R && (k = { ...R, ...O(P, R.message) }, y(R.message), n && (_[g] = k));
        }
        if (!St(k) && (_[g] = { ref: w, ...k }, !n))
            return _;
    }
} return y(!0), _; };
function tN(e, t) { const n = t.slice(0, -1).length; let r = 0; for (; r < n;)
    e = Qe(e) ? r++ : e[t[r++]]; return e; }
function nN(e) { for (const t in e)
    if (e.hasOwnProperty(t) && !Qe(e[t]))
        return !1; return !0; }
function tt(e, t) { const n = Array.isArray(t) ? t : Ah(t) ? [t] : c1(t), r = n.length === 1 ? e : tN(e, n), o = n.length - 1, i = n[o]; return r && delete r[i], o !== 0 && (et(r) && St(r) || Array.isArray(r) && nN(r)) && tt(e, n.slice(0, -1)), e; }
var Pc = () => { let e = []; return { get observers() { return e; }, next: o => { for (const i of e)
        i.next && i.next(o); }, subscribe: o => (e.push(o), { unsubscribe: () => { e = e.filter(i => i !== o); } }), unsubscribe: () => { e = []; } }; }, dl = e => vt(e) || !s1(e);
function ur(e, t) { if (dl(e) || dl(t))
    return e === t; if (Lo(e) && Lo(t))
    return e.getTime() === t.getTime(); const n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (const o of n) {
    const i = e[o];
    if (!r.includes(o))
        return !1;
    if (o !== "ref") {
        const a = t[o];
        if (Lo(i) && Lo(a) || et(i) && et(a) || Array.isArray(i) && Array.isArray(a) ? !ur(i, a) : i !== a)
            return !1;
    }
} return !0; }
var x1 = e => e.type === "select-multiple", rN = e => Rh(e) || Ua(e), jc = e => cl(e) && e.isConnected, w1 = e => { for (const t in e)
    if (Mn(e[t]))
        return !0; return !1; };
function hl(e, t = {}) { const n = Array.isArray(e); if (et(e) || n)
    for (const r in e)
        Array.isArray(e[r]) || et(e[r]) && !w1(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, hl(e[r], t[r])) : vt(e[r]) || (t[r] = !0); return t; }
function b1(e, t, n) { const r = Array.isArray(e); if (et(e) || r)
    for (const o in e)
        Array.isArray(e[o]) || et(e[o]) && !w1(e[o]) ? Qe(t) || dl(n[o]) ? n[o] = Array.isArray(e[o]) ? hl(e[o], []) : { ...hl(e[o]) } : b1(e[o], vt(t) ? {} : t[o], n[o]) : n[o] = !ur(e[o], t[o]); return n; }
var ds = (e, t) => b1(e, t, hl(t)), _1 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Qe(e) ? e : t ? e === "" ? NaN : e && +e : n && bn(e) ? new Date(e) : r ? r(e) : e;
function Rc(e) { const t = e.ref; if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled))
    return jh(t) ? t.files : Rh(t) ? y1(e.refs).value : x1(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ua(t) ? g1(e.refs).value : _1(Qe(t.value) ? e.ref.value : t.value, e); }
var oN = (e, t, n, r) => { const o = {}; for (const i of e) {
    const a = ae(t, i);
    a && Pe(o, i, a._f);
} return { criteriaMode: n, names: [...e], fields: o, shouldUseNativeValidation: r }; }, Di = e => Qe(e) ? e : fl(e) ? e.source : et(e) ? fl(e.value) ? e.value.source : e.value : e;
const Xm = "AsyncFunction";
var iN = e => (!e || !e.validate) && !!(Mn(e.validate) && e.validate.constructor.name === Xm || et(e.validate) && Object.values(e.validate).find(t => t.constructor.name === Xm)), aN = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Jm(e, t, n) { const r = ae(e, n); if (r || Ah(n))
    return { error: r, name: n }; const o = n.split("."); for (; o.length;) {
    const i = o.join("."), a = ae(t, i), s = ae(e, i);
    if (a && !Array.isArray(a) && n !== i)
        return { name: n };
    if (s && s.type)
        return { name: i, error: s };
    o.pop();
} return { name: n }; }
var sN = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, lN = (e, t) => !gu(ae(e, t)).length && tt(e, t);
const uN = { mode: rn.onSubmit, reValidateMode: rn.onChange, shouldFocusError: !0 };
function cN(e = {}) { let t = { ...uN, ...e }, n = { submitCount: 0, isDirty: !1, isLoading: Mn(t.defaultValues), isValidating: !1, isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, touchedFields: {}, dirtyFields: {}, validatingFields: {}, errors: t.errors || {}, disabled: t.disabled || !1 }, r = {}, o = et(t.defaultValues) || et(t.values) ? Et(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : Et(o), a = { action: !1, mount: !1, watch: !1 }, s = { mount: new Set, unMount: new Set, array: new Set, watch: new Set }, l, f = 0; const h = { isDirty: !1, dirtyFields: !1, validatingFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 }, c = { values: Pc(), array: Pc(), state: Pc() }, u = Hm(t.mode), p = Hm(t.reValidateMode), g = t.criteriaMode === rn.all, v = I => B => { clearTimeout(f), f = setTimeout(I, B); }, x = async (I) => { if (h.isValid || I) {
    const B = t.resolver ? St((await N()).errors) : await O(r, !0);
    B !== n.isValid && c.state.next({ isValid: B });
} }, m = (I, B) => { (h.isValidating || h.validatingFields) && ((I || Array.from(s.mount)).forEach(W => { W && (B ? Pe(n.validatingFields, W, B) : tt(n.validatingFields, W)); }), c.state.next({ validatingFields: n.validatingFields, isValidating: !St(n.validatingFields) })); }, d = (I, B = [], W, J, Y = !0, ee = !0) => { if (J && W) {
    if (a.action = !0, ee && Array.isArray(ae(r, I))) {
        const re = W(ae(r, I), J.argA, J.argB);
        Y && Pe(r, I, re);
    }
    if (ee && Array.isArray(ae(n.errors, I))) {
        const re = W(ae(n.errors, I), J.argA, J.argB);
        Y && Pe(n.errors, I, re), lN(n.errors, I);
    }
    if (h.touchedFields && ee && Array.isArray(ae(n.touchedFields, I))) {
        const re = W(ae(n.touchedFields, I), J.argA, J.argB);
        Y && Pe(n.touchedFields, I, re);
    }
    h.dirtyFields && (n.dirtyFields = ds(o, i)), c.state.next({ name: I, isDirty: k(I, B), dirtyFields: n.dirtyFields, errors: n.errors, isValid: n.isValid });
}
else
    Pe(i, I, B); }, w = (I, B) => { Pe(n.errors, I, B), c.state.next({ errors: n.errors }); }, y = I => { n.errors = I, c.state.next({ errors: n.errors, isValid: !1 }); }, _ = (I, B, W, J) => { const Y = ae(r, I); if (Y) {
    const ee = ae(i, I, Qe(W) ? ae(o, I) : W);
    Qe(ee) || J && J.defaultChecked || B ? Pe(i, I, B ? ee : Rc(Y._f)) : $(I, ee), a.mount && x();
} }, T = (I, B, W, J, Y) => { let ee = !1, re = !1; const ue = { name: I }, Ne = !!(ae(r, I) && ae(r, I)._f && ae(r, I)._f.disabled); if (!W || J) {
    h.isDirty && (re = n.isDirty, n.isDirty = ue.isDirty = k(), ee = re !== ue.isDirty);
    const Ce = Ne || ur(ae(o, I), B);
    re = !!(!Ne && ae(n.dirtyFields, I)), Ce || Ne ? tt(n.dirtyFields, I) : Pe(n.dirtyFields, I, !0), ue.dirtyFields = n.dirtyFields, ee = ee || h.dirtyFields && re !== !Ce;
} if (W) {
    const Ce = ae(n.touchedFields, I);
    Ce || (Pe(n.touchedFields, I, W), ue.touchedFields = n.touchedFields, ee = ee || h.touchedFields && Ce !== W);
} return ee && Y && c.state.next(ue), ee ? ue : {}; }, S = (I, B, W, J) => { const Y = ae(n.errors, I), ee = h.isValid && Vt(B) && n.isValid !== B; if (e.delayError && W ? (l = v(() => w(I, W)), l(e.delayError)) : (clearTimeout(f), l = null, W ? Pe(n.errors, I, W) : tt(n.errors, I)), (W ? !ur(Y, W) : Y) || !St(J) || ee) {
    const re = { ...J, ...ee && Vt(B) ? { isValid: B } : {}, errors: n.errors, name: I };
    n = { ...n, ...re }, c.state.next(re);
} }, N = async (I) => { m(I, !0); const B = await t.resolver(i, t.context, oN(I || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation)); return m(I), B; }, j = async (I) => { const { errors: B } = await N(I); if (I)
    for (const W of I) {
        const J = ae(B, W);
        J ? Pe(n.errors, W, J) : tt(n.errors, W);
    }
else
    n.errors = B; return B; }, O = async (I, B, W = { valid: !0 }) => { for (const J in I) {
    const Y = I[J];
    if (Y) {
        const { _f: ee, ...re } = Y;
        if (ee) {
            const ue = s.array.has(ee.name), Ne = Y._f && iN(Y._f);
            Ne && h.validatingFields && m([J], !0);
            const Ce = await Qm(Y, i, g, t.shouldUseNativeValidation && !B, ue);
            if (Ne && h.validatingFields && m([J]), Ce[ee.name] && (W.valid = !1, B))
                break;
            !B && (ae(Ce, ee.name) ? ue ? eN(n.errors, Ce, ee.name) : Pe(n.errors, ee.name, Ce[ee.name]) : tt(n.errors, ee.name));
        }
        !St(re) && await O(re, B, W);
    }
} return W.valid; }, C = () => { for (const I of s.unMount) {
    const B = ae(r, I);
    B && (B._f.refs ? B._f.refs.every(W => !jc(W)) : !jc(B._f.ref)) && L(I);
} s.unMount = new Set; }, k = (I, B) => (I && B && Pe(i, I, B), !ur(A(), o)), P = (I, B, W) => m1(I, s, { ...a.mount ? i : Qe(B) ? o : bn(I) ? { [I]: B } : B }, W, B), R = I => gu(ae(a.mount ? i : o, I, e.shouldUnregister ? ae(o, I, []) : [])), $ = (I, B, W = {}) => { const J = ae(r, I); let Y = B; if (J) {
    const ee = J._f;
    ee && (!ee.disabled && Pe(i, I, _1(B, ee)), Y = cl(ee.ref) && vt(B) ? "" : B, x1(ee.ref) ? [...ee.ref.options].forEach(re => re.selected = Y.includes(re.value)) : ee.refs ? Ua(ee.ref) ? ee.refs.length > 1 ? ee.refs.forEach(re => (!re.defaultChecked || !re.disabled) && (re.checked = Array.isArray(Y) ? !!Y.find(ue => ue === re.value) : Y === re.value)) : ee.refs[0] && (ee.refs[0].checked = !!Y) : ee.refs.forEach(re => re.checked = re.value === Y) : jh(ee.ref) ? ee.ref.value = "" : (ee.ref.value = Y, ee.ref.type || c.values.next({ name: I, values: { ...i } })));
} (W.shouldDirty || W.shouldTouch) && T(I, Y, W.shouldTouch, W.shouldDirty, !0), W.shouldValidate && D(I); }, q = (I, B, W) => { for (const J in B) {
    const Y = B[J], ee = `${I}.${J}`, re = ae(r, ee);
    (s.array.has(I) || !dl(Y) || re && !re._f) && !Lo(Y) ? q(ee, Y, W) : $(ee, Y, W);
} }, H = (I, B, W = {}) => { const J = ae(r, I), Y = s.array.has(I), ee = Et(B); Pe(i, I, ee), Y ? (c.array.next({ name: I, values: { ...i } }), (h.isDirty || h.dirtyFields) && W.shouldDirty && c.state.next({ name: I, dirtyFields: ds(o, i), isDirty: k(I, ee) })) : J && !J._f && !vt(ee) ? q(I, ee, W) : $(I, ee, W), Wm(I, s) && c.state.next({ ...n }), c.values.next({ name: a.mount ? I : void 0, values: { ...i } }); }, V = async (I) => { a.mount = !0; const B = I.target; let W = B.name, J = !0; const Y = ae(r, W), ee = () => B.type ? Rc(Y._f) : l1(I), re = ue => { J = Number.isNaN(ue) || ur(ue, ae(i, W, ue)); }; if (Y) {
    let ue, Ne;
    const Ce = ee(), Oe = I.type === ul.BLUR || I.type === ul.FOCUS_OUT, hn = !aN(Y._f) && !t.resolver && !ae(n.errors, W) && !Y._f.deps || sN(Oe, ae(n.touchedFields, W), n.isSubmitted, p, u), De = Wm(W, s, Oe);
    Pe(i, W, Ce), Oe ? (Y._f.onBlur && Y._f.onBlur(I), l && l(0)) : Y._f.onChange && Y._f.onChange(I);
    const _t = T(W, Ce, Oe, !1), Wa = !St(_t) || De;
    if (!Oe && c.values.next({ name: W, type: I.type, values: { ...i } }), hn)
        return h.isValid && (e.mode === "onBlur" ? Oe && x() : x()), Wa && c.state.next({ name: W, ...De ? {} : _t });
    if (!Oe && De && c.state.next({ ...n }), t.resolver) {
        const { errors: Ni } = await N([W]);
        if (re(Ce), J) {
            const tc = Jm(n.errors, r, W), go = Jm(Ni, r, tc.name || W);
            ue = go.error, W = go.name, Ne = St(Ni);
        }
    }
    else
        m([W], !0), ue = (await Qm(Y, i, g, t.shouldUseNativeValidation))[W], m([W]), re(Ce), J && (ue ? Ne = !1 : h.isValid && (Ne = await O(r, !0)));
    J && (Y._f.deps && D(Y._f.deps), S(W, Ne, ue, _t));
} }, F = (I, B) => { if (ae(n.errors, B) && I.focus)
    return I.focus(), 1; }, D = async (I, B = {}) => { let W, J; const Y = oa(I); if (t.resolver) {
    const ee = await j(Qe(I) ? I : Y);
    W = St(ee), J = I ? !Y.some(re => ae(ee, re)) : W;
}
else
    I ? (J = (await Promise.all(Y.map(async (ee) => { const re = ae(r, ee); return await O(re && re._f ? { [ee]: re } : re); }))).every(Boolean), !(!J && !n.isValid) && x()) : J = W = await O(r); return c.state.next({ ...!bn(I) || h.isValid && W !== n.isValid ? {} : { name: I }, ...t.resolver || !I ? { isValid: W } : {}, errors: n.errors }), B.shouldFocus && !J && ia(r, F, I ? Y : s.mount), J; }, A = I => { const B = { ...a.mount ? i : o }; return Qe(I) ? B : bn(I) ? ae(B, I) : I.map(W => ae(B, W)); }, M = (I, B) => ({ invalid: !!ae((B || n).errors, I), isDirty: !!ae((B || n).dirtyFields, I), error: ae((B || n).errors, I), isValidating: !!ae(n.validatingFields, I), isTouched: !!ae((B || n).touchedFields, I) }), U = I => { I && oa(I).forEach(B => tt(n.errors, B)), c.state.next({ errors: I ? n.errors : {} }); }, K = (I, B, W) => { const J = (ae(r, I, { _f: {} })._f || {}).ref, Y = ae(n.errors, I) || {}, { ref: ee, message: re, type: ue, ...Ne } = Y; Pe(n.errors, I, { ...Ne, ...B, ref: J }), c.state.next({ name: I, errors: n.errors, isValid: !1 }), W && W.shouldFocus && J && J.focus && J.focus(); }, G = (I, B) => Mn(I) ? c.values.subscribe({ next: W => I(P(void 0, B), W) }) : P(I, B, !0), L = (I, B = {}) => { for (const W of I ? oa(I) : s.mount)
    s.mount.delete(W), s.array.delete(W), B.keepValue || (tt(r, W), tt(i, W)), !B.keepError && tt(n.errors, W), !B.keepDirty && tt(n.dirtyFields, W), !B.keepTouched && tt(n.touchedFields, W), !B.keepIsValidating && tt(n.validatingFields, W), !t.shouldUnregister && !B.keepDefaultValue && tt(o, W); c.values.next({ values: { ...i } }), c.state.next({ ...n, ...B.keepDirty ? { isDirty: k() } : {} }), !B.keepIsValid && x(); }, z = ({ disabled: I, name: B, field: W, fields: J, value: Y }) => { if (Vt(I) && a.mount || I) {
    const ee = I ? void 0 : Qe(Y) ? Rc(W ? W._f : ae(J, B)._f) : Y;
    Pe(i, B, ee), T(B, ee, !1, !1, !0);
} }, Z = (I, B = {}) => { let W = ae(r, I); const J = Vt(B.disabled) || Vt(e.disabled); return Pe(r, I, { ...W || {}, _f: { ...W && W._f ? W._f : { ref: { name: I } }, name: I, mount: !0, ...B } }), s.mount.add(I), W ? z({ field: W, disabled: Vt(B.disabled) ? B.disabled : e.disabled, name: I, value: B.value }) : _(I, !0, B.value), { ...J ? { disabled: B.disabled || e.disabled } : {}, ...t.progressive ? { required: !!B.required, min: Di(B.min), max: Di(B.max), minLength: Di(B.minLength), maxLength: Di(B.maxLength), pattern: Di(B.pattern) } : {}, name: I, onChange: V, onBlur: V, ref: Y => { if (Y) {
        Z(I, B), W = ae(r, I);
        const ee = Qe(Y.value) && Y.querySelectorAll && Y.querySelectorAll("input,select,textarea")[0] || Y, re = rN(ee), ue = W._f.refs || [];
        if (re ? ue.find(Ne => Ne === ee) : ee === W._f.ref)
            return;
        Pe(r, I, { _f: { ...W._f, ...re ? { refs: [...ue.filter(jc), ee, ...Array.isArray(ae(o, I)) ? [{}] : []], ref: { type: ee.type, name: I } } : { ref: ee } } }), _(I, !1, void 0, ee);
    }
    else
        W = ae(r, I, {}), W._f && (W._f.mount = !1), (t.shouldUnregister || B.shouldUnregister) && !(u1(s.array, I) && a.action) && s.unMount.add(I); } }; }, Q = () => t.shouldFocusError && ia(r, F, s.mount), X = I => { Vt(I) && (c.state.next({ disabled: I }), ia(r, (B, W) => { const J = ae(r, W); J && (B.disabled = J._f.disabled || I, Array.isArray(J._f.refs) && J._f.refs.forEach(Y => { Y.disabled = J._f.disabled || I; })); }, 0, !1)); }, ne = (I, B) => async (W) => { let J; W && (W.preventDefault && W.preventDefault(), W.persist && W.persist()); let Y = Et(i); if (c.state.next({ isSubmitting: !0 }), t.resolver) {
    const { errors: ee, values: re } = await N();
    n.errors = ee, Y = re;
}
else
    await O(r); if (tt(n.errors, "root"), St(n.errors)) {
    c.state.next({ errors: {} });
    try {
        await I(Y, W);
    }
    catch (ee) {
        J = ee;
    }
}
else
    B && await B({ ...n.errors }, W), Q(), setTimeout(Q); if (c.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: St(n.errors) && !J, submitCount: n.submitCount + 1, errors: n.errors }), J)
    throw J; }, se = (I, B = {}) => { ae(r, I) && (Qe(B.defaultValue) ? H(I, Et(ae(o, I))) : (H(I, B.defaultValue), Pe(o, I, Et(B.defaultValue))), B.keepTouched || tt(n.touchedFields, I), B.keepDirty || (tt(n.dirtyFields, I), n.isDirty = B.defaultValue ? k(I, Et(ae(o, I))) : k()), B.keepError || (tt(n.errors, I), h.isValid && x()), c.state.next({ ...n })); }, he = (I, B = {}) => { const W = I ? Et(I) : o, J = Et(W), Y = St(I), ee = Y ? o : J; if (B.keepDefaultValues || (o = W), !B.keepValues) {
    if (B.keepDirtyValues)
        for (const re of s.mount)
            ae(n.dirtyFields, re) ? Pe(ee, re, ae(i, re)) : H(re, ae(ee, re));
    else {
        if (Th && Qe(I))
            for (const re of s.mount) {
                const ue = ae(r, re);
                if (ue && ue._f) {
                    const Ne = Array.isArray(ue._f.refs) ? ue._f.refs[0] : ue._f.ref;
                    if (cl(Ne)) {
                        const Ce = Ne.closest("form");
                        if (Ce) {
                            Ce.reset();
                            break;
                        }
                    }
                }
            }
        r = {};
    }
    i = e.shouldUnregister ? B.keepDefaultValues ? Et(o) : {} : Et(ee), c.array.next({ values: { ...ee } }), c.values.next({ values: { ...ee } });
} s = { mount: B.keepDirtyValues ? s.mount : new Set, unMount: new Set, array: new Set, watch: new Set, watchAll: !1, focus: "" }, a.mount = !h.isValid || !!B.keepIsValid || !!B.keepDirtyValues, a.watch = !!e.shouldUnregister, c.state.next({ submitCount: B.keepSubmitCount ? n.submitCount : 0, isDirty: Y ? !1 : B.keepDirty ? n.isDirty : !!(B.keepDefaultValues && !ur(I, o)), isSubmitted: B.keepIsSubmitted ? n.isSubmitted : !1, dirtyFields: Y ? {} : B.keepDirtyValues ? B.keepDefaultValues && i ? ds(o, i) : n.dirtyFields : B.keepDefaultValues && I ? ds(o, I) : B.keepDirty ? n.dirtyFields : {}, touchedFields: B.keepTouched ? n.touchedFields : {}, errors: B.keepErrors ? n.errors : {}, isSubmitSuccessful: B.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1, isSubmitting: !1 }); }, me = (I, B) => he(Mn(I) ? I(i) : I, B); return { control: { register: Z, unregister: L, getFieldState: M, handleSubmit: ne, setError: K, _executeSchema: N, _getWatch: P, _getDirty: k, _updateValid: x, _removeUnmounted: C, _updateFieldArray: d, _updateDisabledField: z, _getFieldArray: R, _reset: he, _resetDefaultValues: () => Mn(t.defaultValues) && t.defaultValues().then(I => { me(I, t.resetOptions), c.state.next({ isLoading: !1 }); }), _updateFormState: I => { n = { ...n, ...I }; }, _disableForm: X, _subjects: c, _proxyFormState: h, _setErrors: y, get _fields() { return r; }, get _formValues() { return i; }, get _state() { return a; }, set _state(I) { a = I; }, get _defaultValues() { return o; }, get _names() { return s; }, set _names(I) { s = I; }, get _formState() { return n; }, set _formState(I) { n = I; }, get _options() { return t; }, set _options(I) { t = { ...t, ...I }; } }, trigger: D, register: Z, handleSubmit: ne, watch: G, setValue: H, getValues: A, reset: me, resetField: se, clearErrors: U, unregister: L, setError: K, setFocus: (I, B = {}) => { const W = ae(r, I), J = W && W._f; if (J) {
        const Y = J.refs ? J.refs[0] : J.ref;
        Y.focus && (Y.focus(), B.shouldSelect && Y.select());
    } }, getFieldState: M }; }
function E1(e = {}) { const t = te.useRef(), n = te.useRef(), [r, o] = te.useState({ isDirty: !1, isValidating: !1, isLoading: Mn(e.defaultValues), isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, submitCount: 0, dirtyFields: {}, touchedFields: {}, validatingFields: {}, errors: e.errors || {}, disabled: e.disabled || !1, defaultValues: Mn(e.defaultValues) ? void 0 : e.defaultValues }); t.current || (t.current = { ...cN(e), formState: r }); const i = t.current.control; return i._options = e, Ph({ subject: i._subjects.state, next: a => { h1(a, i._proxyFormState, i._updateFormState, !0) && o({ ...i._formState }); } }), te.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), te.useEffect(() => { if (i._proxyFormState.isDirty) {
    const a = i._getDirty();
    a !== r.isDirty && i._subjects.state.next({ isDirty: a });
} }, [i, r.isDirty]), te.useEffect(() => { e.values && !ur(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values, o(a => ({ ...a }))) : i._resetDefaultValues(); }, [e.values, i]), te.useEffect(() => { e.errors && i._setErrors(e.errors); }, [e.errors, i]), te.useEffect(() => { i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted(); }), te.useEffect(() => { e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() }); }, [e.shouldUnregister, i]), t.current.formState = d1(r, i), t.current; }
const S1 = Zk, k1 = E.createContext({}), aa = ({ ...e }) => b.jsx(k1.Provider, { value: { name: e.name }, children: b.jsx(Jk, { ...e }) }), xu = () => { const e = E.useContext(k1), t = E.useContext(N1), { getFieldState: n, formState: r } = yu(), o = n(e.name, r); if (!e)
    throw new Error("useFormField should be used within <FormField>"); const { id: i } = t; return { id: i, name: e.name, formItemId: `${i}-form-item`, formDescriptionId: `${i}-form-item-description`, formMessageId: `${i}-form-item-message`, ...o }; }, N1 = E.createContext({}), qo = E.forwardRef(({ className: e, ...t }, n) => { const r = E.useId(); return b.jsx(N1.Provider, { value: { id: r }, children: b.jsx("div", { ref: n, className: ge("space-y-2", e), ...t }) }); });
qo.displayName = "FormItem";
const fN = E.forwardRef(({ className: e, ...t }, n) => { const { error: r, formItemId: o } = xu(); return b.jsx(Sr, { ref: n, className: ge(r && "text-destructive", e), htmlFor: o, ...t }); });
fN.displayName = "FormLabel";
const Ho = E.forwardRef(({ ...e }, t) => { const { error: n, formItemId: r, formDescriptionId: o, formMessageId: i } = xu(); return b.jsx(qn, { ref: t, id: r, "aria-describedby": n ? `${o} ${i}` : `${o}`, "aria-invalid": !!n, ...e }); });
Ho.displayName = "FormControl";
const dN = E.forwardRef(({ className: e, ...t }, n) => { const { formDescriptionId: r } = xu(); return b.jsx("p", { ref: n, id: r, className: ge("text-[0.8rem] text-muted-foreground", e), ...t }); });
dN.displayName = "FormDescription";
const Wo = E.forwardRef(({ className: e, children: t, ...n }, r) => { const { error: o, formMessageId: i } = xu(), a = o ? String(o == null ? void 0 : o.message) : t; return a ? b.jsx("p", { ref: r, id: i, className: ge("text-[0.8rem] font-medium text-destructive", e), ...n, children: a }) : null; });
Wo.displayName = "FormMessage";
const ev = (e, t, n) => { if (e && "reportValidity" in e) {
    const r = ae(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
} }, C1 = (e, t) => { for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? ev(r.ref, n, e) : r.refs && r.refs.forEach(o => ev(o, n, e));
} }, hN = (e, t) => { t.shouldUseNativeValidation && C1(e, t); const n = {}; for (const r in e) {
    const o = ae(t.fields, r), i = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (pN(t.names || Object.keys(e), r)) {
        const a = Object.assign({}, ae(n, r));
        Pe(a, "root", i), Pe(n, r, a);
    }
    else
        Pe(n, r, i);
} return n; }, pN = (e, t) => e.some(n => n.startsWith(t + "."));
var mN = function (e, t) { for (var n = {}; e.length;) {
    var r = e[0], o = r.code, i = r.message, a = r.path.join(".");
    if (!n[a])
        if ("unionErrors" in r) {
            var s = r.unionErrors[0].errors[0];
            n[a] = { message: s.message, type: s.code };
        }
        else
            n[a] = { message: i, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function (h) { return h.errors.forEach(function (c) { return e.push(c); }); }), t) {
        var l = n[a].types, f = l && l[r.code];
        n[a] = v1(a, t, n, o, f ? [].concat(f, r.message) : r.message);
    }
    e.shift();
} return n; }, O1 = function (e, t, n) { return n === void 0 && (n = {}), function (r, o, i) { try {
    return Promise.resolve(function (a, s) { try {
        var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function (f) { return i.shouldUseNativeValidation && C1({}, i), { errors: {}, values: n.raw ? r : f }; });
    }
    catch (f) {
        return s(f);
    } return l && l.then ? l.then(void 0, s) : l; }(0, function (a) { if (function (s) { return Array.isArray(s == null ? void 0 : s.errors); }(a))
        return { values: {}, errors: hN(mN(a.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) }; throw a; }));
}
catch (a) {
    return Promise.reject(a);
} }; }, Te;
(function (e) { e.assertEqual = o => o; function t(o) { } e.assertIs = t; function n(o) { throw new Error; } e.assertNever = n, e.arrayToEnum = o => { const i = {}; for (const a of o)
    i[a] = a; return i; }, e.getValidEnumValues = o => { const i = e.objectKeys(o).filter(s => typeof o[o[s]] != "number"), a = {}; for (const s of i)
    a[s] = o[s]; return e.objectValues(a); }, e.objectValues = o => e.objectKeys(o).map(function (i) { return o[i]; }), e.objectKeys = typeof Object.keys == "function" ? o => Object.keys(o) : o => { const i = []; for (const a in o)
    Object.prototype.hasOwnProperty.call(o, a) && i.push(a); return i; }, e.find = (o, i) => { for (const a of o)
    if (i(a))
        return a; }, e.isInteger = typeof Number.isInteger == "function" ? o => Number.isInteger(o) : o => typeof o == "number" && isFinite(o) && Math.floor(o) === o; function r(o, i = " | ") { return o.map(a => typeof a == "string" ? `'${a}'` : a).join(i); } e.joinValues = r, e.jsonStringifyReplacer = (o, i) => typeof i == "bigint" ? i.toString() : i; })(Te || (Te = {}));
var tv;
(function (e) { e.mergeShapes = (t, n) => ({ ...t, ...n }); })(tv || (tv = {}));
const fe = Te.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), Kr = e => { switch (typeof e) {
    case "undefined": return fe.undefined;
    case "string": return fe.string;
    case "number": return isNaN(e) ? fe.nan : fe.number;
    case "boolean": return fe.boolean;
    case "function": return fe.function;
    case "bigint": return fe.bigint;
    case "symbol": return fe.symbol;
    case "object": return Array.isArray(e) ? fe.array : e === null ? fe.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? fe.promise : typeof Map < "u" && e instanceof Map ? fe.map : typeof Set < "u" && e instanceof Set ? fe.set : typeof Date < "u" && e instanceof Date ? fe.date : fe.object;
    default: return fe.unknown;
} }, ie = Te.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class Gt extends Error {
    constructor(t) { super(), this.issues = [], this.addIssue = r => { this.issues = [...this.issues, r]; }, this.addIssues = (r = []) => { this.issues = [...this.issues, ...r]; }; const n = new.target.prototype; Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t; }
    get errors() { return this.issues; }
    format(t) { const n = t || function (i) { return i.message; }, r = { _errors: [] }, o = i => { for (const a of i.issues)
        if (a.code === "invalid_union")
            a.unionErrors.map(o);
        else if (a.code === "invalid_return_type")
            o(a.returnTypeError);
        else if (a.code === "invalid_arguments")
            o(a.argumentsError);
        else if (a.path.length === 0)
            r._errors.push(n(a));
        else {
            let s = r, l = 0;
            for (; l < a.path.length;) {
                const f = a.path[l];
                l === a.path.length - 1 ? (s[f] = s[f] || { _errors: [] }, s[f]._errors.push(n(a))) : s[f] = s[f] || { _errors: [] }, s = s[f], l++;
            }
        } }; return o(this), r; }
    static assert(t) { if (!(t instanceof Gt))
        throw new Error(`Not a ZodError: ${t}`); }
    toString() { return this.message; }
    get message() { return JSON.stringify(this.issues, Te.jsonStringifyReplacer, 2); }
    get isEmpty() { return this.issues.length === 0; }
    flatten(t = n => n.message) { const n = {}, r = []; for (const o of this.issues)
        o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o)); return { formErrors: r, fieldErrors: n }; }
    get formErrors() { return this.flatten(); }
}
Gt.create = e => new Gt(e);
const Ta = (e, t) => { let n; switch (e.code) {
    case ie.invalid_type:
        e.received === fe.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
        break;
    case ie.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, Te.jsonStringifyReplacer)}`;
        break;
    case ie.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${Te.joinValues(e.keys, ", ")}`;
        break;
    case ie.invalid_union:
        n = "Invalid input";
        break;
    case ie.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${Te.joinValues(e.options)}`;
        break;
    case ie.invalid_enum_value:
        n = `Invalid enum value. Expected ${Te.joinValues(e.options)}, received '${e.received}'`;
        break;
    case ie.invalid_arguments:
        n = "Invalid function arguments";
        break;
    case ie.invalid_return_type:
        n = "Invalid function return type";
        break;
    case ie.invalid_date:
        n = "Invalid date";
        break;
    case ie.invalid_string:
        typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Te.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
        break;
    case ie.too_small:
        e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
        break;
    case ie.too_big:
        e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
        break;
    case ie.custom:
        n = "Invalid input";
        break;
    case ie.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
    case ie.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
    case ie.not_finite:
        n = "Number must be finite";
        break;
    default: n = t.defaultError, Te.assertNever(e);
} return { message: n }; };
let vN = Ta;
function Yf() { return vN; }
const Qf = e => { const { data: t, path: n, errorMaps: r, issueData: o } = e, i = [...n, ...o.path || []], a = { ...o, path: i }; if (o.message !== void 0)
    return { ...o, path: i, message: o.message }; let s = ""; const l = r.filter(f => !!f).slice().reverse(); for (const f of l)
    s = f(a, { data: t, defaultError: s }).message; return { ...o, path: i, message: s }; };
function ce(e, t) { const n = Yf(), r = Qf({ issueData: t, data: e.data, path: e.path, errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === Ta ? void 0 : Ta].filter(o => !!o) }); e.common.issues.push(r); }
class yt {
    constructor() { this.value = "valid"; }
    dirty() { this.value === "valid" && (this.value = "dirty"); }
    abort() { this.value !== "aborted" && (this.value = "aborted"); }
    static mergeArray(t, n) { const r = []; for (const o of n) {
        if (o.status === "aborted")
            return ye;
        o.status === "dirty" && t.dirty(), r.push(o.value);
    } return { status: t.value, value: r }; }
    static async mergeObjectAsync(t, n) { const r = []; for (const o of n) {
        const i = await o.key, a = await o.value;
        r.push({ key: i, value: a });
    } return yt.mergeObjectSync(t, r); }
    static mergeObjectSync(t, n) { const r = {}; for (const o of n) {
        const { key: i, value: a } = o;
        if (i.status === "aborted" || a.status === "aborted")
            return ye;
        i.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof a.value < "u" || o.alwaysSet) && (r[i.value] = a.value);
    } return { status: t.value, value: r }; }
}
const ye = Object.freeze({ status: "aborted" }), qi = e => ({ status: "dirty", value: e }), At = e => ({ status: "valid", value: e }), nv = e => e.status === "aborted", rv = e => e.status === "dirty", pl = e => e.status === "valid", ml = e => typeof Promise < "u" && e instanceof Promise;
function vl(e, t, n, r) { if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it"); return t.get(e); }
function T1(e, t, n, r, o) { if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it"); return t.set(e, n), n; }
var pe;
(function (e) { e.errToObj = t => typeof t == "string" ? { message: t } : t || {}, e.toString = t => typeof t == "string" ? t : t == null ? void 0 : t.message; })(pe || (pe = {}));
var Hi, Wi;
class kn {
    constructor(t, n, r, o) { this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o; }
    get path() { return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath; }
}
const ov = (e, t) => { if (pl(t))
    return { success: !0, data: t.value }; if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected."); return { success: !1, get error() { if (this._error)
        return this._error; const n = new Gt(e.common.issues); return this._error = n, this._error; } }; };
function we(e) { if (!e)
    return {}; const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e; if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`); return t ? { errorMap: t, description: o } : { errorMap: (a, s) => { var l, f; const { message: h } = e; return a.code === "invalid_enum_value" ? { message: h ?? s.defaultError } : typeof s.data > "u" ? { message: (l = h ?? r) !== null && l !== void 0 ? l : s.defaultError } : a.code !== "invalid_type" ? { message: s.defaultError } : { message: (f = h ?? n) !== null && f !== void 0 ? f : s.defaultError }; }, description: o }; }
class Se {
    constructor(t) { this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this); }
    get description() { return this._def.description; }
    _getType(t) { return Kr(t.data); }
    _getOrReturnCtx(t, n) { return n || { common: t.parent.common, data: t.data, parsedType: Kr(t.data), schemaErrorMap: this._def.errorMap, path: t.path, parent: t.parent }; }
    _processInputParams(t) { return { status: new yt, ctx: { common: t.parent.common, data: t.data, parsedType: Kr(t.data), schemaErrorMap: this._def.errorMap, path: t.path, parent: t.parent } }; }
    _parseSync(t) { const n = this._parse(t); if (ml(n))
        throw new Error("Synchronous parse encountered promise."); return n; }
    _parseAsync(t) { const n = this._parse(t); return Promise.resolve(n); }
    parse(t, n) { const r = this.safeParse(t, n); if (r.success)
        return r.data; throw r.error; }
    safeParse(t, n) { var r; const o = { common: { issues: [], async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1, contextualErrorMap: n == null ? void 0 : n.errorMap }, path: (n == null ? void 0 : n.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: t, parsedType: Kr(t) }, i = this._parseSync({ data: t, path: o.path, parent: o }); return ov(o, i); }
    async parseAsync(t, n) { const r = await this.safeParseAsync(t, n); if (r.success)
        return r.data; throw r.error; }
    async safeParseAsync(t, n) { const r = { common: { issues: [], contextualErrorMap: n == null ? void 0 : n.errorMap, async: !0 }, path: (n == null ? void 0 : n.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: t, parsedType: Kr(t) }, o = this._parse({ data: t, path: r.path, parent: r }), i = await (ml(o) ? o : Promise.resolve(o)); return ov(r, i); }
    refine(t, n) { const r = o => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n; return this._refinement((o, i) => { const a = t(o), s = () => i.addIssue({ code: ie.custom, ...r(o) }); return typeof Promise < "u" && a instanceof Promise ? a.then(l => l ? !0 : (s(), !1)) : a ? !0 : (s(), !1); }); }
    refinement(t, n) { return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1)); }
    _refinement(t) { return new Wn({ schema: this, typeName: ve.ZodEffects, effect: { type: "refinement", refinement: t } }); }
    superRefine(t) { return this._refinement(t); }
    optional() { return $n.create(this, this._def); }
    nullable() { return ao.create(this, this._def); }
    nullish() { return this.nullable().optional(); }
    array() { return Sn.create(this, this._def); }
    promise() { return Pa.create(this, this._def); }
    or(t) { return xl.create([this, t], this._def); }
    and(t) { return wl.create(this, t, this._def); }
    transform(t) { return new Wn({ ...we(this._def), schema: this, typeName: ve.ZodEffects, effect: { type: "transform", transform: t } }); }
    default(t) { const n = typeof t == "function" ? t : () => t; return new kl({ ...we(this._def), innerType: this, defaultValue: n, typeName: ve.ZodDefault }); }
    brand() { return new R1({ typeName: ve.ZodBranded, type: this, ...we(this._def) }); }
    catch(t) { const n = typeof t == "function" ? t : () => t; return new Nl({ ...we(this._def), innerType: this, catchValue: n, typeName: ve.ZodCatch }); }
    describe(t) { const n = this.constructor; return new n({ ...this._def, description: t }); }
    pipe(t) { return wu.create(this, t); }
    readonly() { return Cl.create(this); }
    isOptional() { return this.safeParse(void 0).success; }
    isNullable() { return this.safeParse(null).success; }
}
const gN = /^c[^\s-]{8,}$/i, yN = /^[0-9a-z]+$/, xN = /^[0-9A-HJKMNP-TV-Z]{26}$/, wN = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, bN = /^[a-z0-9_-]{21}$/i, _N = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, EN = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, SN = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ic;
const kN = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, NN = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, CN = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, A1 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ON = new RegExp(`^${A1}$`);
function P1(e) { let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"; return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t; }
function TN(e) { return new RegExp(`^${P1(e)}$`); }
function AN(e) { let t = `${A1}T${P1(e)}`; const n = []; return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`); }
function PN(e, t) { return !!((t === "v4" || !t) && kN.test(e) || (t === "v6" || !t) && NN.test(e)); }
class Ln extends Se {
    _parse(t) { if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== fe.string) {
        const i = this._getOrReturnCtx(t);
        return ce(i, { code: ie.invalid_type, expected: fe.string, received: i.parsedType }), ye;
    } const r = new yt; let o; for (const i of this._def.checks)
        if (i.kind === "min")
            t.data.length < i.value && (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.too_small, minimum: i.value, type: "string", inclusive: !0, exact: !1, message: i.message }), r.dirty());
        else if (i.kind === "max")
            t.data.length > i.value && (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.too_big, maximum: i.value, type: "string", inclusive: !0, exact: !1, message: i.message }), r.dirty());
        else if (i.kind === "length") {
            const a = t.data.length > i.value, s = t.data.length < i.value;
            (a || s) && (o = this._getOrReturnCtx(t, o), a ? ce(o, { code: ie.too_big, maximum: i.value, type: "string", inclusive: !0, exact: !0, message: i.message }) : s && ce(o, { code: ie.too_small, minimum: i.value, type: "string", inclusive: !0, exact: !0, message: i.message }), r.dirty());
        }
        else if (i.kind === "email")
            EN.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "email", code: ie.invalid_string, message: i.message }), r.dirty());
        else if (i.kind === "emoji")
            Ic || (Ic = new RegExp(SN, "u")), Ic.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "emoji", code: ie.invalid_string, message: i.message }), r.dirty());
        else if (i.kind === "uuid")
            wN.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "uuid", code: ie.invalid_string, message: i.message }), r.dirty());
        else if (i.kind === "nanoid")
            bN.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "nanoid", code: ie.invalid_string, message: i.message }), r.dirty());
        else if (i.kind === "cuid")
            gN.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "cuid", code: ie.invalid_string, message: i.message }), r.dirty());
        else if (i.kind === "cuid2")
            yN.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "cuid2", code: ie.invalid_string, message: i.message }), r.dirty());
        else if (i.kind === "ulid")
            xN.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "ulid", code: ie.invalid_string, message: i.message }), r.dirty());
        else if (i.kind === "url")
            try {
                new URL(t.data);
            }
            catch {
                o = this._getOrReturnCtx(t, o), ce(o, { validation: "url", code: ie.invalid_string, message: i.message }), r.dirty();
            }
        else
            i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "regex", code: ie.invalid_string, message: i.message }), r.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.invalid_string, validation: { includes: i.value, position: i.position }, message: i.message }), r.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.invalid_string, validation: { startsWith: i.value }, message: i.message }), r.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.invalid_string, validation: { endsWith: i.value }, message: i.message }), r.dirty()) : i.kind === "datetime" ? AN(i).test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.invalid_string, validation: "datetime", message: i.message }), r.dirty()) : i.kind === "date" ? ON.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.invalid_string, validation: "date", message: i.message }), r.dirty()) : i.kind === "time" ? TN(i).test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.invalid_string, validation: "time", message: i.message }), r.dirty()) : i.kind === "duration" ? _N.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "duration", code: ie.invalid_string, message: i.message }), r.dirty()) : i.kind === "ip" ? PN(t.data, i.version) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "ip", code: ie.invalid_string, message: i.message }), r.dirty()) : i.kind === "base64" ? CN.test(t.data) || (o = this._getOrReturnCtx(t, o), ce(o, { validation: "base64", code: ie.invalid_string, message: i.message }), r.dirty()) : Te.assertNever(i); return { status: r.value, value: t.data }; }
    _regex(t, n, r) { return this.refinement(o => t.test(o), { validation: n, code: ie.invalid_string, ...pe.errToObj(r) }); }
    _addCheck(t) { return new Ln({ ...this._def, checks: [...this._def.checks, t] }); }
    email(t) { return this._addCheck({ kind: "email", ...pe.errToObj(t) }); }
    url(t) { return this._addCheck({ kind: "url", ...pe.errToObj(t) }); }
    emoji(t) { return this._addCheck({ kind: "emoji", ...pe.errToObj(t) }); }
    uuid(t) { return this._addCheck({ kind: "uuid", ...pe.errToObj(t) }); }
    nanoid(t) { return this._addCheck({ kind: "nanoid", ...pe.errToObj(t) }); }
    cuid(t) { return this._addCheck({ kind: "cuid", ...pe.errToObj(t) }); }
    cuid2(t) { return this._addCheck({ kind: "cuid2", ...pe.errToObj(t) }); }
    ulid(t) { return this._addCheck({ kind: "ulid", ...pe.errToObj(t) }); }
    base64(t) { return this._addCheck({ kind: "base64", ...pe.errToObj(t) }); }
    ip(t) { return this._addCheck({ kind: "ip", ...pe.errToObj(t) }); }
    datetime(t) { var n, r; return typeof t == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: t }) : this._addCheck({ kind: "datetime", precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision, offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1, local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1, ...pe.errToObj(t == null ? void 0 : t.message) }); }
    date(t) { return this._addCheck({ kind: "date", message: t }); }
    time(t) { return typeof t == "string" ? this._addCheck({ kind: "time", precision: null, message: t }) : this._addCheck({ kind: "time", precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision, ...pe.errToObj(t == null ? void 0 : t.message) }); }
    duration(t) { return this._addCheck({ kind: "duration", ...pe.errToObj(t) }); }
    regex(t, n) { return this._addCheck({ kind: "regex", regex: t, ...pe.errToObj(n) }); }
    includes(t, n) { return this._addCheck({ kind: "includes", value: t, position: n == null ? void 0 : n.position, ...pe.errToObj(n == null ? void 0 : n.message) }); }
    startsWith(t, n) { return this._addCheck({ kind: "startsWith", value: t, ...pe.errToObj(n) }); }
    endsWith(t, n) { return this._addCheck({ kind: "endsWith", value: t, ...pe.errToObj(n) }); }
    min(t, n) { return this._addCheck({ kind: "min", value: t, ...pe.errToObj(n) }); }
    max(t, n) { return this._addCheck({ kind: "max", value: t, ...pe.errToObj(n) }); }
    length(t, n) { return this._addCheck({ kind: "length", value: t, ...pe.errToObj(n) }); }
    nonempty(t) { return this.min(1, pe.errToObj(t)); }
    trim() { return new Ln({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] }); }
    toLowerCase() { return new Ln({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] }); }
    toUpperCase() { return new Ln({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] }); }
    get isDatetime() { return !!this._def.checks.find(t => t.kind === "datetime"); }
    get isDate() { return !!this._def.checks.find(t => t.kind === "date"); }
    get isTime() { return !!this._def.checks.find(t => t.kind === "time"); }
    get isDuration() { return !!this._def.checks.find(t => t.kind === "duration"); }
    get isEmail() { return !!this._def.checks.find(t => t.kind === "email"); }
    get isURL() { return !!this._def.checks.find(t => t.kind === "url"); }
    get isEmoji() { return !!this._def.checks.find(t => t.kind === "emoji"); }
    get isUUID() { return !!this._def.checks.find(t => t.kind === "uuid"); }
    get isNANOID() { return !!this._def.checks.find(t => t.kind === "nanoid"); }
    get isCUID() { return !!this._def.checks.find(t => t.kind === "cuid"); }
    get isCUID2() { return !!this._def.checks.find(t => t.kind === "cuid2"); }
    get isULID() { return !!this._def.checks.find(t => t.kind === "ulid"); }
    get isIP() { return !!this._def.checks.find(t => t.kind === "ip"); }
    get isBase64() { return !!this._def.checks.find(t => t.kind === "base64"); }
    get minLength() { let t = null; for (const n of this._def.checks)
        n.kind === "min" && (t === null || n.value > t) && (t = n.value); return t; }
    get maxLength() { let t = null; for (const n of this._def.checks)
        n.kind === "max" && (t === null || n.value < t) && (t = n.value); return t; }
}
Ln.create = e => { var t; return new Ln({ checks: [], typeName: ve.ZodString, coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1, ...we(e) }); };
function jN(e, t) { const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, i = parseInt(e.toFixed(o).replace(".", "")), a = parseInt(t.toFixed(o).replace(".", "")); return i % a / Math.pow(10, o); }
class ii extends Se {
    constructor() { super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf; }
    _parse(t) { if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== fe.number) {
        const i = this._getOrReturnCtx(t);
        return ce(i, { code: ie.invalid_type, expected: fe.number, received: i.parsedType }), ye;
    } let r; const o = new yt; for (const i of this._def.checks)
        i.kind === "int" ? Te.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ce(r, { code: ie.invalid_type, expected: "integer", received: "float", message: i.message }), o.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), ce(r, { code: ie.too_small, minimum: i.value, type: "number", inclusive: i.inclusive, exact: !1, message: i.message }), o.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), ce(r, { code: ie.too_big, maximum: i.value, type: "number", inclusive: i.inclusive, exact: !1, message: i.message }), o.dirty()) : i.kind === "multipleOf" ? jN(t.data, i.value) !== 0 && (r = this._getOrReturnCtx(t, r), ce(r, { code: ie.not_multiple_of, multipleOf: i.value, message: i.message }), o.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ce(r, { code: ie.not_finite, message: i.message }), o.dirty()) : Te.assertNever(i); return { status: o.value, value: t.data }; }
    gte(t, n) { return this.setLimit("min", t, !0, pe.toString(n)); }
    gt(t, n) { return this.setLimit("min", t, !1, pe.toString(n)); }
    lte(t, n) { return this.setLimit("max", t, !0, pe.toString(n)); }
    lt(t, n) { return this.setLimit("max", t, !1, pe.toString(n)); }
    setLimit(t, n, r, o) { return new ii({ ...this._def, checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: pe.toString(o) }] }); }
    _addCheck(t) { return new ii({ ...this._def, checks: [...this._def.checks, t] }); }
    int(t) { return this._addCheck({ kind: "int", message: pe.toString(t) }); }
    positive(t) { return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: pe.toString(t) }); }
    negative(t) { return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: pe.toString(t) }); }
    nonpositive(t) { return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: pe.toString(t) }); }
    nonnegative(t) { return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: pe.toString(t) }); }
    multipleOf(t, n) { return this._addCheck({ kind: "multipleOf", value: t, message: pe.toString(n) }); }
    finite(t) { return this._addCheck({ kind: "finite", message: pe.toString(t) }); }
    safe(t) { return this._addCheck({ kind: "min", inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: pe.toString(t) })._addCheck({ kind: "max", inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: pe.toString(t) }); }
    get minValue() { let t = null; for (const n of this._def.checks)
        n.kind === "min" && (t === null || n.value > t) && (t = n.value); return t; }
    get maxValue() { let t = null; for (const n of this._def.checks)
        n.kind === "max" && (t === null || n.value < t) && (t = n.value); return t; }
    get isInt() { return !!this._def.checks.find(t => t.kind === "int" || t.kind === "multipleOf" && Te.isInteger(t.value)); }
    get isFinite() { let t = null, n = null; for (const r of this._def.checks) {
        if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
            return !0;
        r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    } return Number.isFinite(n) && Number.isFinite(t); }
}
ii.create = e => new ii({ checks: [], typeName: ve.ZodNumber, coerce: (e == null ? void 0 : e.coerce) || !1, ...we(e) });
class ai extends Se {
    constructor() { super(...arguments), this.min = this.gte, this.max = this.lte; }
    _parse(t) { if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== fe.bigint) {
        const i = this._getOrReturnCtx(t);
        return ce(i, { code: ie.invalid_type, expected: fe.bigint, received: i.parsedType }), ye;
    } let r; const o = new yt; for (const i of this._def.checks)
        i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), ce(r, { code: ie.too_small, type: "bigint", minimum: i.value, inclusive: i.inclusive, message: i.message }), o.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), ce(r, { code: ie.too_big, type: "bigint", maximum: i.value, inclusive: i.inclusive, message: i.message }), o.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ce(r, { code: ie.not_multiple_of, multipleOf: i.value, message: i.message }), o.dirty()) : Te.assertNever(i); return { status: o.value, value: t.data }; }
    gte(t, n) { return this.setLimit("min", t, !0, pe.toString(n)); }
    gt(t, n) { return this.setLimit("min", t, !1, pe.toString(n)); }
    lte(t, n) { return this.setLimit("max", t, !0, pe.toString(n)); }
    lt(t, n) { return this.setLimit("max", t, !1, pe.toString(n)); }
    setLimit(t, n, r, o) { return new ai({ ...this._def, checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: pe.toString(o) }] }); }
    _addCheck(t) { return new ai({ ...this._def, checks: [...this._def.checks, t] }); }
    positive(t) { return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: pe.toString(t) }); }
    negative(t) { return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: pe.toString(t) }); }
    nonpositive(t) { return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: pe.toString(t) }); }
    nonnegative(t) { return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: pe.toString(t) }); }
    multipleOf(t, n) { return this._addCheck({ kind: "multipleOf", value: t, message: pe.toString(n) }); }
    get minValue() { let t = null; for (const n of this._def.checks)
        n.kind === "min" && (t === null || n.value > t) && (t = n.value); return t; }
    get maxValue() { let t = null; for (const n of this._def.checks)
        n.kind === "max" && (t === null || n.value < t) && (t = n.value); return t; }
}
ai.create = e => { var t; return new ai({ checks: [], typeName: ve.ZodBigInt, coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1, ...we(e) }); };
class Xf extends Se {
    _parse(t) { if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== fe.boolean) {
        const r = this._getOrReturnCtx(t);
        return ce(r, { code: ie.invalid_type, expected: fe.boolean, received: r.parsedType }), ye;
    } return At(t.data); }
}
Xf.create = e => new Xf({ typeName: ve.ZodBoolean, coerce: (e == null ? void 0 : e.coerce) || !1, ...we(e) });
class Aa extends Se {
    _parse(t) { if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== fe.date) {
        const i = this._getOrReturnCtx(t);
        return ce(i, { code: ie.invalid_type, expected: fe.date, received: i.parsedType }), ye;
    } if (isNaN(t.data.getTime())) {
        const i = this._getOrReturnCtx(t);
        return ce(i, { code: ie.invalid_date }), ye;
    } const r = new yt; let o; for (const i of this._def.checks)
        i.kind === "min" ? t.data.getTime() < i.value && (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.too_small, message: i.message, inclusive: !0, exact: !1, minimum: i.value, type: "date" }), r.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (o = this._getOrReturnCtx(t, o), ce(o, { code: ie.too_big, message: i.message, inclusive: !0, exact: !1, maximum: i.value, type: "date" }), r.dirty()) : Te.assertNever(i); return { status: r.value, value: new Date(t.data.getTime()) }; }
    _addCheck(t) { return new Aa({ ...this._def, checks: [...this._def.checks, t] }); }
    min(t, n) { return this._addCheck({ kind: "min", value: t.getTime(), message: pe.toString(n) }); }
    max(t, n) { return this._addCheck({ kind: "max", value: t.getTime(), message: pe.toString(n) }); }
    get minDate() { let t = null; for (const n of this._def.checks)
        n.kind === "min" && (t === null || n.value > t) && (t = n.value); return t != null ? new Date(t) : null; }
    get maxDate() { let t = null; for (const n of this._def.checks)
        n.kind === "max" && (t === null || n.value < t) && (t = n.value); return t != null ? new Date(t) : null; }
}
Aa.create = e => new Aa({ checks: [], coerce: (e == null ? void 0 : e.coerce) || !1, typeName: ve.ZodDate, ...we(e) });
class Jf extends Se {
    _parse(t) { if (this._getType(t) !== fe.symbol) {
        const r = this._getOrReturnCtx(t);
        return ce(r, { code: ie.invalid_type, expected: fe.symbol, received: r.parsedType }), ye;
    } return At(t.data); }
}
Jf.create = e => new Jf({ typeName: ve.ZodSymbol, ...we(e) });
class gl extends Se {
    _parse(t) { if (this._getType(t) !== fe.undefined) {
        const r = this._getOrReturnCtx(t);
        return ce(r, { code: ie.invalid_type, expected: fe.undefined, received: r.parsedType }), ye;
    } return At(t.data); }
}
gl.create = e => new gl({ typeName: ve.ZodUndefined, ...we(e) });
class yl extends Se {
    _parse(t) { if (this._getType(t) !== fe.null) {
        const r = this._getOrReturnCtx(t);
        return ce(r, { code: ie.invalid_type, expected: fe.null, received: r.parsedType }), ye;
    } return At(t.data); }
}
yl.create = e => new yl({ typeName: ve.ZodNull, ...we(e) });
class ed extends Se {
    constructor() { super(...arguments), this._any = !0; }
    _parse(t) { return At(t.data); }
}
ed.create = e => new ed({ typeName: ve.ZodAny, ...we(e) });
class Ko extends Se {
    constructor() { super(...arguments), this._unknown = !0; }
    _parse(t) { return At(t.data); }
}
Ko.create = e => new Ko({ typeName: ve.ZodUnknown, ...we(e) });
class Pr extends Se {
    _parse(t) { const n = this._getOrReturnCtx(t); return ce(n, { code: ie.invalid_type, expected: fe.never, received: n.parsedType }), ye; }
}
Pr.create = e => new Pr({ typeName: ve.ZodNever, ...we(e) });
class td extends Se {
    _parse(t) { if (this._getType(t) !== fe.undefined) {
        const r = this._getOrReturnCtx(t);
        return ce(r, { code: ie.invalid_type, expected: fe.void, received: r.parsedType }), ye;
    } return At(t.data); }
}
td.create = e => new td({ typeName: ve.ZodVoid, ...we(e) });
class Sn extends Se {
    _parse(t) { const { ctx: n, status: r } = this._processInputParams(t), o = this._def; if (n.parsedType !== fe.array)
        return ce(n, { code: ie.invalid_type, expected: fe.array, received: n.parsedType }), ye; if (o.exactLength !== null) {
        const a = n.data.length > o.exactLength.value, s = n.data.length < o.exactLength.value;
        (a || s) && (ce(n, { code: a ? ie.too_big : ie.too_small, minimum: s ? o.exactLength.value : void 0, maximum: a ? o.exactLength.value : void 0, type: "array", inclusive: !0, exact: !0, message: o.exactLength.message }), r.dirty());
    } if (o.minLength !== null && n.data.length < o.minLength.value && (ce(n, { code: ie.too_small, minimum: o.minLength.value, type: "array", inclusive: !0, exact: !1, message: o.minLength.message }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ce(n, { code: ie.too_big, maximum: o.maxLength.value, type: "array", inclusive: !0, exact: !1, message: o.maxLength.message }), r.dirty()), n.common.async)
        return Promise.all([...n.data].map((a, s) => o.type._parseAsync(new kn(n, a, n.path, s)))).then(a => yt.mergeArray(r, a)); const i = [...n.data].map((a, s) => o.type._parseSync(new kn(n, a, n.path, s))); return yt.mergeArray(r, i); }
    get element() { return this._def.type; }
    min(t, n) { return new Sn({ ...this._def, minLength: { value: t, message: pe.toString(n) } }); }
    max(t, n) { return new Sn({ ...this._def, maxLength: { value: t, message: pe.toString(n) } }); }
    length(t, n) { return new Sn({ ...this._def, exactLength: { value: t, message: pe.toString(n) } }); }
    nonempty(t) { return this.min(1, t); }
}
Sn.create = (e, t) => new Sn({ type: e, minLength: null, maxLength: null, exactLength: null, typeName: ve.ZodArray, ...we(t) });
function Eo(e) { if (e instanceof Ze) {
    const t = {};
    for (const n in e.shape) {
        const r = e.shape[n];
        t[n] = $n.create(Eo(r));
    }
    return new Ze({ ...e._def, shape: () => t });
}
else
    return e instanceof Sn ? new Sn({ ...e._def, type: Eo(e.element) }) : e instanceof $n ? $n.create(Eo(e.unwrap())) : e instanceof ao ? ao.create(Eo(e.unwrap())) : e instanceof Hn ? Hn.create(e.items.map(t => Eo(t))) : e; }
class Ze extends Se {
    constructor() { super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend; }
    _getCached() { if (this._cached !== null)
        return this._cached; const t = this._def.shape(), n = Te.objectKeys(t); return this._cached = { shape: t, keys: n }; }
    _parse(t) { if (this._getType(t) !== fe.object) {
        const f = this._getOrReturnCtx(t);
        return ce(f, { code: ie.invalid_type, expected: fe.object, received: f.parsedType }), ye;
    } const { status: r, ctx: o } = this._processInputParams(t), { shape: i, keys: a } = this._getCached(), s = []; if (!(this._def.catchall instanceof Pr && this._def.unknownKeys === "strip"))
        for (const f in o.data)
            a.includes(f) || s.push(f); const l = []; for (const f of a) {
        const h = i[f], c = o.data[f];
        l.push({ key: { status: "valid", value: f }, value: h._parse(new kn(o, c, o.path, f)), alwaysSet: f in o.data });
    } if (this._def.catchall instanceof Pr) {
        const f = this._def.unknownKeys;
        if (f === "passthrough")
            for (const h of s)
                l.push({ key: { status: "valid", value: h }, value: { status: "valid", value: o.data[h] } });
        else if (f === "strict")
            s.length > 0 && (ce(o, { code: ie.unrecognized_keys, keys: s }), r.dirty());
        else if (f !== "strip")
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    }
    else {
        const f = this._def.catchall;
        for (const h of s) {
            const c = o.data[h];
            l.push({ key: { status: "valid", value: h }, value: f._parse(new kn(o, c, o.path, h)), alwaysSet: h in o.data });
        }
    } return o.common.async ? Promise.resolve().then(async () => { const f = []; for (const h of l) {
        const c = await h.key, u = await h.value;
        f.push({ key: c, value: u, alwaysSet: h.alwaysSet });
    } return f; }).then(f => yt.mergeObjectSync(r, f)) : yt.mergeObjectSync(r, l); }
    get shape() { return this._def.shape(); }
    strict(t) { return pe.errToObj, new Ze({ ...this._def, unknownKeys: "strict", ...t !== void 0 ? { errorMap: (n, r) => { var o, i, a, s; const l = (a = (i = (o = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(o, n, r).message) !== null && a !== void 0 ? a : r.defaultError; return n.code === "unrecognized_keys" ? { message: (s = pe.errToObj(t).message) !== null && s !== void 0 ? s : l } : { message: l }; } } : {} }); }
    strip() { return new Ze({ ...this._def, unknownKeys: "strip" }); }
    passthrough() { return new Ze({ ...this._def, unknownKeys: "passthrough" }); }
    extend(t) { return new Ze({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) }); }
    merge(t) { return new Ze({ unknownKeys: t._def.unknownKeys, catchall: t._def.catchall, shape: () => ({ ...this._def.shape(), ...t._def.shape() }), typeName: ve.ZodObject }); }
    setKey(t, n) { return this.augment({ [t]: n }); }
    catchall(t) { return new Ze({ ...this._def, catchall: t }); }
    pick(t) { const n = {}; return Te.objectKeys(t).forEach(r => { t[r] && this.shape[r] && (n[r] = this.shape[r]); }), new Ze({ ...this._def, shape: () => n }); }
    omit(t) { const n = {}; return Te.objectKeys(this.shape).forEach(r => { t[r] || (n[r] = this.shape[r]); }), new Ze({ ...this._def, shape: () => n }); }
    deepPartial() { return Eo(this); }
    partial(t) { const n = {}; return Te.objectKeys(this.shape).forEach(r => { const o = this.shape[r]; t && !t[r] ? n[r] = o : n[r] = o.optional(); }), new Ze({ ...this._def, shape: () => n }); }
    required(t) { const n = {}; return Te.objectKeys(this.shape).forEach(r => { if (t && !t[r])
        n[r] = this.shape[r];
    else {
        let i = this.shape[r];
        for (; i instanceof $n;)
            i = i._def.innerType;
        n[r] = i;
    } }), new Ze({ ...this._def, shape: () => n }); }
    keyof() { return j1(Te.objectKeys(this.shape)); }
}
Ze.create = (e, t) => new Ze({ shape: () => e, unknownKeys: "strip", catchall: Pr.create(), typeName: ve.ZodObject, ...we(t) });
Ze.strictCreate = (e, t) => new Ze({ shape: () => e, unknownKeys: "strict", catchall: Pr.create(), typeName: ve.ZodObject, ...we(t) });
Ze.lazycreate = (e, t) => new Ze({ shape: e, unknownKeys: "strip", catchall: Pr.create(), typeName: ve.ZodObject, ...we(t) });
class xl extends Se {
    _parse(t) { const { ctx: n } = this._processInputParams(t), r = this._def.options; function o(i) { for (const s of i)
        if (s.result.status === "valid")
            return s.result; for (const s of i)
        if (s.result.status === "dirty")
            return n.common.issues.push(...s.ctx.common.issues), s.result; const a = i.map(s => new Gt(s.ctx.common.issues)); return ce(n, { code: ie.invalid_union, unionErrors: a }), ye; } if (n.common.async)
        return Promise.all(r.map(async (i) => { const a = { ...n, common: { ...n.common, issues: [] }, parent: null }; return { result: await i._parseAsync({ data: n.data, path: n.path, parent: a }), ctx: a }; })).then(o); {
        let i;
        const a = [];
        for (const l of r) {
            const f = { ...n, common: { ...n.common, issues: [] }, parent: null }, h = l._parseSync({ data: n.data, path: n.path, parent: f });
            if (h.status === "valid")
                return h;
            h.status === "dirty" && !i && (i = { result: h, ctx: f }), f.common.issues.length && a.push(f.common.issues);
        }
        if (i)
            return n.common.issues.push(...i.ctx.common.issues), i.result;
        const s = a.map(l => new Gt(l));
        return ce(n, { code: ie.invalid_union, unionErrors: s }), ye;
    } }
    get options() { return this._def.options; }
}
xl.create = (e, t) => new xl({ options: e, typeName: ve.ZodUnion, ...we(t) });
const An = e => e instanceof _l ? An(e.schema) : e instanceof Wn ? An(e.innerType()) : e instanceof El ? [e.value] : e instanceof io ? e.options : e instanceof Sl ? Te.objectValues(e.enum) : e instanceof kl ? An(e._def.innerType) : e instanceof gl ? [void 0] : e instanceof yl ? [null] : e instanceof $n ? [void 0, ...An(e.unwrap())] : e instanceof ao ? [null, ...An(e.unwrap())] : e instanceof R1 || e instanceof Cl ? An(e.unwrap()) : e instanceof Nl ? An(e._def.innerType) : [];
class Ih extends Se {
    _parse(t) { const { ctx: n } = this._processInputParams(t); if (n.parsedType !== fe.object)
        return ce(n, { code: ie.invalid_type, expected: fe.object, received: n.parsedType }), ye; const r = this.discriminator, o = n.data[r], i = this.optionsMap.get(o); return i ? n.common.async ? i._parseAsync({ data: n.data, path: n.path, parent: n }) : i._parseSync({ data: n.data, path: n.path, parent: n }) : (ce(n, { code: ie.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [r] }), ye); }
    get discriminator() { return this._def.discriminator; }
    get options() { return this._def.options; }
    get optionsMap() { return this._def.optionsMap; }
    static create(t, n, r) { const o = new Map; for (const i of n) {
        const a = An(i.shape[t]);
        if (!a.length)
            throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
        for (const s of a) {
            if (o.has(s))
                throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);
            o.set(s, i);
        }
    } return new Ih({ typeName: ve.ZodDiscriminatedUnion, discriminator: t, options: n, optionsMap: o, ...we(r) }); }
}
function nd(e, t) { const n = Kr(e), r = Kr(t); if (e === t)
    return { valid: !0, data: e }; if (n === fe.object && r === fe.object) {
    const o = Te.objectKeys(t), i = Te.objectKeys(e).filter(s => o.indexOf(s) !== -1), a = { ...e, ...t };
    for (const s of i) {
        const l = nd(e[s], t[s]);
        if (!l.valid)
            return { valid: !1 };
        a[s] = l.data;
    }
    return { valid: !0, data: a };
}
else if (n === fe.array && r === fe.array) {
    if (e.length !== t.length)
        return { valid: !1 };
    const o = [];
    for (let i = 0; i < e.length; i++) {
        const a = e[i], s = t[i], l = nd(a, s);
        if (!l.valid)
            return { valid: !1 };
        o.push(l.data);
    }
    return { valid: !0, data: o };
}
else
    return n === fe.date && r === fe.date && +e == +t ? { valid: !0, data: e } : { valid: !1 }; }
class wl extends Se {
    _parse(t) { const { status: n, ctx: r } = this._processInputParams(t), o = (i, a) => { if (nv(i) || nv(a))
        return ye; const s = nd(i.value, a.value); return s.valid ? ((rv(i) || rv(a)) && n.dirty(), { status: n.value, value: s.data }) : (ce(r, { code: ie.invalid_intersection_types }), ye); }; return r.common.async ? Promise.all([this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }), this._def.right._parseAsync({ data: r.data, path: r.path, parent: r })]).then(([i, a]) => o(i, a)) : o(this._def.left._parseSync({ data: r.data, path: r.path, parent: r }), this._def.right._parseSync({ data: r.data, path: r.path, parent: r })); }
}
wl.create = (e, t, n) => new wl({ left: e, right: t, typeName: ve.ZodIntersection, ...we(n) });
class Hn extends Se {
    _parse(t) { const { status: n, ctx: r } = this._processInputParams(t); if (r.parsedType !== fe.array)
        return ce(r, { code: ie.invalid_type, expected: fe.array, received: r.parsedType }), ye; if (r.data.length < this._def.items.length)
        return ce(r, { code: ie.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }), ye; !this._def.rest && r.data.length > this._def.items.length && (ce(r, { code: ie.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }), n.dirty()); const i = [...r.data].map((a, s) => { const l = this._def.items[s] || this._def.rest; return l ? l._parse(new kn(r, a, r.path, s)) : null; }).filter(a => !!a); return r.common.async ? Promise.all(i).then(a => yt.mergeArray(n, a)) : yt.mergeArray(n, i); }
    get items() { return this._def.items; }
    rest(t) { return new Hn({ ...this._def, rest: t }); }
}
Hn.create = (e, t) => { if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])"); return new Hn({ items: e, typeName: ve.ZodTuple, rest: null, ...we(t) }); };
class bl extends Se {
    get keySchema() { return this._def.keyType; }
    get valueSchema() { return this._def.valueType; }
    _parse(t) { const { status: n, ctx: r } = this._processInputParams(t); if (r.parsedType !== fe.object)
        return ce(r, { code: ie.invalid_type, expected: fe.object, received: r.parsedType }), ye; const o = [], i = this._def.keyType, a = this._def.valueType; for (const s in r.data)
        o.push({ key: i._parse(new kn(r, s, r.path, s)), value: a._parse(new kn(r, r.data[s], r.path, s)), alwaysSet: s in r.data }); return r.common.async ? yt.mergeObjectAsync(n, o) : yt.mergeObjectSync(n, o); }
    get element() { return this._def.valueType; }
    static create(t, n, r) { return n instanceof Se ? new bl({ keyType: t, valueType: n, typeName: ve.ZodRecord, ...we(r) }) : new bl({ keyType: Ln.create(), valueType: t, typeName: ve.ZodRecord, ...we(n) }); }
}
class rd extends Se {
    get keySchema() { return this._def.keyType; }
    get valueSchema() { return this._def.valueType; }
    _parse(t) { const { status: n, ctx: r } = this._processInputParams(t); if (r.parsedType !== fe.map)
        return ce(r, { code: ie.invalid_type, expected: fe.map, received: r.parsedType }), ye; const o = this._def.keyType, i = this._def.valueType, a = [...r.data.entries()].map(([s, l], f) => ({ key: o._parse(new kn(r, s, r.path, [f, "key"])), value: i._parse(new kn(r, l, r.path, [f, "value"])) })); if (r.common.async) {
        const s = new Map;
        return Promise.resolve().then(async () => { for (const l of a) {
            const f = await l.key, h = await l.value;
            if (f.status === "aborted" || h.status === "aborted")
                return ye;
            (f.status === "dirty" || h.status === "dirty") && n.dirty(), s.set(f.value, h.value);
        } return { status: n.value, value: s }; });
    }
    else {
        const s = new Map;
        for (const l of a) {
            const f = l.key, h = l.value;
            if (f.status === "aborted" || h.status === "aborted")
                return ye;
            (f.status === "dirty" || h.status === "dirty") && n.dirty(), s.set(f.value, h.value);
        }
        return { status: n.value, value: s };
    } }
}
rd.create = (e, t, n) => new rd({ valueType: t, keyType: e, typeName: ve.ZodMap, ...we(n) });
class si extends Se {
    _parse(t) { const { status: n, ctx: r } = this._processInputParams(t); if (r.parsedType !== fe.set)
        return ce(r, { code: ie.invalid_type, expected: fe.set, received: r.parsedType }), ye; const o = this._def; o.minSize !== null && r.data.size < o.minSize.value && (ce(r, { code: ie.too_small, minimum: o.minSize.value, type: "set", inclusive: !0, exact: !1, message: o.minSize.message }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ce(r, { code: ie.too_big, maximum: o.maxSize.value, type: "set", inclusive: !0, exact: !1, message: o.maxSize.message }), n.dirty()); const i = this._def.valueType; function a(l) { const f = new Set; for (const h of l) {
        if (h.status === "aborted")
            return ye;
        h.status === "dirty" && n.dirty(), f.add(h.value);
    } return { status: n.value, value: f }; } const s = [...r.data.values()].map((l, f) => i._parse(new kn(r, l, r.path, f))); return r.common.async ? Promise.all(s).then(l => a(l)) : a(s); }
    min(t, n) { return new si({ ...this._def, minSize: { value: t, message: pe.toString(n) } }); }
    max(t, n) { return new si({ ...this._def, maxSize: { value: t, message: pe.toString(n) } }); }
    size(t, n) { return this.min(t, n).max(t, n); }
    nonempty(t) { return this.min(1, t); }
}
si.create = (e, t) => new si({ valueType: e, minSize: null, maxSize: null, typeName: ve.ZodSet, ...we(t) });
class sa extends Se {
    constructor() { super(...arguments), this.validate = this.implement; }
    _parse(t) { const { ctx: n } = this._processInputParams(t); if (n.parsedType !== fe.function)
        return ce(n, { code: ie.invalid_type, expected: fe.function, received: n.parsedType }), ye; function r(s, l) { return Qf({ data: s, path: n.path, errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Yf(), Ta].filter(f => !!f), issueData: { code: ie.invalid_arguments, argumentsError: l } }); } function o(s, l) { return Qf({ data: s, path: n.path, errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Yf(), Ta].filter(f => !!f), issueData: { code: ie.invalid_return_type, returnTypeError: l } }); } const i = { errorMap: n.common.contextualErrorMap }, a = n.data; if (this._def.returns instanceof Pa) {
        const s = this;
        return At(async function (...l) { const f = new Gt([]), h = await s._def.args.parseAsync(l, i).catch(p => { throw f.addIssue(r(l, p)), f; }), c = await Reflect.apply(a, this, h); return await s._def.returns._def.type.parseAsync(c, i).catch(p => { throw f.addIssue(o(c, p)), f; }); });
    }
    else {
        const s = this;
        return At(function (...l) { const f = s._def.args.safeParse(l, i); if (!f.success)
            throw new Gt([r(l, f.error)]); const h = Reflect.apply(a, this, f.data), c = s._def.returns.safeParse(h, i); if (!c.success)
            throw new Gt([o(h, c.error)]); return c.data; });
    } }
    parameters() { return this._def.args; }
    returnType() { return this._def.returns; }
    args(...t) { return new sa({ ...this._def, args: Hn.create(t).rest(Ko.create()) }); }
    returns(t) { return new sa({ ...this._def, returns: t }); }
    implement(t) { return this.parse(t); }
    strictImplement(t) { return this.parse(t); }
    static create(t, n, r) { return new sa({ args: t || Hn.create([]).rest(Ko.create()), returns: n || Ko.create(), typeName: ve.ZodFunction, ...we(r) }); }
}
class _l extends Se {
    get schema() { return this._def.getter(); }
    _parse(t) { const { ctx: n } = this._processInputParams(t); return this._def.getter()._parse({ data: n.data, path: n.path, parent: n }); }
}
_l.create = (e, t) => new _l({ getter: e, typeName: ve.ZodLazy, ...we(t) });
class El extends Se {
    _parse(t) { if (t.data !== this._def.value) {
        const n = this._getOrReturnCtx(t);
        return ce(n, { received: n.data, code: ie.invalid_literal, expected: this._def.value }), ye;
    } return { status: "valid", value: t.data }; }
    get value() { return this._def.value; }
}
El.create = (e, t) => new El({ value: e, typeName: ve.ZodLiteral, ...we(t) });
function j1(e, t) { return new io({ values: e, typeName: ve.ZodEnum, ...we(t) }); }
class io extends Se {
    constructor() { super(...arguments), Hi.set(this, void 0); }
    _parse(t) { if (typeof t.data != "string") {
        const n = this._getOrReturnCtx(t), r = this._def.values;
        return ce(n, { expected: Te.joinValues(r), received: n.parsedType, code: ie.invalid_type }), ye;
    } if (vl(this, Hi) || T1(this, Hi, new Set(this._def.values)), !vl(this, Hi).has(t.data)) {
        const n = this._getOrReturnCtx(t), r = this._def.values;
        return ce(n, { received: n.data, code: ie.invalid_enum_value, options: r }), ye;
    } return At(t.data); }
    get options() { return this._def.values; }
    get enum() { const t = {}; for (const n of this._def.values)
        t[n] = n; return t; }
    get Values() { const t = {}; for (const n of this._def.values)
        t[n] = n; return t; }
    get Enum() { const t = {}; for (const n of this._def.values)
        t[n] = n; return t; }
    extract(t, n = this._def) { return io.create(t, { ...this._def, ...n }); }
    exclude(t, n = this._def) { return io.create(this.options.filter(r => !t.includes(r)), { ...this._def, ...n }); }
}
Hi = new WeakMap;
io.create = j1;
class Sl extends Se {
    constructor() { super(...arguments), Wi.set(this, void 0); }
    _parse(t) { const n = Te.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t); if (r.parsedType !== fe.string && r.parsedType !== fe.number) {
        const o = Te.objectValues(n);
        return ce(r, { expected: Te.joinValues(o), received: r.parsedType, code: ie.invalid_type }), ye;
    } if (vl(this, Wi) || T1(this, Wi, new Set(Te.getValidEnumValues(this._def.values))), !vl(this, Wi).has(t.data)) {
        const o = Te.objectValues(n);
        return ce(r, { received: r.data, code: ie.invalid_enum_value, options: o }), ye;
    } return At(t.data); }
    get enum() { return this._def.values; }
}
Wi = new WeakMap;
Sl.create = (e, t) => new Sl({ values: e, typeName: ve.ZodNativeEnum, ...we(t) });
class Pa extends Se {
    unwrap() { return this._def.type; }
    _parse(t) { const { ctx: n } = this._processInputParams(t); if (n.parsedType !== fe.promise && n.common.async === !1)
        return ce(n, { code: ie.invalid_type, expected: fe.promise, received: n.parsedType }), ye; const r = n.parsedType === fe.promise ? n.data : Promise.resolve(n.data); return At(r.then(o => this._def.type.parseAsync(o, { path: n.path, errorMap: n.common.contextualErrorMap }))); }
}
Pa.create = (e, t) => new Pa({ type: e, typeName: ve.ZodPromise, ...we(t) });
class Wn extends Se {
    innerType() { return this._def.schema; }
    sourceType() { return this._def.schema._def.typeName === ve.ZodEffects ? this._def.schema.sourceType() : this._def.schema; }
    _parse(t) { const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, i = { addIssue: a => { ce(r, a), a.fatal ? n.abort() : n.dirty(); }, get path() { return r.path; } }; if (i.addIssue = i.addIssue.bind(i), o.type === "preprocess") {
        const a = o.transform(r.data, i);
        if (r.common.async)
            return Promise.resolve(a).then(async (s) => { if (n.value === "aborted")
                return ye; const l = await this._def.schema._parseAsync({ data: s, path: r.path, parent: r }); return l.status === "aborted" ? ye : l.status === "dirty" || n.value === "dirty" ? qi(l.value) : l; });
        {
            if (n.value === "aborted")
                return ye;
            const s = this._def.schema._parseSync({ data: a, path: r.path, parent: r });
            return s.status === "aborted" ? ye : s.status === "dirty" || n.value === "dirty" ? qi(s.value) : s;
        }
    } if (o.type === "refinement") {
        const a = s => { const l = o.refinement(s, i); if (r.common.async)
            return Promise.resolve(l); if (l instanceof Promise)
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead."); return s; };
        if (r.common.async === !1) {
            const s = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
            return s.status === "aborted" ? ye : (s.status === "dirty" && n.dirty(), a(s.value), { status: n.value, value: s.value });
        }
        else
            return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then(s => s.status === "aborted" ? ye : (s.status === "dirty" && n.dirty(), a(s.value).then(() => ({ status: n.value, value: s.value }))));
    } if (o.type === "transform")
        if (r.common.async === !1) {
            const a = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
            if (!pl(a))
                return a;
            const s = o.transform(a.value, i);
            if (s instanceof Promise)
                throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return { status: n.value, value: s };
        }
        else
            return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then(a => pl(a) ? Promise.resolve(o.transform(a.value, i)).then(s => ({ status: n.value, value: s })) : a); Te.assertNever(o); }
}
Wn.create = (e, t, n) => new Wn({ schema: e, typeName: ve.ZodEffects, effect: t, ...we(n) });
Wn.createWithPreprocess = (e, t, n) => new Wn({ schema: t, effect: { type: "preprocess", transform: e }, typeName: ve.ZodEffects, ...we(n) });
class $n extends Se {
    _parse(t) { return this._getType(t) === fe.undefined ? At(void 0) : this._def.innerType._parse(t); }
    unwrap() { return this._def.innerType; }
}
$n.create = (e, t) => new $n({ innerType: e, typeName: ve.ZodOptional, ...we(t) });
class ao extends Se {
    _parse(t) { return this._getType(t) === fe.null ? At(null) : this._def.innerType._parse(t); }
    unwrap() { return this._def.innerType; }
}
ao.create = (e, t) => new ao({ innerType: e, typeName: ve.ZodNullable, ...we(t) });
class kl extends Se {
    _parse(t) { const { ctx: n } = this._processInputParams(t); let r = n.data; return n.parsedType === fe.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({ data: r, path: n.path, parent: n }); }
    removeDefault() { return this._def.innerType; }
}
kl.create = (e, t) => new kl({ innerType: e, typeName: ve.ZodDefault, defaultValue: typeof t.default == "function" ? t.default : () => t.default, ...we(t) });
class Nl extends Se {
    _parse(t) { const { ctx: n } = this._processInputParams(t), r = { ...n, common: { ...n.common, issues: [] } }, o = this._def.innerType._parse({ data: r.data, path: r.path, parent: { ...r } }); return ml(o) ? o.then(i => ({ status: "valid", value: i.status === "valid" ? i.value : this._def.catchValue({ get error() { return new Gt(r.common.issues); }, input: r.data }) })) : { status: "valid", value: o.status === "valid" ? o.value : this._def.catchValue({ get error() { return new Gt(r.common.issues); }, input: r.data }) }; }
    removeCatch() { return this._def.innerType; }
}
Nl.create = (e, t) => new Nl({ innerType: e, typeName: ve.ZodCatch, catchValue: typeof t.catch == "function" ? t.catch : () => t.catch, ...we(t) });
class od extends Se {
    _parse(t) { if (this._getType(t) !== fe.nan) {
        const r = this._getOrReturnCtx(t);
        return ce(r, { code: ie.invalid_type, expected: fe.nan, received: r.parsedType }), ye;
    } return { status: "valid", value: t.data }; }
}
od.create = e => new od({ typeName: ve.ZodNaN, ...we(e) });
class R1 extends Se {
    _parse(t) { const { ctx: n } = this._processInputParams(t), r = n.data; return this._def.type._parse({ data: r, path: n.path, parent: n }); }
    unwrap() { return this._def.type; }
}
class wu extends Se {
    _parse(t) { const { status: n, ctx: r } = this._processInputParams(t); if (r.common.async)
        return (async () => { const i = await this._def.in._parseAsync({ data: r.data, path: r.path, parent: r }); return i.status === "aborted" ? ye : i.status === "dirty" ? (n.dirty(), qi(i.value)) : this._def.out._parseAsync({ data: i.value, path: r.path, parent: r }); })(); {
        const o = this._def.in._parseSync({ data: r.data, path: r.path, parent: r });
        return o.status === "aborted" ? ye : o.status === "dirty" ? (n.dirty(), { status: "dirty", value: o.value }) : this._def.out._parseSync({ data: o.value, path: r.path, parent: r });
    } }
    static create(t, n) { return new wu({ in: t, out: n, typeName: ve.ZodPipeline }); }
}
class Cl extends Se {
    _parse(t) { const n = this._def.innerType._parse(t), r = o => (pl(o) && (o.value = Object.freeze(o.value)), o); return ml(n) ? n.then(o => r(o)) : r(n); }
    unwrap() { return this._def.innerType; }
}
Cl.create = (e, t) => new Cl({ innerType: e, typeName: ve.ZodReadonly, ...we(t) });
Ze.lazycreate;
var ve;
(function (e) { e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly"; })(ve || (ve = {}));
const la = Ln.create;
ii.create;
od.create;
ai.create;
Xf.create;
Aa.create;
Jf.create;
gl.create;
yl.create;
ed.create;
Ko.create;
Pr.create;
td.create;
Sn.create;
const I1 = Ze.create;
Ze.strictCreate;
xl.create;
Ih.create;
wl.create;
Hn.create;
bl.create;
rd.create;
si.create;
sa.create;
_l.create;
El.create;
io.create;
Sl.create;
Pa.create;
Wn.create;
$n.create;
ao.create;
Wn.createWithPreprocess;
wu.create;
const RN = I1({ email: la().email({ message: "Invalid email address" }), password: la().min(8, { message: "Password must be at least 8 characters" }) }), IN = I1({ email: la().email({ message: "Invalid email address" }), password: la().min(8, { message: "Password must be at least 8 characters" }), confirmPassword: la().min(8, { message: "Password must be at least 8 characters" }) }).refine(e => e.password === e.confirmPassword, { message: "Passwords don't match", path: ["confirmPassword"] }), MN = () => { const [e, t] = E.useState(!1), n = E1({ resolver: O1(IN), defaultValues: { email: "", password: "", confirmPassword: "" } }), r = async (o) => { t(!0), console.log("Sign in", o), t(!1); }; return b.jsxs(Or, { children: [b.jsxs(Tr, { children: [b.jsx(oi, { children: "Sign Up" }), b.jsxs(Oa, { children: ["Welcome to Iskolar PH! ", b.jsx("br", {}), "Create a new account to get started."] })] }), b.jsx(S1, { ...n, children: b.jsxs("form", { onSubmit: n.handleSubmit(r), children: [b.jsxs(Ar, { className: "space-y-2", children: [b.jsx(aa, { control: n.control, name: "email", render: ({ field: o }) => b.jsxs(qo, { children: [b.jsx(Sr, { children: "Email" }), b.jsx(Ho, { children: b.jsx(Fn, { placeholder: "m@example.com", ...o }) }), b.jsx(Wo, {})] }) }), b.jsx(aa, { control: n.control, name: "password", render: ({ field: o }) => b.jsxs(qo, { children: [b.jsx(Sr, { children: "Password" }), b.jsx(Ho, { children: b.jsx(Fn, { type: "password", ...o }) }), b.jsx(Wo, {})] }) }), b.jsx(aa, { control: n.control, name: "confirmPassword", render: ({ field: o }) => b.jsxs(qo, { children: [b.jsx(Sr, { children: "Confirm Password" }), b.jsx(Ho, { children: b.jsx(Fn, { type: "password", ...o }) }), b.jsx(Wo, {})] }) })] }), b.jsx(vu, { children: b.jsx(Re, { type: "submit", className: "w-full", disabled: e, children: e ? "Signing up..." : "Sign Up" }) })] }) })] }); }, LN = () => { const [e, t] = E.useState(!1), n = E1({ resolver: O1(RN), defaultValues: { email: "", password: "" } }), r = async (o) => { t(!0), console.log("Sign in", o), t(!1); }; return b.jsxs(Or, { children: [b.jsxs(Tr, { children: [b.jsx(oi, { children: "Sign In" }), b.jsx(Oa, { children: "Enter your credentials to access your account." })] }), b.jsx(S1, { ...n, children: b.jsxs("form", { onSubmit: n.handleSubmit(r), children: [b.jsxs(Ar, { className: "space-y-2", children: [b.jsx(aa, { control: n.control, name: "email", render: ({ field: o }) => b.jsxs(qo, { children: [b.jsx(Sr, { children: "Email" }), b.jsx(Ho, { children: b.jsx(Fn, { placeholder: "m@example.com", ...o }) }), b.jsx(Wo, {})] }) }), b.jsx(aa, { control: n.control, name: "password", render: ({ field: o }) => b.jsxs(qo, { children: [b.jsx(Sr, { children: "Password" }), b.jsx(Ho, { children: b.jsx(Fn, { type: "password", ...o }) }), b.jsx(Wo, {})] }) })] }), b.jsx(vu, { children: b.jsx(Re, { type: "submit", className: "w-full", disabled: e, children: e ? "Signing in..." : "Sign In" }) })] }) })] }); }, DN = () => b.jsxs(Ch, { defaultValue: "signin", className: "w-[400px] m-auto mt-36", children: [b.jsxs(mu, { className: "grid w-full grid-cols-2", children: [b.jsx(_r, { value: "signin", children: "Sign In" }), b.jsx(_r, { value: "signup", children: "Sign Up" })] }), b.jsx(Er, { value: "signin", children: b.jsx(LN, {}) }), b.jsx(Er, { value: "signup", children: b.jsx(MN, {}) })] });
var iv = ["light", "dark"], FN = "(prefers-color-scheme: dark)", $N = E.createContext(void 0), BN = { setTheme: e => { }, themes: [] }, UN = () => { var e; return (e = E.useContext($N)) != null ? e : BN; };
E.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: a, attrs: s, nonce: l }) => { let f = i === "system", h = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map(g => `'${g}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, c = o ? iv.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", u = (g, v = !1, x = !0) => { let m = a ? a[g] : g, d = v ? g + "|| ''" : `'${m}'`, w = ""; return o && x && !v && iv.includes(g) && (w += `d.style.colorScheme = '${g}';`), n === "class" ? v || m ? w += `c.add(${d})` : w += "null" : m && (w += `d[s](n,${d})`), w; }, p = e ? `!function(){${h}${u(e)}}()` : r ? `!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${FN}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${u(a ? "x[e]" : "e", !0)}}${f ? "" : "else{" + u(i, !1, !1) + "}"}${c}}catch(e){}}()` : `!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${u(a ? "x[e]" : "e", !0)}}else{${u(i, !1, !1)};}${c}}catch(t){}}();`; return E.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: p } }); });
var zN = e => { switch (e) {
    case "success": return HN;
    case "info": return KN;
    case "warning": return WN;
    case "error": return GN;
    default: return null;
} }, VN = Array(12).fill(0), qN = ({ visible: e }) => te.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, te.createElement("div", { className: "sonner-spinner" }, VN.map((t, n) => te.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), HN = te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, te.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), WN = te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, te.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), KN = te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, te.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), GN = te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, te.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), ZN = () => { let [e, t] = te.useState(document.hidden); return te.useEffect(() => { let n = () => { t(document.hidden); }; return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n); }, []), e; }, id = 1, YN = class {
    constructor() { this.subscribe = e => (this.subscribers.push(e), () => { let t = this.subscribers.indexOf(e); this.subscribers.splice(t, 1); }), this.publish = e => { this.subscribers.forEach(t => t(e)); }, this.addToast = e => { this.publish(e), this.toasts = [...this.toasts, e]; }, this.create = e => { var t; let { message: n, ...r } = e, o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : id++, i = this.toasts.find(s => s.id === o), a = e.dismissible === void 0 ? !0 : e.dismissible; return i ? this.toasts = this.toasts.map(s => s.id === o ? (this.publish({ ...s, ...e, id: o, title: n }), { ...s, ...e, id: o, dismissible: a, title: n }) : s) : this.addToast({ title: n, ...r, dismissible: a, id: o }), o; }, this.dismiss = e => (e || this.toasts.forEach(t => { this.subscribers.forEach(n => n({ id: t.id, dismiss: !0 })); }), this.subscribers.forEach(t => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => { if (!t)
        return; let n; t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 })); let r = e instanceof Promise ? e : e(), o = n !== void 0; return r.then(async (i) => { if (XN(i) && !i.ok) {
        o = !1;
        let a = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, s = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
        this.create({ id: n, type: "error", message: a, description: s });
    }
    else if (t.success !== void 0) {
        o = !1;
        let a = typeof t.success == "function" ? await t.success(i) : t.success, s = typeof t.description == "function" ? await t.description(i) : t.description;
        this.create({ id: n, type: "success", message: a, description: s });
    } }).catch(async (i) => { if (t.error !== void 0) {
        o = !1;
        let a = typeof t.error == "function" ? await t.error(i) : t.error, s = typeof t.description == "function" ? await t.description(i) : t.description;
        this.create({ id: n, type: "error", message: a, description: s });
    } }).finally(() => { var i; o && (this.dismiss(n), n = void 0), (i = t.finally) == null || i.call(t); }), n; }, this.custom = (e, t) => { let n = (t == null ? void 0 : t.id) || id++; return this.create({ jsx: e(n), id: n, ...t }), n; }, this.subscribers = [], this.toasts = []; }
}, jt = new YN, QN = (e, t) => { let n = (t == null ? void 0 : t.id) || id++; return jt.addToast({ title: e, ...t, id: n }), n; }, XN = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", JN = QN, eC = () => jt.toasts;
Object.assign(JN, { success: jt.success, info: jt.info, warning: jt.warning, error: jt.error, custom: jt.custom, message: jt.message, promise: jt.promise, dismiss: jt.dismiss, loading: jt.loading }, { getHistory: eC });
function tC(e, { insertAt: t } = {}) { if (typeof document > "u")
    return; let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style"); r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)); }
tC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function hs(e) { return e.label !== void 0; }
var nC = 3, rC = "32px", oC = 4e3, iC = 356, aC = 14, sC = 20, lC = 200;
function uC(...e) { return e.filter(Boolean).join(" "); }
var cC = e => { var t, n, r, o, i, a, s, l, f, h; let { invert: c, toast: u, unstyled: p, interacting: g, setHeights: v, visibleToasts: x, heights: m, index: d, toasts: w, expanded: y, removeToast: _, defaultRichColors: T, closeButton: S, style: N, cancelButtonStyle: j, actionButtonStyle: O, className: C = "", descriptionClassName: k = "", duration: P, position: R, gap: $, loadingIcon: q, expandByDefault: H, classNames: V, icons: F, closeButtonAriaLabel: D = "Close toast", pauseWhenPageIsHidden: A, cn: M } = e, [U, K] = te.useState(!1), [G, L] = te.useState(!1), [z, Z] = te.useState(!1), [Q, X] = te.useState(!1), [ne, se] = te.useState(0), [he, me] = te.useState(0), Ee = te.useRef(null), Me = te.useRef(null), Le = d === 0, I = d + 1 <= x, B = u.type, W = u.dismissible !== !1, J = u.className || "", Y = u.descriptionClassName || "", ee = te.useMemo(() => m.findIndex(be => be.toastId === u.id) || 0, [m, u.id]), re = te.useMemo(() => { var be; return (be = u.closeButton) != null ? be : S; }, [u.closeButton, S]), ue = te.useMemo(() => u.duration || P || oC, [u.duration, P]), Ne = te.useRef(0), Ce = te.useRef(0), Oe = te.useRef(0), hn = te.useRef(null), [De, _t] = R.split("-"), Wa = te.useMemo(() => m.reduce((be, Be, Fe) => Fe >= ee ? be : be + Be.height, 0), [m, ee]), Ni = ZN(), tc = u.invert || c, go = B === "loading"; Ce.current = te.useMemo(() => ee * $ + Wa, [ee, Wa]), te.useEffect(() => { K(!0); }, []), te.useLayoutEffect(() => { if (!U)
    return; let be = Me.current, Be = be.style.height; be.style.height = "auto"; let Fe = be.getBoundingClientRect().height; be.style.height = Be, me(Fe), v(pn => pn.find(mn => mn.toastId === u.id) ? pn.map(mn => mn.toastId === u.id ? { ...mn, height: Fe } : mn) : [{ toastId: u.id, height: Fe, position: u.position }, ...pn]); }, [U, u.title, u.description, v, u.id]); let er = te.useCallback(() => { L(!0), se(Ce.current), v(be => be.filter(Be => Be.toastId !== u.id)), setTimeout(() => { _(u); }, lC); }, [u, _, v, Ce]); te.useEffect(() => { if (u.promise && B === "loading" || u.duration === 1 / 0 || u.type === "loading")
    return; let be, Be = ue; return y || g || A && Ni ? (() => { if (Oe.current < Ne.current) {
    let Fe = new Date().getTime() - Ne.current;
    Be = Be - Fe;
} Oe.current = new Date().getTime(); })() : Be !== 1 / 0 && (Ne.current = new Date().getTime(), be = setTimeout(() => { var Fe; (Fe = u.onAutoClose) == null || Fe.call(u, u), er(); }, Be)), () => clearTimeout(be); }, [y, g, H, u, ue, er, u.promise, B, A, Ni]), te.useEffect(() => { let be = Me.current; if (be) {
    let Be = be.getBoundingClientRect().height;
    return me(Be), v(Fe => [{ toastId: u.id, height: Be, position: u.position }, ...Fe]), () => v(Fe => Fe.filter(pn => pn.toastId !== u.id));
} }, [v, u.id]), te.useEffect(() => { u.delete && er(); }, [er, u.delete]); function c_() { return F != null && F.loading ? te.createElement("div", { className: "sonner-loader", "data-visible": B === "loading" }, F.loading) : q ? te.createElement("div", { className: "sonner-loader", "data-visible": B === "loading" }, q) : te.createElement(qN, { visible: B === "loading" }); } return te.createElement("li", { "aria-live": u.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: Me, className: M(C, J, V == null ? void 0 : V.toast, (t = u == null ? void 0 : u.classNames) == null ? void 0 : t.toast, V == null ? void 0 : V.default, V == null ? void 0 : V[B], (n = u == null ? void 0 : u.classNames) == null ? void 0 : n[B]), "data-sonner-toast": "", "data-rich-colors": (r = u.richColors) != null ? r : T, "data-styled": !(u.jsx || u.unstyled || p), "data-mounted": U, "data-promise": !!u.promise, "data-removed": G, "data-visible": I, "data-y-position": De, "data-x-position": _t, "data-index": d, "data-front": Le, "data-swiping": z, "data-dismissible": W, "data-type": B, "data-invert": tc, "data-swipe-out": Q, "data-expanded": !!(y || H && U), style: { "--index": d, "--toasts-before": d, "--z-index": w.length - d, "--offset": `${G ? ne : Ce.current}px`, "--initial-height": H ? "auto" : `${he}px`, ...N, ...u.style }, onPointerDown: be => { go || !W || (Ee.current = new Date, se(Ce.current), be.target.setPointerCapture(be.pointerId), be.target.tagName !== "BUTTON" && (Z(!0), hn.current = { x: be.clientX, y: be.clientY })); }, onPointerUp: () => { var be, Be, Fe, pn; if (Q || !W)
        return; hn.current = null; let mn = Number(((be = Me.current) == null ? void 0 : be.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), Ka = new Date().getTime() - ((Be = Ee.current) == null ? void 0 : Be.getTime()), f_ = Math.abs(mn) / Ka; if (Math.abs(mn) >= sC || f_ > .11) {
        se(Ce.current), (Fe = u.onDismiss) == null || Fe.call(u, u), er(), X(!0);
        return;
    } (pn = Me.current) == null || pn.style.setProperty("--swipe-amount", "0px"), Z(!1); }, onPointerMove: be => { var Be; if (!hn.current || !W)
        return; let Fe = be.clientY - hn.current.y, pn = be.clientX - hn.current.x, mn = (De === "top" ? Math.min : Math.max)(0, Fe), Ka = be.pointerType === "touch" ? 10 : 2; Math.abs(mn) > Ka ? (Be = Me.current) == null || Be.style.setProperty("--swipe-amount", `${Fe}px`) : Math.abs(pn) > Ka && (hn.current = null); } }, re && !u.jsx ? te.createElement("button", { "aria-label": D, "data-disabled": go, "data-close-button": !0, onClick: go || !W ? () => { } : () => { var be; er(), (be = u.onDismiss) == null || be.call(u, u); }, className: M(V == null ? void 0 : V.closeButton, (o = u == null ? void 0 : u.classNames) == null ? void 0 : o.closeButton) }, te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, te.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), te.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, u.jsx || te.isValidElement(u.title) ? u.jsx || u.title : te.createElement(te.Fragment, null, B || u.icon || u.promise ? te.createElement("div", { "data-icon": "", className: M(V == null ? void 0 : V.icon, (i = u == null ? void 0 : u.classNames) == null ? void 0 : i.icon) }, u.promise || u.type === "loading" && !u.icon ? u.icon || c_() : null, u.type !== "loading" ? u.icon || (F == null ? void 0 : F[B]) || zN(B) : null) : null, te.createElement("div", { "data-content": "", className: M(V == null ? void 0 : V.content, (a = u == null ? void 0 : u.classNames) == null ? void 0 : a.content) }, te.createElement("div", { "data-title": "", className: M(V == null ? void 0 : V.title, (s = u == null ? void 0 : u.classNames) == null ? void 0 : s.title) }, u.title), u.description ? te.createElement("div", { "data-description": "", className: M(k, Y, V == null ? void 0 : V.description, (l = u == null ? void 0 : u.classNames) == null ? void 0 : l.description) }, u.description) : null), te.isValidElement(u.cancel) ? u.cancel : u.cancel && hs(u.cancel) ? te.createElement("button", { "data-button": !0, "data-cancel": !0, style: u.cancelButtonStyle || j, onClick: be => { var Be, Fe; hs(u.cancel) && W && ((Fe = (Be = u.cancel).onClick) == null || Fe.call(Be, be), er()); }, className: M(V == null ? void 0 : V.cancelButton, (f = u == null ? void 0 : u.classNames) == null ? void 0 : f.cancelButton) }, u.cancel.label) : null, te.isValidElement(u.action) ? u.action : u.action && hs(u.action) ? te.createElement("button", { "data-button": !0, "data-action": !0, style: u.actionButtonStyle || O, onClick: be => { var Be, Fe; hs(u.action) && (be.defaultPrevented || ((Fe = (Be = u.action).onClick) == null || Fe.call(Be, be), er())); }, className: M(V == null ? void 0 : V.actionButton, (h = u == null ? void 0 : u.classNames) == null ? void 0 : h.actionButton) }, u.action.label) : null)); };
function av() { if (typeof window > "u" || typeof document > "u")
    return "ltr"; let e = document.documentElement.getAttribute("dir"); return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e; }
var fC = e => { let { invert: t, position: n = "bottom-right", hotkey: r = ["altKey", "KeyT"], expand: o, closeButton: i, className: a, offset: s, theme: l = "light", richColors: f, duration: h, style: c, visibleToasts: u = nC, toastOptions: p, dir: g = av(), gap: v = aC, loadingIcon: x, icons: m, containerAriaLabel: d = "Notifications", pauseWhenPageIsHidden: w, cn: y = uC } = e, [_, T] = te.useState([]), S = te.useMemo(() => Array.from(new Set([n].concat(_.filter(A => A.position).map(A => A.position)))), [_, n]), [N, j] = te.useState([]), [O, C] = te.useState(!1), [k, P] = te.useState(!1), [R, $] = te.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), q = te.useRef(null), H = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), V = te.useRef(null), F = te.useRef(!1), D = te.useCallback(A => { var M; (M = _.find(U => U.id === A.id)) != null && M.delete || jt.dismiss(A.id), T(U => U.filter(({ id: K }) => K !== A.id)); }, [_]); return te.useEffect(() => jt.subscribe(A => { if (A.dismiss) {
    T(M => M.map(U => U.id === A.id ? { ...U, delete: !0 } : U));
    return;
} setTimeout(() => { g0.flushSync(() => { T(M => { let U = M.findIndex(K => K.id === A.id); return U !== -1 ? [...M.slice(0, U), { ...M[U], ...A }, ...M.slice(U + 1)] : [A, ...M]; }); }); }); }), []), te.useEffect(() => { if (l !== "system") {
    $(l);
    return;
} l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: A }) => { $(A ? "dark" : "light"); }); }, [l]), te.useEffect(() => { _.length <= 1 && C(!1); }, [_]), te.useEffect(() => { let A = M => { var U, K; r.every(G => M[G] || M.code === G) && (C(!0), (U = q.current) == null || U.focus()), M.code === "Escape" && (document.activeElement === q.current || (K = q.current) != null && K.contains(document.activeElement)) && C(!1); }; return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A); }, [r]), te.useEffect(() => { if (q.current)
    return () => { V.current && (V.current.focus({ preventScroll: !0 }), V.current = null, F.current = !1); }; }, [q.current]), _.length ? te.createElement("section", { "aria-label": `${d} ${H}`, tabIndex: -1 }, S.map((A, M) => { var U; let [K, G] = A.split("-"); return te.createElement("ol", { key: A, dir: g === "auto" ? av() : g, tabIndex: -1, ref: q, className: a, "data-sonner-toaster": !0, "data-theme": R, "data-y-position": K, "data-x-position": G, style: { "--front-toast-height": `${((U = N[0]) == null ? void 0 : U.height) || 0}px`, "--offset": typeof s == "number" ? `${s}px` : s || rC, "--width": `${iC}px`, "--gap": `${v}px`, ...c }, onBlur: L => { F.current && !L.currentTarget.contains(L.relatedTarget) && (F.current = !1, V.current && (V.current.focus({ preventScroll: !0 }), V.current = null)); }, onFocus: L => { L.target instanceof HTMLElement && L.target.dataset.dismissible === "false" || F.current || (F.current = !0, V.current = L.relatedTarget); }, onMouseEnter: () => C(!0), onMouseMove: () => C(!0), onMouseLeave: () => { k || C(!1); }, onPointerDown: L => { L.target instanceof HTMLElement && L.target.dataset.dismissible === "false" || P(!0); }, onPointerUp: () => P(!1) }, _.filter(L => !L.position && M === 0 || L.position === A).map((L, z) => { var Z, Q; return te.createElement(cC, { key: L.id, icons: m, index: z, toast: L, defaultRichColors: f, duration: (Z = p == null ? void 0 : p.duration) != null ? Z : h, className: p == null ? void 0 : p.className, descriptionClassName: p == null ? void 0 : p.descriptionClassName, invert: t, visibleToasts: u, closeButton: (Q = p == null ? void 0 : p.closeButton) != null ? Q : i, interacting: k, position: A, style: p == null ? void 0 : p.style, unstyled: p == null ? void 0 : p.unstyled, classNames: p == null ? void 0 : p.classNames, cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle, actionButtonStyle: p == null ? void 0 : p.actionButtonStyle, removeToast: D, toasts: _.filter(X => X.position == L.position), heights: N.filter(X => X.position == L.position), setHeights: j, expandByDefault: o, gap: v, loadingIcon: x, expanded: O, pauseWhenPageIsHidden: w, cn: y }); })); })) : null; };
const dC = ({ ...e }) => { const { theme: t = "system" } = UN(); return b.jsx(fC, { theme: t, className: "toaster group", toastOptions: { classNames: { toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg", description: "group-[.toast]:text-muted-foreground", actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground", cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground" } }, ...e }); };
function po(e, t) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), o, i; for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n; }
var hC = ["color"], pC = E.forwardRef(function (e, t) { var n = e.color, r = n === void 0 ? "currentColor" : n, o = po(e, hC); return E.createElement("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o, { ref: t }), E.createElement("path", { d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: r, fillRule: "evenodd", clipRule: "evenodd" })); }), mC = ["color"], M1 = E.forwardRef(function (e, t) { var n = e.color, r = n === void 0 ? "currentColor" : n, o = po(e, mC); return E.createElement("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o, { ref: t }), E.createElement("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: r, fillRule: "evenodd", clipRule: "evenodd" })); }), vC = ["color"], gC = E.forwardRef(function (e, t) { var n = e.color, r = n === void 0 ? "currentColor" : n, o = po(e, vC); return E.createElement("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o, { ref: t }), E.createElement("path", { d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z", fill: r, fillRule: "evenodd", clipRule: "evenodd" })); }), yC = ["color"], xC = E.forwardRef(function (e, t) { var n = e.color, r = n === void 0 ? "currentColor" : n, o = po(e, yC); return E.createElement("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o, { ref: t }), E.createElement("path", { d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z", fill: r, fillRule: "evenodd", clipRule: "evenodd" })); }), wC = ["color"], bC = E.forwardRef(function (e, t) { var n = e.color, r = n === void 0 ? "currentColor" : n, o = po(e, wC); return E.createElement("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o, { ref: t }), E.createElement("path", { d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z", fill: r, fillRule: "evenodd", clipRule: "evenodd" })); }), _C = ["color"], L1 = E.forwardRef(function (e, t) { var n = e.color, r = n === void 0 ? "currentColor" : n, o = po(e, _C); return E.createElement("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o, { ref: t }), E.createElement("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: r, fillRule: "evenodd", clipRule: "evenodd" })); }), EC = ["color"], SC = E.forwardRef(function (e, t) { var n = e.color, r = n === void 0 ? "currentColor" : n, o = po(e, EC); return E.createElement("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o, { ref: t }), E.createElement("path", { d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z", fill: r })); });
function sv(e, [t, n]) { return Math.min(n, Math.max(t, e)); }
function kC(e, t = globalThis == null ? void 0 : globalThis.document) { const n = Bt(e); E.useEffect(() => { const r = o => { o.key === "Escape" && n(o); }; return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 }); }, [n, t]); }
var NC = "DismissableLayer", ad = "dismissableLayer.update", CC = "dismissableLayer.pointerDownOutside", OC = "dismissableLayer.focusOutside", lv, D1 = E.createContext({ layers: new Set, layersWithOutsidePointerEventsDisabled: new Set, branches: new Set }), vi = E.forwardRef((e, t) => { const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...l } = e, f = E.useContext(D1), [h, c] = E.useState(null), u = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = E.useState({}), g = je(t, S => c(S)), v = Array.from(f.layers), [x] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), m = v.indexOf(x), d = h ? v.indexOf(h) : -1, w = f.layersWithOutsidePointerEventsDisabled.size > 0, y = d >= m, _ = PC(S => { const N = S.target, j = [...f.branches].some(O => O.contains(N)); !y || j || (o == null || o(S), a == null || a(S), S.defaultPrevented || s == null || s()); }, u), T = jC(S => { const N = S.target; [...f.branches].some(O => O.contains(N)) || (i == null || i(S), a == null || a(S), S.defaultPrevented || s == null || s()); }, u); return kC(S => { d === f.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s())); }, u), E.useEffect(() => { if (h)
    return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (lv = u.body.style.pointerEvents, u.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(h)), f.layers.add(h), uv(), () => { n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (u.body.style.pointerEvents = lv); }; }, [h, u, n, f]), E.useEffect(() => () => { h && (f.layers.delete(h), f.layersWithOutsidePointerEventsDisabled.delete(h), uv()); }, [h, f]), E.useEffect(() => { const S = () => p({}); return document.addEventListener(ad, S), () => document.removeEventListener(ad, S); }, []), b.jsx(xe.div, { ...l, ref: g, style: { pointerEvents: w ? y ? "auto" : "none" : void 0, ...e.style }, onFocusCapture: le(e.onFocusCapture, T.onFocusCapture), onBlurCapture: le(e.onBlurCapture, T.onBlurCapture), onPointerDownCapture: le(e.onPointerDownCapture, _.onPointerDownCapture) }); });
vi.displayName = NC;
var TC = "DismissableLayerBranch", AC = E.forwardRef((e, t) => { const n = E.useContext(D1), r = E.useRef(null), o = je(t, r); return E.useEffect(() => { const i = r.current; if (i)
    return n.branches.add(i), () => { n.branches.delete(i); }; }, [n.branches]), b.jsx(xe.div, { ...e, ref: o }); });
AC.displayName = TC;
function PC(e, t = globalThis == null ? void 0 : globalThis.document) { const n = Bt(e), r = E.useRef(!1), o = E.useRef(() => { }); return E.useEffect(() => { const i = s => { if (s.target && !r.current) {
    let l = function () { F1(CC, n, f, { discrete: !0 }); };
    const f = { originalEvent: s };
    s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
}
else
    t.removeEventListener("click", o.current); r.current = !1; }, a = window.setTimeout(() => { t.addEventListener("pointerdown", i); }, 0); return () => { window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current); }; }, [t, n]), { onPointerDownCapture: () => r.current = !0 }; }
function jC(e, t = globalThis == null ? void 0 : globalThis.document) { const n = Bt(e), r = E.useRef(!1); return E.useEffect(() => { const o = i => { i.target && !r.current && F1(OC, n, { originalEvent: i }, { discrete: !1 }); }; return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o); }, [t, n]), { onFocusCapture: () => r.current = !0, onBlurCapture: () => r.current = !1 }; }
function uv() { const e = new CustomEvent(ad); document.dispatchEvent(e); }
function F1(e, t, n, { discrete: r }) { const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n }); t && o.addEventListener(e, t, { once: !0 }), r ? P0(o, i) : o.dispatchEvent(i); }
var Mc = 0;
function Mh() { E.useEffect(() => { const e = document.querySelectorAll("[data-radix-focus-guard]"); return document.body.insertAdjacentElement("afterbegin", e[0] ?? cv()), document.body.insertAdjacentElement("beforeend", e[1] ?? cv()), Mc++, () => { Mc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Mc--; }; }, []); }
function cv() { const e = document.createElement("span"); return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e; }
var Lc = "focusScope.autoFocusOnMount", Dc = "focusScope.autoFocusOnUnmount", fv = { bubbles: !1, cancelable: !0 }, RC = "FocusScope", bu = E.forwardRef((e, t) => { const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...a } = e, [s, l] = E.useState(null), f = Bt(o), h = Bt(i), c = E.useRef(null), u = je(t, v => l(v)), p = E.useRef({ paused: !1, pause() { this.paused = !0; }, resume() { this.paused = !1; } }).current; E.useEffect(() => { if (r) {
    let v = function (w) { if (p.paused || !s)
        return; const y = w.target; s.contains(y) ? c.current = y : or(c.current, { select: !0 }); }, x = function (w) { if (p.paused || !s)
        return; const y = w.relatedTarget; y !== null && (s.contains(y) || or(c.current, { select: !0 })); }, m = function (w) { if (document.activeElement === document.body)
        for (const _ of w)
            _.removedNodes.length > 0 && or(s); };
    document.addEventListener("focusin", v), document.addEventListener("focusout", x);
    const d = new MutationObserver(m);
    return s && d.observe(s, { childList: !0, subtree: !0 }), () => { document.removeEventListener("focusin", v), document.removeEventListener("focusout", x), d.disconnect(); };
} }, [r, s, p.paused]), E.useEffect(() => { if (s) {
    hv.add(p);
    const v = document.activeElement;
    if (!s.contains(v)) {
        const m = new CustomEvent(Lc, fv);
        s.addEventListener(Lc, f), s.dispatchEvent(m), m.defaultPrevented || (IC($C($1(s)), { select: !0 }), document.activeElement === v && or(s));
    }
    return () => { s.removeEventListener(Lc, f), setTimeout(() => { const m = new CustomEvent(Dc, fv); s.addEventListener(Dc, h), s.dispatchEvent(m), m.defaultPrevented || or(v ?? document.body, { select: !0 }), s.removeEventListener(Dc, h), hv.remove(p); }, 0); };
} }, [s, f, h, p]); const g = E.useCallback(v => { if (!n && !r || p.paused)
    return; const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, m = document.activeElement; if (x && m) {
    const d = v.currentTarget, [w, y] = MC(d);
    w && y ? !v.shiftKey && m === y ? (v.preventDefault(), n && or(w, { select: !0 })) : v.shiftKey && m === w && (v.preventDefault(), n && or(y, { select: !0 })) : m === d && v.preventDefault();
} }, [n, r, p.paused]); return b.jsx(xe.div, { tabIndex: -1, ...a, ref: u, onKeyDown: g }); });
bu.displayName = RC;
function IC(e, { select: t = !1 } = {}) { const n = document.activeElement; for (const r of e)
    if (or(r, { select: t }), document.activeElement !== n)
        return; }
function MC(e) { const t = $1(e), n = dv(t, e), r = dv(t.reverse(), e); return [n, r]; }
function $1(e) { const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: r => { const o = r.tagName === "INPUT" && r.type === "hidden"; return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; } }); for (; n.nextNode();)
    t.push(n.currentNode); return t; }
function dv(e, t) { for (const n of e)
    if (!LC(n, { upTo: t }))
        return n; }
function LC(e, { upTo: t }) { if (getComputedStyle(e).visibility === "hidden")
    return !0; for (; e;) {
    if (t !== void 0 && e === t)
        return !1;
    if (getComputedStyle(e).display === "none")
        return !0;
    e = e.parentElement;
} return !1; }
function DC(e) { return e instanceof HTMLInputElement && "select" in e; }
function or(e, { select: t = !1 } = {}) { if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && DC(e) && t && e.select();
} }
var hv = FC();
function FC() { let e = []; return { add(t) { const n = e[0]; t !== n && (n == null || n.pause()), e = pv(e, t), e.unshift(t); }, remove(t) { var n; e = pv(e, t), (n = e[0]) == null || n.resume(); } }; }
function pv(e, t) { const n = [...e], r = n.indexOf(t); return r !== -1 && n.splice(r, 1), n; }
function $C(e) { return e.filter(t => t.tagName !== "A"); }
const BC = ["top", "right", "bottom", "left"], jr = Math.min, It = Math.max, Ol = Math.round, ps = Math.floor, Rr = e => ({ x: e, y: e }), UC = { left: "right", right: "left", bottom: "top", top: "bottom" }, zC = { start: "end", end: "start" };
function sd(e, t, n) { return It(e, jr(t, n)); }
function Kn(e, t) { return typeof e == "function" ? e(t) : e; }
function Gn(e) { return e.split("-")[0]; }
function gi(e) { return e.split("-")[1]; }
function Lh(e) { return e === "x" ? "y" : "x"; }
function Dh(e) { return e === "y" ? "height" : "width"; }
function Ir(e) { return ["top", "bottom"].includes(Gn(e)) ? "y" : "x"; }
function Fh(e) { return Lh(Ir(e)); }
function VC(e, t, n) { n === void 0 && (n = !1); const r = gi(e), o = Fh(e), i = Dh(o); let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top"; return t.reference[i] > t.floating[i] && (a = Tl(a)), [a, Tl(a)]; }
function qC(e) { const t = Tl(e); return [ld(e), t, ld(t)]; }
function ld(e) { return e.replace(/start|end/g, t => zC[t]); }
function HC(e, t, n) { const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"]; switch (e) {
    case "top":
    case "bottom": return n ? t ? o : r : t ? r : o;
    case "left":
    case "right": return t ? i : a;
    default: return [];
} }
function WC(e, t, n, r) { const o = gi(e); let i = HC(Gn(e), n === "start", r); return o && (i = i.map(a => a + "-" + o), t && (i = i.concat(i.map(ld)))), i; }
function Tl(e) { return e.replace(/left|right|bottom|top/g, t => UC[t]); }
function KC(e) { return { top: 0, right: 0, bottom: 0, left: 0, ...e }; }
function B1(e) { return typeof e != "number" ? KC(e) : { top: e, right: e, bottom: e, left: e }; }
function Al(e) { const { x: t, y: n, width: r, height: o } = e; return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n }; }
function mv(e, t, n) { let { reference: r, floating: o } = e; const i = Ir(t), a = Fh(t), s = Dh(a), l = Gn(t), f = i === "y", h = r.x + r.width / 2 - o.width / 2, c = r.y + r.height / 2 - o.height / 2, u = r[s] / 2 - o[s] / 2; let p; switch (l) {
    case "top":
        p = { x: h, y: r.y - o.height };
        break;
    case "bottom":
        p = { x: h, y: r.y + r.height };
        break;
    case "right":
        p = { x: r.x + r.width, y: c };
        break;
    case "left":
        p = { x: r.x - o.width, y: c };
        break;
    default: p = { x: r.x, y: r.y };
} switch (gi(t)) {
    case "start":
        p[a] -= u * (n && f ? -1 : 1);
        break;
    case "end":
        p[a] += u * (n && f ? -1 : 1);
        break;
} return p; }
const GC = async (e, t, n) => { const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: a } = n, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t)); let f = await a.getElementRects({ reference: e, floating: t, strategy: o }), { x: h, y: c } = mv(f, r, l), u = r, p = {}, g = 0; for (let v = 0; v < s.length; v++) {
    const { name: x, fn: m } = s[v], { x: d, y: w, data: y, reset: _ } = await m({ x: h, y: c, initialPlacement: r, placement: u, strategy: o, middlewareData: p, rects: f, platform: a, elements: { reference: e, floating: t } });
    h = d ?? h, c = w ?? c, p = { ...p, [x]: { ...p[x], ...y } }, _ && g <= 50 && (g++, typeof _ == "object" && (_.placement && (u = _.placement), _.rects && (f = _.rects === !0 ? await a.getElementRects({ reference: e, floating: t, strategy: o }) : _.rects), { x: h, y: c } = mv(f, u, l)), v = -1);
} return { x: h, y: c, placement: u, strategy: o, middlewareData: p }; };
async function ja(e, t) { var n; t === void 0 && (t = {}); const { x: r, y: o, platform: i, rects: a, elements: s, strategy: l } = e, { boundary: f = "clippingAncestors", rootBoundary: h = "viewport", elementContext: c = "floating", altBoundary: u = !1, padding: p = 0 } = Kn(t, e), g = B1(p), x = s[u ? c === "floating" ? "reference" : "floating" : c], m = Al(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)), boundary: f, rootBoundary: h, strategy: l })), d = c === "floating" ? { x: r, y: o, width: a.floating.width, height: a.floating.height } : a.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), y = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || { x: 1, y: 1 } : { x: 1, y: 1 }, _ = Al(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s, rect: d, offsetParent: w, strategy: l }) : d); return { top: (m.top - _.top + g.top) / y.y, bottom: (_.bottom - m.bottom + g.bottom) / y.y, left: (m.left - _.left + g.left) / y.x, right: (_.right - m.right + g.right) / y.x }; }
const ZC = e => ({ name: "arrow", options: e, async fn(t) { const { x: n, y: r, placement: o, rects: i, platform: a, elements: s, middlewareData: l } = t, { element: f, padding: h = 0 } = Kn(e, t) || {}; if (f == null)
        return {}; const c = B1(h), u = { x: n, y: r }, p = Fh(o), g = Dh(p), v = await a.getDimensions(f), x = p === "y", m = x ? "top" : "left", d = x ? "bottom" : "right", w = x ? "clientHeight" : "clientWidth", y = i.reference[g] + i.reference[p] - u[p] - i.floating[g], _ = u[p] - i.reference[p], T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(f)); let S = T ? T[w] : 0; (!S || !await (a.isElement == null ? void 0 : a.isElement(T))) && (S = s.floating[w] || i.floating[g]); const N = y / 2 - _ / 2, j = S / 2 - v[g] / 2 - 1, O = jr(c[m], j), C = jr(c[d], j), k = O, P = S - v[g] - C, R = S / 2 - v[g] / 2 + N, $ = sd(k, R, P), q = !l.arrow && gi(o) != null && R !== $ && i.reference[g] / 2 - (R < k ? O : C) - v[g] / 2 < 0, H = q ? R < k ? R - k : R - P : 0; return { [p]: u[p] + H, data: { [p]: $, centerOffset: R - $ - H, ...q && { alignmentOffset: H } }, reset: q }; } }), YC = function (e) { return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) { var n, r; const { placement: o, middlewareData: i, rects: a, initialPlacement: s, platform: l, elements: f } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: v = !0, ...x } = Kn(e, t); if ((n = i.arrow) != null && n.alignmentOffset)
        return {}; const m = Gn(o), d = Ir(s), w = Gn(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), _ = u || (w || !v ? [Tl(s)] : qC(s)), T = g !== "none"; !u && T && _.push(...WC(s, v, g, y)); const S = [s, ..._], N = await ja(t, x), j = []; let O = ((r = i.flip) == null ? void 0 : r.overflows) || []; if (h && j.push(N[m]), c) {
        const R = VC(o, a, y);
        j.push(N[R[0]], N[R[1]]);
    } if (O = [...O, { placement: o, overflows: j }], !j.every(R => R <= 0)) {
        var C, k;
        const R = (((C = i.flip) == null ? void 0 : C.index) || 0) + 1, $ = S[R];
        if ($)
            return { data: { index: R, overflows: O }, reset: { placement: $ } };
        let q = (k = O.filter(H => H.overflows[0] <= 0).sort((H, V) => H.overflows[1] - V.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!q)
            switch (p) {
                case "bestFit": {
                    var P;
                    const H = (P = O.filter(V => { if (T) {
                        const F = Ir(V.placement);
                        return F === d || F === "y";
                    } return !0; }).map(V => [V.placement, V.overflows.filter(F => F > 0).reduce((F, D) => F + D, 0)]).sort((V, F) => V[1] - F[1])[0]) == null ? void 0 : P[0];
                    H && (q = H);
                    break;
                }
                case "initialPlacement":
                    q = s;
                    break;
            }
        if (o !== q)
            return { reset: { placement: q } };
    } return {}; } }; };
function vv(e, t) { return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width }; }
function gv(e) { return BC.some(t => e[t] >= 0); }
const QC = function (e) { return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) { const { rects: n } = t, { strategy: r = "referenceHidden", ...o } = Kn(e, t); switch (r) {
        case "referenceHidden": {
            const i = await ja(t, { ...o, elementContext: "reference" }), a = vv(i, n.reference);
            return { data: { referenceHiddenOffsets: a, referenceHidden: gv(a) } };
        }
        case "escaped": {
            const i = await ja(t, { ...o, altBoundary: !0 }), a = vv(i, n.floating);
            return { data: { escapedOffsets: a, escaped: gv(a) } };
        }
        default: return {};
    } } }; };
async function XC(e, t) { const { placement: n, platform: r, elements: o } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Gn(n), s = gi(n), l = Ir(n) === "y", f = ["left", "top"].includes(a) ? -1 : 1, h = i && l ? -1 : 1, c = Kn(t, e); let { mainAxis: u, crossAxis: p, alignmentAxis: g } = typeof c == "number" ? { mainAxis: c, crossAxis: 0, alignmentAxis: null } : { mainAxis: c.mainAxis || 0, crossAxis: c.crossAxis || 0, alignmentAxis: c.alignmentAxis }; return s && typeof g == "number" && (p = s === "end" ? g * -1 : g), l ? { x: p * h, y: u * f } : { x: u * f, y: p * h }; }
const JC = function (e) { return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) { var n, r; const { x: o, y: i, placement: a, middlewareData: s } = t, l = await XC(t, e); return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : { x: o + l.x, y: i + l.y, data: { ...l, placement: a } }; } }; }, eO = function (e) { return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) { const { x: n, y: r, placement: o } = t, { mainAxis: i = !0, crossAxis: a = !1, limiter: s = { fn: x => { let { x: m, y: d } = x; return { x: m, y: d }; } }, ...l } = Kn(e, t), f = { x: n, y: r }, h = await ja(t, l), c = Ir(Gn(o)), u = Lh(c); let p = f[u], g = f[c]; if (i) {
        const x = u === "y" ? "top" : "left", m = u === "y" ? "bottom" : "right", d = p + h[x], w = p - h[m];
        p = sd(d, p, w);
    } if (a) {
        const x = c === "y" ? "top" : "left", m = c === "y" ? "bottom" : "right", d = g + h[x], w = g - h[m];
        g = sd(d, g, w);
    } const v = s.fn({ ...t, [u]: p, [c]: g }); return { ...v, data: { x: v.x - n, y: v.y - r, enabled: { [u]: i, [c]: a } } }; } }; }, tO = function (e) { return e === void 0 && (e = {}), { options: e, fn(t) { const { x: n, y: r, placement: o, rects: i, middlewareData: a } = t, { offset: s = 0, mainAxis: l = !0, crossAxis: f = !0 } = Kn(e, t), h = { x: n, y: r }, c = Ir(o), u = Lh(c); let p = h[u], g = h[c]; const v = Kn(s, t), x = typeof v == "number" ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v }; if (l) {
        const w = u === "y" ? "height" : "width", y = i.reference[u] - i.floating[w] + x.mainAxis, _ = i.reference[u] + i.reference[w] - x.mainAxis;
        p < y ? p = y : p > _ && (p = _);
    } if (f) {
        var m, d;
        const w = u === "y" ? "width" : "height", y = ["top", "left"].includes(Gn(o)), _ = i.reference[c] - i.floating[w] + (y && ((m = a.offset) == null ? void 0 : m[c]) || 0) + (y ? 0 : x.crossAxis), T = i.reference[c] + i.reference[w] + (y ? 0 : ((d = a.offset) == null ? void 0 : d[c]) || 0) - (y ? x.crossAxis : 0);
        g < _ ? g = _ : g > T && (g = T);
    } return { [u]: p, [c]: g }; } }; }, nO = function (e) { return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) { var n, r; const { placement: o, rects: i, platform: a, elements: s } = t, { apply: l = () => { }, ...f } = Kn(e, t), h = await ja(t, f), c = Gn(o), u = gi(o), p = Ir(o) === "y", { width: g, height: v } = i.floating; let x, m; c === "top" || c === "bottom" ? (x = c, m = u === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = c, x = u === "end" ? "top" : "bottom"); const d = v - h.top - h.bottom, w = g - h.left - h.right, y = jr(v - h[x], d), _ = jr(g - h[m], w), T = !t.middlewareData.shift; let S = y, N = _; if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = w), (r = t.middlewareData.shift) != null && r.enabled.y && (S = d), T && !u) {
        const O = It(h.left, 0), C = It(h.right, 0), k = It(h.top, 0), P = It(h.bottom, 0);
        p ? N = g - 2 * (O !== 0 || C !== 0 ? O + C : It(h.left, h.right)) : S = v - 2 * (k !== 0 || P !== 0 ? k + P : It(h.top, h.bottom));
    } await l({ ...t, availableWidth: N, availableHeight: S }); const j = await a.getDimensions(s.floating); return g !== j.width || v !== j.height ? { reset: { rects: !0 } } : {}; } }; };
function _u() { return typeof window < "u"; }
function yi(e) { return U1(e) ? (e.nodeName || "").toLowerCase() : "#document"; }
function Ft(e) { var t; return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window; }
function Cn(e) { var t; return (t = (U1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement; }
function U1(e) { return _u() ? e instanceof Node || e instanceof Ft(e).Node : !1; }
function un(e) { return _u() ? e instanceof Element || e instanceof Ft(e).Element : !1; }
function Nn(e) { return _u() ? e instanceof HTMLElement || e instanceof Ft(e).HTMLElement : !1; }
function yv(e) { return !_u() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ft(e).ShadowRoot; }
function za(e) { const { overflow: t, overflowX: n, overflowY: r, display: o } = cn(e); return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o); }
function rO(e) { return ["table", "td", "th"].includes(yi(e)); }
function Eu(e) { return [":popover-open", ":modal"].some(t => { try {
    return e.matches(t);
}
catch {
    return !1;
} }); }
function $h(e) { const t = Bh(), n = un(e) ? cn(e) : e; return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r)); }
function oO(e) { let t = Mr(e); for (; Nn(t) && !li(t);) {
    if ($h(t))
        return t;
    if (Eu(t))
        return null;
    t = Mr(t);
} return null; }
function Bh() { return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none"); }
function li(e) { return ["html", "body", "#document"].includes(yi(e)); }
function cn(e) { return Ft(e).getComputedStyle(e); }
function Su(e) { return un(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY }; }
function Mr(e) { if (yi(e) === "html")
    return e; const t = e.assignedSlot || e.parentNode || yv(e) && e.host || Cn(e); return yv(t) ? t.host : t; }
function z1(e) { const t = Mr(e); return li(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Nn(t) && za(t) ? t : z1(t); }
function Ra(e, t, n) { var r; t === void 0 && (t = []), n === void 0 && (n = !0); const o = z1(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ft(o); if (i) {
    const s = ud(a);
    return t.concat(a, a.visualViewport || [], za(o) ? o : [], s && n ? Ra(s) : []);
} return t.concat(o, Ra(o, [], n)); }
function ud(e) { return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null; }
function V1(e) { const t = cn(e); let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0; const o = Nn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Ol(n) !== i || Ol(r) !== a; return s && (n = i, r = a), { width: n, height: r, $: s }; }
function Uh(e) { return un(e) ? e : e.contextElement; }
function Go(e) { const t = Uh(e); if (!Nn(t))
    return Rr(1); const n = t.getBoundingClientRect(), { width: r, height: o, $: i } = V1(t); let a = (i ? Ol(n.width) : n.width) / r, s = (i ? Ol(n.height) : n.height) / o; return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: a, y: s }; }
const iO = Rr(0);
function q1(e) { const t = Ft(e); return !Bh() || !t.visualViewport ? iO : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }; }
function aO(e, t, n) { return t === void 0 && (t = !1), !n || t && n !== Ft(e) ? !1 : t; }
function so(e, t, n, r) { t === void 0 && (t = !1), n === void 0 && (n = !1); const o = e.getBoundingClientRect(), i = Uh(e); let a = Rr(1); t && (r ? un(r) && (a = Go(r)) : a = Go(e)); const s = aO(i, n, r) ? q1(i) : Rr(0); let l = (o.left + s.x) / a.x, f = (o.top + s.y) / a.y, h = o.width / a.x, c = o.height / a.y; if (i) {
    const u = Ft(i), p = r && un(r) ? Ft(r) : r;
    let g = u, v = ud(g);
    for (; v && r && p !== g;) {
        const x = Go(v), m = v.getBoundingClientRect(), d = cn(v), w = m.left + (v.clientLeft + parseFloat(d.paddingLeft)) * x.x, y = m.top + (v.clientTop + parseFloat(d.paddingTop)) * x.y;
        l *= x.x, f *= x.y, h *= x.x, c *= x.y, l += w, f += y, g = Ft(v), v = ud(g);
    }
} return Al({ width: h, height: c, x: l, y: f }); }
function sO(e) { let { elements: t, rect: n, offsetParent: r, strategy: o } = e; const i = o === "fixed", a = Cn(r), s = t ? Eu(t.floating) : !1; if (r === a || s && i)
    return n; let l = { scrollLeft: 0, scrollTop: 0 }, f = Rr(1); const h = Rr(0), c = Nn(r); if ((c || !c && !i) && ((yi(r) !== "body" || za(a)) && (l = Su(r)), Nn(r))) {
    const u = so(r);
    f = Go(r), h.x = u.x + r.clientLeft, h.y = u.y + r.clientTop;
} return { width: n.width * f.x, height: n.height * f.y, x: n.x * f.x - l.scrollLeft * f.x + h.x, y: n.y * f.y - l.scrollTop * f.y + h.y }; }
function lO(e) { return Array.from(e.getClientRects()); }
function cd(e, t) { const n = Su(e).scrollLeft; return t ? t.left + n : so(Cn(e)).left + n; }
function uO(e) { const t = Cn(e), n = Su(e), r = e.ownerDocument.body, o = It(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = It(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight); let a = -n.scrollLeft + cd(e); const s = -n.scrollTop; return cn(r).direction === "rtl" && (a += It(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: a, y: s }; }
function cO(e, t) { const n = Ft(e), r = Cn(e), o = n.visualViewport; let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0; if (o) {
    i = o.width, a = o.height;
    const f = Bh();
    (!f || f && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
} return { width: i, height: a, x: s, y: l }; }
function fO(e, t) { const n = so(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Nn(e) ? Go(e) : Rr(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, f = r * i.y; return { width: a, height: s, x: l, y: f }; }
function xv(e, t, n) { let r; if (t === "viewport")
    r = cO(e, n);
else if (t === "document")
    r = uO(Cn(e));
else if (un(t))
    r = fO(t, n);
else {
    const o = q1(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
} return Al(r); }
function H1(e, t) { const n = Mr(e); return n === t || !un(n) || li(n) ? !1 : cn(n).position === "fixed" || H1(n, t); }
function dO(e, t) { const n = t.get(e); if (n)
    return n; let r = Ra(e, [], !1).filter(s => un(s) && yi(s) !== "body"), o = null; const i = cn(e).position === "fixed"; let a = i ? Mr(e) : e; for (; un(a) && !li(a);) {
    const s = cn(a), l = $h(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || za(a) && !l && H1(e, a)) ? r = r.filter(h => h !== a) : o = s, a = Mr(a);
} return t.set(e, r), r; }
function hO(e) { let { element: t, boundary: n, rootBoundary: r, strategy: o } = e; const a = [...n === "clippingAncestors" ? Eu(t) ? [] : dO(t, this._c) : [].concat(n), r], s = a[0], l = a.reduce((f, h) => { const c = xv(t, h, o); return f.top = It(c.top, f.top), f.right = jr(c.right, f.right), f.bottom = jr(c.bottom, f.bottom), f.left = It(c.left, f.left), f; }, xv(t, s, o)); return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top }; }
function pO(e) { const { width: t, height: n } = V1(e); return { width: t, height: n }; }
function mO(e, t, n) { const r = Nn(t), o = Cn(t), i = n === "fixed", a = so(e, !0, i, t); let s = { scrollLeft: 0, scrollTop: 0 }; const l = Rr(0); if (r || !r && !i)
    if ((yi(t) !== "body" || za(o)) && (s = Su(t)), r) {
        const p = so(t, !0, i, t);
        l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    }
    else
        o && (l.x = cd(o)); let f = 0, h = 0; if (o && !r && !i) {
    const p = o.getBoundingClientRect();
    h = p.top + s.scrollTop, f = p.left + s.scrollLeft - cd(o, p);
} const c = a.left + s.scrollLeft - l.x - f, u = a.top + s.scrollTop - l.y - h; return { x: c, y: u, width: a.width, height: a.height }; }
function Fc(e) { return cn(e).position === "static"; }
function wv(e, t) { if (!Nn(e) || cn(e).position === "fixed")
    return null; if (t)
    return t(e); let n = e.offsetParent; return Cn(e) === n && (n = n.ownerDocument.body), n; }
function W1(e, t) { const n = Ft(e); if (Eu(e))
    return n; if (!Nn(e)) {
    let o = Mr(e);
    for (; o && !li(o);) {
        if (un(o) && !Fc(o))
            return o;
        o = Mr(o);
    }
    return n;
} let r = wv(e, t); for (; r && rO(r) && Fc(r);)
    r = wv(r, t); return r && li(r) && Fc(r) && !$h(r) ? n : r || oO(e) || n; }
const vO = async function (e) { const t = this.getOffsetParent || W1, n = this.getDimensions, r = await n(e.floating); return { reference: mO(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } }; };
function gO(e) { return cn(e).direction === "rtl"; }
const yO = { convertOffsetParentRelativeRectToViewportRelativeRect: sO, getDocumentElement: Cn, getClippingRect: hO, getOffsetParent: W1, getElementRects: vO, getClientRects: lO, getDimensions: pO, getScale: Go, isElement: un, isRTL: gO };
function xO(e, t) { let n = null, r; const o = Cn(e); function i() { var s; clearTimeout(r), (s = n) == null || s.disconnect(), n = null; } function a(s, l) { s === void 0 && (s = !1), l === void 0 && (l = 1), i(); const { left: f, top: h, width: c, height: u } = e.getBoundingClientRect(); if (s || t(), !c || !u)
    return; const p = ps(h), g = ps(o.clientWidth - (f + c)), v = ps(o.clientHeight - (h + u)), x = ps(f), d = { rootMargin: -p + "px " + -g + "px " + -v + "px " + -x + "px", threshold: It(0, jr(1, l)) || 1 }; let w = !0; function y(_) { const T = _[0].intersectionRatio; if (T !== l) {
    if (!w)
        return a();
    T ? a(!1, T) : r = setTimeout(() => { a(!1, 1e-7); }, 1e3);
} w = !1; } try {
    n = new IntersectionObserver(y, { ...d, root: o.ownerDocument });
}
catch {
    n = new IntersectionObserver(y, d);
} n.observe(e); } return a(!0), i; }
function wO(e, t, n, r) { r === void 0 && (r = {}); const { ancestorScroll: o = !0, ancestorResize: i = !0, elementResize: a = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: l = !1 } = r, f = Uh(e), h = o || i ? [...f ? Ra(f) : [], ...Ra(t)] : []; h.forEach(m => { o && m.addEventListener("scroll", n, { passive: !0 }), i && m.addEventListener("resize", n); }); const c = f && s ? xO(f, n) : null; let u = -1, p = null; a && (p = new ResizeObserver(m => { let [d] = m; d && d.target === f && p && (p.unobserve(t), cancelAnimationFrame(u), u = requestAnimationFrame(() => { var w; (w = p) == null || w.observe(t); })), n(); }), f && !l && p.observe(f), p.observe(t)); let g, v = l ? so(e) : null; l && x(); function x() { const m = so(e); v && (m.x !== v.x || m.y !== v.y || m.width !== v.width || m.height !== v.height) && n(), v = m, g = requestAnimationFrame(x); } return n(), () => { var m; h.forEach(d => { o && d.removeEventListener("scroll", n), i && d.removeEventListener("resize", n); }), c == null || c(), (m = p) == null || m.disconnect(), p = null, l && cancelAnimationFrame(g); }; }
const bO = JC, _O = eO, EO = YC, SO = nO, kO = QC, bv = ZC, NO = tO, CO = (e, t, n) => { const r = new Map, o = { platform: yO, ...n }, i = { ...o.platform, _c: r }; return GC(e, t, { ...o, platform: i }); };
var Rs = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function Pl(e, t) { if (e === t)
    return !0; if (typeof e != typeof t)
    return !1; if (typeof e == "function" && e.toString() === t.toString())
    return !0; let n, r, o; if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
        if (n = e.length, n !== t.length)
            return !1;
        for (r = n; r-- !== 0;)
            if (!Pl(e[r], t[r]))
                return !1;
        return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
        return !1;
    for (r = n; r-- !== 0;)
        if (!{}.hasOwnProperty.call(t, o[r]))
            return !1;
    for (r = n; r-- !== 0;) {
        const i = o[r];
        if (!(i === "_owner" && e.$$typeof) && !Pl(e[i], t[i]))
            return !1;
    }
    return !0;
} return e !== e && t !== t; }
function K1(e) { return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1; }
function _v(e, t) { const n = K1(e); return Math.round(t * n) / n; }
function $c(e) { const t = E.useRef(e); return Rs(() => { t.current = e; }), t; }
function OO(e) { e === void 0 && (e = {}); const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: i, floating: a } = {}, transform: s = !0, whileElementsMounted: l, open: f } = e, [h, c] = E.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }), [u, p] = E.useState(r); Pl(u, r) || p(r); const [g, v] = E.useState(null), [x, m] = E.useState(null), d = E.useCallback(V => { V !== T.current && (T.current = V, v(V)); }, []), w = E.useCallback(V => { V !== S.current && (S.current = V, m(V)); }, []), y = i || g, _ = a || x, T = E.useRef(null), S = E.useRef(null), N = E.useRef(h), j = l != null, O = $c(l), C = $c(o), k = $c(f), P = E.useCallback(() => { if (!T.current || !S.current)
    return; const V = { placement: t, strategy: n, middleware: u }; C.current && (V.platform = C.current), CO(T.current, S.current, V).then(F => { const D = { ...F, isPositioned: k.current !== !1 }; R.current && !Pl(N.current, D) && (N.current = D, ho.flushSync(() => { c(D); })); }); }, [u, t, n, C, k]); Rs(() => { f === !1 && N.current.isPositioned && (N.current.isPositioned = !1, c(V => ({ ...V, isPositioned: !1 }))); }, [f]); const R = E.useRef(!1); Rs(() => (R.current = !0, () => { R.current = !1; }), []), Rs(() => { if (y && (T.current = y), _ && (S.current = _), y && _) {
    if (O.current)
        return O.current(y, _, P);
    P();
} }, [y, _, P, O, j]); const $ = E.useMemo(() => ({ reference: T, floating: S, setReference: d, setFloating: w }), [d, w]), q = E.useMemo(() => ({ reference: y, floating: _ }), [y, _]), H = E.useMemo(() => { const V = { position: n, left: 0, top: 0 }; if (!q.floating)
    return V; const F = _v(q.floating, h.x), D = _v(q.floating, h.y); return s ? { ...V, transform: "translate(" + F + "px, " + D + "px)", ...K1(q.floating) >= 1.5 && { willChange: "transform" } } : { position: n, left: F, top: D }; }, [n, s, q.floating, h.x, h.y]); return E.useMemo(() => ({ ...h, update: P, refs: $, elements: q, floatingStyles: H }), [h, P, $, q, H]); }
const TO = e => { function t(n) { return {}.hasOwnProperty.call(n, "current"); } return { name: "arrow", options: e, fn(n) { const { element: r, padding: o } = typeof e == "function" ? e(n) : e; return r && t(r) ? r.current != null ? bv({ element: r.current, padding: o }).fn(n) : {} : r ? bv({ element: r, padding: o }).fn(n) : {}; } }; }, AO = (e, t) => ({ ...bO(e), options: [e, t] }), PO = (e, t) => ({ ..._O(e), options: [e, t] }), jO = (e, t) => ({ ...NO(e), options: [e, t] }), RO = (e, t) => ({ ...EO(e), options: [e, t] }), IO = (e, t) => ({ ...SO(e), options: [e, t] }), MO = (e, t) => ({ ...kO(e), options: [e, t] }), LO = (e, t) => ({ ...TO(e), options: [e, t] });
var DO = "Arrow", G1 = E.forwardRef((e, t) => { const { children: n, width: r = 10, height: o = 5, ...i } = e; return b.jsx(xe.svg, { ...i, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : b.jsx("polygon", { points: "0,0 30,0 15,10" }) }); });
G1.displayName = DO;
var FO = G1;
function $O(e, t = []) { let n = []; function r(i, a) { const s = E.createContext(a), l = n.length; n = [...n, a]; function f(c) { const { scope: u, children: p, ...g } = c, v = (u == null ? void 0 : u[e][l]) || s, x = E.useMemo(() => g, Object.values(g)); return b.jsx(v.Provider, { value: x, children: p }); } function h(c, u) { const p = (u == null ? void 0 : u[e][l]) || s, g = E.useContext(p); if (g)
    return g; if (a !== void 0)
    return a; throw new Error(`\`${c}\` must be used within \`${i}\``); } return f.displayName = i + "Provider", [f, h]; } const o = () => { const i = n.map(a => E.createContext(a)); return function (s) { const l = (s == null ? void 0 : s[e]) || i; return E.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]); }; }; return o.scopeName = e, [r, BO(o, ...t)]; }
function BO(...e) { const t = e[0]; if (e.length === 1)
    return t; const n = () => { const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName })); return function (i) { const a = r.reduce((s, { useScope: l, scopeName: f }) => { const c = l(i)[`__scope${f}`]; return { ...s, ...c }; }, {}); return E.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]); }; }; return n.scopeName = t.scopeName, n; }
function UO(e) { const [t, n] = E.useState(void 0); return ct(() => { if (e) {
    n({ width: e.offsetWidth, height: e.offsetHeight });
    const r = new ResizeObserver(o => { if (!Array.isArray(o) || !o.length)
        return; const i = o[0]; let a, s; if ("borderBoxSize" in i) {
        const l = i.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
        a = f.inlineSize, s = f.blockSize;
    }
    else
        a = e.offsetWidth, s = e.offsetHeight; n({ width: a, height: s }); });
    return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
}
else
    n(void 0); }, [e]), t; }
var zh = "Popper", [Z1, Br] = $O(zh), [zO, Y1] = Z1(zh), Q1 = e => { const { __scopePopper: t, children: n } = e, [r, o] = E.useState(null); return b.jsx(zO, { scope: t, anchor: r, onAnchorChange: o, children: n }); };
Q1.displayName = zh;
var X1 = "PopperAnchor", J1 = E.forwardRef((e, t) => { const { __scopePopper: n, virtualRef: r, ...o } = e, i = Y1(X1, n), a = E.useRef(null), s = je(t, a); return E.useEffect(() => { i.onAnchorChange((r == null ? void 0 : r.current) || a.current); }), r ? null : b.jsx(xe.div, { ...o, ref: s }); });
J1.displayName = X1;
var Vh = "PopperContent", [VO, qO] = Z1(Vh), ex = E.forwardRef((e, t) => { var z, Z, Q, X, ne, se; const { __scopePopper: n, side: r = "bottom", sideOffset: o = 0, align: i = "center", alignOffset: a = 0, arrowPadding: s = 0, avoidCollisions: l = !0, collisionBoundary: f = [], collisionPadding: h = 0, sticky: c = "partial", hideWhenDetached: u = !1, updatePositionStrategy: p = "optimized", onPlaced: g, ...v } = e, x = Y1(Vh, n), [m, d] = E.useState(null), w = je(t, he => d(he)), [y, _] = E.useState(null), T = UO(y), S = (T == null ? void 0 : T.width) ?? 0, N = (T == null ? void 0 : T.height) ?? 0, j = r + (i !== "center" ? "-" + i : ""), O = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, C = Array.isArray(f) ? f : [f], k = C.length > 0, P = { padding: O, boundary: C.filter(WO), altBoundary: k }, { refs: R, floatingStyles: $, placement: q, isPositioned: H, middlewareData: V } = OO({ strategy: "fixed", placement: j, whileElementsMounted: (...he) => wO(...he, { animationFrame: p === "always" }), elements: { reference: x.anchor }, middleware: [AO({ mainAxis: o + N, alignmentAxis: a }), l && PO({ mainAxis: !0, crossAxis: !1, limiter: c === "partial" ? jO() : void 0, ...P }), l && RO({ ...P }), IO({ ...P, apply: ({ elements: he, rects: me, availableWidth: Ee, availableHeight: Me }) => { const { width: Le, height: I } = me.reference, B = he.floating.style; B.setProperty("--radix-popper-available-width", `${Ee}px`), B.setProperty("--radix-popper-available-height", `${Me}px`), B.setProperty("--radix-popper-anchor-width", `${Le}px`), B.setProperty("--radix-popper-anchor-height", `${I}px`); } }), y && LO({ element: y, padding: s }), KO({ arrowWidth: S, arrowHeight: N }), u && MO({ strategy: "referenceHidden", ...P })] }), [F, D] = rx(q), A = Bt(g); ct(() => { H && (A == null || A()); }, [H, A]); const M = (z = V.arrow) == null ? void 0 : z.x, U = (Z = V.arrow) == null ? void 0 : Z.y, K = ((Q = V.arrow) == null ? void 0 : Q.centerOffset) !== 0, [G, L] = E.useState(); return ct(() => { m && L(window.getComputedStyle(m).zIndex); }, [m]), b.jsx("div", { ref: R.setFloating, "data-radix-popper-content-wrapper": "", style: { ...$, transform: H ? $.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: G, "--radix-popper-transform-origin": [(X = V.transformOrigin) == null ? void 0 : X.x, (ne = V.transformOrigin) == null ? void 0 : ne.y].join(" "), ...((se = V.hide) == null ? void 0 : se.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: e.dir, children: b.jsx(VO, { scope: n, placedSide: F, onArrowChange: _, arrowX: M, arrowY: U, shouldHideArrow: K, children: b.jsx(xe.div, { "data-side": F, "data-align": D, ...v, ref: w, style: { ...v.style, animation: H ? void 0 : "none" } }) }) }); });
ex.displayName = Vh;
var tx = "PopperArrow", HO = { top: "bottom", right: "left", bottom: "top", left: "right" }, nx = E.forwardRef(function (t, n) { const { __scopePopper: r, ...o } = t, i = qO(tx, r), a = HO[i.placedSide]; return b.jsx("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: b.jsx(FO, { ...o, ref: n, style: { ...o.style, display: "block" } }) }); });
nx.displayName = tx;
function WO(e) { return e !== null; }
var KO = e => ({ name: "transformOrigin", options: e, fn(t) { var x, m, d; const { placement: n, rects: r, middlewareData: o } = t, a = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [f, h] = rx(n), c = { start: "0%", center: "50%", end: "100%" }[h], u = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + s / 2, p = (((d = o.arrow) == null ? void 0 : d.y) ?? 0) + l / 2; let g = "", v = ""; return f === "bottom" ? (g = a ? c : `${u}px`, v = `${-l}px`) : f === "top" ? (g = a ? c : `${u}px`, v = `${r.floating.height + l}px`) : f === "right" ? (g = `${-l}px`, v = a ? c : `${p}px`) : f === "left" && (g = `${r.floating.width + l}px`, v = a ? c : `${p}px`), { data: { x: g, y: v } }; } });
function rx(e) { const [t, n = "center"] = e.split("-"); return [t, n]; }
var ku = Q1, Nu = J1, Cu = ex, Ou = nx, GO = "Portal", Tu = E.forwardRef((e, t) => { var s; const { container: n, ...r } = e, [o, i] = E.useState(!1); ct(() => i(!0), []); const a = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body); return a ? g0.createPortal(b.jsx(xe.div, { ...r, ref: t }), a) : null; });
Tu.displayName = GO;
function ZO(e) { const t = E.useRef({ value: e, previous: e }); return E.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]); }
var YO = "VisuallyHidden", qh = E.forwardRef((e, t) => b.jsx(xe.span, { ...e, ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style } }));
qh.displayName = YO;
var QO = qh, XO = function (e) { if (typeof document > "u")
    return null; var t = Array.isArray(e) ? e[0] : e; return t.ownerDocument.body; }, wo = new WeakMap, ms = new WeakMap, vs = {}, Bc = 0, ox = function (e) { return e && (e.host || ox(e.parentNode)); }, JO = function (e, t) { return t.map(function (n) { if (e.contains(n))
    return n; var r = ox(n); return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null); }).filter(function (n) { return !!n; }); }, eT = function (e, t, n, r) { var o = JO(t, Array.isArray(e) ? e : [e]); vs[n] || (vs[n] = new WeakMap); var i = vs[n], a = [], s = new Set, l = new Set(o), f = function (c) { !c || s.has(c) || (s.add(c), f(c.parentNode)); }; o.forEach(f); var h = function (c) { !c || l.has(c) || Array.prototype.forEach.call(c.children, function (u) { if (s.has(u))
    h(u);
else
    try {
        var p = u.getAttribute(r), g = p !== null && p !== "false", v = (wo.get(u) || 0) + 1, x = (i.get(u) || 0) + 1;
        wo.set(u, v), i.set(u, x), a.push(u), v === 1 && g && ms.set(u, !0), x === 1 && u.setAttribute(n, "true"), g || u.setAttribute(r, "true");
    }
    catch (m) {
        console.error("aria-hidden: cannot operate on ", u, m);
    } }); }; return h(t), s.clear(), Bc++, function () { a.forEach(function (c) { var u = wo.get(c) - 1, p = i.get(c) - 1; wo.set(c, u), i.set(c, p), u || (ms.has(c) || c.removeAttribute(r), ms.delete(c)), p || c.removeAttribute(n); }), Bc--, Bc || (wo = new WeakMap, wo = new WeakMap, ms = new WeakMap, vs = {}); }; }, Hh = function (e, t, n) { n === void 0 && (n = "data-aria-hidden"); var r = Array.from(Array.isArray(e) ? e : [e]), o = XO(e); return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), eT(r, o, n, "aria-hidden")) : function () { return null; }; }, wn = function () { return wn = Object.assign || function (t) { for (var n, r = 1, o = arguments.length; r < o; r++) {
    n = arguments[r];
    for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
} return t; }, wn.apply(this, arguments); };
function ix(e, t) { var n = {}; for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]); return n; }
function tT(e, t, n) { if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
        (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]); return e.concat(i || Array.prototype.slice.call(t)); }
var Is = "right-scroll-bar-position", Ms = "width-before-scroll-bar", nT = "with-scroll-bars-hidden", rT = "--removed-body-scroll-bar-size";
function Uc(e, t) { return typeof e == "function" ? e(t) : e && (e.current = t), e; }
function oT(e, t) { var n = E.useState(function () { return { value: e, callback: t, facade: { get current() { return n.value; }, set current(r) { var o = n.value; o !== r && (n.value = r, n.callback(r, o)); } } }; })[0]; return n.callback = t, n.facade; }
var iT = typeof window < "u" ? E.useLayoutEffect : E.useEffect, Ev = new WeakMap;
function aT(e, t) { var n = oT(null, function (r) { return e.forEach(function (o) { return Uc(o, r); }); }); return iT(function () { var r = Ev.get(n); if (r) {
    var o = new Set(r), i = new Set(e), a = n.current;
    o.forEach(function (s) { i.has(s) || Uc(s, null); }), i.forEach(function (s) { o.has(s) || Uc(s, a); });
} Ev.set(n, e); }, [e]), n; }
function sT(e) { return e; }
function lT(e, t) { t === void 0 && (t = sT); var n = [], r = !1, o = { read: function () { if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."); return n.length ? n[n.length - 1] : e; }, useMedium: function (i) { var a = t(i, r); return n.push(a), function () { n = n.filter(function (s) { return s !== a; }); }; }, assignSyncMedium: function (i) { for (r = !0; n.length;) {
        var a = n;
        n = [], a.forEach(i);
    } n = { push: function (s) { return i(s); }, filter: function () { return n; } }; }, assignMedium: function (i) { r = !0; var a = []; if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
    } var l = function () { var h = a; a = [], h.forEach(i); }, f = function () { return Promise.resolve().then(l); }; f(), n = { push: function (h) { a.push(h), f(); }, filter: function (h) { return a = a.filter(h), n; } }; } }; return o; }
function uT(e) { e === void 0 && (e = {}); var t = lT(null); return t.options = wn({ async: !0, ssr: !1 }, e), t; }
var ax = function (e) { var t = e.sideCar, n = ix(e, ["sideCar"]); if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car"); var r = t.read(); if (!r)
    throw new Error("Sidecar medium not found"); return E.createElement(r, wn({}, n)); };
ax.isSideCarExport = !0;
function cT(e, t) { return e.useMedium(t), ax; }
var sx = uT(), zc = function () { }, Au = E.forwardRef(function (e, t) { var n = E.useRef(null), r = E.useState({ onScrollCapture: zc, onWheelCapture: zc, onTouchMoveCapture: zc }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, f = e.removeScrollBar, h = e.enabled, c = e.shards, u = e.sideCar, p = e.noIsolation, g = e.inert, v = e.allowPinchZoom, x = e.as, m = x === void 0 ? "div" : x, d = e.gapMode, w = ix(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), y = u, _ = aT([n, t]), T = wn(wn({}, w), o); return E.createElement(E.Fragment, null, h && E.createElement(y, { sideCar: sx, removeScrollBar: f, shards: c, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: d }), a ? E.cloneElement(E.Children.only(s), wn(wn({}, T), { ref: _ })) : E.createElement(m, wn({}, T, { className: l, ref: _ }), s)); });
Au.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Au.classNames = { fullWidth: Ms, zeroRight: Is };
var fT = function () { if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__; };
function dT() { if (!document)
    return null; var e = document.createElement("style"); e.type = "text/css"; var t = fT(); return t && e.setAttribute("nonce", t), e; }
function hT(e, t) { e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)); }
function pT(e) { var t = document.head || document.getElementsByTagName("head")[0]; t.appendChild(e); }
var mT = function () { var e = 0, t = null; return { add: function (n) { e == 0 && (t = dT()) && (hT(t, n), pT(t)), e++; }, remove: function () { e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null); } }; }, vT = function () { var e = mT(); return function (t, n) { E.useEffect(function () { return e.add(t), function () { e.remove(); }; }, [t && n]); }; }, lx = function () { var e = vT(), t = function (n) { var r = n.styles, o = n.dynamic; return e(r, o), null; }; return t; }, gT = { left: 0, top: 0, right: 0, gap: 0 }, Vc = function (e) { return parseInt(e || "", 10) || 0; }, yT = function (e) { var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"]; return [Vc(n), Vc(r), Vc(o)]; }, xT = function (e) { if (e === void 0 && (e = "margin"), typeof window > "u")
    return gT; var t = yT(e), n = document.documentElement.clientWidth, r = window.innerWidth; return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) }; }, wT = lx(), Zo = "data-scroll-locked", bT = function (e, t, n, r) {
    var o = e.left, i = e.top, a = e.right, s = e.gap;
    return n === void 0 && (n = "margin"), `
  .`.concat(nT, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Zo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Is, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ms, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Is, " .").concat(Is, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ms, " .").concat(Ms, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Zo, `] {
    `).concat(rT, ": ").concat(s, `px;
  }
`);
}, Sv = function () { var e = parseInt(document.body.getAttribute(Zo) || "0", 10); return isFinite(e) ? e : 0; }, _T = function () { E.useEffect(function () { return document.body.setAttribute(Zo, (Sv() + 1).toString()), function () { var e = Sv() - 1; e <= 0 ? document.body.removeAttribute(Zo) : document.body.setAttribute(Zo, e.toString()); }; }, []); }, ET = function (e) { var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r; _T(); var i = E.useMemo(function () { return xT(o); }, [o]); return E.createElement(wT, { styles: bT(i, !t, o, n ? "" : "!important") }); }, fd = !1;
if (typeof window < "u")
    try {
        var gs = Object.defineProperty({}, "passive", { get: function () { return fd = !0, !0; } });
        window.addEventListener("test", gs, gs), window.removeEventListener("test", gs, gs);
    }
    catch {
        fd = !1;
    }
var bo = fd ? { passive: !1 } : !1, ST = function (e) { return e.tagName === "TEXTAREA"; }, ux = function (e, t) { if (!(e instanceof Element))
    return !1; var n = window.getComputedStyle(e); return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ST(e) && n[t] === "visible"); }, kT = function (e) { return ux(e, "overflowY"); }, NT = function (e) { return ux(e, "overflowX"); }, kv = function (e, t) { var n = t.ownerDocument, r = t; do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = cx(e, r);
    if (o) {
        var i = fx(e, r), a = i[1], s = i[2];
        if (a > s)
            return !0;
    }
    r = r.parentNode;
} while (r && r !== n.body); return !1; }, CT = function (e) { var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight; return [t, n, r]; }, OT = function (e) { var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth; return [t, n, r]; }, cx = function (e, t) { return e === "v" ? kT(t) : NT(t); }, fx = function (e, t) { return e === "v" ? CT(t) : OT(t); }, TT = function (e, t) { return e === "h" && t === "rtl" ? -1 : 1; }, AT = function (e, t, n, r, o) { var i = TT(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), f = !1, h = a > 0, c = 0, u = 0; do {
    var p = fx(e, s), g = p[0], v = p[1], x = p[2], m = v - x - i * g;
    (g || m) && cx(e, s) && (c += m, u += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
} while (!l && s !== document.body || l && (t.contains(s) || t === s)); return (h && (Math.abs(c) < 1 || !o) || !h && (Math.abs(u) < 1 || !o)) && (f = !0), f; }, ys = function (e) { return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]; }, Nv = function (e) { return [e.deltaX, e.deltaY]; }, Cv = function (e) { return e && "current" in e ? e.current : e; }, PT = function (e, t) { return e[0] === t[0] && e[1] === t[1]; }, jT = function (e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, RT = 0, _o = [];
function IT(e) { var t = E.useRef([]), n = E.useRef([0, 0]), r = E.useRef(), o = E.useState(RT++)[0], i = E.useState(lx)[0], a = E.useRef(e); E.useEffect(function () { a.current = e; }, [e]), E.useEffect(function () { if (e.inert) {
    document.body.classList.add("block-interactivity-".concat(o));
    var v = tT([e.lockRef.current], (e.shards || []).map(Cv), !0).filter(Boolean);
    return v.forEach(function (x) { return x.classList.add("allow-interactivity-".concat(o)); }), function () { document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function (x) { return x.classList.remove("allow-interactivity-".concat(o)); }); };
} }, [e.inert, e.lockRef.current, e.shards]); var s = E.useCallback(function (v, x) { if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
    return !a.current.allowPinchZoom; var m = ys(v), d = n.current, w = "deltaX" in v ? v.deltaX : d[0] - m[0], y = "deltaY" in v ? v.deltaY : d[1] - m[1], _, T = v.target, S = Math.abs(w) > Math.abs(y) ? "h" : "v"; if ("touches" in v && S === "h" && T.type === "range")
    return !1; var N = kv(S, T); if (!N)
    return !0; if (N ? _ = S : (_ = S === "v" ? "h" : "v", N = kv(S, T)), !N)
    return !1; if (!r.current && "changedTouches" in v && (w || y) && (r.current = _), !_)
    return !0; var j = r.current || _; return AT(j, x, v, j === "h" ? w : y, !0); }, []), l = E.useCallback(function (v) { var x = v; if (!(!_o.length || _o[_o.length - 1] !== i)) {
    var m = "deltaY" in x ? Nv(x) : ys(x), d = t.current.filter(function (_) { return _.name === x.type && (_.target === x.target || x.target === _.shadowParent) && PT(_.delta, m); })[0];
    if (d && d.should) {
        x.cancelable && x.preventDefault();
        return;
    }
    if (!d) {
        var w = (a.current.shards || []).map(Cv).filter(Boolean).filter(function (_) { return _.contains(x.target); }), y = w.length > 0 ? s(x, w[0]) : !a.current.noIsolation;
        y && x.cancelable && x.preventDefault();
    }
} }, []), f = E.useCallback(function (v, x, m, d) { var w = { name: v, delta: x, target: m, should: d, shadowParent: MT(m) }; t.current.push(w), setTimeout(function () { t.current = t.current.filter(function (y) { return y !== w; }); }, 1); }, []), h = E.useCallback(function (v) { n.current = ys(v), r.current = void 0; }, []), c = E.useCallback(function (v) { f(v.type, Nv(v), v.target, s(v, e.lockRef.current)); }, []), u = E.useCallback(function (v) { f(v.type, ys(v), v.target, s(v, e.lockRef.current)); }, []); E.useEffect(function () { return _o.push(i), e.setCallbacks({ onScrollCapture: c, onWheelCapture: c, onTouchMoveCapture: u }), document.addEventListener("wheel", l, bo), document.addEventListener("touchmove", l, bo), document.addEventListener("touchstart", h, bo), function () { _o = _o.filter(function (v) { return v !== i; }), document.removeEventListener("wheel", l, bo), document.removeEventListener("touchmove", l, bo), document.removeEventListener("touchstart", h, bo); }; }, []); var p = e.removeScrollBar, g = e.inert; return E.createElement(E.Fragment, null, g ? E.createElement(i, { styles: jT(o) }) : null, p ? E.createElement(ET, { gapMode: e.gapMode }) : null); }
function MT(e) { for (var t = null; e !== null;)
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode; return t; }
const LT = cT(sx, IT);
var Pu = E.forwardRef(function (e, t) { return E.createElement(Au, wn({}, e, { ref: t, sideCar: LT })); });
Pu.classNames = Au.classNames;
var DT = [" ", "Enter", "ArrowUp", "ArrowDown"], FT = [" ", "Enter"], Va = "Select", [ju, Ru, $T] = Eh(Va), [xi, IL] = $r(Va, [$T, Br]), Iu = Br(), [BT, Ur] = xi(Va), [UT, zT] = xi(Va), dx = e => { const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: a, defaultValue: s, onValueChange: l, dir: f, name: h, autoComplete: c, disabled: u, required: p, form: g } = e, v = Iu(t), [x, m] = E.useState(null), [d, w] = E.useState(null), [y, _] = E.useState(!1), T = du(f), [S = !1, N] = Cr({ prop: r, defaultProp: o, onChange: i }), [j, O] = Cr({ prop: a, defaultProp: s, onChange: l }), C = E.useRef(null), k = x ? g || !!x.closest("form") : !0, [P, R] = E.useState(new Set), $ = Array.from(P).map(q => q.props.value).join(";"); return b.jsx(ku, { ...v, children: b.jsxs(BT, { required: p, scope: t, trigger: x, onTriggerChange: m, valueNode: d, onValueNodeChange: w, valueNodeHasChildren: y, onValueNodeHasChildrenChange: _, contentId: sn(), value: j, onValueChange: O, open: S, onOpenChange: N, dir: T, triggerPointerDownPosRef: C, disabled: u, children: [b.jsx(ju.Provider, { scope: t, children: b.jsx(UT, { scope: e.__scopeSelect, onNativeOptionAdd: E.useCallback(q => { R(H => new Set(H).add(q)); }, []), onNativeOptionRemove: E.useCallback(q => { R(H => { const V = new Set(H); return V.delete(q), V; }); }, []), children: n }) }), k ? b.jsxs(Fx, { "aria-hidden": !0, required: p, tabIndex: -1, name: h, autoComplete: c, value: j, onChange: q => O(q.target.value), disabled: u, form: g, children: [j === void 0 ? b.jsx("option", { value: "" }) : null, Array.from(P)] }, $) : null] }) }); };
dx.displayName = Va;
var hx = "SelectTrigger", px = E.forwardRef((e, t) => { const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Iu(n), a = Ur(hx, n), s = a.disabled || r, l = je(t, a.onTriggerChange), f = Ru(n), h = E.useRef("touch"), [c, u, p] = $x(v => { const x = f().filter(w => !w.disabled), m = x.find(w => w.value === a.value), d = Bx(x, v, m); d !== void 0 && a.onValueChange(d.value); }), g = v => { s || (a.onOpenChange(!0), p()), v && (a.triggerPointerDownPosRef.current = { x: Math.round(v.pageX), y: Math.round(v.pageY) }); }; return b.jsx(Nu, { asChild: !0, ...i, children: b.jsx(xe.button, { type: "button", role: "combobox", "aria-controls": a.contentId, "aria-expanded": a.open, "aria-required": a.required, "aria-autocomplete": "none", dir: a.dir, "data-state": a.open ? "open" : "closed", disabled: s, "data-disabled": s ? "" : void 0, "data-placeholder": Dx(a.value) ? "" : void 0, ...o, ref: l, onClick: le(o.onClick, v => { v.currentTarget.focus(), h.current !== "mouse" && g(v); }), onPointerDown: le(o.onPointerDown, v => { h.current = v.pointerType; const x = v.target; x.hasPointerCapture(v.pointerId) && x.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (g(v), v.preventDefault()); }), onKeyDown: le(o.onKeyDown, v => { const x = c.current !== ""; !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && u(v.key), !(x && v.key === " ") && DT.includes(v.key) && (g(), v.preventDefault()); }) }) }); });
px.displayName = hx;
var mx = "SelectValue", vx = E.forwardRef((e, t) => { const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...s } = e, l = Ur(mx, n), { onValueNodeHasChildrenChange: f } = l, h = i !== void 0, c = je(t, l.onValueNodeChange); return ct(() => { f(h); }, [f, h]), b.jsx(xe.span, { ...s, ref: c, style: { pointerEvents: "none" }, children: Dx(l.value) ? b.jsx(b.Fragment, { children: a }) : i }); });
vx.displayName = mx;
var VT = "SelectIcon", gx = E.forwardRef((e, t) => { const { __scopeSelect: n, children: r, ...o } = e; return b.jsx(xe.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" }); });
gx.displayName = VT;
var qT = "SelectPortal", yx = e => b.jsx(Tu, { asChild: !0, ...e });
yx.displayName = qT;
var lo = "SelectContent", xx = E.forwardRef((e, t) => { const n = Ur(lo, e.__scopeSelect), [r, o] = E.useState(); if (ct(() => { o(new DocumentFragment); }, []), !n.open) {
    const i = r;
    return i ? ho.createPortal(b.jsx(wx, { scope: e.__scopeSelect, children: b.jsx(ju.Slot, { scope: e.__scopeSelect, children: b.jsx("div", { children: e.children }) }) }), i) : null;
} return b.jsx(bx, { ...e, ref: t }); });
xx.displayName = lo;
var Jt = 10, [wx, zr] = xi(lo), HT = "SelectContentImpl", bx = E.forwardRef((e, t) => { const { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: i, onPointerDownOutside: a, side: s, sideOffset: l, align: f, alignOffset: h, arrowPadding: c, collisionBoundary: u, collisionPadding: p, sticky: g, hideWhenDetached: v, avoidCollisions: x, ...m } = e, d = Ur(lo, n), [w, y] = E.useState(null), [_, T] = E.useState(null), S = je(t, z => y(z)), [N, j] = E.useState(null), [O, C] = E.useState(null), k = Ru(n), [P, R] = E.useState(!1), $ = E.useRef(!1); E.useEffect(() => { if (w)
    return Hh(w); }, [w]), Mh(); const q = E.useCallback(z => { const [Z, ...Q] = k().map(se => se.ref.current), [X] = Q.slice(-1), ne = document.activeElement; for (const se of z)
    if (se === ne || (se == null || se.scrollIntoView({ block: "nearest" }), se === Z && _ && (_.scrollTop = 0), se === X && _ && (_.scrollTop = _.scrollHeight), se == null || se.focus(), document.activeElement !== ne))
        return; }, [k, _]), H = E.useCallback(() => q([N, w]), [q, N, w]); E.useEffect(() => { P && H(); }, [P, H]); const { onOpenChange: V, triggerPointerDownPosRef: F } = d; E.useEffect(() => { if (w) {
    let z = { x: 0, y: 0 };
    const Z = X => { var ne, se; z = { x: Math.abs(Math.round(X.pageX) - (((ne = F.current) == null ? void 0 : ne.x) ?? 0)), y: Math.abs(Math.round(X.pageY) - (((se = F.current) == null ? void 0 : se.y) ?? 0)) }; }, Q = X => { z.x <= 10 && z.y <= 10 ? X.preventDefault() : w.contains(X.target) || V(!1), document.removeEventListener("pointermove", Z), F.current = null; };
    return F.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => { document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", Q, { capture: !0 }); };
} }, [w, V, F]), E.useEffect(() => { const z = () => V(!1); return window.addEventListener("blur", z), window.addEventListener("resize", z), () => { window.removeEventListener("blur", z), window.removeEventListener("resize", z); }; }, [V]); const [D, A] = $x(z => { const Z = k().filter(ne => !ne.disabled), Q = Z.find(ne => ne.ref.current === document.activeElement), X = Bx(Z, z, Q); X && setTimeout(() => X.ref.current.focus()); }), M = E.useCallback((z, Z, Q) => { const X = !$.current && !Q; (d.value !== void 0 && d.value === Z || X) && (j(z), X && ($.current = !0)); }, [d.value]), U = E.useCallback(() => w == null ? void 0 : w.focus(), [w]), K = E.useCallback((z, Z, Q) => { const X = !$.current && !Q; (d.value !== void 0 && d.value === Z || X) && C(z); }, [d.value]), G = r === "popper" ? dd : _x, L = G === dd ? { side: s, sideOffset: l, align: f, alignOffset: h, arrowPadding: c, collisionBoundary: u, collisionPadding: p, sticky: g, hideWhenDetached: v, avoidCollisions: x } : {}; return b.jsx(wx, { scope: n, content: w, viewport: _, onViewportChange: T, itemRefCallback: M, selectedItem: N, onItemLeave: U, itemTextRefCallback: K, focusSelectedItem: H, selectedItemText: O, position: r, isPositioned: P, searchRef: D, children: b.jsx(Pu, { as: qn, allowPinchZoom: !0, children: b.jsx(bu, { asChild: !0, trapped: d.open, onMountAutoFocus: z => { z.preventDefault(); }, onUnmountAutoFocus: le(o, z => { var Z; (Z = d.trigger) == null || Z.focus({ preventScroll: !0 }), z.preventDefault(); }), children: b.jsx(vi, { asChild: !0, disableOutsidePointerEvents: !0, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: z => z.preventDefault(), onDismiss: () => d.onOpenChange(!1), children: b.jsx(G, { role: "listbox", id: d.contentId, "data-state": d.open ? "open" : "closed", dir: d.dir, onContextMenu: z => z.preventDefault(), ...m, ...L, onPlaced: () => R(!0), ref: S, style: { display: "flex", flexDirection: "column", outline: "none", ...m.style }, onKeyDown: le(m.onKeyDown, z => { const Z = z.ctrlKey || z.altKey || z.metaKey; if (z.key === "Tab" && z.preventDefault(), !Z && z.key.length === 1 && A(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key)) {
                        let X = k().filter(ne => !ne.disabled).map(ne => ne.ref.current);
                        if (["ArrowUp", "End"].includes(z.key) && (X = X.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key)) {
                            const ne = z.target, se = X.indexOf(ne);
                            X = X.slice(se + 1);
                        }
                        setTimeout(() => q(X)), z.preventDefault();
                    } }) }) }) }) }) }); });
bx.displayName = HT;
var WT = "SelectItemAlignedPosition", _x = E.forwardRef((e, t) => { const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Ur(lo, n), a = zr(lo, n), [s, l] = E.useState(null), [f, h] = E.useState(null), c = je(t, S => h(S)), u = Ru(n), p = E.useRef(!1), g = E.useRef(!0), { viewport: v, selectedItem: x, selectedItemText: m, focusSelectedItem: d } = a, w = E.useCallback(() => { if (i.trigger && i.valueNode && s && f && v && x && m) {
    const S = i.trigger.getBoundingClientRect(), N = f.getBoundingClientRect(), j = i.valueNode.getBoundingClientRect(), O = m.getBoundingClientRect();
    if (i.dir !== "rtl") {
        const ne = O.left - N.left, se = j.left - ne, he = S.left - se, me = S.width + he, Ee = Math.max(me, N.width), Me = window.innerWidth - Jt, Le = sv(se, [Jt, Math.max(Jt, Me - Ee)]);
        s.style.minWidth = me + "px", s.style.left = Le + "px";
    }
    else {
        const ne = N.right - O.right, se = window.innerWidth - j.right - ne, he = window.innerWidth - S.right - se, me = S.width + he, Ee = Math.max(me, N.width), Me = window.innerWidth - Jt, Le = sv(se, [Jt, Math.max(Jt, Me - Ee)]);
        s.style.minWidth = me + "px", s.style.right = Le + "px";
    }
    const C = u(), k = window.innerHeight - Jt * 2, P = v.scrollHeight, R = window.getComputedStyle(f), $ = parseInt(R.borderTopWidth, 10), q = parseInt(R.paddingTop, 10), H = parseInt(R.borderBottomWidth, 10), V = parseInt(R.paddingBottom, 10), F = $ + q + P + V + H, D = Math.min(x.offsetHeight * 5, F), A = window.getComputedStyle(v), M = parseInt(A.paddingTop, 10), U = parseInt(A.paddingBottom, 10), K = S.top + S.height / 2 - Jt, G = k - K, L = x.offsetHeight / 2, z = x.offsetTop + L, Z = $ + q + z, Q = F - Z;
    if (Z <= K) {
        const ne = C.length > 0 && x === C[C.length - 1].ref.current;
        s.style.bottom = "0px";
        const se = f.clientHeight - v.offsetTop - v.offsetHeight, he = Math.max(G, L + (ne ? U : 0) + se + H), me = Z + he;
        s.style.height = me + "px";
    }
    else {
        const ne = C.length > 0 && x === C[0].ref.current;
        s.style.top = "0px";
        const he = Math.max(K, $ + v.offsetTop + (ne ? M : 0) + L) + Q;
        s.style.height = he + "px", v.scrollTop = Z - K + v.offsetTop;
    }
    s.style.margin = `${Jt}px 0`, s.style.minHeight = D + "px", s.style.maxHeight = k + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
} }, [u, i.trigger, i.valueNode, s, f, v, x, m, i.dir, r]); ct(() => w(), [w]); const [y, _] = E.useState(); ct(() => { f && _(window.getComputedStyle(f).zIndex); }, [f]); const T = E.useCallback(S => { S && g.current === !0 && (w(), d == null || d(), g.current = !1); }, [w, d]); return b.jsx(GT, { scope: n, contentWrapper: s, shouldExpandOnScrollRef: p, onScrollButtonChange: T, children: b.jsx("div", { ref: l, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: y }, children: b.jsx(xe.div, { ...o, ref: c, style: { boxSizing: "border-box", maxHeight: "100%", ...o.style } }) }) }); });
_x.displayName = WT;
var KT = "SelectPopperPosition", dd = E.forwardRef((e, t) => { const { __scopeSelect: n, align: r = "start", collisionPadding: o = Jt, ...i } = e, a = Iu(n); return b.jsx(Cu, { ...a, ...i, ref: t, align: r, collisionPadding: o, style: { boxSizing: "border-box", ...i.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } }); });
dd.displayName = KT;
var [GT, Wh] = xi(lo, {}), hd = "SelectViewport", Ex = E.forwardRef((e, t) => { const { __scopeSelect: n, nonce: r, ...o } = e, i = zr(hd, n), a = Wh(hd, n), s = je(t, i.onViewportChange), l = E.useRef(0); return b.jsxs(b.Fragment, { children: [b.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: r }), b.jsx(ju.Slot, { scope: n, children: b.jsx(xe.div, { "data-radix-select-viewport": "", role: "presentation", ...o, ref: s, style: { position: "relative", flex: 1, overflow: "hidden auto", ...o.style }, onScroll: le(o.onScroll, f => { const h = f.currentTarget, { contentWrapper: c, shouldExpandOnScrollRef: u } = a; if (u != null && u.current && c) {
                    const p = Math.abs(l.current - h.scrollTop);
                    if (p > 0) {
                        const g = window.innerHeight - Jt * 2, v = parseFloat(c.style.minHeight), x = parseFloat(c.style.height), m = Math.max(v, x);
                        if (m < g) {
                            const d = m + p, w = Math.min(g, d), y = d - w;
                            c.style.height = w + "px", c.style.bottom === "0px" && (h.scrollTop = y > 0 ? y : 0, c.style.justifyContent = "flex-end");
                        }
                    }
                } l.current = h.scrollTop; }) }) })] }); });
Ex.displayName = hd;
var Sx = "SelectGroup", [ZT, YT] = xi(Sx), kx = E.forwardRef((e, t) => { const { __scopeSelect: n, ...r } = e, o = sn(); return b.jsx(ZT, { scope: n, id: o, children: b.jsx(xe.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) }); });
kx.displayName = Sx;
var Nx = "SelectLabel", Cx = E.forwardRef((e, t) => { const { __scopeSelect: n, ...r } = e, o = YT(Nx, n); return b.jsx(xe.div, { id: o.id, ...r, ref: t }); });
Cx.displayName = Nx;
var jl = "SelectItem", [QT, Ox] = xi(jl), Tx = E.forwardRef((e, t) => { const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...a } = e, s = Ur(jl, n), l = zr(jl, n), f = s.value === r, [h, c] = E.useState(i ?? ""), [u, p] = E.useState(!1), g = je(t, d => { var w; return (w = l.itemRefCallback) == null ? void 0 : w.call(l, d, r, o); }), v = sn(), x = E.useRef("touch"), m = () => { o || (s.onValueChange(r), s.onOpenChange(!1)); }; if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."); return b.jsx(QT, { scope: n, value: r, disabled: o, textId: v, isSelected: f, onItemTextChange: E.useCallback(d => { c(w => w || ((d == null ? void 0 : d.textContent) ?? "").trim()); }, []), children: b.jsx(ju.ItemSlot, { scope: n, value: r, disabled: o, textValue: h, children: b.jsx(xe.div, { role: "option", "aria-labelledby": v, "data-highlighted": u ? "" : void 0, "aria-selected": f && u, "data-state": f ? "checked" : "unchecked", "aria-disabled": o || void 0, "data-disabled": o ? "" : void 0, tabIndex: o ? void 0 : -1, ...a, ref: g, onFocus: le(a.onFocus, () => p(!0)), onBlur: le(a.onBlur, () => p(!1)), onClick: le(a.onClick, () => { x.current !== "mouse" && m(); }), onPointerUp: le(a.onPointerUp, () => { x.current === "mouse" && m(); }), onPointerDown: le(a.onPointerDown, d => { x.current = d.pointerType; }), onPointerMove: le(a.onPointerMove, d => { var w; x.current = d.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : x.current === "mouse" && d.currentTarget.focus({ preventScroll: !0 }); }), onPointerLeave: le(a.onPointerLeave, d => { var w; d.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l)); }), onKeyDown: le(a.onKeyDown, d => { var y; ((y = l.searchRef) == null ? void 0 : y.current) !== "" && d.key === " " || (FT.includes(d.key) && m(), d.key === " " && d.preventDefault()); }) }) }) }); });
Tx.displayName = jl;
var Ki = "SelectItemText", Ax = E.forwardRef((e, t) => { const { __scopeSelect: n, className: r, style: o, ...i } = e, a = Ur(Ki, n), s = zr(Ki, n), l = Ox(Ki, n), f = zT(Ki, n), [h, c] = E.useState(null), u = je(t, m => c(m), l.onItemTextChange, m => { var d; return (d = s.itemTextRefCallback) == null ? void 0 : d.call(s, m, l.value, l.disabled); }), p = h == null ? void 0 : h.textContent, g = E.useMemo(() => b.jsx("option", { value: l.value, disabled: l.disabled, children: p }, l.value), [l.disabled, l.value, p]), { onNativeOptionAdd: v, onNativeOptionRemove: x } = f; return ct(() => (v(g), () => x(g)), [v, x, g]), b.jsxs(b.Fragment, { children: [b.jsx(xe.span, { id: l.textId, ...i, ref: u }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? ho.createPortal(i.children, a.valueNode) : null] }); });
Ax.displayName = Ki;
var Px = "SelectItemIndicator", jx = E.forwardRef((e, t) => { const { __scopeSelect: n, ...r } = e; return Ox(Px, n).isSelected ? b.jsx(xe.span, { "aria-hidden": !0, ...r, ref: t }) : null; });
jx.displayName = Px;
var pd = "SelectScrollUpButton", Rx = E.forwardRef((e, t) => { const n = zr(pd, e.__scopeSelect), r = Wh(pd, e.__scopeSelect), [o, i] = E.useState(!1), a = je(t, r.onScrollButtonChange); return ct(() => { if (n.viewport && n.isPositioned) {
    let s = function () { const f = l.scrollTop > 0; i(f); };
    const l = n.viewport;
    return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
} }, [n.viewport, n.isPositioned]), o ? b.jsx(Mx, { ...e, ref: a, onAutoScroll: () => { const { viewport: s, selectedItem: l } = n; s && l && (s.scrollTop = s.scrollTop - l.offsetHeight); } }) : null; });
Rx.displayName = pd;
var md = "SelectScrollDownButton", Ix = E.forwardRef((e, t) => { const n = zr(md, e.__scopeSelect), r = Wh(md, e.__scopeSelect), [o, i] = E.useState(!1), a = je(t, r.onScrollButtonChange); return ct(() => { if (n.viewport && n.isPositioned) {
    let s = function () { const f = l.scrollHeight - l.clientHeight, h = Math.ceil(l.scrollTop) < f; i(h); };
    const l = n.viewport;
    return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
} }, [n.viewport, n.isPositioned]), o ? b.jsx(Mx, { ...e, ref: a, onAutoScroll: () => { const { viewport: s, selectedItem: l } = n; s && l && (s.scrollTop = s.scrollTop + l.offsetHeight); } }) : null; });
Ix.displayName = md;
var Mx = E.forwardRef((e, t) => { const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = zr("SelectScrollButton", n), a = E.useRef(null), s = Ru(n), l = E.useCallback(() => { a.current !== null && (window.clearInterval(a.current), a.current = null); }, []); return E.useEffect(() => () => l(), [l]), ct(() => { var h; const f = s().find(c => c.ref.current === document.activeElement); (h = f == null ? void 0 : f.ref.current) == null || h.scrollIntoView({ block: "nearest" }); }, [s]), b.jsx(xe.div, { "aria-hidden": !0, ...o, ref: t, style: { flexShrink: 0, ...o.style }, onPointerDown: le(o.onPointerDown, () => { a.current === null && (a.current = window.setInterval(r, 50)); }), onPointerMove: le(o.onPointerMove, () => { var f; (f = i.onItemLeave) == null || f.call(i), a.current === null && (a.current = window.setInterval(r, 50)); }), onPointerLeave: le(o.onPointerLeave, () => { l(); }) }); }), XT = "SelectSeparator", Lx = E.forwardRef((e, t) => { const { __scopeSelect: n, ...r } = e; return b.jsx(xe.div, { "aria-hidden": !0, ...r, ref: t }); });
Lx.displayName = XT;
var vd = "SelectArrow", JT = E.forwardRef((e, t) => { const { __scopeSelect: n, ...r } = e, o = Iu(n), i = Ur(vd, n), a = zr(vd, n); return i.open && a.position === "popper" ? b.jsx(Ou, { ...o, ...r, ref: t }) : null; });
JT.displayName = vd;
function Dx(e) { return e === "" || e === void 0; }
var Fx = E.forwardRef((e, t) => { const { value: n, ...r } = e, o = E.useRef(null), i = je(t, o), a = ZO(n); return E.useEffect(() => { const s = o.current, l = window.HTMLSelectElement.prototype, h = Object.getOwnPropertyDescriptor(l, "value").set; if (a !== n && h) {
    const c = new Event("change", { bubbles: !0 });
    h.call(s, n), s.dispatchEvent(c);
} }, [a, n]), b.jsx(qh, { asChild: !0, children: b.jsx("select", { ...r, ref: i, defaultValue: n }) }); });
Fx.displayName = "BubbleSelect";
function $x(e) { const t = Bt(e), n = E.useRef(""), r = E.useRef(0), o = E.useCallback(a => { const s = n.current + a; t(s), function l(f) { n.current = f, window.clearTimeout(r.current), f !== "" && (r.current = window.setTimeout(() => l(""), 1e3)); }(s); }, [t]), i = E.useCallback(() => { n.current = "", window.clearTimeout(r.current); }, []); return E.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]; }
function Bx(e, t, n) { const o = t.length > 1 && Array.from(t).every(f => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1; let a = eA(e, Math.max(i, 0)); o.length === 1 && (a = a.filter(f => f !== n)); const l = a.find(f => f.textValue.toLowerCase().startsWith(o.toLowerCase())); return l !== n ? l : void 0; }
function eA(e, t) { return e.map((n, r) => e[(t + r) % e.length]); }
var tA = dx, Ux = px, nA = vx, rA = gx, oA = yx, zx = xx, iA = Ex, aA = kx, Vx = Cx, qx = Tx, sA = Ax, lA = jx, Hx = Rx, Wx = Ix, Kx = Lx;
const Gx = tA, uA = aA, Zx = nA, Kh = E.forwardRef(({ className: e, children: t, ...n }, r) => b.jsxs(Ux, { ref: r, className: ge("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e), ...n, children: [t, b.jsx(rA, { asChild: !0, children: b.jsx(pC, { className: "h-4 w-4 opacity-50" }) })] }));
Kh.displayName = Ux.displayName;
const Yx = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Hx, { ref: n, className: ge("flex cursor-default items-center justify-center py-1", e), ...t, children: b.jsx(bC, {}) }));
Yx.displayName = Hx.displayName;
const Qx = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Wx, { ref: n, className: ge("flex cursor-default items-center justify-center py-1", e), ...t, children: b.jsx(gC, {}) }));
Qx.displayName = Wx.displayName;
const Gh = E.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => b.jsx(oA, { children: b.jsxs(zx, { ref: o, className: ge("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e), position: n, ...r, children: [b.jsx(Yx, {}), b.jsx(iA, { className: ge("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: t }), b.jsx(Qx, {})] }) }));
Gh.displayName = zx.displayName;
const Xx = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Vx, { ref: n, className: ge("px-2 py-1.5 text-sm font-semibold", e), ...t }));
Xx.displayName = Vx.displayName;
const cr = E.forwardRef(({ className: e, children: t, ...n }, r) => b.jsxs(qx, { ref: r, className: ge("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), ...n, children: [b.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: b.jsx(lA, { children: b.jsx(M1, { className: "h-4 w-4" }) }) }), b.jsx(sA, { children: t })] }));
cr.displayName = qx.displayName;
const cA = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Kx, { ref: n, className: ge("-mx-1 my-1 h-px bg-muted", e), ...t }));
cA.displayName = Kx.displayName; /**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fA = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Jx = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" "); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var dA = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }; /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hA = E.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: i, iconNode: a, ...s }, l) => E.createElement("svg", { ref: l, ...dA, width: t, height: t, stroke: e, strokeWidth: r ? Number(n) * 24 / Number(t) : n, className: Jx("lucide", o), ...s }, [...a.map(([f, h]) => E.createElement(f, h)), ...Array.isArray(i) ? i : [i]])); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pt = (e, t) => { const n = E.forwardRef(({ className: r, ...o }, i) => E.createElement(hA, { ref: i, iconNode: t, className: Jx(`lucide-${fA(e)}`, r), ...o })); return n.displayName = `${e}`, n; }; /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pA = Pt("Bookmark", [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mA = Pt("CalendarDays", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 14h.01", key: "6423bh" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M16 14h.01", key: "1gbofw" }], ["path", { d: "M8 18h.01", key: "lrp35t" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M16 18h.01", key: "kzsmim" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ew = Pt("CirclePlus", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vA = Pt("Forward", [["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }], ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gA = Pt("ImageUp", [["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21", key: "9csbqa" }], ["path", { d: "m14 19.5 3-3 3 3", key: "9vmjn0" }], ["path", { d: "M17 22v-5.5", key: "1aa6fl" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yA = Pt("LogOut", [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }], ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zh = Pt("Menu", [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xA = Pt("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wA = Pt("Pencil", [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }], ["path", { d: "m15 5 4 4", key: "1mk7zo" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bA = Pt("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tw = Pt("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _A = Pt("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nw = Pt("Star", [["polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2", key: "8f66p6" }]]); /**
* @license lucide-react v0.451.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const EA = Pt("Sun", [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]]);
function Yh() { const { setTheme: e, theme: t } = B2(); return b.jsxs(Re, { size: "icon", variant: "outline", onClick: () => { e(t === "light" ? "dark" : "light"); }, className: "bg-transparent", children: [b.jsx(xA, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), b.jsx(EA, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), b.jsx("span", { className: "sr-only", children: "Toggle theme" })] }); }
var Qh = "Dialog", [rw, ML] = $r(Qh), [SA, dn] = rw(Qh), ow = e => { const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: a = !0 } = e, s = E.useRef(null), l = E.useRef(null), [f = !1, h] = Cr({ prop: r, defaultProp: o, onChange: i }); return b.jsx(SA, { scope: t, triggerRef: s, contentRef: l, contentId: sn(), titleId: sn(), descriptionId: sn(), open: f, onOpenChange: h, onOpenToggle: E.useCallback(() => h(c => !c), [h]), modal: a, children: n }); };
ow.displayName = Qh;
var iw = "DialogTrigger", aw = E.forwardRef((e, t) => { const { __scopeDialog: n, ...r } = e, o = dn(iw, n), i = je(t, o.triggerRef); return b.jsx(xe.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": ep(o.open), ...r, ref: i, onClick: le(e.onClick, o.onOpenToggle) }); });
aw.displayName = iw;
var Xh = "DialogPortal", [kA, sw] = rw(Xh, { forceMount: void 0 }), lw = e => { const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = dn(Xh, t); return b.jsx(kA, { scope: t, forceMount: n, children: E.Children.map(r, a => b.jsx(fn, { present: n || i.open, children: b.jsx(Tu, { asChild: !0, container: o, children: a }) })) }); };
lw.displayName = Xh;
var Rl = "DialogOverlay", uw = E.forwardRef((e, t) => { const n = sw(Rl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = dn(Rl, e.__scopeDialog); return i.modal ? b.jsx(fn, { present: r || i.open, children: b.jsx(NA, { ...o, ref: t }) }) : null; });
uw.displayName = Rl;
var NA = E.forwardRef((e, t) => { const { __scopeDialog: n, ...r } = e, o = dn(Rl, n); return b.jsx(Pu, { as: qn, allowPinchZoom: !0, shards: [o.contentRef], children: b.jsx(xe.div, { "data-state": ep(o.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }) }); }), uo = "DialogContent", cw = E.forwardRef((e, t) => { const n = sw(uo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = dn(uo, e.__scopeDialog); return b.jsx(fn, { present: r || i.open, children: i.modal ? b.jsx(CA, { ...o, ref: t }) : b.jsx(OA, { ...o, ref: t }) }); });
cw.displayName = uo;
var CA = E.forwardRef((e, t) => { const n = dn(uo, e.__scopeDialog), r = E.useRef(null), o = je(t, n.contentRef, r); return E.useEffect(() => { const i = r.current; if (i)
    return Hh(i); }, []), b.jsx(fw, { ...e, ref: o, trapFocus: n.open, disableOutsidePointerEvents: !0, onCloseAutoFocus: le(e.onCloseAutoFocus, i => { var a; i.preventDefault(), (a = n.triggerRef.current) == null || a.focus(); }), onPointerDownOutside: le(e.onPointerDownOutside, i => { const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0; (a.button === 2 || s) && i.preventDefault(); }), onFocusOutside: le(e.onFocusOutside, i => i.preventDefault()) }); }), OA = E.forwardRef((e, t) => { const n = dn(uo, e.__scopeDialog), r = E.useRef(!1), o = E.useRef(!1); return b.jsx(fw, { ...e, ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, onCloseAutoFocus: i => { var a, s; (a = e.onCloseAutoFocus) == null || a.call(e, i), i.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), i.preventDefault()), r.current = !1, o.current = !1; }, onInteractOutside: i => { var l, f; (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0)); const a = i.target; ((f = n.triggerRef.current) == null ? void 0 : f.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault(); } }); }), fw = E.forwardRef((e, t) => { const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = dn(uo, n), l = E.useRef(null), f = je(t, l); return Mh(), b.jsxs(b.Fragment, { children: [b.jsx(bu, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: i, children: b.jsx(vi, { role: "dialog", id: s.contentId, "aria-describedby": s.descriptionId, "aria-labelledby": s.titleId, "data-state": ep(s.open), ...a, ref: f, onDismiss: () => s.onOpenChange(!1) }) }), b.jsxs(b.Fragment, { children: [b.jsx(TA, { titleId: s.titleId }), b.jsx(PA, { contentRef: l, descriptionId: s.descriptionId })] })] }); }), Jh = "DialogTitle", dw = E.forwardRef((e, t) => { const { __scopeDialog: n, ...r } = e, o = dn(Jh, n); return b.jsx(xe.h2, { id: o.titleId, ...r, ref: t }); });
dw.displayName = Jh;
var hw = "DialogDescription", pw = E.forwardRef((e, t) => { const { __scopeDialog: n, ...r } = e, o = dn(hw, n); return b.jsx(xe.p, { id: o.descriptionId, ...r, ref: t }); });
pw.displayName = hw;
var mw = "DialogClose", vw = E.forwardRef((e, t) => { const { __scopeDialog: n, ...r } = e, o = dn(mw, n); return b.jsx(xe.button, { type: "button", ...r, ref: t, onClick: le(e.onClick, () => o.onOpenChange(!1)) }); });
vw.displayName = mw;
function ep(e) { return e ? "open" : "closed"; }
var gw = "DialogTitleWarning", [LL, yw] = RS(gw, { contentName: uo, titleName: Jh, docsSlug: "dialog" }), TA = ({ titleId: e }) => {
    const t = yw(gw), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return E.useEffect(() => { e && (document.getElementById(e) || console.error(n)); }, [n, e]), null;
}, AA = "DialogDescriptionWarning", PA = ({ contentRef: e, descriptionId: t }) => { const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${yw(AA).contentName}}.`; return E.useEffect(() => { var i; const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby"); t && o && (document.getElementById(t) || console.warn(r)); }, [r, e, t]), null; }, xw = ow, ww = aw, bw = lw, Mu = uw, Lu = cw, Du = dw, Fu = pw, _w = vw;
const tp = xw, np = ww, jA = bw, Ew = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Mu, { className: ge("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e), ...t, ref: n }));
Ew.displayName = Mu.displayName;
const RA = Oh("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", { variants: { side: { top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm" } }, defaultVariants: { side: "right" } }), $u = E.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => b.jsxs(jA, { children: [b.jsx(Ew, {}), b.jsxs(Lu, { ref: o, className: ge(RA({ side: e }), t), ...r, children: [b.jsxs(_w, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [b.jsx(L1, { className: "h-4 w-4" }), b.jsx("span", { className: "sr-only", children: "Close" })] }), n] })] }));
$u.displayName = Lu.displayName;
const IA = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Du, { ref: n, className: ge("text-lg font-semibold text-foreground", e), ...t }));
IA.displayName = Du.displayName;
const MA = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Fu, { ref: n, className: ge("text-sm text-muted-foreground", e), ...t }));
MA.displayName = Fu.displayName;
const Sw = xw, kw = ww, LA = bw, Nw = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Mu, { ref: n, className: ge("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e), ...t }));
Nw.displayName = Mu.displayName;
const rp = E.forwardRef(({ className: e, children: t, ...n }, r) => b.jsxs(LA, { children: [b.jsx(Nw, {}), b.jsxs(Lu, { ref: r, className: ge("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e), ...n, children: [t, b.jsxs(_w, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [b.jsx(L1, { className: "h-4 w-4" }), b.jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
rp.displayName = Lu.displayName;
const Cw = ({ className: e, ...t }) => b.jsx("div", { className: ge("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
Cw.displayName = "DialogHeader";
const op = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Du, { ref: n, className: ge("text-lg font-semibold leading-none tracking-tight", e), ...t }));
op.displayName = Du.displayName;
const ip = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Fu, { ref: n, className: ge("text-sm text-muted-foreground", e), ...t }));
ip.displayName = Fu.displayName;
const Ow = () => { const [e, t] = E.useState(!1), [n, r] = E.useState(!1), o = [{ name: "Home", href: "#home" }, { name: "Testimonies", href: "#testimonies" }, { name: "Providers", href: "#providers" }], i = a => { a === "student" ? window.location.href = "/student" : a === "provider" && (window.location.href = "/provider"); }; return b.jsx("header", { className: "border-b z-50 sticky top-0 backdrop-blur-md", children: b.jsx("div", { className: "container mx-auto px-4", children: b.jsxs("nav", { className: "flex justify-between items-center h-16", children: [b.jsx("div", { className: "flex items-center", children: b.jsx("h1", { className: "text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent", children: "ConnectED" }) }), b.jsx("ul", { className: "hidden md:flex space-x-4", children: o.map(a => b.jsx("li", { children: b.jsx(Re, { variant: "ghost", asChild: !0, className: "w-full justify-start hover:bg-transparent hover:text-blue-500 transition-colors duration-200 dark:hover:text-yellow-500", children: b.jsx("a", { href: a.href, onClick: () => t(!1), className: "hover:underline hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-200", children: a.name }) }) }, a.name)) }), b.jsxs(tp, { open: e, onOpenChange: t, children: [b.jsx(np, { asChild: !0, className: "md:hidden", children: b.jsx(Re, { variant: "outline", size: "icon", children: b.jsx(Zh, { className: "h-6 w-6" }) }) }), b.jsx($u, { side: "right", className: "w-[240px] sm:w-[300px]", children: b.jsx("nav", { className: "flex flex-col gap-4", children: b.jsx("ul", { className: "flex flex-col gap-2", children: o.map(a => b.jsx("li", { children: b.jsx(Re, { variant: "ghost", asChild: !0, className: "w-full justify-start hover:bg-transparent hover:text-blue-500 transition-colors duration-200 dark:hover:text-yellow-500", children: b.jsx("a", { href: a.href, onClick: () => t(!1), className: "hover:underline hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-200", children: a.name }) }) }, a.name)) }) }) })] }), b.jsxs("div", { className: "items-center space-x-4 hidden md:flex", children: [b.jsx(Yh, {}), b.jsxs(Sw, { open: n, onOpenChange: r, children: [b.jsx(kw, { asChild: !0, children: b.jsx(Re, { variant: "outline", children: "Sign In" }) }), b.jsxs(rp, { children: [b.jsx(op, { children: "Select Your Role" }), b.jsx(ip, { children: "Please choose if you are a Student or a Provider." }), b.jsxs("div", { className: "flex flex-col space-y-4 mt-4", children: [b.jsx(Re, { variant: "outline", onClick: () => { i("student"), r(!1); }, children: "I am a Student" }), b.jsx(Re, { variant: "outline", onClick: () => { i("provider"), r(!1); }, children: "I am a Provider" })] })] })] })] })] }) }) }); };
var DA = "Separator", Ov = "horizontal", FA = ["horizontal", "vertical"], Tw = E.forwardRef((e, t) => { const { decorative: n, orientation: r = Ov, ...o } = e, i = $A(r) ? r : Ov, s = n ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" }; return b.jsx(xe.div, { "data-orientation": i, ...s, ...o, ref: t }); });
Tw.displayName = DA;
function $A(e) { return FA.includes(e); }
var Aw = Tw;
const Il = E.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => b.jsx(Aw, { ref: o, decorative: n, orientation: t, className: ge("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e), ...r }));
Il.displayName = Aw.displayName;
var ap = "Avatar", [BA, DL] = $r(ap), [UA, Pw] = BA(ap), Ml = E.forwardRef((e, t) => { const { __scopeAvatar: n, ...r } = e, [o, i] = E.useState("idle"); return b.jsx(UA, { scope: n, imageLoadingStatus: o, onImageLoadingStatusChange: i, children: b.jsx(xe.span, { ...r, ref: t }) }); });
Ml.displayName = ap;
var jw = "AvatarImage", Ll = E.forwardRef((e, t) => { const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => { }, ...i } = e, a = Pw(jw, n), s = zA(r, i.referrerPolicy), l = Bt(f => { o(f), a.onImageLoadingStatusChange(f); }); return ct(() => { s !== "idle" && l(s); }, [s, l]), s === "loaded" ? b.jsx(xe.img, { ...i, ref: t, src: r }) : null; });
Ll.displayName = jw;
var Rw = "AvatarFallback", Dl = E.forwardRef((e, t) => { const { __scopeAvatar: n, delayMs: r, ...o } = e, i = Pw(Rw, n), [a, s] = E.useState(r === void 0); return E.useEffect(() => { if (r !== void 0) {
    const l = window.setTimeout(() => s(!0), r);
    return () => window.clearTimeout(l);
} }, [r]), a && i.imageLoadingStatus !== "loaded" ? b.jsx(xe.span, { ...o, ref: t }) : null; });
Dl.displayName = Rw;
function zA(e, t) { const [n, r] = E.useState("idle"); return ct(() => { if (!e) {
    r("error");
    return;
} let o = !0; const i = new window.Image, a = s => () => { o && r(s); }; return r("loading"), i.onload = a("loaded"), i.onerror = a("error"), i.src = e, t && (i.referrerPolicy = t), () => { o = !1; }; }, [e, t]), n; }
var Iw = Ml, Mw = Ll, Lw = Dl, qc, sp = "HoverCard", [Dw, FL] = $r(sp, [Br]), Bu = Br(), [VA, lp] = Dw(sp), Fw = e => { const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: i, openDelay: a = 700, closeDelay: s = 300 } = e, l = Bu(t), f = E.useRef(0), h = E.useRef(0), c = E.useRef(!1), u = E.useRef(!1), [p = !1, g] = Cr({ prop: r, defaultProp: o, onChange: i }), v = E.useCallback(() => { clearTimeout(h.current), f.current = window.setTimeout(() => g(!0), a); }, [a, g]), x = E.useCallback(() => { clearTimeout(f.current), !c.current && !u.current && (h.current = window.setTimeout(() => g(!1), s)); }, [s, g]), m = E.useCallback(() => g(!1), [g]); return E.useEffect(() => () => { clearTimeout(f.current), clearTimeout(h.current); }, []), b.jsx(VA, { scope: t, open: p, onOpenChange: g, onOpen: v, onClose: x, onDismiss: m, hasSelectionRef: c, isPointerDownOnContentRef: u, children: b.jsx(ku, { ...l, children: n }) }); };
Fw.displayName = sp;
var $w = "HoverCardTrigger", Bw = E.forwardRef((e, t) => { const { __scopeHoverCard: n, ...r } = e, o = lp($w, n), i = Bu(n); return b.jsx(Nu, { asChild: !0, ...i, children: b.jsx(xe.a, { "data-state": o.open ? "open" : "closed", ...r, ref: t, onPointerEnter: le(e.onPointerEnter, $l(o.onOpen)), onPointerLeave: le(e.onPointerLeave, $l(o.onClose)), onFocus: le(e.onFocus, o.onOpen), onBlur: le(e.onBlur, o.onClose), onTouchStart: le(e.onTouchStart, a => a.preventDefault()) }) }); });
Bw.displayName = $w;
var qA = "HoverCardPortal", [$L, HA] = Dw(qA, { forceMount: void 0 }), Fl = "HoverCardContent", Uw = E.forwardRef((e, t) => { const n = HA(Fl, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, i = lp(Fl, e.__scopeHoverCard); return b.jsx(fn, { present: r || i.open, children: b.jsx(WA, { "data-state": i.open ? "open" : "closed", ...o, onPointerEnter: le(e.onPointerEnter, $l(i.onOpen)), onPointerLeave: le(e.onPointerLeave, $l(i.onClose)), ref: t }) }); });
Uw.displayName = Fl;
var WA = E.forwardRef((e, t) => { const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: a, ...s } = e, l = lp(Fl, n), f = Bu(n), h = E.useRef(null), c = je(t, h), [u, p] = E.useState(!1); return E.useEffect(() => { if (u) {
    const g = document.body;
    return qc = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", () => { g.style.userSelect = qc, g.style.webkitUserSelect = qc; };
} }, [u]), E.useEffect(() => { if (h.current) {
    const g = () => { p(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => { var x; ((x = document.getSelection()) == null ? void 0 : x.toString()) !== "" && (l.hasSelectionRef.current = !0); }); };
    return document.addEventListener("pointerup", g), () => { document.removeEventListener("pointerup", g), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1; };
} }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), E.useEffect(() => { h.current && ZA(h.current).forEach(v => v.setAttribute("tabindex", "-1")); }), b.jsx(vi, { asChild: !0, disableOutsidePointerEvents: !1, onInteractOutside: a, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: le(i, g => { g.preventDefault(); }), onDismiss: l.onDismiss, children: b.jsx(Cu, { ...f, ...s, onPointerDown: le(s.onPointerDown, g => { g.currentTarget.contains(g.target) && p(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0; }), ref: c, style: { ...s.style, userSelect: u ? "text" : void 0, WebkitUserSelect: u ? "text" : void 0, "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)", "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)", "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)", "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)" } }) }); }), KA = "HoverCardArrow", GA = E.forwardRef((e, t) => { const { __scopeHoverCard: n, ...r } = e, o = Bu(n); return b.jsx(Ou, { ...o, ...r, ref: t }); });
GA.displayName = KA;
function $l(e) { return t => t.pointerType === "touch" ? void 0 : e(); }
function ZA(e) { const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: r => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP }); for (; n.nextNode();)
    t.push(n.currentNode); return t; }
var YA = Fw, QA = Bw, zw = Uw;
const XA = YA, JA = QA, Vw = E.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => b.jsx(zw, { ref: o, align: t, sideOffset: n, className: ge("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...r }));
Vw.displayName = zw.displayName;
var [Uu, BL] = $r("Tooltip", [Br]), zu = Br(), qw = "TooltipProvider", eP = 700, gd = "tooltip.open", [tP, up] = Uu(qw), Hw = e => { const { __scopeTooltip: t, delayDuration: n = eP, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: i } = e, [a, s] = E.useState(!0), l = E.useRef(!1), f = E.useRef(0); return E.useEffect(() => { const h = f.current; return () => window.clearTimeout(h); }, []), b.jsx(tP, { scope: t, isOpenDelayed: a, delayDuration: n, onOpen: E.useCallback(() => { window.clearTimeout(f.current), s(!1); }, []), onClose: E.useCallback(() => { window.clearTimeout(f.current), f.current = window.setTimeout(() => s(!0), r); }, [r]), isPointerInTransitRef: l, onPointerInTransitChange: E.useCallback(h => { l.current = h; }, []), disableHoverableContent: o, children: i }); };
Hw.displayName = qw;
var Vu = "Tooltip", [nP, qu] = Uu(Vu), Ww = e => { const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: i, disableHoverableContent: a, delayDuration: s } = e, l = up(Vu, e.__scopeTooltip), f = zu(t), [h, c] = E.useState(null), u = sn(), p = E.useRef(0), g = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, x = E.useRef(!1), [m = !1, d] = Cr({ prop: r, defaultProp: o, onChange: S => { S ? (l.onOpen(), document.dispatchEvent(new CustomEvent(gd))) : l.onClose(), i == null || i(S); } }), w = E.useMemo(() => m ? x.current ? "delayed-open" : "instant-open" : "closed", [m]), y = E.useCallback(() => { window.clearTimeout(p.current), x.current = !1, d(!0); }, [d]), _ = E.useCallback(() => { window.clearTimeout(p.current), d(!1); }, [d]), T = E.useCallback(() => { window.clearTimeout(p.current), p.current = window.setTimeout(() => { x.current = !0, d(!0); }, v); }, [v, d]); return E.useEffect(() => () => window.clearTimeout(p.current), []), b.jsx(ku, { ...f, children: b.jsx(nP, { scope: t, contentId: u, open: m, stateAttribute: w, trigger: h, onTriggerChange: c, onTriggerEnter: E.useCallback(() => { l.isOpenDelayed ? T() : y(); }, [l.isOpenDelayed, T, y]), onTriggerLeave: E.useCallback(() => { g ? _() : window.clearTimeout(p.current); }, [_, g]), onOpen: y, onClose: _, disableHoverableContent: g, children: n }) }); };
Ww.displayName = Vu;
var yd = "TooltipTrigger", Kw = E.forwardRef((e, t) => { const { __scopeTooltip: n, ...r } = e, o = qu(yd, n), i = up(yd, n), a = zu(n), s = E.useRef(null), l = je(t, s, o.onTriggerChange), f = E.useRef(!1), h = E.useRef(!1), c = E.useCallback(() => f.current = !1, []); return E.useEffect(() => () => document.removeEventListener("pointerup", c), [c]), b.jsx(Nu, { asChild: !0, ...a, children: b.jsx(xe.button, { "aria-describedby": o.open ? o.contentId : void 0, "data-state": o.stateAttribute, ...r, ref: l, onPointerMove: le(e.onPointerMove, u => { u.pointerType !== "touch" && !h.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), h.current = !0); }), onPointerLeave: le(e.onPointerLeave, () => { o.onTriggerLeave(), h.current = !1; }), onPointerDown: le(e.onPointerDown, () => { f.current = !0, document.addEventListener("pointerup", c, { once: !0 }); }), onFocus: le(e.onFocus, () => { f.current || o.onOpen(); }), onBlur: le(e.onBlur, o.onClose), onClick: le(e.onClick, o.onClose) }) }); });
Kw.displayName = yd;
var rP = "TooltipPortal", [UL, oP] = Uu(rP, { forceMount: void 0 }), ui = "TooltipContent", Gw = E.forwardRef((e, t) => { const n = oP(ui, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, a = qu(ui, e.__scopeTooltip); return b.jsx(fn, { present: r || a.open, children: a.disableHoverableContent ? b.jsx(Zw, { side: o, ...i, ref: t }) : b.jsx(iP, { side: o, ...i, ref: t }) }); }), iP = E.forwardRef((e, t) => { const n = qu(ui, e.__scopeTooltip), r = up(ui, e.__scopeTooltip), o = E.useRef(null), i = je(t, o), [a, s] = E.useState(null), { trigger: l, onClose: f } = n, h = o.current, { onPointerInTransitChange: c } = r, u = E.useCallback(() => { s(null), c(!1); }, [c]), p = E.useCallback((g, v) => { const x = g.currentTarget, m = { x: g.clientX, y: g.clientY }, d = uP(m, x.getBoundingClientRect()), w = cP(m, d), y = fP(v.getBoundingClientRect()), _ = hP([...w, ...y]); s(_), c(!0); }, [c]); return E.useEffect(() => () => u(), [u]), E.useEffect(() => { if (l && h) {
    const g = x => p(x, h), v = x => p(x, l);
    return l.addEventListener("pointerleave", g), h.addEventListener("pointerleave", v), () => { l.removeEventListener("pointerleave", g), h.removeEventListener("pointerleave", v); };
} }, [l, h, p, u]), E.useEffect(() => { if (a) {
    const g = v => { const x = v.target, m = { x: v.clientX, y: v.clientY }, d = (l == null ? void 0 : l.contains(x)) || (h == null ? void 0 : h.contains(x)), w = !dP(m, a); d ? u() : w && (u(), f()); };
    return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
} }, [l, h, a, f, u]), b.jsx(Zw, { ...e, ref: i }); }), [aP, sP] = Uu(Vu, { isInside: !1 }), Zw = E.forwardRef((e, t) => { const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: a, ...s } = e, l = qu(ui, n), f = zu(n), { onClose: h } = l; return E.useEffect(() => (document.addEventListener(gd, h), () => document.removeEventListener(gd, h)), [h]), E.useEffect(() => { if (l.trigger) {
    const c = u => { const p = u.target; p != null && p.contains(l.trigger) && h(); };
    return window.addEventListener("scroll", c, { capture: !0 }), () => window.removeEventListener("scroll", c, { capture: !0 });
} }, [l.trigger, h]), b.jsx(vi, { asChild: !0, disableOutsidePointerEvents: !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: c => c.preventDefault(), onDismiss: h, children: b.jsxs(Cu, { "data-state": l.stateAttribute, ...f, ...s, ref: t, style: { ...s.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [b.jsx(A0, { children: r }), b.jsx(aP, { scope: n, isInside: !0, children: b.jsx(QO, { id: l.contentId, role: "tooltip", children: o || r }) })] }) }); });
Gw.displayName = ui;
var Yw = "TooltipArrow", lP = E.forwardRef((e, t) => { const { __scopeTooltip: n, ...r } = e, o = zu(n); return sP(Yw, n).isInside ? null : b.jsx(Ou, { ...o, ...r, ref: t }); });
lP.displayName = Yw;
function uP(e, t) { const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x); switch (Math.min(n, r, o, i)) {
    case i: return "left";
    case o: return "right";
    case n: return "top";
    case r: return "bottom";
    default: throw new Error("unreachable");
} }
function cP(e, t, n = 5) { const r = []; switch (t) {
    case "top":
        r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
        break;
    case "bottom":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
        break;
    case "left":
        r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
        break;
    case "right":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
        break;
} return r; }
function fP(e) { const { top: t, right: n, bottom: r, left: o } = e; return [{ x: o, y: t }, { x: n, y: t }, { x: n, y: r }, { x: o, y: r }]; }
function dP(e, t) { const { x: n, y: r } = e; let o = !1; for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i].x, l = t[i].y, f = t[a].x, h = t[a].y;
    l > r != h > r && n < (f - s) * (r - l) / (h - l) + s && (o = !o);
} return o; }
function hP(e) { const t = e.slice(); return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), pP(t); }
function pP(e) { if (e.length <= 1)
    return e.slice(); const t = []; for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2;) {
        const i = t[t.length - 1], a = t[t.length - 2];
        if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x))
            t.pop();
        else
            break;
    }
    t.push(o);
} t.pop(); const n = []; for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2;) {
        const i = n[n.length - 1], a = n[n.length - 2];
        if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x))
            n.pop();
        else
            break;
    }
    n.push(o);
} return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n); }
var mP = Hw, vP = Ww, gP = Kw, Qw = Gw;
const Hc = mP, Wc = vP, Kc = gP, Ls = E.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => b.jsx(Qw, { ref: r, sideOffset: t, className: ge("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...n }));
Ls.displayName = Qw.displayName;
const Yo = ({ postAuthorEmail: e, postAuthorName: t, postAuthorAvatarSource: n, postTitle: r, postThumbnailSource: o, postDescription: i, postRatingCount: a, postBookmarkCount: s, postCommentCount: l, postType: f, postDate: h }) => { const c = `@${e.split("@")[0]}`, [u, p] = E.useState(["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"]), [g, v] = E.useState(["UserA", "UserB", "UserC", "UserD", "UserE", "UserF", "UserG", "UserH"]), [x, m] = E.useState(["Commenter1", "Commenter2", "Commenter3", "Commenter4", "Commenter5", "Commenter6", "Commenter7", "Commenter8"]), [d, w] = E.useState(); return E.useEffect(() => { (navigator.maxTouchPoints > 0 || navigator.maxTouchPoints !== void 0 && navigator.maxTouchPoints > 0) && w(!0); }, []), b.jsxs(Or, { className: "bg-primary-foreground", children: [b.jsx(Tr, { className: "py-4", children: b.jsxs("div", { className: "w-full flex justify-between items-center", children: [b.jsxs("div", { className: "flex gap-2 items-center", children: [b.jsxs(Ml, { className: "w-10 h-10 cursor-pointer", onClick: () => alert("redirect to indiv provider screen"), children: [b.jsx(Ll, { className: "aspect-square object-cover rounded-full", src: n, alt: c }), b.jsx(Dl, { children: c })] }), b.jsxs("div", { className: "flex flex-col gap-.5", children: [b.jsxs(XA, { children: [b.jsx(JA, { children: b.jsx("h3", { role: "button", className: "text-md font-medium z-[1] max-w-[10rem] truncate hover:underline underline-offset-2 cursor-pointer md:max-w-[12rem] xl:max-w-[14rem] 2xl:max-w-[18rem]", onClick: () => alert("Redirect to indiv provider screen"), children: t }) }), b.jsx(Vw, { className: "w-[25rem]", children: b.jsxs("div", { className: "flex justify-between space-x-4", children: [b.jsxs(Ml, { className: "w-16 h-16 cursor-pointer", onClick: () => alert("redirect to indiv provider screen"), children: [b.jsx(Ll, { className: "aspect-square object-cover rounded-full", src: n, alt: c }), b.jsx(Dl, { children: c })] }), b.jsxs("div", { className: "space-y-1", children: [b.jsx("h3", { role: "button", className: "text-lg font-medium z-[1] w-full hover:underline underline-offset-2 cursor-pointer lg:text-wrap", onClick: () => alert("Redirect to indiv provider screen"), children: t }), b.jsx("p", { className: "text-sm", children: "Insert provider description here if there is any." }), b.jsxs("div", { className: "flex items-center pt-2", children: [b.jsx(mA, { className: "mr-2 h-4 w-4 opacity-70" }), " ", b.jsx("span", { className: "text-xs text-muted-foreground", children: "Joined [insert date here]" })] })] })] }) })] }), b.jsx("p", { className: "text-xs text-gray-500 max-w-[10rem] truncate md:max-w-[12rem] xl:max-w-[14rem] 2xl:max-w-[18rem]", children: e }), b.jsxs("p", { className: "hidden", children: [f, h] })] })] }), b.jsx("div", { className: "flex flex-col gap-1 items-center", children: b.jsx("a", { className: "text-blue-500 text-sm hover:underline underline-offset-2", href: "#", onClick: () => alert("Redirect to indiv post screen"), children: "View post" }) })] }) }), b.jsx(Il, { className: "mb-4" }), b.jsx(Ar, { className: "pb-4 ", children: b.jsxs("div", { className: "w-full flex flex-col gap-2", children: [b.jsxs("div", { className: "w-full flex flex-col gap-1", children: [b.jsx("div", { className: "flex justify-between items-center", children: b.jsx("h3", { className: "text-lg font-bold max-w-[18rem] truncate xl:max-w-[26rem]", dangerouslySetInnerHTML: { __html: r } }) }), b.jsx("img", { src: o, alt: `${r} thumbnail`, className: "w-full rounded-md object-cover max-h-[15rem] min-h-[15rem] cursor-pointer", onClick: () => alert("Redirect to indiv post screen") })] }), b.jsx("div", { className: "w-full flex flex-col gap-1 z-[2]", children: b.jsx("p", { dangerouslySetInnerHTML: { __html: i }, className: "text-sm text-gray-500 line-clamp-3" }) })] }) }), d ? b.jsxs("div", { className: "w-full h-12 flex justify-between items-center px-4 border-b", children: [b.jsx("div", { className: "flex items-center hover:underline underline-offset-2", children: b.jsxs("small", { children: [a, " ratings"] }) }), b.jsxs("div", { className: "flex gap-2 items-center", children: [b.jsx("div", { className: "flex items-center hover:underline underline-offset-2", children: b.jsxs("small", { children: [s, " bookmarks"] }) }), b.jsx("div", { className: "flex items-center hover:underline underline-offset-2", children: b.jsxs("small", { children: [l, " comments"] }) })] })] }) : b.jsxs("div", { className: "w-full h-12 flex justify-between items-center px-4 border-b", children: [b.jsx(Hc, { children: b.jsxs(Wc, { children: [b.jsx(Kc, { children: b.jsx("div", { className: "flex cursor-pointer items-center hover:underline underline-offset-2", children: b.jsxs("small", { children: [a, " ratings"] }) }) }), b.jsx(Ls, { className: "min-w-[6rem]", children: b.jsxs("ul", { children: [u.slice(0, 7).map((y, _) => b.jsx("li", { children: y }, _)), u.length > 7 && b.jsxs("li", { children: [u.length - 7, " more"] })] }) })] }) }), b.jsxs("div", { className: "flex gap-2 items-center", children: [b.jsx(Hc, { children: b.jsxs(Wc, { children: [b.jsx(Kc, { children: b.jsx("div", { className: "flex cursor-pointer items-center hover:underline underline-offset-2", children: b.jsxs("small", { children: [s, " bookmarks"] }) }) }), b.jsx(Ls, { className: "min-w-[6rem]", children: b.jsxs("ul", { children: [g.slice(0, 7).map((y, _) => b.jsx("li", { children: y }, _)), g.length > 7 && b.jsxs("li", { children: [g.length - 7, " more"] })] }) })] }) }), b.jsx(Hc, { children: b.jsxs(Wc, { children: [b.jsx(Kc, { children: b.jsx("div", { className: "flex cursor-pointer items-center hover:underline underline-offset-2", children: b.jsxs("small", { children: [l, " comments"] }) }) }), b.jsx(Ls, { className: "min-w-[6rem]", children: b.jsxs("ul", { children: [x.slice(0, 7).map((y, _) => b.jsx("li", { children: y }, _)), x.length > 7 && b.jsxs("li", { children: [x.length - 7, " more"] })] }) })] }) })] })] }), b.jsxs("div", { className: "w-full flex gap-1 items-center p-2", children: [b.jsxs(Re, { className: "w-full px-2", variant: "ghost", children: [" ", b.jsx(nw, { className: "mr-0.5 h-4" }), " Rate"] }), b.jsxs(Re, { className: "w-full px-2", variant: "ghost", children: [b.jsx(pA, { className: "mr-0.5 h-4" }), "Bookmark"] }), b.jsxs(Re, { className: "w-full px-2", variant: "ghost", children: [b.jsx(vA, { className: "mr-0.5 h-4" }), "Share"] })] })] }); }, Hu = [{ email: "admission.caloocan@laverdad.edu.ph", name: "La Verdad Christian College, Inc. - Caloocan", avatarSource: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/461924271_566194232644520_3597166314315883364_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQpmYeMvXyPt4ejVgl-0tA6NUyqkLlyuTo1TKqQuXK5CYPQXOXvcT_6ooQuEMnLHOrI-DF6tfyyeAr37Iyf7zT&_nc_ohc=qw6fFIIpGLYQ7kNvgG_3aAY&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=A_kTzIQNVqBsU_0LBQgmWaz&oh=00_AYAbZur3KVqE_10b4xHP4XgB-DoEQXWWzmPK5Qmy93z69g&oe=670FA7B9", postTitle: "STUDY NOW, PAY <strike>LATER</strike> NEVER", postThumbnailSource: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/273036020_4892115524188494_2590197564223176883_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGrfJduGwytLu1qYLtPMUdvtKOtC7kfAJa0o60LuR8AlmpJ0hg5C808OpWbgYYHUEI00ZL-wJDpXoUr8P4w3Lce&_nc_ohc=NYwQUQVImbUQ7kNvgGplNr4&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=AvW0_V-F1K-DNP2nkseKsJD&oh=00_AYCs9vyTnP8L8Sz0G5m93emdH8YiwtLEYZhC6BZFm4dJSw&oe=670F8870", postDescription: '<h1>STUDY NOW, PAY NEVER!</h1><p>Quality Education for FREE!</p><p>La Verdad Christian College - Caloocan is NOW OPEN for Application for the FULL SCHOLARSHIP GRANT in College for Academic Year 2022-2023.</p><p>Please click the link for the admission details:</p><p><a href="https://tinyurl.com/OnlineApplicationAY2223?fbclid=IwZXh0bgNhZW0CMTAAAR08KuSH7XAX9r9sqnY4Un5CBIGMqKLCtA8roxtMGO1Kxo13_iQcI4eH90c_aem_53aenhiou2dhfT07tU4q1A" target="_blank" style="color: var(--blue-link);">https://tinyurl.com/OnlineApplicationAY2223</a></p>', postRatingCount: 150, postBookmarkCount: 95, postCommentCount: 40, postType: "scholarship", postDate: "June 1, 2023" }, { email: "admission.caloocan@laverdad.edu.ph", name: "La Verdad Christian College, Inc. - Caloocan", avatarSource: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/461924271_566194232644520_3597166314315883364_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQpmYeMvXyPt4ejVgl-0tA6NUyqkLlyuTo1TKqQuXK5CYPQXOXvcT_6ooQuEMnLHOrI-DF6tfyyeAr37Iyf7zT&_nc_ohc=qw6fFIIpGLYQ7kNvgG_3aAY&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=A_kTzIQNVqBsU_0LBQgmWaz&oh=00_AYAbZur3KVqE_10b4xHP4XgB-DoEQXWWzmPK5Qmy93z69g&oe=670FA7B9", postTitle: "STUDY NOW, PAY <strike>LATER</strike> NEVER", postThumbnailSource: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/273036020_4892115524188494_2590197564223176883_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGrfJduGwytLu1qYLtPMUdvtKOtC7kfAJa0o60LuR8AlmpJ0hg5C808OpWbgYYHUEI00ZL-wJDpXoUr8P4w3Lce&_nc_ohc=NYwQUQVImbUQ7kNvgGplNr4&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=AvW0_V-F1K-DNP2nkseKsJD&oh=00_AYCs9vyTnP8L8Sz0G5m93emdH8YiwtLEYZhC6BZFm4dJSw&oe=670F8870", postDescription: '<h2>Description</h2><p><span style="color: rgb(187, 187, 187);">The Future Leaders Scholarship is designed to support exceptional students who demonstrate outstanding leadership potential and a commitment to community service. This prestigious award covers full tuition and provides mentorship opportunities to help shape the next generation of visionary leaders.</span></p><p><br></p><h2>Eligibility</h2><ol><li><span style="color: rgb(187, 187, 187);">Minimum GPA of 3.5</span></li><li><span style="color: rgb(187, 187, 187);">Demonstrated leadership experience</span></li><li><span style="color: rgb(187, 187, 187);">Active community involvement</span></li><li><span style="color: rgb(187, 187, 187);">Incoming freshman or transfer student</span></li></ol><p><br></p><h2><span style="color: rgb(255, 255, 255);">Application Process</span></h2><ul><li><span style="color: rgb(187, 187, 187);">Complete online application form</span></li><li><span style="color: rgb(187, 187, 187);">Submit academic transcripts</span></li><li><span style="color: rgb(187, 187, 187);">Provide two letters of recommendations</span></li><li><span style="color: rgb(187, 187, 187);">Write a 500-word personal statement</span></li></ul>', postRatingCount: 150, postBookmarkCount: 95, postCommentCount: 40, postType: "scholarship", postDate: "June 1, 2023" }, { email: "info@laverdad.edu.ph", name: "La Verdad Christian College, Inc. - Apalit, Pampanga", avatarSource: "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/461624352_509560758619382_8813051501729332811_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWq-cz_bLE0izRSpJd198AeVoW8zz7ZXt5WhbzPPtle2C6prcSTLd3ND27KFsKVjjUqffhuNqZ4xIpEXrBJn_7&_nc_ohc=6AWu5jpNDGYQ7kNvgFJ9ZQi&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=AxCU6R5kOk8aCfekgDjq66z&oh=00_AYDWiDYri00R4VHU6sWSxhUWZlsmHHjUZRrOSmHJvA3Zpg&oe=670FA3FC", postTitle: "STUDY NOW, PAY <s>LATER</s> NEVER", postThumbnailSource: "https://scontent.fcrk4-2.fna.fbcdn.net/v/t39.30808-6/422929243_350086681233458_392159417334999887_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG8LzcjVq-Vv9HMFROB1tvK9LuyAICIh8P0u7IAgIiHwwhbcqKHtqKNVTJxWbhZCyGje0avaYuR5zcZiTLEDYfO&_nc_ohc=t1Gk4iq8pH8Q7kNvgH4mIpi&_nc_zt=23&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=AHcH0u32gJMifhgfjUEnU0c&oh=00_AYAn4AesAQ5tAsmlHrcY3eun4vHAqC6Qk044nzSof-AnMw&oe=670FB558", postDescription: '<p>𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧</p><p>Application for the LVCC FULL SCHOLARSHIP GRANT for Academic Year 2024-2025 is NOW OFFICIALLY OPEN from 𝗝𝗮𝗻𝘂𝗮𝗿𝘆 𝟮𝟱 𝘁𝗼 𝗙𝗲𝗯𝗿𝘂𝗮𝗿𝘆 𝟮𝟯, 𝟮𝟬𝟮𝟰.</p><p>Click the link below to access the 𝗢𝗡𝗟𝗜𝗡𝗘 𝗔𝗣𝗣𝗟𝗜𝗖𝗔𝗧𝗜𝗢𝗡 𝗣𝗢𝗥𝗧𝗔𝗟</p><p><a href="https://app.laverdad.edu.ph/?fbclid=IwZXh0bgNhZW0CMTAAAR08KuSH7XAX9r9sqnY4Un5CBIGMqKLCtA8roxtMGO1Kxo13_iQcI4eH90c_aem_53aenhiou2dhfT07tU4q1A" target="_blank" style="color: var(--blue-link);">https://app.laverdad.edu.ph/</a></p><p>To view a detailed step-by-step guide on how to use the ONLINE APPLICATION PORTAL, click here: <a href="https://drive.google.com/file/d/1519OQqfgFsMnup7Gol2bV97MntNPnfeB/view?usp=sharing&amp;fbclid=IwZXh0bgNhZW0CMTAAAR2jSii-UXyg0SpLs1lRhBIaby9EVBVvO1BRRGMp2MVS02jhCqQe7_7RKzw_aem_8jbssBcT3djgAlCjjOEU9A" target="_blank" style="color: var(--blue-link);">https://drive.google.com/.../1519OQqfgFsMnup7Gol2.../view...</a></p><p>𝑵𝑶𝑻𝑬: 𝑻𝒉𝒊𝒔 𝑺𝒄𝒉𝒐𝒍𝒂𝒓𝒔𝒉𝒊𝒑 𝒂𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒊𝒔 𝒊𝒏𝒕𝒆𝒏𝒅𝒆𝒅 𝒇𝒐𝒓 𝑭𝒂𝒄𝒆-𝒕𝒐-𝒇𝒂𝒄𝒆 𝒔𝒄𝒉𝒐𝒐𝒍𝒊𝒏𝒈 𝒐𝒏𝒍𝒚.</p>', postRatingCount: 200, postBookmarkCount: 120, postCommentCount: 55, postType: "scholarship", postDate: "2023-06-01" }, { email: "internships@creativeworks.com", name: "Internships Reactive", avatarSource: "https://via.placeholder.com/150", postTitle: "Creative Works Design Internship Blabla", postThumbnailSource: "https://via.placeholder.com/400x200", postDescription: "<p>Are you passionate about <strong>graphic design</strong> and <code>UX/UI</code>? Join <em>Creative Works</em> for a <a href='www.facebook.com' target='_blank'>6-month internship</a> where you'll work with top designers on real-world projects.</p> <p><strong>Perks:</strong> Remote work, mentorship, and a performance bonus!</p> <a href='https://creativeworks.com/internships' target='_blank'>Apply today</a>", postRatingCount: 180, postBookmarkCount: 105, postCommentCount: 38, postType: "internship", postDate: "2023-06-01" }, { email: "internships@creativeworks.com", name: "IT Internships", avatarSource: "https://via.placeholder.com/150", postTitle: "Quick Strike Internship Now Open", postThumbnailSource: "https://via.placeholder.com/400x200", postDescription: `<p>Are you passionate about <strong>graphic design</strong> and <pre class="ql-syntax" spellcheck="false">UX/UI
</pre> Join <em>Creative Works</em> for a <a href='www.facebook.com' target='_blank'>6-month internship</a> where you'll work with top designers on real-world projects.</p> <p><strong>Perks:</strong> Remote work, mentorship, and a performance bonus!</p> <a href='https://creativeworks.com/internships' target='_blank'>Apply today</a>`, postRatingCount: 180, postBookmarkCount: 105, postCommentCount: 38, postType: "internship", postDate: "2023-06-01" }], cp = [{ thumbnail: "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/449449169_447660674809391_692585298774003021_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFJuJzTCK2Z3odEydsAr1rJYsTexpZPKg1ixN7Glk8qDUu7Q_JCZVw9d4nKgEdy7qKBB_sO2fVWhHEqMiOUNG6T&_nc_ohc=6XaoIN0GI9QQ7kNvgFOZeVG&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=ADYuKfczXQ9LMZkCMLdcZYi&oh=00_AYCeJ0aQh1azc6a-sLBpIsX9rmd4RsjmKNYQ5H9-BVKnww&oe=670F870B", avatar: "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/461624352_509560758619382_8813051501729332811_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWq-cz_bLE0izRSpJd198AeVoW8zz7ZXt5WhbzPPtle2C6prcSTLd3ND27KFsKVjjUqffhuNqZ4xIpEXrBJn_7&_nc_ohc=6AWu5jpNDGYQ7kNvgFJ9ZQi&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=AxCU6R5kOk8aCfekgDjq66z&oh=00_AYDWiDYri00R4VHU6sWSxhUWZlsmHHjUZRrOSmHJvA3Zpg&oe=670FA3FC", provider: "La Verdad Christian College, Inc. - Apalit, Pampanga", description: "Wisdom based on the truth is priceless.", scholarship: "Future Tech Leaders Scholarship 2024" }, { thumbnail: "https://scontent.fcrk4-2.fna.fbcdn.net/v/t39.30808-6/462693785_572297352034208_4072350988270131867_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFxBIb5Ks6pVotefQzSmLg2vtFEeWRvEfG-0UR5ZG8R8UKS6JjidRPX9j7J9h9xwYhQdTNurlH26M6MCoMhw-9i&_nc_ohc=PHe0jc1YwpoQ7kNvgFGQUBI&_nc_zt=23&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=AsqXPYjBH7H6yMKrcvnDH9x&oh=00_AYDyB5P75ExnxfKLuvVtJztyx3M2aJTRK343Pl9kJny8Og&oe=670FADBD", avatar: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/461924271_566194232644520_3597166314315883364_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQpmYeMvXyPt4ejVgl-0tA6NUyqkLlyuTo1TKqQuXK5CYPQXOXvcT_6ooQuEMnLHOrI-DF6tfyyeAr37Iyf7zT&_nc_ohc=qw6fFIIpGLYQ7kNvgG_3aAY&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=A_kTzIQNVqBsU_0LBQgmWaz&oh=00_AYAbZur3KVqE_10b4xHP4XgB-DoEQXWWzmPK5Qmy93z69g&oe=670FA7B9", provider: "La Verdad Christian College, Inc. - Caloocan", description: "Wisdom based on the truth is priceless.", scholarship: "Future Tech Leaders Scholarship 2024" }, { thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+3", avatar: "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/452912470_2526121527595306_3752199441102383149_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtCgs-XyXL89ENkqy7JG3peWlRnJXahMF5aVGcldqEwU1hJd6qhyhKUGWsK52KiDE16tK8oTnAWiBcfTghtwJt&_nc_ohc=0aFGsrCXi6EQ7kNvgGeDTFV&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=ANu0xv9z85XR0ENGh62yylc&oh=00_AYBGZKYtxIFtM7UfMbbYyIGbDTDRHZIUjJCb0LPeVAY0kg&oe=670F8366", provider: "Johnmack Faeldonia", description: "Shori, bosh", scholarship: "STEM Leaders Scholarship 2024" }], Ds = [{ id: "1", email: "johndoe@example.com", name: "Johnmack Faeldonia", organizationName: "Doe Enterprises", bio: "A passionate entrepreneur.", avatarUrl: "https://scontent.fbag4-1.fna.fbcdn.net/v/t39.30808-6/452912470_2526121527595306_3752199441102383149_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtCgs-XyXL89ENkqy7JG3peWlRnJXahMF5aVGcldqEwU1hJd6qhyhKUGWsK52KiDE16tK8oTnAWiBcfTghtwJt&_nc_ohc=nyj-K21CRl8Q7kNvgGHFtoL&_nc_zt=23&_nc_ht=scontent.fbag4-1.fna&_nc_gid=AxNTWZFhCZdA3OBSWam6QD_&oh=00_AYAWq-elKA1RxTQIYt2OvUbsNU1BC78UgYAoOUl34JTN_w&oe=67110D26", contactNumber: "+1234567890", validIdUrl: "https://example.com/valid-id.jpg", createdAt: "2024-01-01T12:00:00Z", updatedAt: "2024-09-01T12:00:00Z" }, { id: "2", email: "janesmith@example.com", name: "Kurtd Daniel Bigtas", organizationName: "Kurtd Daniel Bigtas", bio: "Tech enthusiast and problem solver.", avatarUrl: "https://scontent.fbag4-1.fna.fbcdn.net/v/t39.30808-6/440166746_25371551272492353_7022797428020999409_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE6YN-LerRQeT9r5QJmhKUTkjRxWwzQgW6SNHFbDNCBbs5Je_9d1VcuTlg6UQQz3Y7v3pPfWBH0ypDLTs6CYgp8&_nc_ohc=r6D8cy67UfcQ7kNvgHXnr5G&_nc_zt=23&_nc_ht=scontent.fbag4-1.fna&_nc_gid=AB8ID44fIEKmsB3Fz3ePKgZ&oh=00_AYCaMhckXWRn1M8-5O8w3C2a2YHpIS6RPT9NDX-Vioj2BQ&oe=67112F0E", contactNumber: "+0987654321", validIdUrl: "https://example.com/valid-id.jpg", createdAt: "2024-02-15T12:00:00Z", updatedAt: "2024-09-15T12:00:00Z" }, { id: "3", email: "markjohnson@example.com", name: "Raven Dela Rama", organizationName: "Raven Dela Rama", bio: "Engineer with a love for innovation.", avatarUrl: "https://scontent.fbag4-1.fna.fbcdn.net/v/t39.30808-6/426374110_1461399794737580_3493421727438730561_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG9CBl1CqqaysKmfa6Q1t41kvXsYt-w-BGS9exi37D4EQcfhgWDIP0v6PcSANmUDTBvyfEdpSRVUEwyDiPGs8lH&_nc_ohc=8GRGIgrNZvsQ7kNvgG76yxA&_nc_zt=23&_nc_ht=scontent.fbag4-1.fna&_nc_gid=AKkQ6BfwYojQzKQoBuvWwyn&oh=00_AYAZoEiv9RwDLuhvN9czH1vBhQA6PuZ-kSwV0YpqjIL0-A&oe=67111CC2", contactNumber: "+1122334455", validIdUrl: "https://example.com/valid-id.jpg", createdAt: "2024-03-20T12:00:00Z", updatedAt: "2024-09-20T12:00:00Z" }], yP = [{ id: "101", userId: Ds[0].id, rating: 5, comment: "Excellent experience! Everything was smooth and professional.", createdAt: "2024-10-10T15:30:00Z", updatedAt: "2024-10-10T15:30:00Z" }, { id: "102", userId: Ds[1].id, rating: 4, comment: "Good service overall, but there is room for improvement.", createdAt: "2024-10-11T14:20:00Z", updatedAt: "2024-10-11T14:20:00Z" }, { id: "103", userId: Ds[2].id, rating: 3, comment: "Average experience. Some aspects could have been better.", createdAt: "2024-10-13T05:13:00Z", updatedAt: "2024-10-13T05:13:00Z" }];
function xP() { E.useState(); const [e, t] = E.useState("all"), [n, r] = E.useState(""), [o, i] = E.useState("latest"), a = Hu.filter(l => e === "all" || l.postType === e).filter(l => l.postTitle.toLowerCase().includes(n.toLowerCase()) || l.postDescription.toLowerCase().includes(n.toLowerCase())).sort((l, f) => o === "latest" ? new Date(f.postDate).getTime() - new Date(l.postDate).getTime() : new Date(l.postDate).getTime() - new Date(f.postDate).getTime()), s = () => { console.log("Create post clicked"); }; return b.jsxs(b.Fragment, { children: [b.jsx(Ow, {}), b.jsxs("div", { className: "container mx-auto p-4", children: [b.jsxs("div", { className: "flex justify-between items-center mb-6", children: [b.jsx("h1", { className: "text-2xl font-bold", children: "Feed" }), b.jsxs(Re, { onClick: s, children: [b.jsx(ew, { className: "mr-2 h-4 w-4" }), " Create Post"] })] }), b.jsxs(Ch, { value: e, onValueChange: l => t(l), children: [b.jsxs(mu, { className: "grid w-full grid-cols-3 mb-6", children: [b.jsx(_r, { value: "all", children: "All" }), b.jsx(_r, { value: "scholarship", children: "Scholarships" }), b.jsx(_r, { value: "internship", children: "Internships" })] }), b.jsxs("div", { className: "flex space-x-4 mb-6", children: [b.jsxs("div", { className: "relative flex-grow", children: [b.jsx(tw, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }), b.jsx(Fn, { placeholder: "Search posts...", value: n, onChange: l => r(l.target.value), className: "pl-8" })] }), b.jsxs(Gx, { value: o, onValueChange: l => i(l), children: [b.jsx(Kh, { className: "w-[180px]", children: b.jsx(Zx, { placeholder: "Sort by" }) }), b.jsxs(Gh, { children: [b.jsx(cr, { value: "latest", children: "Latest" }), b.jsx(cr, { value: "oldest", children: "Oldest" })] })] })] }), b.jsx(Er, { value: "all", className: "mt-0", children: b.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: a.map(l => b.jsx(Yo, { postAuthorEmail: l.email, postAuthorAvatarSource: l.avatarSource, postTitle: l.postTitle, postThumbnailSource: l.postThumbnailSource, postDescription: l.postDescription, postRatingCount: l.postRatingCount, postBookmarkCount: l.postBookmarkCount, postAuthorName: l.name, postCommentCount: l.postCommentCount, postType: l.postType, postDate: l.postDate })) }) }), b.jsx(Er, { value: "scholarship", className: "mt-0", children: b.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: a.filter(l => l.postType === "scholarship").map(l => b.jsx(Yo, { postAuthorEmail: l.email, postAuthorAvatarSource: l.avatarSource, postTitle: l.postTitle, postThumbnailSource: l.postThumbnailSource, postDescription: l.postDescription, postRatingCount: l.postRatingCount, postBookmarkCount: l.postBookmarkCount, postAuthorName: l.name, postCommentCount: l.postCommentCount, postType: l.postType, postDate: l.postDate })) }) }), b.jsx(Er, { value: "internship", className: "mt-0", children: b.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: a.filter(l => l.postType === "internship").map(l => b.jsx(Yo, { postAuthorEmail: l.email, postAuthorAvatarSource: l.avatarSource, postTitle: l.postTitle, postThumbnailSource: l.postThumbnailSource, postDescription: l.postDescription, postRatingCount: l.postRatingCount, postBookmarkCount: l.postBookmarkCount, postAuthorName: l.name, postCommentCount: l.postCommentCount, postType: l.postType, postDate: l.postDate })) }) })] })] })] }); }
const wP = ({ avatar: e, name: t, testimony: n }) => b.jsx("div", { className: "   rounded-lg shadow-md p-8 max-w-sm mx-auto mb-6 text-center", children: b.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [b.jsx("img", { src: e, alt: `${t}'s avatar`, className: "w-30 h-30 rounded-full" }), b.jsxs("div", { className: "flex flex-col items-center", children: [b.jsx("h2", { className: "text-xl font-bold dark:text-white", children: t }), b.jsx("p", { className: "text-base text-gray-700 dark:text-gray-300 mt-2", children: n })] })] }) }), bP = [{ avatar: "https://via.placeholder.com/150", name: "Juan Dela Cruz", testimony: "ISKOLAR PH helped me find a scholarship that suited my needs. Highly recommended!" }, { avatar: "https://via.placeholder.com/150", name: "Maria Clara", testimony: "The process was seamless, and the support from the team was amazing!" }, { avatar: "https://via.placeholder.com/150", name: "Jose Rizal", testimony: "With ISKOLAR PH, I was able to connect with providers and get the support I needed for my education." }], _P = () => b.jsxs("section", { className: "pt-20 px-10 ", children: [b.jsx("h2", { className: "text-3xl font-bold text-center mb-6 text-blue-600 dark:text-yellow-500", children: "Student Testimonials" }), b.jsx("div", { className: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8", children: bP.map((e, t) => b.jsx(wP, { avatar: e.avatar, name: e.name, testimony: e.testimony }, t)) })] }), EP = ({ avatar: e, name: t, provider: n }) => b.jsx("div", { className: "   rounded-lg shadow-md p-8 max-w-sm mx-auto mb-6 text-center", children: b.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [b.jsx("img", { src: e, alt: `${t}'s avatar`, className: "w-30 h-30 rounded-full" }), b.jsxs("div", { className: "flex flex-col items-center", children: [b.jsx("h2", { className: "text-xl font-bold dark:text-white", children: t }), b.jsx("p", { className: "text-base text-gray-700 dark:text-gray-300 mt-2", children: n })] })] }) }), SP = [{ avatar: "https://via.placeholder.com/150", name: "Mayor Antonio Reyes", provider: "Our city government is proud to partner with ISKOLAR PH in providing educational opportunities to underprivileged students." }, { avatar: "https://via.placeholder.com/150", name: "Hon. Maria Santos", provider: "As a representative of the youth sector, I have seen first-hand how ISKOLAR PH bridges the gap between students and educational support." }, { avatar: "https://via.placeholder.com/150", name: "Kalinga Partylist", provider: "Through our partnership with ISKOLAR PH, we’ve been able to reach thousands of students in need of financial assistance." }], kP = () => b.jsxs("section", { className: "pt-20 px-10", children: [b.jsx("h2", { className: "text-3xl font-bold text-center mb-6 text-blue-600 dark:text-yellow-500", children: "Providers Testimonials" }), b.jsx("div", { className: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8", children: SP.map((e, t) => b.jsx(EP, { avatar: e.avatar, name: e.name, provider: e.provider }, t)) })] });
function NP() { this.__data__ = [], this.size = 0; }
var CP = NP;
function OP(e, t) { return e === t || e !== e && t !== t; }
var Xw = OP, TP = Xw;
function AP(e, t) { for (var n = e.length; n--;)
    if (TP(e[n][0], t))
        return n; return -1; }
var Wu = AP, PP = Wu, jP = Array.prototype, RP = jP.splice;
function IP(e) { var t = this.__data__, n = PP(t, e); if (n < 0)
    return !1; var r = t.length - 1; return n == r ? t.pop() : RP.call(t, n, 1), --this.size, !0; }
var MP = IP, LP = Wu;
function DP(e) { var t = this.__data__, n = LP(t, e); return n < 0 ? void 0 : t[n][1]; }
var FP = DP, $P = Wu;
function BP(e) { return $P(this.__data__, e) > -1; }
var UP = BP, zP = Wu;
function VP(e, t) { var n = this.__data__, r = zP(n, e); return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this; }
var qP = VP, HP = CP, WP = MP, KP = FP, GP = UP, ZP = qP;
function wi(e) { var t = -1, n = e == null ? 0 : e.length; for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
} }
wi.prototype.clear = HP;
wi.prototype.delete = WP;
wi.prototype.get = KP;
wi.prototype.has = GP;
wi.prototype.set = ZP;
var Ku = wi, YP = Ku;
function QP() { this.__data__ = new YP, this.size = 0; }
var XP = QP;
function JP(e) { var t = this.__data__, n = t.delete(e); return this.size = t.size, n; }
var ej = JP;
function tj(e) { return this.__data__.get(e); }
var nj = tj;
function rj(e) { return this.__data__.has(e); }
var oj = rj, ij = typeof Mt == "object" && Mt && Mt.Object === Object && Mt, Jw = ij, aj = Jw, sj = typeof self == "object" && self && self.Object === Object && self, lj = aj || sj || Function("return this")(), Jn = lj, uj = Jn, cj = uj.Symbol, fp = cj, Tv = fp, eb = Object.prototype, fj = eb.hasOwnProperty, dj = eb.toString, Fi = Tv ? Tv.toStringTag : void 0;
function hj(e) { var t = fj.call(e, Fi), n = e[Fi]; try {
    e[Fi] = void 0;
    var r = !0;
}
catch { } var o = dj.call(e); return r && (t ? e[Fi] = n : delete e[Fi]), o; }
var pj = hj, mj = Object.prototype, vj = mj.toString;
function gj(e) { return vj.call(e); }
var yj = gj, Av = fp, xj = pj, wj = yj, bj = "[object Null]", _j = "[object Undefined]", Pv = Av ? Av.toStringTag : void 0;
function Ej(e) { return e == null ? e === void 0 ? _j : bj : Pv && Pv in Object(e) ? xj(e) : wj(e); }
var Gu = Ej;
function Sj(e) { var t = typeof e; return e != null && (t == "object" || t == "function"); }
var tb = Sj, kj = Gu, Nj = tb, Cj = "[object AsyncFunction]", Oj = "[object Function]", Tj = "[object GeneratorFunction]", Aj = "[object Proxy]";
function Pj(e) { if (!Nj(e))
    return !1; var t = kj(e); return t == Oj || t == Tj || t == Cj || t == Aj; }
var nb = Pj, jj = Jn, Rj = jj["__core-js_shared__"], Ij = Rj, Gc = Ij, jv = function () { var e = /[^.]+$/.exec(Gc && Gc.keys && Gc.keys.IE_PROTO || ""); return e ? "Symbol(src)_1." + e : ""; }();
function Mj(e) { return !!jv && jv in e; }
var Lj = Mj, Dj = Function.prototype, Fj = Dj.toString;
function $j(e) { if (e != null) {
    try {
        return Fj.call(e);
    }
    catch { }
    try {
        return e + "";
    }
    catch { }
} return ""; }
var rb = $j, Bj = nb, Uj = Lj, zj = tb, Vj = rb, qj = /[\\^$.*+?()[\]{}|]/g, Hj = /^\[object .+?Constructor\]$/, Wj = Function.prototype, Kj = Object.prototype, Gj = Wj.toString, Zj = Kj.hasOwnProperty, Yj = RegExp("^" + Gj.call(Zj).replace(qj, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Qj(e) { if (!zj(e) || Uj(e))
    return !1; var t = Bj(e) ? Yj : Hj; return t.test(Vj(e)); }
var Xj = Qj;
function Jj(e, t) { return e == null ? void 0 : e[t]; }
var eR = Jj, tR = Xj, nR = eR;
function rR(e, t) { var n = nR(e, t); return tR(n) ? n : void 0; }
var bi = rR, oR = bi, iR = Jn, aR = oR(iR, "Map"), dp = aR, sR = bi, lR = sR(Object, "create"), Zu = lR, Rv = Zu;
function uR() { this.__data__ = Rv ? Rv(null) : {}, this.size = 0; }
var cR = uR;
function fR(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t; }
var dR = fR, hR = Zu, pR = "__lodash_hash_undefined__", mR = Object.prototype, vR = mR.hasOwnProperty;
function gR(e) { var t = this.__data__; if (hR) {
    var n = t[e];
    return n === pR ? void 0 : n;
} return vR.call(t, e) ? t[e] : void 0; }
var yR = gR, xR = Zu, wR = Object.prototype, bR = wR.hasOwnProperty;
function _R(e) { var t = this.__data__; return xR ? t[e] !== void 0 : bR.call(t, e); }
var ER = _R, SR = Zu, kR = "__lodash_hash_undefined__";
function NR(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = SR && t === void 0 ? kR : t, this; }
var CR = NR, OR = cR, TR = dR, AR = yR, PR = ER, jR = CR;
function _i(e) { var t = -1, n = e == null ? 0 : e.length; for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
} }
_i.prototype.clear = OR;
_i.prototype.delete = TR;
_i.prototype.get = AR;
_i.prototype.has = PR;
_i.prototype.set = jR;
var RR = _i, Iv = RR, IR = Ku, MR = dp;
function LR() { this.size = 0, this.__data__ = { hash: new Iv, map: new (MR || IR), string: new Iv }; }
var DR = LR;
function FR(e) { var t = typeof e; return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null; }
var $R = FR, BR = $R;
function UR(e, t) { var n = e.__data__; return BR(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map; }
var Yu = UR, zR = Yu;
function VR(e) { var t = zR(this, e).delete(e); return this.size -= t ? 1 : 0, t; }
var qR = VR, HR = Yu;
function WR(e) { return HR(this, e).get(e); }
var KR = WR, GR = Yu;
function ZR(e) { return GR(this, e).has(e); }
var YR = ZR, QR = Yu;
function XR(e, t) { var n = QR(this, e), r = n.size; return n.set(e, t), this.size += n.size == r ? 0 : 1, this; }
var JR = XR, e4 = DR, t4 = qR, n4 = KR, r4 = YR, o4 = JR;
function Ei(e) { var t = -1, n = e == null ? 0 : e.length; for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
} }
Ei.prototype.clear = e4;
Ei.prototype.delete = t4;
Ei.prototype.get = n4;
Ei.prototype.has = r4;
Ei.prototype.set = o4;
var ob = Ei, i4 = Ku, a4 = dp, s4 = ob, l4 = 200;
function u4(e, t) { var n = this.__data__; if (n instanceof i4) {
    var r = n.__data__;
    if (!a4 || r.length < l4 - 1)
        return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new s4(r);
} return n.set(e, t), this.size = n.size, this; }
var c4 = u4, f4 = Ku, d4 = XP, h4 = ej, p4 = nj, m4 = oj, v4 = c4;
function Si(e) { var t = this.__data__ = new f4(e); this.size = t.size; }
Si.prototype.clear = d4;
Si.prototype.delete = h4;
Si.prototype.get = p4;
Si.prototype.has = m4;
Si.prototype.set = v4;
var g4 = Si, y4 = "__lodash_hash_undefined__";
function x4(e) { return this.__data__.set(e, y4), this; }
var w4 = x4;
function b4(e) { return this.__data__.has(e); }
var _4 = b4, E4 = ob, S4 = w4, k4 = _4;
function Bl(e) { var t = -1, n = e == null ? 0 : e.length; for (this.__data__ = new E4; ++t < n;)
    this.add(e[t]); }
Bl.prototype.add = Bl.prototype.push = S4;
Bl.prototype.has = k4;
var N4 = Bl;
function C4(e, t) { for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
    if (t(e[n], n, e))
        return !0; return !1; }
var O4 = C4;
function T4(e, t) { return e.has(t); }
var A4 = T4, P4 = N4, j4 = O4, R4 = A4, I4 = 1, M4 = 2;
function L4(e, t, n, r, o, i) { var a = n & I4, s = e.length, l = t.length; if (s != l && !(a && l > s))
    return !1; var f = i.get(e), h = i.get(t); if (f && h)
    return f == t && h == e; var c = -1, u = !0, p = n & M4 ? new P4 : void 0; for (i.set(e, t), i.set(t, e); ++c < s;) {
    var g = e[c], v = t[c];
    if (r)
        var x = a ? r(v, g, c, t, e, i) : r(g, v, c, e, t, i);
    if (x !== void 0) {
        if (x)
            continue;
        u = !1;
        break;
    }
    if (p) {
        if (!j4(t, function (m, d) { if (!R4(p, d) && (g === m || o(g, m, n, r, i)))
            return p.push(d); })) {
            u = !1;
            break;
        }
    }
    else if (!(g === v || o(g, v, n, r, i))) {
        u = !1;
        break;
    }
} return i.delete(e), i.delete(t), u; }
var ib = L4, D4 = Jn, F4 = D4.Uint8Array, $4 = F4;
function B4(e) { var t = -1, n = Array(e.size); return e.forEach(function (r, o) { n[++t] = [o, r]; }), n; }
var U4 = B4;
function z4(e) { var t = -1, n = Array(e.size); return e.forEach(function (r) { n[++t] = r; }), n; }
var V4 = z4, Mv = fp, Lv = $4, q4 = Xw, H4 = ib, W4 = U4, K4 = V4, G4 = 1, Z4 = 2, Y4 = "[object Boolean]", Q4 = "[object Date]", X4 = "[object Error]", J4 = "[object Map]", e3 = "[object Number]", t3 = "[object RegExp]", n3 = "[object Set]", r3 = "[object String]", o3 = "[object Symbol]", i3 = "[object ArrayBuffer]", a3 = "[object DataView]", Dv = Mv ? Mv.prototype : void 0, Zc = Dv ? Dv.valueOf : void 0;
function s3(e, t, n, r, o, i, a) { switch (n) {
    case a3:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
        e = e.buffer, t = t.buffer;
    case i3: return !(e.byteLength != t.byteLength || !i(new Lv(e), new Lv(t)));
    case Y4:
    case Q4:
    case e3: return q4(+e, +t);
    case X4: return e.name == t.name && e.message == t.message;
    case t3:
    case r3: return e == t + "";
    case J4: var s = W4;
    case n3:
        var l = r & G4;
        if (s || (s = K4), e.size != t.size && !l)
            return !1;
        var f = a.get(e);
        if (f)
            return f == t;
        r |= Z4, a.set(e, t);
        var h = H4(s(e), s(t), r, o, i, a);
        return a.delete(e), h;
    case o3: if (Zc)
        return Zc.call(e) == Zc.call(t);
} return !1; }
var l3 = s3;
function u3(e, t) { for (var n = -1, r = t.length, o = e.length; ++n < r;)
    e[o + n] = t[n]; return e; }
var c3 = u3, f3 = Array.isArray, hp = f3, d3 = c3, h3 = hp;
function p3(e, t, n) { var r = t(e); return h3(e) ? r : d3(r, n(e)); }
var m3 = p3;
function v3(e, t) { for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r;) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
} return i; }
var g3 = v3;
function y3() { return []; }
var x3 = y3, w3 = g3, b3 = x3, _3 = Object.prototype, E3 = _3.propertyIsEnumerable, Fv = Object.getOwnPropertySymbols, S3 = Fv ? function (e) { return e == null ? [] : (e = Object(e), w3(Fv(e), function (t) { return E3.call(e, t); })); } : b3, k3 = S3;
function N3(e, t) { for (var n = -1, r = Array(e); ++n < e;)
    r[n] = t(n); return r; }
var C3 = N3;
function O3(e) { return e != null && typeof e == "object"; }
var Qu = O3, T3 = Gu, A3 = Qu, P3 = "[object Arguments]";
function j3(e) { return A3(e) && T3(e) == P3; }
var R3 = j3, $v = R3, I3 = Qu, ab = Object.prototype, M3 = ab.hasOwnProperty, L3 = ab.propertyIsEnumerable, D3 = $v(function () { return arguments; }()) ? $v : function (e) { return I3(e) && M3.call(e, "callee") && !L3.call(e, "callee"); }, F3 = D3, Ul = { exports: {} };
function $3() { return !1; }
var B3 = $3;
Ul.exports;
(function (e, t) { var n = Jn, r = B3, o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, s = a ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, f = l || r; e.exports = f; })(Ul, Ul.exports);
var sb = Ul.exports, U3 = 9007199254740991, z3 = /^(?:0|[1-9]\d*)$/;
function V3(e, t) { var n = typeof e; return t = t ?? U3, !!t && (n == "number" || n != "symbol" && z3.test(e)) && e > -1 && e % 1 == 0 && e < t; }
var q3 = V3, H3 = 9007199254740991;
function W3(e) { return typeof e == "number" && e > -1 && e % 1 == 0 && e <= H3; }
var lb = W3, K3 = Gu, G3 = lb, Z3 = Qu, Y3 = "[object Arguments]", Q3 = "[object Array]", X3 = "[object Boolean]", J3 = "[object Date]", e5 = "[object Error]", t5 = "[object Function]", n5 = "[object Map]", r5 = "[object Number]", o5 = "[object Object]", i5 = "[object RegExp]", a5 = "[object Set]", s5 = "[object String]", l5 = "[object WeakMap]", u5 = "[object ArrayBuffer]", c5 = "[object DataView]", f5 = "[object Float32Array]", d5 = "[object Float64Array]", h5 = "[object Int8Array]", p5 = "[object Int16Array]", m5 = "[object Int32Array]", v5 = "[object Uint8Array]", g5 = "[object Uint8ClampedArray]", y5 = "[object Uint16Array]", x5 = "[object Uint32Array]", Ve = {};
Ve[f5] = Ve[d5] = Ve[h5] = Ve[p5] = Ve[m5] = Ve[v5] = Ve[g5] = Ve[y5] = Ve[x5] = !0;
Ve[Y3] = Ve[Q3] = Ve[u5] = Ve[X3] = Ve[c5] = Ve[J3] = Ve[e5] = Ve[t5] = Ve[n5] = Ve[r5] = Ve[o5] = Ve[i5] = Ve[a5] = Ve[s5] = Ve[l5] = !1;
function w5(e) { return Z3(e) && G3(e.length) && !!Ve[K3(e)]; }
var b5 = w5;
function _5(e) { return function (t) { return e(t); }; }
var E5 = _5, zl = { exports: {} };
zl.exports;
(function (e, t) { var n = Jw, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, i = o && o.exports === r, a = i && n.process, s = function () { try {
    var l = o && o.require && o.require("util").types;
    return l || a && a.binding && a.binding("util");
}
catch { } }(); e.exports = s; })(zl, zl.exports);
var S5 = zl.exports, k5 = b5, N5 = E5, Bv = S5, Uv = Bv && Bv.isTypedArray, C5 = Uv ? N5(Uv) : k5, ub = C5, O5 = C3, T5 = F3, A5 = hp, P5 = sb, j5 = q3, R5 = ub, I5 = Object.prototype, M5 = I5.hasOwnProperty;
function L5(e, t) { var n = A5(e), r = !n && T5(e), o = !n && !r && P5(e), i = !n && !r && !o && R5(e), a = n || r || o || i, s = a ? O5(e.length, String) : [], l = s.length; for (var f in e)
    (t || M5.call(e, f)) && !(a && (f == "length" || o && (f == "offset" || f == "parent") || i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || j5(f, l))) && s.push(f); return s; }
var D5 = L5, F5 = Object.prototype;
function $5(e) { var t = e && e.constructor, n = typeof t == "function" && t.prototype || F5; return e === n; }
var B5 = $5;
function U5(e, t) { return function (n) { return e(t(n)); }; }
var z5 = U5, V5 = z5, q5 = V5(Object.keys, Object), H5 = q5, W5 = B5, K5 = H5, G5 = Object.prototype, Z5 = G5.hasOwnProperty;
function Y5(e) { if (!W5(e))
    return K5(e); var t = []; for (var n in Object(e))
    Z5.call(e, n) && n != "constructor" && t.push(n); return t; }
var Q5 = Y5, X5 = nb, J5 = lb;
function eI(e) { return e != null && J5(e.length) && !X5(e); }
var tI = eI, nI = D5, rI = Q5, oI = tI;
function iI(e) { return oI(e) ? nI(e) : rI(e); }
var aI = iI, sI = m3, lI = k3, uI = aI;
function cI(e) { return sI(e, uI, lI); }
var fI = cI, zv = fI, dI = 1, hI = Object.prototype, pI = hI.hasOwnProperty;
function mI(e, t, n, r, o, i) { var a = n & dI, s = zv(e), l = s.length, f = zv(t), h = f.length; if (l != h && !a)
    return !1; for (var c = l; c--;) {
    var u = s[c];
    if (!(a ? u in t : pI.call(t, u)))
        return !1;
} var p = i.get(e), g = i.get(t); if (p && g)
    return p == t && g == e; var v = !0; i.set(e, t), i.set(t, e); for (var x = a; ++c < l;) {
    u = s[c];
    var m = e[u], d = t[u];
    if (r)
        var w = a ? r(d, m, u, t, e, i) : r(m, d, u, e, t, i);
    if (!(w === void 0 ? m === d || o(m, d, n, r, i) : w)) {
        v = !1;
        break;
    }
    x || (x = u == "constructor");
} if (v && !x) {
    var y = e.constructor, _ = t.constructor;
    y != _ && "constructor" in e && "constructor" in t && !(typeof y == "function" && y instanceof y && typeof _ == "function" && _ instanceof _) && (v = !1);
} return i.delete(e), i.delete(t), v; }
var vI = mI, gI = bi, yI = Jn, xI = gI(yI, "DataView"), wI = xI, bI = bi, _I = Jn, EI = bI(_I, "Promise"), SI = EI, kI = bi, NI = Jn, CI = kI(NI, "Set"), OI = CI, TI = bi, AI = Jn, PI = TI(AI, "WeakMap"), jI = PI, xd = wI, wd = dp, bd = SI, _d = OI, Ed = jI, cb = Gu, ki = rb, Vv = "[object Map]", RI = "[object Object]", qv = "[object Promise]", Hv = "[object Set]", Wv = "[object WeakMap]", Kv = "[object DataView]", II = ki(xd), MI = ki(wd), LI = ki(bd), DI = ki(_d), FI = ki(Ed), Wr = cb;
(xd && Wr(new xd(new ArrayBuffer(1))) != Kv || wd && Wr(new wd) != Vv || bd && Wr(bd.resolve()) != qv || _d && Wr(new _d) != Hv || Ed && Wr(new Ed) != Wv) && (Wr = function (e) { var t = cb(e), n = t == RI ? e.constructor : void 0, r = n ? ki(n) : ""; if (r)
    switch (r) {
        case II: return Kv;
        case MI: return Vv;
        case LI: return qv;
        case DI: return Hv;
        case FI: return Wv;
    } return t; });
var $I = Wr, Yc = g4, BI = ib, UI = l3, zI = vI, Gv = $I, Zv = hp, Yv = sb, VI = ub, qI = 1, Qv = "[object Arguments]", Xv = "[object Array]", xs = "[object Object]", HI = Object.prototype, Jv = HI.hasOwnProperty;
function WI(e, t, n, r, o, i) { var a = Zv(e), s = Zv(t), l = a ? Xv : Gv(e), f = s ? Xv : Gv(t); l = l == Qv ? xs : l, f = f == Qv ? xs : f; var h = l == xs, c = f == xs, u = l == f; if (u && Yv(e)) {
    if (!Yv(t))
        return !1;
    a = !0, h = !1;
} if (u && !h)
    return i || (i = new Yc), a || VI(e) ? BI(e, t, n, r, o, i) : UI(e, t, l, n, r, o, i); if (!(n & qI)) {
    var p = h && Jv.call(e, "__wrapped__"), g = c && Jv.call(t, "__wrapped__");
    if (p || g) {
        var v = p ? e.value() : e, x = g ? t.value() : t;
        return i || (i = new Yc), o(v, x, n, r, i);
    }
} return u ? (i || (i = new Yc), zI(e, t, n, r, o, i)) : !1; }
var KI = WI, GI = KI, eg = Qu;
function fb(e, t, n, r, o) { return e === t ? !0 : e == null || t == null || !eg(e) && !eg(t) ? e !== e && t !== t : GI(e, t, n, r, fb, o); }
var ZI = fb, YI = ZI;
function QI(e, t) { return YI(e, t); }
var XI = QI, db = { exports: {} }; /*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function (e, t) {
    (function (r, o) { e.exports = o(); })(typeof self < "u" ? self : Mt, function () {
        return function (n) { var r = {}; function o(i) { if (r[i])
            return r[i].exports; var a = r[i] = { i, l: !1, exports: {} }; return n[i].call(a.exports, a, a.exports, o), a.l = !0, a.exports; } return o.m = n, o.c = r, o.d = function (i, a, s) { o.o(i, a) || Object.defineProperty(i, a, { configurable: !1, enumerable: !0, get: s }); }, o.n = function (i) { var a = i && i.__esModule ? function () { return i.default; } : function () { return i; }; return o.d(a, "a", a), a; }, o.o = function (i, a) { return Object.prototype.hasOwnProperty.call(i, a); }, o.p = "", o(o.s = 109); }([function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(17), a = o(18), s = o(19), l = o(45), f = o(46), h = o(47), c = o(48), u = o(49), p = o(12), g = o(32), v = o(33), x = o(31), m = o(1), d = { Scope: m.Scope, create: m.create, find: m.find, query: m.query, register: m.register, Container: i.default, Format: a.default, Leaf: s.default, Embed: c.default, Scroll: l.default, Block: h.default, Inline: f.default, Text: u.default, Attributor: { Attribute: p.default, Class: g.default, Style: v.default, Store: x.default } }; r.default = d; }, function (n, r, o) { var i = this && this.__extends || function () { var x = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (m, d) { m.__proto__ = d; } || function (m, d) { for (var w in d)
                d.hasOwnProperty(w) && (m[w] = d[w]); }; return function (m, d) { x(m, d); function w() { this.constructor = m; } m.prototype = d === null ? Object.create(d) : (w.prototype = d.prototype, new w); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = function (x) { i(m, x); function m(d) { var w = this; return d = "[Parchment] " + d, w = x.call(this, d) || this, w.message = d, w.name = w.constructor.name, w; } return m; }(Error); r.ParchmentError = a; var s = {}, l = {}, f = {}, h = {}; r.DATA_KEY = "__blot"; var c; (function (x) { x[x.TYPE = 3] = "TYPE", x[x.LEVEL = 12] = "LEVEL", x[x.ATTRIBUTE = 13] = "ATTRIBUTE", x[x.BLOT = 14] = "BLOT", x[x.INLINE = 7] = "INLINE", x[x.BLOCK = 11] = "BLOCK", x[x.BLOCK_BLOT = 10] = "BLOCK_BLOT", x[x.INLINE_BLOT = 6] = "INLINE_BLOT", x[x.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", x[x.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", x[x.ANY = 15] = "ANY"; })(c = r.Scope || (r.Scope = {})); function u(x, m) { var d = g(x); if (d == null)
                throw new a("Unable to create " + x + " blot"); var w = d, y = x instanceof Node || x.nodeType === Node.TEXT_NODE ? x : w.create(m); return new w(y, m); } r.create = u; function p(x, m) { return m === void 0 && (m = !1), x == null ? null : x[r.DATA_KEY] != null ? x[r.DATA_KEY].blot : m ? p(x.parentNode, m) : null; } r.find = p; function g(x, m) { m === void 0 && (m = c.ANY); var d; if (typeof x == "string")
                d = h[x] || s[x];
            else if (x instanceof Text || x.nodeType === Node.TEXT_NODE)
                d = h.text;
            else if (typeof x == "number")
                x & c.LEVEL & c.BLOCK ? d = h.block : x & c.LEVEL & c.INLINE && (d = h.inline);
            else if (x instanceof HTMLElement) {
                var w = (x.getAttribute("class") || "").split(/\s+/);
                for (var y in w)
                    if (d = l[w[y]], d)
                        break;
                d = d || f[x.tagName];
            } return d == null ? null : m & c.LEVEL & d.scope && m & c.TYPE & d.scope ? d : null; } r.query = g; function v() { for (var x = [], m = 0; m < arguments.length; m++)
                x[m] = arguments[m]; if (x.length > 1)
                return x.map(function (y) { return v(y); }); var d = x[0]; if (typeof d.blotName != "string" && typeof d.attrName != "string")
                throw new a("Invalid definition"); if (d.blotName === "abstract")
                throw new a("Cannot register abstract class"); if (h[d.blotName || d.attrName] = d, typeof d.keyName == "string")
                s[d.keyName] = d;
            else if (d.className != null && (l[d.className] = d), d.tagName != null) {
                Array.isArray(d.tagName) ? d.tagName = d.tagName.map(function (y) { return y.toUpperCase(); }) : d.tagName = d.tagName.toUpperCase();
                var w = Array.isArray(d.tagName) ? d.tagName : [d.tagName];
                w.forEach(function (y) { (f[y] == null || d.className == null) && (f[y] = d); });
            } return d; } r.register = v; }, function (n, r, o) {
                var i = o(51), a = o(11), s = o(3), l = o(20), f = "\0", h = function (c) { Array.isArray(c) ? this.ops = c : c != null && Array.isArray(c.ops) ? this.ops = c.ops : this.ops = []; };
                h.prototype.insert = function (c, u) { var p = {}; return c.length === 0 ? this : (p.insert = c, u != null && typeof u == "object" && Object.keys(u).length > 0 && (p.attributes = u), this.push(p)); }, h.prototype.delete = function (c) { return c <= 0 ? this : this.push({ delete: c }); }, h.prototype.retain = function (c, u) { if (c <= 0)
                    return this; var p = { retain: c }; return u != null && typeof u == "object" && Object.keys(u).length > 0 && (p.attributes = u), this.push(p); }, h.prototype.push = function (c) { var u = this.ops.length, p = this.ops[u - 1]; if (c = s(!0, {}, c), typeof p == "object") {
                    if (typeof c.delete == "number" && typeof p.delete == "number")
                        return this.ops[u - 1] = { delete: p.delete + c.delete }, this;
                    if (typeof p.delete == "number" && c.insert != null && (u -= 1, p = this.ops[u - 1], typeof p != "object"))
                        return this.ops.unshift(c), this;
                    if (a(c.attributes, p.attributes)) {
                        if (typeof c.insert == "string" && typeof p.insert == "string")
                            return this.ops[u - 1] = { insert: p.insert + c.insert }, typeof c.attributes == "object" && (this.ops[u - 1].attributes = c.attributes), this;
                        if (typeof c.retain == "number" && typeof p.retain == "number")
                            return this.ops[u - 1] = { retain: p.retain + c.retain }, typeof c.attributes == "object" && (this.ops[u - 1].attributes = c.attributes), this;
                    }
                } return u === this.ops.length ? this.ops.push(c) : this.ops.splice(u, 0, c), this; }, h.prototype.chop = function () { var c = this.ops[this.ops.length - 1]; return c && c.retain && !c.attributes && this.ops.pop(), this; }, h.prototype.filter = function (c) { return this.ops.filter(c); }, h.prototype.forEach = function (c) { this.ops.forEach(c); }, h.prototype.map = function (c) { return this.ops.map(c); }, h.prototype.partition = function (c) { var u = [], p = []; return this.forEach(function (g) { var v = c(g) ? u : p; v.push(g); }), [u, p]; }, h.prototype.reduce = function (c, u) { return this.ops.reduce(c, u); }, h.prototype.changeLength = function () { return this.reduce(function (c, u) { return u.insert ? c + l.length(u) : u.delete ? c - u.delete : c; }, 0); }, h.prototype.length = function () { return this.reduce(function (c, u) { return c + l.length(u); }, 0); }, h.prototype.slice = function (c, u) { c = c || 0, typeof u != "number" && (u = 1 / 0); for (var p = [], g = l.iterator(this.ops), v = 0; v < u && g.hasNext();) {
                    var x;
                    v < c ? x = g.next(c - v) : (x = g.next(u - v), p.push(x)), v += l.length(x);
                } return new h(p); }, h.prototype.compose = function (c) { var u = l.iterator(this.ops), p = l.iterator(c.ops), g = [], v = p.peek(); if (v != null && typeof v.retain == "number" && v.attributes == null) {
                    for (var x = v.retain; u.peekType() === "insert" && u.peekLength() <= x;)
                        x -= u.peekLength(), g.push(u.next());
                    v.retain - x > 0 && p.next(v.retain - x);
                } for (var m = new h(g); u.hasNext() || p.hasNext();)
                    if (p.peekType() === "insert")
                        m.push(p.next());
                    else if (u.peekType() === "delete")
                        m.push(u.next());
                    else {
                        var d = Math.min(u.peekLength(), p.peekLength()), w = u.next(d), y = p.next(d);
                        if (typeof y.retain == "number") {
                            var _ = {};
                            typeof w.retain == "number" ? _.retain = d : _.insert = w.insert;
                            var T = l.attributes.compose(w.attributes, y.attributes, typeof w.retain == "number");
                            if (T && (_.attributes = T), m.push(_), !p.hasNext() && a(m.ops[m.ops.length - 1], _)) {
                                var S = new h(u.rest());
                                return m.concat(S).chop();
                            }
                        }
                        else
                            typeof y.delete == "number" && typeof w.retain == "number" && m.push(y);
                    } return m.chop(); }, h.prototype.concat = function (c) { var u = new h(this.ops.slice()); return c.ops.length > 0 && (u.push(c.ops[0]), u.ops = u.ops.concat(c.ops.slice(1))), u; }, h.prototype.diff = function (c, u) { if (this.ops === c.ops)
                    return new h; var p = [this, c].map(function (d) { return d.map(function (w) { if (w.insert != null)
                    return typeof w.insert == "string" ? w.insert : f; var y = d === c ? "on" : "with"; throw new Error("diff() called " + y + " non-document"); }).join(""); }), g = new h, v = i(p[0], p[1], u), x = l.iterator(this.ops), m = l.iterator(c.ops); return v.forEach(function (d) { for (var w = d[1].length; w > 0;) {
                    var y = 0;
                    switch (d[0]) {
                        case i.INSERT:
                            y = Math.min(m.peekLength(), w), g.push(m.next(y));
                            break;
                        case i.DELETE:
                            y = Math.min(w, x.peekLength()), x.next(y), g.delete(y);
                            break;
                        case i.EQUAL:
                            y = Math.min(x.peekLength(), m.peekLength(), w);
                            var _ = x.next(y), T = m.next(y);
                            a(_.insert, T.insert) ? g.retain(y, l.attributes.diff(_.attributes, T.attributes)) : g.push(T).delete(y);
                            break;
                    }
                    w -= y;
                } }), g.chop(); }, h.prototype.eachLine = function (c, u) {
                    u = u || `
`;
                    for (var p = l.iterator(this.ops), g = new h, v = 0; p.hasNext();) {
                        if (p.peekType() !== "insert")
                            return;
                        var x = p.peek(), m = l.length(x) - p.peekLength(), d = typeof x.insert == "string" ? x.insert.indexOf(u, m) - m : -1;
                        if (d < 0)
                            g.push(p.next());
                        else if (d > 0)
                            g.push(p.next(d));
                        else {
                            if (c(g, p.next(1).attributes || {}, v) === !1)
                                return;
                            v += 1, g = new h;
                        }
                    }
                    g.length() > 0 && c(g, {}, v);
                }, h.prototype.transform = function (c, u) { if (u = !!u, typeof c == "number")
                    return this.transformPosition(c, u); for (var p = l.iterator(this.ops), g = l.iterator(c.ops), v = new h; p.hasNext() || g.hasNext();)
                    if (p.peekType() === "insert" && (u || g.peekType() !== "insert"))
                        v.retain(l.length(p.next()));
                    else if (g.peekType() === "insert")
                        v.push(g.next());
                    else {
                        var x = Math.min(p.peekLength(), g.peekLength()), m = p.next(x), d = g.next(x);
                        if (m.delete)
                            continue;
                        d.delete ? v.push(d) : v.retain(x, l.attributes.transform(m.attributes, d.attributes, u));
                    } return v.chop(); }, h.prototype.transformPosition = function (c, u) { u = !!u; for (var p = l.iterator(this.ops), g = 0; p.hasNext() && g <= c;) {
                    var v = p.peekLength(), x = p.peekType();
                    if (p.next(), x === "delete") {
                        c -= Math.min(v, c - g);
                        continue;
                    }
                    else
                        x === "insert" && (g < c || !u) && (c += v);
                    g += v;
                } return c; }, n.exports = h;
            }, function (n, r) { var o = Object.prototype.hasOwnProperty, i = Object.prototype.toString, a = Object.defineProperty, s = Object.getOwnPropertyDescriptor, l = function (p) { return typeof Array.isArray == "function" ? Array.isArray(p) : i.call(p) === "[object Array]"; }, f = function (p) { if (!p || i.call(p) !== "[object Object]")
                return !1; var g = o.call(p, "constructor"), v = p.constructor && p.constructor.prototype && o.call(p.constructor.prototype, "isPrototypeOf"); if (p.constructor && !g && !v)
                return !1; var x; for (x in p)
                ; return typeof x > "u" || o.call(p, x); }, h = function (p, g) { a && g.name === "__proto__" ? a(p, g.name, { enumerable: !0, configurable: !0, value: g.newValue, writable: !0 }) : p[g.name] = g.newValue; }, c = function (p, g) { if (g === "__proto__")
                if (o.call(p, g)) {
                    if (s)
                        return s(p, g).value;
                }
                else
                    return; return p[g]; }; n.exports = function u() { var p, g, v, x, m, d, w = arguments[0], y = 1, _ = arguments.length, T = !1; for (typeof w == "boolean" && (T = w, w = arguments[1] || {}, y = 2), (w == null || typeof w != "object" && typeof w != "function") && (w = {}); y < _; ++y)
                if (p = arguments[y], p != null)
                    for (g in p)
                        v = c(w, g), x = c(p, g), w !== x && (T && x && (f(x) || (m = l(x))) ? (m ? (m = !1, d = v && l(v) ? v : []) : d = v && f(v) ? v : {}, h(w, { name: g, newValue: u(T, d, x) })) : typeof x < "u" && h(w, { name: g, newValue: x })); return w; }; }, function (n, r, o) {
                Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.BlockEmbed = r.bubbleFormats = void 0;
                var i = function () { function C(k, P) { for (var R = 0; R < P.length; R++) {
                    var $ = P[R];
                    $.enumerable = $.enumerable || !1, $.configurable = !0, "value" in $ && ($.writable = !0), Object.defineProperty(k, $.key, $);
                } } return function (k, P, R) { return P && C(k.prototype, P), R && C(k, R), k; }; }(), a = function C(k, P, R) { k === null && (k = Function.prototype); var $ = Object.getOwnPropertyDescriptor(k, P); if ($ === void 0) {
                    var q = Object.getPrototypeOf(k);
                    return q === null ? void 0 : C(q, P, R);
                }
                else {
                    if ("value" in $)
                        return $.value;
                    var H = $.get;
                    return H === void 0 ? void 0 : H.call(R);
                } }, s = o(3), l = w(s), f = o(2), h = w(f), c = o(0), u = w(c), p = o(16), g = w(p), v = o(6), x = w(v), m = o(7), d = w(m);
                function w(C) { return C && C.__esModule ? C : { default: C }; }
                function y(C, k) { if (!(C instanceof k))
                    throw new TypeError("Cannot call a class as a function"); }
                function _(C, k) { if (!C)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return k && (typeof k == "object" || typeof k == "function") ? k : C; }
                function T(C, k) { if (typeof k != "function" && k !== null)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof k); C.prototype = Object.create(k && k.prototype, { constructor: { value: C, enumerable: !1, writable: !0, configurable: !0 } }), k && (Object.setPrototypeOf ? Object.setPrototypeOf(C, k) : C.__proto__ = k); }
                var S = 1, N = function (C) {
                    T(k, C);
                    function k() { return y(this, k), _(this, (k.__proto__ || Object.getPrototypeOf(k)).apply(this, arguments)); }
                    return i(k, [{ key: "attach", value: function () { a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "attach", this).call(this), this.attributes = new u.default.Attributor.Store(this.domNode); } }, { key: "delta", value: function () { return new h.default().insert(this.value(), (0, l.default)(this.formats(), this.attributes.values())); } }, { key: "format", value: function (R, $) { var q = u.default.query(R, u.default.Scope.BLOCK_ATTRIBUTE); q != null && this.attributes.attribute(q, $); } }, { key: "formatAt", value: function (R, $, q, H) { this.format(q, H); } }, { key: "insertAt", value: function (R, $, q) {
                                if (typeof $ == "string" && $.endsWith(`
`)) {
                                    var H = u.default.create(j.blotName);
                                    this.parent.insertBefore(H, R === 0 ? this : this.next), H.insertAt(0, $.slice(0, -1));
                                }
                                else
                                    a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "insertAt", this).call(this, R, $, q);
                            } }]), k;
                }(u.default.Embed);
                N.scope = u.default.Scope.BLOCK_BLOT;
                var j = function (C) {
                    T(k, C);
                    function k(P) { y(this, k); var R = _(this, (k.__proto__ || Object.getPrototypeOf(k)).call(this, P)); return R.cache = {}, R; }
                    return i(k, [{ key: "delta", value: function () {
                                return this.cache.delta == null && (this.cache.delta = this.descendants(u.default.Leaf).reduce(function (R, $) { return $.length() === 0 ? R : R.insert($.value(), O($)); }, new h.default).insert(`
`, O(this))), this.cache.delta;
                            } }, { key: "deleteAt", value: function (R, $) { a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "deleteAt", this).call(this, R, $), this.cache = {}; } }, { key: "formatAt", value: function (R, $, q, H) { $ <= 0 || (u.default.query(q, u.default.Scope.BLOCK) ? R + $ === this.length() && this.format(q, H) : a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "formatAt", this).call(this, R, Math.min($, this.length() - R - 1), q, H), this.cache = {}); } }, { key: "insertAt", value: function (R, $, q) {
                                if (q != null)
                                    return a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "insertAt", this).call(this, R, $, q);
                                if ($.length !== 0) {
                                    var H = $.split(`
`), V = H.shift();
                                    V.length > 0 && (R < this.length() - 1 || this.children.tail == null ? a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "insertAt", this).call(this, Math.min(R, this.length() - 1), V) : this.children.tail.insertAt(this.children.tail.length(), V), this.cache = {});
                                    var F = this;
                                    H.reduce(function (D, A) { return F = F.split(D, !0), F.insertAt(0, A), A.length; }, R + V.length);
                                }
                            } }, { key: "insertBefore", value: function (R, $) { var q = this.children.head; a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "insertBefore", this).call(this, R, $), q instanceof g.default && q.remove(), this.cache = {}; } }, { key: "length", value: function () { return this.cache.length == null && (this.cache.length = a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "length", this).call(this) + S), this.cache.length; } }, { key: "moveChildren", value: function (R, $) { a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "moveChildren", this).call(this, R, $), this.cache = {}; } }, { key: "optimize", value: function (R) { a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "optimize", this).call(this, R), this.cache = {}; } }, { key: "path", value: function (R) { return a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "path", this).call(this, R, !0); } }, { key: "removeChild", value: function (R) { a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "removeChild", this).call(this, R), this.cache = {}; } }, { key: "split", value: function (R) { var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; if ($ && (R === 0 || R >= this.length() - S)) {
                                var q = this.clone();
                                return R === 0 ? (this.parent.insertBefore(q, this), this) : (this.parent.insertBefore(q, this.next), q);
                            }
                            else {
                                var H = a(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "split", this).call(this, R, $);
                                return this.cache = {}, H;
                            } } }]), k;
                }(u.default.Block);
                j.blotName = "block", j.tagName = "P", j.defaultChild = "break", j.allowedChildren = [x.default, u.default.Embed, d.default];
                function O(C) { var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; return C == null || (typeof C.formats == "function" && (k = (0, l.default)(k, C.formats())), C.parent == null || C.parent.blotName == "scroll" || C.parent.statics.scope !== C.statics.scope) ? k : O(C.parent, k); }
                r.bubbleFormats = O, r.BlockEmbed = N, r.default = j;
            }, function (n, r, o) {
                Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.overload = r.expandConfig = void 0;
                var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (F) { return typeof F; } : function (F) { return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F; }, a = function () { function F(D, A) { var M = [], U = !0, K = !1, G = void 0; try {
                    for (var L = D[Symbol.iterator](), z; !(U = (z = L.next()).done) && (M.push(z.value), !(A && M.length === A)); U = !0)
                        ;
                }
                catch (Z) {
                    K = !0, G = Z;
                }
                finally {
                    try {
                        !U && L.return && L.return();
                    }
                    finally {
                        if (K)
                            throw G;
                    }
                } return M; } return function (D, A) { if (Array.isArray(D))
                    return D; if (Symbol.iterator in Object(D))
                    return F(D, A); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), s = function () { function F(D, A) { for (var M = 0; M < A.length; M++) {
                    var U = A[M];
                    U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(D, U.key, U);
                } } return function (D, A, M) { return A && F(D.prototype, A), M && F(D, M), D; }; }();
                o(50);
                var l = o(2), f = O(l), h = o(14), c = O(h), u = o(8), p = O(u), g = o(9), v = O(g), x = o(0), m = O(x), d = o(15), w = O(d), y = o(3), _ = O(y), T = o(10), S = O(T), N = o(34), j = O(N);
                function O(F) { return F && F.__esModule ? F : { default: F }; }
                function C(F, D, A) { return D in F ? Object.defineProperty(F, D, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : F[D] = A, F; }
                function k(F, D) { if (!(F instanceof D))
                    throw new TypeError("Cannot call a class as a function"); }
                var P = (0, S.default)("quill"), R = function () {
                    s(F, null, [{ key: "debug", value: function (A) { A === !0 && (A = "log"), S.default.level(A); } }, { key: "find", value: function (A) { return A.__quill || m.default.find(A); } }, { key: "import", value: function (A) { return this.imports[A] == null && P.error("Cannot import " + A + ". Are you sure it was registered?"), this.imports[A]; } }, { key: "register", value: function (A, M) { var U = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; if (typeof A != "string") {
                                var G = A.attrName || A.blotName;
                                typeof G == "string" ? this.register("formats/" + G, A, M) : Object.keys(A).forEach(function (L) { U.register(L, A[L], M); });
                            }
                            else
                                this.imports[A] != null && !K && P.warn("Overwriting " + A + " with", M), this.imports[A] = M, (A.startsWith("blots/") || A.startsWith("formats/")) && M.blotName !== "abstract" ? m.default.register(M) : A.startsWith("modules") && typeof M.register == "function" && M.register(); } }]);
                    function F(D) { var A = this, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; if (k(this, F), this.options = $(D, M), this.container = this.options.container, this.container == null)
                        return P.error("Invalid Quill container", D); this.options.debug && F.debug(this.options.debug); var U = this.container.innerHTML.trim(); this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new p.default, this.scroll = m.default.create(this.root, { emitter: this.emitter, whitelist: this.options.formats }), this.editor = new c.default(this.scroll), this.selection = new w.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(p.default.events.EDITOR_CHANGE, function (G) { G === p.default.events.TEXT_CHANGE && A.root.classList.toggle("ql-blank", A.editor.isBlank()); }), this.emitter.on(p.default.events.SCROLL_UPDATE, function (G, L) { var z = A.selection.lastRange, Z = z && z.length === 0 ? z.index : void 0; q.call(A, function () { return A.editor.update(null, L, Z); }, G); }); var K = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + U + "<p><br></p></div>"); this.setContents(K), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(); }
                    return s(F, [{ key: "addContainer", value: function (A) { var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null; if (typeof A == "string") {
                                var U = A;
                                A = document.createElement("div"), A.classList.add(U);
                            } return this.container.insertBefore(A, M), A; } }, { key: "blur", value: function () { this.selection.setRange(null); } }, { key: "deleteText", value: function (A, M, U) { var K = this, G = H(A, M, U), L = a(G, 4); return A = L[0], M = L[1], U = L[3], q.call(this, function () { return K.editor.deleteText(A, M); }, U, A, -1 * M); } }, { key: "disable", value: function () { this.enable(!1); } }, { key: "enable", value: function () { var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0; this.scroll.enable(A), this.container.classList.toggle("ql-disabled", !A); } }, { key: "focus", value: function () { var A = this.scrollingContainer.scrollTop; this.selection.focus(), this.scrollingContainer.scrollTop = A, this.scrollIntoView(); } }, { key: "format", value: function (A, M) { var U = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : p.default.sources.API; return q.call(this, function () { var G = U.getSelection(!0), L = new f.default; if (G == null)
                                return L; if (m.default.query(A, m.default.Scope.BLOCK))
                                L = U.editor.formatLine(G.index, G.length, C({}, A, M));
                            else {
                                if (G.length === 0)
                                    return U.selection.format(A, M), L;
                                L = U.editor.formatText(G.index, G.length, C({}, A, M));
                            } return U.setSelection(G, p.default.sources.SILENT), L; }, K); } }, { key: "formatLine", value: function (A, M, U, K, G) { var L = this, z = void 0, Z = H(A, M, U, K, G), Q = a(Z, 4); return A = Q[0], M = Q[1], z = Q[2], G = Q[3], q.call(this, function () { return L.editor.formatLine(A, M, z); }, G, A, 0); } }, { key: "formatText", value: function (A, M, U, K, G) { var L = this, z = void 0, Z = H(A, M, U, K, G), Q = a(Z, 4); return A = Q[0], M = Q[1], z = Q[2], G = Q[3], q.call(this, function () { return L.editor.formatText(A, M, z); }, G, A, 0); } }, { key: "getBounds", value: function (A) { var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, U = void 0; typeof A == "number" ? U = this.selection.getBounds(A, M) : U = this.selection.getBounds(A.index, A.length); var K = this.container.getBoundingClientRect(); return { bottom: U.bottom - K.top, height: U.height, left: U.left - K.left, right: U.right - K.left, top: U.top - K.top, width: U.width }; } }, { key: "getContents", value: function () { var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - A, U = H(A, M), K = a(U, 2); return A = K[0], M = K[1], this.editor.getContents(A, M); } }, { key: "getFormat", value: function () { var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0; return typeof A == "number" ? this.editor.getFormat(A, M) : this.editor.getFormat(A.index, A.length); } }, { key: "getIndex", value: function (A) { return A.offset(this.scroll); } }, { key: "getLength", value: function () { return this.scroll.length(); } }, { key: "getLeaf", value: function (A) { return this.scroll.leaf(A); } }, { key: "getLine", value: function (A) { return this.scroll.line(A); } }, { key: "getLines", value: function () { var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE; return typeof A != "number" ? this.scroll.lines(A.index, A.length) : this.scroll.lines(A, M); } }, { key: "getModule", value: function (A) { return this.theme.modules[A]; } }, { key: "getSelection", value: function () { var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1; return A && this.focus(), this.update(), this.selection.getRange()[0]; } }, { key: "getText", value: function () { var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - A, U = H(A, M), K = a(U, 2); return A = K[0], M = K[1], this.editor.getText(A, M); } }, { key: "hasFocus", value: function () { return this.selection.hasFocus(); } }, { key: "insertEmbed", value: function (A, M, U) { var K = this, G = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : F.sources.API; return q.call(this, function () { return K.editor.insertEmbed(A, M, U); }, G, A); } }, { key: "insertText", value: function (A, M, U, K, G) { var L = this, z = void 0, Z = H(A, 0, U, K, G), Q = a(Z, 4); return A = Q[0], z = Q[2], G = Q[3], q.call(this, function () { return L.editor.insertText(A, M, z); }, G, A, M.length); } }, { key: "isEnabled", value: function () { return !this.container.classList.contains("ql-disabled"); } }, { key: "off", value: function () { return this.emitter.off.apply(this.emitter, arguments); } }, { key: "on", value: function () { return this.emitter.on.apply(this.emitter, arguments); } }, { key: "once", value: function () { return this.emitter.once.apply(this.emitter, arguments); } }, { key: "pasteHTML", value: function (A, M, U) { this.clipboard.dangerouslyPasteHTML(A, M, U); } }, { key: "removeFormat", value: function (A, M, U) { var K = this, G = H(A, M, U), L = a(G, 4); return A = L[0], M = L[1], U = L[3], q.call(this, function () { return K.editor.removeFormat(A, M); }, U, A); } }, { key: "scrollIntoView", value: function () { this.selection.scrollIntoView(this.scrollingContainer); } }, { key: "setContents", value: function (A) {
                                var M = this, U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p.default.sources.API;
                                return q.call(this, function () {
                                    A = new f.default(A);
                                    var K = M.getLength(), G = M.editor.deleteText(0, K), L = M.editor.applyDelta(A), z = L.ops[L.ops.length - 1];
                                    z != null && typeof z.insert == "string" && z.insert[z.insert.length - 1] === `
` && (M.editor.deleteText(M.getLength() - 1, 1), L.delete(1));
                                    var Z = G.compose(L);
                                    return Z;
                                }, U);
                            } }, { key: "setSelection", value: function (A, M, U) { if (A == null)
                                this.selection.setRange(null, M || F.sources.API);
                            else {
                                var K = H(A, M, U), G = a(K, 4);
                                A = G[0], M = G[1], U = G[3], this.selection.setRange(new d.Range(A, M), U), U !== p.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
                            } } }, { key: "setText", value: function (A) { var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p.default.sources.API, U = new f.default().insert(A); return this.setContents(U, M); } }, { key: "update", value: function () { var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p.default.sources.USER, M = this.scroll.update(A); return this.selection.update(A), M; } }, { key: "updateContents", value: function (A) { var M = this, U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p.default.sources.API; return q.call(this, function () { return A = new f.default(A), M.editor.applyDelta(A, U); }, U, !0); } }]), F;
                }();
                R.DEFAULTS = { bounds: null, formats: null, modules: {}, placeholder: "", readOnly: !1, scrollingContainer: null, strict: !0, theme: "default" }, R.events = p.default.events, R.sources = p.default.sources, R.version = "1.3.7", R.imports = { delta: f.default, parchment: m.default, "core/module": v.default, "core/theme": j.default };
                function $(F, D) { if (D = (0, _.default)(!0, { container: F, modules: { clipboard: !0, keyboard: !0, history: !0 } }, D), !D.theme || D.theme === R.DEFAULTS.theme)
                    D.theme = j.default;
                else if (D.theme = R.import("themes/" + D.theme), D.theme == null)
                    throw new Error("Invalid theme " + D.theme + ". Did you register it?"); var A = (0, _.default)(!0, {}, D.theme.DEFAULTS); [A, D].forEach(function (K) { K.modules = K.modules || {}, Object.keys(K.modules).forEach(function (G) { K.modules[G] === !0 && (K.modules[G] = {}); }); }); var M = Object.keys(A.modules).concat(Object.keys(D.modules)), U = M.reduce(function (K, G) { var L = R.import("modules/" + G); return L == null ? P.error("Cannot load " + G + " module. Are you sure you registered it?") : K[G] = L.DEFAULTS || {}, K; }, {}); return D.modules != null && D.modules.toolbar && D.modules.toolbar.constructor !== Object && (D.modules.toolbar = { container: D.modules.toolbar }), D = (0, _.default)(!0, {}, R.DEFAULTS, { modules: U }, A, D), ["bounds", "container", "scrollingContainer"].forEach(function (K) { typeof D[K] == "string" && (D[K] = document.querySelector(D[K])); }), D.modules = Object.keys(D.modules).reduce(function (K, G) { return D.modules[G] && (K[G] = D.modules[G]), K; }, {}), D; }
                function q(F, D, A, M) { if (this.options.strict && !this.isEnabled() && D === p.default.sources.USER)
                    return new f.default; var U = A == null ? null : this.getSelection(), K = this.editor.delta, G = F(); if (U != null && (A === !0 && (A = U.index), M == null ? U = V(U, G, D) : M !== 0 && (U = V(U, A, M, D)), this.setSelection(U, p.default.sources.SILENT)), G.length() > 0) {
                    var L, z = [p.default.events.TEXT_CHANGE, G, K, D];
                    if ((L = this.emitter).emit.apply(L, [p.default.events.EDITOR_CHANGE].concat(z)), D !== p.default.sources.SILENT) {
                        var Z;
                        (Z = this.emitter).emit.apply(Z, z);
                    }
                } return G; }
                function H(F, D, A, M, U) { var K = {}; return typeof F.index == "number" && typeof F.length == "number" ? typeof D != "number" ? (U = M, M = A, A = D, D = F.length, F = F.index) : (D = F.length, F = F.index) : typeof D != "number" && (U = M, M = A, A = D, D = 0), (typeof A > "u" ? "undefined" : i(A)) === "object" ? (K = A, U = M) : typeof A == "string" && (M != null ? K[A] = M : U = A), U = U || p.default.sources.API, [F, D, K, U]; }
                function V(F, D, A, M) { if (F == null)
                    return null; var U = void 0, K = void 0; if (D instanceof f.default) {
                    var G = [F.index, F.index + F.length].map(function (Q) { return D.transformPosition(Q, M !== p.default.sources.USER); }), L = a(G, 2);
                    U = L[0], K = L[1];
                }
                else {
                    var z = [F.index, F.index + F.length].map(function (Q) { return Q < D || Q === D && M === p.default.sources.USER ? Q : A >= 0 ? Q + A : Math.max(D, Q + A); }), Z = a(z, 2);
                    U = Z[0], K = Z[1];
                } return new d.Range(U, K - U); }
                r.expandConfig = $, r.overload = H, r.default = R;
            }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function x(m, d) { for (var w = 0; w < d.length; w++) {
                var y = d[w];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(m, y.key, y);
            } } return function (m, d, w) { return d && x(m.prototype, d), w && x(m, w), m; }; }(), a = function x(m, d, w) { m === null && (m = Function.prototype); var y = Object.getOwnPropertyDescriptor(m, d); if (y === void 0) {
                var _ = Object.getPrototypeOf(m);
                return _ === null ? void 0 : x(_, d, w);
            }
            else {
                if ("value" in y)
                    return y.value;
                var T = y.get;
                return T === void 0 ? void 0 : T.call(w);
            } }, s = o(7), l = c(s), f = o(0), h = c(f); function c(x) { return x && x.__esModule ? x : { default: x }; } function u(x, m) { if (!(x instanceof m))
                throw new TypeError("Cannot call a class as a function"); } function p(x, m) { if (!x)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return m && (typeof m == "object" || typeof m == "function") ? m : x; } function g(x, m) { if (typeof m != "function" && m !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof m); x.prototype = Object.create(m && m.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(x, m) : x.__proto__ = m); } var v = function (x) { g(m, x); function m() { return u(this, m), p(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments)); } return i(m, [{ key: "formatAt", value: function (w, y, _, T) { if (m.compare(this.statics.blotName, _) < 0 && h.default.query(_, h.default.Scope.BLOT)) {
                        var S = this.isolate(w, y);
                        T && S.wrap(_, T);
                    }
                    else
                        a(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "formatAt", this).call(this, w, y, _, T); } }, { key: "optimize", value: function (w) { if (a(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "optimize", this).call(this, w), this.parent instanceof m && m.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                        var y = this.parent.isolate(this.offset(), this.length());
                        this.moveChildren(y), y.wrap(this);
                    } } }], [{ key: "compare", value: function (w, y) { var _ = m.order.indexOf(w), T = m.order.indexOf(y); return _ >= 0 || T >= 0 ? _ - T : w === y ? 0 : w < y ? -1 : 1; } }]), m; }(h.default.Inline); v.allowedChildren = [v, h.default.Embed, l.default], v.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], r.default = v; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(0), a = s(i); function s(u) { return u && u.__esModule ? u : { default: u }; } function l(u, p) { if (!(u instanceof p))
                throw new TypeError("Cannot call a class as a function"); } function f(u, p) { if (!u)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return p && (typeof p == "object" || typeof p == "function") ? p : u; } function h(u, p) { if (typeof p != "function" && p !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof p); u.prototype = Object.create(p && p.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(u, p) : u.__proto__ = p); } var c = function (u) { h(p, u); function p() { return l(this, p), f(this, (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments)); } return p; }(a.default.Text); r.default = c; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function d(w, y) { for (var _ = 0; _ < y.length; _++) {
                var T = y[_];
                T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(w, T.key, T);
            } } return function (w, y, _) { return y && d(w.prototype, y), _ && d(w, _), w; }; }(), a = function d(w, y, _) { w === null && (w = Function.prototype); var T = Object.getOwnPropertyDescriptor(w, y); if (T === void 0) {
                var S = Object.getPrototypeOf(w);
                return S === null ? void 0 : d(S, y, _);
            }
            else {
                if ("value" in T)
                    return T.value;
                var N = T.get;
                return N === void 0 ? void 0 : N.call(_);
            } }, s = o(54), l = c(s), f = o(10), h = c(f); function c(d) { return d && d.__esModule ? d : { default: d }; } function u(d, w) { if (!(d instanceof w))
                throw new TypeError("Cannot call a class as a function"); } function p(d, w) { if (!d)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return w && (typeof w == "object" || typeof w == "function") ? w : d; } function g(d, w) { if (typeof w != "function" && w !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof w); d.prototype = Object.create(w && w.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), w && (Object.setPrototypeOf ? Object.setPrototypeOf(d, w) : d.__proto__ = w); } var v = (0, h.default)("quill:events"), x = ["selectionchange", "mousedown", "mouseup", "click"]; x.forEach(function (d) { document.addEventListener(d, function () { for (var w = arguments.length, y = Array(w), _ = 0; _ < w; _++)
                y[_] = arguments[_]; [].slice.call(document.querySelectorAll(".ql-container")).forEach(function (T) { if (T.__quill && T.__quill.emitter) {
                var S;
                (S = T.__quill.emitter).handleDOM.apply(S, y);
            } }); }); }); var m = function (d) { g(w, d); function w() { u(this, w); var y = p(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this)); return y.listeners = {}, y.on("error", v.error), y; } return i(w, [{ key: "emit", value: function () { v.log.apply(v, arguments), a(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "emit", this).apply(this, arguments); } }, { key: "handleDOM", value: function (_) { for (var T = arguments.length, S = Array(T > 1 ? T - 1 : 0), N = 1; N < T; N++)
                        S[N - 1] = arguments[N]; (this.listeners[_.type] || []).forEach(function (j) { var O = j.node, C = j.handler; (_.target === O || O.contains(_.target)) && C.apply(void 0, [_].concat(S)); }); } }, { key: "listenDOM", value: function (_, T, S) { this.listeners[_] || (this.listeners[_] = []), this.listeners[_].push({ node: T, handler: S }); } }]), w; }(l.default); m.events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change" }, m.sources = { API: "api", SILENT: "silent", USER: "user" }, r.default = m; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); function i(s, l) { if (!(s instanceof l))
                throw new TypeError("Cannot call a class as a function"); } var a = function s(l) { var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; i(this, s), this.quill = l, this.options = f; }; a.DEFAULTS = {}, r.default = a; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = ["error", "warn", "log", "info"], a = "warn"; function s(f) { if (i.indexOf(f) <= i.indexOf(a)) {
                for (var h, c = arguments.length, u = Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
                    u[p - 1] = arguments[p];
                (h = console)[f].apply(h, u);
            } } function l(f) { return i.reduce(function (h, c) { return h[c] = s.bind(console, c, f), h; }, {}); } s.level = l.level = function (f) { a = f; }, r.default = l; }, function (n, r, o) { var i = Array.prototype.slice, a = o(52), s = o(53), l = n.exports = function (u, p, g) { return g || (g = {}), u === p ? !0 : u instanceof Date && p instanceof Date ? u.getTime() === p.getTime() : !u || !p || typeof u != "object" && typeof p != "object" ? g.strict ? u === p : u == p : c(u, p, g); }; function f(u) { return u == null; } function h(u) { return !(!u || typeof u != "object" || typeof u.length != "number" || typeof u.copy != "function" || typeof u.slice != "function" || u.length > 0 && typeof u[0] != "number"); } function c(u, p, g) { var v, x; if (f(u) || f(p) || u.prototype !== p.prototype)
                return !1; if (s(u))
                return s(p) ? (u = i.call(u), p = i.call(p), l(u, p, g)) : !1; if (h(u)) {
                if (!h(p) || u.length !== p.length)
                    return !1;
                for (v = 0; v < u.length; v++)
                    if (u[v] !== p[v])
                        return !1;
                return !0;
            } try {
                var m = a(u), d = a(p);
            }
            catch {
                return !1;
            } if (m.length != d.length)
                return !1; for (m.sort(), d.sort(), v = m.length - 1; v >= 0; v--)
                if (m[v] != d[v])
                    return !1; for (v = m.length - 1; v >= 0; v--)
                if (x = m[v], !l(u[x], p[x], g))
                    return !1; return typeof u == typeof p; } }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(1), a = function () { function s(l, f, h) { h === void 0 && (h = {}), this.attrName = l, this.keyName = f; var c = i.Scope.TYPE & i.Scope.ATTRIBUTE; h.scope != null ? this.scope = h.scope & i.Scope.LEVEL | c : this.scope = i.Scope.ATTRIBUTE, h.whitelist != null && (this.whitelist = h.whitelist); } return s.keys = function (l) { return [].map.call(l.attributes, function (f) { return f.name; }); }, s.prototype.add = function (l, f) { return this.canAdd(l, f) ? (l.setAttribute(this.keyName, f), !0) : !1; }, s.prototype.canAdd = function (l, f) { var h = i.query(l, i.Scope.BLOT & (this.scope | i.Scope.TYPE)); return h == null ? !1 : this.whitelist == null ? !0 : typeof f == "string" ? this.whitelist.indexOf(f.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(f) > -1; }, s.prototype.remove = function (l) { l.removeAttribute(this.keyName); }, s.prototype.value = function (l) { var f = l.getAttribute(this.keyName); return this.canAdd(l, f) && f ? f : ""; }, s; }(); r.default = a; }, function (n, r, o) {
                Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.Code = void 0;
                var i = function () { function N(j, O) { var C = [], k = !0, P = !1, R = void 0; try {
                    for (var $ = j[Symbol.iterator](), q; !(k = (q = $.next()).done) && (C.push(q.value), !(O && C.length === O)); k = !0)
                        ;
                }
                catch (H) {
                    P = !0, R = H;
                }
                finally {
                    try {
                        !k && $.return && $.return();
                    }
                    finally {
                        if (P)
                            throw R;
                    }
                } return C; } return function (j, O) { if (Array.isArray(j))
                    return j; if (Symbol.iterator in Object(j))
                    return N(j, O); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), a = function () { function N(j, O) { for (var C = 0; C < O.length; C++) {
                    var k = O[C];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(j, k.key, k);
                } } return function (j, O, C) { return O && N(j.prototype, O), C && N(j, C), j; }; }(), s = function N(j, O, C) { j === null && (j = Function.prototype); var k = Object.getOwnPropertyDescriptor(j, O); if (k === void 0) {
                    var P = Object.getPrototypeOf(j);
                    return P === null ? void 0 : N(P, O, C);
                }
                else {
                    if ("value" in k)
                        return k.value;
                    var R = k.get;
                    return R === void 0 ? void 0 : R.call(C);
                } }, l = o(2), f = d(l), h = o(0), c = d(h), u = o(4), p = d(u), g = o(6), v = d(g), x = o(7), m = d(x);
                function d(N) { return N && N.__esModule ? N : { default: N }; }
                function w(N, j) { if (!(N instanceof j))
                    throw new TypeError("Cannot call a class as a function"); }
                function y(N, j) { if (!N)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return j && (typeof j == "object" || typeof j == "function") ? j : N; }
                function _(N, j) { if (typeof j != "function" && j !== null)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof j); N.prototype = Object.create(j && j.prototype, { constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 } }), j && (Object.setPrototypeOf ? Object.setPrototypeOf(N, j) : N.__proto__ = j); }
                var T = function (N) { _(j, N); function j() { return w(this, j), y(this, (j.__proto__ || Object.getPrototypeOf(j)).apply(this, arguments)); } return j; }(v.default);
                T.blotName = "code", T.tagName = "CODE";
                var S = function (N) {
                    _(j, N);
                    function j() { return w(this, j), y(this, (j.__proto__ || Object.getPrototypeOf(j)).apply(this, arguments)); }
                    return a(j, [{ key: "delta", value: function () {
                                var C = this, k = this.domNode.textContent;
                                return k.endsWith(`
`) && (k = k.slice(0, -1)), k.split(`
`).reduce(function (P, R) {
                                    return P.insert(R).insert(`
`, C.formats());
                                }, new f.default);
                            } }, { key: "format", value: function (C, k) { if (!(C === this.statics.blotName && k)) {
                                var P = this.descendant(m.default, this.length() - 1), R = i(P, 1), $ = R[0];
                                $ != null && $.deleteAt($.length() - 1, 1), s(j.prototype.__proto__ || Object.getPrototypeOf(j.prototype), "format", this).call(this, C, k);
                            } } }, { key: "formatAt", value: function (C, k, P, R) { if (k !== 0 && !(c.default.query(P, c.default.Scope.BLOCK) == null || P === this.statics.blotName && R === this.statics.formats(this.domNode))) {
                                var $ = this.newlineIndex(C);
                                if (!($ < 0 || $ >= C + k)) {
                                    var q = this.newlineIndex(C, !0) + 1, H = $ - q + 1, V = this.isolate(q, H), F = V.next;
                                    V.format(P, R), F instanceof j && F.formatAt(0, C - q + k - H, P, R);
                                }
                            } } }, { key: "insertAt", value: function (C, k, P) { if (P == null) {
                                var R = this.descendant(m.default, C), $ = i(R, 2), q = $[0], H = $[1];
                                q.insertAt(H, k);
                            } } }, { key: "length", value: function () {
                                var C = this.domNode.textContent.length;
                                return this.domNode.textContent.endsWith(`
`) ? C : C + 1;
                            } }, { key: "newlineIndex", value: function (C) {
                                var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                                if (k)
                                    return this.domNode.textContent.slice(0, C).lastIndexOf(`
`);
                                var P = this.domNode.textContent.slice(C).indexOf(`
`);
                                return P > -1 ? C + P : -1;
                            } }, { key: "optimize", value: function (C) {
                                this.domNode.textContent.endsWith(`
`) || this.appendChild(c.default.create("text", `
`)), s(j.prototype.__proto__ || Object.getPrototypeOf(j.prototype), "optimize", this).call(this, C);
                                var k = this.next;
                                k != null && k.prev === this && k.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === k.statics.formats(k.domNode) && (k.optimize(C), k.moveChildren(this), k.remove());
                            } }, { key: "replace", value: function (C) { s(j.prototype.__proto__ || Object.getPrototypeOf(j.prototype), "replace", this).call(this, C), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function (k) { var P = c.default.find(k); P == null ? k.parentNode.removeChild(k) : P instanceof c.default.Embed ? P.remove() : P.unwrap(); }); } }], [{ key: "create", value: function (C) { var k = s(j.__proto__ || Object.getPrototypeOf(j), "create", this).call(this, C); return k.setAttribute("spellcheck", !1), k; } }, { key: "formats", value: function () { return !0; } }]), j;
                }(p.default);
                S.blotName = "code-block", S.tagName = "PRE", S.TAB = "  ", r.Code = T, r.default = S;
            }, function (n, r, o) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (F) { return typeof F; } : function (F) { return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F; }, a = function () { function F(D, A) { var M = [], U = !0, K = !1, G = void 0; try {
                    for (var L = D[Symbol.iterator](), z; !(U = (z = L.next()).done) && (M.push(z.value), !(A && M.length === A)); U = !0)
                        ;
                }
                catch (Z) {
                    K = !0, G = Z;
                }
                finally {
                    try {
                        !U && L.return && L.return();
                    }
                    finally {
                        if (K)
                            throw G;
                    }
                } return M; } return function (D, A) { if (Array.isArray(D))
                    return D; if (Symbol.iterator in Object(D))
                    return F(D, A); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), s = function () { function F(D, A) { for (var M = 0; M < A.length; M++) {
                    var U = A[M];
                    U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(D, U.key, U);
                } } return function (D, A, M) { return A && F(D.prototype, A), M && F(D, M), D; }; }(), l = o(2), f = k(l), h = o(20), c = k(h), u = o(0), p = k(u), g = o(13), v = k(g), x = o(24), m = k(x), d = o(4), w = k(d), y = o(16), _ = k(y), T = o(21), S = k(T), N = o(11), j = k(N), O = o(3), C = k(O);
                function k(F) { return F && F.__esModule ? F : { default: F }; }
                function P(F, D, A) { return D in F ? Object.defineProperty(F, D, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : F[D] = A, F; }
                function R(F, D) { if (!(F instanceof D))
                    throw new TypeError("Cannot call a class as a function"); }
                var $ = /^[ -~]*$/, q = function () {
                    function F(D) { R(this, F), this.scroll = D, this.delta = this.getDelta(); }
                    return s(F, [{ key: "applyDelta", value: function (A) {
                                var M = this, U = !1;
                                this.scroll.update();
                                var K = this.scroll.length();
                                return this.scroll.batchStart(), A = V(A), A.reduce(function (G, L) {
                                    var z = L.retain || L.delete || L.insert.length || 1, Z = L.attributes || {};
                                    if (L.insert != null) {
                                        if (typeof L.insert == "string") {
                                            var Q = L.insert;
                                            Q.endsWith(`
`) && U && (U = !1, Q = Q.slice(0, -1)), G >= K && !Q.endsWith(`
`) && (U = !0), M.scroll.insertAt(G, Q);
                                            var X = M.scroll.line(G), ne = a(X, 2), se = ne[0], he = ne[1], me = (0, C.default)({}, (0, d.bubbleFormats)(se));
                                            if (se instanceof w.default) {
                                                var Ee = se.descendant(p.default.Leaf, he), Me = a(Ee, 1), Le = Me[0];
                                                me = (0, C.default)(me, (0, d.bubbleFormats)(Le));
                                            }
                                            Z = c.default.attributes.diff(me, Z) || {};
                                        }
                                        else if (i(L.insert) === "object") {
                                            var I = Object.keys(L.insert)[0];
                                            if (I == null)
                                                return G;
                                            M.scroll.insertAt(G, I, L.insert[I]);
                                        }
                                        K += z;
                                    }
                                    return Object.keys(Z).forEach(function (B) { M.scroll.formatAt(G, z, B, Z[B]); }), G + z;
                                }, 0), A.reduce(function (G, L) { return typeof L.delete == "number" ? (M.scroll.deleteAt(G, L.delete), G) : G + (L.retain || L.insert.length || 1); }, 0), this.scroll.batchEnd(), this.update(A);
                            } }, { key: "deleteText", value: function (A, M) { return this.scroll.deleteAt(A, M), this.update(new f.default().retain(A).delete(M)); } }, { key: "formatLine", value: function (A, M) { var U = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; return this.scroll.update(), Object.keys(K).forEach(function (G) { if (!(U.scroll.whitelist != null && !U.scroll.whitelist[G])) {
                                var L = U.scroll.lines(A, Math.max(M, 1)), z = M;
                                L.forEach(function (Z) { var Q = Z.length(); if (!(Z instanceof v.default))
                                    Z.format(G, K[G]);
                                else {
                                    var X = A - Z.offset(U.scroll), ne = Z.newlineIndex(X + z) - X + 1;
                                    Z.formatAt(X, ne, G, K[G]);
                                } z -= Q; });
                            } }), this.scroll.optimize(), this.update(new f.default().retain(A).retain(M, (0, S.default)(K))); } }, { key: "formatText", value: function (A, M) { var U = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; return Object.keys(K).forEach(function (G) { U.scroll.formatAt(A, M, G, K[G]); }), this.update(new f.default().retain(A).retain(M, (0, S.default)(K))); } }, { key: "getContents", value: function (A, M) { return this.delta.slice(A, A + M); } }, { key: "getDelta", value: function () { return this.scroll.lines().reduce(function (A, M) { return A.concat(M.delta()); }, new f.default); } }, { key: "getFormat", value: function (A) { var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, U = [], K = []; M === 0 ? this.scroll.path(A).forEach(function (L) { var z = a(L, 1), Z = z[0]; Z instanceof w.default ? U.push(Z) : Z instanceof p.default.Leaf && K.push(Z); }) : (U = this.scroll.lines(A, M), K = this.scroll.descendants(p.default.Leaf, A, M)); var G = [U, K].map(function (L) { if (L.length === 0)
                                return {}; for (var z = (0, d.bubbleFormats)(L.shift()); Object.keys(z).length > 0;) {
                                var Z = L.shift();
                                if (Z == null)
                                    return z;
                                z = H((0, d.bubbleFormats)(Z), z);
                            } return z; }); return C.default.apply(C.default, G); } }, { key: "getText", value: function (A, M) { return this.getContents(A, M).filter(function (U) { return typeof U.insert == "string"; }).map(function (U) { return U.insert; }).join(""); } }, { key: "insertEmbed", value: function (A, M, U) { return this.scroll.insertAt(A, M, U), this.update(new f.default().retain(A).insert(P({}, M, U))); } }, { key: "insertText", value: function (A, M) {
                                var U = this, K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                                return M = M.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(A, M), Object.keys(K).forEach(function (G) { U.scroll.formatAt(A, M.length, G, K[G]); }), this.update(new f.default().retain(A).insert(M, (0, S.default)(K)));
                            } }, { key: "isBlank", value: function () { if (this.scroll.children.length == 0)
                                return !0; if (this.scroll.children.length > 1)
                                return !1; var A = this.scroll.children.head; return A.statics.blotName !== w.default.blotName || A.children.length > 1 ? !1 : A.children.head instanceof _.default; } }, { key: "removeFormat", value: function (A, M) {
                                var U = this.getText(A, M), K = this.scroll.line(A + M), G = a(K, 2), L = G[0], z = G[1], Z = 0, Q = new f.default;
                                L != null && (L instanceof v.default ? Z = L.newlineIndex(z) - z + 1 : Z = L.length() - z, Q = L.delta().slice(z, z + Z - 1).insert(`
`));
                                var X = this.getContents(A, M + Z), ne = X.diff(new f.default().insert(U).concat(Q)), se = new f.default().retain(A).concat(ne);
                                return this.applyDelta(se);
                            } }, { key: "update", value: function (A) { var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, K = this.delta; if (M.length === 1 && M[0].type === "characterData" && M[0].target.data.match($) && p.default.find(M[0].target)) {
                                var G = p.default.find(M[0].target), L = (0, d.bubbleFormats)(G), z = G.offset(this.scroll), Z = M[0].oldValue.replace(m.default.CONTENTS, ""), Q = new f.default().insert(Z), X = new f.default().insert(G.value()), ne = new f.default().retain(z).concat(Q.diff(X, U));
                                A = ne.reduce(function (se, he) { return he.insert ? se.insert(he.insert, L) : se.push(he); }, new f.default), this.delta = K.compose(A);
                            }
                            else
                                this.delta = this.getDelta(), (!A || !(0, j.default)(K.compose(A), this.delta)) && (A = K.diff(this.delta, U)); return A; } }]), F;
                }();
                function H(F, D) { return Object.keys(D).reduce(function (A, M) { return F[M] == null || (D[M] === F[M] ? A[M] = D[M] : Array.isArray(D[M]) ? D[M].indexOf(F[M]) < 0 && (A[M] = D[M].concat([F[M]])) : A[M] = [D[M], F[M]]), A; }, {}); }
                function V(F) {
                    return F.reduce(function (D, A) {
                        if (A.insert === 1) {
                            var M = (0, S.default)(A.attributes);
                            return delete M.image, D.insert({ image: A.attributes.image }, M);
                        }
                        if (A.attributes != null && (A.attributes.list === !0 || A.attributes.bullet === !0) && (A = (0, S.default)(A), A.attributes.list ? A.attributes.list = "ordered" : (A.attributes.list = "bullet", delete A.attributes.bullet)), typeof A.insert == "string") {
                            var U = A.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
                            return D.insert(U, A.attributes);
                        }
                        return D.push(A);
                    }, new f.default);
                }
                r.default = q;
            }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.Range = void 0; var i = function () { function N(j, O) { var C = [], k = !0, P = !1, R = void 0; try {
                for (var $ = j[Symbol.iterator](), q; !(k = (q = $.next()).done) && (C.push(q.value), !(O && C.length === O)); k = !0)
                    ;
            }
            catch (H) {
                P = !0, R = H;
            }
            finally {
                try {
                    !k && $.return && $.return();
                }
                finally {
                    if (P)
                        throw R;
                }
            } return C; } return function (j, O) { if (Array.isArray(j))
                return j; if (Symbol.iterator in Object(j))
                return N(j, O); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), a = function () { function N(j, O) { for (var C = 0; C < O.length; C++) {
                var k = O[C];
                k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(j, k.key, k);
            } } return function (j, O, C) { return O && N(j.prototype, O), C && N(j, C), j; }; }(), s = o(0), l = m(s), f = o(21), h = m(f), c = o(11), u = m(c), p = o(8), g = m(p), v = o(10), x = m(v); function m(N) { return N && N.__esModule ? N : { default: N }; } function d(N) { if (Array.isArray(N)) {
                for (var j = 0, O = Array(N.length); j < N.length; j++)
                    O[j] = N[j];
                return O;
            }
            else
                return Array.from(N); } function w(N, j) { if (!(N instanceof j))
                throw new TypeError("Cannot call a class as a function"); } var y = (0, x.default)("quill:selection"), _ = function N(j) { var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0; w(this, N), this.index = j, this.length = O; }, T = function () { function N(j, O) { var C = this; w(this, N), this.emitter = O, this.scroll = j, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = l.default.create("cursor", this), this.lastRange = this.savedRange = new _(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function () { C.mouseDown || setTimeout(C.update.bind(C, g.default.sources.USER), 1); }), this.emitter.on(g.default.events.EDITOR_CHANGE, function (k, P) { k === g.default.events.TEXT_CHANGE && P.length() > 0 && C.update(g.default.sources.SILENT); }), this.emitter.on(g.default.events.SCROLL_BEFORE_UPDATE, function () { if (C.hasFocus()) {
                var k = C.getNativeRange();
                k != null && k.start.node !== C.cursor.textNode && C.emitter.once(g.default.events.SCROLL_UPDATE, function () { try {
                    C.setNativeRange(k.start.node, k.start.offset, k.end.node, k.end.offset);
                }
                catch { } });
            } }), this.emitter.on(g.default.events.SCROLL_OPTIMIZE, function (k, P) { if (P.range) {
                var R = P.range, $ = R.startNode, q = R.startOffset, H = R.endNode, V = R.endOffset;
                C.setNativeRange($, q, H, V);
            } }), this.update(g.default.sources.SILENT); } return a(N, [{ key: "handleComposition", value: function () { var O = this; this.root.addEventListener("compositionstart", function () { O.composing = !0; }), this.root.addEventListener("compositionend", function () { if (O.composing = !1, O.cursor.parent) {
                        var C = O.cursor.restore();
                        if (!C)
                            return;
                        setTimeout(function () { O.setNativeRange(C.startNode, C.startOffset, C.endNode, C.endOffset); }, 1);
                    } }); } }, { key: "handleDragging", value: function () { var O = this; this.emitter.listenDOM("mousedown", document.body, function () { O.mouseDown = !0; }), this.emitter.listenDOM("mouseup", document.body, function () { O.mouseDown = !1, O.update(g.default.sources.USER); }); } }, { key: "focus", value: function () { this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange)); } }, { key: "format", value: function (O, C) { if (!(this.scroll.whitelist != null && !this.scroll.whitelist[O])) {
                        this.scroll.update();
                        var k = this.getNativeRange();
                        if (!(k == null || !k.native.collapsed || l.default.query(O, l.default.Scope.BLOCK))) {
                            if (k.start.node !== this.cursor.textNode) {
                                var P = l.default.find(k.start.node, !1);
                                if (P == null)
                                    return;
                                if (P instanceof l.default.Leaf) {
                                    var R = P.split(k.start.offset);
                                    P.parent.insertBefore(this.cursor, R);
                                }
                                else
                                    P.insertBefore(this.cursor, k.start.node);
                                this.cursor.attach();
                            }
                            this.cursor.format(O, C), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                        }
                    } } }, { key: "getBounds", value: function (O) { var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, k = this.scroll.length(); O = Math.min(O, k - 1), C = Math.min(O + C, k - 1) - O; var P = void 0, R = this.scroll.leaf(O), $ = i(R, 2), q = $[0], H = $[1]; if (q == null)
                        return null; var V = q.position(H, !0), F = i(V, 2); P = F[0], H = F[1]; var D = document.createRange(); if (C > 0) {
                        D.setStart(P, H);
                        var A = this.scroll.leaf(O + C), M = i(A, 2);
                        if (q = M[0], H = M[1], q == null)
                            return null;
                        var U = q.position(H, !0), K = i(U, 2);
                        return P = K[0], H = K[1], D.setEnd(P, H), D.getBoundingClientRect();
                    }
                    else {
                        var G = "left", L = void 0;
                        return P instanceof Text ? (H < P.data.length ? (D.setStart(P, H), D.setEnd(P, H + 1)) : (D.setStart(P, H - 1), D.setEnd(P, H), G = "right"), L = D.getBoundingClientRect()) : (L = q.domNode.getBoundingClientRect(), H > 0 && (G = "right")), { bottom: L.top + L.height, height: L.height, left: L[G], right: L[G], top: L.top, width: 0 };
                    } } }, { key: "getNativeRange", value: function () { var O = document.getSelection(); if (O == null || O.rangeCount <= 0)
                        return null; var C = O.getRangeAt(0); if (C == null)
                        return null; var k = this.normalizeNative(C); return y.info("getNativeRange", k), k; } }, { key: "getRange", value: function () { var O = this.getNativeRange(); if (O == null)
                        return [null, null]; var C = this.normalizedToRange(O); return [C, O]; } }, { key: "hasFocus", value: function () { return document.activeElement === this.root; } }, { key: "normalizedToRange", value: function (O) { var C = this, k = [[O.start.node, O.start.offset]]; O.native.collapsed || k.push([O.end.node, O.end.offset]); var P = k.map(function (q) { var H = i(q, 2), V = H[0], F = H[1], D = l.default.find(V, !0), A = D.offset(C.scroll); return F === 0 ? A : D instanceof l.default.Container ? A + D.length() : A + D.index(V, F); }), R = Math.min(Math.max.apply(Math, d(P)), this.scroll.length() - 1), $ = Math.min.apply(Math, [R].concat(d(P))); return new _($, R - $); } }, { key: "normalizeNative", value: function (O) { if (!S(this.root, O.startContainer) || !O.collapsed && !S(this.root, O.endContainer))
                        return null; var C = { start: { node: O.startContainer, offset: O.startOffset }, end: { node: O.endContainer, offset: O.endOffset }, native: O }; return [C.start, C.end].forEach(function (k) { for (var P = k.node, R = k.offset; !(P instanceof Text) && P.childNodes.length > 0;)
                        if (P.childNodes.length > R)
                            P = P.childNodes[R], R = 0;
                        else if (P.childNodes.length === R)
                            P = P.lastChild, R = P instanceof Text ? P.data.length : P.childNodes.length + 1;
                        else
                            break; k.node = P, k.offset = R; }), C; } }, { key: "rangeToNative", value: function (O) { var C = this, k = O.collapsed ? [O.index] : [O.index, O.index + O.length], P = [], R = this.scroll.length(); return k.forEach(function ($, q) { $ = Math.min(R - 1, $); var H = void 0, V = C.scroll.leaf($), F = i(V, 2), D = F[0], A = F[1], M = D.position(A, q !== 0), U = i(M, 2); H = U[0], A = U[1], P.push(H, A); }), P.length < 2 && (P = P.concat(P)), P; } }, { key: "scrollIntoView", value: function (O) { var C = this.lastRange; if (C != null) {
                        var k = this.getBounds(C.index, C.length);
                        if (k != null) {
                            var P = this.scroll.length() - 1, R = this.scroll.line(Math.min(C.index, P)), $ = i(R, 1), q = $[0], H = q;
                            if (C.length > 0) {
                                var V = this.scroll.line(Math.min(C.index + C.length, P)), F = i(V, 1);
                                H = F[0];
                            }
                            if (!(q == null || H == null)) {
                                var D = O.getBoundingClientRect();
                                k.top < D.top ? O.scrollTop -= D.top - k.top : k.bottom > D.bottom && (O.scrollTop += k.bottom - D.bottom);
                            }
                        }
                    } } }, { key: "setNativeRange", value: function (O, C) { var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : O, P = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : C, R = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1; if (y.info("setNativeRange", O, C, k, P), !(O != null && (this.root.parentNode == null || O.parentNode == null || k.parentNode == null))) {
                        var $ = document.getSelection();
                        if ($ != null)
                            if (O != null) {
                                this.hasFocus() || this.root.focus();
                                var q = (this.getNativeRange() || {}).native;
                                if (q == null || R || O !== q.startContainer || C !== q.startOffset || k !== q.endContainer || P !== q.endOffset) {
                                    O.tagName == "BR" && (C = [].indexOf.call(O.parentNode.childNodes, O), O = O.parentNode), k.tagName == "BR" && (P = [].indexOf.call(k.parentNode.childNodes, k), k = k.parentNode);
                                    var H = document.createRange();
                                    H.setStart(O, C), H.setEnd(k, P), $.removeAllRanges(), $.addRange(H);
                                }
                            }
                            else
                                $.removeAllRanges(), this.root.blur(), document.body.focus();
                    } } }, { key: "setRange", value: function (O) { var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : g.default.sources.API; if (typeof C == "string" && (k = C, C = !1), y.info("setRange", O), O != null) {
                        var P = this.rangeToNative(O);
                        this.setNativeRange.apply(this, d(P).concat([C]));
                    }
                    else
                        this.setNativeRange(null); this.update(k); } }, { key: "update", value: function () { var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g.default.sources.USER, C = this.lastRange, k = this.getRange(), P = i(k, 2), R = P[0], $ = P[1]; if (this.lastRange = R, this.lastRange != null && (this.savedRange = this.lastRange), !(0, u.default)(C, this.lastRange)) {
                        var q;
                        !this.composing && $ != null && $.native.collapsed && $.start.node !== this.cursor.textNode && this.cursor.restore();
                        var H = [g.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(C), O];
                        if ((q = this.emitter).emit.apply(q, [g.default.events.EDITOR_CHANGE].concat(H)), O !== g.default.sources.SILENT) {
                            var V;
                            (V = this.emitter).emit.apply(V, H);
                        }
                    } } }]), N; }(); function S(N, j) { try {
                j.parentNode;
            }
            catch {
                return !1;
            } return j instanceof Text && (j = j.parentNode), N.contains(j); } r.Range = _, r.default = T; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function g(v, x) { for (var m = 0; m < x.length; m++) {
                var d = x[m];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(v, d.key, d);
            } } return function (v, x, m) { return x && g(v.prototype, x), m && g(v, m), v; }; }(), a = function g(v, x, m) { v === null && (v = Function.prototype); var d = Object.getOwnPropertyDescriptor(v, x); if (d === void 0) {
                var w = Object.getPrototypeOf(v);
                return w === null ? void 0 : g(w, x, m);
            }
            else {
                if ("value" in d)
                    return d.value;
                var y = d.get;
                return y === void 0 ? void 0 : y.call(m);
            } }, s = o(0), l = f(s); function f(g) { return g && g.__esModule ? g : { default: g }; } function h(g, v) { if (!(g instanceof v))
                throw new TypeError("Cannot call a class as a function"); } function c(g, v) { if (!g)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return v && (typeof v == "object" || typeof v == "function") ? v : g; } function u(g, v) { if (typeof v != "function" && v !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof v); g.prototype = Object.create(v && v.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(g, v) : g.__proto__ = v); } var p = function (g) { u(v, g); function v() { return h(this, v), c(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments)); } return i(v, [{ key: "insertInto", value: function (m, d) { m.children.length === 0 ? a(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "insertInto", this).call(this, m, d) : this.remove(); } }, { key: "length", value: function () { return 0; } }, { key: "value", value: function () { return ""; } }], [{ key: "value", value: function () { } }]), v; }(l.default.Embed); p.blotName = "break", p.tagName = "BR", r.default = p; }, function (n, r, o) { var i = this && this.__extends || function () { var c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (u, p) { u.__proto__ = p; } || function (u, p) { for (var g in p)
                p.hasOwnProperty(g) && (u[g] = p[g]); }; return function (u, p) { c(u, p); function g() { this.constructor = u; } u.prototype = p === null ? Object.create(p) : (g.prototype = p.prototype, new g); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(44), s = o(30), l = o(1), f = function (c) { i(u, c); function u(p) { var g = c.call(this, p) || this; return g.build(), g; } return u.prototype.appendChild = function (p) { this.insertBefore(p); }, u.prototype.attach = function () { c.prototype.attach.call(this), this.children.forEach(function (p) { p.attach(); }); }, u.prototype.build = function () { var p = this; this.children = new a.default, [].slice.call(this.domNode.childNodes).reverse().forEach(function (g) { try {
                var v = h(g);
                p.insertBefore(v, p.children.head || void 0);
            }
            catch (x) {
                if (x instanceof l.ParchmentError)
                    return;
                throw x;
            } }); }, u.prototype.deleteAt = function (p, g) { if (p === 0 && g === this.length())
                return this.remove(); this.children.forEachAt(p, g, function (v, x, m) { v.deleteAt(x, m); }); }, u.prototype.descendant = function (p, g) { var v = this.children.find(g), x = v[0], m = v[1]; return p.blotName == null && p(x) || p.blotName != null && x instanceof p ? [x, m] : x instanceof u ? x.descendant(p, m) : [null, -1]; }, u.prototype.descendants = function (p, g, v) { g === void 0 && (g = 0), v === void 0 && (v = Number.MAX_VALUE); var x = [], m = v; return this.children.forEachAt(g, v, function (d, w, y) { (p.blotName == null && p(d) || p.blotName != null && d instanceof p) && x.push(d), d instanceof u && (x = x.concat(d.descendants(p, w, m))), m -= y; }), x; }, u.prototype.detach = function () { this.children.forEach(function (p) { p.detach(); }), c.prototype.detach.call(this); }, u.prototype.formatAt = function (p, g, v, x) { this.children.forEachAt(p, g, function (m, d, w) { m.formatAt(d, w, v, x); }); }, u.prototype.insertAt = function (p, g, v) { var x = this.children.find(p), m = x[0], d = x[1]; if (m)
                m.insertAt(d, g, v);
            else {
                var w = v == null ? l.create("text", g) : l.create(g, v);
                this.appendChild(w);
            } }, u.prototype.insertBefore = function (p, g) { if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (v) { return p instanceof v; }))
                throw new l.ParchmentError("Cannot insert " + p.statics.blotName + " into " + this.statics.blotName); p.insertInto(this, g); }, u.prototype.length = function () { return this.children.reduce(function (p, g) { return p + g.length(); }, 0); }, u.prototype.moveChildren = function (p, g) { this.children.forEach(function (v) { p.insertBefore(v, g); }); }, u.prototype.optimize = function (p) { if (c.prototype.optimize.call(this, p), this.children.length === 0)
                if (this.statics.defaultChild != null) {
                    var g = l.create(this.statics.defaultChild);
                    this.appendChild(g), g.optimize(p);
                }
                else
                    this.remove(); }, u.prototype.path = function (p, g) { g === void 0 && (g = !1); var v = this.children.find(p, g), x = v[0], m = v[1], d = [[this, p]]; return x instanceof u ? d.concat(x.path(m, g)) : (x != null && d.push([x, m]), d); }, u.prototype.removeChild = function (p) { this.children.remove(p); }, u.prototype.replace = function (p) { p instanceof u && p.moveChildren(this), c.prototype.replace.call(this, p); }, u.prototype.split = function (p, g) { if (g === void 0 && (g = !1), !g) {
                if (p === 0)
                    return this;
                if (p === this.length())
                    return this.next;
            } var v = this.clone(); return this.parent.insertBefore(v, this.next), this.children.forEachAt(p, this.length(), function (x, m, d) { x = x.split(m, g), v.appendChild(x); }), v; }, u.prototype.unwrap = function () { this.moveChildren(this.parent, this.next), this.remove(); }, u.prototype.update = function (p, g) { var v = this, x = [], m = []; p.forEach(function (d) { d.target === v.domNode && d.type === "childList" && (x.push.apply(x, d.addedNodes), m.push.apply(m, d.removedNodes)); }), m.forEach(function (d) { if (!(d.parentNode != null && d.tagName !== "IFRAME" && document.body.compareDocumentPosition(d) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                var w = l.find(d);
                w != null && (w.domNode.parentNode == null || w.domNode.parentNode === v.domNode) && w.detach();
            } }), x.filter(function (d) { return d.parentNode == v.domNode; }).sort(function (d, w) { return d === w ? 0 : d.compareDocumentPosition(w) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1; }).forEach(function (d) { var w = null; d.nextSibling != null && (w = l.find(d.nextSibling)); var y = h(d); (y.next != w || y.next == null) && (y.parent != null && y.parent.removeChild(v), v.insertBefore(y, w || void 0)); }); }, u; }(s.default); function h(c) { var u = l.find(c); if (u == null)
                try {
                    u = l.create(c);
                }
                catch {
                    u = l.create(l.Scope.INLINE), [].slice.call(c.childNodes).forEach(function (g) { u.domNode.appendChild(g); }), c.parentNode && c.parentNode.replaceChild(u.domNode, c), u.attach();
                } return u; } r.default = f; }, function (n, r, o) { var i = this && this.__extends || function () { var c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (u, p) { u.__proto__ = p; } || function (u, p) { for (var g in p)
                p.hasOwnProperty(g) && (u[g] = p[g]); }; return function (u, p) { c(u, p); function g() { this.constructor = u; } u.prototype = p === null ? Object.create(p) : (g.prototype = p.prototype, new g); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(12), s = o(31), l = o(17), f = o(1), h = function (c) { i(u, c); function u(p) { var g = c.call(this, p) || this; return g.attributes = new s.default(g.domNode), g; } return u.formats = function (p) { if (typeof this.tagName == "string")
                return !0; if (Array.isArray(this.tagName))
                return p.tagName.toLowerCase(); }, u.prototype.format = function (p, g) { var v = f.query(p); v instanceof a.default ? this.attributes.attribute(v, g) : g && v != null && (p !== this.statics.blotName || this.formats()[p] !== g) && this.replaceWith(p, g); }, u.prototype.formats = function () { var p = this.attributes.values(), g = this.statics.formats(this.domNode); return g != null && (p[this.statics.blotName] = g), p; }, u.prototype.replaceWith = function (p, g) { var v = c.prototype.replaceWith.call(this, p, g); return this.attributes.copy(v), v; }, u.prototype.update = function (p, g) { var v = this; c.prototype.update.call(this, p, g), p.some(function (x) { return x.target === v.domNode && x.type === "attributes"; }) && this.attributes.build(); }, u.prototype.wrap = function (p, g) { var v = c.prototype.wrap.call(this, p, g); return v instanceof u && v.statics.scope === this.statics.scope && this.attributes.move(v), v; }, u; }(l.default); r.default = h; }, function (n, r, o) { var i = this && this.__extends || function () { var f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (h, c) { h.__proto__ = c; } || function (h, c) { for (var u in c)
                c.hasOwnProperty(u) && (h[u] = c[u]); }; return function (h, c) { f(h, c); function u() { this.constructor = h; } h.prototype = c === null ? Object.create(c) : (u.prototype = c.prototype, new u); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(30), s = o(1), l = function (f) { i(h, f); function h() { return f !== null && f.apply(this, arguments) || this; } return h.value = function (c) { return !0; }, h.prototype.index = function (c, u) { return this.domNode === c || this.domNode.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(u, 1) : -1; }, h.prototype.position = function (c, u) { var p = [].indexOf.call(this.parent.domNode.childNodes, this.domNode); return c > 0 && (p += 1), [this.parent.domNode, p]; }, h.prototype.value = function () { var c; return c = {}, c[this.statics.blotName] = this.statics.value(this.domNode) || !0, c; }, h.scope = s.Scope.INLINE_BLOT, h; }(a.default); r.default = l; }, function (n, r, o) { var i = o(11), a = o(3), s = { attributes: { compose: function (f, h, c) { typeof f != "object" && (f = {}), typeof h != "object" && (h = {}); var u = a(!0, {}, h); c || (u = Object.keys(u).reduce(function (g, v) { return u[v] != null && (g[v] = u[v]), g; }, {})); for (var p in f)
                        f[p] !== void 0 && h[p] === void 0 && (u[p] = f[p]); return Object.keys(u).length > 0 ? u : void 0; }, diff: function (f, h) { typeof f != "object" && (f = {}), typeof h != "object" && (h = {}); var c = Object.keys(f).concat(Object.keys(h)).reduce(function (u, p) { return i(f[p], h[p]) || (u[p] = h[p] === void 0 ? null : h[p]), u; }, {}); return Object.keys(c).length > 0 ? c : void 0; }, transform: function (f, h, c) { if (typeof f != "object")
                        return h; if (typeof h == "object") {
                        if (!c)
                            return h;
                        var u = Object.keys(h).reduce(function (p, g) { return f[g] === void 0 && (p[g] = h[g]), p; }, {});
                        return Object.keys(u).length > 0 ? u : void 0;
                    } } }, iterator: function (f) { return new l(f); }, length: function (f) { return typeof f.delete == "number" ? f.delete : typeof f.retain == "number" ? f.retain : typeof f.insert == "string" ? f.insert.length : 1; } }; function l(f) { this.ops = f, this.index = 0, this.offset = 0; } l.prototype.hasNext = function () { return this.peekLength() < 1 / 0; }, l.prototype.next = function (f) { f || (f = 1 / 0); var h = this.ops[this.index]; if (h) {
                var c = this.offset, u = s.length(h);
                if (f >= u - c ? (f = u - c, this.index += 1, this.offset = 0) : this.offset += f, typeof h.delete == "number")
                    return { delete: f };
                var p = {};
                return h.attributes && (p.attributes = h.attributes), typeof h.retain == "number" ? p.retain = f : typeof h.insert == "string" ? p.insert = h.insert.substr(c, f) : p.insert = h.insert, p;
            }
            else
                return { retain: 1 / 0 }; }, l.prototype.peek = function () { return this.ops[this.index]; }, l.prototype.peekLength = function () { return this.ops[this.index] ? s.length(this.ops[this.index]) - this.offset : 1 / 0; }, l.prototype.peekType = function () { return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain"; }, l.prototype.rest = function () { if (this.hasNext()) {
                if (this.offset === 0)
                    return this.ops.slice(this.index);
                var f = this.offset, h = this.index, c = this.next(), u = this.ops.slice(this.index);
                return this.offset = f, this.index = h, [c].concat(u);
            }
            else
                return []; }, n.exports = s; }, function (n, r) { var o = function () { function i(v, x) { return x != null && v instanceof x; } var a; try {
                a = Map;
            }
            catch {
                a = function () { };
            } var s; try {
                s = Set;
            }
            catch {
                s = function () { };
            } var l; try {
                l = Promise;
            }
            catch {
                l = function () { };
            } function f(v, x, m, d, w) { typeof x == "object" && (m = x.depth, d = x.prototype, w = x.includeNonEnumerable, x = x.circular); var y = [], _ = [], T = typeof Buffer < "u"; typeof x > "u" && (x = !0), typeof m > "u" && (m = 1 / 0); function S(N, j) { if (N === null)
                return null; if (j === 0)
                return N; var O, C; if (typeof N != "object")
                return N; if (i(N, a))
                O = new a;
            else if (i(N, s))
                O = new s;
            else if (i(N, l))
                O = new l(function (D, A) { N.then(function (M) { D(S(M, j - 1)); }, function (M) { A(S(M, j - 1)); }); });
            else if (f.__isArray(N))
                O = [];
            else if (f.__isRegExp(N))
                O = new RegExp(N.source, g(N)), N.lastIndex && (O.lastIndex = N.lastIndex);
            else if (f.__isDate(N))
                O = new Date(N.getTime());
            else {
                if (T && Buffer.isBuffer(N))
                    return Buffer.allocUnsafe ? O = Buffer.allocUnsafe(N.length) : O = new Buffer(N.length), N.copy(O), O;
                i(N, Error) ? O = Object.create(N) : typeof d > "u" ? (C = Object.getPrototypeOf(N), O = Object.create(C)) : (O = Object.create(d), C = d);
            } if (x) {
                var k = y.indexOf(N);
                if (k != -1)
                    return _[k];
                y.push(N), _.push(O);
            } i(N, a) && N.forEach(function (D, A) { var M = S(A, j - 1), U = S(D, j - 1); O.set(M, U); }), i(N, s) && N.forEach(function (D) { var A = S(D, j - 1); O.add(A); }); for (var P in N) {
                var R;
                C && (R = Object.getOwnPropertyDescriptor(C, P)), !(R && R.set == null) && (O[P] = S(N[P], j - 1));
            } if (Object.getOwnPropertySymbols)
                for (var $ = Object.getOwnPropertySymbols(N), P = 0; P < $.length; P++) {
                    var q = $[P], H = Object.getOwnPropertyDescriptor(N, q);
                    H && !H.enumerable && !w || (O[q] = S(N[q], j - 1), H.enumerable || Object.defineProperty(O, q, { enumerable: !1 }));
                } if (w)
                for (var V = Object.getOwnPropertyNames(N), P = 0; P < V.length; P++) {
                    var F = V[P], H = Object.getOwnPropertyDescriptor(N, F);
                    H && H.enumerable || (O[F] = S(N[F], j - 1), Object.defineProperty(O, F, { enumerable: !1 }));
                } return O; } return S(v, m); } f.clonePrototype = function (x) { if (x === null)
                return null; var m = function () { }; return m.prototype = x, new m; }; function h(v) { return Object.prototype.toString.call(v); } f.__objToStr = h; function c(v) { return typeof v == "object" && h(v) === "[object Date]"; } f.__isDate = c; function u(v) { return typeof v == "object" && h(v) === "[object Array]"; } f.__isArray = u; function p(v) { return typeof v == "object" && h(v) === "[object RegExp]"; } f.__isRegExp = p; function g(v) { var x = ""; return v.global && (x += "g"), v.ignoreCase && (x += "i"), v.multiline && (x += "m"), x; } return f.__getRegExpFlags = g, f; }(); typeof n == "object" && n.exports && (n.exports = o); }, function (n, r, o) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var i = function () { function O(C, k) { var P = [], R = !0, $ = !1, q = void 0; try {
                    for (var H = C[Symbol.iterator](), V; !(R = (V = H.next()).done) && (P.push(V.value), !(k && P.length === k)); R = !0)
                        ;
                }
                catch (F) {
                    $ = !0, q = F;
                }
                finally {
                    try {
                        !R && H.return && H.return();
                    }
                    finally {
                        if ($)
                            throw q;
                    }
                } return P; } return function (C, k) { if (Array.isArray(C))
                    return C; if (Symbol.iterator in Object(C))
                    return O(C, k); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), a = function () { function O(C, k) { for (var P = 0; P < k.length; P++) {
                    var R = k[P];
                    R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(C, R.key, R);
                } } return function (C, k, P) { return k && O(C.prototype, k), P && O(C, P), C; }; }(), s = function O(C, k, P) { C === null && (C = Function.prototype); var R = Object.getOwnPropertyDescriptor(C, k); if (R === void 0) {
                    var $ = Object.getPrototypeOf(C);
                    return $ === null ? void 0 : O($, k, P);
                }
                else {
                    if ("value" in R)
                        return R.value;
                    var q = R.get;
                    return q === void 0 ? void 0 : q.call(P);
                } }, l = o(0), f = y(l), h = o(8), c = y(h), u = o(4), p = y(u), g = o(16), v = y(g), x = o(13), m = y(x), d = o(25), w = y(d);
                function y(O) { return O && O.__esModule ? O : { default: O }; }
                function _(O, C) { if (!(O instanceof C))
                    throw new TypeError("Cannot call a class as a function"); }
                function T(O, C) { if (!O)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return C && (typeof C == "object" || typeof C == "function") ? C : O; }
                function S(O, C) { if (typeof C != "function" && C !== null)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof C); O.prototype = Object.create(C && C.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), C && (Object.setPrototypeOf ? Object.setPrototypeOf(O, C) : O.__proto__ = C); }
                function N(O) { return O instanceof p.default || O instanceof u.BlockEmbed; }
                var j = function (O) {
                    S(C, O);
                    function C(k, P) { _(this, C); var R = T(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, k)); return R.emitter = P.emitter, Array.isArray(P.whitelist) && (R.whitelist = P.whitelist.reduce(function ($, q) { return $[q] = !0, $; }, {})), R.domNode.addEventListener("DOMNodeInserted", function () { }), R.optimize(), R.enable(), R; }
                    return a(C, [{ key: "batchStart", value: function () { this.batch = !0; } }, { key: "batchEnd", value: function () { this.batch = !1, this.optimize(); } }, { key: "deleteAt", value: function (P, R) { var $ = this.line(P), q = i($, 2), H = q[0], V = q[1], F = this.line(P + R), D = i(F, 1), A = D[0]; if (s(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "deleteAt", this).call(this, P, R), A != null && H !== A && V > 0) {
                                if (H instanceof u.BlockEmbed || A instanceof u.BlockEmbed) {
                                    this.optimize();
                                    return;
                                }
                                if (H instanceof m.default) {
                                    var M = H.newlineIndex(H.length(), !0);
                                    if (M > -1 && (H = H.split(M + 1), H === A)) {
                                        this.optimize();
                                        return;
                                    }
                                }
                                else if (A instanceof m.default) {
                                    var U = A.newlineIndex(0);
                                    U > -1 && A.split(U + 1);
                                }
                                var K = A.children.head instanceof v.default ? null : A.children.head;
                                H.moveChildren(A, K), H.remove();
                            } this.optimize(); } }, { key: "enable", value: function () { var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0; this.domNode.setAttribute("contenteditable", P); } }, { key: "formatAt", value: function (P, R, $, q) { this.whitelist != null && !this.whitelist[$] || (s(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "formatAt", this).call(this, P, R, $, q), this.optimize()); } }, { key: "insertAt", value: function (P, R, $) {
                                if (!($ != null && this.whitelist != null && !this.whitelist[R])) {
                                    if (P >= this.length())
                                        if ($ == null || f.default.query(R, f.default.Scope.BLOCK) == null) {
                                            var q = f.default.create(this.statics.defaultChild);
                                            this.appendChild(q), $ == null && R.endsWith(`
`) && (R = R.slice(0, -1)), q.insertAt(0, R, $);
                                        }
                                        else {
                                            var H = f.default.create(R, $);
                                            this.appendChild(H);
                                        }
                                    else
                                        s(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "insertAt", this).call(this, P, R, $);
                                    this.optimize();
                                }
                            } }, { key: "insertBefore", value: function (P, R) { if (P.statics.scope === f.default.Scope.INLINE_BLOT) {
                                var $ = f.default.create(this.statics.defaultChild);
                                $.appendChild(P), P = $;
                            } s(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "insertBefore", this).call(this, P, R); } }, { key: "leaf", value: function (P) { return this.path(P).pop() || [null, -1]; } }, { key: "line", value: function (P) { return P === this.length() ? this.line(P - 1) : this.descendant(N, P); } }, { key: "lines", value: function () { var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, $ = function q(H, V, F) { var D = [], A = F; return H.children.forEachAt(V, F, function (M, U, K) { N(M) ? D.push(M) : M instanceof f.default.Container && (D = D.concat(q(M, U, A))), A -= K; }), D; }; return $(this, P, R); } }, { key: "optimize", value: function () { var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; this.batch !== !0 && (s(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "optimize", this).call(this, P, R), P.length > 0 && this.emitter.emit(c.default.events.SCROLL_OPTIMIZE, P, R)); } }, { key: "path", value: function (P) { return s(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "path", this).call(this, P).slice(1); } }, { key: "update", value: function (P) { if (this.batch !== !0) {
                                var R = c.default.sources.USER;
                                typeof P == "string" && (R = P), Array.isArray(P) || (P = this.observer.takeRecords()), P.length > 0 && this.emitter.emit(c.default.events.SCROLL_BEFORE_UPDATE, R, P), s(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "update", this).call(this, P.concat([])), P.length > 0 && this.emitter.emit(c.default.events.SCROLL_UPDATE, R, P);
                            } } }]), C;
                }(f.default.Scroll);
                j.blotName = "scroll", j.className = "ql-editor", j.tagName = "DIV", j.defaultChild = "block", j.allowedChildren = [p.default, u.BlockEmbed, w.default], r.default = j;
            }, function (n, r, o) {
                Object.defineProperty(r, "__esModule", { value: !0 }), r.SHORTKEY = r.default = void 0;
                var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (L) { return typeof L; } : function (L) { return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L; }, a = function () { function L(z, Z) { var Q = [], X = !0, ne = !1, se = void 0; try {
                    for (var he = z[Symbol.iterator](), me; !(X = (me = he.next()).done) && (Q.push(me.value), !(Z && Q.length === Z)); X = !0)
                        ;
                }
                catch (Ee) {
                    ne = !0, se = Ee;
                }
                finally {
                    try {
                        !X && he.return && he.return();
                    }
                    finally {
                        if (ne)
                            throw se;
                    }
                } return Q; } return function (z, Z) { if (Array.isArray(z))
                    return z; if (Symbol.iterator in Object(z))
                    return L(z, Z); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), s = function () { function L(z, Z) { for (var Q = 0; Q < Z.length; Q++) {
                    var X = Z[Q];
                    X.enumerable = X.enumerable || !1, X.configurable = !0, "value" in X && (X.writable = !0), Object.defineProperty(z, X.key, X);
                } } return function (z, Z, Q) { return Z && L(z.prototype, Z), Q && L(z, Q), z; }; }(), l = o(21), f = O(l), h = o(11), c = O(h), u = o(3), p = O(u), g = o(2), v = O(g), x = o(20), m = O(x), d = o(0), w = O(d), y = o(5), _ = O(y), T = o(10), S = O(T), N = o(9), j = O(N);
                function O(L) { return L && L.__esModule ? L : { default: L }; }
                function C(L, z, Z) { return z in L ? Object.defineProperty(L, z, { value: Z, enumerable: !0, configurable: !0, writable: !0 }) : L[z] = Z, L; }
                function k(L, z) { if (!(L instanceof z))
                    throw new TypeError("Cannot call a class as a function"); }
                function P(L, z) { if (!L)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return z && (typeof z == "object" || typeof z == "function") ? z : L; }
                function R(L, z) { if (typeof z != "function" && z !== null)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof z); L.prototype = Object.create(z && z.prototype, { constructor: { value: L, enumerable: !1, writable: !0, configurable: !0 } }), z && (Object.setPrototypeOf ? Object.setPrototypeOf(L, z) : L.__proto__ = z); }
                var $ = (0, S.default)("quill:keyboard"), q = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", H = function (L) { R(z, L), s(z, null, [{ key: "match", value: function (Q, X) { return X = G(X), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function (ne) { return !!X[ne] !== Q[ne] && X[ne] !== null; }) ? !1 : X.key === (Q.which || Q.keyCode); } }]); function z(Z, Q) { k(this, z); var X = P(this, (z.__proto__ || Object.getPrototypeOf(z)).call(this, Z, Q)); return X.bindings = {}, Object.keys(X.options.bindings).forEach(function (ne) { ne === "list autofill" && Z.scroll.whitelist != null && !Z.scroll.whitelist.list || X.options.bindings[ne] && X.addBinding(X.options.bindings[ne]); }), X.addBinding({ key: z.keys.ENTER, shiftKey: null }, M), X.addBinding({ key: z.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () { }), /Firefox/i.test(navigator.userAgent) ? (X.addBinding({ key: z.keys.BACKSPACE }, { collapsed: !0 }, F), X.addBinding({ key: z.keys.DELETE }, { collapsed: !0 }, D)) : (X.addBinding({ key: z.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, F), X.addBinding({ key: z.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, D)), X.addBinding({ key: z.keys.BACKSPACE }, { collapsed: !1 }, A), X.addBinding({ key: z.keys.DELETE }, { collapsed: !1 }, A), X.addBinding({ key: z.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, F), X.listen(), X; } return s(z, [{ key: "addBinding", value: function (Q) { var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, se = G(Q); if (se == null || se.key == null)
                            return $.warn("Attempted to add invalid keyboard binding", se); typeof X == "function" && (X = { handler: X }), typeof ne == "function" && (ne = { handler: ne }), se = (0, p.default)(se, X, ne), this.bindings[se.key] = this.bindings[se.key] || [], this.bindings[se.key].push(se); } }, { key: "listen", value: function () { var Q = this; this.quill.root.addEventListener("keydown", function (X) { if (!X.defaultPrevented) {
                            var ne = X.which || X.keyCode, se = (Q.bindings[ne] || []).filter(function (De) { return z.match(X, De); });
                            if (se.length !== 0) {
                                var he = Q.quill.getSelection();
                                if (!(he == null || !Q.quill.hasFocus())) {
                                    var me = Q.quill.getLine(he.index), Ee = a(me, 2), Me = Ee[0], Le = Ee[1], I = Q.quill.getLeaf(he.index), B = a(I, 2), W = B[0], J = B[1], Y = he.length === 0 ? [W, J] : Q.quill.getLeaf(he.index + he.length), ee = a(Y, 2), re = ee[0], ue = ee[1], Ne = W instanceof w.default.Text ? W.value().slice(0, J) : "", Ce = re instanceof w.default.Text ? re.value().slice(ue) : "", Oe = { collapsed: he.length === 0, empty: he.length === 0 && Me.length() <= 1, format: Q.quill.getFormat(he), offset: Le, prefix: Ne, suffix: Ce }, hn = se.some(function (De) { if (De.collapsed != null && De.collapsed !== Oe.collapsed || De.empty != null && De.empty !== Oe.empty || De.offset != null && De.offset !== Oe.offset)
                                        return !1; if (Array.isArray(De.format)) {
                                        if (De.format.every(function (_t) { return Oe.format[_t] == null; }))
                                            return !1;
                                    }
                                    else if (i(De.format) === "object" && !Object.keys(De.format).every(function (_t) { return De.format[_t] === !0 ? Oe.format[_t] != null : De.format[_t] === !1 ? Oe.format[_t] == null : (0, c.default)(De.format[_t], Oe.format[_t]); }))
                                        return !1; return De.prefix != null && !De.prefix.test(Oe.prefix) || De.suffix != null && !De.suffix.test(Oe.suffix) ? !1 : De.handler.call(Q, he, Oe) !== !0; });
                                    hn && X.preventDefault();
                                }
                            }
                        } }); } }]), z; }(j.default);
                H.keys = { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }, H.DEFAULTS = { bindings: { bold: K("bold"), italic: K("italic"), underline: K("underline"), indent: { key: H.keys.TAB, format: ["blockquote", "indent", "list"], handler: function (z, Z) { if (Z.collapsed && Z.offset !== 0)
                                return !0; this.quill.format("indent", "+1", _.default.sources.USER); } }, outdent: { key: H.keys.TAB, shiftKey: !0, format: ["blockquote", "indent", "list"], handler: function (z, Z) { if (Z.collapsed && Z.offset !== 0)
                                return !0; this.quill.format("indent", "-1", _.default.sources.USER); } }, "outdent backspace": { key: H.keys.BACKSPACE, collapsed: !0, shiftKey: null, metaKey: null, ctrlKey: null, altKey: null, format: ["indent", "list"], offset: 0, handler: function (z, Z) { Z.format.indent != null ? this.quill.format("indent", "-1", _.default.sources.USER) : Z.format.list != null && this.quill.format("list", !1, _.default.sources.USER); } }, "indent code-block": U(!0), "outdent code-block": U(!1), "remove tab": { key: H.keys.TAB, shiftKey: !0, collapsed: !0, prefix: /\t$/, handler: function (z) { this.quill.deleteText(z.index - 1, 1, _.default.sources.USER); } }, tab: { key: H.keys.TAB, handler: function (z) { this.quill.history.cutoff(); var Z = new v.default().retain(z.index).delete(z.length).insert("	"); this.quill.updateContents(Z, _.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(z.index + 1, _.default.sources.SILENT); } }, "list empty enter": { key: H.keys.ENTER, collapsed: !0, format: ["list"], empty: !0, handler: function (z, Z) { this.quill.format("list", !1, _.default.sources.USER), Z.format.indent && this.quill.format("indent", !1, _.default.sources.USER); } }, "checklist enter": { key: H.keys.ENTER, collapsed: !0, format: { list: "checked" }, handler: function (z) {
                                var Z = this.quill.getLine(z.index), Q = a(Z, 2), X = Q[0], ne = Q[1], se = (0, p.default)({}, X.formats(), { list: "checked" }), he = new v.default().retain(z.index).insert(`
`, se).retain(X.length() - ne - 1).retain(1, { list: "unchecked" });
                                this.quill.updateContents(he, _.default.sources.USER), this.quill.setSelection(z.index + 1, _.default.sources.SILENT), this.quill.scrollIntoView();
                            } }, "header enter": { key: H.keys.ENTER, collapsed: !0, format: ["header"], suffix: /^$/, handler: function (z, Z) {
                                var Q = this.quill.getLine(z.index), X = a(Q, 2), ne = X[0], se = X[1], he = new v.default().retain(z.index).insert(`
`, Z.format).retain(ne.length() - se - 1).retain(1, { header: null });
                                this.quill.updateContents(he, _.default.sources.USER), this.quill.setSelection(z.index + 1, _.default.sources.SILENT), this.quill.scrollIntoView();
                            } }, "list autofill": { key: " ", collapsed: !0, format: { list: !1 }, prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/, handler: function (z, Z) { var Q = Z.prefix.length, X = this.quill.getLine(z.index), ne = a(X, 2), se = ne[0], he = ne[1]; if (he > Q)
                                return !0; var me = void 0; switch (Z.prefix.trim()) {
                                case "[]":
                                case "[ ]":
                                    me = "unchecked";
                                    break;
                                case "[x]":
                                    me = "checked";
                                    break;
                                case "-":
                                case "*":
                                    me = "bullet";
                                    break;
                                default: me = "ordered";
                            } this.quill.insertText(z.index, " ", _.default.sources.USER), this.quill.history.cutoff(); var Ee = new v.default().retain(z.index - he).delete(Q + 1).retain(se.length() - 2 - he).retain(1, { list: me }); this.quill.updateContents(Ee, _.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(z.index - Q, _.default.sources.SILENT); } }, "code exit": { key: H.keys.ENTER, collapsed: !0, format: ["code-block"], prefix: /\n\n$/, suffix: /^\s+$/, handler: function (z) { var Z = this.quill.getLine(z.index), Q = a(Z, 2), X = Q[0], ne = Q[1], se = new v.default().retain(z.index + X.length() - ne - 2).retain(1, { "code-block": null }).delete(1); this.quill.updateContents(se, _.default.sources.USER); } }, "embed left": V(H.keys.LEFT, !1), "embed left shift": V(H.keys.LEFT, !0), "embed right": V(H.keys.RIGHT, !1), "embed right shift": V(H.keys.RIGHT, !0) } };
                function V(L, z) { var Z, Q = L === H.keys.LEFT ? "prefix" : "suffix"; return Z = { key: L, shiftKey: z, altKey: null }, C(Z, Q, /^$/), C(Z, "handler", function (ne) { var se = ne.index; L === H.keys.RIGHT && (se += ne.length + 1); var he = this.quill.getLeaf(se), me = a(he, 1), Ee = me[0]; return Ee instanceof w.default.Embed ? (L === H.keys.LEFT ? z ? this.quill.setSelection(ne.index - 1, ne.length + 1, _.default.sources.USER) : this.quill.setSelection(ne.index - 1, _.default.sources.USER) : z ? this.quill.setSelection(ne.index, ne.length + 1, _.default.sources.USER) : this.quill.setSelection(ne.index + ne.length + 1, _.default.sources.USER), !1) : !0; }), Z; }
                function F(L, z) { if (!(L.index === 0 || this.quill.getLength() <= 1)) {
                    var Z = this.quill.getLine(L.index), Q = a(Z, 1), X = Q[0], ne = {};
                    if (z.offset === 0) {
                        var se = this.quill.getLine(L.index - 1), he = a(se, 1), me = he[0];
                        if (me != null && me.length() > 1) {
                            var Ee = X.formats(), Me = this.quill.getFormat(L.index - 1, 1);
                            ne = m.default.attributes.diff(Ee, Me) || {};
                        }
                    }
                    var Le = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(z.prefix) ? 2 : 1;
                    this.quill.deleteText(L.index - Le, Le, _.default.sources.USER), Object.keys(ne).length > 0 && this.quill.formatLine(L.index - Le, Le, ne, _.default.sources.USER), this.quill.focus();
                } }
                function D(L, z) { var Z = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(z.suffix) ? 2 : 1; if (!(L.index >= this.quill.getLength() - Z)) {
                    var Q = {}, X = 0, ne = this.quill.getLine(L.index), se = a(ne, 1), he = se[0];
                    if (z.offset >= he.length() - 1) {
                        var me = this.quill.getLine(L.index + 1), Ee = a(me, 1), Me = Ee[0];
                        if (Me) {
                            var Le = he.formats(), I = this.quill.getFormat(L.index, 1);
                            Q = m.default.attributes.diff(Le, I) || {}, X = Me.length();
                        }
                    }
                    this.quill.deleteText(L.index, Z, _.default.sources.USER), Object.keys(Q).length > 0 && this.quill.formatLine(L.index + X - 1, Z, Q, _.default.sources.USER);
                } }
                function A(L) { var z = this.quill.getLines(L), Z = {}; if (z.length > 1) {
                    var Q = z[0].formats(), X = z[z.length - 1].formats();
                    Z = m.default.attributes.diff(X, Q) || {};
                } this.quill.deleteText(L, _.default.sources.USER), Object.keys(Z).length > 0 && this.quill.formatLine(L.index, 1, Z, _.default.sources.USER), this.quill.setSelection(L.index, _.default.sources.SILENT), this.quill.focus(); }
                function M(L, z) {
                    var Z = this;
                    L.length > 0 && this.quill.scroll.deleteAt(L.index, L.length);
                    var Q = Object.keys(z.format).reduce(function (X, ne) { return w.default.query(ne, w.default.Scope.BLOCK) && !Array.isArray(z.format[ne]) && (X[ne] = z.format[ne]), X; }, {});
                    this.quill.insertText(L.index, `
`, Q, _.default.sources.USER), this.quill.setSelection(L.index + 1, _.default.sources.SILENT), this.quill.focus(), Object.keys(z.format).forEach(function (X) { Q[X] == null && (Array.isArray(z.format[X]) || X !== "link" && Z.quill.format(X, z.format[X], _.default.sources.USER)); });
                }
                function U(L) {
                    return { key: H.keys.TAB, shiftKey: !L, format: { "code-block": !0 }, handler: function (Z) {
                            var Q = w.default.query("code-block"), X = Z.index, ne = Z.length, se = this.quill.scroll.descendant(Q, X), he = a(se, 2), me = he[0], Ee = he[1];
                            if (me != null) {
                                var Me = this.quill.getIndex(me), Le = me.newlineIndex(Ee, !0) + 1, I = me.newlineIndex(Me + Ee + ne), B = me.domNode.textContent.slice(Le, I).split(`
`);
                                Ee = 0, B.forEach(function (W, J) { L ? (me.insertAt(Le + Ee, Q.TAB), Ee += Q.TAB.length, J === 0 ? X += Q.TAB.length : ne += Q.TAB.length) : W.startsWith(Q.TAB) && (me.deleteAt(Le + Ee, Q.TAB.length), Ee -= Q.TAB.length, J === 0 ? X -= Q.TAB.length : ne -= Q.TAB.length), Ee += W.length + 1; }), this.quill.update(_.default.sources.USER), this.quill.setSelection(X, ne, _.default.sources.SILENT);
                            }
                        } };
                }
                function K(L) { return { key: L[0].toUpperCase(), shortKey: !0, handler: function (Z, Q) { this.quill.format(L, !Q.format[L], _.default.sources.USER); } }; }
                function G(L) { if (typeof L == "string" || typeof L == "number")
                    return G({ key: L }); if ((typeof L > "u" ? "undefined" : i(L)) === "object" && (L = (0, f.default)(L, !1)), typeof L.key == "string")
                    if (H.keys[L.key.toUpperCase()] != null)
                        L.key = H.keys[L.key.toUpperCase()];
                    else if (L.key.length === 1)
                        L.key = L.key.toUpperCase().charCodeAt(0);
                    else
                        return null; return L.shortKey && (L[q] = L.shortKey, delete L.shortKey), L; }
                r.default = H, r.SHORTKEY = q;
            }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function m(d, w) { var y = [], _ = !0, T = !1, S = void 0; try {
                for (var N = d[Symbol.iterator](), j; !(_ = (j = N.next()).done) && (y.push(j.value), !(w && y.length === w)); _ = !0)
                    ;
            }
            catch (O) {
                T = !0, S = O;
            }
            finally {
                try {
                    !_ && N.return && N.return();
                }
                finally {
                    if (T)
                        throw S;
                }
            } return y; } return function (d, w) { if (Array.isArray(d))
                return d; if (Symbol.iterator in Object(d))
                return m(d, w); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), a = function m(d, w, y) { d === null && (d = Function.prototype); var _ = Object.getOwnPropertyDescriptor(d, w); if (_ === void 0) {
                var T = Object.getPrototypeOf(d);
                return T === null ? void 0 : m(T, w, y);
            }
            else {
                if ("value" in _)
                    return _.value;
                var S = _.get;
                return S === void 0 ? void 0 : S.call(y);
            } }, s = function () { function m(d, w) { for (var y = 0; y < w.length; y++) {
                var _ = w[y];
                _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(d, _.key, _);
            } } return function (d, w, y) { return w && m(d.prototype, w), y && m(d, y), d; }; }(), l = o(0), f = u(l), h = o(7), c = u(h); function u(m) { return m && m.__esModule ? m : { default: m }; } function p(m, d) { if (!(m instanceof d))
                throw new TypeError("Cannot call a class as a function"); } function g(m, d) { if (!m)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return d && (typeof d == "object" || typeof d == "function") ? d : m; } function v(m, d) { if (typeof d != "function" && d !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof d); m.prototype = Object.create(d && d.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), d && (Object.setPrototypeOf ? Object.setPrototypeOf(m, d) : m.__proto__ = d); } var x = function (m) { v(d, m), s(d, null, [{ key: "value", value: function () { } }]); function d(w, y) { p(this, d); var _ = g(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, w)); return _.selection = y, _.textNode = document.createTextNode(d.CONTENTS), _.domNode.appendChild(_.textNode), _._length = 0, _; } return s(d, [{ key: "detach", value: function () { this.parent != null && this.parent.removeChild(this); } }, { key: "format", value: function (y, _) { if (this._length !== 0)
                        return a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "format", this).call(this, y, _); for (var T = this, S = 0; T != null && T.statics.scope !== f.default.Scope.BLOCK_BLOT;)
                        S += T.offset(T.parent), T = T.parent; T != null && (this._length = d.CONTENTS.length, T.optimize(), T.formatAt(S, d.CONTENTS.length, y, _), this._length = 0); } }, { key: "index", value: function (y, _) { return y === this.textNode ? 0 : a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "index", this).call(this, y, _); } }, { key: "length", value: function () { return this._length; } }, { key: "position", value: function () { return [this.textNode, this.textNode.data.length]; } }, { key: "remove", value: function () { a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "remove", this).call(this), this.parent = null; } }, { key: "restore", value: function () { if (!(this.selection.composing || this.parent == null)) {
                        var y = this.textNode, _ = this.selection.getNativeRange(), T = void 0, S = void 0, N = void 0;
                        if (_ != null && _.start.node === y && _.end.node === y) {
                            var j = [y, _.start.offset, _.end.offset];
                            T = j[0], S = j[1], N = j[2];
                        }
                        for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode;)
                            this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                        if (this.textNode.data !== d.CONTENTS) {
                            var O = this.textNode.data.split(d.CONTENTS).join("");
                            this.next instanceof c.default ? (T = this.next.domNode, this.next.insertAt(0, O), this.textNode.data = d.CONTENTS) : (this.textNode.data = O, this.parent.insertBefore(f.default.create(this.textNode), this), this.textNode = document.createTextNode(d.CONTENTS), this.domNode.appendChild(this.textNode));
                        }
                        if (this.remove(), S != null) {
                            var C = [S, N].map(function (P) { return Math.max(0, Math.min(T.data.length, P - 1)); }), k = i(C, 2);
                            return S = k[0], N = k[1], { startNode: T, startOffset: S, endNode: T, endOffset: N };
                        }
                    } } }, { key: "update", value: function (y, _) { var T = this; if (y.some(function (N) { return N.type === "characterData" && N.target === T.textNode; })) {
                        var S = this.restore();
                        S && (_.range = S);
                    } } }, { key: "value", value: function () { return ""; } }]), d; }(f.default.Embed); x.blotName = "cursor", x.className = "ql-cursor", x.tagName = "span", x.CONTENTS = "\uFEFF", r.default = x; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(0), a = f(i), s = o(4), l = f(s); function f(g) { return g && g.__esModule ? g : { default: g }; } function h(g, v) { if (!(g instanceof v))
                throw new TypeError("Cannot call a class as a function"); } function c(g, v) { if (!g)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return v && (typeof v == "object" || typeof v == "function") ? v : g; } function u(g, v) { if (typeof v != "function" && v !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof v); g.prototype = Object.create(v && v.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(g, v) : g.__proto__ = v); } var p = function (g) { u(v, g); function v() { return h(this, v), c(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments)); } return v; }(a.default.Container); p.allowedChildren = [l.default, s.BlockEmbed, p], r.default = p; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.ColorStyle = r.ColorClass = r.ColorAttributor = void 0; var i = function () { function x(m, d) { for (var w = 0; w < d.length; w++) {
                var y = d[w];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(m, y.key, y);
            } } return function (m, d, w) { return d && x(m.prototype, d), w && x(m, w), m; }; }(), a = function x(m, d, w) { m === null && (m = Function.prototype); var y = Object.getOwnPropertyDescriptor(m, d); if (y === void 0) {
                var _ = Object.getPrototypeOf(m);
                return _ === null ? void 0 : x(_, d, w);
            }
            else {
                if ("value" in y)
                    return y.value;
                var T = y.get;
                return T === void 0 ? void 0 : T.call(w);
            } }, s = o(0), l = f(s); function f(x) { return x && x.__esModule ? x : { default: x }; } function h(x, m) { if (!(x instanceof m))
                throw new TypeError("Cannot call a class as a function"); } function c(x, m) { if (!x)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return m && (typeof m == "object" || typeof m == "function") ? m : x; } function u(x, m) { if (typeof m != "function" && m !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof m); x.prototype = Object.create(m && m.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(x, m) : x.__proto__ = m); } var p = function (x) { u(m, x); function m() { return h(this, m), c(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments)); } return i(m, [{ key: "value", value: function (w) { var y = a(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "value", this).call(this, w); return y.startsWith("rgb(") ? (y = y.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + y.split(",").map(function (_) { return ("00" + parseInt(_).toString(16)).slice(-2); }).join("")) : y; } }]), m; }(l.default.Attributor.Style), g = new l.default.Attributor.Class("color", "ql-color", { scope: l.default.Scope.INLINE }), v = new p("color", "color", { scope: l.default.Scope.INLINE }); r.ColorAttributor = p, r.ColorClass = g, r.ColorStyle = v; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.sanitize = r.default = void 0; var i = function () { function v(x, m) { for (var d = 0; d < m.length; d++) {
                var w = m[d];
                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(x, w.key, w);
            } } return function (x, m, d) { return m && v(x.prototype, m), d && v(x, d), x; }; }(), a = function v(x, m, d) { x === null && (x = Function.prototype); var w = Object.getOwnPropertyDescriptor(x, m); if (w === void 0) {
                var y = Object.getPrototypeOf(x);
                return y === null ? void 0 : v(y, m, d);
            }
            else {
                if ("value" in w)
                    return w.value;
                var _ = w.get;
                return _ === void 0 ? void 0 : _.call(d);
            } }, s = o(6), l = f(s); function f(v) { return v && v.__esModule ? v : { default: v }; } function h(v, x) { if (!(v instanceof x))
                throw new TypeError("Cannot call a class as a function"); } function c(v, x) { if (!v)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return x && (typeof x == "object" || typeof x == "function") ? x : v; } function u(v, x) { if (typeof x != "function" && x !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof x); v.prototype = Object.create(x && x.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(v, x) : v.__proto__ = x); } var p = function (v) { u(x, v); function x() { return h(this, x), c(this, (x.__proto__ || Object.getPrototypeOf(x)).apply(this, arguments)); } return i(x, [{ key: "format", value: function (d, w) { if (d !== this.statics.blotName || !w)
                        return a(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "format", this).call(this, d, w); w = this.constructor.sanitize(w), this.domNode.setAttribute("href", w); } }], [{ key: "create", value: function (d) { var w = a(x.__proto__ || Object.getPrototypeOf(x), "create", this).call(this, d); return d = this.sanitize(d), w.setAttribute("href", d), w.setAttribute("rel", "noopener noreferrer"), w.setAttribute("target", "_blank"), w; } }, { key: "formats", value: function (d) { return d.getAttribute("href"); } }, { key: "sanitize", value: function (d) { return g(d, this.PROTOCOL_WHITELIST) ? d : this.SANITIZED_URL; } }]), x; }(l.default); p.blotName = "link", p.tagName = "A", p.SANITIZED_URL = "about:blank", p.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"]; function g(v, x) { var m = document.createElement("a"); m.href = v; var d = m.href.slice(0, m.href.indexOf(":")); return x.indexOf(d) > -1; } r.default = p, r.sanitize = g; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (x) { return typeof x; } : function (x) { return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x; }, a = function () { function x(m, d) { for (var w = 0; w < d.length; w++) {
                var y = d[w];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(m, y.key, y);
            } } return function (m, d, w) { return d && x(m.prototype, d), w && x(m, w), m; }; }(), s = o(23), l = c(s), f = o(107), h = c(f); function c(x) { return x && x.__esModule ? x : { default: x }; } function u(x, m) { if (!(x instanceof m))
                throw new TypeError("Cannot call a class as a function"); } var p = 0; function g(x, m) { x.setAttribute(m, x.getAttribute(m) !== "true"); } var v = function () { function x(m) { var d = this; u(this, x), this.select = m, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function () { d.togglePicker(); }), this.label.addEventListener("keydown", function (w) { switch (w.keyCode) {
                case l.default.keys.ENTER:
                    d.togglePicker();
                    break;
                case l.default.keys.ESCAPE:
                    d.escape(), w.preventDefault();
                    break;
            } }), this.select.addEventListener("change", this.update.bind(this)); } return a(x, [{ key: "togglePicker", value: function () { this.container.classList.toggle("ql-expanded"), g(this.label, "aria-expanded"), g(this.options, "aria-hidden"); } }, { key: "buildItem", value: function (d) { var w = this, y = document.createElement("span"); return y.tabIndex = "0", y.setAttribute("role", "button"), y.classList.add("ql-picker-item"), d.hasAttribute("value") && y.setAttribute("data-value", d.getAttribute("value")), d.textContent && y.setAttribute("data-label", d.textContent), y.addEventListener("click", function () { w.selectItem(y, !0); }), y.addEventListener("keydown", function (_) { switch (_.keyCode) {
                        case l.default.keys.ENTER:
                            w.selectItem(y, !0), _.preventDefault();
                            break;
                        case l.default.keys.ESCAPE:
                            w.escape(), _.preventDefault();
                            break;
                    } }), y; } }, { key: "buildLabel", value: function () { var d = document.createElement("span"); return d.classList.add("ql-picker-label"), d.innerHTML = h.default, d.tabIndex = "0", d.setAttribute("role", "button"), d.setAttribute("aria-expanded", "false"), this.container.appendChild(d), d; } }, { key: "buildOptions", value: function () { var d = this, w = document.createElement("span"); w.classList.add("ql-picker-options"), w.setAttribute("aria-hidden", "true"), w.tabIndex = "-1", w.id = "ql-picker-options-" + p, p += 1, this.label.setAttribute("aria-controls", w.id), this.options = w, [].slice.call(this.select.options).forEach(function (y) { var _ = d.buildItem(y); w.appendChild(_), y.selected === !0 && d.selectItem(_); }), this.container.appendChild(w); } }, { key: "buildPicker", value: function () { var d = this; [].slice.call(this.select.attributes).forEach(function (w) { d.container.setAttribute(w.name, w.value); }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions(); } }, { key: "escape", value: function () { var d = this; this.close(), setTimeout(function () { return d.label.focus(); }, 1); } }, { key: "close", value: function () { this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true"); } }, { key: "selectItem", value: function (d) { var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, y = this.container.querySelector(".ql-selected"); if (d !== y && (y != null && y.classList.remove("ql-selected"), d != null && (d.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(d.parentNode.children, d), d.hasAttribute("data-value") ? this.label.setAttribute("data-value", d.getAttribute("data-value")) : this.label.removeAttribute("data-value"), d.hasAttribute("data-label") ? this.label.setAttribute("data-label", d.getAttribute("data-label")) : this.label.removeAttribute("data-label"), w))) {
                        if (typeof Event == "function")
                            this.select.dispatchEvent(new Event("change"));
                        else if ((typeof Event > "u" ? "undefined" : i(Event)) === "object") {
                            var _ = document.createEvent("Event");
                            _.initEvent("change", !0, !0), this.select.dispatchEvent(_);
                        }
                        this.close();
                    } } }, { key: "update", value: function () { var d = void 0; if (this.select.selectedIndex > -1) {
                        var w = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                        d = this.select.options[this.select.selectedIndex], this.selectItem(w);
                    }
                    else
                        this.selectItem(null); var y = d != null && d !== this.select.querySelector("option[selected]"); this.label.classList.toggle("ql-active", y); } }]), x; }(); r.default = v; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(0), a = $(i), s = o(5), l = $(s), f = o(4), h = $(f), c = o(16), u = $(c), p = o(25), g = $(p), v = o(24), x = $(v), m = o(35), d = $(m), w = o(6), y = $(w), _ = o(22), T = $(_), S = o(7), N = $(S), j = o(55), O = $(j), C = o(42), k = $(C), P = o(23), R = $(P); function $(q) { return q && q.__esModule ? q : { default: q }; } l.default.register({ "blots/block": h.default, "blots/block/embed": f.BlockEmbed, "blots/break": u.default, "blots/container": g.default, "blots/cursor": x.default, "blots/embed": d.default, "blots/inline": y.default, "blots/scroll": T.default, "blots/text": N.default, "modules/clipboard": O.default, "modules/history": k.default, "modules/keyboard": R.default }), a.default.register(h.default, u.default, x.default, y.default, T.default, N.default), r.default = l.default; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(1), a = function () { function s(l) { this.domNode = l, this.domNode[i.DATA_KEY] = { blot: this }; } return Object.defineProperty(s.prototype, "statics", { get: function () { return this.constructor; }, enumerable: !0, configurable: !0 }), s.create = function (l) { if (this.tagName == null)
                throw new i.ParchmentError("Blot definition missing tagName"); var f; return Array.isArray(this.tagName) ? (typeof l == "string" && (l = l.toUpperCase(), parseInt(l).toString() === l && (l = parseInt(l))), typeof l == "number" ? f = document.createElement(this.tagName[l - 1]) : this.tagName.indexOf(l) > -1 ? f = document.createElement(l) : f = document.createElement(this.tagName[0])) : f = document.createElement(this.tagName), this.className && f.classList.add(this.className), f; }, s.prototype.attach = function () { this.parent != null && (this.scroll = this.parent.scroll); }, s.prototype.clone = function () { var l = this.domNode.cloneNode(!1); return i.create(l); }, s.prototype.detach = function () { this.parent != null && this.parent.removeChild(this), delete this.domNode[i.DATA_KEY]; }, s.prototype.deleteAt = function (l, f) { var h = this.isolate(l, f); h.remove(); }, s.prototype.formatAt = function (l, f, h, c) { var u = this.isolate(l, f); if (i.query(h, i.Scope.BLOT) != null && c)
                u.wrap(h, c);
            else if (i.query(h, i.Scope.ATTRIBUTE) != null) {
                var p = i.create(this.statics.scope);
                u.wrap(p), p.format(h, c);
            } }, s.prototype.insertAt = function (l, f, h) { var c = h == null ? i.create("text", f) : i.create(f, h), u = this.split(l); this.parent.insertBefore(c, u); }, s.prototype.insertInto = function (l, f) { f === void 0 && (f = null), this.parent != null && this.parent.children.remove(this); var h = null; l.children.insertBefore(this, f), f != null && (h = f.domNode), (this.domNode.parentNode != l.domNode || this.domNode.nextSibling != h) && l.domNode.insertBefore(this.domNode, h), this.parent = l, this.attach(); }, s.prototype.isolate = function (l, f) { var h = this.split(l); return h.split(f), h; }, s.prototype.length = function () { return 1; }, s.prototype.offset = function (l) { return l === void 0 && (l = this.parent), this.parent == null || this == l ? 0 : this.parent.children.offset(this) + this.parent.offset(l); }, s.prototype.optimize = function (l) { this.domNode[i.DATA_KEY] != null && delete this.domNode[i.DATA_KEY].mutations; }, s.prototype.remove = function () { this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach(); }, s.prototype.replace = function (l) { l.parent != null && (l.parent.insertBefore(this, l.next), l.remove()); }, s.prototype.replaceWith = function (l, f) { var h = typeof l == "string" ? i.create(l, f) : l; return h.replace(this), h; }, s.prototype.split = function (l, f) { return l === 0 ? this : this.next; }, s.prototype.update = function (l, f) { }, s.prototype.wrap = function (l, f) { var h = typeof l == "string" ? i.create(l, f) : l; return this.parent != null && this.parent.insertBefore(h, this.next), h.appendChild(this), h; }, s.blotName = "abstract", s; }(); r.default = a; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(12), a = o(32), s = o(33), l = o(1), f = function () { function h(c) { this.attributes = {}, this.domNode = c, this.build(); } return h.prototype.attribute = function (c, u) { u ? c.add(this.domNode, u) && (c.value(this.domNode) != null ? this.attributes[c.attrName] = c : delete this.attributes[c.attrName]) : (c.remove(this.domNode), delete this.attributes[c.attrName]); }, h.prototype.build = function () { var c = this; this.attributes = {}; var u = i.default.keys(this.domNode), p = a.default.keys(this.domNode), g = s.default.keys(this.domNode); u.concat(p).concat(g).forEach(function (v) { var x = l.query(v, l.Scope.ATTRIBUTE); x instanceof i.default && (c.attributes[x.attrName] = x); }); }, h.prototype.copy = function (c) { var u = this; Object.keys(this.attributes).forEach(function (p) { var g = u.attributes[p].value(u.domNode); c.format(p, g); }); }, h.prototype.move = function (c) { var u = this; this.copy(c), Object.keys(this.attributes).forEach(function (p) { u.attributes[p].remove(u.domNode); }), this.attributes = {}; }, h.prototype.values = function () { var c = this; return Object.keys(this.attributes).reduce(function (u, p) { return u[p] = c.attributes[p].value(c.domNode), u; }, {}); }, h; }(); r.default = f; }, function (n, r, o) { var i = this && this.__extends || function () { var f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (h, c) { h.__proto__ = c; } || function (h, c) { for (var u in c)
                c.hasOwnProperty(u) && (h[u] = c[u]); }; return function (h, c) { f(h, c); function u() { this.constructor = h; } h.prototype = c === null ? Object.create(c) : (u.prototype = c.prototype, new u); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(12); function s(f, h) { var c = f.getAttribute("class") || ""; return c.split(/\s+/).filter(function (u) { return u.indexOf(h + "-") === 0; }); } var l = function (f) { i(h, f); function h() { return f !== null && f.apply(this, arguments) || this; } return h.keys = function (c) { return (c.getAttribute("class") || "").split(/\s+/).map(function (u) { return u.split("-").slice(0, -1).join("-"); }); }, h.prototype.add = function (c, u) { return this.canAdd(c, u) ? (this.remove(c), c.classList.add(this.keyName + "-" + u), !0) : !1; }, h.prototype.remove = function (c) { var u = s(c, this.keyName); u.forEach(function (p) { c.classList.remove(p); }), c.classList.length === 0 && c.removeAttribute("class"); }, h.prototype.value = function (c) { var u = s(c, this.keyName)[0] || "", p = u.slice(this.keyName.length + 1); return this.canAdd(c, p) ? p : ""; }, h; }(a.default); r.default = l; }, function (n, r, o) { var i = this && this.__extends || function () { var f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (h, c) { h.__proto__ = c; } || function (h, c) { for (var u in c)
                c.hasOwnProperty(u) && (h[u] = c[u]); }; return function (h, c) { f(h, c); function u() { this.constructor = h; } h.prototype = c === null ? Object.create(c) : (u.prototype = c.prototype, new u); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(12); function s(f) { var h = f.split("-"), c = h.slice(1).map(function (u) { return u[0].toUpperCase() + u.slice(1); }).join(""); return h[0] + c; } var l = function (f) { i(h, f); function h() { return f !== null && f.apply(this, arguments) || this; } return h.keys = function (c) { return (c.getAttribute("style") || "").split(";").map(function (u) { var p = u.split(":"); return p[0].trim(); }); }, h.prototype.add = function (c, u) { return this.canAdd(c, u) ? (c.style[s(this.keyName)] = u, !0) : !1; }, h.prototype.remove = function (c) { c.style[s(this.keyName)] = "", c.getAttribute("style") || c.removeAttribute("style"); }, h.prototype.value = function (c) { var u = c.style[s(this.keyName)]; return this.canAdd(c, u) ? u : ""; }, h; }(a.default); r.default = l; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function l(f, h) { for (var c = 0; c < h.length; c++) {
                var u = h[c];
                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(f, u.key, u);
            } } return function (f, h, c) { return h && l(f.prototype, h), c && l(f, c), f; }; }(); function a(l, f) { if (!(l instanceof f))
                throw new TypeError("Cannot call a class as a function"); } var s = function () { function l(f, h) { a(this, l), this.quill = f, this.options = h, this.modules = {}; } return i(l, [{ key: "init", value: function () { var h = this; Object.keys(this.options.modules).forEach(function (c) { h.modules[c] == null && h.addModule(c); }); } }, { key: "addModule", value: function (h) { var c = this.quill.constructor.import("modules/" + h); return this.modules[h] = new c(this.quill, this.options.modules[h] || {}), this.modules[h]; } }]), l; }(); s.DEFAULTS = { modules: {} }, s.themes = { default: s }, r.default = s; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function m(d, w) { for (var y = 0; y < w.length; y++) {
                var _ = w[y];
                _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(d, _.key, _);
            } } return function (d, w, y) { return w && m(d.prototype, w), y && m(d, y), d; }; }(), a = function m(d, w, y) { d === null && (d = Function.prototype); var _ = Object.getOwnPropertyDescriptor(d, w); if (_ === void 0) {
                var T = Object.getPrototypeOf(d);
                return T === null ? void 0 : m(T, w, y);
            }
            else {
                if ("value" in _)
                    return _.value;
                var S = _.get;
                return S === void 0 ? void 0 : S.call(y);
            } }, s = o(0), l = c(s), f = o(7), h = c(f); function c(m) { return m && m.__esModule ? m : { default: m }; } function u(m, d) { if (!(m instanceof d))
                throw new TypeError("Cannot call a class as a function"); } function p(m, d) { if (!m)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return d && (typeof d == "object" || typeof d == "function") ? d : m; } function g(m, d) { if (typeof d != "function" && d !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof d); m.prototype = Object.create(d && d.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), d && (Object.setPrototypeOf ? Object.setPrototypeOf(m, d) : m.__proto__ = d); } var v = "\uFEFF", x = function (m) { g(d, m); function d(w) { u(this, d); var y = p(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, w)); return y.contentNode = document.createElement("span"), y.contentNode.setAttribute("contenteditable", !1), [].slice.call(y.domNode.childNodes).forEach(function (_) { y.contentNode.appendChild(_); }), y.leftGuard = document.createTextNode(v), y.rightGuard = document.createTextNode(v), y.domNode.appendChild(y.leftGuard), y.domNode.appendChild(y.contentNode), y.domNode.appendChild(y.rightGuard), y; } return i(d, [{ key: "index", value: function (y, _) { return y === this.leftGuard ? 0 : y === this.rightGuard ? 1 : a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "index", this).call(this, y, _); } }, { key: "restore", value: function (y) { var _ = void 0, T = void 0, S = y.data.split(v).join(""); if (y === this.leftGuard)
                        if (this.prev instanceof h.default) {
                            var N = this.prev.length();
                            this.prev.insertAt(N, S), _ = { startNode: this.prev.domNode, startOffset: N + S.length };
                        }
                        else
                            T = document.createTextNode(S), this.parent.insertBefore(l.default.create(T), this), _ = { startNode: T, startOffset: S.length };
                    else
                        y === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, S), _ = { startNode: this.next.domNode, startOffset: S.length }) : (T = document.createTextNode(S), this.parent.insertBefore(l.default.create(T), this.next), _ = { startNode: T, startOffset: S.length })); return y.data = v, _; } }, { key: "update", value: function (y, _) { var T = this; y.forEach(function (S) { if (S.type === "characterData" && (S.target === T.leftGuard || S.target === T.rightGuard)) {
                        var N = T.restore(S.target);
                        N && (_.range = N);
                    } }); } }]), d; }(l.default.Embed); r.default = x; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.AlignStyle = r.AlignClass = r.AlignAttribute = void 0; var i = o(0), a = s(i); function s(u) { return u && u.__esModule ? u : { default: u }; } var l = { scope: a.default.Scope.BLOCK, whitelist: ["right", "center", "justify"] }, f = new a.default.Attributor.Attribute("align", "align", l), h = new a.default.Attributor.Class("align", "ql-align", l), c = new a.default.Attributor.Style("align", "text-align", l); r.AlignAttribute = f, r.AlignClass = h, r.AlignStyle = c; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.BackgroundStyle = r.BackgroundClass = void 0; var i = o(0), a = l(i), s = o(26); function l(c) { return c && c.__esModule ? c : { default: c }; } var f = new a.default.Attributor.Class("background", "ql-bg", { scope: a.default.Scope.INLINE }), h = new s.ColorAttributor("background", "background-color", { scope: a.default.Scope.INLINE }); r.BackgroundClass = f, r.BackgroundStyle = h; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.DirectionStyle = r.DirectionClass = r.DirectionAttribute = void 0; var i = o(0), a = s(i); function s(u) { return u && u.__esModule ? u : { default: u }; } var l = { scope: a.default.Scope.BLOCK, whitelist: ["rtl"] }, f = new a.default.Attributor.Attribute("direction", "dir", l), h = new a.default.Attributor.Class("direction", "ql-direction", l), c = new a.default.Attributor.Style("direction", "direction", l); r.DirectionAttribute = f, r.DirectionClass = h, r.DirectionStyle = c; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.FontClass = r.FontStyle = void 0; var i = function () { function m(d, w) { for (var y = 0; y < w.length; y++) {
                var _ = w[y];
                _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(d, _.key, _);
            } } return function (d, w, y) { return w && m(d.prototype, w), y && m(d, y), d; }; }(), a = function m(d, w, y) { d === null && (d = Function.prototype); var _ = Object.getOwnPropertyDescriptor(d, w); if (_ === void 0) {
                var T = Object.getPrototypeOf(d);
                return T === null ? void 0 : m(T, w, y);
            }
            else {
                if ("value" in _)
                    return _.value;
                var S = _.get;
                return S === void 0 ? void 0 : S.call(y);
            } }, s = o(0), l = f(s); function f(m) { return m && m.__esModule ? m : { default: m }; } function h(m, d) { if (!(m instanceof d))
                throw new TypeError("Cannot call a class as a function"); } function c(m, d) { if (!m)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return d && (typeof d == "object" || typeof d == "function") ? d : m; } function u(m, d) { if (typeof d != "function" && d !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof d); m.prototype = Object.create(d && d.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), d && (Object.setPrototypeOf ? Object.setPrototypeOf(m, d) : m.__proto__ = d); } var p = { scope: l.default.Scope.INLINE, whitelist: ["serif", "monospace"] }, g = new l.default.Attributor.Class("font", "ql-font", p), v = function (m) { u(d, m); function d() { return h(this, d), c(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments)); } return i(d, [{ key: "value", value: function (y) { return a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "value", this).call(this, y).replace(/["']/g, ""); } }]), d; }(l.default.Attributor.Style), x = new v("font", "font-family", p); r.FontStyle = x, r.FontClass = g; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.SizeStyle = r.SizeClass = void 0; var i = o(0), a = s(i); function s(h) { return h && h.__esModule ? h : { default: h }; } var l = new a.default.Attributor.Class("size", "ql-size", { scope: a.default.Scope.INLINE, whitelist: ["small", "large", "huge"] }), f = new a.default.Attributor.Style("size", "font-size", { scope: a.default.Scope.INLINE, whitelist: ["10px", "18px", "32px"] }); r.SizeClass = l, r.SizeStyle = f; }, function (n, r, o) { n.exports = { align: { "": o(76), center: o(77), right: o(78), justify: o(79) }, background: o(80), blockquote: o(81), bold: o(82), clean: o(83), code: o(58), "code-block": o(58), color: o(84), direction: { "": o(85), rtl: o(86) }, float: { center: o(87), full: o(88), left: o(89), right: o(90) }, formula: o(91), header: { 1: o(92), 2: o(93) }, italic: o(94), image: o(95), indent: { "+1": o(96), "-1": o(97) }, link: o(98), list: { ordered: o(99), bullet: o(100), check: o(101) }, script: { sub: o(102), super: o(103) }, strike: o(104), underline: o(105), video: o(106) }; }, function (n, r, o) {
                Object.defineProperty(r, "__esModule", { value: !0 }), r.getLastChangeIndex = r.default = void 0;
                var i = function () { function w(y, _) { for (var T = 0; T < _.length; T++) {
                    var S = _[T];
                    S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(y, S.key, S);
                } } return function (y, _, T) { return _ && w(y.prototype, _), T && w(y, T), y; }; }(), a = o(0), s = u(a), l = o(5), f = u(l), h = o(9), c = u(h);
                function u(w) { return w && w.__esModule ? w : { default: w }; }
                function p(w, y) { if (!(w instanceof y))
                    throw new TypeError("Cannot call a class as a function"); }
                function g(w, y) { if (!w)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return y && (typeof y == "object" || typeof y == "function") ? y : w; }
                function v(w, y) { if (typeof y != "function" && y !== null)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof y); w.prototype = Object.create(y && y.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(w, y) : w.__proto__ = y); }
                var x = function (w) { v(y, w); function y(_, T) { p(this, y); var S = g(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, _, T)); return S.lastRecorded = 0, S.ignoreChange = !1, S.clear(), S.quill.on(f.default.events.EDITOR_CHANGE, function (N, j, O, C) { N !== f.default.events.TEXT_CHANGE || S.ignoreChange || (!S.options.userOnly || C === f.default.sources.USER ? S.record(j, O) : S.transform(j)); }), S.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, S.undo.bind(S)), S.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, S.redo.bind(S)), /Win/i.test(navigator.platform) && S.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, S.redo.bind(S)), S; } return i(y, [{ key: "change", value: function (T, S) { if (this.stack[T].length !== 0) {
                            var N = this.stack[T].pop();
                            this.stack[S].push(N), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(N[T], f.default.sources.USER), this.ignoreChange = !1;
                            var j = d(N[T]);
                            this.quill.setSelection(j);
                        } } }, { key: "clear", value: function () { this.stack = { undo: [], redo: [] }; } }, { key: "cutoff", value: function () { this.lastRecorded = 0; } }, { key: "record", value: function (T, S) { if (T.ops.length !== 0) {
                            this.stack.redo = [];
                            var N = this.quill.getContents().diff(S), j = Date.now();
                            if (this.lastRecorded + this.options.delay > j && this.stack.undo.length > 0) {
                                var O = this.stack.undo.pop();
                                N = N.compose(O.undo), T = O.redo.compose(T);
                            }
                            else
                                this.lastRecorded = j;
                            this.stack.undo.push({ redo: T, undo: N }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                        } } }, { key: "redo", value: function () { this.change("redo", "undo"); } }, { key: "transform", value: function (T) { this.stack.undo.forEach(function (S) { S.undo = T.transform(S.undo, !0), S.redo = T.transform(S.redo, !0); }), this.stack.redo.forEach(function (S) { S.undo = T.transform(S.undo, !0), S.redo = T.transform(S.redo, !0); }); } }, { key: "undo", value: function () { this.change("undo", "redo"); } }]), y; }(c.default);
                x.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
                function m(w) {
                    var y = w.ops[w.ops.length - 1];
                    return y == null ? !1 : y.insert != null ? typeof y.insert == "string" && y.insert.endsWith(`
`) : y.attributes != null ? Object.keys(y.attributes).some(function (_) { return s.default.query(_, s.default.Scope.BLOCK) != null; }) : !1;
                }
                function d(w) { var y = w.reduce(function (T, S) { return T += S.delete || 0, T; }, 0), _ = w.length() - y; return m(w) && (_ -= 1), _; }
                r.default = x, r.getLastChangeIndex = d;
            }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.BaseTooltip = void 0; var i = function () { function M(U, K) { for (var G = 0; G < K.length; G++) {
                var L = K[G];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(U, L.key, L);
            } } return function (U, K, G) { return K && M(U.prototype, K), G && M(U, G), U; }; }(), a = function M(U, K, G) { U === null && (U = Function.prototype); var L = Object.getOwnPropertyDescriptor(U, K); if (L === void 0) {
                var z = Object.getPrototypeOf(U);
                return z === null ? void 0 : M(z, K, G);
            }
            else {
                if ("value" in L)
                    return L.value;
                var Z = L.get;
                return Z === void 0 ? void 0 : Z.call(G);
            } }, s = o(3), l = j(s), f = o(2), h = j(f), c = o(8), u = j(c), p = o(23), g = j(p), v = o(34), x = j(v), m = o(59), d = j(m), w = o(60), y = j(w), _ = o(28), T = j(_), S = o(61), N = j(S); function j(M) { return M && M.__esModule ? M : { default: M }; } function O(M, U) { if (!(M instanceof U))
                throw new TypeError("Cannot call a class as a function"); } function C(M, U) { if (!M)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return U && (typeof U == "object" || typeof U == "function") ? U : M; } function k(M, U) { if (typeof U != "function" && U !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof U); M.prototype = Object.create(U && U.prototype, { constructor: { value: M, enumerable: !1, writable: !0, configurable: !0 } }), U && (Object.setPrototypeOf ? Object.setPrototypeOf(M, U) : M.__proto__ = U); } var P = [!1, "center", "right", "justify"], R = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], $ = [!1, "serif", "monospace"], q = ["1", "2", "3", !1], H = ["small", !1, "large", "huge"], V = function (M) { k(U, M); function U(K, G) { O(this, U); var L = C(this, (U.__proto__ || Object.getPrototypeOf(U)).call(this, K, G)), z = function Z(Q) { if (!document.body.contains(K.root))
                return document.body.removeEventListener("click", Z); L.tooltip != null && !L.tooltip.root.contains(Q.target) && document.activeElement !== L.tooltip.textbox && !L.quill.hasFocus() && L.tooltip.hide(), L.pickers != null && L.pickers.forEach(function (X) { X.container.contains(Q.target) || X.close(); }); }; return K.emitter.listenDOM("click", document.body, z), L; } return i(U, [{ key: "addModule", value: function (G) { var L = a(U.prototype.__proto__ || Object.getPrototypeOf(U.prototype), "addModule", this).call(this, G); return G === "toolbar" && this.extendToolbar(L), L; } }, { key: "buildButtons", value: function (G, L) { G.forEach(function (z) { var Z = z.getAttribute("class") || ""; Z.split(/\s+/).forEach(function (Q) { if (Q.startsWith("ql-") && (Q = Q.slice(3), L[Q] != null))
                        if (Q === "direction")
                            z.innerHTML = L[Q][""] + L[Q].rtl;
                        else if (typeof L[Q] == "string")
                            z.innerHTML = L[Q];
                        else {
                            var X = z.value || "";
                            X != null && L[Q][X] && (z.innerHTML = L[Q][X]);
                        } }); }); } }, { key: "buildPickers", value: function (G, L) { var z = this; this.pickers = G.map(function (Q) { if (Q.classList.contains("ql-align"))
                        return Q.querySelector("option") == null && A(Q, P), new y.default(Q, L.align); if (Q.classList.contains("ql-background") || Q.classList.contains("ql-color")) {
                        var X = Q.classList.contains("ql-background") ? "background" : "color";
                        return Q.querySelector("option") == null && A(Q, R, X === "background" ? "#ffffff" : "#000000"), new d.default(Q, L[X]);
                    }
                    else
                        return Q.querySelector("option") == null && (Q.classList.contains("ql-font") ? A(Q, $) : Q.classList.contains("ql-header") ? A(Q, q) : Q.classList.contains("ql-size") && A(Q, H)), new T.default(Q); }); var Z = function () { z.pickers.forEach(function (X) { X.update(); }); }; this.quill.on(u.default.events.EDITOR_CHANGE, Z); } }]), U; }(x.default); V.DEFAULTS = (0, l.default)(!0, {}, x.default.DEFAULTS, { modules: { toolbar: { handlers: { formula: function () { this.quill.theme.tooltip.edit("formula"); }, image: function () { var U = this, K = this.container.querySelector("input.ql-image[type=file]"); K == null && (K = document.createElement("input"), K.setAttribute("type", "file"), K.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), K.classList.add("ql-image"), K.addEventListener("change", function () { if (K.files != null && K.files[0] != null) {
                                var G = new FileReader;
                                G.onload = function (L) { var z = U.quill.getSelection(!0); U.quill.updateContents(new h.default().retain(z.index).delete(z.length).insert({ image: L.target.result }), u.default.sources.USER), U.quill.setSelection(z.index + 1, u.default.sources.SILENT), K.value = ""; }, G.readAsDataURL(K.files[0]);
                            } }), this.container.appendChild(K)), K.click(); }, video: function () { this.quill.theme.tooltip.edit("video"); } } } } }); var F = function (M) { k(U, M); function U(K, G) { O(this, U); var L = C(this, (U.__proto__ || Object.getPrototypeOf(U)).call(this, K, G)); return L.textbox = L.root.querySelector('input[type="text"]'), L.listen(), L; } return i(U, [{ key: "listen", value: function () { var G = this; this.textbox.addEventListener("keydown", function (L) { g.default.match(L, "enter") ? (G.save(), L.preventDefault()) : g.default.match(L, "escape") && (G.cancel(), L.preventDefault()); }); } }, { key: "cancel", value: function () { this.hide(); } }, { key: "edit", value: function () { var G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null; this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), L != null ? this.textbox.value = L : G !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + G) || ""), this.root.setAttribute("data-mode", G); } }, { key: "restoreFocus", value: function () { var G = this.quill.scrollingContainer.scrollTop; this.quill.focus(), this.quill.scrollingContainer.scrollTop = G; } }, { key: "save", value: function () { var G = this.textbox.value; switch (this.root.getAttribute("data-mode")) {
                        case "link": {
                            var L = this.quill.root.scrollTop;
                            this.linkRange ? (this.quill.formatText(this.linkRange, "link", G, u.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", G, u.default.sources.USER)), this.quill.root.scrollTop = L;
                            break;
                        }
                        case "video": G = D(G);
                        case "formula": {
                            if (!G)
                                break;
                            var z = this.quill.getSelection(!0);
                            if (z != null) {
                                var Z = z.index + z.length;
                                this.quill.insertEmbed(Z, this.root.getAttribute("data-mode"), G, u.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(Z + 1, " ", u.default.sources.USER), this.quill.setSelection(Z + 2, u.default.sources.USER);
                            }
                            break;
                        }
                    } this.textbox.value = "", this.hide(); } }]), U; }(N.default); function D(M) { var U = M.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || M.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/); return U ? (U[1] || "https") + "://www.youtube.com/embed/" + U[2] + "?showinfo=0" : (U = M.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (U[1] || "https") + "://player.vimeo.com/video/" + U[2] + "/" : M; } function A(M, U) { var K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; U.forEach(function (G) { var L = document.createElement("option"); G === K ? L.setAttribute("selected", "selected") : L.setAttribute("value", G), M.appendChild(L); }); } r.BaseTooltip = F, r.default = V; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function a() { this.head = this.tail = null, this.length = 0; } return a.prototype.append = function () { for (var s = [], l = 0; l < arguments.length; l++)
                s[l] = arguments[l]; this.insertBefore(s[0], null), s.length > 1 && this.append.apply(this, s.slice(1)); }, a.prototype.contains = function (s) { for (var l, f = this.iterator(); l = f();)
                if (l === s)
                    return !0; return !1; }, a.prototype.insertBefore = function (s, l) { s && (s.next = l, l != null ? (s.prev = l.prev, l.prev != null && (l.prev.next = s), l.prev = s, l === this.head && (this.head = s)) : this.tail != null ? (this.tail.next = s, s.prev = this.tail, this.tail = s) : (s.prev = null, this.head = this.tail = s), this.length += 1); }, a.prototype.offset = function (s) { for (var l = 0, f = this.head; f != null;) {
                if (f === s)
                    return l;
                l += f.length(), f = f.next;
            } return -1; }, a.prototype.remove = function (s) { this.contains(s) && (s.prev != null && (s.prev.next = s.next), s.next != null && (s.next.prev = s.prev), s === this.head && (this.head = s.next), s === this.tail && (this.tail = s.prev), this.length -= 1); }, a.prototype.iterator = function (s) { return s === void 0 && (s = this.head), function () { var l = s; return s != null && (s = s.next), l; }; }, a.prototype.find = function (s, l) { l === void 0 && (l = !1); for (var f, h = this.iterator(); f = h();) {
                var c = f.length();
                if (s < c || l && s === c && (f.next == null || f.next.length() !== 0))
                    return [f, s];
                s -= c;
            } return [null, 0]; }, a.prototype.forEach = function (s) { for (var l, f = this.iterator(); l = f();)
                s(l); }, a.prototype.forEachAt = function (s, l, f) { if (!(l <= 0))
                for (var h = this.find(s), c = h[0], u = h[1], p, g = s - u, v = this.iterator(c); (p = v()) && g < s + l;) {
                    var x = p.length();
                    s > g ? f(p, s - g, Math.min(l, g + x - s)) : f(p, 0, Math.min(x, s + l - g)), g += x;
                } }, a.prototype.map = function (s) { return this.reduce(function (l, f) { return l.push(s(f)), l; }, []); }, a.prototype.reduce = function (s, l) { for (var f, h = this.iterator(); f = h();)
                l = s(l, f); return l; }, a; }(); r.default = i; }, function (n, r, o) { var i = this && this.__extends || function () { var c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (u, p) { u.__proto__ = p; } || function (u, p) { for (var g in p)
                p.hasOwnProperty(g) && (u[g] = p[g]); }; return function (u, p) { c(u, p); function g() { this.constructor = u; } u.prototype = p === null ? Object.create(p) : (g.prototype = p.prototype, new g); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(17), s = o(1), l = { attributes: !0, characterData: !0, characterDataOldValue: !0, childList: !0, subtree: !0 }, f = 100, h = function (c) { i(u, c); function u(p) { var g = c.call(this, p) || this; return g.scroll = g, g.observer = new MutationObserver(function (v) { g.update(v); }), g.observer.observe(g.domNode, l), g.attach(), g; } return u.prototype.detach = function () { c.prototype.detach.call(this), this.observer.disconnect(); }, u.prototype.deleteAt = function (p, g) { this.update(), p === 0 && g === this.length() ? this.children.forEach(function (v) { v.remove(); }) : c.prototype.deleteAt.call(this, p, g); }, u.prototype.formatAt = function (p, g, v, x) { this.update(), c.prototype.formatAt.call(this, p, g, v, x); }, u.prototype.insertAt = function (p, g, v) { this.update(), c.prototype.insertAt.call(this, p, g, v); }, u.prototype.optimize = function (p, g) { var v = this; p === void 0 && (p = []), g === void 0 && (g = {}), c.prototype.optimize.call(this, g); for (var x = [].slice.call(this.observer.takeRecords()); x.length > 0;)
                p.push(x.pop()); for (var m = function (_, T) { T === void 0 && (T = !0), !(_ == null || _ === v) && _.domNode.parentNode != null && (_.domNode[s.DATA_KEY].mutations == null && (_.domNode[s.DATA_KEY].mutations = []), T && m(_.parent)); }, d = function (_) { _.domNode[s.DATA_KEY] == null || _.domNode[s.DATA_KEY].mutations == null || (_ instanceof a.default && _.children.forEach(d), _.optimize(g)); }, w = p, y = 0; w.length > 0; y += 1) {
                if (y >= f)
                    throw new Error("[Parchment] Maximum optimize iterations reached");
                for (w.forEach(function (_) { var T = s.find(_.target, !0); T != null && (T.domNode === _.target && (_.type === "childList" ? (m(s.find(_.previousSibling, !1)), [].forEach.call(_.addedNodes, function (S) { var N = s.find(S, !1); m(N, !1), N instanceof a.default && N.children.forEach(function (j) { m(j, !1); }); })) : _.type === "attributes" && m(T.prev)), m(T)); }), this.children.forEach(d), w = [].slice.call(this.observer.takeRecords()), x = w.slice(); x.length > 0;)
                    p.push(x.pop());
            } }, u.prototype.update = function (p, g) { var v = this; g === void 0 && (g = {}), p = p || this.observer.takeRecords(), p.map(function (x) { var m = s.find(x.target, !0); return m == null ? null : m.domNode[s.DATA_KEY].mutations == null ? (m.domNode[s.DATA_KEY].mutations = [x], m) : (m.domNode[s.DATA_KEY].mutations.push(x), null); }).forEach(function (x) { x == null || x === v || x.domNode[s.DATA_KEY] == null || x.update(x.domNode[s.DATA_KEY].mutations || [], g); }), this.domNode[s.DATA_KEY].mutations != null && c.prototype.update.call(this, this.domNode[s.DATA_KEY].mutations, g), this.optimize(p, g); }, u.blotName = "scroll", u.defaultChild = "block", u.scope = s.Scope.BLOCK_BLOT, u.tagName = "DIV", u; }(a.default); r.default = h; }, function (n, r, o) { var i = this && this.__extends || function () { var h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, u) { c.__proto__ = u; } || function (c, u) { for (var p in u)
                u.hasOwnProperty(p) && (c[p] = u[p]); }; return function (c, u) { h(c, u); function p() { this.constructor = c; } c.prototype = u === null ? Object.create(u) : (p.prototype = u.prototype, new p); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(18), s = o(1); function l(h, c) { if (Object.keys(h).length !== Object.keys(c).length)
                return !1; for (var u in h)
                if (h[u] !== c[u])
                    return !1; return !0; } var f = function (h) { i(c, h); function c() { return h !== null && h.apply(this, arguments) || this; } return c.formats = function (u) { if (u.tagName !== c.tagName)
                return h.formats.call(this, u); }, c.prototype.format = function (u, p) { var g = this; u === this.statics.blotName && !p ? (this.children.forEach(function (v) { v instanceof a.default || (v = v.wrap(c.blotName, !0)), g.attributes.copy(v); }), this.unwrap()) : h.prototype.format.call(this, u, p); }, c.prototype.formatAt = function (u, p, g, v) { if (this.formats()[g] != null || s.query(g, s.Scope.ATTRIBUTE)) {
                var x = this.isolate(u, p);
                x.format(g, v);
            }
            else
                h.prototype.formatAt.call(this, u, p, g, v); }, c.prototype.optimize = function (u) { h.prototype.optimize.call(this, u); var p = this.formats(); if (Object.keys(p).length === 0)
                return this.unwrap(); var g = this.next; g instanceof c && g.prev === this && l(p, g.formats()) && (g.moveChildren(this), g.remove()); }, c.blotName = "inline", c.scope = s.Scope.INLINE_BLOT, c.tagName = "SPAN", c; }(a.default); r.default = f; }, function (n, r, o) { var i = this && this.__extends || function () { var f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (h, c) { h.__proto__ = c; } || function (h, c) { for (var u in c)
                c.hasOwnProperty(u) && (h[u] = c[u]); }; return function (h, c) { f(h, c); function u() { this.constructor = h; } h.prototype = c === null ? Object.create(c) : (u.prototype = c.prototype, new u); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(18), s = o(1), l = function (f) { i(h, f); function h() { return f !== null && f.apply(this, arguments) || this; } return h.formats = function (c) { var u = s.query(h.blotName).tagName; if (c.tagName !== u)
                return f.formats.call(this, c); }, h.prototype.format = function (c, u) { s.query(c, s.Scope.BLOCK) != null && (c === this.statics.blotName && !u ? this.replaceWith(h.blotName) : f.prototype.format.call(this, c, u)); }, h.prototype.formatAt = function (c, u, p, g) { s.query(p, s.Scope.BLOCK) != null ? this.format(p, g) : f.prototype.formatAt.call(this, c, u, p, g); }, h.prototype.insertAt = function (c, u, p) { if (p == null || s.query(u, s.Scope.INLINE) != null)
                f.prototype.insertAt.call(this, c, u, p);
            else {
                var g = this.split(c), v = s.create(u, p);
                g.parent.insertBefore(v, g);
            } }, h.prototype.update = function (c, u) { navigator.userAgent.match(/Trident/) ? this.build() : f.prototype.update.call(this, c, u); }, h.blotName = "block", h.scope = s.Scope.BLOCK_BLOT, h.tagName = "P", h; }(a.default); r.default = l; }, function (n, r, o) { var i = this && this.__extends || function () { var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (f, h) { f.__proto__ = h; } || function (f, h) { for (var c in h)
                h.hasOwnProperty(c) && (f[c] = h[c]); }; return function (f, h) { l(f, h); function c() { this.constructor = f; } f.prototype = h === null ? Object.create(h) : (c.prototype = h.prototype, new c); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(19), s = function (l) { i(f, l); function f() { return l !== null && l.apply(this, arguments) || this; } return f.formats = function (h) { }, f.prototype.format = function (h, c) { l.prototype.formatAt.call(this, 0, this.length(), h, c); }, f.prototype.formatAt = function (h, c, u, p) { h === 0 && c === this.length() ? this.format(u, p) : l.prototype.formatAt.call(this, h, c, u, p); }, f.prototype.formats = function () { return this.statics.formats(this.domNode); }, f; }(a.default); r.default = s; }, function (n, r, o) { var i = this && this.__extends || function () { var f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (h, c) { h.__proto__ = c; } || function (h, c) { for (var u in c)
                c.hasOwnProperty(u) && (h[u] = c[u]); }; return function (h, c) { f(h, c); function u() { this.constructor = h; } h.prototype = c === null ? Object.create(c) : (u.prototype = c.prototype, new u); }; }(); Object.defineProperty(r, "__esModule", { value: !0 }); var a = o(19), s = o(1), l = function (f) { i(h, f); function h(c) { var u = f.call(this, c) || this; return u.text = u.statics.value(u.domNode), u; } return h.create = function (c) { return document.createTextNode(c); }, h.value = function (c) { var u = c.data; return u.normalize && (u = u.normalize()), u; }, h.prototype.deleteAt = function (c, u) { this.domNode.data = this.text = this.text.slice(0, c) + this.text.slice(c + u); }, h.prototype.index = function (c, u) { return this.domNode === c ? u : -1; }, h.prototype.insertAt = function (c, u, p) { p == null ? (this.text = this.text.slice(0, c) + u + this.text.slice(c), this.domNode.data = this.text) : f.prototype.insertAt.call(this, c, u, p); }, h.prototype.length = function () { return this.text.length; }, h.prototype.optimize = function (c) { f.prototype.optimize.call(this, c), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof h && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove()); }, h.prototype.position = function (c, u) { return [this.domNode, c]; }, h.prototype.split = function (c, u) { if (u === void 0 && (u = !1), !u) {
                if (c === 0)
                    return this;
                if (c === this.length())
                    return this.next;
            } var p = s.create(this.domNode.splitText(c)); return this.parent.insertBefore(p, this.next), this.text = this.statics.value(this.domNode), p; }, h.prototype.update = function (c, u) { var p = this; c.some(function (g) { return g.type === "characterData" && g.target === p.domNode; }) && (this.text = this.statics.value(this.domNode)); }, h.prototype.value = function () { return this.text; }, h.blotName = "text", h.scope = s.Scope.INLINE_BLOT, h; }(a.default); r.default = l; }, function (n, r, o) { var i = document.createElement("div"); if (i.classList.toggle("test-class", !1), i.classList.contains("test-class")) {
                var a = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function (s, l) { return arguments.length > 1 && !this.contains(s) == !l ? l : a.call(this, s); };
            } String.prototype.startsWith || (String.prototype.startsWith = function (s, l) { return l = l || 0, this.substr(l, s.length) === s; }), String.prototype.endsWith || (String.prototype.endsWith = function (s, l) { var f = this.toString(); (typeof l != "number" || !isFinite(l) || Math.floor(l) !== l || l > f.length) && (l = f.length), l -= s.length; var h = f.indexOf(s, l); return h !== -1 && h === l; }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function (l) { if (this === null)
                    throw new TypeError("Array.prototype.find called on null or undefined"); if (typeof l != "function")
                    throw new TypeError("predicate must be a function"); for (var f = Object(this), h = f.length >>> 0, c = arguments[1], u, p = 0; p < h; p++)
                    if (u = f[p], l.call(c, u, p, f))
                        return u; } }), document.addEventListener("DOMContentLoaded", function () { document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1); }); }, function (n, r) { var o = -1, i = 1, a = 0; function s(y, _, T) { if (y == _)
                return y ? [[a, y]] : []; (T < 0 || y.length < T) && (T = null); var S = c(y, _), N = y.substring(0, S); y = y.substring(S), _ = _.substring(S), S = u(y, _); var j = y.substring(y.length - S); y = y.substring(0, y.length - S), _ = _.substring(0, _.length - S); var O = l(y, _); return N && O.unshift([a, N]), j && O.push([a, j]), g(O), T != null && (O = m(O, T)), O = d(O), O; } function l(y, _) { var T; if (!y)
                return [[i, _]]; if (!_)
                return [[o, y]]; var S = y.length > _.length ? y : _, N = y.length > _.length ? _ : y, j = S.indexOf(N); if (j != -1)
                return T = [[i, S.substring(0, j)], [a, N], [i, S.substring(j + N.length)]], y.length > _.length && (T[0][0] = T[2][0] = o), T; if (N.length == 1)
                return [[o, y], [i, _]]; var O = p(y, _); if (O) {
                var C = O[0], k = O[1], P = O[2], R = O[3], $ = O[4], q = s(C, P), H = s(k, R);
                return q.concat([[a, $]], H);
            } return f(y, _); } function f(y, _) { for (var T = y.length, S = _.length, N = Math.ceil((T + S) / 2), j = N, O = 2 * N, C = new Array(O), k = new Array(O), P = 0; P < O; P++)
                C[P] = -1, k[P] = -1; C[j + 1] = 0, k[j + 1] = 0; for (var R = T - S, $ = R % 2 != 0, q = 0, H = 0, V = 0, F = 0, D = 0; D < N; D++) {
                for (var A = -D + q; A <= D - H; A += 2) {
                    var M = j + A, U;
                    A == -D || A != D && C[M - 1] < C[M + 1] ? U = C[M + 1] : U = C[M - 1] + 1;
                    for (var K = U - A; U < T && K < S && y.charAt(U) == _.charAt(K);)
                        U++, K++;
                    if (C[M] = U, U > T)
                        H += 2;
                    else if (K > S)
                        q += 2;
                    else if ($) {
                        var G = j + R - A;
                        if (G >= 0 && G < O && k[G] != -1) {
                            var L = T - k[G];
                            if (U >= L)
                                return h(y, _, U, K);
                        }
                    }
                }
                for (var z = -D + V; z <= D - F; z += 2) {
                    var G = j + z, L;
                    z == -D || z != D && k[G - 1] < k[G + 1] ? L = k[G + 1] : L = k[G - 1] + 1;
                    for (var Z = L - z; L < T && Z < S && y.charAt(T - L - 1) == _.charAt(S - Z - 1);)
                        L++, Z++;
                    if (k[G] = L, L > T)
                        F += 2;
                    else if (Z > S)
                        V += 2;
                    else if (!$) {
                        var M = j + R - z;
                        if (M >= 0 && M < O && C[M] != -1) {
                            var U = C[M], K = j + U - M;
                            if (L = T - L, U >= L)
                                return h(y, _, U, K);
                        }
                    }
                }
            } return [[o, y], [i, _]]; } function h(y, _, T, S) { var N = y.substring(0, T), j = _.substring(0, S), O = y.substring(T), C = _.substring(S), k = s(N, j), P = s(O, C); return k.concat(P); } function c(y, _) { if (!y || !_ || y.charAt(0) != _.charAt(0))
                return 0; for (var T = 0, S = Math.min(y.length, _.length), N = S, j = 0; T < N;)
                y.substring(j, N) == _.substring(j, N) ? (T = N, j = T) : S = N, N = Math.floor((S - T) / 2 + T); return N; } function u(y, _) { if (!y || !_ || y.charAt(y.length - 1) != _.charAt(_.length - 1))
                return 0; for (var T = 0, S = Math.min(y.length, _.length), N = S, j = 0; T < N;)
                y.substring(y.length - N, y.length - j) == _.substring(_.length - N, _.length - j) ? (T = N, j = T) : S = N, N = Math.floor((S - T) / 2 + T); return N; } function p(y, _) { var T = y.length > _.length ? y : _, S = y.length > _.length ? _ : y; if (T.length < 4 || S.length * 2 < T.length)
                return null; function N(H, V, F) { for (var D = H.substring(F, F + Math.floor(H.length / 4)), A = -1, M = "", U, K, G, L; (A = V.indexOf(D, A + 1)) != -1;) {
                var z = c(H.substring(F), V.substring(A)), Z = u(H.substring(0, F), V.substring(0, A));
                M.length < Z + z && (M = V.substring(A - Z, A) + V.substring(A, A + z), U = H.substring(0, F - Z), K = H.substring(F + z), G = V.substring(0, A - Z), L = V.substring(A + z));
            } return M.length * 2 >= H.length ? [U, K, G, L, M] : null; } var j = N(T, S, Math.ceil(T.length / 4)), O = N(T, S, Math.ceil(T.length / 2)), C; if (!j && !O)
                return null; O ? j ? C = j[4].length > O[4].length ? j : O : C = O : C = j; var k, P, R, $; y.length > _.length ? (k = C[0], P = C[1], R = C[2], $ = C[3]) : (R = C[0], $ = C[1], k = C[2], P = C[3]); var q = C[4]; return [k, P, R, $, q]; } function g(y) { y.push([a, ""]); for (var _ = 0, T = 0, S = 0, N = "", j = "", O; _ < y.length;)
                switch (y[_][0]) {
                    case i:
                        S++, j += y[_][1], _++;
                        break;
                    case o:
                        T++, N += y[_][1], _++;
                        break;
                    case a:
                        T + S > 1 ? (T !== 0 && S !== 0 && (O = c(j, N), O !== 0 && (_ - T - S > 0 && y[_ - T - S - 1][0] == a ? y[_ - T - S - 1][1] += j.substring(0, O) : (y.splice(0, 0, [a, j.substring(0, O)]), _++), j = j.substring(O), N = N.substring(O)), O = u(j, N), O !== 0 && (y[_][1] = j.substring(j.length - O) + y[_][1], j = j.substring(0, j.length - O), N = N.substring(0, N.length - O))), T === 0 ? y.splice(_ - S, T + S, [i, j]) : S === 0 ? y.splice(_ - T, T + S, [o, N]) : y.splice(_ - T - S, T + S, [o, N], [i, j]), _ = _ - T - S + (T ? 1 : 0) + (S ? 1 : 0) + 1) : _ !== 0 && y[_ - 1][0] == a ? (y[_ - 1][1] += y[_][1], y.splice(_, 1)) : _++, S = 0, T = 0, N = "", j = "";
                        break;
                } y[y.length - 1][1] === "" && y.pop(); var C = !1; for (_ = 1; _ < y.length - 1;)
                y[_ - 1][0] == a && y[_ + 1][0] == a && (y[_][1].substring(y[_][1].length - y[_ - 1][1].length) == y[_ - 1][1] ? (y[_][1] = y[_ - 1][1] + y[_][1].substring(0, y[_][1].length - y[_ - 1][1].length), y[_ + 1][1] = y[_ - 1][1] + y[_ + 1][1], y.splice(_ - 1, 1), C = !0) : y[_][1].substring(0, y[_ + 1][1].length) == y[_ + 1][1] && (y[_ - 1][1] += y[_ + 1][1], y[_][1] = y[_][1].substring(y[_ + 1][1].length) + y[_ + 1][1], y.splice(_ + 1, 1), C = !0)), _++; C && g(y); } var v = s; v.INSERT = i, v.DELETE = o, v.EQUAL = a, n.exports = v; function x(y, _) { if (_ === 0)
                return [a, y]; for (var T = 0, S = 0; S < y.length; S++) {
                var N = y[S];
                if (N[0] === o || N[0] === a) {
                    var j = T + N[1].length;
                    if (_ === j)
                        return [S + 1, y];
                    if (_ < j) {
                        y = y.slice();
                        var O = _ - T, C = [N[0], N[1].slice(0, O)], k = [N[0], N[1].slice(O)];
                        return y.splice(S, 1, C, k), [S + 1, y];
                    }
                    else
                        T = j;
                }
            } throw new Error("cursor_pos is out of bounds!"); } function m(y, _) { var T = x(y, _), S = T[1], N = T[0], j = S[N], O = S[N + 1]; if (j == null)
                return y; if (j[0] !== a)
                return y; if (O != null && j[1] + O[1] === O[1] + j[1])
                return S.splice(N, 2, O, j), w(S, N, 2); if (O != null && O[1].indexOf(j[1]) === 0) {
                S.splice(N, 2, [O[0], j[1]], [0, j[1]]);
                var C = O[1].slice(j[1].length);
                return C.length > 0 && S.splice(N + 2, 0, [O[0], C]), w(S, N, 3);
            }
            else
                return y; } function d(y) { for (var _ = !1, T = function (O) { return O.charCodeAt(0) >= 56320 && O.charCodeAt(0) <= 57343; }, S = function (O) { return O.charCodeAt(O.length - 1) >= 55296 && O.charCodeAt(O.length - 1) <= 56319; }, N = 2; N < y.length; N += 1)
                y[N - 2][0] === a && S(y[N - 2][1]) && y[N - 1][0] === o && T(y[N - 1][1]) && y[N][0] === i && T(y[N][1]) && (_ = !0, y[N - 1][1] = y[N - 2][1].slice(-1) + y[N - 1][1], y[N][1] = y[N - 2][1].slice(-1) + y[N][1], y[N - 2][1] = y[N - 2][1].slice(0, -1)); if (!_)
                return y; for (var j = [], N = 0; N < y.length; N += 1)
                y[N][1].length > 0 && j.push(y[N]); return j; } function w(y, _, T) { for (var S = _ + T - 1; S >= 0 && S >= _ - 1; S--)
                if (S + 1 < y.length) {
                    var N = y[S], j = y[S + 1];
                    N[0] === j[1] && y.splice(S, 2, [N[0], N[1] + j[1]]);
                } return y; } }, function (n, r) { r = n.exports = typeof Object.keys == "function" ? Object.keys : o, r.shim = o; function o(i) { var a = []; for (var s in i)
                a.push(s); return a; } }, function (n, r) { var o = function () { return Object.prototype.toString.call(arguments); }() == "[object Arguments]"; r = n.exports = o ? i : a, r.supported = i; function i(s) { return Object.prototype.toString.call(s) == "[object Arguments]"; } r.unsupported = a; function a(s) { return s && typeof s == "object" && typeof s.length == "number" && Object.prototype.hasOwnProperty.call(s, "callee") && !Object.prototype.propertyIsEnumerable.call(s, "callee") || !1; } }, function (n, r) { var o = Object.prototype.hasOwnProperty, i = "~"; function a() { } Object.create && (a.prototype = Object.create(null), new a().__proto__ || (i = !1)); function s(f, h, c) { this.fn = f, this.context = h, this.once = c || !1; } function l() { this._events = new a, this._eventsCount = 0; } l.prototype.eventNames = function () { var h = [], c, u; if (this._eventsCount === 0)
                return h; for (u in c = this._events)
                o.call(c, u) && h.push(i ? u.slice(1) : u); return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(c)) : h; }, l.prototype.listeners = function (h, c) { var u = i ? i + h : h, p = this._events[u]; if (c)
                return !!p; if (!p)
                return []; if (p.fn)
                return [p.fn]; for (var g = 0, v = p.length, x = new Array(v); g < v; g++)
                x[g] = p[g].fn; return x; }, l.prototype.emit = function (h, c, u, p, g, v) { var x = i ? i + h : h; if (!this._events[x])
                return !1; var m = this._events[x], d = arguments.length, w, y; if (m.fn) {
                switch (m.once && this.removeListener(h, m.fn, void 0, !0), d) {
                    case 1: return m.fn.call(m.context), !0;
                    case 2: return m.fn.call(m.context, c), !0;
                    case 3: return m.fn.call(m.context, c, u), !0;
                    case 4: return m.fn.call(m.context, c, u, p), !0;
                    case 5: return m.fn.call(m.context, c, u, p, g), !0;
                    case 6: return m.fn.call(m.context, c, u, p, g, v), !0;
                }
                for (y = 1, w = new Array(d - 1); y < d; y++)
                    w[y - 1] = arguments[y];
                m.fn.apply(m.context, w);
            }
            else {
                var _ = m.length, T;
                for (y = 0; y < _; y++)
                    switch (m[y].once && this.removeListener(h, m[y].fn, void 0, !0), d) {
                        case 1:
                            m[y].fn.call(m[y].context);
                            break;
                        case 2:
                            m[y].fn.call(m[y].context, c);
                            break;
                        case 3:
                            m[y].fn.call(m[y].context, c, u);
                            break;
                        case 4:
                            m[y].fn.call(m[y].context, c, u, p);
                            break;
                        default:
                            if (!w)
                                for (T = 1, w = new Array(d - 1); T < d; T++)
                                    w[T - 1] = arguments[T];
                            m[y].fn.apply(m[y].context, w);
                    }
            } return !0; }, l.prototype.on = function (h, c, u) { var p = new s(c, u || this), g = i ? i + h : h; return this._events[g] ? this._events[g].fn ? this._events[g] = [this._events[g], p] : this._events[g].push(p) : (this._events[g] = p, this._eventsCount++), this; }, l.prototype.once = function (h, c, u) { var p = new s(c, u || this, !0), g = i ? i + h : h; return this._events[g] ? this._events[g].fn ? this._events[g] = [this._events[g], p] : this._events[g].push(p) : (this._events[g] = p, this._eventsCount++), this; }, l.prototype.removeListener = function (h, c, u, p) { var g = i ? i + h : h; if (!this._events[g])
                return this; if (!c)
                return --this._eventsCount === 0 ? this._events = new a : delete this._events[g], this; var v = this._events[g]; if (v.fn)
                v.fn === c && (!p || v.once) && (!u || v.context === u) && (--this._eventsCount === 0 ? this._events = new a : delete this._events[g]);
            else {
                for (var x = 0, m = [], d = v.length; x < d; x++)
                    (v[x].fn !== c || p && !v[x].once || u && v[x].context !== u) && m.push(v[x]);
                m.length ? this._events[g] = m.length === 1 ? m[0] : m : --this._eventsCount === 0 ? this._events = new a : delete this._events[g];
            } return this; }, l.prototype.removeAllListeners = function (h) { var c; return h ? (c = i ? i + h : h, this._events[c] && (--this._eventsCount === 0 ? this._events = new a : delete this._events[c])) : (this._events = new a, this._eventsCount = 0), this; }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prototype.setMaxListeners = function () { return this; }, l.prefixed = i, l.EventEmitter = l, typeof n < "u" && (n.exports = l); }, function (n, r, o) {
                Object.defineProperty(r, "__esModule", { value: !0 }), r.matchText = r.matchSpacing = r.matchNewline = r.matchBlot = r.matchAttributor = r.default = void 0;
                var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (I) { return typeof I; } : function (I) { return I && typeof Symbol == "function" && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I; }, a = function () { function I(B, W) { var J = [], Y = !0, ee = !1, re = void 0; try {
                    for (var ue = B[Symbol.iterator](), Ne; !(Y = (Ne = ue.next()).done) && (J.push(Ne.value), !(W && J.length === W)); Y = !0)
                        ;
                }
                catch (Ce) {
                    ee = !0, re = Ce;
                }
                finally {
                    try {
                        !Y && ue.return && ue.return();
                    }
                    finally {
                        if (ee)
                            throw re;
                    }
                } return J; } return function (B, W) { if (Array.isArray(B))
                    return B; if (Symbol.iterator in Object(B))
                    return I(B, W); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), s = function () { function I(B, W) { for (var J = 0; J < W.length; J++) {
                    var Y = W[J];
                    Y.enumerable = Y.enumerable || !1, Y.configurable = !0, "value" in Y && (Y.writable = !0), Object.defineProperty(B, Y.key, Y);
                } } return function (B, W, J) { return W && I(B.prototype, W), J && I(B, J), B; }; }(), l = o(3), f = k(l), h = o(2), c = k(h), u = o(0), p = k(u), g = o(5), v = k(g), x = o(10), m = k(x), d = o(9), w = k(d), y = o(36), _ = o(37), T = o(13), S = k(T), N = o(26), j = o(38), O = o(39), C = o(40);
                function k(I) { return I && I.__esModule ? I : { default: I }; }
                function P(I, B, W) { return B in I ? Object.defineProperty(I, B, { value: W, enumerable: !0, configurable: !0, writable: !0 }) : I[B] = W, I; }
                function R(I, B) { if (!(I instanceof B))
                    throw new TypeError("Cannot call a class as a function"); }
                function $(I, B) { if (!I)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return B && (typeof B == "object" || typeof B == "function") ? B : I; }
                function q(I, B) { if (typeof B != "function" && B !== null)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof B); I.prototype = Object.create(B && B.prototype, { constructor: { value: I, enumerable: !1, writable: !0, configurable: !0 } }), B && (Object.setPrototypeOf ? Object.setPrototypeOf(I, B) : I.__proto__ = B); }
                var H = (0, m.default)("quill:clipboard"), V = "__ql-matcher", F = [[Node.TEXT_NODE, Le], [Node.TEXT_NODE, me], ["br", ne], [Node.ELEMENT_NODE, me], [Node.ELEMENT_NODE, X], [Node.ELEMENT_NODE, Ee], [Node.ELEMENT_NODE, Q], [Node.ELEMENT_NODE, Me], ["li", he], ["b", Z.bind(Z, "bold")], ["i", Z.bind(Z, "italic")], ["style", se]], D = [y.AlignAttribute, j.DirectionAttribute].reduce(function (I, B) { return I[B.keyName] = B, I; }, {}), A = [y.AlignStyle, _.BackgroundStyle, N.ColorStyle, j.DirectionStyle, O.FontStyle, C.SizeStyle].reduce(function (I, B) { return I[B.keyName] = B, I; }, {}), M = function (I) {
                    q(B, I);
                    function B(W, J) { R(this, B); var Y = $(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, W, J)); return Y.quill.root.addEventListener("paste", Y.onPaste.bind(Y)), Y.container = Y.quill.addContainer("ql-clipboard"), Y.container.setAttribute("contenteditable", !0), Y.container.setAttribute("tabindex", -1), Y.matchers = [], F.concat(Y.options.matchers).forEach(function (ee) { var re = a(ee, 2), ue = re[0], Ne = re[1]; !J.matchVisual && Ne === Ee || Y.addMatcher(ue, Ne); }), Y; }
                    return s(B, [{ key: "addMatcher", value: function (J, Y) { this.matchers.push([J, Y]); } }, { key: "convert", value: function (J) {
                                if (typeof J == "string")
                                    return this.container.innerHTML = J.replace(/\>\r?\n +\</g, "><"), this.convert();
                                var Y = this.quill.getFormat(this.quill.selection.savedRange.index);
                                if (Y[S.default.blotName]) {
                                    var ee = this.container.innerText;
                                    return this.container.innerHTML = "", new c.default().insert(ee, P({}, S.default.blotName, Y[S.default.blotName]));
                                }
                                var re = this.prepareMatching(), ue = a(re, 2), Ne = ue[0], Ce = ue[1], Oe = z(this.container, Ne, Ce);
                                return G(Oe, `
`) && Oe.ops[Oe.ops.length - 1].attributes == null && (Oe = Oe.compose(new c.default().retain(Oe.length() - 1).delete(1))), H.log("convert", this.container.innerHTML, Oe), this.container.innerHTML = "", Oe;
                            } }, { key: "dangerouslyPasteHTML", value: function (J, Y) { var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : v.default.sources.API; if (typeof J == "string")
                                this.quill.setContents(this.convert(J), Y), this.quill.setSelection(0, v.default.sources.SILENT);
                            else {
                                var re = this.convert(Y);
                                this.quill.updateContents(new c.default().retain(J).concat(re), ee), this.quill.setSelection(J + re.length(), v.default.sources.SILENT);
                            } } }, { key: "onPaste", value: function (J) { var Y = this; if (!(J.defaultPrevented || !this.quill.isEnabled())) {
                                var ee = this.quill.getSelection(), re = new c.default().retain(ee.index), ue = this.quill.scrollingContainer.scrollTop;
                                this.container.focus(), this.quill.selection.update(v.default.sources.SILENT), setTimeout(function () { re = re.concat(Y.convert()).delete(ee.length), Y.quill.updateContents(re, v.default.sources.USER), Y.quill.setSelection(re.length() - ee.length, v.default.sources.SILENT), Y.quill.scrollingContainer.scrollTop = ue, Y.quill.focus(); }, 1);
                            } } }, { key: "prepareMatching", value: function () { var J = this, Y = [], ee = []; return this.matchers.forEach(function (re) { var ue = a(re, 2), Ne = ue[0], Ce = ue[1]; switch (Ne) {
                                case Node.TEXT_NODE:
                                    ee.push(Ce);
                                    break;
                                case Node.ELEMENT_NODE:
                                    Y.push(Ce);
                                    break;
                                default:
                                    [].forEach.call(J.container.querySelectorAll(Ne), function (Oe) { Oe[V] = Oe[V] || [], Oe[V].push(Ce); });
                                    break;
                            } }), [Y, ee]; } }]), B;
                }(w.default);
                M.DEFAULTS = { matchers: [], matchVisual: !0 };
                function U(I, B, W) { return (typeof B > "u" ? "undefined" : i(B)) === "object" ? Object.keys(B).reduce(function (J, Y) { return U(J, Y, B[Y]); }, I) : I.reduce(function (J, Y) { return Y.attributes && Y.attributes[B] ? J.push(Y) : J.insert(Y.insert, (0, f.default)({}, P({}, B, W), Y.attributes)); }, new c.default); }
                function K(I) { if (I.nodeType !== Node.ELEMENT_NODE)
                    return {}; var B = "__ql-computed-style"; return I[B] || (I[B] = window.getComputedStyle(I)); }
                function G(I, B) { for (var W = "", J = I.ops.length - 1; J >= 0 && W.length < B.length; --J) {
                    var Y = I.ops[J];
                    if (typeof Y.insert != "string")
                        break;
                    W = Y.insert + W;
                } return W.slice(-1 * B.length) === B; }
                function L(I) { if (I.childNodes.length === 0)
                    return !1; var B = K(I); return ["block", "list-item"].indexOf(B.display) > -1; }
                function z(I, B, W) { return I.nodeType === I.TEXT_NODE ? W.reduce(function (J, Y) { return Y(I, J); }, new c.default) : I.nodeType === I.ELEMENT_NODE ? [].reduce.call(I.childNodes || [], function (J, Y) { var ee = z(Y, B, W); return Y.nodeType === I.ELEMENT_NODE && (ee = B.reduce(function (re, ue) { return ue(Y, re); }, ee), ee = (Y[V] || []).reduce(function (re, ue) { return ue(Y, re); }, ee)), J.concat(ee); }, new c.default) : new c.default; }
                function Z(I, B, W) { return U(W, I, !0); }
                function Q(I, B) { var W = p.default.Attributor.Attribute.keys(I), J = p.default.Attributor.Class.keys(I), Y = p.default.Attributor.Style.keys(I), ee = {}; return W.concat(J).concat(Y).forEach(function (re) { var ue = p.default.query(re, p.default.Scope.ATTRIBUTE); ue != null && (ee[ue.attrName] = ue.value(I), ee[ue.attrName]) || (ue = D[re], ue != null && (ue.attrName === re || ue.keyName === re) && (ee[ue.attrName] = ue.value(I) || void 0), ue = A[re], ue != null && (ue.attrName === re || ue.keyName === re) && (ue = A[re], ee[ue.attrName] = ue.value(I) || void 0)); }), Object.keys(ee).length > 0 && (B = U(B, ee)), B; }
                function X(I, B) { var W = p.default.query(I); if (W == null)
                    return B; if (W.prototype instanceof p.default.Embed) {
                    var J = {}, Y = W.value(I);
                    Y != null && (J[W.blotName] = Y, B = new c.default().insert(J, W.formats(I)));
                }
                else
                    typeof W.formats == "function" && (B = U(B, W.blotName, W.formats(I))); return B; }
                function ne(I, B) {
                    return G(B, `
`) || B.insert(`
`), B;
                }
                function se() { return new c.default; }
                function he(I, B) {
                    var W = p.default.query(I);
                    if (W == null || W.blotName !== "list-item" || !G(B, `
`))
                        return B;
                    for (var J = -1, Y = I.parentNode; !Y.classList.contains("ql-clipboard");)
                        (p.default.query(Y) || {}).blotName === "list" && (J += 1), Y = Y.parentNode;
                    return J <= 0 ? B : B.compose(new c.default().retain(B.length() - 1).retain(1, { indent: J }));
                }
                function me(I, B) {
                    return G(B, `
`) || (L(I) || B.length() > 0 && I.nextSibling && L(I.nextSibling)) && B.insert(`
`), B;
                }
                function Ee(I, B) {
                    if (L(I) && I.nextElementSibling != null && !G(B, `

`)) {
                        var W = I.offsetHeight + parseFloat(K(I).marginTop) + parseFloat(K(I).marginBottom);
                        I.nextElementSibling.offsetTop > I.offsetTop + W * 1.5 && B.insert(`
`);
                    }
                    return B;
                }
                function Me(I, B) { var W = {}, J = I.style || {}; return J.fontStyle && K(I).fontStyle === "italic" && (W.italic = !0), J.fontWeight && (K(I).fontWeight.startsWith("bold") || parseInt(K(I).fontWeight) >= 700) && (W.bold = !0), Object.keys(W).length > 0 && (B = U(B, W)), parseFloat(J.textIndent || 0) > 0 && (B = new c.default().insert("	").concat(B)), B; }
                function Le(I, B) { var W = I.data; if (I.parentNode.tagName === "O:P")
                    return B.insert(W.trim()); if (W.trim().length === 0 && I.parentNode.classList.contains("ql-clipboard"))
                    return B; if (!K(I.parentNode).whiteSpace.startsWith("pre")) {
                    var J = function (ee, re) { return re = re.replace(/[^\u00a0]/g, ""), re.length < 1 && ee ? " " : re; };
                    W = W.replace(/\r\n/g, " ").replace(/\n/g, " "), W = W.replace(/\s\s+/g, J.bind(J, !0)), (I.previousSibling == null && L(I.parentNode) || I.previousSibling != null && L(I.previousSibling)) && (W = W.replace(/^\s+/, J.bind(J, !1))), (I.nextSibling == null && L(I.parentNode) || I.nextSibling != null && L(I.nextSibling)) && (W = W.replace(/\s+$/, J.bind(J, !1)));
                } return B.insert(W); }
                r.default = M, r.matchAttributor = Q, r.matchBlot = X, r.matchNewline = me, r.matchSpacing = Ee, r.matchText = Le;
            }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function g(v, x) { for (var m = 0; m < x.length; m++) {
                var d = x[m];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(v, d.key, d);
            } } return function (v, x, m) { return x && g(v.prototype, x), m && g(v, m), v; }; }(), a = function g(v, x, m) { v === null && (v = Function.prototype); var d = Object.getOwnPropertyDescriptor(v, x); if (d === void 0) {
                var w = Object.getPrototypeOf(v);
                return w === null ? void 0 : g(w, x, m);
            }
            else {
                if ("value" in d)
                    return d.value;
                var y = d.get;
                return y === void 0 ? void 0 : y.call(m);
            } }, s = o(6), l = f(s); function f(g) { return g && g.__esModule ? g : { default: g }; } function h(g, v) { if (!(g instanceof v))
                throw new TypeError("Cannot call a class as a function"); } function c(g, v) { if (!g)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return v && (typeof v == "object" || typeof v == "function") ? v : g; } function u(g, v) { if (typeof v != "function" && v !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof v); g.prototype = Object.create(v && v.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(g, v) : g.__proto__ = v); } var p = function (g) { u(v, g); function v() { return h(this, v), c(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments)); } return i(v, [{ key: "optimize", value: function (m) { a(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "optimize", this).call(this, m), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName); } }], [{ key: "create", value: function () { return a(v.__proto__ || Object.getPrototypeOf(v), "create", this).call(this); } }, { key: "formats", value: function () { return !0; } }]), v; }(l.default); p.blotName = "bold", p.tagName = ["STRONG", "B"], r.default = p; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.addControls = r.default = void 0; var i = function () { function C(k, P) { var R = [], $ = !0, q = !1, H = void 0; try {
                for (var V = k[Symbol.iterator](), F; !($ = (F = V.next()).done) && (R.push(F.value), !(P && R.length === P)); $ = !0)
                    ;
            }
            catch (D) {
                q = !0, H = D;
            }
            finally {
                try {
                    !$ && V.return && V.return();
                }
                finally {
                    if (q)
                        throw H;
                }
            } return R; } return function (k, P) { if (Array.isArray(k))
                return k; if (Symbol.iterator in Object(k))
                return C(k, P); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), a = function () { function C(k, P) { for (var R = 0; R < P.length; R++) {
                var $ = P[R];
                $.enumerable = $.enumerable || !1, $.configurable = !0, "value" in $ && ($.writable = !0), Object.defineProperty(k, $.key, $);
            } } return function (k, P, R) { return P && C(k.prototype, P), R && C(k, R), k; }; }(), s = o(2), l = m(s), f = o(0), h = m(f), c = o(5), u = m(c), p = o(10), g = m(p), v = o(9), x = m(v); function m(C) { return C && C.__esModule ? C : { default: C }; } function d(C, k, P) { return k in C ? Object.defineProperty(C, k, { value: P, enumerable: !0, configurable: !0, writable: !0 }) : C[k] = P, C; } function w(C, k) { if (!(C instanceof k))
                throw new TypeError("Cannot call a class as a function"); } function y(C, k) { if (!C)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return k && (typeof k == "object" || typeof k == "function") ? k : C; } function _(C, k) { if (typeof k != "function" && k !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof k); C.prototype = Object.create(k && k.prototype, { constructor: { value: C, enumerable: !1, writable: !0, configurable: !0 } }), k && (Object.setPrototypeOf ? Object.setPrototypeOf(C, k) : C.__proto__ = k); } var T = (0, g.default)("quill:toolbar"), S = function (C) { _(k, C); function k(P, R) { w(this, k); var $ = y(this, (k.__proto__ || Object.getPrototypeOf(k)).call(this, P, R)); if (Array.isArray($.options.container)) {
                var q = document.createElement("div");
                j(q, $.options.container), P.container.parentNode.insertBefore(q, P.container), $.container = q;
            }
            else
                typeof $.options.container == "string" ? $.container = document.querySelector($.options.container) : $.container = $.options.container; if (!($.container instanceof HTMLElement)) {
                var H;
                return H = T.error("Container required for toolbar", $.options), y($, H);
            } return $.container.classList.add("ql-toolbar"), $.controls = [], $.handlers = {}, Object.keys($.options.handlers).forEach(function (V) { $.addHandler(V, $.options.handlers[V]); }), [].forEach.call($.container.querySelectorAll("button, select"), function (V) { $.attach(V); }), $.quill.on(u.default.events.EDITOR_CHANGE, function (V, F) { V === u.default.events.SELECTION_CHANGE && $.update(F); }), $.quill.on(u.default.events.SCROLL_OPTIMIZE, function () { var V = $.quill.selection.getRange(), F = i(V, 1), D = F[0]; $.update(D); }), $; } return a(k, [{ key: "addHandler", value: function (R, $) { this.handlers[R] = $; } }, { key: "attach", value: function (R) { var $ = this, q = [].find.call(R.classList, function (V) { return V.indexOf("ql-") === 0; }); if (q) {
                        if (q = q.slice(3), R.tagName === "BUTTON" && R.setAttribute("type", "button"), this.handlers[q] == null) {
                            if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[q] == null) {
                                T.warn("ignoring attaching to disabled format", q, R);
                                return;
                            }
                            if (h.default.query(q) == null) {
                                T.warn("ignoring attaching to nonexistent format", q, R);
                                return;
                            }
                        }
                        var H = R.tagName === "SELECT" ? "change" : "click";
                        R.addEventListener(H, function (V) { var F = void 0; if (R.tagName === "SELECT") {
                            if (R.selectedIndex < 0)
                                return;
                            var D = R.options[R.selectedIndex];
                            D.hasAttribute("selected") ? F = !1 : F = D.value || !1;
                        }
                        else
                            R.classList.contains("ql-active") ? F = !1 : F = R.value || !R.hasAttribute("value"), V.preventDefault(); $.quill.focus(); var A = $.quill.selection.getRange(), M = i(A, 1), U = M[0]; if ($.handlers[q] != null)
                            $.handlers[q].call($, F);
                        else if (h.default.query(q).prototype instanceof h.default.Embed) {
                            if (F = prompt("Enter " + q), !F)
                                return;
                            $.quill.updateContents(new l.default().retain(U.index).delete(U.length).insert(d({}, q, F)), u.default.sources.USER);
                        }
                        else
                            $.quill.format(q, F, u.default.sources.USER); $.update(U); }), this.controls.push([q, R]);
                    } } }, { key: "update", value: function (R) { var $ = R == null ? {} : this.quill.getFormat(R); this.controls.forEach(function (q) { var H = i(q, 2), V = H[0], F = H[1]; if (F.tagName === "SELECT") {
                        var D = void 0;
                        if (R == null)
                            D = null;
                        else if ($[V] == null)
                            D = F.querySelector("option[selected]");
                        else if (!Array.isArray($[V])) {
                            var A = $[V];
                            typeof A == "string" && (A = A.replace(/\"/g, '\\"')), D = F.querySelector('option[value="' + A + '"]');
                        }
                        D == null ? (F.value = "", F.selectedIndex = -1) : D.selected = !0;
                    }
                    else if (R == null)
                        F.classList.remove("ql-active");
                    else if (F.hasAttribute("value")) {
                        var M = $[V] === F.getAttribute("value") || $[V] != null && $[V].toString() === F.getAttribute("value") || $[V] == null && !F.getAttribute("value");
                        F.classList.toggle("ql-active", M);
                    }
                    else
                        F.classList.toggle("ql-active", $[V] != null); }); } }]), k; }(x.default); S.DEFAULTS = {}; function N(C, k, P) { var R = document.createElement("button"); R.setAttribute("type", "button"), R.classList.add("ql-" + k), P != null && (R.value = P), C.appendChild(R); } function j(C, k) { Array.isArray(k[0]) || (k = [k]), k.forEach(function (P) { var R = document.createElement("span"); R.classList.add("ql-formats"), P.forEach(function ($) { if (typeof $ == "string")
                N(R, $);
            else {
                var q = Object.keys($)[0], H = $[q];
                Array.isArray(H) ? O(R, q, H) : N(R, q, H);
            } }), C.appendChild(R); }); } function O(C, k, P) { var R = document.createElement("select"); R.classList.add("ql-" + k), P.forEach(function ($) { var q = document.createElement("option"); $ !== !1 ? q.setAttribute("value", $) : q.setAttribute("selected", "selected"), R.appendChild(q); }), C.appendChild(R); } S.DEFAULTS = { container: null, handlers: { clean: function () { var k = this, P = this.quill.getSelection(); if (P != null)
                        if (P.length == 0) {
                            var R = this.quill.getFormat();
                            Object.keys(R).forEach(function ($) { h.default.query($, h.default.Scope.INLINE) != null && k.quill.format($, !1); });
                        }
                        else
                            this.quill.removeFormat(P, u.default.sources.USER); }, direction: function (k) { var P = this.quill.getFormat().align; k === "rtl" && P == null ? this.quill.format("align", "right", u.default.sources.USER) : !k && P === "right" && this.quill.format("align", !1, u.default.sources.USER), this.quill.format("direction", k, u.default.sources.USER); }, indent: function (k) { var P = this.quill.getSelection(), R = this.quill.getFormat(P), $ = parseInt(R.indent || 0); if (k === "+1" || k === "-1") {
                        var q = k === "+1" ? 1 : -1;
                        R.direction === "rtl" && (q *= -1), this.quill.format("indent", $ + q, u.default.sources.USER);
                    } }, link: function (k) { k === !0 && (k = prompt("Enter link URL:")), this.quill.format("link", k, u.default.sources.USER); }, list: function (k) { var P = this.quill.getSelection(), R = this.quill.getFormat(P); k === "check" ? R.list === "checked" || R.list === "unchecked" ? this.quill.format("list", !1, u.default.sources.USER) : this.quill.format("list", "unchecked", u.default.sources.USER) : this.quill.format("list", k, u.default.sources.USER); } } }, r.default = S, r.addControls = j; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function g(v, x) { for (var m = 0; m < x.length; m++) {
                var d = x[m];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(v, d.key, d);
            } } return function (v, x, m) { return x && g(v.prototype, x), m && g(v, m), v; }; }(), a = function g(v, x, m) { v === null && (v = Function.prototype); var d = Object.getOwnPropertyDescriptor(v, x); if (d === void 0) {
                var w = Object.getPrototypeOf(v);
                return w === null ? void 0 : g(w, x, m);
            }
            else {
                if ("value" in d)
                    return d.value;
                var y = d.get;
                return y === void 0 ? void 0 : y.call(m);
            } }, s = o(28), l = f(s); function f(g) { return g && g.__esModule ? g : { default: g }; } function h(g, v) { if (!(g instanceof v))
                throw new TypeError("Cannot call a class as a function"); } function c(g, v) { if (!g)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return v && (typeof v == "object" || typeof v == "function") ? v : g; } function u(g, v) { if (typeof v != "function" && v !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof v); g.prototype = Object.create(v && v.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(g, v) : g.__proto__ = v); } var p = function (g) { u(v, g); function v(x, m) { h(this, v); var d = c(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, x)); return d.label.innerHTML = m, d.container.classList.add("ql-color-picker"), [].slice.call(d.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function (w) { w.classList.add("ql-primary"); }), d; } return i(v, [{ key: "buildItem", value: function (m) { var d = a(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "buildItem", this).call(this, m); return d.style.backgroundColor = m.getAttribute("value") || "", d; } }, { key: "selectItem", value: function (m, d) { a(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "selectItem", this).call(this, m, d); var w = this.label.querySelector(".ql-color-label"), y = m && m.getAttribute("data-value") || ""; w && (w.tagName === "line" ? w.style.stroke = y : w.style.fill = y); } }]), v; }(l.default); r.default = p; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function g(v, x) { for (var m = 0; m < x.length; m++) {
                var d = x[m];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(v, d.key, d);
            } } return function (v, x, m) { return x && g(v.prototype, x), m && g(v, m), v; }; }(), a = function g(v, x, m) { v === null && (v = Function.prototype); var d = Object.getOwnPropertyDescriptor(v, x); if (d === void 0) {
                var w = Object.getPrototypeOf(v);
                return w === null ? void 0 : g(w, x, m);
            }
            else {
                if ("value" in d)
                    return d.value;
                var y = d.get;
                return y === void 0 ? void 0 : y.call(m);
            } }, s = o(28), l = f(s); function f(g) { return g && g.__esModule ? g : { default: g }; } function h(g, v) { if (!(g instanceof v))
                throw new TypeError("Cannot call a class as a function"); } function c(g, v) { if (!g)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return v && (typeof v == "object" || typeof v == "function") ? v : g; } function u(g, v) { if (typeof v != "function" && v !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof v); g.prototype = Object.create(v && v.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(g, v) : g.__proto__ = v); } var p = function (g) { u(v, g); function v(x, m) { h(this, v); var d = c(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, x)); return d.container.classList.add("ql-icon-picker"), [].forEach.call(d.container.querySelectorAll(".ql-picker-item"), function (w) { w.innerHTML = m[w.getAttribute("data-value") || ""]; }), d.defaultItem = d.container.querySelector(".ql-selected"), d.selectItem(d.defaultItem), d; } return i(v, [{ key: "selectItem", value: function (m, d) { a(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "selectItem", this).call(this, m, d), m = m || this.defaultItem, this.label.innerHTML = m.innerHTML; } }]), v; }(l.default); r.default = p; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function l(f, h) { for (var c = 0; c < h.length; c++) {
                var u = h[c];
                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(f, u.key, u);
            } } return function (f, h, c) { return h && l(f.prototype, h), c && l(f, c), f; }; }(); function a(l, f) { if (!(l instanceof f))
                throw new TypeError("Cannot call a class as a function"); } var s = function () { function l(f, h) { var c = this; a(this, l), this.quill = f, this.boundsContainer = h || document.body, this.root = f.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function () { c.root.style.marginTop = -1 * c.quill.root.scrollTop + "px"; }), this.hide(); } return i(l, [{ key: "hide", value: function () { this.root.classList.add("ql-hidden"); } }, { key: "position", value: function (h) { var c = h.left + h.width / 2 - this.root.offsetWidth / 2, u = h.bottom + this.quill.root.scrollTop; this.root.style.left = c + "px", this.root.style.top = u + "px", this.root.classList.remove("ql-flip"); var p = this.boundsContainer.getBoundingClientRect(), g = this.root.getBoundingClientRect(), v = 0; if (g.right > p.right && (v = p.right - g.right, this.root.style.left = c + v + "px"), g.left < p.left && (v = p.left - g.left, this.root.style.left = c + v + "px"), g.bottom > p.bottom) {
                        var x = g.bottom - g.top, m = h.bottom - h.top + x;
                        this.root.style.top = u - m + "px", this.root.classList.add("ql-flip");
                    } return v; } }, { key: "show", value: function () { this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden"); } }]), l; }(); r.default = s; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function O(C, k) { var P = [], R = !0, $ = !1, q = void 0; try {
                for (var H = C[Symbol.iterator](), V; !(R = (V = H.next()).done) && (P.push(V.value), !(k && P.length === k)); R = !0)
                    ;
            }
            catch (F) {
                $ = !0, q = F;
            }
            finally {
                try {
                    !R && H.return && H.return();
                }
                finally {
                    if ($)
                        throw q;
                }
            } return P; } return function (C, k) { if (Array.isArray(C))
                return C; if (Symbol.iterator in Object(C))
                return O(C, k); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), a = function O(C, k, P) { C === null && (C = Function.prototype); var R = Object.getOwnPropertyDescriptor(C, k); if (R === void 0) {
                var $ = Object.getPrototypeOf(C);
                return $ === null ? void 0 : O($, k, P);
            }
            else {
                if ("value" in R)
                    return R.value;
                var q = R.get;
                return q === void 0 ? void 0 : q.call(P);
            } }, s = function () { function O(C, k) { for (var P = 0; P < k.length; P++) {
                var R = k[P];
                R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(C, R.key, R);
            } } return function (C, k, P) { return k && O(C.prototype, k), P && O(C, P), C; }; }(), l = o(3), f = w(l), h = o(8), c = w(h), u = o(43), p = w(u), g = o(27), v = w(g), x = o(15), m = o(41), d = w(m); function w(O) { return O && O.__esModule ? O : { default: O }; } function y(O, C) { if (!(O instanceof C))
                throw new TypeError("Cannot call a class as a function"); } function _(O, C) { if (!O)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return C && (typeof C == "object" || typeof C == "function") ? C : O; } function T(O, C) { if (typeof C != "function" && C !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof C); O.prototype = Object.create(C && C.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), C && (Object.setPrototypeOf ? Object.setPrototypeOf(O, C) : O.__proto__ = C); } var S = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], N = function (O) { T(C, O); function C(k, P) { y(this, C), P.modules.toolbar != null && P.modules.toolbar.container == null && (P.modules.toolbar.container = S); var R = _(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, k, P)); return R.quill.container.classList.add("ql-snow"), R; } return s(C, [{ key: "extendToolbar", value: function (P) { P.container.classList.add("ql-snow"), this.buildButtons([].slice.call(P.container.querySelectorAll("button")), d.default), this.buildPickers([].slice.call(P.container.querySelectorAll("select")), d.default), this.tooltip = new j(this.quill, this.options.bounds), P.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function (R, $) { P.handlers.link.call(P, !$.format.link); }); } }]), C; }(p.default); N.DEFAULTS = (0, f.default)(!0, {}, p.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function (C) { if (C) {
                                var k = this.quill.getSelection();
                                if (k == null || k.length == 0)
                                    return;
                                var P = this.quill.getText(k);
                                /^\S+@\S+\.\S+$/.test(P) && P.indexOf("mailto:") !== 0 && (P = "mailto:" + P);
                                var R = this.quill.theme.tooltip;
                                R.edit("link", P);
                            }
                            else
                                this.quill.format("link", !1); } } } } }); var j = function (O) { T(C, O); function C(k, P) { y(this, C); var R = _(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, k, P)); return R.preview = R.root.querySelector("a.ql-preview"), R; } return s(C, [{ key: "listen", value: function () { var P = this; a(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function (R) { P.root.classList.contains("ql-editing") ? P.save() : P.edit("link", P.preview.textContent), R.preventDefault(); }), this.root.querySelector("a.ql-remove").addEventListener("click", function (R) { if (P.linkRange != null) {
                        var $ = P.linkRange;
                        P.restoreFocus(), P.quill.formatText($, "link", !1, c.default.sources.USER), delete P.linkRange;
                    } R.preventDefault(), P.hide(); }), this.quill.on(c.default.events.SELECTION_CHANGE, function (R, $, q) { if (R != null) {
                        if (R.length === 0 && q === c.default.sources.USER) {
                            var H = P.quill.scroll.descendant(v.default, R.index), V = i(H, 2), F = V[0], D = V[1];
                            if (F != null) {
                                P.linkRange = new x.Range(R.index - D, F.length());
                                var A = v.default.formats(F.domNode);
                                P.preview.textContent = A, P.preview.setAttribute("href", A), P.show(), P.position(P.quill.getBounds(P.linkRange));
                                return;
                            }
                        }
                        else
                            delete P.linkRange;
                        P.hide();
                    } }); } }, { key: "show", value: function () { a(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "show", this).call(this), this.root.removeAttribute("data-mode"); } }]), C; }(u.BaseTooltip); j.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), r.default = N; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(29), a = Y(i), s = o(36), l = o(38), f = o(64), h = o(65), c = Y(h), u = o(66), p = Y(u), g = o(67), v = Y(g), x = o(37), m = o(26), d = o(39), w = o(40), y = o(56), _ = Y(y), T = o(68), S = Y(T), N = o(27), j = Y(N), O = o(69), C = Y(O), k = o(70), P = Y(k), R = o(71), $ = Y(R), q = o(72), H = Y(q), V = o(73), F = Y(V), D = o(13), A = Y(D), M = o(74), U = Y(M), K = o(75), G = Y(K), L = o(57), z = Y(L), Z = o(41), Q = Y(Z), X = o(28), ne = Y(X), se = o(59), he = Y(se), me = o(60), Ee = Y(me), Me = o(61), Le = Y(Me), I = o(108), B = Y(I), W = o(62), J = Y(W); function Y(ee) { return ee && ee.__esModule ? ee : { default: ee }; } a.default.register({ "attributors/attribute/direction": l.DirectionAttribute, "attributors/class/align": s.AlignClass, "attributors/class/background": x.BackgroundClass, "attributors/class/color": m.ColorClass, "attributors/class/direction": l.DirectionClass, "attributors/class/font": d.FontClass, "attributors/class/size": w.SizeClass, "attributors/style/align": s.AlignStyle, "attributors/style/background": x.BackgroundStyle, "attributors/style/color": m.ColorStyle, "attributors/style/direction": l.DirectionStyle, "attributors/style/font": d.FontStyle, "attributors/style/size": w.SizeStyle }, !0), a.default.register({ "formats/align": s.AlignClass, "formats/direction": l.DirectionClass, "formats/indent": f.IndentClass, "formats/background": x.BackgroundStyle, "formats/color": m.ColorStyle, "formats/font": d.FontClass, "formats/size": w.SizeClass, "formats/blockquote": c.default, "formats/code-block": A.default, "formats/header": p.default, "formats/list": v.default, "formats/bold": _.default, "formats/code": D.Code, "formats/italic": S.default, "formats/link": j.default, "formats/script": C.default, "formats/strike": P.default, "formats/underline": $.default, "formats/image": H.default, "formats/video": F.default, "formats/list/item": g.ListItem, "modules/formula": U.default, "modules/syntax": G.default, "modules/toolbar": z.default, "themes/bubble": B.default, "themes/snow": J.default, "ui/icons": Q.default, "ui/picker": ne.default, "ui/icon-picker": Ee.default, "ui/color-picker": he.default, "ui/tooltip": Le.default }, !0), r.default = a.default; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.IndentClass = void 0; var i = function () { function v(x, m) { for (var d = 0; d < m.length; d++) {
                var w = m[d];
                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(x, w.key, w);
            } } return function (x, m, d) { return m && v(x.prototype, m), d && v(x, d), x; }; }(), a = function v(x, m, d) { x === null && (x = Function.prototype); var w = Object.getOwnPropertyDescriptor(x, m); if (w === void 0) {
                var y = Object.getPrototypeOf(x);
                return y === null ? void 0 : v(y, m, d);
            }
            else {
                if ("value" in w)
                    return w.value;
                var _ = w.get;
                return _ === void 0 ? void 0 : _.call(d);
            } }, s = o(0), l = f(s); function f(v) { return v && v.__esModule ? v : { default: v }; } function h(v, x) { if (!(v instanceof x))
                throw new TypeError("Cannot call a class as a function"); } function c(v, x) { if (!v)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return x && (typeof x == "object" || typeof x == "function") ? x : v; } function u(v, x) { if (typeof x != "function" && x !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof x); v.prototype = Object.create(x && x.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(v, x) : v.__proto__ = x); } var p = function (v) { u(x, v); function x() { return h(this, x), c(this, (x.__proto__ || Object.getPrototypeOf(x)).apply(this, arguments)); } return i(x, [{ key: "add", value: function (d, w) { if (w === "+1" || w === "-1") {
                        var y = this.value(d) || 0;
                        w = w === "+1" ? y + 1 : y - 1;
                    } return w === 0 ? (this.remove(d), !0) : a(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "add", this).call(this, d, w); } }, { key: "canAdd", value: function (d, w) { return a(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "canAdd", this).call(this, d, w) || a(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "canAdd", this).call(this, d, parseInt(w)); } }, { key: "value", value: function (d) { return parseInt(a(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "value", this).call(this, d)) || void 0; } }]), x; }(l.default.Attributor.Class), g = new p("indent", "ql-indent", { scope: l.default.Scope.BLOCK, whitelist: [1, 2, 3, 4, 5, 6, 7, 8] }); r.IndentClass = g; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(4), a = s(i); function s(u) { return u && u.__esModule ? u : { default: u }; } function l(u, p) { if (!(u instanceof p))
                throw new TypeError("Cannot call a class as a function"); } function f(u, p) { if (!u)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return p && (typeof p == "object" || typeof p == "function") ? p : u; } function h(u, p) { if (typeof p != "function" && p !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof p); u.prototype = Object.create(p && p.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(u, p) : u.__proto__ = p); } var c = function (u) { h(p, u); function p() { return l(this, p), f(this, (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments)); } return p; }(a.default); c.blotName = "blockquote", c.tagName = "blockquote", r.default = c; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function p(g, v) { for (var x = 0; x < v.length; x++) {
                var m = v[x];
                m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(g, m.key, m);
            } } return function (g, v, x) { return v && p(g.prototype, v), x && p(g, x), g; }; }(), a = o(4), s = l(a); function l(p) { return p && p.__esModule ? p : { default: p }; } function f(p, g) { if (!(p instanceof g))
                throw new TypeError("Cannot call a class as a function"); } function h(p, g) { if (!p)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return g && (typeof g == "object" || typeof g == "function") ? g : p; } function c(p, g) { if (typeof g != "function" && g !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof g); p.prototype = Object.create(g && g.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(p, g) : p.__proto__ = g); } var u = function (p) { c(g, p); function g() { return f(this, g), h(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments)); } return i(g, null, [{ key: "formats", value: function (x) { return this.tagName.indexOf(x.tagName) + 1; } }]), g; }(s.default); u.blotName = "header", u.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], r.default = u; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.ListItem = void 0; var i = function () { function y(_, T) { for (var S = 0; S < T.length; S++) {
                var N = T[S];
                N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(_, N.key, N);
            } } return function (_, T, S) { return T && y(_.prototype, T), S && y(_, S), _; }; }(), a = function y(_, T, S) { _ === null && (_ = Function.prototype); var N = Object.getOwnPropertyDescriptor(_, T); if (N === void 0) {
                var j = Object.getPrototypeOf(_);
                return j === null ? void 0 : y(j, T, S);
            }
            else {
                if ("value" in N)
                    return N.value;
                var O = N.get;
                return O === void 0 ? void 0 : O.call(S);
            } }, s = o(0), l = p(s), f = o(4), h = p(f), c = o(25), u = p(c); function p(y) { return y && y.__esModule ? y : { default: y }; } function g(y, _, T) { return _ in y ? Object.defineProperty(y, _, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : y[_] = T, y; } function v(y, _) { if (!(y instanceof _))
                throw new TypeError("Cannot call a class as a function"); } function x(y, _) { if (!y)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return _ && (typeof _ == "object" || typeof _ == "function") ? _ : y; } function m(y, _) { if (typeof _ != "function" && _ !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof _); y.prototype = Object.create(_ && _.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(y, _) : y.__proto__ = _); } var d = function (y) { m(_, y); function _() { return v(this, _), x(this, (_.__proto__ || Object.getPrototypeOf(_)).apply(this, arguments)); } return i(_, [{ key: "format", value: function (S, N) { S === w.blotName && !N ? this.replaceWith(l.default.create(this.statics.scope)) : a(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "format", this).call(this, S, N); } }, { key: "remove", value: function () { this.prev == null && this.next == null ? this.parent.remove() : a(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "remove", this).call(this); } }, { key: "replaceWith", value: function (S, N) { return this.parent.isolate(this.offset(this.parent), this.length()), S === this.parent.statics.blotName ? (this.parent.replaceWith(S, N), this) : (this.parent.unwrap(), a(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "replaceWith", this).call(this, S, N)); } }], [{ key: "formats", value: function (S) { return S.tagName === this.tagName ? void 0 : a(_.__proto__ || Object.getPrototypeOf(_), "formats", this).call(this, S); } }]), _; }(h.default); d.blotName = "list-item", d.tagName = "LI"; var w = function (y) { m(_, y), i(_, null, [{ key: "create", value: function (S) { var N = S === "ordered" ? "OL" : "UL", j = a(_.__proto__ || Object.getPrototypeOf(_), "create", this).call(this, N); return (S === "checked" || S === "unchecked") && j.setAttribute("data-checked", S === "checked"), j; } }, { key: "formats", value: function (S) { if (S.tagName === "OL")
                        return "ordered"; if (S.tagName === "UL")
                        return S.hasAttribute("data-checked") ? S.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet"; } }]); function _(T) { v(this, _); var S = x(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, T)), N = function (O) { if (O.target.parentNode === T) {
                var C = S.statics.formats(T), k = l.default.find(O.target);
                C === "checked" ? k.format("list", "unchecked") : C === "unchecked" && k.format("list", "checked");
            } }; return T.addEventListener("touchstart", N), T.addEventListener("mousedown", N), S; } return i(_, [{ key: "format", value: function (S, N) { this.children.length > 0 && this.children.tail.format(S, N); } }, { key: "formats", value: function () { return g({}, this.statics.blotName, this.statics.formats(this.domNode)); } }, { key: "insertBefore", value: function (S, N) { if (S instanceof d)
                        a(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "insertBefore", this).call(this, S, N);
                    else {
                        var j = N == null ? this.length() : N.offset(this), O = this.split(j);
                        O.parent.insertBefore(S, O);
                    } } }, { key: "optimize", value: function (S) { a(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "optimize", this).call(this, S); var N = this.next; N != null && N.prev === this && N.statics.blotName === this.statics.blotName && N.domNode.tagName === this.domNode.tagName && N.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (N.moveChildren(this), N.remove()); } }, { key: "replace", value: function (S) { if (S.statics.blotName !== this.statics.blotName) {
                        var N = l.default.create(this.statics.defaultChild);
                        S.moveChildren(N), this.appendChild(N);
                    } a(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "replace", this).call(this, S); } }]), _; }(u.default); w.blotName = "list", w.scope = l.default.Scope.BLOCK_BLOT, w.tagName = ["OL", "UL"], w.defaultChild = "list-item", w.allowedChildren = [d], r.ListItem = d, r.default = w; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(56), a = s(i); function s(u) { return u && u.__esModule ? u : { default: u }; } function l(u, p) { if (!(u instanceof p))
                throw new TypeError("Cannot call a class as a function"); } function f(u, p) { if (!u)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return p && (typeof p == "object" || typeof p == "function") ? p : u; } function h(u, p) { if (typeof p != "function" && p !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof p); u.prototype = Object.create(p && p.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(u, p) : u.__proto__ = p); } var c = function (u) { h(p, u); function p() { return l(this, p), f(this, (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments)); } return p; }(a.default); c.blotName = "italic", c.tagName = ["EM", "I"], r.default = c; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function g(v, x) { for (var m = 0; m < x.length; m++) {
                var d = x[m];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(v, d.key, d);
            } } return function (v, x, m) { return x && g(v.prototype, x), m && g(v, m), v; }; }(), a = function g(v, x, m) { v === null && (v = Function.prototype); var d = Object.getOwnPropertyDescriptor(v, x); if (d === void 0) {
                var w = Object.getPrototypeOf(v);
                return w === null ? void 0 : g(w, x, m);
            }
            else {
                if ("value" in d)
                    return d.value;
                var y = d.get;
                return y === void 0 ? void 0 : y.call(m);
            } }, s = o(6), l = f(s); function f(g) { return g && g.__esModule ? g : { default: g }; } function h(g, v) { if (!(g instanceof v))
                throw new TypeError("Cannot call a class as a function"); } function c(g, v) { if (!g)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return v && (typeof v == "object" || typeof v == "function") ? v : g; } function u(g, v) { if (typeof v != "function" && v !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof v); g.prototype = Object.create(v && v.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(g, v) : g.__proto__ = v); } var p = function (g) { u(v, g); function v() { return h(this, v), c(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments)); } return i(v, null, [{ key: "create", value: function (m) { return m === "super" ? document.createElement("sup") : m === "sub" ? document.createElement("sub") : a(v.__proto__ || Object.getPrototypeOf(v), "create", this).call(this, m); } }, { key: "formats", value: function (m) { if (m.tagName === "SUB")
                        return "sub"; if (m.tagName === "SUP")
                        return "super"; } }]), v; }(l.default); p.blotName = "script", p.tagName = ["SUB", "SUP"], r.default = p; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(6), a = s(i); function s(u) { return u && u.__esModule ? u : { default: u }; } function l(u, p) { if (!(u instanceof p))
                throw new TypeError("Cannot call a class as a function"); } function f(u, p) { if (!u)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return p && (typeof p == "object" || typeof p == "function") ? p : u; } function h(u, p) { if (typeof p != "function" && p !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof p); u.prototype = Object.create(p && p.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(u, p) : u.__proto__ = p); } var c = function (u) { h(p, u); function p() { return l(this, p), f(this, (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments)); } return p; }(a.default); c.blotName = "strike", c.tagName = "S", r.default = c; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = o(6), a = s(i); function s(u) { return u && u.__esModule ? u : { default: u }; } function l(u, p) { if (!(u instanceof p))
                throw new TypeError("Cannot call a class as a function"); } function f(u, p) { if (!u)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return p && (typeof p == "object" || typeof p == "function") ? p : u; } function h(u, p) { if (typeof p != "function" && p !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof p); u.prototype = Object.create(p && p.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(u, p) : u.__proto__ = p); } var c = function (u) { h(p, u); function p() { return l(this, p), f(this, (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments)); } return p; }(a.default); c.blotName = "underline", c.tagName = "U", r.default = c; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function x(m, d) { for (var w = 0; w < d.length; w++) {
                var y = d[w];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(m, y.key, y);
            } } return function (m, d, w) { return d && x(m.prototype, d), w && x(m, w), m; }; }(), a = function x(m, d, w) { m === null && (m = Function.prototype); var y = Object.getOwnPropertyDescriptor(m, d); if (y === void 0) {
                var _ = Object.getPrototypeOf(m);
                return _ === null ? void 0 : x(_, d, w);
            }
            else {
                if ("value" in y)
                    return y.value;
                var T = y.get;
                return T === void 0 ? void 0 : T.call(w);
            } }, s = o(0), l = h(s), f = o(27); function h(x) { return x && x.__esModule ? x : { default: x }; } function c(x, m) { if (!(x instanceof m))
                throw new TypeError("Cannot call a class as a function"); } function u(x, m) { if (!x)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return m && (typeof m == "object" || typeof m == "function") ? m : x; } function p(x, m) { if (typeof m != "function" && m !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof m); x.prototype = Object.create(m && m.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(x, m) : x.__proto__ = m); } var g = ["alt", "height", "width"], v = function (x) { p(m, x); function m() { return c(this, m), u(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments)); } return i(m, [{ key: "format", value: function (w, y) { g.indexOf(w) > -1 ? y ? this.domNode.setAttribute(w, y) : this.domNode.removeAttribute(w) : a(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "format", this).call(this, w, y); } }], [{ key: "create", value: function (w) { var y = a(m.__proto__ || Object.getPrototypeOf(m), "create", this).call(this, w); return typeof w == "string" && y.setAttribute("src", this.sanitize(w)), y; } }, { key: "formats", value: function (w) { return g.reduce(function (y, _) { return w.hasAttribute(_) && (y[_] = w.getAttribute(_)), y; }, {}); } }, { key: "match", value: function (w) { return /\.(jpe?g|gif|png)$/.test(w) || /^data:image\/.+;base64/.test(w); } }, { key: "sanitize", value: function (w) { return (0, f.sanitize)(w, ["http", "https", "data"]) ? w : "//:0"; } }, { key: "value", value: function (w) { return w.getAttribute("src"); } }]), m; }(l.default.Embed); v.blotName = "image", v.tagName = "IMG", r.default = v; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }); var i = function () { function x(m, d) { for (var w = 0; w < d.length; w++) {
                var y = d[w];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(m, y.key, y);
            } } return function (m, d, w) { return d && x(m.prototype, d), w && x(m, w), m; }; }(), a = function x(m, d, w) { m === null && (m = Function.prototype); var y = Object.getOwnPropertyDescriptor(m, d); if (y === void 0) {
                var _ = Object.getPrototypeOf(m);
                return _ === null ? void 0 : x(_, d, w);
            }
            else {
                if ("value" in y)
                    return y.value;
                var T = y.get;
                return T === void 0 ? void 0 : T.call(w);
            } }, s = o(4), l = o(27), f = h(l); function h(x) { return x && x.__esModule ? x : { default: x }; } function c(x, m) { if (!(x instanceof m))
                throw new TypeError("Cannot call a class as a function"); } function u(x, m) { if (!x)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return m && (typeof m == "object" || typeof m == "function") ? m : x; } function p(x, m) { if (typeof m != "function" && m !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof m); x.prototype = Object.create(m && m.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(x, m) : x.__proto__ = m); } var g = ["height", "width"], v = function (x) { p(m, x); function m() { return c(this, m), u(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments)); } return i(m, [{ key: "format", value: function (w, y) { g.indexOf(w) > -1 ? y ? this.domNode.setAttribute(w, y) : this.domNode.removeAttribute(w) : a(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "format", this).call(this, w, y); } }], [{ key: "create", value: function (w) { var y = a(m.__proto__ || Object.getPrototypeOf(m), "create", this).call(this, w); return y.setAttribute("frameborder", "0"), y.setAttribute("allowfullscreen", !0), y.setAttribute("src", this.sanitize(w)), y; } }, { key: "formats", value: function (w) { return g.reduce(function (y, _) { return w.hasAttribute(_) && (y[_] = w.getAttribute(_)), y; }, {}); } }, { key: "sanitize", value: function (w) { return f.default.sanitize(w); } }, { key: "value", value: function (w) { return w.getAttribute("src"); } }]), m; }(s.BlockEmbed); v.blotName = "video", v.className = "ql-video", v.tagName = "IFRAME", r.default = v; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.FormulaBlot = void 0; var i = function () { function w(y, _) { for (var T = 0; T < _.length; T++) {
                var S = _[T];
                S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(y, S.key, S);
            } } return function (y, _, T) { return _ && w(y.prototype, _), T && w(y, T), y; }; }(), a = function w(y, _, T) { y === null && (y = Function.prototype); var S = Object.getOwnPropertyDescriptor(y, _); if (S === void 0) {
                var N = Object.getPrototypeOf(y);
                return N === null ? void 0 : w(N, _, T);
            }
            else {
                if ("value" in S)
                    return S.value;
                var j = S.get;
                return j === void 0 ? void 0 : j.call(T);
            } }, s = o(35), l = p(s), f = o(5), h = p(f), c = o(9), u = p(c); function p(w) { return w && w.__esModule ? w : { default: w }; } function g(w, y) { if (!(w instanceof y))
                throw new TypeError("Cannot call a class as a function"); } function v(w, y) { if (!w)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return y && (typeof y == "object" || typeof y == "function") ? y : w; } function x(w, y) { if (typeof y != "function" && y !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof y); w.prototype = Object.create(y && y.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(w, y) : w.__proto__ = y); } var m = function (w) { x(y, w); function y() { return g(this, y), v(this, (y.__proto__ || Object.getPrototypeOf(y)).apply(this, arguments)); } return i(y, null, [{ key: "create", value: function (T) { var S = a(y.__proto__ || Object.getPrototypeOf(y), "create", this).call(this, T); return typeof T == "string" && (window.katex.render(T, S, { throwOnError: !1, errorColor: "#f00" }), S.setAttribute("data-value", T)), S; } }, { key: "value", value: function (T) { return T.getAttribute("data-value"); } }]), y; }(l.default); m.blotName = "formula", m.className = "ql-formula", m.tagName = "SPAN"; var d = function (w) { x(y, w), i(y, null, [{ key: "register", value: function () { h.default.register(m, !0); } }]); function y() { g(this, y); var _ = v(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this)); if (window.katex == null)
                throw new Error("Formula module requires KaTeX."); return _; } return y; }(u.default); r.FormulaBlot = m, r.default = d; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.CodeToken = r.CodeBlock = void 0; var i = function () { function T(S, N) { for (var j = 0; j < N.length; j++) {
                var O = N[j];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(S, O.key, O);
            } } return function (S, N, j) { return N && T(S.prototype, N), j && T(S, j), S; }; }(), a = function T(S, N, j) { S === null && (S = Function.prototype); var O = Object.getOwnPropertyDescriptor(S, N); if (O === void 0) {
                var C = Object.getPrototypeOf(S);
                return C === null ? void 0 : T(C, N, j);
            }
            else {
                if ("value" in O)
                    return O.value;
                var k = O.get;
                return k === void 0 ? void 0 : k.call(j);
            } }, s = o(0), l = v(s), f = o(5), h = v(f), c = o(9), u = v(c), p = o(13), g = v(p); function v(T) { return T && T.__esModule ? T : { default: T }; } function x(T, S) { if (!(T instanceof S))
                throw new TypeError("Cannot call a class as a function"); } function m(T, S) { if (!T)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return S && (typeof S == "object" || typeof S == "function") ? S : T; } function d(T, S) { if (typeof S != "function" && S !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof S); T.prototype = Object.create(S && S.prototype, { constructor: { value: T, enumerable: !1, writable: !0, configurable: !0 } }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(T, S) : T.__proto__ = S); } var w = function (T) { d(S, T); function S() { return x(this, S), m(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments)); } return i(S, [{ key: "replaceWith", value: function (j) { this.domNode.textContent = this.domNode.textContent, this.attach(), a(S.prototype.__proto__ || Object.getPrototypeOf(S.prototype), "replaceWith", this).call(this, j); } }, { key: "highlight", value: function (j) { var O = this.domNode.textContent; this.cachedText !== O && ((O.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = j(O), this.domNode.normalize(), this.attach()), this.cachedText = O); } }]), S; }(g.default); w.className = "ql-syntax"; var y = new l.default.Attributor.Class("token", "hljs", { scope: l.default.Scope.INLINE }), _ = function (T) { d(S, T), i(S, null, [{ key: "register", value: function () { h.default.register(y, !0), h.default.register(w, !0); } }]); function S(N, j) { x(this, S); var O = m(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, N, j)); if (typeof O.options.highlight != "function")
                throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill."); var C = null; return O.quill.on(h.default.events.SCROLL_OPTIMIZE, function () { clearTimeout(C), C = setTimeout(function () { O.highlight(), C = null; }, O.options.interval); }), O.highlight(), O; } return i(S, [{ key: "highlight", value: function () { var j = this; if (!this.quill.selection.composing) {
                        this.quill.update(h.default.sources.USER);
                        var O = this.quill.getSelection();
                        this.quill.scroll.descendants(w).forEach(function (C) { C.highlight(j.options.highlight); }), this.quill.update(h.default.sources.SILENT), O != null && this.quill.setSelection(O, h.default.sources.SILENT);
                    } } }]), S; }(u.default); _.DEFAULTS = { highlight: function () { return window.hljs == null ? null : function (T) { var S = window.hljs.highlightAuto(T); return S.value; }; }(), interval: 1e3 }, r.CodeBlock = w, r.CodeToken = y, r.default = _; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'; }, function (n, r) { n.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'; }, function (n, r) { n.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'; }, function (n, r) { n.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'; }, function (n, r) { n.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'; }, function (n, r) { n.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'; }, function (n, r, o) { Object.defineProperty(r, "__esModule", { value: !0 }), r.default = r.BubbleTooltip = void 0; var i = function S(N, j, O) { N === null && (N = Function.prototype); var C = Object.getOwnPropertyDescriptor(N, j); if (C === void 0) {
                var k = Object.getPrototypeOf(N);
                return k === null ? void 0 : S(k, j, O);
            }
            else {
                if ("value" in C)
                    return C.value;
                var P = C.get;
                return P === void 0 ? void 0 : P.call(O);
            } }, a = function () { function S(N, j) { for (var O = 0; O < j.length; O++) {
                var C = j[O];
                C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(N, C.key, C);
            } } return function (N, j, O) { return j && S(N.prototype, j), O && S(N, O), N; }; }(), s = o(3), l = x(s), f = o(8), h = x(f), c = o(43), u = x(c), p = o(15), g = o(41), v = x(g); function x(S) { return S && S.__esModule ? S : { default: S }; } function m(S, N) { if (!(S instanceof N))
                throw new TypeError("Cannot call a class as a function"); } function d(S, N) { if (!S)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return N && (typeof N == "object" || typeof N == "function") ? N : S; } function w(S, N) { if (typeof N != "function" && N !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof N); S.prototype = Object.create(N && N.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } }), N && (Object.setPrototypeOf ? Object.setPrototypeOf(S, N) : S.__proto__ = N); } var y = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], _ = function (S) { w(N, S); function N(j, O) { m(this, N), O.modules.toolbar != null && O.modules.toolbar.container == null && (O.modules.toolbar.container = y); var C = d(this, (N.__proto__ || Object.getPrototypeOf(N)).call(this, j, O)); return C.quill.container.classList.add("ql-bubble"), C; } return a(N, [{ key: "extendToolbar", value: function (O) { this.tooltip = new T(this.quill, this.options.bounds), this.tooltip.root.appendChild(O.container), this.buildButtons([].slice.call(O.container.querySelectorAll("button")), v.default), this.buildPickers([].slice.call(O.container.querySelectorAll("select")), v.default); } }]), N; }(u.default); _.DEFAULTS = (0, l.default)(!0, {}, u.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function (N) { N ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1); } } } } }); var T = function (S) { w(N, S); function N(j, O) { m(this, N); var C = d(this, (N.__proto__ || Object.getPrototypeOf(N)).call(this, j, O)); return C.quill.on(h.default.events.EDITOR_CHANGE, function (k, P, R, $) { if (k === h.default.events.SELECTION_CHANGE)
                if (P != null && P.length > 0 && $ === h.default.sources.USER) {
                    C.show(), C.root.style.left = "0px", C.root.style.width = "", C.root.style.width = C.root.offsetWidth + "px";
                    var q = C.quill.getLines(P.index, P.length);
                    if (q.length === 1)
                        C.position(C.quill.getBounds(P));
                    else {
                        var H = q[q.length - 1], V = C.quill.getIndex(H), F = Math.min(H.length() - 1, P.index + P.length - V), D = C.quill.getBounds(new p.Range(V, F));
                        C.position(D);
                    }
                }
                else
                    document.activeElement !== C.textbox && C.quill.hasFocus() && C.hide(); }), C; } return a(N, [{ key: "listen", value: function () { var O = this; i(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function () { O.root.classList.remove("ql-editing"); }), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function () { setTimeout(function () { if (!O.root.classList.contains("ql-hidden")) {
                        var C = O.quill.getSelection();
                        C != null && O.position(O.quill.getBounds(C));
                    } }, 1); }); } }, { key: "cancel", value: function () { this.show(); } }, { key: "position", value: function (O) { var C = i(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "position", this).call(this, O), k = this.root.querySelector(".ql-tooltip-arrow"); if (k.style.marginLeft = "", C === 0)
                        return C; k.style.marginLeft = -1 * C - k.offsetWidth / 2 + "px"; } }]), N; }(c.BaseTooltip); T.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), r.BubbleTooltip = T, r.default = _; }, function (n, r, o) { n.exports = o(63); }]).default;
    });
})(db);
var JI = db.exports, eM = Mt && Mt.__extends || function () { var e = function (t, n) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, o) { r.__proto__ = o; } || function (r, o) { for (var i in o)
    o.hasOwnProperty(i) && (r[i] = o[i]); }, e(t, n); }; return function (t, n) { e(t, n); function r() { this.constructor = t; } t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r); }; }(), Vl = Mt && Mt.__assign || function () { return Vl = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) {
    t = arguments[n];
    for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
} return e; }, Vl.apply(this, arguments); }, tM = Mt && Mt.__spreadArrays || function () { for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length; for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
        r[o] = i[a]; return r; }, Xu = Mt && Mt.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; }, gn = Xu(E), nM = Xu(ho), $i = Xu(XI), tg = Xu(JI), rM = function (e) { eM(t, e); function t(n) { var r = e.call(this, n) || this; r.dirtyProps = ["modules", "formats", "bounds", "theme", "children"], r.cleanProps = ["id", "className", "style", "placeholder", "tabIndex", "onChange", "onChangeSelection", "onFocus", "onBlur", "onKeyPress", "onKeyDown", "onKeyUp"], r.state = { generation: 0 }, r.selection = null, r.onEditorChange = function (i, a, s, l) { var f, h, c, u; i === "text-change" ? (h = (f = r).onEditorChangeText) === null || h === void 0 || h.call(f, r.editor.root.innerHTML, a, l, r.unprivilegedEditor) : i === "selection-change" && ((u = (c = r).onEditorChangeSelection) === null || u === void 0 || u.call(c, a, l, r.unprivilegedEditor)); }; var o = r.isControlled() ? n.value : n.defaultValue; return r.value = o ?? "", r; } return t.prototype.validateProps = function (n) { var r; if (gn.default.Children.count(n.children) > 1)
    throw new Error("The Quill editing area can only be composed of a single React element."); if (gn.default.Children.count(n.children)) {
    var o = gn.default.Children.only(n.children);
    if (((r = o) === null || r === void 0 ? void 0 : r.type) === "textarea")
        throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
} if (this.lastDeltaChangeSet && n.value === this.lastDeltaChangeSet)
    throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas"); }, t.prototype.shouldComponentUpdate = function (n, r) { var o = this, i; if (this.validateProps(n), !this.editor || this.state.generation !== r.generation)
    return !0; if ("value" in n) {
    var a = this.getEditorContents(), s = (i = n.value, i ?? "");
    this.isEqualValue(s, a) || this.setEditorContents(this.editor, s);
} return n.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, n.readOnly), tM(this.cleanProps, this.dirtyProps).some(function (l) { return !$i.default(n[l], o.props[l]); }); }, t.prototype.shouldComponentRegenerate = function (n) { var r = this; return this.dirtyProps.some(function (o) { return !$i.default(n[o], r.props[o]); }); }, t.prototype.componentDidMount = function () { this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents()); }, t.prototype.componentWillUnmount = function () { this.destroyEditor(); }, t.prototype.componentDidUpdate = function (n, r) { var o = this; if (this.editor && this.shouldComponentRegenerate(n)) {
    var i = this.editor.getContents(), a = this.editor.getSelection();
    this.regenerationSnapshot = { delta: i, selection: a }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
} if (this.state.generation !== r.generation) {
    var s = this.regenerationSnapshot, i = s.delta, l = s.selection;
    delete this.regenerationSnapshot, this.instantiateEditor();
    var f = this.editor;
    f.setContents(i), ng(function () { return o.setEditorSelection(f, l); });
} }, t.prototype.instantiateEditor = function () { this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig()); }, t.prototype.destroyEditor = function () { this.editor && this.unhookEditor(this.editor); }, t.prototype.isControlled = function () { return "value" in this.props; }, t.prototype.getEditorConfig = function () { return { bounds: this.props.bounds, formats: this.props.formats, modules: this.props.modules, placeholder: this.props.placeholder, readOnly: this.props.readOnly, scrollingContainer: this.props.scrollingContainer, tabIndex: this.props.tabIndex, theme: this.props.theme }; }, t.prototype.getEditor = function () { if (!this.editor)
    throw new Error("Accessing non-instantiated editor"); return this.editor; }, t.prototype.createEditor = function (n, r) { var o = new tg.default(n, r); return r.tabIndex != null && this.setEditorTabIndex(o, r.tabIndex), this.hookEditor(o), o; }, t.prototype.hookEditor = function (n) { this.unprivilegedEditor = this.makeUnprivilegedEditor(n), n.on("editor-change", this.onEditorChange); }, t.prototype.unhookEditor = function (n) { n.off("editor-change", this.onEditorChange); }, t.prototype.getEditorContents = function () { return this.value; }, t.prototype.getEditorSelection = function () { return this.selection; }, t.prototype.isDelta = function (n) { return n && n.ops; }, t.prototype.isEqualValue = function (n, r) { return this.isDelta(n) && this.isDelta(r) ? $i.default(n.ops, r.ops) : $i.default(n, r); }, t.prototype.setEditorContents = function (n, r) { var o = this; this.value = r; var i = this.getEditorSelection(); typeof r == "string" ? n.setContents(n.clipboard.convert(r)) : n.setContents(r), ng(function () { return o.setEditorSelection(n, i); }); }, t.prototype.setEditorSelection = function (n, r) { if (this.selection = r, r) {
    var o = n.getLength();
    r.index = Math.max(0, Math.min(r.index, o - 1)), r.length = Math.max(0, Math.min(r.length, o - 1 - r.index)), n.setSelection(r);
} }, t.prototype.setEditorTabIndex = function (n, r) { var o, i; !((i = (o = n) === null || o === void 0 ? void 0 : o.scroll) === null || i === void 0) && i.domNode && (n.scroll.domNode.tabIndex = r); }, t.prototype.setEditorReadOnly = function (n, r) { r ? n.disable() : n.enable(); }, t.prototype.makeUnprivilegedEditor = function (n) { var r = n; return { getHTML: function () { return r.root.innerHTML; }, getLength: r.getLength.bind(r), getText: r.getText.bind(r), getContents: r.getContents.bind(r), getSelection: r.getSelection.bind(r), getBounds: r.getBounds.bind(r) }; }, t.prototype.getEditingArea = function () { if (!this.editingArea)
    throw new Error("Instantiating on missing editing area"); var n = nM.default.findDOMNode(this.editingArea); if (!n)
    throw new Error("Cannot find element for editing area"); if (n.nodeType === 3)
    throw new Error("Editing area cannot be a text node"); return n; }, t.prototype.renderEditingArea = function () { var n = this, r = this.props, o = r.children, i = r.preserveWhitespace, a = this.state.generation, s = { key: a, ref: function (l) { n.editingArea = l; } }; return gn.default.Children.count(o) ? gn.default.cloneElement(gn.default.Children.only(o), s) : i ? gn.default.createElement("pre", Vl({}, s)) : gn.default.createElement("div", Vl({}, s)); }, t.prototype.render = function () { var n; return gn.default.createElement("div", { id: this.props.id, style: this.props.style, key: this.state.generation, className: "quill " + (n = this.props.className, n ?? ""), onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea()); }, t.prototype.onEditorChangeText = function (n, r, o, i) { var a, s; if (this.editor) {
    var l = this.isDelta(this.value) ? i.getContents() : i.getHTML();
    l !== this.getEditorContents() && (this.lastDeltaChangeSet = r, this.value = l, (s = (a = this.props).onChange) === null || s === void 0 || s.call(a, n, r, o, i));
} }, t.prototype.onEditorChangeSelection = function (n, r, o) { var i, a, s, l, f, h; if (this.editor) {
    var c = this.getEditorSelection(), u = !c && n, p = c && !n;
    $i.default(n, c) || (this.selection = n, (a = (i = this.props).onChangeSelection) === null || a === void 0 || a.call(i, n, r, o), u ? (l = (s = this.props).onFocus) === null || l === void 0 || l.call(s, n, r, o) : p && ((h = (f = this.props).onBlur) === null || h === void 0 || h.call(f, c, r, o)));
} }, t.prototype.focus = function () { this.editor && this.editor.focus(); }, t.prototype.blur = function () { this.editor && (this.selection = null, this.editor.blur()); }, t.displayName = "React Quill", t.Quill = tg.default, t.defaultProps = { theme: "snow", modules: {}, readOnly: !1 }, t; }(gn.default.Component);
function ng(e) { Promise.resolve().then(e); }
var oM = rM;
const iM = Nd(oM), aM = { toolbar: [[{ header: "1" }, { header: "2" }], [{ bold: !0 }, { italic: !0 }, { underline: !0 }, { strike: !0 }, "clean"], [{ list: "ordered" }, { list: "bullet" }], [{ align: [] }], [{ indent: "-1" }, { indent: "+1" }], [{ color: [] }, { background: [] }], ["blockquote", "code-block"], ["link", "image", "video"]] }, sM = ["header", "font", "size", "bold", "italic", "underline", "strike", "color", "background", "blockquote", "code-block", "code", "list", "bullet", "indent", "direction", "align", "image", "video", "link"];
function hb({ children: e }) { const [t, n] = E.useState(null), [r, o] = E.useState(null), [i, a] = E.useState(""), [s, l] = E.useState(""), [f, h] = E.useState(""); E.useEffect(() => () => { r && URL.revokeObjectURL(r); }, [r]); function c(m) { m.preventDefault(); const d = m.dataTransfer.files[0]; d && (n(d), o(URL.createObjectURL(d))); } function u(m) { if (m.target.files && m.target.files.length > 0) {
    const d = m.target.files[0];
    n(d), o(URL.createObjectURL(d));
} } function p(m) { a(m.target.value); } function g(m) { l(m); } function v(m) { h(m); } function x() { console.log(r), console.log(i), console.log(s), console.log(f); } return b.jsxs(Sw, { onOpenChange: () => { r && (o(null), n(null), URL.revokeObjectURL(r)); }, children: [b.jsxs(kw, { children: [e, " "] }), b.jsxs(rp, { className: "overflow-y-auto no-scrollbar rounded-none md:rounded-md max-h-full md:max-h-[90%] w-full md:max-w-[50%]", children: [b.jsxs(Cw, { children: [b.jsx(op, { children: "Create new post" }), b.jsx(ip, {})] }), b.jsxs("div", { className: "flex flex-col gap-4", children: [b.jsx("div", { className: "rounded-lg flex flex-col justify-center items-center gap-4 border-2 hover:border-gray-400 border-dashed", onDragOver: m => m.preventDefault(), onDrop: c, children: b.jsxs(Sr, { htmlFor: "thumbnail", className: ge("flex gap-2 justify-center items-center w-full h-full", !t && "h-[21.5rem]"), children: [b.jsx(Fn, { type: "file", id: "thumbnail", placeholder: "Thumbnail", accept: "image/*", onChange: u, className: "hidden" }), r ? b.jsx("div", { className: "w-full h-auto", children: b.jsx("img", { src: r, alt: "thumbnail", className: "h-full w-full rounded-sm object-cover aspect-video" }) }) : b.jsxs("div", { className: "flex flex-col justify-center items-center gap-4 text-slate-500", children: [b.jsx(gA, { className: "h-16 w-16" }), "Upload Thumbnail"] })] }) }), b.jsxs("div", { className: "flex items-center gap-4 justify-start", children: [b.jsx(Fn, { placeholder: "Title", onChange: p, value: i, className: "w-full" }), b.jsxs(Gx, { onValueChange: g, children: [b.jsx(Kh, { className: "w-full", children: b.jsx(Zx, { placeholder: "Type" }) }), b.jsx(Gh, { children: b.jsxs(uA, { children: [b.jsx(Xx, { children: "Scholarships" }), b.jsx(cr, { value: "gov", children: "Government Supported" }), b.jsx(cr, { value: "college/university", children: "College/University Scholarship" }), b.jsx(cr, { value: "standalone", children: "Standalone" }), b.jsx(cr, { value: "corporate/industry sponsored", children: "Corporate/Industry Sponsored" }), b.jsx(cr, { value: "local government", children: "Local Government" })] }) })] })] }), b.jsx("div", { children: b.jsx(iM, { theme: "snow", value: f, onChange: v, modules: aM, formats: sM, placeholder: "", className: "overflow-y-auto custom-ql" }) }), b.jsx("div", { className: "flex justify-end gap-2 items-center", children: b.jsxs(Re, { variant: "default", size: "lg", onClick: x, className: "flex gap-1 items-center", children: [b.jsx(bA, {}), " Create new post"] }) })] })] })] }); }
const Zn = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Iw, { ref: n, className: ge("relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full", e), ...t }));
Zn.displayName = Iw.displayName;
const Yn = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Mw, { ref: n, className: ge("aspect-square h-full w-full", e), ...t }));
Yn.displayName = Mw.displayName;
const Qn = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Lw, { ref: n, className: ge("flex h-full w-full items-center justify-center rounded-full bg-muted", e), ...t }));
Qn.displayName = Lw.displayName;
const pp = ({ thumbnail: e, provider: t, description: n, scholarship: r, avatar: o }) => b.jsxs(Or, { className: "w-full overflow-hidden", children: [b.jsx(Tr, { className: "p-0", children: b.jsxs("div", { className: "relative h-48", children: [b.jsx("img", { src: e, alt: "Scholarship background", className: "w-full h-full object-cover" }), b.jsxs(Zn, { className: "absolute -translate-y-[50%] left-6 h-[5rem] w-[5rem] border-4 border-background lg:h-[7rem] lg:w-[7rem]", children: [b.jsx(Yn, { src: o, alt: "Organization logo" }), b.jsx(Qn, { children: "ORG" })] })] }) }), b.jsxs(Ar, { className: "pt-10 lg:pt-14 pb-6 px-6", children: [b.jsx("div", { className: "space-y-4", children: b.jsxs("div", { children: [b.jsx("h3", { className: "font-semibold text-lg", children: t }), b.jsx("p", { className: "text-sm text-muted-foreground", children: n })] }) }), b.jsx(Re, { className: "mt-5", children: "View Profile" })] })] }), lM = (e, t) => { const n = Math.floor((e.getTime() - new Date(t).getTime()) / 1e3), r = Math.floor(n / 60), o = Math.floor(n / 3600), i = Math.floor(n / 86400), a = Math.floor(n / 604800), s = Math.floor(n / 31536e3); return s > 0 ? `${s}y` : a > 0 ? `${a}w` : i > 0 ? `${i}d` : o > 0 ? `${o}h` : r > 0 ? `${r}m` : "just now"; }, uM = e => { const { user: t, feedback: n } = e, [r, o] = E.useState(new Date); return b.jsx(b.Fragment, { children: b.jsx("div", { className: "w-full flex flex-col gap-1 border p-3.5 rounded-lg hover:bg-primary-foreground cursor-pointer", onClick: () => alert("open modal for solo feedback"), children: b.jsx("div", { className: "flex justify-between items-center w-full", children: b.jsx("div", { className: "flex gap-2 items-start justify-between w-full ", children: b.jsxs("div", { className: "flex justify-start gap-3 w-full", children: [b.jsxs(Zn, { className: "w-12 h-12 cursor-pointer", onClick: () => alert("redirect to indiv provider screen"), children: [b.jsx(Yn, { className: "aspect-square object-cover rounded-full", src: t.avatarUrl, alt: t.name ?? t.organizationName }), b.jsx(Qn, { children: t.name ?? t.organizationName })] }), b.jsxs("div", { className: "flex flex-col gap-[.0125rem] justify-start w-full", children: [b.jsxs("div", { className: "flex justify-between items-center", children: [b.jsx("p", { className: "z-[1] text-sm text-primary font-bold", children: t.name ?? t.organizationName }), b.jsx("small", { className: "text-end font-semibold", children: lM(r, n.createdAt) })] }), b.jsxs("div", { className: "flex gap-2.5 items-center", children: [b.jsx("p", { className: "text-xs text-gray-500 flex gap-[.25rem]", children: Array.from(Array(n.rating)).map(i => b.jsx(nw, { className: "fill-blue-500 text-blue-500 w-4" })) }), b.jsxs("h3", { className: "font-bold ", children: [n.rating, ".0"] })] }), b.jsx("p", { className: "text-sm mt-2 line-clamp-4", children: n.comment })] })] }) }) }) }) }); }, cM = () => b.jsxs("div", { className: "scroll-smooth", children: [b.jsx(Ow, {}), b.jsxs("div", { className: "flex flex-col items-center justify-center h-screen", id: "home", children: [b.jsxs("h1", { className: "text-4xl md:text-5xl lg:text-7xl font-semibold", children: ["Welcome to", " ", b.jsx("span", { className: "text-7xl font-bold dark:text--200 bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent", children: "ConnectED" })] }), b.jsx("p", { className: "text-lg text-gray-800 dark:text-gray-200", children: "Connecting students and providers for quality education." })] }), b.jsx(Il, {}), b.jsx("div", { className: "container mx-auto px-4", id: "testimonies", children: b.jsx(_P, {}) }), b.jsx(Il, {}), b.jsx("div", { className: "container mx-auto px-4", id: "providers", children: b.jsx(kP, {}) }), b.jsxs("div", { className: "flex flex-col gap-4 items-center container mx-auto", children: [b.jsx("h1", { className: "text-2xl font-bold", children: "Test Posts" }), b.jsx("div", { className: "px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-3", children: Hu.map(e => b.jsx(Yo, { postAuthorEmail: e.email, postAuthorAvatarSource: e.avatarSource, postTitle: e.postTitle, postThumbnailSource: e.postThumbnailSource, postDescription: e.postDescription, postRatingCount: e.postRatingCount, postBookmarkCount: e.postBookmarkCount, postAuthorName: e.name, postCommentCount: e.postCommentCount, postType: e.postType, postDate: e.postDate })) })] }), b.jsxs("div", { className: "flex flex-col gap-4 items-center container mx-auto mt-6", children: [b.jsx("h1", { className: "text-2xl font-bold", children: "Test Posts" }), b.jsx("div", { className: "w-full px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-3", children: cp.map((e, t) => b.jsx(pp, { thumbnail: e.thumbnail, avatar: e.avatar, provider: e.provider, description: e.description, scholarship: e.scholarship }, t)) })] }), b.jsx(hb, {}), b.jsxs("div", { className: "flex flex-col gap-4 items-center container mx-auto mt-6", children: [b.jsx("h1", { className: "text-2xl font-bold", children: "Test Feedbacks" }), b.jsx("div", { className: "w-full px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-3", children: yP.map((e, t) => b.jsx(uM, { user: Ds[t], feedback: e })) })] })] });
var Sd = ["Enter", " "], fM = ["ArrowDown", "PageUp", "Home"], pb = ["ArrowUp", "PageDown", "End"], dM = [...fM, ...pb], hM = { ltr: [...Sd, "ArrowRight"], rtl: [...Sd, "ArrowLeft"] }, pM = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] }, qa = "Menu", [Ia, mM, vM] = Eh(qa), [mo, mb] = $r(qa, [vM, Br, pu]), Ju = Br(), vb = pu(), [gM, vo] = mo(qa), [yM, Ha] = mo(qa), gb = e => { const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = Ju(t), [l, f] = E.useState(null), h = E.useRef(!1), c = Bt(i), u = du(o); return E.useEffect(() => { const p = () => { h.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 }); }, g = () => h.current = !1; return document.addEventListener("keydown", p, { capture: !0 }), () => { document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 }); }; }, []), b.jsx(ku, { ...s, children: b.jsx(gM, { scope: t, open: n, onOpenChange: c, content: l, onContentChange: f, children: b.jsx(yM, { scope: t, onClose: E.useCallback(() => c(!1), [c]), isUsingKeyboardRef: h, dir: u, modal: a, children: r }) }) }); };
gb.displayName = qa;
var xM = "MenuAnchor", mp = E.forwardRef((e, t) => { const { __scopeMenu: n, ...r } = e, o = Ju(n); return b.jsx(Nu, { ...o, ...r, ref: t }); });
mp.displayName = xM;
var vp = "MenuPortal", [wM, yb] = mo(vp, { forceMount: void 0 }), xb = e => { const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = vo(vp, t); return b.jsx(wM, { scope: t, forceMount: n, children: b.jsx(fn, { present: n || i.open, children: b.jsx(Tu, { asChild: !0, container: o, children: r }) }) }); };
xb.displayName = vp;
var Zt = "MenuContent", [bM, gp] = mo(Zt), wb = E.forwardRef((e, t) => { const n = yb(Zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = vo(Zt, e.__scopeMenu), a = Ha(Zt, e.__scopeMenu); return b.jsx(Ia.Provider, { scope: e.__scopeMenu, children: b.jsx(fn, { present: r || i.open, children: b.jsx(Ia.Slot, { scope: e.__scopeMenu, children: a.modal ? b.jsx(_M, { ...o, ref: t }) : b.jsx(EM, { ...o, ref: t }) }) }) }); }), _M = E.forwardRef((e, t) => { const n = vo(Zt, e.__scopeMenu), r = E.useRef(null), o = je(t, r); return E.useEffect(() => { const i = r.current; if (i)
    return Hh(i); }, []), b.jsx(yp, { ...e, ref: o, trapFocus: n.open, disableOutsidePointerEvents: n.open, disableOutsideScroll: !0, onFocusOutside: le(e.onFocusOutside, i => i.preventDefault(), { checkForDefaultPrevented: !1 }), onDismiss: () => n.onOpenChange(!1) }); }), EM = E.forwardRef((e, t) => { const n = vo(Zt, e.__scopeMenu); return b.jsx(yp, { ...e, ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, disableOutsideScroll: !1, onDismiss: () => n.onOpenChange(!1) }); }), yp = E.forwardRef((e, t) => { const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEntryFocus: l, onEscapeKeyDown: f, onPointerDownOutside: h, onFocusOutside: c, onInteractOutside: u, onDismiss: p, disableOutsideScroll: g, ...v } = e, x = vo(Zt, n), m = Ha(Zt, n), d = Ju(n), w = vb(n), y = mM(n), [_, T] = E.useState(null), S = E.useRef(null), N = je(t, S, x.onContentChange), j = E.useRef(0), O = E.useRef(""), C = E.useRef(0), k = E.useRef(null), P = E.useRef("right"), R = E.useRef(0), $ = g ? Pu : E.Fragment, q = g ? { as: qn, allowPinchZoom: !0 } : void 0, H = F => { var z, Z; const D = O.current + F, A = y().filter(Q => !Q.disabled), M = document.activeElement, U = (z = A.find(Q => Q.ref.current === M)) == null ? void 0 : z.textValue, K = A.map(Q => Q.textValue), G = MM(K, D, U), L = (Z = A.find(Q => Q.textValue === G)) == null ? void 0 : Z.ref.current; (function Q(X) { O.current = X, window.clearTimeout(j.current), X !== "" && (j.current = window.setTimeout(() => Q(""), 1e3)); })(D), L && setTimeout(() => L.focus()); }; E.useEffect(() => () => window.clearTimeout(j.current), []), Mh(); const V = E.useCallback(F => { var A, M; return P.current === ((A = k.current) == null ? void 0 : A.side) && DM(F, (M = k.current) == null ? void 0 : M.area); }, []); return b.jsx(bM, { scope: n, searchRef: O, onItemEnter: E.useCallback(F => { V(F) && F.preventDefault(); }, [V]), onItemLeave: E.useCallback(F => { var D; V(F) || ((D = S.current) == null || D.focus(), T(null)); }, [V]), onTriggerLeave: E.useCallback(F => { V(F) && F.preventDefault(); }, [V]), pointerGraceTimerRef: C, onPointerGraceIntentChange: E.useCallback(F => { k.current = F; }, []), children: b.jsx($, { ...q, children: b.jsx(bu, { asChild: !0, trapped: o, onMountAutoFocus: le(i, F => { var D; F.preventDefault(), (D = S.current) == null || D.focus({ preventScroll: !0 }); }), onUnmountAutoFocus: a, children: b.jsx(vi, { asChild: !0, disableOutsidePointerEvents: s, onEscapeKeyDown: f, onPointerDownOutside: h, onFocusOutside: c, onInteractOutside: u, onDismiss: p, children: b.jsx(D0, { asChild: !0, ...w, dir: m.dir, orientation: "vertical", loop: r, currentTabStopId: _, onCurrentTabStopIdChange: T, onEntryFocus: le(l, F => { m.isUsingKeyboardRef.current || F.preventDefault(); }), preventScrollOnEntryFocus: !0, children: b.jsx(Cu, { role: "menu", "aria-orientation": "vertical", "data-state": Lb(x.open), "data-radix-menu-content": "", dir: m.dir, ...d, ...v, ref: N, style: { outline: "none", ...v.style }, onKeyDown: le(v.onKeyDown, F => { const A = F.target.closest("[data-radix-menu-content]") === F.currentTarget, M = F.ctrlKey || F.altKey || F.metaKey, U = F.key.length === 1; A && (F.key === "Tab" && F.preventDefault(), !M && U && H(F.key)); const K = S.current; if (F.target !== K || !dM.includes(F.key))
                            return; F.preventDefault(); const L = y().filter(z => !z.disabled).map(z => z.ref.current); pb.includes(F.key) && L.reverse(), RM(L); }), onBlur: le(e.onBlur, F => { F.currentTarget.contains(F.target) || (window.clearTimeout(j.current), O.current = ""); }), onPointerMove: le(e.onPointerMove, Ma(F => { const D = F.target, A = R.current !== F.clientX; if (F.currentTarget.contains(D) && A) {
                            const M = F.clientX > R.current ? "right" : "left";
                            P.current = M, R.current = F.clientX;
                        } })) }) }) }) }) }) }); });
wb.displayName = Zt;
var SM = "MenuGroup", xp = E.forwardRef((e, t) => { const { __scopeMenu: n, ...r } = e; return b.jsx(xe.div, { role: "group", ...r, ref: t }); });
xp.displayName = SM;
var kM = "MenuLabel", bb = E.forwardRef((e, t) => { const { __scopeMenu: n, ...r } = e; return b.jsx(xe.div, { ...r, ref: t }); });
bb.displayName = kM;
var ql = "MenuItem", rg = "menu.itemSelect", ec = E.forwardRef((e, t) => { const { disabled: n = !1, onSelect: r, ...o } = e, i = E.useRef(null), a = Ha(ql, e.__scopeMenu), s = gp(ql, e.__scopeMenu), l = je(t, i), f = E.useRef(!1), h = () => { const c = i.current; if (!n && c) {
    const u = new CustomEvent(rg, { bubbles: !0, cancelable: !0 });
    c.addEventListener(rg, p => r == null ? void 0 : r(p), { once: !0 }), P0(c, u), u.defaultPrevented ? f.current = !1 : a.onClose();
} }; return b.jsx(_b, { ...o, ref: l, disabled: n, onClick: le(e.onClick, h), onPointerDown: c => { var u; (u = e.onPointerDown) == null || u.call(e, c), f.current = !0; }, onPointerUp: le(e.onPointerUp, c => { var u; f.current || (u = c.currentTarget) == null || u.click(); }), onKeyDown: le(e.onKeyDown, c => { const u = s.searchRef.current !== ""; n || u && c.key === " " || Sd.includes(c.key) && (c.currentTarget.click(), c.preventDefault()); }) }); });
ec.displayName = ql;
var _b = E.forwardRef((e, t) => { const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, a = gp(ql, n), s = vb(n), l = E.useRef(null), f = je(t, l), [h, c] = E.useState(!1), [u, p] = E.useState(""); return E.useEffect(() => { const g = l.current; g && p((g.textContent ?? "").trim()); }, [i.children]), b.jsx(Ia.ItemSlot, { scope: n, disabled: r, textValue: o ?? u, children: b.jsx(F0, { asChild: !0, ...s, focusable: !r, children: b.jsx(xe.div, { role: "menuitem", "data-highlighted": h ? "" : void 0, "aria-disabled": r || void 0, "data-disabled": r ? "" : void 0, ...i, ref: f, onPointerMove: le(e.onPointerMove, Ma(g => { r ? a.onItemLeave(g) : (a.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 })); })), onPointerLeave: le(e.onPointerLeave, Ma(g => a.onItemLeave(g))), onFocus: le(e.onFocus, () => c(!0)), onBlur: le(e.onBlur, () => c(!1)) }) }) }); }), NM = "MenuCheckboxItem", Eb = E.forwardRef((e, t) => { const { checked: n = !1, onCheckedChange: r, ...o } = e; return b.jsx(Ob, { scope: e.__scopeMenu, checked: n, children: b.jsx(ec, { role: "menuitemcheckbox", "aria-checked": Hl(n) ? "mixed" : n, ...o, ref: t, "data-state": bp(n), onSelect: le(o.onSelect, () => r == null ? void 0 : r(Hl(n) ? !0 : !n), { checkForDefaultPrevented: !1 }) }) }); });
Eb.displayName = NM;
var Sb = "MenuRadioGroup", [CM, OM] = mo(Sb, { value: void 0, onValueChange: () => { } }), kb = E.forwardRef((e, t) => { const { value: n, onValueChange: r, ...o } = e, i = Bt(r); return b.jsx(CM, { scope: e.__scopeMenu, value: n, onValueChange: i, children: b.jsx(xp, { ...o, ref: t }) }); });
kb.displayName = Sb;
var Nb = "MenuRadioItem", Cb = E.forwardRef((e, t) => { const { value: n, ...r } = e, o = OM(Nb, e.__scopeMenu), i = n === o.value; return b.jsx(Ob, { scope: e.__scopeMenu, checked: i, children: b.jsx(ec, { role: "menuitemradio", "aria-checked": i, ...r, ref: t, "data-state": bp(i), onSelect: le(r.onSelect, () => { var a; return (a = o.onValueChange) == null ? void 0 : a.call(o, n); }, { checkForDefaultPrevented: !1 }) }) }); });
Cb.displayName = Nb;
var wp = "MenuItemIndicator", [Ob, TM] = mo(wp, { checked: !1 }), Tb = E.forwardRef((e, t) => { const { __scopeMenu: n, forceMount: r, ...o } = e, i = TM(wp, n); return b.jsx(fn, { present: r || Hl(i.checked) || i.checked === !0, children: b.jsx(xe.span, { ...o, ref: t, "data-state": bp(i.checked) }) }); });
Tb.displayName = wp;
var AM = "MenuSeparator", Ab = E.forwardRef((e, t) => { const { __scopeMenu: n, ...r } = e; return b.jsx(xe.div, { role: "separator", "aria-orientation": "horizontal", ...r, ref: t }); });
Ab.displayName = AM;
var PM = "MenuArrow", Pb = E.forwardRef((e, t) => { const { __scopeMenu: n, ...r } = e, o = Ju(n); return b.jsx(Ou, { ...o, ...r, ref: t }); });
Pb.displayName = PM;
var jM = "MenuSub", [zL, jb] = mo(jM), Gi = "MenuSubTrigger", Rb = E.forwardRef((e, t) => { const n = vo(Gi, e.__scopeMenu), r = Ha(Gi, e.__scopeMenu), o = jb(Gi, e.__scopeMenu), i = gp(Gi, e.__scopeMenu), a = E.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = i, f = { __scopeMenu: e.__scopeMenu }, h = E.useCallback(() => { a.current && window.clearTimeout(a.current), a.current = null; }, []); return E.useEffect(() => h, [h]), E.useEffect(() => { const c = s.current; return () => { window.clearTimeout(c), l(null); }; }, [s, l]), b.jsx(mp, { asChild: !0, ...f, children: b.jsx(_b, { id: o.triggerId, "aria-haspopup": "menu", "aria-expanded": n.open, "aria-controls": o.contentId, "data-state": Lb(n.open), ...e, ref: fu(t, o.onTriggerChange), onClick: c => { var u; (u = e.onClick) == null || u.call(e, c), !(e.disabled || c.defaultPrevented) && (c.currentTarget.focus(), n.open || n.onOpenChange(!0)); }, onPointerMove: le(e.onPointerMove, Ma(c => { i.onItemEnter(c), !c.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => { n.onOpenChange(!0), h(); }, 100)); })), onPointerLeave: le(e.onPointerLeave, Ma(c => { var p, g; h(); const u = (p = n.content) == null ? void 0 : p.getBoundingClientRect(); if (u) {
            const v = (g = n.content) == null ? void 0 : g.dataset.side, x = v === "right", m = x ? -5 : 5, d = u[x ? "left" : "right"], w = u[x ? "right" : "left"];
            i.onPointerGraceIntentChange({ area: [{ x: c.clientX + m, y: c.clientY }, { x: d, y: u.top }, { x: w, y: u.top }, { x: w, y: u.bottom }, { x: d, y: u.bottom }], side: v }), window.clearTimeout(s.current), s.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300);
        }
        else {
            if (i.onTriggerLeave(c), c.defaultPrevented)
                return;
            i.onPointerGraceIntentChange(null);
        } })), onKeyDown: le(e.onKeyDown, c => { var p; const u = i.searchRef.current !== ""; e.disabled || u && c.key === " " || hM[r.dir].includes(c.key) && (n.onOpenChange(!0), (p = n.content) == null || p.focus(), c.preventDefault()); }) }) }); });
Rb.displayName = Gi;
var Ib = "MenuSubContent", Mb = E.forwardRef((e, t) => { const n = yb(Zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = vo(Zt, e.__scopeMenu), a = Ha(Zt, e.__scopeMenu), s = jb(Ib, e.__scopeMenu), l = E.useRef(null), f = je(t, l); return b.jsx(Ia.Provider, { scope: e.__scopeMenu, children: b.jsx(fn, { present: r || i.open, children: b.jsx(Ia.Slot, { scope: e.__scopeMenu, children: b.jsx(yp, { id: s.contentId, "aria-labelledby": s.triggerId, ...o, ref: f, align: "start", side: a.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: !1, disableOutsideScroll: !1, trapFocus: !1, onOpenAutoFocus: h => { var c; a.isUsingKeyboardRef.current && ((c = l.current) == null || c.focus()), h.preventDefault(); }, onCloseAutoFocus: h => h.preventDefault(), onFocusOutside: le(e.onFocusOutside, h => { h.target !== s.trigger && i.onOpenChange(!1); }), onEscapeKeyDown: le(e.onEscapeKeyDown, h => { a.onClose(), h.preventDefault(); }), onKeyDown: le(e.onKeyDown, h => { var p; const c = h.currentTarget.contains(h.target), u = pM[a.dir].includes(h.key); c && u && (i.onOpenChange(!1), (p = s.trigger) == null || p.focus(), h.preventDefault()); }) }) }) }) }); });
Mb.displayName = Ib;
function Lb(e) { return e ? "open" : "closed"; }
function Hl(e) { return e === "indeterminate"; }
function bp(e) { return Hl(e) ? "indeterminate" : e ? "checked" : "unchecked"; }
function RM(e) { const t = document.activeElement; for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
        return; }
function IM(e, t) { return e.map((n, r) => e[(t + r) % e.length]); }
function MM(e, t, n) { const o = t.length > 1 && Array.from(t).every(f => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1; let a = IM(e, Math.max(i, 0)); o.length === 1 && (a = a.filter(f => f !== n)); const l = a.find(f => f.toLowerCase().startsWith(o.toLowerCase())); return l !== n ? l : void 0; }
function LM(e, t) { const { x: n, y: r } = e; let o = !1; for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i].x, l = t[i].y, f = t[a].x, h = t[a].y;
    l > r != h > r && n < (f - s) * (r - l) / (h - l) + s && (o = !o);
} return o; }
function DM(e, t) { if (!t)
    return !1; const n = { x: e.clientX, y: e.clientY }; return LM(n, t); }
function Ma(e) { return t => t.pointerType === "mouse" ? e(t) : void 0; }
var FM = gb, $M = mp, BM = xb, UM = wb, zM = xp, VM = bb, qM = ec, HM = Eb, WM = kb, KM = Cb, GM = Tb, ZM = Ab, YM = Pb, QM = Rb, XM = Mb, _p = "DropdownMenu", [JM, VL] = $r(_p, [mb]), bt = mb(), [eL, Db] = JM(_p), Fb = e => { const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: i, onOpenChange: a, modal: s = !0 } = e, l = bt(t), f = E.useRef(null), [h = !1, c] = Cr({ prop: o, defaultProp: i, onChange: a }); return b.jsx(eL, { scope: t, triggerId: sn(), triggerRef: f, contentId: sn(), open: h, onOpenChange: c, onOpenToggle: E.useCallback(() => c(u => !u), [c]), modal: s, children: b.jsx(FM, { ...l, open: h, onOpenChange: c, dir: r, modal: s, children: n }) }); };
Fb.displayName = _p;
var $b = "DropdownMenuTrigger", Bb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Db($b, n), a = bt(n); return b.jsx($M, { asChild: !0, ...a, children: b.jsx(xe.button, { type: "button", id: i.triggerId, "aria-haspopup": "menu", "aria-expanded": i.open, "aria-controls": i.open ? i.contentId : void 0, "data-state": i.open ? "open" : "closed", "data-disabled": r ? "" : void 0, disabled: r, ...o, ref: fu(t, i.triggerRef), onPointerDown: le(e.onPointerDown, s => { !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault()); }), onKeyDown: le(e.onKeyDown, s => { r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault()); }) }) }); });
Bb.displayName = $b;
var tL = "DropdownMenuPortal", Ub = e => { const { __scopeDropdownMenu: t, ...n } = e, r = bt(t); return b.jsx(BM, { ...r, ...n }); };
Ub.displayName = tL;
var zb = "DropdownMenuContent", Vb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = Db(zb, n), i = bt(n), a = E.useRef(!1); return b.jsx(UM, { id: o.contentId, "aria-labelledby": o.triggerId, ...i, ...r, ref: t, onCloseAutoFocus: le(e.onCloseAutoFocus, s => { var l; a.current || (l = o.triggerRef.current) == null || l.focus(), a.current = !1, s.preventDefault(); }), onInteractOutside: le(e.onInteractOutside, s => { const l = s.detail.originalEvent, f = l.button === 0 && l.ctrlKey === !0, h = l.button === 2 || f; (!o.modal || h) && (a.current = !0); }), style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } }); });
Vb.displayName = zb;
var nL = "DropdownMenuGroup", rL = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(zM, { ...o, ...r, ref: t }); });
rL.displayName = nL;
var oL = "DropdownMenuLabel", qb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(VM, { ...o, ...r, ref: t }); });
qb.displayName = oL;
var iL = "DropdownMenuItem", Hb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(qM, { ...o, ...r, ref: t }); });
Hb.displayName = iL;
var aL = "DropdownMenuCheckboxItem", Wb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(HM, { ...o, ...r, ref: t }); });
Wb.displayName = aL;
var sL = "DropdownMenuRadioGroup", lL = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(WM, { ...o, ...r, ref: t }); });
lL.displayName = sL;
var uL = "DropdownMenuRadioItem", Kb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(KM, { ...o, ...r, ref: t }); });
Kb.displayName = uL;
var cL = "DropdownMenuItemIndicator", Gb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(GM, { ...o, ...r, ref: t }); });
Gb.displayName = cL;
var fL = "DropdownMenuSeparator", Zb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(ZM, { ...o, ...r, ref: t }); });
Zb.displayName = fL;
var dL = "DropdownMenuArrow", hL = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(YM, { ...o, ...r, ref: t }); });
hL.displayName = dL;
var pL = "DropdownMenuSubTrigger", Yb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(QM, { ...o, ...r, ref: t }); });
Yb.displayName = pL;
var mL = "DropdownMenuSubContent", Qb = E.forwardRef((e, t) => { const { __scopeDropdownMenu: n, ...r } = e, o = bt(n); return b.jsx(XM, { ...o, ...r, ref: t, style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } }); });
Qb.displayName = mL;
var vL = Fb, gL = Bb, yL = Ub, Xb = Vb, Jb = qb, e_ = Hb, t_ = Wb, n_ = Kb, r_ = Gb, Ep = Zb, o_ = Yb, i_ = Qb;
const xL = vL, wL = gL, bL = E.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => b.jsxs(o_, { ref: o, className: ge("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", t && "pl-8", e), ...r, children: [n, b.jsx(xC, { className: "ml-auto h-4 w-4" })] }));
bL.displayName = o_.displayName;
const _L = E.forwardRef(({ className: e, ...t }, n) => b.jsx(i_, { ref: n, className: ge("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...t }));
_L.displayName = i_.displayName;
const a_ = E.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => b.jsx(yL, { children: b.jsx(Xb, { ref: r, sideOffset: t, className: ge("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...n }) }));
a_.displayName = Xb.displayName;
const kd = E.forwardRef(({ className: e, inset: t, ...n }, r) => b.jsx(e_, { ref: r, className: ge("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e), ...n }));
kd.displayName = e_.displayName;
const EL = E.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => b.jsxs(t_, { ref: o, className: ge("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), checked: n, ...r, children: [b.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: b.jsx(r_, { children: b.jsx(M1, { className: "h-4 w-4" }) }) }), t] }));
EL.displayName = t_.displayName;
const SL = E.forwardRef(({ className: e, children: t, ...n }, r) => b.jsxs(n_, { ref: r, className: ge("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), ...n, children: [b.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: b.jsx(r_, { children: b.jsx(SC, { className: "h-4 w-4 fill-current" }) }) }), t] }));
SL.displayName = n_.displayName;
const s_ = E.forwardRef(({ className: e, inset: t, ...n }, r) => b.jsx(Jb, { ref: r, className: ge("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e), ...n }));
s_.displayName = Jb.displayName;
const kL = E.forwardRef(({ className: e, ...t }, n) => b.jsx(Ep, { ref: n, className: ge("-mx-1 my-1 h-px bg-muted", e), ...t }));
kL.displayName = Ep.displayName;
const l_ = ({ user: e }) => { const t = _h(); return b.jsxs(xL, { children: [b.jsx(wL, { asChild: !0, children: b.jsx("div", { className: "relative cursor-pointer", children: b.jsxs(Zn, { children: [b.jsx(Yn, { src: e.avatarUrl }), b.jsx(Qn, { children: e.name.charAt(0) })] }) }) }), b.jsxs(a_, { align: "end", children: [b.jsxs("div", { className: "px-4 py-3 flex items-center gap-3", children: [b.jsxs(Zn, { className: "w-12 h-12", children: [b.jsx(Yn, { src: e.avatarUrl }), b.jsx(Qn, { children: e.name.charAt(0) })] }), b.jsxs("div", { children: [b.jsx("p", { className: "text-sm font-semibold text-gray-900 dark:text-white", children: e.name }), b.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: e.email }), b.jsx("p", { className: "text-xs text-gray-400 dark:text-gray-500", children: e.role })] })] }), b.jsx(s_, { className: "border-t my-2" }), b.jsx(kd, { onSelect: () => { t("/profile"); }, children: "Profile" }), b.jsx(kd, { onSelect: () => console.log("User logged out"), children: "Logout" })] })] }); }, NL = () => { const [e, t] = E.useState(!1), [n, r] = E.useState(window.innerWidth < 768), o = _h(); E.useEffect(() => { const l = () => r(window.innerWidth < 768); return window.addEventListener("resize", l), () => window.removeEventListener("resize", l); }, []); const i = { name: "John Doe", email: "johndoe@example.com", role: "Student", avatarUrl: "https://github.com/shadcn.png" }, a = [{ name: "Scholarship" }, { name: "Providers" }, { name: "Terms of Use" }], s = () => b.jsx(b.Fragment, { children: a.map(l => b.jsx("li", { children: b.jsx(Re, { variant: "ghost", asChild: !0, className: "w-full justify-start hover:bg-transparent hover:text-blue-500 transition-colors duration-200 dark:hover:text-yellow-500", children: b.jsx("a", { onClick: () => t(!1), className: "hover:underline hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-200 cursor-pointer", children: l.name }) }) }, "")) }); return b.jsx("header", { className: "border-b z-50 sticky top-0 backdrop-blur-md", children: b.jsxs("div", { className: "container mx-auto flex justify-between items-center h-16 px-4", children: [b.jsxs("div", { className: "flex items-center space-x-2", children: [b.jsx("h1", { className: "text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent", children: "ConnectED" }), !n && b.jsx("ul", { className: "hidden md:flex space-x-4", children: b.jsx(s, {}) })] }), b.jsxs(tp, { open: e, onOpenChange: t, children: [b.jsx(np, { asChild: !0, className: "md:hidden", children: b.jsx(Re, { variant: "outline", size: "icon", children: b.jsx(Zh, { className: "h-6 w-6" }) }) }), b.jsxs($u, { side: "right", className: "w-[250px] sm:w-[300px]", children: [b.jsxs("div", { className: "px-4 py-3 flex items-center gap-3 border-b mb-2 ", children: [b.jsxs(Zn, { className: "w-12 h-12", children: [b.jsx(Yn, { src: i.avatarUrl }), b.jsx(Qn, { children: i.name.charAt(0) })] }), b.jsxs("div", { children: [b.jsx("p", { className: "text-sm font-semibold text-gray-900 dark:text-white", children: i.name }), b.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: i.email }), b.jsx("p", { className: "text-xs text-gray-400 dark:text-gray-500", children: i.role })] })] }), b.jsx("nav", { className: "flex flex-col gap-4", children: b.jsx("ul", { className: "flex flex-col gap-2", children: n && b.jsx(s, {}) }) }), b.jsxs("div", { className: "border-t mt-4 pt-4", children: [b.jsx(Re, { variant: "ghost", className: "w-full justify-start", onClick: () => o(""), children: "Profile" }), b.jsx(Re, { variant: "ghost", className: "w-full justify-start mt-2", onClick: () => o(""), children: "Logout" })] })] })] }), !n && b.jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [b.jsx(Yh, {}), b.jsx(l_, { user: i })] })] }) }); };
function CL() { const e = "John Doe"; return b.jsxs(Or, { className: "w-full max-w mx-auto my-8", children: [b.jsx(Tr, { children: b.jsxs("div", { className: "flex items-center mb-4", children: [b.jsxs(Zn, { className: "h-16 w-16 mr-4", children: [b.jsx(Yn, { src: "/placeholder.svg?height=40&width=40", alt: e }), b.jsx(Qn, { children: "JD" })] }), b.jsxs("div", { children: [b.jsxs(oi, { className: "text-3xl font-bold text-primary", children: ["Welcome, ", e] }), b.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Provider" })] })] }) }), b.jsx(Ar, { children: b.jsxs("div", { className: "space-y-6", children: [b.jsx("p", { className: "text-muted-foreground", children: "Create and manage your posts to connect with students and share your expertise." }), b.jsxs("div", { className: "bg-secondary p-6 rounded-lg", children: [b.jsxs("div", { className: "flex items-center justify-between mb-4", children: [b.jsx("h2", { className: "text-xl font-semibold text-secondary-foreground", children: "Create a New Post" }), b.jsx(hb, { children: b.jsxs(Re, { variant: "outline", size: "sm", className: "flex items-center gap-2", children: [b.jsx(ew, { className: "w-4 h-4" }), "New Post"] }) })] }), b.jsx("p", { className: "text-sm text-muted-foreground", children: "Click the button above to create a new post. You can add a title, select a scholarship type, upload a thumbnail, and write your content." })] })] }) })] }); }
const OL = () => b.jsxs("div", { className: "", children: [b.jsx(NL, {}), b.jsx("div", { className: "container mx-auto px-4", children: b.jsx(CL, {}) }), b.jsx("div", { className: "container mx-auto px-4", children: b.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center", children: Hu.map(e => b.jsx(Yo, { postAuthorEmail: e.email, postAuthorName: e.name, postAuthorAvatarSource: e.avatarSource, postTitle: e.postTitle, postThumbnailSource: e.postThumbnailSource, postDescription: e.postDescription, postRatingCount: e.postRatingCount, postBookmarkCount: e.postBookmarkCount, postCommentCount: e.postCommentCount, postType: "", postDate: "" }, e.email)) }) }), b.jsx("div", { className: "container mx-auto px-4", children: b.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center", children: cp.map((e, t) => b.jsx(pp, { thumbnail: e.thumbnail, avatar: e.avatar, provider: e.provider, description: e.description, scholarship: e.scholarship }, t)) }) })] }), u_ = () => { const [e, t] = E.useState(!1), [n, r] = E.useState(window.innerWidth < 768), o = _h(); E.useEffect(() => { const l = () => r(window.innerWidth < 768); return window.addEventListener("resize", l), () => window.removeEventListener("resize", l); }, []); const i = { name: "John Doe", email: "johndoe@example.com", role: "Student", avatarUrl: "https://github.com/shadcn.png" }, a = [{ name: "Scholarship" }, { name: "Providers" }, { name: "Terms of Use" }], s = () => b.jsx(b.Fragment, { children: a.map(l => b.jsx("li", { children: b.jsx(Re, { variant: "ghost", asChild: !0, className: "w-full justify-start hover:bg-transparent hover:text-blue-500 transition-colors duration-200 dark:hover:text-yellow-500", children: b.jsx("a", { onClick: () => t(!1), className: "hover:underline hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-200 cursor-pointer", children: l.name }) }) }, "")) }); return b.jsx("header", { className: "border-b z-50 sticky top-0 backdrop-blur-md", children: b.jsxs("div", { className: "container mx-auto flex justify-between items-center h-16 px-4", children: [b.jsxs("div", { className: "flex items-center space-x-2", children: [b.jsx("h1", { className: "text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent", children: "ConnectED" }), !n && b.jsx("ul", { className: "hidden md:flex space-x-4", children: b.jsx(s, {}) })] }), b.jsxs(tp, { open: e, onOpenChange: t, children: [b.jsx(np, { asChild: !0, className: "md:hidden", children: b.jsx(Re, { variant: "outline", size: "icon", children: b.jsx(Zh, { className: "h-6 w-6" }) }) }), b.jsxs($u, { side: "right", className: "w-[250px] sm:w-[300px]", children: [b.jsxs("div", { className: "px-4 py-3 flex items-center gap-3 border-b mb-2 ", children: [b.jsxs(Zn, { className: "w-12 h-12", children: [b.jsx(Yn, { src: i.avatarUrl }), b.jsx(Qn, { children: i.name.charAt(0) })] }), b.jsxs("div", { children: [b.jsx("p", { className: "text-sm font-semibold text-gray-900 dark:text-white", children: i.name }), b.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: i.email }), b.jsx("p", { className: "text-xs text-gray-400 dark:text-gray-500", children: i.role })] })] }), b.jsx("nav", { className: "flex flex-col gap-4", children: b.jsx("ul", { className: "flex flex-col gap-2", children: n && b.jsx(s, {}) }) }), b.jsxs("div", { className: "border-t mt-4 pt-4", children: [b.jsx(Re, { variant: "ghost", className: "w-full justify-start", onClick: () => o(""), children: "Profile" }), b.jsx(Re, { variant: "ghost", className: "w-full justify-start mt-2", onClick: () => o(""), children: "Logout" })] })] })] }), !n && b.jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [b.jsx(Yh, {}), b.jsx(l_, { user: i })] })] }) }); }, TL = () => { const [e, t] = E.useState(""), n = r => { t(r.target.value); }; return b.jsx("div", { className: "flex justify-center py-10  rounded-lg ", children: b.jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl  ", children: [b.jsx("h1", { className: "text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100", children: "Welcome students, here are the opportunities for you to have a quality education" }), b.jsx("p", { className: "text-lg text-slate-600 dark:text-slate-300 mb-6", children: "Quality Education • Support • Find a job" }), b.jsxs("div", { className: "relative w-full max-w-md", children: [b.jsx("input", { type: "text", className: "w-full px-5 py-3 pl-12 border border-transparent shadow-lg rounded-full text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-500 transition-all", placeholder: "Search for opportunities...", value: e, onChange: n }), b.jsx(tw, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-slate-500 dark:text-slate-400" })] })] }) }); }, AL = () => b.jsxs("div", { className: "", children: [b.jsx(u_, {}), b.jsx("div", { className: "container mx-auto px-4", children: b.jsx(TL, {}) }), b.jsx("div", { className: "container mx-auto px-4", children: b.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center", children: Hu.map(e => b.jsx(Yo, { postAuthorEmail: e.email, postAuthorName: e.name, postAuthorAvatarSource: e.avatarSource, postTitle: e.postTitle, postThumbnailSource: e.postThumbnailSource, postDescription: e.postDescription, postRatingCount: e.postRatingCount, postBookmarkCount: e.postBookmarkCount, postCommentCount: e.postCommentCount }, e.email)) }) }), b.jsx("div", { className: "container mx-auto px-4", children: b.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center", children: cp.map((e, t) => b.jsx(pp, { thumbnail: e.thumbnail, avatar: e.avatar, provider: e.provider, description: e.description, scholarship: e.scholarship }, t)) }) })] }), PL = () => { const [e, t] = E.useState({ name: "Jireh Belen", email: "jirehbelen@student.laverdad.edu.ph", avatar: "https://res.cloudinary.com/dihmqs39z/image/upload/v1719380300/lmsblt2fx20tv1szowiy.jpg" }), n = [{ id: 4, title: "Environmental Studies Award", provider: "Green Earth Foundation", deadline: "2024-10-15" }, { id: 5, title: "Future Entrepreneurs Scholarship", provider: "Business Leaders of Tomorrow", deadline: "2024-11-30" }]; return b.jsxs("div", { className: "scroll-smooth", children: [b.jsx(u_, {}), b.jsx(Ep, {}), b.jsx("div", { className: "container mx-auto", children: b.jsx("main", { className: "flex-1 py-12", children: b.jsx("div", { className: "container px-4 md:px-6", children: b.jsxs("div", { className: "flex flex-col md:flex-row gap-6 ", children: [b.jsx("aside", { className: "", children: b.jsxs(Or, { className: "border-none shadow-none", children: [b.jsxs(Tr, { children: [b.jsxs(Zn, { className: "h-60 w-60 md:h-36 md:w-36 lg:h-60 lg:w-60  mx-auto ", children: [b.jsx(Yn, { src: e.avatar, alt: e.name, className: "" }), b.jsx(Qn, { children: e.name.charAt(0) })] }), b.jsx(oi, { className: "text-4xl md:text-2xl font-bold text-center md:text-start  ", children: e.name }), b.jsx(Oa, { className: "text-center md:text-start", children: e.email })] }), b.jsx(Ar, { children: b.jsxs("nav", { className: "flex flex-col space-y-1 ", children: [b.jsxs(Re, { variant: "ghost", className: "justify-start font-normal ", children: [b.jsx(wA, { className: "mr-2 h-4 w-4" }), "Edit"] }), b.jsxs(Re, { variant: "ghost", className: "justify-start font-normal", children: [b.jsx(_A, { className: "mr-2 h-4 w-4" }), "Settings"] }), b.jsxs(Re, { variant: "ghost", className: "justify-start text-red-500 hover:text-red-600 hover:bg-red-100 font-normal", children: [b.jsx(yA, { className: "mr-2 h-4 w-4" }), "Log out"] })] }) })] }) }), b.jsx("div", { className: "flex-1 md:right-10  ", children: b.jsxs(Ch, { defaultValue: "saved", children: [b.jsxs(mu, { className: "mb-4", children: [b.jsx(_r, { value: "saved", children: "Saved Scholarships" }), b.jsx(_r, { value: "settings", children: "Account Settings" })] }), b.jsxs(Er, { value: "saved", children: [b.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Saved Scholarships" }), n.map(r => b.jsxs(Or, { className: "mb-4", children: [b.jsxs(Tr, { children: [b.jsx(oi, { children: r.title }), b.jsx(Oa, { children: r.provider })] }), b.jsx(Ar, { children: b.jsxs("p", { className: "text-sm text-muted-foreground", children: ["Deadline: ", r.deadline] }) }), b.jsx(vu, { children: b.jsx(Re, { children: "View Details" }) })] }, r.id))] }), b.jsx(Er, { value: "settings" })] }) })] }) }) }) })] }); };
function jL() { return b.jsxs($2, { defaultTheme: "dark", storageKey: "vite-ui-theme", children: [b.jsx(jS, { children: b.jsxs(TS, { children: [b.jsx(Hr, { path: "/", element: b.jsx(cM, {}) }), b.jsx(Hr, { path: "/student", element: b.jsx(AL, {}) }), b.jsx(Hr, { path: "/provider", element: b.jsx(OL, {}) }), b.jsx(Hr, { path: "/profile", element: b.jsx(PL, {}) }), b.jsx(Hr, { path: "/auth", element: b.jsx(DN, {}) }), b.jsx(Hr, { path: "/feed", element: b.jsx(xP, {}) })] }) }), b.jsx(dC, {})] }); }
Qc.createRoot(document.getElementById("root")).render(b.jsx(te.StrictMode, { children: b.jsx(jL, {}) }));
