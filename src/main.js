// Self host fonts using ==> https://github.com/KyleAMathews/typefaces
require('typeface-roboto')
// Import main css
import '~/assets/style/index.scss'
import 'highlight.js/styles/night-owl.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
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
    // Check for home route to push script - disabled >> load from component
    // router.beforeEach((to, from, next) => {
    //     // to and from are both route objects.
    //     if (to.name === 'home') {
    //         // Push animation script for homepage header
    //         head.script.push({
    //             src: '/js/chat.js',
    //         })
    //     }
    //     next()
    // })

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    // FontAwesome
    Vue.component('font-awesome', FontAwesomeIcon)
    // Use snackbar for succesfull form post
    if (isClient) {
        const Toasted = require('vue-toasted').default

        Vue.use(Toasted, {
            duration: 2000,
            position: 'bottom-center',
        })
    }

    // Form validation
    Vue.use(Vuelidate, { ssr: true })
}
