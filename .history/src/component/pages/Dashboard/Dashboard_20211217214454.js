import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container " md={2}>
          <h1> Dashboard</h1>
          <Link to="/dashboard/adminDashboard"> Admin Dashboard</Link> <br />
          <Link to="/dashboard/userDashboard"> User Dashboard</Link> <br />
          <Link to="/dashboard/updateServices">Update Services</Link> <br />
          <Link to="/dashboard/allServices"> All services</Link>
        </Col>
        <Col md={10}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
