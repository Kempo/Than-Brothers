<template>
  <div class="start">
    <h1>{{ title }}</h1>
    <h2>{{ desc }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Pho Than Brothers',
      desc: 'Lorem ipsum dolor sit amet, cum cu verear scaevola.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$default-font: 'Source Sans Pro', sans-serif;

h1 {
  font-weight: 700;
  margin: 0;
}

h2 {
  font-weight: 300;
}

.start {
  font-family: $default-font;
}
</style>
