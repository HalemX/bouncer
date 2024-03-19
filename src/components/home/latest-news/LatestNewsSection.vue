<template>
  <div
    class="latest-news-container container text-center"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <div class="heading mb-5">
      <h2>LATEST NEWS</h2>
    </div>

    <div class="all-cards row g-3">
      <div class="container-card col-lg-4 col-sm-6 auto">
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
            <div class="info-new-product text-center text-sm-start ms-3">
              <span class="d-block mb-2">01 Jan, 2015</span>
              <h5 class="mb-2">Typesetting industry</h5>
              <p>Lorem Ipsum is simply dummy text.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-card col-lg-4 col-sm-6 auto">
        <div class="card-data">
          <div
            class="new-product px-2 d-flex align-items-center flex-column flex-sm-row"
          >
            <div class="image-new-product">
              <img
                src="@/assets/images/Rectangle 2 copy 25.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="info-new-product text-center text-sm-start ms-3">
              <span class="d-block mb-2">01 Jan, 2015</span>
              <h5 class="mb-2">Typesetting industry</h5>
              <p>Lorem Ipsum is simply dummy text.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-card col-lg-4 col-sm-6 auto">
        <div class="card-data">
          <div
            class="new-product px-2 d-flex align-items-center flex-column flex-sm-row"
          >
            <div class="image-new-product">
              <img
                src="@/assets/images/Rectangle 1 copy 25.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="info-new-product text-center text-sm-start ms-3">
              <span class="d-block mb-2">01 Jan, 2015</span>
              <h5 class="mb-2">Typesetting industry</h5>
              <p>Lorem Ipsum is simply dummy text.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.latest-news-container {
  margin-bottom: 100px !important;
}

.auto {
  flex: auto;
}

.image-new-product {
  img {
    width: 150px;
    @media (max-width: 576px) {
      width: 150px !important;
    }
  }
}

.container-card:last-child {
  .image-new-product {
    img {
      width: 150px !important;
      @media (min-width: 576px) {
        width: 130px !important;
      }
    }
  }
}
.new-product {
  .info-new-product {
    p {
      color: #22262a;
      line-height: 30px;
      font-family: Proxima Nova Lt;
    }
    span {
      color: #c1c8ce;
    }
  }
}
</style>
