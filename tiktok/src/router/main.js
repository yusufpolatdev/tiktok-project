import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/:username',
        name: 'profile',
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/Settings.vue')
    },
    {
        path: '/hashtags',
        name: 'hashtags',
        component: () => import('../views/Videos.vue')
    },
    {
        path: '/premium',
        name: 'premium',
        component: () => import('../views/Premium.vue')
    },





]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;