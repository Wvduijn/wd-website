<template>
<!-- #TODO: Seperate Input Field into seperate components -->
  <Section class="wd-background">
    <template v-slot:section-title>
      <TitleBlock
        title="Samenwerken?"
        subtitle="vertel me meer over het project"
      />
    </template>
    <template v-slot:content>
      <div class="form-wrapper w-full md:w-2/4">
        <form
          class="contact-form"
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />
          <p hidden>
            <label> Don’t fill this out: <input name="bot-field" /> </label>
          </p>
          <div class="sender-info">
            <span class="input input--chisato">
              <input class="input__field input__field--chisato" type="text" id="naam" name="naam" v-model="formData.naam" />
              <label class="input__label input__label--chisato" for="naam">
                <span class="input__label-content input__label-content--chisato" data-content="Naam">Naam</span>
              </label>
				    </span>
            <span class="input input--chisato">
              <input class="input__field input__field--chisato" type="text" id="email" name="email" v-model="formData.email" />
              <label class="input__label input__label--chisato" for="email">
                <span class="input__label-content input__label-content--chisato" data-content="E-mail">E-mail</span>
              </label>
				    </span>
            <span class="input input--chisato">
              <input class="input__field input__field--chisato" type="text" id="phone" name="phone" v-model="formData.phone" />
              <label class="input__label input__label--chisato" for="phone">
                <span class="input__label-content input__label-content--chisato" data-content="Telefoon">Telefoon</span>
              </label>
				    </span>
          </div>

          <button
            type="submit"
            class="form-button uppercase float-shadow"
          >kop koffie</button>
        </form>
      </div>
    </template>
  </Section>
</template>
<script>
import TitleBlock from '~/components/title-block/TitleBlock.vue';
import Section from '~/components/section/Section.vue';
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData
        })
      })
        .then(() => {
          // show Modal or Snackbar with thank you message
          alert(
            'Bedankt! Uw bericht werd succesvol verzonden. Ik zal zo spoedig mogelijk reageren.'
          );
          // this.$router.push('/success')
        })
        .catch(error => alert(error));
    }
  },
  components: {
    Section,
    TitleBlock
  }
};
</script>
<style lang="scss" scoped>
.form-wrapper {
  margin: 40px 0;

  .contact-form {
    // CUSTOM ANIMATED FIELD
    .input {
      position: relative;
      z-index: 1;
      display: inline-block;
      // margin: 1em;
      // max-width: 350px;
      // width: calc(100% - 2em);
      vertical-align: top;
    }

    .input__field {
      position: relative;
      display: block;
      float: right;
      padding: 0.8em;
      // width: 60%;
      border: none;
      border-radius: 0;
      background: #f0f0f0;
      color: #aaa;
      font-weight: 400;
      font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      -webkit-appearance: none; /* for box shadows to show on iOS */
    }

    .input__field:focus {
      outline: none;
    }

    .input__label {
      display: inline-block;
      // float: right;
      padding: 0 1em;
      width: 40%;
      color: #696969;
      font-weight: bold;
      font-size: 70.25%;
      user-select: none;
    }

    .input__label-content {
      position: relative;
      display: block;
      padding: 1.6em 0;
      width: 100%;
    }

    .graphic {
      position: absolute;
      top: 0;
      left: 0;
      fill: none;
    }

    .input--chisato {
      width:100%;
	    padding-top: 1em;
    }   

    .input__field--chisato {
      width: 100%;
      padding: 0.8em 0.5em;
      background: transparent;
      border: 2px solid;
      color: #b5b5b5;
      -webkit-transition: border-color 0.25s;
      transition: border-color 0.25s;
    }

    .input__label--chisato {
      width: 100%;
      position: absolute;
      top: 0;
      text-align: left;
      overflow: hidden;
      padding: 0;
      pointer-events: none;
      -webkit-transform: translate3d(0, 3em, 0);
      transform: translate3d(0, 3em, 0);
    }

    .input__label-content--chisato {
      padding: 0 1em;
      font-weight: 400;
      color: #b5b5b5;
    }

    .input__label-content--chisato::after {
      content: attr(data-content);
      position: absolute;
      top: -200%;
      left: 0;
      color: var(--orange);
      font-weight: 800;
    }

    .input__field--chisato:focus,
    .input--filled .input__field--chisato {
      border-color: var(--orange);
    }

    .input__field--chisato:focus + .input__label--chisato,
    .input--filled .input__label--chisato {
      -webkit-animation: anim-chisato-1 0.25s forwards;
      animation: anim-chisato-1 0.25s forwards;
    }

    .input__field--chisato:focus + .input__label--chisato .input__label-content--chisato,
    .input--filled .input__label-content--chisato {
      -webkit-animation: anim-chisato-2 0.25s forwards ease-in;
      animation: anim-chisato-2 0.25s forwards ease-in;
    }

    @-webkit-keyframes anim-chisato-1 {
      0%, 70% {
        -webkit-transform: translate3d(0, 3em, 0);
        transform: translate3d(0, 3em, 0);
      }
      71%, 100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @-webkit-keyframes anim-chisato-2 {
      0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      70%, 71% {
        -webkit-transform: translate3d(0, 125%, 0);
        transform: translate3d(0, 125%, 0);
        opacity: 0;
        -webkit-animation-timing-function: ease-out;
      }
      100% {
        color: transparent;
        -webkit-transform: translate3d(0, 200%, 0);
        transform: translate3d(0, 200%, 0);
      }
    }

    @keyframes anim-chisato-1 {
      0%, 70% {
        -webkit-transform: translate3d(0, 3em, 0);
        transform: translate3d(0, 3em, 0);
      }
      71%, 100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes anim-chisato-2 {
      0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      70%, 71% {
        -webkit-transform: translate3d(0, 125%, 0);
        transform: translate3d(0, 125%, 0);
        opacity: 0;
        -webkit-animation-timing-function: ease-out;
      }
      100% {
        color: transparent;
        -webkit-transform: translate3d(0, 200%, 0);
        transform: translate3d(0, 200%, 0);
      }
    }
    // END CUSTOM ANIMATED FIELD
    .form-button {
      margin: 10px 0;
      width:100%;
      height:60px;
      color: #FFF;
      background: var(--orange-gradient);

      &:focus {
        outline:none;
      }
    }

    // Default options
    $defaultDuration: .3s;
    $primaryColour: #ececec;
    $secondaryColour: #666;
    $shadowColour: rgba(0, 0, 0, .6);


    // As is often the case, some devices/browsers need additional code to get CSS to work
    // in the most desired way. These mixins are used to quickly drop in hacks for each element
    @mixin hideTapHighlightColor() {
      //Prevent highlight colour when element is tapped
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    @mixin hardwareAccel() {
      //Improve performance on mobile/tablet devices
      transform: translateZ(0);
    }

    @mixin improveAntiAlias() {
      //Improve aliasing on mobile/tablet devices
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }

    /* Float Shadow */
    .float-shadow {
      display: inline-block;
      position: relative;
      transition-duration: $defaultDuration;
      transition-property: transform;

      @include hideTapHighlightColor();
      @include hardwareAccel();
      @include improveAntiAlias();

      &:before {
        pointer-events: none;
        position: absolute;
        z-index: -1;
        content: '';
        top: 100%;
        left: 5%;
        height: 10px;
        width: 90%;
        opacity: 0;
        background: radial-gradient(ellipse at center, rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 80%); /* W3C */
        transition-duration: $defaultDuration;
        transition-property: transform opacity letter-spacing;
      }

      &:hover {
        transform: translateY(-5px); /* move the element up by 5px */

        &:before {
          opacity: 1;
          transform: translateY(5px); /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
        }
      }
    }

    input,
    textarea {
      width: 100%;
      margin: 10px 0 20px 0;
      border: 1px solid #d3d3d3;
      height: 60px;
      padding: 0 20px;
      color: #555c6e;
    }

    label {
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      font-size: 0.85em;
      text-transform: uppercase;
    }
  }
}
</style>
