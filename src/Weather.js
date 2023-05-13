import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Find a forecast</h1>
      <br />
      <form>
        <input type="search" placeholder="Enter a City Name" />

        <input type="submit" value="Search" />
        <input type="submit" value="Current" />
      </form>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Last updated:</li>
                <li>Day & Time</li>
                <li>Description</li>
              </ul>
            </div>
            <div className="col-6">
              <h2>City</h2>
              12°C
              <img
                src="https://easydrawingguides.com/wp-content/uploads/2017/06/how-to-draw-a-sun-featured-image-1200.png"
                width="20%"
                alt="Sunny weather"
              ></img>
            </div>
          </div>
        </div>
        <div className="col-6">
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
