<template>
  <div class="image-wrapper">
    <img :src="image" alt="random" class="image-wrapper__image" />
  </div>
</template>

<script setup lang="ts">
  import { ref, toRefs } from 'vue'

  const props = defineProps<{
    image: string
    gradientColors: string[]
    dimensions: string
    fit: string
    radius?: boolean
  }>()

  const lighterColor = ref(props.gradientColors[0])
  const darkerColor = ref(props.gradientColors[1])
  const dimensions = ref(`${props.dimensions}px`)
  const { image, fit } = toRefs(props)
  const radiusSize = ref(props.radius ? '100%' : '0%')
</script>

<style>
  :root {
    --image-wrapper-border: 3px;
    --image-wrapper-distance: 50%;
  }
  .image-wrapper {
    @apply relative
    p-8
    w-max
    mb-1;
  }
  .image-wrapper::after {
    @apply rounded-full
    block
    absolute
    top-0
    left-0
    h-full
    w-full
    opacity-80;
    content: '';
    background: conic-gradient(
      from 30deg,
      v-bind(lighterColor),
      v-bind(darkerColor) var(--image-wrapper-distance),
      transparent var(--image-wrapper-distance)
    );
    -webkit-mask: radial-gradient(
      farthest-side,
      transparent calc(100% - var(--image-wrapper-border)),
      #fff calc(100% - var(--image-wrapper-border) + 1px)
    );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - var(--image-wrapper-border)),
      #fff calc(100% - var(--image-wrapper-border) + 1px)
    );
  }

  .image-wrapper__image {
    @apply block;
    object-fit: v-bind(fit);
    width: v-bind(dimensions);
    height: v-bind(dimensions);
    border-radius: v-bind(radiusSize);
  }
</style>
