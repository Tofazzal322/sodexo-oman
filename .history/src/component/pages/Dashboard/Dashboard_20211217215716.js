import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container ps-4" md={2}>
          <h1> Dashboard</h1>
          <div className="dashboard-link" >
            <Link  to="/dashboard/adminDashboard"> Admin Dashboard</Link>
          </div>
          <div className="dashboard-link" >
            <Link  to="/dashboard/userDashboard"> User Dashboard</Link> 
          </div>
          <div className="dashboard-link" >
             <Link  to="/dashboard/updateServices">Update Services</Link>
         </div> 
          <div className="dashboard-link" >
            <Link  to="/dashboard/allServices"> All services</Link>
          </div>
        </Col>
        <Col md={10}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
