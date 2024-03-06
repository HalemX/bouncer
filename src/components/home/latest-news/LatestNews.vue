<template>
  <div
    class="news-container container text-center"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <div class="heading mb-5">
      <h2>LATEST NEWS</h2>
    </div>

    <HoldNewProductCard />
  </div>
</template>

<script>
import HoldNewProductCard from "./HoldNewProductCard.vue";
export default {
  components: {
    HoldNewProductCard,
  },
};
</script>

<style scoped>
.news-container {
  margin-bottom: 120px;
}
</style>
