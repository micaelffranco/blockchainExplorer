<template>
  <div class="blocksContainer" v-if="loaded">
    <div class="tableTitle">BLOCKS</div>
    <table class="blocksTable">
      <tr>
        <th>Height</th>
        <th>Mined at</th>
        <th>Miner</th>
      </tr>
      <tr v-for="(block, i) in blocks" :key="i">
        <td class="link" @click="openBlock(block.height)">{{block.height}}</td>
        <td>{{new Date(block.timestamp).toLocaleTimeString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit'})}}</td>
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

td {
  border-top: 1px solid #D3D3D3;
  padding-bottom: 1%;
  padding-top: 1%;
  overflow:hidden;
}

</style>
