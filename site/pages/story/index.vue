<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <h5 class="fs-1 lh0 fwb mb3 tfu layout o-70 ff-abril fs1">Laazara</h5>
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata">
          Laazara is a online store based in London. We have created a natural alternative to the
          harsh chemically based products found in the hair and beauty industry.
        </p>
      </div>
    </div>

    <div class="pa2 pt0 relative maxw-xxxsuper ml-au mr-au">
      <div class="h-xxbig relative mb2">
        <img
          src="https://images.unsplash.com/photo-1588072741342-5815c198e4aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
          class="absolute t0 l0 w-100 h-100 of-cover bxsh-black"
        />
      </div>
    </div>

    <div>
      <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au">
        <div class="maxw-super fs1 lh1">
          <p class="mb2 neutrald">
            We are passionate about reinforcing self-love and educating clients on their individual
            hair type.
          </p>
          <p class="mb2">
            The Embodiment collection is the first to be created by Laazara. The range launched in
            September 2018 and has a number of products already. Embodiment is made fresh on order.
          </p>
          <p class="mb2">
            We work very hard to ensure our products remains free from harsh chemicals and animal
            cruelty. Each product is a must have in your hair routine. With regular use, you will
            see a complete hair transformation.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seo: {
        title: 'Laazara and the Embodiment story',
        description: 'How and why Embodient was started'
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
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>
