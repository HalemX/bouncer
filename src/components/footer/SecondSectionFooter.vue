<template>
  <div class="second-footer-section container row pb-5 d-none d-sm-flex">
    <div
      class="col-lg-2 col-md-4 col-sm-6 mt-md-3 section"
      v-for="i in 6"
      :key="i"
    >
      <h4 class="mb-md-3 mb-4">Infomation</h4>
      <ul class="list-unstyled">
        <li v-for="i in 4" :key="i" class="links mb-2">
          <a href="#" class="link text-dark">Privacy Policy</a>
        </li>
      </ul>
    </div>
  </div>

  <div
    class="show container row d-block d-sm-none"
    @click="showLink = !showLink"
  >
    <div class="col-lg-2 col-md-4 col-sm-6 mt-md-3 section p-0">
      <div
        class="show-header-links p-3 d-flex align-items-center justify-content-between mb-3"
      >
        <h4 :class="{ active: showLink }" class="controlShow">Infomation</h4>
        <Icon
          :icon="
            !showLink
              ? 'ic:baseline-keyboard-arrow-down'
              : 'ic:twotone-keyboard-arrow-up'
          "
          width="1.5rem"
          class="icon me-2"
          :class="{ active: showLink }"
        ></Icon>
      </div>
      <transition mode="out-in" @before-enter="beforeEnter" @enter="enter">
        <ul class="show-links list-unstyled p-3" v-if="showLink">
          <li v-for="i in 4" :key="i" class="mb-2">
            <a href="#" class="link text-dark">Privacy Policy</a>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import gsap from "gsap";

export default {
  components: {
    Icon,
  },
  setup() {
    const showLink = ref(false);
    const beforeEnter = (el) => {
      el.style.opacity = 0;
    };
    const enter = (el) => {
      gsap.to(el, {
        opacity: 1,
        duration: 1,
        y: 0,
      });
    };

    return { showLink, beforeEnter, enter };
  },
};
</script>

<style scoped lang="scss">
.show {
  .controlShow,
  .icon {
    transition: 0.3s;
  }
  .controlShow:hover,
  .icon:hover {
    color: #c2c8cf;
  }
}
.active {
  color: #c2c8cf;
}

.show-header-links {
  cursor: pointer;
  user-select: none;
}
.show-header-links,
.show-links {
  background-color: #e8e9ea;
  border-radius: $border_rad;
}
</style>
