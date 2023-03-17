<template>
  <nav class="nav-bar" role="navigation" title="Main Navigation">
    <ul class="nav-bar__list" role="menu">
      <li role="menuitem">
        <router-link class="nav-bar__link" :to="{ name: 'home' }" aria-label="Home">
          Home
        </router-link>
      </li>
      <li role="menuitem">
        <router-link class="nav-bar__link" :to="{ name: 'skills' }">Skills</router-link>
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

  .nav-bar__link.nav-bar__link--active {
    background-image: linear-gradient(#4dd0e1, #4dd0e1);
    background-size: 100% 5px;
    background-position: 100% 100%;
    background-repeat: no-repeat;
  }

  .nav-bar__link.nav-bar__link--active:hover {
    background-size: 100% 5px;
    transition: none;
  }

  .nav-bar__link {
    @apply flex
    lowercase
    bg-no-repeat;
    background-image: linear-gradient(transparent calc(65% - 5px), #ec407a 3px);
    background-size: 0;
    transition: 0.2s ease-out;
  }

  .nav-bar__link:hover {
    background-size: 100%;
  }

  .nav-bar__link:active {
    background-image: linear-gradient(transparent calc(65% - 5px), #fef08a 3px);
  }
</style>
