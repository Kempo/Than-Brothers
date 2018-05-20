<template>
  <div id="main">
    <!--<a v-bind:href='home'> <img src="./assets/logo.png"> </a> -->
    <router-view name="title"> </router-view> <!-- utilises the title and test router views -->
    <router-view name="test"> </router-view>
    <router-view/> <!-- default router view; intended for the 404 error-->
  </div>
</template>

<style lang="scss">
$default-color: #000000;
$default-font: 'Source Sans Pro', sans-serif;

#main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $default-color;
  height: 100vh;
  width: 100vw;
  font-family: $default-font;
  font-weight: 300;
}
body {
  margin: 0;
}
</style>
