<template>
  <div class="container-footer">
    <div class="container-top-second-section mb-4 py-2 px-4">
      <div
        class="top-second-section d-flex align-items-center flex-column mt-5"
      >
        <TopSectionFooter />
        <SecondSectionFooter />
      </div>
    </div>
    <div class="container-last-section">
      <div class="last-section">
        <ThirdSectionFooter />
      </div>
    </div>
  </div>
</template>

<script>
import TopSectionFooter from "./TopSectionFooter.vue";
import SecondSectionFooter from "./SecondSectionFooter.vue";
import ThirdSectionFooter from "./ThirdSectionFooter.vue";

export default {
  components: {
    TopSectionFooter,
    SecondSectionFooter,
    ThirdSectionFooter,
  },
};
</script>

<style lang="scss" scoped>
.container-footer {
  background-color: $background_second_card_border;
}
.container-top-second-section {
  @include border-bottom(1px, solid, 0.3);
}
</style>
