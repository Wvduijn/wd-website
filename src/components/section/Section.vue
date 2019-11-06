<template>
  <section class="section">
    <div class="container mx-auto max-w-3xl pt-5">
      <slot name="section-title"></slot>
      <div class="flex mb-4">
        <div class="w-2/3 p-10"><slot name="left-content" /></div>
        <div class="w-1/3 relative"><slot name="right-content" /></div>
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
