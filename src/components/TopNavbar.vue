<template>
  <div>
    <nav class="top-navbar">
      <h1 class="bg-teal-500 uppercase">Marichka</h1>

      <ul>
        <li>Home (icon)</li>
        <li>About</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const bob = ref()
</script>

<style>
  .top-navbar {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
</style>
