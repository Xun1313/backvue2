import Vue from 'vue'
import App from './App.vue'
import router from './router'
import currency from './components/filter/currency'
Vue.filter('currency', currency)
import 'bootstrap'
/* import './assets/bootstrap/bootstrap-grid.css'
import './assets/bootstrap/bootstrap-reboot.css'
import './assets/bootstrap/bootstrap.css'
import './assets/bootstrap/docs.css' */
Vue.use(require('vue-faker'))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
