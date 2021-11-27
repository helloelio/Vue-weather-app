<template>
  <main class="main">
    <div class='title' v-if="!weatherStatus">Weather App</div>
    <div v-else class="weather-box">
      <div class="weather-box__location">
        <div class="location">
          {{ weather.name }}, {{ weather.sys.country }}
        </div>
        <div class="date">Saturday 27 November 2021</div>
      </div>
      <div class="weather-box__info">
        <div class="temp">
          {{ Math.round(weather.main.temp) }}°C
          <div class="feels">Feels like: {{ Math.round(weather.main.feels_like) }}</div>
          <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`" alt=''>
          <div class="weather">{{ weather.weather[0].main }}</div>
          <div class="wind">Wind speed: {{ Math.round(weather.wind.speed) }} m/s</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'TheMain',
  computed: {
    weatherStatus() {
      return this.$store.state.searchState;
    },
    weather() {
      return this.$store.state.weather;
    },
  },
};
</script>

<style lang="scss">
.title{
  color: white;
  font-size: 80px;
  font-weight: 300;
  text-shadow: 1px 2px rgba(0,0,0, 0.5);
  filter: drop-shadow(1px 2px black);
}
.location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-shadow: 3px 3px rgb(50 50 70 / 50%);
}
.date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  text-shadow: 2px 2px rgb(50 50 70 / 50%);
}

.temp {
  position: relative;
  display: inline-block;
  margin: 30px auto;
  width: 80%;
  border-radius: 8px;
  padding: 15px 25px;
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 6px rgb(50 50 70 / 50%);
  box-shadow: 1px 2px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
}
.feels {
  font-size: 30px;
  text-shadow: 2px 2px rgb(50 50 70 / 50%);
}
.wind {
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  text-shadow: 1px 3px rgb(50 50 70 / 50%);
}
.weather {
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  text-shadow: 3px 6px rgb(50 50 70 / 50%);
}
.weather-description{
  font-size: 28px;
  text-shadow: 2px 2px rgb(50 50 70 / 50%);
}
</style>
