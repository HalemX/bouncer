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
import { useRoute } from "vue-router";

export default {
  components: {
    SelectButton,
    ProductItem,
    SideBar,
    Icon,
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
    const route = useRoute();
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;

      await getProductByCategory(route.params.slug);
      isLoading.value = false;
    });

    function handlePagination(value) {
      swiperActiveIndex.value = value.activeIndex + 1;

      end.value = swiperActiveIndex.value * 6;
      start.value = end.value - 6;
    }

    watch((start, end), async () => {
      isLoading.value = true;
      await getProductByCategory(route.params.slug);
      isLoading.value = false;
    });

    // Fetch By Category
    async function getProductByCategory(category) {
      isLoading.value = true;

      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );

      const responseData = await response.json();
      isLoading.value = false;

      allProducts.value = responseData;

      if (end.value <= allProducts.value.length) {
        result.value = allProducts.value.slice(start.value, end.value);
      } else {
        result.value = allProducts.value.slice(start.value);
      }

      paginationNum.value = Math.ceil(allProducts.value.length / 6);
    }

    watch(
      () => route.params.slug,
      () => {
        getProductByCategory(route.params.slug);
      }
    );

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
      isLoading,
      handlePagination,
      swiperActiveIndex,
      beforeEnter,
      enter,
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
