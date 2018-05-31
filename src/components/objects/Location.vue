<template>
  <div class="individual-item">
  <h2> <a :href='getLink' target="_blank"> {{LocName}} </a> </h2>
  <p> {{Address}} </p>
  <p> {{Phone}} </p>
  </div>
</template>
<script>
export default {
  props: ['LocName', 'Address', 'Phone'],
  computed: {
    getLink: function () {
      return ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.Address))
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
  color: $red;
}
.individual-item {
  font-size: 1em;
  width: auto;
  padding-right: 20px;
}

</style>
