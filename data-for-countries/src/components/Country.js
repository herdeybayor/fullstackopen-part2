import React from "react";

export default function Country({ country, children }) {
  return (
    <div>
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
      <img src={country.flags.png} alt="flag" />
      <h3>weather in {country.capital}</h3>
      {children}
    </div>
  );
}
