<template>
<div id="menu_section">
  <div class="layout">
  <div class="section">
    <h1 class="menu-title"> <span class="section-title-bar"/> Menu </h1>
    <div class="menu-desc">
      <p class="bowl-sizes-regular"><span class="header">BOWL SIZES:</span> SMALL | MEDIUM | LARGE | X-LARGE</p>
      <ul class="bowl-sizes-mobile">
        <li class="header">BOWL SIZES:</li>
        <li>SMALL</li>
        <li>MEDIUM</li>
        <li>LARGE</li>
        <li>X-LARGE</li>
      </ul>
      <p class="additional">Every dish comes with basil, lime, and beansprouts as optional garnishes.</p>
    </div>
    <hr class="line-separator" />
    <h2 class="title-header"> Pho Bo <span class="title-desc"> rice noodle soup with beef </span></h2>
    <MenuItem
      v-for="item in beef"
      v-bind:key="item.num"
      v-bind:item-num="item.num"
      v-bind:item-title="item.title"
      v-bind:item-desc="item.desc"
    />

    <h2 class="title-header"> Other <span class="title-desc"> rice noodle soup variations  </span> </h2>
    <MenuItem item-title='Pho Ga' item-num='A' item-desc='tender shredded chicken'/>
    <MenuItem item-title='Pho Bo Vien' item-num='B' item-desc='savory beef meat balls'/>
    <MenuItem item-title='Pho Chay (vegetarian)' item-num='V' item-desc='vegetable medley of tofu, mushroom, carrots, and broccoli'/>
  </div>
  <hr class="line-separator">
   </div>
</div>
</template>

<script>
import MenuItem from './objects/MenuItem.vue'
export default {
  components: {
    MenuItem
  },
  data () {
    return {
      beef: [
        {num: 1, title: 'Tai', desc: 'eye-round steak (medium rare beef)'},
        {num: 2, title: 'Tai Chin', desc: 'eye-round steak and brisket'},
        {num: 3, title: 'Tai Nam', desc: 'eye-round steak and well-done flank'},
        {num: 4, title: 'Tai Sach', desc: 'eye-round steak and tripe'},
        {num: 5, title: 'Tai Gan', desc: 'eye-round steak and soft tendon'},
        {num: 6, title: 'Chin Nam', desc: 'brisket and well-done flank'},
        {num: 7, title: 'Chin Gan', desc: 'brisket and soft tendon'},
        {num: 8, title: 'Chin Sach', desc: 'brisket and tripe'},
        {num: 9, title: 'Tai Chin Nam', desc: 'eye-round steak, brisket, and well-done flank'},
        {num: 10, title: 'Tai Chin Gan', desc: 'eye-round steak, brisket, and soft tendon'},
        {num: 11, title: 'Tai Chin Sach', desc: 'eye-round steak, brisket, tripe'},
        {num: 12, title: 'Tai Chin Nam Gan', desc: 'eye-round steak, brisket, well-done flank, and soft tendon'},
        {num: 13, title: 'Tai Chin Nam Sach', desc: 'eye-round steak, brisket, well-done flank, and tripe'},
        {num: 14, title: 'Tai Chin Nam Gau Gan Sach', desc: 'eye-round steak, well-done flank, brisket, tendon, and tripe'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  #menu_section {
    display: flex;
    justify-content: center;
  }

  .title-header {
    margin: 40px 0px;
  }

  h1 {
    @include section-title-size;
  }
  .menu-title {
    margin-bottom: 0px;
  }

  .bowl-sizes-regular {
    letter-spacing: 2px;
  }

  .bowl-sizes-mobile {
    letter-spacing: 2px;
  }

  .menu-desc {
    margin-top: 20px;

    .header {
      font-weight: bold;
    }

    ul {
      padding-left: 0px;
    }

    p {
      margin: 0px;
    }
    margin-bottom: 60px;

    .additional {
      color: #777;
      padding-top: 10px;
    }
    @media screen and (max-width: 421px) {
      .bowl-sizes-regular {
        display: none;
      }

      .bowl-sizes-mobile {
        display: inline-block;
      }
    }

    @media screen and (min-width: 421px) {
      .bowl-sizes-regular {
        display: inline-block;
      }

      .bowl-sizes-mobile {
        display: none;
      }
    }
  }
</style>
