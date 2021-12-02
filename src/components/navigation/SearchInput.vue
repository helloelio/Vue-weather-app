<template>
  <div class="navigation__search-box">
    <input
      class="search-box__input"
      type="text"
      v-model="searchValue"
      @keypress.enter="fetchWeather"
      @click="log"
    />
    <transition name="slide-fade" class="">
      <div class="error-msg" v-if="errorFetch">
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
    log() {
      console.log('a');
    },
    ...mapActions(['fetchWeather']),
  },
};
</script>

<style scoped lang="scss">
.navigation {
  &__search-box {
    position: relative;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-15px);
  }
}
.search-box {
  &__input {
    background: url('../../assets/search-icon.svg') no-repeat scroll 10px 10px;
    font-family: 'Montserrat', sans-serif;
    padding: 10px 0 10px 35px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 15px;
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
    font-size: 15px;
    padding: 10px 10px 10px 40px;
    box-shadow: 0 2px 2px 2px rgb(0 0 0 / 50%);
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  &__input:focus .search-icon {
    display: inline-block;
  }
}

.search-box__input:focus .search-icon {
  display: inline-block;
}
.error-msg {
  position: absolute;
  left: 0;
  font-size: 18px;
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
