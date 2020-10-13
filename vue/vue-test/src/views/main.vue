<template>
  <div>
    <!-- 父组件向子组件传参是【属性传参props】 -->
    <!-- 子组件向父组件传参是【事件传值this.$emit("参数名",对应的值)】 -->
    <!-- <h-top :datalist="toplist"/> -->
    <h-top @msgchange="getmsg($event)"/>
    <div class="content">
      <h1>{{canshu}}</h1>
    </div>
    <bott></bott>
  </div>
</template>

<script>
  import hTop from "../components/page"
  import bott from "../components/work"
  export default {
    components:{
      hTop,
      bott
    },
    data(){
      return {
        canshu:"",
        toplist:[
          {
            title:"导航一",
            id:1
          },
          {
            title:"导航二",
            id:2
          },
          {
            title:"导航三",
            id:3
          },
          {
            title:"导航四",
            id:4
          },
          {
            title:"导航五",
            id:5
          },
        ]
      }
    },
    methods:{
      getmsg(el){
        console.log(el);
        this.canshu=el;
      }
    }
  }
</script>

<style>
  .content{
    width: 90%;
    height: 500px;
    background-color: darkgoldenrod;
    margin: 100px auto;
  }
</style>
