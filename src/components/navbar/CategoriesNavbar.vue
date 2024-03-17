<template>
  <div class="categories d-none d-lg-block">
    <div
      class="d-flex justify-content-center flex-column align-items-start align-items-lg-center"
    >
      <h1 class="heading-categories mb-4">Bouncer</h1>

      <ul
        class="links-categories list-unstyled d-flex flex-column flex-lg-row mb-4 text-start text-lg-center"
      >
        <li>
          <router-link
            class="link link-categories text-dark mb-2 d-block mx-lg-4"
            to="/"
            >HOME</router-link
          >
        </li>
        <li>
          <router-link
            class="link link-categories text-dark mb-2 d-block mx-lg-4"
            to="/products"
            >STORE</router-link
          >
        </li>

        <li v-for="(category, i) in categories" :key="i">
          <router-link
            class="link link-categories text-dark mb-2 d-block mx-lg-4"
            :to="`/products/cat/${category}`"
            >{{ category.toUpperCase() }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const categories = ref([]);

    // Fetch All Categories
    onMounted(async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const responseData = await response.json();
      categories.value = responseData;
    });

    return { categories };
  },
};
</script>

<style lang="scss" scoped>
.heading-categories {
  color: $color_heading_categories;
}
.router-link-exact-active {
  color: #2e90e5 !important;
}
</style>
