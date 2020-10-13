<template>
    <div>
        <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
                <el-input v-model="registerForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('registerForm')">立即创建</el-button>
                <el-button @click="resetForm('registerForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                registerForm: {
                   username:'',
                   password:'',
                   phone:'',
                   email:''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                    ],
                    passsword: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '输入是十一位的手机号码', trigger: 'blur' },
                        { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$http.post("/nodeapi/users/register",this.registerForm).then(res=>{
                        console.log(res)
                        if(res.data.state===0){
                            this.$message.success("注册成功~")
                            this.$router.push("/login");
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="scss" scoped>
.demo-ruleForm{
    width: 400px;
    margin: 100px auto;
}
</style>