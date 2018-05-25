<template>
<div class="section">
  <h1> locations </h1>
  <Location
    v-for="loc in list"
    v-bind:key="loc.id"
    v-bind:loc-name="loc.title"
    v-bind:address="loc.address"
  />
</div>
</template>

<script>
import Location from './Location.vue'
export default {
  components: {
    Location
  },
  data () {
    return {
      list: [
        {id: 1, title: 'Location 1', address: 'Address 1'},
        {id: 2, title: 'Location 2', address: 'Address 2'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @include section-title-size;
}
</style>
