// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#d97909',
        secondary: '#595142',
        accent: '#2da66d',
      },
      dark: {
        primary: '#d97909',
        secondary: '#595142',
        accent: '#204165',
      },
    },
  },
})
