import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faClock,
  faICursor,
  faLocationArrow,
  faMoneyCheck,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const FindJobs = () => {
  const [findJobs, setFindJobs] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
    .then(data=>setFindJobs(data))
  },[])

  return (
    <div className="bg-light">
      <div className="findJob-banner-bg">
        <div className="food-banner-main">
          <div className="findJob-banner-title ">
            <h1 className="title-1 fw-bold "> Our vacancies (<span className="text-danger"> Total {findJobs.length}</span>) </h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <main className="container mt-5">
        <Row className="bg-white p-3">
          <Col md={8}>
            <h1 className="title-1 "> Latest jobs with sodexo</h1>

            {/* //////////////////Vacancies ////////////////////////////////////// */}
            
            {
              findJobs.map(jobs=> )
            }
            

            {/* //////////////////Vacancies ////////////////////////////////////// */}
            
          </Col>
          <Col md={4}>
            <div className="mt-3">
              <h2 className="title-1"> Sodexo Community</h2>
            </div>

            <div className="login-section mb-5">
              <div className="login-register-btn mb-3">
                <Link className="login-register-btn mb-3" to="/loginRegister">
                  Login / Register
                </Link>
              </div>
              <p>
                Join our community to receive real-time email and profile alerts
                when a potential opportunity becomes available. You can also
                search and apply for jobs and connect with like minded people.
              </p>
            </div>
          </Col>
        </Row>
        
      </main>
    </div>
  );
};

export default FindJobs;
