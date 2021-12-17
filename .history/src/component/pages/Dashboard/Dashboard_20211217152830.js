import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container" md={2}>
          <h1> Dashboard</h1>
        </Col>
        <Col md={10}></Col>
      </Row>
      
    </div>
  );
};

export default Dashboard;