<template>
  <div id="error">
    <h1> 404 - NOT FOUND.</h1>
    <h1> <a v-bind:href='home'> HOME </a> </h1>
  </div>
</template>

<script>
export default {
  name: 'Error-page',
  data () {
    return {
      home: '/' // link to return back to first website
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: red;
    font-style: normal;
    @include center-align;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: green;
  }
  #error {
    width: 100vw;
    height: 100vh;
  }
</style>
