import { useEffect, useState } from "react";
import FindCountries from "./components/FindCountries";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);

  const filteredCountries = !name
    ? []
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
      );

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <FindCountries name={name} onChange={(e) => setName(e.target.value)} />

      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
