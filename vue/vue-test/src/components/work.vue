<template>
  <div>
    <button @click="jump()">我是work组件</button>
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

<style>
</style>
