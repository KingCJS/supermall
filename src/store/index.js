import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
      if (oldProduct) {
        context.commit('addCounter', oldProduct);
      } else {
        payload.count = 1;
        context.commit('addToCart', payload);

      }
    }
  },
  modules: {},
  getters: {
    cartList(state) {
      return state.cartList;
    },
    cartCount(state, getters) {
      return getters.cartList.length;
    }
  }
})