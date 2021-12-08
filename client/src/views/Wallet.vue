<template>
  <div>
    <div>Wallet Info</div>
    <table>
      <tr>
        <th>Address</th>
        <td>{{this.wallet.address}}</td>
      </tr>
      <tr>
        <th>Balance</th>
        <td>{{this.wallet.balance}}</td>
      </tr>
      <tr>
        <th>Nonce</th>
        <td>{{this.wallet.nonce}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Wallet',
  data() {
    return {
      wallet: []
    }
  },
  async mounted() {
    const wallet = await axios.get("http://localhost:5000/wallets/" + this.$route.params.address)
    this.wallet = wallet.data
  }
}
</script>

<style scoped>
</style>
