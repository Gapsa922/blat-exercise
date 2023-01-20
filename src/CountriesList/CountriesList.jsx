import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountryCard from './CountryCard/CountryCard'
import "../App.css"
import SearchBar from "./SearchBar/SearchBar"
import Slider from '../Slider/Slider'

const CountriesList = () => {

    const [countries, setCountries] = useState([])

    const [searchValue, setSearchValue] = useState("")

    const getCountries = () => {
        axios
        .get('https://restcountries.com/v2/all/')
        .then((response) => setCountries(response.data))
    }

    const handleChange = (event) => {
      setSearchValue(event.target.value);
    };

    useEffect(() => {
        getCountries();
      }, []);

  return (
    <div className="container">
      <h1>Countries List</h1>
      <SearchBar handleChange={handleChange} searchValue={searchValue} />
      <div className="container-slider-container">
        <div className="container-slider">
          <Slider />
        </div>
          <div className="container-countries">
            {countries.filter(country => country.name.toLowerCase().startsWith(searchValue.toLowerCase())).map(country => <CountryCard className="card" country={country} key={country.name}/> )}
          </div>        
        </div>
      </div>
  )
}

export default CountriesList;

