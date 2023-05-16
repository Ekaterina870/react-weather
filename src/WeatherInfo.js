import React from "react";
import FormattedDate from "./FormattedDate";

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
          <img
            src={props.data.iconUrl}
            width="100%"
            alt={props.data.description}
          ></img>
        </div>
        <div className="col-4">
          <ul>
            <li>Last updated:</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="col-4">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
