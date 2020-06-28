<template>
    <!--Hero-->
    <div class="wd-void-animation w-screen h-screen">
        <hero-title @click.native="startAnimation" class="wd-logo" />
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
.wd-logo:hover {
    cursor: pointer;
}
</style>
