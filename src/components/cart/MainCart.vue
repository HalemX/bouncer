<template>
  <div class="container">
    <div
      class="no-products-cart d-flex align-items-center justify-content-center flex-column p-4"
      v-if="!productsCart.length"
    >
      <div class="icon-shopping mb-3">
        <Icon
          icon="material-symbols:shopping-cart-outline-sharp"
          width="10rem"
        ></Icon>
      </div>
      <h1 class="fw-bold mb-3">Ready To Fill Cart?</h1>
      <router-link
        to="/products"
        class="text-dark button-shopping rounded-pill px-5 py-3"
      >
        <p class="mb-0">go shopping</p></router-link
      >
    </div>

    <div class="table-responsive" v-else>
      <table class="table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th class="text-center price">PRICE</th>
            <th class="text-center">QTY</th>
            <th class="text-center text-nowrap">UNIT PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in productsCart" :key="i">
            <td class="py-5">
              <div class="image-product d-flex align-items-center">
                <div class="icon">
                  <Icon
                    icon="material-symbols-light:close-rounded"
                    class="d-block fw-normal"
                    width="1rem"
                    @click="removeItem(item)"
                  />
                </div>
                <img
                  :src="item?.image"
                  alt=""
                  class="img-fluid mx-3"
                  width="110px"
                />
                <p class="info m-0">
                  {{ item?.title }}
                </p>
              </div>
            </td>
            <td class="price text-center align-middle py-5">
              ${{ (item?.price * item?.quantity).toFixed(2) }}
            </td>
            <td class="align-middle text-center py-5">
              <div
                class="counter d-flex align-items-center px-3 mb-2 mb-sm-0 justify-content-center"
              >
                <button
                  class="minus d-block me-4 border-0 bg-transparent"
                  @click="
                    item?.quantity > 0 ? item.quantity-- : item?.quantity;
                    adjustTotal();
                  "
                  :disabled="item?.quantity <= 1"
                >
                  -
                </button>
                <p class="num mb-0">{{ item?.quantity }}</p>
                <button
                  class="minus d-block ms-4 border-0 bg-transparent"
                  @click="
                    item.quantity++;
                    adjustTotal();
                  "
                >
                  +
                </button>
              </div>
            </td>
            <td class="text-center align-middle py-5">${{ item?.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="promo-code-total d-flex row p-3 mb-5 justify-content-between"
      v-if="productsCart.length"
    >
      <div class="promo-code col-lg-6">
        <SearchInput
          place-holder="Voucher code"
          text-btn="Redeem"
          promo-code="code"
        />
      </div>

      <div class="order-summary p-3 w-25 col-lg-6 mt-0 mt-3">
        <div class="summary mb-3">
          <div
            class="subtotal d-flex align-items-center justify-content-between mb-4"
          >
            <p class="mb-0">Subtotal</p>
            <span>{{ total?.toFixed(2) }}</span>
          </div>
          <div
            class="subtotal d-flex align-items-center justify-content-between mb-4"
          >
            <p class="mb-0">Shipping fee</p>
            <span>$20</span>
          </div>
          <div
            class="subtotal d-flex align-items-center justify-content-between mb-4"
          >
            <p class="mb-0">Coupon</p>
            <span>No</span>
          </div>
        </div>

        <div
          class="total d-flex align-items-center justify-content-between my-4"
        >
          <p class="h3">TOTAL</p>
          <span class="h3">{{ total?.toFixed(2) }}</span>
        </div>

        <div class="checkout-btn text-center">
          <button class="w-100 border-0 p-3 text-white">Check out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import router from "@/router";
import SearchInput from "../ui/SearchInput";

import { Icon } from "@iconify/vue";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Icon,
    SearchInput,
  },

  setup() {
    const store = useStore();
    const total = ref();

    const productsCart = computed(() => store.state.cartProducts);

    function adjustTotal() {
      total.value = productsCart.value.reduce((acc, item) => {
        return (acc += item.price * item.quantity);
      }, 0);
    }

    onMounted(() => {
      if (productsCart.value.length) {
        adjustTotal();
      }
    });
    function removeItem(item) {
      store.commit("removeItem", item);
    }
    return { productsCart, total, adjustTotal, removeItem };
  },
};
</script>

//
<style lang="scss" scoped>
@media (max-width: 991px) {
  .info {
    min-width: 180px;
  }
  .order-summary {
    width: 100% !important;
  }
}

.icon {
  background-color: rgba($color_border_nav_footer, 0.1);
  border-radius: 50%;
  padding: 3px;
  transition: 0.3s;
}
.icon:hover {
  background-color: rgb(255 104 117 / 12%);
  border-radius: 50%;
  padding: 3px;
  color: red;
}

.price {
  @media (min-width: 991px) {
    width: 15% !important;
  }
  padding-left: 200px !important;
}

.order-summary {
  .summary {
    border-bottom: 2px solid $background_second_card_border;
  }
  .checkout-btn {
    button {
      background-color: $second_color !important;
      border-radius: 5px;
    }
  }
}

.counter {
  background-color: $background_second_card_border;
  border-radius: 5px;
  font-size: 20px;
  user-select: none;
  padding: 0.7rem 0;
  transform: translateX(10px);
  margin-bottom: 0 !important;
  padding: 0.4rem !important;
  justify-content: space-between !important;
  button {
    margin: 2px !important;
  }
}
@media (max-width: 460px) {
  .counter {
    width: 100%;
  }
}

@media (min-width: 1200px) {
  .counter {
    transform: translateX(25px);
  }
}

@media (min-width: 991px) and (max-width: 1199px) {
  .counter {
    transform: translateX(15px);
  }
}

button {
  transition: 0.3s;
  cursor: pointer;
}
button:hover {
  color: $second_color;
}
.button-shopping {
  cursor: pointer;
  background-color: #f6f7f8;
  transition: 0.3s;
  &:hover {
    background-color: #d1d2d3;
  }
}
</style>
