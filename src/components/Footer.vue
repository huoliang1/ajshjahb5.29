<template>
      <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="isCheckAll"/>
        </label>
        <span>
          <span>已完成{{overNum}}</span> / 全部{{allNum}}
        </span>
        <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
      props:{
        todos:Array,
        updateAll:Function,
        // deleteAll:Function  //props 需要  //全局事件总线不需要
      },

      computed: {
          overNum(){
              // 需要统计todos里面所有的对象isOver属性值为true 的个数
              // return this.todos.filter(function(item,index){
              //     return item.isOver
              // })

              return this.todos.filter(item => item.isOver).length
          },
          allNum(){
            return this.todos.length
          },

          isCheckAll:{
                get(){
                    return this.overNum === this.allNum && this.allNum > 0
                },
                set(val){
                    this.updateAll(val)
                }
          }

      },

      methods: {
           deleteA(){
              // this.deleteAll()   props

              // 获取全局事件总线 去触发事件
              this.$bus.$emit("deleteAll")
           }
      },


}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}


</style>
