<template>
  <div class='navigation__search-box'>
    <input
      class='search-box__input'
      type='text'
      placeholder='Write...'
      v-model='searchValue'
      @keypress.enter='getWeather'
    />
    <transition name='slide-fade'>
      <div className='error-msg' v-if='this.$store.state.errorFetch'>Please enter right city name
      </div>
    </transition>
  </div>
</template>

<script>

// <div className='error-msg' v-if='this.$store.state.errorFetch'>Please enter right city name</div>

export default {
  name: 'SearchInput',

  data() {
    return {
      searchValue: '',
    };
  },

  methods: {
    getWeather() {
      this.$store.commit('setInputValue', this.searchValue);
    },
  },
};

</script>

<style lang='scss'>
.search-box {
  &__input {
    font-family: 'M PLUS 1 Code', sans-serif;
    width: 80%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    color: #000;
    box-shadow: 0 2px 2px 2px rgb(0 0 0 / 20%);
    background-color: hsla(0, 0%, 100%, 0.5);
    margin-bottom: 10px;
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
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
