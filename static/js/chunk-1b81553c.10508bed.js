(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b81553c"],{"0bc2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-yly-container"},[a("el-row",{staticClass:"setting-yly-row"},[a("el-col",{staticClass:"setting-yly-row-col",staticStyle:{"text-align":"left","padding-left":"15px"},attrs:{span:14}},[a("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:t.add}},[t._v("新 增")])],1),t._v(" "),a("el-col",{staticStyle:{"text-align":"right","padding-right":"40px"},attrs:{span:10}},[a("el-input",{staticStyle:{"max-width":"240px"},attrs:{placeholder:"请输入名称",size:"small"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}},[a("el-button",{staticClass:"search-button",attrs:{slot:"suffix",type:"text",size:"small"},on:{click:t.search},slot:"suffix"},[a("i",{staticClass:"el-icon-search"})])],1)],1)],1),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"location",label:"坐标",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goods_number",label:"商品数量",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"format_create_time",label:"创建时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":"1","inactive-value":"0"},on:{change:function(a){return t.changeStatus(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"action-button",attrs:{type:"text"},on:{click:function(a){return t.bind(e.row)}}},[t._v("绑定小区")]),t._v(" "),a("el-button",{staticClass:"action-button",attrs:{type:"text"},on:{click:function(a){return t.edit(e.row)}}},[a("i",{staticClass:"el-icon-edit"})]),t._v(" "),a("el-button",{staticClass:"action-button",attrs:{type:"text"},on:{click:function(a){return t.del(e.row)}}},[a("svg-icon",{attrs:{"icon-class":"shanchu"}})],1)]}}])})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[a("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":10,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.disAdd,width:"30%",title:t.isAdd?"新增":"修改"},on:{"update:visible":function(e){t.disAdd=e}}},[t.disAdd?a("add",{attrs:{isAdd:t.isAdd,addData:t.addData},on:{success:function(e){t.disAdd=!1,t.getWarehouseList()}}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{visible:t.disBind,width:"50%",title:"绑定团长"},on:{"update:visible":function(e){t.disBind=e}}},[t.disBind?a("bind",{attrs:{addData:t.addData},on:{success:function(e){t.disBind=!1}}}):t._e()],1)],1)},n=[],i=(a("7f7f"),a("64dc")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"addform",attrs:{model:t.addData,"label-width":"100px",size:"small"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入"},model:{value:t.addData.name,callback:function(e){t.$set(t.addData,"name",e)},expression:"addData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入"},model:{value:t.addData.address,callback:function(e){t.$set(t.addData,"address",e)},expression:"addData.address"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"坐标"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入"},model:{value:t.addData.location,callback:function(e){t.$set(t.addData,"location",e)},expression:"addData.location"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":"1","inactive-value":"0"},model:{value:t.addData.status,callback:function(e){t.$set(t.addData,"status",e)},expression:"addData.status"}})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v("提 交")])],1)],1)},c=[],l={props:{addData:{type:Object,required:!0},isAdd:{type:Boolean,required:!0}},methods:{submit:function(){var t=this;this.$refs.addform.validate((function(e){e&&(t.isAdd?Object(i["v"])(t.addData).then((function(e){200===e.status?(t.$emit("success"),t.$message.success("添加成功！")):t.$message.error(e.message)})):Object(i["w"])(t.addData).then((function(e){200===e.status?(t.$emit("success"),t.$message.success("修改成功！")):t.$message.error(e.message)})))}))}}},o=l,u=a("2877"),d=Object(u["a"])(o,r,c,!1,null,null,null),p=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-yly-container"},[a("el-row",{staticClass:"setting-yly-row"},[a("el-col",{staticStyle:{"text-align":"right","padding-right":"40px"},attrs:{span:10}},[a("el-input",{staticStyle:{"max-width":"240px"},attrs:{placeholder:"请输入名称",size:"small"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}},[a("el-button",{staticClass:"search-button",attrs:{slot:"suffix",type:"text",size:"small"},on:{click:t.search},slot:"suffix"},[a("i",{staticClass:"el-icon-search"})])],1)],1)],1),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""},on:{"selection-change":t.handleSelectionChange}},[t._v(">\n      "),a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"团长ID",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"realname",label:"团长名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"area_name",label:"小区名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"route",label:"所属路线",align:"center"}})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v("确 定")])],1)],1)},h=[],f={props:{addData:{type:Object}},data:function(){return{page:1,count:1,limit:1e3,searchName:"",list:[],multipleSelection:[]}},mounted:function(){this.getWarehouseBindLeaderList()},methods:{getWarehouseBindLeaderList:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:this.page,limit:this.limit};Object(i["o"])(e).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},search:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:1,limit:this.limit,searchName:this.searchName};Object(i["o"])(e).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},handleSelectionChange:function(t){this.multipleSelection=t},submit:function(){var t=this;if(this.multipleSelection.length>0){for(var e=this.multipleSelection.length,a=0;a<e;a++)""===this.addData.leader_ids?this.addData.leader_ids=this.multipleSelection[a].id:this.addData.leader_ids+=","+this.multipleSelection[a].id;Object(i["a"])(this.addData).then((function(e){200===e.status?(t.$emit("success"),t.$message.success("绑定成功！")):t.$message.error(e.message)}))}}}},g=f,b=Object(u["a"])(g,m,h,!1,null,null,null),v=b.exports,y={name:"setting-yly",components:{add:p,bind:v},data:function(){return{page:1,count:1,list:[],searchName:"",disAdd:!1,isAdd:!0,disBind:!1,addData:{key:this.$store.state.app.activeApp.saa_key,name:"",address:"",status:"1",location:""}}},mounted:function(){this.getWarehouseList()},methods:{getWarehouseList:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:this.page,limit:10};Object(i["q"])(e).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},changePage:function(t){this.page=t,this.getWarehouseList()},search:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:1,limit:10,searchName:this.searchName};Object(i["q"])(e).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},add:function(){this.addData={key:this.$store.state.app.activeApp.saa_key,name:"",address:"",status:"1",location:""},this.isAdd=!0,this.disAdd=!0},del:function(t){var e=this,a="确认删除该条记录吗？";if(!0===confirm(a)){var s={key:this.$store.state.app.activeApp.saa_key,id:t.id};Object(i["c"])(s).then((function(t){200===t.status?(e.getWarehouseList(),e.$message.success("删除成功！")):e.$message.error(t.message)}))}},edit:function(t){this.addData={id:t.id,key:this.$store.state.app.activeApp.saa_key,name:t.name,address:t.address,status:t.status,location:t.location},this.disAdd=!0,this.isAdd=!1},changeStatus:function(t){var e=this,a={key:this.$store.state.app.activeApp.saa_key,id:t.id,status:t.status};Object(i["w"])(a).then((function(t){200===t.status?e.$message.success("修改成功！"):e.$message.error(t.message)}))},bind:function(t){this.addData={key:this.$store.state.app.activeApp.saa_key,storehouse_id:t.id,leader_ids:t.leader_ids},this.disBind=!0}}},_=y,k=(a("167c"),Object(u["a"])(_,s,n,!1,null,"ec533f04",null));e["default"]=k.exports},"167c":function(t,e,a){"use strict";var s=a("fcb8"),n=a.n(s);n.a},"64dc":function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"q",(function(){return i})),a.d(e,"v",(function(){return r})),a.d(e,"w",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"p",(function(){return o})),a.d(e,"d",(function(){return u})),a.d(e,"o",(function(){return d})),a.d(e,"a",(function(){return p})),a.d(e,"g",(function(){return m})),a.d(e,"f",(function(){return h})),a.d(e,"r",(function(){return f})),a.d(e,"h",(function(){return g})),a.d(e,"l",(function(){return b})),a.d(e,"k",(function(){return v})),a.d(e,"u",(function(){return y})),a.d(e,"m",(function(){return _})),a.d(e,"j",(function(){return k})),a.d(e,"i",(function(){return x})),a.d(e,"t",(function(){return j})),a.d(e,"n",(function(){return O})),a.d(e,"b",(function(){return w}));var s=a("b775");function n(t){return Object(s["a"])({url:"/searchGoods",method:"get",params:t})}function i(t){return Object(s["a"])({url:"/storehouses",method:"get",params:t})}function r(t){return Object(s["a"])({url:"/storehouses",method:"post",data:t})}function c(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/storehouses/"+e,method:"put",data:t})}function l(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/storehouses/"+e,method:"delete",data:t})}function o(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/storehouseDetail/"+e,method:"get",params:t})}function u(t){return Object(s["a"])({url:"/deleteLeader",method:"delete",data:t})}function d(t){return Object(s["a"])({url:"/searchLeader",method:"get",params:t})}function p(t){return Object(s["a"])({url:"/bindLeader",method:"post",data:t})}function m(t){return Object(s["a"])({url:"/incomings",method:"get",params:t})}function h(t){return Object(s["a"])({url:"/incomings/"+t.id,method:"get",params:t})}function f(t){return Object(s["a"])({url:"/incomings",method:"post",data:t})}function g(t){return Object(s["a"])({url:"/searchList",method:"get",params:t})}function b(t){return Object(s["a"])({url:"/outbounds",method:"get",params:t})}function v(t){return Object(s["a"])({url:"/outbounds/"+t.id,method:"get",params:t})}function y(t){return Object(s["a"])({url:"/outbounds",method:"post",data:t})}function _(t){return Object(s["a"])({url:"/outboundList",method:"get",params:t})}function k(t){return Object(s["a"])({url:"/inventories",method:"get",params:t})}function x(t){return Object(s["a"])({url:"/inventories/"+t.id,method:"get",params:t})}function j(t){return Object(s["a"])({url:"/inventories",method:"post",data:t})}function O(t){return Object(s["a"])({url:"/realStock",method:"get",params:t})}function w(t){var e=t.id;return delete t.id,Object(s["a"])({url:"/realStock/"+e,method:"delete",data:t})}},fcb8:function(t,e,a){}}]);