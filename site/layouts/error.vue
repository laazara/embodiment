<template>
  <div class="maxw-100 x-hidden ff-mukta fw4 fs0 lh0 fw2-m mt2 mt4-m mb2 mb4-m">
    <div class="maxw-xxxsuper ml-au mr-au pl2 pr2 s-article">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      You are welcome, however to return back to the <nuxt-link to="/">Home page</nuxt-link>.
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
