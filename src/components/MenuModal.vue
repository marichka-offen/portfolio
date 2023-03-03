<template>
  <transition name="slide-down">
    <nav class="menu-modal" role="navigation" title="Mobile Navigation">
      <ul class="menu-modal__list" role="menu">
        <li role="menuitem">
          <router-link
            :to="{ name: 'home' }"
            class="menu-modal__router-link"
            aria-label="Home"
            @click="close"
          >
            <vue-feather type="home" class="menu-modal__router-link-icon"></vue-feather>
          </router-link>
        </li>
        <li role="menuitem">
          <router-link :to="{ name: 'work' }" class="menu-modal__router-link" @click="close">
            Work
          </router-link>
        </li>
        <li role="menuitem">
          <router-link :to="{ name: 'contact' }" class="menu-modal__router-link" @click="close">
            Contact
          </router-link>
        </li>
      </ul>
      <button @click="close" class="menu-modal__close-button" @keydown.enter="close">
        <vue-feather type="x-circle" class="menu-modal__close-button--icon"></vue-feather>
      </button>
    </nav>
  </transition>
</template>

<script setup lang="ts">
  const emit = defineEmits(['close'])

  const close = () => {
    emit('close')
  }
</script>

<style>
  .menu-modal {
    @apply bg-slate-100
    w-screen
    h-screen
    flex
    justify-center
    items-center
    fixed
    top-0
    z-40
    sm:hidden;
  }

  .menu-modal__list {
    @apply z-40
    text-2xl
    flex
    flex-col
    gap-6
    items-center;
  }

  .menu-modal__router-link {
    @apply py-2
    px-4
    rounded-full
    transition-all
    duration-300;
  }

  .menu-modal__router-link.nav-bar__link--active {
    @apply bg-slate-700
    text-white;
  }

  .menu-modal__router-link:hover {
    @apply bg-slate-300
    text-black;
  }

  .menu-modal__router-link:focus {
    @apply bg-slate-400
    text-white;
  }

  .menu-modal__close-button {
    @apply bg-zinc-400
    bg-opacity-10
    bg-blend-multiply
    flex
    rounded-full
    shadow-md
    p-2
    fixed
    bottom-8;
  }

  .menu-modal__close-button--icon {
    @apply p-4
    hover:bg-slate-700
    hover:text-white
    rounded-full
    transition-all
    duration-300;
  }

  .slide-down-enter {
    opacity: 0;
  }

  .slide-down-enter.menu-modal.menu-modal__list {
    opacity: 0.4;
    transform: translateY(-25%) rotateX(35deg);
  }

  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: opacity 0.5s;
  }
  .slide-down-enter-active.menu-modal.menu-modal__list,
  .slide-down-leave-active.menu-modal.menu-modal__list {
    transition: transform 0.5s, opacity 0.5s;
  }

  .slide-down-enter-to.menu-modal.menu-modal__list {
    opacity: 1;
    transform: rotateX(0deg);
  }

  .slide-down-leave-to {
    opacity: 0;
  }
  .slide-down-leave-to.menu-modal.menu-modal__list {
    transform: translateY(25%) rotateX(-35deg);
  }
</style>
