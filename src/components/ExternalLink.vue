<template>
  <div class="external-link">
    <a :href="link" target="_blank">{{ text }}</a>
    <vue-feather type="external-link" size="16"></vue-feather>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    link: string
    text: string
  }>()
</script>

<style>
  .external-link {
    @apply flex
    items-center
    gap-1;
  }
</style>
