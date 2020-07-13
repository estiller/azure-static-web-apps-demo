import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar>
      <NavItem>
        <Navbar.Brand as={Link} to="/">
          Library
        </Navbar.Brand>
      </NavItem>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
              Home
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={NavLink} to="/books" activeClassName="active">
              Books
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
