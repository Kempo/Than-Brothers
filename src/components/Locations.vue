<template>
  <div id="location_section">
    <div class="section">
      <h1> locations </h1>
      <ul>
        <li v-for="t in times" v-bind:key="t.id"> {{ t.time }}</li>
      </ul>
      <Location
      v-for="loc in list"
      v-bind:key="loc.id"
      v-bind:loc-name="loc.title"
      v-bind:Address="loc.address"
      v-bind:Phone="loc.phone"
      v-bind:City="loc.city"
      />
    </div>
  </div>
</template>

<script>
import Location from './objects/Location.vue'
export default {
  components: {
    Location
  },
  data () {
    return {
      list: [
        {id: 1, title: 'Aurora', address: '7800 Aurora Ave. N', city: 'Seattle WA 98103', phone: '(206) 527-5973'},
        {id: 2, title: 'Broadway', address: '527 Broadway E', city: 'Seattle WA 98102*', phone: '(206) 568-7218'},
        {id: 3, title: 'University of Washington', address: '4207 University Way', city: 'Seattle WA 98105', phone: '(206) 632-7272'},
        {id: 4, title: 'Ballard', address: '2021 NW Market St', city: 'Seattle WA 98117*', phone: '(206) 782-5715'},
        {id: 5, title: 'Junction', address: '4822 California Ave SW', city: 'Seattle WA 98116*', phone: '(206) 937-6264'},
        {id: 6, title: 'Crossroads', address: '1299 156th Ave NE', city: 'Bellevue WA 98007', phone: '(425) 818-4905'},
        {id: 7, title: 'Wallingford', address: '2309 N 45th St', city: 'Seattle WA 98105*', phone: '(206) 632-7378'},
        {id: 8, title: 'Lynnwood', address: '16809 Highway 99', city: 'Lynnwood WA 98037', phone: '(425) 999-6596'},
        {id: 9, title: 'Fremont', address: '626 N 34th St', city: 'Seattle WA 98103*', phone: '(206) 915-1928'}
      ],
      times: [
        { id: 1, time: 'DAILY 10 - 9' },
        { id: 2, time: '(*) = 11 - 9' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @include section-title-size;
}
li {
  font-size: 1em;
  letter-spacing: 2px;
}
ul {
  list-style-type: none;
}
</style>
