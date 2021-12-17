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
        <Col className="register-section con">
          <div className="">
            <h1 className="title-1"> New users register with</h1>
            <Register></Register>
          </div>
        </Col>
        <Col className="login-section">
          <div>
            <h1 className="title-1">Existing users login with</h1>
            <Login></Login>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginRegister;
