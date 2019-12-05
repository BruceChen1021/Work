import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '@/components/Home.vue'
// import About from '@/components/About.vue'
// import User from '@/components/User.vue'

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const News = () => import('../components/News.vue')
const Message = () => import('../components/Message.vue')
const Profile = () => import('../components/Profile.vue')

// 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children:[
            {
                path: '/',
                redirect: 'message'
            },
            {
                path:'news',
                component: News,
                meta:{
                    keepAlive:true
                }
            },
            {
                path: 'message',
                component: Message
            }
        ],
        meta:{
            title : '首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta:{
            title : '关于'
        },
        // beforeEnter: (to, from, next) => {
        //     next()
        // }
    },
    {
        path: '/user/:userId',
        component: User,
        meta:{
            title : '用户'
        }
    },
    {
        path: '/profile/:userId',
        component: Profile,
        meta:{
            title : '档案'
        }
    }
]

const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: 'active'
})
// 前置路由 
router.beforeEach((to, from, next) => {
    // document.title = to.matched[0].meta.title
    document.title = to.meta.title
    next()
})
// 后置路由
router.afterEach( (to,from) => {
    console.log('-------')
})

export default router

