<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-super">
        <h5 class="fs-2 lh0 fwb mb3 tfu layout o-70 ff-inria-serif fs1 ls1">Guide</h5>
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata-m">
          Short guides on all things hair care.
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

    <div id="fatty-acids-and-hair-care" class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-super">
        <h2 class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata-m">
          Fatty acids and hair care
        </h2>
      </div>
    </div>

    <ul
      class="df-m wrap-m maxw-xxxsuper ml-au mr-au pl2 pr2 pr0-m pt0-m pb2-m  fw5 dark ls1"
    >
      <li
        v-for="guide in fattyAcids"
        :key="guide.link"
        class="pointer pr2-m mb2 mb1-m w-4-12-m relative"
      >
        <div v-if="guide.image" class="relative h-xbig">
          <nuxt-link :to="guide.path">
            <img class="w-100 absolute h-100 l0 t0 of-cover" :src="guide.image" />
          </nuxt-link>
        </div>
        <nuxt-link :to="`/guides/fatty-acids/${guide.link}`" class="actived dib pt-xsmall fs-2 tfu dark tdx">
          {{ guide.name }}
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
    let fattyAcids = await $content(`embodiment-fatty-acids`).fetch()
    fattyAcids = fattyAcids.body.map(page => {
        let link = page['Common Name']
          .toLowerCase()
          .trim()
          .replace(' ', '-')

        return {
          name: page['Common Name'],
          link
        }
      }).sort((a,b) => a.name > b.name)

    return {
      guides,
      fattyAcids
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
