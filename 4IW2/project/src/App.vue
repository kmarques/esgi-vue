<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Aretha />
  </div>
</template>

<script>
import Aretha from "./components/Aretha.vue";

export default {
  name: "App",
  components: {
    Aretha,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
