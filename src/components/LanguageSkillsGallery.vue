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

    <div class="language-skills-gallery__skill">
      <SkillLogoWrapper color="#eab308">
        <img :src="spanish" alt="Spanish" class="language-skills-gallery__image" />
      </SkillLogoWrapper>
      <p class="text-[#eab308]">Baby Spanish</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SkillLogoWrapper from '@/components/SkillLogoWrapper.vue'

  import english from '@/assets/icons/english.svg'
  import ukrainian from '@/assets/icons/ukrainian.svg'
  import spanish from '@/assets/icons/spanish.svg'
</script>

<style>
  .language-skills-gallery {
    @apply flex
    flex-wrap
    justify-center
    items-center
    gap-16
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
    @apply rounded-full
    h-8
    w-8
    sm:h-16
    sm:w-16
    p-1
    object-cover;
  }
</style>
