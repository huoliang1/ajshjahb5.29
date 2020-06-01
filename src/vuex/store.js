import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'  //导入axios 去发送ajax请求
Vue.use(Vuex)
// vuex  处理数据的一个系统





// 1. state 代表状态

const state = {
    isFirst:true,  //看是不是第一次显示页面
    isLoading:false,   //看是不是正在发送请求
    errMsg:'',         //请求出错后需要保存的信息 
    users:[]          //请求成功狗需要保存的信息
},


// 2.mutations 代表直接修改数据的行为
const mutations = {
    // 请求中在操作数据
        requesting(state){
            state.isFirst = false
            state.isLoading = true
        },
    // 请求成功在操作数据
        request_success(state,users){
            state.isLoading = false
            state.users = users
        },

    // 请求失败在操作数据
        request_faild(state,msg){
            state.errMsg = msg//axios错误信息是message
            state.isLoading = false
        }
}, 





// 3.actions 代表用户在组件当中的行为对已经的回调函数内部逻辑方法
            
    const actions = {
            async search({commit},searchName){
                    //发送请求的时候我们把页面切换成正在发送请求的页面
                    // let {commit} = context // 结构赋值
                    commit('requesting')
                    try {
                        let response = await axios({
                            url:'https://api.github.com/search/users',
                            method:'GET',
                            params:{
                                q:searchName
                            }     
                        })
                          let users =[]
                        //items 第一条信息就是一个用户信息 是一个对象
                        response.data.items.forEach(item => {
                            //从每个获取到的数据当中过滤我要的数据
                            let user_name = item.login
                            let user_img = item.avatar_url
                            let user_url = item.url
                            //把我要的数据组装成一个对象
                            let obj = {
                                user_name,
                                user_img,
                                user_url
                            }
                            //把数据对象给放到我的数据当中
                            users.push(obj)
                        })

                        commit('request_success',users)

                    } catch (error) {
                        commit('request_faild',error.message)
                    }
            }
    },




// 4.getters 代表根据我们的状态数据, 计算出来的数据方法 (只有getter,没有setter)
const getters = {
        

},


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})