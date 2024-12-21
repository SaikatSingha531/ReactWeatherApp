import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import clear from "../assets/clear.png";

import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";

import "./Weather.css";
const Weather = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <h1>
            Weather <TiWeatherPartlySunny />
          </h1>
          <div className="searchbox">
            <input type="text" placeholder="Enter Your City Here" />
            <button>
              <FaSearchLocation />
            </button>
          </div>

          <img src={clear} className="weather-icon" />
          <p className="temperature">25°C </p>
          <p className="city">Kolkata</p>

          <div className="weatherData">
            <div className="humidity">
              <img src={humidity} />
              <p>90%</p>
              <span>Humidity</span>
            </div>

            <div className="wind">
              <img src={wind} />
              <p>5 Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
