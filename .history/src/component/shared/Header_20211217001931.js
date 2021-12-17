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
    <Navbar collapseOnSelect expand="lg" bg="light" variant="primary">
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
            <NavDropdown title="Our services" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link className="text-decoration" to="propertyServices">
                  Integrator - Property Management Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="foodServices">
                  Food Services & Catering
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="facilityManagement">
                  {" "}
                  Facility Management
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="BenefitsRewards">
                  Benefits & Reward Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="PersonalHomeServices">
                  Personal & Home Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown
              className="text-light"
              title="Inspired thinking"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link className="text-decoration" to="facilityManagement">
                  {" "}
                  Insights
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="facilityManagement">
                  {" "}
                  Case Studies
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="facilityManagement">
                  {" "}
                  News
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Careers" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link className="text-decoration" to="facilityManagement">
                  {" "}
                  Reasons to join
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="facilityManagement">
                  {" "}
                  Explore career paths
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="facilityManagement">
                  {" "}
                  Develop with us
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="FindJobs">
                  
                  Find a job
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration" to="facilityManagement">
                  {" "}
                  Careers blogs
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              as={HashLink}
              className="nav-items text-primary"
              to="home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="nav-items text-primary"
              to="/dashboard"
            >
              Dashboard
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
