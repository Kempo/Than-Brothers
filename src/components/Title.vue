<template>
  <div id="start">
    <header id="top">
      <div id="nav">
      <a class="nav-item" href="#menu_section"> menu </a>
      <a class="nav-item" href="#location_section"> locations </a>
      <a class="nav-item" href="/"> contact </a>
      </div>
    </header>

    <h1 id="title">{{ title }}</h1>
    <h2 id="desc">{{ desc }}</h2>
    <!-- <img src="@/assets/background.jpg"> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Pho Than Brothers',
      desc: 'Affordable, Authentic, and Delicious.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@media screen and (max-width: 320px) {
  #title {
    font-size: 2em;
  }
  #desc {
    font-size: 1em;
  }
}
@media screen and (max-width: 469px) { // breakpoint at 469 or smaller
  #nav {
    @include responsive-font(2vw, 1.4em, 1.99em, 18px);
  }
  #top {
    text-align: center;
  }
  #desc {
    @include center-align(-200%);
  }
}

@media screen and (min-width: 470px) { // breakpoint at 470 or higher
  #nav {
    @include responsive-font(3vw, 2em, 4em, 18px);
  }
  #top {
    text-align: left;
  }
  #desc {
    @include center-align(-150%);
  }
}

#title {
  font-size: 4em;
  font-weight: $bold-default;
  @include center-align(-130%);
}

#desc {
  font-size: 2em;
  font-weight: $thin-default;
  font-style: italic;
}

#start {
  height: 100vh;
  background-image: url('../assets/background.jpg');
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: ($bgwidth + 400) ($bgheight + 400);
  max-width:100%; // gets rid of extra horizontal scrollbar
  color: white;
}

#top {
  background-color: white;
  opacity: 1;
  color: black;
  padding: 20px;
}

#nav {
  font-weight: $bold-default;
}

.nav-item {
  margin-right: 10px;
}

</style>
