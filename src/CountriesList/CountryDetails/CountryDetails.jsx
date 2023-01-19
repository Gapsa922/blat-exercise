import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "../../App.css"
/* import Banner from "../../Banner/Banner"; */

const CountryDetails = () => {

const [country, setCountry] = useState([])
const {capital, region, population, demonym, area, timezones, borders, languages, flag } = country;
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

const [showDescription, setShowDescription] = useState(false)

  return (
    <>
      {/* <Banner /> */}
      <h1>Country Details</h1>
    {/* {console.log(flag)} */}
      <img alt={name} src={flag}></img>
      <div>
        <p>Name: <span>{name}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
      <div>
        {showDescription && 
          <div className="more-info">
              <p>People: <span>{demonym}</span></p>
              <p>Region: <span>{region}</span></p>
              <p>Population: <span>{population}</span></p>
              <p>Area: <span>{area} m²</span></p>
              <p>Languages: {languages && languages.map((language) => (<span>{language.name}</span>))}</p>     
              <p>Timezones: {timezones && timezones.map((time) => (<span>{time} </span>))}</p>
              <p>Borders: {borders && borders.map((border) => (<span>{border}</span>))}</p>
            </div> }
            <div className="countryDetails-buttons">
              <Link to="/countries-list">
                <Button type="button" variant="secondary">Back</Button>
              </Link>
              <Button variant="secondary" type="button" onClick={() => setShowDescription(!showDescription)}>{!showDescription ? 'Click to see more' : 'Click to see less'}</Button>{' '}
            </div>
      </div>
    </>
  )
}


export default CountryDetails;