<template>
  <div>
	  <div class="top_header">
      <img src="../assets/logo.png" width="80px"/>
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
      }
    },
    props:{
      datalist:{
        type:Array,
        required:true
      }
    },
    mounted(){
      // console.log(this.$route);
      this.can=this.$route.query.name;
    },
    methods:{
      
    }
  }
</script>

<style >
  /* $yanse:#f00;
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
	} */

</style>
