import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/logo.png'
import './AppNavbar.css'
import { LinkContainer } from 'react-router-bootstrap';

const AppNavbar = () =>{
  return (
    <Navbar className="nav" collapseOnSelect fixed='top' expand="lg" variant="dark">
      <Container className="nav-container">
      <Navbar.Brand><img className="logo" src={logo} alt="logo"/></Navbar.Brand>
        <LinkContainer to="/">
          <Navbar.Brand>LAGUEDAE ROVERS FPL STATS</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="nav-expand">
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