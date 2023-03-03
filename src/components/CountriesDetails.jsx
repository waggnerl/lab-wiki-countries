import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountriesDetails() {
  let { alpha3Code, alpha2Code } = useParams();
  const baseUrl = 'https://ih-countries-api.herokuapp.com/countries';
  const [country, setCountry] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`${baseUrl}/${alpha3Code}`);
        setCountry(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [alpha3Code]);
  return (
    <div>
      {country && (
        <div>
          {console.log(country)}
          <p>{country.name.common}</p>
        </div>
      )}
    </div>
  );
}

export default CountriesDetails;
