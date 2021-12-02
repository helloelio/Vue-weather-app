<template>
  <main class="main">
    <div class="title" v-if="!searchState">Weather App</div>
    <div v-else-if="loading">
      <the-loader />
    </div>
    <div v-else class="weather-box">
      <div class="weather-box__location">
        <div class="location">
          {{ weather.name }}, {{ weather.sys.country }}
        </div>
        <div class="date">
          {{ getDate }}
        </div>
        <div class="time">
          {{ getTime }}
        </div>
      </div>
      <div class="weather-box__info">
        <div class="temp">
          {{ weatherTemp }}°C
          <div class="feels">
            Feels like:
            {{ weatherTempFeelsLike }}°C
          </div>
          <img
            class="weather-icon"
            :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`"
            alt="weather icon"
          />
          <div class="weather">{{ weather.weather[0].main }}</div>
          <div class="wind">Wind speed: {{ weatherWindSpeed }} m/s</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import TheLoader from './TheLoader.vue';

export default {
  name: 'TheMain',

  components: {
    TheLoader,
  },

  computed: {
    getDate() {
      return `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
    },
    getTime() {
      return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    },
    weatherTemp() {
      return Math.round(this.weather.main.temp);
    },
    weatherTempFeelsLike() {
      return Math.round(this.weather.main.feels_like);
    },
    weatherWindSpeed() {
      return Math.round(this.weather.wind.speed);
    },
    ...mapGetters(['weather', 'searchState', 'loading']),
  },
};
</script>

<style scoped lang="scss">
.title {
  color: white;
  font-size: 80px;
  font-weight: 300;
  text-shadow: 1px 2px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(1px 2px black);
}

.weather-box__location {
  margin-bottom: 20px;
  .location {
    color: #fff;
    font-size: 27px;
    font-weight: 500;
    text-shadow: 3px 3px rgb(50 50 70 / 50%);
  }

  .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-shadow: 2px 2px rgb(50 50 70 / 50%);
  }
  .time {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
}

.weather-box__info {
  display: flex;
  justify-content: center;
  .temp {
    position: relative;
    display: inline-block;
    border-radius: 14px;
    padding: 20px;
    width: 72%;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    text-shadow: 3px 6px rgb(50 50 70 / 50%);
    box-shadow: 1px 2px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.2);
    .feels {
      font-size: 25px;
      text-shadow: 2px 2px rgb(50 50 70 / 50%);
    }
    .weather-icon {
      width: 20%;
    }
    .weather {
      color: #fff;
      font-size: 30px;
      font-weight: 700;
      text-shadow: 3px 6px rgb(50 50 70 / 50%);
    }
    .wind {
      color: #fff;
      font-size: 25px;
      font-weight: 500;
      text-shadow: 1px 3px rgb(50 50 70 / 50%);
    }
  }
}
</style>
