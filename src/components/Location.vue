<template>
  <div class="individual-item">
  <h2> <a href=""> {{LocName}} </a> </h2>
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
  margin: 5px;
}
h2 {
  margin: 10px;
}
a {
  text-decoration: none;
  color: blue;
}
.individual-item {
  font-size: 1em;
  width: auto;
  padding-right: 20px;
}

</style>
