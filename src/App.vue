<template>
  <default-layout>
    <router-view v-slot="slotProps">
      <transition mode="out-in" @before-enter="beforeEnter" @enter="enter">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </default-layout>
</template>

<script>
import DefaultLayout from "./components/layout/DefaultLayout";
import gsap from "gsap";

export default {
  components: {
    DefaultLayout,
  },
  setup() {
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

    return { beforeEnter, enter };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none !important;
}

svg {
  cursor: pointer;
}

.active {
  color: $color_hover_active !important;
}

.link {
  &:hover {
    color: $color_hover_active !important;
    transition: 0.3s;
  }
}

.show-animate-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: top center;
}

.show-animate-leave-active {
  transition: all 0.3s ease-in;
  transform-origin: top center;
}

.show-animate-enter-from,
.show-animate-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
