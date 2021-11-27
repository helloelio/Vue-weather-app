<template>
  <header class="header">
    <div class="navigation">
      <burger-menu />
      <search-input />
    </div>
  </header>
</template>

<script>
import SearchInput from './SearchInput.vue';
import BurgerMenu from './BurgerMenu.vue';

export default {
  name: 'TheNavigation',
  components: {
    SearchInput,
    BurgerMenu,
  },
};
</script>

<style lang="scss">
.header {
  margin-bottom: 50px;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 20px;
  &__burger {
    width: 20%;
  }
  &__search-box {
    width: 80%;
  }
}
</style>
