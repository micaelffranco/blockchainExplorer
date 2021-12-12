<template>
  <div>
    <div class="tableTitle">LATEST TRANSACTIONS</div>
    <table class="transactionsTable">
      <colgroup>
        <col class="twentyFiveWidth" />
        <col class="twentyFiveWidth" />
        <col class="fiftyWidth" />
      </colgroup>
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

.tableTitle {
  border-bottom: 1px solid #D3D3D3;
  color: #808080;
  padding-bottom: 2%;
}

.transactionsTable {
  padding-top: 2%;
}

.twentyFiveWidth {
  width: 25%;
}

.fiftyWidth {
  width: 50%;
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
}

</style>
