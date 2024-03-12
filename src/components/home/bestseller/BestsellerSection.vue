<template>
  <div
    class="bestseller-section mb-5 container"
    id="bestseller"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <BestsellerProducts />
  </div>
</template>

<script>
import BestsellerProducts from "./BestsellerProducts.vue";

export default {
  components: {
    BestsellerProducts,
  },
};
</script>
