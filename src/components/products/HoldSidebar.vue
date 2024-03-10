<template>
  <div class="container-sidebar position-sticky mb-5 d-none d-lg-block">
    <SideBar showLargeScreen="show" />
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.container-sidebar {
  top: 15px;
}
</style>
