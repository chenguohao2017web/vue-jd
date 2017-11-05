import Vue from 'vue'
import Router from 'vue-router'
// import IndexPage from '@/components/HelloWorld'
import IndexPage from '../pages/index.vue'
import Class from '../pages/class.vue'
import ShopCar from '../pages/shopCar.vue'
import Myself from '../pages/myself.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: ShopCar
    },
    {
      path: '/myself',
      name: 'myself',
      component: Myself
    }
  ]
})
