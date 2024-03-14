<template>
  <div class="all-data-of-product-item">
    <div
      class="product-item overflow-hidden d-flex align-items-center text-center px-2 py-3"
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
        <img :src="dataProduct?.image" alt="product image" class="img-fluid" />
      </div>

      <router-link :to="`/products/${dataProduct?.id}`">
        <div class="info-product" :class="{ 'text-start': row }">
          <div class="icons">
            <IconRate :numRate="dataProduct?.rating?.rate" />
          </div>

          <ProductPriceCmpo :price="dataProduct?.price" />

          <p class="fw-bold text-dark mt-2" :title="dataProduct?.title">
            {{ dataProduct?.title.slice(0, 31) }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductPriceCmpo from "./ProductPriceCmpo.vue";
import IconRate from "../ui/IconsRate.vue";
import { Icon } from "@iconify/vue";

// import { useStore } from "vuex";

export default {
  props: [
    "dataProduct",
    "allProductsByCategory",
    "column",
    "row",
    "columnSmallScreen",
  ],
  components: {
    ProductPriceCmpo,
    IconRate,
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.columnBorderStyle {
  height: 350px !important;
  .image-product {
    width: 90%;
    height: 167px;
    img {
      max-height: 150px !important;
    }
  }
  flex-direction: column;
  @include border(1px, solid, $background_second_card_border, 1, 7px);
  .image-product {
    border-bottom: 1px solid $background_second_card_border;
  }
}
.rowStyle {
  flex-direction: row;
  .image-product {
    margin-right: 1rem;
  }
  img {
    width: 150px;
    height: 129px;
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

.image-product {
  img {
    aspect-ratio: 1 / 1;
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
