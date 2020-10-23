<template>
    <div>
        <div class="topbox">
            <h3>我的项目</h3>
            <div v-if="isLogin===0" class="rightInfo">
                <span>登录</span>
                <span>注册</span>
            </div>
            <div v-if="isLogin===1" class="rightInfo">
               <p @click="change(1)"> lxh </p>
                <router-link to="/login">退出登录</router-link>
            </div>
        </div>
        <div v-if="step==1">
            <el-form :model="userinfoFrom" class="demo-form-inline" label-width="120px">
                <el-form-item label="审批人">
                    <el-input v-model="userinfoFrom.nick" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="用户头像">
                    <el-upload
                    class="avatar-uploader"
                    action="/nodeapi/page/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    name="head_img"
                    :before-upload="beforeAvatarUpload">
                    <img :src="imageUrl!=null ? imageUrl : imgDefault" class="avatar">
                    </el-upload>
                    <div slot="tip" class="el-upload__tip">请上传2M以内的图片，比例事1:1</div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="btn()">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import store from "@/store"
    export default {
        data(){
            return {
                step:0,
                userinfoFrom:{
                    nick:''
                },
                imageUrl:null,
                imgDefault:""
            }
        },
        computed:{
            isLogin(){
                return store.state.isSignIn
            }
        },
        created(){
            this.getuserinfo()
        },
        methods:{
            change(num){
                console.log(num)
                this.step=num
            },
            handleAvatarSuccess(res, file) {
                console.log(res)
                // this.imageUrl = URL.createObjectURL(file.raw);
                this.imageUrl = res.data;
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
                    console.log(res);
                    if (res.data.code===0) {
                        this.userinfoFrom.nick=res.data.data.nick;
                        if(res.data.data.head_img===''||res.data.data.head_img===null){
                            this.imageUrl=null
                        }else{
                            this.imageUrl=res.data.data.head_img
                        }
                    }
                })
            },
            btn(){
                this.$axios.post("/nodeapi/page/updateuser",{
                        nick:this.userinfoFrom.nick,
                        username:"gaoyuhang",
                        head_img:this.imageUrl
                }).then(res=>{
                    console.log(res);
                    if(res.data.code===0){
                        this.$message.success("更新成功~");
                        setTimeout(function(){
                        location.reload()

                        },1000)
                    }
                })
            }
        }
    }
</script>

<style>
.topbox{
    width: 80%;
    height: 100px;
    margin: 50px auto;
    background: red;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.topbox h3{
    line-height: 100px;
}
.rightInfo{
    width: 100px;
    height: 100px;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>