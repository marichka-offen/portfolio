<template>
  <ContentBlock>
    <template #header> Don't be shy, say hi! </template>
    <template #default>
      <p>
        Let's talk! Whether you have a burning question, need a helping hand, want to discuss
        potential job opportunities, or just want to chat about life, the universe, and everything
        in between, don't hesitate to reach out to me! As a front-end developer, I may not be an
        expert in rocket science, but I know a thing or two about creating websites that are out of
        this world.
      </p>
      <p>
        I'm eager to hear from you and lend a helping hand in any way possible. So, whether you need
        a problem solved, an idea bounced off someone, or just a friendly ear to chat with, don't
        hesitate to drop me a message. I'll make sure to read each and every one, and offer my
        assistance to the best of my ability. Let's connect and make something great together!
      </p>

      <div class="contact__external-links">
        <ExternalLink
          link="mailto: marichka.offen@gmail.com"
          text="marichka.offen@gmail.com"
          glitchEffect
        />
        <ExternalLink link="https://github.com/marichka-offen" text="GitHub" glitchEffect />
        <ExternalLink
          link="https://www.linkedin.com/in/marichka-offen/"
          text="LinkedIn"
          glitchEffect
        />
      </div>
    </template>
  </ContentBlock>
</template>

<script setup lang="ts">
  import ContentBlock from '@/components/ContentBlock.vue'
  import ExternalLink from '@/components/ExternalLink.vue'
</script>

<style>
  .contact__external-links {
    @apply flex
    gap-4
    flex-wrap;
  }
</style>
