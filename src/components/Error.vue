<template>
  <div id="error">
    <a v-bind:href='home'> <img src="@/assets/logo.png"> </a>
    <h1> 404 - NOT FOUND. </h1>
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

<style scoped>
  h1 {
    color: red;
  }
</style>
