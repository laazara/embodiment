<template>
  <div class="maxw-100 x-hidden ff-mukta fw4 fs0 lh0 fw2-m">
    <!-- Top nav -->
    <div class="bg-neutrall z-1 relative">
      <ul class="maxw-xxxsuper ml-au mr-au ff-mukta fs-1 lh-1 df items-center pa-xxxsmall pl2 pr2">
        <li class="mr2 df items-center">
          <span class="fs0 dib mt-xxxsmall">🇬🇧</span>
          <span class="lh-1 ml-xxsmall dib">
            Shipping to the
            <span class="dn-m">UK</span>
            <span class="dn dib-m">United Kingdom</span>
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
    <div class="df justify-between items-center maxw-xxxsuper ml-au mr-au">
      <h1 class="pa2 pt1 pb1 ff-abril tfu fs0 lh0 fs1-m lh1-m">
        <nuxt-link to="/" title="Embodiment home page" class="dark tdx">Embodiment</nuxt-link>
      </h1>
      <ul class="ml-au mr2 dn df-m">
        <li class="mr2">
          <nuxt-link to="/guides" class="activexd tdx db mb-xxsmall">Guides</nuxt-link>
        </li>
        <li class="mr2">
          <nuxt-link to="/testimonials" class="activexd tdx db mb-xxsmall">Testimonials</nuxt-link>
        </li>
        <li class="mr2">
          <nuxt-link to="/story" class="activexd tdx db mb-xxsmall">Story</nuxt-link>
        </li>
        <li class>
          <nuxt-link to="/oils" class="activexd tdx db mb-xxsmall">Oils</nuxt-link>
        </li>
      </ul>
      <div class="pa1 pr2">
        <button
          v-on:click="$store.dispatch('stripe/enterGateway')"
          class="light bg-dark pa-xxxsmall pl2 pr2 bwa0 ff-mukta fwb ls1 lh1 fs0"
        >Buy</button>
      </div>
    </div>

    <nuxt />

    <div class="pa2 w-100 x-hidden maxw-xxxsuper ml-au mr-au fw4">
      <div class="w-100 dark df wrap nowrap-m justify-between-m">
        <div class="ff-abril tfu mb2 w-100 w-au-m">Embodiment</div>
        <ul class="ff-mukta mb2 w-50 w-au-m lh-1">
          <li class="mb1 neutrald">About</li>
          <li class>
            <nuxt-link to="/oils" class="activexd tdx db mb-xxsmall">Oils</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/guides" class="activexd tdx db mb-xxsmall">Guides</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/story" class="activexd tdx db mb-xxsmall">Story</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="testimonials" class="activexd tdx db mb-xxsmall">Testimonials</nuxt-link>
          </li>
          <li class>
            <a
              href="https://www.instagram.com/laazara_uk/"
              class="activexd tdx db mb-xxsmall"
            >Instagram</a>
          </li>
        </ul>
        <ul class="ff-mukta w-50 w-au-m lh-1">
          <li class="mb1 neutrald">Customer service</li>
          <li class>
            <nuxt-link to="/contact" class="activexd tdx db mb-xxsmall">Contact</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/returns" class="activexd tdx db mb-xxsmall">Returns</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/shipping" class="activexd tdx db mb-xxsmall">Shipping</nuxt-link>
          </li>
          <!-- <li class>
            <a href class="activexd tdx db mb-xxsmall">FAQ</a>
          </li>-->
        </ul>
      </div>
    </div>
    <ul class="df fs-1 fs0-m ff-mukta pa2 pt1 pb1 maxw-xxxsuper ml-au mr-au">
      <li class="mr2">Laazara &copy; 2020</li>
      <li class="mr2">Terms</li>
      <li>Privacy</li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../../resources/preons.scss';
</style>

<script>
export default {
  mounted() {
    this.$store.dispatch('stripe/init')
  }
}
</script>
