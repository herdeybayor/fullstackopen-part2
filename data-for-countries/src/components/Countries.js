import React from "react";

export default function Countries({ countries }) {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length !== 1) {
    return (
      <div>
        {countries.map((country, index) => (
          <p key={index}>{country.name.common}</p>
        ))}
      </div>
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
