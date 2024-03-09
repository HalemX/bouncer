<template>
  <div class="allow-sticky">
    <div class="container-sidebar py-5 position-sticky mb-3">
      <div class="best-seller">
        <h5 class="header-sidebar mb-3 ps-3">BEST SELLER</h5>

        <SliderProductItem sidebar="sideBar" :count="4" />
      </div>

      <div
        class="side-bar card-height overflow-hidden position-relative mt-5 ms-3"
      >
        <LandingCard
          sidebar="sidebar"
          :name="landingCardData.name"
          :price="landingCardData.price"
          :img-name="landingCardData.img"
        >
          <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
        </LandingCard>
      </div>
    </div>
  </div>
</template>

<script>
import SliderProductItem from "../product-item/SliderProductItem.vue";
import LandingCard from "../home/landing/LandingCard.vue";

export default {
  components: {
    SliderProductItem,
    LandingCard,
  },
  setup() {
    const landingCardData = {
      name: "GoPro Hero 6",
      price: "$299",
      img: "50051823_540375",
    };

    return { landingCardData };
  },
};
</script>

<style scoped lang="scss">
.container-sidebar {
  top: 0;
  .header-sidebar {
    color: $background_third_card;
  }
  .side-bar {
    height: 480px;
    background-color: $background_third_card;
  }
}
</style>
