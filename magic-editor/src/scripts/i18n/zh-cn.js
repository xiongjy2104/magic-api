export default {
    name: '简体中文',
    message: {
        run: '运行',
        save: '保存',
        search: '搜索',
        upload: '上传',
        export: '导出',
        push: '推送',
        skin: '皮肤',
        reload: '重新加载所有数据',
        copy: '复制',
        searchText: '输入关键字搜索',
        required: '必填',
        defaultValue: '默认值',
        description: '描述',
        parameterType: '参数类型',
        view: '视图',
        addRow: '增加一行',
        removeRow: '删除一行',
        all: '全部',
        clear: '清空',
        empty: '暂无{0}',
        type: '类型',
        date: '时间',
        name: '名称',
        group: '{0}分组',
        i18n: '语言',
        tips: '提示',
        ok: '确定',
        refresh: '刷新',
        loading: '加载中',
        nodata: '无数据',
        cancel: '取消',
        update: '修改',
        create: '创建',
        username: '用户名',
        password: '密码',
        createDataSource: '创建{0}',
        chooseFile: '请选择文件',
        expand: '展开',
        collapse: '收缩',
        selectAll: '全选',
        deselectAll: '取消全选',
        hide: '隐藏',
        login: '登录',
        ignore: '不再提醒',
        document: '帮助文档',
        joinGroup: '加入QQ群',
        untitled: '未定义名称',
        log: '日志',
        enable: '启用',
        variable: '变量信息',
        move: '移动',

        switchLocale: '已切换至{0}，刷新页面后生效，是否刷新？',
        loadClass: '加载classes信息...',
        loadClassError: '加载classes信息失败',
        switchSkin: '切换皮肤至「{0}」',
        loadClassFinish: 'classes信息加载完毕',
        tryAutoLogin: '尝试自动登录',
        autoLoginSuccess: '自动登录成功',
        getCurrentLoginUser: '获取当前登录用户信息',
        getResource: '获取{0}资源',
        getResourceFinish: '获取{0}资源完毕',
        connectDebugServer: '连接调试服务器...',
        debugServerClose: '调试服务器已断开',
        connectDebugServerSuccess: '连接调试服务器成功',
        reloadResourceSuccess: '重新加载资源成功',

        getDetail: '获取{0}',
        getDetailSuccess: '获取{0}详情成功',

        lockSuccess: '成功锁定{0}',
        lockFailed: '锁定{0}失败',
        unlockSuccess: '成功解锁{0}',
        unlockFailed: '解锁{0}失败',
        updateTips: '修改{0}',
        saveSuccess: '保存{0}成功',
        saveFailed: '保存{0}失败',

        newVersionRelease: '版本检测完毕，最新版本为：{0},建议更新！！',
        versionLastest: '版本检测完毕，当前已是最新版',
        versionUpdate: '检测到已有新版本{0}，是否更新？',
        changelog: '更新日志',
        versionConflict: '检测到前后端版本不一致（前端：{0} 后端：{1}），请检查',
        versionCheck: '版本检测',
        loadConfigError: '加载配置失败',
        logout: '注销登录',
        logoutSuccess: '注销登录成功',
        logoutConfirm: '是否要注销登录「{0}」',
        deleteConfirm: '是否要删除{0}',
        deleteSuccess: '删除{0}成功',
        deleteFailed: '删除{0}失败',
        deleteTips: '删除{0}',

        remote: '远程地址',
        secret: '秘钥',
        exported: '数据已导出完毕',
        exportNoneSelect: '请选择之再在进行导出！',
        pushNoneSelect: '请选择之后再进行推送！',

        responseBody: 'Body',
        responseHeader: '响应Header',
        responseStructure: '响应结构',
        root: '根节点',
        pushWarning: '全量模式推送时，以本地数据为准全量覆盖更新，是否继续？',
        uploadWarning: '全量模式上传时，以上传的数据为准进行覆盖更新操作，可能会删除其他接口<br>在非全量导出时，建议使用增量更新，是否继续？',

        noValidate: '不验证',
        validatePattern: '正则验证',
        validateExpression: '表达式验证',

    },
    plugin: {
        loading: '加载插件「{0}」',
        loaded: '已加载插件「{0}」',
        loadFailed: '加载插件「{0}」失败'
    },
    resource: {
        createGroup: '创建分组',
        updateGroup: '修改分组',
        copyGroup: '复制分组',
        deleteGroupConfirm: '是否要删除{0}分组「{1}」？',
        deleteGroupSuccess: '删除{0}分组「{1}」成功',
        deleteGroupFailed: '删除{0}分组「{1}」失败',
        groupExport: '分组「{0}」相关{1}已导出',
        move: '是否要移动「{0}」？',
        moveGroup: '移动分组',
        moveRootGroupConfirm: '是否要将分组「{0}」移动至根节点',
        moveRootSuccess: '移动{0}分组「{1}」至根节点成功',
        moveRootFailed: '移动{0}分组「{1}」至根节点失败',
        moveGroupSuccess: '移动{0}分组「{1}」成功',
        moveGroupFailed: '移动{0}分组「{1}」失败',
        moveFileSuccess: '移动资源「{0}」成功',
        moveResourceFailed: '移动资源「{0}」失败',
        saveGroupSuccess: '保存{0}分组「{1}」成功',
        saveGroupFailed: '保存{0}分组「{1}」失败',
        copyPathSuccess: '{0}路径「{1}」复制成功',
        copyPathFailed: '{0}路径「{1}」复制失败，请手动复制',
        copyRelativePathSuccess: '{0}相对路径「{1}」复制成功',
        copyRelativePathFailed: '{0}相对路径「{1}」复制失败，请手动复制',
        contextmenu: {
            copy: '复制{0}',
            copyWithPath: '复制路径',
            copyRelativePath: '复制相对路径',
            lock: '锁定',
            unlock: '解锁',
            delete: '删除',
            newFile: '新建{0}',
            deleteGroup: '删除分组',
            exportGroup: '导出分组',
            moveToRoot: '移动至根节点'
        },
        header: {
            expand: '全部展开',
            collapse: '全部折叠',
            asc: '按字母升序',
            desc: '按字母降序',
            position: '定位当前文件'
        },
        form: {
            groupName: '分组名称',
            groupPath: '分组路径',
            placeholder: {
                name: '请输入{0}分组名称',
                path: '请输入{0}分组路径'
            }
        }
    },
    editor: {
        tab: {
            close: '关闭',
            closeOther: '关闭其它',
            closeLeft: '关闭左侧',
            closeRight: '关闭右侧',
            closeAll: '全部关闭',
        },
        tooltip: {
            complection: '代码提示',
            resume: '恢复断点',
            stepInto: '步进',
            format: '代码格式化',
            recent: '最近打开'
        },
        triggerSuggest: '触发代码提示'
    },
    api: {
        title: '接口信息',
        name: '接口',
        form: {
            method: '请求方法',
            name: '接口名称',
            path: '接口路径',
            placeholder: {
                name: '请输入接口名称',
                path: '请输入接口路径'
            }
        },
        navbars: {
            parameter: '请求参数',
            header: '请求Header',
            path: '路径变量',
            body: '请求Body',
            option: '接口选项',
            description: '接口描述',
            groupOption: '分组选项'
        },
        validateType: '验证方式',
        expression: '表达式或正则表达式',
        validate: '验证说明',
        field: '字段',
        test: {
            requestBodyError: 'RequestBody 参数有误，请检查！',
            missPath: '请填写路径变量后在测试！',
            requestError: '请求「{0}」出错',
            success: '「{0}」测试完毕，状态：<em>{1}</em> 大小：<em>{2}</em> 耗时：<em>{3} ms</em>',
            begin: '开始测试「{0}」'
        },
        structure: {
            content: '当前 {0} 结构发生变化，是否更新？',
            ok: '更新',
        }
    },
    datasource: {
        title: 'DataSource',
        name: '数据源',
        copySuccess: '复制{0}成功',
        copyFailed: '复制{0}失败',
        test: '测试连接',
        connected: '连接成功',
        connectFailed: '连接失败，错误原因：\r\n{0}',
        primary: '主数据源',
        form: {
            placeholder: {
                name: '数据源名称，仅做显示使用',
                key: '数据源Key，后续代码中使用',
                url: '请输入jdbcURL，如：jdbc:mysql://localhost/dbname',
                username: '请输入数据库用户名',
                password: '请输入数据库密码',
                driver: '驱动类，可选，内部自动识别，也可以手动输入指定',
                type: '连接池类型，可选，也可以手动输入指定',
                maxRows: '最多返回条数，-1为不限制'
            },
            driver: '驱动类',
            type: '类型',
            other: '其它配置'
        }
    },
    task: {
        title: '定时任务信息',
        name: '定时任务',
        form: {
            name: '任务名称',
            path: '任务路径',
            placeholder: {
                cron: '请输入Cron表达式',
                name: '请输入任务名称',
                path: '请输入任务路径',
                description: '请输入任务描述'
            }
        }
    },
    fn: {
        title: '函数信息',
        name: '函数',
        number: '数值',
        string: '字符串',
        collection: '集合',
        fnName: '函数名称',
        returnValue: '返回值',
        parameter: '函数参数',
        description: '函数描述',
        form: {
            name: '函数名称',
            path: '函数路径',
            placeholder: {
                name: '请输入函数名称',
                path: '请输入函数路径'
            }
        }

    },
    toolbars: {
        debug: '调试信息',
        log: '运行日志',
        history: '历史记录',
        event: '事件',
        global: '全局参数',
        response: '执行结果',
        viewHistory: '历史记录：{0}'
    },
    event: {
        message: '事件内容'
    },
    history: {
        name: '历史记录',
        operator: '操作人'
    },
    upload: {
        full: '全量上传',
        increment: '增量上传',
        success: '{0}成功',
        failed: '{0}失败'
    },
    push: {
        full: '全量推送',
        increment: '增量推送',
        success: '{0} Success',
        failed: 'Failed to {0}'
    },
    backup:{
        full: '全量备份',
        backupSuccess: '全量备份完毕',
        rollback: '还原',
        current: '当前版本',
        difference: '对比不同',
        rollbackSuccess: '恢复{0}成功',
        rollbackFailed: '恢复{0}失败',
        rollbackConfirm: '该操作会覆盖更新当前资源，是否继续？'
    },
    online: {
        login: '用户上线',
        loginTips: '用户「{0}」已上线，IP：{1}',
        logout: '用户下线',
        logoutTips: '用户「{0}」已下线，IP：{1}',
        onlines: '当前在线：{0}人'
    },
    log: {
        hide: '点击隐藏多行日志',
        show: '有 {0} 行日志被隐藏，点击显示',
        scrollEnd: '滚动至结尾'
    },
    code: {
        'error': '请求出错，异常代码({0})',
        'invalid': '请求出错，HttpStatus({0})',
        'httpError': '请求出错',
        '-2': '当前为只读模式，无法操作',
        '-10': '无权限操作。',
        '1001': '找不到分组信息',
        '1002': '不支持该分组类型',
        '1003': '目标网址不能为空',
        '1004': 'secretKey不能为空',
        '1005': '移动后名称会重复，请修改名称后在试。',
        '1006': '源对象和分组不能一致',
        '1007': '找不到对应文件或分组',
        '1008': '当前资源已被锁定，请解锁后在操作。',
        '1009': '该路径已被使用,请换一个路径在试',
        '1010': '资源中[{0}]有冲突，请检查',
        '1011': '移动后路径会冲突,请换一个路径在试',
        '1012': '请求方法不能为空',
        '1013': '请求路径不能为空',
        '1014': '函数路径不能为空',
        '1015': '配置的文件路径不存在，请检查',
        '1016': '接口[{0}({1})]与应用冲突，无法注册',
        '1017': '脚本内容不能为空',
        '1018': '名称不能为空',
        '1019': '路径不能为空',
        '1020': 'jdbcURL不能为空',
        '1021': 'key不能为空',
        '1022': '数据源key已被使用，请更换后在试',
        '1023': '请选择分组',
        '1024': 'cron表达式不能为空',
        '1025': '名称不能包含特殊字符，只允许中文、数字、字母以及+_-.()的组合且不能.开头',
        '1026': '数据源Key不能包含特殊字符，只允许中文、数字、字母以及_组合',
        '1027': '保存失败,同一组下分组名称不能重复且不能包含特殊字符。',
        '1028': '参数验证失败',
        '1029': 'header验证失败',
        '1030': '路径变量验证失败',
        '1031': 'body验证失败',
        '1032': '请上传文件',
        '1033': '签名验证失败,请检查秘钥是否正确',
        '1034': '未启用备份，无法操作',
        '1035': '找不到接口'
    }
}
