<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <h5 class="fs-2 lh0 fwb mb1 tfu layout ff-inria-serif fs1 ls1">Privacy policy</h5>
      </div>
    </div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata-m">
          Your trust is important to us.
          <br />Here's why, how and when we collect your data.
        </p>
      </div>
    </div>

    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au">
      <div class="maxw-super s-article">
        <h2>Why We Collect Your Data</h2>
        <p>We want to give you the best possible experience with Laazara.</p>
        <p>
          For example, the data we hold about you helps us personalise our recommendations for
          products, services and promotions.
        </p>
        <h2>How We Collect Your Data</h2>
        <p>
          We do this in a number of ways. Including, when you share your information with us to make
          an online purchase or create an account. Be assured, we treat your data with the utmost
          care. And take appropriate steps to protect it.
        </p>
        <h2>When Will We Share Your Data</h2>
        <p>
          Sometimes we will share data with third parties. This help us to provide a better service
          for you. Some examples might be, giving your address to a courier, so they can deliver
          your order. Or to another company who are supplying you with a service.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seo: {
        title: 'Privacy policy',
        description: 'A simple privacy policy on how we use your data.'
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
