<template>
  <div class="container-products-grid">
    <BreadCrumb :breadcrumbData="breadcrumbData" />
    <div class="container-sidebar-main container">
      <div class="hold-sidebar-main row">
        <div class="col-lg-3">
          <HoldSidebar />
        </div>
        <div class="col-lg-9">
          <MainProducts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import HoldSidebar from "@/components/products/HoldSidebar.vue";
import MainProducts from "@/components/products/MainProducts.vue";

export default {
  components: {
    BreadCrumb,
    HoldSidebar,
    MainProducts,
  },
  setup() {
    const breadcrumbData = [{ title: "products", link: "/products" }];

    return { breadcrumbData };
  },
};
</script>
