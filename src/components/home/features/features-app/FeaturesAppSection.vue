<template>
  <div
    class="features-app-container container mb-5"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <div class="features-app row g-3">
      <div class="col-lg-4 col-sm-6 d-flex auto" v-for="i in 3" :key="i">
        <div class="card-data">
          <div class="px-2 text-center">
            <div class="image-feature mb-4">
              <img
                src="@/assets/images/shipping.png"
                alt="feature photo"
                class="image-fluid"
              />
            </div>
            <div class="info-feature">
              <h3 class="mb-4">FREE SHIPPING</h3>
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
  </div>
</template>

<style scoped>
.auto {
  flex: auto;
}
</style>
