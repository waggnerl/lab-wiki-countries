import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  const baseUrl = 'https://ih-countries-api.herokuapp.com/countries';
  const [countries, setCountries] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(baseUrl);
        setCountries(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    countries && (
      <div className="App">
        {countries.map((el, index) => (
          <div key={index}>
            <Link to={`countries/${el.alpha3Code}/${el.alpha2Code}`}>
              {console.log(el.name.common)}
              {el.name.common}
            </Link>
          </div>
        ))}
      </div>
    )
  );
}

export default CountriesList;
