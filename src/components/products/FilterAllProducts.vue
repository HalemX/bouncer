<template>
  <div class="container-filter-products">
    <div
      class="filter-products d-flex align-items-center justify-content-between p-3 mb-3 rounded"
    >
      <div class="filter-details d-flex align-items-center">
        <div class="num-items d-none align-items-center me-5 d-lg-flex">
          <span class="me-1">{{ allProducts.length }}</span>
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

    <BaseSpinner v-if="isLoading" />
    <swiper
      :pagination="pagination"
      :modules="modules"
      class="products-swiper"
      @swiper="handlePagination"
      @slide-change="handlePagination"
      v-if="allProducts.length > 6 && !isLoading"
    >
      <swiper-slide v-for="i in paginationNum" :key="i" :class="{ i }">
        <transition-group @before-enter="beforeEnter" @enter="enter">
          <div class="products row g-3 text-center mb-4" :key="i">
            <div
              class="container-product col-lg-4 col-sm-6"
              v-for="(item, i) in result"
              :key="i"
            >
              <product-item column="column" :data-product="item">
              </product-item>
            </div>
          </div> </transition-group
      ></swiper-slide>
    </swiper>

    <div class="products row g-3 text-center mb-4" v-else>
      <div
        class="container-product col-lg-4 col-sm-6"
        v-for="(item, i) in result"
        :key="i"
      >
        <product-item column="column" :data-product="item"> </product-item>
      </div>
    </div>
  </div>
</template>

<script>
import SelectButton from "../ui/SelectButton.vue";
import ProductItem from "../product-item/ProductItem.vue";
import SideBar from "./SideBar.vue";
import BaseSpinner from "../ui/BaseSpinner.vue";

import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { onMounted, ref, watch } from "vue";

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
    BaseSpinner,
  },
  setup() {
    const showSidebarToggle = ref(false);
    const start = ref(0);
    const end = ref(6);
    const paginationNum = ref();
    const allProducts = ref([]);
    const result = ref([]);
    const swiperActiveIndex = ref();
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;
      await getAllProduct();
      isLoading.value = false;
    });

    function handlePagination(value) {
      swiperActiveIndex.value = value.activeIndex + 1;

      end.value = swiperActiveIndex.value * 6;
      start.value = end.value - 6;
    }

    watch((start, end), async () => {
      await getAllProduct();
    });

    // Fetch all Products
    async function getAllProduct() {
      const response = await fetch(`https://fakestoreapi.com/products`);

      const responseData = await response.json();
      allProducts.value = responseData;

      if (end.value <= allProducts.value.length) {
        result.value = allProducts.value.slice(start.value, end.value);
      } else {
        result.value = allProducts.value.slice(start.value);
      }
      paginationNum.value = Math.ceil(allProducts.value.length / 6);
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
      showSidebarToggle,
      paginationNum,
      start,
      end,
      allProducts,
      result,
      handlePagination,
      swiperActiveIndex,
      isLoading,
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
