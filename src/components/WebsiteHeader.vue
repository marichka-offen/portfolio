<template>
  <div class="website-header">
    <div class="website-header__title">Marichka</div>

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
    @apply w-full
    flex
    justify-between
    items-center
    p-8;
  }

  .website-header__title {
    @apply text-6xl
    text-slate-900
    relative;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    line-height: 0.6;
  }
</style>
