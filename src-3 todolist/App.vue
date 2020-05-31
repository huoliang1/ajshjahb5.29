<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header @addTodo="addTodo"/> -->
      <Header ref="add"/>
      <Main :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"/>
      <!-- props版本 -->
      <!-- <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"/> -->
      <!-- 全局事件总线版本 -->
      <Footer :todos="todos" :updateAll="updateAll"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PubSub from 'pubsub-js'
  import Header from "./components/Header"
  import Main from './components/Main'
  import Footer from './components/Footer'
export default {

  components: {
    Header,
    Main,
    Footer
  },

  mounted() {
    this.$refs.add.$on('addTodo',this.addTodo) || []
    // this.$bus  全局事件总对象
    // 通过给这个事件总对象绑定事件    //回调还留在父组件当中
    this.$bus.$on("deleteAll",this.deleteAll)

    // 通过消息订阅发布处理
    PubSub.subscribe('msg',this.updateAll){

    }
  },

  data() {
    return {
            //   todos:[
            //     {id:1,content:'抽烟',isOver:false},
            //     {id:2,content:'喝酒',isOver:true},
            //     {id:3,content:'烫头',isOver:false},
            // ]

            todos:JSON.parse(localStorage.getItem('todos_key'))
     }
  },

    methods: {
      addTodo(obj){
        this.todos.unshift(obj)
      },

      updateOne(index,val){
        this.todos[index].isOver = val
      },

      deleteOne(index){
          this.todos.splice(index,1)
      },

      updateAll(msg,val){
          this.todos.forEach(item => item.isOver = val)
      },
      deleteAll(){
          //把已经完成的  isOver为true的干掉
          // 也可以认为 把isOver 为false 的留下
          // 过滤出所有没有完成的,组成新数组，赋值给this.todos
          this.todos = this.todos.filter(item => !item.isOver)
       
      }
    },
 
    watch: {
    //   todos(newval,oldval){
          // 一般监视  只能监视todos本身  不能监视内部更深层次的数据  不能监视到数组内部操作对象       
      //      localStorage.setItem('todos_key',JSON.stringify(newval))
      // }



      todos:{
        // 深度监视,不管本身变化还是内部变化都能监视到
        deep:true,
        handler(newval,oldval){
          localStorage.setItem('todos_key',JSON.stringify(newval))
        }
      }
      
    },

  beforeDestroy() {
      // this.$refs.add.$on('addTodo',this.addTodo)
  },

}
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
