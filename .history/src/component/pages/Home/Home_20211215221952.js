import React from 'react';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import InspiredThinking from '../InspiredThinking/InspiredThinking';
import Login from '../Login/Login';
import About from './About';
import Banner from './Banner';
import JoinUs from './JoinUs';

const Home = () => {
    return (
        <div>
           
            {/* <Header></Header> */}
            
            <Banner></Banner>
            <About></About>
            <JoinUs></JoinUs>
            {/* <Login></Login> */}
            <InspiredThinking></InspiredThinking>
            <Footer></Footer>
        </div>
    );
};

export default Home;