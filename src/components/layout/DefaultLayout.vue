<template>
  <div class="default-layout">
    <the-navbar></the-navbar>

    <main>
      <slot></slot>
    </main>

    <the-footer></the-footer>
  </div>
</template>

<script>
// Import main structure project
import TheNavbar from "./TheNavbar.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>
