<template>
  <div>
    <h1>我是Frist组件</h1>
    <h1><font color="red">{{canshu}}</font> </h1>
    <button @click="go()">我要去page组件</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        canshu:'',
        aa:'zhangsan'
      }
    },
    mounted() {
      console.log(this.$route.params.name);
      this.canshu=this.$route.params.name
    },
    methods:{
      go(){
        this.$router.push("/page?name="+this.aa)
      }
    }
  }
</script>

<style>
</style>
