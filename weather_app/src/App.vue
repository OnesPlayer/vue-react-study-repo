<script>
  import cities from './components/cities.vue'
  import tempreture from './components/tempreture.vue'
  import weather_cards from './components/weather_cards.vue'
  import weather_api from './api/get_weather_api.js'

  export default{
    data() {
      return {
        weather: null,
        activated: false,
        city: ''
      }
    },
    methods: {
      get_temp: async function(city) {
        this.city = city
        this.activated = false
        const result = await weather_api.get_weather(city)
        this.weather = result
        this.activated = true
      }
    },
    components: {
      cities,
      tempreture,
      weather_cards
    },
  }
</script>

<template>
  <div class="main_div">
    <div class="upper_div">
      <tempreture :weather="weather" :activated="activated" />
      <cities @send_city="get_temp" />
    </div>
    <weather_cards :weather="weather" :activated="activated" :city="city" />
  </div>
</template>

<style>
  body {
    font-family: "Roboto", sans-serif !important;
    font-weight: 500 !important;
    margin: 0;
  }
</style>

<style scoped>
  .main_div {
    background: url('./assets/bckg.png') no-repeat;
    width: 100%;
    height: 824px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .upper_div {
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1320px;
    width: 100%;
  }
</style>