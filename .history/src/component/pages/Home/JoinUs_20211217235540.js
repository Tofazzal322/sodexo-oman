import React from "react";
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (

    <div className="joinUs-container">
      <div className="joinUs-banner-main">
        <div className="horizontal-line-top"></div>
        <div className="joinUs-banner-title ">
          <h1 className="title-1 fs-1 fw-bold">Join us</h1>
          <p className="text-primary mt-3 fs-5">
            With activities across 56 countries and more than 100 families of
            jobs, we offer a vast array of opportunities for everybody whatever
            their background.
          </p>
          <Link to="/FindJobs"><Button className="mt-4 button-color fs-5 fw-bold">
            
            Find a job
          </Button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
