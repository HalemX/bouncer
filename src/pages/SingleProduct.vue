<template>
  <div class="container-details-product">
    <BreadCrumb :breadcrumbData="breadcrumbData" />
    <div class="container container-main-sidebar">
      <div class="hold-main-sidebar row justify-content-center">
        <MainSingleProduct
          class="col-xl-9"
          @singleProduct="handleSingleProduct"
        />
        <SideBar class="col-xl-3 d-none d-xl-block" />
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import MainSingleProduct from "@/components/single-product/MainSingleProduct.vue";
import SideBar from "@/components/single-product/SideBar.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    BreadCrumb,
    MainSingleProduct,
    SideBar,
  },

  setup() {
    const singleProduct = ref({});
    const route = useRoute();
    const breadcrumbData = ref([
      { title: "products", link: `/products/${route.params.slug} ` },
      { title: singleProduct.value.title, link: "/productdetails" },
    ]);

    breadcrumbData.value[0].link = `/products/${route.params.slug}`;

    function handleSingleProduct(data) {
      singleProduct.value = data;
      breadcrumbData.value[1].title = singleProduct.value.title;
      breadcrumbData.value[1].link = `/products/${singleProduct.value.id}`;
    }

    return { breadcrumbData, handleSingleProduct };
  },
};
</script>
