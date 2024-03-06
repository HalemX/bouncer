<template>
  <div class="container mb-5">
    <div class="hold-cart row g-3">
      <div
        class="container-cart col-lg-4 col-sm-6 auto"
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
