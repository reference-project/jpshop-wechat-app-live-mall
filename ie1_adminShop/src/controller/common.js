/**

 @Name：layuiAdmin 公共业务
 @Author：贤心
 @Site：http://www.layui.com/admin/
 @License：LPPL

 */

layui.define(function (exports) {
    var $ = layui.$
        , layer = layui.layer
        , laytpl = layui.laytpl
        , setter = layui.setter
        , view = layui.view
        , admin = layui.admin

    //公共业务的逻辑处理可以写在此处，切换任何页面都会执行
    //……


    //退出
    admin.events.logout = function () {
        //执行退出接口
        admin.req({
            url: './start/json/user/logout.js'
            , type: 'get'
            , data: {}
            , done: function () { //这里要说明一下：done 是只有 response 的 code 正常才会执行。而 succese 则是只要 http 为 200 就会执行
                var is_admin_login = localStorage.getItem('is_admin_login');
                localStorage.removeItem(setter.tableName);
                localStorage.removeItem('name');
                localStorage.removeItem('saa_key');
                //获取网站域名和协议
                var href = document.location.protocol + '//' + window.location.host + '/ie1_adminMerchant/#/';
                if (is_admin_login == '0') {
                    localStorage.removeItem('is_admin_login');
                    location.href = href + 'user/appLogin';
                    return;
                }
                localStorage.removeItem('is_admin_login');
                //清空本地记录的 token，并跳转到登入页
                location.href = href + 'user/login';
            }
        });
    };


    //对外暴露的接口
    exports('common', {});
});