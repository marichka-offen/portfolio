<template>
  <div class="skills-page">
    <div class="skills-page__skills-container">
      <TransitionGroup :name="slideDirection">
        <div v-if="!route.query.set" class="skills-page__intro">
          <p>
            Welcome to my portfolio skills page! As a developer, I have experience in a variety of
            programming languages and web technologies. I specialize in front-end development,
            including HTML, CSS, and JavaScript. These languages form the foundation of most modern
            websites and applications, and I've honed my skills in each one to build beautiful and
            user-friendly interfaces.
          </p>

          <p>
            In addition to front-end development, I also have experience in back-end technologies
            such as Node.js, as well as frameworks like Vue.js and React. With these tools, I've
            built full-stack applications that are secure, scalable, and easy to maintain.
          </p>

          <p>
            I'm always eager to learn new skills and technologies, and I'm always looking for new
            opportunities to grow as a developer. If you have a project that you'd like to discuss,
            please feel free to reach out to me!
          </p>

          <button class="border p-2 bg-slate-100 rounded-md w-max" @click="goToSet(1)">
            Check out the skillset
          </button>
        </div>
        <div class="skills-page__skill-set" v-if="route.query.set === 'skill-set-1'">
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

        <div class="skills-page__skill-set" v-if="route.query.set === 'skill-set-2'">
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
  import GrowingSkillsGallery from '@/components/GrowingSkillsGallery.vue'
  import ContentBlock from '@/components/ContentBlock.vue'
  import LanguageSkillsGallery from '@/components/LanguageSkillsGallery.vue'

  const current = ref(0)
  const totalPages = ref(2)
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
  .skills-page {
    @apply w-full
    h-full
    flex
    justify-center
    items-center
    gap-4
    min-h-full;
  }

  .skills-page__skill-set {
    @apply w-full
    h-full
    flex
    flex-col
    gap-12
    text-center
    p-4;
  }

  .skills-page__intro {
    @apply w-full
    h-full
    flex
    flex-col
    gap-8;
  }

  .skills-page__skills-container {
    @apply /* h-full  */
    mt-32
    h-full
    w-11/12
    pr-8;
  }

  .skills-page__nav {
    @apply flex
    flex-col
    justify-center
    items-center
    gap-4
    w-min
    -mt-32
    -mr-10;
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
