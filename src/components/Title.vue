<template>
  <div id="start">
    <header id="top">
      <div id="nav">
      <a class="nav-item" href="#menu_section"> menu </a>
      <a class="nav-item" href="#location_section"> locations </a>
      <a class="nav-item" href="#contact_section"> contact </a>
      </div>
    </header>

    <div id="title">
      <span id="t1"> {{ t1 }} </span>
      <span id="t2"> {{ t2 }} </span>
    </div>
    <h2 id="desc">{{ desc }}</h2>
    <!-- <img src="@/assets/background.jpg"> -->

    <div class="down-arrow"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      t1: 'Pho',
      t2: 'Than Brothers',
      desc: 'An invigorating and satisfying experience.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@media screen and (max-width: 331px) {
  #title {
    font-size: 2em;
  }
  #desc {
    font-size: 1em;
  }
}
@media screen and (min-width: 332px) {
  #title {
    @include responsive-font(6vw, 3em, 5em, 18px);
  }
  #desc {
    font-size: 1.5em;
  }
}
@media screen and (max-width: 584px) { // breakpoint at 469 or smaller
  #nav {
    @include responsive-font(2vw, 1.2em, 1.99em, 18px);
  }
  #top {
    text-align: center;
  }
  #desc {
    @include center-align(-120%);
  }
}

@media screen and (min-width: 585px) { // breakpoint at 470 or higher
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
  font-weight: $bold-default;
  text-transform: uppercase;
  @include center-align(-130%);
}

#t1 {
  //color: $blue; // blue
}
#t2 {
  //color: $red; // red
}

#desc {
  font-weight: $thin-default;
  text-transform: uppercase;
  color: white;
}

#start {
  height: 100vh;
  background-image: url('../assets/background.jpg');
  background-color: white;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  //background-size: ($bgwidth) ($bgheight);
  background-size: cover;
  width: 100%;
  max-width:100%; // gets rid of extra horizontal scrollbar
  color: #A0DCFF;
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

a:hover {
  color: $red;
}

.down-arrow {
  bottom: 30px;
  position: absolute;
}
</style>
