<template>
  <div id="main">
    <router-view name="TitleSection"/>
    <router-view name="MenuSection"/>
    <router-view name="LocationSection"/>
    <router-view name="ContactSection"/>
    <router-view /> <!-- default router view; intended for the 404 error-->
    <Footer> </Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  components: {
    Footer
  },
  metaInfo: {
    title: 'Pho Than Brothers – Delicious, homemade Pho',
    description: 'Since 1996, Pho Than Brothers has been offering delicious, invigorating, and affordable Vietnamese cuisine for the everyday individual.',
    titleTemplate: 'Pho Than Brothers'
  }
}
</script>

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
