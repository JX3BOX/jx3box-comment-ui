(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["comment"] = factory(require("vue"));
	else
		root["comment"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2edf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reply_list_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d39");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reply_list_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reply_list_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reply_list_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3280":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4902":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7e17");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "64c7":
/***/ (function(module) {

module.exports = JSON.parse("{\"__Domain\":\"www.jx3box.com\",\"__Root\":\"https://www.jx3box.com/\",\"__v2\":\"https://v2.jx3box.com/\",\"__Github\":\"https://github.jx3box.com/\",\"__server\":\"https://server.jx3box.com/\",\"__api\":\"https://api.jx3box.com/\",\"__helperUrl\":\"https://helper.jx3box.com/\",\"__git\":\"https://git.jx3box.com/\",\"__hub\":\"https://hub.jx3box.com/\",\"__node\":\"https://node.jx3box.com/\",\"__spider\":\"https://spider.jx3box.com/\",\"__proxy\":\"https://proxy.jx3box.com/\",\"__ossRoot\":\"https://oss.jx3box.com/\",\"__ossMirror\":\"https://console.cnyixun.com/\",\"__ossCloudflare\":\"https://jx3box.imkog.com/\",\"__staticPath\":{\"jsdelivr\":\"https://cdn.jsdelivr.net/gh/JX3BOX/\",\"mirror\":\"https://console.cnyixun.com/static/\"},\"__dataPath\":\"https://cdn.jsdelivr.net/gh/JX3BOX/jx3box-data\",\"__imgPath\":\"https://img.jx3box.com/\",\"__iconPath\":\"https://icon.jx3box.com/\",\"__postType\":{\"macro\":\"剑三宏库\",\"jx3dat\":\"插件数据\",\"fb\":\"副本攻略\",\"bps\":\"职业攻略\",\"cj\":\"成就百科\",\"share\":\"捏脸分享\",\"tool\":\"教程工具\",\"help\":\"帮助文档\",\"post\":\"茶馆交流\"},\"__userGroup\":{\"0\":\"游客\",\"1\":\"普通用户\",\"8\":\"已验证用户\",\"16\":\"VIP会员\",\"32\":\"签约作者\",\"64\":\"管理员\"},\"__userLevel\":{\"0\":\"稻香萌新\"},\"__Links\":{\"account\":{\"login\":\"https://v2.jx3box.com/account/login\",\"register\":\"https://v2.jx3box.com/account/register\",\"email_verify\":\"https://v2.jx3box.com/account/email_verify\",\"login_callback\":\"https://v2.jx3box.com/account/login_callback\",\"oauth_server\":\"https://server.jx3box.com/oauth/jx3box/authorize\"},\"dashboard\":{\"home\":\"https://v2.jx3box.com/dashboard\",\"work\":\"https://v2.jx3box.com/dashboard/#/work\",\"msg\":\"https://v2.jx3box.com/dashboard/#/msg\",\"feed\":\"https://v2.jx3box.com/dashboard/#/feed\",\"fav\":\"https://v2.jx3box.com/dashboard/#/fav\",\"profile\":\"https://v2.jx3box.com/dashboard/#/profile\",\"connect\":\"https://v2.jx3box.com/dashboard/#/connect\",\"publish\":\"https://v2.jx3box.com/dashboard/publish\"},\"author\":\"https://v2.jx3box.com/author/\",\"about\":\"https://v2.jx3box.com/about/\",\"search\":\"https://search.jx3box.com/\",\"wiki\":\"https://wiki.jx3box.com/\",\"jx3\":\"https://xn--3-4g8a959k.com/\",\"git\":\"https://git.jx3box.com/\"},\"default_avatar\":\"https://console.cnyixun.com/image/common/avatar.png\",\"feedback\":\"https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=o8LHzsrN48nbkMHM243AzM4\"}");

/***/ }),

/***/ "6d39":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7e17":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "85e4":
/***/ (function(module, exports, __webpack_require__) {

const {default_avatar,__dataPath} = __webpack_require__("64c7");

module.exports = {
    resolveImagePath : function (str){
        return (str && str.length) ?  str.replace(/oss\.jx3box\.com/g,'console.cnyixun.com') : ''
    },

    checkImageLoad : function (jq){
        jq.length &&
        jq.one('error',function (){
            var img_url = $(this).attr("src");
            var fix_url = img_url.replace(
                /console\.cnyixun\.com/g,
                "oss.jx3box.com"
            );
            $(this).attr("src", fix_url);
        })
    },

    showAvatar : function (url,size='s'){

        const styleMap = {
            s : "?x-oss-process=style/avatar_s",
            m : "?x-oss-process=style/avatar_m",
            l : "?x-oss-process=style/avatar_l"
        }

        let avatar = !url ? default_avatar : url.replace(/oss\.jx3box\.com/g,'console.cnyixun.com')

        return avatar + styleMap[size]

    },

    dataPath :function (path,version="latest"){
        return __dataPath + '@' + version + '/data/' + path
    },

    getQuery : function (key){
        let val = ''
		let params = new URLSearchParams(location.search);
		let isRewrite = !params.get(key)
		if(!isRewrite){
			val = params.get(key)
		}else{
			val = location.pathname.slice(1).split('/').pop()
		}
		return val
    }
}

/***/ }),

/***/ "8a8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3280");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a199":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b9a8":
/***/ (function(module, exports, __webpack_require__) {

const { __server } = __webpack_require__("64c7");
const OAuth = {
    github: {
        client_id: "5fbf7a66cd7d3d0f5153",
        authorize_uri: "https://github.com/login/oauth/authorize",
        callback : `${__server}oauth/github/callback`
    },
    qq : {
        client_id : "101870778",
        authorize_uri : "https://graph.qq.com/oauth2.0/authorize",
        callback : `${__server}oauth/qq/callback`
    },
    weibo : {
        client_id : "4076650110",
        authorize_uri : "https://api.weibo.com/oauth2/authorize",
        callback : `${__server}oauth/weibo/callback`
    }
}

module.exports = OAuth

/***/ }),

/***/ "bc3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_content_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a199");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_content_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_content_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_content_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c9d2":
/***/ (function(module, exports, __webpack_require__) {

const { showAvatar } = __webpack_require__("85e4");
const {__Links,default_avatar} = __webpack_require__("64c7");

class User {
    constructor() {
        // TOKEN有效期
        this.expires = 14400000;
        this.created_at = 0;
        // 登录状态
        this.logged_in = false;

        // 缓存资料
        this.profile = {};
        this.anonymous = {
            uid: 0,
            group: 0,
            name: "未登录",
            avatar: showAvatar(null,'s'),
            bio: "凭栏望千里，煮酒论江湖。",
            avatar_origin : default_avatar
        };

    }

    // 检查当前状态
    check() {
        if (this.isLogin()) {
            this.profile.uid = localStorage.getItem("uid");
            this.profile.group = localStorage.getItem("group") || 1;
            this.profile.name = localStorage.getItem("name");
            this.profile.avatar_origin = localStorage.getItem("avatar") || default_avatar;
            this.profile.avatar = showAvatar(this.profile.avatar_origin,'s')
            this.profile.bio = localStorage.getItem("bio") || '';
        } else {
            this.profile = this.anonymous;
        }
        return this;
    }

    // 更新指定缓存字段
    refresh(key,val){
        return localStorage.setItem(key,val);
    }

    // 判断是否已登录
    isLogin() {
        this.created_at =
            localStorage.getItem("created_at") == null
                ? -Infinity
                : localStorage.getItem("created_at");
        this.logged_in =
            localStorage.getItem("logged_in") == "true" ? true : false;
        return this.logged_in && Date.now() - this.created_at < this.expires;
    }

    // 保存用户资料
    _save(data){
        localStorage.setItem("created_at", Date.now());
        localStorage.setItem("logged_in", true);
        localStorage.setItem("token", data.token);
        localStorage.setItem("uid", data.uid);
        localStorage.setItem("group", data.group);
        localStorage.setItem("name", data.name);
        localStorage.setItem("avatar", data.avatar);
        localStorage.setItem("bio", data.bio);
    }

    // 更新用户资料
    update(data){
        return new Promise((resolve,reject)=>{
            try {
                this._save(data)
                resolve(this)
            } catch (err) {
                //如果localstorage不存在或已满
                if (localStorage) {
                    localStorage.clear();
                    this._save(data)
                    resolve(value)
                } else {
                    reject(new Error('localStorage不可用'))
                }
            }
        })
    }

    // 销毁登录状态
    destroy() {
        // for非鉴权接口
        localStorage.removeItem("created_at");
        localStorage.setItem("logged_in", "false");
        // for鉴权接口
        localStorage.removeItem("token");
    }

    // 跳转至登录
    toLogin(url){
        url = encodeURIComponent(url) || encodeURIComponent(location.href)
        location.href = __Links.account.login + '?redirect=' + url
    }

    // 获取用户基础缓存信息
    getInfo() {
        this.check();
        return this.profile;
    }

    // 获取本地令牌
    getToken() {
        return localStorage.getItem("token");
    }

    // 获取UUID
    getUUID() {
        return localStorage.getItem("device_id");
    }
}
module.exports = new User();


/***/ }),

/***/ "ee8f":
/***/ (function(module, exports, __webpack_require__) {

const JX3BOX = __webpack_require__("64c7");
const SEO = __webpack_require__("fa0b");
const Utils = __webpack_require__("85e4");
const User = __webpack_require__("c9d2");
const OAuth = __webpack_require__("b9a8");

module.exports = { JX3BOX, SEO, Utils, User, OAuth };


/***/ }),

/***/ "fa0b":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\" &raquo; JX3BOX - 一站式剑网3资源工具站\",\"keys\":\"jx3box,剑三魔盒,剑三宏,剑三插件,剑三辅助,副本攻略,副本解包,团队监控,捏脸数据,剑3数据库,成就百科,剑三成就,剑3,剑网3,剑三box,剑三百科\",\"desc\":\"JX3BOX - 剑三魔盒是一个以剑网3游戏为主的专业攻略资源站，这里干货满满，大神多多，为你的武侠江湖之路助力。剑三魔盒，玩家贴心的小助手。\"}");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6c812c14-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Comment.vue?vue&type=template&id=3c8ae476&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',{staticClass:"c-comment"},[_c('el-main',[_c('el-form',{ref:"form",staticClass:"c-comment-box",attrs:{"model":_vm.newComment}},[_c('el-form-item',[_c('el-input',{attrs:{"rows":"3","type":"textarea","maxlength":"300","show-word-limit":"","placeholder":"参与讨论..."},model:{value:(_vm.newComment.content),callback:function ($$v) {_vm.$set(_vm.newComment, "content", $$v)},expression:"newComment.content"}})],1),_c('el-form-item',[_c('el-button',{staticClass:"u-publish",attrs:{"type":"primary"},on:{"click":_vm.onSubmit}},[_vm._v("发表评论")])],1)],1),_vm._l((_vm.commentList),function(item){return _c('div',{key:item.comment.id,staticClass:"c-comment-list"},[_c('Avatar',{attrs:{"user-avatar":_vm.showAvatar(item.user.avatar),"user-href":_vm.profileLink + item.user.id,"username":item.user.displayName}}),_c('CommmentWithReply',{attrs:{"item":item,"post-id":_vm.postId,"power":_vm.commentPower,"user-href":_vm.profileLink + item.user.id,"username":item.user.displayName},on:{"deteleComment":_vm.deteleComment}})],1)}),(_vm.commentList.length > 5)?_c('div',{staticClass:"c-comment-pages"},[_c('div',{staticClass:"u-quickreply"},[_c('el-form',{staticClass:"u-form",attrs:{"inline":true,"model":_vm.newComment}},[_c('el-form-item',{staticClass:"u-input"},[_c('el-input',{attrs:{"show-word-limit":"","placeholder":"参与讨论"},model:{value:(_vm.newComment.content),callback:function ($$v) {_vm.$set(_vm.newComment, "content", $$v)},expression:"newComment.content"}})],1),_c('el-form-item',{staticClass:"u-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.onSubmit}},[_vm._v("提交")])],1)],1)],1),_c('div',{staticClass:"u-pages"},[_c('el-pagination',{staticStyle:{"text-align":"right"},attrs:{"background":"","hide-on-single-page":"","current-page":_vm.pager.index,"page-size":_vm.pager.pageSize,"layout":"prev, pager, next, total","total":_vm.pager.total},on:{"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){return _vm.$set(_vm.pager, "index", $event)},"update:current-page":function($event){return _vm.$set(_vm.pager, "index", $event)}}})],1)]):_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Comment.vue?vue&type=template&id=3c8ae476&

// EXTERNAL MODULE: ./node_modules/@jx3box/jx3box-common/main.js
var main = __webpack_require__("ee8f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6c812c14-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/avatar.vue?vue&type=template&id=6d66d0d3&
var avatarvue_type_template_id_6d66d0d3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-comment-avatar"},[_c('el-link',{staticClass:"u-avatar",attrs:{"href":_vm.userHref}},[_c('el-avatar',{staticClass:"u-avatar-pic",attrs:{"shape":"square","size":_vm.avatarSize,"src":_vm.userAvatar}})],1),_c('el-link',{staticClass:"u-name",attrs:{"type":"primary","target":"_blank","href":_vm.userHref}},[_vm._v(_vm._s(_vm.username))])],1)}
var avatarvue_type_template_id_6d66d0d3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/avatar.vue?vue&type=template&id=6d66d0d3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var avatarvue_type_script_lang_js_ = ({
  props: ["avatarSize", "userAvatar", "userHref", "username"]
});
// CONCATENATED MODULE: ./src/components/avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_avatarvue_type_script_lang_js_ = (avatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/avatar.vue?vue&type=style&index=0&lang=less&
var avatarvue_type_style_index_0_lang_less_ = __webpack_require__("4902");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/avatar.vue






/* normalize component */

var component = normalizeComponent(
  components_avatarvue_type_script_lang_js_,
  avatarvue_type_template_id_6d66d0d3_render,
  avatarvue_type_template_id_6d66d0d3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var avatar = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6c812c14-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/comment-with-reply.vue?vue&type=template&id=2e5ebdb4&
var comment_with_replyvue_type_template_id_2e5ebdb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-comment-cmt"},[_c('el-link',{staticClass:"u-name",attrs:{"type":"primary","target":"_blank","href":_vm.userHref}},[_vm._v(_vm._s(_vm.username || '人字榜800线无名小侠'))]),_c('CommentContent',{attrs:{"post-id":_vm.postId,"comment-id":_vm.item.comment.id,"date":_vm.item.comment.commentDate,"content":_vm.item.comment.content,"can-delete":_vm.power.allow || _vm.power.uid == _vm.item.user.id},on:{"addNewComment":_vm.refreshReply,"deteleComment":_vm.deteleComment}}),_c('ReplyList',{ref:"replyList",attrs:{"post-id":_vm.postId,"origin-reply-list":_vm.item.reply,"comment-id":_vm.item.comment.id,"power":_vm.power}})],1)}
var comment_with_replyvue_type_template_id_2e5ebdb4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/comment-with-reply.vue?vue&type=template&id=2e5ebdb4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6c812c14-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/comment-content.vue?vue&type=template&id=7cd0a917&
var comment_contentvue_type_template_id_7cd0a917_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-cmt"},[_c('div',{staticClass:"u-text"},[_vm._v(_vm._s(_vm.content))]),_c('div',{staticClass:"u-action"},[_c('el-button',{staticClass:"u-action-reply",attrs:{"size":"mini","round":"","icon":"el-icon-chat-round"},on:{"click":function($event){_vm.showForm = true}}},[_vm._v("回复")])],1),_c('div',{staticClass:"u-toolbar"},[(_vm.canDelete)?_c('el-button',{staticClass:"u-admin",attrs:{"type":"text","icon":"el-icon-delete","size":"mini"},on:{"click":function($event){return _vm.deleteComment()}}},[_vm._v("删除")]):_vm._e(),_c('time',{staticClass:"u-date"},[_c('i',{staticClass:"el-icon-time"}),_vm._v(_vm._s(_vm.dataFormat(_vm.date)))])],1),(_vm.showForm)?_c('el-form',{ref:"form",staticClass:"c-comment-subbox",attrs:{"model":_vm.newComment}},[_c('el-form-item',[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.newComment.content),callback:function ($$v) {_vm.$set(_vm.newComment, "content", $$v)},expression:"newComment.content"}})],1),_c('el-form-item',[_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){return _vm.submit()}}},[_vm._v("提交")]),_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":function($event){_vm.showForm = false}}},[_vm._v("收起")])],1)],1):_vm._e()],1)}
var comment_contentvue_type_template_id_7cd0a917_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/comment-content.vue?vue&type=template&id=7cd0a917&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/service.js
//import { Notification } from 'element-ui';


var Notification = null;

if (true) {
  Notification = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$notify;
} else {}

const GET = function (url, queryParams) {
  let options = {
    "method": "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  return __fetch(url, queryParams, options);
};
var postRecord = {};
const POST = function (url, queryParams, body) {
  if (!postRecord[url]) {
    postRecord[url] = {
      lastest: Date.now(),
      count: 0
    }; // 60 秒内发送评论超过10条
  } else if (Date.now() - postRecord[url].lastest < 60 * 1000) {
    if (postRecord[url].count >= 6) {
      Notification.warning({
        title: "系统",
        message: "你单身多久了? 动作这么快, 系统处理不过来 ( T_T )",
        duration: 3000,
        position: "bottom-right"
      });
      return new Promise((reslove, reject) => {
        reject();
      });
    } else {
      postRecord[url].count = postRecord[url].count + 1;
    }
  } else if (Date.now() - postRecord[url].lastest > 60 * 1000) {
    postRecord[url] = {
      lastest: Date.now(),
      count: 0
    };
  }

  let options = {
    "method": "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  return __fetch(url, queryParams, options);
};
const DELETE = function (url, queryParams) {
  let options = {
    "method": "DELETE"
  };
  return __fetch(url, queryParams, options);
};

function __fetch(url, queryParams, options) {
  let domain =  true ? main["JX3BOX"].__api : undefined;

  if (domain[domain.length - 1] == "/") {
    domain = domain.substring(0, domain.length - 1);
  }

  url = domain + url;
  options.credentials = 'include';

  if (queryParams) {
    let queryQueue = [];
    Object.keys(queryParams).forEach(key => {
      queryQueue.push(key + "=" + queryParams[key]);
    });
    let domain = main["JX3BOX"].__api;

    if (domain[domain.length - 1] == "/") {
      domain = domain.substring(0, domain.length - 1);
    }

    url = url + "?" + queryQueue.join("&");
  }

  return fetch(url, options).then(resp => {
    switch (resp.status) {
      case 200:
        break;

      case 401:
        window.location.href = main["JX3BOX"].__Links.account.login + "?redirect=" + encodeURIComponent(window.location.href);
        throw new Error("错误:" + resp.statusText);

      case 403:
        window.location.href = main["JX3BOX"].__Links.account.login + "?redirect=" + encodeURIComponent(window.location.href);
        throw new Error("错误:" + resp.statusText);

      case 423:
        window.location.href = main["JX3BOX"].__Links.account.email_verify + "?redirect=" + encodeURIComponent(window.location.href);
        throw new Error("错误:" + resp.statusText);

      case 406:
        resp.text().then(body => {
          Notification.warning({
            title: "系统",
            message: body || "提交内容不合法,请重新提交",
            duration: 3000,
            position: "bottom-right"
          });
        });
        throw new Error("错误:" + resp.statusText);

      default:
        resp.text().then(body => {
          Notification.error({
            title: "系统:" + resp.statusText,
            message: body || "系统错误,请稍后重试!",
            duration: 3000,
            position: "bottom-right"
          });
        });
        throw new Error("错误:" + resp.statusText);
    }

    let contentType = resp.headers.get("Content-Type");
    contentType = contentType && contentType.split(";").shift();

    switch (contentType) {
      case "application/json":
        return resp.json();

      default:
        return resp.text();
    }
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/comment-content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function fillZero(num) {
  return num > 9 ? num : `0${num}`;
}

/* harmony default export */ var comment_contentvue_type_script_lang_js_ = ({
  props: ["postId", "commentId", "content", "date", "hasReply", "canDelete"],
  methods: {
    deleteComment() {
      this.$emit("deteleComment", this.commentId);
    },

    dataFormat(str) {
      let d = new Date(str);
      return d.getFullYear() + "-" + fillZero(d.getMonth() + 1) + "-" + fillZero(d.getDate()) + " " + fillZero(d.getHours()) + ":" + fillZero(d.getMinutes()) + ":" + fillZero(d.getSeconds());
    },

    submit() {
      POST(`/api/post/${this.postId}/comment/${this.commentId}/reply`, null, {
        content: this.newComment.content
      }).then(() => {
        this.$notify({
          title: "",
          message: "评论成功!",
          type: "success",
          duration: 3000,
          position: "bottom-right"
        });
        this.newComment = {};
        this.$emit("addNewComment");
      }).catch(() => {});
    },

    hideForm() {}

  },
  data: function () {
    return {
      newComment: {},
      showForm: false
    };
  }
});
// CONCATENATED MODULE: ./src/components/comment-content.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_comment_contentvue_type_script_lang_js_ = (comment_contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/comment-content.vue?vue&type=style&index=0&lang=less&
var comment_contentvue_type_style_index_0_lang_less_ = __webpack_require__("bc3e");

// CONCATENATED MODULE: ./src/components/comment-content.vue






/* normalize component */

var comment_content_component = normalizeComponent(
  components_comment_contentvue_type_script_lang_js_,
  comment_contentvue_type_template_id_7cd0a917_render,
  comment_contentvue_type_template_id_7cd0a917_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var comment_content = (comment_content_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6c812c14-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/reply-list.vue?vue&type=template&id=b19d7ce6&
var reply_listvue_type_template_id_b19d7ce6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.replyList.length)?_c('div',{staticClass:"c-comment-replylist"},[_vm._l((_vm.replyList),function(reply){return _c('el-row',{key:reply.comment.id,staticClass:"c-comment-reply"},[_c('Avatar',{attrs:{"user-avatar":_vm.showAvatar(reply.user.avatar),"user-href":_vm.profileLink + reply.user.id,"username":reply.user.displayName}}),_c('CommentContentSimple',{attrs:{"post-id":_vm.postId,"comment-id":reply.comment.id,"date":reply.comment.commentDate,"content":reply.comment.content,"can-delete":_vm.power.allow || _vm.power.uid == reply.user.id},on:{"deleteReply":_vm.deleteReply}})],1)}),_c('el-row',[(_vm.replyList.length >= 3 || _vm.showPager)?_c('el-col',{attrs:{"span":1}},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPager),expression:"showPager"}],attrs:{"type":"text"},on:{"click":function($event){return _vm.showLess()}}},[_vm._v("收起")]),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showPager),expression:"!showPager"}],attrs:{"type":"text"},on:{"click":function($event){return _vm.showMore()}}},[_vm._v("查看更多")])],1):_vm._e(),_c('el-col',{staticClass:"c-comment-reply-pages",attrs:{"span":23}},[_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPager),expression:"showPager"}],attrs:{"small":"","current-page":_vm.pager.index,"page-size":_vm.pager.pageSize,"layout":"total, prev, pager, next","total":_vm.pager.total},on:{"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){return _vm.$set(_vm.pager, "index", $event)},"update:current-page":function($event){return _vm.$set(_vm.pager, "index", $event)}}})],1)],1)],2):_vm._e()}
var reply_listvue_type_template_id_b19d7ce6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/reply-list.vue?vue&type=template&id=b19d7ce6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6c812c14-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/comment-content-simple.vue?vue&type=template&id=2c50d080&
var comment_content_simplevue_type_template_id_2c50d080_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-reply"},[_c('div',{staticClass:"u-reply-content"},[_vm._v(_vm._s(_vm.content))]),_c('div',{staticClass:"u-toolbar"},[(_vm.canDelete)?_c('el-button',{staticClass:"u-admin",attrs:{"type":"text","icon":"el-icon-delete","size":"mini"},on:{"click":function($event){return _vm.deleteComment()}}},[_vm._v("删除")]):_vm._e(),_c('time',{staticClass:"u-date"},[_c('i',{staticClass:"el-icon-time"}),_vm._v(_vm._s(_vm.dataFormat(_vm.date)))])],1)])}
var comment_content_simplevue_type_template_id_2c50d080_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/comment-content-simple.vue?vue&type=template&id=2c50d080&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/comment-content-simple.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function comment_content_simplevue_type_script_lang_js_fillZero(num) {
  return num > 9 ? num : `0${num}`;
}

/* harmony default export */ var comment_content_simplevue_type_script_lang_js_ = ({
  props: ["postId", "commentId", "content", "date", "hasReply", "canDelete"],
  methods: {
    deleteComment() {
      this.$emit("deleteReply", this.commentId);
    },

    dataFormat(str) {
      let d = new Date(str);
      return d.getFullYear() + "-" + comment_content_simplevue_type_script_lang_js_fillZero(d.getMonth() + 1) + "-" + comment_content_simplevue_type_script_lang_js_fillZero(d.getDate()) + " " + comment_content_simplevue_type_script_lang_js_fillZero(d.getHours()) + ":" + comment_content_simplevue_type_script_lang_js_fillZero(d.getMinutes()) + ":" + comment_content_simplevue_type_script_lang_js_fillZero(d.getSeconds());
    }

  }
});
// CONCATENATED MODULE: ./src/components/comment-content-simple.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_comment_content_simplevue_type_script_lang_js_ = (comment_content_simplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/comment-content-simple.vue





/* normalize component */

var comment_content_simple_component = normalizeComponent(
  components_comment_content_simplevue_type_script_lang_js_,
  comment_content_simplevue_type_template_id_2c50d080_render,
  comment_content_simplevue_type_template_id_2c50d080_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var comment_content_simple = (comment_content_simple_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/reply-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var reply_listvue_type_script_lang_js_ = ({
  props: ["postId", "commentId", "originReplyList", "power"],
  components: {
    Avatar: avatar,
    CommentContentSimple: comment_content_simple
  },
  backReplyList: [],
  data: function () {
    return {
      profileLink: main["JX3BOX"].__Links.author,
      replyList: [],
      pager: {
        index: 1,
        pageSize: 10,
        pageTotal: 1,
        total: 0
      },
      showPager: false
    };
  },

  mounted() {
    this.backReplyList = this.originReplyList || [];
    this.replyList = this.backReplyList;
    this.$on("refresh", () => {
      if (this.showPager) {
        this.loadCommentList(this.pager.index);
      } else {
        this.loadCommentList(1, 3);
      }
    });
  },

  methods: {
    showAvatar: main["Utils"].showAvatar,

    showMore() {
      this.showPager = true;
      this.loadCommentList(1);
    },

    showLess() {
      this.showPager = false;
      this.replyList = this.backReplyList;
    },

    handleCurrentChange(gotoIndex) {
      this.loadCommentList(gotoIndex);
    },

    deleteReply(id) {
      DELETE(`/api/post/${this.postId}/comment/${id}`).then(() => {
        this.$notify({
          title: "",
          message: "删除成功!",
          type: "success",
          duration: 3000,
          position: "bottom-right"
        });

        if (this.showPager) {
          this.loadCommentList(this.pager.index);
        } else {
          this.loadCommentList(this.pager.index, 3);
        }
      }).catch(() => {});
    },

    loadCommentList(index, pageSize) {
      if (!pageSize) {
        pageSize = 6;
      }

      GET(`/api/post/${this.postId}/comment/${this.commentId}/reply/page/${index}?pageSize=${pageSize}`).then(resp => {
        if (index == 1 && pageSize == 3) {
          this.backReplyList = resp.data;
        }

        this.replyList = resp.data;
        this.pager = resp.page;
      }).catch(() => {});
    }

  }
});
// CONCATENATED MODULE: ./src/components/reply-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_reply_listvue_type_script_lang_js_ = (reply_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/reply-list.vue?vue&type=style&index=0&lang=less&
var reply_listvue_type_style_index_0_lang_less_ = __webpack_require__("2edf");

// CONCATENATED MODULE: ./src/components/reply-list.vue






/* normalize component */

var reply_list_component = normalizeComponent(
  components_reply_listvue_type_script_lang_js_,
  reply_listvue_type_template_id_b19d7ce6_render,
  reply_listvue_type_template_id_b19d7ce6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var reply_list = (reply_list_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/comment-with-reply.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var comment_with_replyvue_type_script_lang_js_ = ({
  props: ["item", "postId", "power", "user-href", "username"],
  components: {
    CommentContent: comment_content,
    ReplyList: reply_list
  },
  methods: {
    deteleComment(id) {
      this.$emit("deteleComment", id);
    },

    refreshReply() {
      this.$refs.replyList.$emit("refresh");
    }

  }
});
// CONCATENATED MODULE: ./src/components/comment-with-reply.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_comment_with_replyvue_type_script_lang_js_ = (comment_with_replyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/comment-with-reply.vue





/* normalize component */

var comment_with_reply_component = normalizeComponent(
  components_comment_with_replyvue_type_script_lang_js_,
  comment_with_replyvue_type_template_id_2e5ebdb4_render,
  comment_with_replyvue_type_template_id_2e5ebdb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var comment_with_reply = (comment_with_reply_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  name: "Comment",
  props: ["postId"],
  components: {
    Avatar: avatar,
    CommmentWithReply: comment_with_reply
  },
  data: function () {
    return {
      commentPower: {
        allow: false,
        uid: -1
      },
      commentList: [],
      showAvatar: main["Utils"].showAvatar,
      profileLink: main["JX3BOX"].__Links.author + "?uid=",
      newComment: {},
      pager: {
        index: 1,
        pageSize: 10,
        pageTotal: 1,
        total: 0
      }
    };
  },
  methods: {
    deteleComment(id) {
      DELETE(`/api/post/${this.postId}/comment/${id}`).then(() => {
        this.$notify({
          title: "",
          message: "删除成功!",
          type: "success",
          duration: 3000,
          position: "bottom-right"
        });
        this.reloadCommentList(this.pager.index);
      }).catch(() => {});
    },

    reloadCommentList(index) {
      GET(`/api/post/${this.postId}/comment/page/${index}`).then(resp => {
        this.commentList = resp.data || [];
        this.pager = resp.page;
      }).catch(() => {});
    },

    handleCurrentChange(gotoIndex) {
      this.reloadCommentList(gotoIndex);
    },

    onSubmit() {
      POST(`/api/post/${this.postId}/comment`, null, {
        content: this.newComment.content
      }).then(() => {
        this.$notify({
          title: "",
          message: "评论成功!",
          type: "success",
          duration: 3000,
          position: "bottom-right"
        });
        this.newComment = {}; // 位于第一页时才去更新数据,否则没必要,等用户自己触发

        if (this.pager.index == 1) {
          this.reloadCommentList(this.pager.index);
        }
      }).catch(() => {});
    }

  },

  mounted() {
    this.reloadCommentList(1);
    GET(`/api/post/${this.postId}/can-i-delete-comment`).then(power => {
      this.commentPower = power;
    }).catch(() => {});
  }

});
// CONCATENATED MODULE: ./src/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Comment.vue?vue&type=style&index=0&lang=less&
var Commentvue_type_style_index_0_lang_less_ = __webpack_require__("8a8d");

// CONCATENATED MODULE: ./src/Comment.vue






/* normalize component */

var Comment_component = normalizeComponent(
  src_Commentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Comment = (Comment_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Comment);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=comment.umd.js.map