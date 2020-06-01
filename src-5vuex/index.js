import Vue from 'vue';
import App from './App.vue';
import "@babel/polyfill"

import store from './vuex/store'

new Vue({
  el: '#root',
  render: h => h(App),
  store //注册vuex 只有在这里注册以后vuex才能生效
  // 注册好之后，每个组件当中都可以通过this.$store拿到我们的vuex store
});