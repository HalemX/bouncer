<template>
  <div
    class="counter d-flex align-items-center px-3 mb-2 mb-sm-0 justify-content-center"
    :class="{ checkoutStyle: checkOut }"
  >
    <button
      class="minus d-block me-4 border-0 bg-transparent"
      @click="
        numberItemsProduct > 0 ? numberItemsProduct-- : numberItemsProduct
      "
      :disabled="numberItemsProduct <= 1"
    >
      -
    </button>
    <p class="num mb-0">{{ numberItemsProduct }}</p>
    <button
      class="minus d-block ms-4 border-0 bg-transparent"
      @click="numberItemsProduct++"
    >
      +
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["checkOut"],
  setup() {
    const numberItemsProduct = ref(1);
    return { numberItemsProduct };
  },
};
</script>

<style scoped lang="scss">
.counter {
  background-color: $background_second_card_border;
  border-radius: 5px;
  font-size: 20px;
  user-select: none;
  padding: 0.7rem 0;
}
@media (max-width: 460px) {
  .counter {
    width: 100%;
  }
}

.checkoutStyle {
  transform: translateX(10px);
  margin-bottom: 0 !important;
  padding: 0.4rem !important;
  justify-content: space-between !important;
  button {
    margin: 2px !important;
  }
}

@media (min-width: 1200px) {
  .checkoutStyle {
    transform: translateX(25px);
  }
}
@media (min-width: 991px) and (max-width: 1199px) {
  .checkoutStyle {
    transform: translateX(15px);
  }
}

button {
  transition: 0.3s;
  cursor: pointer;
}
button:hover {
  color: $second_color;
}
</style>
