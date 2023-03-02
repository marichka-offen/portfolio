<template>
  <div>
    <nav class="nav-bar" role="navigation" title="Main Navigation">
      <ul class="nav-bar__list" v-if="media.sm" role="menu">
        <li role="menuitem">
          <router-link :to="{ name: 'home' }" class="nav-bar__router-link" aria-label="Home">
            <vue-feather type="home" class="nav-bar__router-link-icon"></vue-feather>
          </router-link>
        </li>
        <li role="menuitem">
          <router-link :to="{ name: 'about' }" class="nav-bar__router-link">About</router-link>
        </li>
        <li role="menuitem">
          <router-link :to="{ name: 'experience' }" class="nav-bar__router-link"
            >Experience</router-link
          >
        </li>
        <li role="menuitem">
          <router-link :to="{ name: 'contact' }" class="nav-bar__router-link">Contact</router-link>
        </li>
      </ul>
      <button class="nav-bar__menu-button" v-if="!media.sm && !modal" @click="modal = true">
        <vue-feather type="menu" class="nav-bar__mobile-menu"></vue-feather>
      </button>
    </nav>
    <Teleport to="body">
      <MenuModal v-if="modal" @close="modal = false" />
    </Teleport>
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
    @apply fixed
    w-max
    h-max
    bottom-8
    right-0
    left-0
    mx-auto
    z-50
    sm:z-30;
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
    hover:bg-slate-300
    hover:text-black
    rounded-full
    py-2
    px-4
    transition-all;
  }

  .nav-bar__mobile-menu {
    @apply p-4
    hover:bg-slate-700
    hover:text-white
    rounded-full
    transition-all
    duration-300;
  }

  .nav-bar__close-button {
    @apply z-50
    relative;
  }
</style>
