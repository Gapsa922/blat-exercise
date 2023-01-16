import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CountriesList = () => {

    const [countries, setCountries] = useState([])

    const getCountries = () => {
        axios.get('https://restcountries.com/v2/all').then((response) => setCountries(response.data))
    }

    useEffect(() => {
        getCountries();
      }, []);
    

  return (
    <div>
        <h1>Countries List</h1>

    </div>
  )
}

export default CountriesList