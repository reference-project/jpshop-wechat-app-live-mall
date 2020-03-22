<?php

/**
 * This file is part of Swoft.
 *
 * @link https://swoft.org
 * @document https://doc.swoft.org
 * @contact group@swoft.org
 * @license https://github.com/swoft-cloud/swoft/blob/master/LICENSE
 */

namespace app\models\shop;

use app\models\common\CommonModel;
use app\models\core\TableModel;
use yii\db\Exception;

/**
 * Class BalanceAccessModel
 */
class GroupOrderModel extends CommonModel {

    /**
     * shop_recharge_balance_access
     * @return string
     */
    public static function tableName() {
        return 'shop_order_group';
    }

    /**
     * 列表
     * @param $params
     * @return array
     */
    public function do_select($params) {
        //数据库操作
        $params['orderby'] = "id desc";
        $params['count'] = true;
        $res = $this->get_list($params);
        if (empty($res)) {
            return result(204, '查询失败');
        } else {
            return ['status'=>200, 'message'=>'请求成功','data' => $res['data'], 'count' => $res['count']];
        }
    }
    /**
     * 新增
     * @param $params
     * @return array
     */
    public function add($params) {
        $data = array();
        $res = $this->modify($params, $data);
        if (empty($res)) {
            return result(204, '新增失败');
        } else {
            return result(200, '新增成功',$res);
        }
    }


    /**
     * @param $where
     * @param $data
     * @return array
     */
    public function do_update($where, $data) {

        $res = $this->modify($where, $data);
        if ($res == false) {
            return ['status'=>500, 'message'=>'更新失败'];
        } else {
           return ['status'=>200, 'message'=>'请求成功'];
        }
    }


    /**
     * 查询单条数据
     * @param $params
     * @return array
     */
    public function one($params) {

        $res = $this->get_info($params);

        if (empty($res)) {
            return result(204, '查询失败');
        } else {
            return result(200, '请求成功',$res);
        }
    }

    /**
     * 删除
     * @param $where
     * @return array
     */
    public function do_delete($where) {
        $res = $this->soft_delete($where);
        if ($res == false) {
            return result(500, '删除失败');
        } else {
            return result(200, '请求成功');
        }
    }

    public function balance_order($params) {
        $table = new TableModel();
        $params['delete_time is null'] = null;
        $params['orderby'] = "id desc ";
        $params['table'] = self::tableName();
        try {
            $res = $table->tableList($params);
            $app = $res['app'];
        } catch (Exception $ex) {
            return result(500, $ex->getMessage());
        }
        //返回数据 时间格式重置
        $userModel = new UserModel();
        for ($i = 0; $i < count($app); $i++) {
            $app[$i]['create_time'] = date('Y-m-d H:i:s', $app[$i]['create_time']);
            if ($app[$i]['update_time'] != "") {
                $app[$i]['update_time'] = date('Y-m-d H:i:s', $app[$i]['update_time']);
            }
            $userinfo = $userModel->find(['id' => $app[$i]['user_id']]);
            $app[$i]['nickname'] = '';
            if($userinfo['status'] == 200){
                $app[$i]['nickname'] = $userinfo['data']['nickname'];
            }
        }
        if (empty($app)) {
            return result(204, '查询失败');
        } else {
            return ['status' => 200, 'message' => '请求成功', 'data' => $app, 'count' => $res['count']];
        }
    }
}
