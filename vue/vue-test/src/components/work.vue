<template>
  <div>
    <div class="bottom">
      <button @click="jump()">我是work组件</button>
      <h1>我是底部内容</h1>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      jump(){
        // this.$router.push("/page?aa=xiaoming")
        this.$router.push({name:"page",params:{aa:"xiaoming"}})
      }
    }
  }
</script>

<style scoped>
  .bottom{
    width: 100%;
    height: 200px;
    background-color: green;
    text-align: center;
  }
</style>
