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
        <td>{{block.height}}</td>
        <td>{{block.timestamp}}</td>
        <td>{{block.miner}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'LatestBlocks',
  data() {
    return {
      blocks: []
    }
  },
  async mounted() {
    const blocks = await axios.get("http://localhost:5000/blocks/")
    this.blocks = blocks.data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
