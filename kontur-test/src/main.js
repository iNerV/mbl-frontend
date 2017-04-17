import Vue from 'vue'
import App from './App.vue'
import json from './components/autocomplete/kladr.json';

const app = new Vue({
  data: function () {
    return {
      cities: json,
      value: ''
    }
  },
  render: function(createElement){
    return createElement(App)
  }
}).$mount('#app');

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
//   data: function () {
//     return {
//       cities: json,
//       value: ''
//     }
//   },
// });