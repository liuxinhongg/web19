<template>
  <div>
    <h-top/>
    <div class="content"></div>
    <bott></bott>
  </div>
</template>

<script>
  import hTop from "./page"
  import bott from "./work"
  export default {
    components:{
      hTop,
      bott
    }
  }
</script>

<style>
  .content{
    width: 90%;
    height: 500px;
    background-color: darkgoldenrod;
    margin: 100px auto;
  }
</style>
