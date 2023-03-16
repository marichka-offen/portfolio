<template>
  <div class="thumbnail-modal" @click="close">
    <div class="thumbnail-modal__frame">
      <img :src="imageLink" :alt="alt" class="thumbnail-modal__image" />
      <p>{{ alt }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    imageLink: string
    alt: string
  }>()
  const emit = defineEmits(['close'])

  const close = () => {
    emit('close')
  }
</script>

<style>
  .thumbnail-modal {
    @apply w-screen
    h-screen
    flex
    justify-center
    items-center
    fixed
    top-0
    z-40;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .thumbnail-modal__frame {
    @apply flex
    flex-col
    gap-4
    items-center
    bg-white
    rounded-md
    p-2
    pb-6
    w-11/12
    overflow-y-auto
    shadow-xl;
  }

  .thumbnail-modal__image {
    @apply w-full;
  }
</style>
