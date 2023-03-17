<template>
  <div class="project-block">
    <div class="project-block__header">
      <slot name="header" />
    </div>
    <div class="project-block__images">
      <slot name="images" />
    </div>
    <div class="project-block__content">
      <slot name="content" />
    </div>
    <div class="project-block__tools">
      <slot name="tools" />
    </div>
    <div class="project-block__links">
      <slot name="links" />
    </div>
  </div>
</template>

<style>
  .project-block {
    @apply flex
    h-full
    flex-wrap
    flex-col
    gap-4;
  }

  .project-block__header {
    @apply text-3xl
    border-b-2
    border-zinc-500;
    font-family: 'Nothing You Could Do', cursive;
  }

  .project-block__tools {
    @apply flex
    flex-wrap
    gap-4
    py-4;
  }

  .project-block__links {
    @apply flex
    flex-wrap
    gap-4;
  }

  .project-block__content {
    @apply flex
    flex-wrap
    gap-4;
  }

  .project-block__images {
    @apply flex
    flex-wrap
    gap-4
    relative
    items-center;
  }

  .project-block__images > * {
    @apply my-4;
  }
</style>
