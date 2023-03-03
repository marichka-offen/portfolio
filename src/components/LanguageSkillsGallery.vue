<template>
  <div class="language-skills-gallery">
    <img :src="english" alt="Ukrainian" class="language-skills-gallery__skill" />

    <img :src="ukrainian" alt="Ukrainian" class="language-skills-gallery__skill" />
  </div>
</template>

<script setup lang="ts">
  import english from '@/assets/icons/english.svg'
  import ukrainian from '@/assets/icons/ukrainian.svg'
</script>

<style>
  .language-skills-gallery {
    @apply flex
        gap-8;
  }
  .language-skills-gallery__skill {
    @apply rounded-md
    h-12
    w-16
    object-cover;
  }
</style>
