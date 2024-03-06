<template>
  <Icon
    v-for="i in 5"
    :key="i"
    icon="radix-icons:star-filled"
    width="1rem"
    class="icon me-1"
  ></Icon>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="scss">
.icon:not(:last-child) {
  color: #ffc600;
}
.icon:last-child {
  color: $background_third_card;
}
</style>
