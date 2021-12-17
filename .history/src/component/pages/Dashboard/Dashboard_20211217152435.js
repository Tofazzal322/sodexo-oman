import React from 'react';
import { Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div className='container-full-height'>
            <Row
            <h1> Dashboard </h1>
             {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Dashboard;