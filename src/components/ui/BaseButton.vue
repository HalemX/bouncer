<template>
  <div
    class="link-button"
    :class="{ hoverGray: grayHover, hoverBlue: blueHover }"
  >
    <a href="#" class="link-color d-block h6 mb-2"><slot></slot></a>
    <span
      class="line d-block bg-white"
      :class="{
        bgBDarkCenterStyle: bgDark,
        centerSmallScreenStyle: centerSmallScreen,
      }"
    ></span>
  </div>
</template>

<script>
export default {
  props: ["bgDark", "center", "centerSmallScreen", "grayHover", "blueHover"],
};
</script>

<style lang="scss" scoped>
.link-button {
  cursor: pointer;
  transition: 0.3s;
}
.line {
  width: 50px;
  height: 3px;
}

.hoverGray:hover {
  color: rgb(230, 230, 230) !important;
  span {
    background-color: rgb(230, 230, 230) !important;
  }
}
.hoverBlue {
  color: #c1c8ce;
  transition: 0.3s;
  &:hover {
    color: $second_color !important;
    span {
      background-color: $second_color !important;
    }
  }
}

.bgBDarkCenterStyle {
  background-color: #c1c8ce !important;
  margin: auto;
  &:hover {
    background-color: $second_color !important;
  }
}
@media (max-width: 767px) {
  .centerSmallScreenStyle {
    margin: auto;
  }
}
</style>
