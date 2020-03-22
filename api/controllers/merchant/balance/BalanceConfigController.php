<?php

namespace app\controllers\merchant\balance;

use app\models\merchant\balance\BalanceConfigModel;
use app\models\merchant\system\OperationRecordModel;
use app\models\shop\BalanceAccessModel;
use app\models\shop\UserModel;
use yii;
use yii\db\Exception;
use yii\web\MerchantController;

/**
 * 余额充值配置
 * @author  wmy
 * Class BalanceConfigController
 * @package app\controllers\merchant\balance
 */
class BalanceConfigController extends MerchantController {

    public $enableCsrfValidation = false; //禁用CSRF令牌验证，可以在基类中设置

    /**
     * 查询列表
     * @return array
     */
    public function actionList() {
        if (yii::$app->request->isGet) {
            $request = yii::$app->request; //获取 request 对象
            $params = $request->get(); //获取地址栏参数
            $must = ['key'];
            $rs = $this->checkInput($must, $params);
            if ($rs != false) {
                return $rs;
            }
            $model = new BalanceConfigModel();
            $params['merchant_id'] = yii::$app->session['uid'];
            $array = $model->do_select($params);
            return $array;
        } else {
            return result(500, "请求方式错误");
        }
    }

    /**
     * 查询单条
     * @return array
     */
    public function actionOne() {
        if (yii::$app->request->isGet) {
            $request = yii::$app->request; //获取 request 对象
            $params = $request->get(); //获取地址栏参数
            $must = ['key'];
            $rs = $this->checkInput($must, $params);
            if ($rs != false) {
                return $rs;
            }
            $model = new BalanceConfigModel();
            $params['merchant_id'] = yii::$app->session['uid'];
            $array = $model->one($params);
            return $array;
        } else {
            return result(500, "请求方式错误");
        }
    }

    /**
     * 新增
     * @return array
     */
    public function actionAdd() {
        if (yii::$app->request->isPost) {
            $request = yii::$app->request; //获取 request 对象
            $params = $request->bodyParams; //获取body传参
            $model = new BalanceConfigModel();
            //设置类目 参数
            $must = ['money','key','status'];
            $rs = $this->checkInput($must, $params);
            if ($rs != false) {
                return $rs;
            }
            if(isset($params['money']) && !is_numeric($params['money'])){
                return result(500, "充值金额只能是数字");
            }
            if(isset($params['remain_money']) && !is_numeric($params['remain_money'])){
                return result(500, "赠送金额只能是数字");
            }
            $params['merchant_id'] = yii::$app->session['uid'];
            $array = $model->add($params);
            if ($array['status'] == 200){
                //添加操作记录
                $operationRecordModel = new OperationRecordModel();
                $operationRecordData['key'] = $params['key'];
                $operationRecordData['merchant_id'] = yii::$app->session['uid'];
                $operationRecordData['operation_type'] = '新增';
                $operationRecordData['operation_id'] = $array['data'];
                $operationRecordData['module_name'] = '充值';
                $operationRecordModel->do_add($operationRecordData);
            }
            return $array;
        } else {
            return result(500, "请求方式错误");
        }
    }

    /**
     * 更新
     * @param $id
     * @return array
     */
    public function actionUpdate($id) {
        if (yii::$app->request->isPut) {
            $request = yii::$app->request; //获取 request 对象
            $params = $request->bodyParams; //获取body传参
            $model = new BalanceConfigModel();
            $where['id'] = $id;
            if(!$id){
                return result(400, "缺少参数 id");
            }
            $must = ['key'];
            $rs = $this->checkInput($must, $params);
            if ($rs != false) {
                return $rs;
            }
            if(isset($params['money']) && !is_numeric($params['money'])){
                return result(500, "充值金额只能是数字");
            }
            if(isset($params['remain_money']) && !is_numeric($params['remain_money'])){
                return result(500, "赠送金额只能是数字");
            }
            $where['key'] = $params['key'];
            unset($params['key']);
            $where['merchant_id'] = yii::$app->session['uid'];
            $array = $model->do_update($where,$params);
            if ($array['status'] == 200){
                //添加操作记录
                $operationRecordModel = new OperationRecordModel();
                $operationRecordData['key'] = $where['key'];
                $operationRecordData['merchant_id'] = yii::$app->session['uid'];
                $operationRecordData['operation_type'] = '更新';
                $operationRecordData['operation_id'] = $id;
                $operationRecordData['module_name'] = '充值';
                $operationRecordModel->do_add($operationRecordData);
            }
            return $array;
        } else {
            return result(500, "请求方式错误");
        }
    }

    /**
     * 删除
     * @param $id
     * @return array
     */
    public function actionDelete($id) {
        if (yii::$app->request->isDelete) {
            $request = yii::$app->request; //获取 request 对象
            $params = $request->bodyParams; //获取body传参
            $model = new BalanceConfigModel();
            $params['id'] = $id;
            $must = ['key'];
            $rs = $this->checkInput($must, $params);
            if ($rs != false) {
               return $rs;
            }
            $params['`key`'] = $params['key'];
            unset($params['key']);

            $params['merchant_id'] = yii::$app->session['uid'];
            if (!isset($params['id'])) {
                return result(400, "缺少参数 id");
            } else {
                $array = $model->do_delete($params);
            }
            if ($array['status'] == 200){
                //添加操作记录
                $operationRecordModel = new OperationRecordModel();
                $operationRecordData['key'] = $params['`key`'];
                $operationRecordData['merchant_id'] = yii::$app->session['uid'];
                $operationRecordData['operation_type'] = '删除';
                $operationRecordData['operation_id'] = $id;
                $operationRecordData['module_name'] = '充值';
                $operationRecordModel->do_add($operationRecordData);
            }
            return $array;
        } else {
            return result(500, "请求方式错误");
        }
    }

    /**
     * 余额充值订单列表
     * @return array
     */
    public function actionOrderList() {
        if (yii::$app->request->isGet) {
            $request = yii::$app->request; //获取 request 对象
            $params = $request->get(); //获取地址栏参数
            $must = ['key'];
            $rs = $this->checkInput($must, $params);
            if ($rs != false) {
                return $rs;
            }
            $model = new BalanceAccessModel();
            $params['`key`'] = $params['key'];
            $params['merchant_id'] = yii::$app->session['uid'];
            if(isset($params['key'])){
                unset($params['key']);
            }
            if(isset($params['nickname']) && !empty($params['nickname'])){
                $userModel = new UserModel();
                $userinfo = $userModel->find(['nickname' => $params['nickname'],'`key`'=>$params['`key`']]);
                if($userinfo['status'] == 200){
                    $params['user_id'] = $userinfo['data']['id'];
                }
            }
            unset($params['nickname']);
            $array = $model->balance_order($params);
            return $array;
        } else {
            return result(500, "请求方式错误");
        }
    }

}
