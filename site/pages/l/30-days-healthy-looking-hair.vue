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
          <strong>What's the catch?</strong> Embodiment Shop are taking on 5 case studies for free
          as that's the maximum number of people we can handle. We're looking to get testimonials
          for the new service and honest feedback.
        </p>
        
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
        <p class="heading">
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

        <p class="heading">
          <strong>Why hair oil blends?</strong> We realised different oils have different benefits.
          Some are great at tackling frizz. Some strengthen the hair. Some accentuate curls.
          Some are drying. Others are moisturising. A blend combines the benefits of these oils.
        </p>


        <p>
          <strong>What's in a blend?</strong>
          Each blend is different. We start off by taking you through a series of questions.
          We want to know about your hair and what you want to improve. That will determine the blend.
        </p>

        <p>
          <strong>What's in the 3 courses</strong>.
        </p>

        <ul>
          <li>
            <strong>Course 1</strong>. We'll deliver two blends to your door based on your goals and quetionnaire.
            We'll then get you to test them both.
          </li>
          <li>
            <strong>Course 2</strong>. The blend that worked the best, we'll send to you again. 
            Plus, you'll get another blend to test as we make further improvements.
          </li>
          <li>
            <strong>Course 3</strong>. We repeat the process in Course 2. 
            Our aim is to find the best blend for your hair.
          </li>
        </ul>

        <p class="heading">
          <strong>Why do we choose natural ingredients?</strong> After using chemical products for years ourselves,
          we became worried about how chemicals affected our scalp. But we still want healthy-looking
          hair.
          So we decided to look to natural ingredients.
        </p>

        <p>
          It turns out, natural oils and oil blends have been used for thousands of years
          to improve hair condition. We haven't invented anything new. We're merely
          using nature's ingredients.
        </p>

        <p>
          <strong>Is the program really only 30 days?</strong>
          We hope you see results instantly after first using our oil blends.
          But with each new course of blends, that process may take 30 to 90 days
          depending on how quickly you go through the oils.
        </p>


        <div v-if="!submitted">
          <h2 class="heading">
            Do you have any questions you'd like to ask us?
          </h2>
          <p>If so, ask us anything below.</p>
            <form @submit.prevent="signUp">
              <div class="pa1 mb-xxsmall bg-neutrall dark df maxw-xsuper bxsh-black">
                <div class="ff-mukta w-100">
                  <div class="bg-transparent">
                    <textarea v-model="text" class="fs-1 ff-spartan h4 bg-transparent bwa0 w-100 dark" />
                  </div>
                </div>
              </div>

              <div class="pa1 mb-xxsmall bg-neutrall dark df maxw-xsuper bxsh-black">
                <div class="ff-mukta w-100">
                  <div class="bg-transparent">
                    <input v-model="email" type="email" class="fs-1 ff-spartan bg-transparent bwa0 w-100 dark"
                      placeholder="Enter email..." />
                  </div>
                </div>
              </div>

              <span v-if="error" class="red">{{ errorMsg }}</span>

              <div class="pb1 pb2-m">
                <button type="submit" class="df justify-center items-center w-100 light bg-dark pa-xsmall pl2 pr2 bwa0 fwb ls1 lh1 fs-2 bxsh-black">
                  <span>Submit question</span>
                  <span class="ml-xsmall material-symbols-outlined">
                  send
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div v-else>
            <h2>Thank you for submitting a question.</h2>
            <p>
              We'll look to respond as soon as possible.
            </p>
          </div>

        <h2 class="heading">Or do you want to try our program?</h2>
      
        <p>If you're interested and genuinely want to be a case study for us, we'll
          be excited to bring you on board. Click to get invited to the program.</p>

        <nuxt-link to="/l/waiting-list" class="">
          <button type="submit" class="mb2 align-center df justify-center w-100 light bg-dark pa-xsmall pl2 pr2 bwa0 fwb ls1 lh1 fs-2 bxsh-black">
            <span class="df items-center">
              <span>Try our program</span>
              <span class="ml1 material-symbols-outlined">
                touch_app
              </span>
            </span>
          </button>
        </nuxt-link>

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
  [...document.querySelectorAll('.heading')]
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
      text: "Question. ",
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

      if (this.text == 'Question. ') {
        this.error = true
        this.errorMsg = "Sorry. Please submit a question."
        return false
      }

      if (!this.email) {
        this.error = true
        this.errorMsg = "Sorry. Your email is required to join the list"
        return false
      }

      try {
        await supabase.from("questions").insert({ 
          email: this.email,
          question: this.text,
          referred_url: window.location.href 
        });
        this.submitted = true
      } catch (e) {
        this.error = true
        this.errorMsg = "Sorry. We're having issues with our servers."
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