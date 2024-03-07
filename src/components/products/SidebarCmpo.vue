<template>
  <h5 class="mb-4">{{ heading }}</h5>
  <div
    class="one-accessories d-flex align-items-center justify-content-between mb-4"
    v-for="i in 6"
    :key="i"
  >
    <p class="mb-0 link">{{ type }}</p>
    <span class="link">{{ num }}</span>
  </div>
</template>

<script>
export default {
  props: ["heading", "type", "num"],
};
</script>

<style lang="scss" scoped>
.one-accessories {
  p,
  span {
    cursor: pointer;
  }
  span {
    color: $background_third_card;
  }
}
</style>
