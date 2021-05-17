import React, { useState, useEffect } from 'react'
import { GetWeather } from './GetWeather.js'
import { withRouter } from 'react-router-dom'

const Forecast = () => {
    const [active, setActive] = useState("forecast")
    const [day, setDay] = useState([])
    const [city, setCity] = useState('delhi')
    return (
        <div>
            {active === "forecast" && <FiveDayCast setDay={setDay} setCity={setCity} setActive={setActive} city={city} />}
            {active === "daycast" && <Daycast day={day} city={city} setActive={setActive} />}
        </div>
    )
}

const FiveDayCast = ({ setDay, setCity, setActive, city }) => {

    const [query, setQuery] = useState(city)
    const [weather, setWeather] = useState({})

    const loadWeather = async (query) => {
        console.log(query);
        const data = await GetWeather(query)
        setWeather(data)
        setCity(query)
    }
    useEffect(() => {
        city === "" && setCity("delhi")
        //console.log(1);
        loadWeather(city)
        //console.log(weather);


    }, [])

    const Search = async (e) => {
        if (e.key === 'Enter') {
            loadWeather(query)

        }
    }
    const cardClicked = (e, item) => {
        setDay(item)
        console.log(item)

        setActive("daycast")
    }

    return (
        <>
            <header>
                <input type="text" className="form-control search-box" placeholder="Please Enter City Name..." value={query} onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={Search} />
            </header>
            <main>
                <div className="row mb-3 text-center main-area">
                    {weather.list && weather.list.filter((item) => item.dt_txt.split(' ')[1] === '12:00:00').map((item, key) => (

                        <div className="card col-lg-2 col-md-3 col-sm-6"
                            onClick={(e) => cardClicked(e, weather.list.filter((e) => e.dt_txt.split(' ')[0] === item.dt_txt.split(' ')[0]))}
                            key={key}>
                            <div className="card-header" >
                                <h3>
                                    {item.dt_txt.split(' ')[0]}

                                </h3>
                                <div>

                                </div>
                            </div>
                            <div className="card-body" >
                                <div className="row">
                                    <span>
                                        {item.main.temp_min}
                                        <sup>o</sup>
                                        <strong>-</strong>

                                        {item.main.temp_max}
                                        <sup>o</sup>
                                    </span>

                                </div>
                                <div>
                                    <img className="city-icon" src={'https://openweathermap.org/img/wn/' + `${item.weather[0].icon}` + '@2x.png'} alt={item.weather[0].description} />
                                    <p>{item.weather[0].description}</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <h2>
                                    <span>{weather.city.name},</span>
                                    {weather.city.country}
                                </h2>
                            </div>
                        </div>

                    )
                    )}
                </div>
            </main>
        </>

    )
}

const Daycast = ({ day, city, setActive }) => {

    const goBack = () => {
        setActive("forecast")
    }
    return (
        <>
            {day &&


                <div className="row">
                    <div className="card card-custom card-back col-md-5" onClick={goBack}>
                        <div className="card-header" >
                            <h3>
                                {city}

                            </h3>
                            <div>

                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <h1>
                                    {day[0].main.temp}
                                    <sup>o</sup>
                                </h1>
                            </div>
                            <div>
                                <img className="city-icon" src={'https://openweathermap.org/img/wn/' + `${day[0].weather[0].icon}` + '@2x.png'} alt={day[0].weather[0].description} />
                                <p>{day[0].weather[0].description}</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <h2><span>{day[0].dt_txt.split(' ')[0]}</span>
                            </h2>
                        </div>
                    </div>
                    <div className="card card-custom col-md-5">
                        <div className="card-header">
                            Detailed Weather
                        </div>
                        <div className="card-body card-detail">
                            <div className="row">
                                <div className="col-6">
                                    <h2>Temprature: </h2>
                                </div>
                                <div className="col-6">
                                    {day[0].main.temp}
                                    <sup>o</sup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Feels Like: </h2>
                                </div>
                                <div className="col-6">
                                    {day[0].main.feels_like}
                                    <sup>o</sup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Humidity: </h2>
                                </div>
                                <div className="col-6">
                                    {day[0].main.humidity}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Pressure: </h2>
                                </div>
                                <div className="col-6">
                                    {day[0].main.pressure}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Wind: </h2>
                                </div>
                                <div className="col-6">
                                    {day[0].wind.speed}Km/h
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default withRouter(Forecast)
