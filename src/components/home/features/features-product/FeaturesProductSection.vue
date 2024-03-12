<template>
  <div
    class="features-product-container container text-center mb-5"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <div class="heading mb-4">
      <h2>FEATURED PRODUCTS</h2>
    </div>

    <div class="features-product-container row g-3 text-center">
      <div
        class="feature-product col-lg-4 col-sm-6 auto"
        v-for="(item, i) in allProducts"
        :key="i"
      >
        <product-item
          row="row"
          column-small-screen="column"
          :image-name="item?.image"
          :title="item?.title"
          :num-rate="item?.rating?.rate"
          :price="item?.price"
        >
        </product-item>
      </div>

      <div class="mt-4">
        <SearchInput
          place-holder="Search query..."
          text-btn="Search"
          search="search"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/product-item/ProductItem.vue";
import SearchInput from "@/components/ui/SearchInput.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    ProductItem,
    SearchInput,
  },
  setup() {
    const allProducts = ref([]);

    onMounted(async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=3");

      const responseData = await response.json();
      allProducts.value = responseData;
    });

    return { allProducts };
  },
};
</script>

<style lang="scss" scoped>
.input-search {
  @include border(3px, solid, $background_second_card_border, 1, 5px);
  border-right: none !important;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  &:focus {
    outline: none;
  }
}
button {
  @include border(3px, solid, $second_color, 1, 5px);
  background-color: $second_color;
  border-left: none !important;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.auto {
  flex: auto;
}
</style>
