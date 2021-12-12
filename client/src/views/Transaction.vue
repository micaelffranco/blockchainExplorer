<template>
  <div v-if="loaded">
    <div>Transaction Info</div>
    <table>
      <tr>
        <th>Hash</th>
        <td>{{this.transaction.hash}}</td>
      </tr>
      <tr>
        <th>Hora</th>
        <td>{{this.transaction.timestamp}}</td>
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
  <Hexagon v-else/>
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
</style>
