<template>
  <div class="navigation__burger">
    <button class="burger-button" @click="this.$emit('handleMenu')">///</button>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
};
</script>

<style scoped lang="scss">
.navigation__burger {
  .burger-button {
    position: relative;
    background-color: inherit;
    padding: 5px;
    z-index: 1000;
  }
}
</style>
