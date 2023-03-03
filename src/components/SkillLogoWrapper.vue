<template>
  <div class="skill-logo-wrapper">
    <img :src="image" :alt="altText" class="skill-logo-wrapper__image" />
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
    --skill-logo-wrapper-border: 3px;
    --skill-logo-wrapper-distance: 50%;
  }
  .skill-logo-wrapper {
    @apply h-16
    w-16
    rounded-xl
    flex
    items-center
    justify-center
    dark:bg-[#586F7C];
    background-color: v-bind(backgroundColor);
  }

  .skill-logo-wrapper__image {
    @apply p-4 
    object-contain;
  }
</style>
