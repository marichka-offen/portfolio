<template>
  <div class="side-scroll-nav">
    <vue-feather
      type="arrow-up-circle"
      size="48"
      class="side-scroll-nav__arrow"
      @click="moveUp"
    ></vue-feather>

    <div v-for="index in totalPages">
      <div
        @click="goToSet(index)"
        class="side-scroll-nav__dot"
        :class="route.query.set === `skill-set-${index}` ? 'opacity-100' : 'opacity-25'"
      ></div>
    </div>

    <vue-feather
      type="arrow-down-circle"
      size="48"
      class="side-scroll-nav__arrow"
      @click="moveDown"
    ></vue-feather>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'

  const props = defineProps<{
    totalPages: number
  }>()

  const route = useRoute()
  const current = ref(0)
  const slideDirection = ref('slide-up')

  const emit = defineEmits<{
    (e: 'updateDirection', value: string): void
  }>()

  const moveDown = () => {
    slideDirection.value = 'slide-down'
    emit('updateDirection', slideDirection.value)

    current.value = current.value + 1

    if (current.value > props.totalPages) {
      current.value = 1
    }

    router.push({ path: '/skills', query: { set: `skill-set-${current.value}` } })
  }

  const moveUp = () => {
    slideDirection.value = 'slide-up'
    emit('updateDirection', slideDirection.value)

    current.value = current.value - 1

    if (current.value <= 0) {
      current.value = props.totalPages
    }

    router.push({ path: '/skills', query: { set: `skill-set-${current.value}` } })
  }

  const goToSet = (index: number) => {
    if (index < current.value) {
      slideDirection.value = 'slide-up'
      emit('updateDirection', slideDirection.value)
    } else {
      slideDirection.value = 'slide-down'
      emit('updateDirection', slideDirection.value)
    }

    current.value = index
    router.push({ path: '/skills', query: { set: `skill-set-${index}` } })
  }
</script>

<style>
  .side-scroll-nav {
    @apply flex
    flex-col
    justify-center
    items-center
    gap-4
    /* absolute to the app-container */
    absolute
    right-10
    top-1/3
    /* w-min
    -mt-[400px]
    -mr-10
    min-h-[1300px]; */;
  }

  .side-scroll-nav__dot {
    @apply w-4
    h-4
    rounded-full
    cursor-pointer
    bg-e-cyan
    transition-all
    active:bg-e-magenta
    active:opacity-100;
  }

  .side-scroll-nav__arrow {
    @apply cursor-pointer
    text-e-cyan
    transition-all
    active:text-e-magenta;
  }
</style>
