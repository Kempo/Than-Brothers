<template>
  <div id="start">
    <header id="top">
      <div id="nav">
        <a class="nav-item" v-on:click="emitGoogleMapsEvent('Menu')" href="#menu_section"> menu </a>
        <a class="nav-item" v-on:click="emitGoogleMapsEvent('Location')" href="#location_section"> locations </a>
        <a class="nav-item" v-on:click="emitGoogleMapsEvent('Contact')" href="#contact_section"> contact </a>
      </div>
    </header>
    <div class="body">
      <div class="text">
        <div id="title">
          <h1> {{ t1 }} {{ t2 }}</h1>
        </div>
        <h2 id="desc">{{ desc }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitGoogleMapsEvent: function (label) {
      window.gtag('event', 'click', {
        'event_category': 'NAVIGATION_BAR',
        'event_label': label
      })

      return true
    }
  },
  data () {
    return {
      t1: 'Pho',
      t2: 'Than Brothers',
      desc: 'Delicious, affordable, and authentic Vietnamese cuisine.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@media screen and (max-width: 449px) {
  .body .text #title {
    font-size: 1em;
  }
  .body .text #desc {
    font-size: .8em;
  }
}
@media screen and (min-width: 450px) {
  .body .text #title {
    font-size: 2em;
  }
  .body .text #desc {
    font-size: 1.25em;
  }
}
@media screen and (max-width: 584px) {
  #nav {
    @include responsive-font(2vw, 1.1em, 1.99em, 18px);
  }
  #top {
    text-align: center;
  }
}

@media screen and (min-width: 585px) {
  #nav {
    @include responsive-font(3vw, 2em, 4em, 18px);
  }
  #top {
    text-align: left;
  }
}
.body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    margin-bottom: 125px;

    #title {
      margin: 0px;
      display: flex;
      flex-direction: row;
      font-weight: $bold-default;
      text-transform: uppercase;
    }

    #desc {
      margin: 0px;
      font-weight: $thin-default;
      text-transform: uppercase;
      color: white;
    }
  }
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
  max-width: 100%;
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
</style>
