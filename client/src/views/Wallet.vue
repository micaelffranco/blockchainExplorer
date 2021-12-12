<template>
  <div v-if="loaded">
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
  <div class="loadingSpinner" v-else>
    <Hexagon/>
  </div>
</template>

<script>
import axios from "axios"
import {Hexagon} from 'vue-loading-spinner'
export default {
  name: 'Wallet',
  components: {
    Hexagon
  },
  data() {
    return {
      wallet: [],
      loaded: false
    }
  },
  async mounted() {
    const wallet = await axios.get("http://localhost:5000/wallets/" + this.$route.params.address)
    this.wallet = wallet.data
    this.loaded = true
  }
}
</script>

<style scoped>
</style>
