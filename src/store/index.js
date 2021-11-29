import { createStore } from 'vuex';

export default createStore({
  state: {
    base: 'https://api.openweathermap.org/data/2.5/',
    apiKey: '20f515d131e439bc4ca34b669f531518',
    inputValue: '',
    errorFetch: false,
    searchState: false,
    weather: {},
  },
  getters: {
    errorFetch: (state) => state.errorFetch,
    searchState: (state) => state.searchState,
    weather: (state) => state.weather,
  },
  methods: {},
  mutations: {
    setWeather(state, payload) {
      state.weather = payload;
    },
    setSearchState(state, payload) {
      state.searchState = payload;
    },
    setErrorFetch(state, payload) {
      state.errorFetch = payload;
    },
    setInputState(state, payload) {
      state.inputValue = payload.target.value;
    },
  },
  actions: {
    async fetchWeather(state, payload) {
      this.commit('setInputState', payload);
      await fetch(
        `${this.state.base}weather?q=${this.state.inputValue}&units=metric&APPID=${this.state.apiKey}`,
      )
        .then((res) => res.json())
        .then(async (result) => {
          if (result.cod === '404') {
            this.commit('setErrorFetch', true);
          } else {
            this.commit('setWeather', result);
            this.commit('setSearchState', true);
            this.commit('setErrorFetch', false);
          }
        });
    },
  },
  modules: {},
});
