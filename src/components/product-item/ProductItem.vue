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
          <div class="love p-2 me-3" @click="loveData = !loveData">
            <Icon
              class="blue-icon"
              :icon="!loveData ? 'ph:heart-light' : 'ph:heart-straight-fill'"
              width="1.9rem"
              :key="loveData"
            ></Icon>
          </div>

          <div
            class="cart p-2"
            @click="
              addProductToCart(1);
              showToast();
            "
          >
            <Icon
              icon="material-symbols-light:shopping-cart-outline-sharp"
              width="1.9rem"
              class="blue-icon"
              :key="cartData"
            ></Icon>
          </div>
        </div>
        <img :src="dataProduct?.image" alt="product image" class="img-fluid" />
      </div>

      <router-link :to="`/products/${dataProduct?.id}`">
        <div class="info-product" :class="{ 'text-start': row }">
          <div class="icons">
            <IconRate :numRate="dataProduct?.rating?.rate" />
          </div>

          <ProductPriceCmpo :price="dataProduct?.price" />

          <p class="text-dark mt-1" :title="dataProduct?.title">
            {{ dataProduct?.title.slice(0, 25) }}
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
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: ["dataProduct", "column", "row", "columnSmallScreen"],
  components: {
    ProductPriceCmpo,
    IconRate,
    Icon,
  },

  setup(props) {
    const loveData = ref(false);
    const cartData = ref(false);
    const store = useStore();
    const toast = useToast();

    function addProductToCart(qty) {
      store.commit("setProductCart", { product: props.dataProduct, qty });
    }

    function showToast() {
      toast.open({
        message: "Product Added To Cart",
        duration: 1000,
        position: "top-right",
      });
    }

    return { loveData, cartData, addProductToCart, showToast };
  },
};
</script>

<style lang="scss" scoped>
.columnBorderStyle {
  height: 320px !important;
  .image-product {
    width: 90%;
    height: 167px;
    img {
      max-height: 150px !important;
      user-select: none;
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
  .love,
  .cart {
    border: 3px solid rgba(#2e90e5, 0.3);
    border-radius: 50%;
    transition: 0.3s;
  }
  .love,
  .cart {
    &:hover {
      border: 3px solid rgba(#2e90e5, 1);
    }
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
