import React, { useState } from 'react'
import { GetWeather } from './GetWeather.js'


const Forecast = ({setDay}) => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const Search = async (e) => {
        if (e.key === 'Enter') {
            const data = await GetWeather(query)
            setWeather(data)
            setQuery('')

        }
    }
    
    return (
        <>
            <input type="text" className="form-control search-box" placeholder="search.." value={query} onChange={(e) => setQuery(e.target.value)}
                onKeyPress={Search} />
            <div className="row ">
                {weather.list && weather.list.filter((item) => item.dt_txt.split(' ')[1] === '00:00:00').map((item) => (

                    <div className="card col-xl-2 col-lg-3 col-md-4 m-2" onClick={setDay(item)}>
                        <div className="card-header" >
                            <h3>
                                {item.dt_txt.split(' ')[0]}

                            </h3>
                            <div>

                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <h1>
                                    {item.main.temp}
                                    <sup>o</sup>
                                </h1>
                            </div>
                            <div>
                                <img className="city-icon" src={'https://openweathermap.org/img/wn/' + `${item.weather[0].icon}` + '@2x.png'} alt={item.weather[0].description} />
                                <p>{item.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <h2><span>{weather.city.name},</span>
                                {weather.city.country}</h2>
                        </div>
                    </div>

                )
                )}
            </div>
        </>
    )
}

export default Forecast
