import ContentBlock from '@/components/ContentBlock.vue'

<template>
  <ContentBlock>
    <template #header> About </template>
    <template #default>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus eos cum, exercitationem
      aliquid laudantium dolorum? Laudantium, nobis praesentium atque assumenda possimus, odit vero
      eveniet, explicabo consequatur voluptatem non voluptates.

      <ImageWrapper
        :image="me"
        :gradient-colors="['#d6d0be', '#13181b']"
        dimensions="360"
        fit="cover"
        radius
      />
    </template>
  </ContentBlock>
</template>

<script setup lang="ts">
  import ContentBlock from '@/components/ContentBlock.vue'
  import me from '@/assets/me.jpg'
  import ImageWrapper from '@/components/ImageWrapper.vue'
</script>
