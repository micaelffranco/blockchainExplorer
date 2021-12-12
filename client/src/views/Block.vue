<template>
  <div v-if="loaded">
    <div>Block Info</div>
    <table>
      <tr>
        <th>Height</th>
        <td>{{this.block.height}}</td>
      </tr>
      <tr>
        <th>Hash</th>
        <td>{{this.block.hash}}</td>
      </tr>
      <tr>
        <th>Hora</th>
        <td>{{this.block.timestamp}}</td>
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
        <td class="link" @click="openTransaction(this.block.height, transaction.hash)">{{transaction.hash}}</td>
        <td>{{transaction.timestamp}}</td>
        <td>{{transaction.amount}}</td>
        <td>{{transaction.fee}}</td>
        <td class="link" @click="openWallet(transaction.from)">{{transaction.from}}</td>
        <td class="link" @click="openWallet(transaction.to)">{{transaction.to}}</td>
      </tr>
    </table>
    <button :disabled="pageNumber == 1" @click="prevPage">Previous</button>
    <button :disabled="pageNumber >= Math.ceil(this.block.transactions.length/this.itemsPerPage)" @click="nextPage">Next</button>
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
</style>
