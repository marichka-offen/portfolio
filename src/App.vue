<template>
  <div class="app">
    <div class="app_container">
      <WebsiteHeader />
      <NavBar class="app__nav-bar" />
      <router-view v-slot="{ Component }">
        <Transition name="slide" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue'
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
    sm:w-4/5
    sm:h-4/5
    rounded-xl
    drop-shadow-2xl
    bg-white
    p-8
    bg-opacity-95
    max-w-screen-xl;
    z-index: 999;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease-out;
  }
</style>
