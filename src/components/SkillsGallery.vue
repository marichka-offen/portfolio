<template>
  <div class="skills-gallery">
    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="html" color="#ef652a" />
      <p class="text-[#e34f26]">HTML</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="css" color="#33A9DC" />
      <p class="text-[#1572B6]">CSS</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="sass" color="#CB6699" />
      <p class="text-[#CB6699]">SASS</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="tailwind" color="#07B6D5" />
      <p class="text-[#07B6D5]">Tailwind</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="javascript" color="#F7DF1E" />
      <p class="text-[#F7DF1E]">JavaScript</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="typescript" color="#007acc" />
      <p class="text-[#007acc]">TypeScript</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="vuejs" color="#41b883" />
      <p class="text-[#41b883]">Vue</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="nuxt" color="#3B8070" />
      <p class="text-[#3B8070]">Nuxt</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="nodejs" color="#6CC04A" />
      <p class="text-[#6CC04A]">Node</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="react" color="#61DAFB" />
      <p class="text-[#61DAFB]">React</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="redux" color="#764ABC" />
      <p class="text-[#764ABC]">Redux</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="firebase" color="#F57F17" />
      <p class="text-[#F57F17]">Firebase</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="d3" color="#F9A03C" />
      <p class="text-[#B84E51]">D3</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="git" color="#DE4C36" />
      <p class="text-[#DE4C36]">Git</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="accessibility" color="#154F92" />
      <p class="text-[#154F92]">A11y</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="csharp" color="#9B4F96" />
      <p class="text-[#9B4F96]">C#</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="dotnet" color="#00AEEF" />
      <p class="text-[#00AEEF]">.Net</p>
    </div>

    <div class="skills-gallery__skill">
      <SkillLogoWrapper :image="mysql" color="#DE8A03" />
      <p class="text-[#DE8A03]">MySQL</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SkillLogoWrapper from '@/components/SkillLogoWrapper.vue'

  import accessibility from '@/assets/icons/accessibility.svg'
  import csharp from '@/assets/icons/csharp.svg'
  import css from '@/assets/icons/css.svg'
  import d3 from '@/assets/icons/d3.svg'
  import dotnet from '@/assets/icons/dotnet.svg'
  import firebase from '@/assets/icons/firebase.svg'
  import git from '@/assets/icons/git.svg'
  import html from '@/assets/icons/html.svg'
  import javascript from '@/assets/icons/javascript.svg'
  import mysql from '@/assets/icons/mysql.svg'
  import nodejs from '@/assets/icons/nodejs.svg'
  import nuxt from '@/assets/icons/nuxt.svg'
  import react from '@/assets/icons/react.svg'
  import redux from '@/assets/icons/redux.svg'
  import sass from '@/assets/icons/sass.svg'
  import tailwind from '@/assets/icons/tailwind.svg'
  import typescript from '@/assets/icons/typescript.svg'
  import vuejs from '@/assets/icons/vuejs.svg'
</script>

<style>
  .skills-gallery {
    @apply flex
    flex-wrap
    justify-center
    items-center
    gap-8
    w-full;
  }

  .skills-gallery__skill {
    @apply flex
    flex-col
    gap-2
    justify-center
    items-center;
  }
</style>
