import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function NavBarHome() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand as={Link} to="/">ADIETC</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#deets">Pricing</Nav.Link>
                      <Nav.Link eventKey={2} as={Link} to="/testimonial">
                          Testimonials
                      </Nav.Link>
                      <Nav.Link eventKey={2} as={Link} to="/about">
                          About Us
                      </Nav.Link>
                  </Nav>
                  <Nav>
                      <Nav.Link as={Link} to="/service">Services</Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                          Contact Us
                      </Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                          Get Started
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>

  )
}

export default NavBarHome