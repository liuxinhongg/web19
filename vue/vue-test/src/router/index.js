import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Frist from '@/components/first'
import page from '@/components/page'

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
    }
  ]
})
