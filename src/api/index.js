/*
 * @Description: 
 * @Author: zyl
 * @Date: 2019-08-27 09:40:39
 * @LastEditors: 
 * @LastModified: 
 */
import { Message } from 'element-ui';

// 引用axios
var axios = require('axios')
var qs = require('qs')
var _axios = axios.create({
    timeout: 20000,
    withCredentials: true,
    baseURL: '/'
});
// TODO:设置请求头登录token 
// _axios.defaults.headers.token = Token();

function apiAxios(method, url, params, success, failure, passtype) {
    _axios({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? (passtype == 'payload' ? params : qs.stringify(params)) : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
        })
        .then(function(res) {
            if (res) {
                if (success) {
                    success(res.data)
                }
            } else {
                if (failure) {
                    failure(res.data)
                } else {
                    console.log('error: ' + JSON.stringify(res.data));
                }
            }
        })
        .catch(function(err) {
            console.log(url.indexOf('delay'))
            if (err.response) {
                switch (err.response.status) {
                    case 401:
                        Message.error("用户名或密码不正确!");
                        break;
                    case 404:
                        Message.error("请求的资源不存在!");
                        break;
                    case 500:
                        // if(url=='process.env.BZ_API+"_api/release"'){
                        //     Message.error("传参错误");
                        //     break;
                        // }else{
                        // Message.error("添加失败，该并行网处于被占用状态!");
                        // break;
                        // }
                        Message.error({
                            type: "success",
                            message: err.response.data
                        });
                        break;
                }
                return Promise.reject(err);
            }
            // 判断请求异常信息中是否含有超时timeout字符串
            if (err.message.includes('timeout') && url.indexOf('delay') == -1) {
                Message.error("请求超时,请检查网络!");
                // reject这个错误信息
                return Promise.reject(err);
            }
            return Promise.reject(err);
        })
}
// 
// 返回在vue模板中的调用接口
export default {

    get: function(url, params, success, failure, passtype) {
        return apiAxios('GET', url + '?access_token=' + sessionStorage.getItem('access_token'), params, success, failure, passtype)
    },
    post: function(url, params, success, failure, passtype) {
        return apiAxios('POST', url + '?access_token=' + sessionStorage.getItem('access_token'), params, success, failure, passtype)
    },
    put: function(url, params, success, failure, passtype) {
        return apiAxios('PUT', url + '?access_token=' + sessionStorage.getItem('access_token'), params, success, failure, passtype)
    },
    delete: function(url, params, success, failure, passtype) {
        return apiAxios('DELETE', url + '?access_token=' + sessionStorage.getItem('access_token'), params, success, failure, passtype)
    },
}