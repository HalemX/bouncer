<template>
  <div
    class="container-footer"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
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
import TopSectionFooter from "../footer/TopSectionFooter.vue";
import SecondSectionFooter from "../footer/SecondSectionFooter";
import ThirdSectionFooter from "../footer/ThirdSectionFooter";

export default {
  components: {
    TopSectionFooter,
    SecondSectionFooter,
    ThirdSectionFooter,
  },
};
</script>

<style scoped lang="scss">
.container-top-second-section {
  border: 1px solid rgb(237 238 240);
}
</style>
