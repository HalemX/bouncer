<template>
  <div class="container">
    <!-- Responsive Navbar  -->
    <transition name="show-animate">
      <div
        class="responsive-navbar-container d-none position-fixed p-3 justify-content-between"
        :class="{ show: toggleBurgerIconDate }"
        :key="toggleBurgerIconDate"
      >
        <CategoriesNavbar :class="{ show: toggleBurgerIconDate }" />
        <LinksNavbar :class="{ show: toggleBurgerIconDate }" />
      </div>
    </transition>

    <!-- Backdrop Element -->
    <teleport to="body">
      <div
        v-if="toggleBurgerIconDate"
        @click="toggleBurgerIcon"
        class="backdrop d-block d-lg-none"
      ></div>
    </teleport>

    <!-- Normal Navbar -->
    <nav
      class="navbar-container mb-2 mb-lg-4 d-flex justify-content-between align-items-center py-3"
    >
      <div class="navbar-select-button d-flex">
        <select-button firstOption="EN" secondOption="AR"></select-button>
        <select-button firstOption="USD" secondOption="EG"></select-button>
      </div>

      <SearchCmpo top="top" />

      <div class="d-lg-none" @click="toggleBurgerIcon">
        <Icon icon="mdi:menu" width="2rem"></Icon>
      </div>

      <LinksNavbar />
    </nav>

    <CategoriesNavbar />

    <SearchCmpo bottom="bottom" />
  </div>
</template>

<script>
import LinksNavbar from "../navbar/LinksNavbar.vue";
import CategoriesNavbar from "../navbar/CategoriesNavbar.vue";
import SearchCmpo from "../navbar/SearchCmpo.vue";

import SelectButton from "../ui/SelectButton.vue";

import { ref } from "vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    SelectButton,
    LinksNavbar,
    CategoriesNavbar,
    Icon,
    SearchCmpo,
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
.responsive-navbar-container {
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
