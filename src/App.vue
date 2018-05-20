<template>
  <div id="main">
    <!--<a v-bind:href='home'> <img src="./assets/logo.png"> </a> -->
    <router-view name="title"> </router-view> <!-- utilises the title and test router views -->
    <router-view/> <!-- default router view; intended for the 404 error-->
  </div>
</template>

<style lang="scss">
$default-color: #000000;
#main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $default-color;
}
</style>
