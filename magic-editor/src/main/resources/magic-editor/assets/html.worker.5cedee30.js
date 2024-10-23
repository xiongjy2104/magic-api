(function() {
    "use strict";
    class Sr {
        constructor() {
            this.listeners = [],
            this.unexpectedErrorHandler = function(t) {
                setTimeout( () => {
                    throw t.stack ? new Error(t.message + `

` + t.stack) : t
                }
                , 0)
            }
        }
        emit(t) {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        onUnexpectedError(t) {
            this.unexpectedErrorHandler(t),
            this.emit(t)
        }
        onUnexpectedExternalError(t) {
            this.unexpectedErrorHandler(t)
        }
    }
    const Ar = new Sr;
    function Lr(e) {
        Cr(e) || Ar.onUnexpectedError(e)
    }
    function gn(e) {
        if (e instanceof Error) {
            let {name: t, message: n} = e;
            const r = e.stacktrace || e.stack;
            return {
                $isError: !0,
                name: t,
                message: n,
                stack: r
            }
        }
        return e
    }
    const bn = "Canceled";
    function Cr(e) {
        return e instanceof Error && e.name === bn && e.message === bn
    }
    function xr(e) {
        const t = this;
        let n = !1, r;
        return function() {
            return n || (n = !0,
            r = e.apply(t, arguments)),
            r
        }
    }
    var Et;
    (function(e) {
        function t(f) {
            return f && typeof f == "object" && typeof f[Symbol.iterator] == "function"
        }
        e.is = t;
        const n = Object.freeze([]);
        function r() {
            return n
        }
        e.empty = r;
        function *i(f) {
            yield f
        }
        e.single = i;
        function a(f) {
            return f || n
        }
        e.from = a;
        function o(f) {
            return !f || f[Symbol.iterator]().next().done === !0
        }
        e.isEmpty = o;
        function u(f) {
            return f[Symbol.iterator]().next().value
        }
        e.first = u;
        function s(f, v) {
            for (const A of f)
                if (v(A))
                    return !0;
            return !1
        }
        e.some = s;
        function l(f, v) {
            for (const A of f)
                if (v(A))
                    return A
        }
        e.find = l;
        function *h(f, v) {
            for (const A of f)
                v(A) && (yield A)
        }
        e.filter = h;
        function *c(f, v) {
            let A = 0;
            for (const D of f)
                yield v(D, A++)
        }
        e.map = c;
        function *d(...f) {
            for (const v of f)
                for (const A of v)
                    yield A
        }
        e.concat = d;
        function *p(f) {
            for (const v of f)
                for (const A of v)
                    yield A
        }
        e.concatNested = p;
        function _(f, v, A) {
            let D = A;
            for (const H of f)
                D = v(D, H);
            return D
        }
        e.reduce = _;
        function *b(f, v, A=f.length) {
            for (v < 0 && (v += f.length),
            A < 0 ? A += f.length : A > f.length && (A = f.length); v < A; v++)
                yield f[v]
        }
        e.slice = b;
        function T(f, v=Number.POSITIVE_INFINITY) {
            const A = [];
            if (v === 0)
                return [A, f];
            const D = f[Symbol.iterator]();
            for (let H = 0; H < v; H++) {
                const g = D.next();
                if (g.done)
                    return [A, e.empty()];
                A.push(g.value)
            }
            return [A, {
                [Symbol.iterator]() {
                    return D
                }
            }]
        }
        e.consume = T;
        function k(f, v, A= (D, H) => D === H) {
            const D = f[Symbol.iterator]()
              , H = v[Symbol.iterator]();
            for (; ; ) {
                const g = D.next()
                  , m = H.next();
                if (g.done !== m.done)
                    return !1;
                if (g.done)
                    return !0;
                if (!A(g.value, m.value))
                    return !1
            }
        }
        e.equals = k
    }
    )(Et || (Et = {}));
    function Vs(e) {
        return e
    }
    function Ys(e, t) {}
    class Dr extends Error {
        constructor(t) {
            super(`Encountered errors while disposing of store. Errors: [${t.join(", ")}]`),
            this.errors = t
        }
    }
    function _n(e) {
        if (Et.is(e)) {
            let t = [];
            for (const n of e)
                if (n)
                    try {
                        n.dispose()
                    } catch (r) {
                        t.push(r)
                    }
            if (t.length === 1)
                throw t[0];
            if (t.length > 1)
                throw new Dr(t);
            return Array.isArray(e) ? [] : e
        } else if (e)
            return e.dispose(),
            e
    }
    function Er(...e) {
        return vn( () => _n(e))
    }
    function vn(e) {
        return {
            dispose: xr( () => {
                e()
            }
            )
        }
    }
    class Ve {
        constructor() {
            this._toDispose = new Set,
            this._isDisposed = !1
        }
        dispose() {
            this._isDisposed || (this._isDisposed = !0,
            this.clear())
        }
        clear() {
            try {
                _n(this._toDispose.values())
            } finally {
                this._toDispose.clear()
            }
        }
        add(t) {
            if (!t)
                return t;
            if (t === this)
                throw new Error("Cannot register a disposable on itself!");
            return this._isDisposed ? Ve.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t),
            t
        }
    }
    Ve.DISABLE_DISPOSED_WARNING = !1;
    class wn {
        constructor() {
            this._store = new Ve,
            this._store
        }
        dispose() {
            this._store.dispose()
        }
        _register(t) {
            if (t === this)
                throw new Error("Cannot register a disposable on itself!");
            return this._store.add(t)
        }
    }
    wn.None = Object.freeze({
        dispose() {}
    });
    var Mt;
    const at = "en";
    let Rt = !1, Nt = !1, Ut = !1, st, Ht = at, Mr, Ee;
    const ie = typeof self == "object" ? self : typeof global == "object" ? global : {};
    let ee;
    typeof ie.vscode != "undefined" && typeof ie.vscode.process != "undefined" ? ee = ie.vscode.process : typeof process != "undefined" && (ee = process);
    const Rr = typeof ((Mt = ee == null ? void 0 : ee.versions) === null || Mt === void 0 ? void 0 : Mt.electron) == "string" && ee.type === "renderer";
    if (typeof navigator == "object" && !Rr)
        Ee = navigator.userAgent,
        Rt = Ee.indexOf("Windows") >= 0,
        Nt = Ee.indexOf("Macintosh") >= 0,
        (Ee.indexOf("Macintosh") >= 0 || Ee.indexOf("iPad") >= 0 || Ee.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0,
        Ut = Ee.indexOf("Linux") >= 0,
        st = navigator.language,
        Ht = st;
    else if (typeof ee == "object") {
        Rt = ee.platform === "win32",
        Nt = ee.platform === "darwin",
        Ut = ee.platform === "linux",
        Ut && !!ee.env.SNAP && ee.env.SNAP_REVISION,
        st = at,
        Ht = at;
        const e = ee.env.VSCODE_NLS_CONFIG;
        if (e)
            try {
                const t = JSON.parse(e)
                  , n = t.availableLanguages["*"];
                st = t.locale,
                Ht = n || at,
                Mr = t._translationsConfigFile
            } catch {}
    } else
        console.error("Unable to resolve platform.");
    const Ye = Rt
      , Nr = Nt
      , yn = function() {
        if (ie.setImmediate)
            return ie.setImmediate.bind(ie);
        if (typeof ie.postMessage == "function" && !ie.importScripts) {
            let n = [];
            ie.addEventListener("message", i => {
                if (i.data && i.data.vscodeSetImmediateId)
                    for (let a = 0, o = n.length; a < o; a++) {
                        const u = n[a];
                        if (u.id === i.data.vscodeSetImmediateId) {
                            n.splice(a, 1),
                            u.callback();
                            return
                        }
                    }
            }
            );
            let r = 0;
            return i => {
                const a = ++r;
                n.push({
                    id: a,
                    callback: i
                }),
                ie.postMessage({
                    vscodeSetImmediateId: a
                }, "*")
            }
        }
        if (typeof (ee == null ? void 0 : ee.nextTick) == "function")
            return ee.nextTick.bind(ee);
        const t = Promise.resolve();
        return n => t.then(n)
    }();
    function Ur(e) {
        let t = []
          , n = Object.getPrototypeOf(e);
        for (; Object.prototype !== n; )
            t = t.concat(Object.getOwnPropertyNames(n)),
            n = Object.getPrototypeOf(n);
        return t
    }
    function zt(e) {
        const t = [];
        for (const n of Ur(e))
            typeof e[n] == "function" && t.push(n);
        return t
    }
    function Tn(e, t) {
        const n = i => function() {
            const a = Array.prototype.slice.call(arguments, 0);
            return t(i, a)
        }
        ;
        let r = {};
        for (const i of e)
            r[i] = n(i);
        return r
    }
    const Hr = "$initialize";
    class zr {
        constructor(t) {
            this._workerId = -1,
            this._handler = t,
            this._lastSentReq = 0,
            this._pendingReplies = Object.create(null)
        }
        setWorkerId(t) {
            this._workerId = t
        }
        sendMessage(t, n) {
            let r = String(++this._lastSentReq);
            return new Promise( (i, a) => {
                this._pendingReplies[r] = {
                    resolve: i,
                    reject: a
                },
                this._send({
                    vsWorker: this._workerId,
                    req: r,
                    method: t,
                    args: n
                })
            }
            )
        }
        handleMessage(t) {
            !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t)
        }
        _handleMessage(t) {
            if (t.seq) {
                let a = t;
                if (!this._pendingReplies[a.seq]) {
                    console.warn("Got reply to unknown seq");
                    return
                }
                let o = this._pendingReplies[a.seq];
                if (delete this._pendingReplies[a.seq],
                a.err) {
                    let u = a.err;
                    a.err.$isError && (u = new Error,
                    u.name = a.err.name,
                    u.message = a.err.message,
                    u.stack = a.err.stack),
                    o.reject(u);
                    return
                }
                o.resolve(a.res);
                return
            }
            let n = t
              , r = n.req;
            this._handler.handleMessage(n.method, n.args).then(a => {
                this._send({
                    vsWorker: this._workerId,
                    seq: r,
                    res: a,
                    err: void 0
                })
            }
            , a => {
                a.detail instanceof Error && (a.detail = gn(a.detail)),
                this._send({
                    vsWorker: this._workerId,
                    seq: r,
                    res: void 0,
                    err: gn(a)
                })
            }
            )
        }
        _send(t) {
            let n = [];
            if (t.req) {
                const r = t;
                for (let i = 0; i < r.args.length; i++)
                    r.args[i]instanceof ArrayBuffer && n.push(r.args[i])
            } else {
                const r = t;
                r.res instanceof ArrayBuffer && n.push(r.res)
            }
            this._handler.sendMessage(t, n)
        }
    }
    class Ir {
        constructor(t, n) {
            this._requestHandlerFactory = n,
            this._requestHandler = null,
            this._protocol = new zr({
                sendMessage: (r, i) => {
                    t(r, i)
                }
                ,
                handleMessage: (r, i) => this._handleMessage(r, i)
            })
        }
        onmessage(t) {
            this._protocol.handleMessage(t)
        }
        _handleMessage(t, n) {
            if (t === Hr)
                return this.initialize(n[0], n[1], n[2], n[3]);
            if (!this._requestHandler || typeof this._requestHandler[t] != "function")
                return Promise.reject(new Error("Missing requestHandler or method: " + t));
            try {
                return Promise.resolve(this._requestHandler[t].apply(this._requestHandler, n))
            } catch (r) {
                return Promise.reject(r)
            }
        }
        initialize(t, n, r, i) {
            this._protocol.setWorkerId(t);
            const o = Tn(i, (u, s) => this._protocol.sendMessage(u, s));
            return this._requestHandlerFactory ? (this._requestHandler = this._requestHandlerFactory(o),
            Promise.resolve(zt(this._requestHandler))) : (n && (typeof n.baseUrl != "undefined" && delete n.baseUrl,
            typeof n.paths != "undefined" && typeof n.paths.vs != "undefined" && delete n.paths.vs,
            typeof n.trustedTypesPolicy !== void 0 && delete n.trustedTypesPolicy,
            n.catchError = !0,
            self.require.config(n)),
            new Promise( (u, s) => {
                self.require([r], l => {
                    if (this._requestHandler = l.create(o),
                    !this._requestHandler) {
                        s(new Error("No RequestHandler!"));
                        return
                    }
                    u(zt(this._requestHandler))
                }
                , s)
            }
            ))
        }
    }
    class ye {
        constructor(t, n, r, i) {
            this.originalStart = t,
            this.originalLength = n,
            this.modifiedStart = r,
            this.modifiedLength = i
        }
        getOriginalEnd() {
            return this.originalStart + this.originalLength
        }
        getModifiedEnd() {
            return this.modifiedStart + this.modifiedLength
        }
    }
    function Wr(e) {
        return e.split(/\r\n|\r|\n/)
    }
    function Pr(e) {
        for (let t = 0, n = e.length; t < n; t++) {
            const r = e.charCodeAt(t);
            if (r !== 32 && r !== 9)
                return t
        }
        return -1
    }
    function Br(e, t=e.length - 1) {
        for (let n = t; n >= 0; n--) {
            const r = e.charCodeAt(n);
            if (r !== 32 && r !== 9)
                return n
        }
        return -1
    }
    function kn(e, t) {
        return (t << 5) - t + e | 0
    }
    function Fr(e, t) {
        t = kn(149417, t);
        for (let n = 0, r = e.length; n < r; n++)
            t = kn(e.charCodeAt(n), t);
        return t
    }
    class Sn {
        constructor(t) {
            this.source = t
        }
        getElements() {
            const t = this.source
              , n = new Int32Array(t.length);
            for (let r = 0, i = t.length; r < i; r++)
                n[r] = t.charCodeAt(r);
            return n
        }
    }
    function qr(e, t, n) {
        return new Te(new Sn(e),new Sn(t)).ComputeDiff(n).changes
    }
    class ze {
        static Assert(t, n) {
            if (!t)
                throw new Error(n)
        }
    }
    class Ie {
        static Copy(t, n, r, i, a) {
            for (let o = 0; o < a; o++)
                r[i + o] = t[n + o]
        }
        static Copy2(t, n, r, i, a) {
            for (let o = 0; o < a; o++)
                r[i + o] = t[n + o]
        }
    }
    class An {
        constructor() {
            this.m_changes = [],
            this.m_originalStart = 1073741824,
            this.m_modifiedStart = 1073741824,
            this.m_originalCount = 0,
            this.m_modifiedCount = 0
        }
        MarkNextChange() {
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new ye(this.m_originalStart,this.m_originalCount,this.m_modifiedStart,this.m_modifiedCount)),
            this.m_originalCount = 0,
            this.m_modifiedCount = 0,
            this.m_originalStart = 1073741824,
            this.m_modifiedStart = 1073741824
        }
        AddOriginalElement(t, n) {
            this.m_originalStart = Math.min(this.m_originalStart, t),
            this.m_modifiedStart = Math.min(this.m_modifiedStart, n),
            this.m_originalCount++
        }
        AddModifiedElement(t, n) {
            this.m_originalStart = Math.min(this.m_originalStart, t),
            this.m_modifiedStart = Math.min(this.m_modifiedStart, n),
            this.m_modifiedCount++
        }
        getChanges() {
            return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(),
            this.m_changes
        }
        getReverseChanges() {
            return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(),
            this.m_changes.reverse(),
            this.m_changes
        }
    }
    class Te {
        constructor(t, n, r=null) {
            this.ContinueProcessingPredicate = r,
            this._originalSequence = t,
            this._modifiedSequence = n;
            const [i,a,o] = Te._getElements(t)
              , [u,s,l] = Te._getElements(n);
            this._hasStrings = o && l,
            this._originalStringElements = i,
            this._originalElementsOrHash = a,
            this._modifiedStringElements = u,
            this._modifiedElementsOrHash = s,
            this.m_forwardHistory = [],
            this.m_reverseHistory = []
        }
        static _isStringArray(t) {
            return t.length > 0 && typeof t[0] == "string"
        }
        static _getElements(t) {
            const n = t.getElements();
            if (Te._isStringArray(n)) {
                const r = new Int32Array(n.length);
                for (let i = 0, a = n.length; i < a; i++)
                    r[i] = Fr(n[i], 0);
                return [n, r, !0]
            }
            return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1]
        }
        ElementsAreEqual(t, n) {
            return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0
        }
        ElementsAreStrictEqual(t, n) {
            if (!this.ElementsAreEqual(t, n))
                return !1;
            const r = Te._getStrictElement(this._originalSequence, t)
              , i = Te._getStrictElement(this._modifiedSequence, n);
            return r === i
        }
        static _getStrictElement(t, n) {
            return typeof t.getStrictElement == "function" ? t.getStrictElement(n) : null
        }
        OriginalElementsAreEqual(t, n) {
            return this._originalElementsOrHash[t] !== this._originalElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[n] : !0
        }
        ModifiedElementsAreEqual(t, n) {
            return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[n] : !0
        }
        ComputeDiff(t) {
            return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t)
        }
        _ComputeDiff(t, n, r, i, a) {
            const o = [!1];
            let u = this.ComputeDiffRecursive(t, n, r, i, o);
            return a && (u = this.PrettifyChanges(u)),
            {
                quitEarly: o[0],
                changes: u
            }
        }
        ComputeDiffRecursive(t, n, r, i, a) {
            for (a[0] = !1; t <= n && r <= i && this.ElementsAreEqual(t, r); )
                t++,
                r++;
            for (; n >= t && i >= r && this.ElementsAreEqual(n, i); )
                n--,
                i--;
            if (t > n || r > i) {
                let c;
                return r <= i ? (ze.Assert(t === n + 1, "originalStart should only be one more than originalEnd"),
                c = [new ye(t,0,r,i - r + 1)]) : t <= n ? (ze.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"),
                c = [new ye(t,n - t + 1,r,0)]) : (ze.Assert(t === n + 1, "originalStart should only be one more than originalEnd"),
                ze.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"),
                c = []),
                c
            }
            const o = [0]
              , u = [0]
              , s = this.ComputeRecursionPoint(t, n, r, i, o, u, a)
              , l = o[0]
              , h = u[0];
            if (s !== null)
                return s;
            if (!a[0]) {
                const c = this.ComputeDiffRecursive(t, l, r, h, a);
                let d = [];
                return a[0] ? d = [new ye(l + 1,n - (l + 1) + 1,h + 1,i - (h + 1) + 1)] : d = this.ComputeDiffRecursive(l + 1, n, h + 1, i, a),
                this.ConcatenateChanges(c, d)
            }
            return [new ye(t,n - t + 1,r,i - r + 1)]
        }
        WALKTRACE(t, n, r, i, a, o, u, s, l, h, c, d, p, _, b, T, k, f) {
            let v = null
              , A = null
              , D = new An
              , H = n
              , g = r
              , m = p[0] - T[0] - i
              , w = -1073741824
              , B = this.m_forwardHistory.length - 1;
            do {
                const R = m + t;
                R === H || R < g && l[R - 1] < l[R + 1] ? (c = l[R + 1],
                _ = c - m - i,
                c < w && D.MarkNextChange(),
                w = c,
                D.AddModifiedElement(c + 1, _),
                m = R + 1 - t) : (c = l[R - 1] + 1,
                _ = c - m - i,
                c < w && D.MarkNextChange(),
                w = c - 1,
                D.AddOriginalElement(c, _ + 1),
                m = R - 1 - t),
                B >= 0 && (l = this.m_forwardHistory[B],
                t = l[0],
                H = 1,
                g = l.length - 1)
            } while (--B >= -1);
            if (v = D.getReverseChanges(),
            f[0]) {
                let R = p[0] + 1
                  , N = T[0] + 1;
                if (v !== null && v.length > 0) {
                    const I = v[v.length - 1];
                    R = Math.max(R, I.getOriginalEnd()),
                    N = Math.max(N, I.getModifiedEnd())
                }
                A = [new ye(R,d - R + 1,N,b - N + 1)]
            } else {
                D = new An,
                H = o,
                g = u,
                m = p[0] - T[0] - s,
                w = 1073741824,
                B = k ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
                do {
                    const R = m + a;
                    R === H || R < g && h[R - 1] >= h[R + 1] ? (c = h[R + 1] - 1,
                    _ = c - m - s,
                    c > w && D.MarkNextChange(),
                    w = c + 1,
                    D.AddOriginalElement(c + 1, _ + 1),
                    m = R + 1 - a) : (c = h[R - 1],
                    _ = c - m - s,
                    c > w && D.MarkNextChange(),
                    w = c,
                    D.AddModifiedElement(c + 1, _ + 1),
                    m = R - 1 - a),
                    B >= 0 && (h = this.m_reverseHistory[B],
                    a = h[0],
                    H = 1,
                    g = h.length - 1)
                } while (--B >= -1);
                A = D.getChanges()
            }
            return this.ConcatenateChanges(v, A)
        }
        ComputeRecursionPoint(t, n, r, i, a, o, u) {
            let s = 0
              , l = 0
              , h = 0
              , c = 0
              , d = 0
              , p = 0;
            t--,
            r--,
            a[0] = 0,
            o[0] = 0,
            this.m_forwardHistory = [],
            this.m_reverseHistory = [];
            const _ = n - t + (i - r)
              , b = _ + 1
              , T = new Int32Array(b)
              , k = new Int32Array(b)
              , f = i - r
              , v = n - t
              , A = t - r
              , D = n - i
              , g = (v - f) % 2 === 0;
            T[f] = t,
            k[v] = n,
            u[0] = !1;
            for (let m = 1; m <= _ / 2 + 1; m++) {
                let w = 0
                  , B = 0;
                h = this.ClipDiagonalBound(f - m, m, f, b),
                c = this.ClipDiagonalBound(f + m, m, f, b);
                for (let N = h; N <= c; N += 2) {
                    N === h || N < c && T[N - 1] < T[N + 1] ? s = T[N + 1] : s = T[N - 1] + 1,
                    l = s - (N - f) - A;
                    const I = s;
                    for (; s < n && l < i && this.ElementsAreEqual(s + 1, l + 1); )
                        s++,
                        l++;
                    if (T[N] = s,
                    s + l > w + B && (w = s,
                    B = l),
                    !g && Math.abs(N - v) <= m - 1 && s >= k[N])
                        return a[0] = s,
                        o[0] = l,
                        I <= k[N] && 1447 > 0 && m <= 1447 + 1 ? this.WALKTRACE(f, h, c, A, v, d, p, D, T, k, s, n, a, l, i, o, g, u) : null
                }
                const R = (w - t + (B - r) - m) / 2;
                if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(w, R))
                    return u[0] = !0,
                    a[0] = w,
                    o[0] = B,
                    R > 0 && 1447 > 0 && m <= 1447 + 1 ? this.WALKTRACE(f, h, c, A, v, d, p, D, T, k, s, n, a, l, i, o, g, u) : (t++,
                    r++,
                    [new ye(t,n - t + 1,r,i - r + 1)]);
                d = this.ClipDiagonalBound(v - m, m, v, b),
                p = this.ClipDiagonalBound(v + m, m, v, b);
                for (let N = d; N <= p; N += 2) {
                    N === d || N < p && k[N - 1] >= k[N + 1] ? s = k[N + 1] - 1 : s = k[N - 1],
                    l = s - (N - v) - D;
                    const I = s;
                    for (; s > t && l > r && this.ElementsAreEqual(s, l); )
                        s--,
                        l--;
                    if (k[N] = s,
                    g && Math.abs(N - f) <= m && s <= T[N])
                        return a[0] = s,
                        o[0] = l,
                        I >= T[N] && 1447 > 0 && m <= 1447 + 1 ? this.WALKTRACE(f, h, c, A, v, d, p, D, T, k, s, n, a, l, i, o, g, u) : null
                }
                if (m <= 1447) {
                    let N = new Int32Array(c - h + 2);
                    N[0] = f - h + 1,
                    Ie.Copy2(T, h, N, 1, c - h + 1),
                    this.m_forwardHistory.push(N),
                    N = new Int32Array(p - d + 2),
                    N[0] = v - d + 1,
                    Ie.Copy2(k, d, N, 1, p - d + 1),
                    this.m_reverseHistory.push(N)
                }
            }
            return this.WALKTRACE(f, h, c, A, v, d, p, D, T, k, s, n, a, l, i, o, g, u)
        }
        PrettifyChanges(t) {
            for (let n = 0; n < t.length; n++) {
                const r = t[n]
                  , i = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length
                  , a = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length
                  , o = r.originalLength > 0
                  , u = r.modifiedLength > 0;
                for (; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < a && (!o || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!u || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength)); ) {
                    const l = this.ElementsAreStrictEqual(r.originalStart, r.modifiedStart);
                    if (this.ElementsAreStrictEqual(r.originalStart + r.originalLength, r.modifiedStart + r.modifiedLength) && !l)
                        break;
                    r.originalStart++,
                    r.modifiedStart++
                }
                let s = [null];
                if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], s)) {
                    t[n] = s[0],
                    t.splice(n + 1, 1),
                    n--;
                    continue
                }
            }
            for (let n = t.length - 1; n >= 0; n--) {
                const r = t[n];
                let i = 0
                  , a = 0;
                if (n > 0) {
                    const c = t[n - 1];
                    i = c.originalStart + c.originalLength,
                    a = c.modifiedStart + c.modifiedLength
                }
                const o = r.originalLength > 0
                  , u = r.modifiedLength > 0;
                let s = 0
                  , l = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength);
                for (let c = 1; ; c++) {
                    const d = r.originalStart - c
                      , p = r.modifiedStart - c;
                    if (d < i || p < a || o && !this.OriginalElementsAreEqual(d, d + r.originalLength) || u && !this.ModifiedElementsAreEqual(p, p + r.modifiedLength))
                        break;
                    const b = (d === i && p === a ? 5 : 0) + this._boundaryScore(d, r.originalLength, p, r.modifiedLength);
                    b > l && (l = b,
                    s = c)
                }
                r.originalStart -= s,
                r.modifiedStart -= s;
                const h = [null];
                if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], h)) {
                    t[n - 1] = h[0],
                    t.splice(n, 1),
                    n++;
                    continue
                }
            }
            if (this._hasStrings)
                for (let n = 1, r = t.length; n < r; n++) {
                    const i = t[n - 1]
                      , a = t[n]
                      , o = a.originalStart - i.originalStart - i.originalLength
                      , u = i.originalStart
                      , s = a.originalStart + a.originalLength
                      , l = s - u
                      , h = i.modifiedStart
                      , c = a.modifiedStart + a.modifiedLength
                      , d = c - h;
                    if (o < 5 && l < 20 && d < 20) {
                        const p = this._findBetterContiguousSequence(u, l, h, d, o);
                        if (p) {
                            const [_,b] = p;
                            (_ !== i.originalStart + i.originalLength || b !== i.modifiedStart + i.modifiedLength) && (i.originalLength = _ - i.originalStart,
                            i.modifiedLength = b - i.modifiedStart,
                            a.originalStart = _ + o,
                            a.modifiedStart = b + o,
                            a.originalLength = s - a.originalStart,
                            a.modifiedLength = c - a.modifiedStart)
                        }
                    }
                }
            return t
        }
        _findBetterContiguousSequence(t, n, r, i, a) {
            if (n < a || i < a)
                return null;
            const o = t + n - a + 1
              , u = r + i - a + 1;
            let s = 0
              , l = 0
              , h = 0;
            for (let c = t; c < o; c++)
                for (let d = r; d < u; d++) {
                    const p = this._contiguousSequenceScore(c, d, a);
                    p > 0 && p > s && (s = p,
                    l = c,
                    h = d)
                }
            return s > 0 ? [l, h] : null
        }
        _contiguousSequenceScore(t, n, r) {
            let i = 0;
            for (let a = 0; a < r; a++) {
                if (!this.ElementsAreEqual(t + a, n + a))
                    return 0;
                i += this._originalStringElements[t + a].length
            }
            return i
        }
        _OriginalIsBoundary(t) {
            return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t])
        }
        _OriginalRegionIsBoundary(t, n) {
            if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1))
                return !0;
            if (n > 0) {
                const r = t + n;
                if (this._OriginalIsBoundary(r - 1) || this._OriginalIsBoundary(r))
                    return !0
            }
            return !1
        }
        _ModifiedIsBoundary(t) {
            return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t])
        }
        _ModifiedRegionIsBoundary(t, n) {
            if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1))
                return !0;
            if (n > 0) {
                const r = t + n;
                if (this._ModifiedIsBoundary(r - 1) || this._ModifiedIsBoundary(r))
                    return !0
            }
            return !1
        }
        _boundaryScore(t, n, r, i) {
            const a = this._OriginalRegionIsBoundary(t, n) ? 1 : 0
              , o = this._ModifiedRegionIsBoundary(r, i) ? 1 : 0;
            return a + o
        }
        ConcatenateChanges(t, n) {
            let r = [];
            if (t.length === 0 || n.length === 0)
                return n.length > 0 ? n : t;
            if (this.ChangesOverlap(t[t.length - 1], n[0], r)) {
                const i = new Array(t.length + n.length - 1);
                return Ie.Copy(t, 0, i, 0, t.length - 1),
                i[t.length - 1] = r[0],
                Ie.Copy(n, 1, i, t.length, n.length - 1),
                i
            } else {
                const i = new Array(t.length + n.length);
                return Ie.Copy(t, 0, i, 0, t.length),
                Ie.Copy(n, 0, i, t.length, n.length),
                i
            }
        }
        ChangesOverlap(t, n, r) {
            if (ze.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"),
            ze.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"),
            t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
                const i = t.originalStart;
                let a = t.originalLength;
                const o = t.modifiedStart;
                let u = t.modifiedLength;
                return t.originalStart + t.originalLength >= n.originalStart && (a = n.originalStart + n.originalLength - t.originalStart),
                t.modifiedStart + t.modifiedLength >= n.modifiedStart && (u = n.modifiedStart + n.modifiedLength - t.modifiedStart),
                r[0] = new ye(i,a,o,u),
                !0
            } else
                return r[0] = null,
                !1
        }
        ClipDiagonalBound(t, n, r, i) {
            if (t >= 0 && t < i)
                return t;
            const a = r
              , o = i - r - 1
              , u = n % 2 === 0;
            if (t < 0) {
                const s = a % 2 === 0;
                return u === s ? 0 : 1
            } else {
                const s = o % 2 === 0;
                return u === s ? i - 1 : i - 2
            }
        }
    }
    let We;
    if (typeof ie.vscode != "undefined" && typeof ie.vscode.process != "undefined") {
        const e = ie.vscode.process;
        We = {
            get platform() {
                return e.platform
            },
            get arch() {
                return e.arch
            },
            get env() {
                return e.env
            },
            cwd() {
                return e.cwd()
            },
            nextTick(t) {
                return yn(t)
            }
        }
    } else
        typeof process != "undefined" ? We = {
            get platform() {
                return process.platform
            },
            get arch() {
                return process.arch
            },
            get env() {
                return process.env
            },
            cwd() {
                return process.env.VSCODE_CWD || process.cwd()
            },
            nextTick(e) {
                return process.nextTick(e)
            }
        } : We = {
            get platform() {
                return Ye ? "win32" : Nr ? "darwin" : "linux"
            },
            get arch() {},
            nextTick(e) {
                return yn(e)
            },
            get env() {
                return {}
            },
            cwd() {
                return "/"
            }
        };
    const It = We.cwd
      , Or = We.env
      , Me = We.platform
      , jr = 65
      , Gr = 97
      , Vr = 90
      , Yr = 122
      , ke = 46
      , te = 47
      , oe = 92
      , Se = 58
      , $r = 63;
    class Ln extends Error {
        constructor(t, n, r) {
            let i;
            typeof n == "string" && n.indexOf("not ") === 0 ? (i = "must not be",
            n = n.replace(/^not /, "")) : i = "must be";
            const a = t.indexOf(".") !== -1 ? "property" : "argument";
            let o = `The "${t}" ${a} ${i} of type ${n}`;
            o += `. Received type ${typeof r}`,
            super(o),
            this.code = "ERR_INVALID_ARG_TYPE"
        }
    }
    function Z(e, t) {
        if (typeof e != "string")
            throw new Ln(t,"string",e)
    }
    function O(e) {
        return e === te || e === oe
    }
    function Wt(e) {
        return e === te
    }
    function Ae(e) {
        return e >= jr && e <= Vr || e >= Gr && e <= Yr
    }
    function ot(e, t, n, r) {
        let i = ""
          , a = 0
          , o = -1
          , u = 0
          , s = 0;
        for (let l = 0; l <= e.length; ++l) {
            if (l < e.length)
                s = e.charCodeAt(l);
            else {
                if (r(s))
                    break;
                s = te
            }
            if (r(s)) {
                if (!(o === l - 1 || u === 1))
                    if (u === 2) {
                        if (i.length < 2 || a !== 2 || i.charCodeAt(i.length - 1) !== ke || i.charCodeAt(i.length - 2) !== ke) {
                            if (i.length > 2) {
                                const h = i.lastIndexOf(n);
                                h === -1 ? (i = "",
                                a = 0) : (i = i.slice(0, h),
                                a = i.length - 1 - i.lastIndexOf(n)),
                                o = l,
                                u = 0;
                                continue
                            } else if (i.length !== 0) {
                                i = "",
                                a = 0,
                                o = l,
                                u = 0;
                                continue
                            }
                        }
                        t && (i += i.length > 0 ? `${n}..` : "..",
                        a = 2)
                    } else
                        i.length > 0 ? i += `${n}${e.slice(o + 1, l)}` : i = e.slice(o + 1, l),
                        a = l - o - 1;
                o = l,
                u = 0
            } else
                s === ke && u !== -1 ? ++u : u = -1
        }
        return i
    }
    function Cn(e, t) {
        if (t === null || typeof t != "object")
            throw new Ln("pathObject","Object",t);
        const n = t.dir || t.root
          , r = t.base || `${t.name || ""}${t.ext || ""}`;
        return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r
    }
    const ae = {
        resolve(...e) {
            let t = ""
              , n = ""
              , r = !1;
            for (let i = e.length - 1; i >= -1; i--) {
                let a;
                if (i >= 0) {
                    if (a = e[i],
                    Z(a, "path"),
                    a.length === 0)
                        continue
                } else
                    t.length === 0 ? a = It() : (a = Or[`=${t}`] || It(),
                    (a === void 0 || a.slice(0, 2).toLowerCase() !== t.toLowerCase() && a.charCodeAt(2) === oe) && (a = `${t}\\`));
                const o = a.length;
                let u = 0
                  , s = ""
                  , l = !1;
                const h = a.charCodeAt(0);
                if (o === 1)
                    O(h) && (u = 1,
                    l = !0);
                else if (O(h))
                    if (l = !0,
                    O(a.charCodeAt(1))) {
                        let c = 2
                          , d = c;
                        for (; c < o && !O(a.charCodeAt(c)); )
                            c++;
                        if (c < o && c !== d) {
                            const p = a.slice(d, c);
                            for (d = c; c < o && O(a.charCodeAt(c)); )
                                c++;
                            if (c < o && c !== d) {
                                for (d = c; c < o && !O(a.charCodeAt(c)); )
                                    c++;
                                (c === o || c !== d) && (s = `\\\\${p}\\${a.slice(d, c)}`,
                                u = c)
                            }
                        }
                    } else
                        u = 1;
                else
                    Ae(h) && a.charCodeAt(1) === Se && (s = a.slice(0, 2),
                    u = 2,
                    o > 2 && O(a.charCodeAt(2)) && (l = !0,
                    u = 3));
                if (s.length > 0)
                    if (t.length > 0) {
                        if (s.toLowerCase() !== t.toLowerCase())
                            continue
                    } else
                        t = s;
                if (r) {
                    if (t.length > 0)
                        break
                } else if (n = `${a.slice(u)}\\${n}`,
                r = l,
                l && t.length > 0)
                    break
            }
            return n = ot(n, !r, "\\", O),
            r ? `${t}\\${n}` : `${t}${n}` || "."
        },
        normalize(e) {
            Z(e, "path");
            const t = e.length;
            if (t === 0)
                return ".";
            let n = 0, r, i = !1;
            const a = e.charCodeAt(0);
            if (t === 1)
                return Wt(a) ? "\\" : e;
            if (O(a))
                if (i = !0,
                O(e.charCodeAt(1))) {
                    let u = 2
                      , s = u;
                    for (; u < t && !O(e.charCodeAt(u)); )
                        u++;
                    if (u < t && u !== s) {
                        const l = e.slice(s, u);
                        for (s = u; u < t && O(e.charCodeAt(u)); )
                            u++;
                        if (u < t && u !== s) {
                            for (s = u; u < t && !O(e.charCodeAt(u)); )
                                u++;
                            if (u === t)
                                return `\\\\${l}\\${e.slice(s)}\\`;
                            u !== s && (r = `\\\\${l}\\${e.slice(s, u)}`,
                            n = u)
                        }
                    }
                } else
                    n = 1;
            else
                Ae(a) && e.charCodeAt(1) === Se && (r = e.slice(0, 2),
                n = 2,
                t > 2 && O(e.charCodeAt(2)) && (i = !0,
                n = 3));
            let o = n < t ? ot(e.slice(n), !i, "\\", O) : "";
            return o.length === 0 && !i && (o = "."),
            o.length > 0 && O(e.charCodeAt(t - 1)) && (o += "\\"),
            r === void 0 ? i ? `\\${o}` : o : i ? `${r}\\${o}` : `${r}${o}`
        },
        isAbsolute(e) {
            Z(e, "path");
            const t = e.length;
            if (t === 0)
                return !1;
            const n = e.charCodeAt(0);
            return O(n) || t > 2 && Ae(n) && e.charCodeAt(1) === Se && O(e.charCodeAt(2))
        },
        join(...e) {
            if (e.length === 0)
                return ".";
            let t, n;
            for (let a = 0; a < e.length; ++a) {
                const o = e[a];
                Z(o, "path"),
                o.length > 0 && (t === void 0 ? t = n = o : t += `\\${o}`)
            }
            if (t === void 0)
                return ".";
            let r = !0
              , i = 0;
            if (typeof n == "string" && O(n.charCodeAt(0))) {
                ++i;
                const a = n.length;
                a > 1 && O(n.charCodeAt(1)) && (++i,
                a > 2 && (O(n.charCodeAt(2)) ? ++i : r = !1))
            }
            if (r) {
                for (; i < t.length && O(t.charCodeAt(i)); )
                    i++;
                i >= 2 && (t = `\\${t.slice(i)}`)
            }
            return ae.normalize(t)
        },
        relative(e, t) {
            if (Z(e, "from"),
            Z(t, "to"),
            e === t)
                return "";
            const n = ae.resolve(e)
              , r = ae.resolve(t);
            if (n === r || (e = n.toLowerCase(),
            t = r.toLowerCase(),
            e === t))
                return "";
            let i = 0;
            for (; i < e.length && e.charCodeAt(i) === oe; )
                i++;
            let a = e.length;
            for (; a - 1 > i && e.charCodeAt(a - 1) === oe; )
                a--;
            const o = a - i;
            let u = 0;
            for (; u < t.length && t.charCodeAt(u) === oe; )
                u++;
            let s = t.length;
            for (; s - 1 > u && t.charCodeAt(s - 1) === oe; )
                s--;
            const l = s - u
              , h = o < l ? o : l;
            let c = -1
              , d = 0;
            for (; d < h; d++) {
                const _ = e.charCodeAt(i + d);
                if (_ !== t.charCodeAt(u + d))
                    break;
                _ === oe && (c = d)
            }
            if (d !== h) {
                if (c === -1)
                    return r
            } else {
                if (l > h) {
                    if (t.charCodeAt(u + d) === oe)
                        return r.slice(u + d + 1);
                    if (d === 2)
                        return r.slice(u + d)
                }
                o > h && (e.charCodeAt(i + d) === oe ? c = d : d === 2 && (c = 3)),
                c === -1 && (c = 0)
            }
            let p = "";
            for (d = i + c + 1; d <= a; ++d)
                (d === a || e.charCodeAt(d) === oe) && (p += p.length === 0 ? ".." : "\\..");
            return u += c,
            p.length > 0 ? `${p}${r.slice(u, s)}` : (r.charCodeAt(u) === oe && ++u,
            r.slice(u, s))
        },
        toNamespacedPath(e) {
            if (typeof e != "string")
                return e;
            if (e.length === 0)
                return "";
            const t = ae.resolve(e);
            if (t.length <= 2)
                return e;
            if (t.charCodeAt(0) === oe) {
                if (t.charCodeAt(1) === oe) {
                    const n = t.charCodeAt(2);
                    if (n !== $r && n !== ke)
                        return `\\\\?\\UNC\\${t.slice(2)}`
                }
            } else if (Ae(t.charCodeAt(0)) && t.charCodeAt(1) === Se && t.charCodeAt(2) === oe)
                return `\\\\?\\${t}`;
            return e
        },
        dirname(e) {
            Z(e, "path");
            const t = e.length;
            if (t === 0)
                return ".";
            let n = -1
              , r = 0;
            const i = e.charCodeAt(0);
            if (t === 1)
                return O(i) ? e : ".";
            if (O(i)) {
                if (n = r = 1,
                O(e.charCodeAt(1))) {
                    let u = 2
                      , s = u;
                    for (; u < t && !O(e.charCodeAt(u)); )
                        u++;
                    if (u < t && u !== s) {
                        for (s = u; u < t && O(e.charCodeAt(u)); )
                            u++;
                        if (u < t && u !== s) {
                            for (s = u; u < t && !O(e.charCodeAt(u)); )
                                u++;
                            if (u === t)
                                return e;
                            u !== s && (n = r = u + 1)
                        }
                    }
                }
            } else
                Ae(i) && e.charCodeAt(1) === Se && (n = t > 2 && O(e.charCodeAt(2)) ? 3 : 2,
                r = n);
            let a = -1
              , o = !0;
            for (let u = t - 1; u >= r; --u)
                if (O(e.charCodeAt(u))) {
                    if (!o) {
                        a = u;
                        break
                    }
                } else
                    o = !1;
            if (a === -1) {
                if (n === -1)
                    return ".";
                a = n
            }
            return e.slice(0, a)
        },
        basename(e, t) {
            t !== void 0 && Z(t, "ext"),
            Z(e, "path");
            let n = 0, r = -1, i = !0, a;
            if (e.length >= 2 && Ae(e.charCodeAt(0)) && e.charCodeAt(1) === Se && (n = 2),
            t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e)
                    return "";
                let o = t.length - 1
                  , u = -1;
                for (a = e.length - 1; a >= n; --a) {
                    const s = e.charCodeAt(a);
                    if (O(s)) {
                        if (!i) {
                            n = a + 1;
                            break
                        }
                    } else
                        u === -1 && (i = !1,
                        u = a + 1),
                        o >= 0 && (s === t.charCodeAt(o) ? --o === -1 && (r = a) : (o = -1,
                        r = u))
                }
                return n === r ? r = u : r === -1 && (r = e.length),
                e.slice(n, r)
            }
            for (a = e.length - 1; a >= n; --a)
                if (O(e.charCodeAt(a))) {
                    if (!i) {
                        n = a + 1;
                        break
                    }
                } else
                    r === -1 && (i = !1,
                    r = a + 1);
            return r === -1 ? "" : e.slice(n, r)
        },
        extname(e) {
            Z(e, "path");
            let t = 0
              , n = -1
              , r = 0
              , i = -1
              , a = !0
              , o = 0;
            e.length >= 2 && e.charCodeAt(1) === Se && Ae(e.charCodeAt(0)) && (t = r = 2);
            for (let u = e.length - 1; u >= t; --u) {
                const s = e.charCodeAt(u);
                if (O(s)) {
                    if (!a) {
                        r = u + 1;
                        break
                    }
                    continue
                }
                i === -1 && (a = !1,
                i = u + 1),
                s === ke ? n === -1 ? n = u : o !== 1 && (o = 1) : n !== -1 && (o = -1)
            }
            return n === -1 || i === -1 || o === 0 || o === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i)
        },
        format: Cn.bind(null, "\\"),
        parse(e) {
            Z(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0)
                return t;
            const n = e.length;
            let r = 0
              , i = e.charCodeAt(0);
            if (n === 1)
                return O(i) ? (t.root = t.dir = e,
                t) : (t.base = t.name = e,
                t);
            if (O(i)) {
                if (r = 1,
                O(e.charCodeAt(1))) {
                    let c = 2
                      , d = c;
                    for (; c < n && !O(e.charCodeAt(c)); )
                        c++;
                    if (c < n && c !== d) {
                        for (d = c; c < n && O(e.charCodeAt(c)); )
                            c++;
                        if (c < n && c !== d) {
                            for (d = c; c < n && !O(e.charCodeAt(c)); )
                                c++;
                            c === n ? r = c : c !== d && (r = c + 1)
                        }
                    }
                }
            } else if (Ae(i) && e.charCodeAt(1) === Se) {
                if (n <= 2)
                    return t.root = t.dir = e,
                    t;
                if (r = 2,
                O(e.charCodeAt(2))) {
                    if (n === 3)
                        return t.root = t.dir = e,
                        t;
                    r = 3
                }
            }
            r > 0 && (t.root = e.slice(0, r));
            let a = -1
              , o = r
              , u = -1
              , s = !0
              , l = e.length - 1
              , h = 0;
            for (; l >= r; --l) {
                if (i = e.charCodeAt(l),
                O(i)) {
                    if (!s) {
                        o = l + 1;
                        break
                    }
                    continue
                }
                u === -1 && (s = !1,
                u = l + 1),
                i === ke ? a === -1 ? a = l : h !== 1 && (h = 1) : a !== -1 && (h = -1)
            }
            return u !== -1 && (a === -1 || h === 0 || h === 1 && a === u - 1 && a === o + 1 ? t.base = t.name = e.slice(o, u) : (t.name = e.slice(o, a),
            t.base = e.slice(o, u),
            t.ext = e.slice(a, u))),
            o > 0 && o !== r ? t.dir = e.slice(0, o - 1) : t.dir = t.root,
            t
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null
    }
      , le = {
        resolve(...e) {
            let t = ""
              , n = !1;
            for (let r = e.length - 1; r >= -1 && !n; r--) {
                const i = r >= 0 ? e[r] : It();
                Z(i, "path"),
                i.length !== 0 && (t = `${i}/${t}`,
                n = i.charCodeAt(0) === te)
            }
            return t = ot(t, !n, "/", Wt),
            n ? `/${t}` : t.length > 0 ? t : "."
        },
        normalize(e) {
            if (Z(e, "path"),
            e.length === 0)
                return ".";
            const t = e.charCodeAt(0) === te
              , n = e.charCodeAt(e.length - 1) === te;
            return e = ot(e, !t, "/", Wt),
            e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"),
            t ? `/${e}` : e)
        },
        isAbsolute(e) {
            return Z(e, "path"),
            e.length > 0 && e.charCodeAt(0) === te
        },
        join(...e) {
            if (e.length === 0)
                return ".";
            let t;
            for (let n = 0; n < e.length; ++n) {
                const r = e[n];
                Z(r, "path"),
                r.length > 0 && (t === void 0 ? t = r : t += `/${r}`)
            }
            return t === void 0 ? "." : le.normalize(t)
        },
        relative(e, t) {
            if (Z(e, "from"),
            Z(t, "to"),
            e === t || (e = le.resolve(e),
            t = le.resolve(t),
            e === t))
                return "";
            const n = 1
              , r = e.length
              , i = r - n
              , a = 1
              , o = t.length - a
              , u = i < o ? i : o;
            let s = -1
              , l = 0;
            for (; l < u; l++) {
                const c = e.charCodeAt(n + l);
                if (c !== t.charCodeAt(a + l))
                    break;
                c === te && (s = l)
            }
            if (l === u)
                if (o > u) {
                    if (t.charCodeAt(a + l) === te)
                        return t.slice(a + l + 1);
                    if (l === 0)
                        return t.slice(a + l)
                } else
                    i > u && (e.charCodeAt(n + l) === te ? s = l : l === 0 && (s = 0));
            let h = "";
            for (l = n + s + 1; l <= r; ++l)
                (l === r || e.charCodeAt(l) === te) && (h += h.length === 0 ? ".." : "/..");
            return `${h}${t.slice(a + s)}`
        },
        toNamespacedPath(e) {
            return e
        },
        dirname(e) {
            if (Z(e, "path"),
            e.length === 0)
                return ".";
            const t = e.charCodeAt(0) === te;
            let n = -1
              , r = !0;
            for (let i = e.length - 1; i >= 1; --i)
                if (e.charCodeAt(i) === te) {
                    if (!r) {
                        n = i;
                        break
                    }
                } else
                    r = !1;
            return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n)
        },
        basename(e, t) {
            t !== void 0 && Z(t, "ext"),
            Z(e, "path");
            let n = 0, r = -1, i = !0, a;
            if (t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e)
                    return "";
                let o = t.length - 1
                  , u = -1;
                for (a = e.length - 1; a >= 0; --a) {
                    const s = e.charCodeAt(a);
                    if (s === te) {
                        if (!i) {
                            n = a + 1;
                            break
                        }
                    } else
                        u === -1 && (i = !1,
                        u = a + 1),
                        o >= 0 && (s === t.charCodeAt(o) ? --o === -1 && (r = a) : (o = -1,
                        r = u))
                }
                return n === r ? r = u : r === -1 && (r = e.length),
                e.slice(n, r)
            }
            for (a = e.length - 1; a >= 0; --a)
                if (e.charCodeAt(a) === te) {
                    if (!i) {
                        n = a + 1;
                        break
                    }
                } else
                    r === -1 && (i = !1,
                    r = a + 1);
            return r === -1 ? "" : e.slice(n, r)
        },
        extname(e) {
            Z(e, "path");
            let t = -1
              , n = 0
              , r = -1
              , i = !0
              , a = 0;
            for (let o = e.length - 1; o >= 0; --o) {
                const u = e.charCodeAt(o);
                if (u === te) {
                    if (!i) {
                        n = o + 1;
                        break
                    }
                    continue
                }
                r === -1 && (i = !1,
                r = o + 1),
                u === ke ? t === -1 ? t = o : a !== 1 && (a = 1) : t !== -1 && (a = -1)
            }
            return t === -1 || r === -1 || a === 0 || a === 1 && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
        },
        format: Cn.bind(null, "/"),
        parse(e) {
            Z(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0)
                return t;
            const n = e.charCodeAt(0) === te;
            let r;
            n ? (t.root = "/",
            r = 1) : r = 0;
            let i = -1
              , a = 0
              , o = -1
              , u = !0
              , s = e.length - 1
              , l = 0;
            for (; s >= r; --s) {
                const h = e.charCodeAt(s);
                if (h === te) {
                    if (!u) {
                        a = s + 1;
                        break
                    }
                    continue
                }
                o === -1 && (u = !1,
                o = s + 1),
                h === ke ? i === -1 ? i = s : l !== 1 && (l = 1) : i !== -1 && (l = -1)
            }
            if (o !== -1) {
                const h = a === 0 && n ? 1 : a;
                i === -1 || l === 0 || l === 1 && i === o - 1 && i === a + 1 ? t.base = t.name = e.slice(h, o) : (t.name = e.slice(h, i),
                t.base = e.slice(h, o),
                t.ext = e.slice(i, o))
            }
            return a > 0 ? t.dir = e.slice(0, a - 1) : n && (t.dir = "/"),
            t
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
    le.win32 = ae.win32 = ae,
    le.posix = ae.posix = le,
    Me === "win32" ? ae.normalize : le.normalize,
    Me === "win32" ? ae.resolve : le.resolve,
    Me === "win32" ? ae.relative : le.relative,
    Me === "win32" ? ae.dirname : le.dirname,
    Me === "win32" ? ae.basename : le.basename,
    Me === "win32" ? ae.extname : le.extname,
    Me === "win32" ? ae.sep : le.sep;
    const Xr = /^\w[\w\d+.-]*$/
      , Qr = /^\//
      , Jr = /^\/\//;
    function xn(e, t) {
        if (!e.scheme && t)
            throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
        if (e.scheme && !Xr.test(e.scheme))
            throw new Error("[UriError]: Scheme contains illegal characters.");
        if (e.path) {
            if (e.authority) {
                if (!Qr.test(e.path))
                    throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
            } else if (Jr.test(e.path))
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
        }
    }
    function Zr(e, t) {
        return !e && !t ? "file" : e
    }
    function Kr(e, t) {
        switch (e) {
        case "https":
        case "http":
        case "file":
            t ? t[0] !== me && (t = me + t) : t = me;
            break
        }
        return t
    }
    const Q = ""
      , me = "/"
      , ea = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class Re {
        constructor(t, n, r, i, a, o=!1) {
            typeof t == "object" ? (this.scheme = t.scheme || Q,
            this.authority = t.authority || Q,
            this.path = t.path || Q,
            this.query = t.query || Q,
            this.fragment = t.fragment || Q) : (this.scheme = Zr(t, o),
            this.authority = n || Q,
            this.path = Kr(this.scheme, r || Q),
            this.query = i || Q,
            this.fragment = a || Q,
            xn(this, o))
        }
        static isUri(t) {
            return t instanceof Re ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1
        }
        get fsPath() {
            return Pt(this, !1)
        }
        with(t) {
            if (!t)
                return this;
            let {scheme: n, authority: r, path: i, query: a, fragment: o} = t;
            return n === void 0 ? n = this.scheme : n === null && (n = Q),
            r === void 0 ? r = this.authority : r === null && (r = Q),
            i === void 0 ? i = this.path : i === null && (i = Q),
            a === void 0 ? a = this.query : a === null && (a = Q),
            o === void 0 ? o = this.fragment : o === null && (o = Q),
            n === this.scheme && r === this.authority && i === this.path && a === this.query && o === this.fragment ? this : new Pe(n,r,i,a,o)
        }
        static parse(t, n=!1) {
            const r = ea.exec(t);
            return r ? new Pe(r[2] || Q,lt(r[4] || Q),lt(r[5] || Q),lt(r[7] || Q),lt(r[9] || Q),n) : new Pe(Q,Q,Q,Q,Q)
        }
        static file(t) {
            let n = Q;
            if (Ye && (t = t.replace(/\\/g, me)),
            t[0] === me && t[1] === me) {
                const r = t.indexOf(me, 2);
                r === -1 ? (n = t.substring(2),
                t = me) : (n = t.substring(2, r),
                t = t.substring(r) || me)
            }
            return new Pe("file",n,t,Q,Q)
        }
        static from(t) {
            const n = new Pe(t.scheme,t.authority,t.path,t.query,t.fragment);
            return xn(n, !0),
            n
        }
        static joinPath(t, ...n) {
            if (!t.path)
                throw new Error("[UriError]: cannot call joinPath on URI without path");
            let r;
            return Ye && t.scheme === "file" ? r = Re.file(ae.join(Pt(t, !0), ...n)).path : r = le.join(t.path, ...n),
            t.with({
                path: r
            })
        }
        toString(t=!1) {
            return Bt(this, t)
        }
        toJSON() {
            return this
        }
        static revive(t) {
            if (t) {
                if (t instanceof Re)
                    return t;
                {
                    const n = new Pe(t);
                    return n._formatted = t.external,
                    n._fsPath = t._sep === Dn ? t.fsPath : null,
                    n
                }
            } else
                return t
        }
    }
    const Dn = Ye ? 1 : void 0;
    class Pe extends Re {
        constructor() {
            super(...arguments),
            this._formatted = null,
            this._fsPath = null
        }
        get fsPath() {
            return this._fsPath || (this._fsPath = Pt(this, !1)),
            this._fsPath
        }
        toString(t=!1) {
            return t ? Bt(this, !0) : (this._formatted || (this._formatted = Bt(this, !1)),
            this._formatted)
        }
        toJSON() {
            const t = {
                $mid: 1
            };
            return this._fsPath && (t.fsPath = this._fsPath,
            t._sep = Dn),
            this._formatted && (t.external = this._formatted),
            this.path && (t.path = this.path),
            this.scheme && (t.scheme = this.scheme),
            this.authority && (t.authority = this.authority),
            this.query && (t.query = this.query),
            this.fragment && (t.fragment = this.fragment),
            t
        }
    }
    const En = {
        [58]: "%3A",
        [47]: "%2F",
        [63]: "%3F",
        [35]: "%23",
        [91]: "%5B",
        [93]: "%5D",
        [64]: "%40",
        [33]: "%21",
        [36]: "%24",
        [38]: "%26",
        [39]: "%27",
        [40]: "%28",
        [41]: "%29",
        [42]: "%2A",
        [43]: "%2B",
        [44]: "%2C",
        [59]: "%3B",
        [61]: "%3D",
        [32]: "%20"
    };
    function Mn(e, t) {
        let n, r = -1;
        for (let i = 0; i < e.length; i++) {
            const a = e.charCodeAt(i);
            if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47)
                r !== -1 && (n += encodeURIComponent(e.substring(r, i)),
                r = -1),
                n !== void 0 && (n += e.charAt(i));
            else {
                n === void 0 && (n = e.substr(0, i));
                const o = En[a];
                o !== void 0 ? (r !== -1 && (n += encodeURIComponent(e.substring(r, i)),
                r = -1),
                n += o) : r === -1 && (r = i)
            }
        }
        return r !== -1 && (n += encodeURIComponent(e.substring(r))),
        n !== void 0 ? n : e
    }
    function ta(e) {
        let t;
        for (let n = 0; n < e.length; n++) {
            const r = e.charCodeAt(n);
            r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, n)),
            t += En[r]) : t !== void 0 && (t += e[n])
        }
        return t !== void 0 ? t : e
    }
    function Pt(e, t) {
        let n;
        return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path,
        Ye && (n = n.replace(/\//g, "\\")),
        n
    }
    function Bt(e, t) {
        const n = t ? ta : Mn;
        let r = ""
          , {scheme: i, authority: a, path: o, query: u, fragment: s} = e;
        if (i && (r += i,
        r += ":"),
        (a || i === "file") && (r += me,
        r += me),
        a) {
            let l = a.indexOf("@");
            if (l !== -1) {
                const h = a.substr(0, l);
                a = a.substr(l + 1),
                l = h.indexOf(":"),
                l === -1 ? r += n(h, !1) : (r += n(h.substr(0, l), !1),
                r += ":",
                r += n(h.substr(l + 1), !1)),
                r += "@"
            }
            a = a.toLowerCase(),
            l = a.indexOf(":"),
            l === -1 ? r += n(a, !1) : (r += n(a.substr(0, l), !1),
            r += a.substr(l))
        }
        if (o) {
            if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
                const l = o.charCodeAt(1);
                l >= 65 && l <= 90 && (o = `/${String.fromCharCode(l + 32)}:${o.substr(3)}`)
            } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
                const l = o.charCodeAt(0);
                l >= 65 && l <= 90 && (o = `${String.fromCharCode(l + 32)}:${o.substr(2)}`)
            }
            r += n(o, !0)
        }
        return u && (r += "?",
        r += n(u, !1)),
        s && (r += "#",
        r += t ? s : Mn(s, !1)),
        r
    }
    function Rn(e) {
        try {
            return decodeURIComponent(e)
        } catch {
            return e.length > 3 ? e.substr(0, 3) + Rn(e.substr(3)) : e
        }
    }
    const Nn = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function lt(e) {
        return e.match(Nn) ? e.replace(Nn, t => Rn(t)) : e
    }
    class he {
        constructor(t, n) {
            this.lineNumber = t,
            this.column = n
        }
        with(t=this.lineNumber, n=this.column) {
            return t === this.lineNumber && n === this.column ? this : new he(t,n)
        }
        delta(t=0, n=0) {
            return this.with(this.lineNumber + t, this.column + n)
        }
        equals(t) {
            return he.equals(this, t)
        }
        static equals(t, n) {
            return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column
        }
        isBefore(t) {
            return he.isBefore(this, t)
        }
        static isBefore(t, n) {
            return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column
        }
        isBeforeOrEqual(t) {
            return he.isBeforeOrEqual(this, t)
        }
        static isBeforeOrEqual(t, n) {
            return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column
        }
        static compare(t, n) {
            let r = t.lineNumber | 0
              , i = n.lineNumber | 0;
            if (r === i) {
                let a = t.column | 0
                  , o = n.column | 0;
                return a - o
            }
            return r - i
        }
        clone() {
            return new he(this.lineNumber,this.column)
        }
        toString() {
            return "(" + this.lineNumber + "," + this.column + ")"
        }
        static lift(t) {
            return new he(t.lineNumber,t.column)
        }
        static isIPosition(t) {
            return t && typeof t.lineNumber == "number" && typeof t.column == "number"
        }
    }
    class J {
        constructor(t, n, r, i) {
            t > r || t === r && n > i ? (this.startLineNumber = r,
            this.startColumn = i,
            this.endLineNumber = t,
            this.endColumn = n) : (this.startLineNumber = t,
            this.startColumn = n,
            this.endLineNumber = r,
            this.endColumn = i)
        }
        isEmpty() {
            return J.isEmpty(this)
        }
        static isEmpty(t) {
            return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn
        }
        containsPosition(t) {
            return J.containsPosition(this, t)
        }
        static containsPosition(t, n) {
            return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn)
        }
        containsRange(t) {
            return J.containsRange(this, t)
        }
        static containsRange(t, n) {
            return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn)
        }
        strictContainsRange(t) {
            return J.strictContainsRange(this, t)
        }
        static strictContainsRange(t, n) {
            return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn)
        }
        plusRange(t) {
            return J.plusRange(this, t)
        }
        static plusRange(t, n) {
            let r, i, a, o;
            return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber,
            i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber,
            i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber,
            i = t.startColumn),
            n.endLineNumber > t.endLineNumber ? (a = n.endLineNumber,
            o = n.endColumn) : n.endLineNumber === t.endLineNumber ? (a = n.endLineNumber,
            o = Math.max(n.endColumn, t.endColumn)) : (a = t.endLineNumber,
            o = t.endColumn),
            new J(r,i,a,o)
        }
        intersectRanges(t) {
            return J.intersectRanges(this, t)
        }
        static intersectRanges(t, n) {
            let r = t.startLineNumber
              , i = t.startColumn
              , a = t.endLineNumber
              , o = t.endColumn
              , u = n.startLineNumber
              , s = n.startColumn
              , l = n.endLineNumber
              , h = n.endColumn;
            return r < u ? (r = u,
            i = s) : r === u && (i = Math.max(i, s)),
            a > l ? (a = l,
            o = h) : a === l && (o = Math.min(o, h)),
            r > a || r === a && i > o ? null : new J(r,i,a,o)
        }
        equalsRange(t) {
            return J.equalsRange(this, t)
        }
        static equalsRange(t, n) {
            return !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn
        }
        getEndPosition() {
            return J.getEndPosition(this)
        }
        static getEndPosition(t) {
            return new he(t.endLineNumber,t.endColumn)
        }
        getStartPosition() {
            return J.getStartPosition(this)
        }
        static getStartPosition(t) {
            return new he(t.startLineNumber,t.startColumn)
        }
        toString() {
            return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]"
        }
        setEndPosition(t, n) {
            return new J(this.startLineNumber,this.startColumn,t,n)
        }
        setStartPosition(t, n) {
            return new J(t,n,this.endLineNumber,this.endColumn)
        }
        collapseToStart() {
            return J.collapseToStart(this)
        }
        static collapseToStart(t) {
            return new J(t.startLineNumber,t.startColumn,t.startLineNumber,t.startColumn)
        }
        static fromPositions(t, n=t) {
            return new J(t.lineNumber,t.column,n.lineNumber,n.column)
        }
        static lift(t) {
            return t ? new J(t.startLineNumber,t.startColumn,t.endLineNumber,t.endColumn) : null
        }
        static isIRange(t) {
            return t && typeof t.startLineNumber == "number" && typeof t.startColumn == "number" && typeof t.endLineNumber == "number" && typeof t.endColumn == "number"
        }
        static areIntersectingOrTouching(t, n) {
            return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn)
        }
        static areIntersecting(t, n) {
            return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn)
        }
        static compareRangesUsingStarts(t, n) {
            if (t && n) {
                const a = t.startLineNumber | 0
                  , o = n.startLineNumber | 0;
                if (a === o) {
                    const u = t.startColumn | 0
                      , s = n.startColumn | 0;
                    if (u === s) {
                        const l = t.endLineNumber | 0
                          , h = n.endLineNumber | 0;
                        if (l === h) {
                            const c = t.endColumn | 0
                              , d = n.endColumn | 0;
                            return c - d
                        }
                        return l - h
                    }
                    return u - s
                }
                return a - o
            }
            return (t ? 1 : 0) - (n ? 1 : 0)
        }
        static compareRangesUsingEnds(t, n) {
            return t.endLineNumber === n.endLineNumber ? t.endColumn === n.endColumn ? t.startLineNumber === n.startLineNumber ? t.startColumn - n.startColumn : t.startLineNumber - n.startLineNumber : t.endColumn - n.endColumn : t.endLineNumber - n.endLineNumber
        }
        static spansMultipleLines(t) {
            return t.endLineNumber > t.startLineNumber
        }
    }
    const na = 3;
    function Un(e, t, n, r) {
        return new Te(e,t,n).ComputeDiff(r)
    }
    class Hn {
        constructor(t) {
            const n = []
              , r = [];
            for (let i = 0, a = t.length; i < a; i++)
                n[i] = Ft(t[i], 1),
                r[i] = qt(t[i], 1);
            this.lines = t,
            this._startColumns = n,
            this._endColumns = r
        }
        getElements() {
            const t = [];
            for (let n = 0, r = this.lines.length; n < r; n++)
                t[n] = this.lines[n].substring(this._startColumns[n] - 1, this._endColumns[n] - 1);
            return t
        }
        getStrictElement(t) {
            return this.lines[t]
        }
        getStartLineNumber(t) {
            return t + 1
        }
        getEndLineNumber(t) {
            return t + 1
        }
        createCharSequence(t, n, r) {
            const i = []
              , a = []
              , o = [];
            let u = 0;
            for (let s = n; s <= r; s++) {
                const l = this.lines[s]
                  , h = t ? this._startColumns[s] : 1
                  , c = t ? this._endColumns[s] : l.length + 1;
                for (let d = h; d < c; d++)
                    i[u] = l.charCodeAt(d - 1),
                    a[u] = s + 1,
                    o[u] = d,
                    u++
            }
            return new ia(i,a,o)
        }
    }
    class ia {
        constructor(t, n, r) {
            this._charCodes = t,
            this._lineNumbers = n,
            this._columns = r
        }
        getElements() {
            return this._charCodes
        }
        getStartLineNumber(t) {
            return this._lineNumbers[t]
        }
        getStartColumn(t) {
            return this._columns[t]
        }
        getEndLineNumber(t) {
            return this._lineNumbers[t]
        }
        getEndColumn(t) {
            return this._columns[t] + 1
        }
    }
    class $e {
        constructor(t, n, r, i, a, o, u, s) {
            this.originalStartLineNumber = t,
            this.originalStartColumn = n,
            this.originalEndLineNumber = r,
            this.originalEndColumn = i,
            this.modifiedStartLineNumber = a,
            this.modifiedStartColumn = o,
            this.modifiedEndLineNumber = u,
            this.modifiedEndColumn = s
        }
        static createFromDiffChange(t, n, r) {
            let i, a, o, u, s, l, h, c;
            return t.originalLength === 0 ? (i = 0,
            a = 0,
            o = 0,
            u = 0) : (i = n.getStartLineNumber(t.originalStart),
            a = n.getStartColumn(t.originalStart),
            o = n.getEndLineNumber(t.originalStart + t.originalLength - 1),
            u = n.getEndColumn(t.originalStart + t.originalLength - 1)),
            t.modifiedLength === 0 ? (s = 0,
            l = 0,
            h = 0,
            c = 0) : (s = r.getStartLineNumber(t.modifiedStart),
            l = r.getStartColumn(t.modifiedStart),
            h = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1),
            c = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1)),
            new $e(i,a,o,u,s,l,h,c)
        }
    }
    function ra(e) {
        if (e.length <= 1)
            return e;
        const t = [e[0]];
        let n = t[0];
        for (let r = 1, i = e.length; r < i; r++) {
            const a = e[r]
              , o = a.originalStart - (n.originalStart + n.originalLength)
              , u = a.modifiedStart - (n.modifiedStart + n.modifiedLength);
            Math.min(o, u) < na ? (n.originalLength = a.originalStart + a.originalLength - n.originalStart,
            n.modifiedLength = a.modifiedStart + a.modifiedLength - n.modifiedStart) : (t.push(a),
            n = a)
        }
        return t
    }
    class Xe {
        constructor(t, n, r, i, a) {
            this.originalStartLineNumber = t,
            this.originalEndLineNumber = n,
            this.modifiedStartLineNumber = r,
            this.modifiedEndLineNumber = i,
            this.charChanges = a
        }
        static createFromDiffResult(t, n, r, i, a, o, u) {
            let s, l, h, c, d;
            if (n.originalLength === 0 ? (s = r.getStartLineNumber(n.originalStart) - 1,
            l = 0) : (s = r.getStartLineNumber(n.originalStart),
            l = r.getEndLineNumber(n.originalStart + n.originalLength - 1)),
            n.modifiedLength === 0 ? (h = i.getStartLineNumber(n.modifiedStart) - 1,
            c = 0) : (h = i.getStartLineNumber(n.modifiedStart),
            c = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)),
            o && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && a()) {
                const p = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1)
                  , _ = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
                let b = Un(p, _, a, !0).changes;
                u && (b = ra(b)),
                d = [];
                for (let T = 0, k = b.length; T < k; T++)
                    d.push($e.createFromDiffChange(b[T], p, _))
            }
            return new Xe(s,l,h,c,d)
        }
    }
    class aa {
        constructor(t, n, r) {
            this.shouldComputeCharChanges = r.shouldComputeCharChanges,
            this.shouldPostProcessCharChanges = r.shouldPostProcessCharChanges,
            this.shouldIgnoreTrimWhitespace = r.shouldIgnoreTrimWhitespace,
            this.shouldMakePrettyDiff = r.shouldMakePrettyDiff,
            this.originalLines = t,
            this.modifiedLines = n,
            this.original = new Hn(t),
            this.modified = new Hn(n),
            this.continueLineDiff = zn(r.maxComputationTime),
            this.continueCharDiff = zn(r.maxComputationTime === 0 ? 0 : Math.min(r.maxComputationTime, 5e3))
        }
        computeDiff() {
            if (this.original.lines.length === 1 && this.original.lines[0].length === 0)
                return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? {
                    quitEarly: !1,
                    changes: []
                } : {
                    quitEarly: !1,
                    changes: [{
                        originalStartLineNumber: 1,
                        originalEndLineNumber: 1,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: this.modified.lines.length,
                        charChanges: [{
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0
                        }]
                    }]
                };
            if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0)
                return {
                    quitEarly: !1,
                    changes: [{
                        originalStartLineNumber: 1,
                        originalEndLineNumber: this.original.lines.length,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: 1,
                        charChanges: [{
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0
                        }]
                    }]
                };
            const t = Un(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff)
              , n = t.changes
              , r = t.quitEarly;
            if (this.shouldIgnoreTrimWhitespace) {
                const u = [];
                for (let s = 0, l = n.length; s < l; s++)
                    u.push(Xe.createFromDiffResult(this.shouldIgnoreTrimWhitespace, n[s], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                return {
                    quitEarly: r,
                    changes: u
                }
            }
            const i = [];
            let a = 0
              , o = 0;
            for (let u = -1, s = n.length; u < s; u++) {
                const l = u + 1 < s ? n[u + 1] : null
                  , h = l ? l.originalStart : this.originalLines.length
                  , c = l ? l.modifiedStart : this.modifiedLines.length;
                for (; a < h && o < c; ) {
                    const d = this.originalLines[a]
                      , p = this.modifiedLines[o];
                    if (d !== p) {
                        {
                            let _ = Ft(d, 1)
                              , b = Ft(p, 1);
                            for (; _ > 1 && b > 1; ) {
                                const T = d.charCodeAt(_ - 2)
                                  , k = p.charCodeAt(b - 2);
                                if (T !== k)
                                    break;
                                _--,
                                b--
                            }
                            (_ > 1 || b > 1) && this._pushTrimWhitespaceCharChange(i, a + 1, 1, _, o + 1, 1, b)
                        }
                        {
                            let _ = qt(d, 1)
                              , b = qt(p, 1);
                            const T = d.length + 1
                              , k = p.length + 1;
                            for (; _ < T && b < k; ) {
                                const f = d.charCodeAt(_ - 1)
                                  , v = d.charCodeAt(b - 1);
                                if (f !== v)
                                    break;
                                _++,
                                b++
                            }
                            (_ < T || b < k) && this._pushTrimWhitespaceCharChange(i, a + 1, _, T, o + 1, b, k)
                        }
                    }
                    a++,
                    o++
                }
                l && (i.push(Xe.createFromDiffResult(this.shouldIgnoreTrimWhitespace, l, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)),
                a += l.originalLength,
                o += l.modifiedLength)
            }
            return {
                quitEarly: r,
                changes: i
            }
        }
        _pushTrimWhitespaceCharChange(t, n, r, i, a, o, u) {
            if (this._mergeTrimWhitespaceCharChange(t, n, r, i, a, o, u))
                return;
            let s;
            this.shouldComputeCharChanges && (s = [new $e(n,r,n,i,a,o,a,u)]),
            t.push(new Xe(n,n,a,a,s))
        }
        _mergeTrimWhitespaceCharChange(t, n, r, i, a, o, u) {
            const s = t.length;
            if (s === 0)
                return !1;
            const l = t[s - 1];
            return l.originalEndLineNumber === 0 || l.modifiedEndLineNumber === 0 ? !1 : l.originalEndLineNumber + 1 === n && l.modifiedEndLineNumber + 1 === a ? (l.originalEndLineNumber = n,
            l.modifiedEndLineNumber = a,
            this.shouldComputeCharChanges && l.charChanges && l.charChanges.push(new $e(n,r,n,i,a,o,a,u)),
            !0) : !1
        }
    }
    function Ft(e, t) {
        const n = Pr(e);
        return n === -1 ? t : n + 1
    }
    function qt(e, t) {
        const n = Br(e);
        return n === -1 ? t : n + 2
    }
    function zn(e) {
        if (e === 0)
            return () => !0;
        const t = Date.now();
        return () => Date.now() - t < e
    }
    function In(e) {
        return e < 0 ? 0 : e > 255 ? 255 : e | 0
    }
    function Be(e) {
        return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0
    }
    class sa {
        constructor(t, n) {
            this._prefixSumIndexOfResultBrand = void 0,
            this.index = t,
            this.remainder = n
        }
    }
    class oa {
        constructor(t) {
            this.values = t,
            this.prefixSum = new Uint32Array(t.length),
            this.prefixSumValidIndex = new Int32Array(1),
            this.prefixSumValidIndex[0] = -1
        }
        insertValues(t, n) {
            t = Be(t);
            const r = this.values
              , i = this.prefixSum
              , a = n.length;
            return a === 0 ? !1 : (this.values = new Uint32Array(r.length + a),
            this.values.set(r.subarray(0, t), 0),
            this.values.set(r.subarray(t), t + a),
            this.values.set(n, t),
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            this.prefixSum = new Uint32Array(this.values.length),
            this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
            !0)
        }
        changeValue(t, n) {
            return t = Be(t),
            n = Be(n),
            this.values[t] === n ? !1 : (this.values[t] = n,
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            !0)
        }
        removeValues(t, n) {
            t = Be(t),
            n = Be(n);
            const r = this.values
              , i = this.prefixSum;
            if (t >= r.length)
                return !1;
            let a = r.length - t;
            return n >= a && (n = a),
            n === 0 ? !1 : (this.values = new Uint32Array(r.length - n),
            this.values.set(r.subarray(0, t), 0),
            this.values.set(r.subarray(t + n), t),
            this.prefixSum = new Uint32Array(this.values.length),
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
            !0)
        }
        getTotalSum() {
            return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1)
        }
        getPrefixSum(t) {
            return t < 0 ? 0 : (t = Be(t),
            this._getPrefixSum(t))
        }
        _getPrefixSum(t) {
            if (t <= this.prefixSumValidIndex[0])
                return this.prefixSum[t];
            let n = this.prefixSumValidIndex[0] + 1;
            n === 0 && (this.prefixSum[0] = this.values[0],
            n++),
            t >= this.values.length && (t = this.values.length - 1);
            for (let r = n; r <= t; r++)
                this.prefixSum[r] = this.prefixSum[r - 1] + this.values[r];
            return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t),
            this.prefixSum[t]
        }
        getIndexOf(t) {
            t = Math.floor(t),
            this.getTotalSum();
            let n = 0
              , r = this.values.length - 1
              , i = 0
              , a = 0
              , o = 0;
            for (; n <= r; )
                if (i = n + (r - n) / 2 | 0,
                a = this.prefixSum[i],
                o = a - this.values[i],
                t < o)
                    r = i - 1;
                else if (t >= a)
                    n = i + 1;
                else
                    break;
            return new sa(i,t - o)
        }
    }
    class la {
        constructor(t, n, r, i) {
            this._uri = t,
            this._lines = n,
            this._eol = r,
            this._versionId = i,
            this._lineStarts = null,
            this._cachedTextValue = null
        }
        dispose() {
            this._lines.length = 0
        }
        get version() {
            return this._versionId
        }
        getText() {
            return this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)),
            this._cachedTextValue
        }
        onEvents(t) {
            t.eol && t.eol !== this._eol && (this._eol = t.eol,
            this._lineStarts = null);
            const n = t.changes;
            for (const r of n)
                this._acceptDeleteRange(r.range),
                this._acceptInsertText(new he(r.range.startLineNumber,r.range.startColumn), r.text);
            this._versionId = t.versionId,
            this._cachedTextValue = null
        }
        _ensureLineStarts() {
            if (!this._lineStarts) {
                const t = this._eol.length
                  , n = this._lines.length
                  , r = new Uint32Array(n);
                for (let i = 0; i < n; i++)
                    r[i] = this._lines[i].length + t;
                this._lineStarts = new oa(r)
            }
        }
        _setLineText(t, n) {
            this._lines[t] = n,
            this._lineStarts && this._lineStarts.changeValue(t, this._lines[t].length + this._eol.length)
        }
        _acceptDeleteRange(t) {
            if (t.startLineNumber === t.endLineNumber) {
                if (t.startColumn === t.endColumn)
                    return;
                this._setLineText(t.startLineNumber - 1, this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) + this._lines[t.startLineNumber - 1].substring(t.endColumn - 1));
                return
            }
            this._setLineText(t.startLineNumber - 1, this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) + this._lines[t.endLineNumber - 1].substring(t.endColumn - 1)),
            this._lines.splice(t.startLineNumber, t.endLineNumber - t.startLineNumber),
            this._lineStarts && this._lineStarts.removeValues(t.startLineNumber, t.endLineNumber - t.startLineNumber)
        }
        _acceptInsertText(t, n) {
            if (n.length === 0)
                return;
            let r = Wr(n);
            if (r.length === 1) {
                this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + r[0] + this._lines[t.lineNumber - 1].substring(t.column - 1));
                return
            }
            r[r.length - 1] += this._lines[t.lineNumber - 1].substring(t.column - 1),
            this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + r[0]);
            let i = new Uint32Array(r.length - 1);
            for (let a = 1; a < r.length; a++)
                this._lines.splice(t.lineNumber + a - 1, 0, r[a]),
                i[a - 1] = r[a].length + this._eol.length;
            this._lineStarts && this._lineStarts.insertValues(t.lineNumber, i)
        }
    }
    const ua = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
    function ha(e="") {
        let t = "(-?\\d*\\.\\d\\w*)|([^";
        for (const n of ua)
            e.indexOf(n) >= 0 || (t += "\\" + n);
        return t += "\\s]+)",
        new RegExp(t,"g")
    }
    const ca = ha();
    function da(e) {
        let t = ca;
        if (e && e instanceof RegExp)
            if (e.global)
                t = e;
            else {
                let n = "g";
                e.ignoreCase && (n += "i"),
                e.multiline && (n += "m"),
                e.unicode && (n += "u"),
                t = new RegExp(e.source,n)
            }
        return t.lastIndex = 0,
        t
    }
    const ma = {
        maxLen: 1e3,
        windowSize: 15,
        timeBudget: 150
    };
    function Wn(e, t, n, r, i=ma) {
        if (n.length > i.maxLen) {
            let l = e - i.maxLen / 2;
            return l < 0 ? l = 0 : r += l,
            n = n.substring(l, e + i.maxLen / 2),
            Wn(e, t, n, r, i)
        }
        const a = Date.now()
          , o = e - 1 - r;
        let u = -1
          , s = null;
        for (let l = 1; !(Date.now() - a >= i.timeBudget); l++) {
            const h = o - i.windowSize * l;
            t.lastIndex = Math.max(0, h);
            const c = fa(t, n, o, u);
            if (!c && s || (s = c,
            h <= 0))
                break;
            u = h
        }
        if (s) {
            let l = {
                word: s[0],
                startColumn: r + 1 + s.index,
                endColumn: r + 1 + s.index + s[0].length
            };
            return t.lastIndex = 0,
            l
        }
        return null
    }
    function fa(e, t, n, r) {
        let i;
        for (; i = e.exec(t); ) {
            const a = i.index || 0;
            if (a <= n && e.lastIndex >= n)
                return i;
            if (r > 0 && a > r)
                return null
        }
        return null
    }
    class Ot {
        constructor(t) {
            let n = In(t);
            this._defaultValue = n,
            this._asciiMap = Ot._createAsciiMap(n),
            this._map = new Map
        }
        static _createAsciiMap(t) {
            let n = new Uint8Array(256);
            for (let r = 0; r < 256; r++)
                n[r] = t;
            return n
        }
        set(t, n) {
            let r = In(n);
            t >= 0 && t < 256 ? this._asciiMap[t] = r : this._map.set(t, r)
        }
        get(t) {
            return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue
        }
    }
    class pa {
        constructor(t, n, r) {
            const i = new Uint8Array(t * n);
            for (let a = 0, o = t * n; a < o; a++)
                i[a] = r;
            this._data = i,
            this.rows = t,
            this.cols = n
        }
        get(t, n) {
            return this._data[t * this.cols + n]
        }
        set(t, n, r) {
            this._data[t * this.cols + n] = r
        }
    }
    class ga {
        constructor(t) {
            let n = 0
              , r = 0;
            for (let a = 0, o = t.length; a < o; a++) {
                let[u,s,l] = t[a];
                s > n && (n = s),
                u > r && (r = u),
                l > r && (r = l)
            }
            n++,
            r++;
            let i = new pa(r,n,0);
            for (let a = 0, o = t.length; a < o; a++) {
                let[u,s,l] = t[a];
                i.set(u, s, l)
            }
            this._states = i,
            this._maxCharCode = n
        }
        nextState(t, n) {
            return n < 0 || n >= this._maxCharCode ? 0 : this._states.get(t, n)
        }
    }
    let jt = null;
    function ba() {
        return jt === null && (jt = new ga([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])),
        jt
    }
    let Qe = null;
    function _a() {
        if (Qe === null) {
            Qe = new Ot(0);
            const e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`;
            for (let n = 0; n < e.length; n++)
                Qe.set(e.charCodeAt(n), 1);
            const t = ".,;";
            for (let n = 0; n < t.length; n++)
                Qe.set(t.charCodeAt(n), 2)
        }
        return Qe
    }
    class ut {
        static _createLink(t, n, r, i, a) {
            let o = a - 1;
            do {
                const u = n.charCodeAt(o);
                if (t.get(u) !== 2)
                    break;
                o--
            } while (o > i);
            if (i > 0) {
                const u = n.charCodeAt(i - 1)
                  , s = n.charCodeAt(o);
                (u === 40 && s === 41 || u === 91 && s === 93 || u === 123 && s === 125) && o--
            }
            return {
                range: {
                    startLineNumber: r,
                    startColumn: i + 1,
                    endLineNumber: r,
                    endColumn: o + 2
                },
                url: n.substring(i, o + 1)
            }
        }
        static computeLinks(t, n=ba()) {
            const r = _a();
            let i = [];
            for (let a = 1, o = t.getLineCount(); a <= o; a++) {
                const u = t.getLineContent(a)
                  , s = u.length;
                let l = 0
                  , h = 0
                  , c = 0
                  , d = 1
                  , p = !1
                  , _ = !1
                  , b = !1
                  , T = !1;
                for (; l < s; ) {
                    let k = !1;
                    const f = u.charCodeAt(l);
                    if (d === 13) {
                        let v;
                        switch (f) {
                        case 40:
                            p = !0,
                            v = 0;
                            break;
                        case 41:
                            v = p ? 0 : 1;
                            break;
                        case 91:
                            b = !0,
                            _ = !0,
                            v = 0;
                            break;
                        case 93:
                            b = !1,
                            v = _ ? 0 : 1;
                            break;
                        case 123:
                            T = !0,
                            v = 0;
                            break;
                        case 125:
                            v = T ? 0 : 1;
                            break;
                        case 39:
                            v = c === 34 || c === 96 ? 0 : 1;
                            break;
                        case 34:
                            v = c === 39 || c === 96 ? 0 : 1;
                            break;
                        case 96:
                            v = c === 39 || c === 34 ? 0 : 1;
                            break;
                        case 42:
                            v = c === 42 ? 1 : 0;
                            break;
                        case 124:
                            v = c === 124 ? 1 : 0;
                            break;
                        case 32:
                            v = b ? 0 : 1;
                            break;
                        default:
                            v = r.get(f)
                        }
                        v === 1 && (i.push(ut._createLink(r, u, a, h, l)),
                        k = !0)
                    } else if (d === 12) {
                        let v;
                        f === 91 ? (_ = !0,
                        v = 0) : v = r.get(f),
                        v === 1 ? k = !0 : d = 13
                    } else
                        d = n.nextState(d, f),
                        d === 0 && (k = !0);
                    k && (d = 1,
                    p = !1,
                    _ = !1,
                    T = !1,
                    h = l + 1,
                    c = f),
                    l++
                }
                d === 13 && i.push(ut._createLink(r, u, a, h, s))
            }
            return i
        }
    }
    function va(e) {
        return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : ut.computeLinks(e)
    }
    class Gt {
        constructor() {
            this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]]
        }
        navigateValueSet(t, n, r, i, a) {
            if (t && n) {
                let o = this.doNavigateValueSet(n, a);
                if (o)
                    return {
                        range: t,
                        value: o
                    }
            }
            if (r && i) {
                let o = this.doNavigateValueSet(i, a);
                if (o)
                    return {
                        range: r,
                        value: o
                    }
            }
            return null
        }
        doNavigateValueSet(t, n) {
            let r = this.numberReplace(t, n);
            return r !== null ? r : this.textReplace(t, n)
        }
        numberReplace(t, n) {
            let r = Math.pow(10, t.length - (t.lastIndexOf(".") + 1))
              , i = Number(t)
              , a = parseFloat(t);
            return !isNaN(i) && !isNaN(a) && i === a ? i === 0 && !n ? null : (i = Math.floor(i * r),
            i += n ? r : -r,
            String(i / r)) : null
        }
        textReplace(t, n) {
            return this.valueSetsReplace(this._defaultValueSet, t, n)
        }
        valueSetsReplace(t, n, r) {
            let i = null;
            for (let a = 0, o = t.length; i === null && a < o; a++)
                i = this.valueSetReplace(t[a], n, r);
            return i
        }
        valueSetReplace(t, n, r) {
            let i = t.indexOf(n);
            return i >= 0 ? (i += r ? 1 : -1,
            i < 0 ? i = t.length - 1 : i %= t.length,
            t[i]) : null
        }
    }
    Gt.INSTANCE = new Gt;
    class X {
        constructor(t) {
            this.element = t,
            this.next = X.Undefined,
            this.prev = X.Undefined
        }
    }
    X.Undefined = new X(void 0);
    class Pn {
        constructor() {
            this._first = X.Undefined,
            this._last = X.Undefined,
            this._size = 0
        }
        get size() {
            return this._size
        }
        isEmpty() {
            return this._first === X.Undefined
        }
        clear() {
            let t = this._first;
            for (; t !== X.Undefined; ) {
                const n = t.next;
                t.prev = X.Undefined,
                t.next = X.Undefined,
                t = n
            }
            this._first = X.Undefined,
            this._last = X.Undefined,
            this._size = 0
        }
        unshift(t) {
            return this._insert(t, !1)
        }
        push(t) {
            return this._insert(t, !0)
        }
        _insert(t, n) {
            const r = new X(t);
            if (this._first === X.Undefined)
                this._first = r,
                this._last = r;
            else if (n) {
                const a = this._last;
                this._last = r,
                r.prev = a,
                a.next = r
            } else {
                const a = this._first;
                this._first = r,
                r.next = a,
                a.prev = r
            }
            this._size += 1;
            let i = !1;
            return () => {
                i || (i = !0,
                this._remove(r))
            }
        }
        shift() {
            if (this._first !== X.Undefined) {
                const t = this._first.element;
                return this._remove(this._first),
                t
            }
        }
        pop() {
            if (this._last !== X.Undefined) {
                const t = this._last.element;
                return this._remove(this._last),
                t
            }
        }
        _remove(t) {
            if (t.prev !== X.Undefined && t.next !== X.Undefined) {
                const n = t.prev;
                n.next = t.next,
                t.next.prev = n
            } else
                t.prev === X.Undefined && t.next === X.Undefined ? (this._first = X.Undefined,
                this._last = X.Undefined) : t.next === X.Undefined ? (this._last = this._last.prev,
                this._last.next = X.Undefined) : t.prev === X.Undefined && (this._first = this._first.next,
                this._first.prev = X.Undefined);
            this._size -= 1
        }
        *[Symbol.iterator]() {
            let t = this._first;
            for (; t !== X.Undefined; )
                yield t.element,
                t = t.next
        }
    }
    const wa = ie.performance && typeof ie.performance.now == "function";
    class ht {
        constructor(t) {
            this._highResolution = wa && t,
            this._startTime = this._now(),
            this._stopTime = -1
        }
        static create(t=!0) {
            return new ht(t)
        }
        stop() {
            this._stopTime = this._now()
        }
        elapsed() {
            return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime
        }
        _now() {
            return this._highResolution ? ie.performance.now() : Date.now()
        }
    }
    var Vt;
    (function(e) {
        e.None = () => wn.None;
        function t(f) {
            return (v, A=null, D) => {
                let H = !1, g;
                return g = f(m => {
                    if (!H)
                        return g ? g.dispose() : H = !0,
                        v.call(A, m)
                }
                , null, D),
                H && g.dispose(),
                g
            }
        }
        e.once = t;
        function n(f, v) {
            return s( (A, D=null, H) => f(g => A.call(D, v(g)), null, H))
        }
        e.map = n;
        function r(f, v) {
            return s( (A, D=null, H) => f(g => {
                v(g),
                A.call(D, g)
            }
            , null, H))
        }
        e.forEach = r;
        function i(f, v) {
            return s( (A, D=null, H) => f(g => v(g) && A.call(D, g), null, H))
        }
        e.filter = i;
        function a(f) {
            return f
        }
        e.signal = a;
        function o(...f) {
            return (v, A=null, D) => Er(...f.map(H => H(g => v.call(A, g), null, D)))
        }
        e.any = o;
        function u(f, v, A) {
            let D = A;
            return n(f, H => (D = v(D, H),
            D))
        }
        e.reduce = u;
        function s(f) {
            let v;
            const A = new Ne({
                onFirstListenerAdd() {
                    v = f(A.fire, A)
                },
                onLastListenerRemove() {
                    v.dispose()
                }
            });
            return A.event
        }
        function l(f, v, A=100, D=!1, H) {
            let g, m, w, B = 0;
            const R = new Ne({
                leakWarningThreshold: H,
                onFirstListenerAdd() {
                    g = f(N => {
                        B++,
                        m = v(m, N),
                        D && !w && (R.fire(m),
                        m = void 0),
                        clearTimeout(w),
                        w = setTimeout( () => {
                            const I = m;
                            m = void 0,
                            w = void 0,
                            (!D || B > 1) && R.fire(I),
                            B = 0
                        }
                        , A)
                    }
                    )
                },
                onLastListenerRemove() {
                    g.dispose()
                }
            });
            return R.event
        }
        e.debounce = l;
        function h(f, v= (A, D) => A === D) {
            let A = !0, D;
            return i(f, H => {
                const g = A || !v(H, D);
                return A = !1,
                D = H,
                g
            }
            )
        }
        e.latch = h;
        function c(f, v) {
            return [e.filter(f, v), e.filter(f, A => !v(A))]
        }
        e.split = c;
        function d(f, v=!1, A=[]) {
            let D = A.slice()
              , H = f(w => {
                D ? D.push(w) : m.fire(w)
            }
            );
            const g = () => {
                D && D.forEach(w => m.fire(w)),
                D = null
            }
              , m = new Ne({
                onFirstListenerAdd() {
                    H || (H = f(w => m.fire(w)))
                },
                onFirstListenerDidAdd() {
                    D && (v ? setTimeout(g) : g())
                },
                onLastListenerRemove() {
                    H && H.dispose(),
                    H = null
                }
            });
            return m.event
        }
        e.buffer = d;
        class p {
            constructor(v) {
                this.event = v
            }
            map(v) {
                return new p(n(this.event, v))
            }
            forEach(v) {
                return new p(r(this.event, v))
            }
            filter(v) {
                return new p(i(this.event, v))
            }
            reduce(v, A) {
                return new p(u(this.event, v, A))
            }
            latch() {
                return new p(h(this.event))
            }
            debounce(v, A=100, D=!1, H) {
                return new p(l(this.event, v, A, D, H))
            }
            on(v, A, D) {
                return this.event(v, A, D)
            }
            once(v, A, D) {
                return t(this.event)(v, A, D)
            }
        }
        function _(f) {
            return new p(f)
        }
        e.chain = _;
        function b(f, v, A=D => D) {
            const D = (...w) => m.fire(A(...w))
              , H = () => f.on(v, D)
              , g = () => f.removeListener(v, D)
              , m = new Ne({
                onFirstListenerAdd: H,
                onLastListenerRemove: g
            });
            return m.event
        }
        e.fromNodeEventEmitter = b;
        function T(f, v, A=D => D) {
            const D = (...w) => m.fire(A(...w))
              , H = () => f.addEventListener(v, D)
              , g = () => f.removeEventListener(v, D)
              , m = new Ne({
                onFirstListenerAdd: H,
                onLastListenerRemove: g
            });
            return m.event
        }
        e.fromDOMEventEmitter = T;
        function k(f) {
            return new Promise(v => t(f)(v))
        }
        e.toPromise = k
    }
    )(Vt || (Vt = {}));
    class ct {
        constructor(t) {
            this._listenerCount = 0,
            this._invocationCount = 0,
            this._elapsedOverall = 0,
            this._name = `${t}_${ct._idPool++}`
        }
        start(t) {
            this._stopWatch = new ht(!0),
            this._listenerCount = t
        }
        stop() {
            if (this._stopWatch) {
                const t = this._stopWatch.elapsed();
                this._elapsedOverall += t,
                this._invocationCount += 1,
                console.info(`did FIRE ${this._name}: elapsed_ms: ${t.toFixed(5)}, listener: ${this._listenerCount} (elapsed_overall: ${this._elapsedOverall.toFixed(2)}, invocations: ${this._invocationCount})`),
                this._stopWatch = void 0
            }
        }
    }
    ct._idPool = 0;
    class Ne {
        constructor(t) {
            var n;
            this._disposed = !1,
            this._options = t,
            this._leakageMon = void 0,
            this._perfMon = !((n = this._options) === null || n === void 0) && n._profName ? new ct(this._options._profName) : void 0
        }
        get event() {
            return this._event || (this._event = (t, n, r) => {
                var i;
                this._listeners || (this._listeners = new Pn);
                const a = this._listeners.isEmpty();
                a && this._options && this._options.onFirstListenerAdd && this._options.onFirstListenerAdd(this);
                const o = this._listeners.push(n ? [t, n] : t);
                a && this._options && this._options.onFirstListenerDidAdd && this._options.onFirstListenerDidAdd(this),
                this._options && this._options.onListenerDidAdd && this._options.onListenerDidAdd(this, t, n);
                const u = (i = this._leakageMon) === null || i === void 0 ? void 0 : i.check(this._listeners.size)
                  , s = vn( () => {
                    u && u(),
                    this._disposed || (o(),
                    this._options && this._options.onLastListenerRemove && (this._listeners && !this._listeners.isEmpty() || this._options.onLastListenerRemove(this)))
                }
                );
                return r instanceof Ve ? r.add(s) : Array.isArray(r) && r.push(s),
                s
            }
            ),
            this._event
        }
        fire(t) {
            var n, r;
            if (this._listeners) {
                this._deliveryQueue || (this._deliveryQueue = new Pn);
                for (let i of this._listeners)
                    this._deliveryQueue.push([i, t]);
                for ((n = this._perfMon) === null || n === void 0 || n.start(this._deliveryQueue.size); this._deliveryQueue.size > 0; ) {
                    const [i,a] = this._deliveryQueue.shift();
                    try {
                        typeof i == "function" ? i.call(void 0, a) : i[0].call(i[1], a)
                    } catch (o) {
                        Lr(o)
                    }
                }
                (r = this._perfMon) === null || r === void 0 || r.stop()
            }
        }
        dispose() {
            var t, n, r, i, a;
            this._disposed || (this._disposed = !0,
            (t = this._listeners) === null || t === void 0 || t.clear(),
            (n = this._deliveryQueue) === null || n === void 0 || n.clear(),
            (i = (r = this._options) === null || r === void 0 ? void 0 : r.onLastListenerRemove) === null || i === void 0 || i.call(r),
            (a = this._leakageMon) === null || a === void 0 || a.dispose())
        }
    }
    const Bn = Object.freeze(function(e, t) {
        const n = setTimeout(e.bind(t), 0);
        return {
            dispose() {
                clearTimeout(n)
            }
        }
    });
    var dt;
    (function(e) {
        function t(n) {
            return n === e.None || n === e.Cancelled || n instanceof mt ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function"
        }
        e.isCancellationToken = t,
        e.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: Vt.None
        }),
        e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: Bn
        })
    }
    )(dt || (dt = {}));
    class mt {
        constructor() {
            this._isCancelled = !1,
            this._emitter = null
        }
        cancel() {
            this._isCancelled || (this._isCancelled = !0,
            this._emitter && (this._emitter.fire(void 0),
            this.dispose()))
        }
        get isCancellationRequested() {
            return this._isCancelled
        }
        get onCancellationRequested() {
            return this._isCancelled ? Bn : (this._emitter || (this._emitter = new Ne),
            this._emitter.event)
        }
        dispose() {
            this._emitter && (this._emitter.dispose(),
            this._emitter = null)
        }
    }
    class ya {
        constructor(t) {
            this._token = void 0,
            this._parentListener = void 0,
            this._parentListener = t && t.onCancellationRequested(this.cancel, this)
        }
        get token() {
            return this._token || (this._token = new mt),
            this._token
        }
        cancel() {
            this._token ? this._token instanceof mt && this._token.cancel() : this._token = dt.Cancelled
        }
        dispose(t=!1) {
            t && this.cancel(),
            this._parentListener && this._parentListener.dispose(),
            this._token ? this._token instanceof mt && this._token.dispose() : this._token = dt.None
        }
    }
    class Yt {
        constructor() {
            this._keyCodeToStr = [],
            this._strToKeyCode = Object.create(null)
        }
        define(t, n) {
            this._keyCodeToStr[t] = n,
            this._strToKeyCode[n.toLowerCase()] = t
        }
        keyCodeToStr(t) {
            return this._keyCodeToStr[t]
        }
        strToKeyCode(t) {
            return this._strToKeyCode[t.toLowerCase()] || 0
        }
    }
    const $t = new Yt
      , Xt = new Yt
      , Qt = new Yt;
    (function() {
        function e(t, n, r=n, i=r) {
            $t.define(t, n),
            Xt.define(t, r),
            Qt.define(t, i)
        }
        e(0, "unknown"),
        e(1, "Backspace"),
        e(2, "Tab"),
        e(3, "Enter"),
        e(4, "Shift"),
        e(5, "Ctrl"),
        e(6, "Alt"),
        e(7, "PauseBreak"),
        e(8, "CapsLock"),
        e(9, "Escape"),
        e(10, "Space"),
        e(11, "PageUp"),
        e(12, "PageDown"),
        e(13, "End"),
        e(14, "Home"),
        e(15, "LeftArrow", "Left"),
        e(16, "UpArrow", "Up"),
        e(17, "RightArrow", "Right"),
        e(18, "DownArrow", "Down"),
        e(19, "Insert"),
        e(20, "Delete"),
        e(21, "0"),
        e(22, "1"),
        e(23, "2"),
        e(24, "3"),
        e(25, "4"),
        e(26, "5"),
        e(27, "6"),
        e(28, "7"),
        e(29, "8"),
        e(30, "9"),
        e(31, "A"),
        e(32, "B"),
        e(33, "C"),
        e(34, "D"),
        e(35, "E"),
        e(36, "F"),
        e(37, "G"),
        e(38, "H"),
        e(39, "I"),
        e(40, "J"),
        e(41, "K"),
        e(42, "L"),
        e(43, "M"),
        e(44, "N"),
        e(45, "O"),
        e(46, "P"),
        e(47, "Q"),
        e(48, "R"),
        e(49, "S"),
        e(50, "T"),
        e(51, "U"),
        e(52, "V"),
        e(53, "W"),
        e(54, "X"),
        e(55, "Y"),
        e(56, "Z"),
        e(57, "Meta"),
        e(58, "ContextMenu"),
        e(59, "F1"),
        e(60, "F2"),
        e(61, "F3"),
        e(62, "F4"),
        e(63, "F5"),
        e(64, "F6"),
        e(65, "F7"),
        e(66, "F8"),
        e(67, "F9"),
        e(68, "F10"),
        e(69, "F11"),
        e(70, "F12"),
        e(71, "F13"),
        e(72, "F14"),
        e(73, "F15"),
        e(74, "F16"),
        e(75, "F17"),
        e(76, "F18"),
        e(77, "F19"),
        e(78, "NumLock"),
        e(79, "ScrollLock"),
        e(80, ";", ";", "OEM_1"),
        e(81, "=", "=", "OEM_PLUS"),
        e(82, ",", ",", "OEM_COMMA"),
        e(83, "-", "-", "OEM_MINUS"),
        e(84, ".", ".", "OEM_PERIOD"),
        e(85, "/", "/", "OEM_2"),
        e(86, "`", "`", "OEM_3"),
        e(110, "ABNT_C1"),
        e(111, "ABNT_C2"),
        e(87, "[", "[", "OEM_4"),
        e(88, "\\", "\\", "OEM_5"),
        e(89, "]", "]", "OEM_6"),
        e(90, "'", "'", "OEM_7"),
        e(91, "OEM_8"),
        e(92, "OEM_102"),
        e(93, "NumPad0"),
        e(94, "NumPad1"),
        e(95, "NumPad2"),
        e(96, "NumPad3"),
        e(97, "NumPad4"),
        e(98, "NumPad5"),
        e(99, "NumPad6"),
        e(100, "NumPad7"),
        e(101, "NumPad8"),
        e(102, "NumPad9"),
        e(103, "NumPad_Multiply"),
        e(104, "NumPad_Add"),
        e(105, "NumPad_Separator"),
        e(106, "NumPad_Subtract"),
        e(107, "NumPad_Decimal"),
        e(108, "NumPad_Divide")
    }
    )();
    var Fn;
    (function(e) {
        function t(o) {
            return $t.keyCodeToStr(o)
        }
        e.toString = t;
        function n(o) {
            return $t.strToKeyCode(o)
        }
        e.fromString = n;
        function r(o) {
            return Xt.keyCodeToStr(o)
        }
        e.toUserSettingsUS = r;
        function i(o) {
            return Qt.keyCodeToStr(o)
        }
        e.toUserSettingsGeneral = i;
        function a(o) {
            return Xt.strToKeyCode(o) || Qt.strToKeyCode(o)
        }
        e.fromUserSettings = a
    }
    )(Fn || (Fn = {}));
    function Ta(e, t) {
        const n = (t & 65535) << 16 >>> 0;
        return (e | n) >>> 0
    }
    class fe extends J {
        constructor(t, n, r, i) {
            super(t, n, r, i),
            this.selectionStartLineNumber = t,
            this.selectionStartColumn = n,
            this.positionLineNumber = r,
            this.positionColumn = i
        }
        toString() {
            return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]"
        }
        equalsSelection(t) {
            return fe.selectionsEqual(this, t)
        }
        static selectionsEqual(t, n) {
            return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn
        }
        getDirection() {
            return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1
        }
        setEndPosition(t, n) {
            return this.getDirection() === 0 ? new fe(this.startLineNumber,this.startColumn,t,n) : new fe(t,n,this.startLineNumber,this.startColumn)
        }
        getPosition() {
            return new he(this.positionLineNumber,this.positionColumn)
        }
        setStartPosition(t, n) {
            return this.getDirection() === 0 ? new fe(t,n,this.endLineNumber,this.endColumn) : new fe(this.endLineNumber,this.endColumn,t,n)
        }
        static fromPositions(t, n=t) {
            return new fe(t.lineNumber,t.column,n.lineNumber,n.column)
        }
        static liftSelection(t) {
            return new fe(t.selectionStartLineNumber,t.selectionStartColumn,t.positionLineNumber,t.positionColumn)
        }
        static selectionsArrEqual(t, n) {
            if (t && !n || !t && n)
                return !1;
            if (!t && !n)
                return !0;
            if (t.length !== n.length)
                return !1;
            for (let r = 0, i = t.length; r < i; r++)
                if (!this.selectionsEqual(t[r], n[r]))
                    return !1;
            return !0
        }
        static isISelection(t) {
            return t && typeof t.selectionStartLineNumber == "number" && typeof t.selectionStartColumn == "number" && typeof t.positionLineNumber == "number" && typeof t.positionColumn == "number"
        }
        static createWithDirection(t, n, r, i, a) {
            return a === 0 ? new fe(t,n,r,i) : new fe(r,i,t,n)
        }
    }
    class ka {
        constructor(t, n, r) {
            this._tokenBrand = void 0,
            this.offset = t | 0,
            this.type = n,
            this.language = r
        }
        toString() {
            return "(" + this.offset + ", " + this.type + ")"
        }
    }
    var qn;
    (function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.Disabled = 1] = "Disabled",
        e[e.Enabled = 2] = "Enabled"
    }
    )(qn || (qn = {}));
    var On;
    (function(e) {
        e[e.KeepWhitespace = 1] = "KeepWhitespace",
        e[e.InsertAsSnippet = 4] = "InsertAsSnippet"
    }
    )(On || (On = {}));
    var jn;
    (function(e) {
        e[e.Method = 0] = "Method",
        e[e.Function = 1] = "Function",
        e[e.Constructor = 2] = "Constructor",
        e[e.Field = 3] = "Field",
        e[e.Variable = 4] = "Variable",
        e[e.Class = 5] = "Class",
        e[e.Struct = 6] = "Struct",
        e[e.Interface = 7] = "Interface",
        e[e.Module = 8] = "Module",
        e[e.Property = 9] = "Property",
        e[e.Event = 10] = "Event",
        e[e.Operator = 11] = "Operator",
        e[e.Unit = 12] = "Unit",
        e[e.Value = 13] = "Value",
        e[e.Constant = 14] = "Constant",
        e[e.Enum = 15] = "Enum",
        e[e.EnumMember = 16] = "EnumMember",
        e[e.Keyword = 17] = "Keyword",
        e[e.Text = 18] = "Text",
        e[e.Color = 19] = "Color",
        e[e.File = 20] = "File",
        e[e.Reference = 21] = "Reference",
        e[e.Customcolor = 22] = "Customcolor",
        e[e.Folder = 23] = "Folder",
        e[e.TypeParameter = 24] = "TypeParameter",
        e[e.User = 25] = "User",
        e[e.Issue = 26] = "Issue",
        e[e.Snippet = 27] = "Snippet"
    }
    )(jn || (jn = {}));
    var Gn;
    (function(e) {
        e[e.Deprecated = 1] = "Deprecated"
    }
    )(Gn || (Gn = {}));
    var Vn;
    (function(e) {
        e[e.Invoke = 0] = "Invoke",
        e[e.TriggerCharacter = 1] = "TriggerCharacter",
        e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions"
    }
    )(Vn || (Vn = {}));
    var Yn;
    (function(e) {
        e[e.EXACT = 0] = "EXACT",
        e[e.ABOVE = 1] = "ABOVE",
        e[e.BELOW = 2] = "BELOW"
    }
    )(Yn || (Yn = {}));
    var $n;
    (function(e) {
        e[e.NotSet = 0] = "NotSet",
        e[e.ContentFlush = 1] = "ContentFlush",
        e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers",
        e[e.Explicit = 3] = "Explicit",
        e[e.Paste = 4] = "Paste",
        e[e.Undo = 5] = "Undo",
        e[e.Redo = 6] = "Redo"
    }
    )($n || ($n = {}));
    var Xn;
    (function(e) {
        e[e.LF = 1] = "LF",
        e[e.CRLF = 2] = "CRLF"
    }
    )(Xn || (Xn = {}));
    var Qn;
    (function(e) {
        e[e.Text = 0] = "Text",
        e[e.Read = 1] = "Read",
        e[e.Write = 2] = "Write"
    }
    )(Qn || (Qn = {}));
    var Jn;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Keep = 1] = "Keep",
        e[e.Brackets = 2] = "Brackets",
        e[e.Advanced = 3] = "Advanced",
        e[e.Full = 4] = "Full"
    }
    )(Jn || (Jn = {}));
    var Zn;
    (function(e) {
        e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter",
        e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter",
        e[e.accessibilitySupport = 2] = "accessibilitySupport",
        e[e.accessibilityPageSize = 3] = "accessibilityPageSize",
        e[e.ariaLabel = 4] = "ariaLabel",
        e[e.autoClosingBrackets = 5] = "autoClosingBrackets",
        e[e.autoClosingDelete = 6] = "autoClosingDelete",
        e[e.autoClosingOvertype = 7] = "autoClosingOvertype",
        e[e.autoClosingQuotes = 8] = "autoClosingQuotes",
        e[e.autoIndent = 9] = "autoIndent",
        e[e.automaticLayout = 10] = "automaticLayout",
        e[e.autoSurround = 11] = "autoSurround",
        e[e.bracketPairColorization = 12] = "bracketPairColorization",
        e[e.guides = 13] = "guides",
        e[e.codeLens = 14] = "codeLens",
        e[e.codeLensFontFamily = 15] = "codeLensFontFamily",
        e[e.codeLensFontSize = 16] = "codeLensFontSize",
        e[e.colorDecorators = 17] = "colorDecorators",
        e[e.columnSelection = 18] = "columnSelection",
        e[e.comments = 19] = "comments",
        e[e.contextmenu = 20] = "contextmenu",
        e[e.copyWithSyntaxHighlighting = 21] = "copyWithSyntaxHighlighting",
        e[e.cursorBlinking = 22] = "cursorBlinking",
        e[e.cursorSmoothCaretAnimation = 23] = "cursorSmoothCaretAnimation",
        e[e.cursorStyle = 24] = "cursorStyle",
        e[e.cursorSurroundingLines = 25] = "cursorSurroundingLines",
        e[e.cursorSurroundingLinesStyle = 26] = "cursorSurroundingLinesStyle",
        e[e.cursorWidth = 27] = "cursorWidth",
        e[e.disableLayerHinting = 28] = "disableLayerHinting",
        e[e.disableMonospaceOptimizations = 29] = "disableMonospaceOptimizations",
        e[e.domReadOnly = 30] = "domReadOnly",
        e[e.dragAndDrop = 31] = "dragAndDrop",
        e[e.emptySelectionClipboard = 32] = "emptySelectionClipboard",
        e[e.extraEditorClassName = 33] = "extraEditorClassName",
        e[e.fastScrollSensitivity = 34] = "fastScrollSensitivity",
        e[e.find = 35] = "find",
        e[e.fixedOverflowWidgets = 36] = "fixedOverflowWidgets",
        e[e.folding = 37] = "folding",
        e[e.foldingStrategy = 38] = "foldingStrategy",
        e[e.foldingHighlight = 39] = "foldingHighlight",
        e[e.foldingImportsByDefault = 40] = "foldingImportsByDefault",
        e[e.unfoldOnClickAfterEndOfLine = 41] = "unfoldOnClickAfterEndOfLine",
        e[e.fontFamily = 42] = "fontFamily",
        e[e.fontInfo = 43] = "fontInfo",
        e[e.fontLigatures = 44] = "fontLigatures",
        e[e.fontSize = 45] = "fontSize",
        e[e.fontWeight = 46] = "fontWeight",
        e[e.formatOnPaste = 47] = "formatOnPaste",
        e[e.formatOnType = 48] = "formatOnType",
        e[e.glyphMargin = 49] = "glyphMargin",
        e[e.gotoLocation = 50] = "gotoLocation",
        e[e.hideCursorInOverviewRuler = 51] = "hideCursorInOverviewRuler",
        e[e.hover = 52] = "hover",
        e[e.inDiffEditor = 53] = "inDiffEditor",
        e[e.inlineSuggest = 54] = "inlineSuggest",
        e[e.letterSpacing = 55] = "letterSpacing",
        e[e.lightbulb = 56] = "lightbulb",
        e[e.lineDecorationsWidth = 57] = "lineDecorationsWidth",
        e[e.lineHeight = 58] = "lineHeight",
        e[e.lineNumbers = 59] = "lineNumbers",
        e[e.lineNumbersMinChars = 60] = "lineNumbersMinChars",
        e[e.linkedEditing = 61] = "linkedEditing",
        e[e.links = 62] = "links",
        e[e.matchBrackets = 63] = "matchBrackets",
        e[e.minimap = 64] = "minimap",
        e[e.mouseStyle = 65] = "mouseStyle",
        e[e.mouseWheelScrollSensitivity = 66] = "mouseWheelScrollSensitivity",
        e[e.mouseWheelZoom = 67] = "mouseWheelZoom",
        e[e.multiCursorMergeOverlapping = 68] = "multiCursorMergeOverlapping",
        e[e.multiCursorModifier = 69] = "multiCursorModifier",
        e[e.multiCursorPaste = 70] = "multiCursorPaste",
        e[e.occurrencesHighlight = 71] = "occurrencesHighlight",
        e[e.overviewRulerBorder = 72] = "overviewRulerBorder",
        e[e.overviewRulerLanes = 73] = "overviewRulerLanes",
        e[e.padding = 74] = "padding",
        e[e.parameterHints = 75] = "parameterHints",
        e[e.peekWidgetDefaultFocus = 76] = "peekWidgetDefaultFocus",
        e[e.definitionLinkOpensInPeek = 77] = "definitionLinkOpensInPeek",
        e[e.quickSuggestions = 78] = "quickSuggestions",
        e[e.quickSuggestionsDelay = 79] = "quickSuggestionsDelay",
        e[e.readOnly = 80] = "readOnly",
        e[e.renameOnType = 81] = "renameOnType",
        e[e.renderControlCharacters = 82] = "renderControlCharacters",
        e[e.renderFinalNewline = 83] = "renderFinalNewline",
        e[e.renderLineHighlight = 84] = "renderLineHighlight",
        e[e.renderLineHighlightOnlyWhenFocus = 85] = "renderLineHighlightOnlyWhenFocus",
        e[e.renderValidationDecorations = 86] = "renderValidationDecorations",
        e[e.renderWhitespace = 87] = "renderWhitespace",
        e[e.revealHorizontalRightPadding = 88] = "revealHorizontalRightPadding",
        e[e.roundedSelection = 89] = "roundedSelection",
        e[e.rulers = 90] = "rulers",
        e[e.scrollbar = 91] = "scrollbar",
        e[e.scrollBeyondLastColumn = 92] = "scrollBeyondLastColumn",
        e[e.scrollBeyondLastLine = 93] = "scrollBeyondLastLine",
        e[e.scrollPredominantAxis = 94] = "scrollPredominantAxis",
        e[e.selectionClipboard = 95] = "selectionClipboard",
        e[e.selectionHighlight = 96] = "selectionHighlight",
        e[e.selectOnLineNumbers = 97] = "selectOnLineNumbers",
        e[e.showFoldingControls = 98] = "showFoldingControls",
        e[e.showUnused = 99] = "showUnused",
        e[e.snippetSuggestions = 100] = "snippetSuggestions",
        e[e.smartSelect = 101] = "smartSelect",
        e[e.smoothScrolling = 102] = "smoothScrolling",
        e[e.stickyTabStops = 103] = "stickyTabStops",
        e[e.stopRenderingLineAfter = 104] = "stopRenderingLineAfter",
        e[e.suggest = 105] = "suggest",
        e[e.suggestFontSize = 106] = "suggestFontSize",
        e[e.suggestLineHeight = 107] = "suggestLineHeight",
        e[e.suggestOnTriggerCharacters = 108] = "suggestOnTriggerCharacters",
        e[e.suggestSelection = 109] = "suggestSelection",
        e[e.tabCompletion = 110] = "tabCompletion",
        e[e.tabIndex = 111] = "tabIndex",
        e[e.unusualLineTerminators = 112] = "unusualLineTerminators",
        e[e.useShadowDOM = 113] = "useShadowDOM",
        e[e.useTabStops = 114] = "useTabStops",
        e[e.wordSeparators = 115] = "wordSeparators",
        e[e.wordWrap = 116] = "wordWrap",
        e[e.wordWrapBreakAfterCharacters = 117] = "wordWrapBreakAfterCharacters",
        e[e.wordWrapBreakBeforeCharacters = 118] = "wordWrapBreakBeforeCharacters",
        e[e.wordWrapColumn = 119] = "wordWrapColumn",
        e[e.wordWrapOverride1 = 120] = "wordWrapOverride1",
        e[e.wordWrapOverride2 = 121] = "wordWrapOverride2",
        e[e.wrappingIndent = 122] = "wrappingIndent",
        e[e.wrappingStrategy = 123] = "wrappingStrategy",
        e[e.showDeprecated = 124] = "showDeprecated",
        e[e.inlayHints = 125] = "inlayHints",
        e[e.editorClassName = 126] = "editorClassName",
        e[e.pixelRatio = 127] = "pixelRatio",
        e[e.tabFocusMode = 128] = "tabFocusMode",
        e[e.layoutInfo = 129] = "layoutInfo",
        e[e.wrappingInfo = 130] = "wrappingInfo"
    }
    )(Zn || (Zn = {}));
    var Kn;
    (function(e) {
        e[e.TextDefined = 0] = "TextDefined",
        e[e.LF = 1] = "LF",
        e[e.CRLF = 2] = "CRLF"
    }
    )(Kn || (Kn = {}));
    var ei;
    (function(e) {
        e[e.LF = 0] = "LF",
        e[e.CRLF = 1] = "CRLF"
    }
    )(ei || (ei = {}));
    var ti;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Indent = 1] = "Indent",
        e[e.IndentOutdent = 2] = "IndentOutdent",
        e[e.Outdent = 3] = "Outdent"
    }
    )(ti || (ti = {}));
    var ni;
    (function(e) {
        e[e.Other = 0] = "Other",
        e[e.Type = 1] = "Type",
        e[e.Parameter = 2] = "Parameter"
    }
    )(ni || (ni = {}));
    var ii;
    (function(e) {
        e[e.Automatic = 0] = "Automatic",
        e[e.Explicit = 1] = "Explicit"
    }
    )(ii || (ii = {}));
    var Jt;
    (function(e) {
        e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout",
        e[e.Unknown = 0] = "Unknown",
        e[e.Backspace = 1] = "Backspace",
        e[e.Tab = 2] = "Tab",
        e[e.Enter = 3] = "Enter",
        e[e.Shift = 4] = "Shift",
        e[e.Ctrl = 5] = "Ctrl",
        e[e.Alt = 6] = "Alt",
        e[e.PauseBreak = 7] = "PauseBreak",
        e[e.CapsLock = 8] = "CapsLock",
        e[e.Escape = 9] = "Escape",
        e[e.Space = 10] = "Space",
        e[e.PageUp = 11] = "PageUp",
        e[e.PageDown = 12] = "PageDown",
        e[e.End = 13] = "End",
        e[e.Home = 14] = "Home",
        e[e.LeftArrow = 15] = "LeftArrow",
        e[e.UpArrow = 16] = "UpArrow",
        e[e.RightArrow = 17] = "RightArrow",
        e[e.DownArrow = 18] = "DownArrow",
        e[e.Insert = 19] = "Insert",
        e[e.Delete = 20] = "Delete",
        e[e.KEY_0 = 21] = "KEY_0",
        e[e.KEY_1 = 22] = "KEY_1",
        e[e.KEY_2 = 23] = "KEY_2",
        e[e.KEY_3 = 24] = "KEY_3",
        e[e.KEY_4 = 25] = "KEY_4",
        e[e.KEY_5 = 26] = "KEY_5",
        e[e.KEY_6 = 27] = "KEY_6",
        e[e.KEY_7 = 28] = "KEY_7",
        e[e.KEY_8 = 29] = "KEY_8",
        e[e.KEY_9 = 30] = "KEY_9",
        e[e.KEY_A = 31] = "KEY_A",
        e[e.KEY_B = 32] = "KEY_B",
        e[e.KEY_C = 33] = "KEY_C",
        e[e.KEY_D = 34] = "KEY_D",
        e[e.KEY_E = 35] = "KEY_E",
        e[e.KEY_F = 36] = "KEY_F",
        e[e.KEY_G = 37] = "KEY_G",
        e[e.KEY_H = 38] = "KEY_H",
        e[e.KEY_I = 39] = "KEY_I",
        e[e.KEY_J = 40] = "KEY_J",
        e[e.KEY_K = 41] = "KEY_K",
        e[e.KEY_L = 42] = "KEY_L",
        e[e.KEY_M = 43] = "KEY_M",
        e[e.KEY_N = 44] = "KEY_N",
        e[e.KEY_O = 45] = "KEY_O",
        e[e.KEY_P = 46] = "KEY_P",
        e[e.KEY_Q = 47] = "KEY_Q",
        e[e.KEY_R = 48] = "KEY_R",
        e[e.KEY_S = 49] = "KEY_S",
        e[e.KEY_T = 50] = "KEY_T",
        e[e.KEY_U = 51] = "KEY_U",
        e[e.KEY_V = 52] = "KEY_V",
        e[e.KEY_W = 53] = "KEY_W",
        e[e.KEY_X = 54] = "KEY_X",
        e[e.KEY_Y = 55] = "KEY_Y",
        e[e.KEY_Z = 56] = "KEY_Z",
        e[e.Meta = 57] = "Meta",
        e[e.ContextMenu = 58] = "ContextMenu",
        e[e.F1 = 59] = "F1",
        e[e.F2 = 60] = "F2",
        e[e.F3 = 61] = "F3",
        e[e.F4 = 62] = "F4",
        e[e.F5 = 63] = "F5",
        e[e.F6 = 64] = "F6",
        e[e.F7 = 65] = "F7",
        e[e.F8 = 66] = "F8",
        e[e.F9 = 67] = "F9",
        e[e.F10 = 68] = "F10",
        e[e.F11 = 69] = "F11",
        e[e.F12 = 70] = "F12",
        e[e.F13 = 71] = "F13",
        e[e.F14 = 72] = "F14",
        e[e.F15 = 73] = "F15",
        e[e.F16 = 74] = "F16",
        e[e.F17 = 75] = "F17",
        e[e.F18 = 76] = "F18",
        e[e.F19 = 77] = "F19",
        e[e.NumLock = 78] = "NumLock",
        e[e.ScrollLock = 79] = "ScrollLock",
        e[e.US_SEMICOLON = 80] = "US_SEMICOLON",
        e[e.US_EQUAL = 81] = "US_EQUAL",
        e[e.US_COMMA = 82] = "US_COMMA",
        e[e.US_MINUS = 83] = "US_MINUS",
        e[e.US_DOT = 84] = "US_DOT",
        e[e.US_SLASH = 85] = "US_SLASH",
        e[e.US_BACKTICK = 86] = "US_BACKTICK",
        e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET",
        e[e.US_BACKSLASH = 88] = "US_BACKSLASH",
        e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET",
        e[e.US_QUOTE = 90] = "US_QUOTE",
        e[e.OEM_8 = 91] = "OEM_8",
        e[e.OEM_102 = 92] = "OEM_102",
        e[e.NUMPAD_0 = 93] = "NUMPAD_0",
        e[e.NUMPAD_1 = 94] = "NUMPAD_1",
        e[e.NUMPAD_2 = 95] = "NUMPAD_2",
        e[e.NUMPAD_3 = 96] = "NUMPAD_3",
        e[e.NUMPAD_4 = 97] = "NUMPAD_4",
        e[e.NUMPAD_5 = 98] = "NUMPAD_5",
        e[e.NUMPAD_6 = 99] = "NUMPAD_6",
        e[e.NUMPAD_7 = 100] = "NUMPAD_7",
        e[e.NUMPAD_8 = 101] = "NUMPAD_8",
        e[e.NUMPAD_9 = 102] = "NUMPAD_9",
        e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY",
        e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD",
        e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR",
        e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT",
        e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL",
        e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE",
        e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION",
        e[e.ABNT_C1 = 110] = "ABNT_C1",
        e[e.ABNT_C2 = 111] = "ABNT_C2",
        e[e.MAX_VALUE = 112] = "MAX_VALUE"
    }
    )(Jt || (Jt = {}));
    var Zt;
    (function(e) {
        e[e.Hint = 1] = "Hint",
        e[e.Info = 2] = "Info",
        e[e.Warning = 4] = "Warning",
        e[e.Error = 8] = "Error"
    }
    )(Zt || (Zt = {}));
    var Kt;
    (function(e) {
        e[e.Unnecessary = 1] = "Unnecessary",
        e[e.Deprecated = 2] = "Deprecated"
    }
    )(Kt || (Kt = {}));
    var ri;
    (function(e) {
        e[e.Inline = 1] = "Inline",
        e[e.Gutter = 2] = "Gutter"
    }
    )(ri || (ri = {}));
    var ai;
    (function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN",
        e[e.TEXTAREA = 1] = "TEXTAREA",
        e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN",
        e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS",
        e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS",
        e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE",
        e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT",
        e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY",
        e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE",
        e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET",
        e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER",
        e[e.SCROLLBAR = 11] = "SCROLLBAR",
        e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET",
        e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR"
    }
    )(ai || (ai = {}));
    var si;
    (function(e) {
        e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER",
        e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER",
        e[e.TOP_CENTER = 2] = "TOP_CENTER"
    }
    )(si || (si = {}));
    var oi;
    (function(e) {
        e[e.Left = 1] = "Left",
        e[e.Center = 2] = "Center",
        e[e.Right = 4] = "Right",
        e[e.Full = 7] = "Full"
    }
    )(oi || (oi = {}));
    var li;
    (function(e) {
        e[e.Off = 0] = "Off",
        e[e.On = 1] = "On",
        e[e.Relative = 2] = "Relative",
        e[e.Interval = 3] = "Interval",
        e[e.Custom = 4] = "Custom"
    }
    )(li || (li = {}));
    var ui;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Text = 1] = "Text",
        e[e.Blocks = 2] = "Blocks"
    }
    )(ui || (ui = {}));
    var hi;
    (function(e) {
        e[e.Smooth = 0] = "Smooth",
        e[e.Immediate = 1] = "Immediate"
    }
    )(hi || (hi = {}));
    var ci;
    (function(e) {
        e[e.Auto = 1] = "Auto",
        e[e.Hidden = 2] = "Hidden",
        e[e.Visible = 3] = "Visible"
    }
    )(ci || (ci = {}));
    var en;
    (function(e) {
        e[e.LTR = 0] = "LTR",
        e[e.RTL = 1] = "RTL"
    }
    )(en || (en = {}));
    var di;
    (function(e) {
        e[e.Invoke = 1] = "Invoke",
        e[e.TriggerCharacter = 2] = "TriggerCharacter",
        e[e.ContentChange = 3] = "ContentChange"
    }
    )(di || (di = {}));
    var mi;
    (function(e) {
        e[e.File = 0] = "File",
        e[e.Module = 1] = "Module",
        e[e.Namespace = 2] = "Namespace",
        e[e.Package = 3] = "Package",
        e[e.Class = 4] = "Class",
        e[e.Method = 5] = "Method",
        e[e.Property = 6] = "Property",
        e[e.Field = 7] = "Field",
        e[e.Constructor = 8] = "Constructor",
        e[e.Enum = 9] = "Enum",
        e[e.Interface = 10] = "Interface",
        e[e.Function = 11] = "Function",
        e[e.Variable = 12] = "Variable",
        e[e.Constant = 13] = "Constant",
        e[e.String = 14] = "String",
        e[e.Number = 15] = "Number",
        e[e.Boolean = 16] = "Boolean",
        e[e.Array = 17] = "Array",
        e[e.Object = 18] = "Object",
        e[e.Key = 19] = "Key",
        e[e.Null = 20] = "Null",
        e[e.EnumMember = 21] = "EnumMember",
        e[e.Struct = 22] = "Struct",
        e[e.Event = 23] = "Event",
        e[e.Operator = 24] = "Operator",
        e[e.TypeParameter = 25] = "TypeParameter"
    }
    )(mi || (mi = {}));
    var fi;
    (function(e) {
        e[e.Deprecated = 1] = "Deprecated"
    }
    )(fi || (fi = {}));
    var pi;
    (function(e) {
        e[e.Hidden = 0] = "Hidden",
        e[e.Blink = 1] = "Blink",
        e[e.Smooth = 2] = "Smooth",
        e[e.Phase = 3] = "Phase",
        e[e.Expand = 4] = "Expand",
        e[e.Solid = 5] = "Solid"
    }
    )(pi || (pi = {}));
    var gi;
    (function(e) {
        e[e.Line = 1] = "Line",
        e[e.Block = 2] = "Block",
        e[e.Underline = 3] = "Underline",
        e[e.LineThin = 4] = "LineThin",
        e[e.BlockOutline = 5] = "BlockOutline",
        e[e.UnderlineThin = 6] = "UnderlineThin"
    }
    )(gi || (gi = {}));
    var bi;
    (function(e) {
        e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges",
        e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges",
        e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore",
        e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter"
    }
    )(bi || (bi = {}));
    var _i;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Same = 1] = "Same",
        e[e.Indent = 2] = "Indent",
        e[e.DeepIndent = 3] = "DeepIndent"
    }
    )(_i || (_i = {}));
    class Je {
        static chord(t, n) {
            return Ta(t, n)
        }
    }
    Je.CtrlCmd = 2048,
    Je.Shift = 1024,
    Je.Alt = 512,
    Je.WinCtrl = 256;
    function Sa() {
        return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: ya,
            Emitter: Ne,
            KeyCode: Jt,
            KeyMod: Je,
            Position: he,
            Range: J,
            Selection: fe,
            SelectionDirection: en,
            MarkerSeverity: Zt,
            MarkerTag: Kt,
            Uri: Re,
            Token: ka
        }
    }
    var Fe = function(e, t, n, r) {
        function i(a) {
            return a instanceof n ? a : new n(function(o) {
                o(a)
            }
            )
        }
        return new (n || (n = Promise))(function(a, o) {
            function u(h) {
                try {
                    l(r.next(h))
                } catch (c) {
                    o(c)
                }
            }
            function s(h) {
                try {
                    l(r.throw(h))
                } catch (c) {
                    o(c)
                }
            }
            function l(h) {
                h.done ? a(h.value) : i(h.value).then(u, s)
            }
            l((r = r.apply(e, t || [])).next())
        }
        )
    };
    class Aa extends la {
        get uri() {
            return this._uri
        }
        get eol() {
            return this._eol
        }
        getValue() {
            return this.getText()
        }
        getLinesContent() {
            return this._lines.slice(0)
        }
        getLineCount() {
            return this._lines.length
        }
        getLineContent(t) {
            return this._lines[t - 1]
        }
        getWordAtPosition(t, n) {
            let r = Wn(t.column, da(n), this._lines[t.lineNumber - 1], 0);
            return r ? new J(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn) : null
        }
        words(t) {
            const n = this._lines
              , r = this._wordenize.bind(this);
            let i = 0
              , a = ""
              , o = 0
              , u = [];
            return {
                *[Symbol.iterator]() {
                    for (; ; )
                        if (o < u.length) {
                            const s = a.substring(u[o].start, u[o].end);
                            o += 1,
                            yield s
                        } else if (i < n.length)
                            a = n[i],
                            u = r(a, t),
                            o = 0,
                            i += 1;
                        else
                            break
                }
            }
        }
        getLineWords(t, n) {
            let r = this._lines[t - 1]
              , i = this._wordenize(r, n)
              , a = [];
            for (const o of i)
                a.push({
                    word: r.substring(o.start, o.end),
                    startColumn: o.start + 1,
                    endColumn: o.end + 1
                });
            return a
        }
        _wordenize(t, n) {
            const r = [];
            let i;
            for (n.lastIndex = 0; (i = n.exec(t)) && i[0].length !== 0; )
                r.push({
                    start: i.index,
                    end: i.index + i[0].length
                });
            return r
        }
        getValueInRange(t) {
            if (t = this._validateRange(t),
            t.startLineNumber === t.endLineNumber)
                return this._lines[t.startLineNumber - 1].substring(t.startColumn - 1, t.endColumn - 1);
            let n = this._eol
              , r = t.startLineNumber - 1
              , i = t.endLineNumber - 1
              , a = [];
            a.push(this._lines[r].substring(t.startColumn - 1));
            for (let o = r + 1; o < i; o++)
                a.push(this._lines[o]);
            return a.push(this._lines[i].substring(0, t.endColumn - 1)),
            a.join(n)
        }
        offsetAt(t) {
            return t = this._validatePosition(t),
            this._ensureLineStarts(),
            this._lineStarts.getPrefixSum(t.lineNumber - 2) + (t.column - 1)
        }
        positionAt(t) {
            t = Math.floor(t),
            t = Math.max(0, t),
            this._ensureLineStarts();
            let n = this._lineStarts.getIndexOf(t)
              , r = this._lines[n.index].length;
            return {
                lineNumber: 1 + n.index,
                column: 1 + Math.min(n.remainder, r)
            }
        }
        _validateRange(t) {
            const n = this._validatePosition({
                lineNumber: t.startLineNumber,
                column: t.startColumn
            })
              , r = this._validatePosition({
                lineNumber: t.endLineNumber,
                column: t.endColumn
            });
            return n.lineNumber !== t.startLineNumber || n.column !== t.startColumn || r.lineNumber !== t.endLineNumber || r.column !== t.endColumn ? {
                startLineNumber: n.lineNumber,
                startColumn: n.column,
                endLineNumber: r.lineNumber,
                endColumn: r.column
            } : t
        }
        _validatePosition(t) {
            if (!he.isIPosition(t))
                throw new Error("bad position");
            let {lineNumber: n, column: r} = t
              , i = !1;
            if (n < 1)
                n = 1,
                r = 1,
                i = !0;
            else if (n > this._lines.length)
                n = this._lines.length,
                r = this._lines[n - 1].length + 1,
                i = !0;
            else {
                let a = this._lines[n - 1].length + 1;
                r < 1 ? (r = 1,
                i = !0) : r > a && (r = a,
                i = !0)
            }
            return i ? {
                lineNumber: n,
                column: r
            } : t
        }
    }
    class qe {
        constructor(t, n) {
            this._host = t,
            this._models = Object.create(null),
            this._foreignModuleFactory = n,
            this._foreignModule = null
        }
        dispose() {
            this._models = Object.create(null)
        }
        _getModel(t) {
            return this._models[t]
        }
        _getModels() {
            let t = [];
            return Object.keys(this._models).forEach(n => t.push(this._models[n])),
            t
        }
        acceptNewModel(t) {
            this._models[t.url] = new Aa(Re.parse(t.url),t.lines,t.EOL,t.versionId)
        }
        acceptModelChanged(t, n) {
            if (!this._models[t])
                return;
            this._models[t].onEvents(n)
        }
        acceptRemovedModel(t) {
            !this._models[t] || delete this._models[t]
        }
        computeDiff(t, n, r, i) {
            return Fe(this, void 0, void 0, function*() {
                const a = this._getModel(t)
                  , o = this._getModel(n);
                if (!a || !o)
                    return null;
                const u = a.getLinesContent()
                  , s = o.getLinesContent()
                  , h = new aa(u,s,{
                    shouldComputeCharChanges: !0,
                    shouldPostProcessCharChanges: !0,
                    shouldIgnoreTrimWhitespace: r,
                    shouldMakePrettyDiff: !0,
                    maxComputationTime: i
                }).computeDiff()
                  , c = h.changes.length > 0 ? !1 : this._modelsAreIdentical(a, o);
                return {
                    quitEarly: h.quitEarly,
                    identical: c,
                    changes: h.changes
                }
            })
        }
        _modelsAreIdentical(t, n) {
            const r = t.getLineCount()
              , i = n.getLineCount();
            if (r !== i)
                return !1;
            for (let a = 1; a <= r; a++) {
                const o = t.getLineContent(a)
                  , u = n.getLineContent(a);
                if (o !== u)
                    return !1
            }
            return !0
        }
        computeMoreMinimalEdits(t, n) {
            return Fe(this, void 0, void 0, function*() {
                const r = this._getModel(t);
                if (!r)
                    return n;
                const i = [];
                let a;
                n = n.slice(0).sort( (o, u) => {
                    if (o.range && u.range)
                        return J.compareRangesUsingStarts(o.range, u.range);
                    let s = o.range ? 0 : 1
                      , l = u.range ? 0 : 1;
                    return s - l
                }
                );
                for (let {range: o, text: u, eol: s} of n) {
                    if (typeof s == "number" && (a = s),
                    J.isEmpty(o) && !u)
                        continue;
                    const l = r.getValueInRange(o);
                    if (u = u.replace(/\r\n|\n|\r/g, r.eol),
                    l === u)
                        continue;
                    if (Math.max(u.length, l.length) > qe._diffLimit) {
                        i.push({
                            range: o,
                            text: u
                        });
                        continue
                    }
                    const h = qr(l, u, !1)
                      , c = r.offsetAt(J.lift(o).getStartPosition());
                    for (const d of h) {
                        const p = r.positionAt(c + d.originalStart)
                          , _ = r.positionAt(c + d.originalStart + d.originalLength)
                          , b = {
                            text: u.substr(d.modifiedStart, d.modifiedLength),
                            range: {
                                startLineNumber: p.lineNumber,
                                startColumn: p.column,
                                endLineNumber: _.lineNumber,
                                endColumn: _.column
                            }
                        };
                        r.getValueInRange(b.range) !== b.text && i.push(b)
                    }
                }
                return typeof a == "number" && i.push({
                    eol: a,
                    text: "",
                    range: {
                        startLineNumber: 0,
                        startColumn: 0,
                        endLineNumber: 0,
                        endColumn: 0
                    }
                }),
                i
            })
        }
        computeLinks(t) {
            return Fe(this, void 0, void 0, function*() {
                let n = this._getModel(t);
                return n ? va(n) : null
            })
        }
        textualSuggest(t, n, r, i) {
            return Fe(this, void 0, void 0, function*() {
                const a = new ht(!0)
                  , o = new RegExp(r,i)
                  , u = new Set;
                e: for (let s of t) {
                    const l = this._getModel(s);
                    if (!!l) {
                        for (let h of l.words(o))
                            if (!(h === n || !isNaN(Number(h))) && (u.add(h),
                            u.size > qe._suggestionsLimit))
                                break e
                    }
                }
                return {
                    words: Array.from(u),
                    duration: a.elapsed()
                }
            })
        }
        computeWordRanges(t, n, r, i) {
            return Fe(this, void 0, void 0, function*() {
                let a = this._getModel(t);
                if (!a)
                    return Object.create(null);
                const o = new RegExp(r,i)
                  , u = Object.create(null);
                for (let s = n.startLineNumber; s < n.endLineNumber; s++) {
                    let l = a.getLineWords(s, o);
                    for (const h of l) {
                        if (!isNaN(Number(h.word)))
                            continue;
                        let c = u[h.word];
                        c || (c = [],
                        u[h.word] = c),
                        c.push({
                            startLineNumber: s,
                            startColumn: h.startColumn,
                            endLineNumber: s,
                            endColumn: h.endColumn
                        })
                    }
                }
                return u
            })
        }
        navigateValueSet(t, n, r, i, a) {
            return Fe(this, void 0, void 0, function*() {
                let o = this._getModel(t);
                if (!o)
                    return null;
                let u = new RegExp(i,a);
                n.startColumn === n.endColumn && (n = {
                    startLineNumber: n.startLineNumber,
                    startColumn: n.startColumn,
                    endLineNumber: n.endLineNumber,
                    endColumn: n.endColumn + 1
                });
                let s = o.getValueInRange(n)
                  , l = o.getWordAtPosition({
                    lineNumber: n.startLineNumber,
                    column: n.startColumn
                }, u);
                if (!l)
                    return null;
                let h = o.getValueInRange(l);
                return Gt.INSTANCE.navigateValueSet(n, s, l, h, r)
            })
        }
        loadForeignModule(t, n, r) {
            let o = {
                host: Tn(r, (u, s) => this._host.fhr(u, s)),
                getMirrorModels: () => this._getModels()
            };
            return this._foreignModuleFactory ? (this._foreignModule = this._foreignModuleFactory(o, n),
            Promise.resolve(zt(this._foreignModule))) : Promise.reject(new Error("Unexpected usage"))
        }
        fmr(t, n) {
            if (!this._foreignModule || typeof this._foreignModule[t] != "function")
                return Promise.reject(new Error("Missing requestHandler or method: " + t));
            try {
                return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, n))
            } catch (r) {
                return Promise.reject(r)
            }
        }
    }
    qe._diffLimit = 1e5,
    qe._suggestionsLimit = 1e4,
    typeof importScripts == "function" && (ie.monaco = Sa());
    let tn = !1;
    function vi(e) {
        if (tn)
            return;
        tn = !0;
        const t = new Ir(n => {
            self.postMessage(n)
        }
        ,n => new qe(n,e));
        self.onmessage = n => {
            t.onmessage(n.data)
        }
    }
    self.onmessage = e => {
        tn || vi(null)
    }
    ;
    function La(e, t) {
        var n;
        return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, function(r, i) {
            var a = i[0];
            return typeof t[a] != "undefined" ? t[a] : r
        }),
        n
    }
    function Ca(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
        return La(t, n)
    }
    function nn(e) {
        return Ca
    }
    var wi;
    (function(e) {
        e.MIN_VALUE = -2147483648,
        e.MAX_VALUE = 2147483647
    }
    )(wi || (wi = {}));
    var ft;
    (function(e) {
        e.MIN_VALUE = 0,
        e.MAX_VALUE = 2147483647
    }
    )(ft || (ft = {}));
    var ne;
    (function(e) {
        function t(r, i) {
            return r === Number.MAX_VALUE && (r = ft.MAX_VALUE),
            i === Number.MAX_VALUE && (i = ft.MAX_VALUE),
            {
                line: r,
                character: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.objectLiteral(i) && S.uinteger(i.line) && S.uinteger(i.character)
        }
        e.is = n
    }
    )(ne || (ne = {}));
    var G;
    (function(e) {
        function t(r, i, a, o) {
            if (S.uinteger(r) && S.uinteger(i) && S.uinteger(a) && S.uinteger(o))
                return {
                    start: ne.create(r, i),
                    end: ne.create(a, o)
                };
            if (ne.is(r) && ne.is(i))
                return {
                    start: r,
                    end: i
                };
            throw new Error("Range#create called with invalid arguments[" + r + ", " + i + ", " + a + ", " + o + "]")
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.objectLiteral(i) && ne.is(i.start) && ne.is(i.end)
        }
        e.is = n
    }
    )(G || (G = {}));
    var pt;
    (function(e) {
        function t(r, i) {
            return {
                uri: r,
                range: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && G.is(i.range) && (S.string(i.uri) || S.undefined(i.uri))
        }
        e.is = n
    }
    )(pt || (pt = {}));
    var yi;
    (function(e) {
        function t(r, i, a, o) {
            return {
                targetUri: r,
                targetRange: i,
                targetSelectionRange: a,
                originSelectionRange: o
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && G.is(i.targetRange) && S.string(i.targetUri) && (G.is(i.targetSelectionRange) || S.undefined(i.targetSelectionRange)) && (G.is(i.originSelectionRange) || S.undefined(i.originSelectionRange))
        }
        e.is = n
    }
    )(yi || (yi = {}));
    var rn;
    (function(e) {
        function t(r, i, a, o) {
            return {
                red: r,
                green: i,
                blue: a,
                alpha: o
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.numberRange(i.red, 0, 1) && S.numberRange(i.green, 0, 1) && S.numberRange(i.blue, 0, 1) && S.numberRange(i.alpha, 0, 1)
        }
        e.is = n
    }
    )(rn || (rn = {}));
    var Ti;
    (function(e) {
        function t(r, i) {
            return {
                range: r,
                color: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return G.is(i.range) && rn.is(i.color)
        }
        e.is = n
    }
    )(Ti || (Ti = {}));
    var ki;
    (function(e) {
        function t(r, i, a) {
            return {
                label: r,
                textEdit: i,
                additionalTextEdits: a
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.string(i.label) && (S.undefined(i.textEdit) || K.is(i)) && (S.undefined(i.additionalTextEdits) || S.typedArray(i.additionalTextEdits, K.is))
        }
        e.is = n
    }
    )(ki || (ki = {}));
    var gt;
    (function(e) {
        e.Comment = "comment",
        e.Imports = "imports",
        e.Region = "region"
    }
    )(gt || (gt = {}));
    var Si;
    (function(e) {
        function t(r, i, a, o, u) {
            var s = {
                startLine: r,
                endLine: i
            };
            return S.defined(a) && (s.startCharacter = a),
            S.defined(o) && (s.endCharacter = o),
            S.defined(u) && (s.kind = u),
            s
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.uinteger(i.startLine) && S.uinteger(i.startLine) && (S.undefined(i.startCharacter) || S.uinteger(i.startCharacter)) && (S.undefined(i.endCharacter) || S.uinteger(i.endCharacter)) && (S.undefined(i.kind) || S.string(i.kind))
        }
        e.is = n
    }
    )(Si || (Si = {}));
    var an;
    (function(e) {
        function t(r, i) {
            return {
                location: r,
                message: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && pt.is(i.location) && S.string(i.message)
        }
        e.is = n
    }
    )(an || (an = {}));
    var Ai;
    (function(e) {
        e.Error = 1,
        e.Warning = 2,
        e.Information = 3,
        e.Hint = 4
    }
    )(Ai || (Ai = {}));
    var Li;
    (function(e) {
        e.Unnecessary = 1,
        e.Deprecated = 2
    }
    )(Li || (Li = {}));
    var Ci;
    (function(e) {
        function t(n) {
            var r = n;
            return r != null && S.string(r.href)
        }
        e.is = t
    }
    )(Ci || (Ci = {}));
    var bt;
    (function(e) {
        function t(r, i, a, o, u, s) {
            var l = {
                range: r,
                message: i
            };
            return S.defined(a) && (l.severity = a),
            S.defined(o) && (l.code = o),
            S.defined(u) && (l.source = u),
            S.defined(s) && (l.relatedInformation = s),
            l
        }
        e.create = t;
        function n(r) {
            var i, a = r;
            return S.defined(a) && G.is(a.range) && S.string(a.message) && (S.number(a.severity) || S.undefined(a.severity)) && (S.integer(a.code) || S.string(a.code) || S.undefined(a.code)) && (S.undefined(a.codeDescription) || S.string((i = a.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (S.string(a.source) || S.undefined(a.source)) && (S.undefined(a.relatedInformation) || S.typedArray(a.relatedInformation, an.is))
        }
        e.is = n
    }
    )(bt || (bt = {}));
    var Ze;
    (function(e) {
        function t(r, i) {
            for (var a = [], o = 2; o < arguments.length; o++)
                a[o - 2] = arguments[o];
            var u = {
                title: r,
                command: i
            };
            return S.defined(a) && a.length > 0 && (u.arguments = a),
            u
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && S.string(i.title) && S.string(i.command)
        }
        e.is = n
    }
    )(Ze || (Ze = {}));
    var K;
    (function(e) {
        function t(a, o) {
            return {
                range: a,
                newText: o
            }
        }
        e.replace = t;
        function n(a, o) {
            return {
                range: {
                    start: a,
                    end: a
                },
                newText: o
            }
        }
        e.insert = n;
        function r(a) {
            return {
                range: a,
                newText: ""
            }
        }
        e.del = r;
        function i(a) {
            var o = a;
            return S.objectLiteral(o) && S.string(o.newText) && G.is(o.range)
        }
        e.is = i
    }
    )(K || (K = {}));
    var Oe;
    (function(e) {
        function t(r, i, a) {
            var o = {
                label: r
            };
            return i !== void 0 && (o.needsConfirmation = i),
            a !== void 0 && (o.description = a),
            o
        }
        e.create = t;
        function n(r) {
            var i = r;
            return i !== void 0 && S.objectLiteral(i) && S.string(i.label) && (S.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (S.string(i.description) || i.description === void 0)
        }
        e.is = n
    }
    )(Oe || (Oe = {}));
    var re;
    (function(e) {
        function t(n) {
            var r = n;
            return typeof r == "string"
        }
        e.is = t
    }
    )(re || (re = {}));
    var Le;
    (function(e) {
        function t(a, o, u) {
            return {
                range: a,
                newText: o,
                annotationId: u
            }
        }
        e.replace = t;
        function n(a, o, u) {
            return {
                range: {
                    start: a,
                    end: a
                },
                newText: o,
                annotationId: u
            }
        }
        e.insert = n;
        function r(a, o) {
            return {
                range: a,
                newText: "",
                annotationId: o
            }
        }
        e.del = r;
        function i(a) {
            var o = a;
            return K.is(o) && (Oe.is(o.annotationId) || re.is(o.annotationId))
        }
        e.is = i
    }
    )(Le || (Le = {}));
    var _t;
    (function(e) {
        function t(r, i) {
            return {
                textDocument: r,
                edits: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && wt.is(i.textDocument) && Array.isArray(i.edits)
        }
        e.is = n
    }
    )(_t || (_t = {}));
    var Ke;
    (function(e) {
        function t(r, i, a) {
            var o = {
                kind: "create",
                uri: r
            };
            return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (o.options = i),
            a !== void 0 && (o.annotationId = a),
            o
        }
        e.create = t;
        function n(r) {
            var i = r;
            return i && i.kind === "create" && S.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || S.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || S.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || re.is(i.annotationId))
        }
        e.is = n
    }
    )(Ke || (Ke = {}));
    var et;
    (function(e) {
        function t(r, i, a, o) {
            var u = {
                kind: "rename",
                oldUri: r,
                newUri: i
            };
            return a !== void 0 && (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) && (u.options = a),
            o !== void 0 && (u.annotationId = o),
            u
        }
        e.create = t;
        function n(r) {
            var i = r;
            return i && i.kind === "rename" && S.string(i.oldUri) && S.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || S.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || S.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || re.is(i.annotationId))
        }
        e.is = n
    }
    )(et || (et = {}));
    var tt;
    (function(e) {
        function t(r, i, a) {
            var o = {
                kind: "delete",
                uri: r
            };
            return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (o.options = i),
            a !== void 0 && (o.annotationId = a),
            o
        }
        e.create = t;
        function n(r) {
            var i = r;
            return i && i.kind === "delete" && S.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || S.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || S.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || re.is(i.annotationId))
        }
        e.is = n
    }
    )(tt || (tt = {}));
    var sn;
    (function(e) {
        function t(n) {
            var r = n;
            return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every(function(i) {
                return S.string(i.kind) ? Ke.is(i) || et.is(i) || tt.is(i) : _t.is(i)
            }))
        }
        e.is = t
    }
    )(sn || (sn = {}));
    var vt = function() {
        function e(t, n) {
            this.edits = t,
            this.changeAnnotations = n
        }
        return e.prototype.insert = function(t, n, r) {
            var i, a;
            if (r === void 0 ? i = K.insert(t, n) : re.is(r) ? (a = r,
            i = Le.insert(t, n, r)) : (this.assertChangeAnnotations(this.changeAnnotations),
            a = this.changeAnnotations.manage(r),
            i = Le.insert(t, n, a)),
            this.edits.push(i),
            a !== void 0)
                return a
        }
        ,
        e.prototype.replace = function(t, n, r) {
            var i, a;
            if (r === void 0 ? i = K.replace(t, n) : re.is(r) ? (a = r,
            i = Le.replace(t, n, r)) : (this.assertChangeAnnotations(this.changeAnnotations),
            a = this.changeAnnotations.manage(r),
            i = Le.replace(t, n, a)),
            this.edits.push(i),
            a !== void 0)
                return a
        }
        ,
        e.prototype.delete = function(t, n) {
            var r, i;
            if (n === void 0 ? r = K.del(t) : re.is(n) ? (i = n,
            r = Le.del(t, n)) : (this.assertChangeAnnotations(this.changeAnnotations),
            i = this.changeAnnotations.manage(n),
            r = Le.del(t, i)),
            this.edits.push(r),
            i !== void 0)
                return i
        }
        ,
        e.prototype.add = function(t) {
            this.edits.push(t)
        }
        ,
        e.prototype.all = function() {
            return this.edits
        }
        ,
        e.prototype.clear = function() {
            this.edits.splice(0, this.edits.length)
        }
        ,
        e.prototype.assertChangeAnnotations = function(t) {
            if (t === void 0)
                throw new Error("Text edit change is not configured to manage change annotations.")
        }
        ,
        e
    }()
      , xi = function() {
        function e(t) {
            this._annotations = t === void 0 ? Object.create(null) : t,
            this._counter = 0,
            this._size = 0
        }
        return e.prototype.all = function() {
            return this._annotations
        }
        ,
        Object.defineProperty(e.prototype, "size", {
            get: function() {
                return this._size
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.manage = function(t, n) {
            var r;
            if (re.is(t) ? r = t : (r = this.nextId(),
            n = t),
            this._annotations[r] !== void 0)
                throw new Error("Id " + r + " is already in use.");
            if (n === void 0)
                throw new Error("No annotation provided for id " + r);
            return this._annotations[r] = n,
            this._size++,
            r
        }
        ,
        e.prototype.nextId = function() {
            return this._counter++,
            this._counter.toString()
        }
        ,
        e
    }();
    (function() {
        function e(t) {
            var n = this;
            this._textEditChanges = Object.create(null),
            t !== void 0 ? (this._workspaceEdit = t,
            t.documentChanges ? (this._changeAnnotations = new xi(t.changeAnnotations),
            t.changeAnnotations = this._changeAnnotations.all(),
            t.documentChanges.forEach(function(r) {
                if (_t.is(r)) {
                    var i = new vt(r.edits,n._changeAnnotations);
                    n._textEditChanges[r.textDocument.uri] = i
                }
            })) : t.changes && Object.keys(t.changes).forEach(function(r) {
                var i = new vt(t.changes[r]);
                n._textEditChanges[r] = i
            })) : this._workspaceEdit = {}
        }
        return Object.defineProperty(e.prototype, "edit", {
            get: function() {
                return this.initDocumentChanges(),
                this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()),
                this._workspaceEdit
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.getTextEditChange = function(t) {
            if (wt.is(t)) {
                if (this.initDocumentChanges(),
                this._workspaceEdit.documentChanges === void 0)
                    throw new Error("Workspace edit is not configured for document changes.");
                var n = {
                    uri: t.uri,
                    version: t.version
                }
                  , r = this._textEditChanges[n.uri];
                if (!r) {
                    var i = []
                      , a = {
                        textDocument: n,
                        edits: i
                    };
                    this._workspaceEdit.documentChanges.push(a),
                    r = new vt(i,this._changeAnnotations),
                    this._textEditChanges[n.uri] = r
                }
                return r
            } else {
                if (this.initChanges(),
                this._workspaceEdit.changes === void 0)
                    throw new Error("Workspace edit is not configured for normal text edit changes.");
                var r = this._textEditChanges[t];
                if (!r) {
                    var i = [];
                    this._workspaceEdit.changes[t] = i,
                    r = new vt(i),
                    this._textEditChanges[t] = r
                }
                return r
            }
        }
        ,
        e.prototype.initDocumentChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new xi,
            this._workspaceEdit.documentChanges = [],
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all())
        }
        ,
        e.prototype.initChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = Object.create(null))
        }
        ,
        e.prototype.createFile = function(t, n, r) {
            if (this.initDocumentChanges(),
            this._workspaceEdit.documentChanges === void 0)
                throw new Error("Workspace edit is not configured for document changes.");
            var i;
            Oe.is(n) || re.is(n) ? i = n : r = n;
            var a, o;
            if (i === void 0 ? a = Ke.create(t, r) : (o = re.is(i) ? i : this._changeAnnotations.manage(i),
            a = Ke.create(t, r, o)),
            this._workspaceEdit.documentChanges.push(a),
            o !== void 0)
                return o
        }
        ,
        e.prototype.renameFile = function(t, n, r, i) {
            if (this.initDocumentChanges(),
            this._workspaceEdit.documentChanges === void 0)
                throw new Error("Workspace edit is not configured for document changes.");
            var a;
            Oe.is(r) || re.is(r) ? a = r : i = r;
            var o, u;
            if (a === void 0 ? o = et.create(t, n, i) : (u = re.is(a) ? a : this._changeAnnotations.manage(a),
            o = et.create(t, n, i, u)),
            this._workspaceEdit.documentChanges.push(o),
            u !== void 0)
                return u
        }
        ,
        e.prototype.deleteFile = function(t, n, r) {
            if (this.initDocumentChanges(),
            this._workspaceEdit.documentChanges === void 0)
                throw new Error("Workspace edit is not configured for document changes.");
            var i;
            Oe.is(n) || re.is(n) ? i = n : r = n;
            var a, o;
            if (i === void 0 ? a = tt.create(t, r) : (o = re.is(i) ? i : this._changeAnnotations.manage(i),
            a = tt.create(t, r, o)),
            this._workspaceEdit.documentChanges.push(a),
            o !== void 0)
                return o
        }
        ,
        e
    }
    )();
    var Di;
    (function(e) {
        function t(r) {
            return {
                uri: r
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && S.string(i.uri)
        }
        e.is = n
    }
    )(Di || (Di = {}));
    var Ei;
    (function(e) {
        function t(r, i) {
            return {
                uri: r,
                version: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && S.string(i.uri) && S.integer(i.version)
        }
        e.is = n
    }
    )(Ei || (Ei = {}));
    var wt;
    (function(e) {
        function t(r, i) {
            return {
                uri: r,
                version: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && S.string(i.uri) && (i.version === null || S.integer(i.version))
        }
        e.is = n
    }
    )(wt || (wt = {}));
    var Mi;
    (function(e) {
        function t(r, i, a, o) {
            return {
                uri: r,
                languageId: i,
                version: a,
                text: o
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && S.string(i.uri) && S.string(i.languageId) && S.integer(i.version) && S.string(i.text)
        }
        e.is = n
    }
    )(Mi || (Mi = {}));
    var pe;
    (function(e) {
        e.PlainText = "plaintext",
        e.Markdown = "markdown"
    }
    )(pe || (pe = {})),
    function(e) {
        function t(n) {
            var r = n;
            return r === e.PlainText || r === e.Markdown
        }
        e.is = t
    }(pe || (pe = {}));
    var on;
    (function(e) {
        function t(n) {
            var r = n;
            return S.objectLiteral(n) && pe.is(r.kind) && S.string(r.value)
        }
        e.is = t
    }
    )(on || (on = {}));
    var ue;
    (function(e) {
        e.Text = 1,
        e.Method = 2,
        e.Function = 3,
        e.Constructor = 4,
        e.Field = 5,
        e.Variable = 6,
        e.Class = 7,
        e.Interface = 8,
        e.Module = 9,
        e.Property = 10,
        e.Unit = 11,
        e.Value = 12,
        e.Enum = 13,
        e.Keyword = 14,
        e.Snippet = 15,
        e.Color = 16,
        e.File = 17,
        e.Reference = 18,
        e.Folder = 19,
        e.EnumMember = 20,
        e.Constant = 21,
        e.Struct = 22,
        e.Event = 23,
        e.Operator = 24,
        e.TypeParameter = 25
    }
    )(ue || (ue = {}));
    var ge;
    (function(e) {
        e.PlainText = 1,
        e.Snippet = 2
    }
    )(ge || (ge = {}));
    var Ri;
    (function(e) {
        e.Deprecated = 1
    }
    )(Ri || (Ri = {}));
    var Ni;
    (function(e) {
        function t(r, i, a) {
            return {
                newText: r,
                insert: i,
                replace: a
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return i && S.string(i.newText) && G.is(i.insert) && G.is(i.replace)
        }
        e.is = n
    }
    )(Ni || (Ni = {}));
    var Ui;
    (function(e) {
        e.asIs = 1,
        e.adjustIndentation = 2
    }
    )(Ui || (Ui = {}));
    var Hi;
    (function(e) {
        function t(n) {
            return {
                label: n
            }
        }
        e.create = t
    }
    )(Hi || (Hi = {}));
    var zi;
    (function(e) {
        function t(n, r) {
            return {
                items: n || [],
                isIncomplete: !!r
            }
        }
        e.create = t
    }
    )(zi || (zi = {}));
    var yt;
    (function(e) {
        function t(r) {
            return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
        }
        e.fromPlainText = t;
        function n(r) {
            var i = r;
            return S.string(i) || S.objectLiteral(i) && S.string(i.language) && S.string(i.value)
        }
        e.is = n
    }
    )(yt || (yt = {}));
    var Ii;
    (function(e) {
        function t(n) {
            var r = n;
            return !!r && S.objectLiteral(r) && (on.is(r.contents) || yt.is(r.contents) || S.typedArray(r.contents, yt.is)) && (n.range === void 0 || G.is(n.range))
        }
        e.is = t
    }
    )(Ii || (Ii = {}));
    var Wi;
    (function(e) {
        function t(n, r) {
            return r ? {
                label: n,
                documentation: r
            } : {
                label: n
            }
        }
        e.create = t
    }
    )(Wi || (Wi = {}));
    var Pi;
    (function(e) {
        function t(n, r) {
            for (var i = [], a = 2; a < arguments.length; a++)
                i[a - 2] = arguments[a];
            var o = {
                label: n
            };
            return S.defined(r) && (o.documentation = r),
            S.defined(i) ? o.parameters = i : o.parameters = [],
            o
        }
        e.create = t
    }
    )(Pi || (Pi = {}));
    var Tt;
    (function(e) {
        e.Text = 1,
        e.Read = 2,
        e.Write = 3
    }
    )(Tt || (Tt = {}));
    var Bi;
    (function(e) {
        function t(n, r) {
            var i = {
                range: n
            };
            return S.number(r) && (i.kind = r),
            i
        }
        e.create = t
    }
    )(Bi || (Bi = {}));
    var ln;
    (function(e) {
        e.File = 1,
        e.Module = 2,
        e.Namespace = 3,
        e.Package = 4,
        e.Class = 5,
        e.Method = 6,
        e.Property = 7,
        e.Field = 8,
        e.Constructor = 9,
        e.Enum = 10,
        e.Interface = 11,
        e.Function = 12,
        e.Variable = 13,
        e.Constant = 14,
        e.String = 15,
        e.Number = 16,
        e.Boolean = 17,
        e.Array = 18,
        e.Object = 19,
        e.Key = 20,
        e.Null = 21,
        e.EnumMember = 22,
        e.Struct = 23,
        e.Event = 24,
        e.Operator = 25,
        e.TypeParameter = 26
    }
    )(ln || (ln = {}));
    var Fi;
    (function(e) {
        e.Deprecated = 1
    }
    )(Fi || (Fi = {}));
    var qi;
    (function(e) {
        function t(n, r, i, a, o) {
            var u = {
                name: n,
                kind: r,
                location: {
                    uri: a,
                    range: i
                }
            };
            return o && (u.containerName = o),
            u
        }
        e.create = t
    }
    )(qi || (qi = {}));
    var Oi;
    (function(e) {
        function t(r, i, a, o, u, s) {
            var l = {
                name: r,
                detail: i,
                kind: a,
                range: o,
                selectionRange: u
            };
            return s !== void 0 && (l.children = s),
            l
        }
        e.create = t;
        function n(r) {
            var i = r;
            return i && S.string(i.name) && S.number(i.kind) && G.is(i.range) && G.is(i.selectionRange) && (i.detail === void 0 || S.string(i.detail)) && (i.deprecated === void 0 || S.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags))
        }
        e.is = n
    }
    )(Oi || (Oi = {}));
    var ji;
    (function(e) {
        e.Empty = "",
        e.QuickFix = "quickfix",
        e.Refactor = "refactor",
        e.RefactorExtract = "refactor.extract",
        e.RefactorInline = "refactor.inline",
        e.RefactorRewrite = "refactor.rewrite",
        e.Source = "source",
        e.SourceOrganizeImports = "source.organizeImports",
        e.SourceFixAll = "source.fixAll"
    }
    )(ji || (ji = {}));
    var Gi;
    (function(e) {
        function t(r, i) {
            var a = {
                diagnostics: r
            };
            return i != null && (a.only = i),
            a
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && S.typedArray(i.diagnostics, bt.is) && (i.only === void 0 || S.typedArray(i.only, S.string))
        }
        e.is = n
    }
    )(Gi || (Gi = {}));
    var Vi;
    (function(e) {
        function t(r, i, a) {
            var o = {
                title: r
            }
              , u = !0;
            return typeof i == "string" ? (u = !1,
            o.kind = i) : Ze.is(i) ? o.command = i : o.edit = i,
            u && a !== void 0 && (o.kind = a),
            o
        }
        e.create = t;
        function n(r) {
            var i = r;
            return i && S.string(i.title) && (i.diagnostics === void 0 || S.typedArray(i.diagnostics, bt.is)) && (i.kind === void 0 || S.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Ze.is(i.command)) && (i.isPreferred === void 0 || S.boolean(i.isPreferred)) && (i.edit === void 0 || sn.is(i.edit))
        }
        e.is = n
    }
    )(Vi || (Vi = {}));
    var Yi;
    (function(e) {
        function t(r, i) {
            var a = {
                range: r
            };
            return S.defined(i) && (a.data = i),
            a
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && G.is(i.range) && (S.undefined(i.command) || Ze.is(i.command))
        }
        e.is = n
    }
    )(Yi || (Yi = {}));
    var $i;
    (function(e) {
        function t(r, i) {
            return {
                tabSize: r,
                insertSpaces: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && S.uinteger(i.tabSize) && S.boolean(i.insertSpaces)
        }
        e.is = n
    }
    )($i || ($i = {}));
    var Xi;
    (function(e) {
        function t(r, i, a) {
            return {
                range: r,
                target: i,
                data: a
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return S.defined(i) && G.is(i.range) && (S.undefined(i.target) || S.string(i.target))
        }
        e.is = n
    }
    )(Xi || (Xi = {}));
    var kt;
    (function(e) {
        function t(r, i) {
            return {
                range: r,
                parent: i
            }
        }
        e.create = t;
        function n(r) {
            var i = r;
            return i !== void 0 && G.is(i.range) && (i.parent === void 0 || e.is(i.parent))
        }
        e.is = n
    }
    )(kt || (kt = {}));
    var Qi;
    (function(e) {
        function t(a, o, u, s) {
            return new xa(a,o,u,s)
        }
        e.create = t;
        function n(a) {
            var o = a;
            return !!(S.defined(o) && S.string(o.uri) && (S.undefined(o.languageId) || S.string(o.languageId)) && S.uinteger(o.lineCount) && S.func(o.getText) && S.func(o.positionAt) && S.func(o.offsetAt))
        }
        e.is = n;
        function r(a, o) {
            for (var u = a.getText(), s = i(o, function(_, b) {
                var T = _.range.start.line - b.range.start.line;
                return T === 0 ? _.range.start.character - b.range.start.character : T
            }), l = u.length, h = s.length - 1; h >= 0; h--) {
                var c = s[h]
                  , d = a.offsetAt(c.range.start)
                  , p = a.offsetAt(c.range.end);
                if (p <= l)
                    u = u.substring(0, d) + c.newText + u.substring(p, u.length);
                else
                    throw new Error("Overlapping edit");
                l = d
            }
            return u
        }
        e.applyEdits = r;
        function i(a, o) {
            if (a.length <= 1)
                return a;
            var u = a.length / 2 | 0
              , s = a.slice(0, u)
              , l = a.slice(u);
            i(s, o),
            i(l, o);
            for (var h = 0, c = 0, d = 0; h < s.length && c < l.length; ) {
                var p = o(s[h], l[c]);
                p <= 0 ? a[d++] = s[h++] : a[d++] = l[c++]
            }
            for (; h < s.length; )
                a[d++] = s[h++];
            for (; c < l.length; )
                a[d++] = l[c++];
            return a
        }
    }
    )(Qi || (Qi = {}));
    var xa = function() {
        function e(t, n, r, i) {
            this._uri = t,
            this._languageId = n,
            this._version = r,
            this._content = i,
            this._lineOffsets = void 0
        }
        return Object.defineProperty(e.prototype, "uri", {
            get: function() {
                return this._uri
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "languageId", {
            get: function() {
                return this._languageId
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "version", {
            get: function() {
                return this._version
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.getText = function(t) {
            if (t) {
                var n = this.offsetAt(t.start)
                  , r = this.offsetAt(t.end);
                return this._content.substring(n, r)
            }
            return this._content
        }
        ,
        e.prototype.update = function(t, n) {
            this._content = t.text,
            this._version = n,
            this._lineOffsets = void 0
        }
        ,
        e.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
                for (var t = [], n = this._content, r = !0, i = 0; i < n.length; i++) {
                    r && (t.push(i),
                    r = !1);
                    var a = n.charAt(i);
                    r = a === "\r" || a === `
`,
                    a === "\r" && i + 1 < n.length && n.charAt(i + 1) === `
` && i++
                }
                r && n.length > 0 && t.push(n.length),
                this._lineOffsets = t
            }
            return this._lineOffsets
        }
        ,
        e.prototype.positionAt = function(t) {
            t = Math.max(Math.min(t, this._content.length), 0);
            var n = this.getLineOffsets()
              , r = 0
              , i = n.length;
            if (i === 0)
                return ne.create(0, t);
            for (; r < i; ) {
                var a = Math.floor((r + i) / 2);
                n[a] > t ? i = a : r = a + 1
            }
            var o = r - 1;
            return ne.create(o, t - n[o])
        }
        ,
        e.prototype.offsetAt = function(t) {
            var n = this.getLineOffsets();
            if (t.line >= n.length)
                return this._content.length;
            if (t.line < 0)
                return 0;
            var r = n[t.line]
              , i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length;
            return Math.max(Math.min(r + t.character, i), r)
        }
        ,
        Object.defineProperty(e.prototype, "lineCount", {
            get: function() {
                return this.getLineOffsets().length
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }(), S;
    (function(e) {
        var t = Object.prototype.toString;
        function n(p) {
            return typeof p != "undefined"
        }
        e.defined = n;
        function r(p) {
            return typeof p == "undefined"
        }
        e.undefined = r;
        function i(p) {
            return p === !0 || p === !1
        }
        e.boolean = i;
        function a(p) {
            return t.call(p) === "[object String]"
        }
        e.string = a;
        function o(p) {
            return t.call(p) === "[object Number]"
        }
        e.number = o;
        function u(p, _, b) {
            return t.call(p) === "[object Number]" && _ <= p && p <= b
        }
        e.numberRange = u;
        function s(p) {
            return t.call(p) === "[object Number]" && -2147483648 <= p && p <= 2147483647
        }
        e.integer = s;
        function l(p) {
            return t.call(p) === "[object Number]" && 0 <= p && p <= 2147483647
        }
        e.uinteger = l;
        function h(p) {
            return t.call(p) === "[object Function]"
        }
        e.func = h;
        function c(p) {
            return p !== null && typeof p == "object"
        }
        e.objectLiteral = c;
        function d(p, _) {
            return Array.isArray(p) && p.every(_)
        }
        e.typedArray = d
    }
    )(S || (S = {}));
    var Ji = function() {
        function e(t, n, r, i) {
            this._uri = t,
            this._languageId = n,
            this._version = r,
            this._content = i,
            this._lineOffsets = void 0
        }
        return Object.defineProperty(e.prototype, "uri", {
            get: function() {
                return this._uri
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "languageId", {
            get: function() {
                return this._languageId
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "version", {
            get: function() {
                return this._version
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.getText = function(t) {
            if (t) {
                var n = this.offsetAt(t.start)
                  , r = this.offsetAt(t.end);
                return this._content.substring(n, r)
            }
            return this._content
        }
        ,
        e.prototype.update = function(t, n) {
            for (var r = 0, i = t; r < i.length; r++) {
                var a = i[r];
                if (e.isIncremental(a)) {
                    var o = Ki(a.range)
                      , u = this.offsetAt(o.start)
                      , s = this.offsetAt(o.end);
                    this._content = this._content.substring(0, u) + a.text + this._content.substring(s, this._content.length);
                    var l = Math.max(o.start.line, 0)
                      , h = Math.max(o.end.line, 0)
                      , c = this._lineOffsets
                      , d = Zi(a.text, !1, u);
                    if (h - l === d.length)
                        for (var p = 0, _ = d.length; p < _; p++)
                            c[p + l + 1] = d[p];
                    else
                        d.length < 1e4 ? c.splice.apply(c, [l + 1, h - l].concat(d)) : this._lineOffsets = c = c.slice(0, l + 1).concat(d, c.slice(h + 1));
                    var b = a.text.length - (s - u);
                    if (b !== 0)
                        for (var p = l + 1 + d.length, _ = c.length; p < _; p++)
                            c[p] = c[p] + b
                } else if (e.isFull(a))
                    this._content = a.text,
                    this._lineOffsets = void 0;
                else
                    throw new Error("Unknown change event received")
            }
            this._version = n
        }
        ,
        e.prototype.getLineOffsets = function() {
            return this._lineOffsets === void 0 && (this._lineOffsets = Zi(this._content, !0)),
            this._lineOffsets
        }
        ,
        e.prototype.positionAt = function(t) {
            t = Math.max(Math.min(t, this._content.length), 0);
            var n = this.getLineOffsets()
              , r = 0
              , i = n.length;
            if (i === 0)
                return {
                    line: 0,
                    character: t
                };
            for (; r < i; ) {
                var a = Math.floor((r + i) / 2);
                n[a] > t ? i = a : r = a + 1
            }
            var o = r - 1;
            return {
                line: o,
                character: t - n[o]
            }
        }
        ,
        e.prototype.offsetAt = function(t) {
            var n = this.getLineOffsets();
            if (t.line >= n.length)
                return this._content.length;
            if (t.line < 0)
                return 0;
            var r = n[t.line]
              , i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length;
            return Math.max(Math.min(r + t.character, i), r)
        }
        ,
        Object.defineProperty(e.prototype, "lineCount", {
            get: function() {
                return this.getLineOffsets().length
            },
            enumerable: !0,
            configurable: !0
        }),
        e.isIncremental = function(t) {
            var n = t;
            return n != null && typeof n.text == "string" && n.range !== void 0 && (n.rangeLength === void 0 || typeof n.rangeLength == "number")
        }
        ,
        e.isFull = function(t) {
            var n = t;
            return n != null && typeof n.text == "string" && n.range === void 0 && n.rangeLength === void 0
        }
        ,
        e
    }(), un;
    (function(e) {
        function t(i, a, o, u) {
            return new Ji(i,a,o,u)
        }
        e.create = t;
        function n(i, a, o) {
            if (i instanceof Ji)
                return i.update(a, o),
                i;
            throw new Error("TextDocument.update: document must be created by TextDocument.create")
        }
        e.update = n;
        function r(i, a) {
            for (var o = i.getText(), u = hn(a.map(Da), function(_, b) {
                var T = _.range.start.line - b.range.start.line;
                return T === 0 ? _.range.start.character - b.range.start.character : T
            }), s = 0, l = [], h = 0, c = u; h < c.length; h++) {
                var d = c[h]
                  , p = i.offsetAt(d.range.start);
                if (p < s)
                    throw new Error("Overlapping edit");
                p > s && l.push(o.substring(s, p)),
                d.newText.length && l.push(d.newText),
                s = i.offsetAt(d.range.end)
            }
            return l.push(o.substr(s)),
            l.join("")
        }
        e.applyEdits = r
    }
    )(un || (un = {}));
    function hn(e, t) {
        if (e.length <= 1)
            return e;
        var n = e.length / 2 | 0
          , r = e.slice(0, n)
          , i = e.slice(n);
        hn(r, t),
        hn(i, t);
        for (var a = 0, o = 0, u = 0; a < r.length && o < i.length; ) {
            var s = t(r[a], i[o]);
            s <= 0 ? e[u++] = r[a++] : e[u++] = i[o++]
        }
        for (; a < r.length; )
            e[u++] = r[a++];
        for (; o < i.length; )
            e[u++] = i[o++];
        return e
    }
    function Zi(e, t, n) {
        n === void 0 && (n = 0);
        for (var r = t ? [n] : [], i = 0; i < e.length; i++) {
            var a = e.charCodeAt(i);
            (a === 13 || a === 10) && (a === 13 && i + 1 < e.length && e.charCodeAt(i + 1) === 10 && i++,
            r.push(n + i + 1))
        }
        return r
    }
    function Ki(e) {
        var t = e.start
          , n = e.end;
        return t.line > n.line || t.line === n.line && t.character > n.character ? {
            start: n,
            end: t
        } : e
    }
    function Da(e) {
        var t = Ki(e.range);
        return t !== e.range ? {
            newText: e.newText,
            range: t
        } : e
    }
    var M;
    (function(e) {
        e[e.StartCommentTag = 0] = "StartCommentTag",
        e[e.Comment = 1] = "Comment",
        e[e.EndCommentTag = 2] = "EndCommentTag",
        e[e.StartTagOpen = 3] = "StartTagOpen",
        e[e.StartTagClose = 4] = "StartTagClose",
        e[e.StartTagSelfClose = 5] = "StartTagSelfClose",
        e[e.StartTag = 6] = "StartTag",
        e[e.EndTagOpen = 7] = "EndTagOpen",
        e[e.EndTagClose = 8] = "EndTagClose",
        e[e.EndTag = 9] = "EndTag",
        e[e.DelimiterAssign = 10] = "DelimiterAssign",
        e[e.AttributeName = 11] = "AttributeName",
        e[e.AttributeValue = 12] = "AttributeValue",
        e[e.StartDoctypeTag = 13] = "StartDoctypeTag",
        e[e.Doctype = 14] = "Doctype",
        e[e.EndDoctypeTag = 15] = "EndDoctypeTag",
        e[e.Content = 16] = "Content",
        e[e.Whitespace = 17] = "Whitespace",
        e[e.Unknown = 18] = "Unknown",
        e[e.Script = 19] = "Script",
        e[e.Styles = 20] = "Styles",
        e[e.EOS = 21] = "EOS"
    }
    )(M || (M = {}));
    var F;
    (function(e) {
        e[e.WithinContent = 0] = "WithinContent",
        e[e.AfterOpeningStartTag = 1] = "AfterOpeningStartTag",
        e[e.AfterOpeningEndTag = 2] = "AfterOpeningEndTag",
        e[e.WithinDoctype = 3] = "WithinDoctype",
        e[e.WithinTag = 4] = "WithinTag",
        e[e.WithinEndTag = 5] = "WithinEndTag",
        e[e.WithinComment = 6] = "WithinComment",
        e[e.WithinScriptContent = 7] = "WithinScriptContent",
        e[e.WithinStyleContent = 8] = "WithinStyleContent",
        e[e.AfterAttributeName = 9] = "AfterAttributeName",
        e[e.BeforeAttributeValue = 10] = "BeforeAttributeValue"
    }
    )(F || (F = {}));
    var er;
    (function(e) {
        e.LATEST = {
            textDocument: {
                completion: {
                    completionItem: {
                        documentationFormat: [pe.Markdown, pe.PlainText]
                    }
                },
                hover: {
                    contentFormat: [pe.Markdown, pe.PlainText]
                }
            }
        }
    }
    )(er || (er = {}));
    var cn;
    (function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.File = 1] = "File",
        e[e.Directory = 2] = "Directory",
        e[e.SymbolicLink = 64] = "SymbolicLink"
    }
    )(cn || (cn = {}));
    var Ce = nn()
      , Ea = function() {
        function e(t, n) {
            this.source = t,
            this.len = t.length,
            this.position = n
        }
        return e.prototype.eos = function() {
            return this.len <= this.position
        }
        ,
        e.prototype.getSource = function() {
            return this.source
        }
        ,
        e.prototype.pos = function() {
            return this.position
        }
        ,
        e.prototype.goBackTo = function(t) {
            this.position = t
        }
        ,
        e.prototype.goBack = function(t) {
            this.position -= t
        }
        ,
        e.prototype.advance = function(t) {
            this.position += t
        }
        ,
        e.prototype.goToEnd = function() {
            this.position = this.source.length
        }
        ,
        e.prototype.nextChar = function() {
            return this.source.charCodeAt(this.position++) || 0
        }
        ,
        e.prototype.peekChar = function(t) {
            return t === void 0 && (t = 0),
            this.source.charCodeAt(this.position + t) || 0
        }
        ,
        e.prototype.advanceIfChar = function(t) {
            return t === this.source.charCodeAt(this.position) ? (this.position++,
            !0) : !1
        }
        ,
        e.prototype.advanceIfChars = function(t) {
            var n;
            if (this.position + t.length > this.source.length)
                return !1;
            for (n = 0; n < t.length; n++)
                if (this.source.charCodeAt(this.position + n) !== t[n])
                    return !1;
            return this.advance(n),
            !0
        }
        ,
        e.prototype.advanceIfRegExp = function(t) {
            var n = this.source.substr(this.position)
              , r = n.match(t);
            return r ? (this.position = this.position + r.index + r[0].length,
            r[0]) : ""
        }
        ,
        e.prototype.advanceUntilRegExp = function(t) {
            var n = this.source.substr(this.position)
              , r = n.match(t);
            return r ? (this.position = this.position + r.index,
            r[0]) : (this.goToEnd(),
            "")
        }
        ,
        e.prototype.advanceUntilChar = function(t) {
            for (; this.position < this.source.length; ) {
                if (this.source.charCodeAt(this.position) === t)
                    return !0;
                this.advance(1)
            }
            return !1
        }
        ,
        e.prototype.advanceUntilChars = function(t) {
            for (; this.position + t.length <= this.source.length; ) {
                for (var n = 0; n < t.length && this.source.charCodeAt(this.position + n) === t[n]; n++)
                    ;
                if (n === t.length)
                    return !0;
                this.advance(1)
            }
            return this.goToEnd(),
            !1
        }
        ,
        e.prototype.skipWhitespace = function() {
            var t = this.advanceWhileChar(function(n) {
                return n === Ia || n === Wa || n === Ua || n === za || n === Ha
            });
            return t > 0
        }
        ,
        e.prototype.advanceWhileChar = function(t) {
            for (var n = this.position; this.position < this.len && t(this.source.charCodeAt(this.position)); )
                this.position++;
            return this.position - n
        }
        ,
        e
    }()
      , tr = "!".charCodeAt(0)
      , je = "-".charCodeAt(0)
      , St = "<".charCodeAt(0)
      , be = ">".charCodeAt(0)
      , dn = "/".charCodeAt(0)
      , Ma = "=".charCodeAt(0)
      , Ra = '"'.charCodeAt(0)
      , Na = "'".charCodeAt(0)
      , Ua = `
`.charCodeAt(0)
      , Ha = "\r".charCodeAt(0)
      , za = "\f".charCodeAt(0)
      , Ia = " ".charCodeAt(0)
      , Wa = "	".charCodeAt(0)
      , Pa = {
        "text/x-handlebars-template": !0,
        "text/html": !0
    };
    function de(e, t, n, r) {
        t === void 0 && (t = 0),
        n === void 0 && (n = F.WithinContent),
        r === void 0 && (r = !1);
        var i = new Ea(e,t), a = n, o = 0, u = M.Unknown, s, l, h, c, d;
        function p() {
            return i.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase()
        }
        function _() {
            return i.advanceIfRegExp(/^[^\s"'></=\x00-\x0F\x7F\x80-\x9F]*/).toLowerCase()
        }
        function b(f, v, A) {
            return u = v,
            o = f,
            s = A,
            v
        }
        function T() {
            var f = i.pos()
              , v = a
              , A = k();
            return A !== M.EOS && f === i.pos() && !(r && (A === M.StartTagClose || A === M.EndTagClose)) ? (console.log("Scanner.scan has not advanced at offset " + f + ", state before: " + v + " after: " + a),
            i.advance(1),
            b(f, M.Unknown)) : A
        }
        function k() {
            var f = i.pos();
            if (i.eos())
                return b(f, M.EOS);
            var v;
            switch (a) {
            case F.WithinComment:
                return i.advanceIfChars([je, je, be]) ? (a = F.WithinContent,
                b(f, M.EndCommentTag)) : (i.advanceUntilChars([je, je, be]),
                b(f, M.Comment));
            case F.WithinDoctype:
                return i.advanceIfChar(be) ? (a = F.WithinContent,
                b(f, M.EndDoctypeTag)) : (i.advanceUntilChar(be),
                b(f, M.Doctype));
            case F.WithinContent:
                if (i.advanceIfChar(St)) {
                    if (!i.eos() && i.peekChar() === tr) {
                        if (i.advanceIfChars([tr, je, je]))
                            return a = F.WithinComment,
                            b(f, M.StartCommentTag);
                        if (i.advanceIfRegExp(/^!doctype/i))
                            return a = F.WithinDoctype,
                            b(f, M.StartDoctypeTag)
                    }
                    return i.advanceIfChar(dn) ? (a = F.AfterOpeningEndTag,
                    b(f, M.EndTagOpen)) : (a = F.AfterOpeningStartTag,
                    b(f, M.StartTagOpen))
                }
                return i.advanceUntilChar(St),
                b(f, M.Content);
            case F.AfterOpeningEndTag:
                var A = p();
                return A.length > 0 ? (a = F.WithinEndTag,
                b(f, M.EndTag)) : i.skipWhitespace() ? b(f, M.Whitespace, Ce("error.unexpectedWhitespace", "Tag name must directly follow the open bracket.")) : (a = F.WithinEndTag,
                i.advanceUntilChar(be),
                f < i.pos() ? b(f, M.Unknown, Ce("error.endTagNameExpected", "End tag name expected.")) : k());
            case F.WithinEndTag:
                if (i.skipWhitespace())
                    return b(f, M.Whitespace);
                if (i.advanceIfChar(be))
                    return a = F.WithinContent,
                    b(f, M.EndTagClose);
                if (r && i.peekChar() === St)
                    return a = F.WithinContent,
                    b(f, M.EndTagClose, Ce("error.closingBracketMissing", "Closing bracket missing."));
                v = Ce("error.closingBracketExpected", "Closing bracket expected.");
                break;
            case F.AfterOpeningStartTag:
                return h = p(),
                d = void 0,
                c = void 0,
                h.length > 0 ? (l = !1,
                a = F.WithinTag,
                b(f, M.StartTag)) : i.skipWhitespace() ? b(f, M.Whitespace, Ce("error.unexpectedWhitespace", "Tag name must directly follow the open bracket.")) : (a = F.WithinTag,
                i.advanceUntilChar(be),
                f < i.pos() ? b(f, M.Unknown, Ce("error.startTagNameExpected", "Start tag name expected.")) : k());
            case F.WithinTag:
                return i.skipWhitespace() ? (l = !0,
                b(f, M.Whitespace)) : l && (c = _(),
                c.length > 0) ? (a = F.AfterAttributeName,
                l = !1,
                b(f, M.AttributeName)) : i.advanceIfChars([dn, be]) ? (a = F.WithinContent,
                b(f, M.StartTagSelfClose)) : i.advanceIfChar(be) ? (h === "script" ? d && Pa[d] ? a = F.WithinContent : a = F.WithinScriptContent : h === "style" ? a = F.WithinStyleContent : a = F.WithinContent,
                b(f, M.StartTagClose)) : r && i.peekChar() === St ? (a = F.WithinContent,
                b(f, M.StartTagClose, Ce("error.closingBracketMissing", "Closing bracket missing."))) : (i.advance(1),
                b(f, M.Unknown, Ce("error.unexpectedCharacterInTag", "Unexpected character in tag.")));
            case F.AfterAttributeName:
                return i.skipWhitespace() ? (l = !0,
                b(f, M.Whitespace)) : i.advanceIfChar(Ma) ? (a = F.BeforeAttributeValue,
                b(f, M.DelimiterAssign)) : (a = F.WithinTag,
                k());
            case F.BeforeAttributeValue:
                if (i.skipWhitespace())
                    return b(f, M.Whitespace);
                var D = i.advanceIfRegExp(/^[^\s"'`=<>]+/);
                if (D.length > 0)
                    return i.peekChar() === be && i.peekChar(-1) === dn && (i.goBack(1),
                    D = D.substr(0, D.length - 1)),
                    c === "type" && (d = D),
                    a = F.WithinTag,
                    l = !1,
                    b(f, M.AttributeValue);
                var H = i.peekChar();
                return H === Na || H === Ra ? (i.advance(1),
                i.advanceUntilChar(H) && i.advance(1),
                c === "type" && (d = i.getSource().substring(f + 1, i.pos() - 1)),
                a = F.WithinTag,
                l = !1,
                b(f, M.AttributeValue)) : (a = F.WithinTag,
                l = !1,
                k());
            case F.WithinScriptContent:
                for (var g = 1; !i.eos(); ) {
                    var m = i.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);
                    if (m.length === 0)
                        return i.goToEnd(),
                        b(f, M.Script);
                    if (m === "<!--")
                        g === 1 && (g = 2);
                    else if (m === "-->")
                        g = 1;
                    else if (m[1] !== "/")
                        g === 2 && (g = 3);
                    else if (g === 3)
                        g = 2;
                    else {
                        i.goBack(m.length);
                        break
                    }
                }
                return a = F.WithinContent,
                f < i.pos() ? b(f, M.Script) : k();
            case F.WithinStyleContent:
                return i.advanceUntilRegExp(/<\/style/i),
                a = F.WithinContent,
                f < i.pos() ? b(f, M.Styles) : k()
            }
            return i.advance(1),
            a = F.WithinContent,
            b(f, M.Unknown, v)
        }
        return {
            scan: T,
            getTokenType: function() {
                return u
            },
            getTokenOffset: function() {
                return o
            },
            getTokenLength: function() {
                return i.pos() - o
            },
            getTokenEnd: function() {
                return i.pos()
            },
            getTokenText: function() {
                return i.getSource().substring(o, i.pos())
            },
            getScannerState: function() {
                return a
            },
            getTokenError: function() {
                return s
            }
        }
    }
    function nr(e, t) {
        var n = 0
          , r = e.length;
        if (r === 0)
            return 0;
        for (; n < r; ) {
            var i = Math.floor((n + r) / 2);
            t(e[i]) ? r = i : n = i + 1
        }
        return n
    }
    function Ba(e, t, n) {
        for (var r = 0, i = e.length - 1; r <= i; ) {
            var a = (r + i) / 2 | 0
              , o = n(e[a], t);
            if (o < 0)
                r = a + 1;
            else if (o > 0)
                i = a - 1;
            else
                return a
        }
        return -(r + 1)
    }
    var Fa = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
    function At(e) {
        return !!e && Ba(Fa, e.toLowerCase(), function(t, n) {
            return t.localeCompare(n)
        }) >= 0
    }
    var ir = function() {
        function e(t, n, r, i) {
            this.start = t,
            this.end = n,
            this.children = r,
            this.parent = i,
            this.closed = !1
        }
        return Object.defineProperty(e.prototype, "attributeNames", {
            get: function() {
                return this.attributes ? Object.keys(this.attributes) : []
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.isSameTag = function(t) {
            return this.tag === void 0 ? t === void 0 : t !== void 0 && this.tag.length === t.length && this.tag.toLowerCase() === t
        }
        ,
        Object.defineProperty(e.prototype, "firstChild", {
            get: function() {
                return this.children[0]
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "lastChild", {
            get: function() {
                return this.children.length ? this.children[this.children.length - 1] : void 0
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.findNodeBefore = function(t) {
            var n = nr(this.children, function(a) {
                return t <= a.start
            }) - 1;
            if (n >= 0) {
                var r = this.children[n];
                if (t > r.start) {
                    if (t < r.end)
                        return r.findNodeBefore(t);
                    var i = r.lastChild;
                    return i && i.end === r.end ? r.findNodeBefore(t) : r
                }
            }
            return this
        }
        ,
        e.prototype.findNodeAt = function(t) {
            var n = nr(this.children, function(i) {
                return t <= i.start
            }) - 1;
            if (n >= 0) {
                var r = this.children[n];
                if (t > r.start && t <= r.end)
                    return r.findNodeAt(t)
            }
            return this
        }
        ,
        e
    }();
    function rr(e) {
        for (var t = de(e, void 0, void 0, !0), n = new ir(0,e.length,[],void 0), r = n, i = -1, a = void 0, o = null, u = t.scan(); u !== M.EOS; ) {
            switch (u) {
            case M.StartTagOpen:
                var s = new ir(t.getTokenOffset(),e.length,[],r);
                r.children.push(s),
                r = s;
                break;
            case M.StartTag:
                r.tag = t.getTokenText();
                break;
            case M.StartTagClose:
                r.parent && (r.end = t.getTokenEnd(),
                t.getTokenLength() ? (r.startTagEnd = t.getTokenEnd(),
                r.tag && At(r.tag) && (r.closed = !0,
                r = r.parent)) : r = r.parent);
                break;
            case M.StartTagSelfClose:
                r.parent && (r.closed = !0,
                r.end = t.getTokenEnd(),
                r.startTagEnd = t.getTokenEnd(),
                r = r.parent);
                break;
            case M.EndTagOpen:
                i = t.getTokenOffset(),
                a = void 0;
                break;
            case M.EndTag:
                a = t.getTokenText().toLowerCase();
                break;
            case M.EndTagClose:
                for (var l = r; !l.isSameTag(a) && l.parent; )
                    l = l.parent;
                if (l.parent) {
                    for (; r !== l; )
                        r.end = i,
                        r.closed = !1,
                        r = r.parent;
                    r.closed = !0,
                    r.endTagStart = i,
                    r.end = t.getTokenEnd(),
                    r = r.parent
                }
                break;
            case M.AttributeName:
                {
                    o = t.getTokenText();
                    var h = r.attributes;
                    h || (r.attributes = h = {}),
                    h[o] = null;
                    break
                }
            case M.AttributeValue:
                {
                    var c = t.getTokenText()
                      , h = r.attributes;
                    h && o && (h[o] = c,
                    o = null);
                    break
                }
            }
            u = t.scan()
        }
        for (; r.parent; )
            r.end = e.length,
            r.closed = !1,
            r = r.parent;
        return {
            roots: n.children,
            findNodeBefore: n.findNodeBefore.bind(n),
            findNodeAt: n.findNodeAt.bind(n)
        }
    }
    var nt = {
        "Aacute;": "\xC1",
        Aacute: "\xC1",
        "aacute;": "\xE1",
        aacute: "\xE1",
        "Abreve;": "\u0102",
        "abreve;": "\u0103",
        "ac;": "\u223E",
        "acd;": "\u223F",
        "acE;": "\u223E\u0333",
        "Acirc;": "\xC2",
        Acirc: "\xC2",
        "acirc;": "\xE2",
        acirc: "\xE2",
        "acute;": "\xB4",
        acute: "\xB4",
        "Acy;": "\u0410",
        "acy;": "\u0430",
        "AElig;": "\xC6",
        AElig: "\xC6",
        "aelig;": "\xE6",
        aelig: "\xE6",
        "af;": "\u2061",
        "Afr;": "\u{1D504}",
        "afr;": "\u{1D51E}",
        "Agrave;": "\xC0",
        Agrave: "\xC0",
        "agrave;": "\xE0",
        agrave: "\xE0",
        "alefsym;": "\u2135",
        "aleph;": "\u2135",
        "Alpha;": "\u0391",
        "alpha;": "\u03B1",
        "Amacr;": "\u0100",
        "amacr;": "\u0101",
        "amalg;": "\u2A3F",
        "AMP;": "&",
        AMP: "&",
        "amp;": "&",
        amp: "&",
        "And;": "\u2A53",
        "and;": "\u2227",
        "andand;": "\u2A55",
        "andd;": "\u2A5C",
        "andslope;": "\u2A58",
        "andv;": "\u2A5A",
        "ang;": "\u2220",
        "ange;": "\u29A4",
        "angle;": "\u2220",
        "angmsd;": "\u2221",
        "angmsdaa;": "\u29A8",
        "angmsdab;": "\u29A9",
        "angmsdac;": "\u29AA",
        "angmsdad;": "\u29AB",
        "angmsdae;": "\u29AC",
        "angmsdaf;": "\u29AD",
        "angmsdag;": "\u29AE",
        "angmsdah;": "\u29AF",
        "angrt;": "\u221F",
        "angrtvb;": "\u22BE",
        "angrtvbd;": "\u299D",
        "angsph;": "\u2222",
        "angst;": "\xC5",
        "angzarr;": "\u237C",
        "Aogon;": "\u0104",
        "aogon;": "\u0105",
        "Aopf;": "\u{1D538}",
        "aopf;": "\u{1D552}",
        "ap;": "\u2248",
        "apacir;": "\u2A6F",
        "apE;": "\u2A70",
        "ape;": "\u224A",
        "apid;": "\u224B",
        "apos;": "'",
        "ApplyFunction;": "\u2061",
        "approx;": "\u2248",
        "approxeq;": "\u224A",
        "Aring;": "\xC5",
        Aring: "\xC5",
        "aring;": "\xE5",
        aring: "\xE5",
        "Ascr;": "\u{1D49C}",
        "ascr;": "\u{1D4B6}",
        "Assign;": "\u2254",
        "ast;": "*",
        "asymp;": "\u2248",
        "asympeq;": "\u224D",
        "Atilde;": "\xC3",
        Atilde: "\xC3",
        "atilde;": "\xE3",
        atilde: "\xE3",
        "Auml;": "\xC4",
        Auml: "\xC4",
        "auml;": "\xE4",
        auml: "\xE4",
        "awconint;": "\u2233",
        "awint;": "\u2A11",
        "backcong;": "\u224C",
        "backepsilon;": "\u03F6",
        "backprime;": "\u2035",
        "backsim;": "\u223D",
        "backsimeq;": "\u22CD",
        "Backslash;": "\u2216",
        "Barv;": "\u2AE7",
        "barvee;": "\u22BD",
        "Barwed;": "\u2306",
        "barwed;": "\u2305",
        "barwedge;": "\u2305",
        "bbrk;": "\u23B5",
        "bbrktbrk;": "\u23B6",
        "bcong;": "\u224C",
        "Bcy;": "\u0411",
        "bcy;": "\u0431",
        "bdquo;": "\u201E",
        "becaus;": "\u2235",
        "Because;": "\u2235",
        "because;": "\u2235",
        "bemptyv;": "\u29B0",
        "bepsi;": "\u03F6",
        "bernou;": "\u212C",
        "Bernoullis;": "\u212C",
        "Beta;": "\u0392",
        "beta;": "\u03B2",
        "beth;": "\u2136",
        "between;": "\u226C",
        "Bfr;": "\u{1D505}",
        "bfr;": "\u{1D51F}",
        "bigcap;": "\u22C2",
        "bigcirc;": "\u25EF",
        "bigcup;": "\u22C3",
        "bigodot;": "\u2A00",
        "bigoplus;": "\u2A01",
        "bigotimes;": "\u2A02",
        "bigsqcup;": "\u2A06",
        "bigstar;": "\u2605",
        "bigtriangledown;": "\u25BD",
        "bigtriangleup;": "\u25B3",
        "biguplus;": "\u2A04",
        "bigvee;": "\u22C1",
        "bigwedge;": "\u22C0",
        "bkarow;": "\u290D",
        "blacklozenge;": "\u29EB",
        "blacksquare;": "\u25AA",
        "blacktriangle;": "\u25B4",
        "blacktriangledown;": "\u25BE",
        "blacktriangleleft;": "\u25C2",
        "blacktriangleright;": "\u25B8",
        "blank;": "\u2423",
        "blk12;": "\u2592",
        "blk14;": "\u2591",
        "blk34;": "\u2593",
        "block;": "\u2588",
        "bne;": "=\u20E5",
        "bnequiv;": "\u2261\u20E5",
        "bNot;": "\u2AED",
        "bnot;": "\u2310",
        "Bopf;": "\u{1D539}",
        "bopf;": "\u{1D553}",
        "bot;": "\u22A5",
        "bottom;": "\u22A5",
        "bowtie;": "\u22C8",
        "boxbox;": "\u29C9",
        "boxDL;": "\u2557",
        "boxDl;": "\u2556",
        "boxdL;": "\u2555",
        "boxdl;": "\u2510",
        "boxDR;": "\u2554",
        "boxDr;": "\u2553",
        "boxdR;": "\u2552",
        "boxdr;": "\u250C",
        "boxH;": "\u2550",
        "boxh;": "\u2500",
        "boxHD;": "\u2566",
        "boxHd;": "\u2564",
        "boxhD;": "\u2565",
        "boxhd;": "\u252C",
        "boxHU;": "\u2569",
        "boxHu;": "\u2567",
        "boxhU;": "\u2568",
        "boxhu;": "\u2534",
        "boxminus;": "\u229F",
        "boxplus;": "\u229E",
        "boxtimes;": "\u22A0",
        "boxUL;": "\u255D",
        "boxUl;": "\u255C",
        "boxuL;": "\u255B",
        "boxul;": "\u2518",
        "boxUR;": "\u255A",
        "boxUr;": "\u2559",
        "boxuR;": "\u2558",
        "boxur;": "\u2514",
        "boxV;": "\u2551",
        "boxv;": "\u2502",
        "boxVH;": "\u256C",
        "boxVh;": "\u256B",
        "boxvH;": "\u256A",
        "boxvh;": "\u253C",
        "boxVL;": "\u2563",
        "boxVl;": "\u2562",
        "boxvL;": "\u2561",
        "boxvl;": "\u2524",
        "boxVR;": "\u2560",
        "boxVr;": "\u255F",
        "boxvR;": "\u255E",
        "boxvr;": "\u251C",
        "bprime;": "\u2035",
        "Breve;": "\u02D8",
        "breve;": "\u02D8",
        "brvbar;": "\xA6",
        brvbar: "\xA6",
        "Bscr;": "\u212C",
        "bscr;": "\u{1D4B7}",
        "bsemi;": "\u204F",
        "bsim;": "\u223D",
        "bsime;": "\u22CD",
        "bsol;": "\\",
        "bsolb;": "\u29C5",
        "bsolhsub;": "\u27C8",
        "bull;": "\u2022",
        "bullet;": "\u2022",
        "bump;": "\u224E",
        "bumpE;": "\u2AAE",
        "bumpe;": "\u224F",
        "Bumpeq;": "\u224E",
        "bumpeq;": "\u224F",
        "Cacute;": "\u0106",
        "cacute;": "\u0107",
        "Cap;": "\u22D2",
        "cap;": "\u2229",
        "capand;": "\u2A44",
        "capbrcup;": "\u2A49",
        "capcap;": "\u2A4B",
        "capcup;": "\u2A47",
        "capdot;": "\u2A40",
        "CapitalDifferentialD;": "\u2145",
        "caps;": "\u2229\uFE00",
        "caret;": "\u2041",
        "caron;": "\u02C7",
        "Cayleys;": "\u212D",
        "ccaps;": "\u2A4D",
        "Ccaron;": "\u010C",
        "ccaron;": "\u010D",
        "Ccedil;": "\xC7",
        Ccedil: "\xC7",
        "ccedil;": "\xE7",
        ccedil: "\xE7",
        "Ccirc;": "\u0108",
        "ccirc;": "\u0109",
        "Cconint;": "\u2230",
        "ccups;": "\u2A4C",
        "ccupssm;": "\u2A50",
        "Cdot;": "\u010A",
        "cdot;": "\u010B",
        "cedil;": "\xB8",
        cedil: "\xB8",
        "Cedilla;": "\xB8",
        "cemptyv;": "\u29B2",
        "cent;": "\xA2",
        cent: "\xA2",
        "CenterDot;": "\xB7",
        "centerdot;": "\xB7",
        "Cfr;": "\u212D",
        "cfr;": "\u{1D520}",
        "CHcy;": "\u0427",
        "chcy;": "\u0447",
        "check;": "\u2713",
        "checkmark;": "\u2713",
        "Chi;": "\u03A7",
        "chi;": "\u03C7",
        "cir;": "\u25CB",
        "circ;": "\u02C6",
        "circeq;": "\u2257",
        "circlearrowleft;": "\u21BA",
        "circlearrowright;": "\u21BB",
        "circledast;": "\u229B",
        "circledcirc;": "\u229A",
        "circleddash;": "\u229D",
        "CircleDot;": "\u2299",
        "circledR;": "\xAE",
        "circledS;": "\u24C8",
        "CircleMinus;": "\u2296",
        "CirclePlus;": "\u2295",
        "CircleTimes;": "\u2297",
        "cirE;": "\u29C3",
        "cire;": "\u2257",
        "cirfnint;": "\u2A10",
        "cirmid;": "\u2AEF",
        "cirscir;": "\u29C2",
        "ClockwiseContourIntegral;": "\u2232",
        "CloseCurlyDoubleQuote;": "\u201D",
        "CloseCurlyQuote;": "\u2019",
        "clubs;": "\u2663",
        "clubsuit;": "\u2663",
        "Colon;": "\u2237",
        "colon;": ":",
        "Colone;": "\u2A74",
        "colone;": "\u2254",
        "coloneq;": "\u2254",
        "comma;": ",",
        "commat;": "@",
        "comp;": "\u2201",
        "compfn;": "\u2218",
        "complement;": "\u2201",
        "complexes;": "\u2102",
        "cong;": "\u2245",
        "congdot;": "\u2A6D",
        "Congruent;": "\u2261",
        "Conint;": "\u222F",
        "conint;": "\u222E",
        "ContourIntegral;": "\u222E",
        "Copf;": "\u2102",
        "copf;": "\u{1D554}",
        "coprod;": "\u2210",
        "Coproduct;": "\u2210",
        "COPY;": "\xA9",
        COPY: "\xA9",
        "copy;": "\xA9",
        copy: "\xA9",
        "copysr;": "\u2117",
        "CounterClockwiseContourIntegral;": "\u2233",
        "crarr;": "\u21B5",
        "Cross;": "\u2A2F",
        "cross;": "\u2717",
        "Cscr;": "\u{1D49E}",
        "cscr;": "\u{1D4B8}",
        "csub;": "\u2ACF",
        "csube;": "\u2AD1",
        "csup;": "\u2AD0",
        "csupe;": "\u2AD2",
        "ctdot;": "\u22EF",
        "cudarrl;": "\u2938",
        "cudarrr;": "\u2935",
        "cuepr;": "\u22DE",
        "cuesc;": "\u22DF",
        "cularr;": "\u21B6",
        "cularrp;": "\u293D",
        "Cup;": "\u22D3",
        "cup;": "\u222A",
        "cupbrcap;": "\u2A48",
        "CupCap;": "\u224D",
        "cupcap;": "\u2A46",
        "cupcup;": "\u2A4A",
        "cupdot;": "\u228D",
        "cupor;": "\u2A45",
        "cups;": "\u222A\uFE00",
        "curarr;": "\u21B7",
        "curarrm;": "\u293C",
        "curlyeqprec;": "\u22DE",
        "curlyeqsucc;": "\u22DF",
        "curlyvee;": "\u22CE",
        "curlywedge;": "\u22CF",
        "curren;": "\xA4",
        curren: "\xA4",
        "curvearrowleft;": "\u21B6",
        "curvearrowright;": "\u21B7",
        "cuvee;": "\u22CE",
        "cuwed;": "\u22CF",
        "cwconint;": "\u2232",
        "cwint;": "\u2231",
        "cylcty;": "\u232D",
        "Dagger;": "\u2021",
        "dagger;": "\u2020",
        "daleth;": "\u2138",
        "Darr;": "\u21A1",
        "dArr;": "\u21D3",
        "darr;": "\u2193",
        "dash;": "\u2010",
        "Dashv;": "\u2AE4",
        "dashv;": "\u22A3",
        "dbkarow;": "\u290F",
        "dblac;": "\u02DD",
        "Dcaron;": "\u010E",
        "dcaron;": "\u010F",
        "Dcy;": "\u0414",
        "dcy;": "\u0434",
        "DD;": "\u2145",
        "dd;": "\u2146",
        "ddagger;": "\u2021",
        "ddarr;": "\u21CA",
        "DDotrahd;": "\u2911",
        "ddotseq;": "\u2A77",
        "deg;": "\xB0",
        deg: "\xB0",
        "Del;": "\u2207",
        "Delta;": "\u0394",
        "delta;": "\u03B4",
        "demptyv;": "\u29B1",
        "dfisht;": "\u297F",
        "Dfr;": "\u{1D507}",
        "dfr;": "\u{1D521}",
        "dHar;": "\u2965",
        "dharl;": "\u21C3",
        "dharr;": "\u21C2",
        "DiacriticalAcute;": "\xB4",
        "DiacriticalDot;": "\u02D9",
        "DiacriticalDoubleAcute;": "\u02DD",
        "DiacriticalGrave;": "`",
        "DiacriticalTilde;": "\u02DC",
        "diam;": "\u22C4",
        "Diamond;": "\u22C4",
        "diamond;": "\u22C4",
        "diamondsuit;": "\u2666",
        "diams;": "\u2666",
        "die;": "\xA8",
        "DifferentialD;": "\u2146",
        "digamma;": "\u03DD",
        "disin;": "\u22F2",
        "div;": "\xF7",
        "divide;": "\xF7",
        divide: "\xF7",
        "divideontimes;": "\u22C7",
        "divonx;": "\u22C7",
        "DJcy;": "\u0402",
        "djcy;": "\u0452",
        "dlcorn;": "\u231E",
        "dlcrop;": "\u230D",
        "dollar;": "$",
        "Dopf;": "\u{1D53B}",
        "dopf;": "\u{1D555}",
        "Dot;": "\xA8",
        "dot;": "\u02D9",
        "DotDot;": "\u20DC",
        "doteq;": "\u2250",
        "doteqdot;": "\u2251",
        "DotEqual;": "\u2250",
        "dotminus;": "\u2238",
        "dotplus;": "\u2214",
        "dotsquare;": "\u22A1",
        "doublebarwedge;": "\u2306",
        "DoubleContourIntegral;": "\u222F",
        "DoubleDot;": "\xA8",
        "DoubleDownArrow;": "\u21D3",
        "DoubleLeftArrow;": "\u21D0",
        "DoubleLeftRightArrow;": "\u21D4",
        "DoubleLeftTee;": "\u2AE4",
        "DoubleLongLeftArrow;": "\u27F8",
        "DoubleLongLeftRightArrow;": "\u27FA",
        "DoubleLongRightArrow;": "\u27F9",
        "DoubleRightArrow;": "\u21D2",
        "DoubleRightTee;": "\u22A8",
        "DoubleUpArrow;": "\u21D1",
        "DoubleUpDownArrow;": "\u21D5",
        "DoubleVerticalBar;": "\u2225",
        "DownArrow;": "\u2193",
        "Downarrow;": "\u21D3",
        "downarrow;": "\u2193",
        "DownArrowBar;": "\u2913",
        "DownArrowUpArrow;": "\u21F5",
        "DownBreve;": "\u0311",
        "downdownarrows;": "\u21CA",
        "downharpoonleft;": "\u21C3",
        "downharpoonright;": "\u21C2",
        "DownLeftRightVector;": "\u2950",
        "DownLeftTeeVector;": "\u295E",
        "DownLeftVector;": "\u21BD",
        "DownLeftVectorBar;": "\u2956",
        "DownRightTeeVector;": "\u295F",
        "DownRightVector;": "\u21C1",
        "DownRightVectorBar;": "\u2957",
        "DownTee;": "\u22A4",
        "DownTeeArrow;": "\u21A7",
        "drbkarow;": "\u2910",
        "drcorn;": "\u231F",
        "drcrop;": "\u230C",
        "Dscr;": "\u{1D49F}",
        "dscr;": "\u{1D4B9}",
        "DScy;": "\u0405",
        "dscy;": "\u0455",
        "dsol;": "\u29F6",
        "Dstrok;": "\u0110",
        "dstrok;": "\u0111",
        "dtdot;": "\u22F1",
        "dtri;": "\u25BF",
        "dtrif;": "\u25BE",
        "duarr;": "\u21F5",
        "duhar;": "\u296F",
        "dwangle;": "\u29A6",
        "DZcy;": "\u040F",
        "dzcy;": "\u045F",
        "dzigrarr;": "\u27FF",
        "Eacute;": "\xC9",
        Eacute: "\xC9",
        "eacute;": "\xE9",
        eacute: "\xE9",
        "easter;": "\u2A6E",
        "Ecaron;": "\u011A",
        "ecaron;": "\u011B",
        "ecir;": "\u2256",
        "Ecirc;": "\xCA",
        Ecirc: "\xCA",
        "ecirc;": "\xEA",
        ecirc: "\xEA",
        "ecolon;": "\u2255",
        "Ecy;": "\u042D",
        "ecy;": "\u044D",
        "eDDot;": "\u2A77",
        "Edot;": "\u0116",
        "eDot;": "\u2251",
        "edot;": "\u0117",
        "ee;": "\u2147",
        "efDot;": "\u2252",
        "Efr;": "\u{1D508}",
        "efr;": "\u{1D522}",
        "eg;": "\u2A9A",
        "Egrave;": "\xC8",
        Egrave: "\xC8",
        "egrave;": "\xE8",
        egrave: "\xE8",
        "egs;": "\u2A96",
        "egsdot;": "\u2A98",
        "el;": "\u2A99",
        "Element;": "\u2208",
        "elinters;": "\u23E7",
        "ell;": "\u2113",
        "els;": "\u2A95",
        "elsdot;": "\u2A97",
        "Emacr;": "\u0112",
        "emacr;": "\u0113",
        "empty;": "\u2205",
        "emptyset;": "\u2205",
        "EmptySmallSquare;": "\u25FB",
        "emptyv;": "\u2205",
        "EmptyVerySmallSquare;": "\u25AB",
        "emsp;": "\u2003",
        "emsp13;": "\u2004",
        "emsp14;": "\u2005",
        "ENG;": "\u014A",
        "eng;": "\u014B",
        "ensp;": "\u2002",
        "Eogon;": "\u0118",
        "eogon;": "\u0119",
        "Eopf;": "\u{1D53C}",
        "eopf;": "\u{1D556}",
        "epar;": "\u22D5",
        "eparsl;": "\u29E3",
        "eplus;": "\u2A71",
        "epsi;": "\u03B5",
        "Epsilon;": "\u0395",
        "epsilon;": "\u03B5",
        "epsiv;": "\u03F5",
        "eqcirc;": "\u2256",
        "eqcolon;": "\u2255",
        "eqsim;": "\u2242",
        "eqslantgtr;": "\u2A96",
        "eqslantless;": "\u2A95",
        "Equal;": "\u2A75",
        "equals;": "=",
        "EqualTilde;": "\u2242",
        "equest;": "\u225F",
        "Equilibrium;": "\u21CC",
        "equiv;": "\u2261",
        "equivDD;": "\u2A78",
        "eqvparsl;": "\u29E5",
        "erarr;": "\u2971",
        "erDot;": "\u2253",
        "Escr;": "\u2130",
        "escr;": "\u212F",
        "esdot;": "\u2250",
        "Esim;": "\u2A73",
        "esim;": "\u2242",
        "Eta;": "\u0397",
        "eta;": "\u03B7",
        "ETH;": "\xD0",
        ETH: "\xD0",
        "eth;": "\xF0",
        eth: "\xF0",
        "Euml;": "\xCB",
        Euml: "\xCB",
        "euml;": "\xEB",
        euml: "\xEB",
        "euro;": "\u20AC",
        "excl;": "!",
        "exist;": "\u2203",
        "Exists;": "\u2203",
        "expectation;": "\u2130",
        "ExponentialE;": "\u2147",
        "exponentiale;": "\u2147",
        "fallingdotseq;": "\u2252",
        "Fcy;": "\u0424",
        "fcy;": "\u0444",
        "female;": "\u2640",
        "ffilig;": "\uFB03",
        "fflig;": "\uFB00",
        "ffllig;": "\uFB04",
        "Ffr;": "\u{1D509}",
        "ffr;": "\u{1D523}",
        "filig;": "\uFB01",
        "FilledSmallSquare;": "\u25FC",
        "FilledVerySmallSquare;": "\u25AA",
        "fjlig;": "fj",
        "flat;": "\u266D",
        "fllig;": "\uFB02",
        "fltns;": "\u25B1",
        "fnof;": "\u0192",
        "Fopf;": "\u{1D53D}",
        "fopf;": "\u{1D557}",
        "ForAll;": "\u2200",
        "forall;": "\u2200",
        "fork;": "\u22D4",
        "forkv;": "\u2AD9",
        "Fouriertrf;": "\u2131",
        "fpartint;": "\u2A0D",
        "frac12;": "\xBD",
        frac12: "\xBD",
        "frac13;": "\u2153",
        "frac14;": "\xBC",
        frac14: "\xBC",
        "frac15;": "\u2155",
        "frac16;": "\u2159",
        "frac18;": "\u215B",
        "frac23;": "\u2154",
        "frac25;": "\u2156",
        "frac34;": "\xBE",
        frac34: "\xBE",
        "frac35;": "\u2157",
        "frac38;": "\u215C",
        "frac45;": "\u2158",
        "frac56;": "\u215A",
        "frac58;": "\u215D",
        "frac78;": "\u215E",
        "frasl;": "\u2044",
        "frown;": "\u2322",
        "Fscr;": "\u2131",
        "fscr;": "\u{1D4BB}",
        "gacute;": "\u01F5",
        "Gamma;": "\u0393",
        "gamma;": "\u03B3",
        "Gammad;": "\u03DC",
        "gammad;": "\u03DD",
        "gap;": "\u2A86",
        "Gbreve;": "\u011E",
        "gbreve;": "\u011F",
        "Gcedil;": "\u0122",
        "Gcirc;": "\u011C",
        "gcirc;": "\u011D",
        "Gcy;": "\u0413",
        "gcy;": "\u0433",
        "Gdot;": "\u0120",
        "gdot;": "\u0121",
        "gE;": "\u2267",
        "ge;": "\u2265",
        "gEl;": "\u2A8C",
        "gel;": "\u22DB",
        "geq;": "\u2265",
        "geqq;": "\u2267",
        "geqslant;": "\u2A7E",
        "ges;": "\u2A7E",
        "gescc;": "\u2AA9",
        "gesdot;": "\u2A80",
        "gesdoto;": "\u2A82",
        "gesdotol;": "\u2A84",
        "gesl;": "\u22DB\uFE00",
        "gesles;": "\u2A94",
        "Gfr;": "\u{1D50A}",
        "gfr;": "\u{1D524}",
        "Gg;": "\u22D9",
        "gg;": "\u226B",
        "ggg;": "\u22D9",
        "gimel;": "\u2137",
        "GJcy;": "\u0403",
        "gjcy;": "\u0453",
        "gl;": "\u2277",
        "gla;": "\u2AA5",
        "glE;": "\u2A92",
        "glj;": "\u2AA4",
        "gnap;": "\u2A8A",
        "gnapprox;": "\u2A8A",
        "gnE;": "\u2269",
        "gne;": "\u2A88",
        "gneq;": "\u2A88",
        "gneqq;": "\u2269",
        "gnsim;": "\u22E7",
        "Gopf;": "\u{1D53E}",
        "gopf;": "\u{1D558}",
        "grave;": "`",
        "GreaterEqual;": "\u2265",
        "GreaterEqualLess;": "\u22DB",
        "GreaterFullEqual;": "\u2267",
        "GreaterGreater;": "\u2AA2",
        "GreaterLess;": "\u2277",
        "GreaterSlantEqual;": "\u2A7E",
        "GreaterTilde;": "\u2273",
        "Gscr;": "\u{1D4A2}",
        "gscr;": "\u210A",
        "gsim;": "\u2273",
        "gsime;": "\u2A8E",
        "gsiml;": "\u2A90",
        "GT;": ">",
        GT: ">",
        "Gt;": "\u226B",
        "gt;": ">",
        gt: ">",
        "gtcc;": "\u2AA7",
        "gtcir;": "\u2A7A",
        "gtdot;": "\u22D7",
        "gtlPar;": "\u2995",
        "gtquest;": "\u2A7C",
        "gtrapprox;": "\u2A86",
        "gtrarr;": "\u2978",
        "gtrdot;": "\u22D7",
        "gtreqless;": "\u22DB",
        "gtreqqless;": "\u2A8C",
        "gtrless;": "\u2277",
        "gtrsim;": "\u2273",
        "gvertneqq;": "\u2269\uFE00",
        "gvnE;": "\u2269\uFE00",
        "Hacek;": "\u02C7",
        "hairsp;": "\u200A",
        "half;": "\xBD",
        "hamilt;": "\u210B",
        "HARDcy;": "\u042A",
        "hardcy;": "\u044A",
        "hArr;": "\u21D4",
        "harr;": "\u2194",
        "harrcir;": "\u2948",
        "harrw;": "\u21AD",
        "Hat;": "^",
        "hbar;": "\u210F",
        "Hcirc;": "\u0124",
        "hcirc;": "\u0125",
        "hearts;": "\u2665",
        "heartsuit;": "\u2665",
        "hellip;": "\u2026",
        "hercon;": "\u22B9",
        "Hfr;": "\u210C",
        "hfr;": "\u{1D525}",
        "HilbertSpace;": "\u210B",
        "hksearow;": "\u2925",
        "hkswarow;": "\u2926",
        "hoarr;": "\u21FF",
        "homtht;": "\u223B",
        "hookleftarrow;": "\u21A9",
        "hookrightarrow;": "\u21AA",
        "Hopf;": "\u210D",
        "hopf;": "\u{1D559}",
        "horbar;": "\u2015",
        "HorizontalLine;": "\u2500",
        "Hscr;": "\u210B",
        "hscr;": "\u{1D4BD}",
        "hslash;": "\u210F",
        "Hstrok;": "\u0126",
        "hstrok;": "\u0127",
        "HumpDownHump;": "\u224E",
        "HumpEqual;": "\u224F",
        "hybull;": "\u2043",
        "hyphen;": "\u2010",
        "Iacute;": "\xCD",
        Iacute: "\xCD",
        "iacute;": "\xED",
        iacute: "\xED",
        "ic;": "\u2063",
        "Icirc;": "\xCE",
        Icirc: "\xCE",
        "icirc;": "\xEE",
        icirc: "\xEE",
        "Icy;": "\u0418",
        "icy;": "\u0438",
        "Idot;": "\u0130",
        "IEcy;": "\u0415",
        "iecy;": "\u0435",
        "iexcl;": "\xA1",
        iexcl: "\xA1",
        "iff;": "\u21D4",
        "Ifr;": "\u2111",
        "ifr;": "\u{1D526}",
        "Igrave;": "\xCC",
        Igrave: "\xCC",
        "igrave;": "\xEC",
        igrave: "\xEC",
        "ii;": "\u2148",
        "iiiint;": "\u2A0C",
        "iiint;": "\u222D",
        "iinfin;": "\u29DC",
        "iiota;": "\u2129",
        "IJlig;": "\u0132",
        "ijlig;": "\u0133",
        "Im;": "\u2111",
        "Imacr;": "\u012A",
        "imacr;": "\u012B",
        "image;": "\u2111",
        "ImaginaryI;": "\u2148",
        "imagline;": "\u2110",
        "imagpart;": "\u2111",
        "imath;": "\u0131",
        "imof;": "\u22B7",
        "imped;": "\u01B5",
        "Implies;": "\u21D2",
        "in;": "\u2208",
        "incare;": "\u2105",
        "infin;": "\u221E",
        "infintie;": "\u29DD",
        "inodot;": "\u0131",
        "Int;": "\u222C",
        "int;": "\u222B",
        "intcal;": "\u22BA",
        "integers;": "\u2124",
        "Integral;": "\u222B",
        "intercal;": "\u22BA",
        "Intersection;": "\u22C2",
        "intlarhk;": "\u2A17",
        "intprod;": "\u2A3C",
        "InvisibleComma;": "\u2063",
        "InvisibleTimes;": "\u2062",
        "IOcy;": "\u0401",
        "iocy;": "\u0451",
        "Iogon;": "\u012E",
        "iogon;": "\u012F",
        "Iopf;": "\u{1D540}",
        "iopf;": "\u{1D55A}",
        "Iota;": "\u0399",
        "iota;": "\u03B9",
        "iprod;": "\u2A3C",
        "iquest;": "\xBF",
        iquest: "\xBF",
        "Iscr;": "\u2110",
        "iscr;": "\u{1D4BE}",
        "isin;": "\u2208",
        "isindot;": "\u22F5",
        "isinE;": "\u22F9",
        "isins;": "\u22F4",
        "isinsv;": "\u22F3",
        "isinv;": "\u2208",
        "it;": "\u2062",
        "Itilde;": "\u0128",
        "itilde;": "\u0129",
        "Iukcy;": "\u0406",
        "iukcy;": "\u0456",
        "Iuml;": "\xCF",
        Iuml: "\xCF",
        "iuml;": "\xEF",
        iuml: "\xEF",
        "Jcirc;": "\u0134",
        "jcirc;": "\u0135",
        "Jcy;": "\u0419",
        "jcy;": "\u0439",
        "Jfr;": "\u{1D50D}",
        "jfr;": "\u{1D527}",
        "jmath;": "\u0237",
        "Jopf;": "\u{1D541}",
        "jopf;": "\u{1D55B}",
        "Jscr;": "\u{1D4A5}",
        "jscr;": "\u{1D4BF}",
        "Jsercy;": "\u0408",
        "jsercy;": "\u0458",
        "Jukcy;": "\u0404",
        "jukcy;": "\u0454",
        "Kappa;": "\u039A",
        "kappa;": "\u03BA",
        "kappav;": "\u03F0",
        "Kcedil;": "\u0136",
        "kcedil;": "\u0137",
        "Kcy;": "\u041A",
        "kcy;": "\u043A",
        "Kfr;": "\u{1D50E}",
        "kfr;": "\u{1D528}",
        "kgreen;": "\u0138",
        "KHcy;": "\u0425",
        "khcy;": "\u0445",
        "KJcy;": "\u040C",
        "kjcy;": "\u045C",
        "Kopf;": "\u{1D542}",
        "kopf;": "\u{1D55C}",
        "Kscr;": "\u{1D4A6}",
        "kscr;": "\u{1D4C0}",
        "lAarr;": "\u21DA",
        "Lacute;": "\u0139",
        "lacute;": "\u013A",
        "laemptyv;": "\u29B4",
        "lagran;": "\u2112",
        "Lambda;": "\u039B",
        "lambda;": "\u03BB",
        "Lang;": "\u27EA",
        "lang;": "\u27E8",
        "langd;": "\u2991",
        "langle;": "\u27E8",
        "lap;": "\u2A85",
        "Laplacetrf;": "\u2112",
        "laquo;": "\xAB",
        laquo: "\xAB",
        "Larr;": "\u219E",
        "lArr;": "\u21D0",
        "larr;": "\u2190",
        "larrb;": "\u21E4",
        "larrbfs;": "\u291F",
        "larrfs;": "\u291D",
        "larrhk;": "\u21A9",
        "larrlp;": "\u21AB",
        "larrpl;": "\u2939",
        "larrsim;": "\u2973",
        "larrtl;": "\u21A2",
        "lat;": "\u2AAB",
        "lAtail;": "\u291B",
        "latail;": "\u2919",
        "late;": "\u2AAD",
        "lates;": "\u2AAD\uFE00",
        "lBarr;": "\u290E",
        "lbarr;": "\u290C",
        "lbbrk;": "\u2772",
        "lbrace;": "{",
        "lbrack;": "[",
        "lbrke;": "\u298B",
        "lbrksld;": "\u298F",
        "lbrkslu;": "\u298D",
        "Lcaron;": "\u013D",
        "lcaron;": "\u013E",
        "Lcedil;": "\u013B",
        "lcedil;": "\u013C",
        "lceil;": "\u2308",
        "lcub;": "{",
        "Lcy;": "\u041B",
        "lcy;": "\u043B",
        "ldca;": "\u2936",
        "ldquo;": "\u201C",
        "ldquor;": "\u201E",
        "ldrdhar;": "\u2967",
        "ldrushar;": "\u294B",
        "ldsh;": "\u21B2",
        "lE;": "\u2266",
        "le;": "\u2264",
        "LeftAngleBracket;": "\u27E8",
        "LeftArrow;": "\u2190",
        "Leftarrow;": "\u21D0",
        "leftarrow;": "\u2190",
        "LeftArrowBar;": "\u21E4",
        "LeftArrowRightArrow;": "\u21C6",
        "leftarrowtail;": "\u21A2",
        "LeftCeiling;": "\u2308",
        "LeftDoubleBracket;": "\u27E6",
        "LeftDownTeeVector;": "\u2961",
        "LeftDownVector;": "\u21C3",
        "LeftDownVectorBar;": "\u2959",
        "LeftFloor;": "\u230A",
        "leftharpoondown;": "\u21BD",
        "leftharpoonup;": "\u21BC",
        "leftleftarrows;": "\u21C7",
        "LeftRightArrow;": "\u2194",
        "Leftrightarrow;": "\u21D4",
        "leftrightarrow;": "\u2194",
        "leftrightarrows;": "\u21C6",
        "leftrightharpoons;": "\u21CB",
        "leftrightsquigarrow;": "\u21AD",
        "LeftRightVector;": "\u294E",
        "LeftTee;": "\u22A3",
        "LeftTeeArrow;": "\u21A4",
        "LeftTeeVector;": "\u295A",
        "leftthreetimes;": "\u22CB",
        "LeftTriangle;": "\u22B2",
        "LeftTriangleBar;": "\u29CF",
        "LeftTriangleEqual;": "\u22B4",
        "LeftUpDownVector;": "\u2951",
        "LeftUpTeeVector;": "\u2960",
        "LeftUpVector;": "\u21BF",
        "LeftUpVectorBar;": "\u2958",
        "LeftVector;": "\u21BC",
        "LeftVectorBar;": "\u2952",
        "lEg;": "\u2A8B",
        "leg;": "\u22DA",
        "leq;": "\u2264",
        "leqq;": "\u2266",
        "leqslant;": "\u2A7D",
        "les;": "\u2A7D",
        "lescc;": "\u2AA8",
        "lesdot;": "\u2A7F",
        "lesdoto;": "\u2A81",
        "lesdotor;": "\u2A83",
        "lesg;": "\u22DA\uFE00",
        "lesges;": "\u2A93",
        "lessapprox;": "\u2A85",
        "lessdot;": "\u22D6",
        "lesseqgtr;": "\u22DA",
        "lesseqqgtr;": "\u2A8B",
        "LessEqualGreater;": "\u22DA",
        "LessFullEqual;": "\u2266",
        "LessGreater;": "\u2276",
        "lessgtr;": "\u2276",
        "LessLess;": "\u2AA1",
        "lesssim;": "\u2272",
        "LessSlantEqual;": "\u2A7D",
        "LessTilde;": "\u2272",
        "lfisht;": "\u297C",
        "lfloor;": "\u230A",
        "Lfr;": "\u{1D50F}",
        "lfr;": "\u{1D529}",
        "lg;": "\u2276",
        "lgE;": "\u2A91",
        "lHar;": "\u2962",
        "lhard;": "\u21BD",
        "lharu;": "\u21BC",
        "lharul;": "\u296A",
        "lhblk;": "\u2584",
        "LJcy;": "\u0409",
        "ljcy;": "\u0459",
        "Ll;": "\u22D8",
        "ll;": "\u226A",
        "llarr;": "\u21C7",
        "llcorner;": "\u231E",
        "Lleftarrow;": "\u21DA",
        "llhard;": "\u296B",
        "lltri;": "\u25FA",
        "Lmidot;": "\u013F",
        "lmidot;": "\u0140",
        "lmoust;": "\u23B0",
        "lmoustache;": "\u23B0",
        "lnap;": "\u2A89",
        "lnapprox;": "\u2A89",
        "lnE;": "\u2268",
        "lne;": "\u2A87",
        "lneq;": "\u2A87",
        "lneqq;": "\u2268",
        "lnsim;": "\u22E6",
        "loang;": "\u27EC",
        "loarr;": "\u21FD",
        "lobrk;": "\u27E6",
        "LongLeftArrow;": "\u27F5",
        "Longleftarrow;": "\u27F8",
        "longleftarrow;": "\u27F5",
        "LongLeftRightArrow;": "\u27F7",
        "Longleftrightarrow;": "\u27FA",
        "longleftrightarrow;": "\u27F7",
        "longmapsto;": "\u27FC",
        "LongRightArrow;": "\u27F6",
        "Longrightarrow;": "\u27F9",
        "longrightarrow;": "\u27F6",
        "looparrowleft;": "\u21AB",
        "looparrowright;": "\u21AC",
        "lopar;": "\u2985",
        "Lopf;": "\u{1D543}",
        "lopf;": "\u{1D55D}",
        "loplus;": "\u2A2D",
        "lotimes;": "\u2A34",
        "lowast;": "\u2217",
        "lowbar;": "_",
        "LowerLeftArrow;": "\u2199",
        "LowerRightArrow;": "\u2198",
        "loz;": "\u25CA",
        "lozenge;": "\u25CA",
        "lozf;": "\u29EB",
        "lpar;": "(",
        "lparlt;": "\u2993",
        "lrarr;": "\u21C6",
        "lrcorner;": "\u231F",
        "lrhar;": "\u21CB",
        "lrhard;": "\u296D",
        "lrm;": "\u200E",
        "lrtri;": "\u22BF",
        "lsaquo;": "\u2039",
        "Lscr;": "\u2112",
        "lscr;": "\u{1D4C1}",
        "Lsh;": "\u21B0",
        "lsh;": "\u21B0",
        "lsim;": "\u2272",
        "lsime;": "\u2A8D",
        "lsimg;": "\u2A8F",
        "lsqb;": "[",
        "lsquo;": "\u2018",
        "lsquor;": "\u201A",
        "Lstrok;": "\u0141",
        "lstrok;": "\u0142",
        "LT;": "<",
        LT: "<",
        "Lt;": "\u226A",
        "lt;": "<",
        lt: "<",
        "ltcc;": "\u2AA6",
        "ltcir;": "\u2A79",
        "ltdot;": "\u22D6",
        "lthree;": "\u22CB",
        "ltimes;": "\u22C9",
        "ltlarr;": "\u2976",
        "ltquest;": "\u2A7B",
        "ltri;": "\u25C3",
        "ltrie;": "\u22B4",
        "ltrif;": "\u25C2",
        "ltrPar;": "\u2996",
        "lurdshar;": "\u294A",
        "luruhar;": "\u2966",
        "lvertneqq;": "\u2268\uFE00",
        "lvnE;": "\u2268\uFE00",
        "macr;": "\xAF",
        macr: "\xAF",
        "male;": "\u2642",
        "malt;": "\u2720",
        "maltese;": "\u2720",
        "Map;": "\u2905",
        "map;": "\u21A6",
        "mapsto;": "\u21A6",
        "mapstodown;": "\u21A7",
        "mapstoleft;": "\u21A4",
        "mapstoup;": "\u21A5",
        "marker;": "\u25AE",
        "mcomma;": "\u2A29",
        "Mcy;": "\u041C",
        "mcy;": "\u043C",
        "mdash;": "\u2014",
        "mDDot;": "\u223A",
        "measuredangle;": "\u2221",
        "MediumSpace;": "\u205F",
        "Mellintrf;": "\u2133",
        "Mfr;": "\u{1D510}",
        "mfr;": "\u{1D52A}",
        "mho;": "\u2127",
        "micro;": "\xB5",
        micro: "\xB5",
        "mid;": "\u2223",
        "midast;": "*",
        "midcir;": "\u2AF0",
        "middot;": "\xB7",
        middot: "\xB7",
        "minus;": "\u2212",
        "minusb;": "\u229F",
        "minusd;": "\u2238",
        "minusdu;": "\u2A2A",
        "MinusPlus;": "\u2213",
        "mlcp;": "\u2ADB",
        "mldr;": "\u2026",
        "mnplus;": "\u2213",
        "models;": "\u22A7",
        "Mopf;": "\u{1D544}",
        "mopf;": "\u{1D55E}",
        "mp;": "\u2213",
        "Mscr;": "\u2133",
        "mscr;": "\u{1D4C2}",
        "mstpos;": "\u223E",
        "Mu;": "\u039C",
        "mu;": "\u03BC",
        "multimap;": "\u22B8",
        "mumap;": "\u22B8",
        "nabla;": "\u2207",
        "Nacute;": "\u0143",
        "nacute;": "\u0144",
        "nang;": "\u2220\u20D2",
        "nap;": "\u2249",
        "napE;": "\u2A70\u0338",
        "napid;": "\u224B\u0338",
        "napos;": "\u0149",
        "napprox;": "\u2249",
        "natur;": "\u266E",
        "natural;": "\u266E",
        "naturals;": "\u2115",
        "nbsp;": "\xA0",
        nbsp: "\xA0",
        "nbump;": "\u224E\u0338",
        "nbumpe;": "\u224F\u0338",
        "ncap;": "\u2A43",
        "Ncaron;": "\u0147",
        "ncaron;": "\u0148",
        "Ncedil;": "\u0145",
        "ncedil;": "\u0146",
        "ncong;": "\u2247",
        "ncongdot;": "\u2A6D\u0338",
        "ncup;": "\u2A42",
        "Ncy;": "\u041D",
        "ncy;": "\u043D",
        "ndash;": "\u2013",
        "ne;": "\u2260",
        "nearhk;": "\u2924",
        "neArr;": "\u21D7",
        "nearr;": "\u2197",
        "nearrow;": "\u2197",
        "nedot;": "\u2250\u0338",
        "NegativeMediumSpace;": "\u200B",
        "NegativeThickSpace;": "\u200B",
        "NegativeThinSpace;": "\u200B",
        "NegativeVeryThinSpace;": "\u200B",
        "nequiv;": "\u2262",
        "nesear;": "\u2928",
        "nesim;": "\u2242\u0338",
        "NestedGreaterGreater;": "\u226B",
        "NestedLessLess;": "\u226A",
        "NewLine;": `
`,
        "nexist;": "\u2204",
        "nexists;": "\u2204",
        "Nfr;": "\u{1D511}",
        "nfr;": "\u{1D52B}",
        "ngE;": "\u2267\u0338",
        "nge;": "\u2271",
        "ngeq;": "\u2271",
        "ngeqq;": "\u2267\u0338",
        "ngeqslant;": "\u2A7E\u0338",
        "nges;": "\u2A7E\u0338",
        "nGg;": "\u22D9\u0338",
        "ngsim;": "\u2275",
        "nGt;": "\u226B\u20D2",
        "ngt;": "\u226F",
        "ngtr;": "\u226F",
        "nGtv;": "\u226B\u0338",
        "nhArr;": "\u21CE",
        "nharr;": "\u21AE",
        "nhpar;": "\u2AF2",
        "ni;": "\u220B",
        "nis;": "\u22FC",
        "nisd;": "\u22FA",
        "niv;": "\u220B",
        "NJcy;": "\u040A",
        "njcy;": "\u045A",
        "nlArr;": "\u21CD",
        "nlarr;": "\u219A",
        "nldr;": "\u2025",
        "nlE;": "\u2266\u0338",
        "nle;": "\u2270",
        "nLeftarrow;": "\u21CD",
        "nleftarrow;": "\u219A",
        "nLeftrightarrow;": "\u21CE",
        "nleftrightarrow;": "\u21AE",
        "nleq;": "\u2270",
        "nleqq;": "\u2266\u0338",
        "nleqslant;": "\u2A7D\u0338",
        "nles;": "\u2A7D\u0338",
        "nless;": "\u226E",
        "nLl;": "\u22D8\u0338",
        "nlsim;": "\u2274",
        "nLt;": "\u226A\u20D2",
        "nlt;": "\u226E",
        "nltri;": "\u22EA",
        "nltrie;": "\u22EC",
        "nLtv;": "\u226A\u0338",
        "nmid;": "\u2224",
        "NoBreak;": "\u2060",
        "NonBreakingSpace;": "\xA0",
        "Nopf;": "\u2115",
        "nopf;": "\u{1D55F}",
        "Not;": "\u2AEC",
        "not;": "\xAC",
        not: "\xAC",
        "NotCongruent;": "\u2262",
        "NotCupCap;": "\u226D",
        "NotDoubleVerticalBar;": "\u2226",
        "NotElement;": "\u2209",
        "NotEqual;": "\u2260",
        "NotEqualTilde;": "\u2242\u0338",
        "NotExists;": "\u2204",
        "NotGreater;": "\u226F",
        "NotGreaterEqual;": "\u2271",
        "NotGreaterFullEqual;": "\u2267\u0338",
        "NotGreaterGreater;": "\u226B\u0338",
        "NotGreaterLess;": "\u2279",
        "NotGreaterSlantEqual;": "\u2A7E\u0338",
        "NotGreaterTilde;": "\u2275",
        "NotHumpDownHump;": "\u224E\u0338",
        "NotHumpEqual;": "\u224F\u0338",
        "notin;": "\u2209",
        "notindot;": "\u22F5\u0338",
        "notinE;": "\u22F9\u0338",
        "notinva;": "\u2209",
        "notinvb;": "\u22F7",
        "notinvc;": "\u22F6",
        "NotLeftTriangle;": "\u22EA",
        "NotLeftTriangleBar;": "\u29CF\u0338",
        "NotLeftTriangleEqual;": "\u22EC",
        "NotLess;": "\u226E",
        "NotLessEqual;": "\u2270",
        "NotLessGreater;": "\u2278",
        "NotLessLess;": "\u226A\u0338",
        "NotLessSlantEqual;": "\u2A7D\u0338",
        "NotLessTilde;": "\u2274",
        "NotNestedGreaterGreater;": "\u2AA2\u0338",
        "NotNestedLessLess;": "\u2AA1\u0338",
        "notni;": "\u220C",
        "notniva;": "\u220C",
        "notnivb;": "\u22FE",
        "notnivc;": "\u22FD",
        "NotPrecedes;": "\u2280",
        "NotPrecedesEqual;": "\u2AAF\u0338",
        "NotPrecedesSlantEqual;": "\u22E0",
        "NotReverseElement;": "\u220C",
        "NotRightTriangle;": "\u22EB",
        "NotRightTriangleBar;": "\u29D0\u0338",
        "NotRightTriangleEqual;": "\u22ED",
        "NotSquareSubset;": "\u228F\u0338",
        "NotSquareSubsetEqual;": "\u22E2",
        "NotSquareSuperset;": "\u2290\u0338",
        "NotSquareSupersetEqual;": "\u22E3",
        "NotSubset;": "\u2282\u20D2",
        "NotSubsetEqual;": "\u2288",
        "NotSucceeds;": "\u2281",
        "NotSucceedsEqual;": "\u2AB0\u0338",
        "NotSucceedsSlantEqual;": "\u22E1",
        "NotSucceedsTilde;": "\u227F\u0338",
        "NotSuperset;": "\u2283\u20D2",
        "NotSupersetEqual;": "\u2289",
        "NotTilde;": "\u2241",
        "NotTildeEqual;": "\u2244",
        "NotTildeFullEqual;": "\u2247",
        "NotTildeTilde;": "\u2249",
        "NotVerticalBar;": "\u2224",
        "npar;": "\u2226",
        "nparallel;": "\u2226",
        "nparsl;": "\u2AFD\u20E5",
        "npart;": "\u2202\u0338",
        "npolint;": "\u2A14",
        "npr;": "\u2280",
        "nprcue;": "\u22E0",
        "npre;": "\u2AAF\u0338",
        "nprec;": "\u2280",
        "npreceq;": "\u2AAF\u0338",
        "nrArr;": "\u21CF",
        "nrarr;": "\u219B",
        "nrarrc;": "\u2933\u0338",
        "nrarrw;": "\u219D\u0338",
        "nRightarrow;": "\u21CF",
        "nrightarrow;": "\u219B",
        "nrtri;": "\u22EB",
        "nrtrie;": "\u22ED",
        "nsc;": "\u2281",
        "nsccue;": "\u22E1",
        "nsce;": "\u2AB0\u0338",
        "Nscr;": "\u{1D4A9}",
        "nscr;": "\u{1D4C3}",
        "nshortmid;": "\u2224",
        "nshortparallel;": "\u2226",
        "nsim;": "\u2241",
        "nsime;": "\u2244",
        "nsimeq;": "\u2244",
        "nsmid;": "\u2224",
        "nspar;": "\u2226",
        "nsqsube;": "\u22E2",
        "nsqsupe;": "\u22E3",
        "nsub;": "\u2284",
        "nsubE;": "\u2AC5\u0338",
        "nsube;": "\u2288",
        "nsubset;": "\u2282\u20D2",
        "nsubseteq;": "\u2288",
        "nsubseteqq;": "\u2AC5\u0338",
        "nsucc;": "\u2281",
        "nsucceq;": "\u2AB0\u0338",
        "nsup;": "\u2285",
        "nsupE;": "\u2AC6\u0338",
        "nsupe;": "\u2289",
        "nsupset;": "\u2283\u20D2",
        "nsupseteq;": "\u2289",
        "nsupseteqq;": "\u2AC6\u0338",
        "ntgl;": "\u2279",
        "Ntilde;": "\xD1",
        Ntilde: "\xD1",
        "ntilde;": "\xF1",
        ntilde: "\xF1",
        "ntlg;": "\u2278",
        "ntriangleleft;": "\u22EA",
        "ntrianglelefteq;": "\u22EC",
        "ntriangleright;": "\u22EB",
        "ntrianglerighteq;": "\u22ED",
        "Nu;": "\u039D",
        "nu;": "\u03BD",
        "num;": "#",
        "numero;": "\u2116",
        "numsp;": "\u2007",
        "nvap;": "\u224D\u20D2",
        "nVDash;": "\u22AF",
        "nVdash;": "\u22AE",
        "nvDash;": "\u22AD",
        "nvdash;": "\u22AC",
        "nvge;": "\u2265\u20D2",
        "nvgt;": ">\u20D2",
        "nvHarr;": "\u2904",
        "nvinfin;": "\u29DE",
        "nvlArr;": "\u2902",
        "nvle;": "\u2264\u20D2",
        "nvlt;": "<\u20D2",
        "nvltrie;": "\u22B4\u20D2",
        "nvrArr;": "\u2903",
        "nvrtrie;": "\u22B5\u20D2",
        "nvsim;": "\u223C\u20D2",
        "nwarhk;": "\u2923",
        "nwArr;": "\u21D6",
        "nwarr;": "\u2196",
        "nwarrow;": "\u2196",
        "nwnear;": "\u2927",
        "Oacute;": "\xD3",
        Oacute: "\xD3",
        "oacute;": "\xF3",
        oacute: "\xF3",
        "oast;": "\u229B",
        "ocir;": "\u229A",
        "Ocirc;": "\xD4",
        Ocirc: "\xD4",
        "ocirc;": "\xF4",
        ocirc: "\xF4",
        "Ocy;": "\u041E",
        "ocy;": "\u043E",
        "odash;": "\u229D",
        "Odblac;": "\u0150",
        "odblac;": "\u0151",
        "odiv;": "\u2A38",
        "odot;": "\u2299",
        "odsold;": "\u29BC",
        "OElig;": "\u0152",
        "oelig;": "\u0153",
        "ofcir;": "\u29BF",
        "Ofr;": "\u{1D512}",
        "ofr;": "\u{1D52C}",
        "ogon;": "\u02DB",
        "Ograve;": "\xD2",
        Ograve: "\xD2",
        "ograve;": "\xF2",
        ograve: "\xF2",
        "ogt;": "\u29C1",
        "ohbar;": "\u29B5",
        "ohm;": "\u03A9",
        "oint;": "\u222E",
        "olarr;": "\u21BA",
        "olcir;": "\u29BE",
        "olcross;": "\u29BB",
        "oline;": "\u203E",
        "olt;": "\u29C0",
        "Omacr;": "\u014C",
        "omacr;": "\u014D",
        "Omega;": "\u03A9",
        "omega;": "\u03C9",
        "Omicron;": "\u039F",
        "omicron;": "\u03BF",
        "omid;": "\u29B6",
        "ominus;": "\u2296",
        "Oopf;": "\u{1D546}",
        "oopf;": "\u{1D560}",
        "opar;": "\u29B7",
        "OpenCurlyDoubleQuote;": "\u201C",
        "OpenCurlyQuote;": "\u2018",
        "operp;": "\u29B9",
        "oplus;": "\u2295",
        "Or;": "\u2A54",
        "or;": "\u2228",
        "orarr;": "\u21BB",
        "ord;": "\u2A5D",
        "order;": "\u2134",
        "orderof;": "\u2134",
        "ordf;": "\xAA",
        ordf: "\xAA",
        "ordm;": "\xBA",
        ordm: "\xBA",
        "origof;": "\u22B6",
        "oror;": "\u2A56",
        "orslope;": "\u2A57",
        "orv;": "\u2A5B",
        "oS;": "\u24C8",
        "Oscr;": "\u{1D4AA}",
        "oscr;": "\u2134",
        "Oslash;": "\xD8",
        Oslash: "\xD8",
        "oslash;": "\xF8",
        oslash: "\xF8",
        "osol;": "\u2298",
        "Otilde;": "\xD5",
        Otilde: "\xD5",
        "otilde;": "\xF5",
        otilde: "\xF5",
        "Otimes;": "\u2A37",
        "otimes;": "\u2297",
        "otimesas;": "\u2A36",
        "Ouml;": "\xD6",
        Ouml: "\xD6",
        "ouml;": "\xF6",
        ouml: "\xF6",
        "ovbar;": "\u233D",
        "OverBar;": "\u203E",
        "OverBrace;": "\u23DE",
        "OverBracket;": "\u23B4",
        "OverParenthesis;": "\u23DC",
        "par;": "\u2225",
        "para;": "\xB6",
        para: "\xB6",
        "parallel;": "\u2225",
        "parsim;": "\u2AF3",
        "parsl;": "\u2AFD",
        "part;": "\u2202",
        "PartialD;": "\u2202",
        "Pcy;": "\u041F",
        "pcy;": "\u043F",
        "percnt;": "%",
        "period;": ".",
        "permil;": "\u2030",
        "perp;": "\u22A5",
        "pertenk;": "\u2031",
        "Pfr;": "\u{1D513}",
        "pfr;": "\u{1D52D}",
        "Phi;": "\u03A6",
        "phi;": "\u03C6",
        "phiv;": "\u03D5",
        "phmmat;": "\u2133",
        "phone;": "\u260E",
        "Pi;": "\u03A0",
        "pi;": "\u03C0",
        "pitchfork;": "\u22D4",
        "piv;": "\u03D6",
        "planck;": "\u210F",
        "planckh;": "\u210E",
        "plankv;": "\u210F",
        "plus;": "+",
        "plusacir;": "\u2A23",
        "plusb;": "\u229E",
        "pluscir;": "\u2A22",
        "plusdo;": "\u2214",
        "plusdu;": "\u2A25",
        "pluse;": "\u2A72",
        "PlusMinus;": "\xB1",
        "plusmn;": "\xB1",
        plusmn: "\xB1",
        "plussim;": "\u2A26",
        "plustwo;": "\u2A27",
        "pm;": "\xB1",
        "Poincareplane;": "\u210C",
        "pointint;": "\u2A15",
        "Popf;": "\u2119",
        "popf;": "\u{1D561}",
        "pound;": "\xA3",
        pound: "\xA3",
        "Pr;": "\u2ABB",
        "pr;": "\u227A",
        "prap;": "\u2AB7",
        "prcue;": "\u227C",
        "prE;": "\u2AB3",
        "pre;": "\u2AAF",
        "prec;": "\u227A",
        "precapprox;": "\u2AB7",
        "preccurlyeq;": "\u227C",
        "Precedes;": "\u227A",
        "PrecedesEqual;": "\u2AAF",
        "PrecedesSlantEqual;": "\u227C",
        "PrecedesTilde;": "\u227E",
        "preceq;": "\u2AAF",
        "precnapprox;": "\u2AB9",
        "precneqq;": "\u2AB5",
        "precnsim;": "\u22E8",
        "precsim;": "\u227E",
        "Prime;": "\u2033",
        "prime;": "\u2032",
        "primes;": "\u2119",
        "prnap;": "\u2AB9",
        "prnE;": "\u2AB5",
        "prnsim;": "\u22E8",
        "prod;": "\u220F",
        "Product;": "\u220F",
        "profalar;": "\u232E",
        "profline;": "\u2312",
        "profsurf;": "\u2313",
        "prop;": "\u221D",
        "Proportion;": "\u2237",
        "Proportional;": "\u221D",
        "propto;": "\u221D",
        "prsim;": "\u227E",
        "prurel;": "\u22B0",
        "Pscr;": "\u{1D4AB}",
        "pscr;": "\u{1D4C5}",
        "Psi;": "\u03A8",
        "psi;": "\u03C8",
        "puncsp;": "\u2008",
        "Qfr;": "\u{1D514}",
        "qfr;": "\u{1D52E}",
        "qint;": "\u2A0C",
        "Qopf;": "\u211A",
        "qopf;": "\u{1D562}",
        "qprime;": "\u2057",
        "Qscr;": "\u{1D4AC}",
        "qscr;": "\u{1D4C6}",
        "quaternions;": "\u210D",
        "quatint;": "\u2A16",
        "quest;": "?",
        "questeq;": "\u225F",
        "QUOT;": '"',
        QUOT: '"',
        "quot;": '"',
        quot: '"',
        "rAarr;": "\u21DB",
        "race;": "\u223D\u0331",
        "Racute;": "\u0154",
        "racute;": "\u0155",
        "radic;": "\u221A",
        "raemptyv;": "\u29B3",
        "Rang;": "\u27EB",
        "rang;": "\u27E9",
        "rangd;": "\u2992",
        "range;": "\u29A5",
        "rangle;": "\u27E9",
        "raquo;": "\xBB",
        raquo: "\xBB",
        "Rarr;": "\u21A0",
        "rArr;": "\u21D2",
        "rarr;": "\u2192",
        "rarrap;": "\u2975",
        "rarrb;": "\u21E5",
        "rarrbfs;": "\u2920",
        "rarrc;": "\u2933",
        "rarrfs;": "\u291E",
        "rarrhk;": "\u21AA",
        "rarrlp;": "\u21AC",
        "rarrpl;": "\u2945",
        "rarrsim;": "\u2974",
        "Rarrtl;": "\u2916",
        "rarrtl;": "\u21A3",
        "rarrw;": "\u219D",
        "rAtail;": "\u291C",
        "ratail;": "\u291A",
        "ratio;": "\u2236",
        "rationals;": "\u211A",
        "RBarr;": "\u2910",
        "rBarr;": "\u290F",
        "rbarr;": "\u290D",
        "rbbrk;": "\u2773",
        "rbrace;": "}",
        "rbrack;": "]",
        "rbrke;": "\u298C",
        "rbrksld;": "\u298E",
        "rbrkslu;": "\u2990",
        "Rcaron;": "\u0158",
        "rcaron;": "\u0159",
        "Rcedil;": "\u0156",
        "rcedil;": "\u0157",
        "rceil;": "\u2309",
        "rcub;": "}",
        "Rcy;": "\u0420",
        "rcy;": "\u0440",
        "rdca;": "\u2937",
        "rdldhar;": "\u2969",
        "rdquo;": "\u201D",
        "rdquor;": "\u201D",
        "rdsh;": "\u21B3",
        "Re;": "\u211C",
        "real;": "\u211C",
        "realine;": "\u211B",
        "realpart;": "\u211C",
        "reals;": "\u211D",
        "rect;": "\u25AD",
        "REG;": "\xAE",
        REG: "\xAE",
        "reg;": "\xAE",
        reg: "\xAE",
        "ReverseElement;": "\u220B",
        "ReverseEquilibrium;": "\u21CB",
        "ReverseUpEquilibrium;": "\u296F",
        "rfisht;": "\u297D",
        "rfloor;": "\u230B",
        "Rfr;": "\u211C",
        "rfr;": "\u{1D52F}",
        "rHar;": "\u2964",
        "rhard;": "\u21C1",
        "rharu;": "\u21C0",
        "rharul;": "\u296C",
        "Rho;": "\u03A1",
        "rho;": "\u03C1",
        "rhov;": "\u03F1",
        "RightAngleBracket;": "\u27E9",
        "RightArrow;": "\u2192",
        "Rightarrow;": "\u21D2",
        "rightarrow;": "\u2192",
        "RightArrowBar;": "\u21E5",
        "RightArrowLeftArrow;": "\u21C4",
        "rightarrowtail;": "\u21A3",
        "RightCeiling;": "\u2309",
        "RightDoubleBracket;": "\u27E7",
        "RightDownTeeVector;": "\u295D",
        "RightDownVector;": "\u21C2",
        "RightDownVectorBar;": "\u2955",
        "RightFloor;": "\u230B",
        "rightharpoondown;": "\u21C1",
        "rightharpoonup;": "\u21C0",
        "rightleftarrows;": "\u21C4",
        "rightleftharpoons;": "\u21CC",
        "rightrightarrows;": "\u21C9",
        "rightsquigarrow;": "\u219D",
        "RightTee;": "\u22A2",
        "RightTeeArrow;": "\u21A6",
        "RightTeeVector;": "\u295B",
        "rightthreetimes;": "\u22CC",
        "RightTriangle;": "\u22B3",
        "RightTriangleBar;": "\u29D0",
        "RightTriangleEqual;": "\u22B5",
        "RightUpDownVector;": "\u294F",
        "RightUpTeeVector;": "\u295C",
        "RightUpVector;": "\u21BE",
        "RightUpVectorBar;": "\u2954",
        "RightVector;": "\u21C0",
        "RightVectorBar;": "\u2953",
        "ring;": "\u02DA",
        "risingdotseq;": "\u2253",
        "rlarr;": "\u21C4",
        "rlhar;": "\u21CC",
        "rlm;": "\u200F",
        "rmoust;": "\u23B1",
        "rmoustache;": "\u23B1",
        "rnmid;": "\u2AEE",
        "roang;": "\u27ED",
        "roarr;": "\u21FE",
        "robrk;": "\u27E7",
        "ropar;": "\u2986",
        "Ropf;": "\u211D",
        "ropf;": "\u{1D563}",
        "roplus;": "\u2A2E",
        "rotimes;": "\u2A35",
        "RoundImplies;": "\u2970",
        "rpar;": ")",
        "rpargt;": "\u2994",
        "rppolint;": "\u2A12",
        "rrarr;": "\u21C9",
        "Rrightarrow;": "\u21DB",
        "rsaquo;": "\u203A",
        "Rscr;": "\u211B",
        "rscr;": "\u{1D4C7}",
        "Rsh;": "\u21B1",
        "rsh;": "\u21B1",
        "rsqb;": "]",
        "rsquo;": "\u2019",
        "rsquor;": "\u2019",
        "rthree;": "\u22CC",
        "rtimes;": "\u22CA",
        "rtri;": "\u25B9",
        "rtrie;": "\u22B5",
        "rtrif;": "\u25B8",
        "rtriltri;": "\u29CE",
        "RuleDelayed;": "\u29F4",
        "ruluhar;": "\u2968",
        "rx;": "\u211E",
        "Sacute;": "\u015A",
        "sacute;": "\u015B",
        "sbquo;": "\u201A",
        "Sc;": "\u2ABC",
        "sc;": "\u227B",
        "scap;": "\u2AB8",
        "Scaron;": "\u0160",
        "scaron;": "\u0161",
        "sccue;": "\u227D",
        "scE;": "\u2AB4",
        "sce;": "\u2AB0",
        "Scedil;": "\u015E",
        "scedil;": "\u015F",
        "Scirc;": "\u015C",
        "scirc;": "\u015D",
        "scnap;": "\u2ABA",
        "scnE;": "\u2AB6",
        "scnsim;": "\u22E9",
        "scpolint;": "\u2A13",
        "scsim;": "\u227F",
        "Scy;": "\u0421",
        "scy;": "\u0441",
        "sdot;": "\u22C5",
        "sdotb;": "\u22A1",
        "sdote;": "\u2A66",
        "searhk;": "\u2925",
        "seArr;": "\u21D8",
        "searr;": "\u2198",
        "searrow;": "\u2198",
        "sect;": "\xA7",
        sect: "\xA7",
        "semi;": ";",
        "seswar;": "\u2929",
        "setminus;": "\u2216",
        "setmn;": "\u2216",
        "sext;": "\u2736",
        "Sfr;": "\u{1D516}",
        "sfr;": "\u{1D530}",
        "sfrown;": "\u2322",
        "sharp;": "\u266F",
        "SHCHcy;": "\u0429",
        "shchcy;": "\u0449",
        "SHcy;": "\u0428",
        "shcy;": "\u0448",
        "ShortDownArrow;": "\u2193",
        "ShortLeftArrow;": "\u2190",
        "shortmid;": "\u2223",
        "shortparallel;": "\u2225",
        "ShortRightArrow;": "\u2192",
        "ShortUpArrow;": "\u2191",
        "shy;": "\xAD",
        shy: "\xAD",
        "Sigma;": "\u03A3",
        "sigma;": "\u03C3",
        "sigmaf;": "\u03C2",
        "sigmav;": "\u03C2",
        "sim;": "\u223C",
        "simdot;": "\u2A6A",
        "sime;": "\u2243",
        "simeq;": "\u2243",
        "simg;": "\u2A9E",
        "simgE;": "\u2AA0",
        "siml;": "\u2A9D",
        "simlE;": "\u2A9F",
        "simne;": "\u2246",
        "simplus;": "\u2A24",
        "simrarr;": "\u2972",
        "slarr;": "\u2190",
        "SmallCircle;": "\u2218",
        "smallsetminus;": "\u2216",
        "smashp;": "\u2A33",
        "smeparsl;": "\u29E4",
        "smid;": "\u2223",
        "smile;": "\u2323",
        "smt;": "\u2AAA",
        "smte;": "\u2AAC",
        "smtes;": "\u2AAC\uFE00",
        "SOFTcy;": "\u042C",
        "softcy;": "\u044C",
        "sol;": "/",
        "solb;": "\u29C4",
        "solbar;": "\u233F",
        "Sopf;": "\u{1D54A}",
        "sopf;": "\u{1D564}",
        "spades;": "\u2660",
        "spadesuit;": "\u2660",
        "spar;": "\u2225",
        "sqcap;": "\u2293",
        "sqcaps;": "\u2293\uFE00",
        "sqcup;": "\u2294",
        "sqcups;": "\u2294\uFE00",
        "Sqrt;": "\u221A",
        "sqsub;": "\u228F",
        "sqsube;": "\u2291",
        "sqsubset;": "\u228F",
        "sqsubseteq;": "\u2291",
        "sqsup;": "\u2290",
        "sqsupe;": "\u2292",
        "sqsupset;": "\u2290",
        "sqsupseteq;": "\u2292",
        "squ;": "\u25A1",
        "Square;": "\u25A1",
        "square;": "\u25A1",
        "SquareIntersection;": "\u2293",
        "SquareSubset;": "\u228F",
        "SquareSubsetEqual;": "\u2291",
        "SquareSuperset;": "\u2290",
        "SquareSupersetEqual;": "\u2292",
        "SquareUnion;": "\u2294",
        "squarf;": "\u25AA",
        "squf;": "\u25AA",
        "srarr;": "\u2192",
        "Sscr;": "\u{1D4AE}",
        "sscr;": "\u{1D4C8}",
        "ssetmn;": "\u2216",
        "ssmile;": "\u2323",
        "sstarf;": "\u22C6",
        "Star;": "\u22C6",
        "star;": "\u2606",
        "starf;": "\u2605",
        "straightepsilon;": "\u03F5",
        "straightphi;": "\u03D5",
        "strns;": "\xAF",
        "Sub;": "\u22D0",
        "sub;": "\u2282",
        "subdot;": "\u2ABD",
        "subE;": "\u2AC5",
        "sube;": "\u2286",
        "subedot;": "\u2AC3",
        "submult;": "\u2AC1",
        "subnE;": "\u2ACB",
        "subne;": "\u228A",
        "subplus;": "\u2ABF",
        "subrarr;": "\u2979",
        "Subset;": "\u22D0",
        "subset;": "\u2282",
        "subseteq;": "\u2286",
        "subseteqq;": "\u2AC5",
        "SubsetEqual;": "\u2286",
        "subsetneq;": "\u228A",
        "subsetneqq;": "\u2ACB",
        "subsim;": "\u2AC7",
        "subsub;": "\u2AD5",
        "subsup;": "\u2AD3",
        "succ;": "\u227B",
        "succapprox;": "\u2AB8",
        "succcurlyeq;": "\u227D",
        "Succeeds;": "\u227B",
        "SucceedsEqual;": "\u2AB0",
        "SucceedsSlantEqual;": "\u227D",
        "SucceedsTilde;": "\u227F",
        "succeq;": "\u2AB0",
        "succnapprox;": "\u2ABA",
        "succneqq;": "\u2AB6",
        "succnsim;": "\u22E9",
        "succsim;": "\u227F",
        "SuchThat;": "\u220B",
        "Sum;": "\u2211",
        "sum;": "\u2211",
        "sung;": "\u266A",
        "Sup;": "\u22D1",
        "sup;": "\u2283",
        "sup1;": "\xB9",
        sup1: "\xB9",
        "sup2;": "\xB2",
        sup2: "\xB2",
        "sup3;": "\xB3",
        sup3: "\xB3",
        "supdot;": "\u2ABE",
        "supdsub;": "\u2AD8",
        "supE;": "\u2AC6",
        "supe;": "\u2287",
        "supedot;": "\u2AC4",
        "Superset;": "\u2283",
        "SupersetEqual;": "\u2287",
        "suphsol;": "\u27C9",
        "suphsub;": "\u2AD7",
        "suplarr;": "\u297B",
        "supmult;": "\u2AC2",
        "supnE;": "\u2ACC",
        "supne;": "\u228B",
        "supplus;": "\u2AC0",
        "Supset;": "\u22D1",
        "supset;": "\u2283",
        "supseteq;": "\u2287",
        "supseteqq;": "\u2AC6",
        "supsetneq;": "\u228B",
        "supsetneqq;": "\u2ACC",
        "supsim;": "\u2AC8",
        "supsub;": "\u2AD4",
        "supsup;": "\u2AD6",
        "swarhk;": "\u2926",
        "swArr;": "\u21D9",
        "swarr;": "\u2199",
        "swarrow;": "\u2199",
        "swnwar;": "\u292A",
        "szlig;": "\xDF",
        szlig: "\xDF",
        "Tab;": "	",
        "target;": "\u2316",
        "Tau;": "\u03A4",
        "tau;": "\u03C4",
        "tbrk;": "\u23B4",
        "Tcaron;": "\u0164",
        "tcaron;": "\u0165",
        "Tcedil;": "\u0162",
        "tcedil;": "\u0163",
        "Tcy;": "\u0422",
        "tcy;": "\u0442",
        "tdot;": "\u20DB",
        "telrec;": "\u2315",
        "Tfr;": "\u{1D517}",
        "tfr;": "\u{1D531}",
        "there4;": "\u2234",
        "Therefore;": "\u2234",
        "therefore;": "\u2234",
        "Theta;": "\u0398",
        "theta;": "\u03B8",
        "thetasym;": "\u03D1",
        "thetav;": "\u03D1",
        "thickapprox;": "\u2248",
        "thicksim;": "\u223C",
        "ThickSpace;": "\u205F\u200A",
        "thinsp;": "\u2009",
        "ThinSpace;": "\u2009",
        "thkap;": "\u2248",
        "thksim;": "\u223C",
        "THORN;": "\xDE",
        THORN: "\xDE",
        "thorn;": "\xFE",
        thorn: "\xFE",
        "Tilde;": "\u223C",
        "tilde;": "\u02DC",
        "TildeEqual;": "\u2243",
        "TildeFullEqual;": "\u2245",
        "TildeTilde;": "\u2248",
        "times;": "\xD7",
        times: "\xD7",
        "timesb;": "\u22A0",
        "timesbar;": "\u2A31",
        "timesd;": "\u2A30",
        "tint;": "\u222D",
        "toea;": "\u2928",
        "top;": "\u22A4",
        "topbot;": "\u2336",
        "topcir;": "\u2AF1",
        "Topf;": "\u{1D54B}",
        "topf;": "\u{1D565}",
        "topfork;": "\u2ADA",
        "tosa;": "\u2929",
        "tprime;": "\u2034",
        "TRADE;": "\u2122",
        "trade;": "\u2122",
        "triangle;": "\u25B5",
        "triangledown;": "\u25BF",
        "triangleleft;": "\u25C3",
        "trianglelefteq;": "\u22B4",
        "triangleq;": "\u225C",
        "triangleright;": "\u25B9",
        "trianglerighteq;": "\u22B5",
        "tridot;": "\u25EC",
        "trie;": "\u225C",
        "triminus;": "\u2A3A",
        "TripleDot;": "\u20DB",
        "triplus;": "\u2A39",
        "trisb;": "\u29CD",
        "tritime;": "\u2A3B",
        "trpezium;": "\u23E2",
        "Tscr;": "\u{1D4AF}",
        "tscr;": "\u{1D4C9}",
        "TScy;": "\u0426",
        "tscy;": "\u0446",
        "TSHcy;": "\u040B",
        "tshcy;": "\u045B",
        "Tstrok;": "\u0166",
        "tstrok;": "\u0167",
        "twixt;": "\u226C",
        "twoheadleftarrow;": "\u219E",
        "twoheadrightarrow;": "\u21A0",
        "Uacute;": "\xDA",
        Uacute: "\xDA",
        "uacute;": "\xFA",
        uacute: "\xFA",
        "Uarr;": "\u219F",
        "uArr;": "\u21D1",
        "uarr;": "\u2191",
        "Uarrocir;": "\u2949",
        "Ubrcy;": "\u040E",
        "ubrcy;": "\u045E",
        "Ubreve;": "\u016C",
        "ubreve;": "\u016D",
        "Ucirc;": "\xDB",
        Ucirc: "\xDB",
        "ucirc;": "\xFB",
        ucirc: "\xFB",
        "Ucy;": "\u0423",
        "ucy;": "\u0443",
        "udarr;": "\u21C5",
        "Udblac;": "\u0170",
        "udblac;": "\u0171",
        "udhar;": "\u296E",
        "ufisht;": "\u297E",
        "Ufr;": "\u{1D518}",
        "ufr;": "\u{1D532}",
        "Ugrave;": "\xD9",
        Ugrave: "\xD9",
        "ugrave;": "\xF9",
        ugrave: "\xF9",
        "uHar;": "\u2963",
        "uharl;": "\u21BF",
        "uharr;": "\u21BE",
        "uhblk;": "\u2580",
        "ulcorn;": "\u231C",
        "ulcorner;": "\u231C",
        "ulcrop;": "\u230F",
        "ultri;": "\u25F8",
        "Umacr;": "\u016A",
        "umacr;": "\u016B",
        "uml;": "\xA8",
        uml: "\xA8",
        "UnderBar;": "_",
        "UnderBrace;": "\u23DF",
        "UnderBracket;": "\u23B5",
        "UnderParenthesis;": "\u23DD",
        "Union;": "\u22C3",
        "UnionPlus;": "\u228E",
        "Uogon;": "\u0172",
        "uogon;": "\u0173",
        "Uopf;": "\u{1D54C}",
        "uopf;": "\u{1D566}",
        "UpArrow;": "\u2191",
        "Uparrow;": "\u21D1",
        "uparrow;": "\u2191",
        "UpArrowBar;": "\u2912",
        "UpArrowDownArrow;": "\u21C5",
        "UpDownArrow;": "\u2195",
        "Updownarrow;": "\u21D5",
        "updownarrow;": "\u2195",
        "UpEquilibrium;": "\u296E",
        "upharpoonleft;": "\u21BF",
        "upharpoonright;": "\u21BE",
        "uplus;": "\u228E",
        "UpperLeftArrow;": "\u2196",
        "UpperRightArrow;": "\u2197",
        "Upsi;": "\u03D2",
        "upsi;": "\u03C5",
        "upsih;": "\u03D2",
        "Upsilon;": "\u03A5",
        "upsilon;": "\u03C5",
        "UpTee;": "\u22A5",
        "UpTeeArrow;": "\u21A5",
        "upuparrows;": "\u21C8",
        "urcorn;": "\u231D",
        "urcorner;": "\u231D",
        "urcrop;": "\u230E",
        "Uring;": "\u016E",
        "uring;": "\u016F",
        "urtri;": "\u25F9",
        "Uscr;": "\u{1D4B0}",
        "uscr;": "\u{1D4CA}",
        "utdot;": "\u22F0",
        "Utilde;": "\u0168",
        "utilde;": "\u0169",
        "utri;": "\u25B5",
        "utrif;": "\u25B4",
        "uuarr;": "\u21C8",
        "Uuml;": "\xDC",
        Uuml: "\xDC",
        "uuml;": "\xFC",
        uuml: "\xFC",
        "uwangle;": "\u29A7",
        "vangrt;": "\u299C",
        "varepsilon;": "\u03F5",
        "varkappa;": "\u03F0",
        "varnothing;": "\u2205",
        "varphi;": "\u03D5",
        "varpi;": "\u03D6",
        "varpropto;": "\u221D",
        "vArr;": "\u21D5",
        "varr;": "\u2195",
        "varrho;": "\u03F1",
        "varsigma;": "\u03C2",
        "varsubsetneq;": "\u228A\uFE00",
        "varsubsetneqq;": "\u2ACB\uFE00",
        "varsupsetneq;": "\u228B\uFE00",
        "varsupsetneqq;": "\u2ACC\uFE00",
        "vartheta;": "\u03D1",
        "vartriangleleft;": "\u22B2",
        "vartriangleright;": "\u22B3",
        "Vbar;": "\u2AEB",
        "vBar;": "\u2AE8",
        "vBarv;": "\u2AE9",
        "Vcy;": "\u0412",
        "vcy;": "\u0432",
        "VDash;": "\u22AB",
        "Vdash;": "\u22A9",
        "vDash;": "\u22A8",
        "vdash;": "\u22A2",
        "Vdashl;": "\u2AE6",
        "Vee;": "\u22C1",
        "vee;": "\u2228",
        "veebar;": "\u22BB",
        "veeeq;": "\u225A",
        "vellip;": "\u22EE",
        "Verbar;": "\u2016",
        "verbar;": "|",
        "Vert;": "\u2016",
        "vert;": "|",
        "VerticalBar;": "\u2223",
        "VerticalLine;": "|",
        "VerticalSeparator;": "\u2758",
        "VerticalTilde;": "\u2240",
        "VeryThinSpace;": "\u200A",
        "Vfr;": "\u{1D519}",
        "vfr;": "\u{1D533}",
        "vltri;": "\u22B2",
        "vnsub;": "\u2282\u20D2",
        "vnsup;": "\u2283\u20D2",
        "Vopf;": "\u{1D54D}",
        "vopf;": "\u{1D567}",
        "vprop;": "\u221D",
        "vrtri;": "\u22B3",
        "Vscr;": "\u{1D4B1}",
        "vscr;": "\u{1D4CB}",
        "vsubnE;": "\u2ACB\uFE00",
        "vsubne;": "\u228A\uFE00",
        "vsupnE;": "\u2ACC\uFE00",
        "vsupne;": "\u228B\uFE00",
        "Vvdash;": "\u22AA",
        "vzigzag;": "\u299A",
        "Wcirc;": "\u0174",
        "wcirc;": "\u0175",
        "wedbar;": "\u2A5F",
        "Wedge;": "\u22C0",
        "wedge;": "\u2227",
        "wedgeq;": "\u2259",
        "weierp;": "\u2118",
        "Wfr;": "\u{1D51A}",
        "wfr;": "\u{1D534}",
        "Wopf;": "\u{1D54E}",
        "wopf;": "\u{1D568}",
        "wp;": "\u2118",
        "wr;": "\u2240",
        "wreath;": "\u2240",
        "Wscr;": "\u{1D4B2}",
        "wscr;": "\u{1D4CC}",
        "xcap;": "\u22C2",
        "xcirc;": "\u25EF",
        "xcup;": "\u22C3",
        "xdtri;": "\u25BD",
        "Xfr;": "\u{1D51B}",
        "xfr;": "\u{1D535}",
        "xhArr;": "\u27FA",
        "xharr;": "\u27F7",
        "Xi;": "\u039E",
        "xi;": "\u03BE",
        "xlArr;": "\u27F8",
        "xlarr;": "\u27F5",
        "xmap;": "\u27FC",
        "xnis;": "\u22FB",
        "xodot;": "\u2A00",
        "Xopf;": "\u{1D54F}",
        "xopf;": "\u{1D569}",
        "xoplus;": "\u2A01",
        "xotime;": "\u2A02",
        "xrArr;": "\u27F9",
        "xrarr;": "\u27F6",
        "Xscr;": "\u{1D4B3}",
        "xscr;": "\u{1D4CD}",
        "xsqcup;": "\u2A06",
        "xuplus;": "\u2A04",
        "xutri;": "\u25B3",
        "xvee;": "\u22C1",
        "xwedge;": "\u22C0",
        "Yacute;": "\xDD",
        Yacute: "\xDD",
        "yacute;": "\xFD",
        yacute: "\xFD",
        "YAcy;": "\u042F",
        "yacy;": "\u044F",
        "Ycirc;": "\u0176",
        "ycirc;": "\u0177",
        "Ycy;": "\u042B",
        "ycy;": "\u044B",
        "yen;": "\xA5",
        yen: "\xA5",
        "Yfr;": "\u{1D51C}",
        "yfr;": "\u{1D536}",
        "YIcy;": "\u0407",
        "yicy;": "\u0457",
        "Yopf;": "\u{1D550}",
        "yopf;": "\u{1D56A}",
        "Yscr;": "\u{1D4B4}",
        "yscr;": "\u{1D4CE}",
        "YUcy;": "\u042E",
        "yucy;": "\u044E",
        "Yuml;": "\u0178",
        "yuml;": "\xFF",
        yuml: "\xFF",
        "Zacute;": "\u0179",
        "zacute;": "\u017A",
        "Zcaron;": "\u017D",
        "zcaron;": "\u017E",
        "Zcy;": "\u0417",
        "zcy;": "\u0437",
        "Zdot;": "\u017B",
        "zdot;": "\u017C",
        "zeetrf;": "\u2128",
        "ZeroWidthSpace;": "\u200B",
        "Zeta;": "\u0396",
        "zeta;": "\u03B6",
        "Zfr;": "\u2128",
        "zfr;": "\u{1D537}",
        "ZHcy;": "\u0416",
        "zhcy;": "\u0436",
        "zigrarr;": "\u21DD",
        "Zopf;": "\u2124",
        "zopf;": "\u{1D56B}",
        "Zscr;": "\u{1D4B5}",
        "zscr;": "\u{1D4CF}",
        "zwj;": "\u200D",
        "zwnj;": "\u200C"
    };
    function xe(e, t) {
        if (e.length < t.length)
            return !1;
        for (var n = 0; n < t.length; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    function qa(e, t) {
        var n = e.length - t.length;
        return n > 0 ? e.lastIndexOf(t) === n : n === 0 ? e === t : !1
    }
    function ar(e, t) {
        for (var n = ""; t > 0; )
            (t & 1) === 1 && (n += e),
            e += e,
            t = t >>> 1;
        return n
    }
    var Oa = "a".charCodeAt(0)
      , ja = "z".charCodeAt(0)
      , Ga = "A".charCodeAt(0)
      , Va = "Z".charCodeAt(0)
      , Ya = "0".charCodeAt(0)
      , $a = "9".charCodeAt(0);
    function it(e, t) {
        var n = e.charCodeAt(t);
        return Oa <= n && n <= ja || Ga <= n && n <= Va || Ya <= n && n <= $a
    }
    function Lt(e) {
        return typeof e != "undefined"
    }
    function Xa(e) {
        if (!!e)
            return typeof e == "string" ? {
                kind: "markdown",
                value: e
            } : {
                kind: "markdown",
                value: e.value
            }
    }
    var sr = function() {
        function e(t, n) {
            var r = this;
            this.id = t,
            this._tags = [],
            this._tagMap = {},
            this._valueSetMap = {},
            this._tags = n.tags || [],
            this._globalAttributes = n.globalAttributes || [],
            this._tags.forEach(function(i) {
                r._tagMap[i.name.toLowerCase()] = i
            }),
            n.valueSets && n.valueSets.forEach(function(i) {
                r._valueSetMap[i.name] = i.values
            })
        }
        return e.prototype.isApplicable = function() {
            return !0
        }
        ,
        e.prototype.getId = function() {
            return this.id
        }
        ,
        e.prototype.provideTags = function() {
            return this._tags
        }
        ,
        e.prototype.provideAttributes = function(t) {
            var n = []
              , r = function(a) {
                n.push(a)
            }
              , i = this._tagMap[t.toLowerCase()];
            return i && i.attributes.forEach(r),
            this._globalAttributes.forEach(r),
            n
        }
        ,
        e.prototype.provideValues = function(t, n) {
            var r = this
              , i = [];
            n = n.toLowerCase();
            var a = function(u) {
                u.forEach(function(s) {
                    s.name.toLowerCase() === n && (s.values && s.values.forEach(function(l) {
                        i.push(l)
                    }),
                    s.valueSet && r._valueSetMap[s.valueSet] && r._valueSetMap[s.valueSet].forEach(function(l) {
                        i.push(l)
                    }))
                })
            }
              , o = this._tagMap[t.toLowerCase()];
            return o && a(o.attributes),
            a(this._globalAttributes),
            i
        }
        ,
        e
    }();
    function Ue(e, t, n) {
        t === void 0 && (t = {});
        var r = {
            kind: n ? "markdown" : "plaintext",
            value: ""
        };
        if (e.description && t.documentation !== !1) {
            var i = Xa(e.description);
            i && (r.value += i.value)
        }
        if (e.references && e.references.length > 0 && t.references !== !1 && (r.value.length && (r.value += `

`),
        n ? r.value += e.references.map(function(a) {
            return "[" + a.name + "](" + a.url + ")"
        }).join(" | ") : r.value += e.references.map(function(a) {
            return a.name + ": " + a.url
        }).join(`
`)),
        r.value !== "")
            return r
    }
    var or = function(e, t, n, r) {
        function i(a) {
            return a instanceof n ? a : new n(function(o) {
                o(a)
            }
            )
        }
        return new (n || (n = Promise))(function(a, o) {
            function u(h) {
                try {
                    l(r.next(h))
                } catch (c) {
                    o(c)
                }
            }
            function s(h) {
                try {
                    l(r.throw(h))
                } catch (c) {
                    o(c)
                }
            }
            function l(h) {
                h.done ? a(h.value) : i(h.value).then(u, s)
            }
            l((r = r.apply(e, t || [])).next())
        }
        )
    }
      , lr = function(e, t) {
        var n = {
            label: 0,
            sent: function() {
                if (a[0] & 1)
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        }, r, i, a, o;
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        },
        typeof Symbol == "function" && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function u(l) {
            return function(h) {
                return s([l, h])
            }
        }
        function s(l) {
            if (r)
                throw new TypeError("Generator is already executing.");
            for (; n; )
                try {
                    if (r = 1,
                    i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i),
                    0) : i.next) && !(a = a.call(i, l[1])).done)
                        return a;
                    switch (i = 0,
                    a && (l = [l[0] & 2, a.value]),
                    l[0]) {
                    case 0:
                    case 1:
                        a = l;
                        break;
                    case 4:
                        return n.label++,
                        {
                            value: l[1],
                            done: !1
                        };
                    case 5:
                        n.label++,
                        i = l[1],
                        l = [0];
                        continue;
                    case 7:
                        l = n.ops.pop(),
                        n.trys.pop();
                        continue;
                    default:
                        if (a = n.trys,
                        !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
                            n.label = l[1];
                            break
                        }
                        if (l[0] === 6 && n.label < a[1]) {
                            n.label = a[1],
                            a = l;
                            break
                        }
                        if (a && n.label < a[2]) {
                            n.label = a[2],
                            n.ops.push(l);
                            break
                        }
                        a[2] && n.ops.pop(),
                        n.trys.pop();
                        continue
                    }
                    l = t.call(e, n)
                } catch (h) {
                    l = [6, h],
                    i = 0
                } finally {
                    r = a = 0
                }
            if (l[0] & 5)
                throw l[1];
            return {
                value: l[0] ? l[1] : void 0,
                done: !0
            }
        }
    }
      , Qa = function() {
        function e(t) {
            this.readDirectory = t,
            this.atributeCompletions = []
        }
        return e.prototype.onHtmlAttributeValue = function(t) {
            es(t.tag, t.attribute) && this.atributeCompletions.push(t)
        }
        ,
        e.prototype.computeCompletions = function(t, n) {
            return or(this, void 0, void 0, function() {
                var r, i, a, o, u, s, l, h, c, d;
                return lr(this, function(p) {
                    switch (p.label) {
                    case 0:
                        r = {
                            items: [],
                            isIncomplete: !1
                        },
                        i = 0,
                        a = this.atributeCompletions,
                        p.label = 1;
                    case 1:
                        return i < a.length ? (o = a[i],
                        u = Za(t.getText(o.range)),
                        Ka(u) ? u === "." || u === ".." ? (r.isIncomplete = !0,
                        [3, 4]) : [3, 2] : [3, 4]) : [3, 5];
                    case 2:
                        return s = ts(o.value, u, o.range),
                        [4, this.providePathSuggestions(o.value, s, t, n)];
                    case 3:
                        for (l = p.sent(),
                        h = 0,
                        c = l; h < c.length; h++)
                            d = c[h],
                            r.items.push(d);
                        p.label = 4;
                    case 4:
                        return i++,
                        [3, 1];
                    case 5:
                        return [2, r]
                    }
                })
            })
        }
        ,
        e.prototype.providePathSuggestions = function(t, n, r, i) {
            return or(this, void 0, void 0, function() {
                var a, o, u, s, l, h, c, d, p;
                return lr(this, function(_) {
                    switch (_.label) {
                    case 0:
                        if (a = t.substring(0, t.lastIndexOf("/") + 1),
                        o = i.resolveReference(a || ".", r.uri),
                        !o)
                            return [3, 4];
                        _.label = 1;
                    case 1:
                        return _.trys.push([1, 3, , 4]),
                        u = [],
                        [4, this.readDirectory(o)];
                    case 2:
                        for (s = _.sent(),
                        l = 0,
                        h = s; l < h.length; l++)
                            c = h[l],
                            d = c[0],
                            p = c[1],
                            d.charCodeAt(0) !== Ja && u.push(ns(d, p === cn.Directory, n));
                        return [2, u];
                    case 3:
                        return _.sent(),
                        [3, 4];
                    case 4:
                        return [2, []]
                    }
                })
            })
        }
        ,
        e
    }()
      , Ja = ".".charCodeAt(0);
    function Za(e) {
        return xe(e, "'") || xe(e, '"') ? e.slice(1, -1) : e
    }
    function Ka(e) {
        return !(xe(e, "http") || xe(e, "https") || xe(e, "//"))
    }
    function es(e, t) {
        var n = rs[e];
        return n ? typeof n == "string" ? n === t : n.indexOf(t) !== -1 : !1
    }
    function ts(e, t, n) {
        var r, i = e.lastIndexOf("/");
        if (i === -1)
            r = is(n, 1, -1);
        else {
            var a = t.slice(i + 1)
              , o = rt(n.end, -1 - a.length)
              , u = a.indexOf(" ")
              , s = void 0;
            u !== -1 ? s = rt(o, u) : s = rt(n.end, -1),
            r = G.create(o, s)
        }
        return r
    }
    function ns(e, t, n) {
        return t ? (e = e + "/",
        {
            label: e,
            kind: ue.Folder,
            textEdit: K.replace(n, e),
            command: {
                title: "Suggest",
                command: "editor.action.triggerSuggest"
            }
        }) : {
            label: e,
            kind: ue.File,
            textEdit: K.replace(n, e)
        }
    }
    function rt(e, t) {
        return ne.create(e.line, e.character + t)
    }
    function is(e, t, n) {
        var r = rt(e.start, t)
          , i = rt(e.end, n);
        return G.create(r, i)
    }
    var rs = {
        a: "href",
        area: "href",
        body: "background",
        del: "cite",
        form: "action",
        frame: ["src", "longdesc"],
        img: ["src", "longdesc"],
        ins: "cite",
        link: "href",
        object: "data",
        q: "cite",
        script: "src",
        audio: "src",
        button: "formaction",
        command: "icon",
        embed: "src",
        html: "manifest",
        input: ["src", "formaction"],
        source: "src",
        track: "src",
        video: ["src", "poster"]
    }
      , as = function(e, t, n, r) {
        function i(a) {
            return a instanceof n ? a : new n(function(o) {
                o(a)
            }
            )
        }
        return new (n || (n = Promise))(function(a, o) {
            function u(h) {
                try {
                    l(r.next(h))
                } catch (c) {
                    o(c)
                }
            }
            function s(h) {
                try {
                    l(r.throw(h))
                } catch (c) {
                    o(c)
                }
            }
            function l(h) {
                h.done ? a(h.value) : i(h.value).then(u, s)
            }
            l((r = r.apply(e, t || [])).next())
        }
        )
    }
      , ss = function(e, t) {
        var n = {
            label: 0,
            sent: function() {
                if (a[0] & 1)
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        }, r, i, a, o;
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        },
        typeof Symbol == "function" && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function u(l) {
            return function(h) {
                return s([l, h])
            }
        }
        function s(l) {
            if (r)
                throw new TypeError("Generator is already executing.");
            for (; n; )
                try {
                    if (r = 1,
                    i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i),
                    0) : i.next) && !(a = a.call(i, l[1])).done)
                        return a;
                    switch (i = 0,
                    a && (l = [l[0] & 2, a.value]),
                    l[0]) {
                    case 0:
                    case 1:
                        a = l;
                        break;
                    case 4:
                        return n.label++,
                        {
                            value: l[1],
                            done: !1
                        };
                    case 5:
                        n.label++,
                        i = l[1],
                        l = [0];
                        continue;
                    case 7:
                        l = n.ops.pop(),
                        n.trys.pop();
                        continue;
                    default:
                        if (a = n.trys,
                        !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
                            n.label = l[1];
                            break
                        }
                        if (l[0] === 6 && n.label < a[1]) {
                            n.label = a[1],
                            a = l;
                            break
                        }
                        if (a && n.label < a[2]) {
                            n.label = a[2],
                            n.ops.push(l);
                            break
                        }
                        a[2] && n.ops.pop(),
                        n.trys.pop();
                        continue
                    }
                    l = t.call(e, n)
                } catch (h) {
                    l = [6, h],
                    i = 0
                } finally {
                    r = a = 0
                }
            if (l[0] & 5)
                throw l[1];
            return {
                value: l[0] ? l[1] : void 0,
                done: !0
            }
        }
    }
      , os = nn()
      , ls = function() {
        function e(t, n) {
            this.lsOptions = t,
            this.dataManager = n,
            this.completionParticipants = []
        }
        return e.prototype.setCompletionParticipants = function(t) {
            this.completionParticipants = t || []
        }
        ,
        e.prototype.doComplete2 = function(t, n, r, i, a) {
            return as(this, void 0, void 0, function() {
                var o, u, s, l;
                return ss(this, function(h) {
                    switch (h.label) {
                    case 0:
                        if (!this.lsOptions.fileSystemProvider || !this.lsOptions.fileSystemProvider.readDirectory)
                            return [2, this.doComplete(t, n, r, a)];
                        o = new Qa(this.lsOptions.fileSystemProvider.readDirectory),
                        u = this.completionParticipants,
                        this.completionParticipants = [o].concat(u),
                        s = this.doComplete(t, n, r, a),
                        h.label = 1;
                    case 1:
                        return h.trys.push([1, , 3, 4]),
                        [4, o.computeCompletions(t, i)];
                    case 2:
                        return l = h.sent(),
                        [2, {
                            isIncomplete: s.isIncomplete || l.isIncomplete,
                            items: l.items.concat(s.items)
                        }];
                    case 3:
                        return this.completionParticipants = u,
                        [7];
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.doComplete = function(t, n, r, i) {
            var a = this._doComplete(t, n, r, i);
            return this.convertCompletionList(a)
        }
        ,
        e.prototype._doComplete = function(t, n, r, i) {
            var a = {
                isIncomplete: !1,
                items: []
            }
              , o = this.completionParticipants
              , u = this.dataManager.getDataProviders().filter(function(x) {
                return x.isApplicable(t.languageId) && (!i || i[x.getId()] !== !1)
            })
              , s = this.doesSupportMarkdown()
              , l = t.getText()
              , h = t.offsetAt(n)
              , c = r.findNodeBefore(h);
            if (!c)
                return a;
            var d = de(l, c.start), p = "", _;
            function b(x, E) {
                return E === void 0 && (E = h),
                x > h && (x = h),
                {
                    start: t.positionAt(x),
                    end: t.positionAt(E)
                }
            }
            function T(x, E) {
                var z = b(x, E);
                return u.forEach(function(j) {
                    j.provideTags().forEach(function(V) {
                        a.items.push({
                            label: V.name,
                            kind: ue.Property,
                            documentation: Ue(V, void 0, s),
                            textEdit: K.replace(z, V.name),
                            insertTextFormat: ge.PlainText
                        })
                    })
                }),
                a
            }
            function k(x) {
                for (var E = x; E > 0; ) {
                    var z = l.charAt(E - 1);
                    if (`
\r`.indexOf(z) >= 0)
                        return l.substring(E, x);
                    if (!Ct(z))
                        return null;
                    E--
                }
                return l.substring(0, x)
            }
            function f(x, E, z) {
                z === void 0 && (z = h);
                var j = b(x, z)
                  , V = ur(l, z, F.WithinEndTag, M.EndTagClose) ? "" : ">"
                  , Y = c;
                for (E && (Y = Y.parent); Y; ) {
                    var $ = Y.tag;
                    if ($ && (!Y.closed || Y.endTagStart && Y.endTagStart > h)) {
                        var He = {
                            label: "/" + $,
                            kind: ue.Property,
                            filterText: "/" + $,
                            textEdit: K.replace(j, "/" + $ + V),
                            insertTextFormat: ge.PlainText
                        }
                          , se = k(Y.start)
                          , _e = k(x - 1);
                        if (se !== null && _e !== null && se !== _e) {
                            var Ge = se + "</" + $ + V;
                            He.textEdit = K.replace(b(x - 1 - _e.length), Ge),
                            He.filterText = _e + "</" + $
                        }
                        return a.items.push(He),
                        a
                    }
                    Y = Y.parent
                }
                return E || u.forEach(function(pn) {
                    pn.provideTags().forEach(function(De) {
                        a.items.push({
                            label: "/" + De.name,
                            kind: ue.Property,
                            documentation: Ue(De, void 0, s),
                            filterText: "/" + De.name + V,
                            textEdit: K.replace(j, "/" + De.name + V),
                            insertTextFormat: ge.PlainText
                        })
                    })
                }),
                a
            }
            function v(x, E) {
                if (i && i.hideAutoCompleteProposals)
                    return a;
                if (!At(E)) {
                    var z = t.positionAt(x);
                    a.items.push({
                        label: "</" + E + ">",
                        kind: ue.Property,
                        filterText: "</" + E + ">",
                        textEdit: K.insert(z, "$0</" + E + ">"),
                        insertTextFormat: ge.Snippet
                    })
                }
                return a
            }
            function A(x, E) {
                return T(x, E),
                f(x, !0, E),
                a
            }
            function D() {
                var x = Object.create(null);
                return c.attributeNames.forEach(function(E) {
                    x[E] = !0
                }),
                x
            }
            function H(x, E) {
                E === void 0 && (E = h);
                for (var z = h; z < E && l[z] !== "<"; )
                    z++;
                var j = l.substring(x, E)
                  , V = b(x, z)
                  , Y = ur(l, E, F.AfterAttributeName, M.DelimiterAssign) ? "" : '="$1"'
                  , $ = D();
                return $[j] = !1,
                u.forEach(function(He) {
                    He.provideAttributes(p).forEach(function(se) {
                        if (!$[se.name]) {
                            $[se.name] = !0;
                            var _e = se.name, Ge;
                            se.valueSet !== "v" && Y.length && (_e = _e + Y,
                            (se.valueSet || se.name === "style") && (Ge = {
                                title: "Suggest",
                                command: "editor.action.triggerSuggest"
                            })),
                            a.items.push({
                                label: se.name,
                                kind: se.valueSet === "handler" ? ue.Function : ue.Value,
                                documentation: Ue(se, void 0, s),
                                textEdit: K.replace(V, _e),
                                insertTextFormat: ge.Snippet,
                                command: Ge
                            })
                        }
                    })
                }),
                g(V, $),
                a
            }
            function g(x, E) {
                var z = "data-"
                  , j = {};
                j[z] = z + '$1="$2"';
                function V(Y) {
                    Y.attributeNames.forEach(function($) {
                        xe($, z) && !j[$] && !E[$] && (j[$] = $ + '="$1"')
                    }),
                    Y.children.forEach(function($) {
                        return V($)
                    })
                }
                r && r.roots.forEach(function(Y) {
                    return V(Y)
                }),
                Object.keys(j).forEach(function(Y) {
                    return a.items.push({
                        label: Y,
                        kind: ue.Value,
                        textEdit: K.replace(x, j[Y]),
                        insertTextFormat: ge.Snippet
                    })
                })
            }
            function m(x, E) {
                E === void 0 && (E = h);
                var z, j, V;
                if (h > x && h <= E && us(l[x])) {
                    var Y = x + 1
                      , $ = E;
                    E > x && l[E - 1] === l[x] && $--;
                    var He = hs(l, h, Y)
                      , se = cs(l, h, $);
                    z = b(He, se),
                    V = h >= Y && h <= $ ? l.substring(Y, h) : "",
                    j = !1
                } else
                    z = b(x, E),
                    V = l.substring(x, h),
                    j = !0;
                if (o.length > 0)
                    for (var _e = p.toLowerCase(), Ge = _.toLowerCase(), pn = b(x, E), De = 0, yr = o; De < yr.length; De++) {
                        var Tr = yr[De];
                        Tr.onHtmlAttributeValue && Tr.onHtmlAttributeValue({
                            document: t,
                            position: n,
                            tag: _e,
                            attribute: Ge,
                            value: V,
                            range: pn
                        })
                    }
                return u.forEach(function(Gs) {
                    Gs.provideValues(p, _).forEach(function(Dt) {
                        var kr = j ? '"' + Dt.name + '"' : Dt.name;
                        a.items.push({
                            label: Dt.name,
                            filterText: kr,
                            kind: ue.Unit,
                            documentation: Ue(Dt, void 0, s),
                            textEdit: K.replace(z, kr),
                            insertTextFormat: ge.PlainText
                        })
                    })
                }),
                R(),
                a
            }
            function w(x) {
                return h === d.getTokenEnd() && (I = d.scan(),
                I === x && d.getTokenOffset() === h) ? d.getTokenEnd() : h
            }
            function B() {
                for (var x = 0, E = o; x < E.length; x++) {
                    var z = E[x];
                    z.onHtmlContent && z.onHtmlContent({
                        document: t,
                        position: n
                    })
                }
                return R()
            }
            function R() {
                for (var x = h - 1, E = n.character; x >= 0 && it(l, x); )
                    x--,
                    E--;
                if (x >= 0 && l[x] === "&") {
                    var z = G.create(ne.create(n.line, E - 1), n);
                    for (var j in nt)
                        if (qa(j, ";")) {
                            var V = "&" + j;
                            a.items.push({
                                label: V,
                                kind: ue.Keyword,
                                documentation: os("entity.propose", "Character entity representing '" + nt[j] + "'"),
                                textEdit: K.replace(z, V),
                                insertTextFormat: ge.PlainText
                            })
                        }
                }
                return a
            }
            function N(x, E) {
                var z = b(x, E);
                a.items.push({
                    label: "!DOCTYPE",
                    kind: ue.Property,
                    documentation: "A preamble for an HTML document.",
                    textEdit: K.replace(z, "!DOCTYPE html>"),
                    insertTextFormat: ge.PlainText
                })
            }
            for (var I = d.scan(); I !== M.EOS && d.getTokenOffset() <= h; ) {
                switch (I) {
                case M.StartTagOpen:
                    if (d.getTokenEnd() === h) {
                        var P = w(M.StartTag);
                        return n.line === 0 && N(h, P),
                        A(h, P)
                    }
                    break;
                case M.StartTag:
                    if (d.getTokenOffset() <= h && h <= d.getTokenEnd())
                        return T(d.getTokenOffset(), d.getTokenEnd());
                    p = d.getTokenText();
                    break;
                case M.AttributeName:
                    if (d.getTokenOffset() <= h && h <= d.getTokenEnd())
                        return H(d.getTokenOffset(), d.getTokenEnd());
                    _ = d.getTokenText();
                    break;
                case M.DelimiterAssign:
                    if (d.getTokenEnd() === h) {
                        var P = w(M.AttributeValue);
                        return m(h, P)
                    }
                    break;
                case M.AttributeValue:
                    if (d.getTokenOffset() <= h && h <= d.getTokenEnd())
                        return m(d.getTokenOffset(), d.getTokenEnd());
                    break;
                case M.Whitespace:
                    if (h <= d.getTokenEnd())
                        switch (d.getScannerState()) {
                        case F.AfterOpeningStartTag:
                            var W = d.getTokenOffset()
                              , L = w(M.StartTag);
                            return A(W, L);
                        case F.WithinTag:
                        case F.AfterAttributeName:
                            return H(d.getTokenEnd());
                        case F.BeforeAttributeValue:
                            return m(d.getTokenEnd());
                        case F.AfterOpeningEndTag:
                            return f(d.getTokenOffset() - 1, !1);
                        case F.WithinContent:
                            return B()
                        }
                    break;
                case M.EndTagOpen:
                    if (h <= d.getTokenEnd()) {
                        var y = d.getTokenOffset() + 1
                          , C = w(M.EndTag);
                        return f(y, !1, C)
                    }
                    break;
                case M.EndTag:
                    if (h <= d.getTokenEnd())
                        for (var U = d.getTokenOffset() - 1; U >= 0; ) {
                            var q = l.charAt(U);
                            if (q === "/")
                                return f(U, !1, d.getTokenEnd());
                            if (!Ct(q))
                                break;
                            U--
                        }
                    break;
                case M.StartTagClose:
                    if (h <= d.getTokenEnd() && p)
                        return v(d.getTokenEnd(), p);
                    break;
                case M.Content:
                    if (h <= d.getTokenEnd())
                        return B();
                    break;
                default:
                    if (h <= d.getTokenEnd())
                        return a;
                    break
                }
                I = d.scan()
            }
            return a
        }
        ,
        e.prototype.doTagComplete = function(t, n, r) {
            var i = t.offsetAt(n);
            if (i <= 0)
                return null;
            var a = t.getText().charAt(i - 1);
            if (a === ">") {
                var o = r.findNodeBefore(i);
                if (o && o.tag && !At(o.tag) && o.start < i && (!o.endTagStart || o.endTagStart > i))
                    for (var u = de(t.getText(), o.start), s = u.scan(); s !== M.EOS && u.getTokenEnd() <= i; ) {
                        if (s === M.StartTagClose && u.getTokenEnd() === i)
                            return "$0</" + o.tag + ">";
                        s = u.scan()
                    }
            } else if (a === "/") {
                for (var o = r.findNodeBefore(i); o && o.closed && !(o.endTagStart && o.endTagStart > i); )
                    o = o.parent;
                if (o && o.tag)
                    for (var u = de(t.getText(), o.start), s = u.scan(); s !== M.EOS && u.getTokenEnd() <= i; ) {
                        if (s === M.EndTagOpen && u.getTokenEnd() === i)
                            return o.tag + ">";
                        s = u.scan()
                    }
            }
            return null
        }
        ,
        e.prototype.convertCompletionList = function(t) {
            return this.doesSupportMarkdown() || t.items.forEach(function(n) {
                n.documentation && typeof n.documentation != "string" && (n.documentation = {
                    kind: "plaintext",
                    value: n.documentation.value
                })
            }),
            t
        }
        ,
        e.prototype.doesSupportMarkdown = function() {
            var t, n, r;
            if (!Lt(this.supportsMarkdown)) {
                if (!Lt(this.lsOptions.clientCapabilities))
                    return this.supportsMarkdown = !0,
                    this.supportsMarkdown;
                var i = (r = (n = (t = this.lsOptions.clientCapabilities.textDocument) === null || t === void 0 ? void 0 : t.completion) === null || n === void 0 ? void 0 : n.completionItem) === null || r === void 0 ? void 0 : r.documentationFormat;
                this.supportsMarkdown = Array.isArray(i) && i.indexOf(pe.Markdown) !== -1
            }
            return this.supportsMarkdown
        }
        ,
        e
    }();
    function us(e) {
        return /^["']*$/.test(e)
    }
    function Ct(e) {
        return /^\s*$/.test(e)
    }
    function ur(e, t, n, r) {
        for (var i = de(e, t, n), a = i.scan(); a === M.Whitespace; )
            a = i.scan();
        return a === r
    }
    function hs(e, t, n) {
        for (; t > n && !Ct(e[t - 1]); )
            t--;
        return t
    }
    function cs(e, t, n) {
        for (; t < n && !Ct(e[t]); )
            t++;
        return t
    }
    var ds = nn()
      , ms = function() {
        function e(t, n) {
            this.lsOptions = t,
            this.dataManager = n
        }
        return e.prototype.doHover = function(t, n, r, i) {
            var a = this.convertContents.bind(this)
              , o = this.doesSupportMarkdown()
              , u = t.offsetAt(n)
              , s = r.findNodeAt(u)
              , l = t.getText();
            if (!s || !s.tag)
                return null;
            var h = this.dataManager.getDataProviders().filter(function(N) {
                return N.isApplicable(t.languageId)
            });
            function c(N, I, P) {
                for (var W = function(q) {
                    var x = null;
                    if (q.provideTags().forEach(function(E) {
                        if (E.name.toLowerCase() === N.toLowerCase()) {
                            var z = Ue(E, i, o);
                            z || (z = {
                                kind: o ? "markdown" : "plaintext",
                                value: ""
                            }),
                            x = {
                                contents: z,
                                range: I
                            }
                        }
                    }),
                    x)
                        return x.contents = a(x.contents),
                        {
                            value: x
                        }
                }, L = 0, y = h; L < y.length; L++) {
                    var C = y[L]
                      , U = W(C);
                    if (typeof U == "object")
                        return U.value
                }
                return null
            }
            function d(N, I, P) {
                for (var W = function(q) {
                    var x = null;
                    if (q.provideAttributes(N).forEach(function(E) {
                        if (I === E.name && E.description) {
                            var z = Ue(E, i, o);
                            z ? x = {
                                contents: z,
                                range: P
                            } : x = null
                        }
                    }),
                    x)
                        return x.contents = a(x.contents),
                        {
                            value: x
                        }
                }, L = 0, y = h; L < y.length; L++) {
                    var C = y[L]
                      , U = W(C);
                    if (typeof U == "object")
                        return U.value
                }
                return null
            }
            function p(N, I, P, W) {
                for (var L = function(x) {
                    var E = null;
                    if (x.provideValues(N, I).forEach(function(z) {
                        if (P === z.name && z.description) {
                            var j = Ue(z, i, o);
                            j ? E = {
                                contents: j,
                                range: W
                            } : E = null
                        }
                    }),
                    E)
                        return E.contents = a(E.contents),
                        {
                            value: E
                        }
                }, y = 0, C = h; y < C.length; y++) {
                    var U = C[y]
                      , q = L(U);
                    if (typeof q == "object")
                        return q.value
                }
                return null
            }
            function _(N, I) {
                var P = k(N);
                for (var W in nt) {
                    var L = null
                      , y = "&" + W;
                    if (P === y) {
                        var C = nt[W].charCodeAt(0).toString(16).toUpperCase()
                          , U = "U+";
                        if (C.length < 4)
                            for (var q = 4 - C.length, x = 0; x < q; )
                                U += "0",
                                x += 1;
                        U += C;
                        var E = ds("entity.propose", "Character entity representing '" + nt[W] + "', unicode equivalent '" + U + "'");
                        E ? L = {
                            contents: E,
                            range: I
                        } : L = null
                    }
                    if (L)
                        return L.contents = a(L.contents),
                        L
                }
                return null
            }
            function b(N, I) {
                for (var P = de(t.getText(), I), W = P.scan(); W !== M.EOS && (P.getTokenEnd() < u || P.getTokenEnd() === u && W !== N); )
                    W = P.scan();
                return W === N && u <= P.getTokenEnd() ? {
                    start: t.positionAt(P.getTokenOffset()),
                    end: t.positionAt(P.getTokenEnd())
                } : null
            }
            function T() {
                for (var N = u - 1, I = n.character; N >= 0 && it(l, N); )
                    N--,
                    I--;
                for (var P = N + 1, W = I; it(l, P); )
                    P++,
                    W++;
                if (N >= 0 && l[N] === "&") {
                    var L = null;
                    return l[P] === ";" ? L = G.create(ne.create(n.line, I), ne.create(n.line, W + 1)) : L = G.create(ne.create(n.line, I), ne.create(n.line, W)),
                    L
                }
                return null
            }
            function k(N) {
                for (var I = u - 1, P = "&"; I >= 0 && it(N, I); )
                    I--;
                for (I = I + 1; it(N, I); )
                    P += N[I],
                    I += 1;
                return P += ";",
                P
            }
            if (s.endTagStart && u >= s.endTagStart) {
                var f = b(M.EndTag, s.endTagStart);
                return f ? c(s.tag, f) : null
            }
            var v = b(M.StartTag, s.start);
            if (v)
                return c(s.tag, v);
            var A = b(M.AttributeName, s.start);
            if (A) {
                var D = s.tag
                  , H = t.getText(A);
                return d(D, H, A)
            }
            var g = T();
            if (g)
                return _(l, g);
            function m(N, I) {
                for (var P = de(t.getText(), N), W = P.scan(), L = void 0; W !== M.EOS && P.getTokenEnd() <= I; )
                    W = P.scan(),
                    W === M.AttributeName && (L = P.getTokenText());
                return L
            }
            var w = b(M.AttributeValue, s.start);
            if (w) {
                var D = s.tag
                  , B = fs(t.getText(w))
                  , R = m(s.start, t.offsetAt(w.start));
                if (R)
                    return p(D, R, B, w)
            }
            return null
        }
        ,
        e.prototype.convertContents = function(t) {
            if (!this.doesSupportMarkdown()) {
                if (typeof t == "string")
                    return t;
                if ("kind"in t)
                    return {
                        kind: "plaintext",
                        value: t.value
                    };
                if (Array.isArray(t))
                    t.map(function(n) {
                        return typeof n == "string" ? n : n.value
                    });
                else
                    return t.value
            }
            return t
        }
        ,
        e.prototype.doesSupportMarkdown = function() {
            var t, n, r;
            if (!Lt(this.supportsMarkdown)) {
                if (!Lt(this.lsOptions.clientCapabilities))
                    return this.supportsMarkdown = !0,
                    this.supportsMarkdown;
                var i = (r = (n = (t = this.lsOptions.clientCapabilities) === null || t === void 0 ? void 0 : t.textDocument) === null || n === void 0 ? void 0 : n.hover) === null || r === void 0 ? void 0 : r.contentFormat;
                this.supportsMarkdown = Array.isArray(i) && i.indexOf(pe.Markdown) !== -1
            }
            return this.supportsMarkdown
        }
        ,
        e
    }();
    function fs(e) {
        return e.length <= 1 ? e.replace(/['"]/, "") : ((e[0] === "'" || e[0] === '"') && (e = e.slice(1)),
        (e[e.length - 1] === "'" || e[e.length - 1] === '"') && (e = e.slice(0, -1)),
        e)
    }
    function ps(e, t) {
        return e
    }
    var hr;
    (function() {
        var e = [, , function(i) {
            function a(s) {
                this.__parent = s,
                this.__character_count = 0,
                this.__indent_count = -1,
                this.__alignment_count = 0,
                this.__wrap_point_index = 0,
                this.__wrap_point_character_count = 0,
                this.__wrap_point_indent_count = -1,
                this.__wrap_point_alignment_count = 0,
                this.__items = []
            }
            a.prototype.clone_empty = function() {
                var s = new a(this.__parent);
                return s.set_indent(this.__indent_count, this.__alignment_count),
                s
            }
            ,
            a.prototype.item = function(s) {
                return s < 0 ? this.__items[this.__items.length + s] : this.__items[s]
            }
            ,
            a.prototype.has_match = function(s) {
                for (var l = this.__items.length - 1; l >= 0; l--)
                    if (this.__items[l].match(s))
                        return !0;
                return !1
            }
            ,
            a.prototype.set_indent = function(s, l) {
                this.is_empty() && (this.__indent_count = s || 0,
                this.__alignment_count = l || 0,
                this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count))
            }
            ,
            a.prototype._set_wrap_point = function() {
                this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length,
                this.__wrap_point_character_count = this.__character_count,
                this.__wrap_point_indent_count = this.__parent.next_line.__indent_count,
                this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count)
            }
            ,
            a.prototype._should_wrap = function() {
                return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count
            }
            ,
            a.prototype._allow_wrap = function() {
                if (this._should_wrap()) {
                    this.__parent.add_new_line();
                    var s = this.__parent.current_line;
                    return s.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count),
                    s.__items = this.__items.slice(this.__wrap_point_index),
                    this.__items = this.__items.slice(0, this.__wrap_point_index),
                    s.__character_count += this.__character_count - this.__wrap_point_character_count,
                    this.__character_count = this.__wrap_point_character_count,
                    s.__items[0] === " " && (s.__items.splice(0, 1),
                    s.__character_count -= 1),
                    !0
                }
                return !1
            }
            ,
            a.prototype.is_empty = function() {
                return this.__items.length === 0
            }
            ,
            a.prototype.last = function() {
                return this.is_empty() ? null : this.__items[this.__items.length - 1]
            }
            ,
            a.prototype.push = function(s) {
                this.__items.push(s);
                var l = s.lastIndexOf(`
`);
                l !== -1 ? this.__character_count = s.length - l : this.__character_count += s.length
            }
            ,
            a.prototype.pop = function() {
                var s = null;
                return this.is_empty() || (s = this.__items.pop(),
                this.__character_count -= s.length),
                s
            }
            ,
            a.prototype._remove_indent = function() {
                this.__indent_count > 0 && (this.__indent_count -= 1,
                this.__character_count -= this.__parent.indent_size)
            }
            ,
            a.prototype._remove_wrap_indent = function() {
                this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1)
            }
            ,
            a.prototype.trim = function() {
                for (; this.last() === " "; )
                    this.__items.pop(),
                    this.__character_count -= 1
            }
            ,
            a.prototype.toString = function() {
                var s = "";
                return this.is_empty() ? this.__parent.indent_empty_lines && (s = this.__parent.get_indent_string(this.__indent_count)) : (s = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count),
                s += this.__items.join("")),
                s
            }
            ;
            function o(s, l) {
                this.__cache = [""],
                this.__indent_size = s.indent_size,
                this.__indent_string = s.indent_char,
                s.indent_with_tabs || (this.__indent_string = new Array(s.indent_size + 1).join(s.indent_char)),
                l = l || "",
                s.indent_level > 0 && (l = new Array(s.indent_level + 1).join(this.__indent_string)),
                this.__base_string = l,
                this.__base_string_length = l.length
            }
            o.prototype.get_indent_size = function(s, l) {
                var h = this.__base_string_length;
                return l = l || 0,
                s < 0 && (h = 0),
                h += s * this.__indent_size,
                h += l,
                h
            }
            ,
            o.prototype.get_indent_string = function(s, l) {
                var h = this.__base_string;
                return l = l || 0,
                s < 0 && (s = 0,
                h = ""),
                l += s * this.__indent_size,
                this.__ensure_cache(l),
                h += this.__cache[l],
                h
            }
            ,
            o.prototype.__ensure_cache = function(s) {
                for (; s >= this.__cache.length; )
                    this.__add_column()
            }
            ,
            o.prototype.__add_column = function() {
                var s = this.__cache.length
                  , l = 0
                  , h = "";
                this.__indent_size && s >= this.__indent_size && (l = Math.floor(s / this.__indent_size),
                s -= l * this.__indent_size,
                h = new Array(l + 1).join(this.__indent_string)),
                s && (h += new Array(s + 1).join(" ")),
                this.__cache.push(h)
            }
            ;
            function u(s, l) {
                this.__indent_cache = new o(s,l),
                this.raw = !1,
                this._end_with_newline = s.end_with_newline,
                this.indent_size = s.indent_size,
                this.wrap_line_length = s.wrap_line_length,
                this.indent_empty_lines = s.indent_empty_lines,
                this.__lines = [],
                this.previous_line = null,
                this.current_line = null,
                this.next_line = new a(this),
                this.space_before_token = !1,
                this.non_breaking_space = !1,
                this.previous_token_wrapped = !1,
                this.__add_outputline()
            }
            u.prototype.__add_outputline = function() {
                this.previous_line = this.current_line,
                this.current_line = this.next_line.clone_empty(),
                this.__lines.push(this.current_line)
            }
            ,
            u.prototype.get_line_number = function() {
                return this.__lines.length
            }
            ,
            u.prototype.get_indent_string = function(s, l) {
                return this.__indent_cache.get_indent_string(s, l)
            }
            ,
            u.prototype.get_indent_size = function(s, l) {
                return this.__indent_cache.get_indent_size(s, l)
            }
            ,
            u.prototype.is_empty = function() {
                return !this.previous_line && this.current_line.is_empty()
            }
            ,
            u.prototype.add_new_line = function(s) {
                return this.is_empty() || !s && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(),
                !0)
            }
            ,
            u.prototype.get_code = function(s) {
                this.trim(!0);
                var l = this.current_line.pop();
                l && (l[l.length - 1] === `
` && (l = l.replace(/\n+$/g, "")),
                this.current_line.push(l)),
                this._end_with_newline && this.__add_outputline();
                var h = this.__lines.join(`
`);
                return s !== `
` && (h = h.replace(/[\n]/g, s)),
                h
            }
            ,
            u.prototype.set_wrap_point = function() {
                this.current_line._set_wrap_point()
            }
            ,
            u.prototype.set_indent = function(s, l) {
                return s = s || 0,
                l = l || 0,
                this.next_line.set_indent(s, l),
                this.__lines.length > 1 ? (this.current_line.set_indent(s, l),
                !0) : (this.current_line.set_indent(),
                !1)
            }
            ,
            u.prototype.add_raw_token = function(s) {
                for (var l = 0; l < s.newlines; l++)
                    this.__add_outputline();
                this.current_line.set_indent(-1),
                this.current_line.push(s.whitespace_before),
                this.current_line.push(s.text),
                this.space_before_token = !1,
                this.non_breaking_space = !1,
                this.previous_token_wrapped = !1
            }
            ,
            u.prototype.add_token = function(s) {
                this.__add_space_before_token(),
                this.current_line.push(s),
                this.space_before_token = !1,
                this.non_breaking_space = !1,
                this.previous_token_wrapped = this.current_line._allow_wrap()
            }
            ,
            u.prototype.__add_space_before_token = function() {
                this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(),
                this.current_line.push(" "))
            }
            ,
            u.prototype.remove_indent = function(s) {
                for (var l = this.__lines.length; s < l; )
                    this.__lines[s]._remove_indent(),
                    s++;
                this.current_line._remove_wrap_indent()
            }
            ,
            u.prototype.trim = function(s) {
                for (s = s === void 0 ? !1 : s,
                this.current_line.trim(); s && this.__lines.length > 1 && this.current_line.is_empty(); )
                    this.__lines.pop(),
                    this.current_line = this.__lines[this.__lines.length - 1],
                    this.current_line.trim();
                this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
            }
            ,
            u.prototype.just_added_newline = function() {
                return this.current_line.is_empty()
            }
            ,
            u.prototype.just_added_blankline = function() {
                return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty()
            }
            ,
            u.prototype.ensure_empty_line_above = function(s, l) {
                for (var h = this.__lines.length - 2; h >= 0; ) {
                    var c = this.__lines[h];
                    if (c.is_empty())
                        break;
                    if (c.item(0).indexOf(s) !== 0 && c.item(-1) !== l) {
                        this.__lines.splice(h + 1, 0, new a(this)),
                        this.previous_line = this.__lines[this.__lines.length - 2];
                        break
                    }
                    h--
                }
            }
            ,
            i.exports.Output = u
        }
        , , , , function(i) {
            function a(s, l) {
                this.raw_options = o(s, l),
                this.disabled = this._get_boolean("disabled"),
                this.eol = this._get_characters("eol", "auto"),
                this.end_with_newline = this._get_boolean("end_with_newline"),
                this.indent_size = this._get_number("indent_size", 4),
                this.indent_char = this._get_characters("indent_char", " "),
                this.indent_level = this._get_number("indent_level"),
                this.preserve_newlines = this._get_boolean("preserve_newlines", !0),
                this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786),
                this.preserve_newlines || (this.max_preserve_newlines = 0),
                this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"),
                this.indent_with_tabs && (this.indent_char = "	",
                this.indent_size === 1 && (this.indent_size = 4)),
                this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")),
                this.indent_empty_lines = this._get_boolean("indent_empty_lines"),
                this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php", "smarty"], ["auto"])
            }
            a.prototype._get_array = function(s, l) {
                var h = this.raw_options[s]
                  , c = l || [];
                return typeof h == "object" ? h !== null && typeof h.concat == "function" && (c = h.concat()) : typeof h == "string" && (c = h.split(/[^a-zA-Z0-9_\/\-]+/)),
                c
            }
            ,
            a.prototype._get_boolean = function(s, l) {
                var h = this.raw_options[s]
                  , c = h === void 0 ? !!l : !!h;
                return c
            }
            ,
            a.prototype._get_characters = function(s, l) {
                var h = this.raw_options[s]
                  , c = l || "";
                return typeof h == "string" && (c = h.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")),
                c
            }
            ,
            a.prototype._get_number = function(s, l) {
                var h = this.raw_options[s];
                l = parseInt(l, 10),
                isNaN(l) && (l = 0);
                var c = parseInt(h, 10);
                return isNaN(c) && (c = l),
                c
            }
            ,
            a.prototype._get_selection = function(s, l, h) {
                var c = this._get_selection_list(s, l, h);
                if (c.length !== 1)
                    throw new Error("Invalid Option Value: The option '" + s + `' can only be one of the following values:
` + l + `
You passed in: '` + this.raw_options[s] + "'");
                return c[0]
            }
            ,
            a.prototype._get_selection_list = function(s, l, h) {
                if (!l || l.length === 0)
                    throw new Error("Selection list cannot be empty.");
                if (h = h || [l[0]],
                !this._is_valid_selection(h, l))
                    throw new Error("Invalid Default Value!");
                var c = this._get_array(s, h);
                if (!this._is_valid_selection(c, l))
                    throw new Error("Invalid Option Value: The option '" + s + `' can contain only the following values:
` + l + `
You passed in: '` + this.raw_options[s] + "'");
                return c
            }
            ,
            a.prototype._is_valid_selection = function(s, l) {
                return s.length && l.length && !s.some(function(h) {
                    return l.indexOf(h) === -1
                })
            }
            ;
            function o(s, l) {
                var h = {};
                s = u(s);
                var c;
                for (c in s)
                    c !== l && (h[c] = s[c]);
                if (l && s[l])
                    for (c in s[l])
                        h[c] = s[l][c];
                return h
            }
            function u(s) {
                var l = {}, h;
                for (h in s) {
                    var c = h.replace(/-/g, "_");
                    l[c] = s[h]
                }
                return l
            }
            i.exports.Options = a,
            i.exports.normalizeOpts = u,
            i.exports.mergeOpts = o
        }
        , , function(i) {
            var a = RegExp.prototype.hasOwnProperty("sticky");
            function o(u) {
                this.__input = u || "",
                this.__input_length = this.__input.length,
                this.__position = 0
            }
            o.prototype.restart = function() {
                this.__position = 0
            }
            ,
            o.prototype.back = function() {
                this.__position > 0 && (this.__position -= 1)
            }
            ,
            o.prototype.hasNext = function() {
                return this.__position < this.__input_length
            }
            ,
            o.prototype.next = function() {
                var u = null;
                return this.hasNext() && (u = this.__input.charAt(this.__position),
                this.__position += 1),
                u
            }
            ,
            o.prototype.peek = function(u) {
                var s = null;
                return u = u || 0,
                u += this.__position,
                u >= 0 && u < this.__input_length && (s = this.__input.charAt(u)),
                s
            }
            ,
            o.prototype.__match = function(u, s) {
                u.lastIndex = s;
                var l = u.exec(this.__input);
                return l && !(a && u.sticky) && l.index !== s && (l = null),
                l
            }
            ,
            o.prototype.test = function(u, s) {
                return s = s || 0,
                s += this.__position,
                s >= 0 && s < this.__input_length ? !!this.__match(u, s) : !1
            }
            ,
            o.prototype.testChar = function(u, s) {
                var l = this.peek(s);
                return u.lastIndex = 0,
                l !== null && u.test(l)
            }
            ,
            o.prototype.match = function(u) {
                var s = this.__match(u, this.__position);
                return s ? this.__position += s[0].length : s = null,
                s
            }
            ,
            o.prototype.read = function(u, s, l) {
                var h = "", c;
                return u && (c = this.match(u),
                c && (h += c[0])),
                s && (c || !u) && (h += this.readUntil(s, l)),
                h
            }
            ,
            o.prototype.readUntil = function(u, s) {
                var l = ""
                  , h = this.__position;
                u.lastIndex = this.__position;
                var c = u.exec(this.__input);
                return c ? (h = c.index,
                s && (h += c[0].length)) : h = this.__input_length,
                l = this.__input.substring(this.__position, h),
                this.__position = h,
                l
            }
            ,
            o.prototype.readUntilAfter = function(u) {
                return this.readUntil(u, !0)
            }
            ,
            o.prototype.get_regexp = function(u, s) {
                var l = null
                  , h = "g";
                return s && a && (h = "y"),
                typeof u == "string" && u !== "" ? l = new RegExp(u,h) : u && (l = new RegExp(u.source,h)),
                l
            }
            ,
            o.prototype.get_literal_regexp = function(u) {
                return RegExp(u.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
            }
            ,
            o.prototype.peekUntilAfter = function(u) {
                var s = this.__position
                  , l = this.readUntilAfter(u);
                return this.__position = s,
                l
            }
            ,
            o.prototype.lookBack = function(u) {
                var s = this.__position - 1;
                return s >= u.length && this.__input.substring(s - u.length, s).toLowerCase() === u
            }
            ,
            i.exports.InputScanner = o
        }
        , , , , , function(i) {
            function a(o, u) {
                o = typeof o == "string" ? o : o.source,
                u = typeof u == "string" ? u : u.source,
                this.__directives_block_pattern = new RegExp(o + / beautify( \w+[:]\w+)+ /.source + u,"g"),
                this.__directive_pattern = / (\w+)[:](\w+)/g,
                this.__directives_end_ignore_pattern = new RegExp(o + /\sbeautify\signore:end\s/.source + u,"g")
            }
            a.prototype.get_directives = function(o) {
                if (!o.match(this.__directives_block_pattern))
                    return null;
                var u = {};
                this.__directive_pattern.lastIndex = 0;
                for (var s = this.__directive_pattern.exec(o); s; )
                    u[s[1]] = s[2],
                    s = this.__directive_pattern.exec(o);
                return u
            }
            ,
            a.prototype.readIgnored = function(o) {
                return o.readUntilAfter(this.__directives_end_ignore_pattern)
            }
            ,
            i.exports.Directives = a
        }
        , , function(i, a, o) {
            var u = o(16).Beautifier
              , s = o(17).Options;
            function l(h, c) {
                var d = new u(h,c);
                return d.beautify()
            }
            i.exports = l,
            i.exports.defaultOptions = function() {
                return new s
            }
        }
        , function(i, a, o) {
            var u = o(17).Options
              , s = o(2).Output
              , l = o(8).InputScanner
              , h = o(13).Directives
              , c = new h(/\/\*/,/\*\//)
              , d = /\r\n|[\r\n]/
              , p = /\r\n|[\r\n]/g
              , _ = /\s/
              , b = /(?:\s|\n)+/g
              , T = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g
              , k = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
            function f(v, A) {
                this._source_text = v || "",
                this._options = new u(A),
                this._ch = null,
                this._input = null,
                this.NESTED_AT_RULE = {
                    "@page": !0,
                    "@font-face": !0,
                    "@keyframes": !0,
                    "@media": !0,
                    "@supports": !0,
                    "@document": !0
                },
                this.CONDITIONAL_GROUP_RULE = {
                    "@media": !0,
                    "@supports": !0,
                    "@document": !0
                }
            }
            f.prototype.eatString = function(v) {
                var A = "";
                for (this._ch = this._input.next(); this._ch; ) {
                    if (A += this._ch,
                    this._ch === "\\")
                        A += this._input.next();
                    else if (v.indexOf(this._ch) !== -1 || this._ch === `
`)
                        break;
                    this._ch = this._input.next()
                }
                return A
            }
            ,
            f.prototype.eatWhitespace = function(v) {
                for (var A = _.test(this._input.peek()), D = 0; _.test(this._input.peek()); )
                    this._ch = this._input.next(),
                    v && this._ch === `
` && (D === 0 || D < this._options.max_preserve_newlines) && (D++,
                    this._output.add_new_line(!0));
                return A
            }
            ,
            f.prototype.foundNestedPseudoClass = function() {
                for (var v = 0, A = 1, D = this._input.peek(A); D; ) {
                    if (D === "{")
                        return !0;
                    if (D === "(")
                        v += 1;
                    else if (D === ")") {
                        if (v === 0)
                            return !1;
                        v -= 1
                    } else if (D === ";" || D === "}")
                        return !1;
                    A++,
                    D = this._input.peek(A)
                }
                return !1
            }
            ,
            f.prototype.print_string = function(v) {
                this._output.set_indent(this._indentLevel),
                this._output.non_breaking_space = !0,
                this._output.add_token(v)
            }
            ,
            f.prototype.preserveSingleSpace = function(v) {
                v && (this._output.space_before_token = !0)
            }
            ,
            f.prototype.indent = function() {
                this._indentLevel++
            }
            ,
            f.prototype.outdent = function() {
                this._indentLevel > 0 && this._indentLevel--
            }
            ,
            f.prototype.beautify = function() {
                if (this._options.disabled)
                    return this._source_text;
                var v = this._source_text
                  , A = this._options.eol;
                A === "auto" && (A = `
`,
                v && d.test(v || "") && (A = v.match(d)[0])),
                v = v.replace(p, `
`);
                var D = v.match(/^[\t ]*/)[0];
                this._output = new s(this._options,D),
                this._input = new l(v),
                this._indentLevel = 0,
                this._nestedLevel = 0,
                this._ch = null;
                for (var H = 0, g = !1, m = !1, w = !1, B = !1, R = !1, N = this._ch, I, P, W; I = this._input.read(b),
                P = I !== "",
                W = N,
                this._ch = this._input.next(),
                this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()),
                N = this._ch,
                this._ch; )
                    if (this._ch === "/" && this._input.peek() === "*") {
                        this._output.add_new_line(),
                        this._input.back();
                        var L = this._input.read(T)
                          , y = c.get_directives(L);
                        y && y.ignore === "start" && (L += c.readIgnored(this._input)),
                        this.print_string(L),
                        this.eatWhitespace(!0),
                        this._output.add_new_line()
                    } else if (this._ch === "/" && this._input.peek() === "/")
                        this._output.space_before_token = !0,
                        this._input.back(),
                        this.print_string(this._input.read(k)),
                        this.eatWhitespace(!0);
                    else if (this._ch === "@")
                        if (this.preserveSingleSpace(P),
                        this._input.peek() === "{")
                            this.print_string(this._ch + this.eatString("}"));
                        else {
                            this.print_string(this._ch);
                            var C = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
                            C.match(/[ :]$/) && (C = this.eatString(": ").replace(/\s$/, ""),
                            this.print_string(C),
                            this._output.space_before_token = !0),
                            C = C.replace(/\s$/, ""),
                            C === "extend" ? B = !0 : C === "import" && (R = !0),
                            C in this.NESTED_AT_RULE ? (this._nestedLevel += 1,
                            C in this.CONDITIONAL_GROUP_RULE && (w = !0)) : !g && H === 0 && C.indexOf(":") !== -1 && (m = !0,
                            this.indent())
                        }
                    else
                        this._ch === "#" && this._input.peek() === "{" ? (this.preserveSingleSpace(P),
                        this.print_string(this._ch + this.eatString("}"))) : this._ch === "{" ? (m && (m = !1,
                        this.outdent()),
                        w ? (w = !1,
                        g = this._indentLevel >= this._nestedLevel) : g = this._indentLevel >= this._nestedLevel - 1,
                        this._options.newline_between_rules && g && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","),
                        this._output.space_before_token = !0,
                        this._options.brace_style === "expand" ? (this._output.add_new_line(),
                        this.print_string(this._ch),
                        this.indent(),
                        this._output.set_indent(this._indentLevel)) : (this.indent(),
                        this.print_string(this._ch)),
                        this.eatWhitespace(!0),
                        this._output.add_new_line()) : this._ch === "}" ? (this.outdent(),
                        this._output.add_new_line(),
                        W === "{" && this._output.trim(!0),
                        R = !1,
                        B = !1,
                        m && (this.outdent(),
                        m = !1),
                        this.print_string(this._ch),
                        g = !1,
                        this._nestedLevel && this._nestedLevel--,
                        this.eatWhitespace(!0),
                        this._output.add_new_line(),
                        this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0)) : this._ch === ":" ? (g || w) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !B && H === 0 ? (this.print_string(":"),
                        m || (m = !0,
                        this._output.space_before_token = !0,
                        this.eatWhitespace(!0),
                        this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0),
                        this._input.peek() === ":" ? (this._ch = this._input.next(),
                        this.print_string("::")) : this.print_string(":")) : this._ch === '"' || this._ch === "'" ? (this.preserveSingleSpace(P),
                        this.print_string(this._ch + this.eatString(this._ch)),
                        this.eatWhitespace(!0)) : this._ch === ";" ? H === 0 ? (m && (this.outdent(),
                        m = !1),
                        B = !1,
                        R = !1,
                        this.print_string(this._ch),
                        this.eatWhitespace(!0),
                        this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch),
                        this.eatWhitespace(!0),
                        this._output.space_before_token = !0) : this._ch === "(" ? this._input.lookBack("url") ? (this.print_string(this._ch),
                        this.eatWhitespace(),
                        H++,
                        this.indent(),
                        this._ch = this._input.next(),
                        this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")),
                        H && (H--,
                        this.outdent()))) : (this.preserveSingleSpace(P),
                        this.print_string(this._ch),
                        this.eatWhitespace(),
                        H++,
                        this.indent()) : this._ch === ")" ? (H && (H--,
                        this.outdent()),
                        this.print_string(this._ch)) : this._ch === "," ? (this.print_string(this._ch),
                        this.eatWhitespace(!0),
                        this._options.selector_separator_newline && !m && H === 0 && !R && !B ? this._output.add_new_line() : this._output.space_before_token = !0) : (this._ch === ">" || this._ch === "+" || this._ch === "~") && !m && H === 0 ? this._options.space_around_combinator ? (this._output.space_before_token = !0,
                        this.print_string(this._ch),
                        this._output.space_before_token = !0) : (this.print_string(this._ch),
                        this.eatWhitespace(),
                        this._ch && _.test(this._ch) && (this._ch = "")) : this._ch === "]" ? this.print_string(this._ch) : this._ch === "[" ? (this.preserveSingleSpace(P),
                        this.print_string(this._ch)) : this._ch === "=" ? (this.eatWhitespace(),
                        this.print_string("="),
                        _.test(this._ch) && (this._ch = "")) : this._ch === "!" && !this._input.lookBack("\\") ? (this.print_string(" "),
                        this.print_string(this._ch)) : (this.preserveSingleSpace(P),
                        this.print_string(this._ch));
                var U = this._output.get_code(A);
                return U
            }
            ,
            i.exports.Beautifier = f
        }
        , function(i, a, o) {
            var u = o(6).Options;
            function s(l) {
                u.call(this, l, "css"),
                this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0),
                this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
                var h = this._get_boolean("space_around_selector_separator");
                this.space_around_combinator = this._get_boolean("space_around_combinator") || h;
                var c = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
                this.brace_style = "collapse";
                for (var d = 0; d < c.length; d++)
                    c[d] !== "expand" ? this.brace_style = "collapse" : this.brace_style = c[d]
            }
            s.prototype = new u,
            i.exports.Options = s
        }
        ]
          , t = {};
        function n(i) {
            var a = t[i];
            if (a !== void 0)
                return a.exports;
            var o = t[i] = {
                exports: {}
            };
            return e[i](o, o.exports, n),
            o.exports
        }
        var r = n(15);
        hr = r
    }
    )();
    var gs = hr, cr;
    (function() {
        var e = [, , function(i) {
            function a(s) {
                this.__parent = s,
                this.__character_count = 0,
                this.__indent_count = -1,
                this.__alignment_count = 0,
                this.__wrap_point_index = 0,
                this.__wrap_point_character_count = 0,
                this.__wrap_point_indent_count = -1,
                this.__wrap_point_alignment_count = 0,
                this.__items = []
            }
            a.prototype.clone_empty = function() {
                var s = new a(this.__parent);
                return s.set_indent(this.__indent_count, this.__alignment_count),
                s
            }
            ,
            a.prototype.item = function(s) {
                return s < 0 ? this.__items[this.__items.length + s] : this.__items[s]
            }
            ,
            a.prototype.has_match = function(s) {
                for (var l = this.__items.length - 1; l >= 0; l--)
                    if (this.__items[l].match(s))
                        return !0;
                return !1
            }
            ,
            a.prototype.set_indent = function(s, l) {
                this.is_empty() && (this.__indent_count = s || 0,
                this.__alignment_count = l || 0,
                this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count))
            }
            ,
            a.prototype._set_wrap_point = function() {
                this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length,
                this.__wrap_point_character_count = this.__character_count,
                this.__wrap_point_indent_count = this.__parent.next_line.__indent_count,
                this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count)
            }
            ,
            a.prototype._should_wrap = function() {
                return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count
            }
            ,
            a.prototype._allow_wrap = function() {
                if (this._should_wrap()) {
                    this.__parent.add_new_line();
                    var s = this.__parent.current_line;
                    return s.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count),
                    s.__items = this.__items.slice(this.__wrap_point_index),
                    this.__items = this.__items.slice(0, this.__wrap_point_index),
                    s.__character_count += this.__character_count - this.__wrap_point_character_count,
                    this.__character_count = this.__wrap_point_character_count,
                    s.__items[0] === " " && (s.__items.splice(0, 1),
                    s.__character_count -= 1),
                    !0
                }
                return !1
            }
            ,
            a.prototype.is_empty = function() {
                return this.__items.length === 0
            }
            ,
            a.prototype.last = function() {
                return this.is_empty() ? null : this.__items[this.__items.length - 1]
            }
            ,
            a.prototype.push = function(s) {
                this.__items.push(s);
                var l = s.lastIndexOf(`
`);
                l !== -1 ? this.__character_count = s.length - l : this.__character_count += s.length
            }
            ,
            a.prototype.pop = function() {
                var s = null;
                return this.is_empty() || (s = this.__items.pop(),
                this.__character_count -= s.length),
                s
            }
            ,
            a.prototype._remove_indent = function() {
                this.__indent_count > 0 && (this.__indent_count -= 1,
                this.__character_count -= this.__parent.indent_size)
            }
            ,
            a.prototype._remove_wrap_indent = function() {
                this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1)
            }
            ,
            a.prototype.trim = function() {
                for (; this.last() === " "; )
                    this.__items.pop(),
                    this.__character_count -= 1
            }
            ,
            a.prototype.toString = function() {
                var s = "";
                return this.is_empty() ? this.__parent.indent_empty_lines && (s = this.__parent.get_indent_string(this.__indent_count)) : (s = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count),
                s += this.__items.join("")),
                s
            }
            ;
            function o(s, l) {
                this.__cache = [""],
                this.__indent_size = s.indent_size,
                this.__indent_string = s.indent_char,
                s.indent_with_tabs || (this.__indent_string = new Array(s.indent_size + 1).join(s.indent_char)),
                l = l || "",
                s.indent_level > 0 && (l = new Array(s.indent_level + 1).join(this.__indent_string)),
                this.__base_string = l,
                this.__base_string_length = l.length
            }
            o.prototype.get_indent_size = function(s, l) {
                var h = this.__base_string_length;
                return l = l || 0,
                s < 0 && (h = 0),
                h += s * this.__indent_size,
                h += l,
                h
            }
            ,
            o.prototype.get_indent_string = function(s, l) {
                var h = this.__base_string;
                return l = l || 0,
                s < 0 && (s = 0,
                h = ""),
                l += s * this.__indent_size,
                this.__ensure_cache(l),
                h += this.__cache[l],
                h
            }
            ,
            o.prototype.__ensure_cache = function(s) {
                for (; s >= this.__cache.length; )
                    this.__add_column()
            }
            ,
            o.prototype.__add_column = function() {
                var s = this.__cache.length
                  , l = 0
                  , h = "";
                this.__indent_size && s >= this.__indent_size && (l = Math.floor(s / this.__indent_size),
                s -= l * this.__indent_size,
                h = new Array(l + 1).join(this.__indent_string)),
                s && (h += new Array(s + 1).join(" ")),
                this.__cache.push(h)
            }
            ;
            function u(s, l) {
                this.__indent_cache = new o(s,l),
                this.raw = !1,
                this._end_with_newline = s.end_with_newline,
                this.indent_size = s.indent_size,
                this.wrap_line_length = s.wrap_line_length,
                this.indent_empty_lines = s.indent_empty_lines,
                this.__lines = [],
                this.previous_line = null,
                this.current_line = null,
                this.next_line = new a(this),
                this.space_before_token = !1,
                this.non_breaking_space = !1,
                this.previous_token_wrapped = !1,
                this.__add_outputline()
            }
            u.prototype.__add_outputline = function() {
                this.previous_line = this.current_line,
                this.current_line = this.next_line.clone_empty(),
                this.__lines.push(this.current_line)
            }
            ,
            u.prototype.get_line_number = function() {
                return this.__lines.length
            }
            ,
            u.prototype.get_indent_string = function(s, l) {
                return this.__indent_cache.get_indent_string(s, l)
            }
            ,
            u.prototype.get_indent_size = function(s, l) {
                return this.__indent_cache.get_indent_size(s, l)
            }
            ,
            u.prototype.is_empty = function() {
                return !this.previous_line && this.current_line.is_empty()
            }
            ,
            u.prototype.add_new_line = function(s) {
                return this.is_empty() || !s && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(),
                !0)
            }
            ,
            u.prototype.get_code = function(s) {
                this.trim(!0);
                var l = this.current_line.pop();
                l && (l[l.length - 1] === `
` && (l = l.replace(/\n+$/g, "")),
                this.current_line.push(l)),
                this._end_with_newline && this.__add_outputline();
                var h = this.__lines.join(`
`);
                return s !== `
` && (h = h.replace(/[\n]/g, s)),
                h
            }
            ,
            u.prototype.set_wrap_point = function() {
                this.current_line._set_wrap_point()
            }
            ,
            u.prototype.set_indent = function(s, l) {
                return s = s || 0,
                l = l || 0,
                this.next_line.set_indent(s, l),
                this.__lines.length > 1 ? (this.current_line.set_indent(s, l),
                !0) : (this.current_line.set_indent(),
                !1)
            }
            ,
            u.prototype.add_raw_token = function(s) {
                for (var l = 0; l < s.newlines; l++)
                    this.__add_outputline();
                this.current_line.set_indent(-1),
                this.current_line.push(s.whitespace_before),
                this.current_line.push(s.text),
                this.space_before_token = !1,
                this.non_breaking_space = !1,
                this.previous_token_wrapped = !1
            }
            ,
            u.prototype.add_token = function(s) {
                this.__add_space_before_token(),
                this.current_line.push(s),
                this.space_before_token = !1,
                this.non_breaking_space = !1,
                this.previous_token_wrapped = this.current_line._allow_wrap()
            }
            ,
            u.prototype.__add_space_before_token = function() {
                this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(),
                this.current_line.push(" "))
            }
            ,
            u.prototype.remove_indent = function(s) {
                for (var l = this.__lines.length; s < l; )
                    this.__lines[s]._remove_indent(),
                    s++;
                this.current_line._remove_wrap_indent()
            }
            ,
            u.prototype.trim = function(s) {
                for (s = s === void 0 ? !1 : s,
                this.current_line.trim(); s && this.__lines.length > 1 && this.current_line.is_empty(); )
                    this.__lines.pop(),
                    this.current_line = this.__lines[this.__lines.length - 1],
                    this.current_line.trim();
                this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
            }
            ,
            u.prototype.just_added_newline = function() {
                return this.current_line.is_empty()
            }
            ,
            u.prototype.just_added_blankline = function() {
                return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty()
            }
            ,
            u.prototype.ensure_empty_line_above = function(s, l) {
                for (var h = this.__lines.length - 2; h >= 0; ) {
                    var c = this.__lines[h];
                    if (c.is_empty())
                        break;
                    if (c.item(0).indexOf(s) !== 0 && c.item(-1) !== l) {
                        this.__lines.splice(h + 1, 0, new a(this)),
                        this.previous_line = this.__lines[this.__lines.length - 2];
                        break
                    }
                    h--
                }
            }
            ,
            i.exports.Output = u
        }
        , function(i) {
            function a(o, u, s, l) {
                this.type = o,
                this.text = u,
                this.comments_before = null,
                this.newlines = s || 0,
                this.whitespace_before = l || "",
                this.parent = null,
                this.next = null,
                this.previous = null,
                this.opened = null,
                this.closed = null,
                this.directives = null
            }
            i.exports.Token = a
        }
        , , , function(i) {
            function a(s, l) {
                this.raw_options = o(s, l),
                this.disabled = this._get_boolean("disabled"),
                this.eol = this._get_characters("eol", "auto"),
                this.end_with_newline = this._get_boolean("end_with_newline"),
                this.indent_size = this._get_number("indent_size", 4),
                this.indent_char = this._get_characters("indent_char", " "),
                this.indent_level = this._get_number("indent_level"),
                this.preserve_newlines = this._get_boolean("preserve_newlines", !0),
                this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786),
                this.preserve_newlines || (this.max_preserve_newlines = 0),
                this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"),
                this.indent_with_tabs && (this.indent_char = "	",
                this.indent_size === 1 && (this.indent_size = 4)),
                this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")),
                this.indent_empty_lines = this._get_boolean("indent_empty_lines"),
                this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php", "smarty"], ["auto"])
            }
            a.prototype._get_array = function(s, l) {
                var h = this.raw_options[s]
                  , c = l || [];
                return typeof h == "object" ? h !== null && typeof h.concat == "function" && (c = h.concat()) : typeof h == "string" && (c = h.split(/[^a-zA-Z0-9_\/\-]+/)),
                c
            }
            ,
            a.prototype._get_boolean = function(s, l) {
                var h = this.raw_options[s]
                  , c = h === void 0 ? !!l : !!h;
                return c
            }
            ,
            a.prototype._get_characters = function(s, l) {
                var h = this.raw_options[s]
                  , c = l || "";
                return typeof h == "string" && (c = h.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")),
                c
            }
            ,
            a.prototype._get_number = function(s, l) {
                var h = this.raw_options[s];
                l = parseInt(l, 10),
                isNaN(l) && (l = 0);
                var c = parseInt(h, 10);
                return isNaN(c) && (c = l),
                c
            }
            ,
            a.prototype._get_selection = function(s, l, h) {
                var c = this._get_selection_list(s, l, h);
                if (c.length !== 1)
                    throw new Error("Invalid Option Value: The option '" + s + `' can only be one of the following values:
` + l + `
You passed in: '` + this.raw_options[s] + "'");
                return c[0]
            }
            ,
            a.prototype._get_selection_list = function(s, l, h) {
                if (!l || l.length === 0)
                    throw new Error("Selection list cannot be empty.");
                if (h = h || [l[0]],
                !this._is_valid_selection(h, l))
                    throw new Error("Invalid Default Value!");
                var c = this._get_array(s, h);
                if (!this._is_valid_selection(c, l))
                    throw new Error("Invalid Option Value: The option '" + s + `' can contain only the following values:
` + l + `
You passed in: '` + this.raw_options[s] + "'");
                return c
            }
            ,
            a.prototype._is_valid_selection = function(s, l) {
                return s.length && l.length && !s.some(function(h) {
                    return l.indexOf(h) === -1
                })
            }
            ;
            function o(s, l) {
                var h = {};
                s = u(s);
                var c;
                for (c in s)
                    c !== l && (h[c] = s[c]);
                if (l && s[l])
                    for (c in s[l])
                        h[c] = s[l][c];
                return h
            }
            function u(s) {
                var l = {}, h;
                for (h in s) {
                    var c = h.replace(/-/g, "_");
                    l[c] = s[h]
                }
                return l
            }
            i.exports.Options = a,
            i.exports.normalizeOpts = u,
            i.exports.mergeOpts = o
        }
        , , function(i) {
            var a = RegExp.prototype.hasOwnProperty("sticky");
            function o(u) {
                this.__input = u || "",
                this.__input_length = this.__input.length,
                this.__position = 0
            }
            o.prototype.restart = function() {
                this.__position = 0
            }
            ,
            o.prototype.back = function() {
                this.__position > 0 && (this.__position -= 1)
            }
            ,
            o.prototype.hasNext = function() {
                return this.__position < this.__input_length
            }
            ,
            o.prototype.next = function() {
                var u = null;
                return this.hasNext() && (u = this.__input.charAt(this.__position),
                this.__position += 1),
                u
            }
            ,
            o.prototype.peek = function(u) {
                var s = null;
                return u = u || 0,
                u += this.__position,
                u >= 0 && u < this.__input_length && (s = this.__input.charAt(u)),
                s
            }
            ,
            o.prototype.__match = function(u, s) {
                u.lastIndex = s;
                var l = u.exec(this.__input);
                return l && !(a && u.sticky) && l.index !== s && (l = null),
                l
            }
            ,
            o.prototype.test = function(u, s) {
                return s = s || 0,
                s += this.__position,
                s >= 0 && s < this.__input_length ? !!this.__match(u, s) : !1
            }
            ,
            o.prototype.testChar = function(u, s) {
                var l = this.peek(s);
                return u.lastIndex = 0,
                l !== null && u.test(l)
            }
            ,
            o.prototype.match = function(u) {
                var s = this.__match(u, this.__position);
                return s ? this.__position += s[0].length : s = null,
                s
            }
            ,
            o.prototype.read = function(u, s, l) {
                var h = "", c;
                return u && (c = this.match(u),
                c && (h += c[0])),
                s && (c || !u) && (h += this.readUntil(s, l)),
                h
            }
            ,
            o.prototype.readUntil = function(u, s) {
                var l = ""
                  , h = this.__position;
                u.lastIndex = this.__position;
                var c = u.exec(this.__input);
                return c ? (h = c.index,
                s && (h += c[0].length)) : h = this.__input_length,
                l = this.__input.substring(this.__position, h),
                this.__position = h,
                l
            }
            ,
            o.prototype.readUntilAfter = function(u) {
                return this.readUntil(u, !0)
            }
            ,
            o.prototype.get_regexp = function(u, s) {
                var l = null
                  , h = "g";
                return s && a && (h = "y"),
                typeof u == "string" && u !== "" ? l = new RegExp(u,h) : u && (l = new RegExp(u.source,h)),
                l
            }
            ,
            o.prototype.get_literal_regexp = function(u) {
                return RegExp(u.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
            }
            ,
            o.prototype.peekUntilAfter = function(u) {
                var s = this.__position
                  , l = this.readUntilAfter(u);
                return this.__position = s,
                l
            }
            ,
            o.prototype.lookBack = function(u) {
                var s = this.__position - 1;
                return s >= u.length && this.__input.substring(s - u.length, s).toLowerCase() === u
            }
            ,
            i.exports.InputScanner = o
        }
        , function(i, a, o) {
            var u = o(8).InputScanner
              , s = o(3).Token
              , l = o(10).TokenStream
              , h = o(11).WhitespacePattern
              , c = {
                START: "TK_START",
                RAW: "TK_RAW",
                EOF: "TK_EOF"
            }
              , d = function(p, _) {
                this._input = new u(p),
                this._options = _ || {},
                this.__tokens = null,
                this._patterns = {},
                this._patterns.whitespace = new h(this._input)
            };
            d.prototype.tokenize = function() {
                this._input.restart(),
                this.__tokens = new l,
                this._reset();
                for (var p, _ = new s(c.START,""), b = null, T = [], k = new l; _.type !== c.EOF; ) {
                    for (p = this._get_next_token(_, b); this._is_comment(p); )
                        k.add(p),
                        p = this._get_next_token(_, b);
                    k.isEmpty() || (p.comments_before = k,
                    k = new l),
                    p.parent = b,
                    this._is_opening(p) ? (T.push(b),
                    b = p) : b && this._is_closing(p, b) && (p.opened = b,
                    b.closed = p,
                    b = T.pop(),
                    p.parent = b),
                    p.previous = _,
                    _.next = p,
                    this.__tokens.add(p),
                    _ = p
                }
                return this.__tokens
            }
            ,
            d.prototype._is_first_token = function() {
                return this.__tokens.isEmpty()
            }
            ,
            d.prototype._reset = function() {}
            ,
            d.prototype._get_next_token = function(p, _) {
                this._readWhitespace();
                var b = this._input.read(/.+/g);
                return b ? this._create_token(c.RAW, b) : this._create_token(c.EOF, "")
            }
            ,
            d.prototype._is_comment = function(p) {
                return !1
            }
            ,
            d.prototype._is_opening = function(p) {
                return !1
            }
            ,
            d.prototype._is_closing = function(p, _) {
                return !1
            }
            ,
            d.prototype._create_token = function(p, _) {
                var b = new s(p,_,this._patterns.whitespace.newline_count,this._patterns.whitespace.whitespace_before_token);
                return b
            }
            ,
            d.prototype._readWhitespace = function() {
                return this._patterns.whitespace.read()
            }
            ,
            i.exports.Tokenizer = d,
            i.exports.TOKEN = c
        }
        , function(i) {
            function a(o) {
                this.__tokens = [],
                this.__tokens_length = this.__tokens.length,
                this.__position = 0,
                this.__parent_token = o
            }
            a.prototype.restart = function() {
                this.__position = 0
            }
            ,
            a.prototype.isEmpty = function() {
                return this.__tokens_length === 0
            }
            ,
            a.prototype.hasNext = function() {
                return this.__position < this.__tokens_length
            }
            ,
            a.prototype.next = function() {
                var o = null;
                return this.hasNext() && (o = this.__tokens[this.__position],
                this.__position += 1),
                o
            }
            ,
            a.prototype.peek = function(o) {
                var u = null;
                return o = o || 0,
                o += this.__position,
                o >= 0 && o < this.__tokens_length && (u = this.__tokens[o]),
                u
            }
            ,
            a.prototype.add = function(o) {
                this.__parent_token && (o.parent = this.__parent_token),
                this.__tokens.push(o),
                this.__tokens_length += 1
            }
            ,
            i.exports.TokenStream = a
        }
        , function(i, a, o) {
            var u = o(12).Pattern;
            function s(l, h) {
                u.call(this, l, h),
                h ? this._line_regexp = this._input.get_regexp(h._line_regexp) : this.__set_whitespace_patterns("", ""),
                this.newline_count = 0,
                this.whitespace_before_token = ""
            }
            s.prototype = new u,
            s.prototype.__set_whitespace_patterns = function(l, h) {
                l += "\\t ",
                h += "\\n\\r",
                this._match_pattern = this._input.get_regexp("[" + l + h + "]+", !0),
                this._newline_regexp = this._input.get_regexp("\\r\\n|[" + h + "]")
            }
            ,
            s.prototype.read = function() {
                this.newline_count = 0,
                this.whitespace_before_token = "";
                var l = this._input.read(this._match_pattern);
                if (l === " ")
                    this.whitespace_before_token = " ";
                else if (l) {
                    var h = this.__split(this._newline_regexp, l);
                    this.newline_count = h.length - 1,
                    this.whitespace_before_token = h[this.newline_count]
                }
                return l
            }
            ,
            s.prototype.matching = function(l, h) {
                var c = this._create();
                return c.__set_whitespace_patterns(l, h),
                c._update(),
                c
            }
            ,
            s.prototype._create = function() {
                return new s(this._input,this)
            }
            ,
            s.prototype.__split = function(l, h) {
                l.lastIndex = 0;
                for (var c = 0, d = [], p = l.exec(h); p; )
                    d.push(h.substring(c, p.index)),
                    c = p.index + p[0].length,
                    p = l.exec(h);
                return c < h.length ? d.push(h.substring(c, h.length)) : d.push(""),
                d
            }
            ,
            i.exports.WhitespacePattern = s
        }
        , function(i) {
            function a(o, u) {
                this._input = o,
                this._starting_pattern = null,
                this._match_pattern = null,
                this._until_pattern = null,
                this._until_after = !1,
                u && (this._starting_pattern = this._input.get_regexp(u._starting_pattern, !0),
                this._match_pattern = this._input.get_regexp(u._match_pattern, !0),
                this._until_pattern = this._input.get_regexp(u._until_pattern),
                this._until_after = u._until_after)
            }
            a.prototype.read = function() {
                var o = this._input.read(this._starting_pattern);
                return (!this._starting_pattern || o) && (o += this._input.read(this._match_pattern, this._until_pattern, this._until_after)),
                o
            }
            ,
            a.prototype.read_match = function() {
                return this._input.match(this._match_pattern)
            }
            ,
            a.prototype.until_after = function(o) {
                var u = this._create();
                return u._until_after = !0,
                u._until_pattern = this._input.get_regexp(o),
                u._update(),
                u
            }
            ,
            a.prototype.until = function(o) {
                var u = this._create();
                return u._until_after = !1,
                u._until_pattern = this._input.get_regexp(o),
                u._update(),
                u
            }
            ,
            a.prototype.starting_with = function(o) {
                var u = this._create();
                return u._starting_pattern = this._input.get_regexp(o, !0),
                u._update(),
                u
            }
            ,
            a.prototype.matching = function(o) {
                var u = this._create();
                return u._match_pattern = this._input.get_regexp(o, !0),
                u._update(),
                u
            }
            ,
            a.prototype._create = function() {
                return new a(this._input,this)
            }
            ,
            a.prototype._update = function() {}
            ,
            i.exports.Pattern = a
        }
        , function(i) {
            function a(o, u) {
                o = typeof o == "string" ? o : o.source,
                u = typeof u == "string" ? u : u.source,
                this.__directives_block_pattern = new RegExp(o + / beautify( \w+[:]\w+)+ /.source + u,"g"),
                this.__directive_pattern = / (\w+)[:](\w+)/g,
                this.__directives_end_ignore_pattern = new RegExp(o + /\sbeautify\signore:end\s/.source + u,"g")
            }
            a.prototype.get_directives = function(o) {
                if (!o.match(this.__directives_block_pattern))
                    return null;
                var u = {};
                this.__directive_pattern.lastIndex = 0;
                for (var s = this.__directive_pattern.exec(o); s; )
                    u[s[1]] = s[2],
                    s = this.__directive_pattern.exec(o);
                return u
            }
            ,
            a.prototype.readIgnored = function(o) {
                return o.readUntilAfter(this.__directives_end_ignore_pattern)
            }
            ,
            i.exports.Directives = a
        }
        , function(i, a, o) {
            var u = o(12).Pattern
              , s = {
                django: !1,
                erb: !1,
                handlebars: !1,
                php: !1,
                smarty: !1
            };
            function l(h, c) {
                u.call(this, h, c),
                this.__template_pattern = null,
                this._disabled = Object.assign({}, s),
                this._excluded = Object.assign({}, s),
                c && (this.__template_pattern = this._input.get_regexp(c.__template_pattern),
                this._excluded = Object.assign(this._excluded, c._excluded),
                this._disabled = Object.assign(this._disabled, c._disabled));
                var d = new u(h);
                this.__patterns = {
                    handlebars_comment: d.starting_with(/{{!--/).until_after(/--}}/),
                    handlebars_unescaped: d.starting_with(/{{{/).until_after(/}}}/),
                    handlebars: d.starting_with(/{{/).until_after(/}}/),
                    php: d.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
                    erb: d.starting_with(/<%[^%]/).until_after(/[^%]%>/),
                    django: d.starting_with(/{%/).until_after(/%}/),
                    django_value: d.starting_with(/{{/).until_after(/}}/),
                    django_comment: d.starting_with(/{#/).until_after(/#}/),
                    smarty: d.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
                    smarty_comment: d.starting_with(/{\*/).until_after(/\*}/),
                    smarty_literal: d.starting_with(/{literal}/).until_after(/{\/literal}/)
                }
            }
            l.prototype = new u,
            l.prototype._create = function() {
                return new l(this._input,this)
            }
            ,
            l.prototype._update = function() {
                this.__set_templated_pattern()
            }
            ,
            l.prototype.disable = function(h) {
                var c = this._create();
                return c._disabled[h] = !0,
                c._update(),
                c
            }
            ,
            l.prototype.read_options = function(h) {
                var c = this._create();
                for (var d in s)
                    c._disabled[d] = h.templating.indexOf(d) === -1;
                return c._update(),
                c
            }
            ,
            l.prototype.exclude = function(h) {
                var c = this._create();
                return c._excluded[h] = !0,
                c._update(),
                c
            }
            ,
            l.prototype.read = function() {
                var h = "";
                this._match_pattern ? h = this._input.read(this._starting_pattern) : h = this._input.read(this._starting_pattern, this.__template_pattern);
                for (var c = this._read_template(); c; )
                    this._match_pattern ? c += this._input.read(this._match_pattern) : c += this._input.readUntil(this.__template_pattern),
                    h += c,
                    c = this._read_template();
                return this._until_after && (h += this._input.readUntilAfter(this._until_pattern)),
                h
            }
            ,
            l.prototype.__set_templated_pattern = function() {
                var h = [];
                this._disabled.php || h.push(this.__patterns.php._starting_pattern.source),
                this._disabled.handlebars || h.push(this.__patterns.handlebars._starting_pattern.source),
                this._disabled.erb || h.push(this.__patterns.erb._starting_pattern.source),
                this._disabled.django || (h.push(this.__patterns.django._starting_pattern.source),
                h.push(this.__patterns.django_value._starting_pattern.source),
                h.push(this.__patterns.django_comment._starting_pattern.source)),
                this._disabled.smarty || h.push(this.__patterns.smarty._starting_pattern.source),
                this._until_pattern && h.push(this._until_pattern.source),
                this.__template_pattern = this._input.get_regexp("(?:" + h.join("|") + ")")
            }
            ,
            l.prototype._read_template = function() {
                var h = ""
                  , c = this._input.peek();
                if (c === "<") {
                    var d = this._input.peek(1);
                    !this._disabled.php && !this._excluded.php && d === "?" && (h = h || this.__patterns.php.read()),
                    !this._disabled.erb && !this._excluded.erb && d === "%" && (h = h || this.__patterns.erb.read())
                } else
                    c === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (h = h || this.__patterns.handlebars_comment.read(),
                    h = h || this.__patterns.handlebars_unescaped.read(),
                    h = h || this.__patterns.handlebars.read()),
                    this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (h = h || this.__patterns.django_value.read()),
                    this._excluded.django || (h = h || this.__patterns.django_comment.read(),
                    h = h || this.__patterns.django.read())),
                    this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (h = h || this.__patterns.smarty_comment.read(),
                    h = h || this.__patterns.smarty_literal.read(),
                    h = h || this.__patterns.smarty.read()));
                return h
            }
            ,
            i.exports.TemplatablePattern = l
        }
        , , , , function(i, a, o) {
            var u = o(19).Beautifier
              , s = o(20).Options;
            function l(h, c, d, p) {
                var _ = new u(h,c,d,p);
                return _.beautify()
            }
            i.exports = l,
            i.exports.defaultOptions = function() {
                return new s
            }
        }
        , function(i, a, o) {
            var u = o(20).Options
              , s = o(2).Output
              , l = o(21).Tokenizer
              , h = o(21).TOKEN
              , c = /\r\n|[\r\n]/
              , d = /\r\n|[\r\n]/g
              , p = function(g, m) {
                this.indent_level = 0,
                this.alignment_size = 0,
                this.max_preserve_newlines = g.max_preserve_newlines,
                this.preserve_newlines = g.preserve_newlines,
                this._output = new s(g,m)
            };
            p.prototype.current_line_has_match = function(g) {
                return this._output.current_line.has_match(g)
            }
            ,
            p.prototype.set_space_before_token = function(g, m) {
                this._output.space_before_token = g,
                this._output.non_breaking_space = m
            }
            ,
            p.prototype.set_wrap_point = function() {
                this._output.set_indent(this.indent_level, this.alignment_size),
                this._output.set_wrap_point()
            }
            ,
            p.prototype.add_raw_token = function(g) {
                this._output.add_raw_token(g)
            }
            ,
            p.prototype.print_preserved_newlines = function(g) {
                var m = 0;
                g.type !== h.TEXT && g.previous.type !== h.TEXT && (m = g.newlines ? 1 : 0),
                this.preserve_newlines && (m = g.newlines < this.max_preserve_newlines + 1 ? g.newlines : this.max_preserve_newlines + 1);
                for (var w = 0; w < m; w++)
                    this.print_newline(w > 0);
                return m !== 0
            }
            ,
            p.prototype.traverse_whitespace = function(g) {
                return g.whitespace_before || g.newlines ? (this.print_preserved_newlines(g) || (this._output.space_before_token = !0),
                !0) : !1
            }
            ,
            p.prototype.previous_token_wrapped = function() {
                return this._output.previous_token_wrapped
            }
            ,
            p.prototype.print_newline = function(g) {
                this._output.add_new_line(g)
            }
            ,
            p.prototype.print_token = function(g) {
                g.text && (this._output.set_indent(this.indent_level, this.alignment_size),
                this._output.add_token(g.text))
            }
            ,
            p.prototype.indent = function() {
                this.indent_level++
            }
            ,
            p.prototype.get_full_indent = function(g) {
                return g = this.indent_level + (g || 0),
                g < 1 ? "" : this._output.get_indent_string(g)
            }
            ;
            var _ = function(g) {
                for (var m = null, w = g.next; w.type !== h.EOF && g.closed !== w; ) {
                    if (w.type === h.ATTRIBUTE && w.text === "type") {
                        w.next && w.next.type === h.EQUALS && w.next.next && w.next.next.type === h.VALUE && (m = w.next.next.text);
                        break
                    }
                    w = w.next
                }
                return m
            }
              , b = function(g, m) {
                var w = null
                  , B = null;
                return m.closed ? (g === "script" ? w = "text/javascript" : g === "style" && (w = "text/css"),
                w = _(m) || w,
                w.search("text/css") > -1 ? B = "css" : w.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? B = "javascript" : w.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? B = "html" : w.search(/test\/null/) > -1 && (B = "null"),
                B) : null
            };
            function T(g, m) {
                return m.indexOf(g) !== -1
            }
            function k(g, m, w) {
                this.parent = g || null,
                this.tag = m ? m.tag_name : "",
                this.indent_level = w || 0,
                this.parser_token = m || null
            }
            function f(g) {
                this._printer = g,
                this._current_frame = null
            }
            f.prototype.get_parser_token = function() {
                return this._current_frame ? this._current_frame.parser_token : null
            }
            ,
            f.prototype.record_tag = function(g) {
                var m = new k(this._current_frame,g,this._printer.indent_level);
                this._current_frame = m
            }
            ,
            f.prototype._try_pop_frame = function(g) {
                var m = null;
                return g && (m = g.parser_token,
                this._printer.indent_level = g.indent_level,
                this._current_frame = g.parent),
                m
            }
            ,
            f.prototype._get_frame = function(g, m) {
                for (var w = this._current_frame; w && g.indexOf(w.tag) === -1; ) {
                    if (m && m.indexOf(w.tag) !== -1) {
                        w = null;
                        break
                    }
                    w = w.parent
                }
                return w
            }
            ,
            f.prototype.try_pop = function(g, m) {
                var w = this._get_frame([g], m);
                return this._try_pop_frame(w)
            }
            ,
            f.prototype.indent_to_tag = function(g) {
                var m = this._get_frame(g);
                m && (this._printer.indent_level = m.indent_level)
            }
            ;
            function v(g, m, w, B) {
                this._source_text = g || "",
                m = m || {},
                this._js_beautify = w,
                this._css_beautify = B,
                this._tag_stack = null;
                var R = new u(m,"html");
                this._options = R,
                this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force",
                this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline",
                this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned",
                this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple",
                this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve",
                this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned"
            }
            v.prototype.beautify = function() {
                if (this._options.disabled)
                    return this._source_text;
                var g = this._source_text
                  , m = this._options.eol;
                this._options.eol === "auto" && (m = `
`,
                g && c.test(g) && (m = g.match(c)[0])),
                g = g.replace(d, `
`);
                var w = g.match(/^[\t ]*/)[0]
                  , B = {
                    text: "",
                    type: ""
                }
                  , R = new A
                  , N = new p(this._options,w)
                  , I = new l(g,this._options).tokenize();
                this._tag_stack = new f(N);
                for (var P = null, W = I.next(); W.type !== h.EOF; )
                    W.type === h.TAG_OPEN || W.type === h.COMMENT ? (P = this._handle_tag_open(N, W, R, B),
                    R = P) : W.type === h.ATTRIBUTE || W.type === h.EQUALS || W.type === h.VALUE || W.type === h.TEXT && !R.tag_complete ? P = this._handle_inside_tag(N, W, R, I) : W.type === h.TAG_CLOSE ? P = this._handle_tag_close(N, W, R) : W.type === h.TEXT ? P = this._handle_text(N, W, R) : N.add_raw_token(W),
                    B = P,
                    W = I.next();
                var L = N._output.get_code(m);
                return L
            }
            ,
            v.prototype._handle_tag_close = function(g, m, w) {
                var B = {
                    text: m.text,
                    type: m.type
                };
                return g.alignment_size = 0,
                w.tag_complete = !0,
                g.set_space_before_token(m.newlines || m.whitespace_before !== "", !0),
                w.is_unformatted ? g.add_raw_token(m) : (w.tag_start_char === "<" && (g.set_space_before_token(m.text[0] === "/", !0),
                this._is_wrap_attributes_force_expand_multiline && w.has_wrapped_attrs && g.print_newline(!1)),
                g.print_token(m)),
                w.indent_content && !(w.is_unformatted || w.is_content_unformatted) && (g.indent(),
                w.indent_content = !1),
                !w.is_inline_element && !(w.is_unformatted || w.is_content_unformatted) && g.set_wrap_point(),
                B
            }
            ,
            v.prototype._handle_inside_tag = function(g, m, w, B) {
                var R = w.has_wrapped_attrs
                  , N = {
                    text: m.text,
                    type: m.type
                };
                if (g.set_space_before_token(m.newlines || m.whitespace_before !== "", !0),
                w.is_unformatted)
                    g.add_raw_token(m);
                else if (w.tag_start_char === "{" && m.type === h.TEXT)
                    g.print_preserved_newlines(m) ? (m.newlines = 0,
                    g.add_raw_token(m)) : g.print_token(m);
                else {
                    if (m.type === h.ATTRIBUTE ? (g.set_space_before_token(!0),
                    w.attr_count += 1) : (m.type === h.EQUALS || m.type === h.VALUE && m.previous.type === h.EQUALS) && g.set_space_before_token(!1),
                    m.type === h.ATTRIBUTE && w.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (g.traverse_whitespace(m),
                    R = R || m.newlines !== 0),
                    this._is_wrap_attributes_force)) {
                        var I = w.attr_count > 1;
                        if (this._is_wrap_attributes_force_expand_multiline && w.attr_count === 1) {
                            var P = !0, W = 0, L;
                            do {
                                if (L = B.peek(W),
                                L.type === h.ATTRIBUTE) {
                                    P = !1;
                                    break
                                }
                                W += 1
                            } while (W < 4 && L.type !== h.EOF && L.type !== h.TAG_CLOSE);
                            I = !P
                        }
                        I && (g.print_newline(!1),
                        R = !0)
                    }
                    g.print_token(m),
                    R = R || g.previous_token_wrapped(),
                    w.has_wrapped_attrs = R
                }
                return N
            }
            ,
            v.prototype._handle_text = function(g, m, w) {
                var B = {
                    text: m.text,
                    type: "TK_CONTENT"
                };
                return w.custom_beautifier_name ? this._print_custom_beatifier_text(g, m, w) : w.is_unformatted || w.is_content_unformatted ? g.add_raw_token(m) : (g.traverse_whitespace(m),
                g.print_token(m)),
                B
            }
            ,
            v.prototype._print_custom_beatifier_text = function(g, m, w) {
                var B = this;
                if (m.text !== "") {
                    var R = m.text, N, I = 1, P = "", W = "";
                    w.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? N = this._js_beautify : w.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? N = this._css_beautify : w.custom_beautifier_name === "html" && (N = function(x, E) {
                        var z = new v(x,E,B._js_beautify,B._css_beautify);
                        return z.beautify()
                    }
                    ),
                    this._options.indent_scripts === "keep" ? I = 0 : this._options.indent_scripts === "separate" && (I = -g.indent_level);
                    var L = g.get_full_indent(I);
                    if (R = R.replace(/\n[ \t]*$/, ""),
                    w.custom_beautifier_name !== "html" && R[0] === "<" && R.match(/^(<!--|<!\[CDATA\[)/)) {
                        var y = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(R);
                        if (!y) {
                            g.add_raw_token(m);
                            return
                        }
                        P = L + y[1] + `
`,
                        R = y[4],
                        y[5] && (W = L + y[5]),
                        R = R.replace(/\n[ \t]*$/, ""),
                        (y[2] || y[3].indexOf(`
`) !== -1) && (y = y[3].match(/[ \t]+$/),
                        y && (m.whitespace_before = y[0]))
                    }
                    if (R)
                        if (N) {
                            var C = function() {
                                this.eol = `
`
                            };
                            C.prototype = this._options.raw_options;
                            var U = new C;
                            R = N(L + R, U)
                        } else {
                            var q = m.whitespace_before;
                            q && (R = R.replace(new RegExp(`
(` + q + ")?","g"), `
`)),
                            R = L + R.replace(/\n/g, `
` + L)
                        }
                    P && (R ? R = P + R + `
` + W : R = P + W),
                    g.print_newline(!1),
                    R && (m.text = R,
                    m.whitespace_before = "",
                    m.newlines = 0,
                    g.add_raw_token(m),
                    g.print_newline(!0))
                }
            }
            ,
            v.prototype._handle_tag_open = function(g, m, w, B) {
                var R = this._get_tag_open_token(m);
                return (w.is_unformatted || w.is_content_unformatted) && !w.is_empty_element && m.type === h.TAG_OPEN && m.text.indexOf("</") === 0 ? (g.add_raw_token(m),
                R.start_tag_token = this._tag_stack.try_pop(R.tag_name)) : (g.traverse_whitespace(m),
                this._set_tag_position(g, m, R, w, B),
                R.is_inline_element || g.set_wrap_point(),
                g.print_token(m)),
                (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (R.alignment_size = m.text.length + 1),
                !R.tag_complete && !R.is_unformatted && (g.alignment_size = R.alignment_size),
                R
            }
            ;
            var A = function(g, m) {
                if (this.parent = g || null,
                this.text = "",
                this.type = "TK_TAG_OPEN",
                this.tag_name = "",
                this.is_inline_element = !1,
                this.is_unformatted = !1,
                this.is_content_unformatted = !1,
                this.is_empty_element = !1,
                this.is_start_tag = !1,
                this.is_end_tag = !1,
                this.indent_content = !1,
                this.multiline_content = !1,
                this.custom_beautifier_name = null,
                this.start_tag_token = null,
                this.attr_count = 0,
                this.has_wrapped_attrs = !1,
                this.alignment_size = 0,
                this.tag_complete = !1,
                this.tag_start_char = "",
                this.tag_check = "",
                !m)
                    this.tag_complete = !0;
                else {
                    var w;
                    this.tag_start_char = m.text[0],
                    this.text = m.text,
                    this.tag_start_char === "<" ? (w = m.text.match(/^<([^\s>]*)/),
                    this.tag_check = w ? w[1] : "") : (w = m.text.match(/^{{(?:[\^]|#\*?)?([^\s}]+)/),
                    this.tag_check = w ? w[1] : "",
                    m.text === "{{#>" && this.tag_check === ">" && m.next !== null && (this.tag_check = m.next.text)),
                    this.tag_check = this.tag_check.toLowerCase(),
                    m.type === h.COMMENT && (this.tag_complete = !0),
                    this.is_start_tag = this.tag_check.charAt(0) !== "/",
                    this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1),
                    this.is_end_tag = !this.is_start_tag || m.closed && m.closed.text === "/>",
                    this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(2)))
                }
            };
            v.prototype._get_tag_open_token = function(g) {
                var m = new A(this._tag_stack.get_parser_token(),g);
                return m.alignment_size = this._options.wrap_attributes_indent_size,
                m.is_end_tag = m.is_end_tag || T(m.tag_check, this._options.void_elements),
                m.is_empty_element = m.tag_complete || m.is_start_tag && m.is_end_tag,
                m.is_unformatted = !m.tag_complete && T(m.tag_check, this._options.unformatted),
                m.is_content_unformatted = !m.is_empty_element && T(m.tag_check, this._options.content_unformatted),
                m.is_inline_element = T(m.tag_name, this._options.inline) || m.tag_start_char === "{",
                m
            }
            ,
            v.prototype._set_tag_position = function(g, m, w, B, R) {
                if (w.is_empty_element || (w.is_end_tag ? w.start_tag_token = this._tag_stack.try_pop(w.tag_name) : (this._do_optional_end_element(w) && (w.is_inline_element || g.print_newline(!1)),
                this._tag_stack.record_tag(w),
                (w.tag_name === "script" || w.tag_name === "style") && !(w.is_unformatted || w.is_content_unformatted) && (w.custom_beautifier_name = b(w.tag_check, m)))),
                T(w.tag_check, this._options.extra_liners) && (g.print_newline(!1),
                g._output.just_added_blankline() || g.print_newline(!0)),
                w.is_empty_element) {
                    if (w.tag_start_char === "{" && w.tag_check === "else") {
                        this._tag_stack.indent_to_tag(["if", "unless", "each"]),
                        w.indent_content = !0;
                        var N = g.current_line_has_match(/{{#if/);
                        N || g.print_newline(!1)
                    }
                    w.tag_name === "!--" && R.type === h.TAG_CLOSE && B.is_end_tag && w.text.indexOf(`
`) === -1 || (w.is_inline_element || w.is_unformatted || g.print_newline(!1),
                    this._calcluate_parent_multiline(g, w))
                } else if (w.is_end_tag) {
                    var I = !1;
                    I = w.start_tag_token && w.start_tag_token.multiline_content,
                    I = I || !w.is_inline_element && !(B.is_inline_element || B.is_unformatted) && !(R.type === h.TAG_CLOSE && w.start_tag_token === B) && R.type !== "TK_CONTENT",
                    (w.is_content_unformatted || w.is_unformatted) && (I = !1),
                    I && g.print_newline(!1)
                } else
                    w.indent_content = !w.custom_beautifier_name,
                    w.tag_start_char === "<" && (w.tag_name === "html" ? w.indent_content = this._options.indent_inner_html : w.tag_name === "head" ? w.indent_content = this._options.indent_head_inner_html : w.tag_name === "body" && (w.indent_content = this._options.indent_body_inner_html)),
                    !(w.is_inline_element || w.is_unformatted) && (R.type !== "TK_CONTENT" || w.is_content_unformatted) && g.print_newline(!1),
                    this._calcluate_parent_multiline(g, w)
            }
            ,
            v.prototype._calcluate_parent_multiline = function(g, m) {
                m.parent && g._output.just_added_newline() && !((m.is_inline_element || m.is_unformatted) && m.parent.is_inline_element) && (m.parent.multiline_content = !0)
            }
            ;
            var D = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"]
              , H = ["a", "audio", "del", "ins", "map", "noscript", "video"];
            v.prototype._do_optional_end_element = function(g) {
                var m = null;
                if (!(g.is_empty_element || !g.is_start_tag || !g.parent)) {
                    if (g.tag_name === "body")
                        m = m || this._tag_stack.try_pop("head");
                    else if (g.tag_name === "li")
                        m = m || this._tag_stack.try_pop("li", ["ol", "ul"]);
                    else if (g.tag_name === "dd" || g.tag_name === "dt")
                        m = m || this._tag_stack.try_pop("dt", ["dl"]),
                        m = m || this._tag_stack.try_pop("dd", ["dl"]);
                    else if (g.parent.tag_name === "p" && D.indexOf(g.tag_name) !== -1) {
                        var w = g.parent.parent;
                        (!w || H.indexOf(w.tag_name) === -1) && (m = m || this._tag_stack.try_pop("p"))
                    } else
                        g.tag_name === "rp" || g.tag_name === "rt" ? (m = m || this._tag_stack.try_pop("rt", ["ruby", "rtc"]),
                        m = m || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : g.tag_name === "optgroup" ? m = m || this._tag_stack.try_pop("optgroup", ["select"]) : g.tag_name === "option" ? m = m || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : g.tag_name === "colgroup" ? m = m || this._tag_stack.try_pop("caption", ["table"]) : g.tag_name === "thead" ? (m = m || this._tag_stack.try_pop("caption", ["table"]),
                        m = m || this._tag_stack.try_pop("colgroup", ["table"])) : g.tag_name === "tbody" || g.tag_name === "tfoot" ? (m = m || this._tag_stack.try_pop("caption", ["table"]),
                        m = m || this._tag_stack.try_pop("colgroup", ["table"]),
                        m = m || this._tag_stack.try_pop("thead", ["table"]),
                        m = m || this._tag_stack.try_pop("tbody", ["table"])) : g.tag_name === "tr" ? (m = m || this._tag_stack.try_pop("caption", ["table"]),
                        m = m || this._tag_stack.try_pop("colgroup", ["table"]),
                        m = m || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (g.tag_name === "th" || g.tag_name === "td") && (m = m || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]),
                        m = m || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
                    return g.parent = this._tag_stack.get_parser_token(),
                    m
                }
            }
            ,
            i.exports.Beautifier = v
        }
        , function(i, a, o) {
            var u = o(6).Options;
            function s(l) {
                u.call(this, l, "html"),
                this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]),
                this.indent_inner_html = this._get_boolean("indent_inner_html"),
                this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0),
                this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0),
                this.indent_handlebars = this._get_boolean("indent_handlebars", !0),
                this.wrap_attributes = this._get_selection("wrap_attributes", ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]),
                this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size),
                this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]),
                this.inline = this._get_array("inline", ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "big", "strike", "tt"]),
                this.void_elements = this._get_array("void_elements", ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "basefont", "isindex"]),
                this.unformatted = this._get_array("unformatted", []),
                this.content_unformatted = this._get_array("content_unformatted", ["pre", "textarea"]),
                this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"),
                this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"])
            }
            s.prototype = new u,
            i.exports.Options = s
        }
        , function(i, a, o) {
            var u = o(9).Tokenizer
              , s = o(9).TOKEN
              , l = o(13).Directives
              , h = o(14).TemplatablePattern
              , c = o(12).Pattern
              , d = {
                TAG_OPEN: "TK_TAG_OPEN",
                TAG_CLOSE: "TK_TAG_CLOSE",
                ATTRIBUTE: "TK_ATTRIBUTE",
                EQUALS: "TK_EQUALS",
                VALUE: "TK_VALUE",
                COMMENT: "TK_COMMENT",
                TEXT: "TK_TEXT",
                UNKNOWN: "TK_UNKNOWN",
                START: s.START,
                RAW: s.RAW,
                EOF: s.EOF
            }
              , p = new l(/<\!--/,/-->/)
              , _ = function(b, T) {
                u.call(this, b, T),
                this._current_tag_name = "";
                var k = new h(this._input).read_options(this._options)
                  , f = new c(this._input);
                if (this.__patterns = {
                    word: k.until(/[\n\r\t <]/),
                    single_quote: k.until_after(/'/),
                    double_quote: k.until_after(/"/),
                    attribute: k.until(/[\n\r\t =>]|\/>/),
                    element_name: k.until(/[\n\r\t >\/]/),
                    handlebars_comment: f.starting_with(/{{!--/).until_after(/--}}/),
                    handlebars: f.starting_with(/{{/).until_after(/}}/),
                    handlebars_open: f.until(/[\n\r\t }]/),
                    handlebars_raw_close: f.until(/}}/),
                    comment: f.starting_with(/<!--/).until_after(/-->/),
                    cdata: f.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
                    conditional_comment: f.starting_with(/<!\[/).until_after(/]>/),
                    processing: f.starting_with(/<\?/).until_after(/\?>/)
                },
                this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars")),
                this._unformatted_content_delimiter = null,
                this._options.unformatted_content_delimiter) {
                    var v = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
                    this.__patterns.unformatted_content_delimiter = f.matching(v).until_after(v)
                }
            };
            _.prototype = new u,
            _.prototype._is_comment = function(b) {
                return !1
            }
            ,
            _.prototype._is_opening = function(b) {
                return b.type === d.TAG_OPEN
            }
            ,
            _.prototype._is_closing = function(b, T) {
                return b.type === d.TAG_CLOSE && T && ((b.text === ">" || b.text === "/>") && T.text[0] === "<" || b.text === "}}" && T.text[0] === "{" && T.text[1] === "{")
            }
            ,
            _.prototype._reset = function() {
                this._current_tag_name = ""
            }
            ,
            _.prototype._get_next_token = function(b, T) {
                var k = null;
                this._readWhitespace();
                var f = this._input.peek();
                return f === null ? this._create_token(d.EOF, "") : (k = k || this._read_open_handlebars(f, T),
                k = k || this._read_attribute(f, b, T),
                k = k || this._read_close(f, T),
                k = k || this._read_raw_content(f, b, T),
                k = k || this._read_content_word(f),
                k = k || this._read_comment_or_cdata(f),
                k = k || this._read_processing(f),
                k = k || this._read_open(f, T),
                k = k || this._create_token(d.UNKNOWN, this._input.next()),
                k)
            }
            ,
            _.prototype._read_comment_or_cdata = function(b) {
                var T = null
                  , k = null
                  , f = null;
                if (b === "<") {
                    var v = this._input.peek(1);
                    v === "!" && (k = this.__patterns.comment.read(),
                    k ? (f = p.get_directives(k),
                    f && f.ignore === "start" && (k += p.readIgnored(this._input))) : k = this.__patterns.cdata.read()),
                    k && (T = this._create_token(d.COMMENT, k),
                    T.directives = f)
                }
                return T
            }
            ,
            _.prototype._read_processing = function(b) {
                var T = null
                  , k = null
                  , f = null;
                if (b === "<") {
                    var v = this._input.peek(1);
                    (v === "!" || v === "?") && (k = this.__patterns.conditional_comment.read(),
                    k = k || this.__patterns.processing.read()),
                    k && (T = this._create_token(d.COMMENT, k),
                    T.directives = f)
                }
                return T
            }
            ,
            _.prototype._read_open = function(b, T) {
                var k = null
                  , f = null;
                return T || b === "<" && (k = this._input.next(),
                this._input.peek() === "/" && (k += this._input.next()),
                k += this.__patterns.element_name.read(),
                f = this._create_token(d.TAG_OPEN, k)),
                f
            }
            ,
            _.prototype._read_open_handlebars = function(b, T) {
                var k = null
                  , f = null;
                return T || this._options.indent_handlebars && b === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (k = this.__patterns.handlebars_comment.read(),
                k = k || this.__patterns.handlebars.read(),
                f = this._create_token(d.COMMENT, k)) : (k = this.__patterns.handlebars_open.read(),
                f = this._create_token(d.TAG_OPEN, k))),
                f
            }
            ,
            _.prototype._read_close = function(b, T) {
                var k = null
                  , f = null;
                return T && (T.text[0] === "<" && (b === ">" || b === "/" && this._input.peek(1) === ">") ? (k = this._input.next(),
                b === "/" && (k += this._input.next()),
                f = this._create_token(d.TAG_CLOSE, k)) : T.text[0] === "{" && b === "}" && this._input.peek(1) === "}" && (this._input.next(),
                this._input.next(),
                f = this._create_token(d.TAG_CLOSE, "}}"))),
                f
            }
            ,
            _.prototype._read_attribute = function(b, T, k) {
                var f = null
                  , v = "";
                if (k && k.text[0] === "<")
                    if (b === "=")
                        f = this._create_token(d.EQUALS, this._input.next());
                    else if (b === '"' || b === "'") {
                        var A = this._input.next();
                        b === '"' ? A += this.__patterns.double_quote.read() : A += this.__patterns.single_quote.read(),
                        f = this._create_token(d.VALUE, A)
                    } else
                        v = this.__patterns.attribute.read(),
                        v && (T.type === d.EQUALS ? f = this._create_token(d.VALUE, v) : f = this._create_token(d.ATTRIBUTE, v));
                return f
            }
            ,
            _.prototype._is_content_unformatted = function(b) {
                return this._options.void_elements.indexOf(b) === -1 && (this._options.content_unformatted.indexOf(b) !== -1 || this._options.unformatted.indexOf(b) !== -1)
            }
            ,
            _.prototype._read_raw_content = function(b, T, k) {
                var f = "";
                if (k && k.text[0] === "{")
                    f = this.__patterns.handlebars_raw_close.read();
                else if (T.type === d.TAG_CLOSE && T.opened.text[0] === "<" && T.text[0] !== "/") {
                    var v = T.opened.text.substr(1).toLowerCase();
                    if (v === "script" || v === "style") {
                        var A = this._read_comment_or_cdata(b);
                        if (A)
                            return A.type = d.TEXT,
                            A;
                        f = this._input.readUntil(new RegExp("</" + v + "[\\n\\r\\t ]*?>","ig"))
                    } else
                        this._is_content_unformatted(v) && (f = this._input.readUntil(new RegExp("</" + v + "[\\n\\r\\t ]*?>","ig")))
                }
                return f ? this._create_token(d.TEXT, f) : null
            }
            ,
            _.prototype._read_content_word = function(b) {
                var T = "";
                if (this._options.unformatted_content_delimiter && b === this._options.unformatted_content_delimiter[0] && (T = this.__patterns.unformatted_content_delimiter.read()),
                T || (T = this.__patterns.word.read()),
                T)
                    return this._create_token(d.TEXT, T)
            }
            ,
            i.exports.Tokenizer = _,
            i.exports.TOKEN = d
        }
        ]
          , t = {};
        function n(i) {
            var a = t[i];
            if (a !== void 0)
                return a.exports;
            var o = t[i] = {
                exports: {}
            };
            return e[i](o, o.exports, n),
            o.exports
        }
        var r = n(18);
        cr = r
    }
    )();
    function bs(e, t) {
        return cr(e, t, ps, gs)
    }
    function _s(e, t, n) {
        var r = e.getText()
          , i = !0
          , a = 0
          , o = n.tabSize || 4;
        if (t) {
            for (var u = e.offsetAt(t.start), s = u; s > 0 && mr(r, s - 1); )
                s--;
            s === 0 || dr(r, s - 1) ? u = s : s < u && (u = s + 1);
            for (var l = e.offsetAt(t.end), h = l; h < r.length && mr(r, h); )
                h++;
            (h === r.length || dr(r, h)) && (l = h),
            t = G.create(e.positionAt(u), e.positionAt(l));
            var c = r.substring(0, u);
            if (new RegExp(/.*[<][^>]*$/).test(c))
                return r = r.substring(u, l),
                [{
                    range: t,
                    newText: r
                }];
            if (i = l === r.length,
            r = r.substring(u, l),
            u !== 0) {
                var d = e.offsetAt(ne.create(t.start.line, 0));
                a = ys(e.getText(), d, n)
            }
        } else
            t = G.create(ne.create(0, 0), e.positionAt(r.length));
        var p = {
            indent_size: o,
            indent_char: n.insertSpaces ? " " : "	",
            indent_empty_lines: ce(n, "indentEmptyLines", !1),
            wrap_line_length: ce(n, "wrapLineLength", 120),
            unformatted: mn(n, "unformatted", void 0),
            content_unformatted: mn(n, "contentUnformatted", void 0),
            indent_inner_html: ce(n, "indentInnerHtml", !1),
            preserve_newlines: ce(n, "preserveNewLines", !0),
            max_preserve_newlines: ce(n, "maxPreserveNewLines", 32786),
            indent_handlebars: ce(n, "indentHandlebars", !1),
            end_with_newline: i && ce(n, "endWithNewline", !1),
            extra_liners: mn(n, "extraLiners", void 0),
            wrap_attributes: ce(n, "wrapAttributes", "auto"),
            wrap_attributes_indent_size: ce(n, "wrapAttributesIndentSize", void 0),
            eol: `
`,
            indent_scripts: ce(n, "indentScripts", "normal"),
            templating: ws(n, "all"),
            unformatted_content_delimiter: ce(n, "unformattedContentDelimiter", "")
        }
          , _ = bs(vs(r), p);
        if (a > 0) {
            var b = n.insertSpaces ? ar(" ", o * a) : ar("	", a);
            _ = _.split(`
`).join(`
` + b),
            t.start.character === 0 && (_ = b + _)
        }
        return [{
            range: t,
            newText: _
        }]
    }
    function vs(e) {
        return e.replace(/^\s+/, "")
    }
    function ce(e, t, n) {
        if (e && e.hasOwnProperty(t)) {
            var r = e[t];
            if (r !== null)
                return r
        }
        return n
    }
    function mn(e, t, n) {
        var r = ce(e, t, null);
        return typeof r == "string" ? r.length > 0 ? r.split(",").map(function(i) {
            return i.trim().toLowerCase()
        }) : [] : n
    }
    function ws(e, t) {
        var n = ce(e, "templating", t);
        return n === !0 ? ["auto"] : ["none"]
    }
    function ys(e, t, n) {
        for (var r = t, i = 0, a = n.tabSize || 4; r < e.length; ) {
            var o = e.charAt(r);
            if (o === " ")
                i++;
            else if (o === "	")
                i += a;
            else
                break;
            r++
        }
        return Math.floor(i / a)
    }
    function dr(e, t) {
        return `\r
`.indexOf(e.charAt(t)) !== -1
    }
    function mr(e, t) {
        return " 	".indexOf(e.charAt(t)) !== -1
    }
    var fr;
    fr = ( () => {
        var e = {
            470: r => {
                function i(u) {
                    if (typeof u != "string")
                        throw new TypeError("Path must be a string. Received " + JSON.stringify(u))
                }
                function a(u, s) {
                    for (var l, h = "", c = 0, d = -1, p = 0, _ = 0; _ <= u.length; ++_) {
                        if (_ < u.length)
                            l = u.charCodeAt(_);
                        else {
                            if (l === 47)
                                break;
                            l = 47
                        }
                        if (l === 47) {
                            if (!(d === _ - 1 || p === 1))
                                if (d !== _ - 1 && p === 2) {
                                    if (h.length < 2 || c !== 2 || h.charCodeAt(h.length - 1) !== 46 || h.charCodeAt(h.length - 2) !== 46) {
                                        if (h.length > 2) {
                                            var b = h.lastIndexOf("/");
                                            if (b !== h.length - 1) {
                                                b === -1 ? (h = "",
                                                c = 0) : c = (h = h.slice(0, b)).length - 1 - h.lastIndexOf("/"),
                                                d = _,
                                                p = 0;
                                                continue
                                            }
                                        } else if (h.length === 2 || h.length === 1) {
                                            h = "",
                                            c = 0,
                                            d = _,
                                            p = 0;
                                            continue
                                        }
                                    }
                                    s && (h.length > 0 ? h += "/.." : h = "..",
                                    c = 2)
                                } else
                                    h.length > 0 ? h += "/" + u.slice(d + 1, _) : h = u.slice(d + 1, _),
                                    c = _ - d - 1;
                            d = _,
                            p = 0
                        } else
                            l === 46 && p !== -1 ? ++p : p = -1
                    }
                    return h
                }
                var o = {
                    resolve: function() {
                        for (var u, s = "", l = !1, h = arguments.length - 1; h >= -1 && !l; h--) {
                            var c;
                            h >= 0 ? c = arguments[h] : (u === void 0 && (u = process.cwd()),
                            c = u),
                            i(c),
                            c.length !== 0 && (s = c + "/" + s,
                            l = c.charCodeAt(0) === 47)
                        }
                        return s = a(s, !l),
                        l ? s.length > 0 ? "/" + s : "/" : s.length > 0 ? s : "."
                    },
                    normalize: function(u) {
                        if (i(u),
                        u.length === 0)
                            return ".";
                        var s = u.charCodeAt(0) === 47
                          , l = u.charCodeAt(u.length - 1) === 47;
                        return (u = a(u, !s)).length !== 0 || s || (u = "."),
                        u.length > 0 && l && (u += "/"),
                        s ? "/" + u : u
                    },
                    isAbsolute: function(u) {
                        return i(u),
                        u.length > 0 && u.charCodeAt(0) === 47
                    },
                    join: function() {
                        if (arguments.length === 0)
                            return ".";
                        for (var u, s = 0; s < arguments.length; ++s) {
                            var l = arguments[s];
                            i(l),
                            l.length > 0 && (u === void 0 ? u = l : u += "/" + l)
                        }
                        return u === void 0 ? "." : o.normalize(u)
                    },
                    relative: function(u, s) {
                        if (i(u),
                        i(s),
                        u === s || (u = o.resolve(u)) === (s = o.resolve(s)))
                            return "";
                        for (var l = 1; l < u.length && u.charCodeAt(l) === 47; ++l)
                            ;
                        for (var h = u.length, c = h - l, d = 1; d < s.length && s.charCodeAt(d) === 47; ++d)
                            ;
                        for (var p = s.length - d, _ = c < p ? c : p, b = -1, T = 0; T <= _; ++T) {
                            if (T === _) {
                                if (p > _) {
                                    if (s.charCodeAt(d + T) === 47)
                                        return s.slice(d + T + 1);
                                    if (T === 0)
                                        return s.slice(d + T)
                                } else
                                    c > _ && (u.charCodeAt(l + T) === 47 ? b = T : T === 0 && (b = 0));
                                break
                            }
                            var k = u.charCodeAt(l + T);
                            if (k !== s.charCodeAt(d + T))
                                break;
                            k === 47 && (b = T)
                        }
                        var f = "";
                        for (T = l + b + 1; T <= h; ++T)
                            T !== h && u.charCodeAt(T) !== 47 || (f.length === 0 ? f += ".." : f += "/..");
                        return f.length > 0 ? f + s.slice(d + b) : (d += b,
                        s.charCodeAt(d) === 47 && ++d,
                        s.slice(d))
                    },
                    _makeLong: function(u) {
                        return u
                    },
                    dirname: function(u) {
                        if (i(u),
                        u.length === 0)
                            return ".";
                        for (var s = u.charCodeAt(0), l = s === 47, h = -1, c = !0, d = u.length - 1; d >= 1; --d)
                            if ((s = u.charCodeAt(d)) === 47) {
                                if (!c) {
                                    h = d;
                                    break
                                }
                            } else
                                c = !1;
                        return h === -1 ? l ? "/" : "." : l && h === 1 ? "//" : u.slice(0, h)
                    },
                    basename: function(u, s) {
                        if (s !== void 0 && typeof s != "string")
                            throw new TypeError('"ext" argument must be a string');
                        i(u);
                        var l, h = 0, c = -1, d = !0;
                        if (s !== void 0 && s.length > 0 && s.length <= u.length) {
                            if (s.length === u.length && s === u)
                                return "";
                            var p = s.length - 1
                              , _ = -1;
                            for (l = u.length - 1; l >= 0; --l) {
                                var b = u.charCodeAt(l);
                                if (b === 47) {
                                    if (!d) {
                                        h = l + 1;
                                        break
                                    }
                                } else
                                    _ === -1 && (d = !1,
                                    _ = l + 1),
                                    p >= 0 && (b === s.charCodeAt(p) ? --p == -1 && (c = l) : (p = -1,
                                    c = _))
                            }
                            return h === c ? c = _ : c === -1 && (c = u.length),
                            u.slice(h, c)
                        }
                        for (l = u.length - 1; l >= 0; --l)
                            if (u.charCodeAt(l) === 47) {
                                if (!d) {
                                    h = l + 1;
                                    break
                                }
                            } else
                                c === -1 && (d = !1,
                                c = l + 1);
                        return c === -1 ? "" : u.slice(h, c)
                    },
                    extname: function(u) {
                        i(u);
                        for (var s = -1, l = 0, h = -1, c = !0, d = 0, p = u.length - 1; p >= 0; --p) {
                            var _ = u.charCodeAt(p);
                            if (_ !== 47)
                                h === -1 && (c = !1,
                                h = p + 1),
                                _ === 46 ? s === -1 ? s = p : d !== 1 && (d = 1) : s !== -1 && (d = -1);
                            else if (!c) {
                                l = p + 1;
                                break
                            }
                        }
                        return s === -1 || h === -1 || d === 0 || d === 1 && s === h - 1 && s === l + 1 ? "" : u.slice(s, h)
                    },
                    format: function(u) {
                        if (u === null || typeof u != "object")
                            throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof u);
                        return function(s, l) {
                            var h = l.dir || l.root
                              , c = l.base || (l.name || "") + (l.ext || "");
                            return h ? h === l.root ? h + c : h + "/" + c : c
                        }(0, u)
                    },
                    parse: function(u) {
                        i(u);
                        var s = {
                            root: "",
                            dir: "",
                            base: "",
                            ext: "",
                            name: ""
                        };
                        if (u.length === 0)
                            return s;
                        var l, h = u.charCodeAt(0), c = h === 47;
                        c ? (s.root = "/",
                        l = 1) : l = 0;
                        for (var d = -1, p = 0, _ = -1, b = !0, T = u.length - 1, k = 0; T >= l; --T)
                            if ((h = u.charCodeAt(T)) !== 47)
                                _ === -1 && (b = !1,
                                _ = T + 1),
                                h === 46 ? d === -1 ? d = T : k !== 1 && (k = 1) : d !== -1 && (k = -1);
                            else if (!b) {
                                p = T + 1;
                                break
                            }
                        return d === -1 || _ === -1 || k === 0 || k === 1 && d === _ - 1 && d === p + 1 ? _ !== -1 && (s.base = s.name = p === 0 && c ? u.slice(1, _) : u.slice(p, _)) : (p === 0 && c ? (s.name = u.slice(1, d),
                        s.base = u.slice(1, _)) : (s.name = u.slice(p, d),
                        s.base = u.slice(p, _)),
                        s.ext = u.slice(d, _)),
                        p > 0 ? s.dir = u.slice(0, p - 1) : c && (s.dir = "/"),
                        s
                    },
                    sep: "/",
                    delimiter: ":",
                    win32: null,
                    posix: null
                };
                o.posix = o,
                r.exports = o
            }
            ,
            447: (r, i, a) => {
                var o;
                if (a.r(i),
                a.d(i, {
                    URI: () => k,
                    Utils: () => N
                }),
                typeof process == "object")
                    o = process.platform === "win32";
                else if (typeof navigator == "object") {
                    var u = navigator.userAgent;
                    o = u.indexOf("Windows") >= 0
                }
                var s, l, h = (s = function(L, y) {
                    return (s = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(C, U) {
                        C.__proto__ = U
                    }
                    || function(C, U) {
                        for (var q in U)
                            Object.prototype.hasOwnProperty.call(U, q) && (C[q] = U[q])
                    }
                    )(L, y)
                }
                ,
                function(L, y) {
                    function C() {
                        this.constructor = L
                    }
                    s(L, y),
                    L.prototype = y === null ? Object.create(y) : (C.prototype = y.prototype,
                    new C)
                }
                ), c = /^\w[\w\d+.-]*$/, d = /^\//, p = /^\/\//, _ = "", b = "/", T = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, k = function() {
                    function L(y, C, U, q, x, E) {
                        E === void 0 && (E = !1),
                        typeof y == "object" ? (this.scheme = y.scheme || _,
                        this.authority = y.authority || _,
                        this.path = y.path || _,
                        this.query = y.query || _,
                        this.fragment = y.fragment || _) : (this.scheme = function(z, j) {
                            return z || j ? z : "file"
                        }(y, E),
                        this.authority = C || _,
                        this.path = function(z, j) {
                            switch (z) {
                            case "https":
                            case "http":
                            case "file":
                                j ? j[0] !== b && (j = b + j) : j = b
                            }
                            return j
                        }(this.scheme, U || _),
                        this.query = q || _,
                        this.fragment = x || _,
                        function(z, j) {
                            if (!z.scheme && j)
                                throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "' + z.authority + '", path: "' + z.path + '", query: "' + z.query + '", fragment: "' + z.fragment + '"}');
                            if (z.scheme && !c.test(z.scheme))
                                throw new Error("[UriError]: Scheme contains illegal characters.");
                            if (z.path) {
                                if (z.authority) {
                                    if (!d.test(z.path))
                                        throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
                                } else if (p.test(z.path))
                                    throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
                            }
                        }(this, E))
                    }
                    return L.isUri = function(y) {
                        return y instanceof L || !!y && typeof y.authority == "string" && typeof y.fragment == "string" && typeof y.path == "string" && typeof y.query == "string" && typeof y.scheme == "string" && typeof y.fsPath == "function" && typeof y.with == "function" && typeof y.toString == "function"
                    }
                    ,
                    Object.defineProperty(L.prototype, "fsPath", {
                        get: function() {
                            return g(this, !1)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    L.prototype.with = function(y) {
                        if (!y)
                            return this;
                        var C = y.scheme
                          , U = y.authority
                          , q = y.path
                          , x = y.query
                          , E = y.fragment;
                        return C === void 0 ? C = this.scheme : C === null && (C = _),
                        U === void 0 ? U = this.authority : U === null && (U = _),
                        q === void 0 ? q = this.path : q === null && (q = _),
                        x === void 0 ? x = this.query : x === null && (x = _),
                        E === void 0 ? E = this.fragment : E === null && (E = _),
                        C === this.scheme && U === this.authority && q === this.path && x === this.query && E === this.fragment ? this : new v(C,U,q,x,E)
                    }
                    ,
                    L.parse = function(y, C) {
                        C === void 0 && (C = !1);
                        var U = T.exec(y);
                        return U ? new v(U[2] || _,R(U[4] || _),R(U[5] || _),R(U[7] || _),R(U[9] || _),C) : new v(_,_,_,_,_)
                    }
                    ,
                    L.file = function(y) {
                        var C = _;
                        if (o && (y = y.replace(/\\/g, b)),
                        y[0] === b && y[1] === b) {
                            var U = y.indexOf(b, 2);
                            U === -1 ? (C = y.substring(2),
                            y = b) : (C = y.substring(2, U),
                            y = y.substring(U) || b)
                        }
                        return new v("file",C,y,_,_)
                    }
                    ,
                    L.from = function(y) {
                        return new v(y.scheme,y.authority,y.path,y.query,y.fragment)
                    }
                    ,
                    L.prototype.toString = function(y) {
                        return y === void 0 && (y = !1),
                        m(this, y)
                    }
                    ,
                    L.prototype.toJSON = function() {
                        return this
                    }
                    ,
                    L.revive = function(y) {
                        if (y) {
                            if (y instanceof L)
                                return y;
                            var C = new v(y);
                            return C._formatted = y.external,
                            C._fsPath = y._sep === f ? y.fsPath : null,
                            C
                        }
                        return y
                    }
                    ,
                    L
                }(), f = o ? 1 : void 0, v = function(L) {
                    function y() {
                        var C = L !== null && L.apply(this, arguments) || this;
                        return C._formatted = null,
                        C._fsPath = null,
                        C
                    }
                    return h(y, L),
                    Object.defineProperty(y.prototype, "fsPath", {
                        get: function() {
                            return this._fsPath || (this._fsPath = g(this, !1)),
                            this._fsPath
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    y.prototype.toString = function(C) {
                        return C === void 0 && (C = !1),
                        C ? m(this, !0) : (this._formatted || (this._formatted = m(this, !1)),
                        this._formatted)
                    }
                    ,
                    y.prototype.toJSON = function() {
                        var C = {
                            $mid: 1
                        };
                        return this._fsPath && (C.fsPath = this._fsPath,
                        C._sep = f),
                        this._formatted && (C.external = this._formatted),
                        this.path && (C.path = this.path),
                        this.scheme && (C.scheme = this.scheme),
                        this.authority && (C.authority = this.authority),
                        this.query && (C.query = this.query),
                        this.fragment && (C.fragment = this.fragment),
                        C
                    }
                    ,
                    y
                }(k), A = ((l = {})[58] = "%3A",
                l[47] = "%2F",
                l[63] = "%3F",
                l[35] = "%23",
                l[91] = "%5B",
                l[93] = "%5D",
                l[64] = "%40",
                l[33] = "%21",
                l[36] = "%24",
                l[38] = "%26",
                l[39] = "%27",
                l[40] = "%28",
                l[41] = "%29",
                l[42] = "%2A",
                l[43] = "%2B",
                l[44] = "%2C",
                l[59] = "%3B",
                l[61] = "%3D",
                l[32] = "%20",
                l);
                function D(L, y) {
                    for (var C = void 0, U = -1, q = 0; q < L.length; q++) {
                        var x = L.charCodeAt(q);
                        if (x >= 97 && x <= 122 || x >= 65 && x <= 90 || x >= 48 && x <= 57 || x === 45 || x === 46 || x === 95 || x === 126 || y && x === 47)
                            U !== -1 && (C += encodeURIComponent(L.substring(U, q)),
                            U = -1),
                            C !== void 0 && (C += L.charAt(q));
                        else {
                            C === void 0 && (C = L.substr(0, q));
                            var E = A[x];
                            E !== void 0 ? (U !== -1 && (C += encodeURIComponent(L.substring(U, q)),
                            U = -1),
                            C += E) : U === -1 && (U = q)
                        }
                    }
                    return U !== -1 && (C += encodeURIComponent(L.substring(U))),
                    C !== void 0 ? C : L
                }
                function H(L) {
                    for (var y = void 0, C = 0; C < L.length; C++) {
                        var U = L.charCodeAt(C);
                        U === 35 || U === 63 ? (y === void 0 && (y = L.substr(0, C)),
                        y += A[U]) : y !== void 0 && (y += L[C])
                    }
                    return y !== void 0 ? y : L
                }
                function g(L, y) {
                    var C;
                    return C = L.authority && L.path.length > 1 && L.scheme === "file" ? "//" + L.authority + L.path : L.path.charCodeAt(0) === 47 && (L.path.charCodeAt(1) >= 65 && L.path.charCodeAt(1) <= 90 || L.path.charCodeAt(1) >= 97 && L.path.charCodeAt(1) <= 122) && L.path.charCodeAt(2) === 58 ? y ? L.path.substr(1) : L.path[1].toLowerCase() + L.path.substr(2) : L.path,
                    o && (C = C.replace(/\//g, "\\")),
                    C
                }
                function m(L, y) {
                    var C = y ? H : D
                      , U = ""
                      , q = L.scheme
                      , x = L.authority
                      , E = L.path
                      , z = L.query
                      , j = L.fragment;
                    if (q && (U += q,
                    U += ":"),
                    (x || q === "file") && (U += b,
                    U += b),
                    x) {
                        var V = x.indexOf("@");
                        if (V !== -1) {
                            var Y = x.substr(0, V);
                            x = x.substr(V + 1),
                            (V = Y.indexOf(":")) === -1 ? U += C(Y, !1) : (U += C(Y.substr(0, V), !1),
                            U += ":",
                            U += C(Y.substr(V + 1), !1)),
                            U += "@"
                        }
                        (V = (x = x.toLowerCase()).indexOf(":")) === -1 ? U += C(x, !1) : (U += C(x.substr(0, V), !1),
                        U += x.substr(V))
                    }
                    if (E) {
                        if (E.length >= 3 && E.charCodeAt(0) === 47 && E.charCodeAt(2) === 58)
                            ($ = E.charCodeAt(1)) >= 65 && $ <= 90 && (E = "/" + String.fromCharCode($ + 32) + ":" + E.substr(3));
                        else if (E.length >= 2 && E.charCodeAt(1) === 58) {
                            var $;
                            ($ = E.charCodeAt(0)) >= 65 && $ <= 90 && (E = String.fromCharCode($ + 32) + ":" + E.substr(2))
                        }
                        U += C(E, !0)
                    }
                    return z && (U += "?",
                    U += C(z, !1)),
                    j && (U += "#",
                    U += y ? j : D(j, !1)),
                    U
                }
                function w(L) {
                    try {
                        return decodeURIComponent(L)
                    } catch {
                        return L.length > 3 ? L.substr(0, 3) + w(L.substr(3)) : L
                    }
                }
                var B = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
                function R(L) {
                    return L.match(B) ? L.replace(B, function(y) {
                        return w(y)
                    }) : L
                }
                var N, I = a(470), P = function() {
                    for (var L = 0, y = 0, C = arguments.length; y < C; y++)
                        L += arguments[y].length;
                    var U = Array(L)
                      , q = 0;
                    for (y = 0; y < C; y++)
                        for (var x = arguments[y], E = 0, z = x.length; E < z; E++,
                        q++)
                            U[q] = x[E];
                    return U
                }, W = I.posix || I;
                (function(L) {
                    L.joinPath = function(y) {
                        for (var C = [], U = 1; U < arguments.length; U++)
                            C[U - 1] = arguments[U];
                        return y.with({
                            path: W.join.apply(W, P([y.path], C))
                        })
                    }
                    ,
                    L.resolvePath = function(y) {
                        for (var C = [], U = 1; U < arguments.length; U++)
                            C[U - 1] = arguments[U];
                        var q = y.path || "/";
                        return y.with({
                            path: W.resolve.apply(W, P([q], C))
                        })
                    }
                    ,
                    L.dirname = function(y) {
                        var C = W.dirname(y.path);
                        return C.length === 1 && C.charCodeAt(0) === 46 ? y : y.with({
                            path: C
                        })
                    }
                    ,
                    L.basename = function(y) {
                        return W.basename(y.path)
                    }
                    ,
                    L.extname = function(y) {
                        return W.extname(y.path)
                    }
                }
                )(N || (N = {}))
            }
        }
          , t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var i = t[r] = {
                exports: {}
            };
            return e[r](i, i.exports, n),
            i.exports
        }
        return n.d = (r, i) => {
            for (var a in i)
                n.o(i, a) && !n.o(r, a) && Object.defineProperty(r, a, {
                    enumerable: !0,
                    get: i[a]
                })
        }
        ,
        n.o = (r, i) => Object.prototype.hasOwnProperty.call(r, i),
        n.r = r => {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(r, "__esModule", {
                value: !0
            })
        }
        ,
        n(447)
    }
    )();
    const {URI: Ts, Utils: $s} = fr;
    function fn(e) {
        var t = e[0]
          , n = e[e.length - 1];
        return t === n && (t === "'" || t === '"') && (e = e.substr(1, e.length - 2)),
        e
    }
    function ks(e, t) {
        return !e.length || t === "handlebars" && /{{.*}}/.test(e) ? !1 : /\b(w[\w\d+.-]*:\/\/)?[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/.test(e)
    }
    function Ss(e, t, n, r) {
        if (!(/^\s*javascript\:/i.test(t) || /[\n\r]/.test(t))) {
            if (t = t.replace(/^\s*/g, ""),
            /^https?:\/\//i.test(t) || /^file:\/\//i.test(t))
                return t;
            if (/^\#/i.test(t))
                return e + t;
            if (/^\/\//i.test(t)) {
                var i = xe(e, "https://") ? "https" : "http";
                return i + ":" + t.replace(/^\s*/g, "")
            }
            return n ? n.resolveReference(t, r || e) : t
        }
    }
    function As(e, t, n, r, i, a) {
        var o = fn(n);
        if (!!ks(o, e.languageId)) {
            o.length < n.length && (r++,
            i--);
            var u = Ss(e.uri, o, t, a);
            if (!(!u || !Ls(u)))
                return {
                    range: G.create(e.positionAt(r), e.positionAt(i)),
                    target: u
                }
        }
    }
    function Ls(e) {
        try {
            return Ts.parse(e),
            !0
        } catch {
            return !1
        }
    }
    function Cs(e, t) {
        for (var n = [], r = de(e.getText(), 0), i = r.scan(), a = void 0, o = !1, u = void 0, s = {}; i !== M.EOS; ) {
            switch (i) {
            case M.StartTag:
                if (!u) {
                    var l = r.getTokenText().toLowerCase();
                    o = l === "base"
                }
                break;
            case M.AttributeName:
                a = r.getTokenText().toLowerCase();
                break;
            case M.AttributeValue:
                if (a === "src" || a === "href") {
                    var h = r.getTokenText();
                    if (!o) {
                        var c = As(e, t, h, r.getTokenOffset(), r.getTokenEnd(), u);
                        c && n.push(c)
                    }
                    o && typeof u == "undefined" && (u = fn(h),
                    u && t && (u = t.resolveReference(u, e.uri))),
                    o = !1,
                    a = void 0
                } else if (a === "id") {
                    var d = fn(r.getTokenText());
                    s[d] = r.getTokenOffset()
                }
                break
            }
            i = r.scan()
        }
        for (var p = 0, _ = n; p < _.length; p++) {
            var c = _[p]
              , b = e.uri + "#";
            if (c.target && xe(c.target, b)) {
                var T = c.target.substr(b.length)
                  , k = s[T];
                if (k !== void 0) {
                    var f = e.positionAt(k);
                    c.target = "" + b + (f.line + 1) + "," + (f.character + 1)
                }
            }
        }
        return n
    }
    function xs(e, t, n) {
        var r = e.offsetAt(t)
          , i = n.findNodeAt(r);
        if (!i.tag)
            return [];
        var a = []
          , o = br(M.StartTag, e, i.start)
          , u = typeof i.endTagStart == "number" && br(M.EndTag, e, i.endTagStart);
        return (o && gr(o, t) || u && gr(u, t)) && (o && a.push({
            kind: Tt.Read,
            range: o
        }),
        u && a.push({
            kind: Tt.Read,
            range: u
        })),
        a
    }
    function pr(e, t) {
        return e.line < t.line || e.line === t.line && e.character <= t.character
    }
    function gr(e, t) {
        return pr(e.start, t) && pr(t, e.end)
    }
    function br(e, t, n) {
        for (var r = de(t.getText(), n), i = r.scan(); i !== M.EOS && i !== e; )
            i = r.scan();
        return i !== M.EOS ? {
            start: t.positionAt(r.getTokenOffset()),
            end: t.positionAt(r.getTokenEnd())
        } : null
    }
    function Ds(e, t) {
        var n = [];
        return t.roots.forEach(function(r) {
            _r(e, r, "", n)
        }),
        n
    }
    function _r(e, t, n, r) {
        var i = Es(t)
          , a = pt.create(e.uri, G.create(e.positionAt(t.start), e.positionAt(t.end)))
          , o = {
            name: i,
            location: a,
            containerName: n,
            kind: ln.Field
        };
        r.push(o),
        t.children.forEach(function(u) {
            _r(e, u, i, r)
        })
    }
    function Es(e) {
        var t = e.tag;
        if (e.attributes) {
            var n = e.attributes.id
              , r = e.attributes.class;
            n && (t += "#" + n.replace(/[\"\']/g, "")),
            r && (t += r.replace(/[\"\']/g, "").split(/\s+/).map(function(i) {
                return "." + i
            }).join(""))
        }
        return t || "?"
    }
    function Ms(e, t, n, r) {
        var i, a = e.offsetAt(t), o = r.findNodeAt(a);
        if (!o.tag || !Rs(o, a, o.tag))
            return null;
        var u = []
          , s = {
            start: e.positionAt(o.start + 1),
            end: e.positionAt(o.start + 1 + o.tag.length)
        };
        if (u.push({
            range: s,
            newText: n
        }),
        o.endTagStart) {
            var l = {
                start: e.positionAt(o.endTagStart + 2),
                end: e.positionAt(o.endTagStart + 2 + o.tag.length)
            };
            u.push({
                range: l,
                newText: n
            })
        }
        var h = (i = {},
        i[e.uri.toString()] = u,
        i);
        return {
            changes: h
        }
    }
    function Rs(e, t, n) {
        return e.endTagStart && e.endTagStart + 2 <= t && t <= e.endTagStart + 2 + n.length ? !0 : e.start + 1 <= t && t <= e.start + 1 + n.length
    }
    function Ns(e, t, n) {
        var r = e.offsetAt(t)
          , i = n.findNodeAt(r);
        if (!i.tag || !i.endTagStart)
            return null;
        if (i.start + 1 <= r && r <= i.start + 1 + i.tag.length) {
            var a = r - 1 - i.start + i.endTagStart + 2;
            return e.positionAt(a)
        }
        if (i.endTagStart + 2 <= r && r <= i.endTagStart + 2 + i.tag.length) {
            var a = r - 2 - i.endTagStart + i.start + 1;
            return e.positionAt(a)
        }
        return null
    }
    function vr(e, t, n) {
        var r = e.offsetAt(t)
          , i = n.findNodeAt(r)
          , a = i.tag ? i.tag.length : 0;
        return i.endTagStart && (i.start + 1 <= r && r <= i.start + 1 + a || i.endTagStart + 2 <= r && r <= i.endTagStart + 2 + a) ? [G.create(e.positionAt(i.start + 1), e.positionAt(i.start + 1 + a)), G.create(e.positionAt(i.endTagStart + 2), e.positionAt(i.endTagStart + 2 + a))] : null
    }
    function Us(e, t) {
        e = e.sort(function(_, b) {
            var T = _.startLine - b.startLine;
            return T === 0 && (T = _.endLine - b.endLine),
            T
        });
        for (var n = void 0, r = [], i = [], a = [], o = function(_, b) {
            i[_] = b,
            b < 30 && (a[b] = (a[b] || 0) + 1)
        }, u = 0; u < e.length; u++) {
            var s = e[u];
            if (!n)
                n = s,
                o(u, 0);
            else if (s.startLine > n.startLine) {
                if (s.endLine <= n.endLine)
                    r.push(n),
                    n = s,
                    o(u, r.length);
                else if (s.startLine > n.endLine) {
                    do
                        n = r.pop();
                    while (n && s.startLine > n.endLine);
                    n && r.push(n),
                    n = s,
                    o(u, r.length)
                }
            }
        }
        for (var l = 0, h = 0, u = 0; u < a.length; u++) {
            var c = a[u];
            if (c) {
                if (c + l > t) {
                    h = u;
                    break
                }
                l += c
            }
        }
        for (var d = [], u = 0; u < e.length; u++) {
            var p = i[u];
            typeof p == "number" && (p < h || p === h && l++ < t) && d.push(e[u])
        }
        return d
    }
    function Hs(e, t) {
        var n = de(e.getText())
          , r = n.scan()
          , i = []
          , a = []
          , o = null
          , u = -1;
        function s(f) {
            i.push(f),
            u = f.startLine
        }
        for (; r !== M.EOS; ) {
            switch (r) {
            case M.StartTag:
                {
                    var l = n.getTokenText()
                      , h = e.positionAt(n.getTokenOffset()).line;
                    a.push({
                        startLine: h,
                        tagName: l
                    }),
                    o = l;
                    break
                }
            case M.EndTag:
                {
                    o = n.getTokenText();
                    break
                }
            case M.StartTagClose:
                if (!o || !At(o))
                    break;
            case M.EndTagClose:
            case M.StartTagSelfClose:
                {
                    for (var c = a.length - 1; c >= 0 && a[c].tagName !== o; )
                        c--;
                    if (c >= 0) {
                        var d = a[c];
                        a.length = c;
                        var p = e.positionAt(n.getTokenOffset()).line
                          , h = d.startLine
                          , _ = p - 1;
                        _ > h && u !== h && s({
                            startLine: h,
                            endLine: _
                        })
                    }
                    break
                }
            case M.Comment:
                {
                    var h = e.positionAt(n.getTokenOffset()).line
                      , b = n.getTokenText()
                      , T = b.match(/^\s*#(region\b)|(endregion\b)/);
                    if (T)
                        if (T[1])
                            a.push({
                                startLine: h,
                                tagName: ""
                            });
                        else {
                            for (var c = a.length - 1; c >= 0 && a[c].tagName.length; )
                                c--;
                            if (c >= 0) {
                                var d = a[c];
                                a.length = c;
                                var _ = h;
                                h = d.startLine,
                                _ > h && u !== h && s({
                                    startLine: h,
                                    endLine: _,
                                    kind: gt.Region
                                })
                            }
                        }
                    else {
                        var _ = e.positionAt(n.getTokenOffset() + n.getTokenLength()).line;
                        h < _ && s({
                            startLine: h,
                            endLine: _,
                            kind: gt.Comment
                        })
                    }
                    break
                }
            }
            r = n.scan()
        }
        var k = t && t.rangeLimit || Number.MAX_VALUE;
        return i.length > k ? Us(i, k) : i
    }
    function zs(e, t) {
        function n(r) {
            for (var i = Is(e, r), a = void 0, o = void 0, u = i.length - 1; u >= 0; u--) {
                var s = i[u];
                (!a || s[0] !== a[0] || s[1] !== a[1]) && (o = kt.create(G.create(e.positionAt(i[u][0]), e.positionAt(i[u][1])), o)),
                a = s
            }
            return o || (o = kt.create(G.create(r, r))),
            o
        }
        return t.map(n)
    }
    function Is(e, t) {
        var n = rr(e.getText())
          , r = e.offsetAt(t)
          , i = n.findNodeAt(r)
          , a = Ws(i);
        if (i.startTagEnd && !i.endTagStart) {
            if (i.startTagEnd !== i.end)
                return [[i.start, i.end]];
            var o = G.create(e.positionAt(i.startTagEnd - 2), e.positionAt(i.startTagEnd))
              , u = e.getText(o);
            u === "/>" ? a.unshift([i.start + 1, i.startTagEnd - 2]) : a.unshift([i.start + 1, i.startTagEnd - 1]);
            var s = wr(e, i, r);
            return a = s.concat(a),
            a
        }
        if (!i.startTagEnd || !i.endTagStart)
            return a;
        if (a.unshift([i.start, i.end]),
        i.start < r && r < i.startTagEnd) {
            a.unshift([i.start + 1, i.startTagEnd - 1]);
            var s = wr(e, i, r);
            return a = s.concat(a),
            a
        } else
            return i.startTagEnd <= r && r <= i.endTagStart ? (a.unshift([i.startTagEnd, i.endTagStart]),
            a) : (r >= i.endTagStart + 2 && a.unshift([i.endTagStart + 2, i.end - 1]),
            a)
    }
    function Ws(e) {
        for (var t = e, n = function(i) {
            return i.startTagEnd && i.endTagStart && i.startTagEnd < i.endTagStart ? [[i.startTagEnd, i.endTagStart], [i.start, i.end]] : [[i.start, i.end]]
        }, r = []; t.parent; )
            t = t.parent,
            n(t).forEach(function(i) {
                return r.push(i)
            });
        return r
    }
    function wr(e, t, n) {
        for (var r = G.create(e.positionAt(t.start), e.positionAt(t.end)), i = e.getText(r), a = n - t.start, o = de(i), u = o.scan(), s = t.start, l = [], h = !1, c = -1; u !== M.EOS; ) {
            switch (u) {
            case M.AttributeName:
                {
                    if (a < o.getTokenOffset()) {
                        h = !1;
                        break
                    }
                    a <= o.getTokenEnd() && l.unshift([o.getTokenOffset(), o.getTokenEnd()]),
                    h = !0,
                    c = o.getTokenOffset();
                    break
                }
            case M.AttributeValue:
                {
                    if (!h)
                        break;
                    var d = o.getTokenText();
                    if (a < o.getTokenOffset()) {
                        l.push([c, o.getTokenEnd()]);
                        break
                    }
                    a >= o.getTokenOffset() && a <= o.getTokenEnd() && (l.unshift([o.getTokenOffset(), o.getTokenEnd()]),
                    (d[0] === '"' && d[d.length - 1] === '"' || d[0] === "'" && d[d.length - 1] === "'") && a >= o.getTokenOffset() + 1 && a <= o.getTokenEnd() - 1 && l.unshift([o.getTokenOffset() + 1, o.getTokenEnd() - 1]),
                    l.push([c, o.getTokenEnd()]));
                    break
                }
            }
            u = o.scan()
        }
        return l.map(function(p) {
            return [p[0] + s, p[1] + s]
        })
    }
    var Ps = {
        version: 1.1,
        tags: [{
            name: "html",
            description: {
                kind: "markdown",
                value: "The html element represents the root of an HTML document."
            },
            attributes: [{
                name: "manifest",
                description: {
                    kind: "markdown",
                    value: "Specifies the URI of a resource manifest indicating resources that should be cached locally. See [Using the application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) for details."
                }
            }, {
                name: "version",
                description: 'Specifies the version of the HTML [Document Type Definition](https://developer.mozilla.org/en-US/docs/Glossary/DTD "Document Type Definition: In HTML, the doctype is the required "<!DOCTYPE html>" preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called \u201Cquirks mode\u201D when rendering a document; that is, the "<!DOCTYPE html>" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.") that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration.'
            }, {
                name: "xmlns",
                description: 'Specifies the XML Namespace of the document. Default value is `"http://www.w3.org/1999/xhtml"`. This is required in documents parsed with XML parsers, and optional in text/html documents.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/html"
            }]
        }, {
            name: "head",
            description: {
                kind: "markdown",
                value: "The head element represents a collection of metadata for the Document."
            },
            attributes: [{
                name: "profile",
                description: "The URIs of one or more metadata profiles, separated by white space."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/head"
            }]
        }, {
            name: "title",
            description: {
                kind: "markdown",
                value: "The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/title"
            }]
        }, {
            name: "base",
            description: {
                kind: "markdown",
                value: "The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information."
            },
            attributes: [{
                name: "href",
                description: {
                    kind: "markdown",
                    value: "The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URLs are allowed."
                }
            }, {
                name: "target",
                description: {
                    kind: "markdown",
                    value: "A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. It is a name of, or keyword for, a _browsing context_ (for example: tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the result into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the result into a new unnamed browsing context.\n*   `_parent`: Load the result into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n\nIf this attribute is specified, this element must come before any other elements with attributes whose values are URLs."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/base"
            }]
        }, {
            name: "link",
            description: {
                kind: "markdown",
                value: "The link element allows authors to link their document to other resources."
            },
            attributes: [{
                name: "href",
                description: {
                    kind: "markdown",
                    value: 'This attribute specifies the [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL "URL: Uniform Resource Locator (URL) is a text string specifying where a resource can be found on the Internet.") of the linked resource. A URL can be absolute or relative.'
                }
            }, {
                name: "crossorigin",
                valueSet: "xo",
                description: {
                    kind: "markdown",
                    value: 'This enumerated attribute indicates whether [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") must be used when fetching the resource. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\n`anonymous`\n\nA cross-origin request (i.e. with an [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin "The Origin request header indicates where a fetch originates from. It doesn\'t include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn\'t disclose the whole path.") HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin "The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.") HTTP header) the image will be tainted and its usage restricted.\n\n`use-credentials`\n\nA cross-origin request (i.e. with an `Origin` HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials "The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request\'s credentials mode (Request.credentials) is "include".") HTTP header), the resource will be _tainted_ and its usage restricted.\n\nIf the attribute is not present, the resource is fetched without a [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") request (i.e. without sending the `Origin` HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for additional information.'
                }
            }, {
                name: "rel",
                description: {
                    kind: "markdown",
                    value: "This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the [link types values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)."
                }
            }, {
                name: "media",
                description: {
                    kind: "markdown",
                    value: "This attribute specifies the media that the linked resource applies to. Its value must be a media type / [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries). This attribute is mainly useful when linking to external stylesheets \u2014 it allows the user agent to pick the best adapted one for the device it runs on.\n\n**Notes:**\n\n*   In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., [media types and groups](https://developer.mozilla.org/en-US/docs/Web/CSS/@media), where defined and allowed as values for this attribute, such as `print`, `screen`, `aural`, `braille`. HTML5 extended this to any kind of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries), which are a superset of the allowed values of HTML 4.\n*   Browsers not supporting [CSS3 Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries) won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4."
                }
            }, {
                name: "hreflang",
                description: {
                    kind: "markdown",
                    value: "This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt). Use this attribute only if the [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute is present."
                }
            }, {
                name: "type",
                description: {
                    kind: "markdown",
                    value: 'This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as **text/css**), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the `type` attribute, but is actually now recommended practice. It is also used on `rel="preload"` link types, to make sure the browser only downloads file types that it supports.'
                }
            }, {
                name: "sizes",
                description: {
                    kind: "markdown",
                    value: "This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the [`rel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-rel) contains a value of `icon` or a non-standard type such as Apple's `apple-touch-icon`. It may have the following values:\n\n*   `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.\n*   a white-space separated list of sizes, each in the format `_<width in pixels>_x_<height in pixels>_` or `_<width in pixels>_X_<height in pixels>_`. Each of these sizes must be contained in the resource.\n\n**Note:** Most icon formats are only able to store one single icon; therefore most of the time the [`sizes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-sizes) contains only one entry. MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous; you should definitely use it."
                }
            }, {
                name: "as",
                description: 'This attribute is only used when `rel="preload"` or `rel="prefetch"` has been set on the `<link>` element. It specifies the type of content being loaded by the `<link>`, which is necessary for content prioritization, request matching, application of correct [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and setting of correct [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept "The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. Browsers set adequate values for this header depending on\xA0the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image,\xA0video or a script.") request header.'
            }, {
                name: "importance",
                description: "Indicates the relative importance of the resource. Priority hints are delegated using the values:"
            }, {
                name: "importance",
                description: '**`auto`**: Indicates\xA0**no\xA0preference**. The browser may use its own heuristics to decide the priority of the resource.\n\n**`high`**: Indicates to the\xA0browser\xA0that the resource is of\xA0**high** priority.\n\n**`low`**:\xA0Indicates to the\xA0browser\xA0that the resource is of\xA0**low** priority.\n\n**Note:** The `importance` attribute may only be used for the `<link>` element if `rel="preload"` or `rel="prefetch"` is present.'
            }, {
                name: "integrity",
                description: "Contains inline metadata \u2014 a base64-encoded cryptographic hash of the resource (file) you\u2019re telling the browser to fetch. The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)."
            }, {
                name: "referrerpolicy",
                description: 'A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer` means that the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` means that no [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent\u2019s default behavior, if no policy is otherwise specified.\n*   `origin` means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.\n*   `origin-when-cross-origin` means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer\'s path.\n*   `unsafe-url` means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.'
            }, {
                name: "title",
                description: 'The `title` attribute has special semantics on the `<link>` element. When used on a `<link rel="stylesheet">` it defines a [preferred or an alternate stylesheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets). Incorrectly using it may [cause the stylesheet to be ignored](https://developer.mozilla.org/en-US/docs/Correctly_Using_Titles_With_External_Stylesheets).'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/link"
            }]
        }, {
            name: "meta",
            description: {
                kind: "markdown",
                value: "The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements."
            },
            attributes: [{
                name: "name",
                description: {
                    kind: "markdown",
                    value: `This attribute defines the name of a piece of document-level metadata. It should not be set if one of the attributes [\`itemprop\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemprop), [\`http-equiv\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [\`charset\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) is also set.

This metadata name is associated with the value contained by the [\`content\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute. The possible values for the name attribute are:

*   \`application-name\` which defines the name of the application running in the web page.
    
    **Note:**
    
    *   Browsers may use this to identify the application. It is different from the [\`<title>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title "The HTML Title element (<title>) defines the document's title that is shown in a browser's title bar or a page's tab.") element, which usually contain the application name, but may also contain information like the document name or a status.
    *   Simple web pages shouldn't define an application-name.
    
*   \`author\` which defines the name of the document's author.
*   \`description\` which contains a short and accurate summary of the content of the page. Several browsers, like Firefox and Opera, use this as the default description of bookmarked pages.
*   \`generator\` which contains the identifier of the software that generated the page.
*   \`keywords\` which contains words relevant to the page's content separated by commas.
*   \`referrer\` which controls the [\`Referer\` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) attached to requests sent from the document:
    
    Values for the \`content\` attribute of \`<meta name="referrer">\`
    
    \`no-referrer\`
    
    Do not send a HTTP \`Referrer\` header.
    
    \`origin\`
    
    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the document.
    
    \`no-referrer-when-downgrade\`
    
    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as a referrer to URLs as secure as the current page, (https\u2192https), but does not send a referrer to less secure URLs (https\u2192http). This is the default behaviour.
    
    \`origin-when-cross-origin\`
    
    Send the full URL (stripped of parameters) for same-origin requests, but only send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) for other cases.
    
    \`same-origin\`
    
    A referrer will be sent for [same-site origins](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), but cross-origin requests will contain no referrer information.
    
    \`strict-origin\`
    
    Only send the origin of the document as the referrer to a-priori as-much-secure destination (HTTPS->HTTPS), but don't send it to a less secure destination (HTTPS->HTTP).
    
    \`strict-origin-when-cross-origin\`
    
    Send a full URL when performing a same-origin request, only send the origin of the document to a-priori as-much-secure destination (HTTPS->HTTPS), and send no header to a less secure destination (HTTPS->HTTP).
    
    \`unsafe-URL\`
    
    Send the full URL (stripped of parameters) for same-origin or cross-origin requests.
    
    **Notes:**
    
    *   Some browsers support the deprecated values of \`always\`, \`default\`, and \`never\` for referrer.
    *   Dynamically inserting \`<meta name="referrer">\` (with [\`document.write\`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) or [\`appendChild\`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)) makes the referrer behaviour unpredictable.
    *   When several conflicting policies are defined, the no-referrer policy is applied.
    

This attribute may also have a value taken from the extended list defined on [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions). Although none have been formally accepted yet, a few commonly used names are:

*   \`creator\` which defines the name of the creator of the document, such as an organization or institution. If there are more than one, several [\`<meta>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") elements should be used.
*   \`googlebot\`, a synonym of \`robots\`, is only followed by Googlebot (the indexing crawler for Google).
*   \`publisher\` which defines the name of the document's publisher.
*   \`robots\` which defines the behaviour that cooperative crawlers, or "robots", should use with the page. It is a comma-separated list of the values below:
    
    Values for the content of \`<meta name="robots">\`
    
    Value
    
    Description
    
    Used by
    
    \`index\`
    
    Allows the robot to index the page (default).
    
    All
    
    \`noindex\`
    
    Requests the robot to not index the page.
    
    All
    
    \`follow\`
    
    Allows the robot to follow the links on the page (default).
    
    All
    
    \`nofollow\`
    
    Requests the robot to not follow the links on the page.
    
    All
    
    \`none\`
    
    Equivalent to \`noindex, nofollow\`
    
    [Google](https://support.google.com/webmasters/answer/79812)
    
    \`noodp\`
    
    Prevents using the [Open Directory Project](https://www.dmoz.org/) description, if any, as the page description in search engine results.
    
    [Google](https://support.google.com/webmasters/answer/35624#nodmoz), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/meta-tags-robotstxt-yahoo-search-sln2213.html#cont5), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    \`noarchive\`
    
    Requests the search engine not to cache the page content.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    \`nosnippet\`
    
    Prevents displaying any description of the page in search engine results.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    \`noimageindex\`
    
    Requests this page not to appear as the referring page of an indexed image.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives)
    
    \`nocache\`
    
    Synonym of \`noarchive\`.
    
    [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    **Notes:**
    
    *   Only cooperative robots follow these rules. Do not expect to prevent e-mail harvesters with them.
    *   The robot still needs to access the page in order to read these rules. To prevent bandwidth consumption, use a _[robots.txt](https://developer.mozilla.org/en-US/docs/Glossary/robots.txt "robots.txt: Robots.txt is a file which is usually placed in the root of any website. It decides whether\xA0crawlers are permitted or forbidden access to the web site.")_ file.
    *   If you want to remove a page, \`noindex\` will work, but only after the robot visits the page again. Ensure that the \`robots.txt\` file is not preventing revisits.
    *   Some values are mutually exclusive, like \`index\` and \`noindex\`, or \`follow\` and \`nofollow\`. In these cases the robot's behaviour is undefined and may vary between them.
    *   Some crawler robots, like Google, Yahoo and Bing, support the same values for the HTTP header \`X-Robots-Tag\`; this allows non-HTML documents like images to use these rules.
    
*   \`slurp\`, is a synonym of \`robots\`, but only for Slurp - the crawler for Yahoo Search.
*   \`viewport\`, which gives hints about the size of the initial size of the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport "viewport: A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you're viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view."). Used by mobile devices only.
    
    Values for the content of \`<meta name="viewport">\`
    
    Value
    
    Possible subvalues
    
    Description
    
    \`width\`
    
    A positive integer number, or the text \`device-width\`
    
    Defines the pixel width of the viewport that you want the web site to be rendered at.
    
    \`height\`
    
    A positive integer, or the text \`device-height\`
    
    Defines the height of the viewport. Not used by any browser.
    
    \`initial-scale\`
    
    A positive number between \`0.0\` and \`10.0\`
    
    Defines the ratio between the device width (\`device-width\` in portrait mode or \`device-height\` in landscape mode) and the viewport size.
    
    \`maximum-scale\`
    
    A positive number between \`0.0\` and \`10.0\`
    
    Defines the maximum amount to zoom in. It must be greater or equal to the \`minimum-scale\` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.
    
    \`minimum-scale\`
    
    A positive number between \`0.0\` and \`10.0\`
    
    Defines the minimum zoom level. It must be smaller or equal to the \`maximum-scale\` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.
    
    \`user-scalable\`
    
    \`yes\` or \`no\`
    
    If set to \`no\`, the user is not able to zoom in the webpage. The default is \`yes\`. Browser settings can ignore this rule, and iOS10+ ignores it by default.
    
    Specification
    
    Status
    
    Comment
    
    [CSS Device Adaptation  
    The definition of '<meta name="viewport">' in that specification.](https://drafts.csswg.org/css-device-adapt/#viewport-meta)
    
    Working Draft
    
    Non-normatively describes the Viewport META element
    
    See also: [\`@viewport\`](https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport "The @viewport CSS at-rule lets you configure the viewport through which the document is viewed. It's primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).")
    
    **Notes:**
    
    *   Though unstandardized, this declaration is respected by most mobile browsers due to de-facto dominance.
    *   The default values may vary between devices and browsers.
    *   To learn about this declaration in Firefox for Mobile, see [this article](https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag "Mobile/Viewport meta tag").`
                }
            }, {
                name: "http-equiv",
                description: {
                    kind: "markdown",
                    value: 'Defines a pragma directive. The attribute is named `**http-equiv**(alent)` because all the allowed values are names of particular HTTP headers:\n\n*   `"content-language"`  \n    Defines the default language of the page. It can be overridden by the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any element.\n    \n    **Warning:** Do not use this value, as it is obsolete. Prefer the `lang` attribute on the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html "The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.") element.\n    \n*   `"content-security-policy"`  \n    Allows page authors to define a [content policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives) for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.\n*   `"content-type"`  \n    Defines the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the document, followed by its character encoding. It follows the same syntax as the HTTP `content-type` entity-header field, but as it is inside a HTML page, most values other than `text/html` are impossible. Therefore the valid syntax for its `content` is the string \'`text/html`\' followed by a character set with the following syntax: \'`; charset=_IANAcharset_`\', where `IANAcharset` is the _preferred MIME name_ for a character set as [defined by the IANA.](https://www.iana.org/assignments/character-sets)\n    \n    **Warning:** Do not use this value, as it is obsolete. Use the [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute on the [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element.\n    \n    **Note:** As [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") can\'t change documents\' types in XHTML or HTML5\'s XHTML serialization, never set the MIME type to an XHTML MIME type with `<meta>`.\n    \n*   `"refresh"`  \n    This instruction specifies:\n    *   The number of seconds until the page should be reloaded - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer.\n    *   The number of seconds until the page should redirect to another - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer followed by the string \'`;url=`\', and a valid URL.\n*   `"set-cookie"`  \n    Defines a [cookie](https://developer.mozilla.org/en-US/docs/cookie) for the page. Its content must follow the syntax defined in the [IETF HTTP Cookie Specification](https://tools.ietf.org/html/draft-ietf-httpstate-cookie-14).\n    \n    **Warning:** Do not use this instruction, as it is obsolete. Use the HTTP header [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) instead.'
                }
            }, {
                name: "content",
                description: {
                    kind: "markdown",
                    value: "This attribute contains the value for the [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name) attribute, depending on which is used."
                }
            }, {
                name: "charset",
                description: {
                    kind: "markdown",
                    value: 'This attribute declares the page\'s character encoding. It must contain a [standard IANA MIME name for character encodings](https://www.iana.org/assignments/character-sets). Although the standard doesn\'t request a specific encoding, it suggests:\n\n*   Authors are encouraged to use [`UTF-8`](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8).\n*   Authors should not use ASCII-incompatible encodings to avoid security risk: browsers not supporting them may interpret harmful content as HTML. This happens with the `JIS_C6226-1983`, `JIS_X0212-1990`, `HZ-GB-2312`, `JOHAB`, the ISO-2022 family and the EBCDIC family.\n\n**Note:** ASCII-incompatible encodings are those that don\'t map the 8-bit code points `0x20` to `0x7E` to the `0x0020` to `0x007E` Unicode code points)\n\n*   Authors **must not** use `CESU-8`, `UTF-7`, `BOCU-1` and/or `SCSU` as [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks with these encodings have been demonstrated.\n*   Authors should not use `UTF-32` because not all HTML5 encoding algorithms can distinguish it from `UTF-16`.\n\n**Notes:**\n\n*   The declared character encoding must match the one the page was saved with to avoid garbled characters and security holes.\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element declaring the encoding must be inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head "The HTML <head> element provides general information (metadata) about the document, including its title and links to its\xA0scripts and style sheets.") element and **within the first 1024 bytes** of the HTML as some browsers only look at those bytes before choosing an encoding.\n*   This [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element is only one part of the [algorithm to determine a page\'s character set](https://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#encoding-sniffing-algorithm "Algorithm charset page"). The [`Content-Type` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and any [Byte-Order Marks](https://developer.mozilla.org/en-US/docs/Glossary/Byte-Order_Mark "The definition of that term (Byte-Order Marks) has not been written yet; please consider contributing it!") override this element.\n*   It is strongly recommended to define the character encoding. If a page\'s encoding is undefined, cross-scripting techniques are possible, such as the [`UTF-7` fallback cross-scripting technique](https://code.google.com/p/doctype-mirror/wiki/ArticleUtf7).\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element with a `charset` attribute is a synonym for the pre-HTML5 `<meta http-equiv="Content-Type" content="text/html; charset=_IANAcharset_">`, where _`IANAcharset`_ contains the value of the equivalent [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute. This syntax is still allowed, although no longer recommended.'
                }
            }, {
                name: "scheme",
                description: "This attribute defines the scheme in which metadata is described. A scheme is a context leading to the correct interpretations of the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) value, like a format.\n\n**Warning:** Do not use this value, as it is obsolete. There is no replacement as there was no real usage for it."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/meta"
            }]
        }, {
            name: "style",
            description: {
                kind: "markdown",
                value: "The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user."
            },
            attributes: [{
                name: "media",
                description: {
                    kind: "markdown",
                    value: "This attribute defines which media the style should be applied to. Its value is a [media query](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries), which defaults to `all` if the attribute is missing."
                }
            }, {
                name: "nonce",
                description: {
                    kind: "markdown",
                    value: "A cryptographic nonce (number used once) used to whitelist inline styles in a [style-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource\u2019s policy is otherwise trivial."
                }
            }, {
                name: "type",
                description: {
                    kind: "markdown",
                    value: "This attribute defines the styling language as a MIME type (charset should not be specified). This attribute is optional and defaults to `text/css` if it is not specified \u2014 there is very little reason to include this in modern web documents."
                }
            }, {
                name: "scoped",
                valueSet: "v"
            }, {
                name: "title",
                description: "This attribute specifies [alternative style sheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets) sets."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/style"
            }]
        }, {
            name: "body",
            description: {
                kind: "markdown",
                value: "The body element represents the content of the document."
            },
            attributes: [{
                name: "onafterprint",
                description: {
                    kind: "markdown",
                    value: "Function to call after the user has printed the document."
                }
            }, {
                name: "onbeforeprint",
                description: {
                    kind: "markdown",
                    value: "Function to call when the user requests printing of the document."
                }
            }, {
                name: "onbeforeunload",
                description: {
                    kind: "markdown",
                    value: "Function to call when the document is about to be unloaded."
                }
            }, {
                name: "onhashchange",
                description: {
                    kind: "markdown",
                    value: "Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed."
                }
            }, {
                name: "onlanguagechange",
                description: {
                    kind: "markdown",
                    value: "Function to call when the preferred languages changed."
                }
            }, {
                name: "onmessage",
                description: {
                    kind: "markdown",
                    value: "Function to call when the document has received a message."
                }
            }, {
                name: "onoffline",
                description: {
                    kind: "markdown",
                    value: "Function to call when network communication has failed."
                }
            }, {
                name: "ononline",
                description: {
                    kind: "markdown",
                    value: "Function to call when network communication has been restored."
                }
            }, {
                name: "onpagehide"
            }, {
                name: "onpageshow"
            }, {
                name: "onpopstate",
                description: {
                    kind: "markdown",
                    value: "Function to call when the user has navigated session history."
                }
            }, {
                name: "onstorage",
                description: {
                    kind: "markdown",
                    value: "Function to call when the storage area has changed."
                }
            }, {
                name: "onunload",
                description: {
                    kind: "markdown",
                    value: "Function to call when the document is going away."
                }
            }, {
                name: "alink",
                description: 'Color of text for hyperlinks when selected. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active "The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user.") pseudo-class instead._'
            }, {
                name: "background",
                description: 'URI of a image to use as a background. _This method is non-conforming, use CSS [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.") property on the element instead._'
            }, {
                name: "bgcolor",
                description: 'Background color for the document. _This method is non-conforming, use CSS [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property on the element instead._'
            }, {
                name: "bottommargin",
                description: 'The margin of the bottom of the body. _This method is non-conforming, use CSS [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._'
            }, {
                name: "leftmargin",
                description: 'The margin of the left of the body. _This method is non-conforming, use CSS [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._'
            }, {
                name: "link",
                description: 'Color of text for unvisited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link "The :link CSS pseudo-class represents an element that has not yet been visited. It matches every unvisited <a>, <area>, or <link> element that has an href attribute.") pseudo-class instead._'
            }, {
                name: "onblur",
                description: "Function to call when the document loses focus."
            }, {
                name: "onerror",
                description: "Function to call when the document fails to load properly."
            }, {
                name: "onfocus",
                description: "Function to call when the document receives focus."
            }, {
                name: "onload",
                description: "Function to call when the document has finished loading."
            }, {
                name: "onredo",
                description: "Function to call when the user has moved forward in undo transaction history."
            }, {
                name: "onresize",
                description: "Function to call when the document has been resized."
            }, {
                name: "onundo",
                description: "Function to call when the user has moved backward in undo transaction history."
            }, {
                name: "rightmargin",
                description: 'The margin of the right of the body. _This method is non-conforming, use CSS [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._'
            }, {
                name: "text",
                description: 'Foreground color of text. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property on the element instead._'
            }, {
                name: "topmargin",
                description: 'The margin of the top of the body. _This method is non-conforming, use CSS [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._'
            }, {
                name: "vlink",
                description: 'Color of text for visited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited "The :visited CSS pseudo-class represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.") pseudo-class instead._'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/body"
            }]
        }, {
            name: "article",
            description: {
                kind: "markdown",
                value: "The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1\u2013h6 element) as a child of the article element."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/article"
            }]
        }, {
            name: "section",
            description: {
                kind: "markdown",
                value: "The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/section"
            }]
        }, {
            name: "nav",
            description: {
                kind: "markdown",
                value: "The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/nav"
            }]
        }, {
            name: "aside",
            description: {
                kind: "markdown",
                value: "The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/aside"
            }]
        }, {
            name: "h1",
            description: {
                kind: "markdown",
                value: "The h1 element represents a section heading."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
            }]
        }, {
            name: "h2",
            description: {
                kind: "markdown",
                value: "The h2 element represents a section heading."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
            }]
        }, {
            name: "h3",
            description: {
                kind: "markdown",
                value: "The h3 element represents a section heading."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
            }]
        }, {
            name: "h4",
            description: {
                kind: "markdown",
                value: "The h4 element represents a section heading."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
            }]
        }, {
            name: "h5",
            description: {
                kind: "markdown",
                value: "The h5 element represents a section heading."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
            }]
        }, {
            name: "h6",
            description: {
                kind: "markdown",
                value: "The h6 element represents a section heading."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
            }]
        }, {
            name: "header",
            description: {
                kind: "markdown",
                value: "The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/header"
            }]
        }, {
            name: "footer",
            description: {
                kind: "markdown",
                value: "The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/footer"
            }]
        }, {
            name: "address",
            description: {
                kind: "markdown",
                value: "The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/address"
            }]
        }, {
            name: "p",
            description: {
                kind: "markdown",
                value: "The p element represents a paragraph."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/p"
            }]
        }, {
            name: "hr",
            description: {
                kind: "markdown",
                value: "The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book."
            },
            attributes: [{
                name: "align",
                description: "Sets the alignment of the rule on the page. If no value is specified, the default value is `left`."
            }, {
                name: "color",
                description: "Sets the color of the rule through color name or hexadecimal value."
            }, {
                name: "noshade",
                description: "Sets the rule to have no shading."
            }, {
                name: "size",
                description: "Sets the height, in pixels, of the rule."
            }, {
                name: "width",
                description: "Sets the length of the rule on the page through a pixel or percentage value."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/hr"
            }]
        }, {
            name: "pre",
            description: {
                kind: "markdown",
                value: "The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements."
            },
            attributes: [{
                name: "cols",
                description: 'Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre#attr-width). To achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.'
            }, {
                name: "width",
                description: 'Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.'
            }, {
                name: "wrap",
                description: 'Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space "The white-space CSS property sets how white space inside an element is handled.") instead.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/pre"
            }]
        }, {
            name: "blockquote",
            description: {
                kind: "markdown",
                value: "The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations."
            },
            attributes: [{
                name: "cite",
                description: {
                    kind: "markdown",
                    value: "A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/blockquote"
            }]
        }, {
            name: "ol",
            description: {
                kind: "markdown",
                value: "The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document."
            },
            attributes: [{
                name: "reversed",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute specifies that the items of the list are specified in reversed order."
                }
            }, {
                name: "start",
                description: {
                    kind: "markdown",
                    value: 'This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use `<ol start="3">`.\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.'
                }
            }, {
                name: "type",
                valueSet: "lt",
                description: {
                    kind: "markdown",
                    value: "Indicates the numbering type:\n\n*   `'a'` indicates lowercase letters,\n*   `'A'` indicates uppercase letters,\n*   `'i'` indicates lowercase Roman numerals,\n*   `'I'` indicates uppercase Roman numerals,\n*   and `'1'` indicates numbers (default).\n\nThe type set is used for the entire list unless a different [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-type) attribute is used within an enclosed [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li \"The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.\") element.\n\n**Note:** This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\nUnless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type \"The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\") property should be used instead."
                }
            }, {
                name: "compact",
                description: 'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Warning:** Do not use this attribute, as it has been deprecated: the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give an effect similar to the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height "The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.") can be used with a value of `80%`.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/ol"
            }]
        }, {
            name: "ul",
            description: {
                kind: "markdown",
                value: "The ul element represents a list of items, where the order of the items is not important \u2014 that is, where changing the order would not materially change the meaning of the document."
            },
            attributes: [{
                name: "compact",
                description: 'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Usage note:\xA0**Do not use this attribute, as it has been deprecated: the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give a similar effect as the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [line-height](https://developer.mozilla.org/en-US/docs/CSS/line-height) can be used with a value of `80%`.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/ul"
            }]
        }, {
            name: "li",
            description: {
                kind: "markdown",
                value: "The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element."
            },
            attributes: [{
                name: "value",
                description: {
                    kind: "markdown",
                    value: 'This integer attribute indicates the current ordinal value of the list item as defined by the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The **value** attribute has no meaning for unordered lists ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.")) or for menus ([`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.")).\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\n**Note:** Prior to Gecko\xA09.0, negative values were incorrectly converted to 0. Starting in Gecko\xA09.0 all integer values are correctly parsed.'
                }
            }, {
                name: "type",
                description: 'This character attribute indicates the numbering type:\n\n*   `a`: lowercase letters\n*   `A`: uppercase letters\n*   `i`: lowercase Roman numerals\n*   `I`: uppercase Roman numerals\n*   `1`: numbers\n\nThis type overrides the one used by its parent [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element, if any.\n\n**Usage note:** This attribute has been deprecated: use the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property instead.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/li"
            }]
        }, {
            name: "dl",
            description: {
                kind: "markdown",
                value: "The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/dl"
            }]
        }, {
            name: "dt",
            description: {
                kind: "markdown",
                value: "The dt element represents the term, or name, part of a term-description group in a description list (dl element)."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/dt"
            }]
        }, {
            name: "dd",
            description: {
                kind: "markdown",
                value: "The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element)."
            },
            attributes: [{
                name: "nowrap",
                description: "If the value of this attribute is set to `yes`, the definition text will not wrap. The default value is `no`."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/dd"
            }]
        }, {
            name: "figure",
            description: {
                kind: "markdown",
                value: "The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/figure"
            }]
        }, {
            name: "figcaption",
            description: {
                kind: "markdown",
                value: "The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/figcaption"
            }]
        }, {
            name: "main",
            description: {
                kind: "markdown",
                value: "The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/main"
            }]
        }, {
            name: "div",
            description: {
                kind: "markdown",
                value: "The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/div"
            }]
        }, {
            name: "a",
            description: {
                kind: "markdown",
                value: "If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents."
            },
            attributes: [{
                name: "href",
                description: {
                    kind: "markdown",
                    value: "Contains a URL or a URL fragment that the hyperlink points to."
                }
            }, {
                name: "target",
                description: {
                    kind: "markdown",
                    value: 'Specifies where to display the linked URL. It is a name of, or keyword for, a _browsing context_: a tab, window, or `<iframe>`. The following keywords have special meanings:\n\n*   `_self`: Load the URL into the same browsing context as the current one. This is the default behavior.\n*   `_blank`: Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.\n*   `_parent`: Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as `_self`.\n*   `_top`: Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this behaves the same way as `_self`.\n\n**Note:** When using `target`, consider adding `rel="noreferrer"` to avoid exploitation of the `window.opener` API.\n\n**Note:** Linking to another page using `target="_blank"` will run the new page on the same process as your page. If the new page is executing expensive JS, your page\'s performance may suffer. To avoid this use `rel="noopener"`.'
                }
            }, {
                name: "download",
                description: {
                    kind: "markdown",
                    value: "This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). There are no restrictions on allowed values, though `/` and `\\` are converted to underscores. Most file systems limit some punctuation in file names, and browsers will adjust the suggested name accordingly.\n\n**Notes:**\n\n*   This attribute only works for [same-origin URLs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).\n*   Although HTTP(s) URLs need to be in the same-origin, [`blob:` URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL.createObjectURL) and [`data:` URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are allowed so that content generated by JavaScript, such as pictures created in an image-editor Web app, can be downloaded.\n*   If the HTTP header [`Content-Disposition:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) gives a different filename than this attribute, the HTTP header takes priority over this attribute.\n*   If `Content-Disposition:` is set to `inline`, Firefox prioritizes `Content-Disposition`, like the filename case, while Chrome prioritizes the `download` attribute."
                }
            }, {
                name: "ping",
                description: {
                    kind: "markdown",
                    value: 'Contains a space-separated list of URLs to which, when the hyperlink is followed, [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST "The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.") requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.'
                }
            }, {
                name: "rel",
                description: {
                    kind: "markdown",
                    value: "Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)."
                }
            }, {
                name: "hreflang",
                description: {
                    kind: "markdown",
                    value: 'This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt "Tags for Identifying Languages").'
                }
            }, {
                name: "type",
                description: {
                    kind: "markdown",
                    value: 'Specifies the media type in the form of a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type "MIME type: A\xA0MIME type\xA0(now properly called "media type", but\xA0also sometimes "content type") is a string sent along\xA0with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled\xA0audio/ogg, or an image file\xA0image/png).") for the linked URL. It is purely advisory, with no built-in functionality.'
                }
            }, {
                name: "referrerpolicy",
                description: "Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) to send when fetching the URL:\n\n*   `'no-referrer'` means the `Referer:` header will not be sent.\n*   `'no-referrer-when-downgrade'` means no `Referer:` header will be sent when navigating to an origin without HTTPS. This is the default behavior.\n*   `'origin'` means the referrer will be the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the page, not including information after the domain.\n*   `'origin-when-cross-origin'` meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.\n*   `'strict-origin-when-cross-origin'`\n*   `'unsafe-url'` means the referrer will include the origin and path, but not the fragment, password, or username. This is unsafe because it can leak data from secure URLs to insecure ones."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/a"
            }]
        }, {
            name: "em",
            description: {
                kind: "markdown",
                value: "The em element represents stress emphasis of its contents."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/em"
            }]
        }, {
            name: "strong",
            description: {
                kind: "markdown",
                value: "The strong element represents strong importance, seriousness, or urgency for its contents."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/strong"
            }]
        }, {
            name: "small",
            description: {
                kind: "markdown",
                value: "The small element represents side comments such as small print."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/small"
            }]
        }, {
            name: "s",
            description: {
                kind: "markdown",
                value: "The s element represents contents that are no longer accurate or no longer relevant."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/s"
            }]
        }, {
            name: "cite",
            description: {
                kind: "markdown",
                value: "The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/cite"
            }]
        }, {
            name: "q",
            description: {
                kind: "markdown",
                value: "The q element represents some phrasing content quoted from another source."
            },
            attributes: [{
                name: "cite",
                description: {
                    kind: "markdown",
                    value: "The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/q"
            }]
        }, {
            name: "dfn",
            description: {
                kind: "markdown",
                value: "The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/dfn"
            }]
        }, {
            name: "abbr",
            description: {
                kind: "markdown",
                value: "The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/abbr"
            }]
        }, {
            name: "ruby",
            description: {
                kind: "markdown",
                value: "The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]"
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/ruby"
            }]
        }, {
            name: "rb",
            description: {
                kind: "markdown",
                value: "The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/rb"
            }]
        }, {
            name: "rt",
            description: {
                kind: "markdown",
                value: "The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/rt"
            }]
        }, {
            name: "rp",
            description: {
                kind: "markdown",
                value: "The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/rp"
            }]
        }, {
            name: "time",
            description: {
                kind: "markdown",
                value: "The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below."
            },
            attributes: [{
                name: "datetime",
                description: {
                    kind: "markdown",
                    value: "This attribute indicates the time and/or date of the element and must be in one of the formats described below."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/time"
            }]
        }, {
            name: "code",
            description: {
                kind: "markdown",
                value: "The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/code"
            }]
        }, {
            name: "var",
            description: {
                kind: "markdown",
                value: "The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/var"
            }]
        }, {
            name: "samp",
            description: {
                kind: "markdown",
                value: "The samp element represents sample or quoted output from another program or computing system."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/samp"
            }]
        }, {
            name: "kbd",
            description: {
                kind: "markdown",
                value: "The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands)."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/kbd"
            }]
        }, {
            name: "sub",
            description: {
                kind: "markdown",
                value: "The sub element represents a subscript."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/sub"
            }]
        }, {
            name: "sup",
            description: {
                kind: "markdown",
                value: "The sup element represents a superscript."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/sup"
            }]
        }, {
            name: "i",
            description: {
                kind: "markdown",
                value: "The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/i"
            }]
        }, {
            name: "b",
            description: {
                kind: "markdown",
                value: "The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/b"
            }]
        }, {
            name: "u",
            description: {
                kind: "markdown",
                value: "The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/u"
            }]
        }, {
            name: "mark",
            description: {
                kind: "markdown",
                value: "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/mark"
            }]
        }, {
            name: "bdi",
            description: {
                kind: "markdown",
                value: "The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]"
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/bdi"
            }]
        }, {
            name: "bdo",
            description: {
                kind: "markdown",
                value: "The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]"
            },
            attributes: [{
                name: "dir",
                description: "The direction in which text should be rendered in this element's contents. Possible values are:\n\n*   `ltr`: Indicates that the text should go in a left-to-right direction.\n*   `rtl`: Indicates that the text should go in a right-to-left direction."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/bdo"
            }]
        }, {
            name: "span",
            description: {
                kind: "markdown",
                value: "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/span"
            }]
        }, {
            name: "br",
            description: {
                kind: "markdown",
                value: "The br element represents a line break."
            },
            attributes: [{
                name: "clear",
                description: "Indicates where to begin the next line after the break."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/br"
            }]
        }, {
            name: "wbr",
            description: {
                kind: "markdown",
                value: "The wbr element represents a line break opportunity."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/wbr"
            }]
        }, {
            name: "ins",
            description: {
                kind: "markdown",
                value: "The ins element represents an addition to the document."
            },
            attributes: [{
                name: "cite",
                description: "This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system."
            }, {
                name: "datetime",
                description: 'This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/ins"
            }]
        }, {
            name: "del",
            description: {
                kind: "markdown",
                value: "The del element represents a removal from the document."
            },
            attributes: [{
                name: "cite",
                description: {
                    kind: "markdown",
                    value: "A URI for a resource that explains the change (for example, meeting minutes)."
                }
            }, {
                name: "datetime",
                description: {
                    kind: "markdown",
                    value: 'This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").'
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/del"
            }]
        }, {
            name: "picture",
            description: {
                kind: "markdown",
                value: "The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/picture"
            }]
        }, {
            name: "img",
            description: {
                kind: "markdown",
                value: "An img element represents an image."
            },
            attributes: [{
                name: "alt",
                description: {
                    kind: "markdown",
                    value: 'This attribute defines an alternative text description of the image.\n\n**Note:** Browsers do not always display the image referenced by the element. This is the case for non-graphical browsers (including those used by people with visual impairments), if the user chooses not to display images, or if the browser cannot display the image because it is invalid or an [unsupported type](#Supported_image_formats). In these cases, the browser may replace the image with the text defined in this element\'s `alt` attribute. You should, for these reasons and others, provide a useful value for `alt` whenever possible.\n\n**Note:** Omitting this attribute altogether indicates that the image is a key part of the content, and no textual equivalent is available. Setting this attribute to an empty string (`alt=""`) indicates that this image is _not_ a key part of the content (decorative), and that non-visual browsers may omit it from rendering.'
                }
            }, {
                name: "src",
                description: {
                    kind: "markdown",
                    value: "The image URL. This attribute is mandatory for the `<img>` element. On browsers supporting `srcset`, `src` is treated like a candidate image with a pixel density descriptor `1x` unless an image with this pixel density descriptor is already defined in `srcset,` or unless `srcset` contains '`w`' descriptors."
                }
            }, {
                name: "srcset",
                description: {
                    kind: "markdown",
                    value: "A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. Each string is composed of:\n\n1.  a URL to an image,\n2.  optionally, whitespace followed by one of:\n    *   A width descriptor, or a positive integer directly followed by '`w`'. The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density.\n    *   A pixel density descriptor, which is a positive floating point number directly followed by '`x`'.\n\nIf no descriptor is specified, the source is assigned the default descriptor: `1x`.\n\nIt is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with '`2x`') are also invalid.\n\nThe user agent selects any one of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial for an example."
                }
            }, {
                name: "crossorigin",
                valueSet: "xo",
                description: {
                    kind: "markdown",
                    value: 'This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being "[tainted](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#What_is_a_tainted_canvas)." The allowed values are:'
                }
            }, {
                name: "usemap",
                description: {
                    kind: "markdown",
                    value: 'The partial URL (starting with \'#\') of an [image map](https://developer.mozilla.org/en-US/docs/HTML/Element/map) associated with the element.\n\n**Note:** You cannot use this attribute if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") element.'
                }
            }, {
                name: "ismap",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: 'This Boolean attribute indicates that the image is part of a server-side map. If so, the precise coordinates of a click are sent to the server.\n\n**Note:** This attribute is allowed only if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") element with a valid [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute.'
                }
            }, {
                name: "width",
                description: {
                    kind: "markdown",
                    value: "The intrinsic width of the image in pixels."
                }
            }, {
                name: "height",
                description: {
                    kind: "markdown",
                    value: "The intrinsic height of the image in pixels."
                }
            }, {
                name: "decoding",
                description: "Provides an image decoding hint to the browser. The allowed values are:"
            }, {
                name: "decoding",
                description: `\`sync\`

Decode the image synchronously for atomic presentation with other content.

\`async\`

Decode the image asynchronously to reduce delay in presenting other content.

\`auto\`

Default mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.`
            }, {
                name: "importance",
                description: "Indicates the relative importance of the resource. Priority hints are delegated using the values:"
            }, {
                name: "importance",
                description: "`auto`: Indicates\xA0**no\xA0preference**. The browser may use its own heuristics to decide the priority of the image.\n\n`high`: Indicates to the\xA0browser\xA0that the image is of\xA0**high** priority.\n\n`low`:\xA0Indicates to the\xA0browser\xA0that the image is of\xA0**low** priority."
            }, {
                name: "intrinsicsize",
                description: "This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it\u2019s the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)"
            }, {
                name: "referrerpolicy",
                description: "A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer:` The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer \"The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.\") header will not be sent.\n*   `no-referrer-when-downgrade:` No `Referer` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent\u2019s default behavior if no policy is otherwise specified.\n*   `origin:` The `Referer` header will include the page of origin's scheme, the host, and the port.\n*   `origin-when-cross-origin:` Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer's full path.\n*   `unsafe-url:` The `Referer` header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins."
            }, {
                name: "sizes",
                description: "A list of one or more strings separated by commas indicating a set of source sizes. Each source size consists of:\n\n1.  a media condition. This must be omitted for the last item.\n2.  a source size value.\n\nSource size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the `srcset` attribute, when those sources are described using width ('`w`') descriptors. The selected source size affects the intrinsic size of the image (the image\u2019s display size if no CSS styling is applied). If the `srcset` attribute is absent, or contains no values with a width (`w`) descriptor, then the `sizes` attribute has no effect."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/img"
            }]
        }, {
            name: "iframe",
            description: {
                kind: "markdown",
                value: "The iframe element represents a nested browsing context."
            },
            attributes: [{
                name: "src",
                description: {
                    kind: "markdown",
                    value: 'The URL of the page to embed. Use a value of `about:blank` to embed an empty page that conforms to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Inherited_origins). Also note that programatically removing an `<iframe>`\'s src attribute (e.g. via [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute "The Element method removeAttribute() removes the attribute with the specified name from the element.")) causes `about:blank` to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.'
                }
            }, {
                name: "srcdoc",
                description: {
                    kind: "markdown",
                    value: "Inline HTML to embed, overriding the `src` attribute. If a browser does not support the `srcdoc` attribute, it will fall back to the URL in the `src` attribute."
                }
            }, {
                name: "name",
                description: {
                    kind: "markdown",
                    value: 'A targetable name for the embedded browsing context. This can be used in the `target` attribute of the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL."), [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."), or [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base "The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.") elements; the `formtarget` attribute of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") elements; or the `windowName` parameter in the [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open "The\xA0Window interface\'s open() method loads the specified resource into the browsing context (window, <iframe> or tab) with the specified name. If the name doesn\'t exist, then a new window is opened and the specified resource is loaded into its browsing context.") method.'
                }
            }, {
                name: "sandbox",
                valueSet: "sb",
                description: {
                    kind: "markdown",
                    value: 'Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:\n\n*   `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.\n*   `allow-modals`: Lets the resource [open modal windows](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag).\n*   `allow-orientation-lock`: Lets the resource [lock the screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation).\n*   `allow-pointer-lock`: Lets the resource use the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/WebAPI/Pointer_Lock).\n*   `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.\n*   `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.\n*   `allow-presentation`: Lets the resource start a [presentation session](https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest).\n*   `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the [same-origin policy](https://developer.mozilla.org/en-US/docs/Glossary/same-origin_policy "same-origin policy: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.").\n*   `allow-scripts`: Lets the resource run scripts (but not create popup windows).\n*   `allow-storage-access-by-user-activation` : Lets the resource request access to the parent\'s storage capabilities with the [Storage Access API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API).\n*   `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).\n*   `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.\n\n**Notes about sandboxing:**\n\n*   When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute \u2014 making it no more secure than not using the `sandbox` attribute at all.\n*   Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` \u2014 such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.\n*   The `sandbox` attribute is unsupported in Internet Explorer 9 and earlier.'
                }
            }, {
                name: "seamless",
                valueSet: "v"
            }, {
                name: "allowfullscreen",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: 'Set to `true` if the `<iframe>` can activate fullscreen mode by calling the [`requestFullscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen "The Element.requestFullscreen() method issues an asynchronous request to make the element be displayed in full-screen mode.") method.'
                }
            }, {
                name: "width",
                description: {
                    kind: "markdown",
                    value: "The width of the frame in CSS pixels. Default is `300`."
                }
            }, {
                name: "height",
                description: {
                    kind: "markdown",
                    value: "The height of the frame in CSS pixels. Default is `150`."
                }
            }, {
                name: "allow",
                description: "Specifies a [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for the `<iframe>`."
            }, {
                name: "allowpaymentrequest",
                description: "Set to `true` if a cross-origin `<iframe>` should be allowed to invoke the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API)."
            }, {
                name: "allowpaymentrequest",
                description: 'This attribute is considered a legacy attribute and redefined as `allow="payment"`.'
            }, {
                name: "csp",
                description: 'A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) enforced for the embedded resource. See [`HTMLIFrameElement.csp`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp "The csp property of the HTMLIFrameElement interface specifies the Content Security Policy that an embedded document must agree to enforce upon itself.") for details.'
            }, {
                name: "importance",
                description: `The download priority of the resource in the \`<iframe>\`'s \`src\` attribute. Allowed values:

\`auto\` (default)

No preference. The browser uses its own heuristics to decide the priority of the resource.

\`high\`

The resource should be downloaded before other lower-priority page resources.

\`low\`

The resource should be downloaded after other higher-priority page resources.`
            }, {
                name: "referrerpolicy",
                description: 'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the frame\'s resource:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS\u2192HTTPS), but don\'t send it to a less secure destination (HTTPS\u2192HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS\u2192HTTPS), and send no header to a less secure destination (HTTPS\u2192HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/iframe"
            }]
        }, {
            name: "embed",
            description: {
                kind: "markdown",
                value: "The embed element provides an integration point for an external (typically non-HTML) application or interactive content."
            },
            attributes: [{
                name: "src",
                description: {
                    kind: "markdown",
                    value: "The URL\xA0of the resource being embedded."
                }
            }, {
                name: "type",
                description: {
                    kind: "markdown",
                    value: "The MIME\xA0type to use to select the plug-in to instantiate."
                }
            }, {
                name: "width",
                description: {
                    kind: "markdown",
                    value: "The displayed width of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed."
                }
            }, {
                name: "height",
                description: {
                    kind: "markdown",
                    value: "The displayed height of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/embed"
            }]
        }, {
            name: "object",
            description: {
                kind: "markdown",
                value: "The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin."
            },
            attributes: [{
                name: "data",
                description: {
                    kind: "markdown",
                    value: "The address of the resource as a valid URL. At least one of **data** and **type** must be defined."
                }
            }, {
                name: "type",
                description: {
                    kind: "markdown",
                    value: "The [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource specified by **data**. At least one of **data** and **type** must be defined."
                }
            }, {
                name: "typemustmatch",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute indicates if the **type** attribute and the actual [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource must match to be used."
                }
            }, {
                name: "name",
                description: {
                    kind: "markdown",
                    value: "The name of valid browsing context (HTML5), or the name of the control (HTML 4)."
                }
            }, {
                name: "usemap",
                description: {
                    kind: "markdown",
                    value: "A hash-name reference to a [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map \"The HTML <map> element is used with <area> elements to define an image map (a clickable link area).\") element; that is a '#' followed by the value of a [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map#attr-name) of a map element."
                }
            }, {
                name: "form",
                description: {
                    kind: "markdown",
                    value: 'The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document.'
                }
            }, {
                name: "width",
                description: {
                    kind: "markdown",
                    value: "The width of the display resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))"
                }
            }, {
                name: "height",
                description: {
                    kind: "markdown",
                    value: "The height of the displayed resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))"
                }
            }, {
                name: "archive",
                description: "A space-separated list of URIs for archives of resources for the object."
            }, {
                name: "border",
                description: "The width of a border around the control, in pixels."
            }, {
                name: "classid",
                description: "The URI of the object's implementation. It can be used together with, or in place of, the **data** attribute."
            }, {
                name: "codebase",
                description: "The base path used to resolve relative URIs specified by **classid**, **data**, or **archive**. If not specified, the default is the base URI of the current document."
            }, {
                name: "codetype",
                description: "The content type of the data specified by **classid**."
            }, {
                name: "declare",
                description: "The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. In HTML5, repeat the <object> element completely each that that the resource is reused."
            }, {
                name: "standby",
                description: "A message that the browser can show while loading the object's implementation and data."
            }, {
                name: "tabindex",
                description: "The position of the element in the tabbing navigation order for the current document."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/object"
            }]
        }, {
            name: "param",
            description: {
                kind: "markdown",
                value: "The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own."
            },
            attributes: [{
                name: "name",
                description: {
                    kind: "markdown",
                    value: "Name of the parameter."
                }
            }, {
                name: "value",
                description: {
                    kind: "markdown",
                    value: "Specifies the value of the parameter."
                }
            }, {
                name: "type",
                description: 'Only used if the `valuetype` is set to "ref". Specifies the MIME type of values found at the URI specified by value.'
            }, {
                name: "valuetype",
                description: `Specifies the type of the \`value\` attribute. Possible values are:

*   data: Default value. The value is passed to the object's implementation as a string.
*   ref: The value is a URI to a resource where run-time values are stored.
*   object: An ID of another [\`<object>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object "The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.") in the same document.`
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/param"
            }]
        }, {
            name: "video",
            description: {
                kind: "markdown",
                value: "A video element is used for playing videos or movies, and audio files with captions."
            },
            attributes: [{
                name: "src"
            }, {
                name: "crossorigin",
                valueSet: "xo"
            }, {
                name: "poster"
            }, {
                name: "preload",
                valueSet: "pl"
            }, {
                name: "autoplay",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data."
                }
            }, {
                name: "mediagroup"
            }, {
                name: "loop",
                valueSet: "v"
            }, {
                name: "muted",
                valueSet: "v"
            }, {
                name: "controls",
                valueSet: "v"
            }, {
                name: "width"
            }, {
                name: "height"
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/video"
            }]
        }, {
            name: "audio",
            description: {
                kind: "markdown",
                value: "An audio element represents a sound or audio stream."
            },
            attributes: [{
                name: "src",
                description: {
                    kind: "markdown",
                    value: 'The URL of the audio to embed. This is subject to [HTTP access controls](https://developer.mozilla.org/en-US/docs/HTTP_access_control). This is optional; you may instead use the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element within the audio block to specify the audio to embed.'
                }
            }, {
                name: "crossorigin",
                valueSet: "xo",
                description: {
                    kind: "markdown",
                    value: 'This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\nanonymous\n\nSends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.\n\nuse-credentials\n\nSends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.\n\nWhen not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes) for additional information.'
                }
            }, {
                name: "preload",
                valueSet: "pl",
                description: {
                    kind: "markdown",
                    value: "This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:\n\n*   `none`: Indicates that the audio should not be preloaded.\n*   `metadata`: Indicates that only audio metadata (e.g. length) is fetched.\n*   `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.\n*   _empty string_: A synonym of the `auto` value.\n\nIf not set, `preload`'s default value is browser-defined (i.e. each browser may have its own default value). The spec advises it to be set to `metadata`.\n\n**Usage notes:**\n\n*   The `autoplay` attribute has precedence over\xA0`preload`. If `autoplay` is specified, the browser would obviously need to start downloading the audio for playback.\n*   The browser is not forced by the specification to follow the value of this attribute; it is a mere hint."
                }
            }, {
                name: "autoplay",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: `A Boolean attribute:\xA0if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.

**Note**: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.`
                }
            }, {
                name: "mediagroup"
            }, {
                name: "loop",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "A Boolean attribute:\xA0if specified, the audio player will\xA0automatically seek back to the start\xA0upon reaching the end of the audio."
                }
            }, {
                name: "muted",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is `false`."
                }
            }, {
                name: "controls",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/audio"
            }]
        }, {
            name: "source",
            description: {
                kind: "markdown",
                value: "The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own."
            },
            attributes: [{
                name: "src",
                description: {
                    kind: "markdown",
                    value: 'Required for [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:\xA0the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document."), address of the media resource. The value of this attribute is ignored when the `<source>` element is placed inside a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.'
                }
            }, {
                name: "type",
                description: {
                    kind: "markdown",
                    value: "The MIME-type of the resource, optionally with a `codecs` parameter. See [RFC 4281](https://tools.ietf.org/html/rfc4281) for information about how to specify codecs."
                }
            }, {
                name: "sizes",
                description: 'Is a list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. This information is used by the browser to determine, before laying the page out, which image defined in [`srcset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-srcset) to use.  \nThe `sizes` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.'
            }, {
                name: "srcset",
                description: "A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use. Each string is composed of:\n\n1.  one URL to an image,\n2.  a width descriptor, that is a positive integer directly followed by `'w'`. The default value, if missing, is the infinity.\n3.  a pixel density descriptor, that is a positive floating number directly followed by `'x'`. The default value, if missing, is `1x`.\n\nEach string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor.  \nThe browser chooses the most adequate image to display at a given point of time.  \nThe `srcset` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source \"The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.\") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture \"The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.\") element."
            }, {
                name: "media",
                description: '[Media query](https://developer.mozilla.org/en-US/docs/CSS/Media_queries) of the resource\'s intended media; this should be used only in a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/source"
            }]
        }, {
            name: "track",
            description: {
                kind: "markdown",
                value: "The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own."
            },
            attributes: [{
                name: "default",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one `track` element per media element."
                }
            }, {
                name: "kind",
                valueSet: "tk",
                description: {
                    kind: "markdown",
                    value: "How the text track is meant to be used. If omitted the default kind is `subtitles`. If the attribute is not present, it will use the `subtitles`. If the attribute contains an invalid value, it will use `metadata`. (Versions of Chrome earlier than 52 treated an invalid value as `subtitles`.)\xA0The following keywords are allowed:\n\n*   `subtitles`\n    *   Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.\n    *   Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.\n*   `captions`\n    *   Closed captions provide a transcription and possibly a translation of audio.\n    *   It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).\n    *   Suitable for users who are deaf or when the sound is muted.\n*   `descriptions`\n    *   Textual description of the video content.\n    *   Suitable for users who are blind or where the video cannot be seen.\n*   `chapters`\n    *   Chapter titles are intended to be used when the user is navigating the media resource.\n*   `metadata`\n    *   Tracks used by scripts. Not visible to the user."
                }
            }, {
                name: "label",
                description: {
                    kind: "markdown",
                    value: "A user-readable title of the text track which is used by the browser when listing available text tracks."
                }
            }, {
                name: "src",
                description: {
                    kind: "markdown",
                    value: 'Address of the track (`.vtt` file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document \u2014 unless the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:\xA0the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document.") parent element of the `track` element has a [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute.'
                }
            }, {
                name: "srclang",
                description: {
                    kind: "markdown",
                    value: "Language of the track text data. It must be a valid [BCP 47](https://r12a.github.io/app-subtags/) language tag. If the `kind` attribute is set to\xA0`subtitles,` then `srclang` must be defined."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/track"
            }]
        }, {
            name: "map",
            description: {
                kind: "markdown",
                value: "The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children."
            },
            attributes: [{
                name: "name",
                description: {
                    kind: "markdown",
                    value: "The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/map"
            }]
        }, {
            name: "area",
            description: {
                kind: "markdown",
                value: "The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map."
            },
            attributes: [{
                name: "alt"
            }, {
                name: "coords"
            }, {
                name: "shape",
                valueSet: "sh"
            }, {
                name: "href"
            }, {
                name: "target"
            }, {
                name: "download"
            }, {
                name: "ping"
            }, {
                name: "rel"
            }, {
                name: "hreflang"
            }, {
                name: "type"
            }, {
                name: "accesskey",
                description: "Specifies a keyboard navigation accelerator for the element. Pressing ALT or a similar key in association with the specified character selects the form control correlated with that key sequence. Page designers are forewarned to avoid key sequences already bound to browsers. This attribute is global since HTML5."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/area"
            }]
        }, {
            name: "table",
            description: {
                kind: "markdown",
                value: "The table element represents data with more than one dimension, in the form of a table."
            },
            attributes: [{
                name: "border"
            }, {
                name: "align",
                description: 'This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values:\n\n*   left: the table is displayed on the left side of the document;\n*   center: the table is displayed in the center of the document;\n*   right: the table is displayed on the right side of the document.\n\n**Usage Note**\n\n*   **Do not use this attribute**, as it has been deprecated. The [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data \u2014 that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). Set [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") and [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") to `auto` or [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.") to `0 auto` to achieve an effect that is similar to the align attribute.\n*   Prior to Firefox 4, Firefox also supported the `middle`, `absmiddle`, and `abscenter` values as synonyms of `center`, in quirks mode only.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/table"
            }]
        }, {
            name: "caption",
            description: {
                kind: "markdown",
                value: "The caption element represents the title of the table that is its parent, if it has a parent and that is a table element."
            },
            attributes: [{
                name: "align",
                description: `This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values:

\`left\`

The caption is displayed to the left of the table.

\`top\`

The caption is displayed above the table.

\`right\`

The caption is displayed to the right of the table.

\`bottom\`

The caption is displayed below the table.

**Usage note:** Do not use this attribute, as it has been deprecated. The [\`<caption>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption "The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>.") element should be styled using the [CSS](https://developer.mozilla.org/en-US/docs/CSS) properties [\`caption-side\`](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side "The caption-side CSS property puts the content of a table's <caption> on the specified side. The values are relative to the writing-mode of the table.") and [\`text-align\`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.").`
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/caption"
            }]
        }, {
            name: "colgroup",
            description: {
                kind: "markdown",
                value: "The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element."
            },
            attributes: [{
                name: "span"
            }, {
                name: "align",
                description: 'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug\xA02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed. The descendant [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") elements may override this value using their own [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-align) attribute.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use one `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property can be used.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/colgroup"
            }]
        }, {
            name: "col",
            description: {
                kind: "markdown",
                value: "If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup."
            },
            attributes: [{
                name: "span"
            }, {
                name: "align",
                description: 'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug\xA02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, its value is inherited from the [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-align) of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element this `<col>` element belongs too. If there are none, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/col"
            }]
        }, {
            name: "tbody",
            description: {
                kind: "markdown",
                value: "The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table."
            },
            attributes: [{
                name: "align",
                description: 'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes.\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/tbody"
            }]
        }, {
            name: "thead",
            description: {
                kind: "markdown",
                value: "The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table."
            },
            attributes: [{
                name: "align",
                description: 'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-charoff) attributes Unimplemented (see [bug\xA02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/thead"
            }]
        }, {
            name: "tfoot",
            description: {
                kind: "markdown",
                value: "The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table."
            },
            attributes: [{
                name: "align",
                description: 'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes Unimplemented (see [bug\xA02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/tfoot"
            }]
        }, {
            name: "tr",
            description: {
                kind: "markdown",
                value: "The tr element represents a row of cells in a table."
            },
            attributes: [{
                name: "align",
                description: 'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") which specifies how the cell\'s context should be aligned horizontally within the cells in the row; this is shorthand for using `align` on every cell in the row individually. Possible values are:\n\n`left`\n\nAlign the content of each cell at its left edge.\n\n`center`\n\nCenter the contents of each cell between their left and right edges.\n\n`right`\n\nAlign the content of each cell at its right edge.\n\n`justify`\n\nWiden whitespaces within the text of each cell so that the text fills the full width of each cell (full justification).\n\n`char`\n\nAlign each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-charoff) to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported.\n\nIf no value is expressly set for `align`, the parent node\'s value is inherited.\n\nInstead of using the obsolete `align` attribute, you should instead use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to establish `left`, `center`, `right`, or `justify` alignment for the row\'s cells. To apply character-based alignment, set the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the alignment character (such as `"."` or `","`).'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/tr"
            }]
        }, {
            name: "td",
            description: {
                kind: "markdown",
                value: "The td element represents a data cell in a table."
            },
            attributes: [{
                name: "colspan"
            }, {
                name: "rowspan"
            }, {
                name: "headers"
            }, {
                name: "abbr",
                description: `This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.

**Note:** Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the **title** attribute.`
            }, {
                name: "align",
                description: 'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-charoff) attributes Unimplemented (see [bug\xA02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char). Unimplemented in CSS3.'
            }, {
                name: "axis",
                description: "This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard."
            }, {
                name: "bgcolor",
                description: `This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings:

\xA0

\`black\` = "#000000"

\xA0

\`green\` = "#008000"

\xA0

\`silver\` = "#C0C0C0"

\xA0

\`lime\` = "#00FF00"

\xA0

\`gray\` = "#808080"

\xA0

\`olive\` = "#808000"

\xA0

\`white\` = "#FFFFFF"

\xA0

\`yellow\` = "#FFFF00"

\xA0

\`maroon\` = "#800000"

\xA0

\`navy\` = "#000080"

\xA0

\`red\` = "#FF0000"

\xA0

\`blue\` = "#0000FF"

\xA0

\`purple\` = "#800080"

\xA0

\`teal\` = "#008080"

\xA0

\`fuchsia\` = "#FF00FF"

\xA0

\`aqua\` = "#00FFFF"

**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [\`<td>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To create a similar effect use the [\`background-color\`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/CSS) instead.`
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/td"
            }]
        }, {
            name: "th",
            description: {
                kind: "markdown",
                value: "The th element represents a header cell in a table."
            },
            attributes: [{
                name: "colspan"
            }, {
                name: "rowspan"
            }, {
                name: "headers"
            }, {
                name: "scope",
                valueSet: "s"
            }, {
                name: "sorted"
            }, {
                name: "abbr",
                description: {
                    kind: "markdown",
                    value: "This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself."
                }
            }, {
                name: "align",
                description: 'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-charoff) attributes.\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char). Unimplemented in CSS3.'
            }, {
                name: "axis",
                description: "This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard: use the [`scope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) attribute instead."
            }, {
                name: "bgcolor",
                description: `This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings:

\xA0

\`black\` = "#000000"

\xA0

\`green\` = "#008000"

\xA0

\`silver\` = "#C0C0C0"

\xA0

\`lime\` = "#00FF00"

\xA0

\`gray\` = "#808080"

\xA0

\`olive\` = "#808000"

\xA0

\`white\` = "#FFFFFF"

\xA0

\`yellow\` = "#FFFF00"

\xA0

\`maroon\` = "#800000"

\xA0

\`navy\` = "#000080"

\xA0

\`red\` = "#FF0000"

\xA0

\`blue\` = "#0000FF"

\xA0

\`purple\` = "#800080"

\xA0

\`teal\` = "#008080"

\xA0

\`fuchsia\` = "#FF00FF"

\xA0

\`aqua\` = "#00FFFF"

**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [\`<th>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th "The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). To create a similar effect use the [\`background-color\`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) instead.`
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/th"
            }]
        }, {
            name: "form",
            description: {
                kind: "markdown",
                value: "The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing."
            },
            attributes: [{
                name: "accept-charset",
                description: {
                    kind: "markdown",
                    value: 'A space- or comma-delimited list of character encodings that the server accepts. The browser uses them in the order in which they are listed. The default value, the reserved string `"UNKNOWN"`, indicates the same encoding as that of the document containing the form element.  \nIn previous versions of HTML, the different character encodings could be delimited by spaces or commas. In HTML5, only spaces are allowed as delimiters.'
                }
            }, {
                name: "action",
                description: {
                    kind: "markdown",
                    value: 'The URI of a program that processes the form information. This value can be overridden by a [`formaction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
                }
            }, {
                name: "autocomplete",
                valueSet: "o",
                description: {
                    kind: "markdown",
                    value: "Indicates whether input elements can by default have their values automatically completed by the browser. This setting can be overridden by an `autocomplete` attribute on an element belonging to the form. Possible values are:\n\n*   `off`: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries.\n*   `on`: The browser can automatically complete values based on values that the user has previously entered in the form.\n\nFor most modern browsers (including Firefox 38+, Google Chrome 34+, IE 11+) setting the autocomplete attribute will not prevent a browser's password manager from asking the user if they want to store login fields (username and password), if the user permits the storage the browser will autofill the login the next time the user visits the page. See [The autocomplete attribute and login fields](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields)."
                }
            }, {
                name: "enctype",
                valueSet: "et",
                description: {
                    kind: "markdown",
                    value: 'When the value of the `method` attribute is `post`, enctype is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: The value used for an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the `type` attribute set to "file".\n*   `text/plain`: (HTML5)\n\nThis value can be overridden by a [`formenctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formenctype) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
                }
            }, {
                name: "method",
                valueSet: "m",
                description: {
                    kind: "markdown",
                    value: 'The [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) method that the browser uses to submit the form. Possible values are:\n\n*   `post`: Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; form data are included in the body of the form and sent to the server.\n*   `get`: Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a \'?\' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n*   `dialog`: Use when the form is inside a\xA0[`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog "The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window.") element to close the dialog when submitted.\n\nThis value can be overridden by a [`formmethod`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
                }
            }, {
                name: "name",
                description: {
                    kind: "markdown",
                    value: "The name of the form. In HTML 4, its use is deprecated (`id` should be used instead). It must be unique among the forms in a document and not just an empty string in HTML 5."
                }
            }, {
                name: "novalidate",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: 'This Boolean attribute indicates that the form is not to be validated when submitted. If this attribute is not specified (and therefore the form is validated), this default setting can be overridden by a [`formnovalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element belonging to the form.'
                }
            }, {
                name: "target",
                description: {
                    kind: "markdown",
                    value: 'A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a _browsing context_ (for example, tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed HTML 4 window or HTML5 browsing context.\n*   `_parent`: Load the response into the HTML 4 frameset parent of the current frame, or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: HTML 4: Load the response into the full original window, and cancel all other frames. HTML5: Load the response into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n*   _iframename_: The response is displayed in a named [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one.").\n\nHTML5: This value can be overridden by a [`formtarget`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
                }
            }, {
                name: "accept",
                description: 'A comma-separated list of content types that the server accepts.\n\n**Usage note:** This attribute has been removed in HTML5 and should no longer be used. Instead, use the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) attribute of the specific [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
            }, {
                name: "autocapitalize",
                description: "This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value for textual form control descendants should be automatically capitalized as it is entered/edited by the user. If the `autocapitalize` attribute is specified on an individual form control descendant, it trumps the form-wide `autocapitalize` setting. The non-deprecated values are available in iOS 5 and later. The default value is `sentences`. Possible values are:\n\n*   `none`: Completely disables automatic capitalization\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/form"
            }]
        }, {
            name: "label",
            description: {
                kind: "markdown",
                value: "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself."
            },
            attributes: [{
                name: "form",
                description: {
                    kind: "markdown",
                    value: 'The [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element with which the label is associated (its _form owner_). If specified, the value of the attribute is the `id` of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. This lets you place label elements anywhere within a document, not just as descendants of their form elements.'
                }
            }, {
                name: "for",
                description: {
                    kind: "markdown",
                    value: "The [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) of a [labelable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Form_labelable) form-related element in the same document as the `<label>` element. The first element in the document with an `id` matching the value of the `for` attribute is the _labeled control_ for this label element, if it is a labelable element. If it is\xA0not labelable then the `for` attribute has no effect. If there are other elements which also match the `id` value, later in the document, they are not considered.\n\n**Note**: A `<label>` element can have both a `for` attribute and a contained control element, as long as the `for` attribute points to the contained control element."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/label"
            }]
        }, {
            name: "input",
            description: {
                kind: "markdown",
                value: "The input element represents a typed data field, usually with a form control to allow the user to edit the data."
            },
            attributes: [{
                name: "accept"
            }, {
                name: "alt"
            }, {
                name: "autocomplete",
                valueSet: "inputautocomplete"
            }, {
                name: "autofocus",
                valueSet: "v"
            }, {
                name: "checked",
                valueSet: "v"
            }, {
                name: "dirname"
            }, {
                name: "disabled",
                valueSet: "v"
            }, {
                name: "form"
            }, {
                name: "formaction"
            }, {
                name: "formenctype",
                valueSet: "et"
            }, {
                name: "formmethod",
                valueSet: "fm"
            }, {
                name: "formnovalidate",
                valueSet: "v"
            }, {
                name: "formtarget"
            }, {
                name: "height"
            }, {
                name: "inputmode",
                valueSet: "im"
            }, {
                name: "list"
            }, {
                name: "max"
            }, {
                name: "maxlength"
            }, {
                name: "min"
            }, {
                name: "minlength"
            }, {
                name: "multiple",
                valueSet: "v"
            }, {
                name: "name"
            }, {
                name: "pattern"
            }, {
                name: "placeholder"
            }, {
                name: "readonly",
                valueSet: "v"
            }, {
                name: "required",
                valueSet: "v"
            }, {
                name: "size"
            }, {
                name: "src"
            }, {
                name: "step"
            }, {
                name: "type",
                valueSet: "t"
            }, {
                name: "value"
            }, {
                name: "width"
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/input"
            }]
        }, {
            name: "button",
            description: {
                kind: "markdown",
                value: "The button element represents a button labeled by its contents."
            },
            attributes: [{
                name: "autofocus",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified."
                }
            }, {
                name: "disabled",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: 'This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element with the **disabled** attribute set, then the button is enabled.\n\nFirefox will, unlike other browsers, by default, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Use the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-autocomplete) attribute to control this feature.'
                }
            }, {
                name: "form",
                description: {
                    kind: "markdown",
                    value: 'The form element that the button is associated with (its _form owner_). The value of the attribute must be the **id** attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. If this attribute is not specified, the `<button>` element will be associated to an ancestor [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element, if one exists. This attribute enables you to associate `<button>` elements to [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements anywhere within a document, not just as descendants of [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements.'
                }
            }, {
                name: "formaction",
                description: {
                    kind: "markdown",
                    value: "The URI of a program that processes the information submitted by the button. If specified, it overrides the [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action) attribute of the button's form owner."
                }
            }, {
                name: "formenctype",
                valueSet: "et",
                description: {
                    kind: "markdown",
                    value: 'If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: Use this value if you are using an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) attribute set to `file`.\n*   `text/plain`\n\nIf this attribute is specified, it overrides the [`enctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype) attribute of the button\'s form owner.'
                }
            }, {
                name: "formmethod",
                valueSet: "fm",
                description: {
                    kind: "markdown",
                    value: "If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:\n\n*   `post`: The data from the form are included in the body of the form and sent to the server.\n*   `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n\nIf specified, this attribute overrides the [`method`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method) attribute of the button's form owner."
                }
            }, {
                name: "formnovalidate",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the [`novalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) attribute of the button's form owner."
                }
            }, {
                name: "formtarget",
                description: {
                    kind: "markdown",
                    value: "If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the [`target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target) attribute of the button's form owner. The following keywords have special meanings:\n\n*   `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed browsing context.\n*   `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`."
                }
            }, {
                name: "name",
                description: {
                    kind: "markdown",
                    value: "The name of the button, which is submitted with the form data."
                }
            }, {
                name: "type",
                valueSet: "bt",
                description: {
                    kind: "markdown",
                    value: "The type of the button. Possible values are:\n\n*   `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.\n*   `reset`: The button resets all the controls to their initial values.\n*   `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur."
                }
            }, {
                name: "value",
                description: {
                    kind: "markdown",
                    value: "The initial value of the button. It defines the value associated with the button which is submitted with the form data. This value is passed to the server in params when the form is submitted."
                }
            }, {
                name: "autocomplete",
                description: 'The use of this attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Setting the value of this attribute to `off` (i.e. `autocomplete="off"`) disables this feature. See [bug\xA0654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072 "if disabled state is changed with javascript, the normal state doesn\'t return after refreshing the page").'
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/button"
            }]
        }, {
            name: "select",
            description: {
                kind: "markdown",
                value: "The select element represents a control for selecting amongst a set of options."
            },
            attributes: [{
                name: "autocomplete",
                valueSet: "inputautocomplete",
                description: {
                    kind: "markdown",
                    value: 'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") providing a hint for a [user agent\'s](https://developer.mozilla.org/en-US/docs/Glossary/user_agent "user agent\'s: A user agent is a computer program representing a person, for example, a browser in a Web context.") autocomplete feature. See [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete.'
                }
            }, {
                name: "autofocus",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute."
                }
            }, {
                name: "disabled",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example `fieldset`; if there is no containing element with the `disabled` attribute set, then the control is enabled."
                }
            }, {
                name: "form",
                description: {
                    kind: "markdown",
                    value: 'This attribute lets you specify the form element to\xA0which\xA0the select element is associated\xA0(that is, its "form owner"). If this attribute is specified, its value must be the same as the `id` of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements.'
                }
            }, {
                name: "multiple",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown."
                }
            }, {
                name: "name",
                description: {
                    kind: "markdown",
                    value: "This attribute is used to specify the name of the control."
                }
            }, {
                name: "required",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "A Boolean attribute indicating that an option with a non-empty string value must be selected."
                }
            }, {
                name: "size",
                description: {
                    kind: "markdown",
                    value: "If the control is presented as a scrolling list box (e.g. when `multiple` is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.\n\n**Note:** According to the HTML5 specification, the default value for size should be 1; however, in practice, this has been found to break some web sites, and no other browser currently does that, so Mozilla has opted to continue to return 0 for the time being with Firefox."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/select"
            }]
        }, {
            name: "datalist",
            description: {
                kind: "markdown",
                value: "The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/datalist"
            }]
        }, {
            name: "optgroup",
            description: {
                kind: "markdown",
                value: "The optgroup element represents a group of option elements with a common label."
            },
            attributes: [{
                name: "disabled",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones."
                }
            }, {
                name: "label",
                description: {
                    kind: "markdown",
                    value: "The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/optgroup"
            }]
        }, {
            name: "option",
            description: {
                kind: "markdown",
                value: "The option element represents an option in a select element or as part of a list of suggestions in a datalist element."
            },
            attributes: [{
                name: "disabled",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: 'If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won\'t receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup "The HTML <optgroup> element creates a grouping of options within a <select> element.") element.'
                }
            }, {
                name: "label",
                description: {
                    kind: "markdown",
                    value: "This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content."
                }
            }, {
                name: "selected",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: 'If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element whose [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute is not set, only one single `<option>` of this [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element may have the `selected` attribute.'
                }
            }, {
                name: "value",
                description: {
                    kind: "markdown",
                    value: "The content of this attribute represents the value to be submitted with the form, should this option be selected.\xA0If this attribute is omitted, the value is taken from the text content of the option element."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/option"
            }]
        }, {
            name: "textarea",
            description: {
                kind: "markdown",
                value: "The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value."
            },
            attributes: [{
                name: "autocomplete",
                valueSet: "inputautocomplete",
                description: {
                    kind: "markdown",
                    value: 'This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:\n\n*   `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.\n*   `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.\n\nIf the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element\'s form owner. The form owner is either the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete) attribute in [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.").'
                }
            }, {
                name: "autofocus",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified."
                }
            }, {
                name: "cols",
                description: {
                    kind: "markdown",
                    value: "The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is `20`."
                }
            }, {
                name: "dirname"
            }, {
                name: "disabled",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: 'This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element when the `disabled` attribute is set, the control is enabled.'
                }
            }, {
                name: "form",
                description: {
                    kind: "markdown",
                    value: 'The form element that the `<textarea>` element is associated with (its "form owner"). The value of the attribute must be the `id` of a form element in the same document. If this attribute is not specified, the `<textarea>` element must be a descendant of a form element. This attribute enables you to place `<textarea>` elements anywhere within a document, not just as descendants of form elements.'
                }
            }, {
                name: "inputmode",
                valueSet: "im"
            }, {
                name: "maxlength",
                description: {
                    kind: "markdown",
                    value: "The maximum number of characters (unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters."
                }
            }, {
                name: "minlength",
                description: {
                    kind: "markdown",
                    value: "The minimum number of characters (unicode code points) required that the user should enter."
                }
            }, {
                name: "name",
                description: {
                    kind: "markdown",
                    value: "The name of the control."
                }
            }, {
                name: "placeholder",
                description: {
                    kind: "markdown",
                    value: 'A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.\n\n**Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they are _not_ a substitute for a proper [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label "The HTML <label> element represents a caption for an item in a user interface.") element tied to the input. See [Labels and placeholders](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Labels_and_placeholders "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") in [<input>: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") for a full explanation.'
                }
            }, {
                name: "readonly",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the `disabled` attribute, the `readonly` attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form."
                }
            }, {
                name: "required",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This attribute specifies that the user must fill in a value before submitting a form."
                }
            }, {
                name: "rows",
                description: {
                    kind: "markdown",
                    value: "The number of visible text lines for the control."
                }
            }, {
                name: "wrap",
                valueSet: "w",
                description: {
                    kind: "markdown",
                    value: "Indicates how the control wraps text. Possible values are:\n\n*   `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must also be specified for this to take effect.\n*   `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.\n*   `off` : Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.\n\nIf this attribute is not specified, `soft` is its default value."
                }
            }, {
                name: "autocapitalize",
                description: "This is a non-standard attribute supported by WebKit on iOS (therefore nearly all browsers running on iOS, including Safari, Firefox, and Chrome), which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:\n\n*   `none`: Completely disables automatic capitalization.\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5."
            }, {
                name: "spellcheck",
                description: "Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. the value can be:\n\n*   `true`: Indicates that the element needs to have its spelling and grammar checked.\n*   `default` : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value.\n*   `false` : Indicates that the element should not be spell checked."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/textarea"
            }]
        }, {
            name: "output",
            description: {
                kind: "markdown",
                value: "The output element represents the result of a calculation performed by the application, or the result of a user action."
            },
            attributes: [{
                name: "for",
                description: {
                    kind: "markdown",
                    value: "A space-separated list of other elements\u2019 [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)s, indicating that those elements contributed input values to (or otherwise affected) the calculation."
                }
            }, {
                name: "form",
                description: {
                    kind: "markdown",
                    value: 'The [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) that this element is associated with (its "form owner"). The value of the attribute must be an `id` of a form element in the same document. If this attribute is not specified, the output element must be a descendant of a form element. This attribute enables you to place output elements anywhere within a document, not just as descendants of their form elements.'
                }
            }, {
                name: "name",
                description: {
                    kind: "markdown",
                    value: 'The name of the element, exposed in the [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement "The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.") API.'
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/output"
            }]
        }, {
            name: "progress",
            description: {
                kind: "markdown",
                value: "The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed."
            },
            attributes: [{
                name: "value",
                description: {
                    kind: "markdown",
                    value: "This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted. If there is no `value` attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take."
                }
            }, {
                name: "max",
                description: {
                    kind: "markdown",
                    value: "This attribute describes how much work the task indicated by the `progress` element requires. The `max` attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 1."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/progress"
            }]
        }, {
            name: "meter",
            description: {
                kind: "markdown",
                value: "The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate."
            },
            attributes: [{
                name: "value",
                description: {
                    kind: "markdown",
                    value: "The current numeric value. This must be between the minimum and maximum values (`min` attribute and `max` attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the `min` attribute and `max` attribute, the value is equal to the nearest end of the range.\n\n**Usage note:** Unless the `value` attribute is between `0` and `1` (inclusive), the `min` and `max` attributes should define the range so that the `value` attribute's value is within it."
                }
            }, {
                name: "min",
                description: {
                    kind: "markdown",
                    value: "The lower numeric bound of the measured range. This must be less than the maximum value (`max` attribute), if specified. If unspecified, the minimum value is 0."
                }
            }, {
                name: "max",
                description: {
                    kind: "markdown",
                    value: "The upper numeric bound of the measured range. This must be greater than the minimum value (`min` attribute), if specified. If unspecified, the maximum value is 1."
                }
            }, {
                name: "low",
                description: {
                    kind: "markdown",
                    value: "The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (`min` attribute), and it also must be less than the high value and maximum value (`high` attribute and `max` attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the `low` value is equal to the minimum value."
                }
            }, {
                name: "high",
                description: {
                    kind: "markdown",
                    value: "The lower numeric bound of the high end of the measured range. This must be less than the maximum value (`max` attribute), and it also must be greater than the low value and minimum value (`low` attribute and **min** attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the `high` value is equal to the maximum value."
                }
            }, {
                name: "optimum",
                description: {
                    kind: "markdown",
                    value: "This attribute indicates the optimal numeric value. It must be within the range (as defined by the `min` attribute and `max` attribute). When used with the `low` attribute and `high` attribute, it gives an indication where along the range is considered preferable. For example, if it is between the `min` attribute and the `low` attribute, then the lower range is considered preferred."
                }
            }, {
                name: "form",
                description: "This attribute associates the element with a `form` element that has ownership of the `meter` element. For example, a `meter` might be displaying a range corresponding to an `input` element of `type` _number_. This attribute is only used if the `meter` element is being used as a form-associated element; even then, it may be omitted if the element appears as a descendant of a `form` element."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/meter"
            }]
        }, {
            name: "fieldset",
            description: {
                kind: "markdown",
                value: "The fieldset element represents a set of form controls optionally grouped under a common name."
            },
            attributes: [{
                name: "disabled",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "If this Boolean attribute is set, all form controls that are descendants of the `<fieldset>`, are disabled, meaning they are not editable and won't be submitted along with the `<form>`. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend \"The HTML <legend> element represents a caption for the content of its parent <fieldset>.\") element won't be disabled."
                }
            }, {
                name: "form",
                description: {
                    kind: "markdown",
                    value: 'This attribute takes the value of the `id` attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element you want the `<fieldset>` to be part of, even if it is not inside the form.'
                }
            }, {
                name: "name",
                description: {
                    kind: "markdown",
                    value: 'The name associated with the group.\n\n**Note**: The caption for the fieldset is given by the first [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend "The HTML <legend> element represents a caption for the content of its parent <fieldset>.") element nested inside it.'
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/fieldset"
            }]
        }, {
            name: "legend",
            description: {
                kind: "markdown",
                value: "The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/legend"
            }]
        }, {
            name: "details",
            description: {
                kind: "markdown",
                value: "The details element represents a disclosure widget from which the user can obtain additional information or controls."
            },
            attributes: [{
                name: "open",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: "This Boolean attribute indicates whether or not the details \u2014 that is, the contents of the `<details>` element \u2014 are currently visible. The default, `false`, means the details are not visible."
                }
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/details"
            }]
        }, {
            name: "summary",
            description: {
                kind: "markdown",
                value: "The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/summary"
            }]
        }, {
            name: "dialog",
            description: {
                kind: "markdown",
                value: "The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window."
            },
            attributes: [{
                name: "open",
                description: "Indicates that the dialog is active and available for interaction. When the `open` attribute is not set, the dialog shouldn't be shown to the user."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/dialog"
            }]
        }, {
            name: "script",
            description: {
                kind: "markdown",
                value: "The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user."
            },
            attributes: [{
                name: "src",
                description: {
                    kind: "markdown",
                    value: "This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.\n\nIf a `script` element has a `src` attribute specified, it should not have a script embedded inside its tags."
                }
            }, {
                name: "type",
                description: {
                    kind: "markdown",
                    value: 'This attribute indicates the type of script represented. The value of this attribute will be in one of the following categories:\n\n*   **Omitted or a JavaScript MIME type:** For HTML5-compliant browsers this indicates the script is JavaScript. HTML5 specification urges authors to omit the attribute rather than provide a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types).\n*   **`module`:** For HTML5-compliant browsers the code is treated as a JavaScript module. The processing of the script contents is not affected by the `charset` and `defer` attributes. For information on using `module`, see [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). Code may behave differently when the `module` keyword is used.\n*   **Any other value:** The embedded content is treated as a data block which won\'t be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The `src` attribute will be ignored.\n\n**Note:** in Firefox you could specify the version of JavaScript contained in a `<script>` element by including a non-standard `version` parameter inside the `type` attribute \u2014 for example `type="text/javascript;version=1.8"`. This has been removed in Firefox 59 (see [bug\xA01428745](https://bugzilla.mozilla.org/show_bug.cgi?id=1428745 "FIXED: Remove support for version parameter from script loader")).'
                }
            }, {
                name: "charset"
            }, {
                name: "async",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: `This is a Boolean attribute indicating that the browser should, if possible, load the script asynchronously.

This attribute must not be used if the \`src\` attribute is absent (i.e. for inline scripts). If it is included in this case it will have no effect.

Browsers usually assume the worst case scenario and load scripts synchronously, (i.e. \`async="false"\`) during HTML parsing.

Dynamically inserted scripts (using [\`document.createElement()\`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.")) load asynchronously by default, so to turn on synchronous loading (i.e. scripts load in the order they were inserted) set \`async="false"\`.

See [Browser compatibility](#Browser_compatibility) for notes on browser support. See also [Async scripts for asm.js](https://developer.mozilla.org/en-US/docs/Games/Techniques/Async_scripts).`
                }
            }, {
                name: "defer",
                valueSet: "v",
                description: {
                    kind: "markdown",
                    value: 'This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded "/en-US/docs/Web/Events/DOMContentLoaded").\n\nScripts with the `defer` attribute will prevent the `DOMContentLoaded` event from firing until the script has loaded and finished evaluating.\n\nThis attribute must not be used if the `src` attribute is absent (i.e. for inline scripts), in this case it would have no effect.\n\nTo achieve a similar effect for dynamically inserted scripts use `async="false"` instead. Scripts with the `defer` attribute will execute in the order in which they appear in the document.'
                }
            }, {
                name: "crossorigin",
                valueSet: "xo",
                description: {
                    kind: "markdown",
                    value: 'Normal `script` elements pass minimal information to the [`window.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror "The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events.") for scripts which do not pass the standard [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for a more descriptive explanation of its valid arguments.'
                }
            }, {
                name: "nonce",
                description: {
                    kind: "markdown",
                    value: "A cryptographic nonce (number used once) to whitelist inline scripts in a [script-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial."
                }
            }, {
                name: "integrity",
                description: "This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)."
            }, {
                name: "nomodule",
                description: "This Boolean attribute is set to indicate that the script should not be executed in browsers that support [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) \u2014 in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code."
            }, {
                name: "referrerpolicy",
                description: 'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the script, or resources fetched by the script:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (e.g. HTTPS\u2192HTTPS), but don\'t send it to a less secure destination (e.g. HTTPS\u2192HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, but only send the origin when the protocol security level stays the same (e.g.HTTPS\u2192HTTPS), and send no header to a less secure destination (e.g. HTTPS\u2192HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.\n\n**Note**: An empty string value (`""`) is both the default value, and a fallback value if `referrerpolicy` is not supported. If `referrerpolicy` is not explicitly specified on the `<script>` element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available,\xA0the empty string is treated as being equivalent to `no-referrer-when-downgrade`.'
            }, {
                name: "text",
                description: "Like the `textContent` attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/script"
            }]
        }, {
            name: "noscript",
            description: {
                kind: "markdown",
                value: "The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/noscript"
            }]
        }, {
            name: "template",
            description: {
                kind: "markdown",
                value: "The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script."
            },
            attributes: [],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/template"
            }]
        }, {
            name: "canvas",
            description: {
                kind: "markdown",
                value: "The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly."
            },
            attributes: [{
                name: "width",
                description: {
                    kind: "markdown",
                    value: "The width of the coordinate space in CSS pixels. Defaults to 300."
                }
            }, {
                name: "height",
                description: {
                    kind: "markdown",
                    value: "The height of the coordinate space in CSS pixels. Defaults to 150."
                }
            }, {
                name: "moz-opaque",
                description: "Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized [`canvas.getContext('2d', { alpha: false })`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext \"The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.\") instead."
            }],
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Element/canvas"
            }]
        }],
        globalAttributes: [{
            name: "accesskey",
            description: {
                kind: "markdown",
                value: "Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey"
            }]
        }, {
            name: "autocapitalize",
            description: {
                kind: "markdown",
                value: "Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:\n\n*   `off` or `none`, no autocapitalization is applied (all letters default to lowercase)\n*   `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase\n*   `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase\n*   `characters`, all letters should default to uppercase"
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize"
            }]
        }, {
            name: "class",
            description: {
                kind: "markdown",
                value: 'A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](/en-US/docs/Web/API/Document/getElementsByClassName "returns an array-like object of all child elements which have all of the given class names.").'
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class"
            }]
        }, {
            name: "contenteditable",
            description: {
                kind: "markdown",
                value: "An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:\n\n*   `true` or the _empty string_, which indicates that the element must be editable;\n*   `false`, which indicates that the element must not be editable."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable"
            }]
        }, {
            name: "contextmenu",
            description: {
                kind: "markdown",
                value: 'The `[**id**](#attr-id)` of a [`<menu>`](/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.") to use as the contextual menu for this element.'
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu"
            }]
        }, {
            name: "dir",
            description: {
                kind: "markdown",
                value: "An enumerated attribute indicating the directionality of the element's text. It can have the following values:\n\n*   `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);\n*   `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);\n*   `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element."
            },
            valueSet: "d",
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir"
            }]
        }, {
            name: "draggable",
            description: {
                kind: "markdown",
                value: "An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](/en-us/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `true`, which indicates that the element may be dragged\n*   `false`, which indicates that the element may not be dragged."
            },
            valueSet: "b",
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable"
            }]
        }, {
            name: "dropzone",
            description: {
                kind: "markdown",
                value: "An enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](/en-US/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `copy`, which indicates that dropping will create a copy of the element that was dragged\n*   `move`, which indicates that the element that was dragged will be moved to this new location.\n*   `link`, will create a link to the dragged data."
            }
        }, {
            name: "exportparts",
            description: {
                kind: "markdown",
                value: "Used to transitively export shadow parts from a nested shadow tree into a containing light tree."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts"
            }]
        }, {
            name: "hidden",
            description: {
                kind: "markdown",
                value: "A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown."
            },
            valueSet: "v",
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden"
            }]
        }, {
            name: "id",
            description: {
                kind: "markdown",
                value: "Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS)."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id"
            }]
        }, {
            name: "inputmode",
            description: {
                kind: "markdown",
                value: 'Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on [`<input>`](/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") elements, but is usable on any element while in `[contenteditable](/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable)` mode.'
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode"
            }]
        }, {
            name: "is",
            description: {
                kind: "markdown",
                value: "Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements) for more details)."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is"
            }]
        }, {
            name: "itemid",
            description: {
                kind: "markdown",
                value: "The unique, global identifier of an item."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid"
            }]
        }, {
            name: "itemprop",
            description: {
                kind: "markdown",
                value: "Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop"
            }]
        }, {
            name: "itemref",
            description: {
                kind: "markdown",
                value: "Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref"
            }]
        }, {
            name: "itemscope",
            description: {
                kind: "markdown",
                value: "`itemscope` (usually) works along with `[itemtype](/en-US/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context."
            },
            valueSet: "v",
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope"
            }]
        }, {
            name: "itemtype",
            description: {
                kind: "markdown",
                value: "Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](/en-US/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype"
            }]
        }, {
            name: "lang",
            description: {
                kind: "markdown",
                value: "Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one \u201Clanguage tag\u201D (made of hyphen-separated \u201Clanguage subtags\u201D) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](#attr-xml:lang) has priority over it."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang"
            }]
        }, {
            name: "part",
            description: {
                kind: "markdown",
                value: 'A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the [`::part`](/en-US/docs/Web/CSS/::part "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.") pseudo-element.'
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part"
            }]
        }, {
            name: "role",
            valueSet: "roles"
        }, {
            name: "slot",
            description: {
                kind: "markdown",
                value: "Assigns a slot in a [shadow DOM](/en-US/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the [`<slot>`](/en-US/docs/Web/HTML/Element/slot \"The HTML <slot> element\u2014part of the Web Components technology suite\u2014is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.\") element whose `[name](/en-US/docs/Web/HTML/Element/slot#attr-name)` attribute's value matches that `slot` attribute's value."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot"
            }]
        }, {
            name: "spellcheck",
            description: {
                kind: "markdown",
                value: "An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:\n\n*   `true`, which indicates that the element should be, if possible, checked for spelling errors;\n*   `false`, which indicates that the element should not be checked for spelling errors."
            },
            valueSet: "b",
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck"
            }]
        }, {
            name: "style",
            description: {
                kind: "markdown",
                value: 'Contains [CSS](/en-US/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](/en-US/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or part of a document.") element have mainly the purpose of allowing for quick styling, for example for testing purposes.'
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style"
            }]
        }, {
            name: "tabindex",
            description: {
                kind: "markdown",
                value: `An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:

*   a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
*   \`0\` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
*   a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.`
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex"
            }]
        }, {
            name: "title",
            description: {
                kind: "markdown",
                value: "Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip."
            },
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title"
            }]
        }, {
            name: "translate",
            description: {
                kind: "markdown",
                value: "An enumerated attribute that is used to specify whether an element's attribute values and the values of its [`Text`](/en-US/docs/Web/API/Text \"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.\") node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:\n\n*   empty string and `yes`, which indicates that the element will be translated.\n*   `no`, which indicates that the element will not be translated."
            },
            valueSet: "y",
            references: [{
                name: "MDN Reference",
                url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate"
            }]
        }, {
            name: "onabort",
            description: {
                kind: "markdown",
                value: "The loading of a resource has been aborted."
            }
        }, {
            name: "onblur",
            description: {
                kind: "markdown",
                value: "An element has lost focus (does not bubble)."
            }
        }, {
            name: "oncanplay",
            description: {
                kind: "markdown",
                value: "The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content."
            }
        }, {
            name: "oncanplaythrough",
            description: {
                kind: "markdown",
                value: "The user agent can play the media up to its end without having to stop for further buffering of content."
            }
        }, {
            name: "onchange",
            description: {
                kind: "markdown",
                value: "The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user."
            }
        }, {
            name: "onclick",
            description: {
                kind: "markdown",
                value: "A pointing device button has been pressed and released on an element."
            }
        }, {
            name: "oncontextmenu",
            description: {
                kind: "markdown",
                value: "The right button of the mouse is clicked (before the context menu is displayed)."
            }
        }, {
            name: "ondblclick",
            description: {
                kind: "markdown",
                value: "A pointing device button is clicked twice on an element."
            }
        }, {
            name: "ondrag",
            description: {
                kind: "markdown",
                value: "An element or text selection is being dragged (every 350ms)."
            }
        }, {
            name: "ondragend",
            description: {
                kind: "markdown",
                value: "A drag operation is being ended (by releasing a mouse button or hitting the escape key)."
            }
        }, {
            name: "ondragenter",
            description: {
                kind: "markdown",
                value: "A dragged element or text selection enters a valid drop target."
            }
        }, {
            name: "ondragleave",
            description: {
                kind: "markdown",
                value: "A dragged element or text selection leaves a valid drop target."
            }
        }, {
            name: "ondragover",
            description: {
                kind: "markdown",
                value: "An element or text selection is being dragged over a valid drop target (every 350ms)."
            }
        }, {
            name: "ondragstart",
            description: {
                kind: "markdown",
                value: "The user starts dragging an element or text selection."
            }
        }, {
            name: "ondrop",
            description: {
                kind: "markdown",
                value: "An element is dropped on a valid drop target."
            }
        }, {
            name: "ondurationchange",
            description: {
                kind: "markdown",
                value: "The duration attribute has been updated."
            }
        }, {
            name: "onemptied",
            description: {
                kind: "markdown",
                value: "The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it."
            }
        }, {
            name: "onended",
            description: {
                kind: "markdown",
                value: "Playback has stopped because the end of the media was reached."
            }
        }, {
            name: "onerror",
            description: {
                kind: "markdown",
                value: "A resource failed to load."
            }
        }, {
            name: "onfocus",
            description: {
                kind: "markdown",
                value: "An element has received focus (does not bubble)."
            }
        }, {
            name: "onformchange"
        }, {
            name: "onforminput"
        }, {
            name: "oninput",
            description: {
                kind: "markdown",
                value: "The value of an element changes or the content of an element with the attribute contenteditable is modified."
            }
        }, {
            name: "oninvalid",
            description: {
                kind: "markdown",
                value: "A submittable element has been checked and doesn't satisfy its constraints."
            }
        }, {
            name: "onkeydown",
            description: {
                kind: "markdown",
                value: "A key is pressed down."
            }
        }, {
            name: "onkeypress",
            description: {
                kind: "markdown",
                value: "A key is pressed down and that key normally produces a character value (use input instead)."
            }
        }, {
            name: "onkeyup",
            description: {
                kind: "markdown",
                value: "A key is released."
            }
        }, {
            name: "onload",
            description: {
                kind: "markdown",
                value: "A resource and its dependent resources have finished loading."
            }
        }, {
            name: "onloadeddata",
            description: {
                kind: "markdown",
                value: "The first frame of the media has finished loading."
            }
        }, {
            name: "onloadedmetadata",
            description: {
                kind: "markdown",
                value: "The metadata has been loaded."
            }
        }, {
            name: "onloadstart",
            description: {
                kind: "markdown",
                value: "Progress has begun."
            }
        }, {
            name: "onmousedown",
            description: {
                kind: "markdown",
                value: "A pointing device button (usually a mouse) is pressed on an element."
            }
        }, {
            name: "onmousemove",
            description: {
                kind: "markdown",
                value: "A pointing device is moved over an element."
            }
        }, {
            name: "onmouseout",
            description: {
                kind: "markdown",
                value: "A pointing device is moved off the element that has the listener attached or off one of its children."
            }
        }, {
            name: "onmouseover",
            description: {
                kind: "markdown",
                value: "A pointing device is moved onto the element that has the listener attached or onto one of its children."
            }
        }, {
            name: "onmouseenter",
            description: "A pointing device is moved onto the element that has the listener attached."
        }, {
            name: "onmouseleave",
            description: "A pointing device is moved off the element that has the listener attached."
        }, {
            name: "onmouseup",
            description: {
                kind: "markdown",
                value: "A pointing device button is released over an element."
            }
        }, {
            name: "onmousewheel"
        }, {
            name: "onpause",
            description: {
                kind: "markdown",
                value: "Playback has been paused."
            }
        }, {
            name: "onplay",
            description: {
                kind: "markdown",
                value: "Playback has begun."
            }
        }, {
            name: "onplaying",
            description: {
                kind: "markdown",
                value: "Playback is ready to start after having been paused or delayed due to lack of data."
            }
        }, {
            name: "onpointercancel",
            description: "The pointer is unlikely to produce any more events."
        }, {
            name: "onpointerdown",
            description: "The pointer enters the active buttons state."
        }, {
            name: "onpointerenter",
            description: "Pointing device is moved inside the hit-testing boundary."
        }, {
            name: "onpointerleave",
            description: "Pointing device is moved out of the hit-testing boundary."
        }, {
            name: "onpointerlockchange",
            description: "The pointer was locked or released."
        }, {
            name: "onpointerlockerror",
            description: "It was impossible to lock the pointer for technical reasons or because the permission was denied."
        }, {
            name: "onpointermove",
            description: "The pointer changed coordinates."
        }, {
            name: "onpointerout",
            description: "The pointing device moved out of hit-testing boundary or leaves detectable hover range."
        }, {
            name: "onpointerover",
            description: "The pointing device is moved into the hit-testing boundary."
        }, {
            name: "onpointerup",
            description: "The pointer leaves the active buttons state."
        }, {
            name: "onprogress",
            description: {
                kind: "markdown",
                value: "In progress."
            }
        }, {
            name: "onratechange",
            description: {
                kind: "markdown",
                value: "The playback rate has changed."
            }
        }, {
            name: "onreset",
            description: {
                kind: "markdown",
                value: "A form is reset."
            }
        }, {
            name: "onresize",
            description: {
                kind: "markdown",
                value: "The document view has been resized."
            }
        }, {
            name: "onreadystatechange",
            description: {
                kind: "markdown",
                value: "The readyState attribute of a document has changed."
            }
        }, {
            name: "onscroll",
            description: {
                kind: "markdown",
                value: "The document view or an element has been scrolled."
            }
        }, {
            name: "onseeked",
            description: {
                kind: "markdown",
                value: "A seek operation completed."
            }
        }, {
            name: "onseeking",
            description: {
                kind: "markdown",
                value: "A seek operation began."
            }
        }, {
            name: "onselect",
            description: {
                kind: "markdown",
                value: "Some text is being selected."
            }
        }, {
            name: "onshow",
            description: {
                kind: "markdown",
                value: "A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute"
            }
        }, {
            name: "onstalled",
            description: {
                kind: "markdown",
                value: "The user agent is trying to fetch media data, but data is unexpectedly not forthcoming."
            }
        }, {
            name: "onsubmit",
            description: {
                kind: "markdown",
                value: "A form is submitted."
            }
        }, {
            name: "onsuspend",
            description: {
                kind: "markdown",
                value: "Media data loading has been suspended."
            }
        }, {
            name: "ontimeupdate",
            description: {
                kind: "markdown",
                value: "The time indicated by the currentTime attribute has been updated."
            }
        }, {
            name: "onvolumechange",
            description: {
                kind: "markdown",
                value: "The volume has changed."
            }
        }, {
            name: "onwaiting",
            description: {
                kind: "markdown",
                value: "Playback has stopped because of a temporary lack of data."
            }
        }, {
            name: "aria-activedescendant",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant"
            }],
            description: {
                kind: "markdown",
                value: "Identifies the currently active element when DOM focus is on a [`composite`](https://www.w3.org/TR/wai-aria-1.1/#composite) widget, [`textbox`](https://www.w3.org/TR/wai-aria-1.1/#textbox), [`group`](https://www.w3.org/TR/wai-aria-1.1/#group), or [`application`](https://www.w3.org/TR/wai-aria-1.1/#application)."
            }
        }, {
            name: "aria-atomic",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-atomic"
            }],
            description: {
                kind: "markdown",
                value: "Indicates whether [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology) will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) attribute."
            }
        }, {
            name: "aria-autocomplete",
            valueSet: "autocomplete",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete"
            }],
            description: {
                kind: "markdown",
                value: "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made."
            }
        }, {
            name: "aria-busy",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-busy"
            }],
            description: {
                kind: "markdown",
                value: "Indicates an element is being modified and that assistive technologies _MAY_ want to wait until the modifications are complete before exposing them to the user."
            }
        }, {
            name: "aria-checked",
            valueSet: "tristate",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-checked"
            }],
            description: {
                kind: "markdown",
                value: 'Indicates the current "checked" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of checkboxes, radio buttons, and other [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).'
            }
        }, {
            name: "aria-colcount",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-colcount"
            }],
            description: {
                kind: "markdown",
                value: "Defines the total number of columns in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex)."
            }
        }, {
            name: "aria-colindex",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-colindex"
            }],
            description: {
                kind: "markdown",
                value: "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) column index or position with respect to the total number of columns within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan)."
            }
        }, {
            name: "aria-colspan",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-colspan"
            }],
            description: {
                kind: "markdown",
                value: "Defines the number of columns spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan)."
            }
        }, {
            name: "aria-controls",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-controls"
            }],
            description: {
                kind: "markdown",
                value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) whose contents or presence are controlled by the current element. See related [`aria-owns`](https://www.w3.org/TR/wai-aria-1.1/#aria-owns)."
            }
        }, {
            name: "aria-current",
            valueSet: "current",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-current"
            }],
            description: {
                kind: "markdown",
                value: "Indicates the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that represents the current item within a container or set of related elements."
            }
        }, {
            name: "aria-describedat",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-describedat"
            }]
        }, {
            name: "aria-describedby",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-describedby"
            }],
            description: {
                kind: "markdown",
                value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that describes the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)."
            }
        }, {
            name: "aria-disabled",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-disabled"
            }],
            description: {
                kind: "markdown",
                value: "Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is [perceivable](https://www.w3.org/TR/wai-aria-1.1/#dfn-perceivable) but disabled, so it is not editable or otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) and [`aria-readonly`](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly)."
            }
        }, {
            name: "aria-dropeffect",
            valueSet: "dropeffect",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect"
            }],
            description: {
                kind: "markdown",
                value: "\\[Deprecated in ARIA 1.1\\] Indicates what functions can be performed when a dragged object is released on the drop target."
            }
        }, {
            name: "aria-errormessage",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage"
            }],
            description: {
                kind: "markdown",
                value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides an error message for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-invalid`](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) and [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)."
            }
        }, {
            name: "aria-expanded",
            valueSet: "u",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-expanded"
            }],
            description: {
                kind: "markdown",
                value: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed."
            }
        }, {
            name: "aria-flowto",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-flowto"
            }],
            description: {
                kind: "markdown",
                value: "Identifies the next [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order."
            }
        }, {
            name: "aria-grabbed",
            valueSet: "u",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed"
            }],
            description: {
                kind: "markdown",
                value: `\\[Deprecated in ARIA 1.1\\] Indicates an element's "grabbed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) in a drag-and-drop operation.`
            }
        }, {
            name: "aria-haspopup",
            valueSet: "haspopup",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup"
            }],
            description: {
                kind: "markdown",
                value: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)."
            }
        }, {
            name: "aria-hidden",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-hidden"
            }],
            description: {
                kind: "markdown",
                value: "Indicates whether the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is exposed to an accessibility API. See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled)."
            }
        }, {
            name: "aria-invalid",
            valueSet: "invalid",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-invalid"
            }],
            description: {
                kind: "markdown",
                value: "Indicates the entered value does not conform to the format expected by the application. See related [`aria-errormessage`](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage)."
            }
        }, {
            name: "aria-kbdshortcuts",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-kbdshortcuts"
            }]
        }, {
            name: "aria-label",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-label"
            }],
            description: {
                kind: "markdown",
                value: "Defines a string value that labels the current element. See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)."
            }
        }, {
            name: "aria-labelledby",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby"
            }],
            description: {
                kind: "markdown",
                value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that labels the current element. See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)."
            }
        }, {
            name: "aria-level",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-level"
            }],
            description: {
                kind: "markdown",
                value: "Defines the hierarchical level of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) within a structure."
            }
        }, {
            name: "aria-live",
            valueSet: "live",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-live"
            }],
            description: {
                kind: "markdown",
                value: "Indicates that an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) will be updated, and describes the types of updates the [user agents](https://www.w3.org/TR/wai-aria-1.1/#dfn-user-agent), [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology), and user can expect from the [live region](https://www.w3.org/TR/wai-aria-1.1/#dfn-live-region)."
            }
        }, {
            name: "aria-modal",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-modal"
            }],
            description: {
                kind: "markdown",
                value: "Indicates whether an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is modal when displayed."
            }
        }, {
            name: "aria-multiline",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-multiline"
            }],
            description: {
                kind: "markdown",
                value: "Indicates whether a text box accepts multiple lines of input or only a single line."
            }
        }, {
            name: "aria-multiselectable",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable"
            }],
            description: {
                kind: "markdown",
                value: "Indicates that the user may select more than one item from the current selectable descendants."
            }
        }, {
            name: "aria-orientation",
            valueSet: "orientation",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-orientation"
            }],
            description: {
                kind: "markdown",
                value: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous."
            }
        }, {
            name: "aria-owns",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-owns"
            }],
            description: {
                kind: "markdown",
                value: "Identifies an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in order to define a visual, functional, or contextual parent/child [relationship](https://www.w3.org/TR/wai-aria-1.1/#dfn-relationship) between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls)."
            }
        }, {
            name: "aria-placeholder",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder"
            }],
            description: {
                kind: "markdown",
                value: "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format."
            }
        }, {
            name: "aria-posinset",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-posinset"
            }],
            description: {
                kind: "markdown",
                value: "Defines an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize)."
            }
        }, {
            name: "aria-pressed",
            valueSet: "tristate",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-pressed"
            }],
            description: {
                kind: "markdown",
                value: 'Indicates the current "pressed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of toggle buttons. See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).'
            }
        }, {
            name: "aria-readonly",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-readonly"
            }],
            description: {
                kind: "markdown",
                value: "Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is not editable, but is otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled)."
            }
        }, {
            name: "aria-relevant",
            valueSet: "relevant",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-relevant"
            }],
            description: {
                kind: "markdown",
                value: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)."
            }
        }, {
            name: "aria-required",
            valueSet: "b",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-required"
            }],
            description: {
                kind: "markdown",
                value: "Indicates that user input is required on the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) before a form may be submitted."
            }
        }, {
            name: "aria-roledescription",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription"
            }],
            description: {
                kind: "markdown",
                value: "Defines a human-readable, author-localized description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)."
            }
        }, {
            name: "aria-rowcount",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount"
            }],
            description: {
                kind: "markdown",
                value: "Defines the total number of rows in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex)."
            }
        }, {
            name: "aria-rowindex",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex"
            }],
            description: {
                kind: "markdown",
                value: "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) row index or position with respect to the total number of rows within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan)."
            }
        }, {
            name: "aria-rowspan",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan"
            }],
            description: {
                kind: "markdown",
                value: "Defines the number of rows spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan)."
            }
        }, {
            name: "aria-selected",
            valueSet: "u",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-selected"
            }],
            description: {
                kind: "markdown",
                value: 'Indicates the current "selected" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of various [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed).'
            }
        }, {
            name: "aria-setsize",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-setsize"
            }],
            description: {
                kind: "markdown",
                value: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset)."
            }
        }, {
            name: "aria-sort",
            valueSet: "sort",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-sort"
            }],
            description: {
                kind: "markdown",
                value: "Indicates if items in a table or grid are sorted in ascending or descending order."
            }
        }, {
            name: "aria-valuemax",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax"
            }],
            description: {
                kind: "markdown",
                value: "Defines the maximum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget)."
            }
        }, {
            name: "aria-valuemin",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin"
            }],
            description: {
                kind: "markdown",
                value: "Defines the minimum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget)."
            }
        }, {
            name: "aria-valuenow",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow"
            }],
            description: {
                kind: "markdown",
                value: "Defines the current value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-valuetext`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext)."
            }
        }, {
            name: "aria-valuetext",
            references: [{
                name: "WAI-ARIA Reference",
                url: "https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext"
            }],
            description: {
                kind: "markdown",
                value: "Defines the human readable text alternative of [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget)."
            }
        }, {
            name: "aria-details",
            description: {
                kind: "markdown",
                value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides a detailed, extended description for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)."
            }
        }, {
            name: "aria-keyshortcuts",
            description: {
                kind: "markdown",
                value: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element."
            }
        }],
        valueSets: [{
            name: "b",
            values: [{
                name: "true"
            }, {
                name: "false"
            }]
        }, {
            name: "u",
            values: [{
                name: "true"
            }, {
                name: "false"
            }, {
                name: "undefined"
            }]
        }, {
            name: "o",
            values: [{
                name: "on"
            }, {
                name: "off"
            }]
        }, {
            name: "y",
            values: [{
                name: "yes"
            }, {
                name: "no"
            }]
        }, {
            name: "w",
            values: [{
                name: "soft"
            }, {
                name: "hard"
            }]
        }, {
            name: "d",
            values: [{
                name: "ltr"
            }, {
                name: "rtl"
            }, {
                name: "auto"
            }]
        }, {
            name: "m",
            values: [{
                name: "GET",
                description: {
                    kind: "markdown",
                    value: "Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a '?' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters."
                }
            }, {
                name: "POST",
                description: {
                    kind: "markdown",
                    value: "Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5); form data are included in the body of the form and sent to the server."
                }
            }, {
                name: "dialog",
                description: {
                    kind: "markdown",
                    value: "Use when the form is inside a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element to close the dialog when submitted."
                }
            }]
        }, {
            name: "fm",
            values: [{
                name: "GET"
            }, {
                name: "POST"
            }]
        }, {
            name: "s",
            values: [{
                name: "row"
            }, {
                name: "col"
            }, {
                name: "rowgroup"
            }, {
                name: "colgroup"
            }]
        }, {
            name: "t",
            values: [{
                name: "hidden"
            }, {
                name: "text"
            }, {
                name: "search"
            }, {
                name: "tel"
            }, {
                name: "url"
            }, {
                name: "email"
            }, {
                name: "password"
            }, {
                name: "datetime"
            }, {
                name: "date"
            }, {
                name: "month"
            }, {
                name: "week"
            }, {
                name: "time"
            }, {
                name: "datetime-local"
            }, {
                name: "number"
            }, {
                name: "range"
            }, {
                name: "color"
            }, {
                name: "checkbox"
            }, {
                name: "radio"
            }, {
                name: "file"
            }, {
                name: "submit"
            }, {
                name: "image"
            }, {
                name: "reset"
            }, {
                name: "button"
            }]
        }, {
            name: "im",
            values: [{
                name: "verbatim"
            }, {
                name: "latin"
            }, {
                name: "latin-name"
            }, {
                name: "latin-prose"
            }, {
                name: "full-width-latin"
            }, {
                name: "kana"
            }, {
                name: "kana-name"
            }, {
                name: "katakana"
            }, {
                name: "numeric"
            }, {
                name: "tel"
            }, {
                name: "email"
            }, {
                name: "url"
            }]
        }, {
            name: "bt",
            values: [{
                name: "button"
            }, {
                name: "submit"
            }, {
                name: "reset"
            }, {
                name: "menu"
            }]
        }, {
            name: "lt",
            values: [{
                name: "1"
            }, {
                name: "a"
            }, {
                name: "A"
            }, {
                name: "i"
            }, {
                name: "I"
            }]
        }, {
            name: "mt",
            values: [{
                name: "context"
            }, {
                name: "toolbar"
            }]
        }, {
            name: "mit",
            values: [{
                name: "command"
            }, {
                name: "checkbox"
            }, {
                name: "radio"
            }]
        }, {
            name: "et",
            values: [{
                name: "application/x-www-form-urlencoded"
            }, {
                name: "multipart/form-data"
            }, {
                name: "text/plain"
            }]
        }, {
            name: "tk",
            values: [{
                name: "subtitles"
            }, {
                name: "captions"
            }, {
                name: "descriptions"
            }, {
                name: "chapters"
            }, {
                name: "metadata"
            }]
        }, {
            name: "pl",
            values: [{
                name: "none"
            }, {
                name: "metadata"
            }, {
                name: "auto"
            }]
        }, {
            name: "sh",
            values: [{
                name: "circle"
            }, {
                name: "default"
            }, {
                name: "poly"
            }, {
                name: "rect"
            }]
        }, {
            name: "xo",
            values: [{
                name: "anonymous"
            }, {
                name: "use-credentials"
            }]
        }, {
            name: "sb",
            values: [{
                name: "allow-forms"
            }, {
                name: "allow-modals"
            }, {
                name: "allow-pointer-lock"
            }, {
                name: "allow-popups"
            }, {
                name: "allow-popups-to-escape-sandbox"
            }, {
                name: "allow-same-origin"
            }, {
                name: "allow-scripts"
            }, {
                name: "allow-top-navigation"
            }]
        }, {
            name: "tristate",
            values: [{
                name: "true"
            }, {
                name: "false"
            }, {
                name: "mixed"
            }, {
                name: "undefined"
            }]
        }, {
            name: "inputautocomplete",
            values: [{
                name: "additional-name"
            }, {
                name: "address-level1"
            }, {
                name: "address-level2"
            }, {
                name: "address-level3"
            }, {
                name: "address-level4"
            }, {
                name: "address-line1"
            }, {
                name: "address-line2"
            }, {
                name: "address-line3"
            }, {
                name: "bday"
            }, {
                name: "bday-year"
            }, {
                name: "bday-day"
            }, {
                name: "bday-month"
            }, {
                name: "billing"
            }, {
                name: "cc-additional-name"
            }, {
                name: "cc-csc"
            }, {
                name: "cc-exp"
            }, {
                name: "cc-exp-month"
            }, {
                name: "cc-exp-year"
            }, {
                name: "cc-family-name"
            }, {
                name: "cc-given-name"
            }, {
                name: "cc-name"
            }, {
                name: "cc-number"
            }, {
                name: "cc-type"
            }, {
                name: "country"
            }, {
                name: "country-name"
            }, {
                name: "current-password"
            }, {
                name: "email"
            }, {
                name: "family-name"
            }, {
                name: "fax"
            }, {
                name: "given-name"
            }, {
                name: "home"
            }, {
                name: "honorific-prefix"
            }, {
                name: "honorific-suffix"
            }, {
                name: "impp"
            }, {
                name: "language"
            }, {
                name: "mobile"
            }, {
                name: "name"
            }, {
                name: "new-password"
            }, {
                name: "nickname"
            }, {
                name: "organization"
            }, {
                name: "organization-title"
            }, {
                name: "pager"
            }, {
                name: "photo"
            }, {
                name: "postal-code"
            }, {
                name: "sex"
            }, {
                name: "shipping"
            }, {
                name: "street-address"
            }, {
                name: "tel-area-code"
            }, {
                name: "tel"
            }, {
                name: "tel-country-code"
            }, {
                name: "tel-extension"
            }, {
                name: "tel-local"
            }, {
                name: "tel-local-prefix"
            }, {
                name: "tel-local-suffix"
            }, {
                name: "tel-national"
            }, {
                name: "transaction-amount"
            }, {
                name: "transaction-currency"
            }, {
                name: "url"
            }, {
                name: "username"
            }, {
                name: "work"
            }]
        }, {
            name: "autocomplete",
            values: [{
                name: "inline"
            }, {
                name: "list"
            }, {
                name: "both"
            }, {
                name: "none"
            }]
        }, {
            name: "current",
            values: [{
                name: "page"
            }, {
                name: "step"
            }, {
                name: "location"
            }, {
                name: "date"
            }, {
                name: "time"
            }, {
                name: "true"
            }, {
                name: "false"
            }]
        }, {
            name: "dropeffect",
            values: [{
                name: "copy"
            }, {
                name: "move"
            }, {
                name: "link"
            }, {
                name: "execute"
            }, {
                name: "popup"
            }, {
                name: "none"
            }]
        }, {
            name: "invalid",
            values: [{
                name: "grammar"
            }, {
                name: "false"
            }, {
                name: "spelling"
            }, {
                name: "true"
            }]
        }, {
            name: "live",
            values: [{
                name: "off"
            }, {
                name: "polite"
            }, {
                name: "assertive"
            }]
        }, {
            name: "orientation",
            values: [{
                name: "vertical"
            }, {
                name: "horizontal"
            }, {
                name: "undefined"
            }]
        }, {
            name: "relevant",
            values: [{
                name: "additions"
            }, {
                name: "removals"
            }, {
                name: "text"
            }, {
                name: "all"
            }, {
                name: "additions text"
            }]
        }, {
            name: "sort",
            values: [{
                name: "ascending"
            }, {
                name: "descending"
            }, {
                name: "none"
            }, {
                name: "other"
            }]
        }, {
            name: "roles",
            values: [{
                name: "alert"
            }, {
                name: "alertdialog"
            }, {
                name: "button"
            }, {
                name: "checkbox"
            }, {
                name: "dialog"
            }, {
                name: "gridcell"
            }, {
                name: "link"
            }, {
                name: "log"
            }, {
                name: "marquee"
            }, {
                name: "menuitem"
            }, {
                name: "menuitemcheckbox"
            }, {
                name: "menuitemradio"
            }, {
                name: "option"
            }, {
                name: "progressbar"
            }, {
                name: "radio"
            }, {
                name: "scrollbar"
            }, {
                name: "searchbox"
            }, {
                name: "slider"
            }, {
                name: "spinbutton"
            }, {
                name: "status"
            }, {
                name: "switch"
            }, {
                name: "tab"
            }, {
                name: "tabpanel"
            }, {
                name: "textbox"
            }, {
                name: "timer"
            }, {
                name: "tooltip"
            }, {
                name: "treeitem"
            }, {
                name: "combobox"
            }, {
                name: "grid"
            }, {
                name: "listbox"
            }, {
                name: "menu"
            }, {
                name: "menubar"
            }, {
                name: "radiogroup"
            }, {
                name: "tablist"
            }, {
                name: "tree"
            }, {
                name: "treegrid"
            }, {
                name: "application"
            }, {
                name: "article"
            }, {
                name: "cell"
            }, {
                name: "columnheader"
            }, {
                name: "definition"
            }, {
                name: "directory"
            }, {
                name: "document"
            }, {
                name: "feed"
            }, {
                name: "figure"
            }, {
                name: "group"
            }, {
                name: "heading"
            }, {
                name: "img"
            }, {
                name: "list"
            }, {
                name: "listitem"
            }, {
                name: "math"
            }, {
                name: "none"
            }, {
                name: "note"
            }, {
                name: "presentation"
            }, {
                name: "region"
            }, {
                name: "row"
            }, {
                name: "rowgroup"
            }, {
                name: "rowheader"
            }, {
                name: "separator"
            }, {
                name: "table"
            }, {
                name: "term"
            }, {
                name: "text"
            }, {
                name: "toolbar"
            }, {
                name: "banner"
            }, {
                name: "complementary"
            }, {
                name: "contentinfo"
            }, {
                name: "form"
            }, {
                name: "main"
            }, {
                name: "navigation"
            }, {
                name: "region"
            }, {
                name: "search"
            }, {
                name: "doc-abstract"
            }, {
                name: "doc-acknowledgments"
            }, {
                name: "doc-afterword"
            }, {
                name: "doc-appendix"
            }, {
                name: "doc-backlink"
            }, {
                name: "doc-biblioentry"
            }, {
                name: "doc-bibliography"
            }, {
                name: "doc-biblioref"
            }, {
                name: "doc-chapter"
            }, {
                name: "doc-colophon"
            }, {
                name: "doc-conclusion"
            }, {
                name: "doc-cover"
            }, {
                name: "doc-credit"
            }, {
                name: "doc-credits"
            }, {
                name: "doc-dedication"
            }, {
                name: "doc-endnote"
            }, {
                name: "doc-endnotes"
            }, {
                name: "doc-epigraph"
            }, {
                name: "doc-epilogue"
            }, {
                name: "doc-errata"
            }, {
                name: "doc-example"
            }, {
                name: "doc-footnote"
            }, {
                name: "doc-foreword"
            }, {
                name: "doc-glossary"
            }, {
                name: "doc-glossref"
            }, {
                name: "doc-index"
            }, {
                name: "doc-introduction"
            }, {
                name: "doc-noteref"
            }, {
                name: "doc-notice"
            }, {
                name: "doc-pagebreak"
            }, {
                name: "doc-pagelist"
            }, {
                name: "doc-part"
            }, {
                name: "doc-preface"
            }, {
                name: "doc-prologue"
            }, {
                name: "doc-pullquote"
            }, {
                name: "doc-qna"
            }, {
                name: "doc-subtitle"
            }, {
                name: "doc-tip"
            }, {
                name: "doc-toc"
            }]
        }, {
            name: "metanames",
            values: [{
                name: "application-name"
            }, {
                name: "author"
            }, {
                name: "description"
            }, {
                name: "format-detection"
            }, {
                name: "generator"
            }, {
                name: "keywords"
            }, {
                name: "publisher"
            }, {
                name: "referrer"
            }, {
                name: "robots"
            }, {
                name: "theme-color"
            }, {
                name: "viewport"
            }]
        }, {
            name: "haspopup",
            values: [{
                name: "false",
                description: {
                    kind: "markdown",
                    value: "(default) Indicates the element does not have a popup."
                }
            }, {
                name: "true",
                description: {
                    kind: "markdown",
                    value: "Indicates the popup is a menu."
                }
            }, {
                name: "menu",
                description: {
                    kind: "markdown",
                    value: "Indicates the popup is a menu."
                }
            }, {
                name: "listbox",
                description: {
                    kind: "markdown",
                    value: "Indicates the popup is a listbox."
                }
            }, {
                name: "tree",
                description: {
                    kind: "markdown",
                    value: "Indicates the popup is a tree."
                }
            }, {
                name: "grid",
                description: {
                    kind: "markdown",
                    value: "Indicates the popup is a grid."
                }
            }, {
                name: "dialog",
                description: {
                    kind: "markdown",
                    value: "Indicates the popup is a dialog."
                }
            }]
        }]
    }
      , Bs = function() {
        function e(t) {
            this.dataProviders = [],
            this.setDataProviders(t.useDefaultDataProvider !== !1, t.customDataProviders || [])
        }
        return e.prototype.setDataProviders = function(t, n) {
            var r;
            this.dataProviders = [],
            t && this.dataProviders.push(new sr("html5",Ps)),
            (r = this.dataProviders).push.apply(r, n)
        }
        ,
        e.prototype.getDataProviders = function() {
            return this.dataProviders
        }
        ,
        e
    }()
      , Fs = {};
    function qs(e) {
        e === void 0 && (e = Fs);
        var t = new Bs(e)
          , n = new ms(e,t)
          , r = new ls(e,t);
        return {
            setDataProviders: t.setDataProviders.bind(t),
            createScanner: de,
            parseHTMLDocument: function(i) {
                return rr(i.getText())
            },
            doComplete: r.doComplete.bind(r),
            doComplete2: r.doComplete2.bind(r),
            setCompletionParticipants: r.setCompletionParticipants.bind(r),
            doHover: n.doHover.bind(n),
            format: _s,
            findDocumentHighlights: xs,
            findDocumentLinks: Cs,
            findDocumentSymbols: Ds,
            getFoldingRanges: Hs,
            getSelectionRanges: zs,
            doTagComplete: r.doTagComplete.bind(r),
            doRename: Ms,
            findMatchingTagPosition: Ns,
            findOnTypeRenameRanges: vr,
            findLinkedEditingRanges: vr
        }
    }
    function Os(e, t) {
        return new sr(e,t)
    }
    var xt = function() {
        return xt = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }
        ,
        xt.apply(this, arguments)
    }
      , ve = function(e, t, n, r) {
        function i(a) {
            return a instanceof n ? a : new n(function(o) {
                o(a)
            }
            )
        }
        return new (n || (n = Promise))(function(a, o) {
            function u(h) {
                try {
                    l(r.next(h))
                } catch (c) {
                    o(c)
                }
            }
            function s(h) {
                try {
                    l(r.throw(h))
                } catch (c) {
                    o(c)
                }
            }
            function l(h) {
                h.done ? a(h.value) : i(h.value).then(u, s)
            }
            l((r = r.apply(e, t || [])).next())
        }
        )
    }
      , we = function(e, t) {
        var n = {
            label: 0,
            sent: function() {
                if (a[0] & 1)
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        }, r, i, a, o;
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        },
        typeof Symbol == "function" && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function u(l) {
            return function(h) {
                return s([l, h])
            }
        }
        function s(l) {
            if (r)
                throw new TypeError("Generator is already executing.");
            for (; n; )
                try {
                    if (r = 1,
                    i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i),
                    0) : i.next) && !(a = a.call(i, l[1])).done)
                        return a;
                    switch (i = 0,
                    a && (l = [l[0] & 2, a.value]),
                    l[0]) {
                    case 0:
                    case 1:
                        a = l;
                        break;
                    case 4:
                        return n.label++,
                        {
                            value: l[1],
                            done: !1
                        };
                    case 5:
                        n.label++,
                        i = l[1],
                        l = [0];
                        continue;
                    case 7:
                        l = n.ops.pop(),
                        n.trys.pop();
                        continue;
                    default:
                        if (a = n.trys,
                        !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
                            n.label = l[1];
                            break
                        }
                        if (l[0] === 6 && n.label < a[1]) {
                            n.label = a[1],
                            a = l;
                            break
                        }
                        if (a && n.label < a[2]) {
                            n.label = a[2],
                            n.ops.push(l);
                            break
                        }
                        a[2] && n.ops.pop(),
                        n.trys.pop();
                        continue
                    }
                    l = t.call(e, n)
                } catch (h) {
                    l = [6, h],
                    i = 0
                } finally {
                    r = a = 0
                }
            if (l[0] & 5)
                throw l[1];
            return {
                value: l[0] ? l[1] : void 0,
                done: !0
            }
        }
    }
      , js = function() {
        function e(t, n) {
            this._ctx = t,
            this._languageSettings = n.languageSettings,
            this._languageId = n.languageId;
            var r = this._languageSettings.data
              , i = r == null ? void 0 : r.useDefaultDataProvider
              , a = [];
            if (r != null && r.dataProviders)
                for (var o in r.dataProviders)
                    a.push(Os(o, r.dataProviders[o]));
            this._languageService = qs({
                useDefaultDataProvider: i,
                customDataProviders: a
            })
        }
        return e.prototype.doComplete = function(t, n) {
            return ve(this, void 0, void 0, function() {
                var r, i;
                return we(this, function(a) {
                    return r = this._getTextDocument(t),
                    i = this._languageService.parseHTMLDocument(r),
                    [2, Promise.resolve(this._languageService.doComplete(r, n, i, this._languageSettings && this._languageSettings.suggest))]
                })
            })
        }
        ,
        e.prototype.format = function(t, n, r) {
            return ve(this, void 0, void 0, function() {
                var i, a, o;
                return we(this, function(u) {
                    return i = this._getTextDocument(t),
                    a = xt(xt({}, this._languageSettings.format), r),
                    o = this._languageService.format(i, n, a),
                    [2, Promise.resolve(o)]
                })
            })
        }
        ,
        e.prototype.doHover = function(t, n) {
            return ve(this, void 0, void 0, function() {
                var r, i, a;
                return we(this, function(o) {
                    return r = this._getTextDocument(t),
                    i = this._languageService.parseHTMLDocument(r),
                    a = this._languageService.doHover(r, n, i),
                    [2, Promise.resolve(a)]
                })
            })
        }
        ,
        e.prototype.findDocumentHighlights = function(t, n) {
            return ve(this, void 0, void 0, function() {
                var r, i, a;
                return we(this, function(o) {
                    return r = this._getTextDocument(t),
                    i = this._languageService.parseHTMLDocument(r),
                    a = this._languageService.findDocumentHighlights(r, n, i),
                    [2, Promise.resolve(a)]
                })
            })
        }
        ,
        e.prototype.findDocumentLinks = function(t) {
            return ve(this, void 0, void 0, function() {
                var n, r;
                return we(this, function(i) {
                    return n = this._getTextDocument(t),
                    r = this._languageService.findDocumentLinks(n, null),
                    [2, Promise.resolve(r)]
                })
            })
        }
        ,
        e.prototype.findDocumentSymbols = function(t) {
            return ve(this, void 0, void 0, function() {
                var n, r, i;
                return we(this, function(a) {
                    return n = this._getTextDocument(t),
                    r = this._languageService.parseHTMLDocument(n),
                    i = this._languageService.findDocumentSymbols(n, r),
                    [2, Promise.resolve(i)]
                })
            })
        }
        ,
        e.prototype.getFoldingRanges = function(t, n) {
            return ve(this, void 0, void 0, function() {
                var r, i;
                return we(this, function(a) {
                    return r = this._getTextDocument(t),
                    i = this._languageService.getFoldingRanges(r, n),
                    [2, Promise.resolve(i)]
                })
            })
        }
        ,
        e.prototype.getSelectionRanges = function(t, n) {
            return ve(this, void 0, void 0, function() {
                var r, i;
                return we(this, function(a) {
                    return r = this._getTextDocument(t),
                    i = this._languageService.getSelectionRanges(r, n),
                    [2, Promise.resolve(i)]
                })
            })
        }
        ,
        e.prototype.doRename = function(t, n, r) {
            return ve(this, void 0, void 0, function() {
                var i, a, o;
                return we(this, function(u) {
                    return i = this._getTextDocument(t),
                    a = this._languageService.parseHTMLDocument(i),
                    o = this._languageService.doRename(i, n, r, a),
                    [2, Promise.resolve(o)]
                })
            })
        }
        ,
        e.prototype._getTextDocument = function(t) {
            for (var n = this._ctx.getMirrorModels(), r = 0, i = n; r < i.length; r++) {
                var a = i[r];
                if (a.uri.toString() === t)
                    return un.create(t, this._languageId, a.version, a.getValue())
            }
            return null
        }
        ,
        e
    }();
    self.onmessage = function() {
        vi(function(e, t) {
            return new js(e,t)
        })
    }
}
)();