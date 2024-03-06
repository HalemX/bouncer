<template>
  <div class="allow-sticky">
    <div class="container-sidebar py-5 position-sticky mb-3">
      <div class="best-seller">
        <h5 class="header-sidebar mb-3 ps-3">BEST SELLER</h5>

        <SliderProductItem sidebar="sideBar" :count="4" />
      </div>

      <div
        class="third-card card-height overflow-hidden position-relative mt-5 ms-3"
      >
        <ThirdCard sideBar="sideBar" />
      </div>
    </div>
  </div>
</template>

<script>
import SliderProductItem from "../product-item/SliderProductItem.vue";
import ThirdCard from "../home/main-section/ThirdCard.vue";

export default {
  components: {
    SliderProductItem,
    ThirdCard,
  },
};
</script>

<style scoped lang="scss">
.container-sidebar {
  top: 0;
  .header-sidebar {
    color: $background_third_card;
  }
  .third-card {
    height: 480px;
    background-color: $background_third_card;
  }
}
</style>
