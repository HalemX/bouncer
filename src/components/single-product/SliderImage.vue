<template>
  <swiper
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide class="swip-slide" v-for="i in 4" :key="i">
      <img :src="singleProduct.image" />
    </swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="p-2 swip-slide" v-for="i in 4" :key="i">
      <img :src="singleProduct.image" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default {
  props: ["singleProduct"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>

<style scoped lang="scss">
.mySwiper2 {
  height: 70%;
  width: 100%;

  .swiper-slide {
    img {
      width: 90%;
      height: 70%;
    }
  }

  @media ($max_md) {
    .swip-slide {
      img {
        width: 70%;
        height: 100%;
      }
    }
  }
}

.mySwiper {
  .swip-slide {
    width: 20%;
    height: 90%;
    opacity: 0.4;
    cursor: pointer;
    border: 1px solid #e5e8ea;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  user-select: none;
}
.swiper-pagination {
  display: none !important;
}
</style>
