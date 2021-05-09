import React from 'react'

const Daycast = ({ day, city }) => {
    console.log(day);
    return (
        <>
            <div className="box font-lg">

                <div className="row">
                    <div className="card card-custom col-5" >
                        <div className="card-header" >
                            <h3>
                                {day.dt_txt.split(' ')[0]},{city}

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
                            <h2><span>{day.main.humidity}|
                     {day.main.pressure}</span>
                            </h2>
                        </div>
                    </div>
                    <div className="card card-custom col-5">
                        <div className="card-header">
                            Detailed Weather
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <h2>Temprature: </h2>
                                </div>
                                <div className="col-6">
                                    {day.main.temp}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Temprature: </h2>
                                </div>
                                <div className="col-6">
                                    {day.main.temp}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>humidity: </h2>
                                </div>
                                <div className="col-6">
                                    {day.main.humidity}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>pressure: </h2>
                                </div>
                                <div className="col-6">
                                    {day.main.pressure}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Daycast
