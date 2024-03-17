<template>
  <div class="container-products-grid">
    <BreadCrumb :breadcrumbData="breadcrumbData" />
    <div class="container-sidebar-main container">
      <div class="hold-sidebar-main row">
        <div class="col-lg-3">
          <HoldSidebar />
        </div>
        <div class="col-lg-9">
          <MainProductsCategory />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import HoldSidebar from "@/components/products/HoldSidebar.vue";
import MainProductsCategory from "@/components/products/MainProductsCategory.vue";

import { useRoute } from "vue-router";
import { ref, watch } from "vue";

export default {
  components: {
    BreadCrumb,
    HoldSidebar,
    MainProductsCategory,
  },
  setup() {
    const route = useRoute();
    const breadcrumbData = ref([
      {
        title: `${route.params.slug} category`,
        link: `/products/${route.params.slug} `,
      },
    ]);

    watch(
      () => route.params.slug,
      () => {
        breadcrumbData.value[0].title = `${route.params.slug} category`;
      }
    );

    return { breadcrumbData };
  },
};
</script>
