/** layuiAdmin.pro-v1.0.0-beta7 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(function(a){var e="http://192.168.188.12";layui.use(["jquery"],function(){var a=layui.$;a.ajax({url:e+"/info",type:"get",async:!1,headers:{"Access-Token":layui.data("layuiAdmin").access_token},success:function(a){console.log(a)}})}),a("layout",{})});