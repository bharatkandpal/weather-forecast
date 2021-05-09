import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Forecast from './components/Forecast'
import Home from "./components/Home";

const App = () => {



  //const iconurl = 'https://openweathermap.org/img/wn/'+`${weather.weather[0].icon}`+'@2x.png'
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand font-header">
            <img className="d-inline-block align-text-top" src={'https://openweathermap.org/img/wn/02d@2x.png'} width="50" height="40" alt="" />
            <strong> Weather</strong>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/forecast' className="nav-link font-lg">5-Day Forecast</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <PageFooter/>
      <Switch>
        <Route exact path="/" >
          <Home/>
          </Route>
        <Route  path="/Forecast">
          <Forecast />
        </Route>
        
      </Switch>
    </Router>
  );
}
const PageFooter=()=>{
  return (
    <div className="footer">
      <div><a href="mailto:kandpalbharat83@gmail.com" className="footer-w">Bharat Kandpal</a></div>
      <div>Contact: 8191960391</div>
    </div>
  )
}

export default App;
