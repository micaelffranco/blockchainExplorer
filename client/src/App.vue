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
  height: 100%;
  background-color: #696969;
}

#app {
  font-family: Arial;
}

.link{
  color: blue;
  text-decoration: underline;
  text-decoration-color: blue;
}

.link:hover {
  cursor: pointer;
}

.loadingSpinner {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
