<template>
  <div class="container overview-hidden">
    <transition name="show-animate">
      <div
        class="show-container d-none position-fixed p-3 justify-content-between"
        :class="{ show: toggleBurgerIconDate }"
        :key="toggleBurgerIconDate"
      >
        <categories-navbar
          :class="{ show: toggleBurgerIconDate }"
        ></categories-navbar>
        <links-navbar :class="{ show: toggleBurgerIconDate }"></links-navbar>
      </div>
    </transition>

    <teleport to="body">
      <div
        v-if="toggleBurgerIconDate"
        @click="toggleBurgerIcon"
        class="backdrop d-block d-lg-none"
      ></div>
    </teleport>

    <nav
      class="navbar-container mb-4 d-flex justify-content-between align-items-center py-3"
    >
      <div class="navbar-select-button d-flex">
        <select-button firstOption="EN" secondOption="AR"></select-button>
        <select-button firstOption="USD" secondOption="EG"></select-button>
      </div>

      <li
        class="li-search d-flex flex-row-reverse flex-lg-row ms-auto mb-2 mb-lg-0 d-flex d-lg-none"
      >
        <Icon icon="mdi:search" width="2rem" />
        <div class="search-container">
          <input
            class="search-input px-2 py-1 w-100"
            type="text"
            placeholder="Enter Product Name"
          />
        </div>
      </li>

      <div class="d-lg-none ms-auto" @click="toggleBurgerIcon">
        <Icon icon="mdi:menu" width="2rem"></Icon>
      </div>

      <links-navbar></links-navbar>
    </nav>
    <categories-navbar></categories-navbar>
  </div>
</template>

<script>
import SelectButton from "../ui/SelectButton.vue";
import LinksNavbar from "./LinksNavbar.vue";
import CategoriesNavbar from "./CategoriesNavbar";

import { ref } from "vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    SelectButton,
    LinksNavbar,
    CategoriesNavbar,
    Icon,
  },
  setup() {
    const toggleBurgerIconDate = ref(false);

    function toggleBurgerIcon() {
      toggleBurgerIconDate.value = !toggleBurgerIconDate.value;
    }

    return { toggleBurgerIcon, toggleBurgerIconDate };
  },
};
</script>

<style lang="scss" scoped>
.show-container {
  right: 0;
  background-color: $color_background_burger;
  height: 100%;
  width: 60%;
  border-top-left-radius: $border_rad;
  border-bottom-left-radius: $border_rad;
  z-index: 100;
}

@media (max-width: 991px) {
  .show {
    display: flex !important;
    flex-direction: column;
  }
}

.backdrop {
  @include overlay(black, 0.3);
}
</style>
