import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const Dashboard = () => {
  const { admin } = useAuth()
  
  const drawer = (
    {
    !admin &&(
      
    )
  }
);

  return (
    <div className="container-full-height">
      <Row>
        
        <Col className="dashboard-link-container ps-4" md={2}>
          <h3 className="title-1 mt-3 fw-bold"> Dashboard</h3>
          <hr className="" />

          
          <div className="dashboard-link-div" >
            <Link className="dashboard-link" to="/dashboard/adminDashboard"> Admin Dashboard</Link>
          </div>
          <div className="dashboard-link-div" >
            <Link className="dashboard-link" to="/dashboard/userDashboard"> User Dashboard</Link> 
          </div>
          <div className="dashboard-link-div" >
            <Link className="dashboard-link" to="/dashboard/applicationStatus"> Application Status</Link> 
          </div>
          <div className="dashboard-link-div" >
            <Link className="dashboard-link" to="/dashboard/allApplicationStatus"> All Application Status</Link> 
          </div>
          <div className="dashboard-link-div" >
            <Link className="dashboard-link" to="/dashboard/allServices"> All services</Link>
          </div>
          <div className="dashboard-link-div" >
             <Link className="dashboard-link" to="/dashboard/updateServices">Update Services</Link>
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
