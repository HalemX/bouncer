<template>
  <div class="container-breadcrumb p-2 mt-5 mb-3">
    <div
      class="flex-column flex-sm-row d-flex align-items-center justify-content-center pt-3"
    >
      <ul class="list-unstyled d-flex">
        <li class="me-2">
          <router-link :to="{ name: 'home' }" class="link text-dark"
            >Home >
          </router-link>
        </li>
        <li class="me-1" v-for="item in data" :key="item">
          <router-link
            v-if="data.length - 1 !== data.indexOf(item)"
            :to="item.link"
            class="text-dark link me-1"
            >{{ item.title }} >
          </router-link>
          <span v-else>{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["breadcrumbData"],

  setup(props) {
    const data = ref(props.breadcrumbData);

    return { data };
  },
};
</script>

<style lang="scss" scoped>
.container-breadcrumb {
  background-color: $background_second_card_border;
}
</style>
