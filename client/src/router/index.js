import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blocks from '../views/Blocks.vue'
import Transactions from '../views/Transactions.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blocks',
    name: 'Blocks',
    component: Blocks
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
