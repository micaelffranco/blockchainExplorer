<template>
  <div>
      <div class="tableTitle">LATEST BLOCKS</div>
      <table class="blocksTable">
        <colgroup>
          <col class="twentyFiveWidth" />
          <col class="twentyFiveWidth" />
          <col class="fiftyWidth" />
        </colgroup>
        <tr>
          <th>Height</th>
          <th>Hora</th>
          <th>Miner</th>
        </tr>
        <tr v-for="(block, i) in blocks" :key="i">
          <td class="link" @click="openBlock(block.height)">{{block.height}}</td>
          <td>{{block.timestamp}}</td>
          <td class="link" @click="openWallet(block.miner)">{{block.miner}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'LatestBlocks',
  props:{
    blocks: Object
  },
  methods: {
    openBlock(height) {
      router.push({ path: `/blocks/${height}`})
    },
    openWallet(address){
      router.push({ path: `/wallets/${address}`})
    }
  }
}
</script>

<style scoped>

.tableTitle {
  border-bottom: 1px solid #D3D3D3;
  color: #808080;
  padding-bottom: 2%;
}

.blocksTable {
  padding-top: 2%;
  width: 100%;
  table-layout: fixed;
}

th {
  text-align: left;
  padding-bottom: 2%;
  font-weight:normal;
}

.twentyFiveWidth {
  width: 25%;
}

.fiftyWidth {
  width: 50%;
}

td {
  border-top: 1px solid #D3D3D3;
  padding-bottom: 2%;
  padding-top: 2%;
}

</style>
