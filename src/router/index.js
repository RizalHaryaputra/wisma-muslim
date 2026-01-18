import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProgramView from '../views/ProgramView.vue'
import FacilityView from '../views/FacilityView.vue'
import GalleryView from '../views/GalleryView.vue'
import JoinView from '../views/JoinView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/program',
            name: 'program',
            component: ProgramView
        },
        {
            path: '/facility',
            name: 'facility',
            component: FacilityView
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: GalleryView
        },
        {
            path: '/join',
            name: 'join',
            component: JoinView
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router