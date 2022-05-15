import React, { useState } from "react";

export default function Countries({ countries }) {
  const [showIndex, setShowIndex] = useState([]);

  function showToggler(index) {
    if (showIndex.includes(index)) {
      return setShowIndex(showIndex.filter((item) => item !== index));
    }
    return setShowIndex([...showIndex, index]);
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length !== 1 && countries.length > 1) {
    return (
      <>
        {countries.map((country, index) => (
          <div key={index}>
            <p>{country.name.common}</p>
            <button onClick={() => showToggler(index)}>
              {!showIndex.includes(index) ? "Show" : "Hide"}
            </button>
            {showIndex.includes(index) && (
              <>
                <h1>{country.name.common}</h1>
                <div>
                  <p>capital {country.capital}</p>
                  <p>area {country.area}</p>
                </div>
                <h3>languages:</h3>
                <ul>
                  {Object.keys(country.languages).map((lang, index) => (
                    <li key={index}>{country.languages[lang]}</li>
                  ))}
                </ul>
                <img src={country.flags.png} alt="" />
              </>
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {countries.map((country, index) => (
        <div key={index}>
          <h1>{country.name.common}</h1>
          <div>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
          </div>
          <h3>languages:</h3>
          <ul>
            {Object.keys(country.languages).map((lang, index) => (
              <li key={index}>{country.languages[lang]}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt="" />
        </div>
      ))}
    </>
  );
}
