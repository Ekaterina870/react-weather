import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h2>City</h2>
          <span className="temperature">12</span>
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
            <li>Description</li>
          </ul>
        </div>

        <div className="col-4">
          <ul>
            <li>Feels like:12°C</li>
            <li>Humidity:%</li>
            <li>Wind:km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
