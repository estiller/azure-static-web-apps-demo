import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Header({ principal }) {
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
      <Navbar.Collapse className="justify-content-end">
        {(() => {
          switch (principal) {
            case undefined:
              return;
            case null:
              return (
                <Nav.Link href="/.auth/login/github">
                  Login with GitHub
                </Nav.Link>
              );
            default:
              return (
                <>
                  <Navbar.Text>Hi {principal.userDetails}!</Navbar.Text>
                  <Nav.Link href="/.auth/logout">Logout</Nav.Link>
                </>
              );
          }
        })()}
      </Navbar.Collapse>
    </Navbar>
  );
}
