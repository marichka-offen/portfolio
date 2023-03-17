import type ContentBlockVue from '@/components/ContentBlock.vue'

<template>
  <div class="home-page">
    <div class="home-page__bio">
      <p>
        Hello, I'm Marichka, a US-based front-end developer and programming enthusiast. As a
        self-taught web developer, I've dedicated countless hours to learning and mastering HTML,
        CSS, and JavaScript, and I've honed my skills through a combination of passion, personal
        growth, and hard work.
      </p>
      <p>
        I take pride in creating beautiful, intuitive, and responsive user interfaces for websites
        and applications. As a team player and aspiring mentor, I enjoy collaborating with others
        and sharing my knowledge through walkthroughs and Q&A sessions.
      </p>

      <p>
        In addition to my development work, I am also a dedicated lifelong learner. I believe that
        continuous education is essential for staying ahead of the curve in the ever-evolving world
        of technology. If you have something to teach me, I'm all ears!
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

    <div class="home-page__image-container">
      <img src="@/assets/me.jpeg" alt="Marichka Offen" class="home-page__image" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ExternalLink from '@/components/ExternalLink.vue'
</script>

<style>
  .home-page {
    @apply flex
    h-full
    flex-col
    gap-8
    items-start
    lg:justify-center
    lg:h-4/5
    lg:flex-row;
  }

  .home-page__bio {
    @apply flex
    flex-col
    w-full
    justify-center
    gap-8
    order-2
    basis-2/3
    lg:order-1;
  }

  .home-page__links {
    @apply flex
    gap-4
    flex-wrap;
  }

  .home-page__image-container {
    @apply flex
    justify-center
    items-center
    max-w-xs
    max-h-80
    /* w-96
    h-96 */
    order-1
    lg:order-2;
  }

  .home-page__image {
    @apply w-full
    h-full
    object-cover
    rounded-full;
  }
</style>
