<template>
  <div class="infoContainer">
    <div class="detailsContainer">
      <div class="headDetail">
        <div class="title">XI Price</div>
        <div class="content">{{this.numberWithCommas(this.xiPrice)}} $</div>
      </div>
      <div class="headDetail">
        <div class="title">Market Cap</div>
        <div class="content">{{this.numberWithCommas(this.marketCap)}} $</div>
      </div>
      <div class="headDetail">
        <div class="title">Number of transactions</div>
        <div class="content">{{this.numberOfTRansactions}}</div>
      </div>
      <div class="bottomDetail">
        <div class="title">Amount transacted</div>
        <div class="content">{{this.numberWithCommas(this.amountTransacted)}} XI</div>
      </div>
    </div>
    <div class="graphContainer">
      <div class="title">Transactions per minute</div>
      <area-chart :colors="['#55d6aa']" v-if="loaded" :data="chartData"></area-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoinInfo',
  props:{
    blocks: Object
  },
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
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  async mounted() {
    this.numberOfTRansactions = this.blocks.numberOfTRansactions
    this.chartData = this.blocks.chartData
    this.marketCap = Math.round((this.blocks.amountTransacted * this.xiPrice + Number.EPSILON) * 100) / 100
    this.amountTransacted = Math.round((this.blocks.amountTransacted + Number.EPSILON) * 100) / 100
    this.loaded = true
  }
}
</script>

<style scoped>

.infoContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
  background: white;
  border-radius: 25px;
  margin-bottom: 3%;
}

.graphContainer {
  width: 80%;
  padding-right: 2%;
  padding-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.detailsContainer {
  width: 20%;
  border-right: 1px solid #D3D3D3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 2%;
  padding-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.headDetail {
  border-bottom: 1px solid #D3D3D3;
  padding-bottom: 5%;
  padding-top: 5%;
}

.bottomDetail {
}

.title {
  color: #808080;
  padding-bottom: 1%;
}

</style>
