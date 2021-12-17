import React from "react";
import { Col, Row } from "react-bootstrap";

const FindJobs = () => {
  return (
    <div className="container-full-height">
      <div className="findJob-banner-bg">
        <div className="food-banner-main">
          <div className="findJob-banner-title ">
            <h1 className="title-1 fw-bold ">
              Our vacancies
            </h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
          </div>
          <main className="container mt-5">
              <Row>
                  <Col md=>
                      <h1 className="title-1 "> Latest jobs with sodexo</h1>
                  </Col>
                  <Col> Join the Sodexo Community</Col>
              </Row>

          </main>
    </div>
  );
};

export default FindJobs;
