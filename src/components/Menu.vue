<template>
  <div class="section">
    <h1> <span class="section-title-bar"/> menu </h1>
    <!--<MenuItem item-title='Pho Bo Tai' item-desc='Description 1'/>
    <MenuItem item-title='Pho Tai Chin' item-desc='Description 2'/>
    -->

    <h2> Pho Bo <span class="title-desc"> rice noodle soup with beef </span></h2>
    <MenuItem
      v-for="item in beef"
      v-bind:key="item.num"
      v-bind:item-num="item.num"
      v-bind:item-title="item.title"
      v-bind:item-desc="item.desc"
    />

    <h2> Other <span class="title-desc"> rice noodle soup with other choices </span> </h2>
    <MenuItem item-title='Pho Ga' item-num='A' item-desc='shredded chicken'/>
    <MenuItem item-title='Pho Bo Vien' item-num='B' item-desc='succulent meat balls'/>
    <MenuItem item-title='Pho Chay (V)' item-num='V' item-desc='tofu, mushroom, carrots, and broccoli'/>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  components: {
    MenuItem
  },
  data () {
    return {
      beef: [
        {num: 1, title: 'Tai', desc: 'steak (medium rare beef)'},
        {num: 2, title: 'Tai Chin', desc: 'steak and brisket'},
        {num: 3, title: 'Tai Nam', desc: 'steak and well-done flank'},
        {num: 4, title: 'Tai Sach', desc: 'steak and tripe'},
        {num: 5, title: 'Tai Gan', desc: 'steak and soft tendon'},
        {num: 6, title: 'Chin Nam', desc: 'brisket and well-done flank'},
        {num: 7, title: 'Chin Gan', desc: 'brisket and soft tendon'},
        {num: 8, title: 'Chin Sach', desc: 'brisket and tripe'},
        {num: 9, title: 'Tai Chin Nam', desc: 'steak, brisket, and well-done flank'},
        {num: 10, title: 'Tai Chin Gan', desc: 'steak, brisket, and soft tendon'},
        {num: 11, title: 'Tai Chin Sach', desc: 'steak, brisket, tripe'},
        {num: 12, title: 'Tai Chin Nam Gan', desc: 'steak, brisket, flank, and soft tendon'},
        {num: 13, title: 'Tai Chin Nam Sach', desc: 'steak, brisket, flank, and tripe'},
        {num: 14, title: 'Tai Chin Nam Gau Gan Sach', desc: 'steak, flank, brisket, tendon, and tripe'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    @include section-title-size;
  }
  .title-desc {
    font-size: .8em;
    font-weight: $thin-default;
    white-space: nowrap;
  }
</style>
