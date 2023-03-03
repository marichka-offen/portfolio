<template>
  <div class="project-block">
    <div class="project-block__header">
      <slot name="header" />
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
    flex-wrap
    flex-col
    gap-4;
  }

  .project-block__header {
    @apply text-2xl
    border-b-2
    border-zinc-500;
    font-family: 'Yanone Kaffeesatz', sans-serif;
  }

  .project-block__tools {
    @apply flex
    flex-wrap
    gap-4;
  }

  .project-block__links {
    @apply flex
    flex-wrap
    gap-4;
  }
</style>
