<template>
  <ContentBlock>
    <template #header> Don't be shy, say hi! </template>
    <template #default>
      Let's talk! Whether you have a question, need help, want to discuss job opportunities, or just
      simply chat, feel free to reach out to me! I'm always happy to connect with new people and
      hear about their experiences. Let's grab a virtual coffee and chat about anything and
      everything. I promise to read each and every message and help in any way I can. Looking
      forward to hearing from you!

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
