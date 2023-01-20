import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CountryCard = ({country}) => {
  return (
    <>
      <Link to={`/name/${country.name}`}></Link>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" alt={country.name} src={country.flag}/>
        <Card.Body>
          <Card.Title>Name: {country.name}</Card.Title>
          <Card.Text>
            <h5>Capital: {country.capital}</h5>
          </Card.Text>
          <Link to={`/name/${country.name}`}><Button variant="primary" >Click to see More</Button></Link>
        </Card.Body>
        </Card>
    </>
  )
}

export default CountryCard

