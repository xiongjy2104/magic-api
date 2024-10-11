var __vite_style__ = document.createElement("style");
__vite_style__.innerHTML = "\n.magic-component-info[data-v-13162c23]{\r\n	display: flex;\r\n	flex-direction: column;\r\n	flex: 1;\r\n	padding: 5px;\n}\n.magic-component-info form[data-v-13162c23]{\r\n	display: flex;\n}\n.magic-component-info form label[data-v-13162c23]{\r\n	display: inline-block;\r\n	width: 75px;\r\n	height: var(--magic-input-height);\r\n	line-height: var(--magic-input-height);\r\n	font-weight: 400;\r\n	text-align: right;\r\n	padding: 0 5px;\n}\n.magic-component-info form[data-v-13162c23] .magic-textarea{\r\n	margin: 5px;\n}\r\n";
document.head.appendChild(__vite_style__);
var MagicComponent = function(vue) {
  "use strict";
  function MagicComponent2(bus, constants, $i, Message, request) {
    return {
      getIcon: (item) => ["Vue", "#41B883"],
      name: $i("component.name"),
      language: "html",
      defaultScript: `<template>

</template>
<script setup>

<\/script>
<style scoped>

</style>`,
      runnable: false,
      requirePath: true,
      merge: (item) => item
    };
  }
  var localZhCN = {
    component: {
      title: "\u7EC4\u4EF6\u4FE1\u606F",
      name: "\u7EC4\u4EF6",
      form: {
        name: "\u7EC4\u4EF6\u540D\u79F0",
        path: "\u7EC4\u4EF6\u8DEF\u5F84",
        description: "\u7EC4\u4EF6\u63CF\u8FF0",
        placeholder: {
          name: "\u8BF7\u8F93\u5165\u7EC4\u4EF6\u540D\u79F0",
          path: "\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84",
          description: "\u8BF7\u8F93\u5165\u7EC4\u4EF6\u63CF\u8FF0"
        }
      }
    }
  };
  var localEn = {
    component: {
      title: "Component Info",
      name: "Component",
      form: {
        name: "Component Name",
        path: "Component Path",
        description: "Component Description",
        placeholder: {
          name: "Please Enter Component Name",
          path: "Please Enter Component Path",
          description: "Please Enter Component Description"
        }
      }
    }
  };
  var magicComponentInfo_vue_vue_type_style_index_0_scoped_true_lang = "";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _hoisted_1 = { class: "magic-component-info" };
  const _hoisted_2 = { style: { "flex": "1", "padding-top": "5px" } };
  const _sfc_main = {
    __name: "magic-component-info",
    setup(__props) {
      const $i = vue.inject("i18n.format");
      const info = vue.inject("info");
      return (_ctx, _cache) => {
        const _component_magic_input = vue.resolveComponent("magic-input");
        const _component_magic_textarea = vue.resolveComponent("magic-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("form", null, [
            vue.createElementVNode("label", null, vue.toDisplayString(vue.unref($i)("component.form.name")), 1),
            vue.createVNode(_component_magic_input, {
              value: vue.unref(info).name,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => vue.unref(info).name = $event),
              placeholder: vue.unref($i)("component.form.placeholder.name"),
              width: "250px"
            }, null, 8, ["value", "placeholder"]),
            vue.createElementVNode("label", null, vue.toDisplayString(vue.unref($i)("component.form.path")), 1),
            vue.createVNode(_component_magic_input, {
              value: vue.unref(info).path,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => vue.unref(info).path = $event),
              placeholder: vue.unref($i)("component.form.placeholder.path"),
              width: "auto",
              style: { "flex": "1" }
            }, null, 8, ["value", "placeholder"])
          ]),
          vue.createElementVNode("div", _hoisted_2, [
            vue.createVNode(_component_magic_textarea, {
              value: vue.unref(info).description,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => vue.unref(info).description = $event),
              placeholder: vue.unref($i)("component.form.placeholder.description")
            }, null, 8, ["value", "placeholder"])
          ])
        ]);
      };
    }
  };
  var MagicComponentInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13162c23"]]);
  if (typeof window !== "undefined") {
    let loadSvg = function() {
      var body = document.body;
      var svgDom = document.getElementById("__svg__icons__dom__1728644778548__");
      if (!svgDom) {
        svgDom = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgDom.style.position = "absolute";
        svgDom.style.width = "0";
        svgDom.style.height = "0";
        svgDom.id = "__svg__icons__dom__1728644778548__";
        svgDom.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgDom.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink");
      }
      svgDom.innerHTML = '<symbol class="icon" viewBox="0 0 1024 1024"  id="magic-component-component"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M914.5 653.5c-5.5 0-11 1.1-16 3.3l-.2.1h-.2L510.2 822.2 122.2 657h-.2l-.2-.1c-5-2.1-10.3-3.3-16-3.3-23.1 0-41.8 19.3-41.8 43.1 0 18 10.7 33.3 25.8 39.8l403.9 172.1.4.1c10.2 4.4 21.8 4.4 32 0l.2-.1c.1 0 .1-.1.2-.1l403.9-172.1c15.1-6.5 25.8-21.8 25.8-39.8.1-23.8-18.6-43.1-41.7-43.1zm0-186.5c-7.9-.2-16 3.2-16 3.2L510.2 635.6 121.8 470.2s-10.3-3.2-16-3.2C82.7 467 64 486.2 64 510c0 17.9 10.7 33.3 25.8 39.7l403.9 172c.1 0 .1.1.2.1l.1.1c5 2.1 10.3 3.3 16 3.3 5.7 0 11.1-1.2 16-3.3l.2-.1c.1 0 .1 0 .2-.1l403.9-172c15.1-6.4 25.8-21.8 25.9-39.7.1-23.8-18.6-43-41.7-43zM89.8 363.2l403.9 172.1c.1 0 .1 0 .2.1l.1.1c5 2.1 10.3 3.2 16 3.2 5.5 0 10.9-1.1 16-3.2l.2-.1.2-.1 403.9-172c15.1-6.5 25.8-21.8 25.9-39.7 0-18-10.7-33.3-25.8-39.8L526.5 111.6c-.1 0-.1 0-.2-.1l-.2-.1c-10.2-4.4-21.8-4.4-32 0l-.1.1L89.8 283.7C74.7 290.1 64 305.5 64 323.5c0 17.9 10.7 33.2 25.8 39.7z" /></symbol>';
      body.insertBefore(svgDom, body.firstChild);
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", loadSvg);
    } else {
      loadSvg();
    }
  }
  var index = (opt) => {
    const i18n = opt.i18n;
    i18n.add("zh-cn", localZhCN);
    i18n.add("en", localEn);
    return {
      resource: [{
        type: "component",
        icon: "#magic-component-component",
        title: "component.name",
        service: MagicComponent2(opt.bus, opt.constants, i18n.format, opt.Message, opt.request)
      }],
      toolbars: [{
        type: "component",
        title: "component.title",
        icon: "parameter",
        component: MagicComponentInfo
      }]
    };
  };
  return index;
}(Vue);
