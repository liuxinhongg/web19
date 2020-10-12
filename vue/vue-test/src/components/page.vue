<template>
  <div>
    <h1>
    <font color="red">我是page组件</font>
    </h1>
    <h2>{{can}}</h2>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        can:""
      }
    },
    mounted(){
      console.log(this.$route);
      this.can=this.$route.query.name;
    }
  }
</script>

<style>
</style>
