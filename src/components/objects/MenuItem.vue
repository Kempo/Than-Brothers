<template>
  <div class="individual-item">
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
@import url('https://fonts.googleapis.com/css?family=Lato:300');
p {
  font-size: 1.25em;
  font-family: 'Lato', sans-serif;
}
</style>
