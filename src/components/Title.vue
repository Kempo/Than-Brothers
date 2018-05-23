<template>
  <div class="start">
    <header id="top">
      <div id="nav">
      <a id="nav-item" href="#menu_section"> menu </a>
      <a id="nav-item" href="/"> locations </a>
      <a id="nav-item" href="/"> contact </a>
      </div>
    </header>

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
      desc: 'Lorem ipsum dolor sit amet, cum cu verear.'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#title {
  font-size: 4em;
  font-weight: $bold-default;
  @include center-align;
}

h2 {
  font-size: 3em;
  font-weight: $thin-default;
  font-style: italic;
  @include center-align;
}

.start {
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/background.jpg');
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: ($bgwidth + 400) ($bgheight + 400);
  max-width:100%; // gets rid of extra horizontal scrollbar
  color: white;
}

#top {
  text-align: left;
  background-color: white;
  opacity: 1;
  color: black;
  padding: 20px;
}

#nav-item {
  font-size: 2em;
  font-weight: 700;
}

</style>
