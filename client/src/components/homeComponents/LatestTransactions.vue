<template>
  <div>
    <div>Latest Transactions</div>
    <table>
      <tr>
        <th>Hash</th>
        <th>Hora</th>
        <th>Amount</th>
      </tr>
      <tr v-for="(transaction, i) in transactions" :key="i">
        <td>{{transaction.hash}}</td>
        <td>{{transaction.timestamp}}</td>
        <td>{{transaction.amount}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'LatestTransactions',
  data() {
    return {
      transactions: []
    }
  },
  async mounted() {
    const transactions = await axios.get("http://localhost:5000/transactions")
    this.transactions = transactions.data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
