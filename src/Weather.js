import React, { useState } from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      iconUrl:
        "https://easydrawingguides.com/wp-content/uploads/2017/06/how-to-draw-a-sun-featured-image-1200.png",
    });
  }
  function search() {
    const apiKey = "aa4349d1502cfb42ae79dd3817ceotf1";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
