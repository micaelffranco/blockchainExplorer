<template>
  <div>
    <div>Transactions</div>
    <table>
      <tr>
        <th>Hash</th>
        <th>Hora</th>
        <th>Amount</th>
        <th>Fee</th>
        <th>From</th>
        <th>To</th>
      </tr>
      <tr v-for="(transaction, i) in transactions" :key="i">
        <td class="link" @click="openTransaction(transaction.hash)">{{transaction.hash}}</td>
        <td>{{transaction.timestamp}}</td>
        <td>{{transaction.amount}}</td>
        <td>{{transaction.fee}}</td>
        <td class="link" @click="openWallet(transaction.from)">{{transaction.from}}</td>
        <td class="link" @click="openWallet(transaction.to)">{{transaction.to}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios"
import router from '../router'
export default {
  name: 'Transactions',
  data() {
    return {
      transactions: []
    }
  },
  methods: {
    openWallet(address){
      router.push({ path: `/wallets/${address}`})
    },
    openTransaction(hash) {
      router.push({ path: `/transactions/${hash}`})
    }
  },
  async mounted() {
    const transactions = await axios.get("http://localhost:5000/transactions")
    this.transactions = transactions.data
  }
}
</script>

<style scoped>
</style>
