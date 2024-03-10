<template>
  <div class="container-details-product">
    <BreadCrumb :breadcrumbData="breadcrumbData" />
    <div class="container container-main-sidebar">
      <div class="hold-main-sidebar row justify-content-center">
        <MainSingleProduct class="col-xl-9" />
        <SideBar class="col-xl-3 d-none d-xl-block" />
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import MainSingleProduct from "@/components/single-product/MainSingleProduct.vue";
import SideBar from "@/components/single-product/SideBar.vue";

export default {
  components: {
    BreadCrumb,
    MainSingleProduct,
    SideBar,
  },

  setup() {
    const breadcrumbData = [
      { title: "products", link: "/products" },
      { title: "single Product", link: "/productdetails" },
    ];

    return { breadcrumbData };
  },
};
</script>
