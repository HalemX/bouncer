<template>
  <div class="main-single-product row mb-5">
    <div class="image-swiper-product col-lg-5">
      <SliderImage />
    </div>

    <div class="details-product col-lg-7">
      <ProductDetails />
    </div>

    <div class="informations-product">
      <ProductInfo />
    </div>

    <!-- Bestseller section of sidebar appear at small screen and in sidebar is hide (handle responsive) -->
    <div class="best-seller d-block d-xl-none text-center mt-5">
      <h3 class="header-sidebar mb-3 ps-3 mb-4">BEST SELLER</h3>

      <!-- (sidebar prop) to add breakpoints must appear of slider product when use in sidebar and (count prop) is num of swiper-->
      <SliderProductItem sidebar="sidebar" :count="count" />
    </div>

    <div class="related-products text-center mt-5">
      <h3 class="mb-3 ps-3 mb-4">RELATED PRODUCTS</h3>
      <SliderProductItem :count="count" />
    </div>
  </div>
</template>

<script>
import SliderImage from "./SliderImage.vue";
import ProductDetails from "./ProductDetails.vue";
import ProductInfo from "./ProductInfo.vue";
import SliderProductItem from "../product-item/SliderProductItem.vue";

export default {
  components: {
    SliderImage,
    ProductDetails,
    ProductInfo,
    SliderProductItem,
  },
  setup() {
    const count = 4;

    return { count };
  },
};
</script>
