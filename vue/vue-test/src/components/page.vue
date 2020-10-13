<template>
  <div>
	  <div class="top_header">
      <img src="../assets/logo.png" width="80px"/>
      <input type="button" value="登录" class="btn" @click="change()"/>
      <ul class="navTab">
      	<li v-for="(item,index) in datalist" :key="index">{{item.title}}</li>
      </ul>
		  <!-- <h1>
				<font color="red">我是page组件</font>
			</h1> -->
	  </div>
    <h2>{{can}}</h2>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        can:"",
        msg:"我是子组件里面的内容",
         datalist:[
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
    // props:{
    //   datalist:{
    //     type:Array,
    //     required:true
    //   }
    // },
    mounted(){
      console.log(this.$route);
      this.can=this.$route.query.name;
    },
    methods:{
      change(){
        console.log(123);
        this.$emit("msgchange",this.msg)
      }
    }
  }
</script>

<style lang="scss">
  $yanse:#f00;
  @mixin hunhe {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
	.top_header{
		@include hunhe;
		background: $yanse;
    height: 100px;
    .btn{
      width: 80px;
      height: 50px;
    }
    .navTab{
      list-style: none;
      display: flex;
      justify-content: flex-start;
      li{
        width: 120px;
        height: 80px;
        border-radius: 5px;
        margin-left: 20px;
        text-align: center;
        line-height: 80px;
        background-color: yellowgreen;
        font-weight: bold;
        &:hover{
          background-color: hotpink;
        }
      }
    }
	}

</style>
