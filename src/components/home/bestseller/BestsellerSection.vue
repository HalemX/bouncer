<template>
  <div
    class="bestseller-section mb-5 container"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <BestsellerFilter />
    <BestsellerProducts />
  </div>
</template>

<script>
import BestsellerFilter from "./BestsellerFilter.vue";
import BestsellerProducts from "./BestsellerProducts.vue";

export default {
  components: {
    BestsellerFilter,
    BestsellerProducts,
  },
};
</script>
