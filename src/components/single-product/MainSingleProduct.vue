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
      <SliderProductItem sidebar="sidebar" :allProducts="bestSellerProducts" />
    </div>

    <div class="related-products text-center mt-5">
      <h3 class="mb-3 ps-3 mb-4">RELATED PRODUCTS</h3>
      <SliderProductItem :allProducts="test" />
    </div>
  </div>
</template>

<script>
import SliderImage from "./SliderImage.vue";
import ProductDetails from "./ProductDetails.vue";
import ProductInfo from "./ProductInfo.vue";
import SliderProductItem from "../product-item/SliderProductItem.vue";

import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref, computed } from "vue";

export default {
  components: {
    SliderImage,
    ProductDetails,
    ProductInfo,
    SliderProductItem,
  },
  setup() {
    const count = 8;
    const route = useRoute();
    const singleProduct = ref({});
    const bestSellerProducts = ref([]);
    const test = ref([]);
    const store = useStore();

    const idProduct = route.params.id;

    // Fetch Single Product
    async function getSingleProduct(id) {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const responseData = await response.json();

      singleProduct.value = responseData;
    }

    // Fetch bestseller
    async function getBestsellerProducts(limit) {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      const responseData = await response.json();

      bestSellerProducts.value = responseData;
    }

    onMounted(async () => {
      await getSingleProduct(idProduct);
      await getBestsellerProducts(count);
    });

    const relatedProducts = computed(() => {
      return store.state.allProducts;
    });

    if (localStorage.getItem("relatedProducts")) {
      test.value = JSON.parse(localStorage.getItem("relatedProducts"));
    } else {
      test.value = relatedProducts.value;
    }

    return { count, singleProduct, bestSellerProducts, relatedProducts, test };
  },
};
</script>
