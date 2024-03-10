<template>
  <div class="all-data-of-product-item">
    <div
      class="product-item overflow-hidden d-flex align-items-center px-2 py-3"
      :class="{
        columnBorderStyle: column,
        rowStyle: row,
        columnSmallScreenStyle: columnSmallScreen,
      }"
    >
      <div class="image-product mb-3 pb-3 position-relative">
        <div
          class="overlay position-absolute d-flex align-items-center justify-content-center"
        >
          <Icon
            icon="ph:heart-straight-fill"
            width="1.5rem"
            class="me-3 blue-icon"
          ></Icon>
          <Icon
            icon="map:grocery-or-supermarket"
            width="1.5rem"
            class="me-3 blue-icon"
          ></Icon>
        </div>
        <img :src="imgSrc" alt="product image" class="img-fluid" />
      </div>

      <router-link :to="{ name: 'singleProduct' }">
        <div class="info-product" :class="{ 'text-start': row }">
          <p class="fw-bold text-dark">{{ heading }}</p>

          <div class="icons">
            <IconRate :numRate="3" />
          </div>

          <ProductPriceCmpo priceAfterDiscount="$499" priceBefore="$599" />
        </div>
      </router-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import ProductPriceCmpo from "./ProductPriceCmpo.vue";
import IconRate from "../ui/IconsRate.vue";
import { Icon } from "@iconify/vue";

import { onMounted } from "vue";

export default {
  props: ["column", "row", "imageName", "heading", "columnSmallScreen"],
  components: {
    ProductPriceCmpo,
    IconRate,
    Icon,
  },

  setup(props) {
    const imgSrc = require(`@/assets/images/${props.imageName}`);

    onMounted(async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const result = await response.json();
      console.log(result);
    });

    return { imgSrc };
  },
};
</script>

<style lang="scss" scoped>
.product {
  .after-discount {
    color: $primary_color;
  }
  .before-discount {
    color: $background_third_card;
  }
}

.columnBorderStyle {
  flex-direction: column;
  @include border(1px, solid, $background_second_card_border, 1, 7px);
  .image-product {
    border-bottom: 2px solid $background_second_card_border;
  }
}
.rowStyle {
  flex-direction: row;
  img {
    width: 150px;
  }
}

.overlay {
  background-color: rgba(#f6f7f8, 0.8);
  width: 100%;
  height: 90%;
  border-radius: 5px;
  transition: 0.5s;
  transform: translateX(-500px);
  .blue-icon {
    color: $second_color;
  }
}

.image-product:hover .overlay {
  transform: translateX(0px);
  cursor: pointer;
}
.columnSmallScreenStyle {
  @media (max-width: 576px) {
    flex-direction: column;
    .info-product {
      text-align: center !important;
    }
  }
}
</style>
./ProductPriceCmpo.vue
