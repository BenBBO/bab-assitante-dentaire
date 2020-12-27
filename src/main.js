import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { ObserveVisibility } from 'vue-observe-visibility'

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.directive('observe-visibility', ObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
