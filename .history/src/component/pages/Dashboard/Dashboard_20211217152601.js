import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div className='container-full-height'>
            <Row>
                <Col md={2}>

                </Col>
                <Col md={}></Col>
            </Row>
            <h1> Dashboard </h1>
             {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Dashboard;