<template>
  <div v-if="loaded">
    <div class="blocksContainer">
    <div class="tableTitle">BLOCK INFO</div>
      <table class="blockTable">
        <tr>
          <th>Height</th>
          <td>{{this.block.height}}</td>
        </tr>
        <tr>
          <th>Hash</th>
          <td>{{this.block.hash}}</td>
        </tr>
        <tr>
          <th>Mined at</th>
          <td>{{new Date(this.block.timestamp).toLocaleTimeString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit'})}}</td>
        </tr>
        <tr>
          <th>Miner</th>
          <td class="link" @click="openWallet(this.block.miner)">{{this.block.miner}}</td>
        </tr>
        <tr>
          <th>Number of Transactions</th>
          <td>{{this.block.transactions && this.block.transactions.length }}</td>
        </tr>
      </table>
    </div>
    <div class="blocksContainer">
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
          <td class="tdLinkStyle" @click="openTransaction(this.block.height, transaction.hash)">{{transaction.hash}}</td>
          <td class="tdStyle">{{new Date(transaction.timestamp).toLocaleTimeString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit'})}}</td>
          <td class="tdStyle">{{transaction.amount}}</td>
          <td class="tdStyle">{{transaction.fee}}</td>
          <td class="tdLinkStyle" @click="openWallet(transaction.from)">{{transaction.from}}</td>
          <td class="tdLinkStyle" @click="openWallet(transaction.to)">{{transaction.to}}</td>
        </tr>
      </table>
      <button :disabled="pageNumber == 1" @click="prevPage">Previous</button>
      <button :disabled="pageNumber >= Math.ceil(this.block.transactions.length/this.itemsPerPage)" @click="nextPage">Next</button>
    </div>
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
  name: 'Block',
  components: {
    Hexagon
  },
  data() {
    return {
      block: [],
      loaded: false,
      transactions: [],
      pageNumber: 1,
      itemsPerPage: 10
    }
  },
  methods: {
    openWallet(address){
      router.push({ path: `/wallets/${address}`})
    },
    openTransaction(height, hash) {
      router.push({ path: `/blocks/${height}/transactions/${hash}`})
    },
    prevPage(){
      this.pageNumber--
      this.transactions = this.block.transactions.slice((this.pageNumber * this.itemsPerPage)-this.itemsPerPage, this.pageNumber * this.itemsPerPage)
    },
    nextPage(){
      this.pageNumber++
      this.transactions = this.block.transactions.slice((this.pageNumber * this.itemsPerPage)-this.itemsPerPage, this.pageNumber * this.itemsPerPage)
    }
  },
  async mounted() {
    const block = await axios.get("http://localhost:5000/blocks/" + this.$route.params.height)
    this.block = block.data
    this.transactions = this.block.transactions.slice(0, this.itemsPerPage)
    this.loaded = true
  }
}
</script>

<style scoped>

.tdLinkStyle {
  border-top: 1px solid #D3D3D3;
  color: blue;
  text-decoration: underline;
  text-decoration-color: blue;
}

.tdLinkStyle:hover {
  cursor: pointer;
}

.tdStyle {
  border-top: 1px solid #D3D3D3;
}

.blocksContainer {
  background: white;
  background: white;
  border-radius: 25px;
  padding: 2%;
  margin-bottom: 2%;
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

.blockTable {
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

.tdStyle {
  border-top: 1px solid #D3D3D3;
}
</style>
