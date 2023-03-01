<template>
  <ContentBlock>
    <template #header> Skills </template>
    <template #default>
      <SkillsGallery />
    </template>
  </ContentBlock>
</template>

<script setup lang="ts">
  import ContentBlock from '@/components/ContentBlock.vue'
  import SkillsGallery from '@/components/SkillsGallery.vue'
</script>
