import {
  loadStripe
} from '@stripe/stripe-js'
import {
  v4 as uuidv4
} from 'uuid'
import axios from 'axios'

const stripeKey =
  'pk_test_51GtqPgHGmv6UKL1qavwmKksN29VAts3fhdkQumMGzOQNaQeYRSTneqCVHbGzOYmbuXJSv6f9Vv2kIlrvxybTRlAg00UtqCG6Xs'

let stripe

export const state = () => ({
  idempotencyKey: uuidv4()
})

export const mutations = {
  init(state, {
    stripe
  }) {
    state.stripe = stripe
  }
}

export const actions = {
  async init({
    commit
  }) {
    if (stripe) {
      return
    }
    stripe = await loadStripe(stripeKey)
    commit('init', {
      stripe
    })
  },

  async enterGateway() {
    const response = await axios.post(this.$env.APIBASE, {
      idempotency_key: this.state.stripe.idempotencyKey
    })
    const {
      error
    } = await stripe.redirectToCheckout({
      sessionId: response.data.id
    })
  }
}
