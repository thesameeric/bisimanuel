import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Default from './layouts/default.vue';
import Blank from './layouts/blank.vue';

Vue.config.productionTip = false;
Vue.component('defaultLayout', Default);
Vue.component('blankLayout', Blank);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
