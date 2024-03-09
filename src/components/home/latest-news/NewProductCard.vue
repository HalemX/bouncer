<template>
  <div class="card-data">
    <div
      class="new-product px-2 d-flex align-items-center flex-column flex-sm-row"
    >
      <div class="image-new-product">
        <img src="@/assets/images/Rectangle1.png" alt="" class="img-fluid" />
      </div>
      <div class="info-new-product text-center text-sm-start ms-3 py-4">
        <span class="d-block mb-2">01 Jan, 2015</span>
        <h5 class="mb-2">Typesetting industry</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-product {
  .info-new-product {
    p {
      font-size: 14px;
    }
    span {
      color: $background_third_card;
    }
  }
  .image-new-product {
    img {
      width: 200px;
    }
  }
}
</style>
