import React from "react";

export default function Weather({ currentWeather }) {
  return (
    <>
      {currentWeather.main && (
        <>
          <p>temperature {currentWeather.main.temp} Celcius</p>
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>wind {currentWeather.wind.speed} m/s</p>
        </>
      )}
    </>
  );
}
