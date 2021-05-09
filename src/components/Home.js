import React, { useState, useEffect } from 'react'
import { GetDayWise } from './GetWeather'

const Home = () => {
    const [Delhi, setDelhi] = useState({})
    const [Mumbai, setMumbai] = useState({})
    const [Bengaluru, setBengaluru] = useState({})
    const [Kolkata, setKolkata] = useState({})
    const Weatherdata = async () => {
        const WeatherDelhi = await GetDayWise('delhi')
        setDelhi(WeatherDelhi)
        const WeatherMumbai = await GetDayWise('mumbai')
        setMumbai(WeatherMumbai)
        const WeatherBengaluru = await GetDayWise('bengaluru')
        setBengaluru(WeatherBengaluru)
        const WeatherKolkata = await GetDayWise('kolkata')
        setKolkata(WeatherKolkata)
        console.log(Delhi);
    }
    useEffect(() => {
        Weatherdata();
    }, [])
    return (
        <div>
            <div id="carousel-main" className="carousel slide main-area font-lg" data-bs-ride="false">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carousel-main" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carousel-main" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carousel-main" data-bs-slide-to="2"></li>
                    <li data-bs-target="#carousel-main" data-bs-slide-to="3"></li>

                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {Delhi.main && (
                            <div className="w-block">
                                <h2>{Delhi.main.temp}
                                    <sup>o</sup>
                                </h2>
                                <img className="city-icon" src={'https://openweathermap.org/img/wn/' + `${Delhi.weather[0].icon}` + '@2x.png'} alt={Delhi.weather[0].description} />
                                <p>{Delhi.weather[0].description}</p>
                                <h1>
                                    Delhi, India
                                </h1>
                            </div>
                        )}
                    </div>
                    <div className="carousel-item">
                        {Bengaluru.main && (
                            <div className="w-block">
                                <h2>{Bengaluru.main.temp}
                                    <sup>o</sup>
                                </h2>
                                <img className="city-icon" src={'https://openweathermap.org/img/wn/' + `${Bengaluru.weather[0].icon}` + '@2x.png'} alt={Bengaluru.weather[0].description} />
                                <p>{Bengaluru.weather[0].description}</p>
                                <h1>
                                    Bengaluru, India
                                </h1>
                            </div>
                        )}
                    </div>
                    <div className="carousel-item">
                        {Kolkata.main && (
                            <div className="w-block">
                                <h2>{Kolkata.main.temp}
                                    <sup>o</sup>
                                </h2>
                                <img className="city-icon" src={'https://openweathermap.org/img/wn/' + `${Kolkata.weather[0].icon}` + '@2x.png'} alt={Kolkata.weather[0].description} />
                                <p>{Kolkata.weather[0].description}</p>
                                <h1>
                                    Kolkata, India
                                </h1>
                            </div>
                        )}
                    </div>
                    <div className="carousel-item">
                        {Mumbai.main && (
                            <div className="w-block">
                                <h2>{Mumbai.main.temp}
                                    <sup>o</sup>
                                </h2>
                                <img className="city-icon" src={'https://openweathermap.org/img/wn/' + `${Mumbai.weather[0].icon}` + '@2x.png'} alt={Mumbai.weather[0].description} />
                                <p>{Mumbai.weather[0].description}</p>
                                <h1>
                                    Mumbai, India
                                </h1>
                            </div>
                        )}
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carousel-main" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>

                </a>
                <a className="carousel-control-next" href="#carousel-main" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>

                </a>
            </div>
        </div>
    )
}

export default Home
