import { createStore } from "vuex";

const store = createStore({
  state: {
    allProducts: [],
  },
  mutations: {
    setAllProducts(state, payload) {
      state.allProducts = payload;
      localStorage.setItem(
        "relatedProducts",
        JSON.stringify(state.allProducts)
      );
      console.log(state.allProducts);
    },
  },
});

export default store;
