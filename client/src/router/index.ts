import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/views/TheHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/create-post',
      name: 'createPost',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CreatePost.vue')
    }
  ]
})

export default router
