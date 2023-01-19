import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountryCard from '../CountriesList/CountryCard/CountryCard'


import "../App.css"


const Slider = () => {

    const [countries, setCountries] = useState([])


    const getCountries = () => {
        axios
        .get('https://restcountries.com/v2/all/')
        .then((response) => setCountries(response.data))
    }


    useEffect(() => {
        getCountries();
      }, []);

  return (
    <div className="scroll-bg">
        <div className="scroll-div">
            <div className="scroll-obj">
                <h3>Relevant Countries</h3>
                {countries.map(country => <CountryCard className="card" country={country} key={country.name}/> )}
            </div>
        </div> 
    </div>
  )
}

export default Slider