<template>
  <div class="home">
    <el-form  label-width="80px" :model="formRe">
      <el-form-item label="用户名：">
        <el-input v-model="formRe.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formRe.password"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="formRe.age"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="formRe.nick"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="search()">查询</el-button>
    </el-form-item>
    </el-form>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      formRe:{
        username:'',
        password:'',
        age:'',
        nick:''
      }
    }
  },
  methods:{
    search(){
      this.$axios.post("/nodeapi/page/register",this.formRe).then(res=>{
        console.log(res)
        if(res.data.code===0){
          this.$message.success("注册成功");
          this.$router.push("/about")
        }
      })
    }
  }
}
</script>
