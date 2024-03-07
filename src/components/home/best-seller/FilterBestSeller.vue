<template>
  <div class="filter mt-3 mb-3">
    <div
      class="filter-container d-flex justify-content-center flex-column overflow-auto align-items-center"
    >
      <h2 class="heading-filter mb-0 mb-lg-3">BEST SELLER</h2>

      <ul class="links-filter list-unstyled d-flex mt-4 text-center">
        <li v-for="data in dataLinks" :key="data">
          <router-link
            class="link link-filter text-dark mb-2 d-block mx-4"
            to="/"
            >{{ data }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const dataLinks = ["All", "MAC", "IPHONE", "IPAD", "IPOD", "ACCESORIES"];

    return { dataLinks };
  },
};
</script>

<style scoped>
.filter-container::-webkit-scrollbar {
  display: none;
}
</style>
