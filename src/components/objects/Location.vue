<template>
  <div class="individual-item">
  <h2>
    <a :href="getLink" v-on:click="emitGoogleMapsEvent(LocName)" target="_blank" rel="noopener noreferrer">
      {{LocName}} <span v-if="TimeSchedule === 2">*</span>
    </a>
  </h2>
  <p> {{Address}} {{City}} </p>
  <p> {{Phone}} </p>
  </div>
</template>
<script>
export default {
  props: ['LocName', 'TimeSchedule', 'Address', 'Phone', 'City'],
  methods: {
    emitGoogleMapsEvent: function (label) {
      window.gtag('event', 'click', {
        'event_category': 'GOOGLE_MAPS_CLICK',
        'event_label': label
      })

      return true
    }
  },
  computed: {
    getLink: function () {
      return ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${this.Address} ${this.City}`))
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-style: italic;
  color: grey;
  margin: 5px;
}
h2 {
  margin: 10px;
}
a {
  text-decoration: none;
  color: $blue;
}
a:hover {
  cursor: pointer;
  color: $red;
}
.individual-item {
  font-size: 1em;
  width: auto;
  padding-right: 20px;
  margin: 20px 0px;
}

</style>
