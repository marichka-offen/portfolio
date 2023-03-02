<template>
  <div class="website-header">
    <h1 class="website-header__title">Marichka</h1>

    <div>
      <button v-if="!isDarkMode">
        <vue-feather type="moon" class="" @click="isDarkMode = true"></vue-feather>
      </button>
      <button v-else>
        <vue-feather type="sun" class="" @click="isDarkMode = false"></vue-feather>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isDarkMode = ref(false)
</script>

<style>
  .website-header {
    @apply /* fixed */
    /* top-0 */
    w-full
    flex
    justify-between
    items-center
    p-8
    /* shadow-md */
    /* bg-slate-300 */
    backdrop-blur-sm
    bg-opacity-20
    z-40;
  }

  .website-header__title {
    @apply text-7xl
    text-slate-900;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    /* color: #f9f1cc;
    text-shadow: -15px 5px 20px #ced0d3;
    text-shadow: 5px 5px 0px #ffb650, 10px 10px 0px #ffd662, 15px 15px 0px #ff80bf,
      20px 20px 0px #ef5097, 25px 25px 0px #6868ac, 30px 30px 0px #90b1e0; */
  }
</style>
