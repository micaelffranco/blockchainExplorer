<template>
  <NavBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
<style>

body {
  margin: 0;
}

#app {
  font-family: Arial;
}

.link{
  color: blue;
  text-decoration: underline;
  text-decoration-color: blue;
}

.loadingSpinner {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
