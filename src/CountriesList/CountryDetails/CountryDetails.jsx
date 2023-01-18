import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Banner from "../../Banner/Banner";

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
      <Banner />
      <Link to="/countries-list"><button type="button">Back</button></Link>
      <h1>Country Details</h1>
    {/* {console.log(flag)} */}
      <img alt={name} src={flag}></img>
      <div>
        <h5>Name: {name}</h5>
        <h5>Capital: {capital}</h5>
      </div>
      <div>
        {showDescription && 
          <div>
              <p>People: {demonym}</p>
              <p>Region: {region}</p>
              <p>Population: {population}</p>
              <p>Area: {area}</p>
              <div>
                <p>Languages: </p>
                {languages && languages.map((language, l) => (<p key={l.name}>{language.name}</p>))}
              </div>        
              <div>
                <p>Timezones: </p>
                {timezones && timezones.map((time, t) => (<p key={t.name}>{time} </p>))}
              </div>
              <div>
                <p>Borders: </p>
                {borders && borders.map((border, b) => (<p key={b.name}>{border}</p>))}
              </div>
            </div> }
            <button type="button" onClick={() => setShowDescription(!showDescription)}>{!showDescription ? 'Click to see more' : 'Click to hide'}</button>
      </div>
    </>
  )
}


export default CountryDetails;