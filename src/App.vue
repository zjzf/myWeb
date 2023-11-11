<template>
  <div id="app">
    <homePage></homePage>
  </div>
</template>

<script>
import homePage from './components/homePage.vue'

export default {
  name: 'App',
  components: {
    homePage
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
