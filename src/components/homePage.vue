<template>
  <div class="app">
    <button class="setClass">设置</button>
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
  /* 让背景图片铺满全屏 */
  background-image: url('../assets/bei.png');
  background-size: cover; /* 使用 cover 属性让背景图片铺满整个屏幕 */
  background-position: center; /* 让背景图居中 */
  background-repeat: no-repeat;
  user-select: none;
}

.setClass{
  position: fixed;
  right: 1%;
  top: 1%;
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
  