import React from 'react'
import { Link } from 'react-router-dom';

const CountriesCards = ({props}) => {
  return (
    <>
        <Link to={`/country/${props.id}`}>
          <img alt={props.name} className="" src={props.flag}></img>
          <div>
            <h5>Name: {props.name}</h5>
            <h5>Capital: {props.capital}</h5>
            <p>Timezones: {props.timezones}</p>
            <p>Languages: {props.languages}</p>
          </div>
        </Link>

    </>
  )
}

export default CountriesCards