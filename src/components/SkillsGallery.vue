<template>
  <div class="skills-gallery">
    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="html"
        :gradient-colors="['#ef652a', '#e34f26']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#e34f26]">HTML</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="css"
        :gradient-colors="['#33A9DC', '#1572B6']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#1572B6]">CSS</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="sass"
        :gradient-colors="['#CB6699', '#CB6699']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#CB6699]">SASS</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="tailwind"
        :gradient-colors="['#07B6D5', '#07B6D5']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#07B6D5]">Tailwind</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="javascript"
        :gradient-colors="['#F7DF1E', '#F7DF1E']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#F7DF1E]">JavaScript</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="typescript"
        :gradient-colors="['#007acc', '#007acc']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#007acc]">TypeScript</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="vuejs"
        :gradient-colors="['#35495e', '#41b883']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#41b883]">Vue</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="nuxt"
        :gradient-colors="['#3B8070', '#35495E']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#3B8070]">Nuxt</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="react"
        :gradient-colors="['#61DAFB', '#61DAFB']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#61DAFB]">React</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="nodejs"
        :gradient-colors="['#539E43', '#333']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#333]">Node</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="d3"
        :gradient-colors="['#F9A03C', '#B84E51']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#B84E51]">D3</p>
    </div>

    <div class="skills-gallery__skill">
      <ImageWrapper
        :image="git"
        :gradient-colors="['#DE4C36', '#DE4C36']"
        :dimensions="dimensions"
        :fit="fit"
      />
      <p class="text-[#DE4C36]">Git</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ImageWrapper from '@/components/ImageWrapper.vue'
  import css from '@/assets/icons/css.svg'
  import d3 from '@/assets/icons/d3.svg'
  import html from '@/assets/icons/html.svg'
  import javascript from '@/assets/icons/javascript.svg'
  import nodejs from '@/assets/icons/nodejs.svg'
  import react from '@/assets/icons/react.svg'
  import sass from '@/assets/icons/sass.svg'
  import typescript from '@/assets/icons/typescript.svg'
  import vuejs from '@/assets/icons/vuejs.svg'
  import git from '@/assets/icons/git.svg'
  import nuxt from '@/assets/icons/nuxt.svg'
  import tailwind from '@/assets/icons/tailwind.svg'

  const dimensions = ref('50')
  const fit = ref('contain')
</script>

<style>
  :root {
    --skills-gallery-border-size: 1px;
  }

  .skills-gallery {
    @apply flex
    flex-wrap
    overflow-hidden
    gap-4;
  }

  .skills-gallery__skill {
    @apply flex
    flex-col
    gap-2
    justify-center
    items-center;
    flex: 1 0 20%;
    justify-content: center;
    align-items: center;
    border-left: var(--skills-gallery-border-size) dashed #ccc;
    border-bottom: var(--skills-gallery-border-size) dashed #ccc;
    margin-left: calc(-1 * var(--skills-gallery-border-size));
    margin-bottom: calc(-1 * var(--skills-gallery-border-size));
  }
</style>
