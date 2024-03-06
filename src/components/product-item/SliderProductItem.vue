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
  >
    <swiper-slide v-for="i in count" :key="i" :class="{ 'w-75': bestSeller }">
      <product-item
        column="column"
        :image-name="dataObj.imageName"
        :heading="dataObj.heading"
        class="me-2"
      ></product-item>
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
  props: ["sidebar", "bestSeller", "count"],
  components: {
    Swiper,
    SwiperSlide,
    ProductItem,
  },
  setup() {
    const dataObj = {
      imageName: "mack.png",
      heading: "Apple Macbook Pro",
    };
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
      dataObj,
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
</style>
