<template>
<div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">{{count}}</button>
  <button @click="incrementAsync">{{count}}</button>

  <p>4倍 的count {{currentCount}}</p>
</div>
</template>

<script type="text/ecmascript-6">
import {mapActions,mapGetters,mapMutations,mapState} from 'vuex'
export default {

      // methods:{
      //     increment(){
      //       // 这里本来就是直接增加数据    没必要在分发给actions然后在通过mutatios 
      //       // 可以直接提交给mutations
      //       this.$store.commit('increment')  //emit 都代表分发
      //     },

      //     decrement(){ 
      //         this.$store.commit('decrement') 
      //     },
      //     incrementIfOdd(){
      //          this.$store.dispatch('incrementIfOdd') 
      //     },
      //     incrementAsync(){
      //       this.$store.dispatch('incrementAsync') 
      //     }
      // },  

   methods:{
          // increment(){
          //   this.$store.commit('increment')  //emit 都代表分发
          // },

          // decrement(){ 
          //     this.$store.commit('decrement') 
          // },

          //简写方式是上面的简写方式，它会把increment映射到对应的mutations方法
        ...mapMutations(['increment','decrement']),

          // incrementIfOdd(){
          //      this.$store.dispatch('incrementIfOdd') 
          // },
          // incrementAsync(){
          //   this.$store.dispatch('incrementAsync') 
          // }

          //简写方式是上面的简写方式，它会把incrementIfOdd映射到对应的actions方法方法
        ...mapActions(['incrementIfOdd','incrementAsync'])
        
          
  },  

        // 拆包
  //     let arr = [1,6,2,3,4,5]
  //   Math.max(...arr)  //最大值
  // console.log(...arr);
  
      computed: {

        // count(){
        //   // 如果没有经过运算  我们就可以在计算属性中直接去拿
        //   return this.$store.state.count
        // },
        ...mapState(['count']),
        ...mapGetters(['currentCount'])
        // currentCount(){
        //   // 如果经过运算的数据  去getters 里面去拿
        //   return this.$store.getters.currentCount
        // }
      }
}

</script>

<style scoped>


</style>


