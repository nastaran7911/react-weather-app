import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
          This project is coded by Nastaran and is
          <a
            href="https://github.com/nastaran7911/react-weather-app"
            target="_blank"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
