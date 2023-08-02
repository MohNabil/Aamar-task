import { createRouter, createWebHistory } from 'vue-router'
import Users from '@/views/Users.vue'
import UserDetails from '@/views/UserDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Users', component: Users },
    { path: '/user/:id', name: 'UserDetails', component: UserDetails }
  ]
})

export default router
