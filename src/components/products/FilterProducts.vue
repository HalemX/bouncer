<template>
  <div class="container-filter-products">
    <div
      class="filter-products d-flex align-items-center justify-content-between p-3 mb-3 rounded"
    >
      <div class="filter-details d-flex align-items-center">
        <div class="num-items d-none align-items-center me-5 d-lg-flex">
          <span class="me-1">13</span>
          <p class="mb-0">Items</p>
        </div>
        <div class="sort-by align-items-center me-5 d-flex">
          <p class="size-font mb-0 me-1 me-sm-2 text-nowrap">Sort By</p>
          <select-button
            firstOption="Name"
            secondOption="Price"
            customizeStyle="customize-style"
          ></select-button>
        </div>
        <div class="show-num d-none align-items-center d-lg-flex">
          <p class="mb-0 me-2">Show</p>
          <select-button
            firstOption="12"
            secondOption="6"
            customizeStyle="customize-style"
            @change="count === 12 ? (count = 6) : (count = 12)"
          ></select-button>
        </div>
      </div>

      <div
        class="d-lg-none ms-auto"
        @click="showSidebarToggle = !showSidebarToggle"
      >
        <Icon
          icon="mdi:filter-outline"
          width="1.7rem"
          class="iconFilter"
          :class="{ active: showSidebarToggle }"
        ></Icon>
      </div>
    </div>

    <teleport to="body">
      <div
        v-if="showSidebarToggle"
        @click="showSidebarToggle = !showSidebarToggle"
        class="backdrop d-block d-lg-none"
      ></div>
    </teleport>

    <teleport to="body">
      <SideBar :showSmallScreen="showSidebarToggle" />
    </teleport>

    <swiper :pagination="pagination" :modules="modules" class="products-swiper">
      <swiper-slide v-for="i in 5" :key="i">
        <transition-group @before-enter="beforeEnter" @enter="enter">
          <div class="products row g-3 text-center mb-4" :key="count">
            <div
              class="container-product col-lg-4 col-sm-6"
              v-for="i in count"
              :key="i"
            >
              <product-item column="column"> </product-item>
            </div>
          </div> </transition-group
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SelectButton from "../ui/SelectButton.vue";
import ProductItem from "../product-item/ProductItem.vue";
import SideBar from "./SideBar.vue";

import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { ref } from "vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    SelectButton,
    ProductItem,
    SideBar,
    Icon,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const count = ref(12);

    const dataObj = {
      imageName: "mack.png",
      heading: "Apple Macbook Pro",
    };
    const showSidebarToggle = ref(false);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
    };

    const enter = (el) => {
      gsap.to(el, {
        opacity: 1,
        duration: 1,
        y: 0,
      });
    };

    return {
      count,
      dataObj,
      showSidebarToggle,
      beforeEnter,
      enter,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">
.filter-products {
  background-color: $background_second_card_border;
}
.backdrop {
  @include overlay(black, 0.3);
}
.iconFilter {
  color: $background_third_card;
  transition: 0.3s;
  &:hover {
    color: $second_color;
  }
}

.products-swiper {
  .swiper-pagination {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: #fafafb !important;
    padding: 0 2rem 0.5rem;
    margin-bottom: -1rem;
    overflow: auto;
    border-radius: 5px;
  }
  .swiper-pagination-bullet {
    background-color: transparent !important;
    height: 100% !important;
    text-align: center;
    color: #000;
    opacity: 1;
    border-radius: 0 !important;
    padding: 1rem 1.7rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: black !important;
  }
}
</style>
