<template>
     <div :class="{'open': open, 'closed': closed}" >  
    <nav>
        <ul class="menu">
            <li data-text="Home">Home</li>
            <li data-text="Blog">Blog</li>
            <li data-text="Contact">Contact</li>
        </ul>
    </nav>
    </div> 
</template>
<script>
export default {
    props: [
        'open',
        'closed'
    ]
}
</script>
<style lang="scss" scoped>
$font-primary: 'Roboto', sans-serif;
$color: #ee751c;
$color-bg: #006e90;
$color-dark: darken($color-bg, 10%);
$color-lite: lighten($color, 10%);

$menu-gradient: linear-gradient(135deg, #EEAE1C 0%, #E63020 100%);
$menu-dark-gradient: linear-gradient(90deg, #0F2027 0%, #203A43 53%, #2C5364 100%);

@mixin position-center {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    cursor: pointer;
    padding: 6px 20px;
    font-size: 48px;
  }
}


nav {
  z-index: 800;
  position: fixed;
  top: -100%; left: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(0,0,0);
  backface-visibility: hidden;
  overflow: hidden;
  &:before {
    content: '';
    @include position-center;
    background: rgba($color-dark, 0.98);
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
    transform: scale(0.04), translateY(9999px);
    overflow: hidden;
  }
  .open & {
    top: 0;
    &:before {
      animation: menu-animation 0.8s ease-out forwards;
    }
  }
  .closed & {
    top: 0;
    &:before {
      animation: reverse-animation 0.8s ease-out forwards;
    }
  }
}

ul.menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  backface-visibility: hidden;
  perspective: 1000;
  color: white;
  li {
    opacity: 0;
    text-align: center;
    transform: translate3d(0,36px,0);
    &:before {
      content: '';
      @include position-center;
      left: auto;
      background-color: white;
      height: 100%;
      width: 0;
      overflow: hidden;
      transition: width 0.14s ease-out;
    }
    &:after {
      opacity: 0;
      content: attr(data-text);
      @include position-center;
      color: $color;
      overflow: hidden;
      transform: translate(-24px, 6px);
      transition: transform 0.1s ease-out,
                  opacity 0.1s ease-out;
    }
    &:hover {
      &:before {
        left: 0;
        right: auto;
        width: 100%;
      }
      &:after {
        opacity: 1;
        padding: 0 20px;
        transform: translate(0px, 6px);
        transition: transform 0.2s 0.14s ease-out,
                    opacity 0.2s 0.14s ease-out;
      }
    }
    .open & {
      opacity: 1;
      transform: translate3d(0,0,0);
      transition: transform 0.2s ease-out,
                  opacity 0.2s ease-out;
      @for $i from 1 to 5 {
        &:nth-child(#{$i}) { transition-delay: $i * 0.1s + 0.65s; }
      }
    }
  }
} 

@keyframes menu-animation {
  0% {
    opacity: 0;
    transform: scale(0.04)
               translateY(500%);
  }
  40% {
    transform: scale(0.04)
               translateY(0);
    transition: ease-out;
  }
  40% {
    transform: scale(0.04)
               translateY(0);
  }
  60% {
    opacity: 1;
    transform: scale(0.02)
               translateY(0px);
  }
  61% {
    transform: scale(0.04);
  }
  99.9% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }
  100% {
    transform: scale(2);
    height: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
}
@keyframes reverse-animation {
  0% {
    transform: scale(2);
    height: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
  40% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }
  40% {
    transform: scale(0.04);
  }
  60% {
    opacity: 1;
    transform: scale(0.02)
               translateY(0px);
  }
  61% {
    transform: scale(0.04)
               translateY(0);
  }
  99.9% {
    transform: scale(0.04)
               translateY(0);
    transition: ease-out;
  }
  100% {
    opacity: 0;
    transform: scale(0.04)
               translateY(300%);
  }
}
</style>