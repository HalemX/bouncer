<template>
  <ul
    class="list-unstyled w-75 mx-auto d-flex justify-content-center w-100 mb-0"
    :class="{ 'd-sm-none mb-2': bottom, 'd-none d-sm-flex d-lg-none': top }"
  >
    <li class="li-search d-flex w-75 text-center">
      <div class="search-container w-100 me-2">
        <input
          class="search-input px-2 py-1 w-100"
          type="text"
          placeholder="Enter Product Name"
        />
      </div>
      <Icon icon="mdi:search" width="2rem"></Icon>
    </li>
  </ul>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  props: ["bottom", "top"],
};
</script>

<style scoped lang="scss">
.search-input {
  border: 1px solid rgba(#707070, 0.3);
  border-radius: 3px;
  &:focus {
    outline: none;
  }
}

@media (max-width: 450px) {
  .li-search {
    width: 100% !important;
  }
}
</style>
