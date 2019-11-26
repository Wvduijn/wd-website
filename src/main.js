// Import main css
import '~/assets/style/index.scss';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';

import Fragment from 'vue-fragment';

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
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  // Use Fragment Plugin
  Vue.use(Fragment.Plugin);
}
