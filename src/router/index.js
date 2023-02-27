import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import MainView from "@/views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: [
        {
          path: '',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'art/:id',
          name: 'art',
          component: () => import('../views/ArticleView.vue')
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin/AdminView.vue'),
      children: [
        {
          path: '',
          name: 'adminHome',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Admin/HomeView.vue')
        },
        {
          path: 'editor',
          name: 'editor',
          component: () => import('../views/Admin/EditorView.vue')
        },
        {
          path: 'manage',
          name: 'manage',
          component: () => import('../views/Admin/ManageView.vue')
        }]
    },
  ]
})

export default router
