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
    
  },[])

  return (
    <div className="bg-light">
      <div className="findJob-banner-bg">
        <div className="food-banner-main">
          <div className="findJob-banner-title ">
            <h1 className="title-1 fw-bold ">Our vacancies</h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <main className="container mt-5">
        <Row className="bg-white p-3">
          <Col md={8}>
            <h1 className="title-1 "> Latest jobs with sodexo</h1>

{/* //////////////////Vacancies ////////////////////////////////////// */}
            <div className="mt-3 job-div">
              <h4 className="mt-1 title-1 fw-bold">
                Security Officer (Days) COVID-19 Testing
              </h4>
              <div className="d-flex g-5 w-100 fw-bold mt-3">
                <div className="w-100">
                  <p>
                    <FontAwesomeIcon icon={faSearchLocation} />
                    <span className="ms-2"> Al khuwair, Muscat, OMAN </span>
                    <br /> <FontAwesomeIcon icon={faMoneyCheck} />
                    <span className="ms-2">OMR Monthly</span> <br />
                    <FontAwesomeIcon icon={faClock} />
                    <span className="ms-2">Fixed Term -Full Time</span>
                  </p>
                </div>
                <div className="text-align-right w-100 ">
                  <p className="">
                    <span className="me-2">
                      Apply by 22 December, 2021
                    </span>
                    <FontAwesomeIcon icon={faCalendar} />
                    <br />
                    <span className="me-2">
                      Posted on 10 December, 2021
                    </span>
                    <FontAwesomeIcon icon={faCalendar} />
                  </p>
                  <Link  to="/home"> Apply For Job</Link>
                </div>
              </div>
            </div>

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
