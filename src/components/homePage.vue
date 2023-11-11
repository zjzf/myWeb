<template>
  <div class="app">
    <musicAssembly class="musicAssemblyClass"></musicAssembly>
    <setAssembly class="setClass"></setAssembly>
    <timeAssembly class="timeAssemblyClass"></timeAssembly>
    <sixHexagonAssembly class="sixHexagonAssemblyClass"></sixHexagonAssembly>
  </div>
</template>
  
<script>
import musicAssembly from '../modules/vue/musicAssembly.vue'
import sixHexagonAssembly from '../modules/vue/sixHexagonAssembly.vue'
import timeAssembly from '../modules/vue/timeAssembly.vue'
import setAssembly from '../modules/vue/setAssembly.vue'
export default {
  name: 'homePage',
  components: {
    musicAssembly,
    setAssembly,
    sixHexagonAssembly,
    timeAssembly
  },
  data() {
    return {
      
    };
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
  /* overflow: hidden; */
  /* 让背景图片铺满全屏 */
  background-image: url('../assets/bei.png');
  background-size: cover;
  /* 使用 cover 属性让背景图片铺满整个屏幕 */
  background-position: center;
  /* 让背景图居中 */
  background-repeat: no-repeat;
  user-select: none;
}

/* 设置按钮 */
.setClass {
  position: fixed;
  right: 1%;
  top: 5%;
}

/* 音乐律动的样式 */
.musicAssemblyClass{
  position: fixed;
  bottom: 25%;
  left: 20%;
}


/* 六边形组件的样式 */
.sixHexagonAssemblyClass {
  width: 380px;
  height: 320px;
  position: fixed;
  right: 1%;
}

/* 时间组件的样式 */
.timeAssemblyClass {
  position: fixed;
  width: 30vw;
  bottom: 1%;
}

/* 窗口小于1300px触发将时间移向右侧把六边形图标移向上面 */
@media (max-width: 1300px) {

  .sixHexagonAssemblyClass {
    /* 触发动画 */
    animation: sixHexagonMoveTop 2s forwards;
  }

  .timeAssemblyClass {
    animation: timeMoveRight 2s forwards;
  }
}

/* 窗口大于1300px触发将时间移向左侧把六边形图标移向下面 */
@media (min-width: 1300px) {
  .sixHexagonAssemblyClass {
    animation: sixHexagonMoveBom 2s forwards;
  }

  .timeAssemblyClass {
    animation: timeMoveLeft 2s forwards;
  }
}

/* 六边形从上往下移动 */
@keyframes sixHexagonMoveBom {
  from {
    bottom: 20%;
  }

  to {
    bottom: 10%;
  }
}

/* 六边形从下往上移动 */
@keyframes sixHexagonMoveTop {
  from {
    bottom: 10%;
  }

  to {
    bottom: 20%;
  }
}

/* 时间从左侧往右侧移动 */
@keyframes timeMoveRight {
  from {
    left: 5%;
  }

  to {
    left: 100%;
    transform: translateX(-110%);
  }
}

/* 时间从右侧往左侧移动 */
@keyframes timeMoveLeft {
  from {
    left: 100%;
    transform: translateX(-110%);
  }

  to {
    left: 5%;
  }
}
</style>
  