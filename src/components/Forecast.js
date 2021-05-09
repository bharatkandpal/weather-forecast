import React, { useState } from 'react'
import { GetWeather } from './GetWeather.js'


const Forecast = ({ setDay, setCity }) => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const Search = async (e) => {
        if (e.key === 'Enter') {
            const data = await GetWeather(query)
            setWeather(data)
            setCity(e.target.value)
            //setQuery('')

        }
    }

    return (
        <>
            <header>
                <input type="text" className="form-control search-box" placeholder="Please Enter City Name..." value={query} onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={Search} />
            </header>
            <main>
                <div className="row mb-3 text-center main-area">
                    {weather.list && weather.list.filter((item) => item.dt_txt.split(' ')[1] === '00:00:00').map((item) => (

                        <div className="card col-lg-2 col-md-3 col-sm-6" onClick={setDay(item)}>
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
            </main>
        </>
    )
}

export default Forecast
