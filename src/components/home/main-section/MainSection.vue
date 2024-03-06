<template>
  <div class="main-section">
    <MainSectionProduct />
    <main-cards></main-cards>
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
