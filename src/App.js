import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Daycast from './components/Daycast'
import Forecast from './components/Forecast'

const App = () => {

  const [day,setDay]=useState({})
  const [city,setCity] = useState('')

  //const iconurl = 'https://openweathermap.org/img/wn/'+`${weather.weather[0].icon}`+'@2x.png'
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to='/forecast' className="navbar-brand font-header">
          <img className="d-inline-block align-text-top" src={'https://openweathermap.org/img/wn/02d@2x.png'} width="50" height="40" alt=""/>
           <strong> Weather</strong>
            </Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/forecast' className="nav-link font-lg">Forecast</Link>
              </li>
              <li className="nav-item">
                <Link to='/daycast' className="nav-link font-lg">Daycast</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" />
        <Route path="/Forecast">
          <Forecast setDay={setDay} setCity={setCity}/>
        </Route>
        <Route path="/Daycast">
          <Daycast day={day} city={city}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
