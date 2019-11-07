<template>
    <fragment>
        <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>  
    <div class="nav-icon menu-toggle" @click="toggleMenu">
        <div></div>
    </div>
    <div :class="{'open': this.open}" >  
    <nav>
        <ul class="menu">
            <li data-text="Home">Home</li>
            <li data-text="Projects">Blog</li>
            <li data-text="Contact">Contact</li>
        </ul>
    </nav>
    </div> 
    </fragment>
</template>
<script>
export default {
    // toggle open class whenever menu button is clicked
    // Component should receive this prop
    data() {
    return {
      open: false
    }
  },
    methods: {
        toggleMenu(){
            this.open = !this.open
            console.log('clicked');
            console.log('Opened', this.open);
        }
    }
}
</script>
<style lang="scss" scoped>
$bp-small: 500px;
$bp-arrow: 700px;
$font-primary: 'Roboto', sans-serif;
$color: #006e90;
$color-bg: #ee751c;
$color-dark: darken($color-bg, 10%);
$color-lite: lighten($color, 10%);

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
/* Icon 3 */

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 18px;
}

#nav-icon3 span:nth-child(4) {
  top: 36px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
/* END Icon 3 */
.nav-icon {
  width: 25px;
  position: fixed;
  top: 23px;
  right: 75px;
  cursor: pointer;
  z-index: 900;
}

.nav-icon:after, 
.nav-icon:before, 
.nav-icon div {
  background-color: #fff;
  border-radius: 3px;
  content: '';
  display: block;
  height: 2px;
  margin: 7px 0;
  transition: all .2s ease-in-out;
}

// button {
//   border-radius: 5px;
//   opacity: 0.6;
//   background-color: transparent;
//   position: fixed;
//   z-index: 900;
//   top: 24px;
//   right: 75px;
//   border: none;
//   width: 36px;
//   height: 25px;
//   outline: none;
//   transition: opacity 0.2s ease-out;
//   &:before {
//     content: "";
//     @include position-center;
//     right: auto;
//     width: 100%;
//     background: linear-gradient(
//       to bottom, 
//       #FFF, #FFF 20%, 
//       transparent 20%, transparent 40%, 
//       #FFF 40%, #FFF 60%, 
//       transparent 60%, transparent 80%, 
//       #FFF 80%, #FFF 100%
//     );
//     transition: opacity 0.2s ease-out,
//                 width 0.2s 0.2s ease-out;
//   }
//   &:after {
//     opacity: 0;
//     content: '×';
//     color: white;
//     position: absolute;
//     top: 16px;
//     left: -4px;
//     font-family: Arial, sans-serif;
//     font-size: 76px;
//     line-height: 0;
//     transition: opacity 0.4s ease-out;
//   }
//   &:active {
//     transform: translateY(2px);
//   }
//   &:hover {
//     opacity: 1;
//   }
//   .open & {
//     opacity: 1;
//     &:before {
//       opacity: 0;
//       width: 0;
//     }
//     &:after {
//       opacity: 1;
//       transform: translate3d(0,0,0)
//                  rotate(360deg);
//       transition: transform 0.4s 1s ease-out,
//                   opacity 0.4s 1s ease-out;
//     }
//   }
// }

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
               translateY(300%);
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
</style>