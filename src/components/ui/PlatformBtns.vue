<template>
  <button
    class="d-flex align-items-center py-3 px-2 border-0 text-light w-100 justify-content-center faceStyle me-0 me-sm-1 mb-2 mb-sm-0"
  >
    <Icon icon="ic:twotone-facebook" width="1.5rem"></Icon>
    <p class="mb-0 ms-2">Share on Facebook</p>
  </button>
  <button
    class="d-flex align-items-center py-3 px-2 border-0 text-light w-100 justify-content-center twitStyle"
  >
    <Icon icon="codicon:twitter" width="1.5rem"></Icon>
    <p class="mb-0 ms-2">Share on Twitter</p>
  </button>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  props: ["platformStyle", "iconName"],
  components: {
    Icon,
  },
};
</script>

<style scoped lang="scss">
button {
  border-radius: 5px;
}

.faceStyle {
  background-color: #385c8e;
}
.twitStyle {
  background-color: #03a9f4;
}
</style>
