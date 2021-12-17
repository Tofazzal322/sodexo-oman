import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container ps-4" md={2}>
          <h1> Dashboard</h1>
          <Link clas to="/dashboard/adminDashboard"> Admin Dashboard</Link> <br />
          <Link clas to="/dashboard/userDashboard"> User Dashboard</Link> <br />
          <Link clas to="/dashboard/updateServices">Update Services</Link> <br />
          <Link clas to="/dashboard/allServices"> All services</Link>
        </Col>
        <Col md={10}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
