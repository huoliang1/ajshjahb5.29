<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Add @addComment="addComment"/>
        <List :comments="comments" :deleteComment="deleteComment"/>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from './components/Add'
import List from './components/List'

export default {

    components: {
        Add,
        List
    },

        data() {
        return {
            comments:[

                {id:1,username:"彭于晏",content:"我最帅"},
                {id:2,username:"胡歌",content:"Vue真难"},
                {id:3,username:"周星驰",content:"今天晚上吃点啥呢"},

            ] 
        }
    },

        methods: {
            addComment(obj){
                this.comments.unshift(obj)   //往comments 头部添加
            },
            deleteComment(index){
                this.comments.splice(index,1)
            }


        },

}
</script>

<style scoped>


</style>
