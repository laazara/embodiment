<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <h5 class="fs-1 lh0 fwb mb1 tfu layout ff-inria-serif fs1 ls1">Shipping</h5>
      </div>
    </div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper">
        <p class="fs1 lh1 fs3-m lh3-m mb2-m neutrald ff-prata-m">
          Due to COVID19, we can not guarentee that customers won't face delivery delays. We
          appreciate your patience during this time.
        </p>
      </div>
    </div>

    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au">
      <div class="maxw-super">
        <p class="mb2 neutrald">
          We aim to dispatch orders within 1-3 days of receiving your order. This excludes orders
          made on
          <strong>public holidays</strong>, <strong>Saturdays</strong> and <strong>Sundays</strong>.
        </p>
        <p class="mb2">
          Due to COVID19, please be aware our dispatch time may take longer than normal. When your
          order has been shipped you will recieve a shipping confirmation email.
        </p>
        <p class="mb2">
          Delivery Time is 3 - 5 working days. Delivery delays apply due to COVID19. We ask that
          customers please allow additional time for your parcel to arrive.
        </p>

        <h5 class="fs0 lh0 fwb mb1 neutrald ff-prata-m fs1 ls1 mt4">Important</h5>
        <p class="mb2">
          We are unable to amend orders once you complete checkout. When completing your order we
          advise customers to be sure the shipping address is correct. We are unable to replace or
          refund orders that are lost due to an incorrect address.
        </p>
        <p class="mb2">
          If your package is returned back to us due to an incorrect address, you will have to pay
          an additional shipping fee to have it sent back out.
        </p>
        <p class="mb2">
          If you want to cancel or amend your order, contact costomer care within 15 minutes of the
          order being placed. And we will do our best to grant your request. Please note, this
          option is not a guarantee, but we will do our best.
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
        title: 'Shipping',
        description: 'We ship Embodiment via Royal Mail directly to door. Learn more here.'
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
