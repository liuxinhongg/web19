<template>
  <div>
    <el-button type="success" @click="add()">新增</el-button>
    <el-dialog title="登录" :visible.sync="dialogFormVisible">
      <el-form :model="loginform">
        <el-form-item label="用户名：" label-width="120">
          <el-input v-model="loginform.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" label-width="120">
          <el-input v-model="loginform.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="login()">确 定</el-button>
      </div>
    </el-dialog>

    <el-table :data="sortdata" style="width: 80%; margin: 50px auto">
      <!-- <el-table-column prop="coupon_end_time" label="日期" width="180"> </el-table-column> -->
      <el-table-column label="图标" width="180">
        <template slot-scope="scope">
          <div>
            <img :src="scope.row.pict_url" alt="" class="icon" />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <div>
            <h3 style="color: red">{{ scope.row.category_name }}</h3>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="nick" label="店铺名字"> </el-table-column>
      <el-table-column prop="provcity" label="省份"> </el-table-column>

      <el-table-column prop="coupon_info" label="优惠卷"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="20"
      layout="total, prev, pager, next"
      :total="totalnum"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible:false,
      loginform:{
          username:'',
          password:''
      },
      aa: "",
      sortdata: [],
      currentPage: 1,
      totalnum: 0,
    };
  },
  mounted() {
    // console.log(this.$route.query.info);
    this.aa = this.$route.query.info;
    if (this.aa) {
      this.getdata();
    }
  },
  methods: {
    add(){
        this.dialogFormVisible=true;
    },
    login(){
        this.$http.post("/nodeapi/users/login",{
            username:this.loginform.username,
            password:this.loginform.password,
        }).then(res=>{
            console.log(res);
            localStorage.setItem("userToken",res.data.token);
            if(res.data.state===0){
                this.$message.success("登录成功~")
                this.dialogFormVisible=false;
            }
        })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      if (this.currentPage) {
        this.getdata();
      }
    },
    getdata() {
      this.$http
        .get("/api/w/website/findGoodsList", {
          params: {
            platId: "d0a500ecf8ab41aa9ffe8e18ac6419e1",
            info: this.aa,
            pageNo: this.currentPage,
          },
        })
        .then((res) => {
          console.log(res);
          this.sortdata =
            res.data.data.tbk_dg_material_optional_response.result_list.map_data;
          this.totalnum =
            res.data.data.tbk_dg_material_optional_response.total_results;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 50px;
}
</style>