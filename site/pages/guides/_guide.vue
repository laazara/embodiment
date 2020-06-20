<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper dark ">
        <h5 class="fs-1 lh0 fwb mb3 tfu layout o-70 ff-abril fs1">Guide</h5>
      </div>
    </div>

    <div class="maxw-xxxsuper ml-au mr-au pl2 pr2 dark">
      <div v-if="page">
        <div class="maxw-xsuper dark ml-au mr-au mb3">
          <div class="bwl4 bca-layout bsa-solid pl2">
            <h1 class="fs1 lh1 fs3-m lh3-m mb0 neutrald ff-prata">
              {{ page.title }}
            </h1>
            <h2 class="fs0 lh0 fs2-m lh2-m ff-mukta fw2 maxw-super">{{ page.description }}</h2>
          </div>
        </div>

        <div v-if="page.image">
          <div class="h-xxbig h-xxxbig-m relative mb2">
            <img :src="page.image" class="absolute t0 l0 w-100 h-100 of-cover bxsh-black" />
          </div>
        </div>

        <div class="maxw-xsuper ml-au mr-au s-article">
          <nuxt-content :document="page" />
        </div>
      </div>
      <div v-else class="s-article mb3">
        Ooops. It looks like this guide does not exist.
      </div>
    </div>

    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-super">
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata">
          More guides
        </p>
      </div>
    </div>

    <!-- Guides -->
    <ul
      class="df-m wrap-m maxw-xxxsuper ml-au mr-au pl2 pr2 pr0-m pt0-m pb2-m ff-mukta fw5 dark ls1 center"
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
        <nuxt-link :to="guide.path" class="actived dib pt-xsmall fs0 tfu dark tdx">{{
          guide.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let page = false
    try {
      page = await $content(`guides/${params.guide}`).fetch()
    } catch (e) {}

    const guides = await $content('guides').fetch()

    return {
      page,
      guides
    }
  }
}
</script>
