<template>
  <div class="start">
    <h1>{{ title }}</h1>
    <h2>{{ desc }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Introduction', // doesn't have to be Introduction
  data () {
    return {
      title: 'Pho Than Brothers',
      desc: 'By Aaron Chen'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
