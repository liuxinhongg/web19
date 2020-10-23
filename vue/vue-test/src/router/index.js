import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Frist from '@/components/first'
import page from '@/components/page'
import register from '@/components/register'
import count from '@/components/count'
import work from '@/components/work'
import main from '@/views/main'
import sort from '@/views/sort'
const User = {
    template: ` <div><h1>我是父组件{{$route.params.id}}</h1><router-view/></div> `
}
const profile = {
    template: ` <div><h2> <font color="red">我是profile子组件</font> </h2> </div> `
}
const posts = {
    template: ` <div><h2> <font color="yellowgreen">我是posts子组件</font> </h2> </div> `
}
const NotFount = {
    template: `<div><h1>404您访问的页面不存在</h1></div>`
}
Vue.use(Router)
const router = new Router({
        // mode: "history",
        linkExactActiveClass: "nav",
        routes: [{
                path: '/',
                // component:HelloWorld
                redirect: "/main"
                    // redirect: "/main"
            },
            {
                path: "/main",
                name: "main",
                component: main
            },
            {
                path: "/first/:name",
                name: "first",
                component: Frist
            },
            {
                path: "/page",
                name: "page",
                component: page
            },
            {
                path: "/count",
                name: "count",
                component: count
            },
            {
                path: "/zhuce",
                name: "zhuce",
                component: register
            },
            {
                path: "/sort",
                name: "sort",
                component: sort
            },

            {
                path: "/work",
                name: "work",
                component: work
            },
            {
                path: "/user/:id",
                name: "user",
                component: User,
                children: [{
                    path: "",
                    component: profile
                }, {
                    // path:"posts",
                    path: "/posts",
                    component: posts
                }]
            },
            {
                path: "*",
                // component:NotFount,
                redirect: (to) => {
                    // console.log(to);
                    if (to.path === '/aaa') {
                        return '/page'
                    } else if (to.path === '/bbb') {
                        return "/first/abc"
                    } else {
                        return "/"
                    }
                }
            }
        ]
    })
    // 导航守卫 /user/login
    // router.beforeEach  注册突发全局的前置守卫，判断用户是否登录
    /*
        router.beforeEach((to, from, next) => {
        // console.log(to)
        if (to.path === "/login") {
            next()
        } else {
            let token = localStorage.getItem("userToken");
            if (token === null || token === "") {
                // next({path:"/login"})
                next("/login")
            } else {
                next()
            }
        }
    })*/
export default router;