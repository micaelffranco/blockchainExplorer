<template>
  <div class="blocksContainer" v-if="loaded">
    <div class="tableTitle">TRANSACTIONS</div>
    <table class="blocksTable">
      <tr>
        <th>Hash</th>
        <th>At</th>
        <th>Amount</th>
        <th>Fee</th>
        <th>From</th>
        <th>To</th>
      </tr>
      <tr v-for="(transaction, i) in transactions" :key="i">
        <td class="link" @click="openTransaction(transaction.hash)">{{transaction.hash}}</td>
        <td>{{new Date(transaction.timestamp).toLocaleTimeString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit'})}}</td>
        <td>{{transaction.amount}}</td>
        <td>{{transaction.fee}}</td>
        <td class="link" @click="openWallet(transaction.from)">{{transaction.from}}</td>
        <td class="link" @click="openWallet(transaction.to)">{{transaction.to}}</td>
      </tr>
    </table>
  </div>
  <div class="loadingSpinner" v-else>
    <Hexagon/>
  </div>
</template>

<script>
import axios from "axios"
import router from '../router'
import {Hexagon} from 'vue-loading-spinner'
export default {
  name: 'Transactions',
  components: {
    Hexagon
  },
  data() {
    return {
      transactions: [],
      loaded: false
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
    this.loaded = true
  }
}
</script>

<style scoped>

.blocksContainer {
  background: white;
  border-radius: 25px;
  padding: 2%;
}

.tableTitle {
  border-bottom: 1px solid #D3D3D3;
  color: #808080;
  padding-bottom: 1%;
}

.blocksTable {
  padding-top: 1%;
  width: 100%;
  table-layout: fixed;
}

th {
  text-align: left;
  padding-bottom: 1%;
  font-weight:normal;
}

td {
  border-top: 1px solid #D3D3D3;
  padding-bottom: 1%;
  padding-top: 1%;
  overflow:hidden;
}

</style>
