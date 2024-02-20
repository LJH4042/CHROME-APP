import React, {useEffect, useState} from 'react'
import '../css/List.css'

function Weather() {
  const [weather, setWeather] = useState()

  const getWeather = position => {
    const lat = position.coords.latitude
    const lng = position.coords.longitude

    const API_KEY = 'API_KEY'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
      })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getWeather)
  }, [])

  return (
    <div>
      <span className="weatherName">{weather?.name}</span>
      <div className="weatherDiv">
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
          alt="아이콘"
          className="weatherIcon"
        />
        <span className="weatherTemp">{`${weather?.main.temp}°C`}</span>
      </div>
    </div>
  )
}

export default Weather
