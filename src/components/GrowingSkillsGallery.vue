<template>
  <div class="growing-skills-gallery">
    <div class="growing-skills-gallery__skill">
      <ImageWrapper :image="figma" color="#A259FF" />
      <div class="text-[#A259FF]">
        <ExternalLink link="https://zerotomastery.io/courses/learn-motion-design/" text="Figma" />
      </div>
    </div>
    <div class="growing-skills-gallery__skill">
      <ImageWrapper :image="python" color="#FFE052" />
      <div class="text-[#387EB8]">
        <ExternalLink link="https://zerotomastery.io/courses/learn-python/" text="Python" />
      </div>
    </div>
    <div class="growing-skills-gallery__skill">
      <ImageWrapper :image="threejs" color="#049EF4" />
      <div class="text-[#049EF4]">
        <ExternalLink link="https://threejs-journey.com" text="Three.js" />
      </div>
    </div>
    <div class="growing-skills-gallery__skill">
      <ImageWrapper :image="unity" color="#718ba8" />
      <div class="text-[#718ba8]">
        <ExternalLink link="https://zerotomastery.io/courses/learn-unity-bootcamp/" text="Unity" />
      </div>
    </div>
    <div class="growing-skills-gallery__skill">
      <ImageWrapper :image="ai" color="#FF7C00" />
      <div class="text-[#FF7C00]">
        <ExternalLink
          link="https://www.domestika.org/en/courses/software/1-adobe-illustrator"
          text="AI"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ImageWrapper from '@/components/ImageWrapper.vue'
  import ExternalLink from '@/components/ExternalLink.vue'
  import figma from '@/assets/icons/figma.svg'
  import python from '@/assets/icons/python.svg'
  import ai from '@/assets/icons/ai.svg'
  import threejs from '@/assets/icons/threejs.svg'
  import unity from '@/assets/icons/unity.svg'
</script>

<style>
  .growing-skills-gallery {
    @apply flex
    flex-wrap
    justify-between
    sm:justify-start
    overflow-hidden
    gap-8
    w-full;
  }

  .growing-skills-gallery__skill {
    @apply flex
    flex-col
    gap-2
    justify-center
    items-center;
  }
</style>
