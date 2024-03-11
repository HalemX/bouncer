<template>
  <div class="products-btn text-center">
    <div class="products row g-3 text-center mb-5">
      <transition-group @before-enter="beforeEnter" @enter="enter">
        <div
          class="container-product col-lg-3 col-6 d-none d-sm-block"
          v-for="(item, i) in allProducts"
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
        :allProducts="allProducts"
      />
    </div>

    <base-button blue-hover="hover" @click.prevent="loadMoreProducts()">{{
      textBtn
    }}</base-button>
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
    const allProducts = ref([]);
    const count = ref(8);
    const textBtn = ref("LOAD MORE");

    async function getNumOfProducts(limit) {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      );

      const responseData = await response.json();
      allProducts.value = responseData;
    }

    onMounted(async () => {
      await getNumOfProducts(count.value);
    });

    async function loadMoreProducts() {
      count.value += 4;
      if (count.value == 20) {
        textBtn.value = "LESS";
        count.value = 4;
      } else {
        textBtn.value = "LOAD MORE";
        count.value += 4;
      }
      await getNumOfProducts(count.value);
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
      beforeEnter,
      enter,
      allProducts,
      getNumOfProducts,
      loadMoreProducts,
      textBtn,
    };
  },
};
</script>
