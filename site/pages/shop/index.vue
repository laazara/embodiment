<template>
    <div>

        <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
            <div class="maxw-xsuper">
                <h5 class="fs-2 lh0 fwb tfu layout ff-inria-serif fs1 ls1">Shop</h5>
            </div>
        </div>

        <div class="maxw-xxxsuper ml-au mr-au">
            <div class="df wrap nowrap-m pa2 pt1 relative items-start-m">
                <div class="w-100 w-50-m mr2-m h-xxbig h-xxxbig-m relative mb2 shrink-20">
                    <img
                        alt="Embodiment Shop natural hair oil bottle"
                        src="~assets/images/embodiment-flowers-natural-hair-oil12.jpeg"
                        class="absolute t0 l0 w-100 h-100 of-cover bxsh-black"
                    />
                </div>
                <div class="fo1 fo2-m pa2-m pl4-m pr4-m w-50-m relative">
                    <div class="df items-start">
                        <div class="bg-active white lh4 dib fwb pa1 fs2 mln4 mtn6 mtn2-m mb2 mr2">
                            £30
                        </div>
                        <div>
                            <div class="fs0 ls1 lh1 layout o-70 tfu mb1 ff-inria-serif mtn3-m">
                                <h1>Embodiment Hair Oil 100mls</h1>
                            </div>
                            <p
                                class="mb2 maxw-xxbig"
                            >2x 50ml Embodiment Hair Oil Bottles with pipette for easier application.
                            </p>
                        </div>
                    </div>
                    <div class="df items-center mb2">
                        <div class="mtn1">
                            <a target="_blank" href="https://uk.trustpilot.com/review/laazara.com" class="db">
                                <img alt="Trustpilot logo" class="h2 o-80" src="~/assets/images/trustpilot.png" />
                            </a>
                        </div>
                        <div class="ml-au mr1 tfu fs-3 active">
                            4 reviews
                        </div>
                        <div class="df items-center" style="margin-top: -4px;">
                            <img class="w1 h1 o-80" src="/images/star-24px.svg" />
                            <img class="w1 h1 o-80" src="/images/star-24px.svg" />
                            <img class="w1 h1 o-80" src="/images/star-24px.svg" />
                            <img class="w1 h1 o-80" src="/images/star-24px.svg" />
                            <div class="w1 h1 relative">
                                <img class="absolute w-100 h-100 o-80" src="/images/star-24px.svg" />
                                <div class="t0 r0 absolute w-50 h-100 bg-white"></div>
                            </div>
                        </div>
                    </div>

                    <div class=""><Cart></Cart></div>

                    <div class="mb2 fs-2 ttu text-right bg-orangexl pl1 pr1 df justify-center"><div>In&nbsp;stock</div></div>

                    <p>
                        Designed to <strong>strengthen</strong> the hair and create a <strong>shinier</strong>
                            appearance.
                        <br><br><strong>Ingredients:</strong> Almond, Olive, Castor, Jojoba, Rosemary, Teatree,
                            Absynnian, Baobab, Melon Seed.
                        <br><br><strong>Shipping</strong>. Free UK-wide. 3-5 day delivery times.
                        <br/><br/><strong>Refund Policy</strong>. We always want our people to be happy.
                        If that's not the case, we're happy to accept a refund within 30 days of purchase.
                        Please visit our <nuxt-link class="active tdx" to="/returns/">returns</nuxt-link> page.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cart from '../../components/Cart.vue'

export default {
    components: {
        Cart
    },
    jsonld() {
        return {
            "@context": "https://www.schema.org",
            "@type": "product",
            "brand": {
                "@type": "Brand",
                "name": "Embodiment Shop"
            },
            "name": "Embodiment",
            "image": [
                "https://embodimentshop.com/images/embodiment-flowers-natural-hair-oil1.jpeg"
            ],
            "description": "Designed to strengthen the hair and create a shinier appearance. 2x 50ml Embodiment Hair Oil Bottles with pipette for easier application.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "4"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://www.embodimentshop.com/shop/",
                "priceCurrency": "GBP",
                "price": "30.00",
                "availability": "https://schema.org/InStock",
                "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                        "@type": "MonetaryAmount",
                        "value": "0",
                        "currency": "GBP"
                    },
                    "shippingDestination": {
                        "@type": "DefinedRegion",
                        "addressCountry": "UK"
                    },
                    "deliveryTime": {
                        "@type": "ShippingDeliveryTime",
                        "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": "0",
                            "maxValue": "1"
                        },
                        "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": "3",
                            "maxValue": "5"
                        }
                    }
                }
            }
        }
    },
  head() {
    let title = 'Embodiment Hair Oil';
    let description = 'Designed to strengthen the hair and create a shinier appearance. 2x 50ml Embodiment Hair Oil Bottles with pipette for easier application.'
    return {
      title: title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://embodimentshop.com/images/embodiment-flowers-natural-hair-oil1.jpeg'
        },
      ]
    }
  }
}
</script>