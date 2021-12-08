<template>
  <div>
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
</template>

<script>
import axios from "axios"
import router from '../router'
export default {
  name: 'Transaction',
  data() {
    return {
      transaction: []
    }
  },
  methods: {
    openWallet(address){
      router.push({ path: `/wallets/${address}`})
    }
  },
  async mounted() {
    console.log(this.propsTransaction)
    if (!this.$route.params.height) {
      const transactions = await axios.get("http://localhost:5000/transactions")
      this.transaction = transactions.data.find( trans => trans.hash === this.$route.params.hash)
    } else {
      const transaction = await axios.get("http://localhost:5000/blocks/" + this.$route.params.height + "/transactions/" + this.$route.params.hash)
      this.transaction = transaction.data
    }
  }
}
</script>

<style scoped>
</style>
