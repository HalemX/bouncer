<template>
  <div
    class="main-product overflow-hidden px-3 py-5"
    :class="{ primary: primary, second: second }"
  >
    <div
      class="info-img-product w-100 h-100 container d-flex flex-column flex-md-row align-items-center justify-content-center"
      :class="handleAlign"
    >
      <div class="info-product text-white w-50">
        <h2 class="product-name mb-4 mt-5 text-nowrap">{{ heading }}</h2>

        <p class="w-75">
          {{ paragraph }}
        </p>
        <base-button centerSmallScreen="center" gray-hover="hover">{{
          textButton
        }}</base-button>
      </div>

      <div class="img-product" :class="products">
        <img :src="dynamicImagePath" alt="Product Image" class="img-fluid" />
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
    "primary",
    "second",
    "products",
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

  .info-img-product {
    .product-name {
      font-size: 60px;
    }
    @media ($max_sm) {
      .info-product {
        text-align: center;
        width: 100% !important;
        margin-top: 5rem;
      }
    }
    @media ($max_md) {
      .product-name {
        font-size: 30px;
      }
      p {
        width: 100% !important;
      }
    }
  }
}
.primary {
  background-image: linear-gradient(
    to right,
    $second_color_background_home,
    $primary_color
  );
  @media ($min_sm) {
    img {
      transform: translateY(65px);
    }
  }

  .img-product {
    transform: translateX(-50px);
  }
}

.second {
  background-color: $second_color;
  margin-bottom: 3rem;
  img {
    transform: translateY(55px);
  }
  @media ($min_sm) {
    img {
      transform: translateY(80px);
    }
  }
}
.handleAlign {
  align-items: start !important;
}

.products {
  @media ($max_sm) {
    .info-product {
      h2 {
        font-size: 30px !important;
      }
    }
  }
  img {
    width: 380px !important;
    transform: translateY(15px) !important;
  }
  @media ($max_sm) {
    width: 100%;
    max-height: 100%;
    text-align: center;
    img {
      width: 300px !important;
      transform: translateY(0px) !important;
    }
  }
}
</style>
