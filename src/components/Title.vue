<template>
  <div>
    <div class="container">
      <div class="banner">
        <p class="text">
          <span><strong>TEMPORARY HOURS: </strong> 7PM CLOSE EVERYDAY</span>
          <span class="separator">&nbsp;|&nbsp;</span>
          <span>DINE-IN & TAKEOUT</span>
          <span class="separator">&nbsp;|&nbsp;</span>
          <span>POSTMATES ONLY</span>
        </p>
      </div>
      <div class="layout">
        <div class="header">
          <h2 class="title">
            <a href="/"><span class="first">PHO</span> <span class="second">THAN BROTHERS</span></a>
          </h2>
          <h2 class="nav">
            <a class="link" v-on:click="emitGoogleMapsEvent('Menu')" href="#menu_section"> menu </a>
            <a class="link" v-on:click="emitGoogleMapsEvent('Location')" href="#location_section"> locations </a>
            <a class="link" v-on:click="emitGoogleMapsEvent('Contact')" href="#contact_section"> contact </a>
          </h2>
          <span class="mobile-divider" />
        </div>
        <div class="content">
          <div class="description">
            <div class="statement">
              <h1>Delicious,<br>Authentic,<br>And Affordable.</h1>
            </div>
            <div class="about">
              <h3>Serving the Greater Seattle region since 1996.</h3>
              <p><strong>Pho</strong> is a Vietnamese rice noodle soup that invigorates and warms the soul.</p>
              <a v-on:click="emitGoogleMapsEvent('Menu')" href="#menu_section"><button>See Menu</button></a>
            </div>
          </div>
          <div class="media">
            <p class="promotion">AS FEATURED IN</p>
            <img class="down-arrow" src="../assets/arrow.svg" alt="Grey Arrow"/>
            <div class="refs">
              <a v-on:click="emitGoogleMapsEvent('Seattle Times')" target="_blank" rel="noopener noreferrer" href="https://www.seattletimes.com/life/travel/gloom-got-you-down-try-these-8-tropical-escapes-in-the-seattle-area/"><img src="../assets/news/seattletimes.svg" alt="Seattle Times"/></a>
              <a v-on:click="emitGoogleMapsEvent('Bon Appetit')" target="_blank" rel="noopener noreferrer" href="https://www.bonappetit.com/people/article/macklemore-loves-pho"><img src="../assets/news/bonappetit.svg" alt="Bon Appetit"/></a>
              <a v-on:click="emitGoogleMapsEvent('Thrillist')" target="_blank" rel="noopener noreferrer" href="https://www.thrillist.com/eat/nation/best-west-coast-chain-restaurants-fast-food"><img style="background-color: red;" src="../assets/news/thrillist.svg" alt="Thrillist Media"/></a>
              <a v-on:click="emitGoogleMapsEvent('Seattle Weekly')" target="_blank" rel="noopener noreferrer" href="https://www.seattleweekly.com/food/the-9-best-soups-for-surviving-winter-in-seattle/"><img src="../assets/news/seattleweekly.svg" alt="Seattle Weekly"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitGoogleMapsEvent: function (label) {
      window.gtag('event', 'click', {
        'event_category': 'NAVIGATION_BAR',
        'event_label': label
      })

      return true
    }
  },
  data () {
    return {
      t1: 'Pho',
      t2: 'Than Brothers',
      desc: 'Delicious, affordable, and authentic Vietnamese cuisine.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// small x < 400
// medium 400 < x < 769
// large x >= 770

// DEFAULT STYLES
.container {
  .banner {
    background-color: $banner-color;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    color: white;
    letter-spacing: 1px;
    padding: 5px 10px;
  }

  .layout {
    margin: 0 20px;
    .header {
      margin: 0 20px;

      .title {
        text-transform: uppercase;
        letter-spacing: 2px;

        .first {
          color: $blue;
        }
        .second {
          color: $red;
        }
      }

      .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 350px
      }
    }

    .content {
      margin: 0px 20px;

      .description {
        text-align: left;
        margin: 75px 0px;

        .about {
          width: 400px;

          button {
            display: inline-block;
            font-size: .75em;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
            border-style: solid;
            border-color: $red;
            background-color: white;
            border-width: 1px;
            border-radius: 50px;
            padding: 10px;
            color: $red;
            transition: color 100ms, background-color 200ms;

            &:hover {
              color: white;
              background-color: $red;
            }
          }

          p {
            color: #7C7C7C;
          }
        }
      }

      .media {
        margin: 75px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .promotion {
          letter-spacing: 4px;
          font-weight: 400;
          color: #CCC;
          text-transform: uppercase;
        }

        .down-arrow {
          margin: 25px 0px 45px 0px;
        }

        .refs {
          a:hover {
            color: black;
          }
          img {
            height: 45px;
            margin: 15px 15px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 770px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .banner {
      display: flex;
      justify-content: center;
    }

    .layout {
      width: 100%;
      max-width: 1150px;
      align-self: center;

      .header {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;

        .title {
          font-size: 1.75em;
        }

        .mobile-divider {
          display: none;
        }
      }

      .content {
        .description {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}

@media screen and (max-width: 769px) {
  h1 {
    font-size: 2.25em;
  }

  .container {
    .banner {
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .separator {
          display: none;
        }
      }
    }

    .layout {
      margin: 0px;

      .header {
        display: flex;
        flex-direction: column;
        align-items: center;

        .nav {
          margin: 0px 0px 50px 0px;
        }

        .mobile-divider {
          display: block;
          height: 1px;
          width: 100px;
          background-color: #ccc;
        }
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .container {

    .banner {
      .text {
        font-size: .85em;
      }
    }

    .layout {
      .content {
        .description {
          .about {
            width: auto;
          }
        }
      }
    }
  }
}

a:hover {
  color: $red;
}
</style>
