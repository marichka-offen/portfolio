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
        gap-4;
  }

  .content-block__header {
    @apply text-2xl
    border-b-2
    border-zinc-500;
  }
</style>
