<template>
  <div id="app">
    <h1>我是网站的标题</h1>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link> -->
    <!-- <router-link to="/home" tag="button" active-class="active">首页</router-link>&nbsp;&nbsp;
    <router-link to="/about" active-class="active">关于</router-link> -->
    <!-- <router-link to="/home" tag="button" replacre>首页</router-link>&nbsp;&nbsp;
    <router-link to="/about" replacre>关于</router-link> -->

    <!-- <button @click="linkHome">首页</button>
    <button @click="linkAbout">关于</button> -->
    <router-link to="/home" tag="button" replace>首页</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/about" replace>关于</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <!-- <router-link to="/user/zhangsan" >用户</router-link> -->
    <router-link to="/user/123">用户</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <!-- <router-link 
      :to="{
        path: '/profile/' + 123,
        query: {
          name: 'BruceChen',
          age: 18,
          height: 180
        }
      }"
    >档案管理</router-link> -->
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Home,News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  // name: 'app',
  name: 'App',
  data(){
    return{
      userId: "lisi"
    }
  },
  // 代码方式实现路由跳转
  methods: {
    linkHome(){
      this.$router.push('/home')
    },
    linkAbout(){
      this.$router.push('/about')
    },
    userClick(){
      this.$router.push('/user' + this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile/' + this.userId,
        query: {
          name: 'BruceChen',
          age: 18,
          height: 180
        }
      })
    }
  },
}
</script>

<style>
  #app{
    border: 10px solid green
  }
  .active{
    color: red
  }
</style>
