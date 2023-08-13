<template>
  <div>
    <div class="dn bg-active bg-layout-m">
      <div class="pa2 pt1 pb1 maxw-xxxsuper ml-au mr-au relative">
        <div class="maxw-xsuper">
          <h5 class="fs-3 lh0 fwb tfu ls1 light">
            Thousands use oils to manage their hair&nbsp;everyday
          </h5>
        </div>
      </div>
    </div>

    <div class="h2 h3-m"></div>

    <div class="pl2 pr2">
      <div class="maxw-xsuper dark ml-au mr-au">
        <div class="bwl4 bca-layout bsa-solid pl1 pl2-m">
          <h1 class="fs1 lh1 fs3-m lh3-m neutrald ff-prata">
            30-Day Healthier Hair Transformation
          </h1>
          <h2 class="fs-1 lh0 fs2-m lh3-m fw3 maxw-super">
            Can you achieve healthier hair without chemicals?
          </h2>
        </div>
      </div>
    </div>

    <div class="h2 h3-m"></div>

    <div class="pa2 pt0 relative maxw-xxxsuper ml-au mr-au dn">
      <div class="h-xbig h-xxxbig-m relative">
        <img alt=""
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          class="absolute t0 l0 w-100 h-100 of-cover bxsh-black" />
      </div>
    </div>

    <div class="pl2 pr2">
      <div class="maxw-xsuper ml-au mr-au s-article">
        <p>
          Yes, you can achieve healthier hair <nuxt-link to="/l/waiting-list">without chemicals</nuxt-link>
          That means no parabens. No sulphates.
        </p>
        <p>
          Today, we look at one way to hair transformation. And it's free! Hydration.
        </p>
        <h2>Hydration</h2>
        <p>
          Nutritionists and health experts tell us how to achieve good health.
          One element of good health is hydration. That means drinking
          water and choosing foods that contain lots of water.
          But how does water improve our hair?
        </p>
        <h3>Hydration means good blood circulation</h3>
        <p>
          Water is an important component of cells throughout the body.
          Blood vessels supply hair follicles. The supplied oxygen
          and nutrients help hair follicles produce good-quality hair.
          When dehydrated, the process is not as efficient.
        </p>
        <h3>Hydration means nutrient absorption</h3>
        <p>
          Eating the healthiest diet isn't enough without water to transport it.
          Dehydration means your body has to prioritise water to the more
          important areas of the body. Hair, as important as it is to us,
          cannot compete with the blood vessels in the heart and the lungs.
          So to feed the nutrients into our hair follicles, we need water.
        </p>
        <h3>Hydration means better natural hair conditioning</h3>
        <p>
          Sebaceous glands are the body's natural hair conditioner.
          These too respond to our internal hydration levels. It's accepted,
          that when dehydrated, our scalp can either become overly dry or greasy.
          Either way, when our scalp is healthy, our <nuxt-link to="/l/waiting-list">hair will be healthy</nuxt-link> too.
        </p>
        <p>
          Nurturing healthier hair doesn't necessarily need chemicals.
          The simple practice of staying hydrated can result in noticeable transformations.
          Embrace the power of hydration for vibrant and beautiful hair.
          So don't forget to drink water.
        </p>

      </div>
    </div>


  </div>
</template>

<script>
import { createClient } from "@supabase/supabase-js";

let supabase;

function debounce(func, wait) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= viewportHeight &&
    rect.right <= viewportWidth
  );
}

let onScroll = () => {
  [...document.querySelectorAll('h2,h3')]
    .forEach((header) => {
      if (isInViewport(header) && !header.classList.contains('reached')) {
        header.classList.add('reached')
        pirsch("Heading reached", {
            duration: 1,
            meta: {
              page: window.location.href,
              heading: header.innerText
            }
        })
      }
    })
}

export default {
  layout: 'landing-page',
  async asyncData({ env }) {

    return {
      email: null,
      submitted: false,
      error: false,
      supabase: {
        PUBLIC_SUPABASE_URL: env.PUBLIC_SUPABASE_URL,
        PUBLIC_SUPABASE_ANON_KEY: env.PUBLIC_SUPABASE_ANON_KEY
      }
    }
  },
  methods: {
    async signUp(e) {
      this.error = false

      if (!supabase)
        supabase = createClient(
          this.supabase.PUBLIC_SUPABASE_URL,
          this.supabase.PUBLIC_SUPABASE_ANON_KEY
        );

      if (!this.email) {
        this.error = true
        this.errorMsg = "Sorry. Your email is required to join the list"
        return false
      }

      try {
        await supabase.from("invites").insert({ email: this.email, referred_url: window.location.href });
        this.submitted = true
      } catch (e) {
        this.error = true
        this.errorMsg = "Sorry. We're having issues with our waiting list service"
      }
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', debounce(function (e) {
      onScroll(e)
    }, 250))
  },
  beforeDestroy() {
    window.removeEventListener("scroll", onScroll);
  }
}
</script>