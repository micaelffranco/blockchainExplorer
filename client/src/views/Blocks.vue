<template>
  <div>
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
</template>

<script>
import axios from "axios"
import router from '../router'
export default {
  name: 'Blocks',
  data() {
    return {
      blocks: []
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
  }
}
</script>

<style scoped>
</style>
