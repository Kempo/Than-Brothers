<template>
  <div class="individual-item">
  <h2> {{LocName}} </h2>
  <p> {{Address}} </p>
  </div>
</template>
<script>
export default {
  props: ['LocName', 'Address']
}
</script>

<style lang="scss" scoped>
p {
  font-style: italic;
  color: grey;
}
</style>
