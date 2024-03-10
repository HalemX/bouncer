<template>
  <select class="select-header bg-transparent me-4" :class="customizeStyle">
    <option selected :value="firstOption">{{ firstOption }}</option>
    <option :value="secondOption">{{ secondOption }}</option>
    <slot></slot>
  </select>
</template>

<script>
export default {
  props: ["firstOption", "secondOption", "customizeStyle"],
};
</script>

<style lang="scss" scoped>
.select-header {
  width: fit-content !important;
  border: none;
  color: black !important;
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
}

.customize-style {
  @include border(2px, solid, #f1f3f4, 1, 4px);
  padding: 5px 40px 5px 1px;
  &:focus {
    outline: none;
    @include border(2px, solid, #f1f3f4, 1, 4px);
    box-shadow: none;
  }
}
</style>
