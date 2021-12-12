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
        <td class="link" @click="openTransaction(transaction.hash)">{{transaction.hash}}</td>
        <td>{{transaction.timestamp}}</td>
        <td>{{transaction.amount}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'LatestTransactions',
  props: {
    transactions: Object
  },
  methods: {
    openTransaction(hash) {
      router.push({ path: `/transactions/${hash}`})
    },
  }
}
</script>

<style scoped>
</style>
