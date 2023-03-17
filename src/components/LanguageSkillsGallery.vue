<template>
  <div class="language-skills-gallery">
    <div class="language-skills-gallery__skill">
      <SkillLogoWrapper color="#dc2626">
        <img :src="english" alt="English" class="language-skills-gallery__image" />
      </SkillLogoWrapper>
      <p class="text-[#dc2626]">English</p>
    </div>

    <div class="language-skills-gallery__skill">
      <SkillLogoWrapper color="#0284c7">
        <img :src="ukrainian" alt="Ukrainian" class="language-skills-gallery__image" />
      </SkillLogoWrapper>
      <p class="text-[#0284c7]">Ukrainian</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SkillLogoWrapper from '@/components/SkillLogoWrapper.vue'

  import english from '@/assets/icons/english.svg'
  import ukrainian from '@/assets/icons/ukrainian.svg'
</script>

<style>
  .language-skills-gallery {
    @apply flex
    flex-wrap
    justify-center
    items-center
    overflow-auto
    gap-8
    w-full;
  }
  .language-skills-gallery__skill {
    @apply flex
    flex-col
    gap-2
    justify-center
    items-center;
  }

  .language-skills-gallery__image {
    @apply rounded-xl
    h-12
    w-16
    p-1
    object-cover;
  }
</style>
