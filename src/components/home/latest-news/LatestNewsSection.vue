<template>
  <div
    class="latest-news-container container text-center mb-5"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <div class="heading mb-4">
      <h2>LATEST NEWS</h2>
    </div>

    <div class="all-cards row g-3">
      <div
        class="container-card col-lg-4 col-sm-6 auto"
        v-for="i in 3"
        :key="i"
      >
        <NewProductCard />
      </div>
    </div>
  </div>
</template>

<script>
import NewProductCard from "./NewProductCard.vue";

export default {
  components: {
    NewProductCard,
  },
};
</script>

<style scoped>
.auto {
  flex: auto;
}
</style>
