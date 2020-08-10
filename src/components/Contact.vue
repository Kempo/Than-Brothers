<template>
  <footer id="contact_section">
    <hr class="line-separator"/>
    <h1> Contact </h1>
    <!-- on submissin, initiate method checkForm to identify any form errors-->
    <form @submit="checkForm" method="POST" v-bind:action="getLink">
      <div id="other">
        <p>{{ address }} </p>
        <p>{{ phone }} </p>

      <div v-if="errors.length"> <!-- if the array errors is filled with items-->
        <p>Please correct the following error(s):</p>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
        </div>
      </div>

      <input type="email" name="email" placeholder="Your email" v-model="emailValue">
      <textarea name="message" placeholder="Your message" v-model="messageValue"></textarea>
      <button id="send-button" v-on:click="emitGoogleMapsEvent('Send Email')" type="submit">Send</button>
      <input type="text" name="_gotcha" style="display:none" /> <!-- form spree anti-scraping measures -->
    </form>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      email: 'chi@thanbrothers.com',
      address: 'PO BOX 27529 Seattle, WA 98165',
      phone: '(206) 527-5973',
      emailValue: null,
      messageValue: null,
      errors: []
    }
  },
  computed: {
    getLink: function () {
      return ('https://formspree.io/' + this.email)
    }
  },
  methods: {
    checkForm: function (e) {
      if (this.emailValue && this.messageValue) { return true }
      this.errors = []
      if (!this.emailValue) { this.errors.push('Email required.') }
      if (!this.messageValue) { this.errors.push('Message required.') }
      e.preventDefault() // prevents default action of form on submission
    },
    emitGoogleMapsEvent: function (label) {
      window.gtag('event', 'click', {
        'event_category': 'CONTACT_SUBMISSION',
        'event_label': label
      })

      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    @include section-title-size;
  }
  #contact_section {
    bottom:0;
    padding: 40px 0px;
    font-weight: 300;
  }
  form {
    display: inline-block;
    color: black;
  }
  textarea {
    margin: 0px;
    resize: none;
    height: 200px;
  }
  input, textarea {
    width: 100%;
    border-width: 1px;
    padding: 10px 0px 10px 5px;
    border-style: solid;
    border-color: #DDD;
    margin-bottom: 10px;
  }
  input, textarea, button {
    font-family: $default-font;
    font-size: 1.25em;
    color: black;
    font-weight: inherit;
  }
  p {
    margin: 0;
    white-space: pre;
    display: inline-block;
  }
  #other {
    text-align: left;
    padding-bottom: 10px;
  }
  #send-button {
    border-style: solid;
    border-width: 1px;
    border-color: $red;
    background-color: white;
    color: $red;
    padding: 0px 40px;
    height: 40px;
    margin-bottom: 30px;
    transition: background-color 100ms, color 100ms;
    border-radius: 50px;

    &:hover {
      color: white;
      background-color: $red;
    }
  }
</style>
