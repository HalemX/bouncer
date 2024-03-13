<template>
  <div class="container-details">
    <div class="name-rate-product py-4 pe-5">
      <h4 class="name mb-4" :title="singleProduct?.title">
        {{ singleProduct?.title }}
      </h4>

      <div
        class="rate d-flex flex-column flex-sm-row align-items-start align-items-sm-center"
      >
        <div class="icons mb-2 mb-sm-0">
          <IconRate :num-rate="singleProduct?.rating?.rate" />
        </div>

        <div class="reviews d-flex flex-column flex-sm-row ms-0 ms-sm-3">
          <div class="count-reviews d-flex me-3 mb-2 mb-sm-0">
            <span>{{ singleProduct?.rating?.rate }}</span>
            <p class="mb-0 ms-2">reviews</p>
          </div>
          <a href="#">Submit a review</a>
        </div>
      </div>
    </div>

    <div class="price-info-product py-4 pe-5">
      <div class="price mb-4">
        <ProductPriceCmpo :price="singleProduct?.price" />
      </div>

      <div class="info-product">
        <div
          class="available d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3"
          v-for="(item, i) in infoProduct"
          :key="item"
        >
          <p class="mb-2 mb-sm-0 me-5 fw-bold">{{ item }}</p>
          <span>{{ dataInfoProduct[i] }}</span>
        </div>

        <p class="fw-bold mb-0">Free shipping</p>
      </div>
    </div>

    <div class="colors-size-filter-product py-4 pe-5">
      <div
        class="colors d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-4"
      >
        <p class="mb-2 mb-sm-0 me-5 fw-bold">Select Color:</p>
        <ColorsFilter :all-colors="colors" />
      </div>

      <div
        class="size d-flex flex-column flex-sm-row align-items-start align-items-sm-center"
      >
        <p class="mb-2 mb-sm-0 me-5 fw-bold">Size</p>
        <select-button
          firstOption="XS"
          secondOption="LG"
          customizeStyle="customize-style"
        ></select-button>
      </div>
    </div>

    <div
      class="counter-add-cart py-4 pe-0 d-flex align-items-center flex-wrap flex-sm-nowrap justify-content-between"
    >
      <div class="counter">
        <CounterBtn />
      </div>
      <div class="add-cart-love d-flex align-items-center">
        <router-link :to="{ name: 'cart' }">
          <button
            class="add-cart d-flex align-items-center border-0 p-3 me-3 justify-content-center"
          >
            <Icon
              icon="material-symbols:shopping-cart-outline-sharp"
              width="1.5rem"
            ></Icon>
            <p class="mb-0 ms-2">Add To Cart</p>
          </button>
        </router-link>

        <div class="love p-3" @click="loved = !loved">
          <Icon
            :icon="!loved ? 'icon-park-outline:like' : 'icon-park-solid:like'"
            width="1.5rem"
            :key="loved"
          ></Icon>
        </div>
      </div>
    </div>

    <div class="platform-btns py-4 d-flex flex-wrap flex-sm-nowrap">
      <PlatformBtns />
    </div>
  </div>
  <div class="test"></div>
</template>

<script>
import IconRate from "../ui/IconsRate.vue";
import ProductPriceCmpo from "../product-item/ProductPriceCmpo.vue";
import ColorsFilter from "../ui/ColorsFilter.vue";
import SelectButton from "../ui/SelectButton.vue";
import PlatformBtns from "../ui/PlatformBtns.vue";
import CounterBtn from "../ui/CounterBtn.vue";

import { Icon } from "@iconify/vue";
import { ref } from "vue";

export default {
  props: ["singleProduct"],
  components: {
    Icon,
    IconRate,
    ProductPriceCmpo,
    ColorsFilter,
    SelectButton,
    PlatformBtns,
    CounterBtn,
  },
  setup() {
    const loved = ref(false);
    const colors = ["#2e90e5", "red", "black", "#EFDFDF"];
    const infoProduct = ["Availability:", "Category:"];
    const dataInfoProduct = ["In stock", "Accessories"];

    return { colors, loved, infoProduct, dataInfoProduct };
  },
};
</script>

<style scoped lang="scss">
.container-details {
  .name-rate-product,
  .price-info-product,
  .colors-size {
    @include border-bottom(1px, solid, 0.3);
  }

  .count-reviews {
    color: $background_third_card !important;
  }

  .price-info-product {
    span {
      font-size: 14px;
    }
  }

  .counter-add-cart {
    @media (max-width: 460px) {
      .counter {
        width: 100% !important;
      }
      .add-cart-love {
        width: 100%;
        a {
          width: 100% !important;
          button {
            width: 95%;
          }
        }
      }
    }

    .add-cart,
    .love {
      background-color: #ebf6ff;
      color: $second_color;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
