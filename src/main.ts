import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
import { Promised } from "vue-promised";
Vue.component("Promised", Promised);
Vue.config.productionTip = false;

import "@/assets/style/global.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

