<template>
  <div id="main">
    <a v-bind:href='home'> <img src="./assets/logo.png"> </a>
    <router-view name="title"> </router-view> <!-- utilises the title and test router views -->
    <router-view name="test"> </router-view>
    <router-view/> <!-- default router view; intended for the 404 error-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      home: '/' // link to return back to first website
    }
  }
}
</script>

<style>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
