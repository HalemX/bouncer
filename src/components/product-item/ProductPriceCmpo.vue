<template>
  <div class="price mt-3">
    <span class="price me-3 h5 fw-normal">${{ price }}</span>
  </div>
</template>

<script>
export default {
  props: ["price"],
};
</script>

<style scoped lang="scss">
.price {
  color: $primary_color;
}
</style>
