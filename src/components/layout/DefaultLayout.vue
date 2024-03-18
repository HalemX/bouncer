<template>
  <div class="default-layout">
    <the-navbar></the-navbar>

    <main>
      <slot></slot>
    </main>

    <the-footer></the-footer>
  </div>
</template>

<script>
// Import main structure project
import TheNavbar from "./TheNavbar.vue";
import TheFooter from "./TheFooter.vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    if (localStorage.getItem("cartProducts")) {
      store.state.cartProducts = JSON.parse(
        localStorage.getItem("cartProducts")
      );
    } else {
      store.state.cartProducts = [];
    }
  },
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>
