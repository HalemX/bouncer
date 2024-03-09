<template>
  <div class="categories d-none d-lg-block">
    <div
      class="d-flex justify-content-center flex-column align-items-start align-items-lg-center"
    >
      <h1 class="heading-categories mb-4">Bouncer</h1>

      <ul
        class="links-categories list-unstyled d-flex flex-column flex-lg-row mb-4 text-start text-lg-center"
      >
        <li v-for="data in dataLinks" :key="data">
          <router-link
            class="link link-categories text-dark mb-2 d-block mx-lg-4"
            :to="{ name: 'products' }"
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
    const dataLinks = [
      "HOME",
      "STORE",
      "IPHONE",
      "IPAD",
      "MACBOOK",
      "ACCESORIES",
    ];

    return { dataLinks };
  },
};
</script>

<style lang="scss" scoped>
.heading-categories {
  color: $color_heading_categories;
}
</style>
