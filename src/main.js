// Import main css
import '~/assets/style/index.scss';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';
import Fragment from 'vue-fragment';
import BackToTop from 'vue-backtotop';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faGithub, faTwitter, faInstagram, faLinkedin, faChevronUp);

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Push custom Fonts
  head.link.push({
    rel: 'stylesheet',
    href:
      '<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900&display=swap" rel="stylesheet">'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
  });
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700,900&display=swap'
  });
  // Push animation script for homepage header
  head.script.push({ src: 'js/particleAnim.js' });
  // Push Chat script
  head.script.push({ src: 'js/chat.js' });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  // FontAwesome
  Vue.component('font-awesome', FontAwesomeIcon);
  // Use Fragment Plugin
  Vue.use(Fragment.Plugin);
  Vue.use(BackToTop);
}
