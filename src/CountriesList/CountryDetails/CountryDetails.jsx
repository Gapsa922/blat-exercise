import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CountryDetails = () => {

const [country, setCountry] = useState([])
const {capital, region, population, demonym, area, timezones, borders, languages, flag, independent} = country;
/* console.log(country) */
const { name } = useParams();

const getCountry = async () => {
  let data = await axios
  .get(`https://restcountries.com/v2/name/${name}`)
  setCountry(data.data[0]);
}


useEffect(()=> {
  getCountry();
},[name])

  return (
    <>
      <Link to="/countries-list"><button type="button">Back</button></Link>
      <h1>Country Details</h1>
    {console.log(flag)}
      <img alt={name} src={flag}></img>
      <div>
        <h5>Name: {name}</h5>
{/*         <p>{demonym}</p>
        <h5>Capital: {capital}</h5>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>Timezones: {timezones}</p>
        <p>Borders: {borders}</p>
        <p>Languages: {languages}</p>
        <p>Independent: {independent}</p> */}
      </div>

    </>
  )
}


export default CountryDetails;