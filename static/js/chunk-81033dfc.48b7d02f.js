(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81033dfc"],{"0b31":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-shan-container"},[a("div",{staticClass:"applet-blendent-header"},[t._v("设置点我达信息")]),t._v(" "),a("el-form",{staticStyle:{margin:"20px auto"},attrs:{model:t.dianwodaData,"label-width":"170px",size:"small"}},[a("el-form-item",{attrs:{label:"appkey"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入"},model:{value:t.dianwodaData.appkey,callback:function(e){t.$set(t.dianwodaData,"appkey",e)},expression:"dianwodaData.appkey"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"appsecret"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入"},model:{value:t.dianwodaData.appsecret,callback:function(e){t.$set(t.dianwodaData,"appsecret",e)},expression:"dianwodaData.appsecret"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"accesstoken"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入"},model:{value:t.dianwodaData.accesstoken,callback:function(e){t.$set(t.dianwodaData,"accesstoken",e)},expression:"dianwodaData.accesstoken"}})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[a("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v("提 交")])],1)],1)},r=[],c=a("90e7"),d={name:"setting-shansong",data:function(){return{dianwodaData:{id:"",appkey:"",appsecret:"",accesstoken:""}}},mounted:function(){this.getDianwoda()},methods:{getDianwoda:function(){var t=this;Object(c["e"])({key:this.$store.state.app.activeApp.saa_key}).then((function(e){200===e.status?(t.dianwodaData.id=e.data.id,t.dianwodaData.appkey=e.data.appkey,t.dianwodaData.appsecret=e.data.appsecret,t.dianwodaData.accesstoken=e.data.accesstoken):t.$message.error(e.message)}))},submit:function(){var t=this,e={id:this.dianwodaData.id,key:this.$store.state.app.activeApp.saa_key,appkey:this.dianwodaData.appkey,appsecret:this.dianwodaData.appsecret,token:this.dianwodaData.accesstoken};Object(c["p"])(e).then((function(e){200===e.status?t.$message.success("修改成功！"):t.$message.error(e.message)}))}}},u=d,o=(a("8a5e"),a("2877")),i=Object(o["a"])(u,n,r,!1,null,"17e1719c",null);e["default"]=i.exports},6686:function(t,e,a){},"8a5e":function(t,e,a){"use strict";var n=a("6686"),r=a.n(n);r.a},"90e7":function(t,e,a){"use strict";a.d(e,"h",(function(){return r})),a.d(e,"i",(function(){return c})),a.d(e,"g",(function(){return d})),a.d(e,"r",(function(){return u})),a.d(e,"z",(function(){return o})),a.d(e,"A",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"k",(function(){return p})),a.d(e,"s",(function(){return l})),a.d(e,"B",(function(){return m})),a.d(e,"d",(function(){return f})),a.d(e,"j",(function(){return h})),a.d(e,"x",(function(){return b})),a.d(e,"l",(function(){return w})),a.d(e,"t",(function(){return j})),a.d(e,"f",(function(){return v})),a.d(e,"q",(function(){return k})),a.d(e,"y",(function(){return O})),a.d(e,"a",(function(){return g})),a.d(e,"n",(function(){return y})),a.d(e,"C",(function(){return D})),a.d(e,"m",(function(){return x})),a.d(e,"u",(function(){return S})),a.d(e,"e",(function(){return A})),a.d(e,"p",(function(){return E})),a.d(e,"o",(function(){return _})),a.d(e,"v",(function(){return $})),a.d(e,"D",(function(){return T})),a.d(e,"c",(function(){return C})),a.d(e,"w",(function(){return I}));var n=a("b775");function r(t){return Object(n["a"])({url:"/merchantShopExpressTemplate",method:"get",params:t})}function c(){return Object(n["a"])({url:"/goodAddress",method:"get"})}function d(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantShopExpressTemplate/"+e,method:"get",params:t})}function u(t){return Object(n["a"])({url:"/merchantShopExpressTemplate",method:"post",data:t})}function o(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantShopExpressTemplate/"+e,method:"put",data:t})}function i(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantShopExpressTemplates/"+e,method:"put",data:t})}function s(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantShopExpressTemplate/"+e,method:"delete",data:t})}function p(t){return Object(n["a"])({url:"/merchantAfterInfo",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/merchantAfterInfo",method:"post",data:t})}function m(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantAfterInfo/"+e,method:"put",data:t})}function f(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantAppInfo/"+e,method:"get",params:t})}function h(t){return Object(n["a"])({url:"/merchantShopCategory",method:"get",params:t})}function b(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantAppInfo/"+e+"?key="+t.key,method:"put",data:t})}function w(t){return Object(n["a"])({url:"/merchantTuanConfig",method:"get",params:t})}function j(t){return Object(n["a"])({url:"/merchantTuanConfig",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/merchantElectronics",method:"get",params:t})}function k(t){return Object(n["a"])({url:"/merchantElectronics",method:"post",data:t})}function O(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantElectronics/"+e,method:"put",data:t})}function g(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantElectronics/"+e,method:"delete",data:t})}function y(t){return Object(n["a"])({url:"/merchantDiy",method:"get",params:t})}function D(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantDiy/"+e,method:"put",data:t})}function x(t){return Object(n["a"])({url:"/merchantUuAccount",method:"get",params:t})}function S(t){return delete t.id,Object(n["a"])({url:"/merchantUuAccount",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/dianwoda",method:"get",params:t})}function E(t){return delete t.id,Object(n["a"])({url:"/dianwoda",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/merchantPrints",method:"get",params:t})}function $(t){return Object(n["a"])({url:"/merchantPrints",method:"post",data:t})}function T(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantPrints/"+e,method:"put",data:t})}function C(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantPrints/"+e,method:"delete",data:t})}function I(){return"/api/web/index.php/posters"}}}]);