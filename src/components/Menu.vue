<template>
  <div id="menu_section">
    <h1> menu </h1>
    <!--<MenuItem item-title='Pho Bo Tai' item-desc='Description 1'/>
    <MenuItem item-title='Pho Tai Chin' item-desc='Description 2'/>
    -->
    <MenuItem
      v-for="item in items"
      v-bind:key="item.num"
      v-bind:item-num="item.num"
      v-bind:item-title="item.title"
      v-bind:item-desc="item.desc"
    />
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
      items: [
        {num: 1, title: 'Pho Bo Tai', desc: 'Description 1'},
        {num: 2, title: 'Pho Bo Tai Chin', desc: 'Description 2'},
        {num: 3, title: 'Pho Bo Tai Nam', desc: 'Description 3'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    @include section-title-size;
  }
  #menu_section {
    @include section-div-style;
  }
</style>
