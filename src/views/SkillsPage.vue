<template>
  <div class="skills-page">
    <div class="skills-page__skills-container">
      <TransitionGroup :name="slideDirection">
        <ContentBlock v-if="!route.query.set">
          <template #header> Skills that pay the bills! </template>
          <template #default>
            <p>
              Welcome to my portfolio skills page! As a developer, I'm a master of a variety of
              programming languages and web technologies. I specialize in front-end development,
              including HTML, CSS, and JavaScript. These languages form the foundation of most
              modern websites and applications, and I've honed my skills in each one to build
              interfaces so slick, they make a penguin jealous.
            </p>

            <p>
              But wait, there's more! I'm also skilled in back-end technologies like Node.js, and
              I've built full-stack applications that are so secure, even your grandma can use them
              without fear. I can also work some magic with frameworks like Vue.js and React, making
              your website or app feel like it's been blessed by a unicorn.
            </p>

            <p>
              If you have a project that you'd like to discuss, please feel free to reach out to me!
              I promise I won't make you drink the same caffeinated potions I do to stay up all
              night coding.
            </p>
            <!-- <button
              class="border p-2 bg-slate-100 rounded-md w-max"
              @click="router.push({ path: '/skills', query: { set: `skills-set-1` } })"
            >
              Check out the skillset
            </button> -->
          </template>
        </ContentBlock>

        <div class="skills-page__skill-set" v-if="route.query.set === 'skills-set-1'">
          <ContentBlock>
            <template #header> Skills </template>
            <template #default>
              These are the skills that I've picked up along my journey as a web developer. Some of
              them I've acquired through intense battles with bugs and coding conundrums in
              professional settings, while others I've learned through the wizardry of self-directed
              study. But rest assured, they all come with a seal of approval from my trusted friend
              and ally, experience.
              <SkillsGallery />
            </template>
          </ContentBlock>
        </div>

        <div class="skills-page__skill-set" v-if="route.query.set === 'skills-set-2'">
          <ContentBlock>
            <template #header> Growing Skills </template>
            <template #default>
              Here are the skills I'm working hard to master at the moment. I'm always on the
              lookout for the latest and greatest courses to help me level up, so if you have any
              recommendations, hit me up! And if you're looking to improve your skills in these
              areas too, check out the links to some of my favorite courses below. Trust me, they're
              outstanding!
              <GrowingSkillsGallery />
            </template>
          </ContentBlock>
        </div>

        <div class="skills-page__skill-set" v-if="route.query.set === 'skills-set-3'">
          <ContentBlock>
            <template #header> Languages </template>
            <template #default>
              Welcome to the Linguistic Laboratory! This is where you can find a breakdown of the
              languages I'm fluent in, as well as the one I'm currently trying to wrap my tongue
              around. From English to Ukrainian, I've got you covered. And if you have any language
              puns, please don't hesitate to share - I'm always down for a good play on words!
              <LanguageSkillsGallery />
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

  const totalPages = ref(3)
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
