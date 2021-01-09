import Vue from 'vue';
import App from './App.vue';
import router from './router';

/* Bootstrap */
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* Aditional components */
import VueNumber from 'vue-number-animation'
import { ObserveVisibility } from 'vue-observe-visibility'
 
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueNumber)
Vue.directive('observe-visibility', ObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
