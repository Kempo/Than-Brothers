<template>
  <div class="start">
    <h1 id="title">{{ title }}</h1>
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
@mixin center-align {
  margin: 0;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
#title {
  font-weight: $bold-default;
  @include center-align;
}

h2 {
  font-weight: $thin-default;
  @include center-align;
}

.start {
  height: 100vh;
  width: 100vw;
}
</style>
