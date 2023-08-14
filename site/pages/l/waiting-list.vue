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
            Hair Transformation Program
          </h1>
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

        <!-- <div class="pa1 pa2-m bg-activel pb0 mb2"> -->
          <h2 class="">What's in the program</h2>
          <ul>
            <li>A limited tailored service to find the perfect organic oil blend for you.</li>
            <li><strong>3 courses</strong> of oil blends sent to your door over 30-90 days.</li>
            <li>A <strong>bonus</strong> course of oil blends to keep you going for longer.</li>
            <li>A <strong>bonus</strong> of an organic natural shampoo.</li>
          </ul>



          <div v-if="!submitted">
            <form @submit.prevent="signUp">
              <div class="pa1 mb-xxsmall bg-neutrall dark df maxw-xsuper bxsh-black">
                <div class="ff-mukta w-100">
                  <div class="bg-transparent">
                    <input v-model="email" type="email" class="bg-transparent bwa0 w-100 dark"
                      placeholder="Enter email..." />
                  </div>
                </div>
              </div>

              <span v-if="error" class="red">{{ errorMsg }}</span>

              <div class="pb1 pb2-m">
                <button type="submit" class="db w-100 light bg-dark pa-xsmall pl2 pr2 bwa0 fwb ls1 lh1 fs-2 bxsh-black">
                  Join waiting list
                </button>
              </div>
            </form>
          </div>
          <div v-else>
            <h2>Thank you for joining the waiting list.</h2>
            <p>
              We'll be emailing you soon in the next 2 days.
              If you don't receive an email from us,
              please your check your spam mail box.
            </p>
          </div>
          
          <p>As we're launching a tailored service, we can't serve many people
            at one time, so we're limiting this deal initially to 5 people.
          </p>

          <div class="h1"></div>

        <!-- </div> -->

      </div>
    </div>


  </div>
</template>

<script>
import { createClient } from "@supabase/supabase-js";

let supabase;

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
  }
}
</script>