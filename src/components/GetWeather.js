import axios from 'axios'

const URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast'
const URL_DETAIL = 'http://api.openweathermap.org/data/2.5/weather'
//key->f42dc105cd0c9ddeab9066c3fcaf37a9
const api_key ='f42dc105cd0c9ddeab9066c3fcaf37a9'
const GetWeather = async(query) => {
    const {data} = await axios.get(URL_FORECAST,{
        params:{
            q:query,
            units: 'metric',
            APPID: api_key,
        }
    })
    return data
}
const GetDayWise = async(query) => {
    const {data} = await axios.get(URL_DETAIL,{
        params:{
            q:query,
            units: 'metric',
            APPID: api_key,
        }
    })
    console.log(data);
    return data
}

export  {GetDayWise,GetWeather};