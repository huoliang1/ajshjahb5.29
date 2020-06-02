import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home'
import About from '@/views/About'
import Message from '../views/Message'
import News from '../views/News'
import MessageDetail from '../views/MessageDetail'
import NewsDetail from '../views/NewsDetail'
// 定义一个路由器对象
export default new VueRouter({
         // 用来定义路由  //路由模式 默认是hash模式  路径前面会有#
         mode:'history',
        routes:[
            // 每个路由都是一个对象
            {
                path:'/home',  //定义一个路径 当点击链接后路径会变为它
                component:Home,  // 表示要显示的组件
                children:[
                    {
                        path:'/home/message',
                        component:Message,
                        children:[
                            {
                                path:'/home/message/info:msgId',
                                component: MessageDetail,
                               
                                 // props:true  //代表把路由接收到的params参数作为子组件的属性去使用
                                //  props:{username:'彭于晏'} //很少用只能给子组件传递默认静态值
                                props(route){      //route就是当前我这个路由对象
                                    // 把路由对象当中的参数 全部作为自组件的属性去使用
                                    return{
                                        msgId:route.params.msgId,
                                        msgConent:route.query.msgConent
                                    }
                                },
                                name:'msgInfo',  //给当前路由起一个标识名称   这个路由就叫命名路由
                            }
                          
                        ]
                    },
                    {
                        path:'/home/news',
                        component:News,
                        children:[
                            {
                                path:'/home/nws/info:newsId',
                                component: NewsDetail,
                                props(route){
                                    return {newsId:route.params.newsId,newsContent:route.query.newsContent}
                                },
                                name:'newsInfo'
                            }
                         
                        ]
                    },
                ]
            },
            {
                path:'/about',
                component:About
            },
            {
                path:'/',
                redirect:'/home' //重定向定义
            }
        ]

})