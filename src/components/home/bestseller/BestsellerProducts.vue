<template>
  <div class="filter-container">
    <div
      class="filter d-flex justify-content-center flex-column align-items-center"
    >
      <h2 class="heading-filter mb-4">BEST SELLER</h2>

      <ul
        class="categories-filter list-unstyled d-flex mb-4 overflow-auto w-100 m-auto overflow-auto justify-content-center"
      >
        <li
          @click.prevent="activeData = ''"
          class="link category text-dark mb-2 d-block mx-4 text-nowrap"
          :class="{ active: activeData == '' }"
          @click="getNumOfAllProducts(8)"
          @click.middle="count = 8"
        >
          All
        </li>
        <li
          class="link category text-dark mb-2 d-block mx-4 text-nowrap"
          :class="{ active: activeData == category }"
          @click.prevent="activeData = category"
          @click.middle="count = 8"
          v-for="category in categories"
          :key="category"
          @click="getProductByCategory(category, countCategory)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </div>

  <div class="products-btn text-center" id="bestseller">
    <div class="products row g-3 text-center mb-5">
      <transition-group @before-enter="beforeEnter" @enter="enter">
        <div
          class="container-product col-lg-3 col-6 d-none d-sm-block"
          v-for="(item, i) in products"
          :key="i"
        >
          <product-item
            column="column"
            :image-name="item?.image"
            :title="item?.title"
            :num-rate="item?.rating?.rate"
            :price="item?.price"
          >
          </product-item>
        </div>
      </transition-group>

      <SliderProductItem
        class="d-block d-md-none"
        best-seller="bestseller"
        :allProducts="products"
      />
    </div>

    <div class="btn-container" v-if="products.length >= 8">
      <base-button blue-hover="hover" @click.prevent="loadMoreProducts()">{{
        textBtn
      }}</base-button>
    </div>
  </div>
</template>

<script>
import ProductItem from "../../product-item/ProductItem.vue";
import SliderProductItem from "@/components/product-item/SliderProductItem.vue";
import BaseButton from "../../ui/BaseButton.vue";

import { ref, onMounted } from "vue";
import gsap from "gsap";

export default {
  components: {
    ProductItem,
    BaseButton,
    SliderProductItem,
  },
  setup() {
    const products = ref([]);
    const categories = ref([]);
    const count = ref(8);
    const countCategory = ref(8);
    const textBtn = ref("LOAD MORE");
    const activeData = ref("");

    // Fetch All Categories
    onMounted(async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const responseData = await response.json();
      categories.value = responseData;
    });

    // Fetch num of All Product
    async function getNumOfAllProducts(limit) {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      );

      const responseData = await response.json();
      products.value = responseData;
    }

    onMounted(async () => {
      await getNumOfAllProducts(count.value);
    });

    async function loadMoreProducts() {
      if (count.value < 20) {
        count.value += 4;
        if (activeData.value == "") {
          await getNumOfAllProducts(count.value);
        } else {
          await getProductByCategory(activeData.value, count.value);
        }
      } else {
        count.value = 8;
        if (activeData.value == "") {
          await getNumOfAllProducts(count.value);
        } else {
          await getProductByCategory(activeData.value, count.value);
        }
      }
      count.value == 20
        ? (textBtn.value = "LESS")
        : (textBtn.value = "LOAD MORE");
    }

    // Fetch By Category

    async function getProductByCategory(category, limit) {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
      );

      const responseData = await response.json();
      products.value = responseData;
    }

    // Transition When Load More
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
      categories,
      count,
      beforeEnter,
      enter,
      products,
      getNumOfAllProducts,
      loadMoreProducts,
      textBtn,
      getProductByCategory,
      activeData,
      countCategory,
    };
  },
};
</script>

<style scoped>
.filter::-webkit-scrollbar {
  display: none;
}
.category {
  cursor: pointer;
}
.active {
  color: #2e90e5 !important;
}
</style>
