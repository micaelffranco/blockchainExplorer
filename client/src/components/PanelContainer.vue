<template>
  <div v-if="loaded">
    <div>
      <CoinInfo :blocks="coinInfo"/>
    </div>
    <div class="panelContainer">
      <div class="blockContainer">
        <LatestBlocks :blocks="latestBlocks"/>
      </div>
      <div class="transactionContainer">
        <LatestTransactions :transactions="transactions"/>
      </div>
    </div>
  </div>
  <div class="loadingSpinner" v-else>
    <Hexagon/>
  </div>
</template>

<script>
import LatestBlocks from '@/components/homeComponents/LatestBlocks.vue'
import LatestTransactions from '@/components/homeComponents/LatestTransactions.vue'
import CoinInfo from '@/components/homeComponents/CoinInfo.vue'
import axios from "axios"
import {Hexagon} from 'vue-loading-spinner'
export default {
  name: 'PanelContainer',
  data() {
    return {
      latestBlocks: [],
      coinInfo: [],
      transactions: [],
      loaded: false
    }
  },
  components: {
    LatestBlocks,
    LatestTransactions,
    CoinInfo,
    Hexagon
  },
  async mounted() {
    const request = await axios.get("http://localhost:5000/blocks/coinInfoEndpoint")
    this.coinInfo = request.data
    this.latestBlocks = request.data.blocks.slice(0, 5)
    const transactions = await axios.get("http://localhost:5000/transactions")
    this.transactions = transactions.data.slice(0, 5)
    this.loaded = true
  }
}
</script>

<style scoped>

.panelContainer {
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 25px;
}

.blockContainer {
  width: 50%;
  border-right: 0.2px solid #DCDCDC;
  padding-right: 2%;
  padding-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.transactionContainer {
  width: 50%;
  padding-right: 2%;
  padding-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
}


</style>
