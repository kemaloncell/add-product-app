import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue({
  methods: {
    productAdded(value) {},
  },
});
new Vue({
  el: '#app',
  render: (h) => h(App),
});
