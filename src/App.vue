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
    text-base
    sm:text-lg
    box-border
    lg:p-8;
    font-family: 'Roboto', sans-serif;
  }

  .app_container {
    @apply sm:w-full
    h-full
    lg:max-w-screen-xl
    lg:max-h-[1024px]

    bg-white
    bg-opacity-80
    drop-shadow-2xl
    rounded-xl
    
    grid
    gap-16
    p-4
    sm:p-16
    sm:pt-0
    pt-8

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
