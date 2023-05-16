import React, { useState } from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.dafaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather.description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "667d9f573c8af4c33457be5d561a9148";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>Find a forecast</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a City Name"
            autoFocus="on"
            onChange={handleCityChange}
          />

          <input type="submit" value="Search" />
          <input type="submit" value="Current" />
        </form>
        <WeatherInfo data={weatherData} />
        <br />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
