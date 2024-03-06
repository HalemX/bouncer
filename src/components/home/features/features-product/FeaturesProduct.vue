<template>
  <div class="features-product-container container text-center">
    <div class="heading mb-5">
      <h2>FEATURED PRODUCTS</h2>
    </div>
    <HoldProduct />
  </div>
</template>

<script>
import HoldProduct from "./HoldProduct.vue";

export default {
  components: {
    HoldProduct,
  },
};
</script>

<style lang="scss" scoped>
.features-product-container {
  margin-bottom: 120px;
}
</style>
