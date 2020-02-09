<template>
  <div class="footer">
    <div class="footer__logo">
      <g-image
        src="~/assets/images/wd.svg"
        class="logo"
      />
    </div>
    <div class="break"></div>
    <div class="footer__copyright">

      © Copyright 2020 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Willem van Duijn - Front-end developer &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Alle Rechten voorbehouden
    </div>
    <div class="break"></div>
    <div class="footer__social">

      <a
        class="social-icon social-icon--github"
        title="Github"
        target="_blank"
      >
        <font-awesome :icon="['fab', 'github']" />
      </a>

      <a
        class="social-icon social-icon--linkedin"
        title="LinkedIn"
        target="_blank"
      >
        <font-awesome :icon="['fab', 'linkedin']" />
      </a>

      <a
        class="social-icon social-icon--twitter"
        title="Twitter"
        target="_blank"
      >
        <font-awesome :icon="['fab', 'twitter']" />
      </a>

      <a
        class="social-icon social-icon--instagram"
        title="Instagram"
        target="_blank"
      >
        <font-awesome :icon="['fab', 'instagram']" />
      </a>

    </div>
  </div>

</template>
<script>
export default {
  computed: {
    date: () => {
      return new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
$timing        : 265ms;
$iconColor     : #ee751c;
$accent        : #E63020;

@mixin transformScale($size: 1) {
    transform: scale($size);
    -ms-transform: scale($size);
    -webkit-transform: scale($size);
}

.footer {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  .break {
    flex-basis: 100%;
    height: 0;
  }

  &__logo {
    .logo {
      width:200px;
    }
  }

  &__copyright {
    margin: 20px 0;
    font-size: .75rem;
  }

  /* Social Icons */
  &__social {
    display: flex;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 60px;
    height: 60px;
    margin: 0 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 2.5rem;
    text-decoration: none;
    transition: all 0.15s ease;
  }

  svg {
      color: #fff;
      position: absolute;
      width: 36%;
      /* top: 7px; */
      left: 19px;
      transition: all $timing ease-out;
  }

  a {
      display: inline-block;
    
      &:before {
          @include transformScale();
          content: " ";
          width: 40px;
          height: 40px;
          border-radius: 100%;
          display: block;
          background: linear-gradient(45deg, $iconColor, $accent);
          transition: all $timing ease-out;
      }
      
      &:hover:before {
          transform: scale(0);
          transition: all $timing ease-in;
      }
      
      &:hover svg {
          @include transformScale(1.75);
          color: #FFF;
          background: -webkit-linear-gradient(45deg, $iconColor, $accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all $timing ease-in;
      }
  }
}

</style>