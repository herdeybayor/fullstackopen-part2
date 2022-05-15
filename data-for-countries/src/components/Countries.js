import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "./Country";
import Weather from "./Weather";

export default function Countries({ countries }) {
  const [showIndex, setShowIndex] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});

  // Fetch weather
  useEffect(() => {
    if (showIndex.length === 0 || countries.length === 0) return;
    if (countries.length === 1) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${countries[0].capital}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setCurrentWeather(response.data);
        });
    }

    if (showIndex.length === 1 && countries.length !== 1) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            countries[showIndex[0]].capital
          }&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setCurrentWeather(response.data);
        });
    }
    console.log("hello");
  }, [countries, showIndex]);

  // Countries toggler
  function showToggler(index) {
    if (showIndex.includes(index)) {
      return setShowIndex([]);
    }
    return setShowIndex([index]);
  }

  // Large filter
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  // Multiple filter
  if (countries.length !== 1 && countries.length > 1) {
    return (
      <>
        {countries.map((country, index) => (
          <div key={index}>
            <p>
              {country.name.common}{" "}
              <button onClick={() => showToggler(index)}>
                {!showIndex.includes(index) ? "Show" : "Hide"}
              </button>
            </p>

            {showIndex.includes(index) && (
              <Country country={country}>
                <Weather currentWeather={currentWeather} />
              </Country>
            )}
          </div>
        ))}
      </>
    );
  }

  // Single Country
  return (
    <>
      {countries.map((country, index) => (
        <Country key={index} country={country}>
          <Weather currentWeather={currentWeather} />
        </Country>
      ))}
    </>
  );
}
