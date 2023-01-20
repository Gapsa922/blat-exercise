import React from 'react'
import { Routes, Route } from "react-router-dom";
import CountriesList from './CountriesList/CountriesList'
import  CountryDetails  from './CountriesList/CountryDetails/CountryDetails';
import HomePage from "./HomePage/HomePage";
import MainNavBar from './MainNavBar/MainNavBar';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import "./App.css";

function App () {
  return (
    <>      
      <MainNavBar/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries-list" element={<CountriesList />} />
          <Route path="/name/:name" element={<CountryDetails />} />
        </Routes>

      </div>

    </>
  )
}

export default App
