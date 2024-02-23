import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Project from "@/views/Project.vue"
const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/"
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
