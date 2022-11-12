<template>
    <nuxt-link :to="href">
        <button
            class="bg-black light pa-xxxsmall pl2 pr2 bwa0 fw4 ls1 lh1 fs-2 bxsh-black"
        >Shop</button>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        href: String
    }
}
</script>