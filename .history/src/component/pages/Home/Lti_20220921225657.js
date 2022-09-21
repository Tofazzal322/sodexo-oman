import React, { useEffect, useRef, useState } from 'react';
import { Col } from 'react-bootstrap';

const Lti = () => {
const [ltiDays, setLtiDays] = useState("Aug 3, 2022");
  let interval = useRef();
  let showDate = new Date();

  let displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();

  const previousBest = 1610 + "  " + "Days";
  const lastAccident = "03/08/2022";

  const startDays = () => {
    const countDays = new Date("Aug 3, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - countDays;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (distance < 0) {
        //stop count
        clearInterval(interval.current);
      } else {
        setLtiDays(days);
      }
    }, 1000);
  };

  useEffect(() => {
    startDays();
    return () => {
      clearInterval(interval);
    };
  });



    return (
        <div className="board-column">
      <div>
        <h6 className="text-center heading-decoration mb-2 pt-2 pt-2 mt-2">
          HSE STATISTIC BOARD
        </h6>
      </div>
      <Container>
        <Row className="row-decoration">
          <Col md={6} xs={12} className="">
            <h5 className="title-decoration pt-1 mt-2">TODAY'S DATE</h5>
          </Col>
          <Col md={6} xs={12} fluid className="">
            <input
              className="text-center text-decoration text-color"
              type="text"
              value={displayTodaysDate}
              readOnly="true"
              overFollow="hidden"
            />
          </Col>
        </Row>
        <Row className="mt-2 row-decoration">
          <Col md={6} xs={12} className="">
            <div>
              <h5 className="best text-danger title-decoration mt-2 pt-2">
                DAYS WITHOUT LTI{" "}
              </h5>
            </div>
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mt-2">
              <input
                className="text-center text-decoration text-danger"
                type="text"
                value={ltiDays + ("  " + "Days")}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-2 row-decoration">
          <Col md={6} xs={12} className="">
            <div>
              <h5 className="text-color title-decoration mt-2">
                DATE LAST ACCIDENT
              </h5>
            </div>
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mt-2">
              <input
                className="text-center text-decoration text-color"
                type="text"
                value={lastAccident}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-2 row-decoration">
          <Col md={6} xs={12} className="">
            <div>
              <h5 className="text-color title-decoration mt-2">
                PREVIOUS BEST{" "}
              </h5>
            </div>
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mt-2">
              <input
                className="text-center text-decoration text-color"
                type="text"
                value={previousBest}
              />
            </div>
          </Col>
        </Row>
        <Row className="hse-logo-row">
          <Col md={6} xs={12}>
            <img
              className=" hse-logo  mt-4 "
              src="https://s3.amazonaws.com/sdxuk-uploads/kKKSsf0g0336ia2hnASpPSdmm85Jbq7S5dh827rb7kRtw1llSdwra0okRsd.jpg"
              alt=""
            />
          </Col>
          <Col md={6} xs={12}>
            <img
              className=" hse-logo2  mt-3"
              src="https://s32891.pcdn.co/wp-content/uploads/2017/12/zeromindset.png"
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col className="mt-1 pt-3" md={6} xs={12}>
            {/* <h5> Develop by</h5>
            <small>Tofazzal Hossain</small> */}
          </Col>
          <Col md={6} xs={12} className="sodexo-logo ">
            <img
              className=" pt-2 w-100 pe-2"
              src="https://www.sodexojobs.co.uk/application/assets/20/images/logo.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default Lti;