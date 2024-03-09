<template>
  <div :class="{ firstCard, secondCard, thirdCard, sidebar }">
    <div
      class="info-card p-3"
      :class="{
        'w-100 d-flex flex-row align-items-start px-4 justify-content-between position-absolute':
          secondCard,
      }"
    >
      <h3 class="name mb-4">{{ name }}</h3>
      <slot></slot>
      <span class="price h4 fw-normal">{{ price }}</span>
    </div>
    <div class="image-card position-absolute">
      <img :src="imgSrc" alt="card photo" class="img-fluid" />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "price",
    "imgName",
    "firstCard",
    "secondCard",
    "thirdCard",
    "sidebar",
  ],
  setup(props) {
    const imgSrc = require(`@/assets/images/${props.imgName}.png`);

    return { imgSrc };
  },
};
</script>

<style lang="scss" scoped>
.first-card {
  .image-card {
    @include handle-position(0, -85px);
    img {
      width: 345px;
    }
  }
}

.second-card {
  .image-card {
    @include handle-position(0, 45px);
    width: 290px;
    img {
      width: 315px;
    }
  }
  .info-card {
    top: 210px;
    left: 0px;
  }
}

.third-card {
  span {
    color: #707070;
  }
  .image-card {
    @include handle-position(75px, -30px);
  }
}

.sidebar {
  .info-card {
    span {
      color: #707070;
    }
  }
  .image-card {
    bottom: 20px;
  }
}
</style>
