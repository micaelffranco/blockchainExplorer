<template>
  <div class="panelContainer">
    <div class="blockContainer">
      <LatestBlocks/>
    </div>
    <div class="transactionContainer">
      <LatestTransactions/>
    </div>
  </div>
</template>

<script>
import LatestBlocks from '@/components/homeComponents/LatestBlocks.vue'
import LatestTransactions from '@/components/homeComponents/LatestTransactions.vue'
export default {
  name: 'PanelContainer',
  components: {
    LatestBlocks,
    LatestTransactions
  }
}
</script>

<style scoped>

.panelContainer {
  display: flex;
  flex-direction: row;
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
