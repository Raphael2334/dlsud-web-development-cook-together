import React from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import "../styles/colors.css";

function NavbarComponent({
  isLoggedIn = false,
  goldCount = "0",
  gemCount = "0",
  onLogout = () => {},
}) {
  return (
    <Navbar expand="lg" className="navbar-ct" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center navbar-brand-ink">
          <img
            src={logo}
            alt="Cook Together"
            width="36"
            height="36"
            className="d-inline-block align-text-top me-2"
          />
          <span>Cook Together</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {!isLoggedIn ? (
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/about" className="text-ct-muted">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" className="text-ct-muted">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts" className="text-ct-muted">
                Contacts
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto align-items-center gap-2 flex-wrap">
              <div className="d-flex gap-2">
                <Button as={Link} to="/inventory" size="sm" className="btn-ct-primary">
                  INVENTORY
                </Button>
                <Button as={Link} to="/shop" size="sm" className="btn-ct-primary">
                  SHOP
                </Button>
              </div>

              <div className="d-flex align-items-center ms-2">
                <span className="chip chip-gold me-2" aria-label="gold">
                  🪙 {String(goldCount)}
                </span>
                <span className="chip chip-gem" aria-label="gems">
                  💎 {String(gemCount)}
                </span>
              </div>

              <Dropdown align="end" className="ms-2">
                <Dropdown.Toggle size="sm" variant="light" id="dropdown-notif" className="text-ct-muted">
                  🔔
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>Notifications</Dropdown.Header>
                  <Dropdown.Item>No new notifications</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="d-flex gap-2 flex-wrap ms-2">
                <Button as={Link} to="/people" size="sm" variant="light" aria-label="people">
                  👥
                </Button>
                <Button as={Link} to="/profile" size="sm" variant="light" aria-label="profile">
                  👤
                </Button>
                <Button as={Link} to="/settings" size="sm" variant="light" aria-label="settings">
                  ⚙️
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={onLogout}
                  aria-label="logout"
                >
                  Logout
                </Button>
              </div>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;