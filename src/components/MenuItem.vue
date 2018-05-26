<template>
  <div class="individual-item">
  <h2> {{itemNum}}. {{itemTitle}} </h2>
  <p> w/ {{itemDesc}} </p>
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
</style>
