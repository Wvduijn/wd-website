// Import main css
import '~/assets/style/index.scss'
import 'highlight.js/styles/night-owl.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import Fragment from 'vue-fragment'
import Vuelidate from 'vuelidate'

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faChevronUp, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin,
    faChevronUp,
    faThumbsUp
)

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
    // Push custom Fonts
    //fonts.googleapis.com/css?family=Poppins:400
    head.link.push({
        rel: 'stylesheet',
        href:
            'https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900&display=swap',
    })
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap',
    })
    head.link.push({
        rel: 'stylesheet',
        href:
            'https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700,900&display=swap',
    })

    // Check for home route to push script
    router.beforeEach((to, from, next) => {
        // to and from are both route objects.
        if (to.name === 'home') {
            // Push animation script for homepage header
            head.script.push({
                src: '/js/particleAnim.js',
            })
        }
        next()
    })

    // Push Chat script
    head.script.push({
        src: '/js/chat.js',
    })
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    // FontAwesome
    Vue.component('font-awesome', FontAwesomeIcon)
    // Use Fragment Plugin
    Vue.use(Fragment.Plugin)
    // Use snackbar for succesfull form post
    if (isClient) {
        const Toasted = require('vue-toasted').default

        Vue.use(Toasted, {
            duration: 2000,
            position: 'bottom-center',
        })
    }

    // Form validation
    Vue.use(Vuelidate)
}
