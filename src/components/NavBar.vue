<template>
  <div>
    <nav class="nav-bar">
      <ul class="nav-bar__list" v-if="media.sm">
        <li>
          <router-link :to="{ name: 'home' }" class="nav-bar__router-link" aria-label="Home">
            <vue-feather type="home" class="nav-bar__router-link-icon"></vue-feather>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }" class="nav-bar__router-link">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'experience' }" class="nav-bar__router-link"
            >Experience</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'contact' }" class="nav-bar__router-link">Contact</router-link>
        </li>
      </ul>
      <button class="nav-bar__menu-button" v-if="!media.sm" @click="modal = true">
        <vue-feather type="menu" class="nav-bar__mobile-menu"></vue-feather>
      </button>
    </nav>
    <MenuModal v-if="modal" @close="modal = false" />
  </div>
</template>

<script setup lang="ts">
  import { media } from '@/compositions/useMedia'
  import { ref } from 'vue'
  import MenuModal from '@/components/MenuModal.vue'

  const modal = ref(false)
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

  .nav-bar__list,
  .nav-bar__menu-button {
    @apply bg-zinc-400
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
    sm:px-8;
  }

  .nav-bar__router-link.nav-bar__link--active {
    @apply bg-slate-700
    text-white
    rounded-full
    transition-all
    duration-300;
  }

  .nav-bar__router-link {
    @apply flex
    py-2
    px-4;
  }

  .nav-bar__mobile-menu {
    @apply p-4
    hover:bg-slate-700
    hover:text-white
    rounded-full
    transition-all
    duration-300;
  }
</style>
