<template>
  <div>
    <span
      class="color me-1 d-inline-block"
      v-for="i in allColors"
      :key="i"
      :style="{ background: i }"
      @click="activeColor = i"
      :class="{ active: activeColor === i }"
    >
    </span>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["allColors"],
  setup() {
    const activeColor = ref("");

    return { activeColor };
  },
};
</script>

<style scoped lang="scss">
.color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.active {
  outline: 2px solid v-bind(activeColor);
  border: 4px solid white;
}
</style>
