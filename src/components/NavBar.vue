<template>
  <!-- <div> -->
  <nav class="nav-bar" role="navigation" title="Main Navigation">
    <ul class="nav-bar__list" role="menu">
      <li role="menuitem">
        <router-link :to="{ name: 'home' }" aria-label="Home">
          Home
          <!-- <vue-feather type="home" class=""></vue-feather> -->
        </router-link>
      </li>
      <li role="menuitem">
        <router-link :to="{ name: 'work' }">Work</router-link>
      </li>
      <li role="menuitem">
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
      <!-- <li>
        <button v-if="!isDarkMode" class="nav-bar__color-mode-button">
          <vue-feather type="moon" class="" @click="isDarkMode = true"></vue-feather>
        </button>
        <button v-else class="nav-bar__color-mode-button">
          <vue-feather type="sun" class="" @click="isDarkMode = false"></vue-feather>
        </button>
      </li> -->
    </ul>
  </nav>
  <!-- <Teleport to="body">
      <MenuModal v-if="modal" @close="modal = false" />
    </Teleport> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
  import { media } from '@/compositions/useMedia'
  import { ref, watch } from 'vue'
  import MenuModal from '@/components/MenuModal.vue'

  const modal = ref(false)

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
  .nav-bar {
    /* @apply fixed
    w-max
    h-max
    bottom-8
    right-0
    left-0
    mx-auto
    z-50
    sm:z-30; */
  }

  /* .nav-bar__menu-button  */
  .nav-bar__list {
    @apply flex
    justify-between
    items-end
    gap-4
    /* @apply bg-zinc-400
    bg-opacity-10
    bg-blend-multiply
    flex
    justify-center
    items-center
    w-max
    gap-4
    backdrop-blur-sm
    rounded-full
    z-40
    shadow-md
    transition-all
    p-2
    sm:py-4
    sm:px-8
    dark:bg-opacity-60; */;
  }

  .nav-bar__router-link.nav-bar__link--active {
    @apply border-b-e-cyan
    border-b-4
    transition-all
    /* @apply bg-slate-700
    text-white
    rounded-full
    transition-all
    duration-300; */;
  }

  .nav-bar__color-mode-button,
  .nav-bar__router-link {
    @apply flex
    lowercase
    border-b-4
    border-b-transparent
    transition-all
    hover:border-e-magenta
    active:border-e-yellow;
    /* @apply flex
    hover:bg-slate-300
    hover:text-black
    rounded-full
    py-2
    px-4
    transition-all; */
  }

  .nav-bar__mobile-menu {
    /* @apply p-4
    hover:bg-slate-700
    hover:text-white
    rounded-full
    transition-all
    duration-300; */
  }

  .nav-bar__close-button {
    /* @apply z-50
    relative; */
  }
</style>
