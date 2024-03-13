<template>
  <div class="container-info p-4 my-5 position-relative d-none d-sm-block">
    <ul class="tabs-info list-unstyled d-flex">
      <li
        class="header-tap me-5 pb-3 text-nowrap"
        @click="activeTab = i + 1"
        :class="{ active: activeTab == i + 1 }"
        v-for="(item, i) in headerTap"
        :key="i"
      >
        {{ item }}
        <span class="d-inline-block ps-2 counter" v-if="i == 1">{{
          singleProduct?.rating?.rate
        }}</span>
      </li>
    </ul>

    <transition mode="out-in" @before-enter="beforeEnter" @enter="enter">
      <div class="all-info" :key="activeTab">
        <div class="info">
          <p class="text-dark">
            {{ singleProduct?.description }}
          </p>
        </div>
      </div>
    </transition>
  </div>

  <div
    class="container-info p-3 mt-3 d-block d-sm-none"
    v-for="(item, i) in headerTap"
    :key="i"
  >
    <ul
      class="tabs-info list-unstyled d-flex align-items-center justify-content-start mb-0"
    >
      <div
        class="header-tap-icon d-flex align-items-center justify-content-between w-100"
      >
        <li
          class="header-tap"
          :class="{ active: activeTab == i + 1 }"
          @click="activeTab !== i + 1 ? (activeTab = i + 1) : (activeTab = 0)"
        >
          {{ item }}
          <span class="d-inline-block ps-2 counter" v-if="i + 1 === 2">0</span>
        </li>
        <Icon
          :icon="
            activeTab !== i + 1
              ? 'ic:baseline-keyboard-arrow-down'
              : 'ic:twotone-keyboard-arrow-up'
          "
          width="1.5rem"
          class="icon me-2"
          :class="{ activeIcon: activeTab == i + 1 }"
          @click="activeTab !== i + 1 ? (activeTab = i + 1) : (activeTab = 0)"
        ></Icon>
      </div>
    </ul>
    <transition mode="out-in" @before-enter="beforeEnter" @enter="enter">
      <div
        class="info"
        :key="activeTab"
        :class="{ 'mt-3 mt-0': activeTab == i + 1 }"
      >
        <p class="text-dark" v-if="activeTab == i + 1">
          {{ singleProduct?.description }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
import { Icon } from "@iconify/vue";

export default {
  props: ["singleProduct"],
  components: {
    Icon,
  },
  setup() {
    const activeTab = ref(1);
    const headerTap = ["Product Infomation", "Reviews", "Another tab"];

    const beforeEnter = (el) => {
      el.style.opacity = 0;
    };
    const enter = (el) => {
      gsap.to(el, {
        opacity: 1,
        duration: 1,
      });
    };

    return { activeTab, beforeEnter, enter, headerTap };
  },
};
</script>

<style scoped lang="scss">
.container-info {
  background-color: $background_second_card_border;
  width: 100%;

  .tabs-info {
    li {
      cursor: pointer;
      .counter {
        color: $background_third_card;
      }
    }
  }
  .active {
    border-bottom: 4px solid $second_color;
  }
  .active,
  .activeIcon {
    color: $second_color;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 64px;
    left: 0;
    width: 100%;
    padding: 3px;
    background-color: #eff1f2;
  }
  &::before {
    @media ($max_sm) {
      display: none;
    }
  }
}

@media ($max_sm) {
  .container-info {
    width: 100%;
  }
}
</style>
