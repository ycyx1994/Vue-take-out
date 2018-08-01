import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Cart from '@/components/Cart'
import User from '@/components/List'
import Goodsinfo from '@/components/Goodsinfo'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/list',
      name: Home,
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/goodsinfo/:cateid/:id',
      name: 'Goodsinfo',
      component: Goodsinfo
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
