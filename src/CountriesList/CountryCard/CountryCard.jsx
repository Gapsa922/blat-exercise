import React from 'react'
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
  console.log(country)
  return (
    <>
        <Link to={`/name/${country.name}`}>
          <img alt={country.name} className="" src={country.flag}></img>
          <div>
            <h5>Name: {country.name}</h5>
            <h5>Capital: {country.capital}</h5>
            <div>
              <p>Languages:</p> 
              {country.languages.map((language)=>
              (<p>{language.name}</p>))}
            </div>
          </div>
        </Link>

    </>
  )
}

export default CountryCard