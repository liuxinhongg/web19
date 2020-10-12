<template>
  <div id="app">
    <img src="./assets/logo.png">
   <!-- <a href="#/">hello组件</a>
    <a href="#/first">first组件</a> -->
      <!-- <a href="/">hello组件</a>
      <a href="/first">first组件</a> -->
      <router-link to="/" exact>hello组件</router-link>
      <router-link to="/first" active-class="mystyle" tag="h3">first组件</router-link>
      <router-link to="/page">page组件</router-link>
       <!-- <router-view/> 用来显示页面的内容 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: red;
}
.mystyle{
  font-weight: 700;
  color: blue;
}
.nav{
  font-weight: bold;
  background-color: #1B6D85;
}
</style>
