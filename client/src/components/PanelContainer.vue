<template>
  <div v-if="loaded">
    <div>
      <CoinInfo :blocks="blocks"/>
    </div>
    <div class="panelContainer">
      <div class="blockContainer">
        <LatestBlocks :blocks="blocks"/>
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
      blocks: [],
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
    const blocks = await axios.get("http://localhost:5000/blocks/")
    this.blocks = blocks.data
    const transactions = await axios.get("http://localhost:5000/transactions")
    this.transactions = transactions.data
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
  border-top: 0.2px solid	#DCDCDC;
  border-right: 0.2px solid #DCDCDC;
}

.transactionContainer {
  width: 50%;
  border-top: 0.2px solid	#DCDCDC;
}


</style>
