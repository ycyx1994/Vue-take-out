import Vue from 'vue'
import Vuex from 'vuex';
import { stat } from 'fs';
Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    Cart: JSON.parse(localStorage.getItem('Cart')) || []
  },
  mutations: {
    addCart(state, goods) {
      // console.log(state)
      // console.log(good)
      // 定义 currentGoods 是找出 添加的商品是否存在
      const currrentGoods = state.Cart.find(item => item.id === goods.id);
      // 如果不存在
      if( !currrentGoods) {
        // 在数组中添加 这个商品，并标记
        state.Cart.push({...goods, isSelected: true});
        // 如果存在
      } else {
        // 之前此商品的count 更新为 goods.count
        currrentGoods.count = goods.count;
      };
      // 转换为 JSON 字符串存入localstorage
      localStorage.setItem('Cart', JSON.stringify(state.Cart));
    }
  },
  getters: {
    ids(state) {
      return state.Cart.map(item => item.id).join(',')
    },
    total(state) {
      return state.Cart.reduce((count, item) => {
        count += item.count
        return count
      }, 0)
    },
    id2Data(state) {
      return state.Cart.reduce((data, item) => {
        data[item.id] = {
          count: item.count,
          isSelected: item.isSelected
        }
        return data
      }, {})
    }
  },
})
