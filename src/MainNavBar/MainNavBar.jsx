import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./MainNavBar.css"


function MainNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"className="logo">Blat Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/countries-list">Countries</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavBar;

/* const NavBar = () => {
  return (
    <nav className="navbar-row-line navbar navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <span>
            <Link to="/">Home</Link>
          </span>
        </li>
        <li className="nav-item">
          <span>
            <Link to="/countries-list">Countries</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar; */