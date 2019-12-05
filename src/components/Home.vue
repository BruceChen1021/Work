<template>
    <div class="home">
        <h1>我是首页标题</h1>
        <p>我是首页的内容</p>
        <router-link to="/home/news">新闻页面</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/home/message">消息管理</router-link>
        <router-view></router-view>
    
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            message: '你好啊'
        }
    },
    created() {
        console.log('created');
        document.title = '首页'
    },
    mounted(){
        console.log('mounted')
    },
    updated() {
        console.log('updated')
    },
    // destroyed() {
    //     console.log('activated')
    //     this.$router.push(this.path)
    // },
    // beforeRouteLeave (to, from, next) {
    //     console.log(this.$route.path);
    //     this.path = this.$route.path;
    //     next()
    // }
}
</script>

<style scoped>
    .home{
        width: 600px;
        height: 400px;
        border: 5px solid red
    }
</style>