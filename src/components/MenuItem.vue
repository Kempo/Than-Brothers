<template>
  <div id="Item">
  <h2> {{itemNum}}. {{itemTitle}} </h2>
  <p> {{itemDesc}} </p>
  </div>
</template>

<script>
export default {
  props: ['itemNum', 'itemTitle', 'itemDesc']
}
</script>

<style lang="scss" scoped>
p {
  font-style: italic;
}
#Item {
  display: inline-block;
  padding: 20px;
}
</style>
