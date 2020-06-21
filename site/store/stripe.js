import {
  loadStripe
} from '@stripe/stripe-js'
import {
  v4 as uuidv4
} from 'uuid'
import axios from 'axios'

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
    stripe = await loadStripe(this.app.context.env.STRIPE_KEY)
    commit('init', {
      stripe
    })
  },

  async enterGateway() {
    const response = await axios.post(this.app.context.env.APIBASE, {
      idempotency_key: this.state.stripe.idempotencyKey
    })
    const {
      error
    } = await stripe.redirectToCheckout({
      sessionId: response.data.id
    })
  }
}
