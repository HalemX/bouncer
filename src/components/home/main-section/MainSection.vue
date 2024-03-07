<template>
  <div>
    <div class="main-section">
      <MainSectionProduct />
      <main-cards></main-cards>
    </div>
  </div>
</template>

<script>
import MainSectionProduct from "./MainSectionProduct.vue";
import MainCards from "./MainCards.vue";

export default {
  components: {
    MainSectionProduct,
    MainCards,
  },
};
</script>

<style scoped lang="scss">
.main-section {
  height: 82vh;
}
</style>
