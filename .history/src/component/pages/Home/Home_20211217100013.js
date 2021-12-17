import React from 'react';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import InspiredThinking from '../InspiredThinking/InspiredThinking';
import Login from '../Login/Login';
import About from './About';
import Banner from './Banner';
import JoinUs from './JoinUs';
import LatestNews from './LatestNews';

const Home = () => {
    return (
        <div className=''>
           
            {/* <Header></Header> */}
            
            <Banner></Banner>
            <About></About>
            <LatestNews></LatestNews>
           
            {/* <Login></Login> */}
            {/* <InspiredThinking></InspiredThinking> */}
             <JoinUs></JoinUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;