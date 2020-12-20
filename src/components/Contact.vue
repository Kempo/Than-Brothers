<template>
  <footer id="contact_section">
    <hr class="line-separator"/>
    <h1> Contact </h1>
    <form @submit="checkForm" method="POST" v-bind:action="getLink">
      <div id="other">
        <p class="desc">At <span style="color: #6d9eeb;">Pho</span> <span style="color: #dd7e6b;">Than Brothers</span>, we strive for the best quality food and experience and we'd love your feedback.</p>

        <div v-if="errors.length">
          <p>Please correct the following error(s):</p>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
        </div>
      </div>

      <label for="email">Email<span style="color: red;">*</span></label>
      <input id="email" type="email" name="email" v-model="emailValue">
      <label for="message">Message<span style="color: red;">*</span></label>
      <textarea id="message" name="message" v-model="messageValue"></textarea>
      <div class="submit-row">
        <button id="send-button" v-on:click="emitGoogleMapsEvent('Send Email')" type="submit">Send</button>
      </div>
      <input type="text" name="_gotcha" style="display:none" /> <!-- form spree anti-scraping measures -->
    </form>
    <p>{{ address }} </p>
    <p>{{ phone }} </p>
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
    margin-bottom: 0px;
  }
  .submit-row {
    display: flex;
    justify-content: center;
  }
  #contact_section {
    bottom:0;
    padding: 40px 0px;
    font-weight: 300;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form {
    color: black;
    text-align: left;
  }
  textarea {
    margin: 0px;
    resize: none;
    height: 200px;
  }
  input, textarea {
    width: 100%;
    border-width: 1px;
    padding: 7px 0px 7px 5px;
    border-style: solid;
    border-color: #DDD;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  input, textarea, button {
    font-family: $default-font;
    font-size: 1em;
    color: black;
    font-weight: inherit;
  }
  #other {
    text-align: left;
    padding-bottom: 10px;

    .desc {
      color: black
    }
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

  p {
    color: rgb(136, 136, 136);
  }
</style>
