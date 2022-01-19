import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { paths, app } from '../constants'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavigationBar.css"

function NavigationBar() {
  return (
    <>
      <Navbar className="navbar-expand-sm" bg="dark" variant="dark">
        <Navbar.Brand href={paths.home}>{app.name}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={paths.about}>{app.about}</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavigationBar;
