import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountryCard from './CountryCard/CountryCard'

const CountriesList = () => {

    const [countries, setCountries] = useState([])

    const getCountries = () => {
        axios
        .get('https://restcountries.com/v2/all/')
        .then((response) => {console.log(response.data); setCountries(response.data)})
    }

    useEffect(() => {
        getCountries();
      }, []);
    

  return (
    <div>
        <h1>Countries List</h1>        
        {countries.map((country) => (<CountryCard country={country} key={country.id}/> ) )}

    </div>
  )
}

export default CountriesList;

