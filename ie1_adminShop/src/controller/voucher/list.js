/**
 * Created by 卷泡
 * author: JYS <272074691@qq.com>
 * Created DateTime: 2018/6/2 9:50
 * 优惠券管理
 */

layui.define(function (exports) {
    layui.use(['table', 'jquery', 'form', 'admin', 'setter'], function () {
        var table = layui.table;
        var $ = layui.$;
        var form = layui.form;
        var admin = layui.admin;
        var setter = layui.setter;//配置
        var baseUrl = setter.baseUrl;
        var sucMsg = setter.successMsg;//成功提示 数组
        var errorMsg = setter.errorMsg;//错误提示
        var timeOutCode = setter.timeOutCode;//token错误代码
        var timeOutMsg = setter.timeOutMsg;//token错误提示
        var headers = {'Access-Token': layui.data(setter.tableName).access_token};
        var openIndex;//定义弹出层，方便关闭
        var loading;//定义加载效果
        var loading1;//定义加载效果
        var loadType = 1;//layer.open 类型
        var loadShade = {shade: 0.3};//layer.open shade属性
        var successMsg;//成功提示，仅用于判断新增编辑
        var limit = 10;//列表中每页显示数量
        var limits = [10, 20, 30];//自定义列表每页显示数量
        var saa_key = sessionStorage.getItem('saa_key');

        //页面不同属性
        var url = baseUrl + "/shopVouchers";//当前页面主要使用 url
        var key = '?key=' + saa_key;
        var cols = [//加载的表格
            {field: 'user_id', title: '用户名称', width: '20%'},
            {field: 'price', title: '面值', width: '10%'},
            {field: 'full_price', title: '满减条件', width: '10%'},
            {field: 'is_exchange', title: '是否兑换', width: '10%', templet: '#is_exchangeTpl'},
            {field: 'is_used', title: '是否使用', width: '10%', templet: '#is_usedTpl'},
            {field: 'end_time', title: '到期时间', width: '10%'},
            {field: 'type_name', title: '优惠券类型', width: '10%'},
            {field: 'status', title: '状态', width: '10%', templet: '#statusTpl'},
            {field: 'operations', title: '操作', toolbar: '#operations', width: '10%'}
        ];
        var groupData = 0;//是否已加载优惠券类型 是 1 否 0

        //显示新增窗口
        form.on('submit(showAdd)', function () {
            $("#add_edit_form")[0].reset();//表单重置
            $("input[name='add_edit_status']").prop('checked', true);//还原状态设置为true
            form.render();
            $('input[name=add_edit_type]').val('add');//设置类型为新增
            if (!groupData) {
                getGroups(0);
            } else {
                var category = document.getElementById('type_id');
                category.options[0].selected = true;
            }
            openIndex = layer.open({
                type: 1,
                title: '新增',
                content: $('#add_edit_form'),
                shade: 0,
                offset: '100px',
                area: ['400px', 'auto'],
                cancel: function () {
                    $('#add_edit_form').hide();
                }
            })
        })

        //执行添加或编辑
        form.on('submit(sub)', function (obj) {
            var type = $("input[name='add_edit_type']").val();
            var status;
            var subData;
            var ajaxType;
            var ajaxUrl = url;
            if ($('input[name=add_edit_status]:checked').val()) {
                status = 1;
            } else {
                status = 0;
            }
            if (type == 'add') {
                ajaxType = 'post';
                successMsg = sucMsg.post;
            } else if (type == 'edit') {
                ajaxUrl = url + '/' + $("input[name='operationId']").val();
                ajaxType = 'put';
                successMsg = sucMsg.put;
            }
            subData = {
                type_id: $('#type_id').val(),
                status: status,
                key: saa_key
            }
            $.ajax({
                url: ajaxUrl,
                data: subData,
                type: ajaxType,
                async: false,
                headers: headers,
                beforeSend: function () {
                    loading = layer.load(loadType, loadShade);//显示加载图标
                },
                success: function (res) {
                    if (res.status == timeOutCode) {
                        layer.msg(timeOutMsg);
                        admin.exit();
                        return false;
                    }
                    layer.close(loading);//关闭加载图标
                    if (res.status != 200) {
                        if (res.status != 204) {
                            layer.msg(res.message);
                        }
                        return false;
                    }
                    layer.msg(successMsg);
                    layer.close(openIndex);
                    $("#add_edit_form")[0].reset();//表单重置
                    $('#add_edit_form').hide();
                    render.reload();//表格局部刷新
                },
                error: function () {
                    layer.msg(errorMsg);
                    layer.close(loading);
                }
            })
        })

        //表格操作点击事件
        table.on('tool(pageTable)', function (obj) {
            var data = obj.data;
            var layEvent = obj.event;
            $("input[name='operationId']").val(data.cdkey);
            if (layEvent === 'edit') {//修改
                $("input[name='add_edit_type']").val('edit');
                $.ajax({
                    url: url + '/' + data.cdkey + key,
                    type: 'get',
                    async: false,
                    headers: headers,
                    success: function (res) {
                        if (res.status == timeOutCode) {
                            layer.msg(timeOutMsg);
                            admin.exit();
                            return false;
                        }
                        layer.close(loading);//关闭加载图标
                        if (res.status != 200) {
                            if (res.status != 204) {
                                layer.msg(res.message);
                            }
                            return false;
                        }

                        /*diy设置开始*/
                        if (!groupData) {
                            getGroups(res.data.type_id);
                        } else {
                            $("#type_id").val(res.data.type_id);
                        }
                        if (res.data.status == 1) {
                            $("input[name=add_edit_status]").prop('checked', true);
                        } else {
                            $("input[name=add_edit_status]").removeAttr('checked');
                        }
                        /*diy设置结束*/

                        form.render();//设置完值需要刷新表单
                        openIndex = layer.open({
                            type: 1,
                            title: '编辑',
                            content: $('#add_edit_form'),
                            shade: 0,
                            offset: '100px',
                            area: ['400px', 'auto'],
                            cancel: function () {
                                $('#add_edit_form').hide();
                            }
                        })
                    },
                    error: function () {
                        layer.msg(errorMsg);
                        layer.close(loading);//关闭加载图标
                    },
                    beforeSend: function () {
                        loading = layer.load(loadType, loadShade);//显示加载图标
                    }
                })
            } else if (layEvent === 'del') {
                layer.confirm('确定要删除这条数据么?', function (index) {
                    layer.close(index);
                    $.ajax({
                        url: url + '/' + data.cdkey,
                        data: {key: saa_key},
                        type: 'delete',
                        async: false,
                        headers: headers,
                        beforeSend: function () {
                            loading = layer.load(loadType, loadShade);//显示加载图标
                        },
                        success: function (res) {
                            if (res.status == timeOutCode) {
                                layer.msg(timeOutMsg);
                                admin.exit();
                                return false;
                            }
                            layer.close(loading);
                            if (res.status != 200) {
                                if (res.status != 204) {
                                    layer.msg(res.message);
                                }
                                return false;
                            }
                            layer.msg(sucMsg.delete);
                            obj.del();
                        },
                        error: function () {
                            layer.msg(errorMsg);
                            layer.close(loading);
                        }
                    })
                })
            } else {
                layer.msg(errorMsg);
            }
        })

        /*动态添加单选框 优惠券类型*/
        function getGroups(group_id) {
            $.ajax({
                url: baseUrl + '/shopVouTypes' + key + '&status=1',
                type: "get",
                headers: headers,
                beforeSend: function () {
                    loading = layer.load(loadType, loadShade);//显示加载图标
                },
                success: function (res) {
                    if (res.status == timeOutCode) {
                        layer.msg(timeOutMsg);
                        admin.exit();
                        return false;
                    }
                    layer.close(loading);
                    if (res.status !== 200) {
                        if (res.status != 204) {
                            layer.msg(res.message);
                        }
                        return false;
                    }
                    for (var a = 0; a < res.data.length; a++) {
                        var name = res.data[a].name;
                        var id = res.data[a].id;
                        if (group_id) {
                            var selected = '';
                            if (group_id == id) {
                                selected = ' selected ';
                            }
                            $('select[name=type_id]').append("<option value=" + id + selected + ">" + name + "</option>");
                        } else {
                            $('select[name=type_id]').append("<option value=" + id + ">" + name + "</option>");
                        }
                        form.render();
                    }
                    groupData = 1;
                },
                error: function () {
                    layer.msg(errorMsg);
                    layer.close(loading);
                }
            })
        }

        //加载列表
        var render = table.render({
            elem: '#pageTable',
            url: url + key,
            page: true, //开启分页
            limit: limit,
            limits: limits,
            loading: true,
            cols: [cols],
            response: {
                statusName: 'status', //数据状态的字段名称，默认：code
                statusCode: "200", //成功的状态码，默认：0
                dataName: 'data' //数据列表的字段名称，默认：data
            },
            headers: headers,
            done: function (res) {
                if (res.status == timeOutCode) {
                    layer.msg(timeOutMsg);
                    admin.exit();
                    return false;
                }
                if (res.status != 200) {
                    if (res.status != 204) {
                        layer.msg(res.message);
                    }
                    return false;
                }
            }
        });

        //搜索
        form.on('submit(find)', function (data) {
            var searchName = data.field.searchName;
            render.reload({
                where: {
                    searchName: searchName
                },
                page: {
                    curr: 1
                }
            })
        })

        //修改状态
        form.on('switch(status)', function (obj) {
            var statusCode;
            if (obj.elem.checked) {/*将禁用改为启用*/
                statusCode = 1
            } else if (!obj.elem.checked) {//将启用改为禁用
                statusCode = 0
            }
            $.ajax({
                url: url + "/" + this.value,
                type: 'put',
                async: false,
                data: {
                    status: statusCode,
                    key: saa_key
                },
                headers: headers,
                success: function (res) {
                    if (res.status == timeOutCode) {
                        layer.msg(timeOutMsg);
                        admin.exit();
                        return false;
                    }
                    layer.close(loading);//关闭加载图标
                    if (res.status != 200) {
                        if (res.status != 204) {
                            layer.msg(res.message);
                        }
                        return false;
                    }
                    layer.msg(sucMsg.put);
                    layer.close(openIndex);
                },
                error: function () {
                    layer.msg(errorMsg);
                    layer.close(loading);
                },
                beforeSend: function () {
                    loading = layer.load(loadType, loadShade);//显示加载图标
                }
            })
        });
    })
    exports('voucher/list', {})
});
