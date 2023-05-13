import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>Find a forecast</h1>
        <br />
        <form>
          <input type="search" placeholder="Enter a City Name" autoFocus="on" />

          <input type="submit" value="Search" />
          <input type="submit" value="Current" />
        </form>
        <br />
        <div className="row">
          <div className="col-4">
            {" "}
            <h2>{weatherData.city}</h2>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°C</span>
            <img
              src="https://easydrawingguides.com/wp-content/uploads/2017/06/how-to-draw-a-sun-featured-image-1200.png"
              width="20%"
              alt="Sunny weather"
            ></img>
          </div>
          <div className="col-4">
            <ul>
              <li>Last updated:</li>
              <li>Day & Time</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>

          <div className="col-4">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aa4349d1502cfb42ae79dd3817ceotf1";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
