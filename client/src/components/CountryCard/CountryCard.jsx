import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <Link to={`/countries/${name}`} className="country__card">
      <div className="country__img">
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className="country__data">
        <h3>{name}</h3>
        <h6>Population: {population}</h6>
        <h6>Region: {region}</h6>
        <h6>Capital: {capital}</h6>
      </div>
    </Link>
  );
};

export default CountryCard;