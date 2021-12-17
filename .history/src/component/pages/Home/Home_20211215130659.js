import React from 'react';
import Header from '../../shared/Header';
import Login from '../Login/Login';
import JoinUs from './JoinUs';

const Home = () => {
    return (
        <div>
            <h1> Home page</h1>
            <Header></Header>
            <JoinUs></JoinUs>
            {/* <Login></Login> */}
        </div>
    );
};

export default Home;