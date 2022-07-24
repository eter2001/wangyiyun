import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Me from '../views/Me.vue'
import CloudVillage from '../views/CloudVillage.vue'
import Video from '../views/Video.vue'

import store from '../store/index'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/listview',
        name: 'listview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/ListView.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/me',
        name: 'me',
        beforeEnter: (to, from, next) => {
            console.log(store.state.user)
            if (store.state.user.isLogin) {
                next()
            } else {
                next('/login')
            }
        },
        component: Me
    },
    {
        path: '/cloudVillage',
        name: 'cloudVillage',
        beforeEnter: (to, from, next) => {
            console.log(store.state.user)
            if (store.state.user.isLogin) {
                next()
            } else {
                next('/login')
            }
        },
        component: CloudVillage
    },
    {
        path: '/video',
        name: 'video',
        beforeEnter: (to, from, next) => {
            console.log(store.state.user)
            if (store.state.user.isLogin) {
                next()
            } else {
                next('/login')
            }
        },
        component: Video
    }
]

const router = createRouter({
    // mode: "hash",
    history: createWebHashHistory(),
    routes
})

export default router