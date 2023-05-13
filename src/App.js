import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <button className="btn btn-primary">Hello</button>
        <footer>
          This project was coded by Ekaterina Volkova{" "}
          <a
            href="https://github.com/Ekaterina870/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            and is open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
