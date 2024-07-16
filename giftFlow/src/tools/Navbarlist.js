import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../styles/NavBar.css";

const NavBar = ({ currentUser, onLogout }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" id="navbar-custom" variant="dark">
      <Navbar.Brand as={Link} to="/" id="navbar-brand-custom">
        GiftFlow
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact id="nav-link-home">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" id="nav-link-products">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/ai-help" id="nav-link-ai-help">
            AI help me!
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" id="nav-link-about">
            About Us
          </Nav.Link>
        </Nav>
        <Nav>
          {!currentUser ? (
            <Nav.Link as={NavLink} to="/login" id="nav-link-signin">
              Sign In
            </Nav.Link>
          ) : (
            <NavDropdown title={currentUser} id="navbarScrollingDropdown" alignRight>
              <NavDropdown.Item as={Link} to="/gifts-Page" id="dropdown-item-children">
                Children List
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/questions-page" id="dropdown-item-my-children">
                My Children
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login" onClick={onLogout} id="dropdown-item-signout">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
