<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
    class="all-cart-data"
  >
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
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.features-container {
  margin-bottom: 80px;
}
</style>
