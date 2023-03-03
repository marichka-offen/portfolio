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
    relative
    flex
    flex-col
    items-center
    dark:bg-[#1A1F2B]
    text-slate-900
    dark:text-white;
    min-height: 100vh;
  }

  .app_container {
    @apply max-w-5xl
    px-16
    pb-32;
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
