<template>
  <div class="slider-main-product">
    <swiper
      :pagination="{
        type: 'progressbar',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <main-product
          :heading="dataObj.heading"
          :paragraph="dataObj.paragraph"
          :textButton="dataObj.textButton"
          :image-src="dataObj.imageSrc"
          primary="primary"
        ></main-product>
      </swiper-slide>
      <swiper-slide>
        <main-product
          heading="iPhone 6 Plus"
          paragraph="Performance and design. Taken right to the edge."
          textButton="SHOP NOW"
          image-src="pic.png"
          second="second"
        ></main-product>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import MainProduct from "./MainProduct.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MainProduct,
  },
  setup() {
    const dataObj = {
      heading: "iPhone X",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      textButton: "MORE",
      imageSrc: "mobile.png",
    };
    return {
      dataObj,
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  color: #e5e8ea !important;
  &::after,
  &::before {
    font-size: 30px !important;
  }
}
.swiper-pagination {
  background-color: transparent !important;
  .swiper-pagination-progressbar-fill {
    display: none !important;
  }
}

.swiper-button-next {
  right: 0px !important;
}
.swiper-button-prev {
  left: 0px !important;
}
</style>
