<template>
  <div
    class="hold-product row g-3 text-center"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <div
      class="container-product col-lg-4 col-sm-6 auto"
      v-for="i in 3"
      :key="i"
    >
      <product-item
        row="row"
        column-small-screen="column"
        :image-name="dataObj.imageName"
        :heading="dataObj.heading"
      >
      </product-item>
    </div>

    <div class="col-12 mt-5">
      <SearchInput
        place-holder="Search query..."
        text-btn="Search"
        search="search"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/product-item/ProductItem";
import SearchInput from "@/components/ui/SearchInput.vue";

export default {
  components: {
    ProductItem,
    SearchInput,
  },

  setup() {
    const dataObj = {
      imageName: "slider1.png",
      heading: "Beats Solo 2 On EarHeadphones - Black",
    };

    const count = 3;

    return { dataObj, count };
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
