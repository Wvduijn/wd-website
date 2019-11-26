<template>
  <!--Hero-->
  <div class="wd-void-animation w-screen h-screen">
    <div class="wd-logo">
      <g-image
        src="~/assets/images/wd.svg"
        class="logo"
      />
    </div>
    <div class="py-20 absolute-center">
      <div class="hero-wrapper absolute-center text-center">
        <div class="hero-center">
          <h1 class="hero-title text-4xl uppercase font-semibold">Willem van Duijn <div class="title-spacer"></div><span class="block uppercase font-thin tracking-wider text-3xl">Front-end Developer</span></h1>
          
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import HeroTitle from './hero-title/HeroTitle';
export default {
    components: {
        HeroTitle
    }
}
</script>
<style lang="scss">
.wd-void-animation {
    margin-top: -80px;
    background: linear-gradient(90deg, #0F2027 0%, #203A43 53%, #2C5364 100%);
}
.parent {
    position: relative;
}
.absolute-center {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
}
.wd-logo {
    width: 400px;
    position:absolute;  
    top: calc(50% - 100px);
    left: calc(50% - 200px);
    
}
.logo {
    width:100%;
}
.hero-center {
    width: 100vw;
    height: 100vh;   
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero-title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    letter-spacing: .05em;
    color: #f9f9f9;
}
.title-spacer {
    border: 0 solid #e7e6e6;
    border-color: #f9f9f9d;
    border-top-width: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 100%;
}

</style>