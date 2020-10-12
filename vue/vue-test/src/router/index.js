import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Frist from '@/components/first'
import page from '@/components/page'
import work from '@/components/work'
const User={
  template:` <div><h1>我是父组件{{$route.params.id}}</h1><router-view/></div> `
}
const profile={
  template:` <div><h2> <font color="red">我是profile子组件</font> </h2> </div> `
}
const posts={
  template:` <div><h2> <font color="yellowgreen">我是posts子组件</font> </h2> </div> `
}
const NotFount={
  template:`<div><h1>404您访问的页面不存在</h1></div>`
}
Vue.use(Router)

export default new Router({
  mode:"history",
  linkExactActiveClass:"nav",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/first/:name",
      name:"first",
      component:Frist
    },
    {
      path:"/page",
      name:"page",
      component:page
    },
    {
      path:"/work",
      name:"work",
      component:work
    },
    {
      path:"/user/:id",
      name:"user",
      component:User,
      children:[
        {
          path:"",
          component:profile
        },{
          // path:"posts",
          path:"/posts",
          component:posts
        }
      ]
    },
    {
      path:"*",
      // component:NotFount,
      redirect:(to)=>{
        console.log(to);
        if(to.path==='/aaa'){
          return '/page'
        }else if(to.path==='/bbb'){
          return "/first/abc"
        }else{
          return "/"
        }
      }
     }
  ]
})
