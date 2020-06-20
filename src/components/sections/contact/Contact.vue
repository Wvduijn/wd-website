<template>
    <!-- #TODO: Seperate Input Field into seperate components -->
    <Section class="wd-background" id="contact">
        <template v-slot:section-title>
            <title-block
                title="Samenwerken?"
                subtitle="vertel me meer over het project"
            />
        </template>
        <template v-slot:content>
            <div class="w-full md:w-4/4 p-10 pb-0 text-center">
                <p class="font-black">
                    Heeft u een interessante opdracht voor me welke aansluit bij
                    mijn expertises?<br />
                    Neem dan contact met me op via de chat of e-mail.
                </p>
            </div>
            <div class="w-full lg:w-3/4 flex justify-center">
                <g-image src="~/assets/images/wd-contact.webp" alt="Contact" />
            </div>

            <!-- FORM: #TODO Move form to seperate component -->
            <div class="w-full lg:w-4/4 h-46 flex justify-center align-wd">
                <div class="form-wrapper w-full md:w-3/4">
                    <form
                        class="contact-form p-5"
                        name="contact"
                        method="post"
                        v-on:submit.prevent="handleSubmit"
                        action="/success/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>
                        <div class="sender-info">
                            <span
                                class="input input--wd"
                                :class="{ 'input--filled': formData.naam }"
                            >
                                <input
                                    class="input__field input__field--wd"
                                    :class="{
                                        haserror: $v.formData.naam.$error,
                                    }"
                                    type="text"
                                    id="naam"
                                    name="naam"
                                    v-model="$v.formData.naam.$model"
                                />
                                <label
                                    class="input__label input__label--wd"
                                    for="naam"
                                >
                                    <span
                                        class="input__label-content input__label-content--wd"
                                        data-content="Naam"
                                        >Naam</span
                                    >
                                </label>
                                <p
                                    class="error"
                                    v-if="
                                        $v.formData.$dirty &&
                                        $v.formData.naam.$invalid
                                    "
                                >
                                    {{ usernameErrorMessage }}
                                </p>
                            </span>
                            <span
                                class="input input--wd"
                                :class="{ 'input--filled': formData.email }"
                            >
                                <input
                                    class="input__field input__field--wd"
                                    :class="{
                                        haserror: $v.formData.email.$error,
                                    }"
                                    type="text"
                                    id="email"
                                    name="email"
                                    v-model="$v.formData.email.$model"
                                />
                                <label
                                    class="input__label input__label--wd"
                                    for="email"
                                >
                                    <span
                                        class="input__label-content input__label-content--wd"
                                        data-content="E-mail"
                                        >E-mail</span
                                    >
                                </label>
                                <p
                                    class="error"
                                    v-if="
                                        $v.formData.$dirty &&
                                        $v.formData.email.$invalid
                                    "
                                >
                                    {{ emailErrorMessage }}
                                </p>
                            </span>
                            <span
                                class="input input--wd"
                                :class="{ 'input--filled': formData.phone }"
                            >
                                <input
                                    class="input__field input__field--wd"
                                    :class="{
                                        haserror: $v.formData.phone.$error,
                                    }"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    v-model="$v.formData.phone.$model"
                                />
                                <label
                                    class="input__label input__label--wd"
                                    for="phone"
                                >
                                    <span
                                        class="input__label-content input__label-content--wd"
                                        data-content="Telefoon"
                                        >Telefoon</span
                                    >
                                </label>
                                <p
                                    class="error"
                                    v-if="
                                        $v.formData.$dirty &&
                                        $v.formData.phone.$invalid
                                    "
                                >
                                    {{ phoneErrorMessage }}
                                </p>
                            </span>
                            <span
                                class="input input--wd"
                                :class="{ 'input--filled': formData.comment }"
                            >
                                <textarea
                                    class="input__field input__field--wd"
                                    id="comment"
                                    name="comment"
                                    v-model="formData.comment"
                                    rows="4"
                                />
                                <label
                                    class="input__label input__label--wd"
                                    for="comment"
                                >
                                    <span
                                        class="input__label-content input__label-content--wd"
                                        data-content="Omschrijving"
                                        >Omschrijving</span
                                    >
                                </label>
                            </span>
                        </div>
                        <button
                            type="submit"
                            class="form-button uppercase float-shadow"
                        >
                            kop koffie
                        </button>
                    </form>
                </div>
            </div>

            <div class="w-full md:w-3/4 text-center">
                <h4>
                    Ik ben beschikbaar voor kleine remote opdrachten (max. 8 uur
                    per week)
                </h4>
                <div class="email text-2xl">info@willemvanduijn.dev</div>
                <div class="tel text-xl">+316 op verzoek</div>
                <!-- +31 6 83 90 92 34 -->
            </div>
        </template>
    </Section>
</template>
<script>
import TitleBlock from '~/components/title-block/TitleBlock.vue'
import Section from '~/components/section/Section.vue'
import { helpers, required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'ContactForm',

    data() {
        return {
            errors: false,
            empty: true,
            invalid: true,
            formData: {},
        }
    },
    validations: {
        formData: {
            naam: {
                required,
                minLength: minLength(6),
            },
            email: {
                required,
                validEmail: (value) => {
                    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(
                        value
                    )
                },
            },
            phone: {
                required,
                validPhone: (value) => {
                    return /^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$/i.test(
                        value
                    )
                },
            },
        },
    },
    computed: {
        usernameErrorMessage() {
            if (!this.$v.formData.naam.required) {
                return 'Naam is verplicht'
            } else if (!this.$v.formData.naam.minLength) {
                return 'Minimaal 6 karakters'
            }
            return null
        },
        emailErrorMessage() {
            if (!this.$v.formData.email.required) {
                return 'Email is verplicht'
            } else if (!this.$v.formData.email.validEmail) {
                return 'Voer een geldig email adres in'
            }
            return null
        },
        phoneErrorMessage() {
            if (!this.$v.formData.phone.required) {
                return 'Mobiel telefoon nummer is verplicht'
            } else if (!this.$v.formData.email.validPhone) {
                return 'Voer een geldig mobiel nummer in'
            }
            return null
        },
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(
                    (key) =>
                        encodeURIComponent(key) +
                        '=' +
                        encodeURIComponent(data[key])
                )
                .join('&')
        },
        delayTouch($v) {
            $v.$reset()
            if (touchMap.has($v)) {
                clearTimeout(touchMap.get($v))
            }
            touchMap.set($v, setTimeout($v.$touch, 1000))
        },
        handleSubmit(e) {
            this.$v.formData.$touch()
            this.errors = this.$v.formData.$anyError
            this.formTouched = !this.$v.formData.$anyDirty
            this.invalid = !this.$v.formData.$anyDirty

            // Check if form isn't empty and doesn't contain any errors
            if (
                this.errors === false &&
                this.formTouched === false &&
                this.invalid === false
            ) {
                console.log('FORMDATA', this.formData)
                fetch('/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: this.encode({
                        'form-name': e.target.getAttribute('name'),
                        ...this.formData,
                    }),
                })
                    .then((response) => {
                        console.log(response)
                        // show Snackbar with thank you message
                        this.$toasted.success(
                            '&#10004;  Bedankt voor uw bericht! Ik zal z.s.m. reageren.'
                        )
                        // this.$router.push('/success')
                    })
                    .catch((error) => alert(error))
            } else {
                this.$toasted.error(
                    '&#10005;  Voer a.u.b de benodigde velden in'
                )
            }
        },
    },
    components: {
        Section,
        TitleBlock,
    },
}
</script>
<style lang="scss" scoped>
.wd-background {
    background: var(--main-gradient);
}
h4 {
    font-size: 1rem;
    letter-spacing: 5px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
}

.email {
    color: var(--orange);
    letter-spacing: 4px;
}
.tel {
    color: #fff;
    letter-spacing: 4px;
    /* text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
}

.form-wrapper {
    margin: 0 0 20px 0;

    .contact-form {
        // CUSTOM ANIMATED FIELD
        .input {
            position: relative;
            z-index: 1;
            display: inline-block;
            vertical-align: top;
        }

        .input__field {
            position: relative;
            display: block;
            float: right;
            padding: 0.8em;
            border: none;
            border-radius: 0;
            background: #f0f0f0;
            color: #aaa;
            font-weight: 400;
            font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial,
                sans-serif;
            -webkit-appearance: none; /* for box shadows to show on iOS */
        }

        .input__field:focus {
            outline: none;
        }

        .input__label {
            display: inline-block;
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

        .input--wd {
            width: 100%;
            padding-top: 1em;

            .error {
                color: red;
                font-size: 0.75rem;
                padding: 0;
            }
        }

        .input__field--wd {
            width: 100%;
            padding: 0.8em 0.5em;
            background: transparent;
            border: 2px solid;
            color: #b5b5b5;
            -webkit-transition: border-color 0.25s;
            transition: border-color 0.25s;
        }

        .input__label--wd {
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

        .input__label-content--wd {
            padding: 0 1em;
            font-weight: 400;
            color: #b5b5b5;
        }

        .input__label-content--wd::after {
            content: attr(data-content);
            position: absolute;
            top: -200%;
            left: 0;
            color: var(--orange);
            font-weight: 800;
        }

        .input__field--wd:focus,
        .input--filled .input__field--wd {
            border-color: var(--orange);
        }

        .input__field--wd:focus + .input__label--wd,
        .input--filled .input__label--wd {
            -webkit-animation: anim-wd-1 0.25s forwards;
            animation: anim-wd-1 0.25s forwards;
        }

        .input__field--wd:focus + .input__label--wd .input__label-content--wd,
        .input--filled .input__label-content--wd {
            -webkit-animation: anim-wd-2 0.25s forwards ease-in;
            animation: anim-wd-2 0.25s forwards ease-in;
        }

        @-webkit-keyframes anim-wd-1 {
            0%,
            70% {
                -webkit-transform: translate3d(0, 3em, 0);
                transform: translate3d(0, 3em, 0);
            }
            71%,
            100% {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
        }

        @-webkit-keyframes anim-wd-2 {
            0% {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
            70%,
            71% {
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

        @keyframes anim-wd-1 {
            0%,
            70% {
                -webkit-transform: translate3d(0, 3em, 0);
                transform: translate3d(0, 3em, 0);
            }
            71%,
            100% {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
        }

        @keyframes anim-wd-2 {
            0% {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
            70%,
            71% {
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
            width: 100%;
            height: 60px;
            color: #fff;
            background: var(--orange-gradient);

            &:focus {
                outline: none;
            }
        }

        // Default options
        $defaultDuration: 0.3s;
        $primaryColour: #ececec;
        $secondaryColour: #666;
        $shadowColour: rgba(0, 0, 0, 0.6);

        // As is often the case, some devices/browsers need additional code to get CSS to work
        // in the most desired way. These mixins are used to quickly drop in hacks for each element
        @mixin hideTapHighlightColor() {
            //Prevent highlight colour when element is tapped
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
                background: radial-gradient(
                    ellipse at center,
                    rgba(0, 0, 0, 0.35) 0%,
                    rgba(0, 0, 0, 0) 80%
                ); /* W3C */
                transition-duration: $defaultDuration;
                transition-property: transform opacity letter-spacing;
            }

            &:hover {
                transform: translateY(-5px); /* move the element up by 5px */

                &:before {
                    opacity: 1;
                    transform: translateY(
                        5px
                    ); /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
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

        textarea {
            height: auto;
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
