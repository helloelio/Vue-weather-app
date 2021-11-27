<template>
  <div class="navigation__burger">
    <button class='burger-button' @click="handleMenu">///</button>
  </div>
  <div class='burger-menu' v-if="menuStatus">-------</div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  data() {
    return {
      menuStatus: false,
    };
  },
  methods: {
    handleMenu() {
      this.menuStatus = !this.menuStatus;
      console.log(this.menuStatus);
    },
  },
};
</script>

<style class='scss'>
  .burger-button{
    background-color: inherit;
    padding: 5px;
    z-index: 1000;
  }
  .burger-menu{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
