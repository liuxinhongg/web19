<template>
  <div>
    <el-table :data="sortdata" style="width: 80%; margin: 50px auto">
      <el-table-column prop="coupon_end_time" label="日期" width="180"> </el-table-column>
      <el-table-column prop="category_name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="nick" label="店铺名字"> </el-table-column>
      <el-table-column prop="coupon_info" label="优惠卷"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aa: "",
      sortdata:[]
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
    getdata() {
      this.$http
        .get("/api/w/website/findGoodsList", {
          params: {
            platId: "d0a500ecf8ab41aa9ffe8e18ac6419e1",
            info: this.aa,
            pageNo: 1,
          },
        })
        .then((res) => {
          console.log(res);
          this.sortdata=res.data.data.tbk_dg_material_optional_response.result_list.map_data
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>