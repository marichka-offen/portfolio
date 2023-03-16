<template>
  <div class="website-header">
    <div class="website-header__title">M.</div>

    <NavBar />
  </div>
</template>

<script setup lang="ts">
  import NavBar from './NavBar.vue'
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap');

  .website-header {
    @apply w-full
    flex
    justify-between;
  }

  .website-header__title {
    @apply text-6xl
    relative;
    font-family: 'Nothing You Could Do', cursive;
    line-height: 0.6;
    text-shadow: 3px 3px 0px rgba(77, 208, 225, 1), 10px 10px 0px rgba(233, 30, 98, 1),
      13px 15px 0px rgba(255, 255, 0, 1);
  }
</style>
