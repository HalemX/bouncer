<template>
  <div class="main-single-product row mb-5">
    <div class="image-swiper-product col-lg-5">
      <SliderImage :singleProduct="singleProduct" />
    </div>

    <div class="details-product col-lg-7">
      <ProductDetails :singleProduct="singleProduct" />
    </div>

    <div class="informations-product" :singleProduct="singleProduct">
      <ProductInfo :singleProduct="singleProduct" />
    </div>

    <!-- Bestseller section of sidebar appear at small screen and in sidebar is hide (handle responsive) -->
    <div class="best-seller d-block d-xl-none text-center mt-5">
      <h3 class="header-sidebar mb-3 ps-3 mb-4">BEST SELLER</h3>

      <!-- (sidebar prop) to add breakpoints must appear of slider product when use in sidebar and (count prop) is num of swiper-->
      <SliderProductItem sidebar="sidebar" :allProducts="data" />
    </div>

    <!-- <div class="related-products text-center mt-5">
      <h3 class="mb-3 ps-3 mb-4">RELATED PRODUCTS</h3>
      <SliderProductItem :products="bestSellerProduct" />
    </div> -->
  </div>
</template>

<script>
import SliderImage from "./SliderImage.vue";
import ProductDetails from "./ProductDetails.vue";
import ProductInfo from "./ProductInfo.vue";
import SliderProductItem from "../product-item/SliderProductItem.vue";

import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

export default {
  components: {
    SliderImage,
    ProductDetails,
    ProductInfo,
    SliderProductItem,
  },
  setup() {
    const count = 4;
    const route = useRoute();
    const singleProduct = ref({});
    const data = ref([]);

    const idProduct = route.params.id;

    // Fetch Single Product
    async function getSingleProduct(id) {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const responseData = await response.json();

      singleProduct.value = responseData;
    }
    // Fetch Single Product
    async function getProducts() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const responseData = await response.json();

      data.value = responseData;
      console.log(data.value);
    }

    onMounted(async () => {
      await getSingleProduct(idProduct);
      await getProducts();
    });
    return { count, singleProduct, data };
  },
};
</script>
