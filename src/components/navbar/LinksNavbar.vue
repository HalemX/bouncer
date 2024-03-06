<template>
  <div class="navbar-container-links d-none d-lg-block">
    <ul
      class="links-navbar list-unstyled mt-0 mb-0 d-flex flex-column flex-lg-row"
    >
      <li class="d-flex align-items-center me-md-5 mb-2 mb-lg-0">
        <Icon
          icon="material-symbols:person-2-outline-rounded"
          width="2rem"
          class="error-handle-icon"
        ></Icon>

        <a class="link text-dark ms-2" aria-current="page" href="#"
          >My Profile</a
        >
      </li>

      <li class="d-flex align-items-center me-md-5 mb-2 mb-lg-0">
        <Icon icon="solar:shop-minimalistic-bold" width="1.5rem"></Icon>

        <div class="counter px-1 ms-2 d-flex align-items-center">
          <span>0</span>
        </div>

        <a class="link text-dark" href="#">Items</a>
      </li>

      <li
        class="li-search d-flex flex-row-reverse flex-lg-row me-auto mb-2 mb-lg-0"
      >
        <transition name="search-animate">
          <div
            class="search-container"
            v-if="toggleSearchIconDate"
            :key="toggleSearchIconDate"
          >
            <input
              class="search-input px-2 w-100"
              type="text"
              placeholder="Enter Product Name"
            />
          </div>
        </transition>
        <Icon icon="mdi:search" width="2rem" @click="toggleSearchIcon"></Icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

import { ref } from "vue";

export default {
  components: {
    Icon,
  },

  setup() {
    const toggleBurgerIconDate = ref(false);
    const toggleSearchIconDate = ref(false);

    function toggleBurgerIcon() {
      toggleBurgerIconDate.value = !toggleBurgerIconDate.value;
    }

    function toggleSearchIcon() {
      toggleSearchIconDate.value = !toggleSearchIconDate.value;
    }

    return {
      toggleBurgerIcon,
      toggleBurgerIconDate,
      toggleSearchIcon,
      toggleSearchIconDate,
    };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 650px) {
  .search-container {
    width: 100px !important;
  }
  .search-input {
    &::placeholder {
      font-size: 0;
    }
  }
}

.search-input {
  @include border(2px, solid, $color_border_nav_footer, 0.3, 10px);
  &:focus {
    outline: none;
  }
}

.error-handle-icon {
  margin-left: -2px;
}

.search-animate-enter-active {
  transition: all 0.3s ease-out;
}
.search-animate-leave-active {
  transition: all 0.3s ease-in;
}

.search-animate-enter-from,
.search-animate-leave-to {
  transform: scale(1);
  opacity: 0;
}
</style>
