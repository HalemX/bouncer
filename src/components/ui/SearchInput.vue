<template>
  <div class="search-input">
    <input
      type="text"
      :placeholder="placeHolder"
      :class="{ 'w-50 p-4': search, promoCodeInputStyle: promoCode }"
    />
    <button :class="{ 'py-4 px-5': search, promoCodeBtnStyle: promoCode }">
      {{ textBtn }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["placeHolder", "textBtn", "search", "promoCode"],
};
</script>

<style scoped lang="scss">
input {
  border: 1px solid rgba($color_border_nav_footer, 0.1);
  outline: none;
  padding: 1rem 1.5rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  @media ($max_sm) {
    padding: 1rem 1rem !important;
  }
}
button {
  border: 1px solid $second_color;
  outline: none;
  padding: 1rem 1.5rem;
  background-color: $second_color;
  color: white;
  border-top-right-radius: 5px;
  @media ($max_sm) {
    padding: 1rem 1rem !important;
  }
}

@media ($max_sm) {
  input,
  button {
    padding: 1rem;
  }
}
@media (max-width: 991px) {
  .promoCodeInputStyle {
    width: 70%;
  }
  .promoCodeBtnStyle {
    width: 30%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
