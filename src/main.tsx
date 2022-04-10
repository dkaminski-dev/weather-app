import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { WeatherContext } from "./state/weather"
import { WeatherViewModel } from "./viewModel/weatherViewModel"

ReactDOM.render(
  <React.StrictMode>
    <WeatherContext.Provider value={new WeatherViewModel()}>
      <App />
    </WeatherContext.Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
)
