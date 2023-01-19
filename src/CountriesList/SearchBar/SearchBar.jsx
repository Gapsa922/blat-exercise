import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "../../App.css";

const SearchBar = ({ handleChange, searchValue }) => {
  return (
    <>
      <br/>
      <InputGroup className="mb-3" size="lg">
        <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            placeholder="Search your Country"
            value={searchValue}
        />
        </InputGroup>
    </>
  );
};

export default SearchBar;

