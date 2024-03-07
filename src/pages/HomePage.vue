<template>
  <div class="home-page overflow-hidden">
    <main-section></main-section>
    <best-seller></best-seller>
    <main-product
      :heading="dataObj.heading"
      :paragraph="dataObj.paragraph"
      :textButton="dataObj.textButton"
      :image-src="dataObj.imageSrc"
      second="second"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
    ></main-product>
    <HoldFeatureCard />
    <latest-news></latest-news>
    <FeaturesProduct />
  </div>
</template>

<script>
import MainSection from "../components/home/main-section/MainSection";
import BestSeller from "../components/home/best-seller/BestSeller";
import HoldFeatureCard from "@/components/home/features/features-app/HoldFeatureCard.vue";
import LatestNews from "../components/home/latest-news/LatestNews";
import FeaturesProduct from "../components/home/features/features-product/FeaturesProduct";

import MainProduct from "../components/product-item/MainProduct";

export default {
  components: {
    MainSection,
    BestSeller,
    HoldFeatureCard,
    LatestNews,
    FeaturesProduct,
    MainProduct,
  },

  setup() {
    const dataObj = {
      heading: "iPhone 6 Plus",
      paragraph: "Performance and design. Taken right to the edge.",
      textButton: "SHOP NOW",
      imageSrc: "pic.png",
    };

    return { dataObj };
  },
};
</script>

<style scoped lang="scss"></style>
