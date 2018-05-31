<template>
  <footer id="contact_section">
    <p> {{ email }} </p>
    <p> {{ address }} </p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      email: 'chi@thanbrothers.com',
      address: 'PO BOX 27529 Seattle, WA 98165'
    }
  }
}
</script>

<style lang="scss" scoped>
  #contact_section {
    bottom:0;
    width:100%;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  p {
    margin: 0;
    white-space: pre;
    display: inline-block;
  }
</style>
