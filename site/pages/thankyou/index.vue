<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-super">
        <h5 class="fs-2 lh0 fwb mb3 tfu layout o-70 ff-inria-serif fs1 ls1">Thank you</h5>
        <p class="fs1 lh1 fs3-m lh3-m mb2 neutrald ff-prata-m">
          Your order has been placed! We want to thank you for shopping here @ Embodiment
        </p>
      </div>
      <div class="maxw-xsuper">
        <p class="mb2 fs1 ls1">
          We will prepare a fresh blend for you and send it to your door. If you have any questions,
          do not hestitate to <nuxt-link to="/contact" class="actived tdx">contact us</nuxt-link>.
          In the meantime, you can take a look at the guides to learn how to use Embodiment once it
          arrives.
        </p>
      </div>
    </div>

    <!-- Guides -->
    <ul
      class="df-m wrap-m maxw-xxxsuper ml-au mr-au pl2 pr2 pr0-m pt0-m pb2-m  fw5 dark ls1 center"
    >
      <li
        v-for="guide in guides"
        :key="guide.slug"
        class="pointer pr2-m mb2 mb1-m w-4-12-m relative"
      >
        <div class="relative h-xbig">
          <nuxt-link :to="guide.path">
            <img class="w-100 absolute h-100 l0 t0 of-cover" :src="guide.image" />
          </nuxt-link>
        </div>
        <nuxt-link :to="guide.path" class="actived dib pt-xsmall fs-2 tfu dark tdx">{{
          guide.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  async asyncData({ $content }) {
    const guides = await $content('guides').fetch()

    return {
      guides
    }
  }
}
</script>
