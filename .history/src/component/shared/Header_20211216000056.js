// import { Button } from "bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  return (
    <Navbar collapseOnSelect  expand="lg" bg="light" variant="primary">
      <Container>
        <Navbar.Brand to="home">
          <img
            src="https://uk.sodexo.com/files/live/sites/com-uk/files/About%20us/sodexo-logo.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5">
            {/* <Nav.Link as={HashLink} className="nav-items text-light" to="home">
              Home
            </Nav.Link> */}

            <NavDropdown title="Our services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Integrator - Property Management Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Food Services & Catering
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Facility Management
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Benefits & Reward Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Personal & Home Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown
              className="text-light"
              title="Inspired thinking"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Insights</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Case Studies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">News</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Careers" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Reasons to join
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Explore career paths
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Develop with us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Find a job</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Careers blogs
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={HashLink} className="nav-items text-primary" to="home">
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="nav-items text-primary"
              to="/insig"
            >
              Insights
            </Nav.Link>

            {!user.email ? (
              <Nav.Link
                as={HashLink}
                className="nav-items text-primary"
                to="login"
              >
                {" "}
                Login
              </Nav.Link>
            ) : (
              <Button
                className=" nav-items-btn text-primary "
                onClick={logOut}
                variant="button"
              >
                Logout
              </Button>
            )}

            <Nav.Link eventKey={2} href="#memes">
              {user.displayName}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
