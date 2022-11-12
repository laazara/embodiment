<template>
    <button
        v-on:click="$store.dispatch('stripe/enterGateway')"
        class="db w-100 light bg-dark pa-xxxsmall pl2 pr2 bwa0  fwb ls1 lh1 fs-2"
    >
        Checkout
    </button>
</template>