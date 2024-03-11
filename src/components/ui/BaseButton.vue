<template>
  <div
    class="link-button"
    :class="{ hoverGray: grayHover, hoverBlue: blueHover, disabled: !disabled }"
  >
    <a href="#" class="link-color d-block h6 mb-2"><slot></slot></a>
    <span class="line d-block bg-white"></span>
  </div>
</template>

<script>
export default {
  props: ["grayHover", "blueHover", "disabled"],
};
</script>

<style lang="scss" scoped>
.link-button {
  width: fit-content;
  cursor: pointer;
  transition: 0.3s;
  .line {
    height: 2px;
  }
}
.hoverGray {
  @media (max-width: 767px) {
    margin: auto;
  }
  &:hover {
    color: rgb(230, 230, 230) !important;
    span {
      background-color: rgb(230, 230, 230) !important;
    }
  }
}
.hoverBlue {
  color: #c1c8ce;
  margin: auto;
  span {
    background-color: #c1c8ce !important;
  }
  &:hover {
    color: $second_color !important;
    span {
      background-color: $second_color !important;
    }
  }
}
</style>
