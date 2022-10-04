<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper dark ">
        <h5 class="fs-2 lh0 fwb mb3-m tfu layout o-70 ff-inria-serif fs1">Guide</h5>
      </div>
    </div>

    <div class="maxw-xxxsuper ml-au mr-au pl2 pr2 dark">
      <div v-if="page">
        <div class="maxw-xsuper dark ml-au mr-au mb3">
          <div class="mb2 bwl4 bca-layout bsa-solid pl2">
            <h1 class="fs1 lh1 fs3-m lh3-m mb1 mb0-m neutrald ff-prata-m">
              {{ page.title }}
            </h1>
            <h2 class="fs0 lh0 fs2-m lh2-m fw3 maxw-super">{{ page.description }}</h2>
          </div>
        </div>

        <div v-if="page.image">
          <div class="h-xxbig h-xxxbig-m relative mb2">
            <img :src="page.image" class="absolute t0 l0 w-100 h-100 of-cover bxsh-black" />
          </div>
        </div>

        <div class="maxw-xsuper dark ml-au mr-au mb3 lh0">
          <div v-if="page.updated" class="fs-3 ls2 tfu mb0">Published Update: {{ page.updated | formatDate }}</div>
          <div v-else-if="page.created" class="fs-3 ls2 tfu mb0">Published: {{ page.created | formatDate }}</div>
          <div class="fs-3 ls2 tfu">{{ readTimeStats.text }}</div>
        </div>

        <div class="maxw-xsuper ml-au mr-au s-article">
          <nuxt-content :document="page" />
        </div>

        <div v-if="page.updated && page.created" class="maxw-xsuper dark ml-au mr-au mb3 lh0">
          <span class="h3 db"></span>
          <div class="fs-3 ls2 tfu mb0">Originally published: {{ page.created | formatDate }}</div>
        </div>
      </div>
      <div v-else class="s-article mb3">
        Ooops. It looks like this guide does not exist.
      </div>
    </div>

    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-super">
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata-m">
          More guides
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
import readingTime from 'reading-time'

export default {
  async asyncData({ $content, params }) {
    let page = false
    let text = false
    try {
      page = await $content(`guides/${params.guide}`).fetch()
      text = await $content(`guides/${params.guide}`, { text: true }).fetch()
    } catch (e) {}

    let guides = await $content('guides').fetch()
    guides = guides.filter(guide => guide.slug !== params.guide)

    const readTimeStats = readingTime(text.text);

    return {
      page,
      guides,
      readTimeStats
    }
  },
  head() {
    return {
      title: `${this.page.title}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.page.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.image || 'https://embodimentshop.com/images/embodiment-share.jpg'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        }
      ]
    }
  }
}
</script>
