import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div className='container-full-height'>
            <h1> Dashboard </h1>
             <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;