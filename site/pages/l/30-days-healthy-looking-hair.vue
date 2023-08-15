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
          <h2 class="dn fs-1 lh0 fs2-m lh3-m fw3 maxw-super">
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
          Trying to minimise chemicals in your life?
          Get the new <strong>30-Day Healthy Hair Transformation</strong> program for <strong>free</strong> today.
        </p>
        <p>
          <strong>What's the catch?</strong> Embodiment Shop are trialing a new 
          offering and it's only available for free to the first 5 people who respond.
        </p>

        <nuxt-link to="/l/waiting-list" class="">
          <button type="submit" class="mb2 align-center df justify-center w-100 light bg-dark pa-xsmall pl2 pr2 bwa0 fwb ls1 lh1 fs-2 bxsh-black">
            <span class="df items-center">
              <span>Get free transformation</span>
              <span class="ml1 material-symbols-outlined">
                touch_app
              </span>
            </span>
          </button>
        </nuxt-link>
        
        <p>
          <strong>Is it 100% free?</strong>
          Yes. That means no shipping fees. No postage. No credit card needed. Just your email.
          We want to discuss what blends you'd like or need for your hair and
          to get your shipping details. We're also looking for feedback.
        </p>
        
        <p>
          <strong>What if you don't make the 5 person cohort?</strong>
          As a thank you, even if you don't make the cohort, you'll get a discount
          with the email address you register when we launch.
        </p>
        <p>
          <strong>What's in the program?</strong>
        </p>
        <ul>
          <li>A limited tailored service to find the perfect organic oil blend for you.</li>
          <li>3 methods to enhance your hair using oil blends.</li>
          <li><strong>3 courses</strong> of oil blends sent to your door over 30-90 days.</li>
          <li>A <strong>bonus</strong> course of oil blends to keep you going for longer.</li>
          <li>A <strong>bonus</strong> of an organic natural shampoo.</li>
        </ul>

        <p class="dn">
          <img class="bxsh-black" src="/images/articles/embodiment-program.jpeg" />
        </p>
        <p>
          <strong>Why hair oil blends?</strong> After using chemical products for years ourselves,
          we became worried about how chemicals affected our scalp. But we still want healthy-looking
          hair.
          So we decided to look to natural ingredients.
        </p>
      
        <p>If you're interested. Do click to get invited to the program.</p>

        <nuxt-link to="/l/waiting-list" class="">
          <button type="submit" class="mb2 align-center df justify-center w-100 light bg-dark pa-xsmall pl2 pr2 bwa0 fwb ls1 lh1 fs-2 bxsh-black">
            <span class="df items-center">
              <span>Get free transformation</span>
              <span class="ml1 material-symbols-outlined">
                touch_app
              </span>
            </span>
          </button>
        </nuxt-link>

        <p>
          <strong>How do we handle your data?</strong>
          We don't use cookies. We do however, collect anonymous analytics to see how many visits
          we get on our page.
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