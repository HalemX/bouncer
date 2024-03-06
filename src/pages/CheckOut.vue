<template>
  <div class="hold-checkout">
    <BreadCrumb />
    <MainCheckOut />
  </div>
</template>

<script>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import MainCheckOut from "@/components/checkout/MainCheckOut.vue";

export default {
  components: {
    BreadCrumb,
    MainCheckOut,
  },
};
</script>
