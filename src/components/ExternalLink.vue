<template>
  <div class="external-link" :class="glitchEffect ? 'external-link--glitched' : ''">
    <a :href="link" target="_blank" class="external-link__link">{{ text }}</a>
    <vue-feather type="external-link" size="16"></vue-feather>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  defineProps<{
    link: string
    text: string
    glitchEffect?: boolean
  }>()

  const randomTime = computed(() => {
    const number = Math.floor(Math.random() * 1500) + 500
    return `${number}ms`
  })
</script>

<style>
  .external-link {
    @apply flex
      items-center
      gap-1;
  }

  .external-link--glitched {
    @apply relative
    text-2xl
    font-light;
    text-shadow: 2px 0 0 #4dd0e1, -0.5px -1.5px 0 #fc00ff, 0.5px 1.5px 0 #fef08a;
    animation: glitch 0.5s infinite;
    animation-delay: v-bind(randomTime);
  }

  @keyframes glitch {
    0% {
      text-shadow: 2px 0 0 #4dd0e1, -0.5px -1.5px 0 #fc00ff, 0.5px 1.5px 0 #fef08a;
    }
    15% {
      text-shadow: 2px 0 0 #4dd0e1, -0.5px -1.5px 0 #fc00ff, 0.5px 1.5px 0 #fef08a;
    }
    16% {
      text-shadow: -2px -0.5px 0 #4dd0e1, 0.5px 1px 0 #fc00ff, -2px -2px 0 #fef08a;
    }
    49% {
      text-shadow: -2px -0.5px 0 #4dd0e1, 0.5px 1px 0 #fc00ff, -2px -2px 0 #fef08a;
    }
    50% {
      text-shadow: 2px 1px 0 #4dd0e1, 0.5px 0 0 #fc00ff, 0 -1.5px 0 #fef08a;
    }
    99% {
      text-shadow: 2px 1px 0 #4dd0e1, 0.5px 0 0 #fc00ff, 0 -1.5px 0 #fef08a;
    }
    100% {
      text-shadow: -2px 0 0 #4dd0e1, -0.5px -1.5px 0 #fc00ff, -1.5px -0.5px 0 #fef08a;
    }
  }
</style>
