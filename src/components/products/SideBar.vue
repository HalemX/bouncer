<template>
  <div
    class="sidebar-details me-4 d-none"
    :class="{
      showSidebarAtSmallScreen: showSmallScreen,
      'd-lg-block': showLargeScreen,
    }"
  >
    <div class="accessories p-3 mb-4 rounded">
      <SidebarCmpo heading="ACCESSORIES" type="Apple Car" :num="48" />
    </div>

    <div class="price p-3 mb-4 rounded">
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

    <div class="colors p-3 mb-4 rounded">
      <h5 class="mb-3">COLOR</h5>
      <ColorsFilter :all-colors="colors" />
    </div>

    <div class="brand p-3 rounded">
      <SidebarCmpo heading="BRAND" type="Samsung" :num="99" />
    </div>
  </div>
</template>

<script>
import SidebarCmpo from "./SidebarCmpo.vue";
import ColorsFilter from "../ui/ColorsFilter.vue";

import Slider from "@vueform/slider";
import { ref } from "vue";

export default {
  props: ["showSmallScreen", "showLargeScreen"],
  components: {
    SidebarCmpo,
    ColorsFilter,
    Slider,
  },
  setup() {
    const colors = ["#2e90e5", "red", "black", "yellow", "#FF00B4", "#EFDFDF"];
    const valuePrice = ref([13, 40]);

    return { valuePrice, colors };
  },
};
</script>

<style lang="scss">
// Style (Slider Cmpo) from vueform package
@import "@vueform/slider/themes/default.css";

.sidebar-details {
  .accessories,
  .price,
  .colors,
  .brand {
    background-color: $background_second_card_border;

    .range-price {
      span {
        font-size: 14px;
      }
    }
  }
  .slider-tooltip {
    display: none !important;
  }
  .slider-connect {
    background-color: $second_color;
  }
}
@media ($max_md) {
  .showSidebarAtSmallScreen {
    position: fixed !important;
    overflow-y: auto;
    display: block !important;
    z-index: 1000;
    height: 100%;
    width: 60%;
    background-color: $background_second_card_border;
    top: 0;
    left: 0;
    padding: 10px 15px;
    .accessories,
    .price,
    .colors {
      @include border-bottom(1px, solid, 0.3);
    }
  }
}
</style>
