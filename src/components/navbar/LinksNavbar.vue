<template>
  <div class="links-navbar-container d-none d-lg-block">
    <ul
      class="links-navbar list-unstyled mt-0 mb-0 d-flex flex-column flex-lg-row"
    >
      <li class="d-flex align-items-center me-md-5 mb-2 mb-lg-0">
        <Icon
          icon="material-symbols:person-2-outline-rounded"
          width="2rem"
        ></Icon>

        <a class="link text-dark ms-2" aria-current="page" href="#"
          >My Profile</a
        >
      </li>

      <router-link
        to="/cart"
        class="custom-margin d-flex align-items-center me-md-3 mb-2 mb-lg-0 text-dark"
      >
        <li
          class="link d-flex align-items-center me-md-5 mb-2 mb-lg-0 text-dark"
        >
          <Icon icon="solar:shop-minimalistic-bold" width="1.5rem"></Icon>
          <div class="counter px-1 d-flex align-items-center ms-2">
            <span class="d-block pe-1">{{ update.length }}</span>
            <span>Items</span>
          </div>
        </li>
      </router-link>

      <li
        class="li-search d-flex flex-row-reverse flex-lg-row me-auto mb-2 mb-lg-0 d-none d-lg-flex"
      >
        <transition name="search-animate">
          <div
            class="search-container"
            v-if="toggleSearchIconDate"
            :key="toggleSearchIconDate"
          >
            <input
              class="search-input px-2 py-1 w-100"
              type="text"
              placeholder="enter product name"
            />
          </div>
        </transition>
        <Icon
          :icon="
            !toggleSearchIconDate
              ? 'mdi:search'
              : 'material-symbols:close-small-outline'
          "
          width="2rem"
          @click="toggleSearchIcon"
        ></Icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Icon,
  },

  setup() {
    const toggleBurgerIconDate = ref(false);
    const toggleSearchIconDate = ref(false);
    const store = useStore();

    function toggleBurgerIcon() {
      toggleBurgerIconDate.value = !toggleBurgerIconDate.value;
    }

    function toggleSearchIcon() {
      toggleSearchIconDate.value = !toggleSearchIconDate.value;
    }

    const update = computed(() => store.state.cartProducts);
    watch(update, (old, newValue) => {
      console.log(old, newValue);
    });

    return {
      toggleBurgerIcon,
      toggleBurgerIconDate,
      toggleSearchIcon,
      toggleSearchIconDate,
      update,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  @include border(1px, solid, #d5d5d54d, 0.3, 3px);

  &:focus {
    outline: none;
  }
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

.custom-margin {
  margin-left: 4px;
}
</style>
