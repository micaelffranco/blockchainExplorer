<template>
  <div class="blocksContainer" v-if="loaded">
    <div class="tableTitle">Wallet Info</div>
    <table class="blocksTable">
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
  padding-bottom: 1%;
  padding-top: 1%;
}

</style>
