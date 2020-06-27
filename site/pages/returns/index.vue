<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <h5 class="fs-1 lh0 fwb mb1 tfu layout o-70 fs1 ls1">
          Problem with your order?
        </h5>
      </div>
    </div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata-m">
          At Laazara, we work hard to ensure all our customers are happy with our products. But we
          understand issues can arise and we are here to help.
        </p>
      </div>
    </div>

    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au">
      <div class="maxw-super">
        <p class="mb2 neutrald">
          Get in touch by sending us a email to
          <a class="actived tdx" target="_blank" href="mailto:inquiries@laazara.com"
            >inquiries@laazara.com</a
          >.
        </p>
        <p class="mb2">
          Alternatively, you can direct message us on Instagram at
          <a class="actived tdx" target="_blank" href="https://www.instagram.com/laazara_uk/"
            >@laazara_uk</a
          >. For more ways to get in touch, visit our contact page.
        </p>
        <h5 class="fs0 lh0 fwb mb1 neutrald ff-prata-m fs1 ls1 mt4">Return Policy</h5>
        <p class="mb2">
          There are no returns or refunds accepted for hair oil due to hygiene reasons.
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
        title: 'Return policy',
        description: 'Our simple return policy.'
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
