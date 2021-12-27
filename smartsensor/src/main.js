import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

Vue.config.productionTip = false
Vue.component('font-awesome-icon',FontAwesomeIcon);
library.add(fas);

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
