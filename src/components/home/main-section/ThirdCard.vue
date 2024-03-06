<template>
  <div class="info-card p-3">
    <h3 class="mb-4 mt-3">GoPro Hero 6</h3>
    <p class="mb-4">
      Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
    </p>
    <span class="h4 fw-normal">$299</span>
  </div>
  <div
    class="image-card position-absolute"
    :class="{ mainThirdCardStyle: thirdCard, sideBarStyle: sideBar }"
  >
    <img
      :src="require('@/assets/images/50051823_540375.png')"
      alt="card photo"
      class="img-fluid"
    />
  </div>
</template>

<script>
export default {
  props: ["thirdCard", "sideBar"],
};
</script>

<style lang="scss" scoped>
span {
  color: #707070;
}
.mainThirdCardStyle {
  @include handle-position(75px, -30px);
}
.sideBarStyle {
  bottom: 20px;
}
</style>
