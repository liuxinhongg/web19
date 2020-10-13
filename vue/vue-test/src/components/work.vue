<template>
  <div>
    <div class="bottom">
      <input type="button" value="登录" class="btn" @click="change()"/>
      <button @click="jump()">我是work组件</button>
      <h1>我是底部内容</h1>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:"我是子组件里面的内容",
      }
    },
    methods:{
      jump(){
        // this.$router.push("/page?aa=xiaoming")
        this.$router.push({name:"page",params:{aa:"xiaoming"}})
      },
      change(){
        // console.log(123);
        this.$emit("msgchange",this.msg)
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
