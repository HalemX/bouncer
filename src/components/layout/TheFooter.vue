<template>
  <HoldFooter
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  />
</template>

<script>
import HoldFooter from "../footer/HoldFooter";

export default {
  components: {
    HoldFooter,
  },
};
</script>
