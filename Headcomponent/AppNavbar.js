
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

import Login from '../Logincomponent/Login';
import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import  { useRef } from "react";
// import '../css/Navbar.css'; 

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

 

 
  return (
<>
<Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
        <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assests/image.png"
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          E-bax
        </Navbar.Brand>

          {/* Toggle button for small screens */}
          {!expanded ? (
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="d-lg-none"
              onClick={handleToggle}
            />
          ) : (
            <Button
              variant="outline-secondary"
              onClick={handleClose}
              className="d-lg-none"
            >
              ✖
            </Button>
          )}

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={handleClose}>
                Home
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={handleClose}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={handleClose}>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={handleClose}>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick={handleClose}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/* Link to Login Page */}
              <Nav.Link as={Link} to="/login" onClick={handleClose}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}

export default AppNavbar