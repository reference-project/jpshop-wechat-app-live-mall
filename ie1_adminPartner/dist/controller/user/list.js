/** layuiAdmin.pro-v1.0.0-beta7 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(function(e){layui.use(["table","jquery","form","admin","setter"],function(){var e,t,a,i=layui.table,l=layui.$,s=layui.form,r=layui.admin,d=layui.setter,n=d.baseUrl,o=d.successMsg,u=d.errorMsg,c=d.timeOutCode,m=d.timeOutMsg,y={"Access-Token":layui.data(d.tableName).access_token},p=1,f={shade:.3},g=10,h=[10,20,30],_=sessionStorage.getItem("saa_key");s.render();var v=n+"/merchantShopUsers",w="?key="+_,b=[{field:"avatar",title:"用户头像",templet:"#imgTpl",width:"6%"},{field:"nickname",title:"用户名称",width:"7%"},{field:"phone",title:"手机号",width:"10%"},{field:"sex",title:"用户性别",width:"6%",templet:"#sexTpl"},{field:"cart_num",title:"用户购物车数量",width:"10%"},{field:"pay_num",title:"用户购买次数",width:"10%"},{field:"is_vip",title:"客户身份",width:"6%",templet:"#isVipTpl"},{field:"type",title:"来源方式",width:"10%",templet:"#typeTpl"},{field:"pay_price",title:"购买金额",width:"10%",templet:"#priceTpl"},{field:"create_time",title:"用户注册时间",width:"10%"},{field:"status",title:"状态",width:"5%",templet:"#statusTpl"},{field:"operations",title:"操作",toolbar:"#operations",width:"10%"}];i.on("tool(pageTable)",function(e){var i=e.data,s=e.event;a=i.id,"edit"===s||("del"===s?layer.confirm("确定要删除这条数据么?",function(a){layer.close(a),l.ajax({url:v+"/"+i.id,data:{key:_},type:"delete",async:!1,headers:y,beforeSend:function(){t=layer.load(p,f)},success:function(a){return a.status==c?(layer.msg(m),r.exit(),!1):(layer.close(t),200!=a.status?(layer.msg(a.message),!1):(layer.msg(o["delete"]),void e.del()))},error:function(){layer.msg(u),layer.close(t)}})}):layer.msg(u))});var T=i.render({elem:"#pageTable",url:v+w,page:!0,limit:g,limits:h,loading:!0,cols:[b],response:{statusName:"status",statusCode:"200",dataName:"data"},headers:y,done:function(e){return e.status==c?(layer.msg(m),r.exit(),!1):200!=e.status?(layer.msg(e.message),!1):void 0}});s.on("submit(find)",function(e){T.reload({where:{searchName:e.field.searchName,cart_num:e.field.cart_num,pay_num:e.field.pay_num,is_vip:e.field.is_vip,type:e.field.type,pay_price:e.field.pay_price},page:{curr:1}})}),s.on("switch(statusTpl)",function(a){console.log(this);var i=a.elem.checked?1:0;l.ajax({url:v+"/"+this.value+w,type:"put",async:!1,data:{status:i,key:_},headers:y,success:function(a){return a.status==c?(layer.msg(m),r.exit(),!1):(layer.close(t),200!=a.status?(layer.msg(a.message),!1):(layer.msg(o.put),void layer.close(e)))},error:function(){layer.msg(u),layer.close(t)},beforeSend:function(){t=layer.load(p,f)}})})}),e("user/list",{})});