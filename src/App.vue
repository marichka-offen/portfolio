<template>
  <div class="app">
    <WebsiteHeader />
    <NavBar class="app__nav-bar" />
    <div class="app_container">
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
    @apply h-full
    w-full
    relative
    dark:bg-[#1A1F2B]
    text-slate-900
    dark:text-white;
  }

  .app_container {
    @apply h-full
    w-full
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
