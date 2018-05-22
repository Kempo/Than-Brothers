<template>
  <div class="start">
    <h1 id="title">{{ title }}</h1>
    <h2>{{ desc }}</h2>
    <!-- <img src="@/assets/background.jpg"> -->
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
  background-image: url('../assets/background.jpg');
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width:100%; // gets rid of extra horizontal scrollbar
  color: white;
}
</style>
