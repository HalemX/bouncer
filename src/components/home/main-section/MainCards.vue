<template>
  <div class="container-cards container">
    <div class="all-cards row">
      <div
        class="first-card card-height col-lg-4 col-md-6 overflow-hidden position-relative"
      >
        <div class="info-card text-white p-3">
          <h3 class="mb-4">iPhone 6</h3>
          <p class="w-75">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
          </p>
          <span class="h4 text-white-50 fw-normal">$399</span>
        </div>
        <div class="image-card position-absolute">
          <img
            src="../../../assets/images/pic.png"
            alt="card photo"
            class="img-fluid"
          />
        </div>
      </div>

      <div
        class="second-card card-height col-lg-4 col-md-6 position-relative overflow-hidden"
      >
        <div class="image-card position-absolute">
          <img
            src="../../../assets/images/Oculus-Rift-profile_grande.png"
            alt="card photo"
            class="img-fluid"
          />
        </div>
        <div
          class="info-card w-100 d-flex flex-column flex-md-row align-items-start px-4 justify-content-md-between position-absolute"
        >
          <h3>Oculus Rift</h3>
          <span class="h4 fw-normal">$349</span>
        </div>
      </div>

      <div
        class="third-card card-height col-lg-4 position-relative overflow-hidden"
      >
        <div class="info-card p-3">
          <h3 class="mb-4 mt-3">GoPro Hero 6</h3>
          <p class="w-50 mb-4">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
          </p>
          <span class="h4 fw-normal">$299</span>
        </div>
        <div class="image-card position-absolute">
          <img
            src="../../../assets/images/50051823_540375.png"
            alt="card photo"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media ($max_sm) {
  .container-cards {
    transform: translateY(-120px) !important;
  }
}
.container-cards {
  transform: translateY(-150px);
  position: relative;
  z-index: 1000;
  .card-height {
    height: 280px;
  }
  .first-card {
    background-color: $background_first_card;
    .image-card {
      @include handle-position(0, -85px);
      img {
        width: 345px;
      }
    }
  }
  .second-card {
    background-color: $background_second_card_border;

    .image-card {
      @include handle-position(-10, 40px);
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
    background-color: $background_third_card;
    .image-card {
      @include handle-position(75px, -30px);
    }
  }
}
</style>
