import { createStore } from "vuex";

const store = createStore({
  state: {
    allProducts: [],
  },
  mutations: {
    setAllProducts(state, payload) {
      state.allProducts = payload;
      localStorage.setItem("products", JSON.stringify(state.allProducts));
    },
  },
});

export default store;
