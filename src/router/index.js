import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/homePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/musicPage',
    name: 'musicPage',
    component: () => import(/* webpackChunkName: "about" */ '../components/musicPage/musicHome.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
