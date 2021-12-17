import React from "react";
import { Button, NavLink } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import InspiredThinking from "../InspiredThinking/InspiredThinking";

const JoinUs = () => {
  return (
    <div className="joinUs-container">
      <div>
        {/* <img
          className="img-fluid"
          src="https://uk.sodexo.com/files/live/sites/com-global/files/16%20Miscellaneous/Join-us-bloc2_1584_1282px.jpg?t=thumbnail1280"
          alt=""
        /> */}
      </div>
      <div className="text-box-full text-center ">
        {/* <InspiredThinking></InspiredThinking> */}
      </div>
          <div className="text-box ms-5">
              
        <h1 className="title-1 fs-1">Join us</h1>
        <p className="text-primary mt-3 fs-5">
          With activities across 56 countries and more than 100 families of
          jobs, we offer a vast array of opportunities for everybody whatever
          their background.
        </p>
        <Button className="mt-4 button-color fs-5"> Find a job</Button> 
        {/* <div> <NavLink {HashLink} to='/news'> Find a job</NavLink></div> */}
          </div>
          <div  className="mt-5 mb-5">
       
      </div>
    </div>
  );
};

export default JoinUs;
