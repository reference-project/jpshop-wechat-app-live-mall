/**
 * Created by 卷泡
 * author: wangjianren
 * Created DateTime: 2019/6/11
 * js 打印分组字段管理
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
        var baseUrl = setter.baseUrl;//访问地址
        var token = localStorage.getItem('juanpao');
        //以上定义的变量使用小驼峰命名法，与自定义变量区分，主要为 1、layui自带，2、config定义
        //以下为页面使用自定义变量，遵循下划线方式命名变量
        var open_index;//定义弹出层，方便关闭
        var operation_id;//数据表格操作需要用到单条 id
        var arr = {};//全局ajax请求参数
        /*diy设置开始*/
        form.render();
        //页面不同属性
        var ajax_method = 'adminPrintingtemp';//新ajax需要的参数 method
        var cols = [
            {field: 'id', title: 'ID'},
            {field: 'name', title: '模板名称'},
            {field: 'english_name', title: '英文名称'},
            {field: 'format_create_time', title: '创建时间'},
            {field: 'status', title: '状态', templet: '#statusTpl'},
            {field: 'operations', title: '操作', toolbar: '#operations'}
        ];
        /*diy设置结束*/

        //以下基本不动
        //默认加载列表
        arr = {
            name: 'render',//可操作的 render 对象名称
            elem: '#pageTable',//需要加载的 table 表格对应的 id
            method: ajax_method,//请求的 api 接口方法
            cols: [cols],//加载的表格字段
        };
        var render = getTableRender(arr);//变量名对应 arr 中的 name
        //搜索
        form.on('submit(find)', function (data) {//查询
            render.reload({
                where: {searchName: data.field.searchName},
                page: {curr: 1}
            });
        });
		
		//新增
		form.on('submit(showAdd)',function(){
			sessionStorage.removeItem('printTemp')
			location.hash = '/set/printing/printing_add'
		})
		
		table.on('tool(pageTable)',function(obj){
			var data = obj.data
			var layEvent = obj.event
			operation_id = data.id
			if (layEvent === 'edit'){
				sessionStorage.setItem('printTemp',operation_id)
				location.hash = '/set/printing/printing_add'
			}else if (layEvent === 'del') {
                layer.confirm('确定要删除这条数据么?', function (index) {
                    layer.close(index)
                    if (getAjaxReturn({ method: ajax_method + '/' + data.id, type: 'delete'})) {
                        layer.msg(sucMsg.delete)
                        obj.del()
                    }
                })
            } else {
                layer.msg(setter.errorMsg);
            }
		})
		
        //修改状态
        form.on('switch(status)', function (obj) {
            arr = {
                method: ajax_method + '/' + this.value,
                type: 'put',
                data: {status: obj.elem.checked ? 1 : 0},
            };
            if (getAjaxReturn(arr)) {
                layer.msg(sucMsg.put);
                layer.close(open_index);
            }
        });
    });
    exports('set/printingTemp', {})
});
