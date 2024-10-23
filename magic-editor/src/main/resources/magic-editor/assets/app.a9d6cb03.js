var Bn = Object.defineProperty;
var Hn = (e, t, a) => t in e ? Bn(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : e[t] = a;
var _t = (e, t, a) => (Hn(e, typeof t != "symbol" ? t + "" : t, a),
a);
import {r as y, o as v, c as V, u as h, a as U, w, b as R, t as F, d as _, e as Ra, p as Ye, g as bt, f as pt, h as jn, i as We, n as be, j as k, k as gt, v as Mt, l as X, m as Ve, q as ye, F as te, s as fe, x as ve, y as pe, z as Et, A as et, B as _e, C as le, T as cn, D as Be, E as Vn, G as Gn, H as zn, I as oe, J as Yn, K as un, L as ee, M as mt, N as qn, O as Ue, P as Aa, Q as Ca, R as Kn, S as Wn, V as Xn} from "./vue.6f28a6f0.js";
import {a as Jn} from "./axios.23e7b955.js";
import {l as ja, e as $e, a as W, R as st, W as Qn, b as Zn, c as ei, m as ti, C as Va, K as ct, d as ht, M as ai, f as ni, g as na, T as ii, t as si} from "./vendor.3be44c84.js";
const oi = {
    __name: "App",
    setup(e) {
        let t = {};
        try {
            parent && parent.MAGIC_EDITOR_CONFIG && (t = {
                ...parent.MAGIC_EDITOR_CONFIG
            })
        } catch {}
        window.MAGIC_EDITOR_CONFIG && (t = {
            ...t,
            ...window.MAGIC_EDITOR_CONFIG
        }),
        t.baseURL = "./",
        t.serverURL = "./",
        t.inJar = !0;
        const a = s => {
            var o = window.location.search.substr(1).match(new RegExp("(^|&)" + s + "=([^&]*)(&|$)","i"));
            return o && unescape(o[2])
        }
          , n = a("headerName")
          , i = a("headerValue");
        return n && i && (t.request = t.request || {},
        t.request.beforeSend = s => (s.headers[n] = i,
        s)),
        (s, o) => {
            const r = y("magic-editor");
            return v(),
            V(r, {
                config: h(t)
            }, null, 8, ["config"])
        }
    }
};
const ri = "magic-editor"
  , li = "3.33.33"
  , ci = {
    dev: "vite",
    build: "vite build"
}
  , ui = {
    axios: "^0.24.0",
    "monaco-editor": "0.29.1",
    qs: "^6.10.1",
    vue: "^3.2.31"
}
  , di = {
    "@vitejs/plugin-vue": "^2.2.4",
    vite: "^2.8.6",
    "vite-plugin-svg-icons": "^1.1.0"
};
var pi = {
    name: ri,
    version: li,
    scripts: ci,
    dependencies: ui,
    devDependencies: di
};
const ia = "magic-";
class _i {
    constructor() {}
    set(t, a) {
        (Array.isArray(a) || typeof a == "object") && (a = JSON.stringify(a)),
        localStorage.setItem(`${ia}${t}`, a)
    }
    remove(t) {
        localStorage.removeItem(`${ia}${t}`)
    }
    get(t) {
        return localStorage.getItem(`${ia}${t}`)
    }
}
var De = new _i
  , Ia = {
    name: "English",
    message: {
        run: "Run",
        save: "Save",
        search: "Search",
        upload: "Upload",
        export: "Export",
        push: "Push",
        skin: "Skin",
        reload: "reload all resources",
        copy: "Copy",
        searchText: "Enter keywords to search",
        required: "Required",
        defaultValue: "Default Value",
        description: "Description",
        parameterType: "Parameter Type",
        view: "View",
        addRow: "Add Row",
        removeRow: "Remove Row",
        all: "All",
        clear: "Clear",
        empty: "{0} is empty.",
        type: "Type",
        date: "Date",
        name: "Name",
        group: "{0} Group",
        i18n: "Language",
        tips: "Tips",
        ok: "OK",
        refresh: "Refresh",
        loading: "Loading...",
        nodata: "no data.",
        cancel: "Cancel",
        update: "Update",
        create: "Create",
        username: "Username",
        password: "Password",
        createDataSource: "Create {0}",
        chooseFile: "Please Choose File",
        expand: "Expand",
        collapse: "Collapse",
        selectAll: "Select All",
        deselectAll: "Deselect All",
        hide: "Hide",
        login: "Login",
        ignore: "Ignore",
        document: "Document",
        joinGroup: "Join QQ Group",
        untitled: "Untitled",
        log: "Log",
        enable: "Enable",
        variable: "Variable Info",
        switchLocale: "Switch Language To {0}, It work at after refreshing the page, Do you want to Refresh the page ?",
        loadClass: "Load Classes...",
        loadClassError: "Failed Load Classes",
        switchSkin: "Switch Skin To\u300C{0}\u300D",
        loadClassFinish: "Class Loaded",
        tryAutoLogin: "Try Auto Login",
        autoLoginSuccess: "Auto Login Success",
        getCurrentLoginUser: "Load Current Logined User",
        getResource: "Load {0} Resources",
        getResourceFinish: "{0} Resources Loaded",
        connectDebugServer: "Debug Server Connecting...",
        debugServerClose: "Debug Server Disconnected",
        connectDebugServerSuccess: "Connect Debug Server Success",
        reloadResourceSuccess: "Resource Reload Success",
        getDetail: "Load {0} Detail",
        getDetailSuccess: "Load {0} Detail Success",
        lockSuccess: "Lock {0} Success",
        lockFailed: "Failed to Lock {0}",
        unlockSuccess: "UnLock {0} Success",
        unlockFailed: "Failed to UnLock {0}",
        updateTips: "Update {0}",
        saveSuccess: "Save {0} Success",
        saveFailed: "Failed to Save {0}",
        newVersionRelease: "New Version {0} available",
        versionLastest: "Current Version is Lastese",
        versionUpdate: "New Version {0} available<br>Do you want Upgrade?",
        changelog: "CHANGELOG",
        versionConflict: "Version does not matched frontend: {0}, backend: {1}, Please Check!",
        versionCheck: "Version Check",
        loadConfigError: "Failed to load configuration",
        logout: "Logout",
        logoutSuccess: "Logout Success",
        logoutConfirm: "Are you sure Logout {0} ?",
        deleteConfirm: "Do you want Delete {0}",
        deleteSuccess: "Delete {0} Success",
        deleteFailed: "Failed to Delete {0}",
        deleteTips: "Delete {0}",
        remote: "Remote",
        secret: "Secret",
        exported: "The selected resource has been exported",
        exportNoneSelect: "Please select and then export",
        pushNoneSelect: "Please select and then push",
        responseBody: "Body",
        responseHeader: "Header",
        responseStructure: "Structure",
        root: "Root",
        pushWarning: "When the full mode is pushed, the local data shall prevail and the full coverage update will be carried out. Do you want to continue?",
        uploadWarning: "When uploading in full mode, the overwrite update operation is performed based on the uploaded data, and other interfaces may be deleted.<br>In the case of partial export, it is recommended to use incremental update. Do you want to continue?",
        noValidate: "No Validate",
        validatePattern: "Regex attern",
        validateExpression: "Expression"
    },
    plugin: {
        loading: "Load plugin \u300C{0}\u300D",
        loaded: "Plugin\u300C{0}\u300D Loaded",
        loadFailed: "Failed to load plugin\u300C{0}\u300D"
    },
    resource: {
        createGroup: "Create Group",
        updateGroup: "Update Group",
        copyGroup: "Copy Group",
        deleteGroupConfirm: "Do you want Delete {0} Group\u300C{1}\u300D?",
        deleteGroupSuccess: "Delete {0} Group\u300C{1}\u300DSuccess",
        deleteGroupFailed: "Failed to Delete {0} Group \u300C{1}\u300D",
        groupExport: "Group\u300C{0}\u300D's {1} Exported",
        moveGroup: "Move Group",
        moveRootGroupConfirm: "Do you want move Group \u300C{0}\u300Dinto root?",
        moveRootSuccess: "Move {0} Group \u300C{1}\u300Dinto root Success",
        moveRootFailed: "Failed to Move {0} Group\u300C{1}\u300D into root",
        moveGroupSuccess: "Move {0} Group \u300C{1}\u300D Success",
        moveGroupFailed: "Failed to Move {0} Group \u300C{1}\u300D",
        moveFileSuccess: "Move {0} Success",
        moveResourceFailed: "Failed to Move {0}",
        saveGroupSuccess: "Save {0} Group {1}\u300D Success",
        saveGroupFailed: "Failed to Save {0} Group \u300C{1}\u300D",
        copyPathSuccess: "Copy {0} Path {1}\u300D Success",
        copyPathFailed: "Failed to Copy {0} Path \u300C{1}\u300D",
        copyRelativePathSuccess: "Copy {0} Relative Path \u300C{1}\u300D Success",
        copyRelativePathFailed: "Failed to Copy {0} Relative Path \u300C{1}\u300D",
        contextmenu: {
            copy: "Copy {0}",
            copyWithPath: "Copy Absolute Path",
            copyRelativePath: "Copy Relative Path",
            lock: "Lock",
            unlock: "UnLock",
            delete: "Delete",
            newFile: "New {0}",
            deleteGroup: "Delete Group",
            exportGroup: "Export Group",
            moveToRoot: "Move To Root"
        },
        header: {
            expand: "Expand All",
            collapse: "Collapse All",
            asc: "Ascending",
            desc: "Descending",
            position: "Select Opened File"
        },
        form: {
            groupName: "Group Name",
            groupPath: "Group Path",
            placeholder: {
                name: "Please Enter {0} Group Name",
                path: "Please Enter {0} Group Path"
            }
        }
    },
    editor: {
        tab: {
            close: "Close",
            closeOther: "Close Other Tabs",
            closeLeft: "Close Tabs to the Left",
            closeRight: "Close Tabs to the Right",
            closeAll: "Close All Tabs"
        },
        tooltip: {
            complection: "Trigger Suggest",
            resume: "Resume Breakpoint",
            stepInto: "Step Into",
            format: "Reformat Code",
            recent: "Recent Opened Files"
        },
        triggerSuggest: "Trigger Suggest"
    },
    api: {
        title: "Api Info",
        name: "Api",
        form: {
            method: "Method",
            name: "Name",
            path: "Path",
            placeholder: {
                name: "Please Enter Api Name",
                path: "Please Enter Api Path"
            }
        },
        navbars: {
            parameter: "Parameters",
            header: "Headers",
            path: "PathVariables",
            body: "Body",
            option: "Options",
            description: "Descriptions",
            groupOption: "Group Options"
        },
        validateType: "Validate Type",
        expression: "Expression or Regex Pattern",
        validate: "Validate Description",
        field: "Field",
        test: {
            requestBodyError: "RequestBody Has Error, please check!",
            missPath: "Please enter PathVariable",
            requestError: "Failed to send Request\u300C{0}\u300D",
            success: "\u300C{0}\u300DRequest finish, Status:<em>{1}</em> Size:<em>{2}</em> Time\uFF1A<em>{3} ms</em>",
            begin: "Start Request For\u300C{0}\u300D"
        },
        structure: {
            content: "{0} Structure has changed, Do you wang to change\uFF1F",
            ok: "Change"
        }
    },
    datasource: {
        title: "DataSource",
        name: "DataSource",
        copySuccess: "Copy {0} Success",
        copyFailed: "Failed to Copy {0}",
        test: "Test",
        connected: "Connected",
        connectFailed: `Failed to Connect, Reason:\r
{0}`,
        primary: "Primary",
        form: {
            placeholder: {
                name: "DataSource Name, Only Display Use",
                key: "DataSource Key, Required",
                url: "Please Enter jdbcURL\uFF0Ceg: jdbc:mysql://localhost/dbname",
                username: "Please Enter Database username, Optional",
                password: "Please Enter Database password, Optional",
                driver: "DriverClass, Optional",
                type: "Pool Type, Optional",
                maxRows: "Max Return Rows"
            },
            driver: "Driver",
            type: "Type",
            other: "Others"
        }
    },
    fn: {
        title: "Function Info",
        name: "Function",
        number: "Nunmber",
        string: "String",
        collection: "Collection",
        returnValue: "Return Types",
        parameter: "Function Parameters",
        description: "Function Description",
        form: {
            name: "Name",
            path: "Path",
            placeholder: {
                name: "Please Enter Function Name",
                path: "Please Enter Function Path"
            }
        }
    },
    toolbars: {
        debug: "Debug",
        log: "Run Log",
        history: "History",
        event: "Event",
        global: "Global Parameters",
        response: "Response",
        viewHistory: "History:{0}"
    },
    event: {
        message: "Message"
    },
    history: {
        name: "History",
        operator: "Operators"
    },
    upload: {
        full: "Full Upload",
        increment: "Increment Upload",
        success: "{0} Success",
        failed: "Failed to {0}"
    },
    push: {
        full: "Full Push",
        increment: "Increment Push",
        success: "{0} Success",
        failed: "Failed to {0}"
    },
    backup: {
        full: "Full Backup",
        backupSuccess: "Full Backup Success",
        rollback: "Rollback",
        current: "Current",
        difference: "Difference",
        rollbackSuccess: "Rollback {0} Success",
        rollbackFailed: "Failed to Rollback {0}",
        rollbackConfirm: "this operation will overview current resources, Do you want to continue?"
    },
    online: {
        login: "User Login",
        loginTips: "User {0} Login, IP: {1}",
        logout: "User Logout",
        logoutTips: "User {0} Logout, IP: {1}",
        onlines: "Online: {0}"
    },
    log: {
        hide: "Click to hide multiline log",
        show: "{0} lines of log are hidden, Click to show",
        scrollEnd: "Scroll to End"
    },
    code: {
        error: "Error({0})",
        invalid: "Error,HttpStatus({0})",
        httpError: "Error",
        "-2": "Current is Readonly, Cannot be Operated",
        "-10": "Unauthorized Operation",
        1001: "Group Not Found",
        1002: "Not Support the Group Type",
        1003: "Remote Cannot be empty",
        1004: "secretKey Cannot be empty",
        1005: "The name will repeat after moving. Please modify the name and try again.",
        1006: "Source object and grouping cannot be consistent",
        1007: "Resoirce Not Found",
        1008: "The current resource has been locked. Please operate after unlocking",
        1009: "This path has been used. Please try another path",
        1010: "There are conflicts in resource [{0}], please check",
        1011: "The path will conflict after moving. Please try another path",
        1012: "Request Method Cannot be empty",
        1013: "Reqeust Path Cannot be empty",
        1014: "Function Path Cannot be empty",
        1015: "The configured file path does not exist, please check",
        1016: "The Api [{0} ({1})] conflicts with the application and cannot be registered",
        1017: "Script Cannot be empty",
        1018: "Name Cannot be empty",
        1019: "Path Cannot be empty",
        1020: "jdbcURL Cannot be empty",
        1021: "key Cannot be empty",
        1022: "The data source key has been used. Please replace it and try again",
        1023: "Please Choose Group",
        1024: "Cron Expression Cannot be empty",
        1025: "The name cannot contain special characters. Only Chinese, numbers, letters and +-.() and . cannot be start",
        1026: "The data source key cannot contain special characters, only Chinese, numbers, letters, _",
        1027: "Failed to save. The group name under the same group cannot be duplicate and cannot contain special characters.",
        1028: "Parameter validation failed",
        1029: "Header validation failed",
        1030: "PathVariable validation failed",
        1031: "RequestBody validation failed",
        1032: "Please Upload File",
        1033: "Failed to validate Signature. Please check whether the secret key is correct",
        1034: "Backup is not enabled and cannot be operated",
        1035: "Api Not Found"
    }
}
  , hi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ia
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Pt = {
    name: "\u7B80\u4F53\u4E2D\u6587",
    message: {
        run: "\u8FD0\u884C",
        save: "\u4FDD\u5B58",
        search: "\u641C\u7D22",
        upload: "\u4E0A\u4F20",
        export: "\u5BFC\u51FA",
        push: "\u63A8\u9001",
        skin: "\u76AE\u80A4",
        reload: "\u91CD\u65B0\u52A0\u8F7D\u6240\u6709\u6570\u636E",
        copy: "\u590D\u5236",
        searchText: "\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22",
        required: "\u5FC5\u586B",
        defaultValue: "\u9ED8\u8BA4\u503C",
        description: "\u63CF\u8FF0",
        parameterType: "\u53C2\u6570\u7C7B\u578B",
        view: "\u89C6\u56FE",
        addRow: "\u589E\u52A0\u4E00\u884C",
        removeRow: "\u5220\u9664\u4E00\u884C",
        all: "\u5168\u90E8",
        clear: "\u6E05\u7A7A",
        empty: "\u6682\u65E0{0}",
        type: "\u7C7B\u578B",
        date: "\u65F6\u95F4",
        name: "\u540D\u79F0",
        group: "{0}\u5206\u7EC4",
        i18n: "\u8BED\u8A00",
        tips: "\u63D0\u793A",
        ok: "\u786E\u5B9A",
        refresh: "\u5237\u65B0",
        loading: "\u52A0\u8F7D\u4E2D",
        nodata: "\u65E0\u6570\u636E",
        cancel: "\u53D6\u6D88",
        update: "\u4FEE\u6539",
        create: "\u521B\u5EFA",
        username: "\u7528\u6237\u540D",
        password: "\u5BC6\u7801",
        createDataSource: "\u521B\u5EFA{0}",
        chooseFile: "\u8BF7\u9009\u62E9\u6587\u4EF6",
        expand: "\u5C55\u5F00",
        collapse: "\u6536\u7F29",
        selectAll: "\u5168\u9009",
        deselectAll: "\u53D6\u6D88\u5168\u9009",
        hide: "\u9690\u85CF",
        login: "\u767B\u5F55",
        ignore: "\u4E0D\u518D\u63D0\u9192",
        document: "\u5E2E\u52A9\u6587\u6863",
        joinGroup: "\u52A0\u5165QQ\u7FA4",
        untitled: "\u672A\u5B9A\u4E49\u540D\u79F0",
        log: "\u65E5\u5FD7",
        enable: "\u542F\u7528",
        variable: "\u53D8\u91CF\u4FE1\u606F",
        switchLocale: "\u5DF2\u5207\u6362\u81F3{0}\uFF0C\u5237\u65B0\u9875\u9762\u540E\u751F\u6548\uFF0C\u662F\u5426\u5237\u65B0\uFF1F",
        loadClass: "\u52A0\u8F7Dclasses\u4FE1\u606F...",
        loadClassError: "\u52A0\u8F7Dclasses\u4FE1\u606F\u5931\u8D25",
        switchSkin: "\u5207\u6362\u76AE\u80A4\u81F3\u300C{0}\u300D",
        loadClassFinish: "classes\u4FE1\u606F\u52A0\u8F7D\u5B8C\u6BD5",
        tryAutoLogin: "\u5C1D\u8BD5\u81EA\u52A8\u767B\u5F55",
        autoLoginSuccess: "\u81EA\u52A8\u767B\u5F55\u6210\u529F",
        getCurrentLoginUser: "\u83B7\u53D6\u5F53\u524D\u767B\u5F55\u7528\u6237\u4FE1\u606F",
        getResource: "\u83B7\u53D6{0}\u8D44\u6E90",
        getResourceFinish: "\u83B7\u53D6{0}\u8D44\u6E90\u5B8C\u6BD5",
        connectDebugServer: "\u8FDE\u63A5\u8C03\u8BD5\u670D\u52A1\u5668...",
        debugServerClose: "\u8C03\u8BD5\u670D\u52A1\u5668\u5DF2\u65AD\u5F00",
        connectDebugServerSuccess: "\u8FDE\u63A5\u8C03\u8BD5\u670D\u52A1\u5668\u6210\u529F",
        reloadResourceSuccess: "\u91CD\u65B0\u52A0\u8F7D\u8D44\u6E90\u6210\u529F",
        getDetail: "\u83B7\u53D6{0}",
        getDetailSuccess: "\u83B7\u53D6{0}\u8BE6\u60C5\u6210\u529F",
        lockSuccess: "\u6210\u529F\u9501\u5B9A{0}",
        lockFailed: "\u9501\u5B9A{0}\u5931\u8D25",
        unlockSuccess: "\u6210\u529F\u89E3\u9501{0}",
        unlockFailed: "\u89E3\u9501{0}\u5931\u8D25",
        updateTips: "\u4FEE\u6539{0}",
        saveSuccess: "\u4FDD\u5B58{0}\u6210\u529F",
        saveFailed: "\u4FDD\u5B58{0}\u5931\u8D25",
        newVersionRelease: "\u7248\u672C\u68C0\u6D4B\u5B8C\u6BD5\uFF0C\u6700\u65B0\u7248\u672C\u4E3A\uFF1A{0},\u5EFA\u8BAE\u66F4\u65B0\uFF01\uFF01",
        versionLastest: "\u7248\u672C\u68C0\u6D4B\u5B8C\u6BD5\uFF0C\u5F53\u524D\u5DF2\u662F\u6700\u65B0\u7248",
        versionUpdate: "\u68C0\u6D4B\u5230\u5DF2\u6709\u65B0\u7248\u672C{0}\uFF0C\u662F\u5426\u66F4\u65B0\uFF1F",
        changelog: "\u66F4\u65B0\u65E5\u5FD7",
        versionConflict: "\u68C0\u6D4B\u5230\u524D\u540E\u7AEF\u7248\u672C\u4E0D\u4E00\u81F4\uFF08\u524D\u7AEF\uFF1A{0} \u540E\u7AEF\uFF1A{1}\uFF09\uFF0C\u8BF7\u68C0\u67E5",
        versionCheck: "\u7248\u672C\u68C0\u6D4B",
        loadConfigError: "\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25",
        logout: "\u6CE8\u9500\u767B\u5F55",
        logoutSuccess: "\u6CE8\u9500\u767B\u5F55\u6210\u529F",
        logoutConfirm: "\u662F\u5426\u8981\u6CE8\u9500\u767B\u5F55\u300C{0}\u300D",
        deleteConfirm: "\u662F\u5426\u8981\u5220\u9664{0}",
        deleteSuccess: "\u5220\u9664{0}\u6210\u529F",
        deleteFailed: "\u5220\u9664{0}\u5931\u8D25",
        deleteTips: "\u5220\u9664{0}",
        remote: "\u8FDC\u7A0B\u5730\u5740",
        secret: "\u79D8\u94A5",
        exported: "\u6570\u636E\u5DF2\u5BFC\u51FA\u5B8C\u6BD5",
        exportNoneSelect: "\u8BF7\u9009\u62E9\u4E4B\u518D\u5728\u8FDB\u884C\u5BFC\u51FA\uFF01",
        pushNoneSelect: "\u8BF7\u9009\u62E9\u4E4B\u540E\u518D\u8FDB\u884C\u63A8\u9001\uFF01",
        responseBody: "Body",
        responseHeader: "\u54CD\u5E94Header",
        responseStructure: "\u54CD\u5E94\u7ED3\u6784",
        root: "\u6839\u8282\u70B9",
        pushWarning: "\u5168\u91CF\u6A21\u5F0F\u63A8\u9001\u65F6\uFF0C\u4EE5\u672C\u5730\u6570\u636E\u4E3A\u51C6\u5168\u91CF\u8986\u76D6\u66F4\u65B0\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
        uploadWarning: "\u5168\u91CF\u6A21\u5F0F\u4E0A\u4F20\u65F6\uFF0C\u4EE5\u4E0A\u4F20\u7684\u6570\u636E\u4E3A\u51C6\u8FDB\u884C\u8986\u76D6\u66F4\u65B0\u64CD\u4F5C\uFF0C\u53EF\u80FD\u4F1A\u5220\u9664\u5176\u4ED6\u63A5\u53E3<br>\u5728\u975E\u5168\u91CF\u5BFC\u51FA\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u589E\u91CF\u66F4\u65B0\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
        noValidate: "\u4E0D\u9A8C\u8BC1",
        validatePattern: "\u6B63\u5219\u9A8C\u8BC1",
        validateExpression: "\u8868\u8FBE\u5F0F\u9A8C\u8BC1"
    },
    plugin: {
        loading: "\u52A0\u8F7D\u63D2\u4EF6\u300C{0}\u300D",
        loaded: "\u5DF2\u52A0\u8F7D\u63D2\u4EF6\u300C{0}\u300D",
        loadFailed: "\u52A0\u8F7D\u63D2\u4EF6\u300C{0}\u300D\u5931\u8D25"
    },
    resource: {
        createGroup: "\u521B\u5EFA\u5206\u7EC4",
        updateGroup: "\u4FEE\u6539\u5206\u7EC4",
        copyGroup: "\u590D\u5236\u5206\u7EC4",
        deleteGroupConfirm: "\u662F\u5426\u8981\u5220\u9664{0}\u5206\u7EC4\u300C{1}\u300D\uFF1F",
        deleteGroupSuccess: "\u5220\u9664{0}\u5206\u7EC4\u300C{1}\u300D\u6210\u529F",
        deleteGroupFailed: "\u5220\u9664{0}\u5206\u7EC4\u300C{1}\u300D\u5931\u8D25",
        groupExport: "\u5206\u7EC4\u300C{0}\u300D\u76F8\u5173{1}\u5DF2\u5BFC\u51FA",
        moveGroup: "\u79FB\u52A8\u5206\u7EC4",
        moveRootGroupConfirm: "\u662F\u5426\u8981\u5C06\u5206\u7EC4\u300C{0}\u300D\u79FB\u52A8\u81F3\u6839\u8282\u70B9",
        moveRootSuccess: "\u79FB\u52A8{0}\u5206\u7EC4\u300C{1}\u300D\u81F3\u6839\u8282\u70B9\u6210\u529F",
        moveRootFailed: "\u79FB\u52A8{0}\u5206\u7EC4\u300C{1}\u300D\u81F3\u6839\u8282\u70B9\u5931\u8D25",
        moveGroupSuccess: "\u79FB\u52A8{0}\u5206\u7EC4\u300C{1}\u300D\u6210\u529F",
        moveGroupFailed: "\u79FB\u52A8{0}\u5206\u7EC4\u300C{1}\u300D\u5931\u8D25",
        moveFileSuccess: "\u79FB\u52A8\u8D44\u6E90\u300C{0}\u300D\u6210\u529F",
        moveResourceFailed: "\u79FB\u52A8\u8D44\u6E90\u300C{0}\u300D\u5931\u8D25",
        saveGroupSuccess: "\u4FDD\u5B58{0}\u5206\u7EC4\u300C{1}\u300D\u6210\u529F",
        saveGroupFailed: "\u4FDD\u5B58{0}\u5206\u7EC4\u300C{1}\u300D\u5931\u8D25",
        copyPathSuccess: "{0}\u8DEF\u5F84\u300C{1}\u300D\u590D\u5236\u6210\u529F",
        copyPathFailed: "{0}\u8DEF\u5F84\u300C{1}\u300D\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",
        copyRelativePathSuccess: "{0}\u76F8\u5BF9\u8DEF\u5F84\u300C{1}\u300D\u590D\u5236\u6210\u529F",
        copyRelativePathFailed: "{0}\u76F8\u5BF9\u8DEF\u5F84\u300C{1}\u300D\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",
        contextmenu: {
            copy: "\u590D\u5236{0}",
            copyWithPath: "\u590D\u5236\u8DEF\u5F84",
            copyRelativePath: "\u590D\u5236\u76F8\u5BF9\u8DEF\u5F84",
            lock: "\u9501\u5B9A",
            unlock: "\u89E3\u9501",
            delete: "\u5220\u9664",
            newFile: "\u65B0\u5EFA{0}",
            deleteGroup: "\u5220\u9664\u5206\u7EC4",
            exportGroup: "\u5BFC\u51FA\u5206\u7EC4",
            moveToRoot: "\u79FB\u52A8\u81F3\u6839\u8282\u70B9"
        },
        header: {
            expand: "\u5168\u90E8\u5C55\u5F00",
            collapse: "\u5168\u90E8\u6298\u53E0",
            asc: "\u6309\u5B57\u6BCD\u5347\u5E8F",
            desc: "\u6309\u5B57\u6BCD\u964D\u5E8F",
            position: "\u5B9A\u4F4D\u5F53\u524D\u6587\u4EF6"
        },
        form: {
            groupName: "\u5206\u7EC4\u540D\u79F0",
            groupPath: "\u5206\u7EC4\u8DEF\u5F84",
            placeholder: {
                name: "\u8BF7\u8F93\u5165{0}\u5206\u7EC4\u540D\u79F0",
                path: "\u8BF7\u8F93\u5165{0}\u5206\u7EC4\u8DEF\u5F84"
            }
        }
    },
    editor: {
        tab: {
            close: "\u5173\u95ED",
            closeOther: "\u5173\u95ED\u5176\u5B83",
            closeLeft: "\u5173\u95ED\u5DE6\u4FA7",
            closeRight: "\u5173\u95ED\u53F3\u4FA7",
            closeAll: "\u5168\u90E8\u5173\u95ED"
        },
        tooltip: {
            complection: "\u4EE3\u7801\u63D0\u793A",
            resume: "\u6062\u590D\u65AD\u70B9",
            stepInto: "\u6B65\u8FDB",
            format: "\u4EE3\u7801\u683C\u5F0F\u5316",
            recent: "\u6700\u8FD1\u6253\u5F00"
        },
        triggerSuggest: "\u89E6\u53D1\u4EE3\u7801\u63D0\u793A"
    },
    api: {
        title: "\u63A5\u53E3\u4FE1\u606F",
        name: "\u63A5\u53E3",
        form: {
            method: "\u8BF7\u6C42\u65B9\u6CD5",
            name: "\u63A5\u53E3\u540D\u79F0",
            path: "\u63A5\u53E3\u8DEF\u5F84",
            placeholder: {
                name: "\u8BF7\u8F93\u5165\u63A5\u53E3\u540D\u79F0",
                path: "\u8BF7\u8F93\u5165\u63A5\u53E3\u8DEF\u5F84"
            }
        },
        navbars: {
            parameter: "\u8BF7\u6C42\u53C2\u6570",
            header: "\u8BF7\u6C42Header",
            path: "\u8DEF\u5F84\u53D8\u91CF",
            body: "\u8BF7\u6C42Body",
            option: "\u63A5\u53E3\u9009\u9879",
            description: "\u63A5\u53E3\u63CF\u8FF0",
            groupOption: "\u5206\u7EC4\u9009\u9879"
        },
        validateType: "\u9A8C\u8BC1\u65B9\u5F0F",
        expression: "\u8868\u8FBE\u5F0F\u6216\u6B63\u5219\u8868\u8FBE\u5F0F",
        validate: "\u9A8C\u8BC1\u8BF4\u660E",
        field: "\u5B57\u6BB5",
        test: {
            requestBodyError: "RequestBody \u53C2\u6570\u6709\u8BEF\uFF0C\u8BF7\u68C0\u67E5\uFF01",
            missPath: "\u8BF7\u586B\u5199\u8DEF\u5F84\u53D8\u91CF\u540E\u5728\u6D4B\u8BD5\uFF01",
            requestError: "\u8BF7\u6C42\u300C{0}\u300D\u51FA\u9519",
            success: "\u300C{0}\u300D\u6D4B\u8BD5\u5B8C\u6BD5\uFF0C\u72B6\u6001\uFF1A<em>{1}</em> \u5927\u5C0F\uFF1A<em>{2}</em> \u8017\u65F6\uFF1A<em>{3} ms</em>",
            begin: "\u5F00\u59CB\u6D4B\u8BD5\u300C{0}\u300D"
        },
        structure: {
            content: "\u5F53\u524D {0} \u7ED3\u6784\u53D1\u751F\u53D8\u5316\uFF0C\u662F\u5426\u66F4\u65B0\uFF1F",
            ok: "\u66F4\u65B0"
        }
    },
    datasource: {
        title: "DataSource",
        name: "\u6570\u636E\u6E90",
        copySuccess: "\u590D\u5236{0}\u6210\u529F",
        copyFailed: "\u590D\u5236{0}\u5931\u8D25",
        test: "\u6D4B\u8BD5\u8FDE\u63A5",
        connected: "\u8FDE\u63A5\u6210\u529F",
        connectFailed: `\u8FDE\u63A5\u5931\u8D25\uFF0C\u9519\u8BEF\u539F\u56E0\uFF1A\r
{0}`,
        primary: "\u4E3B\u6570\u636E\u6E90",
        form: {
            placeholder: {
                name: "\u6570\u636E\u6E90\u540D\u79F0\uFF0C\u4EC5\u505A\u663E\u793A\u4F7F\u7528",
                key: "\u6570\u636E\u6E90Key\uFF0C\u540E\u7EED\u4EE3\u7801\u4E2D\u4F7F\u7528",
                url: "\u8BF7\u8F93\u5165jdbcURL\uFF0C\u5982\uFF1Ajdbc:mysql://localhost/dbname",
                username: "\u8BF7\u8F93\u5165\u6570\u636E\u5E93\u7528\u6237\u540D",
                password: "\u8BF7\u8F93\u5165\u6570\u636E\u5E93\u5BC6\u7801",
                driver: "\u9A71\u52A8\u7C7B\uFF0C\u53EF\u9009\uFF0C\u5185\u90E8\u81EA\u52A8\u8BC6\u522B\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u8F93\u5165\u6307\u5B9A",
                type: "\u8FDE\u63A5\u6C60\u7C7B\u578B\uFF0C\u53EF\u9009\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u8F93\u5165\u6307\u5B9A",
                maxRows: "\u6700\u591A\u8FD4\u56DE\u6761\u6570\uFF0C-1\u4E3A\u4E0D\u9650\u5236"
            },
            driver: "\u9A71\u52A8\u7C7B",
            type: "\u7C7B\u578B",
            other: "\u5176\u5B83\u914D\u7F6E"
        }
    },
    task: {
        title: "\u5B9A\u65F6\u4EFB\u52A1\u4FE1\u606F",
        name: "\u5B9A\u65F6\u4EFB\u52A1",
        form: {
            name: "\u4EFB\u52A1\u540D\u79F0",
            path: "\u4EFB\u52A1\u8DEF\u5F84",
            placeholder: {
                cron: "\u8BF7\u8F93\u5165Cron\u8868\u8FBE\u5F0F",
                name: "\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",
                path: "\u8BF7\u8F93\u5165\u4EFB\u52A1\u8DEF\u5F84",
                description: "\u8BF7\u8F93\u5165\u4EFB\u52A1\u63CF\u8FF0"
            }
        }
    },
    fn: {
        title: "\u51FD\u6570\u4FE1\u606F",
        name: "\u51FD\u6570",
        number: "\u6570\u503C",
        string: "\u5B57\u7B26\u4E32",
        collection: "\u96C6\u5408",
        fnName: "\u51FD\u6570\u540D\u79F0",
        returnValue: "\u8FD4\u56DE\u503C",
        parameter: "\u51FD\u6570\u53C2\u6570",
        description: "\u51FD\u6570\u63CF\u8FF0",
        form: {
            name: "\u51FD\u6570\u540D\u79F0",
            path: "\u51FD\u6570\u8DEF\u5F84",
            placeholder: {
                name: "\u8BF7\u8F93\u5165\u51FD\u6570\u540D\u79F0",
                path: "\u8BF7\u8F93\u5165\u51FD\u6570\u8DEF\u5F84"
            }
        }
    },
    toolbars: {
        debug: "\u8C03\u8BD5\u4FE1\u606F",
        log: "\u8FD0\u884C\u65E5\u5FD7",
        history: "\u5386\u53F2\u8BB0\u5F55",
        event: "\u4E8B\u4EF6",
        global: "\u5168\u5C40\u53C2\u6570",
        response: "\u6267\u884C\u7ED3\u679C",
        viewHistory: "\u5386\u53F2\u8BB0\u5F55\uFF1A{0}"
    },
    event: {
        message: "\u4E8B\u4EF6\u5185\u5BB9"
    },
    history: {
        name: "\u5386\u53F2\u8BB0\u5F55",
        operator: "\u64CD\u4F5C\u4EBA"
    },
    upload: {
        full: "\u5168\u91CF\u4E0A\u4F20",
        increment: "\u589E\u91CF\u4E0A\u4F20",
        success: "{0}\u6210\u529F",
        failed: "{0}\u5931\u8D25"
    },
    push: {
        full: "\u5168\u91CF\u63A8\u9001",
        increment: "\u589E\u91CF\u63A8\u9001",
        success: "{0} Success",
        failed: "Failed to {0}"
    },
    backup: {
        full: "\u5168\u91CF\u5907\u4EFD",
        backupSuccess: "\u5168\u91CF\u5907\u4EFD\u5B8C\u6BD5",
        rollback: "\u8FD8\u539F",
        current: "\u5F53\u524D\u7248\u672C",
        difference: "\u5BF9\u6BD4\u4E0D\u540C",
        rollbackSuccess: "\u6062\u590D{0}\u6210\u529F",
        rollbackFailed: "\u6062\u590D{0}\u5931\u8D25",
        rollbackConfirm: "\u8BE5\u64CD\u4F5C\u4F1A\u8986\u76D6\u66F4\u65B0\u5F53\u524D\u8D44\u6E90\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F"
    },
    online: {
        login: "\u7528\u6237\u4E0A\u7EBF",
        loginTips: "\u7528\u6237\u300C{0}\u300D\u5DF2\u4E0A\u7EBF\uFF0CIP\uFF1A{1}",
        logout: "\u7528\u6237\u4E0B\u7EBF",
        logoutTips: "\u7528\u6237\u300C{0}\u300D\u5DF2\u4E0B\u7EBF\uFF0CIP\uFF1A{1}",
        onlines: "\u5F53\u524D\u5728\u7EBF\uFF1A{0}\u4EBA"
    },
    log: {
        hide: "\u70B9\u51FB\u9690\u85CF\u591A\u884C\u65E5\u5FD7",
        show: "\u6709 {0} \u884C\u65E5\u5FD7\u88AB\u9690\u85CF\uFF0C\u70B9\u51FB\u663E\u793A",
        scrollEnd: "\u6EDA\u52A8\u81F3\u7ED3\u5C3E"
    },
    code: {
        error: "\u8BF7\u6C42\u51FA\u9519\uFF0C\u5F02\u5E38\u4EE3\u7801({0})",
        invalid: "\u8BF7\u6C42\u51FA\u9519\uFF0CHttpStatus({0})",
        httpError: "\u8BF7\u6C42\u51FA\u9519",
        "-2": "\u5F53\u524D\u4E3A\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u65E0\u6CD5\u64CD\u4F5C",
        "-10": "\u65E0\u6743\u9650\u64CD\u4F5C\u3002",
        1001: "\u627E\u4E0D\u5230\u5206\u7EC4\u4FE1\u606F",
        1002: "\u4E0D\u652F\u6301\u8BE5\u5206\u7EC4\u7C7B\u578B",
        1003: "\u76EE\u6807\u7F51\u5740\u4E0D\u80FD\u4E3A\u7A7A",
        1004: "secretKey\u4E0D\u80FD\u4E3A\u7A7A",
        1005: "\u79FB\u52A8\u540E\u540D\u79F0\u4F1A\u91CD\u590D\uFF0C\u8BF7\u4FEE\u6539\u540D\u79F0\u540E\u5728\u8BD5\u3002",
        1006: "\u6E90\u5BF9\u8C61\u548C\u5206\u7EC4\u4E0D\u80FD\u4E00\u81F4",
        1007: "\u627E\u4E0D\u5230\u5BF9\u5E94\u6587\u4EF6\u6216\u5206\u7EC4",
        1008: "\u5F53\u524D\u8D44\u6E90\u5DF2\u88AB\u9501\u5B9A\uFF0C\u8BF7\u89E3\u9501\u540E\u5728\u64CD\u4F5C\u3002",
        1009: "\u8BE5\u8DEF\u5F84\u5DF2\u88AB\u4F7F\u7528,\u8BF7\u6362\u4E00\u4E2A\u8DEF\u5F84\u5728\u8BD5",
        1010: "\u8D44\u6E90\u4E2D[{0}]\u6709\u51B2\u7A81\uFF0C\u8BF7\u68C0\u67E5",
        1011: "\u79FB\u52A8\u540E\u8DEF\u5F84\u4F1A\u51B2\u7A81,\u8BF7\u6362\u4E00\u4E2A\u8DEF\u5F84\u5728\u8BD5",
        1012: "\u8BF7\u6C42\u65B9\u6CD5\u4E0D\u80FD\u4E3A\u7A7A",
        1013: "\u8BF7\u6C42\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A",
        1014: "\u51FD\u6570\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A",
        1015: "\u914D\u7F6E\u7684\u6587\u4EF6\u8DEF\u5F84\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5",
        1016: "\u63A5\u53E3[{0}({1})]\u4E0E\u5E94\u7528\u51B2\u7A81\uFF0C\u65E0\u6CD5\u6CE8\u518C",
        1017: "\u811A\u672C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",
        1018: "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
        1019: "\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A",
        1020: "jdbcURL\u4E0D\u80FD\u4E3A\u7A7A",
        1021: "key\u4E0D\u80FD\u4E3A\u7A7A",
        1022: "\u6570\u636E\u6E90key\u5DF2\u88AB\u4F7F\u7528\uFF0C\u8BF7\u66F4\u6362\u540E\u5728\u8BD5",
        1023: "\u8BF7\u9009\u62E9\u5206\u7EC4",
        1024: "cron\u8868\u8FBE\u5F0F\u4E0D\u80FD\u4E3A\u7A7A",
        1025: "\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\uFF0C\u53EA\u5141\u8BB8\u4E2D\u6587\u3001\u6570\u5B57\u3001\u5B57\u6BCD\u4EE5\u53CA+_-.()\u7684\u7EC4\u5408\u4E14\u4E0D\u80FD.\u5F00\u5934",
        1026: "\u6570\u636E\u6E90Key\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\uFF0C\u53EA\u5141\u8BB8\u4E2D\u6587\u3001\u6570\u5B57\u3001\u5B57\u6BCD\u4EE5\u53CA_\u7EC4\u5408",
        1027: "\u4FDD\u5B58\u5931\u8D25,\u540C\u4E00\u7EC4\u4E0B\u5206\u7EC4\u540D\u79F0\u4E0D\u80FD\u91CD\u590D\u4E14\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u3002",
        1028: "\u53C2\u6570\u9A8C\u8BC1\u5931\u8D25",
        1029: "header\u9A8C\u8BC1\u5931\u8D25",
        1030: "\u8DEF\u5F84\u53D8\u91CF\u9A8C\u8BC1\u5931\u8D25",
        1031: "body\u9A8C\u8BC1\u5931\u8D25",
        1032: "\u8BF7\u4E0A\u4F20\u6587\u4EF6",
        1033: "\u7B7E\u540D\u9A8C\u8BC1\u5931\u8D25,\u8BF7\u68C0\u67E5\u79D8\u94A5\u662F\u5426\u6B63\u786E",
        1034: "\u672A\u542F\u7528\u5907\u4EFD\uFF0C\u65E0\u6CD5\u64CD\u4F5C",
        1035: "\u627E\u4E0D\u5230\u63A5\u53E3"
    }
}
  , fi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pt
}, Symbol.toStringTag, {
    value: "Module"
}));
const gi = De.get("locale");
let qt = Pt;
gi === "en" && (qt = Ia);
function c(e, ...t) {
    try {
        const a = e.split(".").reduce( (n, i) => n[i], qt);
        return a && t.length > 0 ? a.replace(/\{(\d+)\}/g, (n, i) => t[i]) : a || e
    } catch {
        return e
    }
}
function mi(e, t) {
    let a = Pt;
    e === "en" && (a = Ia);
    const n = (i, s) => {
        Object.entries(s).forEach( ([o,r]) => {
            typeof r == "string" ? i[o] = r : (i[o] || (i[o] = {}),
            n(i[o], r))
        }
        )
    }
    ;
    n(a, t)
}
function vi(e, t) {
    if (Pt === qt)
        return t;
    const a = Pt.code[`${e}`]
      , n = qt.code[`${e}`];
    if (a && n) {
        const i = a.replace(/([()\[\]\.])/g, "\\$1").replace(/{\d+}/g, "(.*?)");
        if (i) {
            const s = []
              , o = new RegExp(i,"g");
            let r;
            for (; (r = o.exec(t)) != null; )
                s.push(r);
            return c(`code.${e}`, s.splice(0, 1))
        }
    }
    return t
}
let dn = pi.version
  , bi = "V" + dn.replace(/\./g, "_");
const D = {
    BASE_URL: "",
    WEBSOCKET_SERVER: "",
    SERVER_URL: "",
    AUTO_SAVE: !0,
    user: null,
    DECORATION_TIMEOUT: 1e4,
    CHECK_UPDATE: !0,
    BLOCK_CLOSE: !0,
    MAGIC_API_VERSION_TEXT: dn,
    MAGIC_API_VERSION: bi,
    API_DEFAULT_METHOD: "GET",
    CLIENT_ID: "none",
    HEADER_REQUEST_CLIENT_ID: "Magic-Request-Client-Id",
    HEADER_REQUEST_SCRIPT_ID: "Magic-Request-Script-Id",
    HEADER_REQUEST_BREAKPOINTS: "Magic-Request-Breakpoints",
    HEADER_RESPONSE_MAGIC_CONTENT_TYPE: "ma-content-type",
    HEADER_APPLICATION_STREAM: "application/octet-stream",
    HEADER_CONTENT_DISPOSITION: "ma-content-disposition",
    HEADER_MAGIC_TOKEN: "magic-token",
    HEADER_MAGIC_TOKEN_VALUE: "unauthorization",
    IGNORE_VERSION: "ignore-version",
    RECENT_OPENED_TAB: "recent_opened_tab",
    RECENT_OPENED: "recent_opened",
    RESPONSE_CODE_DEBUG: 1e3,
    RESPONSE_CODE_SCRIPT_ERROR: -1e3,
    RESPONSE_NO_PERMISSION: -10,
    DEFAULT_EXPAND: !0,
    LOGINED: !1,
    LOG_MAX_ROWS: 1 / 0,
    LOCKED: "1",
    UNLOCK: "0",
    STORE: {
        theme: "theme",
        token: "token"
    },
    PLUGINS: [],
    GLOBAL: {
        parameters: [],
        headers: []
    },
    THEME: "default",
    JDBC_DRIVERS: ["com.mysql.jdbc.Driver", "com.mysql.cj.jdbc.Driver", "oracle.jdbc.driver.OracleDriver", "org.postgresql.Driver", "com.microsoft.sqlserver.jdbc.SQLServerDriver", "com.ibm.db2.jcc.DB2Driver"],
    DATASOURCE_TYPES: ["com.zaxxer.hikari.HikariDataSource", "com.alibaba.druid.pool.DruidDataSource", "org.apache.tomcat.jdbc.pool.DataSource", "org.apache.commons.dbcp2.BasicDataSource"],
    OPTIONS: [],
    EDITOR_FONT_FAMILY: 'JetBrainsMono, Consolas, "Courier New",monospace, \u5FAE\u8F6F\u96C5\u9ED1',
    EDITOR_FONT_SIZE: 14,
    FONT_LIGATURES: !0,
    VALIDATE_TYPES: [{
        value: "pass",
        text: c("message.noValidate")
    }, {
        value: "expression",
        text: c("message.validateExpression")
    }, {
        value: "pattern",
        text: c("message.validatePattern")
    }],
    DEFAULT_VALIDATE_TYPE: "pass",
    REQUEST_PARAMETER_TYPES: [{
        value: "String",
        text: "String"
    }, {
        value: "Boolean",
        text: "Boolean"
    }, {
        value: "Integer",
        text: "Integer"
    }, {
        value: "Date",
        text: "Date"
    }, {
        value: "Double",
        text: "Double"
    }, {
        value: "Long",
        text: "Long"
    }, {
        value: "Short",
        text: "Short"
    }, {
        value: "Float",
        text: "Float"
    }, {
        value: "Byte",
        text: "Byte"
    }, {
        value: "MultipartFile",
        text: "MultipartFile"
    }, {
        value: "MultipartFiles",
        text: "MultipartFiles"
    }],
    GLOBAL_PARAMETER_TYPES: [{
        value: "String",
        text: "String"
    }, {
        value: "Boolean",
        text: "Boolean"
    }, {
        value: "Integer",
        text: "Integer"
    }, {
        value: "Date",
        text: "Date"
    }, {
        value: "Double",
        text: "Double"
    }, {
        value: "Long",
        text: "Long"
    }, {
        value: "Short",
        text: "Short"
    }, {
        value: "Float",
        text: "Float"
    }, {
        value: "Byte",
        text: "Byte"
    }],
    DEFAULT_REQUEST_PARAMETER_TYPE: "String",
    REQUEST_SIMPLE_TYPES: [{
        value: "String",
        text: "String"
    }, {
        value: "Boolean",
        text: "Boolean"
    }, {
        value: "Integer",
        text: "Integer"
    }, {
        value: "Date",
        text: "Date"
    }, {
        value: "Double",
        text: "Double"
    }, {
        value: "Long",
        text: "Long"
    }, {
        value: "Short",
        text: "Short"
    }, {
        value: "Float",
        text: "Float"
    }, {
        value: "Byte",
        text: "Byte"
    }],
    DEFAULT_REQUEST_SIMPLE_TYPE: "String",
    REQUEST_METHODS: [{
        value: "GET",
        text: "GET"
    }, {
        value: "POST",
        text: "POST"
    }, {
        value: "PUT",
        text: "PUT"
    }, {
        value: "DELETE",
        text: "DELETE"
    }, {
        value: "HEAD",
        text: "HEAD"
    }, {
        value: "PATCH",
        text: "PATCH"
    }],
    DEFAULT_REQUEST_METHOD: "GET",
    FUNCTION_RETURN_TYPES: [{
        value: "java.lang.Number",
        text: c("fn.number")
    }, {
        value: "java.lang.String",
        text: c("fn.string")
    }, {
        value: "java.util.Collection",
        text: c("fn.collection")
    }, {
        value: "java.util.Map",
        text: "Map"
    }, {
        value: "java.lang.Object",
        text: "Object"
    }],
    BODY_DATA_TYPES: [{
        value: "String",
        text: "String"
    }, {
        value: "Integer",
        text: "Integer"
    }, {
        value: "Double",
        text: "Double"
    }, {
        value: "Long",
        text: "Long"
    }, {
        value: "Short",
        text: "Short"
    }, {
        value: "Float",
        text: "Float"
    }, {
        value: "Byte",
        text: "Byte"
    }, {
        value: "Boolean",
        text: "Boolean"
    }, {
        value: "Date",
        text: "Date"
    }, {
        value: "Object",
        text: "Object"
    }, {
        value: "Array",
        text: "Array"
    }, {
        value: "Any",
        text: "Any"
    }],
    DEFAULT_FUNCTION_RETURN_TYPE: "java.lang.Object",
    config: {}
}
  , Ei = {
    style: {
        "white-space": "pre-wrap"
    }
}
  , pn = {
    __name: "magic-alert",
    props: {
        title: {
            type: String,
            default: c("message.tips")
        },
        ok: {
            type: String,
            default: c("message.ok")
        },
        message: {
            type: String,
            required: !0
        },
        onClose: {
            type: Function,
            default: () => {}
        }
    },
    setup(e) {
        const t = U(!0);
        return (a, n) => {
            const i = y("magic-button")
              , s = y("magic-button-group")
              , o = y("magic-dialog");
            return v(),
            V(o, {
                value: t.value,
                "onUpdate:value": n[1] || (n[1] = r => t.value = r),
                title: e.title,
                ref: "dialog",
                onClose: n[2] || (n[2] = r => e.onClose())
            }, {
                default: w( () => [R("pre", Ei, F(e.message), 1), _(s, {
                    align: "center",
                    style: {
                        padding: "5px 0"
                    }
                }, {
                    default: w( () => [_(i, {
                        value: e.ok,
                        type: "active",
                        onOnClick: n[0] || (n[0] = r => a.$refs.dialog.close())
                    }, null, 8, ["value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["value", "title"])
        }
    }
};
var yi = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: pn
}, Symbol.toStringTag, {
    value: "Module"
}));
const Ti = ["innerHTML"]
  , _n = {
    __name: "magic-confirm",
    props: {
        title: {
            type: String,
            default: c("message.tips")
        },
        ok: {
            type: String,
            default: c("message.ok")
        },
        cancel: {
            type: String,
            default: c("message.cancel")
        },
        message: {
            type: String,
            required: !0
        },
        success: {
            type: Function,
            default: () => {}
        },
        onClose: {
            type: Function,
            default: () => {}
        }
    },
    setup(e) {
        const t = U(!0);
        return (a, n) => {
            const i = y("magic-button")
              , s = y("magic-button-group")
              , o = y("magic-dialog");
            return v(),
            V(o, {
                value: t.value,
                "onUpdate:value": n[2] || (n[2] = r => t.value = r),
                title: e.title,
                ref: "dialog",
                onClose: n[3] || (n[3] = r => e.onClose())
            }, {
                default: w( () => [R("pre", {
                    innerHTML: e.message,
                    style: {
                        "white-space": "pre-wrap"
                    }
                }, null, 8, Ti), _(s, {
                    align: "right",
                    style: {
                        padding: "5px 0"
                    }
                }, {
                    default: w( () => [_(i, {
                        value: e.ok,
                        type: "active",
                        onOnClick: n[0] || (n[0] = () => {
                            e.success(),
                            a.$refs.dialog.close()
                        }
                        )
                    }, null, 8, ["value"]), _(i, {
                        value: e.cancel,
                        onOnClick: n[1] || (n[1] = r => a.$refs.dialog.close())
                    }, null, 8, ["value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["value", "title"])
        }
    }
};
var Si = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _n
}, Symbol.toStringTag, {
    value: "Module"
}));
let hn = null;
const Ga = (e, t) => {
    const a = document.createElement("div");
    document.querySelector(".magic-editor .magic-mounts").appendChild(a);
    const n = Ra(e, {
        ...t,
        onClose: () => a.remove()
    });
    hn(n),
    n.mount(a)
}
  , me = {
    alert: (e, t, a) => Ga(pn, {
        message: e,
        title: t,
        ok: a
    }),
    confirm: (e, t, a) => Ga(_n, {
        title: e,
        message: t,
        success: a
    })
}
  , fn = (e, t) => {
    hn = t,
    Object.keys(me).forEach(a => e.config.globalProperties[`$${a}`] = me[a])
}
;
var xi = Object.freeze(Object.defineProperty({
    __proto__: null,
    install: fn,
    default: me
}, Symbol.toStringTag, {
    value: "Module"
}));
function Re(e) {
    this.__parent = e,
    this.__character_count = 0,
    this.__indent_count = -1,
    this.__alignment_count = 0,
    this.__wrap_point_index = 0,
    this.__wrap_point_character_count = 0,
    this.__wrap_point_indent_count = -1,
    this.__wrap_point_alignment_count = 0,
    this.__items = []
}
Re.prototype.clone_empty = function() {
    var e = new Re(this.__parent);
    return e.set_indent(this.__indent_count, this.__alignment_count),
    e
}
;
Re.prototype.item = function(e) {
    return e < 0 ? this.__items[this.__items.length + e] : this.__items[e]
}
;
Re.prototype.has_match = function(e) {
    for (var t = this.__items.length - 1; t >= 0; t--)
        if (this.__items[t].match(e))
            return !0;
    return !1
}
;
Re.prototype.set_indent = function(e, t) {
    this.is_empty() && (this.__indent_count = e || 0,
    this.__alignment_count = t || 0,
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count))
}
;
Re.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length,
    this.__wrap_point_character_count = this.__character_count,
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count,
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count)
}
;
Re.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count
}
;
Re.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
        this.__parent.add_new_line();
        var e = this.__parent.current_line;
        return e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count),
        e.__items = this.__items.slice(this.__wrap_point_index),
        this.__items = this.__items.slice(0, this.__wrap_point_index),
        e.__character_count += this.__character_count - this.__wrap_point_character_count,
        this.__character_count = this.__wrap_point_character_count,
        e.__items[0] === " " && (e.__items.splice(0, 1),
        e.__character_count -= 1),
        !0
    }
    return !1
}
;
Re.prototype.is_empty = function() {
    return this.__items.length === 0
}
;
Re.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1]
}
;
Re.prototype.push = function(e) {
    this.__items.push(e);
    var t = e.lastIndexOf(`
`);
    t !== -1 ? this.__character_count = e.length - t : this.__character_count += e.length
}
;
Re.prototype.pop = function() {
    var e = null;
    return this.is_empty() || (e = this.__items.pop(),
    this.__character_count -= e.length),
    e
}
;
Re.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1,
    this.__character_count -= this.__parent.indent_size)
}
;
Re.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1)
}
;
Re.prototype.trim = function() {
    for (; this.last() === " "; )
        this.__items.pop(),
        this.__character_count -= 1
}
;
Re.prototype.toString = function() {
    var e = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count)) : (e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count),
    e += this.__items.join("")),
    e
}
;
function Ft(e, t) {
    this.__cache = [""],
    this.__indent_size = e.indent_size,
    this.__indent_string = e.indent_char,
    e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)),
    t = t || "",
    e.indent_level > 0 && (t = new Array(e.indent_level + 1).join(this.__indent_string)),
    this.__base_string = t,
    this.__base_string_length = t.length
}
Ft.prototype.get_indent_size = function(e, t) {
    var a = this.__base_string_length;
    return t = t || 0,
    e < 0 && (a = 0),
    a += e * this.__indent_size,
    a += t,
    a
}
;
Ft.prototype.get_indent_string = function(e, t) {
    var a = this.__base_string;
    return t = t || 0,
    e < 0 && (e = 0,
    a = ""),
    t += e * this.__indent_size,
    this.__ensure_cache(t),
    a += this.__cache[t],
    a
}
;
Ft.prototype.__ensure_cache = function(e) {
    for (; e >= this.__cache.length; )
        this.__add_column()
}
;
Ft.prototype.__add_column = function() {
    var e = this.__cache.length
      , t = 0
      , a = "";
    this.__indent_size && e >= this.__indent_size && (t = Math.floor(e / this.__indent_size),
    e -= t * this.__indent_size,
    a = new Array(t + 1).join(this.__indent_string)),
    e && (a += new Array(e + 1).join(" ")),
    this.__cache.push(a)
}
;
function Ae(e, t) {
    this.__indent_cache = new Ft(e,t),
    this.raw = !1,
    this._end_with_newline = e.end_with_newline,
    this.indent_size = e.indent_size,
    this.wrap_line_length = e.wrap_line_length,
    this.indent_empty_lines = e.indent_empty_lines,
    this.__lines = [],
    this.previous_line = null,
    this.current_line = null,
    this.next_line = new Re(this),
    this.space_before_token = !1,
    this.non_breaking_space = !1,
    this.previous_token_wrapped = !1,
    this.__add_outputline()
}
Ae.prototype.__add_outputline = function() {
    this.previous_line = this.current_line,
    this.current_line = this.next_line.clone_empty(),
    this.__lines.push(this.current_line)
}
;
Ae.prototype.get_line_number = function() {
    return this.__lines.length
}
;
Ae.prototype.get_indent_string = function(e, t) {
    return this.__indent_cache.get_indent_string(e, t)
}
;
Ae.prototype.get_indent_size = function(e, t) {
    return this.__indent_cache.get_indent_size(e, t)
}
;
Ae.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty()
}
;
Ae.prototype.add_new_line = function(e) {
    return this.is_empty() || !e && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(),
    !0)
}
;
Ae.prototype.get_code = function(e) {
    this.trim(!0);
    var t = this.current_line.pop();
    t && (t[t.length - 1] === `
` && (t = t.replace(/\n+$/g, "")),
    this.current_line.push(t)),
    this._end_with_newline && this.__add_outputline();
    var a = this.__lines.join(`
`);
    return e === `\r
` ? a = a.replace(/([^\r])\n/g, `$1${e}`) : e !== `
` && (a = a.replace(/[\n]/g, e)),
    a
}
;
Ae.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point()
}
;
Ae.prototype.set_indent = function(e, t) {
    return e = e || 0,
    t = t || 0,
    this.next_line.set_indent(e, t),
    this.__lines.length > 1 ? (this.current_line.set_indent(e, t),
    !0) : (this.current_line.set_indent(),
    !1)
}
;
Ae.prototype.add_raw_token = function(e) {
    for (var t = 0; t < e.newlines; t++)
        this.__add_outputline();
    this.current_line.set_indent(-1),
    this.current_line.push(e.whitespace_before),
    this.current_line.push(e.text),
    this.space_before_token = !1,
    this.non_breaking_space = !1,
    this.previous_token_wrapped = !1
}
;
Ae.prototype.add_token = function(e) {
    this.__add_space_before_token(),
    this.current_line.push(e),
    this.space_before_token = !1,
    this.non_breaking_space = !1,
    this.previous_token_wrapped = this.current_line._allow_wrap()
}
;
Ae.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(),
    this.current_line.push(" "))
}
;
Ae.prototype.remove_indent = function(e) {
    for (var t = this.__lines.length; e < t; )
        this.__lines[e]._remove_indent(),
        e++;
    this.current_line._remove_wrap_indent()
}
;
Ae.prototype.trim = function(e) {
    for (e = e === void 0 ? !1 : e,
    this.current_line.trim(); e && this.__lines.length > 1 && this.current_line.is_empty(); )
        this.__lines.pop(),
        this.current_line = this.__lines[this.__lines.length - 1],
        this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
}
;
Ae.prototype.just_added_newline = function() {
    return this.current_line.is_empty()
}
;
Ae.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty()
}
;
Ae.prototype.ensure_empty_line_above = function(e, t) {
    for (var a = this.__lines.length - 2; a >= 0; ) {
        var n = this.__lines[a];
        if (n.is_empty())
            break;
        if (n.item(0).indexOf(e) !== 0 && n.item(-1) !== t) {
            this.__lines.splice(a + 1, 0, new Re(this)),
            this.previous_line = this.__lines[this.__lines.length - 2];
            break
        }
        a--
    }
}
;
function ka(e, t, a, n) {
    this.type = e,
    this.text = t,
    this.comments_before = null,
    this.newlines = a || 0,
    this.whitespace_before = n || "",
    this.parent = null,
    this.next = null,
    this.previous = null,
    this.opened = null,
    this.closed = null,
    this.directives = null
}
var Oi = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a"
  , gn = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a"
  , La = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc"
  , mn = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f"
  , Ri = "(?:\\\\u[0-9a-fA-F]{4}|[" + Oi + La + "])"
  , Ai = "(?:\\\\u[0-9a-fA-F]{4}|[" + gn + La + mn + "])*";
const vn = new RegExp(Ri + Ai,"g")
  , Ci = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + gn + La + mn + "])+")
  , Bt = /[\n\r\u2028\u2029]/
  , Ut = new RegExp(`\r
|` + Bt.source)
  , Ht = new RegExp(Ut.source,"g");
function tt(e, t) {
    this.raw_options = Ii(e, t),
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
tt.prototype._get_array = function(e, t) {
    var a = this.raw_options[e]
      , n = t || [];
    return typeof a == "object" ? a !== null && typeof a.concat == "function" && (n = a.concat()) : typeof a == "string" && (n = a.split(/[^a-zA-Z0-9_/-]+/)),
    n
}
;
tt.prototype._get_boolean = function(e, t) {
    var a = this.raw_options[e]
      , n = a === void 0 ? !!t : !!a;
    return n
}
;
tt.prototype._get_characters = function(e, t) {
    var a = this.raw_options[e]
      , n = t || "";
    return typeof a == "string" && (n = a.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")),
    n
}
;
tt.prototype._get_number = function(e, t) {
    var a = this.raw_options[e];
    t = parseInt(t, 10),
    isNaN(t) && (t = 0);
    var n = parseInt(a, 10);
    return isNaN(n) && (n = t),
    n
}
;
tt.prototype._get_selection = function(e, t, a) {
    var n = this._get_selection_list(e, t, a);
    if (n.length !== 1)
        throw new Error("Invalid Option Value: The option '" + e + `' can only be one of the following values:
` + t + `
You passed in: '` + this.raw_options[e] + "'");
    return n[0]
}
;
tt.prototype._get_selection_list = function(e, t, a) {
    if (!t || t.length === 0)
        throw new Error("Selection list cannot be empty.");
    if (a = a || [t[0]],
    !this._is_valid_selection(a, t))
        throw new Error("Invalid Default Value!");
    var n = this._get_array(e, a);
    if (!this._is_valid_selection(n, t))
        throw new Error("Invalid Option Value: The option '" + e + `' can contain only the following values:
` + t + `
You passed in: '` + this.raw_options[e] + "'");
    return n
}
;
tt.prototype._is_valid_selection = function(e, t) {
    return e.length && t.length && !e.some(function(a) {
        return t.indexOf(a) === -1
    })
}
;
function Ii(e, t) {
    var a = {};
    e = ki(e);
    var n;
    for (n in e)
        n !== t && (a[n] = e[n]);
    if (t && e[t])
        for (n in e[t])
            a[n] = e[t][n];
    return a
}
function ki(e) {
    var t = {}, a;
    for (a in e) {
        var n = a.replace(/-/g, "_");
        t[n] = e[a]
    }
    return t
}
var Li = ["before-newline", "after-newline", "preserve-newline"];
function bn(e) {
    tt.call(this, e, "js");
    var t = this.raw_options.brace_style || null;
    t === "expand-strict" ? this.raw_options.brace_style = "expand" : t === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var a = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = !1,
    this.brace_style = "collapse";
    for (var n = 0; n < a.length; n++)
        a[n] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = a[n];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"),
    this.break_chained_methods = this._get_boolean("break_chained_methods"),
    this.space_in_paren = this._get_boolean("space_in_paren"),
    this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"),
    this.jslint_happy = this._get_boolean("jslint_happy"),
    this.space_after_anon_function = this._get_boolean("space_after_anon_function"),
    this.space_after_named_function = this._get_boolean("space_after_named_function"),
    this.keep_array_indentation = this._get_boolean("keep_array_indentation"),
    this.space_before_conditional = this._get_boolean("space_before_conditional", !0),
    this.unescape_strings = this._get_boolean("unescape_strings"),
    this.e4x = this._get_boolean("e4x"),
    this.comma_first = this._get_boolean("comma_first"),
    this.operator_position = this._get_selection("operator_position", Li),
    this.test_output_raw = this._get_boolean("test_output_raw"),
    this.jslint_happy && (this.space_after_anon_function = !0)
}
bn.prototype = new tt;
var En = !1;
function Ce(e) {
    this.__input = e || "",
    this.__input_length = this.__input.length,
    this.__position = 0
}
Ce.prototype.restart = function() {
    this.__position = 0
}
;
Ce.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1)
}
;
Ce.prototype.hasNext = function() {
    return this.__position < this.__input_length
}
;
Ce.prototype.next = function() {
    var e = null;
    return this.hasNext() && (e = this.__input.charAt(this.__position),
    this.__position += 1),
    e
}
;
Ce.prototype.peek = function(e) {
    var t = null;
    return e = e || 0,
    e += this.__position,
    e >= 0 && e < this.__input_length && (t = this.__input.charAt(e)),
    t
}
;
Ce.prototype.__match = function(e, t) {
    e.lastIndex = t;
    var a = e.exec(this.__input);
    return a && !En && a.index !== t && (a = null),
    a
}
;
Ce.prototype.test = function(e, t) {
    return t = t || 0,
    t += this.__position,
    t >= 0 && t < this.__input_length ? !!this.__match(e, t) : !1
}
;
Ce.prototype.testChar = function(e, t) {
    var a = this.peek(t);
    return e.lastIndex = 0,
    a !== null && e.test(a)
}
;
Ce.prototype.match = function(e) {
    var t = this.__match(e, this.__position);
    return t ? this.__position += t[0].length : t = null,
    t
}
;
Ce.prototype.read = function(e, t, a) {
    var n = "", i;
    return e && (i = this.match(e),
    i && (n += i[0])),
    t && (i || !e) && (n += this.readUntil(t, a)),
    n
}
;
Ce.prototype.readUntil = function(e, t) {
    var a = ""
      , n = this.__position;
    e.lastIndex = this.__position;
    var i = e.exec(this.__input);
    return i ? (n = i.index,
    t && (n += i[0].length)) : n = this.__input_length,
    a = this.__input.substring(this.__position, n),
    this.__position = n,
    a
}
;
Ce.prototype.readUntilAfter = function(e) {
    return this.readUntil(e, !0)
}
;
Ce.prototype.get_regexp = function(e, t) {
    var a = null
      , n = "g";
    return t && En && (n = "y"),
    typeof e == "string" && e !== "" ? a = new RegExp(e,n) : e && (a = new RegExp(e.source,n)),
    a
}
;
Ce.prototype.get_literal_regexp = function(e) {
    return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
}
;
Ce.prototype.peekUntilAfter = function(e) {
    var t = this.__position
      , a = this.readUntilAfter(e);
    return this.__position = t,
    a
}
;
Ce.prototype.lookBack = function(e) {
    var t = this.__position - 1;
    return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e
}
;
function Qe(e) {
    this.__tokens = [],
    this.__tokens_length = this.__tokens.length,
    this.__position = 0,
    this.__parent_token = e
}
Qe.prototype.restart = function() {
    this.__position = 0
}
;
Qe.prototype.isEmpty = function() {
    return this.__tokens_length === 0
}
;
Qe.prototype.hasNext = function() {
    return this.__position < this.__tokens_length
}
;
Qe.prototype.next = function() {
    var e = null;
    return this.hasNext() && (e = this.__tokens[this.__position],
    this.__position += 1),
    e
}
;
Qe.prototype.peek = function(e) {
    var t = null;
    return e = e || 0,
    e += this.__position,
    e >= 0 && e < this.__tokens_length && (t = this.__tokens[e]),
    t
}
;
Qe.prototype.add = function(e) {
    this.__parent_token && (e.parent = this.__parent_token),
    this.__tokens.push(e),
    this.__tokens_length += 1
}
;
function we(e, t) {
    this._input = e,
    this._starting_pattern = null,
    this._match_pattern = null,
    this._until_pattern = null,
    this._until_after = !1,
    t && (this._starting_pattern = this._input.get_regexp(t._starting_pattern, !0),
    this._match_pattern = this._input.get_regexp(t._match_pattern, !0),
    this._until_pattern = this._input.get_regexp(t._until_pattern),
    this._until_after = t._until_after)
}
we.prototype.read = function() {
    var e = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || e) && (e += this._input.read(this._match_pattern, this._until_pattern, this._until_after)),
    e
}
;
we.prototype.read_match = function() {
    return this._input.match(this._match_pattern)
}
;
we.prototype.until_after = function(e) {
    var t = this._create();
    return t._until_after = !0,
    t._until_pattern = this._input.get_regexp(e),
    t._update(),
    t
}
;
we.prototype.until = function(e) {
    var t = this._create();
    return t._until_after = !1,
    t._until_pattern = this._input.get_regexp(e),
    t._update(),
    t
}
;
we.prototype.starting_with = function(e) {
    var t = this._create();
    return t._starting_pattern = this._input.get_regexp(e, !0),
    t._update(),
    t
}
;
we.prototype.matching = function(e) {
    var t = this._create();
    return t._match_pattern = this._input.get_regexp(e, !0),
    t._update(),
    t
}
;
we.prototype._create = function() {
    return new we(this._input,this)
}
;
we.prototype._update = function() {}
;
function ot(e, t) {
    we.call(this, e, t),
    t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""),
    this.newline_count = 0,
    this.whitespace_before_token = ""
}
ot.prototype = new we;
ot.prototype.__set_whitespace_patterns = function(e, t) {
    e += "\\t ",
    t += "\\n\\r",
    this._match_pattern = this._input.get_regexp("[" + e + t + "]+", !0),
    this._newline_regexp = this._input.get_regexp("\\r\\n|[" + t + "]")
}
;
ot.prototype.read = function() {
    this.newline_count = 0,
    this.whitespace_before_token = "";
    var e = this._input.read(this._match_pattern);
    if (e === " ")
        this.whitespace_before_token = " ";
    else if (e) {
        var t = this.__split(this._newline_regexp, e);
        this.newline_count = t.length - 1,
        this.whitespace_before_token = t[this.newline_count]
    }
    return e
}
;
ot.prototype.matching = function(e, t) {
    var a = this._create();
    return a.__set_whitespace_patterns(e, t),
    a._update(),
    a
}
;
ot.prototype._create = function() {
    return new ot(this._input,this)
}
;
ot.prototype.__split = function(e, t) {
    e.lastIndex = 0;
    for (var a = 0, n = [], i = e.exec(t); i; )
        n.push(t.substring(a, i.index)),
        a = i.index + i[0].length,
        i = e.exec(t);
    return a < t.length ? n.push(t.substring(a, t.length)) : n.push(""),
    n
}
;
const ut = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
}
  , ze = function(e, t) {
    this._input = new Ce(e),
    this._options = t || {},
    this.__tokens = null,
    this._patterns = {},
    this._patterns.whitespace = new ot(this._input)
};
ze.prototype.tokenize = function() {
    this._input.restart(),
    this.__tokens = new Qe,
    this._reset();
    for (var e, t = new ka(ut.START,""), a = null, n = [], i = new Qe; t.type !== ut.EOF; ) {
        for (e = this._get_next_token(t, a); this._is_comment(e); )
            i.add(e),
            e = this._get_next_token(t, a);
        i.isEmpty() || (e.comments_before = i,
        i = new Qe),
        e.parent = a,
        this._is_opening(e) ? (n.push(a),
        a = e) : a && this._is_closing(e, a) && (e.opened = a,
        a.closed = e,
        a = n.pop(),
        e.parent = a),
        e.previous = t,
        t.next = e,
        this.__tokens.add(e),
        t = e
    }
    return this.__tokens
}
;
ze.prototype._is_first_token = function() {
    return this.__tokens.isEmpty()
}
;
ze.prototype._reset = function() {}
;
ze.prototype._get_next_token = function() {
    this._readWhitespace();
    var e = this._input.read(/.+/g);
    return e ? this._create_token(ut.RAW, e) : this._create_token(ut.EOF, "")
}
;
ze.prototype._is_comment = function() {
    return !1
}
;
ze.prototype._is_opening = function() {
    return !1
}
;
ze.prototype._is_closing = function() {
    return !1
}
;
ze.prototype._create_token = function(e, t) {
    var a = new ka(e,t,this._patterns.whitespace.newline_count,this._patterns.whitespace.whitespace_before_token);
    return a
}
;
ze.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read()
}
;
function Na(e, t) {
    e = typeof e == "string" ? e : e.source,
    t = typeof t == "string" ? t : t.source,
    this.__directives_block_pattern = new RegExp(e + / beautify( \w+[:]\w+)+ /.source + t,"g"),
    this.__directive_pattern = / (\w+)[:](\w+)/g,
    this.__directives_end_ignore_pattern = new RegExp(e + /\sbeautify\signore:end\s/.source + t,"g")
}
Na.prototype.get_directives = function(e) {
    if (!e.match(this.__directives_block_pattern))
        return null;
    var t = {};
    this.__directive_pattern.lastIndex = 0;
    for (var a = this.__directive_pattern.exec(e); a; )
        t[a[1]] = a[2],
        a = this.__directive_pattern.exec(e);
    return t
}
;
Na.prototype.readIgnored = function(e) {
    return e.readUntilAfter(this.__directives_end_ignore_pattern)
}
;
var ua = {
    django: !1,
    erb: !1,
    handlebars: !1,
    php: !1,
    smarty: !1
};
function Ge(e, t) {
    we.call(this, e, t),
    this.__template_pattern = null,
    this._disabled = Object.assign({}, ua),
    this._excluded = Object.assign({}, ua),
    t && (this.__template_pattern = this._input.get_regexp(t.__template_pattern),
    this._excluded = Object.assign(this._excluded, t._excluded),
    this._disabled = Object.assign(this._disabled, t._disabled));
    var a = new we(e);
    this.__patterns = {
        handlebars_comment: a.starting_with(/{{!--/).until_after(/--}}/),
        handlebars_unescaped: a.starting_with(/{{{/).until_after(/}}}/),
        handlebars: a.starting_with(/{{/).until_after(/}}/),
        php: a.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
        erb: a.starting_with(/<%[^%]/).until_after(/[^%]%>/),
        django: a.starting_with(/{%/).until_after(/%}/),
        django_value: a.starting_with(/{{/).until_after(/}}/),
        django_comment: a.starting_with(/{#/).until_after(/#}/),
        smarty: a.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
        smarty_comment: a.starting_with(/{\*/).until_after(/\*}/),
        smarty_literal: a.starting_with(/{literal}/).until_after(/{\/literal}/)
    }
}
Ge.prototype = new we;
Ge.prototype._create = function() {
    return new Ge(this._input,this)
}
;
Ge.prototype._update = function() {
    this.__set_templated_pattern()
}
;
Ge.prototype.disable = function(e) {
    var t = this._create();
    return t._disabled[e] = !0,
    t._update(),
    t
}
;
Ge.prototype.read_options = function(e) {
    var t = this._create();
    for (var a in ua)
        t._disabled[a] = e.templating.indexOf(a) === -1;
    return t._update(),
    t
}
;
Ge.prototype.exclude = function(e) {
    var t = this._create();
    return t._excluded[e] = !0,
    t._update(),
    t
}
;
Ge.prototype.read = function() {
    var e = "";
    this._match_pattern ? e = this._input.read(this._starting_pattern) : e = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var t = this._read_template(); t; )
        this._match_pattern ? t += this._input.read(this._match_pattern) : t += this._input.readUntil(this.__template_pattern),
        e += t,
        t = this._read_template();
    return this._until_after && (e += this._input.readUntilAfter(this._until_pattern)),
    e
}
;
Ge.prototype.__set_templated_pattern = function() {
    var e = [];
    this._disabled.php || e.push(this.__patterns.php._starting_pattern.source),
    this._disabled.handlebars || e.push(this.__patterns.handlebars._starting_pattern.source),
    this._disabled.erb || e.push(this.__patterns.erb._starting_pattern.source),
    this._disabled.django || (e.push(this.__patterns.django._starting_pattern.source),
    e.push(this.__patterns.django_value._starting_pattern.source),
    e.push(this.__patterns.django_comment._starting_pattern.source)),
    this._disabled.smarty || e.push(this.__patterns.smarty._starting_pattern.source),
    this._until_pattern && e.push(this._until_pattern.source),
    this.__template_pattern = this._input.get_regexp("(?:" + e.join("|") + ")")
}
;
Ge.prototype._read_template = function() {
    var e = ""
      , t = this._input.peek();
    if (t === "<") {
        var a = this._input.peek(1);
        !this._disabled.php && !this._excluded.php && a === "?" && (e = e || this.__patterns.php.read()),
        !this._disabled.erb && !this._excluded.erb && a === "%" && (e = e || this.__patterns.erb.read())
    } else
        t === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (e = e || this.__patterns.handlebars_comment.read(),
        e = e || this.__patterns.handlebars_unescaped.read(),
        e = e || this.__patterns.handlebars.read()),
        this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (e = e || this.__patterns.django_value.read()),
        this._excluded.django || (e = e || this.__patterns.django_comment.read(),
        e = e || this.__patterns.django.read())),
        this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (e = e || this.__patterns.smarty_comment.read(),
        e = e || this.__patterns.smarty_literal.read(),
        e = e || this.__patterns.smarty.read()));
    return e
}
;
function sa(e, t) {
    return t.indexOf(e) !== -1
}
const O = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: ut.START,
    RAW: ut.RAW,
    EOF: ut.EOF
};
var za = new Na(/\/\*/,/\*\//)
  , Ni = /0[xX][0123456789abcdefABCDEF_]*[mMdDlLfFsSbB]?|0[oO][01234567_]*[mMdDlLfFsSbB]?|0[bB][01_]*[mMdDlLfFsSbB]?|\d[\d_]*[mMdDlLfFsSbB]|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/
  , wi = /[0-9]/
  , Di = /[^\d.]/;
const At = ">>> === !== << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" ");
var dt = ">>>= ... >>= <<= === >>> !== **= => -> ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
dt = dt.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
dt = "\\?\\.(?!\\d) " + dt;
dt = dt.replace(/ /g, "|");
var Mi = new RegExp(dt);
const vt = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");
var Pi = vt.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as"]), Ui = new RegExp("^(?:" + Pi.join("|") + ")$"), Vt;
const Ie = function(e, t) {
    ze.call(this, e, t),
    this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
    var a = new we(this._input)
      , n = new Ge(this._input).read_options(this._options);
    this.__patterns = {
        template: n,
        identifier: n.starting_with(vn).matching(Ci),
        number: a.matching(Ni),
        punct: a.matching(Mi),
        comment: a.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
        block_comment: a.starting_with(/\/\*/).until_after(/\*\//),
        html_comment_start: a.matching(/<!--/),
        html_comment_end: a.matching(/-->/),
        include: a.starting_with(/#include/).until_after(Ut),
        shebang: a.starting_with(/#!/).until_after(Ut),
        xml: a.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\]|)(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),
        single_quote: n.until(/['\\\n\r\u2028\u2029]/),
        double_quote: n.until(/["\\\n\r\u2028\u2029]/),
        template_text: n.until(/[`\\$]/),
        template_expression: n.until(/[`}\\]/)
    }
};
Ie.prototype = new ze;
Ie.prototype._is_comment = function(e) {
    return e.type === O.COMMENT || e.type === O.BLOCK_COMMENT || e.type === O.UNKNOWN
}
;
Ie.prototype._is_opening = function(e) {
    return e.type === O.START_BLOCK || e.type === O.START_EXPR
}
;
Ie.prototype._is_closing = function(e, t) {
    return (e.type === O.END_BLOCK || e.type === O.END_EXPR) && t && (e.text === "]" && t.text === "[" || e.text === ")" && t.text === "(" || e.text === "}" && t.text === "{")
}
;
Ie.prototype._reset = function() {
    Vt = !1
}
;
Ie.prototype._get_next_token = function(e) {
    var t = null;
    this._readWhitespace();
    var a = this._input.peek();
    return a === null ? this._create_token(O.EOF, "") : (t = t || this._read_non_javascript(a),
    t = t || this._read_multi_string(a),
    t = t || this._read_string(a),
    t = t || this._read_word(e),
    t = t || this._read_singles(a),
    t = t || this._read_comment(a),
    t = t || this._read_regexp(a, e),
    t = t || this._read_xml(a, e),
    t = t || this._read_punctuation(),
    t = t || this._create_token(O.UNKNOWN, this._input.next()),
    t)
}
;
Ie.prototype._read_word = function(e) {
    var t;
    if (t = this.__patterns.identifier.read(),
    t !== "")
        return t = t.replace(Ht, `
`),
        !(e.type === O.DOT || e.type === O.RESERVED && (e.text === "set" || e.text === "get")) && Ui.test(t) ? t === "in" || t === "of" ? this._create_token(O.OPERATOR, t) : this._create_token(O.RESERVED, t) : this._create_token(O.WORD, t);
    if (t = this.__patterns.number.read(),
    t !== "")
        return this._create_token(O.WORD, t)
}
;
Ie.prototype._read_singles = function(e) {
    var t = null;
    return e === "(" || e === "[" ? t = this._create_token(O.START_EXPR, e) : e === ")" || e === "]" ? t = this._create_token(O.END_EXPR, e) : e === "{" ? t = this._create_token(O.START_BLOCK, e) : e === "}" ? t = this._create_token(O.END_BLOCK, e) : e === ";" ? t = this._create_token(O.SEMICOLON, e) : e === "." && Di.test(this._input.peek(1)) ? t = this._create_token(O.DOT, e) : e === "," && (t = this._create_token(O.COMMA, e)),
    t && this._input.next(),
    t
}
;
Ie.prototype._read_punctuation = function() {
    var e = this.__patterns.punct.read();
    if (e !== "")
        return e === "=" ? this._create_token(O.EQUALS, e) : e === "?." ? this._create_token(O.DOT, e) : this._create_token(O.OPERATOR, e)
}
;
Ie.prototype._read_non_javascript = function(e) {
    var t = "";
    if (e === "#") {
        if (this._is_first_token() && (t = this.__patterns.shebang.read(),
        t))
            return this._create_token(O.UNKNOWN, t.trim() + `
`);
        if (t = this.__patterns.include.read(),
        t)
            return this._create_token(O.UNKNOWN, t.trim() + `
`);
        e = this._input.next();
        var a = "#";
        if (this._input.hasNext() && this._input.testChar(wi)) {
            do
                e = this._input.next(),
                a += e;
            while (this._input.hasNext() && e !== "#" && e !== "=");
            return e === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (a += "[]",
            this._input.next(),
            this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (a += "{}",
            this._input.next(),
            this._input.next())),
            this._create_token(O.WORD, a)
        }
        this._input.back()
    } else if (e === "<" && this._is_first_token()) {
        if (t = this.__patterns.html_comment_start.read(),
        t) {
            for (; this._input.hasNext() && !this._input.testChar(Bt); )
                t += this._input.next();
            return Vt = !0,
            this._create_token(O.COMMENT, t)
        }
    } else if (Vt && e === "-" && (t = this.__patterns.html_comment_end.read(),
    t))
        return Vt = !1,
        this._create_token(O.COMMENT, t);
    return null
}
;
Ie.prototype._read_comment = function(e) {
    var t = null;
    if (e === "/") {
        var a = "";
        if (this._input.peek(1) === "*") {
            a = this.__patterns.block_comment.read();
            var n = za.get_directives(a);
            n && n.ignore === "start" && (a += za.readIgnored(this._input)),
            a = a.replace(Ht, `
`),
            t = this._create_token(O.BLOCK_COMMENT, a),
            t.directives = n
        } else
            this._input.peek(1) === "/" && (a = this.__patterns.comment.read(),
            t = this._create_token(O.COMMENT, a))
    }
    return t
}
;
Ie.prototype._read_multi_string = function() {
    if (this._input.match(/"""/g)) {
        let e = this._input.readUntilAfter(/"""/g);
        return this._create_token(O.STRING, '"""' + e)
    }
    return null
}
;
Ie.prototype._read_string = function(e) {
    if (e === "`" || e === "'" || e === '"') {
        var t = this._input.next();
        return this.has_char_escapes = !1,
        e === "`" ? t += this._read_string_recursive("`", !0, "${") : t += this._read_string_recursive(e),
        this.has_char_escapes && this._options.unescape_strings && (t = $i(t)),
        this._input.peek() === e && (t += this._input.next()),
        t = t.replace(Ht, `
`),
        this._create_token(O.STRING, t)
    }
    return null
}
;
Ie.prototype._allow_regexp_or_xml = function(e) {
    return e.type === O.RESERVED && sa(e.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || e.type === O.END_EXPR && e.text === ")" && e.opened.previous.type === O.RESERVED && sa(e.opened.previous.text, ["if", "while", "for"]) || sa(e.type, [O.COMMENT, O.START_EXPR, O.START_BLOCK, O.START, O.END_BLOCK, O.OPERATOR, O.EQUALS, O.EOF, O.SEMICOLON, O.COMMA])
}
;
Ie.prototype._read_regexp = function(e, t) {
    if (e === "/" && this._allow_regexp_or_xml(t)) {
        for (var a = this._input.next(), n = !1, i = !1; this._input.hasNext() && (n || i || this._input.peek() !== e) && !this._input.testChar(Bt); )
            a += this._input.peek(),
            n ? n = !1 : (n = this._input.peek() === "\\",
            this._input.peek() === "[" ? i = !0 : this._input.peek() === "]" && (i = !1)),
            this._input.next();
        return this._input.peek() === e && (a += this._input.next(),
        a += this._input.read(vn)),
        this._create_token(O.STRING, a)
    }
    return null
}
;
Ie.prototype._read_xml = function(e, t) {
    if (this._options.e4x && e === "<" && this._allow_regexp_or_xml(t)) {
        var a = ""
          , n = this.__patterns.xml.read_match();
        if (n) {
            for (var i = n[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), s = i.indexOf("{") === 0, o = 0; n; ) {
                var r = !!n[1]
                  , l = n[2]
                  , u = !!n[n.length - 1] || l.slice(0, 8) === "![CDATA[";
                if (!u && (l === i || s && l.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (r ? --o : ++o),
                a += n[0],
                o <= 0)
                    break;
                n = this.__patterns.xml.read_match()
            }
            return n || (a += this._input.match(/[\s\S]*/g)[0]),
            a = a.replace(Ht, `
`),
            this._create_token(O.STRING, a)
        }
    }
    return null
}
;
function $i(e) {
    for (var t = "", a = 0, n = new Ce(e), i = null; n.hasNext(); )
        if (i = n.match(/([\s]|[^\\]|\\\\)+/g),
        i && (t += i[0]),
        n.peek() === "\\") {
            if (n.next(),
            n.peek() === "x")
                i = n.match(/x([0-9A-Fa-f]{2})/g);
            else if (n.peek() === "u")
                i = n.match(/u([0-9A-Fa-f]{4})/g);
            else {
                t += "\\",
                n.hasNext() && (t += n.next());
                continue
            }
            if (!i || (a = parseInt(i[1], 16),
            a > 126 && a <= 255 && i[0].indexOf("x") === 0))
                return e;
            if (a >= 0 && a < 32) {
                t += "\\" + i[0];
                continue
            } else
                a === 34 || a === 39 || a === 92 ? t += "\\" + String.fromCharCode(a) : t += String.fromCharCode(a)
        }
    return t
}
Ie.prototype._read_string_recursive = function(e, t, a) {
    var n, i;
    e === "'" ? i = this.__patterns.single_quote : e === '"' ? i = this.__patterns.double_quote : e === "`" ? i = this.__patterns.template_text : e === "}" && (i = this.__patterns.template_expression);
    for (var s = i.read(), o = ""; this._input.hasNext(); ) {
        if (o = this._input.next(),
        o === e || !t && Bt.test(o)) {
            this._input.back();
            break
        } else
            o === "\\" && this._input.hasNext() ? (n = this._input.peek(),
            n === "x" || n === "u" ? this.has_char_escapes = !0 : n === "\r" && this._input.peek(1) === `
` && this._input.next(),
            o += this._input.next()) : a && (a === "${" && o === "$" && this._input.peek() === "{" && (o += this._input.next()),
            a === o && (e === "`" ? o += this._read_string_recursive("}", t, "`") : o += this._read_string_recursive("`", t, "${"),
            this._input.hasNext() && (o += this._input.next())));
        o += i.read(),
        s += o
    }
    return s
}
;
function ne(e, t) {
    return t.indexOf(e) !== -1
}
function Fi(e) {
    return e.replace(/^\s+/g, "")
}
function Bi(e) {
    for (var t = {}, a = 0; a < e.length; a++)
        t[e[a].replace(/-/g, "_")] = e[a];
    return t
}
function He(e, t) {
    return e && e.type === O.RESERVED && e.text === t
}
function de(e, t) {
    return e && e.type === O.RESERVED && ne(e.text, t)
}
var Jt = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"]
  , Hi = ["before-newline", "after-newline", "preserve-newline"]
  , Nt = Bi(Hi)
  , yn = [Nt.before_newline, Nt.preserve_newline]
  , K = {
    BlockStatement: "BlockStatement",
    Statement: "Statement",
    ObjectLiteral: "ObjectLiteral",
    ArrayLiteral: "ArrayLiteral",
    ForInitializer: "ForInitializer",
    Conditional: "Conditional",
    Expression: "Expression"
};
function Tn(e, t) {
    t.multiline_frame || t.mode === K.ForInitializer || t.mode === K.Conditional || e.remove_indent(t.start_line_index)
}
function ji(e) {
    e = e.replace(Ht, `
`);
    for (var t = [], a = e.indexOf(`
`); a !== -1; )
        t.push(e.substring(0, a)),
        e = e.substring(a + 1),
        a = e.indexOf(`
`);
    return e.length && t.push(e),
    t
}
function rt(e) {
    return e === K.ArrayLiteral
}
function wt(e) {
    return ne(e, [K.Expression, K.ForInitializer, K.Conditional])
}
function Vi(e, t) {
    for (var a = 0; a < e.length; a++) {
        var n = e[a].trim();
        if (n.charAt(0) !== t)
            return !1
    }
    return !0
}
function Gi(e, t) {
    for (var a = 0, n = e.length, i; a < n; a++)
        if (i = e[a],
        i && i.indexOf(t) !== 0)
            return !1;
    return !0
}
function re(e, t) {
    t = t || {},
    this._source_text = e || "",
    this._output = null,
    this._tokens = null,
    this._last_last_text = null,
    this._flags = null,
    this._previous_flags = null,
    this._flag_store = null,
    this._options = new bn(t)
}
re.prototype.create_flags = function(e, t) {
    var a = 0;
    e && (a = e.indentation_level,
    !this._output.just_added_newline() && e.line_indent_level > a && (a = e.line_indent_level));
    var n = {
        mode: t,
        parent: e,
        last_token: e ? e.last_token : new ka(O.START_BLOCK,""),
        last_word: e ? e.last_word : "",
        declaration_statement: !1,
        declaration_assignment: !1,
        multiline_frame: !1,
        inline_frame: !1,
        if_block: !1,
        else_block: !1,
        do_block: !1,
        do_while: !1,
        import_block: !1,
        in_case_statement: !1,
        in_case: !1,
        case_body: !1,
        case_block: !1,
        indentation_level: a,
        alignment: 0,
        line_indent_level: e ? e.line_indent_level : a,
        start_line_index: this._output.get_line_number(),
        ternary_depth: 0
    };
    return n
}
;
re.prototype._reset = function(e) {
    var t = e.match(/^[\t ]*/)[0];
    this._last_last_text = "",
    this._output = new Ae(this._options,t),
    this._output.raw = this._options.test_output_raw,
    this._flag_store = [],
    this.set_mode(K.BlockStatement);
    var a = new Ie(e,this._options);
    return this._tokens = a.tokenize(),
    e
}
;
re.prototype.beautify = function() {
    if (this._options.disabled)
        return this._source_text;
    var e, t = this._reset(this._source_text), a = this._options.eol;
    this._options.eol === "auto" && (a = `
`,
    t && Ut.test(t || "") && (a = t.match(Ut)[0]));
    for (var n = this._tokens.next(); n; )
        this.handle_token(n),
        this._last_last_text = this._flags.last_token.text,
        this._flags.last_token = n,
        n = this._tokens.next();
    return e = this._output.get_code(a),
    e
}
;
re.prototype.handle_token = function(e, t) {
    e.type === O.START_EXPR ? this.handle_start_expr(e) : e.type === O.END_EXPR ? this.handle_end_expr(e) : e.type === O.START_BLOCK ? this.handle_start_block(e) : e.type === O.END_BLOCK ? this.handle_end_block(e) : e.type === O.WORD ? this.handle_word(e) : e.type === O.RESERVED ? this.handle_word(e) : e.type === O.SEMICOLON ? this.handle_semicolon(e) : e.type === O.STRING ? this.handle_string(e) : e.type === O.EQUALS ? this.handle_equals(e) : e.type === O.OPERATOR ? this.handle_operator(e) : e.type === O.COMMA ? this.handle_comma(e) : e.type === O.BLOCK_COMMENT ? this.handle_block_comment(e, t) : e.type === O.COMMENT ? this.handle_comment(e, t) : e.type === O.DOT ? this.handle_dot(e) : e.type === O.EOF ? this.handle_eof(e) : e.type === O.UNKNOWN ? this.handle_unknown(e, t) : this.handle_unknown(e, t)
}
;
re.prototype.handle_whitespace_and_comments = function(e, t) {
    var a = e.newlines
      , n = this._options.keep_array_indentation && rt(this._flags.mode);
    if (e.comments_before)
        for (var i = e.comments_before.next(); i; )
            this.handle_whitespace_and_comments(i, t),
            this.handle_token(i, t),
            i = e.comments_before.next();
    if (n)
        for (var s = 0; s < a; s += 1)
            this.print_newline(s > 0, t);
    else if (this._options.max_preserve_newlines && a > this._options.max_preserve_newlines && (a = this._options.max_preserve_newlines),
    this._options.preserve_newlines && a > 1) {
        this.print_newline(!1, t);
        for (var o = 1; o < a; o += 1)
            this.print_newline(!0, t)
    }
}
;
var wa = ["async", "break", "continue", "return", "throw", "yield"];
re.prototype.allow_wrap_or_preserved_newline = function(e, t) {
    if (t = t === void 0 ? !1 : t,
    !this._output.just_added_newline()) {
        var a = this._options.preserve_newlines && e.newlines || t
          , n = ne(this._flags.last_token.text, At) || ne(e.text, At);
        if (n) {
            var i = ne(this._flags.last_token.text, At) && ne(this._options.operator_position, yn) || ne(e.text, At);
            a = a && i
        }
        if (a)
            this.print_newline(!1, !0);
        else if (this._options.wrap_line_length) {
            if (de(this._flags.last_token, wa))
                return;
            this._output.set_wrap_point()
        }
    }
}
;
re.prototype.print_newline = function(e, t) {
    if (!t && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== O.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
        for (var a = this._tokens.peek(); this._flags.mode === K.Statement && !(this._flags.if_block && He(a, "else")) && !this._flags.do_block; )
            this.restore_mode();
    this._output.add_new_line(e) && (this._flags.multiline_frame = !0)
}
;
re.prototype.print_token_line_indentation = function(e) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && e.newlines && (e.text === "[" || rt(this._flags.mode)) ? (this._output.current_line.set_indent(-1),
    this._output.current_line.push(e.whitespace_before),
    this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level))
}
;
re.prototype.print_token = function(e) {
    if (this._output.raw) {
        this._output.add_raw_token(e);
        return
    }
    if (this._options.comma_first && e.previous && e.previous.type === O.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
        var t = this._output.previous_line.pop();
        this._output.previous_line.is_empty() && (this._output.previous_line.push(t),
        this._output.trim(!0),
        this._output.current_line.pop(),
        this._output.trim()),
        this.print_token_line_indentation(e),
        this._output.add_token(","),
        this._output.space_before_token = !0
    }
    this.print_token_line_indentation(e),
    this._output.non_breaking_space = !0,
    this._output.add_token(e.text),
    this._output.previous_token_wrapped && (this._flags.multiline_frame = !0)
}
;
re.prototype.indent = function() {
    this._flags.indentation_level += 1,
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment)
}
;
re.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1,
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment))
}
;
re.prototype.set_mode = function(e) {
    this._flags ? (this._flag_store.push(this._flags),
    this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, e),
    this._flags = this.create_flags(this._previous_flags, e),
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment)
}
;
re.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags,
    this._flags = this._flag_store.pop(),
    this._previous_flags.mode === K.Statement && Tn(this._output, this._previous_flags),
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment))
}
;
re.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === K.ObjectLiteral && this._flags.mode === K.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || de(this._flags.last_token, ["get", "set"]))
}
;
re.prototype.start_of_statement = function(e) {
    var t = !1;
    return t = t || de(this._flags.last_token, ["var", "let", "const"]) && e.type === O.WORD,
    t = t || He(this._flags.last_token, "do"),
    t = t || !(this._flags.parent.mode === K.ObjectLiteral && this._flags.mode === K.Statement) && de(this._flags.last_token, wa) && !e.newlines,
    t = t || He(this._flags.last_token, "else") && !(He(e, "if") && !e.comments_before),
    t = t || this._flags.last_token.type === O.END_EXPR && (this._previous_flags.mode === K.ForInitializer || this._previous_flags.mode === K.Conditional),
    t = t || this._flags.last_token.type === O.WORD && this._flags.mode === K.BlockStatement && !this._flags.in_case && !(e.text === "--" || e.text === "++") && this._last_last_text !== "function" && e.type !== O.WORD && e.type !== O.RESERVED,
    t = t || this._flags.mode === K.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || de(this._flags.last_token, ["get", "set"])),
    t ? (this.set_mode(K.Statement),
    this.indent(),
    this.handle_whitespace_and_comments(e, !0),
    this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e, de(e, ["do", "for", "if", "while"])),
    !0) : !1
}
;
re.prototype.handle_start_expr = function(e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e);
    var t = K.Expression;
    if (e.text === "[") {
        if (this._flags.last_token.type === O.WORD || this._flags.last_token.text === ")") {
            de(this._flags.last_token, vt) && (this._output.space_before_token = !0),
            this.print_token(e),
            this.set_mode(t),
            this.indent(),
            this._options.space_in_paren && (this._output.space_before_token = !0);
            return
        }
        t = K.ArrayLiteral,
        rt(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()),
        ne(this._flags.last_token.type, [O.START_EXPR, O.END_EXPR, O.WORD, O.OPERATOR, O.DOT]) || (this._output.space_before_token = !0)
    } else {
        if (this._flags.last_token.type === O.RESERVED)
            this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional,
            t = K.ForInitializer) : ne(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional,
            t = K.Conditional) : ne(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && e.whitespace_before === "" ? this._output.space_before_token = !1 : (ne(this._flags.last_token.text, vt) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
        else if (this._flags.last_token.type === O.EQUALS || this._flags.last_token.type === O.OPERATOR)
            this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e);
        else if (this._flags.last_token.type === O.WORD) {
            this._output.space_before_token = !1;
            var a = this._tokens.peek(-3);
            if (this._options.space_after_named_function && a) {
                var n = this._tokens.peek(-4);
                de(a, ["async", "function"]) || a.text === "*" && de(n, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === K.ObjectLiteral && (a.text === "{" || a.text === "," || a.text === "*" && (n.text === "{" || n.text === ",")) && (this._output.space_before_token = !0)
            }
        } else
            this.allow_wrap_or_preserved_newline(e);
        (this._flags.last_token.type === O.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (ne(this._last_last_text, ["function", "yield"]) || this._flags.mode === K.ObjectLiteral && ne(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function)
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === O.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === O.END_EXPR || this._flags.last_token.type === O.START_EXPR || this._flags.last_token.type === O.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === O.COMMA) && this.allow_wrap_or_preserved_newline(e, e.newlines),
    this.print_token(e),
    this.set_mode(t),
    this._options.space_in_paren && (this._output.space_before_token = !0),
    this.indent()
}
;
re.prototype.handle_end_expr = function(e) {
    for (; this._flags.mode === K.Statement; )
        this.restore_mode();
    this.handle_whitespace_and_comments(e),
    this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(e, e.text === "]" && rt(this._flags.mode) && !this._options.keep_array_indentation),
    this._options.space_in_paren && (this._flags.last_token.type === O.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(),
    this._output.space_before_token = !1) : this._output.space_before_token = !0),
    this.deindent(),
    this.print_token(e),
    this.restore_mode(),
    Tn(this._output, this._previous_flags),
    this._flags.do_while && this._previous_flags.mode === K.Conditional && (this._previous_flags.mode = K.Expression,
    this._flags.do_block = !1,
    this._flags.do_while = !1)
}
;
re.prototype.handle_start_block = function(e) {
    this.handle_whitespace_and_comments(e);
    var t = this._tokens.peek()
      , a = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === O.END_EXPR ? (this.set_mode(K.BlockStatement),
    this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(K.BlockStatement) : a && (ne(a.text, [":", ","]) && ne(t.type, [O.STRING, O.WORD, O.RESERVED]) || ne(t.text, ["get", "set", "..."]) && ne(a.type, [O.WORD, O.RESERVED])) ? ne(this._last_last_text, ["class", "interface"]) ? this.set_mode(K.BlockStatement) : this.set_mode(K.ObjectLiteral) : this._flags.last_token.type === O.OPERATOR && (this._flags.last_token.text === "=>" || this._flags.last_token.text === "->") ? this.set_mode(K.BlockStatement) : ne(this._flags.last_token.type, [O.EQUALS, O.START_EXPR, O.COMMA, O.OPERATOR]) || de(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(K.ObjectLiteral) : this.set_mode(K.BlockStatement);
    var n = !t.comments_before && t.text === "}"
      , i = n && this._flags.last_word === "function" && this._flags.last_token.type === O.END_EXPR;
    if (this._options.brace_preserve_inline) {
        var s = 0
          , o = null;
        this._flags.inline_frame = !0;
        do
            if (s += 1,
            o = this._tokens.peek(s - 1),
            o.newlines) {
                this._flags.inline_frame = !1;
                break
            }
        while (o.type !== O.EOF && !(o.type === O.END_BLOCK && o.opened === e))
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && e.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== O.OPERATOR && (i || this._flags.last_token.type === O.EQUALS || de(this._flags.last_token, Jt) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (rt(this._previous_flags.mode) && (this._flags.last_token.type === O.START_EXPR || this._flags.last_token.type === O.COMMA) && ((this._flags.last_token.type === O.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0),
    (this._flags.last_token.type === O.COMMA || this._flags.last_token.type === O.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(e),
    this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame,
    this._flags.multiline_frame = !1)),
    this._flags.last_token.type !== O.OPERATOR && this._flags.last_token.type !== O.START_EXPR && (this._flags.last_token.type === O.START_BLOCK && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)),
    this.print_token(e),
    this.indent(),
    !n && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline()
}
;
re.prototype.handle_end_block = function(e) {
    for (this.handle_whitespace_and_comments(e); this._flags.mode === K.Statement; )
        this.restore_mode();
    var t = this._flags.last_token.type === O.START_BLOCK;
    this._flags.inline_frame && !t ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? t || this.print_newline() : t || (rt(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1,
    this.print_newline(),
    this._options.keep_array_indentation = !0) : this.print_newline()),
    this.restore_mode(),
    this.print_token(e)
}
;
re.prototype.handle_word = function(e) {
    if (e.type === O.RESERVED) {
        if (ne(e.text, ["set", "get"]) && this._flags.mode !== K.ObjectLiteral)
            e.type = O.WORD;
        else if (e.text === "import" && this._tokens.peek().text === "(")
            e.type = O.WORD;
        else if (ne(e.text, ["as", "from"]) && !this._flags.import_block)
            e.type = O.WORD;
        else if (this._flags.mode === K.ObjectLiteral) {
            var t = this._tokens.peek();
            t.text === ":" && (e.type = O.WORD)
        }
    }
    if (this.start_of_statement(e) ? de(this._flags.last_token, ["var", "let", "const"]) && e.type === O.WORD && (this._flags.declaration_statement = !0) : e.newlines && !wt(this._flags.mode) && (this._flags.last_token.type !== O.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== O.EQUALS && (this._options.preserve_newlines || !de(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(e),
    this.print_newline()) : this.handle_whitespace_and_comments(e),
    this._flags.do_block && !this._flags.do_while)
        if (He(e, "while")) {
            this._output.space_before_token = !0,
            this.print_token(e),
            this._output.space_before_token = !0,
            this._flags.do_while = !0;
            return
        } else
            this.print_newline(),
            this._flags.do_block = !1;
    if (this._flags.if_block)
        if (!this._flags.else_block && He(e, "else"))
            this._flags.else_block = !0;
        else {
            for (; this._flags.mode === K.Statement; )
                this.restore_mode();
            this._flags.if_block = !1,
            this._flags.else_block = !1
        }
    if (this._flags.in_case_statement && de(e, ["case", "default"])) {
        this.print_newline(),
        !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(),
        this._flags.case_body = !1,
        this.print_token(e),
        this._flags.in_case = !0;
        return
    }
    if ((this._flags.last_token.type === O.COMMA || this._flags.last_token.type === O.START_EXPR || this._flags.last_token.type === O.EQUALS || this._flags.last_token.type === O.OPERATOR) && (this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e)),
    He(e, "function")) {
        (ne(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(ne(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === O.OPERATOR)) && !this._output.just_added_blankline() && !e.comments_before && (this.print_newline(),
        this.print_newline(!0)),
        this._flags.last_token.type === O.RESERVED || this._flags.last_token.type === O.WORD ? de(this._flags.last_token, ["get", "set", "new", "export"]) || de(this._flags.last_token, wa) ? this._output.space_before_token = !0 : He(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === O.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (wt(this._flags.mode) || rt(this._flags.mode)) || this.print_newline(),
        this.print_token(e),
        this._flags.last_word = e.text;
        return
    }
    var a = "NONE";
    if (this._flags.last_token.type === O.END_BLOCK ? this._previous_flags.inline_frame ? a = "SPACE" : de(e, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && e.newlines ? a = "NEWLINE" : (a = "SPACE",
    this._output.space_before_token = !0) : a = "NEWLINE" : this._flags.last_token.type === O.SEMICOLON && this._flags.mode === K.BlockStatement ? a = "NEWLINE" : this._flags.last_token.type === O.SEMICOLON && wt(this._flags.mode) || this._flags.last_token.type === O.STRING || this._flags.last_token.type === O.RESERVED || this._flags.last_token.type === O.WORD || this._flags.last_token.text === "*" && (ne(this._last_last_text, ["function", "yield"]) || this._flags.mode === K.ObjectLiteral && ne(this._last_last_text, ["{", ","])) ? a = "SPACE" : this._flags.last_token.type === O.START_BLOCK ? this._flags.inline_frame ? a = "SPACE" : a = "NEWLINE" : this._flags.last_token.type === O.END_EXPR && (this._output.space_before_token = !0,
    a = "NEWLINE"),
    de(e, vt) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? a = "SPACE" : a = "NEWLINE"),
    de(e, ["else", "catch", "finally"]))
        if ((!(this._flags.last_token.type === O.END_BLOCK && this._previous_flags.mode === K.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && e.newlines) && !this._flags.inline_frame)
            this.print_newline();
        else {
            this._output.trim(!0);
            var n = this._output.current_line;
            n.last() !== "}" && this.print_newline(),
            this._output.space_before_token = !0
        }
    else
        a === "NEWLINE" ? de(this._flags.last_token, Jt) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && de(e, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== O.END_EXPR ? (this._flags.last_token.type !== O.START_EXPR || !de(e, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (He(e, "if") && He(e.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : de(e, vt) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && rt(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : a === "SPACE" && (this._output.space_before_token = !0);
    e.previous && (e.previous.type === O.WORD || e.previous.type === O.RESERVED) && (this._output.space_before_token = !0),
    this.print_token(e),
    this._flags.last_word = e.text,
    e.type === O.RESERVED && (e.text === "do" ? this._flags.do_block = !0 : e.text === "if" ? this._flags.if_block = !0 : e.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && He(e, "from") && (this._flags.import_block = !1))
}
;
re.prototype.handle_semicolon = function(e) {
    this.start_of_statement(e) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(e);
    for (var t = this._tokens.peek(); this._flags.mode === K.Statement && !(this._flags.if_block && He(t, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1),
    this.print_token(e)
}
;
re.prototype.handle_string = function(e) {
    e.text.startsWith("`") && e.newlines === 0 && e.whitespace_before === "" && (e.previous.text === ")" || this._flags.last_token.type === O.WORD) || (this.start_of_statement(e) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(e),
    this._flags.last_token.type === O.RESERVED || this._flags.last_token.type === O.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === O.COMMA || this._flags.last_token.type === O.START_EXPR || this._flags.last_token.type === O.EQUALS || this._flags.last_token.type === O.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e) : e.text.startsWith("`") && this._flags.last_token.type === O.END_EXPR && (e.previous.text === "]" || e.previous.text === ")") && e.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())),
    this.print_token(e)
}
;
re.prototype.handle_equals = function(e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e),
    this._flags.declaration_statement && (this._flags.declaration_assignment = !0),
    this._output.space_before_token = !0,
    this.print_token(e),
    this._output.space_before_token = !0
}
;
re.prototype.handle_comma = function(e) {
    this.handle_whitespace_and_comments(e, !0),
    this.print_token(e),
    this._output.space_before_token = !0,
    this._flags.declaration_statement ? (wt(this._flags.parent.mode) && (this._flags.declaration_assignment = !1),
    this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1,
    this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(e)) : this._flags.mode === K.ObjectLiteral || this._flags.mode === K.Statement && this._flags.parent.mode === K.ObjectLiteral ? (this._flags.mode === K.Statement && this.restore_mode(),
    this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(e)
}
;
re.prototype.handle_operator = function(e) {
    var t = e.text === "*" && (de(this._flags.last_token, ["function", "yield"]) || ne(this._flags.last_token.type, [O.START_BLOCK, O.COMMA, O.END_BLOCK, O.SEMICOLON]))
      , a = ne(e.text, ["-", "+"]) && (ne(this._flags.last_token.type, [O.START_BLOCK, O.START_EXPR, O.EQUALS, O.OPERATOR]) || ne(this._flags.last_token.text, vt) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(e)) {
        var n = !t;
        this.handle_whitespace_and_comments(e, n)
    }
    if (de(this._flags.last_token, Jt)) {
        this._output.space_before_token = !0,
        this.print_token(e);
        return
    }
    if (e.text === "*" && this._flags.last_token.type === O.DOT) {
        this.print_token(e);
        return
    }
    if (e.text === "::") {
        this.print_token(e);
        return
    }
    if (this._flags.last_token.type === O.OPERATOR && ne(this._options.operator_position, yn) && this.allow_wrap_or_preserved_newline(e),
    e.text === ":" && this._flags.in_case) {
        this.print_token(e),
        this._flags.in_case = !1,
        this._flags.case_body = !0,
        this._tokens.peek().type !== O.START_BLOCK ? (this.indent(),
        this.print_newline(),
        this._flags.case_block = !1) : (this._flags.case_block = !0,
        this._output.space_before_token = !0);
        return
    }
    var i = !0
      , s = !0
      , o = !1;
    if (e.text === ":" ? this._flags.ternary_depth === 0 ? i = !1 : (this._flags.ternary_depth -= 1,
    o = !0) : e.text === "?" && (this._flags.ternary_depth += 1),
    !a && !t && this._options.preserve_newlines && ne(e.text, At)) {
        var r = e.text === ":"
          , l = r && o
          , u = r && !o;
        switch (this._options.operator_position) {
        case Nt.before_newline:
            this._output.space_before_token = !u,
            this.print_token(e),
            (!r || l) && this.allow_wrap_or_preserved_newline(e),
            this._output.space_before_token = !0;
            return;
        case Nt.after_newline:
            this._output.space_before_token = !0,
            !r || l ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(e) : this._output.space_before_token = !1,
            this.print_token(e),
            this._output.space_before_token = !0;
            return;
        case Nt.preserve_newline:
            u || this.allow_wrap_or_preserved_newline(e),
            i = !(this._output.just_added_newline() || u),
            this._output.space_before_token = i,
            this.print_token(e),
            this._output.space_before_token = !0;
            return
        }
    }
    if (t) {
        this.allow_wrap_or_preserved_newline(e),
        i = !1;
        var d = this._tokens.peek();
        s = d && ne(d.type, [O.WORD, O.RESERVED])
    } else
        e.text === "..." ? (this.allow_wrap_or_preserved_newline(e),
        i = this._flags.last_token.type === O.START_BLOCK,
        s = !1) : (ne(e.text, ["--", "++", "!", "~"]) || a) && ((this._flags.last_token.type === O.COMMA || this._flags.last_token.type === O.START_EXPR) && this.allow_wrap_or_preserved_newline(e),
        i = !1,
        s = !1,
        e.newlines && (e.text === "--" || e.text === "++" || e.text === "~") && this.print_newline(!1, !0),
        this._flags.last_token.text === ";" && wt(this._flags.mode) && (i = !0),
        this._flags.last_token.type === O.RESERVED ? i = !0 : this._flags.last_token.type === O.END_EXPR ? i = !(this._flags.last_token.text === "]" && (e.text === "--" || e.text === "++")) : this._flags.last_token.type === O.OPERATOR && (i = ne(e.text, ["--", "-", "++", "+"]) && ne(this._flags.last_token.text, ["--", "-", "++", "+"]),
        ne(e.text, ["+", "-"]) && ne(this._flags.last_token.text, ["--", "++"]) && (s = !0)),
        (this._flags.mode === K.BlockStatement && !this._flags.inline_frame || this._flags.mode === K.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline());
    this._output.space_before_token = this._output.space_before_token || i,
    this.print_token(e),
    this._output.space_before_token = s
}
;
re.prototype.handle_block_comment = function(e, t) {
    if (this._output.raw) {
        this._output.add_raw_token(e),
        e.directives && e.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
        return
    }
    if (e.directives) {
        this.print_newline(!1, t),
        this.print_token(e),
        e.directives.preserve === "start" && (this._output.raw = !0),
        this.print_newline(!1, !0);
        return
    }
    if (!Bt.test(e.text) && !e.newlines) {
        this._output.space_before_token = !0,
        this.print_token(e),
        this._output.space_before_token = !0;
        return
    } else
        this.print_block_commment(e, t)
}
;
re.prototype.print_block_commment = function(e, t) {
    var a = ji(e.text), n, i = !1, s = !1, o = e.whitespace_before, r = o.length;
    if (this.print_newline(!1, t),
    this.print_token_line_indentation(e),
    this._output.add_token(a[0]),
    this.print_newline(!1, t),
    a.length > 1) {
        for (a = a.slice(1),
        i = Vi(a, "*"),
        s = Gi(a, o),
        i && (this._flags.alignment = 1),
        n = 0; n < a.length; n++)
            i ? (this.print_token_line_indentation(e),
            this._output.add_token(Fi(a[n]))) : s && a[n] ? (this.print_token_line_indentation(e),
            this._output.add_token(a[n].substring(r))) : (this._output.current_line.set_indent(-1),
            this._output.add_token(a[n])),
            this.print_newline(!1, t);
        this._flags.alignment = 0
    }
}
;
re.prototype.handle_comment = function(e, t) {
    e.newlines ? this.print_newline(!1, t) : this._output.trim(!0),
    this._output.space_before_token = !0,
    this.print_token(e),
    this.print_newline(!1, t)
}
;
re.prototype.handle_dot = function(e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e, !0),
    de(this._flags.last_token, Jt) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(e, this._flags.last_token.text === ")" && this._options.break_chained_methods),
    this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(),
    this.print_token(e)
}
;
re.prototype.handle_unknown = function(e, t) {
    this.print_token(e),
    e.text[e.text.length - 1] === `
` && this.print_newline(!1, t)
}
;
re.prototype.handle_eof = function(e) {
    for (; this._flags.mode === K.Statement; )
        this.restore_mode();
    this.handle_whitespace_and_comments(e)
}
;
function Ct(e, t, a, n) {
    if (e && e.length > 0 && a) {
        let i = function(r, l) {
            return r[a].localeCompare(l[a], "zh-CN")
        }
          , s = []
          , o = [];
        e.forEach(r => {
            r.folder === !0 ? (n && (r[n] = Ct(r[n], t, a, n)),
            s.push(r)) : o.push(r)
        }
        ),
        s.sort(i),
        o.sort(i),
        t === !1 && (s.reverse(),
        o.reverse()),
        e.splice(0, e.length, ...s.concat(o))
    }
    return e
}
function zi(e) {
    return Array(e).fill(0).map( () => (Math.random() * 16 | 0).toString(16)).join("")
}
function ft(e, t) {
    return t = t || 2,
    (Array(t).join(0) + e).slice(-t)
}
function qe(e) {
    if (typeof e == "number" && (e.toString().length === 13 ? e = new Date(e) : e = new Date(e * 1e3)),
    e instanceof Date) {
        var t = e.getMonth() + 1
          , a = e.getDate()
          , n = e.getHours()
          , i = e.getMinutes()
          , s = e.getSeconds();
        return e.getFullYear() + "-" + ft(t) + "-" + ft(a) + " " + ft(n) + ":" + ft(i) + ":" + ft(s)
    }
    return ""
}
function it(e) {
    return e.replace(/:?\/+/g, t => t.indexOf(":") > -1 ? t : "/")
}
function Yi(e) {
    const t = i => {
        if (Array.isArray(i)) {
            let s = i.length
              , o = 100;
            if (s > o) {
                let r = [];
                for (let l = 0; l < s; l += o)
                    r.push({
                        name: `[${l}...${Math.min(l + o, s) - 1}]`,
                        folder: !0,
                        opened: !1,
                        dataType: "array",
                        type: "Array",
                        children: i.slice(l, Math.min(l + o, s)).map( (u, d) => n("" + (l + d), void 0, JSON.stringify(u), u))
                    });
                return r
            }
            return i.map( (r, l) => n("" + l, void 0, JSON.stringify(r), r))
        } else
            return Object.keys(i).map(s => {
                const o = i[s];
                return n(s, void 0, JSON.stringify(o), o)
            }
            )
    }
      , a = i => {
        try {
            return JSON.parse(i)
        } catch {
            return i
        }
    }
      , n = (i, s, o, r) => {
        var E;
        let l = (s || "").startsWith("java.lang"), u, d, g;
        l ? (u = ((E = s == null ? void 0 : s.substring(10)) == null ? void 0 : E.toLowerCase()) || typeof r,
        ["integer", "double", "float", "byte", "short", "long"].indexOf(u) > -1 && (u = "number"),
        u === "class" && (o = o.substring(1, o.length - 1))) : (r = r || o && a(o),
        !Array.isArray(r) && typeof r != "object" ? (l = !0,
        u = typeof r) : (Array.isArray(r) ? (g = `size = ${r.length}`,
        u = "array") : (g = `members = ${r && Object.keys(r).length}`,
        u = "object"),
        s = s || (Array.isArray(r) ? "Array" : typeof r),
        d = r && t(r) || []));
        let f = r == null && !l;
        return f && (s = "null",
        l = !0,
        o = "null"),
        {
            name: i,
            value: o,
            data: r,
            dataType: u,
            type: s,
            size: g,
            isNull: f,
            folder: !l,
            opened: !1,
            children: d
        }
    }
    ;
    return e && e.map(i => n(i.name, i.type, i.value)) || []
}
function qi(e) {
    const t = ["B", "KB", "MB"];
    let a = 0;
    for (; a < t.length && e >= 1024; )
        e = e / 1024,
        a++;
    return e = e.toFixed(2),
    `${e} ${t[a]}`
}
function Ze(e, t) {
    const a = n => n.filter(i => i.folder).forEach(i => {
        a(i.children || []),
        t(i)
    }
    );
    a(e || [])
}
function Da(e, t) {
    let a = document.createElement("a")
      , n = window.URL.createObjectURL(e);
    a.href = n,
    a.download = t,
    document.body.appendChild(a),
    a.click(),
    document.body.removeChild(a),
    window.URL.revokeObjectURL(n)
}
function Ya(e) {
    try {
        var t = document.createElement("textarea");
        return t.style = "position:absolute;left:-99999999px",
        document.body.appendChild(t),
        t.innerHTML = e,
        t.readOnly = !1,
        t.select(),
        document.execCommand("copy"),
        !0
    } catch {
        return !1
    }
}
function Ki(e) {
    let t = 0;
    for (let a = 0, n = 0, i = e.length; a < i; a++)
        t = 31 * t + e.charCodeAt(n++);
    return t
}
function Qt(e) {
    let t = [];
    const a = (i, s) => {
        const o = {
            level: s,
            node: i,
            name: s === 0 ? c("message.root") : i.name,
            folder: (i == null ? void 0 : i.dataType) === "Object" || (i == null ? void 0 : i.dataType) === "Array",
            display: !0
        };
        o.folder && (o.expand = !0),
        t.push(o)
    }
      , n = (i, s) => {
        (i || []).forEach(o => {
            a(o, s),
            n(o.children, s + 1)
        }
        )
    }
    ;
    return a(e || {}, 0),
    n((e == null ? void 0 : e.children) || [], 1),
    t
}
function Wi(e) {
    return new Promise( (t, a) => {
        const n = document.getElementsByTagName("head")[0]
          , i = document.createElement("script");
        i.setAttribute("type", "text/javascript"),
        i.src = e,
        n.appendChild(i),
        i.readyState ? i.onreadystatechange = () => {
            (i.readyState === "loaded" || i.readyState === "complete") && (i.onreadystatechange = null,
            t())
        }
        : (i.onload = function() {
            t()
        }
        ,
        i.onerror = function() {
            a()
        }
        )
    }
    )
}
function qa(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}
function Ma(e, t) {
    if (!e && t || !t && e || e.dataType !== t.dataType || e.name !== t.name || (e == null ? void 0 : e.children.length) !== t.children.length)
        return !0;
    for (let a = 0, n = e.children.length; a < n; a++)
        if (Ma(e.children[a], t.children[a]))
            return !0;
    return !1
}
class Xi {
    constructor() {
        this.listeners = {},
        this.statusLog = U([])
    }
    $on(t, a) {
        this.listeners[t] = this.listeners[t] || [],
        this.listeners[t].push(a)
    }
    $event(t, a) {
        this.$on(`ws_${t}`, a)
    }
    $emit(t) {
        const a = this.listeners[t];
        if (a) {
            const s = [];
            for (var n = 1, i = arguments.length; n < i; n++)
                s.push(arguments[n]);
            a.forEach(o => o.apply(this, s))
        }
    }
    loading(t) {
        const a = qa(1, 9)
          , n = new Image;
        return n.src = `https://console.sssssss.org.cn/images/loading.gif?t=${Math.floor(new Date().getTime() / 1e3) * 1e3 + a * 100 + (t + a) + qa(0, 5) * 17}`,
        n
    }
    send(t, a) {
        this.$emit("message", t, a)
    }
    status(t, a, ...n) {
        const i = new Date;
        t = c(t, ...n) || t,
        a === !1 && (t = `<font color="red">${t}</font>`),
        this.statusLog.value.push({
            content: t,
            timestamp: qe(i) + "." + ft(i.getMilliseconds(), 3)
        }),
        this.$emit("status", t)
    }
    clearStatusLog() {
        this.statusLog.value = []
    }
    getStatusLog() {
        return this.statusLog
    }
}
var T = new Xi
  , $ = {
    DO_SAVE: "doSave",
    DO_TEST: "doTest",
    LOGINED: "logined",
    LOGOUT: "logout",
    SHOW_LOGIN: "showLogin",
    DO_DOWNLOAD: "do-download",
    DO_UPLOAD: "do-upload",
    DO_PUSH: "do-push",
    DO_RECENT: "do-recent",
    OPEN: "open",
    SELECT_NAVBAR_BY_ITEM: "select-navbar-by-item",
    OPEN_WITH_ID: "open-with-id",
    OPEN_ITEM: "open-item",
    DELETE_FILE: "delete-file",
    DEBUG_CONTINUE: "debug-continue",
    DEBUG_SETPINTO: "debug-setpinto",
    SWITCH_THEME: "switch-theme",
    OPEN_GROUP: "open-group",
    SWITCH_TOOLBAR: "switch-toolbar",
    STATUS: "status",
    MESSAGE: "message",
    CLOSE: "close",
    OPEN_EMPTY: "open-empty",
    LOAD_RESOURCES: "load-resources",
    REFRESH_RESOURCE: "refresh-resource",
    DO_SEARCH: "doSearch",
    NOTIFY: "notify",
    RELOAD_RESOURCES: "reload-resources",
    RELOAD_RESOURCES_FINISH: "reload-resources-finish",
    LOAD_RESOURCES_FINISH: "load-resources-finish",
    ADD_FOOTER_TOOLBAR: "add-footer-toolbar"
};
const xt = {
    baseURL: "",
    method: "post",
    timeout: 0,
    withCredentials: !0,
    responseType: "json",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    transformRequest: [function(e) {
        return e instanceof FormData ? e : ja.stringify(e, {
            arrayFormat: "repeat",
            allowDots: !0
        })
    }
    ],
    paramsSerializer(e) {
        return ja.stringify(e, {
            arrayFormat: "repeat",
            allowDots: !0
        })
    }
};
class Ji {
    constructor() {
        _t(this, "successHandle", null);
        _t(this, "errorHandle", null);
        _t(this, "endHandle", null);
        _t(this, "exceptionHandle", (t, a) => {
            me.alert(vi(t, a), c("code.error", t))
        }
        )
    }
    success(t) {
        return this.successHandle = t,
        this
    }
    exception(t) {
        return this.exceptionHandle = t,
        this
    }
    error(t) {
        return this.errorHandle = t,
        this
    }
    end(t) {
        this.endHandle = t
    }
}
class Qi {
    constructor() {
        _t(this, "_axios", null);
        this._axios = Jn.create(xt)
    }
    getAxios() {
        return this._axios
    }
    setBaseURL(t) {
        xt.baseURL = t
    }
    execute(t) {
        let a = {
            baseURL: xt.baseURL,
            ...t
        };
        return a.headers = a.headers || {},
        a.headers[D.HEADER_MAGIC_TOKEN] = D.HEADER_MAGIC_TOKEN_VALUE,
        this._axios.request(a)
    }
    processError(t) {
        var a, n, i;
        t.response ? me.alert(JSON.stringify(((a = t.response) == null ? void 0 : a.data) || "") || c("code.invalid", (n = t.response) == null ? void 0 : n.status), c("code.invalid", (i = t.response) == null ? void 0 : i.status)) : me.alert(t.message, c("code.httpError")),
        console.error(t)
    }
    sendJson(t, a, n) {
        return this.send(t, JSON.stringify(a), n || {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            transformRequest: []
        })
    }
    sendGet(t, a, n) {
        return n = n || {},
        n.method = "get",
        this.send(t, a, n)
    }
    sendPost(t, a, n) {
        return n = n || {},
        n.method = "post",
        this.send(t, a, n)
    }
    send(t, a, n) {
        let i = n || xt || {};
        i.url = t,
        (i.method || "").toLowerCase() === "post" ? i.data = a : i.params = a,
        i.baseURL = xt.baseURL;
        let s = new Ji
          , o = !1
          , r = (l, u) => {
            l instanceof Blob ? (o = !0,
            s.successHandle && s.successHandle(l, u)) : l.code === 1 ? (o = !0,
            s.successHandle && s.successHandle(l.data, u)) : (l.code === 401 && T.$emit($.SHOW_LOGIN),
            s.exceptionHandle && s.exceptionHandle(l.code, l.message, u))
        }
        ;
        return this.execute(i).then(l => {
            let u = l.data
              , d = l.headers["content-type"] && l.headers["content-type"].startsWith("application/json");
            if (u instanceof Blob && d) {
                let g = new FileReader;
                g.readAsText(u),
                g.onload = function() {
                    try {
                        u = JSON.parse(this.result),
                        r(u, l)
                    } catch (f) {
                        console.error(f),
                        r(u, l)
                    }
                }
                ;
                return
            }
            r(u, l)
        }
        ).catch(l => {
            var u;
            typeof s.errorHandle == "function" ? s.errorHandle((u = l.response) == null ? void 0 : u.data, l.response, l) : this.processError(l)
        }
        ).finally( () => {
            typeof s.endHandle == "function" && s.endHandle(o)
        }
        ),
        s
    }
}
var Y = new Qi;
const ce = {
    Alt: 512,
    Ctrl: 1024,
    Shift: 2048
};
new Array(26).fill(0).forEach( (e, t) => ce[String.fromCharCode(65 + t)] = 65 + t);
new Array(12).fill(0).forEach( (e, t) => ce[`F${t + 1}`] = 112 + t);
const Kt = []
  , Sn = e => {
    if (e.keyCode) {
        let t = e.keyCode;
        t |= e.ctrlKey && ce.Ctrl || 0,
        t |= e.shiftKey && ce.Shift || 0,
        t |= e.altKey && ce.Alt || 0,
        t |= e.metaKey && ce.Ctrl || 0;
        for (let a = 0, n = Kt.length; a < n; a++) {
            let i = Kt[a];
            t == i.code && (e.preventDefault(),
            (i.target.contains(e.target) || e.target === i.target) && i.callback())
        }
    }
}
;
let da = !1;
ce.init = () => document.addEventListener("keydown", Sn);
ce.bind = (e, t, a) => {
    da || (da = !0,
    ce.init()),
    typeof a == "function" && Kt.push({
        target: e,
        code: t,
        callback: a
    })
}
;
ce.unbind = () => {
    Kt.length = 0,
    document.removeEventListener("keydown", Sn),
    da = !1
}
;
var Zi = {
    editor: {
        base: "vs",
        rules: [{
            background: "#ffffff"
        }, {
            token: "keywords",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "number",
            foreground: "0000FF"
        }, {
            token: "keyword",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "string.sql",
            foreground: "008000"
        }, {
            token: "tag.sql",
            foreground: "0033B3"
        }, {
            token: "attribute.name.sql",
            foreground: "174AD4"
        }, {
            token: "attribute.value.sql",
            foreground: "067D17"
        }, {
            token: "predefined",
            foreground: "000000",
            fontStyle: "italic"
        }, {
            token: "operator.sql",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "key",
            foreground: "660E7A"
        }, {
            token: "string.key.json",
            foreground: "660E7A"
        }, {
            token: "string.value.json",
            foreground: "008000"
        }, {
            token: "keyword.json",
            foreground: "0000FF"
        }, {
            token: "string",
            foreground: "008000",
            fontStyle: "bold"
        }, {
            token: "string.invalid",
            foreground: "008000",
            background: "FFCCCC"
        }, {
            token: "string.escape.invalid",
            foreground: "008000",
            background: "FFCCCC"
        }, {
            token: "string.escape",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "comment",
            foreground: "808080",
            fontStyle: "italic"
        }, {
            token: "comment.doc",
            foreground: "808080",
            fontStyle: "italic"
        }, {
            token: "comment.todo",
            foreground: "008DDE",
            fontStyle: "italic"
        }, {
            token: "string.escape",
            foreground: "000080"
        }],
        colors: {
            "editor.foreground": "#000000",
            "editor.background": "#ffffff",
            "editorLineNumber.foreground": "#999999",
            "editorGutter.background": "#f0f0f0",
            "editor.lineHighlightBackground": "#FFFAE3",
            "dropdown.background": "#F2F2F2",
            "dropdown.foreground": "#000000",
            "list.activeSelectionBackground": "#1A7DC4",
            "list.activeSelectionForeground": "#ffffff"
        }
    }
}
  , es = {
    editor: {
        base: "vs-dark",
        rules: [{
            foreground: "A9B7C6"
        }, {
            token: "keywords",
            foreground: "CC7832",
            fontStyle: "bold"
        }, {
            token: "keyword",
            foreground: "CC7832",
            fontStyle: "bold"
        }, {
            token: "number",
            foreground: "6897BB"
        }, {
            token: "string",
            foreground: "6A8759",
            fontStyle: "bold"
        }, {
            token: "string.sql",
            foreground: "6A8759"
        }, {
            token: "tag.sql",
            foreground: "E8BF6A"
        }, {
            token: "attribute.name.sql",
            foreground: "BABABA"
        }, {
            token: "attribute.value.sql",
            foreground: "6A8759"
        }, {
            token: "predefined.sql",
            foreground: "A9B7C6",
            fontStyle: "italic"
        }, {
            token: "predefined.magicscript",
            foreground: "A9B7C6",
            fontStyle: "italic"
        }, {
            token: "key",
            foreground: "9876AA"
        }, {
            token: "string.key.json",
            foreground: "9876AA"
        }, {
            token: "string.value.json",
            foreground: "6A8759"
        }, {
            token: "keyword.json",
            foreground: "6897BB"
        }, {
            token: "operator.sql",
            foreground: "CC7832",
            fontStyle: "bold"
        }, {
            token: "string.invalid",
            foreground: "008000",
            background: "FFCCCC"
        }, {
            token: "string.escape.invalid",
            foreground: "008000",
            background: "FFCCCC"
        }, {
            token: "string.escape",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "comment",
            foreground: "808080",
            fontStyle: "italic"
        }, {
            token: "comment.doc",
            foreground: "629755",
            fontStyle: "italic"
        }, {
            token: "comment.todo",
            foreground: "A8C023",
            fontStyle: "italic"
        }, {
            token: "string.escape",
            foreground: "CC7832"
        }],
        colors: {
            "editor.background": "#2B2B2B",
            "editorLineNumber.foreground": "#999999",
            "editorGutter.background": "#313335",
            "editor.lineHighlightBackground": "#323232",
            "dropdown.background": "#3C3F41",
            "dropdown.foreground": "#BBBBBB",
            "list.activeSelectionBackground": "#4B6EAF",
            "list.activeSelectionForeground": "#FFFFFF",
            "editorSuggestWidget.selectedBackground": "#113A5C"
        }
    },
    styles: {
        "main-background-color": "#3C3F41",
        "main-border-color": "#323232",
        "main-color": "#bbb",
        "main-selected-background-color": "#323232",
        "main-hover-background-color": "#353739",
        "main-hover-icon-background-color": "#4C5052",
        "main-selected-color": "#fff",
        "main-icon-color": "#AFB1B3",
        "header-title-color": "#bbb",
        "header-version-color": "#999",
        "header-default-color": "#AFB1B3",
        "empty-background-color": "#282828",
        "empty-key-color": "#489DF6",
        "empty-color": "#A0A0A0",
        "button-hover-background-color": "#365880",
        "button-hover-border-color": "#43688C",
        "button-background-color": "#4C5052",
        "button-border-color": "#5E6060",
        "button-disabled-color": "#5a5a5a",
        "navbar-body-background-color": "#3C3F41",
        "navbar-body-border-color": "#555555",
        "resource-label-color": "#bbb",
        "resource-span-color": "#787878",
        "tree-hover-background-color": "#0d293e",
        "tree-icon-color": "#aeb9c0",
        "table-border-color": "#646464",
        "input-border-color": "#646464",
        "input-foucs-color": "#3D6185",
        "input-background-color": "#45494A",
        "select-background-color": "#3C3F41",
        "select-hover-background-color": "#3C3F41",
        "select-option-background-color": "#3C3F41",
        "select-option-hover-background-color": "#4B6EAF",
        "select-option-border-color": "#808080",
        "data-type-default-color": "#a9b7c6",
        "data-type-string-color": "#6a8759",
        "data-type-integer-color": "#6897bb",
        "data-type-byte-color": "#6897bb",
        "data-type-long-color": "#6897bb",
        "data-type-float-color": "#6897bb",
        "data-type-double-color": "#6897bb",
        "data-type-short-color": "#6897bb",
        "data-type-number-color": "#6897bb",
        "data-type-boolean-color": "#cc7832",
        "data-type-class-color": "#9876aa",
        "data-type-key-color": "#FF8E8E",
        "run-log-background-color": "#2b2b2b",
        "log-level-info": "#ABC023",
        "log-level-error": "#CC666E",
        "log-level-debug": "#299999",
        "log-level-warn": "unset",
        "log-level-trace": "#5394EC",
        "log-color-cyan": "#009191",
        "log-color-link": "#287BDE",
        "todo-color": "#A8C023",
        "debug-line-background-color": "#2D6099",
        "breakpoints-background-color": "#C75450",
        "breakpoint-line-background-color": "#3a2323",
        "select-inputable-background-color": "#45494a",
        "select-inputable-border": "transparent",
        "tab-selected-background-color": "#4E5254",
        "message-em-color": "#68dd9a",
        "checkbox-background-color": "#43494A",
        "checkbox-border-color": "#6B6B6B",
        "checkbox-text-color": "#bbb",
        "checkbox-selected-background-color": "#43494A",
        "checkbox-selected-border-color": "#6B6B6B",
        "toolbox-list-label-color": "#bbb",
        "toolbox-list-span-color": "#787878",
        "toolbox-border-color": "#323232",
        "toolbox-list-hover-background": "#0D293E",
        "toolbox-border-right-color": "#555555",
        "footer-border-color": "#323232",
        "tab-bar-border-color": "#323232",
        "dialog-border-color": "#282828",
        "dialog-shadow-color": "#151515",
        "table-col-border-color": "#333638",
        "table-row-border-color": "#333638",
        "table-hover-background": "#4B6EAF",
        "debug-line-background": "#2D6099",
        "breakpoints-background": "#C75450",
        "breakpoint-line-background": "#3a2323",
        "table-even-background": "#414547",
        "button-disabled-background": "#5A5A5A",
        "toolbox-list-header-icon-color": "#AFB1B3",
        "log-error-color": "#CC666E",
        "text-string-color": "#6A8759",
        "text-number-color": "#6897BB",
        "text-boolean-color": "#CC7832",
        "text-property-color": "#9876aa",
        "text-key-color": "#9876aa",
        "suggest-hover-background": "#113A5C",
        "suggest-hover-color": "#fff",
        "statusbar-em-color": "#68dd9a",
        "tooltip-background-color": "#4B4D4D",
        "tooltip-color": "#bbb",
        "tooltip-border-color": "#636569"
    }
}
  , ts = {
    editor: {
        base: "vs",
        rules: [{
            background: "#ffffff"
        }, {
            token: "keywords",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "number",
            foreground: "0000FF"
        }, {
            token: "keyword",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "string.sql",
            foreground: "008000"
        }, {
            token: "tag.sql",
            foreground: "0033B3"
        }, {
            token: "attribute.name.sql",
            foreground: "174AD4"
        }, {
            token: "attribute.value.sql",
            foreground: "067D17"
        }, {
            token: "predefined",
            foreground: "000000",
            fontStyle: "italic"
        }, {
            token: "operator.sql",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "key",
            foreground: "660E7A"
        }, {
            token: "string.key.json",
            foreground: "660E7A"
        }, {
            token: "string.value.json",
            foreground: "008000"
        }, {
            token: "keyword.json",
            foreground: "0000FF"
        }, {
            token: "string",
            foreground: "008000",
            fontStyle: "bold"
        }, {
            token: "string.invalid",
            foreground: "008000",
            background: "FFCCCC"
        }, {
            token: "string.escape.invalid",
            foreground: "008000",
            background: "FFCCCC"
        }, {
            token: "string.escape",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "comment",
            foreground: "808080",
            fontStyle: "italic"
        }, {
            token: "comment.doc",
            foreground: "808080",
            fontStyle: "italic"
        }, {
            token: "comment.todo",
            foreground: "008DDE",
            fontStyle: "italic"
        }, {
            token: "string.escape",
            foreground: "000080"
        }],
        colors: {
            "editor.foreground": "#000000",
            "editor.background": "#ffffff",
            "editorLineNumber.foreground": "#999999",
            "editorGutter.background": "#F7F8FA",
            "editor.lineHighlightBackground": "#F5F8FE",
            "dropdown.background": "#F2F2F2",
            "dropdown.foreground": "#000000",
            "list.activeSelectionBackground": "#1A7DC4",
            "list.activeSelectionForeground": "#ffffff"
        }
    },
    styles: {
        "magic-navbar-vertical-width": "42px",
        "magic-navbar-vertical-title-display": "none",
        "magic-navbar-vertical-icon-size": "1.8em",
        "magic-navbar-vertical-header-padding": "5.5px 3px",
        "magic-navbar-vertical-header-margin": "5px",
        "magic-navbar-vertical-header-border-radius": "2px",
        "magic-navbar-vertical-header-border-width": "0px",
        "magic-resource-header-icon-display": "none",
        "magic-header-height": "40px",
        "magic-header-icon-size": "28px",
        "main-hover-icon-background-color": "#EBECF0",
        "main-background-color": "#F7F8FA",
        "main-selected-background-color": "#DFE1E5",
        "main-hover-background-color": "#EBECF0",
        "magic-panel-toolbar-width": "32px",
        "magic-panel-toolbar-size": "24px",
        "tab-selected-border-color": "#3574F0",
        "magic-navbar-horizontal-height": "30px",
        "magic-input-height": "28px",
        "magic-table-row-height": "30px",
        "input-focus-color": "#3574F0",
        "input-focus-border-width": "2px",
        "input-border-radius": "3px",
        "select-background-color": "#fff",
        "select-hover-background-color": "#fff",
        "select-option-hover-background-color": "#CFDEFC",
        "select-option-hover-color": "#000",
        "tree-hover-background-color": "#CFDEFC",
        "button-hover-background-color": "#3574F0",
        "button-hover-color": "#fff",
        "button-border-hover-color": "#3574F0",
        "button-background-color": "#fff",
        "button-height": "24px",
        "checkbox-selected-background-color": "#3574F0",
        "empty-background-color": "#F7F8FA",
        "navbar-body-background-color": "#F7F8FA",
        "magic-header-logo-background-size": "24px",
        "magic-header-logo-background-position": "10px 7px",
        "magic-header-logo-padding": "40px",
        "context-menu-background": "#fff",
        "context-menu-padding": "4px",
        "context-menu-item-border-radius": "4px"
    }
}
  , as = {
    editor: {
        base: "vs-dark",
        rules: [{
            foreground: "A9B7C6"
        }, {
            token: "keywords",
            foreground: "CC7832",
            fontStyle: "bold"
        }, {
            token: "keyword",
            foreground: "CC7832",
            fontStyle: "bold"
        }, {
            token: "number",
            foreground: "6897BB"
        }, {
            token: "string",
            foreground: "6A8759",
            fontStyle: "bold"
        }, {
            token: "string.sql",
            foreground: "6A8759"
        }, {
            token: "tag.sql",
            foreground: "E8BF6A"
        }, {
            token: "attribute.name.sql",
            foreground: "BABABA"
        }, {
            token: "attribute.value.sql",
            foreground: "6A8759"
        }, {
            token: "predefined.sql",
            foreground: "A9B7C6",
            fontStyle: "italic"
        }, {
            token: "predefined.magicscript",
            foreground: "A9B7C6",
            fontStyle: "italic"
        }, {
            token: "key",
            foreground: "9876AA"
        }, {
            token: "string.key.json",
            foreground: "9876AA"
        }, {
            token: "string.value.json",
            foreground: "6A8759"
        }, {
            token: "keyword.json",
            foreground: "6897BB"
        }, {
            token: "operator.sql",
            foreground: "CC7832",
            fontStyle: "bold"
        }, {
            token: "string.invalid",
            foreground: "008000",
            background: "FFCCCC"
        }, {
            token: "string.escape.invalid",
            foreground: "008000",
            background: "FFCCCC"
        }, {
            token: "string.escape",
            foreground: "000080",
            fontStyle: "bold"
        }, {
            token: "comment",
            foreground: "808080",
            fontStyle: "italic"
        }, {
            token: "comment.doc",
            foreground: "629755",
            fontStyle: "italic"
        }, {
            token: "comment.todo",
            foreground: "A8C023",
            fontStyle: "italic"
        }, {
            token: "string.escape",
            foreground: "CC7832"
        }],
        colors: {
            "editor.background": "#2B2B2B",
            "editorLineNumber.foreground": "#999999",
            "editorGutter.background": "#313335",
            "editor.lineHighlightBackground": "#323232",
            "dropdown.background": "#3C3F41",
            "dropdown.foreground": "#BBBBBB",
            "list.activeSelectionBackground": "#4B6EAF",
            "list.activeSelectionForeground": "#FFFFFF",
            "editorSuggestWidget.selectedBackground": "#113A5C"
        }
    },
    styles: {
        "magic-navbar-vertical-width": "42px",
        "magic-navbar-vertical-title-display": "none",
        "magic-navbar-vertical-icon-size": "1.8em",
        "magic-navbar-vertical-header-padding": "5.5px 3px",
        "magic-navbar-vertical-header-margin": "5px",
        "magic-navbar-vertical-header-border-radius": "2px",
        "magic-navbar-vertical-header-border-width": "0px",
        "magic-resource-header-icon-display": "none",
        "magic-header-height": "40px",
        "magic-header-icon-size": "28px",
        "magic-panel-toolbar-width": "32px",
        "magic-panel-toolbar-size": "24px",
        "magic-navbar-horizontal-height": "30px",
        "magic-input-height": "28px",
        "magic-table-row-height": "30px",
        "input-focus-border-width": "2px",
        "input-border-radius": "3px",
        "button-height": "24px",
        "magic-header-logo-background-size": "24px",
        "magic-header-logo-background-position": "10px 7px",
        "magic-header-logo-padding": "40px",
        "context-menu-padding": "4px",
        "context-menu-item-border-radius": "4px",
        "main-background-color": "#3C3F41",
        "main-border-color": "#515151",
        "main-color": "#bbb",
        "main-selected-background-color": "#27292A",
        "main-hover-background-color": "#353739",
        "main-hover-icon-background-color": "#4C5052",
        "main-selected-color": "#fff",
        "main-icon-color": "#AFB1B3",
        "header-title-color": "#bbb",
        "header-version-color": "#999",
        "header-default-color": "#AFB1B3",
        "empty-background-color": "#282828",
        "empty-key-color": "#489DF6",
        "empty-color": "#A0A0A0",
        "button-hover-background-color": "#365880",
        "button-hover-border-color": "#43688C",
        "button-background-color": "#4C5052",
        "button-border-color": "#5E6060",
        "button-disabled-color": "#5a5a5a",
        "navbar-body-background-color": "#3C3F41",
        "navbar-body-border-color": "#555555",
        "resource-label-color": "#bbb",
        "resource-span-color": "#787878",
        "tree-hover-background-color": "#0d293e",
        "tree-icon-color": "#aeb9c0",
        "table-border-color": "#646464",
        "input-border-color": "#646464",
        "input-foucs-color": "#3D6185",
        "input-background-color": "#45494A",
        "select-background-color": "#3C3F41",
        "select-hover-background-color": "#3C3F41",
        "select-option-background-color": "#3C3F41",
        "select-option-hover-background-color": "#4B6EAF",
        "select-option-border-color": "#808080",
        "data-type-default-color": "#a9b7c6",
        "data-type-string-color": "#6a8759",
        "data-type-integer-color": "#6897bb",
        "data-type-byte-color": "#6897bb",
        "data-type-long-color": "#6897bb",
        "data-type-float-color": "#6897bb",
        "data-type-double-color": "#6897bb",
        "data-type-short-color": "#6897bb",
        "data-type-number-color": "#6897bb",
        "data-type-boolean-color": "#cc7832",
        "data-type-class-color": "#9876aa",
        "data-type-key-color": "#FF8E8E",
        "run-log-background-color": "#2b2b2b",
        "log-level-info": "#ABC023",
        "log-level-error": "#CC666E",
        "log-level-debug": "#299999",
        "log-level-warn": "unset",
        "log-level-trace": "#5394EC",
        "log-color-cyan": "#009191",
        "log-color-link": "#287BDE",
        "todo-color": "#A8C023",
        "debug-line-background-color": "#2D6099",
        "breakpoints-background-color": "#C75450",
        "breakpoint-line-background-color": "#3a2323",
        "select-inputable-background-color": "#45494a",
        "select-inputable-border": "transparent",
        "tab-selected-background-color": "#4E5254",
        "message-em-color": "#68dd9a",
        "checkbox-background-color": "#43494A",
        "checkbox-border-color": "#6B6B6B",
        "checkbox-text-color": "#bbb",
        "checkbox-selected-background-color": "#43494A",
        "checkbox-selected-border-color": "#6B6B6B",
        "toolbox-list-label-color": "#bbb",
        "toolbox-list-span-color": "#787878",
        "toolbox-border-color": "#323232",
        "toolbox-list-hover-background": "#0D293E",
        "toolbox-border-right-color": "#555555",
        "footer-border-color": "#323232",
        "tab-bar-border-color": "#323232",
        "dialog-border-color": "#282828",
        "dialog-shadow-color": "#151515",
        "table-col-border-color": "#333638",
        "table-row-border-color": "#333638",
        "table-hover-background": "#4B6EAF",
        "debug-line-background": "#2D6099",
        "breakpoints-background": "#C75450",
        "breakpoint-line-background": "#3a2323",
        "table-even-background": "#414547",
        "button-disabled-background": "#5A5A5A",
        "toolbox-list-header-icon-color": "#AFB1B3",
        "log-error-color": "#CC666E",
        "text-string-color": "#6A8759",
        "text-number-color": "#6897BB",
        "text-boolean-color": "#CC7832",
        "text-property-color": "#9876aa",
        "text-key-color": "#9876aa",
        "suggest-hover-background": "#113A5C",
        "suggest-hover-color": "#fff",
        "statusbar-em-color": "#68dd9a",
        "tab-selected-border-color": "#4A88C7",
        "tooltip-background-color": "#4B4D4D",
        "tooltip-color": "#bbb",
        "tooltip-border-color": "#636569"
    }
};
const ns = "modulepreload"
  , Ka = {}
  , is = "./"
  , Wa = function(t, a) {
    return !a || a.length === 0 ? t() : Promise.all(a.map(n => {
        if (n = `${is}${n}`,
        n in Ka)
            return;
        Ka[n] = !0;
        const i = n.endsWith(".css")
          , s = i ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${n}"]${s}`))
            return;
        const o = document.createElement("link");
        if (o.rel = i ? "stylesheet" : ns,
        i || (o.as = "script",
        o.crossOrigin = ""),
        o.href = n,
        document.head.appendChild(o),
        i)
            return new Promise( (r, l) => {
                o.addEventListener("load", r),
                o.addEventListener("error", () => l(new Error(`Unable to preload CSS for ${n}`)))
            }
            )
    }
    )).then( () => t())
}
  , Gt = {}
  , Ot = (e, t) => {
    t = t || {};
    let a = t.editor || {};
    a.base = a.base || "vs",
    a.inherit = a.inherit === void 0 ? !0 : a.inherit,
    a.rules = a.rules || [],
    a.colors = a.colors || [],
    $e.defineTheme(e, a),
    Gt[e] = t.styles || {}
}
  , pa = {
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    builtinFunctions: [],
    digits: /[0-9_]+/,
    binarydigits: /[0-1_]+/,
    hexdigits: /[[0-9a-fA-F_]+/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
    tokenizer: {
        root: [[/\s+/, "white"], [/```$/, {
            token: "string",
            next: "@codeblock"
        }], [/[a-zA-Z_$][\w$]*[\s]?/, {
            cases: {
                "@builtinFunctions": "predefined",
                "~(new|var|if|else|for|in|return|import|break|continue|as|null|true|false|try|catch|finally|async|while|exit|asc|desc|ASC|DESC|assert|let|const|throw|instanceof)[\\s]?": {
                    token: "keywords"
                },
                "~(select|from|left|join|on|and|or|order|by|where|group|having|limit|offset|SELECT|FROM|LEFT|JOIN|ON|AND|OR|ORDER|BY|WHERE|GROUP|HAVING|LIMIT|OFFSET)[\\s]{1}": {
                    token: "keywords"
                },
                "@default": "identifier"
            }
        }], [/::[a-zA-Z]+/, "keywords"], [/[{}()[\]]/, "@brackets"], [/(@digits)\.(@digits)/, "number.float"], [/0[xX](@hexdigits)n?/, "number.hex"], [/0[bB](@binarydigits)n?/, "number.binary"], [/(@digits)[lLbBsSdDfFmM]?/, "number"], [/\/\*\**/, "comment", "@comment"], [/\/\//, "comment", "@commentTodo"], [/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/, {
            token: "regexp",
            bracket: "@open",
            next: "@regexp"
        }], [/[;,.]/, "delimiter"], [/"""/, {
            token: "string",
            next: "@string_multi_embedded",
            nextEmbedded: "mybatis"
        }], [/"([^"\\]|\\.)*$/, "string.invalid"], [/'([^'\\]|\\.)*$/, "string.invalid"], [/"/, "string", "@string_double"], [/'/, "string", "@string_single"], [/`/, "string", "@string_backtick"]],
        comment: [[/\*\//, "comment", "@popall"], [/\S((TODO)|(todo)|(fixme)|(FIXME))\s+/, "comment"], [/((TODO)|(todo)|(fixme)|(FIXME))\s+[^(*/)]+/, "comment.todo"], [/\S/, "comment"]],
        commentTodo: [[/^/, "", "@popall"], [/\S((TODO)|(todo)|(fixme)|(FIXME))\s+/, "comment"], [/((TODO)|(todo)|(fixme)|(FIXME))[ \t]+[^\n]+/, "comment.todo", "@popall"], [/\S/, "comment"]],
        regexp: [[/(\{)(\d+(?:,\d*)?)(\})/, ["regexp.escape.control", "regexp.escape.control", "regexp.escape.control"]], [/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/, ["regexp.escape.control", {
            token: "regexp.escape.control",
            next: "@regexrange"
        }]], [/(\()(\?:|\?=|\?!)/, ["regexp.escape.control", "regexp.escape.control"]], [/[()]/, "regexp.escape.control"], [/@regexpctl/, "regexp.escape.control"], [/[^\\\/]/, "regexp"], [/@regexpesc/, "regexp.escape"], [/\\\./, "regexp.invalid"], [/(\/)([gimsuy]*)/, [{
            token: "regexp",
            bracket: "@close",
            next: "@pop"
        }, "keyword.other"]]],
        codeblock: [[/^```$/, {
            token: "string",
            next: "@pop"
        }], [/.*$/, "variable.source"]],
        regexrange: [[/-/, "regexp.escape.control"], [/\^/, "regexp.invalid"], [/@regexpesc/, "regexp.escape"], [/[^\]]/, "regexp"], [/\]/, {
            token: "regexp.escape.control",
            next: "@pop",
            bracket: "@close"
        }]],
        string_multi_embedded: [[/[^"]+/, ""], ['"""', {
            token: "string",
            next: "@pop",
            nextEmbedded: "@pop"
        }]],
        string_double: [[/[^\\"]+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/"/, "string", "@pop"]],
        string_single: [[/[^\\']+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/'/, "string", "@pop"]],
        string_backtick: [[/\$\{/, {
            token: "delimiter.bracket",
            next: "@bracketCounting"
        }], [/[^\\`$]+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/`/, "string", "@pop"]],
        bracketCounting: [[/\{/, "delimiter.bracket", "@bracketCounting"], [/\}/, "delimiter.bracket", "@pop"], {
            include: "root"
        }]
    }
};
let Je = {}, Pa = {}, $t = [], _a = [], zt, ha;
const ss = e => e === "int" || e === "java.lang.Integer" ? "java.lang.Integer" : e === "string" || e === "java.lang.String" ? "java.lang.String" : e === "double" || e === "java.lang.Double" ? "java.lang.Double" : e === "float" || e === "java.lang.Float" ? "java.lang.Float" : e === "byte" || e === "java.lang.Byte" ? "java.lang.Byte" : e === "short" || e === "java.lang.Short" ? "java.lang.Short" : e === "long" || e === "java.lang.Long" ? "java.lang.Long" : e.indexOf("[]") > -1 ? "[Ljava.lang.Object;" : e || "java.lang.Object"
  , fa = e => {
    let t = e.lastIndexOf(".");
    return t > -1 ? e.substring(t + 1) : e
}
  , os = (e, t, a) => e.length > 0 && e[e.length - 1].varArgs ? a ? e.length - 1 <= t.length : e.length <= t.length : a ? e.length - 1 === t.length : e.length === t.length
  , rs = function() {
    return new Promise( (e, t) => {
        Y.sendPost("/classes").success(a => {
            Je = a.classes || {},
            Pa = a.extensions || {},
            _a = a.functions || [],
            pa.builtinFunctions = _a.map(n => n.name),
            W.setMonarchTokensProvider("magicscript", pa),
            e()
        }
        ).exception(a => {
            t()
        }
        ).error(a => {
            t()
        }
        )
    }
    )
}
  , ls = () => new Promise( (e, t) => {
    Y.execute({
        url: "classes.txt",
        responseType: "text",
        method: "get"
    }).then(a => {
        const n = [];
        a.data.split(`
`).forEach(i => {
            const s = i.split(":");
            s.length === 1 ? n.push(s[0].trim()) : n.push(...s[1].split(",").map(o => s[0] + "." + o.trim()))
        }
        ),
        $t = n,
        e()
    }
    ).catch(a => {
        t()
    }
    )
}
)
  , Xa = (e, t) => Array(t > (e + "").length ? t - ("" + e).length - 1 : 0).join(0) + e
  , xn = e => {
    let t = [];
    return e && (t = e.enums || [],
    e.superClass && (t = t.concat(xn(e.superClass)))),
    t
}
  , On = (e, t, a) => {
    if (e.insertText = e.name,
    e.parameters.length > t) {
        let n = []
          , i = [];
        for (let s = t; s < e.parameters.length; s++)
            n.push("${" + (s + 1 - t) + ":" + e.parameters[s].name + "}"),
            e.parameters[s].varArgs ? i.push(fa(e.parameters[s].type).replace("[]", "") + " ... " + e.parameters[s].name) : i.push(fa(e.parameters[s].type) + " " + e.parameters[s].name);
        e.sortText = Xa(a, 10) + e.name,
        e.fullName = e.name + "(" + i.join(", ") + ")",
        e.insertText += "(" + n.join(",") + ")",
        e.signature = e.name + i.join(",")
    } else
        e.sortText = Xa(a, 10) + e.name,
        e.insertText += "()",
        e.fullName = e.name + "()",
        e.signature = e.name;
    return e
}
;
let It = {};
const cs = (e, t) => {
    It[e] = t
}
  , ga = e => {
    let t = [];
    if (e) {
        if (t = e.attributes || [],
        e.superClass && (t = t.concat(ga(e.superClass))),
        e.interfaces && e.interfaces.length > 0)
            for (let a = 0, n = e.interfaces.length; a < n; a++)
                t = t.concat(ga(e.interfaces[a]));
        It[e.className] && (typeof It[e.className] == "function" ? t = t.concat(It[e.className]()) : t = t.concat(It[e.className]))
    }
    return t
}
  , ma = (e, t) => {
    t = t || 0;
    let a = []
      , n = (i, s, o) => {
        if (i && i.methods)
            for (let r = 0, l = i.methods.length; r < l; r++) {
                let u = i.methods[r];
                u = On(u, s, o),
                u.extension = s === 1,
                a.push(u)
            }
    }
    ;
    if (typeof e == "string" && (e = Je[e]),
    e) {
        if (n(e, 0, t),
        e.superClass && (a = a.concat(ma(e.superClass, t + 1))),
        e.interfaces && e.interfaces.length > 0)
            for (let i = 0, s = e.interfaces.length; i < s; i++)
                a = a.concat(ma(e.interfaces[i], t + 100));
        e = Pa[e.className],
        e && n(e, 1, t + 1e4)
    }
    return a
}
  , us = e => Pa[e]
  , ds = e => {
    if (!e)
        throw new Error("className is required");
    let t = Je[e];
    if (!t) {
        let a = $t.findIndex(n => n === e);
        t = $t[a]
    }
    return t
}
;
async function ps(e) {
    let t = Je[e];
    if (t)
        t = Je[t.className] || t;
    else
        try {
            (await Y.execute({
                url: "/class",
                data: {
                    className: e
                }
            })).data.data.forEach(i => {
                Je[i.className] = i
            }
            ),
            t = Je[e]
        } catch {}
    return t
}
const _s = () => _a.map(e => On(e, 0, 1))
  , Rn = () => {
    if (!zt && D.config) {
        let e = D.config;
        e.autoImportModuleList && (zt = {},
        e.autoImportModuleList.forEach(a => {
            zt[a] = a
        }
        ));
        let t = ["java.util.", "java.lang."].concat((e.autoImportPackage || "").replace(/\\s/g, "").replace(/\*/g, "").split(","));
        ha = {},
        $t.forEach(a => {
            t.forEach(n => {
                a.indexOf(n) === 0 && a.indexOf(".", n.length) === -1 && (ha[a.substring(a.lastIndexOf(".") + 1)] = a)
            }
            )
        }
        )
    }
}
  , hs = () => (Rn(),
zt || {})
  , fs = () => (Rn(),
ha || {})
  , gs = () => $t;
let va;
const ms = e => {
    va = e
}
  , vs = e => va && va(e)
  , bs = () => Object.keys(Je).filter(e => Je[e].module);
let An;
const Es = e => {
    An = e
}
;
let Cn;
const ys = e => {
    Cn = e
}
  , Ts = () => An
  , Ss = () => Cn
  , ae = {
    findEnums: xn,
    findAttributes: ga,
    findMethods: ma,
    findFunction: _s,
    loadClass: ps,
    findClass: ds,
    initClasses: rs,
    initImportClass: ls,
    getWrapperClass: ss,
    matchTypes: os,
    getAutoImportModule: hs,
    getAutoImportClass: fs,
    getExtension: us,
    getImportClass: gs,
    getOnlineFunction: vs,
    setupOnlineFunction: ms,
    setExtensionAttribute: cs,
    getSimpleClass: fa,
    getDefineModules: bs,
    setApiFinder: Es,
    setFunctionFinder: ys,
    getApiFinder: Ts,
    getFunctionFinder: Ss
};
class ge extends Error {
    constructor(t, a) {
        super(t),
        this.name = "ParseException",
        this.span = a
    }
}
class xs {
    constructor(t, a, n, i, s, o, r) {
        this.source = t,
        this.start = a,
        this.end = n,
        this.lineNumber = i,
        this.endLineNumber = s,
        this.startCol = o,
        this.endCol = r
    }
}
class Q {
    constructor(t, a, n) {
        t instanceof Q && a instanceof Q ? (this.source = t.source,
        this.start = t.start,
        this.end = a.end,
        this.cachedText = this.source.substring(this.start, this.end)) : (this.source = t,
        this.start = a || 0,
        this.end = n || t.length,
        this.cachedText = t.substring(this.start, this.end))
    }
    getText() {
        return this.cachedText
    }
    getSource() {
        return this.source
    }
    getStart() {
        return this.start
    }
    getEnd() {
        return this.end
    }
    toString() {
        return "Span [text=" + this.getText() + ", start=" + this.start + ", end=" + this.end + "]"
    }
    inPosition(t) {
        return this.start <= t && this.end >= t
    }
    getLine() {
        if (this.line != null)
            return this.line;
        let t = this.start;
        for (; t < this.end && !(t < 0); ) {
            if (this.source.charAt(t) === `
`) {
                t = t + 1;
                break
            }
            t--
        }
        t < 0 && (t = 0);
        let a = this.end;
        for (; !(a > this.source.length - 1 || this.source.charAt(a) === `
`); )
            a++;
        let n = 0
          , i = t;
        for (; i > 0 && i < this.end; )
            this.source.charAt(i) === `
` && n++,
            i--;
        n++,
        i = t + 1;
        let s = n;
        for (; i < a; )
            this.source.charAt(i) === `
` && s++,
            i++;
        let o = this.start - t + 1
          , r = o + this.end - this.start - 1;
        return this.line = new xs(this.source,t,a,n,s,o,r),
        this.line
    }
}
const p = {
    Spread: {
        literal: "...",
        error: "..."
    },
    Period: {
        literal: ".",
        error: "."
    },
    QuestionPeriod: {
        literal: "?.",
        error: "?."
    },
    Comma: {
        literal: ",",
        error: ","
    },
    Semicolon: {
        literal: ";",
        error: ";"
    },
    Colon: {
        literal: ":",
        error: ":"
    },
    Plus: {
        literal: "+",
        error: "+"
    },
    Minus: {
        literal: "-",
        error: "-"
    },
    Asterisk: {
        literal: "*",
        error: "*"
    },
    ForwardSlash: {
        literal: "/",
        error: "/"
    },
    PostSlash: {
        literal: "\\",
        error: "\\"
    },
    Percentage: {
        literal: "%",
        error: "%"
    },
    LeftParantheses: {
        literal: "(",
        error: "("
    },
    RightParantheses: {
        literal: ")",
        error: ")"
    },
    LeftBracket: {
        literal: "[",
        error: "["
    },
    RightBracket: {
        literal: "]",
        error: "]"
    },
    LeftCurly: {
        literal: "{",
        error: "{"
    },
    RightCurly: {
        error: "}"
    },
    Less: {
        literal: "<",
        error: "<"
    },
    Greater: {
        literal: ">",
        error: ">"
    },
    LessEqual: {
        literal: "<=",
        error: "<="
    },
    GreaterEqual: {
        literal: ">=",
        error: ">="
    },
    Equal: {
        literal: "==",
        error: "=="
    },
    NotEqual: {
        literal: "!=",
        error: "!="
    },
    Assignment: {
        literal: "=",
        error: "="
    },
    PlusPlus: {
        literal: "++",
        error: "++"
    },
    MinusMinus: {
        literal: "--",
        error: "--"
    },
    PlusEqual: {
        literal: "+=",
        error: "+="
    },
    MinusEqual: {
        literal: "-=",
        error: "-="
    },
    AsteriskEqual: {
        literal: "*=",
        error: "*="
    },
    ForwardSlashEqual: {
        literal: "/=",
        error: "/="
    },
    PercentEqual: {
        literal: "%=",
        error: "%="
    },
    ColonColon: {
        literal: "::",
        error: "::"
    },
    EqualEqualEqual: {
        literal: "===",
        error: "==="
    },
    NotEqualEqual: {
        literal: "!==",
        error: "!=="
    },
    And: {
        literal: "&&",
        error: "&&"
    },
    Or: {
        literal: "||",
        error: "||"
    },
    Xor: {
        literal: "^",
        error: "^"
    },
    Not: {
        literal: "!",
        error: "!"
    },
    BitAnd: {
        literal: "&",
        error: "&"
    },
    BitOr: {
        literal: "|",
        error: "|"
    },
    BitNot: {
        literal: "~",
        error: "~"
    },
    LShift: {
        literal: "<<",
        error: "<<"
    },
    RShift: {
        literal: ">>",
        error: ">>"
    },
    RShift2: {
        literal: ">>>",
        error: ">>>"
    },
    XorEqual: {
        literal: "^=",
        error: "^=",
        modifiable: !0
    },
    BitAndEqual: {
        literal: "&=",
        error: "&=",
        modifiable: !0
    },
    BitOrEqual: {
        literal: "|=",
        error: "|=",
        modifiable: !0
    },
    LShiftEqual: {
        literal: "<<=",
        error: "<<=",
        modifiable: !0
    },
    RShiftEqual: {
        literal: ">>=",
        error: ">>=",
        modifiable: !0
    },
    RShift2Equal: {
        literal: ">>>=",
        error: ">>>=",
        modifiable: !0
    },
    SqlAnd: {
        literal: "and",
        error: "and"
    },
    SqlOr: {
        literal: "or",
        error: "or"
    },
    SqlNotEqual: {
        literal: "<>",
        error: "<>",
        inLinq: !0
    },
    InstanceOf: {
        literal: "instanceof",
        error: "instanceof"
    },
    Questionmark: {
        literal: "?",
        error: "?"
    },
    DoubleQuote: {
        literal: '"',
        error: '"'
    },
    TripleQuote: {
        literal: '"""',
        error: '"""'
    },
    SingleQuote: {
        literal: "'",
        error: "'"
    },
    Lambda: {
        error: "=> \u6216 ->"
    },
    BooleanLiteral: {
        error: "true \u6216 false"
    },
    DoubleLiteral: {
        error: "\u4E00\u4E2A double \u7C7B\u578B\u6570\u503C"
    },
    DecimalLiteral: {
        error: "\u4E00\u4E2A BigDecimal \u7C7B\u578B\u6570\u503C"
    },
    FloatLiteral: {
        error: "\u4E00\u4E2A float \u7C7B\u578B\u6570\u503C"
    },
    LongLiteral: {
        error: "\u4E00\u4E2A long \u7C7B\u578B\u6570\u503C"
    },
    IntegerLiteral: {
        error: "\u4E00\u4E2A int \u7C7B\u578B\u6570\u503C"
    },
    ShortLiteral: {
        error: "\u4E00\u4E2A short \u7C7B\u578B\u6570\u503C"
    },
    ByteLiteral: {
        error: "\u4E00\u4E2A byte \u7C7B\u578B\u6570\u636E"
    },
    CharacterLiteral: {
        error: "\u4E00\u4E2A char \u7C7B\u578B\u6570\u636E"
    },
    RegexpLiteral: {
        error: "\u4E00\u4E2A \u6B63\u5219\u8868\u8FBE\u5F0F"
    },
    StringLiteral: {
        error: "\u4E00\u4E2A \u5B57\u7B26\u4E32"
    },
    NullLiteral: {
        error: "null"
    },
    Language: {
        error: "language"
    },
    Identifier: {
        error: "\u6807\u8BC6\u7B26"
    },
    Unknown: {
        error: "unknown"
    }
};
let Os = Object.getOwnPropertyNames(p).map(e => p[e]);
p.getSortedValues = function() {
    return this.values ? this.values : (this.values = Os.sort(function(e, t) {
        return !e.literal && !t.literal ? 0 : !e.literal && !!t.literal ? 1 : !!e.literal && !t.literal ? -1 : t.literal.length - e.literal.length
    }),
    this.values)
}
;
class je {
    constructor(t, a, n) {
        this.type = t,
        this.span = a,
        n instanceof yt ? this.tokenStream = n : n && (this.value = n)
    }
    getTokenType() {
        return this.type
    }
    getTokenStream() {
        return this.tokenStream
    }
    getSpan() {
        return this.span
    }
    getText() {
        return this.span.getText()
    }
}
class Me extends je {
    constructor(t, a, n) {
        super(t, a, n)
    }
    getJavaType() {
        return this.type === p.StringLiteral ? "java.lang.String" : this.type === p.DoubleLiteral ? "java.lang.Double" : this.type === p.ByteLiteral ? "java.lang.Byte" : this.type === p.FloatLiteral ? "java.lang.Float" : this.type === p.DecimalLiteral ? "java.math.BigDecimal" : this.type === p.IntegerLiteral ? "java.lang.Integer" : this.type === p.LongLiteral ? "java.lang.Long" : this.type === p.BooleanLiteral ? "java.lang.Boolean" : this.type === p.RegexpLiteral ? "java.util.regex.Pattern" : "java.lang.Object"
    }
}
class Rs {
    constructor(t, a, n) {
        this.index = a === void 0 ? 0 : a,
        this.end = n === void 0 ? t.length : n,
        this.source = t,
        this.spanStart = 0
    }
    hasMore() {
        return this.index < this.end
    }
    consume() {
        return this.source.charAt(this.index++)
    }
    match(t, a) {
        typeof t != "string" && (t = t.literal);
        let n = t.length;
        if (n + this.index > this.end)
            return !1;
        for (let i = 0, s = this.index; i < n; i++,
        s++)
            if (this.index >= this.end || t.charAt(i) !== this.source.charAt(s))
                return !1;
        return a && (this.index += n),
        !0
    }
    matchAny(t, a) {
        for (let n = 0, i = t.length; n < i; n++)
            if (this.match(t[n], a))
                return !0;
        return !1
    }
    matchDigit(t) {
        return this.matchAny("0123456789", t)
    }
    matchIdentifierStart(t) {
        if (this.index >= this.end)
            return !1;
        let a = this.source.charAt(this.index);
        return a.match(/[a-zA-Z0-9_\u4e00-\u9fa5]/) || a === "$" || a === "_" || a === "@" ? (t && this.index++,
        !0) : !1
    }
    matchIdentifierPart(t) {
        if (this.index >= this.end)
            return !1;
        let a = this.source.charAt(this.index);
        return a.match(/[a-zA-Z0-9_\u4e00-\u9fa5]/) || a === "@" ? (t && this.index++,
        !0) : !1
    }
    skipWhiteSpace() {
        for (; this.index < this.end; ) {
            let t = this.source.charAt(this.index);
            if (t === " " || t === `
` || t === "\r" || t === "	")
                this.index++;
            else
                break
        }
    }
    getSpan(t, a) {
        return new Q(this.source,t,a)
    }
    skipLine() {
        for (; this.index < this.end && this.source.charAt(this.index++) !== `
`; )
            ;
    }
    skipUntil(t) {
        for (; this.index < this.end; ) {
            let a = !0;
            for (let n = 0, i = t.length; n < i && this.index + n < this.end; n++)
                if (t.charAt(n) !== this.source.charAt(this.index + n)) {
                    a = !1;
                    break
                }
            if (this.index += a ? t.length : 1,
            a)
                return !0
        }
        return !1
    }
    startSpan() {
        this.spanStart = this.index
    }
    endSpan(t, a) {
        return a !== void 0 ? new Q(this.source,t,a) : new Q(this.source,this.spanStart,this.index + (t || 0))
    }
    getPosition() {
        return this.index
    }
    reset(t) {
        this.index = t
    }
}
class yt {
    constructor(t) {
        this.tokens = t,
        this.index = 0,
        this.end = t.length
    }
    getEnd() {
        return this.end > 0 && this.tokens[this.end - 1]
    }
    hasMore() {
        return this.index < this.end
    }
    hasNext() {
        return this.index + 1 < this.end
    }
    makeIndex() {
        return this.index
    }
    resetIndex(t) {
        this.index = t
    }
    getToken(t) {
        let a = this.tokens[this.index];
        return t && this.index++,
        a
    }
    consume() {
        if (!this.hasMore())
            throw new Error("Reached the end of the source.");
        return this.tokens[this.index++]
    }
    next() {
        if (!this.hasMore())
            throw new Error("Reached the end of the source.");
        return this.tokens[++this.index]
    }
    prev() {
        if (this.index === 0)
            throw new Error("Reached the end of the source.");
        return this.tokens[--this.index]
    }
    getPrev() {
        if (this.index === 0)
            throw new Error("Reached the end of the source.");
        return this.tokens[this.index - 1]
    }
    match(t, a, n) {
        if (this.index >= this.end)
            return !1;
        let i = !1;
        if (Array.isArray(t)) {
            for (let s = 0, o = t.length; s < o; s++)
                if (this.match(t[s], a, n))
                    return !0
        } else
            typeof t == "string" ? (this.tokens[this.index].getText() === t || n === !0 && this.tokens[this.index].getText().toLowerCase() === t.toLowerCase()) && (i = !0) : this.tokens[this.index].type === t && (i = !0);
        return i && a && this.index++,
        i
    }
    textToString(t) {
        if (typeof t == "string")
            return t;
        if (t instanceof je)
            return t.getText();
        if (Array.isArray(t)) {
            let a = [];
            return t.forEach(n => a.push(this.textToString(n))),
            a.join(",")
        } else
            return t.error
    }
    expect(t, a) {
        if (this.match(t, !0, a))
            return this.tokens[this.index - 1];
        if (this.hasMore()) {
            let n = this.tokens[this.index];
            throw t instanceof je && (t = t.type.error),
            new ge("Expected '" + this.textToString(t) + "', but got '" + n.getText() + "'",n.getSpan())
        } else {
            let n = this.tokens[this.index - 1].getSpan();
            return new je(p.Unknown,n)
        }
    }
    hasPrev() {
        return this.index > 0
    }
    getSource() {
        return this.tokens.length === 0 ? null : this.tokens[0].getSpan().getSource()
    }
}
const As = (e, t) => {
    if (t.length > 0) {
        let a = t[t.length - 1];
        if (a instanceof Me)
            return !1;
        switch (a.getTokenType()) {
        case p.Comma:
        case p.Semicolon:
        case p.Colon:
        case p.RightCurly:
        case p.LeftBracket:
        case p.LeftParantheses:
        case p.Assignment:
        case p.NotEqual:
        case p.EqualEqualEqual:
        case p.NotEqualEqual:
        case p.Equal:
        case p.And:
        case p.Or:
        case p.SqlAnd:
        case p.SqlOr:
        case p.SqlNotEqual:
        case p.Questionmark:
        case p.InstanceOf:
        case p.Lambda:
        case p.Not:
            break;
        default:
            return !1
        }
    }
    if (e.match("/", !1)) {
        let a = e.getPosition();
        e.consume(),
        e.startSpan();
        let n = !1
          , i = 0
          , s = 0
          , o = 0;
        for (; e.hasMore(); ) {
            if (e.match("\\", !0)) {
                e.consume();
                continue
            }
            if (e.match("[", !1))
                i++,
                s = e.getPosition();
            else if (i > 0 && e.match("]", !1))
                i--;
            else if (e.match(p.ForwardSlash.literal, !0))
                if (i === 0) {
                    e.match("g", !0),
                    e.match("i", !0),
                    e.match("m", !0),
                    e.match("s", !0),
                    e.match("u", !0),
                    e.match("y", !0),
                    n = !0;
                    break
                } else
                    o = e.getPosition();
            let l = e.consume();
            if (l === "\r" || l === `
`)
                return e.reset(a),
                !1
        }
        if (i !== 0)
            throw new ge("Missing ']'",e.getSpan(s, o - 1));
        if (!n)
            return e.reset(a),
            !1;
        let r = e.endSpan();
        return r = e.getSpan(r.getStart() - 1, r.getEnd()),
        t.push(new Me(p.RegexpLiteral,r)),
        !0
    }
    return !1
}
  , oa = (e, t, a) => {
    if (e.match(t, !0)) {
        e.startSpan();
        let n = !1;
        for (; e.hasMore(); ) {
            if (e.match("\\", !0)) {
                e.consume();
                continue
            }
            if (e.match(t.literal, !0)) {
                n = !0;
                break
            }
            let s = e.consume();
            if (t !== p.TripleQuote && (s === "\r" || s === `
`))
                throw new ge(t.error + t.error + "\u5B9A\u4E49\u7684\u5B57\u7B26\u4E32\u4E0D\u80FD\u6362\u884C",e.endSpan())
        }
        if (!n)
            throw new ge("\u5B57\u7B26\u4E32\u6CA1\u6709\u7ED3\u675F\u7B26" + t.error,e.endSpan());
        let i = e.endSpan();
        return i = e.getSpan(i.getStart(), i.getEnd() - t.literal.length),
        a.push(new Me(p.StringLiteral,i)),
        !0
    }
    return !1
}
  , Ja = (e, t) => {
    let a = Number.parseInt(e.getText().substring(2).replace(/\_/g, ""), t);
    return a > 2147483647 || a < -2147483648 ? new Me(p.LongLiteral,e,a) : a > 127 || a < -128 ? new Me(p.IntegerLiteral,e,a) : new Me(p.ByteLiteral,e,a)
}
  , Cs = (e, t) => {
    if (e.match("0", !1)) {
        let a = e.getPosition();
        if (e.startSpan(),
        e.consume(),
        e.matchAny(["x", "X"], !0)) {
            for (; e.matchDigit(!0) || e.matchAny(["A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f", "_"], !0); )
                ;
            if (e.matchAny(["L", "l"], !0)) {
                let n = e.endSpan()
                  , i = n.getText();
                return t.push(new Me(p.LongLiteral,n,parseInt(i.substring(2, i.length - 1).replace(/\_/g, ""), 16))),
                !0
            }
            return t.push(Ja(e.endSpan(), 16)),
            !0
        } else if (e.matchAny(["b", "B"], !0)) {
            for (; e.matchAny(["0", "1", "_"], !0); )
                ;
            if (e.matchAny(["L", "l"], !0)) {
                let n = e.endSpan()
                  , i = n.getText();
                return t.push(new Me(p.LongLiteral,n,parseInt(i.substring(2, i.length - 1).replace(/\_/g, ""), 2))),
                !0
            }
            return t.push(Ja(e.endSpan(), 2)),
            !0
        }
        e.reset(a)
    }
    if (e.matchDigit(!1)) {
        let a = p.IntegerLiteral;
        for (e.startSpan(); e.matchDigit(!0) || e.match("_", !0); )
            ;
        if (e.match(p.Period.literal, !0))
            if (e.hasMore())
                for (a = p.DoubleLiteral; e.matchDigit(!0) || e.match("_", !0); )
                    ;
            else
                e.reset(e.getPosition() - 1);
        if (e.matchAny(["b", "B"], !0)) {
            if (a === p.DoubleLiteral)
                throw new ge("Byte literal can not have a decimal point.",e.endSpan());
            a = p.ByteLiteral
        } else if (e.matchAny(["s", "S"], !0)) {
            if (a === p.DoubleLiteral)
                throw new ge("Short literal can not have a decimal point.",e.endSpan());
            a = p.ShortLiteral
        } else if (e.matchAny(["l", "L"], !0)) {
            if (a === p.DoubleLiteral)
                throw new ge("Long literal can not have a decimal point.",e.endSpan());
            a = p.LongLiteral
        } else
            e.matchAny(["f", "F"], !0) ? a = p.FloatLiteral : e.matchAny(["d", "D"], !0) ? a = p.DoubleLiteral : e.matchAny(["m", "M"], !0) && (a = p.DecimalLiteral);
        return t.push(new Me(a,e.endSpan())),
        !0
    }
    return !1
}
  , Is = (e, t) => {
    if (e.match("```", !0))
        if (e.startSpan(),
        e.matchIdentifierStart(!0)) {
            for (; e.matchIdentifierPart(!0); )
                ;
            let a = e.endSpan();
            if (t.push(new je(p.Language,a)),
            e.startSpan(),
            !e.skipUntil("```"))
                throw new ge("```\u9700\u8981\u4EE5```\u7ED3\u5C3E",e.endSpan());
            return t.push(new je(p.Language,e.endSpan(-3))),
            !0
        } else
            throw new ge("```\u540E\u9700\u8981\u6807\u8BC6\u8BED\u8A00\u7C7B\u578B",e.endSpan());
    return !1
}
  , ks = (e, t) => {
    if (e.matchIdentifierStart(!0)) {
        for (e.startSpan(); e.matchIdentifierPart(!0); )
            ;
        let a = e.endSpan();
        return a = e.getSpan(a.getStart() - 1, a.getEnd()),
        a.getText() === "true" || a.getText() === "false" ? t.push(new Me(p.BooleanLiteral,a)) : a.getText() === "null" ? t.push(new Me(p.NullLiteral,a)) : p.SqlAnd.literal.toUpperCase() === a.getText().toUpperCase() ? t.push(new je(p.SqlAnd,a)) : p.SqlOr.literal.toUpperCase() === a.getText().toUpperCase() ? t.push(new je(p.SqlOr,a)) : t.push(new je(p.Identifier,a)),
        !0
    }
    return !1
}
  , Ls = (e, t) => {
    if (e.match("`", !0)) {
        let a = e.getPosition()
          , n = a
          , i = [];
        for (; e.hasMore(); ) {
            if (e.match("\\", !0)) {
                e.consume();
                continue
            }
            if (e.match("`", !0))
                break;
            if (e.match("${", !0)) {
                let r = e.getPosition();
                n < r - 2 && i.push(new Me(p.StringLiteral,e.endSpan(n, r - 2))),
                i.push(...In(e, [], "}")),
                n = e.getPosition();
                continue
            }
            e.consume()
        }
        let s = e.endSpan(a, e.getPosition())
          , o = e.getPosition() - 1;
        return o - n > 0 && i.push(new Me(p.StringLiteral,e.endSpan(n, o))),
        s = e.getSpan(s.getStart() - 1, s.getEnd()),
        t.push(new Me(p.StringLiteral,s,new yt(i))),
        !0
    }
    return !1
}
  , In = (e, t, a) => {
    let n = 0
      , i = 0;
    for (; e.hasMore(); ) {
        if (e.skipWhiteSpace(),
        a && e.match(a, !0))
            return t;
        if (e.match("//", !0)) {
            e.skipLine();
            continue
        }
        if (e.match("/*", !0)) {
            e.skipUntil("*/");
            continue
        }
        if (Cs(e, t) || oa(e, p.SingleQuote, t) || oa(e, p.TripleQuote, t) || oa(e, p.DoubleQuote, t) || As(e, t) || Is(e, t) || Ls(e, t) || ks(e, t))
            continue;
        if (e.matchAny(["=>", "->"], !0)) {
            t.push(new je(p.Lambda,e.getSpan(e.getPosition() - 2, e.getPosition())));
            continue
        }
        let s = !1
          , o = p.getSortedValues();
        for (let r = 0, l = o.length; r < l; r++) {
            let u = o[r];
            if (u.literal != null && e.match(u.literal, !0)) {
                u === p.LeftCurly && n++,
                t.push(new je(u,e.getSpan(e.getPosition() - u.literal.length, e.getPosition()))),
                s = !0;
                break
            }
        }
        if (!s) {
            if (n !== i && e.match("}", !0)) {
                i++,
                t.push(new je(p.RightCurly,e.getSpan(e.getPosition() - 1, e.getPosition())));
                continue
            }
            if (e.hasMore())
                throw new ge("Unknown token",e.getSpan(e.getPosition(), e.getPosition() + 1))
        }
    }
    return t
}
;
var Zt = e => In(new Rs(e,0,e.length), []);
class he {
    constructor(t) {
        this.span = t
    }
    getSpan() {
        return this.span
    }
    async getJavaType(t) {
        return await this.getExpressionsJavaType(t),
        "java.lang.Object"
    }
    async getExpressionsJavaType(t) {
        for (const a of this.expressions().filter(n => n))
            await a.getJavaType(t)
    }
    expressions() {
        return []
    }
    toString() {
        return this.span.getText()
    }
}
class Tt extends he {
    constructor(t) {
        super(t)
    }
}
class Le extends Tt {
    constructor(t, a, n) {
        super(t),
        this.javaType = a,
        this.expressionList = n || []
    }
    expressions() {
        return this.expressionList
    }
    async getJavaType() {
        return this.javaType
    }
    getValue() {
        return this.getSpan().getText().replace(/\\\\/g, "\\").replace(/\\n/g, `
`).replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\"/g, '"').replace(/\\'/g, "'")
    }
}
class Wt extends he {
    constructor(t, a, n) {
        super(t),
        this.target = a,
        this.args = n
    }
    expressions() {
        return [this.target, ...this.args]
    }
    getMethod() {
        return this.target
    }
    getArguments() {
        return this.args
    }
    async getJavaType(t) {
        let a = this.target.member.getText()
          , n = await this.target.getJavaType(t)
          , i = ae.findMethods(n);
        if (i)
            for (let s = 0, o = i.length; s < o; s++) {
                let r = i[s];
                if (r.name === a && ae.matchTypes(r.parameters, this.args, r.extension))
                    return r.origin ? n : ae.getWrapperClass(r.returnType)
            }
        return "java.lang.Object"
    }
}
class ba extends he {
    constructor(t, a, n) {
        super(t),
        this.target = a,
        this.args = n
    }
    expressions() {
        return [this.target, ...this.args]
    }
    getFunction() {
        return this.target
    }
    getArguments() {
        return this.args
    }
    async getJavaType(t) {
        if (this.target instanceof Ke) {
            const a = ae.findFunction().find(n => n.name === this.target.variable);
            if (a)
                return a.returnType
        }
        return await this.target.getJavaType(t)
    }
}
class nt extends he {
    constructor(t, a, n, i, s) {
        super(t),
        this.target = a,
        this.optional = n,
        this.member = i,
        this.whole = s
    }
    isWhole() {
        return this.whole === !0
    }
    expressions() {
        return [this.target]
    }
    getTarget() {
        return this.target
    }
    async getJavaType(t) {
        let a = await this.target.getJavaType(t)
          , n = await ae.loadClass(a)
          , i = n == null ? void 0 : n.attributes;
        const s = this.member.getText();
        if (i) {
            const l = i.find(u => u.name === s);
            if (l)
                return ae.getWrapperClass(l.type)
        }
        let o = n == null ? void 0 : n.enums;
        if (o) {
            const l = o.find(u => u.name === s);
            if (l)
                return ae.getWrapperClass(l.type)
        }
        let r = n == null ? void 0 : n.methods;
        if (r)
            for (let l = 0, u = r.length; l < u; l++) {
                let d = r[l];
                if (n.superClass === "java.util.HashMap" && d.name === "get" && d.parameters.length === 1)
                    return ae.getWrapperClass(d.returnType)
            }
        return a || "java.lang.Object"
    }
}
class Ke extends he {
    constructor(t, a) {
        super(t),
        this.variable = a
    }
    getVariable() {
        return this.variable
    }
    async getJavaType(t) {
        let a = t && t[this.variable];
        if (!a) {
            let n = t["@import"];
            for (let i = n.length - 1; i >= 0 && !a; i--)
                a = ae.findClass(n[i] + this.variable)
        }
        return a || "java.lang.Object"
    }
}
class Yt extends he {
    constructor(t, a, n) {
        super(t),
        this.target = a,
        this.keyOrIndex = n
    }
    async getJavaType(t) {
        return await this.target.getJavaType(t) === "db" ? "db" : super.getJavaType(t)
    }
}
class Qa extends he {
    constructor(t, a, n, i, s) {
        super(t),
        this.condition = a,
        this.trueBlock = n || [],
        this.elseIfs = i || [],
        this.falseBlock = s || []
    }
    expressions() {
        return [this.condition, ...this.trueBlock, ...this.elseIfs, ...this.falseBlock]
    }
}
class Za extends Le {
    constructor(t) {
        super(t)
    }
}
class ra extends he {
    constructor(t, a, n) {
        super(t),
        this.parameters = a,
        this.childNodes = n
    }
    expressions() {
        return [...this.childNodes]
    }
    async getJavaType(t) {
        if (Array.isArray(this.childNodes) && this.childNodes.length > 0) {
            for (let a = 0, n = this.childNodes.length; a < n; a++) {
                let i = this.childNodes[a];
                if (i instanceof kt)
                    return await i.getJavaType(t)
            }
            return await this.childNodes[this.childNodes.length - 1].getJavaType(t)
        }
        return await super.getJavaType(t)
    }
}
class kt extends he {
    constructor(t, a) {
        super(t),
        this.returnValue = a
    }
    expressions() {
        return [this.returnValue]
    }
    async getJavaType(t) {
        return this.returnValue == null ? "" : await this.returnValue.getJavaType(t)
    }
}
class Ns extends he {
    constructor(t) {
        super(t)
    }
}
class ws extends he {
    constructor(t) {
        super(t)
    }
}
class Ds extends he {
    constructor(t, a) {
        super(t),
        this.values = a
    }
    expressions() {
        return this.values
    }
}
class Ms extends he {
    constructor(t, a) {
        super(t),
        this.value = a
    }
    expressions() {
        return [this.value]
    }
}
class Ps extends he {
    constructor(t, a, n) {
        super(t),
        this.condition = a,
        this.values = n
    }
    expressions() {
        return [this.condition, ...this.values]
    }
}
class Dt extends he {
    constructor(t, a, n) {
        super(t),
        this.identifier = a,
        this.parameters = n
    }
    expressions() {
        return [...this.parameters]
    }
    async getJavaType(t) {
        let a = t[this.identifier];
        if (!a) {
            let n = t["@import"];
            for (let i = n.length - 1; i >= 0 && !a; i--)
                a = ae.findClass(n[i] + this.identifier)
        }
        return a || "java.lang.Object"
    }
}
class Us extends he {
    constructor(t, a) {
        super(t),
        this.expression = a
    }
    expressions() {
        return [this.expression]
    }
    async getJavaType(t) {
        return "java.util.concurrent.Future"
    }
}
class en extends he {
    constructor(t, a, n) {
        super(new Q(t.getSpan(),a.getSpan())),
        this.operand = a,
        this.operator = t,
        this.atAfter = n
    }
    async getJavaType(t) {
        return await this.operand.getJavaType(t)
    }
}
class $s extends he {
    constructor(t, a, n, i, s, o) {
        super(t),
        this.exceptionVarNode = a,
        this.tryBlock = n,
        this.tryResources = i,
        this.catchBlock = s,
        this.finallyBlock = o
    }
    expressions() {
        return [...this.tryBlock, ...this.tryResources, ...this.catchBlock, ...this.finallyBlock]
    }
}
class Fs extends he {
    constructor(t, a, n, i, s) {
        super(t),
        this.indexOrKey = a,
        this.value = n,
        this.mapOrArray = i,
        this.body = s
    }
    expressions() {
        return [this.mapOrArray, ...this.body]
    }
}
class Bs extends he {
    constructor(t, a, n) {
        super(t),
        this.condition = a,
        this.trueBlock = n
    }
    expressions() {
        return [this.condition, ...this.trueBlock]
    }
}
class Hs extends he {
    constructor(t, a, n, i) {
        super(t),
        this.packageName = a,
        this.varName = n,
        this.module = i
    }
    async getJavaType(t) {
        if (this.packageName.endsWith(".*"))
            t["@import"].push(this.packageName.substring(0, this.packageName.length - 1));
        else if (this.module)
            t[this.packageName] = this.packageName;
        else if (this.varName)
            t[this.varName] = this.packageName;
        else {
            let a = this.packageName.lastIndexOf(".");
            a > -1 && (t[this.packageName.substring(a + 1)] = this.packageName)
        }
    }
}
class Xt extends he {
    constructor(t, a, n, i) {
        super(t),
        this.varName = a,
        this.expression = n,
        this.defineType = i !== "var" && i !== "const" && i !== "let" && i
    }
    getVarName() {
        return this.varName
    }
    expressions() {
        return this.expression == null ? [] : [this.expression]
    }
    async getJavaType(t) {
        let a = "java.lang.Object";
        return this.defineType ? a = t[this.defineType] || a : this.expression && (a = await this.expression.getJavaType(t)),
        t[this.varName] = a,
        a
    }
}
class js extends Xt {
    constructor(t, a, n, i, s) {
        super(t, null, n, i),
        this.expression = n,
        this.tokens = a,
        this.defineType = i !== "var" && i !== "const" && i !== "let" && i,
        this.isMapAccess = s
    }
    expressions() {
        return this.expression == null ? [] : [this.expression]
    }
    async getJavaType(t) {
        let a = "java.lang.Object";
        if (this.defineType)
            a = t[this.defineType] || a;
        else if (!this.isMapAccess)
            return a;
        for (const n of this.tokens)
            t[n.getText()] = await new nt(this.span,this.expression,!0,n,!1).getJavaType(t);
        return a
    }
}
class tn extends he {
    constructor(t, a, n) {
        super(new Q(t.getSpan(),n.getSpan())),
        this.condition = t,
        this.trueExpression = a,
        this.falseExpression = n
    }
    expressions() {
        return [this.condition, this.trueExpression, this.falseExpression]
    }
}
class Vs extends he {
    constructor(t, a) {
        super(t),
        this.target = a
    }
    expressions() {
        return [this.target]
    }
}
class Gs extends Le {
    constructor(t, a, n) {
        super(t, "java.util.LinkedHashMap"),
        this.keys = a,
        this.values = n
    }
    expressions() {
        return this.values
    }
}
class zs extends Le {
    constructor(t, a) {
        super(t, "java.util.ArrayList"),
        this.values = a
    }
    expressions() {
        return this.values
    }
}
class Ys extends he {
    constructor(t) {
        super(t)
    }
    async getJavaType() {
        return "java.util.function.Function"
    }
    expressions() {
        return []
    }
}
class an extends he {
    constructor(t, a, n, i) {
        super(new Q(t.getSpan(),n.getSpan())),
        this.left = t,
        this.right = n,
        this.operator = a,
        this.linqLevel = i
    }
    getOperator() {
        return this.operator
    }
    setRightOperand(t) {
        this.right = t
    }
    getRightOperand() {
        return this.right
    }
    expressions() {
        return [this.left, this.right]
    }
    async getJavaType(t) {
        let a = await this.left.getJavaType(t)
          , n = await this.right.getJavaType(t);
        return a = a.toLowerCase().substring(a.lastIndexOf(".") + 1),
        n = n.toLowerCase().substring(n.lastIndexOf(".") + 1),
        (this.operator.type === p.Plus || this.operator.type === p.PlusEqual) && (a === "string" || n === "string") ? "java.lang.String" : this.operator.type === p.Equal || this.operator.type === p.Assignment && this.linqLevel > 0 ? "java.lang.Boolean" : a === "bigdecimal" || n === "bigdecimal" ? "java.math.BigDecimal" : a === "double" || n === "double" ? "java.lang.Double" : a === "float" || n === "float" ? "java.lang.Float" : a === "long" || n === "long" ? "java.lang.Long" : a === "integer" || n === "integer" ? "java.lang.Integer" : a === "short" || n === "short" ? "java.lang.Short" : a === "byte" || n === "byte" ? "java.lang.Byte" : "java.lang.Object"
    }
}
class Rt extends Tt {
    constructor(t, a, n) {
        super(t),
        this.expression = a,
        this.alias = n
    }
    expressions() {
        return [this.expression]
    }
}
class qs extends Tt {
    constructor(t, a, n, i) {
        super(t),
        this.leftJoin = a,
        this.target = n,
        this.condition = i
    }
    expressions() {
        return [this.target, this.condition]
    }
}
class Ks extends Tt {
    constructor(t, a, n, i) {
        super(t),
        this.expression = a,
        this.alias = n,
        this.order = i
    }
    expressions() {
        return [this.expression]
    }
}
class kn extends Tt {
    constructor(t, a, n, i) {
        super(t),
        this.convert = a,
        this.target = n,
        this.args = i
    }
    expressions() {
        return [this.target, ...this.args]
    }
    async getJavaType() {
        return this.convert == "double" ? "java.lang.Double" : this.convert == "float" ? "java.lang.Float" : this.convert == "long" ? "java.lang.Long" : this.convert == "int" ? "java.lang.Integer" : this.convert == "short" ? "java.lang.Short" : this.convert == "byte" ? "java.lang.Byte" : this.convert == "date" ? "java.util.Date" : "java.lang.Object"
    }
}
class Ln extends Tt {
    constructor(t, a, n, i, s, o, r, l, u, d) {
        super(t),
        this.fields = a,
        this.from = n,
        this.joins = i,
        this.where = s,
        this.groups = o,
        this.having = r,
        this.orders = l,
        this.limit = u,
        this.offset = d
    }
    expressions() {
        let t = [];
        return this.where && t.push(this.where),
        this.having && t.push(this.having),
        [...this.fields, this.from, ...this.joins, ...this.groups, ...t, ...this.orders, this.limit, this.offset]
    }
    async getJavaType() {
        return "java.util.List"
    }
}
const ea = {
    environmentFunction: () => {}
    ,
    setEnvironment: e => ea.environmentFunction = e
}
  , nn = ["import", "as", "var", "let", "const", "return", "break", "continue", "if", "for", "in", "new", "true", "false", "null", "else", "try", "catch", "finally", "async", "while", "exit", "and", "or", "throw"]
  , sn = ["from", "join", "left", "group", "by", "as", "having", "and", "or", "in", "where", "on", "limit", "offset"]
  , Ws = [[p.Assignment], [p.RShift2Equal, p.RShiftEqual, p.LShiftEqual, p.XorEqual, p.BitOrEqual, p.BitAndEqual, p.PercentEqual, p.ForwardSlashEqual, p.AsteriskEqual, p.MinusEqual, p.PlusEqual], [p.Or, p.SqlOr], [p.And, p.SqlAnd], [p.BitOr], [p.Xor], [p.BitAnd], [p.EqualEqualEqual, p.Equal, p.NotEqualEqual, p.NotEqual, p.SqlNotEqual], [p.Less, p.LessEqual, p.Greater, p.GreaterEqual, p.InstanceOf], [p.Plus, p.Minus], [p.LShift, p.RShift, p.RShift2], [p.Asterisk, p.ForwardSlash, p.Percentage]]
  , Xs = [[p.RShift2Equal, p.RShiftEqual, p.LShiftEqual, p.XorEqual, p.BitOrEqual, p.BitAndEqual, p.PercentEqual, p.ForwardSlashEqual, p.AsteriskEqual, p.MinusEqual, p.PlusEqual], [p.Or, p.SqlOr], [p.And, p.SqlAnd], [p.BitOr], [p.Xor], [p.BitAnd], [p.Assignment, p.EqualEqualEqual, p.Equal, p.NotEqualEqual, p.Equal, p.NotEqual, p.SqlNotEqual], [p.Less, p.LessEqual, p.Greater, p.GreaterEqual, p.InstanceOf], [p.Plus, p.Minus], [p.LShift, p.RShift, p.RShift2], [p.Asterisk, p.ForwardSlash, p.Percentage]]
  , Js = [p.MinusMinus, p.PlusPlus, p.BitNot, p.Minus, p.Plus, p.Not];
class ta {
    constructor(t) {
        this.stream = t,
        this.linqLevel = 0
    }
    parse(t) {
        let a = [];
        try {
            for (; this.stream.hasMore(); ) {
                let n = this.parseStatement();
                n != null && (this.validateNode(n),
                a.push(n))
            }
        } catch (n) {
            if (t !== !0)
                throw n
        }
        return a
    }
    async parseBest(t) {
        let a = this.parse()
          , n = await this.processEnv(a);
        return {
            best: this.findBestMatch(a[a.length - 1], t),
            env: n
        }
    }
    async processEnv(t) {
        let a = t.length
          , n = {
            ...ea.environmentFunction(),
            ...ae.getAutoImportClass(),
            ...ae.getAutoImportModule(),
            "@import": []
        };
        for (let i = 0; i < a; i++)
            await t[i].getJavaType(n);
        return n
    }
    validateNode(t) {
        if (t instanceof Le)
            throw new ge("literal cannot be used alone",t.getSpan())
    }
    parseStatement(t) {
        let a = null;
        if (this.stream.match("import", !1))
            a = this.parseImport();
        else if (this.matchVarDefine())
            a = this.parseVarDefine();
        else if (this.stream.match("if", !1))
            a = this.parseIfStatement();
        else if (this.stream.match("return", !1))
            a = this.parseReturn();
        else if (this.stream.match("for", !1))
            a = this.parseForStatement();
        else if (this.stream.match("while", !1))
            a = this.parseWhileStatement();
        else if (this.stream.match("continue", !1))
            a = new Ns(this.stream.consume().getSpan());
        else if (this.stream.match("async", !1))
            a = this.parseAsync();
        else if (this.stream.match("try", !1))
            a = this.parseTryStatement();
        else if (this.stream.match("break", !1))
            a = new ws(this.stream.consume().getSpan());
        else if (this.stream.match("exit", !1))
            a = this.parseExit();
        else if (this.stream.match("throw", !1))
            a = this.parseThrow();
        else if (this.stream.match("assert", !1))
            a = this.parseAssert();
        else {
            let n = this.stream.makeIndex();
            this.matchTypeDefine() && (this.stream.resetIndex(n),
            a = this.parseVarDefine()),
            a == null && (this.stream.resetIndex(n),
            a = this.parseExpression(t))
        }
        for (; this.stream.match(";", !0); )
            ;
        return a
    }
    matchTypeDefine() {
        if (!this.stream.match(p.Identifier, !0))
            return !1;
        let a = this.stream.makeIndex();
        try {
            if (this.stream.getPrev().getText() === "new")
                return !1;
            if (this.stream.match(p.Identifier, !1))
                return !0;
            let i = this.stream.getPrev().getSpan().getEnd();
            if (this.stream.hasMore() && this.stream.consume().getSpan().getStart() === i)
                return !1
        } finally {
            this.stream.resetIndex(a)
        }
        let n;
        if ((n = this.stream.match(p.LeftCurly, !0)) || this.stream.match(p.LeftBracket, !0)) {
            do
                if (!this.stream.match(p.Identifier, !0))
                    return !1;
            while (this.stream.match(p.Comma, !0));
            return n ? this.stream.match(p.RightCurly) : this.stream.match(p.RightBracket)
        }
        return !1
    }
    matchVarDefine() {
        return this.stream.match(["var", "let", "const"], !1)
    }
    checkKeyword(t) {
        if (nn.indexOf(t.getText()) > -1)
            throw new ge("\u53D8\u91CF\u540D\u4E0D\u80FD\u5B9A\u4E49\u4E3A\u5173\u952E\u5B57",t)
    }
    parseThrow() {
        let t = this.stream.consume().getSpan()
          , a = this.parseExpression();
        return new Ms(new Q(t,this.stream.getPrev().getSpan()),a)
    }
    parseExit() {
        let t = this.stream.expect("exit").getSpan()
          , a = [];
        do
            a.push(this.parseExpression());
        while (this.stream.match(p.Comma, !0));
        return new Ds(new Q(t,this.stream.getPrev().getSpan()),a)
    }
    parseAssert() {
        let t = this.stream.makeIndex();
        try {
            let a = this.stream.expect("assert").getSpan()
              , n = this.parseExpression();
            this.stream.expect(p.Colon);
            let i = [];
            do
                i.push(this.parseExpression());
            while (this.stream.match(p.Comma, !0));
            return new Ps(new Q(a,this.stream.getPrev().getSpan()),n,i)
        } catch {
            return this.stream.resetIndex(t),
            this.parseExpression()
        }
    }
    parseImport() {
        let t = this.stream.expect("import").getSpan();
        if (this.stream.hasMore()) {
            let a = this.stream.consume()
              , n = null
              , i = a.getTokenType() === p.StringLiteral;
            if (i)
                n = this.createStringLiteral(a).getValue();
            else if (a.type === p.Identifier) {
                let o = a.getSpan()
                  , r = null;
                for (n = o.getText(); this.stream.match(p.Period, !0); ) {
                    if (i = !0,
                    this.stream.match(p.Asterisk, !1)) {
                        a = this.stream.consume();
                        break
                    }
                    a = this.stream.expect(p.Identifier)
                }
                i && (r = a.getSpan(),
                n = new Q(o,r).getText())
            } else
                throw new ge("Expected identifier or string, but got stream is " + a.getTokenType().error,this.stream.getPrev().getSpan());
            let s = n;
            if (i)
                if (this.stream.match("as", !0))
                    a = this.stream.expect(p.Identifier),
                    this.checkKeyword(a.getSpan()),
                    s = a.getSpan().getText();
                else {
                    let o = n;
                    if (o.startsWith("@"))
                        throw new ge("Expected as",this.stream.getPrev().getSpan());
                    {
                        let r = o.lastIndexOf(".");
                        r != -1 && (o = o.substring(r + 1))
                    }
                    s = o
                }
            return new Hs(new Q(t,a.getSpan()),n,s,!i)
        }
        throw new ge("Expected identifier or string, but got stream is EOF",this.stream.getPrev().getSpan())
    }
    parseReturn() {
        let t = this.stream.expect("return").getSpan();
        if (this.stream.match([";", "}"], !1))
            return new kt(t,null);
        let a = this.parseExpression();
        return new kt(new Q(t,a.getSpan()),a)
    }
    parseAsync() {
        let t = this.stream.expect("async").getSpan()
          , a = this.parseExpression();
        return new Us(new Q(t,this.stream.getPrev().getSpan()),a)
    }
    parseIfStatement() {
        let t = this.stream.expect("if").getSpan()
          , a = this.parseExpression()
          , n = this.parseFunctionBody()
          , i = []
          , s = [];
        for (; this.stream.hasMore() && this.stream.match("else", !0); )
            if (this.stream.hasMore() && this.stream.match("if", !1)) {
                let r = this.stream.expect("if").getSpan()
                  , l = this.parseExpression()
                  , u = this.parseFunctionBody()
                  , d = new Q(r,u.length > 0 ? u[u.length - 1].getSpan() : r);
                i.push(new Qa(d,l,u,[]))
            } else {
                s = s.concat(this.parseFunctionBody());
                break
            }
        let o = this.stream.getPrev().getSpan();
        return new Qa(new Q(t,o),a,n,i,s)
    }
    parseNewExpression(t) {
        let a = this.parseAccessOrCall(p.Identifier, !0)
          , n = new Q(t.getSource(),t.getStart(),this.stream.getPrev().getSpan().getEnd());
        return a instanceof Wt ? this.parseAccessOrCall(new Dt(n,a.getMethod(),a.getArguments())) : a instanceof ba ? this.parseAccessOrCall(new Dt(n,a.getFunction(),a.getArguments())) : this.parseAccessOrCall(new Dt(n,a,[]))
    }
    parseArguments() {
        this.stream.expect(p.LeftParantheses);
        let t = [];
        for (; this.stream.hasMore() && !this.stream.match(p.RightParantheses, !1); )
            t.push(this.parseExpression()),
            this.stream.match(p.RightParantheses, !1) || this.stream.expect(p.Comma);
        return t
    }
    parseForStatement() {
        let t = this.stream.expect("for").getSpan();
        this.stream.expect("(");
        let a = null
          , n = this.stream.expect(p.Identifier).getSpan();
        this.checkKeyword(n),
        this.stream.match(p.Comma, !0) && (a = n,
        n = this.stream.expect(p.Identifier).getSpan(),
        this.checkKeyword(n)),
        this.stream.expect("in");
        let i = this.parseExpression();
        this.stream.expect(")");
        let s = this.parseFunctionBody();
        return new Fs(new Q(t,this.stream.getPrev().getSpan()),a && a.getText(),n && n.getText(),i,s)
    }
    parseVarDefine() {
        let t = this.stream.consume().getSpan(), a;
        if ((a = this.stream.match(p.LeftCurly, !1)) || this.stream.match(p.LeftBracket, !1)) {
            this.stream.expect([p.LeftCurly, p.LeftBracket]);
            let s = [];
            do {
                let o = this.stream.expect(p.Identifier);
                s.push(o)
            } while (this.stream.match(p.Comma, !0));
            return a ? this.stream.match(p.RightCurly, !0) : this.stream.match(p.RightBracket, !0),
            this.stream.match(p.Assignment, !0),
            new js(new Q(t,this.stream.getPrev().getSpan()),s,this.parseExpression(),t.getText(),a)
        }
        let n = this.stream.expect(p.Identifier);
        this.checkKeyword(n.getSpan());
        let i;
        return this.stream.match(p.Assignment, !0) ? i = new Xt(new Q(t,this.stream.getPrev().getSpan()),n.getText(),this.parseExpression(),t.getText()) : i = new Xt(new Q(t,this.stream.getPrev().getSpan()),n.getText(),null,t.getText()),
        i
    }
    parseTryStatement() {
        let t = this.stream.expect("try")
          , a = [];
        if (this.stream.match("(", !0)) {
            if (!this.stream.match(")", !1))
                for (; !this.stream.match(")", !1); ) {
                    if (this.stream.match(";", !0))
                        continue;
                    let r = null;
                    if (this.matchVarDefine())
                        r = this.parseVarDefine();
                    else {
                        if (this.stream.matchAny(nn, !1))
                            throw new ge("try \u62EC\u53F7\u4E2D\u53EA\u5141\u8BB8\u5199\u8D4B\u503C\u8BED\u53E5",this.stream.consume().getSpan());
                        let l = this.stream.makeIndex();
                        if (this.matchTypeDefine() && (this.stream.resetIndex(l),
                        r = this.parseVarDefine()),
                        r == null)
                            throw this.stream.resetIndex(l),
                            new ge("try \u62EC\u53F7\u4E2D\u53EA\u5141\u8BB8\u5199\u8D4B\u503C\u8BED\u53E5",this.stream.consume().getSpan())
                    }
                    a.push(r)
                }
            this.stream.expect(")")
        }
        let n = this.parseFunctionBody()
          , i = []
          , s = []
          , o = null;
        return this.stream.match("catch", !0) && (this.stream.match("(", !0) && (o = this.stream.expect(p.Identifier).getText(),
        this.stream.expect(")")),
        i = i.concat(this.parseFunctionBody())),
        this.stream.match("finally", !0) && (s = s.concat(this.parseFunctionBody())),
        new $s(new Q(t.getSpan(),this.stream.getPrev().getSpan()),o,n,a,i,s)
    }
    parseWhileStatement() {
        let t = this.stream.expect("while").getSpan()
          , a = this.parseExpression()
          , n = this.parseFunctionBody()
          , i = this.stream.getPrev().getSpan();
        return new Bs(new Q(t,i),a,n)
    }
    parseFunctionBody() {
        this.stream.expect("{");
        let t = [];
        for (; this.stream.hasMore() && !this.stream.match("}", !1); ) {
            let a = this.parseStatement(!0);
            a != null && (this.validateNode(a),
            t.push(a))
        }
        return this.expectCloseing(),
        t
    }
    expectCloseing() {
        return this.stream.hasMore(),
        this.stream.expect("}").getSpan()
    }
    parseExpression(t) {
        return this.parseTernaryOperator(t)
    }
    parseTernaryOperator(t) {
        let a = this.parseBinaryOperator(0, t);
        if (this.stream.match(p.Questionmark, !0)) {
            let n = this.parseTernaryOperator(t);
            this.stream.expect(p.Colon);
            let i = this.parseTernaryOperator(t);
            return a instanceof an && a.getOperator() === p.Assignment ? (a.setRightOperand(new tn(a.getRightOperand(),n,i)),
            a) : new tn(a,n,i)
        } else
            return a
    }
    parseBinaryOperator(t, a) {
        let n = t + 1
          , i = this.linqLevel > 0 ? Xs : Ws
          , s = n === i.length ? this.parseUnaryOperator(a) : this.parseBinaryOperator(n, a)
          , o = i[t];
        for (; this.stream.hasMore() && this.stream.match(o, !1); ) {
            let r = this.stream.consume();
            if (r.type.inLinq && this.linqLevel === 0)
                throw new ge(r.getText() + " \u53EA\u80FD\u5728Linq\u4E2D\u4F7F\u7528",this.stream.hasMore() ? this.stream.consume().getSpan() : this.stream.getPrev().getSpan());
            let l = n === i.length ? this.parseUnaryOperator(a) : this.parseBinaryOperator(n, a);
            s = new an(s,r,l,this.linqLevel)
        }
        return s
    }
    parseUnaryOperator(t) {
        if (this.stream.match(Js, !1))
            return new en(this.stream.consume(),this.parseUnaryOperator(t));
        if (this.stream.match(p.LeftParantheses, !1)) {
            let a = this.stream.expect(p.LeftParantheses).getSpan()
              , n = this.stream.makeIndex()
              , i = [];
            for (; this.stream.match(p.Identifier, !1); ) {
                let o = this.stream.expect(p.Identifier);
                if (i.push(o.getSpan().getText()),
                !this.stream.match(p.Comma, !0) && this.stream.match(p.RightParantheses, !0)) {
                    if (this.stream.match(p.Lambda, !0))
                        return this.parseLambdaBody(a, i);
                    break
                }
            }
            if (this.stream.match(p.RightParantheses, !0) && this.stream.match(p.Lambda, !0))
                return this.parseLambdaBody(a, i);
            this.stream.resetIndex(n);
            let s = this.parseExpression();
            return this.stream.expect(p.RightParantheses),
            this.parseAccessOrCall(s)
        } else {
            let a = this.parseAccessOrCallOrLiteral(t);
            return (a instanceof nt || a instanceof Ke || a instanceof Yt) && this.stream.match([p.PlusPlus, p.MinusMinus], !1) ? new en(this.stream.consume(),a) : a
        }
    }
    parseLambdaBody(t, a) {
        let n = this.stream.makeIndex()
          , i = [];
        try {
            let s = this.parseExpression();
            return i.push(new kt(new Q("return",0,6),s)),
            new ra(new Q(t,s.getSpan()),a,i)
        } catch {
            if (this.stream.resetIndex(n),
            this.stream.match(p.LeftCurly, !0)) {
                for (; this.stream.hasMore() && !this.stream.match("}", !1); ) {
                    let r = this.parseStatement(!0);
                    this.validateNode(r),
                    i.push(r)
                }
                let o = this.expectCloseing();
                return new ra(new Q(t,o),a,i)
            } else {
                let o = this.parseStatement();
                return i.push(new kt(new Q("return",0,6),o)),
                new ra(new Q(t,o.getSpan()),a,i)
            }
        }
    }
    parseSpreadAccess(t) {
        t || (t = this.stream.expect(p.Spread));
        let a = this.parseExpression();
        return new Vs(new Q(t.getSpan(),a.getSpan()),a)
    }
    parseAccessOrCall(t, a) {
        if (t === p.StringLiteral || t === p.Identifier) {
            let n = this.stream.expect(t)
              , i = n.getSpan();
            if (t === p.Identifier && i.getText() === "new")
                return this.parseNewExpression(i);
            if (t === p.Identifier && this.stream.match(p.Lambda, !0))
                return this.parseLambdaBody(i, [i.getText()]);
            let s = t === p.StringLiteral ? this.createStringLiteral(n) : new Ke(i,i.getText());
            return this.parseAccessOrCall(s, a)
        } else {
            for (; this.stream.hasMore() && this.stream.match([p.LeftParantheses, p.LeftBracket, p.Period, p.QuestionPeriod, p.ColonColon], !1); )
                if (this.stream.match(p.ColonColon, !1)) {
                    let n = this.stream.consume().getSpan()
                      , i = []
                      , s = this.stream.expect(p.Identifier)
                      , o = s.getSpan();
                    this.stream.match(p.LeftParantheses, !1) && (i = this.parseArguments(),
                    o = this.stream.expect(p.RightParantheses).getSpan()),
                    t = new kn(new Q(n,o),s.getText(),t,i)
                } else if (this.stream.match(p.LeftParantheses, !1)) {
                    let n = this.parseArguments()
                      , i = this.stream.expect(p.RightParantheses).getSpan();
                    if (t instanceof Ke || t instanceof Yt)
                        t = new ba(new Q(t.getSpan(),i),t,n,this.linqLevel > 0);
                    else if (t instanceof nt)
                        t = new Wt(new Q(t.getSpan(),i),t,n,this.linqLevel > 0);
                    else
                        throw new ge("Expected a variable, field or method.",this.stream.hasMore() ? this.stream.consume().getSpan() : this.stream.getPrev().getSpan());
                    if (a)
                        break
                } else if (this.stream.match(p.LeftBracket, !0)) {
                    let n = this.parseExpression()
                      , i = this.stream.expect(p.RightBracket).getSpan();
                    t = new Yt(new Q(t.getSpan(),i),t,n)
                } else if (this.stream.match([p.Period, p.QuestionPeriod], !1)) {
                    let n = this.stream.consume().getTokenType() === p.QuestionPeriod;
                    if (this.linqLevel > 0 && this.stream.match(p.Asterisk, !1))
                        t = new nt(t.getSpan(),n,this.stream.expect(p.Asterisk).getSpan(),!0);
                    else {
                        let i = this.stream.expect([p.Identifier, p.SqlAnd, p.SqlOr]).getSpan();
                        t = new nt(new Q(t.getSpan(),i),t,n,i,!1)
                    }
                }
            return t
        }
    }
    parseMapLiteral() {
        let t = this.stream.expect(p.LeftCurly).getSpan()
          , a = []
          , n = [];
        for (; this.stream.hasMore() && !this.stream.match("}", !1); ) {
            let s;
            if (this.stream.hasPrev()) {
                let o = this.stream.getPrev();
                if (this.stream.match(p.Spread, !1) && (o.getTokenType() === p.LeftCurly || o.getTokenType() === p.Comma)) {
                    let r = this.stream.expect(p.Spread);
                    a.push(r),
                    n.push(this.parseSpreadAccess(r)),
                    this.stream.match([p.Comma, p.RightCurly], !1) && this.stream.match(p.Comma, !0);
                    continue
                }
            }
            this.stream.match(p.StringLiteral, !1) ? s = this.stream.expect(p.StringLiteral) : this.stream.match(p.LeftBracket, !0) ? (s = this.parseExpression(),
            this.stream.expect(p.RightBracket)) : s = this.stream.expect(p.Identifier),
            a.push(s),
            this.stream.match([p.Comma, p.RightCurly], !1) ? (this.stream.match(p.Comma, !0),
            s instanceof Ke ? n.push(s) : s.getTokenType() === p.Identifier ? n.push(new Ke(s.getSpan(),s.getText())) : n.push(new Le(s.getSpan(),"java.lang.String"))) : (this.stream.expect(":"),
            n.push(this.parseExpression()),
            this.stream.match("}", !1) || this.stream.expect(p.Comma))
        }
        let i = this.stream.expect("}").getSpan();
        return new Gs(new Q(t,i),a,n)
    }
    parseListLiteral() {
        let t = this.stream.expect(p.LeftBracket).getSpan()
          , a = [];
        for (; this.stream.hasMore() && !this.stream.match(p.RightBracket, !1); )
            a.push(this.parseExpression()),
            this.stream.match(p.RightBracket, !1) || this.stream.expect(p.Comma);
        let n = this.stream.expect(p.RightBracket).getSpan();
        return new zs(new Q(t,n),a)
    }
    parseSelect() {
        let t = this.stream.expect("select", !0).getSpan();
        this.linqLevel++;
        let a = this.parseLinqFields();
        this.stream.expect("from", !0);
        let n = this.parseLinqField(), i = this.parseLinqJoins(), s;
        this.stream.match("where", !0, !0) && (s = this.parseExpression());
        let o = this.parseGroup(), r;
        this.stream.match("having", !0, !0) && (r = this.parseExpression());
        let l = this.parseLinqOrders();
        this.linqLevel--;
        let u, d;
        this.stream.match("limit", !0, !0) && (u = this.parseExpression(),
        this.stream.match("offset", !0, !0) && (d = this.parseExpression()));
        let g = this.stream.getPrev().getSpan();
        return new Ln(new Q(t,g),a,n,i,s,o,r,l,u,d)
    }
    parseGroup() {
        let t = [];
        if (this.stream.match("group", !0, !0)) {
            this.stream.expect("by", !0);
            do {
                let a = this.parseExpression();
                t.push(new Rt(a.getSpan(),a,null))
            } while (this.stream.match(p.Comma, !0))
        }
        return t
    }
    parseLinqOrders() {
        let t = [];
        if (this.stream.match("order", !0, !0)) {
            this.stream.expect("by", !0);
            do {
                let a = this.parseExpression()
                  , n = 1;
                this.stream.match(["desc", "asc"], !1, !0) && this.stream.consume().getText() === "desc" && (n = -1),
                t.push(new Ks(new Q(a.getSpan(),this.stream.getPrev().getSpan()),a,null,n))
            } while (this.stream.match(p.Comma, !0))
        }
        return t
    }
    parseLinqField() {
        let t = this.parseExpression();
        if (this.stream.match(p.Identifier, !1) && !this.stream.match(sn, !1, !0)) {
            let a = this.stream.expect(p.Identifier).getSpan();
            return new Rt(new Q(t.getSpan(),a),t,a.getText())
        }
        return new Rt(t.getSpan(),t,null)
    }
    parseLinqFields() {
        let t = [];
        do {
            let a = this.parseExpression();
            if (this.stream.match(p.Identifier, !1) && !this.stream.match(sn, !1, !0)) {
                if (a instanceof Za)
                    throw new ge("* \u540E\u8FB9\u4E0D\u80FD\u8DDF\u522B\u540D",this.stream.hasMore() ? this.stream.consume().getSpan() : this.stream.getPrev().getSpan());
                if (a instanceof nt && a.isWhole())
                    throw new ge(a.getSpan().getText() + " \u540E\u8FB9\u4E0D\u80FD\u8DDF\u522B\u540D",this.stream.hasMore() ? this.stream.consume().getSpan() : this.stream.getPrev().getSpan());
                let n = this.stream.consume().getSpan();
                t.push(new Rt(new Q(a.getSpan(),n),a,n.getText()))
            } else
                t.push(new Rt(a.getSpan(),a,null))
        } while (this.stream.match(p.Comma, !0));
        if (t.length === 0)
            throw new ge("\u81F3\u5C11\u8981\u67E5\u8BE2\u4E00\u4E2A\u5B57\u6BB5",this.stream.hasMore() ? this.stream.consume().getSpan() : this.stream.getPrev().getSpan());
        return t
    }
    parseLinqJoins() {
        let t = [];
        do {
            let a = this.stream.match("left", !1)
              , n = a ? this.stream.consume().getSpan() : null;
            if (this.stream.match("join", !0)) {
                n = a ? n : this.stream.getPrev().getSpan();
                let i = this.parseLinqField();
                this.stream.expect("on");
                let s = this.parseExpression();
                t.push(new qs(new Q(n,this.stream.getPrev().getSpan()),a,i,s))
            }
        } while (this.stream.match(["left", "join"], !1));
        return t
    }
    parseAccessOrCallOrLiteral(t) {
        let a;
        if (t && this.stream.match("}", !1))
            return null;
        if (this.stream.match(p.Spread, !1))
            a = this.parseSpreadAccess();
        else if (this.stream.match(p.Identifier, !1))
            this.stream.match("async", !1) ? a = this.parseAsync() : this.stream.match("select", !1, !0) ? a = this.parseSelect() : a = this.parseAccessOrCall(p.Identifier);
        else if (this.stream.match(p.LeftCurly, !1))
            a = this.parseMapLiteral();
        else if (this.stream.match(p.LeftBracket, !1))
            a = this.parseListLiteral();
        else if (this.stream.match(p.StringLiteral, !1))
            a = this.createStringLiteral(this.stream.expect(p.StringLiteral));
        else if (this.stream.match(p.BooleanLiteral, !1))
            a = new Le(this.stream.expect(p.BooleanLiteral).getSpan(),"java.lang.Boolean");
        else if (this.stream.match(p.DoubleLiteral, !1))
            a = new Le(this.stream.expect(p.DoubleLiteral).getSpan(),"java.lang.Double");
        else if (this.stream.match(p.FloatLiteral, !1))
            a = new Le(this.stream.expect(p.FloatLiteral).getSpan(),"java.lang.Float");
        else if (this.stream.match(p.ByteLiteral, !1))
            a = new Le(this.stream.expect(p.ByteLiteral).getSpan(),"java.lang.Byte");
        else if (this.stream.match(p.ShortLiteral, !1))
            a = new Le(this.stream.expect(p.ShortLiteral).getSpan(),"java.lang.Short");
        else if (this.stream.match(p.IntegerLiteral, !1))
            a = new Le(this.stream.expect(p.IntegerLiteral).getSpan(),"java.lang.Integer");
        else if (this.stream.match(p.LongLiteral, !1))
            a = new Le(this.stream.expect(p.LongLiteral).getSpan(),"java.lang.Long");
        else if (this.stream.match(p.DecimalLiteral, !1))
            a = new Le(this.stream.expect(p.DecimalLiteral).getSpan(),"java.math.BigDecimal");
        else if (this.stream.match(p.RegexpLiteral, !1)) {
            let n = this.stream.expect(p.RegexpLiteral);
            a = new Le(n.getSpan(),"java.util.regex.Pattern")
        } else
            this.stream.match(p.NullLiteral, !1) ? a = new Le(this.stream.expect(p.NullLiteral).getSpan(),"null") : this.linqLevel > 0 && this.stream.match(p.Asterisk, !1) ? a = new Za(this.stream.expect(p.Asterisk).getSpan()) : this.stream.match(p.Language, !1) && (a = new Ys(this.stream.consume().getSpan(),this.stream.consume().getSpan()));
        if (a == null)
            throw new ge("Expected a variable, field, map, array, function or method call, or literal.",this.stream.hasMore() ? this.stream.consume().getSpan() : this.stream.getPrev().getSpan());
        return this.parseAccessOrCall(a)
    }
    createStringLiteral(t) {
        if (t.getTokenStream() == null)
            return new Le(t.getSpan(),"java.lang.String");
        let a = this.stream;
        this.stream = t.getTokenStream();
        let n = [];
        for (; this.stream.hasMore(); )
            n.push(this.parseExpression());
        return this.stream = a,
        new Le(t.getSpan(),"java.lang.String",n)
    }
    findBestMatch(t, a) {
        let n = t.expressions().filter(i => i);
        for (let i in n) {
            let s = this.findBestMatch(n[i], a);
            if (s)
                return s
        }
        return t.getSpan().inPosition(a) ? t : null
    }
}
const Ea = e => {
    var a;
    const t = {};
    return (a = e == null ? void 0 : e.children) == null || a.forEach(n => t[n.name] = n),
    t
}
;
function ya(e, t) {
    var i;
    let a = []
      , n = {
        name: "",
        value: "",
        dataType: "",
        required: !1,
        validateType: "",
        expression: "",
        error: "",
        description: "",
        defaultValue: null,
        children: []
    };
    if (Array.isArray(e)) {
        if (e[0] !== void 0) {
            let s = e[0];
            const o = on(s);
            let r = {
                ...n,
                value: o ? s + "" : "",
                dataType: ((i = t[""]) == null ? void 0 : i.dataType) || Ta(s)
            };
            o || (r.children = ya(s, Ea(t[""]))),
            a.push(r)
        }
    } else
        Object.keys(e).forEach(s => {
            var u, d, g, f, E, m;
            const o = e[s]
              , r = on(o);
            let l = {
                ...n,
                description: ((u = t[s]) == null ? void 0 : u.description) || "",
                required: ((d = t[s]) == null ? void 0 : d.required) === !0,
                validateType: ((g = t[s]) == null ? void 0 : g.validateType) || "",
                expression: ((f = t[s]) == null ? void 0 : f.expression) || "",
                error: ((E = t[s]) == null ? void 0 : E.error) || "",
                name: s,
                defaultValue: (m = t[s]) == null ? void 0 : m.defaultValue,
                value: r ? o + "" : "",
                dataType: Ta(o)
            };
            r || (l.children = ya(o, Ea(t[s]))),
            a.push(l)
        }
        );
    return a
}
function on(e) {
    return !(e != null && typeof e == "object")
}
function Ta(e) {
    if (Array.isArray(e))
        return "Array";
    const t = typeof e;
    return t === "object" ? "Object" : t === "number" ? e > 2147483647 || e < -2147483648 ? "Long" : "Integer" : t === "boolean" ? "Boolean" : "String"
}
function Nn(e, t) {
    t = t || {};
    try {
        const a = JSON.parse(e);
        return {
            name: "",
            value: "",
            dataType: t.dataType || Ta(a),
            required: t.required,
            validateType: t.validateType || "",
            expression: t.expression || "",
            error: t.error || "",
            description: t.description || "",
            defaultValue: t.defaultValue,
            children: ya(a, Ea(t))
        }
    } catch {}
}
const rn = (e, t, a, n) => {
    let i = -1
      , s = ae.getImportClass();
    if (a !== 0 && t && (i = s.length) > 0) {
        t = t.toLowerCase(),
        ae.getDefineModules().filter(r => r.toLowerCase().indexOf(t) > -1).forEach(r => e.push({
            label: r,
            filterText: r,
            kind: W.CompletionItemKind.Module,
            detail: r,
            insertText: r,
            insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet
        }));
        let o = new Set;
        for (let r = 0; r < i && e.length < 100; r++) {
            let l = s[r]
              , u = l.toLowerCase().indexOf(t);
            if (u > -1) {
                let d = l.substring(l.lastIndexOf(".") + 1);
                if (u === 0) {
                    let g = l.substring(t.length)
                      , f = g;
                    if (g.startsWith("."))
                        f = t + ".",
                        g = t.substring(t.lastIndexOf(".") + 1) + ".";
                    else {
                        if (g.indexOf(".") === -1) {
                            e.push({
                                sortText: `2${d}`,
                                label: d,
                                kind: W.CompletionItemKind.Class,
                                filterText: l,
                                detail: l,
                                insertText: d,
                                insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet
                            });
                            continue
                        }
                        let E = g.substring(0, g.indexOf(".") + 1);
                        f = t + E,
                        g = t.substring(t.lastIndexOf(".") + 1) + E
                    }
                    if (o.has(g))
                        continue;
                    o.add(g),
                    e.push({
                        sortText: `1${g}`,
                        label: g,
                        kind: W.CompletionItemKind.Folder,
                        filterText: l,
                        detail: f.replace(/\.$/, ""),
                        insertText: g,
                        insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet,
                        command: {
                            id: "editor.action.triggerSuggest"
                        }
                    })
                } else
                    d.toLowerCase().indexOf(t) > -1 && e.push({
                        sortText: `2${d}`,
                        label: d,
                        kind: W.CompletionItemKind.Class,
                        filterText: d,
                        detail: l,
                        insertText: l,
                        range: new st(n.lineNumber,a + 1,n.lineNumber,n.column)
                    })
            }
        }
    } else
        ae.getDefineModules().forEach(o => e.push({
            label: o,
            filterText: o,
            kind: W.CompletionItemKind.Module,
            detail: o,
            insertText: o,
            insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet
        }))
}
  , Qs = (e, t, a, n) => {
    let i = a.indexOf('"') + 1;
    if (i === 0 && (i = a.indexOf("'") + 1),
    i === 0) {
        a = a.trim().replace("import", "").trim(),
        rn(e, a, n + 1, t);
        return
    }
    let s = a.substring(n).trim().replace(/['|"]/g, "");
    if (s.startsWith("@")) {
        if (s.indexOf(" ") > -1)
            return;
        let o = ae.getApiFinder();
        (o && o() || []).forEach(r => {
            let l = "@" + r.method + ":" + r.path;
            e.push({
                sortText: l,
                label: l,
                kind: W.CompletionItemKind.Reference,
                filterText: l,
                detail: r.name,
                insertText: l,
                range: new st(t.lineNumber,i + 1,t.lineNumber,t.column)
            })
        }
        ),
        o = ae.getFunctionFinder(),
        (o && o() || []).forEach(r => {
            let l = "@" + r.path;
            e.push({
                sortText: l,
                label: l,
                kind: W.CompletionItemKind.Reference,
                filterText: l,
                detail: r.name,
                insertText: l,
                range: new st(t.lineNumber,i + 1,t.lineNumber,t.column)
            })
        }
        );
        return
    }
    rn(e, s, i, t)
}
  , Lt = async (e, t, a, n, i) => {
    if (a = a || {},
    n && n instanceof Ke && await n.getJavaType(a) === "java.lang.Object") {
        let u = ae.getImportClass();
        const d = n.variable;
        u.forEach(g => {
            let f = g.substring(g.lastIndexOf(".") + 1);
            f.indexOf(d) > -1 && e.push({
                sortText: `${f}`,
                label: f,
                kind: W.CompletionItemKind.Class,
                filterText: f,
                detail: g,
                insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet,
                command: {
                    id: "editor.action.appendHead",
                    arguments: [`import ${g}\r
`]
                },
                insertText: f + (i ? "()" : "")
            })
        }
        )
    }
    ae.findFunction().forEach(u => {
        e.push({
            sortText: u.sortText || u.fullName,
            label: u.fullName,
            filterText: u.name,
            kind: W.CompletionItemKind.Method,
            detail: u.comment,
            insertText: u.insertText,
            insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet
        })
    }
    );
    let s = e.map(u => u.detail)
      , o = t.match(/[a-zA-Z_$]+/ig) || []
      , r = o.length
      , l = Object.keys(a);
    l.forEach(u => {
        e.push({
            label: u,
            filterText: u,
            kind: W.CompletionItemKind.Variable,
            detail: a[u],
            insertText: u,
            insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet
        })
    }
    ),
    r > 2 && Array.from(new Set(o)).filter( (u, d) => d + 2 < r && s.indexOf(u) === -1 && l.indexOf(u) === -1).map(u => {
        e.push({
            label: u,
            filterText: u,
            kind: W.CompletionItemKind.Text,
            detail: u,
            insertText: u,
            insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet
        })
    }
    )
}
  , ln = async (e, t) => {
    let a = await ae.loadClass(e)
      , n = e.lastIndexOf(".")
      , i = n > 0 ? e.substring(n + 1) : e
      , s = ae.findEnums(a);
    if (s)
        for (let l = 0; l < s.length; l++) {
            let u = s[l];
            t.push({
                label: u,
                kind: W.CompletionItemKind.Enum,
                detail: u + ":" + u,
                insertText: u,
                sortText: " ~~~" + u
            })
        }
    let o = ae.findAttributes(a);
    if (o)
        for (let l = 0; l < o.length; l++) {
            let u = o[l];
            t.push({
                label: u.name,
                kind: W.CompletionItemKind.Field,
                detail: u.comment || u.type + ":" + u.name,
                insertText: u.name,
                sortText: " ~~" + u.name
            })
        }
    let r = ae.findMethods(a);
    if (r) {
        let l = {};
        for (let u = 0; u < r.length; u++) {
            let d = r[u];
            if (l[d.signature])
                continue;
            l[d.signature] = !0;
            let g = [];
            d.comment && g.push(d.comment);
            for (let f = d.extension ? 1 : 0; f < d.parameters.length; f++) {
                let E = d.parameters[f];
                g.push(`\`${E.name}\`\uFF1A${E.comment || E.type}`)
            }
            g.push(`\u8FD4\u56DE\u7C7B\u578B\uFF1A\`${d.returnType}\``),
            t.push({
                sortText: d.sortText || d.fullName,
                label: d.fullName,
                kind: W.CompletionItemKind.Method,
                detail: `${i}.${d.fullName}: ${d.returnType}`,
                documentation: {
                    value: g.join(`\r
\r
\r
`)
                },
                insertText: d.insertText,
                insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet
            })
        }
    }
}
;
async function Zs(e, t) {
    try {
        let a = Zt(t);
        if (a.length === 0) {
            await Lt(e, t);
            return
        }
        let i = new ta(new yt(a));
        const {best: s, env: o} = await i.parseBest(t.length - 1);
        return t.endsWith(".") ? await ln(await s.getJavaType(o), e) : s ? s instanceof nt || s instanceof Wt ? await ln(await s.target.getJavaType(o), e) : s instanceof Dt && s.identifier instanceof Ke ? await Lt(e, t, o, s.identifier, !0) : await Lt(e, t, o, s) : await Lt(e, t, o),
        e
    } catch {}
}
const eo = [["break", "break;", "\u8DF3\u51FA\u5FAA\u73AF"], ["continue", "continue;", "\u7EE7\u7EED\u5FAA\u73AF"], ["instanceof", "instanceof $1", "instanceof"], ["async", "async $1", "async"], ["import", "import $1", "\u5BFC\u5165"], ["import as", "import $1 as $2", "\u5BFC\u5165\u5E76\u8BBE\u7F6E\u522B\u540D"], ["if", `if (\${1:condition}){\r
	$2\r
}`, "\u5224\u65AD"], ["if else", `if (\${1:condition}) {\r
	$2\r
} else { \r
	$3\r
}`, "\u5224\u65AD"], ["for", "for (${2:item} in ${1:collection}) {\r\n	$3\r\n}", "\u5FAA\u73AF\u96C6\u5408"], ["exit", "exit ${1:code}, ${2:message};", "\u9000\u51FA"], ["log.info", "log.info($1);", "info\u65E5\u5FD7"], ["log.debug", "log.debug($1);", "debug\u65E5\u5FD7"], ["log.error", "log.error($1);", "error\u65E5\u5FD7"], ["assert", "assert ${1:condition} : ${2:code}, ${3:message}", "\u6821\u9A8C\u53C2\u6570"], ["select", "select $1", "LINQ\u67E5\u8BE2"], ["throw", "throw ${1:e}", "\u629B\u51FA\u5F02\u5E38"], ["try catch", `try {\r
	$1\r
} catch(\${2:e}) {\r
	$3\r
}`, "try catch"], ["try finally", `try {\r
	$1\r
} finally {\r
	$2\r
}`, "try finally"], ["try catch finally", `try {\r
	$1\r
} catch(\${2:e}) {\r
	$3\r
} finally {\r
	$4\r
}`, "try catch finally"], ["try with resources", `try($1) {\r
	$2\r
}`, "try with resources"], ["catch", `catch(\${1:e}) {\r
	$2\r
}`, "catch"], ["finally", `finally {\r
	$1\r
}`, "finally"]]
  , to = {
    provideCompletionItems: async function(e, t) {
        let a = e.getValueInRange({
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: t.lineNumber,
            endColumn: t.column
        })
          , n = e.getValueInRange({
            startLineNumber: t.lineNumber,
            startColumn: 1,
            endLineNumber: t.lineNumber,
            endColumn: t.column
        })
          , i = e.getWordUntilPosition(t)
          , s = {
            startLineNumber: t.lineNumber,
            endLineNumber: t.lineNumber,
            startColumn: i.startColumn,
            endColumn: i.endColumn
        }
          , o = !1
          , r = eo.map(l => ({
            label: l[0],
            kind: W.CompletionItemKind.Struct,
            detail: l[2] || l[1],
            insertText: l[1],
            filterText: l[0],
            insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet,
            range: s
        }));
        return n.length > 1 && n.trim().indexOf("import") === 0 ? (Qs(r, t, n, n.indexOf("import") + 6),
        o = !0) : n.endsWith("::") ? r = ["int", "long", "date", "string", "short", "byte", "float", "double", "json", "stringify", "sql"].map(l => ({
            label: l,
            detail: `\u8F6C\u6362\u4E3A${l === "stringify" ? "json\u5B57\u7B26\u4E32" : l === "sql" ? "sql\u53C2\u6570\u7C7B\u578B" : l}`,
            insertText: l,
            kind: W.CompletionItemKind.TypeParameter,
            insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet
        })) : a.length > 1 ? await Zs(r, a) : await Lt(r, a, {
            ...ea.environmentFunction(),
            ...ae.getAutoImportClass(),
            ...ae.getAutoImportModule()
        }),
        {
            suggestions: r,
            incomplete: o
        }
    },
    triggerCharacters: [".", ":"]
};
let wn = function(e, t) {
    for (var a = 0, n = 0, i = e.length; n < i; ) {
        var s = e.charCodeAt(n);
        if (s === 32)
            a++;
        else if (s === 9)
            a = a - a % t + t;
        else
            break;
        n++
    }
    return n === i ? -1 : a
};
class ao {
    constructor(t) {
        this._startIndexes = [],
        this._endIndexes = [],
        this._indentOccurrences = [],
        this._length = 0,
        this._foldingRangesLimit = t
    }
    insertFirst(t, a, n) {
        if (!(t > 16777215 || a > 16777215)) {
            var i = this._length;
            this._startIndexes[i] = t,
            this._endIndexes[i] = a,
            this._length++,
            n < 1e3 && (this._indentOccurrences[n] = (this._indentOccurrences[n] || 0) + 1)
        }
    }
    toIndentRanges(t) {
        var a = [];
        if (this._length <= this._foldingRangesLimit) {
            new Uint32Array(this._length),
            new Uint32Array(this._length);
            for (var n = this._length - 1, i = 0; n >= 0; n--,
            i++)
                a.push({
                    start: this._startIndexes[n],
                    end: this._endIndexes[n]
                })
        } else {
            for (var s = 0, o = this._indentOccurrences.length, n = 0; n < this._indentOccurrences.length; n++) {
                var r = this._indentOccurrences[n];
                if (r) {
                    if (r + s > this._foldingRangesLimit) {
                        o = n;
                        break
                    }
                    s += r
                }
            }
            var l = t.getOptions().tabSize;
            new Uint32Array(this._foldingRangesLimit),
            new Uint32Array(this._foldingRangesLimit);
            for (var n = this._length - 1, i = 0; n >= 0; n--) {
                var u = this._startIndexes[n]
                  , d = t.getLineContent(u)
                  , g = wn(d, l);
                (g < o || g === o && s++ < this._foldingRangesLimit) && (a.push({
                    start: u,
                    end: this._endIndexes[n]
                }),
                i++)
            }
        }
        return a
    }
}
const no = {
    provideFoldingRanges: (e, t) => {
        let a = e.getOptions().tabSize
          , n = new ao(5e3)
          , i = []
          , s = e.getLineCount() + 1
          , o = -1
          , r = -1
          , l = [];
        i.push({
            indent: -1,
            endAbove: s,
            line: s
        });
        for (let d = e.getLineCount(); d > 0; d--) {
            let g = e.getLineContent(d);
            g.startsWith("import") || g.trim().startsWith("import") ? o == -1 ? o = d : r = d : (r > -1 && o > -1 && l.push({
                start: r,
                end: o,
                kind: W.FoldingRangeKind.Imports
            }),
            r = -1,
            o = -1);
            let f = wn(g, a)
              , E = i[i.length - 1];
            if (f !== -1) {
                if (E.indent > f) {
                    do
                        i.pop(),
                        E = i[i.length - 1];
                    while (E.indent > f);
                    var u = E.endAbove - 1;
                    u - d >= 1 && n.insertFirst(d, u, f)
                }
                E.indent === f ? E.endAbove = d : i.push({
                    indent: f,
                    endAbove: d,
                    line: d
                })
            }
        }
        return r > -1 && o > -1 && l.push({
            start: r,
            end: o,
            kind: W.FoldingRangeKind.Imports
        }),
        l.concat(n.toIndentRanges(e))
    }
}
  , io = {
    signatureHelpRetriggerCharacters: ["(", ","],
    signatureHelpTriggerCharacters: ["(", ","],
    provideSignatureHelp: async (e, t, a, n) => {
        if (n.activeSignatureHelp) {
            let s = n.activeSignatureHelp;
            return s.activeSignature += 1,
            s.activeSignature === s.signatures.length && (s.activeSignature = 0),
            {
                dispose: function() {},
                value: s
            }
        }
        let i = e.getValueInRange({
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: t.lineNumber,
            endColumn: t.column
        });
        try {
            let s = Zt(i)
              , o = new ta(new yt(s));
            const {best: r, env: l} = await o.parseBest(i.length - 1);
            if (r && r instanceof Wt) {
                let u = r.target
                  , d = await u.getTarget().getJavaType(l)
                  , g = u.member.getText()
                  , f = ae.findMethods(await ae.loadClass(d))
                  , E = [];
                if (f.filter(m => m.name === g).forEach(m => {
                    let N = [];
                    for (let C = m.extension ? 1 : 0; C < m.parameters.length; C++) {
                        let x = m.parameters[C];
                        N.push("- " + x.name + "\uFF1A" + (x.comment || x.type))
                    }
                    E.push({
                        label: m.fullName,
                        documentation: {
                            value: m.comment
                        },
                        parameters: [{
                            label: "param1",
                            documentation: {
                                value: N.join(`\r
`)
                            }
                        }]
                    })
                }
                ),
                E.length > 0)
                    return {
                        dispose: function() {},
                        value: {
                            activeParameter: 0,
                            activeSignature: 0,
                            signatures: E
                        }
                    }
            }
        } catch {}
    }
}
  , Sa = (e, t, a) => {
    a.push({
        value: `${e}${t.fullName}`
    }),
    t.comment && a.push({
        value: `${t.comment}`
    }),
    t.parameters.forEach( (n, i) => {
        (i > 0 || !t.extension) && a.push({
            value: `${n.name}\uFF1A${n.comment || n.type}`
        })
    }
    ),
    a.push({
        value: `\u8FD4\u56DE\u7C7B\u578B\uFF1A\`${t.returnType}\``
    })
}
  , la = (e, t, a, n) => {
    let i = ae.findFunction().filter(s => s.name === e);
    if (i.length > 0)
        Sa("", i[0], a);
    else {
        let s = t[e];
        if (s && s.indexOf("@") === 0) {
            let o = s.substring(1)
              , r = ae.getOnlineFunction(o);
            if (r) {
                let l = Array.isArray(r.parameter) ? r.parameter : JSON.parse(r.parameter || "[]");
                l.forEach(u => u.comment = u.description),
                Sa("", {
                    fullName: e + " " + r.name,
                    comment: r.description || "",
                    parameters: l,
                    returnType: r.returnType
                }, a)
            }
        } else
            a.push({
                value: `${n ? "\u521B\u5EFA\u5BF9\u8C61" : "\u8BBF\u95EE\u53D8\u91CF"}\uFF1A${e}`
            }),
            a.push({
                value: `\u7C7B\u578B\uFF1A${s || "unknow"}`
            })
    }
}
  , so = {
    provideHover: async (e, t) => {
        var u, d, g;
        let a = e.getValue()
          , n = Zt(a)
          , i = new yt(n)
          , s = new ta(i)
          , o = s.parse(!0)
          , l = e.getValueInRange({
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: t.lineNumber,
            endColumn: t.column
        }).length;
        for (let f = 0, E = o.length; f < E; f++) {
            let m = s.findBestMatch(o[f], l);
            if (m) {
                let N = await s.processEnv(o)
                  , C = []
                  , x = m.getSpan().getLine();
                if (m instanceof Xt) {
                    let b = N[m.getVarName()];
                    C.push({
                        value: `\u5B9A\u4E49\u53D8\u91CF\uFF1A${m.getVarName()}`
                    }),
                    C.push({
                        value: `\u53D8\u91CF\u7C7B\u578B\uFF1A${b}`
                    })
                } else if (m instanceof kn)
                    if (m.convert === "json")
                        C.push({
                            value: "\u5F3A\u5236\u8F6C\u6362\u4E3A`JSON`\u7C7B\u578B"
                        });
                    else if (m.convert === "stringify")
                        C.push({
                            value: "\u8F6C\u6362\u4E3A`JSON`\u5B57\u7B26\u4E32"
                        });
                    else if (m.convert === "sql") {
                        let b = m.args || [];
                        C.push({
                            value: `\u7B49\u540C\u4E8E\`new SqlParameterValue(java.sql.Types.${(g = (d = (u = b[0]) == null ? void 0 : u.span) == null ? void 0 : d.getText()) == null ? void 0 : g.toUpperCase()},${m.target.getSpan().getText()})\``
                        })
                    } else
                        C.push({
                            value: `\u8F6C\u6362\u4E3A\`${m.convert}\``
                        });
                else if (m instanceof Ke) {
                    let b = N[m.getVariable()];
                    b ? (C.push({
                        value: `\u8BBF\u95EE\u53D8\u91CF\uFF1A${m.getVariable()}`
                    }),
                    C.push({
                        value: `\u53D8\u91CF\u7C7B\u578B\uFF1A${b || "unknow"}`
                    })) : la(m.getVariable(), N, C)
                } else if (m instanceof nt) {
                    let b = await m.getTarget().getJavaType(N)
                      , S = await ae.loadClass(b)
                      , A = m.member.getText();
                    ae.findMethods(S).filter(M => M.name === A).forEach(M => Sa(`${ae.getSimpleClass(b)}.`, M, C)),
                    ae.findEnums(S).filter(M => M === A).forEach(M => {
                        C.push({
                            value: `\u8BBF\u95EE\u679A\u4E3E\uFF1A\`${b}.${A}\``
                        })
                    }
                    ),
                    ae.findAttributes(S).filter(M => M.name === A).forEach(M => {
                        C.push({
                            value: `\u8BBF\u95EE\u5C5E\u6027\uFF1A\`${b}.${A}\``
                        }),
                        M.comment && C.push({
                            value: `${M.comment}`
                        }),
                        C.push({
                            value: `\u5C5E\u6027\u7C7B\u578B\uFF1A\`${M.type}\``
                        })
                    }
                    ),
                    x = m.member.getLine()
                } else if (m instanceof ba) {
                    let b = m.target;
                    la(b.variable, N, C)
                } else if (m instanceof Dt) {
                    let b = m.identifier;
                    b instanceof Ke && la(b, N, C, !0)
                } else if (m instanceof Yt)
                    C.push({
                        value: "\u8BBF\u95EEMap\u6216\u6570\u7EC4"
                    });
                else if (m instanceof Ln)
                    C.push({
                        value: "linq\u67E5\u8BE2"
                    });
                else
                    return;
                return {
                    range: new st(x.lineNumber,x.startCol,x.endLineNumber,x.endCol + 1),
                    contents: C
                }
            }
        }
    }
}
  , oo = () => {
    const e = "mybatis";
    W.register({
        id: e
    }),
    W.setLanguageConfiguration(e, {
        comments: {
            lineComment: "--",
            blockComment: ["/*", "*/"]
        },
        brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
        autoClosingPairs: [{
            open: "{",
            close: "}"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "(",
            close: ")"
        }, {
            open: '"',
            close: '"'
        }, {
            open: "'",
            close: "'"
        }],
        surroundingPairs: [{
            open: "{",
            close: "}"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "(",
            close: ")"
        }, {
            open: '"',
            close: '"'
        }, {
            open: "'",
            close: "'"
        }]
    }),
    W.setMonarchTokensProvider(e, {
        defaultToken: "",
        tokenPostfix: ".sql",
        ignoreCase: !0,
        brackets: [{
            open: "[",
            close: "]",
            token: "delimiter.square"
        }, {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        }],
        keywords: ["ABORT_AFTER_WAIT", "ABSENT", "ABSOLUTE", "ACCENT_SENSITIVITY", "ACTION", "ACTIVATION", "ACTIVE", "ADD", "ADDRESS", "ADMIN", "AES", "AES_128", "AES_192", "AES_256", "AFFINITY", "AFTER", "AGGREGATE", "ALGORITHM", "ALL_CONSTRAINTS", "ALL_ERRORMSGS", "ALL_INDEXES", "ALL_LEVELS", "ALL_SPARSE_COLUMNS", "ALLOW_CONNECTIONS", "ALLOW_MULTIPLE_EVENT_LOSS", "ALLOW_PAGE_LOCKS", "ALLOW_ROW_LOCKS", "ALLOW_SINGLE_EVENT_LOSS", "ALLOW_SNAPSHOT_ISOLATION", "ALLOWED", "ALTER", "ANONYMOUS", "ANSI_DEFAULTS", "ANSI_NULL_DEFAULT", "ANSI_NULL_DFLT_OFF", "ANSI_NULL_DFLT_ON", "ANSI_NULLS", "ANSI_PADDING", "ANSI_WARNINGS", "APPEND", "APPLICATION", "APPLICATION_LOG", "ARITHABORT", "ARITHIGNORE", "AS", "ASC", "ASSEMBLY", "ASYMMETRIC", "ASYNCHRONOUS_COMMIT", "AT", "ATOMIC", "ATTACH", "ATTACH_REBUILD_LOG", "AUDIT", "AUDIT_GUID", "AUTHENTICATION", "AUTHORIZATION", "AUTO", "AUTO_CLEANUP", "AUTO_CLOSE", "AUTO_CREATE_STATISTICS", "AUTO_SHRINK", "AUTO_UPDATE_STATISTICS", "AUTO_UPDATE_STATISTICS_ASYNC", "AUTOMATED_BACKUP_PREFERENCE", "AUTOMATIC", "AVAILABILITY", "AVAILABILITY_MODE", "BACKUP", "BACKUP_PRIORITY", "BASE64", "BATCHSIZE", "BEGIN", "BEGIN_DIALOG", "BIGINT", "BINARY", "BINDING", "BIT", "BLOCKERS", "BLOCKSIZE", "BOUNDING_BOX", "BREAK", "BROKER", "BROKER_INSTANCE", "BROWSE", "BUCKET_COUNT", "BUFFER", "BUFFERCOUNT", "BULK", "BULK_LOGGED", "BY", "CACHE", "CALL", "CALLED", "CALLER", "CAP_CPU_PERCENT", "CASCADE", "CASE", "CATALOG", "CATCH", "CELLS_PER_OBJECT", "CERTIFICATE", "CHANGE_RETENTION", "CHANGE_TRACKING", "CHANGES", "CHAR", "CHARACTER", "CHECK", "CHECK_CONSTRAINTS", "CHECK_EXPIRATION", "CHECK_POLICY", "CHECKALLOC", "CHECKCATALOG", "CHECKCONSTRAINTS", "CHECKDB", "CHECKFILEGROUP", "CHECKIDENT", "CHECKPOINT", "CHECKTABLE", "CLASSIFIER_FUNCTION", "CLEANTABLE", "CLEANUP", "CLEAR", "CLOSE", "CLUSTER", "CLUSTERED", "CODEPAGE", "COLLATE", "COLLECTION", "COLUMN", "COLUMN_SET", "COLUMNS", "COLUMNSTORE", "COLUMNSTORE_ARCHIVE", "COMMIT", "COMMITTED", "COMPATIBILITY_LEVEL", "COMPRESSION", "COMPUTE", "CONCAT", "CONCAT_NULL_YIELDS_NULL", "CONFIGURATION", "CONNECT", "CONSTRAINT", "CONTAINMENT", "CONTENT", "CONTEXT", "CONTINUE", "CONTINUE_AFTER_ERROR", "CONTRACT", "CONTRACT_NAME", "CONTROL", "CONVERSATION", "COOKIE", "COPY_ONLY", "COUNTER", "CPU", "CREATE", "CREATE_NEW", "CREATION_DISPOSITION", "CREDENTIAL", "CRYPTOGRAPHIC", "CUBE", "CURRENT", "CURRENT_DATE", "CURSOR", "CURSOR_CLOSE_ON_COMMIT", "CURSOR_DEFAULT", "CYCLE", "DATA", "DATA_COMPRESSION", "DATA_PURITY", "DATABASE", "DATABASE_DEFAULT", "DATABASE_MIRRORING", "DATABASE_SNAPSHOT", "DATAFILETYPE", "DATE", "DATE_CORRELATION_OPTIMIZATION", "DATEFIRST", "DATEFORMAT", "DATETIME", "DATETIME2", "DATETIMEOFFSET", "DAY", "DAYOFYEAR", "DAYS", "DB_CHAINING", "DBCC", "DBREINDEX", "DDL_DATABASE_LEVEL_EVENTS", "DEADLOCK_PRIORITY", "DEALLOCATE", "DEC", "DECIMAL", "DECLARE", "DECRYPTION", "DEFAULT", "DEFAULT_DATABASE", "DEFAULT_FULLTEXT_LANGUAGE", "DEFAULT_LANGUAGE", "DEFAULT_SCHEMA", "DEFINITION", "DELAY", "DELAYED_DURABILITY", "DELETE", "DELETED", "DENSITY_VECTOR", "DENY", "DEPENDENTS", "DES", "DESC", "DESCRIPTION", "DESX", "DHCP", "DIAGNOSTICS", "DIALOG", "DIFFERENTIAL", "DIRECTORY_NAME", "DISABLE", "DISABLE_BROKER", "DISABLED", "DISK", "DISTINCT", "DISTRIBUTED", "DOCUMENT", "DOUBLE", "DROP", "DROP_EXISTING", "DROPCLEANBUFFERS", "DUMP", "DURABILITY", "DYNAMIC", "EDITION", "ELEMENTS", "ELSE", "EMERGENCY", "EMPTY", "EMPTYFILE", "ENABLE", "ENABLE_BROKER", "ENABLED", "ENCRYPTION", "END", "ENDPOINT", "ENDPOINT_URL", "ERRLVL", "ERROR", "ERROR_BROKER_CONVERSATIONS", "ERRORFILE", "ESCAPE", "ESTIMATEONLY", "EVENT", "EVENT_RETENTION_MODE", "EXEC", "EXECUTABLE", "EXECUTE", "EXIT", "EXPAND", "EXPIREDATE", "EXPIRY_DATE", "EXPLICIT", "EXTENDED_LOGICAL_CHECKS", "EXTENSION", "EXTERNAL", "EXTERNAL_ACCESS", "FAIL_OPERATION", "FAILOVER", "FAILOVER_MODE", "FAILURE_CONDITION_LEVEL", "FALSE", "FAN_IN", "FAST", "FAST_FORWARD", "FETCH", "FIELDTERMINATOR", "FILE", "FILEGROUP", "FILEGROWTH", "FILELISTONLY", "FILENAME", "FILEPATH", "FILESTREAM", "FILESTREAM_ON", "FILETABLE_COLLATE_FILENAME", "FILETABLE_DIRECTORY", "FILETABLE_FULLPATH_UNIQUE_CONSTRAINT_NAME", "FILETABLE_NAMESPACE", "FILETABLE_PRIMARY_KEY_CONSTRAINT_NAME", "FILETABLE_STREAMID_UNIQUE_CONSTRAINT_NAME", "FILLFACTOR", "FILTERING", "FIRE_TRIGGERS", "FIRST", "FIRSTROW", "FLOAT", "FMTONLY", "FOLLOWING", "FOR", "FORCE", "FORCE_FAILOVER_ALLOW_DATA_LOSS", "FORCE_SERVICE_ALLOW_DATA_LOSS", "FORCED", "FORCEPLAN", "FORCESCAN", "FORCESEEK", "FOREIGN", "FORMATFILE", "FORMSOF", "FORWARD_ONLY", "FREE", "FREEPROCCACHE", "FREESESSIONCACHE", "FREESYSTEMCACHE", "FROM", "FULL", "FULLSCAN", "FULLTEXT", "FUNCTION", "GB", "GEOGRAPHY_AUTO_GRID", "GEOGRAPHY_GRID", "GEOMETRY_AUTO_GRID", "GEOMETRY_GRID", "GET", "GLOBAL", "GO", "GOTO", "GOVERNOR", "GRANT", "GRIDS", "GROUP", "GROUP_MAX_REQUESTS", "HADR", "HASH", "HASHED", "HAVING", "HEADERONLY", "HEALTH_CHECK_TIMEOUT", "HELP", "HIERARCHYID", "HIGH", "HINT", "HISTOGRAM", "HOLDLOCK", "HONOR_BROKER_PRIORITY", "HOUR", "HOURS", "IDENTITY", "IDENTITY_INSERT", "IDENTITY_VALUE", "IDENTITYCOL", "IF", "IGNORE_CONSTRAINTS", "IGNORE_DUP_KEY", "IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX", "IGNORE_TRIGGERS", "IMAGE", "IMMEDIATE", "IMPERSONATE", "IMPLICIT_TRANSACTIONS", "IMPORTANCE", "INCLUDE", "INCREMENT", "INCREMENTAL", "INDEX", "INDEXDEFRAG", "INFINITE", "INFLECTIONAL", "INIT", "INITIATOR", "INPUT", "INPUTBUFFER", "INSENSITIVE", "INSERT", "INSERTED", "INSTEAD", "INT", "INTEGER", "INTO", "IO", "IP", "ISABOUT", "ISOLATION", "JOB", "KB", "KEEP", "KEEP_CDC", "KEEP_NULLS", "KEEP_REPLICATION", "KEEPDEFAULTS", "KEEPFIXED", "KEEPIDENTITY", "KEEPNULLS", "KERBEROS", "KEY", "KEY_SOURCE", "KEYS", "KEYSET", "KILL", "KILOBYTES_PER_BATCH", "LABELONLY", "LANGUAGE", "LAST", "LASTROW", "LEVEL", "LEVEL_1", "LEVEL_2", "LEVEL_3", "LEVEL_4", "LIFETIME", "LIMIT", "LINENO", "LIST", "LISTENER", "LISTENER_IP", "LISTENER_PORT", "LOAD", "LOADHISTORY", "LOB_COMPACTION", "LOCAL", "LOCAL_SERVICE_NAME", "LOCK_ESCALATION", "LOCK_TIMEOUT", "LOGIN", "LOGSPACE", "LOOP", "LOW", "MANUAL", "MARK", "MARK_IN_USE_FOR_REMOVAL", "MASTER", "MAX_CPU_PERCENT", "MAX_DISPATCH_LATENCY", "MAX_DOP", "MAX_DURATION", "MAX_EVENT_SIZE", "MAX_FILES", "MAX_IOPS_PER_VOLUME", "MAX_MEMORY", "MAX_MEMORY_PERCENT", "MAX_QUEUE_READERS", "MAX_ROLLOVER_FILES", "MAX_SIZE", "MAXDOP", "MAXERRORS", "MAXLENGTH", "MAXRECURSION", "MAXSIZE", "MAXTRANSFERSIZE", "MAXVALUE", "MB", "MEDIADESCRIPTION", "MEDIANAME", "MEDIAPASSWORD", "MEDIUM", "MEMBER", "MEMORY_OPTIMIZED", "MEMORY_OPTIMIZED_DATA", "MEMORY_OPTIMIZED_ELEVATE_TO_SNAPSHOT", "MEMORY_PARTITION_MODE", "MERGE", "MESSAGE", "MESSAGE_FORWARD_SIZE", "MESSAGE_FORWARDING", "MICROSECOND", "MILLISECOND", "MIN_CPU_PERCENT", "MIN_IOPS_PER_VOLUME", "MIN_MEMORY_PERCENT", "MINUTE", "MINUTES", "MINVALUE", "MIRROR", "MIRROR_ADDRESS", "MODIFY", "MONEY", "MONTH", "MOVE", "MULTI_USER", "MUST_CHANGE", "NAME", "NANOSECOND", "NATIONAL", "NATIVE_COMPILATION", "NCHAR", "NEGOTIATE", "NESTED_TRIGGERS", "NEW_ACCOUNT", "NEW_BROKER", "NEW_PASSWORD", "NEWNAME", "NEXT", "NO", "NO_BROWSETABLE", "NO_CHECKSUM", "NO_COMPRESSION", "NO_EVENT_LOSS", "NO_INFOMSGS", "NO_TRUNCATE", "NO_WAIT", "NOCHECK", "NOCOUNT", "NOEXEC", "NOEXPAND", "NOFORMAT", "NOINDEX", "NOINIT", "NOLOCK", "NON", "NON_TRANSACTED_ACCESS", "NONCLUSTERED", "NONE", "NORECOMPUTE", "NORECOVERY", "NORESEED", "NORESET", "NOREWIND", "NORMAL", "NOSKIP", "NOTIFICATION", "NOTRUNCATE", "NOUNLOAD", "NOWAIT", "NTEXT", "NTLM", "NUMANODE", "NUMERIC", "NUMERIC_ROUNDABORT", "NVARCHAR", "OBJECT", "OF", "OFF", "OFFLINE", "OFFSET", "OFFSETS", "OLD_ACCOUNT", "OLD_PASSWORD", "ON", "ON_FAILURE", "ONLINE", "ONLY", "OPEN", "OPEN_EXISTING", "OPENTRAN", "OPTIMISTIC", "OPTIMIZE", "OPTION", "ORDER", "OUT", "OUTPUT", "OUTPUTBUFFER", "OVER", "OVERRIDE", "OWNER", "OWNERSHIP", "PAD_INDEX", "PAGE", "PAGE_VERIFY", "PAGECOUNT", "PAGLOCK", "PARAMETERIZATION", "PARSEONLY", "PARTIAL", "PARTITION", "PARTITIONS", "PARTNER", "PASSWORD", "PATH", "PER_CPU", "PER_NODE", "PERCENT", "PERMISSION_SET", "PERSISTED", "PHYSICAL_ONLY", "PLAN", "POISON_MESSAGE_HANDLING", "POOL", "POPULATION", "PORT", "PRECEDING", "PRECISION", "PRIMARY", "PRIMARY_ROLE", "PRINT", "PRIOR", "PRIORITY", "PRIORITY_LEVEL", "PRIVATE", "PRIVILEGES", "PROC", "PROCCACHE", "PROCEDURE", "PROCEDURE_NAME", "PROCESS", "PROFILE", "PROPERTY", "PROPERTY_DESCRIPTION", "PROPERTY_INT_ID", "PROPERTY_SET_GUID", "PROVIDER", "PROVIDER_KEY_NAME", "PUBLIC", "PUT", "QUARTER", "QUERY", "QUERY_GOVERNOR_COST_LIMIT", "QUEUE", "QUEUE_DELAY", "QUOTED_IDENTIFIER", "RAISERROR", "RANGE", "RAW", "RC2", "RC4", "RC4_128", "READ", "READ_COMMITTED_SNAPSHOT", "READ_ONLY", "READ_ONLY_ROUTING_LIST", "READ_ONLY_ROUTING_URL", "READ_WRITE", "READ_WRITE_FILEGROUPS", "READCOMMITTED", "READCOMMITTEDLOCK", "READONLY", "READPAST", "READTEXT", "READUNCOMMITTED", "READWRITE", "REAL", "REBUILD", "RECEIVE", "RECOMPILE", "RECONFIGURE", "RECOVERY", "RECURSIVE", "RECURSIVE_TRIGGERS", "REFERENCES", "REGENERATE", "RELATED_CONVERSATION", "RELATED_CONVERSATION_GROUP", "RELATIVE", "REMOTE", "REMOTE_PROC_TRANSACTIONS", "REMOTE_SERVICE_NAME", "REMOVE", "REORGANIZE", "REPAIR_ALLOW_DATA_LOSS", "REPAIR_FAST", "REPAIR_REBUILD", "REPEATABLE", "REPEATABLEREAD", "REPLICA", "REPLICATION", "REQUEST_MAX_CPU_TIME_SEC", "REQUEST_MAX_MEMORY_GRANT_PERCENT", "REQUEST_MEMORY_GRANT_TIMEOUT_SEC", "REQUIRED", "RESAMPLE", "RESEED", "RESERVE_DISK_SPACE", "RESET", "RESOURCE", "RESTART", "RESTORE", "RESTRICT", "RESTRICTED_USER", "RESULT", "RESUME", "RETAINDAYS", "RETENTION", "RETURN", "RETURNS", "REVERT", "REVOKE", "REWIND", "REWINDONLY", "ROBUST", "ROLE", "ROLLBACK", "ROLLUP", "ROOT", "ROUTE", "ROW", "ROWCOUNT", "ROWGUIDCOL", "ROWLOCK", "ROWS", "ROWS_PER_BATCH", "ROWTERMINATOR", "ROWVERSION", "RSA_1024", "RSA_2048", "RSA_512", "RULE", "SAFE", "SAFETY", "SAMPLE", "SAVE", "SCHEDULER", "SCHEMA", "SCHEMA_AND_DATA", "SCHEMA_ONLY", "SCHEMABINDING", "SCHEME", "SCROLL", "SCROLL_LOCKS", "SEARCH", "SECOND", "SECONDARY", "SECONDARY_ONLY", "SECONDARY_ROLE", "SECONDS", "SECRET", "SECURITY_LOG", "SECURITYAUDIT", "SELECT", "SELECTIVE", "SELF", "SEND", "SENT", "SEQUENCE", "SERIALIZABLE", "SERVER", "SERVICE", "SERVICE_BROKER", "SERVICE_NAME", "SESSION", "SESSION_TIMEOUT", "SET", "SETS", "SETUSER", "SHOW_STATISTICS", "SHOWCONTIG", "SHOWPLAN", "SHOWPLAN_ALL", "SHOWPLAN_TEXT", "SHOWPLAN_XML", "SHRINKDATABASE", "SHRINKFILE", "SHUTDOWN", "SID", "SIGNATURE", "SIMPLE", "SINGLE_BLOB", "SINGLE_CLOB", "SINGLE_NCLOB", "SINGLE_USER", "SINGLETON", "SIZE", "SKIP", "SMALLDATETIME", "SMALLINT", "SMALLMONEY", "SNAPSHOT", "SORT_IN_TEMPDB", "SOURCE", "SPARSE", "SPATIAL", "SPATIAL_WINDOW_MAX_CELLS", "SPECIFICATION", "SPLIT", "SQL", "SQL_VARIANT", "SQLPERF", "STANDBY", "START", "START_DATE", "STARTED", "STARTUP_STATE", "STAT_HEADER", "STATE", "STATEMENT", "STATIC", "STATISTICAL_SEMANTICS", "STATISTICS", "STATISTICS_INCREMENTAL", "STATISTICS_NORECOMPUTE", "STATS", "STATS_STREAM", "STATUS", "STATUSONLY", "STOP", "STOP_ON_ERROR", "STOPAT", "STOPATMARK", "STOPBEFOREMARK", "STOPLIST", "STOPPED", "SUBJECT", "SUBSCRIPTION", "SUPPORTED", "SUSPEND", "SWITCH", "SYMMETRIC", "SYNCHRONOUS_COMMIT", "SYNONYM", "SYSNAME", "SYSTEM", "TABLE", "TABLERESULTS", "TABLESAMPLE", "TABLOCK", "TABLOCKX", "TAKE", "TAPE", "TARGET", "TARGET_RECOVERY_TIME", "TB", "TCP", "TEXT", "TEXTIMAGE_ON", "TEXTSIZE", "THEN", "THESAURUS", "THROW", "TIES", "TIME", "TIMEOUT", "TIMER", "TIMESTAMP", "TINYINT", "TO", "TOP", "TORN_PAGE_DETECTION", "TRACEOFF", "TRACEON", "TRACESTATUS", "TRACK_CAUSALITY", "TRACK_COLUMNS_UPDATED", "TRAN", "TRANSACTION", "TRANSFER", "TRANSFORM_NOISE_WORDS", "TRIGGER", "TRIPLE_DES", "TRIPLE_DES_3KEY", "TRUE", "TRUNCATE", "TRUNCATEONLY", "TRUSTWORTHY", "TRY", "TSQL", "TWO_DIGIT_YEAR_CUTOFF", "TYPE", "TYPE_WARNING", "UNBOUNDED", "UNCHECKED", "UNCOMMITTED", "UNDEFINED", "UNIQUE", "UNIQUEIDENTIFIER", "UNKNOWN", "UNLIMITED", "UNLOAD", "UNSAFE", "UPDATE", "UPDATETEXT", "UPDATEUSAGE", "UPDLOCK", "URL", "USE", "USED", "USER", "USEROPTIONS", "USING", "VALID_XML", "VALIDATION", "VALUE", "VALUES", "VARBINARY", "VARCHAR", "VARYING", "VERIFYONLY", "VERSION", "VIEW", "VIEW_METADATA", "VIEWS", "VISIBILITY", "WAIT_AT_LOW_PRIORITY", "WAITFOR", "WEEK", "WEIGHT", "WELL_FORMED_XML", "WHEN", "WHERE", "WHILE", "WINDOWS", "WITH", "WITHIN", "WITHOUT", "WITNESS", "WORK", "WORKLOAD", "WRITETEXT", "XACT_ABORT", "XLOCK", "XMAX", "XMIN", "XML", "XMLDATA", "XMLNAMESPACES", "XMLSCHEMA", "XQUERY", "XSINIL", "YEAR", "YMAX", "YMIN"],
        operators: ["ALL", "AND", "ANY", "BETWEEN", "EXISTS", "IN", "LIKE", "NOT", "OR", "SOME", "EXCEPT", "INTERSECT", "UNION", "APPLY", "CROSS", "FULL", "INNER", "JOIN", "LEFT", "OUTER", "RIGHT", "CONTAINS", "FREETEXT", "IS", "NULL", "PIVOT", "UNPIVOT", "MATCHED"],
        builtinFunctions: ["AVG", "CHECKSUM_AGG", "COUNT", "COUNT_BIG", "GROUPING", "GROUPING_ID", "MAX", "MIN", "SUM", "STDEV", "STDEVP", "VAR", "VARP", "CUME_DIST", "FIRST_VALUE", "LAG", "LAST_VALUE", "LEAD", "PERCENTILE_CONT", "PERCENTILE_DISC", "PERCENT_RANK", "COLLATE", "COLLATIONPROPERTY", "TERTIARY_WEIGHTS", "FEDERATION_FILTERING_VALUE", "CAST", "CONVERT", "PARSE", "TRY_CAST", "TRY_CONVERT", "TRY_PARSE", "ASYMKEY_ID", "ASYMKEYPROPERTY", "CERTPROPERTY", "CERT_ID", "CRYPT_GEN_RANDOM", "DECRYPTBYASYMKEY", "DECRYPTBYCERT", "DECRYPTBYKEY", "DECRYPTBYKEYAUTOASYMKEY", "DECRYPTBYKEYAUTOCERT", "DECRYPTBYPASSPHRASE", "ENCRYPTBYASYMKEY", "ENCRYPTBYCERT", "ENCRYPTBYKEY", "ENCRYPTBYPASSPHRASE", "HASHBYTES", "IS_OBJECTSIGNED", "KEY_GUID", "KEY_ID", "KEY_NAME", "SIGNBYASYMKEY", "SIGNBYCERT", "SYMKEYPROPERTY", "VERIFYSIGNEDBYCERT", "VERIFYSIGNEDBYASYMKEY", "CURSOR_STATUS", "DATALENGTH", "IDENT_CURRENT", "IDENT_INCR", "IDENT_SEED", "IDENTITY", "SQL_VARIANT_PROPERTY", "CURRENT_TIMESTAMP", "DATEADD", "DATEDIFF", "DATEFROMPARTS", "DATENAME", "DATEPART", "DATETIME2FROMPARTS", "DATETIMEFROMPARTS", "DATETIMEOFFSETFROMPARTS", "DAY", "EOMONTH", "GETDATE", "GETUTCDATE", "ISDATE", "MONTH", "SMALLDATETIMEFROMPARTS", "SWITCHOFFSET", "SYSDATETIME", "SYSDATETIMEOFFSET", "SYSUTCDATETIME", "TIMEFROMPARTS", "TODATETIMEOFFSET", "YEAR", "CHOOSE", "COALESCE", "IIF", "NULLIF", "ABS", "ACOS", "ASIN", "ATAN", "ATN2", "CEILING", "COS", "COT", "DEGREES", "EXP", "FLOOR", "LOG", "LOG10", "PI", "POWER", "RADIANS", "RAND", "ROUND", "SIGN", "SIN", "SQRT", "SQUARE", "TAN", "APP_NAME", "APPLOCK_MODE", "APPLOCK_TEST", "ASSEMBLYPROPERTY", "COL_LENGTH", "COL_NAME", "COLUMNPROPERTY", "DATABASE_PRINCIPAL_ID", "DATABASEPROPERTYEX", "DB_ID", "DB_NAME", "FILE_ID", "FILE_IDEX", "FILE_NAME", "FILEGROUP_ID", "FILEGROUP_NAME", "FILEGROUPPROPERTY", "FILEPROPERTY", "FULLTEXTCATALOGPROPERTY", "FULLTEXTSERVICEPROPERTY", "INDEX_COL", "INDEXKEY_PROPERTY", "INDEXPROPERTY", "OBJECT_DEFINITION", "OBJECT_ID", "OBJECT_NAME", "OBJECT_SCHEMA_NAME", "OBJECTPROPERTY", "OBJECTPROPERTYEX", "ORIGINAL_DB_NAME", "PARSENAME", "SCHEMA_ID", "SCHEMA_NAME", "SCOPE_IDENTITY", "SERVERPROPERTY", "STATS_DATE", "TYPE_ID", "TYPE_NAME", "TYPEPROPERTY", "DENSE_RANK", "NTILE", "RANK", "ROW_NUMBER", "PUBLISHINGSERVERNAME", "OPENDATASOURCE", "OPENQUERY", "OPENROWSET", "OPENXML", "CERTENCODED", "CERTPRIVATEKEY", "CURRENT_USER", "HAS_DBACCESS", "HAS_PERMS_BY_NAME", "IS_MEMBER", "IS_ROLEMEMBER", "IS_SRVROLEMEMBER", "LOGINPROPERTY", "ORIGINAL_LOGIN", "PERMISSIONS", "PWDENCRYPT", "PWDCOMPARE", "SESSION_USER", "SESSIONPROPERTY", "SUSER_ID", "SUSER_NAME", "SUSER_SID", "SUSER_SNAME", "SYSTEM_USER", "USER", "USER_ID", "USER_NAME", "ASCII", "CHAR", "CHARINDEX", "CONCAT", "DIFFERENCE", "FORMAT", "LEFT", "LEN", "LOWER", "LTRIM", "NCHAR", "PATINDEX", "QUOTENAME", "REPLACE", "REPLICATE", "REVERSE", "RIGHT", "RTRIM", "SOUNDEX", "SPACE", "STR", "STUFF", "SUBSTRING", "UNICODE", "UPPER", "BINARY_CHECKSUM", "CHECKSUM", "CONNECTIONPROPERTY", "CONTEXT_INFO", "CURRENT_REQUEST_ID", "ERROR_LINE", "ERROR_NUMBER", "ERROR_MESSAGE", "ERROR_PROCEDURE", "ERROR_SEVERITY", "ERROR_STATE", "FORMATMESSAGE", "GETANSINULL", "GET_FILESTREAM_TRANSACTION_CONTEXT", "HOST_ID", "HOST_NAME", "ISNULL", "ISNUMERIC", "MIN_ACTIVE_ROWVERSION", "NEWID", "NEWSEQUENTIALID", "ROWCOUNT_BIG", "XACT_STATE", "TEXTPTR", "TEXTVALID", "COLUMNS_UPDATED", "EVENTDATA", "TRIGGER_NESTLEVEL", "UPDATE", "CHANGETABLE", "CHANGE_TRACKING_CONTEXT", "CHANGE_TRACKING_CURRENT_VERSION", "CHANGE_TRACKING_IS_COLUMN_IN_MASK", "CHANGE_TRACKING_MIN_VALID_VERSION", "CONTAINSTABLE", "FREETEXTTABLE", "SEMANTICKEYPHRASETABLE", "SEMANTICSIMILARITYDETAILSTABLE", "SEMANTICSIMILARITYTABLE", "FILETABLEROOTPATH", "GETFILENAMESPACEPATH", "GETPATHLOCATOR", "PATHNAME", "GET_TRANSMISSION_STATUS"],
        builtinVariables: ["@@DATEFIRST", "@@DBTS", "@@LANGID", "@@LANGUAGE", "@@LOCK_TIMEOUT", "@@MAX_CONNECTIONS", "@@MAX_PRECISION", "@@NESTLEVEL", "@@OPTIONS", "@@REMSERVER", "@@SERVERNAME", "@@SERVICENAME", "@@SPID", "@@TEXTSIZE", "@@VERSION", "@@CURSOR_ROWS", "@@FETCH_STATUS", "@@DATEFIRST", "@@PROCID", "@@ERROR", "@@IDENTITY", "@@ROWCOUNT", "@@TRANCOUNT", "@@CONNECTIONS", "@@CPU_BUSY", "@@IDLE", "@@IO_BUSY", "@@PACKET_ERRORS", "@@PACK_RECEIVED", "@@PACK_SENT", "@@TIMETICKS", "@@TOTAL_ERRORS", "@@TOTAL_READ", "@@TOTAL_WRITE"],
        pseudoColumns: ["$ACTION", "$IDENTITY", "$ROWGUID", "$PARTITION"],
        tokenizer: {
            root: [{
                include: "@comments"
            }, {
                include: "@whitespace"
            }, {
                include: "@pseudoColumns"
            }, {
                include: "@numbers"
            }, {
                include: "@strings"
            }, {
                include: "@complexIdentifiers"
            }, {
                include: "@scopes"
            }, [/(<)(where|set|foreach|if|trim|elseif|else)/, ["delimiter", {
                token: "tag",
                next: "@xml"
            }]], [/[;,.]/, "delimiter"], [/[()]/, "@brackets"], [/[\w@#$]+/, {
                cases: {
                    "@keywords": "keyword",
                    "@operators": "operator",
                    "@builtinVariables": "predefined",
                    "@builtinFunctions": "predefined",
                    "@default": "identifier"
                }
            }], [/[<>=!%&+\-*/|~^]/, "operator"]],
            whitespace: [[/\s+/, "white"]],
            comments: [[/--+.*/, "comment"], [/\/\*/, {
                token: "comment.quote",
                next: "@comment"
            }]],
            comment: [[/[^*/]+/, "comment"], [/\*\//, {
                token: "comment.quote",
                next: "@pop"
            }], [/./, "comment"]],
            pseudoColumns: [[/[$][A-Za-z_][\w@#$]*/, {
                cases: {
                    "@pseudoColumns": "predefined",
                    "@default": "identifier"
                }
            }]],
            numbers: [[/0[xX][0-9a-fA-F]*/, "number"], [/[$][+-]*\d*(\.\d*)?/, "number"], [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]],
            strings: [[/N'/, {
                token: "string",
                next: "@string"
            }], [/'/, {
                token: "string",
                next: "@string"
            }]],
            string: [[/[^']+/, "string"], [/''/, "string"], [/'/, {
                token: "string",
                next: "@pop"
            }]],
            complexIdentifiers: [[/\[/, {
                token: "identifier.quote",
                next: "@bracketedIdentifier"
            }], [/"/, {
                token: "identifier.quote",
                next: "@quotedIdentifier"
            }]],
            bracketedIdentifier: [[/[^\]]+/, "identifier"], [/]]/, "identifier"], [/]/, {
                token: "identifier.quote",
                next: "@pop"
            }]],
            quotedIdentifier: [[/[^"]+/, "identifier"], [/""/, "identifier"], [/"/, {
                token: "identifier.quote",
                next: "@pop"
            }]],
            scopes: [[/BEGIN\s+(DISTRIBUTED\s+)?TRAN(SACTION)?\b/i, "keyword"], [/BEGIN\s+TRY\b/i, {
                token: "keyword.try"
            }], [/END\s+TRY\b/i, {
                token: "keyword.try"
            }], [/BEGIN\s+CATCH\b/i, {
                token: "keyword.catch"
            }], [/END\s+CATCH\b/i, {
                token: "keyword.catch"
            }], [/(BEGIN|CASE)\b/i, {
                token: "keyword.block"
            }], [/END\b/i, {
                token: "keyword.block"
            }], [/WHEN\b/i, {
                token: "keyword.choice"
            }], [/THEN\b/i, {
                token: "keyword.choice"
            }]],
            xml: [[/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/>/, {
                token: "delimiter",
                next: "@xmlEmbedded",
                nextEmbedded: "mybatis"
            }], [/[ \t\r\n]+/], [/(<\/)(where|if|set|foreach|trim|elseif|else)(>)/, ["delimiter", "tag", {
                token: "delimiter",
                next: "@pop"
            }]]],
            xmlEmbedded: [[/<\/(where|if|set|foreach|trim|elseif|else)/, {
                token: "tag",
                next: "@pop",
                nextEmbedded: "@pop"
            }], [/[^<]+/, ""]]
        }
    })
}
  , ro = () => {
    oo();
    const e = "magicscript";
    W.register({
        id: e
    }),
    W.setLanguageConfiguration(e, {
        wordPattern: /(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+[{\]}\\|;:'",.<>/?\s]+)/g,
        brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
        onEnterRules: [{
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            afterText: /^\s*\*\/$/,
            action: {
                indentAction: W.IndentAction.IndentOutdent,
                appendText: " * "
            }
        }, {
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            action: {
                indentAction: W.IndentAction.None,
                appendText: " * "
            }
        }, {
            beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
            action: {
                indentAction: W.IndentAction.None,
                appendText: "* "
            }
        }, {
            beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
            action: {
                indentAction: W.IndentAction.None,
                removeText: 1
            }
        }],
        comments: {
            lineComment: "//",
            blockComment: ["/*", "*/"]
        },
        operators: ["<=", ">=", "==", "!=", "+", "-", "*", "/", "%", "&", "|", "!", "&&", "||", "?", ":", "++", "--", "+=", "-=", "*=", "/="],
        autoClosingPairs: [{
            open: "{",
            close: "}"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "(",
            close: ")"
        }, {
            open: '"""',
            close: '"""',
            notIn: ["string.multi"]
        }, {
            open: "<where>",
            close: "</where>"
        }, {
            open: "<if",
            close: ' test=""></if>'
        }, {
            open: "<elseif",
            close: ' test=""></elseif>'
        }, {
            open: "<else",
            close: "></else>"
        }, {
            open: "<set>",
            close: "</set>"
        }, {
            open: "<trim>",
            close: "</trim>"
        }, {
            open: "<foreach",
            close: ' collection=""></foreach>'
        }, {
            open: '"',
            close: '"',
            notIn: ["string"]
        }, {
            open: "'",
            close: "'",
            notIn: ["string"]
        }, {
            open: "/**",
            close: " */",
            notIn: ["string"]
        }]
    }),
    W.setMonarchTokensProvider(e, pa),
    W.registerCompletionItemProvider(e, to),
    W.registerFoldingRangeProvider(e, no),
    W.registerSignatureHelpProvider(e, io),
    W.registerHoverProvider(e, so),
    W.registerDocumentFormattingEditProvider(e, {
        provideDocumentFormattingEdits(t, a, n) {
            return [{
                text: new re(t.getValue()).beautify(),
                range: t.getFullModelRange()
            }]
        }
    }),
    W.registerCompletionItemProvider("html", {
        triggerCharacters: [">"],
        provideCompletionItems: (t, a) => {
            var o;
            const i = (o = t.getValueInRange({
                startLineNumber: a.lineNumber,
                startColumn: 1,
                endLineNumber: a.lineNumber,
                endColumn: a.column
            }).match(/.*<(\w+)>$/)) == null ? void 0 : o[1];
            if (!i)
                return;
            const s = t.getWordUntilPosition(a);
            return {
                suggestions: [{
                    label: `</${i}>`,
                    kind: W.CompletionItemKind.EnumMember,
                    insertText: `$1</${i}>`,
                    insertTextRules: W.CompletionItemInsertTextRule.InsertAsSnippet,
                    range: {
                        startLineNumber: a.lineNumber,
                        endLineNumber: a.lineNumber,
                        startColumn: s.startColumn,
                        endColumn: s.endColumn
                    }
                }]
            }
        }
    })
}
;
function Oe(e, t, a) {
    var n = {
        debug: !1,
        automaticOpen: !0,
        reconnectInterval: 1e3,
        maxReconnectInterval: 3e4,
        reconnectDecay: 1.5,
        timeoutInterval: 2e3,
        maxReconnectAttempts: null,
        binaryType: "blob"
    };
    a || (a = {});
    for (var i in n)
        typeof a[i] != "undefined" ? this[i] = a[i] : this[i] = n[i];
    this.url = e,
    this.reconnectAttempts = 0,
    this.readyState = WebSocket.CONNECTING,
    this.protocol = null;
    var s = this, o, r = !1, l = !1, u = document.createElement("div");
    u.addEventListener("open", function(g) {
        s.onopen(g)
    }),
    u.addEventListener("close", function(g) {
        s.onclose(g)
    }),
    u.addEventListener("connecting", function(g) {
        s.onconnecting(g)
    }),
    u.addEventListener("message", function(g) {
        s.onmessage(g)
    }),
    u.addEventListener("error", function(g) {
        s.onerror(g)
    }),
    this.addEventListener = u.addEventListener.bind(u),
    this.removeEventListener = u.removeEventListener.bind(u),
    this.dispatchEvent = u.dispatchEvent.bind(u);
    function d(g, f) {
        var E = document.createEvent("CustomEvent");
        return E.initCustomEvent(g, !1, !1, f),
        E
    }
    this.open = function(g) {
        if (o = new WebSocket(s.url,t || []),
        o.binaryType = this.binaryType,
        g) {
            if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts)
                return
        } else
            u.dispatchEvent(d("connecting")),
            this.reconnectAttempts = 0;
        (s.debug || Oe.debugAll) && console.debug("ReconnectingWebSocket", "attempt-connect", s.url);
        var f = o
          , E = setTimeout(function() {
            (s.debug || Oe.debugAll) && console.debug("ReconnectingWebSocket", "connection-timeout", s.url),
            l = !0,
            f.close(),
            l = !1
        }, s.timeoutInterval);
        o.onopen = function(m) {
            clearTimeout(E),
            (s.debug || Oe.debugAll) && console.debug("ReconnectingWebSocket", "onopen", s.url),
            s.protocol = o.protocol,
            s.readyState = WebSocket.OPEN,
            s.reconnectAttempts = 0;
            var N = d("open");
            N.isReconnect = g,
            g = !1,
            u.dispatchEvent(N)
        }
        ,
        o.onclose = function(m) {
            if (clearTimeout(C),
            o = null,
            r)
                s.readyState = WebSocket.CLOSED,
                u.dispatchEvent(d("close"));
            else {
                s.readyState = WebSocket.CONNECTING;
                var N = d("connecting");
                N.code = m.code,
                N.reason = m.reason,
                N.wasClean = m.wasClean,
                u.dispatchEvent(N),
                !g && !l && ((s.debug || Oe.debugAll) && console.debug("ReconnectingWebSocket", "onclose", s.url),
                u.dispatchEvent(d("close")));
                var C = s.reconnectInterval * Math.pow(s.reconnectDecay, s.reconnectAttempts);
                setTimeout(function() {
                    s.reconnectAttempts++,
                    s.open(!0)
                }, C > s.maxReconnectInterval ? s.maxReconnectInterval : C)
            }
        }
        ,
        o.onmessage = function(m) {
            (s.debug || Oe.debugAll) && console.debug("ReconnectingWebSocket", "onmessage", s.url, m.data);
            var N = d("message");
            N.data = m.data,
            u.dispatchEvent(N)
        }
        ,
        o.onerror = function(m) {
            (s.debug || Oe.debugAll) && console.debug("ReconnectingWebSocket", "onerror", s.url, m),
            u.dispatchEvent(d("error"))
        }
    }
    ,
    this.automaticOpen == !0 && this.open(!1),
    this.send = function(g) {
        if (o)
            return (s.debug || Oe.debugAll) && console.debug("ReconnectingWebSocket", "send", s.url, g),
            o.send(g);
        throw "INVALID_STATE_ERR : Pausing to reconnect websocket"
    }
    ,
    this.close = function(g, f) {
        typeof g == "undefined" && (g = 1e3),
        r = !0,
        o && o.close(g, f)
    }
    ,
    this.refresh = function() {
        o && o.close()
    }
}
Oe.prototype.onopen = function(e) {}
;
Oe.prototype.onclose = function(e) {}
;
Oe.prototype.onconnecting = function(e) {}
;
Oe.prototype.onmessage = function(e) {}
;
Oe.prototype.onerror = function(e) {}
;
Oe.debugAll = !1;
Oe.CONNECTING = WebSocket.CONNECTING;
Oe.OPEN = WebSocket.OPEN;
Oe.CLOSING = WebSocket.CLOSING;
Oe.CLOSED = WebSocket.CLOSED;
let ca = {};
function jt(e) {
    if (ca[e])
        try {
            ca[e].close()
        } catch {}
    this.listeners = {},
    this.future = new Promise(t => {
        this.resolve = t,
        this.socket = new Oe(e,null,{
            timeoutInterval: 1e4
        }),
        ca[e] = this,
        this.socket.onmessage = this.messageReceived,
        this.socket.onconnecting = () => {
            this.future = new Promise(a => this.resolve = a),
            T.status("message.connectDebugServer")
        }
        ,
        this.socket.onopen = () => {
            T.status("message.connectDebugServerSuccess"),
            T.$emit("ws_open"),
            this.resolve()
        }
        ,
        this.socket.onclose = () => {
            T.status("message.debugServerClose"),
            T.$emit("ws_close")
        }
    }
    )
}
jt.prototype.on = function(e, t) {
    this.listeners[e] = this.listeners[e] || [],
    this.listeners[e].push(t)
}
;
jt.prototype.messageReceived = function(e) {
    let t = e.data
      , a = t.indexOf(",")
      , n = a === -1 ? t : t.substring(0, a)
      , i = [];
    for (; a > -1; ) {
        if (t = t.substring(a + 1),
        t.startsWith("[") || t.startsWith("{")) {
            i.push(JSON.parse(t));
            break
        }
        a = t.indexOf(","),
        i.push(a === -1 ? t : t.substring(0, a))
    }
    T.$emit("ws_" + n, i)
}
;
jt.prototype.send = function(e) {
    this.future.then( () => {
        this.socket.send(e)
    }
    )
}
;
jt.prototype.close = function() {
    this.socket.close()
}
;
var Se = {
    OPEN: "open",
    BREAKPOINT: "breakpoint",
    LOGIN: "login",
    RESUME_BREAKPOINT: "resume_breakpoint",
    LOGIN_RESPONSE: "login_response",
    REFRESH_TOKEN: "refresh_token",
    LOG: "log",
    LOGS: "logs",
    EXCEPTION: "exception",
    USER_LOGIN: "user_login",
    USER_LOGOUT: "user_logout",
    ONLINE_USERS: "online_users",
    SET_FILE_ID: "set_file_id",
    INTO_FILE_ID: "into_file_id",
    PING: "ping",
    PONG: "pong"
};
const lo = R("div", {
    class: "magic-mounts"
}, null, -1)
  , co = {
    __name: "magic-editor",
    props: {
        config: {
            type: Object,
            required: !0
        }
    },
    setup(e) {
        const t = e;
        ro(),
        Ye("bus", T),
        self.MonacoEnvironment = {
            getWorker: function(L, j) {
                return j === "json" ? new Qn : j === "html" ? new Zn : new ei
            }
        },
        t.config.header = t.config.header || {};
        const a = U(!1)
          , n = U(null)
          , i = U(null)
          , s = U(!1)
          , o = U(null);
        Ye("ELEMENT_ROOT", i),
        Ye("activateUserFiles", U({}));
        let r = null;
        const l = t.config;
        D.BASE_URL = l.baseURL || "",
        D.SERVER_URL = l.serverURL || "";
        let u = `${location.protocol}//${location.host}${location.pathname}`.replace("/index.html", "");
        D.BASE_URL.startsWith("http") ? u = D.BASE_URL : D.BASE_URL.startsWith("/") ? u = `${location.protocol}/${location.host}${D.BASE_URL}` : u = u + "/" + D.BASE_URL,
        l.blockClose !== !1 && (window.onbeforeunload = () => "\u7CFB\u7EDF\u53EF\u80FD\u4E0D\u4F1A\u4FDD\u5B58\u60A8\u6240\u505A\u7684\u66F4\u6539\u3002");
        const d = l.request || {
            beforeSend: L => L,
            onError: L => Promise.reject(L)
        };
        Y.getAxios().interceptors.request.use(L => d.beforeSend && d.beforeSend(L) || L, L => d.onError && d.onError(L) || Promise.reject(L));
        const g = l.response || {
            onSuccess: L => L,
            onError: L => Promise.reject(L)
        };
        Y.getAxios().interceptors.response.use(L => g.onSuccess && g.onSuccess(L) || L, L => g.onError && g.onError(L) || Promise.reject(L)),
        Y.setBaseURL(D.BASE_URL),
        D.AUTO_SAVE = l.autoSave !== !1,
        T.status("message.loadClass"),
        Ye("i18n.format", c);
        const f = () => new Promise(L => {
            Y.sendGet("/plugins").success(j => Promise.all((j || []).filter(ie => ie.javascriptFilename).map(ie => new Promise(se => {
                T.status("plugin.loading", !0, ie.name),
                Wi(it(u + "/plugins/" + ie.javascriptFilename)).then( () => {
                    D.PLUGINS.push(window[ie.globalName]({
                        i18n: {
                            add: mi,
                            format: c
                        },
                        request: Y,
                        constants: D,
                        Message: $,
                        bus: T,
                        modal: me,
                        JavaClass: ae,
                        monaco: ti
                    })),
                    T.status("plugin.loaded", !0, ie.name),
                    se()
                }
                ).catch(J => {
                    T.status("plugin.loadFailed", !1, ie.name),
                    se()
                }
                )
            }
            ))).then( () => L())).error( () => L())
        }
        )
          , E = bt().appContext.app;
        Promise.all([ae.initClasses(), ae.initImportClass(), f()]).then( () => T.status("message.loadClassFinish")).catch(L => {
            T.status("message.loadClassError")
        }
        ).finally( () => {
            D.PLUGINS.forEach(L => {
                L.datasources && L.datasources.filter(j => j.component).forEach(j => {
                    E.component(`magic-datasource-${j.type}`, j.component)
                }
                )
            }
            ),
            s.value = !0
        }
        );
        const m = t.config.options || [];
        Ye("options", m),
        Y.sendGet("/options").success(L => {
            L.forEach(j => m.push(j))
        }
        );
        const N = () => {
            D.LOGINED = !0,
            r = new jt(it(u.replace(/^http/, "ws") + "/console")),
            be( () => n.value.loadResources())
        }
        ;
        T.$on($.LOGINED, N);
        const C = () => {
//            fetch("https://console.ssssssss.org.cn/latest?group=org.ssssssss&artifactId=magic-api&from=" + D.MAGIC_API_VERSION_TEXT).then(L => {
//                t.config.checkUpdate !== !1 && L.status === 200 && L.json().then(j => {
//                    j.version && j.version !== "unknown" && D.config.version !== j.version ? (T.status("message.newVersionRelease", !0, j.version),
//                    j.version !== De.get(D.IGNORE_VERSION) && T.$emit($.NOTIFY, {
//                        title: c("message.tips"),
//                        icon: "warning",
//                        content: c("message.versionUpdate", j.version),
//                        buttons: [{
//                            title: c("message.changelog"),
//                            onClick: () => {
//                                window.open("http://www.ssssssss.org/magic-api/changelog.html")
//                            }
//                        }, {
//                            title: c("message.ignore"),
//                            onClick: () => {
//                                De.set(D.IGNORE_VERSION, j.version)
//                            }
//                        }]
//                    })) : T.status("message.versionLastest")
//                }
//                )
//            }
//            )
        }
          , x = () => l.getMagicTokenValue && l.getMagicTokenValue() || De.get(D.STORE.token) || D.HEADER_MAGIC_TOKEN_VALUE
          , b = () => new Promise(L => {
            D.HEADER_MAGIC_TOKEN_VALUE = x(),
            T.status("message.tryAutoLogin"),
            Y.sendPost("/login").success(j => {
                a.value = !j,
                j && be( () => {
                    T.status("message.autoLoginSuccess"),
                    T.$emit($.LOGINED)
                }
                )
            }
            ).end(L)
        }
        )
          , S = () => {
            typeof hideMaLoading == "function" && hideMaLoading()
        }
          , A = () => {
            Y.execute({
                url: "/config.json",
                method: "get"
            }).then(L => {
                if (D.config = L.data,
                t.config.inJar && location.href.indexOf(L.data.web) > -1) {
                    let j = location.href.substring(0, location.href.indexOf(L.data.web));
                    D.SERVER_URL = it(j + "/" + (L.data.prefix || ""))
                }
                D.config.version && D.config.version !== D.MAGIC_API_VERSION_TEXT && (T.status("message.versionConflict", !1, D.MAGIC_API_VERSION_TEXT, D.config.version),
                T.$emit($.NOTIFY, {
                    icon: "error",
                    title: c("message.versionCheck"),
                    content: c("message.versionConflict", D.MAGIC_API_VERSION_TEXT, D.config.version)
                })),
                b().then( () => {
                    S(),
                    C()
                }
                )
            }
            ).catch(L => {
                console.error(L),
                S(),
                o.value = c("message.loadConfigError")
            }
            )
        }
          , M = () => {
            const L = document.body;
            ce.bind(L, ce.Ctrl | ce.S, () => T.$emit($.DO_SAVE, !0)),
            ce.bind(L, ce.Ctrl | ce.Q, () => T.$emit($.DO_TEST)),
            ce.bind(L, ce.Ctrl | ce.E, () => T.$emit($.DO_RECENT)),
            ce.bind(L, ce.F8, () => T.$emit($.DEBUG_CONTINUE)),
            ce.bind(L, ce.F6, () => T.$emit($.DEBUG_SETPINTO)),
            ce.bind(L, ce.Ctrl | ce.Shift | ce.F, () => T.$emit($.DO_SEARCH))
        }
        ;
        pt( () => {
            M()
        }
        ),
        jn( () => ce.unbind());
        const I = We({});
        Ot("default", Zi),
        Ot("dark", es),
        Ot("gray-new", ts),
        Ot("dark-new", as),
        Object.keys(l.themes || {}).forEach(L => {
            Ot(L, l.themes[L])
        }
        ),
        D.THEME = l.theme || "default",
        D.DEFAULT_EXPAND = l.defaultExpand !== !1,
        D.JDBC_DRIVERS = l.jdbcDrivers || D.JDBC_DRIVERS,
        D.DATASOURCE_TYPES = l.datasourceTypes || D.DATASOURCE_TYPES,
        l.editorFontFamily !== void 0 && (D.EDITOR_FONT_FAMILY = l.editorFontFamily),
        l.editorFontSize !== void 0 && (D.EDITOR_FONT_SIZE = l.editorFontSize),
        D.FONT_LIGATURES = l.fontLigatures !== !1,
        l.logMaxRows !== void 0 && (D.LOG_MAX_ROWS = Math.max(l.logMaxRows, 10)),
        l.decorationTimeout !== void 0 && (D.DECORATION_TIMEOUT = l.decorationTimeout),
        T.$on($.MESSAGE, (L, j) => {
            r && (j ? r.send(`${L},${j}`) : r.send(L))
        }
        ),
        T.$event(Se.OPEN, () => {
            D.CLIENT_ID = zi(16),
            be( () => T.send(Se.LOGIN, [x(), D.CLIENT_ID].join(",")))
        }
        ),
        T.$event(Se.LOGIN_RESPONSE, ([L,j]) => {
            L === "1" && (D.user = j)
        }
        ),
        T.$event(Se.REFRESH_TOKEN, ([L]) => {
            D.HEADER_MAGIC_TOKEN_VALUE = L,
            De.set(D.STORE.token, D.HEADER_MAGIC_TOKEN_VALUE)
        }
        );
        const H = () => {
            a.value = !0,
            r && r.close(),
            r = null
        }
        ;
        return T.$on($.LOGOUT, H),
        T.$on($.SHOW_LOGIN, H),
        (L, j) => {
            const ie = y("magic-login")
              , se = y("magic-header")
              , J = y("magic-main")
              , Ee = y("magic-status-bar")
              , xe = y("magic-notify");
            return v(),
            k("div", {
                class: "magic-editor",
                style: Ve(I),
                onContextmenu: j[2] || (j[2] = ye( () => {}
                , ["prevent"])),
                ref_key: "root",
                ref: i
            }, [gt(_(ie, {
                value: a.value,
                "onUpdate:value": j[0] || (j[0] = Xe => a.value = Xe),
                error: o.value,
                "onUpdate:error": j[1] || (j[1] = Xe => o.value = Xe)
            }, null, 8, ["value", "error"]), [[Mt, a.value]]), s.value ? (v(),
            V(se, {
                key: 0,
                themeStyle: I,
                header: h(l).header,
                title: h(l).title
            }, null, 8, ["themeStyle", "header", "title"])) : X("", !0), s.value ? (v(),
            V(J, {
                key: 1,
                ref_key: "componentMain",
                ref: n,
                onOnLoad: A
            }, null, 512)) : X("", !0), s.value ? (v(),
            V(Ee, {
                key: 2,
                config: h(l)
            }, null, 8, ["config"])) : X("", !0), s.value ? (v(),
            V(xe, {
                key: 3
            })) : X("", !0), lo], 36)
        }
    }
};
var uo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: co
}, Symbol.toStringTag, {
    value: "Module"
}));
var q = (e, t) => {
    const a = e.__vccOpts || e;
    for (const [n,i] of t)
        a[n] = i;
    return a
}
;
const po = {
    props: {
        menus: Array,
        onDestory: Function,
        position: Object
    },
    data() {
        return {
            style: {
                left: this.position.x + "px",
                top: this.position.y + "px",
                element: U(null)
            }
        }
    },
    mounted() {
        document.addEventListener("click", this.onMouseup);
        const e = document.querySelector(".magic-editor").getBoundingClientRect()
          , t = e.x + e.width
          , a = e.y + e.height
          , n = this.$el.getBoundingClientRect();
        n.x + n.width > t && (this.style.left = `${t - n.width}px`),
        n.y + n.height > a && (this.style.top = `${a - n.height}px`)
    },
    unmounted() {
        document.removeEventListener("click", this.onMouseup)
    },
    methods: {
        onMouseup() {
            this.onDestory && this.onDestory()
        }
    }
}
  , _o = ["onClick"]
  , ho = {
    key: 0,
    class: "magic-context-menu-icon"
}
  , fo = {
    class: "magic-context-menu-icon right"
}
  , go = {
    class: "magic-context-menu none-select"
}
  , mo = ["onClick"]
  , vo = {
    key: 0,
    class: "magic-context-menu-icon"
};
function bo(e, t, a, n, i, s) {
    const o = y("magic-icon");
    return v(),
    k("ul", {
        class: "magic-context-menu none-select",
        style: Ve(i.style),
        ref: "element"
    }, [(v(!0),
    k(te, null, fe(a.menus, (r, l) => (v(),
    k("li", {
        key: l,
        class: ve({
            divided: r.divided
        }),
        onClick: ye( () => {
            s.onMouseup(),
            r.onClick && r.onClick()
        }
        , ["stop"])
    }, [a.menus.some(u => u.icon) ? (v(),
    k("span", ho, [r.icon ? (v(),
    V(o, {
        key: 0,
        icon: r.icon,
        size: "12px"
    }, null, 8, ["icon"])) : X("", !0)])) : X("", !0), R("label", null, F(r.label), 1), r.children ? (v(),
    k(te, {
        key: 1
    }, [R("span", fo, [_(o, {
        icon: "right",
        size: "12px"
    })]), R("ul", go, [(v(!0),
    k(te, null, fe(r.children, (u, d) => (v(),
    k("li", {
        key: d,
        class: ve({
            divided: u.divided
        }),
        onClick: ye( () => {
            s.onMouseup(),
            u.onClick && u.onClick()
        }
        , ["stop"])
    }, [r.children.some(g => g.icon) ? (v(),
    k("span", vo, [u.icon ? (v(),
    V(o, {
        key: 0,
        icon: u.icon,
        size: "12px"
    }, null, 8, ["icon"])) : X("", !0)])) : X("", !0), R("label", null, F(u.label), 1)], 10, mo))), 128))])], 64)) : X("", !0)], 10, _o))), 128))], 4)
}
var Dn = q(po, [["render", bo], ["__scopeId", "data-v-75aac978"]])
  , Eo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Dn
}, Symbol.toStringTag, {
    value: "Module"
}));
const yo = {
    class: "magic-empty"
}
  , To = {
    __name: "magic-empty",
    props: {
        text: {
            type: String,
            default: c("message.nodata")
        }
    },
    setup(e) {
        return (t, a) => (v(),
        k("div", yo, [R("p", null, F(e.text), 1)]))
    }
};
var So = q(To, [["__scopeId", "data-v-70308d5a"]])
  , xo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: So
}, Symbol.toStringTag, {
    value: "Module"
}));
const Oo = {
    class: "icon"
}
  , Ro = {
    __name: "magic-loading",
    props: {
        loading: Boolean,
        loadingText: {
            type: String,
            default: c("message.loading")
        },
        style: Object
    },
    setup(e) {
        return (t, a) => {
            const n = y("magic-icon");
            return e.loading ? (v(),
            k("div", {
                key: 0,
                class: "magic-loading",
                style: Ve(e.style)
            }, [R("p", null, [R("span", Oo, [_(n, {
                icon: "refresh",
                size: "20px"
            })]), pe(" " + F(e.loadingText), 1)])], 4)) : Et(t.$slots, "default", {
                key: 1
            }, void 0, !0)
        }
    }
};
var Ao = q(Ro, [["__scopeId", "data-v-19c11c56"]])
  , Co = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ao
}, Symbol.toStringTag, {
    value: "Module"
}));
const Io = {
    props: {
        language: {
            type: String,
            required: !0
        },
        editorConfig: {
            type: Object,
            default: {}
        },
        value: Array
    },
    setup() {
        return {
            instance: null,
            instancePromise: null
        }
    },
    mounted() {
        this.instance = $e.createDiffEditor(this.$refs.editor, {
            ...this.editorConfig,
            enableSplitViewResizing: !1,
            language: this.language,
            minimap: {
                enabled: !1
            },
            folding: !1,
            lineDecorationsWidth: 20,
            wordWrap: "on",
            fixedOverflowWidgets: !1,
            fontFamily: D.EDITOR_FONT_FAMILY,
            fontSize: D.EDITOR_FONT_SIZE,
            fontLigatures: D.FONT_LIGATURES,
            renderWhitespace: "none",
            theme: D.THEME,
            readOnly: this.readonly === !0,
            value: this.value || "",
            automaticLayout: !0
        }),
        this.instance.setModel({
            original: $e.createModel(this.value[0], this.language),
            modified: $e.createModel(this.value[1], this.language)
        }),
        et( () => this.language, () => {
            nextTick( () => this.instance.setModel({
                original: $e.createModel(this.value[0], this.language),
                modified: $e.createModel(this.value[1], this.language)
            }))
        }
        )
    },
    methods: {
        getEditorDom() {
            return this.$refs.editor
        },
        getInstance() {
            return this.instance
        }
    },
    watch: {
        value(e) {
            this.instance.setModel({
                original: $e.createModel(e[0], this.language),
                modified: $e.createModel(e[1], this.language)
            })
        }
    }
}
  , ko = {
    class: "magic-monaco-editor",
    ref: "editor"
};
function Lo(e, t, a, n, i, s) {
    return v(),
    k("div", ko, null, 512)
}
var No = q(Io, [["render", Lo], ["__scopeId", "data-v-59a04eab"]])
  , wo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: No
}, Symbol.toStringTag, {
    value: "Module"
}));
const Do = {
    props: {
        language: {
            type: String,
            required: !0
        },
        editorConfig: {
            type: Object,
            default: {}
        },
        value: String,
        decorations: Array,
        readonly: {
            type: Boolean,
            default: !1
        },
        supportBreakpoint: {
            type: Boolean,
            default: !1
        },
        matches: String
    },
    setup() {
        return {
            instance: null,
            instancePromise: null
        }
    },
    emits: ["update:value", "change", "update:decorations"],
    mounted() {
        this.instance = $e.create(this.$refs.editor, {
            ...this.editorConfig,
            language: this.language,
            minimap: {
                enabled: !1
            },
            folding: !0,
            lineDecorationsWidth: this.supportBreakpoint ? 35 : void 0,
            wordWrap: "on",
            fontFamily: D.EDITOR_FONT_FAMILY,
            fontSize: D.EDITOR_FONT_SIZE,
            fontLigatures: D.FONT_LIGATURES,
            renderWhitespace: "none",
            theme: D.THEME,
            readOnly: this.readonly === !0,
            value: this.value || "",
            automaticLayout: !0
        }),
        et( () => this.language, () => {
            be( () => this.instance.setModel($e.createModel(this.instance.getModel().getValue(), this.language)))
        }
        ),
        this.instance.onDidChangeModelContent(e => {
            this.$emit("update:value", this.instance.getValue()),
            this.$emit("change", e),
            this.doValidate()
        }
        ),
        this.instance.addAction({
            id: "editor.action.triggerSuggest.extension",
            label: c("editor.triggerSuggest"),
            precondition: "!suggestWidgetVisible && !markersNavigationVisible && !parameterHintsVisible && !findWidgetVisible",
            run: () => {
                this.instance.trigger(null, "editor.action.triggerSuggest", {})
            }
        }),
        Va.registerCommand("editor.action.appendHead", (e, t) => {
            var a;
            ((a = this.value) == null ? void 0 : a.indexOf(t)) > -1 || (this.instance.executeEdits("command", [{
                forceMoveMarkers: !0,
                text: t,
                range: new st(1,0,1,0)
            }]),
            this.instance.setScrollTop(this.instance.getScrollTop() - 22))
        }
        ),
        this.instance.addCommand(ct.Alt | ht.US_SLASH, () => {
            let e = this.instance.getAction("editor.action.triggerParameterHints")
              , t = this.instance.getAction("editor.action.triggerSuggest.extension");
            e.run().then( () => {
                setTimeout( () => {
                    t.isSupported() && t.run()
                }
                , 0)
            }
            )
        }
        , "!findWidgetVisible && !inreferenceSearchEditor && !editorHasSelection"),
        this.initKeys(),
        this.initDecorations()
    },
    methods: {
        doValidate() {
            if (this.instance && $e.setModelMarkers(this.instance.getModel(), "validate", [{}]),
            this.language === "magicscript")
                try {
                    new ta(new yt(Zt(this.instance.getValue()))).parse()
                } catch (e) {
                    if (e.span) {
                        let t = e.span.getLine();
                        $e.setModelMarkers(this.instance.getModel(), "validate", [{
                            startLineNumber: t.lineNumber,
                            endLineNumber: t.endLineNumber,
                            startColumn: t.startCol,
                            endColumn: t.endCol,
                            message: e.message,
                            severity: ai.Error
                        }])
                    }
                }
        },
        getEditorDom() {
            return this.$refs.editor
        },
        getScrollTop() {
            return this.instance && this.instance.getScrollTop()
        },
        setScrollTop(e) {
            this.instance && this.instance.setScrollTop(e)
        },
        match() {
            this.matches && be( () => {
                let e = this.instance.getModel().findMatches(this.matches);
                e && e.length > 0 && this.instance.setSelections(e.map( ({range: t}) => ({
                    positionColumn: t.endColumn,
                    positionLineNumber: t.endLineNumber,
                    selectionStartColumn: t.startColumn,
                    selectionStartLineNumber: t.startLineNumber
                })))
            }
            )
        },
        initKeys() {
            [["editor.action.triggerParameterHints", ct.Alt | ht.US_SLASH], ["editor.action.triggerSuggest", ct.Alt | ht.US_SLASH], ["toggleSuggestionDetails", ct.Alt | ht.US_SLASH, ni.deserialize("suggestWidgetVisible && textInputFocus")], ["editor.action.formatDocument", ct.CtrlCmd | ct.Alt | ht.KEY_L], ["editor.action.marker.nextInFiles", ct.CtrlCmd | ht.F8]].forEach(t => {
                var s;
                let a = t[0];
                const {handler: n, when: i} = (s = Va.getCommand(a)) != null ? s : {};
                if (n) {
                    let o = na._coreKeybindings.findIndex(r => r.command === a);
                    o > 0 && na._coreKeybindings.splice(o, 1),
                    this.instance._standaloneKeybindingService.addDynamicKeybinding(a, t[1], n, i || t[2])
                }
            }
            ),
            na._cachedMergedKeybindings = null
        },
        getInstance() {
            return this.instance
        },
        initDecorations() {
            this.instance.onMouseDown(e => {
                if (!e.target.element.classList.contains("codicon") && e.target.detail && e.target.detail.offsetX && e.target.detail.offsetX >= 0 && e.target.detail.offsetX <= 65) {
                    var t = e.target.position.lineNumber;
                    if (this.instance.getModel().getLineContent(t).trim() === "")
                        return;
                    let n = this.instance.getLineDecorations(t).filter(i => i.options.linesDecorationsClassName === "breakpoints");
                    n && n.length > 0 ? this.instance.getModel().deltaDecorations([n[0].id], []) : this.instance.getModel().deltaDecorations([], [{
                        range: new st(t,1,t,1),
                        options: {
                            isWholeLine: !0,
                            linesDecorationsClassName: "breakpoints",
                            className: "breakpoint-line"
                        }
                    }]),
                    this.updateDecoration()
                }
            }
            )
        },
        appendDecoration(e) {
            const t = this.instance.deltaDecorations([], e);
            return this.updateDecoration(),
            t
        },
        removedDecorations(e) {
            this.instance.deltaDecorations(e, []),
            this.updateDecoration()
        },
        updateDecoration() {
            this.$emit("update:decorations", this.instance.getModel().getAllDecorations())
        }
    },
    watch: {
        value(e) {
            e !== this.instance.getValue() && (this.instance.setValue(e || ""),
            this.match())
        },
        matches() {
            this.match()
        }
    }
}
  , Mo = {
    class: "magic-monaco-editor",
    ref: "editor"
};
function Po(e, t, a, n, i, s) {
    return v(),
    k("div", Mo, null, 512)
}
var Uo = q(Do, [["render", Po], ["__scopeId", "data-v-9b3f02a8"]])
  , $o = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Uo
}, Symbol.toStringTag, {
    value: "Module"
}));
const Fo = {
    props: {
        max: Number,
        min: Number,
        value: Number,
        direction: String,
        reverse: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        return {
            style: U({
                [e.direction === "x" ? "width" : "height"]: (e.value || e.min) + "px"
            })
        }
    },
    mounted() {
        new ResizeObserver(this.updateCss).observe(this.$refs.resizer)
    },
    methods: {
        updateCss() {
            try {
                const e = this.$refs.resizer.parentElement;
                this.$refs.resizer.style.setProperty("--width", e.offsetWidth + "px"),
                this.$refs.resizer.style.setProperty("--height", e.offsetHeight + "px")
            } catch {}
        },
        mousedown(e) {
            const t = this.direction === "x"
              , a = t ? e.clientX : e.clientY
              , n = e.target.parentElement.getBoundingClientRect();
            document.onmousemove = i => {
                let s = t ? n.width : n.height;
                t ? this.reverse ? s = a - i.clientX + n.width : s = i.clientX - a + n.width : this.reverse ? s = i.clientY - a + n.height : s = a - i.clientY + n.height,
                s >= this.min && s <= this.max && (this.style[t ? "width" : "height"] = `${s}px`)
            }
            ,
            document.onmouseup = () => {
                document.onmousemove = document.onmouseup = null
            }
            ,
            e.stopPropagation(),
            e.preventDefault()
        }
    }
};
function Bo(e, t, a, n, i, s) {
    return v(),
    k("div", {
        class: ve(`magic-resizer-${this.direction}`),
        style: Ve(n.style)
    }, [Et(e.$slots, "default", {}, void 0, !0), R("div", {
        class: ve(["magic-resizer-event", {
            reverse: a.reverse
        }]),
        onMousedown: t[0] || (t[0] = (...o) => s.mousedown && s.mousedown(...o)),
        ref: "resizer"
    }, null, 34)], 6)
}
var Ho = q(Fo, [["render", Bo], ["__scopeId", "data-v-032bc45e"]])
  , jo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ho
}, Symbol.toStringTag, {
    value: "Module"
}));
const Vo = {
    class: "magic-navbar-item"
}
  , Go = {
    __name: "magic-navbar-item",
    props: {
        title: String,
        style: Object,
        show: {
            type: Boolean,
            default: !0
        },
        to: HTMLElement
    },
    setup(e) {
        return (t, a) => (v(),
        k("div", Vo, [Et(t.$slots, "default", {}, void 0, !0)]))
    }
};
var zo = q(Go, [["__scopeId", "data-v-30388e35"]])
  , Yo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zo
}, Symbol.toStringTag, {
    value: "Module"
}))
  , qo = `.magic-navbar{display:flex;background-color:var(--main-background-color);transition:.3s}.magic-navbar .magic-navbar-body{background-color:var(--navbar-body-background-color);overflow:auto}.magic-navbar .magic-navbar-header li:hover{background-color:var(--main-hover-background-color)}.magic-navbar .magic-navbar-header li.selected{background-color:var(--main-selected-background-color);color:var(--main-selected-color)}.magic-navbar .magic-navbar-header li.selected svg text{fill:var(--main-selected-color)}.magic-navbar .magic-navbar-header li svg text{letter-spacing:0px;font-size:10px}.magic-navbar__vertical.reverse{flex-direction:row-reverse}.magic-navbar__vertical .magic-navbar-header li{display:flex;flex-direction:column;align-items:center;overflow:hidden;padding:var(--magic-navbar-vertical-header-padding);margin:var(--magic-navbar-vertical-header-margin);cursor:pointer;border-bottom-color:var(--main-border-color);border-bottom-style:solid;border-bottom-width:var(--magic-navbar-vertical-header-border-width);border-radius:var(--magic-navbar-vertical-header-border-radius)}.magic-navbar__vertical .magic-navbar-header{width:var(--magic-navbar-vertical-width);height:100%;letter-spacing:2px;text-align:center;padding:0;border-right:1px solid var(--main-border-color)}.magic-navbar__vertical.reverse .magic-navbar-header{border-left:1px solid var(--main-border-color);border-right:none}.magic-navbar__vertical.reverse .magic-navbar-header li{display:flex;flex-direction:column-reverse}.magic-navbar__vertical .magic-navbar-header li{line-height:14px;word-break:break-all}.magic-navbar__vertical .magic-navbar-body{flex:1}.magic-navbar__vertical .magic-navbar-body{border-right:1px solid var(--navbar-body-border-color)}.magic-navbar__vertical.reverse .magic-navbar-body{border-left:1px solid var(--navbar-body-border-color);border-right:none}.magic-navbar__horizontal>ul{width:100%}.magic-navbar__horizontal>ul li{display:inline-flex;flex-direction:row-reverse;padding:0 8px;height:var(--magic-navbar-horizontal-height);line-height:var(--magic-navbar-horizontal-height);cursor:pointer;color:var(--main-color)}.magic-navbar__horizontal>ul li svg.magic-icon{height:100%;margin-right:4px}.magic-navbar__horizontal>ul{border-top:1px solid var(--main-border-color)}.magic-navbar.magic-navbar__vertical .magic-navbar-title{padding-bottom:4px;display:var(--magic-navbar-vertical-title-display)}.magic-navbar.magic-navbar__vertical>ul li svg.magic-icon{width:var(--magic-navbar-vertical-icon-size);height:var(--magic-navbar-vertical-icon-size)}.magic-navbar.magic-navbar__vertical.reverse .magic-navbar-title{padding-top:4px;padding-bottom:0;display:var(--magic-navbar-vertical-title-display)}
`
  , Ko = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: qo
}, Symbol.toStringTag, {
    value: "Module"
}));
const Wo = {
    "aria-hidden": "true",
    class: "magic-icon"
}
  , Xo = ["xlink:href"]
  , Jo = {
    __name: "magic-icon",
    props: {
        prefix: {
            type: String,
            default: "magic-icon"
        },
        icon: String,
        size: String
    },
    setup(e) {
        const t = e
          , a = _e( () => t.icon && t.icon.startsWith("#") ? t.icon : `#${t.prefix}-${t.icon}`)
          , n = _e( () => t.icon && t.icon.startsWith("#") ? t.icon.substring(1) : `${t.prefix}-${t.icon}`);
        return (i, s) => (v(),
        k("svg", Wo, [R("use", {
            "xlink:href": h(a),
            class: ve(h(n))
        }, null, 10, Xo)]))
    }
};
var Ua = q(Jo, [["__scopeId", "data-v-15383e92"]])
  , Qo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ua
}, Symbol.toStringTag, {
    value: "Module"
}));
var Zo = {
    props: {
        direction: {
            type: String,
            default: ""
        },
        reverse: {
            type: Boolean,
            default: !1
        },
        defaultSelect: {
            type: Number,
            default: 0
        },
        allowClose: {
            type: Boolean,
            default: !0
        },
        tooltipDirection: {
            type: String,
            default: "right"
        },
        spliter: Boolean,
        value: Array,
        to: HTMLElement
    },
    setup(e, t) {
        const a = U(e.defaultSelect);
        return {
            slots: _e( () => t.slots.default()[0].children),
            navbars: _e( () => t.slots.default()[0].children.flatMap(n => n.props)),
            selectIndex: a
        }
    },
    methods: {
        select(e) {
            this.selectIndex = e
        }
    },
    render() {
        const e = n => {
            const i = parseInt(Math.random() * 1e8)
              , s = n.length * 6;
            return le("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                width: 22,
                height: s
            }, [le("defs", le("path", {
                id: `path-text-${i}`,
                d: this.reverse ? `M6,0 L6,${s}` : `M14,${s} L14,0`
            })), le("text", {
                fill: "var(--main-color)"
            }, le("textPath", {
                "xlink:href": `#path-text-${i}`
            }, n))])
        }
          , t = n => {
            if (this.spliter && this.direction === "vertical" && n.match(/\w/g)) {
                const i = [];
                let s = "", o = 1, r;
                const l = n.split("");
                for (let u = 0, d = l.length; u < d; u++) {
                    const g = l[u];
                    o = g.match(/\w/) ? 1 : 2,
                    o == r ? s += g : (s && i.push(r === 1 ? e(s) : s),
                    s = g),
                    r = o
                }
                return s && i.push(r === 1 ? e(s) : s),
                i
            }
            return [n]
        }
          , a = [le("ul", {
            class: "magic-navbar-header none-select"
        }, this.navbars.map( (n, i) => {
            const s = [le("div", {
                class: "magic-navbar-title"
            }, [...t(n.title)])];
            n.icon && s.push(le(Ua, {
                icon: n.icon
            }));
            const o = n.style || {};
            return n.show === !1 && (o.display = "none"),
            le("li", {
                class: this.selectIndex === i ? "selected" : "",
                "data-title": n.title,
                "data-tooltip-direction": this.tooltipDirection,
                style: o,
                onClick: () => {
                    this.selectIndex === i && this.allowClose ? this.selectIndex = -1 : this.selectIndex = i
                }
            }, s)
        }
        ))];
        return this.slots.forEach( (n, i) => {
            const s = i !== this.selectIndex || n.props.show === !1 ? {
                display: "none"
            } : {};
            this.to ? a.push(le(cn, {
                to: this.to
            }, le("div", {
                class: "magic-navbar-body",
                style: s
            }, n))) : a.push(le("div", {
                class: "magic-navbar-body",
                style: s
            }, n))
        }
        ),
        le("div", {
            class: `magic-navbar magic-navbar__${this.direction}` + (this.reverse ? " reverse" : "")
        }, a)
    }
}
  , er = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Zo
}, Symbol.toStringTag, {
    value: "Module"
}))
  , tr = `.magic-tab{width:100%;overflow:hidden;flex-wrap:nowrap;white-space:nowrap;transition:.3s}.magic-tab ul{overflow-x:auto}.magic-tab ul li{display:inline-block;cursor:pointer;padding:0 10px;height:24px;line-height:24px}.magic-tab ul li.selected,.magic-tab ul li:hover,.magic-tab.magic-script-tab ul li.selected:hover,.magic-tab ul li.draggable-target-item{background-color:var(--main-hover-background-color)}.magic-tab.magic-script-tab{border-bottom:1px solid var(--main-border-color);height:30px;position:absolute}.magic-tab.magic-script-tab ul li{height:30px;line-height:30px;border-bottom:3px solid transparent}.magic-tab.magic-script-tab ul li.selected{border-bottom-color:var(--tab-selected-border-color);background-color:var(--tab-selected-background-color)}
`
  , ar = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tr
}, Symbol.toStringTag, {
    value: "Module"
}));
var nr = {
    props: {
        tabs: Array,
        className: String,
        value: Object,
        allowClose: {
            type: Boolean
        }
    },
    emits: ["update:value", "change", "close", "item-contextmenu", "before-change"],
    setup(e) {
        const t = U({})
          , a = U({});
        function n(o, r, l) {
            switch (l) {
            case "dragstart":
                t.value = o,
                r.stopPropagation();
                break;
            case "dragenter":
                a.value = o,
                r.stopPropagation();
                break;
            case "dragend":
                if (t.value !== a.value) {
                    const u = e.tabs.indexOf(t.value)
                      , d = e.tabs.indexOf(a.value);
                    e.tabs.splice(u, 1),
                    e.tabs.splice(d, 0, t.value)
                }
                a.value = {},
                r.stopPropagation();
                break;
            case "dragover":
                t.value !== a.value && r.preventDefault();
                break
            }
        }
        const i = U({});
        function s(o) {
            let r = o.wheelDelta || o.detail;
            i.value.value.el.scrollLeft += r > 0 ? -100 : 100
        }
        return {
            selectIndex: U(0),
            draggableItem: t,
            draggableTargetItem: a,
            tabDraggable: n,
            scrollbar: i,
            scrollbarHandler: s,
            scrollId: "",
            scrollItem: U(null)
        }
    },
    mounted() {
        be( () => {
            this.scrollbar.value.el.addEventListener("DOMMouseScroll", this.scrollbarHandler, !1),
            this.scrollbar.value.el.addEventListener("mousewheel", this.scrollbarHandler, !1)
        }
        )
    },
    methods: {
        scrollIntoView(e) {
            this.scrollId = "s" + new Date().getTime() + parseInt(Math.random() * 1e7),
            this.scrollItem = e,
            be( () => {
                const t = document.querySelector("#" + this.scrollId);
                t && t.scrollIntoView(!0)
            }
            )
        }
    },
    destroyed() {
        be( () => {
            this.scrollbar.value.el.removeEventListener("DOMMouseScroll", this.scrollbarHandler),
            this.scrollbar.value.el.removeEventListener("mousewheel", this.scrollbarHandler)
        }
        )
    },
    render() {
        const e = this.tabs && le("ul", this.tabs.map( (t, a) => {
            const n = [this.$slots.default({
                tab: t
            })];
            return this.allowClose && n.push(le(Ua, {
                icon: "close",
                size: "12px",
                style: {
                    marginLeft: "5px"
                },
                onClick: i => {
                    this.$emit("close", t),
                    i.stopPropagation(),
                    i.preventDefault()
                }
            })),
            le("li", {
                class: [this.value === t ? "selected" : "", t === this.draggableTargetItem ? "draggable-target-item" : ""],
                id: this.scrollItem === t || this.scrollItem === t.id ? this.scrollId : void 0,
                onClick: i => {
                    this.value !== t && (this.$emit("before-change", this.value),
                    this.$emit("update:value", t),
                    this.$emit("change", t)),
                    i.stopPropagation(),
                    i.preventDefault()
                }
                ,
                onMousedown: i => {
                    i.which === 2 && this.allowClose && this.$emit("close", t)
                }
                ,
                onContextmenu: i => {
                    this.$emit("item-contextmenu", i, t, a),
                    i.preventDefault()
                }
                ,
                draggable: !0,
                onDragenter: i => this.tabDraggable(t, i, "dragenter"),
                onDragstart: i => this.tabDraggable(t, i, "dragstart"),
                onDragend: i => this.tabDraggable(t, i, "dragend"),
                onDragover: i => this.tabDraggable(t, i, "dragover")
            }, n)
        }
        ));
        return this.scrollbar.value = e,
        le("div", {
            class: "magic-tab none-select" + (this.className ? " " + this.className : "")
        }, e)
    }
}
  , ir = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: nr
}, Symbol.toStringTag, {
    value: "Module"
}));
const sr = {
    class: "magic-table-row"
}
  , Mn = {
    __name: "magic-table-column",
    props: {
        title: String,
        row: Object,
        flex: String,
        width: String,
        align: String
    },
    setup(e) {
        return (t, a) => (v(),
        k("div", sr, [Et(t.$slots, "default", {
            row: e.row
        })]))
    }
};
var or = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Mn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , rr = `.magic-table{display:flex;flex-direction:column;box-sizing:border-box}.magic-table .magic-table-body{flex:1;overflow:auto}.magic-table .magic-table-header,.magic-table .magic-table-body .magic-table-row{display:flex;height:var(--magic-table-row-height);line-height:var(--magic-table-row-height);border-bottom:1px solid var(--main-border-color)}.magic-table .magic-table-body .magic-table-row:hover{background-color:var(--main-hover-background-color)}.magic-table .magic-table-column{flex:1;display:inline-flex}.magic-table .magic-table-column span:last-child{flex:1;overflow:hidden;text-overflow:ellipsis;width:0px;white-space:pre}.magic-table .magic-table-column .magic-select{width:100%}.magic-table__border .magic-table-body .magic-table-row{border-bottom:1px solid var(--table-border-color)}.magic-table__border .magic-table-column:not(:last-child){border-right:1px solid var(--table-border-color)}
`
  , lr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: rr
}, Symbol.toStringTag, {
    value: "Module"
}));
var cr = {
    props: {
        data: {
            type: Array,
            default: []
        },
        width: String,
        border: {
            type: Boolean,
            default: !1
        },
        align: {
            type: String,
            default: "center"
        }
    },
    emits: ["clickRow", "contextmenu", "loadNext"],
    render() {
        const e = this.$slots.default()
          , t = a => {
            a = a || {};
            let n = [];
            if (a.width) {
                let i = `width: ${a.width}`;
                !a.width.endsWith("%") && !isNaN(a.width) && (i += "px"),
                n.push(i),
                n.push("flex:none")
            } else
                a.flex && n.push(`flex: ${a.flex}`);
            return (a.align || this.align) && n.push(`justify-content: ${a.align || this.align};text-align: ${a.align || this.align}`),
            n.join(";")
        }
        ;
        return le("div", {
            class: "magic-table" + (this.border ? " magic-table__border" : "")
        }, [le("div", {
            class: "magic-table-header none-select"
        }, e.map(a => le("div", {
            class: "magic-table-column",
            title: a.props.title,
            style: t(a.props)
        }, le("span", a.props.title)))), le("div", {
            class: "magic-table-body",
            onScroll: a => {
                a.target.scrollTop + a.target.offsetHeight + 40 >= a.target.scrollHeight && this.$emit("loadNext")
            }
        }, this.data.map( (a, n) => le(Mn, {
            row: a,
            onClick: () => {
                this.$emit("clickRow", n)
            }
        }, {
            default: () => e.map(i => le("div", {
                class: "magic-table-column",
                onContextmenu: s => {
                    this.$emit("contextmenu", s, a),
                    s.stopPropagation(),
                    s.preventDefault()
                }
                ,
                style: t(i.props)
            }, i.children.default({
                row: a
            })))
        })))])
    }
}
  , ur = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: cr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , dr = `.magic-tree{position:relative;overflow:auto}.magic-tree>ul{position:absolute;top:0;left:0}.magic-tree .magic-tree-item{height:20px;line-height:20px;transition:.3s;word-break:break-all;white-space:nowrap}.magic-tree .magic-tree-item:hover,.magic-tree .magic-tree-item.selected,.magic-tree .magic-tree-item.draggable-target-item{background-color:var(--tree-hover-background-color)}.magic-tree .magic-tree-item .magic-icon{fill:var(--tree-icon-color);margin-right:2px}.magic-tree ul{max-height:99999px;min-width:100%}.magic-tree li{white-space:nowrap;word-break:break-all}.magic-tree .hide{opacity:0;max-height:0;position:relative}.magic-tree svg:not(.root) .magic-icon-datasource{fill:#089910}
`
  , pr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dr
}, Symbol.toStringTag, {
    value: "Module"
}));
var _r = {
    props: {
        data: Array,
        sort: Boolean,
        descending: Boolean,
        filter: String,
        filterText: Function,
        selected: Object,
        draggable: {
            type: Boolean,
            default: !1
        },
        onMove: {
            type: Function,
            defeault: () => new Promise(e => e(!0))
        }
    },
    emits: ["drag", "contextmenu", "onMove", "itemClick"],
    setup(e, t) {
        const a = t.emit
          , n = We({
            item: {},
            itemParent: {},
            target: {},
            targetParent: {}
        });
        function i(s, o, r, l) {
            function u() {
                return !(n.item === n.target || n.itemParent === n.target || !n.target.folder && n.itemParent === n.targetParent)
            }
            switch (l) {
            case "dragstart":
                n.item = o,
                n.itemParent = s,
                r.stopPropagation();
                break;
            case "dragenter":
                n.target = o,
                n.targetParent = s,
                r.stopPropagation();
                break;
            case "dragover":
                u() && r.preventDefault();
                break;
            case "dragend":
                if (!u())
                    break;
                e.onMove(o, n.target || n.targetParent).then(d => {
                    if (d) {
                        const g = n.itemParent || {
                            children: e.data
                        };
                        g.children.splice(g.children.indexOf(o), 1),
                        n.target.folder ? (n.target.children = n.target.children || [],
                        n.target.children.push(n.item)) : (n.targetParent.children = n.targetParent.children || [],
                        n.targetParent.children.push(n.item)),
                        e.sort && Ct(n.target.folder ? n.target.children : n.targetParent.children, e.descending, "name"),
                        n.target = {},
                        n.targetParent = {}
                    }
                }
                ),
                r.stopPropagation();
                break
            }
            a("drag", l, n, r)
        }
        return e.sort && (Ct(e.data, e.descending, "name", "children"),
        et( () => e.data, s => {
            Ct(e.data, e.descending, "name", "children")
        }
        ),
        et( () => e.descending, s => {
            Ct(e.data, e.descending, "name", "children")
        }
        )),
        {
            draggableItem: n,
            itemDraggable: i
        }
    },
    data() {
        return {
            scrollId: "",
            scrollItem: U(null)
        }
    },
    methods: {
        scrollIntoView(e) {
            this.scrollId = "s" + new Date().getTime() + parseInt(Math.random() * 1e7),
            this.scrollItem = e;
            const t = a => {
                let n = !1;
                for (const i in a) {
                    const s = a[i];
                    if (n = s === e) {
                        s.opened !== void 0 && (s.opened = !0);
                        break
                    } else if (s.children && s.children.length > 0 && (n = t(s.children))) {
                        s.opened = !0;
                        break
                    }
                }
                return n
            }
            ;
            t(this.data) && be( () => {
                const a = document.querySelector("#" + this.scrollId);
                a && a.scrollIntoView(!0)
            }
            )
        }
    },
    render() {
        const e = a => this.filter ? this.filterText(Be(a)).indexOf(this.filter) > -1 || a.children && a.children.some(n => e(n)) : !0
          , t = (a, n, i) => {
            const s = i > 0 ? {
                paddingLeft: `${i * 17}px`
            } : {};
            return e(n) && le("li", {
                onDblclick: o => {
                    n.folder && (n.opened = !n.opened),
                    o.stopPropagation(),
                    o.preventDefault()
                }
                ,
                onClick: o => {
                    this.$emit("itemClick", n),
                    o.stopPropagation(),
                    o.preventDefault()
                }
                ,
                onContextmenu: o => {
                    this.$emit("contextmenu", n, o),
                    o.stopPropagation(),
                    o.preventDefault()
                }
                ,
                draggable: this.draggable,
                onDragenter: o => this.itemDraggable(a, n, o, "dragenter"),
                onDragstart: o => this.itemDraggable(a, n, o, "dragstart"),
                onDragend: o => this.itemDraggable(a, n, o, "dragend"),
                onDragover: o => this.itemDraggable(a, n, o, "dragover")
            }, [le("div", {
                class: ["magic-tree-item", n === this.draggableItem.target ? "draggable-target-item" : "", n === this.selected ? "selected" : ""],
                style: s,
                id: this.scrollItem === n || this.scrollItem === n.id ? this.scrollId : void 0
            }, n.folder ? this.$slots.folder({
                item: n
            }) : this.$slots.file({
                item: n
            })), n.folder && n.opened && le("ul", {
                class: n.opened && "opened" || "hide"
            }, n.children && n.children.map(o => t(n, o, i + 1)))])
        }
        ;
        return le("div", {
            class: "magic-tree none-select"
        }, le("ul", {}, this.data && this.data.map(a => t(null, a, 0))))
    }
}
  , hr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _r
}, Symbol.toStringTag, {
    value: "Module"
}));
const fr = ["onMousedown"]
  , gr = {
    __name: "magic-dialog",
    props: {
        value: {
            type: Boolean,
            default: !0
        },
        className: String,
        showClose: {
            type: Boolean,
            default: !0
        },
        shade: {
            type: Boolean,
            default: !0
        },
        padding: {
            type: String,
            default: "5px 10px"
        },
        height: {
            type: String,
            default: "auto"
        },
        width: {
            type: String,
            default: "auto"
        },
        moveable: {
            type: Boolean,
            default: !0
        },
        overflow: {
            type: String,
            default: "auto"
        },
        top: String,
        maxHeight: String,
        maxWidth: String,
        contentHeight: String,
        title: String,
        content: String,
        onClose: Function
    },
    emits: ["update:value", "onClose"],
    setup(e, {expose: t, emit: a}) {
        const n = e
          , i = U(n.top || "auto")
          , s = U("auto")
          , o = U("relative")
          , r = U(null);
        function l() {
            a("update:value", !1)
        }
        const u = () => {
            a("close"),
            typeof n.onClose == "function" && n.onClose(),
            l()
        }
        ;
        let d, g = !1, f, E;
        function m(A) {
            n.moveable && (d = A,
            f = A.target.parentNode.getBoundingClientRect(),
            E = document.getElementsByClassName("magic-editor")[0].getBoundingClientRect(),
            g = !0)
        }
        function N(A) {
            if (n.moveable && g) {
                let M = Math.min(Math.max(f.top + (A.pageY - d.pageY), E.y), E.y + E.height - f.height)
                  , I = Math.min(Math.max(f.left + (A.pageX - d.pageX), E.x), E.x + E.width - f.width);
                i.value = M + "px",
                s.value = I + "px",
                o.value = "absolute"
            }
        }
        let C = !1;
        const x = () => {
            !C && r.value && (o.value = "absolute",
            s.value = r.value.getBoundingClientRect().x + "px"),
            C = !0
        }
        ;
        n.top && Vn(x);
        const b = A => {
            n.showClose && A.keyCode === 27 && u()
        }
        ;
        function S(A) {
            g = !1
        }
        return t({
            close: u
        }),
        (A, M) => {
            const I = y("magic-icon");
            return e.value ? (v(),
            V(cn, {
                key: 0,
                to: ".magic-editor"
            }, [R("div", {
                class: ve(["magic-dialog", (e.shade ? "magic-dialog__shade" : "") + (e.className ? " " + e.className : "")]),
                tabindex: "1",
                onMousemove: N,
                onMouseup: S,
                onKeydown: b
            }, [R("div", {
                class: "magic-dialog-main",
                style: Ve({
                    position: o.value,
                    top: i.value,
                    left: s.value,
                    width: e.width,
                    height: e.height,
                    "max-width": e.maxWidth
                }),
                ref_key: "dialog",
                ref: r
            }, [R("div", {
                class: ve(["magic-dialog-header none-select", {
                    moveable: e.moveable
                }]),
                onMousedown: m
            }, [pe(F(e.title) + " ", 1), e.showClose ? (v(),
            k("span", {
                key: 0,
                onMousedown: ye(u, ["stop"])
            }, [_(I, {
                icon: "close"
            })], 40, fr)) : X("", !0)], 34), R("div", {
                class: "magic-dialog-body",
                style: Ve({
                    padding: e.padding,
                    "max-height": e.maxHeight,
                    height: e.contentHeight,
                    overflow: e.overflow
                })
            }, [e.content ? (v(),
            k(te, {
                key: 0
            }, [pe(F(e.content), 1)], 64)) : Et(A.$slots, "default", {
                key: 1
            }, void 0, !0)], 4)], 4)], 34)])) : X("", !0)
        }
    }
};
var mr = q(gr, [["__scopeId", "data-v-3e8f0d71"]])
  , vr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mr
}, Symbol.toStringTag, {
    value: "Module"
}));
const br = {
    class: "magic-notify"
}
  , Er = ["onClick"]
  , yr = ["innerHTML"]
  , Tr = ["innerHTML"]
  , Sr = {
    __name: "magic-notify",
    setup(e) {
        const t = {
            error: '<path fill="#E05555" fill-opacity=".7" fill-rule="evenodd" d="M8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 Z M7,4 L7,8 L9,8 L9,4 L7,4 Z M7,10 L7,12 L9,12 L9,10 L7,10 Z"/>',
            warning: '<path fill="#F4AF3D" fill-rule="evenodd" d="M8,2 L15,14 L1,14 L8,2 Z M9,13 L9,11 L7,11 L7,13 L9,13 Z M9,10 L9,6 L7,6 L7,10 L9,10 Z"/>',
            info: '<path fill="#40B6E0" fill-opacity=".7" fill-rule="evenodd" d="M8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 Z M7,4 L7,8 L9,8 L9,4 L7,4 Z M7,10 L7,12 L9,12 L9,10 L7,10 Z" transform="rotate(-180 8 8)"/>'
        }
          , a = We([])
          , n = s => {
            const o = a.findIndex(r => s.id === r.id);
            return o > -1 && a.splice(o, 1),
            !0
        }
          , i = s => {
            s.icon = t[s.icon] || t.info,
            s.id = s.id || parseInt(Math.random() * 1e7),
            n(s),
            a.push(s),
            s.duration && setTimeout( () => n(s), parseInt(s.duration))
        }
        ;
        return T.$on($.NOTIFY, i),
        (s, o) => {
            const r = y("magic-icon")
              , l = y("magic-button")
              , u = y("magic-button-group");
            return v(),
            k("div", br, [(v(!0),
            k(te, null, fe(a, (d, g) => (v(),
            k("div", {
                class: "magic-notify-item",
                key: g
            }, [R("div", {
                class: "close",
                onClick: f => n(d)
            }, [_(r, {
                icon: "close"
            })], 8, Er), R("h3", null, [(v(),
            k("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                innerHTML: d.icon
            }, null, 8, yr)), pe(F(d.title), 1)]), R("p", {
                innerHTML: d.content
            }, null, 8, Tr), d.buttons ? (v(),
            V(u, {
                key: 0
            }, {
                default: w( () => [(v(!0),
                k(te, null, fe(d.buttons, (f, E) => (v(),
                V(l, {
                    key: E,
                    value: f.title,
                    type: "link",
                    onClick: () => n(d) && f.onClick()
                }, null, 8, ["value", "onClick"]))), 128))]),
                _: 2
            }, 1024)) : X("", !0)]))), 128))])
        }
    }
};
var xr = q(Sr, [["__scopeId", "data-v-4a37ceea"]])
  , Or = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xr
}, Symbol.toStringTag, {
    value: "Module"
}));
const Rr = {
    __name: "magic-button-group",
    props: {
        align: {
            type: String,
            default: "left"
        }
    },
    setup(e) {
        return (t, a) => (v(),
        k("div", {
            class: ve(["magic-button-group", e.align])
        }, [Et(t.$slots, "default", {}, void 0, !0)], 2))
    }
};
var Ar = q(Rr, [["__scopeId", "data-v-70c60ab6"]])
  , Cr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ar
}, Symbol.toStringTag, {
    value: "Module"
}));
const Ir = {
    __name: "magic-button",
    props: {
        value: String,
        type: String
    },
    setup(e) {
        return (t, a) => (v(),
        k("button", {
            onClick: a[0] || (a[0] = ye(n => t.$emit("onClick"), ["stop"])),
            class: ve(["magic-button", e.type]),
            type: "button"
        }, F(e.value), 3))
    }
};
var kr = q(Ir, [["__scopeId", "data-v-d216a404"]])
  , Lr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: kr
}, Symbol.toStringTag, {
    value: "Module"
}));
const Nr = ["checked"]
  , wr = {
    __name: "magic-checkbox",
    props: {
        value: {
            type: [Number, Boolean],
            default: () => !1
        },
        checkedHalf: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = new Date().getTime() + "" + Math.floor(Math.random() * 1e3);
        return (a, n) => (v(),
        k("div", {
            class: "magic-checkbox",
            onClick: n[1] || (n[1] = ye(i => a.$emit("click", i), ["stop"]))
        }, [R("input", {
            id: t,
            ref: "checkbox",
            type: "checkbox",
            onChange: n[0] || (n[0] = () => {
                a.$emit("update:value", a.$refs.checkbox.checked),
                a.$emit("change", a.$refs.checkbox.checked)
            }
            ),
            checked: e.value
        }, null, 40, Nr), R("label", {
            for: t,
            class: ve({
                checkedHalf: e.checkedHalf && e.value
            })
        }, null, 2)]))
    }
};
var Dr = q(wr, [["__scopeId", "data-v-61c815ba"]])
  , Mr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Dr
}, Symbol.toStringTag, {
    value: "Module"
}));
const Pr = {
    class: "magic-file"
}
  , Ur = ["accept", "multiple"]
  , $r = {
    __name: "magic-file",
    props: {
        value: [Object, String],
        placeholder: {
            type: String,
            default: c("message.chooseFile")
        },
        accept: String,
        multiple: {
            type: Boolean,
            default: !1
        },
        border: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["update:value"],
    setup(e, {emit: t}) {
        const a = e
          , n = U(null)
          , i = U(null)
          , s = () => {
            n.value.files[0] && (i.value = Array.from(n.value.files).map(o => o.name).join(",")),
            t("update:value", a.multiple ? n.value.files : n.value.files[0])
        }
        ;
        return (o, r) => {
            const l = y("magic-input")
              , u = y("magic-icon");
            return v(),
            k("div", Pr, [R("input", {
                type: "file",
                style: {
                    display: "none"
                },
                ref_key: "file",
                ref: n,
                onChange: s,
                accept: e.accept,
                multiple: e.multiple
            }, null, 40, Ur), _(l, {
                readonly: !0,
                style: {
                    width: "100%"
                },
                placeholder: e.placeholder,
                onClick: () => o.$refs.file.click(),
                value: i.value,
                border: e.border
            }, null, 8, ["placeholder", "onClick", "value", "border"]), _(u, {
                icon: "upload"
            })])
        }
    }
};
var Fr = q($r, [["__scopeId", "data-v-a16f8c8a"]])
  , Br = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Fr
}, Symbol.toStringTag, {
    value: "Module"
}));
const Hr = ["value", "placeholder", "readonly", "type", "autocomplete"]
  , jr = {
    __name: "magic-input",
    props: {
        value: [String, Number, Object],
        placeholder: String,
        defaultValue: [String, Number, Object],
        readonly: {
            type: Boolean,
            default: !1
        },
        type: {
            type: String,
            default: "text"
        },
        width: {
            type: String,
            default: "100%"
        },
        border: {
            type: Boolean,
            default: !0
        },
        onEnter: {
            type: Function,
            default: () => {}
        }
    },
    emits: ["update:value"],
    setup(e, {emit: t}) {
        const a = e
          , n = Gn( () => a.type === "password" ? "new-password" : null);
        !a.value && a.defaultValue && t("update:value", a.defaultValue);
        const i = {
            width: a.width
        };
        return (s, o) => (v(),
        k("input", {
            class: ve(["magic-input", {
                "magic-input__border": e.border
            }]),
            value: e.value,
            placeholder: e.placeholder,
            readonly: e.readonly,
            style: i,
            type: e.type,
            onInput: o[0] || (o[0] = r => s.$emit("update:value", r.target.value)),
            autocomplete: h(n),
            onKeypress: o[1] || (o[1] = zn(ye( (...r) => e.onEnter && e.onEnter(...r), ["stop"]), ["enter"]))
        }, null, 42, Hr))
    }
};
var Vr = q(jr, [["__scopeId", "data-v-15b9b158"]])
  , Gr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Vr
}, Symbol.toStringTag, {
    value: "Module"
}));
const zr = {
    key: 0
}
  , Yr = ["placeholder"]
  , qr = ["onClick"]
  , Kr = {
    __name: "magic-select",
    props: {
        value: [Object, String, Number],
        options: Array,
        defaultSelect: [Object, String, Number],
        width: String,
        border: {
            type: Boolean,
            default: !0
        },
        placeholder: String,
        inputable: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["update:value", "select"],
    setup(e, {emit: t}) {
        const a = e;
        document.body.addEventListener("click", () => i.value = !1);
        const n = U("-2px")
          , i = U(!1)
          , s = U("auto")
          , o = U("0px")
          , r = _e({
            get() {
                return a.value
            },
            set(E) {
                t("update:value", E)
            }
        })
          , l = _e( () => {
            const E = a.options.find(m => m.value === a.value) || a.options.find(m => m.value === a.defaultSelect);
            return E && E.text || ""
        }
        )
          , u = E => {
            t("update:value", E),
            t("select", E),
            i.value = !1
        }
          , d = oe("ELEMENT_ROOT")
          , g = (E, m) => m + E.scrollTop > 0 ? E.scrollTop : E.parentElement ? g(E.parentElement, m + E.scrollTop) : E.scrollTop
          , f = (E, m) => {
            n.value = -g(E, 0) - 1 + "px",
            i.value = !0,
            be( () => {
                o.value = -(window.pageXOffset + 1) + "px",
                s.value = E.clientWidth + "px";
                let N = m.offsetHeight;
                m.offsetTop + N + 20 > d.value.offsetTop + d.value.offsetHeight && (n.value = -(N + E.offsetHeight) + "px")
            }
            )
        }
        ;
        return (E, m) => {
            const N = y("magic-icon");
            return v(),
            k("div", {
                class: ve([{
                    inputable: e.inputable,
                    border: e.border
                }, "magic-select not-select"]),
                style: Ve({
                    width: e.width
                }),
                onClick: m[2] || (m[2] = ye(C => f(E.$refs.container, E.$refs.selectList), ["stop"])),
                ref: "container"
            }, [e.inputable ? X("", !0) : (v(),
            k("span", zr, F(h(l)), 1)), e.inputable ? gt((v(),
            k("input", {
                key: 1,
                ref: "input",
                "onUpdate:modelValue": m[0] || (m[0] = C => un(r) ? r.value = C : null),
                autocomplete: "off",
                type: "text",
                onInput: m[1] || (m[1] = C => u(C.target.value)),
                placeholder: e.placeholder
            }, null, 40, Yr)), [[Yn, h(r)]]) : X("", !0), gt(R("ul", {
                style: Ve({
                    width: s.value,
                    marginTop: n.value,
                    marginLeft: o.value
                }),
                ref: "selectList"
            }, [(v(!0),
            k(te, null, fe(e.options, C => (v(),
            k("li", {
                key: C.value,
                onClick: ye(x => u(C.value), ["stop"])
            }, F(C.text), 9, qr))), 128))], 4), [[Mt, i.value]]), _(N, {
                icon: "arrow-bottom"
            })], 6)
        }
    }
};
var Wr = q(Kr, [["__scopeId", "data-v-9b6dc9a6"]])
  , Xr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Wr
}, Symbol.toStringTag, {
    value: "Module"
}));
const Jr = ["placeholder", "value"]
  , Qr = {
    __name: "magic-textarea",
    props: {
        value: String,
        placeholder: String
    },
    setup(e) {
        return (t, a) => (v(),
        k("textarea", {
            class: "magic-textarea",
            placeholder: e.placeholder,
            value: e.value,
            onInput: a[0] || (a[0] = n => t.$emit("update:value", n.target.value))
        }, null, 40, Jr))
    }
};
var Zr = q(Qr, [["__scopeId", "data-v-ca6693f6"]])
  , el = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Zr
}, Symbol.toStringTag, {
    value: "Module"
}));
const tl = {
    __name: "magic-avatar-group",
    props: {
        users: Array,
        max: Number,
        size: {
            type: Number,
            default: 22
        }
    },
    setup(e) {
        const t = e
          , a = _e( () => ({
            height: t.size + "px",
            lineHeight: t.size + "px"
        }))
          , n = _e( () => t.users.slice(0, t.max || t.users.length));
        return (i, s) => {
            const o = y("magic-avatar");
            return t.users && t.users.length > 0 ? (v(),
            k("div", {
                key: 0,
                class: "magic-avatar-group",
                style: Ve(h(a))
            }, [(v(!0),
            k(te, null, fe(h(n), (r, l) => (v(),
            V(o, {
                key: l,
                user: r,
                size: e.size
            }, null, 8, ["user", "size"]))), 128)), t.users.length > h(n).length ? (v(),
            V(o, {
                key: 0,
                text: `${e.max}+`,
                size: e.size
            }, null, 8, ["text", "size"])) : X("", !0)], 4)) : X("", !0)
        }
    }
};
var al = q(tl, [["__scopeId", "data-v-511f7f80"]])
  , nl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: al
}, Symbol.toStringTag, {
    value: "Module"
}));
const il = ["title"]
  , sl = {
    __name: "magic-avatar",
    props: {
        user: Object,
        text: String,
        size: {
            type: Number,
            default: 22
        }
    },
    setup(e) {
        const t = e
          , a = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#f1c40f", "#e67e22", "#e74c3c", "#eca0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"]
          , n = _e( () => ({
            width: t.size + "px",
            height: t.size + "px",
            lineHeight: t.size + "px",
            borderRadius: t.size / 2 + "px",
            backgroundColor: t.text && "#bdc3c7" || a[Ki(`${t.user.cid}`) % a.length]
        }))
          , i = _e( () => t.text || t.user.username.substring(0, 1))
          , s = _e( () => t.user ? `${c("message.username")}\uFF1A${t.user.username}
IP\uFF1A${t.user.ip || "unknown"}` : void 0);
        return (o, r) => (v(),
        k("div", {
            class: "magic-avatar",
            style: Ve(h(n)),
            title: h(s)
        }, F(h(i)), 13, il))
    }
};
var ol = q(sl, [["__scopeId", "data-v-73f02f44"]])
  , rl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ol
}, Symbol.toStringTag, {
    value: "Module"
}));
const ll = ["width"]
  , cl = ["x", "fill"]
  , ul = {
    __name: "magic-text-icon",
    props: {
        icon: String | Array
    },
    setup(e) {
        const t = e
          , a = {
            GET: "#0cbb52",
            POST: "#FFB400",
            DELETE: ["DEL", "#EB2013"],
            PUT: "#097BED",
            function: ["Fn", "#9012FE"]
        }
          , n = _e( () => {
            let i = t.icon
              , s = Array.isArray(i);
            s || (i = a[t.icon],
            s = i !== void 0 && Array.isArray(i));
            const o = s ? i[0] : t.icon
              , r = o.length * 9
              , l = s ? i[1] : i || "var(--main-icon-color)";
            return {
                width: r,
                color: l,
                text: o
            }
        }
        );
        return (i, s) => (v(),
        k("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: h(n).width,
            height: "12",
            "font-size": "10",
            "font-weight": "bolder",
            "font-family": "inherit"
        }, [R("text", {
            x: h(n).width / 2,
            y: "8",
            fill: h(n).color,
            style: {
                "dominant-baseline": "middle",
                "text-anchor": "middle"
            }
        }, F(h(n).text), 9, cl)], 8, ll))
    }
};
var dl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ul
}, Symbol.toStringTag, {
    value: "Module"
}));
const pl = {
    class: "magic-api-body"
}
  , _l = {
    __name: "magic-api-body",
    props: {
        opened: Object
    },
    setup(e) {
        const t = U(ee("magic-api-request-body"))
          , a = [{
            title: "Json",
            selected: !0,
            selectable: !0,
            icon: "json",
            onSelect: () => t.value = ee("magic-api-request-body")
        }, {
            title: c("message.view"),
            selectable: !0,
            icon: "structure",
            onSelect: () => t.value = ee("magic-api-request-structure")
        }];
        return (n, i) => {
            const s = y("magic-panel-toolbar");
            return v(),
            k("div", pl, [_(s, {
                toolbars: a
            }), R("div", null, [(v(),
            V(ee(t.value)))])])
        }
    }
};
var hl = q(_l, [["__scopeId", "data-v-25300c90"]])
  , fl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: hl
}, Symbol.toStringTag, {
    value: "Module"
}));
const gl = {
    __name: "magic-api-description",
    setup(e) {
        const t = oe("info");
        return (a, n) => {
            const i = y("magic-textarea");
            return v(),
            V(i, {
                value: h(t).description,
                "onUpdate:value": n[0] || (n[0] = s => h(t).description = s)
            }, null, 8, ["value"])
        }
    }
};
var ml = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: gl
}, Symbol.toStringTag, {
    value: "Module"
}));
const vl = {
    class: "magic-api-group"
}
  , bl = {
    __name: "magic-api-group",
    setup(e) {
        const t = oe("info")
          , a = [{
            title: c("api.navbars.path"),
            component: ee("magic-api-path")
        }, {
            title: c("api.navbars.groupOption"),
            component: ee("magic-api-option")
        }]
          , n = () => {
            const i = t.value;
            Y.sendJson("/resource/folder/save", {
                id: i.id,
                name: i.name,
                parentId: i.parentId,
                type: i.type,
                path: i.path,
                paths: i.paths,
                options: i.options
            })
        }
        ;
        return (i, s) => {
            const o = y("magic-input")
              , r = y("magic-button")
              , l = y("magic-navbar-item")
              , u = y("magic-navbar");
            return v(),
            k(te, null, [R("div", vl, [R("form", null, [R("label", null, F(h(c)("resource.form.groupName")), 1), _(o, {
                value: h(t).name,
                "onUpdate:value": s[0] || (s[0] = d => h(t).name = d),
                placeholder: h(c)("resource.form.placeholder.name", h(c)("api.name")),
                width: "250px"
            }, null, 8, ["value", "placeholder"]), R("label", null, F(h(c)("resource.form.groupPath")), 1), _(o, {
                value: h(t).path,
                "onUpdate:value": s[1] || (s[1] = d => h(t).path = d),
                placeholder: h(c)("resource.form.placeholder.path", h(c)("api.name")),
                width: "auto",
                style: {
                    flex: "1"
                }
            }, null, 8, ["value", "placeholder"]), _(r, {
                value: h(c)("message.save"),
                onOnClick: n
            }, null, 8, ["value"])])]), _(u, {
                direction: "horizontal",
                ref: "navbar",
                style: {
                    flex: "1"
                },
                "allow-close": !1
            }, {
                default: w( () => [(v(),
                k(te, null, fe(a, (d, g) => _(l, mt({
                    key: g
                }, d), {
                    default: w( () => [(v(),
                    V(ee(d.component)))]),
                    _: 2
                }, 1040)), 64))]),
                _: 1
            }, 512)], 64)
        }
    }
};
var El = q(bl, [["__scopeId", "data-v-07a9bc9f"]])
  , yl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: El
}, Symbol.toStringTag, {
    value: "Module"
}));
const Tl = {
    class: "magic-panel-api"
}
  , Sl = {
    __name: "magic-api-header",
    setup(e) {
        const t = oe("info")
          , a = U(-1);
        return (n, i) => {
            const s = y("magic-panel-common-toolbar")
              , o = y("magic-checkbox")
              , r = y("magic-table-column")
              , l = y("magic-input")
              , u = y("magic-select")
              , d = y("magic-table");
            return v(),
            k("div", Tl, [_(s, {
                index: a.value,
                "onUpdate:index": i[0] || (i[0] = g => a.value = g),
                value: h(t).headers
            }, null, 8, ["index", "value"]), _(d, {
                data: h(t).headers,
                border: "",
                onClickRow: i[1] || (i[1] = g => a.value = g),
                align: "center"
            }, {
                default: w( () => [_(r, {
                    title: h(c)("message.required"),
                    width: "65"
                }, {
                    default: w( ({row: g}) => [_(o, {
                        value: g.required,
                        "onUpdate:value": f => g.required = f
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: "Key"
                }, {
                    default: w( ({row: g}) => [_(l, {
                        value: g.name,
                        "onUpdate:value": f => g.name = f,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }), _(r, {
                    title: "Value"
                }, {
                    default: w( ({row: g}) => [_(l, {
                        value: g.value,
                        "onUpdate:value": f => g.value = f,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }), _(r, {
                    title: h(c)("message.parameterType"),
                    width: "135"
                }, {
                    default: w( ({row: g}) => [_(u, {
                        options: n.$REQUEST_SIMPLE_TYPES,
                        value: g.dataType,
                        "onUpdate:value": f => g.dataType = f,
                        "default-select": n.$DEFAULT_REQUEST_SIMPLE_TYPE,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.defaultValue")
                }, {
                    default: w( ({row: g}) => [_(l, {
                        value: g.defaultValue,
                        "onUpdate:value": f => g.defaultValue = f,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.validateType"),
                    width: "115"
                }, {
                    default: w( ({row: g}) => [_(u, {
                        options: n.$VALIDATE_TYPES,
                        value: g.validateType,
                        "onUpdate:value": f => g.validateType = f,
                        "default-select": n.$DEFAULT_VALIDATE_TYPE,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.expression"),
                    width: "220"
                }, {
                    default: w( ({row: g}) => [_(l, {
                        value: g.expression,
                        "onUpdate:value": f => g.expression = f,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.validate"),
                    width: "165"
                }, {
                    default: w( ({row: g}) => [_(l, {
                        value: g.error,
                        "onUpdate:value": f => g.error = f,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.description"),
                    flex: "2"
                }, {
                    default: w( ({row: g}) => [_(l, {
                        value: g.description,
                        "onUpdate:value": f => g.description = f,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])])
        }
    }
};
var xl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Sl
}, Symbol.toStringTag, {
    value: "Module"
}));
const Ol = {
    class: "magic-api-info"
}
  , Rl = {
    __name: "magic-api-info",
    setup(e) {
        const t = oe("info")
          , a = [{
            title: c("api.navbars.parameter"),
            component: ee("magic-api-parameter")
        }, {
            title: c("api.navbars.header"),
            component: ee("magic-api-header")
        }, {
            title: c("api.navbars.path"),
            component: ee("magic-api-path")
        }, {
            title: c("api.navbars.body"),
            component: ee("magic-api-body")
        }, {
            title: c("api.navbars.option"),
            component: ee("magic-api-option")
        }, {
            title: c("api.navbars.description"),
            component: ee("magic-api-description")
        }];
        return (n, i) => {
            const s = y("magic-select")
              , o = y("magic-input")
              , r = y("magic-navbar-item")
              , l = y("magic-navbar");
            return v(),
            k(te, null, [R("div", Ol, [R("form", null, [R("label", null, F(h(c)("api.form.method")), 1), _(s, {
                width: "100px",
                options: n.$REQUEST_METHODS,
                "default-select": n.$DEFAULT_REQUEST_METHOD,
                value: h(t).method,
                "onUpdate:value": i[0] || (i[0] = u => h(t).method = u)
            }, null, 8, ["options", "default-select", "value"]), R("label", null, F(h(c)("api.form.name")), 1), _(o, {
                value: h(t).name,
                "onUpdate:value": i[1] || (i[1] = u => h(t).name = u),
                placeholder: h(c)("api.form.placeholder.name"),
                width: "200px"
            }, null, 8, ["value", "placeholder"]), R("label", null, F(h(c)("api.form.path")), 1), _(o, {
                value: h(t).path,
                "onUpdate:value": i[2] || (i[2] = u => h(t).path = u),
                placeholder: h(c)("api.form.placeholder.path"),
                width: "auto",
                style: {
                    flex: "1"
                }
            }, null, 8, ["value", "placeholder"])])]), _(l, {
                direction: "horizontal",
                ref: "navbar",
                style: {
                    flex: "1"
                },
                "allow-close": !1,
                "tooltip-direction": "bottom"
            }, {
                default: w( () => [(v(),
                k(te, null, fe(a, (u, d) => _(r, mt({
                    key: d
                }, u), {
                    default: w( () => [(v(),
                    V(ee(u.component)))]),
                    _: 2
                }, 1040)), 64))]),
                _: 1
            }, 512)], 64)
        }
    }
};
var Al = q(Rl, [["__scopeId", "data-v-31699d76"]])
  , Cl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Al
}, Symbol.toStringTag, {
    value: "Module"
}));
const Il = {
    class: "magic-panel-api"
}
  , kl = {
    __name: "magic-api-option",
    setup(e) {
        const t = oe("info")
          , a = oe("options") || []
          , n = _e( () => a.map(o => ({
            text: o[0],
            value: o[0],
            description: o[1],
            defaultValue: o[2]
        })))
          , i = U(-1)
          , s = (o, r) => {
            const l = a.find(u => u[0] === o);
            l && (r.description = l[1] || "",
            r.value = l[2] || "")
        }
        ;
        return (o, r) => {
            const l = y("magic-panel-common-toolbar")
              , u = y("magic-select")
              , d = y("magic-table-column")
              , g = y("magic-input")
              , f = y("magic-table");
            return v(),
            k("div", Il, [_(l, {
                index: i.value,
                "onUpdate:index": r[0] || (r[0] = E => i.value = E),
                value: h(t).options
            }, null, 8, ["index", "value"]), _(f, {
                data: h(t).options,
                border: "",
                onClickRow: r[1] || (r[1] = E => i.value = E)
            }, {
                default: w( () => [_(d, {
                    title: "Key",
                    width: "20%"
                }, {
                    default: w( ({row: E}) => [_(u, {
                        options: h(n),
                        value: E.name,
                        "onUpdate:value": m => E.name = m,
                        "default-select": o.$DEFAULT_REQUEST_SIMPLE_TYPE,
                        border: !1,
                        inputable: "",
                        onSelect: m => s(m, E)
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select", "onSelect"])]),
                    _: 1
                }), _(d, {
                    title: "Value",
                    width: "60%"
                }, {
                    default: w( ({row: E}) => [_(g, {
                        value: E.value,
                        "onUpdate:value": m => E.value = m,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }), _(d, {
                    title: h(c)("message.description"),
                    width: "20%"
                }, {
                    default: w( ({row: E}) => [_(g, {
                        value: E.description,
                        "onUpdate:value": m => E.description = m,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])])
        }
    }
};
var Ll = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: kl
}, Symbol.toStringTag, {
    value: "Module"
}));
const Nl = {
    class: "magic-panel-api"
}
  , wl = {
    __name: "magic-api-parameter",
    setup(e) {
        const t = U(-1)
          , a = oe("info");
        return (n, i) => {
            const s = y("magic-panel-common-toolbar")
              , o = y("magic-checkbox")
              , r = y("magic-table-column")
              , l = y("magic-input")
              , u = y("magic-file")
              , d = y("magic-select")
              , g = y("magic-table");
            return v(),
            k("div", Nl, [_(s, {
                index: t.value,
                "onUpdate:index": i[0] || (i[0] = f => t.value = f),
                value: h(a).parameters
            }, null, 8, ["index", "value"]), _(g, {
                data: h(a).parameters,
                border: "",
                onClickRow: i[1] || (i[1] = f => t.value = f),
                align: "center"
            }, {
                default: w( () => [_(r, {
                    title: h(c)("message.required"),
                    width: "65"
                }, {
                    default: w( ({row: f}) => [_(o, {
                        value: f.required,
                        "onUpdate:value": E => f.required = E
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: "Key"
                }, {
                    default: w( ({row: f}) => [_(l, {
                        value: f.name,
                        "onUpdate:value": E => f.name = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }), _(r, {
                    title: "Value"
                }, {
                    default: w( ({row: f}) => [f.dataType === "MultipartFile" ? (v(),
                    V(u, {
                        key: 0,
                        value: f.value,
                        "onUpdate:value": E => f.value = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])) : f.dataType === "MultipartFiles" ? (v(),
                    V(u, {
                        key: 1,
                        value: f.value,
                        "onUpdate:value": E => f.value = E,
                        border: !1,
                        multiple: ""
                    }, null, 8, ["value", "onUpdate:value"])) : (v(),
                    V(l, {
                        key: 2,
                        value: f.value,
                        "onUpdate:value": E => f.value = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"]))]),
                    _: 1
                }), _(r, {
                    title: h(c)("message.parameterType"),
                    width: "135"
                }, {
                    default: w( ({row: f}) => [_(d, {
                        options: n.$REQUEST_PARAMETER_TYPES,
                        value: f.dataType,
                        "onUpdate:value": E => f.dataType = E,
                        "default-select": n.$DEFAULT_REQUEST_PARAMETER_TYPE,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.defaultValue")
                }, {
                    default: w( ({row: f}) => [_(l, {
                        value: f.defaultValue,
                        "onUpdate:value": E => f.defaultValue = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.validateType"),
                    width: "115"
                }, {
                    default: w( ({row: f}) => [_(d, {
                        options: n.$VALIDATE_TYPES,
                        value: f.validateType,
                        "onUpdate:value": E => f.validateType = E,
                        "default-select": n.$DEFAULT_VALIDATE_TYPE,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.expression"),
                    width: "220"
                }, {
                    default: w( ({row: f}) => [_(l, {
                        value: f.expression,
                        "onUpdate:value": E => f.expression = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.validate"),
                    width: "165"
                }, {
                    default: w( ({row: f}) => [_(l, {
                        value: f.error,
                        "onUpdate:value": E => f.error = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.description"),
                    flex: "2"
                }, {
                    default: w( ({row: f}) => [_(l, {
                        value: f.description,
                        "onUpdate:value": E => f.description = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])])
        }
    }
};
var Dl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: wl
}, Symbol.toStringTag, {
    value: "Module"
}));
const Ml = {
    class: "magic-panel-api"
}
  , Pl = {
    __name: "magic-api-path",
    setup(e) {
        const t = U(-1)
          , a = oe("info");
        return (n, i) => {
            const s = y("magic-panel-common-toolbar")
              , o = y("magic-input")
              , r = y("magic-table-column")
              , l = y("magic-select")
              , u = y("magic-table");
            return v(),
            k("div", Ml, [_(s, {
                index: t.value,
                "onUpdate:index": i[0] || (i[0] = d => t.value = d),
                value: h(a).paths
            }, null, 8, ["index", "value"]), _(u, {
                data: h(a).paths,
                border: "",
                onClickRow: i[1] || (i[1] = d => t.value = d),
                align: "center"
            }, {
                default: w( () => [_(r, {
                    title: "Key"
                }, {
                    default: w( ({row: d}) => [_(o, {
                        value: d.name,
                        "onUpdate:value": g => d.name = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }), _(r, {
                    title: "Value"
                }, {
                    default: w( ({row: d}) => [_(o, {
                        value: d.value,
                        "onUpdate:value": g => d.value = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }), _(r, {
                    title: h(c)("message.parameterType"),
                    width: "135"
                }, {
                    default: w( ({row: d}) => [_(l, {
                        options: n.$REQUEST_SIMPLE_TYPES,
                        value: d.dataType,
                        "onUpdate:value": g => d.dataType = g,
                        "default-select": n.$DEFAULT_REQUEST_SIMPLE_TYPE,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.validateType"),
                    width: "115"
                }, {
                    default: w( ({row: d}) => [_(l, {
                        options: n.$VALIDATE_TYPES,
                        value: d.validateType,
                        "onUpdate:value": g => d.validateType = g,
                        "default-select": n.$DEFAULT_VALIDATE_TYPE,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.expression"),
                    width: "220"
                }, {
                    default: w( ({row: d}) => [_(o, {
                        value: d.expression,
                        "onUpdate:value": g => d.expression = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.validate"),
                    width: "165"
                }, {
                    default: w( ({row: d}) => [_(o, {
                        value: d.error,
                        "onUpdate:value": g => d.error = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.description"),
                    flex: "2"
                }, {
                    default: w( ({row: d}) => [_(o, {
                        value: d.description,
                        "onUpdate:value": g => d.description = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])])
        }
    }
};
var Ul = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pl
}, Symbol.toStringTag, {
    value: "Module"
}));
const $l = {
    __name: "magic-api-request-body",
    setup(e) {
        const t = oe("info")
          , a = oe("opened")
          , n = i => {
            if (i.isFlush)
                return;
            const s = Nn(t.value.requestBody, t.value.requestBodyDefinition);
            s && Ma(t.value.requestBodyDefinition, s) && T.$emit($.NOTIFY, {
                title: c("message.tips"),
                id: "requestBodyStructure",
                icon: "info",
                content: c("api.structure.content", "RequestBody"),
                buttons: [{
                    title: c("api.structure.ok"),
                    onClick: () => {
                        t.value.requestBodyDefinition = s,
                        a.value.requestBodyTree = Qt(s)
                    }
                }, {
                    title: c("message.cancel"),
                    onClick: () => {}
                }]
            })
        }
        ;
        return (i, s) => {
            const o = y("magic-monaco-editor");
            return v(),
            V(o, {
                value: h(t).requestBody,
                "onUpdate:value": s[0] || (s[0] = r => h(t).requestBody = r),
                language: "json",
                onChange: n
            }, null, 8, ["value"])
        }
    }
};
var Fl = q($l, [["__scopeId", "data-v-7f02b65d"]])
  , Bl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Fl
}, Symbol.toStringTag, {
    value: "Module"
}));
const Hl = ["onClick"]
  , jl = ["title"]
  , Vl = {
    key: 0,
    align: "center",
    style: {
        flex: "1"
    }
}
  , Gl = {
    key: 1,
    align: "center",
    style: {
        flex: "1"
    }
}
  , zl = {
    __name: "magic-api-request-structure",
    setup(e) {
        const t = oe("opened")
          , a = _e( () => {
            var i, s;
            return !t.value.requestBodyTree && ((s = (i = t.value) == null ? void 0 : i.item) == null ? void 0 : s.requestBodyDefinition) && (t.value.requestBodyTree = Qt(t.value.item.requestBodyDefinition)),
            (t.value.requestBodyTree || []).filter(o => o.display)
        }
        )
          , n = i => {
            const s = t.value.requestBodyTree.findIndex(r => r === i)
              , o = i.level;
            i.expand = !i.expand;
            for (let r = s + 1, l = t.value.requestBodyTree.length; r < l; r++) {
                const u = t.value.requestBodyTree[r];
                if (u.level > o)
                    u.display = i.expand;
                else
                    break
            }
        }
        ;
        return (i, s) => {
            const o = y("magic-icon")
              , r = y("magic-table-column")
              , l = y("magic-checkbox")
              , u = y("magic-select")
              , d = y("magic-input")
              , g = y("magic-table");
            return v(),
            V(g, {
                data: h(a),
                border: ""
            }, {
                default: w( () => [_(r, {
                    title: h(c)("api.field")
                }, {
                    default: w( ({row: f}) => [R("span", {
                        style: Ve({
                            paddingLeft: `${(f.level + (f.folder ? 0 : 1)) * 16}px`
                        }),
                        onClick: E => n(f)
                    }, [f.folder ? (v(),
                    V(o, {
                        key: 0,
                        icon: f.expand ? "arrow-bottom" : "arrow-right"
                    }, null, 8, ["icon"])) : X("", !0)], 12, Hl), R("span", {
                        title: f.name || "-"
                    }, F(f.name || "-"), 9, jl)]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.required"),
                    width: "65"
                }, {
                    default: w( ({row: f}) => [_(l, {
                        value: f.node.required,
                        "onUpdate:value": E => f.node.required = E
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.type"),
                    width: "80"
                }, {
                    default: w( ({row: f}) => [_(u, {
                        options: i.$BODY_DATA_TYPES,
                        value: f.node.dataType,
                        "onUpdate:value": E => f.node.dataType = E,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: "Value",
                    flex: "2"
                }, {
                    default: w( ({row: f}) => {
                        var E;
                        return [f.folder ? (v(),
                        k("p", Vl, "-")) : (v(),
                        k("span", {
                            key: 1,
                            class: ve(["magic-data-type", (E = f.node.dataType) == null ? void 0 : E.toLowerCase()])
                        }, F(f.node.value), 3))]
                    }
                    ),
                    _: 1
                }), _(r, {
                    title: h(c)("message.defaultValue")
                }, {
                    default: w( ({row: f}) => [_(d, {
                        value: f.node.defaultValue,
                        "onUpdate:value": E => f.node.defaultValue = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.validateType"),
                    width: "115"
                }, {
                    default: w( ({row: f}) => [_(u, {
                        options: i.$VALIDATE_TYPES,
                        value: f.node.validateType,
                        "onUpdate:value": E => f.node.validateType = E,
                        "default-select": i.$DEFAULT_VALIDATE_TYPE,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.expression")
                }, {
                    default: w( ({row: f}) => [_(d, {
                        value: f.node.expression,
                        "onUpdate:value": E => f.node.expression = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("api.validate")
                }, {
                    default: w( ({row: f}) => [_(d, {
                        value: f.node.error,
                        "onUpdate:value": E => f.node.error = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.description")
                }, {
                    default: w( ({row: f}) => [f.name ? (v(),
                    V(d, {
                        key: 0,
                        value: f.node.description,
                        "onUpdate:value": E => f.node.description = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])) : (v(),
                    k("p", Gl, "-"))]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])
        }
    }
};
var Yl = q(zl, [["__scopeId", "data-v-bda6618c"]])
  , ql = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Yl
}, Symbol.toStringTag, {
    value: "Module"
}));
const Kl = ["src"]
  , Wl = {
    __name: "magic-api-response-body",
    setup(e) {
        const t = oe("info")
          , a = oe("opened")
          , n = U(null)
          , i = oe("ELEMENT_ROOT")
          , s = _e( () => t.value.responseBody || "")
          , o = _e( () => {
            if (a.value.responseBlob) {
                const l = a.value.responseHeaders["content-disposition"];
                if (l) {
                    const u = l.replace(/.*filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/, "$1");
                    Da(a.value.responseBlobValue, u);
                    return
                }
                return URL.createObjectURL(a.value.responseBlobValue)
            }
        }
        )
          , r = l => {
            const u = getComputedStyle(i.value)
              , d = n.value.contentWindow.document.body.style;
            d.color = u.getPropertyValue("--main-color"),
            d.backgroundColor = u.getPropertyValue("--main-background-color")
        }
        ;
        return (l, u) => {
            const d = y("magic-monaco-editor")
              , g = y("magic-empty");
            return h(a).responseBlob ? h(o) ? (v(),
            k("iframe", {
                key: 1,
                src: h(o),
                onLoad: r,
                ref_key: "iframe",
                ref: n
            }, null, 40, Kl)) : (v(),
            V(g, {
                key: 2,
                text: h(c)("message.empty", h(c)("message.responseBody"))
            }, null, 8, ["text"])) : (v(),
            V(d, {
                key: 0,
                value: h(s),
                "onUpdate:value": u[0] || (u[0] = f => un(s) ? s.value = f : null),
                language: "json",
                readonly: !0
            }, null, 8, ["value"]))
        }
    }
};
var Xl = q(Wl, [["__scopeId", "data-v-27b4e47a"]])
  , Jl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Xl
}, Symbol.toStringTag, {
    value: "Module"
}));
const Ql = ["title"]
  , Zl = ["title"]
  , ec = {
    __name: "magic-api-response-header",
    setup(e) {
        const t = oe("opened")
          , a = _e( () => Object.keys(t.value.responseHeaders || {}).map(n => ({
            key: n,
            value: t.value.responseHeaders[n]
        })));
        return (n, i) => {
            const s = y("magic-table-column")
              , o = y("magic-table");
            return v(),
            V(o, {
                data: h(a),
                border: ""
            }, {
                default: w( () => [_(s, {
                    title: "Key"
                }, {
                    default: w( ({row: r}) => [R("span", {
                        title: r.key
                    }, F(r.key), 9, Ql)]),
                    _: 1
                }), _(s, {
                    title: "Value"
                }, {
                    default: w( ({row: r}) => [R("span", {
                        title: r.value
                    }, F(r.value), 9, Zl)]),
                    _: 1
                })]),
                _: 1
            }, 8, ["data"])
        }
    }
};
var tc = q(ec, [["__scopeId", "data-v-76813707"]])
  , ac = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tc
}, Symbol.toStringTag, {
    value: "Module"
}));
const nc = ["onClick"]
  , ic = {
    key: 0,
    align: "center",
    style: {
        flex: "1"
    }
}
  , sc = {
    key: 1,
    align: "center",
    style: {
        flex: "1"
    }
}
  , oc = {
    __name: "magic-api-response-structure",
    setup(e) {
        const t = oe("opened")
          , a = i => {
            const s = t.value.responseBodyTree.findIndex(r => r === i)
              , o = i.level;
            i.expand = !i.expand;
            for (let r = s + 1, l = t.value.responseBodyTree.length; r < l; r++) {
                const u = t.value.responseBodyTree[r];
                if (u.level > o)
                    u.display = i.expand;
                else
                    break
            }
        }
          , n = _e( () => {
            var i, s;
            return !t.value.responseBodyTree && ((s = (i = t.value) == null ? void 0 : i.item) == null ? void 0 : s.responseBodyDefinition) && (t.value.responseBodyTree = Qt(t.value.item.responseBodyDefinition)),
            (t.value.responseBodyTree || []).filter(o => o.display)
        }
        );
        return (i, s) => {
            const o = y("magic-icon")
              , r = y("magic-table-column")
              , l = y("magic-select")
              , u = y("magic-input")
              , d = y("magic-table")
              , g = y("magic-empty");
            return h(n).length ? (v(),
            V(d, {
                key: 0,
                data: h(n),
                border: ""
            }, {
                default: w( () => [_(r, {
                    title: h(c)("api.field")
                }, {
                    default: w( ({row: f}) => [R("span", {
                        style: Ve({
                            paddingLeft: `${(f.level + (f.folder ? 0 : 1)) * 16}px`
                        }),
                        onClick: E => a(f)
                    }, [f.folder ? (v(),
                    V(o, {
                        key: 0,
                        icon: f.expand ? "arrow-bottom" : "arrow-right"
                    }, null, 8, ["icon"])) : X("", !0)], 12, nc), R("span", null, F(f.name || "-"), 1)]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.type"),
                    width: "80"
                }, {
                    default: w( ({row: f}) => [_(l, {
                        options: i.$BODY_DATA_TYPES,
                        value: f.node.dataType,
                        "onUpdate:value": E => f.node.dataType = E,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: "Value",
                    flex: "3"
                }, {
                    default: w( ({row: f}) => {
                        var E;
                        return [f.folder ? (v(),
                        k("p", ic, "-")) : (v(),
                        k("span", {
                            key: 1,
                            class: ve(["magic-data-type", (E = f.node.dataType) == null ? void 0 : E.toLowerCase()])
                        }, F(f.node.value), 3))]
                    }
                    ),
                    _: 1
                }), _(r, {
                    title: h(c)("message.description")
                }, {
                    default: w( ({row: f}) => [f.name ? (v(),
                    V(u, {
                        key: 0,
                        value: f.node.description,
                        "onUpdate:value": E => f.node.description = E,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])) : (v(),
                    k("p", sc, "-"))]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])) : (v(),
            V(g, {
                key: 1,
                text: h(c)("message.empty", h(c)("message.responseBody"))
            }, null, 8, ["text"]))
        }
    }
};
var rc = q(oc, [["__scopeId", "data-v-051e4f5a"]])
  , lc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: rc
}, Symbol.toStringTag, {
    value: "Module"
}));
const cc = {
    class: "magic-panel-api-response"
}
  , uc = {
    __name: "magic-api-response",
    props: {
        opened: Object
    },
    setup(e) {
        const t = [{
            title: c("message.responseBody"),
            component: ee("magic-api-response-body")
        }, {
            title: c("message.responseHeader"),
            component: ee("magic-api-response-header")
        }, {
            title: c("message.responseStructure"),
            component: ee("magic-api-response-structure")
        }];
        return (a, n) => {
            const i = y("magic-navbar-item")
              , s = y("magic-navbar");
            return v(),
            k("div", cc, [_(s, {
                direction: "horizontal",
                ref: "navbar",
                style: {
                    flex: "1"
                },
                "allow-close": !1,
                "tooltip-direction": "bottom"
            }, {
                default: w( () => [(v(),
                k(te, null, fe(t, (o, r) => _(i, {
                    key: r,
                    title: o.title
                }, {
                    default: w( () => [(v(),
                    V(qn, null, [(v(),
                    V(ee(o.component), {
                        opened: e.opened
                    }, null, 8, ["opened"]))], 1024))]),
                    _: 2
                }, 1032, ["title"])), 64))]),
                _: 1
            }, 512)])
        }
    }
};
var dc = q(uc, [["__scopeId", "data-v-1cf463a0"]])
  , pc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dc
}, Symbol.toStringTag, {
    value: "Module"
}));
const _c = {
    class: "magic-panel-global"
}
  , hc = {
    __name: "magic-global-header",
    setup(e) {
        const t = U(D.GLOBAL)
          , a = U(-1);
        return (n, i) => {
            const s = y("magic-panel-common-toolbar")
              , o = y("magic-input")
              , r = y("magic-table-column")
              , l = y("magic-table");
            return v(),
            k("div", _c, [_(s, {
                index: a.value,
                "onUpdate:index": i[0] || (i[0] = u => a.value = u),
                value: t.value.headers
            }, null, 8, ["index", "value"]), _(l, {
                data: t.value.headers,
                border: "",
                onClickRow: i[1] || (i[1] = u => a.value = u)
            }, {
                default: w( () => [_(r, {
                    title: "Key"
                }, {
                    default: w( ({row: u}) => [_(o, {
                        value: u.name,
                        "onUpdate:value": d => u.name = d,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }), _(r, {
                    title: "Value"
                }, {
                    default: w( ({row: u}) => [_(o, {
                        value: u.value,
                        "onUpdate:value": d => u.value = d,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["data"])])
        }
    }
};
var fc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: hc
}, Symbol.toStringTag, {
    value: "Module"
}));
const gc = {
    class: "magic-panel-global"
}
  , mc = {
    __name: "magic-global-parameter",
    setup(e) {
        const t = U(-1)
          , a = U(D.GLOBAL);
        return (n, i) => {
            const s = y("magic-panel-common-toolbar")
              , o = y("magic-input")
              , r = y("magic-table-column")
              , l = y("magic-file")
              , u = y("magic-table");
            return v(),
            k("div", gc, [_(s, {
                index: t.value,
                "onUpdate:index": i[0] || (i[0] = d => t.value = d),
                value: a.value.parameters
            }, null, 8, ["index", "value"]), _(u, {
                data: a.value.parameters,
                border: "",
                onClickRow: i[1] || (i[1] = d => t.value = d)
            }, {
                default: w( () => [_(r, {
                    title: "Key"
                }, {
                    default: w( ({row: d}) => [_(o, {
                        value: d.name,
                        "onUpdate:value": g => d.name = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }), _(r, {
                    title: "Value"
                }, {
                    default: w( ({row: d}) => [d.dataType === "MultipartFile" ? (v(),
                    V(l, {
                        key: 0,
                        value: d.value,
                        "onUpdate:value": g => d.value = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])) : d.dataType === "MultipartFiles" ? (v(),
                    V(l, {
                        key: 1,
                        value: d.value,
                        "onUpdate:value": g => d.value = g,
                        border: !1,
                        multiple: ""
                    }, null, 8, ["value", "onUpdate:value"])) : (v(),
                    V(o, {
                        key: 2,
                        value: d.value,
                        "onUpdate:value": g => d.value = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"]))]),
                    _: 1
                })]),
                _: 1
            }, 8, ["data"])])
        }
    }
};
var vc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mc
}, Symbol.toStringTag, {
    value: "Module"
}));
const bc = {
    class: "magic-global"
}
  , Ec = {
    __name: "magic-global",
    setup(e) {
        const t = [{
            title: "\u5168\u5C40\u8BF7\u6C42\u53C2\u6570",
            component: ee("magic-global-parameter")
        }, {
            title: "\u5168\u5C40\u8BF7\u6C42Header",
            component: ee("magic-global-header")
        }];
        return (a, n) => {
            const i = y("magic-navbar-item")
              , s = y("magic-navbar");
            return v(),
            k("div", bc, [_(s, {
                direction: "horizontal",
                ref: "navbar",
                style: {
                    flex: "1"
                },
                "allow-close": !1
            }, {
                default: w( () => [(v(),
                k(te, null, fe(t, (o, r) => _(i, mt({
                    key: r
                }, o), {
                    default: w( () => [(v(),
                    V(ee(o.component)))]),
                    _: 2
                }, 1040)), 64))]),
                _: 1
            }, 512)])
        }
    }
};
var yc = q(Ec, [["__scopeId", "data-v-03e7bbcc"]])
  , Tc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: yc
}, Symbol.toStringTag, {
    value: "Module"
}));
const Sc = {
    __name: "magic-panel-common-toolbar",
    props: {
        value: Array,
        index: Number
    },
    emits: ["update:index"],
    setup(e, {emit: t}) {
        const a = e
          , n = [{
            title: c("message.addRow"),
            icon: "plus",
            onClick() {
                a.value.push({}),
                t("update:index", a.value.length - 1)
            }
        }, {
            title: c("message.removeRow"),
            icon: "minus",
            onClick() {
                a.value.length > 0 && (a.value.splice(a.index == -1 ? a.value.length - 1 : a.index, 1),
                t("update:index", -1))
            }
        }];
        return (i, s) => {
            const o = y("magic-panel-toolbar");
            return v(),
            V(o, {
                toolbars: n
            })
        }
    }
};
var xc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Sc
}, Symbol.toStringTag, {
    value: "Module"
}));
const Oc = {
    class: "magic-panel-toolbar"
}
  , Rc = ["data-title", "data-tooltip-direction", "onClick", "title"]
  , Ac = {
    __name: "magic-panel-toolbar",
    props: {
        toolbars: Array,
        tooltipDirection: {
            type: String,
            default: "right"
        }
    },
    setup(e) {
        const t = e
          , a = U(t.toolbars)
          , n = i => {
            i.selectable ? i.disabled !== !0 && (t.toolbars.filter(s => s.selectable).forEach(s => s.selected = !1),
            i.selected = i.selected !== !0,
            i.onSelect && i.onSelect(i.selected)) : i.disabled !== !0 && i.onClick()
        }
        ;
        return (i, s) => {
            const o = y("magic-icon");
            return v(),
            k("ul", Oc, [(v(!0),
            k(te, null, fe(a.value, (r, l) => (v(),
            k("li", {
                key: l,
                "data-title": r.title,
                "data-tooltip-direction": e.tooltipDirection,
                onClick: ye(u => n(r), ["stop"]),
                class: ve({
                    disabled: r.disabled,
                    selected: r.selected
                }),
                title: "x" + r.selected
            }, [_(o, {
                icon: r.icon
            }, null, 8, ["icon"])], 10, Rc))), 128))])
        }
    }
};
var Cc = q(Ac, [["__scopeId", "data-v-332dea14"]])
  , Ic = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cc
}, Symbol.toStringTag, {
    value: "Module"
}));
const kc = {
    class: "magic-resource-choose"
}
  , Lc = {
    key: 0
}
  , Nc = {
    key: 2
}
  , wc = {
    __name: "magic-resource-choose",
    props: {
        value: [Array, Object],
        type: String,
        single: {
            type: Boolean,
            default: () => !1
        },
        file: {
            type: Boolean,
            default: () => !0
        }
    },
    emits: ["update:value"],
    setup(e, {expose: t, emit: a}) {
        const n = e
          , i = oe("resources")
          , s = oe("service")
          , o = U([])
          , r = () => {
            let m = []
              , N = C => {
                C.id.endsWith("-root") ? m.push({
                    type: "root",
                    id: C.type
                }) : m.push({
                    type: C.folder ? "group" : C.type,
                    id: C.id
                }),
                C.children && C.children.filter(x => x.selected).forEach(x => N(x))
            }
            ;
            o.value.filter(C => C.selected).forEach(C => N(C)),
            a("update:value", n.single ? m[0] : m)
        }
          , l = (m, N) => {
            let C = [];
            return m && m.filter(x => x.id).forEach(x => {
                var b;
                if (x.folder || n.file) {
                    if (x.folder)
                        x.icon = "list";
                    else {
                        const S = (b = s[N.type]) == null ? void 0 : b.getIcon;
                        x.icon = S && S(x) || N.icon,
                        x.textIcon = S !== void 0,
                        x.type = N.type
                    }
                    C.push(x)
                }
                x.folder && x.children && (x.children = l(x.children, N))
            }
            ),
            C
        }
          , u = m => {
            let N = m
              , C = []
              , x = b => {
                b.forEach(S => {
                    S.id === N ? (C.push(S),
                    N = S.parentId || S.groupId,
                    x(o.value)) : S.children && S.children.length > 0 && x(S.children)
                }
                )
            }
            ;
            return x(o.value),
            C
        }
          , d = (m, N) => {
            N !== void 0 && (m.selected = N);
            let C = x => {
                x.selected = n.single ? !1 : m.selected,
                x.checkedHalf = n.single ? !1 : !m.selected,
                x.children && x.children.forEach(b => C(b))
            }
            ;
            m.children && m.children.forEach(x => C(x)),
            m.folder && (m.checkedHalf = !1),
            u(m.folder ? m.parentId : m.groupId).forEach(x => {
                x.selected = n.single ? !1 : x.children.some(b => b.selected),
                x.checkedHalf = n.single ? !1 : x.children.some(b => !b.selected || b.checkedHalf)
            }
            ),
            n.single ? a("update:value", m.selected ? m : void 0) : r()
        }
          , g = m => d(m, !m.selected);
        return i().filter(m => !n.type || n.type === m.navbar.type).forEach(m => {
            const N = m.navbar.type
              , C = l(m.tree, m.navbar);
            C.forEach(x => {
                x.folder ? x.parentId = N + "-root" : x.groupId = N + "-root"
            }
            ),
            o.value.push({
                icon: m.navbar.icon,
                name: m.navbar.title,
                iconClass: "root",
                folder: !0,
                opened: !0,
                type: m.navbar.type,
                id: N + "-root",
                children: C
            })
        }
        ),
        t({
            selectAll: m => Ze(o.value, N => {
                N.checkedHalf = !1,
                N.selected = m,
                N.children && N.children.forEach(C => C.selected = m),
                r()
            }
            ),
            expand: m => Ze(o.value, N => {
                N.folder && (N.opened = m)
            }
            )
        }),
        (m, N) => {
            const C = y("magic-checkbox")
              , x = y("magic-icon")
              , b = y("magic-text-icon")
              , S = y("magic-tree");
            return v(),
            k("div", kc, [_(S, {
                data: o.value,
                sort: !1,
                onItemClick: g
            }, {
                folder: w( ({item: A}) => [_(C, {
                    value: A.selected,
                    "onUpdate:value": M => A.selected = M,
                    "checked-half": A.checkedHalf,
                    onChange: M => d(A)
                }, null, 8, ["value", "onUpdate:value", "checked-half", "onChange"]), _(x, {
                    icon: A.opened ? "arrow-bottom" : "arrow-right",
                    onClick: ye(M => A.opened = !A.opened, ["stop"])
                }, null, 8, ["icon", "onClick"]), _(x, {
                    icon: A.icon,
                    class: ve(A.iconClass)
                }, null, 8, ["icon", "class"]), R("label", null, F(A.name), 1), A.path ? (v(),
                k("span", Lc, "(" + F(A.path) + ")", 1)) : X("", !0)]),
                file: w( ({item: A}) => [_(C, {
                    value: A.selected,
                    "onUpdate:value": M => A.selected = M,
                    "checked-half": A.checkedHalf,
                    onChange: M => d(A)
                }, null, 8, ["value", "onUpdate:value", "checked-half", "onChange"]), A.textIcon ? (v(),
                V(b, {
                    key: 0,
                    icon: A.icon
                }, null, 8, ["icon"])) : (v(),
                V(x, {
                    key: 1,
                    icon: A.icon
                }, null, 8, ["icon"])), R("label", null, F(A.name), 1), A.path ? (v(),
                k("span", Nc, "(" + F(A.path) + ")", 1)) : X("", !0)]),
                _: 1
            }, 8, ["data"])])
        }
    }
};
var Dc = q(wc, [["__scopeId", "data-v-4852fc0e"]])
  , Mc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Dc
}, Symbol.toStringTag, {
    value: "Module"
}));
const Pc = {
    class: "magic-form-row"
}
  , Uc = {
    class: "magic-form-row"
}
  , $c = R("label", null, "Key", -1)
  , Fc = {
    class: "magic-form-row"
}
  , Bc = R("label", null, "URL", -1)
  , Hc = {
    class: "magic-form-row"
}
  , jc = {
    class: "magic-form-row"
}
  , Vc = {
    class: "magic-form-row"
}
  , Gc = {
    class: "magic-form-row"
}
  , zc = {
    class: "magic-form-row"
}
  , Yc = R("label", null, "maxRows", -1)
  , qc = {
    class: "magic-form-row"
}
  , Kc = {
    __name: "magic-datasource-datasource",
    props: {
        info: Object
    },
    setup(e) {
        const {info: t} = e
          , a = U(JSON.stringify(t.properties || {}));
        return et(a, n => {
            try {
                t.properties = JSON.parse(n)
            } catch {
                t.properties = {}
            }
        }
        ),
        (n, i) => {
            const s = y("magic-input")
              , o = y("magic-select")
              , r = y("magic-monaco-editor");
            return v(),
            k(te, null, [R("div", Pc, [R("label", null, F(h(c)("message.name")), 1), _(s, {
                value: e.info.name,
                "onUpdate:value": i[0] || (i[0] = l => e.info.name = l),
                placeholder: h(c)("datasource.form.placeholder.name")
            }, null, 8, ["value", "placeholder"])]), R("div", Uc, [$c, _(s, {
                value: e.info.key,
                "onUpdate:value": i[1] || (i[1] = l => e.info.key = l),
                placeholder: h(c)("datasource.form.placeholder.key")
            }, null, 8, ["value", "placeholder"])]), R("div", Fc, [Bc, _(s, {
                value: e.info.url,
                "onUpdate:value": i[2] || (i[2] = l => e.info.url = l),
                placeholder: h(c)("datasource.form.placeholder.url")
            }, null, 8, ["value", "placeholder"])]), R("div", Hc, [R("label", null, F(h(c)("message.username")), 1), _(s, {
                value: e.info.username,
                "onUpdate:value": i[3] || (i[3] = l => e.info.username = l),
                placeholder: h(c)("datasource.form.placeholder.username")
            }, null, 8, ["value", "placeholder"])]), R("div", jc, [R("label", null, F(h(c)("message.password")), 1), _(s, {
                value: e.info.password,
                "onUpdate:value": i[4] || (i[4] = l => e.info.password = l),
                type: "password",
                placeholder: h(c)("datasource.form.placeholder.password")
            }, null, 8, ["value", "placeholder"])]), R("div", Vc, [R("label", null, F(h(c)("datasource.form.driver")), 1), _(o, {
                inputable: "",
                value: e.info.driverClassName,
                "onUpdate:value": i[5] || (i[5] = l => e.info.driverClassName = l),
                width: "100%",
                options: h(D).JDBC_DRIVERS.map(l => ({
                    text: l,
                    value: l
                })),
                placeholder: h(c)("datasource.form.placeholder.driver")
            }, null, 8, ["value", "options", "placeholder"])]), R("div", Gc, [R("label", null, F(h(c)("datasource.form.type")), 1), _(o, {
                inputable: "",
                value: e.info.type,
                "onUpdate:value": i[6] || (i[6] = l => e.info.type = l),
                width: "100%",
                options: h(D).DATASOURCE_TYPES.map(l => ({
                    text: l,
                    value: l
                })),
                placeholder: h(c)("datasource.form.placeholder.type")
            }, null, 8, ["value", "options", "placeholder"])]), R("div", zc, [Yc, _(s, {
                value: e.info.maxRows,
                "onUpdate:value": i[7] || (i[7] = l => e.info.maxRows = l),
                placeholder: h(c)("datasource.form.placeholder.maxRows"),
                "default-value": -1,
                type: "number"
            }, null, 8, ["value", "placeholder"])]), R("div", qc, [R("label", null, F(h(c)("datasource.form.other")), 1), _(r, {
                language: "json",
                value: a.value,
                "onUpdate:value": i[8] || (i[8] = l => a.value = l),
                style: {
                    height: "150px"
                }
            }, null, 8, ["value"])])], 64)
        }
    }
};
var Wc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Kc
}, Symbol.toStringTag, {
    value: "Module"
}));
const Xc = {
    class: "magic-backup-file"
}
  , Jc = {
    class: "magic-backup-file-diff-container"
}
  , Qc = {
    __name: "magic-backup-file",
    props: {
        id: String
    },
    setup(e) {
        const t = e
          , a = oe("service")
          , n = U("")
          , i = U(!0)
          , s = U(!0)
          , o = We([])
          , r = U({})
          , l = U([])
          , u = U("")
          , d = () => {
            u.value = a[r.value.type].language || "magicscript";
            const m = [];
            s.value = !0,
            n.value || m.push(new Promise(N => Y.sendGet("/resource/file/" + t.id).success(C => n.value = C).end( () => N()))),
            m.push(new Promise(N => Y.sendGet("/backup", {
                id: t.id,
                timestamp: r.value.createDate
            }).success(C => r.value.script = C).end( () => N()))),
            Promise.all(m).then( () => {
                var N;
                s.value = !1,
                l.value = [r.value.script, (N = n.value) == null ? void 0 : N.script]
            }
            ).catch(N => {
                console.error(N),
                s.value = !1
            }
            )
        }
          , g = () => {
            i.value = !0,
            Y.sendGet("/backup/" + t.id).success(m => {
                m && m.length > 0 && (o.length = 0,
                o.push(...m),
                r.value = o[0] || {},
                r.value && d()),
                i.value = !1
            }
            )
        }
        ;
        g(),
        et( () => t.id, g);
        const f = () => {
            const m = `${r.value.name}(${qe(r.value.createDate)})`;
            Y.sendPost("/backup/rollback", {
                id: t.id,
                timestamp: r.value.createDate
            }).success(N => {
                N ? (me.alert(c("backup.rollbackSuccess", m)),
                T.status("backup.rollbackSuccess", !0, m),
                T.$emit($.REFRESH_RESOURCE, t.id)) : (me.alert(c("backup.rollbackFailed", m)),
                T.status("backup.rollbackFailed", !1, m))
            }
            )
        }
          , E = m => {
            r.value = o[m],
            d()
        }
        ;
        return (m, N) => {
            const C = y("magic-table-column")
              , x = y("magic-table")
              , b = y("magic-button")
              , S = y("magic-monaco-diff-editor")
              , A = y("magic-loading")
              , M = y("magic-empty");
            return v(),
            V(A, {
                loading: i.value
            }, {
                default: w( () => [R("div", Xc, [o.length > 0 ? (v(),
                k(te, {
                    key: 0
                }, [_(x, {
                    data: o,
                    border: !0,
                    onClickRow: E
                }, {
                    default: w( () => [_(C, {
                        title: h(c)("message.date"),
                        width: "160",
                        class: "selected"
                    }, {
                        default: w( ({row: I}) => [pe(F(h(qe)(I.createDate)), 1)]),
                        _: 1
                    }, 8, ["title"]), _(C, {
                        title: h(c)("history.operator"),
                        width: "100"
                    }, {
                        default: w( ({row: I}) => [pe(F(I.createBy || "guest"), 1)]),
                        _: 1
                    }, 8, ["title"])]),
                    _: 1
                }, 8, ["data"]), R("div", Jc, [R("ul", null, [R("li", null, [pe(F(h(qe)(r.value.createDate)) + " by " + F(r.value.createBy || "guest") + " ", 1), _(b, {
                    value: h(c)("backup.rollback"),
                    type: "active",
                    onClick: f
                }, null, 8, ["value"])]), R("li", null, [pe(F(h(c)("backup.current")), 1), n.value ? (v(),
                k(te, {
                    key: 0
                }, [pe("(" + F(h(qe)(n.value.updateTime || n.value.createTime)) + " by " + F(n.value.updateBy || n.value.createBy || "guest") + ")", 1)], 64)) : X("", !0)])]), s.value ? (v(),
                V(A, {
                    key: 1,
                    loading: s.value
                }, null, 8, ["loading"])) : (v(),
                V(S, {
                    key: 0,
                    value: l.value,
                    "onUpdate:value": N[0] || (N[0] = I => l.value = I),
                    language: u.value
                }, null, 8, ["value", "language"]))])], 64)) : (v(),
                V(M, {
                    key: 1,
                    text: h(c)("message.empty", h(c)("history.name"))
                }, null, 8, ["text"]))])]),
                _: 1
            }, 8, ["loading"])
        }
    }
};
var Zc = q(Qc, [["__scopeId", "data-v-ef606938"]])
  , eu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Zc
}, Symbol.toStringTag, {
    value: "Module"
}));
const tu = {
    class: "magic-backup"
}
  , au = {
    class: "magic-backup-diff-container"
}
  , nu = {
    class: "magic-backup-diff-header"
}
  , iu = {
    __name: "magic-backup",
    setup(e) {
        const t = ee("magic-backup-file")
          , a = U(!0)
          , n = [{
            icon: "refresh",
            title: c("message.refresh"),
            onClick() {
                m()
            }
        }, {
            icon: "copy",
            title: c("backup.full"),
            onClick() {
                Y.sendPost("/backup/full").success( () => {
                    T.status("backup.backupSuccess"),
                    m()
                }
                )
            }
        }]
          , i = U([])
          , s = U([])
          , o = U(!1)
          , r = U(!0)
          , l = U("")
          , u = U({})
          , d = U("magicscript");
        let g = !1, f = !1, E;
        const m = H => {
            a.value = !0,
            Y.sendGet("/backups", {
                timestamp: H
            }).success(L => {
                H ? s.value.push(...L) : s.value = L,
                (f = L.length >= 100) && (E = L[L.length - 1].createDate),
                a.value = !1
            }
            )
        }
          , N = oe("service")
          , C = U({})
          , x = H => {
            var L, j;
            return H.endsWith("-group") ? c("message.group", ((L = N[H.replace("-group", "")]) == null ? void 0 : L.name) || "Unknown") : H === "full" ? c("backup.full") : ((j = N[H]) == null ? void 0 : j.name) || H
        }
        ;
        let b = !1;
        T.$on($.LOAD_RESOURCES_FINISH, H => H || m());
        const S = () => {
            f && !g && m(E)
        }
        ;
        pt( () => {
            !b && D.LOGINED && m(),
            b = !0
        }
        );
        const {proxy: A} = bt()
          , M = (H, L) => {
            const j = []
              , ie = N[L.type];
            L.id !== "full" && !(L.type && L.type.endsWith("-group")) && !(ie && ie.requireScript === !1) && (j.push({
                icon: "difference",
                label: c("backup.difference"),
                onClick() {
                    l.value = qe(L.createDate),
                    o.value = !0,
                    r.value = !0,
                    d.value = N[L.type].language || "magicscript",
                    Promise.all([new Promise(se => Y.sendGet("/backup", {
                        id: L.id,
                        timestamp: L.createDate
                    }).success(J => se(J))), new Promise(se => Y.sendGet("/resource/file/" + L.id).success(J => se(J)))]).then(se => {
                        var J;
                        C.value = se[1],
                        u.value = L,
                        r.value = !1,
                        i.value = [se[0], (J = se[1]) == null ? void 0 : J.script]
                    }
                    ).catch(se => {
                        console.error(se),
                        o.value = !1
                    }
                    )
                }
            }),
            j.push({
                label: c("toolbars.history"),
                icon: "history",
                onClick: () => {
                    T.$emit($.ADD_FOOTER_TOOLBAR, {
                        component: Ue(t),
                        id: "backup-file",
                        icon: "history",
                        title: c("toolbars.viewHistory", L.name),
                        allowClose: !0,
                        data: {
                            id: L.id
                        }
                    })
                }
            })),
            (L.id === "full" || !L.type.endsWith("-group")) && j.push({
                icon: "rollback",
                label: c("backup.rollback"),
                onClick() {
                    const se = `${L.name}(${qe(L.createDate)})`;
                    me.confirm(c("backup.rollback"), c("backup.rollbackConfirm"), () => {
                        Y.sendPost("/backup/rollback", {
                            id: L.id,
                            timestamp: L.createDate
                        }).success(J => {
                            J ? (T.status("backup.rollbackSuccess", !0, se),
                            T.$emit($.LOAD_RESOURCES)) : (me.alert(c("backup.rollbackFailed", se)),
                            T.status("backup.rollbackFailed", !1, se))
                        }
                        )
                    }
                    )
                }
            }),
            j.length > 0 && A.$contextmenu({
                event: H,
                menus: j
            })
        }
          , I = () => {
            o.value = !1;
            const H = `${u.value.name}(${qe(u.value.createDate)})`;
            Y.sendPost("/backup/rollback", {
                id: u.value.id,
                timestamp: u.value.createDate
            }).success(L => {
                L ? (me.alert(c("backup.rollbackSuccess", H)),
                T.status("backup.rollbackSuccess", !0, H),
                T.$emit($.REFRESH_RESOURCE, u.value.id)) : (me.alert(c("backup.rollbackFailed", H)),
                T.status("backup.rollbackFailed", !1, H))
            }
            )
        }
        ;
        return (H, L) => {
            const j = y("magic-panel-toolbar")
              , ie = y("magic-loading")
              , se = y("magic-table-column")
              , J = y("magic-table")
              , Ee = y("magic-empty")
              , xe = y("magic-monaco-diff-editor")
              , Xe = y("magic-button")
              , St = y("magic-button-group")
              , Ne = y("magic-dialog");
            return v(),
            k(te, null, [R("div", tu, [_(j, {
                toolbars: n
            }), R("div", null, [_(ie, {
                loading: a.value
            }, null, 8, ["loading"]), s.value.length > 0 ? (v(),
            V(J, {
                key: 0,
                data: s.value,
                border: !0,
                onContextmenu: M,
                onLoadNext: S
            }, {
                default: w( () => [_(se, {
                    title: h(c)("message.date"),
                    width: "160"
                }, {
                    default: w( ({row: ke}) => [pe(F(h(qe)(ke.createDate)), 1)]),
                    _: 1
                }, 8, ["title"]), _(se, {
                    title: h(c)("message.type"),
                    width: "90"
                }, {
                    default: w( ({row: ke}) => [R("span", null, F(x(ke.type)), 1)]),
                    _: 1
                }, 8, ["title"]), _(se, {
                    title: h(c)("history.operator"),
                    width: "100"
                }, {
                    default: w( ({row: ke}) => [pe(F(ke.createBy || "guest"), 1)]),
                    _: 1
                }, 8, ["title"]), _(se, {
                    title: h(c)("message.name"),
                    align: "left"
                }, {
                    default: w( ({row: ke}) => [pe(F(ke.name), 1)]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])) : (v(),
            V(Ee, {
                key: 1,
                text: h(c)("message.empty", h(c)("history.name"))
            }, null, 8, ["text"]))])]), _(Ne, {
                value: o.value,
                "onUpdate:value": L[1] || (L[1] = ke => o.value = ke),
                title: h(c)("history.name"),
                width: "80%",
                maxWidth: "100%",
                top: "60px",
                height: "80%",
                className: "magic-dialog-diff"
            }, {
                default: w( () => [R("div", au, [R("div", nu, [R("div", null, F(l.value) + " by " + F(u.value.createBy || "guest"), 1), R("div", null, F(h(c)("backup.current")) + "(" + F(h(qe)(C.value.updateTime || C.value.createTime)) + " by " + F(C.value.updateBy || C.value.createBy || "guest") + ")", 1)]), r.value ? (v(),
                V(ie, {
                    key: 1,
                    loading: r.value
                }, null, 8, ["loading"])) : (v(),
                V(xe, {
                    key: 0,
                    value: i.value,
                    "onUpdate:value": L[0] || (L[0] = ke => i.value = ke),
                    language: d.value
                }, null, 8, ["value", "language"]))]), _(St, {
                    align: "right"
                }, {
                    default: w( () => [_(Xe, {
                        value: h(c)("backup.rollback"),
                        type: "active",
                        onClick: I
                    }, null, 8, ["value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["value", "title"])], 64)
        }
    }
};
var su = q(iu, [["__scopeId", "data-v-b15945c0"]])
  , ou = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: su
}, Symbol.toStringTag, {
    value: "Module"
}));
const lt = e => (Aa("data-v-71b796dc"),
e = e(),
Ca(),
e)
  , ru = {
    class: "magic-debug"
}
  , lu = {
    class: "magic-debug-variables"
}
  , cu = {
    key: 0,
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
}
  , uu = lt( () => R("path", {
    d: "M201.472 320h-49.6V129.408l-59.2 18.368v-40.32L196.16 70.4h5.312V320z m50.816 320.128H81.024v-33.92l80.832-86.208c6.016-6.656 11.136-12.672 15.36-18.176a133.76 133.76 0 0 0 10.112-15.104 57.728 57.728 0 0 0 5.504-12.8 42.88 42.88 0 0 0 1.6-11.392c0-11.136-2.816-19.84-8.384-26.24-5.632-6.272-13.632-9.472-24.064-9.472a36.224 36.224 0 0 0-15.488 3.2 31.808 31.808 0 0 0-11.328 8.704 39.232 39.232 0 0 0-6.976 13.312 56.32 56.32 0 0 0-2.368 16.832h-49.792c0-11.2 1.984-21.76 6.016-31.744 3.968-9.984 9.792-18.624 17.28-26.112 7.616-7.424 16.704-13.312 27.392-17.664 10.688-4.352 22.784-6.528 36.16-6.528 13.12 0 24.768 1.664 34.88 4.928 10.176 3.2 18.624 7.872 25.536 13.952 6.848 6.08 12.032 13.504 15.616 22.336 3.52 8.768 5.312 18.688 5.312 29.696 0 8.32-1.28 16.384-3.968 24.192-2.56 7.744-6.336 15.552-11.136 23.296a190.08 190.08 0 0 1-17.408 23.68 528.64 528.64 0 0 1-22.784 24.768l-44.096 46.464h107.456v40zM131.456 812.8h26.432c12.608 0 21.888-3.136 27.968-9.408a34.56 34.56 0 0 0 9.088-25.088 38.656 38.656 0 0 0-2.048-12.8 26.304 26.304 0 0 0-16.832-16.704 42.112 42.112 0 0 0-14.912-2.432 41.792 41.792 0 0 0-12.928 1.984 33.664 33.664 0 0 0-10.688 5.568 25.6 25.6 0 0 0-9.856 20.608H78.08a60.8 60.8 0 0 1 6.4-28.032c4.352-8.448 10.176-15.552 17.536-21.44 7.424-5.888 16-10.496 25.984-13.76 9.984-3.2 20.608-4.864 32-4.864 12.544 0 24 1.472 34.368 4.48 10.368 3.072 19.2 7.616 26.688 13.632 7.424 5.952 13.184 13.44 17.28 22.272 4.16 8.896 6.208 19.2 6.208 30.848a52.8 52.8 0 0 1-9.856 30.72 67.968 67.968 0 0 1-28.032 22.976 62.08 62.08 0 0 1 31.488 22.656 61.44 61.44 0 0 1 10.368 35.712 66.56 66.56 0 0 1-25.408 54.336c-7.872 6.208-17.28 10.88-28.032 14.208a121.024 121.024 0 0 1-66.368 0.64 81.92 81.92 0 0 1-27.2-13.248 68.032 68.032 0 0 1-19.2-22.4 66.304 66.304 0 0 1-7.296-32h49.6a29.824 29.824 0 0 0 10.368 22.912 36.48 36.48 0 0 0 11.584 6.592 48.64 48.64 0 0 0 30.4 0 30.336 30.336 0 0 0 19.392-17.792 46.208 46.208 0 0 0-0.256-31.04 28.544 28.544 0 0 0-8.192-11.584 34.304 34.304 0 0 0-12.928-6.592 63.104 63.104 0 0 0-17.088-2.176h-26.432V812.8z",
    fill: "#9AA7B0"
}, null, -1))
  , du = lt( () => R("path", {
    d: "M384 128h512v192H384zM384 768h512v192H384zM384 448h512v192H384z",
    fill: "#40B6E0",
    "fill-opacity": ".7"
}, null, -1))
  , pu = [uu, du]
  , _u = {
    key: 1,
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
}
  , hu = lt( () => R("path", {
    d: "M192 128h640v192H192zM192 384h640v192H192zM192 640h640v192H192z",
    fill: "#F4AF3D",
    "fill-opacity": ".6"
}, null, -1))
  , fu = [hu]
  , gu = {
    class: "key"
}
  , mu = lt( () => R("label", {
    class: "separator"
}, "=", -1))
  , vu = {
    key: 2,
    class: "object-type"
}
  , bu = {
    key: 3,
    class: "object-type"
}
  , Eu = {
    key: 0,
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
}
  , yu = lt( () => R("path", {
    d: "M128 128h768v768H128z",
    fill: "#40B6E0",
    "fill-opacity": ".6",
    "p-id": "8251"
}, null, -1))
  , Tu = lt( () => R("path", {
    d: "M691.968 704V422.912l-62.464 15.36L613.12 373.76l102.912-30.72h53.76V704h-77.824z m-284.288 6.144c-95.744 0-158.72-80.384-158.72-184.32V524.8c0-103.936 64.512-185.344 159.744-185.344 94.72 0 158.72 80.384 158.72 184.32V524.8c0 103.936-64 185.344-159.744 185.344z m1.408-71.168c47.616 0 77.824-48.128 77.824-113.152V524.8c0-65.024-31.744-114.176-78.848-114.176S330.24 458.24 330.24 523.776V524.8c0 65.536 31.232 114.176 78.848 114.176z",
    fill: "#231F20",
    "fill-opacity": ".7",
    "p-id": "8252"
}, null, -1))
  , Su = [yu, Tu]
  , xu = {
    key: 1,
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
}
  , Ou = lt( () => R("path", {
    d: "M192 128h640v192H192zM192 384h640v192H192zM192 640h640v192H192z",
    fill: "#F4AF3D",
    "fill-opacity": ".6"
}, null, -1))
  , Ru = [Ou]
  , Au = {
    class: "key"
}
  , Cu = lt( () => R("label", {
    class: "separator"
}, "=", -1))
  , Iu = {
    key: 2,
    class: "object-type"
}
  , ku = {
    __name: "magic-debug",
    setup(e) {
        const t = oe("opened")
          , a = _e( () => !t.value.variables)
          , n = U([{
            title: c("editor.tooltip.resume") + "(F8)",
            icon: "continue",
            disabled: a,
            onClick() {
                T.$emit($.DEBUG_CONTINUE)
            }
        }, {
            title: c("editor.tooltip.stepInto") + "(F6)",
            icon: "step-over",
            disabled: a,
            onClick() {
                T.$emit($.DEBUG_SETPINTO)
            }
        }, {
            title: c("resource.header.expand"),
            icon: "expand-all",
            disabled: a,
            onClick: () => Ze(t.value.variables, i => i.opened = !0)
        }, {
            title: c("resource.header.collapse"),
            icon: "collapse-all",
            disabled: a,
            onClick: () => Ze(t.value.variables, i => i.opened = !1)
        }]);
        return (i, s) => {
            const o = y("magic-panel-toolbar")
              , r = y("magic-icon")
              , l = y("magic-tree")
              , u = y("magic-empty");
            return v(),
            k("div", ru, [_(o, {
                toolbars: n.value
            }, null, 8, ["toolbars"]), R("div", lu, [h(t).variables ? (v(),
            V(l, {
                key: 0,
                data: h(t).variables
            }, {
                folder: w( ({item: d}) => [_(r, {
                    icon: d.opened ? "arrow-bottom" : "arrow-right",
                    onClick: ye(g => d.opened = !d.opened, ["stop"])
                }, null, 8, ["icon", "onClick"]), d.dataType === "array" ? (v(),
                k("svg", cu, pu)) : (v(),
                k("svg", _u, fu)), R("label", gu, F(d.name), 1), mu, d.size ? (v(),
                k("span", vu, "(" + F(d.size) + ")", 1)) : X("", !0), d.type ? (v(),
                k("span", bu, F(`{${d.type}}`), 1)) : X("", !0)]),
                file: w( ({item: d}) => [_(r, {
                    icon: "empty"
                }), d.dataType === "number" ? (v(),
                k("svg", Eu, Su)) : (v(),
                k("svg", xu, Ru)), R("label", Au, F(d.name), 1), Cu, R("span", {
                    class: ve(["magic-data-type", d.dataType])
                }, F(d.value), 3), d.type && !d.isNull ? (v(),
                k("span", Iu, " (" + F(d.type) + ")", 1)) : X("", !0)]),
                _: 1
            }, 8, ["data"])) : (v(),
            V(u, {
                key: 1,
                text: h(c)("message.empty", h(c)("message.variable"))
            }, null, 8, ["text"]))])])
        }
    }
};
var Lu = q(ku, [["__scopeId", "data-v-71b796dc"]])
  , Nu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Lu
}, Symbol.toStringTag, {
    value: "Module"
}));
const wu = {
    class: "magic-event"
}
  , Du = ["innerHTML"]
  , Mu = {
    __name: "magic-event",
    setup(e) {
        const t = T.getStatusLog()
          , a = [{
            title: c("message.clear"),
            icon: "clear",
            onClick: () => {
                T.clearStatusLog()
            }
        }];
        return (n, i) => {
            const s = y("magic-panel-toolbar")
              , o = y("magic-table-column")
              , r = y("magic-table");
            return v(),
            k("div", wu, [_(s, {
                toolbars: a
            }), R("div", null, [_(r, {
                data: h(t),
                border: "",
                align: "left"
            }, {
                default: w( () => [_(o, {
                    title: h(c)("message.date"),
                    width: "180"
                }, {
                    default: w( ({row: l}) => [pe(F(l.timestamp), 1)]),
                    _: 1
                }, 8, ["title"]), _(o, {
                    title: h(c)("event.message")
                }, {
                    default: w( ({row: l}) => [R("div", {
                        innerHTML: l.content
                    }, null, 8, Du)]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])])])
        }
    }
};
var Pu = q(Mu, [["__scopeId", "data-v-06d5ba36"]])
  , Uu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pu
}, Symbol.toStringTag, {
    value: "Module"
}));
const $u = {
    class: "magic-log-wrapper"
}
  , Fu = ["innerHTML"]
  , Bu = ["onClick"]
  , Hu = {
    __name: "magic-log",
    setup(e) {
        const t = U([])
          , a = U(!1)
          , n = U([{
            icon: "expand-all",
            title: c("resource.header.expand"),
            onClick: () => t.value.forEach(d => d.showMore = !0)
        }, {
            icon: "collapse-all",
            title: c("resource.header.collapse"),
            onClick: () => t.value.forEach(d => d.showMore = !1)
        }, {
            icon: "delete",
            title: c("message.clear"),
            onClick: () => t.value.splice(0)
        }, {
            icon: "scroll-down",
            title: c("log.scrollEnd"),
            selectable: !0,
            onSelect: d => {
                a.value = d,
                o()
            }
        }])
          , i = U(null)
          , {proxy: s} = bt()
          , o = () => {
            a.value && be( () => {
                i.value && (i.value.scrollTop = i.value.scrollHeight)
            }
            )
        }
          , r = d => {
            s.$contextmenu({
                event: d,
                menus: [{
                    icon: "delete",
                    label: c("message.clear"),
                    onClick: () => t.value.splice(0)
                }, {
                    icon: "expand-all",
                    label: c("resource.header.expand"),
                    onClick: () => t.value.forEach(g => g.showMore = !0)
                }, {
                    icon: "collapse-all",
                    label: c("resource.header.collapse"),
                    onClick: () => t.value.forEach(g => g.showMore = !1)
                }]
            })
        }
          , l = d => {
            const g = d.map(f => {
                let E = f.replace(/[&<>]/gm, function(N) {
                    return N === "&" ? "&amp;" : N === "<" ? "&lt;" : N === ">" ? "&gt;" : ""
                });
                E = E.replace(/(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}.\d{3}\s+)([^\s]+)( --- \[)(.{15})(] )(.{40})/gm, '$1 <span class="log-$2">$2</span>$3$4$5<span class="log-cyan">$6</span>'),
                E = E.replace(/(https?:\/\/[^\s]+)/gm, '<a class="log-link" href="$1" target="blank">$1</a>'),
                E = E.replace(/(\tat .*\()(.*?:\d+)(\).*?[\r\n])/g, '$1<span style="color:#808080;text-decoration: underline;">$2</span>$3');
                let m = f.split(`
`).length;
                return {
                    html: E,
                    multiple: m > 3,
                    lines: m - 3,
                    showMore: !1
                }
            }
            );
            g && (t.value.push(...g),
            D.LOG_MAX_ROWS !== 1 / 0 && t.value.length > D.LOG_MAX_ROWS && t.value.splice(0, t.value.length - D.LOG_MAX_ROWS),
            o())
        }
        ;
        T.$event(Se.LOGS, ([d]) => l(d)),
        T.$event(Se.LOG, ([d]) => l(d));
        const u = new IntersectionObserver( () => {
            o()
        }
        );
        return pt( () => {
            u.observe(i.value)
        }
        ),
        (d, g) => {
            const f = y("magic-panel-toolbar")
              , E = y("magic-empty");
            return v(),
            k("div", $u, [_(f, {
                toolbars: n.value
            }, null, 8, ["toolbars"]), !t.value || t.value.length === 0 ? (v(),
            V(E, {
                key: 0,
                text: h(c)("message.empty", h(c)("message.log"))
            }, null, 8, ["text"])) : X("", !0), gt(R("div", {
                class: "magic-log",
                ref_key: "element",
                ref: i,
                onContextmenu: g[0] || (g[0] = ye(m => r(m), ["prevent"]))
            }, [(v(!0),
            k(te, null, fe(t.value, (m, N) => (v(),
            k("div", {
                class: ve({
                    multiple: m.multiple,
                    more: m.showMore
                }),
                key: "run_log_" + N
            }, [R("pre", {
                innerHTML: m.html
            }, null, 8, Fu), m.multiple ? (v(),
            k("span", {
                key: 0,
                class: "multiple",
                onClick: C => m.showMore = !m.showMore
            }, F(m.showMore ? h(c)("log.hide") : h(c)("log.show", m.lines)), 9, Bu)) : X("", !0)], 2))), 128))], 544), [[Mt, t.value && t.value.length > 0]])])
        }
    }
};
var ju = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Hu
}, Symbol.toStringTag, {
    value: "Module"
}));
const Vu = {
    class: "magic-online"
}
  , Gu = {
    __name: "magic-online",
    setup(e) {
        const t = We([])
          , a = oe("activateUserFiles")
          , n = (s, o) => {
            const r = t.find(l => l.cid === s);
            r && (Object.values(a.value).forEach(l => {
                const u = l.findIndex(d => d.cid === s);
                u > -1 && l.splice(u, 1)
            }
            ),
            a.value[o] = a.value[o] || [],
            a.value[o].push(r))
        }
          , i = s => {
            t.some(o => o.cid === s.cid) || t.push(s)
        }
        ;
        return T.$event(Se.LOGIN_RESPONSE, ([s,o]) => {
            a.value = {},
            t.splice(0, t.length),
            s === "1" && i(o)
        }
        ),
        T.$event(Se.PING, () => {
            T.send(Se.PONG)
        }
        ),
        T.$event(Se.USER_LOGIN, ([s]) => {
            D.CLIENT_ID !== s.cid && (T.$emit($.NOTIFY, {
                title: c("online.login"),
                content: c("online.loginTips", s.username, s.ip),
                duration: 3e3
            }),
            T.status("online.loginTips", !0, s.username, s.ip)),
            i(s)
        }
        ),
        T.$event(Se.USER_LOGOUT, ([s]) => {
            D.CLIENT_ID !== s.cid && (T.$emit($.NOTIFY, {
                title: c("online.logout"),
                content: c("online.logoutTips", s.username, s.ip),
                duration: 3e3
            }),
            T.status("online.logoutTips", !0, s.username, s.ip));
            const o = t.findIndex(r => r.cid === s.cid);
            n(s.cid, "0"),
            o > -1 && t.splice(o, 1)
        }
        ),
        T.$event(Se.ONLINE_USERS, ([s]) => {
            s.forEach(o => {
                D.CLIENT_ID !== o.cid && (i(o),
                o.fileId && n(o.cid, o.fileId))
            }
            )
        }
        ),
        T.$event(Se.INTO_FILE_ID, ([s,o]) => n(s, o)),
        (s, o) => {
            const r = y("magic-avatar-group");
            return v(),
            k("div", Vu, [_(r, {
                users: t,
                max: 9
            }, null, 8, ["users"]), R("span", null, F(h(c)("online.onlines", t.length)), 1)])
        }
    }
};
var zu = q(Gu, [["__scopeId", "data-v-0c296fa2"]])
  , Yu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zu
}, Symbol.toStringTag, {
    value: "Module"
}));
const qu = {
    class: "magic-status-bar"
}
  , Ku = ["innerHTML"]
  , Wu = ["data-title", "onClick"]
  , Xu = {
    __name: "magic-status-bar",
    props: {
        config: Object
    },
    setup(e) {
        const t = e
          , a = U(null)
          , n = [{
            icon: "gitee",
            title: "Gitee",
            displayKey: "repo",
            onClick: () => window.open("https://gitee.com/ssssssss-team/magic-api")
        }, {
            icon: "git",
            title: "Github",
            displayKey: "repo",
            onClick: () => window.open("https://github.com/ssssssss-team/magic-api")
        }, {
            icon: "qq",
            title: c("message.joinGroup"),
            displayKey: "qqGroup",
            onClick: () => window.open("https://www.ssssssss.org/magic-api/pages/group/")
        }, {
            icon: "help",
            title: c("message.document"),
            displayKey: "document",
            onClick: () => window.open("https://ssssssss.org/magic-api")
        }]
          , i = _e( () => {
            const o = n.filter(r => t.config.header[r.displayKey] !== !1);
            return a.value && a.value.id && a.value.username && o.push({
                icon: "logout",
                title: a.value.username,
                onClick: () => me.confirm(c("message.logout"), c("message.logoutConfirm", a.value.username), () => Y.sendPost("/logout").success( () => {
                    a.value = null,
                    D.HEADER_MAGIC_TOKEN_VALUE = "unauthorization",
                    D.LOGINED = !1,
                    De.remove(D.STORE.token),
                    T.$emit($.LOGOUT),
                    T.status("message.logoutSuccess")
                }
                ))
            }),
            o
        }
        )
          , s = U("");
        return T.$on($.LOGINED, () => {
            T.status("message.getCurrentLoginUser"),
            Y.send("/user").success(o => a.value = o)
        }
        ),
        T.$on($.STATUS, o => s.value = o),
        (o, r) => {
            const l = y("magic-online")
              , u = y("magic-icon");
            return v(),
            k("div", qu, [R("div", {
                class: "message",
                innerHTML: s.value
            }, null, 8, Ku), _(l), R("ul", null, [(v(!0),
            k(te, null, fe(h(i), (d, g) => (v(),
            k("li", {
                "data-title": d.title,
                "data-tooltip-direction": "left-top",
                key: g,
                onClick: ye(d.onClick, ["stop"])
            }, [_(u, {
                icon: d.icon
            }, null, 8, ["icon"])], 8, Wu))), 128))])])
        }
    }
};
var Ju = q(Xu, [["__scopeId", "data-v-55e90cbc"]])
  , Qu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ju
}, Symbol.toStringTag, {
    value: "Module"
}));
const Zu = {
    class: "magic-todo"
}
  , e1 = {
    key: 3
}
  , t1 = {
    class: "todo"
}
  , a1 = {
    __name: "magic-todo",
    setup(e) {
        const t = U(!0)
          , a = [{
            icon: "refresh",
            title: c("message.refresh"),
            onClick() {
                d()
            }
        }, {
            icon: "expand-all",
            title: c("message.expand"),
            onClick: () => Ze(n.value, f => f.opened = !0)
        }, {
            icon: "collapse-all",
            title: c("message.collapse"),
            onClick: () => Ze(n.value, f => f.opened = !1)
        }]
          , n = U([])
          , i = oe("resources")
          , s = {}
          , o = f => {
            (f.groupId || f.line) && T.$emit($.OPEN_WITH_ID, f.id)
        }
          , r = (f, E) => {
            let m = f.find(N => N.id === E);
            if (!m)
                for (let N = 0; N < f.length; N++) {
                    const C = f[N];
                    if (C.folder && (m = r(C.children || [], E)))
                        return m._type = C.type,
                        m
                }
            return m
        }
          , l = f => {
            let E = [];
            return f.forEach(m => {
                m.line > 0 ? E.push(m) : m.folder && m.children && (m.children = l(m.children),
                m.children.length && E.push(m))
            }
            ),
            E
        }
          , u = oe("service")
          , d = () => {
            n.value = [],
            t.value = !0,
            Y.sendGet("/todo").success(f => {
                const E = i();
                E.forEach(N => s[N.navbar.type] = N.navbar);
                let m = !1;
                f.forEach(N => {
                    for (let C = 0; C < E.length; C++) {
                        const x = E[C]
                          , b = r(x.tree, N.id);
                        if (b) {
                            b.folder = !0,
                            b.children = b.children || [],
                            b.icon = u[b._type].getIcon(b),
                            b.children.push({
                                ...N
                            }),
                            x.display = !0,
                            m = !0;
                            break
                        }
                    }
                }
                ),
                m && (n.value = l(E.filter(N => N.display).map(N => ({
                    folder: !0,
                    icon: N.navbar.icon,
                    name: N.navbar.title,
                    children: N.tree,
                    root: !0
                }))),
                Ze(n.value, N => N.opened = !0)),
                t.value = !1
            }
            )
        }
        ;
        let g = !1;
        return T.$on($.LOAD_RESOURCES_FINISH, d),
        pt( () => {
            !g && D.LOGINED && d(),
            g = !0
        }
        ),
        (f, E) => {
            const m = y("magic-panel-toolbar")
              , N = y("magic-loading")
              , C = y("magic-icon")
              , x = y("magic-text-icon")
              , b = y("magic-tree")
              , S = y("magic-empty");
            return v(),
            k("div", Zu, [_(m, {
                toolbars: a
            }), R("div", null, [_(N, {
                loading: t.value
            }, null, 8, ["loading"]), n.value.length > 0 ? (v(),
            V(b, {
                key: 0,
                data: n.value,
                onItemClick: o
            }, {
                folder: w( ({item: A}) => [_(C, {
                    icon: A.opened ? "arrow-bottom" : "arrow-right",
                    onClick: ye(M => A.opened = !A.opened, ["stop"])
                }, null, 8, ["icon", "onClick"]), A.root ? (v(),
                V(C, {
                    key: 0,
                    icon: A.icon
                }, null, 8, ["icon"])) : A.icon ? (v(),
                V(x, {
                    key: 1,
                    icon: A.icon
                }, null, 8, ["icon"])) : (v(),
                V(C, {
                    key: 2,
                    icon: "list"
                })), R("label", null, F(A.name), 1), A.path ? (v(),
                k("span", e1, "(" + F(A.path) + ")", 1)) : X("", !0)]),
                file: w( ({item: A}) => [_(C), _(C, {
                    icon: "todo"
                }), R("label", t1, F(A.text), 1)]),
                _: 1
            }, 8, ["data"])) : (v(),
            V(S, {
                key: 1,
                text: h(c)("message.empty", "TODO")
            }, null, 8, ["text"]))])])
        }
    }
};
var n1 = q(a1, [["__scopeId", "data-v-29308d9b"]])
  , i1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: n1
}, Symbol.toStringTag, {
    value: "Module"
}));
const s1 = {
    class: "magic-toolbar"
}
  , o1 = {
    class: "magic-toolbar-header"
}
  , r1 = {
    class: "magic-toolbar-header-buttons"
}
  , l1 = {
    __name: "magic-toolbar",
    setup(e) {
        const t = U(null)
          , a = We([{
            type: "api",
            title: c("api.title"),
            icon: "parameter",
            component: Ue(ee("magic-api-info"))
        }, {
            id: "response",
            type: "api",
            title: c("toolbars.response"),
            icon: "run",
            component: Ue(ee("magic-api-response"))
        }, {
            type: "function",
            title: c("fn.title"),
            icon: "parameter",
            component: Ue(ee("magic-function-info"))
        }, {
            type: "group-api",
            title: c("message.group", c("api.name")),
            icon: "parameter",
            component: Ue(ee("magic-api-group"))
        }, {
            id: "debug",
            type: ["api", "task"],
            title: c("toolbars.debug"),
            icon: "debug-info",
            component: Ue(ee("magic-debug"))
        }, {
            id: "log",
            title: c("toolbars.log"),
            icon: "log",
            component: Ue(ee("magic-log"))
        }, {
            type: "api",
            title: c("toolbars.global"),
            icon: "settings",
            component: Ue(ee("magic-global"))
        }, {
            id: "todo",
            title: "TODO",
            icon: "todo",
            component: Ue(ee("magic-todo"))
        }, {
            id: "history",
            title: c("toolbars.history"),
            icon: "history",
            component: Ue(ee("magic-backup"))
        }, {
            id: "event",
            title: c("toolbars.event"),
            icon: "event",
            component: Ue(ee("magic-event")),
            style: {
                float: "right"
            }
        }]);
        D.PLUGINS.filter(r => r.toolbars && r.toolbars.length > 0).map(r => r.toolbars).forEach(r => r.forEach(l => {
            a.unshift({
                id: l.id,
                type: l.type,
                icon: l.icon,
                title: c(l.title),
                component: Ue(l.component)
            })
        }
        ));
        const n = U({})
          , i = U({});
        Ye("opened", n),
        Ye("info", i);
        const s = (r, l) => {
            a.forEach(u => u.show = u.type === void 0 || (Array.isArray(u.type) ? u.type.find(d => d.type === r) : u.type === r)),
            t.value && l && t.value.select(a.findIndex(u => u.show))
        }
        ;
        s("");
        const o = r => {
            const l = a.findIndex(u => u.id === r.id);
            l > -1 && a.splice(l, 1),
            t.value.select(-1)
        }
        ;
        return T.$on($.ADD_FOOTER_TOOLBAR, r => {
            r.id && o(r),
            t.value.select(a.push(r) - 1)
        }
        ),
        T.$on($.OPEN_EMPTY, () => s("")),
        T.$on($.OPEN, (r, l) => {
            r.responseBlobValue = null,
            n.value = r,
            i.value = r.item,
            s(r.type, l)
        }
        ),
        T.$on($.OPEN_GROUP, r => {
            s("group-" + r.type, !0),
            i.value = r
        }
        ),
        T.$on($.SWITCH_TOOLBAR, r => {
            const l = a.findIndex(u => u.id === r);
            l > -1 && t.value.select(l)
        }
        ),
        (r, l) => {
            const u = y("magic-icon")
              , d = y("magic-resizer")
              , g = y("magic-navbar-item")
              , f = y("magic-navbar");
            return v(),
            k("div", s1, [_(f, {
                direction: "horizontal",
                ref_key: "navbar",
                ref: t,
                "tooltip-direction": "bottom"
            }, {
                default: w( () => [(v(!0),
                k(te, null, fe(a, (E, m) => (v(),
                V(g, mt({
                    key: m
                }, E), {
                    default: w( () => [_(d, {
                        direction: "y",
                        max: 700,
                        min: 150,
                        value: 250
                    }, {
                        default: w( () => [R("div", o1, [R("label", null, F(E.title), 1), R("div", r1, [_(u, {
                            icon: "minimize",
                            size: "14px",
                            title: h(c)("message.hide"),
                            onClick: l[0] || (l[0] = N => t.value.select(-1))
                        }, null, 8, ["title"]), E.allowClose ? (v(),
                        V(u, {
                            key: 0,
                            icon: "close",
                            title: h(c)("editor.tab.close"),
                            onClick: N => o(E)
                        }, null, 8, ["title", "onClick"])) : X("", !0)])]), (v(),
                        V(ee(E.component), Kn(Wn(E.data)), null, 16))]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1040))), 128))]),
                _: 1
            }, 512)])
        }
    }
};
var c1 = q(l1, [["__scopeId", "data-v-68b3ca3b"]])
  , u1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: c1
}, Symbol.toStringTag, {
    value: "Module"
}));
const d1 = {
    class: "magic-function-info"
}
  , p1 = {
    __name: "magic-function-info",
    setup(e) {
        const t = oe("info")
          , a = [{
            title: c("fn.parameter"),
            component: ee("magic-function-parameter")
        }, {
            title: c("fn.description"),
            component: ee("magic-api-description")
        }];
        return (n, i) => {
            const s = y("magic-select")
              , o = y("magic-input")
              , r = y("magic-navbar-item")
              , l = y("magic-navbar");
            return v(),
            k(te, null, [R("div", d1, [R("form", null, [R("label", null, F(h(c)("fn.returnValue")), 1), _(s, {
                width: "100px",
                options: n.$FUNCTION_RETURN_TYPES,
                "default-select": n.$DEFAULT_FUNCTION_RETURN_TYPE,
                value: h(t).method,
                "onUpdate:value": i[0] || (i[0] = u => h(t).method = u)
            }, null, 8, ["options", "default-select", "value"]), R("label", null, F(h(c)("fn.form.name")), 1), _(o, {
                value: h(t).name,
                "onUpdate:value": i[1] || (i[1] = u => h(t).name = u),
                placeholder: h(c)("fn.form.placeholder.name"),
                width: "200px"
            }, null, 8, ["value", "placeholder"]), R("label", null, F(h(c)("fn.form.path")), 1), _(o, {
                value: h(t).path,
                "onUpdate:value": i[2] || (i[2] = u => h(t).path = u),
                placeholder: h(c)("fn.form.placeholder.path"),
                width: "auto",
                style: {
                    flex: "1"
                }
            }, null, 8, ["value", "placeholder"])])]), _(l, {
                direction: "horizontal",
                ref: "navbar",
                style: {
                    flex: "1"
                },
                "allow-close": !1
            }, {
                default: w( () => [(v(),
                k(te, null, fe(a, (u, d) => _(r, {
                    key: d,
                    title: u.title
                }, {
                    default: w( () => [(v(),
                    V(ee(u.component), {
                        info: h(t)
                    }, null, 8, ["info"]))]),
                    _: 2
                }, 1032, ["title"])), 64))]),
                _: 1
            }, 512)], 64)
        }
    }
};
var _1 = q(p1, [["__scopeId", "data-v-bc8654ec"]])
  , h1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _1
}, Symbol.toStringTag, {
    value: "Module"
}));
const f1 = {
    class: "magic-panel-function"
}
  , g1 = {
    __name: "magic-function-parameter",
    setup(e) {
        const t = oe("info")
          , a = U(-1);
        return (n, i) => {
            const s = y("magic-panel-common-toolbar")
              , o = y("magic-input")
              , r = y("magic-table-column")
              , l = y("magic-select")
              , u = y("magic-table");
            return v(),
            k("div", f1, [_(s, {
                index: a.value,
                "onUpdate:index": i[0] || (i[0] = d => a.value = d),
                value: h(t).parameters
            }, null, 8, ["index", "value"]), _(u, {
                data: h(t).parameters,
                border: "",
                onClickRow: i[1] || (i[1] = d => a.value = d)
            }, {
                default: w( () => [_(r, {
                    title: h(c)("message.name"),
                    width: "20%"
                }, {
                    default: w( ({row: d}) => [_(o, {
                        value: d.name,
                        "onUpdate:value": g => d.name = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.parameterType"),
                    width: "20%"
                }, {
                    default: w( ({row: d}) => [_(l, {
                        options: n.$FUNCTION_RETURN_TYPES,
                        value: d.type,
                        "onUpdate:value": g => d.type = g,
                        "default-select": n.$DEFAULT_FUNCTION_RETURN_TYPE,
                        border: !1
                    }, null, 8, ["options", "value", "onUpdate:value", "default-select"])]),
                    _: 1
                }, 8, ["title"]), _(r, {
                    title: h(c)("message.description"),
                    flex: "1"
                }, {
                    default: w( ({row: d}) => [_(o, {
                        value: d.description,
                        "onUpdate:value": g => d.description = g,
                        border: !1
                    }, null, 8, ["value", "onUpdate:value"])]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["data"])])
        }
    }
};
var m1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: g1
}, Symbol.toStringTag, {
    value: "Module"
}));
const v1 = {
    __name: "magic-export",
    setup(e) {
        const t = U(!1)
          , a = U([]);
        T.$on($.DO_DOWNLOAD, () => t.value = !0);
        const n = () => {
            a.value.length ? Y.sendJson("/download", a.value, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                transformRequest: [],
                responseType: "blob"
            }).success(i => {
                Da(i, "magic-api.zip"),
                T.status("message.exported"),
                t.value = !1
            }
            ) : me.alert(c("message.exportNoneSelect"))
        }
        ;
        return (i, s) => {
            const o = y("magic-resource-choose")
              , r = y("magic-button")
              , l = y("magic-button-group")
              , u = y("magic-dialog");
            return v(),
            V(u, {
                title: h(c)("message.export"),
                value: t.value,
                "onUpdate:value": s[5] || (s[5] = d => t.value = d),
                shade: !1,
                padding: "0",
                width: "480px",
                top: "60px",
                overflow: "hidden"
            }, {
                default: w( () => [_(o, {
                    ref: "resource",
                    value: a.value,
                    "onUpdate:value": s[0] || (s[0] = d => a.value = d)
                }, null, 8, ["value"]), _(l, {
                    align: "right",
                    style: {
                        margin: "5px 0",
                        "margin-right": "5px"
                    }
                }, {
                    default: w( () => [_(r, {
                        value: h(c)("message.expand"),
                        onOnClick: s[1] || (s[1] = d => i.$refs.resource.expand(!0))
                    }, null, 8, ["value"]), _(r, {
                        value: h(c)("message.collapse"),
                        onOnClick: s[2] || (s[2] = d => i.$refs.resource.expand(!1))
                    }, null, 8, ["value"]), _(r, {
                        value: h(c)("message.selectAll"),
                        onOnClick: s[3] || (s[3] = d => i.$refs.resource.selectAll(!0))
                    }, null, 8, ["value"]), _(r, {
                        value: h(c)("message.deselectAll"),
                        onOnClick: s[4] || (s[4] = d => i.$refs.resource.selectAll(!1))
                    }, null, 8, ["value"]), _(r, {
                        type: "active",
                        value: h(c)("message.export"),
                        onOnClick: n
                    }, null, 8, ["value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["title", "value"])
        }
    }
};
var b1 = q(v1, [["__scopeId", "data-v-097eba83"]])
  , E1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: b1
}, Symbol.toStringTag, {
    value: "Module"
}));
const y1 = {
    class: "magic-header"
}
  , T1 = {
    class: "magic-logo"
}
  , S1 = ["title"]
  , x1 = ["title"]
  , O1 = {
    class: "magic-header-title"
}
  , R1 = ["data-title", "onClick"]
  , A1 = {
    class: "magic-skin-selector"
}
  , C1 = ["onClick"]
  , I1 = {
    class: "magic-locale-selector"
}
  , k1 = ["onClick"]
  , L1 = {
    __name: "magic-header",
    props: {
        title: {
            type: String,
            default: "magic-api"
        },
        themeStyle: Object,
        header: Object
    },
    setup(e) {
        const t = e
          , a = {
            "../../../scripts/i18n/en.js": () => Wa( () => Promise.resolve().then(function() {
                return hi
            }), void 0),
            "../../../scripts/i18n/zh-cn.js": () => Wa( () => Promise.resolve().then(function() {
                return fi
            }), void 0)
        }
          , n = We([]);
        for (let E in a)
            a[E]().then(m => {
                n.push({
                    id: E.replace(/(.*?i18n\/)(.*)(\.js)/g, "$2"),
                    name: m.default.name
                })
            }
            );
        const i = D.MAGIC_API_VERSION_TEXT
          , s = U(!1)
          , o = U(!1)
          , r = U({})
          , l = U("");
        T.$on($.OPEN_EMPTY, () => {
            l.value = "",
            r.value = {}
        }
        ),
        T.$on($.OPEN, E => {
            r.value = E,
            l.value = E.path(),
            et(E, () => {
                r.value === E && (l.value = E.path())
            }
            )
        }
        );
        const u = _e( () => [{
            name: `${c("message.run")}(Ctrl + Q)`,
            icon: "run",
            disabled: () => r.value.runnable !== !0 || r.value.running === !0,
            onClick: () => T.$emit($.DO_TEST)
        }, {
            name: `${c("message.save")}(Ctrl + S)`,
            icon: "save",
            onClick: () => T.$emit($.DO_SAVE, !0)
        }, {
            name: `${c("message.search")}(Ctrl + Shift + F)`,
            icon: "search",
            onClick: () => T.$emit($.DO_SEARCH)
        }, {
            name: c("message.upload"),
            icon: "upload",
            onClick: () => T.$emit($.DO_UPLOAD)
        }, {
            name: c("message.export"),
            icon: "download",
            onClick: () => T.$emit($.DO_DOWNLOAD)
        }, {
            name: c("message.push"),
            icon: "push",
            onClick: () => T.$emit($.DO_PUSH)
        }, {
            name: c("message.skin"),
            displayKey: "skin",
            icon: "skin",
            onClick: () => {
                s.value = !s.value,
                o.value = !1
            }
        }, {
            name: c("message.i18n"),
            icon: "i18n",
            onClick: () => {
                o.value = !o.value,
                s.value = !1
            }
        }, {
            name: c("message.reload"),
            icon: "refresh",
            onClick: () => T.$emit($.RELOAD_RESOURCES)
        }].filter(E => t.header[E.displayKey] !== !1))
          , d = E => {
            D.THEME = E,
            T.$emit($.SWITCH_THEME, E),
            T.status("message.switchSkin", !0, E),
            $e.setTheme(E),
            Object.keys(t.themeStyle).forEach(N => t.themeStyle[N] = void 0);
            let m = Gt[E];
            De.set(D.STORE.theme, E),
            Object.keys(m).forEach(N => t.themeStyle[`--${N}`] = m[N]),
            s.value = !1
        }
          , g = De.get(D.STORE.theme);
        Gt[g] ? d(g) : d(D.THEME);
        const f = ({id: E, name: m}) => {
            o.value = !1,
            De.set("locale", E),
            me.confirm(c("message.tips"), c("message.switchLocale", m), () => {
                location.reload()
            }
            )
        }
        ;
        return (E, m) => {
            const N = y("magic-icon");
            return v(),
            k(te, null, [R("div", y1, [R("div", T1, [R("label", {
                title: e.title
            }, F(e.title), 9, S1), R("label", {
                title: h(i)
            }, F(h(i)), 9, x1)]), R("div", O1, F(l.value), 1), R("ul", null, [(v(!0),
            k(te, null, fe(h(u), (C, x) => (v(),
            k("li", {
                key: x,
                "data-title": C.name,
                "data-tooltip-direction": "left-bottom",
                onClick: ye(b => C.disabled !== !0 && C.onClick(), ["stop"]),
                class: ve({
                    disabled: C.disabled && C.disabled() === !0
                })
            }, [_(N, {
                icon: C.icon
            }, null, 8, ["icon"])], 10, R1))), 128))])]), gt(R("div", A1, [R("ul", null, [(v(!0),
            k(te, null, fe(Object.keys(h(Gt)), C => (v(),
            k("li", {
                key: "theme_" + C,
                onClick: x => d(C)
            }, F(C), 9, C1))), 128))])], 512), [[Mt, s.value]]), gt(R("div", I1, [R("ul", null, [(v(!0),
            k(te, null, fe(n, C => (v(),
            k("li", {
                key: "locale_" + C.id,
                onClick: x => f(C)
            }, F(C.name), 9, k1))), 128))])], 512), [[Mt, o.value]])], 64)
        }
    }
};
var N1 = q(L1, [["__scopeId", "data-v-1e7d7426"]])
  , w1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: N1
}, Symbol.toStringTag, {
    value: "Module"
}));
const D1 = {
    class: "magic-push-form"
}
  , M1 = {
    __name: "magic-push",
    setup(e) {
        const t = U(!1)
          , a = U([])
          , n = U("http://host:port/_magic-api-sync")
          , i = U("123456789");
        T.$on($.DO_PUSH, () => t.value = !0);
        const s = r => {
            Y.sendJson("/push", a.value, {
                method: "post",
                headers: {
                    "magic-push-target": n.value,
                    "magic-push-secret-key": i.value,
                    "magic-push-mode": r,
                    "Content-Type": "application/json"
                },
                transformRequest: []
            }).success( () => {
                const l = c(r === "full" ? "push.full" : "push.increment");
                T.status("push.success", !0, l),
                t.value = !1,
                T.$emit($.LOAD_RESOURCES)
            }
            )
        }
          , o = r => {
            a.value.length ? r === "full" ? me.confirm(c("message.push"), c("message.pushWarning"), () => s(r)) : s(r) : me.alert(c("message.pushNoneSelect"))
        }
        ;
        return (r, l) => {
            const u = y("magic-resource-choose")
              , d = y("magic-input")
              , g = y("magic-button")
              , f = y("magic-button-group")
              , E = y("magic-dialog");
            return v(),
            V(E, {
                title: h(c)("message.push"),
                value: t.value,
                "onUpdate:value": l[7] || (l[7] = m => t.value = m),
                shade: !1,
                padding: "0",
                width: "450px",
                top: "60px",
                overflow: "hidden"
            }, {
                default: w( () => [_(u, {
                    ref: "resource",
                    value: a.value,
                    "onUpdate:value": l[0] || (l[0] = m => a.value = m)
                }, null, 8, ["value"]), R("div", D1, [R("div", null, [R("label", null, F(h(c)("message.remote")) + "\uFF1A", 1), _(d, {
                    value: n.value,
                    "onUpdate:value": l[1] || (l[1] = m => n.value = m)
                }, null, 8, ["value"])]), R("div", null, [R("label", null, F(h(c)("message.secret")) + "\uFF1A", 1), _(d, {
                    value: i.value,
                    "onUpdate:value": l[2] || (l[2] = m => i.value = m),
                    type: "password"
                }, null, 8, ["value"])])]), _(f, {
                    align: "right",
                    style: {
                        margin: "5px 0",
                        "margin-right": "5px"
                    }
                }, {
                    default: w( () => [_(g, {
                        value: h(c)("message.selectAll"),
                        onOnClick: l[3] || (l[3] = m => r.$refs.resource.selectAll(!0))
                    }, null, 8, ["value"]), _(g, {
                        value: h(c)("message.deselectAll"),
                        onOnClick: l[4] || (l[4] = m => r.$refs.resource.selectAll(!1))
                    }, null, 8, ["value"]), _(g, {
                        value: h(c)("push.increment"),
                        onOnClick: l[5] || (l[5] = m => o("increment")),
                        type: "active"
                    }, null, 8, ["value"]), _(g, {
                        value: h(c)("push.full"),
                        onOnClick: l[6] || (l[6] = m => o("full"))
                    }, null, 8, ["value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["title", "value"])
        }
    }
};
var P1 = q(M1, [["__scopeId", "data-v-440447fe"]])
  , U1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: P1
}, Symbol.toStringTag, {
    value: "Module"
}));
const $1 = {
    class: "magic-search-result"
}
  , F1 = ["onClick", "onDblclick"]
  , B1 = ["innerHTML"]
  , H1 = {
    class: "name"
}
  , j1 = ["textContent"]
  , V1 = {
    class: "display-text"
}
  , G1 = {
    __name: "magic-search",
    setup(e) {
        const t = U("")
          , a = U(!1)
          , n = oe("findResource")
          , i = oe("service")
          , s = U([])
          , o = U({})
          , r = _e( () => o.value.name + (o.value.path ? `(${o.value.path})` : ""))
          , l = C => {
            C.script || Y.sendGet(`/resource/file/${C.id}`).success(x => {
                C.script = x.script
            }
            )
        }
          , u = (C, x) => {
            o.value = C,
            l(C),
            x && (T.$emit($.OPEN_WITH_ID, C.id),
            a.value = !1,
            s.value = [],
            t.value = "")
        }
        ;
        T.$on($.DO_SEARCH, () => {
            s.value = [],
            t.value = "",
            a.value = !a.value
        }
        );
        let d = null;
        const g = C => {
            const x = [...C.childNodes]
              , b = [];
            for (; x.length; ) {
                const S = x.shift();
                S.nodeType === S.TEXT_NODE ? b.push(S) : x.unshift(...S.childNodes)
            }
            return b
        }
          , f = C => {
            let x = 0;
            return C.map(b => {
                let S = x
                  , A = x + b.wholeText.length;
                return x = A,
                {
                    text: b.wholeText,
                    startIdx: S,
                    endIdx: A
                }
            }
            )
        }
          , E = (C, x) => {
            const b = [..."[]()?.+*^${}:"].reduce( (A, M) => (A[M] = !0,
            A), {});
            x = x.split("").map(A => b[A] ? `\\${A}` : A).join("[\\s\\n]*");
            const S = new RegExp(x,"gmi");
            return [...C.matchAll(S)]
        }
          , m = (C, x, b) => {
            for (let S = b.length - 1; S >= 0; S--) {
                const A = b[S]
                  , M = A.index
                  , I = M + A[0].length;
                for (let H = 0; H < x.length; H++) {
                    const {text: L, startIdx: j, endIdx: ie} = x[H];
                    if (ie < M)
                        continue;
                    if (j >= I)
                        break;
                    let se = C[H];
                    const J = Math.max(0, M - j)
                      , Ee = Math.min(ie, I) - j - J;
                    J > 0 && (se = se.splitText(J)),
                    Ee < se.wholeText.length && se.splitText(Ee);
                    const xe = document.createElement("span");
                    xe.innerText = L.substr(J, Ee),
                    xe.className = "keyword",
                    se.parentNode.replaceChild(xe, se)
                }
            }
        }
          , N = (C, x) => {
            if (!x)
                return C;
            const b = document.createElement("div");
            b.innerHTML = C;
            const S = g(b)
              , A = f(S)
              , M = A.map( ({text: H}) => H).join("")
              , I = E(M, x);
            return m(S, A, I),
            b.innerHTML
        }
        ;
        return et(t, C => {
            const x = C.trim();
            clearTimeout(d),
            x && (d = setTimeout( () => {
                Y.send("/search", {
                    keyword: x
                }, {
                    method: "POST"
                }).success(async b => {
                    const S = [];
                    for (let A = 0; A < b.length; A++) {
                        const M = b[A]
                          , I = n(M.id)
                          , H = i[I.type]
                          , L = H.language || "magicscript"
                          , j = await ii.getPromise(L);
                        S.push({
                            ...M,
                            icon: H.getIcon(I.item),
                            text: N(await si(M.text, j), x),
                            name: I && I.name || "unknown",
                            script: "",
                            language: L
                        })
                    }
                    S.length > 0 && (o.value = S[0],
                    l(o.value)),
                    s.value = S
                }
                )
            }
            , 600))
        }
        ),
        (C, x) => {
            const b = y("magic-input")
              , S = y("magic-text-icon")
              , A = y("magic-monaco-editor")
              , M = y("magic-dialog");
            return v(),
            V(M, {
                title: h(c)("message.search"),
                value: a.value,
                "onUpdate:value": x[1] || (x[1] = I => a.value = I),
                shade: !1,
                padding: "0",
                width: "700px",
                top: "60px"
            }, {
                default: w( () => [_(b, {
                    value: t.value,
                    "onUpdate:value": x[0] || (x[0] = I => t.value = I),
                    placeholder: h(c)("message.searchText")
                }, null, 8, ["value", "placeholder"]), s.value.length > 0 ? (v(),
                k(te, {
                    key: 0
                }, [R("div", $1, [(v(!0),
                k(te, null, fe(s.value, (I, H) => (v(),
                k("div", {
                    key: H,
                    class: ve(["magic-search-result-item", {
                        selected: o.value === I
                    }]),
                    onClick: L => u(I),
                    onDblclick: L => u(I, !0)
                }, [R("div", {
                    class: "label",
                    innerHTML: I.text
                }, null, 8, B1), R("div", H1, [_(S, {
                    icon: I.icon
                }, null, 8, ["icon"]), pe(F(I.name), 1)]), R("div", {
                    class: "line",
                    textContent: F(I.line)
                }, null, 8, j1)], 42, F1))), 128))]), R("div", V1, [_(S, {
                    icon: o.value.icon
                }, null, 8, ["icon"]), pe(F(h(r)), 1)]), _(A, {
                    readonly: "",
                    value: o.value.script,
                    language: o.value.language,
                    style: {
                        width: "100%",
                        height: "300px"
                    },
                    matches: t.value
                }, null, 8, ["value", "language", "matches"])], 64)) : X("", !0)]),
                _: 1
            }, 8, ["title", "value"])
        }
    }
};
var z1 = q(G1, [["__scopeId", "data-v-4bbc2d10"]])
  , Y1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: z1
}, Symbol.toStringTag, {
    value: "Module"
}));
const q1 = {
    __name: "magic-upload",
    setup(e) {
        const t = U(!1)
          , a = U(null)
          , n = i => {
            if (a.value) {
                const s = new FormData;
                s.append("file", a.value, a.value.name),
                s.append("mode", i);
                const o = () => {
                    Y.send("/upload", s, {
                        method: "post",
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }).success(r => {
                        const l = c(i === "full" ? "upload.full" : "upload.increment");
                        r ? (T.status("upload.success", !0, l),
                        t.value = !1,
                        T.$emit($.LOAD_RESOURCES)) : T.status("upload.failed", !1, l)
                    }
                    )
                }
                ;
                i === "full" ? me.confirm(c("message.upload"), c("message.uploadWarning"), o) : o()
            }
        }
        ;
        return T.$on($.DO_UPLOAD, () => t.value = !0),
        (i, s) => {
            const o = y("magic-file")
              , r = y("magic-button")
              , l = y("magic-button-group")
              , u = y("magic-dialog");
            return v(),
            V(u, {
                title: h(c)("message.upload"),
                value: t.value,
                "onUpdate:value": s[3] || (s[3] = d => t.value = d)
            }, {
                default: w( () => [_(o, {
                    value: a.value,
                    "onUpdate:value": s[0] || (s[0] = d => a.value = d),
                    accept: "application/x-zip-compressed"
                }, null, 8, ["value"]), _(l, {
                    align: "right",
                    style: {
                        "margin-top": "5px"
                    }
                }, {
                    default: w( () => [_(r, {
                        value: h(c)("upload.increment"),
                        type: "active",
                        onClick: s[1] || (s[1] = d => n("increment"))
                    }, null, 8, ["value"]), _(r, {
                        value: h(c)("upload.full"),
                        onClick: s[2] || (s[2] = d => n("full"))
                    }, null, 8, ["value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["title", "value"])
        }
    }
};
var K1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: q1
}, Symbol.toStringTag, {
    value: "Module"
}));
const W1 = {
    class: "magic-data-resource"
}
  , X1 = {
    class: "magic-data-resource-header"
}
  , J1 = ["title", "onClick"]
  , Q1 = {
    key: 1
}
  , Z1 = ["onContextmenu"]
  , ed = {
    __name: "magic-data-resource",
    props: {
        type: String,
        title: String,
        data: Array
    },
    setup(e) {
        const t = e
          , a = ee(`magic-datasource-${t.type}`)
          , n = U(!1)
          , i = U("")
          , s = U({})
          , o = U("")
          , r = U("")
          , l = U(!0)
          , u = _e( () => t.data && t.data.length > 0 && t.data[0].children && t.data[0].children.filter(S => S.name.indexOf(o.value) > -1 || S.key.indexOf(o.value) > -1) || [])
          , d = oe("service")[t.type]
          , g = [{
            name: c("message.createDataSource", t.title),
            icon: "plus",
            onClick: () => {
                i.value = c("message.createDataSource", t.title),
                r.value = c("message.create"),
                s.value = {},
                n.value = !0,
                l.value = !1
            }
        }]
          , f = () => {
            d.doTest(s.value)
        }
          , {proxy: E} = bt()
          , m = (S, A, M) => {
            S.groupId = `${t.type}:0`,
            Y.sendJson(`/resource/file/${t.type}/save`, S).success(I => {
                if (I) {
                    S.id !== I && T.loading(3),
                    S.id = I,
                    T.status(A + "Success", !0, M),
                    t.data[0].children = t.data[0].children || [];
                    const H = t.data[0].children.find(L => L.id === S.id);
                    H ? Object.keys(S).forEach(L => H[L] = S[L]) : t.data[0].children.push(S),
                    n.value = !1
                } else
                    T.status(A + "Failed", !1, M),
                    E.$alert(c(A + "Failed", M))
            }
            )
        }
          , N = () => {
            const S = {
                ...s.value
            };
            m(S, "message.save", `${t.title}\u300C${C(S)}\u300D`)
        }
          , C = S => `${S.name}(${S.key})`
          , x = S => {
            const A = t.data[0].children.findIndex(M => M === S);
            A > -1 && t.data[0].children.splice(A, 1)
        }
          , b = (S, A) => {
            const M = [];
            S.id && ([{
                label: c("message.update"),
                icon: "update",
                divided: !0,
                onClick: () => {
                    l.value = !0,
                    i.value = c("message.updateTips", t.title),
                    r.value = c("message.update"),
                    n.value = !0,
                    T.status("message.getDetail", `${t.title}\u300C${C(S)}\u300D`),
                    Y.sendGet(`/resource/file/${S.id}`).success(I => s.value = I).end( () => {
                        l.value = !1
                    }
                    )
                }
            }, {
                label: c("resource.contextmenu.delete"),
                icon: "delete",
                onClick: () => {
                    const I = `${t.title}\u300C${C(S)}\u300D`;
                    E.$confirm(c("message.deleteTips", t.title), c("message.deleteConfirm", I), () => {
                        Y.send("/resource/delete", {
                            id: S.id
                        }).success(H => {
                            T.status(H ? "message.deleteSuccess" : "message.deleteFailed", H, I),
                            H ? x(S) : E.$alert(H ? "message.deleteSuccess" : "message.deleteFailed", I)
                        }
                        )
                    }
                    )
                }
            }, {
                label: c("message.copy"),
                icon: "copy",
                divided: !0,
                onClick: () => {
                    Y.send(`/resource/file/${S.id}`).success(I => {
                        I.id = void 0,
                        I.name = I.name + `(${c("message.copy")})`,
                        I.key = I.key + "_copy",
                        m(I, "datasource.copy", `${t.title}\u300C${C(I)}\u300D`)
                    }
                    )
                }
            }].forEach(I => M.push(I)),
            S.lock === D.LOCKED ? M.push({
                label: c("resource.contextmenu.unlock"),
                icon: "unlock",
                onClick: () => Y.sendPost("/resource/unlock", {
                    id: S.id
                }).success(I => {
                    T.status(I ? "message.unlockSuccess" : "message.unlockFailed", I, `${t.title}\u300C${C(S)}\u300D`),
                    I && (S.lock = D.UNLOCK)
                }
                )
            }) : M.push({
                label: c("resource.contextmenu.lock"),
                icon: "lock",
                onClick: () => Y.sendPost("/resource/lock", {
                    id: S.id
                }).success(I => {
                    T.status(I ? "message.lockSuccess" : "message.lockFailed", I, `${t.title}\u300C${C(S)}\u300D`),
                    I && (S.lock = D.LOCKED)
                }
                )
            })),
            D.PLUGINS.forEach(I => {
                if (I.contextmenu && typeof I.contextmenu == "function") {
                    const H = I.contextmenu({
                        ...S,
                        menuType: "datasource"
                    });
                    H && H.length && H.forEach(L => M.push(L))
                }
            }
            ),
            M.length && E.$contextmenu({
                menus: M,
                event: A
            })
        }
        ;
        return (S, A) => {
            const M = y("magic-icon")
              , I = y("magic-input")
              , H = y("magic-empty")
              , L = y("magic-button")
              , j = y("magic-button-group")
              , ie = y("magic-loading")
              , se = y("magic-dialog");
            return v(),
            k(te, null, [R("div", W1, [R("div", X1, [R("ul", null, [(v(),
            k(te, null, fe(g, (J, Ee) => (v(),
            k(te, {
                key: Ee
            }, [!J.show || J.show() ? (v(),
            k("li", {
                key: 0,
                title: J.name || "",
                onClick: xe => J.onClick && J.onClick(),
                class: ve({
                    separator: J.separator
                })
            }, [J.separator ? X("", !0) : (v(),
            V(M, {
                key: 0,
                icon: J.icon
            }, null, 8, ["icon"]))], 10, J1)) : X("", !0)], 64))), 64))]), _(I, {
                value: o.value,
                "onUpdate:value": A[0] || (A[0] = J => o.value = J),
                placeholder: h(c)("message.searchText"),
                width: "100%"
            }, null, 8, ["value", "placeholder"]), _(M, {
                icon: "search",
                size: "14px"
            })]), h(u).length === 0 ? (v(),
            V(H, {
                key: 0,
                text: h(c)("message.empty", e.title)
            }, null, 8, ["text"])) : (v(),
            k("ul", Q1, [(v(!0),
            k(te, null, fe(h(u), (J, Ee) => (v(),
            k("li", {
                key: Ee,
                onContextmenu: ye(xe => b(J, xe), ["prevent"])
            }, [_(M, {
                icon: "datasource"
            }), R("label", null, F(J.name || h(c)("datasource.primary")), 1), R("span", null, "(" + F(J.key || "default") + ")", 1), J.lock === "1" ? (v(),
            V(M, {
                key: 0,
                icon: "lock"
            })) : X("", !0)], 40, Z1))), 128))]))]), _(se, {
                value: n.value,
                "onUpdate:value": A[4] || (A[4] = J => n.value = J),
                title: i.value,
                width: "550px"
            }, {
                default: w( () => [_(ie, {
                    loading: l.value,
                    style: {
                        "min-height": "200px"
                    }
                }, {
                    default: w( () => [(v(),
                    V(ee(h(a)), {
                        info: s.value
                    }, null, 8, ["info"])), _(j, {
                        align: "right",
                        style: {
                            padding: "5px 0"
                        }
                    }, {
                        default: w( () => [_(L, {
                            value: r.value,
                            type: "active",
                            onOnClick: A[1] || (A[1] = J => N())
                        }, null, 8, ["value"]), _(L, {
                            value: h(c)("datasource.test"),
                            onOnClick: A[2] || (A[2] = J => f())
                        }, null, 8, ["value"]), _(L, {
                            value: h(c)("message.cancel"),
                            onOnClick: A[3] || (A[3] = J => n.value = !1)
                        }, null, 8, ["value"])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["loading"])]),
                _: 1
            }, 8, ["value", "title"])], 64)
        }
    }
};
var td = q(ed, [["__scopeId", "data-v-4f1250a4"]])
  , ad = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: td
}, Symbol.toStringTag, {
    value: "Module"
}));
const Pn = e => (Aa("data-v-cbcc40fa"),
e = e(),
Ca(),
e)
  , nd = {
    class: "magic-login"
}
  , id = {
    class: "magic-login-box"
}
  , sd = Pn( () => R("div", {
    class: "magic-login-logo"
}, null, -1))
  , od = {
    class: "magic-login-text"
}
  , rd = {
    key: 0
}
  , ld = {
    key: 0,
    class: "magic-login-row error"
}
  , cd = {
    class: "magic-login-row"
}
  , ud = {
    class: "magic-login-row"
}
  , dd = {
    class: "magic-login-row"
}
  , pd = {
    class: "magic-login-copyright"
}
  , _d = Pn( () => R("a", {
    href: "https://sssssss.org.cn",
    target: "_blank"
}, "sssssss.org.cn", -1))
  , hd = {
    __name: "magic-login",
    props: {
        value: Boolean,
        error: String
    },
    emits: ["update:value", "update:error"],
    setup(e, {emit: t}) {
        const a = U("")
          , n = U("")
          , i = () => {
            a.value && n.value && (t("update:error", null),
            Y.sendPost("/login", {
                username: a.value,
                password: n.value
            }).success( (s, o) => {
                s && (t("update:value", !1),
                D.HEADER_MAGIC_TOKEN_VALUE = o.headers[D.HEADER_MAGIC_TOKEN],
                De.set(D.STORE.token, D.HEADER_MAGIC_TOKEN_VALUE),
                T.$emit($.LOGINED),
                a.value = "",
                n.value = "")
            }
            ).exception( (s, o) => {
                s != 401 && (o = translateCode(s, o)),
                t("update:error", o)
            }
            ).error( (s, o, r) => {
                if (r) {
                    let l = "";
                    r.response ? l = JSON.stringify(r.response.data || "") || c("code.invalid", r.response.status) : l = r.message,
                    t("update:error", l)
                }
            }
            ))
        }
        ;
        return (s, o) => {
            const r = y("magic-icon")
              , l = y("magic-input")
              , u = y("magic-button");
            return v(),
            k("div", nd, [R("div", id, [sd, R("div", od, [pe("Magic-API "), h(D).MAGIC_API_VERSION_TEXT ? (v(),
            k("span", rd, "v" + F(h(D).MAGIC_API_VERSION_TEXT), 1)) : X("", !0)]), e.error ? (v(),
            k("div", ld, [_(r, {
                icon: "error"
            }), R("span", null, F(e.error), 1)])) : X("", !0), R("div", cd, [_(r, {
                icon: "user"
            }), _(l, {
                onEnter: i,
                value: a.value,
                "onUpdate:value": o[0] || (o[0] = d => a.value = d),
                placeholder: h(c)("message.username")
            }, null, 8, ["value", "placeholder"])]), R("div", ud, [_(r, {
                icon: "password"
            }), _(l, {
                onEnter: i,
                value: n.value,
                "onUpdate:value": o[1] || (o[1] = d => n.value = d),
                type: "password",
                placeholder: h(c)("message.password")
            }, null, 8, ["value", "placeholder"])]), R("div", dd, [_(u, {
                value: h(c)("message.login"),
                onOnClick: i
            }, null, 8, ["value"])])]), R("div", pd, [pe("Copyright \xA9 2020-" + F(new Date().getYear() + 1900) + " ", 1), _d, pe(" All rights reserved.")])])
        }
    }
};
var fd = q(hd, [["__scopeId", "data-v-cbcc40fa"]])
  , gd = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: fd
}, Symbol.toStringTag, {
    value: "Module"
}));
function md(e, t) {
    T.$emit($.SWITCH_TOOLBAR, "log"),
    t.headers[D.HEADER_REQUEST_CLIENT_ID] = D.CLIENT_ID,
    t.headers[D.HEADER_REQUEST_SCRIPT_ID] = e.item.id,
    t.headers[D.HEADER_MAGIC_TOKEN] = D.HEADER_MAGIC_TOKEN_VALUE,
    t.headers[D.HEADER_REQUEST_BREAKPOINTS] = (e.decorations || []).filter(s => s.options.linesDecorationsClassName === "breakpoints").map(s => s.range.startLineNumber).join(","),
    t.responseType = "blob",
    t.validateStatus = () => !0;
    let a = 0;
    t.transformResponse = [function(s, o) {
        return a = s.size,
        o["content-disposition"] ? new Promise(r => r(s)) : new Promise(r => {
            const l = new FileReader;
            l.readAsText(s),
            l.onload = function() {
                try {
                    r(JSON.stringify(JSON.parse(this.result), null, 4))
                } catch {
                    r(s)
                }
            }
        }
        )
    }
    ];
    const n = e.path();
    T.status("api.test.begin", !0, n);
    const i = new Date().getTime();
    Y.execute(t).then(s => s.data.then(o => {
        if (T.status("api.test.success", !0, n, s.status, qi(a), new Date().getTime() - i),
        e.running = !1,
        e.responseBlob = o instanceof Blob)
            e.responseBlobValue = o,
            e.item.responseBody = null,
            e.item.responseBodyDefinition = null,
            e.responseBodyTree = null;
        else {
            e.item.responseBody = o;
            let r = Nn(e.item.responseBody, e.item.responseBodyDefinition);
            Ma(e.item.responseBodyDefinition, r) && T.$emit($.NOTIFY, {
                title: c("message.tips"),
                id: "responseBodyStructure",
                icon: "info",
                content: c("api.structure.content", "ResponseBody"),
                buttons: [{
                    title: c("api.structure.ok"),
                    onClick: () => {
                        e.item.responseBodyDefinition = r,
                        e.responseBodyTree = Qt(r)
                    }
                }, {
                    title: c("message.cancel"),
                    onClick: () => {}
                }]
            })
        }
        e.responseHeaders = s.headers,
        be( () => T.$emit($.SWITCH_TOOLBAR, "response"))
    }
    )).catch(s => {
        T.status("api.test.requestError", !1, n),
        e.running = !1,
        Y.processError(s)
    }
    )
}
function vd(e) {
    e.running = !0;
    const t = e.item
      , a = {
        baseURL: D.SERVER_URL,
        url: e.requestPath(),
        method: t.method,
        headers: {},
        responseType: "json",
        withCredentials: !0
    }
      , n = s => s.filter(o => o.value && o.value.trim()).forEach(o => a.url = a.url.replace(new RegExp(`\\{${o.name}}`,"g"), o.value.trim()));
    if (e.getGroups().filter(s => s.paths && s.paths.length > 0).map(s => s.paths).forEach(s => n(s)),
    n(t.paths || []),
    a.url.indexOf("{") > -1) {
        me.alert(c("api.test.missPath")),
        e.running = !1;
        return
    }
    D.GLOBAL.headers.filter(s => s.name).forEach(s => a.headers[s.name] = s.value),
    t.headers.filter(s => s.name).forEach(s => a.headers[s.name] = s.value);
    const i = {};
    if (D.GLOBAL.parameters.filter(s => s.name).forEach(s => i[s.name] = s.value),
    t.parameters.filter(s => s.name).forEach(s => i[s.name] = s.value),
    Object.values(i).some(s => s instanceof FileList || s instanceof File)) {
        a.headers["Content-Type"] = "multipart/form-data";
        const s = new FormData;
        Object.keys(i).forEach(o => {
            let r = i[o];
            r instanceof FileList ? Array.from(r).forEach(l => s.append(o, l, l.name)) : r instanceof File ? s.append(o, r, r.name) : s.append(o, r)
        }
        ),
        a.data = s
    } else {
        a.headers["Content-Type"] = "application/x-www-form-urlencoded",
        a.method !== "POST" || t.requestBody ? a.params = i : a.data = i;
        try {
            if (t.requestBody) {
                const s = JSON.parse(t.requestBody);
                (Array.isArray(s) && s.length > 0 || typeof s == "object" && Object.keys(s).length > 0) && (a.params = i,
                a.data = t.requestBody,
                a.headers["Content-Type"] = "application/json",
                a.transformRequest = [])
            }
        } catch {
            e.running = !1,
            me.alert(c("api.test.requestBodyError"))
        }
    }
    md(e, a)
}
var bd = {
    doTest: vd,
    getIcon: e => e.method || "GET",
    runnable: !0,
    requirePath: !0,
    name: c("api.name"),
    merge: e => (e.method = e.method || D.DEFAULT_REQUEST_METHOD,
    e.parameters = e.parameters || [],
    e.headers = e.headers || [],
    e.paths = e.paths || [],
    e.options = e.options || [],
    e),
    processSave: e => {
        const t = D.config.persistenceResponseBody !== !1;
        return {
            id: e.id,
            name: e.name,
            path: e.path,
            groupId: e.groupId,
            lock: e.lock,
            method: e.method,
            description: e.description,
            createBy: e.createBy,
            createDate: e.createDate,
            properties: e.properties,
            script: e.script,
            responseBody: t && e.responseBody || void 0,
            responseBodyDefinition: t && e.responseBodyDefinition || void 0,
            requestBody: e.requestBody,
            requestBodyDefinition: e.requestBodyDefinition,
            parameters: e.parameters.filter(a => a.name),
            headers: e.headers.filter(a => a.name),
            paths: e.paths.filter(a => a.name),
            options: e.options.filter(a => a.name)
        }
    }
}
  , Ed = {
    getIcon: e => "function",
    name: c("fn.name"),
    runnable: !1,
    requirePath: !0,
    merge: e => (e.parameters = e.parameters || [],
    e)
};
let xa;
ae.setExtensionAttribute("org.ssssssss.magicapi.modules.db.SQLModule", () => {
    var e;
    return xa && (((e = xa("datasource")[0]) == null ? void 0 : e.children) || []).filter(t => t.key).map(t => ({
        name: t.key,
        type: "org.ssssssss.magicapi.modules.db.SQLModule",
        comment: t.name
    })) || []
}
);
var yd = {
    injectResources: e => xa = e,
    requireScript: !1,
    doTest: e => {
        Y.sendJson("/datasource/jdbc/test", e).success(t => {
            t === "ok" ? me.alert(c("datasource.connected"), c("datasource.test")) : me.alert(c("datasource.connectFailed", t), c("datasource.test"))
        }
        )
    }
};
const Td = {
    class: "magic-main"
}
  , Sd = {
    class: "magic-main-body-wrapper"
}
  , xd = {
    class: "magic-main-body"
}
  , Od = {
    ref: "mrl",
    class: "magic-navbar magic-navbar__vertical"
}
  , Rd = {
    ref: "mrr",
    class: "magic-navbar magic-navbar__vertical reverse"
}
  , Ad = {
    __name: "magic-main",
    emits: ["onLoad"],
    setup(e, {expose: t, emit: a}) {
        const n = U(!1)
          , i = U({})
          , s = U(!0)
          , o = U(null)
          , r = (b, S, A) => {
            for (let M = 0, I = b.length; M < I; M++) {
                const H = b[M];
                if (H.id === S || H === S)
                    return A.push(H),
                    !0;
                if (H.folder && H.children && r(H.children, S, A))
                    return A.push(H),
                    !0
            }
            return !1
        }
          , l = b => {
            const S = Object.entries(i.value);
            for (let A = 0, M = S.length; A < M; A++) {
                const I = []
                  , H = S[A];
                if (r(H[1], b, I),
                I.length > 0)
                    return {
                        item: I[0],
                        type: H[0],
                        name: it("/" + I.reverse().map(L => L.name).join("/")),
                        path: it("/" + I.reverse().map(L => L.path || "").join("/"))
                    }
            }
        }
        ;
        Ye("findResource", l);
        const u = [{
            type: "api",
            title: c("api.name"),
            icon: "api"
        }, {
            type: "function",
            title: c("fn.name"),
            icon: "function"
        }]
          , d = {
            api: bd,
            function: Ed,
            datasource: yd
        };
        D.PLUGINS.filter(b => b.resource && b.resource.length > 0).map(b => b.resource).forEach(b => b.forEach(S => {
            u.push({
                type: S.type,
                icon: S.icon,
                title: c(S.title)
            }),
            S.service && (d[S.type] = S.service)
        }
        )),
        Ye("service", d),
        u.map(b => b.type).forEach(b => i.value[b] = []);
        const g = [{
            type: "datasource",
            title: c("datasource.title"),
            icon: "datasource",
            name: c("datasource.name")
        }];
        D.PLUGINS.filter(b => b.datasources && b.datasources.length > 0).map(b => b.datasources).forEach(b => b.forEach(S => {
            g.push({
                type: S.type,
                icon: S.icon,
                title: S.title,
                name: S.name
            })
        }
        )),
        g.map(b => b.type).forEach(b => i.value[b] = []),
        Ye("resources", () => {
            const b = [...u, ...g]
              , S = A => A.length === 1 && A[0].id.endsWith(":0") ? A[0].children : A;
            return b.map(A => ({
                key: A.type,
                navbar: A,
                tree: S(JSON.parse(JSON.stringify(i.value[A.type] || [])))
            }))
        }
        ),
        Object.values(d).forEach(b => b.injectResources && b.injectResources(S => i.value[S])),
        be( () => n.value = !0);
        const f = b => ({
            ...b.node,
            folder: b.node.parentId !== void 0,
            opened: b.node.parentId !== void 0 && D.DEFAULT_EXPAND === !0,
            children: b.children && b.children.length ? b.children.map(S => f(S)) : void 0
        })
          , E = (b, S) => {
            var M;
            s.value = !0,
            i.value = {};
            const A = b ? ((M = u.find(I => I.type === b) || g.find(I => I.type === b)) == null ? void 0 : M.title) || "" : c("message.all");
            T.status("message.getResource", !0, A),
            Y.send("/resource").success(I => {
                [...u, ...g].filter(H => !b || H.type === b).forEach(H => {
                    var L, j;
                    i.value[H.type] = ((j = (L = I[H.type]) == null ? void 0 : L.children) == null ? void 0 : j.map(ie => f(ie))) || []
                }
                ),
                s.value = !1,
                T.status("message.getResourceFinish", !0, A),
                be( () => S())
            }
            )
        }
        ;
        T.$on($.RELOAD_RESOURCES, () => {
            s.value = !0,
            Y.sendGet("/reload").success( () => {
                T.status("message.reloadResourceSuccess"),
                E(null, () => T.$emit($.RELOAD_RESOURCES_FINISH))
            }
            ).end( () => s.value = !1)
        }
        );
        const m = b => E(b, () => T.$emit($.LOAD_RESOURCES_FINISH, b));
        T.$on($.LOAD_RESOURCES, m),
        T.$on($.RELOAD_RESOURCES_FINISH, m);
        const N = b => {
            let S;
            return Object.values(i.value).some(A => {
                const M = [];
                if (r(A, b, M)) {
                    S = M[0];
                    const I = u.findIndex(H => H.type === M[M.length - 1].type);
                    return o.value && o.value.select(I),
                    !0
                }
                return !1
            }
            ),
            S
        }
        ;
        T.$on($.SELECT_NAVBAR_BY_ITEM, N),
        T.$on($.OPEN_WITH_ID, b => {
            const S = N(b);
            S && T.$emit($.OPEN_ITEM, S)
        }
        ),
        T.$on($.LOGOUT, () => i.value = {}),
        t({
            loadResources: m
        }),
        pt( () => a("onLoad"));
        let C = 0;
        const x = () => {
            if (++C % u.length === 0)
                try {
                    JSON.parse(De.get(D.RECENT_OPENED_TAB) || "[]").forEach(b => {
                        T.$emit($.OPEN_WITH_ID, b)
                    }
                    )
                } catch (b) {
                    console.error(b)
                }
        }
        ;
        return T.$on($.REFRESH_RESOURCE, b => {
            const S = l(b);
            S && Y.sendGet(`/resource/file/${b}`).success(A => {
                Object.keys(A).forEach(M => S.item[M] = A[M])
            }
            )
        }
        ),
        (b, S) => {
            const A = y("magic-resource")
              , M = y("magic-loading")
              , I = y("magic-resizer")
              , H = y("magic-navbar-item")
              , L = y("magic-navbar")
              , j = y("magic-script-editor")
              , ie = y("magic-toolbar")
              , se = y("magic-data-resource")
              , J = y("magic-search")
              , Ee = y("magic-export")
              , xe = y("magic-upload")
              , Xe = y("magic-push")
              , St = y("magic-recent-opened");
            return v(),
            k("div", Td, [n.value ? (v(),
            V(L, {
                key: 0,
                direction: "vertical",
                to: b.$refs.mrl,
                ref_key: "mnl",
                ref: o,
                spliter: !0
            }, {
                default: w( () => [(v(),
                k(te, null, fe(u, (Ne, ke) => _(H, mt({
                    key: ke
                }, Ne), {
                    default: w( () => [_(I, {
                        max: 750,
                        min: 270,
                        direction: "x"
                    }, {
                        default: w( () => [_(M, {
                            loading: s.value
                        }, {
                            default: w( () => [_(A, mt(Ne, {
                                data: i.value[Ne.type],
                                onClose: S[0] || (S[0] = $a => b.$refs.mnl.select(-1)),
                                onOnLoad: x,
                                "tooltip-direction": "left-bottom"
                            }), null, 16, ["data"])]),
                            _: 2
                        }, 1032, ["loading"])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1040)), 64))]),
                _: 1
            }, 8, ["to"])) : X("", !0), R("div", Sd, [R("div", xd, [R("div", Od, null, 512), _(j), R("div", Rd, null, 512)]), _(ie)]), _(L, {
                reverse: !0,
                "default-select": -1,
                direction: "vertical",
                to: b.$refs.mrr,
                spliter: !0,
                "tooltip-direction": "left"
            }, {
                default: w( () => [(v(),
                k(te, null, fe(g, (Ne, ke) => _(H, {
                    key: ke,
                    title: Ne.title,
                    icon: Ne.icon
                }, {
                    default: w( () => [n.value ? (v(),
                    V(I, {
                        key: 0,
                        max: 420,
                        min: 140,
                        value: 200,
                        direction: "x",
                        reverse: !0
                    }, {
                        default: w( () => [_(M, {
                            loading: s.value
                        }, {
                            default: w( () => [_(se, {
                                type: Ne.type,
                                title: Ne.name,
                                data: i.value[Ne.type]
                            }, null, 8, ["type", "title", "data"])]),
                            _: 2
                        }, 1032, ["loading"])]),
                        _: 2
                    }, 1024)) : X("", !0)]),
                    _: 2
                }, 1032, ["title", "icon"])), 64))]),
                _: 1
            }, 8, ["to"]), _(J), _(Ee), _(xe), _(Xe), _(St)])
        }
    }
};
var Cd = q(Ad, [["__scopeId", "data-v-478ba993"]])
  , Id = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cd
}, Symbol.toStringTag, {
    value: "Module"
}));
const kd = {
    class: "magic-recent-opened"
}
  , Ld = ["onClick"]
  , Nd = {
    key: 1
}
  , wd = {
    key: 0,
    style: {
        width: "100%",
        height: "100px"
    }
}
  , Dd = {
    __name: "magic-recent-opened",
    setup(e) {
        const t = We([])
          , a = U(!1)
          , n = oe("findResource")
          , i = oe("service");
        try {
            JSON.parse(De.get(D.RECENT_OPENED) || "[]").forEach(r => t.push(r))
        } catch {}
        const s = _e( () => t.map(r => n(r)).filter(r => r && i[r.type]))
          , o = r => {
            T.$emit($.OPEN_WITH_ID, r),
            a.value = !1
        }
        ;
        return T.$on($.DO_RECENT, () => a.value = !a.value),
        T.$on($.CLOSE, r => {
            if (r.id) {
                const l = t.findIndex(u => u === r.id);
                l > -1 && t.splice(l, 1),
                t.unshift(r.id),
                t.length > 20 && t.splice(t.length - 1, 1),
                De.set(D.RECENT_OPENED, Be(t))
            }
        }
        ),
        (r, l) => {
            const u = y("magic-text-icon")
              , d = y("magic-empty")
              , g = y("magic-dialog");
            return v(),
            V(g, {
                value: a.value,
                "onUpdate:value": l[0] || (l[0] = f => a.value = f),
                title: h(c)("editor.tooltip.recent"),
                padding: "0",
                shade: !1
            }, {
                default: w( () => [R("ul", kd, [(v(!0),
                k(te, null, fe(h(s), (f, E) => (v(),
                k("li", {
                    key: E,
                    onClick: ye(m => o(f.item.id), ["stop"])
                }, [h(i)[f.type] && h(i)[f.type].getIcon ? (v(),
                V(u, {
                    key: 0,
                    icon: h(i)[f.type].getIcon(f.item)
                }, null, 8, ["icon"])) : X("", !0), R("label", null, F(f.name), 1), h(i)[f.type].requirePath && f.path ? (v(),
                k("span", Nd, "(" + F(f.path) + ")", 1)) : X("", !0)], 8, Ld))), 128))]), h(s).length === 0 ? (v(),
                k("div", wd, [_(d, {
                    text: "empty."
                })])) : X("", !0)]),
                _: 1
            }, 8, ["value", "title"])
        }
    }
};
var Md = q(Dd, [["__scopeId", "data-v-44903aa6"]])
  , Pd = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Md
}, Symbol.toStringTag, {
    value: "Module"
}));
const Ud = {
    class: "magic-resource-header"
}
  , $d = ["data-title", "data-tooltip-direction", "onClick"]
  , Fd = {
    key: 0
}
  , Bd = {
    key: 0
}
  , Hd = {
    class: "magic-create-group"
}
  , jd = {
    key: 0
}
  , Vd = {
    __name: "magic-resource",
    props: {
        type: String,
        title: String,
        data: Array,
        tooltipDirection: String
    },
    emits: ["close", "onLoad"],
    setup(e, {emit: t}) {
        const a = e
          , n = ee("magic-backup-file")
          , i = oe("service")[a.type]
          , s = i.requirePath
          , o = i.getIcon
          , r = U("")
          , l = U(!0)
          , u = U(!1)
          , d = U("")
          , g = U(null)
          , f = oe("activateUserFiles")
          , E = _e( () => l.value ? c("resource.createGroup") : c("resource.updateGroup"))
          , m = U(!0)
          , N = U({})
          , C = U({})
          , x = U(!1)
          , b = U({
            type: a.type
        })
          , S = _e( () => a.data)
          , A = U([{
            name: c("resource.createGroup"),
            icon: "group-add",
            onClick: () => {
                b.value = {
                    type: a.type,
                    parentId: "0"
                },
                l.value = !0,
                x.value = !0
            }
        }, {
            name: c("resource.header.expand"),
            icon: "expand-all",
            onClick: () => Ze(S.value, P => P.opened = !0)
        }, {
            name: c("resource.header.collapse"),
            icon: "collapse-all",
            onClick: () => Ze(S.value, P => P.opened = !1)
        }, {
            name: c("resource.header.desc"),
            icon: "descending",
            show: () => m.value,
            onClick: () => m.value = !1
        }, {
            name: c("resource.header.asc"),
            icon: "ascending",
            show: () => !m.value,
            onClick: () => m.value = !0
        }, {
            separator: !0
        }, {
            name: c("resource.header.position"),
            icon: "position",
            onClick: () => {
                C.value && N.value && (T.$emit($.SELECT_NAVBAR_BY_ITEM, N.value),
                C.value.scrollIntoView(N.value))
            }
        }, {
            name: c("message.hide"),
            icon: "minimize",
            onClick: () => t("close")
        }])
          , M = (P, G, z, B, ue) => {
            ue = ue || [],
            G = G || [];
            let Te = G.find(at => at === P || at.id === P);
            if (Te)
                return z.push(Te.name),
                ue.push(Te),
                i.requirePath && Te.path && B.push(Te.path),
                Te;
            for (let at = 0, aa = G.length; at < aa; at++) {
                const Pe = G[at];
                if (Pe.folder && Pe.children && (Te = M(P, Pe.children, z, B)))
                    return z.unshift(Pe.name),
                    ue.unshift(Pe),
                    i.requirePath && Pe.path && B.unshift(Pe.path),
                    Te
            }
        }
          , I = (P, G) => {
            const z = []
              , B = [];
            M(Be(P), Be(S.value), z, B);
            const ue = B.length > 0 ? it(`/${B.join("/")}`) : "";
            return G ? ue : `/${z.join("/")}${i.requirePath ? `(${ue})` : ""}`
        }
          , H = P => I(P)
          , L = []
          , j = (P, G) => {
            if (P)
                if (P.folder)
                    T.$emit($.OPEN_GROUP, P);
                else {
                    let z = L.find(B => B.item == P);
                    z || (z = We({
                        type: a.type,
                        title: a.title,
                        language: i.language || "magicscript",
                        pageType: i.pageType,
                        component: i.component,
                        item: i.merge(P),
                        path: () => I(P),
                        requestPath: () => {
                            const B = [];
                            return M(Be(P), Be(S.value), [], B),
                            it(`/${B.join("/")}`)
                        }
                        ,
                        getGroups: () => {
                            const B = [];
                            return M(Be(P), Be(S.value), [], [], B),
                            B
                        }
                        ,
                        getIcon: i.getIcon,
                        runnable: i.runnable,
                        doTest: i.doTest,
                        processSave: i.processSave || (B => B)
                    }),
                    L.push(z)),
                    T.$emit($.OPEN, z, G)
                }
        }
        ;
        T.$on($.OPEN, P => N.value = P.item),
        T.$on($.OPEN_EMPTY, () => N.value = null);
        const {proxy: ie} = bt()
          , se = () => {
            const P = {
                ...b.value
            };
            delete P.children,
            delete P.opened,
            delete P.folder,
            Y.sendJson("/resource/folder/save", P).success(G => {
                if (G) {
                    const z = {
                        ...Be(b.value),
                        folder: !0,
                        id: G
                    };
                    z.options = z.options || [],
                    z.paths = z.paths || [],
                    xe(z),
                    T.status("resource.saveGroupSuccess", !0, a.title, I(G)),
                    x.value = !1,
                    T.loading(2)
                } else {
                    const z = I(b.value);
                    T.status("resource.saveGroupFailed", !1, a.title, z),
                    ie.$alert(c("resource.saveGroupFailed", a.title, z))
                }
            }
            )
        }
          , J = (P, G) => new Promise(z => Y.send("/resource/move", {
            src: P.id,
            groupId: G.groupId || G.id
        }).success(B => {
            const ue = P.folder ? "resource.moveGroup" : "resource.moveResource"
              , Te = I(P);
            B ? (P.folder ? T.status(ue + "Success", !0, a.title, Te) : T.status(ue + "Success", !0, Te),
            P[P.folder ? "parentId" : "groupId"] = G.groupId || G.id) : P.folder ? (T.status(ue + "Failed", !1, a.title, Te),
            ie.$alert(c(ue + "Failed", a.title, Te))) : (T.status(ue + "Failed", !1, Te),
            ie.$alert(c(ue + "Failed", Te))),
            z(B)
        }
        ))
          , Ee = (P, G) => {
            G = G || S.value;
            const z = G.findIndex(B => B === P || B.id === P.id);
            z > -1 ? G.splice(z, 1) : G.forEach(B => Ee(P, B.children || []))
        }
          , xe = (P, G) => {
            G = G || S.value || [];
            const z = G.find(B => B.id === P.id || P.groupId === B.id);
            if (z)
                return z.children = z.children || [],
                z.opened = !0,
                z.id === P.id ? (z.name = P.name,
                z.path = P.path,
                z.parentId = P.parentId) : z.children.push(P),
                !0;
            if (P.parentId === "0")
                return G.push(P),
                !0;
            {
                if (G.some(ue => xe(P, ue.children || [])))
                    return !0;
                const B = P.parentId !== void 0 && G.find(ue => ue.id === P.parentId);
                if (B)
                    return B.children = B.children || [],
                    B.children.push(P),
                    !0
            }
            return !1
        }
        ;
        T.$on($.OPEN_ITEM, P => {
            const G = Be(S.value);
            G && j(M(Be(P), G, [], []), !0)
        }
        );
        const Xe = (P, G) => {
            if (P && G) {
                const z = [];
                P.folder ? (z.push.apply(z, [{
                    label: c("resource.contextmenu.newFile", a.title),
                    icon: "plus",
                    onClick() {
                        const B = {
                            groupId: P.id,
                            name: c("message.untitled"),
                            script: i.defaultScript || "return 'Hello magic-api'",
                            path: i.requirePath ? "" : void 0
                        };
                        xe(B),
                        j(B, !0)
                    }
                }, {
                    label: c("resource.createGroup"),
                    icon: "group-add",
                    onClick() {
                        l.value = !0,
                        b.value = {
                            parentId: P.id,
                            type: a.type
                        },
                        x.value = !0
                    }
                }, {
                    label: c("resource.updateGroup"),
                    icon: "update",
                    onClick() {
                        l.value = !1,
                        b.value = {
                            ...P
                        },
                        x.value = !0
                    }
                }, {
                    label: c("resource.copyGroup"),
                    icon: "copy",
                    onClick() {
                        d.value = P.id,
                        u.value = !0
                    }
                }, {
                    label: c("resource.contextmenu.deleteGroup"),
                    icon: "delete",
                    onClick() {
                        ie.$confirm(c("resource.contextmenu.deleteGroup"), c("resource.deleteGroupConfirm", a.title, I(P)), () => {
                            P.id ? Y.send("/resource/delete", {
                                id: P.id
                            }).success(B => {
                                B ? (T.status("resource.deleteGroupSuccess", !0, a.title, I(P)),
                                Ee(P)) : (ie.$alert("resource.deleteGroupFailed", a.title, I(P)),
                                T.status("resource.deleteGroupFailed", !1, a.title, I(P)))
                            }
                            ) : Ee(P)
                        }
                        )
                    }
                }, {
                    label: c("resource.contextmenu.exportGroup"),
                    icon: "download",
                    onClick() {
                        Y.send(`/download?groupId=${P.id}`, null, {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            responseType: "blob"
                        }).success(B => {
                            Da(B, `${P.name}.zip`),
                            T.status("resource.groupExport", !0, P.name, a.title)
                        }
                        )
                    }
                }]),
                P.parentId !== "0" && z.push({
                    label: c("resource.contextmenu.moveToRoot"),
                    icon: "move",
                    onClick() {
                        ie.$confirm(c("resource.moveGroup"), c("resource.moveRootGroupConfirm", I(P)), () => {
                            Y.send("/resource/move", {
                                src: P.id,
                                groupId: "0"
                            }).success(B => {
                                B ? (T.status("resource.moveRootSuccess", !0, a.title, I(P)),
                                P.parentId = "0",
                                Ee(P),
                                xe(P)) : (ie.$alert(c("resource.moveRootFailed", a.title, I(P))),
                                T.status("resource.moveRootFailed", !1, a.title, I(P)))
                            }
                            )
                        }
                        )
                    }
                })) : (z.push.apply(z, [{
                    label: c("resource.contextmenu.copy", a.title),
                    icon: "copy",
                    divided: !0,
                    onClick: () => {
                        Y.send(`/resource/file/${P.id}`).success(B => {
                            B.id = `copy${new Date().getTime()}d${parseInt(Math.random() * 1e5)}`,
                            xe(B),
                            j(B, !0),
                            B.name = B.name + `(${c("message.copy")})`,
                            i.requirePath && (B.path = B.path + "_copy")
                        }
                        )
                    }
                }]),
                i.requirePath && (a.type === "api" && z.push({
                    label: c("resource.contextmenu.copyWithPath"),
                    icon: "copy",
                    onClick: () => {
                        let B = I(P, !0);
                        B && (B = it(D.SERVER_URL + "/" + B),
                        Ya(B) ? T.status("resource.copyPathSuccess", !0, a.title, B) : T.status("resource.copyPathFailed", !1, a.title, B))
                    }
                }),
                z.push.apply(z, [{
                    label: c("resource.contextmenu.copyRelativePath"),
                    icon: "copy",
                    divided: !0,
                    onClick: () => {
                        const B = I(P, !0);
                        B && (Ya(B) ? T.status("resource.copyRelativePathSuccess", !0, a.title, B) : T.status("resource.copyRelativePathFailed", !1, a.title, B))
                    }
                }]),
                P.lock === D.LOCKED ? z.push({
                    label: c("resource.contextmenu.unlock"),
                    icon: "unlock",
                    onClick: () => Y.sendPost("/resource/unlock", {
                        id: P.id
                    }).success(B => {
                        T.status(B ? "message.unlockSuccess" : "message.unlockFailed", B, I(P)),
                        B && (P.lock = D.UNLOCK)
                    }
                    )
                }) : z.push({
                    label: c("resource.contextmenu.lock"),
                    icon: "lock",
                    onClick: () => Y.sendPost("/resource/lock", {
                        id: P.id
                    }).success(B => {
                        T.status(B ? "message.lockSuccess" : "message.lockFailed", B, I(P)),
                        B && (P.lock = D.LOCKED)
                    }
                    )
                })),
                P.id && z.push({
                    label: c("toolbars.history"),
                    icon: "history",
                    onClick: () => {
                        T.$emit($.ADD_FOOTER_TOOLBAR, {
                            component: Ue(n),
                            id: "backup-file",
                            icon: "history",
                            title: c("toolbars.viewHistory", I(P)),
                            allowClose: !0,
                            data: {
                                id: P.id
                            }
                        })
                    }
                }),
                z.push.apply(z, [{
                    label: c("message.refresh"),
                    icon: "refresh",
                    onClick: () => {
                        T.$emit($.REFRESH_RESOURCE, P.id)
                    }
                }, {
                    label: c("resource.contextmenu.delete"),
                    icon: "delete",
                    onClick: () => {
                        const B = `${a.title}\u300C${I(P)}\u300D`;
                        ie.$confirm(c("message.deleteTips", a.title), c("message.deleteConfirm", B), () => {
                            P.id ? Y.send("/resource/delete", {
                                id: P.id
                            }).success(ue => {
                                ue ? (T.status("message.deleteSuccess", !0, B),
                                Ee(P),
                                T.$emit($.DELETE_FILE, P)) : (T.status("message.deleteFailed", !1, B),
                                ie.$alert(c("message.deleteFailed", B)))
                            }
                            ) : (T.status("message.deleteSuccess", !0, B),
                            Ee(P),
                            T.$emit($.DELETE_FILE, P))
                        }
                        )
                    }
                }])),
                D.PLUGINS.forEach(B => {
                    if (B.contextmenu && typeof B.contextmenu == "function") {
                        const ue = B.contextmenu({
                            ...P,
                            menuType: "resource"
                        });
                        ue && ue.length && ue.forEach(Te => z.push(Te))
                    }
                }
                ),
                ie.$contextmenu({
                    menus: z,
                    event: G
                })
            }
        }
          , St = P => {
            ie.$contextmenu({
                event: P,
                menus: A.value.slice(0, 5).filter(G => !G.show || G.show()).map(G => ({
                    icon: G.icon,
                    label: G.name,
                    onClick: G.onClick
                }))
            })
        }
        ;
        let Ne = null;
        const ke = () => {
            g.value && Y.sendPost("/resource/folder/copy", {
                src: d.value,
                target: g.value.id.endsWith("-root") ? "0" : g.value.id
            }).success(P => {
                Ne = P,
                u.value = !1,
                T.$emit($.LOAD_RESOURCES)
            }
            )
        }
          , $a = oe("findResource");
        return T.$on($.LOAD_RESOURCES_FINISH, () => {
            Ne && be( () => {
                const P = $a(Ne);
                T.$emit($.SELECT_NAVBAR_BY_ITEM, P.item),
                T.$emit($.OPEN_GROUP, P.item)
            }
            )
        }
        ),
        pt( () => t("onLoad")),
        (P, G) => {
            const z = y("magic-icon")
              , B = y("magic-input")
              , ue = y("magic-empty")
              , Te = y("magic-text-icon")
              , at = y("magic-avatar-group")
              , aa = y("magic-tree")
              , Pe = y("magic-button")
              , Fa = y("magic-button-group")
              , Ba = y("magic-dialog")
              , Fn = y("magic-resource-choose");
            return v(),
            k("div", {
                class: "magic-resource",
                onContextmenu: G[10] || (G[10] = ye(Z => St(Z), ["prevent"]))
            }, [R("div", Ud, [_(z, {
                icon: "search",
                size: "14px"
            }), _(B, {
                value: r.value,
                "onUpdate:value": G[0] || (G[0] = Z => r.value = Z),
                placeholder: h(c)("message.searchText"),
                width: "100%"
            }, null, 8, ["value", "placeholder"]), R("ul", null, [(v(!0),
            k(te, null, fe(A.value, (Z, Ha) => (v(),
            k(te, {
                key: Ha
            }, [!Z.show || Z.show() ? (v(),
            k("li", {
                key: 0,
                "data-title": Z.name || "",
                "data-tooltip-direction": e.tooltipDirection,
                onClick: _p => Z.onClick && Z.onClick(),
                class: ve({
                    separator: Z.separator
                })
            }, [Z.separator ? X("", !0) : (v(),
            V(z, {
                key: 0,
                icon: Z.icon
            }, null, 8, ["icon"]))], 10, $d)) : X("", !0)], 64))), 128))])]), !e.data || e.data.length === 0 ? (v(),
            V(ue, {
                key: 0,
                text: h(c)("message.empty", e.title)
            }, null, 8, ["text"])) : (v(),
            V(aa, {
                key: 1,
                ref_key: "treeObj",
                ref: C,
                data: h(S),
                onItemClick: j,
                onContextmenu: Xe,
                draggable: !0,
                sort: !0,
                descending: m.value,
                onMove: J,
                filter: r.value,
                "filter-text": H,
                selected: N.value
            }, {
                folder: w( ({item: Z}) => [_(z, {
                    icon: Z.opened ? "arrow-bottom" : "arrow-right",
                    onClick: ye(Ha => Z.opened = !Z.opened, ["stop"])
                }, null, 8, ["icon", "onClick"]), _(z, {
                    icon: "list"
                }), R("label", null, F(Z.name), 1), h(s) && Z.path ? (v(),
                k("span", Fd, "(" + F(Z.path) + ")", 1)) : X("", !0)]),
                file: w( ({item: Z}) => [_(Te, {
                    icon: h(o)(Z)
                }, null, 8, ["icon"]), R("label", null, F(Z.name), 1), h(s) && Z.path ? (v(),
                k("span", Bd, "(" + F(Z.path) + ")", 1)) : X("", !0), Z.lock === "1" ? (v(),
                V(z, {
                    key: 1,
                    icon: "lock"
                })) : X("", !0), _(at, {
                    users: h(f)[Z.id] || [],
                    max: 3,
                    size: 20
                }, null, 8, ["users"])]),
                _: 1
            }, 8, ["data", "descending", "filter", "selected"])), _(Ba, {
                title: h(E),
                value: x.value,
                "onUpdate:value": G[5] || (G[5] = Z => x.value = Z),
                width: "350px"
            }, {
                default: w( () => [R("ul", Hd, [R("li", null, [R("label", null, F(h(c)("resource.form.groupName")) + "\uFF1A", 1), _(B, {
                    value: b.value.name,
                    "onUpdate:value": G[1] || (G[1] = Z => b.value.name = Z),
                    placeholder: h(c)("resource.form.placeholder.name", e.title)
                }, null, 8, ["value", "placeholder"])]), h(s) ? (v(),
                k("li", jd, [R("label", null, F(h(c)("resource.form.groupPath")) + "\uFF1A", 1), _(B, {
                    value: b.value.path,
                    "onUpdate:value": G[2] || (G[2] = Z => b.value.path = Z),
                    placeholder: h(c)("resource.form.placeholder.path", e.title)
                }, null, 8, ["value", "placeholder"])])) : X("", !0)]), _(Fa, {
                    align: "right",
                    style: {
                        padding: "5px 0"
                    }
                }, {
                    default: w( () => [_(Pe, {
                        value: h(E),
                        type: "active",
                        onOnClick: G[3] || (G[3] = Z => se())
                    }, null, 8, ["value"]), _(Pe, {
                        value: h(c)("message.cancel"),
                        onOnClick: G[4] || (G[4] = Z => x.value = !1)
                    }, null, 8, ["value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["title", "value"]), _(Ba, {
                value: u.value,
                "onUpdate:value": G[9] || (G[9] = Z => u.value = Z),
                title: h(c)("resource.copyGroup"),
                shade: !1,
                padding: "0",
                width: "400px",
                overflow: "hidden"
            }, {
                default: w( () => [_(Fn, {
                    ref: "chooseGroup",
                    value: g.value,
                    "onUpdate:value": G[6] || (G[6] = Z => g.value = Z),
                    file: !1,
                    type: e.type,
                    single: !0
                }, null, 8, ["value", "type"]), _(Fa, {
                    align: "right",
                    style: {
                        "margin-right": "5px",
                        "margin-bottom": "5px"
                    }
                }, {
                    default: w( () => [_(Pe, {
                        value: h(c)("message.expand"),
                        onOnClick: G[7] || (G[7] = Z => P.$refs.chooseGroup.expand(!0))
                    }, null, 8, ["value"]), _(Pe, {
                        value: h(c)("message.collapse"),
                        onOnClick: G[8] || (G[8] = Z => P.$refs.chooseGroup.expand(!1))
                    }, null, 8, ["value"]), _(Pe, {
                        type: "active",
                        value: h(c)("message.copy"),
                        onOnClick: ke
                    }, null, 8, ["value"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["value", "title"])], 32)
        }
    }
};
var Gd = q(Vd, [["__scopeId", "data-v-713f021e"]])
  , zd = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Gd
}, Symbol.toStringTag, {
    value: "Module"
}));
const Fe = e => (Aa("data-v-6435d26c"),
e = e(),
Ca(),
e)
  , Yd = {
    class: "magic-script-editor"
}
  , qd = {
    key: 0,
    class: "magic-empty-container"
}
  , Kd = {
    class: "magic-hot-key"
}
  , Wd = Fe( () => R("em", null, "Ctrl + S", -1))
  , Xd = Fe( () => R("br", null, null, -1))
  , Jd = Fe( () => R("em", null, "Ctrl + Q", -1))
  , Qd = Fe( () => R("br", null, null, -1))
  , Zd = Fe( () => R("em", null, "Alt + /", -1))
  , ep = Fe( () => R("br", null, null, -1))
  , tp = Fe( () => R("em", null, "F8", -1))
  , ap = Fe( () => R("br", null, null, -1))
  , np = Fe( () => R("em", null, "F6", -1))
  , ip = Fe( () => R("br", null, null, -1))
  , sp = Fe( () => R("em", null, "Ctrl + Alt + L", -1))
  , op = Fe( () => R("br", null, null, -1))
  , rp = Fe( () => R("em", null, "Ctrl + E", -1))
  , lp = {
    key: 0
}
  , cp = {
    class: "magic-monaco-editor-wrapper"
}
  , up = {
    __name: "magic-script-editor",
    emits: ["onLoad"],
    setup(e, {emit: t}) {
        const {proxy: a} = bt()
          , n = We([])
          , i = U({})
          , s = U(!0)
          , o = U(null)
          , r = U(null)
          , l = oe("activateUserFiles")
          , u = {
            String: "java.lang.String",
            Integer: "java.lang.Integer",
            Double: "java.lang.Double",
            Long: "java.lang.Long",
            Byte: "java.lang.Byte",
            Short: "java.lang.Short",
            Float: "java.lang.Float",
            MultipartFile: "org.springframework.web.multipart.MultipartFile",
            MultipartFiles: "java.util.List"
        };
        ea.setEnvironment( () => {
            var A;
            const x = {}
              , b = (A = i.value) == null ? void 0 : A.item
              , S = M => M && Array.isArray(M) && M.forEach(I => {
                I && typeof I.name == "string" && I.dataType && (x[I.name] = u[I.dataType] || "java.lang.Object")
            }
            );
            return b && (S(b == null ? void 0 : b.parameters),
            S(b == null ? void 0 : b.paths)),
            x
        }
        );
        const d = x => {
            let b = n.findIndex(S => S === x);
            if (n.splice(b, 1),
            x === i.value) {
                let S = n.length;
                b < S ? T.$emit($.OPEN, n[b]) : S > 0 && T.$emit($.OPEN, n[b - 1])
            }
            T.$emit($.CLOSE, x.item),
            n.length === 0 && (T.$emit($.OPEN_EMPTY),
            i.value = {})
        }
        ;
        et(n, x => {
            De.set(D.RECENT_OPENED_TAB, x.filter(b => {
                var S;
                return (S = b.item) == null ? void 0 : S.id
            }
            ).map(b => b.item.id))
        }
        );
        const g = x => {
            const b = i.value;
            if (b && b.item) {
                const S = i.value.processSave(b.item);
                return Object.keys(S).forEach(A => b.item[A] = S[A]),
                Y.sendJson(`/resource/file/${i.value.type}/save?auto=${x ? 0 : 1}`, S).success(A => {
                    const M = `${b.title}\u300C${b.path()}\u300D`;
                    A ? (T.status("message.saveSuccess", !0, M),
                    b.tmpObject = JSON.parse(JSON.stringify(S)),
                    b.item.id !== A && T.loading(1),
                    b.item.id = A) : (T.status("message.saveFailed", !1, M),
                    a.$alert(c("message.saveFailed", M)))
                }
                )
            }
        }
          , f = () => i.value.doTest(i.value)
          , E = x => {
            if (i.value.debuging) {
                o.value.removedDecorations(i.value.debugDecorations),
                i.value.debuging = !1,
                i.value.variables = null;
                const b = (i.value.decorations || []).filter(S => S.options.linesDecorationsClassName === "breakpoints").map(S => S.range.startLineNumber).join("|");
                T.send(Se.RESUME_BREAKPOINT, [i.value.item.id, x === !0 ? "1" : "0", b].join(","))
            }
        }
          , m = (x, b, S) => {
            const A = [{
                label: c("editor.tab.close"),
                divided: !0,
                onClick() {
                    d(b)
                }
            }, {
                label: c("editor.tab.closeOther"),
                divided: !0,
                onClick() {
                    [...n].forEach( (M, I) => I != S && d(M))
                }
            }, {
                label: c("editor.tab.closeLeft"),
                onClick() {
                    [...n].forEach( (M, I) => I < S && d(M))
                }
            }, {
                label: c("editor.tab.closeRight"),
                divided: !0,
                onClick() {
                    [...n].forEach( (M, I) => I > S && d(M))
                }
            }, {
                label: c("editor.tab.closeAll"),
                onClick() {
                    [...n].forEach(M => d(M))
                }
            }];
            D.PLUGINS.forEach(M => {
                if (M.contextmenu && typeof M.contextmenu == "function") {
                    const I = M.contextmenu({
                        ...b,
                        menuType: "editorTab"
                    });
                    I && I.length && I.forEach(H => A.push(H))
                }
            }
            ),
            a.$contextmenu({
                menus: A,
                event: x
            })
        }
          , N = x => Object.keys(x.tmpObject || {}).some(b => {
            const S = x.tmpObject[b]
              , A = x.item[b];
            return S === A || b === "properties" || b === "responseBody" || b === "responseBodyDefinition" ? !1 : typeof S == "object" || typeof A == "object" ? JSON.stringify(S) !== JSON.stringify(A) : S !== A
        }
        );
        T.$on($.LOGOUT, () => [...n].forEach(x => d(x))),
        T.$on($.DELETE_FILE, x => {
            const b = n.findIndex(S => S.item === x);
            b > -1 && d(n[b])
        }
        ),
        T.$on($.RELOAD_RESOURCES_FINISH, () => [...n].forEach(x => d(x))),
        T.$event(Se.LOGIN_RESPONSE, () => {
            var x;
            i.value && T.send(Se.SET_FILE_ID, ((x = i.value.item) == null ? void 0 : x.id) || "0")
        }
        );
        const C = x => {
            x && o.value && (x.scrollTop = o.value.getScrollTop())
        }
        ;
        return T.$on($.OPEN, x => {
            let b = n.find(S => S.item === x.item || S.item.id && S.item.id === x.item.id);
            T.send(Se.SET_FILE_ID, x.item.id || "0"),
            b ? (i.value = b,
            s.value = !1,
            be( () => o.value.setScrollTop(b.scrollTop || 0))) : (n.push(x),
            i.value = x,
            x.item.id && !x.item.script ? (s.value = !0,
            Y.sendGet(`/resource/file/${x.item.id}`).success(S => {
                T.status("message.getDetail", !0, `${x.title}\u300C${x.path()}\u300D`),
                Object.keys(S).forEach(A => x.item[A] = S[A]),
                x.tmpObject = JSON.parse(JSON.stringify(x.processSave(S))),
                s.value = !1,
                be( () => o.value.setScrollTop(0))
            }
            )) : (x.tmpObject = JSON.parse(JSON.stringify(x.processSave(x.item))),
            s.value = !1,
            be( () => o.value.setScrollTop(0)))),
            i.value.decorations && i.value.decorations.length > 0 && be( () => {
                const S = Be(i.value.decorations);
                i.value.debugDecorations = o.value.appendDecoration(S).map( (A, M) => {
                    var I;
                    return ((I = S[M].options) == null ? void 0 : I.className) === "debug-line" ? A : null
                }
                ).filter(A => A !== null) || []
            }
            ),
            be( () => r.value && r.value.scrollIntoView(x))
        }
        ),
        T.$on($.DO_SAVE, g),
        T.$on($.DO_TEST, () => {
            const x = i.value;
            x && x.item && x.runnable && x.doTest && x.running !== !0 && (D.AUTO_SAVE && x.item.lock !== "1" ? g().end(b => b && f()) : f())
        }
        ),
        T.$event(Se.BREAKPOINT, ([x,{range: b, variables: S}]) => {
            var A, M;
            if (((M = (A = i.value) == null ? void 0 : A.item) == null ? void 0 : M.id) !== x) {
                const I = n.find(H => H.item.id === x);
                I && T.$emit($.OPEN, I)
            }
            be( () => {
                i.value.variables = Yi(S),
                i.value.debuging = !0,
                i.value.debugDecorations = [o.value.appendDecoration([{
                    range: new st(b[0],1,b[0],1),
                    options: {
                        isWholeLine: !0,
                        inlineClassName: "debug-line",
                        className: "debug-line"
                    }
                }])],
                T.$emit($.SWITCH_TOOLBAR, "debug")
            }
            )
        }
        ),
        T.$on($.DEBUG_CONTINUE, E),
        T.$on($.DEBUG_SETPINTO, () => E(!0)),
        T.$event(Se.EXCEPTION, ([[x,b,S]]) => {
            var A, M;
            if (((M = (A = i.value) == null ? void 0 : A.item) == null ? void 0 : M.id) === x) {
                const I = new st(S[0],S[2],S[1],S[3] + 1)
                  , H = o.value.getInstance()
                  , L = H.deltaDecorations([], [{
                    range: I,
                    options: {
                        hoverMessage: {
                            value: b
                        },
                        inlineClassName: "squiggly-error"
                    }
                }]);
                H.revealRangeInCenter(I),
                H.focus(),
                D.DECORATION_TIMEOUT >= 0 && setTimeout( () => H.deltaDecorations(L, []), D.DECORATION_TIMEOUT)
            }
        }
        ),
        pt( () => t("onLoad")),
        (x, b) => {
            const S = y("magic-text-icon")
              , A = y("magic-icon")
              , M = y("magic-avatar-group")
              , I = y("magic-tab")
              , H = y("magic-monaco-editor")
              , L = y("magic-loading");
            return v(),
            k("div", Yd, [n.length === 0 ? (v(),
            k("div", qd, [R("div", Kd, [R("p", null, [pe(F(h(c)("message.save")), 1), Wd, Xd, pe(" " + F(h(c)("message.run")), 1), Jd, Qd, pe(" " + F(h(c)("editor.tooltip.complection")), 1), Zd, ep, pe(" " + F(h(c)("editor.tooltip.resume")), 1), tp, ap, pe(" " + F(h(c)("editor.tooltip.stepInto")), 1), np, ip, pe(" " + F(h(c)("editor.tooltip.format")), 1), sp, op, pe(" " + F(h(c)("editor.tooltip.recent")), 1), rp])])])) : (v(),
            k(te, {
                key: 1
            }, [_(I, {
                value: i.value,
                "onUpdate:value": b[0] || (b[0] = j => i.value = j),
                tabs: n,
                className: "magic-script-tab",
                ref_key: "tab",
                ref: r,
                "allow-close": !0,
                onClose: d,
                onChange: b[1] || (b[1] = j => h(T).$emit(h($).OPEN, j)),
                onBeforeChange: C,
                onItemContextmenu: m
            }, {
                default: w( ({tab: j}) => [_(S, {
                    icon: j.getIcon(j.item)
                }, null, 8, ["icon"]), pe(F(j.item.name), 1), N(j) ? (v(),
                k("span", lp, "*")) : X("", !0), j.item.lock === x.$LOCKED ? (v(),
                V(A, {
                    key: 1,
                    icon: "lock"
                })) : X("", !0), _(M, {
                    users: h(l)[j.item.id] || [],
                    max: 3,
                    size: 20
                }, null, 8, ["users"])]),
                _: 1
            }, 8, ["value", "tabs"]), _(L, {
                loading: s.value
            }, {
                default: w( () => [R("div", cp, [i.value.pageType == "component" ? (v(),
                V(ee(i.value.component), {
                    key: 0,
                    Message: h($),
                    bus: h(T),
                    request: h(Y),
                    selectTab: i.value
                }, null, 8, ["Message", "bus", "request", "selectTab"])) : (v(),
                V(H, {
                    key: 1,
                    ref_key: "editor",
                    ref: o,
                    value: i.value.item.script,
                    "onUpdate:value": b[2] || (b[2] = j => i.value.item.script = j),
                    decorations: i.value.decorations,
                    "onUpdate:decorations": b[3] || (b[3] = j => i.value.decorations = j),
                    language: i.value.language,
                    "support-breakpoint": !0
                }, null, 8, ["value", "decorations", "language"]))])]),
                _: 1
            }, 8, ["loading"])], 64))])
        }
    }
};
var dp = q(up, [["__scopeId", "data-v-6435d26c"]])
  , pp = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dp
}, Symbol.toStringTag, {
    value: "Module"
}));
const Un = {};
Object.entries({
    "./components/magic-editor.vue": uo,
    "./components/common/magic-context-menu.vue": Eo,
    "./components/common/magic-empty.vue": xo,
    "./components/common/magic-loading.vue": Co,
    "./components/common/magic-monaco-diff-editor.vue": wo,
    "./components/common/magic-monaco-editor.vue": $o,
    "./components/common/magic-resizer.vue": jo,
    "./components/common/data/magic-navbar-item.vue": Yo,
    "./components/common/data/magic-navbar.css": Ko,
    "./components/common/data/magic-navbar.js": er,
    "./components/common/data/magic-tab.css": ar,
    "./components/common/data/magic-tab.js": ir,
    "./components/common/data/magic-table-column.vue": or,
    "./components/common/data/magic-table.css": lr,
    "./components/common/data/magic-table.js": ur,
    "./components/common/data/magic-tree.css": pr,
    "./components/common/data/magic-tree.js": hr,
    "./components/common/dialog/magic-alert.vue": yi,
    "./components/common/dialog/magic-confirm.vue": Si,
    "./components/common/dialog/magic-dialog.vue": vr,
    "./components/common/dialog/magic-modal.js": xi,
    "./components/common/dialog/magic-notify.vue": Or,
    "./components/common/form/magic-button-group.vue": Cr,
    "./components/common/form/magic-button.vue": Lr,
    "./components/common/form/magic-checkbox.vue": Mr,
    "./components/common/form/magic-file.vue": Br,
    "./components/common/form/magic-input.vue": Gr,
    "./components/common/form/magic-select.vue": Xr,
    "./components/common/form/magic-textarea.vue": el,
    "./components/common/icon/magic-avatar-group.vue": nl,
    "./components/common/icon/magic-avatar.vue": rl,
    "./components/common/icon/magic-icon.vue": Qo,
    "./components/common/icon/magic-text-icon.vue": dl,
    "./components/panel/api/magic-api-body.vue": fl,
    "./components/panel/api/magic-api-description.vue": ml,
    "./components/panel/api/magic-api-group.vue": yl,
    "./components/panel/api/magic-api-header.vue": xl,
    "./components/panel/api/magic-api-info.vue": Cl,
    "./components/panel/api/magic-api-option.vue": Ll,
    "./components/panel/api/magic-api-parameter.vue": Dl,
    "./components/panel/api/magic-api-path.vue": Ul,
    "./components/panel/api/magic-api-request-body.vue": Bl,
    "./components/panel/api/magic-api-request-structure.vue": ql,
    "./components/panel/api/magic-api-response-body.vue": Jl,
    "./components/panel/api/magic-api-response-header.vue": ac,
    "./components/panel/api/magic-api-response-structure.vue": lc,
    "./components/panel/api/magic-api-response.vue": pc,
    "./components/panel/api/magic-global-header.vue": fc,
    "./components/panel/api/magic-global-parameter.vue": vc,
    "./components/panel/api/magic-global.vue": Tc,
    "./components/panel/common/magic-panel-common-toolbar.vue": xc,
    "./components/panel/common/magic-panel-toolbar.vue": Ic,
    "./components/panel/common/magic-resource-choose.vue": Mc,
    "./components/panel/datasource/magic-datasource-datasource.vue": Wc,
    "./components/panel/footer/magic-backup-file.vue": eu,
    "./components/panel/footer/magic-backup.vue": ou,
    "./components/panel/footer/magic-debug.vue": Nu,
    "./components/panel/footer/magic-event.vue": Uu,
    "./components/panel/footer/magic-log.vue": ju,
    "./components/panel/footer/magic-online.vue": Yu,
    "./components/panel/footer/magic-status-bar.vue": Qu,
    "./components/panel/footer/magic-todo.vue": i1,
    "./components/panel/footer/magic-toolbar.vue": u1,
    "./components/panel/function/magic-function-info.vue": h1,
    "./components/panel/function/magic-function-parameter.vue": m1,
    "./components/panel/header/magic-export.vue": E1,
    "./components/panel/header/magic-header.vue": w1,
    "./components/panel/header/magic-push.vue": U1,
    "./components/panel/header/magic-search.vue": Y1,
    "./components/panel/header/magic-upload.vue": K1,
    "./components/panel/main/magic-data-resource.vue": ad,
    "./components/panel/main/magic-login.vue": gd,
    "./components/panel/main/magic-main.vue": Id,
    "./components/panel/main/magic-recent-opened.vue": Pd,
    "./components/panel/main/magic-resource.vue": zd,
    "./components/panel/main/magic-script-editor.vue": pp
}).forEach( ([e,t]) => Un[e.substring(e.lastIndexOf("/") + 1, e.lastIndexOf("."))] = t.default);
const Oa = e => {
    let t;
    Object.entries(Un).forEach( ([a,n]) => {
        e.component(a, n)
    }
    ),
    e.config.globalProperties.$contextmenu = a => {
        t != null && t.unmount(),
        t = Ra(Dn, {
            menus: a.menus,
            position: {
                x: a.event.clientX,
                y: a.event.clientY
            },
            onDestory: () => {
                t && t.unmount(),
                t = null
            }
        }),
        Oa(t),
        t.mount(".magic-editor .magic-mounts")
    }
    ,
    Object.keys(D).forEach(a => e.config.globalProperties[`$${a}`] = D[a]),
    fn(e, Oa)
}
;
if (typeof window != "undefined") {
    let e = function() {
        var t = document.body
          , a = document.getElementById("__svg__icons__dom__1683726251474__");
        a || (a = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        a.style.position = "absolute",
        a.style.width = "0",
        a.style.height = "0",
        a.id = "__svg__icons__dom__1683726251474__",
        a.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
        a.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")),
        a.innerHTML = '<symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-api"><path d="M144 160h736c25.6 0 48 22.4 48 48v92.8H96V208c0-25.6 22.4-48 48-48zm16 48v48h64v-48h-64zm112 0v48h64v-48h-64zm112 0v48h64v-48h-64zm198.4 300.8h-25.6v92.8h25.6c38.4 0 54.4-9.6 54.4-44.8 0-38.4-16-48-54.4-48zM329.6 512l-35.2 102.4H368L332.8 512z" /><path d="M96 355.2v483.2c0 19.2 12.8 32 32 32h768c19.2 0 32-12.8 32-32V355.2H96zm310.4 371.2-22.4-64H278.4L256 729.6h-64L291.2 464H368l99.2 265.6h-60.8zm185.6-80h-32v83.2h-57.6V464H592c80 0 105.6 25.6 105.6 89.6-3.2 67.2-32 92.8-105.6 92.8zm211.2 80h-57.6V460.8h57.6v265.6z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-arrow-bottom-up"><path d="M512 330.667c14.933 0 29.867 4.266 40.533 14.933l277.334 234.667c27.733 23.466 29.866 64 8.533 89.6-23.467 27.733-64 29.866-89.6 8.533L512 477.867 275.2 678.4c-27.733 23.467-68.267 19.2-89.6-8.533-23.467-27.734-19.2-68.267 8.533-89.6L471.467 345.6c10.666-10.667 25.6-14.933 40.533-14.933z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-arrow-bottom"><path d="M512 693.333c-14.933 0-29.867-4.266-40.533-14.933L194.133 443.733c-27.733-23.466-29.866-64-8.533-89.6 23.467-27.733 64-29.866 89.6-8.533L512 546.133 748.8 345.6c27.733-23.467 68.267-19.2 89.6 8.533 23.467 27.734 19.2 68.267-8.533 89.6L552.533 678.4c-10.666 10.667-25.6 14.933-40.533 14.933z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-arrow-right"><path d="M693.333 512c0 14.933-4.266 29.867-14.933 40.533L443.733 829.867c-23.466 27.733-64 29.866-89.6 8.533-27.733-23.467-29.866-64-8.533-89.6L546.133 512 345.6 275.2c-23.467-27.733-19.2-68.267 8.533-89.6 27.734-23.467 68.267-19.2 89.6 8.533L678.4 471.467c10.667 10.666 14.933 25.6 14.933 40.533z" /></symbol><symbol class="icon" viewBox="0 0 1092 1024"  id="magic-icon-ascending"><path d="M888.798 892.58h-173.1l204.78-261.6a31.74 31.74 0 0 0 2.7-36 39.42 39.42 0 0 0-34.32-18.72h-247.62c-21.36 0-38.7 15.6-38.7 34.74 0 19.2 17.34 34.74 38.7 34.74h173.16l-204.84 261.6a31.74 31.74 0 0 0-2.64 36c6.6 11.4 19.86 18.66 34.32 18.66h247.62c21.36 0 38.7-15.6 38.7-34.74s-17.4-34.68-38.7-34.68zm-90-808.679a35.22 35.22 0 0 0-32.88-21.9 35.22 35.22 0 0 0-32.82 21.72l-128.1 317.22a33.96 33.96 0 0 0 19.86 44.4 35.22 35.22 0 0 0 45.6-19.32l23.22-57.36h143.04l22.8 57.06c7.02 17.64 27.42 26.4 45.54 19.56a33.96 33.96 0 0 0 20.1-44.34L798.738 83.9zm-33.54 106.68 32.28 128.58h-64.98l32.7-128.58zM464.96 711.56 383.3 812.12V102.2c0-22.2-18.3-40.2-40.8-40.2-22.5 0-40.74 18-40.74 40.2V812.12L220.1 711.56a41.1 41.1 0 0 0-57.3-6.18 39.9 39.9 0 0 0-6.3 56.58l147.9 181.98A48.9 48.9 0 0 0 342.56 962c14.88 0 28.8-6.6 38.1-18.06l147.9-181.98a39.9 39.9 0 0 0-6.3-56.58 41.1 41.1 0 0 0-57.3 6.18z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-clear"><path d="m336.219 160.437 52.734-70.312h246.094l52.734 70.312h175.782v105.47H160.437v-105.47H336.22zM230.75 336.22h562.5v492.187a105.469 105.469 0 0 1-105.469 105.469H336.22A105.469 105.469 0 0 1 230.75 828.406V336.22z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-close"><path d="M824.504 832.73a25.365 25.365 0 0 1-17.93-7.435l-610.77-610.77a25.313 25.313 0 1 1 35.86-35.859l610.822 610.822a25.418 25.418 0 0 1-17.982 43.242" /><path d="M213.734 832.73a25.313 25.313 0 0 1-17.93-43.294l610.823-610.77a25.365 25.365 0 0 1 35.807 35.86l-610.77 610.769a25.313 25.313 0 0 1-17.93 7.435" /></symbol><symbol fill="none"  viewBox="0 0 16 16" id="magic-icon-collapse-all"><path d="M4.854 2.146a.5.5 0 1 0-.708.708l.708-.708ZM8 6l-.354.354.354.353.354-.353L8 6Zm3.854-3.146a.5.5 0 0 0-.708-.708l.708.708Zm-7.708 0 3.5 3.5.708-.708-3.5-3.5-.708.708Zm4.208 3.5 3.5-3.5-.708-.708-3.5 3.5.708.708ZM4.854 12.854a.5.5 0 0 1-.708-.708l.708.708ZM8 9l-.354-.354L8 8.293l.354.353L8 9Zm3.854 3.146a.5.5 0 0 1-.708.708l.708-.708Zm-7.708 0 3.5-3.5.708.708-3.5 3.5-.708-.708Zm4.208-3.5 3.5 3.5-.708.708-3.5-3.5.708-.708Z" fill="currentColor" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-collapse"><path d="M104.2 338.3 468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" /></symbol><symbol class="icon" viewBox="0 0 1036 1024"  id="magic-icon-continue"><path d="M159.547 86.458c-47.241 0-88.579 42.446-88.579 90.964v667.143c0 48.518 41.338 90.965 88.58 90.965s88.578-42.447 88.578-90.965V177.422c-.09-48.523-41.424-90.964-88.579-90.964zM932.942 584.25l-407.17 332.482c-35.4 28.9-83.822 18.264-108.153-23.784-8.913-15.403-13.685-33.643-13.685-52.33V175.646c0-51.019 34.83-92.38 77.784-92.376 15.735 0 31.09 5.67 44.055 16.253l407.17 332.482c35.4 28.905 44.361 86.424 20.02 128.467-5.39 9.317-12.173 17.38-20.02 23.78z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-copy"><path d="M683.387 248.328H235.145a65.997 65.997 0 0 0-65.918 65.918v500.977c0 36.36 29.584 65.918 65.918 65.918h448.242c36.36 0 65.918-29.558 65.918-65.918V314.246c0-36.334-29.558-65.918-65.918-65.918zm13.183 566.895c0 7.25-5.932 13.183-13.183 13.183H235.145a13.184 13.184 0 0 1-13.184-13.183V314.246a13.184 13.184 0 0 1 13.184-13.183h448.242a13.184 13.184 0 0 1 13.183 13.183v500.977z" /><path d="M788.855 142.86H340.613a26.367 26.367 0 0 0 0 52.734h448.242a13.184 13.184 0 0 1 13.184 13.183v500.977a26.367 26.367 0 1 0 52.734 0V208.777c0-36.334-29.557-65.918-65.918-65.918z" /><path d="M591.102 386.756H327.43a26.367 26.367 0 0 0 0 52.734h263.672a26.367 26.367 0 1 0 0-52.734zm0 131.836H327.43a26.367 26.367 0 1 0 0 52.734h263.672a26.367 26.367 0 1 0 0-52.734zM485.632 649.32H327.43a26.367 26.367 0 1 0 0 52.735h158.203a26.367 26.367 0 1 0 0-52.735z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-datasource"><path d="M512 782c-231.956 0-420-67.153-420-150v150c0 82.847 188.044 150 420 150s420-67.153 420-150V632c0 82.847-188.044 150-420 150z" /><path d="M512 602c-231.956 0-420-67.153-420-150v150c0 82.847 188.044 150 420 150s420-67.153 420-150V452c0 82.847-188.044 150-420 150z" /><path d="M512 422c-231.956 0-420-67.153-420-150v150c0 82.847 188.044 150 420 150s420-67.153 420-150V272c0 82.847-188.044 150-420 150z" /><path d="M92 242a420 150 0 1 0 840 0 420 150 0 1 0-840 0Z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-debug-array"><path d="M201.472 320h-49.6V129.408l-59.2 18.368v-40.32L196.16 70.4h5.312V320zm50.816 320.128H81.024v-33.92L161.856 520c6.016-6.656 11.136-12.672 15.36-18.176a133.76 133.76 0 0 0 10.112-15.104 57.728 57.728 0 0 0 5.504-12.8 42.88 42.88 0 0 0 1.6-11.392c0-11.136-2.816-19.84-8.384-26.24-5.632-6.272-13.632-9.472-24.064-9.472a36.224 36.224 0 0 0-15.488 3.2 31.808 31.808 0 0 0-11.328 8.704 39.232 39.232 0 0 0-6.976 13.312 56.32 56.32 0 0 0-2.368 16.832H76.032c0-11.2 1.984-21.76 6.016-31.744 3.968-9.984 9.792-18.624 17.28-26.112 7.616-7.424 16.704-13.312 27.392-17.664 10.688-4.352 22.784-6.528 36.16-6.528 13.12 0 24.768 1.664 34.88 4.928 10.176 3.2 18.624 7.872 25.536 13.952 6.848 6.08 12.032 13.504 15.616 22.336 3.52 8.768 5.312 18.688 5.312 29.696 0 8.32-1.28 16.384-3.968 24.192-2.56 7.744-6.336 15.552-11.136 23.296a190.08 190.08 0 0 1-17.408 23.68 528.64 528.64 0 0 1-22.784 24.768l-44.096 46.464h107.456v40zM131.456 812.8h26.432c12.608 0 21.888-3.136 27.968-9.408a34.56 34.56 0 0 0 9.088-25.088 38.656 38.656 0 0 0-2.048-12.8 26.304 26.304 0 0 0-16.832-16.704 42.112 42.112 0 0 0-14.912-2.432 41.792 41.792 0 0 0-12.928 1.984 33.664 33.664 0 0 0-10.688 5.568 25.6 25.6 0 0 0-9.856 20.608h-49.6a60.8 60.8 0 0 1 6.4-28.032c4.352-8.448 10.176-15.552 17.536-21.44 7.424-5.888 16-10.496 25.984-13.76 9.984-3.2 20.608-4.864 32-4.864 12.544 0 24 1.472 34.368 4.48 10.368 3.072 19.2 7.616 26.688 13.632 7.424 5.952 13.184 13.44 17.28 22.272 4.16 8.896 6.208 19.2 6.208 30.848a52.8 52.8 0 0 1-9.856 30.72 67.968 67.968 0 0 1-28.032 22.976 62.08 62.08 0 0 1 31.488 22.656 61.44 61.44 0 0 1 10.368 35.712 66.56 66.56 0 0 1-25.408 54.336c-7.872 6.208-17.28 10.88-28.032 14.208a121.024 121.024 0 0 1-66.368.64 81.92 81.92 0 0 1-27.2-13.248 68.032 68.032 0 0 1-19.2-22.4 66.304 66.304 0 0 1-7.296-32h49.6a29.824 29.824 0 0 0 10.368 22.912 36.48 36.48 0 0 0 11.584 6.592 48.64 48.64 0 0 0 30.4 0 30.336 30.336 0 0 0 19.392-17.792 46.208 46.208 0 0 0-.256-31.04 28.544 28.544 0 0 0-8.192-11.584 34.304 34.304 0 0 0-12.928-6.592 63.104 63.104 0 0 0-17.088-2.176h-26.432V812.8z" fill="#231F20" fill-opacity=".7" /><path d="M384 128h512v192H384zm0 640h512v192H384zm0-320h512v192H384z" fill="#40B6E0" fill-opacity=".7" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-debug-info"><path d="M467.172 836.267v86.357a341.56 341.56 0 0 1-255.83-176.185 142.791 142.791 0 0 0-58.026 66.333h-.171a42.667 42.667 0 1 1-78.28-33.679 228.466 228.466 0 0 1 105.416-112.981 342.13 342.13 0 0 1-9.899-81.92V468.423a228.466 228.466 0 0 1-95.516-107.577 42.667 42.667 0 0 1 78.279-33.735h.17c5.974 13.995 14.109 26.795 24.008 38.059a170.894 170.894 0 0 1 137.443-120.32c14.336-82.205 97.11-145.294 196.95-145.294 99.896 0 182.613 63.09 196.892 145.294a170.894 170.894 0 0 1 137.5 120.32c9.9-11.264 18.034-24.064 24.008-38.059h.227a42.667 42.667 0 1 1 79.076 31.46 228.295 228.295 0 0 1-96.37 109.795v29.412h-85.333v-84.253a85.333 85.333 0 0 0-85.334-85.333H553.927V501.02a113.892 113.892 0 0 0-85.333 92.502v-265.33H341.049a85.333 85.333 0 0 0-85.333 85.333v170.667a256.057 256.057 0 0 0 211.456 252.075zm-49.778-593.351h188.643c-13.312-33.736-50.517-57.97-94.321-57.97-43.805 0-81.01 24.234-94.322 57.97zm180.679 311.808h312.889a42.667 42.667 0 0 1 0 85.333h-312.89a42.667 42.667 0 1 1 0-85.333zm0 142.222h312.889a42.667 42.667 0 0 1 0 85.333h-312.89a42.667 42.667 0 1 1 0-85.333zm0 142.222h312.889a42.667 42.667 0 0 1 0 85.333h-312.89a42.667 42.667 0 1 1 0-85.333z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-debug-normal"><path d="M192 128h640v192H192zm0 256h640v192H192zm0 256h640v192H192z" fill="#F4AF3D" fill-opacity=".6" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-debug-number"><path d="M128 128h768v768H128z" fill="#40B6E0" fill-opacity=".6" /><path d="M691.968 704V422.912l-62.464 15.36-16.384-64.512 102.912-30.72h53.76V704h-77.824zm-284.288 6.144c-95.744 0-158.72-80.384-158.72-184.32V524.8c0-103.936 64.512-185.344 159.744-185.344 94.72 0 158.72 80.384 158.72 184.32v1.024c0 103.936-64 185.344-159.744 185.344zm1.408-71.168c47.616 0 77.824-48.128 77.824-113.152V524.8c0-65.024-31.744-114.176-78.848-114.176S330.24 458.24 330.24 523.776v1.024c0 65.536 31.232 114.176 78.848 114.176z" fill="#231F20" fill-opacity=".7" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-delete"><path d="M519.62 0C415.696 0 331.11 82.468 327.537 185.82H85.016a48.914 48.914 0 0 0-48.914 48.867 48.914 48.914 0 0 0 48.914 48.866h54.01v547.792c0 102.853 69.822 186.844 155.91 186.844h439.2c86.088 0 155.91-83.491 155.91-186.844V284.1h48.914a48.914 48.914 0 0 0 48.914-48.89 48.914 48.914 0 0 0-48.914-48.866H711.204A191.56 191.56 0 0 0 519.62 0zM412.386 177.08c3.549-49.77 46.628-88.54 99.852-88.54 53.224 0 96.328 38.746 99.352 88.54H412.386zM300.39 929.126c-30.982 0-65.083-39.15-65.083-95.041v-546.34h575.488v546.84c0 55.915-34.078 95.041-65.06 95.041H300.389v-.5z" /><path d="M368.116 796.815c24.362 0 44.27-21.67 44.27-48.819V469.373c0-27.148-19.908-48.819-44.27-48.819-24.338 0-44.27 21.671-44.27 48.819v278.623c0 27.148 19.36 48.819 44.294 48.819zm154.934 0c24.361 0 44.294-21.67 44.294-48.819V469.373c0-27.148-19.933-48.819-44.294-48.819-24.338 0-44.27 21.671-44.27 48.819v278.623c0 27.148 19.932 48.819 44.293 48.819zm132.81 0c24.338 0 44.27-21.67 44.27-48.819V469.373c0-27.148-19.932-48.819-44.27-48.819s-44.27 21.671-44.27 48.819v278.623c0 27.148 19.36 48.819 44.27 48.819z" /></symbol><symbol class="icon" viewBox="0 0 1092 1024"  id="magic-icon-descending"><path d="M888.799 892.58h-173.1l204.78-261.6a31.74 31.74 0 0 0 2.7-36 39.42 39.42 0 0 0-34.32-18.72h-247.62c-21.36 0-38.7 15.6-38.7 34.74 0 19.2 17.34 34.74 38.7 34.74H814.4l-204.84 261.6a31.74 31.74 0 0 0-2.64 36c6.6 11.4 19.86 18.66 34.32 18.66h247.62c21.36 0 38.7-15.6 38.7-34.74s-17.4-34.68-38.7-34.68zm-90-808.679a35.22 35.22 0 0 0-32.88-21.9 35.22 35.22 0 0 0-32.82 21.72L605 400.941a33.96 33.96 0 0 0 19.86 44.4 35.22 35.22 0 0 0 45.6-19.32l23.22-57.36h143.04l22.8 57.06c7.02 17.64 27.42 26.4 45.54 19.56a33.96 33.96 0 0 0 20.1-44.34L798.739 83.9zm-33.54 106.68 32.28 128.58h-64.98l32.7-128.58zm-300.3 121.8L383.3 211.94v709.86c0 22.199-18.24 40.259-40.8 40.259-22.5 0-40.74-18-40.74-40.2V211.821l-81.66 100.62a41.1 41.1 0 0 1-57.3 6.18 39.9 39.9 0 0 1-6.3-56.58L304.4 80.06a48.9 48.9 0 0 1 38.16-18.06c14.88 0 28.8 6.6 38.1 18.06l147.9 181.98a39.9 39.9 0 0 1-6.3 56.58 41.1 41.1 0 0 1-57.3-6.18z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-difference"><path d="M704 384v204.8L435.2 320 704 51.2V256h256v128H704zM320 768v204.8L588.8 704 320 435.2V640H64v128h256z" fill="#389FD6" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-download"><path d="M768.355 416a256 256 0 1 0-512 0 192 192 0 1 0 0 384v64a256 256 0 0 1-58.88-505.216 320.128 320.128 0 0 1 629.76 0A256.128 256.128 0 0 1 768.355 864v-64a192 192 0 0 0 0-384zm-512 384h64v64h-64v-64zm448 0h64v64h-64v-64z" /><path d="M539.043 845.248V512.192a32.448 32.448 0 0 0-32-32.192c-17.664 0-32 14.912-32 32.192v333.056l-36.096-36.096a32.192 32.192 0 0 0-45.056.192 31.616 31.616 0 0 0-.192 45.056l90.88 90.944a31.36 31.36 0 0 0 22.528 9.088 30.08 30.08 0 0 0 22.4-9.088l90.88-90.88a32.192 32.192 0 0 0-.192-45.12 31.616 31.616 0 0 0-45.056-.192l-36.096 36.096z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-empty"></symbol><symbol class="icon" viewBox="0 0 1028 1024"  id="magic-icon-error"><path d="M875.086 153.73c-199.032-199.033-521.825-199.033-720.958 0s-199.032 521.826 0 720.958 521.826 199.033 720.958 0 199.033-521.826 0-720.958zM725.836 725.44c-9.757 9.757-25.488 9.757-35.246 0L514.558 549.406 338.624 725.439c-9.757 9.757-25.489 9.757-35.246 0s-9.758-25.49 0-35.247L479.41 514.16 303.378 338.226c-9.758-9.757-9.758-25.489 0-35.246 9.757-9.758 25.489-9.758 35.246 0l176.033 176.033L690.69 302.98c9.758-9.758 25.489-9.758 35.246 0 9.758 9.757 9.758 25.489 0 35.246L549.804 514.159l176.033 176.033c9.658 9.758 9.658 25.49 0 35.247z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-event"><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zm0 64c-212.08 0-384 171.92-384 384s171.92 384 384 384 384-171.92 384-384-171.92-384-384-384zm32 320v320h-64V448h64zm0-128v64h-64v-64h64z" /></symbol><symbol fill="none"  viewBox="0 0 16 16" id="magic-icon-expand-all"><path d="M4.854 6.354a.5.5 0 1 1-.708-.708l.708.708ZM8 2.5l-.354-.354L8 1.793l.354.353L8 2.5Zm3.854 3.146a.5.5 0 0 1-.708.708l.708-.708Zm-7.708 0 3.5-3.5.708.708-3.5 3.5-.708-.708Zm4.208-3.5 3.5 3.5-.708.708-3.5-3.5.708-.708ZM4.854 8.646a.5.5 0 1 0-.708.708l.708-.708ZM8 12.5l-.354.354.354.353.354-.353L8 12.5Zm3.854-3.146a.5.5 0 0 0-.708-.708l.708.708Zm-7.708 0 3.5 3.5.708-.708-3.5-3.5-.708.708Zm4.208 3.5 3.5-3.5-.708-.708-3.5 3.5.708.708Z" fill="currentColor" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-expand-copy"><path d="M338.3 919.8 737 555.2a57.377 57.377 0 0 0 19.5-43.1c0-16.5-7.1-32.2-19.5-43.1L338.3 104.4c-18.8-17.8-46.2-23.3-70.4-14.1s-41.1 31.4-43.4 57.2v728.9c2.2 25.9 19 48.2 43.3 57.4 24.3 9.3 51.7 3.8 70.5-14z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-eye"><path d="M512 192c-203.648 0-377.6 132.672-448 320 70.4 187.328 244.352 320 448 320s377.6-132.672 448-320c-70.4-187.328-244.352-320-448-320zm0 544a224.064 224.064 0 0 1-224-224c0-123.648 100.352-224 224-224s224 100.352 224 224-100.352 224-224 224zm0-352c-70.848 0-128 57.152-128 128s57.152 128 128 128 128-57.152 128-128-57.152-128-128-128z" fill="#6E6E6E" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-fold"><path d="M746.436 186.112c42.203 0 76.787 32.67 79.843 74.058l.203 5.988v480.278a80.046 80.046 0 0 1-74.058 79.843l-5.988.203H266.158a80.046 80.046 0 0 1-79.843-74.058l-.203-5.988V266.158c0-42.203 32.67-76.788 74.058-79.843l5.988-.203h480.278zm0 53.364H266.158a26.682 26.682 0 0 0-26.397 22.73l-.285 3.952v480.278c0 13.402 9.858 24.482 22.73 26.397l3.952.285h480.278a26.682 26.682 0 0 0 26.397-22.73l.285-3.952V266.158a26.682 26.682 0 0 0-22.73-26.397l-3.952-.285zm-240.139 80.046c14.746 0 26.682 11.936 26.682 26.682v133.41h133.41a26.682 26.682 0 0 1 0 53.365H532.98v133.41a26.682 26.682 0 0 1-53.364 0V532.98h-133.41a26.682 26.682 0 1 1 0-53.364h133.41v-133.41c0-14.747 11.936-26.683 26.682-26.683z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-format"><path d="m589.78 808.989-36.463 72.99a72.278 72.278 0 0 1-115.753 18.77L123.229 586.437a72.278 72.278 0 0 1 18.77-115.753l73.012-36.506 218.713-218.691a96.378 96.378 0 0 1 136.293 0l51.091 51.113 136.315-136.294A96.378 96.378 0 0 1 893.716 266.6L757.401 402.892l51.135 51.113a96.378 96.378 0 0 1 0 136.293L589.78 808.988zM224.526 483.283l-60.951 30.486a24.1 24.1 0 0 0-6.257 38.577L471.61 866.703a24.1 24.1 0 0 0 38.6-6.256l30.464-60.973-316.148-316.17zm106.972-97.457-68.136 68.157 306.655 306.655 68.136-68.158-306.655-306.654zm136.294-136.294L365.588 351.758l306.654 306.654 102.204-102.204a48.178 48.178 0 0 0 0-68.157L535.95 249.532a48.178 48.178 0 0 0-68.157 0zm323.699-85.18L655.198 300.645l68.157 68.157L859.627 232.51a48.178 48.178 0 0 0-68.136-68.157z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-function"><path d="M840.125 933.875h-656.25a93.75 93.75 0 0 1-93.75-93.75v-656.25a93.75 93.75 0 0 1 93.75-93.75h656.25a93.75 93.75 0 0 1 93.75 93.75v656.25a93.75 93.75 0 0 1-93.75 93.75zm-375-468.75h-93.751v-93.75h93.75v-93.75H324.5V324.5h-46.875v421.875h93.75v-187.5h93.75v-93.75zM793.25 512v-93.75H512v328.125h93.75V512h93.75v234.375h93.75V512z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-git"><path d="M0 520.886c0-69.368 13.51-135.697 40.498-199.02 26.987-63.323 63.322-117.826 109.006-163.51 45.65-45.65 100.154-81.985 163.51-109.006A502.289 502.289 0 0 1 512 8.92c69.335 0 135.663 13.477 198.986 40.497 63.356 26.988 117.86 63.323 163.51 109.007 45.684 45.65 82.02 100.154 109.006 163.51A502.289 502.289 0 0 1 1024 520.852c0 111.318-32.504 211.472-97.511 300.494-64.975 88.989-148.48 150.825-250.484 185.476-5.351 0-9.348-.99-11.99-2.973-2.676-1.982-4.196-3.997-4.526-6.012a59.458 59.458 0 0 1-.495-8.984 7.663 7.663 0 0 1-.991-3.006v-128.99c0-40.63-14.336-75.314-43.008-103.986 76.667-13.345 134.011-41.819 171.999-85.487 37.987-43.669 57.013-96.52 57.013-158.522 0-58.005-18.663-108.346-56.022-150.99 13.345-42.678 11-87.668-6.97-135.003-18.697-1.322-39.011 1.85-61.01 9.513-22 7.663-38.318 14.831-49.02 21.47-10.637 6.673-20.316 13.016-28.97 19.027-38.68-10.669-81.854-16.02-129.486-16.02-47.7 0-90.509 5.351-128.529 16.02-7.333-5.35-15.855-11.164-25.5-17.507-9.68-6.342-26.493-14.005-50.507-22.99-23.982-9.018-45.65-12.85-65.008-11.495-18.663 47.996-20.645 93.646-5.979 136.984-36.665 42.678-54.998 92.986-54.998 150.99 0 62.002 18.663 114.689 55.99 157.994 37.326 43.339 94.67 72.01 171.998 86.016a142.303 142.303 0 0 0-39.969 70.029c-56.683 13.972-96.355 3.963-119.015-30.06-42.017-61.308-79.674-83.307-113.003-65.965-4.69 4.657-3.997 9.48 1.982 14.501 6.012 4.988 14.996 11.66 27.02 19.985 11.99 8.357 20.976 17.507 26.987 27.515.661 1.322 2.51 6.177 5.517 14.502a831.917 831.917 0 0 0 8.985 23.981c2.973 7.663 8.654 16.186 17.011 25.5 8.324 9.349 18.003 17.178 29.003 23.52 11 6.309 26.161 11 45.485 14.006 19.324 2.972 41.323 3.138 65.998.495v100.484c0 .991-.165 2.643-.495 5.021-.33 2.312-.991 3.964-1.982 4.955-.991 1.024-2.345 2.015-4.03 3.039a12.52 12.52 0 0 1-6.474 1.486c-2.676 0-6.012-.33-10.009-.99-101.343-35.345-183.825-97.182-247.51-185.51C31.842 731.037 0 631.577 0 520.92z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-gitee"><path d="M512 1024C229.234 1024 0 794.766 0 512S229.234 0 512 0s512 229.234 512 512-229.234 512-512 512zm259.157-568.889-290.759.014c-13.966 0-25.287 11.321-25.287 25.273l-.028 63.218c0 13.966 11.306 25.287 25.273 25.287H657.38c13.966 0 25.287 11.307 25.287 25.273v12.644a75.847 75.847 0 0 1-75.847 75.847H366.606a25.287 25.287 0 0 1-25.287-25.273v-240.2a75.847 75.847 0 0 1 75.847-75.846l353.92-.015c13.966 0 25.273-11.306 25.287-25.273l.071-63.189c0-13.966-11.306-25.287-25.272-25.301l-353.992.014c-104.718-.014-189.624 84.892-189.624 189.61v353.963c0 13.967 11.32 25.287 25.287 25.287h372.935c94.265 0 170.666-76.401 170.666-170.666v-145.38c0-13.952-11.32-25.273-25.287-25.273z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-group-add"><path d="M320 192h128v640H320z" /><path d="M704 448v128H64V448zM576 704h448v320H576V704zm0-64h204.48L832 704l-256-.192V640z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-help"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zm0-68.214a443.786 443.786 0 1 0 0-887.572 443.786 443.786 0 0 0 0 887.572zm13.233-694.036c46.632 0 84.52 12.288 113.585 38.597 29.145 25.443 43.717 60.416 43.717 104.133 0 35.604-9.452 65.457-27.648 88.773-6.537 8.034-27.017 26.939-61.203 56.793a123.116 123.116 0 0 0-30.563 37.809 97.989 97.989 0 0 0-11.736 48.128v12.367h-77.982v-12.367c0-26.94 4.332-50.255 14.494-69.16 9.452-20.322 37.179-50.254 82.313-90.27l12.367-13.784c13.155-16.856 20.323-34.186 20.323-53.169 0-25.521-7.326-45.135-21.19-59.628-14.493-14.573-35.603-21.82-61.912-21.82-32.768 0-56.792 10.162-71.286 31.272-13.154 17.487-19.692 42.3-19.692 74.28h-76.406c0-53.17 15.28-94.602 45.764-125.244 30.878-31.429 73.177-46.71 126.976-46.71zm-12.997 425.905c15.282 0 28.357 4.333 38.597 14.494 10.24 9.452 15.36 21.819 15.36 37.179a51.594 51.594 0 0 1-15.99 37.81 54.508 54.508 0 0 1-37.81 14.493 52.303 52.303 0 0 1-53.168-52.46c0-15.282 5.12-27.57 15.28-37.1a51.2 51.2 0 0 1 37.731-14.416z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-history"><path d="M863.355 160.645C769.495 66.805 644.71 15.115 512 15.115s-257.495 51.69-351.355 145.53S15.115 379.29 15.115 512c0 96.707 27.811 190.444 80.404 271.073 10.424 15.975 31.826 20.5 47.82 10.076 15.975-10.424 20.501-31.846 10.077-47.82C108.176 675.942 84.234 595.23 84.234 512 84.234 276.132 276.132 84.234 512 84.234c235.889 0 427.766 191.898 427.766 427.766S747.868 939.766 512 939.766c-78.09 0-154.501-21.238-220.98-61.44-16.342-9.851-37.58-4.629-47.451 11.714-9.872 16.323-4.629 37.581 11.714 47.432 77.23 46.694 166.011 71.393 256.717 71.393 132.71 0 257.495-51.67 351.355-145.51 93.84-93.88 145.53-218.645 145.53-351.355s-51.69-257.495-145.53-351.355zM492.892 171.91c-24.187 0-43.745 19.6-43.745 43.766v314.757c0 1.495.41 2.99.573 4.485 2.212 22.057 21.013 38.38 43.684 38.38l.164-.942h248.197c24.207 0 43.807-19.538 43.807-43.725s-19.6-43.746-43.807-43.746H536.617v-269.21c0-24.166-19.538-43.765-43.725-43.765zm0 0" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-i18n"><path d="M848.806 805.572c70.998-81.26 109.78-184.217 109.78-293.144 0-119.205-46.422-231.278-130.714-315.57C744.877 113.863 634.941 67.617 517.79 66.214c-1.925-.6-10.29-.592-12.228.015-116.682 1.717-226.127 47.931-308.826 130.63C113.863 279.732 67.63 389.46 66.095 506.417c-.428 1.65-.437 8.602-.021 10.227 1.083 117.628 47.365 228.058 130.66 311.354 84.292 84.292 196.364 130.713 315.57 130.713 119.205 0 231.277-46.421 315.57-130.713a455.521 455.521 0 0 0 17.788-18.872 20.532 20.532 0 0 0 1.472-1.44 20.566 20.566 0 0 0 1.672-2.113zM107.447 532.043H294.95c1.322 65.68 9.253 127.265 22.505 182.113-61.69 16.687-100.82 38.372-121.076 51.906-52.068-64.726-84.702-145.705-88.93-234.019zm88.434-272.635c20.09 13.557 59.243 35.462 121.34 52.26-12.997 54.128-20.826 114.778-22.243 179.433H107.526c4.55-87.37 36.912-167.489 88.355-231.693zm721.2 231.692H729.63c-1.416-64.631-9.24-125.26-22.23-179.374 61.955-16.694 101.236-38.445 121.567-52.021 51.305 64.155 83.571 144.161 88.116 231.395zm-228.403 0h-156.51V335.061c52.208-1.095 97.103-6.454 135.272-14.033C680 373.164 687.286 430.897 688.678 491.1zm-156.51-196.984V109.918c36.84 10.4 72.779 49.206 100.926 110.016 8.81 19.036 16.645 39.642 23.464 61.521-35.026 6.772-76.296 11.608-124.39 12.66zm-40.944-183.842v183.805c-47.505-1.127-88.379-6.002-123.12-12.803 6.807-21.813 14.623-42.36 23.409-61.344 27.839-60.14 63.296-98.756 99.71-109.658zm0 224.767V491.1H335.929c1.392-60.213 8.68-117.955 21.244-170.1 37.835 7.537 82.314 12.887 134.05 14.04zm-155.33 197.002h155.33v158.668c-51.61 1.194-96.02 6.564-133.822 14.103-12.825-52.886-20.208-111.57-21.509-172.77zm155.33 199.63v182.909c-36.416-10.902-71.872-49.519-99.71-109.66-8.68-18.752-16.41-39.034-23.158-60.55 34.64-6.727 75.417-11.552 122.868-12.7zm40.943 183.264V731.609c47.904 1.025 89.104 5.862 124.117 12.656-6.756 21.556-14.497 41.874-23.19 60.656-28.147 60.81-64.086 99.617-100.927 110.016zm0-224.277V532.043h156.547c-1.299 61.097-8.66 119.685-21.446 172.503-38.114-7.532-82.949-12.835-135.1-13.886zM729.66 532.043h187.502c-4.221 88.139-36.733 168.974-88.62 233.636-20.47-13.669-59.636-35.3-121.304-51.869 13.2-54.76 21.102-116.225 22.422-181.767zm71.86-303.3c-18.33 11.57-52.31 29.355-104.858 43.493-19.296-63.056-46.11-115.004-78.062-150.976 70.401 19.15 133.234 56.837 182.92 107.483zM406.008 121.26c-31.906 35.92-58.69 87.769-77.979 150.702-52.404-14.241-86.37-32.099-104.582-43.588 49.63-50.46 112.33-88.01 182.561-107.114zm-182.09 675.703c18.284-11.536 52.098-29.23 104.332-43.336 19.272 62.605 45.976 114.187 77.758 149.969C336 884.55 273.472 847.182 223.918 796.963zm394.68 106.633c31.802-35.804 58.519-87.426 77.794-150.082 51.985 14.023 85.972 31.631 104.533 43.208-49.592 50.34-112.206 87.8-182.326 106.874z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-json"><path d="M846.6 868.8H188.5v-67.5c0-17.7-14.3-32-32-32s-32 14.3-32 32v67.5c0 35.3 28.6 64 64 64h658.1c35.3 0 64-28.7 64-64v-67.5c0-17.7-14.3-32-32-32s-32 14.3-32 32v67.5zM596.9 96.4H188.5c-35.3 0-64 28.7-64 64v180c0 17.7 14.3 32 32 32s32-14.3 32-32v-180h379.4l278.8 138.2v41.8c0 17.7 14.3 32 32 32s32-14.3 32-32v-65.9L596.9 96.4zM218.3 587.8c0 33.6-7.7 59.3-23.2 77.2-15.5 17.9-37.6 26.9-66.5 26.9-12.8 0-24.7-2.2-35.6-6.6v-51c9.4 7.1 20.1 10.7 32.1 10.7 26 0 39-19.7 39-59.2V433.5h54.1v154.3zm29.9 35.8c20.4 16.9 43.7 25.4 69.7 25.4 14.8 0 25.9-2.5 33.3-7.6 7.4-5.1 11.2-11.6 11.2-19.6 0-6.9-3-13.4-8.9-19.5s-21.5-14.4-46.7-24.9c-39.7-16.8-59.5-41.3-59.5-73.5 0-23.6 9-42 27-55 18-13.1 41.8-19.6 71.4-19.6 24.8 0 45.6 3.2 62.5 9.7v50.8c-17.1-11.6-37-17.4-59.9-17.4-13.3 0-24 2.4-32 7.3s-12 11.4-12 19.6c0 6.6 2.7 12.6 8.2 18.1 5.5 5.5 19 13 40.5 22.4 25.3 10.8 42.6 22.2 52.1 34.3 9.5 12 14.2 26.3 14.2 43 0 24.4-8.6 43-25.9 55.8-17.3 12.8-41.8 19.2-73.6 19.2-29.1 0-52.9-4.7-71.5-14.1v-54.4zm183-59.7c0-39.8 11.6-72.2 34.8-97.2 23.2-25 53.9-37.5 92.1-37.5 36.3 0 65.5 12.1 87.7 36.2 22.1 24.2 33.2 55.2 33.2 93.1 0 39.6-11.5 71.7-34.5 96.3-23 24.7-53.2 37-90.4 37-36.4 0-66-11.9-88.7-35.8-22.9-23.8-34.2-54.5-34.2-92.1zm56.9-3c0 24.7 6 44.9 17.9 60.6 11.9 15.7 28.3 23.5 49 23.5 21.2 0 37.7-7.5 49.5-22.5 11.8-15 17.7-35.2 17.7-60.6 0-26.5-5.7-47.4-17.2-62.7-11.5-15.4-27.7-23-48.5-23-21.2 0-37.9 7.9-50.1 23.6-12.2 15.7-18.3 36.1-18.3 61.1zm444.8 126.6h-55.4L769.9 523.2c-5.6-8.5-9.6-15.4-12.1-20.7h-.8c1 8.7 1.5 22.2 1.5 40.5v144.5h-51.3v-254h59l103.6 159.7c6.9 10.6 11.1 17.3 12.6 20.2h.8c-1.1-6.1-1.6-17.8-1.6-35.1V433.5h51.3v254z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-list"><path d="M876.48 247.554H540.475l-28.019-40.447c-28.676-53.324-36.215-80.893-80.893-80.893H148.436c-44.678 0-80.894 36.215-80.894 80.893V813.81c0 44.677 36.216 80.893 80.894 80.893h728.043c44.678 0 80.894-36.216 80.894-80.893V328.448c0-44.678-36.216-80.894-80.894-80.894z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-lock"><path d="M512.068 738.008a28.325 28.325 0 0 1-28.325-28.175v-84.825a28.325 28.325 0 0 1 56.5 0v84.825a28.175 28.175 0 0 1-28.175 28.175z" /><path d="M794.569 907.508h-565a84.825 84.825 0 0 1-84.826-84.675V512.007a84.825 84.825 0 0 1 84.825-84.674h565a84.675 84.675 0 0 1 84.675 84.674v310.826a84.675 84.675 0 0 1-84.674 84.675zm-565-423.675a28.325 28.325 0 0 0-28.326 28.174v310.826a28.325 28.325 0 0 0 28.325 28.175h565a28.175 28.175 0 0 0 28.175-28.175V512.007a28.175 28.175 0 0 0-28.174-28.174z" /><path d="M709.743 483.833a28.325 28.325 0 0 1-28.174-28.326V340.7c0-95.974-90.4-167.692-171.007-167.692a165.733 165.733 0 0 0-167.994 167.391v115.11a28.325 28.325 0 1 1-56.5 0v-115.11a221.932 221.932 0 0 1 224.494-223.89c107.576 0 227.507 92.057 227.507 224.191v114.808a28.325 28.325 0 0 1-28.326 28.326z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-log"><path d="M654.222 170.837V312.89a28.444 28.444 0 0 0 28.445 28.444H824.66a142.222 142.222 0 0 0-40.561-92.16l-35.328-35.953a142.222 142.222 0 0 0-94.55-42.383zm170.667 255.83H682.667a113.778 113.778 0 0 1-113.778-113.778V170.667H227.556a28.444 28.444 0 0 0-28.445 28.444V452.95h-85.333V199.111A113.778 113.778 0 0 1 227.556 85.333h419.783a227.556 227.556 0 0 1 162.247 68.04l35.385 36.01a227.556 227.556 0 0 1 65.251 159.46v476.046a113.778 113.778 0 0 1-113.778 113.778H227.556a113.778 113.778 0 0 1-113.778-113.778v-30.606h85.333v30.606a28.444 28.444 0 0 0 28.445 28.444h568.888a28.444 28.444 0 0 0 28.445-28.444V426.667zM113.778 732.5V514.844h55.865v170.553H275v47.104H113.778zm231.708-108.6c0 22.186 4.494 39.196 13.483 50.972 9.045 11.833 21.959 17.75 38.798 17.75 16.953 0 29.98-5.917 39.083-17.75 9.102-11.776 13.653-28.786 13.653-50.973 0-22.072-4.551-39.025-13.653-50.858-9.102-11.947-22.13-17.806-39.083-17.806-16.839 0-29.753 5.86-38.798 17.692-8.989 11.833-13.483 28.843-13.483 50.972zm-56.604 0c0-35.329 9.785-63.318 29.354-83.855 19.513-20.48 46.08-30.777 79.531-30.777 33.565 0 60.302 10.24 80.043 30.891 19.74 20.537 29.582 48.47 29.582 83.74s-9.842 63.204-29.582 83.798c-19.74 20.594-46.422 30.89-80.043 30.89-33.507 0-60.018-10.24-79.53-30.833-19.57-20.48-29.355-48.47-29.355-83.855zm415.8 108.657-4.437-28.103c-8.192 11.378-17.92 19.911-29.184 25.486-11.264 5.575-24.462 8.363-39.537 8.363-14.052 0-27.08-2.56-39.083-7.68a91.876 91.876 0 0 1-31.687-22.642 102.741 102.741 0 0 1-21.732-36.181 135.282 135.282 0 0 1-7.395-45.511c0-35.556 10.24-64.114 30.549-85.561 20.31-21.504 47.388-32.2 81.18-32.2 25.544 0 46.592 6.372 63.147 19.172 16.612 12.857 27.136 30.72 31.573 53.817h-53.361a42.325 42.325 0 0 0-16.214-21.22 47.787 47.787 0 0 0-26.737-7.167 46.308 46.308 0 0 0-38.742 19.513c-9.842 13.027-14.79 30.15-14.79 51.598 0 21.049 4.892 37.83 14.563 50.29 9.67 12.458 22.698 18.66 38.969 18.66a51.2 51.2 0 0 0 32.256-9.9 42.837 42.837 0 0 0 15.928-27.59h-48.526v-41.814h98.134v118.613h-34.873z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-logout"><path d="M767.987 174.608c29.987 21.287 56.608 45.414 79.868 72.356 23.316 26.97 43.268 56.087 59.914 87.35 16.647 31.29 29.291 64.38 37.933 99.325s12.992 70.356 12.992 106.317c0 61.887-11.832 119.946-35.439 174.177-23.664 54.23-55.566 101.501-95.876 141.754-40.252 40.253-87.466 72.182-141.753 95.818-54.173 23.636-112.29 35.439-174.177 35.439-61.192 0-118.902-11.803-173.192-35.439-54.172-23.636-101.617-55.565-142.218-95.818-40.6-40.281-72.5-87.523-95.817-141.754-23.317-54.231-34.917-112.29-34.917-174.177 0-35.265 4.118-69.892 12.413-103.822 8.352-33.93 20.184-66.208 35.496-96.833 15.312-30.595 34.22-59.219 56.84-85.841 22.62-26.624 47.91-50.577 75.866-71.864 14.675-10.643 30.508-14.646 47.445-11.978 16.936 2.668 30.74 10.963 41.412 24.941 10.672 13.977 14.617 29.61 12.007 46.923-2.668 17.313-10.962 31.292-24.999 41.934-41.876 30.596-74.01 68.21-96.282 112.784-22.272 44.602-33.466 92.51-33.466 143.755 0 43.907 8.294 85.348 24.999 124.267 16.587 38.948 39.383 72.879 68.325 101.82 29 28.943 62.873 51.912 101.85 68.878 38.918 16.965 80.331 25.433 124.238 25.433 43.964 0 85.377-8.468 124.296-25.433s72.849-39.934 101.85-68.877c28.942-28.942 51.852-62.873 68.847-101.821 16.994-38.918 25.461-80.36 25.461-124.267 0-51.912-12.005-100.98-35.96-147.236-23.954-46.256-57.538-84.362-100.806-114.29-14.616-9.977-23.432-23.636-26.449-40.92-3.016-17.313.522-33.293 10.498-47.938 9.976-13.978 23.607-22.447 40.892-25.434 17.343-3.015 33.293.495 47.909 10.47zM511.449 542.943c-17.285 0-32.076-6.148-44.429-18.474-12.297-12.296-18.444-27.116-18.444-44.429V100.742c0-17.313 6.148-32.277 18.444-44.92 12.353-12.644 27.144-18.967 44.429-18.967 17.98 0 33.118 6.323 45.414 18.966 12.355 12.644 18.503 27.608 18.503 44.921V480.04c0 17.313-6.148 32.133-18.503 44.429-12.296 12.327-27.435 18.474-45.414 18.474zm0 0" /></symbol><symbol class="icon"  viewBox="0 0 16 16" id="magic-icon-minimize"><path d="M3 8h10v1H3z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-minus"><path d="M882.826 511.981a49.778 49.778 0 0 1-49.723 49.779H190.97a49.741 49.741 0 1 1 0-99.52h642.15a49.741 49.741 0 0 1 49.705 49.741z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-move"><path d="m482.668 506.888 6.156-292.125-91.976 91.976c-11.715 11.716-30.71 11.716-42.426 0-11.716-11.715-11.716-30.71 0-42.426l136.56-136.56c11.716-11.716 30.71-11.716 42.426 0l136.56 136.56c11.716 11.715 11.716 30.71 0 42.426-11.715 11.716-30.71 11.716-42.426 0l-85.347-85.346-.002 286.157h286.159l-85.405-85.405c-11.716-11.716-11.716-30.71 0-42.426 11.715-11.716 30.71-11.716 42.426 0l136.56 136.56c11.716 11.715 11.716 30.71 0 42.426l-136.56 136.56c-11.716 11.716-30.71 11.716-42.426 0-11.716-11.716-11.716-30.71 0-42.426l85.287-85.288h-286.04v286.322l85.347-85.346c11.715-11.716 30.71-11.716 42.426 0 11.716 11.715 11.716 30.71 0 42.426l-136.56 136.56c-11.716 11.716-30.71 11.716-42.426 0l-136.56-136.56c-11.716-11.715-11.716-30.71 0-42.426 11.715-11.716 30.71-11.716 42.426 0l85.347 85.347V566.887l-286.702.001 85.288 85.288c11.715 11.715 11.715 30.71 0 42.426-11.716 11.716-30.711 11.716-42.427 0l-136.56-136.56c-11.715-11.716-11.715-30.71 0-42.426l136.56-136.56c11.716-11.716 30.711-11.716 42.427 0 11.715 11.715 11.715 30.71 0 42.426l-85.406 85.406h287.293z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-options"><path d="M391.536 194.215c22.669 0 41.111 18.443 41.111 41.111V445.84c0 22.669-18.442 41.112-41.111 41.112H174.512c-22.669 0-41.111-18.443-41.111-41.112V235.326c0-22.668 18.442-41.11 41.111-41.11h217.024m0-39.188H174.512c-44.348 0-80.298 35.951-80.298 80.298V445.84c0 44.349 35.952 80.299 80.298 80.299h217.024c44.348 0 80.298-35.951 80.298-80.299V235.326c0-44.348-35.95-80.298-80.298-80.298zM391.536 617.416c22.669 0 41.111 18.442 41.111 41.111V869.04c0 22.669-18.442 41.111-41.111 41.111H174.512c-22.669 0-41.111-18.442-41.111-41.111V658.526c0-22.669 18.442-41.111 41.111-41.111h217.024m0-39.187H174.512c-44.348 0-80.298 35.952-80.298 80.3V869.04c0 44.348 35.952 80.299 80.298 80.299h217.024c44.348 0 80.298-35.952 80.298-80.3V658.527c0-44.347-35.95-80.298-80.298-80.298zM812.566 194.215c22.669 0 41.112 18.443 41.112 41.111V445.84c0 22.669-18.443 41.112-41.112 41.112H595.543c-22.67 0-41.112-18.443-41.112-41.112V235.326c0-22.668 18.443-41.11 41.112-41.11h217.023m0-39.188H595.543c-44.349 0-80.298 35.951-80.298 80.298V445.84c0 44.349 35.95 80.299 80.298 80.299h217.023c44.348 0 80.298-35.951 80.298-80.299V235.326c.001-44.348-35.95-80.298-80.298-80.298zM925.248 963.754l-72.875-72.782c27.577-33.146 44.168-75.756 44.168-122.243 0-105.63-85.63-191.26-191.26-191.26s-191.26 85.631-191.26 191.26c0 105.63 85.63 191.26 191.26 191.26 45.027 0 86.412-15.568 119.087-41.603l73.187 73.094a19.53 19.53 0 0 0 13.846 5.73 19.533 19.533 0 0 0 13.864-5.748c7.648-7.656 7.64-20.063-.016-27.71zM597.75 876.26c-28.723-28.723-44.541-66.91-44.541-107.53s15.817-78.81 44.541-107.532c28.722-28.722 66.912-44.542 107.532-44.542 40.619 0 78.808 15.818 107.53 44.542 28.722 28.722 44.54 66.911 44.54 107.531s-15.817 78.81-44.541 107.531c-28.722 28.723-66.911 44.542-107.53 44.542s-78.808-15.818-107.53-44.542z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-parameter"><path d="M245.4 314v350M245.4 691.3c-16.6 0-30.1-12.2-30.1-27.3V314c0-15.1 13.5-27.3 30.1-27.3s30.1 12.2 30.1 27.3v350c0 15.1-13.4 27.3-30.1 27.3zM245.4 144.2v37.6M245.4 211.9c-16.6 0-30.1-13.5-30.1-30.1v-37.5c0-16.6 13.5-30.1 30.1-30.1s30.1 13.5 30.1 30.1v37.5c0 16.6-13.4 30.1-30.1 30.1zM498.7 468.2V664M498.7 691.3c-16.6 0-30.1-12.2-30.1-27.3V442.7c0-15.1 13.5-27.3 30.1-27.3s30.1 12.2 30.1 27.3V664c0 15.1-13.5 27.3-30.1 27.3zM498.7 144.2v225.1M498.7 324.1c-16.6 0-30.1-13.5-30.1-30.1V144.3c0-16.6 13.5-30.1 30.1-30.1s30.1 13.5 30.1 30.1v149.8c0 16.6-13.5 30-30.1 30zM753.8 629.6V664M753.8 691.3c-16.6 0-30.1-12.2-30.1-27.3v-68.5c0-15.1 13.5-27.3 30.1-27.3s30.1 12.2 30.1 27.3V664c0 15.1-13.5 27.3-30.1 27.3zM753.8 144.2v392.1M753.8 510c-16.6 0-30.1-13.5-30.1-30.1V144.3c0-16.6 13.5-30.1 30.1-30.1s30.1 13.5 30.1 30.1V480c0 16.5-13.5 30-30.1 30z" /><path d="M244.4 339c-49.1 0-89-39.9-89-89s39.9-89 89-89 89 39.9 89 89-39.9 89-89 89zm0-117.8c-15.9 0-28.8 12.9-28.8 28.8s12.9 28.8 28.8 28.8 28.8-12.9 28.8-28.8c0-15.8-12.9-28.8-28.8-28.8zM498.1 470.1c-49.1 0-89-39.9-89-89s39.9-89 89-89 89 39.9 89 89c-.1 49.1-40 89-89 89zm0-117.7c-15.9 0-28.8 12.9-28.8 28.8s12.9 28.8 28.8 28.8 28.8-12.9 28.8-28.8-13-28.8-28.8-28.8zM751.9 629.5c-49.1 0-89-39.9-89-89s39.9-89 89-89 89 39.9 89 89-39.9 89-89 89zm0-117.8c-15.9 0-28.8 12.9-28.8 28.8s12.9 28.8 28.8 28.8 28.8-12.9 28.8-28.8-12.9-28.8-28.8-28.8zM248.4 798.2h472.5M720.9 830.2H248.4c-17.7 0-32-14.3-32-32s14.3-32 32-32H721c17.7 0 32 14.3 32 32s-14.4 32-32.1 32z" /><path d="M702.2 903.5c-8.2 0-16.4-3.1-22.6-9.4-12.5-12.5-12.5-32.8 0-45.3l61.2-61.2-58.6-50.3c-13.4-11.5-14.9-31.7-3.4-45.1 11.5-13.4 31.7-14.9 45.1-3.4l67.4 57.8.9.9c21.9 21.9 21.9 57.4 0 79.3l-67.3 67.3c-6.4 6.3-14.6 9.4-22.7 9.4z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-password"><path d="M622.44 124.088c10.998 0 19.997 8.999 19.997 19.998v235.977h237.977c10.999 0 19.998 8.999 19.998 19.998v479.953c0 10.999-9 19.998-19.998 19.998H144.486c-10.999 0-19.998-8.999-19.998-19.998V400.061c0-10.999 8.999-19.998 19.998-19.998h237.977V144.086c0-10.999 8.999-19.998 19.998-19.998h219.978m0-59.994H402.461c-44.196 0-79.992 35.796-79.992 79.992v175.983H144.486c-44.196 0-79.992 35.796-79.992 79.992v479.953c0 44.196 35.796 79.992 79.992 79.992h735.928c44.196 0 79.992-35.796 79.992-79.992V400.061c0-44.196-35.796-79.992-79.992-79.992H702.431V144.086c0-44.196-35.796-79.992-79.992-79.992z" /><path d="M642.437 320.069H382.463v59.994h259.974v-59.994zM512.45 520.05c33.097 0 59.994 26.897 59.994 59.993 0 27.398-18.498 51.295-44.996 58.095l-14.998 3.9-14.999-3.9c-26.497-6.8-44.995-30.697-44.995-58.095 0-33.096 26.897-59.994 59.994-59.994m0-59.994c-66.294 0-119.988 53.695-119.988 119.988 0 55.895 38.196 102.89 89.99 116.189v129.787h59.995V696.332c51.795-13.299 89.991-60.294 89.991-116.189 0-66.293-53.795-120.088-119.988-120.088z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-plus"><path d="M465.651 465.651H187.56c-25.584 0-46.349 20.765-46.349 46.349s20.765 46.349 46.349 46.349h278.091V836.44c0 25.584 20.765 46.349 46.349 46.349s46.349-20.765 46.349-46.349V558.349H836.44c25.584 0 46.349-20.765 46.349-46.349s-20.765-46.349-46.349-46.349H558.349V187.56c0-25.584-20.765-46.349-46.349-46.349s-46.349 20.765-46.349 46.349v278.091z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-position"><path d="m555.495 885.94-6.934.247V643.734c0-7.093-5.027-12.125-12.125-12.125H490.98c-7.098 0-12.126 5.032-12.126 12.125l-.083 242.884-9.008-.551c-88.27-6.984-177.409-66.662-220.488-109.736-44.884-44.885-104.935-135.588-106.826-220.486l-3.031-9.092h242.456c6.795 0 11.104-.936 12.122-6.064l.439-54.914c-.526-4.831-2.473-7.996-6.501-8.731l-248.93-.055 3.446-12.067c0-74.49 63.086-173.696 102.29-212.901 66.282-66.285 144.109-100.36 234.093-114.777l.022 242.821c0 6.794 2.4 6.652 6.063 12.122h54.552l9.092-6.062V137.608l12.149-.021c154.62 7.505 324.256 178.709 324.256 336.426H642.511c-9.316 0-12.123 8.88-12.123 18.187v42.427c0 7.068 8.085 15.156 15.155 15.156h239.423c0 157.133-179.981 329.737-329.47 336.157zm-25.12 72.98c128.351 0 239.765-72.15 305.348-137.127 69.726-69.08 125.012-179.255 125.012-317.47v-9.093c0-230.572-209.286-430.359-445.511-430.359h-21.212c-126.358 0-239.207 74.388-303.826 138.656-68.015 67.65-123.504 180.252-123.504 315.944v12.124c0 126.357 74.39 239.204 138.658 303.824 67.647 68.018 180.25 123.5 315.946 123.5h9.089z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-push"><path d="m894.758 191.021-413.93 439.567v259.2a27.275 27.275 0 0 1-27.388 27.22 27.275 27.275 0 0 1-27.445-27.22v-269.93c0-6.832 2.654-13.496 7.398-18.522L830.38 179.84 164.593 563.106l173.873 33.543a27.162 27.162 0 1 1-10.504 53.309l-245.534-47.38a27.106 27.106 0 0 1-8.527-50.145l848.64-488.527c19.652-11.294 43.878 4.687 40.885 27.106L849.525 940.047a27.445 27.445 0 0 1-43.878 17.958L552.941 765.44a27.05 27.05 0 0 1-5.082-38.118 27.558 27.558 0 0 1 38.456-5.026l215.153 163.935 93.29-695.266z" /></symbol><symbol class="icon" viewBox="0 0 1025 1024"  id="magic-icon-qq"><path d="m147.488 460.093-1.95-5.948-1.583-7.739-1.056-4.237v-17.437l1.887-6.867 1.919-7.26 2.534-7.619 3.422-8.474 4.485-8.818 6.348-8.827v-6.18l.615-5.788.984-7.867 2.718-8.842 2.502-9.546 2-4.381 2.31-4.085 2.966-4.55 3.238-3.381V300.42l1.87-11.249 1.887-13.055 3.358-15.63 4.613-16.27 3.438-8.938 3.406-9.73 3.741-9.074 4.47-9.721 4.556-10.65 5.237-9.969 5.892-10.64 7.427-10.634 3.438-6.092 3.654-4.989 7.954-11.24 8.195-11.217 9.298-11.545 9.962-11.232 10.809-11.065 11.272-11.377 13.655-12.28 8.659-7.467 10.569-8.059 10.713-7.115 11.576-6.836 11.13-6.076 12.551-5.037 13.327-6.196 13.248-4.253 13.215-4.413 14.287-4.381 14.27-3.334 14.999-2.774 15.214-2.415L487.74 3.51l14.999-2.015 16.005-.847h47.266l15.75 1.942 15.837 1.847 16.142 1.655 14.982 3.526 15.822 3.302 14.846 3.797 16.27 4.237 14.886 5.165 14.246 5.9 15.223 6.236 13.878 6.82 13.504 7.595 13.231 8.346 11.393 7.763 5.292 4.382 5.54 3.205 10.578 8.795 8.914 8.506 8.89 8.795 8.659 9.705 7.147 9.418 8.506 9.73 5.917 10.441 6.012 9.29 6.38 10.809 5.284 9.394 8.898 19.899 4.366 10.281 3.421 9.53 3.422 10.345 3.07 9.73 2.135 8.37 2.774 9.842 4.853 17.573 3.102 15.382 2.022 14.878 1.735 11.968 2.735 18.229.615 2.894 2.19 3.278 5.893 9.433 3.781 6.396 3.358 6.652 4.27 7.131 3.773 8.555 2.454 8.738 2.67 9.594 2.015 9.85.92 4.836.847 5.964v5.181l-.847 5.14v6.397l-1.535 6.188-2.798 11.992-3.222 6.076-2.39 6.811v1.703l1.135 2.11 3.197 4.982 13.96 20.227 11.008 15.19 5.277 10.13 7.107 11.104 6.188 12.152 7.14 13.008 7.147 14.614 8.043 16.541 4.533 10.138 4.141 9.905 3.574 10.45 3.517 9.393 2.687 9.874 2.734 9.274 3.454 18.076 2.742 18.468 1.879 16.39v23.113l-1.263 8.194-1.807 14.135-2.463 12.712-3.837 11.512-1.44 4.701-2.686 5.653-2.238 3.941-2.998 4.853-2.638 3.062-3.358 3.95-2.998 3.197-3.206 2.719-3.838 1.655-3.453 1.654-2.839.912h-4.34l-2.767-.912-5.277-2.558-2.414-1.695-2.534-1.783-2.775-2.43-2.798-2.734-4.629-5.037-5.468-7.115-4.31-7.332-4.3-5.868-4.206-6.835-5.924-12.128-6.66-12.624-.783-.44h-1.103l-2.703 1.975-1.567 3.318-2.606 4.125-4.533 12.256-6.844 17.445-8.762 20.994-6.588 10.457-6.907 10.921-8.21 12.28-8.715 12.016-4.453 5.437-5.405 5.94-12.432 11.968 1.088 1.08 1.678 1.71 6.212 3.566 25.864 12.184 11.272 6.228 10.77 6.044 10.648 7.62 9.49 7.85 4.59 3.542 3.453 4.085 3.558 4.741 2.934 5.14 1.583 4.262 1.935 5.117.839 4.429.92 5.172-.92 3.462v3.518l-.84 3.63-1.934 3.317-.736 2.599-1.759 3.15-4.693 6.268-4.34 5.012-3.359 3.758-2.798 2.782-7.14 5.1-8.074 4.446-8.61 4.253-9.234 4.085-10.29 3.958-5.54 1.655-4.86 1.335-11.961 2.734-12.352 2.598-12.408 2.583-13.503 2.158-13.911.576-14.27 1.679H741.07l-15.974-.911-14.87-1.344-16.03-2.158-15.91-1.671-16.749-2.287-16.229-3.957-15.838-2.99-15.733-4.413-16.142-5.653-15.83-4.677-8.346-2.734-7.411-2.582-4.685-1.783-4.653-.96h-13.168l-15.222-1.047-7.691-.767-9.914-1.08-6.355 5.637-8.675 5.316-11.76 5.605-13.016 6.995-7.915 3.798-8.258 3.006-18.236 7.307-9.914 2.439-10.393 2.742-14.415 2.75-9.034.688-9.538.799-9.961 1.08-11.593.423h-47.377l-26.75-.424-25.984-2.566-13.143-1.839-12.704-1.839-12.36-1.814-12.368-2.439-11.528-3.646-11.465-2.598-10.345-4.077-9.778-3.79-9.13-4.261-7.915-4.66-7.867-5.677-2.686-2.742-3.518-3.318-2.67-2.894-2.398-3.334-2.223-3.318-1.719-3.358-2.486-7.115-.872-3.678-1.103-4.077v-3.782l1.103-4.261v-4.237l.872-4.238v-8.546l.415-4.51 2.071-5.172 1.719-5.164 3.118-6.228 2.286-2.399 1.887-2.782 4.917-5.9 3.918-3.038 3.71-2.127 3.42-2.702 5.405-1.679 4.342-2.59 5.404-2.726 6.156-1.815 6.196-1.847 7.171-1.535 6.796-.88 8.059-1.039 8.738-.647 2.27-.736h.504l1.096-.92v-1.039l-1.6-2.126-4.636-2.159-11.593-9.842-7.795-6.084-9.01-7.73-9.082-8.65-9.442-11.05-10.873-12.456-4.061-6.74-5.373-6.955-4.637-8.05-4.173-8.795-5.628-8.37-3.67-9.546-4.373-9.53-4.365-10.633-3.174-10.178-3.022-12.591-.896-.456h-.92l-.47-.903h-1.12l-1.839.903-.911.456-1.263 2.11-.456 2.567-.952 2.286-1.647 3.814-5.308 9.25-2.758 5.604-4.365 4.893-4.637 5.884-5.125 6.524-5.413 5.788-6.355 5.604-5.869 5.261-6.507 4.19-7.116 4.364-6.835 2.599-8.06 1.974-7.914.76h-1.863l-1.823-.76-1.439-3.07-2.318-1.503-3.038-7.29-1.895-3.942-2.039-5.653-1.679-5.868-.903-5.788-2.502-13.175-.96-7.771v-25.464l.96-19.02 1.567-9.705 1.838-10.01 1.68-10.769 2.99-10.025 3.357-11.537 3.446-11.248 4.621-11.577 4.357-11.033 6.028-11.193 5.589-12.152 6.835-11.392 8.043-12.296 8.179-11.05 8.546-12.295 7.123-8.563 9.13-9.81 9.61-9.889 4.477-4.717 5.42-5.292 7.876-6.684 8.09-6.82 13.168-11.56 9.93-7.107z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-refresh"><path d="M793.127 261.8A375.3 375.3 0 0 0 512 135.636 376.364 376.364 0 1 0 888.364 512a32.727 32.727 0 1 1 65.454 0c0 244.023-197.795 441.818-441.818 441.818S70.182 756.023 70.182 512 267.977 70.182 512 70.182c125.182 0 241.855 52.363 324.777 142.282l5.687-112.5a32.727 32.727 0 0 1 65.372 3.272l-8.713 172.228a53.182 53.182 0 0 1-51.873 50.522l-170.755 4.01a32.727 32.727 0 0 1-1.554-65.455l118.227-2.741z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-right"><path d="M384.306 256.204v512.412l320.26-256.206-320.26-256.206z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-rollback"><path d="m384 70.4-256 256 256 256zm0 697.6h256a192 192 0 1 0 0-384H384V256h256a320 320 0 0 1 0 640H384V768z" /></symbol><symbol fill="none"  viewBox="0 0 16 16" id="magic-icon-run"><path d="M13.5 7.134a1 1 0 0 1 0 1.732l-9 5.196a1 1 0 0 1-1.5-.866V2.804a1 1 0 0 1 1.5-.866l9 5.196Z" stroke="currentColor" stroke-width="1.5" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-save"><path d="M799.813 92.938H224.188c-72.375 0-131.25 58.874-131.25 131.25v575.625c0 72.375 58.874 131.25 131.25 131.25h575.625c72.375 0 131.25-58.875 131.25-131.25V224.188c0-72.375-58.875-131.25-131.25-131.25zm-430.688 75h285.75v244.5c0 29.625-24.094 53.812-53.813 53.812H422.845c-29.625 0-53.813-24.094-53.813-53.813v-244.5zm486.938 631.875c0 31.03-25.22 56.25-56.25 56.25H224.188c-31.032 0-56.25-25.22-56.25-56.25V224.188c0-31.032 25.218-56.25 56.25-56.25h69.937v244.5c0 70.968 57.75 128.812 128.813 128.812h178.218c70.969 0 128.813-57.75 128.813-128.813v-244.5h69.843c31.032 0 56.25 25.22 56.25 56.25v575.625z" /><path d="M570.406 400.531c20.719 0 37.5-16.781 37.5-37.5v-87.937c0-20.719-16.781-37.5-37.5-37.5s-37.5 16.781-37.5 37.5v87.937c0 20.625 16.782 37.5 37.5 37.5z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-script"><path d="M933.888 270.848c0-90.112-73.216-162.816-162.816-162.816h-478.72c-66.56 0-118.784 56.832-113.664 122.88L221.184 704H91.136l-1.024 53.76c0 84.48 66.56 153.6 150.016 157.696h424.448c98.304 0 177.664-79.36 177.664-177.664L796.16 327.68H934.4v-56.832zM171.52 834.56c-20.48-20.48-31.744-47.104-31.744-75.776v-4.608h85.504l10.24 111.104c-24.064-2.56-46.592-13.312-64-30.72zm620.544-93.696c-.512 33.28-13.824 64-37.376 87.552-24.064 24.064-56.32 37.376-90.112 37.376h-378.88l-57.344-638.976c-1.536-17.92 4.608-34.816 16.896-48.128 12.288-13.312 28.672-20.48 47.104-20.48h18.944c23.552 26.112 37.888 60.928 37.888 98.816 0 25.6-6.656 49.664-17.92 71.168h414.208l46.592 412.672zm92.16-462.848h-486.4c.512-7.168 1.024-13.824 1.024-20.992 0-35.84-9.216-69.632-26.112-98.816H770.56c30.208 0 58.368 11.776 79.872 33.28 21.504 21.504 33.28 49.664 33.28 79.872v6.656z" /><path d="m420.864 476.672-87.552 103.936 87.552 103.936 19.968-16.896-73.216-87.552 73.216-87.552c0 1.024-19.968-15.872-19.968-15.872zm203.264 0-19.968 16.896 73.216 87.552-73.216 87.552 19.968 16.896 87.552-103.936c-.512-1.024-87.552-104.96-87.552-104.96zm-75.264.512L471.04 688.128l24.576 9.216L573.44 486.4l-24.576-9.216z" /></symbol><symbol class="icon" viewBox="0 0 16 16"  id="magic-icon-scroll-down"><path d="M12 6h3l-4 4-4-4h3V1h2zM2 11h12v2H2zM2 7h4v2H2zM2 3h4v2H2z" /></symbol><symbol fill="none"  viewBox="0 0 16 16" id="magic-icon-search"><circle cx="7" cy="7" r="4.5" stroke="currentColor" /><path d="m10.2 10.2 3.3 3.296" stroke="currentColor" stroke-linecap="round" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-settings"><path d="M911.2 381.3h-3.8c-64.1 0-116.2-52.1-116.2-116.2 0-21.2 10.1-44.2 10.1-44.4 9.9-22.3 2.3-49.6-17.7-63.6l-1.1-.7-111.8-62-1.1-.5c-6.6-2.9-13.9-4.3-21.6-4.3-16 0-31.5 6.4-41.7 17-13.7 14.1-56.7 50.7-91.4 50.7-35 0-78.4-37.3-92-51.6-10.3-10.9-26-17.3-42.1-17.3-7.6 0-14.7 1.4-21.2 4.2l-1.4.4-115.7 63.6-1.1.8c-20.1 14-27.8 41.2-17.9 63.5.1.2 10.1 23.5 10.1 44.5 0 64.1-52.1 116.2-116.2 116.2h-3.9c-18.7-.5-33.9 16-38.8 41.5-.4 2.1-9.4 50-9.4 87.6 0 37.7 9 85.6 9.4 87.6 4.8 25.3 19.7 41.6 38.1 41.6h4.6c64.1 0 116.2 52.1 116.2 116.2 0 21.2-10.1 44.2-10.1 44.4-9.9 22.3-2.3 49.6 17.7 63.6l1.1.7L352 926.3l1.1.5c6.6 2.9 13.8 4.4 21.6 4.4 16.1 0 31.8-6.6 42-17.7 12.9-14 57.6-53.9 93.4-53.9 36.1 0 80.2 39.6 94 54.9 10.2 11.3 26.1 18 42.2 18 7.6 0 14.6-1.4 21.2-4.2l1.2-.5 113.5-63.2 1.1-.8c20-14 27.7-41.3 17.8-63.5-.1-.2-10.1-23.5-10.1-44.5 0-64.1 52.1-116.2 116.2-116.2h3.9c18.7.4 33.9-16 38.8-41.5.4-2 9.4-49.9 9.4-87.6 0-37.6-8.9-85.5-9.3-87.5-4.8-25.7-20.1-42.2-38.8-41.7zM510.3 664.7c-85.3 0-154.8-69.5-154.8-154.8 0-85.3 69.5-154.8 154.8-154.8 85.3 0 154.8 69.5 154.8 154.8.1 85.4-69.4 154.8-154.8 154.8z" /><path d="M511.8 432.1c-43.8 0-79.5 35.7-79.5 79.5s35.7 79.5 79.5 79.5 79.5-35.7 79.5-79.5-35.6-79.5-79.5-79.5z" /></symbol><symbol class="icon" viewBox="0 0 1145 1024"  id="magic-icon-skin"><path d="M577.075 1023.78c-196.38 0-317.965-30.122-369.217-90.366a100.895 100.895 0 0 1-26.174-73.112c0-8.7 18.936-241.27 34.07-353.864a117.565 117.565 0 0 0-23.469-10.82c-6.36-2.12-10.528-4.533-17.181-6.58-23.47-10.821-70.48-34.948-70.48-34.948A164.43 164.43 0 0 1 2.266 347.2a90.294 90.294 0 0 1 19.595-79.034l4.24-4.241L303.928 14.832A48.547 48.547 0 0 1 348.526 4.01a56.077 56.077 0 0 1 34.363 32.754 164.283 164.283 0 0 0 168.597 109.157c12.648 0 21.349 0 21.349-2.12h33.924a158.288 158.288 0 0 0 164.43-109.669 46.938 46.938 0 0 1 34.07-32.535 48.766 48.766 0 0 1 44.89 10.82l271.027 246.608 4.24 4.533a90.367 90.367 0 0 1 17.182 78.596 165.234 165.234 0 0 1-102.357 106.89s-44.89 24.054-68.36 34.948a108.133 108.133 0 0 1-17.181 6.58 244.195 244.195 0 0 0-23.47 11.186c15.062 111.13 33.413 345.09 33.413 355.91a99.652 99.652 0 0 1-25.59 69.823c-50.593 66.386-167.792 96.289-361.978 96.289zm0 0" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-star"><path d="M530.323 489.143c14.152-6.564 27.892-13.194 40.815-19.711 12.922-6.609 23.267-11.486 30.902-14.54 7.657-2.985 13.788-4.58 18.437-4.58 7.657 0 14.267 2.507 19.873 7.747 5.605 5.106 8.386 11.6 8.386 19.233 0 4.375-1.39 8.979-4.124 13.673-2.712 4.717-5.652 7.747-8.707 9.068-28.303 11.12-59.501 19.301-93.479 24.361 6.176 5.605 13.743 13.239 22.743 22.629 9 9.526 13.743 14.54 14.107 15.177 3.327 4.58 7.908 10.3 13.834 17.093 5.927 6.836 10.027 12.124 12.329 15.974 2.301 3.898 3.464 8.478 3.464 13.969 0 7.02-2.622 13.194-7.909 18.437-5.219 5.286-12.08 7.93-20.418 7.93s-17.661-6.518-28.144-19.415c-10.413-12.899-23.884-36.211-40.336-69.778-16.658 30.218-27.893 50.249-33.546 59.913-5.719 9.571-11.212 16.886-16.453 21.854-5.286 4.923-11.28 7.431-18.117 7.431-8.113 0-14.88-2.781-20.304-8.387-5.266-5.605-8.022-11.646-8.022-17.958 0-5.926 1.072-10.414 3.282-13.447 20.19-27.415 41.225-51.343 63.217-71.421-18.437-2.894-34.867-6.109-49.337-9.571-14.495-3.578-29.9-8.661-46.101-15.496-2.665-1.344-5.219-4.375-7.748-9.068-2.461-4.649-3.691-9.024-3.691-12.967 0-7.633 2.781-14.108 8.387-19.233 5.605-5.219 12.009-7.747 19.279-7.747 5.286 0 11.828 1.595 19.758 4.763 7.862 3.213 17.887 7.793 30.059 13.81 12.193 6.038 26.093 12.786 41.659 20.259-2.849-13.834-5.219-29.717-7.087-47.537-1.868-17.888-2.78-30.127-2.78-36.736 0-8.113 2.576-15.018 7.703-20.897 5.219-5.812 11.781-8.707 19.917-8.707 7.978 0 14.425 2.895 19.598 8.707 5.197 5.881 7.747 13.582 7.747 23.243 0 2.622-.433 7.816-1.186 15.656-.683 7.816-1.868 17.206-3.26 28.258a4123.176 4123.176 0 0 0-4.739 38.012z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-step-over"><path d="M512 597.333c46.933 0 85.333 38.4 85.333 85.334C597.333 729.6 558.933 768 512 768s-85.333-38.4-85.333-85.333c0-46.934 38.4-85.334 85.333-85.334m488.96-219.306L933.12 672 640 604.16l162.133-101.547c-60.16-97.28-167.68-161.28-290.133-161.28-168.533 0-308.48 122.027-336.213 282.88L91.733 609.28C126.293 408.747 301.227 256 512 256c152.747 0 287.147 80.64 362.667 201.387l126.293-79.36Z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-structure"><path d="M914.88 608.8h-66.288V470.704c0-11.048-11.048-22.088-22.096-22.088H533.744v-88.384h121.52c16.568 0 27.616-11.048 27.616-27.616v-182.28c0-16.568-11.048-27.624-27.616-27.624H379.08c-16.568 0-27.616 11.048-27.616 27.624v182.28c0 16.568 11.048 27.616 27.616 27.616h110.48v88.384H207.84c-11.048 0-22.096 11.04-22.096 22.088V614.32h-77.336c-16.568 0-27.616 11.048-27.616 27.616v193.336c0 16.56 11.048 27.616 27.616 27.616h193.336c16.568 0 27.616-11.056 27.616-27.616V641.936c0-16.568-11.048-27.616-27.616-27.616h-71.808V487.272h265.136V608.8h-77.336c-16.568 0-27.624 11.048-27.624 27.624v193.328c0 16.56 11.048 27.616 27.624 27.616h193.336c16.568 0 27.616-11.056 27.616-27.616V636.424c0-16.576-11.048-27.624-27.616-27.624h-77.336V487.28H804.4V608.8h-88.376c-16.568 0-27.616 11.048-27.616 27.624v193.328c0 16.56 11.048 27.616 27.616 27.616h193.328c16.576 0 27.616-11.056 27.616-27.616V636.424c5.536-11.056-11.04-27.624-22.088-27.624zM401.176 172.424h231.992V316.04H401.176V172.424zm-121.52 640.744H130.512V658.504h149.144v154.664zm309.328 0H439.84V658.504h149.144v154.664zm303.808 0H743.64V658.504h149.152v154.664z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-task"><path d="M512.787 189.403a372.25 372.25 0 1 1-.056 744.444 372.25 372.25 0 0 1 0-744.5zm20.025 179.431h-39.936a6.694 6.694 0 0 0-6.694 6.694v228.705c0 2.194 1.013 4.162 2.756 5.4l137.414 100.234a6.637 6.637 0 0 0 9.281-1.463l23.793-32.399a6.525 6.525 0 0 0-1.518-9.224l-118.459-85.61V375.528a6.694 6.694 0 0 0-6.637-6.694zM711.287 90.125a24.805 24.805 0 0 1 0 49.61H314.232a24.805 24.805 0 0 1 0-49.61h397.111z" /></symbol><symbol class="icon" viewBox="0 0 1331 1024"  id="magic-icon-todo"><path d="M259.879 162.545h66.67q33.334 0 33.334 33.334v66.67q0 33.334-33.334 33.334h-66.67q-33.334 0-33.334-33.334v-66.67q0-33.334 33.334-33.334ZM459.887 162.545h600.023q33.335 0 33.335 33.334v66.67q0 33.334-33.335 33.334H459.887q-33.335 0-33.335-33.334v-66.67q0-33.334 33.335-33.334ZM259.879 429.222h66.67q33.334 0 33.334 33.334v66.67q0 33.334-33.334 33.334h-66.67q-33.334 0-33.334-33.334v-66.67q0-33.334 33.334-33.334ZM459.887 429.222h600.023q33.335 0 33.335 33.334v66.67q0 33.334-33.335 33.334H459.887q-33.335 0-33.335-33.334v-66.67q0-33.334 33.335-33.334ZM259.879 695.899h66.67q33.334 0 33.334 33.334v66.67q0 33.334-33.334 33.334h-66.67q-33.334 0-33.334-33.335v-66.669q0-33.334 33.334-33.334ZM459.887 695.899h600.023q33.335 0 33.335 33.334v66.67q0 33.334-33.335 33.334H459.887q-33.335 0-33.335-33.335v-66.669q0-33.334 33.335-33.334Z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-unfold"><path d="M719.384 186.112H304.616c-65.177 0-118.504 53.327-118.504 118.504v414.768c0 65.177 53.327 118.504 118.504 118.504h414.768c65.177 0 118.504-53.327 118.504-118.504V304.616c0-65.177-53.327-118.504-118.504-118.504zm59.252 533.272c0 35.551-23.701 59.252-59.252 59.252H304.616c-35.551 0-59.252-23.701-59.252-59.252V304.616c0-35.551 23.701-59.252 59.252-59.252h414.768c35.551 0 59.252 23.701 59.252 59.252v414.768z" /><path d="M393.495 482.374h237.01c17.776 0 29.626 11.85 29.626 29.626s-11.85 29.626-29.626 29.626h-237.01c-17.776 0-29.626-11.85-29.626-29.626s11.85-29.626 29.626-29.626z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-unlock"><path d="M627.328 119.65c49.289 26.934 85.562 67.726 108.76 122.317l-56.519 22.596c-16.932-40.793-43.926-71.221-80.983-91.286a180.825 180.825 0 0 0-120.51-18.86c-43.263 8.797-78.451 29.344-105.446 61.64-26.934 32.358-40.792 70.74-41.395 115.329v60.255h451.912c25.73.602 47.06 9.4 64.051 26.331 16.872 16.872 25.73 38.262 26.332 63.99v361.35c-.603 25.668-9.4 46.999-26.392 63.99-16.871 16.872-38.262 25.73-63.99 26.332H240.852c-25.73-.603-47.06-9.4-64.051-26.331-16.872-16.932-25.73-38.323-26.332-63.991v-361.35c.603-25.728 9.4-47.058 26.392-63.99 16.871-16.931 38.262-25.729 63.99-26.392h30.128v-60.254c1.205-58.93 19.643-110.086 55.073-153.35 35.49-43.323 82.369-71.22 140.756-83.754 57.724-10.122 111.23-1.566 160.519 25.368zm155.82 332.125H240.852a29.344 29.344 0 0 0-21.692 8.436 29.284 29.284 0 0 0-8.436 21.692v361.409c0 8.737 2.832 15.967 8.436 21.631 5.664 5.664 12.895 8.436 21.692 8.436h542.294a29.344 29.344 0 0 0 21.692-8.436 29.284 29.284 0 0 0 8.436-21.691V482.023a29.284 29.284 0 0 0-8.436-21.692 29.344 29.344 0 0 0-21.692-8.435zM512 542.218c8.797 0 16.028 2.772 21.692 8.436 5.603 5.664 8.435 12.834 8.435 21.691V752.93a29.284 29.284 0 0 1-8.435 21.692A29.344 29.344 0 0 1 512 783.057a29.344 29.344 0 0 1-21.692-8.436 29.284 29.284 0 0 1-8.435-21.692V572.285c0-8.797 2.832-15.967 8.435-21.631A29.344 29.344 0 0 1 512 542.218z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-update"><path d="M776.99 884.568H250.965c-60.908 0-110.742-49.834-110.742-110.742V247.801c0-60.908 49.834-110.742 110.742-110.742h446.924c17.402 0 31.64 14.238 31.64 31.64s-14.238 31.64-31.64 31.64H250.965c-26.104 0-47.461 21.358-47.461 47.462v526.025c0 26.104 21.357 47.461 47.46 47.461H776.99c26.104 0 47.461-21.357 47.461-47.46V425.778c0-17.402 14.238-31.64 31.64-31.64s31.641 14.238 31.641 31.64v348.047c0 60.908-49.438 110.742-110.742 110.742z" /><path d="M408.772 701.844c-7.91 0-16.215-3.164-22.543-9.097-12.261-12.26-12.261-32.432 0-44.692L833.943 200.34c12.261-12.26 32.432-12.26 44.693 0 12.26 12.26 12.26 32.431 0 44.692l-447.32 447.715c-6.328 5.933-14.238 9.097-22.544 9.097z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-upload"><path d="M768.355 416a256 256 0 1 0-512 0 192 192 0 1 0 0 384v64a256 256 0 0 1-58.88-505.216 320.128 320.128 0 0 1 629.76 0A256.128 256.128 0 0 1 768.355 864v-64a192 192 0 0 0 0-384zm-512 384h128v64h-128v-64zm384 0h128v64h-128v-64z" /><path d="M539.043 589.184V922.24a32.448 32.448 0 0 1-32 32.192 32.448 32.448 0 0 1-32-32.192V589.184l-36.096 36.096a32.192 32.192 0 0 1-45.056-.192 31.616 31.616 0 0 1-.192-45.056l90.88-90.88A31.36 31.36 0 0 1 507.107 480a30.08 30.08 0 0 1 22.4 9.088l90.88 90.944a32.192 32.192 0 0 1-.192 45.056 31.616 31.616 0 0 1-45.056.192l-36.096-36.096z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="magic-icon-user"><path d="M657.408 567.808c89.088-49.152 149.504-144.384 149.504-253.952 0-160.256-130.048-289.792-289.792-289.792S227.328 154.112 227.328 314.368c0 109.056 60.416 204.288 149.504 253.952-187.904 59.392-323.584 235.008-323.584 442.368h57.856c0-224.256 181.76-406.016 406.016-406.016s406.016 181.76 406.016 406.016h57.856c0-207.872-135.68-383.488-323.584-442.88zm-372.224-253.44c0-128.512 103.936-232.448 231.936-232.448s231.936 103.936 231.936 231.936S645.12 546.304 517.12 546.304 285.184 442.368 285.184 314.368z" /></symbol>',
        t.insertBefore(a, t.firstChild)
    };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e()
}
window.Vue = Xn;
const $n = Ra(oi);
$n.use(Oa);
$n.mount("#app");
export {Wa as _};

