<template>
  <div class="image-wrapper">
    <img :src="image" :alt="altText" class="image-wrapper__image" />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, toRefs } from 'vue'

  const props = defineProps<{
    image: string
    color: string
  }>()

  const backgroundColor = ref(`${props.color}4d`)
  const image = ref(props.image)

  const altText = computed(() => {
    return `image of ${image.value?.split('/').pop()?.split('.').shift()}` || ''
  })
</script>

<style>
  :root {
    --image-wrapper-border: 3px;
    --image-wrapper-distance: 50%;
  }
  .image-wrapper {
    @apply h-16
    w-16
    rounded-xl
    flex
    items-center
    justify-center
    dark:bg-[#586F7C];
    background-color: v-bind(backgroundColor);
  }

  .image-wrapper__image {
    @apply p-4 
    object-contain;
  }
</style>
