require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET)

const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 200, // <-- Important!
      headers,
      body: 'This was not a POST request!'
    }
  }
  console.log(event)

  //Parse the body contents into an object.
  let data
  try {
    data = JSON.parse(event.body)
  } catch (e) {
    data = {}
  }

  console.log(data)

  // Make sure we have all required data. Otherwise, get outta here.
  if (!data.idempotency_key) {
    const message = 'Required information is missing!'

    console.error(message)

    return {
      statusCode,
      headers,
      body: JSON.stringify({
        status: 'failed',
        message
      })
    }
  }

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ['GB']
    },
    payment_method_types: ['card'],
    line_items: [{
      price: 'price_1GtqdGHGmv6UKL1quczcAztb',
      quantity: data.quantity || 1
    }],
    mode: 'payment',
    success_url: 'https://embodimentshop.com/thankyou?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://embodimentshop.com'
  }, {
    idempotencyKey: data.idempotency_key
  })

  return {
    statusCode,
    headers,
    body: JSON.stringify(session)
  }
}
