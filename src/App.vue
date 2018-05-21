<template>
  <div id="main">
    <router-view name="TitleSection"> </router-view> <!-- utilises the title and test router views -->
    <router-view name="TestSection"> </router-view>
    <router-view/> <!-- default router view; intended for the 404 error-->
  </div>
</template>

<style lang="scss">
#main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $default-color;
  height: 100%;
  width: 100%;
  font-family: $default-font;
  font-weight: $thin-default;
}
body {
  margin: 0;
}
</style>
