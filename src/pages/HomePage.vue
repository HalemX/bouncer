<template>
  <div class="container-home-page overflow-hidden">
    <LandingSection />
    <BestsellerSection />
    <main-product
      :heading="dataObj.heading"
      :paragraph="dataObj.paragraph"
      :textButton="dataObj.textButton"
      :image-src="dataObj.imageSrc"
      second="second"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
    />
    <FeaturesAppSection />
    <latestNewsSection />
    <FeaturesProductSection />
  </div>
</template>

<script>
import LandingSection from "@/components/home/landing/LandingSection.vue";
import BestsellerSection from "@/components/home/bestseller/BestsellerSection";
import FeaturesAppSection from "@/components/home/features/features-app/FeaturesAppSection.vue";
import LatestNewsSection from "@/components/home/latest-news/LatestNewsSection.vue";
import FeaturesProductSection from "@/components/home/features/features-product/FeaturesProductSection";

import MainProduct from "../components/product-item/MainProduct";

export default {
  components: {
    LandingSection,
    BestsellerSection,
    FeaturesAppSection,
    LatestNewsSection,
    FeaturesProductSection,
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
