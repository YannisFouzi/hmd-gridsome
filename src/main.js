// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import Buefy from "buefy";
import "~/main.scss";

export default function(Vue, { router, head, isClient }) {
  // Import Font Awesome
  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.12.0/css/all.css"
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Register our Bulma component library
  Vue.use(Buefy);
}
