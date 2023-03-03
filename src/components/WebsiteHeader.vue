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
  import { ref, watch } from 'vue'

  const isDarkMode = ref(false)

  watch(isDarkMode, (newVal) => {
    if (newVal) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
</script>

<style>
  .website-header {
    @apply w-full
    flex
    justify-between
    items-center
    py-10;
  }

  .website-header__title {
    @apply text-6xl
    relative;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    line-height: 0.6;
  }
</style>
