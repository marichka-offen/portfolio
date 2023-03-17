<template>
  <ContentBlock>
    <template #header> Salutations! Glad you could make it</template>
    <template #default>
      <div class="home-page__container">
        <div class="home-page__bio">
          <p>
            Hi there, I'm Marichka! I'm a front-end developer and programming addict based in the
            US. I've spent more hours than I'd care to admit tinkering with HTML, CSS, and
            JavaScript to become the master web-wizard that I am today.
          </p>
          <p>
            I'm all about creating beautiful, seamless, and responsive user interfaces that will
            make you go "wow" (and maybe even shed a tear of joy). As a team player and aspiring
            mentor, I love working with others and showing off my knowledge through fun and engaging
            walkthroughs and Q&A sessions.
          </p>
          <p>
            When I'm not coding up a storm, I'm probably buried nose-deep in the latest tech books,
            trying to absorb all the knowledge the universe has to offer. I'm a lifelong learner,
            and I'm always looking to expand my horizons. So, if you've got something to teach me
            (or even just want to chat about the latest tech trends), I'm all ears!
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
