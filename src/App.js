import React from 'react'
import { Routes, Route } from "react-router-dom";
import CountriesList from './CountriesList/CountriesList'
import  CountryDetails  from './CountriesList/CountryDetails/CountryDetails';
import HomePage from "./HomePage/HomePage";

function App () {
  return (
    <div >      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries-list" element={<CountriesList />} />
        <Route path="/name/:name" element={<CountryDetails />} />
      </Routes>

    </div>
  )
}

export default App
