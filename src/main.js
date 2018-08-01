// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faHome)
library.add(faShoppingCart)
library.add(faUser)
library.add(faBolt)
library.add(faPlusCircle)
library.add(faMinusCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// 引入 公共样式
import '@/assets/scss/reset.css'
import '@/assets/scss/index.css'

// 引入 axios 的jsonp方法
import '@/components/tools/jsonp.js'
// import '@/components/tools/index.js'

// 启用 vuex
import store from '@/store/vuex.js'

import '../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '../node_modules/@fortawesome/fontawesome-free/scss/solid.scss'
import '../node_modules/@fortawesome/fontawesome-free/scss/brands.scss'
import '../node_modules/@fortawesome/fontawesome-free/scss/regular.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
