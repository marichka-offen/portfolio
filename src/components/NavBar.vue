<template>
  <nav class="nav-bar" role="navigation" title="Main Navigation">
    <ul class="nav-bar__list" role="menu">
      <li role="menuitem">
        <router-link class="nav-bar__link" :to="{ name: 'home' }" aria-label="Home">
          Home
        </router-link>
      </li>
      <li role="menuitem">
        <router-link class="nav-bar__link" :to="{ name: 'work' }">Work</router-link>
      </li>
      <li role="menuitem">
        <router-link class="nav-bar__link" :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
  .nav-bar__list {
    @apply flex
      justify-between
      items-end
      gap-4;
  }

  .nav-bar__link--active {
    @apply border-b-e-cyan
      border-b-4
      transition-all;
  }

  .nav-bar__link {
    @apply flex
      lowercase
      border-b-4
      border-b-transparent
      transition-all
      hover:border-e-magenta
      active:border-e-yellow;
  }
</style>
