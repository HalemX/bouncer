<template>
  <Icon
    v-for="i in 5"
    :key="i"
    :class="{ fillRate: i <= numRate }"
    icon="radix-icons:star-filled"
    width="1rem"
    class="icon me-1"
  ></Icon>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  props: ["numRate"],
  components: {
    Icon,
  },
};
</script>

<style scoped lang="scss">
// .icon:not(:last-child) {
//   color: #ffc600;
// }
.icon {
  color: $background_third_card;
}
.fillRate {
  color: #ffc600 !important;
}
</style>
