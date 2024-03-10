<template>
  <div class="container-checkout">
    <BreadCrumb :breadcrumbData="breadcrumbData" />
    <MainCart />
  </div>
</template>

<script>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import MainCart from "@/components/cart/MainCart.vue";

export default {
  components: {
    BreadCrumb,
    MainCart,
  },
  setup() {
    const breadcrumbData = [{ title: "cart", link: "/cart" }];

    return { breadcrumbData };
  },
};
</script>
