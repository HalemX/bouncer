<template>
  <div class="container-header-products p-2 mt-3 mb-5">
    <div
      class="header-products container flex-column flex-sm-row d-flex align-items-center justify-content-center pt-3"
    >
      <ul class="list-unstyled d-flex">
        <li>
          <router-link :to="{ name: 'home' }" class="link me-3 text-dark"
            >Home</router-link
          >
          <span>/</span>
        </li>
        <li>
          <router-link to="/" class="link me-3 ms-2 text-dark"
            >Accesories</router-link
          >
          <span>/</span>
        </li>
      </ul>
      <p class="ms-2">Beat Solo2 on Ear Headphones - Black</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-header-products {
  background-color: $background_second_card_border;
}
</style>
