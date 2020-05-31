<template>
<div>
      <!-- 第一次使用子组件 -->
    <Child>
        <!-- 父组件当中给子组件插槽传递内容
            一个template代表的是给一个插槽的内容
            如果是给具名插槽的，那么template需要带上名字
            template如果传递内容（标签）比较多的时候，我们需要带上
            如果传递的内容就一个标签，那么template是可以省略的
         -->
        <!-- 父传子 -->
         <!-- 给默认插槽使用的 -->
        <template>
            <h2>彭于晏真帅1</h2>
            <span>嘿嘿</span>  
        </template>
        <!-- 给具名插槽使用的 -->
        <!-- <template slot="aa">
            <p>我是具名的内容</p>
        </template> -->
        <!-- 如果template内部只有一个标签可以简写 -->
        <p slot="aa">我是具名的内容</p>
        

        <!-- 作用域插槽是依赖父组件决定子组件的展现 -->
        <!-- 如果isShow是true,我们就让子组件当中所有的内容前面带个√ -->
        <!-- 子传父 -->
        <span slot-scope="slotProps" v-show="isShow" slot="uu">
            √{{slotProps.person.name}}
        </span>

    </Child>
</div>
</template>

<script type="text/ecmascript-6">
import Child from './components/Child'
export default {
  
    components:{
      Child
    },

    data () {
      return {
        isShow:true
      }
    }
}
</script>

<style scoped>


</style>
