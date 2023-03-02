<template>
  <div class="about-page">
    <ContentBlock>
      <template #header> About </template>
      <template #default>
        <div class="about-page__bio">
          <div class="about-page__bio-text">
            Hello, I'm Marichka, a US-based front-end developer and programming enthusiast. As a
            self-taught web developer, I've dedicated countless hours to learning and mastering
            HTML, CSS, and JavaScript, and I've honed my skills through a combination of passion,
            personal growth, and hard work.
            <br /><br />
            I take pride in creating beautiful, intuitive, and responsive user interfaces for
            websites and applications. As a team player and aspiring mentor, I enjoy collaborating
            with others and sharing my knowledge through walkthroughs and Q&A sessions.
            <br /><br />
            In addition to my development work, I am also a dedicated lifelong learner. I believe
            that continuous education is essential for staying ahead of the curve in the
            ever-evolving world of technology. If you have something to teach me, I'm all ears!
          </div>

          <img :src="me" width="200" height="200" class="about-page__bio-image" />
        </div>

        <div class="about-page__links">
          <ExternalLink
            link="https://docs.google.com/document/d/1T_DrCQ7RGrIx-BiOEjts1FdxFxDqu9Aa/edit?usp=sharing&ouid=104315682638605713996&rtpof=true&sd=true"
            text="Resume"
          />
          <ExternalLink
            link="https://www.linkedin.com/in/marichka-offen/details/recommendations/"
            text="Testimonials"
          />
        </div>
      </template>
    </ContentBlock>
    <ContentBlock>
      <template #header> Skills </template>
      <template #default>
        <SkillsGallery />
      </template>
    </ContentBlock>
  </div>
</template>

<script setup lang="ts">
  import ContentBlock from '@/components/ContentBlock.vue'
  import me from '@/assets/me.jpg'
  import ExternalLink from '@/components/ExternalLink.vue'
  import SkillsGallery from '@/components/SkillsGallery.vue'
</script>

<style>
  .about-page {
    @apply flex
    flex-col
    gap-8
  }

  .about-page__bio {
    @apply flex
    gap-8
    flex-col
    lg:flex-row
    items-center
    justify-center
  }

  .about-page__bio-text {

  }

  .about-page__links {
    @apply flex
    gap-4;
  }
</style>
