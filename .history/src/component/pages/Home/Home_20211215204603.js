import React from 'react';
import Header from '../../shared/Header';
import Login from '../Login/Login';
import About from './About';
import Banner from './Banner';
import JoinUs from './JoinUs';

const Home = () => {
    return (
        <div>
           
            {/* <Header></Header> */}
            <JoinUs></JoinUs>
            <Banner></Banner>
            <About></About>
            {/* <Login></Login> */}
        </div>
    );
};

export default Home;