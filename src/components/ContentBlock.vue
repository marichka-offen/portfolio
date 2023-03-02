<template>
  <div class="content-block">
    <div class="content-block__header">
      <slot name="header" class="content-block__header" />
    </div>
    <div class="content-block__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .content-block {
    @apply flex
        flex-col
        gap-8;
  }

  .content-block__header {
    @apply text-4xl
    border-b-2
    border-zinc-500;
    font-family: 'Yanone Kaffeesatz', sans-serif;
  }

  .content-block__content {
    @apply flex
    flex-col
    gap-8;
    font-family: Helvetica Neue, Arial, sans-serif;
  }
</style>
