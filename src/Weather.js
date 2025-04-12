import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter City"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="data:image/png;base64,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"
            alt="cloudy"
          />
        </div>
        6°C
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation : 15%</li>
          <li>Humidity : 72%</li>
          <li>Wind : 13 km/h</li>
        </ul>
      </div>
      hello from weather
    </div>
  );
}
