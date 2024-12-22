import React, { useEffect , useState , useRef } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import clear from "../assets/clear.png";
import cloude from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png"
import rin from "../assets/rain.png"
import snow from "../assets/snow.png"

import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";

import "./Weather.css";
const Weather = () => {

  const inputRef = useRef()

  const [weatherData, setweatherData] = useState(false);

  const allIcons={
    "01d":clear,
    "01n":clear,
    "02d":cloude,
    "02n":cloude,
    "03d":cloude,
    "03n":cloude,
    "04d":drizzle,
    "04n":drizzle,
    "09d":rin,
    "09n":rin,
    "10d":rin,
    "10n":rin,
    "13d":snow,
    "13n":snow,
  }

  const search = async(city)=>{
    if (city === ""){
      alert("Enter Your City Here")
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok){
        alert("Incorrect City")
      }
      const icon = allIcons[data.weather[0].icon] || clear;
      setweatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon:icon,
      })
    } catch (error) {
      
    }
  }


  useEffect(()=>{
    search("kolkata");
  },[])

  return (
    <>
      <div className="main">
        <div className="container">
          <h1>
            Weather <TiWeatherPartlySunny />
          </h1>
          <div className="searchbox">
            <input ref={inputRef} type="text" placeholder="Enter Your City Here" />
            <button onClick={()=>search(inputRef.current.value)}>
              <FaSearchLocation />
            </button>
          </div>

          <img src={weatherData.icon} className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C </p>
          <p className="city">{weatherData.location}</p>

          <div className="weatherData">
            <div className="humidity">
              <img src={humidity} />
              <p>{weatherData.humidity}%</p>
              <span>Humidity</span>
            </div>

            <div className="wind">
              <img src={wind} />
              <p>{weatherData.windSpeed} Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
