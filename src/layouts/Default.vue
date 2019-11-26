<template>
  <div id="app">
    
    <header class="header justify-between">

      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>
      <div class="flex justify-end ml-auto">
       
      </div>
      <div class="header__right ml-20">
         <Navigation />
         <ToggleTheme />
      </div>
    </header>
    <Hero />
    <transition
      name="fade"
      appear
    >
      <main class="main">

        <slot />

      </main>
    </transition>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. WD. </span>
      <span class="footer__links">Powered by <a href="#"> Me </a></span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import Hero from '~/components/Hero.vue'
import Navigation from '~/components/navigation/Navigation.vue'


export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme,
    Hero,
    Navigation
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
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
