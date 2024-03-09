<template>
  <div class="price mt-3">
    <span class="after-discount me-3 h5 fw-normal">{{
      priceAfterDiscount
    }}</span>
    <span class="before-discount h5 fw-normal text-decoration-line-through">{{
      priceBefore
    }}</span>
  </div>
</template>

<script>
export default {
  props: ["priceAfterDiscount", "priceBefore"],
};
</script>
<style scoped lang="scss">
.price {
  .after-discount {
    color: $primary_color;
  }
  .before-discount {
    color: $background_third_card;
  }
}
</style>
