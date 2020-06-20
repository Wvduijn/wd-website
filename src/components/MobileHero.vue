<template>
    <!--Hero-->
    <div class="wd-void w-screen h-screen">
        <div class="wd-logo">
            <g-image src="~/assets/images/wd.svg" class="wd-logo__image" />
        </div>
        <hero-title />
        <scroll-mouse />
    </div>
</template>
<script>
import HeroTitle from './hero-title/HeroTitle'
import ScrollMouse from '@/components/ui-components/ScrollMouse.vue'
export default {
    name: 'MobileHero',
    components: {
        HeroTitle,
        ScrollMouse,
    },
}
</script>
<style lang="scss">
.wd-void {
    background: linear-gradient(90deg, #0f2027 0%, #203a43 53%, #2c5364 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.wd-logo {
    width: 400px;

    @include respond-below(sm) {
        width: 200px;
    }

    &__image {
        width: 100%;
    }
}
</style>
