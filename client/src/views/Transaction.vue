<template>
  <div class="blocksContainer" v-if="loaded">
    <div class="tableTitle">TRANSACTION INFO</div>
    <table class="blocksTable">
      <tr>
        <th>Hash</th>
        <td>{{this.transaction.hash}}</td>
      </tr>
      <tr>
        <th>At</th>
        <td>{{new Date(this.transaction.timestamp).toLocaleTimeString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit'})}}</td>
      </tr>
      <tr>
        <th>Amount</th>
        <td>{{this.transaction.amount}}</td>
      </tr>
      <tr>
        <th>Fee</th>
        <td>{{this.transaction.fee}}</td>
      </tr>
      <tr>
        <th>From</th>
        <td class="link" @click="openWallet(this.transaction.from)">{{this.transaction.from}}</td>
      </tr>
      <tr>
        <th>To</th>
        <td class="link" @click="openWallet(this.transaction.to)">{{this.transaction.to}}</td>
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
  name: 'Transaction',
  components: {
    Hexagon
  },
  data() {
    return {
      transaction: [],
      loaded: false
    }
  },
  methods: {
    openWallet(address){
      router.push({ path: `/wallets/${address}`})
    }
  },
  async mounted() {
    if (!this.$route.params.height) {
      const transactions = await axios.get("http://localhost:5000/transactions")
      this.transaction = transactions.data.find( trans => trans.hash === this.$route.params.hash)
    } else {
      const transaction = await axios.get("http://localhost:5000/blocks/" + this.$route.params.height + "/transactions/" + this.$route.params.hash)
      this.transaction = transaction.data
    }
    this.loaded = true
  }
}
</script>

<style scoped>

.blocksContainer {
  background: white;
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
  padding-bottom: 1%;
  padding-top: 1%;
  overflow:hidden;
}

</style>
