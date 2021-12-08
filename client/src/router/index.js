import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blocks from '../views/Blocks.vue'
import Block from '../views/Block.vue'
import Transactions from '../views/Transactions.vue'
import Transaction from '../views/Transaction.vue'
import Wallet from '../views/Wallet.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blocks',
    component: Blocks
  },
  {
    path: '/blocks/:height',
    component: Block
  },
  {
    path: '/blocks/:height/transactions/:hash',
    component: Transaction
  },
  {
    path: '/transactions',
    component: Transactions
  },
  {
    path: '/transactions/:hash',
    component: Transaction
  },
  {
    path: '/wallets/:address',
    component: Wallet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
