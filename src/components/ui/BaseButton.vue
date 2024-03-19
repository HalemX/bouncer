<template>
  <div
    class="link-button"
    :class="{ hoverGray: grayHover, hoverBlue: blueHover, disabled: !disabled }"
  >
    <a href="#" class="link-color d-block h6 mb-2"><slot></slot></a>
    <span class="line d-block" v-if="grayHover"></span>

    <div class="special-line d-flex" v-else>
      <span class="line d-block"></span>
      <span class="line d-block ms-auto"></span>
    </div>
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
    transition: 0.5s;
    height: 2px;
    width: 0;
    background-color: rgb(230, 230, 230) !important;
  }
}
.hoverGray {
  @media (max-width: 767px) {
    margin: auto;
  }
  &:hover {
    color: rgb(230, 230, 230) !important;
    .line {
      width: 100%;
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
    .line {
      width: 50%;
      background-color: $second_color !important;
    }
  }
}
</style>
