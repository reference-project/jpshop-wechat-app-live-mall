(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e32dccd"],{"58cf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customers-head-container"},[a("div",{staticClass:"customers-head-top"},[a("el-row",{staticStyle:{height:"32px","line-height":"32px"}},[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"customers-head-top-col",staticStyle:{"padding-left":"0"}},[a("span",{staticStyle:{padding:"0 5px"}},[t._v("时间范围")]),t._v(" "),a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetimerange","picker-options":t.pickerOptions,"range-separator":"至","start-placeholde":"开始时间","end-placeholde":"结束时间",size:"small"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"customers-head-top-col"},[a("span",{staticStyle:{padding:"0 5px"}},[t._v("关键词")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入昵称、真实姓名或手机号",size:"small"},model:{value:t.tuanParams.searchName,callback:function(e){t.$set(t.tuanParams,"searchName",e)},expression:"tuanParams.searchName"}})],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"customers-head-top-col"},[a("span",{staticStyle:{padding:"0 5px"}},[t._v("城市")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入城市",size:"small"},model:{value:t.tuanParams.city,callback:function(e){t.$set(t.tuanParams,"city",e)},expression:"tuanParams.city"}})],1)]),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("搜索")])],1)],1)],1),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.TuanList,stripe:""}},[a("el-table-column",{attrs:{label:"头像",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("l-pic",{attrs:{picurl:t.row.avatar,size:{width:40,height:40},disdel:!1,disview:!1}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"团长信息",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("div",[t._v(t._s(e.row.realname))]),t._v(" "),a("div",[t._v(t._s(e.row.phone))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"所属城市",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("div",[t._v(t._s(e.row.province))]),t._v(" "),a("div",[t._v(t._s(e.row.city))]),t._v(" "),a("div",[t._v(t._s(e.row.area))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"自提点信息"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("div",[a("span",[t._v("小区：")]),t._v(t._s(e.row.area_name))]),t._v(" "),a("div",[a("span",[t._v("自提点：")]),t._v(t._s(e.row.addr))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"is_tuan_express",label:"团长配送费",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"number",label:"总订单数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"旗下团员",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-button",{staticStyle:{display:"inline-block"},attrs:{type:"text"},on:{click:function(a){return t.writeOff(e.row)}}},[t._v(t._s(e.row.count))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"佣金"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("div",[a("span",[t._v("总消费佣金：")]),t._v(t._s(null===e.row.sum_money?0:e.row.sum_money))]),t._v(" "),a("div",[a("span",[t._v("待结算佣金：")]),t._v(t._s(null===e.row.on_money?0:e.row.on_money))]),t._v(" "),a("div",[a("span",[t._v("待提现佣金：")]),t._v(t._s(null===e.row.user_balance?0:e.row.user_balance))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",["0"===e.row.state?a("el-tag",{attrs:{effect:"dark",size:"small",type:"success"}},[t._v("正常")]):t._e(),t._v(" "),"1"===e.row.state?a("el-tag",{attrs:{effect:"dark",size:"small",type:"danger"}},[t._v("冻结")]):t._e(),t._v(" "),"2"===e.row.state?a("el-tag",{attrs:{effect:"dark",size:"small",type:"info"}},[t._v("关闭")]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-button",{staticStyle:{display:"inline-block"},attrs:{type:"text"},on:{click:function(a){return t.addGoods(e.row)}}},[t._v("绑定商品")]),t._v(" "),a("el-button",{staticStyle:{display:"inline-block"},attrs:{type:"text"},on:{click:function(a){return t.delTuanUser(e.row)}}},[t._v("解绑会员")]),t._v(" "),a("el-button",{staticStyle:{display:"inline-block"},attrs:{type:"text"},on:{click:function(a){return t.edit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{staticStyle:{display:"inline-block"},attrs:{type:"text"},on:{click:function(a){return t.addWriteOff(e.row)}}},[t._v("添加核销员")]),t._v(" "),a("el-button",{staticStyle:{display:"inline-block"},attrs:{type:"text"},on:{click:function(a){return t.showWriteOff(e.row)}}},[t._v("查看核销员")])],1)]}}])})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[a("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":10,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.disWriteOff,width:"40%",title:"旗下团员"},on:{"update:visible":function(e){t.disWriteOff=e}}},[t.disWriteOff?a("write-off",{attrs:{tuanId:t.tuanId},on:{success:function(e){t.disWriteOff=!1}}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{visible:t.disAddGoods,width:"40%",title:"绑定商品"},on:{"update:visible":function(e){t.disAddGoods=e}}},[t.disAddGoods?a("add-goods",{attrs:{tuanId:t.tuanId},on:{success:function(e){t.disAddGoods=!1,t.getTuanList()}}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{visible:t.disAddWriteOff,width:"40%",title:"绑定核销员"},on:{"update:visible":function(e){t.disAddWriteOff=e}}},[t.disAddWriteOff?a("add-writeOff",{attrs:{tuanId:t.tuanId},on:{success:function(e){t.disAddWriteOff=!1}}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{visible:t.disShowWriteOff,width:"40%",title:"查看核销员"},on:{"update:visible":function(e){t.disShowWriteOff=e}}},[t.disShowWriteOff?a("show-writeOff",{attrs:{tuanId:t.tuanId},on:{success:function(e){t.disShowWriteOff=!1}}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{visible:t.disEdit,width:"40%",title:"编辑",top:"0"},on:{"update:visible":function(e){t.disEdit=e}}},[t.disEdit?a("edit",{attrs:{tuanId:t.tuanId},on:{success:function(e){t.disEdit=!1,t.getTuanList()}}}):t._e()],1)],1)},i=[],s=a("9671"),r=a("334a"),l=a("ed08"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("l-pic",{attrs:{picurl:t.row.avatar,size:{width:40,height:40},disdel:!1,disview:!1}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"团员名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"团员手机号",align:"center"}})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[a("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":10,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1)])},u=[],c={name:"showWriteOff",components:{LPic:r["a"]},props:{tuanId:{type:String,required:!0}},data:function(){return{page:1,count:1,list:[],selectGoods:[]}},mounted:function(){this.getTuanLeagueMemberList()},methods:{getTuanLeagueMemberList:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:this.page,limit:10,id:this.tuanId};Object(s["g"])(e).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},changePage:function(t){this.page=t,this.getTuanLeagueMemberList()}}},d=c,p=a("2877"),m=Object(p["a"])(d,o,u,!1,null,null,null),h=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{ref:"goodsTable",staticStyle:{width:"100%"},attrs:{data:t.goodsList,stripe:""},on:{"selection-change":t.selectChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.pic_urls.split(","),(function(e,n){return""!==e?a("l-pic",{key:n,attrs:{picurl:e,size:{width:40,height:40},disdel:!1,disview:!1}}):t._e()}))}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格",align:"center"}})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[a("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":10,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"25px"}},[a("el-button",{staticStyle:{padding:"8px 20px"},attrs:{type:"primary"},on:{click:t.submit}},[t._v("保 存")])],1)])},g=[],v=(a("7514"),a("ac6a"),a("c40e")),_={name:"addGoods",components:{LPic:r["a"]},props:{tuanId:{type:String,required:!0}},data:function(){return{page:1,count:1,goodsList:[],tuanGoodsList:{},selectGoods:[]}},watch:{tuanGoodsList:function(t){var e=this;t.goods_ids.forEach((function(t){if(""!==t){var a=e.goodsList.find((function(e){return e.id===t}));e.selectGoods.push(a),e.$refs.goodsTable.toggleRowSelection(a)}}))}},mounted:function(){this.getGoodsList()},methods:{getGoodsList:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:this.page,limit:10};Object(v["f"])(e).then((function(e){200===e.status?(t.goodsList=e.data,t.count=parseInt(e.count),t.getTuanGoodsList()):204===e.status?(t.goodsList=[],t.count=1):t.$message.error(e.message)}))},getTuanGoodsList:function(){var t=this,e={id:this.tuanId,key:this.$store.state.app.activeApp.saa_key};Object(s["f"])(e).then((function(e){200===e.status?t.tuanGoodsList=e.data:t.$message.error(e.message)}))},changePage:function(t){this.page=t,this.getGoodsList()},selectChange:function(t){this.selectGoods=t},submit:function(){var t=this,e={id:this.tuanId,goods_ids:[""],key:this.$store.state.app.activeApp.saa_key};this.selectGoods.forEach((function(t){e.goods_ids.push(t.id)})),Object(s["n"])(e).then((function(e){200===e.status?t.$emit("success"):t.$message.error(e.message)}))}}},b=_,y=Object(p["a"])(b,f,g,!1,null,null,null),w=y.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""},on:{"selection-change":t.selectChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("l-pic",{attrs:{picurl:t.row.avatar,size:{width:40,height:40},disdel:!1,disview:!1}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"团员名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"团员手机号",align:"center"}})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[a("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":10,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"25px"}},[a("el-button",{staticStyle:{padding:"8px 20px"},attrs:{type:"primary"},on:{click:t.submit}},[t._v("保 存")])],1)])},O=[],x={name:"addWriteOff",components:{LPic:r["a"]},props:{tuanId:{type:String,required:!0}},data:function(){return{page:1,count:1,list:[],selectGoods:[]}},mounted:function(){console.log(this.tuanId),this.getTuanLeagueMemberList()},methods:{getTuanLeagueMemberList:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:this.page,limit:10,id:this.tuanId,type:0};Object(s["g"])(e).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},changePage:function(t){this.page=t,this.getTuanLeagueMemberList()},selectChange:function(t){this.selectGoods=t},submit:function(){var t=this,e={is_verify:"1",key:this.$store.state.app.activeApp.saa_key};this.selectGoods.forEach((function(t){e.id.push(t.id)})),Object(s["o"])(e).then((function(e){200===e.status?t.$emit("success"):t.$message.error(e.message)}))}}},S=x,D=Object(p["a"])(S,k,O,!1,null,null,null),j=D.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("l-pic",{attrs:{picurl:t.row.avatar,size:{width:40,height:40},disdel:!1,disview:!1}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"团员名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"团员手机号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"action-button",attrs:{type:"text"},on:{click:function(a){return t.cancel(e.row.id)}}},[t._v("撤销")])]}}])})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[a("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":10,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1)])},T=[],$={name:"showWriteOff",components:{LPic:r["a"]},props:{tuanId:{type:String,required:!0}},data:function(){return{page:1,count:1,list:[],selectGoods:[]}},mounted:function(){this.getTuanLeagueMemberList()},methods:{getTuanLeagueMemberList:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,page:this.page,limit:10,id:this.tuanId,type:1};Object(s["g"])(e).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},cancel:function(t){var e=this;this.$confirm("是否通过该审核?","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then((function(){var a={key:e.$store.state.app.activeApp.saa_key,id:[t],is_verify:0};Object(s["o"])(a).then((function(t){200===t.status?(e.$message.success("撤销成功"),e.$emit("success")):e.$message.error(t.message)}))})).catch((function(){}))},changePage:function(t){this.page=t,this.getTuanLeagueMemberList()}}},P=$,G=Object(p["a"])(P,L,T,!1,null,null,null),z=G.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"tuaneditform",attrs:{model:t.tuanData,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"头像"}},[a("l-pic",{attrs:{picurl:t.tuanData.avatar,size:{width:40,height:40},disdel:!1,disview:!1}})],1),t._v(" "),a("el-form-item",{attrs:{label:"昵称"}},[a("div",[t._v(t._s(t.tuanData.nickname))])]),t._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("div",[t._v(t._s(t.tuanData.sex))])]),t._v(" "),a("el-form-item",{attrs:{label:"手机号码"}},[a("div",[t._v(t._s(t.tuanData.phone))])]),t._v(" "),a("el-form-item",{attrs:{label:"真实姓名"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"真实姓名",size:"small"},model:{value:t.tuanData.realname,callback:function(e){t.$set(t.tuanData,"realname",e)},expression:"tuanData.realname"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"团员数量"}},[a("div",[t._v("未设置")])]),t._v(" "),a("el-form-item",{attrs:{label:"上级团长"}},[a("div",[t._v("无（未设置）")])]),t._v(" "),a("el-form-item",{attrs:{label:"自提点地区"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{options:t.options,placeholder:"请选择省市区"},on:{change:t.handleChange},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"自提点小区"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"自提点小区",size:"small"},model:{value:t.tuanData.area_name,callback:function(e){t.$set(t.tuanData,"area_name",e)},expression:"tuanData.area_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"自提点地址"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"自提点小区",size:"small"},model:{value:t.tuanData.addr,callback:function(e){t.$set(t.tuanData,"addr",e)},expression:"tuanData.addr"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"自提点坐标"}},[a("el-input",{staticStyle:{"max-width":"35%"},attrs:{placeholder:"自提点坐标",size:"small"},model:{value:t.tuanData.longitude,callback:function(e){t.$set(t.tuanData,"longitude",e)},expression:"tuanData.longitude"}}),t._v(" "),a("el-input",{staticStyle:{"max-width":"35%"},attrs:{placeholder:"自提点坐标",size:"small"},model:{value:t.tuanData.latitude,callback:function(e){t.$set(t.tuanData,"latitude",e)},expression:"tuanData.latitude"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"地图定位"}},[a("baidu-map",{staticStyle:{width:"70%",height:"200px"},attrs:{ak:"6GsLWO6HaqjRb3BuCjqCHIP1tMEuMkWK",zoom:t.zoom,center:t.mapCenter},on:{click:t.getLocationPoint}})],1),t._v(" "),a("el-form-item",{attrs:{label:"注册时间"}},[a("div",[t._v(t._s(t.tuanData.format_create_time))])]),t._v(" "),a("el-form-item",{attrs:{label:"积分"}},[a("div",[t._v("未设置")])]),t._v(" "),a("el-form-item",{attrs:{label:"销售额"}},[a("div",[t._v("未设置")])]),t._v(" "),a("el-form-item",{attrs:{label:"是否自提"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":"1","inactive-value":"0"},model:{value:t.tuanData.is_self,callback:function(e){t.$set(t.tuanData,"is_self",e)},expression:"tuanData.is_self"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"送货上门"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":"0","inactive-value":"1"},model:{value:t.tuanData.is_self,callback:function(e){t.$set(t.tuanData,"is_self",e)},expression:"tuanData.is_self"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"配送费"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"配送费",size:"small"},model:{value:t.tuanData.is_tuan_express,callback:function(e){t.$set(t.tuanData,"is_tuan_express",e)},expression:"tuanData.is_tuan_express"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"支付宝"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"支付宝",size:"small"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"银行卡所在行"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"银行卡所在行",size:"small"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"持卡人姓名"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"持卡人姓名",size:"small"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"卡号"}},[a("el-input",{staticStyle:{"max-width":"70%"},attrs:{placeholder:"卡号",size:"small"}})],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"25px"}},[a("el-button",{staticStyle:{padding:"8px 20px"},attrs:{type:"primary"},on:{click:t.submit}},[t._v("保 存")])],1)],1)},I=[],W=a("ef6c"),A=a("df2b"),E={name:"headedit",components:{LPic:r["a"],BaiduMap:A["a"]},props:{tuanId:{type:String,required:!0}},data:function(){return{options:W["regionData"],tuanData:{},selectedOptions:[],mapCenter:{lng:116.403963,lat:39.915111},zoom:15}},watch:{tuanData:function(t){this.selectedOptions=[t.province_code,t.city_code,t.area_code]}},mounted:function(){this.getTuanUser()},methods:{getTuanUser:function(){var t=this,e={id:this.tuanId,key:this.$store.state.app.activeApp.saa_key};Object(s["i"])(e).then((function(e){200===e.status?(t.tuanData=e.data,t.mapCenter.lng=t.tuanData.longitude,t.mapCenter.lat=t.tuanData.latitude):t.$message.error(e.message)}))},getLocationPoint:function(t){this.tuanData.longitude=t.point.lng,this.tuanData.latitude=t.point.lat},handleChange:function(t){this.tuanData.province_code=t[0],this.tuanData.province=W["CodeToText"][t[0]],this.tuanData.city_code=t[1],this.tuanData.city=W["CodeToText"][t[1]],this.tuanData.area_code=t[2],this.tuanData.area=W["CodeToText"][t[2]]},submit:function(){var t=this;console.log(this.tuanData),delete this.tuanData.format_create_time,delete this.tuanData.format_update_time,delete this.tuanData.province,delete this.tuanData.city,delete this.tuanData.area,delete this.tuanData.money,delete this.tuanData.audit_name,delete this.tuanData.nickname,delete this.tuanData.avatar,delete this.tuanData.sex,delete this.tuanData.ali,delete this.tuanData.pay_name,delete this.tuanData.pay_realname,delete this.tuanData.pay_number,Object(s["q"])(this.tuanData).then((function(e){200===e.status?(t.$emit("success"),t.$message.success("修改成功！")):t.$message.error(e.message)}))}}},M=E,U=Object(p["a"])(M,C,I,!1,null,null,null),q=U.exports,N={name:"customershead",components:{LPic:r["a"],addGoods:w,writeOff:h,addWriteOff:j,showWriteOff:z,edit:q},data:function(){return{page:1,count:1,tuanId:"",tuanParams:{key:this.$store.state.app.activeApp.saa_key,type:1,is_self:1,audit_time:"",searchName:"",city:"",limit:10,page:1},time:"",TuanList:[],disWriteOff:!1,disAddGoods:!1,disAddWriteOff:!1,disShowWriteOff:!1,disEdit:!1,pickerOptions:{shortcuts:[{text:"近7天",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"近30天",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}}]}}},mounted:function(){this.getTuanList()},watch:{time:function(t){if(null!==t){var e=Object(l["a"])(t[0],"{y}-{m}-{d}"),a=Object(l["a"])(t[1],"{y}-{m}-{d}");this.tuanParams.audit_time=e+" to "+a}else this.tuanParams.audit_time=""}},methods:{getTuanList:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,type:1,is_self:1,limit:10,page:this.page};Object(s["j"])(e).then((function(e){200===e.status?(t.TuanList=e.data,t.count=e.count):204===e.status?(t.TuanList=[],t.count=1):t.$message.error(e.message)}))},changePage:function(t){this.page=t,this.getTuanList()},search:function(){var t=this;""===this.tuanParams.audit_time&&delete this.tuanParams.audit_time,""===this.tuanParams.searchName&&delete this.tuanParams.searchName,""===this.tuanParams.city&&delete this.tuanParams.city,Object(s["j"])(this.tuanParams).then((function(e){200===e.status?(t.TuanList=e.data,t.count=e.count):204===e.status?(t.TuanList=[],t.count=1):t.$message.error(e.message)}))},writeOff:function(t){this.tuanId=t.uid,this.disWriteOff=!0},addGoods:function(t){this.tuanId=t.id,this.disAddGoods=!0},addWriteOff:function(t){this.tuanId=t.uid,this.disAddWriteOff=!0},showWriteOff:function(t){this.tuanId=t.uid,this.disShowWriteOff=!0},delTuanUser:function(t){var e=this,a={id:t.id,key:this.$store.state.app.activeApp.saa_key};Object(s["b"])(a).then((function(t){200===t.status?(e.$message.success("解绑成功！"),e.getTuanList()):e.$message.error(t.message)}))},edit:function(t){this.tuanId=t.id,this.disEdit=!0}}},B=N,R=(a("70bd"),Object(p["a"])(B,n,i,!1,null,"ecfad146",null));e["default"]=R.exports},"70bd":function(t,e,a){"use strict";var n=a("a0c8"),i=a.n(n);i.a},9671:function(t,e,a){"use strict";a.d(e,"j",(function(){return i})),a.d(e,"f",(function(){return s})),a.d(e,"n",(function(){return r})),a.d(e,"b",(function(){return l})),a.d(e,"i",(function(){return o})),a.d(e,"q",(function(){return u})),a.d(e,"g",(function(){return c})),a.d(e,"o",(function(){return d})),a.d(e,"e",(function(){return p})),a.d(e,"d",(function(){return m})),a.d(e,"h",(function(){return h})),a.d(e,"l",(function(){return f})),a.d(e,"p",(function(){return g})),a.d(e,"a",(function(){return v})),a.d(e,"k",(function(){return _})),a.d(e,"m",(function(){return b})),a.d(e,"r",(function(){return y})),a.d(e,"c",(function(){return w}));var n=a("b775");function i(t){return Object(n["a"])({url:"/merchantTuanUser",method:"get",params:t})}function s(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantLeaderGoods/"+e,method:"get",params:t})}function r(t){var e=t.id;return delete t.id,Object(n["a"])({url:"merchantLeaderGoods/"+e,method:"put",data:t})}function l(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantTuanUserUntying/"+e,method:"delete",data:t})}function o(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantTuanUser/"+e,method:"get",params:t})}function u(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantTuanUsers/"+e,method:"put",data:t})}function c(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantLeagueMember/"+e,method:"get",params:t})}function d(t){return Object(n["a"])({url:"/merchantLeagueMember",method:"put",data:t})}function p(t){return Object(n["a"])({url:"/merchantTuanUser",method:"get",params:t})}function m(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantTuanUser/"+e,method:"put",data:t})}function h(t){return Object(n["a"])({url:"/merchantLeaderLevel",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/merchantLeaderLevel",method:"post",data:t})}function g(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantLeaderLevel/"+e,method:"put",data:t})}function v(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantLeaderLevel/"+e,method:"delete",data:t})}function _(t){return Object(n["a"])({url:"/merchantWarehouse",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/merchantWarehouse",method:"post",data:t})}function y(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantWarehouse/"+e,method:"put",data:t})}function w(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantWarehouse/"+e,method:"delete",data:t})}},a0c8:function(t,e,a){},c40e:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"i",(function(){return s})),a.d(e,"k",(function(){return r})),a.d(e,"l",(function(){return l})),a.d(e,"b",(function(){return o})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return c})),a.d(e,"c",(function(){return d})),a.d(e,"j",(function(){return p})),a.d(e,"a",(function(){return m})),a.d(e,"m",(function(){return h})),a.d(e,"g",(function(){return f})),a.d(e,"h",(function(){return g})),a.d(e,"n",(function(){return v}));var n=a("b775");function i(t){return Object(n["a"])({url:"/merchantCategory",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/merchantCategory",method:"POST",data:t})}function r(t){return Object(n["a"])({url:"/merchantCategory/"+t.id,method:"PUT",data:t})}function l(t){return Object(n["a"])({url:"/merchantCategoryStatus/"+t.id,method:"PUT",data:t})}function o(t){return Object(n["a"])({url:"/merchantCategory/"+t.id,method:"DELETE",data:t})}function u(t){return Object(n["a"])({url:"/merchantCategoryParent",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/merchantGoods",method:"get",params:t})}function d(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantGoods/"+e,method:"get",params:t})}function p(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantGoods/"+e,method:"put",data:t})}function m(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantGoods/"+e,method:"delete",data:t})}function h(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantGood/"+e,method:"put",data:t})}function f(t){return Object(n["a"])({url:"/merchantCategoryTypeSub",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/merchantGoodsRecycle",method:"get",params:t})}function v(t){var e=t.id;return delete t.id,Object(n["a"])({url:"/merchantGoodReduction/"+e,method:"PUT",data:t})}},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("28a5"),a("a481"),a("6b54");var n=a("7618");function i(t,e){if(0===arguments.length)return null;var a,i=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(n["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var s={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},r=i.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,e){var a=s[e];return"a"===e?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a="0"+a),a||0)}));return r}}}]);