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
    bg-background
    text-xl;
    font-family: 'Roboto', sans-serif;
  }

  .app_container {
    @apply w-full
    h-full
    lg:max-w-screen-xl
    lg:max-h-[1024px]
    lg:m-8

    bg-white
    bg-opacity-80
    drop-shadow-2xl
    rounded-none
    lg:rounded-xl
    
    grid
    gap-16
    p-16
    pt-4

    overflow-auto
    z-50
    relative;
    grid-template-rows: 80px 1fr;
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
