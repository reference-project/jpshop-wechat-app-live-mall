(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38564824"],{a7b3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-yly-container"},[a("el-tabs",{on:{"tab-click":t.getTemplate},model:{value:t.activeTabName,callback:function(e){t.activeTabName=e},expression:"activeTabName"}},[a("el-tab-pane",{attrs:{label:"同步模板",name:"order"}},[a("div",{staticStyle:{margin:"20px auto","text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.syncTemplate}},[t._v("同步模板")])],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"群消息推送",name:"message"}},[a("div",{staticStyle:{margin:"20px auto","text-align":"center"}},[a("el-button",{attrs:{type:"primary"}},[t._v("+ 创建推送")])],1)])],1)],1)},n=[],c=a("b7be"),i={name:"marketing-apptemplate",components:{},data:function(){return{activeTabName:"order",templateData:{}}},mounted:function(){this.getTemplate()},methods:{getTemplate:function(){var t=this;Object(c["t"])({key:this.$store.state.app.activeApp.saa_key,purpose:this.activeTabName}).then((function(e){200===e.status?t.templateData=e.data:204===e.status?t.templateData={}:t.$message.error(e.message)}))},syncTemplate:function(){var t=this;Object(c["R"])({key:this.$store.state.app.activeApp.saa_key}).then((function(e){200===e.status?t.$message.success("同步成功！"):t.$message.error(e.message)}))}}},r=i,l=(a("e50a"),a("2877")),p=Object(l["a"])(r,s,n,!1,null,"5227faee",null);e["default"]=p.exports},c352:function(t,e,a){},e50a:function(t,e,a){"use strict";var s=a("c352"),n=a.n(s);n.a}}]);