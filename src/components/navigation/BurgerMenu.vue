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

<style scoped class="scss">
.burger-button {
  position: relative;
  background-color: inherit;
  padding: 5px;
  z-index: 1000;
}

.burger-menu {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  bottom: 0;
  right: 100%;

  transition: all 1s ease-out;
  /* animation: open-menu 0.2s; */
  right: 0;
}
.active {
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
