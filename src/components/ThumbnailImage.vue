<template>
  <div class="thumbnail-image" @click="openModal = true">
    <img :src="imageLink" :alt="alt" class="thumbnail-image__image" />

    <Teleport to="body">
      <ThumbnailModal
        v-if="openModal"
        @close="openModal = false"
        :imageLink="imageLink"
        :alt="alt"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import ThumbnailModal from '@/components/ThumbnailModal.vue'
  import { ref } from 'vue'

  defineProps<{
    imageLink: string
    alt: string
  }>()

  const openModal = ref(false)
</script>

<style>
  .thumbnail-image {
    @apply cursor-pointer;
  }

  .thumbnail-image__image {
    @apply w-52
    h-32
    border-8
    object-cover
    rounded-md
    shadow-md;
  }
</style>
