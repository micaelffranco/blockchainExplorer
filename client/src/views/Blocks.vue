<template>
  <div class="blocksContainer" v-if="loaded">
    <div class="tableTitle">BLOCKS</div>
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
  <div class="loadingSpinner" v-else>
    <Hexagon/>
  </div>
</template>

<script>
import axios from "axios"
import router from '../router'
import {Hexagon} from 'vue-loading-spinner'
export default {
  name: 'Blocks',
  components: {
    Hexagon
  },
  data() {
    return {
      blocks: [],
      loaded: false
    }
  },
  methods: {
    openBlock(height) {
      router.push({ path: `/blocks/${height}`})
    },
    openWallet(address){
      router.push({ path: `/wallets/${address}`})
    }
  },
  async mounted() {
    const blocks = await axios.get("http://localhost:5000/blocks")
    this.blocks = blocks.data
    this.loaded = true
  }
}
</script>

<style scoped>

.blocksContainer {
  background: white;
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

.twentyFiveWidth {
  width: 25%;
}

.fiftyWidth {
  width: 50%;
}

td {
  border-top: 1px solid #D3D3D3;
  padding-bottom: 1%;
  padding-top: 1%;
}

</style>
