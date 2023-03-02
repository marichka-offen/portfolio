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

          <ImageWrapper2
            :image="me"
            :gradient-colors="['#d6d0be', '#13181b']"
            dimensions="360"
            fit="cover"
            radius
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
  import ImageWrapper2 from '@/components/ImageWrapper2.vue'
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
</style>
