<template>
  <div class="navigation__search-box">
    <img class="search-icon" src="../../assets/search-icon.svg" alt="" />
    <input
      class="search-box__input"
      type="text"
      placeholder="Write..."
      v-model="searchValue"
      @keypress.enter="fetchWeather"
    />
    <transition name="slide-fade">
      <div className="error-msg" v-if="errorFetch">
        Please enter right city name
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchInput',

  data() {
    return {
      searchValue: '',
    };
  },
  computed: {
    ...mapGetters(['errorFetch']),
  },
  methods: {
    ...mapActions(['fetchWeather']),
  },
};
</script>

<style scoped lang="scss">
.navigation {
  &__search-box {
    position: relative;
    margin-bottom: 10px;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
}
.search-box {
  &__input {
    font-family: 'M PLUS 1 Code', sans-serif;
    width: 80%;
    padding: 10px 0 10px 40px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    color: #000;
    box-shadow: 0 2px 2px 2px rgb(0 0 0 / 20%);
    background-color: hsla(0, 0%, 100%, 0.5);
    transition: all 0.2s ease-out;
  }

  &__input::placeholder {
    color: rgb(80, 80, 80);
  }

  &__input:focus {
    box-shadow: 0 2px 2px 2px rgb(0 0 0 / 50%);
    background-color: hsla(0, 0%, 100%, 0.7);
  }
}

.error-msg {
  position: absolute;
  left: 0;
  font-size: 22px;
  font-weight: 500;
  color: red;
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
