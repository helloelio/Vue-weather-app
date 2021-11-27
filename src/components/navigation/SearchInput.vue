<template>
  <div class='navigation__search-box'>
    <input
      class='search-box__input'
      type='text'
      placeholder='Write...'
      v-model='searchValue'
      @keypress.enter='getWeather'
    />
  </div>
</template>

<script>

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
</style>
