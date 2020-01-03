<template>
  <!--Hero-->
  <div class="wd-void-animation w-screen h-screen">
    <div class="wd-logo">
      <g-image
        src="~/assets/images/wd.svg"
        class="wd-logo__image"
      />
    </div>
    <HeroTitle />
    <ScrollMouse />
  </div>

</template>
<script>
import HeroTitle from './hero-title/HeroTitle';
import ScrollMouse from '@/components/ui-components/ScrollMouse.vue';
export default {
    components: {
        HeroTitle,
        ScrollMouse
    }
}
</script>
<style lang="scss">
.wd-void-animation {
    margin-top: -80px;
    background: linear-gradient(90deg, #0F2027 0%, #203A43 53%, #2C5364 100%);
}
.wd-logo {
    width: 400px;
    position:absolute;  
    top: calc(50% - 100px);
    left: calc(50% - 200px);

    &__image{
      width:100%;
    }
    
}


</style>