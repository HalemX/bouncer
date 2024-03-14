<template>
  <swiper
    :spaceBetween="8"
    :slidesPerView="1"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
    :modules="modules"
    :breakpoints="sidebar ? sidebarBreakPoints : normalBreakPoints"
    class="mySwiper"
    :class="{ relatedProductsStyle: allProducts.length < 4 }"
  >
    <swiper-slide
      v-for="(item, i) in allProducts"
      :key="i"
      :class="{ reduceWidth: bestSeller }"
    >
      <product-item column="column" :dataProduct="item"></product-item>
    </swiper-slide>
  </swiper>
</template>
<script>
import ProductItem from "./ProductItem.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  props: ["sidebar", "bestSeller", "allProducts", "relatedProductsStyle"],
  components: {
    Swiper,
    SwiperSlide,
    ProductItem,
  },
  setup() {
    const sidebarBreakPoints = {
      460: { slidesPerView: 2, spaceBetween: 16 },
      991: { slidesPerView: 3, spaceBetween: 16 },
      1200: { slidesPerView: 1 },
    };
    const normalBreakPoints = {
      460: { slidesPerView: 2, spaceBetween: 16 },
      991: { slidesPerView: 3, spaceBetween: 16 },
      1200: { slidesPerView: 4 },
    };

    return {
      modules: [Pagination],
      sidebarBreakPoints,
      normalBreakPoints,
    };
  },
};
</script>

<style>
.swiper-wrapper {
  margin-bottom: 3rem !important;
}
.relatedProductsStyle {
  @media (min-width: 991px) {
    .swiper-wrapper {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
  }
}
</style>
