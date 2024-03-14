<template>
  <div
    class="latest-news-container container text-center mb-5"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <div class="heading mb-4">
      <h2>LATEST NEWS</h2>
    </div>

    <div class="all-cards row g-3">
      <div
        class="container-card col-lg-4 col-sm-6 auto"
        v-for="i in 3"
        :key="i"
      >
        <div class="card-data">
          <div
            class="new-product px-2 d-flex align-items-center flex-column flex-sm-row"
          >
            <div class="image-new-product">
              <img
                src="@/assets/images/Rectangle1.png"
                alt=""
                class="img-fluid"
              />
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auto {
  flex: auto;
}

.image-new-product {
  img {
    width: 250px;
    @media (max-width: 576px) {
      width: 150px !important;
    }
  }
}

.container-card:last-child {
  .image-new-product {
    img {
      width: 100px !important;
      @media (max-width: 576px) {
        width: 150px !important;
      }
    }
  }
}
.new-product {
  .info-new-product {
    p {
      font-size: 14px;
    }
    span {
      color: #c1c8ce;
    }
  }
}
</style>
