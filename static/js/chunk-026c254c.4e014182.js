(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-026c254c"],{"89be":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vip-pay-container"},[a("el-row",{staticClass:"vip-pay-row"},[a("el-col",{staticClass:"vip-pay-row-col",staticStyle:{"text-align":"left","padding-left":"15px"},attrs:{span:8}},[a("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.disVipPanel=!0,t.isAdd=!0,t.rest()}}},[t._v("新 增")])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("span",{staticStyle:{padding:"0 10px"}},[t._v("会员总开关")]),t._v(" "),a("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:t.putVipSwitch},model:{value:t.switchData.is_open,callback:function(e){t.$set(t.switchData,"is_open",e)},expression:"switchData.is_open"}})],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-input",{staticStyle:{"max-width":"240px"},attrs:{placeholder:"请输入名称",size:"small"},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}},[a("el-button",{staticClass:"search-button",attrs:{slot:"suffix",type:"text",size:"small"},on:{click:t.search},slot:"suffix"},[a("i",{staticClass:"el-icon-search"})])],1)],1)],1),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pagVipList,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"会员等级名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"min_score",label:"等级积分",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"discount_ration",label:"优惠比例(%)",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"voucher_count",label:"每月赠送优惠券数量",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"score_times",label:"会员获取积分倍数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:function(a){return t.putVipStatus(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"action-button",attrs:{type:"text"},on:{click:function(a){return t.eidt(e.row)}}},[a("i",{staticClass:"el-icon-edit"})]),t._v(" "),a("el-button",{staticClass:"action-button",attrs:{type:"text"},on:{click:function(a){return t.del(e.row)}}},[a("svg-icon",{attrs:{"icon-class":"shanchu"}})],1)]}}])})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[a("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":10,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.disVipPanel,width:"30%",title:t.isAdd?"新增":"修改"},on:{"update:visible":function(e){t.disVipPanel=e}}},[a("vip-panel",{attrs:{vipData:t.vipData,isAdd:t.isAdd},on:{success:function(e){t.disVipPanel=!1,t.getPayVipList()}}})],1)],1)},i=[],n=(a("ac6a"),a("98e1")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"unvipform",attrs:{model:t.vipData,rules:t.vipRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"会员等级名称",prop:"name"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"会员等级名称",size:"small"},model:{value:t.vipData.name,callback:function(e){t.$set(t.vipData,"name",e)},expression:"vipData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"等级积分",prop:"score"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"请输入等级积分",size:"small"},model:{value:t.vipData.min_score,callback:function(e){t.$set(t.vipData,"min_score",e)},expression:"vipData.min_score"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"优惠比例(%)",prop:"ratio"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"请输入优惠比例",size:"small"},model:{value:t.vipData.discount_ratio,callback:function(e){t.$set(t.vipData,"discount_ratio",e)},expression:"vipData.discount_ratio"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"每月赠送优惠券数量",prop:"count"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"请输入赠送优惠券数量",size:"small"},model:{value:t.vipData.voucher_count,callback:function(e){t.$set(t.vipData,"voucher_count",e)},expression:"vipData.voucher_count"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"代金券类型"}},[a("el-select",{staticStyle:{"max-width":"70"},attrs:{placeholder:"请选择代金券类型",size:"small"},model:{value:t.vipData.voucher_type_id,callback:function(e){t.$set(t.vipData,"voucher_type_id",e)},expression:"vipData.voucher_type_id"}},t._l(t.shopVouList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"会员获取积分的倍数",prop:"times"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"请输入购买次数",size:"small"},model:{value:t.vipData.score_times,callback:function(e){t.$set(t.vipData,"score_times",e)},expression:"vipData.score_times"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-color":"#13ce66"},model:{value:t.vipData.status,callback:function(e){t.$set(t.vipData,"status",e)},expression:"vipData.status"}})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v("提 交")])],1)],1)},c=[],o=(a("7f7f"),a("4360")),u={name:"vipPanel",props:{isAdd:{type:Boolean,required:!0,default:!0},vipData:{type:Object,default:function(){return{key:o["a"].state.app.activeApp.saa_key,name:"",min_score:"",discount_ratio:"",voucher_type_id:"",score_times:"",status:!0}}}},data:function(){return{vipRules:{name:[{required:!1,message:"请输入会员卡名称",trigger:"blur"}],score:[{required:!1,message:"请输入等级积分",trigger:"blur"}],ratio:[{required:!1,message:"请输入优惠比例",trigger:"blur"}],count:[{required:!1,message:"请输入赠送优惠券数量",trigger:"blur"}],times:[{required:!1,message:"请输入积分倍数",trigger:"blur"}]},shopVouList:[]}},watch:{shopVouList:function(t){t.length>0&&(this.vipData.voucher_type_id=t[0].id)}},mounted:function(){this.getShopVouType()},methods:{submit:function(){var t=this;this.$refs.unvipform.validate((function(e){if(e)if(t.isAdd)t.vipData.status=t.vipData.status?"1":"0",Object(n["i"])(t.vipData).then((function(e){200===e.status?(t.$emit("success"),t.$message.success("添加成功！")):t.$message.error(e.message)}));else{var a={key:t.$store.state.app.activeApp.saa_key,id:t.vipData.id,name:t.vipData.name,discount_ratio:t.vipData.discount_ratio,voucher_count:t.vipData.voucher_count,voucher_type_id:t.vipData.voucher_type_id,score_times:t.vipData.score_times,status:t.vipData.status?"1":"0"};Object(n["l"])(a).then((function(e){200===e.status?(t.$emit("success"),t.$message.success("修改成功！")):t.$message.error(e.message)}))}}))},getShopVouType:function(){var t=this;Object(n["d"])({key:this.$store.state.app.activeApp.saa_key,type:"1"}).then((function(e){200===e.status?t.shopVouList=e.data:t.$message.error(e.message)}))}}},p=u,l=a("2877"),d=Object(l["a"])(p,r,c,!1,null,null,null),m=d.exports,h={name:"vipPay",components:{vipPanel:m},data:function(){return{switchData:{},page:1,count:1,searchName:"",pagVipList:[],disVipPanel:!1,isAdd:!0,disVipConfig:!1,vipData:{key:this.$store.state.app.activeApp.saa_key,name:"",min_score:"",discount_ratio:"",voucher_type_id:"",score_times:"",status:!0}}},mounted:function(){this.vipSwitch(),this.getPayVipList()},methods:{eidt:function(t){this.isAdd=!1,this.vipData=t,this.disVipPanel=!0},putVipStatus:function(t){var e=this,a={key:this.$store.state.app.activeApp.saa_key,id:t.id,status:t.status?"1":"0"};Object(n["l"])(a).then((function(t){200===t.status?(e.$message.success("修改成功！"),e.getPayVipList()):e.$message.error(t.message)}))},getPayVipList:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,searchName:this.searchName,page:this.page,limit:10};Object(n["e"])(e).then((function(e){200===e.status?(t.pagVipList=e.data,t.pagVipList.forEach((function(t){return t.status="1"===t.status})),t.count=parseInt(e.count)):204===e.status?(t.pagVipList=[],t.count=1):t.$message.error(e.message)}))},vipSwitch:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,english_name:"Vip_integral"};Object(n["p"])(e).then((function(e){200===e.status?(t.switchData=e.data,t.switchData.is_open="1"===t.switchData.is_open):204===e.status?t.switchData={}:t.$message.error(e.message)}))},putVipSwitch:function(){var t=this;if(this.switchData.is_open)this.$confirm("开启积分会员，付费会员将自动关闭，确定开启吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e={key:t.$store.state.app.activeApp.saa_key,english_name:"Vip_integral",is_open:t.switchData.is_open?"1":"0",id:t.switchData.id};Object(n["o"])(e).then((function(e){200===e.status?t.$message.success("修改成功！"):t.$message.error(e.message)}))})).catch((function(){t.switchData.is_open=!1}));else{var e={key:this.$store.state.app.activeApp.saa_key,english_name:"Vip_payment",is_open:this.switchData.is_open?"1":"0",id:this.switchData.id};Object(n["o"])(e).then((function(e){200===e.status?t.$message.success("修改成功！"):t.$message.error(e.message)}))}},changePage:function(t){this.page=t,this.getPayVipList()},search:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:1,limit:10,searchName:this.searchName};Object(n["e"])(e).then((function(e){200===e.status?(t.pagVipList=e.data,t.pagVipList.forEach((function(t){return t.status="1"===t.status})),t.count=parseInt(e.count)):204===e.status?(t.pagVipList=[],t.count=1):t.$message.error(e.message)}))},del:function(t){var e=this,a={key:this.$store.state.app.activeApp.saa_key,id:t.id};Object(n["b"])(a).then((function(t){200===t.status?(e.getPayVipList(),e.$message.success("删除成功！")):e.$message.error(t.message)}))},rest:function(){this.vipData={key:this.$store.state.app.activeApp.saa_key,name:"",min_score:"",discount_ratio:"",voucher_type_id:"",score_times:"",status:!0}}}},v=h,f=(a("ce6f"),Object(l["a"])(v,s,i,!1,null,"e3560832",null));e["default"]=f.exports},"98e1":function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"n",(function(){return n})),a.d(e,"p",(function(){return r})),a.d(e,"o",(function(){return c})),a.d(e,"c",(function(){return o})),a.d(e,"h",(function(){return u})),a.d(e,"k",(function(){return p})),a.d(e,"a",(function(){return l})),a.d(e,"f",(function(){return d})),a.d(e,"j",(function(){return m})),a.d(e,"m",(function(){return h})),a.d(e,"d",(function(){return v})),a.d(e,"e",(function(){return f})),a.d(e,"i",(function(){return g})),a.d(e,"l",(function(){return _})),a.d(e,"b",(function(){return b}));var s=a("b775");function i(t){return Object(s["a"])({url:"/merchantShopUsers",method:"get",params:t})}function n(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/merchantShopUsers/"+e,method:"put",data:t})}function r(t){return Object(s["a"])({url:"/merchantVipPlugin",method:"get",params:t})}function c(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/merchantVipPlugin/"+e,method:"put",data:t})}function o(t){return Object(s["a"])({url:"/vips",method:"get",params:t})}function u(t){return Object(s["a"])({url:"/vips",method:"post",data:t})}function p(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/vips/"+e,method:"put",data:t})}function l(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/vips/"+e,method:"delete",data:t})}function d(t){return Object(s["a"])({url:"/vipConfig",method:"get",params:t})}function m(t){return Object(s["a"])({url:"/vipConfig",method:"post",data:t})}function h(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/vipConfig/"+e,method:"put",data:t})}function v(t){return Object(s["a"])({url:"/shopVouTypes",method:"get",params:t})}function f(t){return Object(s["a"])({url:"/unpaidVips",method:"get",params:t})}function g(t){return Object(s["a"])({url:"/unpaidVips",method:"post",data:t})}function _(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/unpaidVips/"+e,method:"put",data:t})}function b(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/unpaidVips/"+e,method:"delete",data:t})}},ce6f:function(t,e,a){"use strict";var s=a("e2e5"),i=a.n(s);i.a},e2e5:function(t,e,a){}}]);