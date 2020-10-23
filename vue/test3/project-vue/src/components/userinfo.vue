<template>
  <div>
    <el-form :model="userinfoFrom" class="demo-form-inline" label-width="120px">
      <el-form-item label="审批人">
        <el-input v-model="userinfoFrom.username" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="用户头像">
        <el-upload
          class="avatar-uploader"
          action
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
        </el-upload>
        <div slot="tip" class="el-upload__tip">请上传2M以内的图片，比例事1:1</div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btn()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfoFrom:{
        username:''
      },
      imageUrl:require("../assets/logo.png")
    }
  },
  created(){
    // this.getuserinfo()
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    getuserinfo(){
      this.$axios.get("/nodeapi/page/userinfo",{
        params:{
          username:'gaoyuhang'
        }
      }).then(res=>{
        console.log(res)
      })
    },
    btn(){
      console.log(111)
      
    }
  }
}
</script>

<style>
.demo-form-inline{
  width: 300px;
  margin: 100px auto;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
