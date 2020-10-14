// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.use(Axios, VueAxios)
Vue.use(ElementUI);
/* eslint-disable no-new */
// 添加请求拦截，需要请求加token[后台返回的]
// Axios.interceptors.request.use(
//     config => {
//         if (localStorage.getItem("tokenK")) {
//             // config.headers.Anuthtoken = localStorage.getItem("tokenK")
//         }
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )
new Vue({
    el: '#app',
    router,
    store, //必须加上
    components: { App },
    template: '<App/>'
})