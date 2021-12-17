import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container" md={2}>
                  <h1> Dashboard</h1>
                  <Link to='/adminDashboard'> Admin Dashboard</Link>
        </Col>
              <Col md={10}>
                  <O
        </Col>
      </Row>
      
    </div>
  );
};

export default Dashboard;
