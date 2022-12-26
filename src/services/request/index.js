import axios from 'axios';

import { BASE_URL, TIMEOUT } from './config'
class HYRequest {
    // constructor的作用是在后面new的时候传递过来两个参数 
    constructor(baseURl, timeout) {
        // 在类组件中this代表实例对象这里往你创建的实例对象添加一个aios的create方法
        this.instance = axios.create({
            baseURL: baseURl,
            timeout: timeout
        })
        // 这种也是一种发请求的方式 url的地址 time是超时时间，这种方式更加的灵活
        // 我们可以根据接收到传递的不同数据来发不同的请求

        //我们需要使用一下响应拦截器 这样我们可以在响应之前做点什么
        /*
        // 添加请求拦截器
            axios.interceptors.request.use(function (config) {
                // 在发送请求之前做些什么
                return config;
            }, function (error) {
                // 对请求错误做些什么
                return Promise.reject(error);
            });

            // 添加响应拦截器
            axios.interceptors.response.use(function (response) {
                // 2xx 范围内的状态码都会触发该函数。
                // 对响应数据做点什么
                return response;
            }, function (error) {
                // 超出 2xx 范围的状态码都会触发该函数。
                // 对响应错误做点什么
                return Promise.reject(error);
            }); 
         */
        this.instance.interceptors.response.use(
            response => {
                // 我们将响应的数据返回出去
                return response.data
            },
            error => {
                return error
            })
    }
    // 在该类中我们写上一些方法后期直接调用就行
    request(config) {
        return this.instance.request(config)
    }
    get(config) {
        return this.request({ ...config, method: "get" })
    }
    post(config) {
        return this.request({ ...config, method: "post" })
    }

}

export default new HYRequest(BASE_URL, TIMEOUT)