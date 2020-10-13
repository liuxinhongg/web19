<template>
  <div>
    <el-table :data="sortdata" style="width: 80%; margin: 50px auto">
      <!-- <el-table-column prop="coupon_end_time" label="日期" width="180"> </el-table-column> -->
      <el-table-column label="图标" width="180">
          <template  slot-scope="scope">
              <div>
                  <img :src="scope.row.pict_url" alt="" class="icon">
              </div>
          </template>
      </el-table-column>
      <el-table-column label="姓名" width="180"> 
          <template slot-scope="scope">
              <div>
                  <h3 style="color:red">{{scope.row.category_name}}</h3>
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
      :total="totalnum">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aa: "",
      sortdata:[],
      currentPage:1,
      totalnum:0
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
    handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val;
        if(this.currentPage){
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
          this.sortdata=res.data.data.tbk_dg_material_optional_response.result_list.map_data
          this.totalnum=res.data.data.tbk_dg_material_optional_response.total_results
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon{
    width: 50px;
}
</style>