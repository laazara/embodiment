<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <h5 class="fs-2 lh0 fwb mb3 tfu layout o-70 ff-inria-serif fs1">Oils</h5>
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata-m">
          We blend oils for their restorative properties, hair moisturization, protection and aroma.
        </p>
      </div>
    </div>

    <Oils />

    <div class="pa2 pt0-m pb4-m maxw-xsuper ml-au mr-au center">
      <div class>
        <button
          v-on:click="$store.dispatch('stripe/enterGateway')"
          class="bg-black light pa-xxxsmall pl2 pr2 bwa0 fw4 ls1 lh1 fs-2 bxsh-black"
        >
          Buy today
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Oils from '../../components/Oils.vue';

export default {
  components: {
    Oils
  },
  data() {
    return {
      seo: {
        title: 'Oils',
        description: 'The list of oils we blend to make Embodiment for your hair.'
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
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.seo.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.seo.description
        }
      ]
    }
  }
}
</script>
