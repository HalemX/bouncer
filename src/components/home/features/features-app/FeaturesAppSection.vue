<template>
  <div
    class="features-app-container container mb-5"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <div class="features-app row g-3">
      <div class="feature col-lg-4 col-sm-6 d-flex auto">
        <div class="card-data px-2 text-center text-sm-start text-lg-center">
          <div class="image-feature mb-4">
            <img
              src="@/assets/images/shipping.png"
              alt="feature photo"
              class="image-fluid special mt-auto"
            />
          </div>
          <div class="info-feature">
            <h3 class="mb-2">FREE SHIPPING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor minim veniam, quis nostrud reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>
      </div>
      <div class="feature col-lg-4 col-sm-6 d-flex auto">
        <div class="card-data px-2 text-center text-sm-start text-lg-center">
          <div class="image-feature mb-4">
            <img
              src="@/assets/images/Group 12.png"
              alt="feature photo"
              class="image-fluid"
            />
          </div>
          <div class="info-feature">
            <h3 class="mb-2">100% REFUND</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor minim veniam, quis nostrud reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>
      </div>
      <div class="feature col-lg-4 col-sm-6 d-flex auto">
        <div class="card-data px-2 text-center text-sm-start text-lg-center">
          <div class="image-feature mb-4">
            <img
              src="@/assets/images/support.png"
              alt="feature photo"
              class="image-fluid"
            />
          </div>
          <div class="info-feature">
            <h3 class="mb-2">SUPPORT 24/7</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor minim veniam, quis nostrud reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
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
.features-app-container {
  margin-bottom: 100px !important;
  .image-feature {
    height: 50px;
    img {
      width: 50px;
    }
  }
  .info-feature {
    p {
      color: #22262a;
      line-height: 30px;
      font-family: Proxima Nova Lt;
    }
    @media (min-width: 991px) {
      max-width: 360px;
    }
  }
}
.special {
  width: 70px !important;
  margin-top: 10px !important;
}
</style>
