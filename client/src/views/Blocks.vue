<template>
  <div v-if="loaded">
    <div>Blocks</div>
    <table>
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
  <Hexagon v-else/>
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
</style>
