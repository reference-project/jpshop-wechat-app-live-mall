/**
 * Created by 卷泡
 * author: JYS <272074691@qq.com>
 * Created DateTime: 应该创建于 2019/8/1
 * js model
 */

layui.define(function (exports) {
    /**
     * use 首参简单解释
     *
     * jquery 必须 很多地方那个用到，必须定义
     * setter 必须 获取config 配置，但不必定义
     * admin 必须 若未用到则不必定义
     * table 不必须 若表格渲染，若无表格操作点击事件，可不必定义
     * form 不必须 表单操作，一般用于页面有新增和编辑
     * laydate 不必须 日期选择器
     */
    layui.use(['jquery', 'setter', 'admin', 'table', 'form'], function () {
        var table = layui.table;
        var $ = layui.$;
        var form = layui.form;
        var setter = layui.setter;//配置
        var sucMsg = setter.successMsg;//成功提示 数组
        //以上定义的变量使用小驼峰命名法，与自定义变量区分，主要为 1、layui自带，2、config定义

        //以下为页面使用自定义变量，遵循下划线方式命名变量
        var open_index;//定义弹出层，方便关闭
        var saa_key = sessionStorage.getItem('saa_key');
        var operation_id;//数据表格操作需要用到单条 id
        var arr = {};//全局ajax请求参数
        var ajax_type;//ajax 请求类型，一般用于判断新增或编辑
        var add_edit_form = $('#add_edit_form');//常用的表单

        var group_data = 0;//是否已加载分组 是 1 否 0

        //加载图片库及判断图片库js是否已加载
        $('.introduce_images').load('src/views/images.html');
        if (!isIncludeJS("images.js")) {
            $.getScript("src/lib/images.js");
        }
        //实例化百度编辑器
        UE.delEditor('editor');//先删除之前实例的对象
        var ue = UE.getEditor('editor');//添加编辑器 //参数 id 可随意更改为当前期望的值
        ue.commands['uploadimage'] = {
            execCommand: function () {
                sessionStorage.setItem('images_common_type_uEditor', '1');//设置类型为百度编辑器
                sessionStorage.setItem('images_common_div_info', '<img width="100%">');
                images_open_index_fun();
            }
        };
        form.render();
        /*diy设置开始*/

        //页面不同属性
        var ajax_method = 'merchantAppHelp';//新ajax需要的参数 method
        var cols = [//加载的表格
            {field: 'category_name', title: '分组名称'},
            {field: 'title', title: '标题'},
            {field: 'status', title: '状态', templet: '#statusTpl'},
            {field: 'sort', title: '排序'},
            {field: 'operations', title: '操作', toolbar: '#operations'}
        ];
        /*diy设置结束*/

        //显示新增窗口
        form.on('submit(showAdd)', function () {
            $("#add_edit_form")[0].reset();//表单重置  必须
            $("input[name='status']").prop('checked', true);//还原状态设置为true
            /*diy设置开始*/
            form.render();//还原后需要重置表单
            ajax_type = 'post';//设置类型为新增
            //下拉请求接口必须，未请求过，则请求接口并保存，已请求过，获取保存的信息，减少加载时间
            if (!group_data) {
                getGroups(0);
            } else {
                var category = document.getElementById('category_id');
                category.options[0].selected = true;
            }
            /*diy设置结束*/

            open_index = layer.open({
                type: 1,
                title: '新增',
                content: add_edit_form,
                shade: 0,
                offset: '100px',
                area: ['650px', 'auto'],
                cancel: function () {
                    add_edit_form.hide();
                }
            })
        });

        //执行添加或编辑
        form.on('submit(sub)', function () {
            if (ue.getContent() === '') {
                layer.msg('百度富文本编辑器内容不能为空', {icon: 1, time: 2000});
                return;
            }
            var status = 0;
            if ($('input[name=status]:checked').val()) {
                status = 1;
            }
            var success_msg;
            var method = ajax_method;
            if (ajax_type === 'post') {
                success_msg = sucMsg.post;
            } else if (ajax_type === 'put') {
                method += '/' + operation_id;
                success_msg = sucMsg.put;
            }
            arr = {
                method: method,
                type: ajax_type,
                data: {
                    category_id: $('select[name=category_id]').val(),
                    title: $('input[name=title]').val(),
                    content: ue.getContent(),
                    type: $('input[name=applicationType]:checked').val(),
                    status: status,
                    sort: $('input[name=sort]').val(),
                }
            };
            var res = getAjaxReturnKey(arr);
            if (res) {
                layer.msg(success_msg, {icon: 1, time: 2000});
                layer.close(open_index);
                add_edit_form[0].reset();//表单重置
                add_edit_form.hide();
                render.reload();//表格局部刷新
            }
        });

        //表格操作点击事件
        table.on('tool(pageTable)', function (obj) {
            var data = obj.data;
            var layEvent = obj.event;
            operation_id = data.id;
            if (layEvent === 'edit') {//修改
                ajax_type = 'put';
                arr = {
                    method: ajax_method + '/' + data.id,
                    type: 'get'
                };
                var res = getAjaxReturnKey(arr);
                if (res && res.data) {
                    /*diy设置开始*/
                    if (!group_data) {
                        getGroups(res.data.category_id);
                    } else {
                        $("#category_id").val(res.data.category_id);
                    }
                    $("input[name=title]").val(res.data.title);
                    ue.ready(function () {
                        //设置编辑器的内容
                        setTimeout(function () {
                            ue.setContent(data.content, false);
                        }, 600);
                    });
                    if (res.data.status == 1) {
                        $("input[name=status]").prop('checked', true);
                    } else {
                        $("input[name=status]").removeAttr('checked');
                    }
                    $("input[name=sort]").val(res.data.sort);
                    /*diy设置结束*/

                    form.render();//设置完值需要刷新表单
                    open_index = layer.open({
                        type: 1,
                        title: '编辑',
                        content: add_edit_form,
                        shade: 0,
                        offset: '100px',
                        area: ['650px', 'auto'],
                        cancel: function () {
                            add_edit_form.hide();
                        }
                    })
                }
            } else if (layEvent === 'del') {
                layer.confirm('确定要删除这条数据么?', function (index) {
                    layer.close(index);
                    arr = {
                        method: ajax_method + '/' + data.id,
                        type: 'delete',
                    };
                    if (getAjaxReturnKey(arr)) {
                        layer.msg(sucMsg.delete, {icon: 1, time: 2000});
                        obj.del();
                    }
                })
            } else {
                layer.msg(setter.errorMsg, {icon: 1, time: 2000});
            }
        });

        /*动态添加单选框 应用分组*/
        function getGroups(group_id) {
            arr = {
                method: 'merchantAppHelpCategory',
                type: 'get'
            };
            var res = getAjaxReturnKey(arr);
            if (res && res.data) {
                var name;
                var id;
                for (var a = 0; a < res.data.length; a++) {
                    name = res.data[a].name;
                    id = res.data[a].id;
                    if (group_id) {
                        var selected = '';
                        if (group_id === id) {
                            selected = ' selected ';
                        }
                        $('select[name=category_id]').append("<option value=" + id + selected + ">" + name + "</option>");
                    } else {
                        $('select[name=category_id]').append("<option value=" + id + ">" + name + "</option>");
                    }
                    form.render();
                }
                group_data = 1;
            }
        }

        //以下基本不动
        //默认加载列表
        arr = {
            name: 'render',//可操作的 render 对象名称
            elem: '#pageTable',//需要加载的 table 表格对应的 id
            method: ajax_method + '?key=' + saa_key,//请求的 api 接口方法和可能携带的参数 key
            cols: [cols]//加载的表格字段
        };
        var render = getTableRender(arr);//变量名对应 arr 中的 name

        //搜索
        form.on('submit(find)', function (data) {//查询
            render.reload({
                where: {searchName: data.field.searchName},
                page: {curr: 1}
            });
        });

        //修改状态
        form.on('switch(status)', function (obj) {
            arr = {
                method: ajax_method + '/' + this.value,
                type: 'put',
                data: {status: obj.elem.checked ? 1 : 0}
            };
            if (getAjaxReturnKey(arr)) {
                layer.msg(sucMsg.put, {icon: 1, time: 2000});
                layer.close(open_index);
            }
        });

    });
    exports('help/list', {})
});
