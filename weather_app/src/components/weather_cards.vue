<script>
export default {
  props: ['weather', 'activated', 'city'],
  data() {
    return {}
  }
}
</script>

<template>
  <div v-if="activated" class="outter_div">
    <span>Прогноз на неделю - {{ city }}</span>
    <div class="cards_div">
      <div class="card" v-for="(day, index) in weather.days" :key="index">
        <span class="date">{{ day.datetime.slice(5).replace('-', '.') }}</span>
        <img v-if="day.icon.includes('clear')" src="../assets/sun 1.svg" alt="sry" />
        <img
          v-else-if="day.icon.includes('cloudy')"
          src="../assets/cloudy 1.svg"
          alt="sry"
        />
        <img v-else-if="day.icon.includes('rain')" src="../assets/rain 1.svg" alt="sry" />
        <img v-else-if="day.icon.includes('snow')" src="../assets/snowy 1.svg" alt="sry" />
        <img v-else src="../assets/lightning 1.svg" alt="sry" />
        <span class="temp"
          >{{ Math.round(day.tempmax) }} / {{ Math.round(day.tempmin)
          }}<span class="small">°С</span></span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  padding-left: 50px;
}
.outter_div {
  max-height: 320px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.cards_div {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 0 50px;
  padding-bottom: 15px;
  max-width: 1400px;
  width: 100%;
}
.card {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  max-width: 202px;
  height: 208px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
img {
  max-width: 64px;
  max-height: 64px;
  align-self: center;
}
.date {
  padding: 15px 0 0 20px;
  align-self: start;
  font-size: 20px;
  font-weight: 500;
}
.temp {
  margin-top: 10px;
  padding: 0;
  display: flex;
  align-self: center;
  justify-self: end;
}
.small {
  align-self: flex-start;
  font-size: 20px;
  padding: 0;
}
</style>
