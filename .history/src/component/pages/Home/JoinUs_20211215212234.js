import React from "react";
import { Button } from "react-bootstrap";

const JoinUs = () => {
  return (
    <div className="join-us-container">
      <div>
        <img
          className="img-fluid"
          src="https://uk.sodexo.com/files/live/sites/com-global/files/16%20Miscellaneous/Join-us-bloc2_1584_1282px.jpg?t=thumbnail1280"
          alt=""
        />
          </div>
          <div>
              
          </div>
          <div className="text-box ms-5">
              <h1>Join us</h1>
              <p>With activities across 56 countries and more than 100 families of jobs, we offer a vast array of opportunities for everybody whatever their background.</p>
              <Button> Find a job</Button>
          </div>
    </div>
  );
};

export default JoinUs;
