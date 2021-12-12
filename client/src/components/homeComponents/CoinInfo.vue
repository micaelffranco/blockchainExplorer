<template>
  <div class="infoContainer">
    <div class="detailsContainer">
      <div>XI PRICE</div>
      <div>{{this.xiPrice}}</div>
      <div>MARKET CAP</div>
      <div>{{this.marketCap}}</div>
    </div>
    <div class="detailsContainer">
      <div>NUMBER OF TRANSACTIONS</div>
      <div>{{this.numberOfTRansactions}}</div>
      <div>AMOUNT TRANSACTED</div>
      <div>{{this.amountTransacted}}</div>
    </div>
    <div class="graphContainer">
      <div>TRANSACTIONS PER MINUTE</div>
      <area-chart v-if="loaded" :data="chartData"></area-chart>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'CoinInfo',
  data() {
    return {
      xiPrice: 1700,
      marketCap: 0,
      numberOfTRansactions: 0,
      amountTransacted: 0,
      currencyTransacted: 0,
      chartData: {},
      loaded: false
    }
  },
  async mounted() {
    const blocks = await axios.get("http://localhost:5000/blocks/")
    this.blocks = blocks.data
    blocks.data.forEach((block) => {
        this.numberOfTRansactions += block.transactions.length
        block.transactions.forEach((transaction) => {
          this.amountTransacted += transaction.amount
          const fullDate = new Date(transaction.timestamp).toLocaleTimeString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'})
          this.chartData[fullDate] ? this.chartData[fullDate] = this.chartData[fullDate] + 1 : this.chartData[fullDate] = 1
        });
    });
    this.loaded = true
    this.marketCap = this.amountTransacted * this.xiPrice
    console.log(this.testData)
  }
}
</script>

<style scoped>

.infoContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.graphContainer {
  width: 50%;
}

.detailsContainer {
  width: 25%;
}

</style>
