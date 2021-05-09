import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Daycast from './components/Daycast'
import Forecast from './components/Forecast'
import Home from "./components/Home";

const App = () => {

  const [day, setDay] = useState({})
  const [city, setCity] = useState('')

  //const iconurl = 'https://openweathermap.org/img/wn/'+`${weather.weather[0].icon}`+'@2x.png'
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to='/home' className="navbar-brand font-header">
            <img className="d-inline-block align-text-top" src={'https://openweathermap.org/img/wn/02d@2x.png'} width="50" height="40" alt="" />
            <strong> Weather</strong>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/forecast' className="nav-link font-lg">5-Day Forecast</Link>
              </li>
              <li className="nav-item">
                <Link to='/daycast' className="nav-link font-lg">Detailed Forecast</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/Home" >
          <Home />
        </Route>
        <Route exact path="/Forecast">
          <Forecast setDay={setDay} setCity={setCity} />
        </Route>
        <Route path="/Daycast">
          <Daycast day={day} city={city} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
