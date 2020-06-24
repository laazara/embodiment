<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <h5 class="fs-1 lh0 fwb mb3 tfu layout o-70 ff-abril fs1 ls1">Contact</h5>
        <p
          class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata"
        >If you have any questions or problems regarding an order please get in touch.</p>
      </div>
    </div>

    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <ul class="fs1 lh1 df-m fw2">
        <li class="mr2 mb2">
          <p class="fwb">Email</p>
          <p>
            <a
              target="_blank"
              class="dark tdx"
              title="Email inquiry to Laazara"
              href="mailto:inquiries@laazara.com"
            >inquiries@laazara.com</a>
          </p>
        </li>
        <li>
          <p class="fwb">Opening</p>
          <p>Monday, Wednesday, Thursday &amp; Friday.</p>
          <p>10am - 5.30pm</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seo: {
        title: 'Contact'
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
        }
      ]
    }
  }
}
</script>
