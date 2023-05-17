import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          {" "}
          <h2>{props.data.city}</h2>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Last updated:</strong>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="col-4">
          <ul>
            <li>
              <strong>Feels like:</strong> {Math.round(props.data.feelsLike)}°C
            </li>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {Math.round(props.data.wind)}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
