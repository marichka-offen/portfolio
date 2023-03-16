<template>
  <div class="website-header">
    <div class="website-header__title">M.</div>

    <NavBar />
    <!-- <ul class="" role="menu">
      <li role="menuitem">
        <router-link :to="{ name: 'home' }" class="" aria-label="Home">
          <vue-feather type="home" class=""></vue-feather>
        </router-link>
      </li>
      <li role="menuitem">
        <router-link :to="{ name: 'work' }" class="">Work</router-link>
      </li>
      <li role="menuitem">
        <router-link :to="{ name: 'contact' }" class="">Contact</router-link>
      </li>
      <li>
        <button v-if="!isDarkMode">
          <vue-feather type="moon" class="" @click="isDarkMode = true"></vue-feather>
        </button>
        <button v-else>
          <vue-feather type="sun" class="" @click="isDarkMode = false"></vue-feather>
        </button>
      </li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import NavBar from './NavBar.vue'

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
  @import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap');

  .website-header {
    @apply w-full
    flex
    justify-between
    /* items-center */
    /* p-8; */;
  }

  .website-header__title {
    @apply text-6xl
    relative;
    font-family: 'Nothing You Could Do', cursive;
    line-height: 0.6;
  }
</style>
