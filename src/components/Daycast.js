import React from 'react'
const Daycast = ({ day, city, setActive }) => {

    return (
        <>
            {day &&


                <div className="row">
                    <div className="card card-custom col-md-5" onClick={goBack}>
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
                                    {day.main.temp}
                                    <sup>o</sup>
                                </h1>
                            </div>
                            <div>
                                <img className="city-icon" src={'https://openweathermap.org/img/wn/' + `${day.weather[0].icon}` + '@2x.png'} alt={day.weather[0].description} />
                                <p>{day.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <h2><span>{day.dt_txt.split(' ')[0]}</span>
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
                                    {day.main.temp}
                                    <sup>o</sup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Feels Like: </h2>
                                </div>
                                <div className="col-6">
                                    {day.main.feels_like}
                                    <sup>o</sup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Humidity: </h2>
                                </div>
                                <div className="col-6">
                                    {day.main.humidity}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Pressure: </h2>
                                </div>
                                <div className="col-6">
                                    {day.main.pressure}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Wind: </h2>
                                </div>
                                <div className="col-6">
                                    {day.wind.speed}Km/h
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Daycast
