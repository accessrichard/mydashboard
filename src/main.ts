import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from '@/lib/store';
import 'vuetify/dist/vuetify.min.css';
import Vuelidate from 'vuelidate';
import { handleVueError, handlePromiseError, handleWindowError } from "./lib/errorHandler"

Vue.config.errorHandler = handleVueError;
handlePromiseError();
handleWindowError();

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
