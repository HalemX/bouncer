<template>
  <div>
    <div class="main-section">
      <SliderMainProduct />

      <div class="container-cards container">
        <div class="all-cards row">
          <div
            class="first-card card-height col-lg-4 col-md-6 overflow-hidden position-relative text-white"
          >
            <LandingCard
              first-card="firstCrd"
              :name="firstCard.name"
              :price="firstCard.price"
              :img-name="firstCard.img"
            >
              <p class="w-75">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
              </p></LandingCard
            >
          </div>

          <div
            class="second-card card-height col-lg-4 col-md-6 position-relative overflow-hidden"
          >
            <LandingCard
              second-card="secondCard"
              :name="secondCard.name"
              :price="secondCard.price"
              :img-name="secondCard.img"
            />
          </div>

          <div
            class="third-card card-height col-lg-4 position-relative overflow-hidden"
          >
            <LandingCard
              first-card="firstCrd"
              :name="thirdCard.name"
              :price="thirdCard.price"
              :img-name="thirdCard.img"
            >
              <p class="w-50 mb-4">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
              </p></LandingCard
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderMainProduct from "@/components/product-item/SliderMainProduct.vue";
import LandingCard from "./LandingCard";

export default {
  components: {
    SliderMainProduct,
    LandingCard,
  },
  setup() {
    const firstCard = {
      name: "iPhone 6",
      price: "$399",
      img: "pic",
    };
    const secondCard = {
      name: "Oculus Rift",
      price: "$349",
      img: "Oculus-Rift-profile_grande",
    };
    const thirdCard = {
      name: "GoPro Hero 6",
      price: "$299",
      img: "50051823_540375",
    };

    return { firstCard, secondCard, thirdCard };
  },
};
</script>

<style scoped lang="scss">
.main-section {
  .container-cards {
    transform: translateY(-130px);
    position: relative;
    z-index: 1000;

    .card-height {
      height: 280px;
    }

    .first-card {
      background-color: $background_first_card;
    }

    .second-card {
      background-color: $background_second_card_border;
    }

    .third-card {
      background-color: $background_third_card;
    }
    @media ($max_sm) {
      transform: translateY(-120px) !important;
    }
  }
}
</style>
