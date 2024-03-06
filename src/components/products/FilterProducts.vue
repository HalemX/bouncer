<template>
  <div class="container-filter-products">
    <div
      class="container-filter d-flex align-items-center justify-content-between p-3 mb-3"
    >
      <div class="desc-filter d-flex align-items-center">
        <div class="num-items d-none align-items-center me-5 d-lg-flex">
          <span class="me-1">13</span>
          <p class="mb-0">Items</p>
        </div>
        <div class="sort-by align-items-center me-5 d-flex">
          <p class="size-font mb-0 me-1 me-sm-2">Sort By</p>
          <select-button
            firstOption="Name"
            secondOption="Price"
            customizeStyle="customize-style"
          ></select-button>
        </div>
        <div class="num-show d-none align-items-center d-lg-flex">
          <p class="mb-0 me-2">Show</p>
          <select-button
            firstOption="12"
            secondOption="6"
            customizeStyle="customize-style"
            @change="count === 12 ? minusCount() : addCount()"
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

      <teleport to="body">
        <div
          v-if="showSidebarToggle"
          @click="showSidebarToggle = !showSidebarToggle"
          class="backdrop d-block d-lg-none"
        ></div>
      </teleport>

      <teleport to="body">
        <SideBar :show-class="showSidebarToggle" />
      </teleport>
    </div>

    <swiper :pagination="pagination" :modules="modules" class="bestseller">
      <swiper-slide v-for="i in 5" :key="i">
        <transition-group @before-enter="beforeEnter" @enter="enter">
          <div class="hold-product row g-3 text-center mb-5" :key="count">
            <div
              class="container-product col-lg-4 col-sm-6"
              v-for="i in count"
              :key="i"
            >
              <product-item
                column="column"
                :image-name="dataObj.imageName"
                :heading="dataObj.heading"
              >
              </product-item>
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
    Icon,
    ProductItem,
    SideBar,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const count = ref(12);

    const dataObj = {
      imageName: "mack.png",
      heading: "Apple Macbook Pro",
      priceAfterDiscount: "$499",
      priceBeforeDiscount: "$599",
    };
    const showSidebarToggle = ref(false);

    function minusCount() {
      count.value = 6;
    }

    function addCount() {
      count.value = 12;
    }

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
      minusCount,
      addCount,
      dataObj,
      beforeEnter,
      enter,
      showSidebarToggle,
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
.container-filter {
  background-color: $background_second_card_border;
  border-radius: 5px;
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
@media ($max_sm) {
  .size-font {
    font-size: 14px;
  }
}

.bestseller {
  .swiper-pagination {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: #fafafb !important;
    padding: 0 2rem;
    margin-bottom: -1rem;
    padding-bottom: 8px;
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
