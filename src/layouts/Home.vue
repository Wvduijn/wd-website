<template>
  <div id="app">
    <Navigation />
    <header class="header justify-between">

      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>
      <div class="header__right ml-20">
        <ToggleTheme />
      </div>
    </header>
    <Hero />
    <Section />
    <transition
      name="fade"
      appear
      mode="out-in"
    >
      <main class="main">

        <slot />

      </main>
    </transition>
    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Hero from '~/components/Hero.vue'
import Section from '~/components/section/Section.vue'
import Navigation from '~/components/navigation/Navigation.vue'

import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Hero,
    Logo,
    ToggleTheme,
    Section,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
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
  background: rgba(0,0,0,0);
  display: flex;
  // justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
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
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
