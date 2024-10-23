(function() {
    "use strict";
    class Xt {
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
    const Jt = new Xt;
    function Ot(e) {
        Kt(e) || Jt.onUnexpectedError(e)
    }
    function ye(e) {
        if (e instanceof Error) {
            let {name: t, message: n} = e;
            const s = e.stacktrace || e.stack;
            return {
                $isError: !0,
                name: t,
                message: n,
                stack: s
            }
        }
        return e
    }
    const Qe = "Canceled";
    function Kt(e) {
        return e instanceof Error && e.name === Qe && e.message === Qe
    }
    function en(e) {
        const t = this;
        let n = !1, s;
        return function() {
            return n || (n = !0,
            s = e.apply(t, arguments)),
            s
        }
    }
    var Ae;
    (function(e) {
        function t(d) {
            return d && typeof d == "object" && typeof d[Symbol.iterator] == "function"
        }
        e.is = t;
        const n = Object.freeze([]);
        function s() {
            return n
        }
        e.empty = s;
        function *r(d) {
            yield d
        }
        e.single = r;
        function i(d) {
            return d || n
        }
        e.from = i;
        function l(d) {
            return !d || d[Symbol.iterator]().next().done === !0
        }
        e.isEmpty = l;
        function u(d) {
            return d[Symbol.iterator]().next().value
        }
        e.first = u;
        function a(d, h) {
            for (const g of d)
                if (h(g))
                    return !0;
            return !1
        }
        e.some = a;
        function o(d, h) {
            for (const g of d)
                if (h(g))
                    return g
        }
        e.find = o;
        function *f(d, h) {
            for (const g of d)
                h(g) && (yield g)
        }
        e.filter = f;
        function *c(d, h) {
            let g = 0;
            for (const _ of d)
                yield h(_, g++)
        }
        e.map = c;
        function *m(...d) {
            for (const h of d)
                for (const g of h)
                    yield g
        }
        e.concat = m;
        function *L(d) {
            for (const h of d)
                for (const g of h)
                    yield g
        }
        e.concatNested = L;
        function b(d, h, g) {
            let _ = g;
            for (const A of d)
                _ = h(_, A);
            return _
        }
        e.reduce = b;
        function *w(d, h, g=d.length) {
            for (h < 0 && (h += d.length),
            g < 0 ? g += d.length : g > d.length && (g = d.length); h < g; h++)
                yield d[h]
        }
        e.slice = w;
        function M(d, h=Number.POSITIVE_INFINITY) {
            const g = [];
            if (h === 0)
                return [g, d];
            const _ = d[Symbol.iterator]();
            for (let A = 0; A < h; A++) {
                const S = _.next();
                if (S.done)
                    return [g, e.empty()];
                g.push(S.value)
            }
            return [g, {
                [Symbol.iterator]() {
                    return _
                }
            }]
        }
        e.consume = M;
        function P(d, h, g= (_, A) => _ === A) {
            const _ = d[Symbol.iterator]()
              , A = h[Symbol.iterator]();
            for (; ; ) {
                const S = _.next()
                  , N = A.next();
                if (S.done !== N.done)
                    return !1;
                if (S.done)
                    return !0;
                if (!g(S.value, N.value))
                    return !1
            }
        }
        e.equals = P
    }
    )(Ae || (Ae = {}));
    function es(e) {
        return e
    }
    function ts(e, t) {}
    class tn extends Error {
        constructor(t) {
            super(`Encountered errors while disposing of store. Errors: [${t.join(", ")}]`),
            this.errors = t
        }
    }
    function Ze(e) {
        if (Ae.is(e)) {
            let t = [];
            for (const n of e)
                if (n)
                    try {
                        n.dispose()
                    } catch (s) {
                        t.push(s)
                    }
            if (t.length === 1)
                throw t[0];
            if (t.length > 1)
                throw new tn(t);
            return Array.isArray(e) ? [] : e
        } else if (e)
            return e.dispose(),
            e
    }
    function nn(...e) {
        return Xe( () => Ze(e))
    }
    function Xe(e) {
        return {
            dispose: en( () => {
                e()
            }
            )
        }
    }
    class le {
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
                Ze(this._toDispose.values())
            } finally {
                this._toDispose.clear()
            }
        }
        add(t) {
            if (!t)
                return t;
            if (t === this)
                throw new Error("Cannot register a disposable on itself!");
            return this._isDisposed ? le.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t),
            t
        }
    }
    le.DISABLE_DISPOSED_WARNING = !1;
    class Je {
        constructor() {
            this._store = new le,
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
    Je.None = Object.freeze({
        dispose() {}
    });
    var we;
    const he = "en";
    let Ce = !1, ve = !1, Me = !1, me, Pe = he, sn, Z;
    const T = typeof self == "object" ? self : typeof global == "object" ? global : {};
    let k;
    typeof T.vscode != "undefined" && typeof T.vscode.process != "undefined" ? k = T.vscode.process : typeof process != "undefined" && (k = process);
    const rn = typeof ((we = k == null ? void 0 : k.versions) === null || we === void 0 ? void 0 : we.electron) == "string" && k.type === "renderer";
    if (typeof navigator == "object" && !rn)
        Z = navigator.userAgent,
        Ce = Z.indexOf("Windows") >= 0,
        ve = Z.indexOf("Macintosh") >= 0,
        (Z.indexOf("Macintosh") >= 0 || Z.indexOf("iPad") >= 0 || Z.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0,
        Me = Z.indexOf("Linux") >= 0,
        me = navigator.language,
        Pe = me;
    else if (typeof k == "object") {
        Ce = k.platform === "win32",
        ve = k.platform === "darwin",
        Me = k.platform === "linux",
        Me && !!k.env.SNAP && k.env.SNAP_REVISION,
        me = he,
        Pe = he;
        const e = k.env.VSCODE_NLS_CONFIG;
        if (e)
            try {
                const t = JSON.parse(e)
                  , n = t.availableLanguages["*"];
                me = t.locale,
                Pe = n || he,
                sn = t._translationsConfigFile
            } catch {}
    } else
        console.error("Unable to resolve platform.");
    const ue = Ce
      , ln = ve
      , Oe = function() {
        if (T.setImmediate)
            return T.setImmediate.bind(T);
        if (typeof T.postMessage == "function" && !T.importScripts) {
            let n = [];
            T.addEventListener("message", r => {
                if (r.data && r.data.vscodeSetImmediateId)
                    for (let i = 0, l = n.length; i < l; i++) {
                        const u = n[i];
                        if (u.id === r.data.vscodeSetImmediateId) {
                            n.splice(i, 1),
                            u.callback();
                            return
                        }
                    }
            }
            );
            let s = 0;
            return r => {
                const i = ++s;
                n.push({
                    id: i,
                    callback: r
                }),
                T.postMessage({
                    vscodeSetImmediateId: i
                }, "*")
            }
        }
        if (typeof (k == null ? void 0 : k.nextTick) == "function")
            return k.nextTick.bind(k);
        const t = Promise.resolve();
        return n => t.then(n)
    }();
    function un(e) {
        let t = []
          , n = Object.getPrototypeOf(e);
        for (; Object.prototype !== n; )
            t = t.concat(Object.getOwnPropertyNames(n)),
            n = Object.getPrototypeOf(n);
        return t
    }
    function pe(e) {
        const t = [];
        for (const n of un(e))
            typeof e[n] == "function" && t.push(n);
        return t
    }
    function Ke(e, t) {
        const n = r => function() {
            const i = Array.prototype.slice.call(arguments, 0);
            return t(r, i)
        }
        ;
        let s = {};
        for (const r of e)
            s[r] = n(r);
        return s
    }
    const an = "$initialize";
    class on {
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
            let s = String(++this._lastSentReq);
            return new Promise( (r, i) => {
                this._pendingReplies[s] = {
                    resolve: r,
                    reject: i
                },
                this._send({
                    vsWorker: this._workerId,
                    req: s,
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
                let i = t;
                if (!this._pendingReplies[i.seq]) {
                    console.warn("Got reply to unknown seq");
                    return
                }
                let l = this._pendingReplies[i.seq];
                if (delete this._pendingReplies[i.seq],
                i.err) {
                    let u = i.err;
                    i.err.$isError && (u = new Error,
                    u.name = i.err.name,
                    u.message = i.err.message,
                    u.stack = i.err.stack),
                    l.reject(u);
                    return
                }
                l.resolve(i.res);
                return
            }
            let n = t
              , s = n.req;
            this._handler.handleMessage(n.method, n.args).then(i => {
                this._send({
                    vsWorker: this._workerId,
                    seq: s,
                    res: i,
                    err: void 0
                })
            }
            , i => {
                i.detail instanceof Error && (i.detail = ye(i.detail)),
                this._send({
                    vsWorker: this._workerId,
                    seq: s,
                    res: void 0,
                    err: ye(i)
                })
            }
            )
        }
        _send(t) {
            let n = [];
            if (t.req) {
                const s = t;
                for (let r = 0; r < s.args.length; r++)
                    s.args[r]instanceof ArrayBuffer && n.push(s.args[r])
            } else {
                const s = t;
                s.res instanceof ArrayBuffer && n.push(s.res)
            }
            this._handler.sendMessage(t, n)
        }
    }
    class cn {
        constructor(t, n) {
            this._requestHandlerFactory = n,
            this._requestHandler = null,
            this._protocol = new on({
                sendMessage: (s, r) => {
                    t(s, r)
                }
                ,
                handleMessage: (s, r) => this._handleMessage(s, r)
            })
        }
        onmessage(t) {
            this._protocol.handleMessage(t)
        }
        _handleMessage(t, n) {
            if (t === an)
                return this.initialize(n[0], n[1], n[2], n[3]);
            if (!this._requestHandler || typeof this._requestHandler[t] != "function")
                return Promise.reject(new Error("Missing requestHandler or method: " + t));
            try {
                return Promise.resolve(this._requestHandler[t].apply(this._requestHandler, n))
            } catch (s) {
                return Promise.reject(s)
            }
        }
        initialize(t, n, s, r) {
            this._protocol.setWorkerId(t);
            const l = Ke(r, (u, a) => this._protocol.sendMessage(u, a));
            return this._requestHandlerFactory ? (this._requestHandler = this._requestHandlerFactory(l),
            Promise.resolve(pe(this._requestHandler))) : (n && (typeof n.baseUrl != "undefined" && delete n.baseUrl,
            typeof n.paths != "undefined" && typeof n.paths.vs != "undefined" && delete n.paths.vs,
            typeof n.trustedTypesPolicy !== void 0 && delete n.trustedTypesPolicy,
            n.catchError = !0,
            self.require.config(n)),
            new Promise( (u, a) => {
                self.require([s], o => {
                    if (this._requestHandler = o.create(l),
                    !this._requestHandler) {
                        a(new Error("No RequestHandler!"));
                        return
                    }
                    u(pe(this._requestHandler))
                }
                , a)
            }
            ))
        }
    }
    class $ {
        constructor(t, n, s, r) {
            this.originalStart = t,
            this.originalLength = n,
            this.modifiedStart = s,
            this.modifiedLength = r
        }
        getOriginalEnd() {
            return this.originalStart + this.originalLength
        }
        getModifiedEnd() {
            return this.modifiedStart + this.modifiedLength
        }
    }
    function fn(e) {
        return e.split(/\r\n|\r|\n/)
    }
    function hn(e) {
        for (let t = 0, n = e.length; t < n; t++) {
            const s = e.charCodeAt(t);
            if (s !== 32 && s !== 9)
                return t
        }
        return -1
    }
    function mn(e, t=e.length - 1) {
        for (let n = t; n >= 0; n--) {
            const s = e.charCodeAt(n);
            if (s !== 32 && s !== 9)
                return n
        }
        return -1
    }
    function et(e, t) {
        return (t << 5) - t + e | 0
    }
    function dn(e, t) {
        t = et(149417, t);
        for (let n = 0, s = e.length; n < s; n++)
            t = et(e.charCodeAt(n), t);
        return t
    }
    class tt {
        constructor(t) {
            this.source = t
        }
        getElements() {
            const t = this.source
              , n = new Int32Array(t.length);
            for (let s = 0, r = t.length; s < r; s++)
                n[s] = t.charCodeAt(s);
            return n
        }
    }
    function gn(e, t, n) {
        return new z(new tt(e),new tt(t)).ComputeDiff(n).changes
    }
    class K {
        static Assert(t, n) {
            if (!t)
                throw new Error(n)
        }
    }
    class ee {
        static Copy(t, n, s, r, i) {
            for (let l = 0; l < i; l++)
                s[r + l] = t[n + l]
        }
        static Copy2(t, n, s, r, i) {
            for (let l = 0; l < i; l++)
                s[r + l] = t[n + l]
        }
    }
    class nt {
        constructor() {
            this.m_changes = [],
            this.m_originalStart = 1073741824,
            this.m_modifiedStart = 1073741824,
            this.m_originalCount = 0,
            this.m_modifiedCount = 0
        }
        MarkNextChange() {
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new $(this.m_originalStart,this.m_originalCount,this.m_modifiedStart,this.m_modifiedCount)),
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
    class z {
        constructor(t, n, s=null) {
            this.ContinueProcessingPredicate = s,
            this._originalSequence = t,
            this._modifiedSequence = n;
            const [r,i,l] = z._getElements(t)
              , [u,a,o] = z._getElements(n);
            this._hasStrings = l && o,
            this._originalStringElements = r,
            this._originalElementsOrHash = i,
            this._modifiedStringElements = u,
            this._modifiedElementsOrHash = a,
            this.m_forwardHistory = [],
            this.m_reverseHistory = []
        }
        static _isStringArray(t) {
            return t.length > 0 && typeof t[0] == "string"
        }
        static _getElements(t) {
            const n = t.getElements();
            if (z._isStringArray(n)) {
                const s = new Int32Array(n.length);
                for (let r = 0, i = n.length; r < i; r++)
                    s[r] = dn(n[r], 0);
                return [n, s, !0]
            }
            return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1]
        }
        ElementsAreEqual(t, n) {
            return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0
        }
        ElementsAreStrictEqual(t, n) {
            if (!this.ElementsAreEqual(t, n))
                return !1;
            const s = z._getStrictElement(this._originalSequence, t)
              , r = z._getStrictElement(this._modifiedSequence, n);
            return s === r
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
        _ComputeDiff(t, n, s, r, i) {
            const l = [!1];
            let u = this.ComputeDiffRecursive(t, n, s, r, l);
            return i && (u = this.PrettifyChanges(u)),
            {
                quitEarly: l[0],
                changes: u
            }
        }
        ComputeDiffRecursive(t, n, s, r, i) {
            for (i[0] = !1; t <= n && s <= r && this.ElementsAreEqual(t, s); )
                t++,
                s++;
            for (; n >= t && r >= s && this.ElementsAreEqual(n, r); )
                n--,
                r--;
            if (t > n || s > r) {
                let c;
                return s <= r ? (K.Assert(t === n + 1, "originalStart should only be one more than originalEnd"),
                c = [new $(t,0,s,r - s + 1)]) : t <= n ? (K.Assert(s === r + 1, "modifiedStart should only be one more than modifiedEnd"),
                c = [new $(t,n - t + 1,s,0)]) : (K.Assert(t === n + 1, "originalStart should only be one more than originalEnd"),
                K.Assert(s === r + 1, "modifiedStart should only be one more than modifiedEnd"),
                c = []),
                c
            }
            const l = [0]
              , u = [0]
              , a = this.ComputeRecursionPoint(t, n, s, r, l, u, i)
              , o = l[0]
              , f = u[0];
            if (a !== null)
                return a;
            if (!i[0]) {
                const c = this.ComputeDiffRecursive(t, o, s, f, i);
                let m = [];
                return i[0] ? m = [new $(o + 1,n - (o + 1) + 1,f + 1,r - (f + 1) + 1)] : m = this.ComputeDiffRecursive(o + 1, n, f + 1, r, i),
                this.ConcatenateChanges(c, m)
            }
            return [new $(t,n - t + 1,s,r - s + 1)]
        }
        WALKTRACE(t, n, s, r, i, l, u, a, o, f, c, m, L, b, w, M, P, d) {
            let h = null
              , g = null
              , _ = new nt
              , A = n
              , S = s
              , N = L[0] - M[0] - r
              , p = -1073741824
              , I = this.m_forwardHistory.length - 1;
            do {
                const R = N + t;
                R === A || R < S && o[R - 1] < o[R + 1] ? (c = o[R + 1],
                b = c - N - r,
                c < p && _.MarkNextChange(),
                p = c,
                _.AddModifiedElement(c + 1, b),
                N = R + 1 - t) : (c = o[R - 1] + 1,
                b = c - N - r,
                c < p && _.MarkNextChange(),
                p = c - 1,
                _.AddOriginalElement(c, b + 1),
                N = R - 1 - t),
                I >= 0 && (o = this.m_forwardHistory[I],
                t = o[0],
                A = 1,
                S = o.length - 1)
            } while (--I >= -1);
            if (h = _.getReverseChanges(),
            d[0]) {
                let R = L[0] + 1
                  , C = M[0] + 1;
                if (h !== null && h.length > 0) {
                    const Q = h[h.length - 1];
                    R = Math.max(R, Q.getOriginalEnd()),
                    C = Math.max(C, Q.getModifiedEnd())
                }
                g = [new $(R,m - R + 1,C,w - C + 1)]
            } else {
                _ = new nt,
                A = l,
                S = u,
                N = L[0] - M[0] - a,
                p = 1073741824,
                I = P ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
                do {
                    const R = N + i;
                    R === A || R < S && f[R - 1] >= f[R + 1] ? (c = f[R + 1] - 1,
                    b = c - N - a,
                    c > p && _.MarkNextChange(),
                    p = c + 1,
                    _.AddOriginalElement(c + 1, b + 1),
                    N = R + 1 - i) : (c = f[R - 1],
                    b = c - N - a,
                    c > p && _.MarkNextChange(),
                    p = c,
                    _.AddModifiedElement(c + 1, b + 1),
                    N = R - 1 - i),
                    I >= 0 && (f = this.m_reverseHistory[I],
                    i = f[0],
                    A = 1,
                    S = f.length - 1)
                } while (--I >= -1);
                g = _.getChanges()
            }
            return this.ConcatenateChanges(h, g)
        }
        ComputeRecursionPoint(t, n, s, r, i, l, u) {
            let a = 0
              , o = 0
              , f = 0
              , c = 0
              , m = 0
              , L = 0;
            t--,
            s--,
            i[0] = 0,
            l[0] = 0,
            this.m_forwardHistory = [],
            this.m_reverseHistory = [];
            const b = n - t + (r - s)
              , w = b + 1
              , M = new Int32Array(w)
              , P = new Int32Array(w)
              , d = r - s
              , h = n - t
              , g = t - s
              , _ = n - r
              , S = (h - d) % 2 === 0;
            M[d] = t,
            P[h] = n,
            u[0] = !1;
            for (let N = 1; N <= b / 2 + 1; N++) {
                let p = 0
                  , I = 0;
                f = this.ClipDiagonalBound(d - N, N, d, w),
                c = this.ClipDiagonalBound(d + N, N, d, w);
                for (let C = f; C <= c; C += 2) {
                    C === f || C < c && M[C - 1] < M[C + 1] ? a = M[C + 1] : a = M[C - 1] + 1,
                    o = a - (C - d) - g;
                    const Q = a;
                    for (; a < n && o < r && this.ElementsAreEqual(a + 1, o + 1); )
                        a++,
                        o++;
                    if (M[C] = a,
                    a + o > p + I && (p = a,
                    I = o),
                    !S && Math.abs(C - h) <= N - 1 && a >= P[C])
                        return i[0] = a,
                        l[0] = o,
                        Q <= P[C] && 1447 > 0 && N <= 1447 + 1 ? this.WALKTRACE(d, f, c, g, h, m, L, _, M, P, a, n, i, o, r, l, S, u) : null
                }
                const R = (p - t + (I - s) - N) / 2;
                if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(p, R))
                    return u[0] = !0,
                    i[0] = p,
                    l[0] = I,
                    R > 0 && 1447 > 0 && N <= 1447 + 1 ? this.WALKTRACE(d, f, c, g, h, m, L, _, M, P, a, n, i, o, r, l, S, u) : (t++,
                    s++,
                    [new $(t,n - t + 1,s,r - s + 1)]);
                m = this.ClipDiagonalBound(h - N, N, h, w),
                L = this.ClipDiagonalBound(h + N, N, h, w);
                for (let C = m; C <= L; C += 2) {
                    C === m || C < L && P[C - 1] >= P[C + 1] ? a = P[C + 1] - 1 : a = P[C - 1],
                    o = a - (C - h) - _;
                    const Q = a;
                    for (; a > t && o > s && this.ElementsAreEqual(a, o); )
                        a--,
                        o--;
                    if (P[C] = a,
                    S && Math.abs(C - d) <= N && a <= M[C])
                        return i[0] = a,
                        l[0] = o,
                        Q >= M[C] && 1447 > 0 && N <= 1447 + 1 ? this.WALKTRACE(d, f, c, g, h, m, L, _, M, P, a, n, i, o, r, l, S, u) : null
                }
                if (N <= 1447) {
                    let C = new Int32Array(c - f + 2);
                    C[0] = d - f + 1,
                    ee.Copy2(M, f, C, 1, c - f + 1),
                    this.m_forwardHistory.push(C),
                    C = new Int32Array(L - m + 2),
                    C[0] = h - m + 1,
                    ee.Copy2(P, m, C, 1, L - m + 1),
                    this.m_reverseHistory.push(C)
                }
            }
            return this.WALKTRACE(d, f, c, g, h, m, L, _, M, P, a, n, i, o, r, l, S, u)
        }
        PrettifyChanges(t) {
            for (let n = 0; n < t.length; n++) {
                const s = t[n]
                  , r = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length
                  , i = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length
                  , l = s.originalLength > 0
                  , u = s.modifiedLength > 0;
                for (; s.originalStart + s.originalLength < r && s.modifiedStart + s.modifiedLength < i && (!l || this.OriginalElementsAreEqual(s.originalStart, s.originalStart + s.originalLength)) && (!u || this.ModifiedElementsAreEqual(s.modifiedStart, s.modifiedStart + s.modifiedLength)); ) {
                    const o = this.ElementsAreStrictEqual(s.originalStart, s.modifiedStart);
                    if (this.ElementsAreStrictEqual(s.originalStart + s.originalLength, s.modifiedStart + s.modifiedLength) && !o)
                        break;
                    s.originalStart++,
                    s.modifiedStart++
                }
                let a = [null];
                if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], a)) {
                    t[n] = a[0],
                    t.splice(n + 1, 1),
                    n--;
                    continue
                }
            }
            for (let n = t.length - 1; n >= 0; n--) {
                const s = t[n];
                let r = 0
                  , i = 0;
                if (n > 0) {
                    const c = t[n - 1];
                    r = c.originalStart + c.originalLength,
                    i = c.modifiedStart + c.modifiedLength
                }
                const l = s.originalLength > 0
                  , u = s.modifiedLength > 0;
                let a = 0
                  , o = this._boundaryScore(s.originalStart, s.originalLength, s.modifiedStart, s.modifiedLength);
                for (let c = 1; ; c++) {
                    const m = s.originalStart - c
                      , L = s.modifiedStart - c;
                    if (m < r || L < i || l && !this.OriginalElementsAreEqual(m, m + s.originalLength) || u && !this.ModifiedElementsAreEqual(L, L + s.modifiedLength))
                        break;
                    const w = (m === r && L === i ? 5 : 0) + this._boundaryScore(m, s.originalLength, L, s.modifiedLength);
                    w > o && (o = w,
                    a = c)
                }
                s.originalStart -= a,
                s.modifiedStart -= a;
                const f = [null];
                if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], f)) {
                    t[n - 1] = f[0],
                    t.splice(n, 1),
                    n++;
                    continue
                }
            }
            if (this._hasStrings)
                for (let n = 1, s = t.length; n < s; n++) {
                    const r = t[n - 1]
                      , i = t[n]
                      , l = i.originalStart - r.originalStart - r.originalLength
                      , u = r.originalStart
                      , a = i.originalStart + i.originalLength
                      , o = a - u
                      , f = r.modifiedStart
                      , c = i.modifiedStart + i.modifiedLength
                      , m = c - f;
                    if (l < 5 && o < 20 && m < 20) {
                        const L = this._findBetterContiguousSequence(u, o, f, m, l);
                        if (L) {
                            const [b,w] = L;
                            (b !== r.originalStart + r.originalLength || w !== r.modifiedStart + r.modifiedLength) && (r.originalLength = b - r.originalStart,
                            r.modifiedLength = w - r.modifiedStart,
                            i.originalStart = b + l,
                            i.modifiedStart = w + l,
                            i.originalLength = a - i.originalStart,
                            i.modifiedLength = c - i.modifiedStart)
                        }
                    }
                }
            return t
        }
        _findBetterContiguousSequence(t, n, s, r, i) {
            if (n < i || r < i)
                return null;
            const l = t + n - i + 1
              , u = s + r - i + 1;
            let a = 0
              , o = 0
              , f = 0;
            for (let c = t; c < l; c++)
                for (let m = s; m < u; m++) {
                    const L = this._contiguousSequenceScore(c, m, i);
                    L > 0 && L > a && (a = L,
                    o = c,
                    f = m)
                }
            return a > 0 ? [o, f] : null
        }
        _contiguousSequenceScore(t, n, s) {
            let r = 0;
            for (let i = 0; i < s; i++) {
                if (!this.ElementsAreEqual(t + i, n + i))
                    return 0;
                r += this._originalStringElements[t + i].length
            }
            return r
        }
        _OriginalIsBoundary(t) {
            return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t])
        }
        _OriginalRegionIsBoundary(t, n) {
            if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1))
                return !0;
            if (n > 0) {
                const s = t + n;
                if (this._OriginalIsBoundary(s - 1) || this._OriginalIsBoundary(s))
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
                const s = t + n;
                if (this._ModifiedIsBoundary(s - 1) || this._ModifiedIsBoundary(s))
                    return !0
            }
            return !1
        }
        _boundaryScore(t, n, s, r) {
            const i = this._OriginalRegionIsBoundary(t, n) ? 1 : 0
              , l = this._ModifiedRegionIsBoundary(s, r) ? 1 : 0;
            return i + l
        }
        ConcatenateChanges(t, n) {
            let s = [];
            if (t.length === 0 || n.length === 0)
                return n.length > 0 ? n : t;
            if (this.ChangesOverlap(t[t.length - 1], n[0], s)) {
                const r = new Array(t.length + n.length - 1);
                return ee.Copy(t, 0, r, 0, t.length - 1),
                r[t.length - 1] = s[0],
                ee.Copy(n, 1, r, t.length, n.length - 1),
                r
            } else {
                const r = new Array(t.length + n.length);
                return ee.Copy(t, 0, r, 0, t.length),
                ee.Copy(n, 0, r, t.length, n.length),
                r
            }
        }
        ChangesOverlap(t, n, s) {
            if (K.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"),
            K.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"),
            t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
                const r = t.originalStart;
                let i = t.originalLength;
                const l = t.modifiedStart;
                let u = t.modifiedLength;
                return t.originalStart + t.originalLength >= n.originalStart && (i = n.originalStart + n.originalLength - t.originalStart),
                t.modifiedStart + t.modifiedLength >= n.modifiedStart && (u = n.modifiedStart + n.modifiedLength - t.modifiedStart),
                s[0] = new $(r,i,l,u),
                !0
            } else
                return s[0] = null,
                !1
        }
        ClipDiagonalBound(t, n, s, r) {
            if (t >= 0 && t < r)
                return t;
            const i = s
              , l = r - s - 1
              , u = n % 2 === 0;
            if (t < 0) {
                const a = i % 2 === 0;
                return u === a ? 0 : 1
            } else {
                const a = l % 2 === 0;
                return u === a ? r - 1 : r - 2
            }
        }
    }
    let te;
    if (typeof T.vscode != "undefined" && typeof T.vscode.process != "undefined") {
        const e = T.vscode.process;
        te = {
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
                return Oe(t)
            }
        }
    } else
        typeof process != "undefined" ? te = {
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
        } : te = {
            get platform() {
                return ue ? "win32" : ln ? "darwin" : "linux"
            },
            get arch() {},
            nextTick(e) {
                return Oe(e)
            },
            get env() {
                return {}
            },
            cwd() {
                return "/"
            }
        };
    const Re = te.cwd
      , _n = te.env
      , X = te.platform
      , Ln = 65
      , Nn = 97
      , Sn = 90
      , bn = 122
      , G = 46
      , F = 47
      , q = 92
      , j = 58
      , An = 63;
    class st extends Error {
        constructor(t, n, s) {
            let r;
            typeof n == "string" && n.indexOf("not ") === 0 ? (r = "must not be",
            n = n.replace(/^not /, "")) : r = "must be";
            const i = t.indexOf(".") !== -1 ? "property" : "argument";
            let l = `The "${t}" ${i} ${r} of type ${n}`;
            l += `. Received type ${typeof s}`,
            super(l),
            this.code = "ERR_INVALID_ARG_TYPE"
        }
    }
    function D(e, t) {
        if (typeof e != "string")
            throw new st(t,"string",e)
    }
    function v(e) {
        return e === F || e === q
    }
    function Ue(e) {
        return e === F
    }
    function y(e) {
        return e >= Ln && e <= Sn || e >= Nn && e <= bn
    }
    function de(e, t, n, s) {
        let r = ""
          , i = 0
          , l = -1
          , u = 0
          , a = 0;
        for (let o = 0; o <= e.length; ++o) {
            if (o < e.length)
                a = e.charCodeAt(o);
            else {
                if (s(a))
                    break;
                a = F
            }
            if (s(a)) {
                if (!(l === o - 1 || u === 1))
                    if (u === 2) {
                        if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== G || r.charCodeAt(r.length - 2) !== G) {
                            if (r.length > 2) {
                                const f = r.lastIndexOf(n);
                                f === -1 ? (r = "",
                                i = 0) : (r = r.slice(0, f),
                                i = r.length - 1 - r.lastIndexOf(n)),
                                l = o,
                                u = 0;
                                continue
                            } else if (r.length !== 0) {
                                r = "",
                                i = 0,
                                l = o,
                                u = 0;
                                continue
                            }
                        }
                        t && (r += r.length > 0 ? `${n}..` : "..",
                        i = 2)
                    } else
                        r.length > 0 ? r += `${n}${e.slice(l + 1, o)}` : r = e.slice(l + 1, o),
                        i = o - l - 1;
                l = o,
                u = 0
            } else
                a === G && u !== -1 ? ++u : u = -1
        }
        return r
    }
    function rt(e, t) {
        if (t === null || typeof t != "object")
            throw new st("pathObject","Object",t);
        const n = t.dir || t.root
          , s = t.base || `${t.name || ""}${t.ext || ""}`;
        return n ? n === t.root ? `${n}${s}` : `${n}${e}${s}` : s
    }
    const H = {
        resolve(...e) {
            let t = ""
              , n = ""
              , s = !1;
            for (let r = e.length - 1; r >= -1; r--) {
                let i;
                if (r >= 0) {
                    if (i = e[r],
                    D(i, "path"),
                    i.length === 0)
                        continue
                } else
                    t.length === 0 ? i = Re() : (i = _n[`=${t}`] || Re(),
                    (i === void 0 || i.slice(0, 2).toLowerCase() !== t.toLowerCase() && i.charCodeAt(2) === q) && (i = `${t}\\`));
                const l = i.length;
                let u = 0
                  , a = ""
                  , o = !1;
                const f = i.charCodeAt(0);
                if (l === 1)
                    v(f) && (u = 1,
                    o = !0);
                else if (v(f))
                    if (o = !0,
                    v(i.charCodeAt(1))) {
                        let c = 2
                          , m = c;
                        for (; c < l && !v(i.charCodeAt(c)); )
                            c++;
                        if (c < l && c !== m) {
                            const L = i.slice(m, c);
                            for (m = c; c < l && v(i.charCodeAt(c)); )
                                c++;
                            if (c < l && c !== m) {
                                for (m = c; c < l && !v(i.charCodeAt(c)); )
                                    c++;
                                (c === l || c !== m) && (a = `\\\\${L}\\${i.slice(m, c)}`,
                                u = c)
                            }
                        }
                    } else
                        u = 1;
                else
                    y(f) && i.charCodeAt(1) === j && (a = i.slice(0, 2),
                    u = 2,
                    l > 2 && v(i.charCodeAt(2)) && (o = !0,
                    u = 3));
                if (a.length > 0)
                    if (t.length > 0) {
                        if (a.toLowerCase() !== t.toLowerCase())
                            continue
                    } else
                        t = a;
                if (s) {
                    if (t.length > 0)
                        break
                } else if (n = `${i.slice(u)}\\${n}`,
                s = o,
                o && t.length > 0)
                    break
            }
            return n = de(n, !s, "\\", v),
            s ? `${t}\\${n}` : `${t}${n}` || "."
        },
        normalize(e) {
            D(e, "path");
            const t = e.length;
            if (t === 0)
                return ".";
            let n = 0, s, r = !1;
            const i = e.charCodeAt(0);
            if (t === 1)
                return Ue(i) ? "\\" : e;
            if (v(i))
                if (r = !0,
                v(e.charCodeAt(1))) {
                    let u = 2
                      , a = u;
                    for (; u < t && !v(e.charCodeAt(u)); )
                        u++;
                    if (u < t && u !== a) {
                        const o = e.slice(a, u);
                        for (a = u; u < t && v(e.charCodeAt(u)); )
                            u++;
                        if (u < t && u !== a) {
                            for (a = u; u < t && !v(e.charCodeAt(u)); )
                                u++;
                            if (u === t)
                                return `\\\\${o}\\${e.slice(a)}\\`;
                            u !== a && (s = `\\\\${o}\\${e.slice(a, u)}`,
                            n = u)
                        }
                    }
                } else
                    n = 1;
            else
                y(i) && e.charCodeAt(1) === j && (s = e.slice(0, 2),
                n = 2,
                t > 2 && v(e.charCodeAt(2)) && (r = !0,
                n = 3));
            let l = n < t ? de(e.slice(n), !r, "\\", v) : "";
            return l.length === 0 && !r && (l = "."),
            l.length > 0 && v(e.charCodeAt(t - 1)) && (l += "\\"),
            s === void 0 ? r ? `\\${l}` : l : r ? `${s}\\${l}` : `${s}${l}`
        },
        isAbsolute(e) {
            D(e, "path");
            const t = e.length;
            if (t === 0)
                return !1;
            const n = e.charCodeAt(0);
            return v(n) || t > 2 && y(n) && e.charCodeAt(1) === j && v(e.charCodeAt(2))
        },
        join(...e) {
            if (e.length === 0)
                return ".";
            let t, n;
            for (let i = 0; i < e.length; ++i) {
                const l = e[i];
                D(l, "path"),
                l.length > 0 && (t === void 0 ? t = n = l : t += `\\${l}`)
            }
            if (t === void 0)
                return ".";
            let s = !0
              , r = 0;
            if (typeof n == "string" && v(n.charCodeAt(0))) {
                ++r;
                const i = n.length;
                i > 1 && v(n.charCodeAt(1)) && (++r,
                i > 2 && (v(n.charCodeAt(2)) ? ++r : s = !1))
            }
            if (s) {
                for (; r < t.length && v(t.charCodeAt(r)); )
                    r++;
                r >= 2 && (t = `\\${t.slice(r)}`)
            }
            return H.normalize(t)
        },
        relative(e, t) {
            if (D(e, "from"),
            D(t, "to"),
            e === t)
                return "";
            const n = H.resolve(e)
              , s = H.resolve(t);
            if (n === s || (e = n.toLowerCase(),
            t = s.toLowerCase(),
            e === t))
                return "";
            let r = 0;
            for (; r < e.length && e.charCodeAt(r) === q; )
                r++;
            let i = e.length;
            for (; i - 1 > r && e.charCodeAt(i - 1) === q; )
                i--;
            const l = i - r;
            let u = 0;
            for (; u < t.length && t.charCodeAt(u) === q; )
                u++;
            let a = t.length;
            for (; a - 1 > u && t.charCodeAt(a - 1) === q; )
                a--;
            const o = a - u
              , f = l < o ? l : o;
            let c = -1
              , m = 0;
            for (; m < f; m++) {
                const b = e.charCodeAt(r + m);
                if (b !== t.charCodeAt(u + m))
                    break;
                b === q && (c = m)
            }
            if (m !== f) {
                if (c === -1)
                    return s
            } else {
                if (o > f) {
                    if (t.charCodeAt(u + m) === q)
                        return s.slice(u + m + 1);
                    if (m === 2)
                        return s.slice(u + m)
                }
                l > f && (e.charCodeAt(r + m) === q ? c = m : m === 2 && (c = 3)),
                c === -1 && (c = 0)
            }
            let L = "";
            for (m = r + c + 1; m <= i; ++m)
                (m === i || e.charCodeAt(m) === q) && (L += L.length === 0 ? ".." : "\\..");
            return u += c,
            L.length > 0 ? `${L}${s.slice(u, a)}` : (s.charCodeAt(u) === q && ++u,
            s.slice(u, a))
        },
        toNamespacedPath(e) {
            if (typeof e != "string")
                return e;
            if (e.length === 0)
                return "";
            const t = H.resolve(e);
            if (t.length <= 2)
                return e;
            if (t.charCodeAt(0) === q) {
                if (t.charCodeAt(1) === q) {
                    const n = t.charCodeAt(2);
                    if (n !== An && n !== G)
                        return `\\\\?\\UNC\\${t.slice(2)}`
                }
            } else if (y(t.charCodeAt(0)) && t.charCodeAt(1) === j && t.charCodeAt(2) === q)
                return `\\\\?\\${t}`;
            return e
        },
        dirname(e) {
            D(e, "path");
            const t = e.length;
            if (t === 0)
                return ".";
            let n = -1
              , s = 0;
            const r = e.charCodeAt(0);
            if (t === 1)
                return v(r) ? e : ".";
            if (v(r)) {
                if (n = s = 1,
                v(e.charCodeAt(1))) {
                    let u = 2
                      , a = u;
                    for (; u < t && !v(e.charCodeAt(u)); )
                        u++;
                    if (u < t && u !== a) {
                        for (a = u; u < t && v(e.charCodeAt(u)); )
                            u++;
                        if (u < t && u !== a) {
                            for (a = u; u < t && !v(e.charCodeAt(u)); )
                                u++;
                            if (u === t)
                                return e;
                            u !== a && (n = s = u + 1)
                        }
                    }
                }
            } else
                y(r) && e.charCodeAt(1) === j && (n = t > 2 && v(e.charCodeAt(2)) ? 3 : 2,
                s = n);
            let i = -1
              , l = !0;
            for (let u = t - 1; u >= s; --u)
                if (v(e.charCodeAt(u))) {
                    if (!l) {
                        i = u;
                        break
                    }
                } else
                    l = !1;
            if (i === -1) {
                if (n === -1)
                    return ".";
                i = n
            }
            return e.slice(0, i)
        },
        basename(e, t) {
            t !== void 0 && D(t, "ext"),
            D(e, "path");
            let n = 0, s = -1, r = !0, i;
            if (e.length >= 2 && y(e.charCodeAt(0)) && e.charCodeAt(1) === j && (n = 2),
            t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e)
                    return "";
                let l = t.length - 1
                  , u = -1;
                for (i = e.length - 1; i >= n; --i) {
                    const a = e.charCodeAt(i);
                    if (v(a)) {
                        if (!r) {
                            n = i + 1;
                            break
                        }
                    } else
                        u === -1 && (r = !1,
                        u = i + 1),
                        l >= 0 && (a === t.charCodeAt(l) ? --l === -1 && (s = i) : (l = -1,
                        s = u))
                }
                return n === s ? s = u : s === -1 && (s = e.length),
                e.slice(n, s)
            }
            for (i = e.length - 1; i >= n; --i)
                if (v(e.charCodeAt(i))) {
                    if (!r) {
                        n = i + 1;
                        break
                    }
                } else
                    s === -1 && (r = !1,
                    s = i + 1);
            return s === -1 ? "" : e.slice(n, s)
        },
        extname(e) {
            D(e, "path");
            let t = 0
              , n = -1
              , s = 0
              , r = -1
              , i = !0
              , l = 0;
            e.length >= 2 && e.charCodeAt(1) === j && y(e.charCodeAt(0)) && (t = s = 2);
            for (let u = e.length - 1; u >= t; --u) {
                const a = e.charCodeAt(u);
                if (v(a)) {
                    if (!i) {
                        s = u + 1;
                        break
                    }
                    continue
                }
                r === -1 && (i = !1,
                r = u + 1),
                a === G ? n === -1 ? n = u : l !== 1 && (l = 1) : n !== -1 && (l = -1)
            }
            return n === -1 || r === -1 || l === 0 || l === 1 && n === r - 1 && n === s + 1 ? "" : e.slice(n, r)
        },
        format: rt.bind(null, "\\"),
        parse(e) {
            D(e, "path");
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
            let s = 0
              , r = e.charCodeAt(0);
            if (n === 1)
                return v(r) ? (t.root = t.dir = e,
                t) : (t.base = t.name = e,
                t);
            if (v(r)) {
                if (s = 1,
                v(e.charCodeAt(1))) {
                    let c = 2
                      , m = c;
                    for (; c < n && !v(e.charCodeAt(c)); )
                        c++;
                    if (c < n && c !== m) {
                        for (m = c; c < n && v(e.charCodeAt(c)); )
                            c++;
                        if (c < n && c !== m) {
                            for (m = c; c < n && !v(e.charCodeAt(c)); )
                                c++;
                            c === n ? s = c : c !== m && (s = c + 1)
                        }
                    }
                }
            } else if (y(r) && e.charCodeAt(1) === j) {
                if (n <= 2)
                    return t.root = t.dir = e,
                    t;
                if (s = 2,
                v(e.charCodeAt(2))) {
                    if (n === 3)
                        return t.root = t.dir = e,
                        t;
                    s = 3
                }
            }
            s > 0 && (t.root = e.slice(0, s));
            let i = -1
              , l = s
              , u = -1
              , a = !0
              , o = e.length - 1
              , f = 0;
            for (; o >= s; --o) {
                if (r = e.charCodeAt(o),
                v(r)) {
                    if (!a) {
                        l = o + 1;
                        break
                    }
                    continue
                }
                u === -1 && (a = !1,
                u = o + 1),
                r === G ? i === -1 ? i = o : f !== 1 && (f = 1) : i !== -1 && (f = -1)
            }
            return u !== -1 && (i === -1 || f === 0 || f === 1 && i === u - 1 && i === l + 1 ? t.base = t.name = e.slice(l, u) : (t.name = e.slice(l, i),
            t.base = e.slice(l, u),
            t.ext = e.slice(i, u))),
            l > 0 && l !== s ? t.dir = e.slice(0, l - 1) : t.dir = t.root,
            t
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null
    }
      , W = {
        resolve(...e) {
            let t = ""
              , n = !1;
            for (let s = e.length - 1; s >= -1 && !n; s--) {
                const r = s >= 0 ? e[s] : Re();
                D(r, "path"),
                r.length !== 0 && (t = `${r}/${t}`,
                n = r.charCodeAt(0) === F)
            }
            return t = de(t, !n, "/", Ue),
            n ? `/${t}` : t.length > 0 ? t : "."
        },
        normalize(e) {
            if (D(e, "path"),
            e.length === 0)
                return ".";
            const t = e.charCodeAt(0) === F
              , n = e.charCodeAt(e.length - 1) === F;
            return e = de(e, !t, "/", Ue),
            e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"),
            t ? `/${e}` : e)
        },
        isAbsolute(e) {
            return D(e, "path"),
            e.length > 0 && e.charCodeAt(0) === F
        },
        join(...e) {
            if (e.length === 0)
                return ".";
            let t;
            for (let n = 0; n < e.length; ++n) {
                const s = e[n];
                D(s, "path"),
                s.length > 0 && (t === void 0 ? t = s : t += `/${s}`)
            }
            return t === void 0 ? "." : W.normalize(t)
        },
        relative(e, t) {
            if (D(e, "from"),
            D(t, "to"),
            e === t || (e = W.resolve(e),
            t = W.resolve(t),
            e === t))
                return "";
            const n = 1
              , s = e.length
              , r = s - n
              , i = 1
              , l = t.length - i
              , u = r < l ? r : l;
            let a = -1
              , o = 0;
            for (; o < u; o++) {
                const c = e.charCodeAt(n + o);
                if (c !== t.charCodeAt(i + o))
                    break;
                c === F && (a = o)
            }
            if (o === u)
                if (l > u) {
                    if (t.charCodeAt(i + o) === F)
                        return t.slice(i + o + 1);
                    if (o === 0)
                        return t.slice(i + o)
                } else
                    r > u && (e.charCodeAt(n + o) === F ? a = o : o === 0 && (a = 0));
            let f = "";
            for (o = n + a + 1; o <= s; ++o)
                (o === s || e.charCodeAt(o) === F) && (f += f.length === 0 ? ".." : "/..");
            return `${f}${t.slice(i + a)}`
        },
        toNamespacedPath(e) {
            return e
        },
        dirname(e) {
            if (D(e, "path"),
            e.length === 0)
                return ".";
            const t = e.charCodeAt(0) === F;
            let n = -1
              , s = !0;
            for (let r = e.length - 1; r >= 1; --r)
                if (e.charCodeAt(r) === F) {
                    if (!s) {
                        n = r;
                        break
                    }
                } else
                    s = !1;
            return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n)
        },
        basename(e, t) {
            t !== void 0 && D(t, "ext"),
            D(e, "path");
            let n = 0, s = -1, r = !0, i;
            if (t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e)
                    return "";
                let l = t.length - 1
                  , u = -1;
                for (i = e.length - 1; i >= 0; --i) {
                    const a = e.charCodeAt(i);
                    if (a === F) {
                        if (!r) {
                            n = i + 1;
                            break
                        }
                    } else
                        u === -1 && (r = !1,
                        u = i + 1),
                        l >= 0 && (a === t.charCodeAt(l) ? --l === -1 && (s = i) : (l = -1,
                        s = u))
                }
                return n === s ? s = u : s === -1 && (s = e.length),
                e.slice(n, s)
            }
            for (i = e.length - 1; i >= 0; --i)
                if (e.charCodeAt(i) === F) {
                    if (!r) {
                        n = i + 1;
                        break
                    }
                } else
                    s === -1 && (r = !1,
                    s = i + 1);
            return s === -1 ? "" : e.slice(n, s)
        },
        extname(e) {
            D(e, "path");
            let t = -1
              , n = 0
              , s = -1
              , r = !0
              , i = 0;
            for (let l = e.length - 1; l >= 0; --l) {
                const u = e.charCodeAt(l);
                if (u === F) {
                    if (!r) {
                        n = l + 1;
                        break
                    }
                    continue
                }
                s === -1 && (r = !1,
                s = l + 1),
                u === G ? t === -1 ? t = l : i !== 1 && (i = 1) : t !== -1 && (i = -1)
            }
            return t === -1 || s === -1 || i === 0 || i === 1 && t === s - 1 && t === n + 1 ? "" : e.slice(t, s)
        },
        format: rt.bind(null, "/"),
        parse(e) {
            D(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0)
                return t;
            const n = e.charCodeAt(0) === F;
            let s;
            n ? (t.root = "/",
            s = 1) : s = 0;
            let r = -1
              , i = 0
              , l = -1
              , u = !0
              , a = e.length - 1
              , o = 0;
            for (; a >= s; --a) {
                const f = e.charCodeAt(a);
                if (f === F) {
                    if (!u) {
                        i = a + 1;
                        break
                    }
                    continue
                }
                l === -1 && (u = !1,
                l = a + 1),
                f === G ? r === -1 ? r = a : o !== 1 && (o = 1) : r !== -1 && (o = -1)
            }
            if (l !== -1) {
                const f = i === 0 && n ? 1 : i;
                r === -1 || o === 0 || o === 1 && r === l - 1 && r === i + 1 ? t.base = t.name = e.slice(f, l) : (t.name = e.slice(f, r),
                t.base = e.slice(f, l),
                t.ext = e.slice(r, l))
            }
            return i > 0 ? t.dir = e.slice(0, i - 1) : n && (t.dir = "/"),
            t
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
    W.win32 = H.win32 = H,
    W.posix = H.posix = W,
    X === "win32" ? H.normalize : W.normalize,
    X === "win32" ? H.resolve : W.resolve,
    X === "win32" ? H.relative : W.relative,
    X === "win32" ? H.dirname : W.dirname,
    X === "win32" ? H.basename : W.basename,
    X === "win32" ? H.extname : W.extname,
    X === "win32" ? H.sep : W.sep;
    const wn = /^\w[\w\d+.-]*$/
      , Cn = /^\//
      , vn = /^\/\//;
    function it(e, t) {
        if (!e.scheme && t)
            throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
        if (e.scheme && !wn.test(e.scheme))
            throw new Error("[UriError]: Scheme contains illegal characters.");
        if (e.path) {
            if (e.authority) {
                if (!Cn.test(e.path))
                    throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
            } else if (vn.test(e.path))
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
        }
    }
    function Mn(e, t) {
        return !e && !t ? "file" : e
    }
    function Pn(e, t) {
        switch (e) {
        case "https":
        case "http":
        case "file":
            t ? t[0] !== Y && (t = Y + t) : t = Y;
            break
        }
        return t
    }
    const x = ""
      , Y = "/"
      , pn = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class J {
        constructor(t, n, s, r, i, l=!1) {
            typeof t == "object" ? (this.scheme = t.scheme || x,
            this.authority = t.authority || x,
            this.path = t.path || x,
            this.query = t.query || x,
            this.fragment = t.fragment || x) : (this.scheme = Mn(t, l),
            this.authority = n || x,
            this.path = Pn(this.scheme, s || x),
            this.query = r || x,
            this.fragment = i || x,
            it(this, l))
        }
        static isUri(t) {
            return t instanceof J ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1
        }
        get fsPath() {
            return xe(this, !1)
        }
        with(t) {
            if (!t)
                return this;
            let {scheme: n, authority: s, path: r, query: i, fragment: l} = t;
            return n === void 0 ? n = this.scheme : n === null && (n = x),
            s === void 0 ? s = this.authority : s === null && (s = x),
            r === void 0 ? r = this.path : r === null && (r = x),
            i === void 0 ? i = this.query : i === null && (i = x),
            l === void 0 ? l = this.fragment : l === null && (l = x),
            n === this.scheme && s === this.authority && r === this.path && i === this.query && l === this.fragment ? this : new ne(n,s,r,i,l)
        }
        static parse(t, n=!1) {
            const s = pn.exec(t);
            return s ? new ne(s[2] || x,ge(s[4] || x),ge(s[5] || x),ge(s[7] || x),ge(s[9] || x),n) : new ne(x,x,x,x,x)
        }
        static file(t) {
            let n = x;
            if (ue && (t = t.replace(/\\/g, Y)),
            t[0] === Y && t[1] === Y) {
                const s = t.indexOf(Y, 2);
                s === -1 ? (n = t.substring(2),
                t = Y) : (n = t.substring(2, s),
                t = t.substring(s) || Y)
            }
            return new ne("file",n,t,x,x)
        }
        static from(t) {
            const n = new ne(t.scheme,t.authority,t.path,t.query,t.fragment);
            return it(n, !0),
            n
        }
        static joinPath(t, ...n) {
            if (!t.path)
                throw new Error("[UriError]: cannot call joinPath on URI without path");
            let s;
            return ue && t.scheme === "file" ? s = J.file(H.join(xe(t, !0), ...n)).path : s = W.join(t.path, ...n),
            t.with({
                path: s
            })
        }
        toString(t=!1) {
            return Ee(this, t)
        }
        toJSON() {
            return this
        }
        static revive(t) {
            if (t) {
                if (t instanceof J)
                    return t;
                {
                    const n = new ne(t);
                    return n._formatted = t.external,
                    n._fsPath = t._sep === lt ? t.fsPath : null,
                    n
                }
            } else
                return t
        }
    }
    const lt = ue ? 1 : void 0;
    class ne extends J {
        constructor() {
            super(...arguments),
            this._formatted = null,
            this._fsPath = null
        }
        get fsPath() {
            return this._fsPath || (this._fsPath = xe(this, !1)),
            this._fsPath
        }
        toString(t=!1) {
            return t ? Ee(this, !0) : (this._formatted || (this._formatted = Ee(this, !1)),
            this._formatted)
        }
        toJSON() {
            const t = {
                $mid: 1
            };
            return this._fsPath && (t.fsPath = this._fsPath,
            t._sep = lt),
            this._formatted && (t.external = this._formatted),
            this.path && (t.path = this.path),
            this.scheme && (t.scheme = this.scheme),
            this.authority && (t.authority = this.authority),
            this.query && (t.query = this.query),
            this.fragment && (t.fragment = this.fragment),
            t
        }
    }
    const ut = {
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
    function at(e, t) {
        let n, s = -1;
        for (let r = 0; r < e.length; r++) {
            const i = e.charCodeAt(r);
            if (i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 45 || i === 46 || i === 95 || i === 126 || t && i === 47)
                s !== -1 && (n += encodeURIComponent(e.substring(s, r)),
                s = -1),
                n !== void 0 && (n += e.charAt(r));
            else {
                n === void 0 && (n = e.substr(0, r));
                const l = ut[i];
                l !== void 0 ? (s !== -1 && (n += encodeURIComponent(e.substring(s, r)),
                s = -1),
                n += l) : s === -1 && (s = r)
            }
        }
        return s !== -1 && (n += encodeURIComponent(e.substring(s))),
        n !== void 0 ? n : e
    }
    function Rn(e) {
        let t;
        for (let n = 0; n < e.length; n++) {
            const s = e.charCodeAt(n);
            s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, n)),
            t += ut[s]) : t !== void 0 && (t += e[n])
        }
        return t !== void 0 ? t : e
    }
    function xe(e, t) {
        let n;
        return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path,
        ue && (n = n.replace(/\//g, "\\")),
        n
    }
    function Ee(e, t) {
        const n = t ? Rn : at;
        let s = ""
          , {scheme: r, authority: i, path: l, query: u, fragment: a} = e;
        if (r && (s += r,
        s += ":"),
        (i || r === "file") && (s += Y,
        s += Y),
        i) {
            let o = i.indexOf("@");
            if (o !== -1) {
                const f = i.substr(0, o);
                i = i.substr(o + 1),
                o = f.indexOf(":"),
                o === -1 ? s += n(f, !1) : (s += n(f.substr(0, o), !1),
                s += ":",
                s += n(f.substr(o + 1), !1)),
                s += "@"
            }
            i = i.toLowerCase(),
            o = i.indexOf(":"),
            o === -1 ? s += n(i, !1) : (s += n(i.substr(0, o), !1),
            s += i.substr(o))
        }
        if (l) {
            if (l.length >= 3 && l.charCodeAt(0) === 47 && l.charCodeAt(2) === 58) {
                const o = l.charCodeAt(1);
                o >= 65 && o <= 90 && (l = `/${String.fromCharCode(o + 32)}:${l.substr(3)}`)
            } else if (l.length >= 2 && l.charCodeAt(1) === 58) {
                const o = l.charCodeAt(0);
                o >= 65 && o <= 90 && (l = `${String.fromCharCode(o + 32)}:${l.substr(2)}`)
            }
            s += n(l, !0)
        }
        return u && (s += "?",
        s += n(u, !1)),
        a && (s += "#",
        s += t ? a : at(a, !1)),
        s
    }
    function ot(e) {
        try {
            return decodeURIComponent(e)
        } catch {
            return e.length > 3 ? e.substr(0, 3) + ot(e.substr(3)) : e
        }
    }
    const ct = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function ge(e) {
        return e.match(ct) ? e.replace(ct, t => ot(t)) : e
    }
    class B {
        constructor(t, n) {
            this.lineNumber = t,
            this.column = n
        }
        with(t=this.lineNumber, n=this.column) {
            return t === this.lineNumber && n === this.column ? this : new B(t,n)
        }
        delta(t=0, n=0) {
            return this.with(this.lineNumber + t, this.column + n)
        }
        equals(t) {
            return B.equals(this, t)
        }
        static equals(t, n) {
            return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column
        }
        isBefore(t) {
            return B.isBefore(this, t)
        }
        static isBefore(t, n) {
            return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column
        }
        isBeforeOrEqual(t) {
            return B.isBeforeOrEqual(this, t)
        }
        static isBeforeOrEqual(t, n) {
            return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column
        }
        static compare(t, n) {
            let s = t.lineNumber | 0
              , r = n.lineNumber | 0;
            if (s === r) {
                let i = t.column | 0
                  , l = n.column | 0;
                return i - l
            }
            return s - r
        }
        clone() {
            return new B(this.lineNumber,this.column)
        }
        toString() {
            return "(" + this.lineNumber + "," + this.column + ")"
        }
        static lift(t) {
            return new B(t.lineNumber,t.column)
        }
        static isIPosition(t) {
            return t && typeof t.lineNumber == "number" && typeof t.column == "number"
        }
    }
    class E {
        constructor(t, n, s, r) {
            t > s || t === s && n > r ? (this.startLineNumber = s,
            this.startColumn = r,
            this.endLineNumber = t,
            this.endColumn = n) : (this.startLineNumber = t,
            this.startColumn = n,
            this.endLineNumber = s,
            this.endColumn = r)
        }
        isEmpty() {
            return E.isEmpty(this)
        }
        static isEmpty(t) {
            return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn
        }
        containsPosition(t) {
            return E.containsPosition(this, t)
        }
        static containsPosition(t, n) {
            return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn)
        }
        containsRange(t) {
            return E.containsRange(this, t)
        }
        static containsRange(t, n) {
            return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn)
        }
        strictContainsRange(t) {
            return E.strictContainsRange(this, t)
        }
        static strictContainsRange(t, n) {
            return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn)
        }
        plusRange(t) {
            return E.plusRange(this, t)
        }
        static plusRange(t, n) {
            let s, r, i, l;
            return n.startLineNumber < t.startLineNumber ? (s = n.startLineNumber,
            r = n.startColumn) : n.startLineNumber === t.startLineNumber ? (s = n.startLineNumber,
            r = Math.min(n.startColumn, t.startColumn)) : (s = t.startLineNumber,
            r = t.startColumn),
            n.endLineNumber > t.endLineNumber ? (i = n.endLineNumber,
            l = n.endColumn) : n.endLineNumber === t.endLineNumber ? (i = n.endLineNumber,
            l = Math.max(n.endColumn, t.endColumn)) : (i = t.endLineNumber,
            l = t.endColumn),
            new E(s,r,i,l)
        }
        intersectRanges(t) {
            return E.intersectRanges(this, t)
        }
        static intersectRanges(t, n) {
            let s = t.startLineNumber
              , r = t.startColumn
              , i = t.endLineNumber
              , l = t.endColumn
              , u = n.startLineNumber
              , a = n.startColumn
              , o = n.endLineNumber
              , f = n.endColumn;
            return s < u ? (s = u,
            r = a) : s === u && (r = Math.max(r, a)),
            i > o ? (i = o,
            l = f) : i === o && (l = Math.min(l, f)),
            s > i || s === i && r > l ? null : new E(s,r,i,l)
        }
        equalsRange(t) {
            return E.equalsRange(this, t)
        }
        static equalsRange(t, n) {
            return !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn
        }
        getEndPosition() {
            return E.getEndPosition(this)
        }
        static getEndPosition(t) {
            return new B(t.endLineNumber,t.endColumn)
        }
        getStartPosition() {
            return E.getStartPosition(this)
        }
        static getStartPosition(t) {
            return new B(t.startLineNumber,t.startColumn)
        }
        toString() {
            return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]"
        }
        setEndPosition(t, n) {
            return new E(this.startLineNumber,this.startColumn,t,n)
        }
        setStartPosition(t, n) {
            return new E(t,n,this.endLineNumber,this.endColumn)
        }
        collapseToStart() {
            return E.collapseToStart(this)
        }
        static collapseToStart(t) {
            return new E(t.startLineNumber,t.startColumn,t.startLineNumber,t.startColumn)
        }
        static fromPositions(t, n=t) {
            return new E(t.lineNumber,t.column,n.lineNumber,n.column)
        }
        static lift(t) {
            return t ? new E(t.startLineNumber,t.startColumn,t.endLineNumber,t.endColumn) : null
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
                const i = t.startLineNumber | 0
                  , l = n.startLineNumber | 0;
                if (i === l) {
                    const u = t.startColumn | 0
                      , a = n.startColumn | 0;
                    if (u === a) {
                        const o = t.endLineNumber | 0
                          , f = n.endLineNumber | 0;
                        if (o === f) {
                            const c = t.endColumn | 0
                              , m = n.endColumn | 0;
                            return c - m
                        }
                        return o - f
                    }
                    return u - a
                }
                return i - l
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
    const Un = 3;
    function ft(e, t, n, s) {
        return new z(e,t,n).ComputeDiff(s)
    }
    class ht {
        constructor(t) {
            const n = []
              , s = [];
            for (let r = 0, i = t.length; r < i; r++)
                n[r] = De(t[r], 1),
                s[r] = ke(t[r], 1);
            this.lines = t,
            this._startColumns = n,
            this._endColumns = s
        }
        getElements() {
            const t = [];
            for (let n = 0, s = this.lines.length; n < s; n++)
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
        createCharSequence(t, n, s) {
            const r = []
              , i = []
              , l = [];
            let u = 0;
            for (let a = n; a <= s; a++) {
                const o = this.lines[a]
                  , f = t ? this._startColumns[a] : 1
                  , c = t ? this._endColumns[a] : o.length + 1;
                for (let m = f; m < c; m++)
                    r[u] = o.charCodeAt(m - 1),
                    i[u] = a + 1,
                    l[u] = m,
                    u++
            }
            return new xn(r,i,l)
        }
    }
    class xn {
        constructor(t, n, s) {
            this._charCodes = t,
            this._lineNumbers = n,
            this._columns = s
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
    class ae {
        constructor(t, n, s, r, i, l, u, a) {
            this.originalStartLineNumber = t,
            this.originalStartColumn = n,
            this.originalEndLineNumber = s,
            this.originalEndColumn = r,
            this.modifiedStartLineNumber = i,
            this.modifiedStartColumn = l,
            this.modifiedEndLineNumber = u,
            this.modifiedEndColumn = a
        }
        static createFromDiffChange(t, n, s) {
            let r, i, l, u, a, o, f, c;
            return t.originalLength === 0 ? (r = 0,
            i = 0,
            l = 0,
            u = 0) : (r = n.getStartLineNumber(t.originalStart),
            i = n.getStartColumn(t.originalStart),
            l = n.getEndLineNumber(t.originalStart + t.originalLength - 1),
            u = n.getEndColumn(t.originalStart + t.originalLength - 1)),
            t.modifiedLength === 0 ? (a = 0,
            o = 0,
            f = 0,
            c = 0) : (a = s.getStartLineNumber(t.modifiedStart),
            o = s.getStartColumn(t.modifiedStart),
            f = s.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1),
            c = s.getEndColumn(t.modifiedStart + t.modifiedLength - 1)),
            new ae(r,i,l,u,a,o,f,c)
        }
    }
    function En(e) {
        if (e.length <= 1)
            return e;
        const t = [e[0]];
        let n = t[0];
        for (let s = 1, r = e.length; s < r; s++) {
            const i = e[s]
              , l = i.originalStart - (n.originalStart + n.originalLength)
              , u = i.modifiedStart - (n.modifiedStart + n.modifiedLength);
            Math.min(l, u) < Un ? (n.originalLength = i.originalStart + i.originalLength - n.originalStart,
            n.modifiedLength = i.modifiedStart + i.modifiedLength - n.modifiedStart) : (t.push(i),
            n = i)
        }
        return t
    }
    class oe {
        constructor(t, n, s, r, i) {
            this.originalStartLineNumber = t,
            this.originalEndLineNumber = n,
            this.modifiedStartLineNumber = s,
            this.modifiedEndLineNumber = r,
            this.charChanges = i
        }
        static createFromDiffResult(t, n, s, r, i, l, u) {
            let a, o, f, c, m;
            if (n.originalLength === 0 ? (a = s.getStartLineNumber(n.originalStart) - 1,
            o = 0) : (a = s.getStartLineNumber(n.originalStart),
            o = s.getEndLineNumber(n.originalStart + n.originalLength - 1)),
            n.modifiedLength === 0 ? (f = r.getStartLineNumber(n.modifiedStart) - 1,
            c = 0) : (f = r.getStartLineNumber(n.modifiedStart),
            c = r.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)),
            l && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && i()) {
                const L = s.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1)
                  , b = r.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
                let w = ft(L, b, i, !0).changes;
                u && (w = En(w)),
                m = [];
                for (let M = 0, P = w.length; M < P; M++)
                    m.push(ae.createFromDiffChange(w[M], L, b))
            }
            return new oe(a,o,f,c,m)
        }
    }
    class Dn {
        constructor(t, n, s) {
            this.shouldComputeCharChanges = s.shouldComputeCharChanges,
            this.shouldPostProcessCharChanges = s.shouldPostProcessCharChanges,
            this.shouldIgnoreTrimWhitespace = s.shouldIgnoreTrimWhitespace,
            this.shouldMakePrettyDiff = s.shouldMakePrettyDiff,
            this.originalLines = t,
            this.modifiedLines = n,
            this.original = new ht(t),
            this.modified = new ht(n),
            this.continueLineDiff = mt(s.maxComputationTime),
            this.continueCharDiff = mt(s.maxComputationTime === 0 ? 0 : Math.min(s.maxComputationTime, 5e3))
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
            const t = ft(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff)
              , n = t.changes
              , s = t.quitEarly;
            if (this.shouldIgnoreTrimWhitespace) {
                const u = [];
                for (let a = 0, o = n.length; a < o; a++)
                    u.push(oe.createFromDiffResult(this.shouldIgnoreTrimWhitespace, n[a], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                return {
                    quitEarly: s,
                    changes: u
                }
            }
            const r = [];
            let i = 0
              , l = 0;
            for (let u = -1, a = n.length; u < a; u++) {
                const o = u + 1 < a ? n[u + 1] : null
                  , f = o ? o.originalStart : this.originalLines.length
                  , c = o ? o.modifiedStart : this.modifiedLines.length;
                for (; i < f && l < c; ) {
                    const m = this.originalLines[i]
                      , L = this.modifiedLines[l];
                    if (m !== L) {
                        {
                            let b = De(m, 1)
                              , w = De(L, 1);
                            for (; b > 1 && w > 1; ) {
                                const M = m.charCodeAt(b - 2)
                                  , P = L.charCodeAt(w - 2);
                                if (M !== P)
                                    break;
                                b--,
                                w--
                            }
                            (b > 1 || w > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, b, l + 1, 1, w)
                        }
                        {
                            let b = ke(m, 1)
                              , w = ke(L, 1);
                            const M = m.length + 1
                              , P = L.length + 1;
                            for (; b < M && w < P; ) {
                                const d = m.charCodeAt(b - 1)
                                  , h = m.charCodeAt(w - 1);
                                if (d !== h)
                                    break;
                                b++,
                                w++
                            }
                            (b < M || w < P) && this._pushTrimWhitespaceCharChange(r, i + 1, b, M, l + 1, w, P)
                        }
                    }
                    i++,
                    l++
                }
                o && (r.push(oe.createFromDiffResult(this.shouldIgnoreTrimWhitespace, o, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)),
                i += o.originalLength,
                l += o.modifiedLength)
            }
            return {
                quitEarly: s,
                changes: r
            }
        }
        _pushTrimWhitespaceCharChange(t, n, s, r, i, l, u) {
            if (this._mergeTrimWhitespaceCharChange(t, n, s, r, i, l, u))
                return;
            let a;
            this.shouldComputeCharChanges && (a = [new ae(n,s,n,r,i,l,i,u)]),
            t.push(new oe(n,n,i,i,a))
        }
        _mergeTrimWhitespaceCharChange(t, n, s, r, i, l, u) {
            const a = t.length;
            if (a === 0)
                return !1;
            const o = t[a - 1];
            return o.originalEndLineNumber === 0 || o.modifiedEndLineNumber === 0 ? !1 : o.originalEndLineNumber + 1 === n && o.modifiedEndLineNumber + 1 === i ? (o.originalEndLineNumber = n,
            o.modifiedEndLineNumber = i,
            this.shouldComputeCharChanges && o.charChanges && o.charChanges.push(new ae(n,s,n,r,i,l,i,u)),
            !0) : !1
        }
    }
    function De(e, t) {
        const n = hn(e);
        return n === -1 ? t : n + 1
    }
    function ke(e, t) {
        const n = mn(e);
        return n === -1 ? t : n + 2
    }
    function mt(e) {
        if (e === 0)
            return () => !0;
        const t = Date.now();
        return () => Date.now() - t < e
    }
    function dt(e) {
        return e < 0 ? 0 : e > 255 ? 255 : e | 0
    }
    function se(e) {
        return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0
    }
    class kn {
        constructor(t, n) {
            this._prefixSumIndexOfResultBrand = void 0,
            this.index = t,
            this.remainder = n
        }
    }
    class Fn {
        constructor(t) {
            this.values = t,
            this.prefixSum = new Uint32Array(t.length),
            this.prefixSumValidIndex = new Int32Array(1),
            this.prefixSumValidIndex[0] = -1
        }
        insertValues(t, n) {
            t = se(t);
            const s = this.values
              , r = this.prefixSum
              , i = n.length;
            return i === 0 ? !1 : (this.values = new Uint32Array(s.length + i),
            this.values.set(s.subarray(0, t), 0),
            this.values.set(s.subarray(t), t + i),
            this.values.set(n, t),
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            this.prefixSum = new Uint32Array(this.values.length),
            this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)),
            !0)
        }
        changeValue(t, n) {
            return t = se(t),
            n = se(n),
            this.values[t] === n ? !1 : (this.values[t] = n,
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            !0)
        }
        removeValues(t, n) {
            t = se(t),
            n = se(n);
            const s = this.values
              , r = this.prefixSum;
            if (t >= s.length)
                return !1;
            let i = s.length - t;
            return n >= i && (n = i),
            n === 0 ? !1 : (this.values = new Uint32Array(s.length - n),
            this.values.set(s.subarray(0, t), 0),
            this.values.set(s.subarray(t + n), t),
            this.prefixSum = new Uint32Array(this.values.length),
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)),
            !0)
        }
        getTotalSum() {
            return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1)
        }
        getPrefixSum(t) {
            return t < 0 ? 0 : (t = se(t),
            this._getPrefixSum(t))
        }
        _getPrefixSum(t) {
            if (t <= this.prefixSumValidIndex[0])
                return this.prefixSum[t];
            let n = this.prefixSumValidIndex[0] + 1;
            n === 0 && (this.prefixSum[0] = this.values[0],
            n++),
            t >= this.values.length && (t = this.values.length - 1);
            for (let s = n; s <= t; s++)
                this.prefixSum[s] = this.prefixSum[s - 1] + this.values[s];
            return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t),
            this.prefixSum[t]
        }
        getIndexOf(t) {
            t = Math.floor(t),
            this.getTotalSum();
            let n = 0
              , s = this.values.length - 1
              , r = 0
              , i = 0
              , l = 0;
            for (; n <= s; )
                if (r = n + (s - n) / 2 | 0,
                i = this.prefixSum[r],
                l = i - this.values[r],
                t < l)
                    s = r - 1;
                else if (t >= i)
                    n = r + 1;
                else
                    break;
            return new kn(r,t - l)
        }
    }
    class Tn {
        constructor(t, n, s, r) {
            this._uri = t,
            this._lines = n,
            this._eol = s,
            this._versionId = r,
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
            for (const s of n)
                this._acceptDeleteRange(s.range),
                this._acceptInsertText(new B(s.range.startLineNumber,s.range.startColumn), s.text);
            this._versionId = t.versionId,
            this._cachedTextValue = null
        }
        _ensureLineStarts() {
            if (!this._lineStarts) {
                const t = this._eol.length
                  , n = this._lines.length
                  , s = new Uint32Array(n);
                for (let r = 0; r < n; r++)
                    s[r] = this._lines[r].length + t;
                this._lineStarts = new Fn(s)
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
            let s = fn(n);
            if (s.length === 1) {
                this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + s[0] + this._lines[t.lineNumber - 1].substring(t.column - 1));
                return
            }
            s[s.length - 1] += this._lines[t.lineNumber - 1].substring(t.column - 1),
            this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + s[0]);
            let r = new Uint32Array(s.length - 1);
            for (let i = 1; i < s.length; i++)
                this._lines.splice(t.lineNumber + i - 1, 0, s[i]),
                r[i - 1] = s[i].length + this._eol.length;
            this._lineStarts && this._lineStarts.insertValues(t.lineNumber, r)
        }
    }
    const In = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
    function Hn(e="") {
        let t = "(-?\\d*\\.\\d\\w*)|([^";
        for (const n of In)
            e.indexOf(n) >= 0 || (t += "\\" + n);
        return t += "\\s]+)",
        new RegExp(t,"g")
    }
    const qn = Hn();
    function Wn(e) {
        let t = qn;
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
    const Bn = {
        maxLen: 1e3,
        windowSize: 15,
        timeBudget: 150
    };
    function gt(e, t, n, s, r=Bn) {
        if (n.length > r.maxLen) {
            let o = e - r.maxLen / 2;
            return o < 0 ? o = 0 : s += o,
            n = n.substring(o, e + r.maxLen / 2),
            gt(e, t, n, s, r)
        }
        const i = Date.now()
          , l = e - 1 - s;
        let u = -1
          , a = null;
        for (let o = 1; !(Date.now() - i >= r.timeBudget); o++) {
            const f = l - r.windowSize * o;
            t.lastIndex = Math.max(0, f);
            const c = Yn(t, n, l, u);
            if (!c && a || (a = c,
            f <= 0))
                break;
            u = f
        }
        if (a) {
            let o = {
                word: a[0],
                startColumn: s + 1 + a.index,
                endColumn: s + 1 + a.index + a[0].length
            };
            return t.lastIndex = 0,
            o
        }
        return null
    }
    function Yn(e, t, n, s) {
        let r;
        for (; r = e.exec(t); ) {
            const i = r.index || 0;
            if (i <= n && e.lastIndex >= n)
                return r;
            if (s > 0 && i > s)
                return null
        }
        return null
    }
    class Fe {
        constructor(t) {
            let n = dt(t);
            this._defaultValue = n,
            this._asciiMap = Fe._createAsciiMap(n),
            this._map = new Map
        }
        static _createAsciiMap(t) {
            let n = new Uint8Array(256);
            for (let s = 0; s < 256; s++)
                n[s] = t;
            return n
        }
        set(t, n) {
            let s = dt(n);
            t >= 0 && t < 256 ? this._asciiMap[t] = s : this._map.set(t, s)
        }
        get(t) {
            return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue
        }
    }
    class Vn {
        constructor(t, n, s) {
            const r = new Uint8Array(t * n);
            for (let i = 0, l = t * n; i < l; i++)
                r[i] = s;
            this._data = r,
            this.rows = t,
            this.cols = n
        }
        get(t, n) {
            return this._data[t * this.cols + n]
        }
        set(t, n, s) {
            this._data[t * this.cols + n] = s
        }
    }
    class $n {
        constructor(t) {
            let n = 0
              , s = 0;
            for (let i = 0, l = t.length; i < l; i++) {
                let[u,a,o] = t[i];
                a > n && (n = a),
                u > s && (s = u),
                o > s && (s = o)
            }
            n++,
            s++;
            let r = new Vn(s,n,0);
            for (let i = 0, l = t.length; i < l; i++) {
                let[u,a,o] = t[i];
                r.set(u, a, o)
            }
            this._states = r,
            this._maxCharCode = n
        }
        nextState(t, n) {
            return n < 0 || n >= this._maxCharCode ? 0 : this._states.get(t, n)
        }
    }
    let Te = null;
    function zn() {
        return Te === null && (Te = new $n([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])),
        Te
    }
    let ce = null;
    function Gn() {
        if (ce === null) {
            ce = new Fe(0);
            const e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`;
            for (let n = 0; n < e.length; n++)
                ce.set(e.charCodeAt(n), 1);
            const t = ".,;";
            for (let n = 0; n < t.length; n++)
                ce.set(t.charCodeAt(n), 2)
        }
        return ce
    }
    class _e {
        static _createLink(t, n, s, r, i) {
            let l = i - 1;
            do {
                const u = n.charCodeAt(l);
                if (t.get(u) !== 2)
                    break;
                l--
            } while (l > r);
            if (r > 0) {
                const u = n.charCodeAt(r - 1)
                  , a = n.charCodeAt(l);
                (u === 40 && a === 41 || u === 91 && a === 93 || u === 123 && a === 125) && l--
            }
            return {
                range: {
                    startLineNumber: s,
                    startColumn: r + 1,
                    endLineNumber: s,
                    endColumn: l + 2
                },
                url: n.substring(r, l + 1)
            }
        }
        static computeLinks(t, n=zn()) {
            const s = Gn();
            let r = [];
            for (let i = 1, l = t.getLineCount(); i <= l; i++) {
                const u = t.getLineContent(i)
                  , a = u.length;
                let o = 0
                  , f = 0
                  , c = 0
                  , m = 1
                  , L = !1
                  , b = !1
                  , w = !1
                  , M = !1;
                for (; o < a; ) {
                    let P = !1;
                    const d = u.charCodeAt(o);
                    if (m === 13) {
                        let h;
                        switch (d) {
                        case 40:
                            L = !0,
                            h = 0;
                            break;
                        case 41:
                            h = L ? 0 : 1;
                            break;
                        case 91:
                            w = !0,
                            b = !0,
                            h = 0;
                            break;
                        case 93:
                            w = !1,
                            h = b ? 0 : 1;
                            break;
                        case 123:
                            M = !0,
                            h = 0;
                            break;
                        case 125:
                            h = M ? 0 : 1;
                            break;
                        case 39:
                            h = c === 34 || c === 96 ? 0 : 1;
                            break;
                        case 34:
                            h = c === 39 || c === 96 ? 0 : 1;
                            break;
                        case 96:
                            h = c === 39 || c === 34 ? 0 : 1;
                            break;
                        case 42:
                            h = c === 42 ? 1 : 0;
                            break;
                        case 124:
                            h = c === 124 ? 1 : 0;
                            break;
                        case 32:
                            h = w ? 0 : 1;
                            break;
                        default:
                            h = s.get(d)
                        }
                        h === 1 && (r.push(_e._createLink(s, u, i, f, o)),
                        P = !0)
                    } else if (m === 12) {
                        let h;
                        d === 91 ? (b = !0,
                        h = 0) : h = s.get(d),
                        h === 1 ? P = !0 : m = 13
                    } else
                        m = n.nextState(m, d),
                        m === 0 && (P = !0);
                    P && (m = 1,
                    L = !1,
                    b = !1,
                    M = !1,
                    f = o + 1,
                    c = d),
                    o++
                }
                m === 13 && r.push(_e._createLink(s, u, i, f, a))
            }
            return r
        }
    }
    function jn(e) {
        return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : _e.computeLinks(e)
    }
    class Ie {
        constructor() {
            this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]]
        }
        navigateValueSet(t, n, s, r, i) {
            if (t && n) {
                let l = this.doNavigateValueSet(n, i);
                if (l)
                    return {
                        range: t,
                        value: l
                    }
            }
            if (s && r) {
                let l = this.doNavigateValueSet(r, i);
                if (l)
                    return {
                        range: s,
                        value: l
                    }
            }
            return null
        }
        doNavigateValueSet(t, n) {
            let s = this.numberReplace(t, n);
            return s !== null ? s : this.textReplace(t, n)
        }
        numberReplace(t, n) {
            let s = Math.pow(10, t.length - (t.lastIndexOf(".") + 1))
              , r = Number(t)
              , i = parseFloat(t);
            return !isNaN(r) && !isNaN(i) && r === i ? r === 0 && !n ? null : (r = Math.floor(r * s),
            r += n ? s : -s,
            String(r / s)) : null
        }
        textReplace(t, n) {
            return this.valueSetsReplace(this._defaultValueSet, t, n)
        }
        valueSetsReplace(t, n, s) {
            let r = null;
            for (let i = 0, l = t.length; r === null && i < l; i++)
                r = this.valueSetReplace(t[i], n, s);
            return r
        }
        valueSetReplace(t, n, s) {
            let r = t.indexOf(n);
            return r >= 0 ? (r += s ? 1 : -1,
            r < 0 ? r = t.length - 1 : r %= t.length,
            t[r]) : null
        }
    }
    Ie.INSTANCE = new Ie;
    class U {
        constructor(t) {
            this.element = t,
            this.next = U.Undefined,
            this.prev = U.Undefined
        }
    }
    U.Undefined = new U(void 0);
    class _t {
        constructor() {
            this._first = U.Undefined,
            this._last = U.Undefined,
            this._size = 0
        }
        get size() {
            return this._size
        }
        isEmpty() {
            return this._first === U.Undefined
        }
        clear() {
            let t = this._first;
            for (; t !== U.Undefined; ) {
                const n = t.next;
                t.prev = U.Undefined,
                t.next = U.Undefined,
                t = n
            }
            this._first = U.Undefined,
            this._last = U.Undefined,
            this._size = 0
        }
        unshift(t) {
            return this._insert(t, !1)
        }
        push(t) {
            return this._insert(t, !0)
        }
        _insert(t, n) {
            const s = new U(t);
            if (this._first === U.Undefined)
                this._first = s,
                this._last = s;
            else if (n) {
                const i = this._last;
                this._last = s,
                s.prev = i,
                i.next = s
            } else {
                const i = this._first;
                this._first = s,
                s.next = i,
                i.prev = s
            }
            this._size += 1;
            let r = !1;
            return () => {
                r || (r = !0,
                this._remove(s))
            }
        }
        shift() {
            if (this._first !== U.Undefined) {
                const t = this._first.element;
                return this._remove(this._first),
                t
            }
        }
        pop() {
            if (this._last !== U.Undefined) {
                const t = this._last.element;
                return this._remove(this._last),
                t
            }
        }
        _remove(t) {
            if (t.prev !== U.Undefined && t.next !== U.Undefined) {
                const n = t.prev;
                n.next = t.next,
                t.next.prev = n
            } else
                t.prev === U.Undefined && t.next === U.Undefined ? (this._first = U.Undefined,
                this._last = U.Undefined) : t.next === U.Undefined ? (this._last = this._last.prev,
                this._last.next = U.Undefined) : t.prev === U.Undefined && (this._first = this._first.next,
                this._first.prev = U.Undefined);
            this._size -= 1
        }
        *[Symbol.iterator]() {
            let t = this._first;
            for (; t !== U.Undefined; )
                yield t.element,
                t = t.next
        }
    }
    const yn = T.performance && typeof T.performance.now == "function";
    class Le {
        constructor(t) {
            this._highResolution = yn && t,
            this._startTime = this._now(),
            this._stopTime = -1
        }
        static create(t=!0) {
            return new Le(t)
        }
        stop() {
            this._stopTime = this._now()
        }
        elapsed() {
            return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime
        }
        _now() {
            return this._highResolution ? T.performance.now() : Date.now()
        }
    }
    var He;
    (function(e) {
        e.None = () => Je.None;
        function t(d) {
            return (h, g=null, _) => {
                let A = !1, S;
                return S = d(N => {
                    if (!A)
                        return S ? S.dispose() : A = !0,
                        h.call(g, N)
                }
                , null, _),
                A && S.dispose(),
                S
            }
        }
        e.once = t;
        function n(d, h) {
            return a( (g, _=null, A) => d(S => g.call(_, h(S)), null, A))
        }
        e.map = n;
        function s(d, h) {
            return a( (g, _=null, A) => d(S => {
                h(S),
                g.call(_, S)
            }
            , null, A))
        }
        e.forEach = s;
        function r(d, h) {
            return a( (g, _=null, A) => d(S => h(S) && g.call(_, S), null, A))
        }
        e.filter = r;
        function i(d) {
            return d
        }
        e.signal = i;
        function l(...d) {
            return (h, g=null, _) => nn(...d.map(A => A(S => h.call(g, S), null, _)))
        }
        e.any = l;
        function u(d, h, g) {
            let _ = g;
            return n(d, A => (_ = h(_, A),
            _))
        }
        e.reduce = u;
        function a(d) {
            let h;
            const g = new O({
                onFirstListenerAdd() {
                    h = d(g.fire, g)
                },
                onLastListenerRemove() {
                    h.dispose()
                }
            });
            return g.event
        }
        function o(d, h, g=100, _=!1, A) {
            let S, N, p, I = 0;
            const R = new O({
                leakWarningThreshold: A,
                onFirstListenerAdd() {
                    S = d(C => {
                        I++,
                        N = h(N, C),
                        _ && !p && (R.fire(N),
                        N = void 0),
                        clearTimeout(p),
                        p = setTimeout( () => {
                            const Q = N;
                            N = void 0,
                            p = void 0,
                            (!_ || I > 1) && R.fire(Q),
                            I = 0
                        }
                        , g)
                    }
                    )
                },
                onLastListenerRemove() {
                    S.dispose()
                }
            });
            return R.event
        }
        e.debounce = o;
        function f(d, h= (g, _) => g === _) {
            let g = !0, _;
            return r(d, A => {
                const S = g || !h(A, _);
                return g = !1,
                _ = A,
                S
            }
            )
        }
        e.latch = f;
        function c(d, h) {
            return [e.filter(d, h), e.filter(d, g => !h(g))]
        }
        e.split = c;
        function m(d, h=!1, g=[]) {
            let _ = g.slice()
              , A = d(p => {
                _ ? _.push(p) : N.fire(p)
            }
            );
            const S = () => {
                _ && _.forEach(p => N.fire(p)),
                _ = null
            }
              , N = new O({
                onFirstListenerAdd() {
                    A || (A = d(p => N.fire(p)))
                },
                onFirstListenerDidAdd() {
                    _ && (h ? setTimeout(S) : S())
                },
                onLastListenerRemove() {
                    A && A.dispose(),
                    A = null
                }
            });
            return N.event
        }
        e.buffer = m;
        class L {
            constructor(h) {
                this.event = h
            }
            map(h) {
                return new L(n(this.event, h))
            }
            forEach(h) {
                return new L(s(this.event, h))
            }
            filter(h) {
                return new L(r(this.event, h))
            }
            reduce(h, g) {
                return new L(u(this.event, h, g))
            }
            latch() {
                return new L(f(this.event))
            }
            debounce(h, g=100, _=!1, A) {
                return new L(o(this.event, h, g, _, A))
            }
            on(h, g, _) {
                return this.event(h, g, _)
            }
            once(h, g, _) {
                return t(this.event)(h, g, _)
            }
        }
        function b(d) {
            return new L(d)
        }
        e.chain = b;
        function w(d, h, g=_ => _) {
            const _ = (...p) => N.fire(g(...p))
              , A = () => d.on(h, _)
              , S = () => d.removeListener(h, _)
              , N = new O({
                onFirstListenerAdd: A,
                onLastListenerRemove: S
            });
            return N.event
        }
        e.fromNodeEventEmitter = w;
        function M(d, h, g=_ => _) {
            const _ = (...p) => N.fire(g(...p))
              , A = () => d.addEventListener(h, _)
              , S = () => d.removeEventListener(h, _)
              , N = new O({
                onFirstListenerAdd: A,
                onLastListenerRemove: S
            });
            return N.event
        }
        e.fromDOMEventEmitter = M;
        function P(d) {
            return new Promise(h => t(d)(h))
        }
        e.toPromise = P
    }
    )(He || (He = {}));
    class Ne {
        constructor(t) {
            this._listenerCount = 0,
            this._invocationCount = 0,
            this._elapsedOverall = 0,
            this._name = `${t}_${Ne._idPool++}`
        }
        start(t) {
            this._stopWatch = new Le(!0),
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
    Ne._idPool = 0;
    class O {
        constructor(t) {
            var n;
            this._disposed = !1,
            this._options = t,
            this._leakageMon = void 0,
            this._perfMon = !((n = this._options) === null || n === void 0) && n._profName ? new Ne(this._options._profName) : void 0
        }
        get event() {
            return this._event || (this._event = (t, n, s) => {
                var r;
                this._listeners || (this._listeners = new _t);
                const i = this._listeners.isEmpty();
                i && this._options && this._options.onFirstListenerAdd && this._options.onFirstListenerAdd(this);
                const l = this._listeners.push(n ? [t, n] : t);
                i && this._options && this._options.onFirstListenerDidAdd && this._options.onFirstListenerDidAdd(this),
                this._options && this._options.onListenerDidAdd && this._options.onListenerDidAdd(this, t, n);
                const u = (r = this._leakageMon) === null || r === void 0 ? void 0 : r.check(this._listeners.size)
                  , a = Xe( () => {
                    u && u(),
                    this._disposed || (l(),
                    this._options && this._options.onLastListenerRemove && (this._listeners && !this._listeners.isEmpty() || this._options.onLastListenerRemove(this)))
                }
                );
                return s instanceof le ? s.add(a) : Array.isArray(s) && s.push(a),
                a
            }
            ),
            this._event
        }
        fire(t) {
            var n, s;
            if (this._listeners) {
                this._deliveryQueue || (this._deliveryQueue = new _t);
                for (let r of this._listeners)
                    this._deliveryQueue.push([r, t]);
                for ((n = this._perfMon) === null || n === void 0 || n.start(this._deliveryQueue.size); this._deliveryQueue.size > 0; ) {
                    const [r,i] = this._deliveryQueue.shift();
                    try {
                        typeof r == "function" ? r.call(void 0, i) : r[0].call(r[1], i)
                    } catch (l) {
                        Ot(l)
                    }
                }
                (s = this._perfMon) === null || s === void 0 || s.stop()
            }
        }
        dispose() {
            var t, n, s, r, i;
            this._disposed || (this._disposed = !0,
            (t = this._listeners) === null || t === void 0 || t.clear(),
            (n = this._deliveryQueue) === null || n === void 0 || n.clear(),
            (r = (s = this._options) === null || s === void 0 ? void 0 : s.onLastListenerRemove) === null || r === void 0 || r.call(s),
            (i = this._leakageMon) === null || i === void 0 || i.dispose())
        }
    }
    const Lt = Object.freeze(function(e, t) {
        const n = setTimeout(e.bind(t), 0);
        return {
            dispose() {
                clearTimeout(n)
            }
        }
    });
    var Se;
    (function(e) {
        function t(n) {
            return n === e.None || n === e.Cancelled || n instanceof be ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function"
        }
        e.isCancellationToken = t,
        e.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: He.None
        }),
        e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: Lt
        })
    }
    )(Se || (Se = {}));
    class be {
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
            return this._isCancelled ? Lt : (this._emitter || (this._emitter = new O),
            this._emitter.event)
        }
        dispose() {
            this._emitter && (this._emitter.dispose(),
            this._emitter = null)
        }
    }
    class Qn {
        constructor(t) {
            this._token = void 0,
            this._parentListener = void 0,
            this._parentListener = t && t.onCancellationRequested(this.cancel, this)
        }
        get token() {
            return this._token || (this._token = new be),
            this._token
        }
        cancel() {
            this._token ? this._token instanceof be && this._token.cancel() : this._token = Se.Cancelled
        }
        dispose(t=!1) {
            t && this.cancel(),
            this._parentListener && this._parentListener.dispose(),
            this._token ? this._token instanceof be && this._token.dispose() : this._token = Se.None
        }
    }
    class qe {
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
    const We = new qe
      , Be = new qe
      , Ye = new qe;
    (function() {
        function e(t, n, s=n, r=s) {
            We.define(t, n),
            Be.define(t, s),
            Ye.define(t, r)
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
    var Nt;
    (function(e) {
        function t(l) {
            return We.keyCodeToStr(l)
        }
        e.toString = t;
        function n(l) {
            return We.strToKeyCode(l)
        }
        e.fromString = n;
        function s(l) {
            return Be.keyCodeToStr(l)
        }
        e.toUserSettingsUS = s;
        function r(l) {
            return Ye.keyCodeToStr(l)
        }
        e.toUserSettingsGeneral = r;
        function i(l) {
            return Be.strToKeyCode(l) || Ye.strToKeyCode(l)
        }
        e.fromUserSettings = i
    }
    )(Nt || (Nt = {}));
    function Zn(e, t) {
        const n = (t & 65535) << 16 >>> 0;
        return (e | n) >>> 0
    }
    class V extends E {
        constructor(t, n, s, r) {
            super(t, n, s, r),
            this.selectionStartLineNumber = t,
            this.selectionStartColumn = n,
            this.positionLineNumber = s,
            this.positionColumn = r
        }
        toString() {
            return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]"
        }
        equalsSelection(t) {
            return V.selectionsEqual(this, t)
        }
        static selectionsEqual(t, n) {
            return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn
        }
        getDirection() {
            return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1
        }
        setEndPosition(t, n) {
            return this.getDirection() === 0 ? new V(this.startLineNumber,this.startColumn,t,n) : new V(t,n,this.startLineNumber,this.startColumn)
        }
        getPosition() {
            return new B(this.positionLineNumber,this.positionColumn)
        }
        setStartPosition(t, n) {
            return this.getDirection() === 0 ? new V(t,n,this.endLineNumber,this.endColumn) : new V(this.endLineNumber,this.endColumn,t,n)
        }
        static fromPositions(t, n=t) {
            return new V(t.lineNumber,t.column,n.lineNumber,n.column)
        }
        static liftSelection(t) {
            return new V(t.selectionStartLineNumber,t.selectionStartColumn,t.positionLineNumber,t.positionColumn)
        }
        static selectionsArrEqual(t, n) {
            if (t && !n || !t && n)
                return !1;
            if (!t && !n)
                return !0;
            if (t.length !== n.length)
                return !1;
            for (let s = 0, r = t.length; s < r; s++)
                if (!this.selectionsEqual(t[s], n[s]))
                    return !1;
            return !0
        }
        static isISelection(t) {
            return t && typeof t.selectionStartLineNumber == "number" && typeof t.selectionStartColumn == "number" && typeof t.positionLineNumber == "number" && typeof t.positionColumn == "number"
        }
        static createWithDirection(t, n, s, r, i) {
            return i === 0 ? new V(t,n,s,r) : new V(s,r,t,n)
        }
    }
    class Xn {
        constructor(t, n, s) {
            this._tokenBrand = void 0,
            this.offset = t | 0,
            this.type = n,
            this.language = s
        }
        toString() {
            return "(" + this.offset + ", " + this.type + ")"
        }
    }
    var St;
    (function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.Disabled = 1] = "Disabled",
        e[e.Enabled = 2] = "Enabled"
    }
    )(St || (St = {}));
    var bt;
    (function(e) {
        e[e.KeepWhitespace = 1] = "KeepWhitespace",
        e[e.InsertAsSnippet = 4] = "InsertAsSnippet"
    }
    )(bt || (bt = {}));
    var At;
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
    )(At || (At = {}));
    var wt;
    (function(e) {
        e[e.Deprecated = 1] = "Deprecated"
    }
    )(wt || (wt = {}));
    var Ct;
    (function(e) {
        e[e.Invoke = 0] = "Invoke",
        e[e.TriggerCharacter = 1] = "TriggerCharacter",
        e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions"
    }
    )(Ct || (Ct = {}));
    var vt;
    (function(e) {
        e[e.EXACT = 0] = "EXACT",
        e[e.ABOVE = 1] = "ABOVE",
        e[e.BELOW = 2] = "BELOW"
    }
    )(vt || (vt = {}));
    var Mt;
    (function(e) {
        e[e.NotSet = 0] = "NotSet",
        e[e.ContentFlush = 1] = "ContentFlush",
        e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers",
        e[e.Explicit = 3] = "Explicit",
        e[e.Paste = 4] = "Paste",
        e[e.Undo = 5] = "Undo",
        e[e.Redo = 6] = "Redo"
    }
    )(Mt || (Mt = {}));
    var Pt;
    (function(e) {
        e[e.LF = 1] = "LF",
        e[e.CRLF = 2] = "CRLF"
    }
    )(Pt || (Pt = {}));
    var pt;
    (function(e) {
        e[e.Text = 0] = "Text",
        e[e.Read = 1] = "Read",
        e[e.Write = 2] = "Write"
    }
    )(pt || (pt = {}));
    var Rt;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Keep = 1] = "Keep",
        e[e.Brackets = 2] = "Brackets",
        e[e.Advanced = 3] = "Advanced",
        e[e.Full = 4] = "Full"
    }
    )(Rt || (Rt = {}));
    var Ut;
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
    )(Ut || (Ut = {}));
    var xt;
    (function(e) {
        e[e.TextDefined = 0] = "TextDefined",
        e[e.LF = 1] = "LF",
        e[e.CRLF = 2] = "CRLF"
    }
    )(xt || (xt = {}));
    var Et;
    (function(e) {
        e[e.LF = 0] = "LF",
        e[e.CRLF = 1] = "CRLF"
    }
    )(Et || (Et = {}));
    var Dt;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Indent = 1] = "Indent",
        e[e.IndentOutdent = 2] = "IndentOutdent",
        e[e.Outdent = 3] = "Outdent"
    }
    )(Dt || (Dt = {}));
    var kt;
    (function(e) {
        e[e.Other = 0] = "Other",
        e[e.Type = 1] = "Type",
        e[e.Parameter = 2] = "Parameter"
    }
    )(kt || (kt = {}));
    var Ft;
    (function(e) {
        e[e.Automatic = 0] = "Automatic",
        e[e.Explicit = 1] = "Explicit"
    }
    )(Ft || (Ft = {}));
    var Ve;
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
    )(Ve || (Ve = {}));
    var $e;
    (function(e) {
        e[e.Hint = 1] = "Hint",
        e[e.Info = 2] = "Info",
        e[e.Warning = 4] = "Warning",
        e[e.Error = 8] = "Error"
    }
    )($e || ($e = {}));
    var ze;
    (function(e) {
        e[e.Unnecessary = 1] = "Unnecessary",
        e[e.Deprecated = 2] = "Deprecated"
    }
    )(ze || (ze = {}));
    var Tt;
    (function(e) {
        e[e.Inline = 1] = "Inline",
        e[e.Gutter = 2] = "Gutter"
    }
    )(Tt || (Tt = {}));
    var It;
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
    )(It || (It = {}));
    var Ht;
    (function(e) {
        e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER",
        e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER",
        e[e.TOP_CENTER = 2] = "TOP_CENTER"
    }
    )(Ht || (Ht = {}));
    var qt;
    (function(e) {
        e[e.Left = 1] = "Left",
        e[e.Center = 2] = "Center",
        e[e.Right = 4] = "Right",
        e[e.Full = 7] = "Full"
    }
    )(qt || (qt = {}));
    var Wt;
    (function(e) {
        e[e.Off = 0] = "Off",
        e[e.On = 1] = "On",
        e[e.Relative = 2] = "Relative",
        e[e.Interval = 3] = "Interval",
        e[e.Custom = 4] = "Custom"
    }
    )(Wt || (Wt = {}));
    var Bt;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Text = 1] = "Text",
        e[e.Blocks = 2] = "Blocks"
    }
    )(Bt || (Bt = {}));
    var Yt;
    (function(e) {
        e[e.Smooth = 0] = "Smooth",
        e[e.Immediate = 1] = "Immediate"
    }
    )(Yt || (Yt = {}));
    var Vt;
    (function(e) {
        e[e.Auto = 1] = "Auto",
        e[e.Hidden = 2] = "Hidden",
        e[e.Visible = 3] = "Visible"
    }
    )(Vt || (Vt = {}));
    var Ge;
    (function(e) {
        e[e.LTR = 0] = "LTR",
        e[e.RTL = 1] = "RTL"
    }
    )(Ge || (Ge = {}));
    var $t;
    (function(e) {
        e[e.Invoke = 1] = "Invoke",
        e[e.TriggerCharacter = 2] = "TriggerCharacter",
        e[e.ContentChange = 3] = "ContentChange"
    }
    )($t || ($t = {}));
    var zt;
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
    )(zt || (zt = {}));
    var Gt;
    (function(e) {
        e[e.Deprecated = 1] = "Deprecated"
    }
    )(Gt || (Gt = {}));
    var jt;
    (function(e) {
        e[e.Hidden = 0] = "Hidden",
        e[e.Blink = 1] = "Blink",
        e[e.Smooth = 2] = "Smooth",
        e[e.Phase = 3] = "Phase",
        e[e.Expand = 4] = "Expand",
        e[e.Solid = 5] = "Solid"
    }
    )(jt || (jt = {}));
    var yt;
    (function(e) {
        e[e.Line = 1] = "Line",
        e[e.Block = 2] = "Block",
        e[e.Underline = 3] = "Underline",
        e[e.LineThin = 4] = "LineThin",
        e[e.BlockOutline = 5] = "BlockOutline",
        e[e.UnderlineThin = 6] = "UnderlineThin"
    }
    )(yt || (yt = {}));
    var Qt;
    (function(e) {
        e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges",
        e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges",
        e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore",
        e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter"
    }
    )(Qt || (Qt = {}));
    var Zt;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Same = 1] = "Same",
        e[e.Indent = 2] = "Indent",
        e[e.DeepIndent = 3] = "DeepIndent"
    }
    )(Zt || (Zt = {}));
    class fe {
        static chord(t, n) {
            return Zn(t, n)
        }
    }
    fe.CtrlCmd = 2048,
    fe.Shift = 1024,
    fe.Alt = 512,
    fe.WinCtrl = 256;
    function Jn() {
        return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: Qn,
            Emitter: O,
            KeyCode: Ve,
            KeyMod: fe,
            Position: B,
            Range: E,
            Selection: V,
            SelectionDirection: Ge,
            MarkerSeverity: $e,
            MarkerTag: ze,
            Uri: J,
            Token: Xn
        }
    }
    var re = function(e, t, n, s) {
        function r(i) {
            return i instanceof n ? i : new n(function(l) {
                l(i)
            }
            )
        }
        return new (n || (n = Promise))(function(i, l) {
            function u(f) {
                try {
                    o(s.next(f))
                } catch (c) {
                    l(c)
                }
            }
            function a(f) {
                try {
                    o(s.throw(f))
                } catch (c) {
                    l(c)
                }
            }
            function o(f) {
                f.done ? i(f.value) : r(f.value).then(u, a)
            }
            o((s = s.apply(e, t || [])).next())
        }
        )
    };
    class On extends Tn {
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
            let s = gt(t.column, Wn(n), this._lines[t.lineNumber - 1], 0);
            return s ? new E(t.lineNumber,s.startColumn,t.lineNumber,s.endColumn) : null
        }
        words(t) {
            const n = this._lines
              , s = this._wordenize.bind(this);
            let r = 0
              , i = ""
              , l = 0
              , u = [];
            return {
                *[Symbol.iterator]() {
                    for (; ; )
                        if (l < u.length) {
                            const a = i.substring(u[l].start, u[l].end);
                            l += 1,
                            yield a
                        } else if (r < n.length)
                            i = n[r],
                            u = s(i, t),
                            l = 0,
                            r += 1;
                        else
                            break
                }
            }
        }
        getLineWords(t, n) {
            let s = this._lines[t - 1]
              , r = this._wordenize(s, n)
              , i = [];
            for (const l of r)
                i.push({
                    word: s.substring(l.start, l.end),
                    startColumn: l.start + 1,
                    endColumn: l.end + 1
                });
            return i
        }
        _wordenize(t, n) {
            const s = [];
            let r;
            for (n.lastIndex = 0; (r = n.exec(t)) && r[0].length !== 0; )
                s.push({
                    start: r.index,
                    end: r.index + r[0].length
                });
            return s
        }
        getValueInRange(t) {
            if (t = this._validateRange(t),
            t.startLineNumber === t.endLineNumber)
                return this._lines[t.startLineNumber - 1].substring(t.startColumn - 1, t.endColumn - 1);
            let n = this._eol
              , s = t.startLineNumber - 1
              , r = t.endLineNumber - 1
              , i = [];
            i.push(this._lines[s].substring(t.startColumn - 1));
            for (let l = s + 1; l < r; l++)
                i.push(this._lines[l]);
            return i.push(this._lines[r].substring(0, t.endColumn - 1)),
            i.join(n)
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
              , s = this._lines[n.index].length;
            return {
                lineNumber: 1 + n.index,
                column: 1 + Math.min(n.remainder, s)
            }
        }
        _validateRange(t) {
            const n = this._validatePosition({
                lineNumber: t.startLineNumber,
                column: t.startColumn
            })
              , s = this._validatePosition({
                lineNumber: t.endLineNumber,
                column: t.endColumn
            });
            return n.lineNumber !== t.startLineNumber || n.column !== t.startColumn || s.lineNumber !== t.endLineNumber || s.column !== t.endColumn ? {
                startLineNumber: n.lineNumber,
                startColumn: n.column,
                endLineNumber: s.lineNumber,
                endColumn: s.column
            } : t
        }
        _validatePosition(t) {
            if (!B.isIPosition(t))
                throw new Error("bad position");
            let {lineNumber: n, column: s} = t
              , r = !1;
            if (n < 1)
                n = 1,
                s = 1,
                r = !0;
            else if (n > this._lines.length)
                n = this._lines.length,
                s = this._lines[n - 1].length + 1,
                r = !0;
            else {
                let i = this._lines[n - 1].length + 1;
                s < 1 ? (s = 1,
                r = !0) : s > i && (s = i,
                r = !0)
            }
            return r ? {
                lineNumber: n,
                column: s
            } : t
        }
    }
    class ie {
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
            this._models[t.url] = new On(J.parse(t.url),t.lines,t.EOL,t.versionId)
        }
        acceptModelChanged(t, n) {
            if (!this._models[t])
                return;
            this._models[t].onEvents(n)
        }
        acceptRemovedModel(t) {
            !this._models[t] || delete this._models[t]
        }
        computeDiff(t, n, s, r) {
            return re(this, void 0, void 0, function*() {
                const i = this._getModel(t)
                  , l = this._getModel(n);
                if (!i || !l)
                    return null;
                const u = i.getLinesContent()
                  , a = l.getLinesContent()
                  , f = new Dn(u,a,{
                    shouldComputeCharChanges: !0,
                    shouldPostProcessCharChanges: !0,
                    shouldIgnoreTrimWhitespace: s,
                    shouldMakePrettyDiff: !0,
                    maxComputationTime: r
                }).computeDiff()
                  , c = f.changes.length > 0 ? !1 : this._modelsAreIdentical(i, l);
                return {
                    quitEarly: f.quitEarly,
                    identical: c,
                    changes: f.changes
                }
            })
        }
        _modelsAreIdentical(t, n) {
            const s = t.getLineCount()
              , r = n.getLineCount();
            if (s !== r)
                return !1;
            for (let i = 1; i <= s; i++) {
                const l = t.getLineContent(i)
                  , u = n.getLineContent(i);
                if (l !== u)
                    return !1
            }
            return !0
        }
        computeMoreMinimalEdits(t, n) {
            return re(this, void 0, void 0, function*() {
                const s = this._getModel(t);
                if (!s)
                    return n;
                const r = [];
                let i;
                n = n.slice(0).sort( (l, u) => {
                    if (l.range && u.range)
                        return E.compareRangesUsingStarts(l.range, u.range);
                    let a = l.range ? 0 : 1
                      , o = u.range ? 0 : 1;
                    return a - o
                }
                );
                for (let {range: l, text: u, eol: a} of n) {
                    if (typeof a == "number" && (i = a),
                    E.isEmpty(l) && !u)
                        continue;
                    const o = s.getValueInRange(l);
                    if (u = u.replace(/\r\n|\n|\r/g, s.eol),
                    o === u)
                        continue;
                    if (Math.max(u.length, o.length) > ie._diffLimit) {
                        r.push({
                            range: l,
                            text: u
                        });
                        continue
                    }
                    const f = gn(o, u, !1)
                      , c = s.offsetAt(E.lift(l).getStartPosition());
                    for (const m of f) {
                        const L = s.positionAt(c + m.originalStart)
                          , b = s.positionAt(c + m.originalStart + m.originalLength)
                          , w = {
                            text: u.substr(m.modifiedStart, m.modifiedLength),
                            range: {
                                startLineNumber: L.lineNumber,
                                startColumn: L.column,
                                endLineNumber: b.lineNumber,
                                endColumn: b.column
                            }
                        };
                        s.getValueInRange(w.range) !== w.text && r.push(w)
                    }
                }
                return typeof i == "number" && r.push({
                    eol: i,
                    text: "",
                    range: {
                        startLineNumber: 0,
                        startColumn: 0,
                        endLineNumber: 0,
                        endColumn: 0
                    }
                }),
                r
            })
        }
        computeLinks(t) {
            return re(this, void 0, void 0, function*() {
                let n = this._getModel(t);
                return n ? jn(n) : null
            })
        }
        textualSuggest(t, n, s, r) {
            return re(this, void 0, void 0, function*() {
                const i = new Le(!0)
                  , l = new RegExp(s,r)
                  , u = new Set;
                e: for (let a of t) {
                    const o = this._getModel(a);
                    if (!!o) {
                        for (let f of o.words(l))
                            if (!(f === n || !isNaN(Number(f))) && (u.add(f),
                            u.size > ie._suggestionsLimit))
                                break e
                    }
                }
                return {
                    words: Array.from(u),
                    duration: i.elapsed()
                }
            })
        }
        computeWordRanges(t, n, s, r) {
            return re(this, void 0, void 0, function*() {
                let i = this._getModel(t);
                if (!i)
                    return Object.create(null);
                const l = new RegExp(s,r)
                  , u = Object.create(null);
                for (let a = n.startLineNumber; a < n.endLineNumber; a++) {
                    let o = i.getLineWords(a, l);
                    for (const f of o) {
                        if (!isNaN(Number(f.word)))
                            continue;
                        let c = u[f.word];
                        c || (c = [],
                        u[f.word] = c),
                        c.push({
                            startLineNumber: a,
                            startColumn: f.startColumn,
                            endLineNumber: a,
                            endColumn: f.endColumn
                        })
                    }
                }
                return u
            })
        }
        navigateValueSet(t, n, s, r, i) {
            return re(this, void 0, void 0, function*() {
                let l = this._getModel(t);
                if (!l)
                    return null;
                let u = new RegExp(r,i);
                n.startColumn === n.endColumn && (n = {
                    startLineNumber: n.startLineNumber,
                    startColumn: n.startColumn,
                    endLineNumber: n.endLineNumber,
                    endColumn: n.endColumn + 1
                });
                let a = l.getValueInRange(n)
                  , o = l.getWordAtPosition({
                    lineNumber: n.startLineNumber,
                    column: n.startColumn
                }, u);
                if (!o)
                    return null;
                let f = l.getValueInRange(o);
                return Ie.INSTANCE.navigateValueSet(n, a, o, f, s)
            })
        }
        loadForeignModule(t, n, s) {
            let l = {
                host: Ke(s, (u, a) => this._host.fhr(u, a)),
                getMirrorModels: () => this._getModels()
            };
            return this._foreignModuleFactory ? (this._foreignModule = this._foreignModuleFactory(l, n),
            Promise.resolve(pe(this._foreignModule))) : Promise.reject(new Error("Unexpected usage"))
        }
        fmr(t, n) {
            if (!this._foreignModule || typeof this._foreignModule[t] != "function")
                return Promise.reject(new Error("Missing requestHandler or method: " + t));
            try {
                return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, n))
            } catch (s) {
                return Promise.reject(s)
            }
        }
    }
    ie._diffLimit = 1e5,
    ie._suggestionsLimit = 1e4,
    typeof importScripts == "function" && (T.monaco = Jn());
    let je = !1;
    function Kn(e) {
        if (je)
            return;
        je = !0;
        const t = new cn(n => {
            self.postMessage(n)
        }
        ,n => new ie(n,e));
        self.onmessage = n => {
            t.onmessage(n.data)
        }
    }
    self.onmessage = e => {
        je || Kn(null)
    }
}
)();
