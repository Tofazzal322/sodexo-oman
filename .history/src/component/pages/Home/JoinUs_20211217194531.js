import React from "react";
import { Button, NavLink } from "react-bootstrap";

const JoinUs = () => {
  return (
    // <div className="joinUs-container">
    //   <div className="text-box-full text-center "></div>
    //   <div className="text-box ms-5">
    //     <h1 className="title-1 fs-1 fw-bold">Join us</h1>
    //     <p className="text-primary mt-3 fs-5">
    //       With activities across 56 countries and more than 100 families of
    //       jobs, we offer a vast array of opportunities for everybody whatever
    //       their background.
    //     </p>
    //     <Button className="mt-4 button-color fs-5 fw-bold"> Find a job</Button>
    //   </div>
    //   <div className="mt-5 mb-5"></div>
    // </div>

    // FindJobs

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
          <Button className="mt-4 button-color fs-5 fw-bold">
            
            Find a job
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
