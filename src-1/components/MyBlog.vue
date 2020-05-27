<template>
<h2>
    这个文章标题是{{title}}
   <Mybutton :title="title"></Mybutton>
</h2>
</template>

<script type="text/ecmascript-6">

import Mybutton from './Mybutton';
export default {
    props:['title'],  //声明接收属性
    components:{
        Mybutton
    }

}
</script>

<style scoped>


</style>
