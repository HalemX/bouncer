<template>
  <div class="products-btn text-center">
    <div class="products row g-3 text-center mb-5">
      <transition-group @before-enter="beforeEnter" @enter="enter">
        <div
          class="container-product col-lg-3 col-6 d-none d-sm-block"
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
      </transition-group>

      <SliderProductItem
        class="d-block d-sm-none"
        best-seller="bestSeller"
        :count="count"
      />
    </div>

    <base-button blue-hover="hover" @click.prevent="count += 4"
      >LOAD MORE</base-button
    >
  </div>
</template>

<script>
import ProductItem from "../../product-item/ProductItem.vue";
import SliderProductItem from "@/components/product-item/SliderProductItem.vue";
import BaseButton from "../../ui/BaseButton.vue";

import { ref } from "vue";
import gsap from "gsap";

export default {
  components: {
    ProductItem,
    BaseButton,
    SliderProductItem,
  },
  setup() {
    const dataObj = {
      imageName: "mack.png",
      heading: "Apple Macbook Pro",
    };

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

    const count = ref(8);

    return { dataObj, count, beforeEnter, enter };
  },
};
</script>
