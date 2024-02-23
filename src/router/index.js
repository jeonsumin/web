import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Project from "@/views/Project.vue"
const routes = [
  {
    name: 'home',
    path: '/web',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/web"
  },
  {
    path: '/:id',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
