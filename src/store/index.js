import { createStore } from 'vuex';

export default createStore({
  state: {
    base: 'https://api.openweathermap.org/data/2.5/',
    apiKey: '20f515d131e439bc4ca34b669f531518',
    inputValue: '',
    errorFetch: false,
    weather: {},
    searchState: false,
  },
  methods: {},
  mutations: {
    async setInputValue(state, value) {
      state.inputValue = value;
      this.state.searchState = true;
      await fetch(`${this.state.base}weather?q=${value}&units=metric&APPID=${this.state.apiKey}`)
        .then((res) => res.json())
        .then(async (result) => {
          if (result.cod === '404') {
            this.state.errorFetch = true;
          } else {
            this.state.weather = result;
            this.state.errorFetch = false;
          }
        });
    },
  },
  actions: {},
  modules: {},
});
