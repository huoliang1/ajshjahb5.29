import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill'
import router from './router/index'
new Vue({
      // 全局事件总线
      beforeCreate(){
          Vue.prototype.$bus =this
      },
      el: '#root',
      render: h => h(App),
      router   //当我们在这里注册路由的时候  组件对象当中可以获取到
      // 两个对象  this.$router 和 this.$route
      // this.$router 代表的是路由器对象
      // this.$route  代表的是当前路由器对象
});
