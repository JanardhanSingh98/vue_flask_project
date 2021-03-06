import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/404', name: 'NotFound', component: NotFound
    },
    {
        path: '/:catchAll(.*)', redirect:'404'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
