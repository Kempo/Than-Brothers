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
        {id: 1, title: 'Aurora', address: '7800 Aurora Ave. N, Seattle WA'},
        {id: 2, title: 'Broadway', address: '527 Broadway E, Seattle WA*'},
        {id: 3, title: 'University of Washington', address: '4207 University Way, Seattle WA'},
        {id: 4, title: 'Ballard', address: '2021 NW Market St, Seattle WA*'},
        {id: 5, title: 'Junction', address: '4822 California Ave SW, Seattle WA*'},
        {id: 6, title: 'Everett', address: '500 SE Everett Mall Way, Everett WA'},
        {id: 7, title: 'Crossroads', address: '1299 156th Ave NE, Bellevue WA'},
        {id: 8, title: 'Queen Anne', address: '8 W Mercer St, Seattle WA*'},
        {id: 9, title: 'Wallingford', address: '2309 N 45th St, Seattle WA*'},
        {id: 10, title: 'Tacoma', address: '1712 Pacific Ave, Tacoma WA**'},
        {id: 11, title: 'Lynnwood', address: '16809 Highway 99, Lynnwood WA'},
        {id: 12, title: 'Fremont', address: '626 N 34th St, Seattle WA*'}
      ],
      times: [
        { id: 1, time: 'DAILY 10 - 9' },
        { id: 2, time: '(*) = 11 - 9' },
        { id: 3, time: '(**) = 10 - 7 SAT 10 - 6 SUN CLOSED' }
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
