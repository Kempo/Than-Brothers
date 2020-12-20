<template>
  <div id="error">
    <h1> 404 - NOT FOUND.</h1>
    <h1> <a href="/"> HOME </a> </h1>
  </div>
</template>

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
