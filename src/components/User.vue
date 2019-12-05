<template>
    <div class="user">
        <h2>我是用户界面</h2>
        <p>我是用户界面的内容</p>
        <h2>{{ userId }}</h2>
        <h2>{{ $route.params.userId }}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
    name: 'User',
    data(){
        return{
            message: 'aaaa'
        }
    },
    computed: {
        userId() {
            return this.$route.params.userId
        }
    },
    methods: {
        btnClick(){
            console.log(this.$router)
            console.log(this.$route)
        }
    },
}
</script>

<style scoped>
    .user{
        width: 600px;
        height: 300px;
        border: 5px solid yellow
    }
</style>