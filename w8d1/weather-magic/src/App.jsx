import { useEffect, useState } from 'react'
import axios from 'axios'
import { kelvinToCelsius } from './helpers/tempHelper'
import CityList from './components/CityList'
import './App.css';

function App() {
  const [currentCity, setCurrentCity] = useState("")
  const [currentWeather, setCurrentWeather] = useState(null)
  const listOfCities = ['Montréal', 'Toronto', 'Ottawa', 'Oakville', 'Puvirnituq']

  useEffect(() => {
    if (currentCity) {
      const apiKey = '09fd719b4b698ec0260e424f83378e3d'
      axios
        .get(`//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}`)
        .then(res => setCurrentWeather(res.data))
    }
  }, [currentCity])
  return (
    <div className="App">
      <CityList listOfCities={listOfCities} setCurrentCity={setCurrentCity} currentCity={currentCity} />

      {currentWeather && <section>
        <h1>Weather for {currentCity} </h1>
        <p>{kelvinToCelsius(currentWeather.main.temp)}</p>
      </section>}

    </div>
  );
}

export default App;
