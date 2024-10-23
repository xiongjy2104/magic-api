(function() {
    "use strict";
    class Wi {
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
            this.listeners.forEach(r => {
                r(t)
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
    const qi = new Wi;
    function Hi(e) {
        Bi(e) || qi.onUnexpectedError(e)
    }
    function jr(e) {
        if (e instanceof Error) {
            let {name: t, message: r} = e;
            const n = e.stacktrace || e.stack;
            return {
                $isError: !0,
                name: t,
                message: r,
                stack: n
            }
        }
        return e
    }
    const Ur = "Canceled";
    function Bi(e) {
        return e instanceof Error && e.name === Ur && e.message === Ur
    }
    function Yi(e) {
        const t = this;
        let r = !1, n;
        return function() {
            return r || (r = !0,
            n = e.apply(t, arguments)),
            n
        }
    }
    var Rt;
    (function(e) {
        function t(p) {
            return p && typeof p == "object" && typeof p[Symbol.iterator] == "function"
        }
        e.is = t;
        const r = Object.freeze([]);
        function n() {
            return r
        }
        e.empty = n;
        function *i(p) {
            yield p
        }
        e.single = i;
        function s(p) {
            return p || r
        }
        e.from = s;
        function a(p) {
            return !p || p[Symbol.iterator]().next().done === !0
        }
        e.isEmpty = a;
        function o(p) {
            return p[Symbol.iterator]().next().value
        }
        e.first = o;
        function u(p, g) {
            for (const _ of p)
                if (g(_))
                    return !0;
            return !1
        }
        e.some = u;
        function l(p, g) {
            for (const _ of p)
                if (g(_))
                    return _
        }
        e.find = l;
        function *c(p, g) {
            for (const _ of p)
                g(_) && (yield _)
        }
        e.filter = c;
        function *f(p, g) {
            let _ = 0;
            for (const L of p)
                yield g(L, _++)
        }
        e.map = f;
        function *h(...p) {
            for (const g of p)
                for (const _ of g)
                    yield _
        }
        e.concat = h;
        function *d(p) {
            for (const g of p)
                for (const _ of g)
                    yield _
        }
        e.concatNested = d;
        function m(p, g, _) {
            let L = _;
            for (const S of p)
                L = g(L, S);
            return L
        }
        e.reduce = m;
        function *v(p, g, _=p.length) {
            for (g < 0 && (g += p.length),
            _ < 0 ? _ += p.length : _ > p.length && (_ = p.length); g < _; g++)
                yield p[g]
        }
        e.slice = v;
        function b(p, g=Number.POSITIVE_INFINITY) {
            const _ = [];
            if (g === 0)
                return [_, p];
            const L = p[Symbol.iterator]();
            for (let S = 0; S < g; S++) {
                const A = L.next();
                if (A.done)
                    return [_, e.empty()];
                _.push(A.value)
            }
            return [_, {
                [Symbol.iterator]() {
                    return L
                }
            }]
        }
        e.consume = b;
        function N(p, g, _= (L, S) => L === S) {
            const L = p[Symbol.iterator]()
              , S = g[Symbol.iterator]();
            for (; ; ) {
                const A = L.next()
                  , w = S.next();
                if (A.done !== w.done)
                    return !1;
                if (A.done)
                    return !0;
                if (!_(A.value, w.value))
                    return !1
            }
        }
        e.equals = N
    }
    )(Rt || (Rt = {}));
    function Qa(e) {
        return e
    }
    function Xa(e, t) {}
    class zi extends Error {
        constructor(t) {
            super(`Encountered errors while disposing of store. Errors: [${t.join(", ")}]`),
            this.errors = t
        }
    }
    function Rr(e) {
        if (Rt.is(e)) {
            let t = [];
            for (const r of e)
                if (r)
                    try {
                        r.dispose()
                    } catch (n) {
                        t.push(n)
                    }
            if (t.length === 1)
                throw t[0];
            if (t.length > 1)
                throw new zi(t);
            return Array.isArray(e) ? [] : e
        } else if (e)
            return e.dispose(),
            e
    }
    function Gi(...e) {
        return Or( () => Rr(e))
    }
    function Or(e) {
        return {
            dispose: Yi( () => {
                e()
            }
            )
        }
    }
    class tt {
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
                Rr(this._toDispose.values())
            } finally {
                this._toDispose.clear()
            }
        }
        add(t) {
            if (!t)
                return t;
            if (t === this)
                throw new Error("Cannot register a disposable on itself!");
            return this._isDisposed ? tt.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t),
            t
        }
    }
    tt.DISABLE_DISPOSED_WARNING = !1;
    class Vr {
        constructor() {
            this._store = new tt,
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
    Vr.None = Object.freeze({
        dispose() {}
    });
    var Ot;
    const bt = "en";
    let Vt = !1, $t = !1, Wt = !1, yt, qt = bt, Ji, je;
    const ee = typeof self == "object" ? self : typeof global == "object" ? global : {};
    let Z;
    typeof ee.vscode != "undefined" && typeof ee.vscode.process != "undefined" ? Z = ee.vscode.process : typeof process != "undefined" && (Z = process);
    const Qi = typeof ((Ot = Z == null ? void 0 : Z.versions) === null || Ot === void 0 ? void 0 : Ot.electron) == "string" && Z.type === "renderer";
    if (typeof navigator == "object" && !Qi)
        je = navigator.userAgent,
        Vt = je.indexOf("Windows") >= 0,
        $t = je.indexOf("Macintosh") >= 0,
        (je.indexOf("Macintosh") >= 0 || je.indexOf("iPad") >= 0 || je.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0,
        Wt = je.indexOf("Linux") >= 0,
        yt = navigator.language,
        qt = yt;
    else if (typeof Z == "object") {
        Vt = Z.platform === "win32",
        $t = Z.platform === "darwin",
        Wt = Z.platform === "linux",
        Wt && !!Z.env.SNAP && Z.env.SNAP_REVISION,
        yt = bt,
        qt = bt;
        const e = Z.env.VSCODE_NLS_CONFIG;
        if (e)
            try {
                const t = JSON.parse(e)
                  , r = t.availableLanguages["*"];
                yt = t.locale,
                qt = r || bt,
                Ji = t._translationsConfigFile
            } catch {}
    } else
        console.error("Unable to resolve platform.");
    const rt = Vt
      , Xi = $t
      , $r = function() {
        if (ee.setImmediate)
            return ee.setImmediate.bind(ee);
        if (typeof ee.postMessage == "function" && !ee.importScripts) {
            let r = [];
            ee.addEventListener("message", i => {
                if (i.data && i.data.vscodeSetImmediateId)
                    for (let s = 0, a = r.length; s < a; s++) {
                        const o = r[s];
                        if (o.id === i.data.vscodeSetImmediateId) {
                            r.splice(s, 1),
                            o.callback();
                            return
                        }
                    }
            }
            );
            let n = 0;
            return i => {
                const s = ++n;
                r.push({
                    id: s,
                    callback: i
                }),
                ee.postMessage({
                    vscodeSetImmediateId: s
                }, "*")
            }
        }
        if (typeof (Z == null ? void 0 : Z.nextTick) == "function")
            return Z.nextTick.bind(Z);
        const t = Promise.resolve();
        return r => t.then(r)
    }();
    function Zi(e) {
        let t = []
          , r = Object.getPrototypeOf(e);
        for (; Object.prototype !== r; )
            t = t.concat(Object.getOwnPropertyNames(r)),
            r = Object.getPrototypeOf(r);
        return t
    }
    function Ht(e) {
        const t = [];
        for (const r of Zi(e))
            typeof e[r] == "function" && t.push(r);
        return t
    }
    function Wr(e, t) {
        const r = i => function() {
            const s = Array.prototype.slice.call(arguments, 0);
            return t(i, s)
        }
        ;
        let n = {};
        for (const i of e)
            n[i] = r(i);
        return n
    }
    const Ki = "$initialize";
    class es {
        constructor(t) {
            this._workerId = -1,
            this._handler = t,
            this._lastSentReq = 0,
            this._pendingReplies = Object.create(null)
        }
        setWorkerId(t) {
            this._workerId = t
        }
        sendMessage(t, r) {
            let n = String(++this._lastSentReq);
            return new Promise( (i, s) => {
                this._pendingReplies[n] = {
                    resolve: i,
                    reject: s
                },
                this._send({
                    vsWorker: this._workerId,
                    req: n,
                    method: t,
                    args: r
                })
            }
            )
        }
        handleMessage(t) {
            !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t)
        }
        _handleMessage(t) {
            if (t.seq) {
                let s = t;
                if (!this._pendingReplies[s.seq]) {
                    console.warn("Got reply to unknown seq");
                    return
                }
                let a = this._pendingReplies[s.seq];
                if (delete this._pendingReplies[s.seq],
                s.err) {
                    let o = s.err;
                    s.err.$isError && (o = new Error,
                    o.name = s.err.name,
                    o.message = s.err.message,
                    o.stack = s.err.stack),
                    a.reject(o);
                    return
                }
                a.resolve(s.res);
                return
            }
            let r = t
              , n = r.req;
            this._handler.handleMessage(r.method, r.args).then(s => {
                this._send({
                    vsWorker: this._workerId,
                    seq: n,
                    res: s,
                    err: void 0
                })
            }
            , s => {
                s.detail instanceof Error && (s.detail = jr(s.detail)),
                this._send({
                    vsWorker: this._workerId,
                    seq: n,
                    res: void 0,
                    err: jr(s)
                })
            }
            )
        }
        _send(t) {
            let r = [];
            if (t.req) {
                const n = t;
                for (let i = 0; i < n.args.length; i++)
                    n.args[i]instanceof ArrayBuffer && r.push(n.args[i])
            } else {
                const n = t;
                n.res instanceof ArrayBuffer && r.push(n.res)
            }
            this._handler.sendMessage(t, r)
        }
    }
    class ts {
        constructor(t, r) {
            this._requestHandlerFactory = r,
            this._requestHandler = null,
            this._protocol = new es({
                sendMessage: (n, i) => {
                    t(n, i)
                }
                ,
                handleMessage: (n, i) => this._handleMessage(n, i)
            })
        }
        onmessage(t) {
            this._protocol.handleMessage(t)
        }
        _handleMessage(t, r) {
            if (t === Ki)
                return this.initialize(r[0], r[1], r[2], r[3]);
            if (!this._requestHandler || typeof this._requestHandler[t] != "function")
                return Promise.reject(new Error("Missing requestHandler or method: " + t));
            try {
                return Promise.resolve(this._requestHandler[t].apply(this._requestHandler, r))
            } catch (n) {
                return Promise.reject(n)
            }
        }
        initialize(t, r, n, i) {
            this._protocol.setWorkerId(t);
            const a = Wr(i, (o, u) => this._protocol.sendMessage(o, u));
            return this._requestHandlerFactory ? (this._requestHandler = this._requestHandlerFactory(a),
            Promise.resolve(Ht(this._requestHandler))) : (r && (typeof r.baseUrl != "undefined" && delete r.baseUrl,
            typeof r.paths != "undefined" && typeof r.paths.vs != "undefined" && delete r.paths.vs,
            typeof r.trustedTypesPolicy !== void 0 && delete r.trustedTypesPolicy,
            r.catchError = !0,
            self.require.config(r)),
            new Promise( (o, u) => {
                self.require([n], l => {
                    if (this._requestHandler = l.create(a),
                    !this._requestHandler) {
                        u(new Error("No RequestHandler!"));
                        return
                    }
                    o(Ht(this._requestHandler))
                }
                , u)
            }
            ))
        }
    }
    class Le {
        constructor(t, r, n, i) {
            this.originalStart = t,
            this.originalLength = r,
            this.modifiedStart = n,
            this.modifiedLength = i
        }
        getOriginalEnd() {
            return this.originalStart + this.originalLength
        }
        getModifiedEnd() {
            return this.modifiedStart + this.modifiedLength
        }
    }
    function rs(e) {
        return e.split(/\r\n|\r|\n/)
    }
    function ns(e) {
        for (let t = 0, r = e.length; t < r; t++) {
            const n = e.charCodeAt(t);
            if (n !== 32 && n !== 9)
                return t
        }
        return -1
    }
    function is(e, t=e.length - 1) {
        for (let r = t; r >= 0; r--) {
            const n = e.charCodeAt(r);
            if (n !== 32 && n !== 9)
                return r
        }
        return -1
    }
    function qr(e, t) {
        return (t << 5) - t + e | 0
    }
    function ss(e, t) {
        t = qr(149417, t);
        for (let r = 0, n = e.length; r < n; r++)
            t = qr(e.charCodeAt(r), t);
        return t
    }
    class Hr {
        constructor(t) {
            this.source = t
        }
        getElements() {
            const t = this.source
              , r = new Int32Array(t.length);
            for (let n = 0, i = t.length; n < i; n++)
                r[n] = t.charCodeAt(n);
            return r
        }
    }
    function as(e, t, r) {
        return new Ce(new Hr(e),new Hr(t)).ComputeDiff(r).changes
    }
    class He {
        static Assert(t, r) {
            if (!t)
                throw new Error(r)
        }
    }
    class Be {
        static Copy(t, r, n, i, s) {
            for (let a = 0; a < s; a++)
                n[i + a] = t[r + a]
        }
        static Copy2(t, r, n, i, s) {
            for (let a = 0; a < s; a++)
                n[i + a] = t[r + a]
        }
    }
    class Br {
        constructor() {
            this.m_changes = [],
            this.m_originalStart = 1073741824,
            this.m_modifiedStart = 1073741824,
            this.m_originalCount = 0,
            this.m_modifiedCount = 0
        }
        MarkNextChange() {
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new Le(this.m_originalStart,this.m_originalCount,this.m_modifiedStart,this.m_modifiedCount)),
            this.m_originalCount = 0,
            this.m_modifiedCount = 0,
            this.m_originalStart = 1073741824,
            this.m_modifiedStart = 1073741824
        }
        AddOriginalElement(t, r) {
            this.m_originalStart = Math.min(this.m_originalStart, t),
            this.m_modifiedStart = Math.min(this.m_modifiedStart, r),
            this.m_originalCount++
        }
        AddModifiedElement(t, r) {
            this.m_originalStart = Math.min(this.m_originalStart, t),
            this.m_modifiedStart = Math.min(this.m_modifiedStart, r),
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
    class Ce {
        constructor(t, r, n=null) {
            this.ContinueProcessingPredicate = n,
            this._originalSequence = t,
            this._modifiedSequence = r;
            const [i,s,a] = Ce._getElements(t)
              , [o,u,l] = Ce._getElements(r);
            this._hasStrings = a && l,
            this._originalStringElements = i,
            this._originalElementsOrHash = s,
            this._modifiedStringElements = o,
            this._modifiedElementsOrHash = u,
            this.m_forwardHistory = [],
            this.m_reverseHistory = []
        }
        static _isStringArray(t) {
            return t.length > 0 && typeof t[0] == "string"
        }
        static _getElements(t) {
            const r = t.getElements();
            if (Ce._isStringArray(r)) {
                const n = new Int32Array(r.length);
                for (let i = 0, s = r.length; i < s; i++)
                    n[i] = ss(r[i], 0);
                return [r, n, !0]
            }
            return r instanceof Int32Array ? [[], r, !1] : [[], new Int32Array(r), !1]
        }
        ElementsAreEqual(t, r) {
            return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[r] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[r] : !0
        }
        ElementsAreStrictEqual(t, r) {
            if (!this.ElementsAreEqual(t, r))
                return !1;
            const n = Ce._getStrictElement(this._originalSequence, t)
              , i = Ce._getStrictElement(this._modifiedSequence, r);
            return n === i
        }
        static _getStrictElement(t, r) {
            return typeof t.getStrictElement == "function" ? t.getStrictElement(r) : null
        }
        OriginalElementsAreEqual(t, r) {
            return this._originalElementsOrHash[t] !== this._originalElementsOrHash[r] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[r] : !0
        }
        ModifiedElementsAreEqual(t, r) {
            return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[r] ? !1 : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[r] : !0
        }
        ComputeDiff(t) {
            return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t)
        }
        _ComputeDiff(t, r, n, i, s) {
            const a = [!1];
            let o = this.ComputeDiffRecursive(t, r, n, i, a);
            return s && (o = this.PrettifyChanges(o)),
            {
                quitEarly: a[0],
                changes: o
            }
        }
        ComputeDiffRecursive(t, r, n, i, s) {
            for (s[0] = !1; t <= r && n <= i && this.ElementsAreEqual(t, n); )
                t++,
                n++;
            for (; r >= t && i >= n && this.ElementsAreEqual(r, i); )
                r--,
                i--;
            if (t > r || n > i) {
                let f;
                return n <= i ? (He.Assert(t === r + 1, "originalStart should only be one more than originalEnd"),
                f = [new Le(t,0,n,i - n + 1)]) : t <= r ? (He.Assert(n === i + 1, "modifiedStart should only be one more than modifiedEnd"),
                f = [new Le(t,r - t + 1,n,0)]) : (He.Assert(t === r + 1, "originalStart should only be one more than originalEnd"),
                He.Assert(n === i + 1, "modifiedStart should only be one more than modifiedEnd"),
                f = []),
                f
            }
            const a = [0]
              , o = [0]
              , u = this.ComputeRecursionPoint(t, r, n, i, a, o, s)
              , l = a[0]
              , c = o[0];
            if (u !== null)
                return u;
            if (!s[0]) {
                const f = this.ComputeDiffRecursive(t, l, n, c, s);
                let h = [];
                return s[0] ? h = [new Le(l + 1,r - (l + 1) + 1,c + 1,i - (c + 1) + 1)] : h = this.ComputeDiffRecursive(l + 1, r, c + 1, i, s),
                this.ConcatenateChanges(f, h)
            }
            return [new Le(t,r - t + 1,n,i - n + 1)]
        }
        WALKTRACE(t, r, n, i, s, a, o, u, l, c, f, h, d, m, v, b, N, p) {
            let g = null
              , _ = null
              , L = new Br
              , S = r
              , A = n
              , w = d[0] - b[0] - i
              , y = -1073741824
              , T = this.m_forwardHistory.length - 1;
            do {
                const M = w + t;
                M === S || M < A && l[M - 1] < l[M + 1] ? (f = l[M + 1],
                m = f - w - i,
                f < y && L.MarkNextChange(),
                y = f,
                L.AddModifiedElement(f + 1, m),
                w = M + 1 - t) : (f = l[M - 1] + 1,
                m = f - w - i,
                f < y && L.MarkNextChange(),
                y = f - 1,
                L.AddOriginalElement(f, m + 1),
                w = M - 1 - t),
                T >= 0 && (l = this.m_forwardHistory[T],
                t = l[0],
                S = 1,
                A = l.length - 1)
            } while (--T >= -1);
            if (g = L.getReverseChanges(),
            p[0]) {
                let M = d[0] + 1
                  , k = b[0] + 1;
                if (g !== null && g.length > 0) {
                    const F = g[g.length - 1];
                    M = Math.max(M, F.getOriginalEnd()),
                    k = Math.max(k, F.getModifiedEnd())
                }
                _ = [new Le(M,h - M + 1,k,v - k + 1)]
            } else {
                L = new Br,
                S = a,
                A = o,
                w = d[0] - b[0] - u,
                y = 1073741824,
                T = N ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
                do {
                    const M = w + s;
                    M === S || M < A && c[M - 1] >= c[M + 1] ? (f = c[M + 1] - 1,
                    m = f - w - u,
                    f > y && L.MarkNextChange(),
                    y = f + 1,
                    L.AddOriginalElement(f + 1, m + 1),
                    w = M + 1 - s) : (f = c[M - 1],
                    m = f - w - u,
                    f > y && L.MarkNextChange(),
                    y = f,
                    L.AddModifiedElement(f + 1, m + 1),
                    w = M - 1 - s),
                    T >= 0 && (c = this.m_reverseHistory[T],
                    s = c[0],
                    S = 1,
                    A = c.length - 1)
                } while (--T >= -1);
                _ = L.getChanges()
            }
            return this.ConcatenateChanges(g, _)
        }
        ComputeRecursionPoint(t, r, n, i, s, a, o) {
            let u = 0
              , l = 0
              , c = 0
              , f = 0
              , h = 0
              , d = 0;
            t--,
            n--,
            s[0] = 0,
            a[0] = 0,
            this.m_forwardHistory = [],
            this.m_reverseHistory = [];
            const m = r - t + (i - n)
              , v = m + 1
              , b = new Int32Array(v)
              , N = new Int32Array(v)
              , p = i - n
              , g = r - t
              , _ = t - n
              , L = r - i
              , A = (g - p) % 2 === 0;
            b[p] = t,
            N[g] = r,
            o[0] = !1;
            for (let w = 1; w <= m / 2 + 1; w++) {
                let y = 0
                  , T = 0;
                c = this.ClipDiagonalBound(p - w, w, p, v),
                f = this.ClipDiagonalBound(p + w, w, p, v);
                for (let k = c; k <= f; k += 2) {
                    k === c || k < f && b[k - 1] < b[k + 1] ? u = b[k + 1] : u = b[k - 1] + 1,
                    l = u - (k - p) - _;
                    const F = u;
                    for (; u < r && l < i && this.ElementsAreEqual(u + 1, l + 1); )
                        u++,
                        l++;
                    if (b[k] = u,
                    u + l > y + T && (y = u,
                    T = l),
                    !A && Math.abs(k - g) <= w - 1 && u >= N[k])
                        return s[0] = u,
                        a[0] = l,
                        F <= N[k] && 1447 > 0 && w <= 1447 + 1 ? this.WALKTRACE(p, c, f, _, g, h, d, L, b, N, u, r, s, l, i, a, A, o) : null
                }
                const M = (y - t + (T - n) - w) / 2;
                if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(y, M))
                    return o[0] = !0,
                    s[0] = y,
                    a[0] = T,
                    M > 0 && 1447 > 0 && w <= 1447 + 1 ? this.WALKTRACE(p, c, f, _, g, h, d, L, b, N, u, r, s, l, i, a, A, o) : (t++,
                    n++,
                    [new Le(t,r - t + 1,n,i - n + 1)]);
                h = this.ClipDiagonalBound(g - w, w, g, v),
                d = this.ClipDiagonalBound(g + w, w, g, v);
                for (let k = h; k <= d; k += 2) {
                    k === h || k < d && N[k - 1] >= N[k + 1] ? u = N[k + 1] - 1 : u = N[k - 1],
                    l = u - (k - g) - L;
                    const F = u;
                    for (; u > t && l > n && this.ElementsAreEqual(u, l); )
                        u--,
                        l--;
                    if (N[k] = u,
                    A && Math.abs(k - p) <= w && u <= b[k])
                        return s[0] = u,
                        a[0] = l,
                        F >= b[k] && 1447 > 0 && w <= 1447 + 1 ? this.WALKTRACE(p, c, f, _, g, h, d, L, b, N, u, r, s, l, i, a, A, o) : null
                }
                if (w <= 1447) {
                    let k = new Int32Array(f - c + 2);
                    k[0] = p - c + 1,
                    Be.Copy2(b, c, k, 1, f - c + 1),
                    this.m_forwardHistory.push(k),
                    k = new Int32Array(d - h + 2),
                    k[0] = g - h + 1,
                    Be.Copy2(N, h, k, 1, d - h + 1),
                    this.m_reverseHistory.push(k)
                }
            }
            return this.WALKTRACE(p, c, f, _, g, h, d, L, b, N, u, r, s, l, i, a, A, o)
        }
        PrettifyChanges(t) {
            for (let r = 0; r < t.length; r++) {
                const n = t[r]
                  , i = r < t.length - 1 ? t[r + 1].originalStart : this._originalElementsOrHash.length
                  , s = r < t.length - 1 ? t[r + 1].modifiedStart : this._modifiedElementsOrHash.length
                  , a = n.originalLength > 0
                  , o = n.modifiedLength > 0;
                for (; n.originalStart + n.originalLength < i && n.modifiedStart + n.modifiedLength < s && (!a || this.OriginalElementsAreEqual(n.originalStart, n.originalStart + n.originalLength)) && (!o || this.ModifiedElementsAreEqual(n.modifiedStart, n.modifiedStart + n.modifiedLength)); ) {
                    const l = this.ElementsAreStrictEqual(n.originalStart, n.modifiedStart);
                    if (this.ElementsAreStrictEqual(n.originalStart + n.originalLength, n.modifiedStart + n.modifiedLength) && !l)
                        break;
                    n.originalStart++,
                    n.modifiedStart++
                }
                let u = [null];
                if (r < t.length - 1 && this.ChangesOverlap(t[r], t[r + 1], u)) {
                    t[r] = u[0],
                    t.splice(r + 1, 1),
                    r--;
                    continue
                }
            }
            for (let r = t.length - 1; r >= 0; r--) {
                const n = t[r];
                let i = 0
                  , s = 0;
                if (r > 0) {
                    const f = t[r - 1];
                    i = f.originalStart + f.originalLength,
                    s = f.modifiedStart + f.modifiedLength
                }
                const a = n.originalLength > 0
                  , o = n.modifiedLength > 0;
                let u = 0
                  , l = this._boundaryScore(n.originalStart, n.originalLength, n.modifiedStart, n.modifiedLength);
                for (let f = 1; ; f++) {
                    const h = n.originalStart - f
                      , d = n.modifiedStart - f;
                    if (h < i || d < s || a && !this.OriginalElementsAreEqual(h, h + n.originalLength) || o && !this.ModifiedElementsAreEqual(d, d + n.modifiedLength))
                        break;
                    const v = (h === i && d === s ? 5 : 0) + this._boundaryScore(h, n.originalLength, d, n.modifiedLength);
                    v > l && (l = v,
                    u = f)
                }
                n.originalStart -= u,
                n.modifiedStart -= u;
                const c = [null];
                if (r > 0 && this.ChangesOverlap(t[r - 1], t[r], c)) {
                    t[r - 1] = c[0],
                    t.splice(r, 1),
                    r++;
                    continue
                }
            }
            if (this._hasStrings)
                for (let r = 1, n = t.length; r < n; r++) {
                    const i = t[r - 1]
                      , s = t[r]
                      , a = s.originalStart - i.originalStart - i.originalLength
                      , o = i.originalStart
                      , u = s.originalStart + s.originalLength
                      , l = u - o
                      , c = i.modifiedStart
                      , f = s.modifiedStart + s.modifiedLength
                      , h = f - c;
                    if (a < 5 && l < 20 && h < 20) {
                        const d = this._findBetterContiguousSequence(o, l, c, h, a);
                        if (d) {
                            const [m,v] = d;
                            (m !== i.originalStart + i.originalLength || v !== i.modifiedStart + i.modifiedLength) && (i.originalLength = m - i.originalStart,
                            i.modifiedLength = v - i.modifiedStart,
                            s.originalStart = m + a,
                            s.modifiedStart = v + a,
                            s.originalLength = u - s.originalStart,
                            s.modifiedLength = f - s.modifiedStart)
                        }
                    }
                }
            return t
        }
        _findBetterContiguousSequence(t, r, n, i, s) {
            if (r < s || i < s)
                return null;
            const a = t + r - s + 1
              , o = n + i - s + 1;
            let u = 0
              , l = 0
              , c = 0;
            for (let f = t; f < a; f++)
                for (let h = n; h < o; h++) {
                    const d = this._contiguousSequenceScore(f, h, s);
                    d > 0 && d > u && (u = d,
                    l = f,
                    c = h)
                }
            return u > 0 ? [l, c] : null
        }
        _contiguousSequenceScore(t, r, n) {
            let i = 0;
            for (let s = 0; s < n; s++) {
                if (!this.ElementsAreEqual(t + s, r + s))
                    return 0;
                i += this._originalStringElements[t + s].length
            }
            return i
        }
        _OriginalIsBoundary(t) {
            return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t])
        }
        _OriginalRegionIsBoundary(t, r) {
            if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1))
                return !0;
            if (r > 0) {
                const n = t + r;
                if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n))
                    return !0
            }
            return !1
        }
        _ModifiedIsBoundary(t) {
            return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t])
        }
        _ModifiedRegionIsBoundary(t, r) {
            if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1))
                return !0;
            if (r > 0) {
                const n = t + r;
                if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n))
                    return !0
            }
            return !1
        }
        _boundaryScore(t, r, n, i) {
            const s = this._OriginalRegionIsBoundary(t, r) ? 1 : 0
              , a = this._ModifiedRegionIsBoundary(n, i) ? 1 : 0;
            return s + a
        }
        ConcatenateChanges(t, r) {
            let n = [];
            if (t.length === 0 || r.length === 0)
                return r.length > 0 ? r : t;
            if (this.ChangesOverlap(t[t.length - 1], r[0], n)) {
                const i = new Array(t.length + r.length - 1);
                return Be.Copy(t, 0, i, 0, t.length - 1),
                i[t.length - 1] = n[0],
                Be.Copy(r, 1, i, t.length, r.length - 1),
                i
            } else {
                const i = new Array(t.length + r.length);
                return Be.Copy(t, 0, i, 0, t.length),
                Be.Copy(r, 0, i, t.length, r.length),
                i
            }
        }
        ChangesOverlap(t, r, n) {
            if (He.Assert(t.originalStart <= r.originalStart, "Left change is not less than or equal to right change"),
            He.Assert(t.modifiedStart <= r.modifiedStart, "Left change is not less than or equal to right change"),
            t.originalStart + t.originalLength >= r.originalStart || t.modifiedStart + t.modifiedLength >= r.modifiedStart) {
                const i = t.originalStart;
                let s = t.originalLength;
                const a = t.modifiedStart;
                let o = t.modifiedLength;
                return t.originalStart + t.originalLength >= r.originalStart && (s = r.originalStart + r.originalLength - t.originalStart),
                t.modifiedStart + t.modifiedLength >= r.modifiedStart && (o = r.modifiedStart + r.modifiedLength - t.modifiedStart),
                n[0] = new Le(i,s,a,o),
                !0
            } else
                return n[0] = null,
                !1
        }
        ClipDiagonalBound(t, r, n, i) {
            if (t >= 0 && t < i)
                return t;
            const s = n
              , a = i - n - 1
              , o = r % 2 === 0;
            if (t < 0) {
                const u = s % 2 === 0;
                return o === u ? 0 : 1
            } else {
                const u = a % 2 === 0;
                return o === u ? i - 1 : i - 2
            }
        }
    }
    let Ye;
    if (typeof ee.vscode != "undefined" && typeof ee.vscode.process != "undefined") {
        const e = ee.vscode.process;
        Ye = {
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
                return $r(t)
            }
        }
    } else
        typeof process != "undefined" ? Ye = {
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
        } : Ye = {
            get platform() {
                return rt ? "win32" : Xi ? "darwin" : "linux"
            },
            get arch() {},
            nextTick(e) {
                return $r(e)
            },
            get env() {
                return {}
            },
            cwd() {
                return "/"
            }
        };
    const Bt = Ye.cwd
      , os = Ye.env
      , Ue = Ye.platform
      , us = 65
      , ls = 97
      , fs = 90
      , cs = 122
      , xe = 46
      , K = 47
      , se = 92
      , ke = 58
      , hs = 63;
    class Yr extends Error {
        constructor(t, r, n) {
            let i;
            typeof r == "string" && r.indexOf("not ") === 0 ? (i = "must not be",
            r = r.replace(/^not /, "")) : i = "must be";
            const s = t.indexOf(".") !== -1 ? "property" : "argument";
            let a = `The "${t}" ${s} ${i} of type ${r}`;
            a += `. Received type ${typeof n}`,
            super(a),
            this.code = "ERR_INVALID_ARG_TYPE"
        }
    }
    function J(e, t) {
        if (typeof e != "string")
            throw new Yr(t,"string",e)
    }
    function R(e) {
        return e === K || e === se
    }
    function Yt(e) {
        return e === K
    }
    function Te(e) {
        return e >= us && e <= fs || e >= ls && e <= cs
    }
    function St(e, t, r, n) {
        let i = ""
          , s = 0
          , a = -1
          , o = 0
          , u = 0;
        for (let l = 0; l <= e.length; ++l) {
            if (l < e.length)
                u = e.charCodeAt(l);
            else {
                if (n(u))
                    break;
                u = K
            }
            if (n(u)) {
                if (!(a === l - 1 || o === 1))
                    if (o === 2) {
                        if (i.length < 2 || s !== 2 || i.charCodeAt(i.length - 1) !== xe || i.charCodeAt(i.length - 2) !== xe) {
                            if (i.length > 2) {
                                const c = i.lastIndexOf(r);
                                c === -1 ? (i = "",
                                s = 0) : (i = i.slice(0, c),
                                s = i.length - 1 - i.lastIndexOf(r)),
                                a = l,
                                o = 0;
                                continue
                            } else if (i.length !== 0) {
                                i = "",
                                s = 0,
                                a = l,
                                o = 0;
                                continue
                            }
                        }
                        t && (i += i.length > 0 ? `${r}..` : "..",
                        s = 2)
                    } else
                        i.length > 0 ? i += `${r}${e.slice(a + 1, l)}` : i = e.slice(a + 1, l),
                        s = l - a - 1;
                a = l,
                o = 0
            } else
                u === xe && o !== -1 ? ++o : o = -1
        }
        return i
    }
    function zr(e, t) {
        if (t === null || typeof t != "object")
            throw new Yr("pathObject","Object",t);
        const r = t.dir || t.root
          , n = t.base || `${t.name || ""}${t.ext || ""}`;
        return r ? r === t.root ? `${r}${n}` : `${r}${e}${n}` : n
    }
    const ie = {
        resolve(...e) {
            let t = ""
              , r = ""
              , n = !1;
            for (let i = e.length - 1; i >= -1; i--) {
                let s;
                if (i >= 0) {
                    if (s = e[i],
                    J(s, "path"),
                    s.length === 0)
                        continue
                } else
                    t.length === 0 ? s = Bt() : (s = os[`=${t}`] || Bt(),
                    (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === se) && (s = `${t}\\`));
                const a = s.length;
                let o = 0
                  , u = ""
                  , l = !1;
                const c = s.charCodeAt(0);
                if (a === 1)
                    R(c) && (o = 1,
                    l = !0);
                else if (R(c))
                    if (l = !0,
                    R(s.charCodeAt(1))) {
                        let f = 2
                          , h = f;
                        for (; f < a && !R(s.charCodeAt(f)); )
                            f++;
                        if (f < a && f !== h) {
                            const d = s.slice(h, f);
                            for (h = f; f < a && R(s.charCodeAt(f)); )
                                f++;
                            if (f < a && f !== h) {
                                for (h = f; f < a && !R(s.charCodeAt(f)); )
                                    f++;
                                (f === a || f !== h) && (u = `\\\\${d}\\${s.slice(h, f)}`,
                                o = f)
                            }
                        }
                    } else
                        o = 1;
                else
                    Te(c) && s.charCodeAt(1) === ke && (u = s.slice(0, 2),
                    o = 2,
                    a > 2 && R(s.charCodeAt(2)) && (l = !0,
                    o = 3));
                if (u.length > 0)
                    if (t.length > 0) {
                        if (u.toLowerCase() !== t.toLowerCase())
                            continue
                    } else
                        t = u;
                if (n) {
                    if (t.length > 0)
                        break
                } else if (r = `${s.slice(o)}\\${r}`,
                n = l,
                l && t.length > 0)
                    break
            }
            return r = St(r, !n, "\\", R),
            n ? `${t}\\${r}` : `${t}${r}` || "."
        },
        normalize(e) {
            J(e, "path");
            const t = e.length;
            if (t === 0)
                return ".";
            let r = 0, n, i = !1;
            const s = e.charCodeAt(0);
            if (t === 1)
                return Yt(s) ? "\\" : e;
            if (R(s))
                if (i = !0,
                R(e.charCodeAt(1))) {
                    let o = 2
                      , u = o;
                    for (; o < t && !R(e.charCodeAt(o)); )
                        o++;
                    if (o < t && o !== u) {
                        const l = e.slice(u, o);
                        for (u = o; o < t && R(e.charCodeAt(o)); )
                            o++;
                        if (o < t && o !== u) {
                            for (u = o; o < t && !R(e.charCodeAt(o)); )
                                o++;
                            if (o === t)
                                return `\\\\${l}\\${e.slice(u)}\\`;
                            o !== u && (n = `\\\\${l}\\${e.slice(u, o)}`,
                            r = o)
                        }
                    }
                } else
                    r = 1;
            else
                Te(s) && e.charCodeAt(1) === ke && (n = e.slice(0, 2),
                r = 2,
                t > 2 && R(e.charCodeAt(2)) && (i = !0,
                r = 3));
            let a = r < t ? St(e.slice(r), !i, "\\", R) : "";
            return a.length === 0 && !i && (a = "."),
            a.length > 0 && R(e.charCodeAt(t - 1)) && (a += "\\"),
            n === void 0 ? i ? `\\${a}` : a : i ? `${n}\\${a}` : `${n}${a}`
        },
        isAbsolute(e) {
            J(e, "path");
            const t = e.length;
            if (t === 0)
                return !1;
            const r = e.charCodeAt(0);
            return R(r) || t > 2 && Te(r) && e.charCodeAt(1) === ke && R(e.charCodeAt(2))
        },
        join(...e) {
            if (e.length === 0)
                return ".";
            let t, r;
            for (let s = 0; s < e.length; ++s) {
                const a = e[s];
                J(a, "path"),
                a.length > 0 && (t === void 0 ? t = r = a : t += `\\${a}`)
            }
            if (t === void 0)
                return ".";
            let n = !0
              , i = 0;
            if (typeof r == "string" && R(r.charCodeAt(0))) {
                ++i;
                const s = r.length;
                s > 1 && R(r.charCodeAt(1)) && (++i,
                s > 2 && (R(r.charCodeAt(2)) ? ++i : n = !1))
            }
            if (n) {
                for (; i < t.length && R(t.charCodeAt(i)); )
                    i++;
                i >= 2 && (t = `\\${t.slice(i)}`)
            }
            return ie.normalize(t)
        },
        relative(e, t) {
            if (J(e, "from"),
            J(t, "to"),
            e === t)
                return "";
            const r = ie.resolve(e)
              , n = ie.resolve(t);
            if (r === n || (e = r.toLowerCase(),
            t = n.toLowerCase(),
            e === t))
                return "";
            let i = 0;
            for (; i < e.length && e.charCodeAt(i) === se; )
                i++;
            let s = e.length;
            for (; s - 1 > i && e.charCodeAt(s - 1) === se; )
                s--;
            const a = s - i;
            let o = 0;
            for (; o < t.length && t.charCodeAt(o) === se; )
                o++;
            let u = t.length;
            for (; u - 1 > o && t.charCodeAt(u - 1) === se; )
                u--;
            const l = u - o
              , c = a < l ? a : l;
            let f = -1
              , h = 0;
            for (; h < c; h++) {
                const m = e.charCodeAt(i + h);
                if (m !== t.charCodeAt(o + h))
                    break;
                m === se && (f = h)
            }
            if (h !== c) {
                if (f === -1)
                    return n
            } else {
                if (l > c) {
                    if (t.charCodeAt(o + h) === se)
                        return n.slice(o + h + 1);
                    if (h === 2)
                        return n.slice(o + h)
                }
                a > c && (e.charCodeAt(i + h) === se ? f = h : h === 2 && (f = 3)),
                f === -1 && (f = 0)
            }
            let d = "";
            for (h = i + f + 1; h <= s; ++h)
                (h === s || e.charCodeAt(h) === se) && (d += d.length === 0 ? ".." : "\\..");
            return o += f,
            d.length > 0 ? `${d}${n.slice(o, u)}` : (n.charCodeAt(o) === se && ++o,
            n.slice(o, u))
        },
        toNamespacedPath(e) {
            if (typeof e != "string")
                return e;
            if (e.length === 0)
                return "";
            const t = ie.resolve(e);
            if (t.length <= 2)
                return e;
            if (t.charCodeAt(0) === se) {
                if (t.charCodeAt(1) === se) {
                    const r = t.charCodeAt(2);
                    if (r !== hs && r !== xe)
                        return `\\\\?\\UNC\\${t.slice(2)}`
                }
            } else if (Te(t.charCodeAt(0)) && t.charCodeAt(1) === ke && t.charCodeAt(2) === se)
                return `\\\\?\\${t}`;
            return e
        },
        dirname(e) {
            J(e, "path");
            const t = e.length;
            if (t === 0)
                return ".";
            let r = -1
              , n = 0;
            const i = e.charCodeAt(0);
            if (t === 1)
                return R(i) ? e : ".";
            if (R(i)) {
                if (r = n = 1,
                R(e.charCodeAt(1))) {
                    let o = 2
                      , u = o;
                    for (; o < t && !R(e.charCodeAt(o)); )
                        o++;
                    if (o < t && o !== u) {
                        for (u = o; o < t && R(e.charCodeAt(o)); )
                            o++;
                        if (o < t && o !== u) {
                            for (u = o; o < t && !R(e.charCodeAt(o)); )
                                o++;
                            if (o === t)
                                return e;
                            o !== u && (r = n = o + 1)
                        }
                    }
                }
            } else
                Te(i) && e.charCodeAt(1) === ke && (r = t > 2 && R(e.charCodeAt(2)) ? 3 : 2,
                n = r);
            let s = -1
              , a = !0;
            for (let o = t - 1; o >= n; --o)
                if (R(e.charCodeAt(o))) {
                    if (!a) {
                        s = o;
                        break
                    }
                } else
                    a = !1;
            if (s === -1) {
                if (r === -1)
                    return ".";
                s = r
            }
            return e.slice(0, s)
        },
        basename(e, t) {
            t !== void 0 && J(t, "ext"),
            J(e, "path");
            let r = 0, n = -1, i = !0, s;
            if (e.length >= 2 && Te(e.charCodeAt(0)) && e.charCodeAt(1) === ke && (r = 2),
            t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e)
                    return "";
                let a = t.length - 1
                  , o = -1;
                for (s = e.length - 1; s >= r; --s) {
                    const u = e.charCodeAt(s);
                    if (R(u)) {
                        if (!i) {
                            r = s + 1;
                            break
                        }
                    } else
                        o === -1 && (i = !1,
                        o = s + 1),
                        a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (n = s) : (a = -1,
                        n = o))
                }
                return r === n ? n = o : n === -1 && (n = e.length),
                e.slice(r, n)
            }
            for (s = e.length - 1; s >= r; --s)
                if (R(e.charCodeAt(s))) {
                    if (!i) {
                        r = s + 1;
                        break
                    }
                } else
                    n === -1 && (i = !1,
                    n = s + 1);
            return n === -1 ? "" : e.slice(r, n)
        },
        extname(e) {
            J(e, "path");
            let t = 0
              , r = -1
              , n = 0
              , i = -1
              , s = !0
              , a = 0;
            e.length >= 2 && e.charCodeAt(1) === ke && Te(e.charCodeAt(0)) && (t = n = 2);
            for (let o = e.length - 1; o >= t; --o) {
                const u = e.charCodeAt(o);
                if (R(u)) {
                    if (!s) {
                        n = o + 1;
                        break
                    }
                    continue
                }
                i === -1 && (s = !1,
                i = o + 1),
                u === xe ? r === -1 ? r = o : a !== 1 && (a = 1) : r !== -1 && (a = -1)
            }
            return r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === n + 1 ? "" : e.slice(r, i)
        },
        format: zr.bind(null, "\\"),
        parse(e) {
            J(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0)
                return t;
            const r = e.length;
            let n = 0
              , i = e.charCodeAt(0);
            if (r === 1)
                return R(i) ? (t.root = t.dir = e,
                t) : (t.base = t.name = e,
                t);
            if (R(i)) {
                if (n = 1,
                R(e.charCodeAt(1))) {
                    let f = 2
                      , h = f;
                    for (; f < r && !R(e.charCodeAt(f)); )
                        f++;
                    if (f < r && f !== h) {
                        for (h = f; f < r && R(e.charCodeAt(f)); )
                            f++;
                        if (f < r && f !== h) {
                            for (h = f; f < r && !R(e.charCodeAt(f)); )
                                f++;
                            f === r ? n = f : f !== h && (n = f + 1)
                        }
                    }
                }
            } else if (Te(i) && e.charCodeAt(1) === ke) {
                if (r <= 2)
                    return t.root = t.dir = e,
                    t;
                if (n = 2,
                R(e.charCodeAt(2))) {
                    if (r === 3)
                        return t.root = t.dir = e,
                        t;
                    n = 3
                }
            }
            n > 0 && (t.root = e.slice(0, n));
            let s = -1
              , a = n
              , o = -1
              , u = !0
              , l = e.length - 1
              , c = 0;
            for (; l >= n; --l) {
                if (i = e.charCodeAt(l),
                R(i)) {
                    if (!u) {
                        a = l + 1;
                        break
                    }
                    continue
                }
                o === -1 && (u = !1,
                o = l + 1),
                i === xe ? s === -1 ? s = l : c !== 1 && (c = 1) : s !== -1 && (c = -1)
            }
            return o !== -1 && (s === -1 || c === 0 || c === 1 && s === o - 1 && s === a + 1 ? t.base = t.name = e.slice(a, o) : (t.name = e.slice(a, s),
            t.base = e.slice(a, o),
            t.ext = e.slice(s, o))),
            a > 0 && a !== n ? t.dir = e.slice(0, a - 1) : t.dir = t.root,
            t
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null
    }
      , ae = {
        resolve(...e) {
            let t = ""
              , r = !1;
            for (let n = e.length - 1; n >= -1 && !r; n--) {
                const i = n >= 0 ? e[n] : Bt();
                J(i, "path"),
                i.length !== 0 && (t = `${i}/${t}`,
                r = i.charCodeAt(0) === K)
            }
            return t = St(t, !r, "/", Yt),
            r ? `/${t}` : t.length > 0 ? t : "."
        },
        normalize(e) {
            if (J(e, "path"),
            e.length === 0)
                return ".";
            const t = e.charCodeAt(0) === K
              , r = e.charCodeAt(e.length - 1) === K;
            return e = St(e, !t, "/", Yt),
            e.length === 0 ? t ? "/" : r ? "./" : "." : (r && (e += "/"),
            t ? `/${e}` : e)
        },
        isAbsolute(e) {
            return J(e, "path"),
            e.length > 0 && e.charCodeAt(0) === K
        },
        join(...e) {
            if (e.length === 0)
                return ".";
            let t;
            for (let r = 0; r < e.length; ++r) {
                const n = e[r];
                J(n, "path"),
                n.length > 0 && (t === void 0 ? t = n : t += `/${n}`)
            }
            return t === void 0 ? "." : ae.normalize(t)
        },
        relative(e, t) {
            if (J(e, "from"),
            J(t, "to"),
            e === t || (e = ae.resolve(e),
            t = ae.resolve(t),
            e === t))
                return "";
            const r = 1
              , n = e.length
              , i = n - r
              , s = 1
              , a = t.length - s
              , o = i < a ? i : a;
            let u = -1
              , l = 0;
            for (; l < o; l++) {
                const f = e.charCodeAt(r + l);
                if (f !== t.charCodeAt(s + l))
                    break;
                f === K && (u = l)
            }
            if (l === o)
                if (a > o) {
                    if (t.charCodeAt(s + l) === K)
                        return t.slice(s + l + 1);
                    if (l === 0)
                        return t.slice(s + l)
                } else
                    i > o && (e.charCodeAt(r + l) === K ? u = l : l === 0 && (u = 0));
            let c = "";
            for (l = r + u + 1; l <= n; ++l)
                (l === n || e.charCodeAt(l) === K) && (c += c.length === 0 ? ".." : "/..");
            return `${c}${t.slice(s + u)}`
        },
        toNamespacedPath(e) {
            return e
        },
        dirname(e) {
            if (J(e, "path"),
            e.length === 0)
                return ".";
            const t = e.charCodeAt(0) === K;
            let r = -1
              , n = !0;
            for (let i = e.length - 1; i >= 1; --i)
                if (e.charCodeAt(i) === K) {
                    if (!n) {
                        r = i;
                        break
                    }
                } else
                    n = !1;
            return r === -1 ? t ? "/" : "." : t && r === 1 ? "//" : e.slice(0, r)
        },
        basename(e, t) {
            t !== void 0 && J(t, "ext"),
            J(e, "path");
            let r = 0, n = -1, i = !0, s;
            if (t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e)
                    return "";
                let a = t.length - 1
                  , o = -1;
                for (s = e.length - 1; s >= 0; --s) {
                    const u = e.charCodeAt(s);
                    if (u === K) {
                        if (!i) {
                            r = s + 1;
                            break
                        }
                    } else
                        o === -1 && (i = !1,
                        o = s + 1),
                        a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (n = s) : (a = -1,
                        n = o))
                }
                return r === n ? n = o : n === -1 && (n = e.length),
                e.slice(r, n)
            }
            for (s = e.length - 1; s >= 0; --s)
                if (e.charCodeAt(s) === K) {
                    if (!i) {
                        r = s + 1;
                        break
                    }
                } else
                    n === -1 && (i = !1,
                    n = s + 1);
            return n === -1 ? "" : e.slice(r, n)
        },
        extname(e) {
            J(e, "path");
            let t = -1
              , r = 0
              , n = -1
              , i = !0
              , s = 0;
            for (let a = e.length - 1; a >= 0; --a) {
                const o = e.charCodeAt(a);
                if (o === K) {
                    if (!i) {
                        r = a + 1;
                        break
                    }
                    continue
                }
                n === -1 && (i = !1,
                n = a + 1),
                o === xe ? t === -1 ? t = a : s !== 1 && (s = 1) : t !== -1 && (s = -1)
            }
            return t === -1 || n === -1 || s === 0 || s === 1 && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
        },
        format: zr.bind(null, "/"),
        parse(e) {
            J(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0)
                return t;
            const r = e.charCodeAt(0) === K;
            let n;
            r ? (t.root = "/",
            n = 1) : n = 0;
            let i = -1
              , s = 0
              , a = -1
              , o = !0
              , u = e.length - 1
              , l = 0;
            for (; u >= n; --u) {
                const c = e.charCodeAt(u);
                if (c === K) {
                    if (!o) {
                        s = u + 1;
                        break
                    }
                    continue
                }
                a === -1 && (o = !1,
                a = u + 1),
                c === xe ? i === -1 ? i = u : l !== 1 && (l = 1) : i !== -1 && (l = -1)
            }
            if (a !== -1) {
                const c = s === 0 && r ? 1 : s;
                i === -1 || l === 0 || l === 1 && i === a - 1 && i === s + 1 ? t.base = t.name = e.slice(c, a) : (t.name = e.slice(c, i),
                t.base = e.slice(c, a),
                t.ext = e.slice(i, a))
            }
            return s > 0 ? t.dir = e.slice(0, s - 1) : r && (t.dir = "/"),
            t
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
    ae.win32 = ie.win32 = ie,
    ae.posix = ie.posix = ae,
    Ue === "win32" ? ie.normalize : ae.normalize,
    Ue === "win32" ? ie.resolve : ae.resolve,
    Ue === "win32" ? ie.relative : ae.relative,
    Ue === "win32" ? ie.dirname : ae.dirname,
    Ue === "win32" ? ie.basename : ae.basename,
    Ue === "win32" ? ie.extname : ae.extname,
    Ue === "win32" ? ie.sep : ae.sep;
    const ds = /^\w[\w\d+.-]*$/
      , gs = /^\//
      , ms = /^\/\//;
    function Gr(e, t) {
        if (!e.scheme && t)
            throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
        if (e.scheme && !ds.test(e.scheme))
            throw new Error("[UriError]: Scheme contains illegal characters.");
        if (e.path) {
            if (e.authority) {
                if (!gs.test(e.path))
                    throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
            } else if (ms.test(e.path))
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
        }
    }
    function ps(e, t) {
        return !e && !t ? "file" : e
    }
    function vs(e, t) {
        switch (e) {
        case "https":
        case "http":
        case "file":
            t ? t[0] !== ge && (t = ge + t) : t = ge;
            break
        }
        return t
    }
    const Y = ""
      , ge = "/"
      , bs = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class Re {
        constructor(t, r, n, i, s, a=!1) {
            typeof t == "object" ? (this.scheme = t.scheme || Y,
            this.authority = t.authority || Y,
            this.path = t.path || Y,
            this.query = t.query || Y,
            this.fragment = t.fragment || Y) : (this.scheme = ps(t, a),
            this.authority = r || Y,
            this.path = vs(this.scheme, n || Y),
            this.query = i || Y,
            this.fragment = s || Y,
            Gr(this, a))
        }
        static isUri(t) {
            return t instanceof Re ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1
        }
        get fsPath() {
            return zt(this, !1)
        }
        with(t) {
            if (!t)
                return this;
            let {scheme: r, authority: n, path: i, query: s, fragment: a} = t;
            return r === void 0 ? r = this.scheme : r === null && (r = Y),
            n === void 0 ? n = this.authority : n === null && (n = Y),
            i === void 0 ? i = this.path : i === null && (i = Y),
            s === void 0 ? s = this.query : s === null && (s = Y),
            a === void 0 ? a = this.fragment : a === null && (a = Y),
            r === this.scheme && n === this.authority && i === this.path && s === this.query && a === this.fragment ? this : new ze(r,n,i,s,a)
        }
        static parse(t, r=!1) {
            const n = bs.exec(t);
            return n ? new ze(n[2] || Y,_t(n[4] || Y),_t(n[5] || Y),_t(n[7] || Y),_t(n[9] || Y),r) : new ze(Y,Y,Y,Y,Y)
        }
        static file(t) {
            let r = Y;
            if (rt && (t = t.replace(/\\/g, ge)),
            t[0] === ge && t[1] === ge) {
                const n = t.indexOf(ge, 2);
                n === -1 ? (r = t.substring(2),
                t = ge) : (r = t.substring(2, n),
                t = t.substring(n) || ge)
            }
            return new ze("file",r,t,Y,Y)
        }
        static from(t) {
            const r = new ze(t.scheme,t.authority,t.path,t.query,t.fragment);
            return Gr(r, !0),
            r
        }
        static joinPath(t, ...r) {
            if (!t.path)
                throw new Error("[UriError]: cannot call joinPath on URI without path");
            let n;
            return rt && t.scheme === "file" ? n = Re.file(ie.join(zt(t, !0), ...r)).path : n = ae.join(t.path, ...r),
            t.with({
                path: n
            })
        }
        toString(t=!1) {
            return Gt(this, t)
        }
        toJSON() {
            return this
        }
        static revive(t) {
            if (t) {
                if (t instanceof Re)
                    return t;
                {
                    const r = new ze(t);
                    return r._formatted = t.external,
                    r._fsPath = t._sep === Jr ? t.fsPath : null,
                    r
                }
            } else
                return t
        }
    }
    const Jr = rt ? 1 : void 0;
    class ze extends Re {
        constructor() {
            super(...arguments),
            this._formatted = null,
            this._fsPath = null
        }
        get fsPath() {
            return this._fsPath || (this._fsPath = zt(this, !1)),
            this._fsPath
        }
        toString(t=!1) {
            return t ? Gt(this, !0) : (this._formatted || (this._formatted = Gt(this, !1)),
            this._formatted)
        }
        toJSON() {
            const t = {
                $mid: 1
            };
            return this._fsPath && (t.fsPath = this._fsPath,
            t._sep = Jr),
            this._formatted && (t.external = this._formatted),
            this.path && (t.path = this.path),
            this.scheme && (t.scheme = this.scheme),
            this.authority && (t.authority = this.authority),
            this.query && (t.query = this.query),
            this.fragment && (t.fragment = this.fragment),
            t
        }
    }
    const Qr = {
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
    function Xr(e, t) {
        let r, n = -1;
        for (let i = 0; i < e.length; i++) {
            const s = e.charCodeAt(i);
            if (s >= 97 && s <= 122 || s >= 65 && s <= 90 || s >= 48 && s <= 57 || s === 45 || s === 46 || s === 95 || s === 126 || t && s === 47)
                n !== -1 && (r += encodeURIComponent(e.substring(n, i)),
                n = -1),
                r !== void 0 && (r += e.charAt(i));
            else {
                r === void 0 && (r = e.substr(0, i));
                const a = Qr[s];
                a !== void 0 ? (n !== -1 && (r += encodeURIComponent(e.substring(n, i)),
                n = -1),
                r += a) : n === -1 && (n = i)
            }
        }
        return n !== -1 && (r += encodeURIComponent(e.substring(n))),
        r !== void 0 ? r : e
    }
    function ys(e) {
        let t;
        for (let r = 0; r < e.length; r++) {
            const n = e.charCodeAt(r);
            n === 35 || n === 63 ? (t === void 0 && (t = e.substr(0, r)),
            t += Qr[n]) : t !== void 0 && (t += e[r])
        }
        return t !== void 0 ? t : e
    }
    function zt(e, t) {
        let r;
        return e.authority && e.path.length > 1 && e.scheme === "file" ? r = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? r = e.path.substr(1) : r = e.path[1].toLowerCase() + e.path.substr(2) : r = e.path,
        rt && (r = r.replace(/\//g, "\\")),
        r
    }
    function Gt(e, t) {
        const r = t ? ys : Xr;
        let n = ""
          , {scheme: i, authority: s, path: a, query: o, fragment: u} = e;
        if (i && (n += i,
        n += ":"),
        (s || i === "file") && (n += ge,
        n += ge),
        s) {
            let l = s.indexOf("@");
            if (l !== -1) {
                const c = s.substr(0, l);
                s = s.substr(l + 1),
                l = c.indexOf(":"),
                l === -1 ? n += r(c, !1) : (n += r(c.substr(0, l), !1),
                n += ":",
                n += r(c.substr(l + 1), !1)),
                n += "@"
            }
            s = s.toLowerCase(),
            l = s.indexOf(":"),
            l === -1 ? n += r(s, !1) : (n += r(s.substr(0, l), !1),
            n += s.substr(l))
        }
        if (a) {
            if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
                const l = a.charCodeAt(1);
                l >= 65 && l <= 90 && (a = `/${String.fromCharCode(l + 32)}:${a.substr(3)}`)
            } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
                const l = a.charCodeAt(0);
                l >= 65 && l <= 90 && (a = `${String.fromCharCode(l + 32)}:${a.substr(2)}`)
            }
            n += r(a, !0)
        }
        return o && (n += "?",
        n += r(o, !1)),
        u && (n += "#",
        n += t ? u : Xr(u, !1)),
        n
    }
    function Zr(e) {
        try {
            return decodeURIComponent(e)
        } catch {
            return e.length > 3 ? e.substr(0, 3) + Zr(e.substr(3)) : e
        }
    }
    const Kr = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function _t(e) {
        return e.match(Kr) ? e.replace(Kr, t => Zr(t)) : e
    }
    class le {
        constructor(t, r) {
            this.lineNumber = t,
            this.column = r
        }
        with(t=this.lineNumber, r=this.column) {
            return t === this.lineNumber && r === this.column ? this : new le(t,r)
        }
        delta(t=0, r=0) {
            return this.with(this.lineNumber + t, this.column + r)
        }
        equals(t) {
            return le.equals(this, t)
        }
        static equals(t, r) {
            return !t && !r ? !0 : !!t && !!r && t.lineNumber === r.lineNumber && t.column === r.column
        }
        isBefore(t) {
            return le.isBefore(this, t)
        }
        static isBefore(t, r) {
            return t.lineNumber < r.lineNumber ? !0 : r.lineNumber < t.lineNumber ? !1 : t.column < r.column
        }
        isBeforeOrEqual(t) {
            return le.isBeforeOrEqual(this, t)
        }
        static isBeforeOrEqual(t, r) {
            return t.lineNumber < r.lineNumber ? !0 : r.lineNumber < t.lineNumber ? !1 : t.column <= r.column
        }
        static compare(t, r) {
            let n = t.lineNumber | 0
              , i = r.lineNumber | 0;
            if (n === i) {
                let s = t.column | 0
                  , a = r.column | 0;
                return s - a
            }
            return n - i
        }
        clone() {
            return new le(this.lineNumber,this.column)
        }
        toString() {
            return "(" + this.lineNumber + "," + this.column + ")"
        }
        static lift(t) {
            return new le(t.lineNumber,t.column)
        }
        static isIPosition(t) {
            return t && typeof t.lineNumber == "number" && typeof t.column == "number"
        }
    }
    class G {
        constructor(t, r, n, i) {
            t > n || t === n && r > i ? (this.startLineNumber = n,
            this.startColumn = i,
            this.endLineNumber = t,
            this.endColumn = r) : (this.startLineNumber = t,
            this.startColumn = r,
            this.endLineNumber = n,
            this.endColumn = i)
        }
        isEmpty() {
            return G.isEmpty(this)
        }
        static isEmpty(t) {
            return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn
        }
        containsPosition(t) {
            return G.containsPosition(this, t)
        }
        static containsPosition(t, r) {
            return !(r.lineNumber < t.startLineNumber || r.lineNumber > t.endLineNumber || r.lineNumber === t.startLineNumber && r.column < t.startColumn || r.lineNumber === t.endLineNumber && r.column > t.endColumn)
        }
        containsRange(t) {
            return G.containsRange(this, t)
        }
        static containsRange(t, r) {
            return !(r.startLineNumber < t.startLineNumber || r.endLineNumber < t.startLineNumber || r.startLineNumber > t.endLineNumber || r.endLineNumber > t.endLineNumber || r.startLineNumber === t.startLineNumber && r.startColumn < t.startColumn || r.endLineNumber === t.endLineNumber && r.endColumn > t.endColumn)
        }
        strictContainsRange(t) {
            return G.strictContainsRange(this, t)
        }
        static strictContainsRange(t, r) {
            return !(r.startLineNumber < t.startLineNumber || r.endLineNumber < t.startLineNumber || r.startLineNumber > t.endLineNumber || r.endLineNumber > t.endLineNumber || r.startLineNumber === t.startLineNumber && r.startColumn <= t.startColumn || r.endLineNumber === t.endLineNumber && r.endColumn >= t.endColumn)
        }
        plusRange(t) {
            return G.plusRange(this, t)
        }
        static plusRange(t, r) {
            let n, i, s, a;
            return r.startLineNumber < t.startLineNumber ? (n = r.startLineNumber,
            i = r.startColumn) : r.startLineNumber === t.startLineNumber ? (n = r.startLineNumber,
            i = Math.min(r.startColumn, t.startColumn)) : (n = t.startLineNumber,
            i = t.startColumn),
            r.endLineNumber > t.endLineNumber ? (s = r.endLineNumber,
            a = r.endColumn) : r.endLineNumber === t.endLineNumber ? (s = r.endLineNumber,
            a = Math.max(r.endColumn, t.endColumn)) : (s = t.endLineNumber,
            a = t.endColumn),
            new G(n,i,s,a)
        }
        intersectRanges(t) {
            return G.intersectRanges(this, t)
        }
        static intersectRanges(t, r) {
            let n = t.startLineNumber
              , i = t.startColumn
              , s = t.endLineNumber
              , a = t.endColumn
              , o = r.startLineNumber
              , u = r.startColumn
              , l = r.endLineNumber
              , c = r.endColumn;
            return n < o ? (n = o,
            i = u) : n === o && (i = Math.max(i, u)),
            s > l ? (s = l,
            a = c) : s === l && (a = Math.min(a, c)),
            n > s || n === s && i > a ? null : new G(n,i,s,a)
        }
        equalsRange(t) {
            return G.equalsRange(this, t)
        }
        static equalsRange(t, r) {
            return !!t && !!r && t.startLineNumber === r.startLineNumber && t.startColumn === r.startColumn && t.endLineNumber === r.endLineNumber && t.endColumn === r.endColumn
        }
        getEndPosition() {
            return G.getEndPosition(this)
        }
        static getEndPosition(t) {
            return new le(t.endLineNumber,t.endColumn)
        }
        getStartPosition() {
            return G.getStartPosition(this)
        }
        static getStartPosition(t) {
            return new le(t.startLineNumber,t.startColumn)
        }
        toString() {
            return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]"
        }
        setEndPosition(t, r) {
            return new G(this.startLineNumber,this.startColumn,t,r)
        }
        setStartPosition(t, r) {
            return new G(t,r,this.endLineNumber,this.endColumn)
        }
        collapseToStart() {
            return G.collapseToStart(this)
        }
        static collapseToStart(t) {
            return new G(t.startLineNumber,t.startColumn,t.startLineNumber,t.startColumn)
        }
        static fromPositions(t, r=t) {
            return new G(t.lineNumber,t.column,r.lineNumber,r.column)
        }
        static lift(t) {
            return t ? new G(t.startLineNumber,t.startColumn,t.endLineNumber,t.endColumn) : null
        }
        static isIRange(t) {
            return t && typeof t.startLineNumber == "number" && typeof t.startColumn == "number" && typeof t.endLineNumber == "number" && typeof t.endColumn == "number"
        }
        static areIntersectingOrTouching(t, r) {
            return !(t.endLineNumber < r.startLineNumber || t.endLineNumber === r.startLineNumber && t.endColumn < r.startColumn || r.endLineNumber < t.startLineNumber || r.endLineNumber === t.startLineNumber && r.endColumn < t.startColumn)
        }
        static areIntersecting(t, r) {
            return !(t.endLineNumber < r.startLineNumber || t.endLineNumber === r.startLineNumber && t.endColumn <= r.startColumn || r.endLineNumber < t.startLineNumber || r.endLineNumber === t.startLineNumber && r.endColumn <= t.startColumn)
        }
        static compareRangesUsingStarts(t, r) {
            if (t && r) {
                const s = t.startLineNumber | 0
                  , a = r.startLineNumber | 0;
                if (s === a) {
                    const o = t.startColumn | 0
                      , u = r.startColumn | 0;
                    if (o === u) {
                        const l = t.endLineNumber | 0
                          , c = r.endLineNumber | 0;
                        if (l === c) {
                            const f = t.endColumn | 0
                              , h = r.endColumn | 0;
                            return f - h
                        }
                        return l - c
                    }
                    return o - u
                }
                return s - a
            }
            return (t ? 1 : 0) - (r ? 1 : 0)
        }
        static compareRangesUsingEnds(t, r) {
            return t.endLineNumber === r.endLineNumber ? t.endColumn === r.endColumn ? t.startLineNumber === r.startLineNumber ? t.startColumn - r.startColumn : t.startLineNumber - r.startLineNumber : t.endColumn - r.endColumn : t.endLineNumber - r.endLineNumber
        }
        static spansMultipleLines(t) {
            return t.endLineNumber > t.startLineNumber
        }
    }
    const Ss = 3;
    function en(e, t, r, n) {
        return new Ce(e,t,r).ComputeDiff(n)
    }
    class tn {
        constructor(t) {
            const r = []
              , n = [];
            for (let i = 0, s = t.length; i < s; i++)
                r[i] = Jt(t[i], 1),
                n[i] = Qt(t[i], 1);
            this.lines = t,
            this._startColumns = r,
            this._endColumns = n
        }
        getElements() {
            const t = [];
            for (let r = 0, n = this.lines.length; r < n; r++)
                t[r] = this.lines[r].substring(this._startColumns[r] - 1, this._endColumns[r] - 1);
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
        createCharSequence(t, r, n) {
            const i = []
              , s = []
              , a = [];
            let o = 0;
            for (let u = r; u <= n; u++) {
                const l = this.lines[u]
                  , c = t ? this._startColumns[u] : 1
                  , f = t ? this._endColumns[u] : l.length + 1;
                for (let h = c; h < f; h++)
                    i[o] = l.charCodeAt(h - 1),
                    s[o] = u + 1,
                    a[o] = h,
                    o++
            }
            return new _s(i,s,a)
        }
    }
    class _s {
        constructor(t, r, n) {
            this._charCodes = t,
            this._lineNumbers = r,
            this._columns = n
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
    class nt {
        constructor(t, r, n, i, s, a, o, u) {
            this.originalStartLineNumber = t,
            this.originalStartColumn = r,
            this.originalEndLineNumber = n,
            this.originalEndColumn = i,
            this.modifiedStartLineNumber = s,
            this.modifiedStartColumn = a,
            this.modifiedEndLineNumber = o,
            this.modifiedEndColumn = u
        }
        static createFromDiffChange(t, r, n) {
            let i, s, a, o, u, l, c, f;
            return t.originalLength === 0 ? (i = 0,
            s = 0,
            a = 0,
            o = 0) : (i = r.getStartLineNumber(t.originalStart),
            s = r.getStartColumn(t.originalStart),
            a = r.getEndLineNumber(t.originalStart + t.originalLength - 1),
            o = r.getEndColumn(t.originalStart + t.originalLength - 1)),
            t.modifiedLength === 0 ? (u = 0,
            l = 0,
            c = 0,
            f = 0) : (u = n.getStartLineNumber(t.modifiedStart),
            l = n.getStartColumn(t.modifiedStart),
            c = n.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1),
            f = n.getEndColumn(t.modifiedStart + t.modifiedLength - 1)),
            new nt(i,s,a,o,u,l,c,f)
        }
    }
    function As(e) {
        if (e.length <= 1)
            return e;
        const t = [e[0]];
        let r = t[0];
        for (let n = 1, i = e.length; n < i; n++) {
            const s = e[n]
              , a = s.originalStart - (r.originalStart + r.originalLength)
              , o = s.modifiedStart - (r.modifiedStart + r.modifiedLength);
            Math.min(a, o) < Ss ? (r.originalLength = s.originalStart + s.originalLength - r.originalStart,
            r.modifiedLength = s.modifiedStart + s.modifiedLength - r.modifiedStart) : (t.push(s),
            r = s)
        }
        return t
    }
    class it {
        constructor(t, r, n, i, s) {
            this.originalStartLineNumber = t,
            this.originalEndLineNumber = r,
            this.modifiedStartLineNumber = n,
            this.modifiedEndLineNumber = i,
            this.charChanges = s
        }
        static createFromDiffResult(t, r, n, i, s, a, o) {
            let u, l, c, f, h;
            if (r.originalLength === 0 ? (u = n.getStartLineNumber(r.originalStart) - 1,
            l = 0) : (u = n.getStartLineNumber(r.originalStart),
            l = n.getEndLineNumber(r.originalStart + r.originalLength - 1)),
            r.modifiedLength === 0 ? (c = i.getStartLineNumber(r.modifiedStart) - 1,
            f = 0) : (c = i.getStartLineNumber(r.modifiedStart),
            f = i.getEndLineNumber(r.modifiedStart + r.modifiedLength - 1)),
            a && r.originalLength > 0 && r.originalLength < 20 && r.modifiedLength > 0 && r.modifiedLength < 20 && s()) {
                const d = n.createCharSequence(t, r.originalStart, r.originalStart + r.originalLength - 1)
                  , m = i.createCharSequence(t, r.modifiedStart, r.modifiedStart + r.modifiedLength - 1);
                let v = en(d, m, s, !0).changes;
                o && (v = As(v)),
                h = [];
                for (let b = 0, N = v.length; b < N; b++)
                    h.push(nt.createFromDiffChange(v[b], d, m))
            }
            return new it(u,l,c,f,h)
        }
    }
    class ws {
        constructor(t, r, n) {
            this.shouldComputeCharChanges = n.shouldComputeCharChanges,
            this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges,
            this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace,
            this.shouldMakePrettyDiff = n.shouldMakePrettyDiff,
            this.originalLines = t,
            this.modifiedLines = r,
            this.original = new tn(t),
            this.modified = new tn(r),
            this.continueLineDiff = rn(n.maxComputationTime),
            this.continueCharDiff = rn(n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3))
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
            const t = en(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff)
              , r = t.changes
              , n = t.quitEarly;
            if (this.shouldIgnoreTrimWhitespace) {
                const o = [];
                for (let u = 0, l = r.length; u < l; u++)
                    o.push(it.createFromDiffResult(this.shouldIgnoreTrimWhitespace, r[u], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                return {
                    quitEarly: n,
                    changes: o
                }
            }
            const i = [];
            let s = 0
              , a = 0;
            for (let o = -1, u = r.length; o < u; o++) {
                const l = o + 1 < u ? r[o + 1] : null
                  , c = l ? l.originalStart : this.originalLines.length
                  , f = l ? l.modifiedStart : this.modifiedLines.length;
                for (; s < c && a < f; ) {
                    const h = this.originalLines[s]
                      , d = this.modifiedLines[a];
                    if (h !== d) {
                        {
                            let m = Jt(h, 1)
                              , v = Jt(d, 1);
                            for (; m > 1 && v > 1; ) {
                                const b = h.charCodeAt(m - 2)
                                  , N = d.charCodeAt(v - 2);
                                if (b !== N)
                                    break;
                                m--,
                                v--
                            }
                            (m > 1 || v > 1) && this._pushTrimWhitespaceCharChange(i, s + 1, 1, m, a + 1, 1, v)
                        }
                        {
                            let m = Qt(h, 1)
                              , v = Qt(d, 1);
                            const b = h.length + 1
                              , N = d.length + 1;
                            for (; m < b && v < N; ) {
                                const p = h.charCodeAt(m - 1)
                                  , g = h.charCodeAt(v - 1);
                                if (p !== g)
                                    break;
                                m++,
                                v++
                            }
                            (m < b || v < N) && this._pushTrimWhitespaceCharChange(i, s + 1, m, b, a + 1, v, N)
                        }
                    }
                    s++,
                    a++
                }
                l && (i.push(it.createFromDiffResult(this.shouldIgnoreTrimWhitespace, l, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)),
                s += l.originalLength,
                a += l.modifiedLength)
            }
            return {
                quitEarly: n,
                changes: i
            }
        }
        _pushTrimWhitespaceCharChange(t, r, n, i, s, a, o) {
            if (this._mergeTrimWhitespaceCharChange(t, r, n, i, s, a, o))
                return;
            let u;
            this.shouldComputeCharChanges && (u = [new nt(r,n,r,i,s,a,s,o)]),
            t.push(new it(r,r,s,s,u))
        }
        _mergeTrimWhitespaceCharChange(t, r, n, i, s, a, o) {
            const u = t.length;
            if (u === 0)
                return !1;
            const l = t[u - 1];
            return l.originalEndLineNumber === 0 || l.modifiedEndLineNumber === 0 ? !1 : l.originalEndLineNumber + 1 === r && l.modifiedEndLineNumber + 1 === s ? (l.originalEndLineNumber = r,
            l.modifiedEndLineNumber = s,
            this.shouldComputeCharChanges && l.charChanges && l.charChanges.push(new nt(r,n,r,i,s,a,s,o)),
            !0) : !1
        }
    }
    function Jt(e, t) {
        const r = ns(e);
        return r === -1 ? t : r + 1
    }
    function Qt(e, t) {
        const r = is(e);
        return r === -1 ? t : r + 2
    }
    function rn(e) {
        if (e === 0)
            return () => !0;
        const t = Date.now();
        return () => Date.now() - t < e
    }
    function nn(e) {
        return e < 0 ? 0 : e > 255 ? 255 : e | 0
    }
    function Ge(e) {
        return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0
    }
    class Ns {
        constructor(t, r) {
            this._prefixSumIndexOfResultBrand = void 0,
            this.index = t,
            this.remainder = r
        }
    }
    class Ls {
        constructor(t) {
            this.values = t,
            this.prefixSum = new Uint32Array(t.length),
            this.prefixSumValidIndex = new Int32Array(1),
            this.prefixSumValidIndex[0] = -1
        }
        insertValues(t, r) {
            t = Ge(t);
            const n = this.values
              , i = this.prefixSum
              , s = r.length;
            return s === 0 ? !1 : (this.values = new Uint32Array(n.length + s),
            this.values.set(n.subarray(0, t), 0),
            this.values.set(n.subarray(t), t + s),
            this.values.set(r, t),
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            this.prefixSum = new Uint32Array(this.values.length),
            this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
            !0)
        }
        changeValue(t, r) {
            return t = Ge(t),
            r = Ge(r),
            this.values[t] === r ? !1 : (this.values[t] = r,
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            !0)
        }
        removeValues(t, r) {
            t = Ge(t),
            r = Ge(r);
            const n = this.values
              , i = this.prefixSum;
            if (t >= n.length)
                return !1;
            let s = n.length - t;
            return r >= s && (r = s),
            r === 0 ? !1 : (this.values = new Uint32Array(n.length - r),
            this.values.set(n.subarray(0, t), 0),
            this.values.set(n.subarray(t + r), t),
            this.prefixSum = new Uint32Array(this.values.length),
            t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
            this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
            !0)
        }
        getTotalSum() {
            return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1)
        }
        getPrefixSum(t) {
            return t < 0 ? 0 : (t = Ge(t),
            this._getPrefixSum(t))
        }
        _getPrefixSum(t) {
            if (t <= this.prefixSumValidIndex[0])
                return this.prefixSum[t];
            let r = this.prefixSumValidIndex[0] + 1;
            r === 0 && (this.prefixSum[0] = this.values[0],
            r++),
            t >= this.values.length && (t = this.values.length - 1);
            for (let n = r; n <= t; n++)
                this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
            return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t),
            this.prefixSum[t]
        }
        getIndexOf(t) {
            t = Math.floor(t),
            this.getTotalSum();
            let r = 0
              , n = this.values.length - 1
              , i = 0
              , s = 0
              , a = 0;
            for (; r <= n; )
                if (i = r + (n - r) / 2 | 0,
                s = this.prefixSum[i],
                a = s - this.values[i],
                t < a)
                    n = i - 1;
                else if (t >= s)
                    r = i + 1;
                else
                    break;
            return new Ns(i,t - a)
        }
    }
    class Cs {
        constructor(t, r, n, i) {
            this._uri = t,
            this._lines = r,
            this._eol = n,
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
            const r = t.changes;
            for (const n of r)
                this._acceptDeleteRange(n.range),
                this._acceptInsertText(new le(n.range.startLineNumber,n.range.startColumn), n.text);
            this._versionId = t.versionId,
            this._cachedTextValue = null
        }
        _ensureLineStarts() {
            if (!this._lineStarts) {
                const t = this._eol.length
                  , r = this._lines.length
                  , n = new Uint32Array(r);
                for (let i = 0; i < r; i++)
                    n[i] = this._lines[i].length + t;
                this._lineStarts = new Ls(n)
            }
        }
        _setLineText(t, r) {
            this._lines[t] = r,
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
        _acceptInsertText(t, r) {
            if (r.length === 0)
                return;
            let n = rs(r);
            if (n.length === 1) {
                this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + n[0] + this._lines[t.lineNumber - 1].substring(t.column - 1));
                return
            }
            n[n.length - 1] += this._lines[t.lineNumber - 1].substring(t.column - 1),
            this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + n[0]);
            let i = new Uint32Array(n.length - 1);
            for (let s = 1; s < n.length; s++)
                this._lines.splice(t.lineNumber + s - 1, 0, n[s]),
                i[s - 1] = n[s].length + this._eol.length;
            this._lineStarts && this._lineStarts.insertValues(t.lineNumber, i)
        }
    }
    const xs = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
    function ks(e="") {
        let t = "(-?\\d*\\.\\d\\w*)|([^";
        for (const r of xs)
            e.indexOf(r) >= 0 || (t += "\\" + r);
        return t += "\\s]+)",
        new RegExp(t,"g")
    }
    const Ts = ks();
    function Ps(e) {
        let t = Ts;
        if (e && e instanceof RegExp)
            if (e.global)
                t = e;
            else {
                let r = "g";
                e.ignoreCase && (r += "i"),
                e.multiline && (r += "m"),
                e.unicode && (r += "u"),
                t = new RegExp(e.source,r)
            }
        return t.lastIndex = 0,
        t
    }
    const Ms = {
        maxLen: 1e3,
        windowSize: 15,
        timeBudget: 150
    };
    function sn(e, t, r, n, i=Ms) {
        if (r.length > i.maxLen) {
            let l = e - i.maxLen / 2;
            return l < 0 ? l = 0 : n += l,
            r = r.substring(l, e + i.maxLen / 2),
            sn(e, t, r, n, i)
        }
        const s = Date.now()
          , a = e - 1 - n;
        let o = -1
          , u = null;
        for (let l = 1; !(Date.now() - s >= i.timeBudget); l++) {
            const c = a - i.windowSize * l;
            t.lastIndex = Math.max(0, c);
            const f = Es(t, r, a, o);
            if (!f && u || (u = f,
            c <= 0))
                break;
            o = c
        }
        if (u) {
            let l = {
                word: u[0],
                startColumn: n + 1 + u.index,
                endColumn: n + 1 + u.index + u[0].length
            };
            return t.lastIndex = 0,
            l
        }
        return null
    }
    function Es(e, t, r, n) {
        let i;
        for (; i = e.exec(t); ) {
            const s = i.index || 0;
            if (s <= r && e.lastIndex >= r)
                return i;
            if (n > 0 && s > n)
                return null
        }
        return null
    }
    class Xt {
        constructor(t) {
            let r = nn(t);
            this._defaultValue = r,
            this._asciiMap = Xt._createAsciiMap(r),
            this._map = new Map
        }
        static _createAsciiMap(t) {
            let r = new Uint8Array(256);
            for (let n = 0; n < 256; n++)
                r[n] = t;
            return r
        }
        set(t, r) {
            let n = nn(r);
            t >= 0 && t < 256 ? this._asciiMap[t] = n : this._map.set(t, n)
        }
        get(t) {
            return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue
        }
    }
    class Is {
        constructor(t, r, n) {
            const i = new Uint8Array(t * r);
            for (let s = 0, a = t * r; s < a; s++)
                i[s] = n;
            this._data = i,
            this.rows = t,
            this.cols = r
        }
        get(t, r) {
            return this._data[t * this.cols + r]
        }
        set(t, r, n) {
            this._data[t * this.cols + r] = n
        }
    }
    class Fs {
        constructor(t) {
            let r = 0
              , n = 0;
            for (let s = 0, a = t.length; s < a; s++) {
                let[o,u,l] = t[s];
                u > r && (r = u),
                o > n && (n = o),
                l > n && (n = l)
            }
            r++,
            n++;
            let i = new Is(n,r,0);
            for (let s = 0, a = t.length; s < a; s++) {
                let[o,u,l] = t[s];
                i.set(o, u, l)
            }
            this._states = i,
            this._maxCharCode = r
        }
        nextState(t, r) {
            return r < 0 || r >= this._maxCharCode ? 0 : this._states.get(t, r)
        }
    }
    let Zt = null;
    function Ds() {
        return Zt === null && (Zt = new Fs([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])),
        Zt
    }
    let st = null;
    function js() {
        if (st === null) {
            st = new Xt(0);
            const e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`;
            for (let r = 0; r < e.length; r++)
                st.set(e.charCodeAt(r), 1);
            const t = ".,;";
            for (let r = 0; r < t.length; r++)
                st.set(t.charCodeAt(r), 2)
        }
        return st
    }
    class At {
        static _createLink(t, r, n, i, s) {
            let a = s - 1;
            do {
                const o = r.charCodeAt(a);
                if (t.get(o) !== 2)
                    break;
                a--
            } while (a > i);
            if (i > 0) {
                const o = r.charCodeAt(i - 1)
                  , u = r.charCodeAt(a);
                (o === 40 && u === 41 || o === 91 && u === 93 || o === 123 && u === 125) && a--
            }
            return {
                range: {
                    startLineNumber: n,
                    startColumn: i + 1,
                    endLineNumber: n,
                    endColumn: a + 2
                },
                url: r.substring(i, a + 1)
            }
        }
        static computeLinks(t, r=Ds()) {
            const n = js();
            let i = [];
            for (let s = 1, a = t.getLineCount(); s <= a; s++) {
                const o = t.getLineContent(s)
                  , u = o.length;
                let l = 0
                  , c = 0
                  , f = 0
                  , h = 1
                  , d = !1
                  , m = !1
                  , v = !1
                  , b = !1;
                for (; l < u; ) {
                    let N = !1;
                    const p = o.charCodeAt(l);
                    if (h === 13) {
                        let g;
                        switch (p) {
                        case 40:
                            d = !0,
                            g = 0;
                            break;
                        case 41:
                            g = d ? 0 : 1;
                            break;
                        case 91:
                            v = !0,
                            m = !0,
                            g = 0;
                            break;
                        case 93:
                            v = !1,
                            g = m ? 0 : 1;
                            break;
                        case 123:
                            b = !0,
                            g = 0;
                            break;
                        case 125:
                            g = b ? 0 : 1;
                            break;
                        case 39:
                            g = f === 34 || f === 96 ? 0 : 1;
                            break;
                        case 34:
                            g = f === 39 || f === 96 ? 0 : 1;
                            break;
                        case 96:
                            g = f === 39 || f === 34 ? 0 : 1;
                            break;
                        case 42:
                            g = f === 42 ? 1 : 0;
                            break;
                        case 124:
                            g = f === 124 ? 1 : 0;
                            break;
                        case 32:
                            g = v ? 0 : 1;
                            break;
                        default:
                            g = n.get(p)
                        }
                        g === 1 && (i.push(At._createLink(n, o, s, c, l)),
                        N = !0)
                    } else if (h === 12) {
                        let g;
                        p === 91 ? (m = !0,
                        g = 0) : g = n.get(p),
                        g === 1 ? N = !0 : h = 13
                    } else
                        h = r.nextState(h, p),
                        h === 0 && (N = !0);
                    N && (h = 1,
                    d = !1,
                    m = !1,
                    b = !1,
                    c = l + 1,
                    f = p),
                    l++
                }
                h === 13 && i.push(At._createLink(n, o, s, c, u))
            }
            return i
        }
    }
    function Us(e) {
        return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : At.computeLinks(e)
    }
    class Kt {
        constructor() {
            this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]]
        }
        navigateValueSet(t, r, n, i, s) {
            if (t && r) {
                let a = this.doNavigateValueSet(r, s);
                if (a)
                    return {
                        range: t,
                        value: a
                    }
            }
            if (n && i) {
                let a = this.doNavigateValueSet(i, s);
                if (a)
                    return {
                        range: n,
                        value: a
                    }
            }
            return null
        }
        doNavigateValueSet(t, r) {
            let n = this.numberReplace(t, r);
            return n !== null ? n : this.textReplace(t, r)
        }
        numberReplace(t, r) {
            let n = Math.pow(10, t.length - (t.lastIndexOf(".") + 1))
              , i = Number(t)
              , s = parseFloat(t);
            return !isNaN(i) && !isNaN(s) && i === s ? i === 0 && !r ? null : (i = Math.floor(i * n),
            i += r ? n : -n,
            String(i / n)) : null
        }
        textReplace(t, r) {
            return this.valueSetsReplace(this._defaultValueSet, t, r)
        }
        valueSetsReplace(t, r, n) {
            let i = null;
            for (let s = 0, a = t.length; i === null && s < a; s++)
                i = this.valueSetReplace(t[s], r, n);
            return i
        }
        valueSetReplace(t, r, n) {
            let i = t.indexOf(r);
            return i >= 0 ? (i += n ? 1 : -1,
            i < 0 ? i = t.length - 1 : i %= t.length,
            t[i]) : null
        }
    }
    Kt.INSTANCE = new Kt;
    class H {
        constructor(t) {
            this.element = t,
            this.next = H.Undefined,
            this.prev = H.Undefined
        }
    }
    H.Undefined = new H(void 0);
    class an {
        constructor() {
            this._first = H.Undefined,
            this._last = H.Undefined,
            this._size = 0
        }
        get size() {
            return this._size
        }
        isEmpty() {
            return this._first === H.Undefined
        }
        clear() {
            let t = this._first;
            for (; t !== H.Undefined; ) {
                const r = t.next;
                t.prev = H.Undefined,
                t.next = H.Undefined,
                t = r
            }
            this._first = H.Undefined,
            this._last = H.Undefined,
            this._size = 0
        }
        unshift(t) {
            return this._insert(t, !1)
        }
        push(t) {
            return this._insert(t, !0)
        }
        _insert(t, r) {
            const n = new H(t);
            if (this._first === H.Undefined)
                this._first = n,
                this._last = n;
            else if (r) {
                const s = this._last;
                this._last = n,
                n.prev = s,
                s.next = n
            } else {
                const s = this._first;
                this._first = n,
                n.next = s,
                s.prev = n
            }
            this._size += 1;
            let i = !1;
            return () => {
                i || (i = !0,
                this._remove(n))
            }
        }
        shift() {
            if (this._first !== H.Undefined) {
                const t = this._first.element;
                return this._remove(this._first),
                t
            }
        }
        pop() {
            if (this._last !== H.Undefined) {
                const t = this._last.element;
                return this._remove(this._last),
                t
            }
        }
        _remove(t) {
            if (t.prev !== H.Undefined && t.next !== H.Undefined) {
                const r = t.prev;
                r.next = t.next,
                t.next.prev = r
            } else
                t.prev === H.Undefined && t.next === H.Undefined ? (this._first = H.Undefined,
                this._last = H.Undefined) : t.next === H.Undefined ? (this._last = this._last.prev,
                this._last.next = H.Undefined) : t.prev === H.Undefined && (this._first = this._first.next,
                this._first.prev = H.Undefined);
            this._size -= 1
        }
        *[Symbol.iterator]() {
            let t = this._first;
            for (; t !== H.Undefined; )
                yield t.element,
                t = t.next
        }
    }
    const Rs = ee.performance && typeof ee.performance.now == "function";
    class wt {
        constructor(t) {
            this._highResolution = Rs && t,
            this._startTime = this._now(),
            this._stopTime = -1
        }
        static create(t=!0) {
            return new wt(t)
        }
        stop() {
            this._stopTime = this._now()
        }
        elapsed() {
            return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime
        }
        _now() {
            return this._highResolution ? ee.performance.now() : Date.now()
        }
    }
    var er;
    (function(e) {
        e.None = () => Vr.None;
        function t(p) {
            return (g, _=null, L) => {
                let S = !1, A;
                return A = p(w => {
                    if (!S)
                        return A ? A.dispose() : S = !0,
                        g.call(_, w)
                }
                , null, L),
                S && A.dispose(),
                A
            }
        }
        e.once = t;
        function r(p, g) {
            return u( (_, L=null, S) => p(A => _.call(L, g(A)), null, S))
        }
        e.map = r;
        function n(p, g) {
            return u( (_, L=null, S) => p(A => {
                g(A),
                _.call(L, A)
            }
            , null, S))
        }
        e.forEach = n;
        function i(p, g) {
            return u( (_, L=null, S) => p(A => g(A) && _.call(L, A), null, S))
        }
        e.filter = i;
        function s(p) {
            return p
        }
        e.signal = s;
        function a(...p) {
            return (g, _=null, L) => Gi(...p.map(S => S(A => g.call(_, A), null, L)))
        }
        e.any = a;
        function o(p, g, _) {
            let L = _;
            return r(p, S => (L = g(L, S),
            L))
        }
        e.reduce = o;
        function u(p) {
            let g;
            const _ = new Oe({
                onFirstListenerAdd() {
                    g = p(_.fire, _)
                },
                onLastListenerRemove() {
                    g.dispose()
                }
            });
            return _.event
        }
        function l(p, g, _=100, L=!1, S) {
            let A, w, y, T = 0;
            const M = new Oe({
                leakWarningThreshold: S,
                onFirstListenerAdd() {
                    A = p(k => {
                        T++,
                        w = g(w, k),
                        L && !y && (M.fire(w),
                        w = void 0),
                        clearTimeout(y),
                        y = setTimeout( () => {
                            const F = w;
                            w = void 0,
                            y = void 0,
                            (!L || T > 1) && M.fire(F),
                            T = 0
                        }
                        , _)
                    }
                    )
                },
                onLastListenerRemove() {
                    A.dispose()
                }
            });
            return M.event
        }
        e.debounce = l;
        function c(p, g= (_, L) => _ === L) {
            let _ = !0, L;
            return i(p, S => {
                const A = _ || !g(S, L);
                return _ = !1,
                L = S,
                A
            }
            )
        }
        e.latch = c;
        function f(p, g) {
            return [e.filter(p, g), e.filter(p, _ => !g(_))]
        }
        e.split = f;
        function h(p, g=!1, _=[]) {
            let L = _.slice()
              , S = p(y => {
                L ? L.push(y) : w.fire(y)
            }
            );
            const A = () => {
                L && L.forEach(y => w.fire(y)),
                L = null
            }
              , w = new Oe({
                onFirstListenerAdd() {
                    S || (S = p(y => w.fire(y)))
                },
                onFirstListenerDidAdd() {
                    L && (g ? setTimeout(A) : A())
                },
                onLastListenerRemove() {
                    S && S.dispose(),
                    S = null
                }
            });
            return w.event
        }
        e.buffer = h;
        class d {
            constructor(g) {
                this.event = g
            }
            map(g) {
                return new d(r(this.event, g))
            }
            forEach(g) {
                return new d(n(this.event, g))
            }
            filter(g) {
                return new d(i(this.event, g))
            }
            reduce(g, _) {
                return new d(o(this.event, g, _))
            }
            latch() {
                return new d(c(this.event))
            }
            debounce(g, _=100, L=!1, S) {
                return new d(l(this.event, g, _, L, S))
            }
            on(g, _, L) {
                return this.event(g, _, L)
            }
            once(g, _, L) {
                return t(this.event)(g, _, L)
            }
        }
        function m(p) {
            return new d(p)
        }
        e.chain = m;
        function v(p, g, _=L => L) {
            const L = (...y) => w.fire(_(...y))
              , S = () => p.on(g, L)
              , A = () => p.removeListener(g, L)
              , w = new Oe({
                onFirstListenerAdd: S,
                onLastListenerRemove: A
            });
            return w.event
        }
        e.fromNodeEventEmitter = v;
        function b(p, g, _=L => L) {
            const L = (...y) => w.fire(_(...y))
              , S = () => p.addEventListener(g, L)
              , A = () => p.removeEventListener(g, L)
              , w = new Oe({
                onFirstListenerAdd: S,
                onLastListenerRemove: A
            });
            return w.event
        }
        e.fromDOMEventEmitter = b;
        function N(p) {
            return new Promise(g => t(p)(g))
        }
        e.toPromise = N
    }
    )(er || (er = {}));
    class Nt {
        constructor(t) {
            this._listenerCount = 0,
            this._invocationCount = 0,
            this._elapsedOverall = 0,
            this._name = `${t}_${Nt._idPool++}`
        }
        start(t) {
            this._stopWatch = new wt(!0),
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
    Nt._idPool = 0;
    class Oe {
        constructor(t) {
            var r;
            this._disposed = !1,
            this._options = t,
            this._leakageMon = void 0,
            this._perfMon = !((r = this._options) === null || r === void 0) && r._profName ? new Nt(this._options._profName) : void 0
        }
        get event() {
            return this._event || (this._event = (t, r, n) => {
                var i;
                this._listeners || (this._listeners = new an);
                const s = this._listeners.isEmpty();
                s && this._options && this._options.onFirstListenerAdd && this._options.onFirstListenerAdd(this);
                const a = this._listeners.push(r ? [t, r] : t);
                s && this._options && this._options.onFirstListenerDidAdd && this._options.onFirstListenerDidAdd(this),
                this._options && this._options.onListenerDidAdd && this._options.onListenerDidAdd(this, t, r);
                const o = (i = this._leakageMon) === null || i === void 0 ? void 0 : i.check(this._listeners.size)
                  , u = Or( () => {
                    o && o(),
                    this._disposed || (a(),
                    this._options && this._options.onLastListenerRemove && (this._listeners && !this._listeners.isEmpty() || this._options.onLastListenerRemove(this)))
                }
                );
                return n instanceof tt ? n.add(u) : Array.isArray(n) && n.push(u),
                u
            }
            ),
            this._event
        }
        fire(t) {
            var r, n;
            if (this._listeners) {
                this._deliveryQueue || (this._deliveryQueue = new an);
                for (let i of this._listeners)
                    this._deliveryQueue.push([i, t]);
                for ((r = this._perfMon) === null || r === void 0 || r.start(this._deliveryQueue.size); this._deliveryQueue.size > 0; ) {
                    const [i,s] = this._deliveryQueue.shift();
                    try {
                        typeof i == "function" ? i.call(void 0, s) : i[0].call(i[1], s)
                    } catch (a) {
                        Hi(a)
                    }
                }
                (n = this._perfMon) === null || n === void 0 || n.stop()
            }
        }
        dispose() {
            var t, r, n, i, s;
            this._disposed || (this._disposed = !0,
            (t = this._listeners) === null || t === void 0 || t.clear(),
            (r = this._deliveryQueue) === null || r === void 0 || r.clear(),
            (i = (n = this._options) === null || n === void 0 ? void 0 : n.onLastListenerRemove) === null || i === void 0 || i.call(n),
            (s = this._leakageMon) === null || s === void 0 || s.dispose())
        }
    }
    const on = Object.freeze(function(e, t) {
        const r = setTimeout(e.bind(t), 0);
        return {
            dispose() {
                clearTimeout(r)
            }
        }
    });
    var Lt;
    (function(e) {
        function t(r) {
            return r === e.None || r === e.Cancelled || r instanceof Ct ? !0 : !r || typeof r != "object" ? !1 : typeof r.isCancellationRequested == "boolean" && typeof r.onCancellationRequested == "function"
        }
        e.isCancellationToken = t,
        e.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: er.None
        }),
        e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: on
        })
    }
    )(Lt || (Lt = {}));
    class Ct {
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
            return this._isCancelled ? on : (this._emitter || (this._emitter = new Oe),
            this._emitter.event)
        }
        dispose() {
            this._emitter && (this._emitter.dispose(),
            this._emitter = null)
        }
    }
    class Os {
        constructor(t) {
            this._token = void 0,
            this._parentListener = void 0,
            this._parentListener = t && t.onCancellationRequested(this.cancel, this)
        }
        get token() {
            return this._token || (this._token = new Ct),
            this._token
        }
        cancel() {
            this._token ? this._token instanceof Ct && this._token.cancel() : this._token = Lt.Cancelled
        }
        dispose(t=!1) {
            t && this.cancel(),
            this._parentListener && this._parentListener.dispose(),
            this._token ? this._token instanceof Ct && this._token.dispose() : this._token = Lt.None
        }
    }
    class tr {
        constructor() {
            this._keyCodeToStr = [],
            this._strToKeyCode = Object.create(null)
        }
        define(t, r) {
            this._keyCodeToStr[t] = r,
            this._strToKeyCode[r.toLowerCase()] = t
        }
        keyCodeToStr(t) {
            return this._keyCodeToStr[t]
        }
        strToKeyCode(t) {
            return this._strToKeyCode[t.toLowerCase()] || 0
        }
    }
    const rr = new tr
      , nr = new tr
      , ir = new tr;
    (function() {
        function e(t, r, n=r, i=n) {
            rr.define(t, r),
            nr.define(t, n),
            ir.define(t, i)
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
    var un;
    (function(e) {
        function t(a) {
            return rr.keyCodeToStr(a)
        }
        e.toString = t;
        function r(a) {
            return rr.strToKeyCode(a)
        }
        e.fromString = r;
        function n(a) {
            return nr.keyCodeToStr(a)
        }
        e.toUserSettingsUS = n;
        function i(a) {
            return ir.keyCodeToStr(a)
        }
        e.toUserSettingsGeneral = i;
        function s(a) {
            return nr.strToKeyCode(a) || ir.strToKeyCode(a)
        }
        e.fromUserSettings = s
    }
    )(un || (un = {}));
    function Vs(e, t) {
        const r = (t & 65535) << 16 >>> 0;
        return (e | r) >>> 0
    }
    class me extends G {
        constructor(t, r, n, i) {
            super(t, r, n, i),
            this.selectionStartLineNumber = t,
            this.selectionStartColumn = r,
            this.positionLineNumber = n,
            this.positionColumn = i
        }
        toString() {
            return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]"
        }
        equalsSelection(t) {
            return me.selectionsEqual(this, t)
        }
        static selectionsEqual(t, r) {
            return t.selectionStartLineNumber === r.selectionStartLineNumber && t.selectionStartColumn === r.selectionStartColumn && t.positionLineNumber === r.positionLineNumber && t.positionColumn === r.positionColumn
        }
        getDirection() {
            return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1
        }
        setEndPosition(t, r) {
            return this.getDirection() === 0 ? new me(this.startLineNumber,this.startColumn,t,r) : new me(t,r,this.startLineNumber,this.startColumn)
        }
        getPosition() {
            return new le(this.positionLineNumber,this.positionColumn)
        }
        setStartPosition(t, r) {
            return this.getDirection() === 0 ? new me(t,r,this.endLineNumber,this.endColumn) : new me(this.endLineNumber,this.endColumn,t,r)
        }
        static fromPositions(t, r=t) {
            return new me(t.lineNumber,t.column,r.lineNumber,r.column)
        }
        static liftSelection(t) {
            return new me(t.selectionStartLineNumber,t.selectionStartColumn,t.positionLineNumber,t.positionColumn)
        }
        static selectionsArrEqual(t, r) {
            if (t && !r || !t && r)
                return !1;
            if (!t && !r)
                return !0;
            if (t.length !== r.length)
                return !1;
            for (let n = 0, i = t.length; n < i; n++)
                if (!this.selectionsEqual(t[n], r[n]))
                    return !1;
            return !0
        }
        static isISelection(t) {
            return t && typeof t.selectionStartLineNumber == "number" && typeof t.selectionStartColumn == "number" && typeof t.positionLineNumber == "number" && typeof t.positionColumn == "number"
        }
        static createWithDirection(t, r, n, i, s) {
            return s === 0 ? new me(t,r,n,i) : new me(n,i,t,r)
        }
    }
    class $s {
        constructor(t, r, n) {
            this._tokenBrand = void 0,
            this.offset = t | 0,
            this.type = r,
            this.language = n
        }
        toString() {
            return "(" + this.offset + ", " + this.type + ")"
        }
    }
    var ln;
    (function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.Disabled = 1] = "Disabled",
        e[e.Enabled = 2] = "Enabled"
    }
    )(ln || (ln = {}));
    var fn;
    (function(e) {
        e[e.KeepWhitespace = 1] = "KeepWhitespace",
        e[e.InsertAsSnippet = 4] = "InsertAsSnippet"
    }
    )(fn || (fn = {}));
    var cn;
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
    )(cn || (cn = {}));
    var hn;
    (function(e) {
        e[e.Deprecated = 1] = "Deprecated"
    }
    )(hn || (hn = {}));
    var dn;
    (function(e) {
        e[e.Invoke = 0] = "Invoke",
        e[e.TriggerCharacter = 1] = "TriggerCharacter",
        e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions"
    }
    )(dn || (dn = {}));
    var gn;
    (function(e) {
        e[e.EXACT = 0] = "EXACT",
        e[e.ABOVE = 1] = "ABOVE",
        e[e.BELOW = 2] = "BELOW"
    }
    )(gn || (gn = {}));
    var mn;
    (function(e) {
        e[e.NotSet = 0] = "NotSet",
        e[e.ContentFlush = 1] = "ContentFlush",
        e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers",
        e[e.Explicit = 3] = "Explicit",
        e[e.Paste = 4] = "Paste",
        e[e.Undo = 5] = "Undo",
        e[e.Redo = 6] = "Redo"
    }
    )(mn || (mn = {}));
    var pn;
    (function(e) {
        e[e.LF = 1] = "LF",
        e[e.CRLF = 2] = "CRLF"
    }
    )(pn || (pn = {}));
    var vn;
    (function(e) {
        e[e.Text = 0] = "Text",
        e[e.Read = 1] = "Read",
        e[e.Write = 2] = "Write"
    }
    )(vn || (vn = {}));
    var bn;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Keep = 1] = "Keep",
        e[e.Brackets = 2] = "Brackets",
        e[e.Advanced = 3] = "Advanced",
        e[e.Full = 4] = "Full"
    }
    )(bn || (bn = {}));
    var yn;
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
    )(yn || (yn = {}));
    var Sn;
    (function(e) {
        e[e.TextDefined = 0] = "TextDefined",
        e[e.LF = 1] = "LF",
        e[e.CRLF = 2] = "CRLF"
    }
    )(Sn || (Sn = {}));
    var _n;
    (function(e) {
        e[e.LF = 0] = "LF",
        e[e.CRLF = 1] = "CRLF"
    }
    )(_n || (_n = {}));
    var An;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Indent = 1] = "Indent",
        e[e.IndentOutdent = 2] = "IndentOutdent",
        e[e.Outdent = 3] = "Outdent"
    }
    )(An || (An = {}));
    var wn;
    (function(e) {
        e[e.Other = 0] = "Other",
        e[e.Type = 1] = "Type",
        e[e.Parameter = 2] = "Parameter"
    }
    )(wn || (wn = {}));
    var Nn;
    (function(e) {
        e[e.Automatic = 0] = "Automatic",
        e[e.Explicit = 1] = "Explicit"
    }
    )(Nn || (Nn = {}));
    var sr;
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
    )(sr || (sr = {}));
    var ar;
    (function(e) {
        e[e.Hint = 1] = "Hint",
        e[e.Info = 2] = "Info",
        e[e.Warning = 4] = "Warning",
        e[e.Error = 8] = "Error"
    }
    )(ar || (ar = {}));
    var or;
    (function(e) {
        e[e.Unnecessary = 1] = "Unnecessary",
        e[e.Deprecated = 2] = "Deprecated"
    }
    )(or || (or = {}));
    var Ln;
    (function(e) {
        e[e.Inline = 1] = "Inline",
        e[e.Gutter = 2] = "Gutter"
    }
    )(Ln || (Ln = {}));
    var Cn;
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
    )(Cn || (Cn = {}));
    var xn;
    (function(e) {
        e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER",
        e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER",
        e[e.TOP_CENTER = 2] = "TOP_CENTER"
    }
    )(xn || (xn = {}));
    var kn;
    (function(e) {
        e[e.Left = 1] = "Left",
        e[e.Center = 2] = "Center",
        e[e.Right = 4] = "Right",
        e[e.Full = 7] = "Full"
    }
    )(kn || (kn = {}));
    var Tn;
    (function(e) {
        e[e.Off = 0] = "Off",
        e[e.On = 1] = "On",
        e[e.Relative = 2] = "Relative",
        e[e.Interval = 3] = "Interval",
        e[e.Custom = 4] = "Custom"
    }
    )(Tn || (Tn = {}));
    var Pn;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Text = 1] = "Text",
        e[e.Blocks = 2] = "Blocks"
    }
    )(Pn || (Pn = {}));
    var Mn;
    (function(e) {
        e[e.Smooth = 0] = "Smooth",
        e[e.Immediate = 1] = "Immediate"
    }
    )(Mn || (Mn = {}));
    var En;
    (function(e) {
        e[e.Auto = 1] = "Auto",
        e[e.Hidden = 2] = "Hidden",
        e[e.Visible = 3] = "Visible"
    }
    )(En || (En = {}));
    var ur;
    (function(e) {
        e[e.LTR = 0] = "LTR",
        e[e.RTL = 1] = "RTL"
    }
    )(ur || (ur = {}));
    var In;
    (function(e) {
        e[e.Invoke = 1] = "Invoke",
        e[e.TriggerCharacter = 2] = "TriggerCharacter",
        e[e.ContentChange = 3] = "ContentChange"
    }
    )(In || (In = {}));
    var Fn;
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
    )(Fn || (Fn = {}));
    var Dn;
    (function(e) {
        e[e.Deprecated = 1] = "Deprecated"
    }
    )(Dn || (Dn = {}));
    var jn;
    (function(e) {
        e[e.Hidden = 0] = "Hidden",
        e[e.Blink = 1] = "Blink",
        e[e.Smooth = 2] = "Smooth",
        e[e.Phase = 3] = "Phase",
        e[e.Expand = 4] = "Expand",
        e[e.Solid = 5] = "Solid"
    }
    )(jn || (jn = {}));
    var Un;
    (function(e) {
        e[e.Line = 1] = "Line",
        e[e.Block = 2] = "Block",
        e[e.Underline = 3] = "Underline",
        e[e.LineThin = 4] = "LineThin",
        e[e.BlockOutline = 5] = "BlockOutline",
        e[e.UnderlineThin = 6] = "UnderlineThin"
    }
    )(Un || (Un = {}));
    var Rn;
    (function(e) {
        e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges",
        e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges",
        e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore",
        e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter"
    }
    )(Rn || (Rn = {}));
    var On;
    (function(e) {
        e[e.None = 0] = "None",
        e[e.Same = 1] = "Same",
        e[e.Indent = 2] = "Indent",
        e[e.DeepIndent = 3] = "DeepIndent"
    }
    )(On || (On = {}));
    class at {
        static chord(t, r) {
            return Vs(t, r)
        }
    }
    at.CtrlCmd = 2048,
    at.Shift = 1024,
    at.Alt = 512,
    at.WinCtrl = 256;
    function Ws() {
        return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: Os,
            Emitter: Oe,
            KeyCode: sr,
            KeyMod: at,
            Position: le,
            Range: G,
            Selection: me,
            SelectionDirection: ur,
            MarkerSeverity: ar,
            MarkerTag: or,
            Uri: Re,
            Token: $s
        }
    }
    var Je = function(e, t, r, n) {
        function i(s) {
            return s instanceof r ? s : new r(function(a) {
                a(s)
            }
            )
        }
        return new (r || (r = Promise))(function(s, a) {
            function o(c) {
                try {
                    l(n.next(c))
                } catch (f) {
                    a(f)
                }
            }
            function u(c) {
                try {
                    l(n.throw(c))
                } catch (f) {
                    a(f)
                }
            }
            function l(c) {
                c.done ? s(c.value) : i(c.value).then(o, u)
            }
            l((n = n.apply(e, t || [])).next())
        }
        )
    };
    class qs extends Cs {
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
        getWordAtPosition(t, r) {
            let n = sn(t.column, Ps(r), this._lines[t.lineNumber - 1], 0);
            return n ? new G(t.lineNumber,n.startColumn,t.lineNumber,n.endColumn) : null
        }
        words(t) {
            const r = this._lines
              , n = this._wordenize.bind(this);
            let i = 0
              , s = ""
              , a = 0
              , o = [];
            return {
                *[Symbol.iterator]() {
                    for (; ; )
                        if (a < o.length) {
                            const u = s.substring(o[a].start, o[a].end);
                            a += 1,
                            yield u
                        } else if (i < r.length)
                            s = r[i],
                            o = n(s, t),
                            a = 0,
                            i += 1;
                        else
                            break
                }
            }
        }
        getLineWords(t, r) {
            let n = this._lines[t - 1]
              , i = this._wordenize(n, r)
              , s = [];
            for (const a of i)
                s.push({
                    word: n.substring(a.start, a.end),
                    startColumn: a.start + 1,
                    endColumn: a.end + 1
                });
            return s
        }
        _wordenize(t, r) {
            const n = [];
            let i;
            for (r.lastIndex = 0; (i = r.exec(t)) && i[0].length !== 0; )
                n.push({
                    start: i.index,
                    end: i.index + i[0].length
                });
            return n
        }
        getValueInRange(t) {
            if (t = this._validateRange(t),
            t.startLineNumber === t.endLineNumber)
                return this._lines[t.startLineNumber - 1].substring(t.startColumn - 1, t.endColumn - 1);
            let r = this._eol
              , n = t.startLineNumber - 1
              , i = t.endLineNumber - 1
              , s = [];
            s.push(this._lines[n].substring(t.startColumn - 1));
            for (let a = n + 1; a < i; a++)
                s.push(this._lines[a]);
            return s.push(this._lines[i].substring(0, t.endColumn - 1)),
            s.join(r)
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
            let r = this._lineStarts.getIndexOf(t)
              , n = this._lines[r.index].length;
            return {
                lineNumber: 1 + r.index,
                column: 1 + Math.min(r.remainder, n)
            }
        }
        _validateRange(t) {
            const r = this._validatePosition({
                lineNumber: t.startLineNumber,
                column: t.startColumn
            })
              , n = this._validatePosition({
                lineNumber: t.endLineNumber,
                column: t.endColumn
            });
            return r.lineNumber !== t.startLineNumber || r.column !== t.startColumn || n.lineNumber !== t.endLineNumber || n.column !== t.endColumn ? {
                startLineNumber: r.lineNumber,
                startColumn: r.column,
                endLineNumber: n.lineNumber,
                endColumn: n.column
            } : t
        }
        _validatePosition(t) {
            if (!le.isIPosition(t))
                throw new Error("bad position");
            let {lineNumber: r, column: n} = t
              , i = !1;
            if (r < 1)
                r = 1,
                n = 1,
                i = !0;
            else if (r > this._lines.length)
                r = this._lines.length,
                n = this._lines[r - 1].length + 1,
                i = !0;
            else {
                let s = this._lines[r - 1].length + 1;
                n < 1 ? (n = 1,
                i = !0) : n > s && (n = s,
                i = !0)
            }
            return i ? {
                lineNumber: r,
                column: n
            } : t
        }
    }
    class Qe {
        constructor(t, r) {
            this._host = t,
            this._models = Object.create(null),
            this._foreignModuleFactory = r,
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
            return Object.keys(this._models).forEach(r => t.push(this._models[r])),
            t
        }
        acceptNewModel(t) {
            this._models[t.url] = new qs(Re.parse(t.url),t.lines,t.EOL,t.versionId)
        }
        acceptModelChanged(t, r) {
            if (!this._models[t])
                return;
            this._models[t].onEvents(r)
        }
        acceptRemovedModel(t) {
            !this._models[t] || delete this._models[t]
        }
        computeDiff(t, r, n, i) {
            return Je(this, void 0, void 0, function*() {
                const s = this._getModel(t)
                  , a = this._getModel(r);
                if (!s || !a)
                    return null;
                const o = s.getLinesContent()
                  , u = a.getLinesContent()
                  , c = new ws(o,u,{
                    shouldComputeCharChanges: !0,
                    shouldPostProcessCharChanges: !0,
                    shouldIgnoreTrimWhitespace: n,
                    shouldMakePrettyDiff: !0,
                    maxComputationTime: i
                }).computeDiff()
                  , f = c.changes.length > 0 ? !1 : this._modelsAreIdentical(s, a);
                return {
                    quitEarly: c.quitEarly,
                    identical: f,
                    changes: c.changes
                }
            })
        }
        _modelsAreIdentical(t, r) {
            const n = t.getLineCount()
              , i = r.getLineCount();
            if (n !== i)
                return !1;
            for (let s = 1; s <= n; s++) {
                const a = t.getLineContent(s)
                  , o = r.getLineContent(s);
                if (a !== o)
                    return !1
            }
            return !0
        }
        computeMoreMinimalEdits(t, r) {
            return Je(this, void 0, void 0, function*() {
                const n = this._getModel(t);
                if (!n)
                    return r;
                const i = [];
                let s;
                r = r.slice(0).sort( (a, o) => {
                    if (a.range && o.range)
                        return G.compareRangesUsingStarts(a.range, o.range);
                    let u = a.range ? 0 : 1
                      , l = o.range ? 0 : 1;
                    return u - l
                }
                );
                for (let {range: a, text: o, eol: u} of r) {
                    if (typeof u == "number" && (s = u),
                    G.isEmpty(a) && !o)
                        continue;
                    const l = n.getValueInRange(a);
                    if (o = o.replace(/\r\n|\n|\r/g, n.eol),
                    l === o)
                        continue;
                    if (Math.max(o.length, l.length) > Qe._diffLimit) {
                        i.push({
                            range: a,
                            text: o
                        });
                        continue
                    }
                    const c = as(l, o, !1)
                      , f = n.offsetAt(G.lift(a).getStartPosition());
                    for (const h of c) {
                        const d = n.positionAt(f + h.originalStart)
                          , m = n.positionAt(f + h.originalStart + h.originalLength)
                          , v = {
                            text: o.substr(h.modifiedStart, h.modifiedLength),
                            range: {
                                startLineNumber: d.lineNumber,
                                startColumn: d.column,
                                endLineNumber: m.lineNumber,
                                endColumn: m.column
                            }
                        };
                        n.getValueInRange(v.range) !== v.text && i.push(v)
                    }
                }
                return typeof s == "number" && i.push({
                    eol: s,
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
            return Je(this, void 0, void 0, function*() {
                let r = this._getModel(t);
                return r ? Us(r) : null
            })
        }
        textualSuggest(t, r, n, i) {
            return Je(this, void 0, void 0, function*() {
                const s = new wt(!0)
                  , a = new RegExp(n,i)
                  , o = new Set;
                e: for (let u of t) {
                    const l = this._getModel(u);
                    if (!!l) {
                        for (let c of l.words(a))
                            if (!(c === r || !isNaN(Number(c))) && (o.add(c),
                            o.size > Qe._suggestionsLimit))
                                break e
                    }
                }
                return {
                    words: Array.from(o),
                    duration: s.elapsed()
                }
            })
        }
        computeWordRanges(t, r, n, i) {
            return Je(this, void 0, void 0, function*() {
                let s = this._getModel(t);
                if (!s)
                    return Object.create(null);
                const a = new RegExp(n,i)
                  , o = Object.create(null);
                for (let u = r.startLineNumber; u < r.endLineNumber; u++) {
                    let l = s.getLineWords(u, a);
                    for (const c of l) {
                        if (!isNaN(Number(c.word)))
                            continue;
                        let f = o[c.word];
                        f || (f = [],
                        o[c.word] = f),
                        f.push({
                            startLineNumber: u,
                            startColumn: c.startColumn,
                            endLineNumber: u,
                            endColumn: c.endColumn
                        })
                    }
                }
                return o
            })
        }
        navigateValueSet(t, r, n, i, s) {
            return Je(this, void 0, void 0, function*() {
                let a = this._getModel(t);
                if (!a)
                    return null;
                let o = new RegExp(i,s);
                r.startColumn === r.endColumn && (r = {
                    startLineNumber: r.startLineNumber,
                    startColumn: r.startColumn,
                    endLineNumber: r.endLineNumber,
                    endColumn: r.endColumn + 1
                });
                let u = a.getValueInRange(r)
                  , l = a.getWordAtPosition({
                    lineNumber: r.startLineNumber,
                    column: r.startColumn
                }, o);
                if (!l)
                    return null;
                let c = a.getValueInRange(l);
                return Kt.INSTANCE.navigateValueSet(r, u, l, c, n)
            })
        }
        loadForeignModule(t, r, n) {
            let a = {
                host: Wr(n, (o, u) => this._host.fhr(o, u)),
                getMirrorModels: () => this._getModels()
            };
            return this._foreignModuleFactory ? (this._foreignModule = this._foreignModuleFactory(a, r),
            Promise.resolve(Ht(this._foreignModule))) : Promise.reject(new Error("Unexpected usage"))
        }
        fmr(t, r) {
            if (!this._foreignModule || typeof this._foreignModule[t] != "function")
                return Promise.reject(new Error("Missing requestHandler or method: " + t));
            try {
                return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, r))
            } catch (n) {
                return Promise.reject(n)
            }
        }
    }
    Qe._diffLimit = 1e5,
    Qe._suggestionsLimit = 1e4,
    typeof importScripts == "function" && (ee.monaco = Ws());
    let lr = !1;
    function Vn(e) {
        if (lr)
            return;
        lr = !0;
        const t = new ts(r => {
            self.postMessage(r)
        }
        ,r => new Qe(r,e));
        self.onmessage = r => {
            t.onmessage(r.data)
        }
    }
    self.onmessage = e => {
        lr || Vn(null)
    }
    ;
    function fr(e, t) {
        t === void 0 && (t = !1);
        var r = e.length
          , n = 0
          , i = ""
          , s = 0
          , a = 16
          , o = 0
          , u = 0
          , l = 0
          , c = 0
          , f = 0;
        function h(g, _) {
            for (var L = 0, S = 0; L < g || !_; ) {
                var A = e.charCodeAt(n);
                if (A >= 48 && A <= 57)
                    S = S * 16 + A - 48;
                else if (A >= 65 && A <= 70)
                    S = S * 16 + A - 65 + 10;
                else if (A >= 97 && A <= 102)
                    S = S * 16 + A - 97 + 10;
                else
                    break;
                n++,
                L++
            }
            return L < g && (S = -1),
            S
        }
        function d(g) {
            n = g,
            i = "",
            s = 0,
            a = 16,
            f = 0
        }
        function m() {
            var g = n;
            if (e.charCodeAt(n) === 48)
                n++;
            else
                for (n++; n < e.length && Xe(e.charCodeAt(n)); )
                    n++;
            if (n < e.length && e.charCodeAt(n) === 46)
                if (n++,
                n < e.length && Xe(e.charCodeAt(n)))
                    for (n++; n < e.length && Xe(e.charCodeAt(n)); )
                        n++;
                else
                    return f = 3,
                    e.substring(g, n);
            var _ = n;
            if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101))
                if (n++,
                (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++,
                n < e.length && Xe(e.charCodeAt(n))) {
                    for (n++; n < e.length && Xe(e.charCodeAt(n)); )
                        n++;
                    _ = n
                } else
                    f = 3;
            return e.substring(g, _)
        }
        function v() {
            for (var g = "", _ = n; ; ) {
                if (n >= r) {
                    g += e.substring(_, n),
                    f = 2;
                    break
                }
                var L = e.charCodeAt(n);
                if (L === 34) {
                    g += e.substring(_, n),
                    n++;
                    break
                }
                if (L === 92) {
                    if (g += e.substring(_, n),
                    n++,
                    n >= r) {
                        f = 2;
                        break
                    }
                    var S = e.charCodeAt(n++);
                    switch (S) {
                    case 34:
                        g += '"';
                        break;
                    case 92:
                        g += "\\";
                        break;
                    case 47:
                        g += "/";
                        break;
                    case 98:
                        g += "\b";
                        break;
                    case 102:
                        g += "\f";
                        break;
                    case 110:
                        g += `
`;
                        break;
                    case 114:
                        g += "\r";
                        break;
                    case 116:
                        g += "	";
                        break;
                    case 117:
                        var A = h(4, !0);
                        A >= 0 ? g += String.fromCharCode(A) : f = 4;
                        break;
                    default:
                        f = 5
                    }
                    _ = n;
                    continue
                }
                if (L >= 0 && L <= 31)
                    if (ot(L)) {
                        g += e.substring(_, n),
                        f = 2;
                        break
                    } else
                        f = 6;
                n++
            }
            return g
        }
        function b() {
            if (i = "",
            f = 0,
            s = n,
            u = o,
            c = l,
            n >= r)
                return s = r,
                a = 17;
            var g = e.charCodeAt(n);
            if (cr(g)) {
                do
                    n++,
                    i += String.fromCharCode(g),
                    g = e.charCodeAt(n);
                while (cr(g));
                return a = 15
            }
            if (ot(g))
                return n++,
                i += String.fromCharCode(g),
                g === 13 && e.charCodeAt(n) === 10 && (n++,
                i += `
`),
                o++,
                l = n,
                a = 14;
            switch (g) {
            case 123:
                return n++,
                a = 1;
            case 125:
                return n++,
                a = 2;
            case 91:
                return n++,
                a = 3;
            case 93:
                return n++,
                a = 4;
            case 58:
                return n++,
                a = 6;
            case 44:
                return n++,
                a = 5;
            case 34:
                return n++,
                i = v(),
                a = 10;
            case 47:
                var _ = n - 1;
                if (e.charCodeAt(n + 1) === 47) {
                    for (n += 2; n < r && !ot(e.charCodeAt(n)); )
                        n++;
                    return i = e.substring(_, n),
                    a = 12
                }
                if (e.charCodeAt(n + 1) === 42) {
                    n += 2;
                    for (var L = r - 1, S = !1; n < L; ) {
                        var A = e.charCodeAt(n);
                        if (A === 42 && e.charCodeAt(n + 1) === 47) {
                            n += 2,
                            S = !0;
                            break
                        }
                        n++,
                        ot(A) && (A === 13 && e.charCodeAt(n) === 10 && n++,
                        o++,
                        l = n)
                    }
                    return S || (n++,
                    f = 1),
                    i = e.substring(_, n),
                    a = 13
                }
                return i += String.fromCharCode(g),
                n++,
                a = 16;
            case 45:
                if (i += String.fromCharCode(g),
                n++,
                n === r || !Xe(e.charCodeAt(n)))
                    return a = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return i += m(),
                a = 11;
            default:
                for (; n < r && N(g); )
                    n++,
                    g = e.charCodeAt(n);
                if (s !== n) {
                    switch (i = e.substring(s, n),
                    i) {
                    case "true":
                        return a = 8;
                    case "false":
                        return a = 9;
                    case "null":
                        return a = 7
                    }
                    return a = 16
                }
                return i += String.fromCharCode(g),
                n++,
                a = 16
            }
        }
        function N(g) {
            if (cr(g) || ot(g))
                return !1;
            switch (g) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return !1
            }
            return !0
        }
        function p() {
            var g;
            do
                g = b();
            while (g >= 12 && g <= 15);
            return g
        }
        return {
            setPosition: d,
            getPosition: function() {
                return n
            },
            scan: t ? p : b,
            getToken: function() {
                return a
            },
            getTokenValue: function() {
                return i
            },
            getTokenOffset: function() {
                return s
            },
            getTokenLength: function() {
                return n - s
            },
            getTokenStartLine: function() {
                return u
            },
            getTokenStartCharacter: function() {
                return s - c
            },
            getTokenError: function() {
                return f
            }
        }
    }
    function cr(e) {
        return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279
    }
    function ot(e) {
        return e === 10 || e === 13 || e === 8232 || e === 8233
    }
    function Xe(e) {
        return e >= 48 && e <= 57
    }
    function Hs(e, t, r) {
        var n, i, s, a, o;
        if (t) {
            for (a = t.offset,
            o = a + t.length,
            s = a; s > 0 && !$n(e, s - 1); )
                s--;
            for (var u = o; u < e.length && !$n(e, u); )
                u++;
            i = e.substring(s, u),
            n = Bs(i, r)
        } else
            i = e,
            n = 0,
            s = 0,
            a = 0,
            o = e.length;
        var l = Ys(r, e), c = !1, f = 0, h;
        r.insertSpaces ? h = hr(" ", r.tabSize || 4) : h = "	";
        var d = fr(i, !1)
          , m = !1;
        function v() {
            return l + hr(h, n + f)
        }
        function b() {
            var k = d.scan();
            for (c = !1; k === 15 || k === 14; )
                c = c || k === 14,
                k = d.scan();
            return m = k === 16 || d.getTokenError() !== 0,
            k
        }
        var N = [];
        function p(k, F, V) {
            !m && (!t || F < o && V > a) && e.substring(F, V) !== k && N.push({
                offset: F,
                length: V - F,
                content: k
            })
        }
        var g = b();
        if (g !== 17) {
            var _ = d.getTokenOffset() + s
              , L = hr(h, n);
            p(L, s, _)
        }
        for (; g !== 17; ) {
            for (var S = d.getTokenOffset() + d.getTokenLength() + s, A = b(), w = "", y = !1; !c && (A === 12 || A === 13); ) {
                var T = d.getTokenOffset() + s;
                p(" ", S, T),
                S = d.getTokenOffset() + d.getTokenLength() + s,
                y = A === 12,
                w = y ? v() : "",
                A = b()
            }
            if (A === 2)
                g !== 1 && (f--,
                w = v());
            else if (A === 4)
                g !== 3 && (f--,
                w = v());
            else {
                switch (g) {
                case 3:
                case 1:
                    f++,
                    w = v();
                    break;
                case 5:
                case 12:
                    w = v();
                    break;
                case 13:
                    c ? w = v() : y || (w = " ");
                    break;
                case 6:
                    y || (w = " ");
                    break;
                case 10:
                    if (A === 6) {
                        y || (w = "");
                        break
                    }
                case 7:
                case 8:
                case 9:
                case 11:
                case 2:
                case 4:
                    A === 12 || A === 13 ? y || (w = " ") : A !== 5 && A !== 17 && (m = !0);
                    break;
                case 16:
                    m = !0;
                    break
                }
                c && (A === 12 || A === 13) && (w = v())
            }
            A === 17 && (w = r.insertFinalNewline ? l : "");
            var M = d.getTokenOffset() + s;
            p(w, S, M),
            g = A
        }
        return N
    }
    function hr(e, t) {
        for (var r = "", n = 0; n < t; n++)
            r += e;
        return r
    }
    function Bs(e, t) {
        for (var r = 0, n = 0, i = t.tabSize || 4; r < e.length; ) {
            var s = e.charAt(r);
            if (s === " ")
                n++;
            else if (s === "	")
                n += i;
            else
                break;
            r++
        }
        return Math.floor(n / i)
    }
    function Ys(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t.charAt(r);
            if (n === "\r")
                return r + 1 < t.length && t.charAt(r + 1) === `
` ? `\r
` : "\r";
            if (n === `
`)
                return `
`
        }
        return e && e.eol || `
`
    }
    function $n(e, t) {
        return `\r
`.indexOf(e.charAt(t)) !== -1
    }
    var xt;
    (function(e) {
        e.DEFAULT = {
            allowTrailingComma: !1
        }
    }
    )(xt || (xt = {}));
    function zs(e, t, r) {
        t === void 0 && (t = []),
        r === void 0 && (r = xt.DEFAULT);
        var n = null
          , i = []
          , s = [];
        function a(u) {
            Array.isArray(i) ? i.push(u) : n !== null && (i[n] = u)
        }
        var o = {
            onObjectBegin: function() {
                var u = {};
                a(u),
                s.push(i),
                i = u,
                n = null
            },
            onObjectProperty: function(u) {
                n = u
            },
            onObjectEnd: function() {
                i = s.pop()
            },
            onArrayBegin: function() {
                var u = [];
                a(u),
                s.push(i),
                i = u,
                n = null
            },
            onArrayEnd: function() {
                i = s.pop()
            },
            onLiteralValue: a,
            onError: function(u, l, c) {
                t.push({
                    error: u,
                    offset: l,
                    length: c
                })
            }
        };
        return Js(e, o, r),
        i[0]
    }
    function Wn(e) {
        if (!e.parent || !e.parent.children)
            return [];
        var t = Wn(e.parent);
        if (e.parent.type === "property") {
            var r = e.parent.children[0].value;
            t.push(r)
        } else if (e.parent.type === "array") {
            var n = e.parent.children.indexOf(e);
            n !== -1 && t.push(n)
        }
        return t
    }
    function dr(e) {
        switch (e.type) {
        case "array":
            return e.children.map(dr);
        case "object":
            for (var t = Object.create(null), r = 0, n = e.children; r < n.length; r++) {
                var i = n[r]
                  , s = i.children[1];
                s && (t[i.children[0].value] = dr(s))
            }
            return t;
        case "null":
        case "string":
        case "number":
        case "boolean":
            return e.value;
        default:
            return
        }
    }
    function Gs(e, t, r) {
        return r === void 0 && (r = !1),
        t >= e.offset && t < e.offset + e.length || r && t === e.offset + e.length
    }
    function qn(e, t, r) {
        if (r === void 0 && (r = !1),
        Gs(e, t, r)) {
            var n = e.children;
            if (Array.isArray(n))
                for (var i = 0; i < n.length && n[i].offset <= t; i++) {
                    var s = qn(n[i], t, r);
                    if (s)
                        return s
                }
            return e
        }
    }
    function Js(e, t, r) {
        r === void 0 && (r = xt.DEFAULT);
        var n = fr(e, !1);
        function i(y) {
            return y ? function() {
                return y(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter())
            }
            : function() {
                return !0
            }
        }
        function s(y) {
            return y ? function(T) {
                return y(T, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter())
            }
            : function() {
                return !0
            }
        }
        var a = i(t.onObjectBegin)
          , o = s(t.onObjectProperty)
          , u = i(t.onObjectEnd)
          , l = i(t.onArrayBegin)
          , c = i(t.onArrayEnd)
          , f = s(t.onLiteralValue)
          , h = s(t.onSeparator)
          , d = i(t.onComment)
          , m = s(t.onError)
          , v = r && r.disallowComments
          , b = r && r.allowTrailingComma;
        function N() {
            for (; ; ) {
                var y = n.scan();
                switch (n.getTokenError()) {
                case 4:
                    p(14);
                    break;
                case 5:
                    p(15);
                    break;
                case 3:
                    p(13);
                    break;
                case 1:
                    v || p(11);
                    break;
                case 2:
                    p(12);
                    break;
                case 6:
                    p(16);
                    break
                }
                switch (y) {
                case 12:
                case 13:
                    v ? p(10) : d();
                    break;
                case 16:
                    p(1);
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return y
                }
            }
        }
        function p(y, T, M) {
            if (T === void 0 && (T = []),
            M === void 0 && (M = []),
            m(y),
            T.length + M.length > 0)
                for (var k = n.getToken(); k !== 17; ) {
                    if (T.indexOf(k) !== -1) {
                        N();
                        break
                    } else if (M.indexOf(k) !== -1)
                        break;
                    k = N()
                }
        }
        function g(y) {
            var T = n.getTokenValue();
            return y ? f(T) : o(T),
            N(),
            !0
        }
        function _() {
            switch (n.getToken()) {
            case 11:
                var y = n.getTokenValue()
                  , T = Number(y);
                isNaN(T) && (p(2),
                T = 0),
                f(T);
                break;
            case 7:
                f(null);
                break;
            case 8:
                f(!0);
                break;
            case 9:
                f(!1);
                break;
            default:
                return !1
            }
            return N(),
            !0
        }
        function L() {
            return n.getToken() !== 10 ? (p(3, [], [2, 5]),
            !1) : (g(!1),
            n.getToken() === 6 ? (h(":"),
            N(),
            w() || p(4, [], [2, 5])) : p(5, [], [2, 5]),
            !0)
        }
        function S() {
            a(),
            N();
            for (var y = !1; n.getToken() !== 2 && n.getToken() !== 17; ) {
                if (n.getToken() === 5) {
                    if (y || p(4, [], []),
                    h(","),
                    N(),
                    n.getToken() === 2 && b)
                        break
                } else
                    y && p(6, [], []);
                L() || p(4, [], [2, 5]),
                y = !0
            }
            return u(),
            n.getToken() !== 2 ? p(7, [2], []) : N(),
            !0
        }
        function A() {
            l(),
            N();
            for (var y = !1; n.getToken() !== 4 && n.getToken() !== 17; ) {
                if (n.getToken() === 5) {
                    if (y || p(4, [], []),
                    h(","),
                    N(),
                    n.getToken() === 4 && b)
                        break
                } else
                    y && p(6, [], []);
                w() || p(4, [], [4, 5]),
                y = !0
            }
            return c(),
            n.getToken() !== 4 ? p(8, [4], []) : N(),
            !0
        }
        function w() {
            switch (n.getToken()) {
            case 3:
                return A();
            case 1:
                return S();
            case 10:
                return g(!0);
            default:
                return _()
            }
        }
        return N(),
        n.getToken() === 17 ? r.allowEmptyContent ? !0 : (p(4, [], []),
        !1) : w() ? (n.getToken() !== 17 && p(9, [], []),
        !0) : (p(4, [], []),
        !1)
    }
    var Ze = fr
      , Qs = zs
      , Xs = qn
      , Zs = Wn
      , Ks = dr;
    function ea(e, t, r) {
        return Hs(e, t, r)
    }
    function ut(e, t) {
        if (e === t)
            return !0;
        if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t))
            return !1;
        var r, n;
        if (Array.isArray(e)) {
            if (e.length !== t.length)
                return !1;
            for (r = 0; r < e.length; r++)
                if (!ut(e[r], t[r]))
                    return !1
        } else {
            var i = [];
            for (n in e)
                i.push(n);
            i.sort();
            var s = [];
            for (n in t)
                s.push(n);
            if (s.sort(),
            !ut(i, s))
                return !1;
            for (r = 0; r < i.length; r++)
                if (!ut(e[i[r]], t[i[r]]))
                    return !1
        }
        return !0
    }
    function fe(e) {
        return typeof e == "number"
    }
    function Ae(e) {
        return typeof e != "undefined"
    }
    function Se(e) {
        return typeof e == "boolean"
    }
    function ta(e) {
        return typeof e == "string"
    }
    function Hn(e, t) {
        if (e.length < t.length)
            return !1;
        for (var r = 0; r < t.length; r++)
            if (e[r] !== t[r])
                return !1;
        return !0
    }
    function lt(e, t) {
        var r = e.length - t.length;
        return r > 0 ? e.lastIndexOf(t) === r : r === 0 ? e === t : !1
    }
    function kt(e) {
        return Hn(e, "(?i)") ? new RegExp(e.substring(4),"i") : new RegExp(e)
    }
    var Bn;
    (function(e) {
        e.MIN_VALUE = -2147483648,
        e.MAX_VALUE = 2147483647
    }
    )(Bn || (Bn = {}));
    var Tt;
    (function(e) {
        e.MIN_VALUE = 0,
        e.MAX_VALUE = 2147483647
    }
    )(Tt || (Tt = {}));
    var pe;
    (function(e) {
        function t(n, i) {
            return n === Number.MAX_VALUE && (n = Tt.MAX_VALUE),
            i === Number.MAX_VALUE && (i = Tt.MAX_VALUE),
            {
                line: n,
                character: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.objectLiteral(i) && C.uinteger(i.line) && C.uinteger(i.character)
        }
        e.is = r
    }
    )(pe || (pe = {}));
    var q;
    (function(e) {
        function t(n, i, s, a) {
            if (C.uinteger(n) && C.uinteger(i) && C.uinteger(s) && C.uinteger(a))
                return {
                    start: pe.create(n, i),
                    end: pe.create(s, a)
                };
            if (pe.is(n) && pe.is(i))
                return {
                    start: n,
                    end: i
                };
            throw new Error("Range#create called with invalid arguments[" + n + ", " + i + ", " + s + ", " + a + "]")
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.objectLiteral(i) && pe.is(i.start) && pe.is(i.end)
        }
        e.is = r
    }
    )(q || (q = {}));
    var ft;
    (function(e) {
        function t(n, i) {
            return {
                uri: n,
                range: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && q.is(i.range) && (C.string(i.uri) || C.undefined(i.uri))
        }
        e.is = r
    }
    )(ft || (ft = {}));
    var Yn;
    (function(e) {
        function t(n, i, s, a) {
            return {
                targetUri: n,
                targetRange: i,
                targetSelectionRange: s,
                originSelectionRange: a
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && q.is(i.targetRange) && C.string(i.targetUri) && (q.is(i.targetSelectionRange) || C.undefined(i.targetSelectionRange)) && (q.is(i.originSelectionRange) || C.undefined(i.originSelectionRange))
        }
        e.is = r
    }
    )(Yn || (Yn = {}));
    var gr;
    (function(e) {
        function t(n, i, s, a) {
            return {
                red: n,
                green: i,
                blue: s,
                alpha: a
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.numberRange(i.red, 0, 1) && C.numberRange(i.green, 0, 1) && C.numberRange(i.blue, 0, 1) && C.numberRange(i.alpha, 0, 1)
        }
        e.is = r
    }
    )(gr || (gr = {}));
    var zn;
    (function(e) {
        function t(n, i) {
            return {
                range: n,
                color: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return q.is(i.range) && gr.is(i.color)
        }
        e.is = r
    }
    )(zn || (zn = {}));
    var Gn;
    (function(e) {
        function t(n, i, s) {
            return {
                label: n,
                textEdit: i,
                additionalTextEdits: s
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.string(i.label) && (C.undefined(i.textEdit) || ve.is(i)) && (C.undefined(i.additionalTextEdits) || C.typedArray(i.additionalTextEdits, ve.is))
        }
        e.is = r
    }
    )(Gn || (Gn = {}));
    var ct;
    (function(e) {
        e.Comment = "comment",
        e.Imports = "imports",
        e.Region = "region"
    }
    )(ct || (ct = {}));
    var Jn;
    (function(e) {
        function t(n, i, s, a, o) {
            var u = {
                startLine: n,
                endLine: i
            };
            return C.defined(s) && (u.startCharacter = s),
            C.defined(a) && (u.endCharacter = a),
            C.defined(o) && (u.kind = o),
            u
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.uinteger(i.startLine) && C.uinteger(i.startLine) && (C.undefined(i.startCharacter) || C.uinteger(i.startCharacter)) && (C.undefined(i.endCharacter) || C.uinteger(i.endCharacter)) && (C.undefined(i.kind) || C.string(i.kind))
        }
        e.is = r
    }
    )(Jn || (Jn = {}));
    var mr;
    (function(e) {
        function t(n, i) {
            return {
                location: n,
                message: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && ft.is(i.location) && C.string(i.message)
        }
        e.is = r
    }
    )(mr || (mr = {}));
    var ce;
    (function(e) {
        e.Error = 1,
        e.Warning = 2,
        e.Information = 3,
        e.Hint = 4
    }
    )(ce || (ce = {}));
    var Qn;
    (function(e) {
        e.Unnecessary = 1,
        e.Deprecated = 2
    }
    )(Qn || (Qn = {}));
    var Xn;
    (function(e) {
        function t(r) {
            var n = r;
            return n != null && C.string(n.href)
        }
        e.is = t
    }
    )(Xn || (Xn = {}));
    var we;
    (function(e) {
        function t(n, i, s, a, o, u) {
            var l = {
                range: n,
                message: i
            };
            return C.defined(s) && (l.severity = s),
            C.defined(a) && (l.code = a),
            C.defined(o) && (l.source = o),
            C.defined(u) && (l.relatedInformation = u),
            l
        }
        e.create = t;
        function r(n) {
            var i, s = n;
            return C.defined(s) && q.is(s.range) && C.string(s.message) && (C.number(s.severity) || C.undefined(s.severity)) && (C.integer(s.code) || C.string(s.code) || C.undefined(s.code)) && (C.undefined(s.codeDescription) || C.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (C.string(s.source) || C.undefined(s.source)) && (C.undefined(s.relatedInformation) || C.typedArray(s.relatedInformation, mr.is))
        }
        e.is = r
    }
    )(we || (we = {}));
    var ht;
    (function(e) {
        function t(n, i) {
            for (var s = [], a = 2; a < arguments.length; a++)
                s[a - 2] = arguments[a];
            var o = {
                title: n,
                command: i
            };
            return C.defined(s) && s.length > 0 && (o.arguments = s),
            o
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && C.string(i.title) && C.string(i.command)
        }
        e.is = r
    }
    )(ht || (ht = {}));
    var ve;
    (function(e) {
        function t(s, a) {
            return {
                range: s,
                newText: a
            }
        }
        e.replace = t;
        function r(s, a) {
            return {
                range: {
                    start: s,
                    end: s
                },
                newText: a
            }
        }
        e.insert = r;
        function n(s) {
            return {
                range: s,
                newText: ""
            }
        }
        e.del = n;
        function i(s) {
            var a = s;
            return C.objectLiteral(a) && C.string(a.newText) && q.is(a.range)
        }
        e.is = i
    }
    )(ve || (ve = {}));
    var Ke;
    (function(e) {
        function t(n, i, s) {
            var a = {
                label: n
            };
            return i !== void 0 && (a.needsConfirmation = i),
            s !== void 0 && (a.description = s),
            a
        }
        e.create = t;
        function r(n) {
            var i = n;
            return i !== void 0 && C.objectLiteral(i) && C.string(i.label) && (C.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (C.string(i.description) || i.description === void 0)
        }
        e.is = r
    }
    )(Ke || (Ke = {}));
    var ne;
    (function(e) {
        function t(r) {
            var n = r;
            return typeof n == "string"
        }
        e.is = t
    }
    )(ne || (ne = {}));
    var Pe;
    (function(e) {
        function t(s, a, o) {
            return {
                range: s,
                newText: a,
                annotationId: o
            }
        }
        e.replace = t;
        function r(s, a, o) {
            return {
                range: {
                    start: s,
                    end: s
                },
                newText: a,
                annotationId: o
            }
        }
        e.insert = r;
        function n(s, a) {
            return {
                range: s,
                newText: "",
                annotationId: a
            }
        }
        e.del = n;
        function i(s) {
            var a = s;
            return ve.is(a) && (Ke.is(a.annotationId) || ne.is(a.annotationId))
        }
        e.is = i
    }
    )(Pe || (Pe = {}));
    var Pt;
    (function(e) {
        function t(n, i) {
            return {
                textDocument: n,
                edits: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && Et.is(i.textDocument) && Array.isArray(i.edits)
        }
        e.is = r
    }
    )(Pt || (Pt = {}));
    var dt;
    (function(e) {
        function t(n, i, s) {
            var a = {
                kind: "create",
                uri: n
            };
            return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a.options = i),
            s !== void 0 && (a.annotationId = s),
            a
        }
        e.create = t;
        function r(n) {
            var i = n;
            return i && i.kind === "create" && C.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || C.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || C.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || ne.is(i.annotationId))
        }
        e.is = r
    }
    )(dt || (dt = {}));
    var gt;
    (function(e) {
        function t(n, i, s, a) {
            var o = {
                kind: "rename",
                oldUri: n,
                newUri: i
            };
            return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s),
            a !== void 0 && (o.annotationId = a),
            o
        }
        e.create = t;
        function r(n) {
            var i = n;
            return i && i.kind === "rename" && C.string(i.oldUri) && C.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || C.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || C.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || ne.is(i.annotationId))
        }
        e.is = r
    }
    )(gt || (gt = {}));
    var mt;
    (function(e) {
        function t(n, i, s) {
            var a = {
                kind: "delete",
                uri: n
            };
            return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a.options = i),
            s !== void 0 && (a.annotationId = s),
            a
        }
        e.create = t;
        function r(n) {
            var i = n;
            return i && i.kind === "delete" && C.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || C.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || C.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || ne.is(i.annotationId))
        }
        e.is = r
    }
    )(mt || (mt = {}));
    var pr;
    (function(e) {
        function t(r) {
            var n = r;
            return n && (n.changes !== void 0 || n.documentChanges !== void 0) && (n.documentChanges === void 0 || n.documentChanges.every(function(i) {
                return C.string(i.kind) ? dt.is(i) || gt.is(i) || mt.is(i) : Pt.is(i)
            }))
        }
        e.is = t
    }
    )(pr || (pr = {}));
    var Mt = function() {
        function e(t, r) {
            this.edits = t,
            this.changeAnnotations = r
        }
        return e.prototype.insert = function(t, r, n) {
            var i, s;
            if (n === void 0 ? i = ve.insert(t, r) : ne.is(n) ? (s = n,
            i = Pe.insert(t, r, n)) : (this.assertChangeAnnotations(this.changeAnnotations),
            s = this.changeAnnotations.manage(n),
            i = Pe.insert(t, r, s)),
            this.edits.push(i),
            s !== void 0)
                return s
        }
        ,
        e.prototype.replace = function(t, r, n) {
            var i, s;
            if (n === void 0 ? i = ve.replace(t, r) : ne.is(n) ? (s = n,
            i = Pe.replace(t, r, n)) : (this.assertChangeAnnotations(this.changeAnnotations),
            s = this.changeAnnotations.manage(n),
            i = Pe.replace(t, r, s)),
            this.edits.push(i),
            s !== void 0)
                return s
        }
        ,
        e.prototype.delete = function(t, r) {
            var n, i;
            if (r === void 0 ? n = ve.del(t) : ne.is(r) ? (i = r,
            n = Pe.del(t, r)) : (this.assertChangeAnnotations(this.changeAnnotations),
            i = this.changeAnnotations.manage(r),
            n = Pe.del(t, i)),
            this.edits.push(n),
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
      , Zn = function() {
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
        e.prototype.manage = function(t, r) {
            var n;
            if (ne.is(t) ? n = t : (n = this.nextId(),
            r = t),
            this._annotations[n] !== void 0)
                throw new Error("Id " + n + " is already in use.");
            if (r === void 0)
                throw new Error("No annotation provided for id " + n);
            return this._annotations[n] = r,
            this._size++,
            n
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
            var r = this;
            this._textEditChanges = Object.create(null),
            t !== void 0 ? (this._workspaceEdit = t,
            t.documentChanges ? (this._changeAnnotations = new Zn(t.changeAnnotations),
            t.changeAnnotations = this._changeAnnotations.all(),
            t.documentChanges.forEach(function(n) {
                if (Pt.is(n)) {
                    var i = new Mt(n.edits,r._changeAnnotations);
                    r._textEditChanges[n.textDocument.uri] = i
                }
            })) : t.changes && Object.keys(t.changes).forEach(function(n) {
                var i = new Mt(t.changes[n]);
                r._textEditChanges[n] = i
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
            if (Et.is(t)) {
                if (this.initDocumentChanges(),
                this._workspaceEdit.documentChanges === void 0)
                    throw new Error("Workspace edit is not configured for document changes.");
                var r = {
                    uri: t.uri,
                    version: t.version
                }
                  , n = this._textEditChanges[r.uri];
                if (!n) {
                    var i = []
                      , s = {
                        textDocument: r,
                        edits: i
                    };
                    this._workspaceEdit.documentChanges.push(s),
                    n = new Mt(i,this._changeAnnotations),
                    this._textEditChanges[r.uri] = n
                }
                return n
            } else {
                if (this.initChanges(),
                this._workspaceEdit.changes === void 0)
                    throw new Error("Workspace edit is not configured for normal text edit changes.");
                var n = this._textEditChanges[t];
                if (!n) {
                    var i = [];
                    this._workspaceEdit.changes[t] = i,
                    n = new Mt(i),
                    this._textEditChanges[t] = n
                }
                return n
            }
        }
        ,
        e.prototype.initDocumentChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Zn,
            this._workspaceEdit.documentChanges = [],
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all())
        }
        ,
        e.prototype.initChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = Object.create(null))
        }
        ,
        e.prototype.createFile = function(t, r, n) {
            if (this.initDocumentChanges(),
            this._workspaceEdit.documentChanges === void 0)
                throw new Error("Workspace edit is not configured for document changes.");
            var i;
            Ke.is(r) || ne.is(r) ? i = r : n = r;
            var s, a;
            if (i === void 0 ? s = dt.create(t, n) : (a = ne.is(i) ? i : this._changeAnnotations.manage(i),
            s = dt.create(t, n, a)),
            this._workspaceEdit.documentChanges.push(s),
            a !== void 0)
                return a
        }
        ,
        e.prototype.renameFile = function(t, r, n, i) {
            if (this.initDocumentChanges(),
            this._workspaceEdit.documentChanges === void 0)
                throw new Error("Workspace edit is not configured for document changes.");
            var s;
            Ke.is(n) || ne.is(n) ? s = n : i = n;
            var a, o;
            if (s === void 0 ? a = gt.create(t, r, i) : (o = ne.is(s) ? s : this._changeAnnotations.manage(s),
            a = gt.create(t, r, i, o)),
            this._workspaceEdit.documentChanges.push(a),
            o !== void 0)
                return o
        }
        ,
        e.prototype.deleteFile = function(t, r, n) {
            if (this.initDocumentChanges(),
            this._workspaceEdit.documentChanges === void 0)
                throw new Error("Workspace edit is not configured for document changes.");
            var i;
            Ke.is(r) || ne.is(r) ? i = r : n = r;
            var s, a;
            if (i === void 0 ? s = mt.create(t, n) : (a = ne.is(i) ? i : this._changeAnnotations.manage(i),
            s = mt.create(t, n, a)),
            this._workspaceEdit.documentChanges.push(s),
            a !== void 0)
                return a
        }
        ,
        e
    }
    )();
    var Kn;
    (function(e) {
        function t(n) {
            return {
                uri: n
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && C.string(i.uri)
        }
        e.is = r
    }
    )(Kn || (Kn = {}));
    var ei;
    (function(e) {
        function t(n, i) {
            return {
                uri: n,
                version: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && C.string(i.uri) && C.integer(i.version)
        }
        e.is = r
    }
    )(ei || (ei = {}));
    var Et;
    (function(e) {
        function t(n, i) {
            return {
                uri: n,
                version: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && C.string(i.uri) && (i.version === null || C.integer(i.version))
        }
        e.is = r
    }
    )(Et || (Et = {}));
    var ti;
    (function(e) {
        function t(n, i, s, a) {
            return {
                uri: n,
                languageId: i,
                version: s,
                text: a
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && C.string(i.uri) && C.string(i.languageId) && C.integer(i.version) && C.string(i.text)
        }
        e.is = r
    }
    )(ti || (ti = {}));
    var Ne;
    (function(e) {
        e.PlainText = "plaintext",
        e.Markdown = "markdown"
    }
    )(Ne || (Ne = {})),
    function(e) {
        function t(r) {
            var n = r;
            return n === e.PlainText || n === e.Markdown
        }
        e.is = t
    }(Ne || (Ne = {}));
    var vr;
    (function(e) {
        function t(r) {
            var n = r;
            return C.objectLiteral(r) && Ne.is(n.kind) && C.string(n.value)
        }
        e.is = t
    }
    )(vr || (vr = {}));
    var he;
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
    )(he || (he = {}));
    var X;
    (function(e) {
        e.PlainText = 1,
        e.Snippet = 2
    }
    )(X || (X = {}));
    var ri;
    (function(e) {
        e.Deprecated = 1
    }
    )(ri || (ri = {}));
    var ni;
    (function(e) {
        function t(n, i, s) {
            return {
                newText: n,
                insert: i,
                replace: s
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return i && C.string(i.newText) && q.is(i.insert) && q.is(i.replace)
        }
        e.is = r
    }
    )(ni || (ni = {}));
    var ii;
    (function(e) {
        e.asIs = 1,
        e.adjustIndentation = 2
    }
    )(ii || (ii = {}));
    var br;
    (function(e) {
        function t(r) {
            return {
                label: r
            }
        }
        e.create = t
    }
    )(br || (br = {}));
    var si;
    (function(e) {
        function t(r, n) {
            return {
                items: r || [],
                isIncomplete: !!n
            }
        }
        e.create = t
    }
    )(si || (si = {}));
    var It;
    (function(e) {
        function t(n) {
            return n.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
        }
        e.fromPlainText = t;
        function r(n) {
            var i = n;
            return C.string(i) || C.objectLiteral(i) && C.string(i.language) && C.string(i.value)
        }
        e.is = r
    }
    )(It || (It = {}));
    var ai;
    (function(e) {
        function t(r) {
            var n = r;
            return !!n && C.objectLiteral(n) && (vr.is(n.contents) || It.is(n.contents) || C.typedArray(n.contents, It.is)) && (r.range === void 0 || q.is(r.range))
        }
        e.is = t
    }
    )(ai || (ai = {}));
    var oi;
    (function(e) {
        function t(r, n) {
            return n ? {
                label: r,
                documentation: n
            } : {
                label: r
            }
        }
        e.create = t
    }
    )(oi || (oi = {}));
    var ui;
    (function(e) {
        function t(r, n) {
            for (var i = [], s = 2; s < arguments.length; s++)
                i[s - 2] = arguments[s];
            var a = {
                label: r
            };
            return C.defined(n) && (a.documentation = n),
            C.defined(i) ? a.parameters = i : a.parameters = [],
            a
        }
        e.create = t
    }
    )(ui || (ui = {}));
    var li;
    (function(e) {
        e.Text = 1,
        e.Read = 2,
        e.Write = 3
    }
    )(li || (li = {}));
    var fi;
    (function(e) {
        function t(r, n) {
            var i = {
                range: r
            };
            return C.number(n) && (i.kind = n),
            i
        }
        e.create = t
    }
    )(fi || (fi = {}));
    var _e;
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
    )(_e || (_e = {}));
    var ci;
    (function(e) {
        e.Deprecated = 1
    }
    )(ci || (ci = {}));
    var hi;
    (function(e) {
        function t(r, n, i, s, a) {
            var o = {
                name: r,
                kind: n,
                location: {
                    uri: s,
                    range: i
                }
            };
            return a && (o.containerName = a),
            o
        }
        e.create = t
    }
    )(hi || (hi = {}));
    var di;
    (function(e) {
        function t(n, i, s, a, o, u) {
            var l = {
                name: n,
                detail: i,
                kind: s,
                range: a,
                selectionRange: o
            };
            return u !== void 0 && (l.children = u),
            l
        }
        e.create = t;
        function r(n) {
            var i = n;
            return i && C.string(i.name) && C.number(i.kind) && q.is(i.range) && q.is(i.selectionRange) && (i.detail === void 0 || C.string(i.detail)) && (i.deprecated === void 0 || C.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags))
        }
        e.is = r
    }
    )(di || (di = {}));
    var gi;
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
    )(gi || (gi = {}));
    var mi;
    (function(e) {
        function t(n, i) {
            var s = {
                diagnostics: n
            };
            return i != null && (s.only = i),
            s
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && C.typedArray(i.diagnostics, we.is) && (i.only === void 0 || C.typedArray(i.only, C.string))
        }
        e.is = r
    }
    )(mi || (mi = {}));
    var pi;
    (function(e) {
        function t(n, i, s) {
            var a = {
                title: n
            }
              , o = !0;
            return typeof i == "string" ? (o = !1,
            a.kind = i) : ht.is(i) ? a.command = i : a.edit = i,
            o && s !== void 0 && (a.kind = s),
            a
        }
        e.create = t;
        function r(n) {
            var i = n;
            return i && C.string(i.title) && (i.diagnostics === void 0 || C.typedArray(i.diagnostics, we.is)) && (i.kind === void 0 || C.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || ht.is(i.command)) && (i.isPreferred === void 0 || C.boolean(i.isPreferred)) && (i.edit === void 0 || pr.is(i.edit))
        }
        e.is = r
    }
    )(pi || (pi = {}));
    var vi;
    (function(e) {
        function t(n, i) {
            var s = {
                range: n
            };
            return C.defined(i) && (s.data = i),
            s
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && q.is(i.range) && (C.undefined(i.command) || ht.is(i.command))
        }
        e.is = r
    }
    )(vi || (vi = {}));
    var bi;
    (function(e) {
        function t(n, i) {
            return {
                tabSize: n,
                insertSpaces: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && C.uinteger(i.tabSize) && C.boolean(i.insertSpaces)
        }
        e.is = r
    }
    )(bi || (bi = {}));
    var yi;
    (function(e) {
        function t(n, i, s) {
            return {
                range: n,
                target: i,
                data: s
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return C.defined(i) && q.is(i.range) && (C.undefined(i.target) || C.string(i.target))
        }
        e.is = r
    }
    )(yi || (yi = {}));
    var Ft;
    (function(e) {
        function t(n, i) {
            return {
                range: n,
                parent: i
            }
        }
        e.create = t;
        function r(n) {
            var i = n;
            return i !== void 0 && q.is(i.range) && (i.parent === void 0 || e.is(i.parent))
        }
        e.is = r
    }
    )(Ft || (Ft = {}));
    var Si;
    (function(e) {
        function t(s, a, o, u) {
            return new ra(s,a,o,u)
        }
        e.create = t;
        function r(s) {
            var a = s;
            return !!(C.defined(a) && C.string(a.uri) && (C.undefined(a.languageId) || C.string(a.languageId)) && C.uinteger(a.lineCount) && C.func(a.getText) && C.func(a.positionAt) && C.func(a.offsetAt))
        }
        e.is = r;
        function n(s, a) {
            for (var o = s.getText(), u = i(a, function(m, v) {
                var b = m.range.start.line - v.range.start.line;
                return b === 0 ? m.range.start.character - v.range.start.character : b
            }), l = o.length, c = u.length - 1; c >= 0; c--) {
                var f = u[c]
                  , h = s.offsetAt(f.range.start)
                  , d = s.offsetAt(f.range.end);
                if (d <= l)
                    o = o.substring(0, h) + f.newText + o.substring(d, o.length);
                else
                    throw new Error("Overlapping edit");
                l = h
            }
            return o
        }
        e.applyEdits = n;
        function i(s, a) {
            if (s.length <= 1)
                return s;
            var o = s.length / 2 | 0
              , u = s.slice(0, o)
              , l = s.slice(o);
            i(u, a),
            i(l, a);
            for (var c = 0, f = 0, h = 0; c < u.length && f < l.length; ) {
                var d = a(u[c], l[f]);
                d <= 0 ? s[h++] = u[c++] : s[h++] = l[f++]
            }
            for (; c < u.length; )
                s[h++] = u[c++];
            for (; f < l.length; )
                s[h++] = l[f++];
            return s
        }
    }
    )(Si || (Si = {}));
    var ra = function() {
        function e(t, r, n, i) {
            this._uri = t,
            this._languageId = r,
            this._version = n,
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
                var r = this.offsetAt(t.start)
                  , n = this.offsetAt(t.end);
                return this._content.substring(r, n)
            }
            return this._content
        }
        ,
        e.prototype.update = function(t, r) {
            this._content = t.text,
            this._version = r,
            this._lineOffsets = void 0
        }
        ,
        e.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
                for (var t = [], r = this._content, n = !0, i = 0; i < r.length; i++) {
                    n && (t.push(i),
                    n = !1);
                    var s = r.charAt(i);
                    n = s === "\r" || s === `
`,
                    s === "\r" && i + 1 < r.length && r.charAt(i + 1) === `
` && i++
                }
                n && r.length > 0 && t.push(r.length),
                this._lineOffsets = t
            }
            return this._lineOffsets
        }
        ,
        e.prototype.positionAt = function(t) {
            t = Math.max(Math.min(t, this._content.length), 0);
            var r = this.getLineOffsets()
              , n = 0
              , i = r.length;
            if (i === 0)
                return pe.create(0, t);
            for (; n < i; ) {
                var s = Math.floor((n + i) / 2);
                r[s] > t ? i = s : n = s + 1
            }
            var a = n - 1;
            return pe.create(a, t - r[a])
        }
        ,
        e.prototype.offsetAt = function(t) {
            var r = this.getLineOffsets();
            if (t.line >= r.length)
                return this._content.length;
            if (t.line < 0)
                return 0;
            var n = r[t.line]
              , i = t.line + 1 < r.length ? r[t.line + 1] : this._content.length;
            return Math.max(Math.min(n + t.character, i), n)
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
    }(), C;
    (function(e) {
        var t = Object.prototype.toString;
        function r(d) {
            return typeof d != "undefined"
        }
        e.defined = r;
        function n(d) {
            return typeof d == "undefined"
        }
        e.undefined = n;
        function i(d) {
            return d === !0 || d === !1
        }
        e.boolean = i;
        function s(d) {
            return t.call(d) === "[object String]"
        }
        e.string = s;
        function a(d) {
            return t.call(d) === "[object Number]"
        }
        e.number = a;
        function o(d, m, v) {
            return t.call(d) === "[object Number]" && m <= d && d <= v
        }
        e.numberRange = o;
        function u(d) {
            return t.call(d) === "[object Number]" && -2147483648 <= d && d <= 2147483647
        }
        e.integer = u;
        function l(d) {
            return t.call(d) === "[object Number]" && 0 <= d && d <= 2147483647
        }
        e.uinteger = l;
        function c(d) {
            return t.call(d) === "[object Function]"
        }
        e.func = c;
        function f(d) {
            return d !== null && typeof d == "object"
        }
        e.objectLiteral = f;
        function h(d, m) {
            return Array.isArray(d) && d.every(m)
        }
        e.typedArray = h
    }
    )(C || (C = {}));
    var _i = function() {
        function e(t, r, n, i) {
            this._uri = t,
            this._languageId = r,
            this._version = n,
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
                var r = this.offsetAt(t.start)
                  , n = this.offsetAt(t.end);
                return this._content.substring(r, n)
            }
            return this._content
        }
        ,
        e.prototype.update = function(t, r) {
            for (var n = 0, i = t; n < i.length; n++) {
                var s = i[n];
                if (e.isIncremental(s)) {
                    var a = wi(s.range)
                      , o = this.offsetAt(a.start)
                      , u = this.offsetAt(a.end);
                    this._content = this._content.substring(0, o) + s.text + this._content.substring(u, this._content.length);
                    var l = Math.max(a.start.line, 0)
                      , c = Math.max(a.end.line, 0)
                      , f = this._lineOffsets
                      , h = Ai(s.text, !1, o);
                    if (c - l === h.length)
                        for (var d = 0, m = h.length; d < m; d++)
                            f[d + l + 1] = h[d];
                    else
                        h.length < 1e4 ? f.splice.apply(f, [l + 1, c - l].concat(h)) : this._lineOffsets = f = f.slice(0, l + 1).concat(h, f.slice(c + 1));
                    var v = s.text.length - (u - o);
                    if (v !== 0)
                        for (var d = l + 1 + h.length, m = f.length; d < m; d++)
                            f[d] = f[d] + v
                } else if (e.isFull(s))
                    this._content = s.text,
                    this._lineOffsets = void 0;
                else
                    throw new Error("Unknown change event received")
            }
            this._version = r
        }
        ,
        e.prototype.getLineOffsets = function() {
            return this._lineOffsets === void 0 && (this._lineOffsets = Ai(this._content, !0)),
            this._lineOffsets
        }
        ,
        e.prototype.positionAt = function(t) {
            t = Math.max(Math.min(t, this._content.length), 0);
            var r = this.getLineOffsets()
              , n = 0
              , i = r.length;
            if (i === 0)
                return {
                    line: 0,
                    character: t
                };
            for (; n < i; ) {
                var s = Math.floor((n + i) / 2);
                r[s] > t ? i = s : n = s + 1
            }
            var a = n - 1;
            return {
                line: a,
                character: t - r[a]
            }
        }
        ,
        e.prototype.offsetAt = function(t) {
            var r = this.getLineOffsets();
            if (t.line >= r.length)
                return this._content.length;
            if (t.line < 0)
                return 0;
            var n = r[t.line]
              , i = t.line + 1 < r.length ? r[t.line + 1] : this._content.length;
            return Math.max(Math.min(n + t.character, i), n)
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
            var r = t;
            return r != null && typeof r.text == "string" && r.range !== void 0 && (r.rangeLength === void 0 || typeof r.rangeLength == "number")
        }
        ,
        e.isFull = function(t) {
            var r = t;
            return r != null && typeof r.text == "string" && r.range === void 0 && r.rangeLength === void 0
        }
        ,
        e
    }(), yr;
    (function(e) {
        function t(i, s, a, o) {
            return new _i(i,s,a,o)
        }
        e.create = t;
        function r(i, s, a) {
            if (i instanceof _i)
                return i.update(s, a),
                i;
            throw new Error("TextDocument.update: document must be created by TextDocument.create")
        }
        e.update = r;
        function n(i, s) {
            for (var a = i.getText(), o = Sr(s.map(na), function(m, v) {
                var b = m.range.start.line - v.range.start.line;
                return b === 0 ? m.range.start.character - v.range.start.character : b
            }), u = 0, l = [], c = 0, f = o; c < f.length; c++) {
                var h = f[c]
                  , d = i.offsetAt(h.range.start);
                if (d < u)
                    throw new Error("Overlapping edit");
                d > u && l.push(a.substring(u, d)),
                h.newText.length && l.push(h.newText),
                u = i.offsetAt(h.range.end)
            }
            return l.push(a.substr(u)),
            l.join("")
        }
        e.applyEdits = n
    }
    )(yr || (yr = {}));
    function Sr(e, t) {
        if (e.length <= 1)
            return e;
        var r = e.length / 2 | 0
          , n = e.slice(0, r)
          , i = e.slice(r);
        Sr(n, t),
        Sr(i, t);
        for (var s = 0, a = 0, o = 0; s < n.length && a < i.length; ) {
            var u = t(n[s], i[a]);
            u <= 0 ? e[o++] = n[s++] : e[o++] = i[a++]
        }
        for (; s < n.length; )
            e[o++] = n[s++];
        for (; a < i.length; )
            e[o++] = i[a++];
        return e
    }
    function Ai(e, t, r) {
        r === void 0 && (r = 0);
        for (var n = t ? [r] : [], i = 0; i < e.length; i++) {
            var s = e.charCodeAt(i);
            (s === 13 || s === 10) && (s === 13 && i + 1 < e.length && e.charCodeAt(i + 1) === 10 && i++,
            n.push(r + i + 1))
        }
        return n
    }
    function wi(e) {
        var t = e.start
          , r = e.end;
        return t.line > r.line || t.line === r.line && t.character > r.character ? {
            start: r,
            end: t
        } : e
    }
    function na(e) {
        var t = wi(e.range);
        return t !== e.range ? {
            newText: e.newText,
            range: t
        } : e
    }
    var W;
    (function(e) {
        e[e.Undefined = 0] = "Undefined",
        e[e.EnumValueMismatch = 1] = "EnumValueMismatch",
        e[e.Deprecated = 2] = "Deprecated",
        e[e.UnexpectedEndOfComment = 257] = "UnexpectedEndOfComment",
        e[e.UnexpectedEndOfString = 258] = "UnexpectedEndOfString",
        e[e.UnexpectedEndOfNumber = 259] = "UnexpectedEndOfNumber",
        e[e.InvalidUnicode = 260] = "InvalidUnicode",
        e[e.InvalidEscapeCharacter = 261] = "InvalidEscapeCharacter",
        e[e.InvalidCharacter = 262] = "InvalidCharacter",
        e[e.PropertyExpected = 513] = "PropertyExpected",
        e[e.CommaExpected = 514] = "CommaExpected",
        e[e.ColonExpected = 515] = "ColonExpected",
        e[e.ValueExpected = 516] = "ValueExpected",
        e[e.CommaOrCloseBacketExpected = 517] = "CommaOrCloseBacketExpected",
        e[e.CommaOrCloseBraceExpected = 518] = "CommaOrCloseBraceExpected",
        e[e.TrailingComma = 519] = "TrailingComma",
        e[e.DuplicateKey = 520] = "DuplicateKey",
        e[e.CommentNotPermitted = 521] = "CommentNotPermitted",
        e[e.SchemaResolveError = 768] = "SchemaResolveError"
    }
    )(W || (W = {}));
    var Ni;
    (function(e) {
        e.LATEST = {
            textDocument: {
                completion: {
                    completionItem: {
                        documentationFormat: [Ne.Markdown, Ne.PlainText],
                        commitCharactersSupport: !0
                    }
                }
            }
        }
    }
    )(Ni || (Ni = {}));
    function ia(e, t) {
        var r;
        return t.length === 0 ? r = e : r = e.replace(/\{(\d+)\}/g, function(n, i) {
            var s = i[0];
            return typeof t[s] != "undefined" ? t[s] : n
        }),
        r
    }
    function sa(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
        return ia(t, r)
    }
    function pt(e) {
        return sa
    }
    var Ve = function() {
        var e = function(t, r) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(n, i) {
                n.__proto__ = i
            }
            || function(n, i) {
                for (var s in i)
                    Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s])
            }
            ,
            e(t, r)
        };
        return function(t, r) {
            if (typeof r != "function" && r !== null)
                throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function n() {
                this.constructor = t
            }
            t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
            new n)
        }
    }()
      , D = pt()
      , aa = {
        "color-hex": {
            errorMessage: D("colorHexFormatWarning", "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."),
            pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/
        },
        "date-time": {
            errorMessage: D("dateTimeFormatWarning", "String is not a RFC3339 date-time."),
            pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
        },
        date: {
            errorMessage: D("dateFormatWarning", "String is not a RFC3339 date."),
            pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i
        },
        time: {
            errorMessage: D("timeFormatWarning", "String is not a RFC3339 time."),
            pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
        },
        email: {
            errorMessage: D("emailFormatWarning", "String is not an e-mail address."),
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    }
      , $e = function() {
        function e(t, r, n) {
            n === void 0 && (n = 0),
            this.offset = r,
            this.length = n,
            this.parent = t
        }
        return Object.defineProperty(e.prototype, "children", {
            get: function() {
                return []
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.toString = function() {
            return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "")
        }
        ,
        e
    }()
      , oa = function(e) {
        Ve(t, e);
        function t(r, n) {
            var i = e.call(this, r, n) || this;
            return i.type = "null",
            i.value = null,
            i
        }
        return t
    }($e)
      , Li = function(e) {
        Ve(t, e);
        function t(r, n, i) {
            var s = e.call(this, r, i) || this;
            return s.type = "boolean",
            s.value = n,
            s
        }
        return t
    }($e)
      , ua = function(e) {
        Ve(t, e);
        function t(r, n) {
            var i = e.call(this, r, n) || this;
            return i.type = "array",
            i.items = [],
            i
        }
        return Object.defineProperty(t.prototype, "children", {
            get: function() {
                return this.items
            },
            enumerable: !1,
            configurable: !0
        }),
        t
    }($e)
      , la = function(e) {
        Ve(t, e);
        function t(r, n) {
            var i = e.call(this, r, n) || this;
            return i.type = "number",
            i.isInteger = !0,
            i.value = Number.NaN,
            i
        }
        return t
    }($e)
      , _r = function(e) {
        Ve(t, e);
        function t(r, n, i) {
            var s = e.call(this, r, n, i) || this;
            return s.type = "string",
            s.value = "",
            s
        }
        return t
    }($e)
      , fa = function(e) {
        Ve(t, e);
        function t(r, n, i) {
            var s = e.call(this, r, n) || this;
            return s.type = "property",
            s.colonOffset = -1,
            s.keyNode = i,
            s
        }
        return Object.defineProperty(t.prototype, "children", {
            get: function() {
                return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode]
            },
            enumerable: !1,
            configurable: !0
        }),
        t
    }($e)
      , ca = function(e) {
        Ve(t, e);
        function t(r, n) {
            var i = e.call(this, r, n) || this;
            return i.type = "object",
            i.properties = [],
            i
        }
        return Object.defineProperty(t.prototype, "children", {
            get: function() {
                return this.properties
            },
            enumerable: !1,
            configurable: !0
        }),
        t
    }($e);
    function oe(e) {
        return Se(e) ? e ? {} : {
            not: {}
        } : e
    }
    var Ci;
    (function(e) {
        e[e.Key = 0] = "Key",
        e[e.Enum = 1] = "Enum"
    }
    )(Ci || (Ci = {}));
    var ha = function() {
        function e(t, r) {
            t === void 0 && (t = -1),
            this.focusOffset = t,
            this.exclude = r,
            this.schemas = []
        }
        return e.prototype.add = function(t) {
            this.schemas.push(t)
        }
        ,
        e.prototype.merge = function(t) {
            Array.prototype.push.apply(this.schemas, t.schemas)
        }
        ,
        e.prototype.include = function(t) {
            return (this.focusOffset === -1 || xi(t, this.focusOffset)) && t !== this.exclude
        }
        ,
        e.prototype.newSub = function() {
            return new e(-1,this.exclude)
        }
        ,
        e
    }()
      , Ar = function() {
        function e() {}
        return Object.defineProperty(e.prototype, "schemas", {
            get: function() {
                return []
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.add = function(t) {}
        ,
        e.prototype.merge = function(t) {}
        ,
        e.prototype.include = function(t) {
            return !0
        }
        ,
        e.prototype.newSub = function() {
            return this
        }
        ,
        e.instance = new e,
        e
    }()
      , ue = function() {
        function e() {
            this.problems = [],
            this.propertiesMatches = 0,
            this.propertiesValueMatches = 0,
            this.primaryValueMatches = 0,
            this.enumValueMatch = !1,
            this.enumValues = void 0
        }
        return e.prototype.hasProblems = function() {
            return !!this.problems.length
        }
        ,
        e.prototype.mergeAll = function(t) {
            for (var r = 0, n = t; r < n.length; r++) {
                var i = n[r];
                this.merge(i)
            }
        }
        ,
        e.prototype.merge = function(t) {
            this.problems = this.problems.concat(t.problems)
        }
        ,
        e.prototype.mergeEnumValues = function(t) {
            if (!this.enumValueMatch && !t.enumValueMatch && this.enumValues && t.enumValues) {
                this.enumValues = this.enumValues.concat(t.enumValues);
                for (var r = 0, n = this.problems; r < n.length; r++) {
                    var i = n[r];
                    i.code === W.EnumValueMismatch && (i.message = D("enumWarning", "Value is not accepted. Valid values: {0}.", this.enumValues.map(function(s) {
                        return JSON.stringify(s)
                    }).join(", ")))
                }
            }
        }
        ,
        e.prototype.mergePropertyMatch = function(t) {
            this.merge(t),
            this.propertiesMatches++,
            (t.enumValueMatch || !t.hasProblems() && t.propertiesMatches) && this.propertiesValueMatches++,
            t.enumValueMatch && t.enumValues && t.enumValues.length === 1 && this.primaryValueMatches++
        }
        ,
        e.prototype.compare = function(t) {
            var r = this.hasProblems();
            return r !== t.hasProblems() ? r ? -1 : 1 : this.enumValueMatch !== t.enumValueMatch ? t.enumValueMatch ? -1 : 1 : this.primaryValueMatches !== t.primaryValueMatches ? this.primaryValueMatches - t.primaryValueMatches : this.propertiesValueMatches !== t.propertiesValueMatches ? this.propertiesValueMatches - t.propertiesValueMatches : this.propertiesMatches - t.propertiesMatches
        }
        ,
        e
    }();
    function da(e, t) {
        return t === void 0 && (t = []),
        new ki(e,t,[])
    }
    function Me(e) {
        return Ks(e)
    }
    function wr(e) {
        return Zs(e)
    }
    function xi(e, t, r) {
        return r === void 0 && (r = !1),
        t >= e.offset && t < e.offset + e.length || r && t === e.offset + e.length
    }
    var ki = function() {
        function e(t, r, n) {
            r === void 0 && (r = []),
            n === void 0 && (n = []),
            this.root = t,
            this.syntaxErrors = r,
            this.comments = n
        }
        return e.prototype.getNodeFromOffset = function(t, r) {
            if (r === void 0 && (r = !1),
            this.root)
                return Xs(this.root, t, r)
        }
        ,
        e.prototype.visit = function(t) {
            if (this.root) {
                var r = function(n) {
                    var i = t(n)
                      , s = n.children;
                    if (Array.isArray(s))
                        for (var a = 0; a < s.length && i; a++)
                            i = r(s[a]);
                    return i
                };
                r(this.root)
            }
        }
        ,
        e.prototype.validate = function(t, r, n) {
            if (n === void 0 && (n = ce.Warning),
            this.root && r) {
                var i = new ue;
                return te(this.root, r, i, Ar.instance),
                i.problems.map(function(s) {
                    var a, o = q.create(t.positionAt(s.location.offset), t.positionAt(s.location.offset + s.location.length));
                    return we.create(o, s.message, (a = s.severity) !== null && a !== void 0 ? a : n, s.code)
                })
            }
        }
        ,
        e.prototype.getMatchingSchemas = function(t, r, n) {
            r === void 0 && (r = -1);
            var i = new ha(r,n);
            return this.root && t && te(this.root, t, new ue, i),
            i.schemas
        }
        ,
        e
    }();
    function te(e, t, r, n) {
        if (!e || !n.include(e))
            return;
        var i = e;
        switch (i.type) {
        case "object":
            l(i, t, r, n);
            break;
        case "array":
            u(i, t, r, n);
            break;
        case "string":
            o(i, t, r);
            break;
        case "number":
            a(i, t, r);
            break;
        case "property":
            return te(i.valueNode, t, r, n)
        }
        s(),
        n.add({
            node: i,
            schema: t
        });
        function s() {
            function c(F) {
                return i.type === F || F === "integer" && i.type === "number" && i.isInteger
            }
            if (Array.isArray(t.type) ? t.type.some(c) || r.problems.push({
                location: {
                    offset: i.offset,
                    length: i.length
                },
                message: t.errorMessage || D("typeArrayMismatchWarning", "Incorrect type. Expected one of {0}.", t.type.join(", "))
            }) : t.type && (c(t.type) || r.problems.push({
                location: {
                    offset: i.offset,
                    length: i.length
                },
                message: t.errorMessage || D("typeMismatchWarning", 'Incorrect type. Expected "{0}".', t.type)
            })),
            Array.isArray(t.allOf))
                for (var f = 0, h = t.allOf; f < h.length; f++) {
                    var d = h[f];
                    te(i, oe(d), r, n)
                }
            var m = oe(t.not);
            if (m) {
                var v = new ue
                  , b = n.newSub();
                te(i, m, v, b),
                v.hasProblems() || r.problems.push({
                    location: {
                        offset: i.offset,
                        length: i.length
                    },
                    message: D("notSchemaWarning", "Matches a schema that is not allowed.")
                });
                for (var N = 0, p = b.schemas; N < p.length; N++) {
                    var g = p[N];
                    g.inverted = !g.inverted,
                    n.add(g)
                }
            }
            var _ = function(F, V) {
                for (var z = [], P = void 0, x = 0, E = F; x < E.length; x++) {
                    var I = E[x]
                      , $ = oe(I)
                      , j = new ue
                      , O = n.newSub();
                    if (te(i, $, j, O),
                    j.hasProblems() || z.push($),
                    !P)
                        P = {
                            schema: $,
                            validationResult: j,
                            matchingSchemas: O
                        };
                    else if (!V && !j.hasProblems() && !P.validationResult.hasProblems())
                        P.matchingSchemas.merge(O),
                        P.validationResult.propertiesMatches += j.propertiesMatches,
                        P.validationResult.propertiesValueMatches += j.propertiesValueMatches;
                    else {
                        var B = j.compare(P.validationResult);
                        B > 0 ? P = {
                            schema: $,
                            validationResult: j,
                            matchingSchemas: O
                        } : B === 0 && (P.matchingSchemas.merge(O),
                        P.validationResult.mergeEnumValues(j))
                    }
                }
                return z.length > 1 && V && r.problems.push({
                    location: {
                        offset: i.offset,
                        length: 1
                    },
                    message: D("oneOfWarning", "Matches multiple schemas when only one must validate.")
                }),
                P && (r.merge(P.validationResult),
                r.propertiesMatches += P.validationResult.propertiesMatches,
                r.propertiesValueMatches += P.validationResult.propertiesValueMatches,
                n.merge(P.matchingSchemas)),
                z.length
            };
            Array.isArray(t.anyOf) && _(t.anyOf, !1),
            Array.isArray(t.oneOf) && _(t.oneOf, !0);
            var L = function(F) {
                var V = new ue
                  , z = n.newSub();
                te(i, oe(F), V, z),
                r.merge(V),
                r.propertiesMatches += V.propertiesMatches,
                r.propertiesValueMatches += V.propertiesValueMatches,
                n.merge(z)
            }
              , S = function(F, V, z) {
                var P = oe(F)
                  , x = new ue
                  , E = n.newSub();
                te(i, P, x, E),
                n.merge(E),
                x.hasProblems() ? z && L(z) : V && L(V)
            }
              , A = oe(t.if);
            if (A && S(A, oe(t.then), oe(t.else)),
            Array.isArray(t.enum)) {
                for (var w = Me(i), y = !1, T = 0, M = t.enum; T < M.length; T++) {
                    var k = M[T];
                    if (ut(w, k)) {
                        y = !0;
                        break
                    }
                }
                r.enumValues = t.enum,
                r.enumValueMatch = y,
                y || r.problems.push({
                    location: {
                        offset: i.offset,
                        length: i.length
                    },
                    code: W.EnumValueMismatch,
                    message: t.errorMessage || D("enumWarning", "Value is not accepted. Valid values: {0}.", t.enum.map(function(F) {
                        return JSON.stringify(F)
                    }).join(", "))
                })
            }
            if (Ae(t.const)) {
                var w = Me(i);
                ut(w, t.const) ? r.enumValueMatch = !0 : (r.problems.push({
                    location: {
                        offset: i.offset,
                        length: i.length
                    },
                    code: W.EnumValueMismatch,
                    message: t.errorMessage || D("constWarning", "Value must be {0}.", JSON.stringify(t.const))
                }),
                r.enumValueMatch = !1),
                r.enumValues = [t.const]
            }
            t.deprecationMessage && i.parent && r.problems.push({
                location: {
                    offset: i.parent.offset,
                    length: i.parent.length
                },
                severity: ce.Warning,
                message: t.deprecationMessage,
                code: W.Deprecated
            })
        }
        function a(c, f, h, d) {
            var m = c.value;
            function v(T) {
                var M, k = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(T.toString());
                return k && {
                    value: Number(k[1] + (k[2] || "")),
                    multiplier: (((M = k[2]) === null || M === void 0 ? void 0 : M.length) || 0) - (parseInt(k[3]) || 0)
                }
            }
            if (fe(f.multipleOf)) {
                var b = -1;
                if (Number.isInteger(f.multipleOf))
                    b = m % f.multipleOf;
                else {
                    var N = v(f.multipleOf)
                      , p = v(m);
                    if (N && p) {
                        var g = Math.pow(10, Math.abs(p.multiplier - N.multiplier));
                        p.multiplier < N.multiplier ? p.value *= g : N.value *= g,
                        b = p.value % N.value
                    }
                }
                b !== 0 && h.problems.push({
                    location: {
                        offset: c.offset,
                        length: c.length
                    },
                    message: D("multipleOfWarning", "Value is not divisible by {0}.", f.multipleOf)
                })
            }
            function _(T, M) {
                if (fe(M))
                    return M;
                if (Se(M) && M)
                    return T
            }
            function L(T, M) {
                if (!Se(M) || !M)
                    return T
            }
            var S = _(f.minimum, f.exclusiveMinimum);
            fe(S) && m <= S && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("exclusiveMinimumWarning", "Value is below the exclusive minimum of {0}.", S)
            });
            var A = _(f.maximum, f.exclusiveMaximum);
            fe(A) && m >= A && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("exclusiveMaximumWarning", "Value is above the exclusive maximum of {0}.", A)
            });
            var w = L(f.minimum, f.exclusiveMinimum);
            fe(w) && m < w && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("minimumWarning", "Value is below the minimum of {0}.", w)
            });
            var y = L(f.maximum, f.exclusiveMaximum);
            fe(y) && m > y && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("maximumWarning", "Value is above the maximum of {0}.", y)
            })
        }
        function o(c, f, h, d) {
            if (fe(f.minLength) && c.value.length < f.minLength && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("minLengthWarning", "String is shorter than the minimum length of {0}.", f.minLength)
            }),
            fe(f.maxLength) && c.value.length > f.maxLength && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("maxLengthWarning", "String is longer than the maximum length of {0}.", f.maxLength)
            }),
            ta(f.pattern)) {
                var m = kt(f.pattern);
                m.test(c.value) || h.problems.push({
                    location: {
                        offset: c.offset,
                        length: c.length
                    },
                    message: f.patternErrorMessage || f.errorMessage || D("patternWarning", 'String does not match the pattern of "{0}".', f.pattern)
                })
            }
            if (f.format)
                switch (f.format) {
                case "uri":
                case "uri-reference":
                    {
                        var v = void 0;
                        if (!c.value)
                            v = D("uriEmpty", "URI expected.");
                        else {
                            var b = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(c.value);
                            b ? !b[2] && f.format === "uri" && (v = D("uriSchemeMissing", "URI with a scheme is expected.")) : v = D("uriMissing", "URI is expected.")
                        }
                        v && h.problems.push({
                            location: {
                                offset: c.offset,
                                length: c.length
                            },
                            message: f.patternErrorMessage || f.errorMessage || D("uriFormatWarning", "String is not a URI: {0}", v)
                        })
                    }
                    break;
                case "color-hex":
                case "date-time":
                case "date":
                case "time":
                case "email":
                    var N = aa[f.format];
                    (!c.value || !N.pattern.exec(c.value)) && h.problems.push({
                        location: {
                            offset: c.offset,
                            length: c.length
                        },
                        message: f.patternErrorMessage || f.errorMessage || N.errorMessage
                    })
                }
        }
        function u(c, f, h, d) {
            if (Array.isArray(f.items)) {
                for (var m = f.items, v = 0; v < m.length; v++) {
                    var b = m[v]
                      , N = oe(b)
                      , p = new ue
                      , g = c.items[v];
                    g ? (te(g, N, p, d),
                    h.mergePropertyMatch(p)) : c.items.length >= m.length && h.propertiesValueMatches++
                }
                if (c.items.length > m.length)
                    if (typeof f.additionalItems == "object")
                        for (var _ = m.length; _ < c.items.length; _++) {
                            var p = new ue;
                            te(c.items[_], f.additionalItems, p, d),
                            h.mergePropertyMatch(p)
                        }
                    else
                        f.additionalItems === !1 && h.problems.push({
                            location: {
                                offset: c.offset,
                                length: c.length
                            },
                            message: D("additionalItemsWarning", "Array has too many items according to schema. Expected {0} or fewer.", m.length)
                        })
            } else {
                var L = oe(f.items);
                if (L)
                    for (var S = 0, A = c.items; S < A.length; S++) {
                        var g = A[S]
                          , p = new ue;
                        te(g, L, p, d),
                        h.mergePropertyMatch(p)
                    }
            }
            var w = oe(f.contains);
            if (w) {
                var y = c.items.some(function(k) {
                    var F = new ue;
                    return te(k, w, F, Ar.instance),
                    !F.hasProblems()
                });
                y || h.problems.push({
                    location: {
                        offset: c.offset,
                        length: c.length
                    },
                    message: f.errorMessage || D("requiredItemMissingWarning", "Array does not contain required item.")
                })
            }
            if (fe(f.minItems) && c.items.length < f.minItems && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("minItemsWarning", "Array has too few items. Expected {0} or more.", f.minItems)
            }),
            fe(f.maxItems) && c.items.length > f.maxItems && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("maxItemsWarning", "Array has too many items. Expected {0} or fewer.", f.maxItems)
            }),
            f.uniqueItems === !0) {
                var T = Me(c)
                  , M = T.some(function(k, F) {
                    return F !== T.lastIndexOf(k)
                });
                M && h.problems.push({
                    location: {
                        offset: c.offset,
                        length: c.length
                    },
                    message: D("uniqueItemsWarning", "Array has duplicate items.")
                })
            }
        }
        function l(c, f, h, d) {
            for (var m = Object.create(null), v = [], b = 0, N = c.properties; b < N.length; b++) {
                var p = N[b]
                  , g = p.keyNode.value;
                m[g] = p.valueNode,
                v.push(g)
            }
            if (Array.isArray(f.required))
                for (var _ = 0, L = f.required; _ < L.length; _++) {
                    var S = L[_];
                    if (!m[S]) {
                        var A = c.parent && c.parent.type === "property" && c.parent.keyNode
                          , w = A ? {
                            offset: A.offset,
                            length: A.length
                        } : {
                            offset: c.offset,
                            length: 1
                        };
                        h.problems.push({
                            location: w,
                            message: D("MissingRequiredPropWarning", 'Missing property "{0}".', S)
                        })
                    }
                }
            var y = function($i) {
                for (var Dr = v.indexOf($i); Dr >= 0; )
                    v.splice(Dr, 1),
                    Dr = v.indexOf($i)
            };
            if (f.properties)
                for (var T = 0, M = Object.keys(f.properties); T < M.length; T++) {
                    var S = M[T];
                    y(S);
                    var k = f.properties[S]
                      , F = m[S];
                    if (F)
                        if (Se(k))
                            if (k)
                                h.propertiesMatches++,
                                h.propertiesValueMatches++;
                            else {
                                var p = F.parent;
                                h.problems.push({
                                    location: {
                                        offset: p.keyNode.offset,
                                        length: p.keyNode.length
                                    },
                                    message: f.errorMessage || D("DisallowedExtraPropWarning", "Property {0} is not allowed.", S)
                                })
                            }
                        else {
                            var V = new ue;
                            te(F, k, V, d),
                            h.mergePropertyMatch(V)
                        }
                }
            if (f.patternProperties)
                for (var z = 0, P = Object.keys(f.patternProperties); z < P.length; z++)
                    for (var x = P[z], E = kt(x), I = 0, $ = v.slice(0); I < $.length; I++) {
                        var S = $[I];
                        if (E.test(S)) {
                            y(S);
                            var F = m[S];
                            if (F) {
                                var k = f.patternProperties[x];
                                if (Se(k))
                                    if (k)
                                        h.propertiesMatches++,
                                        h.propertiesValueMatches++;
                                    else {
                                        var p = F.parent;
                                        h.problems.push({
                                            location: {
                                                offset: p.keyNode.offset,
                                                length: p.keyNode.length
                                            },
                                            message: f.errorMessage || D("DisallowedExtraPropWarning", "Property {0} is not allowed.", S)
                                        })
                                    }
                                else {
                                    var V = new ue;
                                    te(F, k, V, d),
                                    h.mergePropertyMatch(V)
                                }
                            }
                        }
                    }
            if (typeof f.additionalProperties == "object")
                for (var j = 0, O = v; j < O.length; j++) {
                    var S = O[j]
                      , F = m[S];
                    if (F) {
                        var V = new ue;
                        te(F, f.additionalProperties, V, d),
                        h.mergePropertyMatch(V)
                    }
                }
            else if (f.additionalProperties === !1 && v.length > 0)
                for (var B = 0, re = v; B < re.length; B++) {
                    var S = re[B]
                      , F = m[S];
                    if (F) {
                        var p = F.parent;
                        h.problems.push({
                            location: {
                                offset: p.keyNode.offset,
                                length: p.keyNode.length
                            },
                            message: f.errorMessage || D("DisallowedExtraPropWarning", "Property {0} is not allowed.", S)
                        })
                    }
                }
            if (fe(f.maxProperties) && c.properties.length > f.maxProperties && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("MaxPropWarning", "Object has more properties than limit of {0}.", f.maxProperties)
            }),
            fe(f.minProperties) && c.properties.length < f.minProperties && h.problems.push({
                location: {
                    offset: c.offset,
                    length: c.length
                },
                message: D("MinPropWarning", "Object has fewer properties than the required number of {0}", f.minProperties)
            }),
            f.dependencies)
                for (var de = 0, qe = Object.keys(f.dependencies); de < qe.length; de++) {
                    var g = qe[de]
                      , De = m[g];
                    if (De) {
                        var Er = f.dependencies[g];
                        if (Array.isArray(Er))
                            for (var Ir = 0, Ui = Er; Ir < Ui.length; Ir++) {
                                var Ri = Ui[Ir];
                                m[Ri] ? h.propertiesValueMatches++ : h.problems.push({
                                    location: {
                                        offset: c.offset,
                                        length: c.length
                                    },
                                    message: D("RequiredDependentPropWarning", "Object is missing property {0} required by property {1}.", Ri, g)
                                })
                            }
                        else {
                            var k = oe(Er);
                            if (k) {
                                var V = new ue;
                                te(c, k, V, d),
                                h.mergePropertyMatch(V)
                            }
                        }
                    }
                }
            var Oi = oe(f.propertyNames);
            if (Oi)
                for (var Fr = 0, Vi = c.properties; Fr < Vi.length; Fr++) {
                    var Ja = Vi[Fr]
                      , g = Ja.keyNode;
                    g && te(g, Oi, h, Ar.instance)
                }
        }
    }
    function ga(e, t) {
        var r = []
          , n = -1
          , i = e.getText()
          , s = Ze(i, !1)
          , a = t && t.collectComments ? [] : void 0;
        function o() {
            for (; ; ) {
                var S = s.scan();
                switch (c(),
                S) {
                case 12:
                case 13:
                    Array.isArray(a) && a.push(q.create(e.positionAt(s.getTokenOffset()), e.positionAt(s.getTokenOffset() + s.getTokenLength())));
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return S
                }
            }
        }
        function u(S, A, w, y, T) {
            if (T === void 0 && (T = ce.Error),
            r.length === 0 || w !== n) {
                var M = q.create(e.positionAt(w), e.positionAt(y));
                r.push(we.create(M, S, T, A, e.languageId)),
                n = w
            }
        }
        function l(S, A, w, y, T) {
            w === void 0 && (w = void 0),
            y === void 0 && (y = []),
            T === void 0 && (T = []);
            var M = s.getTokenOffset()
              , k = s.getTokenOffset() + s.getTokenLength();
            if (M === k && M > 0) {
                for (M--; M > 0 && /\s/.test(i.charAt(M)); )
                    M--;
                k = M + 1
            }
            if (u(S, A, M, k),
            w && f(w, !1),
            y.length + T.length > 0)
                for (var F = s.getToken(); F !== 17; ) {
                    if (y.indexOf(F) !== -1) {
                        o();
                        break
                    } else if (T.indexOf(F) !== -1)
                        break;
                    F = o()
                }
            return w
        }
        function c() {
            switch (s.getTokenError()) {
            case 4:
                return l(D("InvalidUnicode", "Invalid unicode sequence in string."), W.InvalidUnicode),
                !0;
            case 5:
                return l(D("InvalidEscapeCharacter", "Invalid escape character in string."), W.InvalidEscapeCharacter),
                !0;
            case 3:
                return l(D("UnexpectedEndOfNumber", "Unexpected end of number."), W.UnexpectedEndOfNumber),
                !0;
            case 1:
                return l(D("UnexpectedEndOfComment", "Unexpected end of comment."), W.UnexpectedEndOfComment),
                !0;
            case 2:
                return l(D("UnexpectedEndOfString", "Unexpected end of string."), W.UnexpectedEndOfString),
                !0;
            case 6:
                return l(D("InvalidCharacter", "Invalid characters in string. Control characters must be escaped."), W.InvalidCharacter),
                !0
            }
            return !1
        }
        function f(S, A) {
            return S.length = s.getTokenOffset() + s.getTokenLength() - S.offset,
            A && o(),
            S
        }
        function h(S) {
            if (s.getToken() === 3) {
                var A = new ua(S,s.getTokenOffset());
                o();
                for (var w = !1; s.getToken() !== 4 && s.getToken() !== 17; ) {
                    if (s.getToken() === 5) {
                        w || l(D("ValueExpected", "Value expected"), W.ValueExpected);
                        var y = s.getTokenOffset();
                        if (o(),
                        s.getToken() === 4) {
                            w && u(D("TrailingComma", "Trailing comma"), W.TrailingComma, y, y + 1);
                            continue
                        }
                    } else
                        w && l(D("ExpectedComma", "Expected comma"), W.CommaExpected);
                    var T = g(A);
                    T ? A.items.push(T) : l(D("PropertyExpected", "Value expected"), W.ValueExpected, void 0, [], [4, 5]),
                    w = !0
                }
                return s.getToken() !== 4 ? l(D("ExpectedCloseBracket", "Expected comma or closing bracket"), W.CommaOrCloseBacketExpected, A) : f(A, !0)
            }
        }
        var d = new _r(void 0,0,0);
        function m(S, A) {
            var w = new fa(S,s.getTokenOffset(),d)
              , y = b(w);
            if (!y)
                if (s.getToken() === 16) {
                    l(D("DoubleQuotesExpected", "Property keys must be doublequoted"), W.Undefined);
                    var T = new _r(w,s.getTokenOffset(),s.getTokenLength());
                    T.value = s.getTokenValue(),
                    y = T,
                    o()
                } else
                    return;
            w.keyNode = y;
            var M = A[y.value];
            if (M ? (u(D("DuplicateKeyWarning", "Duplicate object key"), W.DuplicateKey, w.keyNode.offset, w.keyNode.offset + w.keyNode.length, ce.Warning),
            typeof M == "object" && u(D("DuplicateKeyWarning", "Duplicate object key"), W.DuplicateKey, M.keyNode.offset, M.keyNode.offset + M.keyNode.length, ce.Warning),
            A[y.value] = !0) : A[y.value] = w,
            s.getToken() === 6)
                w.colonOffset = s.getTokenOffset(),
                o();
            else if (l(D("ColonExpected", "Colon expected"), W.ColonExpected),
            s.getToken() === 10 && e.positionAt(y.offset + y.length).line < e.positionAt(s.getTokenOffset()).line)
                return w.length = y.length,
                w;
            var k = g(w);
            return k ? (w.valueNode = k,
            w.length = k.offset + k.length - w.offset,
            w) : l(D("ValueExpected", "Value expected"), W.ValueExpected, w, [], [2, 5])
        }
        function v(S) {
            if (s.getToken() === 1) {
                var A = new ca(S,s.getTokenOffset())
                  , w = Object.create(null);
                o();
                for (var y = !1; s.getToken() !== 2 && s.getToken() !== 17; ) {
                    if (s.getToken() === 5) {
                        y || l(D("PropertyExpected", "Property expected"), W.PropertyExpected);
                        var T = s.getTokenOffset();
                        if (o(),
                        s.getToken() === 2) {
                            y && u(D("TrailingComma", "Trailing comma"), W.TrailingComma, T, T + 1);
                            continue
                        }
                    } else
                        y && l(D("ExpectedComma", "Expected comma"), W.CommaExpected);
                    var M = m(A, w);
                    M ? A.properties.push(M) : l(D("PropertyExpected", "Property expected"), W.PropertyExpected, void 0, [], [2, 5]),
                    y = !0
                }
                return s.getToken() !== 2 ? l(D("ExpectedCloseBrace", "Expected comma or closing brace"), W.CommaOrCloseBraceExpected, A) : f(A, !0)
            }
        }
        function b(S) {
            if (s.getToken() === 10) {
                var A = new _r(S,s.getTokenOffset());
                return A.value = s.getTokenValue(),
                f(A, !0)
            }
        }
        function N(S) {
            if (s.getToken() === 11) {
                var A = new la(S,s.getTokenOffset());
                if (s.getTokenError() === 0) {
                    var w = s.getTokenValue();
                    try {
                        var y = JSON.parse(w);
                        if (!fe(y))
                            return l(D("InvalidNumberFormat", "Invalid number format."), W.Undefined, A);
                        A.value = y
                    } catch {
                        return l(D("InvalidNumberFormat", "Invalid number format."), W.Undefined, A)
                    }
                    A.isInteger = w.indexOf(".") === -1
                }
                return f(A, !0)
            }
        }
        function p(S) {
            switch (s.getToken()) {
            case 7:
                return f(new oa(S,s.getTokenOffset()), !0);
            case 8:
                return f(new Li(S,!0,s.getTokenOffset()), !0);
            case 9:
                return f(new Li(S,!1,s.getTokenOffset()), !0);
            default:
                return
            }
        }
        function g(S) {
            return h(S) || v(S) || b(S) || N(S) || p(S)
        }
        var _ = void 0
          , L = o();
        return L !== 17 && (_ = g(_),
        _ ? s.getToken() !== 17 && l(D("End of file expected", "End of file expected."), W.Undefined) : l(D("Invalid symbol", "Expected a JSON object, array or literal."), W.Undefined)),
        new ki(_,r,a)
    }
    function Nr(e, t, r) {
        if (e !== null && typeof e == "object") {
            var n = t + "	";
            if (Array.isArray(e)) {
                if (e.length === 0)
                    return "[]";
                for (var i = `[
`, s = 0; s < e.length; s++)
                    i += n + Nr(e[s], n, r),
                    s < e.length - 1 && (i += ","),
                    i += `
`;
                return i += t + "]",
                i
            } else {
                var a = Object.keys(e);
                if (a.length === 0)
                    return "{}";
                for (var i = `{
`, s = 0; s < a.length; s++) {
                    var o = a[s];
                    i += n + JSON.stringify(o) + ": " + Nr(e[o], n, r),
                    s < a.length - 1 && (i += ","),
                    i += `
`
                }
                return i += t + "}",
                i
            }
        }
        return r(e)
    }
    var Lr = pt()
      , ma = function() {
        function e(t, r, n, i) {
            r === void 0 && (r = []),
            n === void 0 && (n = Promise),
            i === void 0 && (i = {}),
            this.schemaService = t,
            this.contributions = r,
            this.promiseConstructor = n,
            this.clientCapabilities = i
        }
        return e.prototype.doResolve = function(t) {
            for (var r = this.contributions.length - 1; r >= 0; r--) {
                var n = this.contributions[r].resolveCompletion;
                if (n) {
                    var i = n(t);
                    if (i)
                        return i
                }
            }
            return this.promiseConstructor.resolve(t)
        }
        ,
        e.prototype.doComplete = function(t, r, n) {
            var i = this
              , s = {
                items: [],
                isIncomplete: !1
            }
              , a = t.getText()
              , o = t.offsetAt(r)
              , u = n.getNodeFromOffset(o, !0);
            if (this.isInComment(t, u ? u.offset : 0, o))
                return Promise.resolve(s);
            if (u && o === u.offset + u.length && o > 0) {
                var l = a[o - 1];
                (u.type === "object" && l === "}" || u.type === "array" && l === "]") && (u = u.parent)
            }
            var c = this.getCurrentWord(t, o), f;
            if (u && (u.type === "string" || u.type === "number" || u.type === "boolean" || u.type === "null"))
                f = q.create(t.positionAt(u.offset), t.positionAt(u.offset + u.length));
            else {
                var h = o - c.length;
                h > 0 && a[h - 1] === '"' && h--,
                f = q.create(t.positionAt(h), r)
            }
            var d = {}
              , m = {
                add: function(v) {
                    var b = v.label
                      , N = d[b];
                    if (N)
                        N.documentation || (N.documentation = v.documentation),
                        N.detail || (N.detail = v.detail);
                    else {
                        if (b = b.replace(/[\n]/g, "\u21B5"),
                        b.length > 60) {
                            var p = b.substr(0, 57).trim() + "...";
                            d[p] || (b = p)
                        }
                        f && v.insertText !== void 0 && (v.textEdit = ve.replace(f, v.insertText)),
                        v.label = b,
                        d[b] = v,
                        s.items.push(v)
                    }
                },
                setAsIncomplete: function() {
                    s.isIncomplete = !0
                },
                error: function(v) {
                    console.error(v)
                },
                log: function(v) {
                    console.log(v)
                },
                getNumberOfProposals: function() {
                    return s.items.length
                }
            };
            return this.schemaService.getSchemaForResource(t.uri, n).then(function(v) {
                var b = []
                  , N = !0
                  , p = ""
                  , g = void 0;
                if (u && u.type === "string") {
                    var _ = u.parent;
                    _ && _.type === "property" && _.keyNode === u && (N = !_.valueNode,
                    g = _,
                    p = a.substr(u.offset + 1, u.length - 2),
                    _ && (u = _.parent))
                }
                if (u && u.type === "object") {
                    if (u.offset === o)
                        return s;
                    var L = u.properties;
                    L.forEach(function(y) {
                        (!g || g !== y) && (d[y.keyNode.value] = br.create("__"))
                    });
                    var S = "";
                    N && (S = i.evaluateSeparatorAfter(t, t.offsetAt(f.end))),
                    v ? i.getPropertyCompletions(v, n, u, N, S, m) : i.getSchemaLessPropertyCompletions(n, u, p, m);
                    var A = wr(u);
                    i.contributions.forEach(function(y) {
                        var T = y.collectPropertyCompletions(t.uri, A, c, N, S === "", m);
                        T && b.push(T)
                    }),
                    !v && c.length > 0 && a.charAt(o - c.length - 1) !== '"' && (m.add({
                        kind: he.Property,
                        label: i.getLabelForValue(c),
                        insertText: i.getInsertTextForProperty(c, void 0, !1, S),
                        insertTextFormat: X.Snippet,
                        documentation: ""
                    }),
                    m.setAsIncomplete())
                }
                var w = {};
                return v ? i.getValueCompletions(v, n, u, o, t, m, w) : i.getSchemaLessValueCompletions(n, u, o, t, m),
                i.contributions.length > 0 && i.getContributedValueCompletions(n, u, o, t, m, b),
                i.promiseConstructor.all(b).then(function() {
                    if (m.getNumberOfProposals() === 0) {
                        var y = o;
                        u && (u.type === "string" || u.type === "number" || u.type === "boolean" || u.type === "null") && (y = u.offset + u.length);
                        var T = i.evaluateSeparatorAfter(t, y);
                        i.addFillerValueCompletions(w, T, m)
                    }
                    return s
                })
            })
        }
        ,
        e.prototype.getPropertyCompletions = function(t, r, n, i, s, a) {
            var o = this
              , u = r.getMatchingSchemas(t.schema, n.offset);
            u.forEach(function(l) {
                if (l.node === n && !l.inverted) {
                    var c = l.schema.properties;
                    c && Object.keys(c).forEach(function(v) {
                        var b = c[v];
                        if (typeof b == "object" && !b.deprecationMessage && !b.doNotSuggest) {
                            var N = {
                                kind: he.Property,
                                label: v,
                                insertText: o.getInsertTextForProperty(v, b, i, s),
                                insertTextFormat: X.Snippet,
                                filterText: o.getFilterTextForValue(v),
                                documentation: o.fromMarkup(b.markdownDescription) || b.description || ""
                            };
                            b.suggestSortText !== void 0 && (N.sortText = b.suggestSortText),
                            N.insertText && lt(N.insertText, "$1" + s) && (N.command = {
                                title: "Suggest",
                                command: "editor.action.triggerSuggest"
                            }),
                            a.add(N)
                        }
                    });
                    var f = l.schema.propertyNames;
                    if (typeof f == "object" && !f.deprecationMessage && !f.doNotSuggest) {
                        var h = function(v, b) {
                            b === void 0 && (b = void 0);
                            var N = {
                                kind: he.Property,
                                label: v,
                                insertText: o.getInsertTextForProperty(v, void 0, i, s),
                                insertTextFormat: X.Snippet,
                                filterText: o.getFilterTextForValue(v),
                                documentation: b || o.fromMarkup(f.markdownDescription) || f.description || ""
                            };
                            f.suggestSortText !== void 0 && (N.sortText = f.suggestSortText),
                            N.insertText && lt(N.insertText, "$1" + s) && (N.command = {
                                title: "Suggest",
                                command: "editor.action.triggerSuggest"
                            }),
                            a.add(N)
                        };
                        if (f.enum)
                            for (var d = 0; d < f.enum.length; d++) {
                                var m = void 0;
                                f.markdownEnumDescriptions && d < f.markdownEnumDescriptions.length ? m = o.fromMarkup(f.markdownEnumDescriptions[d]) : f.enumDescriptions && d < f.enumDescriptions.length && (m = f.enumDescriptions[d]),
                                h(f.enum[d], m)
                            }
                        f.const && h(f.const)
                    }
                }
            })
        }
        ,
        e.prototype.getSchemaLessPropertyCompletions = function(t, r, n, i) {
            var s = this
              , a = function(u) {
                u.properties.forEach(function(l) {
                    var c = l.keyNode.value;
                    i.add({
                        kind: he.Property,
                        label: c,
                        insertText: s.getInsertTextForValue(c, ""),
                        insertTextFormat: X.Snippet,
                        filterText: s.getFilterTextForValue(c),
                        documentation: ""
                    })
                })
            };
            if (r.parent)
                if (r.parent.type === "property") {
                    var o = r.parent.keyNode.value;
                    t.visit(function(u) {
                        return u.type === "property" && u !== r.parent && u.keyNode.value === o && u.valueNode && u.valueNode.type === "object" && a(u.valueNode),
                        !0
                    })
                } else
                    r.parent.type === "array" && r.parent.items.forEach(function(u) {
                        u.type === "object" && u !== r && a(u)
                    });
            else
                r.type === "object" && i.add({
                    kind: he.Property,
                    label: "$schema",
                    insertText: this.getInsertTextForProperty("$schema", void 0, !0, ""),
                    insertTextFormat: X.Snippet,
                    documentation: "",
                    filterText: this.getFilterTextForValue("$schema")
                })
        }
        ,
        e.prototype.getSchemaLessValueCompletions = function(t, r, n, i, s) {
            var a = this
              , o = n;
            if (r && (r.type === "string" || r.type === "number" || r.type === "boolean" || r.type === "null") && (o = r.offset + r.length,
            r = r.parent),
            !r) {
                s.add({
                    kind: this.getSuggestionKind("object"),
                    label: "Empty object",
                    insertText: this.getInsertTextForValue({}, ""),
                    insertTextFormat: X.Snippet,
                    documentation: ""
                }),
                s.add({
                    kind: this.getSuggestionKind("array"),
                    label: "Empty array",
                    insertText: this.getInsertTextForValue([], ""),
                    insertTextFormat: X.Snippet,
                    documentation: ""
                });
                return
            }
            var u = this.evaluateSeparatorAfter(i, o)
              , l = function(d) {
                d.parent && !xi(d.parent, n, !0) && s.add({
                    kind: a.getSuggestionKind(d.type),
                    label: a.getLabelTextForMatchingNode(d, i),
                    insertText: a.getInsertTextForMatchingNode(d, i, u),
                    insertTextFormat: X.Snippet,
                    documentation: ""
                }),
                d.type === "boolean" && a.addBooleanValueCompletion(!d.value, u, s)
            };
            if (r.type === "property" && n > (r.colonOffset || 0)) {
                var c = r.valueNode;
                if (c && (n > c.offset + c.length || c.type === "object" || c.type === "array"))
                    return;
                var f = r.keyNode.value;
                t.visit(function(d) {
                    return d.type === "property" && d.keyNode.value === f && d.valueNode && l(d.valueNode),
                    !0
                }),
                f === "$schema" && r.parent && !r.parent.parent && this.addDollarSchemaCompletions(u, s)
            }
            if (r.type === "array")
                if (r.parent && r.parent.type === "property") {
                    var h = r.parent.keyNode.value;
                    t.visit(function(d) {
                        return d.type === "property" && d.keyNode.value === h && d.valueNode && d.valueNode.type === "array" && d.valueNode.items.forEach(l),
                        !0
                    })
                } else
                    r.items.forEach(l)
        }
        ,
        e.prototype.getValueCompletions = function(t, r, n, i, s, a, o) {
            var u = i
              , l = void 0
              , c = void 0;
            if (n && (n.type === "string" || n.type === "number" || n.type === "boolean" || n.type === "null") && (u = n.offset + n.length,
            c = n,
            n = n.parent),
            !n) {
                this.addSchemaValueCompletions(t.schema, "", a, o);
                return
            }
            if (n.type === "property" && i > (n.colonOffset || 0)) {
                var f = n.valueNode;
                if (f && i > f.offset + f.length)
                    return;
                l = n.keyNode.value,
                n = n.parent
            }
            if (n && (l !== void 0 || n.type === "array")) {
                for (var h = this.evaluateSeparatorAfter(s, u), d = r.getMatchingSchemas(t.schema, n.offset, c), m = 0, v = d; m < v.length; m++) {
                    var b = v[m];
                    if (b.node === n && !b.inverted && b.schema) {
                        if (n.type === "array" && b.schema.items)
                            if (Array.isArray(b.schema.items)) {
                                var N = this.findItemAtOffset(n, s, i);
                                N < b.schema.items.length && this.addSchemaValueCompletions(b.schema.items[N], h, a, o)
                            } else
                                this.addSchemaValueCompletions(b.schema.items, h, a, o);
                        if (l !== void 0) {
                            var p = !1;
                            if (b.schema.properties) {
                                var g = b.schema.properties[l];
                                g && (p = !0,
                                this.addSchemaValueCompletions(g, h, a, o))
                            }
                            if (b.schema.patternProperties && !p)
                                for (var _ = 0, L = Object.keys(b.schema.patternProperties); _ < L.length; _++) {
                                    var S = L[_]
                                      , A = kt(S);
                                    if (A.test(l)) {
                                        p = !0;
                                        var g = b.schema.patternProperties[S];
                                        this.addSchemaValueCompletions(g, h, a, o)
                                    }
                                }
                            if (b.schema.additionalProperties && !p) {
                                var g = b.schema.additionalProperties;
                                this.addSchemaValueCompletions(g, h, a, o)
                            }
                        }
                    }
                }
                l === "$schema" && !n.parent && this.addDollarSchemaCompletions(h, a),
                o.boolean && (this.addBooleanValueCompletion(!0, h, a),
                this.addBooleanValueCompletion(!1, h, a)),
                o.null && this.addNullValueCompletion(h, a)
            }
        }
        ,
        e.prototype.getContributedValueCompletions = function(t, r, n, i, s, a) {
            if (!r)
                this.contributions.forEach(function(c) {
                    var f = c.collectDefaultCompletions(i.uri, s);
                    f && a.push(f)
                });
            else if ((r.type === "string" || r.type === "number" || r.type === "boolean" || r.type === "null") && (r = r.parent),
            r && r.type === "property" && n > (r.colonOffset || 0)) {
                var o = r.keyNode.value
                  , u = r.valueNode;
                if ((!u || n <= u.offset + u.length) && r.parent) {
                    var l = wr(r.parent);
                    this.contributions.forEach(function(c) {
                        var f = c.collectValueCompletions(i.uri, l, o, s);
                        f && a.push(f)
                    })
                }
            }
        }
        ,
        e.prototype.addSchemaValueCompletions = function(t, r, n, i) {
            var s = this;
            typeof t == "object" && (this.addEnumValueCompletions(t, r, n),
            this.addDefaultValueCompletions(t, r, n),
            this.collectTypes(t, i),
            Array.isArray(t.allOf) && t.allOf.forEach(function(a) {
                return s.addSchemaValueCompletions(a, r, n, i)
            }),
            Array.isArray(t.anyOf) && t.anyOf.forEach(function(a) {
                return s.addSchemaValueCompletions(a, r, n, i)
            }),
            Array.isArray(t.oneOf) && t.oneOf.forEach(function(a) {
                return s.addSchemaValueCompletions(a, r, n, i)
            }))
        }
        ,
        e.prototype.addDefaultValueCompletions = function(t, r, n, i) {
            var s = this;
            i === void 0 && (i = 0);
            var a = !1;
            if (Ae(t.default)) {
                for (var o = t.type, u = t.default, l = i; l > 0; l--)
                    u = [u],
                    o = "array";
                n.add({
                    kind: this.getSuggestionKind(o),
                    label: this.getLabelForValue(u),
                    insertText: this.getInsertTextForValue(u, r),
                    insertTextFormat: X.Snippet,
                    detail: Lr("json.suggest.default", "Default value")
                }),
                a = !0
            }
            Array.isArray(t.examples) && t.examples.forEach(function(c) {
                for (var f = t.type, h = c, d = i; d > 0; d--)
                    h = [h],
                    f = "array";
                n.add({
                    kind: s.getSuggestionKind(f),
                    label: s.getLabelForValue(h),
                    insertText: s.getInsertTextForValue(h, r),
                    insertTextFormat: X.Snippet
                }),
                a = !0
            }),
            Array.isArray(t.defaultSnippets) && t.defaultSnippets.forEach(function(c) {
                var f = t.type, h = c.body, d = c.label, m, v;
                if (Ae(h)) {
                    t.type;
                    for (var b = i; b > 0; b--)
                        h = [h];
                    m = s.getInsertTextForSnippetValue(h, r),
                    v = s.getFilterTextForSnippetValue(h),
                    d = d || s.getLabelForSnippetValue(h)
                } else if (typeof c.bodyText == "string") {
                    for (var N = "", p = "", g = "", b = i; b > 0; b--)
                        N = N + g + `[
`,
                        p = p + `
` + g + "]",
                        g += "	",
                        f = "array";
                    m = N + g + c.bodyText.split(`
`).join(`
` + g) + p + r,
                    d = d || m,
                    v = m.replace(/[\n]/g, "")
                } else
                    return;
                n.add({
                    kind: s.getSuggestionKind(f),
                    label: d,
                    documentation: s.fromMarkup(c.markdownDescription) || c.description,
                    insertText: m,
                    insertTextFormat: X.Snippet,
                    filterText: v
                }),
                a = !0
            }),
            !a && typeof t.items == "object" && !Array.isArray(t.items) && i < 5 && this.addDefaultValueCompletions(t.items, r, n, i + 1)
        }
        ,
        e.prototype.addEnumValueCompletions = function(t, r, n) {
            if (Ae(t.const) && n.add({
                kind: this.getSuggestionKind(t.type),
                label: this.getLabelForValue(t.const),
                insertText: this.getInsertTextForValue(t.const, r),
                insertTextFormat: X.Snippet,
                documentation: this.fromMarkup(t.markdownDescription) || t.description
            }),
            Array.isArray(t.enum))
                for (var i = 0, s = t.enum.length; i < s; i++) {
                    var a = t.enum[i]
                      , o = this.fromMarkup(t.markdownDescription) || t.description;
                    t.markdownEnumDescriptions && i < t.markdownEnumDescriptions.length && this.doesSupportMarkdown() ? o = this.fromMarkup(t.markdownEnumDescriptions[i]) : t.enumDescriptions && i < t.enumDescriptions.length && (o = t.enumDescriptions[i]),
                    n.add({
                        kind: this.getSuggestionKind(t.type),
                        label: this.getLabelForValue(a),
                        insertText: this.getInsertTextForValue(a, r),
                        insertTextFormat: X.Snippet,
                        documentation: o
                    })
                }
        }
        ,
        e.prototype.collectTypes = function(t, r) {
            if (!(Array.isArray(t.enum) || Ae(t.const))) {
                var n = t.type;
                Array.isArray(n) ? n.forEach(function(i) {
                    return r[i] = !0
                }) : n && (r[n] = !0)
            }
        }
        ,
        e.prototype.addFillerValueCompletions = function(t, r, n) {
            t.object && n.add({
                kind: this.getSuggestionKind("object"),
                label: "{}",
                insertText: this.getInsertTextForGuessedValue({}, r),
                insertTextFormat: X.Snippet,
                detail: Lr("defaults.object", "New object"),
                documentation: ""
            }),
            t.array && n.add({
                kind: this.getSuggestionKind("array"),
                label: "[]",
                insertText: this.getInsertTextForGuessedValue([], r),
                insertTextFormat: X.Snippet,
                detail: Lr("defaults.array", "New array"),
                documentation: ""
            })
        }
        ,
        e.prototype.addBooleanValueCompletion = function(t, r, n) {
            n.add({
                kind: this.getSuggestionKind("boolean"),
                label: t ? "true" : "false",
                insertText: this.getInsertTextForValue(t, r),
                insertTextFormat: X.Snippet,
                documentation: ""
            })
        }
        ,
        e.prototype.addNullValueCompletion = function(t, r) {
            r.add({
                kind: this.getSuggestionKind("null"),
                label: "null",
                insertText: "null" + t,
                insertTextFormat: X.Snippet,
                documentation: ""
            })
        }
        ,
        e.prototype.addDollarSchemaCompletions = function(t, r) {
            var n = this
              , i = this.schemaService.getRegisteredSchemaIds(function(s) {
                return s === "http" || s === "https"
            });
            i.forEach(function(s) {
                return r.add({
                    kind: he.Module,
                    label: n.getLabelForValue(s),
                    filterText: n.getFilterTextForValue(s),
                    insertText: n.getInsertTextForValue(s, t),
                    insertTextFormat: X.Snippet,
                    documentation: ""
                })
            })
        }
        ,
        e.prototype.getLabelForValue = function(t) {
            return JSON.stringify(t)
        }
        ,
        e.prototype.getFilterTextForValue = function(t) {
            return JSON.stringify(t)
        }
        ,
        e.prototype.getFilterTextForSnippetValue = function(t) {
            return JSON.stringify(t).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1")
        }
        ,
        e.prototype.getLabelForSnippetValue = function(t) {
            var r = JSON.stringify(t);
            return r.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1")
        }
        ,
        e.prototype.getInsertTextForPlainText = function(t) {
            return t.replace(/[\\\$\}]/g, "\\$&")
        }
        ,
        e.prototype.getInsertTextForValue = function(t, r) {
            var n = JSON.stringify(t, null, "	");
            return n === "{}" ? "{$1}" + r : n === "[]" ? "[$1]" + r : this.getInsertTextForPlainText(n + r)
        }
        ,
        e.prototype.getInsertTextForSnippetValue = function(t, r) {
            var n = function(i) {
                return typeof i == "string" && i[0] === "^" ? i.substr(1) : JSON.stringify(i)
            };
            return Nr(t, "", n) + r
        }
        ,
        e.prototype.getInsertTextForGuessedValue = function(t, r) {
            switch (typeof t) {
            case "object":
                return t === null ? "${1:null}" + r : this.getInsertTextForValue(t, r);
            case "string":
                var n = JSON.stringify(t);
                return n = n.substr(1, n.length - 2),
                n = this.getInsertTextForPlainText(n),
                '"${1:' + n + '}"' + r;
            case "number":
            case "boolean":
                return "${1:" + JSON.stringify(t) + "}" + r
            }
            return this.getInsertTextForValue(t, r)
        }
        ,
        e.prototype.getSuggestionKind = function(t) {
            if (Array.isArray(t)) {
                var r = t;
                t = r.length > 0 ? r[0] : void 0
            }
            if (!t)
                return he.Value;
            switch (t) {
            case "string":
                return he.Value;
            case "object":
                return he.Module;
            case "property":
                return he.Property;
            default:
                return he.Value
            }
        }
        ,
        e.prototype.getLabelTextForMatchingNode = function(t, r) {
            switch (t.type) {
            case "array":
                return "[]";
            case "object":
                return "{}";
            default:
                var n = r.getText().substr(t.offset, t.length);
                return n
            }
        }
        ,
        e.prototype.getInsertTextForMatchingNode = function(t, r, n) {
            switch (t.type) {
            case "array":
                return this.getInsertTextForValue([], n);
            case "object":
                return this.getInsertTextForValue({}, n);
            default:
                var i = r.getText().substr(t.offset, t.length) + n;
                return this.getInsertTextForPlainText(i)
            }
        }
        ,
        e.prototype.getInsertTextForProperty = function(t, r, n, i) {
            var s = this.getInsertTextForValue(t, "");
            if (!n)
                return s;
            var a = s + ": ", o, u = 0;
            if (r) {
                if (Array.isArray(r.defaultSnippets)) {
                    if (r.defaultSnippets.length === 1) {
                        var l = r.defaultSnippets[0].body;
                        Ae(l) && (o = this.getInsertTextForSnippetValue(l, ""))
                    }
                    u += r.defaultSnippets.length
                }
                if (r.enum && (!o && r.enum.length === 1 && (o = this.getInsertTextForGuessedValue(r.enum[0], "")),
                u += r.enum.length),
                Ae(r.default) && (o || (o = this.getInsertTextForGuessedValue(r.default, "")),
                u++),
                Array.isArray(r.examples) && r.examples.length && (o || (o = this.getInsertTextForGuessedValue(r.examples[0], "")),
                u += r.examples.length),
                u === 0) {
                    var c = Array.isArray(r.type) ? r.type[0] : r.type;
                    switch (c || (r.properties ? c = "object" : r.items && (c = "array")),
                    c) {
                    case "boolean":
                        o = "$1";
                        break;
                    case "string":
                        o = '"$1"';
                        break;
                    case "object":
                        o = "{$1}";
                        break;
                    case "array":
                        o = "[$1]";
                        break;
                    case "number":
                    case "integer":
                        o = "${1:0}";
                        break;
                    case "null":
                        o = "${1:null}";
                        break;
                    default:
                        return s
                    }
                }
            }
            return (!o || u > 1) && (o = "$1"),
            a + o + i
        }
        ,
        e.prototype.getCurrentWord = function(t, r) {
            for (var n = r - 1, i = t.getText(); n >= 0 && ` 	
\r\v":{[,]}`.indexOf(i.charAt(n)) === -1; )
                n--;
            return i.substring(n + 1, r)
        }
        ,
        e.prototype.evaluateSeparatorAfter = function(t, r) {
            var n = Ze(t.getText(), !0);
            n.setPosition(r);
            var i = n.scan();
            switch (i) {
            case 5:
            case 2:
            case 4:
            case 17:
                return "";
            default:
                return ","
            }
        }
        ,
        e.prototype.findItemAtOffset = function(t, r, n) {
            for (var i = Ze(r.getText(), !0), s = t.items, a = s.length - 1; a >= 0; a--) {
                var o = s[a];
                if (n > o.offset + o.length) {
                    i.setPosition(o.offset + o.length);
                    var u = i.scan();
                    return u === 5 && n >= i.getTokenOffset() + i.getTokenLength() ? a + 1 : a
                } else if (n >= o.offset)
                    return a
            }
            return 0
        }
        ,
        e.prototype.isInComment = function(t, r, n) {
            var i = Ze(t.getText(), !1);
            i.setPosition(r);
            for (var s = i.scan(); s !== 17 && i.getTokenOffset() + i.getTokenLength() < n; )
                s = i.scan();
            return (s === 12 || s === 13) && i.getTokenOffset() <= n
        }
        ,
        e.prototype.fromMarkup = function(t) {
            if (t && this.doesSupportMarkdown())
                return {
                    kind: Ne.Markdown,
                    value: t
                }
        }
        ,
        e.prototype.doesSupportMarkdown = function() {
            if (!Ae(this.supportsMarkdown)) {
                var t = this.clientCapabilities.textDocument && this.clientCapabilities.textDocument.completion;
                this.supportsMarkdown = t && t.completionItem && Array.isArray(t.completionItem.documentationFormat) && t.completionItem.documentationFormat.indexOf(Ne.Markdown) !== -1
            }
            return this.supportsMarkdown
        }
        ,
        e.prototype.doesSupportsCommitCharacters = function() {
            if (!Ae(this.supportsCommitCharacters)) {
                var t = this.clientCapabilities.textDocument && this.clientCapabilities.textDocument.completion;
                this.supportsCommitCharacters = t && t.completionItem && !!t.completionItem.commitCharactersSupport
            }
            return this.supportsCommitCharacters
        }
        ,
        e
    }()
      , pa = function() {
        function e(t, r, n) {
            r === void 0 && (r = []),
            this.schemaService = t,
            this.contributions = r,
            this.promise = n || Promise
        }
        return e.prototype.doHover = function(t, r, n) {
            var i = t.offsetAt(r)
              , s = n.getNodeFromOffset(i);
            if (!s || (s.type === "object" || s.type === "array") && i > s.offset + 1 && i < s.offset + s.length - 1)
                return this.promise.resolve(null);
            var a = s;
            if (s.type === "string") {
                var o = s.parent;
                if (o && o.type === "property" && o.keyNode === s && (s = o.valueNode,
                !s))
                    return this.promise.resolve(null)
            }
            for (var u = q.create(t.positionAt(a.offset), t.positionAt(a.offset + a.length)), l = function(m) {
                var v = {
                    contents: m,
                    range: u
                };
                return v
            }, c = wr(s), f = this.contributions.length - 1; f >= 0; f--) {
                var h = this.contributions[f]
                  , d = h.getInfoContribution(t.uri, c);
                if (d)
                    return d.then(function(m) {
                        return l(m)
                    })
            }
            return this.schemaService.getSchemaForResource(t.uri, n).then(function(m) {
                if (m && s) {
                    var v = n.getMatchingSchemas(m.schema, s.offset)
                      , b = void 0
                      , N = void 0
                      , p = void 0
                      , g = void 0;
                    v.every(function(L) {
                        if (L.node === s && !L.inverted && L.schema && (b = b || L.schema.title,
                        N = N || L.schema.markdownDescription || Cr(L.schema.description),
                        L.schema.enum)) {
                            var S = L.schema.enum.indexOf(Me(s));
                            L.schema.markdownEnumDescriptions ? p = L.schema.markdownEnumDescriptions[S] : L.schema.enumDescriptions && (p = Cr(L.schema.enumDescriptions[S])),
                            p && (g = L.schema.enum[S],
                            typeof g != "string" && (g = JSON.stringify(g)))
                        }
                        return !0
                    });
                    var _ = "";
                    return b && (_ = Cr(b)),
                    N && (_.length > 0 && (_ += `

`),
                    _ += N),
                    p && (_.length > 0 && (_ += `

`),
                    _ += "`" + va(g) + "`: " + p),
                    l([_])
                }
                return null
            })
        }
        ,
        e
    }();
    function Cr(e) {
        if (e) {
            var t = e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, `$1

$3`);
            return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
        }
    }
    function va(e) {
        return e.indexOf("`") !== -1 ? "`` " + e + " ``" : e
    }
    var Ti;
    Ti = ( () => {
        var e = {
            470: n => {
                function i(o) {
                    if (typeof o != "string")
                        throw new TypeError("Path must be a string. Received " + JSON.stringify(o))
                }
                function s(o, u) {
                    for (var l, c = "", f = 0, h = -1, d = 0, m = 0; m <= o.length; ++m) {
                        if (m < o.length)
                            l = o.charCodeAt(m);
                        else {
                            if (l === 47)
                                break;
                            l = 47
                        }
                        if (l === 47) {
                            if (!(h === m - 1 || d === 1))
                                if (h !== m - 1 && d === 2) {
                                    if (c.length < 2 || f !== 2 || c.charCodeAt(c.length - 1) !== 46 || c.charCodeAt(c.length - 2) !== 46) {
                                        if (c.length > 2) {
                                            var v = c.lastIndexOf("/");
                                            if (v !== c.length - 1) {
                                                v === -1 ? (c = "",
                                                f = 0) : f = (c = c.slice(0, v)).length - 1 - c.lastIndexOf("/"),
                                                h = m,
                                                d = 0;
                                                continue
                                            }
                                        } else if (c.length === 2 || c.length === 1) {
                                            c = "",
                                            f = 0,
                                            h = m,
                                            d = 0;
                                            continue
                                        }
                                    }
                                    u && (c.length > 0 ? c += "/.." : c = "..",
                                    f = 2)
                                } else
                                    c.length > 0 ? c += "/" + o.slice(h + 1, m) : c = o.slice(h + 1, m),
                                    f = m - h - 1;
                            h = m,
                            d = 0
                        } else
                            l === 46 && d !== -1 ? ++d : d = -1
                    }
                    return c
                }
                var a = {
                    resolve: function() {
                        for (var o, u = "", l = !1, c = arguments.length - 1; c >= -1 && !l; c--) {
                            var f;
                            c >= 0 ? f = arguments[c] : (o === void 0 && (o = process.cwd()),
                            f = o),
                            i(f),
                            f.length !== 0 && (u = f + "/" + u,
                            l = f.charCodeAt(0) === 47)
                        }
                        return u = s(u, !l),
                        l ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : "."
                    },
                    normalize: function(o) {
                        if (i(o),
                        o.length === 0)
                            return ".";
                        var u = o.charCodeAt(0) === 47
                          , l = o.charCodeAt(o.length - 1) === 47;
                        return (o = s(o, !u)).length !== 0 || u || (o = "."),
                        o.length > 0 && l && (o += "/"),
                        u ? "/" + o : o
                    },
                    isAbsolute: function(o) {
                        return i(o),
                        o.length > 0 && o.charCodeAt(0) === 47
                    },
                    join: function() {
                        if (arguments.length === 0)
                            return ".";
                        for (var o, u = 0; u < arguments.length; ++u) {
                            var l = arguments[u];
                            i(l),
                            l.length > 0 && (o === void 0 ? o = l : o += "/" + l)
                        }
                        return o === void 0 ? "." : a.normalize(o)
                    },
                    relative: function(o, u) {
                        if (i(o),
                        i(u),
                        o === u || (o = a.resolve(o)) === (u = a.resolve(u)))
                            return "";
                        for (var l = 1; l < o.length && o.charCodeAt(l) === 47; ++l)
                            ;
                        for (var c = o.length, f = c - l, h = 1; h < u.length && u.charCodeAt(h) === 47; ++h)
                            ;
                        for (var d = u.length - h, m = f < d ? f : d, v = -1, b = 0; b <= m; ++b) {
                            if (b === m) {
                                if (d > m) {
                                    if (u.charCodeAt(h + b) === 47)
                                        return u.slice(h + b + 1);
                                    if (b === 0)
                                        return u.slice(h + b)
                                } else
                                    f > m && (o.charCodeAt(l + b) === 47 ? v = b : b === 0 && (v = 0));
                                break
                            }
                            var N = o.charCodeAt(l + b);
                            if (N !== u.charCodeAt(h + b))
                                break;
                            N === 47 && (v = b)
                        }
                        var p = "";
                        for (b = l + v + 1; b <= c; ++b)
                            b !== c && o.charCodeAt(b) !== 47 || (p.length === 0 ? p += ".." : p += "/..");
                        return p.length > 0 ? p + u.slice(h + v) : (h += v,
                        u.charCodeAt(h) === 47 && ++h,
                        u.slice(h))
                    },
                    _makeLong: function(o) {
                        return o
                    },
                    dirname: function(o) {
                        if (i(o),
                        o.length === 0)
                            return ".";
                        for (var u = o.charCodeAt(0), l = u === 47, c = -1, f = !0, h = o.length - 1; h >= 1; --h)
                            if ((u = o.charCodeAt(h)) === 47) {
                                if (!f) {
                                    c = h;
                                    break
                                }
                            } else
                                f = !1;
                        return c === -1 ? l ? "/" : "." : l && c === 1 ? "//" : o.slice(0, c)
                    },
                    basename: function(o, u) {
                        if (u !== void 0 && typeof u != "string")
                            throw new TypeError('"ext" argument must be a string');
                        i(o);
                        var l, c = 0, f = -1, h = !0;
                        if (u !== void 0 && u.length > 0 && u.length <= o.length) {
                            if (u.length === o.length && u === o)
                                return "";
                            var d = u.length - 1
                              , m = -1;
                            for (l = o.length - 1; l >= 0; --l) {
                                var v = o.charCodeAt(l);
                                if (v === 47) {
                                    if (!h) {
                                        c = l + 1;
                                        break
                                    }
                                } else
                                    m === -1 && (h = !1,
                                    m = l + 1),
                                    d >= 0 && (v === u.charCodeAt(d) ? --d == -1 && (f = l) : (d = -1,
                                    f = m))
                            }
                            return c === f ? f = m : f === -1 && (f = o.length),
                            o.slice(c, f)
                        }
                        for (l = o.length - 1; l >= 0; --l)
                            if (o.charCodeAt(l) === 47) {
                                if (!h) {
                                    c = l + 1;
                                    break
                                }
                            } else
                                f === -1 && (h = !1,
                                f = l + 1);
                        return f === -1 ? "" : o.slice(c, f)
                    },
                    extname: function(o) {
                        i(o);
                        for (var u = -1, l = 0, c = -1, f = !0, h = 0, d = o.length - 1; d >= 0; --d) {
                            var m = o.charCodeAt(d);
                            if (m !== 47)
                                c === -1 && (f = !1,
                                c = d + 1),
                                m === 46 ? u === -1 ? u = d : h !== 1 && (h = 1) : u !== -1 && (h = -1);
                            else if (!f) {
                                l = d + 1;
                                break
                            }
                        }
                        return u === -1 || c === -1 || h === 0 || h === 1 && u === c - 1 && u === l + 1 ? "" : o.slice(u, c)
                    },
                    format: function(o) {
                        if (o === null || typeof o != "object")
                            throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
                        return function(u, l) {
                            var c = l.dir || l.root
                              , f = l.base || (l.name || "") + (l.ext || "");
                            return c ? c === l.root ? c + f : c + "/" + f : f
                        }(0, o)
                    },
                    parse: function(o) {
                        i(o);
                        var u = {
                            root: "",
                            dir: "",
                            base: "",
                            ext: "",
                            name: ""
                        };
                        if (o.length === 0)
                            return u;
                        var l, c = o.charCodeAt(0), f = c === 47;
                        f ? (u.root = "/",
                        l = 1) : l = 0;
                        for (var h = -1, d = 0, m = -1, v = !0, b = o.length - 1, N = 0; b >= l; --b)
                            if ((c = o.charCodeAt(b)) !== 47)
                                m === -1 && (v = !1,
                                m = b + 1),
                                c === 46 ? h === -1 ? h = b : N !== 1 && (N = 1) : h !== -1 && (N = -1);
                            else if (!v) {
                                d = b + 1;
                                break
                            }
                        return h === -1 || m === -1 || N === 0 || N === 1 && h === m - 1 && h === d + 1 ? m !== -1 && (u.base = u.name = d === 0 && f ? o.slice(1, m) : o.slice(d, m)) : (d === 0 && f ? (u.name = o.slice(1, h),
                        u.base = o.slice(1, m)) : (u.name = o.slice(d, h),
                        u.base = o.slice(d, m)),
                        u.ext = o.slice(h, m)),
                        d > 0 ? u.dir = o.slice(0, d - 1) : f && (u.dir = "/"),
                        u
                    },
                    sep: "/",
                    delimiter: ":",
                    win32: null,
                    posix: null
                };
                a.posix = a,
                n.exports = a
            }
            ,
            447: (n, i, s) => {
                var a;
                if (s.r(i),
                s.d(i, {
                    URI: () => N,
                    Utils: () => k
                }),
                typeof process == "object")
                    a = process.platform === "win32";
                else if (typeof navigator == "object") {
                    var o = navigator.userAgent;
                    a = o.indexOf("Windows") >= 0
                }
                var u, l, c = (u = function(P, x) {
                    return (u = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(E, I) {
                        E.__proto__ = I
                    }
                    || function(E, I) {
                        for (var $ in I)
                            Object.prototype.hasOwnProperty.call(I, $) && (E[$] = I[$])
                    }
                    )(P, x)
                }
                ,
                function(P, x) {
                    function E() {
                        this.constructor = P
                    }
                    u(P, x),
                    P.prototype = x === null ? Object.create(x) : (E.prototype = x.prototype,
                    new E)
                }
                ), f = /^\w[\w\d+.-]*$/, h = /^\//, d = /^\/\//, m = "", v = "/", b = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, N = function() {
                    function P(x, E, I, $, j, O) {
                        O === void 0 && (O = !1),
                        typeof x == "object" ? (this.scheme = x.scheme || m,
                        this.authority = x.authority || m,
                        this.path = x.path || m,
                        this.query = x.query || m,
                        this.fragment = x.fragment || m) : (this.scheme = function(B, re) {
                            return B || re ? B : "file"
                        }(x, O),
                        this.authority = E || m,
                        this.path = function(B, re) {
                            switch (B) {
                            case "https":
                            case "http":
                            case "file":
                                re ? re[0] !== v && (re = v + re) : re = v
                            }
                            return re
                        }(this.scheme, I || m),
                        this.query = $ || m,
                        this.fragment = j || m,
                        function(B, re) {
                            if (!B.scheme && re)
                                throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "' + B.authority + '", path: "' + B.path + '", query: "' + B.query + '", fragment: "' + B.fragment + '"}');
                            if (B.scheme && !f.test(B.scheme))
                                throw new Error("[UriError]: Scheme contains illegal characters.");
                            if (B.path) {
                                if (B.authority) {
                                    if (!h.test(B.path))
                                        throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
                                } else if (d.test(B.path))
                                    throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
                            }
                        }(this, O))
                    }
                    return P.isUri = function(x) {
                        return x instanceof P || !!x && typeof x.authority == "string" && typeof x.fragment == "string" && typeof x.path == "string" && typeof x.query == "string" && typeof x.scheme == "string" && typeof x.fsPath == "function" && typeof x.with == "function" && typeof x.toString == "function"
                    }
                    ,
                    Object.defineProperty(P.prototype, "fsPath", {
                        get: function() {
                            return A(this, !1)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    P.prototype.with = function(x) {
                        if (!x)
                            return this;
                        var E = x.scheme
                          , I = x.authority
                          , $ = x.path
                          , j = x.query
                          , O = x.fragment;
                        return E === void 0 ? E = this.scheme : E === null && (E = m),
                        I === void 0 ? I = this.authority : I === null && (I = m),
                        $ === void 0 ? $ = this.path : $ === null && ($ = m),
                        j === void 0 ? j = this.query : j === null && (j = m),
                        O === void 0 ? O = this.fragment : O === null && (O = m),
                        E === this.scheme && I === this.authority && $ === this.path && j === this.query && O === this.fragment ? this : new g(E,I,$,j,O)
                    }
                    ,
                    P.parse = function(x, E) {
                        E === void 0 && (E = !1);
                        var I = b.exec(x);
                        return I ? new g(I[2] || m,M(I[4] || m),M(I[5] || m),M(I[7] || m),M(I[9] || m),E) : new g(m,m,m,m,m)
                    }
                    ,
                    P.file = function(x) {
                        var E = m;
                        if (a && (x = x.replace(/\\/g, v)),
                        x[0] === v && x[1] === v) {
                            var I = x.indexOf(v, 2);
                            I === -1 ? (E = x.substring(2),
                            x = v) : (E = x.substring(2, I),
                            x = x.substring(I) || v)
                        }
                        return new g("file",E,x,m,m)
                    }
                    ,
                    P.from = function(x) {
                        return new g(x.scheme,x.authority,x.path,x.query,x.fragment)
                    }
                    ,
                    P.prototype.toString = function(x) {
                        return x === void 0 && (x = !1),
                        w(this, x)
                    }
                    ,
                    P.prototype.toJSON = function() {
                        return this
                    }
                    ,
                    P.revive = function(x) {
                        if (x) {
                            if (x instanceof P)
                                return x;
                            var E = new g(x);
                            return E._formatted = x.external,
                            E._fsPath = x._sep === p ? x.fsPath : null,
                            E
                        }
                        return x
                    }
                    ,
                    P
                }(), p = a ? 1 : void 0, g = function(P) {
                    function x() {
                        var E = P !== null && P.apply(this, arguments) || this;
                        return E._formatted = null,
                        E._fsPath = null,
                        E
                    }
                    return c(x, P),
                    Object.defineProperty(x.prototype, "fsPath", {
                        get: function() {
                            return this._fsPath || (this._fsPath = A(this, !1)),
                            this._fsPath
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    x.prototype.toString = function(E) {
                        return E === void 0 && (E = !1),
                        E ? w(this, !0) : (this._formatted || (this._formatted = w(this, !1)),
                        this._formatted)
                    }
                    ,
                    x.prototype.toJSON = function() {
                        var E = {
                            $mid: 1
                        };
                        return this._fsPath && (E.fsPath = this._fsPath,
                        E._sep = p),
                        this._formatted && (E.external = this._formatted),
                        this.path && (E.path = this.path),
                        this.scheme && (E.scheme = this.scheme),
                        this.authority && (E.authority = this.authority),
                        this.query && (E.query = this.query),
                        this.fragment && (E.fragment = this.fragment),
                        E
                    }
                    ,
                    x
                }(N), _ = ((l = {})[58] = "%3A",
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
                function L(P, x) {
                    for (var E = void 0, I = -1, $ = 0; $ < P.length; $++) {
                        var j = P.charCodeAt($);
                        if (j >= 97 && j <= 122 || j >= 65 && j <= 90 || j >= 48 && j <= 57 || j === 45 || j === 46 || j === 95 || j === 126 || x && j === 47)
                            I !== -1 && (E += encodeURIComponent(P.substring(I, $)),
                            I = -1),
                            E !== void 0 && (E += P.charAt($));
                        else {
                            E === void 0 && (E = P.substr(0, $));
                            var O = _[j];
                            O !== void 0 ? (I !== -1 && (E += encodeURIComponent(P.substring(I, $)),
                            I = -1),
                            E += O) : I === -1 && (I = $)
                        }
                    }
                    return I !== -1 && (E += encodeURIComponent(P.substring(I))),
                    E !== void 0 ? E : P
                }
                function S(P) {
                    for (var x = void 0, E = 0; E < P.length; E++) {
                        var I = P.charCodeAt(E);
                        I === 35 || I === 63 ? (x === void 0 && (x = P.substr(0, E)),
                        x += _[I]) : x !== void 0 && (x += P[E])
                    }
                    return x !== void 0 ? x : P
                }
                function A(P, x) {
                    var E;
                    return E = P.authority && P.path.length > 1 && P.scheme === "file" ? "//" + P.authority + P.path : P.path.charCodeAt(0) === 47 && (P.path.charCodeAt(1) >= 65 && P.path.charCodeAt(1) <= 90 || P.path.charCodeAt(1) >= 97 && P.path.charCodeAt(1) <= 122) && P.path.charCodeAt(2) === 58 ? x ? P.path.substr(1) : P.path[1].toLowerCase() + P.path.substr(2) : P.path,
                    a && (E = E.replace(/\//g, "\\")),
                    E
                }
                function w(P, x) {
                    var E = x ? S : L
                      , I = ""
                      , $ = P.scheme
                      , j = P.authority
                      , O = P.path
                      , B = P.query
                      , re = P.fragment;
                    if ($ && (I += $,
                    I += ":"),
                    (j || $ === "file") && (I += v,
                    I += v),
                    j) {
                        var de = j.indexOf("@");
                        if (de !== -1) {
                            var qe = j.substr(0, de);
                            j = j.substr(de + 1),
                            (de = qe.indexOf(":")) === -1 ? I += E(qe, !1) : (I += E(qe.substr(0, de), !1),
                            I += ":",
                            I += E(qe.substr(de + 1), !1)),
                            I += "@"
                        }
                        (de = (j = j.toLowerCase()).indexOf(":")) === -1 ? I += E(j, !1) : (I += E(j.substr(0, de), !1),
                        I += j.substr(de))
                    }
                    if (O) {
                        if (O.length >= 3 && O.charCodeAt(0) === 47 && O.charCodeAt(2) === 58)
                            (De = O.charCodeAt(1)) >= 65 && De <= 90 && (O = "/" + String.fromCharCode(De + 32) + ":" + O.substr(3));
                        else if (O.length >= 2 && O.charCodeAt(1) === 58) {
                            var De;
                            (De = O.charCodeAt(0)) >= 65 && De <= 90 && (O = String.fromCharCode(De + 32) + ":" + O.substr(2))
                        }
                        I += E(O, !0)
                    }
                    return B && (I += "?",
                    I += E(B, !1)),
                    re && (I += "#",
                    I += x ? re : L(re, !1)),
                    I
                }
                function y(P) {
                    try {
                        return decodeURIComponent(P)
                    } catch {
                        return P.length > 3 ? P.substr(0, 3) + y(P.substr(3)) : P
                    }
                }
                var T = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
                function M(P) {
                    return P.match(T) ? P.replace(T, function(x) {
                        return y(x)
                    }) : P
                }
                var k, F = s(470), V = function() {
                    for (var P = 0, x = 0, E = arguments.length; x < E; x++)
                        P += arguments[x].length;
                    var I = Array(P)
                      , $ = 0;
                    for (x = 0; x < E; x++)
                        for (var j = arguments[x], O = 0, B = j.length; O < B; O++,
                        $++)
                            I[$] = j[O];
                    return I
                }, z = F.posix || F;
                (function(P) {
                    P.joinPath = function(x) {
                        for (var E = [], I = 1; I < arguments.length; I++)
                            E[I - 1] = arguments[I];
                        return x.with({
                            path: z.join.apply(z, V([x.path], E))
                        })
                    }
                    ,
                    P.resolvePath = function(x) {
                        for (var E = [], I = 1; I < arguments.length; I++)
                            E[I - 1] = arguments[I];
                        var $ = x.path || "/";
                        return x.with({
                            path: z.resolve.apply(z, V([$], E))
                        })
                    }
                    ,
                    P.dirname = function(x) {
                        var E = z.dirname(x.path);
                        return E.length === 1 && E.charCodeAt(0) === 46 ? x : x.with({
                            path: E
                        })
                    }
                    ,
                    P.basename = function(x) {
                        return z.basename(x.path)
                    }
                    ,
                    P.extname = function(x) {
                        return z.extname(x.path)
                    }
                }
                )(k || (k = {}))
            }
        }
          , t = {};
        function r(n) {
            if (t[n])
                return t[n].exports;
            var i = t[n] = {
                exports: {}
            };
            return e[n](i, i.exports, r),
            i.exports
        }
        return r.d = (n, i) => {
            for (var s in i)
                r.o(i, s) && !r.o(n, s) && Object.defineProperty(n, s, {
                    enumerable: !0,
                    get: i[s]
                })
        }
        ,
        r.o = (n, i) => Object.prototype.hasOwnProperty.call(n, i),
        r.r = n => {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }
        ,
        r(447)
    }
    )();
    const {URI: et, Utils: Za} = Ti;
    function ba(e, t) {
        if (typeof e != "string")
            throw new TypeError("Expected a string");
        for (var r = String(e), n = "", i = t ? !!t.extended : !1, s = t ? !!t.globstar : !1, a = !1, o = t && typeof t.flags == "string" ? t.flags : "", u, l = 0, c = r.length; l < c; l++)
            switch (u = r[l],
            u) {
            case "/":
            case "$":
            case "^":
            case "+":
            case ".":
            case "(":
            case ")":
            case "=":
            case "!":
            case "|":
                n += "\\" + u;
                break;
            case "?":
                if (i) {
                    n += ".";
                    break
                }
            case "[":
            case "]":
                if (i) {
                    n += u;
                    break
                }
            case "{":
                if (i) {
                    a = !0,
                    n += "(";
                    break
                }
            case "}":
                if (i) {
                    a = !1,
                    n += ")";
                    break
                }
            case ",":
                if (a) {
                    n += "|";
                    break
                }
                n += "\\" + u;
                break;
            case "*":
                for (var f = r[l - 1], h = 1; r[l + 1] === "*"; )
                    h++,
                    l++;
                var d = r[l + 1];
                if (!s)
                    n += ".*";
                else {
                    var m = h > 1 && (f === "/" || f === void 0 || f === "{" || f === ",") && (d === "/" || d === void 0 || d === "," || d === "}");
                    m ? (d === "/" ? l++ : f === "/" && n.endsWith("\\/") && (n = n.substr(0, n.length - 2)),
                    n += "((?:[^/]*(?:/|$))*)") : n += "([^/]*)"
                }
                break;
            default:
                n += u
            }
        return (!o || !~o.indexOf("g")) && (n = "^" + n + "$"),
        new RegExp(n,o)
    }
    var Ee = pt()
      , ya = "!"
      , Sa = "/"
      , _a = function() {
        function e(t, r) {
            this.globWrappers = [];
            try {
                for (var n = 0, i = t; n < i.length; n++) {
                    var s = i[n]
                      , a = s[0] !== ya;
                    a || (s = s.substring(1)),
                    s.length > 0 && (s[0] === Sa && (s = s.substring(1)),
                    this.globWrappers.push({
                        regexp: ba("**/" + s, {
                            extended: !0,
                            globstar: !0
                        }),
                        include: a
                    }))
                }
                this.uris = r
            } catch {
                this.globWrappers.length = 0,
                this.uris = []
            }
        }
        return e.prototype.matchesPattern = function(t) {
            for (var r = !1, n = 0, i = this.globWrappers; n < i.length; n++) {
                var s = i[n]
                  , a = s.regexp
                  , o = s.include;
                a.test(t) && (r = o)
            }
            return r
        }
        ,
        e.prototype.getURIs = function() {
            return this.uris
        }
        ,
        e
    }()
      , Aa = function() {
        function e(t, r, n) {
            this.service = t,
            this.url = r,
            this.dependencies = {},
            n && (this.unresolvedSchema = this.service.promise.resolve(new We(n)))
        }
        return e.prototype.getUnresolvedSchema = function() {
            return this.unresolvedSchema || (this.unresolvedSchema = this.service.loadSchema(this.url)),
            this.unresolvedSchema
        }
        ,
        e.prototype.getResolvedSchema = function() {
            var t = this;
            return this.resolvedSchema || (this.resolvedSchema = this.getUnresolvedSchema().then(function(r) {
                return t.service.resolveSchemaContent(r, t.url, t.dependencies)
            })),
            this.resolvedSchema
        }
        ,
        e.prototype.clearSchema = function() {
            this.resolvedSchema = void 0,
            this.unresolvedSchema = void 0,
            this.dependencies = {}
        }
        ,
        e
    }()
      , We = function() {
        function e(t, r) {
            r === void 0 && (r = []),
            this.schema = t,
            this.errors = r
        }
        return e
    }()
      , Pi = function() {
        function e(t, r) {
            r === void 0 && (r = []),
            this.schema = t,
            this.errors = r
        }
        return e.prototype.getSection = function(t) {
            var r = this.getSectionRecursive(t, this.schema);
            if (r)
                return oe(r)
        }
        ,
        e.prototype.getSectionRecursive = function(t, r) {
            if (!r || typeof r == "boolean" || t.length === 0)
                return r;
            var n = t.shift();
            if (r.properties && typeof r.properties[n])
                return this.getSectionRecursive(t, r.properties[n]);
            if (r.patternProperties)
                for (var i = 0, s = Object.keys(r.patternProperties); i < s.length; i++) {
                    var a = s[i]
                      , o = kt(a);
                    if (o.test(n))
                        return this.getSectionRecursive(t, r.patternProperties[a])
                }
            else {
                if (typeof r.additionalProperties == "object")
                    return this.getSectionRecursive(t, r.additionalProperties);
                if (n.match("[0-9]+")) {
                    if (Array.isArray(r.items)) {
                        var u = parseInt(n, 10);
                        if (!isNaN(u) && r.items[u])
                            return this.getSectionRecursive(t, r.items[u])
                    } else if (r.items)
                        return this.getSectionRecursive(t, r.items)
                }
            }
        }
        ,
        e
    }()
      , wa = function() {
        function e(t, r, n) {
            this.contextService = r,
            this.requestService = t,
            this.promiseConstructor = n || Promise,
            this.callOnDispose = [],
            this.contributionSchemas = {},
            this.contributionAssociations = [],
            this.schemasById = {},
            this.filePatternAssociations = [],
            this.registeredSchemasIds = {}
        }
        return e.prototype.getRegisteredSchemaIds = function(t) {
            return Object.keys(this.registeredSchemasIds).filter(function(r) {
                var n = et.parse(r).scheme;
                return n !== "schemaservice" && (!t || t(n))
            })
        }
        ,
        Object.defineProperty(e.prototype, "promise", {
            get: function() {
                return this.promiseConstructor
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.dispose = function() {
            for (; this.callOnDispose.length > 0; )
                this.callOnDispose.pop()()
        }
        ,
        e.prototype.onResourceChange = function(t) {
            var r = this
              , n = !1;
            t = Ie(t);
            for (var i = [t], s = Object.keys(this.schemasById).map(function(l) {
                return r.schemasById[l]
            }); i.length; )
                for (var a = i.pop(), o = 0; o < s.length; o++) {
                    var u = s[o];
                    u && (u.url === a || u.dependencies[a]) && (u.url !== a && i.push(u.url),
                    u.clearSchema(),
                    s[o] = void 0,
                    n = !0)
                }
            return n
        }
        ,
        e.prototype.setSchemaContributions = function(t) {
            if (t.schemas) {
                var r = t.schemas;
                for (var n in r) {
                    var i = Ie(n);
                    this.contributionSchemas[i] = this.addSchemaHandle(i, r[n])
                }
            }
            if (Array.isArray(t.schemaAssociations))
                for (var s = t.schemaAssociations, a = 0, o = s; a < o.length; a++) {
                    var u = o[a]
                      , l = u.uris.map(Ie)
                      , c = this.addFilePatternAssociation(u.pattern, l);
                    this.contributionAssociations.push(c)
                }
        }
        ,
        e.prototype.addSchemaHandle = function(t, r) {
            var n = new Aa(this,t,r);
            return this.schemasById[t] = n,
            n
        }
        ,
        e.prototype.getOrAddSchemaHandle = function(t, r) {
            return this.schemasById[t] || this.addSchemaHandle(t, r)
        }
        ,
        e.prototype.addFilePatternAssociation = function(t, r) {
            var n = new _a(t,r);
            return this.filePatternAssociations.push(n),
            n
        }
        ,
        e.prototype.registerExternalSchema = function(t, r, n) {
            var i = Ie(t);
            return this.registeredSchemasIds[i] = !0,
            this.cachedSchemaForResource = void 0,
            r && this.addFilePatternAssociation(r, [t]),
            n ? this.addSchemaHandle(i, n) : this.getOrAddSchemaHandle(i)
        }
        ,
        e.prototype.clearExternalSchemas = function() {
            this.schemasById = {},
            this.filePatternAssociations = [],
            this.registeredSchemasIds = {},
            this.cachedSchemaForResource = void 0;
            for (var t in this.contributionSchemas)
                this.schemasById[t] = this.contributionSchemas[t],
                this.registeredSchemasIds[t] = !0;
            for (var r = 0, n = this.contributionAssociations; r < n.length; r++) {
                var i = n[r];
                this.filePatternAssociations.push(i)
            }
        }
        ,
        e.prototype.getResolvedSchema = function(t) {
            var r = Ie(t)
              , n = this.schemasById[r];
            return n ? n.getResolvedSchema() : this.promise.resolve(void 0)
        }
        ,
        e.prototype.loadSchema = function(t) {
            if (!this.requestService) {
                var r = Ee("json.schema.norequestservice", "Unable to load schema from '{0}'. No schema request service available", Dt(t));
                return this.promise.resolve(new We({},[r]))
            }
            return this.requestService(t).then(function(n) {
                if (!n) {
                    var i = Ee("json.schema.nocontent", "Unable to load schema from '{0}': No content.", Dt(t));
                    return new We({},[i])
                }
                var s = {}
                  , a = [];
                s = Qs(n, a);
                var o = a.length ? [Ee("json.schema.invalidFormat", "Unable to parse content from '{0}': Parse error at offset {1}.", Dt(t), a[0].offset)] : [];
                return new We(s,o)
            }, function(n) {
                var i = n.toString()
                  , s = n.toString().split("Error: ");
                return s.length > 1 && (i = s[1]),
                lt(i, ".") && (i = i.substr(0, i.length - 1)),
                new We({},[Ee("json.schema.nocontent", "Unable to load schema from '{0}': {1}.", Dt(t), i)])
            })
        }
        ,
        e.prototype.resolveSchemaContent = function(t, r, n) {
            var i = this
              , s = t.errors.slice(0)
              , a = t.schema;
            if (a.$schema) {
                var o = Ie(a.$schema);
                if (o === "http://json-schema.org/draft-03/schema")
                    return this.promise.resolve(new Pi({},[Ee("json.schema.draft03.notsupported", "Draft-03 schemas are not supported.")]));
                o === "https://json-schema.org/draft/2019-09/schema" && s.push(Ee("json.schema.draft201909.notsupported", "Draft 2019-09 schemas are not yet fully supported."))
            }
            var u = this.contextService
              , l = function(d, m) {
                if (!m)
                    return d;
                var v = d;
                return m[0] === "/" && (m = m.substr(1)),
                m.split("/").some(function(b) {
                    return b = b.replace(/~1/g, "/").replace(/~0/g, "~"),
                    v = v[b],
                    !v
                }),
                v
            }
              , c = function(d, m, v, b) {
                var N = b ? decodeURIComponent(b) : void 0
                  , p = l(m, N);
                if (p)
                    for (var g in p)
                        p.hasOwnProperty(g) && !d.hasOwnProperty(g) && (d[g] = p[g]);
                else
                    s.push(Ee("json.schema.invalidref", "$ref '{0}' in '{1}' can not be resolved.", N, v))
            }
              , f = function(d, m, v, b, N) {
                u && !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(m) && (m = u.resolveRelativePath(m, b)),
                m = Ie(m);
                var p = i.getOrAddSchemaHandle(m);
                return p.getUnresolvedSchema().then(function(g) {
                    if (N[m] = !0,
                    g.errors.length) {
                        var _ = v ? m + "#" + v : m;
                        s.push(Ee("json.schema.problemloadingref", "Problems loading reference '{0}': {1}", _, g.errors[0]))
                    }
                    return c(d, g.schema, m, v),
                    h(d, g.schema, m, p.dependencies)
                })
            }
              , h = function(d, m, v, b) {
                if (!d || typeof d != "object")
                    return Promise.resolve(null);
                for (var N = [d], p = [], g = [], _ = function() {
                    for (var y = [], T = 0; T < arguments.length; T++)
                        y[T] = arguments[T];
                    for (var M = 0, k = y; M < k.length; M++) {
                        var F = k[M];
                        typeof F == "object" && N.push(F)
                    }
                }, L = function() {
                    for (var y = [], T = 0; T < arguments.length; T++)
                        y[T] = arguments[T];
                    for (var M = 0, k = y; M < k.length; M++) {
                        var F = k[M];
                        if (typeof F == "object")
                            for (var V in F) {
                                var z = V
                                  , P = F[z];
                                typeof P == "object" && N.push(P)
                            }
                    }
                }, S = function() {
                    for (var y = [], T = 0; T < arguments.length; T++)
                        y[T] = arguments[T];
                    for (var M = 0, k = y; M < k.length; M++) {
                        var F = k[M];
                        if (Array.isArray(F))
                            for (var V = 0, z = F; V < z.length; V++) {
                                var P = z[V];
                                typeof P == "object" && N.push(P)
                            }
                    }
                }, A = function(y) {
                    for (var T = []; y.$ref; ) {
                        var M = y.$ref
                          , k = M.split("#", 2);
                        if (delete y.$ref,
                        k[0].length > 0) {
                            g.push(f(y, k[0], k[1], v, b));
                            return
                        } else
                            T.indexOf(M) === -1 && (c(y, m, v, k[1]),
                            T.push(M))
                    }
                    _(y.items, y.additionalItems, y.additionalProperties, y.not, y.contains, y.propertyNames, y.if, y.then, y.else),
                    L(y.definitions, y.properties, y.patternProperties, y.dependencies),
                    S(y.anyOf, y.allOf, y.oneOf, y.items)
                }; N.length; ) {
                    var w = N.pop();
                    p.indexOf(w) >= 0 || (p.push(w),
                    A(w))
                }
                return i.promise.all(g)
            };
            return h(a, a, r, n).then(function(d) {
                return new Pi(a,s)
            })
        }
        ,
        e.prototype.getSchemaForResource = function(t, r) {
            if (r && r.root && r.root.type === "object") {
                var n = r.root.properties.filter(function(N) {
                    return N.keyNode.value === "$schema" && N.valueNode && N.valueNode.type === "string"
                });
                if (n.length > 0) {
                    var i = n[0].valueNode;
                    if (i && i.type === "string") {
                        var s = Me(i);
                        if (s && Hn(s, ".") && this.contextService && (s = this.contextService.resolveRelativePath(s, t)),
                        s) {
                            var a = Ie(s);
                            return this.getOrAddSchemaHandle(a).getResolvedSchema()
                        }
                    }
                }
            }
            if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === t)
                return this.cachedSchemaForResource.resolvedSchema;
            for (var o = Object.create(null), u = [], l = La(t), c = 0, f = this.filePatternAssociations; c < f.length; c++) {
                var h = f[c];
                if (h.matchesPattern(l))
                    for (var d = 0, m = h.getURIs(); d < m.length; d++) {
                        var v = m[d];
                        o[v] || (u.push(v),
                        o[v] = !0)
                    }
            }
            var b = u.length > 0 ? this.createCombinedSchema(t, u).getResolvedSchema() : this.promise.resolve(void 0);
            return this.cachedSchemaForResource = {
                resource: t,
                resolvedSchema: b
            },
            b
        }
        ,
        e.prototype.createCombinedSchema = function(t, r) {
            if (r.length === 1)
                return this.getOrAddSchemaHandle(r[0]);
            var n = "schemaservice://combinedSchema/" + encodeURIComponent(t)
              , i = {
                allOf: r.map(function(s) {
                    return {
                        $ref: s
                    }
                })
            };
            return this.addSchemaHandle(n, i)
        }
        ,
        e.prototype.getMatchingSchemas = function(t, r, n) {
            if (n) {
                var i = n.id || "schemaservice://untitled/matchingSchemas/" + Na++;
                return this.resolveSchemaContent(new We(n), i, {}).then(function(s) {
                    return r.getMatchingSchemas(s.schema).filter(function(a) {
                        return !a.inverted
                    })
                })
            }
            return this.getSchemaForResource(t.uri, r).then(function(s) {
                return s ? r.getMatchingSchemas(s.schema).filter(function(a) {
                    return !a.inverted
                }) : []
            })
        }
        ,
        e
    }()
      , Na = 0;
    function Ie(e) {
        try {
            return et.parse(e).toString()
        } catch {
            return e
        }
    }
    function La(e) {
        try {
            return et.parse(e).with({
                fragment: null,
                query: null
            }).toString()
        } catch {
            return e
        }
    }
    function Dt(e) {
        try {
            var t = et.parse(e);
            if (t.scheme === "file")
                return t.fsPath
        } catch {}
        return e
    }
    var Ca = pt()
      , xa = function() {
        function e(t, r) {
            this.jsonSchemaService = t,
            this.promise = r,
            this.validationEnabled = !0
        }
        return e.prototype.configure = function(t) {
            t && (this.validationEnabled = t.validate !== !1,
            this.commentSeverity = t.allowComments ? void 0 : ce.Error)
        }
        ,
        e.prototype.doValidation = function(t, r, n, i) {
            var s = this;
            if (!this.validationEnabled)
                return this.promise.resolve([]);
            var a = []
              , o = {}
              , u = function(f) {
                var h = f.range.start.line + " " + f.range.start.character + " " + f.message;
                o[h] || (o[h] = !0,
                a.push(f))
            }
              , l = function(f) {
                var h = n != null && n.trailingCommas ? jt(n.trailingCommas) : ce.Error
                  , d = n != null && n.comments ? jt(n.comments) : s.commentSeverity
                  , m = n != null && n.schemaValidation ? jt(n.schemaValidation) : ce.Warning
                  , v = n != null && n.schemaRequest ? jt(n.schemaRequest) : ce.Warning;
                if (f) {
                    if (f.errors.length && r.root && v) {
                        var b = r.root
                          , N = b.type === "object" ? b.properties[0] : void 0;
                        if (N && N.keyNode.value === "$schema") {
                            var p = N.valueNode || N
                              , g = q.create(t.positionAt(p.offset), t.positionAt(p.offset + p.length));
                            u(we.create(g, f.errors[0], v, W.SchemaResolveError))
                        } else {
                            var g = q.create(t.positionAt(b.offset), t.positionAt(b.offset + 1));
                            u(we.create(g, f.errors[0], v, W.SchemaResolveError))
                        }
                    } else if (m) {
                        var _ = r.validate(t, f.schema, m);
                        _ && _.forEach(u)
                    }
                    Mi(f.schema) && (d = void 0),
                    Ei(f.schema) && (h = void 0)
                }
                for (var L = 0, S = r.syntaxErrors; L < S.length; L++) {
                    var A = S[L];
                    if (A.code === W.TrailingComma) {
                        if (typeof h != "number")
                            continue;
                        A.severity = h
                    }
                    u(A)
                }
                if (typeof d == "number") {
                    var w = Ca("InvalidCommentToken", "Comments are not permitted in JSON.");
                    r.comments.forEach(function(y) {
                        u(we.create(y, w, d, W.CommentNotPermitted))
                    })
                }
                return a
            };
            if (i) {
                var c = i.id || "schemaservice://untitled/" + ka++;
                return this.jsonSchemaService.resolveSchemaContent(new We(i), c, {}).then(function(f) {
                    return l(f)
                })
            }
            return this.jsonSchemaService.getSchemaForResource(t.uri, r).then(function(f) {
                return l(f)
            })
        }
        ,
        e
    }()
      , ka = 0;
    function Mi(e) {
        if (e && typeof e == "object") {
            if (Se(e.allowComments))
                return e.allowComments;
            if (e.allOf)
                for (var t = 0, r = e.allOf; t < r.length; t++) {
                    var n = r[t]
                      , i = Mi(n);
                    if (Se(i))
                        return i
                }
        }
    }
    function Ei(e) {
        if (e && typeof e == "object") {
            if (Se(e.allowTrailingCommas))
                return e.allowTrailingCommas;
            var t = e;
            if (Se(t.allowsTrailingCommas))
                return t.allowsTrailingCommas;
            if (e.allOf)
                for (var r = 0, n = e.allOf; r < n.length; r++) {
                    var i = n[r]
                      , s = Ei(i);
                    if (Se(s))
                        return s
                }
        }
    }
    function jt(e) {
        switch (e) {
        case "error":
            return ce.Error;
        case "warning":
            return ce.Warning;
        case "ignore":
            return
        }
    }
    var Ii = 48
      , Ta = 57
      , Pa = 65
      , Ut = 97
      , Ma = 102;
    function Q(e) {
        return e < Ii ? 0 : e <= Ta ? e - Ii : (e < Ut && (e += Ut - Pa),
        e >= Ut && e <= Ma ? e - Ut + 10 : 0)
    }
    function Ea(e) {
        if (e[0] === "#")
            switch (e.length) {
            case 4:
                return {
                    red: Q(e.charCodeAt(1)) * 17 / 255,
                    green: Q(e.charCodeAt(2)) * 17 / 255,
                    blue: Q(e.charCodeAt(3)) * 17 / 255,
                    alpha: 1
                };
            case 5:
                return {
                    red: Q(e.charCodeAt(1)) * 17 / 255,
                    green: Q(e.charCodeAt(2)) * 17 / 255,
                    blue: Q(e.charCodeAt(3)) * 17 / 255,
                    alpha: Q(e.charCodeAt(4)) * 17 / 255
                };
            case 7:
                return {
                    red: (Q(e.charCodeAt(1)) * 16 + Q(e.charCodeAt(2))) / 255,
                    green: (Q(e.charCodeAt(3)) * 16 + Q(e.charCodeAt(4))) / 255,
                    blue: (Q(e.charCodeAt(5)) * 16 + Q(e.charCodeAt(6))) / 255,
                    alpha: 1
                };
            case 9:
                return {
                    red: (Q(e.charCodeAt(1)) * 16 + Q(e.charCodeAt(2))) / 255,
                    green: (Q(e.charCodeAt(3)) * 16 + Q(e.charCodeAt(4))) / 255,
                    blue: (Q(e.charCodeAt(5)) * 16 + Q(e.charCodeAt(6))) / 255,
                    alpha: (Q(e.charCodeAt(7)) * 16 + Q(e.charCodeAt(8))) / 255
                }
            }
    }
    var Ia = function() {
        function e(t) {
            this.schemaService = t
        }
        return e.prototype.findDocumentSymbols = function(t, r, n) {
            var i = this;
            n === void 0 && (n = {
                resultLimit: Number.MAX_VALUE
            });
            var s = r.root;
            if (!s)
                return [];
            var a = n.resultLimit || Number.MAX_VALUE
              , o = t.uri;
            if ((o === "vscode://defaultsettings/keybindings.json" || lt(o.toLowerCase(), "/user/keybindings.json")) && s.type === "array") {
                for (var u = [], l = 0, c = s.items; l < c.length; l++) {
                    var f = c[l];
                    if (f.type === "object")
                        for (var h = 0, d = f.properties; h < d.length; h++) {
                            var m = d[h];
                            if (m.keyNode.value === "key" && m.valueNode) {
                                var v = ft.create(t.uri, Fe(t, f));
                                if (u.push({
                                    name: Me(m.valueNode),
                                    kind: _e.Function,
                                    location: v
                                }),
                                a--,
                                a <= 0)
                                    return n && n.onResultLimitExceeded && n.onResultLimitExceeded(o),
                                    u
                            }
                        }
                }
                return u
            }
            for (var b = [{
                node: s,
                containerName: ""
            }], N = 0, p = !1, g = [], _ = function(S, A) {
                S.type === "array" ? S.items.forEach(function(w) {
                    w && b.push({
                        node: w,
                        containerName: A
                    })
                }) : S.type === "object" && S.properties.forEach(function(w) {
                    var y = w.valueNode;
                    if (y)
                        if (a > 0) {
                            a--;
                            var T = ft.create(t.uri, Fe(t, w))
                              , M = A ? A + "." + w.keyNode.value : w.keyNode.value;
                            g.push({
                                name: i.getKeyLabel(w),
                                kind: i.getSymbolKind(y.type),
                                location: T,
                                containerName: A
                            }),
                            b.push({
                                node: y,
                                containerName: M
                            })
                        } else
                            p = !0
                })
            }; N < b.length; ) {
                var L = b[N++];
                _(L.node, L.containerName)
            }
            return p && n && n.onResultLimitExceeded && n.onResultLimitExceeded(o),
            g
        }
        ,
        e.prototype.findDocumentSymbols2 = function(t, r, n) {
            var i = this;
            n === void 0 && (n = {
                resultLimit: Number.MAX_VALUE
            });
            var s = r.root;
            if (!s)
                return [];
            var a = n.resultLimit || Number.MAX_VALUE
              , o = t.uri;
            if ((o === "vscode://defaultsettings/keybindings.json" || lt(o.toLowerCase(), "/user/keybindings.json")) && s.type === "array") {
                for (var u = [], l = 0, c = s.items; l < c.length; l++) {
                    var f = c[l];
                    if (f.type === "object")
                        for (var h = 0, d = f.properties; h < d.length; h++) {
                            var m = d[h];
                            if (m.keyNode.value === "key" && m.valueNode) {
                                var v = Fe(t, f)
                                  , b = Fe(t, m.keyNode);
                                if (u.push({
                                    name: Me(m.valueNode),
                                    kind: _e.Function,
                                    range: v,
                                    selectionRange: b
                                }),
                                a--,
                                a <= 0)
                                    return n && n.onResultLimitExceeded && n.onResultLimitExceeded(o),
                                    u
                            }
                        }
                }
                return u
            }
            for (var N = [], p = [{
                node: s,
                result: N
            }], g = 0, _ = !1, L = function(A, w) {
                A.type === "array" ? A.items.forEach(function(y, T) {
                    if (y)
                        if (a > 0) {
                            a--;
                            var M = Fe(t, y)
                              , k = M
                              , F = String(T)
                              , V = {
                                name: F,
                                kind: i.getSymbolKind(y.type),
                                range: M,
                                selectionRange: k,
                                children: []
                            };
                            w.push(V),
                            p.push({
                                result: V.children,
                                node: y
                            })
                        } else
                            _ = !0
                }) : A.type === "object" && A.properties.forEach(function(y) {
                    var T = y.valueNode;
                    if (T)
                        if (a > 0) {
                            a--;
                            var M = Fe(t, y)
                              , k = Fe(t, y.keyNode)
                              , F = []
                              , V = {
                                name: i.getKeyLabel(y),
                                kind: i.getSymbolKind(T.type),
                                range: M,
                                selectionRange: k,
                                children: F,
                                detail: i.getDetail(T)
                            };
                            w.push(V),
                            p.push({
                                result: F,
                                node: T
                            })
                        } else
                            _ = !0
                })
            }; g < p.length; ) {
                var S = p[g++];
                L(S.node, S.result)
            }
            return _ && n && n.onResultLimitExceeded && n.onResultLimitExceeded(o),
            N
        }
        ,
        e.prototype.getSymbolKind = function(t) {
            switch (t) {
            case "object":
                return _e.Module;
            case "string":
                return _e.String;
            case "number":
                return _e.Number;
            case "array":
                return _e.Array;
            case "boolean":
                return _e.Boolean;
            default:
                return _e.Variable
            }
        }
        ,
        e.prototype.getKeyLabel = function(t) {
            var r = t.keyNode.value;
            return r && (r = r.replace(/[\n]/g, "\u21B5")),
            r && r.trim() ? r : '"' + r + '"'
        }
        ,
        e.prototype.getDetail = function(t) {
            if (!!t) {
                if (t.type === "boolean" || t.type === "number" || t.type === "null" || t.type === "string")
                    return String(t.value);
                if (t.type === "array")
                    return t.children.length ? void 0 : "[]";
                if (t.type === "object")
                    return t.children.length ? void 0 : "{}"
            }
        }
        ,
        e.prototype.findDocumentColors = function(t, r, n) {
            return this.schemaService.getSchemaForResource(t.uri, r).then(function(i) {
                var s = [];
                if (i)
                    for (var a = n && typeof n.resultLimit == "number" ? n.resultLimit : Number.MAX_VALUE, o = r.getMatchingSchemas(i.schema), u = {}, l = 0, c = o; l < c.length; l++) {
                        var f = c[l];
                        if (!f.inverted && f.schema && (f.schema.format === "color" || f.schema.format === "color-hex") && f.node && f.node.type === "string") {
                            var h = String(f.node.offset);
                            if (!u[h]) {
                                var d = Ea(Me(f.node));
                                if (d) {
                                    var m = Fe(t, f.node);
                                    s.push({
                                        color: d,
                                        range: m
                                    })
                                }
                                if (u[h] = !0,
                                a--,
                                a <= 0)
                                    return n && n.onResultLimitExceeded && n.onResultLimitExceeded(t.uri),
                                    s
                            }
                        }
                    }
                return s
            })
        }
        ,
        e.prototype.getColorPresentations = function(t, r, n, i) {
            var s = []
              , a = Math.round(n.red * 255)
              , o = Math.round(n.green * 255)
              , u = Math.round(n.blue * 255);
            function l(f) {
                var h = f.toString(16);
                return h.length !== 2 ? "0" + h : h
            }
            var c;
            return n.alpha === 1 ? c = "#" + l(a) + l(o) + l(u) : c = "#" + l(a) + l(o) + l(u) + l(Math.round(n.alpha * 255)),
            s.push({
                label: c,
                textEdit: ve.replace(i, JSON.stringify(c))
            }),
            s
        }
        ,
        e
    }();
    function Fe(e, t) {
        return q.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length))
    }
    var U = pt()
      , xr = {
        schemaAssociations: [],
        schemas: {
            "http://json-schema.org/schema#": {
                $ref: "http://json-schema.org/draft-07/schema#"
            },
            "http://json-schema.org/draft-04/schema#": {
                title: U("schema.json", "Describes a JSON file using a schema. See json-schema.org for more info."),
                $schema: "http://json-schema.org/draft-04/schema#",
                definitions: {
                    schemaArray: {
                        type: "array",
                        minItems: 1,
                        items: {
                            $ref: "#"
                        }
                    },
                    positiveInteger: {
                        type: "integer",
                        minimum: 0
                    },
                    positiveIntegerDefault0: {
                        allOf: [{
                            $ref: "#/definitions/positiveInteger"
                        }, {
                            default: 0
                        }]
                    },
                    simpleTypes: {
                        type: "string",
                        enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
                    },
                    stringArray: {
                        type: "array",
                        items: {
                            type: "string"
                        },
                        minItems: 1,
                        uniqueItems: !0
                    }
                },
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uri"
                    },
                    $schema: {
                        type: "string",
                        format: "uri"
                    },
                    title: {
                        type: "string"
                    },
                    description: {
                        type: "string"
                    },
                    default: {},
                    multipleOf: {
                        type: "number",
                        minimum: 0,
                        exclusiveMinimum: !0
                    },
                    maximum: {
                        type: "number"
                    },
                    exclusiveMaximum: {
                        type: "boolean",
                        default: !1
                    },
                    minimum: {
                        type: "number"
                    },
                    exclusiveMinimum: {
                        type: "boolean",
                        default: !1
                    },
                    maxLength: {
                        allOf: [{
                            $ref: "#/definitions/positiveInteger"
                        }]
                    },
                    minLength: {
                        allOf: [{
                            $ref: "#/definitions/positiveIntegerDefault0"
                        }]
                    },
                    pattern: {
                        type: "string",
                        format: "regex"
                    },
                    additionalItems: {
                        anyOf: [{
                            type: "boolean"
                        }, {
                            $ref: "#"
                        }],
                        default: {}
                    },
                    items: {
                        anyOf: [{
                            $ref: "#"
                        }, {
                            $ref: "#/definitions/schemaArray"
                        }],
                        default: {}
                    },
                    maxItems: {
                        allOf: [{
                            $ref: "#/definitions/positiveInteger"
                        }]
                    },
                    minItems: {
                        allOf: [{
                            $ref: "#/definitions/positiveIntegerDefault0"
                        }]
                    },
                    uniqueItems: {
                        type: "boolean",
                        default: !1
                    },
                    maxProperties: {
                        allOf: [{
                            $ref: "#/definitions/positiveInteger"
                        }]
                    },
                    minProperties: {
                        allOf: [{
                            $ref: "#/definitions/positiveIntegerDefault0"
                        }]
                    },
                    required: {
                        allOf: [{
                            $ref: "#/definitions/stringArray"
                        }]
                    },
                    additionalProperties: {
                        anyOf: [{
                            type: "boolean"
                        }, {
                            $ref: "#"
                        }],
                        default: {}
                    },
                    definitions: {
                        type: "object",
                        additionalProperties: {
                            $ref: "#"
                        },
                        default: {}
                    },
                    properties: {
                        type: "object",
                        additionalProperties: {
                            $ref: "#"
                        },
                        default: {}
                    },
                    patternProperties: {
                        type: "object",
                        additionalProperties: {
                            $ref: "#"
                        },
                        default: {}
                    },
                    dependencies: {
                        type: "object",
                        additionalProperties: {
                            anyOf: [{
                                $ref: "#"
                            }, {
                                $ref: "#/definitions/stringArray"
                            }]
                        }
                    },
                    enum: {
                        type: "array",
                        minItems: 1,
                        uniqueItems: !0
                    },
                    type: {
                        anyOf: [{
                            $ref: "#/definitions/simpleTypes"
                        }, {
                            type: "array",
                            items: {
                                $ref: "#/definitions/simpleTypes"
                            },
                            minItems: 1,
                            uniqueItems: !0
                        }]
                    },
                    format: {
                        anyOf: [{
                            type: "string",
                            enum: ["date-time", "uri", "email", "hostname", "ipv4", "ipv6", "regex"]
                        }, {
                            type: "string"
                        }]
                    },
                    allOf: {
                        allOf: [{
                            $ref: "#/definitions/schemaArray"
                        }]
                    },
                    anyOf: {
                        allOf: [{
                            $ref: "#/definitions/schemaArray"
                        }]
                    },
                    oneOf: {
                        allOf: [{
                            $ref: "#/definitions/schemaArray"
                        }]
                    },
                    not: {
                        allOf: [{
                            $ref: "#"
                        }]
                    }
                },
                dependencies: {
                    exclusiveMaximum: ["maximum"],
                    exclusiveMinimum: ["minimum"]
                },
                default: {}
            },
            "http://json-schema.org/draft-07/schema#": {
                title: U("schema.json", "Describes a JSON file using a schema. See json-schema.org for more info."),
                definitions: {
                    schemaArray: {
                        type: "array",
                        minItems: 1,
                        items: {
                            $ref: "#"
                        }
                    },
                    nonNegativeInteger: {
                        type: "integer",
                        minimum: 0
                    },
                    nonNegativeIntegerDefault0: {
                        allOf: [{
                            $ref: "#/definitions/nonNegativeInteger"
                        }, {
                            default: 0
                        }]
                    },
                    simpleTypes: {
                        enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
                    },
                    stringArray: {
                        type: "array",
                        items: {
                            type: "string"
                        },
                        uniqueItems: !0,
                        default: []
                    }
                },
                type: ["object", "boolean"],
                properties: {
                    $id: {
                        type: "string",
                        format: "uri-reference"
                    },
                    $schema: {
                        type: "string",
                        format: "uri"
                    },
                    $ref: {
                        type: "string",
                        format: "uri-reference"
                    },
                    $comment: {
                        type: "string"
                    },
                    title: {
                        type: "string"
                    },
                    description: {
                        type: "string"
                    },
                    default: !0,
                    readOnly: {
                        type: "boolean",
                        default: !1
                    },
                    examples: {
                        type: "array",
                        items: !0
                    },
                    multipleOf: {
                        type: "number",
                        exclusiveMinimum: 0
                    },
                    maximum: {
                        type: "number"
                    },
                    exclusiveMaximum: {
                        type: "number"
                    },
                    minimum: {
                        type: "number"
                    },
                    exclusiveMinimum: {
                        type: "number"
                    },
                    maxLength: {
                        $ref: "#/definitions/nonNegativeInteger"
                    },
                    minLength: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0"
                    },
                    pattern: {
                        type: "string",
                        format: "regex"
                    },
                    additionalItems: {
                        $ref: "#"
                    },
                    items: {
                        anyOf: [{
                            $ref: "#"
                        }, {
                            $ref: "#/definitions/schemaArray"
                        }],
                        default: !0
                    },
                    maxItems: {
                        $ref: "#/definitions/nonNegativeInteger"
                    },
                    minItems: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0"
                    },
                    uniqueItems: {
                        type: "boolean",
                        default: !1
                    },
                    contains: {
                        $ref: "#"
                    },
                    maxProperties: {
                        $ref: "#/definitions/nonNegativeInteger"
                    },
                    minProperties: {
                        $ref: "#/definitions/nonNegativeIntegerDefault0"
                    },
                    required: {
                        $ref: "#/definitions/stringArray"
                    },
                    additionalProperties: {
                        $ref: "#"
                    },
                    definitions: {
                        type: "object",
                        additionalProperties: {
                            $ref: "#"
                        },
                        default: {}
                    },
                    properties: {
                        type: "object",
                        additionalProperties: {
                            $ref: "#"
                        },
                        default: {}
                    },
                    patternProperties: {
                        type: "object",
                        additionalProperties: {
                            $ref: "#"
                        },
                        propertyNames: {
                            format: "regex"
                        },
                        default: {}
                    },
                    dependencies: {
                        type: "object",
                        additionalProperties: {
                            anyOf: [{
                                $ref: "#"
                            }, {
                                $ref: "#/definitions/stringArray"
                            }]
                        }
                    },
                    propertyNames: {
                        $ref: "#"
                    },
                    const: !0,
                    enum: {
                        type: "array",
                        items: !0,
                        minItems: 1,
                        uniqueItems: !0
                    },
                    type: {
                        anyOf: [{
                            $ref: "#/definitions/simpleTypes"
                        }, {
                            type: "array",
                            items: {
                                $ref: "#/definitions/simpleTypes"
                            },
                            minItems: 1,
                            uniqueItems: !0
                        }]
                    },
                    format: {
                        type: "string"
                    },
                    contentMediaType: {
                        type: "string"
                    },
                    contentEncoding: {
                        type: "string"
                    },
                    if: {
                        $ref: "#"
                    },
                    then: {
                        $ref: "#"
                    },
                    else: {
                        $ref: "#"
                    },
                    allOf: {
                        $ref: "#/definitions/schemaArray"
                    },
                    anyOf: {
                        $ref: "#/definitions/schemaArray"
                    },
                    oneOf: {
                        $ref: "#/definitions/schemaArray"
                    },
                    not: {
                        $ref: "#"
                    }
                },
                default: !0
            }
        }
    }
      , Fa = {
        id: U("schema.json.id", "A unique identifier for the schema."),
        $schema: U("schema.json.$schema", "The schema to verify this document against."),
        title: U("schema.json.title", "A descriptive title of the element."),
        description: U("schema.json.description", "A long description of the element. Used in hover menus and suggestions."),
        default: U("schema.json.default", "A default value. Used by suggestions."),
        multipleOf: U("schema.json.multipleOf", "A number that should cleanly divide the current value (i.e. have no remainder)."),
        maximum: U("schema.json.maximum", "The maximum numerical value, inclusive by default."),
        exclusiveMaximum: U("schema.json.exclusiveMaximum", "Makes the maximum property exclusive."),
        minimum: U("schema.json.minimum", "The minimum numerical value, inclusive by default."),
        exclusiveMinimum: U("schema.json.exclusiveMininum", "Makes the minimum property exclusive."),
        maxLength: U("schema.json.maxLength", "The maximum length of a string."),
        minLength: U("schema.json.minLength", "The minimum length of a string."),
        pattern: U("schema.json.pattern", "A regular expression to match the string against. It is not implicitly anchored."),
        additionalItems: U("schema.json.additionalItems", "For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail."),
        items: U("schema.json.items", "For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."),
        maxItems: U("schema.json.maxItems", "The maximum number of items that can be inside an array. Inclusive."),
        minItems: U("schema.json.minItems", "The minimum number of items that can be inside an array. Inclusive."),
        uniqueItems: U("schema.json.uniqueItems", "If all of the items in the array must be unique. Defaults to false."),
        maxProperties: U("schema.json.maxProperties", "The maximum number of properties an object can have. Inclusive."),
        minProperties: U("schema.json.minProperties", "The minimum number of properties an object can have. Inclusive."),
        required: U("schema.json.required", "An array of strings that lists the names of all properties required on this object."),
        additionalProperties: U("schema.json.additionalProperties", "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."),
        definitions: U("schema.json.definitions", "Not used for validation. Place subschemas here that you wish to reference inline with $ref."),
        properties: U("schema.json.properties", "A map of property names to schemas for each property."),
        patternProperties: U("schema.json.patternProperties", "A map of regular expressions on property names to schemas for matching properties."),
        dependencies: U("schema.json.dependencies", "A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."),
        enum: U("schema.json.enum", "The set of literal values that are valid."),
        type: U("schema.json.type", "Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."),
        format: U("schema.json.format", "Describes the format expected for the value."),
        allOf: U("schema.json.allOf", "An array of schemas, all of which must match."),
        anyOf: U("schema.json.anyOf", "An array of schemas, where at least one must match."),
        oneOf: U("schema.json.oneOf", "An array of schemas, exactly one of which must match."),
        not: U("schema.json.not", "A schema which must not match."),
        $id: U("schema.json.$id", "A unique identifier for the schema."),
        $ref: U("schema.json.$ref", "Reference a definition hosted on any location."),
        $comment: U("schema.json.$comment", "Comments from schema authors to readers or maintainers of the schema."),
        readOnly: U("schema.json.readOnly", "Indicates that the value of the instance is managed exclusively by the owning authority."),
        examples: U("schema.json.examples", "Sample JSON values associated with a particular schema, for the purpose of illustrating usage."),
        contains: U("schema.json.contains", 'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'),
        propertyNames: U("schema.json.propertyNames", "If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."),
        const: U("schema.json.const", "An instance validates successfully against this keyword if its value is equal to the value of the keyword."),
        contentMediaType: U("schema.json.contentMediaType", "Describes the media type of a string property."),
        contentEncoding: U("schema.json.contentEncoding", "Describes the content encoding of a string property."),
        if: U("schema.json.if", 'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'),
        then: U("schema.json.then", 'The "if" subschema is used for validation when the "if" subschema succeeds.'),
        else: U("schema.json.else", 'The "else" subschema is used for validation when the "if" subschema fails.')
    };
    for (var Da in xr.schemas) {
        var kr = xr.schemas[Da];
        for (var vt in kr.properties) {
            var Tr = kr.properties[vt];
            typeof Tr == "boolean" && (Tr = kr.properties[vt] = {});
            var Fi = Fa[vt];
            Fi ? Tr.description = Fi : console.log(vt + ": localize('schema.json." + vt + `', "")`)
        }
    }
    function ja(e, t) {
        var r = []
          , n = []
          , i = []
          , s = -1
          , a = Ze(e.getText(), !1)
          , o = a.scan();
        function u(T) {
            r.push(T),
            n.push(i.length)
        }
        for (; o !== 17; ) {
            switch (o) {
            case 1:
            case 3:
                {
                    var l = e.positionAt(a.getTokenOffset()).line
                      , c = {
                        startLine: l,
                        endLine: l,
                        kind: o === 1 ? "object" : "array"
                    };
                    i.push(c);
                    break
                }
            case 2:
            case 4:
                {
                    var f = o === 2 ? "object" : "array";
                    if (i.length > 0 && i[i.length - 1].kind === f) {
                        var c = i.pop()
                          , h = e.positionAt(a.getTokenOffset()).line;
                        c && h > c.startLine + 1 && s !== c.startLine && (c.endLine = h - 1,
                        u(c),
                        s = c.startLine)
                    }
                    break
                }
            case 13:
                {
                    var l = e.positionAt(a.getTokenOffset()).line
                      , d = e.positionAt(a.getTokenOffset() + a.getTokenLength()).line;
                    a.getTokenError() === 1 && l + 1 < e.lineCount ? a.setPosition(e.offsetAt(pe.create(l + 1, 0))) : l < d && (u({
                        startLine: l,
                        endLine: d,
                        kind: ct.Comment
                    }),
                    s = l);
                    break
                }
            case 12:
                {
                    var m = e.getText().substr(a.getTokenOffset(), a.getTokenLength())
                      , v = m.match(/^\/\/\s*#(region\b)|(endregion\b)/);
                    if (v) {
                        var h = e.positionAt(a.getTokenOffset()).line;
                        if (v[1]) {
                            var c = {
                                startLine: h,
                                endLine: h,
                                kind: ct.Region
                            };
                            i.push(c)
                        } else {
                            for (var b = i.length - 1; b >= 0 && i[b].kind !== ct.Region; )
                                b--;
                            if (b >= 0) {
                                var c = i[b];
                                i.length = b,
                                h > c.startLine && s !== c.startLine && (c.endLine = h,
                                u(c),
                                s = c.startLine)
                            }
                        }
                    }
                    break
                }
            }
            o = a.scan()
        }
        var N = t && t.rangeLimit;
        if (typeof N != "number" || r.length <= N)
            return r;
        t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri);
        for (var p = [], g = 0, _ = n; g < _.length; g++) {
            var L = _[g];
            L < 30 && (p[L] = (p[L] || 0) + 1)
        }
        for (var S = 0, A = 0, b = 0; b < p.length; b++) {
            var w = p[b];
            if (w) {
                if (w + S > N) {
                    A = b;
                    break
                }
                S += w
            }
        }
        for (var y = [], b = 0; b < r.length; b++) {
            var L = n[b];
            typeof L == "number" && (L < A || L === A && S++ < N) && y.push(r[b])
        }
        return y
    }
    function Ua(e, t, r) {
        function n(o) {
            for (var u = e.offsetAt(o), l = r.getNodeFromOffset(u, !0), c = []; l; ) {
                switch (l.type) {
                case "string":
                case "object":
                case "array":
                    var f = l.offset + 1
                      , h = l.offset + l.length - 1;
                    f < h && u >= f && u <= h && c.push(i(f, h)),
                    c.push(i(l.offset, l.offset + l.length));
                    break;
                case "number":
                case "boolean":
                case "null":
                case "property":
                    c.push(i(l.offset, l.offset + l.length));
                    break
                }
                if (l.type === "property" || l.parent && l.parent.type === "array") {
                    var d = a(l.offset + l.length, 5);
                    d !== -1 && c.push(i(l.offset, d))
                }
                l = l.parent
            }
            for (var m = void 0, v = c.length - 1; v >= 0; v--)
                m = Ft.create(c[v], m);
            return m || (m = Ft.create(q.create(o, o))),
            m
        }
        function i(o, u) {
            return q.create(e.positionAt(o), e.positionAt(u))
        }
        var s = Ze(e.getText(), !0);
        function a(o, u) {
            s.setPosition(o);
            var l = s.scan();
            return l === u ? s.getTokenOffset() + s.getTokenLength() : -1
        }
        return t.map(n)
    }
    function Ra(e, t) {
        var r = [];
        return t.visit(function(n) {
            var i;
            if (n.type === "property" && n.keyNode.value === "$ref" && ((i = n.valueNode) === null || i === void 0 ? void 0 : i.type) === "string") {
                var s = n.valueNode.value
                  , a = Va(t, s);
                if (a) {
                    var o = e.positionAt(a.offset);
                    r.push({
                        target: e.uri + "#" + (o.line + 1) + "," + (o.character + 1),
                        range: Oa(e, n.valueNode)
                    })
                }
            }
            return !0
        }),
        Promise.resolve(r)
    }
    function Oa(e, t) {
        return q.create(e.positionAt(t.offset + 1), e.positionAt(t.offset + t.length - 1))
    }
    function Va(e, t) {
        var r = $a(t);
        return r ? Pr(r, e.root) : null
    }
    function Pr(e, t) {
        if (!t)
            return null;
        if (e.length === 0)
            return t;
        var r = e.shift();
        if (t && t.type === "object") {
            var n = t.properties.find(function(a) {
                return a.keyNode.value === r
            });
            return n ? Pr(e, n.valueNode) : null
        } else if (t && t.type === "array" && r.match(/^(0|[1-9][0-9]*)$/)) {
            var i = Number.parseInt(r)
              , s = t.items[i];
            return s ? Pr(e, s) : null
        }
        return null
    }
    function $a(e) {
        return e === "#" ? [] : e[0] !== "#" || e[1] !== "/" ? null : e.substring(2).split(/\//).map(Wa)
    }
    function Wa(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~")
    }
    function qa(e) {
        var t = e.promiseConstructor || Promise
          , r = new wa(e.schemaRequestService,e.workspaceContext,t);
        r.setSchemaContributions(xr);
        var n = new ma(r,e.contributions,t,e.clientCapabilities)
          , i = new pa(r,e.contributions,t)
          , s = new Ia(r)
          , a = new xa(r,t);
        return {
            configure: function(o) {
                r.clearExternalSchemas(),
                o.schemas && o.schemas.forEach(function(u) {
                    r.registerExternalSchema(u.uri, u.fileMatch, u.schema)
                }),
                a.configure(o)
            },
            resetSchema: function(o) {
                return r.onResourceChange(o)
            },
            doValidation: a.doValidation.bind(a),
            parseJSONDocument: function(o) {
                return ga(o, {
                    collectComments: !0
                })
            },
            newJSONDocument: function(o, u) {
                return da(o, u)
            },
            getMatchingSchemas: r.getMatchingSchemas.bind(r),
            doResolve: n.doResolve.bind(n),
            doComplete: n.doComplete.bind(n),
            findDocumentSymbols: s.findDocumentSymbols.bind(s),
            findDocumentSymbols2: s.findDocumentSymbols2.bind(s),
            findDocumentColors: s.findDocumentColors.bind(s),
            getColorPresentations: s.getColorPresentations.bind(s),
            doHover: i.doHover.bind(i),
            getFoldingRanges: ja,
            getSelectionRanges: Ua,
            findDefinition: function() {
                return Promise.resolve([])
            },
            findLinks: Ra,
            format: function(o, u, l) {
                var c = void 0;
                if (u) {
                    var f = o.offsetAt(u.start)
                      , h = o.offsetAt(u.end) - f;
                    c = {
                        offset: f,
                        length: h
                    }
                }
                var d = {
                    tabSize: l ? l.tabSize : 4,
                    insertSpaces: (l == null ? void 0 : l.insertSpaces) === !0,
                    insertFinalNewline: (l == null ? void 0 : l.insertFinalNewline) === !0,
                    eol: `
`
                };
                return ea(o.getText(), c, d).map(function(m) {
                    return ve.replace(q.create(o.positionAt(m.offset), o.positionAt(m.offset + m.length)), m.content)
                })
            }
        }
    }
    var be = function(e, t, r, n) {
        function i(s) {
            return s instanceof r ? s : new r(function(a) {
                a(s)
            }
            )
        }
        return new (r || (r = Promise))(function(s, a) {
            function o(c) {
                try {
                    l(n.next(c))
                } catch (f) {
                    a(f)
                }
            }
            function u(c) {
                try {
                    l(n.throw(c))
                } catch (f) {
                    a(f)
                }
            }
            function l(c) {
                c.done ? s(c.value) : i(c.value).then(o, u)
            }
            l((n = n.apply(e, t || [])).next())
        }
        )
    }, ye = function(e, t) {
        var r = {
            label: 0,
            sent: function() {
                if (s[0] & 1)
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, n, i, s, a;
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        },
        typeof Symbol == "function" && (a[Symbol.iterator] = function() {
            return this
        }
        ),
        a;
        function o(l) {
            return function(c) {
                return u([l, c])
            }
        }
        function u(l) {
            if (n)
                throw new TypeError("Generator is already executing.");
            for (; r; )
                try {
                    if (n = 1,
                    i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i),
                    0) : i.next) && !(s = s.call(i, l[1])).done)
                        return s;
                    switch (i = 0,
                    s && (l = [l[0] & 2, s.value]),
                    l[0]) {
                    case 0:
                    case 1:
                        s = l;
                        break;
                    case 4:
                        return r.label++,
                        {
                            value: l[1],
                            done: !1
                        };
                    case 5:
                        r.label++,
                        i = l[1],
                        l = [0];
                        continue;
                    case 7:
                        l = r.ops.pop(),
                        r.trys.pop();
                        continue;
                    default:
                        if (s = r.trys,
                        !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                            r = 0;
                            continue
                        }
                        if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
                            r.label = l[1];
                            break
                        }
                        if (l[0] === 6 && r.label < s[1]) {
                            r.label = s[1],
                            s = l;
                            break
                        }
                        if (s && r.label < s[2]) {
                            r.label = s[2],
                            r.ops.push(l);
                            break
                        }
                        s[2] && r.ops.pop(),
                        r.trys.pop();
                        continue
                    }
                    l = t.call(e, r)
                } catch (c) {
                    l = [6, c],
                    i = 0
                } finally {
                    n = s = 0
                }
            if (l[0] & 5)
                throw l[1];
            return {
                value: l[0] ? l[1] : void 0,
                done: !0
            }
        }
    }, Di;
    typeof fetch != "undefined" && (Di = function(e) {
        return fetch(e).then(function(t) {
            return t.text()
        })
    }
    );
    var Ha = function() {
        function e(t, r) {
            this._ctx = t,
            this._languageSettings = r.languageSettings,
            this._languageId = r.languageId,
            this._languageService = qa({
                workspaceContext: {
                    resolveRelativePath: function(n, i) {
                        var s = i.substr(0, i.lastIndexOf("/") + 1);
                        return za(s, n)
                    }
                },
                schemaRequestService: r.enableSchemaRequest && Di
            }),
            this._languageService.configure(this._languageSettings)
        }
        return e.prototype.doValidation = function(t) {
            return be(this, void 0, void 0, function() {
                var r, n;
                return ye(this, function(i) {
                    return r = this._getTextDocument(t),
                    r ? (n = this._languageService.parseJSONDocument(r),
                    [2, this._languageService.doValidation(r, n, this._languageSettings)]) : [2, Promise.resolve([])]
                })
            })
        }
        ,
        e.prototype.doComplete = function(t, r) {
            return be(this, void 0, void 0, function() {
                var n, i;
                return ye(this, function(s) {
                    return n = this._getTextDocument(t),
                    i = this._languageService.parseJSONDocument(n),
                    [2, this._languageService.doComplete(n, r, i)]
                })
            })
        }
        ,
        e.prototype.doResolve = function(t) {
            return be(this, void 0, void 0, function() {
                return ye(this, function(r) {
                    return [2, this._languageService.doResolve(t)]
                })
            })
        }
        ,
        e.prototype.doHover = function(t, r) {
            return be(this, void 0, void 0, function() {
                var n, i;
                return ye(this, function(s) {
                    return n = this._getTextDocument(t),
                    i = this._languageService.parseJSONDocument(n),
                    [2, this._languageService.doHover(n, r, i)]
                })
            })
        }
        ,
        e.prototype.format = function(t, r, n) {
            return be(this, void 0, void 0, function() {
                var i, s;
                return ye(this, function(a) {
                    return i = this._getTextDocument(t),
                    s = this._languageService.format(i, r, n),
                    [2, Promise.resolve(s)]
                })
            })
        }
        ,
        e.prototype.resetSchema = function(t) {
            return be(this, void 0, void 0, function() {
                return ye(this, function(r) {
                    return [2, Promise.resolve(this._languageService.resetSchema(t))]
                })
            })
        }
        ,
        e.prototype.findDocumentSymbols = function(t) {
            return be(this, void 0, void 0, function() {
                var r, n, i;
                return ye(this, function(s) {
                    return r = this._getTextDocument(t),
                    n = this._languageService.parseJSONDocument(r),
                    i = this._languageService.findDocumentSymbols(r, n),
                    [2, Promise.resolve(i)]
                })
            })
        }
        ,
        e.prototype.findDocumentColors = function(t) {
            return be(this, void 0, void 0, function() {
                var r, n, i;
                return ye(this, function(s) {
                    return r = this._getTextDocument(t),
                    n = this._languageService.parseJSONDocument(r),
                    i = this._languageService.findDocumentColors(r, n),
                    [2, Promise.resolve(i)]
                })
            })
        }
        ,
        e.prototype.getColorPresentations = function(t, r, n) {
            return be(this, void 0, void 0, function() {
                var i, s, a;
                return ye(this, function(o) {
                    return i = this._getTextDocument(t),
                    s = this._languageService.parseJSONDocument(i),
                    a = this._languageService.getColorPresentations(i, s, r, n),
                    [2, Promise.resolve(a)]
                })
            })
        }
        ,
        e.prototype.getFoldingRanges = function(t, r) {
            return be(this, void 0, void 0, function() {
                var n, i;
                return ye(this, function(s) {
                    return n = this._getTextDocument(t),
                    i = this._languageService.getFoldingRanges(n, r),
                    [2, Promise.resolve(i)]
                })
            })
        }
        ,
        e.prototype.getSelectionRanges = function(t, r) {
            return be(this, void 0, void 0, function() {
                var n, i, s;
                return ye(this, function(a) {
                    return n = this._getTextDocument(t),
                    i = this._languageService.parseJSONDocument(n),
                    s = this._languageService.getSelectionRanges(n, r, i),
                    [2, Promise.resolve(s)]
                })
            })
        }
        ,
        e.prototype._getTextDocument = function(t) {
            for (var r = this._ctx.getMirrorModels(), n = 0, i = r; n < i.length; n++) {
                var s = i[n];
                if (s.uri.toString() === t)
                    return yr.create(t, this._languageId, s.version, s.getValue())
            }
            return null
        }
        ,
        e
    }()
      , Ba = "/".charCodeAt(0)
      , Mr = ".".charCodeAt(0);
    function Ya(e) {
        return e.charCodeAt(0) === Ba
    }
    function za(e, t) {
        if (Ya(t)) {
            var r = et.parse(e)
              , n = t.split("/");
            return r.with({
                path: ji(n)
            }).toString()
        }
        return Ga(e, t)
    }
    function ji(e) {
        for (var t = [], r = 0, n = e; r < n.length; r++) {
            var i = n[r];
            i.length === 0 || i.length === 1 && i.charCodeAt(0) === Mr || (i.length === 2 && i.charCodeAt(0) === Mr && i.charCodeAt(1) === Mr ? t.pop() : t.push(i))
        }
        e.length > 1 && e[e.length - 1].length === 0 && t.push("");
        var s = t.join("/");
        return e[0].length === 0 && (s = "/" + s),
        s
    }
    function Ga(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        for (var n = et.parse(e), i = n.path.split("/"), s = 0, a = t; s < a.length; s++) {
            var o = a[s];
            i.push.apply(i, o.split("/"))
        }
        return n.with({
            path: ji(i)
        }).toString()
    }
    self.onmessage = function() {
        Vn(function(e, t) {
            return new Ha(e,t)
        })
    }
}
)();
