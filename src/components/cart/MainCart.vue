<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>FRODUCT</th>
            <th class="text-center price">PRICE</th>
            <th class="text-center">QTY</th>
            <th class="text-center text-nowrap">UNIT PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in count" :key="i">
            <td class="py-5">
              <div class="image-product d-flex align-items-center">
                <div class="icon">
                  <Icon
                    icon="material-symbols-light:close-rounded"
                    class="d-block fw-normal"
                    width="1rem"
                    @click="count -= 1"
                  />
                </div>
                <img
                  src="../../assets/images/Rectangle5.png"
                  alt=""
                  class="img-fluid mx-3"
                  width="110px"
                />
                <p class="info m-0">
                  Philips Hue 7W BR30 Connected Downlight Lamp
                </p>
              </div>
            </td>
            <td class="price text-center align-middle py-5">$998</td>
            <td class="align-middle text-center py-5">
              <CounterBtn checkOut="checkout" />
            </td>
            <td class="text-center align-middle py-5">$499</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="promo-code-total d-flex row p-3 mb-5 justify-content-between">
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
            v-for="(item, i) in orderSummaryData.priceType"
            :key="item"
          >
            <p class="mb-0">{{ item }}</p>
            <span>{{ orderSummaryData.price[i] }}</span>
          </div>
        </div>

        <div
          class="total d-flex align-items-center justify-content-between my-4"
        >
          <p class="h3">TOTAL</p>
          <span class="h3">$118</span>
        </div>

        <div class="checkout-btn text-center">
          <button class="w-100 border-0 p-3 text-white">Check out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CounterBtn from "../ui/CounterBtn";
import SearchInput from "../ui/SearchInput";

import { Icon } from "@iconify/vue";
import { ref } from "vue";

export default {
  components: {
    CounterBtn,
    Icon,
    SearchInput,
  },

  setup() {
    const count = ref(2);
    const orderSummaryData = ref({
      priceType: ["Subtotal", "Shipping fee", "Coupon"],
      price: ["$998", "$20", "no"],
    });

    return { count, orderSummaryData };
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
</style>
