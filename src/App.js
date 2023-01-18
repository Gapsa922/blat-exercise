import React from 'react'
import { Routes, Route } from "react-router-dom";
import CountriesList from './CountriesList/CountriesList'
import  CountryDetails  from './CountriesList/CountryDetails/CountryDetails';
import HomePage from "./HomePage/HomePage";

function App () {
  return (
    <div >
      <h1>blat project</h1>
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/countries-list" element={<CountriesList />}></Route>
        <Route path="/country/:id" element={<CountryDetails />}></Route>
      </Routes>

    </div>
  )
}

export default App
