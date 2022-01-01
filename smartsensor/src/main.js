import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './plugins/base'

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
library.add(fas);
library.add(far);

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
