import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: {
      id: 'G-5TW905R4YH',
      params: {
          send_page_view: false,
      },
  },
}, router)

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
