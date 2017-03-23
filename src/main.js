import 'assets/lib/flexible_css.debug.js'
import 'assets/lib/flexible.debug.js'

import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
