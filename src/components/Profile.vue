<template>
    <div class="profile">
        <h2>这里是档案管理页面</h2>
        <p>{{ $route.query.name }}</p>
        <p>{{ $route.query.age }}</p>
        <p>{{ $route.query.height }}</p>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    mounted() {
        console.log(this.$route.query.name);
        console.log(this.$route.query.age);
        // console.log(this.$route)
    },
    // created() {
    //     console.log('created');
    //     document.title = '档案'
    // },
}
</script>

<style scoped>
    .profile{
        width: 600px;
        height: 200px;
        border: 5px solid blueyellow
    }
</style>


