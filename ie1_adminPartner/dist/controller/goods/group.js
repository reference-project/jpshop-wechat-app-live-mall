/** layuiAdmin.pro-v1.0.0-beta7 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(function(e){layui.use(["table","jquery","form","admin","setter"],function(){function e(e){l.ajax({url:c+"/merchantCategoryParent",type:"get",headers:g,beforeSend:function(){t=layer.load(_,h)},success:function(a){if(a.status==f)return layer.msg(p),o.exit(),!1;if(layer.close(t),200!==a.status)return layer.msg(a.message),!1;for(var s=0;s<a.data.length;s++){var r=a.data[s].name,n=a.data[s].id;if(e){var i="";e==n&&(i=" selected "),l("select[name=parent_id]").append("<option value="+n+i+">"+r+"</option>")}else l("select[name=parent_id]").append("<option value="+n+">"+r+"</option>");d.render()}N=1},error:function(){layer.msg(y),layer.close(t)}})}var a,t,s,r,n,i=layui.table,l=layui.$,d=layui.form,o=layui.admin,u=layui.setter,c=u.baseUrl,m=u.successMsg,y=u.errorMsg,f=u.timeOutCode,p=u.timeOutMsg,g={"Access-Token":layui.data(u.tableName).access_token},_=1,h={shade:.3},v=10,x=[10,20,30],b=sessionStorage.getItem("saa_key"),k="";l("#addImgPut").change(function(){var e=this.files[0];if(window.FileReader){var a=new FileReader;a.readAsDataURL(e),a.onloadend=function(e){k=e.target.result,l("#image").attr("src",e.target.result)}}e=null});var w=c+"/merchantCategory",j="?key="+b,S=[{field:"pic_url",title:"应用图片",templet:"#imgTpl",width:"10%"},{field:"name",title:"分组名称",width:"15%"},{field:"detail_info",title:"详细说明",width:"20%"},{field:"detail_info",title:"商品数",width:"15%"},{field:"create_time",title:"创建时间",width:"20%"},{field:"operations",title:"操作",toolbar:"#operations",width:"20%"}],N=0;d.on("submit(showAdd)",function(){if(l("#add_edit_form")[0].reset(),l("input[name='add_edit_status']").prop("checked",!0),n="post",N){var t=document.getElementById("parent_id");t.options[0].selected=!0}else e(0);a=layer.open({type:1,title:"新增",content:l("#add_edit_form"),shade:0,offset:"100px",area:["400px","auto"]})}),d.on("submit(sub)",function(){var e,i=0,d=w;l("input[name=add_edit_status]:checked").val()&&(i=1),"post"==n?s=m.post:"put"==n&&(d+="/"+r,s=m.put),e={parent_id:l("select[name=parent_id]").val(),name:l("input[name=name]").val(),pic_url:k,detail_info:l("textarea[name=detail_info]").val(),status:i,key:b},l.ajax({url:d,data:e,type:n,async:!1,headers:g,beforeSend:function(){t=layer.load(_,h)},success:function(e){return e.status==f?(layer.msg(p),o.exit(),!1):(layer.close(t),200!=e.status?(layer.msg(e.message),!1):(layer.msg(s),layer.close(a),l("#add_edit_form")[0].reset(),void T.reload()))},error:function(){layer.msg(y),layer.close(t)}})}),i.on("tool(pageTable)",function(s){var i=s.data,u=s.event;r=i.id,"edit"===u?(n="put",l.ajax({url:w+"/"+i.id+j,type:"get",async:!1,headers:g,success:function(s){return s.status==f?(layer.msg(p),o.exit(),!1):(layer.close(t),200!=s.status?(layer.msg(s.message),!1):(N?l("#parent_id").val(s.data.parent_id):e(s.data.parent_id),l("input[name=name]").val(s.data.name),l("#image").attr("src",s.data.pic_url),l("textarea[name=detail_info]").val(s.data.detail_info),1==s.data.status?l("input[name=add_edit_status]").prop("checked",!0):l("input[name=add_edit_status]").removeAttr("checked"),d.render(),void(a=layer.open({type:1,title:"编辑",content:l("#add_edit_form"),shade:0,offset:"100px",area:["400px","auto"]}))))},error:function(){layer.msg(y),layer.close(t)},beforeSend:function(){t=layer.load(_,h)}})):"del"===u?layer.confirm("确定要删除这条数据么?",function(e){layer.close(e),l.ajax({url:w+"/"+i.id,data:{key:b},type:"delete",async:!1,headers:g,beforeSend:function(){t=layer.load(_,h)},success:function(e){return e.status==f?(layer.msg(p),o.exit(),!1):(layer.close(t),200!=e.status?(layer.msg(e.message),!1):(layer.msg(m["delete"]),void s.del()))},error:function(){layer.msg(y),layer.close(t)}})}):layer.msg(y)});var T=i.render({elem:"#pageTable",url:w+j,page:!0,limit:v,limits:x,loading:!0,cols:[S],response:{statusName:"status",statusCode:"200",dataName:"data"},headers:g,done:function(e){return e.status==f?(layer.msg(p),o.exit(),!1):200!=e.status?(layer.msg(e.message),!1):void 0}});d.on("submit(find)",function(e){T.reload({where:{searchName:e.field.searchName},page:{curr:1}})}),d.on("switch(statusTpl)",function(e){var s=e.elem.checked?1:0;l.ajax({url:w+"/"+this.value,type:"put",async:!1,data:{status:s,key:b},headers:g,success:function(e){return e.status==f?(layer.msg(p),o.exit(),!1):(layer.close(t),200!=e.status?(layer.msg(e.message),!1):(layer.msg(m.put),void layer.close(a)))},error:function(){layer.msg(y),layer.close(t)},beforeSend:function(){t=layer.load(_,h)}})})}),e("goods/group",{})});