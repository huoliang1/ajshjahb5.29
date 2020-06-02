import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// vuex  处理数据的一个系统


// 1. state 代表状态

const state = {
    // 存放数据的地方
        count:0  // Vuex处理的一般是多个组件共享的数据
}


// 2.mutations 代表直接修改数据的行为
const mutations = {
        // 修改数据  不能写判断  循环  定时器
        increment(){
            state.count++
        },
        decrement(){
            state.count--
        },
} 


// 3.actions 代表用户在组件当中的行为对已经的回调函数内部逻辑方法
const actions ={
        // increment(context){
        //     context.commit('increment')
        // },
        // decrement(context){
        //     context.commit('decrement')
        // },
         incrementIfOdd(context){
          if(context.state.count % 2 === 0){
            context.commit('increment')
          }
        },
         incrementAsync(context){
            setTimeout(() => {
                context.commit('increment')   
            }, 1000);
         }


} 


// 4.getters 代表根据我们的状态数据, 计算出来的数据方法 (只有getter,没有setter)
const getters = {
        currentCount(state){
            return state.count * 4
        }

}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})