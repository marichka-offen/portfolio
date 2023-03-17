<template>
  <div class="skill-logo-wrapper">
    <slot>
      <img :src="image" :alt="altText" class="skill-logo-wrapper__image" />
    </slot>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, toRefs } from 'vue'

  const props = defineProps<{
    image?: string
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
    @apply h-10
    w-10
    rounded-full
    flex
    items-center
    justify-center
    dark:bg-[#586F7C]
    border-2
    sm:w-20
    sm:h-20;
    border-color: v-bind(backgroundColor);
  }

  .skill-logo-wrapper__image {
    @apply p-2 
    object-contain
    sm:p-4;
  }
</style>
