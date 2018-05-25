<template>
  <div class="section">
    <h1> menu </h1>
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

    <h2> Other <span class="title-desc"> rice noodle soup variations </span> </h2>
    <MenuItem item-title='Pho Ga' item-num='A' item-desc='Chicken description'/>
    <MenuItem item-title='Pho Bo Vien' item-num='B' item-desc='Meat ball description'/>
    <MenuItem item-title='Pho Chay' item-num='V' item-desc='Veggie description'/>
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
        {num: 1, title: 'Tai', desc: 'Description 1'},
        {num: 2, title: 'Tai Chin', desc: 'Description 2'},
        {num: 3, title: 'Tai Nam', desc: 'Description 3'}
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
