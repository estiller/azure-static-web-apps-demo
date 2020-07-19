import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand as={Link} to="/">
        Library
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/books">
            Books
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
