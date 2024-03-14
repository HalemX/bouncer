<template>
  <div class="filter-container">
    <div
      class="filter d-flex justify-content-center flex-column align-items-center"
    >
      <h2 class="heading-filter mb-4">BEST SELLER</h2>

      <ul
        class="categories-filter list-unstyled d-flex justify-content-md-center mb-4 overflow-auto w-100 m-auto overflow-auto pb-2"
      >
        <li
          class="link category text-dark mb-2 d-block mx-4 text-nowrap"
          :class="{ active: activeData == '' }"
          @click="
            count = 4;
            getNumOfAllProducts(count);
            getAllProducts();
            activeData = '';
            textBtn = 'LOAD MORE';
          "
        >
          All
        </li>
        <li
          class="link category text-dark mb-2 d-block mx-4 text-nowrap"
          :class="{ active: activeData == category }"
          v-for="category in categories"
          :key="category"
          @click="
            textBtn = 'LOAD MORE';
            count = 4;
            getProductByCategory(category, count);
            getAllProductByCategory(category);
            activeData = category;
          "
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </div>

  <div class="products-btn text-center">
    <div class="products row g-3 text-center mb-5">
      <transition-group @before-enter="beforeEnter" @enter="enter">
        <div
          class="container-product col-lg-3 col-6 d-none d-sm-block"
          v-for="(item, i) in products"
          :key="i"
        >
          <product-item
            column="column"
            :dataProduct="item"
            :allProductsByCategory="allProducts"
          >
          </product-item>
        </div>
      </transition-group>

      <SliderProductItem
        class="d-block d-sm-none"
        best-seller="bestseller"
        :allProducts="products"
      />
    </div>

    <div class="btn-container" v-if="allProducts.length > 4">
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
import { useStore } from "vuex";
import gsap from "gsap";

export default {
  components: {
    ProductItem,
    BaseButton,
    SliderProductItem,
  },
  setup() {
    const allProducts = ref([]);
    const products = ref([]);
    const categories = ref([]);
    const count = ref(4);
    const textBtn = ref("LOAD MORE");
    const activeData = ref("");
    const store = useStore();

    // Fetch All Products
    async function getAllProducts() {
      const response = await fetch("https://fakestoreapi.com/products");

      const responseData = await response.json();
      allProducts.value = responseData;
      // console.log(allProducts);
      store.commit("setAllProducts", allProducts);
    }

    // Fetch All Categories
    onMounted(async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const responseData = await response.json();
      categories.value = responseData;
      // console.log(categories.value);
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
      await getAllProducts();
      await getNumOfAllProducts(count.value);
    });

    async function loadMoreProducts() {
      if (count.value < allProducts.value.length) {
        count.value += 4;
        if (activeData.value == "") {
          await getNumOfAllProducts(count.value);
        } else {
          await getProductByCategory(activeData.value, count.value);
        }
      } else {
        count.value = 4;
        if (activeData.value == "") {
          await getNumOfAllProducts(count.value);
        } else {
          await getProductByCategory(activeData.value, count.value);
        }
      }
      count.value >= allProducts.value.length
        ? (textBtn.value = "LESS")
        : (textBtn.value = "LOAD MORE");
    }

    // Fetch Category Without Limit
    async function getAllProductByCategory(category) {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );

      const responseData = await response.json();
      allProducts.value = responseData;
      store.commit("setAllProducts", allProducts);

      // const test = computed(() => {
      //   return store.state.allProducts;
      // });

      // // allProducts.value = responseData;
      // console.log(test.value);
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
      getAllProductByCategory,
      getProductByCategory,
      activeData,
      getAllProducts,
      allProducts,
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
