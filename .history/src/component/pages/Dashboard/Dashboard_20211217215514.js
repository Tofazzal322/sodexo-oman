import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container ps-4" md={2}>
          <h1> Dashboard</h1>
          <div>
            <Link className="dashboard-link" to="/dashboard/adminDashboard"> Admin Dashboard</Link>
          </div>
          <div>
            <Link className="dashboard-link" to="/dashboard/userDashboard"> User Dashboard</Link> 
          </div>
          <Link className="dashboard-link" to="/dashboard/updateServices">Update Services</Link> 
          <Link className="dashboard-link" to="/dashboard/allServices"> All services</Link>
        </Col>
        <Col md={10}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
