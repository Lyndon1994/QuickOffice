(function(e){function t(t){for(var r,s,c=t[0],u=t[1],a=t[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={popup:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("aa9d")},aa9d:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=n("5c96"),o=n.n(i),s=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",staticStyle:{width:"300px",height:"70px"},attrs:{"label-width":"10px",size:"mini"}},[n("el-row",[n("el-input",{ref:"queryInput",staticStyle:{width:"300px"},attrs:{placeholder:"Search ..."},on:{focus:function(e){return e.target.select()}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1),n("el-row",[e._l(e.engines,(function(t,r){return n("el-tag",{key:t.id,attrs:{type:r==e.selectId?"success":"info",hit:r==e.selectId,color:r==e.selectId?"":"Transparent"},on:{click:function(n){return e.search(t)}}},[t.icon?n("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:t.icon}}):e._e(),t.icon?e._e():n("span",[e._v(e._s(t.name))])])})),n("i",{staticClass:"el-icon-setting",staticStyle:{cursor:"pointer",position:"absolute",top:"15px",right:"1px",opacity:"0.2"},on:{click:function(t){return e.setting()}}})],2)],1)}),c=[],u=(n("386d"),n("a481"),n("7f7f"),{name:"App",components:{},data:function(){return{engines:[],query:"",selectId:0,tabIndex:-1}},methods:{init:function(){var e=this,t={engines:chrome.i18n.getMessage("defaultEnginesConfig")},n=this;chrome.storage.sync.get(t,(function(e){n.engines=JSON.parse(e.engines),n.engines=n.engines.filter((function(e){if(e.name&&e.url&&!0===e.inPopup)return e})),console.log(n.engines)})),chrome.tabs.getSelected(null,(function(e){var t=a(e.url);n.query=t["wd"]||t["word"]||t["w"]||t["q"]||t["query"]||"",n.query=decodeURI(n.query),n.tabIndex=e.index})),this.$nextTick((function(){e.$refs["queryInput"].focus()}))},search:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.query&&!t?(chrome.tabs.update({url:e.url.replace("%s",this.query)}),window.close()):(chrome.tabs.create({url:e.url.replace("%s",this.query),index:this.tabIndex+1}),window.close())},searchFirst:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.search(this.engines[this.selectId],e)},changeSelectId:function(){this.selectId=(this.selectId+1)%this.engines.length},onKeyDown:function(e){return e.shiftKey&&13==e.keyCode?(e.preventDefault(),this.searchFirst(!0),!1):13==e.keyCode?(e.preventDefault(),this.searchFirst(),!1):9==e.keyCode&&(e.preventDefault(),this.changeSelectId(),!1)},setting:function(){var e=chrome.extension.getURL("options.html");window.open(e)}},created:function(){this.init(),window.addEventListener("keydown",this.onKeyDown)},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown)},computed:{},mounted:function(){}});function a(e){var t={},n=/([^?=&]+)=([^?=&]+)/g;return e.replace(n,(function(){t[arguments[1]]=arguments[2]})),t}var l=u,f=n("2877"),p=Object(f["a"])(l,s,c,!1,null,null,null),d=p.exports;r["default"].use(o.a),new r["default"]({el:"#app",render:function(e){return e(d)}})}});