import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('../views/EditorView.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../views/ManageView.vue')
    }
  ]
})

export default router
