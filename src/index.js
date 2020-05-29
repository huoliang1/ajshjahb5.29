import Vue from 'vue'
import App from './App'

// Vue.prototype.$globalEventBus = new Vue()
// 1.这个对象为什么是Vue的实例 因为Vue的实例可以使用原型中的$on $emit
// 2.这个对象为什么要添加在Vue的原型上，因为我们需要让所有的组件都可以找到这个对象

new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this    //事件总线
    },
    el:"#root",
    render: h=> h(App)
})