import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/forecast'
//key->f42dc105cd0c9ddeab9066c3fcaf37a9
const api_key ='f42dc105cd0c9ddeab9066c3fcaf37a9'
export const GetWeather = async(query) => {
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units: 'metric',
            APPID: api_key,
        }
    })
    return data
}

export const GetDayWise = async(query) => {
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units: 'metric',
            APPID: api_key,
        }
    })
    return data
}

