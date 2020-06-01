<template>
       <div class="row">
           <h2 v-if="isFirst">初次见面请多多关照</h2>
           <h2 v-else-if="isLoading">发送请求中请稍后</h2>
           <h2 v-else-if="errMsg">请求出错，{{errMsg}}请重新发送请求</h2>

            <div v-else class="card" v-for="(user, index) in users" :key="user.user_name">
                <a :href="user.user_url" target="_blank">
                <img :src="user.user_img" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.user_name}}</p>
            </div>
      </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {

        mounted() {
            //用来绑定事件 定时器  等等一些异步处理的操作 
            this.$bus.$on('searchAjax',this.searchAjax)
        },

        data() {
            return {
                isFirst:true,  //看是不是第一次显示页面
                isLoading:false,  //看是不是正在发送请求
                errMsg:'',        //请求出错后需要保存的信息
                users:[]           //请求成功后需要保存的信息
            }
        },

      methods: {
          searchAjax(searchName){
              this.isFirst = false
              this.isLoading = true
                axios({
                    // https://api.github.com/search/users
                    url:'https://localhost:8000/api/user/info',
                    method:'GET',
                    params:{
                        q:searchName
                    }
                }).then(response=>{
                    //如果请求成功后的数据 填充到我们数组当中user
                    // console.log(response.data);
                    this.isLoading = false
                     response.data.items.forEach(item =>{
                        let user_name = item.login
                        let user_img = item.avatar_url
                        let user_url = item.url
                        let obj ={
                            user_name,
                            user_img,
                            user_url
                        }       
                        this.users.push(obj)
                     })   
                }).catch(error=>{
                    // 如果失败
                    this.errMsg = error.message
                    this.isLoading= false
                })
          }

      },

}
</script>

<style scoped>
    .card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
