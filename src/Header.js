import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand as={NavLink} to="/" activeStyleName="active">
        Library
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" activeStyleName="active" exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/books" activeStyleName="active">
            Books
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
