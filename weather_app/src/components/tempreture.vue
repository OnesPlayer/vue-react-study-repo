<template>
  <div>
    <span v-if="activated">{{ Math.round(weather.days[0].hours[date.getHours()].temp) }}<span class="small">°С</span></span>
  </div>
</template>

<script>
export default {
    props: ['weather', 'activated'],
    data() {
      return {
        date: new Date()
      }
    }
}
</script>

<style scoped>
    span {
        font-size: 64px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #ffffff;
        display: flex;
        align-items: flex-start;
    }
    .small {
        font-size: 30px;
    }
</style>