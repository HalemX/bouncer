import router from "@/router";
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
        item.quantity += payload.qty;
      } else {
        const data = [...state.cartProducts];
        data.push({ ...payload.product, quantity: payload.qty });
        state.cartProducts = data;
        // state.cartProducts.push({ ...payload.product, quantity: payload.qty });
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    removeItem(state, payload) {
      const data = [...state.cartProducts];
      data.splice(state.cartProducts.indexOf(payload), 1);
      state.cartProducts = data;
      if (state.cartProducts.length) {
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(state.cartProducts)
        );
      } else {
        localStorage.clear();
        router.push("/");
      }
    },
  },
});

export default store;
