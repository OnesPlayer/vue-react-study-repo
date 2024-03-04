'use strict'
import axios from "axios"

const API_KEY = 'LEL8GWMA8WVNJ3TSHT74Y23HK'
axios.get('http11', )
async function get_weather(city) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&elements=datetime,temp,tempmax,tempmin,conditions,icon&key=${API_KEY}`
    try {
        const result = await axios.get(url)
        const weather = {
            days: result.data.days.slice(0, 7)
        }
        return weather
    } catch(error) {
        console.log(error)
        alert('Неправильно введён город. Вывожу на экран погоду города Оттава')
        const error_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Оттава/next7days?unitGroup=metric&elements=datetime,temp,tempmax,tempmin,conditions&key=${API_KEY}`
        const result2 = await axios.get(error_url)
        const weather = {
            days: result2.data.days.slice(0, 7)
        }
        return weather
    }
}

export default{
    get_weather
}