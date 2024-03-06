<template>
  <div
    class="bestseller-section mb-5 container"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <filter-best-seller></filter-best-seller>
    <HoldProduct />
  </div>
</template>

<script>
import FilterBestSeller from "./FilterBestSeller.vue";
import HoldProduct from "./HoldProduct.vue";

export default {
  components: {
    FilterBestSeller,
    HoldProduct,
  },
};
</script>
