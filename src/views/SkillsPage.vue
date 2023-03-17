<template>
  <div class="skills-page">
    <div class="skills-page__skills-container">
      <TransitionGroup :name="slideDirection">
        <div class="skills-page__skill-set" v-if="route.query.set === 'skill-set-1'">
          These are the skills that I have acquired through practical experience gained in
          professional settings, as well as through self-directed study driven by personal interest.
          <SkillsGallery />
        </div>

        <div class="skills-page__skill-set" v-if="route.query.set === 'skill-set-2'">
          2 Developing skills
        </div>

        <div class="skills-page__skill-set" v-if="route.query.set === 'skill-set-3'">
          3 Languages
        </div>
      </TransitionGroup>
    </div>

    <div class="skills-page__nav">
      <vue-feather
        type="arrow-up-circle"
        size="48"
        class="skills-page__arrow"
        @click="moveUp"
      ></vue-feather>

      <div v-for="index in totalPages">
        <div
          @click="goToSet(index)"
          class="skills-page__nav-dot"
          :class="route.query.set === `skill-set-${index}` ? 'opacity-100' : 'opacity-25'"
        ></div>
      </div>

      <vue-feather
        type="arrow-down-circle"
        size="48"
        class="skills-page__arrow"
        @click="moveDown"
      ></vue-feather>
    </div>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import SkillsGallery from '@/components/SkillsGallery.vue'

  const current = ref(0)
  const totalPages = ref(3)
  const route = useRoute()

  const slideDirection = ref('slide-up')

  const moveDown = () => {
    slideDirection.value = 'slide-down'
    current.value = current.value + 1

    if (current.value > totalPages.value) {
      current.value = 1
    }

    router.push({ path: '/skills', query: { set: `skill-set-${current.value}` } })
  }

  const moveUp = () => {
    slideDirection.value = 'slide-up'
    current.value = current.value - 1

    if (current.value <= 0) {
      current.value = totalPages.value
    }

    router.push({ path: '/skills', query: { set: `skill-set-${current.value}` } })
  }

  const goToSet = (index: number) => {
    if (index < current.value) {
      slideDirection.value = 'slide-up'
    } else {
      slideDirection.value = 'slide-down'
    }

    current.value = index
    router.push({ path: '/skills', query: { set: `skill-set-${index}` } })
  }
</script>

<style>
  .skills-page__skill-set {
    @apply w-full
    h-full
    flex
    flex-col
    gap-8
    text-center
    p-4;
  }

  .skills-page {
    @apply w-full
    h-full
    flex
    justify-center
    items-center
    gap-4;
  }

  .skills-page__skills-container {
    @apply w-11/12
    h-full;
  }

  .skills-page__nav {
    @apply flex
    flex-col
    justify-center
    items-center
    gap-4
    w-1/12;
  }

  .skills-page__nav-dot {
    @apply w-4
    h-4
    rounded-full
    cursor-pointer
    bg-e-cyan
    transition-all
    active:bg-e-magenta
    active:opacity-100;
  }

  .skills-page__arrow {
    @apply cursor-pointer
    text-e-cyan
    transition-all
    active:text-e-magenta;
  }

  .slide-up-enter-active {
    transition: all 0.8s ease-out 0.5s;
  }

  .slide-up-leave-active {
    transition: all 0.5s ease-out;
  }

  .slide-up-enter-from {
    transform: translateY(-30px);
    opacity: 0;
  }

  .slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }

  .slide-down-enter-active {
    transition: all 0.8s ease-out;
  }
  .slide-down-leave-active {
    transition: all 0.5s ease-out;
  }

  .slide-down-enter-from {
    transform: translateY(100%);
    opacity: 0;
  }
  .slide-down-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }
</style>
