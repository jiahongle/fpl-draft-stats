import React from 'react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './AppNavbar.css'
import { LinkContainer } from 'react-router-bootstrap';

const AppNavbar = () =>{
  return (
    <Navbar className="color-nav" collapseOnSelect fixed='top' expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="/">LAGUEDAYE ROVERS FPL STATS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <LinkContainer to="/HeadToHead">
            <Nav.Link>Head To Head</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/PointBreakdowns">
            <Nav.Link>Point Breakdowns</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Transfers">
            <Nav.Link>Transfers</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Progressions">
            <Nav.Link>Progressions</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default AppNavbar