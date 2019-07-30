import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import './assets/bootstrap/bootstrap-grid.css';
import './assets/bootstrap/bootstrap-reboot.css';
import './assets/bootstrap/bootstrap.css';
import './assets/bootstrap/docs.css';
Vue.use(require('vue-faker'))

/* import iView from 'iview';
import 'iview/dist/styles/iview.css'; */
Vue.config.productionTip = false;

//Vue.use(iView)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
