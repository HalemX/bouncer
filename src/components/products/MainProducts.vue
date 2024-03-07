<template>
  <div class="main-filter-products mb-5">
    <main-product
      heading="iPhone 6 Plus"
      paragraph="Performance and design. Taken right to the edge."
      textButton="SHOP NOW"
      image-src="pic.png"
      second="second"
      products="products"
      handle-align="handleAlign"
      class="main p-3 mb-3"
    ></main-product>
    <FilterProducts />
  </div>
</template>

<script>
import MainProduct from "../product-item/MainProduct";
import FilterProducts from "./FilterProducts.vue";

export default {
  components: {
    MainProduct,
    FilterProducts,
  },
};
</script>

<style scoped lang="scss">
.main-filter-products {
  .main {
    border-radius: 5px;
    height: 340px !important;
    img {
      width: 500px !important;
    }
  }
}
</style>
