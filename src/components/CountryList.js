import React, { useState, useEffect } from "react";
import axios from "axios";
async function getCountry(setCountries) {
  const res = await axios.get("https://covid19.mathdro.id/api/countries");
  setCountries(res.data.countries);
}
async function getSpecificCountry(e) {
  const countries = await axios.get(
    `https://covid19.mathdro.id/api/countries/${e.target.value}`
  );
  console.log(countries.data);
}
export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    getCountry(setCountries);
  });

  return (
    <div>
      <p>CountryList</p>
      <select onChange={getSpecificCountry}>
        {countries.map((country, index) => {
          return <option key={index}>{country.name}</option>;
        })}
      </select>
    </div>
  );
}
