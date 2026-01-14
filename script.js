function Zw(r, e) {
    for (var s = 0; s < e.length; s++) {
        const i = e[s];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in r)) {
                    const u = Object.getOwnPropertyDescriptor(i, a);
                    u && Object.defineProperty(r, a, u.get ? u : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const u of a)
            if (u.type === "childList")
                for (const d of u.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && i(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(a) {
        const u = {};
        return a.integrity && (u.integrity = a.integrity),
        a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
        u
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const u = s(a);
        fetch(a.href, u)
    }
}
)();
function Zm(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var wc = {
    exports: {}
}
  , Gi = {}
  , bc = {
    exports: {}
}
  , je = {};
var Fh;
function Kw() {
    if (Fh)
        return je;
    Fh = 1;
    var r = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , u = Symbol.for("react.provider")
      , d = Symbol.for("react.context")
      , f = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function b(N) {
        return N === null || typeof N != "object" ? null : (N = x && N[x] || N["@@iterator"],
        typeof N == "function" ? N : null)
    }
    var T = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , R = Object.assign
      , S = {};
    function k(N, $, ke) {
        this.props = N,
        this.context = $,
        this.refs = S,
        this.updater = ke || T
    }
    k.prototype.isReactComponent = {},
    k.prototype.setState = function(N, $) {
        if (typeof N != "object" && typeof N != "function" && N != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, N, $, "setState")
    }
    ,
    k.prototype.forceUpdate = function(N) {
        this.updater.enqueueForceUpdate(this, N, "forceUpdate")
    }
    ;
    function F() {}
    F.prototype = k.prototype;
    function A(N, $, ke) {
        this.props = N,
        this.context = $,
        this.refs = S,
        this.updater = ke || T
    }
    var B = A.prototype = new F;
    B.constructor = A,
    R(B, k.prototype),
    B.isPureReactComponent = !0;
    var U = Array.isArray
      , Q = Object.prototype.hasOwnProperty
      , L = {
        current: null
    }
      , M = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function q(N, $, ke) {
        var Ne, De = {}, Fe = null, Me = null;
        if ($ != null)
            for (Ne in $.ref !== void 0 && (Me = $.ref),
            $.key !== void 0 && (Fe = "" + $.key),
            $)
                Q.call($, Ne) && !M.hasOwnProperty(Ne) && (De[Ne] = $[Ne]);
        var Ve = arguments.length - 2;
        if (Ve === 1)
            De.children = ke;
        else if (1 < Ve) {
            for (var We = Array(Ve), bt = 0; bt < Ve; bt++)
                We[bt] = arguments[bt + 2];
            De.children = We
        }
        if (N && N.defaultProps)
            for (Ne in Ve = N.defaultProps,
            Ve)
                De[Ne] === void 0 && (De[Ne] = Ve[Ne]);
        return {
            $$typeof: r,
            type: N,
            key: Fe,
            ref: Me,
            props: De,
            _owner: L.current
        }
    }
    function ie(N, $) {
        return {
            $$typeof: r,
            type: N.type,
            key: $,
            ref: N.ref,
            props: N.props,
            _owner: N._owner
        }
    }
    function me(N) {
        return typeof N == "object" && N !== null && N.$$typeof === r
    }
    function _e(N) {
        var $ = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + N.replace(/[=:]/g, function(ke) {
            return $[ke]
        })
    }
    var J = /\/+/g;
    function oe(N, $) {
        return typeof N == "object" && N !== null && N.key != null ? _e("" + N.key) : $.toString(36)
    }
    function G(N, $, ke, Ne, De) {
        var Fe = typeof N;
        (Fe === "undefined" || Fe === "boolean") && (N = null);
        var Me = !1;
        if (N === null)
            Me = !0;
        else
            switch (Fe) {
            case "string":
            case "number":
                Me = !0;
                break;
            case "object":
                switch (N.$$typeof) {
                case r:
                case e:
                    Me = !0
                }
            }
        if (Me)
            return Me = N,
            De = De(Me),
            N = Ne === "" ? "." + oe(Me, 0) : Ne,
            U(De) ? (ke = "",
            N != null && (ke = N.replace(J, "$&/") + "/"),
            G(De, $, ke, "", function(bt) {
                return bt
            })) : De != null && (me(De) && (De = ie(De, ke + (!De.key || Me && Me.key === De.key ? "" : ("" + De.key).replace(J, "$&/") + "/") + N)),
            $.push(De)),
            1;
        if (Me = 0,
        Ne = Ne === "" ? "." : Ne + ":",
        U(N))
            for (var Ve = 0; Ve < N.length; Ve++) {
                Fe = N[Ve];
                var We = Ne + oe(Fe, Ve);
                Me += G(Fe, $, ke, We, De)
            }
        else if (We = b(N),
        typeof We == "function")
            for (N = We.call(N),
            Ve = 0; !(Fe = N.next()).done; )
                Fe = Fe.value,
                We = Ne + oe(Fe, Ve++),
                Me += G(Fe, $, ke, We, De);
        else if (Fe === "object")
            throw $ = String(N),
            Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
        return Me
    }
    function be(N, $, ke) {
        if (N == null)
            return N;
        var Ne = []
          , De = 0;
        return G(N, Ne, "", "", function(Fe) {
            return $.call(ke, Fe, De++)
        }),
        Ne
    }
    function ce(N) {
        if (N._status === -1) {
            var $ = N._result;
            $ = $(),
            $.then(function(ke) {
                (N._status === 0 || N._status === -1) && (N._status = 1,
                N._result = ke)
            }, function(ke) {
                (N._status === 0 || N._status === -1) && (N._status = 2,
                N._result = ke)
            }),
            N._status === -1 && (N._status = 0,
            N._result = $)
        }
        if (N._status === 1)
            return N._result.default;
        throw N._result
    }
    var ye = {
        current: null
    }
      , V = {
        transition: null
    }
      , re = {
        ReactCurrentDispatcher: ye,
        ReactCurrentBatchConfig: V,
        ReactCurrentOwner: L
    };
    function te() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return je.Children = {
        map: be,
        forEach: function(N, $, ke) {
            be(N, function() {
                $.apply(this, arguments)
            }, ke)
        },
        count: function(N) {
            var $ = 0;
            return be(N, function() {
                $++
            }),
            $
        },
        toArray: function(N) {
            return be(N, function($) {
                return $
            }) || []
        },
        only: function(N) {
            if (!me(N))
                throw Error("React.Children.only expected to receive a single React element child.");
            return N
        }
    },
    je.Component = k,
    je.Fragment = s,
    je.Profiler = a,
    je.PureComponent = A,
    je.StrictMode = i,
    je.Suspense = h,
    je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re,
    je.act = te,
    je.cloneElement = function(N, $, ke) {
        if (N == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
        var Ne = R({}, N.props)
          , De = N.key
          , Fe = N.ref
          , Me = N._owner;
        if ($ != null) {
            if ($.ref !== void 0 && (Fe = $.ref,
            Me = L.current),
            $.key !== void 0 && (De = "" + $.key),
            N.type && N.type.defaultProps)
                var Ve = N.type.defaultProps;
            for (We in $)
                Q.call($, We) && !M.hasOwnProperty(We) && (Ne[We] = $[We] === void 0 && Ve !== void 0 ? Ve[We] : $[We])
        }
        var We = arguments.length - 2;
        if (We === 1)
            Ne.children = ke;
        else if (1 < We) {
            Ve = Array(We);
            for (var bt = 0; bt < We; bt++)
                Ve[bt] = arguments[bt + 2];
            Ne.children = Ve
        }
        return {
            $$typeof: r,
            type: N.type,
            key: De,
            ref: Fe,
            props: Ne,
            _owner: Me
        }
    }
    ,
    je.createContext = function(N) {
        return N = {
            $$typeof: d,
            _currentValue: N,
            _currentValue2: N,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        N.Provider = {
            $$typeof: u,
            _context: N
        },
        N.Consumer = N
    }
    ,
    je.createElement = q,
    je.createFactory = function(N) {
        var $ = q.bind(null, N);
        return $.type = N,
        $
    }
    ,
    je.createRef = function() {
        return {
            current: null
        }
    }
    ,
    je.forwardRef = function(N) {
        return {
            $$typeof: f,
            render: N
        }
    }
    ,
    je.isValidElement = me,
    je.lazy = function(N) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: N
            },
            _init: ce
        }
    }
    ,
    je.memo = function(N, $) {
        return {
            $$typeof: m,
            type: N,
            compare: $ === void 0 ? null : $
        }
    }
    ,
    je.startTransition = function(N) {
        var $ = V.transition;
        V.transition = {};
        try {
            N()
        } finally {
            V.transition = $
        }
    }
    ,
    je.unstable_act = te,
    je.useCallback = function(N, $) {
        return ye.current.useCallback(N, $)
    }
    ,
    je.useContext = function(N) {
        return ye.current.useContext(N)
    }
    ,
    je.useDebugValue = function() {}
    ,
    je.useDeferredValue = function(N) {
        return ye.current.useDeferredValue(N)
    }
    ,
    je.useEffect = function(N, $) {
        return ye.current.useEffect(N, $)
    }
    ,
    je.useId = function() {
        return ye.current.useId()
    }
    ,
    je.useImperativeHandle = function(N, $, ke) {
        return ye.current.useImperativeHandle(N, $, ke)
    }
    ,
    je.useInsertionEffect = function(N, $) {
        return ye.current.useInsertionEffect(N, $)
    }
    ,
    je.useLayoutEffect = function(N, $) {
        return ye.current.useLayoutEffect(N, $)
    }
    ,
    je.useMemo = function(N, $) {
        return ye.current.useMemo(N, $)
    }
    ,
    je.useReducer = function(N, $, ke) {
        return ye.current.useReducer(N, $, ke)
    }
    ,
    je.useRef = function(N) {
        return ye.current.useRef(N)
    }
    ,
    je.useState = function(N) {
        return ye.current.useState(N)
    }
    ,
    je.useSyncExternalStore = function(N, $, ke) {
        return ye.current.useSyncExternalStore(N, $, ke)
    }
    ,
    je.useTransition = function() {
        return ye.current.useTransition()
    }
    ,
    je.version = "18.3.1",
    je
}
var Mh;
function ml() {
    return Mh || (Mh = 1,
    bc.exports = Kw()),
    bc.exports
}
var Lh;
function Gw() {
    if (Lh)
        return Gi;
    Lh = 1;
    var r = ml()
      , e = Symbol.for("react.element")
      , s = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function d(f, h, m) {
        var g, x = {}, b = null, T = null;
        m !== void 0 && (b = "" + m),
        h.key !== void 0 && (b = "" + h.key),
        h.ref !== void 0 && (T = h.ref);
        for (g in h)
            i.call(h, g) && !u.hasOwnProperty(g) && (x[g] = h[g]);
        if (f && f.defaultProps)
            for (g in h = f.defaultProps,
            h)
                x[g] === void 0 && (x[g] = h[g]);
        return {
            $$typeof: e,
            type: f,
            key: b,
            ref: T,
            props: x,
            _owner: a.current
        }
    }
    return Gi.Fragment = s,
    Gi.jsx = d,
    Gi.jsxs = d,
    Gi
}
var Vh;
function Xw() {
    return Vh || (Vh = 1,
    wc.exports = Gw()),
    wc.exports
}
var v = Xw()
  , Va = {}
  , _c = {
    exports: {}
}
  , Qt = {}
  , Sc = {
    exports: {}
}
  , Cc = {};
var zh;
function Yw() {
    return zh || (zh = 1,
    (function(r) {
        function e(V, re) {
            var te = V.length;
            V.push(re);
            e: for (; 0 < te; ) {
                var N = te - 1 >>> 1
                  , $ = V[N];
                if (0 < a($, re))
                    V[N] = re,
                    V[te] = $,
                    te = N;
                else
                    break e
            }
        }
        function s(V) {
            return V.length === 0 ? null : V[0]
        }
        function i(V) {
            if (V.length === 0)
                return null;
            var re = V[0]
              , te = V.pop();
            if (te !== re) {
                V[0] = te;
                e: for (var N = 0, $ = V.length, ke = $ >>> 1; N < ke; ) {
                    var Ne = 2 * (N + 1) - 1
                      , De = V[Ne]
                      , Fe = Ne + 1
                      , Me = V[Fe];
                    if (0 > a(De, te))
                        Fe < $ && 0 > a(Me, De) ? (V[N] = Me,
                        V[Fe] = te,
                        N = Fe) : (V[N] = De,
                        V[Ne] = te,
                        N = Ne);
                    else if (Fe < $ && 0 > a(Me, te))
                        V[N] = Me,
                        V[Fe] = te,
                        N = Fe;
                    else
                        break e
                }
            }
            return re
        }
        function a(V, re) {
            var te = V.sortIndex - re.sortIndex;
            return te !== 0 ? te : V.id - re.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            r.unstable_now = function() {
                return u.now()
            }
        } else {
            var d = Date
              , f = d.now();
            r.unstable_now = function() {
                return d.now() - f
            }
        }
        var h = []
          , m = []
          , g = 1
          , x = null
          , b = 3
          , T = !1
          , R = !1
          , S = !1
          , k = typeof setTimeout == "function" ? setTimeout : null
          , F = typeof clearTimeout == "function" ? clearTimeout : null
          , A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function B(V) {
            for (var re = s(m); re !== null; ) {
                if (re.callback === null)
                    i(m);
                else if (re.startTime <= V)
                    i(m),
                    re.sortIndex = re.expirationTime,
                    e(h, re);
                else
                    break;
                re = s(m)
            }
        }
        function U(V) {
            if (S = !1,
            B(V),
            !R)
                if (s(h) !== null)
                    R = !0,
                    ce(Q);
                else {
                    var re = s(m);
                    re !== null && ye(U, re.startTime - V)
                }
        }
        function Q(V, re) {
            R = !1,
            S && (S = !1,
            F(q),
            q = -1),
            T = !0;
            var te = b;
            try {
                for (B(re),
                x = s(h); x !== null && (!(x.expirationTime > re) || V && !_e()); ) {
                    var N = x.callback;
                    if (typeof N == "function") {
                        x.callback = null,
                        b = x.priorityLevel;
                        var $ = N(x.expirationTime <= re);
                        re = r.unstable_now(),
                        typeof $ == "function" ? x.callback = $ : x === s(h) && i(h),
                        B(re)
                    } else
                        i(h);
                    x = s(h)
                }
                if (x !== null)
                    var ke = !0;
                else {
                    var Ne = s(m);
                    Ne !== null && ye(U, Ne.startTime - re),
                    ke = !1
                }
                return ke
            } finally {
                x = null,
                b = te,
                T = !1
            }
        }
        var L = !1
          , M = null
          , q = -1
          , ie = 5
          , me = -1;
        function _e() {
            return !(r.unstable_now() - me < ie)
        }
        function J() {
            if (M !== null) {
                var V = r.unstable_now();
                me = V;
                var re = !0;
                try {
                    re = M(!0, V)
                } finally {
                    re ? oe() : (L = !1,
                    M = null)
                }
            } else
                L = !1
        }
        var oe;
        if (typeof A == "function")
            oe = function() {
                A(J)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var G = new MessageChannel
              , be = G.port2;
            G.port1.onmessage = J,
            oe = function() {
                be.postMessage(null)
            }
        } else
            oe = function() {
                k(J, 0)
            }
            ;
        function ce(V) {
            M = V,
            L || (L = !0,
            oe())
        }
        function ye(V, re) {
            q = k(function() {
                V(r.unstable_now())
            }, re)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(V) {
            V.callback = null
        }
        ,
        r.unstable_continueExecution = function() {
            R || T || (R = !0,
            ce(Q))
        }
        ,
        r.unstable_forceFrameRate = function(V) {
            0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < V ? Math.floor(1e3 / V) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return b
        }
        ,
        r.unstable_getFirstCallbackNode = function() {
            return s(h)
        }
        ,
        r.unstable_next = function(V) {
            switch (b) {
            case 1:
            case 2:
            case 3:
                var re = 3;
                break;
            default:
                re = b
            }
            var te = b;
            b = re;
            try {
                return V()
            } finally {
                b = te
            }
        }
        ,
        r.unstable_pauseExecution = function() {}
        ,
        r.unstable_requestPaint = function() {}
        ,
        r.unstable_runWithPriority = function(V, re) {
            switch (V) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                V = 3
            }
            var te = b;
            b = V;
            try {
                return re()
            } finally {
                b = te
            }
        }
        ,
        r.unstable_scheduleCallback = function(V, re, te) {
            var N = r.unstable_now();
            switch (typeof te == "object" && te !== null ? (te = te.delay,
            te = typeof te == "number" && 0 < te ? N + te : N) : te = N,
            V) {
            case 1:
                var $ = -1;
                break;
            case 2:
                $ = 250;
                break;
            case 5:
                $ = 1073741823;
                break;
            case 4:
                $ = 1e4;
                break;
            default:
                $ = 5e3
            }
            return $ = te + $,
            V = {
                id: g++,
                callback: re,
                priorityLevel: V,
                startTime: te,
                expirationTime: $,
                sortIndex: -1
            },
            te > N ? (V.sortIndex = te,
            e(m, V),
            s(h) === null && V === s(m) && (S ? (F(q),
            q = -1) : S = !0,
            ye(U, te - N))) : (V.sortIndex = $,
            e(h, V),
            R || T || (R = !0,
            ce(Q))),
            V
        }
        ,
        r.unstable_shouldYield = _e,
        r.unstable_wrapCallback = function(V) {
            var re = b;
            return function() {
                var te = b;
                b = re;
                try {
                    return V.apply(this, arguments)
                } finally {
                    b = te
                }
            }
        }
    }
    )(Cc)),
    Cc
}
var Bh;
function Jw() {
    return Bh || (Bh = 1,
    Sc.exports = Yw()),
    Sc.exports
}
var Uh;
function e0() {
    if (Uh)
        return Qt;
    Uh = 1;
    var r = ml()
      , e = Jw();
    function s(t) {
        for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++)
            n += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , a = {};
    function u(t, n) {
        d(t, n),
        d(t + "Capture", n)
    }
    function d(t, n) {
        for (a[t] = n,
        t = 0; t < n.length; t++)
            i.add(n[t])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , x = {};
    function b(t) {
        return h.call(x, t) ? !0 : h.call(g, t) ? !1 : m.test(t) ? x[t] = !0 : (g[t] = !0,
        !1)
    }
    function T(t, n, o, l) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return l ? !1 : o !== null ? !o.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
            t !== "data-" && t !== "aria-");
        default:
            return !1
        }
    }
    function R(t, n, o, l) {
        if (n === null || typeof n > "u" || T(t, n, o, l))
            return !0;
        if (l)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n
            }
        return !1
    }
    function S(t, n, o, l, c, p, y) {
        this.acceptsBooleans = n === 2 || n === 3 || n === 4,
        this.attributeName = l,
        this.attributeNamespace = c,
        this.mustUseProperty = o,
        this.propertyName = t,
        this.type = n,
        this.sanitizeURL = p,
        this.removeEmptyString = y
    }
    var k = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
        k[t] = new S(t,0,!1,t,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
        var n = t[0];
        k[n] = new S(n,1,!1,t[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
        k[t] = new S(t,2,!1,t.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
        k[t] = new S(t,2,!1,t,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
        k[t] = new S(t,3,!1,t.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(t) {
        k[t] = new S(t,3,!0,t,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(t) {
        k[t] = new S(t,4,!1,t,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(t) {
        k[t] = new S(t,6,!1,t,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(t) {
        k[t] = new S(t,5,!1,t.toLowerCase(),null,!1,!1)
    });
    var F = /[\-:]([a-z])/g;
    function A(t) {
        return t[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
        var n = t.replace(F, A);
        k[n] = new S(n,1,!1,t,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
        var n = t.replace(F, A);
        k[n] = new S(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
        var n = t.replace(F, A);
        k[n] = new S(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(t) {
        k[t] = new S(t,1,!1,t.toLowerCase(),null,!1,!1)
    }),
    k.xlinkHref = new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(t) {
        k[t] = new S(t,1,!1,t.toLowerCase(),null,!0,!0)
    });
    function B(t, n, o, l) {
        var c = k.hasOwnProperty(n) ? k[n] : null;
        (c !== null ? c.type !== 0 : l || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (R(n, o, c, l) && (o = null),
        l || c === null ? b(n) && (o === null ? t.removeAttribute(n) : t.setAttribute(n, "" + o)) : c.mustUseProperty ? t[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (n = c.attributeName,
        l = c.attributeNamespace,
        o === null ? t.removeAttribute(n) : (c = c.type,
        o = c === 3 || c === 4 && o === !0 ? "" : "" + o,
        l ? t.setAttributeNS(l, n, o) : t.setAttribute(n, o))))
    }
    var U = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , Q = Symbol.for("react.element")
      , L = Symbol.for("react.portal")
      , M = Symbol.for("react.fragment")
      , q = Symbol.for("react.strict_mode")
      , ie = Symbol.for("react.profiler")
      , me = Symbol.for("react.provider")
      , _e = Symbol.for("react.context")
      , J = Symbol.for("react.forward_ref")
      , oe = Symbol.for("react.suspense")
      , G = Symbol.for("react.suspense_list")
      , be = Symbol.for("react.memo")
      , ce = Symbol.for("react.lazy")
      , ye = Symbol.for("react.offscreen")
      , V = Symbol.iterator;
    function re(t) {
        return t === null || typeof t != "object" ? null : (t = V && t[V] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var te = Object.assign, N;
    function $(t) {
        if (N === void 0)
            try {
                throw Error()
            } catch (o) {
                var n = o.stack.trim().match(/\n( *(at )?)/);
                N = n && n[1] || ""
            }
        return `
` + N + t
    }
    var ke = !1;
    function Ne(t, n) {
        if (!t || ke)
            return "";
        ke = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (n)
                if (n = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(n.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(n, [])
                    } catch (D) {
                        var l = D
                    }
                    Reflect.construct(t, [], n)
                } else {
                    try {
                        n.call()
                    } catch (D) {
                        l = D
                    }
                    t.call(n.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (D) {
                    l = D
                }
                t()
            }
        } catch (D) {
            if (D && l && typeof D.stack == "string") {
                for (var c = D.stack.split(`
`), p = l.stack.split(`
`), y = c.length - 1, _ = p.length - 1; 1 <= y && 0 <= _ && c[y] !== p[_]; )
                    _--;
                for (; 1 <= y && 0 <= _; y--,
                _--)
                    if (c[y] !== p[_]) {
                        if (y !== 1 || _ !== 1)
                            do
                                if (y--,
                                _--,
                                0 > _ || c[y] !== p[_]) {
                                    var E = `
` + c[y].replace(" at new ", " at ");
                                    return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)),
                                    E
                                }
                            while (1 <= y && 0 <= _);
                        break
                    }
            }
        } finally {
            ke = !1,
            Error.prepareStackTrace = o
        }
        return (t = t ? t.displayName || t.name : "") ? $(t) : ""
    }
    function De(t) {
        switch (t.tag) {
        case 5:
            return $(t.type);
        case 16:
            return $("Lazy");
        case 13:
            return $("Suspense");
        case 19:
            return $("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = Ne(t.type, !1),
            t;
        case 11:
            return t = Ne(t.type.render, !1),
            t;
        case 1:
            return t = Ne(t.type, !0),
            t;
        default:
            return ""
        }
    }
    function Fe(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case M:
            return "Fragment";
        case L:
            return "Portal";
        case ie:
            return "Profiler";
        case q:
            return "StrictMode";
        case oe:
            return "Suspense";
        case G:
            return "SuspenseList"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case _e:
                return (t.displayName || "Context") + ".Consumer";
            case me:
                return (t._context.displayName || "Context") + ".Provider";
            case J:
                var n = t.render;
                return t = t.displayName,
                t || (t = n.displayName || n.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case be:
                return n = t.displayName || null,
                n !== null ? n : Fe(t.type) || "Memo";
            case ce:
                n = t._payload,
                t = t._init;
                try {
                    return Fe(t(n))
                } catch {}
            }
        return null
    }
    function Me(t) {
        var n = t.type;
        switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = n.render,
            t = t.displayName || t.name || "",
            n.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Fe(n);
        case 8:
            return n === q ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n == "function")
                return n.displayName || n.name || null;
            if (typeof n == "string")
                return n
        }
        return null
    }
    function Ve(t) {
        switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function We(t) {
        var n = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }
    function bt(t) {
        var n = We(t) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n)
          , l = "" + t[n];
        if (!t.hasOwnProperty(n) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var c = o.get
              , p = o.set;
            return Object.defineProperty(t, n, {
                configurable: !0,
                get: function() {
                    return c.call(this)
                },
                set: function(y) {
                    l = "" + y,
                    p.call(this, y)
                }
            }),
            Object.defineProperty(t, n, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(y) {
                    l = "" + y
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[n]
                }
            }
        }
    }
    function Ir(t) {
        t._valueTracker || (t._valueTracker = bt(t))
    }
    function Qn(t) {
        if (!t)
            return !1;
        var n = t._valueTracker;
        if (!n)
            return !0;
        var o = n.getValue()
          , l = "";
        return t && (l = We(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== o ? (n.setValue(t),
        !0) : !1
    }
    function dr(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    function ps(t, n) {
        var o = n.checked;
        return te({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? t._wrapperState.initialChecked
        })
    }
    function Ro(t, n) {
        var o = n.defaultValue == null ? "" : n.defaultValue
          , l = n.checked != null ? n.checked : n.defaultChecked;
        o = Ve(n.value != null ? n.value : o),
        t._wrapperState = {
            initialChecked: l,
            initialValue: o,
            controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
        }
    }
    function di(t, n) {
        n = n.checked,
        n != null && B(t, "checked", n, !1)
    }
    function hs(t, n) {
        di(t, n);
        var o = Ve(n.value)
          , l = n.type;
        if (o != null)
            l === "number" ? (o === 0 && t.value === "" || t.value != o) && (t.value = "" + o) : t.value !== "" + o && (t.value = "" + o);
        else if (l === "submit" || l === "reset") {
            t.removeAttribute("value");
            return
        }
        n.hasOwnProperty("value") ? fi(t, n.type, o) : n.hasOwnProperty("defaultValue") && fi(t, n.type, Ve(n.defaultValue)),
        n.checked == null && n.defaultChecked != null && (t.defaultChecked = !!n.defaultChecked)
    }
    function Ao(t, n, o) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var l = n.type;
            if (!(l !== "submit" && l !== "reset" || n.value !== void 0 && n.value !== null))
                return;
            n = "" + t._wrapperState.initialValue,
            o || n === t.value || (t.value = n),
            t.defaultValue = n
        }
        o = t.name,
        o !== "" && (t.name = ""),
        t.defaultChecked = !!t._wrapperState.initialChecked,
        o !== "" && (t.name = o)
    }
    function fi(t, n, o) {
        (n !== "number" || dr(t.ownerDocument) !== t) && (o == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + o && (t.defaultValue = "" + o))
    }
    var ms = Array.isArray;
    function qr(t, n, o, l) {
        if (t = t.options,
        n) {
            n = {};
            for (var c = 0; c < o.length; c++)
                n["$" + o[c]] = !0;
            for (o = 0; o < t.length; o++)
                c = n.hasOwnProperty("$" + t[o].value),
                t[o].selected !== c && (t[o].selected = c),
                c && l && (t[o].defaultSelected = !0)
        } else {
            for (o = "" + Ve(o),
            n = null,
            c = 0; c < t.length; c++) {
                if (t[c].value === o) {
                    t[c].selected = !0,
                    l && (t[c].defaultSelected = !0);
                    return
                }
                n !== null || t[c].disabled || (n = t[c])
            }
            n !== null && (n.selected = !0)
        }
    }
    function C(t, n) {
        if (n.dangerouslySetInnerHTML != null)
            throw Error(s(91));
        return te({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }
    function j(t, n) {
        var o = n.value;
        if (o == null) {
            if (o = n.children,
            n = n.defaultValue,
            o != null) {
                if (n != null)
                    throw Error(s(92));
                if (ms(o)) {
                    if (1 < o.length)
                        throw Error(s(93));
                    o = o[0]
                }
                n = o
            }
            n == null && (n = ""),
            o = n
        }
        t._wrapperState = {
            initialValue: Ve(o)
        }
    }
    function z(t, n) {
        var o = Ve(n.value)
          , l = Ve(n.defaultValue);
        o != null && (o = "" + o,
        o !== t.value && (t.value = o),
        n.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)),
        l != null && (t.defaultValue = "" + l)
    }
    function le(t) {
        var n = t.textContent;
        n === t._wrapperState.initialValue && n !== "" && n !== null && (t.value = n)
    }
    function se(t) {
        switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Y(t, n) {
        return t == null || t === "http://www.w3.org/1999/xhtml" ? se(n) : t === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
    }
    var fe, Le = (function(t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, o, l, c) {
            MSApp.execUnsafeLocalFunction(function() {
                return t(n, o, l, c)
            })
        }
        : t
    }
    )(function(t, n) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
            t.innerHTML = n;
        else {
            for (fe = fe || document.createElement("div"),
            fe.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = fe.firstChild; t.firstChild; )
                t.removeChild(t.firstChild);
            for (; n.firstChild; )
                t.appendChild(n.firstChild)
        }
    });
    function Ke(t, n) {
        if (n) {
            var o = t.firstChild;
            if (o && o === t.lastChild && o.nodeType === 3) {
                o.nodeValue = n;
                return
            }
        }
        t.textContent = n
    }
    var lt = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , Il = ["Webkit", "ms", "Moz", "O"];
    Object.keys(lt).forEach(function(t) {
        Il.forEach(function(n) {
            n = n + t.charAt(0).toUpperCase() + t.substring(1),
            lt[n] = lt[t]
        })
    });
    function gs(t, n, o) {
        return n == null || typeof n == "boolean" || n === "" ? "" : o || typeof n != "number" || n === 0 || lt.hasOwnProperty(t) && lt[t] ? ("" + n).trim() : n + "px"
    }
    function ys(t, n) {
        t = t.style;
        for (var o in n)
            if (n.hasOwnProperty(o)) {
                var l = o.indexOf("--") === 0
                  , c = gs(o, n[o], l);
                o === "float" && (o = "cssFloat"),
                l ? t.setProperty(o, c) : t[o] = c
            }
    }
    var jl = te({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function vs(t, n) {
        if (n) {
            if (jl[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
                throw Error(s(137, t));
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null)
                    throw Error(s(60));
                if (typeof n.dangerouslySetInnerHTML != "object" || !("__html"in n.dangerouslySetInnerHTML))
                    throw Error(s(61))
            }
            if (n.style != null && typeof n.style != "object")
                throw Error(s(62))
        }
    }
    function pi(t, n) {
        if (t.indexOf("-") === -1)
            return typeof n.is == "string";
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var xs = null;
    function Dl(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Fl = null
      , ws = null
      , bs = null;
    function Yd(t) {
        if (t = Di(t)) {
            if (typeof Fl != "function")
                throw Error(s(280));
            var n = t.stateNode;
            n && (n = ea(n),
            Fl(t.stateNode, t.type, n))
        }
    }
    function Jd(t) {
        ws ? bs ? bs.push(t) : bs = [t] : ws = t
    }
    function ef() {
        if (ws) {
            var t = ws
              , n = bs;
            if (bs = ws = null,
            Yd(t),
            n)
                for (t = 0; t < n.length; t++)
                    Yd(n[t])
        }
    }
    function tf(t, n) {
        return t(n)
    }
    function rf() {}
    var Ml = !1;
    function nf(t, n, o) {
        if (Ml)
            return t(n, o);
        Ml = !0;
        try {
            return tf(t, n, o)
        } finally {
            Ml = !1,
            (ws !== null || bs !== null) && (rf(),
            ef())
        }
    }
    function hi(t, n) {
        var o = t.stateNode;
        if (o === null)
            return null;
        var l = ea(o);
        if (l === null)
            return null;
        o = l[n];
        e: switch (n) {
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
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break e;
        default:
            t = !1
        }
        if (t)
            return null;
        if (o && typeof o != "function")
            throw Error(s(231, n, typeof o));
        return o
    }
    var Ll = !1;
    if (f)
        try {
            var mi = {};
            Object.defineProperty(mi, "passive", {
                get: function() {
                    Ll = !0
                }
            }),
            window.addEventListener("test", mi, mi),
            window.removeEventListener("test", mi, mi)
        } catch {
            Ll = !1
        }
    function ex(t, n, o, l, c, p, y, _, E) {
        var D = Array.prototype.slice.call(arguments, 3);
        try {
            n.apply(o, D)
        } catch (Z) {
            this.onError(Z)
        }
    }
    var gi = !1
      , Oo = null
      , Io = !1
      , Vl = null
      , tx = {
        onError: function(t) {
            gi = !0,
            Oo = t
        }
    };
    function rx(t, n, o, l, c, p, y, _, E) {
        gi = !1,
        Oo = null,
        ex.apply(tx, arguments)
    }
    function nx(t, n, o, l, c, p, y, _, E) {
        if (rx.apply(this, arguments),
        gi) {
            if (gi) {
                var D = Oo;
                gi = !1,
                Oo = null
            } else
                throw Error(s(198));
            Io || (Io = !0,
            Vl = D)
        }
    }
    function Hn(t) {
        var n = t
          , o = t;
        if (t.alternate)
            for (; n.return; )
                n = n.return;
        else {
            t = n;
            do
                n = t,
                (n.flags & 4098) !== 0 && (o = n.return),
                t = n.return;
            while (t)
        }
        return n.tag === 3 ? o : null
    }
    function sf(t) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n === null && (t = t.alternate,
            t !== null && (n = t.memoizedState)),
            n !== null)
                return n.dehydrated
        }
        return null
    }
    function of(t) {
        if (Hn(t) !== t)
            throw Error(s(188))
    }
    function sx(t) {
        var n = t.alternate;
        if (!n) {
            if (n = Hn(t),
            n === null)
                throw Error(s(188));
            return n !== t ? null : t
        }
        for (var o = t, l = n; ; ) {
            var c = o.return;
            if (c === null)
                break;
            var p = c.alternate;
            if (p === null) {
                if (l = c.return,
                l !== null) {
                    o = l;
                    continue
                }
                break
            }
            if (c.child === p.child) {
                for (p = c.child; p; ) {
                    if (p === o)
                        return of(c),
                        t;
                    if (p === l)
                        return of(c),
                        n;
                    p = p.sibling
                }
                throw Error(s(188))
            }
            if (o.return !== l.return)
                o = c,
                l = p;
            else {
                for (var y = !1, _ = c.child; _; ) {
                    if (_ === o) {
                        y = !0,
                        o = c,
                        l = p;
                        break
                    }
                    if (_ === l) {
                        y = !0,
                        l = c,
                        o = p;
                        break
                    }
                    _ = _.sibling
                }
                if (!y) {
                    for (_ = p.child; _; ) {
                        if (_ === o) {
                            y = !0,
                            o = p,
                            l = c;
                            break
                        }
                        if (_ === l) {
                            y = !0,
                            l = p,
                            o = c;
                            break
                        }
                        _ = _.sibling
                    }
                    if (!y)
                        throw Error(s(189))
                }
            }
            if (o.alternate !== l)
                throw Error(s(190))
        }
        if (o.tag !== 3)
            throw Error(s(188));
        return o.stateNode.current === o ? t : n
    }
    function af(t) {
        return t = sx(t),
        t !== null ? lf(t) : null
    }
    function lf(t) {
        if (t.tag === 5 || t.tag === 6)
            return t;
        for (t = t.child; t !== null; ) {
            var n = lf(t);
            if (n !== null)
                return n;
            t = t.sibling
        }
        return null
    }
    var uf = e.unstable_scheduleCallback
      , cf = e.unstable_cancelCallback
      , ix = e.unstable_shouldYield
      , ox = e.unstable_requestPaint
      , dt = e.unstable_now
      , ax = e.unstable_getCurrentPriorityLevel
      , zl = e.unstable_ImmediatePriority
      , df = e.unstable_UserBlockingPriority
      , jo = e.unstable_NormalPriority
      , lx = e.unstable_LowPriority
      , ff = e.unstable_IdlePriority
      , Do = null
      , jr = null;
    function ux(t) {
        if (jr && typeof jr.onCommitFiberRoot == "function")
            try {
                jr.onCommitFiberRoot(Do, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
    }
    var fr = Math.clz32 ? Math.clz32 : fx
      , cx = Math.log
      , dx = Math.LN2;
    function fx(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (cx(t) / dx | 0) | 0
    }
    var Fo = 64
      , Mo = 4194304;
    function yi(t) {
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
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
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
        }
    }
    function Lo(t, n) {
        var o = t.pendingLanes;
        if (o === 0)
            return 0;
        var l = 0
          , c = t.suspendedLanes
          , p = t.pingedLanes
          , y = o & 268435455;
        if (y !== 0) {
            var _ = y & ~c;
            _ !== 0 ? l = yi(_) : (p &= y,
            p !== 0 && (l = yi(p)))
        } else
            y = o & ~c,
            y !== 0 ? l = yi(y) : p !== 0 && (l = yi(p));
        if (l === 0)
            return 0;
        if (n !== 0 && n !== l && (n & c) === 0 && (c = l & -l,
        p = n & -n,
        c >= p || c === 16 && (p & 4194240) !== 0))
            return n;
        if ((l & 4) !== 0 && (l |= o & 16),
        n = t.entangledLanes,
        n !== 0)
            for (t = t.entanglements,
            n &= l; 0 < n; )
                o = 31 - fr(n),
                c = 1 << o,
                l |= t[o],
                n &= ~c;
        return l
    }
    function px(t, n) {
        switch (t) {
        case 1:
        case 2:
        case 4:
            return n + 250;
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
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function hx(t, n) {
        for (var o = t.suspendedLanes, l = t.pingedLanes, c = t.expirationTimes, p = t.pendingLanes; 0 < p; ) {
            var y = 31 - fr(p)
              , _ = 1 << y
              , E = c[y];
            E === -1 ? ((_ & o) === 0 || (_ & l) !== 0) && (c[y] = px(_, n)) : E <= n && (t.expiredLanes |= _),
            p &= ~_
        }
    }
    function Bl(t) {
        return t = t.pendingLanes & -1073741825,
        t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    }
    function pf() {
        var t = Fo;
        return Fo <<= 1,
        (Fo & 4194240) === 0 && (Fo = 64),
        t
    }
    function Ul(t) {
        for (var n = [], o = 0; 31 > o; o++)
            n.push(t);
        return n
    }
    function vi(t, n, o) {
        t.pendingLanes |= n,
        n !== 536870912 && (t.suspendedLanes = 0,
        t.pingedLanes = 0),
        t = t.eventTimes,
        n = 31 - fr(n),
        t[n] = o
    }
    function mx(t, n) {
        var o = t.pendingLanes & ~n;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.expiredLanes &= n,
        t.mutableReadLanes &= n,
        t.entangledLanes &= n,
        n = t.entanglements;
        var l = t.eventTimes;
        for (t = t.expirationTimes; 0 < o; ) {
            var c = 31 - fr(o)
              , p = 1 << c;
            n[c] = 0,
            l[c] = -1,
            t[c] = -1,
            o &= ~p
        }
    }
    function $l(t, n) {
        var o = t.entangledLanes |= n;
        for (t = t.entanglements; o; ) {
            var l = 31 - fr(o)
              , c = 1 << l;
            c & n | t[l] & n && (t[l] |= n),
            o &= ~c
        }
    }
    var qe = 0;
    function hf(t) {
        return t &= -t,
        1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var mf, Ql, gf, yf, vf, Hl = !1, Vo = [], dn = null, fn = null, pn = null, xi = new Map, wi = new Map, hn = [], gx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function xf(t, n) {
        switch (t) {
        case "focusin":
        case "focusout":
            dn = null;
            break;
        case "dragenter":
        case "dragleave":
            fn = null;
            break;
        case "mouseover":
        case "mouseout":
            pn = null;
            break;
        case "pointerover":
        case "pointerout":
            xi.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            wi.delete(n.pointerId)
        }
    }
    function bi(t, n, o, l, c, p) {
        return t === null || t.nativeEvent !== p ? (t = {
            blockedOn: n,
            domEventName: o,
            eventSystemFlags: l,
            nativeEvent: p,
            targetContainers: [c]
        },
        n !== null && (n = Di(n),
        n !== null && Ql(n)),
        t) : (t.eventSystemFlags |= l,
        n = t.targetContainers,
        c !== null && n.indexOf(c) === -1 && n.push(c),
        t)
    }
    function yx(t, n, o, l, c) {
        switch (n) {
        case "focusin":
            return dn = bi(dn, t, n, o, l, c),
            !0;
        case "dragenter":
            return fn = bi(fn, t, n, o, l, c),
            !0;
        case "mouseover":
            return pn = bi(pn, t, n, o, l, c),
            !0;
        case "pointerover":
            var p = c.pointerId;
            return xi.set(p, bi(xi.get(p) || null, t, n, o, l, c)),
            !0;
        case "gotpointercapture":
            return p = c.pointerId,
            wi.set(p, bi(wi.get(p) || null, t, n, o, l, c)),
            !0
        }
        return !1
    }
    function wf(t) {
        var n = Wn(t.target);
        if (n !== null) {
            var o = Hn(n);
            if (o !== null) {
                if (n = o.tag,
                n === 13) {
                    if (n = sf(o),
                    n !== null) {
                        t.blockedOn = n,
                        vf(t.priority, function() {
                            gf(o)
                        });
                        return
                    }
                } else if (n === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function zo(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var n = t.targetContainers; 0 < n.length; ) {
            var o = ql(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
            if (o === null) {
                o = t.nativeEvent;
                var l = new o.constructor(o.type,o);
                xs = l,
                o.target.dispatchEvent(l),
                xs = null
            } else
                return n = Di(o),
                n !== null && Ql(n),
                t.blockedOn = o,
                !1;
            n.shift()
        }
        return !0
    }
    function bf(t, n, o) {
        zo(t) && o.delete(n)
    }
    function vx() {
        Hl = !1,
        dn !== null && zo(dn) && (dn = null),
        fn !== null && zo(fn) && (fn = null),
        pn !== null && zo(pn) && (pn = null),
        xi.forEach(bf),
        wi.forEach(bf)
    }
    function _i(t, n) {
        t.blockedOn === n && (t.blockedOn = null,
        Hl || (Hl = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, vx)))
    }
    function Si(t) {
        function n(c) {
            return _i(c, t)
        }
        if (0 < Vo.length) {
            _i(Vo[0], t);
            for (var o = 1; o < Vo.length; o++) {
                var l = Vo[o];
                l.blockedOn === t && (l.blockedOn = null)
            }
        }
        for (dn !== null && _i(dn, t),
        fn !== null && _i(fn, t),
        pn !== null && _i(pn, t),
        xi.forEach(n),
        wi.forEach(n),
        o = 0; o < hn.length; o++)
            l = hn[o],
            l.blockedOn === t && (l.blockedOn = null);
        for (; 0 < hn.length && (o = hn[0],
        o.blockedOn === null); )
            wf(o),
            o.blockedOn === null && hn.shift()
    }
    var _s = U.ReactCurrentBatchConfig
      , Bo = !0;
    function xx(t, n, o, l) {
        var c = qe
          , p = _s.transition;
        _s.transition = null;
        try {
            qe = 1,
            Wl(t, n, o, l)
        } finally {
            qe = c,
            _s.transition = p
        }
    }
    function wx(t, n, o, l) {
        var c = qe
          , p = _s.transition;
        _s.transition = null;
        try {
            qe = 4,
            Wl(t, n, o, l)
        } finally {
            qe = c,
            _s.transition = p
        }
    }
    function Wl(t, n, o, l) {
        if (Bo) {
            var c = ql(t, n, o, l);
            if (c === null)
                cu(t, n, l, Uo, o),
                xf(t, l);
            else if (yx(c, t, n, o, l))
                l.stopPropagation();
            else if (xf(t, l),
            n & 4 && -1 < gx.indexOf(t)) {
                for (; c !== null; ) {
                    var p = Di(c);
                    if (p !== null && mf(p),
                    p = ql(t, n, o, l),
                    p === null && cu(t, n, l, Uo, o),
                    p === c)
                        break;
                    c = p
                }
                c !== null && l.stopPropagation()
            } else
                cu(t, n, l, null, o)
        }
    }
    var Uo = null;
    function ql(t, n, o, l) {
        if (Uo = null,
        t = Dl(l),
        t = Wn(t),
        t !== null)
            if (n = Hn(t),
            n === null)
                t = null;
            else if (o = n.tag,
            o === 13) {
                if (t = sf(n),
                t !== null)
                    return t;
                t = null
            } else if (o === 3) {
                if (n.stateNode.current.memoizedState.isDehydrated)
                    return n.tag === 3 ? n.stateNode.containerInfo : null;
                t = null
            } else
                n !== t && (t = null);
        return Uo = t,
        null
    }
    function _f(t) {
        switch (t) {
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
        case "selectstart":
            return 1;
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
        case "pointerleave":
            return 4;
        case "message":
            switch (ax()) {
            case zl:
                return 1;
            case df:
                return 4;
            case jo:
            case lx:
                return 16;
            case ff:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var mn = null
      , Zl = null
      , $o = null;
    function Sf() {
        if ($o)
            return $o;
        var t, n = Zl, o = n.length, l, c = "value"in mn ? mn.value : mn.textContent, p = c.length;
        for (t = 0; t < o && n[t] === c[t]; t++)
            ;
        var y = o - t;
        for (l = 1; l <= y && n[o - l] === c[p - l]; l++)
            ;
        return $o = c.slice(t, 1 < l ? 1 - l : void 0)
    }
    function Qo(t) {
        var n = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && n === 13 && (t = 13)) : t = n,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Ho() {
        return !0
    }
    function Cf() {
        return !1
    }
    function qt(t) {
        function n(o, l, c, p, y) {
            this._reactName = o,
            this._targetInst = c,
            this.type = l,
            this.nativeEvent = p,
            this.target = y,
            this.currentTarget = null;
            for (var _ in t)
                t.hasOwnProperty(_) && (o = t[_],
                this[_] = o ? o(p) : p[_]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Ho : Cf,
            this.isPropagationStopped = Cf,
            this
        }
        return te(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = Ho)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = Ho)
            },
            persist: function() {},
            isPersistent: Ho
        }),
        n
    }
    var Ss = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Kl = qt(Ss), Ci = te({}, Ss, {
        view: 0,
        detail: 0
    }), bx = qt(Ci), Gl, Xl, ki, Wo = te({}, Ci, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Jl,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== ki && (ki && t.type === "mousemove" ? (Gl = t.screenX - ki.screenX,
            Xl = t.screenY - ki.screenY) : Xl = Gl = 0,
            ki = t),
            Gl)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Xl
        }
    }), kf = qt(Wo), _x = te({}, Wo, {
        dataTransfer: 0
    }), Sx = qt(_x), Cx = te({}, Ci, {
        relatedTarget: 0
    }), Yl = qt(Cx), kx = te({}, Ss, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ex = qt(kx), Tx = te({}, Ss, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Px = qt(Tx), Nx = te({}, Ss, {
        data: 0
    }), Ef = qt(Nx), Rx = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Ax = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Ox = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Ix(t) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(t) : (t = Ox[t]) ? !!n[t] : !1
    }
    function Jl() {
        return Ix
    }
    var jx = te({}, Ci, {
        key: function(t) {
            if (t.key) {
                var n = Rx[t.key] || t.key;
                if (n !== "Unidentified")
                    return n
            }
            return t.type === "keypress" ? (t = Qo(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Ax[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Jl,
        charCode: function(t) {
            return t.type === "keypress" ? Qo(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Qo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Dx = qt(jx)
      , Fx = te({}, Wo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Tf = qt(Fx)
      , Mx = te({}, Ci, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Jl
    })
      , Lx = qt(Mx)
      , Vx = te({}, Ss, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , zx = qt(Vx)
      , Bx = te({}, Wo, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Ux = qt(Bx)
      , $x = [9, 13, 27, 32]
      , eu = f && "CompositionEvent"in window
      , Ei = null;
    f && "documentMode"in document && (Ei = document.documentMode);
    var Qx = f && "TextEvent"in window && !Ei
      , Pf = f && (!eu || Ei && 8 < Ei && 11 >= Ei)
      , Nf = " "
      , Rf = !1;
    function Af(t, n) {
        switch (t) {
        case "keyup":
            return $x.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Of(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var Cs = !1;
    function Hx(t, n) {
        switch (t) {
        case "compositionend":
            return Of(n);
        case "keypress":
            return n.which !== 32 ? null : (Rf = !0,
            Nf);
        case "textInput":
            return t = n.data,
            t === Nf && Rf ? null : t;
        default:
            return null
        }
    }
    function Wx(t, n) {
        if (Cs)
            return t === "compositionend" || !eu && Af(t, n) ? (t = Sf(),
            $o = Zl = mn = null,
            Cs = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                if (n.char && 1 < n.char.length)
                    return n.char;
                if (n.which)
                    return String.fromCharCode(n.which)
            }
            return null;
        case "compositionend":
            return Pf && n.locale !== "ko" ? null : n.data;
        default:
            return null
        }
    }
    var qx = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function If(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n === "input" ? !!qx[t.type] : n === "textarea"
    }
    function jf(t, n, o, l) {
        Jd(l),
        n = Xo(n, "onChange"),
        0 < n.length && (o = new Kl("onChange","change",null,o,l),
        t.push({
            event: o,
            listeners: n
        }))
    }
    var Ti = null
      , Pi = null;
    function Zx(t) {
        Yf(t, 0)
    }
    function qo(t) {
        var n = Ns(t);
        if (Qn(n))
            return t
    }
    function Kx(t, n) {
        if (t === "change")
            return n
    }
    var Df = !1;
    if (f) {
        var tu;
        if (f) {
            var ru = "oninput"in document;
            if (!ru) {
                var Ff = document.createElement("div");
                Ff.setAttribute("oninput", "return;"),
                ru = typeof Ff.oninput == "function"
            }
            tu = ru
        } else
            tu = !1;
        Df = tu && (!document.documentMode || 9 < document.documentMode)
    }
    function Mf() {
        Ti && (Ti.detachEvent("onpropertychange", Lf),
        Pi = Ti = null)
    }
    function Lf(t) {
        if (t.propertyName === "value" && qo(Pi)) {
            var n = [];
            jf(n, Pi, t, Dl(t)),
            nf(Zx, n)
        }
    }
    function Gx(t, n, o) {
        t === "focusin" ? (Mf(),
        Ti = n,
        Pi = o,
        Ti.attachEvent("onpropertychange", Lf)) : t === "focusout" && Mf()
    }
    function Xx(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return qo(Pi)
    }
    function Yx(t, n) {
        if (t === "click")
            return qo(n)
    }
    function Jx(t, n) {
        if (t === "input" || t === "change")
            return qo(n)
    }
    function ew(t, n) {
        return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n
    }
    var pr = typeof Object.is == "function" ? Object.is : ew;
    function Ni(t, n) {
        if (pr(t, n))
            return !0;
        if (typeof t != "object" || t === null || typeof n != "object" || n === null)
            return !1;
        var o = Object.keys(t)
          , l = Object.keys(n);
        if (o.length !== l.length)
            return !1;
        for (l = 0; l < o.length; l++) {
            var c = o[l];
            if (!h.call(n, c) || !pr(t[c], n[c]))
                return !1
        }
        return !0
    }
    function Vf(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function zf(t, n) {
        var o = Vf(t);
        t = 0;
        for (var l; o; ) {
            if (o.nodeType === 3) {
                if (l = t + o.textContent.length,
                t <= n && l >= n)
                    return {
                        node: o,
                        offset: n - t
                    };
                t = l
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = Vf(o)
        }
    }
    function Bf(t, n) {
        return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bf(t, n.parentNode) : "contains"in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1
    }
    function Uf() {
        for (var t = window, n = dr(); n instanceof t.HTMLIFrameElement; ) {
            try {
                var o = typeof n.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                t = n.contentWindow;
            else
                break;
            n = dr(t.document)
        }
        return n
    }
    function nu(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true")
    }
    function tw(t) {
        var n = Uf()
          , o = t.focusedElem
          , l = t.selectionRange;
        if (n !== o && o && o.ownerDocument && Bf(o.ownerDocument.documentElement, o)) {
            if (l !== null && nu(o)) {
                if (n = l.start,
                t = l.end,
                t === void 0 && (t = n),
                "selectionStart"in o)
                    o.selectionStart = n,
                    o.selectionEnd = Math.min(t, o.value.length);
                else if (t = (n = o.ownerDocument || document) && n.defaultView || window,
                t.getSelection) {
                    t = t.getSelection();
                    var c = o.textContent.length
                      , p = Math.min(l.start, c);
                    l = l.end === void 0 ? p : Math.min(l.end, c),
                    !t.extend && p > l && (c = l,
                    l = p,
                    p = c),
                    c = zf(o, p);
                    var y = zf(o, l);
                    c && y && (t.rangeCount !== 1 || t.anchorNode !== c.node || t.anchorOffset !== c.offset || t.focusNode !== y.node || t.focusOffset !== y.offset) && (n = n.createRange(),
                    n.setStart(c.node, c.offset),
                    t.removeAllRanges(),
                    p > l ? (t.addRange(n),
                    t.extend(y.node, y.offset)) : (n.setEnd(y.node, y.offset),
                    t.addRange(n)))
                }
            }
            for (n = [],
            t = o; t = t.parentNode; )
                t.nodeType === 1 && n.push({
                    element: t,
                    left: t.scrollLeft,
                    top: t.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < n.length; o++)
                t = n[o],
                t.element.scrollLeft = t.left,
                t.element.scrollTop = t.top
        }
    }
    var rw = f && "documentMode"in document && 11 >= document.documentMode
      , ks = null
      , su = null
      , Ri = null
      , iu = !1;
    function $f(t, n, o) {
        var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        iu || ks == null || ks !== dr(l) || (l = ks,
        "selectionStart"in l && nu(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Ri && Ni(Ri, l) || (Ri = l,
        l = Xo(su, "onSelect"),
        0 < l.length && (n = new Kl("onSelect","select",null,n,o),
        t.push({
            event: n,
            listeners: l
        }),
        n.target = ks)))
    }
    function Zo(t, n) {
        var o = {};
        return o[t.toLowerCase()] = n.toLowerCase(),
        o["Webkit" + t] = "webkit" + n,
        o["Moz" + t] = "moz" + n,
        o
    }
    var Es = {
        animationend: Zo("Animation", "AnimationEnd"),
        animationiteration: Zo("Animation", "AnimationIteration"),
        animationstart: Zo("Animation", "AnimationStart"),
        transitionend: Zo("Transition", "TransitionEnd")
    }
      , ou = {}
      , Qf = {};
    f && (Qf = document.createElement("div").style,
    "AnimationEvent"in window || (delete Es.animationend.animation,
    delete Es.animationiteration.animation,
    delete Es.animationstart.animation),
    "TransitionEvent"in window || delete Es.transitionend.transition);
    function Ko(t) {
        if (ou[t])
            return ou[t];
        if (!Es[t])
            return t;
        var n = Es[t], o;
        for (o in n)
            if (n.hasOwnProperty(o) && o in Qf)
                return ou[t] = n[o];
        return t
    }
    var Hf = Ko("animationend")
      , Wf = Ko("animationiteration")
      , qf = Ko("animationstart")
      , Zf = Ko("transitionend")
      , Kf = new Map
      , Gf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function gn(t, n) {
        Kf.set(t, n),
        u(n, [t])
    }
    for (var au = 0; au < Gf.length; au++) {
        var lu = Gf[au]
          , nw = lu.toLowerCase()
          , sw = lu[0].toUpperCase() + lu.slice(1);
        gn(nw, "on" + sw)
    }
    gn(Hf, "onAnimationEnd"),
    gn(Wf, "onAnimationIteration"),
    gn(qf, "onAnimationStart"),
    gn("dblclick", "onDoubleClick"),
    gn("focusin", "onFocus"),
    gn("focusout", "onBlur"),
    gn(Zf, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , iw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));
    function Xf(t, n, o) {
        var l = t.type || "unknown-event";
        t.currentTarget = o,
        nx(l, n, void 0, t),
        t.currentTarget = null
    }
    function Yf(t, n) {
        n = (n & 4) !== 0;
        for (var o = 0; o < t.length; o++) {
            var l = t[o]
              , c = l.event;
            l = l.listeners;
            e: {
                var p = void 0;
                if (n)
                    for (var y = l.length - 1; 0 <= y; y--) {
                        var _ = l[y]
                          , E = _.instance
                          , D = _.currentTarget;
                        if (_ = _.listener,
                        E !== p && c.isPropagationStopped())
                            break e;
                        Xf(c, _, D),
                        p = E
                    }
                else
                    for (y = 0; y < l.length; y++) {
                        if (_ = l[y],
                        E = _.instance,
                        D = _.currentTarget,
                        _ = _.listener,
                        E !== p && c.isPropagationStopped())
                            break e;
                        Xf(c, _, D),
                        p = E
                    }
            }
        }
        if (Io)
            throw t = Vl,
            Io = !1,
            Vl = null,
            t
    }
    function Xe(t, n) {
        var o = n[gu];
        o === void 0 && (o = n[gu] = new Set);
        var l = t + "__bubble";
        o.has(l) || (Jf(n, t, 2, !1),
        o.add(l))
    }
    function uu(t, n, o) {
        var l = 0;
        n && (l |= 4),
        Jf(o, t, l, n)
    }
    var Go = "_reactListening" + Math.random().toString(36).slice(2);
    function Oi(t) {
        if (!t[Go]) {
            t[Go] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (iw.has(o) || uu(o, !1, t),
                uu(o, !0, t))
            });
            var n = t.nodeType === 9 ? t : t.ownerDocument;
            n === null || n[Go] || (n[Go] = !0,
            uu("selectionchange", !1, n))
        }
    }
    function Jf(t, n, o, l) {
        switch (_f(n)) {
        case 1:
            var c = xx;
            break;
        case 4:
            c = wx;
            break;
        default:
            c = Wl
        }
        o = c.bind(null, n, o, t),
        c = void 0,
        !Ll || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0),
        l ? c !== void 0 ? t.addEventListener(n, o, {
            capture: !0,
            passive: c
        }) : t.addEventListener(n, o, !0) : c !== void 0 ? t.addEventListener(n, o, {
            passive: c
        }) : t.addEventListener(n, o, !1)
    }
    function cu(t, n, o, l, c) {
        var p = l;
        if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var y = l.tag;
                if (y === 3 || y === 4) {
                    var _ = l.stateNode.containerInfo;
                    if (_ === c || _.nodeType === 8 && _.parentNode === c)
                        break;
                    if (y === 4)
                        for (y = l.return; y !== null; ) {
                            var E = y.tag;
                            if ((E === 3 || E === 4) && (E = y.stateNode.containerInfo,
                            E === c || E.nodeType === 8 && E.parentNode === c))
                                return;
                            y = y.return
                        }
                    for (; _ !== null; ) {
                        if (y = Wn(_),
                        y === null)
                            return;
                        if (E = y.tag,
                        E === 5 || E === 6) {
                            l = p = y;
                            continue e
                        }
                        _ = _.parentNode
                    }
                }
                l = l.return
            }
        nf(function() {
            var D = p
              , Z = Dl(o)
              , K = [];
            e: {
                var H = Kf.get(t);
                if (H !== void 0) {
                    var ue = Kl
                      , he = t;
                    switch (t) {
                    case "keypress":
                        if (Qo(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        ue = Dx;
                        break;
                    case "focusin":
                        he = "focus",
                        ue = Yl;
                        break;
                    case "focusout":
                        he = "blur",
                        ue = Yl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        ue = Yl;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        ue = kf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        ue = Sx;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        ue = Lx;
                        break;
                    case Hf:
                    case Wf:
                    case qf:
                        ue = Ex;
                        break;
                    case Zf:
                        ue = zx;
                        break;
                    case "scroll":
                        ue = bx;
                        break;
                    case "wheel":
                        ue = Ux;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        ue = Px;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        ue = Tf
                    }
                    var ge = (n & 4) !== 0
                      , ft = !ge && t === "scroll"
                      , O = ge ? H !== null ? H + "Capture" : null : H;
                    ge = [];
                    for (var P = D, I; P !== null; ) {
                        I = P;
                        var ee = I.stateNode;
                        if (I.tag === 5 && ee !== null && (I = ee,
                        O !== null && (ee = hi(P, O),
                        ee != null && ge.push(Ii(P, ee, I)))),
                        ft)
                            break;
                        P = P.return
                    }
                    0 < ge.length && (H = new ue(H,he,null,o,Z),
                    K.push({
                        event: H,
                        listeners: ge
                    }))
                }
            }
            if ((n & 7) === 0) {
                e: {
                    if (H = t === "mouseover" || t === "pointerover",
                    ue = t === "mouseout" || t === "pointerout",
                    H && o !== xs && (he = o.relatedTarget || o.fromElement) && (Wn(he) || he[Zr]))
                        break e;
                    if ((ue || H) && (H = Z.window === Z ? Z : (H = Z.ownerDocument) ? H.defaultView || H.parentWindow : window,
                    ue ? (he = o.relatedTarget || o.toElement,
                    ue = D,
                    he = he ? Wn(he) : null,
                    he !== null && (ft = Hn(he),
                    he !== ft || he.tag !== 5 && he.tag !== 6) && (he = null)) : (ue = null,
                    he = D),
                    ue !== he)) {
                        if (ge = kf,
                        ee = "onMouseLeave",
                        O = "onMouseEnter",
                        P = "mouse",
                        (t === "pointerout" || t === "pointerover") && (ge = Tf,
                        ee = "onPointerLeave",
                        O = "onPointerEnter",
                        P = "pointer"),
                        ft = ue == null ? H : Ns(ue),
                        I = he == null ? H : Ns(he),
                        H = new ge(ee,P + "leave",ue,o,Z),
                        H.target = ft,
                        H.relatedTarget = I,
                        ee = null,
                        Wn(Z) === D && (ge = new ge(O,P + "enter",he,o,Z),
                        ge.target = I,
                        ge.relatedTarget = ft,
                        ee = ge),
                        ft = ee,
                        ue && he)
                            t: {
                                for (ge = ue,
                                O = he,
                                P = 0,
                                I = ge; I; I = Ts(I))
                                    P++;
                                for (I = 0,
                                ee = O; ee; ee = Ts(ee))
                                    I++;
                                for (; 0 < P - I; )
                                    ge = Ts(ge),
                                    P--;
                                for (; 0 < I - P; )
                                    O = Ts(O),
                                    I--;
                                for (; P--; ) {
                                    if (ge === O || O !== null && ge === O.alternate)
                                        break t;
                                    ge = Ts(ge),
                                    O = Ts(O)
                                }
                                ge = null
                            }
                        else
                            ge = null;
                        ue !== null && ep(K, H, ue, ge, !1),
                        he !== null && ft !== null && ep(K, ft, he, ge, !0)
                    }
                }
                e: {
                    if (H = D ? Ns(D) : window,
                    ue = H.nodeName && H.nodeName.toLowerCase(),
                    ue === "select" || ue === "input" && H.type === "file")
                        var ve = Kx;
                    else if (If(H))
                        if (Df)
                            ve = Jx;
                        else {
                            ve = Xx;
                            var Se = Gx
                        }
                    else
                        (ue = H.nodeName) && ue.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (ve = Yx);
                    if (ve && (ve = ve(t, D))) {
                        jf(K, ve, o, Z);
                        break e
                    }
                    Se && Se(t, H, D),
                    t === "focusout" && (Se = H._wrapperState) && Se.controlled && H.type === "number" && fi(H, "number", H.value)
                }
                switch (Se = D ? Ns(D) : window,
                t) {
                case "focusin":
                    (If(Se) || Se.contentEditable === "true") && (ks = Se,
                    su = D,
                    Ri = null);
                    break;
                case "focusout":
                    Ri = su = ks = null;
                    break;
                case "mousedown":
                    iu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    iu = !1,
                    $f(K, o, Z);
                    break;
                case "selectionchange":
                    if (rw)
                        break;
                case "keydown":
                case "keyup":
                    $f(K, o, Z)
                }
                var Ce;
                if (eu)
                    e: {
                        switch (t) {
                        case "compositionstart":
                            var Pe = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Pe = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Pe = "onCompositionUpdate";
                            break e
                        }
                        Pe = void 0
                    }
                else
                    Cs ? Af(t, o) && (Pe = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (Pe = "onCompositionStart");
                Pe && (Pf && o.locale !== "ko" && (Cs || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Cs && (Ce = Sf()) : (mn = Z,
                Zl = "value"in mn ? mn.value : mn.textContent,
                Cs = !0)),
                Se = Xo(D, Pe),
                0 < Se.length && (Pe = new Ef(Pe,t,null,o,Z),
                K.push({
                    event: Pe,
                    listeners: Se
                }),
                Ce ? Pe.data = Ce : (Ce = Of(o),
                Ce !== null && (Pe.data = Ce)))),
                (Ce = Qx ? Hx(t, o) : Wx(t, o)) && (D = Xo(D, "onBeforeInput"),
                0 < D.length && (Z = new Ef("onBeforeInput","beforeinput",null,o,Z),
                K.push({
                    event: Z,
                    listeners: D
                }),
                Z.data = Ce))
            }
            Yf(K, n)
        })
    }
    function Ii(t, n, o) {
        return {
            instance: t,
            listener: n,
            currentTarget: o
        }
    }
    function Xo(t, n) {
        for (var o = n + "Capture", l = []; t !== null; ) {
            var c = t
              , p = c.stateNode;
            c.tag === 5 && p !== null && (c = p,
            p = hi(t, o),
            p != null && l.unshift(Ii(t, p, c)),
            p = hi(t, n),
            p != null && l.push(Ii(t, p, c))),
            t = t.return
        }
        return l
    }
    function Ts(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5);
        return t || null
    }
    function ep(t, n, o, l, c) {
        for (var p = n._reactName, y = []; o !== null && o !== l; ) {
            var _ = o
              , E = _.alternate
              , D = _.stateNode;
            if (E !== null && E === l)
                break;
            _.tag === 5 && D !== null && (_ = D,
            c ? (E = hi(o, p),
            E != null && y.unshift(Ii(o, E, _))) : c || (E = hi(o, p),
            E != null && y.push(Ii(o, E, _)))),
            o = o.return
        }
        y.length !== 0 && t.push({
            event: n,
            listeners: y
        })
    }
    var ow = /\r\n?/g
      , aw = /\u0000|\uFFFD/g;
    function tp(t) {
        return (typeof t == "string" ? t : "" + t).replace(ow, `
`).replace(aw, "")
    }
    function Yo(t, n, o) {
        if (n = tp(n),
        tp(t) !== n && o)
            throw Error(s(425))
    }
    function Jo() {}
    var du = null
      , fu = null;
    function pu(t, n) {
        return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var hu = typeof setTimeout == "function" ? setTimeout : void 0
      , lw = typeof clearTimeout == "function" ? clearTimeout : void 0
      , rp = typeof Promise == "function" ? Promise : void 0
      , uw = typeof queueMicrotask == "function" ? queueMicrotask : typeof rp < "u" ? function(t) {
        return rp.resolve(null).then(t).catch(cw)
    }
    : hu;
    function cw(t) {
        setTimeout(function() {
            throw t
        })
    }
    function mu(t, n) {
        var o = n
          , l = 0;
        do {
            var c = o.nextSibling;
            if (t.removeChild(o),
            c && c.nodeType === 8)
                if (o = c.data,
                o === "/$") {
                    if (l === 0) {
                        t.removeChild(c),
                        Si(n);
                        return
                    }
                    l--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || l++;
            o = c
        } while (o);
        Si(n)
    }
    function yn(t) {
        for (; t != null; t = t.nextSibling) {
            var n = t.nodeType;
            if (n === 1 || n === 3)
                break;
            if (n === 8) {
                if (n = t.data,
                n === "$" || n === "$!" || n === "$?")
                    break;
                if (n === "/$")
                    return null
            }
        }
        return t
    }
    function np(t) {
        t = t.previousSibling;
        for (var n = 0; t; ) {
            if (t.nodeType === 8) {
                var o = t.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (n === 0)
                        return t;
                    n--
                } else
                    o === "/$" && n++
            }
            t = t.previousSibling
        }
        return null
    }
    var Ps = Math.random().toString(36).slice(2)
      , Dr = "__reactFiber$" + Ps
      , ji = "__reactProps$" + Ps
      , Zr = "__reactContainer$" + Ps
      , gu = "__reactEvents$" + Ps
      , dw = "__reactListeners$" + Ps
      , fw = "__reactHandles$" + Ps;
    function Wn(t) {
        var n = t[Dr];
        if (n)
            return n;
        for (var o = t.parentNode; o; ) {
            if (n = o[Zr] || o[Dr]) {
                if (o = n.alternate,
                n.child !== null || o !== null && o.child !== null)
                    for (t = np(t); t !== null; ) {
                        if (o = t[Dr])
                            return o;
                        t = np(t)
                    }
                return n
            }
            t = o,
            o = t.parentNode
        }
        return null
    }
    function Di(t) {
        return t = t[Dr] || t[Zr],
        !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
    }
    function Ns(t) {
        if (t.tag === 5 || t.tag === 6)
            return t.stateNode;
        throw Error(s(33))
    }
    function ea(t) {
        return t[ji] || null
    }
    var yu = []
      , Rs = -1;
    function vn(t) {
        return {
            current: t
        }
    }
    function Ye(t) {
        0 > Rs || (t.current = yu[Rs],
        yu[Rs] = null,
        Rs--)
    }
    function Ge(t, n) {
        Rs++,
        yu[Rs] = t.current,
        t.current = n
    }
    var xn = {}
      , Nt = vn(xn)
      , Vt = vn(!1)
      , qn = xn;
    function As(t, n) {
        var o = t.type.contextTypes;
        if (!o)
            return xn;
        var l = t.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === n)
            return l.__reactInternalMemoizedMaskedChildContext;
        var c = {}, p;
        for (p in o)
            c[p] = n[p];
        return l && (t = t.stateNode,
        t.__reactInternalMemoizedUnmaskedChildContext = n,
        t.__reactInternalMemoizedMaskedChildContext = c),
        c
    }
    function zt(t) {
        return t = t.childContextTypes,
        t != null
    }
    function ta() {
        Ye(Vt),
        Ye(Nt)
    }
    function sp(t, n, o) {
        if (Nt.current !== xn)
            throw Error(s(168));
        Ge(Nt, n),
        Ge(Vt, o)
    }
    function ip(t, n, o) {
        var l = t.stateNode;
        if (n = n.childContextTypes,
        typeof l.getChildContext != "function")
            return o;
        l = l.getChildContext();
        for (var c in l)
            if (!(c in n))
                throw Error(s(108, Me(t) || "Unknown", c));
        return te({}, o, l)
    }
    function ra(t) {
        return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || xn,
        qn = Nt.current,
        Ge(Nt, t),
        Ge(Vt, Vt.current),
        !0
    }
    function op(t, n, o) {
        var l = t.stateNode;
        if (!l)
            throw Error(s(169));
        o ? (t = ip(t, n, qn),
        l.__reactInternalMemoizedMergedChildContext = t,
        Ye(Vt),
        Ye(Nt),
        Ge(Nt, t)) : Ye(Vt),
        Ge(Vt, o)
    }
    var Kr = null
      , na = !1
      , vu = !1;
    function ap(t) {
        Kr === null ? Kr = [t] : Kr.push(t)
    }
    function pw(t) {
        na = !0,
        ap(t)
    }
    function wn() {
        if (!vu && Kr !== null) {
            vu = !0;
            var t = 0
              , n = qe;
            try {
                var o = Kr;
                for (qe = 1; t < o.length; t++) {
                    var l = o[t];
                    do
                        l = l(!0);
                    while (l !== null)
                }
                Kr = null,
                na = !1
            } catch (c) {
                throw Kr !== null && (Kr = Kr.slice(t + 1)),
                uf(zl, wn),
                c
            } finally {
                qe = n,
                vu = !1
            }
        }
        return null
    }
    var Os = []
      , Is = 0
      , sa = null
      , ia = 0
      , nr = []
      , sr = 0
      , Zn = null
      , Gr = 1
      , Xr = "";
    function Kn(t, n) {
        Os[Is++] = ia,
        Os[Is++] = sa,
        sa = t,
        ia = n
    }
    function lp(t, n, o) {
        nr[sr++] = Gr,
        nr[sr++] = Xr,
        nr[sr++] = Zn,
        Zn = t;
        var l = Gr;
        t = Xr;
        var c = 32 - fr(l) - 1;
        l &= ~(1 << c),
        o += 1;
        var p = 32 - fr(n) + c;
        if (30 < p) {
            var y = c - c % 5;
            p = (l & (1 << y) - 1).toString(32),
            l >>= y,
            c -= y,
            Gr = 1 << 32 - fr(n) + c | o << c | l,
            Xr = p + t
        } else
            Gr = 1 << p | o << c | l,
            Xr = t
    }
    function xu(t) {
        t.return !== null && (Kn(t, 1),
        lp(t, 1, 0))
    }
    function wu(t) {
        for (; t === sa; )
            sa = Os[--Is],
            Os[Is] = null,
            ia = Os[--Is],
            Os[Is] = null;
        for (; t === Zn; )
            Zn = nr[--sr],
            nr[sr] = null,
            Xr = nr[--sr],
            nr[sr] = null,
            Gr = nr[--sr],
            nr[sr] = null
    }
    var Zt = null
      , Kt = null
      , tt = !1
      , hr = null;
    function up(t, n) {
        var o = lr(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = n,
        o.return = t,
        n = t.deletions,
        n === null ? (t.deletions = [o],
        t.flags |= 16) : n.push(o)
    }
    function cp(t, n) {
        switch (t.tag) {
        case 5:
            var o = t.type;
            return n = n.nodeType !== 1 || o.toLowerCase() !== n.nodeName.toLowerCase() ? null : n,
            n !== null ? (t.stateNode = n,
            Zt = t,
            Kt = yn(n.firstChild),
            !0) : !1;
        case 6:
            return n = t.pendingProps === "" || n.nodeType !== 3 ? null : n,
            n !== null ? (t.stateNode = n,
            Zt = t,
            Kt = null,
            !0) : !1;
        case 13:
            return n = n.nodeType !== 8 ? null : n,
            n !== null ? (o = Zn !== null ? {
                id: Gr,
                overflow: Xr
            } : null,
            t.memoizedState = {
                dehydrated: n,
                treeContext: o,
                retryLane: 1073741824
            },
            o = lr(18, null, null, 0),
            o.stateNode = n,
            o.return = t,
            t.child = o,
            Zt = t,
            Kt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function bu(t) {
        return (t.mode & 1) !== 0 && (t.flags & 128) === 0
    }
    function _u(t) {
        if (tt) {
            var n = Kt;
            if (n) {
                var o = n;
                if (!cp(t, n)) {
                    if (bu(t))
                        throw Error(s(418));
                    n = yn(o.nextSibling);
                    var l = Zt;
                    n && cp(t, n) ? up(l, o) : (t.flags = t.flags & -4097 | 2,
                    tt = !1,
                    Zt = t)
                }
            } else {
                if (bu(t))
                    throw Error(s(418));
                t.flags = t.flags & -4097 | 2,
                tt = !1,
                Zt = t
            }
        }
    }
    function dp(t) {
        for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
            t = t.return;
        Zt = t
    }
    function oa(t) {
        if (t !== Zt)
            return !1;
        if (!tt)
            return dp(t),
            tt = !0,
            !1;
        var n;
        if ((n = t.tag !== 3) && !(n = t.tag !== 5) && (n = t.type,
        n = n !== "head" && n !== "body" && !pu(t.type, t.memoizedProps)),
        n && (n = Kt)) {
            if (bu(t))
                throw fp(),
                Error(s(418));
            for (; n; )
                up(t, n),
                n = yn(n.nextSibling)
        }
        if (dp(t),
        t.tag === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(s(317));
            e: {
                for (t = t.nextSibling,
                n = 0; t; ) {
                    if (t.nodeType === 8) {
                        var o = t.data;
                        if (o === "/$") {
                            if (n === 0) {
                                Kt = yn(t.nextSibling);
                                break e
                            }
                            n--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || n++
                    }
                    t = t.nextSibling
                }
                Kt = null
            }
        } else
            Kt = Zt ? yn(t.stateNode.nextSibling) : null;
        return !0
    }
    function fp() {
        for (var t = Kt; t; )
            t = yn(t.nextSibling)
    }
    function js() {
        Kt = Zt = null,
        tt = !1
    }
    function Su(t) {
        hr === null ? hr = [t] : hr.push(t)
    }
    var hw = U.ReactCurrentBatchConfig;
    function Fi(t, n, o) {
        if (t = o.ref,
        t !== null && typeof t != "function" && typeof t != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(s(309));
                    var l = o.stateNode
                }
                if (!l)
                    throw Error(s(147, t));
                var c = l
                  , p = "" + t;
                return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === p ? n.ref : (n = function(y) {
                    var _ = c.refs;
                    y === null ? delete _[p] : _[p] = y
                }
                ,
                n._stringRef = p,
                n)
            }
            if (typeof t != "string")
                throw Error(s(284));
            if (!o._owner)
                throw Error(s(290, t))
        }
        return t
    }
    function aa(t, n) {
        throw t = Object.prototype.toString.call(n),
        Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t))
    }
    function pp(t) {
        var n = t._init;
        return n(t._payload)
    }
    function hp(t) {
        function n(O, P) {
            if (t) {
                var I = O.deletions;
                I === null ? (O.deletions = [P],
                O.flags |= 16) : I.push(P)
            }
        }
        function o(O, P) {
            if (!t)
                return null;
            for (; P !== null; )
                n(O, P),
                P = P.sibling;
            return null
        }
        function l(O, P) {
            for (O = new Map; P !== null; )
                P.key !== null ? O.set(P.key, P) : O.set(P.index, P),
                P = P.sibling;
            return O
        }
        function c(O, P) {
            return O = Pn(O, P),
            O.index = 0,
            O.sibling = null,
            O
        }
        function p(O, P, I) {
            return O.index = I,
            t ? (I = O.alternate,
            I !== null ? (I = I.index,
            I < P ? (O.flags |= 2,
            P) : I) : (O.flags |= 2,
            P)) : (O.flags |= 1048576,
            P)
        }
        function y(O) {
            return t && O.alternate === null && (O.flags |= 2),
            O
        }
        function _(O, P, I, ee) {
            return P === null || P.tag !== 6 ? (P = hc(I, O.mode, ee),
            P.return = O,
            P) : (P = c(P, I),
            P.return = O,
            P)
        }
        function E(O, P, I, ee) {
            var ve = I.type;
            return ve === M ? Z(O, P, I.props.children, ee, I.key) : P !== null && (P.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === ce && pp(ve) === P.type) ? (ee = c(P, I.props),
            ee.ref = Fi(O, P, I),
            ee.return = O,
            ee) : (ee = Aa(I.type, I.key, I.props, null, O.mode, ee),
            ee.ref = Fi(O, P, I),
            ee.return = O,
            ee)
        }
        function D(O, P, I, ee) {
            return P === null || P.tag !== 4 || P.stateNode.containerInfo !== I.containerInfo || P.stateNode.implementation !== I.implementation ? (P = mc(I, O.mode, ee),
            P.return = O,
            P) : (P = c(P, I.children || []),
            P.return = O,
            P)
        }
        function Z(O, P, I, ee, ve) {
            return P === null || P.tag !== 7 ? (P = ns(I, O.mode, ee, ve),
            P.return = O,
            P) : (P = c(P, I),
            P.return = O,
            P)
        }
        function K(O, P, I) {
            if (typeof P == "string" && P !== "" || typeof P == "number")
                return P = hc("" + P, O.mode, I),
                P.return = O,
                P;
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                case Q:
                    return I = Aa(P.type, P.key, P.props, null, O.mode, I),
                    I.ref = Fi(O, null, P),
                    I.return = O,
                    I;
                case L:
                    return P = mc(P, O.mode, I),
                    P.return = O,
                    P;
                case ce:
                    var ee = P._init;
                    return K(O, ee(P._payload), I)
                }
                if (ms(P) || re(P))
                    return P = ns(P, O.mode, I, null),
                    P.return = O,
                    P;
                aa(O, P)
            }
            return null
        }
        function H(O, P, I, ee) {
            var ve = P !== null ? P.key : null;
            if (typeof I == "string" && I !== "" || typeof I == "number")
                return ve !== null ? null : _(O, P, "" + I, ee);
            if (typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case Q:
                    return I.key === ve ? E(O, P, I, ee) : null;
                case L:
                    return I.key === ve ? D(O, P, I, ee) : null;
                case ce:
                    return ve = I._init,
                    H(O, P, ve(I._payload), ee)
                }
                if (ms(I) || re(I))
                    return ve !== null ? null : Z(O, P, I, ee, null);
                aa(O, I)
            }
            return null
        }
        function ue(O, P, I, ee, ve) {
            if (typeof ee == "string" && ee !== "" || typeof ee == "number")
                return O = O.get(I) || null,
                _(P, O, "" + ee, ve);
            if (typeof ee == "object" && ee !== null) {
                switch (ee.$$typeof) {
                case Q:
                    return O = O.get(ee.key === null ? I : ee.key) || null,
                    E(P, O, ee, ve);
                case L:
                    return O = O.get(ee.key === null ? I : ee.key) || null,
                    D(P, O, ee, ve);
                case ce:
                    var Se = ee._init;
                    return ue(O, P, I, Se(ee._payload), ve)
                }
                if (ms(ee) || re(ee))
                    return O = O.get(I) || null,
                    Z(P, O, ee, ve, null);
                aa(P, ee)
            }
            return null
        }
        function he(O, P, I, ee) {
            for (var ve = null, Se = null, Ce = P, Pe = P = 0, Ct = null; Ce !== null && Pe < I.length; Pe++) {
                Ce.index > Pe ? (Ct = Ce,
                Ce = null) : Ct = Ce.sibling;
                var $e = H(O, Ce, I[Pe], ee);
                if ($e === null) {
                    Ce === null && (Ce = Ct);
                    break
                }
                t && Ce && $e.alternate === null && n(O, Ce),
                P = p($e, P, Pe),
                Se === null ? ve = $e : Se.sibling = $e,
                Se = $e,
                Ce = Ct
            }
            if (Pe === I.length)
                return o(O, Ce),
                tt && Kn(O, Pe),
                ve;
            if (Ce === null) {
                for (; Pe < I.length; Pe++)
                    Ce = K(O, I[Pe], ee),
                    Ce !== null && (P = p(Ce, P, Pe),
                    Se === null ? ve = Ce : Se.sibling = Ce,
                    Se = Ce);
                return tt && Kn(O, Pe),
                ve
            }
            for (Ce = l(O, Ce); Pe < I.length; Pe++)
                Ct = ue(Ce, O, Pe, I[Pe], ee),
                Ct !== null && (t && Ct.alternate !== null && Ce.delete(Ct.key === null ? Pe : Ct.key),
                P = p(Ct, P, Pe),
                Se === null ? ve = Ct : Se.sibling = Ct,
                Se = Ct);
            return t && Ce.forEach(function(Nn) {
                return n(O, Nn)
            }),
            tt && Kn(O, Pe),
            ve
        }
        function ge(O, P, I, ee) {
            var ve = re(I);
            if (typeof ve != "function")
                throw Error(s(150));
            if (I = ve.call(I),
            I == null)
                throw Error(s(151));
            for (var Se = ve = null, Ce = P, Pe = P = 0, Ct = null, $e = I.next(); Ce !== null && !$e.done; Pe++,
            $e = I.next()) {
                Ce.index > Pe ? (Ct = Ce,
                Ce = null) : Ct = Ce.sibling;
                var Nn = H(O, Ce, $e.value, ee);
                if (Nn === null) {
                    Ce === null && (Ce = Ct);
                    break
                }
                t && Ce && Nn.alternate === null && n(O, Ce),
                P = p(Nn, P, Pe),
                Se === null ? ve = Nn : Se.sibling = Nn,
                Se = Nn,
                Ce = Ct
            }
            if ($e.done)
                return o(O, Ce),
                tt && Kn(O, Pe),
                ve;
            if (Ce === null) {
                for (; !$e.done; Pe++,
                $e = I.next())
                    $e = K(O, $e.value, ee),
                    $e !== null && (P = p($e, P, Pe),
                    Se === null ? ve = $e : Se.sibling = $e,
                    Se = $e);
                return tt && Kn(O, Pe),
                ve
            }
            for (Ce = l(O, Ce); !$e.done; Pe++,
            $e = I.next())
                $e = ue(Ce, O, Pe, $e.value, ee),
                $e !== null && (t && $e.alternate !== null && Ce.delete($e.key === null ? Pe : $e.key),
                P = p($e, P, Pe),
                Se === null ? ve = $e : Se.sibling = $e,
                Se = $e);
            return t && Ce.forEach(function(qw) {
                return n(O, qw)
            }),
            tt && Kn(O, Pe),
            ve
        }
        function ft(O, P, I, ee) {
            if (typeof I == "object" && I !== null && I.type === M && I.key === null && (I = I.props.children),
            typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case Q:
                    e: {
                        for (var ve = I.key, Se = P; Se !== null; ) {
                            if (Se.key === ve) {
                                if (ve = I.type,
                                ve === M) {
                                    if (Se.tag === 7) {
                                        o(O, Se.sibling),
                                        P = c(Se, I.props.children),
                                        P.return = O,
                                        O = P;
                                        break e
                                    }
                                } else if (Se.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === ce && pp(ve) === Se.type) {
                                    o(O, Se.sibling),
                                    P = c(Se, I.props),
                                    P.ref = Fi(O, Se, I),
                                    P.return = O,
                                    O = P;
                                    break e
                                }
                                o(O, Se);
                                break
                            } else
                                n(O, Se);
                            Se = Se.sibling
                        }
                        I.type === M ? (P = ns(I.props.children, O.mode, ee, I.key),
                        P.return = O,
                        O = P) : (ee = Aa(I.type, I.key, I.props, null, O.mode, ee),
                        ee.ref = Fi(O, P, I),
                        ee.return = O,
                        O = ee)
                    }
                    return y(O);
                case L:
                    e: {
                        for (Se = I.key; P !== null; ) {
                            if (P.key === Se)
                                if (P.tag === 4 && P.stateNode.containerInfo === I.containerInfo && P.stateNode.implementation === I.implementation) {
                                    o(O, P.sibling),
                                    P = c(P, I.children || []),
                                    P.return = O,
                                    O = P;
                                    break e
                                } else {
                                    o(O, P);
                                    break
                                }
                            else
                                n(O, P);
                            P = P.sibling
                        }
                        P = mc(I, O.mode, ee),
                        P.return = O,
                        O = P
                    }
                    return y(O);
                case ce:
                    return Se = I._init,
                    ft(O, P, Se(I._payload), ee)
                }
                if (ms(I))
                    return he(O, P, I, ee);
                if (re(I))
                    return ge(O, P, I, ee);
                aa(O, I)
            }
            return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I,
            P !== null && P.tag === 6 ? (o(O, P.sibling),
            P = c(P, I),
            P.return = O,
            O = P) : (o(O, P),
            P = hc(I, O.mode, ee),
            P.return = O,
            O = P),
            y(O)) : o(O, P)
        }
        return ft
    }
    var Ds = hp(!0)
      , mp = hp(!1)
      , la = vn(null)
      , ua = null
      , Fs = null
      , Cu = null;
    function ku() {
        Cu = Fs = ua = null
    }
    function Eu(t) {
        var n = la.current;
        Ye(la),
        t._currentValue = n
    }
    function Tu(t, n, o) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & n) !== n ? (t.childLanes |= n,
            l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
            t === o)
                break;
            t = t.return
        }
    }
    function Ms(t, n) {
        ua = t,
        Cu = Fs = null,
        t = t.dependencies,
        t !== null && t.firstContext !== null && ((t.lanes & n) !== 0 && (Bt = !0),
        t.firstContext = null)
    }
    function ir(t) {
        var n = t._currentValue;
        if (Cu !== t)
            if (t = {
                context: t,
                memoizedValue: n,
                next: null
            },
            Fs === null) {
                if (ua === null)
                    throw Error(s(308));
                Fs = t,
                ua.dependencies = {
                    lanes: 0,
                    firstContext: t
                }
            } else
                Fs = Fs.next = t;
        return n
    }
    var Gn = null;
    function Pu(t) {
        Gn === null ? Gn = [t] : Gn.push(t)
    }
    function gp(t, n, o, l) {
        var c = n.interleaved;
        return c === null ? (o.next = o,
        Pu(n)) : (o.next = c.next,
        c.next = o),
        n.interleaved = o,
        Yr(t, l)
    }
    function Yr(t, n) {
        t.lanes |= n;
        var o = t.alternate;
        for (o !== null && (o.lanes |= n),
        o = t,
        t = t.return; t !== null; )
            t.childLanes |= n,
            o = t.alternate,
            o !== null && (o.childLanes |= n),
            o = t,
            t = t.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var bn = !1;
    function Nu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function yp(t, n) {
        t = t.updateQueue,
        n.updateQueue === t && (n.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects
        })
    }
    function Jr(t, n) {
        return {
            eventTime: t,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function _n(t, n, o) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Be & 2) !== 0) {
            var c = l.pending;
            return c === null ? n.next = n : (n.next = c.next,
            c.next = n),
            l.pending = n,
            Yr(t, o)
        }
        return c = l.interleaved,
        c === null ? (n.next = n,
        Pu(l)) : (n.next = c.next,
        c.next = n),
        l.interleaved = n,
        Yr(t, o)
    }
    function ca(t, n, o) {
        if (n = n.updateQueue,
        n !== null && (n = n.shared,
        (o & 4194240) !== 0)) {
            var l = n.lanes;
            l &= t.pendingLanes,
            o |= l,
            n.lanes = o,
            $l(t, o)
        }
    }
    function vp(t, n) {
        var o = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        o === l)) {
            var c = null
              , p = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var y = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? c = p = y : p = p.next = y,
                    o = o.next
                } while (o !== null);
                p === null ? c = p = n : p = p.next = n
            } else
                c = p = n;
            o = {
                baseState: l.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: p,
                shared: l.shared,
                effects: l.effects
            },
            t.updateQueue = o;
            return
        }
        t = o.lastBaseUpdate,
        t === null ? o.firstBaseUpdate = n : t.next = n,
        o.lastBaseUpdate = n
    }
    function da(t, n, o, l) {
        var c = t.updateQueue;
        bn = !1;
        var p = c.firstBaseUpdate
          , y = c.lastBaseUpdate
          , _ = c.shared.pending;
        if (_ !== null) {
            c.shared.pending = null;
            var E = _
              , D = E.next;
            E.next = null,
            y === null ? p = D : y.next = D,
            y = E;
            var Z = t.alternate;
            Z !== null && (Z = Z.updateQueue,
            _ = Z.lastBaseUpdate,
            _ !== y && (_ === null ? Z.firstBaseUpdate = D : _.next = D,
            Z.lastBaseUpdate = E))
        }
        if (p !== null) {
            var K = c.baseState;
            y = 0,
            Z = D = E = null,
            _ = p;
            do {
                var H = _.lane
                  , ue = _.eventTime;
                if ((l & H) === H) {
                    Z !== null && (Z = Z.next = {
                        eventTime: ue,
                        lane: 0,
                        tag: _.tag,
                        payload: _.payload,
                        callback: _.callback,
                        next: null
                    });
                    e: {
                        var he = t
                          , ge = _;
                        switch (H = n,
                        ue = o,
                        ge.tag) {
                        case 1:
                            if (he = ge.payload,
                            typeof he == "function") {
                                K = he.call(ue, K, H);
                                break e
                            }
                            K = he;
                            break e;
                        case 3:
                            he.flags = he.flags & -65537 | 128;
                        case 0:
                            if (he = ge.payload,
                            H = typeof he == "function" ? he.call(ue, K, H) : he,
                            H == null)
                                break e;
                            K = te({}, K, H);
                            break e;
                        case 2:
                            bn = !0
                        }
                    }
                    _.callback !== null && _.lane !== 0 && (t.flags |= 64,
                    H = c.effects,
                    H === null ? c.effects = [_] : H.push(_))
                } else
                    ue = {
                        eventTime: ue,
                        lane: H,
                        tag: _.tag,
                        payload: _.payload,
                        callback: _.callback,
                        next: null
                    },
                    Z === null ? (D = Z = ue,
                    E = K) : Z = Z.next = ue,
                    y |= H;
                if (_ = _.next,
                _ === null) {
                    if (_ = c.shared.pending,
                    _ === null)
                        break;
                    H = _,
                    _ = H.next,
                    H.next = null,
                    c.lastBaseUpdate = H,
                    c.shared.pending = null
                }
            } while (!0);
            if (Z === null && (E = K),
            c.baseState = E,
            c.firstBaseUpdate = D,
            c.lastBaseUpdate = Z,
            n = c.shared.interleaved,
            n !== null) {
                c = n;
                do
                    y |= c.lane,
                    c = c.next;
                while (c !== n)
            } else
                p === null && (c.shared.lanes = 0);
            Jn |= y,
            t.lanes = y,
            t.memoizedState = K
        }
    }
    function xp(t, n, o) {
        if (t = n.effects,
        n.effects = null,
        t !== null)
            for (n = 0; n < t.length; n++) {
                var l = t[n]
                  , c = l.callback;
                if (c !== null) {
                    if (l.callback = null,
                    l = o,
                    typeof c != "function")
                        throw Error(s(191, c));
                    c.call(l)
                }
            }
    }
    var Mi = {}
      , Fr = vn(Mi)
      , Li = vn(Mi)
      , Vi = vn(Mi);
    function Xn(t) {
        if (t === Mi)
            throw Error(s(174));
        return t
    }
    function Ru(t, n) {
        switch (Ge(Vi, n),
        Ge(Li, t),
        Ge(Fr, Mi),
        t = n.nodeType,
        t) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : Y(null, "");
            break;
        default:
            t = t === 8 ? n.parentNode : n,
            n = t.namespaceURI || null,
            t = t.tagName,
            n = Y(n, t)
        }
        Ye(Fr),
        Ge(Fr, n)
    }
    function Ls() {
        Ye(Fr),
        Ye(Li),
        Ye(Vi)
    }
    function wp(t) {
        Xn(Vi.current);
        var n = Xn(Fr.current)
          , o = Y(n, t.type);
        n !== o && (Ge(Li, t),
        Ge(Fr, o))
    }
    function Au(t) {
        Li.current === t && (Ye(Fr),
        Ye(Li))
    }
    var rt = vn(0);
    function fa(t) {
        for (var n = t; n !== null; ) {
            if (n.tag === 13) {
                var o = n.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return n
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if ((n.flags & 128) !== 0)
                    return n
            } else if (n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return null;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
        return null
    }
    var Ou = [];
    function Iu() {
        for (var t = 0; t < Ou.length; t++)
            Ou[t]._workInProgressVersionPrimary = null;
        Ou.length = 0
    }
    var pa = U.ReactCurrentDispatcher
      , ju = U.ReactCurrentBatchConfig
      , Yn = 0
      , nt = null
      , vt = null
      , _t = null
      , ha = !1
      , zi = !1
      , Bi = 0
      , mw = 0;
    function Rt() {
        throw Error(s(321))
    }
    function Du(t, n) {
        if (n === null)
            return !1;
        for (var o = 0; o < n.length && o < t.length; o++)
            if (!pr(t[o], n[o]))
                return !1;
        return !0
    }
    function Fu(t, n, o, l, c, p) {
        if (Yn = p,
        nt = n,
        n.memoizedState = null,
        n.updateQueue = null,
        n.lanes = 0,
        pa.current = t === null || t.memoizedState === null ? xw : ww,
        t = o(l, c),
        zi) {
            p = 0;
            do {
                if (zi = !1,
                Bi = 0,
                25 <= p)
                    throw Error(s(301));
                p += 1,
                _t = vt = null,
                n.updateQueue = null,
                pa.current = bw,
                t = o(l, c)
            } while (zi)
        }
        if (pa.current = ya,
        n = vt !== null && vt.next !== null,
        Yn = 0,
        _t = vt = nt = null,
        ha = !1,
        n)
            throw Error(s(300));
        return t
    }
    function Mu() {
        var t = Bi !== 0;
        return Bi = 0,
        t
    }
    function Mr() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return _t === null ? nt.memoizedState = _t = t : _t = _t.next = t,
        _t
    }
    function or() {
        if (vt === null) {
            var t = nt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = vt.next;
        var n = _t === null ? nt.memoizedState : _t.next;
        if (n !== null)
            _t = n,
            vt = t;
        else {
            if (t === null)
                throw Error(s(310));
            vt = t,
            t = {
                memoizedState: vt.memoizedState,
                baseState: vt.baseState,
                baseQueue: vt.baseQueue,
                queue: vt.queue,
                next: null
            },
            _t === null ? nt.memoizedState = _t = t : _t = _t.next = t
        }
        return _t
    }
    function Ui(t, n) {
        return typeof n == "function" ? n(t) : n
    }
    function Lu(t) {
        var n = or()
          , o = n.queue;
        if (o === null)
            throw Error(s(311));
        o.lastRenderedReducer = t;
        var l = vt
          , c = l.baseQueue
          , p = o.pending;
        if (p !== null) {
            if (c !== null) {
                var y = c.next;
                c.next = p.next,
                p.next = y
            }
            l.baseQueue = c = p,
            o.pending = null
        }
        if (c !== null) {
            p = c.next,
            l = l.baseState;
            var _ = y = null
              , E = null
              , D = p;
            do {
                var Z = D.lane;
                if ((Yn & Z) === Z)
                    E !== null && (E = E.next = {
                        lane: 0,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    }),
                    l = D.hasEagerState ? D.eagerState : t(l, D.action);
                else {
                    var K = {
                        lane: Z,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    };
                    E === null ? (_ = E = K,
                    y = l) : E = E.next = K,
                    nt.lanes |= Z,
                    Jn |= Z
                }
                D = D.next
            } while (D !== null && D !== p);
            E === null ? y = l : E.next = _,
            pr(l, n.memoizedState) || (Bt = !0),
            n.memoizedState = l,
            n.baseState = y,
            n.baseQueue = E,
            o.lastRenderedState = l
        }
        if (t = o.interleaved,
        t !== null) {
            c = t;
            do
                p = c.lane,
                nt.lanes |= p,
                Jn |= p,
                c = c.next;
            while (c !== t)
        } else
            c === null && (o.lanes = 0);
        return [n.memoizedState, o.dispatch]
    }
    function Vu(t) {
        var n = or()
          , o = n.queue;
        if (o === null)
            throw Error(s(311));
        o.lastRenderedReducer = t;
        var l = o.dispatch
          , c = o.pending
          , p = n.memoizedState;
        if (c !== null) {
            o.pending = null;
            var y = c = c.next;
            do
                p = t(p, y.action),
                y = y.next;
            while (y !== c);
            pr(p, n.memoizedState) || (Bt = !0),
            n.memoizedState = p,
            n.baseQueue === null && (n.baseState = p),
            o.lastRenderedState = p
        }
        return [p, l]
    }
    function bp() {}
    function _p(t, n) {
        var o = nt
          , l = or()
          , c = n()
          , p = !pr(l.memoizedState, c);
        if (p && (l.memoizedState = c,
        Bt = !0),
        l = l.queue,
        zu(kp.bind(null, o, l, t), [t]),
        l.getSnapshot !== n || p || _t !== null && _t.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            $i(9, Cp.bind(null, o, l, c, n), void 0, null),
            St === null)
                throw Error(s(349));
            (Yn & 30) !== 0 || Sp(o, n, c)
        }
        return c
    }
    function Sp(t, n, o) {
        t.flags |= 16384,
        t = {
            getSnapshot: n,
            value: o
        },
        n = nt.updateQueue,
        n === null ? (n = {
            lastEffect: null,
            stores: null
        },
        nt.updateQueue = n,
        n.stores = [t]) : (o = n.stores,
        o === null ? n.stores = [t] : o.push(t))
    }
    function Cp(t, n, o, l) {
        n.value = o,
        n.getSnapshot = l,
        Ep(n) && Tp(t)
    }
    function kp(t, n, o) {
        return o(function() {
            Ep(n) && Tp(t)
        })
    }
    function Ep(t) {
        var n = t.getSnapshot;
        t = t.value;
        try {
            var o = n();
            return !pr(t, o)
        } catch {
            return !0
        }
    }
    function Tp(t) {
        var n = Yr(t, 1);
        n !== null && vr(n, t, 1, -1)
    }
    function Pp(t) {
        var n = Mr();
        return typeof t == "function" && (t = t()),
        n.memoizedState = n.baseState = t,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ui,
            lastRenderedState: t
        },
        n.queue = t,
        t = t.dispatch = vw.bind(null, nt, t),
        [n.memoizedState, t]
    }
    function $i(t, n, o, l) {
        return t = {
            tag: t,
            create: n,
            destroy: o,
            deps: l,
            next: null
        },
        n = nt.updateQueue,
        n === null ? (n = {
            lastEffect: null,
            stores: null
        },
        nt.updateQueue = n,
        n.lastEffect = t.next = t) : (o = n.lastEffect,
        o === null ? n.lastEffect = t.next = t : (l = o.next,
        o.next = t,
        t.next = l,
        n.lastEffect = t)),
        t
    }
    function Np() {
        return or().memoizedState
    }
    function ma(t, n, o, l) {
        var c = Mr();
        nt.flags |= t,
        c.memoizedState = $i(1 | n, o, void 0, l === void 0 ? null : l)
    }
    function ga(t, n, o, l) {
        var c = or();
        l = l === void 0 ? null : l;
        var p = void 0;
        if (vt !== null) {
            var y = vt.memoizedState;
            if (p = y.destroy,
            l !== null && Du(l, y.deps)) {
                c.memoizedState = $i(n, o, p, l);
                return
            }
        }
        nt.flags |= t,
        c.memoizedState = $i(1 | n, o, p, l)
    }
    function Rp(t, n) {
        return ma(8390656, 8, t, n)
    }
    function zu(t, n) {
        return ga(2048, 8, t, n)
    }
    function Ap(t, n) {
        return ga(4, 2, t, n)
    }
    function Op(t, n) {
        return ga(4, 4, t, n)
    }
    function Ip(t, n) {
        if (typeof n == "function")
            return t = t(),
            n(t),
            function() {
                n(null)
            }
            ;
        if (n != null)
            return t = t(),
            n.current = t,
            function() {
                n.current = null
            }
    }
    function jp(t, n, o) {
        return o = o != null ? o.concat([t]) : null,
        ga(4, 4, Ip.bind(null, n, t), o)
    }
    function Bu() {}
    function Dp(t, n) {
        var o = or();
        n = n === void 0 ? null : n;
        var l = o.memoizedState;
        return l !== null && n !== null && Du(n, l[1]) ? l[0] : (o.memoizedState = [t, n],
        t)
    }
    function Fp(t, n) {
        var o = or();
        n = n === void 0 ? null : n;
        var l = o.memoizedState;
        return l !== null && n !== null && Du(n, l[1]) ? l[0] : (t = t(),
        o.memoizedState = [t, n],
        t)
    }
    function Mp(t, n, o) {
        return (Yn & 21) === 0 ? (t.baseState && (t.baseState = !1,
        Bt = !0),
        t.memoizedState = o) : (pr(o, n) || (o = pf(),
        nt.lanes |= o,
        Jn |= o,
        t.baseState = !0),
        n)
    }
    function gw(t, n) {
        var o = qe;
        qe = o !== 0 && 4 > o ? o : 4,
        t(!0);
        var l = ju.transition;
        ju.transition = {};
        try {
            t(!1),
            n()
        } finally {
            qe = o,
            ju.transition = l
        }
    }
    function Lp() {
        return or().memoizedState
    }
    function yw(t, n, o) {
        var l = En(t);
        if (o = {
            lane: l,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Vp(t))
            zp(n, o);
        else if (o = gp(t, n, o, l),
        o !== null) {
            var c = Ft();
            vr(o, t, l, c),
            Bp(o, n, l)
        }
    }
    function vw(t, n, o) {
        var l = En(t)
          , c = {
            lane: l,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Vp(t))
            zp(n, c);
        else {
            var p = t.alternate;
            if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer,
            p !== null))
                try {
                    var y = n.lastRenderedState
                      , _ = p(y, o);
                    if (c.hasEagerState = !0,
                    c.eagerState = _,
                    pr(_, y)) {
                        var E = n.interleaved;
                        E === null ? (c.next = c,
                        Pu(n)) : (c.next = E.next,
                        E.next = c),
                        n.interleaved = c;
                        return
                    }
                } catch {}
            o = gp(t, n, c, l),
            o !== null && (c = Ft(),
            vr(o, t, l, c),
            Bp(o, n, l))
        }
    }
    function Vp(t) {
        var n = t.alternate;
        return t === nt || n !== null && n === nt
    }
    function zp(t, n) {
        zi = ha = !0;
        var o = t.pending;
        o === null ? n.next = n : (n.next = o.next,
        o.next = n),
        t.pending = n
    }
    function Bp(t, n, o) {
        if ((o & 4194240) !== 0) {
            var l = n.lanes;
            l &= t.pendingLanes,
            o |= l,
            n.lanes = o,
            $l(t, o)
        }
    }
    var ya = {
        readContext: ir,
        useCallback: Rt,
        useContext: Rt,
        useEffect: Rt,
        useImperativeHandle: Rt,
        useInsertionEffect: Rt,
        useLayoutEffect: Rt,
        useMemo: Rt,
        useReducer: Rt,
        useRef: Rt,
        useState: Rt,
        useDebugValue: Rt,
        useDeferredValue: Rt,
        useTransition: Rt,
        useMutableSource: Rt,
        useSyncExternalStore: Rt,
        useId: Rt,
        unstable_isNewReconciler: !1
    }
      , xw = {
        readContext: ir,
        useCallback: function(t, n) {
            return Mr().memoizedState = [t, n === void 0 ? null : n],
            t
        },
        useContext: ir,
        useEffect: Rp,
        useImperativeHandle: function(t, n, o) {
            return o = o != null ? o.concat([t]) : null,
            ma(4194308, 4, Ip.bind(null, n, t), o)
        },
        useLayoutEffect: function(t, n) {
            return ma(4194308, 4, t, n)
        },
        useInsertionEffect: function(t, n) {
            return ma(4, 2, t, n)
        },
        useMemo: function(t, n) {
            var o = Mr();
            return n = n === void 0 ? null : n,
            t = t(),
            o.memoizedState = [t, n],
            t
        },
        useReducer: function(t, n, o) {
            var l = Mr();
            return n = o !== void 0 ? o(n) : n,
            l.memoizedState = l.baseState = n,
            t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: n
            },
            l.queue = t,
            t = t.dispatch = yw.bind(null, nt, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var n = Mr();
            return t = {
                current: t
            },
            n.memoizedState = t
        },
        useState: Pp,
        useDebugValue: Bu,
        useDeferredValue: function(t) {
            return Mr().memoizedState = t
        },
        useTransition: function() {
            var t = Pp(!1)
              , n = t[0];
            return t = gw.bind(null, t[1]),
            Mr().memoizedState = t,
            [n, t]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(t, n, o) {
            var l = nt
              , c = Mr();
            if (tt) {
                if (o === void 0)
                    throw Error(s(407));
                o = o()
            } else {
                if (o = n(),
                St === null)
                    throw Error(s(349));
                (Yn & 30) !== 0 || Sp(l, n, o)
            }
            c.memoizedState = o;
            var p = {
                value: o,
                getSnapshot: n
            };
            return c.queue = p,
            Rp(kp.bind(null, l, p, t), [t]),
            l.flags |= 2048,
            $i(9, Cp.bind(null, l, p, o, n), void 0, null),
            o
        },
        useId: function() {
            var t = Mr()
              , n = St.identifierPrefix;
            if (tt) {
                var o = Xr
                  , l = Gr;
                o = (l & ~(1 << 32 - fr(l) - 1)).toString(32) + o,
                n = ":" + n + "R" + o,
                o = Bi++,
                0 < o && (n += "H" + o.toString(32)),
                n += ":"
            } else
                o = mw++,
                n = ":" + n + "r" + o.toString(32) + ":";
            return t.memoizedState = n
        },
        unstable_isNewReconciler: !1
    }
      , ww = {
        readContext: ir,
        useCallback: Dp,
        useContext: ir,
        useEffect: zu,
        useImperativeHandle: jp,
        useInsertionEffect: Ap,
        useLayoutEffect: Op,
        useMemo: Fp,
        useReducer: Lu,
        useRef: Np,
        useState: function() {
            return Lu(Ui)
        },
        useDebugValue: Bu,
        useDeferredValue: function(t) {
            var n = or();
            return Mp(n, vt.memoizedState, t)
        },
        useTransition: function() {
            var t = Lu(Ui)[0]
              , n = or().memoizedState;
            return [t, n]
        },
        useMutableSource: bp,
        useSyncExternalStore: _p,
        useId: Lp,
        unstable_isNewReconciler: !1
    }
      , bw = {
        readContext: ir,
        useCallback: Dp,
        useContext: ir,
        useEffect: zu,
        useImperativeHandle: jp,
        useInsertionEffect: Ap,
        useLayoutEffect: Op,
        useMemo: Fp,
        useReducer: Vu,
        useRef: Np,
        useState: function() {
            return Vu(Ui)
        },
        useDebugValue: Bu,
        useDeferredValue: function(t) {
            var n = or();
            return vt === null ? n.memoizedState = t : Mp(n, vt.memoizedState, t)
        },
        useTransition: function() {
            var t = Vu(Ui)[0]
              , n = or().memoizedState;
            return [t, n]
        },
        useMutableSource: bp,
        useSyncExternalStore: _p,
        useId: Lp,
        unstable_isNewReconciler: !1
    };
    function mr(t, n) {
        if (t && t.defaultProps) {
            n = te({}, n),
            t = t.defaultProps;
            for (var o in t)
                n[o] === void 0 && (n[o] = t[o]);
            return n
        }
        return n
    }
    function Uu(t, n, o, l) {
        n = t.memoizedState,
        o = o(l, n),
        o = o == null ? n : te({}, n, o),
        t.memoizedState = o,
        t.lanes === 0 && (t.updateQueue.baseState = o)
    }
    var va = {
        isMounted: function(t) {
            return (t = t._reactInternals) ? Hn(t) === t : !1
        },
        enqueueSetState: function(t, n, o) {
            t = t._reactInternals;
            var l = Ft()
              , c = En(t)
              , p = Jr(l, c);
            p.payload = n,
            o != null && (p.callback = o),
            n = _n(t, p, c),
            n !== null && (vr(n, t, c, l),
            ca(n, t, c))
        },
        enqueueReplaceState: function(t, n, o) {
            t = t._reactInternals;
            var l = Ft()
              , c = En(t)
              , p = Jr(l, c);
            p.tag = 1,
            p.payload = n,
            o != null && (p.callback = o),
            n = _n(t, p, c),
            n !== null && (vr(n, t, c, l),
            ca(n, t, c))
        },
        enqueueForceUpdate: function(t, n) {
            t = t._reactInternals;
            var o = Ft()
              , l = En(t)
              , c = Jr(o, l);
            c.tag = 2,
            n != null && (c.callback = n),
            n = _n(t, c, l),
            n !== null && (vr(n, t, l, o),
            ca(n, t, l))
        }
    };
    function Up(t, n, o, l, c, p, y) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, p, y) : n.prototype && n.prototype.isPureReactComponent ? !Ni(o, l) || !Ni(c, p) : !0
    }
    function $p(t, n, o) {
        var l = !1
          , c = xn
          , p = n.contextType;
        return typeof p == "object" && p !== null ? p = ir(p) : (c = zt(n) ? qn : Nt.current,
        l = n.contextTypes,
        p = (l = l != null) ? As(t, c) : xn),
        n = new n(o,p),
        t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
        n.updater = va,
        t.stateNode = n,
        n._reactInternals = t,
        l && (t = t.stateNode,
        t.__reactInternalMemoizedUnmaskedChildContext = c,
        t.__reactInternalMemoizedMaskedChildContext = p),
        n
    }
    function Qp(t, n, o, l) {
        t = n.state,
        typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, l),
        typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, l),
        n.state !== t && va.enqueueReplaceState(n, n.state, null)
    }
    function $u(t, n, o, l) {
        var c = t.stateNode;
        c.props = o,
        c.state = t.memoizedState,
        c.refs = {},
        Nu(t);
        var p = n.contextType;
        typeof p == "object" && p !== null ? c.context = ir(p) : (p = zt(n) ? qn : Nt.current,
        c.context = As(t, p)),
        c.state = t.memoizedState,
        p = n.getDerivedStateFromProps,
        typeof p == "function" && (Uu(t, n, p, o),
        c.state = t.memoizedState),
        typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (n = c.state,
        typeof c.componentWillMount == "function" && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
        n !== c.state && va.enqueueReplaceState(c, c.state, null),
        da(t, o, c, l),
        c.state = t.memoizedState),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308)
    }
    function Vs(t, n) {
        try {
            var o = ""
              , l = n;
            do
                o += De(l),
                l = l.return;
            while (l);
            var c = o
        } catch (p) {
            c = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: t,
            source: n,
            stack: c,
            digest: null
        }
    }
    function Qu(t, n, o) {
        return {
            value: t,
            source: null,
            stack: o ?? null,
            digest: n ?? null
        }
    }
    function Hu(t, n) {
        try {
            console.error(n.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var _w = typeof WeakMap == "function" ? WeakMap : Map;
    function Hp(t, n, o) {
        o = Jr(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var l = n.value;
        return o.callback = function() {
            ka || (ka = !0,
            oc = l),
            Hu(t, n)
        }
        ,
        o
    }
    function Wp(t, n, o) {
        o = Jr(-1, o),
        o.tag = 3;
        var l = t.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var c = n.value;
            o.payload = function() {
                return l(c)
            }
            ,
            o.callback = function() {
                Hu(t, n)
            }
        }
        var p = t.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            Hu(t, n),
            typeof l != "function" && (Cn === null ? Cn = new Set([this]) : Cn.add(this));
            var y = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: y !== null ? y : ""
            })
        }
        ),
        o
    }
    function qp(t, n, o) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new _w;
            var c = new Set;
            l.set(n, c)
        } else
            c = l.get(n),
            c === void 0 && (c = new Set,
            l.set(n, c));
        c.has(o) || (c.add(o),
        t = Fw.bind(null, t, n, o),
        n.then(t, t))
    }
    function Zp(t) {
        do {
            var n;
            if ((n = t.tag === 13) && (n = t.memoizedState,
            n = n !== null ? n.dehydrated !== null : !0),
            n)
                return t;
            t = t.return
        } while (t !== null);
        return null
    }
    function Kp(t, n, o, l, c) {
        return (t.mode & 1) === 0 ? (t === n ? t.flags |= 65536 : (t.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (n = Jr(-1, 1),
        n.tag = 2,
        _n(o, n, 1))),
        o.lanes |= 1),
        t) : (t.flags |= 65536,
        t.lanes = c,
        t)
    }
    var Sw = U.ReactCurrentOwner
      , Bt = !1;
    function Dt(t, n, o, l) {
        n.child = t === null ? mp(n, null, o, l) : Ds(n, t.child, o, l)
    }
    function Gp(t, n, o, l, c) {
        o = o.render;
        var p = n.ref;
        return Ms(n, c),
        l = Fu(t, n, o, l, p, c),
        o = Mu(),
        t !== null && !Bt ? (n.updateQueue = t.updateQueue,
        n.flags &= -2053,
        t.lanes &= ~c,
        en(t, n, c)) : (tt && o && xu(n),
        n.flags |= 1,
        Dt(t, n, l, c),
        n.child)
    }
    function Xp(t, n, o, l, c) {
        if (t === null) {
            var p = o.type;
            return typeof p == "function" && !pc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (n.tag = 15,
            n.type = p,
            Yp(t, n, p, l, c)) : (t = Aa(o.type, null, l, n, n.mode, c),
            t.ref = n.ref,
            t.return = n,
            n.child = t)
        }
        if (p = t.child,
        (t.lanes & c) === 0) {
            var y = p.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : Ni,
            o(y, l) && t.ref === n.ref)
                return en(t, n, c)
        }
        return n.flags |= 1,
        t = Pn(p, l),
        t.ref = n.ref,
        t.return = n,
        n.child = t
    }
    function Yp(t, n, o, l, c) {
        if (t !== null) {
            var p = t.memoizedProps;
            if (Ni(p, l) && t.ref === n.ref)
                if (Bt = !1,
                n.pendingProps = l = p,
                (t.lanes & c) !== 0)
                    (t.flags & 131072) !== 0 && (Bt = !0);
                else
                    return n.lanes = t.lanes,
                    en(t, n, c)
        }
        return Wu(t, n, o, l, c)
    }
    function Jp(t, n, o) {
        var l = n.pendingProps
          , c = l.children
          , p = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden")
            if ((n.mode & 1) === 0)
                n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ge(Bs, Gt),
                Gt |= o;
            else {
                if ((o & 1073741824) === 0)
                    return t = p !== null ? p.baseLanes | o : o,
                    n.lanes = n.childLanes = 1073741824,
                    n.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null
                    },
                    n.updateQueue = null,
                    Ge(Bs, Gt),
                    Gt |= t,
                    null;
                n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                l = p !== null ? p.baseLanes : o,
                Ge(Bs, Gt),
                Gt |= l
            }
        else
            p !== null ? (l = p.baseLanes | o,
            n.memoizedState = null) : l = o,
            Ge(Bs, Gt),
            Gt |= l;
        return Dt(t, n, c, o),
        n.child
    }
    function eh(t, n) {
        var o = n.ref;
        (t === null && o !== null || t !== null && t.ref !== o) && (n.flags |= 512,
        n.flags |= 2097152)
    }
    function Wu(t, n, o, l, c) {
        var p = zt(o) ? qn : Nt.current;
        return p = As(n, p),
        Ms(n, c),
        o = Fu(t, n, o, l, p, c),
        l = Mu(),
        t !== null && !Bt ? (n.updateQueue = t.updateQueue,
        n.flags &= -2053,
        t.lanes &= ~c,
        en(t, n, c)) : (tt && l && xu(n),
        n.flags |= 1,
        Dt(t, n, o, c),
        n.child)
    }
    function th(t, n, o, l, c) {
        if (zt(o)) {
            var p = !0;
            ra(n)
        } else
            p = !1;
        if (Ms(n, c),
        n.stateNode === null)
            wa(t, n),
            $p(n, o, l),
            $u(n, o, l, c),
            l = !0;
        else if (t === null) {
            var y = n.stateNode
              , _ = n.memoizedProps;
            y.props = _;
            var E = y.context
              , D = o.contextType;
            typeof D == "object" && D !== null ? D = ir(D) : (D = zt(o) ? qn : Nt.current,
            D = As(n, D));
            var Z = o.getDerivedStateFromProps
              , K = typeof Z == "function" || typeof y.getSnapshotBeforeUpdate == "function";
            K || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (_ !== l || E !== D) && Qp(n, y, l, D),
            bn = !1;
            var H = n.memoizedState;
            y.state = H,
            da(n, l, y, c),
            E = n.memoizedState,
            _ !== l || H !== E || Vt.current || bn ? (typeof Z == "function" && (Uu(n, o, Z, l),
            E = n.memoizedState),
            (_ = bn || Up(n, o, _, l, H, E, D)) ? (K || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(),
            typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()),
            typeof y.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308),
            n.memoizedProps = l,
            n.memoizedState = E),
            y.props = l,
            y.state = E,
            y.context = D,
            l = _) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308),
            l = !1)
        } else {
            y = n.stateNode,
            yp(t, n),
            _ = n.memoizedProps,
            D = n.type === n.elementType ? _ : mr(n.type, _),
            y.props = D,
            K = n.pendingProps,
            H = y.context,
            E = o.contextType,
            typeof E == "object" && E !== null ? E = ir(E) : (E = zt(o) ? qn : Nt.current,
            E = As(n, E));
            var ue = o.getDerivedStateFromProps;
            (Z = typeof ue == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (_ !== K || H !== E) && Qp(n, y, l, E),
            bn = !1,
            H = n.memoizedState,
            y.state = H,
            da(n, l, y, c);
            var he = n.memoizedState;
            _ !== K || H !== he || Vt.current || bn ? (typeof ue == "function" && (Uu(n, o, ue, l),
            he = n.memoizedState),
            (D = bn || Up(n, o, D, l, H, he, E) || !1) ? (Z || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(l, he, E),
            typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(l, he, E)),
            typeof y.componentDidUpdate == "function" && (n.flags |= 4),
            typeof y.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || _ === t.memoizedProps && H === t.memoizedState || (n.flags |= 4),
            typeof y.getSnapshotBeforeUpdate != "function" || _ === t.memoizedProps && H === t.memoizedState || (n.flags |= 1024),
            n.memoizedProps = l,
            n.memoizedState = he),
            y.props = l,
            y.state = he,
            y.context = E,
            l = D) : (typeof y.componentDidUpdate != "function" || _ === t.memoizedProps && H === t.memoizedState || (n.flags |= 4),
            typeof y.getSnapshotBeforeUpdate != "function" || _ === t.memoizedProps && H === t.memoizedState || (n.flags |= 1024),
            l = !1)
        }
        return qu(t, n, o, l, p, c)
    }
    function qu(t, n, o, l, c, p) {
        eh(t, n);
        var y = (n.flags & 128) !== 0;
        if (!l && !y)
            return c && op(n, o, !1),
            en(t, n, p);
        l = n.stateNode,
        Sw.current = n;
        var _ = y && typeof o.getDerivedStateFromError != "function" ? null : l.render();
        return n.flags |= 1,
        t !== null && y ? (n.child = Ds(n, t.child, null, p),
        n.child = Ds(n, null, _, p)) : Dt(t, n, _, p),
        n.memoizedState = l.state,
        c && op(n, o, !0),
        n.child
    }
    function rh(t) {
        var n = t.stateNode;
        n.pendingContext ? sp(t, n.pendingContext, n.pendingContext !== n.context) : n.context && sp(t, n.context, !1),
        Ru(t, n.containerInfo)
    }
    function nh(t, n, o, l, c) {
        return js(),
        Su(c),
        n.flags |= 256,
        Dt(t, n, o, l),
        n.child
    }
    var Zu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ku(t) {
        return {
            baseLanes: t,
            cachePool: null,
            transitions: null
        }
    }
    function sh(t, n, o) {
        var l = n.pendingProps, c = rt.current, p = !1, y = (n.flags & 128) !== 0, _;
        if ((_ = y) || (_ = t !== null && t.memoizedState === null ? !1 : (c & 2) !== 0),
        _ ? (p = !0,
        n.flags &= -129) : (t === null || t.memoizedState !== null) && (c |= 1),
        Ge(rt, c & 1),
        t === null)
            return _u(n),
            t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : t.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824,
            null) : (y = l.children,
            t = l.fallback,
            p ? (l = n.mode,
            p = n.child,
            y = {
                mode: "hidden",
                children: y
            },
            (l & 1) === 0 && p !== null ? (p.childLanes = 0,
            p.pendingProps = y) : p = Oa(y, l, 0, null),
            t = ns(t, l, o, null),
            p.return = n,
            t.return = n,
            p.sibling = t,
            n.child = p,
            n.child.memoizedState = Ku(o),
            n.memoizedState = Zu,
            t) : Gu(n, y));
        if (c = t.memoizedState,
        c !== null && (_ = c.dehydrated,
        _ !== null))
            return Cw(t, n, y, l, _, c, o);
        if (p) {
            p = l.fallback,
            y = n.mode,
            c = t.child,
            _ = c.sibling;
            var E = {
                mode: "hidden",
                children: l.children
            };
            return (y & 1) === 0 && n.child !== c ? (l = n.child,
            l.childLanes = 0,
            l.pendingProps = E,
            n.deletions = null) : (l = Pn(c, E),
            l.subtreeFlags = c.subtreeFlags & 14680064),
            _ !== null ? p = Pn(_, p) : (p = ns(p, y, o, null),
            p.flags |= 2),
            p.return = n,
            l.return = n,
            l.sibling = p,
            n.child = l,
            l = p,
            p = n.child,
            y = t.child.memoizedState,
            y = y === null ? Ku(o) : {
                baseLanes: y.baseLanes | o,
                cachePool: null,
                transitions: y.transitions
            },
            p.memoizedState = y,
            p.childLanes = t.childLanes & ~o,
            n.memoizedState = Zu,
            l
        }
        return p = t.child,
        t = p.sibling,
        l = Pn(p, {
            mode: "visible",
            children: l.children
        }),
        (n.mode & 1) === 0 && (l.lanes = o),
        l.return = n,
        l.sibling = null,
        t !== null && (o = n.deletions,
        o === null ? (n.deletions = [t],
        n.flags |= 16) : o.push(t)),
        n.child = l,
        n.memoizedState = null,
        l
    }
    function Gu(t, n) {
        return n = Oa({
            mode: "visible",
            children: n
        }, t.mode, 0, null),
        n.return = t,
        t.child = n
    }
    function xa(t, n, o, l) {
        return l !== null && Su(l),
        Ds(n, t.child, null, o),
        t = Gu(n, n.pendingProps.children),
        t.flags |= 2,
        n.memoizedState = null,
        t
    }
    function Cw(t, n, o, l, c, p, y) {
        if (o)
            return n.flags & 256 ? (n.flags &= -257,
            l = Qu(Error(s(422))),
            xa(t, n, y, l)) : n.memoizedState !== null ? (n.child = t.child,
            n.flags |= 128,
            null) : (p = l.fallback,
            c = n.mode,
            l = Oa({
                mode: "visible",
                children: l.children
            }, c, 0, null),
            p = ns(p, c, y, null),
            p.flags |= 2,
            l.return = n,
            p.return = n,
            l.sibling = p,
            n.child = l,
            (n.mode & 1) !== 0 && Ds(n, t.child, null, y),
            n.child.memoizedState = Ku(y),
            n.memoizedState = Zu,
            p);
        if ((n.mode & 1) === 0)
            return xa(t, n, y, null);
        if (c.data === "$!") {
            if (l = c.nextSibling && c.nextSibling.dataset,
            l)
                var _ = l.dgst;
            return l = _,
            p = Error(s(419)),
            l = Qu(p, l, void 0),
            xa(t, n, y, l)
        }
        if (_ = (y & t.childLanes) !== 0,
        Bt || _) {
            if (l = St,
            l !== null) {
                switch (y & -y) {
                case 4:
                    c = 2;
                    break;
                case 16:
                    c = 8;
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
                    c = 32;
                    break;
                case 536870912:
                    c = 268435456;
                    break;
                default:
                    c = 0
                }
                c = (c & (l.suspendedLanes | y)) !== 0 ? 0 : c,
                c !== 0 && c !== p.retryLane && (p.retryLane = c,
                Yr(t, c),
                vr(l, t, c, -1))
            }
            return fc(),
            l = Qu(Error(s(421))),
            xa(t, n, y, l)
        }
        return c.data === "$?" ? (n.flags |= 128,
        n.child = t.child,
        n = Mw.bind(null, t),
        c._reactRetry = n,
        null) : (t = p.treeContext,
        Kt = yn(c.nextSibling),
        Zt = n,
        tt = !0,
        hr = null,
        t !== null && (nr[sr++] = Gr,
        nr[sr++] = Xr,
        nr[sr++] = Zn,
        Gr = t.id,
        Xr = t.overflow,
        Zn = n),
        n = Gu(n, l.children),
        n.flags |= 4096,
        n)
    }
    function ih(t, n, o) {
        t.lanes |= n;
        var l = t.alternate;
        l !== null && (l.lanes |= n),
        Tu(t.return, n, o)
    }
    function Xu(t, n, o, l, c) {
        var p = t.memoizedState;
        p === null ? t.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: o,
            tailMode: c
        } : (p.isBackwards = n,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = l,
        p.tail = o,
        p.tailMode = c)
    }
    function oh(t, n, o) {
        var l = n.pendingProps
          , c = l.revealOrder
          , p = l.tail;
        if (Dt(t, n, l.children, o),
        l = rt.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            n.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                e: for (t = n.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && ih(t, o, n);
                    else if (t.tag === 19)
                        ih(t, o, n);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === n)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === n)
                            break e;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            l &= 1
        }
        if (Ge(rt, l),
        (n.mode & 1) === 0)
            n.memoizedState = null;
        else
            switch (c) {
            case "forwards":
                for (o = n.child,
                c = null; o !== null; )
                    t = o.alternate,
                    t !== null && fa(t) === null && (c = o),
                    o = o.sibling;
                o = c,
                o === null ? (c = n.child,
                n.child = null) : (c = o.sibling,
                o.sibling = null),
                Xu(n, !1, c, o, p);
                break;
            case "backwards":
                for (o = null,
                c = n.child,
                n.child = null; c !== null; ) {
                    if (t = c.alternate,
                    t !== null && fa(t) === null) {
                        n.child = c;
                        break
                    }
                    t = c.sibling,
                    c.sibling = o,
                    o = c,
                    c = t
                }
                Xu(n, !0, o, null, p);
                break;
            case "together":
                Xu(n, !1, null, null, void 0);
                break;
            default:
                n.memoizedState = null
            }
        return n.child
    }
    function wa(t, n) {
        (n.mode & 1) === 0 && t !== null && (t.alternate = null,
        n.alternate = null,
        n.flags |= 2)
    }
    function en(t, n, o) {
        if (t !== null && (n.dependencies = t.dependencies),
        Jn |= n.lanes,
        (o & n.childLanes) === 0)
            return null;
        if (t !== null && n.child !== t.child)
            throw Error(s(153));
        if (n.child !== null) {
            for (t = n.child,
            o = Pn(t, t.pendingProps),
            n.child = o,
            o.return = n; t.sibling !== null; )
                t = t.sibling,
                o = o.sibling = Pn(t, t.pendingProps),
                o.return = n;
            o.sibling = null
        }
        return n.child
    }
    function kw(t, n, o) {
        switch (n.tag) {
        case 3:
            rh(n),
            js();
            break;
        case 5:
            wp(n);
            break;
        case 1:
            zt(n.type) && ra(n);
            break;
        case 4:
            Ru(n, n.stateNode.containerInfo);
            break;
        case 10:
            var l = n.type._context
              , c = n.memoizedProps.value;
            Ge(la, l._currentValue),
            l._currentValue = c;
            break;
        case 13:
            if (l = n.memoizedState,
            l !== null)
                return l.dehydrated !== null ? (Ge(rt, rt.current & 1),
                n.flags |= 128,
                null) : (o & n.child.childLanes) !== 0 ? sh(t, n, o) : (Ge(rt, rt.current & 1),
                t = en(t, n, o),
                t !== null ? t.sibling : null);
            Ge(rt, rt.current & 1);
            break;
        case 19:
            if (l = (o & n.childLanes) !== 0,
            (t.flags & 128) !== 0) {
                if (l)
                    return oh(t, n, o);
                n.flags |= 128
            }
            if (c = n.memoizedState,
            c !== null && (c.rendering = null,
            c.tail = null,
            c.lastEffect = null),
            Ge(rt, rt.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return n.lanes = 0,
            Jp(t, n, o)
        }
        return en(t, n, o)
    }
    var ah, Yu, lh, uh;
    ah = function(t, n) {
        for (var o = n.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                t.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === n)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === n)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    Yu = function() {}
    ,
    lh = function(t, n, o, l) {
        var c = t.memoizedProps;
        if (c !== l) {
            t = n.stateNode,
            Xn(Fr.current);
            var p = null;
            switch (o) {
            case "input":
                c = ps(t, c),
                l = ps(t, l),
                p = [];
                break;
            case "select":
                c = te({}, c, {
                    value: void 0
                }),
                l = te({}, l, {
                    value: void 0
                }),
                p = [];
                break;
            case "textarea":
                c = C(t, c),
                l = C(t, l),
                p = [];
                break;
            default:
                typeof c.onClick != "function" && typeof l.onClick == "function" && (t.onclick = Jo)
            }
            vs(o, l);
            var y;
            o = null;
            for (D in c)
                if (!l.hasOwnProperty(D) && c.hasOwnProperty(D) && c[D] != null)
                    if (D === "style") {
                        var _ = c[D];
                        for (y in _)
                            _.hasOwnProperty(y) && (o || (o = {}),
                            o[y] = "")
                    } else
                        D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (a.hasOwnProperty(D) ? p || (p = []) : (p = p || []).push(D, null));
            for (D in l) {
                var E = l[D];
                if (_ = c?.[D],
                l.hasOwnProperty(D) && E !== _ && (E != null || _ != null))
                    if (D === "style")
                        if (_) {
                            for (y in _)
                                !_.hasOwnProperty(y) || E && E.hasOwnProperty(y) || (o || (o = {}),
                                o[y] = "");
                            for (y in E)
                                E.hasOwnProperty(y) && _[y] !== E[y] && (o || (o = {}),
                                o[y] = E[y])
                        } else
                            o || (p || (p = []),
                            p.push(D, o)),
                            o = E;
                    else
                        D === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0,
                        _ = _ ? _.__html : void 0,
                        E != null && _ !== E && (p = p || []).push(D, E)) : D === "children" ? typeof E != "string" && typeof E != "number" || (p = p || []).push(D, "" + E) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (a.hasOwnProperty(D) ? (E != null && D === "onScroll" && Xe("scroll", t),
                        p || _ === E || (p = [])) : (p = p || []).push(D, E))
            }
            o && (p = p || []).push("style", o);
            var D = p;
            (n.updateQueue = D) && (n.flags |= 4)
        }
    }
    ,
    uh = function(t, n, o, l) {
        o !== l && (n.flags |= 4)
    }
    ;
    function Qi(t, n) {
        if (!tt)
            switch (t.tailMode) {
            case "hidden":
                n = t.tail;
                for (var o = null; n !== null; )
                    n.alternate !== null && (o = n),
                    n = n.sibling;
                o === null ? t.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = t.tail;
                for (var l = null; o !== null; )
                    o.alternate !== null && (l = o),
                    o = o.sibling;
                l === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function At(t) {
        var n = t.alternate !== null && t.alternate.child === t.child
          , o = 0
          , l = 0;
        if (n)
            for (var c = t.child; c !== null; )
                o |= c.lanes | c.childLanes,
                l |= c.subtreeFlags & 14680064,
                l |= c.flags & 14680064,
                c.return = t,
                c = c.sibling;
        else
            for (c = t.child; c !== null; )
                o |= c.lanes | c.childLanes,
                l |= c.subtreeFlags,
                l |= c.flags,
                c.return = t,
                c = c.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = o,
        n
    }
    function Ew(t, n, o) {
        var l = n.pendingProps;
        switch (wu(n),
        n.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return At(n),
            null;
        case 1:
            return zt(n.type) && ta(),
            At(n),
            null;
        case 3:
            return l = n.stateNode,
            Ls(),
            Ye(Vt),
            Ye(Nt),
            Iu(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (t === null || t.child === null) && (oa(n) ? n.flags |= 4 : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024,
            hr !== null && (uc(hr),
            hr = null))),
            Yu(t, n),
            At(n),
            null;
        case 5:
            Au(n);
            var c = Xn(Vi.current);
            if (o = n.type,
            t !== null && n.stateNode != null)
                lh(t, n, o, l, c),
                t.ref !== n.ref && (n.flags |= 512,
                n.flags |= 2097152);
            else {
                if (!l) {
                    if (n.stateNode === null)
                        throw Error(s(166));
                    return At(n),
                    null
                }
                if (t = Xn(Fr.current),
                oa(n)) {
                    l = n.stateNode,
                    o = n.type;
                    var p = n.memoizedProps;
                    switch (l[Dr] = n,
                    l[ji] = p,
                    t = (n.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        Xe("cancel", l),
                        Xe("close", l);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Xe("load", l);
                        break;
                    case "video":
                    case "audio":
                        for (c = 0; c < Ai.length; c++)
                            Xe(Ai[c], l);
                        break;
                    case "source":
                        Xe("error", l);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Xe("error", l),
                        Xe("load", l);
                        break;
                    case "details":
                        Xe("toggle", l);
                        break;
                    case "input":
                        Ro(l, p),
                        Xe("invalid", l);
                        break;
                    case "select":
                        l._wrapperState = {
                            wasMultiple: !!p.multiple
                        },
                        Xe("invalid", l);
                        break;
                    case "textarea":
                        j(l, p),
                        Xe("invalid", l)
                    }
                    vs(o, p),
                    c = null;
                    for (var y in p)
                        if (p.hasOwnProperty(y)) {
                            var _ = p[y];
                            y === "children" ? typeof _ == "string" ? l.textContent !== _ && (p.suppressHydrationWarning !== !0 && Yo(l.textContent, _, t),
                            c = ["children", _]) : typeof _ == "number" && l.textContent !== "" + _ && (p.suppressHydrationWarning !== !0 && Yo(l.textContent, _, t),
                            c = ["children", "" + _]) : a.hasOwnProperty(y) && _ != null && y === "onScroll" && Xe("scroll", l)
                        }
                    switch (o) {
                    case "input":
                        Ir(l),
                        Ao(l, p, !0);
                        break;
                    case "textarea":
                        Ir(l),
                        le(l);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof p.onClick == "function" && (l.onclick = Jo)
                    }
                    l = c,
                    n.updateQueue = l,
                    l !== null && (n.flags |= 4)
                } else {
                    y = c.nodeType === 9 ? c : c.ownerDocument,
                    t === "http://www.w3.org/1999/xhtml" && (t = se(o)),
                    t === "http://www.w3.org/1999/xhtml" ? o === "script" ? (t = y.createElement("div"),
                    t.innerHTML = "<script><\/script>",
                    t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = y.createElement(o, {
                        is: l.is
                    }) : (t = y.createElement(o),
                    o === "select" && (y = t,
                    l.multiple ? y.multiple = !0 : l.size && (y.size = l.size))) : t = y.createElementNS(t, o),
                    t[Dr] = n,
                    t[ji] = l,
                    ah(t, n, !1, !1),
                    n.stateNode = t;
                    e: {
                        switch (y = pi(o, l),
                        o) {
                        case "dialog":
                            Xe("cancel", t),
                            Xe("close", t),
                            c = l;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Xe("load", t),
                            c = l;
                            break;
                        case "video":
                        case "audio":
                            for (c = 0; c < Ai.length; c++)
                                Xe(Ai[c], t);
                            c = l;
                            break;
                        case "source":
                            Xe("error", t),
                            c = l;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Xe("error", t),
                            Xe("load", t),
                            c = l;
                            break;
                        case "details":
                            Xe("toggle", t),
                            c = l;
                            break;
                        case "input":
                            Ro(t, l),
                            c = ps(t, l),
                            Xe("invalid", t);
                            break;
                        case "option":
                            c = l;
                            break;
                        case "select":
                            t._wrapperState = {
                                wasMultiple: !!l.multiple
                            },
                            c = te({}, l, {
                                value: void 0
                            }),
                            Xe("invalid", t);
                            break;
                        case "textarea":
                            j(t, l),
                            c = C(t, l),
                            Xe("invalid", t);
                            break;
                        default:
                            c = l
                        }
                        vs(o, c),
                        _ = c;
                        for (p in _)
                            if (_.hasOwnProperty(p)) {
                                var E = _[p];
                                p === "style" ? ys(t, E) : p === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0,
                                E != null && Le(t, E)) : p === "children" ? typeof E == "string" ? (o !== "textarea" || E !== "") && Ke(t, E) : typeof E == "number" && Ke(t, "" + E) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? E != null && p === "onScroll" && Xe("scroll", t) : E != null && B(t, p, E, y))
                            }
                        switch (o) {
                        case "input":
                            Ir(t),
                            Ao(t, l, !1);
                            break;
                        case "textarea":
                            Ir(t),
                            le(t);
                            break;
                        case "option":
                            l.value != null && t.setAttribute("value", "" + Ve(l.value));
                            break;
                        case "select":
                            t.multiple = !!l.multiple,
                            p = l.value,
                            p != null ? qr(t, !!l.multiple, p, !1) : l.defaultValue != null && qr(t, !!l.multiple, l.defaultValue, !0);
                            break;
                        default:
                            typeof c.onClick == "function" && (t.onclick = Jo)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break e;
                        case "img":
                            l = !0;
                            break e;
                        default:
                            l = !1
                        }
                    }
                    l && (n.flags |= 4)
                }
                n.ref !== null && (n.flags |= 512,
                n.flags |= 2097152)
            }
            return At(n),
            null;
        case 6:
            if (t && n.stateNode != null)
                uh(t, n, t.memoizedProps, l);
            else {
                if (typeof l != "string" && n.stateNode === null)
                    throw Error(s(166));
                if (o = Xn(Vi.current),
                Xn(Fr.current),
                oa(n)) {
                    if (l = n.stateNode,
                    o = n.memoizedProps,
                    l[Dr] = n,
                    (p = l.nodeValue !== o) && (t = Zt,
                    t !== null))
                        switch (t.tag) {
                        case 3:
                            Yo(l.nodeValue, o, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && Yo(l.nodeValue, o, (t.mode & 1) !== 0)
                        }
                    p && (n.flags |= 4)
                } else
                    l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l),
                    l[Dr] = n,
                    n.stateNode = l
            }
            return At(n),
            null;
        case 13:
            if (Ye(rt),
            l = n.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (tt && Kt !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
                    fp(),
                    js(),
                    n.flags |= 98560,
                    p = !1;
                else if (p = oa(n),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!p)
                            throw Error(s(318));
                        if (p = n.memoizedState,
                        p = p !== null ? p.dehydrated : null,
                        !p)
                            throw Error(s(317));
                        p[Dr] = n
                    } else
                        js(),
                        (n.flags & 128) === 0 && (n.memoizedState = null),
                        n.flags |= 4;
                    At(n),
                    p = !1
                } else
                    hr !== null && (uc(hr),
                    hr = null),
                    p = !0;
                if (!p)
                    return n.flags & 65536 ? n : null
            }
            return (n.flags & 128) !== 0 ? (n.lanes = o,
            n) : (l = l !== null,
            l !== (t !== null && t.memoizedState !== null) && l && (n.child.flags |= 8192,
            (n.mode & 1) !== 0 && (t === null || (rt.current & 1) !== 0 ? xt === 0 && (xt = 3) : fc())),
            n.updateQueue !== null && (n.flags |= 4),
            At(n),
            null);
        case 4:
            return Ls(),
            Yu(t, n),
            t === null && Oi(n.stateNode.containerInfo),
            At(n),
            null;
        case 10:
            return Eu(n.type._context),
            At(n),
            null;
        case 17:
            return zt(n.type) && ta(),
            At(n),
            null;
        case 19:
            if (Ye(rt),
            p = n.memoizedState,
            p === null)
                return At(n),
                null;
            if (l = (n.flags & 128) !== 0,
            y = p.rendering,
            y === null)
                if (l)
                    Qi(p, !1);
                else {
                    if (xt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = n.child; t !== null; ) {
                            if (y = fa(t),
                            y !== null) {
                                for (n.flags |= 128,
                                Qi(p, !1),
                                l = y.updateQueue,
                                l !== null && (n.updateQueue = l,
                                n.flags |= 4),
                                n.subtreeFlags = 0,
                                l = o,
                                o = n.child; o !== null; )
                                    p = o,
                                    t = l,
                                    p.flags &= 14680066,
                                    y = p.alternate,
                                    y === null ? (p.childLanes = 0,
                                    p.lanes = t,
                                    p.child = null,
                                    p.subtreeFlags = 0,
                                    p.memoizedProps = null,
                                    p.memoizedState = null,
                                    p.updateQueue = null,
                                    p.dependencies = null,
                                    p.stateNode = null) : (p.childLanes = y.childLanes,
                                    p.lanes = y.lanes,
                                    p.child = y.child,
                                    p.subtreeFlags = 0,
                                    p.deletions = null,
                                    p.memoizedProps = y.memoizedProps,
                                    p.memoizedState = y.memoizedState,
                                    p.updateQueue = y.updateQueue,
                                    p.type = y.type,
                                    t = y.dependencies,
                                    p.dependencies = t === null ? null : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext
                                    }),
                                    o = o.sibling;
                                return Ge(rt, rt.current & 1 | 2),
                                n.child
                            }
                            t = t.sibling
                        }
                    p.tail !== null && dt() > Us && (n.flags |= 128,
                    l = !0,
                    Qi(p, !1),
                    n.lanes = 4194304)
                }
            else {
                if (!l)
                    if (t = fa(y),
                    t !== null) {
                        if (n.flags |= 128,
                        l = !0,
                        o = t.updateQueue,
                        o !== null && (n.updateQueue = o,
                        n.flags |= 4),
                        Qi(p, !0),
                        p.tail === null && p.tailMode === "hidden" && !y.alternate && !tt)
                            return At(n),
                            null
                    } else
                        2 * dt() - p.renderingStartTime > Us && o !== 1073741824 && (n.flags |= 128,
                        l = !0,
                        Qi(p, !1),
                        n.lanes = 4194304);
                p.isBackwards ? (y.sibling = n.child,
                n.child = y) : (o = p.last,
                o !== null ? o.sibling = y : n.child = y,
                p.last = y)
            }
            return p.tail !== null ? (n = p.tail,
            p.rendering = n,
            p.tail = n.sibling,
            p.renderingStartTime = dt(),
            n.sibling = null,
            o = rt.current,
            Ge(rt, l ? o & 1 | 2 : o & 1),
            n) : (At(n),
            null);
        case 22:
        case 23:
            return dc(),
            l = n.memoizedState !== null,
            t !== null && t.memoizedState !== null !== l && (n.flags |= 8192),
            l && (n.mode & 1) !== 0 ? (Gt & 1073741824) !== 0 && (At(n),
            n.subtreeFlags & 6 && (n.flags |= 8192)) : At(n),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(s(156, n.tag))
    }
    function Tw(t, n) {
        switch (wu(n),
        n.tag) {
        case 1:
            return zt(n.type) && ta(),
            t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 3:
            return Ls(),
            Ye(Vt),
            Ye(Nt),
            Iu(),
            t = n.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 5:
            return Au(n),
            null;
        case 13:
            if (Ye(rt),
            t = n.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (n.alternate === null)
                    throw Error(s(340));
                js()
            }
            return t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 19:
            return Ye(rt),
            null;
        case 4:
            return Ls(),
            null;
        case 10:
            return Eu(n.type._context),
            null;
        case 22:
        case 23:
            return dc(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var ba = !1
      , Ot = !1
      , Pw = typeof WeakSet == "function" ? WeakSet : Set
      , pe = null;
    function zs(t, n) {
        var o = t.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (l) {
                    ut(t, n, l)
                }
            else
                o.current = null
    }
    function Ju(t, n, o) {
        try {
            o()
        } catch (l) {
            ut(t, n, l)
        }
    }
    var ch = !1;
    function Nw(t, n) {
        if (du = Bo,
        t = Uf(),
        nu(t)) {
            if ("selectionStart"in t)
                var o = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                e: {
                    o = (o = t.ownerDocument) && o.defaultView || window;
                    var l = o.getSelection && o.getSelection();
                    if (l && l.rangeCount !== 0) {
                        o = l.anchorNode;
                        var c = l.anchorOffset
                          , p = l.focusNode;
                        l = l.focusOffset;
                        try {
                            o.nodeType,
                            p.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var y = 0
                          , _ = -1
                          , E = -1
                          , D = 0
                          , Z = 0
                          , K = t
                          , H = null;
                        t: for (; ; ) {
                            for (var ue; K !== o || c !== 0 && K.nodeType !== 3 || (_ = y + c),
                            K !== p || l !== 0 && K.nodeType !== 3 || (E = y + l),
                            K.nodeType === 3 && (y += K.nodeValue.length),
                            (ue = K.firstChild) !== null; )
                                H = K,
                                K = ue;
                            for (; ; ) {
                                if (K === t)
                                    break t;
                                if (H === o && ++D === c && (_ = y),
                                H === p && ++Z === l && (E = y),
                                (ue = K.nextSibling) !== null)
                                    break;
                                K = H,
                                H = K.parentNode
                            }
                            K = ue
                        }
                        o = _ === -1 || E === -1 ? null : {
                            start: _,
                            end: E
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (fu = {
            focusedElem: t,
            selectionRange: o
        },
        Bo = !1,
        pe = n; pe !== null; )
            if (n = pe,
            t = n.child,
            (n.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = n,
                pe = t;
            else
                for (; pe !== null; ) {
                    n = pe;
                    try {
                        var he = n.alternate;
                        if ((n.flags & 1024) !== 0)
                            switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (he !== null) {
                                    var ge = he.memoizedProps
                                      , ft = he.memoizedState
                                      , O = n.stateNode
                                      , P = O.getSnapshotBeforeUpdate(n.elementType === n.type ? ge : mr(n.type, ge), ft);
                                    O.__reactInternalSnapshotBeforeUpdate = P
                                }
                                break;
                            case 3:
                                var I = n.stateNode.containerInfo;
                                I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                            }
                    } catch (ee) {
                        ut(n, n.return, ee)
                    }
                    if (t = n.sibling,
                    t !== null) {
                        t.return = n.return,
                        pe = t;
                        break
                    }
                    pe = n.return
                }
        return he = ch,
        ch = !1,
        he
    }
    function Hi(t, n, o) {
        var l = n.updateQueue;
        if (l = l !== null ? l.lastEffect : null,
        l !== null) {
            var c = l = l.next;
            do {
                if ((c.tag & t) === t) {
                    var p = c.destroy;
                    c.destroy = void 0,
                    p !== void 0 && Ju(n, o, p)
                }
                c = c.next
            } while (c !== l)
        }
    }
    function _a(t, n) {
        if (n = n.updateQueue,
        n = n !== null ? n.lastEffect : null,
        n !== null) {
            var o = n = n.next;
            do {
                if ((o.tag & t) === t) {
                    var l = o.create;
                    o.destroy = l()
                }
                o = o.next
            } while (o !== n)
        }
    }
    function ec(t) {
        var n = t.ref;
        if (n !== null) {
            var o = t.stateNode;
            t.tag,
            t = o,
            typeof n == "function" ? n(t) : n.current = t
        }
    }
    function dh(t) {
        var n = t.alternate;
        n !== null && (t.alternate = null,
        dh(n)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (n = t.stateNode,
        n !== null && (delete n[Dr],
        delete n[ji],
        delete n[gu],
        delete n[dw],
        delete n[fw])),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    function fh(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 4
    }
    function ph(t) {
        e: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || fh(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.flags & 2 || t.child === null || t.tag === 4)
                    continue e;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function tc(t, n, o) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            n ? o.nodeType === 8 ? o.parentNode.insertBefore(t, n) : o.insertBefore(t, n) : (o.nodeType === 8 ? (n = o.parentNode,
            n.insertBefore(t, o)) : (n = o,
            n.appendChild(t)),
            o = o._reactRootContainer,
            o != null || n.onclick !== null || (n.onclick = Jo));
        else if (l !== 4 && (t = t.child,
        t !== null))
            for (tc(t, n, o),
            t = t.sibling; t !== null; )
                tc(t, n, o),
                t = t.sibling
    }
    function rc(t, n, o) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            n ? o.insertBefore(t, n) : o.appendChild(t);
        else if (l !== 4 && (t = t.child,
        t !== null))
            for (rc(t, n, o),
            t = t.sibling; t !== null; )
                rc(t, n, o),
                t = t.sibling
    }
    var Et = null
      , gr = !1;
    function Sn(t, n, o) {
        for (o = o.child; o !== null; )
            hh(t, n, o),
            o = o.sibling
    }
    function hh(t, n, o) {
        if (jr && typeof jr.onCommitFiberUnmount == "function")
            try {
                jr.onCommitFiberUnmount(Do, o)
            } catch {}
        switch (o.tag) {
        case 5:
            Ot || zs(o, n);
        case 6:
            var l = Et
              , c = gr;
            Et = null,
            Sn(t, n, o),
            Et = l,
            gr = c,
            Et !== null && (gr ? (t = Et,
            o = o.stateNode,
            t.nodeType === 8 ? t.parentNode.removeChild(o) : t.removeChild(o)) : Et.removeChild(o.stateNode));
            break;
        case 18:
            Et !== null && (gr ? (t = Et,
            o = o.stateNode,
            t.nodeType === 8 ? mu(t.parentNode, o) : t.nodeType === 1 && mu(t, o),
            Si(t)) : mu(Et, o.stateNode));
            break;
        case 4:
            l = Et,
            c = gr,
            Et = o.stateNode.containerInfo,
            gr = !0,
            Sn(t, n, o),
            Et = l,
            gr = c;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ot && (l = o.updateQueue,
            l !== null && (l = l.lastEffect,
            l !== null))) {
                c = l = l.next;
                do {
                    var p = c
                      , y = p.destroy;
                    p = p.tag,
                    y !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Ju(o, n, y),
                    c = c.next
                } while (c !== l)
            }
            Sn(t, n, o);
            break;
        case 1:
            if (!Ot && (zs(o, n),
            l = o.stateNode,
            typeof l.componentWillUnmount == "function"))
                try {
                    l.props = o.memoizedProps,
                    l.state = o.memoizedState,
                    l.componentWillUnmount()
                } catch (_) {
                    ut(o, n, _)
                }
            Sn(t, n, o);
            break;
        case 21:
            Sn(t, n, o);
            break;
        case 22:
            o.mode & 1 ? (Ot = (l = Ot) || o.memoizedState !== null,
            Sn(t, n, o),
            Ot = l) : Sn(t, n, o);
            break;
        default:
            Sn(t, n, o)
        }
    }
    function mh(t) {
        var n = t.updateQueue;
        if (n !== null) {
            t.updateQueue = null;
            var o = t.stateNode;
            o === null && (o = t.stateNode = new Pw),
            n.forEach(function(l) {
                var c = Lw.bind(null, t, l);
                o.has(l) || (o.add(l),
                l.then(c, c))
            })
        }
    }
    function yr(t, n) {
        var o = n.deletions;
        if (o !== null)
            for (var l = 0; l < o.length; l++) {
                var c = o[l];
                try {
                    var p = t
                      , y = n
                      , _ = y;
                    e: for (; _ !== null; ) {
                        switch (_.tag) {
                        case 5:
                            Et = _.stateNode,
                            gr = !1;
                            break e;
                        case 3:
                            Et = _.stateNode.containerInfo,
                            gr = !0;
                            break e;
                        case 4:
                            Et = _.stateNode.containerInfo,
                            gr = !0;
                            break e
                        }
                        _ = _.return
                    }
                    if (Et === null)
                        throw Error(s(160));
                    hh(p, y, c),
                    Et = null,
                    gr = !1;
                    var E = c.alternate;
                    E !== null && (E.return = null),
                    c.return = null
                } catch (D) {
                    ut(c, n, D)
                }
            }
        if (n.subtreeFlags & 12854)
            for (n = n.child; n !== null; )
                gh(n, t),
                n = n.sibling
    }
    function gh(t, n) {
        var o = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (yr(n, t),
            Lr(t),
            l & 4) {
                try {
                    Hi(3, t, t.return),
                    _a(3, t)
                } catch (ge) {
                    ut(t, t.return, ge)
                }
                try {
                    Hi(5, t, t.return)
                } catch (ge) {
                    ut(t, t.return, ge)
                }
            }
            break;
        case 1:
            yr(n, t),
            Lr(t),
            l & 512 && o !== null && zs(o, o.return);
            break;
        case 5:
            if (yr(n, t),
            Lr(t),
            l & 512 && o !== null && zs(o, o.return),
            t.flags & 32) {
                var c = t.stateNode;
                try {
                    Ke(c, "")
                } catch (ge) {
                    ut(t, t.return, ge)
                }
            }
            if (l & 4 && (c = t.stateNode,
            c != null)) {
                var p = t.memoizedProps
                  , y = o !== null ? o.memoizedProps : p
                  , _ = t.type
                  , E = t.updateQueue;
                if (t.updateQueue = null,
                E !== null)
                    try {
                        _ === "input" && p.type === "radio" && p.name != null && di(c, p),
                        pi(_, y);
                        var D = pi(_, p);
                        for (y = 0; y < E.length; y += 2) {
                            var Z = E[y]
                              , K = E[y + 1];
                            Z === "style" ? ys(c, K) : Z === "dangerouslySetInnerHTML" ? Le(c, K) : Z === "children" ? Ke(c, K) : B(c, Z, K, D)
                        }
                        switch (_) {
                        case "input":
                            hs(c, p);
                            break;
                        case "textarea":
                            z(c, p);
                            break;
                        case "select":
                            var H = c._wrapperState.wasMultiple;
                            c._wrapperState.wasMultiple = !!p.multiple;
                            var ue = p.value;
                            ue != null ? qr(c, !!p.multiple, ue, !1) : H !== !!p.multiple && (p.defaultValue != null ? qr(c, !!p.multiple, p.defaultValue, !0) : qr(c, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        c[ji] = p
                    } catch (ge) {
                        ut(t, t.return, ge)
                    }
            }
            break;
        case 6:
            if (yr(n, t),
            Lr(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(s(162));
                c = t.stateNode,
                p = t.memoizedProps;
                try {
                    c.nodeValue = p
                } catch (ge) {
                    ut(t, t.return, ge)
                }
            }
            break;
        case 3:
            if (yr(n, t),
            Lr(t),
            l & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    Si(n.containerInfo)
                } catch (ge) {
                    ut(t, t.return, ge)
                }
            break;
        case 4:
            yr(n, t),
            Lr(t);
            break;
        case 13:
            yr(n, t),
            Lr(t),
            c = t.child,
            c.flags & 8192 && (p = c.memoizedState !== null,
            c.stateNode.isHidden = p,
            !p || c.alternate !== null && c.alternate.memoizedState !== null || (ic = dt())),
            l & 4 && mh(t);
            break;
        case 22:
            if (Z = o !== null && o.memoizedState !== null,
            t.mode & 1 ? (Ot = (D = Ot) || Z,
            yr(n, t),
            Ot = D) : yr(n, t),
            Lr(t),
            l & 8192) {
                if (D = t.memoizedState !== null,
                (t.stateNode.isHidden = D) && !Z && (t.mode & 1) !== 0)
                    for (pe = t,
                    Z = t.child; Z !== null; ) {
                        for (K = pe = Z; pe !== null; ) {
                            switch (H = pe,
                            ue = H.child,
                            H.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Hi(4, H, H.return);
                                break;
                            case 1:
                                zs(H, H.return);
                                var he = H.stateNode;
                                if (typeof he.componentWillUnmount == "function") {
                                    l = H,
                                    o = H.return;
                                    try {
                                        n = l,
                                        he.props = n.memoizedProps,
                                        he.state = n.memoizedState,
                                        he.componentWillUnmount()
                                    } catch (ge) {
                                        ut(l, o, ge)
                                    }
                                }
                                break;
                            case 5:
                                zs(H, H.return);
                                break;
                            case 22:
                                if (H.memoizedState !== null) {
                                    xh(K);
                                    continue
                                }
                            }
                            ue !== null ? (ue.return = H,
                            pe = ue) : xh(K)
                        }
                        Z = Z.sibling
                    }
                e: for (Z = null,
                K = t; ; ) {
                    if (K.tag === 5) {
                        if (Z === null) {
                            Z = K;
                            try {
                                c = K.stateNode,
                                D ? (p = c.style,
                                typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (_ = K.stateNode,
                                E = K.memoizedProps.style,
                                y = E != null && E.hasOwnProperty("display") ? E.display : null,
                                _.style.display = gs("display", y))
                            } catch (ge) {
                                ut(t, t.return, ge)
                            }
                        }
                    } else if (K.tag === 6) {
                        if (Z === null)
                            try {
                                K.stateNode.nodeValue = D ? "" : K.memoizedProps
                            } catch (ge) {
                                ut(t, t.return, ge)
                            }
                    } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === t) && K.child !== null) {
                        K.child.return = K,
                        K = K.child;
                        continue
                    }
                    if (K === t)
                        break e;
                    for (; K.sibling === null; ) {
                        if (K.return === null || K.return === t)
                            break e;
                        Z === K && (Z = null),
                        K = K.return
                    }
                    Z === K && (Z = null),
                    K.sibling.return = K.return,
                    K = K.sibling
                }
            }
            break;
        case 19:
            yr(n, t),
            Lr(t),
            l & 4 && mh(t);
            break;
        case 21:
            break;
        default:
            yr(n, t),
            Lr(t)
        }
    }
    function Lr(t) {
        var n = t.flags;
        if (n & 2) {
            try {
                e: {
                    for (var o = t.return; o !== null; ) {
                        if (fh(o)) {
                            var l = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(s(160))
                }
                switch (l.tag) {
                case 5:
                    var c = l.stateNode;
                    l.flags & 32 && (Ke(c, ""),
                    l.flags &= -33);
                    var p = ph(t);
                    rc(t, p, c);
                    break;
                case 3:
                case 4:
                    var y = l.stateNode.containerInfo
                      , _ = ph(t);
                    tc(t, _, y);
                    break;
                default:
                    throw Error(s(161))
                }
            } catch (E) {
                ut(t, t.return, E)
            }
            t.flags &= -3
        }
        n & 4096 && (t.flags &= -4097)
    }
    function Rw(t, n, o) {
        pe = t,
        yh(t)
    }
    function yh(t, n, o) {
        for (var l = (t.mode & 1) !== 0; pe !== null; ) {
            var c = pe
              , p = c.child;
            if (c.tag === 22 && l) {
                var y = c.memoizedState !== null || ba;
                if (!y) {
                    var _ = c.alternate
                      , E = _ !== null && _.memoizedState !== null || Ot;
                    _ = ba;
                    var D = Ot;
                    if (ba = y,
                    (Ot = E) && !D)
                        for (pe = c; pe !== null; )
                            y = pe,
                            E = y.child,
                            y.tag === 22 && y.memoizedState !== null ? wh(c) : E !== null ? (E.return = y,
                            pe = E) : wh(c);
                    for (; p !== null; )
                        pe = p,
                        yh(p),
                        p = p.sibling;
                    pe = c,
                    ba = _,
                    Ot = D
                }
                vh(t)
            } else
                (c.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = c,
                pe = p) : vh(t)
        }
    }
    function vh(t) {
        for (; pe !== null; ) {
            var n = pe;
            if ((n.flags & 8772) !== 0) {
                var o = n.alternate;
                try {
                    if ((n.flags & 8772) !== 0)
                        switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ot || _a(5, n);
                            break;
                        case 1:
                            var l = n.stateNode;
                            if (n.flags & 4 && !Ot)
                                if (o === null)
                                    l.componentDidMount();
                                else {
                                    var c = n.elementType === n.type ? o.memoizedProps : mr(n.type, o.memoizedProps);
                                    l.componentDidUpdate(c, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = n.updateQueue;
                            p !== null && xp(n, p, l);
                            break;
                        case 3:
                            var y = n.updateQueue;
                            if (y !== null) {
                                if (o = null,
                                n.child !== null)
                                    switch (n.child.tag) {
                                    case 5:
                                        o = n.child.stateNode;
                                        break;
                                    case 1:
                                        o = n.child.stateNode
                                    }
                                xp(n, y, o)
                            }
                            break;
                        case 5:
                            var _ = n.stateNode;
                            if (o === null && n.flags & 4) {
                                o = _;
                                var E = n.memoizedProps;
                                switch (n.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    E.autoFocus && o.focus();
                                    break;
                                case "img":
                                    E.src && (o.src = E.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (n.memoizedState === null) {
                                var D = n.alternate;
                                if (D !== null) {
                                    var Z = D.memoizedState;
                                    if (Z !== null) {
                                        var K = Z.dehydrated;
                                        K !== null && Si(K)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                        }
                    Ot || n.flags & 512 && ec(n)
                } catch (H) {
                    ut(n, n.return, H)
                }
            }
            if (n === t) {
                pe = null;
                break
            }
            if (o = n.sibling,
            o !== null) {
                o.return = n.return,
                pe = o;
                break
            }
            pe = n.return
        }
    }
    function xh(t) {
        for (; pe !== null; ) {
            var n = pe;
            if (n === t) {
                pe = null;
                break
            }
            var o = n.sibling;
            if (o !== null) {
                o.return = n.return,
                pe = o;
                break
            }
            pe = n.return
        }
    }
    function wh(t) {
        for (; pe !== null; ) {
            var n = pe;
            try {
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var o = n.return;
                    try {
                        _a(4, n)
                    } catch (E) {
                        ut(n, o, E)
                    }
                    break;
                case 1:
                    var l = n.stateNode;
                    if (typeof l.componentDidMount == "function") {
                        var c = n.return;
                        try {
                            l.componentDidMount()
                        } catch (E) {
                            ut(n, c, E)
                        }
                    }
                    var p = n.return;
                    try {
                        ec(n)
                    } catch (E) {
                        ut(n, p, E)
                    }
                    break;
                case 5:
                    var y = n.return;
                    try {
                        ec(n)
                    } catch (E) {
                        ut(n, y, E)
                    }
                }
            } catch (E) {
                ut(n, n.return, E)
            }
            if (n === t) {
                pe = null;
                break
            }
            var _ = n.sibling;
            if (_ !== null) {
                _.return = n.return,
                pe = _;
                break
            }
            pe = n.return
        }
    }
    var Aw = Math.ceil
      , Sa = U.ReactCurrentDispatcher
      , nc = U.ReactCurrentOwner
      , ar = U.ReactCurrentBatchConfig
      , Be = 0
      , St = null
      , mt = null
      , Tt = 0
      , Gt = 0
      , Bs = vn(0)
      , xt = 0
      , Wi = null
      , Jn = 0
      , Ca = 0
      , sc = 0
      , qi = null
      , Ut = null
      , ic = 0
      , Us = 1 / 0
      , tn = null
      , ka = !1
      , oc = null
      , Cn = null
      , Ea = !1
      , kn = null
      , Ta = 0
      , Zi = 0
      , ac = null
      , Pa = -1
      , Na = 0;
    function Ft() {
        return (Be & 6) !== 0 ? dt() : Pa !== -1 ? Pa : Pa = dt()
    }
    function En(t) {
        return (t.mode & 1) === 0 ? 1 : (Be & 2) !== 0 && Tt !== 0 ? Tt & -Tt : hw.transition !== null ? (Na === 0 && (Na = pf()),
        Na) : (t = qe,
        t !== 0 || (t = window.event,
        t = t === void 0 ? 16 : _f(t.type)),
        t)
    }
    function vr(t, n, o, l) {
        if (50 < Zi)
            throw Zi = 0,
            ac = null,
            Error(s(185));
        vi(t, o, l),
        ((Be & 2) === 0 || t !== St) && (t === St && ((Be & 2) === 0 && (Ca |= o),
        xt === 4 && Tn(t, Tt)),
        $t(t, l),
        o === 1 && Be === 0 && (n.mode & 1) === 0 && (Us = dt() + 500,
        na && wn()))
    }
    function $t(t, n) {
        var o = t.callbackNode;
        hx(t, n);
        var l = Lo(t, t === St ? Tt : 0);
        if (l === 0)
            o !== null && cf(o),
            t.callbackNode = null,
            t.callbackPriority = 0;
        else if (n = l & -l,
        t.callbackPriority !== n) {
            if (o != null && cf(o),
            n === 1)
                t.tag === 0 ? pw(_h.bind(null, t)) : ap(_h.bind(null, t)),
                uw(function() {
                    (Be & 6) === 0 && wn()
                }),
                o = null;
            else {
                switch (hf(l)) {
                case 1:
                    o = zl;
                    break;
                case 4:
                    o = df;
                    break;
                case 16:
                    o = jo;
                    break;
                case 536870912:
                    o = ff;
                    break;
                default:
                    o = jo
                }
                o = Rh(o, bh.bind(null, t))
            }
            t.callbackPriority = n,
            t.callbackNode = o
        }
    }
    function bh(t, n) {
        if (Pa = -1,
        Na = 0,
        (Be & 6) !== 0)
            throw Error(s(327));
        var o = t.callbackNode;
        if ($s() && t.callbackNode !== o)
            return null;
        var l = Lo(t, t === St ? Tt : 0);
        if (l === 0)
            return null;
        if ((l & 30) !== 0 || (l & t.expiredLanes) !== 0 || n)
            n = Ra(t, l);
        else {
            n = l;
            var c = Be;
            Be |= 2;
            var p = Ch();
            (St !== t || Tt !== n) && (tn = null,
            Us = dt() + 500,
            ts(t, n));
            do
                try {
                    jw();
                    break
                } catch (_) {
                    Sh(t, _)
                }
            while (!0);
            ku(),
            Sa.current = p,
            Be = c,
            mt !== null ? n = 0 : (St = null,
            Tt = 0,
            n = xt)
        }
        if (n !== 0) {
            if (n === 2 && (c = Bl(t),
            c !== 0 && (l = c,
            n = lc(t, c))),
            n === 1)
                throw o = Wi,
                ts(t, 0),
                Tn(t, l),
                $t(t, dt()),
                o;
            if (n === 6)
                Tn(t, l);
            else {
                if (c = t.current.alternate,
                (l & 30) === 0 && !Ow(c) && (n = Ra(t, l),
                n === 2 && (p = Bl(t),
                p !== 0 && (l = p,
                n = lc(t, p))),
                n === 1))
                    throw o = Wi,
                    ts(t, 0),
                    Tn(t, l),
                    $t(t, dt()),
                    o;
                switch (t.finishedWork = c,
                t.finishedLanes = l,
                n) {
                case 0:
                case 1:
                    throw Error(s(345));
                case 2:
                    rs(t, Ut, tn);
                    break;
                case 3:
                    if (Tn(t, l),
                    (l & 130023424) === l && (n = ic + 500 - dt(),
                    10 < n)) {
                        if (Lo(t, 0) !== 0)
                            break;
                        if (c = t.suspendedLanes,
                        (c & l) !== l) {
                            Ft(),
                            t.pingedLanes |= t.suspendedLanes & c;
                            break
                        }
                        t.timeoutHandle = hu(rs.bind(null, t, Ut, tn), n);
                        break
                    }
                    rs(t, Ut, tn);
                    break;
                case 4:
                    if (Tn(t, l),
                    (l & 4194240) === l)
                        break;
                    for (n = t.eventTimes,
                    c = -1; 0 < l; ) {
                        var y = 31 - fr(l);
                        p = 1 << y,
                        y = n[y],
                        y > c && (c = y),
                        l &= ~p
                    }
                    if (l = c,
                    l = dt() - l,
                    l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Aw(l / 1960)) - l,
                    10 < l) {
                        t.timeoutHandle = hu(rs.bind(null, t, Ut, tn), l);
                        break
                    }
                    rs(t, Ut, tn);
                    break;
                case 5:
                    rs(t, Ut, tn);
                    break;
                default:
                    throw Error(s(329))
                }
            }
        }
        return $t(t, dt()),
        t.callbackNode === o ? bh.bind(null, t) : null
    }
    function lc(t, n) {
        var o = qi;
        return t.current.memoizedState.isDehydrated && (ts(t, n).flags |= 256),
        t = Ra(t, n),
        t !== 2 && (n = Ut,
        Ut = o,
        n !== null && uc(n)),
        t
    }
    function uc(t) {
        Ut === null ? Ut = t : Ut.push.apply(Ut, t)
    }
    function Ow(t) {
        for (var n = t; ; ) {
            if (n.flags & 16384) {
                var o = n.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var l = 0; l < o.length; l++) {
                        var c = o[l]
                          , p = c.getSnapshot;
                        c = c.value;
                        try {
                            if (!pr(p(), c))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = n.child,
            n.subtreeFlags & 16384 && o !== null)
                o.return = n,
                n = o;
            else {
                if (n === t)
                    break;
                for (; n.sibling === null; ) {
                    if (n.return === null || n.return === t)
                        return !0;
                    n = n.return
                }
                n.sibling.return = n.return,
                n = n.sibling
            }
        }
        return !0
    }
    function Tn(t, n) {
        for (n &= ~sc,
        n &= ~Ca,
        t.suspendedLanes |= n,
        t.pingedLanes &= ~n,
        t = t.expirationTimes; 0 < n; ) {
            var o = 31 - fr(n)
              , l = 1 << o;
            t[o] = -1,
            n &= ~l
        }
    }
    function _h(t) {
        if ((Be & 6) !== 0)
            throw Error(s(327));
        $s();
        var n = Lo(t, 0);
        if ((n & 1) === 0)
            return $t(t, dt()),
            null;
        var o = Ra(t, n);
        if (t.tag !== 0 && o === 2) {
            var l = Bl(t);
            l !== 0 && (n = l,
            o = lc(t, l))
        }
        if (o === 1)
            throw o = Wi,
            ts(t, 0),
            Tn(t, n),
            $t(t, dt()),
            o;
        if (o === 6)
            throw Error(s(345));
        return t.finishedWork = t.current.alternate,
        t.finishedLanes = n,
        rs(t, Ut, tn),
        $t(t, dt()),
        null
    }
    function cc(t, n) {
        var o = Be;
        Be |= 1;
        try {
            return t(n)
        } finally {
            Be = o,
            Be === 0 && (Us = dt() + 500,
            na && wn())
        }
    }
    function es(t) {
        kn !== null && kn.tag === 0 && (Be & 6) === 0 && $s();
        var n = Be;
        Be |= 1;
        var o = ar.transition
          , l = qe;
        try {
            if (ar.transition = null,
            qe = 1,
            t)
                return t()
        } finally {
            qe = l,
            ar.transition = o,
            Be = n,
            (Be & 6) === 0 && wn()
        }
    }
    function dc() {
        Gt = Bs.current,
        Ye(Bs)
    }
    function ts(t, n) {
        t.finishedWork = null,
        t.finishedLanes = 0;
        var o = t.timeoutHandle;
        if (o !== -1 && (t.timeoutHandle = -1,
        lw(o)),
        mt !== null)
            for (o = mt.return; o !== null; ) {
                var l = o;
                switch (wu(l),
                l.tag) {
                case 1:
                    l = l.type.childContextTypes,
                    l != null && ta();
                    break;
                case 3:
                    Ls(),
                    Ye(Vt),
                    Ye(Nt),
                    Iu();
                    break;
                case 5:
                    Au(l);
                    break;
                case 4:
                    Ls();
                    break;
                case 13:
                    Ye(rt);
                    break;
                case 19:
                    Ye(rt);
                    break;
                case 10:
                    Eu(l.type._context);
                    break;
                case 22:
                case 23:
                    dc()
                }
                o = o.return
            }
        if (St = t,
        mt = t = Pn(t.current, null),
        Tt = Gt = n,
        xt = 0,
        Wi = null,
        sc = Ca = Jn = 0,
        Ut = qi = null,
        Gn !== null) {
            for (n = 0; n < Gn.length; n++)
                if (o = Gn[n],
                l = o.interleaved,
                l !== null) {
                    o.interleaved = null;
                    var c = l.next
                      , p = o.pending;
                    if (p !== null) {
                        var y = p.next;
                        p.next = c,
                        l.next = y
                    }
                    o.pending = l
                }
            Gn = null
        }
        return t
    }
    function Sh(t, n) {
        do {
            var o = mt;
            try {
                if (ku(),
                pa.current = ya,
                ha) {
                    for (var l = nt.memoizedState; l !== null; ) {
                        var c = l.queue;
                        c !== null && (c.pending = null),
                        l = l.next
                    }
                    ha = !1
                }
                if (Yn = 0,
                _t = vt = nt = null,
                zi = !1,
                Bi = 0,
                nc.current = null,
                o === null || o.return === null) {
                    xt = 1,
                    Wi = n,
                    mt = null;
                    break
                }
                e: {
                    var p = t
                      , y = o.return
                      , _ = o
                      , E = n;
                    if (n = Tt,
                    _.flags |= 32768,
                    E !== null && typeof E == "object" && typeof E.then == "function") {
                        var D = E
                          , Z = _
                          , K = Z.tag;
                        if ((Z.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
                            var H = Z.alternate;
                            H ? (Z.updateQueue = H.updateQueue,
                            Z.memoizedState = H.memoizedState,
                            Z.lanes = H.lanes) : (Z.updateQueue = null,
                            Z.memoizedState = null)
                        }
                        var ue = Zp(y);
                        if (ue !== null) {
                            ue.flags &= -257,
                            Kp(ue, y, _, p, n),
                            ue.mode & 1 && qp(p, D, n),
                            n = ue,
                            E = D;
                            var he = n.updateQueue;
                            if (he === null) {
                                var ge = new Set;
                                ge.add(E),
                                n.updateQueue = ge
                            } else
                                he.add(E);
                            break e
                        } else {
                            if ((n & 1) === 0) {
                                qp(p, D, n),
                                fc();
                                break e
                            }
                            E = Error(s(426))
                        }
                    } else if (tt && _.mode & 1) {
                        var ft = Zp(y);
                        if (ft !== null) {
                            (ft.flags & 65536) === 0 && (ft.flags |= 256),
                            Kp(ft, y, _, p, n),
                            Su(Vs(E, _));
                            break e
                        }
                    }
                    p = E = Vs(E, _),
                    xt !== 4 && (xt = 2),
                    qi === null ? qi = [p] : qi.push(p),
                    p = y;
                    do {
                        switch (p.tag) {
                        case 3:
                            p.flags |= 65536,
                            n &= -n,
                            p.lanes |= n;
                            var O = Hp(p, E, n);
                            vp(p, O);
                            break e;
                        case 1:
                            _ = E;
                            var P = p.type
                              , I = p.stateNode;
                            if ((p.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Cn === null || !Cn.has(I)))) {
                                p.flags |= 65536,
                                n &= -n,
                                p.lanes |= n;
                                var ee = Wp(p, _, n);
                                vp(p, ee);
                                break e
                            }
                        }
                        p = p.return
                    } while (p !== null)
                }
                Eh(o)
            } catch (ve) {
                n = ve,
                mt === o && o !== null && (mt = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function Ch() {
        var t = Sa.current;
        return Sa.current = ya,
        t === null ? ya : t
    }
    function fc() {
        (xt === 0 || xt === 3 || xt === 2) && (xt = 4),
        St === null || (Jn & 268435455) === 0 && (Ca & 268435455) === 0 || Tn(St, Tt)
    }
    function Ra(t, n) {
        var o = Be;
        Be |= 2;
        var l = Ch();
        (St !== t || Tt !== n) && (tn = null,
        ts(t, n));
        do
            try {
                Iw();
                break
            } catch (c) {
                Sh(t, c)
            }
        while (!0);
        if (ku(),
        Be = o,
        Sa.current = l,
        mt !== null)
            throw Error(s(261));
        return St = null,
        Tt = 0,
        xt
    }
    function Iw() {
        for (; mt !== null; )
            kh(mt)
    }
    function jw() {
        for (; mt !== null && !ix(); )
            kh(mt)
    }
    function kh(t) {
        var n = Nh(t.alternate, t, Gt);
        t.memoizedProps = t.pendingProps,
        n === null ? Eh(t) : mt = n,
        nc.current = null
    }
    function Eh(t) {
        var n = t;
        do {
            var o = n.alternate;
            if (t = n.return,
            (n.flags & 32768) === 0) {
                if (o = Ew(o, n, Gt),
                o !== null) {
                    mt = o;
                    return
                }
            } else {
                if (o = Tw(o, n),
                o !== null) {
                    o.flags &= 32767,
                    mt = o;
                    return
                }
                if (t !== null)
                    t.flags |= 32768,
                    t.subtreeFlags = 0,
                    t.deletions = null;
                else {
                    xt = 6,
                    mt = null;
                    return
                }
            }
            if (n = n.sibling,
            n !== null) {
                mt = n;
                return
            }
            mt = n = t
        } while (n !== null);
        xt === 0 && (xt = 5)
    }
    function rs(t, n, o) {
        var l = qe
          , c = ar.transition;
        try {
            ar.transition = null,
            qe = 1,
            Dw(t, n, o, l)
        } finally {
            ar.transition = c,
            qe = l
        }
        return null
    }
    function Dw(t, n, o, l) {
        do
            $s();
        while (kn !== null);
        if ((Be & 6) !== 0)
            throw Error(s(327));
        o = t.finishedWork;
        var c = t.finishedLanes;
        if (o === null)
            return null;
        if (t.finishedWork = null,
        t.finishedLanes = 0,
        o === t.current)
            throw Error(s(177));
        t.callbackNode = null,
        t.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (mx(t, p),
        t === St && (mt = St = null,
        Tt = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Ea || (Ea = !0,
        Rh(jo, function() {
            return $s(),
            null
        })),
        p = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || p) {
            p = ar.transition,
            ar.transition = null;
            var y = qe;
            qe = 1;
            var _ = Be;
            Be |= 4,
            nc.current = null,
            Nw(t, o),
            gh(o, t),
            tw(fu),
            Bo = !!du,
            fu = du = null,
            t.current = o,
            Rw(o),
            ox(),
            Be = _,
            qe = y,
            ar.transition = p
        } else
            t.current = o;
        if (Ea && (Ea = !1,
        kn = t,
        Ta = c),
        p = t.pendingLanes,
        p === 0 && (Cn = null),
        ux(o.stateNode),
        $t(t, dt()),
        n !== null)
            for (l = t.onRecoverableError,
            o = 0; o < n.length; o++)
                c = n[o],
                l(c.value, {
                    componentStack: c.stack,
                    digest: c.digest
                });
        if (ka)
            throw ka = !1,
            t = oc,
            oc = null,
            t;
        return (Ta & 1) !== 0 && t.tag !== 0 && $s(),
        p = t.pendingLanes,
        (p & 1) !== 0 ? t === ac ? Zi++ : (Zi = 0,
        ac = t) : Zi = 0,
        wn(),
        null
    }
    function $s() {
        if (kn !== null) {
            var t = hf(Ta)
              , n = ar.transition
              , o = qe;
            try {
                if (ar.transition = null,
                qe = 16 > t ? 16 : t,
                kn === null)
                    var l = !1;
                else {
                    if (t = kn,
                    kn = null,
                    Ta = 0,
                    (Be & 6) !== 0)
                        throw Error(s(331));
                    var c = Be;
                    for (Be |= 4,
                    pe = t.current; pe !== null; ) {
                        var p = pe
                          , y = p.child;
                        if ((pe.flags & 16) !== 0) {
                            var _ = p.deletions;
                            if (_ !== null) {
                                for (var E = 0; E < _.length; E++) {
                                    var D = _[E];
                                    for (pe = D; pe !== null; ) {
                                        var Z = pe;
                                        switch (Z.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hi(8, Z, p)
                                        }
                                        var K = Z.child;
                                        if (K !== null)
                                            K.return = Z,
                                            pe = K;
                                        else
                                            for (; pe !== null; ) {
                                                Z = pe;
                                                var H = Z.sibling
                                                  , ue = Z.return;
                                                if (dh(Z),
                                                Z === D) {
                                                    pe = null;
                                                    break
                                                }
                                                if (H !== null) {
                                                    H.return = ue,
                                                    pe = H;
                                                    break
                                                }
                                                pe = ue
                                            }
                                    }
                                }
                                var he = p.alternate;
                                if (he !== null) {
                                    var ge = he.child;
                                    if (ge !== null) {
                                        he.child = null;
                                        do {
                                            var ft = ge.sibling;
                                            ge.sibling = null,
                                            ge = ft
                                        } while (ge !== null)
                                    }
                                }
                                pe = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && y !== null)
                            y.return = p,
                            pe = y;
                        else
                            e: for (; pe !== null; ) {
                                if (p = pe,
                                (p.flags & 2048) !== 0)
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hi(9, p, p.return)
                                    }
                                var O = p.sibling;
                                if (O !== null) {
                                    O.return = p.return,
                                    pe = O;
                                    break e
                                }
                                pe = p.return
                            }
                    }
                    var P = t.current;
                    for (pe = P; pe !== null; ) {
                        y = pe;
                        var I = y.child;
                        if ((y.subtreeFlags & 2064) !== 0 && I !== null)
                            I.return = y,
                            pe = I;
                        else
                            e: for (y = P; pe !== null; ) {
                                if (_ = pe,
                                (_.flags & 2048) !== 0)
                                    try {
                                        switch (_.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            _a(9, _)
                                        }
                                    } catch (ve) {
                                        ut(_, _.return, ve)
                                    }
                                if (_ === y) {
                                    pe = null;
                                    break e
                                }
                                var ee = _.sibling;
                                if (ee !== null) {
                                    ee.return = _.return,
                                    pe = ee;
                                    break e
                                }
                                pe = _.return
                            }
                    }
                    if (Be = c,
                    wn(),
                    jr && typeof jr.onPostCommitFiberRoot == "function")
                        try {
                            jr.onPostCommitFiberRoot(Do, t)
                        } catch {}
                    l = !0
                }
                return l
            } finally {
                qe = o,
                ar.transition = n
            }
        }
        return !1
    }
    function Th(t, n, o) {
        n = Vs(o, n),
        n = Hp(t, n, 1),
        t = _n(t, n, 1),
        n = Ft(),
        t !== null && (vi(t, 1, n),
        $t(t, n))
    }
    function ut(t, n, o) {
        if (t.tag === 3)
            Th(t, t, o);
        else
            for (; n !== null; ) {
                if (n.tag === 3) {
                    Th(n, t, o);
                    break
                } else if (n.tag === 1) {
                    var l = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Cn === null || !Cn.has(l))) {
                        t = Vs(o, t),
                        t = Wp(n, t, 1),
                        n = _n(n, t, 1),
                        t = Ft(),
                        n !== null && (vi(n, 1, t),
                        $t(n, t));
                        break
                    }
                }
                n = n.return
            }
    }
    function Fw(t, n, o) {
        var l = t.pingCache;
        l !== null && l.delete(n),
        n = Ft(),
        t.pingedLanes |= t.suspendedLanes & o,
        St === t && (Tt & o) === o && (xt === 4 || xt === 3 && (Tt & 130023424) === Tt && 500 > dt() - ic ? ts(t, 0) : sc |= o),
        $t(t, n)
    }
    function Ph(t, n) {
        n === 0 && ((t.mode & 1) === 0 ? n = 1 : (n = Mo,
        Mo <<= 1,
        (Mo & 130023424) === 0 && (Mo = 4194304)));
        var o = Ft();
        t = Yr(t, n),
        t !== null && (vi(t, n, o),
        $t(t, o))
    }
    function Mw(t) {
        var n = t.memoizedState
          , o = 0;
        n !== null && (o = n.retryLane),
        Ph(t, o)
    }
    function Lw(t, n) {
        var o = 0;
        switch (t.tag) {
        case 13:
            var l = t.stateNode
              , c = t.memoizedState;
            c !== null && (o = c.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        default:
            throw Error(s(314))
        }
        l !== null && l.delete(n),
        Ph(t, o)
    }
    var Nh;
    Nh = function(t, n, o) {
        if (t !== null)
            if (t.memoizedProps !== n.pendingProps || Vt.current)
                Bt = !0;
            else {
                if ((t.lanes & o) === 0 && (n.flags & 128) === 0)
                    return Bt = !1,
                    kw(t, n, o);
                Bt = (t.flags & 131072) !== 0
            }
        else
            Bt = !1,
            tt && (n.flags & 1048576) !== 0 && lp(n, ia, n.index);
        switch (n.lanes = 0,
        n.tag) {
        case 2:
            var l = n.type;
            wa(t, n),
            t = n.pendingProps;
            var c = As(n, Nt.current);
            Ms(n, o),
            c = Fu(null, n, l, t, c, o);
            var p = Mu();
            return n.flags |= 1,
            typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (n.tag = 1,
            n.memoizedState = null,
            n.updateQueue = null,
            zt(l) ? (p = !0,
            ra(n)) : p = !1,
            n.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            Nu(n),
            c.updater = va,
            n.stateNode = c,
            c._reactInternals = n,
            $u(n, l, t, o),
            n = qu(null, n, l, !0, p, o)) : (n.tag = 0,
            tt && p && xu(n),
            Dt(null, n, c, o),
            n = n.child),
            n;
        case 16:
            l = n.elementType;
            e: {
                switch (wa(t, n),
                t = n.pendingProps,
                c = l._init,
                l = c(l._payload),
                n.type = l,
                c = n.tag = zw(l),
                t = mr(l, t),
                c) {
                case 0:
                    n = Wu(null, n, l, t, o);
                    break e;
                case 1:
                    n = th(null, n, l, t, o);
                    break e;
                case 11:
                    n = Gp(null, n, l, t, o);
                    break e;
                case 14:
                    n = Xp(null, n, l, mr(l.type, t), o);
                    break e
                }
                throw Error(s(306, l, ""))
            }
            return n;
        case 0:
            return l = n.type,
            c = n.pendingProps,
            c = n.elementType === l ? c : mr(l, c),
            Wu(t, n, l, c, o);
        case 1:
            return l = n.type,
            c = n.pendingProps,
            c = n.elementType === l ? c : mr(l, c),
            th(t, n, l, c, o);
        case 3:
            e: {
                if (rh(n),
                t === null)
                    throw Error(s(387));
                l = n.pendingProps,
                p = n.memoizedState,
                c = p.element,
                yp(t, n),
                da(n, l, null, o);
                var y = n.memoizedState;
                if (l = y.element,
                p.isDehydrated)
                    if (p = {
                        element: l,
                        isDehydrated: !1,
                        cache: y.cache,
                        pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                        transitions: y.transitions
                    },
                    n.updateQueue.baseState = p,
                    n.memoizedState = p,
                    n.flags & 256) {
                        c = Vs(Error(s(423)), n),
                        n = nh(t, n, l, o, c);
                        break e
                    } else if (l !== c) {
                        c = Vs(Error(s(424)), n),
                        n = nh(t, n, l, o, c);
                        break e
                    } else
                        for (Kt = yn(n.stateNode.containerInfo.firstChild),
                        Zt = n,
                        tt = !0,
                        hr = null,
                        o = mp(n, null, l, o),
                        n.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (js(),
                    l === c) {
                        n = en(t, n, o);
                        break e
                    }
                    Dt(t, n, l, o)
                }
                n = n.child
            }
            return n;
        case 5:
            return wp(n),
            t === null && _u(n),
            l = n.type,
            c = n.pendingProps,
            p = t !== null ? t.memoizedProps : null,
            y = c.children,
            pu(l, c) ? y = null : p !== null && pu(l, p) && (n.flags |= 32),
            eh(t, n),
            Dt(t, n, y, o),
            n.child;
        case 6:
            return t === null && _u(n),
            null;
        case 13:
            return sh(t, n, o);
        case 4:
            return Ru(n, n.stateNode.containerInfo),
            l = n.pendingProps,
            t === null ? n.child = Ds(n, null, l, o) : Dt(t, n, l, o),
            n.child;
        case 11:
            return l = n.type,
            c = n.pendingProps,
            c = n.elementType === l ? c : mr(l, c),
            Gp(t, n, l, c, o);
        case 7:
            return Dt(t, n, n.pendingProps, o),
            n.child;
        case 8:
            return Dt(t, n, n.pendingProps.children, o),
            n.child;
        case 12:
            return Dt(t, n, n.pendingProps.children, o),
            n.child;
        case 10:
            e: {
                if (l = n.type._context,
                c = n.pendingProps,
                p = n.memoizedProps,
                y = c.value,
                Ge(la, l._currentValue),
                l._currentValue = y,
                p !== null)
                    if (pr(p.value, y)) {
                        if (p.children === c.children && !Vt.current) {
                            n = en(t, n, o);
                            break e
                        }
                    } else
                        for (p = n.child,
                        p !== null && (p.return = n); p !== null; ) {
                            var _ = p.dependencies;
                            if (_ !== null) {
                                y = p.child;
                                for (var E = _.firstContext; E !== null; ) {
                                    if (E.context === l) {
                                        if (p.tag === 1) {
                                            E = Jr(-1, o & -o),
                                            E.tag = 2;
                                            var D = p.updateQueue;
                                            if (D !== null) {
                                                D = D.shared;
                                                var Z = D.pending;
                                                Z === null ? E.next = E : (E.next = Z.next,
                                                Z.next = E),
                                                D.pending = E
                                            }
                                        }
                                        p.lanes |= o,
                                        E = p.alternate,
                                        E !== null && (E.lanes |= o),
                                        Tu(p.return, o, n),
                                        _.lanes |= o;
                                        break
                                    }
                                    E = E.next
                                }
                            } else if (p.tag === 10)
                                y = p.type === n.type ? null : p.child;
                            else if (p.tag === 18) {
                                if (y = p.return,
                                y === null)
                                    throw Error(s(341));
                                y.lanes |= o,
                                _ = y.alternate,
                                _ !== null && (_.lanes |= o),
                                Tu(y, o, n),
                                y = p.sibling
                            } else
                                y = p.child;
                            if (y !== null)
                                y.return = p;
                            else
                                for (y = p; y !== null; ) {
                                    if (y === n) {
                                        y = null;
                                        break
                                    }
                                    if (p = y.sibling,
                                    p !== null) {
                                        p.return = y.return,
                                        y = p;
                                        break
                                    }
                                    y = y.return
                                }
                            p = y
                        }
                Dt(t, n, c.children, o),
                n = n.child
            }
            return n;
        case 9:
            return c = n.type,
            l = n.pendingProps.children,
            Ms(n, o),
            c = ir(c),
            l = l(c),
            n.flags |= 1,
            Dt(t, n, l, o),
            n.child;
        case 14:
            return l = n.type,
            c = mr(l, n.pendingProps),
            c = mr(l.type, c),
            Xp(t, n, l, c, o);
        case 15:
            return Yp(t, n, n.type, n.pendingProps, o);
        case 17:
            return l = n.type,
            c = n.pendingProps,
            c = n.elementType === l ? c : mr(l, c),
            wa(t, n),
            n.tag = 1,
            zt(l) ? (t = !0,
            ra(n)) : t = !1,
            Ms(n, o),
            $p(n, l, c),
            $u(n, l, c, o),
            qu(null, n, l, !0, t, o);
        case 19:
            return oh(t, n, o);
        case 22:
            return Jp(t, n, o)
        }
        throw Error(s(156, n.tag))
    }
    ;
    function Rh(t, n) {
        return uf(t, n)
    }
    function Vw(t, n, o, l) {
        this.tag = t,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = n,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function lr(t, n, o, l) {
        return new Vw(t,n,o,l)
    }
    function pc(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function zw(t) {
        if (typeof t == "function")
            return pc(t) ? 1 : 0;
        if (t != null) {
            if (t = t.$$typeof,
            t === J)
                return 11;
            if (t === be)
                return 14
        }
        return 2
    }
    function Pn(t, n) {
        var o = t.alternate;
        return o === null ? (o = lr(t.tag, n, t.key, t.mode),
        o.elementType = t.elementType,
        o.type = t.type,
        o.stateNode = t.stateNode,
        o.alternate = t,
        t.alternate = o) : (o.pendingProps = n,
        o.type = t.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = t.flags & 14680064,
        o.childLanes = t.childLanes,
        o.lanes = t.lanes,
        o.child = t.child,
        o.memoizedProps = t.memoizedProps,
        o.memoizedState = t.memoizedState,
        o.updateQueue = t.updateQueue,
        n = t.dependencies,
        o.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        },
        o.sibling = t.sibling,
        o.index = t.index,
        o.ref = t.ref,
        o
    }
    function Aa(t, n, o, l, c, p) {
        var y = 2;
        if (l = t,
        typeof t == "function")
            pc(t) && (y = 1);
        else if (typeof t == "string")
            y = 5;
        else
            e: switch (t) {
            case M:
                return ns(o.children, c, p, n);
            case q:
                y = 8,
                c |= 8;
                break;
            case ie:
                return t = lr(12, o, n, c | 2),
                t.elementType = ie,
                t.lanes = p,
                t;
            case oe:
                return t = lr(13, o, n, c),
                t.elementType = oe,
                t.lanes = p,
                t;
            case G:
                return t = lr(19, o, n, c),
                t.elementType = G,
                t.lanes = p,
                t;
            case ye:
                return Oa(o, c, p, n);
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case me:
                        y = 10;
                        break e;
                    case _e:
                        y = 9;
                        break e;
                    case J:
                        y = 11;
                        break e;
                    case be:
                        y = 14;
                        break e;
                    case ce:
                        y = 16,
                        l = null;
                        break e
                    }
                throw Error(s(130, t == null ? t : typeof t, ""))
            }
        return n = lr(y, o, n, c),
        n.elementType = t,
        n.type = l,
        n.lanes = p,
        n
    }
    function ns(t, n, o, l) {
        return t = lr(7, t, l, n),
        t.lanes = o,
        t
    }
    function Oa(t, n, o, l) {
        return t = lr(22, t, l, n),
        t.elementType = ye,
        t.lanes = o,
        t.stateNode = {
            isHidden: !1
        },
        t
    }
    function hc(t, n, o) {
        return t = lr(6, t, null, n),
        t.lanes = o,
        t
    }
    function mc(t, n, o) {
        return n = lr(4, t.children !== null ? t.children : [], t.key, n),
        n.lanes = o,
        n.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        n
    }
    function Bw(t, n, o, l, c) {
        this.tag = n,
        this.containerInfo = t,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Ul(0),
        this.expirationTimes = Ul(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ul(0),
        this.identifierPrefix = l,
        this.onRecoverableError = c,
        this.mutableSourceEagerHydrationData = null
    }
    function gc(t, n, o, l, c, p, y, _, E) {
        return t = new Bw(t,n,o,_,E),
        n === 1 ? (n = 1,
        p === !0 && (n |= 8)) : n = 0,
        p = lr(3, null, null, n),
        t.current = p,
        p.stateNode = t,
        p.memoizedState = {
            element: l,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Nu(p),
        t
    }
    function Uw(t, n, o) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: L,
            key: l == null ? null : "" + l,
            children: t,
            containerInfo: n,
            implementation: o
        }
    }
    function Ah(t) {
        if (!t)
            return xn;
        t = t._reactInternals;
        e: {
            if (Hn(t) !== t || t.tag !== 1)
                throw Error(s(170));
            var n = t;
            do {
                switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (zt(n.type)) {
                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                n = n.return
            } while (n !== null);
            throw Error(s(171))
        }
        if (t.tag === 1) {
            var o = t.type;
            if (zt(o))
                return ip(t, o, n)
        }
        return n
    }
    function Oh(t, n, o, l, c, p, y, _, E) {
        return t = gc(o, l, !0, t, c, p, y, _, E),
        t.context = Ah(null),
        o = t.current,
        l = Ft(),
        c = En(o),
        p = Jr(l, c),
        p.callback = n ?? null,
        _n(o, p, c),
        t.current.lanes = c,
        vi(t, c, l),
        $t(t, l),
        t
    }
    function Ia(t, n, o, l) {
        var c = n.current
          , p = Ft()
          , y = En(c);
        return o = Ah(o),
        n.context === null ? n.context = o : n.pendingContext = o,
        n = Jr(p, y),
        n.payload = {
            element: t
        },
        l = l === void 0 ? null : l,
        l !== null && (n.callback = l),
        t = _n(c, n, y),
        t !== null && (vr(t, c, y, p),
        ca(t, c, y)),
        y
    }
    function ja(t) {
        return t = t.current,
        t.child ? (t.child.tag === 5,
        t.child.stateNode) : null
    }
    function Ih(t, n) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var o = t.retryLane;
            t.retryLane = o !== 0 && o < n ? o : n
        }
    }
    function yc(t, n) {
        Ih(t, n),
        (t = t.alternate) && Ih(t, n)
    }
    function $w() {
        return null
    }
    var jh = typeof reportError == "function" ? reportError : function(t) {
        console.error(t)
    }
    ;
    function vc(t) {
        this._internalRoot = t
    }
    Da.prototype.render = vc.prototype.render = function(t) {
        var n = this._internalRoot;
        if (n === null)
            throw Error(s(409));
        Ia(t, n, null, null)
    }
    ,
    Da.prototype.unmount = vc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var n = t.containerInfo;
            es(function() {
                Ia(null, t, null, null)
            }),
            n[Zr] = null
        }
    }
    ;
    function Da(t) {
        this._internalRoot = t
    }
    Da.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var n = yf();
            t = {
                blockedOn: null,
                target: t,
                priority: n
            };
            for (var o = 0; o < hn.length && n !== 0 && n < hn[o].priority; o++)
                ;
            hn.splice(o, 0, t),
            o === 0 && wf(t)
        }
    }
    ;
    function xc(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function Fa(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    }
    function Dh() {}
    function Qw(t, n, o, l, c) {
        if (c) {
            if (typeof l == "function") {
                var p = l;
                l = function() {
                    var D = ja(y);
                    p.call(D)
                }
            }
            var y = Oh(n, l, t, 0, null, !1, !1, "", Dh);
            return t._reactRootContainer = y,
            t[Zr] = y.current,
            Oi(t.nodeType === 8 ? t.parentNode : t),
            es(),
            y
        }
        for (; c = t.lastChild; )
            t.removeChild(c);
        if (typeof l == "function") {
            var _ = l;
            l = function() {
                var D = ja(E);
                _.call(D)
            }
        }
        var E = gc(t, 0, !1, null, null, !1, !1, "", Dh);
        return t._reactRootContainer = E,
        t[Zr] = E.current,
        Oi(t.nodeType === 8 ? t.parentNode : t),
        es(function() {
            Ia(n, E, o, l)
        }),
        E
    }
    function Ma(t, n, o, l, c) {
        var p = o._reactRootContainer;
        if (p) {
            var y = p;
            if (typeof c == "function") {
                var _ = c;
                c = function() {
                    var E = ja(y);
                    _.call(E)
                }
            }
            Ia(n, y, t, c)
        } else
            y = Qw(o, n, t, c, l);
        return ja(y)
    }
    mf = function(t) {
        switch (t.tag) {
        case 3:
            var n = t.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var o = yi(n.pendingLanes);
                o !== 0 && ($l(n, o | 1),
                $t(n, dt()),
                (Be & 6) === 0 && (Us = dt() + 500,
                wn()))
            }
            break;
        case 13:
            es(function() {
                var l = Yr(t, 1);
                if (l !== null) {
                    var c = Ft();
                    vr(l, t, 1, c)
                }
            }),
            yc(t, 1)
        }
    }
    ,
    Ql = function(t) {
        if (t.tag === 13) {
            var n = Yr(t, 134217728);
            if (n !== null) {
                var o = Ft();
                vr(n, t, 134217728, o)
            }
            yc(t, 134217728)
        }
    }
    ,
    gf = function(t) {
        if (t.tag === 13) {
            var n = En(t)
              , o = Yr(t, n);
            if (o !== null) {
                var l = Ft();
                vr(o, t, n, l)
            }
            yc(t, n)
        }
    }
    ,
    yf = function() {
        return qe
    }
    ,
    vf = function(t, n) {
        var o = qe;
        try {
            return qe = t,
            n()
        } finally {
            qe = o
        }
    }
    ,
    Fl = function(t, n, o) {
        switch (n) {
        case "input":
            if (hs(t, o),
            n = o.name,
            o.type === "radio" && n != null) {
                for (o = t; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'),
                n = 0; n < o.length; n++) {
                    var l = o[n];
                    if (l !== t && l.form === t.form) {
                        var c = ea(l);
                        if (!c)
                            throw Error(s(90));
                        Qn(l),
                        hs(l, c)
                    }
                }
            }
            break;
        case "textarea":
            z(t, o);
            break;
        case "select":
            n = o.value,
            n != null && qr(t, !!o.multiple, n, !1)
        }
    }
    ,
    tf = cc,
    rf = es;
    var Hw = {
        usingClientEntryPoint: !1,
        Events: [Di, Ns, ea, Jd, ef, cc]
    }
      , Ki = {
        findFiberByHostInstance: Wn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , Ww = {
        bundleType: Ki.bundleType,
        version: Ki.version,
        rendererPackageName: Ki.rendererPackageName,
        rendererConfig: Ki.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: U.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(t) {
            return t = af(t),
            t === null ? null : t.stateNode
        },
        findFiberByHostInstance: Ki.findFiberByHostInstance || $w,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var La = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!La.isDisabled && La.supportsFiber)
            try {
                Do = La.inject(Ww),
                jr = La
            } catch {}
    }
    return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hw,
    Qt.createPortal = function(t, n) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!xc(n))
            throw Error(s(200));
        return Uw(t, n, null, o)
    }
    ,
    Qt.createRoot = function(t, n) {
        if (!xc(t))
            throw Error(s(299));
        var o = !1
          , l = ""
          , c = jh;
        return n != null && (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
        n = gc(t, 1, !1, null, null, o, !1, l, c),
        t[Zr] = n.current,
        Oi(t.nodeType === 8 ? t.parentNode : t),
        new vc(n)
    }
    ,
    Qt.findDOMNode = function(t) {
        if (t == null)
            return null;
        if (t.nodeType === 1)
            return t;
        var n = t._reactInternals;
        if (n === void 0)
            throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","),
            Error(s(268, t)));
        return t = af(n),
        t = t === null ? null : t.stateNode,
        t
    }
    ,
    Qt.flushSync = function(t) {
        return es(t)
    }
    ,
    Qt.hydrate = function(t, n, o) {
        if (!Fa(n))
            throw Error(s(200));
        return Ma(null, t, n, !0, o)
    }
    ,
    Qt.hydrateRoot = function(t, n, o) {
        if (!xc(t))
            throw Error(s(405));
        var l = o != null && o.hydratedSources || null
          , c = !1
          , p = ""
          , y = jh;
        if (o != null && (o.unstable_strictMode === !0 && (c = !0),
        o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (y = o.onRecoverableError)),
        n = Oh(n, null, t, 1, o ?? null, c, !1, p, y),
        t[Zr] = n.current,
        Oi(t),
        l)
            for (t = 0; t < l.length; t++)
                o = l[t],
                c = o._getVersion,
                c = c(o._source),
                n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [o, c] : n.mutableSourceEagerHydrationData.push(o, c);
        return new Da(n)
    }
    ,
    Qt.render = function(t, n, o) {
        if (!Fa(n))
            throw Error(s(200));
        return Ma(null, t, n, !1, o)
    }
    ,
    Qt.unmountComponentAtNode = function(t) {
        if (!Fa(t))
            throw Error(s(40));
        return t._reactRootContainer ? (es(function() {
            Ma(null, null, t, !1, function() {
                t._reactRootContainer = null,
                t[Zr] = null
            })
        }),
        !0) : !1
    }
    ,
    Qt.unstable_batchedUpdates = cc,
    Qt.unstable_renderSubtreeIntoContainer = function(t, n, o, l) {
        if (!Fa(o))
            throw Error(s(200));
        if (t == null || t._reactInternals === void 0)
            throw Error(s(38));
        return Ma(t, n, o, !1, l)
    }
    ,
    Qt.version = "18.3.1-next-f1338f8080-20240426",
    Qt
}
var $h;
function Km() {
    if ($h)
        return _c.exports;
    $h = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (e) {
                console.error(e)
            }
    }
    return r(),
    _c.exports = e0(),
    _c.exports
}
var Qh;
function t0() {
    if (Qh)
        return Va;
    Qh = 1;
    var r = Km();
    return Va.createRoot = r.createRoot,
    Va.hydrateRoot = r.hydrateRoot,
    Va
}
var r0 = t0();
function n0(r, e) {
    if (r instanceof RegExp)
        return {
            keys: !1,
            pattern: r
        };
    var s, i, a, u, d = [], f = "", h = r.split("/");
    for (h[0] || h.shift(); a = h.shift(); )
        s = a[0],
        s === "*" ? (d.push(s),
        f += a[1] === "?" ? "(?:/(.*))?" : "/(.*)") : s === ":" ? (i = a.indexOf("?", 1),
        u = a.indexOf(".", 1),
        d.push(a.substring(1, ~i ? i : ~u ? u : a.length)),
        f += ~i && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~u && (f += (~i ? "?" : "") + "\\" + a.substring(u))) : f += "/" + a;
    return {
        keys: d,
        pattern: new RegExp("^" + f + (e ? "(?=$|/)" : "/?$"),"i")
    }
}
var w = ml();
const we = Zm(w)
  , Gm = Zw({
    __proto__: null,
    default: we
}, [w]);
var kc = {
    exports: {}
}
  , Ec = {};
var Hh;
function s0() {
    if (Hh)
        return Ec;
    Hh = 1;
    var r = ml();
    function e(x, b) {
        return x === b && (x !== 0 || 1 / x === 1 / b) || x !== x && b !== b
    }
    var s = typeof Object.is == "function" ? Object.is : e
      , i = r.useState
      , a = r.useEffect
      , u = r.useLayoutEffect
      , d = r.useDebugValue;
    function f(x, b) {
        var T = b()
          , R = i({
            inst: {
                value: T,
                getSnapshot: b
            }
        })
          , S = R[0].inst
          , k = R[1];
        return u(function() {
            S.value = T,
            S.getSnapshot = b,
            h(S) && k({
                inst: S
            })
        }, [x, T, b]),
        a(function() {
            return h(S) && k({
                inst: S
            }),
            x(function() {
                h(S) && k({
                    inst: S
                })
            })
        }, [x]),
        d(T),
        T
    }
    function h(x) {
        var b = x.getSnapshot;
        x = x.value;
        try {
            var T = b();
            return !s(x, T)
        } catch {
            return !0
        }
    }
    function m(x, b) {
        return b()
    }
    var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : f;
    return Ec.useSyncExternalStore = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : g,
    Ec
}
var Wh;
function i0() {
    return Wh || (Wh = 1,
    kc.exports = s0()),
    kc.exports
}
var o0 = i0();
const a0 = Gm.useInsertionEffect
  , l0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , u0 = l0 ? w.useLayoutEffect : w.useEffect
  , c0 = a0 || u0
  , Xm = r => {
    const e = w.useRef([r, (...s) => e[0](...s)]).current;
    return c0( () => {
        e[0] = r
    }
    ),
    e[1]
}
  , d0 = "popstate"
  , bd = "pushState"
  , _d = "replaceState"
  , f0 = "hashchange"
  , qh = [d0, bd, _d, f0]
  , p0 = r => {
    for (const e of qh)
        addEventListener(e, r);
    return () => {
        for (const e of qh)
            removeEventListener(e, r)
    }
}
  , Ym = (r, e) => o0.useSyncExternalStore(p0, r, e)
  , h0 = () => location.search
  , m0 = ({ssrSearch: r=""}={}) => Ym(h0, () => r)
  , Zh = () => location.pathname
  , g0 = ({ssrPath: r}={}) => Ym(Zh, r ? () => r : Zh)
  , y0 = (r, {replace: e=!1, state: s=null}={}) => history[e ? _d : bd](s, "", r)
  , v0 = (r={}) => [g0(r), y0]
  , Kh = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Kh] > "u") {
    for (const r of [bd, _d]) {
        const e = history[r];
        history[r] = function() {
            const s = e.apply(this, arguments)
              , i = new Event(r);
            return i.arguments = arguments,
            dispatchEvent(i),
            s
        }
    }
    Object.defineProperty(window, Kh, {
        value: !0
    })
}
const x0 = (r, e) => e.toLowerCase().indexOf(r.toLowerCase()) ? "~" + e : e.slice(r.length) || "/"
  , Jm = (r="") => r === "/" ? "" : r
  , w0 = (r, e) => r[0] === "~" ? r.slice(1) : Jm(e) + r
  , b0 = (r="", e) => x0(Gh(Jm(r)), Gh(e))
  , Gh = r => {
    try {
        return decodeURI(r)
    } catch {
        return r
    }
}
  , eg = {
    hook: v0,
    searchHook: m0,
    parser: n0,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: r => r
}
  , tg = w.createContext(eg)
  , gl = () => w.useContext(tg)
  , rg = {}
  , ng = w.createContext(rg)
  , _0 = () => w.useContext(ng)
  , Sd = r => {
    const [e,s] = r.hook(r);
    return [b0(r.base, e), Xm( (i, a) => s(w0(i, r.base), a))]
}
  , sg = (r, e, s, i) => {
    const {pattern: a, keys: u} = e instanceof RegExp ? {
        keys: !1,
        pattern: e
    } : r(e || "*", i)
      , d = a.exec(s) || []
      , [f,...h] = d;
    return f !== void 0 ? [!0, ( () => {
        const m = u !== !1 ? Object.fromEntries(u.map( (x, b) => [x, h[b]])) : d.groups;
        let g = {
            ...h
        };
        return m && Object.assign(g, m),
        g
    }
    )(), ...i ? [f] : []] : [!1, null]
}
  , S0 = ({children: r, ...e}) => {
    const s = gl()
      , i = e.hook ? eg : s;
    let a = i;
    const [u,d] = e.ssrPath?.split("?") ?? [];
    d && (e.ssrSearch = d,
    e.ssrPath = u),
    e.hrefs = e.hrefs ?? e.hook?.hrefs;
    let f = w.useRef({})
      , h = f.current
      , m = h;
    for (let g in i) {
        const x = g === "base" ? i[g] + (e[g] || "") : e[g] || i[g];
        h === m && x !== m[g] && (f.current = m = {
            ...m
        }),
        m[g] = x,
        x !== i[g] && (a = m)
    }
    return w.createElement(tg.Provider, {
        value: a,
        children: r
    })
}
  , Xh = ({children: r, component: e}, s) => e ? w.createElement(e, {
    params: s
}) : typeof r == "function" ? r(s) : r
  , C0 = r => {
    let e = w.useRef(rg)
      , s = e.current;
    for (const i in r)
        r[i] !== s[i] && (s = r);
    return Object.keys(r).length === 0 && (s = r),
    e.current = s
}
  , Yh = ({path: r, nest: e, match: s, ...i}) => {
    const a = gl()
      , [u] = Sd(a)
      , [d,f,h] = s ?? sg(a.parser, r, u, e)
      , m = C0({
        ..._0(),
        ...f
    });
    if (!d)
        return null;
    const g = h ? w.createElement(S0, {
        base: h
    }, Xh(i, m)) : Xh(i, m);
    return w.createElement(ng.Provider, {
        value: m,
        children: g
    })
}
;
w.forwardRef( (r, e) => {
    const s = gl()
      , [i,a] = Sd(s)
      , {to: u="", href: d=u, onClick: f, asChild: h, children: m, className: g, replace: x, state: b, ...T} = r
      , R = Xm(k => {
        k.ctrlKey || k.metaKey || k.altKey || k.shiftKey || k.button !== 0 || (f?.(k),
        k.defaultPrevented || (k.preventDefault(),
        a(d, r)))
    }
    )
      , S = s.hrefs(d[0] === "~" ? d.slice(1) : s.base + d, s);
    return h && w.isValidElement(m) ? w.cloneElement(m, {
        onClick: R,
        href: S
    }) : w.createElement("a", {
        ...T,
        onClick: R,
        href: S,
        className: g?.call ? g(i === d) : g,
        children: m,
        ref: e
    })
}
);
const ig = r => Array.isArray(r) ? r.flatMap(e => ig(e && e.type === w.Fragment ? e.props.children : e)) : [r]
  , k0 = ({children: r, location: e}) => {
    const s = gl()
      , [i] = Sd(s);
    for (const a of ig(r)) {
        let u = 0;
        if (w.isValidElement(a) && (u = sg(s.parser, a.props.path, e || i, a.props.nest))[0])
            return w.cloneElement(a, {
                match: u
            })
    }
    return null
}
;
var ai = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(r) {
        return this.listeners.add(r),
        this.onSubscribe(),
        () => {
            this.listeners.delete(r),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , os = typeof window > "u" || "Deno"in globalThis;
function ur() {}
function E0(r, e) {
    return typeof r == "function" ? r(e) : r
}
function Zc(r) {
    return typeof r == "number" && r >= 0 && r !== 1 / 0
}
function og(r, e) {
    return Math.max(r + (e || 0) - Date.now(), 0)
}
function Ks(r, e) {
    return typeof r == "function" ? r(e) : r
}
function Cr(r, e) {
    return typeof r == "function" ? r(e) : r
}
function Jh(r, e) {
    const {type: s="all", exact: i, fetchStatus: a, predicate: u, queryKey: d, stale: f} = r;
    if (d) {
        if (i) {
            if (e.queryHash !== Cd(d, e.options))
                return !1
        } else if (!oo(e.queryKey, d))
            return !1
    }
    if (s !== "all") {
        const h = e.isActive();
        if (s === "active" && !h || s === "inactive" && h)
            return !1
    }
    return !(typeof f == "boolean" && e.isStale() !== f || a && a !== e.state.fetchStatus || u && !u(e))
}
function em(r, e) {
    const {exact: s, status: i, predicate: a, mutationKey: u} = r;
    if (u) {
        if (!e.options.mutationKey)
            return !1;
        if (s) {
            if (as(e.options.mutationKey) !== as(u))
                return !1
        } else if (!oo(e.options.mutationKey, u))
            return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}
function Cd(r, e) {
    return (e?.queryKeyHashFn || as)(r)
}
function as(r) {
    return JSON.stringify(r, (e, s) => Kc(s) ? Object.keys(s).sort().reduce( (i, a) => (i[a] = s[a],
    i), {}) : s)
}
function oo(r, e) {
    return r === e ? !0 : typeof r != typeof e ? !1 : r && e && typeof r == "object" && typeof e == "object" ? !Object.keys(e).some(s => !oo(r[s], e[s])) : !1
}
function ag(r, e) {
    if (r === e)
        return r;
    const s = tm(r) && tm(e);
    if (s || Kc(r) && Kc(e)) {
        const i = s ? r : Object.keys(r)
          , a = i.length
          , u = s ? e : Object.keys(e)
          , d = u.length
          , f = s ? [] : {};
        let h = 0;
        for (let m = 0; m < d; m++) {
            const g = s ? m : u[m];
            (!s && i.includes(g) || s) && r[g] === void 0 && e[g] === void 0 ? (f[g] = void 0,
            h++) : (f[g] = ag(r[g], e[g]),
            f[g] === r[g] && r[g] !== void 0 && h++)
        }
        return a === d && h === a ? r : f
    }
    return e
}
function Ka(r, e) {
    if (!e || Object.keys(r).length !== Object.keys(e).length)
        return !1;
    for (const s in r)
        if (r[s] !== e[s])
            return !1;
    return !0
}
function tm(r) {
    return Array.isArray(r) && r.length === Object.keys(r).length
}
function Kc(r) {
    if (!rm(r))
        return !1;
    const e = r.constructor;
    if (e === void 0)
        return !0;
    const s = e.prototype;
    return !(!rm(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype)
}
function rm(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}
function T0(r) {
    return new Promise(e => {
        setTimeout(e, r)
    }
    )
}
function Gc(r, e, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(r, e) : s.structuralSharing !== !1 ? ag(r, e) : e
}
function P0(r, e, s=0) {
    const i = [...r, e];
    return s && i.length > s ? i.slice(1) : i
}
function N0(r, e, s=0) {
    const i = [e, ...r];
    return s && i.length > s ? i.slice(0, -1) : i
}
var kd = Symbol();
function lg(r, e) {
    return !r.queryFn && e?.initialPromise ? () => e.initialPromise : !r.queryFn || r.queryFn === kd ? () => Promise.reject(new Error(`Missing queryFn: '${r.queryHash}'`)) : r.queryFn
}
var R0 = class extends ai {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = r => {
            if (!os && window.addEventListener) {
                const e = () => r();
                return window.addEventListener("visibilitychange", e, !1),
                () => {
                    window.removeEventListener("visibilitychange", e)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(r) {
        this.#n = r,
        this.#t?.(),
        this.#t = r(e => {
            typeof e == "boolean" ? this.setFocused(e) : this.onFocus()
        }
        )
    }
    setFocused(r) {
        this.#e !== r && (this.#e = r,
        this.onFocus())
    }
    onFocus() {
        const r = this.isFocused();
        this.listeners.forEach(e => {
            e(r)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , Ed = new R0
  , A0 = class extends ai {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = r => {
            if (!os && window.addEventListener) {
                const e = () => r(!0)
                  , s = () => r(!1);
                return window.addEventListener("online", e, !1),
                window.addEventListener("offline", s, !1),
                () => {
                    window.removeEventListener("online", e),
                    window.removeEventListener("offline", s)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(r) {
        this.#n = r,
        this.#t?.(),
        this.#t = r(this.setOnline.bind(this))
    }
    setOnline(r) {
        this.#e !== r && (this.#e = r,
        this.listeners.forEach(s => {
            s(r)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , Ga = new A0;
function Xc() {
    let r, e;
    const s = new Promise( (a, u) => {
        r = a,
        e = u
    }
    );
    s.status = "pending",
    s.catch( () => {}
    );
    function i(a) {
        Object.assign(s, a),
        delete s.resolve,
        delete s.reject
    }
    return s.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }),
        r(a)
    }
    ,
    s.reject = a => {
        i({
            status: "rejected",
            reason: a
        }),
        e(a)
    }
    ,
    s
}
function O0(r) {
    return Math.min(1e3 * 2 ** r, 3e4)
}
function ug(r) {
    return (r ?? "online") === "online" ? Ga.isOnline() : !0
}
var cg = class extends Error {
    constructor(r) {
        super("CancelledError"),
        this.revert = r?.revert,
        this.silent = r?.silent
    }
}
;
function Tc(r) {
    return r instanceof cg
}
function dg(r) {
    let e = !1, s = 0, i = !1, a;
    const u = Xc()
      , d = S => {
        i || (b(new cg(S)),
        r.abort?.())
    }
      , f = () => {
        e = !0
    }
      , h = () => {
        e = !1
    }
      , m = () => Ed.isFocused() && (r.networkMode === "always" || Ga.isOnline()) && r.canRun()
      , g = () => ug(r.networkMode) && r.canRun()
      , x = S => {
        i || (i = !0,
        r.onSuccess?.(S),
        a?.(),
        u.resolve(S))
    }
      , b = S => {
        i || (i = !0,
        r.onError?.(S),
        a?.(),
        u.reject(S))
    }
      , T = () => new Promise(S => {
        a = k => {
            (i || m()) && S(k)
        }
        ,
        r.onPause?.()
    }
    ).then( () => {
        a = void 0,
        i || r.onContinue?.()
    }
    )
      , R = () => {
        if (i)
            return;
        let S;
        const k = s === 0 ? r.initialPromise : void 0;
        try {
            S = k ?? r.fn()
        } catch (F) {
            S = Promise.reject(F)
        }
        Promise.resolve(S).then(x).catch(F => {
            if (i)
                return;
            const A = r.retry ?? (os ? 0 : 3)
              , B = r.retryDelay ?? O0
              , U = typeof B == "function" ? B(s, F) : B
              , Q = A === !0 || typeof A == "number" && s < A || typeof A == "function" && A(s, F);
            if (e || !Q) {
                b(F);
                return
            }
            s++,
            r.onFail?.(s, F),
            T0(U).then( () => m() ? void 0 : T()).then( () => {
                e ? b(F) : R()
            }
            )
        }
        )
    }
    ;
    return {
        promise: u,
        cancel: d,
        continue: () => (a?.(),
        u),
        cancelRetry: f,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? R() : T().then(R),
        u)
    }
}
function I0() {
    let r = []
      , e = 0
      , s = f => {
        f()
    }
      , i = f => {
        f()
    }
      , a = f => setTimeout(f, 0);
    const u = f => {
        e ? r.push(f) : a( () => {
            s(f)
        }
        )
    }
      , d = () => {
        const f = r;
        r = [],
        f.length && a( () => {
            i( () => {
                f.forEach(h => {
                    s(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: f => {
            let h;
            e++;
            try {
                h = f()
            } finally {
                e--,
                e || d()
            }
            return h
        }
        ,
        batchCalls: f => (...h) => {
            u( () => {
                f(...h)
            }
            )
        }
        ,
        schedule: u,
        setNotifyFunction: f => {
            s = f
        }
        ,
        setBatchNotifyFunction: f => {
            i = f
        }
        ,
        setScheduler: f => {
            a = f
        }
    }
}
var wt = I0()
  , fg = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Zc(this.gcTime) && (this.#e = setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(r) {
        this.gcTime = Math.max(this.gcTime || 0, r ?? (os ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e && (clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , j0 = class extends fg {
    #e;
    #t;
    #n;
    #r;
    #o;
    #i;
    constructor(r) {
        super(),
        this.#i = !1,
        this.#o = r.defaultOptions,
        this.setOptions(r.options),
        this.observers = [],
        this.#n = r.cache,
        this.queryKey = r.queryKey,
        this.queryHash = r.queryHash,
        this.#e = D0(this.options),
        this.state = r.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#r?.promise
    }
    setOptions(r) {
        this.options = {
            ...this.#o,
            ...r
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
    }
    setData(r, e) {
        const s = Gc(this.state.data, r, this.options);
        return this.#s({
            data: s,
            type: "success",
            dataUpdatedAt: e?.updatedAt,
            manual: e?.manual
        }),
        s
    }
    setState(r, e) {
        this.#s({
            type: "setState",
            state: r,
            setStateOptions: e
        })
    }
    cancel(r) {
        const e = this.#r?.promise;
        return this.#r?.cancel(r),
        e ? e.then(ur).catch(ur) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#e)
    }
    isActive() {
        return this.observers.some(r => Cr(r.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === kd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(r => r.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(r=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !og(this.state.dataUpdatedAt, r)
    }
    onFocus() {
        this.observers.find(e => e.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#r?.continue()
    }
    onOnline() {
        this.observers.find(e => e.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#r?.continue()
    }
    addObserver(r) {
        this.observers.includes(r) || (this.observers.push(r),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: r
        }))
    }
    removeObserver(r) {
        this.observers.includes(r) && (this.observers = this.observers.filter(e => e !== r),
        this.observers.length || (this.#r && (this.#i ? this.#r.cancel({
            revert: !0
        }) : this.#r.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: r
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#s({
            type: "invalidate"
        })
    }
    fetch(r, e) {
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && e?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#r)
                return this.#r.continueRetry(),
                this.#r.promise
        }
        if (r && this.setOptions(r),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const s = new AbortController
          , i = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (this.#i = !0,
                s.signal)
            })
        }
          , a = () => {
            const f = lg(this.options, e)
              , h = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return i(h),
            this.#i = !1,
            this.options.persister ? this.options.persister(f, h, this) : f(h)
        }
          , u = {
            fetchOptions: e,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: a
        };
        i(u),
        this.options.behavior?.onFetch(u, this),
        this.#t = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== u.fetchOptions?.meta) && this.#s({
            type: "fetch",
            meta: u.fetchOptions?.meta
        });
        const d = f => {
            Tc(f) && f.silent || this.#s({
                type: "error",
                error: f
            }),
            Tc(f) || (this.#n.config.onError?.(f, this),
            this.#n.config.onSettled?.(this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return this.#r = dg({
            initialPromise: e?.initialPromise,
            fn: u.fetchFn,
            abort: s.abort.bind(s),
            onSuccess: f => {
                if (f === void 0) {
                    d(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (h) {
                    d(h);
                    return
                }
                this.#n.config.onSuccess?.(f, this),
                this.#n.config.onSettled?.(f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: d,
            onFail: (f, h) => {
                this.#s({
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                this.#s({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#s({
                    type: "continue"
                })
            }
            ,
            retry: u.options.retry,
            retryDelay: u.options.retryDelay,
            networkMode: u.options.networkMode,
            canRun: () => !0
        }),
        this.#r.start()
    }
    #s(r) {
        const e = s => {
            switch (r.type) {
            case "failed":
                return {
                    ...s,
                    fetchFailureCount: r.failureCount,
                    fetchFailureReason: r.error
                };
            case "pause":
                return {
                    ...s,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...s,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...s,
                    ...pg(s.data, this.options),
                    fetchMeta: r.meta ?? null
                };
            case "success":
                return {
                    ...s,
                    data: r.data,
                    dataUpdateCount: s.dataUpdateCount + 1,
                    dataUpdatedAt: r.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!r.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const i = r.error;
                return Tc(i) && i.revert && this.#t ? {
                    ...this.#t,
                    fetchStatus: "idle"
                } : {
                    ...s,
                    error: i,
                    errorUpdateCount: s.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: s.fetchFailureCount + 1,
                    fetchFailureReason: i,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...s,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...s,
                    ...r.state
                }
            }
        }
        ;
        this.state = e(this.state),
        wt.batch( () => {
            this.observers.forEach(s => {
                s.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: "updated",
                action: r
            })
        }
        )
    }
}
;
function pg(r, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ug(e.networkMode) ? "fetching" : "paused",
        ...r === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function D0(r) {
    const e = typeof r.initialData == "function" ? r.initialData() : r.initialData
      , s = e !== void 0
      , i = s ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var F0 = class extends ai {
    constructor(r={}) {
        super(),
        this.config = r,
        this.#e = new Map
    }
    #e;
    build(r, e, s) {
        const i = e.queryKey
          , a = e.queryHash ?? Cd(i, e);
        let u = this.get(a);
        return u || (u = new j0({
            cache: this,
            queryKey: i,
            queryHash: a,
            options: r.defaultQueryOptions(e),
            state: s,
            defaultOptions: r.getQueryDefaults(i)
        }),
        this.add(u)),
        u
    }
    add(r) {
        this.#e.has(r.queryHash) || (this.#e.set(r.queryHash, r),
        this.notify({
            type: "added",
            query: r
        }))
    }
    remove(r) {
        const e = this.#e.get(r.queryHash);
        e && (r.destroy(),
        e === r && this.#e.delete(r.queryHash),
        this.notify({
            type: "removed",
            query: r
        }))
    }
    clear() {
        wt.batch( () => {
            this.getAll().forEach(r => {
                this.remove(r)
            }
            )
        }
        )
    }
    get(r) {
        return this.#e.get(r)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(r) {
        const e = {
            exact: !0,
            ...r
        };
        return this.getAll().find(s => Jh(e, s))
    }
    findAll(r={}) {
        const e = this.getAll();
        return Object.keys(r).length > 0 ? e.filter(s => Jh(r, s)) : e
    }
    notify(r) {
        wt.batch( () => {
            this.listeners.forEach(e => {
                e(r)
            }
            )
        }
        )
    }
    onFocus() {
        wt.batch( () => {
            this.getAll().forEach(r => {
                r.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        wt.batch( () => {
            this.getAll().forEach(r => {
                r.onOnline()
            }
            )
        }
        )
    }
}
  , M0 = class extends fg {
    #e;
    #t;
    #n;
    constructor(r) {
        super(),
        this.mutationId = r.mutationId,
        this.#t = r.mutationCache,
        this.#e = [],
        this.state = r.state || hg(),
        this.setOptions(r.options),
        this.scheduleGc()
    }
    setOptions(r) {
        this.options = r,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(r) {
        this.#e.includes(r) || (this.#e.push(r),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: r
        }))
    }
    removeObserver(r) {
        this.#e = this.#e.filter(e => e !== r),
        this.scheduleGc(),
        this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: r
        })
    }
    optionalRemove() {
        this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
    }
    continue() {
        return this.#n?.continue() ?? this.execute(this.state.variables)
    }
    async execute(r) {
        this.#n = dg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(r) : Promise.reject(new Error("No mutationFn found")),
            onFail: (i, a) => {
                this.#r({
                    type: "failed",
                    failureCount: i,
                    error: a
                })
            }
            ,
            onPause: () => {
                this.#r({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#r({
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#t.canRun(this)
        });
        const e = this.state.status === "pending"
          , s = !this.#n.canStart();
        try {
            if (!e) {
                this.#r({
                    type: "pending",
                    variables: r,
                    isPaused: s
                }),
                await this.#t.config.onMutate?.(r, this);
                const a = await this.options.onMutate?.(r);
                a !== this.state.context && this.#r({
                    type: "pending",
                    context: a,
                    variables: r,
                    isPaused: s
                })
            }
            const i = await this.#n.start();
            return await this.#t.config.onSuccess?.(i, r, this.state.context, this),
            await this.options.onSuccess?.(i, r, this.state.context),
            await this.#t.config.onSettled?.(i, null, this.state.variables, this.state.context, this),
            await this.options.onSettled?.(i, null, r, this.state.context),
            this.#r({
                type: "success",
                data: i
            }),
            i
        } catch (i) {
            try {
                throw await this.#t.config.onError?.(i, r, this.state.context, this),
                await this.options.onError?.(i, r, this.state.context),
                await this.#t.config.onSettled?.(void 0, i, this.state.variables, this.state.context, this),
                await this.options.onSettled?.(void 0, i, r, this.state.context),
                i
            } finally {
                this.#r({
                    type: "error",
                    error: i
                })
            }
        } finally {
            this.#t.runNext(this)
        }
    }
    #r(r) {
        const e = s => {
            switch (r.type) {
            case "failed":
                return {
                    ...s,
                    failureCount: r.failureCount,
                    failureReason: r.error
                };
            case "pause":
                return {
                    ...s,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...s,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...s,
                    context: r.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: r.isPaused,
                    status: "pending",
                    variables: r.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...s,
                    data: r.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...s,
                    data: void 0,
                    error: r.error,
                    failureCount: s.failureCount + 1,
                    failureReason: r.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = e(this.state),
        wt.batch( () => {
            this.#e.forEach(s => {
                s.onMutationUpdate(r)
            }
            ),
            this.#t.notify({
                mutation: this,
                type: "updated",
                action: r
            })
        }
        )
    }
}
;
function hg() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var L0 = class extends ai {
    constructor(r={}) {
        super(),
        this.config = r,
        this.#e = new Map,
        this.#t = Date.now()
    }
    #e;
    #t;
    build(r, e, s) {
        const i = new M0({
            mutationCache: this,
            mutationId: ++this.#t,
            options: r.defaultMutationOptions(e),
            state: s
        });
        return this.add(i),
        i
    }
    add(r) {
        const e = za(r)
          , s = this.#e.get(e) ?? [];
        s.push(r),
        this.#e.set(e, s),
        this.notify({
            type: "added",
            mutation: r
        })
    }
    remove(r) {
        const e = za(r);
        if (this.#e.has(e)) {
            const s = this.#e.get(e)?.filter(i => i !== r);
            s && (s.length === 0 ? this.#e.delete(e) : this.#e.set(e, s))
        }
        this.notify({
            type: "removed",
            mutation: r
        })
    }
    canRun(r) {
        const e = this.#e.get(za(r))?.find(s => s.state.status === "pending");
        return !e || e === r
    }
    runNext(r) {
        return this.#e.get(za(r))?.find(s => s !== r && s.state.isPaused)?.continue() ?? Promise.resolve()
    }
    clear() {
        wt.batch( () => {
            this.getAll().forEach(r => {
                this.remove(r)
            }
            )
        }
        )
    }
    getAll() {
        return [...this.#e.values()].flat()
    }
    find(r) {
        const e = {
            exact: !0,
            ...r
        };
        return this.getAll().find(s => em(e, s))
    }
    findAll(r={}) {
        return this.getAll().filter(e => em(r, e))
    }
    notify(r) {
        wt.batch( () => {
            this.listeners.forEach(e => {
                e(r)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const r = this.getAll().filter(e => e.state.isPaused);
        return wt.batch( () => Promise.all(r.map(e => e.continue().catch(ur))))
    }
}
;
function za(r) {
    return r.options.scope?.id ?? String(r.mutationId)
}
function nm(r) {
    return {
        onFetch: (e, s) => {
            const i = e.options
              , a = e.fetchOptions?.meta?.fetchMore?.direction
              , u = e.state.data?.pages || []
              , d = e.state.data?.pageParams || [];
            let f = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const m = async () => {
                let g = !1;
                const x = R => {
                    Object.defineProperty(R, "signal", {
                        enumerable: !0,
                        get: () => (e.signal.aborted ? g = !0 : e.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        e.signal)
                    })
                }
                  , b = lg(e.options, e.fetchOptions)
                  , T = async (R, S, k) => {
                    if (g)
                        return Promise.reject();
                    if (S == null && R.pages.length)
                        return Promise.resolve(R);
                    const F = {
                        queryKey: e.queryKey,
                        pageParam: S,
                        direction: k ? "backward" : "forward",
                        meta: e.options.meta
                    };
                    x(F);
                    const A = await b(F)
                      , {maxPages: B} = e.options
                      , U = k ? N0 : P0;
                    return {
                        pages: U(R.pages, A, B),
                        pageParams: U(R.pageParams, S, B)
                    }
                }
                ;
                if (a && u.length) {
                    const R = a === "backward"
                      , S = R ? V0 : sm
                      , k = {
                        pages: u,
                        pageParams: d
                    }
                      , F = S(i, k);
                    f = await T(k, F, R)
                } else {
                    const R = r ?? u.length;
                    do {
                        const S = h === 0 ? d[0] ?? i.initialPageParam : sm(i, f);
                        if (h > 0 && S == null)
                            break;
                        f = await T(f, S),
                        h++
                    } while (h < R)
                }
                return f
            }
            ;
            e.options.persister ? e.fetchFn = () => e.options.persister?.(m, {
                queryKey: e.queryKey,
                meta: e.options.meta,
                signal: e.signal
            }, s) : e.fetchFn = m
        }
    }
}
function sm(r, {pages: e, pageParams: s}) {
    const i = e.length - 1;
    return e.length > 0 ? r.getNextPageParam(e[i], e, s[i], s) : void 0
}
function V0(r, {pages: e, pageParams: s}) {
    return e.length > 0 ? r.getPreviousPageParam?.(e[0], e, s[0], s) : void 0
}
var z0 = class {
    #e;
    #t;
    #n;
    #r;
    #o;
    #i;
    #s;
    #a;
    constructor(r={}) {
        this.#e = r.queryCache || new F0,
        this.#t = r.mutationCache || new L0,
        this.#n = r.defaultOptions || {},
        this.#r = new Map,
        this.#o = new Map,
        this.#i = 0
    }
    mount() {
        this.#i++,
        this.#i === 1 && (this.#s = Ed.subscribe(async r => {
            r && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#a = Ga.subscribe(async r => {
            r && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#i--,
        this.#i === 0 && (this.#s?.(),
        this.#s = void 0,
        this.#a?.(),
        this.#a = void 0)
    }
    isFetching(r) {
        return this.#e.findAll({
            ...r,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(r) {
        return this.#t.findAll({
            ...r,
            status: "pending"
        }).length
    }
    getQueryData(r) {
        const e = this.defaultQueryOptions({
            queryKey: r
        });
        return this.#e.get(e.queryHash)?.state.data
    }
    ensureQueryData(r) {
        const e = this.getQueryData(r.queryKey);
        if (e === void 0)
            return this.fetchQuery(r);
        {
            const s = this.defaultQueryOptions(r)
              , i = this.#e.build(this, s);
            return r.revalidateIfStale && i.isStaleByTime(Ks(s.staleTime, i)) && this.prefetchQuery(s),
            Promise.resolve(e)
        }
    }
    getQueriesData(r) {
        return this.#e.findAll(r).map( ({queryKey: e, state: s}) => {
            const i = s.data;
            return [e, i]
        }
        )
    }
    setQueryData(r, e, s) {
        const i = this.defaultQueryOptions({
            queryKey: r
        })
          , u = this.#e.get(i.queryHash)?.state.data
          , d = E0(e, u);
        if (d !== void 0)
            return this.#e.build(this, i).setData(d, {
                ...s,
                manual: !0
            })
    }
    setQueriesData(r, e, s) {
        return wt.batch( () => this.#e.findAll(r).map( ({queryKey: i}) => [i, this.setQueryData(i, e, s)]))
    }
    getQueryState(r) {
        const e = this.defaultQueryOptions({
            queryKey: r
        });
        return this.#e.get(e.queryHash)?.state
    }
    removeQueries(r) {
        const e = this.#e;
        wt.batch( () => {
            e.findAll(r).forEach(s => {
                e.remove(s)
            }
            )
        }
        )
    }
    resetQueries(r, e) {
        const s = this.#e
          , i = {
            type: "active",
            ...r
        };
        return wt.batch( () => (s.findAll(r).forEach(a => {
            a.reset()
        }
        ),
        this.refetchQueries(i, e)))
    }
    cancelQueries(r={}, e={}) {
        const s = {
            revert: !0,
            ...e
        }
          , i = wt.batch( () => this.#e.findAll(r).map(a => a.cancel(s)));
        return Promise.all(i).then(ur).catch(ur)
    }
    invalidateQueries(r={}, e={}) {
        return wt.batch( () => {
            if (this.#e.findAll(r).forEach(i => {
                i.invalidate()
            }
            ),
            r.refetchType === "none")
                return Promise.resolve();
            const s = {
                ...r,
                type: r.refetchType ?? r.type ?? "active"
            };
            return this.refetchQueries(s, e)
        }
        )
    }
    refetchQueries(r={}, e) {
        const s = {
            ...e,
            cancelRefetch: e?.cancelRefetch ?? !0
        }
          , i = wt.batch( () => this.#e.findAll(r).filter(a => !a.isDisabled()).map(a => {
            let u = a.fetch(void 0, s);
            return s.throwOnError || (u = u.catch(ur)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : u
        }
        ));
        return Promise.all(i).then(ur)
    }
    fetchQuery(r) {
        const e = this.defaultQueryOptions(r);
        e.retry === void 0 && (e.retry = !1);
        const s = this.#e.build(this, e);
        return s.isStaleByTime(Ks(e.staleTime, s)) ? s.fetch(e) : Promise.resolve(s.state.data)
    }
    prefetchQuery(r) {
        return this.fetchQuery(r).then(ur).catch(ur)
    }
    fetchInfiniteQuery(r) {
        return r.behavior = nm(r.pages),
        this.fetchQuery(r)
    }
    prefetchInfiniteQuery(r) {
        return this.fetchInfiniteQuery(r).then(ur).catch(ur)
    }
    ensureInfiniteQueryData(r) {
        return r.behavior = nm(r.pages),
        this.ensureQueryData(r)
    }
    resumePausedMutations() {
        return Ga.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(r) {
        this.#n = r
    }
    setQueryDefaults(r, e) {
        this.#r.set(as(r), {
            queryKey: r,
            defaultOptions: e
        })
    }
    getQueryDefaults(r) {
        const e = [...this.#r.values()];
        let s = {};
        return e.forEach(i => {
            oo(r, i.queryKey) && (s = {
                ...s,
                ...i.defaultOptions
            })
        }
        ),
        s
    }
    setMutationDefaults(r, e) {
        this.#o.set(as(r), {
            mutationKey: r,
            defaultOptions: e
        })
    }
    getMutationDefaults(r) {
        const e = [...this.#o.values()];
        let s = {};
        return e.forEach(i => {
            oo(r, i.mutationKey) && (s = {
                ...s,
                ...i.defaultOptions
            })
        }
        ),
        s
    }
    defaultQueryOptions(r) {
        if (r._defaulted)
            return r;
        const e = {
            ...this.#n.queries,
            ...this.getQueryDefaults(r.queryKey),
            ...r,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = Cd(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.enabled !== !0 && e.queryFn === kd && (e.enabled = !1),
        e
    }
    defaultMutationOptions(r) {
        return r?._defaulted ? r : {
            ...this.#n.mutations,
            ...r?.mutationKey && this.getMutationDefaults(r.mutationKey),
            ...r,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , B0 = class extends ai {
    constructor(r, e) {
        super(),
        this.options = e,
        this.#e = r,
        this.#a = null,
        this.#s = Xc(),
        this.options.experimental_prefetchInRender || this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
        this.bindMethods(),
        this.setOptions(e)
    }
    #e;
    #t = void 0;
    #n = void 0;
    #r = void 0;
    #o;
    #i;
    #s;
    #a;
    #m;
    #f;
    #p;
    #u;
    #c;
    #l;
    #h = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this),
        im(this.#t, this.options) ? this.#d() : this.updateResult(),
        this.#x())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Yc(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Yc(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.#w(),
        this.#b(),
        this.#t.removeObserver(this)
    }
    setOptions(r, e) {
        const s = this.options
          , i = this.#t;
        if (this.options = this.#e.defaultQueryOptions(r),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Cr(this.options.enabled, this.#t) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#_(),
        this.#t.setOptions(this.options),
        s._defaulted && !Ka(this.options, s) && this.#e.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this
        });
        const a = this.hasListeners();
        a && om(this.#t, i, this.options, s) && this.#d(),
        this.updateResult(e),
        a && (this.#t !== i || Cr(this.options.enabled, this.#t) !== Cr(s.enabled, this.#t) || Ks(this.options.staleTime, this.#t) !== Ks(s.staleTime, this.#t)) && this.#g();
        const u = this.#y();
        a && (this.#t !== i || Cr(this.options.enabled, this.#t) !== Cr(s.enabled, this.#t) || u !== this.#l) && this.#v(u)
    }
    getOptimisticResult(r) {
        const e = this.#e.getQueryCache().build(this.#e, r)
          , s = this.createResult(e, r);
        return $0(this, s) && (this.#r = s,
        this.#i = this.options,
        this.#o = this.#t.state),
        s
    }
    getCurrentResult() {
        return this.#r
    }
    trackResult(r, e) {
        const s = {};
        return Object.keys(r).forEach(i => {
            Object.defineProperty(s, i, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackProp(i),
                e?.(i),
                r[i])
            })
        }
        ),
        s
    }
    trackProp(r) {
        this.#h.add(r)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({...r}={}) {
        return this.fetch({
            ...r
        })
    }
    fetchOptimistic(r) {
        const e = this.#e.defaultQueryOptions(r)
          , s = this.#e.getQueryCache().build(this.#e, e);
        return s.fetch().then( () => this.createResult(s, e))
    }
    fetch(r) {
        return this.#d({
            ...r,
            cancelRefetch: r.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        this.#r))
    }
    #d(r) {
        this.#_();
        let e = this.#t.fetch(this.options, r);
        return r?.throwOnError || (e = e.catch(ur)),
        e
    }
    #g() {
        this.#w();
        const r = Ks(this.options.staleTime, this.#t);
        if (os || this.#r.isStale || !Zc(r))
            return;
        const s = og(this.#r.dataUpdatedAt, r) + 1;
        this.#u = setTimeout( () => {
            this.#r.isStale || this.updateResult()
        }
        , s)
    }
    #y() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
    }
    #v(r) {
        this.#b(),
        this.#l = r,
        !(os || Cr(this.options.enabled, this.#t) === !1 || !Zc(this.#l) || this.#l === 0) && (this.#c = setInterval( () => {
            (this.options.refetchIntervalInBackground || Ed.isFocused()) && this.#d()
        }
        , this.#l))
    }
    #x() {
        this.#g(),
        this.#v(this.#y())
    }
    #w() {
        this.#u && (clearTimeout(this.#u),
        this.#u = void 0)
    }
    #b() {
        this.#c && (clearInterval(this.#c),
        this.#c = void 0)
    }
    createResult(r, e) {
        const s = this.#t
          , i = this.options
          , a = this.#r
          , u = this.#o
          , d = this.#i
          , h = r !== s ? r.state : this.#n
          , {state: m} = r;
        let g = {
            ...m
        }, x = !1, b;
        if (e._optimisticResults) {
            const M = this.hasListeners()
              , q = !M && im(r, e)
              , ie = M && om(r, s, e, i);
            (q || ie) && (g = {
                ...g,
                ...pg(m.data, r.options)
            }),
            e._optimisticResults === "isRestoring" && (g.fetchStatus = "idle")
        }
        let {error: T, errorUpdatedAt: R, status: S} = g;
        if (e.select && g.data !== void 0)
            if (a && g.data === u?.data && e.select === this.#m)
                b = this.#f;
            else
                try {
                    this.#m = e.select,
                    b = e.select(g.data),
                    b = Gc(a?.data, b, e),
                    this.#f = b,
                    this.#a = null
                } catch (M) {
                    this.#a = M
                }
        else
            b = g.data;
        if (e.placeholderData !== void 0 && b === void 0 && S === "pending") {
            let M;
            if (a?.isPlaceholderData && e.placeholderData === d?.placeholderData)
                M = a.data;
            else if (M = typeof e.placeholderData == "function" ? e.placeholderData(this.#p?.state.data, this.#p) : e.placeholderData,
            e.select && M !== void 0)
                try {
                    M = e.select(M),
                    this.#a = null
                } catch (q) {
                    this.#a = q
                }
            M !== void 0 && (S = "success",
            b = Gc(a?.data, M, e),
            x = !0)
        }
        this.#a && (T = this.#a,
        b = this.#f,
        R = Date.now(),
        S = "error");
        const k = g.fetchStatus === "fetching"
          , F = S === "pending"
          , A = S === "error"
          , B = F && k
          , U = b !== void 0
          , L = {
            status: S,
            fetchStatus: g.fetchStatus,
            isPending: F,
            isSuccess: S === "success",
            isError: A,
            isInitialLoading: B,
            isLoading: B,
            data: b,
            dataUpdatedAt: g.dataUpdatedAt,
            error: T,
            errorUpdatedAt: R,
            failureCount: g.fetchFailureCount,
            failureReason: g.fetchFailureReason,
            errorUpdateCount: g.errorUpdateCount,
            isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
            isFetchedAfterMount: g.dataUpdateCount > h.dataUpdateCount || g.errorUpdateCount > h.errorUpdateCount,
            isFetching: k,
            isRefetching: k && !F,
            isLoadingError: A && !U,
            isPaused: g.fetchStatus === "paused",
            isPlaceholderData: x,
            isRefetchError: A && U,
            isStale: Td(r, e),
            refetch: this.refetch,
            promise: this.#s
        };
        if (this.options.experimental_prefetchInRender) {
            const M = me => {
                L.status === "error" ? me.reject(L.error) : L.data !== void 0 && me.resolve(L.data)
            }
              , q = () => {
                const me = this.#s = L.promise = Xc();
                M(me)
            }
              , ie = this.#s;
            switch (ie.status) {
            case "pending":
                r.queryHash === s.queryHash && M(ie);
                break;
            case "fulfilled":
                (L.status === "error" || L.data !== ie.value) && q();
                break;
            case "rejected":
                (L.status !== "error" || L.error !== ie.reason) && q();
                break
            }
        }
        return L
    }
    updateResult(r) {
        const e = this.#r
          , s = this.createResult(this.#t, this.options);
        if (this.#o = this.#t.state,
        this.#i = this.options,
        this.#o.data !== void 0 && (this.#p = this.#t),
        Ka(s, e))
            return;
        this.#r = s;
        const i = {}
          , a = () => {
            if (!e)
                return !0;
            const {notifyOnChangeProps: u} = this.options
              , d = typeof u == "function" ? u() : u;
            if (d === "all" || !d && !this.#h.size)
                return !0;
            const f = new Set(d ?? this.#h);
            return this.options.throwOnError && f.add("error"),
            Object.keys(this.#r).some(h => {
                const m = h;
                return this.#r[m] !== e[m] && f.has(m)
            }
            )
        }
        ;
        r?.listeners !== !1 && a() && (i.listeners = !0),
        this.#S({
            ...i,
            ...r
        })
    }
    #_() {
        const r = this.#e.getQueryCache().build(this.#e, this.options);
        if (r === this.#t)
            return;
        const e = this.#t;
        this.#t = r,
        this.#n = r.state,
        this.hasListeners() && (e?.removeObserver(this),
        r.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && this.#x()
    }
    #S(r) {
        wt.batch( () => {
            r.listeners && this.listeners.forEach(e => {
                e(this.#r)
            }
            ),
            this.#e.getQueryCache().notify({
                query: this.#t,
                type: "observerResultsUpdated"
            })
        }
        )
    }
}
;
function U0(r, e) {
    return Cr(e.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && e.retryOnMount === !1)
}
function im(r, e) {
    return U0(r, e) || r.state.data !== void 0 && Yc(r, e, e.refetchOnMount)
}
function Yc(r, e, s) {
    if (Cr(e.enabled, r) !== !1) {
        const i = typeof s == "function" ? s(r) : s;
        return i === "always" || i !== !1 && Td(r, e)
    }
    return !1
}
function om(r, e, s, i) {
    return (r !== e || Cr(i.enabled, r) === !1) && (!s.suspense || r.state.status !== "error") && Td(r, s)
}
function Td(r, e) {
    return Cr(e.enabled, r) !== !1 && r.isStaleByTime(Ks(e.staleTime, r))
}
function $0(r, e) {
    return !Ka(r.getCurrentResult(), e)
}
var Q0 = class extends ai {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(e, s) {
        super(),
        this.#e = e,
        this.setOptions(s),
        this.bindMethods(),
        this.#o()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        const s = this.options;
        this.options = this.#e.defaultMutationOptions(e),
        Ka(this.options, s) || this.#e.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#n,
            observer: this
        }),
        s?.mutationKey && this.options.mutationKey && as(s.mutationKey) !== as(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#n?.removeObserver(this)
    }
    onMutationUpdate(e) {
        this.#o(),
        this.#i(e)
    }
    getCurrentResult() {
        return this.#t
    }
    reset() {
        this.#n?.removeObserver(this),
        this.#n = void 0,
        this.#o(),
        this.#i()
    }
    mutate(e, s) {
        return this.#r = s,
        this.#n?.removeObserver(this),
        this.#n = this.#e.getMutationCache().build(this.#e, this.options),
        this.#n.addObserver(this),
        this.#n.execute(e)
    }
    #o() {
        const e = this.#n?.state ?? hg();
        this.#t = {
            ...e,
            isPending: e.status === "pending",
            isSuccess: e.status === "success",
            isError: e.status === "error",
            isIdle: e.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }
    #i(e) {
        wt.batch( () => {
            if (this.#r && this.hasListeners()) {
                const s = this.#t.variables
                  , i = this.#t.context;
                e?.type === "success" ? (this.#r.onSuccess?.(e.data, s, i),
                this.#r.onSettled?.(e.data, null, s, i)) : e?.type === "error" && (this.#r.onError?.(e.error, s, i),
                this.#r.onSettled?.(void 0, e.error, s, i))
            }
            this.listeners.forEach(s => {
                s(this.#t)
            }
            )
        }
        )
    }
}
  , mg = w.createContext(void 0)
  , Pd = r => {
    const e = w.useContext(mg);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
  , H0 = ({client: r, children: e}) => (w.useEffect( () => (r.mount(),
() => {
    r.unmount()
}
), [r]),
v.jsx(mg.Provider, {
    value: r,
    children: e
}))
  , gg = w.createContext(!1)
  , W0 = () => w.useContext(gg);
gg.Provider;
function q0() {
    let r = !1;
    return {
        clearReset: () => {
            r = !1
        }
        ,
        reset: () => {
            r = !0
        }
        ,
        isReset: () => r
    }
}
var Z0 = w.createContext(q0())
  , K0 = () => w.useContext(Z0);
function yg(r, e) {
    return typeof r == "function" ? r(...e) : !!r
}
function Jc() {}
var G0 = (r, e) => {
    (r.suspense || r.throwOnError || r.experimental_prefetchInRender) && (e.isReset() || (r.retryOnMount = !1))
}
  , X0 = r => {
    w.useEffect( () => {
        r.clearReset()
    }
    , [r])
}
  , Y0 = ({result: r, errorResetBoundary: e, throwOnError: s, query: i}) => r.isError && !e.isReset() && !r.isFetching && i && yg(s, [r.error, i])
  , J0 = r => {
    r.suspense && (r.staleTime === void 0 && (r.staleTime = 1e3),
    typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3)))
}
  , eb = (r, e) => r.isLoading && r.isFetching && !e
  , tb = (r, e) => r?.suspense && e.isPending
  , am = (r, e, s) => e.fetchOptimistic(r).catch( () => {
    s.clearReset()
}
);
function rb(r, e, s) {
    const i = Pd()
      , a = W0()
      , u = K0()
      , d = i.defaultQueryOptions(r);
    i.getDefaultOptions().queries?._experimental_beforeQuery?.(d),
    d._optimisticResults = a ? "isRestoring" : "optimistic",
    J0(d),
    G0(d, u),
    X0(u);
    const f = !i.getQueryCache().get(d.queryHash)
      , [h] = w.useState( () => new e(i,d))
      , m = h.getOptimisticResult(d);
    if (w.useSyncExternalStore(w.useCallback(g => {
        const x = a ? Jc : h.subscribe(wt.batchCalls(g));
        return h.updateResult(),
        x
    }
    , [h, a]), () => h.getCurrentResult(), () => h.getCurrentResult()),
    w.useEffect( () => {
        h.setOptions(d, {
            listeners: !1
        })
    }
    , [d, h]),
    tb(d, m))
        throw am(d, h, u);
    if (Y0({
        result: m,
        errorResetBoundary: u,
        throwOnError: d.throwOnError,
        query: i.getQueryCache().get(d.queryHash)
    }))
        throw m.error;
    return i.getDefaultOptions().queries?._experimental_afterQuery?.(d, m),
    d.experimental_prefetchInRender && !os && eb(m, a) && (f ? am(d, h, u) : i.getQueryCache().get(d.queryHash)?.promise)?.catch(Jc).finally( () => {
        h.updateResult()
    }
    ),
    d.notifyOnChangeProps ? m : h.trackResult(m)
}
function nb(r, e) {
    return rb(r, B0)
}
function sb(r, e) {
    const s = Pd()
      , [i] = w.useState( () => new Q0(s,r));
    w.useEffect( () => {
        i.setOptions(r)
    }
    , [i, r]);
    const a = w.useSyncExternalStore(w.useCallback(d => i.subscribe(wt.batchCalls(d)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult())
      , u = w.useCallback( (d, f) => {
        i.mutate(d, f).catch(Jc)
    }
    , [i]);
    if (a.error && yg(i.options.throwOnError, [a.error]))
        throw a.error;
    return {
        ...a,
        mutate: u,
        mutateAsync: a.mutate
    }
}
async function ib(r) {
    if (!r.ok) {
        const e = await r.text() || r.statusText;
        throw new Error(`${r.status}: ${e}`)
    }
}
const ob = ({on401: r}) => async ({queryKey: e}) => {
    const s = await fetch(e.join("/"), {
        credentials: "include"
    });
    return await ib(s),
    await s.json()
}
  , ab = new z0({
    defaultOptions: {
        queries: {
            queryFn: ob({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , lb = 1
  , ub = 1e6;
let Pc = 0;
function cb() {
    return Pc = (Pc + 1) % Number.MAX_SAFE_INTEGER,
    Pc.toString()
}
const Nc = new Map
  , lm = r => {
    if (Nc.has(r))
        return;
    const e = setTimeout( () => {
        Nc.delete(r),
        io({
            type: "REMOVE_TOAST",
            toastId: r
        })
    }
    , ub);
    Nc.set(r, e)
}
  , db = (r, e) => {
    switch (e.type) {
    case "ADD_TOAST":
        return {
            ...r,
            toasts: [e.toast, ...r.toasts].slice(0, lb)
        };
    case "UPDATE_TOAST":
        return {
            ...r,
            toasts: r.toasts.map(s => s.id === e.toast.id ? {
                ...s,
                ...e.toast
            } : s)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: s} = e;
            return s ? lm(s) : r.toasts.forEach(i => {
                lm(i.id)
            }
            ),
            {
                ...r,
                toasts: r.toasts.map(i => i.id === s || s === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case "REMOVE_TOAST":
        return e.toastId === void 0 ? {
            ...r,
            toasts: []
        } : {
            ...r,
            toasts: r.toasts.filter(s => s.id !== e.toastId)
        }
    }
}
  , Qa = [];
let Ha = {
    toasts: []
};
function io(r) {
    Ha = db(Ha, r),
    Qa.forEach(e => {
        e(Ha)
    }
    )
}
function fb({...r}) {
    const e = cb()
      , s = a => io({
        type: "UPDATE_TOAST",
        toast: {
            ...a,
            id: e
        }
    })
      , i = () => io({
        type: "DISMISS_TOAST",
        toastId: e
    });
    return io({
        type: "ADD_TOAST",
        toast: {
            ...r,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: s
    }
}
function vg() {
    const [r,e] = w.useState(Ha);
    return w.useEffect( () => (Qa.push(e),
    () => {
        const s = Qa.indexOf(e);
        s > -1 && Qa.splice(s, 1)
    }
    ), [r]),
    {
        ...r,
        toast: fb,
        dismiss: s => io({
            type: "DISMISS_TOAST",
            toastId: s
        })
    }
}
var yl = Km();
const pb = Zm(yl);
function Ze(r, e, {checkForDefaultPrevented: s=!0}={}) {
    return function(a) {
        if (r?.(a),
        s === !1 || !a.defaultPrevented)
            return e?.(a)
    }
}
function um(r, e) {
    if (typeof r == "function")
        return r(e);
    r != null && (r.current = e)
}
function xg(...r) {
    return e => {
        let s = !1;
        const i = r.map(a => {
            const u = um(a, e);
            return !s && typeof u == "function" && (s = !0),
            u
        }
        );
        if (s)
            return () => {
                for (let a = 0; a < i.length; a++) {
                    const u = i[a];
                    typeof u == "function" ? u() : um(r[a], null)
                }
            }
    }
}
function Wt(...r) {
    return w.useCallback(xg(...r), r)
}
function fs(r, e=[]) {
    let s = [];
    function i(u, d) {
        const f = w.createContext(d)
          , h = s.length;
        s = [...s, d];
        const m = x => {
            const {scope: b, children: T, ...R} = x
              , S = b?.[r]?.[h] || f
              , k = w.useMemo( () => R, Object.values(R));
            return v.jsx(S.Provider, {
                value: k,
                children: T
            })
        }
        ;
        m.displayName = u + "Provider";
        function g(x, b) {
            const T = b?.[r]?.[h] || f
              , R = w.useContext(T);
            if (R)
                return R;
            if (d !== void 0)
                return d;
            throw new Error(`\`${x}\` must be used within \`${u}\``)
        }
        return [m, g]
    }
    const a = () => {
        const u = s.map(d => w.createContext(d));
        return function(f) {
            const h = f?.[r] || u;
            return w.useMemo( () => ({
                [`__scope${r}`]: {
                    ...f,
                    [r]: h
                }
            }), [f, h])
        }
    }
    ;
    return a.scopeName = r,
    [i, hb(a, ...e)]
}
function hb(...r) {
    const e = r[0];
    if (r.length === 1)
        return e;
    const s = () => {
        const i = r.map(a => ({
            useScope: a(),
            scopeName: a.scopeName
        }));
        return function(u) {
            const d = i.reduce( (f, {useScope: h, scopeName: m}) => {
                const x = h(u)[`__scope${m}`];
                return {
                    ...f,
                    ...x
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${e.scopeName}`]: d
            }), [d])
        }
    }
    ;
    return s.scopeName = e.scopeName,
    s
}
function Xa(r) {
    const e = mb(r)
      , s = w.forwardRef( (i, a) => {
        const {children: u, ...d} = i
          , f = w.Children.toArray(u)
          , h = f.find(yb);
        if (h) {
            const m = h.props.children
              , g = f.map(x => x === h ? w.Children.count(m) > 1 ? w.Children.only(null) : w.isValidElement(m) ? m.props.children : null : x);
            return v.jsx(e, {
                ...d,
                ref: a,
                children: w.isValidElement(m) ? w.cloneElement(m, void 0, g) : null
            })
        }
        return v.jsx(e, {
            ...d,
            ref: a,
            children: u
        })
    }
    );
    return s.displayName = `${r}.Slot`,
    s
}
var wg = Xa("Slot");
function mb(r) {
    const e = w.forwardRef( (s, i) => {
        const {children: a, ...u} = s;
        if (w.isValidElement(a)) {
            const d = xb(a)
              , f = vb(u, a.props);
            return a.type !== w.Fragment && (f.ref = i ? xg(i, d) : d),
            w.cloneElement(a, f)
        }
        return w.Children.count(a) > 1 ? w.Children.only(null) : null
    }
    );
    return e.displayName = `${r}.SlotClone`,
    e
}
var bg = Symbol("radix.slottable");
function gb(r) {
    const e = ({children: s}) => v.jsx(v.Fragment, {
        children: s
    });
    return e.displayName = `${r}.Slottable`,
    e.__radixId = bg,
    e
}
function yb(r) {
    return w.isValidElement(r) && typeof r.type == "function" && "__radixId"in r.type && r.type.__radixId === bg
}
function vb(r, e) {
    const s = {
        ...e
    };
    for (const i in e) {
        const a = r[i]
          , u = e[i];
        /^on[A-Z]/.test(i) ? a && u ? s[i] = (...f) => {
            u(...f),
            a(...f)
        }
        : a && (s[i] = a) : i === "style" ? s[i] = {
            ...a,
            ...u
        } : i === "className" && (s[i] = [a, u].filter(Boolean).join(" "))
    }
    return {
        ...r,
        ...s
    }
}
function xb(r) {
    let e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get
      , s = e && "isReactWarning"in e && e.isReactWarning;
    return s ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get,
    s = e && "isReactWarning"in e && e.isReactWarning,
    s ? r.props.ref : r.props.ref || r.ref)
}
function _g(r) {
    const e = r + "CollectionProvider"
      , [s,i] = fs(e)
      , [a,u] = s(e, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , d = S => {
        const {scope: k, children: F} = S
          , A = we.useRef(null)
          , B = we.useRef(new Map).current;
        return v.jsx(a, {
            scope: k,
            itemMap: B,
            collectionRef: A,
            children: F
        })
    }
    ;
    d.displayName = e;
    const f = r + "CollectionSlot"
      , h = Xa(f)
      , m = we.forwardRef( (S, k) => {
        const {scope: F, children: A} = S
          , B = u(f, F)
          , U = Wt(k, B.collectionRef);
        return v.jsx(h, {
            ref: U,
            children: A
        })
    }
    );
    m.displayName = f;
    const g = r + "CollectionItemSlot"
      , x = "data-radix-collection-item"
      , b = Xa(g)
      , T = we.forwardRef( (S, k) => {
        const {scope: F, children: A, ...B} = S
          , U = we.useRef(null)
          , Q = Wt(k, U)
          , L = u(g, F);
        return we.useEffect( () => (L.itemMap.set(U, {
            ref: U,
            ...B
        }),
        () => {
            L.itemMap.delete(U)
        }
        )),
        v.jsx(b, {
            [x]: "",
            ref: Q,
            children: A
        })
    }
    );
    T.displayName = g;
    function R(S) {
        const k = u(r + "CollectionConsumer", S);
        return we.useCallback( () => {
            const A = k.collectionRef.current;
            if (!A)
                return [];
            const B = Array.from(A.querySelectorAll(`[${x}]`));
            return Array.from(k.itemMap.values()).sort( (L, M) => B.indexOf(L.ref.current) - B.indexOf(M.ref.current))
        }
        , [k.collectionRef, k.itemMap])
    }
    return [{
        Provider: d,
        Slot: m,
        ItemSlot: T
    }, R, i]
}
var wb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , yt = wb.reduce( (r, e) => {
    const s = Xa(`Primitive.${e}`)
      , i = w.forwardRef( (a, u) => {
        const {asChild: d, ...f} = a
          , h = d ? s : e;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(h, {
            ...f,
            ref: u
        })
    }
    );
    return i.displayName = `Primitive.${e}`,
    {
        ...r,
        [e]: i
    }
}
, {});
function Sg(r, e) {
    r && yl.flushSync( () => r.dispatchEvent(e))
}
function Pr(r) {
    const e = w.useRef(r);
    return w.useEffect( () => {
        e.current = r
    }
    ),
    w.useMemo( () => (...s) => e.current?.(...s), [])
}
function bb(r, e=globalThis?.document) {
    const s = Pr(r);
    w.useEffect( () => {
        const i = a => {
            a.key === "Escape" && s(a)
        }
        ;
        return e.addEventListener("keydown", i, {
            capture: !0
        }),
        () => e.removeEventListener("keydown", i, {
            capture: !0
        })
    }
    , [s, e])
}
var _b = "DismissableLayer", ed = "dismissableLayer.update", Sb = "dismissableLayer.pointerDownOutside", Cb = "dismissableLayer.focusOutside", cm, Cg = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Nd = w.forwardRef( (r, e) => {
    const {disableOutsidePointerEvents: s=!1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: d, onDismiss: f, ...h} = r
      , m = w.useContext(Cg)
      , [g,x] = w.useState(null)
      , b = g?.ownerDocument ?? globalThis?.document
      , [,T] = w.useState({})
      , R = Wt(e, M => x(M))
      , S = Array.from(m.layers)
      , [k] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1)
      , F = S.indexOf(k)
      , A = g ? S.indexOf(g) : -1
      , B = m.layersWithOutsidePointerEventsDisabled.size > 0
      , U = A >= F
      , Q = Eb(M => {
        const q = M.target
          , ie = [...m.branches].some(me => me.contains(q));
        !U || ie || (a?.(M),
        d?.(M),
        M.defaultPrevented || f?.())
    }
    , b)
      , L = Tb(M => {
        const q = M.target;
        [...m.branches].some(me => me.contains(q)) || (u?.(M),
        d?.(M),
        M.defaultPrevented || f?.())
    }
    , b);
    return bb(M => {
        A === m.layers.size - 1 && (i?.(M),
        !M.defaultPrevented && f && (M.preventDefault(),
        f()))
    }
    , b),
    w.useEffect( () => {
        if (g)
            return s && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (cm = b.body.style.pointerEvents,
            b.body.style.pointerEvents = "none"),
            m.layersWithOutsidePointerEventsDisabled.add(g)),
            m.layers.add(g),
            dm(),
            () => {
                s && m.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = cm)
            }
    }
    , [g, b, s, m]),
    w.useEffect( () => () => {
        g && (m.layers.delete(g),
        m.layersWithOutsidePointerEventsDisabled.delete(g),
        dm())
    }
    , [g, m]),
    w.useEffect( () => {
        const M = () => T({});
        return document.addEventListener(ed, M),
        () => document.removeEventListener(ed, M)
    }
    , []),
    v.jsx(yt.div, {
        ...h,
        ref: R,
        style: {
            pointerEvents: B ? U ? "auto" : "none" : void 0,
            ...r.style
        },
        onFocusCapture: Ze(r.onFocusCapture, L.onFocusCapture),
        onBlurCapture: Ze(r.onBlurCapture, L.onBlurCapture),
        onPointerDownCapture: Ze(r.onPointerDownCapture, Q.onPointerDownCapture)
    })
}
);
Nd.displayName = _b;
var kb = "DismissableLayerBranch"
  , kg = w.forwardRef( (r, e) => {
    const s = w.useContext(Cg)
      , i = w.useRef(null)
      , a = Wt(e, i);
    return w.useEffect( () => {
        const u = i.current;
        if (u)
            return s.branches.add(u),
            () => {
                s.branches.delete(u)
            }
    }
    , [s.branches]),
    v.jsx(yt.div, {
        ...r,
        ref: a
    })
}
);
kg.displayName = kb;
function Eb(r, e=globalThis?.document) {
    const s = Pr(r)
      , i = w.useRef(!1)
      , a = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const u = f => {
            if (f.target && !i.current) {
                let h = function() {
                    Eg(Sb, s, m, {
                        discrete: !0
                    })
                };
                const m = {
                    originalEvent: f
                };
                f.pointerType === "touch" ? (e.removeEventListener("click", a.current),
                a.current = h,
                e.addEventListener("click", a.current, {
                    once: !0
                })) : h()
            } else
                e.removeEventListener("click", a.current);
            i.current = !1
        }
          , d = window.setTimeout( () => {
            e.addEventListener("pointerdown", u)
        }
        , 0);
        return () => {
            window.clearTimeout(d),
            e.removeEventListener("pointerdown", u),
            e.removeEventListener("click", a.current)
        }
    }
    , [e, s]),
    {
        onPointerDownCapture: () => i.current = !0
    }
}
function Tb(r, e=globalThis?.document) {
    const s = Pr(r)
      , i = w.useRef(!1);
    return w.useEffect( () => {
        const a = u => {
            u.target && !i.current && Eg(Cb, s, {
                originalEvent: u
            }, {
                discrete: !1
            })
        }
        ;
        return e.addEventListener("focusin", a),
        () => e.removeEventListener("focusin", a)
    }
    , [e, s]),
    {
        onFocusCapture: () => i.current = !0,
        onBlurCapture: () => i.current = !1
    }
}
function dm() {
    const r = new CustomEvent(ed);
    document.dispatchEvent(r)
}
function Eg(r, e, s, {discrete: i}) {
    const a = s.originalEvent.target
      , u = new CustomEvent(r,{
        bubbles: !1,
        cancelable: !0,
        detail: s
    });
    e && a.addEventListener(r, e, {
        once: !0
    }),
    i ? Sg(a, u) : a.dispatchEvent(u)
}
var Pb = Nd
  , Nb = kg
  , Fn = globalThis?.document ? w.useLayoutEffect : () => {}
  , Rb = "Portal"
  , Tg = w.forwardRef( (r, e) => {
    const {container: s, ...i} = r
      , [a,u] = w.useState(!1);
    Fn( () => u(!0), []);
    const d = s || a && globalThis?.document?.body;
    return d ? pb.createPortal(v.jsx(yt.div, {
        ...i,
        ref: e
    }), d) : null
}
);
Tg.displayName = Rb;
function Ab(r, e) {
    return w.useReducer( (s, i) => e[s][i] ?? s, r)
}
var vl = r => {
    const {present: e, children: s} = r
      , i = Ob(e)
      , a = typeof s == "function" ? s({
        present: i.isPresent
    }) : w.Children.only(s)
      , u = Wt(i.ref, Ib(a));
    return typeof s == "function" || i.isPresent ? w.cloneElement(a, {
        ref: u
    }) : null
}
;
vl.displayName = "Presence";
function Ob(r) {
    const [e,s] = w.useState()
      , i = w.useRef({})
      , a = w.useRef(r)
      , u = w.useRef("none")
      , d = r ? "mounted" : "unmounted"
      , [f,h] = Ab(d, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const m = Ba(i.current);
        u.current = f === "mounted" ? m : "none"
    }
    , [f]),
    Fn( () => {
        const m = i.current
          , g = a.current;
        if (g !== r) {
            const b = u.current
              , T = Ba(m);
            r ? h("MOUNT") : T === "none" || m?.display === "none" ? h("UNMOUNT") : h(g && b !== T ? "ANIMATION_OUT" : "UNMOUNT"),
            a.current = r
        }
    }
    , [r, h]),
    Fn( () => {
        if (e) {
            let m;
            const g = e.ownerDocument.defaultView ?? window
              , x = T => {
                const S = Ba(i.current).includes(T.animationName);
                if (T.target === e && S && (h("ANIMATION_END"),
                !a.current)) {
                    const k = e.style.animationFillMode;
                    e.style.animationFillMode = "forwards",
                    m = g.setTimeout( () => {
                        e.style.animationFillMode === "forwards" && (e.style.animationFillMode = k)
                    }
                    )
                }
            }
              , b = T => {
                T.target === e && (u.current = Ba(i.current))
            }
            ;
            return e.addEventListener("animationstart", b),
            e.addEventListener("animationcancel", x),
            e.addEventListener("animationend", x),
            () => {
                g.clearTimeout(m),
                e.removeEventListener("animationstart", b),
                e.removeEventListener("animationcancel", x),
                e.removeEventListener("animationend", x)
            }
        } else
            h("ANIMATION_END")
    }
    , [e, h]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(f),
        ref: w.useCallback(m => {
            m && (i.current = getComputedStyle(m)),
            s(m)
        }
        , [])
    }
}
function Ba(r) {
    return r?.animationName || "none"
}
function Ib(r) {
    let e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get
      , s = e && "isReactWarning"in e && e.isReactWarning;
    return s ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get,
    s = e && "isReactWarning"in e && e.isReactWarning,
    s ? r.props.ref : r.props.ref || r.ref)
}
function Rd({prop: r, defaultProp: e, onChange: s= () => {}
}) {
    const [i,a] = jb({
        defaultProp: e,
        onChange: s
    })
      , u = r !== void 0
      , d = u ? r : i
      , f = Pr(s)
      , h = w.useCallback(m => {
        if (u) {
            const x = typeof m == "function" ? m(r) : m;
            x !== r && f(x)
        } else
            a(m)
    }
    , [u, r, a, f]);
    return [d, h]
}
function jb({defaultProp: r, onChange: e}) {
    const s = w.useState(r)
      , [i] = s
      , a = w.useRef(i)
      , u = Pr(e);
    return w.useEffect( () => {
        a.current !== i && (u(i),
        a.current = i)
    }
    , [i, a, u]),
    s
}
var Db = "VisuallyHidden"
  , xl = w.forwardRef( (r, e) => v.jsx(yt.span, {
    ...r,
    ref: e,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...r.style
    }
}));
xl.displayName = Db;
var Fb = xl
  , Ad = "ToastProvider"
  , [Od,Mb,Lb] = _g("Toast")
  , [Pg] = fs("Toast", [Lb])
  , [Vb,wl] = Pg(Ad)
  , Ng = r => {
    const {__scopeToast: e, label: s="Notification", duration: i=5e3, swipeDirection: a="right", swipeThreshold: u=50, children: d} = r
      , [f,h] = w.useState(null)
      , [m,g] = w.useState(0)
      , x = w.useRef(!1)
      , b = w.useRef(!1);
    return s.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ad}\`. Expected non-empty \`string\`.`),
    v.jsx(Od.Provider, {
        scope: e,
        children: v.jsx(Vb, {
            scope: e,
            label: s,
            duration: i,
            swipeDirection: a,
            swipeThreshold: u,
            toastCount: m,
            viewport: f,
            onViewportChange: h,
            onToastAdd: w.useCallback( () => g(T => T + 1), []),
            onToastRemove: w.useCallback( () => g(T => T - 1), []),
            isFocusedToastEscapeKeyDownRef: x,
            isClosePausedRef: b,
            children: d
        })
    })
}
;
Ng.displayName = Ad;
var Rg = "ToastViewport"
  , zb = ["F8"]
  , td = "toast.viewportPause"
  , rd = "toast.viewportResume"
  , Ag = w.forwardRef( (r, e) => {
    const {__scopeToast: s, hotkey: i=zb, label: a="Notifications ({hotkey})", ...u} = r
      , d = wl(Rg, s)
      , f = Mb(s)
      , h = w.useRef(null)
      , m = w.useRef(null)
      , g = w.useRef(null)
      , x = w.useRef(null)
      , b = Wt(e, x, d.onViewportChange)
      , T = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , R = d.toastCount > 0;
    w.useEffect( () => {
        const k = F => {
            i.length !== 0 && i.every(B => F[B] || F.code === B) && x.current?.focus()
        }
        ;
        return document.addEventListener("keydown", k),
        () => document.removeEventListener("keydown", k)
    }
    , [i]),
    w.useEffect( () => {
        const k = h.current
          , F = x.current;
        if (R && k && F) {
            const A = () => {
                if (!d.isClosePausedRef.current) {
                    const L = new CustomEvent(td);
                    F.dispatchEvent(L),
                    d.isClosePausedRef.current = !0
                }
            }
              , B = () => {
                if (d.isClosePausedRef.current) {
                    const L = new CustomEvent(rd);
                    F.dispatchEvent(L),
                    d.isClosePausedRef.current = !1
                }
            }
              , U = L => {
                !k.contains(L.relatedTarget) && B()
            }
              , Q = () => {
                k.contains(document.activeElement) || B()
            }
            ;
            return k.addEventListener("focusin", A),
            k.addEventListener("focusout", U),
            k.addEventListener("pointermove", A),
            k.addEventListener("pointerleave", Q),
            window.addEventListener("blur", A),
            window.addEventListener("focus", B),
            () => {
                k.removeEventListener("focusin", A),
                k.removeEventListener("focusout", U),
                k.removeEventListener("pointermove", A),
                k.removeEventListener("pointerleave", Q),
                window.removeEventListener("blur", A),
                window.removeEventListener("focus", B)
            }
        }
    }
    , [R, d.isClosePausedRef]);
    const S = w.useCallback( ({tabbingDirection: k}) => {
        const A = f().map(B => {
            const U = B.ref.current
              , Q = [U, ...Jb(U)];
            return k === "forwards" ? Q : Q.reverse()
        }
        );
        return (k === "forwards" ? A.reverse() : A).flat()
    }
    , [f]);
    return w.useEffect( () => {
        const k = x.current;
        if (k) {
            const F = A => {
                const B = A.altKey || A.ctrlKey || A.metaKey;
                if (A.key === "Tab" && !B) {
                    const Q = document.activeElement
                      , L = A.shiftKey;
                    if (A.target === k && L) {
                        m.current?.focus();
                        return
                    }
                    const ie = S({
                        tabbingDirection: L ? "backwards" : "forwards"
                    })
                      , me = ie.findIndex(_e => _e === Q);
                    Rc(ie.slice(me + 1)) ? A.preventDefault() : L ? m.current?.focus() : g.current?.focus()
                }
            }
            ;
            return k.addEventListener("keydown", F),
            () => k.removeEventListener("keydown", F)
        }
    }
    , [f, S]),
    v.jsxs(Nb, {
        ref: h,
        role: "region",
        "aria-label": a.replace("{hotkey}", T),
        tabIndex: -1,
        style: {
            pointerEvents: R ? void 0 : "none"
        },
        children: [R && v.jsx(nd, {
            ref: m,
            onFocusFromOutsideViewport: () => {
                const k = S({
                    tabbingDirection: "forwards"
                });
                Rc(k)
            }
        }), v.jsx(Od.Slot, {
            scope: s,
            children: v.jsx(yt.ol, {
                tabIndex: -1,
                ...u,
                ref: b
            })
        }), R && v.jsx(nd, {
            ref: g,
            onFocusFromOutsideViewport: () => {
                const k = S({
                    tabbingDirection: "backwards"
                });
                Rc(k)
            }
        })]
    })
}
);
Ag.displayName = Rg;
var Og = "ToastFocusProxy"
  , nd = w.forwardRef( (r, e) => {
    const {__scopeToast: s, onFocusFromOutsideViewport: i, ...a} = r
      , u = wl(Og, s);
    return v.jsx(xl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...a,
        ref: e,
        style: {
            position: "fixed"
        },
        onFocus: d => {
            const f = d.relatedTarget;
            !u.viewport?.contains(f) && i()
        }
    })
}
);
nd.displayName = Og;
var bl = "Toast"
  , Bb = "toast.swipeStart"
  , Ub = "toast.swipeMove"
  , $b = "toast.swipeCancel"
  , Qb = "toast.swipeEnd"
  , Ig = w.forwardRef( (r, e) => {
    const {forceMount: s, open: i, defaultOpen: a, onOpenChange: u, ...d} = r
      , [f=!0,h] = Rd({
        prop: i,
        defaultProp: a,
        onChange: u
    });
    return v.jsx(vl, {
        present: s || f,
        children: v.jsx(qb, {
            open: f,
            ...d,
            ref: e,
            onClose: () => h(!1),
            onPause: Pr(r.onPause),
            onResume: Pr(r.onResume),
            onSwipeStart: Ze(r.onSwipeStart, m => {
                m.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Ze(r.onSwipeMove, m => {
                const {x: g, y: x} = m.detail.delta;
                m.currentTarget.setAttribute("data-swipe", "move"),
                m.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${g}px`),
                m.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${x}px`)
            }
            ),
            onSwipeCancel: Ze(r.onSwipeCancel, m => {
                m.currentTarget.setAttribute("data-swipe", "cancel"),
                m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Ze(r.onSwipeEnd, m => {
                const {x: g, y: x} = m.detail.delta;
                m.currentTarget.setAttribute("data-swipe", "end"),
                m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                m.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${g}px`),
                m.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${x}px`),
                h(!1)
            }
            )
        })
    })
}
);
Ig.displayName = bl;
var [Hb,Wb] = Pg(bl, {
    onClose() {}
})
  , qb = w.forwardRef( (r, e) => {
    const {__scopeToast: s, type: i="foreground", duration: a, open: u, onClose: d, onEscapeKeyDown: f, onPause: h, onResume: m, onSwipeStart: g, onSwipeMove: x, onSwipeCancel: b, onSwipeEnd: T, ...R} = r
      , S = wl(bl, s)
      , [k,F] = w.useState(null)
      , A = Wt(e, G => F(G))
      , B = w.useRef(null)
      , U = w.useRef(null)
      , Q = a || S.duration
      , L = w.useRef(0)
      , M = w.useRef(Q)
      , q = w.useRef(0)
      , {onToastAdd: ie, onToastRemove: me} = S
      , _e = Pr( () => {
        k?.contains(document.activeElement) && S.viewport?.focus(),
        d()
    }
    )
      , J = w.useCallback(G => {
        !G || G === 1 / 0 || (window.clearTimeout(q.current),
        L.current = new Date().getTime(),
        q.current = window.setTimeout(_e, G))
    }
    , [_e]);
    w.useEffect( () => {
        const G = S.viewport;
        if (G) {
            const be = () => {
                J(M.current),
                m?.()
            }
              , ce = () => {
                const ye = new Date().getTime() - L.current;
                M.current = M.current - ye,
                window.clearTimeout(q.current),
                h?.()
            }
            ;
            return G.addEventListener(td, ce),
            G.addEventListener(rd, be),
            () => {
                G.removeEventListener(td, ce),
                G.removeEventListener(rd, be)
            }
        }
    }
    , [S.viewport, Q, h, m, J]),
    w.useEffect( () => {
        u && !S.isClosePausedRef.current && J(Q)
    }
    , [u, Q, S.isClosePausedRef, J]),
    w.useEffect( () => (ie(),
    () => me()), [ie, me]);
    const oe = w.useMemo( () => k ? zg(k) : null, [k]);
    return S.viewport ? v.jsxs(v.Fragment, {
        children: [oe && v.jsx(Zb, {
            __scopeToast: s,
            role: "status",
            "aria-live": i === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: oe
        }), v.jsx(Hb, {
            scope: s,
            onClose: _e,
            children: yl.createPortal(v.jsx(Od.ItemSlot, {
                scope: s,
                children: v.jsx(Pb, {
                    asChild: !0,
                    onEscapeKeyDown: Ze(f, () => {
                        S.isFocusedToastEscapeKeyDownRef.current || _e(),
                        S.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: v.jsx(yt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": u ? "open" : "closed",
                        "data-swipe-direction": S.swipeDirection,
                        ...R,
                        ref: A,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...r.style
                        },
                        onKeyDown: Ze(r.onKeyDown, G => {
                            G.key === "Escape" && (f?.(G.nativeEvent),
                            G.nativeEvent.defaultPrevented || (S.isFocusedToastEscapeKeyDownRef.current = !0,
                            _e()))
                        }
                        ),
                        onPointerDown: Ze(r.onPointerDown, G => {
                            G.button === 0 && (B.current = {
                                x: G.clientX,
                                y: G.clientY
                            })
                        }
                        ),
                        onPointerMove: Ze(r.onPointerMove, G => {
                            if (!B.current)
                                return;
                            const be = G.clientX - B.current.x
                              , ce = G.clientY - B.current.y
                              , ye = !!U.current
                              , V = ["left", "right"].includes(S.swipeDirection)
                              , re = ["left", "up"].includes(S.swipeDirection) ? Math.min : Math.max
                              , te = V ? re(0, be) : 0
                              , N = V ? 0 : re(0, ce)
                              , $ = G.pointerType === "touch" ? 10 : 2
                              , ke = {
                                x: te,
                                y: N
                            }
                              , Ne = {
                                originalEvent: G,
                                delta: ke
                            };
                            ye ? (U.current = ke,
                            Ua(Ub, x, Ne, {
                                discrete: !1
                            })) : fm(ke, S.swipeDirection, $) ? (U.current = ke,
                            Ua(Bb, g, Ne, {
                                discrete: !1
                            }),
                            G.target.setPointerCapture(G.pointerId)) : (Math.abs(be) > $ || Math.abs(ce) > $) && (B.current = null)
                        }
                        ),
                        onPointerUp: Ze(r.onPointerUp, G => {
                            const be = U.current
                              , ce = G.target;
                            if (ce.hasPointerCapture(G.pointerId) && ce.releasePointerCapture(G.pointerId),
                            U.current = null,
                            B.current = null,
                            be) {
                                const ye = G.currentTarget
                                  , V = {
                                    originalEvent: G,
                                    delta: be
                                };
                                fm(be, S.swipeDirection, S.swipeThreshold) ? Ua(Qb, T, V, {
                                    discrete: !0
                                }) : Ua($b, b, V, {
                                    discrete: !0
                                }),
                                ye.addEventListener("click", re => re.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), S.viewport)
        })]
    }) : null
}
)
  , Zb = r => {
    const {__scopeToast: e, children: s, ...i} = r
      , a = wl(bl, e)
      , [u,d] = w.useState(!1)
      , [f,h] = w.useState(!1);
    return Xb( () => d(!0)),
    w.useEffect( () => {
        const m = window.setTimeout( () => h(!0), 1e3);
        return () => window.clearTimeout(m)
    }
    , []),
    f ? null : v.jsx(Tg, {
        asChild: !0,
        children: v.jsx(xl, {
            ...i,
            children: u && v.jsxs(v.Fragment, {
                children: [a.label, " ", s]
            })
        })
    })
}
  , Kb = "ToastTitle"
  , jg = w.forwardRef( (r, e) => {
    const {__scopeToast: s, ...i} = r;
    return v.jsx(yt.div, {
        ...i,
        ref: e
    })
}
);
jg.displayName = Kb;
var Gb = "ToastDescription"
  , Dg = w.forwardRef( (r, e) => {
    const {__scopeToast: s, ...i} = r;
    return v.jsx(yt.div, {
        ...i,
        ref: e
    })
}
);
Dg.displayName = Gb;
var Fg = "ToastAction"
  , Mg = w.forwardRef( (r, e) => {
    const {altText: s, ...i} = r;
    return s.trim() ? v.jsx(Vg, {
        altText: s,
        asChild: !0,
        children: v.jsx(Id, {
            ...i,
            ref: e
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Fg}\`. Expected non-empty \`string\`.`),
    null)
}
);
Mg.displayName = Fg;
var Lg = "ToastClose"
  , Id = w.forwardRef( (r, e) => {
    const {__scopeToast: s, ...i} = r
      , a = Wb(Lg, s);
    return v.jsx(Vg, {
        asChild: !0,
        children: v.jsx(yt.button, {
            type: "button",
            ...i,
            ref: e,
            onClick: Ze(r.onClick, a.onClose)
        })
    })
}
);
Id.displayName = Lg;
var Vg = w.forwardRef( (r, e) => {
    const {__scopeToast: s, altText: i, ...a} = r;
    return v.jsx(yt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": i || void 0,
        ...a,
        ref: e
    })
}
);
function zg(r) {
    const e = [];
    return Array.from(r.childNodes).forEach(i => {
        if (i.nodeType === i.TEXT_NODE && i.textContent && e.push(i.textContent),
        Yb(i)) {
            const a = i.ariaHidden || i.hidden || i.style.display === "none"
              , u = i.dataset.radixToastAnnounceExclude === "";
            if (!a)
                if (u) {
                    const d = i.dataset.radixToastAnnounceAlt;
                    d && e.push(d)
                } else
                    e.push(...zg(i))
        }
    }
    ),
    e
}
function Ua(r, e, s, {discrete: i}) {
    const a = s.originalEvent.currentTarget
      , u = new CustomEvent(r,{
        bubbles: !0,
        cancelable: !0,
        detail: s
    });
    e && a.addEventListener(r, e, {
        once: !0
    }),
    i ? Sg(a, u) : a.dispatchEvent(u)
}
var fm = (r, e, s=0) => {
    const i = Math.abs(r.x)
      , a = Math.abs(r.y)
      , u = i > a;
    return e === "left" || e === "right" ? u && i > s : !u && a > s
}
;
function Xb(r= () => {}
) {
    const e = Pr(r);
    Fn( () => {
        let s = 0
          , i = 0;
        return s = window.requestAnimationFrame( () => i = window.requestAnimationFrame(e)),
        () => {
            window.cancelAnimationFrame(s),
            window.cancelAnimationFrame(i)
        }
    }
    , [e])
}
function Yb(r) {
    return r.nodeType === r.ELEMENT_NODE
}
function Jb(r) {
    const e = []
      , s = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
        acceptNode: i => {
            const a = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; s.nextNode(); )
        e.push(s.currentNode);
    return e
}
function Rc(r) {
    const e = document.activeElement;
    return r.some(s => s === e ? !0 : (s.focus(),
    document.activeElement !== e))
}
var e_ = Ng
  , Bg = Ag
  , Ug = Ig
  , $g = jg
  , Qg = Dg
  , Hg = Mg
  , Wg = Id;
function qg(r) {
    var e, s, i = "";
    if (typeof r == "string" || typeof r == "number")
        i += r;
    else if (typeof r == "object")
        if (Array.isArray(r)) {
            var a = r.length;
            for (e = 0; e < a; e++)
                r[e] && (s = qg(r[e])) && (i && (i += " "),
                i += s)
        } else
            for (s in r)
                r[s] && (i && (i += " "),
                i += s);
    return i
}
function Zg() {
    for (var r, e, s = 0, i = "", a = arguments.length; s < a; s++)
        (r = arguments[s]) && (e = qg(r)) && (i && (i += " "),
        i += e);
    return i
}
const pm = r => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r
  , hm = Zg
  , _l = (r, e) => s => {
    var i;
    if (e?.variants == null)
        return hm(r, s?.class, s?.className);
    const {variants: a, defaultVariants: u} = e
      , d = Object.keys(a).map(m => {
        const g = s?.[m]
          , x = u?.[m];
        if (g === null)
            return null;
        const b = pm(g) || pm(x);
        return a[m][b]
    }
    )
      , f = s && Object.entries(s).reduce( (m, g) => {
        let[x,b] = g;
        return b === void 0 || (m[x] = b),
        m
    }
    , {})
      , h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (m, g) => {
        let {class: x, className: b, ...T} = g;
        return Object.entries(T).every(R => {
            let[S,k] = R;
            return Array.isArray(k) ? k.includes({
                ...u,
                ...f
            }[S]) : {
                ...u,
                ...f
            }[S] === k
        }
        ) ? [...m, x, b] : m
    }
    , []);
    return hm(r, d, h, s?.class, s?.className)
}
;
const t_ = r => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Kg = (...r) => r.filter( (e, s, i) => !!e && i.indexOf(e) === s).join(" ");
var r_ = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const n_ = w.forwardRef( ({color: r="currentColor", size: e=24, strokeWidth: s=2, absoluteStrokeWidth: i, className: a="", children: u, iconNode: d, ...f}, h) => w.createElement("svg", {
    ref: h,
    ...r_,
    width: e,
    height: e,
    stroke: r,
    strokeWidth: i ? Number(s) * 24 / Number(e) : s,
    className: Kg("lucide", a),
    ...f
}, [...d.map( ([m,g]) => w.createElement(m, g)), ...Array.isArray(u) ? u : [u]]));
const Or = (r, e) => {
    const s = w.forwardRef( ({className: i, ...a}, u) => w.createElement(n_, {
        ref: u,
        iconNode: e,
        className: Kg(`lucide-${t_(r)}`, i),
        ...a
    }));
    return s.displayName = `${r}`,
    s
}
;
const Gg = Or("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
const s_ = Or("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
const i_ = Or("CircleX", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "m9 9 6 6",
    key: "z0biqf"
}]]);
const o_ = Or("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
const mm = Or("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
const a_ = Or("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
const l_ = Or("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
const u_ = Or("Printer", [["path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
    key: "143wyd"
}], ["path", {
    d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
    key: "1itne7"
}], ["rect", {
    x: "6",
    y: "14",
    width: "12",
    height: "8",
    rx: "1",
    key: "1ue0tg"
}]]);
const c_ = Or("Save", [["path", {
    d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
    key: "1c8476"
}], ["path", {
    d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
    key: "1ydtos"
}], ["path", {
    d: "M7 3v4a1 1 0 0 0 1 1h7",
    key: "t51u73"
}]]);
const d_ = Or("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
const f_ = Or("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , jd = "-"
  , p_ = r => {
    const e = m_(r)
      , {conflictingClassGroups: s, conflictingClassGroupModifiers: i} = r;
    return {
        getClassGroupId: d => {
            const f = d.split(jd);
            return f[0] === "" && f.length !== 1 && f.shift(),
            Xg(f, e) || h_(d)
        }
        ,
        getConflictingClassGroupIds: (d, f) => {
            const h = s[d] || [];
            return f && i[d] ? [...h, ...i[d]] : h
        }
    }
}
  , Xg = (r, e) => {
    if (r.length === 0)
        return e.classGroupId;
    const s = r[0]
      , i = e.nextPart.get(s)
      , a = i ? Xg(r.slice(1), i) : void 0;
    if (a)
        return a;
    if (e.validators.length === 0)
        return;
    const u = r.join(jd);
    return e.validators.find( ({validator: d}) => d(u))?.classGroupId
}
  , gm = /^\[(.+)\]$/
  , h_ = r => {
    if (gm.test(r)) {
        const e = gm.exec(r)[1]
          , s = e?.substring(0, e.indexOf(":"));
        if (s)
            return "arbitrary.." + s
    }
}
  , m_ = r => {
    const {theme: e, prefix: s} = r
      , i = {
        nextPart: new Map,
        validators: []
    };
    return y_(Object.entries(r.classGroups), s).forEach( ([u,d]) => {
        sd(d, i, u, e)
    }
    ),
    i
}
  , sd = (r, e, s, i) => {
    r.forEach(a => {
        if (typeof a == "string") {
            const u = a === "" ? e : ym(e, a);
            u.classGroupId = s;
            return
        }
        if (typeof a == "function") {
            if (g_(a)) {
                sd(a(i), e, s, i);
                return
            }
            e.validators.push({
                validator: a,
                classGroupId: s
            });
            return
        }
        Object.entries(a).forEach( ([u,d]) => {
            sd(d, ym(e, u), s, i)
        }
        )
    }
    )
}
  , ym = (r, e) => {
    let s = r;
    return e.split(jd).forEach(i => {
        s.nextPart.has(i) || s.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        s = s.nextPart.get(i)
    }
    ),
    s
}
  , g_ = r => r.isThemeGetter
  , y_ = (r, e) => e ? r.map( ([s,i]) => {
    const a = i.map(u => typeof u == "string" ? e + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map( ([d,f]) => [e + d, f])) : u);
    return [s, a]
}
) : r
  , v_ = r => {
    if (r < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , s = new Map
      , i = new Map;
    const a = (u, d) => {
        s.set(u, d),
        e++,
        e > r && (e = 0,
        i = s,
        s = new Map)
    }
    ;
    return {
        get(u) {
            let d = s.get(u);
            if (d !== void 0)
                return d;
            if ((d = i.get(u)) !== void 0)
                return a(u, d),
                d
        },
        set(u, d) {
            s.has(u) ? s.set(u, d) : a(u, d)
        }
    }
}
  , Yg = "!"
  , x_ = r => {
    const {separator: e, experimentalParseClassName: s} = r
      , i = e.length === 1
      , a = e[0]
      , u = e.length
      , d = f => {
        const h = [];
        let m = 0, g = 0, x;
        for (let k = 0; k < f.length; k++) {
            let F = f[k];
            if (m === 0) {
                if (F === a && (i || f.slice(k, k + u) === e)) {
                    h.push(f.slice(g, k)),
                    g = k + u;
                    continue
                }
                if (F === "/") {
                    x = k;
                    continue
                }
            }
            F === "[" ? m++ : F === "]" && m--
        }
        const b = h.length === 0 ? f : f.substring(g)
          , T = b.startsWith(Yg)
          , R = T ? b.substring(1) : b
          , S = x && x > g ? x - g : void 0;
        return {
            modifiers: h,
            hasImportantModifier: T,
            baseClassName: R,
            maybePostfixModifierPosition: S
        }
    }
    ;
    return s ? f => s({
        className: f,
        parseClassName: d
    }) : d
}
  , w_ = r => {
    if (r.length <= 1)
        return r;
    const e = [];
    let s = [];
    return r.forEach(i => {
        i[0] === "[" ? (e.push(...s.sort(), i),
        s = []) : s.push(i)
    }
    ),
    e.push(...s.sort()),
    e
}
  , b_ = r => ({
    cache: v_(r.cacheSize),
    parseClassName: x_(r),
    ...p_(r)
})
  , __ = /\s+/
  , S_ = (r, e) => {
    const {parseClassName: s, getClassGroupId: i, getConflictingClassGroupIds: a} = e
      , u = []
      , d = r.trim().split(__);
    let f = "";
    for (let h = d.length - 1; h >= 0; h -= 1) {
        const m = d[h]
          , {modifiers: g, hasImportantModifier: x, baseClassName: b, maybePostfixModifierPosition: T} = s(m);
        let R = !!T
          , S = i(R ? b.substring(0, T) : b);
        if (!S) {
            if (!R) {
                f = m + (f.length > 0 ? " " + f : f);
                continue
            }
            if (S = i(b),
            !S) {
                f = m + (f.length > 0 ? " " + f : f);
                continue
            }
            R = !1
        }
        const k = w_(g).join(":")
          , F = x ? k + Yg : k
          , A = F + S;
        if (u.includes(A))
            continue;
        u.push(A);
        const B = a(S, R);
        for (let U = 0; U < B.length; ++U) {
            const Q = B[U];
            u.push(F + Q)
        }
        f = m + (f.length > 0 ? " " + f : f)
    }
    return f
}
;
function C_() {
    let r = 0, e, s, i = "";
    for (; r < arguments.length; )
        (e = arguments[r++]) && (s = Jg(e)) && (i && (i += " "),
        i += s);
    return i
}
const Jg = r => {
    if (typeof r == "string")
        return r;
    let e, s = "";
    for (let i = 0; i < r.length; i++)
        r[i] && (e = Jg(r[i])) && (s && (s += " "),
        s += e);
    return s
}
;
function k_(r, ...e) {
    let s, i, a, u = d;
    function d(h) {
        const m = e.reduce( (g, x) => x(g), r());
        return s = b_(m),
        i = s.cache.get,
        a = s.cache.set,
        u = f,
        f(h)
    }
    function f(h) {
        const m = i(h);
        if (m)
            return m;
        const g = S_(h, s);
        return a(h, g),
        g
    }
    return function() {
        return u(C_.apply(null, arguments))
    }
}
const Je = r => {
    const e = s => s[r] || [];
    return e.isThemeGetter = !0,
    e
}
  , ey = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , E_ = /^\d+\/\d+$/
  , T_ = new Set(["px", "full", "screen"])
  , P_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , N_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , R_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , A_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , O_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , rn = r => Gs(r) || T_.has(r) || E_.test(r)
  , Rn = r => li(r, "length", z_)
  , Gs = r => !!r && !Number.isNaN(Number(r))
  , Ac = r => li(r, "number", Gs)
  , Xi = r => !!r && Number.isInteger(Number(r))
  , I_ = r => r.endsWith("%") && Gs(r.slice(0, -1))
  , Ae = r => ey.test(r)
  , An = r => P_.test(r)
  , j_ = new Set(["length", "size", "percentage"])
  , D_ = r => li(r, j_, ty)
  , F_ = r => li(r, "position", ty)
  , M_ = new Set(["image", "url"])
  , L_ = r => li(r, M_, U_)
  , V_ = r => li(r, "", B_)
  , Yi = () => !0
  , li = (r, e, s) => {
    const i = ey.exec(r);
    return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : s(i[2]) : !1
}
  , z_ = r => N_.test(r) && !R_.test(r)
  , ty = () => !1
  , B_ = r => A_.test(r)
  , U_ = r => O_.test(r)
  , $_ = () => {
    const r = Je("colors")
      , e = Je("spacing")
      , s = Je("blur")
      , i = Je("brightness")
      , a = Je("borderColor")
      , u = Je("borderRadius")
      , d = Je("borderSpacing")
      , f = Je("borderWidth")
      , h = Je("contrast")
      , m = Je("grayscale")
      , g = Je("hueRotate")
      , x = Je("invert")
      , b = Je("gap")
      , T = Je("gradientColorStops")
      , R = Je("gradientColorStopPositions")
      , S = Je("inset")
      , k = Je("margin")
      , F = Je("opacity")
      , A = Je("padding")
      , B = Je("saturate")
      , U = Je("scale")
      , Q = Je("sepia")
      , L = Je("skew")
      , M = Je("space")
      , q = Je("translate")
      , ie = () => ["auto", "contain", "none"]
      , me = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , _e = () => ["auto", Ae, e]
      , J = () => [Ae, e]
      , oe = () => ["", rn, Rn]
      , G = () => ["auto", Gs, Ae]
      , be = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , ce = () => ["solid", "dashed", "dotted", "double", "none"]
      , ye = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , re = () => ["", "0", Ae]
      , te = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , N = () => [Gs, Ae];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Yi],
            spacing: [rn, Rn],
            blur: ["none", "", An, Ae],
            brightness: N(),
            borderColor: [r],
            borderRadius: ["none", "", "full", An, Ae],
            borderSpacing: J(),
            borderWidth: oe(),
            contrast: N(),
            grayscale: re(),
            hueRotate: N(),
            invert: re(),
            gap: J(),
            gradientColorStops: [r],
            gradientColorStopPositions: [I_, Rn],
            inset: _e(),
            margin: _e(),
            opacity: N(),
            padding: J(),
            saturate: N(),
            scale: N(),
            sepia: re(),
            skew: N(),
            space: J(),
            translate: J()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Ae]
            }],
            container: ["container"],
            columns: [{
                columns: [An]
            }],
            "break-after": [{
                "break-after": te()
            }],
            "break-before": [{
                "break-before": te()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...be(), Ae]
            }],
            overflow: [{
                overflow: me()
            }],
            "overflow-x": [{
                "overflow-x": me()
            }],
            "overflow-y": [{
                "overflow-y": me()
            }],
            overscroll: [{
                overscroll: ie()
            }],
            "overscroll-x": [{
                "overscroll-x": ie()
            }],
            "overscroll-y": [{
                "overscroll-y": ie()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [S]
            }],
            "inset-x": [{
                "inset-x": [S]
            }],
            "inset-y": [{
                "inset-y": [S]
            }],
            start: [{
                start: [S]
            }],
            end: [{
                end: [S]
            }],
            top: [{
                top: [S]
            }],
            right: [{
                right: [S]
            }],
            bottom: [{
                bottom: [S]
            }],
            left: [{
                left: [S]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Xi, Ae]
            }],
            basis: [{
                basis: _e()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Ae]
            }],
            grow: [{
                grow: re()
            }],
            shrink: [{
                shrink: re()
            }],
            order: [{
                order: ["first", "last", "none", Xi, Ae]
            }],
            "grid-cols": [{
                "grid-cols": [Yi]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Xi, Ae]
                }, Ae]
            }],
            "col-start": [{
                "col-start": G()
            }],
            "col-end": [{
                "col-end": G()
            }],
            "grid-rows": [{
                "grid-rows": [Yi]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Xi, Ae]
                }, Ae]
            }],
            "row-start": [{
                "row-start": G()
            }],
            "row-end": [{
                "row-end": G()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Ae]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Ae]
            }],
            gap: [{
                gap: [b]
            }],
            "gap-x": [{
                "gap-x": [b]
            }],
            "gap-y": [{
                "gap-y": [b]
            }],
            "justify-content": [{
                justify: ["normal", ...V()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...V(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...V(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [A]
            }],
            px: [{
                px: [A]
            }],
            py: [{
                py: [A]
            }],
            ps: [{
                ps: [A]
            }],
            pe: [{
                pe: [A]
            }],
            pt: [{
                pt: [A]
            }],
            pr: [{
                pr: [A]
            }],
            pb: [{
                pb: [A]
            }],
            pl: [{
                pl: [A]
            }],
            m: [{
                m: [k]
            }],
            mx: [{
                mx: [k]
            }],
            my: [{
                my: [k]
            }],
            ms: [{
                ms: [k]
            }],
            me: [{
                me: [k]
            }],
            mt: [{
                mt: [k]
            }],
            mr: [{
                mr: [k]
            }],
            mb: [{
                mb: [k]
            }],
            ml: [{
                ml: [k]
            }],
            "space-x": [{
                "space-x": [M]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [M]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ae, e]
            }],
            "min-w": [{
                "min-w": [Ae, e, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Ae, e, "none", "full", "min", "max", "fit", "prose", {
                    screen: [An]
                }, An]
            }],
            h: [{
                h: [Ae, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Ae, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Ae, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Ae, e, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", An, Rn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ac]
            }],
            "font-family": [{
                font: [Yi]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ae]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Gs, Ac]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", rn, Ae]
            }],
            "list-image": [{
                "list-image": ["none", Ae]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Ae]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [r]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [F]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [r]
            }],
            "text-opacity": [{
                "text-opacity": [F]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ce(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", rn, Rn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", rn, Ae]
            }],
            "text-decoration-color": [{
                decoration: [r]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: J()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ae]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Ae]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [F]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...be(), F_]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", D_]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, L_]
            }],
            "bg-color": [{
                bg: [r]
            }],
            "gradient-from-pos": [{
                from: [R]
            }],
            "gradient-via-pos": [{
                via: [R]
            }],
            "gradient-to-pos": [{
                to: [R]
            }],
            "gradient-from": [{
                from: [T]
            }],
            "gradient-via": [{
                via: [T]
            }],
            "gradient-to": [{
                to: [T]
            }],
            rounded: [{
                rounded: [u]
            }],
            "rounded-s": [{
                "rounded-s": [u]
            }],
            "rounded-e": [{
                "rounded-e": [u]
            }],
            "rounded-t": [{
                "rounded-t": [u]
            }],
            "rounded-r": [{
                "rounded-r": [u]
            }],
            "rounded-b": [{
                "rounded-b": [u]
            }],
            "rounded-l": [{
                "rounded-l": [u]
            }],
            "rounded-ss": [{
                "rounded-ss": [u]
            }],
            "rounded-se": [{
                "rounded-se": [u]
            }],
            "rounded-ee": [{
                "rounded-ee": [u]
            }],
            "rounded-es": [{
                "rounded-es": [u]
            }],
            "rounded-tl": [{
                "rounded-tl": [u]
            }],
            "rounded-tr": [{
                "rounded-tr": [u]
            }],
            "rounded-br": [{
                "rounded-br": [u]
            }],
            "rounded-bl": [{
                "rounded-bl": [u]
            }],
            "border-w": [{
                border: [f]
            }],
            "border-w-x": [{
                "border-x": [f]
            }],
            "border-w-y": [{
                "border-y": [f]
            }],
            "border-w-s": [{
                "border-s": [f]
            }],
            "border-w-e": [{
                "border-e": [f]
            }],
            "border-w-t": [{
                "border-t": [f]
            }],
            "border-w-r": [{
                "border-r": [f]
            }],
            "border-w-b": [{
                "border-b": [f]
            }],
            "border-w-l": [{
                "border-l": [f]
            }],
            "border-opacity": [{
                "border-opacity": [F]
            }],
            "border-style": [{
                border: [...ce(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [f]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [f]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [F]
            }],
            "divide-style": [{
                divide: ce()
            }],
            "border-color": [{
                border: [a]
            }],
            "border-color-x": [{
                "border-x": [a]
            }],
            "border-color-y": [{
                "border-y": [a]
            }],
            "border-color-s": [{
                "border-s": [a]
            }],
            "border-color-e": [{
                "border-e": [a]
            }],
            "border-color-t": [{
                "border-t": [a]
            }],
            "border-color-r": [{
                "border-r": [a]
            }],
            "border-color-b": [{
                "border-b": [a]
            }],
            "border-color-l": [{
                "border-l": [a]
            }],
            "divide-color": [{
                divide: [a]
            }],
            "outline-style": [{
                outline: ["", ...ce()]
            }],
            "outline-offset": [{
                "outline-offset": [rn, Ae]
            }],
            "outline-w": [{
                outline: [rn, Rn]
            }],
            "outline-color": [{
                outline: [r]
            }],
            "ring-w": [{
                ring: oe()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [r]
            }],
            "ring-opacity": [{
                "ring-opacity": [F]
            }],
            "ring-offset-w": [{
                "ring-offset": [rn, Rn]
            }],
            "ring-offset-color": [{
                "ring-offset": [r]
            }],
            shadow: [{
                shadow: ["", "inner", "none", An, V_]
            }],
            "shadow-color": [{
                shadow: [Yi]
            }],
            opacity: [{
                opacity: [F]
            }],
            "mix-blend": [{
                "mix-blend": [...ye(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": ye()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [s]
            }],
            brightness: [{
                brightness: [i]
            }],
            contrast: [{
                contrast: [h]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", An, Ae]
            }],
            grayscale: [{
                grayscale: [m]
            }],
            "hue-rotate": [{
                "hue-rotate": [g]
            }],
            invert: [{
                invert: [x]
            }],
            saturate: [{
                saturate: [B]
            }],
            sepia: [{
                sepia: [Q]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [s]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [h]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [m]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [g]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [x]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [F]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [B]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [Q]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [d]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [d]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [d]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ae]
            }],
            duration: [{
                duration: N()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Ae]
            }],
            delay: [{
                delay: N()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Ae]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [U]
            }],
            "scale-x": [{
                "scale-x": [U]
            }],
            "scale-y": [{
                "scale-y": [U]
            }],
            rotate: [{
                rotate: [Xi, Ae]
            }],
            "translate-x": [{
                "translate-x": [q]
            }],
            "translate-y": [{
                "translate-y": [q]
            }],
            "skew-x": [{
                "skew-x": [L]
            }],
            "skew-y": [{
                "skew-y": [L]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ae]
            }],
            accent: [{
                accent: ["auto", r]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ae]
            }],
            "caret-color": [{
                caret: [r]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": J()
            }],
            "scroll-mx": [{
                "scroll-mx": J()
            }],
            "scroll-my": [{
                "scroll-my": J()
            }],
            "scroll-ms": [{
                "scroll-ms": J()
            }],
            "scroll-me": [{
                "scroll-me": J()
            }],
            "scroll-mt": [{
                "scroll-mt": J()
            }],
            "scroll-mr": [{
                "scroll-mr": J()
            }],
            "scroll-mb": [{
                "scroll-mb": J()
            }],
            "scroll-ml": [{
                "scroll-ml": J()
            }],
            "scroll-p": [{
                "scroll-p": J()
            }],
            "scroll-px": [{
                "scroll-px": J()
            }],
            "scroll-py": [{
                "scroll-py": J()
            }],
            "scroll-ps": [{
                "scroll-ps": J()
            }],
            "scroll-pe": [{
                "scroll-pe": J()
            }],
            "scroll-pt": [{
                "scroll-pt": J()
            }],
            "scroll-pr": [{
                "scroll-pr": J()
            }],
            "scroll-pb": [{
                "scroll-pb": J()
            }],
            "scroll-pl": [{
                "scroll-pl": J()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Ae]
            }],
            fill: [{
                fill: [r, "none"]
            }],
            "stroke-w": [{
                stroke: [rn, Rn, Ac]
            }],
            stroke: [{
                stroke: [r, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Q_ = k_($_);
function He(...r) {
    return Q_(Zg(r))
}
const H_ = e_
  , ry = w.forwardRef( ({className: r, ...e}, s) => v.jsx(Bg, {
    ref: s,
    className: He("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", r),
    ...e
}));
ry.displayName = Bg.displayName;
const W_ = _l("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , ny = w.forwardRef( ({className: r, variant: e, ...s}, i) => v.jsx(Ug, {
    ref: i,
    className: He(W_({
        variant: e
    }), r),
    ...s
}));
ny.displayName = Ug.displayName;
const q_ = w.forwardRef( ({className: r, ...e}, s) => v.jsx(Hg, {
    ref: s,
    className: He("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", r),
    ...e
}));
q_.displayName = Hg.displayName;
const sy = w.forwardRef( ({className: r, ...e}, s) => v.jsx(Wg, {
    ref: s,
    className: He("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", r),
    "toast-close": "",
    ...e,
    children: v.jsx(f_, {
        className: "h-4 w-4"
    })
}));
sy.displayName = Wg.displayName;
const iy = w.forwardRef( ({className: r, ...e}, s) => v.jsx($g, {
    ref: s,
    className: He("text-sm font-semibold", r),
    ...e
}));
iy.displayName = $g.displayName;
const oy = w.forwardRef( ({className: r, ...e}, s) => v.jsx(Qg, {
    ref: s,
    className: He("text-sm opacity-90", r),
    ...e
}));
oy.displayName = Qg.displayName;
function Z_() {
    const {toasts: r} = vg();
    return v.jsxs(H_, {
        children: [r.map(function({id: e, title: s, description: i, action: a, ...u}) {
            return v.jsxs(ny, {
                ...u,
                children: [v.jsxs("div", {
                    className: "grid gap-1",
                    children: [s && v.jsx(iy, {
                        children: s
                    }), i && v.jsx(oy, {
                        children: i
                    })]
                }), a, v.jsx(sy, {})]
            }, e)
        }), v.jsx(ry, {})]
    })
}
var K_ = Gm[" useId ".trim().toString()] || ( () => {}
)
  , G_ = 0;
function X_(r) {
    const [e,s] = w.useState(K_());
    return Fn( () => {
        s(i => i ?? String(G_++))
    }
    , [r]),
    e ? `radix-${e}` : ""
}
const Y_ = ["top", "right", "bottom", "left"]
  , Mn = Math.min
  , Jt = Math.max
  , Ya = Math.round
  , $a = Math.floor
  , Br = r => ({
    x: r,
    y: r
})
  , J_ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , eS = {
    start: "end",
    end: "start"
};
function id(r, e, s) {
    return Jt(r, Mn(e, s))
}
function ln(r, e) {
    return typeof r == "function" ? r(e) : r
}
function un(r) {
    return r.split("-")[0]
}
function ui(r) {
    return r.split("-")[1]
}
function Dd(r) {
    return r === "x" ? "y" : "x"
}
function Fd(r) {
    return r === "y" ? "height" : "width"
}
function Ln(r) {
    return ["top", "bottom"].includes(un(r)) ? "y" : "x"
}
function Md(r) {
    return Dd(Ln(r))
}
function tS(r, e, s) {
    s === void 0 && (s = !1);
    const i = ui(r)
      , a = Md(r)
      , u = Fd(a);
    let d = a === "x" ? i === (s ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[u] > e.floating[u] && (d = Ja(d)),
    [d, Ja(d)]
}
function rS(r) {
    const e = Ja(r);
    return [od(r), e, od(e)]
}
function od(r) {
    return r.replace(/start|end/g, e => eS[e])
}
function nS(r, e, s) {
    const i = ["left", "right"]
      , a = ["right", "left"]
      , u = ["top", "bottom"]
      , d = ["bottom", "top"];
    switch (r) {
    case "top":
    case "bottom":
        return s ? e ? a : i : e ? i : a;
    case "left":
    case "right":
        return e ? u : d;
    default:
        return []
    }
}
function sS(r, e, s, i) {
    const a = ui(r);
    let u = nS(un(r), s === "start", i);
    return a && (u = u.map(d => d + "-" + a),
    e && (u = u.concat(u.map(od)))),
    u
}
function Ja(r) {
    return r.replace(/left|right|bottom|top/g, e => J_[e])
}
function iS(r) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...r
    }
}
function ay(r) {
    return typeof r != "number" ? iS(r) : {
        top: r,
        right: r,
        bottom: r,
        left: r
    }
}
function el(r) {
    const {x: e, y: s, width: i, height: a} = r;
    return {
        width: i,
        height: a,
        top: s,
        left: e,
        right: e + i,
        bottom: s + a,
        x: e,
        y: s
    }
}
function vm(r, e, s) {
    let {reference: i, floating: a} = r;
    const u = Ln(e)
      , d = Md(e)
      , f = Fd(d)
      , h = un(e)
      , m = u === "y"
      , g = i.x + i.width / 2 - a.width / 2
      , x = i.y + i.height / 2 - a.height / 2
      , b = i[f] / 2 - a[f] / 2;
    let T;
    switch (h) {
    case "top":
        T = {
            x: g,
            y: i.y - a.height
        };
        break;
    case "bottom":
        T = {
            x: g,
            y: i.y + i.height
        };
        break;
    case "right":
        T = {
            x: i.x + i.width,
            y: x
        };
        break;
    case "left":
        T = {
            x: i.x - a.width,
            y: x
        };
        break;
    default:
        T = {
            x: i.x,
            y: i.y
        }
    }
    switch (ui(e)) {
    case "start":
        T[d] -= b * (s && m ? -1 : 1);
        break;
    case "end":
        T[d] += b * (s && m ? -1 : 1);
        break
    }
    return T
}
const oS = async (r, e, s) => {
    const {placement: i="bottom", strategy: a="absolute", middleware: u=[], platform: d} = s
      , f = u.filter(Boolean)
      , h = await (d.isRTL == null ? void 0 : d.isRTL(e));
    let m = await d.getElementRects({
        reference: r,
        floating: e,
        strategy: a
    })
      , {x: g, y: x} = vm(m, i, h)
      , b = i
      , T = {}
      , R = 0;
    for (let S = 0; S < f.length; S++) {
        const {name: k, fn: F} = f[S]
          , {x: A, y: B, data: U, reset: Q} = await F({
            x: g,
            y: x,
            initialPlacement: i,
            placement: b,
            strategy: a,
            middlewareData: T,
            rects: m,
            platform: d,
            elements: {
                reference: r,
                floating: e
            }
        });
        g = A ?? g,
        x = B ?? x,
        T = {
            ...T,
            [k]: {
                ...T[k],
                ...U
            }
        },
        Q && R <= 50 && (R++,
        typeof Q == "object" && (Q.placement && (b = Q.placement),
        Q.rects && (m = Q.rects === !0 ? await d.getElementRects({
            reference: r,
            floating: e,
            strategy: a
        }) : Q.rects),
        {x: g, y: x} = vm(m, b, h)),
        S = -1)
    }
    return {
        x: g,
        y: x,
        placement: b,
        strategy: a,
        middlewareData: T
    }
}
;
async function ao(r, e) {
    var s;
    e === void 0 && (e = {});
    const {x: i, y: a, platform: u, rects: d, elements: f, strategy: h} = r
      , {boundary: m="clippingAncestors", rootBoundary: g="viewport", elementContext: x="floating", altBoundary: b=!1, padding: T=0} = ln(e, r)
      , R = ay(T)
      , k = f[b ? x === "floating" ? "reference" : "floating" : x]
      , F = el(await u.getClippingRect({
        element: (s = await (u.isElement == null ? void 0 : u.isElement(k))) == null || s ? k : k.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(f.floating)),
        boundary: m,
        rootBoundary: g,
        strategy: h
    }))
      , A = x === "floating" ? {
        x: i,
        y: a,
        width: d.floating.width,
        height: d.floating.height
    } : d.reference
      , B = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(f.floating))
      , U = await (u.isElement == null ? void 0 : u.isElement(B)) ? await (u.getScale == null ? void 0 : u.getScale(B)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , Q = el(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: f,
        rect: A,
        offsetParent: B,
        strategy: h
    }) : A);
    return {
        top: (F.top - Q.top + R.top) / U.y,
        bottom: (Q.bottom - F.bottom + R.bottom) / U.y,
        left: (F.left - Q.left + R.left) / U.x,
        right: (Q.right - F.right + R.right) / U.x
    }
}
const aS = r => ({
    name: "arrow",
    options: r,
    async fn(e) {
        const {x: s, y: i, placement: a, rects: u, platform: d, elements: f, middlewareData: h} = e
          , {element: m, padding: g=0} = ln(r, e) || {};
        if (m == null)
            return {};
        const x = ay(g)
          , b = {
            x: s,
            y: i
        }
          , T = Md(a)
          , R = Fd(T)
          , S = await d.getDimensions(m)
          , k = T === "y"
          , F = k ? "top" : "left"
          , A = k ? "bottom" : "right"
          , B = k ? "clientHeight" : "clientWidth"
          , U = u.reference[R] + u.reference[T] - b[T] - u.floating[R]
          , Q = b[T] - u.reference[T]
          , L = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m));
        let M = L ? L[B] : 0;
        (!M || !await (d.isElement == null ? void 0 : d.isElement(L))) && (M = f.floating[B] || u.floating[R]);
        const q = U / 2 - Q / 2
          , ie = M / 2 - S[R] / 2 - 1
          , me = Mn(x[F], ie)
          , _e = Mn(x[A], ie)
          , J = me
          , oe = M - S[R] - _e
          , G = M / 2 - S[R] / 2 + q
          , be = id(J, G, oe)
          , ce = !h.arrow && ui(a) != null && G !== be && u.reference[R] / 2 - (G < J ? me : _e) - S[R] / 2 < 0
          , ye = ce ? G < J ? G - J : G - oe : 0;
        return {
            [T]: b[T] + ye,
            data: {
                [T]: be,
                centerOffset: G - be - ye,
                ...ce && {
                    alignmentOffset: ye
                }
            },
            reset: ce
        }
    }
})
  , lS = function(r) {
    return r === void 0 && (r = {}),
    {
        name: "flip",
        options: r,
        async fn(e) {
            var s, i;
            const {placement: a, middlewareData: u, rects: d, initialPlacement: f, platform: h, elements: m} = e
              , {mainAxis: g=!0, crossAxis: x=!0, fallbackPlacements: b, fallbackStrategy: T="bestFit", fallbackAxisSideDirection: R="none", flipAlignment: S=!0, ...k} = ln(r, e);
            if ((s = u.arrow) != null && s.alignmentOffset)
                return {};
            const F = un(a)
              , A = Ln(f)
              , B = un(f) === f
              , U = await (h.isRTL == null ? void 0 : h.isRTL(m.floating))
              , Q = b || (B || !S ? [Ja(f)] : rS(f))
              , L = R !== "none";
            !b && L && Q.push(...sS(f, S, R, U));
            const M = [f, ...Q]
              , q = await ao(e, k)
              , ie = [];
            let me = ((i = u.flip) == null ? void 0 : i.overflows) || [];
            if (g && ie.push(q[F]),
            x) {
                const G = tS(a, d, U);
                ie.push(q[G[0]], q[G[1]])
            }
            if (me = [...me, {
                placement: a,
                overflows: ie
            }],
            !ie.every(G => G <= 0)) {
                var _e, J;
                const G = (((_e = u.flip) == null ? void 0 : _e.index) || 0) + 1
                  , be = M[G];
                if (be)
                    return {
                        data: {
                            index: G,
                            overflows: me
                        },
                        reset: {
                            placement: be
                        }
                    };
                let ce = (J = me.filter(ye => ye.overflows[0] <= 0).sort( (ye, V) => ye.overflows[1] - V.overflows[1])[0]) == null ? void 0 : J.placement;
                if (!ce)
                    switch (T) {
                    case "bestFit":
                        {
                            var oe;
                            const ye = (oe = me.filter(V => {
                                if (L) {
                                    const re = Ln(V.placement);
                                    return re === A || re === "y"
                                }
                                return !0
                            }
                            ).map(V => [V.placement, V.overflows.filter(re => re > 0).reduce( (re, te) => re + te, 0)]).sort( (V, re) => V[1] - re[1])[0]) == null ? void 0 : oe[0];
                            ye && (ce = ye);
                            break
                        }
                    case "initialPlacement":
                        ce = f;
                        break
                    }
                if (a !== ce)
                    return {
                        reset: {
                            placement: ce
                        }
                    }
            }
            return {}
        }
    }
};
function xm(r, e) {
    return {
        top: r.top - e.height,
        right: r.right - e.width,
        bottom: r.bottom - e.height,
        left: r.left - e.width
    }
}
function wm(r) {
    return Y_.some(e => r[e] >= 0)
}
const uS = function(r) {
    return r === void 0 && (r = {}),
    {
        name: "hide",
        options: r,
        async fn(e) {
            const {rects: s} = e
              , {strategy: i="referenceHidden", ...a} = ln(r, e);
            switch (i) {
            case "referenceHidden":
                {
                    const u = await ao(e, {
                        ...a,
                        elementContext: "reference"
                    })
                      , d = xm(u, s.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: d,
                            referenceHidden: wm(d)
                        }
                    }
                }
            case "escaped":
                {
                    const u = await ao(e, {
                        ...a,
                        altBoundary: !0
                    })
                      , d = xm(u, s.floating);
                    return {
                        data: {
                            escapedOffsets: d,
                            escaped: wm(d)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function cS(r, e) {
    const {placement: s, platform: i, elements: a} = r
      , u = await (i.isRTL == null ? void 0 : i.isRTL(a.floating))
      , d = un(s)
      , f = ui(s)
      , h = Ln(s) === "y"
      , m = ["left", "top"].includes(d) ? -1 : 1
      , g = u && h ? -1 : 1
      , x = ln(e, r);
    let {mainAxis: b, crossAxis: T, alignmentAxis: R} = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: x.mainAxis || 0,
        crossAxis: x.crossAxis || 0,
        alignmentAxis: x.alignmentAxis
    };
    return f && typeof R == "number" && (T = f === "end" ? R * -1 : R),
    h ? {
        x: T * g,
        y: b * m
    } : {
        x: b * m,
        y: T * g
    }
}
const dS = function(r) {
    return r === void 0 && (r = 0),
    {
        name: "offset",
        options: r,
        async fn(e) {
            var s, i;
            const {x: a, y: u, placement: d, middlewareData: f} = e
              , h = await cS(e, r);
            return d === ((s = f.offset) == null ? void 0 : s.placement) && (i = f.arrow) != null && i.alignmentOffset ? {} : {
                x: a + h.x,
                y: u + h.y,
                data: {
                    ...h,
                    placement: d
                }
            }
        }
    }
}
  , fS = function(r) {
    return r === void 0 && (r = {}),
    {
        name: "shift",
        options: r,
        async fn(e) {
            const {x: s, y: i, placement: a} = e
              , {mainAxis: u=!0, crossAxis: d=!1, limiter: f={
                fn: k => {
                    let {x: F, y: A} = k;
                    return {
                        x: F,
                        y: A
                    }
                }
            }, ...h} = ln(r, e)
              , m = {
                x: s,
                y: i
            }
              , g = await ao(e, h)
              , x = Ln(un(a))
              , b = Dd(x);
            let T = m[b]
              , R = m[x];
            if (u) {
                const k = b === "y" ? "top" : "left"
                  , F = b === "y" ? "bottom" : "right"
                  , A = T + g[k]
                  , B = T - g[F];
                T = id(A, T, B)
            }
            if (d) {
                const k = x === "y" ? "top" : "left"
                  , F = x === "y" ? "bottom" : "right"
                  , A = R + g[k]
                  , B = R - g[F];
                R = id(A, R, B)
            }
            const S = f.fn({
                ...e,
                [b]: T,
                [x]: R
            });
            return {
                ...S,
                data: {
                    x: S.x - s,
                    y: S.y - i,
                    enabled: {
                        [b]: u,
                        [x]: d
                    }
                }
            }
        }
    }
}
  , pS = function(r) {
    return r === void 0 && (r = {}),
    {
        options: r,
        fn(e) {
            const {x: s, y: i, placement: a, rects: u, middlewareData: d} = e
              , {offset: f=0, mainAxis: h=!0, crossAxis: m=!0} = ln(r, e)
              , g = {
                x: s,
                y: i
            }
              , x = Ln(a)
              , b = Dd(x);
            let T = g[b]
              , R = g[x];
            const S = ln(f, e)
              , k = typeof S == "number" ? {
                mainAxis: S,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...S
            };
            if (h) {
                const B = b === "y" ? "height" : "width"
                  , U = u.reference[b] - u.floating[B] + k.mainAxis
                  , Q = u.reference[b] + u.reference[B] - k.mainAxis;
                T < U ? T = U : T > Q && (T = Q)
            }
            if (m) {
                var F, A;
                const B = b === "y" ? "width" : "height"
                  , U = ["top", "left"].includes(un(a))
                  , Q = u.reference[x] - u.floating[B] + (U && ((F = d.offset) == null ? void 0 : F[x]) || 0) + (U ? 0 : k.crossAxis)
                  , L = u.reference[x] + u.reference[B] + (U ? 0 : ((A = d.offset) == null ? void 0 : A[x]) || 0) - (U ? k.crossAxis : 0);
                R < Q ? R = Q : R > L && (R = L)
            }
            return {
                [b]: T,
                [x]: R
            }
        }
    }
}
  , hS = function(r) {
    return r === void 0 && (r = {}),
    {
        name: "size",
        options: r,
        async fn(e) {
            var s, i;
            const {placement: a, rects: u, platform: d, elements: f} = e
              , {apply: h= () => {}
            , ...m} = ln(r, e)
              , g = await ao(e, m)
              , x = un(a)
              , b = ui(a)
              , T = Ln(a) === "y"
              , {width: R, height: S} = u.floating;
            let k, F;
            x === "top" || x === "bottom" ? (k = x,
            F = b === (await (d.isRTL == null ? void 0 : d.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (F = x,
            k = b === "end" ? "top" : "bottom");
            const A = S - g.top - g.bottom
              , B = R - g.left - g.right
              , U = Mn(S - g[k], A)
              , Q = Mn(R - g[F], B)
              , L = !e.middlewareData.shift;
            let M = U
              , q = Q;
            if ((s = e.middlewareData.shift) != null && s.enabled.x && (q = B),
            (i = e.middlewareData.shift) != null && i.enabled.y && (M = A),
            L && !b) {
                const me = Jt(g.left, 0)
                  , _e = Jt(g.right, 0)
                  , J = Jt(g.top, 0)
                  , oe = Jt(g.bottom, 0);
                T ? q = R - 2 * (me !== 0 || _e !== 0 ? me + _e : Jt(g.left, g.right)) : M = S - 2 * (J !== 0 || oe !== 0 ? J + oe : Jt(g.top, g.bottom))
            }
            await h({
                ...e,
                availableWidth: q,
                availableHeight: M
            });
            const ie = await d.getDimensions(f.floating);
            return R !== ie.width || S !== ie.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Sl() {
    return typeof window < "u"
}
function ci(r) {
    return ly(r) ? (r.nodeName || "").toLowerCase() : "#document"
}
function tr(r) {
    var e;
    return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window
}
function Wr(r) {
    var e;
    return (e = (ly(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement
}
function ly(r) {
    return Sl() ? r instanceof Node || r instanceof tr(r).Node : !1
}
function Nr(r) {
    return Sl() ? r instanceof Element || r instanceof tr(r).Element : !1
}
function $r(r) {
    return Sl() ? r instanceof HTMLElement || r instanceof tr(r).HTMLElement : !1
}
function bm(r) {
    return !Sl() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof tr(r).ShadowRoot
}
function Co(r) {
    const {overflow: e, overflowX: s, overflowY: i, display: a} = Rr(r);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + s) && !["inline", "contents"].includes(a)
}
function mS(r) {
    return ["table", "td", "th"].includes(ci(r))
}
function Cl(r) {
    return [":popover-open", ":modal"].some(e => {
        try {
            return r.matches(e)
        } catch {
            return !1
        }
    }
    )
}
function Ld(r) {
    const e = Vd()
      , s = Nr(r) ? Rr(r) : r;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(i => s[i] ? s[i] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !e && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !e && (s.filter ? s.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(i => (s.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some(i => (s.contain || "").includes(i))
}
function gS(r) {
    let e = Vn(r);
    for (; $r(e) && !ri(e); ) {
        if (Ld(e))
            return e;
        if (Cl(e))
            return null;
        e = Vn(e)
    }
    return null
}
function Vd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function ri(r) {
    return ["html", "body", "#document"].includes(ci(r))
}
function Rr(r) {
    return tr(r).getComputedStyle(r)
}
function kl(r) {
    return Nr(r) ? {
        scrollLeft: r.scrollLeft,
        scrollTop: r.scrollTop
    } : {
        scrollLeft: r.scrollX,
        scrollTop: r.scrollY
    }
}
function Vn(r) {
    if (ci(r) === "html")
        return r;
    const e = r.assignedSlot || r.parentNode || bm(r) && r.host || Wr(r);
    return bm(e) ? e.host : e
}
function uy(r) {
    const e = Vn(r);
    return ri(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : $r(e) && Co(e) ? e : uy(e)
}
function lo(r, e, s) {
    var i;
    e === void 0 && (e = []),
    s === void 0 && (s = !0);
    const a = uy(r)
      , u = a === ((i = r.ownerDocument) == null ? void 0 : i.body)
      , d = tr(a);
    if (u) {
        const f = ad(d);
        return e.concat(d, d.visualViewport || [], Co(a) ? a : [], f && s ? lo(f) : [])
    }
    return e.concat(a, lo(a, [], s))
}
function ad(r) {
    return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null
}
function cy(r) {
    const e = Rr(r);
    let s = parseFloat(e.width) || 0
      , i = parseFloat(e.height) || 0;
    const a = $r(r)
      , u = a ? r.offsetWidth : s
      , d = a ? r.offsetHeight : i
      , f = Ya(s) !== u || Ya(i) !== d;
    return f && (s = u,
    i = d),
    {
        width: s,
        height: i,
        $: f
    }
}
function zd(r) {
    return Nr(r) ? r : r.contextElement
}
function Xs(r) {
    const e = zd(r);
    if (!$r(e))
        return Br(1);
    const s = e.getBoundingClientRect()
      , {width: i, height: a, $: u} = cy(e);
    let d = (u ? Ya(s.width) : s.width) / i
      , f = (u ? Ya(s.height) : s.height) / a;
    return (!d || !Number.isFinite(d)) && (d = 1),
    (!f || !Number.isFinite(f)) && (f = 1),
    {
        x: d,
        y: f
    }
}
const yS = Br(0);
function dy(r) {
    const e = tr(r);
    return !Vd() || !e.visualViewport ? yS : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}
function vS(r, e, s) {
    return e === void 0 && (e = !1),
    !s || e && s !== tr(r) ? !1 : e
}
function ls(r, e, s, i) {
    e === void 0 && (e = !1),
    s === void 0 && (s = !1);
    const a = r.getBoundingClientRect()
      , u = zd(r);
    let d = Br(1);
    e && (i ? Nr(i) && (d = Xs(i)) : d = Xs(r));
    const f = vS(u, s, i) ? dy(u) : Br(0);
    let h = (a.left + f.x) / d.x
      , m = (a.top + f.y) / d.y
      , g = a.width / d.x
      , x = a.height / d.y;
    if (u) {
        const b = tr(u)
          , T = i && Nr(i) ? tr(i) : i;
        let R = b
          , S = ad(R);
        for (; S && i && T !== R; ) {
            const k = Xs(S)
              , F = S.getBoundingClientRect()
              , A = Rr(S)
              , B = F.left + (S.clientLeft + parseFloat(A.paddingLeft)) * k.x
              , U = F.top + (S.clientTop + parseFloat(A.paddingTop)) * k.y;
            h *= k.x,
            m *= k.y,
            g *= k.x,
            x *= k.y,
            h += B,
            m += U,
            R = tr(S),
            S = ad(R)
        }
    }
    return el({
        width: g,
        height: x,
        x: h,
        y: m
    })
}
function Bd(r, e) {
    const s = kl(r).scrollLeft;
    return e ? e.left + s : ls(Wr(r)).left + s
}
function fy(r, e, s) {
    s === void 0 && (s = !1);
    const i = r.getBoundingClientRect()
      , a = i.left + e.scrollLeft - (s ? 0 : Bd(r, i))
      , u = i.top + e.scrollTop;
    return {
        x: a,
        y: u
    }
}
function xS(r) {
    let {elements: e, rect: s, offsetParent: i, strategy: a} = r;
    const u = a === "fixed"
      , d = Wr(i)
      , f = e ? Cl(e.floating) : !1;
    if (i === d || f && u)
        return s;
    let h = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , m = Br(1);
    const g = Br(0)
      , x = $r(i);
    if ((x || !x && !u) && ((ci(i) !== "body" || Co(d)) && (h = kl(i)),
    $r(i))) {
        const T = ls(i);
        m = Xs(i),
        g.x = T.x + i.clientLeft,
        g.y = T.y + i.clientTop
    }
    const b = d && !x && !u ? fy(d, h, !0) : Br(0);
    return {
        width: s.width * m.x,
        height: s.height * m.y,
        x: s.x * m.x - h.scrollLeft * m.x + g.x + b.x,
        y: s.y * m.y - h.scrollTop * m.y + g.y + b.y
    }
}
function wS(r) {
    return Array.from(r.getClientRects())
}
function bS(r) {
    const e = Wr(r)
      , s = kl(r)
      , i = r.ownerDocument.body
      , a = Jt(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth)
      , u = Jt(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let d = -s.scrollLeft + Bd(r);
    const f = -s.scrollTop;
    return Rr(i).direction === "rtl" && (d += Jt(e.clientWidth, i.clientWidth) - a),
    {
        width: a,
        height: u,
        x: d,
        y: f
    }
}
function _S(r, e) {
    const s = tr(r)
      , i = Wr(r)
      , a = s.visualViewport;
    let u = i.clientWidth
      , d = i.clientHeight
      , f = 0
      , h = 0;
    if (a) {
        u = a.width,
        d = a.height;
        const m = Vd();
        (!m || m && e === "fixed") && (f = a.offsetLeft,
        h = a.offsetTop)
    }
    return {
        width: u,
        height: d,
        x: f,
        y: h
    }
}
function SS(r, e) {
    const s = ls(r, !0, e === "fixed")
      , i = s.top + r.clientTop
      , a = s.left + r.clientLeft
      , u = $r(r) ? Xs(r) : Br(1)
      , d = r.clientWidth * u.x
      , f = r.clientHeight * u.y
      , h = a * u.x
      , m = i * u.y;
    return {
        width: d,
        height: f,
        x: h,
        y: m
    }
}
function _m(r, e, s) {
    let i;
    if (e === "viewport")
        i = _S(r, s);
    else if (e === "document")
        i = bS(Wr(r));
    else if (Nr(e))
        i = SS(e, s);
    else {
        const a = dy(r);
        i = {
            x: e.x - a.x,
            y: e.y - a.y,
            width: e.width,
            height: e.height
        }
    }
    return el(i)
}
function py(r, e) {
    const s = Vn(r);
    return s === e || !Nr(s) || ri(s) ? !1 : Rr(s).position === "fixed" || py(s, e)
}
function CS(r, e) {
    const s = e.get(r);
    if (s)
        return s;
    let i = lo(r, [], !1).filter(f => Nr(f) && ci(f) !== "body")
      , a = null;
    const u = Rr(r).position === "fixed";
    let d = u ? Vn(r) : r;
    for (; Nr(d) && !ri(d); ) {
        const f = Rr(d)
          , h = Ld(d);
        !h && f.position === "fixed" && (a = null),
        (u ? !h && !a : !h && f.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Co(d) && !h && py(r, d)) ? i = i.filter(g => g !== d) : a = f,
        d = Vn(d)
    }
    return e.set(r, i),
    i
}
function kS(r) {
    let {element: e, boundary: s, rootBoundary: i, strategy: a} = r;
    const d = [...s === "clippingAncestors" ? Cl(e) ? [] : CS(e, this._c) : [].concat(s), i]
      , f = d[0]
      , h = d.reduce( (m, g) => {
        const x = _m(e, g, a);
        return m.top = Jt(x.top, m.top),
        m.right = Mn(x.right, m.right),
        m.bottom = Mn(x.bottom, m.bottom),
        m.left = Jt(x.left, m.left),
        m
    }
    , _m(e, f, a));
    return {
        width: h.right - h.left,
        height: h.bottom - h.top,
        x: h.left,
        y: h.top
    }
}
function ES(r) {
    const {width: e, height: s} = cy(r);
    return {
        width: e,
        height: s
    }
}
function TS(r, e, s) {
    const i = $r(e)
      , a = Wr(e)
      , u = s === "fixed"
      , d = ls(r, !0, u, e);
    let f = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const h = Br(0);
    if (i || !i && !u)
        if ((ci(e) !== "body" || Co(a)) && (f = kl(e)),
        i) {
            const b = ls(e, !0, u, e);
            h.x = b.x + e.clientLeft,
            h.y = b.y + e.clientTop
        } else
            a && (h.x = Bd(a));
    const m = a && !i && !u ? fy(a, f) : Br(0)
      , g = d.left + f.scrollLeft - h.x - m.x
      , x = d.top + f.scrollTop - h.y - m.y;
    return {
        x: g,
        y: x,
        width: d.width,
        height: d.height
    }
}
function Oc(r) {
    return Rr(r).position === "static"
}
function Sm(r, e) {
    if (!$r(r) || Rr(r).position === "fixed")
        return null;
    if (e)
        return e(r);
    let s = r.offsetParent;
    return Wr(r) === s && (s = s.ownerDocument.body),
    s
}
function hy(r, e) {
    const s = tr(r);
    if (Cl(r))
        return s;
    if (!$r(r)) {
        let a = Vn(r);
        for (; a && !ri(a); ) {
            if (Nr(a) && !Oc(a))
                return a;
            a = Vn(a)
        }
        return s
    }
    let i = Sm(r, e);
    for (; i && mS(i) && Oc(i); )
        i = Sm(i, e);
    return i && ri(i) && Oc(i) && !Ld(i) ? s : i || gS(r) || s
}
const PS = async function(r) {
    const e = this.getOffsetParent || hy
      , s = this.getDimensions
      , i = await s(r.floating);
    return {
        reference: TS(r.reference, await e(r.floating), r.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    }
};
function NS(r) {
    return Rr(r).direction === "rtl"
}
const RS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: xS,
    getDocumentElement: Wr,
    getClippingRect: kS,
    getOffsetParent: hy,
    getElementRects: PS,
    getClientRects: wS,
    getDimensions: ES,
    getScale: Xs,
    isElement: Nr,
    isRTL: NS
};
function my(r, e) {
    return r.x === e.x && r.y === e.y && r.width === e.width && r.height === e.height
}
function AS(r, e) {
    let s = null, i;
    const a = Wr(r);
    function u() {
        var f;
        clearTimeout(i),
        (f = s) == null || f.disconnect(),
        s = null
    }
    function d(f, h) {
        f === void 0 && (f = !1),
        h === void 0 && (h = 1),
        u();
        const m = r.getBoundingClientRect()
          , {left: g, top: x, width: b, height: T} = m;
        if (f || e(),
        !b || !T)
            return;
        const R = $a(x)
          , S = $a(a.clientWidth - (g + b))
          , k = $a(a.clientHeight - (x + T))
          , F = $a(g)
          , B = {
            rootMargin: -R + "px " + -S + "px " + -k + "px " + -F + "px",
            threshold: Jt(0, Mn(1, h)) || 1
        };
        let U = !0;
        function Q(L) {
            const M = L[0].intersectionRatio;
            if (M !== h) {
                if (!U)
                    return d();
                M ? d(!1, M) : i = setTimeout( () => {
                    d(!1, 1e-7)
                }
                , 1e3)
            }
            M === 1 && !my(m, r.getBoundingClientRect()) && d(),
            U = !1
        }
        try {
            s = new IntersectionObserver(Q,{
                ...B,
                root: a.ownerDocument
            })
        } catch {
            s = new IntersectionObserver(Q,B)
        }
        s.observe(r)
    }
    return d(!0),
    u
}
function OS(r, e, s, i) {
    i === void 0 && (i = {});
    const {ancestorScroll: a=!0, ancestorResize: u=!0, elementResize: d=typeof ResizeObserver == "function", layoutShift: f=typeof IntersectionObserver == "function", animationFrame: h=!1} = i
      , m = zd(r)
      , g = a || u ? [...m ? lo(m) : [], ...lo(e)] : [];
    g.forEach(F => {
        a && F.addEventListener("scroll", s, {
            passive: !0
        }),
        u && F.addEventListener("resize", s)
    }
    );
    const x = m && f ? AS(m, s) : null;
    let b = -1
      , T = null;
    d && (T = new ResizeObserver(F => {
        let[A] = F;
        A && A.target === m && T && (T.unobserve(e),
        cancelAnimationFrame(b),
        b = requestAnimationFrame( () => {
            var B;
            (B = T) == null || B.observe(e)
        }
        )),
        s()
    }
    ),
    m && !h && T.observe(m),
    T.observe(e));
    let R, S = h ? ls(r) : null;
    h && k();
    function k() {
        const F = ls(r);
        S && !my(S, F) && s(),
        S = F,
        R = requestAnimationFrame(k)
    }
    return s(),
    () => {
        var F;
        g.forEach(A => {
            a && A.removeEventListener("scroll", s),
            u && A.removeEventListener("resize", s)
        }
        ),
        x?.(),
        (F = T) == null || F.disconnect(),
        T = null,
        h && cancelAnimationFrame(R)
    }
}
const IS = dS
  , jS = fS
  , DS = lS
  , FS = hS
  , MS = uS
  , Cm = aS
  , LS = pS
  , VS = (r, e, s) => {
    const i = new Map
      , a = {
        platform: RS,
        ...s
    }
      , u = {
        ...a.platform,
        _c: i
    };
    return oS(r, e, {
        ...a,
        platform: u
    })
}
;
var Wa = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function tl(r, e) {
    if (r === e)
        return !0;
    if (typeof r != typeof e)
        return !1;
    if (typeof r == "function" && r.toString() === e.toString())
        return !0;
    let s, i, a;
    if (r && e && typeof r == "object") {
        if (Array.isArray(r)) {
            if (s = r.length,
            s !== e.length)
                return !1;
            for (i = s; i-- !== 0; )
                if (!tl(r[i], e[i]))
                    return !1;
            return !0
        }
        if (a = Object.keys(r),
        s = a.length,
        s !== Object.keys(e).length)
            return !1;
        for (i = s; i-- !== 0; )
            if (!{}.hasOwnProperty.call(e, a[i]))
                return !1;
        for (i = s; i-- !== 0; ) {
            const u = a[i];
            if (!(u === "_owner" && r.$$typeof) && !tl(r[u], e[u]))
                return !1
        }
        return !0
    }
    return r !== r && e !== e
}
function gy(r) {
    return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function km(r, e) {
    const s = gy(r);
    return Math.round(e * s) / s
}
function Ic(r) {
    const e = w.useRef(r);
    return Wa( () => {
        e.current = r
    }
    ),
    e
}
function zS(r) {
    r === void 0 && (r = {});
    const {placement: e="bottom", strategy: s="absolute", middleware: i=[], platform: a, elements: {reference: u, floating: d}={}, transform: f=!0, whileElementsMounted: h, open: m} = r
      , [g,x] = w.useState({
        x: 0,
        y: 0,
        strategy: s,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    })
      , [b,T] = w.useState(i);
    tl(b, i) || T(i);
    const [R,S] = w.useState(null)
      , [k,F] = w.useState(null)
      , A = w.useCallback(V => {
        V !== L.current && (L.current = V,
        S(V))
    }
    , [])
      , B = w.useCallback(V => {
        V !== M.current && (M.current = V,
        F(V))
    }
    , [])
      , U = u || R
      , Q = d || k
      , L = w.useRef(null)
      , M = w.useRef(null)
      , q = w.useRef(g)
      , ie = h != null
      , me = Ic(h)
      , _e = Ic(a)
      , J = Ic(m)
      , oe = w.useCallback( () => {
        if (!L.current || !M.current)
            return;
        const V = {
            placement: e,
            strategy: s,
            middleware: b
        };
        _e.current && (V.platform = _e.current),
        VS(L.current, M.current, V).then(re => {
            const te = {
                ...re,
                isPositioned: J.current !== !1
            };
            G.current && !tl(q.current, te) && (q.current = te,
            yl.flushSync( () => {
                x(te)
            }
            ))
        }
        )
    }
    , [b, e, s, _e, J]);
    Wa( () => {
        m === !1 && q.current.isPositioned && (q.current.isPositioned = !1,
        x(V => ({
            ...V,
            isPositioned: !1
        })))
    }
    , [m]);
    const G = w.useRef(!1);
    Wa( () => (G.current = !0,
    () => {
        G.current = !1
    }
    ), []),
    Wa( () => {
        if (U && (L.current = U),
        Q && (M.current = Q),
        U && Q) {
            if (me.current)
                return me.current(U, Q, oe);
            oe()
        }
    }
    , [U, Q, oe, me, ie]);
    const be = w.useMemo( () => ({
        reference: L,
        floating: M,
        setReference: A,
        setFloating: B
    }), [A, B])
      , ce = w.useMemo( () => ({
        reference: U,
        floating: Q
    }), [U, Q])
      , ye = w.useMemo( () => {
        const V = {
            position: s,
            left: 0,
            top: 0
        };
        if (!ce.floating)
            return V;
        const re = km(ce.floating, g.x)
          , te = km(ce.floating, g.y);
        return f ? {
            ...V,
            transform: "translate(" + re + "px, " + te + "px)",
            ...gy(ce.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: s,
            left: re,
            top: te
        }
    }
    , [s, f, ce.floating, g.x, g.y]);
    return w.useMemo( () => ({
        ...g,
        update: oe,
        refs: be,
        elements: ce,
        floatingStyles: ye
    }), [g, oe, be, ce, ye])
}
const BS = r => {
    function e(s) {
        return {}.hasOwnProperty.call(s, "current")
    }
    return {
        name: "arrow",
        options: r,
        fn(s) {
            const {element: i, padding: a} = typeof r == "function" ? r(s) : r;
            return i && e(i) ? i.current != null ? Cm({
                element: i.current,
                padding: a
            }).fn(s) : {} : i ? Cm({
                element: i,
                padding: a
            }).fn(s) : {}
        }
    }
}
  , US = (r, e) => ({
    ...IS(r),
    options: [r, e]
})
  , $S = (r, e) => ({
    ...jS(r),
    options: [r, e]
})
  , QS = (r, e) => ({
    ...LS(r),
    options: [r, e]
})
  , HS = (r, e) => ({
    ...DS(r),
    options: [r, e]
})
  , WS = (r, e) => ({
    ...FS(r),
    options: [r, e]
})
  , qS = (r, e) => ({
    ...MS(r),
    options: [r, e]
})
  , ZS = (r, e) => ({
    ...BS(r),
    options: [r, e]
});
var KS = "Arrow"
  , yy = w.forwardRef( (r, e) => {
    const {children: s, width: i=10, height: a=5, ...u} = r;
    return v.jsx(yt.svg, {
        ...u,
        ref: e,
        width: i,
        height: a,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: r.asChild ? s : v.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
yy.displayName = KS;
var GS = yy;
function vy(r) {
    const [e,s] = w.useState(void 0);
    return Fn( () => {
        if (r) {
            s({
                width: r.offsetWidth,
                height: r.offsetHeight
            });
            const i = new ResizeObserver(a => {
                if (!Array.isArray(a) || !a.length)
                    return;
                const u = a[0];
                let d, f;
                if ("borderBoxSize"in u) {
                    const h = u.borderBoxSize
                      , m = Array.isArray(h) ? h[0] : h;
                    d = m.inlineSize,
                    f = m.blockSize
                } else
                    d = r.offsetWidth,
                    f = r.offsetHeight;
                s({
                    width: d,
                    height: f
                })
            }
            );
            return i.observe(r, {
                box: "border-box"
            }),
            () => i.unobserve(r)
        } else
            s(void 0)
    }
    , [r]),
    e
}
var xy = "Popper"
  , [wy,by] = fs(xy)
  , [EP,_y] = wy(xy)
  , Sy = "PopperAnchor"
  , Cy = w.forwardRef( (r, e) => {
    const {__scopePopper: s, virtualRef: i, ...a} = r
      , u = _y(Sy, s)
      , d = w.useRef(null)
      , f = Wt(e, d);
    return w.useEffect( () => {
        u.onAnchorChange(i?.current || d.current)
    }
    ),
    i ? null : v.jsx(yt.div, {
        ...a,
        ref: f
    })
}
);
Cy.displayName = Sy;
var Ud = "PopperContent"
  , [XS,YS] = wy(Ud)
  , ky = w.forwardRef( (r, e) => {
    const {__scopePopper: s, side: i="bottom", sideOffset: a=0, align: u="center", alignOffset: d=0, arrowPadding: f=0, avoidCollisions: h=!0, collisionBoundary: m=[], collisionPadding: g=0, sticky: x="partial", hideWhenDetached: b=!1, updatePositionStrategy: T="optimized", onPlaced: R, ...S} = r
      , k = _y(Ud, s)
      , [F,A] = w.useState(null)
      , B = Wt(e, Me => A(Me))
      , [U,Q] = w.useState(null)
      , L = vy(U)
      , M = L?.width ?? 0
      , q = L?.height ?? 0
      , ie = i + (u !== "center" ? "-" + u : "")
      , me = typeof g == "number" ? g : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...g
    }
      , _e = Array.isArray(m) ? m : [m]
      , J = _e.length > 0
      , oe = {
        padding: me,
        boundary: _e.filter(e1),
        altBoundary: J
    }
      , {refs: G, floatingStyles: be, placement: ce, isPositioned: ye, middlewareData: V} = zS({
        strategy: "fixed",
        placement: ie,
        whileElementsMounted: (...Me) => OS(...Me, {
            animationFrame: T === "always"
        }),
        elements: {
            reference: k.anchor
        },
        middleware: [US({
            mainAxis: a + q,
            alignmentAxis: d
        }), h && $S({
            mainAxis: !0,
            crossAxis: !1,
            limiter: x === "partial" ? QS() : void 0,
            ...oe
        }), h && HS({
            ...oe
        }), WS({
            ...oe,
            apply: ({elements: Me, rects: Ve, availableWidth: We, availableHeight: bt}) => {
                const {width: Ir, height: Qn} = Ve.reference
                  , dr = Me.floating.style;
                dr.setProperty("--radix-popper-available-width", `${We}px`),
                dr.setProperty("--radix-popper-available-height", `${bt}px`),
                dr.setProperty("--radix-popper-anchor-width", `${Ir}px`),
                dr.setProperty("--radix-popper-anchor-height", `${Qn}px`)
            }
        }), U && ZS({
            element: U,
            padding: f
        }), t1({
            arrowWidth: M,
            arrowHeight: q
        }), b && qS({
            strategy: "referenceHidden",
            ...oe
        })]
    })
      , [re,te] = Py(ce)
      , N = Pr(R);
    Fn( () => {
        ye && N?.()
    }
    , [ye, N]);
    const $ = V.arrow?.x
      , ke = V.arrow?.y
      , Ne = V.arrow?.centerOffset !== 0
      , [De,Fe] = w.useState();
    return Fn( () => {
        F && Fe(window.getComputedStyle(F).zIndex)
    }
    , [F]),
    v.jsx("div", {
        ref: G.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...be,
            transform: ye ? be.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: De,
            "--radix-popper-transform-origin": [V.transformOrigin?.x, V.transformOrigin?.y].join(" "),
            ...V.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: r.dir,
        children: v.jsx(XS, {
            scope: s,
            placedSide: re,
            onArrowChange: Q,
            arrowX: $,
            arrowY: ke,
            shouldHideArrow: Ne,
            children: v.jsx(yt.div, {
                "data-side": re,
                "data-align": te,
                ...S,
                ref: B,
                style: {
                    ...S.style,
                    animation: ye ? void 0 : "none"
                }
            })
        })
    })
}
);
ky.displayName = Ud;
var Ey = "PopperArrow"
  , JS = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Ty = w.forwardRef(function(e, s) {
    const {__scopePopper: i, ...a} = e
      , u = YS(Ey, i)
      , d = JS[u.placedSide];
    return v.jsx("span", {
        ref: u.onArrowChange,
        style: {
            position: "absolute",
            left: u.arrowX,
            top: u.arrowY,
            [d]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[u.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[u.placedSide],
            visibility: u.shouldHideArrow ? "hidden" : void 0
        },
        children: v.jsx(GS, {
            ...a,
            ref: s,
            style: {
                ...a.style,
                display: "block"
            }
        })
    })
});
Ty.displayName = Ey;
function e1(r) {
    return r !== null
}
var t1 = r => ({
    name: "transformOrigin",
    options: r,
    fn(e) {
        const {placement: s, rects: i, middlewareData: a} = e
          , d = a.arrow?.centerOffset !== 0
          , f = d ? 0 : r.arrowWidth
          , h = d ? 0 : r.arrowHeight
          , [m,g] = Py(s)
          , x = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[g]
          , b = (a.arrow?.x ?? 0) + f / 2
          , T = (a.arrow?.y ?? 0) + h / 2;
        let R = ""
          , S = "";
        return m === "bottom" ? (R = d ? x : `${b}px`,
        S = `${-h}px`) : m === "top" ? (R = d ? x : `${b}px`,
        S = `${i.floating.height + h}px`) : m === "right" ? (R = `${-h}px`,
        S = d ? x : `${T}px`) : m === "left" && (R = `${i.floating.width + h}px`,
        S = d ? x : `${T}px`),
        {
            data: {
                x: R,
                y: S
            }
        }
    }
});
function Py(r) {
    const [e,s="center"] = r.split("-");
    return [e, s]
}
var r1 = Cy
  , n1 = ky
  , s1 = Ty
  , [El] = fs("Tooltip", [by])
  , $d = by()
  , Ny = "TooltipProvider"
  , i1 = 700
  , Em = "tooltip.open"
  , [o1,Ry] = El(Ny)
  , Ay = r => {
    const {__scopeTooltip: e, delayDuration: s=i1, skipDelayDuration: i=300, disableHoverableContent: a=!1, children: u} = r
      , d = w.useRef(!0)
      , f = w.useRef(!1)
      , h = w.useRef(0);
    return w.useEffect( () => {
        const m = h.current;
        return () => window.clearTimeout(m)
    }
    , []),
    v.jsx(o1, {
        scope: e,
        isOpenDelayedRef: d,
        delayDuration: s,
        onOpen: w.useCallback( () => {
            window.clearTimeout(h.current),
            d.current = !1
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(h.current),
            h.current = window.setTimeout( () => d.current = !0, i)
        }
        , [i]),
        isPointerInTransitRef: f,
        onPointerInTransitChange: w.useCallback(m => {
            f.current = m
        }
        , []),
        disableHoverableContent: a,
        children: u
    })
}
;
Ay.displayName = Ny;
var Oy = "Tooltip"
  , [TP,Tl] = El(Oy)
  , ld = "TooltipTrigger"
  , a1 = w.forwardRef( (r, e) => {
    const {__scopeTooltip: s, ...i} = r
      , a = Tl(ld, s)
      , u = Ry(ld, s)
      , d = $d(s)
      , f = w.useRef(null)
      , h = Wt(e, f, a.onTriggerChange)
      , m = w.useRef(!1)
      , g = w.useRef(!1)
      , x = w.useCallback( () => m.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", x), [x]),
    v.jsx(r1, {
        asChild: !0,
        ...d,
        children: v.jsx(yt.button, {
            "aria-describedby": a.open ? a.contentId : void 0,
            "data-state": a.stateAttribute,
            ...i,
            ref: h,
            onPointerMove: Ze(r.onPointerMove, b => {
                b.pointerType !== "touch" && !g.current && !u.isPointerInTransitRef.current && (a.onTriggerEnter(),
                g.current = !0)
            }
            ),
            onPointerLeave: Ze(r.onPointerLeave, () => {
                a.onTriggerLeave(),
                g.current = !1
            }
            ),
            onPointerDown: Ze(r.onPointerDown, () => {
                a.open && a.onClose(),
                m.current = !0,
                document.addEventListener("pointerup", x, {
                    once: !0
                })
            }
            ),
            onFocus: Ze(r.onFocus, () => {
                m.current || a.onOpen()
            }
            ),
            onBlur: Ze(r.onBlur, a.onClose),
            onClick: Ze(r.onClick, a.onClose)
        })
    })
}
);
a1.displayName = ld;
var l1 = "TooltipPortal"
  , [PP,u1] = El(l1, {
    forceMount: void 0
})
  , ni = "TooltipContent"
  , Iy = w.forwardRef( (r, e) => {
    const s = u1(ni, r.__scopeTooltip)
      , {forceMount: i=s.forceMount, side: a="top", ...u} = r
      , d = Tl(ni, r.__scopeTooltip);
    return v.jsx(vl, {
        present: i || d.open,
        children: d.disableHoverableContent ? v.jsx(jy, {
            side: a,
            ...u,
            ref: e
        }) : v.jsx(c1, {
            side: a,
            ...u,
            ref: e
        })
    })
}
)
  , c1 = w.forwardRef( (r, e) => {
    const s = Tl(ni, r.__scopeTooltip)
      , i = Ry(ni, r.__scopeTooltip)
      , a = w.useRef(null)
      , u = Wt(e, a)
      , [d,f] = w.useState(null)
      , {trigger: h, onClose: m} = s
      , g = a.current
      , {onPointerInTransitChange: x} = i
      , b = w.useCallback( () => {
        f(null),
        x(!1)
    }
    , [x])
      , T = w.useCallback( (R, S) => {
        const k = R.currentTarget
          , F = {
            x: R.clientX,
            y: R.clientY
        }
          , A = m1(F, k.getBoundingClientRect())
          , B = g1(F, A)
          , U = y1(S.getBoundingClientRect())
          , Q = x1([...B, ...U]);
        f(Q),
        x(!0)
    }
    , [x]);
    return w.useEffect( () => () => b(), [b]),
    w.useEffect( () => {
        if (h && g) {
            const R = k => T(k, g)
              , S = k => T(k, h);
            return h.addEventListener("pointerleave", R),
            g.addEventListener("pointerleave", S),
            () => {
                h.removeEventListener("pointerleave", R),
                g.removeEventListener("pointerleave", S)
            }
        }
    }
    , [h, g, T, b]),
    w.useEffect( () => {
        if (d) {
            const R = S => {
                const k = S.target
                  , F = {
                    x: S.clientX,
                    y: S.clientY
                }
                  , A = h?.contains(k) || g?.contains(k)
                  , B = !v1(F, d);
                A ? b() : B && (b(),
                m())
            }
            ;
            return document.addEventListener("pointermove", R),
            () => document.removeEventListener("pointermove", R)
        }
    }
    , [h, g, d, m, b]),
    v.jsx(jy, {
        ...r,
        ref: u
    })
}
)
  , [d1,f1] = El(Oy, {
    isInside: !1
})
  , p1 = gb("TooltipContent")
  , jy = w.forwardRef( (r, e) => {
    const {__scopeTooltip: s, children: i, "aria-label": a, onEscapeKeyDown: u, onPointerDownOutside: d, ...f} = r
      , h = Tl(ni, s)
      , m = $d(s)
      , {onClose: g} = h;
    return w.useEffect( () => (document.addEventListener(Em, g),
    () => document.removeEventListener(Em, g)), [g]),
    w.useEffect( () => {
        if (h.trigger) {
            const x = b => {
                b.target?.contains(h.trigger) && g()
            }
            ;
            return window.addEventListener("scroll", x, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", x, {
                capture: !0
            })
        }
    }
    , [h.trigger, g]),
    v.jsx(Nd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: d,
        onFocusOutside: x => x.preventDefault(),
        onDismiss: g,
        children: v.jsxs(n1, {
            "data-state": h.stateAttribute,
            ...m,
            ...f,
            ref: e,
            style: {
                ...f.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [v.jsx(p1, {
                children: i
            }), v.jsx(d1, {
                scope: s,
                isInside: !0,
                children: v.jsx(Fb, {
                    id: h.contentId,
                    role: "tooltip",
                    children: a || i
                })
            })]
        })
    })
}
);
Iy.displayName = ni;
var Dy = "TooltipArrow"
  , h1 = w.forwardRef( (r, e) => {
    const {__scopeTooltip: s, ...i} = r
      , a = $d(s);
    return f1(Dy, s).isInside ? null : v.jsx(s1, {
        ...a,
        ...i,
        ref: e
    })
}
);
h1.displayName = Dy;
function m1(r, e) {
    const s = Math.abs(e.top - r.y)
      , i = Math.abs(e.bottom - r.y)
      , a = Math.abs(e.right - r.x)
      , u = Math.abs(e.left - r.x);
    switch (Math.min(s, i, a, u)) {
    case u:
        return "left";
    case a:
        return "right";
    case s:
        return "top";
    case i:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function g1(r, e, s=5) {
    const i = [];
    switch (e) {
    case "top":
        i.push({
            x: r.x - s,
            y: r.y + s
        }, {
            x: r.x + s,
            y: r.y + s
        });
        break;
    case "bottom":
        i.push({
            x: r.x - s,
            y: r.y - s
        }, {
            x: r.x + s,
            y: r.y - s
        });
        break;
    case "left":
        i.push({
            x: r.x + s,
            y: r.y - s
        }, {
            x: r.x + s,
            y: r.y + s
        });
        break;
    case "right":
        i.push({
            x: r.x - s,
            y: r.y - s
        }, {
            x: r.x - s,
            y: r.y + s
        });
        break
    }
    return i
}
function y1(r) {
    const {top: e, right: s, bottom: i, left: a} = r;
    return [{
        x: a,
        y: e
    }, {
        x: s,
        y: e
    }, {
        x: s,
        y: i
    }, {
        x: a,
        y: i
    }]
}
function v1(r, e) {
    const {x: s, y: i} = r;
    let a = !1;
    for (let u = 0, d = e.length - 1; u < e.length; d = u++) {
        const f = e[u].x
          , h = e[u].y
          , m = e[d].x
          , g = e[d].y;
        h > i != g > i && s < (m - f) * (i - h) / (g - h) + f && (a = !a)
    }
    return a
}
function x1(r) {
    const e = r.slice();
    return e.sort( (s, i) => s.x < i.x ? -1 : s.x > i.x ? 1 : s.y < i.y ? -1 : s.y > i.y ? 1 : 0),
    w1(e)
}
function w1(r) {
    if (r.length <= 1)
        return r.slice();
    const e = [];
    for (let i = 0; i < r.length; i++) {
        const a = r[i];
        for (; e.length >= 2; ) {
            const u = e[e.length - 1]
              , d = e[e.length - 2];
            if ((u.x - d.x) * (a.y - d.y) >= (u.y - d.y) * (a.x - d.x))
                e.pop();
            else
                break
        }
        e.push(a)
    }
    e.pop();
    const s = [];
    for (let i = r.length - 1; i >= 0; i--) {
        const a = r[i];
        for (; s.length >= 2; ) {
            const u = s[s.length - 1]
              , d = s[s.length - 2];
            if ((u.x - d.x) * (a.y - d.y) >= (u.y - d.y) * (a.x - d.x))
                s.pop();
            else
                break
        }
        s.push(a)
    }
    return s.pop(),
    e.length === 1 && s.length === 1 && e[0].x === s[0].x && e[0].y === s[0].y ? e : e.concat(s)
}
var b1 = Ay
  , Fy = Iy;
const _1 = b1
  , S1 = w.forwardRef( ({className: r, sideOffset: e=4, ...s}, i) => v.jsx(Fy, {
    ref: i,
    sideOffset: e,
    className: He("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", r),
    ...s
}));
S1.displayName = Fy.displayName;
var ko = r => r.type === "checkbox"
  , ss = r => r instanceof Date
  , Mt = r => r == null;
const My = r => typeof r == "object";
var ht = r => !Mt(r) && !Array.isArray(r) && My(r) && !ss(r)
  , Ly = r => ht(r) && r.target ? ko(r.target) ? r.target.checked : r.target.value : r
  , C1 = r => r.substring(0, r.search(/\.\d+(\.|$)/)) || r
  , Vy = (r, e) => r.has(C1(e))
  , k1 = r => {
    const e = r.constructor && r.constructor.prototype;
    return ht(e) && e.hasOwnProperty("isPrototypeOf")
}
  , Qd = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function st(r) {
    let e;
    const s = Array.isArray(r)
      , i = typeof FileList < "u" ? r instanceof FileList : !1;
    if (r instanceof Date)
        e = new Date(r);
    else if (r instanceof Set)
        e = new Set(r);
    else if (!(Qd && (r instanceof Blob || i)) && (s || ht(r)))
        if (e = s ? [] : {},
        !s && !k1(r))
            e = r;
        else
            for (const a in r)
                r.hasOwnProperty(a) && (e[a] = st(r[a]));
    else
        return r;
    return e
}
var Eo = r => Array.isArray(r) ? r.filter(Boolean) : []
  , et = r => r === void 0
  , ne = (r, e, s) => {
    if (!e || !ht(r))
        return s;
    const i = Eo(e.split(/[,[\].]+?/)).reduce( (a, u) => Mt(a) ? a : a[u], r);
    return et(i) || i === r ? et(r[e]) ? s : r[e] : i
}
  , Yt = r => typeof r == "boolean"
  , Hd = r => /^\w*$/.test(r)
  , zy = r => Eo(r.replace(/["|']|\]/g, "").split(/\.|\[/))
  , Qe = (r, e, s) => {
    let i = -1;
    const a = Hd(e) ? [e] : zy(e)
      , u = a.length
      , d = u - 1;
    for (; ++i < u; ) {
        const f = a[i];
        let h = s;
        if (i !== d) {
            const m = r[f];
            h = ht(m) || Array.isArray(m) ? m : isNaN(+a[i + 1]) ? {} : []
        }
        if (f === "__proto__" || f === "constructor" || f === "prototype")
            return;
        r[f] = h,
        r = r[f]
    }
}
;
const rl = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
}
  , cr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
}
  , nn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
}
  , By = we.createContext(null)
  , To = () => we.useContext(By)
  , E1 = r => {
    const {children: e, ...s} = r;
    return we.createElement(By.Provider, {
        value: s
    }, e)
}
;
var Uy = (r, e, s, i=!0) => {
    const a = {
        defaultValues: e._defaultValues
    };
    for (const u in r)
        Object.defineProperty(a, u, {
            get: () => {
                const d = u;
                return e._proxyFormState[d] !== cr.all && (e._proxyFormState[d] = !i || cr.all),
                s && (s[d] = !0),
                r[d]
            }
        });
    return a
}
;
function T1(r) {
    const e = To()
      , {control: s=e.control, disabled: i, name: a, exact: u} = r || {}
      , [d,f] = we.useState(s._formState)
      , h = we.useRef({
        isDirty: !1,
        isLoading: !1,
        dirtyFields: !1,
        touchedFields: !1,
        validatingFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    })
      , m = we.useRef(a);
    return m.current = a,
    we.useEffect( () => s._subscribe({
        name: m.current,
        formState: h.current,
        exact: u,
        callback: g => {
            !i && f({
                ...s._formState,
                ...g
            })
        }
    }), [s, i, u]),
    we.useEffect( () => {
        h.current.isValid && s._setValid(!0)
    }
    , [s]),
    we.useMemo( () => Uy(d, s, h.current, !1), [d, s])
}
var zr = r => typeof r == "string"
  , $y = (r, e, s, i, a) => zr(r) ? (i && e.watch.add(r),
ne(s, r, a)) : Array.isArray(r) ? r.map(u => (i && e.watch.add(u),
ne(s, u))) : (i && (e.watchAll = !0),
s);
function P1(r) {
    const e = To()
      , {control: s=e.control, name: i, defaultValue: a, disabled: u, exact: d} = r || {}
      , f = we.useRef(i)
      , h = we.useRef(a);
    f.current = i,
    we.useEffect( () => s._subscribe({
        name: f.current,
        formState: {
            values: !0
        },
        exact: d,
        callback: x => !u && g($y(f.current, s._names, x.values || s._formValues, !1, h.current))
    }), [s, u, d]);
    const [m,g] = we.useState(s._getWatch(i, a));
    return we.useEffect( () => s._removeUnmounted()),
    m
}
function N1(r) {
    const e = To()
      , {name: s, disabled: i, control: a=e.control, shouldUnregister: u} = r
      , d = Vy(a._names.array, s)
      , f = P1({
        control: a,
        name: s,
        defaultValue: ne(a._formValues, s, ne(a._defaultValues, s, r.defaultValue)),
        exact: !0
    })
      , h = T1({
        control: a,
        name: s,
        exact: !0
    })
      , m = we.useRef(r)
      , g = we.useRef(a.register(s, {
        ...r.rules,
        value: f,
        ...Yt(r.disabled) ? {
            disabled: r.disabled
        } : {}
    }))
      , x = we.useMemo( () => Object.defineProperties({}, {
        invalid: {
            enumerable: !0,
            get: () => !!ne(h.errors, s)
        },
        isDirty: {
            enumerable: !0,
            get: () => !!ne(h.dirtyFields, s)
        },
        isTouched: {
            enumerable: !0,
            get: () => !!ne(h.touchedFields, s)
        },
        isValidating: {
            enumerable: !0,
            get: () => !!ne(h.validatingFields, s)
        },
        error: {
            enumerable: !0,
            get: () => ne(h.errors, s)
        }
    }), [h, s])
      , b = we.useCallback(k => g.current.onChange({
        target: {
            value: Ly(k),
            name: s
        },
        type: rl.CHANGE
    }), [s])
      , T = we.useCallback( () => g.current.onBlur({
        target: {
            value: ne(a._formValues, s),
            name: s
        },
        type: rl.BLUR
    }), [s, a._formValues])
      , R = we.useCallback(k => {
        const F = ne(a._fields, s);
        F && k && (F._f.ref = {
            focus: () => k.focus(),
            select: () => k.select(),
            setCustomValidity: A => k.setCustomValidity(A),
            reportValidity: () => k.reportValidity()
        })
    }
    , [a._fields, s])
      , S = we.useMemo( () => ({
        name: s,
        value: f,
        ...Yt(i) || h.disabled ? {
            disabled: h.disabled || i
        } : {},
        onChange: b,
        onBlur: T,
        ref: R
    }), [s, i, h.disabled, b, T, R, f]);
    return we.useEffect( () => {
        const k = a._options.shouldUnregister || u;
        a.register(s, {
            ...m.current.rules,
            ...Yt(m.current.disabled) ? {
                disabled: m.current.disabled
            } : {}
        });
        const F = (A, B) => {
            const U = ne(a._fields, A);
            U && U._f && (U._f.mount = B)
        }
        ;
        if (F(s, !0),
        k) {
            const A = st(ne(a._options.defaultValues, s));
            Qe(a._defaultValues, s, A),
            et(ne(a._formValues, s)) && Qe(a._formValues, s, A)
        }
        return !d && a.register(s),
        () => {
            (d ? k && !a._state.action : k) ? a.unregister(s) : F(s, !1)
        }
    }
    , [s, a, d, u]),
    we.useEffect( () => {
        a._setDisabledField({
            disabled: i,
            name: s
        })
    }
    , [i, s, a]),
    we.useMemo( () => ({
        field: S,
        formState: h,
        fieldState: x
    }), [S, h, x])
}
const R1 = r => r.render(N1(r));
var Qy = (r, e, s, i, a) => e ? {
    ...s[r],
    types: {
        ...s[r] && s[r].types ? s[r].types : {},
        [i]: a || !0
    }
} : {}
  , Ht = r => Array.isArray(r) ? r : [r]
  , Tm = () => {
    let r = [];
    return {
        get observers() {
            return r
        },
        next: a => {
            for (const u of r)
                u.next && u.next(a)
        }
        ,
        subscribe: a => (r.push(a),
        {
            unsubscribe: () => {
                r = r.filter(u => u !== a)
            }
        }),
        unsubscribe: () => {
            r = []
        }
    }
}
  , ud = r => Mt(r) || !My(r);
function In(r, e) {
    if (ud(r) || ud(e))
        return r === e;
    if (ss(r) && ss(e))
        return r.getTime() === e.getTime();
    const s = Object.keys(r)
      , i = Object.keys(e);
    if (s.length !== i.length)
        return !1;
    for (const a of s) {
        const u = r[a];
        if (!i.includes(a))
            return !1;
        if (a !== "ref") {
            const d = e[a];
            if (ss(u) && ss(d) || ht(u) && ht(d) || Array.isArray(u) && Array.isArray(d) ? !In(u, d) : u !== d)
                return !1
        }
    }
    return !0
}
var It = r => ht(r) && !Object.keys(r).length
  , Wd = r => r.type === "file"
  , kr = r => typeof r == "function"
  , nl = r => {
    if (!Qd)
        return !1;
    const e = r ? r.ownerDocument : 0;
    return r instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement)
}
  , Hy = r => r.type === "select-multiple"
  , qd = r => r.type === "radio"
  , A1 = r => qd(r) || ko(r)
  , jc = r => nl(r) && r.isConnected;
function O1(r, e) {
    const s = e.slice(0, -1).length;
    let i = 0;
    for (; i < s; )
        r = et(r) ? i++ : r[e[i++]];
    return r
}
function I1(r) {
    for (const e in r)
        if (r.hasOwnProperty(e) && !et(r[e]))
            return !1;
    return !0
}
function gt(r, e) {
    const s = Array.isArray(e) ? e : Hd(e) ? [e] : zy(e)
      , i = s.length === 1 ? r : O1(r, s)
      , a = s.length - 1
      , u = s[a];
    return i && delete i[u],
    a !== 0 && (ht(i) && It(i) || Array.isArray(i) && I1(i)) && gt(r, s.slice(0, -1)),
    r
}
var Wy = r => {
    for (const e in r)
        if (kr(r[e]))
            return !0;
    return !1
}
;
function sl(r, e={}) {
    const s = Array.isArray(r);
    if (ht(r) || s)
        for (const i in r)
            Array.isArray(r[i]) || ht(r[i]) && !Wy(r[i]) ? (e[i] = Array.isArray(r[i]) ? [] : {},
            sl(r[i], e[i])) : Mt(r[i]) || (e[i] = !0);
    return e
}
function qy(r, e, s) {
    const i = Array.isArray(r);
    if (ht(r) || i)
        for (const a in r)
            Array.isArray(r[a]) || ht(r[a]) && !Wy(r[a]) ? et(e) || ud(s[a]) ? s[a] = Array.isArray(r[a]) ? sl(r[a], []) : {
                ...sl(r[a])
            } : qy(r[a], Mt(e) ? {} : e[a], s[a]) : s[a] = !In(r[a], e[a]);
    return s
}
var Ji = (r, e) => qy(r, e, sl(e));
const Pm = {
    value: !1,
    isValid: !1
}
  , Nm = {
    value: !0,
    isValid: !0
};
var Zy = r => {
    if (Array.isArray(r)) {
        if (r.length > 1) {
            const e = r.filter(s => s && s.checked && !s.disabled).map(s => s.value);
            return {
                value: e,
                isValid: !!e.length
            }
        }
        return r[0].checked && !r[0].disabled ? r[0].attributes && !et(r[0].attributes.value) ? et(r[0].value) || r[0].value === "" ? Nm : {
            value: r[0].value,
            isValid: !0
        } : Nm : Pm
    }
    return Pm
}
  , Ky = (r, {valueAsNumber: e, valueAsDate: s, setValueAs: i}) => et(r) ? r : e ? r === "" ? NaN : r && +r : s && zr(r) ? new Date(r) : i ? i(r) : r;
const Rm = {
    isValid: !1,
    value: null
};
var Gy = r => Array.isArray(r) ? r.reduce( (e, s) => s && s.checked && !s.disabled ? {
    isValid: !0,
    value: s.value
} : e, Rm) : Rm;
function Am(r) {
    const e = r.ref;
    return Wd(e) ? e.files : qd(e) ? Gy(r.refs).value : Hy(e) ? [...e.selectedOptions].map( ({value: s}) => s) : ko(e) ? Zy(r.refs).value : Ky(et(e.value) ? r.ref.value : e.value, r)
}
var j1 = (r, e, s, i) => {
    const a = {};
    for (const u of r) {
        const d = ne(e, u);
        d && Qe(a, u, d._f)
    }
    return {
        criteriaMode: s,
        names: [...r],
        fields: a,
        shouldUseNativeValidation: i
    }
}
  , il = r => r instanceof RegExp
  , eo = r => et(r) ? r : il(r) ? r.source : ht(r) ? il(r.value) ? r.value.source : r.value : r
  , qs = r => ({
    isOnSubmit: !r || r === cr.onSubmit,
    isOnBlur: r === cr.onBlur,
    isOnChange: r === cr.onChange,
    isOnAll: r === cr.all,
    isOnTouch: r === cr.onTouched
});
const Om = "AsyncFunction";
var D1 = r => !!r && !!r.validate && !!(kr(r.validate) && r.validate.constructor.name === Om || ht(r.validate) && Object.values(r.validate).find(e => e.constructor.name === Om))
  , F1 = r => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate)
  , cd = (r, e, s) => !s && (e.watchAll || e.watch.has(r) || [...e.watch].some(i => r.startsWith(i) && /^\.\w+/.test(r.slice(i.length))));
const Ys = (r, e, s, i) => {
    for (const a of s || Object.keys(r)) {
        const u = ne(r, a);
        if (u) {
            const {_f: d, ...f} = u;
            if (d) {
                if (d.refs && d.refs[0] && e(d.refs[0], a) && !i)
                    return !0;
                if (d.ref && e(d.ref, d.name) && !i)
                    return !0;
                if (Ys(f, e))
                    break
            } else if (ht(f) && Ys(f, e))
                break
        }
    }
}
;
function Im(r, e, s) {
    const i = ne(r, s);
    if (i || Hd(s))
        return {
            error: i,
            name: s
        };
    const a = s.split(".");
    for (; a.length; ) {
        const u = a.join(".")
          , d = ne(e, u)
          , f = ne(r, u);
        if (d && !Array.isArray(d) && s !== u)
            return {
                name: s
            };
        if (f && f.type)
            return {
                name: u,
                error: f
            };
        a.pop()
    }
    return {
        name: s
    }
}
var M1 = (r, e, s, i) => {
    s(r);
    const {name: a, ...u} = r;
    return It(u) || Object.keys(u).length >= Object.keys(e).length || Object.keys(u).find(d => e[d] === (!i || cr.all))
}
  , L1 = (r, e, s) => !r || !e || r === e || Ht(r).some(i => i && (s ? i === e : i.startsWith(e) || e.startsWith(i)))
  , V1 = (r, e, s, i, a) => a.isOnAll ? !1 : !s && a.isOnTouch ? !(e || r) : (s ? i.isOnBlur : a.isOnBlur) ? !r : (s ? i.isOnChange : a.isOnChange) ? r : !0
  , z1 = (r, e) => !Eo(ne(r, e)).length && gt(r, e)
  , Xy = (r, e, s) => {
    const i = Ht(ne(r, s));
    return Qe(i, "root", e[s]),
    Qe(r, s, i),
    r
}
  , qa = r => zr(r);
function jm(r, e, s="validate") {
    if (qa(r) || Array.isArray(r) && r.every(qa) || Yt(r) && !r)
        return {
            type: s,
            message: qa(r) ? r : "",
            ref: e
        }
}
var Qs = r => ht(r) && !il(r) ? r : {
    value: r,
    message: ""
}
  , dd = async (r, e, s, i, a, u) => {
    const {ref: d, refs: f, required: h, maxLength: m, minLength: g, min: x, max: b, pattern: T, validate: R, name: S, valueAsNumber: k, mount: F} = r._f
      , A = ne(s, S);
    if (!F || e.has(S))
        return {};
    const B = f ? f[0] : d
      , U = J => {
        a && B.reportValidity && (B.setCustomValidity(Yt(J) ? "" : J || ""),
        B.reportValidity())
    }
      , Q = {}
      , L = qd(d)
      , M = ko(d)
      , q = L || M
      , ie = (k || Wd(d)) && et(d.value) && et(A) || nl(d) && d.value === "" || A === "" || Array.isArray(A) && !A.length
      , me = Qy.bind(null, S, i, Q)
      , _e = (J, oe, G, be=nn.maxLength, ce=nn.minLength) => {
        const ye = J ? oe : G;
        Q[S] = {
            type: J ? be : ce,
            message: ye,
            ref: d,
            ...me(J ? be : ce, ye)
        }
    }
    ;
    if (u ? !Array.isArray(A) || !A.length : h && (!q && (ie || Mt(A)) || Yt(A) && !A || M && !Zy(f).isValid || L && !Gy(f).isValid)) {
        const {value: J, message: oe} = qa(h) ? {
            value: !!h,
            message: h
        } : Qs(h);
        if (J && (Q[S] = {
            type: nn.required,
            message: oe,
            ref: B,
            ...me(nn.required, oe)
        },
        !i))
            return U(oe),
            Q
    }
    if (!ie && (!Mt(x) || !Mt(b))) {
        let J, oe;
        const G = Qs(b)
          , be = Qs(x);
        if (!Mt(A) && !isNaN(A)) {
            const ce = d.valueAsNumber || A && +A;
            Mt(G.value) || (J = ce > G.value),
            Mt(be.value) || (oe = ce < be.value)
        } else {
            const ce = d.valueAsDate || new Date(A)
              , ye = te => new Date(new Date().toDateString() + " " + te)
              , V = d.type == "time"
              , re = d.type == "week";
            zr(G.value) && A && (J = V ? ye(A) > ye(G.value) : re ? A > G.value : ce > new Date(G.value)),
            zr(be.value) && A && (oe = V ? ye(A) < ye(be.value) : re ? A < be.value : ce < new Date(be.value))
        }
        if ((J || oe) && (_e(!!J, G.message, be.message, nn.max, nn.min),
        !i))
            return U(Q[S].message),
            Q
    }
    if ((m || g) && !ie && (zr(A) || u && Array.isArray(A))) {
        const J = Qs(m)
          , oe = Qs(g)
          , G = !Mt(J.value) && A.length > +J.value
          , be = !Mt(oe.value) && A.length < +oe.value;
        if ((G || be) && (_e(G, J.message, oe.message),
        !i))
            return U(Q[S].message),
            Q
    }
    if (T && !ie && zr(A)) {
        const {value: J, message: oe} = Qs(T);
        if (il(J) && !A.match(J) && (Q[S] = {
            type: nn.pattern,
            message: oe,
            ref: d,
            ...me(nn.pattern, oe)
        },
        !i))
            return U(oe),
            Q
    }
    if (R) {
        if (kr(R)) {
            const J = await R(A, s)
              , oe = jm(J, B);
            if (oe && (Q[S] = {
                ...oe,
                ...me(nn.validate, oe.message)
            },
            !i))
                return U(oe.message),
                Q
        } else if (ht(R)) {
            let J = {};
            for (const oe in R) {
                if (!It(J) && !i)
                    break;
                const G = jm(await R[oe](A, s), B, oe);
                G && (J = {
                    ...G,
                    ...me(oe, G.message)
                },
                U(G.message),
                i && (Q[S] = J))
            }
            if (!It(J) && (Q[S] = {
                ref: B,
                ...J
            },
            !i))
                return Q
        }
    }
    return U(!0),
    Q
}
;
const B1 = {
    mode: cr.onSubmit,
    reValidateMode: cr.onChange,
    shouldFocusError: !0
};
function U1(r={}) {
    let e = {
        ...B1,
        ...r
    }
      , s = {
        submitCount: 0,
        isDirty: !1,
        isLoading: kr(e.defaultValues),
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: e.errors || {},
        disabled: e.disabled || !1
    };
    const i = {};
    let a = ht(e.defaultValues) || ht(e.values) ? st(e.values || e.defaultValues) || {} : {}, u = e.shouldUnregister ? {} : st(a), d = {
        action: !1,
        mount: !1,
        watch: !1
    }, f = {
        mount: new Set,
        disabled: new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set
    }, h, m = 0;
    const g = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    };
    let x = {
        ...g
    };
    const b = {
        array: Tm(),
        state: Tm()
    }
      , T = qs(e.mode)
      , R = qs(e.reValidateMode)
      , S = e.criteriaMode === cr.all
      , k = C => j => {
        clearTimeout(m),
        m = setTimeout(C, j)
    }
      , F = async C => {
        if (!e.disabled && (g.isValid || x.isValid || C)) {
            const j = e.resolver ? It((await ie()).errors) : await _e(i, !0);
            j !== s.isValid && b.state.next({
                isValid: j
            })
        }
    }
      , A = (C, j) => {
        !e.disabled && (g.isValidating || g.validatingFields || x.isValidating || x.validatingFields) && ((C || Array.from(f.mount)).forEach(z => {
            z && (j ? Qe(s.validatingFields, z, j) : gt(s.validatingFields, z))
        }
        ),
        b.state.next({
            validatingFields: s.validatingFields,
            isValidating: !It(s.validatingFields)
        }))
    }
      , B = (C, j=[], z, le, se=!0, Y=!0) => {
        if (le && z && !e.disabled) {
            if (d.action = !0,
            Y && Array.isArray(ne(i, C))) {
                const fe = z(ne(i, C), le.argA, le.argB);
                se && Qe(i, C, fe)
            }
            if (Y && Array.isArray(ne(s.errors, C))) {
                const fe = z(ne(s.errors, C), le.argA, le.argB);
                se && Qe(s.errors, C, fe),
                z1(s.errors, C)
            }
            if ((g.touchedFields || x.touchedFields) && Y && Array.isArray(ne(s.touchedFields, C))) {
                const fe = z(ne(s.touchedFields, C), le.argA, le.argB);
                se && Qe(s.touchedFields, C, fe)
            }
            (g.dirtyFields || x.dirtyFields) && (s.dirtyFields = Ji(a, u)),
            b.state.next({
                name: C,
                isDirty: oe(C, j),
                dirtyFields: s.dirtyFields,
                errors: s.errors,
                isValid: s.isValid
            })
        } else
            Qe(u, C, j)
    }
      , U = (C, j) => {
        Qe(s.errors, C, j),
        b.state.next({
            errors: s.errors
        })
    }
      , Q = C => {
        s.errors = C,
        b.state.next({
            errors: s.errors,
            isValid: !1
        })
    }
      , L = (C, j, z, le) => {
        const se = ne(i, C);
        if (se) {
            const Y = ne(u, C, et(z) ? ne(a, C) : z);
            et(Y) || le && le.defaultChecked || j ? Qe(u, C, j ? Y : Am(se._f)) : ce(C, Y),
            d.mount && F()
        }
    }
      , M = (C, j, z, le, se) => {
        let Y = !1
          , fe = !1;
        const Le = {
            name: C
        };
        if (!e.disabled) {
            if (!z || le) {
                (g.isDirty || x.isDirty) && (fe = s.isDirty,
                s.isDirty = Le.isDirty = oe(),
                Y = fe !== Le.isDirty);
                const Ke = In(ne(a, C), j);
                fe = !!ne(s.dirtyFields, C),
                Ke ? gt(s.dirtyFields, C) : Qe(s.dirtyFields, C, !0),
                Le.dirtyFields = s.dirtyFields,
                Y = Y || (g.dirtyFields || x.dirtyFields) && fe !== !Ke
            }
            if (z) {
                const Ke = ne(s.touchedFields, C);
                Ke || (Qe(s.touchedFields, C, z),
                Le.touchedFields = s.touchedFields,
                Y = Y || (g.touchedFields || x.touchedFields) && Ke !== z)
            }
            Y && se && b.state.next(Le)
        }
        return Y ? Le : {}
    }
      , q = (C, j, z, le) => {
        const se = ne(s.errors, C)
          , Y = (g.isValid || x.isValid) && Yt(j) && s.isValid !== j;
        if (e.delayError && z ? (h = k( () => U(C, z)),
        h(e.delayError)) : (clearTimeout(m),
        h = null,
        z ? Qe(s.errors, C, z) : gt(s.errors, C)),
        (z ? !In(se, z) : se) || !It(le) || Y) {
            const fe = {
                ...le,
                ...Y && Yt(j) ? {
                    isValid: j
                } : {},
                errors: s.errors,
                name: C
            };
            s = {
                ...s,
                ...fe
            },
            b.state.next(fe)
        }
    }
      , ie = async C => {
        A(C, !0);
        const j = await e.resolver(u, e.context, j1(C || f.mount, i, e.criteriaMode, e.shouldUseNativeValidation));
        return A(C),
        j
    }
      , me = async C => {
        const {errors: j} = await ie(C);
        if (C)
            for (const z of C) {
                const le = ne(j, z);
                le ? Qe(s.errors, z, le) : gt(s.errors, z)
            }
        else
            s.errors = j;
        return j
    }
      , _e = async (C, j, z={
        valid: !0
    }) => {
        for (const le in C) {
            const se = C[le];
            if (se) {
                const {_f: Y, ...fe} = se;
                if (Y) {
                    const Le = f.array.has(Y.name)
                      , Ke = se._f && D1(se._f);
                    Ke && g.validatingFields && A([le], !0);
                    const lt = await dd(se, f.disabled, u, S, e.shouldUseNativeValidation && !j, Le);
                    if (Ke && g.validatingFields && A([le]),
                    lt[Y.name] && (z.valid = !1,
                    j))
                        break;
                    !j && (ne(lt, Y.name) ? Le ? Xy(s.errors, lt, Y.name) : Qe(s.errors, Y.name, lt[Y.name]) : gt(s.errors, Y.name))
                }
                !It(fe) && await _e(fe, j, z)
            }
        }
        return z.valid
    }
      , J = () => {
        for (const C of f.unMount) {
            const j = ne(i, C);
            j && (j._f.refs ? j._f.refs.every(z => !jc(z)) : !jc(j._f.ref)) && We(C)
        }
        f.unMount = new Set
    }
      , oe = (C, j) => !e.disabled && (C && j && Qe(u, C, j),
    !In($(), a))
      , G = (C, j, z) => $y(C, f, {
        ...d.mount ? u : et(j) ? a : zr(C) ? {
            [C]: j
        } : j
    }, z, j)
      , be = C => Eo(ne(d.mount ? u : a, C, e.shouldUnregister ? ne(a, C, []) : []))
      , ce = (C, j, z={}) => {
        const le = ne(i, C);
        let se = j;
        if (le) {
            const Y = le._f;
            Y && (!Y.disabled && Qe(u, C, Ky(j, Y)),
            se = nl(Y.ref) && Mt(j) ? "" : j,
            Hy(Y.ref) ? [...Y.ref.options].forEach(fe => fe.selected = se.includes(fe.value)) : Y.refs ? ko(Y.ref) ? Y.refs.length > 1 ? Y.refs.forEach(fe => (!fe.defaultChecked || !fe.disabled) && (fe.checked = Array.isArray(se) ? !!se.find(Le => Le === fe.value) : se === fe.value)) : Y.refs[0] && (Y.refs[0].checked = !!se) : Y.refs.forEach(fe => fe.checked = fe.value === se) : Wd(Y.ref) ? Y.ref.value = "" : (Y.ref.value = se,
            Y.ref.type || b.state.next({
                name: C,
                values: st(u)
            })))
        }
        (z.shouldDirty || z.shouldTouch) && M(C, se, z.shouldTouch, z.shouldDirty, !0),
        z.shouldValidate && N(C)
    }
      , ye = (C, j, z) => {
        for (const le in j) {
            const se = j[le]
              , Y = `${C}.${le}`
              , fe = ne(i, Y);
            (f.array.has(C) || ht(se) || fe && !fe._f) && !ss(se) ? ye(Y, se, z) : ce(Y, se, z)
        }
    }
      , V = (C, j, z={}) => {
        const le = ne(i, C)
          , se = f.array.has(C)
          , Y = st(j);
        Qe(u, C, Y),
        se ? (b.array.next({
            name: C,
            values: st(u)
        }),
        (g.isDirty || g.dirtyFields || x.isDirty || x.dirtyFields) && z.shouldDirty && b.state.next({
            name: C,
            dirtyFields: Ji(a, u),
            isDirty: oe(C, Y)
        })) : le && !le._f && !Mt(Y) ? ye(C, Y, z) : ce(C, Y, z),
        cd(C, f) && b.state.next({
            ...s
        }),
        b.state.next({
            name: d.mount ? C : void 0,
            values: st(u)
        })
    }
      , re = async C => {
        d.mount = !0;
        const j = C.target;
        let z = j.name
          , le = !0;
        const se = ne(i, z)
          , Y = fe => {
            le = Number.isNaN(fe) || ss(fe) && isNaN(fe.getTime()) || In(fe, ne(u, z, fe))
        }
        ;
        if (se) {
            let fe, Le;
            const Ke = j.type ? Am(se._f) : Ly(C)
              , lt = C.type === rl.BLUR || C.type === rl.FOCUS_OUT
              , Il = !F1(se._f) && !e.resolver && !ne(s.errors, z) && !se._f.deps || V1(lt, ne(s.touchedFields, z), s.isSubmitted, R, T)
              , gs = cd(z, f, lt);
            Qe(u, z, Ke),
            lt ? (se._f.onBlur && se._f.onBlur(C),
            h && h(0)) : se._f.onChange && se._f.onChange(C);
            const ys = M(z, Ke, lt)
              , jl = !It(ys) || gs;
            if (!lt && b.state.next({
                name: z,
                type: C.type,
                values: st(u)
            }),
            Il)
                return (g.isValid || x.isValid) && (e.mode === "onBlur" ? lt && F() : lt || F()),
                jl && b.state.next({
                    name: z,
                    ...gs ? {} : ys
                });
            if (!lt && gs && b.state.next({
                ...s
            }),
            e.resolver) {
                const {errors: vs} = await ie([z]);
                if (Y(Ke),
                le) {
                    const pi = Im(s.errors, i, z)
                      , xs = Im(vs, i, pi.name || z);
                    fe = xs.error,
                    z = xs.name,
                    Le = It(vs)
                }
            } else
                A([z], !0),
                fe = (await dd(se, f.disabled, u, S, e.shouldUseNativeValidation))[z],
                A([z]),
                Y(Ke),
                le && (fe ? Le = !1 : (g.isValid || x.isValid) && (Le = await _e(i, !0)));
            le && (se._f.deps && N(se._f.deps),
            q(z, Le, fe, ys))
        }
    }
      , te = (C, j) => {
        if (ne(s.errors, j) && C.focus)
            return C.focus(),
            1
    }
      , N = async (C, j={}) => {
        let z, le;
        const se = Ht(C);
        if (e.resolver) {
            const Y = await me(et(C) ? C : se);
            z = It(Y),
            le = C ? !se.some(fe => ne(Y, fe)) : z
        } else
            C ? (le = (await Promise.all(se.map(async Y => {
                const fe = ne(i, Y);
                return await _e(fe && fe._f ? {
                    [Y]: fe
                } : fe)
            }
            ))).every(Boolean),
            !(!le && !s.isValid) && F()) : le = z = await _e(i);
        return b.state.next({
            ...!zr(C) || (g.isValid || x.isValid) && z !== s.isValid ? {} : {
                name: C
            },
            ...e.resolver || !C ? {
                isValid: z
            } : {},
            errors: s.errors
        }),
        j.shouldFocus && !le && Ys(i, te, C ? se : f.mount),
        le
    }
      , $ = C => {
        const j = {
            ...d.mount ? u : a
        };
        return et(C) ? j : zr(C) ? ne(j, C) : C.map(z => ne(j, z))
    }
      , ke = (C, j) => ({
        invalid: !!ne((j || s).errors, C),
        isDirty: !!ne((j || s).dirtyFields, C),
        error: ne((j || s).errors, C),
        isValidating: !!ne(s.validatingFields, C),
        isTouched: !!ne((j || s).touchedFields, C)
    })
      , Ne = C => {
        C && Ht(C).forEach(j => gt(s.errors, j)),
        b.state.next({
            errors: C ? s.errors : {}
        })
    }
      , De = (C, j, z) => {
        const le = (ne(i, C, {
            _f: {}
        })._f || {}).ref
          , se = ne(s.errors, C) || {}
          , {ref: Y, message: fe, type: Le, ...Ke} = se;
        Qe(s.errors, C, {
            ...Ke,
            ...j,
            ref: le
        }),
        b.state.next({
            name: C,
            errors: s.errors,
            isValid: !1
        }),
        z && z.shouldFocus && le && le.focus && le.focus()
    }
      , Fe = (C, j) => kr(C) ? b.state.subscribe({
        next: z => C(G(void 0, j), z)
    }) : G(C, j, !0)
      , Me = C => b.state.subscribe({
        next: j => {
            L1(C.name, j.name, C.exact) && M1(j, C.formState || g, fi, C.reRenderRoot) && C.callback({
                values: {
                    ...u
                },
                ...s,
                ...j
            })
        }
    }).unsubscribe
      , Ve = C => (d.mount = !0,
    x = {
        ...x,
        ...C.formState
    },
    Me({
        ...C,
        formState: x
    }))
      , We = (C, j={}) => {
        for (const z of C ? Ht(C) : f.mount)
            f.mount.delete(z),
            f.array.delete(z),
            j.keepValue || (gt(i, z),
            gt(u, z)),
            !j.keepError && gt(s.errors, z),
            !j.keepDirty && gt(s.dirtyFields, z),
            !j.keepTouched && gt(s.touchedFields, z),
            !j.keepIsValidating && gt(s.validatingFields, z),
            !e.shouldUnregister && !j.keepDefaultValue && gt(a, z);
        b.state.next({
            values: st(u)
        }),
        b.state.next({
            ...s,
            ...j.keepDirty ? {
                isDirty: oe()
            } : {}
        }),
        !j.keepIsValid && F()
    }
      , bt = ({disabled: C, name: j}) => {
        (Yt(C) && d.mount || C || f.disabled.has(j)) && (C ? f.disabled.add(j) : f.disabled.delete(j))
    }
      , Ir = (C, j={}) => {
        let z = ne(i, C);
        const le = Yt(j.disabled) || Yt(e.disabled);
        return Qe(i, C, {
            ...z || {},
            _f: {
                ...z && z._f ? z._f : {
                    ref: {
                        name: C
                    }
                },
                name: C,
                mount: !0,
                ...j
            }
        }),
        f.mount.add(C),
        z ? bt({
            disabled: Yt(j.disabled) ? j.disabled : e.disabled,
            name: C
        }) : L(C, !0, j.value),
        {
            ...le ? {
                disabled: j.disabled || e.disabled
            } : {},
            ...e.progressive ? {
                required: !!j.required,
                min: eo(j.min),
                max: eo(j.max),
                minLength: eo(j.minLength),
                maxLength: eo(j.maxLength),
                pattern: eo(j.pattern)
            } : {},
            name: C,
            onChange: re,
            onBlur: re,
            ref: se => {
                if (se) {
                    Ir(C, j),
                    z = ne(i, C);
                    const Y = et(se.value) && se.querySelectorAll && se.querySelectorAll("input,select,textarea")[0] || se
                      , fe = A1(Y)
                      , Le = z._f.refs || [];
                    if (fe ? Le.find(Ke => Ke === Y) : Y === z._f.ref)
                        return;
                    Qe(i, C, {
                        _f: {
                            ...z._f,
                            ...fe ? {
                                refs: [...Le.filter(jc), Y, ...Array.isArray(ne(a, C)) ? [{}] : []],
                                ref: {
                                    type: Y.type,
                                    name: C
                                }
                            } : {
                                ref: Y
                            }
                        }
                    }),
                    L(C, !1, void 0, Y)
                } else
                    z = ne(i, C, {}),
                    z._f && (z._f.mount = !1),
                    (e.shouldUnregister || j.shouldUnregister) && !(Vy(f.array, C) && d.action) && f.unMount.add(C)
            }
        }
    }
      , Qn = () => e.shouldFocusError && Ys(i, te, f.mount)
      , dr = C => {
        Yt(C) && (b.state.next({
            disabled: C
        }),
        Ys(i, (j, z) => {
            const le = ne(i, z);
            le && (j.disabled = le._f.disabled || C,
            Array.isArray(le._f.refs) && le._f.refs.forEach(se => {
                se.disabled = le._f.disabled || C
            }
            ))
        }
        , 0, !1))
    }
      , ps = (C, j) => async z => {
        let le;
        z && (z.preventDefault && z.preventDefault(),
        z.persist && z.persist());
        let se = st(u);
        if (b.state.next({
            isSubmitting: !0
        }),
        e.resolver) {
            const {errors: Y, values: fe} = await ie();
            s.errors = Y,
            se = fe
        } else
            await _e(i);
        if (f.disabled.size)
            for (const Y of f.disabled)
                Qe(se, Y, void 0);
        if (gt(s.errors, "root"),
        It(s.errors)) {
            b.state.next({
                errors: {}
            });
            try {
                await C(se, z)
            } catch (Y) {
                le = Y
            }
        } else
            j && await j({
                ...s.errors
            }, z),
            Qn(),
            setTimeout(Qn);
        if (b.state.next({
            isSubmitted: !0,
            isSubmitting: !1,
            isSubmitSuccessful: It(s.errors) && !le,
            submitCount: s.submitCount + 1,
            errors: s.errors
        }),
        le)
            throw le
    }
      , Ro = (C, j={}) => {
        ne(i, C) && (et(j.defaultValue) ? V(C, st(ne(a, C))) : (V(C, j.defaultValue),
        Qe(a, C, st(j.defaultValue))),
        j.keepTouched || gt(s.touchedFields, C),
        j.keepDirty || (gt(s.dirtyFields, C),
        s.isDirty = j.defaultValue ? oe(C, st(ne(a, C))) : oe()),
        j.keepError || (gt(s.errors, C),
        g.isValid && F()),
        b.state.next({
            ...s
        }))
    }
      , di = (C, j={}) => {
        const z = C ? st(C) : a
          , le = st(z)
          , se = It(C)
          , Y = se ? a : le;
        if (j.keepDefaultValues || (a = z),
        !j.keepValues) {
            if (j.keepDirtyValues) {
                const fe = new Set([...f.mount, ...Object.keys(Ji(a, u))]);
                for (const Le of Array.from(fe))
                    ne(s.dirtyFields, Le) ? Qe(Y, Le, ne(u, Le)) : V(Le, ne(Y, Le))
            } else {
                if (Qd && et(C))
                    for (const fe of f.mount) {
                        const Le = ne(i, fe);
                        if (Le && Le._f) {
                            const Ke = Array.isArray(Le._f.refs) ? Le._f.refs[0] : Le._f.ref;
                            if (nl(Ke)) {
                                const lt = Ke.closest("form");
                                if (lt) {
                                    lt.reset();
                                    break
                                }
                            }
                        }
                    }
                for (const fe of f.mount)
                    V(fe, ne(Y, fe))
            }
            u = st(Y),
            b.array.next({
                values: {
                    ...Y
                }
            }),
            b.state.next({
                values: {
                    ...Y
                }
            })
        }
        f = {
            mount: j.keepDirtyValues ? f.mount : new Set,
            unMount: new Set,
            array: new Set,
            disabled: new Set,
            watch: new Set,
            watchAll: !1,
            focus: ""
        },
        d.mount = !g.isValid || !!j.keepIsValid || !!j.keepDirtyValues,
        d.watch = !!e.shouldUnregister,
        b.state.next({
            submitCount: j.keepSubmitCount ? s.submitCount : 0,
            isDirty: se ? !1 : j.keepDirty ? s.isDirty : !!(j.keepDefaultValues && !In(C, a)),
            isSubmitted: j.keepIsSubmitted ? s.isSubmitted : !1,
            dirtyFields: se ? {} : j.keepDirtyValues ? j.keepDefaultValues && u ? Ji(a, u) : s.dirtyFields : j.keepDefaultValues && C ? Ji(a, C) : j.keepDirty ? s.dirtyFields : {},
            touchedFields: j.keepTouched ? s.touchedFields : {},
            errors: j.keepErrors ? s.errors : {},
            isSubmitSuccessful: j.keepIsSubmitSuccessful ? s.isSubmitSuccessful : !1,
            isSubmitting: !1
        })
    }
      , hs = (C, j) => di(kr(C) ? C(u) : C, j)
      , Ao = (C, j={}) => {
        const z = ne(i, C)
          , le = z && z._f;
        if (le) {
            const se = le.refs ? le.refs[0] : le.ref;
            se.focus && (se.focus(),
            j.shouldSelect && kr(se.select) && se.select())
        }
    }
      , fi = C => {
        s = {
            ...s,
            ...C
        }
    }
      , qr = {
        control: {
            register: Ir,
            unregister: We,
            getFieldState: ke,
            handleSubmit: ps,
            setError: De,
            _subscribe: Me,
            _runSchema: ie,
            _getWatch: G,
            _getDirty: oe,
            _setValid: F,
            _setFieldArray: B,
            _setDisabledField: bt,
            _setErrors: Q,
            _getFieldArray: be,
            _reset: di,
            _resetDefaultValues: () => kr(e.defaultValues) && e.defaultValues().then(C => {
                hs(C, e.resetOptions),
                b.state.next({
                    isLoading: !1
                })
            }
            ),
            _removeUnmounted: J,
            _disableForm: dr,
            _subjects: b,
            _proxyFormState: g,
            get _fields() {
                return i
            },
            get _formValues() {
                return u
            },
            get _state() {
                return d
            },
            set _state(C) {
                d = C
            },
            get _defaultValues() {
                return a
            },
            get _names() {
                return f
            },
            set _names(C) {
                f = C
            },
            get _formState() {
                return s
            },
            get _options() {
                return e
            },
            set _options(C) {
                e = {
                    ...e,
                    ...C
                }
            }
        },
        subscribe: Ve,
        trigger: N,
        register: Ir,
        handleSubmit: ps,
        watch: Fe,
        setValue: V,
        getValues: $,
        reset: hs,
        resetField: Ro,
        clearErrors: Ne,
        unregister: We,
        setError: De,
        setFocus: Ao,
        getFieldState: ke
    };
    return {
        ...qr,
        formControl: qr
    }
}
var On = () => {
    const r = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
        const s = (Math.random() * 16 + r) % 16 | 0;
        return (e == "x" ? s : s & 3 | 8).toString(16)
    }
    )
}
  , Dc = (r, e, s={}) => s.shouldFocus || et(s.shouldFocus) ? s.focusName || `${r}.${et(s.focusIndex) ? e : s.focusIndex}.` : ""
  , Fc = (r, e) => [...r, ...Ht(e)]
  , Mc = r => Array.isArray(r) ? r.map( () => {}
) : void 0;
function Lc(r, e, s) {
    return [...r.slice(0, e), ...Ht(s), ...r.slice(e)]
}
var Vc = (r, e, s) => Array.isArray(r) ? (et(r[s]) && (r[s] = void 0),
r.splice(s, 0, r.splice(e, 1)[0]),
r) : []
  , zc = (r, e) => [...Ht(e), ...Ht(r)];
function $1(r, e) {
    let s = 0;
    const i = [...r];
    for (const a of e)
        i.splice(a - s, 1),
        s++;
    return Eo(i).length ? i : []
}
var Bc = (r, e) => et(e) ? [] : $1(r, Ht(e).sort( (s, i) => s - i))
  , Uc = (r, e, s) => {
    [r[e],r[s]] = [r[s], r[e]]
}
  , Dm = (r, e, s) => (r[e] = s,
r);
function Q1(r) {
    const e = To()
      , {control: s=e.control, name: i, keyName: a="id", shouldUnregister: u, rules: d} = r
      , [f,h] = we.useState(s._getFieldArray(i))
      , m = we.useRef(s._getFieldArray(i).map(On))
      , g = we.useRef(f)
      , x = we.useRef(i)
      , b = we.useRef(!1);
    x.current = i,
    g.current = f,
    s._names.array.add(i),
    d && s.register(i, d),
    we.useEffect( () => s._subjects.array.subscribe({
        next: ({values: L, name: M}) => {
            if (M === x.current || !M) {
                const q = ne(L, x.current);
                Array.isArray(q) && (h(q),
                m.current = q.map(On))
            }
        }
    }).unsubscribe, [s]);
    const T = we.useCallback(L => {
        b.current = !0,
        s._setFieldArray(i, L)
    }
    , [s, i])
      , R = (L, M) => {
        const q = Ht(st(L))
          , ie = Fc(s._getFieldArray(i), q);
        s._names.focus = Dc(i, ie.length - 1, M),
        m.current = Fc(m.current, q.map(On)),
        T(ie),
        h(ie),
        s._setFieldArray(i, ie, Fc, {
            argA: Mc(L)
        })
    }
      , S = (L, M) => {
        const q = Ht(st(L))
          , ie = zc(s._getFieldArray(i), q);
        s._names.focus = Dc(i, 0, M),
        m.current = zc(m.current, q.map(On)),
        T(ie),
        h(ie),
        s._setFieldArray(i, ie, zc, {
            argA: Mc(L)
        })
    }
      , k = L => {
        const M = Bc(s._getFieldArray(i), L);
        m.current = Bc(m.current, L),
        T(M),
        h(M),
        !Array.isArray(ne(s._fields, i)) && Qe(s._fields, i, void 0),
        s._setFieldArray(i, M, Bc, {
            argA: L
        })
    }
      , F = (L, M, q) => {
        const ie = Ht(st(M))
          , me = Lc(s._getFieldArray(i), L, ie);
        s._names.focus = Dc(i, L, q),
        m.current = Lc(m.current, L, ie.map(On)),
        T(me),
        h(me),
        s._setFieldArray(i, me, Lc, {
            argA: L,
            argB: Mc(M)
        })
    }
      , A = (L, M) => {
        const q = s._getFieldArray(i);
        Uc(q, L, M),
        Uc(m.current, L, M),
        T(q),
        h(q),
        s._setFieldArray(i, q, Uc, {
            argA: L,
            argB: M
        }, !1)
    }
      , B = (L, M) => {
        const q = s._getFieldArray(i);
        Vc(q, L, M),
        Vc(m.current, L, M),
        T(q),
        h(q),
        s._setFieldArray(i, q, Vc, {
            argA: L,
            argB: M
        }, !1)
    }
      , U = (L, M) => {
        const q = st(M)
          , ie = Dm(s._getFieldArray(i), L, q);
        m.current = [...ie].map( (me, _e) => !me || _e === L ? On() : m.current[_e]),
        T(ie),
        h([...ie]),
        s._setFieldArray(i, ie, Dm, {
            argA: L,
            argB: q
        }, !0, !1)
    }
      , Q = L => {
        const M = Ht(st(L));
        m.current = M.map(On),
        T([...M]),
        h([...M]),
        s._setFieldArray(i, [...M], q => q, {}, !0, !1)
    }
    ;
    return we.useEffect( () => {
        if (s._state.action = !1,
        cd(i, s._names) && s._subjects.state.next({
            ...s._formState
        }),
        b.current && (!qs(s._options.mode).isOnSubmit || s._formState.isSubmitted) && !qs(s._options.reValidateMode).isOnSubmit)
            if (s._options.resolver)
                s._runSchema([i]).then(L => {
                    const M = ne(L.errors, i)
                      , q = ne(s._formState.errors, i);
                    (q ? !M && q.type || M && (q.type !== M.type || q.message !== M.message) : M && M.type) && (M ? Qe(s._formState.errors, i, M) : gt(s._formState.errors, i),
                    s._subjects.state.next({
                        errors: s._formState.errors
                    }))
                }
                );
            else {
                const L = ne(s._fields, i);
                L && L._f && !(qs(s._options.reValidateMode).isOnSubmit && qs(s._options.mode).isOnSubmit) && dd(L, s._names.disabled, s._formValues, s._options.criteriaMode === cr.all, s._options.shouldUseNativeValidation, !0).then(M => !It(M) && s._subjects.state.next({
                    errors: Xy(s._formState.errors, M, i)
                }))
            }
        s._subjects.state.next({
            name: i,
            values: st(s._formValues)
        }),
        s._names.focus && Ys(s._fields, (L, M) => {
            if (s._names.focus && M.startsWith(s._names.focus) && L.focus)
                return L.focus(),
                1
        }
        ),
        s._names.focus = "",
        s._setValid(),
        b.current = !1
    }
    , [f, i, s]),
    we.useEffect( () => (!ne(s._formValues, i) && s._setFieldArray(i),
    () => {
        const L = (M, q) => {
            const ie = ne(s._fields, M);
            ie && ie._f && (ie._f.mount = q)
        }
        ;
        s._options.shouldUnregister || u ? s.unregister(i) : L(i, !1)
    }
    ), [i, s, a, u]),
    {
        swap: we.useCallback(A, [T, i, s]),
        move: we.useCallback(B, [T, i, s]),
        prepend: we.useCallback(S, [T, i, s]),
        append: we.useCallback(R, [T, i, s]),
        remove: we.useCallback(k, [T, i, s]),
        insert: we.useCallback(F, [T, i, s]),
        update: we.useCallback(U, [T, i, s]),
        replace: we.useCallback(Q, [T, i, s]),
        fields: we.useMemo( () => f.map( (L, M) => ({
            ...L,
            [a]: m.current[M] || On()
        })), [f, a])
    }
}
function H1(r={}) {
    const e = we.useRef(void 0)
      , s = we.useRef(void 0)
      , [i,a] = we.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: kr(r.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: r.errors || {},
        disabled: r.disabled || !1,
        defaultValues: kr(r.defaultValues) ? void 0 : r.defaultValues
    });
    e.current || (e.current = {
        ...r.formControl ? r.formControl : U1(r),
        formState: i
    },
    r.formControl && r.defaultValues && !kr(r.defaultValues) && r.formControl.reset(r.defaultValues, r.resetOptions));
    const u = e.current.control;
    return u._options = r,
    we.useLayoutEffect( () => u._subscribe({
        formState: u._proxyFormState,
        callback: () => a({
            ...u._formState
        }),
        reRenderRoot: !0
    }), [u]),
    we.useEffect( () => u._disableForm(r.disabled), [u, r.disabled]),
    we.useEffect( () => {
        if (u._proxyFormState.isDirty) {
            const d = u._getDirty();
            d !== i.isDirty && u._subjects.state.next({
                isDirty: d
            })
        }
    }
    , [u, i.isDirty]),
    we.useEffect( () => {
        r.values && !In(r.values, s.current) ? (u._reset(r.values, u._options.resetOptions),
        s.current = r.values,
        a(d => ({
            ...d
        }))) : u._resetDefaultValues()
    }
    , [r.values, u]),
    we.useEffect( () => {
        r.errors && !It(r.errors) && u._setErrors(r.errors)
    }
    , [r.errors, u]),
    we.useEffect( () => {
        u._state.mount || (u._setValid(),
        u._state.mount = !0),
        u._state.watch && (u._state.watch = !1,
        u._subjects.state.next({
            ...u._formState
        })),
        u._removeUnmounted()
    }
    ),
    we.useEffect( () => {
        r.shouldUnregister && u._subjects.state.next({
            values: u._getWatch()
        })
    }
    , [r.shouldUnregister, u]),
    e.current.formState = Uy(i, u),
    e.current
}
const Fm = (r, e, s) => {
    if (r && "reportValidity"in r) {
        const i = ne(s, e);
        r.setCustomValidity(i && i.message || ""),
        r.reportValidity()
    }
}
  , Yy = (r, e) => {
    for (const s in e.fields) {
        const i = e.fields[s];
        i && i.ref && "reportValidity"in i.ref ? Fm(i.ref, s, r) : i.refs && i.refs.forEach(a => Fm(a, s, r))
    }
}
  , W1 = (r, e) => {
    e.shouldUseNativeValidation && Yy(r, e);
    const s = {};
    for (const i in r) {
        const a = ne(e.fields, i)
          , u = Object.assign(r[i] || {}, {
            ref: a && a.ref
        });
        if (q1(e.names || Object.keys(r), i)) {
            const d = Object.assign({}, ne(s, i));
            Qe(d, "root", u),
            Qe(s, i, d)
        } else
            Qe(s, i, u)
    }
    return s
}
  , q1 = (r, e) => r.some(s => s.startsWith(e + "."));
var Z1 = function(r, e) {
    for (var s = {}; r.length; ) {
        var i = r[0]
          , a = i.code
          , u = i.message
          , d = i.path.join(".");
        if (!s[d])
            if ("unionErrors"in i) {
                var f = i.unionErrors[0].errors[0];
                s[d] = {
                    message: f.message,
                    type: f.code
                }
            } else
                s[d] = {
                    message: u,
                    type: a
                };
        if ("unionErrors"in i && i.unionErrors.forEach(function(g) {
            return g.errors.forEach(function(x) {
                return r.push(x)
            })
        }),
        e) {
            var h = s[d].types
              , m = h && h[i.code];
            s[d] = Qy(d, e, s, a, m ? [].concat(m, i.message) : i.message)
        }
        r.shift()
    }
    return s
}
  , K1 = function(r, e, s) {
    return s === void 0 && (s = {}),
    function(i, a, u) {
        try {
            return Promise.resolve((function(d, f) {
                try {
                    var h = Promise.resolve(r[s.mode === "sync" ? "parse" : "parseAsync"](i, e)).then(function(m) {
                        return u.shouldUseNativeValidation && Yy({}, u),
                        {
                            errors: {},
                            values: s.raw ? i : m
                        }
                    })
                } catch (m) {
                    return f(m)
                }
                return h && h.then ? h.then(void 0, f) : h
            }
            )(0, function(d) {
                if ((function(f) {
                    return Array.isArray(f?.errors)
                }
                )(d))
                    return {
                        values: {},
                        errors: W1(Z1(d.errors, !u.shouldUseNativeValidation && u.criteriaMode === "all"), u)
                    };
                throw d
            }))
        } catch (d) {
            return Promise.reject(d)
        }
    }
};
const W = Symbol.for("drizzle:entityKind");
function Pt(r, e) {
    if (!r || typeof r != "object")
        return !1;
    if (r instanceof e)
        return !0;
    if (!Object.prototype.hasOwnProperty.call(e, W))
        throw new Error(`Class "${e.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
    let s = Object.getPrototypeOf(r).constructor;
    if (s)
        for (; s; ) {
            if (W in s && s[W] === e[W])
                return !0;
            s = Object.getPrototypeOf(s)
        }
    return !1
}
class uo {
    constructor(e, s) {
        this.table = e,
        this.config = s,
        this.name = s.name,
        this.keyAsName = s.keyAsName,
        this.notNull = s.notNull,
        this.default = s.default,
        this.defaultFn = s.defaultFn,
        this.onUpdateFn = s.onUpdateFn,
        this.hasDefault = s.hasDefault,
        this.primary = s.primaryKey,
        this.isUnique = s.isUnique,
        this.uniqueName = s.uniqueName,
        this.uniqueType = s.uniqueType,
        this.dataType = s.dataType,
        this.columnType = s.columnType,
        this.generated = s.generated,
        this.generatedIdentity = s.generatedIdentity
    }
    static[W] = "Column";
    name;
    keyAsName;
    primary;
    notNull;
    default;
    defaultFn;
    onUpdateFn;
    hasDefault;
    isUnique;
    uniqueName;
    uniqueType;
    dataType;
    columnType;
    enumValues = void 0;
    generated = void 0;
    generatedIdentity = void 0;
    config;
    mapFromDriverValue(e) {
        return e
    }
    mapToDriverValue(e) {
        return e
    }
    shouldDisableInsert() {
        return this.config.generated !== void 0 && this.config.generated.type !== "byDefault"
    }
}
class G1 {
    static[W] = "ColumnBuilder";
    config;
    constructor(e, s, i) {
        this.config = {
            name: e,
            keyAsName: e === "",
            notNull: !1,
            default: void 0,
            hasDefault: !1,
            primaryKey: !1,
            isUnique: !1,
            uniqueName: void 0,
            uniqueType: void 0,
            dataType: s,
            columnType: i,
            generated: void 0
        }
    }
    $type() {
        return this
    }
    notNull() {
        return this.config.notNull = !0,
        this
    }
    default(e) {
        return this.config.default = e,
        this.config.hasDefault = !0,
        this
    }
    $defaultFn(e) {
        return this.config.defaultFn = e,
        this.config.hasDefault = !0,
        this
    }
    $default = this.$defaultFn;
    $onUpdateFn(e) {
        return this.config.onUpdateFn = e,
        this.config.hasDefault = !0,
        this
    }
    $onUpdate = this.$onUpdateFn;
    primaryKey() {
        return this.config.primaryKey = !0,
        this.config.notNull = !0,
        this
    }
    setName(e) {
        this.config.name === "" && (this.config.name = e)
    }
}
const Js = Symbol.for("drizzle:Name");
class X1 {
    static[W] = "PgForeignKeyBuilder";
    reference;
    _onUpdate = "no action";
    _onDelete = "no action";
    constructor(e, s) {
        this.reference = () => {
            const {name: i, columns: a, foreignColumns: u} = e();
            return {
                name: i,
                columns: a,
                foreignTable: u[0].table,
                foreignColumns: u
            }
        }
        ,
        s && (this._onUpdate = s.onUpdate,
        this._onDelete = s.onDelete)
    }
    onUpdate(e) {
        return this._onUpdate = e === void 0 ? "no action" : e,
        this
    }
    onDelete(e) {
        return this._onDelete = e === void 0 ? "no action" : e,
        this
    }
    build(e) {
        return new Y1(e,this)
    }
}
class Y1 {
    constructor(e, s) {
        this.table = e,
        this.reference = s.reference,
        this.onUpdate = s._onUpdate,
        this.onDelete = s._onDelete
    }
    static[W] = "PgForeignKey";
    reference;
    onUpdate;
    onDelete;
    getName() {
        const {name: e, columns: s, foreignColumns: i} = this.reference()
          , a = s.map(f => f.name)
          , u = i.map(f => f.name)
          , d = [this.table[Js], ...a, i[0].table[Js], ...u];
        return e ?? `${d.join("_")}_fk`
    }
}
function J1(r, ...e) {
    return r(...e)
}
function eC(r, e) {
    return `${r[Js]}_${e.join("_")}_unique`
}
function Mm(r, e, s) {
    for (let i = e; i < r.length; i++) {
        const a = r[i];
        if (a === "\\") {
            i++;
            continue
        }
        if (a === '"')
            return [r.slice(e, i).replace(/\\/g, ""), i + 1];
        if (!s && (a === "," || a === "}"))
            return [r.slice(e, i).replace(/\\/g, ""), i]
    }
    return [r.slice(e).replace(/\\/g, ""), r.length]
}
function Jy(r, e=0) {
    const s = [];
    let i = e
      , a = !1;
    for (; i < r.length; ) {
        const u = r[i];
        if (u === ",") {
            (a || i === e) && s.push(""),
            a = !0,
            i++;
            continue
        }
        if (a = !1,
        u === "\\") {
            i += 2;
            continue
        }
        if (u === '"') {
            const [h,m] = Mm(r, i + 1, !0);
            s.push(h),
            i = m;
            continue
        }
        if (u === "}")
            return [s, i + 1];
        if (u === "{") {
            const [h,m] = Jy(r, i + 1);
            s.push(h),
            i = m;
            continue
        }
        const [d,f] = Mm(r, i, !1);
        s.push(d),
        i = f
    }
    return [s, i]
}
function tC(r) {
    const [e] = Jy(r, 1);
    return e
}
function ev(r) {
    return `{${r.map(e => Array.isArray(e) ? ev(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`
}
class Ue extends G1 {
    foreignKeyConfigs = [];
    static[W] = "PgColumnBuilder";
    array(e) {
        return new nC(this.config.name,this,e)
    }
    references(e, s={}) {
        return this.foreignKeyConfigs.push({
            ref: e,
            actions: s
        }),
        this
    }
    unique(e, s) {
        return this.config.isUnique = !0,
        this.config.uniqueName = e,
        this.config.uniqueType = s?.nulls,
        this
    }
    generatedAlwaysAs(e) {
        return this.config.generated = {
            as: e,
            type: "always",
            mode: "stored"
        },
        this
    }
    buildForeignKeys(e, s) {
        return this.foreignKeyConfigs.map( ({ref: i, actions: a}) => J1( (u, d) => {
            const f = new X1( () => {
                const h = u();
                return {
                    columns: [e],
                    foreignColumns: [h]
                }
            }
            );
            return d.onUpdate && f.onUpdate(d.onUpdate),
            d.onDelete && f.onDelete(d.onDelete),
            f.build(s)
        }
        , i, a))
    }
    buildExtraConfigColumn(e) {
        return new rC(e,this.config)
    }
}
class Oe extends uo {
    constructor(e, s) {
        s.uniqueName || (s.uniqueName = eC(e, [s.name])),
        super(e, s),
        this.table = e
    }
    static[W] = "PgColumn"
}
class rC extends Oe {
    static[W] = "ExtraConfigColumn";
    getSQLType() {
        return this.getSQLType()
    }
    indexConfig = {
        order: this.config.order ?? "asc",
        nulls: this.config.nulls ?? "last",
        opClass: this.config.opClass
    };
    defaultConfig = {
        order: "asc",
        nulls: "last",
        opClass: void 0
    };
    asc() {
        return this.indexConfig.order = "asc",
        this
    }
    desc() {
        return this.indexConfig.order = "desc",
        this
    }
    nullsFirst() {
        return this.indexConfig.nulls = "first",
        this
    }
    nullsLast() {
        return this.indexConfig.nulls = "last",
        this
    }
    op(e) {
        return this.indexConfig.opClass = e,
        this
    }
}
class nC extends Ue {
    static[W] = "PgArrayBuilder";
    constructor(e, s, i) {
        super(e, "array", "PgArray"),
        this.config.baseBuilder = s,
        this.config.size = i
    }
    build(e) {
        const s = this.config.baseBuilder.build(e);
        return new Zd(e,this.config,s)
    }
}
class Zd extends Oe {
    constructor(e, s, i, a) {
        super(e, s),
        this.baseColumn = i,
        this.range = a,
        this.size = s.size
    }
    size;
    static[W] = "PgArray";
    getSQLType() {
        return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`
    }
    mapFromDriverValue(e) {
        return typeof e == "string" && (e = tC(e)),
        e.map(s => this.baseColumn.mapFromDriverValue(s))
    }
    mapToDriverValue(e, s=!1) {
        const i = e.map(a => a === null ? null : Pt(this.baseColumn, Zd) ? this.baseColumn.mapToDriverValue(a, !0) : this.baseColumn.mapToDriverValue(a));
        return s ? i : ev(i)
    }
}
const Lm = Symbol.for("drizzle:isPgEnum");
function sC(r) {
    return !!r && typeof r == "function" && Lm in r && r[Lm] === !0
}
class tv {
    static[W] = "Subquery";
    constructor(e, s, i, a=!1) {
        this._ = {
            brand: "Subquery",
            sql: e,
            selectedFields: s,
            alias: i,
            isWith: a
        }
    }
}
const iC = {
    startActiveSpan(r, e) {
        return e()
    }
}
  , ei = Symbol.for("drizzle:ViewBaseConfig")
  , $c = Symbol.for("drizzle:Schema")
  , Vm = Symbol.for("drizzle:Columns")
  , zm = Symbol.for("drizzle:ExtraConfigColumns")
  , Qc = Symbol.for("drizzle:OriginalName")
  , Hc = Symbol.for("drizzle:BaseName")
  , ol = Symbol.for("drizzle:IsAlias")
  , Bm = Symbol.for("drizzle:ExtraConfigBuilder")
  , rv = Symbol.for("drizzle:IsDrizzleTable");
let er = class {
    static[W] = "Table";
    static Symbol = {
        Name: Js,
        Schema: $c,
        OriginalName: Qc,
        Columns: Vm,
        ExtraConfigColumns: zm,
        BaseName: Hc,
        IsAlias: ol,
        ExtraConfigBuilder: Bm
    };
    [Js];
    [Qc];
    [$c];
    [Vm];
    [zm];
    [Hc];
    [ol] = !1;
    [rv] = !0;
    [Bm] = void 0;
    constructor(e, s, i) {
        this[Js] = this[Qc] = e,
        this[$c] = s,
        this[Hc] = i
    }
}
;
function nv(r) {
    return typeof r == "object" && r !== null && rv in r
}
function oC(r) {
    return r != null && typeof r.getSQL == "function"
}
function aC(r) {
    const e = {
        sql: "",
        params: []
    };
    for (const s of r)
        e.sql += s.sql,
        e.params.push(...s.params),
        s.typings?.length && (e.typings || (e.typings = []),
        e.typings.push(...s.typings));
    return e
}
class Sr {
    static[W] = "StringChunk";
    value;
    constructor(e) {
        this.value = Array.isArray(e) ? e : [e]
    }
    getSQL() {
        return new ct([this])
    }
}
class ct {
    constructor(e) {
        this.queryChunks = e
    }
    static[W] = "SQL";
    decoder = sv;
    shouldInlineParams = !1;
    append(e) {
        return this.queryChunks.push(...e.queryChunks),
        this
    }
    toQuery(e) {
        return iC.startActiveSpan("drizzle.buildSQL", s => {
            const i = this.buildQueryFromSourceParams(this.queryChunks, e);
            return s?.setAttributes({
                "drizzle.query.text": i.sql,
                "drizzle.query.params": JSON.stringify(i.params)
            }),
            i
        }
        )
    }
    buildQueryFromSourceParams(e, s) {
        const i = Object.assign({}, s, {
            inlineParams: s.inlineParams || this.shouldInlineParams,
            paramStartIndex: s.paramStartIndex || {
                value: 0
            }
        })
          , {casing: a, escapeName: u, escapeParam: d, prepareTyping: f, inlineParams: h, paramStartIndex: m} = i;
        return aC(e.map(g => {
            if (Pt(g, Sr))
                return {
                    sql: g.value.join(""),
                    params: []
                };
            if (Pt(g, fd))
                return {
                    sql: u(g.value),
                    params: []
                };
            if (g === void 0)
                return {
                    sql: "",
                    params: []
                };
            if (Array.isArray(g)) {
                const x = [new Sr("(")];
                for (const [b,T] of g.entries())
                    x.push(T),
                    b < g.length - 1 && x.push(new Sr(", "));
                return x.push(new Sr(")")),
                this.buildQueryFromSourceParams(x, i)
            }
            if (Pt(g, ct))
                return this.buildQueryFromSourceParams(g.queryChunks, {
                    ...i,
                    inlineParams: h || g.shouldInlineParams
                });
            if (Pt(g, er)) {
                const x = g[er.Symbol.Schema]
                  , b = g[er.Symbol.Name];
                return {
                    sql: x === void 0 || g[ol] ? u(b) : u(x) + "." + u(b),
                    params: []
                }
            }
            if (Pt(g, uo)) {
                const x = a.getColumnCasing(g);
                if (s.invokeSource === "indexes")
                    return {
                        sql: u(x),
                        params: []
                    };
                const b = g.table[er.Symbol.Schema];
                return {
                    sql: g.table[ol] || b === void 0 ? u(g.table[er.Symbol.Name]) + "." + u(x) : u(b) + "." + u(g.table[er.Symbol.Name]) + "." + u(x),
                    params: []
                }
            }
            if (Pt(g, lC)) {
                const x = g[ei].schema
                  , b = g[ei].name;
                return {
                    sql: x === void 0 || g[ei].isAlias ? u(b) : u(x) + "." + u(b),
                    params: []
                }
            }
            if (Pt(g, ov)) {
                if (Pt(g.value, pd))
                    return {
                        sql: d(m.value++, g),
                        params: [g],
                        typings: ["none"]
                    };
                const x = g.value === null ? null : g.encoder.mapToDriverValue(g.value);
                if (Pt(x, ct))
                    return this.buildQueryFromSourceParams([x], i);
                if (h)
                    return {
                        sql: this.mapInlineParam(x, i),
                        params: []
                    };
                let b = ["none"];
                return f && (b = [f(g.encoder)]),
                {
                    sql: d(m.value++, x),
                    params: [x],
                    typings: b
                }
            }
            return Pt(g, pd) ? {
                sql: d(m.value++, g),
                params: [g],
                typings: ["none"]
            } : Pt(g, ct.Aliased) && g.fieldAlias !== void 0 ? {
                sql: u(g.fieldAlias),
                params: []
            } : Pt(g, tv) ? g._.isWith ? {
                sql: u(g._.alias),
                params: []
            } : this.buildQueryFromSourceParams([new Sr("("), g._.sql, new Sr(") "), new fd(g._.alias)], i) : sC(g) ? g.schema ? {
                sql: u(g.schema) + "." + u(g.enumName),
                params: []
            } : {
                sql: u(g.enumName),
                params: []
            } : oC(g) ? g.shouldOmitSQLParens?.() ? this.buildQueryFromSourceParams([g.getSQL()], i) : this.buildQueryFromSourceParams([new Sr("("), g.getSQL(), new Sr(")")], i) : h ? {
                sql: this.mapInlineParam(g, i),
                params: []
            } : {
                sql: d(m.value++, g),
                params: [g],
                typings: ["none"]
            }
        }
        ))
    }
    mapInlineParam(e, {escapeString: s}) {
        if (e === null)
            return "null";
        if (typeof e == "number" || typeof e == "boolean")
            return e.toString();
        if (typeof e == "string")
            return s(e);
        if (typeof e == "object") {
            const i = e.toString();
            return s(i === "[object Object]" ? JSON.stringify(e) : i)
        }
        throw new Error("Unexpected param value: " + e)
    }
    getSQL() {
        return this
    }
    as(e) {
        return e === void 0 ? this : new ct.Aliased(this,e)
    }
    mapWith(e) {
        return this.decoder = typeof e == "function" ? {
            mapFromDriverValue: e
        } : e,
        this
    }
    inlineParams() {
        return this.shouldInlineParams = !0,
        this
    }
    if(e) {
        return e ? this : void 0
    }
}
class fd {
    constructor(e) {
        this.value = e
    }
    static[W] = "Name";
    brand;
    getSQL() {
        return new ct([this])
    }
}
const sv = {
    mapFromDriverValue: r => r
}
  , iv = {
    mapToDriverValue: r => r
};
({
    ...sv,
    ...iv
});
class ov {
    constructor(e, s=iv) {
        this.value = e,
        this.encoder = s
    }
    static[W] = "Param";
    brand;
    getSQL() {
        return new ct([this])
    }
}
function al(r, ...e) {
    const s = [];
    (e.length > 0 || r.length > 0 && r[0] !== "") && s.push(new Sr(r[0]));
    for (const [i,a] of e.entries())
        s.push(a, new Sr(r[i + 1]));
    return new ct(s)
}
(r => {
    function e() {
        return new ct([])
    }
    r.empty = e;
    function s(h) {
        return new ct(h)
    }
    r.fromList = s;
    function i(h) {
        return new ct([new Sr(h)])
    }
    r.raw = i;
    function a(h, m) {
        const g = [];
        for (const [x,b] of h.entries())
            x > 0 && m !== void 0 && g.push(m),
            g.push(b);
        return new ct(g)
    }
    r.join = a;
    function u(h) {
        return new fd(h)
    }
    r.identifier = u;
    function d(h) {
        return new pd(h)
    }
    r.placeholder = d;
    function f(h, m) {
        return new ov(h,m)
    }
    r.param = f
}
)(al || (al = {}));
(r => {
    class e {
        constructor(i, a) {
            this.sql = i,
            this.fieldAlias = a
        }
        static[W] = "SQL.Aliased";
        isSelectionField = !1;
        getSQL() {
            return this.sql
        }
        clone() {
            return new e(this.sql,this.fieldAlias)
        }
    }
    r.Aliased = e
}
)(ct || (ct = {}));
class pd {
    constructor(e) {
        this.name = e
    }
    static[W] = "Placeholder";
    getSQL() {
        return new ct([this])
    }
}
const av = Symbol.for("drizzle:IsDrizzleView");
class lC {
    static[W] = "View";
    [ei];
    [av] = !0;
    constructor({name: e, schema: s, selectedFields: i, query: a}) {
        this[ei] = {
            name: e,
            originalName: e,
            schema: s,
            selectedFields: i,
            query: a,
            isExisting: !a,
            isAlias: !1
        }
    }
    getSQL() {
        return new ct([this])
    }
}
function uC(r) {
    return typeof r == "object" && r !== null && av in r
}
uo.prototype.getSQL = function() {
    return new ct([this])
}
;
er.prototype.getSQL = function() {
    return new ct([this])
}
;
tv.prototype.getSQL = function() {
    return new ct([this])
}
;
function cC(r) {
    return r[er.Symbol.Columns]
}
function dC(r) {
    return r[ei].selectedFields
}
function kt(r, e) {
    return {
        name: typeof r == "string" && r.length > 0 ? r : "",
        config: typeof r == "object" ? r : e
    }
}
class Pl extends Ue {
    static[W] = "PgIntColumnBaseBuilder";
    generatedAlwaysAsIdentity(e) {
        if (e) {
            const {name: s, ...i} = e;
            this.config.generatedIdentity = {
                type: "always",
                sequenceName: s,
                sequenceOptions: i
            }
        } else
            this.config.generatedIdentity = {
                type: "always"
            };
        return this.config.hasDefault = !0,
        this.config.notNull = !0,
        this
    }
    generatedByDefaultAsIdentity(e) {
        if (e) {
            const {name: s, ...i} = e;
            this.config.generatedIdentity = {
                type: "byDefault",
                sequenceName: s,
                sequenceOptions: i
            }
        } else
            this.config.generatedIdentity = {
                type: "byDefault"
            };
        return this.config.hasDefault = !0,
        this.config.notNull = !0,
        this
    }
}
class fC extends Pl {
    static[W] = "PgBigInt53Builder";
    constructor(e) {
        super(e, "number", "PgBigInt53")
    }
    build(e) {
        return new pC(e,this.config)
    }
}
class pC extends Oe {
    static[W] = "PgBigInt53";
    getSQLType() {
        return "bigint"
    }
    mapFromDriverValue(e) {
        return typeof e == "number" ? e : Number(e)
    }
}
class hC extends Pl {
    static[W] = "PgBigInt64Builder";
    constructor(e) {
        super(e, "bigint", "PgBigInt64")
    }
    build(e) {
        return new mC(e,this.config)
    }
}
class mC extends Oe {
    static[W] = "PgBigInt64";
    getSQLType() {
        return "bigint"
    }
    mapFromDriverValue(e) {
        return BigInt(e)
    }
}
function gC(r, e) {
    const {name: s, config: i} = kt(r, e);
    return i.mode === "number" ? new fC(s) : new hC(s)
}
class yC extends Ue {
    static[W] = "PgBigSerial53Builder";
    constructor(e) {
        super(e, "number", "PgBigSerial53"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new vC(e,this.config)
    }
}
class vC extends Oe {
    static[W] = "PgBigSerial53";
    getSQLType() {
        return "bigserial"
    }
    mapFromDriverValue(e) {
        return typeof e == "number" ? e : Number(e)
    }
}
class xC extends Ue {
    static[W] = "PgBigSerial64Builder";
    constructor(e) {
        super(e, "bigint", "PgBigSerial64"),
        this.config.hasDefault = !0
    }
    build(e) {
        return new wC(e,this.config)
    }
}
class wC extends Oe {
    static[W] = "PgBigSerial64";
    getSQLType() {
        return "bigserial"
    }
    mapFromDriverValue(e) {
        return BigInt(e)
    }
}
function bC(r, e) {
    const {name: s, config: i} = kt(r, e);
    return i.mode === "number" ? new yC(s) : new xC(s)
}
class _C extends Ue {
    static[W] = "PgBooleanBuilder";
    constructor(e) {
        super(e, "boolean", "PgBoolean")
    }
    build(e) {
        return new SC(e,this.config)
    }
}
class SC extends Oe {
    static[W] = "PgBoolean";
    getSQLType() {
        return "boolean"
    }
}
function sn(r) {
    return new _C(r ?? "")
}
class CC extends Ue {
    static[W] = "PgCharBuilder";
    constructor(e, s) {
        super(e, "string", "PgChar"),
        this.config.length = s.length,
        this.config.enumValues = s.enum
    }
    build(e) {
        return new kC(e,this.config)
    }
}
class kC extends Oe {
    static[W] = "PgChar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? "char" : `char(${this.length})`
    }
}
function EC(r, e={}) {
    const {name: s, config: i} = kt(r, e);
    return new CC(s,i)
}
class TC extends Ue {
    static[W] = "PgCidrBuilder";
    constructor(e) {
        super(e, "string", "PgCidr")
    }
    build(e) {
        return new PC(e,this.config)
    }
}
class PC extends Oe {
    static[W] = "PgCidr";
    getSQLType() {
        return "cidr"
    }
}
function NC(r) {
    return new TC(r ?? "")
}
class RC extends Ue {
    static[W] = "PgCustomColumnBuilder";
    constructor(e, s, i) {
        super(e, "custom", "PgCustomColumn"),
        this.config.fieldConfig = s,
        this.config.customTypeParams = i
    }
    build(e) {
        return new AC(e,this.config)
    }
}
class AC extends Oe {
    static[W] = "PgCustomColumn";
    sqlName;
    mapTo;
    mapFrom;
    constructor(e, s) {
        super(e, s),
        this.sqlName = s.customTypeParams.dataType(s.fieldConfig),
        this.mapTo = s.customTypeParams.toDriver,
        this.mapFrom = s.customTypeParams.fromDriver
    }
    getSQLType() {
        return this.sqlName
    }
    mapFromDriverValue(e) {
        return typeof this.mapFrom == "function" ? this.mapFrom(e) : e
    }
    mapToDriverValue(e) {
        return typeof this.mapTo == "function" ? this.mapTo(e) : e
    }
}
function OC(r) {
    return (e, s) => {
        const {name: i, config: a} = kt(e, s);
        return new RC(i,a,r)
    }
}
class Po extends Ue {
    static[W] = "PgDateColumnBaseBuilder";
    defaultNow() {
        return this.default(al`now()`)
    }
}
class IC extends Po {
    static[W] = "PgDateBuilder";
    constructor(e) {
        super(e, "date", "PgDate")
    }
    build(e) {
        return new jC(e,this.config)
    }
}
class jC extends Oe {
    static[W] = "PgDate";
    getSQLType() {
        return "date"
    }
    mapFromDriverValue(e) {
        return new Date(e)
    }
    mapToDriverValue(e) {
        return e.toISOString()
    }
}
class DC extends Po {
    static[W] = "PgDateStringBuilder";
    constructor(e) {
        super(e, "string", "PgDateString")
    }
    build(e) {
        return new FC(e,this.config)
    }
}
class FC extends Oe {
    static[W] = "PgDateString";
    getSQLType() {
        return "date"
    }
}
function MC(r, e) {
    const {name: s, config: i} = kt(r, e);
    return i?.mode === "date" ? new IC(s) : new DC(s)
}
class LC extends Ue {
    static[W] = "PgDoublePrecisionBuilder";
    constructor(e) {
        super(e, "number", "PgDoublePrecision")
    }
    build(e) {
        return new VC(e,this.config)
    }
}
class VC extends Oe {
    static[W] = "PgDoublePrecision";
    getSQLType() {
        return "double precision"
    }
    mapFromDriverValue(e) {
        return typeof e == "string" ? Number.parseFloat(e) : e
    }
}
function zC(r) {
    return new LC(r ?? "")
}
class BC extends Ue {
    static[W] = "PgInetBuilder";
    constructor(e) {
        super(e, "string", "PgInet")
    }
    build(e) {
        return new UC(e,this.config)
    }
}
class UC extends Oe {
    static[W] = "PgInet";
    getSQLType() {
        return "inet"
    }
}
function $C(r) {
    return new BC(r ?? "")
}
class QC extends Pl {
    static[W] = "PgIntegerBuilder";
    constructor(e) {
        super(e, "number", "PgInteger")
    }
    build(e) {
        return new HC(e,this.config)
    }
}
class HC extends Oe {
    static[W] = "PgInteger";
    getSQLType() {
        return "integer"
    }
    mapFromDriverValue(e) {
        return typeof e == "string" ? Number.parseInt(e) : e
    }
}
function WC(r) {
    return new QC(r ?? "")
}
class qC extends Ue {
    static[W] = "PgIntervalBuilder";
    constructor(e, s) {
        super(e, "string", "PgInterval"),
        this.config.intervalConfig = s
    }
    build(e) {
        return new ZC(e,this.config)
    }
}
class ZC extends Oe {
    static[W] = "PgInterval";
    fields = this.config.intervalConfig.fields;
    precision = this.config.intervalConfig.precision;
    getSQLType() {
        const e = this.fields ? ` ${this.fields}` : ""
          , s = this.precision ? `(${this.precision})` : "";
        return `interval${e}${s}`
    }
}
function KC(r, e={}) {
    const {name: s, config: i} = kt(r, e);
    return new qC(s,i)
}
class GC extends Ue {
    static[W] = "PgJsonBuilder";
    constructor(e) {
        super(e, "json", "PgJson")
    }
    build(e) {
        return new XC(e,this.config)
    }
}
class XC extends Oe {
    static[W] = "PgJson";
    constructor(e, s) {
        super(e, s)
    }
    getSQLType() {
        return "json"
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        if (typeof e == "string")
            try {
                return JSON.parse(e)
            } catch {
                return e
            }
        return e
    }
}
function YC(r) {
    return new GC(r ?? "")
}
class JC extends Ue {
    static[W] = "PgJsonbBuilder";
    constructor(e) {
        super(e, "json", "PgJsonb")
    }
    build(e) {
        return new ek(e,this.config)
    }
}
class ek extends Oe {
    static[W] = "PgJsonb";
    constructor(e, s) {
        super(e, s)
    }
    getSQLType() {
        return "jsonb"
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        if (typeof e == "string")
            try {
                return JSON.parse(e)
            } catch {
                return e
            }
        return e
    }
}
function lv(r) {
    return new JC(r ?? "")
}
class tk extends Ue {
    static[W] = "PgLineBuilder";
    constructor(e) {
        super(e, "array", "PgLine")
    }
    build(e) {
        return new rk(e,this.config)
    }
}
class rk extends Oe {
    static[W] = "PgLine";
    getSQLType() {
        return "line"
    }
    mapFromDriverValue(e) {
        const [s,i,a] = e.slice(1, -1).split(",");
        return [Number.parseFloat(s), Number.parseFloat(i), Number.parseFloat(a)]
    }
    mapToDriverValue(e) {
        return `{${e[0]},${e[1]},${e[2]}}`
    }
}
class nk extends Ue {
    static[W] = "PgLineABCBuilder";
    constructor(e) {
        super(e, "json", "PgLineABC")
    }
    build(e) {
        return new sk(e,this.config)
    }
}
class sk extends Oe {
    static[W] = "PgLineABC";
    getSQLType() {
        return "line"
    }
    mapFromDriverValue(e) {
        const [s,i,a] = e.slice(1, -1).split(",");
        return {
            a: Number.parseFloat(s),
            b: Number.parseFloat(i),
            c: Number.parseFloat(a)
        }
    }
    mapToDriverValue(e) {
        return `{${e.a},${e.b},${e.c}}`
    }
}
function ik(r, e) {
    const {name: s, config: i} = kt(r, e);
    return !i?.mode || i.mode === "tuple" ? new tk(s) : new nk(s)
}
class ok extends Ue {
    static[W] = "PgMacaddrBuilder";
    constructor(e) {
        super(e, "string", "PgMacaddr")
    }
    build(e) {
        return new ak(e,this.config)
    }
}
class ak extends Oe {
    static[W] = "PgMacaddr";
    getSQLType() {
        return "macaddr"
    }
}
function lk(r) {
    return new ok(r ?? "")
}
class uk extends Ue {
    static[W] = "PgMacaddr8Builder";
    constructor(e) {
        super(e, "string", "PgMacaddr8")
    }
    build(e) {
        return new ck(e,this.config)
    }
}
class ck extends Oe {
    static[W] = "PgMacaddr8";
    getSQLType() {
        return "macaddr8"
    }
}
function dk(r) {
    return new uk(r ?? "")
}
class fk extends Ue {
    static[W] = "PgNumericBuilder";
    constructor(e, s, i) {
        super(e, "string", "PgNumeric"),
        this.config.precision = s,
        this.config.scale = i
    }
    build(e) {
        return new pk(e,this.config)
    }
}
class pk extends Oe {
    static[W] = "PgNumeric";
    precision;
    scale;
    constructor(e, s) {
        super(e, s),
        this.precision = s.precision,
        this.scale = s.scale
    }
    getSQLType() {
        return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`
    }
}
function hk(r, e) {
    const {name: s, config: i} = kt(r, e);
    return new fk(s,i?.precision,i?.scale)
}
class mk extends Ue {
    static[W] = "PgPointTupleBuilder";
    constructor(e) {
        super(e, "array", "PgPointTuple")
    }
    build(e) {
        return new gk(e,this.config)
    }
}
class gk extends Oe {
    static[W] = "PgPointTuple";
    getSQLType() {
        return "point"
    }
    mapFromDriverValue(e) {
        if (typeof e == "string") {
            const [s,i] = e.slice(1, -1).split(",");
            return [Number.parseFloat(s), Number.parseFloat(i)]
        }
        return [e.x, e.y]
    }
    mapToDriverValue(e) {
        return `(${e[0]},${e[1]})`
    }
}
class yk extends Ue {
    static[W] = "PgPointObjectBuilder";
    constructor(e) {
        super(e, "json", "PgPointObject")
    }
    build(e) {
        return new vk(e,this.config)
    }
}
class vk extends Oe {
    static[W] = "PgPointObject";
    getSQLType() {
        return "point"
    }
    mapFromDriverValue(e) {
        if (typeof e == "string") {
            const [s,i] = e.slice(1, -1).split(",");
            return {
                x: Number.parseFloat(s),
                y: Number.parseFloat(i)
            }
        }
        return e
    }
    mapToDriverValue(e) {
        return `(${e.x},${e.y})`
    }
}
function xk(r, e) {
    const {name: s, config: i} = kt(r, e);
    return !i?.mode || i.mode === "tuple" ? new mk(s) : new yk(s)
}
function wk(r) {
    const e = [];
    for (let s = 0; s < r.length; s += 2)
        e.push(Number.parseInt(r.slice(s, s + 2), 16));
    return new Uint8Array(e)
}
function Um(r, e) {
    const s = new ArrayBuffer(8)
      , i = new DataView(s);
    for (let a = 0; a < 8; a++)
        i.setUint8(a, r[e + a]);
    return i.getFloat64(0, !0)
}
function uv(r) {
    const e = wk(r);
    let s = 0;
    const i = e[s];
    s += 1;
    const a = new DataView(e.buffer)
      , u = a.getUint32(s, i === 1);
    if (s += 4,
    u & 536870912 && (a.getUint32(s, i === 1),
    s += 4),
    (u & 65535) === 1) {
        const d = Um(e, s);
        s += 8;
        const f = Um(e, s);
        return s += 8,
        [d, f]
    }
    throw new Error("Unsupported geometry type")
}
class bk extends Ue {
    static[W] = "PgGeometryBuilder";
    constructor(e) {
        super(e, "array", "PgGeometry")
    }
    build(e) {
        return new _k(e,this.config)
    }
}
class _k extends Oe {
    static[W] = "PgGeometry";
    getSQLType() {
        return "geometry(point)"
    }
    mapFromDriverValue(e) {
        return uv(e)
    }
    mapToDriverValue(e) {
        return `point(${e[0]} ${e[1]})`
    }
}
class Sk extends Ue {
    static[W] = "PgGeometryObjectBuilder";
    constructor(e) {
        super(e, "json", "PgGeometryObject")
    }
    build(e) {
        return new Ck(e,this.config)
    }
}
class Ck extends Oe {
    static[W] = "PgGeometryObject";
    getSQLType() {
        return "geometry(point)"
    }
    mapFromDriverValue(e) {
        const s = uv(e);
        return {
            x: s[0],
            y: s[1]
        }
    }
    mapToDriverValue(e) {
        return `point(${e.x} ${e.y})`
    }
}
function kk(r, e) {
    const {name: s, config: i} = kt(r, e);
    return !i?.mode || i.mode === "tuple" ? new bk(s) : new Sk(s)
}
class Ek extends Ue {
    static[W] = "PgRealBuilder";
    constructor(e, s) {
        super(e, "number", "PgReal"),
        this.config.length = s
    }
    build(e) {
        return new Tk(e,this.config)
    }
}
class Tk extends Oe {
    static[W] = "PgReal";
    constructor(e, s) {
        super(e, s)
    }
    getSQLType() {
        return "real"
    }
    mapFromDriverValue = e => typeof e == "string" ? Number.parseFloat(e) : e
}
function Pk(r) {
    return new Ek(r ?? "")
}
class Nk extends Ue {
    static[W] = "PgSerialBuilder";
    constructor(e) {
        super(e, "number", "PgSerial"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new Rk(e,this.config)
    }
}
class Rk extends Oe {
    static[W] = "PgSerial";
    getSQLType() {
        return "serial"
    }
}
function cv(r) {
    return new Nk(r ?? "")
}
class Ak extends Pl {
    static[W] = "PgSmallIntBuilder";
    constructor(e) {
        super(e, "number", "PgSmallInt")
    }
    build(e) {
        return new Ok(e,this.config)
    }
}
class Ok extends Oe {
    static[W] = "PgSmallInt";
    getSQLType() {
        return "smallint"
    }
    mapFromDriverValue = e => typeof e == "string" ? Number(e) : e
}
function Ik(r) {
    return new Ak(r ?? "")
}
class jk extends Ue {
    static[W] = "PgSmallSerialBuilder";
    constructor(e) {
        super(e, "number", "PgSmallSerial"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new Dk(e,this.config)
    }
}
class Dk extends Oe {
    static[W] = "PgSmallSerial";
    getSQLType() {
        return "smallserial"
    }
}
function Fk(r) {
    return new jk(r ?? "")
}
class Mk extends Ue {
    static[W] = "PgTextBuilder";
    constructor(e, s) {
        super(e, "string", "PgText"),
        this.config.enumValues = s.enum
    }
    build(e) {
        return new Lk(e,this.config)
    }
}
class Lk extends Oe {
    static[W] = "PgText";
    enumValues = this.config.enumValues;
    getSQLType() {
        return "text"
    }
}
function Xt(r, e={}) {
    const {name: s, config: i} = kt(r, e);
    return new Mk(s,i)
}
class Vk extends Po {
    constructor(e, s, i) {
        super(e, "string", "PgTime"),
        this.withTimezone = s,
        this.precision = i,
        this.config.withTimezone = s,
        this.config.precision = i
    }
    static[W] = "PgTimeBuilder";
    build(e) {
        return new zk(e,this.config)
    }
}
class zk extends Oe {
    static[W] = "PgTime";
    withTimezone;
    precision;
    constructor(e, s) {
        super(e, s),
        this.withTimezone = s.withTimezone,
        this.precision = s.precision
    }
    getSQLType() {
        return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
}
function Bk(r, e={}) {
    const {name: s, config: i} = kt(r, e);
    return new Vk(s,i.withTimezone ?? !1,i.precision)
}
class Uk extends Po {
    static[W] = "PgTimestampBuilder";
    constructor(e, s, i) {
        super(e, "date", "PgTimestamp"),
        this.config.withTimezone = s,
        this.config.precision = i
    }
    build(e) {
        return new $k(e,this.config)
    }
}
class $k extends Oe {
    static[W] = "PgTimestamp";
    withTimezone;
    precision;
    constructor(e, s) {
        super(e, s),
        this.withTimezone = s.withTimezone,
        this.precision = s.precision
    }
    getSQLType() {
        return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
    mapFromDriverValue = e => new Date(this.withTimezone ? e : e + "+0000");
    mapToDriverValue = e => e.toISOString()
}
class Qk extends Po {
    static[W] = "PgTimestampStringBuilder";
    constructor(e, s, i) {
        super(e, "string", "PgTimestampString"),
        this.config.withTimezone = s,
        this.config.precision = i
    }
    build(e) {
        return new Hk(e,this.config)
    }
}
class Hk extends Oe {
    static[W] = "PgTimestampString";
    withTimezone;
    precision;
    constructor(e, s) {
        super(e, s),
        this.withTimezone = s.withTimezone,
        this.precision = s.precision
    }
    getSQLType() {
        return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
}
function Wk(r, e={}) {
    const {name: s, config: i} = kt(r, e);
    return i?.mode === "string" ? new Qk(s,i.withTimezone ?? !1,i.precision) : new Uk(s,i?.withTimezone ?? !1,i?.precision)
}
class qk extends Ue {
    static[W] = "PgUUIDBuilder";
    constructor(e) {
        super(e, "string", "PgUUID")
    }
    defaultRandom() {
        return this.default(al`gen_random_uuid()`)
    }
    build(e) {
        return new Zk(e,this.config)
    }
}
class Zk extends Oe {
    static[W] = "PgUUID";
    getSQLType() {
        return "uuid"
    }
}
function Kk(r) {
    return new qk(r ?? "")
}
class Gk extends Ue {
    static[W] = "PgVarcharBuilder";
    constructor(e, s) {
        super(e, "string", "PgVarchar"),
        this.config.length = s.length,
        this.config.enumValues = s.enum
    }
    build(e) {
        return new Xk(e,this.config)
    }
}
class Xk extends Oe {
    static[W] = "PgVarchar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? "varchar" : `varchar(${this.length})`
    }
}
function Yk(r, e={}) {
    const {name: s, config: i} = kt(r, e);
    return new Gk(s,i)
}
class Jk extends Ue {
    static[W] = "PgBinaryVectorBuilder";
    constructor(e, s) {
        super(e, "string", "PgBinaryVector"),
        this.config.dimensions = s.dimensions
    }
    build(e) {
        return new eE(e,this.config)
    }
}
class eE extends Oe {
    static[W] = "PgBinaryVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `bit(${this.dimensions})`
    }
}
function tE(r, e) {
    const {name: s, config: i} = kt(r, e);
    return new Jk(s,i)
}
class rE extends Ue {
    static[W] = "PgHalfVectorBuilder";
    constructor(e, s) {
        super(e, "array", "PgHalfVector"),
        this.config.dimensions = s.dimensions
    }
    build(e) {
        return new nE(e,this.config)
    }
}
class nE extends Oe {
    static[W] = "PgHalfVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `halfvec(${this.dimensions})`
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        return e.slice(1, -1).split(",").map(s => Number.parseFloat(s))
    }
}
function sE(r, e) {
    const {name: s, config: i} = kt(r, e);
    return new rE(s,i)
}
class iE extends Ue {
    static[W] = "PgSparseVectorBuilder";
    constructor(e, s) {
        super(e, "string", "PgSparseVector"),
        this.config.dimensions = s.dimensions
    }
    build(e) {
        return new oE(e,this.config)
    }
}
class oE extends Oe {
    static[W] = "PgSparseVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `sparsevec(${this.dimensions})`
    }
}
function aE(r, e) {
    const {name: s, config: i} = kt(r, e);
    return new iE(s,i)
}
class lE extends Ue {
    static[W] = "PgVectorBuilder";
    constructor(e, s) {
        super(e, "array", "PgVector"),
        this.config.dimensions = s.dimensions
    }
    build(e) {
        return new uE(e,this.config)
    }
}
class uE extends Oe {
    static[W] = "PgVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `vector(${this.dimensions})`
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        return e.slice(1, -1).split(",").map(s => Number.parseFloat(s))
    }
}
function cE(r, e) {
    const {name: s, config: i} = kt(r, e);
    return new lE(s,i)
}
function dE() {
    return {
        bigint: gC,
        bigserial: bC,
        boolean: sn,
        char: EC,
        cidr: NC,
        customType: OC,
        date: MC,
        doublePrecision: zC,
        inet: $C,
        integer: WC,
        interval: KC,
        json: YC,
        jsonb: lv,
        line: ik,
        macaddr: lk,
        macaddr8: dk,
        numeric: hk,
        point: xk,
        geometry: kk,
        real: Pk,
        serial: cv,
        smallint: Ik,
        smallserial: Fk,
        text: Xt,
        time: Bk,
        timestamp: Wk,
        uuid: Kk,
        varchar: Yk,
        bit: tE,
        halfvec: sE,
        sparsevec: aE,
        vector: cE
    }
}
const hd = Symbol.for("drizzle:PgInlineForeignKeys")
  , $m = Symbol.for("drizzle:EnableRLS");
class Qm extends er {
    static[W] = "PgTable";
    static Symbol = Object.assign({}, er.Symbol, {
        InlineForeignKeys: hd,
        EnableRLS: $m
    });
    [hd] = [];
    [$m] = !1;
    [er.Symbol.ExtraConfigBuilder] = void 0
}
function fE(r, e, s, i, a=r) {
    const u = new Qm(r,i,a)
      , d = typeof e == "function" ? e(dE()) : e
      , f = Object.fromEntries(Object.entries(d).map( ([g,x]) => {
        const b = x;
        b.setName(g);
        const T = b.build(u);
        return u[hd].push(...b.buildForeignKeys(T, u)),
        [g, T]
    }
    ))
      , h = Object.fromEntries(Object.entries(d).map( ([g,x]) => {
        const b = x;
        b.setName(g);
        const T = b.buildExtraConfigColumn(u);
        return [g, T]
    }
    ))
      , m = Object.assign(u, f);
    return m[er.Symbol.Columns] = f,
    m[er.Symbol.ExtraConfigColumns] = h,
    Object.assign(m, {
        enableRLS: () => (m[Qm.Symbol.EnableRLS] = !0,
        m)
    })
}
const pE = (r, e, s) => fE(r, e, s, void 0);
var ze;
(function(r) {
    r.assertEqual = a => a;
    function e(a) {}
    r.assertIs = e;
    function s(a) {
        throw new Error
    }
    r.assertNever = s,
    r.arrayToEnum = a => {
        const u = {};
        for (const d of a)
            u[d] = d;
        return u
    }
    ,
    r.getValidEnumValues = a => {
        const u = r.objectKeys(a).filter(f => typeof a[a[f]] != "number")
          , d = {};
        for (const f of u)
            d[f] = a[f];
        return r.objectValues(d)
    }
    ,
    r.objectValues = a => r.objectKeys(a).map(function(u) {
        return a[u]
    }),
    r.objectKeys = typeof Object.keys == "function" ? a => Object.keys(a) : a => {
        const u = [];
        for (const d in a)
            Object.prototype.hasOwnProperty.call(a, d) && u.push(d);
        return u
    }
    ,
    r.find = (a, u) => {
        for (const d of a)
            if (u(d))
                return d
    }
    ,
    r.isInteger = typeof Number.isInteger == "function" ? a => Number.isInteger(a) : a => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
    function i(a, u=" | ") {
        return a.map(d => typeof d == "string" ? `'${d}'` : d).join(u)
    }
    r.joinValues = i,
    r.jsonStringifyReplacer = (a, u) => typeof u == "bigint" ? u.toString() : u
}
)(ze || (ze = {}));
var md;
(function(r) {
    r.mergeShapes = (e, s) => ({
        ...e,
        ...s
    })
}
)(md || (md = {}));
const de = ze.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , an = r => {
    switch (typeof r) {
    case "undefined":
        return de.undefined;
    case "string":
        return de.string;
    case "number":
        return isNaN(r) ? de.nan : de.number;
    case "boolean":
        return de.boolean;
    case "function":
        return de.function;
    case "bigint":
        return de.bigint;
    case "symbol":
        return de.symbol;
    case "object":
        return Array.isArray(r) ? de.array : r === null ? de.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? de.promise : typeof Map < "u" && r instanceof Map ? de.map : typeof Set < "u" && r instanceof Set ? de.set : typeof Date < "u" && r instanceof Date ? de.date : de.object;
    default:
        return de.unknown
    }
}
  , X = ze.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , hE = r => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, "$1:");
class rr extends Error {
    get errors() {
        return this.issues
    }
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = i => {
            this.issues = [...this.issues, i]
        }
        ,
        this.addIssues = (i=[]) => {
            this.issues = [...this.issues, ...i]
        }
        ;
        const s = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, s) : this.__proto__ = s,
        this.name = "ZodError",
        this.issues = e
    }
    format(e) {
        const s = e || function(u) {
            return u.message
        }
          , i = {
            _errors: []
        }
          , a = u => {
            for (const d of u.issues)
                if (d.code === "invalid_union")
                    d.unionErrors.map(a);
                else if (d.code === "invalid_return_type")
                    a(d.returnTypeError);
                else if (d.code === "invalid_arguments")
                    a(d.argumentsError);
                else if (d.path.length === 0)
                    i._errors.push(s(d));
                else {
                    let f = i
                      , h = 0;
                    for (; h < d.path.length; ) {
                        const m = d.path[h];
                        h === d.path.length - 1 ? (f[m] = f[m] || {
                            _errors: []
                        },
                        f[m]._errors.push(s(d))) : f[m] = f[m] || {
                            _errors: []
                        },
                        f = f[m],
                        h++
                    }
                }
        }
        ;
        return a(this),
        i
    }
    static assert(e) {
        if (!(e instanceof rr))
            throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, ze.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=s => s.message) {
        const s = {}
          , i = [];
        for (const a of this.issues)
            a.path.length > 0 ? (s[a.path[0]] = s[a.path[0]] || [],
            s[a.path[0]].push(e(a))) : i.push(e(a));
        return {
            formErrors: i,
            fieldErrors: s
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
rr.create = r => new rr(r);
const si = (r, e) => {
    let s;
    switch (r.code) {
    case X.invalid_type:
        r.received === de.undefined ? s = "Required" : s = `Expected ${r.expected}, received ${r.received}`;
        break;
    case X.invalid_literal:
        s = `Invalid literal value, expected ${JSON.stringify(r.expected, ze.jsonStringifyReplacer)}`;
        break;
    case X.unrecognized_keys:
        s = `Unrecognized key(s) in object: ${ze.joinValues(r.keys, ", ")}`;
        break;
    case X.invalid_union:
        s = "Invalid input";
        break;
    case X.invalid_union_discriminator:
        s = `Invalid discriminator value. Expected ${ze.joinValues(r.options)}`;
        break;
    case X.invalid_enum_value:
        s = `Invalid enum value. Expected ${ze.joinValues(r.options)}, received '${r.received}'`;
        break;
    case X.invalid_arguments:
        s = "Invalid function arguments";
        break;
    case X.invalid_return_type:
        s = "Invalid function return type";
        break;
    case X.invalid_date:
        s = "Invalid date";
        break;
    case X.invalid_string:
        typeof r.validation == "object" ? "includes"in r.validation ? (s = `Invalid input: must include "${r.validation.includes}"`,
        typeof r.validation.position == "number" && (s = `${s} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith"in r.validation ? s = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith"in r.validation ? s = `Invalid input: must end with "${r.validation.endsWith}"` : ze.assertNever(r.validation) : r.validation !== "regex" ? s = `Invalid ${r.validation}` : s = "Invalid";
        break;
    case X.too_small:
        r.type === "array" ? s = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? s = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? s = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? s = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : s = "Invalid input";
        break;
    case X.too_big:
        r.type === "array" ? s = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? s = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? s = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? s = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? s = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : s = "Invalid input";
        break;
    case X.custom:
        s = "Invalid input";
        break;
    case X.invalid_intersection_types:
        s = "Intersection results could not be merged";
        break;
    case X.not_multiple_of:
        s = `Number must be a multiple of ${r.multipleOf}`;
        break;
    case X.not_finite:
        s = "Number must be finite";
        break;
    default:
        s = e.defaultError,
        ze.assertNever(r)
    }
    return {
        message: s
    }
}
;
let dv = si;
function mE(r) {
    dv = r
}
function ll() {
    return dv
}
const ul = r => {
    const {data: e, path: s, errorMaps: i, issueData: a} = r
      , u = [...s, ...a.path || []]
      , d = {
        ...a,
        path: u
    };
    if (a.message !== void 0)
        return {
            ...a,
            path: u,
            message: a.message
        };
    let f = "";
    const h = i.filter(m => !!m).slice().reverse();
    for (const m of h)
        f = m(d, {
            data: e,
            defaultError: f
        }).message;
    return {
        ...a,
        path: u,
        message: f
    }
}
  , gE = [];
function ae(r, e) {
    const s = ll()
      , i = ul({
        issueData: e,
        data: r.data,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, s, s === si ? void 0 : si].filter(a => !!a)
    });
    r.common.issues.push(i)
}
class jt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, s) {
        const i = [];
        for (const a of s) {
            if (a.status === "aborted")
                return Te;
            a.status === "dirty" && e.dirty(),
            i.push(a.value)
        }
        return {
            status: e.value,
            value: i
        }
    }
    static async mergeObjectAsync(e, s) {
        const i = [];
        for (const a of s) {
            const u = await a.key
              , d = await a.value;
            i.push({
                key: u,
                value: d
            })
        }
        return jt.mergeObjectSync(e, i)
    }
    static mergeObjectSync(e, s) {
        const i = {};
        for (const a of s) {
            const {key: u, value: d} = a;
            if (u.status === "aborted" || d.status === "aborted")
                return Te;
            u.status === "dirty" && e.dirty(),
            d.status === "dirty" && e.dirty(),
            u.value !== "__proto__" && (typeof d.value < "u" || a.alwaysSet) && (i[u.value] = d.value)
        }
        return {
            status: e.value,
            value: i
        }
    }
}
const Te = Object.freeze({
    status: "aborted"
})
  , Zs = r => ({
    status: "dirty",
    value: r
})
  , Lt = r => ({
    status: "valid",
    value: r
})
  , gd = r => r.status === "aborted"
  , yd = r => r.status === "dirty"
  , us = r => r.status === "valid"
  , co = r => typeof Promise < "u" && r instanceof Promise;
function cl(r, e, s, i) {
    if (typeof e == "function" ? r !== e || !0 : !e.has(r))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e.get(r)
}
function fv(r, e, s, i, a) {
    if (typeof e == "function" ? r !== e || !0 : !e.has(r))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return e.set(r, s),
    s
}
var xe;
(function(r) {
    r.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {},
    r.toString = e => typeof e == "string" ? e : e?.message
}
)(xe || (xe = {}));
var to, ro;
class Qr {
    constructor(e, s, i, a) {
        this._cachedPath = [],
        this.parent = e,
        this.data = s,
        this._path = i,
        this._key = a
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const Hm = (r, e) => {
    if (us(e))
        return {
            success: !0,
            data: e.value
        };
    if (!r.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const s = new rr(r.common.issues);
            return this._error = s,
            this._error
        }
    }
}
;
function Re(r) {
    if (!r)
        return {};
    const {errorMap: e, invalid_type_error: s, required_error: i, description: a} = r;
    if (e && (s || i))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: a
    } : {
        errorMap: (d, f) => {
            var h, m;
            const {message: g} = r;
            return d.code === "invalid_enum_value" ? {
                message: g ?? f.defaultError
            } : typeof f.data > "u" ? {
                message: (h = g ?? i) !== null && h !== void 0 ? h : f.defaultError
            } : d.code !== "invalid_type" ? {
                message: f.defaultError
            } : {
                message: (m = g ?? s) !== null && m !== void 0 ? m : f.defaultError
            }
        }
        ,
        description: a
    }
}
class Ie {
    get description() {
        return this._def.description
    }
    _getType(e) {
        return an(e.data)
    }
    _getOrReturnCtx(e, s) {
        return s || {
            common: e.parent.common,
            data: e.data,
            parsedType: an(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new jt,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: an(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const s = this._parse(e);
        if (co(s))
            throw new Error("Synchronous parse encountered promise.");
        return s
    }
    _parseAsync(e) {
        const s = this._parse(e);
        return Promise.resolve(s)
    }
    parse(e, s) {
        const i = this.safeParse(e, s);
        if (i.success)
            return i.data;
        throw i.error
    }
    safeParse(e, s) {
        var i;
        const a = {
            common: {
                issues: [],
                async: (i = s?.async) !== null && i !== void 0 ? i : !1,
                contextualErrorMap: s?.errorMap
            },
            path: s?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: an(e)
        }
          , u = this._parseSync({
            data: e,
            path: a.path,
            parent: a
        });
        return Hm(a, u)
    }
    "~validate"(e) {
        var s, i;
        const a = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: an(e)
        };
        if (!this["~standard"].async)
            try {
                const u = this._parseSync({
                    data: e,
                    path: [],
                    parent: a
                });
                return us(u) ? {
                    value: u.value
                } : {
                    issues: a.common.issues
                }
            } catch (u) {
                !((i = (s = u?.message) === null || s === void 0 ? void 0 : s.toLowerCase()) === null || i === void 0) && i.includes("encountered") && (this["~standard"].async = !0),
                a.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: e,
            path: [],
            parent: a
        }).then(u => us(u) ? {
            value: u.value
        } : {
            issues: a.common.issues
        })
    }
    async parseAsync(e, s) {
        const i = await this.safeParseAsync(e, s);
        if (i.success)
            return i.data;
        throw i.error
    }
    async safeParseAsync(e, s) {
        const i = {
            common: {
                issues: [],
                contextualErrorMap: s?.errorMap,
                async: !0
            },
            path: s?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: an(e)
        }
          , a = this._parse({
            data: e,
            path: i.path,
            parent: i
        })
          , u = await (co(a) ? a : Promise.resolve(a));
        return Hm(i, u)
    }
    refine(e, s) {
        const i = a => typeof s == "string" || typeof s > "u" ? {
            message: s
        } : typeof s == "function" ? s(a) : s;
        return this._refinement( (a, u) => {
            const d = e(a)
              , f = () => u.addIssue({
                code: X.custom,
                ...i(a)
            });
            return typeof Promise < "u" && d instanceof Promise ? d.then(h => h ? !0 : (f(),
            !1)) : d ? !0 : (f(),
            !1)
        }
        )
    }
    refinement(e, s) {
        return this._refinement( (i, a) => e(i) ? !0 : (a.addIssue(typeof s == "function" ? s(i, a) : s),
        !1))
    }
    _refinement(e) {
        return new Ar({
            schema: this,
            typeName: Ee.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: s => this["~validate"](s)
        }
    }
    optional() {
        return Ur.create(this, this._def)
    }
    nullable() {
        return $n.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return Tr.create(this)
    }
    promise() {
        return oi.create(this, this._def)
    }
    or(e) {
        return mo.create([this, e], this._def)
    }
    and(e) {
        return go.create(this, e, this._def)
    }
    transform(e) {
        return new Ar({
            ...Re(this._def),
            schema: this,
            typeName: Ee.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default(e) {
        const s = typeof e == "function" ? e : () => e;
        return new bo({
            ...Re(this._def),
            innerType: this,
            defaultValue: s,
            typeName: Ee.ZodDefault
        })
    }
    brand() {
        return new Kd({
            typeName: Ee.ZodBranded,
            type: this,
            ...Re(this._def)
        })
    }
    catch(e) {
        const s = typeof e == "function" ? e : () => e;
        return new _o({
            ...Re(this._def),
            innerType: this,
            catchValue: s,
            typeName: Ee.ZodCatch
        })
    }
    describe(e) {
        const s = this.constructor;
        return new s({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return No.create(this, e)
    }
    readonly() {
        return So.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const yE = /^c[^\s-]{8,}$/i
  , vE = /^[0-9a-z]+$/
  , xE = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , wE = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , bE = /^[a-z0-9_-]{21}$/i
  , _E = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , SE = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , CE = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , kE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Wc;
const EE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , TE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , PE = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , NE = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , RE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , AE = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , pv = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , OE = new RegExp(`^${pv}$`);
function hv(r) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`),
    e
}
function IE(r) {
    return new RegExp(`^${hv(r)}$`)
}
function mv(r) {
    let e = `${pv}T${hv(r)}`;
    const s = [];
    return s.push(r.local ? "Z?" : "Z"),
    r.offset && s.push("([+-]\\d{2}:?\\d{2})"),
    e = `${e}(${s.join("|")})`,
    new RegExp(`^${e}$`)
}
function jE(r, e) {
    return !!((e === "v4" || !e) && EE.test(r) || (e === "v6" || !e) && PE.test(r))
}
function DE(r, e) {
    if (!_E.test(r))
        return !1;
    try {
        const [s] = r.split(".")
          , i = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(s.length + (4 - s.length % 4) % 4, "=")
          , a = JSON.parse(atob(i));
        return !(typeof a != "object" || a === null || !a.typ || !a.alg || e && a.alg !== e)
    } catch {
        return !1
    }
}
function FE(r, e) {
    return !!((e === "v4" || !e) && TE.test(r) || (e === "v6" || !e) && NE.test(r))
}
class Er extends Ie {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== de.string) {
            const u = this._getOrReturnCtx(e);
            return ae(u, {
                code: X.invalid_type,
                expected: de.string,
                received: u.parsedType
            }),
            Te
        }
        const i = new jt;
        let a;
        for (const u of this._def.checks)
            if (u.kind === "min")
                e.data.length < u.value && (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    code: X.too_small,
                    minimum: u.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "max")
                e.data.length > u.value && (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    code: X.too_big,
                    maximum: u.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "length") {
                const d = e.data.length > u.value
                  , f = e.data.length < u.value;
                (d || f) && (a = this._getOrReturnCtx(e, a),
                d ? ae(a, {
                    code: X.too_big,
                    maximum: u.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: u.message
                }) : f && ae(a, {
                    code: X.too_small,
                    minimum: u.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: u.message
                }),
                i.dirty())
            } else if (u.kind === "email")
                CE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "email",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "emoji")
                Wc || (Wc = new RegExp(kE,"u")),
                Wc.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "emoji",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "uuid")
                wE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "uuid",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "nanoid")
                bE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "nanoid",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "cuid")
                yE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "cuid",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "cuid2")
                vE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "cuid2",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "ulid")
                xE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "ulid",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty());
            else if (u.kind === "url")
                try {
                    new URL(e.data)
                } catch {
                    a = this._getOrReturnCtx(e, a),
                    ae(a, {
                        validation: "url",
                        code: X.invalid_string,
                        message: u.message
                    }),
                    i.dirty()
                }
            else
                u.kind === "regex" ? (u.regex.lastIndex = 0,
                u.regex.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "regex",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty())) : u.kind === "trim" ? e.data = e.data.trim() : u.kind === "includes" ? e.data.includes(u.value, u.position) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: {
                        includes: u.value,
                        position: u.position
                    },
                    message: u.message
                }),
                i.dirty()) : u.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : u.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : u.kind === "startsWith" ? e.data.startsWith(u.value) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: {
                        startsWith: u.value
                    },
                    message: u.message
                }),
                i.dirty()) : u.kind === "endsWith" ? e.data.endsWith(u.value) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: {
                        endsWith: u.value
                    },
                    message: u.message
                }),
                i.dirty()) : u.kind === "datetime" ? mv(u).test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: "datetime",
                    message: u.message
                }),
                i.dirty()) : u.kind === "date" ? OE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: "date",
                    message: u.message
                }),
                i.dirty()) : u.kind === "time" ? IE(u).test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: "time",
                    message: u.message
                }),
                i.dirty()) : u.kind === "duration" ? SE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "duration",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty()) : u.kind === "ip" ? jE(e.data, u.version) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "ip",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty()) : u.kind === "jwt" ? DE(e.data, u.alg) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "jwt",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty()) : u.kind === "cidr" ? FE(e.data, u.version) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "cidr",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty()) : u.kind === "base64" ? RE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "base64",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty()) : u.kind === "base64url" ? AE.test(e.data) || (a = this._getOrReturnCtx(e, a),
                ae(a, {
                    validation: "base64url",
                    code: X.invalid_string,
                    message: u.message
                }),
                i.dirty()) : ze.assertNever(u);
        return {
            status: i.value,
            value: e.data
        }
    }
    _regex(e, s, i) {
        return this.refinement(a => e.test(a), {
            validation: s,
            code: X.invalid_string,
            ...xe.errToObj(i)
        })
    }
    _addCheck(e) {
        return new Er({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...xe.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...xe.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...xe.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...xe.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...xe.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...xe.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...xe.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...xe.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...xe.errToObj(e)
        })
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...xe.errToObj(e)
        })
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...xe.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...xe.errToObj(e)
        })
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...xe.errToObj(e)
        })
    }
    datetime(e) {
        var s, i;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            offset: (s = e?.offset) !== null && s !== void 0 ? s : !1,
            local: (i = e?.local) !== null && i !== void 0 ? i : !1,
            ...xe.errToObj(e?.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            ...xe.errToObj(e?.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...xe.errToObj(e)
        })
    }
    regex(e, s) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...xe.errToObj(s)
        })
    }
    includes(e, s) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: s?.position,
            ...xe.errToObj(s?.message)
        })
    }
    startsWith(e, s) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...xe.errToObj(s)
        })
    }
    endsWith(e, s) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...xe.errToObj(s)
        })
    }
    min(e, s) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...xe.errToObj(s)
        })
    }
    max(e, s) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...xe.errToObj(s)
        })
    }
    length(e, s) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...xe.errToObj(s)
        })
    }
    nonempty(e) {
        return this.min(1, xe.errToObj(e))
    }
    trim() {
        return new Er({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new Er({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new Er({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(e => e.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(e => e.kind === "base64url")
    }
    get minLength() {
        let e = null;
        for (const s of this._def.checks)
            s.kind === "min" && (e === null || s.value > e) && (e = s.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const s of this._def.checks)
            s.kind === "max" && (e === null || s.value < e) && (e = s.value);
        return e
    }
}
Er.create = r => {
    var e;
    return new Er({
        checks: [],
        typeName: Ee.ZodString,
        coerce: (e = r?.coerce) !== null && e !== void 0 ? e : !1,
        ...Re(r)
    })
}
;
function ME(r, e) {
    const s = (r.toString().split(".")[1] || "").length
      , i = (e.toString().split(".")[1] || "").length
      , a = s > i ? s : i
      , u = parseInt(r.toFixed(a).replace(".", ""))
      , d = parseInt(e.toFixed(a).replace(".", ""));
    return u % d / Math.pow(10, a)
}
class zn extends Ie {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== de.number) {
            const u = this._getOrReturnCtx(e);
            return ae(u, {
                code: X.invalid_type,
                expected: de.number,
                received: u.parsedType
            }),
            Te
        }
        let i;
        const a = new jt;
        for (const u of this._def.checks)
            u.kind === "int" ? ze.isInteger(e.data) || (i = this._getOrReturnCtx(e, i),
            ae(i, {
                code: X.invalid_type,
                expected: "integer",
                received: "float",
                message: u.message
            }),
            a.dirty()) : u.kind === "min" ? (u.inclusive ? e.data < u.value : e.data <= u.value) && (i = this._getOrReturnCtx(e, i),
            ae(i, {
                code: X.too_small,
                minimum: u.value,
                type: "number",
                inclusive: u.inclusive,
                exact: !1,
                message: u.message
            }),
            a.dirty()) : u.kind === "max" ? (u.inclusive ? e.data > u.value : e.data >= u.value) && (i = this._getOrReturnCtx(e, i),
            ae(i, {
                code: X.too_big,
                maximum: u.value,
                type: "number",
                inclusive: u.inclusive,
                exact: !1,
                message: u.message
            }),
            a.dirty()) : u.kind === "multipleOf" ? ME(e.data, u.value) !== 0 && (i = this._getOrReturnCtx(e, i),
            ae(i, {
                code: X.not_multiple_of,
                multipleOf: u.value,
                message: u.message
            }),
            a.dirty()) : u.kind === "finite" ? Number.isFinite(e.data) || (i = this._getOrReturnCtx(e, i),
            ae(i, {
                code: X.not_finite,
                message: u.message
            }),
            a.dirty()) : ze.assertNever(u);
        return {
            status: a.value,
            value: e.data
        }
    }
    gte(e, s) {
        return this.setLimit("min", e, !0, xe.toString(s))
    }
    gt(e, s) {
        return this.setLimit("min", e, !1, xe.toString(s))
    }
    lte(e, s) {
        return this.setLimit("max", e, !0, xe.toString(s))
    }
    lt(e, s) {
        return this.setLimit("max", e, !1, xe.toString(s))
    }
    setLimit(e, s, i, a) {
        return new zn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: s,
                inclusive: i,
                message: xe.toString(a)
            }]
        })
    }
    _addCheck(e) {
        return new zn({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: xe.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: xe.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: xe.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: xe.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: xe.toString(e)
        })
    }
    multipleOf(e, s) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: xe.toString(s)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: xe.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: xe.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: xe.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const s of this._def.checks)
            s.kind === "min" && (e === null || s.value > e) && (e = s.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const s of this._def.checks)
            s.kind === "max" && (e === null || s.value < e) && (e = s.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && ze.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , s = null;
        for (const i of this._def.checks) {
            if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
                return !0;
            i.kind === "min" ? (s === null || i.value > s) && (s = i.value) : i.kind === "max" && (e === null || i.value < e) && (e = i.value)
        }
        return Number.isFinite(s) && Number.isFinite(e)
    }
}
zn.create = r => new zn({
    checks: [],
    typeName: Ee.ZodNumber,
    coerce: r?.coerce || !1,
    ...Re(r)
});
class Bn extends Ie {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce)
            try {
                e.data = BigInt(e.data)
            } catch {
                return this._getInvalidInput(e)
            }
        if (this._getType(e) !== de.bigint)
            return this._getInvalidInput(e);
        let i;
        const a = new jt;
        for (const u of this._def.checks)
            u.kind === "min" ? (u.inclusive ? e.data < u.value : e.data <= u.value) && (i = this._getOrReturnCtx(e, i),
            ae(i, {
                code: X.too_small,
                type: "bigint",
                minimum: u.value,
                inclusive: u.inclusive,
                message: u.message
            }),
            a.dirty()) : u.kind === "max" ? (u.inclusive ? e.data > u.value : e.data >= u.value) && (i = this._getOrReturnCtx(e, i),
            ae(i, {
                code: X.too_big,
                type: "bigint",
                maximum: u.value,
                inclusive: u.inclusive,
                message: u.message
            }),
            a.dirty()) : u.kind === "multipleOf" ? e.data % u.value !== BigInt(0) && (i = this._getOrReturnCtx(e, i),
            ae(i, {
                code: X.not_multiple_of,
                multipleOf: u.value,
                message: u.message
            }),
            a.dirty()) : ze.assertNever(u);
        return {
            status: a.value,
            value: e.data
        }
    }
    _getInvalidInput(e) {
        const s = this._getOrReturnCtx(e);
        return ae(s, {
            code: X.invalid_type,
            expected: de.bigint,
            received: s.parsedType
        }),
        Te
    }
    gte(e, s) {
        return this.setLimit("min", e, !0, xe.toString(s))
    }
    gt(e, s) {
        return this.setLimit("min", e, !1, xe.toString(s))
    }
    lte(e, s) {
        return this.setLimit("max", e, !0, xe.toString(s))
    }
    lt(e, s) {
        return this.setLimit("max", e, !1, xe.toString(s))
    }
    setLimit(e, s, i, a) {
        return new Bn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: s,
                inclusive: i,
                message: xe.toString(a)
            }]
        })
    }
    _addCheck(e) {
        return new Bn({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: xe.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: xe.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: xe.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: xe.toString(e)
        })
    }
    multipleOf(e, s) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: xe.toString(s)
        })
    }
    get minValue() {
        let e = null;
        for (const s of this._def.checks)
            s.kind === "min" && (e === null || s.value > e) && (e = s.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const s of this._def.checks)
            s.kind === "max" && (e === null || s.value < e) && (e = s.value);
        return e
    }
}
Bn.create = r => {
    var e;
    return new Bn({
        checks: [],
        typeName: Ee.ZodBigInt,
        coerce: (e = r?.coerce) !== null && e !== void 0 ? e : !1,
        ...Re(r)
    })
}
;
class fo extends Ie {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== de.boolean) {
            const i = this._getOrReturnCtx(e);
            return ae(i, {
                code: X.invalid_type,
                expected: de.boolean,
                received: i.parsedType
            }),
            Te
        }
        return Lt(e.data)
    }
}
fo.create = r => new fo({
    typeName: Ee.ZodBoolean,
    coerce: r?.coerce || !1,
    ...Re(r)
});
class cs extends Ie {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== de.date) {
            const u = this._getOrReturnCtx(e);
            return ae(u, {
                code: X.invalid_type,
                expected: de.date,
                received: u.parsedType
            }),
            Te
        }
        if (isNaN(e.data.getTime())) {
            const u = this._getOrReturnCtx(e);
            return ae(u, {
                code: X.invalid_date
            }),
            Te
        }
        const i = new jt;
        let a;
        for (const u of this._def.checks)
            u.kind === "min" ? e.data.getTime() < u.value && (a = this._getOrReturnCtx(e, a),
            ae(a, {
                code: X.too_small,
                message: u.message,
                inclusive: !0,
                exact: !1,
                minimum: u.value,
                type: "date"
            }),
            i.dirty()) : u.kind === "max" ? e.data.getTime() > u.value && (a = this._getOrReturnCtx(e, a),
            ae(a, {
                code: X.too_big,
                message: u.message,
                inclusive: !0,
                exact: !1,
                maximum: u.value,
                type: "date"
            }),
            i.dirty()) : ze.assertNever(u);
        return {
            status: i.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new cs({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, s) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: xe.toString(s)
        })
    }
    max(e, s) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: xe.toString(s)
        })
    }
    get minDate() {
        let e = null;
        for (const s of this._def.checks)
            s.kind === "min" && (e === null || s.value > e) && (e = s.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const s of this._def.checks)
            s.kind === "max" && (e === null || s.value < e) && (e = s.value);
        return e != null ? new Date(e) : null
    }
}
cs.create = r => new cs({
    checks: [],
    coerce: r?.coerce || !1,
    typeName: Ee.ZodDate,
    ...Re(r)
});
class dl extends Ie {
    _parse(e) {
        if (this._getType(e) !== de.symbol) {
            const i = this._getOrReturnCtx(e);
            return ae(i, {
                code: X.invalid_type,
                expected: de.symbol,
                received: i.parsedType
            }),
            Te
        }
        return Lt(e.data)
    }
}
dl.create = r => new dl({
    typeName: Ee.ZodSymbol,
    ...Re(r)
});
class po extends Ie {
    _parse(e) {
        if (this._getType(e) !== de.undefined) {
            const i = this._getOrReturnCtx(e);
            return ae(i, {
                code: X.invalid_type,
                expected: de.undefined,
                received: i.parsedType
            }),
            Te
        }
        return Lt(e.data)
    }
}
po.create = r => new po({
    typeName: Ee.ZodUndefined,
    ...Re(r)
});
class ho extends Ie {
    _parse(e) {
        if (this._getType(e) !== de.null) {
            const i = this._getOrReturnCtx(e);
            return ae(i, {
                code: X.invalid_type,
                expected: de.null,
                received: i.parsedType
            }),
            Te
        }
        return Lt(e.data)
    }
}
ho.create = r => new ho({
    typeName: Ee.ZodNull,
    ...Re(r)
});
class ii extends Ie {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return Lt(e.data)
    }
}
ii.create = r => new ii({
    typeName: Ee.ZodAny,
    ...Re(r)
});
class is extends Ie {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return Lt(e.data)
    }
}
is.create = r => new is({
    typeName: Ee.ZodUnknown,
    ...Re(r)
});
class cn extends Ie {
    _parse(e) {
        const s = this._getOrReturnCtx(e);
        return ae(s, {
            code: X.invalid_type,
            expected: de.never,
            received: s.parsedType
        }),
        Te
    }
}
cn.create = r => new cn({
    typeName: Ee.ZodNever,
    ...Re(r)
});
class fl extends Ie {
    _parse(e) {
        if (this._getType(e) !== de.undefined) {
            const i = this._getOrReturnCtx(e);
            return ae(i, {
                code: X.invalid_type,
                expected: de.void,
                received: i.parsedType
            }),
            Te
        }
        return Lt(e.data)
    }
}
fl.create = r => new fl({
    typeName: Ee.ZodVoid,
    ...Re(r)
});
class Tr extends Ie {
    _parse(e) {
        const {ctx: s, status: i} = this._processInputParams(e)
          , a = this._def;
        if (s.parsedType !== de.array)
            return ae(s, {
                code: X.invalid_type,
                expected: de.array,
                received: s.parsedType
            }),
            Te;
        if (a.exactLength !== null) {
            const d = s.data.length > a.exactLength.value
              , f = s.data.length < a.exactLength.value;
            (d || f) && (ae(s, {
                code: d ? X.too_big : X.too_small,
                minimum: f ? a.exactLength.value : void 0,
                maximum: d ? a.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: a.exactLength.message
            }),
            i.dirty())
        }
        if (a.minLength !== null && s.data.length < a.minLength.value && (ae(s, {
            code: X.too_small,
            minimum: a.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: a.minLength.message
        }),
        i.dirty()),
        a.maxLength !== null && s.data.length > a.maxLength.value && (ae(s, {
            code: X.too_big,
            maximum: a.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: a.maxLength.message
        }),
        i.dirty()),
        s.common.async)
            return Promise.all([...s.data].map( (d, f) => a.type._parseAsync(new Qr(s,d,s.path,f)))).then(d => jt.mergeArray(i, d));
        const u = [...s.data].map( (d, f) => a.type._parseSync(new Qr(s,d,s.path,f)));
        return jt.mergeArray(i, u)
    }
    get element() {
        return this._def.type
    }
    min(e, s) {
        return new Tr({
            ...this._def,
            minLength: {
                value: e,
                message: xe.toString(s)
            }
        })
    }
    max(e, s) {
        return new Tr({
            ...this._def,
            maxLength: {
                value: e,
                message: xe.toString(s)
            }
        })
    }
    length(e, s) {
        return new Tr({
            ...this._def,
            exactLength: {
                value: e,
                message: xe.toString(s)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
Tr.create = (r, e) => new Tr({
    type: r,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ee.ZodArray,
    ...Re(e)
});
function Hs(r) {
    if (r instanceof ot) {
        const e = {};
        for (const s in r.shape) {
            const i = r.shape[s];
            e[s] = Ur.create(Hs(i))
        }
        return new ot({
            ...r._def,
            shape: () => e
        })
    } else
        return r instanceof Tr ? new Tr({
            ...r._def,
            type: Hs(r.element)
        }) : r instanceof Ur ? Ur.create(Hs(r.unwrap())) : r instanceof $n ? $n.create(Hs(r.unwrap())) : r instanceof Hr ? Hr.create(r.items.map(e => Hs(e))) : r
}
class ot extends Ie {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const e = this._def.shape()
          , s = ze.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: s
        }
    }
    _parse(e) {
        if (this._getType(e) !== de.object) {
            const m = this._getOrReturnCtx(e);
            return ae(m, {
                code: X.invalid_type,
                expected: de.object,
                received: m.parsedType
            }),
            Te
        }
        const {status: i, ctx: a} = this._processInputParams(e)
          , {shape: u, keys: d} = this._getCached()
          , f = [];
        if (!(this._def.catchall instanceof cn && this._def.unknownKeys === "strip"))
            for (const m in a.data)
                d.includes(m) || f.push(m);
        const h = [];
        for (const m of d) {
            const g = u[m]
              , x = a.data[m];
            h.push({
                key: {
                    status: "valid",
                    value: m
                },
                value: g._parse(new Qr(a,x,a.path,m)),
                alwaysSet: m in a.data
            })
        }
        if (this._def.catchall instanceof cn) {
            const m = this._def.unknownKeys;
            if (m === "passthrough")
                for (const g of f)
                    h.push({
                        key: {
                            status: "valid",
                            value: g
                        },
                        value: {
                            status: "valid",
                            value: a.data[g]
                        }
                    });
            else if (m === "strict")
                f.length > 0 && (ae(a, {
                    code: X.unrecognized_keys,
                    keys: f
                }),
                i.dirty());
            else if (m !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const m = this._def.catchall;
            for (const g of f) {
                const x = a.data[g];
                h.push({
                    key: {
                        status: "valid",
                        value: g
                    },
                    value: m._parse(new Qr(a,x,a.path,g)),
                    alwaysSet: g in a.data
                })
            }
        }
        return a.common.async ? Promise.resolve().then(async () => {
            const m = [];
            for (const g of h) {
                const x = await g.key
                  , b = await g.value;
                m.push({
                    key: x,
                    value: b,
                    alwaysSet: g.alwaysSet
                })
            }
            return m
        }
        ).then(m => jt.mergeObjectSync(i, m)) : jt.mergeObjectSync(i, h)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return xe.errToObj,
        new ot({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (s, i) => {
                    var a, u, d, f;
                    const h = (d = (u = (a = this._def).errorMap) === null || u === void 0 ? void 0 : u.call(a, s, i).message) !== null && d !== void 0 ? d : i.defaultError;
                    return s.code === "unrecognized_keys" ? {
                        message: (f = xe.errToObj(e).message) !== null && f !== void 0 ? f : h
                    } : {
                        message: h
                    }
                }
            } : {}
        })
    }
    strip() {
        return new ot({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new ot({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new ot({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new ot({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: Ee.ZodObject
        })
    }
    setKey(e, s) {
        return this.augment({
            [e]: s
        })
    }
    catchall(e) {
        return new ot({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const s = {};
        return ze.objectKeys(e).forEach(i => {
            e[i] && this.shape[i] && (s[i] = this.shape[i])
        }
        ),
        new ot({
            ...this._def,
            shape: () => s
        })
    }
    omit(e) {
        const s = {};
        return ze.objectKeys(this.shape).forEach(i => {
            e[i] || (s[i] = this.shape[i])
        }
        ),
        new ot({
            ...this._def,
            shape: () => s
        })
    }
    deepPartial() {
        return Hs(this)
    }
    partial(e) {
        const s = {};
        return ze.objectKeys(this.shape).forEach(i => {
            const a = this.shape[i];
            e && !e[i] ? s[i] = a : s[i] = a.optional()
        }
        ),
        new ot({
            ...this._def,
            shape: () => s
        })
    }
    required(e) {
        const s = {};
        return ze.objectKeys(this.shape).forEach(i => {
            if (e && !e[i])
                s[i] = this.shape[i];
            else {
                let u = this.shape[i];
                for (; u instanceof Ur; )
                    u = u._def.innerType;
                s[i] = u
            }
        }
        ),
        new ot({
            ...this._def,
            shape: () => s
        })
    }
    keyof() {
        return gv(ze.objectKeys(this.shape))
    }
}
ot.create = (r, e) => new ot({
    shape: () => r,
    unknownKeys: "strip",
    catchall: cn.create(),
    typeName: Ee.ZodObject,
    ...Re(e)
});
ot.strictCreate = (r, e) => new ot({
    shape: () => r,
    unknownKeys: "strict",
    catchall: cn.create(),
    typeName: Ee.ZodObject,
    ...Re(e)
});
ot.lazycreate = (r, e) => new ot({
    shape: r,
    unknownKeys: "strip",
    catchall: cn.create(),
    typeName: Ee.ZodObject,
    ...Re(e)
});
class mo extends Ie {
    _parse(e) {
        const {ctx: s} = this._processInputParams(e)
          , i = this._def.options;
        function a(u) {
            for (const f of u)
                if (f.result.status === "valid")
                    return f.result;
            for (const f of u)
                if (f.result.status === "dirty")
                    return s.common.issues.push(...f.ctx.common.issues),
                    f.result;
            const d = u.map(f => new rr(f.ctx.common.issues));
            return ae(s, {
                code: X.invalid_union,
                unionErrors: d
            }),
            Te
        }
        if (s.common.async)
            return Promise.all(i.map(async u => {
                const d = {
                    ...s,
                    common: {
                        ...s.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await u._parseAsync({
                        data: s.data,
                        path: s.path,
                        parent: d
                    }),
                    ctx: d
                }
            }
            )).then(a);
        {
            let u;
            const d = [];
            for (const h of i) {
                const m = {
                    ...s,
                    common: {
                        ...s.common,
                        issues: []
                    },
                    parent: null
                }
                  , g = h._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: m
                });
                if (g.status === "valid")
                    return g;
                g.status === "dirty" && !u && (u = {
                    result: g,
                    ctx: m
                }),
                m.common.issues.length && d.push(m.common.issues)
            }
            if (u)
                return s.common.issues.push(...u.ctx.common.issues),
                u.result;
            const f = d.map(h => new rr(h));
            return ae(s, {
                code: X.invalid_union,
                unionErrors: f
            }),
            Te
        }
    }
    get options() {
        return this._def.options
    }
}
mo.create = (r, e) => new mo({
    options: r,
    typeName: Ee.ZodUnion,
    ...Re(e)
});
const on = r => r instanceof vo ? on(r.schema) : r instanceof Ar ? on(r.innerType()) : r instanceof xo ? [r.value] : r instanceof Un ? r.options : r instanceof wo ? ze.objectValues(r.enum) : r instanceof bo ? on(r._def.innerType) : r instanceof po ? [void 0] : r instanceof ho ? [null] : r instanceof Ur ? [void 0, ...on(r.unwrap())] : r instanceof $n ? [null, ...on(r.unwrap())] : r instanceof Kd || r instanceof So ? on(r.unwrap()) : r instanceof _o ? on(r._def.innerType) : [];
class Nl extends Ie {
    _parse(e) {
        const {ctx: s} = this._processInputParams(e);
        if (s.parsedType !== de.object)
            return ae(s, {
                code: X.invalid_type,
                expected: de.object,
                received: s.parsedType
            }),
            Te;
        const i = this.discriminator
          , a = s.data[i]
          , u = this.optionsMap.get(a);
        return u ? s.common.async ? u._parseAsync({
            data: s.data,
            path: s.path,
            parent: s
        }) : u._parseSync({
            data: s.data,
            path: s.path,
            parent: s
        }) : (ae(s, {
            code: X.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [i]
        }),
        Te)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, s, i) {
        const a = new Map;
        for (const u of s) {
            const d = on(u.shape[e]);
            if (!d.length)
                throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const f of d) {
                if (a.has(f))
                    throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(f)}`);
                a.set(f, u)
            }
        }
        return new Nl({
            typeName: Ee.ZodDiscriminatedUnion,
            discriminator: e,
            options: s,
            optionsMap: a,
            ...Re(i)
        })
    }
}
function vd(r, e) {
    const s = an(r)
      , i = an(e);
    if (r === e)
        return {
            valid: !0,
            data: r
        };
    if (s === de.object && i === de.object) {
        const a = ze.objectKeys(e)
          , u = ze.objectKeys(r).filter(f => a.indexOf(f) !== -1)
          , d = {
            ...r,
            ...e
        };
        for (const f of u) {
            const h = vd(r[f], e[f]);
            if (!h.valid)
                return {
                    valid: !1
                };
            d[f] = h.data
        }
        return {
            valid: !0,
            data: d
        }
    } else if (s === de.array && i === de.array) {
        if (r.length !== e.length)
            return {
                valid: !1
            };
        const a = [];
        for (let u = 0; u < r.length; u++) {
            const d = r[u]
              , f = e[u]
              , h = vd(d, f);
            if (!h.valid)
                return {
                    valid: !1
                };
            a.push(h.data)
        }
        return {
            valid: !0,
            data: a
        }
    } else
        return s === de.date && i === de.date && +r == +e ? {
            valid: !0,
            data: r
        } : {
            valid: !1
        }
}
class go extends Ie {
    _parse(e) {
        const {status: s, ctx: i} = this._processInputParams(e)
          , a = (u, d) => {
            if (gd(u) || gd(d))
                return Te;
            const f = vd(u.value, d.value);
            return f.valid ? ((yd(u) || yd(d)) && s.dirty(),
            {
                status: s.value,
                value: f.data
            }) : (ae(i, {
                code: X.invalid_intersection_types
            }),
            Te)
        }
        ;
        return i.common.async ? Promise.all([this._def.left._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
        }), this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
        })]).then( ([u,d]) => a(u, d)) : a(this._def.left._parseSync({
            data: i.data,
            path: i.path,
            parent: i
        }), this._def.right._parseSync({
            data: i.data,
            path: i.path,
            parent: i
        }))
    }
}
go.create = (r, e, s) => new go({
    left: r,
    right: e,
    typeName: Ee.ZodIntersection,
    ...Re(s)
});
class Hr extends Ie {
    _parse(e) {
        const {status: s, ctx: i} = this._processInputParams(e);
        if (i.parsedType !== de.array)
            return ae(i, {
                code: X.invalid_type,
                expected: de.array,
                received: i.parsedType
            }),
            Te;
        if (i.data.length < this._def.items.length)
            return ae(i, {
                code: X.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            Te;
        !this._def.rest && i.data.length > this._def.items.length && (ae(i, {
            code: X.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        s.dirty());
        const u = [...i.data].map( (d, f) => {
            const h = this._def.items[f] || this._def.rest;
            return h ? h._parse(new Qr(i,d,i.path,f)) : null
        }
        ).filter(d => !!d);
        return i.common.async ? Promise.all(u).then(d => jt.mergeArray(s, d)) : jt.mergeArray(s, u)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new Hr({
            ...this._def,
            rest: e
        })
    }
}
Hr.create = (r, e) => {
    if (!Array.isArray(r))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Hr({
        items: r,
        typeName: Ee.ZodTuple,
        rest: null,
        ...Re(e)
    })
}
;
class yo extends Ie {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: s, ctx: i} = this._processInputParams(e);
        if (i.parsedType !== de.object)
            return ae(i, {
                code: X.invalid_type,
                expected: de.object,
                received: i.parsedType
            }),
            Te;
        const a = []
          , u = this._def.keyType
          , d = this._def.valueType;
        for (const f in i.data)
            a.push({
                key: u._parse(new Qr(i,f,i.path,f)),
                value: d._parse(new Qr(i,i.data[f],i.path,f)),
                alwaysSet: f in i.data
            });
        return i.common.async ? jt.mergeObjectAsync(s, a) : jt.mergeObjectSync(s, a)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, s, i) {
        return s instanceof Ie ? new yo({
            keyType: e,
            valueType: s,
            typeName: Ee.ZodRecord,
            ...Re(i)
        }) : new yo({
            keyType: Er.create(),
            valueType: e,
            typeName: Ee.ZodRecord,
            ...Re(s)
        })
    }
}
class pl extends Ie {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: s, ctx: i} = this._processInputParams(e);
        if (i.parsedType !== de.map)
            return ae(i, {
                code: X.invalid_type,
                expected: de.map,
                received: i.parsedType
            }),
            Te;
        const a = this._def.keyType
          , u = this._def.valueType
          , d = [...i.data.entries()].map( ([f,h], m) => ({
            key: a._parse(new Qr(i,f,i.path,[m, "key"])),
            value: u._parse(new Qr(i,h,i.path,[m, "value"]))
        }));
        if (i.common.async) {
            const f = new Map;
            return Promise.resolve().then(async () => {
                for (const h of d) {
                    const m = await h.key
                      , g = await h.value;
                    if (m.status === "aborted" || g.status === "aborted")
                        return Te;
                    (m.status === "dirty" || g.status === "dirty") && s.dirty(),
                    f.set(m.value, g.value)
                }
                return {
                    status: s.value,
                    value: f
                }
            }
            )
        } else {
            const f = new Map;
            for (const h of d) {
                const m = h.key
                  , g = h.value;
                if (m.status === "aborted" || g.status === "aborted")
                    return Te;
                (m.status === "dirty" || g.status === "dirty") && s.dirty(),
                f.set(m.value, g.value)
            }
            return {
                status: s.value,
                value: f
            }
        }
    }
}
pl.create = (r, e, s) => new pl({
    valueType: e,
    keyType: r,
    typeName: Ee.ZodMap,
    ...Re(s)
});
class ds extends Ie {
    _parse(e) {
        const {status: s, ctx: i} = this._processInputParams(e);
        if (i.parsedType !== de.set)
            return ae(i, {
                code: X.invalid_type,
                expected: de.set,
                received: i.parsedType
            }),
            Te;
        const a = this._def;
        a.minSize !== null && i.data.size < a.minSize.value && (ae(i, {
            code: X.too_small,
            minimum: a.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.minSize.message
        }),
        s.dirty()),
        a.maxSize !== null && i.data.size > a.maxSize.value && (ae(i, {
            code: X.too_big,
            maximum: a.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.maxSize.message
        }),
        s.dirty());
        const u = this._def.valueType;
        function d(h) {
            const m = new Set;
            for (const g of h) {
                if (g.status === "aborted")
                    return Te;
                g.status === "dirty" && s.dirty(),
                m.add(g.value)
            }
            return {
                status: s.value,
                value: m
            }
        }
        const f = [...i.data.values()].map( (h, m) => u._parse(new Qr(i,h,i.path,m)));
        return i.common.async ? Promise.all(f).then(h => d(h)) : d(f)
    }
    min(e, s) {
        return new ds({
            ...this._def,
            minSize: {
                value: e,
                message: xe.toString(s)
            }
        })
    }
    max(e, s) {
        return new ds({
            ...this._def,
            maxSize: {
                value: e,
                message: xe.toString(s)
            }
        })
    }
    size(e, s) {
        return this.min(e, s).max(e, s)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
ds.create = (r, e) => new ds({
    valueType: r,
    minSize: null,
    maxSize: null,
    typeName: Ee.ZodSet,
    ...Re(e)
});
class ti extends Ie {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(e) {
        const {ctx: s} = this._processInputParams(e);
        if (s.parsedType !== de.function)
            return ae(s, {
                code: X.invalid_type,
                expected: de.function,
                received: s.parsedType
            }),
            Te;
        function i(f, h) {
            return ul({
                data: f,
                path: s.path,
                errorMaps: [s.common.contextualErrorMap, s.schemaErrorMap, ll(), si].filter(m => !!m),
                issueData: {
                    code: X.invalid_arguments,
                    argumentsError: h
                }
            })
        }
        function a(f, h) {
            return ul({
                data: f,
                path: s.path,
                errorMaps: [s.common.contextualErrorMap, s.schemaErrorMap, ll(), si].filter(m => !!m),
                issueData: {
                    code: X.invalid_return_type,
                    returnTypeError: h
                }
            })
        }
        const u = {
            errorMap: s.common.contextualErrorMap
        }
          , d = s.data;
        if (this._def.returns instanceof oi) {
            const f = this;
            return Lt(async function(...h) {
                const m = new rr([])
                  , g = await f._def.args.parseAsync(h, u).catch(T => {
                    throw m.addIssue(i(h, T)),
                    m
                }
                )
                  , x = await Reflect.apply(d, this, g);
                return await f._def.returns._def.type.parseAsync(x, u).catch(T => {
                    throw m.addIssue(a(x, T)),
                    m
                }
                )
            })
        } else {
            const f = this;
            return Lt(function(...h) {
                const m = f._def.args.safeParse(h, u);
                if (!m.success)
                    throw new rr([i(h, m.error)]);
                const g = Reflect.apply(d, this, m.data)
                  , x = f._def.returns.safeParse(g, u);
                if (!x.success)
                    throw new rr([a(g, x.error)]);
                return x.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...e) {
        return new ti({
            ...this._def,
            args: Hr.create(e).rest(is.create())
        })
    }
    returns(e) {
        return new ti({
            ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, s, i) {
        return new ti({
            args: e || Hr.create([]).rest(is.create()),
            returns: s || is.create(),
            typeName: Ee.ZodFunction,
            ...Re(i)
        })
    }
}
class vo extends Ie {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {ctx: s} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: s.data,
            path: s.path,
            parent: s
        })
    }
}
vo.create = (r, e) => new vo({
    getter: r,
    typeName: Ee.ZodLazy,
    ...Re(e)
});
class xo extends Ie {
    _parse(e) {
        if (e.data !== this._def.value) {
            const s = this._getOrReturnCtx(e);
            return ae(s, {
                received: s.data,
                code: X.invalid_literal,
                expected: this._def.value
            }),
            Te
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
xo.create = (r, e) => new xo({
    value: r,
    typeName: Ee.ZodLiteral,
    ...Re(e)
});
function gv(r, e) {
    return new Un({
        values: r,
        typeName: Ee.ZodEnum,
        ...Re(e)
    })
}
class Un extends Ie {
    constructor() {
        super(...arguments),
        to.set(this, void 0)
    }
    _parse(e) {
        if (typeof e.data != "string") {
            const s = this._getOrReturnCtx(e)
              , i = this._def.values;
            return ae(s, {
                expected: ze.joinValues(i),
                received: s.parsedType,
                code: X.invalid_type
            }),
            Te
        }
        if (cl(this, to) || fv(this, to, new Set(this._def.values)),
        !cl(this, to).has(e.data)) {
            const s = this._getOrReturnCtx(e)
              , i = this._def.values;
            return ae(s, {
                received: s.data,
                code: X.invalid_enum_value,
                options: i
            }),
            Te
        }
        return Lt(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const s of this._def.values)
            e[s] = s;
        return e
    }
    get Values() {
        const e = {};
        for (const s of this._def.values)
            e[s] = s;
        return e
    }
    get Enum() {
        const e = {};
        for (const s of this._def.values)
            e[s] = s;
        return e
    }
    extract(e, s=this._def) {
        return Un.create(e, {
            ...this._def,
            ...s
        })
    }
    exclude(e, s=this._def) {
        return Un.create(this.options.filter(i => !e.includes(i)), {
            ...this._def,
            ...s
        })
    }
}
to = new WeakMap;
Un.create = gv;
class wo extends Ie {
    constructor() {
        super(...arguments),
        ro.set(this, void 0)
    }
    _parse(e) {
        const s = ze.getValidEnumValues(this._def.values)
          , i = this._getOrReturnCtx(e);
        if (i.parsedType !== de.string && i.parsedType !== de.number) {
            const a = ze.objectValues(s);
            return ae(i, {
                expected: ze.joinValues(a),
                received: i.parsedType,
                code: X.invalid_type
            }),
            Te
        }
        if (cl(this, ro) || fv(this, ro, new Set(ze.getValidEnumValues(this._def.values))),
        !cl(this, ro).has(e.data)) {
            const a = ze.objectValues(s);
            return ae(i, {
                received: i.data,
                code: X.invalid_enum_value,
                options: a
            }),
            Te
        }
        return Lt(e.data)
    }
    get enum() {
        return this._def.values
    }
}
ro = new WeakMap;
wo.create = (r, e) => new wo({
    values: r,
    typeName: Ee.ZodNativeEnum,
    ...Re(e)
});
class oi extends Ie {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {ctx: s} = this._processInputParams(e);
        if (s.parsedType !== de.promise && s.common.async === !1)
            return ae(s, {
                code: X.invalid_type,
                expected: de.promise,
                received: s.parsedType
            }),
            Te;
        const i = s.parsedType === de.promise ? s.data : Promise.resolve(s.data);
        return Lt(i.then(a => this._def.type.parseAsync(a, {
            path: s.path,
            errorMap: s.common.contextualErrorMap
        })))
    }
}
oi.create = (r, e) => new oi({
    type: r,
    typeName: Ee.ZodPromise,
    ...Re(e)
});
class Ar extends Ie {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === Ee.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {status: s, ctx: i} = this._processInputParams(e)
          , a = this._def.effect || null
          , u = {
            addIssue: d => {
                ae(i, d),
                d.fatal ? s.abort() : s.dirty()
            }
            ,
            get path() {
                return i.path
            }
        };
        if (u.addIssue = u.addIssue.bind(u),
        a.type === "preprocess") {
            const d = a.transform(i.data, u);
            if (i.common.async)
                return Promise.resolve(d).then(async f => {
                    if (s.value === "aborted")
                        return Te;
                    const h = await this._def.schema._parseAsync({
                        data: f,
                        path: i.path,
                        parent: i
                    });
                    return h.status === "aborted" ? Te : h.status === "dirty" || s.value === "dirty" ? Zs(h.value) : h
                }
                );
            {
                if (s.value === "aborted")
                    return Te;
                const f = this._def.schema._parseSync({
                    data: d,
                    path: i.path,
                    parent: i
                });
                return f.status === "aborted" ? Te : f.status === "dirty" || s.value === "dirty" ? Zs(f.value) : f
            }
        }
        if (a.type === "refinement") {
            const d = f => {
                const h = a.refinement(f, u);
                if (i.common.async)
                    return Promise.resolve(h);
                if (h instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return f
            }
            ;
            if (i.common.async === !1) {
                const f = this._def.schema._parseSync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                return f.status === "aborted" ? Te : (f.status === "dirty" && s.dirty(),
                d(f.value),
                {
                    status: s.value,
                    value: f.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }).then(f => f.status === "aborted" ? Te : (f.status === "dirty" && s.dirty(),
                d(f.value).then( () => ({
                    status: s.value,
                    value: f.value
                }))))
        }
        if (a.type === "transform")
            if (i.common.async === !1) {
                const d = this._def.schema._parseSync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                if (!us(d))
                    return d;
                const f = a.transform(d.value, u);
                if (f instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: s.value,
                    value: f
                }
            } else
                return this._def.schema._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }).then(d => us(d) ? Promise.resolve(a.transform(d.value, u)).then(f => ({
                    status: s.value,
                    value: f
                })) : d);
        ze.assertNever(a)
    }
}
Ar.create = (r, e, s) => new Ar({
    schema: r,
    typeName: Ee.ZodEffects,
    effect: e,
    ...Re(s)
});
Ar.createWithPreprocess = (r, e, s) => new Ar({
    schema: e,
    effect: {
        type: "preprocess",
        transform: r
    },
    typeName: Ee.ZodEffects,
    ...Re(s)
});
class Ur extends Ie {
    _parse(e) {
        return this._getType(e) === de.undefined ? Lt(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
Ur.create = (r, e) => new Ur({
    innerType: r,
    typeName: Ee.ZodOptional,
    ...Re(e)
});
class $n extends Ie {
    _parse(e) {
        return this._getType(e) === de.null ? Lt(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
$n.create = (r, e) => new $n({
    innerType: r,
    typeName: Ee.ZodNullable,
    ...Re(e)
});
class bo extends Ie {
    _parse(e) {
        const {ctx: s} = this._processInputParams(e);
        let i = s.data;
        return s.parsedType === de.undefined && (i = this._def.defaultValue()),
        this._def.innerType._parse({
            data: i,
            path: s.path,
            parent: s
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
bo.create = (r, e) => new bo({
    innerType: r,
    typeName: Ee.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...Re(e)
});
class _o extends Ie {
    _parse(e) {
        const {ctx: s} = this._processInputParams(e)
          , i = {
            ...s,
            common: {
                ...s.common,
                issues: []
            }
        }
          , a = this._def.innerType._parse({
            data: i.data,
            path: i.path,
            parent: {
                ...i
            }
        });
        return co(a) ? a.then(u => ({
            status: "valid",
            value: u.status === "valid" ? u.value : this._def.catchValue({
                get error() {
                    return new rr(i.common.issues)
                },
                input: i.data
            })
        })) : {
            status: "valid",
            value: a.status === "valid" ? a.value : this._def.catchValue({
                get error() {
                    return new rr(i.common.issues)
                },
                input: i.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
_o.create = (r, e) => new _o({
    innerType: r,
    typeName: Ee.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...Re(e)
});
class hl extends Ie {
    _parse(e) {
        if (this._getType(e) !== de.nan) {
            const i = this._getOrReturnCtx(e);
            return ae(i, {
                code: X.invalid_type,
                expected: de.nan,
                received: i.parsedType
            }),
            Te
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
hl.create = r => new hl({
    typeName: Ee.ZodNaN,
    ...Re(r)
});
const LE = Symbol("zod_brand");
class Kd extends Ie {
    _parse(e) {
        const {ctx: s} = this._processInputParams(e)
          , i = s.data;
        return this._def.type._parse({
            data: i,
            path: s.path,
            parent: s
        })
    }
    unwrap() {
        return this._def.type
    }
}
class No extends Ie {
    _parse(e) {
        const {status: s, ctx: i} = this._processInputParams(e);
        if (i.common.async)
            return (async () => {
                const u = await this._def.in._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                return u.status === "aborted" ? Te : u.status === "dirty" ? (s.dirty(),
                Zs(u.value)) : this._def.out._parseAsync({
                    data: u.value,
                    path: i.path,
                    parent: i
                })
            }
            )();
        {
            const a = this._def.in._parseSync({
                data: i.data,
                path: i.path,
                parent: i
            });
            return a.status === "aborted" ? Te : a.status === "dirty" ? (s.dirty(),
            {
                status: "dirty",
                value: a.value
            }) : this._def.out._parseSync({
                data: a.value,
                path: i.path,
                parent: i
            })
        }
    }
    static create(e, s) {
        return new No({
            in: e,
            out: s,
            typeName: Ee.ZodPipeline
        })
    }
}
class So extends Ie {
    _parse(e) {
        const s = this._def.innerType._parse(e)
          , i = a => (us(a) && (a.value = Object.freeze(a.value)),
        a);
        return co(s) ? s.then(a => i(a)) : i(s)
    }
    unwrap() {
        return this._def.innerType
    }
}
So.create = (r, e) => new So({
    innerType: r,
    typeName: Ee.ZodReadonly,
    ...Re(e)
});
function Wm(r, e) {
    const s = typeof r == "function" ? r(e) : typeof r == "string" ? {
        message: r
    } : r;
    return typeof s == "string" ? {
        message: s
    } : s
}
function yv(r, e={}, s) {
    return r ? ii.create().superRefine( (i, a) => {
        var u, d;
        const f = r(i);
        if (f instanceof Promise)
            return f.then(h => {
                var m, g;
                if (!h) {
                    const x = Wm(e, i)
                      , b = (g = (m = x.fatal) !== null && m !== void 0 ? m : s) !== null && g !== void 0 ? g : !0;
                    a.addIssue({
                        code: "custom",
                        ...x,
                        fatal: b
                    })
                }
            }
            );
        if (!f) {
            const h = Wm(e, i)
              , m = (d = (u = h.fatal) !== null && u !== void 0 ? u : s) !== null && d !== void 0 ? d : !0;
            a.addIssue({
                code: "custom",
                ...h,
                fatal: m
            })
        }
    }
    ) : ii.create()
}
const VE = {
    object: ot.lazycreate
};
var Ee;
(function(r) {
    r.ZodString = "ZodString",
    r.ZodNumber = "ZodNumber",
    r.ZodNaN = "ZodNaN",
    r.ZodBigInt = "ZodBigInt",
    r.ZodBoolean = "ZodBoolean",
    r.ZodDate = "ZodDate",
    r.ZodSymbol = "ZodSymbol",
    r.ZodUndefined = "ZodUndefined",
    r.ZodNull = "ZodNull",
    r.ZodAny = "ZodAny",
    r.ZodUnknown = "ZodUnknown",
    r.ZodNever = "ZodNever",
    r.ZodVoid = "ZodVoid",
    r.ZodArray = "ZodArray",
    r.ZodObject = "ZodObject",
    r.ZodUnion = "ZodUnion",
    r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    r.ZodIntersection = "ZodIntersection",
    r.ZodTuple = "ZodTuple",
    r.ZodRecord = "ZodRecord",
    r.ZodMap = "ZodMap",
    r.ZodSet = "ZodSet",
    r.ZodFunction = "ZodFunction",
    r.ZodLazy = "ZodLazy",
    r.ZodLiteral = "ZodLiteral",
    r.ZodEnum = "ZodEnum",
    r.ZodEffects = "ZodEffects",
    r.ZodNativeEnum = "ZodNativeEnum",
    r.ZodOptional = "ZodOptional",
    r.ZodNullable = "ZodNullable",
    r.ZodDefault = "ZodDefault",
    r.ZodCatch = "ZodCatch",
    r.ZodPromise = "ZodPromise",
    r.ZodBranded = "ZodBranded",
    r.ZodPipeline = "ZodPipeline",
    r.ZodReadonly = "ZodReadonly"
}
)(Ee || (Ee = {}));
const zE = (r, e={
    message: `Input not instance of ${r.name}`
}) => yv(s => s instanceof r, e)
  , vv = Er.create
  , xv = zn.create
  , BE = hl.create
  , UE = Bn.create
  , wv = fo.create
  , $E = cs.create
  , QE = dl.create
  , HE = po.create
  , WE = ho.create
  , qE = ii.create
  , ZE = is.create
  , KE = cn.create
  , GE = fl.create
  , XE = Tr.create
  , YE = ot.create
  , JE = ot.strictCreate
  , eT = mo.create
  , tT = Nl.create
  , rT = go.create
  , nT = Hr.create
  , sT = yo.create
  , iT = pl.create
  , oT = ds.create
  , aT = ti.create
  , lT = vo.create
  , uT = xo.create
  , cT = Un.create
  , dT = wo.create
  , fT = oi.create
  , qm = Ar.create
  , pT = Ur.create
  , hT = $n.create
  , mT = Ar.createWithPreprocess
  , gT = No.create
  , yT = () => vv().optional()
  , vT = () => xv().optional()
  , xT = () => wv().optional()
  , wT = {
    string: (r => Er.create({
        ...r,
        coerce: !0
    })),
    number: (r => zn.create({
        ...r,
        coerce: !0
    })),
    boolean: (r => fo.create({
        ...r,
        coerce: !0
    })),
    bigint: (r => Bn.create({
        ...r,
        coerce: !0
    })),
    date: (r => cs.create({
        ...r,
        coerce: !0
    }))
}
  , bT = Te;
var at = Object.freeze({
    __proto__: null,
    defaultErrorMap: si,
    setErrorMap: mE,
    getErrorMap: ll,
    makeIssue: ul,
    EMPTY_PATH: gE,
    addIssueToContext: ae,
    ParseStatus: jt,
    INVALID: Te,
    DIRTY: Zs,
    OK: Lt,
    isAborted: gd,
    isDirty: yd,
    isValid: us,
    isAsync: co,
    get util() {
        return ze
    },
    get objectUtil() {
        return md
    },
    ZodParsedType: de,
    getParsedType: an,
    ZodType: Ie,
    datetimeRegex: mv,
    ZodString: Er,
    ZodNumber: zn,
    ZodBigInt: Bn,
    ZodBoolean: fo,
    ZodDate: cs,
    ZodSymbol: dl,
    ZodUndefined: po,
    ZodNull: ho,
    ZodAny: ii,
    ZodUnknown: is,
    ZodNever: cn,
    ZodVoid: fl,
    ZodArray: Tr,
    ZodObject: ot,
    ZodUnion: mo,
    ZodDiscriminatedUnion: Nl,
    ZodIntersection: go,
    ZodTuple: Hr,
    ZodRecord: yo,
    ZodMap: pl,
    ZodSet: ds,
    ZodFunction: ti,
    ZodLazy: vo,
    ZodLiteral: xo,
    ZodEnum: Un,
    ZodNativeEnum: wo,
    ZodPromise: oi,
    ZodEffects: Ar,
    ZodTransformer: Ar,
    ZodOptional: Ur,
    ZodNullable: $n,
    ZodDefault: bo,
    ZodCatch: _o,
    ZodNaN: hl,
    BRAND: LE,
    ZodBranded: Kd,
    ZodPipeline: No,
    ZodReadonly: So,
    custom: yv,
    Schema: Ie,
    ZodSchema: Ie,
    late: VE,
    get ZodFirstPartyTypeKind() {
        return Ee
    },
    coerce: wT,
    any: qE,
    array: XE,
    bigint: UE,
    boolean: wv,
    date: $E,
    discriminatedUnion: tT,
    effect: qm,
    enum: cT,
    function: aT,
    instanceof: zE,
    intersection: rT,
    lazy: lT,
    literal: uT,
    map: iT,
    nan: BE,
    nativeEnum: dT,
    never: KE,
    null: WE,
    nullable: hT,
    number: xv,
    object: YE,
    oboolean: xT,
    onumber: vT,
    optional: pT,
    ostring: yT,
    pipeline: gT,
    preprocess: mT,
    promise: fT,
    record: sT,
    set: oT,
    strictObject: JE,
    string: vv,
    symbol: QE,
    transformer: qm,
    tuple: nT,
    undefined: HE,
    union: eT,
    unknown: ZE,
    void: GE,
    NEVER: bT,
    ZodIssueCode: X,
    quotelessJson: hE,
    ZodError: rr
});
const it = {
    INT8_MIN: -128,
    INT8_MAX: 127,
    INT8_UNSIGNED_MAX: 255,
    INT16_MIN: -32768,
    INT16_MAX: 32767,
    INT16_UNSIGNED_MAX: 65535,
    INT24_MIN: -8388608,
    INT24_MAX: 8388607,
    INT24_UNSIGNED_MAX: 16777215,
    INT32_MIN: -2147483648,
    INT32_MAX: 2147483647,
    INT32_UNSIGNED_MAX: 4294967295,
    INT48_MIN: -0x800000000000,
    INT48_MAX: 0x7fffffffffff,
    INT48_UNSIGNED_MAX: 0xffffffffffff,
    INT64_MIN: -9223372036854775808n,
    INT64_MAX: 9223372036854775807n,
    INT64_UNSIGNED_MAX: 18446744073709551615n
};
function pt(r, e) {
    return e.includes(r.columnType)
}
function _T(r) {
    return "enumValues"in r && Array.isArray(r.enumValues) && r.enumValues.length > 0
}
const ST = at.union([at.string(), at.number(), at.boolean(), at.null()])
  , CT = at.union([ST, at.record(at.any()), at.array(at.any())])
  , kT = at.custom(r => r instanceof Buffer);
function bv(r, e) {
    const s = e?.zodInstance ?? at
      , i = e?.coerce ?? {};
    let a;
    return _T(r) && (a = r.enumValues.length ? s.enum(r.enumValues) : s.string()),
    a || (pt(r, ["PgGeometry", "PgPointTuple"]) ? a = s.tuple([s.number(), s.number()]) : pt(r, ["PgGeometryObject", "PgPointObject"]) ? a = s.object({
        x: s.number(),
        y: s.number()
    }) : pt(r, ["PgHalfVector", "PgVector"]) ? (a = s.array(s.number()),
    a = r.dimensions ? a.length(r.dimensions) : a) : pt(r, ["PgLine"]) ? a = s.tuple([s.number(), s.number(), s.number()]) : pt(r, ["PgLineABC"]) ? a = s.object({
        a: s.number(),
        b: s.number(),
        c: s.number()
    }) : pt(r, ["PgArray"]) ? (a = s.array(bv(r.baseColumn, s)),
    a = r.size ? a.length(r.size) : a) : r.dataType === "array" ? a = s.array(s.any()) : r.dataType === "number" ? a = ET(r, s, i) : r.dataType === "bigint" ? a = TT(r, s, i) : r.dataType === "boolean" ? a = i === !0 || i.boolean ? s.coerce.boolean() : s.boolean() : r.dataType === "date" ? a = i === !0 || i.date ? s.coerce.date() : s.date() : r.dataType === "string" ? a = PT(r, s, i) : r.dataType === "json" ? a = CT : r.dataType === "custom" ? a = s.any() : r.dataType === "buffer" && (a = kT)),
    a || (a = s.any()),
    a
}
function ET(r, e, s) {
    let i = r.getSQLType().includes("unsigned"), a, u, d = !1;
    pt(r, ["MySqlTinyInt", "SingleStoreTinyInt"]) ? (a = i ? 0 : it.INT8_MIN,
    u = i ? it.INT8_UNSIGNED_MAX : it.INT8_MAX,
    d = !0) : pt(r, ["PgSmallInt", "PgSmallSerial", "MySqlSmallInt", "SingleStoreSmallInt"]) ? (a = i ? 0 : it.INT16_MIN,
    u = i ? it.INT16_UNSIGNED_MAX : it.INT16_MAX,
    d = !0) : pt(r, ["PgReal", "MySqlFloat", "MySqlMediumInt", "SingleStoreMediumInt", "SingleStoreFloat"]) ? (a = i ? 0 : it.INT24_MIN,
    u = i ? it.INT24_UNSIGNED_MAX : it.INT24_MAX,
    d = pt(r, ["MySqlMediumInt", "SingleStoreMediumInt"])) : pt(r, ["PgInteger", "PgSerial", "MySqlInt", "SingleStoreInt"]) ? (a = i ? 0 : it.INT32_MIN,
    u = i ? it.INT32_UNSIGNED_MAX : it.INT32_MAX,
    d = !0) : pt(r, ["PgDoublePrecision", "MySqlReal", "MySqlDouble", "SingleStoreReal", "SingleStoreDouble", "SQLiteReal"]) ? (a = i ? 0 : it.INT48_MIN,
    u = i ? it.INT48_UNSIGNED_MAX : it.INT48_MAX) : pt(r, ["PgBigInt53", "PgBigSerial53", "MySqlBigInt53", "MySqlSerial", "SingleStoreBigInt53", "SingleStoreSerial", "SQLiteInteger"]) ? (i = i || pt(r, ["MySqlSerial", "SingleStoreSerial"]),
    a = i ? 0 : Number.MIN_SAFE_INTEGER,
    u = Number.MAX_SAFE_INTEGER,
    d = !0) : pt(r, ["MySqlYear", "SingleStoreYear"]) ? (a = 1901,
    u = 2155,
    d = !0) : (a = Number.MIN_SAFE_INTEGER,
    u = Number.MAX_SAFE_INTEGER);
    let f = s === !0 || s?.number ? e.coerce.number() : e.number();
    return f = f.min(a).max(u),
    d ? f.int() : f
}
function TT(r, e, s) {
    const i = r.getSQLType().includes("unsigned")
      , a = i ? 0n : it.INT64_MIN
      , u = i ? it.INT64_UNSIGNED_MAX : it.INT64_MAX;
    return (s === !0 || s?.bigint ? e.coerce.bigint() : e.bigint()).min(a).max(u)
}
function PT(r, e, s) {
    if (pt(r, ["PgUUID"]))
        return e.string().uuid();
    let i, a, u = !1;
    pt(r, ["PgVarchar", "SQLiteText"]) ? i = r.length : pt(r, ["MySqlVarChar", "SingleStoreVarChar"]) ? i = r.length ?? it.INT16_UNSIGNED_MAX : pt(r, ["MySqlText", "SingleStoreText"]) && (r.textType === "longtext" ? i = it.INT32_UNSIGNED_MAX : r.textType === "mediumtext" ? i = it.INT24_UNSIGNED_MAX : r.textType === "text" ? i = it.INT16_UNSIGNED_MAX : i = it.INT8_UNSIGNED_MAX),
    pt(r, ["PgChar", "MySqlChar", "SingleStoreChar"]) && (i = r.length,
    u = !0),
    pt(r, ["PgBinaryVector"]) && (a = /^[01]+$/,
    i = r.dimensions);
    let d = s === !0 || s?.string ? e.coerce.string() : e.string();
    return d = a ? d.regex(a) : d,
    i && u ? d.length(i) : i ? d.max(i) : d
}
function _v(r) {
    return nv(r) ? cC(r) : dC(r)
}
function Sv(r, e, s, i) {
    const a = {};
    for (const [u,d] of Object.entries(r)) {
        if (!Pt(d, uo) && !Pt(d, ct) && !Pt(d, ct.Aliased) && typeof d == "object") {
            const x = nv(d) || uC(d) ? _v(d) : d;
            a[u] = Sv(x, e[u] ?? {}, s, i);
            continue
        }
        const f = e[u];
        if (f !== void 0 && typeof f != "function") {
            a[u] = f;
            continue
        }
        const h = Pt(d, uo) ? d : void 0
          , m = h ? bv(h, i) : at.any()
          , g = typeof f == "function" ? f(m) : m;
        s.never(h) || (a[u] = g,
        h && (s.nullable(h) && (a[u] = a[u].nullable()),
        s.optional(h) && (a[u] = a[u].optional())))
    }
    return at.object(a)
}
const NT = {
    never: r => r?.generated?.type === "always" || r?.generatedIdentity?.type === "always",
    optional: r => !r.notNull || r.notNull && r.hasDefault,
    nullable: r => !r.notNull
}
  , RT = (r, e) => {
    const s = _v(r);
    return Sv(s, {}, NT)
}
  , AT = pE("inspections", {
    id: cv("id").primaryKey(),
    supplier: Xt("supplier").notNull(),
    invoiceNumber: Xt("invoice_number").notNull(),
    invoiceDate: Xt("invoice_date").notNull(),
    orderNumber: Xt("order_number").notNull(),
    deliveryDate: Xt("delivery_date").notNull(),
    items: lv("items").$type().notNull(),
    checkQuantity: sn("check_quantity").notNull(),
    checkDeadline: sn("check_deadline").notNull(),
    checkQuality: sn("check_quality").notNull(),
    checkPrice: sn("check_price").notNull(),
    checkTax: sn("check_tax").notNull(),
    checkVisual: sn("check_visual").notNull(),
    checkDimensional: sn("check_dimensional").notNull(),
    checkValidity: sn("check_validity").notNull(),
    receiverName: Xt("receiver_name").notNull(),
    qualityInspectorName: Xt("quality_inspector_name").notNull(),
    finalResult: Xt("final_result").notNull(),
    ratingQuality: Xt("rating_quality"),
    ratingDelivery: Xt("rating_delivery"),
    ratingQuantity: Xt("rating_quantity"),
    ratingDocs: Xt("rating_docs")
})
  , OT = RT(AT).omit({
    id: !0
});
var IT = "Label"
  , Cv = w.forwardRef( (r, e) => v.jsx(yt.label, {
    ...r,
    ref: e,
    onMouseDown: s => {
        s.target.closest("button, input, select, textarea") || (r.onMouseDown?.(s),
        !s.defaultPrevented && s.detail > 1 && s.preventDefault())
    }
}));
Cv.displayName = IT;
var kv = Cv;
const jT = _l("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , Ev = w.forwardRef( ({className: r, ...e}, s) => v.jsx(kv, {
    ref: s,
    className: He(jT(), r),
    ...e
}));
Ev.displayName = kv.displayName;
const DT = E1
  , Tv = w.createContext({})
  , Vr = ({...r}) => v.jsx(Tv.Provider, {
    value: {
        name: r.name
    },
    children: v.jsx(R1, {
        ...r
    })
})
  , Rl = () => {
    const r = w.useContext(Tv)
      , e = w.useContext(Pv)
      , {getFieldState: s, formState: i} = To()
      , a = s(r.name, i);
    if (!r)
        throw new Error("useFormField should be used within <FormField>");
    const {id: u} = e;
    return {
        id: u,
        name: r.name,
        formItemId: `${u}-form-item`,
        formDescriptionId: `${u}-form-item-description`,
        formMessageId: `${u}-form-item-message`,
        ...a
    }
}
  , Pv = w.createContext({})
  , xr = w.forwardRef( ({className: r, ...e}, s) => {
    const i = w.useId();
    return v.jsx(Pv.Provider, {
        value: {
            id: i
        },
        children: v.jsx("div", {
            ref: s,
            className: He("space-y-2", r),
            ...e
        })
    })
}
);
xr.displayName = "FormItem";
const wr = w.forwardRef( ({className: r, ...e}, s) => {
    const {error: i, formItemId: a} = Rl();
    return v.jsx(Ev, {
        ref: s,
        className: He(i && "text-destructive", r),
        htmlFor: a,
        ...e
    })
}
);
wr.displayName = "FormLabel";
const br = w.forwardRef( ({...r}, e) => {
    const {error: s, formItemId: i, formDescriptionId: a, formMessageId: u} = Rl();
    return v.jsx(wg, {
        ref: e,
        id: i,
        "aria-describedby": s ? `${a} ${u}` : `${a}`,
        "aria-invalid": !!s,
        ...r
    })
}
);
br.displayName = "FormControl";
const FT = w.forwardRef( ({className: r, ...e}, s) => {
    const {formDescriptionId: i} = Rl();
    return v.jsx("p", {
        ref: s,
        id: i,
        className: He("text-sm text-muted-foreground", r),
        ...e
    })
}
);
FT.displayName = "FormDescription";
const Ws = w.forwardRef( ({className: r, children: e, ...s}, i) => {
    const {error: a, formMessageId: u} = Rl()
      , d = a ? String(a?.message ?? "") : e;
    return d ? v.jsx("p", {
        ref: i,
        id: u,
        className: He("text-sm font-medium text-destructive", r),
        ...s,
        children: d
    }) : null
}
);
Ws.displayName = "FormMessage";
const _r = w.forwardRef( ({className: r, type: e, ...s}, i) => v.jsx("input", {
    type: e,
    className: He("flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
    ref: i,
    ...s
}));
_r.displayName = "Input";
const MT = _l("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground border border-primary-border",
            destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
            outline: " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
            secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
            ghost: "border border-transparent"
        },
        size: {
            default: "min-h-9 px-4 py-2",
            sm: "min-h-8 rounded-md px-3 text-xs",
            lg: "min-h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Dn = w.forwardRef( ({className: r, variant: e, size: s, asChild: i=!1, ...a}, u) => {
    const d = i ? wg : "button";
    return v.jsx(d, {
        className: He(MT({
            variant: e,
            size: s,
            className: r
        })),
        ref: u,
        ...a
    })
}
);
Dn.displayName = "Button";
var LT = w.createContext(void 0);
function Nv(r) {
    const e = w.useContext(LT);
    return r || e || "ltr"
}
var qc = "rovingFocusGroup.onEntryFocus"
  , VT = {
    bubbles: !1,
    cancelable: !0
}
  , Al = "RovingFocusGroup"
  , [xd,Rv,zT] = _g(Al)
  , [BT,Av] = fs(Al, [zT])
  , [UT,$T] = BT(Al)
  , Ov = w.forwardRef( (r, e) => v.jsx(xd.Provider, {
    scope: r.__scopeRovingFocusGroup,
    children: v.jsx(xd.Slot, {
        scope: r.__scopeRovingFocusGroup,
        children: v.jsx(QT, {
            ...r,
            ref: e
        })
    })
}));
Ov.displayName = Al;
var QT = w.forwardRef( (r, e) => {
    const {__scopeRovingFocusGroup: s, orientation: i, loop: a=!1, dir: u, currentTabStopId: d, defaultCurrentTabStopId: f, onCurrentTabStopIdChange: h, onEntryFocus: m, preventScrollOnEntryFocus: g=!1, ...x} = r
      , b = w.useRef(null)
      , T = Wt(e, b)
      , R = Nv(u)
      , [S=null,k] = Rd({
        prop: d,
        defaultProp: f,
        onChange: h
    })
      , [F,A] = w.useState(!1)
      , B = Pr(m)
      , U = Rv(s)
      , Q = w.useRef(!1)
      , [L,M] = w.useState(0);
    return w.useEffect( () => {
        const q = b.current;
        if (q)
            return q.addEventListener(qc, B),
            () => q.removeEventListener(qc, B)
    }
    , [B]),
    v.jsx(UT, {
        scope: s,
        orientation: i,
        dir: R,
        loop: a,
        currentTabStopId: S,
        onItemFocus: w.useCallback(q => k(q), [k]),
        onItemShiftTab: w.useCallback( () => A(!0), []),
        onFocusableItemAdd: w.useCallback( () => M(q => q + 1), []),
        onFocusableItemRemove: w.useCallback( () => M(q => q - 1), []),
        children: v.jsx(yt.div, {
            tabIndex: F || L === 0 ? -1 : 0,
            "data-orientation": i,
            ...x,
            ref: T,
            style: {
                outline: "none",
                ...r.style
            },
            onMouseDown: Ze(r.onMouseDown, () => {
                Q.current = !0
            }
            ),
            onFocus: Ze(r.onFocus, q => {
                const ie = !Q.current;
                if (q.target === q.currentTarget && ie && !F) {
                    const me = new CustomEvent(qc,VT);
                    if (q.currentTarget.dispatchEvent(me),
                    !me.defaultPrevented) {
                        const _e = U().filter(ce => ce.focusable)
                          , J = _e.find(ce => ce.active)
                          , oe = _e.find(ce => ce.id === S)
                          , be = [J, oe, ..._e].filter(Boolean).map(ce => ce.ref.current);
                        Dv(be, g)
                    }
                }
                Q.current = !1
            }
            ),
            onBlur: Ze(r.onBlur, () => A(!1))
        })
    })
}
)
  , Iv = "RovingFocusGroupItem"
  , jv = w.forwardRef( (r, e) => {
    const {__scopeRovingFocusGroup: s, focusable: i=!0, active: a=!1, tabStopId: u, ...d} = r
      , f = X_()
      , h = u || f
      , m = $T(Iv, s)
      , g = m.currentTabStopId === h
      , x = Rv(s)
      , {onFocusableItemAdd: b, onFocusableItemRemove: T} = m;
    return w.useEffect( () => {
        if (i)
            return b(),
            () => T()
    }
    , [i, b, T]),
    v.jsx(xd.ItemSlot, {
        scope: s,
        id: h,
        focusable: i,
        active: a,
        children: v.jsx(yt.span, {
            tabIndex: g ? 0 : -1,
            "data-orientation": m.orientation,
            ...d,
            ref: e,
            onMouseDown: Ze(r.onMouseDown, R => {
                i ? m.onItemFocus(h) : R.preventDefault()
            }
            ),
            onFocus: Ze(r.onFocus, () => m.onItemFocus(h)),
            onKeyDown: Ze(r.onKeyDown, R => {
                if (R.key === "Tab" && R.shiftKey) {
                    m.onItemShiftTab();
                    return
                }
                if (R.target !== R.currentTarget)
                    return;
                const S = qT(R, m.orientation, m.dir);
                if (S !== void 0) {
                    if (R.metaKey || R.ctrlKey || R.altKey || R.shiftKey)
                        return;
                    R.preventDefault();
                    let F = x().filter(A => A.focusable).map(A => A.ref.current);
                    if (S === "last")
                        F.reverse();
                    else if (S === "prev" || S === "next") {
                        S === "prev" && F.reverse();
                        const A = F.indexOf(R.currentTarget);
                        F = m.loop ? ZT(F, A + 1) : F.slice(A + 1)
                    }
                    setTimeout( () => Dv(F))
                }
            }
            )
        })
    })
}
);
jv.displayName = Iv;
var HT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function WT(r, e) {
    return e !== "rtl" ? r : r === "ArrowLeft" ? "ArrowRight" : r === "ArrowRight" ? "ArrowLeft" : r
}
function qT(r, e, s) {
    const i = WT(r.key, s);
    if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i)))
        return HT[i]
}
function Dv(r, e=!1) {
    const s = document.activeElement;
    for (const i of r)
        if (i === s || (i.focus({
            preventScroll: e
        }),
        document.activeElement !== s))
            return
}
function ZT(r, e) {
    return r.map( (s, i) => r[(e + i) % r.length])
}
var KT = Ov
  , GT = jv;
function XT(r) {
    const e = w.useRef({
        value: r,
        previous: r
    });
    return w.useMemo( () => (e.current.value !== r && (e.current.previous = e.current.value,
    e.current.value = r),
    e.current.previous), [r])
}
var Gd = "Radio"
  , [YT,Fv] = fs(Gd)
  , [JT,eP] = YT(Gd)
  , Mv = w.forwardRef( (r, e) => {
    const {__scopeRadio: s, name: i, checked: a=!1, required: u, disabled: d, value: f="on", onCheck: h, form: m, ...g} = r
      , [x,b] = w.useState(null)
      , T = Wt(e, k => b(k))
      , R = w.useRef(!1)
      , S = x ? m || !!x.closest("form") : !0;
    return v.jsxs(JT, {
        scope: s,
        checked: a,
        disabled: d,
        children: [v.jsx(yt.button, {
            type: "button",
            role: "radio",
            "aria-checked": a,
            "data-state": zv(a),
            "data-disabled": d ? "" : void 0,
            disabled: d,
            value: f,
            ...g,
            ref: T,
            onClick: Ze(r.onClick, k => {
                a || h?.(),
                S && (R.current = k.isPropagationStopped(),
                R.current || k.stopPropagation())
            }
            )
        }), S && v.jsx(tP, {
            control: x,
            bubbles: !R.current,
            name: i,
            value: f,
            checked: a,
            required: u,
            disabled: d,
            form: m,
            style: {
                transform: "translateX(-100%)"
            }
        })]
    })
}
);
Mv.displayName = Gd;
var Lv = "RadioIndicator"
  , Vv = w.forwardRef( (r, e) => {
    const {__scopeRadio: s, forceMount: i, ...a} = r
      , u = eP(Lv, s);
    return v.jsx(vl, {
        present: i || u.checked,
        children: v.jsx(yt.span, {
            "data-state": zv(u.checked),
            "data-disabled": u.disabled ? "" : void 0,
            ...a,
            ref: e
        })
    })
}
);
Vv.displayName = Lv;
var tP = r => {
    const {control: e, checked: s, bubbles: i=!0, ...a} = r
      , u = w.useRef(null)
      , d = XT(s)
      , f = vy(e);
    return w.useEffect( () => {
        const h = u.current
          , m = window.HTMLInputElement.prototype
          , x = Object.getOwnPropertyDescriptor(m, "checked").set;
        if (d !== s && x) {
            const b = new Event("click",{
                bubbles: i
            });
            x.call(h, s),
            h.dispatchEvent(b)
        }
    }
    , [d, s, i]),
    v.jsx("input", {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: s,
        ...a,
        tabIndex: -1,
        ref: u,
        style: {
            ...r.style,
            ...f,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
}
;
function zv(r) {
    return r ? "checked" : "unchecked"
}
var rP = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  , Xd = "RadioGroup"
  , [nP] = fs(Xd, [Av, Fv])
  , Bv = Av()
  , Uv = Fv()
  , [sP,iP] = nP(Xd)
  , $v = w.forwardRef( (r, e) => {
    const {__scopeRadioGroup: s, name: i, defaultValue: a, value: u, required: d=!1, disabled: f=!1, orientation: h, dir: m, loop: g=!0, onValueChange: x, ...b} = r
      , T = Bv(s)
      , R = Nv(m)
      , [S,k] = Rd({
        prop: u,
        defaultProp: a,
        onChange: x
    });
    return v.jsx(sP, {
        scope: s,
        name: i,
        required: d,
        disabled: f,
        value: S,
        onValueChange: k,
        children: v.jsx(KT, {
            asChild: !0,
            ...T,
            orientation: h,
            dir: R,
            loop: g,
            children: v.jsx(yt.div, {
                role: "radiogroup",
                "aria-required": d,
                "aria-orientation": h,
                "data-disabled": f ? "" : void 0,
                dir: R,
                ...b,
                ref: e
            })
        })
    })
}
);
$v.displayName = Xd;
var Qv = "RadioGroupItem"
  , Hv = w.forwardRef( (r, e) => {
    const {__scopeRadioGroup: s, disabled: i, ...a} = r
      , u = iP(Qv, s)
      , d = u.disabled || i
      , f = Bv(s)
      , h = Uv(s)
      , m = w.useRef(null)
      , g = Wt(e, m)
      , x = u.value === a.value
      , b = w.useRef(!1);
    return w.useEffect( () => {
        const T = S => {
            rP.includes(S.key) && (b.current = !0)
        }
          , R = () => b.current = !1;
        return document.addEventListener("keydown", T),
        document.addEventListener("keyup", R),
        () => {
            document.removeEventListener("keydown", T),
            document.removeEventListener("keyup", R)
        }
    }
    , []),
    v.jsx(GT, {
        asChild: !0,
        ...f,
        focusable: !d,
        active: x,
        children: v.jsx(Mv, {
            disabled: d,
            required: u.required,
            checked: x,
            ...h,
            ...a,
            name: u.name,
            ref: g,
            onCheck: () => u.onValueChange(a.value),
            onKeyDown: Ze(T => {
                T.key === "Enter" && T.preventDefault()
            }
            ),
            onFocus: Ze(a.onFocus, () => {
                b.current && m.current?.click()
            }
            )
        })
    })
}
);
Hv.displayName = Qv;
var oP = "RadioGroupIndicator"
  , Wv = w.forwardRef( (r, e) => {
    const {__scopeRadioGroup: s, ...i} = r
      , a = Uv(s);
    return v.jsx(Vv, {
        ...a,
        ...i,
        ref: e
    })
}
);
Wv.displayName = oP;
var qv = $v
  , Zv = Hv
  , aP = Wv;
const Kv = w.forwardRef( ({className: r, ...e}, s) => v.jsx(qv, {
    className: He("grid gap-2", r),
    ...e,
    ref: s
}));
Kv.displayName = qv.displayName;
const Za = w.forwardRef( ({className: r, ...e}, s) => v.jsx(Zv, {
    ref: s,
    className: He("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
    ...e,
    children: v.jsx(aP, {
        className: "flex items-center justify-center",
        children: v.jsx(o_, {
            className: "h-2.5 w-2.5 fill-current text-current"
        })
    })
}));
Za.displayName = Zv.displayName;
const Gv = w.forwardRef( ({className: r, ...e}, s) => v.jsx("div", {
    className: "relative w-full overflow-auto",
    children: v.jsx("table", {
        ref: s,
        className: He("w-full caption-bottom text-sm", r),
        ...e
    })
}));
Gv.displayName = "Table";
const Xv = w.forwardRef( ({className: r, ...e}, s) => v.jsx("thead", {
    ref: s,
    className: He("[&_tr]:border-b", r),
    ...e
}));
Xv.displayName = "TableHeader";
const Yv = w.forwardRef( ({className: r, ...e}, s) => v.jsx("tbody", {
    ref: s,
    className: He("[&_tr:last-child]:border-0", r),
    ...e
}));
Yv.displayName = "TableBody";
const lP = w.forwardRef( ({className: r, ...e}, s) => v.jsx("tfoot", {
    ref: s,
    className: He("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", r),
    ...e
}));
lP.displayName = "TableFooter";
const wd = w.forwardRef( ({className: r, ...e}, s) => v.jsx("tr", {
    ref: s,
    className: He("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", r),
    ...e
}));
wd.displayName = "TableRow";
const no = w.forwardRef( ({className: r, ...e}, s) => v.jsx("th", {
    ref: s,
    className: He("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", r),
    ...e
}));
no.displayName = "TableHead";
const so = w.forwardRef( ({className: r, ...e}, s) => v.jsx("td", {
    ref: s,
    className: He("p-4 align-middle [&:has([role=checkbox])]:pr-0", r),
    ...e
}));
so.displayName = "TableCell";
const uP = w.forwardRef( ({className: r, ...e}, s) => v.jsx("caption", {
    ref: s,
    className: He("mt-4 text-sm text-muted-foreground", r),
    ...e
}));
uP.displayName = "TableCaption";
const Ol = w.forwardRef( ({className: r, ...e}, s) => v.jsx("div", {
    ref: s,
    className: He("shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm", r),
    ...e
}));
Ol.displayName = "Card";
const cP = w.forwardRef( ({className: r, ...e}, s) => v.jsx("div", {
    ref: s,
    className: He("flex flex-col space-y-1.5 p-6", r),
    ...e
}));
cP.displayName = "CardHeader";
const dP = w.forwardRef( ({className: r, ...e}, s) => v.jsx("div", {
    ref: s,
    className: He("text-2xl font-semibold leading-none tracking-tight", r),
    ...e
}));
dP.displayName = "CardTitle";
const fP = w.forwardRef( ({className: r, ...e}, s) => v.jsx("div", {
    ref: s,
    className: He("text-sm text-muted-foreground", r),
    ...e
}));
fP.displayName = "CardDescription";
const Jv = w.forwardRef( ({className: r, ...e}, s) => v.jsx("div", {
    ref: s,
    className: He("p-6 pt-0", r),
    ...e
}));
Jv.displayName = "CardContent";
const pP = w.forwardRef( ({className: r, ...e}, s) => v.jsx("div", {
    ref: s,
    className: He("flex items-center p-6 pt-0", r),
    ...e
}));
pP.displayName = "CardFooter";
const hP = {
    validation: at.object({
        message: at.string(),
        field: at.string().optional()
    }),
    notFound: at.object({
        message: at.string()
    })
}
  , jn = {
    inspections: {
        list: {
            path: "/api/inspections",
            responses: {
                200: at.array(at.custom())
            }
        },
        create: {
            method: "POST",
            path: "/api/inspections",
            responses: {
                201: at.custom(),
                400: hP.validation
            }
        },
        get: {
            responses: {
                200: at.custom()
            }
        }
    }
};
function mP() {
    return nb({
        queryKey: [jn.inspections.list.path],
        queryFn: async () => {
            const r = await fetch(jn.inspections.list.path);
            if (!r.ok)
                throw new Error("Failed to fetch inspections");
            return jn.inspections.list.responses[200].parse(await r.json())
        }
    })
}
function gP() {
    const r = Pd()
      , {toast: e} = vg();
    return sb({
        mutationFn: async s => {
            const i = await fetch(jn.inspections.create.path, {
                method: jn.inspections.create.method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(s)
            });
            if (!i.ok) {
                if (i.status === 400) {
                    const a = jn.inspections.create.responses[400].parse(await i.json());
                    throw new Error(a.message)
                }
                throw new Error("Failed to create inspection")
            }
            return jn.inspections.create.responses[201].parse(await i.json())
        }
        ,
        onSuccess: () => {
            r.invalidateQueries({
                queryKey: [jn.inspections.list.path]
            }),
            e({
                title: "Sucesso",
                description: "Ficha de inspeção salva com sucesso.",
                variant: "default"
            })
        }
        ,
        onError: s => {
            e({
                title: "Erro",
                description: s.message,
                variant: "destructive"
            })
        }
    })
}
const yP = {
    items: [{
        description: "",
        quantity: 0,
        batch: ""
    }],
    checkQuantity: !1,
    checkDeadline: !1,
    checkQuality: !1,
    checkPrice: !1,
    checkTax: !1,
    checkVisual: !1,
    checkDimensional: !1,
    checkValidity: !1,
    ratingQuality: "",
    ratingDelivery: "",
    ratingQuantity: "",
    ratingDocs: ""
};
function vP() {
    const r = gP()
      , e = H1({
        resolver: K1(OT),
        defaultValues: yP
    })
      , {fields: s, append: i, remove: a} = Q1({
        control: e.control,
        name: "items"
    })
      , u = f => {
        r.mutate(f)
    }
      , d = () => {
        window.print()
    }
    ;
    return v.jsxs("div", {
        className: "max-w-5xl mx-auto pb-12 print:p-0 print:max-w-none",
        children: [v.jsxs("div", {
            className: "flex justify-between items-center mb-8 no-print",
            children: [v.jsxs("div", {
                children: [v.jsx("h1", {
                    className: "text-3xl font-bold text-foreground",
                    children: "Nova Inspeção"
                }), v.jsx("p", {
                    className: "text-muted-foreground mt-1",
                    children: "Preencha o formulário de recebimento de materiais."
                })]
            }), v.jsxs("div", {
                className: "flex gap-3",
                children: [v.jsxs(Dn, {
                    variant: "outline",
                    onClick: d,
                    className: "gap-2",
                    children: [v.jsx(u_, {
                        className: "h-4 w-4"
                    }), "Imprimir"]
                }), v.jsx(Dn, {
                    onClick: e.handleSubmit(u),
                    disabled: r.isPending,
                    className: "gap-2 bg-primary hover:bg-primary/90",
                    children: r.isPending ? "Salvando..." : v.jsxs(v.Fragment, {
                        children: [v.jsx(c_, {
                            className: "h-4 w-4"
                        }), "Salvar Ficha"]
                    })
                })]
            })]
        }), v.jsx("div", {
            className: "bg-white paper-shadow rounded-sm p-8 md:p-12 print:shadow-none print:p-0 min-h-[29.7cm]",
            children: v.jsx(DT, {
                ...e,
                children: v.jsxs("form", {
                    className: "space-y-8",
                    children: [v.jsx("div", {
                        className: "border-b-2 border-black pb-4 mb-8 text-center",
                        children: v.jsx("h2", {
                            className: "text-2xl font-bold uppercase tracking-wider font-display border-2 border-black p-4 inline-block bg-muted/20",
                            children: "RQ-501-01 Ficha de Inspeção de Recebimento"
                        })
                    }), v.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border p-4 bg-muted/5 print:bg-transparent print:border-black",
                        children: [v.jsx(Vr, {
                            control: e.control,
                            name: "supplier",
                            render: ({field: f}) => v.jsxs(xr, {
                                className: "col-span-1 md:col-span-2",
                                children: [v.jsx(wr, {
                                    className: "uppercase text-xs font-bold text-muted-foreground print:text-black",
                                    children: "Fornecedor"
                                }), v.jsx(br, {
                                    children: v.jsx(_r, {
                                        ...f,
                                        className: "font-mono bg-white print:border-none print:border-b print:border-black print:rounded-none"
                                    })
                                }), v.jsx(Ws, {})]
                            })
                        }), v.jsx(Vr, {
                            control: e.control,
                            name: "invoiceNumber",
                            render: ({field: f}) => v.jsxs(xr, {
                                children: [v.jsx(wr, {
                                    className: "uppercase text-xs font-bold text-muted-foreground print:text-black",
                                    children: "Nº Nota Fiscal"
                                }), v.jsx(br, {
                                    children: v.jsx(_r, {
                                        ...f,
                                        className: "font-mono bg-white print:border-none print:border-b print:border-black print:rounded-none"
                                    })
                                }), v.jsx(Ws, {})]
                            })
                        }), v.jsx(Vr, {
                            control: e.control,
                            name: "invoiceDate",
                            render: ({field: f}) => v.jsxs(xr, {
                                children: [v.jsx(wr, {
                                    className: "uppercase text-xs font-bold text-muted-foreground print:text-black",
                                    children: "Data Emissão"
                                }), v.jsx(br, {
                                    children: v.jsx(_r, {
                                        ...f,
                                        type: "date",
                                        className: "font-mono bg-white print:border-none print:border-b print:border-black print:rounded-none"
                                    })
                                }), v.jsx(Ws, {})]
                            })
                        }), v.jsx(Vr, {
                            control: e.control,
                            name: "orderNumber",
                            render: ({field: f}) => v.jsxs(xr, {
                                children: [v.jsx(wr, {
                                    className: "uppercase text-xs font-bold text-muted-foreground print:text-black",
                                    children: "Nº Pedido OC"
                                }), v.jsx(br, {
                                    children: v.jsx(_r, {
                                        ...f,
                                        className: "font-mono bg-white print:border-none print:border-b print:border-black print:rounded-none"
                                    })
                                }), v.jsx(Ws, {})]
                            })
                        }), v.jsx(Vr, {
                            control: e.control,
                            name: "deliveryDate",
                            render: ({field: f}) => v.jsxs(xr, {
                                children: [v.jsx(wr, {
                                    className: "uppercase text-xs font-bold text-muted-foreground print:text-black",
                                    children: "Data Entrega"
                                }), v.jsx(br, {
                                    children: v.jsx(_r, {
                                        ...f,
                                        type: "date",
                                        className: "font-mono bg-white print:border-none print:border-b print:border-black print:rounded-none"
                                    })
                                }), v.jsx(Ws, {})]
                            })
                        })]
                    }), v.jsxs("div", {
                        className: "space-y-4",
                        children: [v.jsxs("div", {
                            className: "flex justify-between items-center border-b pb-2",
                            children: [v.jsx("h3", {
                                className: "text-lg font-bold uppercase font-display",
                                children: "Materiais"
                            }), v.jsxs(Dn, {
                                type: "button",
                                variant: "ghost",
                                size: "sm",
                                className: "no-print text-primary hover:text-primary/80",
                                onClick: () => i({
                                    description: "",
                                    quantity: 0,
                                    batch: ""
                                }),
                                children: [v.jsx(l_, {
                                    className: "h-4 w-4 mr-1"
                                }), " Adicionar Item"]
                            })]
                        }), v.jsxs(Gv, {
                            className: "border print:border-black",
                            children: [v.jsx(Xv, {
                                className: "bg-muted print:bg-gray-200",
                                children: v.jsxs(wd, {
                                    children: [v.jsx(no, {
                                        className: "w-[50%] font-bold text-black border-r print:border-black",
                                        children: "MATERIAL"
                                    }), v.jsx(no, {
                                        className: "w-[20%] font-bold text-black border-r print:border-black text-center",
                                        children: "QUANTIDADE"
                                    }), v.jsx(no, {
                                        className: "w-[25%] font-bold text-black border-r print:border-black text-center",
                                        children: "LOTE"
                                    }), v.jsx(no, {
                                        className: "w-[5%] no-print"
                                    })]
                                })
                            }), v.jsx(Yv, {
                                children: s.map( (f, h) => v.jsxs(wd, {
                                    className: "print:border-black",
                                    children: [v.jsx(so, {
                                        className: "border-r print:border-black p-2",
                                        children: v.jsx(_r, {
                                            ...e.register(`items.${h}.description`),
                                            placeholder: "Descrição do material",
                                            className: "border-0 focus-visible:ring-0 px-2 h-8 font-mono"
                                        })
                                    }), v.jsx(so, {
                                        className: "border-r print:border-black p-2",
                                        children: v.jsx(_r, {
                                            type: "number",
                                            ...e.register(`items.${h}.quantity`, {
                                                valueAsNumber: !0
                                            }),
                                            className: "border-0 focus-visible:ring-0 px-2 h-8 text-center font-mono"
                                        })
                                    }), v.jsx(so, {
                                        className: "border-r print:border-black p-2",
                                        children: v.jsx(_r, {
                                            ...e.register(`items.${h}.batch`),
                                            placeholder: "Lote/Série",
                                            className: "border-0 focus-visible:ring-0 px-2 h-8 text-center font-mono"
                                        })
                                    }), v.jsx(so, {
                                        className: "p-2 no-print text-center",
                                        children: s.length > 1 && v.jsx(Dn, {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon",
                                            className: "h-8 w-8 text-destructive hover:text-destructive/80",
                                            onClick: () => a(h),
                                            children: v.jsx(d_, {
                                                className: "h-4 w-4"
                                            })
                                        })
                                    })]
                                }, f.id))
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "space-y-4 mt-8",
                        children: [v.jsx("h3", {
                            className: "text-lg font-bold uppercase font-display border-b pb-2",
                            children: "Checklist de Recebimento"
                        }), v.jsxs("div", {
                            className: "border border-black rounded-sm overflow-hidden",
                            children: [v.jsxs("div", {
                                className: "grid grid-cols-12 bg-muted border-b border-black font-bold text-sm p-2 print:bg-gray-200",
                                children: [v.jsx("div", {
                                    className: "col-span-8 md:col-span-10",
                                    children: "CRITÉRIO DE AVALIAÇÃO"
                                }), v.jsx("div", {
                                    className: "col-span-4 md:col-span-2 text-center",
                                    children: "CONFORME?"
                                })]
                            }), [{
                                label: "A Quantidade está conforme o pedido?",
                                name: "checkQuantity"
                            }, {
                                label: "O Prazo de entrega está conforme o combinado?",
                                name: "checkDeadline"
                            }, {
                                label: "A Qualidade dos produtos está conforme?",
                                name: "checkQuality"
                            }, {
                                label: "Os preços estão conforme o Pedido de Compra?",
                                name: "checkPrice"
                            }, {
                                label: "As informações da NF estão conforme?",
                                name: "checkTax"
                            }, {
                                label: "Inspeção Visual do material, está ok?",
                                name: "checkVisual"
                            }, {
                                label: "Inspeção Dimensional do material, está ok?",
                                name: "checkDimensional"
                            }, {
                                label: "Prazo de Validade, está ok?",
                                name: "checkValidity"
                            }].map( (f, h) => v.jsxs("div", {
                                className: `grid grid-cols-12 p-2 items-center ${h !== 7 ? "border-b border-gray-200 print:border-black" : ""}`,
                                children: [v.jsx("div", {
                                    className: "col-span-8 md:col-span-10 text-sm font-medium",
                                    children: f.label
                                }), v.jsx("div", {
                                    className: "col-span-4 md:col-span-2 flex justify-center",
                                    children: v.jsx(Vr, {
                                        control: e.control,
                                        name: f.name,
                                        render: ({field: m}) => v.jsxs("div", {
                                            className: "flex gap-4",
                                            children: [v.jsxs("label", {
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [v.jsx("input", {
                                                    type: "radio",
                                                    checked: m.value === !0,
                                                    onChange: () => m.onChange(!0),
                                                    className: "accent-black h-4 w-4"
                                                }), v.jsx("span", {
                                                    className: "text-xs font-bold",
                                                    children: "SIM"
                                                })]
                                            }), v.jsxs("label", {
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [v.jsx("input", {
                                                    type: "radio",
                                                    checked: m.value === !1,
                                                    onChange: () => m.onChange(!1),
                                                    className: "accent-black h-4 w-4"
                                                }), v.jsx("span", {
                                                    className: "text-xs font-bold",
                                                    children: "NÃO"
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            }, f.name))]
                        })]
                    }), v.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8",
                        children: [v.jsxs("div", {
                            className: "space-y-4",
                            children: [v.jsx("h3", {
                                className: "text-lg font-bold uppercase font-display border-b pb-2",
                                children: "Resultado Final"
                            }), v.jsx(Ol, {
                                className: "p-6 border-black bg-muted/10 print:bg-transparent print:border-black",
                                children: v.jsx(Vr, {
                                    control: e.control,
                                    name: "finalResult",
                                    render: ({field: f}) => v.jsxs(Kv, {
                                        onValueChange: f.onChange,
                                        defaultValue: f.value,
                                        className: "flex flex-col space-y-3",
                                        children: [v.jsxs(xr, {
                                            className: "flex items-center space-x-3 space-y-0",
                                            children: [v.jsx(br, {
                                                children: v.jsx(Za, {
                                                    value: "approved",
                                                    className: "border-black text-black"
                                                })
                                            }), v.jsx(wr, {
                                                className: "font-bold cursor-pointer",
                                                children: "APROVADO"
                                            })]
                                        }), v.jsxs(xr, {
                                            className: "flex items-center space-x-3 space-y-0",
                                            children: [v.jsx(br, {
                                                children: v.jsx(Za, {
                                                    value: "concession",
                                                    className: "border-black text-black"
                                                })
                                            }), v.jsx(wr, {
                                                className: "font-bold cursor-pointer",
                                                children: "APROVADO COM CONCESSÃO"
                                            })]
                                        }), v.jsxs(xr, {
                                            className: "flex items-center space-x-3 space-y-0",
                                            children: [v.jsx(br, {
                                                children: v.jsx(Za, {
                                                    value: "rejected",
                                                    className: "border-black text-black"
                                                })
                                            }), v.jsx(wr, {
                                                className: "font-bold cursor-pointer text-destructive",
                                                children: "REPROVADO"
                                            })]
                                        })]
                                    })
                                })
                            })]
                        }), v.jsxs("div", {
                            className: "space-y-4",
                            children: [v.jsx("h3", {
                                className: "text-lg font-bold uppercase font-display border-b pb-2",
                                children: "Avaliação do Fornecedor"
                            }), v.jsxs("div", {
                                className: "border border-black rounded-sm overflow-hidden text-sm",
                                children: [v.jsxs("div", {
                                    className: "grid grid-cols-3 bg-muted border-b border-black font-bold p-2 print:bg-gray-200",
                                    children: [v.jsx("div", {
                                        children: "CRITÉRIO"
                                    }), v.jsx("div", {
                                        className: "col-span-2 text-center text-xs",
                                        children: "A (Bom) | B (Regular) | C (Ruim)"
                                    })]
                                }), [{
                                    label: "Qualidade",
                                    name: "ratingQuality"
                                }, {
                                    label: "Prazo Entrega",
                                    name: "ratingDelivery"
                                }, {
                                    label: "Quant./Transp.",
                                    name: "ratingQuantity"
                                }, {
                                    label: "Docs/Atend.",
                                    name: "ratingDocs"
                                }].map( (f, h) => v.jsxs("div", {
                                    className: `grid grid-cols-3 p-2 items-center ${h !== 3 ? "border-b border-gray-200 print:border-black" : ""}`,
                                    children: [v.jsx("div", {
                                        className: "font-medium",
                                        children: f.label
                                    }), v.jsx("div", {
                                        className: "col-span-2 flex justify-center",
                                        children: v.jsx(Vr, {
                                            control: e.control,
                                            name: f.name,
                                            render: ({field: m}) => v.jsx("div", {
                                                className: "flex gap-4",
                                                children: ["A", "B", "C"].map(g => v.jsxs("label", {
                                                    className: "flex items-center gap-1 cursor-pointer",
                                                    children: [v.jsx("input", {
                                                        type: "radio",
                                                        name: f.name,
                                                        value: g,
                                                        checked: m.value === g,
                                                        onChange: m.onChange,
                                                        className: "accent-black h-3 w-3"
                                                    }), v.jsx("span", {
                                                        className: "text-xs font-bold",
                                                        children: g
                                                    })]
                                                }, g))
                                            })
                                        })
                                    })]
                                }, f.name))]
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t-2 border-dashed border-gray-300 print:border-black",
                        children: [v.jsx(Vr, {
                            control: e.control,
                            name: "receiverName",
                            render: ({field: f}) => v.jsx(xr, {
                                children: v.jsx(br, {
                                    children: v.jsxs("div", {
                                        className: "text-center",
                                        children: [v.jsx(_r, {
                                            ...f,
                                            className: "border-0 border-b border-black rounded-none text-center font-script text-lg h-10 px-0 focus-visible:ring-0 bg-transparent",
                                            placeholder: "Assinatura Digital / Nome"
                                        }), v.jsx(wr, {
                                            className: "text-xs uppercase text-muted-foreground mt-2 block print:text-black",
                                            children: "Responsável pelo Recebimento"
                                        })]
                                    })
                                })
                            })
                        }), v.jsx(Vr, {
                            control: e.control,
                            name: "qualityInspectorName",
                            render: ({field: f}) => v.jsx(xr, {
                                children: v.jsx(br, {
                                    children: v.jsxs("div", {
                                        className: "text-center",
                                        children: [v.jsx(_r, {
                                            ...f,
                                            className: "border-0 border-b border-black rounded-none text-center font-script text-lg h-10 px-0 focus-visible:ring-0 bg-transparent",
                                            placeholder: "Assinatura Digital / Nome"
                                        }), v.jsx(wr, {
                                            className: "text-xs uppercase text-muted-foreground mt-2 block print:text-black",
                                            children: "Responsável Controle de Qualidade"
                                        })]
                                    })
                                })
                            })
                        })]
                    }), v.jsx("div", {
                        className: "text-[10px] text-muted-foreground text-center mt-8 pt-4 border-t border-gray-100 italic print:text-black print:border-black",
                        children: "* Em caso de dúvida com relação ao material consultar o PMC-vv-501 – Procedimento de Materiais Controlados"
                    })]
                })
            })
        })]
    })
}
const xP = _l("whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow-xs",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow-xs",
            outline: " border [border-color:var(--badge-outline)] shadow-xs"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function wP({className: r, variant: e, ...s}) {
    return v.jsx("div", {
        className: He(xP({
            variant: e
        }), r),
        ...s
    })
}
function bP() {
    const [r,e] = w.useState("form")
      , {data: s, isLoading: i} = mP()
      , a = f => {
        switch (f) {
        case "approved":
            return v.jsx(s_, {
                className: "h-4 w-4 text-green-500"
            });
        case "concession":
            return v.jsx(Gg, {
                className: "h-4 w-4 text-amber-500"
            });
        case "rejected":
            return v.jsx(i_, {
                className: "h-4 w-4 text-red-500"
            });
        default:
            return v.jsx(mm, {
                className: "h-4 w-4 text-gray-500"
            })
        }
    }
      , u = f => {
        switch (f) {
        case "approved":
            return "Aprovado";
        case "concession":
            return "Concessão";
        case "rejected":
            return "Reprovado";
        default:
            return f
        }
    }
      , d = f => {
        switch (f) {
        case "approved":
            return "default";
        case "concession":
            return "secondary";
        case "rejected":
            return "destructive";
        default:
            return "outline"
        }
    }
    ;
    return v.jsxs("div", {
        className: "min-h-screen bg-gray-50/50",
        children: [v.jsx("header", {
            className: "bg-white border-b sticky top-0 z-10 no-print",
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                children: [v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [v.jsx("div", {
                        className: "h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold font-display",
                        children: "RQ"
                    }), v.jsxs("span", {
                        className: "font-bold text-lg tracking-tight",
                        children: ["Qualidade", v.jsx("span", {
                            className: "text-primary",
                            children: "Sys"
                        })]
                    })]
                }), v.jsxs("nav", {
                    className: "flex gap-4",
                    children: [v.jsx(Dn, {
                        variant: r === "form" ? "default" : "ghost",
                        onClick: () => e("form"),
                        size: "sm",
                        children: "Nova Inspeção"
                    }), v.jsx(Dn, {
                        variant: r === "list" ? "default" : "ghost",
                        onClick: () => e("list"),
                        size: "sm",
                        children: "Histórico"
                    })]
                })]
            })
        }), v.jsx("main", {
            className: "py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
            children: r === "form" ? v.jsx(vP, {}) : v.jsxs("div", {
                className: "space-y-6 animate-in fade-in duration-500",
                children: [v.jsx("div", {
                    className: "flex justify-between items-end",
                    children: v.jsxs("div", {
                        children: [v.jsx("h1", {
                            className: "text-2xl font-bold tracking-tight",
                            children: "Histórico de Inspeções"
                        }), v.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Registro de todas as inspeções realizadas."
                        })]
                    })
                }), i ? v.jsx("div", {
                    className: "flex justify-center py-20",
                    children: v.jsx(a_, {
                        className: "h-10 w-10 animate-spin text-primary"
                    })
                }) : s?.length === 0 ? v.jsxs("div", {
                    className: "text-center py-20 bg-white rounded-xl border border-dashed",
                    children: [v.jsx(mm, {
                        className: "h-12 w-12 text-muted-foreground mx-auto mb-4"
                    }), v.jsx("h3", {
                        className: "text-lg font-medium",
                        children: "Nenhuma inspeção encontrada"
                    }), v.jsx("p", {
                        className: "text-muted-foreground mb-6",
                        children: "Comece criando sua primeira ficha de inspeção."
                    }), v.jsx(Dn, {
                        onClick: () => e("form"),
                        children: "Criar Nova Inspeção"
                    })]
                }) : v.jsx("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: s?.map(f => v.jsxs(Ol, {
                        className: "p-4 hover:shadow-md transition-shadow border-l-4 border-l-primary flex flex-col md:flex-row gap-4 justify-between items-start md:items-center",
                        children: [v.jsxs("div", {
                            className: "space-y-1",
                            children: [v.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [v.jsxs("span", {
                                    className: "font-mono text-xs text-muted-foreground",
                                    children: ["#", f.id.toString().padStart(4, "0")]
                                }), v.jsx("h3", {
                                    className: "font-bold",
                                    children: f.supplier
                                })]
                            }), v.jsxs("div", {
                                className: "text-sm text-muted-foreground flex items-center gap-4",
                                children: [v.jsxs("span", {
                                    children: ["NF: ", f.invoiceNumber]
                                }), v.jsx("span", {
                                    children: "•"
                                }), v.jsx("span", {
                                    children: f.deliveryDate
                                })]
                            })]
                        }), v.jsxs("div", {
                            className: "flex items-center gap-6 w-full md:w-auto justify-between md:justify-end",
                            children: [v.jsxs("div", {
                                className: "text-right",
                                children: [v.jsx("p", {
                                    className: "text-xs text-muted-foreground font-medium uppercase tracking-wider",
                                    children: "Qualidade"
                                }), v.jsx("p", {
                                    className: "font-bold text-lg",
                                    children: f.ratingQuality || "-"
                                })]
                            }), v.jsx("div", {
                                className: "flex items-center gap-2",
                                children: v.jsxs(wP, {
                                    variant: d(f.finalResult),
                                    className: "gap-1 pl-1 pr-3 py-1",
                                    children: [a(f.finalResult), u(f.finalResult)]
                                })
                            })]
                        })]
                    }, f.id))
                })]
            })
        })]
    })
}
function _P() {
    return v.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: v.jsx(Ol, {
            className: "w-full max-w-md mx-4",
            children: v.jsxs(Jv, {
                className: "pt-6",
                children: [v.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [v.jsx(Gg, {
                        className: "h-8 w-8 text-red-500"
                    }), v.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), v.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
function SP() {
    return v.jsxs(k0, {
        children: [v.jsx(Yh, {
            path: "/",
            component: bP
        }), v.jsx(Yh, {
            component: _P
        })]
    })
}
function CP() {
    return v.jsx(H0, {
        client: ab,
        children: v.jsxs(_1, {
            children: [v.jsx(Z_, {}), v.jsx(SP, {})]
        })
    })
}
r0.createRoot(document.getElementById("root")).render(v.jsx(CP, {}));
