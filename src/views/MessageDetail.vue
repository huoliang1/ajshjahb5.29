<template>
    <ul class="list-group">
        <li class="list-group-item">msgId:{{msgId}}</li>
        <li class="list-group-item">msgContent:{{msgConent}}</li>
        <li class="list-group-item">msgTitle:{{title}}</li>
    </ul>
</template>

<script type="text/ecmascript-6">

    let msgTitles =[
            {id:1,title:'msg001'},
            {id:2,title:'msg002'},
            {id:3,title:'msg003'},
    ]
    


export default {
    props:['msgId','msgConent'],
    data () {
        return {
            title:''
        }
    },
    // 帮我们计算第一次点击链接 路由组件创建的时候 title 的值
    mounted() {
        this.show()
    },

    // 监听 计算非第一次点击链接     如果不写 title的值永远是第一次的title的值
    watch:{
        $route(newval,oldval){
            this.show()
        }
    },
    methods: {
        show(){
            setTimeout(() => {
                this.title = msgTitles.find(item => item.id === this.msgId*1).title
            }, 1000);
        }
    },

}
</script>

<style scoped>


</style>
