import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CountryDetails = () => {

const [country, setCountry] = useState([])
const {name, capital, region, population, demonym, area, timezones, borders, languages, flag, independent} = country;

const { id } = useParams();

const getCountry = () => {
  axios.get(`https://restcountries.com/v2/all/country/${id}`).then((response) => setCountry(response.data))
}

useEffect(()=> {
  getCountry();
},[id])

  return (
    <>
      <Link to="/countries-list">Back</Link>
      <h1>Country Details</h1>
      <img alt={name} src={flag}></img>
      <div>
        <h5>Name: {name}</h5>
        <p>{demonym}</p>
        <h5>Capital: {capital}</h5>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>Timezones: {timezones}</p>
        <p>Borders: {borders}</p>
        <p>Languages: {languages}</p>
        <p>Independent: {independent}</p>
      </div>

    </>
  )
}


export default CountryDetails;