<template>
  <nav class="nav-bar">
    <ul class="nav-bar__list">
      <li class="nav-bar__router-link">
        <router-link :to="{ name: 'home' }">Home (icon)</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'experience' }">Experience</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const bob = ref()
</script>

<style>
  .nav-bar {
    @apply absolute
    w-max
    h-max
    bottom-8
    right-0
    left-0
    mx-auto;
  }

  .nav-bar__list {
    @apply bg-zinc-400
    bg-opacity-10
    bg-blend-multiply
    flex
    justify-center
    items-center
    w-max
    gap-4
    backdrop-blur-sm
    py-4
    px-8
    rounded-full
    z-50
    shadow-md
    transition-all;
  }

  .nav-bar__link--active {
    @apply bg-slate-700
    text-white
    py-2
    px-4
    rounded-full
    transition-all
    duration-300;
  }
</style>
