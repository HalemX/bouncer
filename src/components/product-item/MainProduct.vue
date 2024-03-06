<template>
  <div
    class="main-product overflow-hidden"
    :class="{ primary: primary, second: second }"
  >
    <div
      class="info-img-product w-100 h-100 container d-flex flex-column flex-md-row align-items-center justify-content-center"
      :class="handleAlign"
    >
      <div class="info-product text-white w-50">
        <h2 class="mb-4 mt-5">{{ heading }}</h2>

        <p class="w-75">
          {{ paragraph }}
        </p>
        <base-button centerSmallScreen="center" gray-hover="hover">{{
          textButton
        }}</base-button>
      </div>

      <div class="img-position">
        <img
          :src="dynamicImagePath"
          alt="Product Image"
          class="img-fluid"
          :class="width"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton";

export default {
  components: {
    BaseButton,
  },
  props: [
    "heading",
    "paragraph",
    "textButton",
    "imageSrc",
    "imgPosition",
    "primary",
    "second",
    "width",
    "handleAlign",
  ],

  setup(props) {
    const dynamicImagePath = require(`@/assets/images/${props.imageSrc}`);
    return {
      dynamicImagePath,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-product {
  height: 610px;
}
.info-img-product {
  @media ($max_sm) {
    .info-product {
      text-align: center;
      width: 100% !important;
      margin-top: 5rem;
    }
  }
  @media ($max_md) {
    p {
      width: 100% !important;
    }
  }
}
.primary {
  background-image: linear-gradient(
    to top right,
    $primary_color,
    $second_color_background_home
  );
  @media ($min_sm) {
    img {
      transform: translateY(65px);
    }
  }

  .img-position {
    transform: translateX(-50px);
  }
}
.second {
  background-color: $second_color;
  margin-bottom: 3rem;
  img {
    transform: translateY(20px);
  }
  @media ($min_sm) {
    img {
      transform: translateY(80px);
    }
  }
}
.width {
  width: 380px !important;
  transform: translateY(15px) !important;
  @media (max-width: 767px) {
    width: 250px !important;
    transform: translate(120px, -20px) !important;
  }
  @media (max-width: 437px) {
    width: 250px !important;
    transform: translate(50px, -20px) !important;
  }
}
.handleAlign {
  align-items: start !important;
}
</style>
