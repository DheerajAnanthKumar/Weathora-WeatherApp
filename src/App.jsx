import React, { useState, useEffect } from "react";
import ViewSection from "./Components/ViewSection";
import weathoralogo from "../src/assets/Images/weathora-logo.png";

import cloudsImg from "../src/assets/Images/clouds.png";
import clearImg from "../src/assets/Images/clear.png";
import rainImg from "../src/assets/Images/rain.png";
import drizzleImg from "../src/assets/Images/drizzle.png";
import mistImg from "../src/assets/Images/mist.png";
import snowImg from "../src/assets/Images/snow.png";
import smokeImg from "../src/assets/Images/smoke.png";
import hazeImg from "../src/assets/Images/haze.png";

const App = () => {
  const [info, setInfo] = useState(false);
  const [cityName, setCityName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [weatherInformation, setWeatherInformation] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    if (backgroundImage) {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    } else {
      document.body.style.backgroundImage = "none";
    }
  }, [backgroundImage]);

  function handleChange(e) {
    setCityName(e.target.value);
  }

  const fetchCityImage = async (city) => {
    const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
    const url = `https://api.unsplash.com/search/photos?query=${city}&per_page=1&orientation=landscape&client_id=${UNSPLASH_API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length <= 0) {
        return null;
      } else {
        const cityImg = data.results[0].urls.full;
        return cityImg;
      }
    } catch (error) {
      console.log("Error fetching the city photo:", error);
      return null;
    }
  };

  const handleSearch = async () => {
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const trimmedCity = cityName.trim();
    if (!trimmedCity) {
      setErrorMessage("Please enter a city name.");
      return;
    }

    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      `${cityName}` +
      "&appid=" +
      `${WEATHER_API_KEY}` +
      "&units=metric";

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.message === "city not found") {
        setWeatherInformation(null);
        setInfo(false);
        setErrorMessage("City not found. Try again.");
      } else {
        setErrorMessage("");
        setInfo(true);
        setCityName("");

        const cityImg = await fetchCityImage(data.name);
        setBackgroundImage(cityImg);

        const weatherType = data.weather[0].main;
        const temp = Math.round(data.main.temp) + "°C";
        const city_name = data.name + ", " + data.sys.country;
        const humidity = data.main.humidity + "%";
        const windSpeed = data.wind.speed + "Km/h";

        let weatherImg = "";

        switch (data.weather[0].main) {
          case "Clouds":
            weatherImg = cloudsImg;
            break;
          case "Clear":
            weatherImg = clearImg;
            break;
          case "Rain":
            weatherImg = rainImg;
            break;
          case "Drizzle":
            weatherImg = drizzleImg;
            break;
          case "Mist":
            weatherImg = mistImg;
            break;
          case "Snow":
            weatherImg = snowImg;
            break;
          case "Smoke":
            weatherImg = smokeImg;
            break;
          case "Haze":
            weatherImg = hazeImg;
            break;
          default:
            weatherImg = "";
        }

        setWeatherInformation({
          weatherType,
          temp,
          city_name,
          humidity,
          windSpeed,
          weatherImg,
        });
      }
    } catch (error) {
      setErrorMessage(`Error - ${error.message}`);
    }
  };

  return (
    <>
      <div className="flex flex-col w-[700px] rounded-4xl p-6 custom-gradient items-center">
        <div className="flex items-center mb-2">
          <p
            className="text-5xl text-gray-800 tracking-wide"
            style={{ fontFamily: "'Sacramento', cursive" }}
          >
            Weathora - Weather App
          </p>
        </div>
        <div className="flex h-[100px] justify-between items-center">
          <input
            className="bg-white w-[475px] h-[50px] rounded-3xl p-5 focus:outline-none mx-5 shadow-xl"
            type="text"
            placeholder="Enter your city name..."
            value={cityName}
            onChange={handleChange}
          />
          <button
            className="shadow-xl rounded-3xl w-[50px] h-[50px] m-[5px] bg-white hover:cursor-pointer hover:bg-[#5dbea3] hover:text-white"
            onClick={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <p className="text-red-500">{errorMessage}</p>
        {info && weatherInformation && (
          <ViewSection weatherInformation={weatherInformation} />
        )}
      </div>
    </>
  );
};

export default App;
