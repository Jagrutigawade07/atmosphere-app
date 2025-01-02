import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelsLike: 31.57,
    humidity: 43,
    temp: 31.14,
    tempMax: 31.14,
    tempMin: 31.14,
    weather: "few clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{textAlign: "center" }}>
      <h3>WEATHER APP BY</h3>
      <h2 style={{marginBottom:"10px", color: "red"}}>JAGRUTI</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}