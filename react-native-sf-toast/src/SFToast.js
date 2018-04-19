/**
 * Created by SF on 2018/4/17.
 */
import React, {Component} from 'react';
import Toast from 'antd-mobile/lib/toast';

export default class SFToast extends Component {

    /**
     * @param title 自定义title
     * @param mask 是否背景遮挡
     * @param duration 时间间隔
     * @param callback 方法回调
     * */

    //提示框 不会消失
    static showSuccess(title, mask) {
        Toast.success(title, 0, () => {
        }, mask);
    }

    static showFail(title, mask) {
        Toast.fail(title, 0, () => {
        }, mask);
    }

    static showText(title, mask) {
        Toast.info(title, 0, () => {
        }, mask)
    }

    static showLoading(title, mask) {
        Toast.loading(title, 0, () => {
        }, mask);
    }

    static showOffline(title, mask) {
        Toast.offline(title, 0, () => {
        }, mask);
    }

    //提示框 ns后消失
    static showSucWithDuration(title, mask, duration, callback) {
        Toast.success(title, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    static showFailWithDuration(title, mask, duration, callback) {
        Toast.fail(title, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    static showTextWithDuration(title, mask, duration, callback) {
        Toast.info(title, duration ? duration : 1.5, callback ? callback : () => {
        }, mask)
    }

    static showLoadingWithDuration(title, mask, duration, callback) {
        Toast.loading(title, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    static showOfflineWithDuration(title, mask, duration, callback) {
        Toast.offline(title, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    // 自定义component
    static showSucWithComponent(component, mask, duration, callback) {
        Toast.success(component, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    static showFailWithComponent(component, mask, duration, callback) {
        Toast.fail(component, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    static showTextWithComponent(component, mask, duration, callback) {
        Toast.info(component, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    static showLoadingWithComponent(component, mask, duration, callback) {
        Toast.loading(component, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    static showOfflineWithComponent(component, mask, duration, callback) {
        Toast.offline(component, duration ? duration : 1.5, callback ? callback : () => {
        }, mask);
    }

    static hide() {
        Toast.hide();
    }

}




