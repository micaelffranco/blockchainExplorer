<template>
  <div>
    <div>Latest Blocks</div>
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
</style>
