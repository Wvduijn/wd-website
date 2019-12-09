<template>
  <div class="py-20 absolute-center">
    <div class="hero-wrapper absolute-center text-center">
      <div class="hero-center">
        <h1 class="hero-title text-4xl uppercase font-semibold">Willem van Duijn <div class="title-spacer"></div>
          <span class="block uppercase font-thin tracking-wider text-3xl">Front-end Developer</span>
          <div class="title-spacer"></div>
          <span class="block uppercase font-thin tracking-wider font-bold text-sm">i write clean maintainable & scalable code</span>
        </h1>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero-center {
    width: 100vw;
    height: 100vh;   
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero-title {
    margin-top: 17%;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    letter-spacing: .05em;
    color: #f9f9f9;
}
.title-spacer {
    border: 0 solid #e7e6e6;
    border-color: #f9f9f9;
    border-top-width: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 100%;
}
.parent {
    position: relative;
}
.absolute-center {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
}

</style>