<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-super">
        <h5 class="fs-2 lh0 fwb mb3 tfu layout o-70 ff-inria-serif fs1 ls1">Guide</h5>
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata-m">
          Short guides on how to care for your hair with Embodiment.
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
        <nuxt-link :to="guide.path" class="actived dib pt-xsmall fs-2 tfu dark tdx">
          {{ guide.title }}
        </nuxt-link>
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
  },
  data() {
    return {
      seo: {
        title: 'Guides'
      }
    }
  },
  head() {
    return {
      title: this.seo.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.seo.title
        }
      ]
    }
  }
}
</script>
