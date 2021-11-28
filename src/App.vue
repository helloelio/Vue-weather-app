<template>
  <div class="container" :class="getCurrentHour >= 16 || getCurrentHour <= 8 ? 'night' : 'day'">
    <the-navigation />
    <the-main />
  </div>
</template>

<script>
import TheNavigation from './components/navigation/TheNavigation.vue';
import TheMain from './components/main/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
    TheMain,
  },
  computed: {
    getCurrentHour() {
      return new Date().getHours();
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100;300;400;500;700&display=swap');
#app {
  background-position: center;
  font-family: 'M PLUS 1 Code', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
.container {
  background-size: cover;
  min-height: 100vh;
  &.day {
    background-image: url('./assets/after_noon.webp');
  }
  &.night {
    background-image: url('./assets/night.webp');
  }
}
</style>
