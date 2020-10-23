import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register'
import login from '../views/login'
import page from '../views/page'
import echarts from '../views/echarts'
import UserInfo from "@/components/userinfo"
import Cookie from "js-cookie"
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'register',
        component: register
    },
    {
        path: "/userinfo",
        name: "userinfo",
        component: UserInfo
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: echarts
    },
    {
        path: "/page",
        name: "page",
        component: page,
        meta: {
            requireAuth: true //true表示为这个页面添加登录权限
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    store.commit('setToken', Cookie.get('token'))
    if (store.state.token) {
        store.commit('changIsSignIn', 1) //设置登录态
    }
    if (to.meta.requireAuth) {
        if (store.state.token) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        next()
    }
})
export default router