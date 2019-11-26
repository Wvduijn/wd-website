<template>
  <section class="section">
    <div class="container mx-auto max-w-3xl pt-10">
      <slot name="section-title"></slot>
      <div class="flex">
        <slot name="content" />
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.section{
  background: var(--main-gradient);
  // background: #0f2d44;
}
</style>
