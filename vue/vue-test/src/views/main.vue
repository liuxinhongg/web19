<template>
  <div>
    <!-- 父组件向子组件传参是【属性传参props】 -->
    <!-- 子组件向父组件传参是【事件传值this.$emit("参数名",对应的值)】 -->
    <h-top :datalist="toplist"/>
    <div class="content">
      <p class="op">我是p标签</p>
      <i class="el-icon-s-goods" style="font-size:40px;color:red"></i>
      <i class="el-icon-warning"></i>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success" plain round>成功按钮</el-button>
      <el-button type="info" circle>信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <p ref="count">{{msg}}</p>
      <h1>{{canshu}}</h1>
      <!-- <img :src="aa" alt="">
      <img :src="imgurl" alt=""> -->

      <el-row>
        <el-col :span="4" v-for="(o, index) in datalist" :key="index" :offset="1">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="o.icon" class="image">
            <div style="padding: 14px;">
              <span>{{o.name}}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="btn(o.name)">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <bott @msgchange="getmsg($event)"></bott>
  </div>
</template>

<script>
  import hTop from "../components/page"
  import bott from "../components/work"
  export default {
    components:{
      hTop,
      bott
    },
    mounted(){
      // console.log(this.$refs.count.style.color="red");
      this.$http.get("/api/w/website/findGoodsTypeList").then(res=>{
        console.log(res);
        this.datalist=res.data.data
      })
    },
    data(){
      return {
        datalist:[],
        msg:"天气不错",
        // aa:require("../assets/t1.jpg"),
        // aa: require("../../static/images/t2.jpg"),
        // imgurl:require("../../static/images/t1.jpg"),
        imgurl:require("../assets/t1.jpg"),
        canshu:"",
        toplist:[
          {
            title:"导航一",
            id:1
          },
          {
            title:"导航二",
            id:2
          },
          {
            title:"导航三",
            id:3
          },
          {
            title:"导航四",
            id:4
          },
          {
            title:"导航五",
            id:5
          },
        ]
      }
    },
    methods:{
      getmsg(el){
        console.log(el);
        this.canshu=el;
      },
      btn(val){
        console.log(val);
        this.$router.push({ path:'/sort', query:{info:val} })
        // this.$router.push('/sort?info='+val)
      }
    }
  }
</script>

<style lang="scss">
  .content{
    width: 90%;
    overflow: hidden;
    background-color: darkgoldenrod;
    margin: 100px auto;
  }
  .op{
    cursor: no-drop;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
