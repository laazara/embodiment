<template>
  <div class="maxw-100 x-hidden ff-spartan fw4 fw3-m fs0 lh1">
    <!-- Top nav -->
    <div class="bg-neutrall z-1 relative">
      <ul class="maxw-xxxsuper ml-au mr-au  fs-2 lh-1 df items-center pa-xxxsmall pl2 pr2">
        <li class="mr2 df items-center">
          <span class="fs0 dib mt-xxxsmall">🇬🇧</span>
          <span class="lh-1 ml-xxsmall dib">
            UK Shipping
          </span>
        </li>
        <li class>
          <nuxt-link class="dib tdx df items-center dark lh-1" to="/contact">
            <svg
              style="margin-top: -1px"
              class="mr-xxsmall"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="#865f0c"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="df justify-between items-center maxw-xxxsuper ml-au mr-au fs0-m">
      <span v-on:click="toggleMenu" :class="[displayMenu ? 'dn' : '', 'pointer pa2 pr1 material-symbols-outlined dn-m']">
        menu
      </span>

      <span v-on:click="toggleMenu" :class="[displayMenu ? '' : 'dn', 't0 fixed white pointer pa2 pr1 material-symbols-outlined dn-m z-5']">
        close
      </span>
      <div class="pa2 pl0 pl2-m pr0 pt1 pb1 ff-abril tfu fs0 lh0 fs1-m lh1-m">
        <nuxt-link to="/" title="Embodiment home page" class="dark tdx">Embodiment Shop</nuxt-link>
      </div>
      <ul :class="[displayMenu ? '' : 'dn', 'ml-au mr2 t0 h-100 h-au-m w-100 w-au-m df-m fixed relative-m pa2 pa0-m pt5 pt0-m bg-black bg-transparent-m z-4']">
        <li class="mr2">
          <nuxt-link to="/guides" class="activexd tdx db">Guides</nuxt-link>
        </li>
        <li class="mr2">
          <nuxt-link to="/testimonials" class="activexd tdx db">Testimonials</nuxt-link>
        </li>
        <li class="mr2">
          <nuxt-link to="/story" class="activexd tdx db">Story</nuxt-link>
        </li>
        <li class>
          <nuxt-link to="/oils" class="activexd tdx db">Oils</nuxt-link>
        </li>
      </ul>
      <div class="pa1 pr2">
        <Button href="/shop/">Shop</Button>
      </div>
    </div>

    <nuxt />

    <div class="pa2 w-100 x-hidden maxw-xxxsuper ml-au mr-au fw4 fs-2">
      <div class="w-100 dark df wrap nowrap-m justify-between-m">
        <div class="ff-abril tfu mb2 w-100 w-au-m">
          <nuxt-link to="/" class="dark tdx">Embodiment</nuxt-link>
        </div>
        <ul class=" mb2 w-50 w-au-m lh-1">
          <li class="mb1 neutrald">About</li>
          <li class>
            <nuxt-link to="/oils" class="activexd tdx db pt-xxsmall pb-xxsmall">Oils</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/guides" class="activexd tdx db pt-xxsmall pb-xxsmall">Guides</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/story" class="activexd tdx db pt-xxsmall pb-xxsmall">Story</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/testimonials" class="activexd tdx db pt-xxsmall pb-xxsmall"
              >Testimonials</nuxt-link
            >
          </li>
          <li class>
            <a
              href="https://www.instagram.com/laazara_uk/"
              class="activexd tdx db pt-xxsmall pb-xxsmall"
              >Instagram</a
            >
          </li>
        </ul>
        <ul class=" w-50 w-au-m lh-1">
          <li class="mb1 neutrald">Customer service</li>
          <li class>
            <nuxt-link to="/contact" class="activexd tdx db pt-xxsmall pb-xxsmall"
              >Contact</nuxt-link
            >
          </li>
          <li class>
            <nuxt-link to="/returns" class="activexd tdx db pt-xxsmall pb-xxsmall"
              >Returns</nuxt-link
            >
          </li>
          <li class>
            <nuxt-link to="/shipping" class="activexd tdx db pt-xxsmall pb-xxsmall"
              >Shipping</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
    <ul class="df fs-3 pa2 pt1 pb1 maxw-xxxsuper ml-au mr-au">
      <li class="mr2">
        <a class="dark tdx" href="https://www.laazara.com" target="_blank">Laazara</a> &copy; 2020
      </li>
      <li>
        <nuxt-link class="dark tdx" to="/privacy">Privacy</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../../resources/preons.scss';

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

.s-article {
  @extend .lh0;
  @extend .lh1-m;
  @extend .fs-1;
  @extend .fs0-m;
  @extend .dark;
  ul {
    @extend .mb2;
  }
  li {
    @extend .mb-xxsmall;
  }
  p {
    @extend .mb2;
  }
  h1 {
    @extend .fs2;
    @extend .lh2;
    @extend .mb2;
    @extend .fwb;
    @extend .ff-prata-m;
    @extend .neutrald;
  }
  h2 {
    @extend .fs1;
    @extend .lh1;
    @extend .lh2-m;
    @extend .pt1;
    @extend .mb1;
    @extend .fwb;
    @extend .lh4-m;
    @extend .ff-prata-m;
    @extend .neutrald;
    @extend .ls1;
    &:first-child {
      @extend .pt0;
    }
  }
  h3 {
    @extend .fs0;
    @extend .mb1;
    @extend .fwb;
    @extend .ff-prata-m;
    @extend .neutrald;
    @extend .ls1;
  }
  h4,
  h5,
  h6 {
    @extend .fs0;
    @extend .lh1;
    @extend .mb1;
    @extend .tdu;
    @extend .ff-prata-m;
    @extend .neutrald;
    @extend .ls1;
  }
  li {
    @extend .ml2;
    @extend .mr2;
    @extend .mr4-m;
  }
  ul {
    @extend .lst-disc;
  }
  ol {
    @extend .lst-decimal;
  }
  a {
    @extend .tdx;
    @extend .actived;
  }
  pre {
    @extend .ff-roboto-mono;
  }
  mark {
    @extend .bg-activel;
    @extend .dib;
    @extend .black;
    @extend .pa-thin;
  }
  blockquote {
    @extend .bg-white;
    @extend .pa2;
    @extend .pt1;
    @extend .pb1;
    @extend .mb2;
    @extend .fxi;
    p:last-child {
      @extend .mb0;
    }
  }
  img {
    @extend .mb1;
    @extend .w-100;
    @extend .h-au;
  }
  img[src*='#boxed'] {
    @extend .bg-neutrall;
    @extend .pa1;
    @extend .pa2-m;
  }
  img[src*='#boxed-dark'] {
    @extend .bg-dark;
    @extend .pa1;
    @extend .pa2-m;
  }
  i,
  em {
    @extend .fxi;
  }
  ul,
  ol,
  li,
  p {
    code {
      @extend .pa-xxsmall;
      @extend .pl-small;
      @extend .pr-small;
      @extend .bg-light;
      @extend .ff-roboto-mono;
      @extend .fs-2;
    }
    > code {
      @extend .bg-activexl;
    }
  }
  .nuxt-content-highlight {
    @extend .mb1;
    @extend .w-100;
    overflow-x: hidden;
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    @extend .bg-white;
  }
}

img {
  font-family: 'object-fit: cover;';
}
</style>

<script>
import objectFitImages from 'object-fit-images'
import Button from '../components/Button.vue'

export default {
  mounted() {
    this.$store.dispatch('stripe/init')
    let images = document.querySelectorAll('img')
    objectFitImages(images)
  },
  watch: {
    $route () {
      this.displayMenu = false
    }
  },
  data() {
    return {
      displayMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.displayMenu = !this.displayMenu
    }
  },
  components: {
    Button
  }
}
</script>
