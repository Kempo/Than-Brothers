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
        {num: 2, title: 'Pho Tai Chin', desc: 'Description 2'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-weight: $bold-default;
    font-size: 3em;
  }
  #menu_section {
    text-align: left;
    margin: auto;
    padding: 50px;
  }
</style>
