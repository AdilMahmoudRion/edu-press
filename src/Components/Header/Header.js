import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand to="/home">EduPress</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/home">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/newsFeed">News</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Course">Course</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contactUs">Contact us</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
