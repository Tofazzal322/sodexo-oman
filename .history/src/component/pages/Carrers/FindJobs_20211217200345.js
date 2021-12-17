import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FindJobs = () => {
  return (
    <div className="container-full-height">
      <div className="findJob-banner-bg">
        <div className="food-banner-main">
          <div className="findJob-banner-title ">
            <h1 className="title-1 fw-bold ">Our vacancies</h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <main className="container mt-5">
        <Row>
          <Col md={8}>
            <h1 className="title-1 "> Latest jobs with sodexo</h1>
          </Col>
          <Col md={4}>
            <h1 className="title-1">Join the Sodexo Community</h1>

            <div className="login-section">
              <div className="login-register-btn">
                <Link className="login-register-btn" to="/login">
                  
                  Login / Register
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default FindJobs;