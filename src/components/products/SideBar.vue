<template>
  <div
    class="sidebar-container me-4 position-sticky mb-5 d-none"
    :class="{ showSidebar: showClass, 'd-lg-block': hold }"
  >
    <div class="accessories p-3 mb-4">
      <h5 class="mb-4">ACCESORIES</h5>
      <div
        class="one-accessories d-flex align-items-center justify-content-between mb-4"
        v-for="i in 6"
        :key="i"
      >
        <p class="mb-0 link">Apple Car</p>
        <span class="link">48</span>
      </div>
    </div>

    <div class="price p-3 mb-4">
      <h5 class="mb-3">PRICES</h5>
      <div
        class="info-price d-flex align-items-center justify-content-between mb-4"
      >
        <p class="mb-0">Ranger:</p>
        <div class="range-price">
          <span>${{ valuePrice[0] }} - </span>
          <span>${{ valuePrice[1] }} </span>
        </div>
      </div>
      <div class="mb-3">
        <Slider v-model="valuePrice" />
      </div>
    </div>

    <div class="colors p-3 mb-4">
      <h5 class="mb-3">COLOR</h5>
      <ColorsFilter :all-colors="colors" />
    </div>

    <div class="accessories p-3 mb-4">
      <h5 class="mb-4">BRAND</h5>
      <div
        class="one-accessories d-flex align-items-center justify-content-between mb-4"
        v-for="i in 4"
        :key="i"
      >
        <p class="mb-0 link">Apple</p>
        <span class="link">12</span>
      </div>
    </div>

    <div class="button text-center p-3">
      <button class="border-0 bg-transparent w-100">More</button>
    </div>
  </div>
</template>

<script>
import ColorsFilter from "../ui/ColorsFilter.vue";

import Slider from "@vueform/slider";
import { ref } from "vue";

export default {
  props: ["showClass", "hold"],
  components: {
    Slider,
    ColorsFilter,
  },
  setup() {
    const colors = ["#2e90e5", "red", "black", "yellow", "#FF00B4", "#EFDFDF"];
    const valuePrice = ref([13.99, 40.99]);

    return { valuePrice, colors };
  },
};
</script>

<style lang="scss">
@import "@vueform/slider/themes/default.css";

.sidebar-container {
  top: 0px;

  .accessories,
  .price,
  .colors,
  .button {
    background-color: $background_second_card_border;
    border-radius: 5px;

    .range-price {
      span {
        font-size: 14px;
      }
    }

    .one-accessories {
      p,
      span {
        cursor: pointer;
      }

      span {
        color: $background_third_card;
      }
    }
  }
  .slider-tooltip {
    display: none !important;
  }
  .slider-connect {
    background-color: $second_color;
  }
  .button {
    button {
      transition: 0.3s;
      &:hover {
        color: $second_color;
      }
    }
  }
}
@media (max-width: 991px) {
  .showSidebar {
    position: fixed !important;
    z-index: 1000;
    display: block !important;
    height: 100%;
    width: 60%;
    background-color: $background_second_card_border;
    top: 0;
    left: 0;
    padding: 10px 15px;
    border-top-right-radius: $border_rad;
    border-bottom-right-radius: $border_rad;
    .accessories,
    .price,
    .colors {
      border-bottom: 2px solid #ecedee;
      border-left: none;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .button {
      background-color: white;
    }
  }
}
</style>
