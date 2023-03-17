<template>
  <div class="skills-page">
    <div class="skills-page__skills-container">
      <TransitionGroup :name="slideDirection">
        <ContentBlock v-if="!route.query.set">
          <template #header> Skills that pay the bills! </template>
          <template #default>
            <p>
              Welcome to my portfolio skills page! As a developer, I have experience in a variety of
              programming languages and web technologies. I specialize in front-end development,
              including HTML, CSS, and JavaScript. These languages form the foundation of most
              modern websites and applications, and I've honed my skills in each one to build
              beautiful and user-friendly interfaces.
            </p>

            <p>
              In addition to front-end development, I also have experience in back-end technologies
              such as Node.js, as well as frameworks like Vue.js and React. With these tools, I've
              built full-stack applications that are secure, scalable, and easy to maintain.
            </p>

            <p>
              I'm always eager to learn new skills and technologies, and I'm always looking for new
              opportunities to grow as a developer. If you have a project that you'd like to
              discuss, please feel free to reach out to me!
            </p>
            <button
              class="border p-2 bg-slate-100 rounded-md w-max"
              @click="router.push({ path: '/skills', query: { set: `skills-set-1` } })"
            >
              Check out the skillset
            </button>
          </template>
        </ContentBlock>

        <div class="skills-page__skill-set" v-if="route.query.set === 'skills-set-1'">
          <ContentBlock>
            <template #header> Skills </template>
            <template #default>
              These are the skills that I have acquired through practical experience gained in
              professional settings, as well as through self-directed study driven by personal
              interest.
              <SkillsGallery />
            </template>
          </ContentBlock>

          <ContentBlock>
            <template #header> Languages </template>
            <template #default>
              <LanguageSkillsGallery />
            </template>
          </ContentBlock>
        </div>

        <div class="skills-page__skill-set" v-if="route.query.set === 'skills-set-2'">
          <ContentBlock>
            <template #header> Growing Skills </template>
            <template #default>
              These are the skills I'm currently focused on mastering, and I'm continually seeking
              out recommended courses to help me do so. Feel free to browse the links to these
              courses, as I highly recommend them to anyone seeking to improve in these areas.
              <GrowingSkillsGallery />
            </template>
          </ContentBlock>
        </div>
      </TransitionGroup>
    </div>

    <SideScrollNav
      :totalPages="totalPages"
      routeString="skills"
      @updateDirection="slideDirection = $event"
    />
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import SkillsGallery from '@/components/SkillsGallery.vue'
  import GrowingSkillsGallery from '@/components/GrowingSkillsGallery.vue'
  import ContentBlock from '@/components/ContentBlock.vue'
  import LanguageSkillsGallery from '@/components/LanguageSkillsGallery.vue'
  import SideScrollNav from '@/components/SideScrollNav.vue'

  const totalPages = ref(2)
  const route = useRoute()
  const slideDirection = ref('slide-up')
</script>

<style>
  .skills-page {
    @apply w-full
    h-full
    flex
    pr-16;
  }

  .skills-page__intro {
    @apply flex
    flex-col
    gap-8;
  }

  .skills-page__skill-set {
    @apply w-full
    h-full
    flex
    flex-col
    gap-8;
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
    transform: translateY(100px);
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
