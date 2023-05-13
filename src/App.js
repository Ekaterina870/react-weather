import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

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
