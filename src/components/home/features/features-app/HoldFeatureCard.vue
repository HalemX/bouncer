<template>
  <div class="container my-5">
    <div class="hold-cart row g-3">
      <div
        class="container-cart col-lg-4 col-sm-6 d-flex auto"
        v-for="i in 3"
        :key="i"
      >
        <FeaturesAppCard />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturesAppCard from "./FeaturesAppCard.vue";

export default {
  components: {
    FeaturesAppCard,
  },
};
</script>

<style scoped>
.auto {
  flex: auto;
}
</style>
