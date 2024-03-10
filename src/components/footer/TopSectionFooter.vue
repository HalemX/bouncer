<template>
  <div
    class="top-footer-section container mt-3 d-flex flex-wrap flex-lg-nowrap mb-5 pb-5"
  >
    <div class="main-part w-75 me-2">
      <h1 class="mb-3">Bouncer</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever.Since the 1500s, when an unknown printer.
      </p>
    </div>
    <div class="second-part me-5">
      <h4 class="mb-3">Follow Us</h4>
      <p class="mb-3">
        Since the 1500s, when an unknown printer took a galley of type and
        scrambled.
      </p>
      <div class="icons d-flex align-items-center mt-4 mb-4">
        <Icon icon="logos:facebook" width="1.7rem" class="me-5" />
        <Icon icon="logos:twitter" width="1.7rem" />
      </div>
    </div>
    <div class="third-part">
      <h4 class="mb-3">Contact Us</h4>
      <div>
        <span>My Company , 4578 Marmora Road, Glasgow</span>
        <span>D04 89GR</span>
        <span>Call us now: 0123-456-789</span>
        <span>Email: support@whatever.com</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.top-footer-section {
  @include border-bottom(1px, solid, 0.3);
}
.main-part {
  h1 {
    color: $background_third_card;
  }
  @media ($min_md) {
    p {
      width: 75%;
    }
  }
}
</style>
