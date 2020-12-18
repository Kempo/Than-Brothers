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
    title: 'The Best Pho in Seattle - Pho Than Brothers',
    description: 'Pho Than Brothers is a family-run establishment that serves the best Pho in the Pacific Northwest since 1996. We offer a variety of homemade Pho Bo, along with delicious Pho Chay and Pho Ga.',
    titleTemplate: 'The Best Pho in Seattle - Pho Than Brothers'
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
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
