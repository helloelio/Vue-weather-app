<template>
  <div class='navigation__burger'>
    <button class='burger-button' @click='handleMenu'>///</button>
  </div>
  <div class='burger-menu' v-if='menuStatus'></div>
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
.burger-button {
  position: relative;
  background-color: inherit;
  padding: 5px;
  z-index: 1000;
}

.burger-menu {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  bottom: 0;
  transition: all 1s ease-out;
  animation: open-menu .2s;
  right: 0;
}

@keyframes open-menu {
  10% {
    right: 100%;
  }
  20% {
    right: 90%;
  }
  30% {
    right: 80%;
  }
  40% {
    right: 70%;
  }
  50% {
    right: 60%;
  }
  60% {
    right: 50%;
  }
  70% {
    right: 40%;
  }
  80% {
    right: 30%;
  }
  90% {
    right: 20%;
  }
  100% {
    right: 10%;
  }
}
</style>
