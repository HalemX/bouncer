import { createStore } from "vuex";

const store = createStore({
  state: {
    cartProducts: [],
  },
  mutations: {
    setProductCart(state, payload) {
      let item = state.cartProducts.find(
        (product) => product.id === payload.product.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartProducts.push({ ...payload.product, quantity: payload.qty });
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
  },
});

export default store;
