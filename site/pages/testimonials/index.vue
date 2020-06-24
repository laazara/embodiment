<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative center-m">
      <div class="maxw-super ml-au mr-au">
        <h5 class="fs-1 lh0 fwb mb3 tfu layout o-70 ff-abril ls1">Testimonials</h5>
        <p
          class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata"
        >Here are some of the experiences with Embodiment.</p>
      </div>
    </div>

    <div class="maxw-xxsuper ml-au mr-au">
      <div class="pl2 pr2 pa2-m pt1-m maxw-xsuper ml-au mr-au center-m">
        <div class>
          <div class="mb2">
            <img
              class="w2 h-au o-40 bxsh-black"
              src="https://img.icons8.com/color/48/000000/leaf.png"
            />
          </div>
          <p class="fs1 lh1 fs2-m lh3-m mb2 neutrald ff-prata">
            Amazing! It left my daughters very dry curly hair feeling soft and hydrated it works
            well when used on its own but also when mixed with mask, leave in lotions for that extra
            hydration."
          </p>
          <h5 class="fs-1 lh0 fwb mb3 tfu layout o-70 ff-abril">Alexandra</h5>
          <div class="mb2">
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
          </div>
        </div>
      </div>
    </div>

    <div class="maxw-xxsuper ml-au mr-au">
      <div class="pl2 pr2 pa2-m pt1-m maxw-xsuper ml-au mr-au center-m">
        <div class>
          <div class="mb2">
            <img class="w2 h-au o-30" src="https://img.icons8.com/color/48/000000/leaf.png" />
          </div>
          <p class="fs1 lh1 fs2-m lh3-m mb2 neutrald ff-prata">
            Love Laazara products. Great quality and results..!!! Top quality service. Prompt
            delivery and excellent packaging. Highly recommend purchasing the full range of Laazara
            products.
          </p>
          <h5 class="fs-1 lh0 fwb mb3 tfu layout o-70 ff-abril">Caroldene</h5>
          <div class="mb2">
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
          </div>
        </div>
      </div>
    </div>

    <div class="maxw-xxsuper ml-au mr-au">
      <div class="pl2 pr2 pa2-m pt1-m maxw-xsuper ml-au mr-au center-m">
        <div class>
          <div class="mb2">
            <img class="w2 h-au o-30" src="https://img.icons8.com/color/48/000000/leaf.png" />
          </div>
          <p class="fs1 lh1 fs2-m lh3-m mb2 neutrald ff-prata">
            I love the smell of the oil, and the way so much natural oil blended together in one
            bottle. I have&nbsp;notice the oil also add shine to my daughters hair.
          </p>
          <h5 class="fs-1 lh0 fwb mb3 tfu layout o-70 ff-abril">Stephanie</h5>
          <div class="mb2">
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
            <img class="w2 h-au o-80" src="/images/star-24px.svg" />
          </div>
        </div>
      </div>
    </div>

    <div class="pa2 pt0-m pb4-m maxw-xsuper ml-au mr-au center">
      <div class>
        <button
          v-on:click="$store.dispatch('stripe/enterGateway')"
          class="bg-black light pa-xxxsmall pl2 pr2 bwa0 ff-mukta fwb ls1 lh1 fs0 bxsh-black"
        >Buy today</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seo: {
        title: 'Testimonials',
        description: "We're glad to gain great feedback. Read our reviews here."
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