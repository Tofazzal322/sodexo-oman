import React from "react";
import { Col, Row } from "react-bootstrap";
import Register from "../Register/Register";
import Login from "./Login";

const LoginRegister = () => {
  return (
    <div className="">
      <div className="property-banner-bg">
        <div className="food-banner-main">
          <div className="food-banner-title ">
            <h1 className="title-1 fw-bold ">
              Welcome to the Sodexo Careers Centre
            </h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>

      <Row className="">
              <Col>
                  <h1> New users register with</h1>
                  <Register></Register>
        </Col>
              <Col>
                  existing 
          <Login></Login>
        </Col>
      </Row>
    </div>
  );
};

export default LoginRegister;