import React from "react";
import About from "./About";
import Banner from "./Banner";
import JoinUs from "./JoinUs";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <LatestNews></LatestNews>
          <JoinUs></JoinUs>
          
    </div>
  );
};

export default Home;
