<template>
  <div class="home">
    <el-form  label-width="80px" :model="formLo">
      <el-form-item label="用户名：">
        <el-input v-model="formLo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLo.password"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="search()">查询</el-button>
    </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
import Cookie from "js-cookie"
export default {
  data() {
    return {
      formLo:{
        username:'',
        password:'',
      }
    }
  },
  methods:{
    search(){
      this.$axios.post("/nodeapi/page/login",this.formLo).then(res=>{
        console.log(res)
        if(res.data.code===0){
          Cookie.set("token",res.data.token)
          this.$store.commit("setToken",res.data.token);
          // 设置登录状态为1；
          this.$store.commit("changIsSignIn",1);
          this.$message.success("登录成功");
          this.$router.push("/page")
          
        }
      })
    }
  }
}
</script>
<style >
  .home{
    width: 400px;
    margin: 100px auto;
  }
</style>
