import type ContentBlockVue from '@/components/ContentBlock.vue'

<template>
  <ContentBlock>
    <template #header> Salutations! </template>
    <template #default>
      <div class="home-page__container">
        <div class="home-page__bio">
          <p>
            Hello, I'm Marichka, a US-based front-end developer and programming enthusiast. As a
            self-taught web developer, I've dedicated countless hours to learning and mastering
            HTML, CSS, and JavaScript, and I've honed my skills through a combination of passion,
            personal growth, and hard work.
          </p>
          <p>
            I take pride in creating beautiful, intuitive, and responsive user interfaces for
            websites and applications. As a team player and aspiring mentor, I enjoy collaborating
            with others and sharing my knowledge through walkthroughs and Q&A sessions.
          </p>

          <p>
            In addition to my development work, I am also a dedicated lifelong learner. I believe
            that continuous education is essential for staying ahead of the curve in the
            ever-evolving world of technology. If you have something to teach me, I'm all ears!
          </p>
          <div class="home-page__links">
            <ExternalLink
              link="https://docs.google.com/document/d/1T_DrCQ7RGrIx-BiOEjts1FdxFxDqu9Aa/edit?usp=sharing&ouid=104315682638605713996&rtpof=true&sd=true"
              text="Resume"
              glitchEffect
            />
            <ExternalLink
              link="https://www.linkedin.com/in/marichka-offen/details/recommendations/"
              text="Testimonials"
              glitchEffect
            />
          </div>
        </div>

        <img src="@/assets/me.jpeg" alt="Marichka Offen" class="home-page__image" />
      </div>
    </template>
  </ContentBlock>
</template>

<script setup lang="ts">
  import ContentBlock from '@/components/ContentBlock.vue'
  import ExternalLink from '@/components/ExternalLink.vue'
</script>

<style>
  .home-page__container {
    @apply h-max
    flex
    flex-col
    lg:flex-row
    gap-8
    items-center
    lg:items-start;
  }

  .home-page__bio {
    @apply flex
    flex-col
    gap-8;
  }

  .home-page__links {
    @apply flex 
    gap-4
    flex-wrap;
  }

  .home-page__image {
    @apply max-w-xs
    max-h-80
    flex-none
    object-cover
    rounded-full
    self-center;
  }
</style>
