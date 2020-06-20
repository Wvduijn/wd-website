<template>
    <!--Hero-->
    <div class="wd-void-animation w-screen h-screen">
        <div class="wd-logo" @click="startAnimation">
            <g-image
                src="~/assets/images/wd.svg"
                class="wd-logo__image"
                alt="WD - Front-end Developer"
            />
        </div>
        <hero-title />
        <scroll-mouse />
    </div>
</template>
<script>
import createAnim from '@/assets/js/particleAnim'
import ScrollMouse from '@/components/ui-components/ScrollMouse.vue'
import HeroTitle from '@/components/hero-title/HeroTitle'
export default {
    components: {
        HeroTitle,
        ScrollMouse,
    },
    methods: {
        startAnimation() {
            createAnim()
        },
    },
}
</script>
<style lang="scss">
.wd-void-animation {
    margin-top: -80px;
    background: linear-gradient(90deg, #0f2027 0%, #203a43 53%, #2c5364 100%);
}
.wd-logo {
    z-index: 1;
    width: 400px;
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 200px);
    &:hover {
        cursor: pointer;
    }

    &__image {
        width: 100%;
    }
}
</style>
