<template>
    <div id="app">
        <header class="header justify-between">
            <div class="header__left">
                <Logo v-if="showLogo" />
            </div>
            <div class="flex justify-end ml-auto"></div>
            <div class="header__right ml-20">
                <Navigation />
                <ToggleTheme />
            </div>
        </header>
        <transition name="fade" appear mode="out-in">
            <main class="main">
                <slot />
            </main>
        </transition>
        <back-to-top>
            <button type="button" class="btn btn-info btn-to-top">
                <font-awesome :icon="['fas', 'chevron-up']" />
            </button>
        </back-to-top>
        <Footer />
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import Navigation from '~/components/navigation/Navigation.vue'
import Footer from '~/components/footer/Footer.vue'
import BackToTop from '~/components/ui-components/BackToTop.vue'

export default {
    props: {
        showLogo: { default: true },
    },
    components: {
        Logo,
        ToggleTheme,
        Navigation,
        Footer,
        BackToTop,
    },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}

.fade-enter {
    opacity: 0;
    transform: translateY(50px);
}

.fade-leave-to {
    transform: translateY(-50px);
    opacity: 0;
}
.header {
    background: rgba(0, 0, 0, 0);
    display: flex;
    // justify-content: space-between;
    align-items: center;
    min-height: var(--header-height);
    padding: 0 calc(var(--space) / 2);
    top: 0;
    z-index: 10;

    &__left,
    &__right {
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 1300px) {
        //Make header sticky for large screens
        position: sticky;
        width: 100%;
    }
}

.main {
    margin: 0 auto;
}
</style>
