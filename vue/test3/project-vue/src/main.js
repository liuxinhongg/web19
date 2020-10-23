import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setAxios from "./setAxios"
setAxios()
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(axios, VueAxios);

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
