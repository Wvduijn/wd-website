<template>
  <div class="wd-blog-hero">
    <div class="wd-blog-hero__wrapper mx-auto max-w-3xl">
      <h1 class="wd-blog-hero__title text-5xl"> WD BLOG</h1>
      <h2 class="wd-blog-hero__subtitle font-thin tracking-wider text-2xl">Front-end related articles</h2>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
.wd-blog-hero {
    position: relative;
    height: 466px;
    background: url('~@/assets/images/thezone.webp') center center no-repeat;
    background-size: cover;
    display:flex;
    align-items: flex-end;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--orange);
    box-shadow: 
        inset 0px 11px 8px -10px #333,
        inset 0px -11px 8px -10px #333; 

    &:after{
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      background: var(--main-gradient-trans);
    }

    &__wrapper {
        display: grid;
        width: 100%;
        padding: 0 4%;
        z-index: 1;
    }

    &__title, &__subtitle  {
        font-family: 'Roboto', sans-serif;
        color: #FFF;
        margin:0;


    }
    &__subtitle {
        text-transform: uppercase;
    }
}
</style>