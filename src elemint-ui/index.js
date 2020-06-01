import Vue from 'vue';
import App from './App.vue';
import "@babel/polyfill"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

new Vue({
  el: '#root',
  render: h => h(App)
});