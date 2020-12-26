import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { ObserveVisibility } from 'vue-observe-visibility'
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.directive('observe-visibility', ObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
