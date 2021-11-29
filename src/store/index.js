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
      state.searchState = true;
      state.errorFetch = false;
    },
    setInputState(state, payload) {
      state.inputValue = payload.target.value;
      this.state.setState = true;
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
            this.state.errorFetch = true;
          } else {
            setTimeout(this.commit('setWeather', result), 5000);
          }
        });
    },
  },
  modules: {},
});
