<template>
  <div id="main">
    <router-view name="TitleSection"/>
    <router-view name="MenuSection"/>
    <router-view name="LocationSection"/>
    <router-view name="ContactSection"/>
    <router-view/> <!-- default router view; intended for the 404 error-->
  </div>
</template>

<style lang="scss">
#main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  font-family: $default-font;
  font-weight: $thin-default;
  overflow-x: hidden;
}
body {
  margin: 0;
  font-size: 20px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
