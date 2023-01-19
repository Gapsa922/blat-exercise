import React from "react";
/* import "./SearchBar.css" */

const SearchBar = ({ handleChange, searchValue }) => {
  return (
    <div className="searchBar">
      <h2>Search</h2>
      <br/>
      <input
        className="searchBar-input"
        type="search"
        name="search"
        value={searchValue}
        placeholder="Search your Country"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;