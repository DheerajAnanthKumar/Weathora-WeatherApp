import React from "react";
import weatherIcon from "../assets/Images/weather-icon.png";

const ViewSection = ({ weatherInformation }) => {
  const { weatherType, temp, city_name, humidity, windSpeed, weatherImg } =
    weatherInformation;
  return (
    <>
      <div className="flex items-center flex-col p-5">
        <img
          src={weatherImg}
          className="w-[200px] h-[200px]"
          alt="Weather Image"
        />
        <p className="font-normal text-[20px] pt-2 ">{weatherType}</p>
        <h1 className="font-semibold text-[70px] m-5">{temp}</h1>
        <h2 className="font-normal text-[50px] m-4">{city_name}</h2>
        <div className="flex">
          <div className="mx-5 flex items-center m-10">
            <img src={weatherIcon} className="w-[50px] h-[50px] m-3" />
            <div>
              <p className="font-medium text-[20px] mx-1">{humidity}</p>
              <p className="font-medium text-[20px] mx-1">Humidity</p>
            </div>
          </div>
          <div className="mx-5 flex items-center">
            <img src={weatherIcon} className="w-[50px] h-[50px] m-3" />
            <div>
              <p className="font-medium text-[20px] mx-1">{windSpeed}</p>
              <p className="font-medium text-[20px] mx-1">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSection;
