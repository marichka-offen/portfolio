<template>
  <div class="app">
    <div class="app_container">
      <WebsiteHeader />
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import WebsiteHeader from './components/WebsiteHeader.vue'
</script>

<style>
  .app {
    @apply w-full
    h-screen
    bg-no-repeat
    bg-cover
    flex
    justify-center
    items-center
    bg-background;
    font-family: 'Roboto', sans-serif;
  }

  .app_container {
    @apply w-full
    h-full
    rounded-none
    overflow-auto
    drop-shadow-2xl
    bg-white
    p-8
    max-w-screen-xl
    flex
    flex-col
    gap-12
    bg-opacity-60
    lg:bg-opacity-90
    lg:w-4/5
    lg:h-4/5
    lg:rounded-xl;
    z-index: 999;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease-out;
  }
</style>
