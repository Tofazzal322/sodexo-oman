import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FindJobs = () => {
  return (
    <div className="bg-light">
      <div className="findJob-banner-bg">
        <div className="food-banner-main">
          <div className="findJob-banner-title ">
            <h1 className="title-1 fw-bold ">Our vacancies</h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <main className="container mt-5">
        <Row className="bg-white p-3">
          <Col md={8}>
            <h1 className="title-1 "> Latest jobs with sodexo</h1>
            <div className="mt-3 job-div">
              <h4 className="mt-1 ">
               
                Security Officer (Days) COVID-19 Testing
              </h4>
              <div className="d-flex g-5 w-100">
                <div className="w-100">
                <p> Al khuwair, Muscat, OMAN <br />OMR Monthly <br />Fixed Term -Full Time </p>
                
              </div>
              <div className="text-align-right w-100">
                <p className=""> Apply by 22 December, 2021 <br /> Posted on 10 December, 2021</p>
                
              </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <h1 className="title-1">Join the Sodexo Community</h1>

            <div className="login-section mb-5">
              <div className="login-register-btn mb-3">
                <Link className="login-register-btn mb-3" to="/loginRegister">
                  Login / Register
                </Link>
              </div>
              <p>
                Join our community to receive real-time email and profile alerts
                when a potential opportunity becomes available. You can also
                search and apply for jobs and connect with like minded people.
              </p>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default FindJobs;