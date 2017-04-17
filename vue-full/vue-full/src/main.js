// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.component('icon', require('@/components/icon/Icon'));

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  data() {
    return {
    };
  },
  render(createElement) {
    return createElement(App);
  },
}).$mount('#app');
