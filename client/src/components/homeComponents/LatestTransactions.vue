<template>
  <div>
    <div class="tableTitle">LATEST TRANSACTIONS</div>
    <table class="transactionsTable">
      <tr>
        <th>Hash</th>
        <th>At</th>
        <th>Amount</th>
      </tr>
      <tr v-for="(transaction, i) in transactions" :key="i">
        <td class="link" @click="openTransaction(transaction.hash)">{{transaction.hash}}</td>
        <td>{{new Date(transaction.timestamp).toLocaleTimeString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit'})}}</td>
        <td>{{transaction.amount}} $</td>
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

.tableTitle {
  border-bottom: 1px solid #D3D3D3;
  color: #808080;
  padding-bottom: 2%;
}

.transactionsTable {
  padding-top: 2%;
  width: 100%;
  table-layout: fixed;
}

th {
  text-align: left;
  padding-bottom: 2%;
  font-weight:normal;
}

td {
  border-top: 1px solid #D3D3D3;
  padding-bottom: 2%;
  padding-top: 2%;
  overflow:hidden;
}

</style>
