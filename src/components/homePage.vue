<template>
  <div class="app">
    <timeAssembly class="timeAssemblyClass"></timeAssembly>
    <sixHexagonAssembly class="sixHexagonAssemblyClass"></sixHexagonAssembly>

  </div>
</template>
  
<script>
import sixHexagonAssembly from '../modules/sixHexagonAssembly.vue'
import timeAssembly from '../modules/timeAssembly.vue'
export default {
  name: 'homePage',
  components: {
    sixHexagonAssembly,
    timeAssembly
  },
  mounted() {

  }

}
</script>
  
<style scoped>
.app {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  background-image: url('../assets/bei.png');
  background-size: 100%;
  background-position: 0%;
  background-repeat: no-repeat;
  user-select: none;
}

.sixHexagonAssemblyClass {
  position: fixed;
  right: 0px;
  bottom: 0px;
}

.timeAssemblyClass{
  position: fixed;
  left: 100px;
  bottom: 50px;
}
</style>
  