<template>
    <Section class="wd-background">
        <template v-slot:section-title>
            <title-block
                title="Samenwerken?"
                :subtitle="$static.contactcontent.subtitle"
            />
        </template>
        <template v-slot:content>
            <div class="w-full md:w-4/4 p-10 pb-0 text-center">
                <p class="font-black">
                    {{ $static.contactcontent.intro }}
                </p>
                <p></p>
                <p>
                    {{ $static.contactcontent.idealProject }}
                </p>
            </div>
            <div class="w-full lg:w-3/4 flex justify-center">
                <g-image src="~/assets/images/wd-contact.webp" alt="Contact" />
            </div>

            <div class="w-full lg:w-4/4 h-46 flex justify-center align-wd">
                <div class="form-wrapper w-full md:w-3/4">
                    <ValidationObserver ref="form">
                        <form
                            class="contact-form p-5"
                            name="contact-form"
                            method="post"
                            @submit.prevent="handleSubmit"
                            action="/success/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            novalidate
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact-form"
                            />
                            <p hidden>
                                <label>
                                    Don’t fill this out:
                                    <input name="bot-field" />
                                </label>
                            </p>
                            <div class="sender-info">
                                <ValidationProvider
                                    name="naam"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <div
                                        class="input input--wd"
                                        :class="{
                                            'input--filled': formData.naam,
                                        }"
                                    >
                                        <input
                                            class="input__field input__field--wd"
                                            type="text"
                                            id="naam"
                                            name="naam"
                                            v-model="formData.naam"
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
                                        <div class="error">{{ errors[0] }}</div>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider
                                    name="email"
                                    rules="required|email"
                                    v-slot="{ errors }"
                                >
                                    <div
                                        class="input input--wd"
                                        :class="{
                                            'input--filled': formData.email,
                                        }"
                                    >
                                        <input
                                            class="input__field input__field--wd"
                                            type="text"
                                            id="email"
                                            name="email"
                                            v-model="formData.email"
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
                                        <div class="error">{{ errors[0] }}</div>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider
                                    name="phone"
                                    :rules="{
                                        regex: /^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$/i,
                                    }"
                                    v-slot="{ errors }"
                                >
                                    <div
                                        class="input input--wd"
                                        :class="{
                                            'input--filled': formData.phone,
                                        }"
                                    >
                                        <input
                                            class="input__field input__field--wd"
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            v-model="formData.phone"
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
                                        <div class="error">{{ errors[0] }}</div>
                                    </div>
                                </ValidationProvider>

                                <div
                                    class="input input--wd"
                                    :class="{
                                        'input--filled': formData.comment,
                                    }"
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
                                </div>
                            </div>
                            <button
                                type="submit"
                                class="form-button uppercase float-shadow"
                            >
                                kop koffie
                            </button>
                        </form>
                    </ValidationObserver>
                </div>
            </div>

            <div class="w-full md:w-3/4 text-center">
                <div class="available-container">
                    <div>
                        <div
                            class="ping"
                            :class="{
                                'ping--green':
                                    $static.contactcontent.isAvailable,
                            }"
                        ></div>
                    </div>
                    <div>
                        <h4>
                            {{ $static.contactcontent.available }}
                        </h4>
                    </div>
                </div>

                <div class="email text-2xl">info@willemvanduijn.dev</div>
                <div class="tel text-xl">+316 op verzoek</div>
            </div>
        </template>
    </Section>
</template>
<static-query>
    query {
  contactcontent: contentfulSectionContact(id:"4dmdBjD44Z5grlrgt1R1NS"){
    intro
    title
    subtitle
    id
    available
    isAvailable
    idealProject
  }
}
</static-query>
<script>
import TitleBlock from '~/components/title-block/TitleBlock.vue'
import Section from '~/components/section/Section.vue'
import {
    ValidationProvider,
    ValidationObserver,
    configure,
    extend,
} from 'vee-validate'
import { required, email, regex } from 'vee-validate/dist/rules'

// No message specified.
extend('email', {
    ...email,
    message: 'Voer een geldig email adres in',
})

// Override the default message.
extend('required', {
    ...required,
    message: '{_field_} is verplicht',
})

// Override the default message.
extend('regex', {
    ...regex,
    message: 'Voer een geldig telefoonnummer in',
})

export default {
    name: 'Contact',

    data() {
        return {
            errors: false,
            empty: true,
            invalid: true,
            formData: {},
        }
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
        handleSubmit(e) {
            // Check if form isn't empty and doesn't contain any errors
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    this.$toasted.error(
                        '&#10005;  Voer a.u.b de benodigde velden in'
                    )
                    return
                }
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
                        // show Snackbar with thank you message
                        this.$toasted.success(
                            '&#10004;  Bedankt voor uw bericht! Ik zal z.s.m. reageren.'
                        )
                    })
                    .catch((error) => {
                        this.$toasted.error(
                            '&#10005;  Voer a.u.b de benodigde velden in'
                        )
                    })
            })

            // Resetting Values
            this.formData.name =
                this.formData.email =
                this.formData.phone =
                this.formData.comment =
                    ''

            // Wait until the models are updated in the UI
            this.$nextTick(() => {
                this.$refs.form.reset()
            })
        },
    },
    components: {
        Section,
        TitleBlock,
        ValidationProvider,
        ValidationObserver,
    },
}
</script>
<style lang="scss" scoped>
.available-container {
    padding: 20px;
    border: 1px dashed var(--pingborder);
    background: var(--bg-color-a);
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    h4 {
        margin: 0;
    }
}

.ping {
    background: red;
    border-radius: 50%;
    height: 10px;
    width: 10px;

    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 2s infinite;

    &--green {
        background: greenyellow;
        animation: pulsegreen 2s infinite;
    }
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
    }
}

@keyframes pulsegreen {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(173, 255, 47, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(173, 255, 47, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(173, 255, 47, 0);
    }
}

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
    color: var(--telephone);
    letter-spacing: 4px;
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
            -webkit-appearance: none;
            /* for box shadows to show on iOS */
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
            font-family: 'Roboto', sans-serif;
            margin: 10px 0;
            width: 100%;
            height: 60px;
            color: #fff;
            background: var(--orange-gradient);

            &:focus {
                outline: none;
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
