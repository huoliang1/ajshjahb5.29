<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="seearch">Search</button>
      </div>
    </section>
</template>

<script type="text/ecmascript-6">
export default {

    
    data () {
        return {
            searchName:'',      
        }
    },


    methods: {
        search(){
            // this.$bus.$emit('searchAjax',this.searchName)
            this.$store.dispatch('search',this.searchName)
        }
    }
}
</script>

<style scoped>


</style>

