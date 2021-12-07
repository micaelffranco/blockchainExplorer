<template>
  <div class="home">
    <PanelContainer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PanelContainer from '@/components/PanelContainer.vue'

export default {
  name: 'Home',
  components: {
    PanelContainer
  }
}
</script>
