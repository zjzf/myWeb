import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 音乐api接口网址
    musicUrl:'https://netease-cloud-music-api-phi-steel.vercel.app/',
    // 六边形背景色
    sixHexagonBackgroundColor:'rgba(255, 69, 0, 1)',
    // 鼠标放到六边形上背景色
    sixHexagonHoverBackgroundColor:'rgba(0, 206, 209, 1)',
    // 时间颜色
    timeColor:'rgba(255, 69, 0, 1)',
    // 日期颜色
    calendarColor:'rgba(0, 206, 209, 1)',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
