<template>
  <div class="navContainer">
    <div @click="openHomePage()" class="navTitle">
      XI Explorer
    </div>
    <div class="routes">
      <div class="eachRoute">
        <router-link class="routerClass" to="/">Home</router-link>
      </div>
      <div class="eachRoute">
        <router-link class="routerClass" to="/blocks">Blocks</router-link>
      </div>
      <div class="eachRoute">
        <router-link class="routerClass" to="/transactions">Transactions</router-link>
      </div>
    </div>
  </div>
  <div class="homeContainer">
    <router-view/>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'NavBar',
  methods: {
    openHomePage() {
      router.push({ path: `/`})
    },
  }
}
</script>

<style scoped>

.routerClass {
  text-decoration: none;
}

.homeContainer {
    padding: 3%;
    padding-left: 5%;
    padding-right: 5%;
}

.eachRoute {
    padding-right: 20px;
}

.navTitle {
  display: flex;
  justify-content: flex-start;
  border:2px solid black;
  padding: 5px;
}

.navTitle:hover {
  cursor: pointer;
}

.routes {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}

.navContainer {
  padding: 20px;
  background: #55d6aa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navContainer a {
  font-weight: bold;
  color: #2c3e50;
}

.navContainer a.router-link-exact-active {
  color: #42b983;
}

</style>
